/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../AddSubItem/AddSubSlice";
import { useContext, useEffect, useState } from "react";
import PropTypes, { bool, number, string } from "prop-types";
import { UserDataContext } from "../../contexts/UserDataContexts";

const PizzaCard = ({ id, img, description, name, price, veg }) => {
  const dispatch = useDispatch();
  const [sizeAndCrust, setSizeAndCrust] = useState("mediumPan");
  const data = useSelector((state) => state.apidata.pizzaData);

  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  const [option5, setOption5] = useState(false);
  const [option6, setOption6] = useState(false);

  const { ToastShowHandler, showToast } = useContext(UserDataContext);

  const [finalPrice, setFinalPrice] = useState();
  const priceCalc = (value, id) => {
    const val = value;
    const uniquID = id;

    const pizzaInfo = data.filter((item) => item.id === uniquID);

    const obj = pizzaInfo[0].sizeandcrust[0];

    for (const key in obj) {
      if (key === val && obj[key] !== null) {
        setFinalPrice(obj[key][0].price);
      }
    }
  };

  const disable = (id) => {
    const uniquID = id;
    const options = data.filter((item) => item.id === uniquID);
    const availOptions = options[0].sizeandcrust[0];

    for (const key in availOptions) {
      if (availOptions[key] == null) {
        if (key === "mediumPan") setOption1(true);
        if (key === "mediumstuffedcrustcheesemax") setOption2(true);
        if (key === "mediumstuffedcrustchickenseekhkebab") setOption3(true);
        if (key === "medium stuffed crust kebab") setOption4(true);
        if (key === "mediumstuffedcrustvegkebab") setOption5(true);
        if (key === "medium stuffed crust-veg kebab") setOption6(true);
      }
    }
  };

  useEffect(() => {
    disable(id);
  }, []);

  return (
    <div
      className="m-4 p-4 border border-3 d-flex justify-content-center"
      style={{ maxWidth: "310px", minHeight: "620px" }}
    >
      <div>
        <div>
          <img src={img} style={{ borderRadius: "10px", maxWidth: "260px" }} />
        </div>
        <div style={{ minHeight: "20%" }}>
          <h3 className="d-inline">{name}</h3>
          {""}
          <span> &nbsp;{veg ? "veg" : "non-veg"}</span>
        </div>
        <div
          style={{ maxWidth: "80%", minHeight: "20%" }}
          className="d-flex align-items-center"
        >
          <p>{description}</p>
        </div>
        <p>select your size & crust</p>
        <select
          style={{ maxWidth: "250px", padding: "10px" }}
          onChange={(e) => {
            setSizeAndCrust(e.target.value);
            priceCalc(e.target.value, id);
          }}
        >
          <option className="" value="mediumPan" hidden={option1}>
            Medium Pan
          </option>
          <option value="mediumstuffedcrustcheesemax" hidden={option2}>
            Medium Stuffed Crust Cheese Max
          </option>
          <option value="mediumstuffedcrustchickenseekhkebab" hidden={option3}>
            Medium Stuffed Crust Chicken Seekh Kabab
          </option>
          <option value="medium stuffed crust kebab" hidden={option4}>
            Medium Stuffed Crust Kabab
          </option>
          <option value="mediumstuffedcrustvegkebab" hidden={option5}>
            Medium Stuffed Veg Kabab
          </option>
          <option value="medium stuffed crust-veg kebab" hidden={option6}>
            Medium Stuffed Crust Veg Kabab
          </option>
        </select>
        <button
          style={{
            width: "250px",
            backgroundColor: "green",
            padding: "10px",
            borderRadius: "15px",
            border: "none",
          }}
          onClick={() => {
            ToastShowHandler();
            dispatch(
              addItem({
                id,
                img,
                name,
                price,
                veg,
                sizeAndCrust,
                finalPrice,
              })
            );
          }}
          className="d-block mt-4"
          disabled={showToast}
        >
          <div
            className=" d-flex justify-content-between align-items-center"
            style={{ backgroundColor: "green", fontSize: "20px" }}
          >
            <div></div>
            <div className="text-white">
              <span> Add</span>
            </div>
            <div>
              <span className="text-white pe-2 ">
                $ {finalPrice ? finalPrice : price}
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

PizzaCard.propTypes = {
  img: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  description: string.isRequired,
  name: string.isRequired,
  price: number.isRequired,
  veg: bool.isRequired,
};

export default PizzaCard;
