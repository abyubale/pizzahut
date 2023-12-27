import { Spinner } from "react-bootstrap";
import PizzaCard from "../PizzaCard/PizzaCard";
import { useSelector } from "react-redux";

const AllPizza = () => {
  const data = useSelector((state) => state.apidata.pizzaData);

  const status = useSelector((state) => state.apidata.status);

  const isError = useSelector((state) => state.apidata.error);

  const items = data.map((item) => {
    return (
      <PizzaCard
        key={item.id}
        id={item.id}
        img={item.img}
        description={item.description}
        name={item.name}
        price={item.price}
        veg={item.veg}
        extratoppingsveg={item.extratoppingsveg}
        extratoppingsnonveg={item.extratoppingsnonveg}
      />
    );
  });

  return (
    <div>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ marginTop: "150px" }}
      >
        {items}
      </div>

      <div className="text-center mt-3" style={{ width: "98vw" }}>
        {status === "loading" && (
          <Spinner
            animation="border"
            role="status"
            style={{ width: "200px", height: "200px" }}
          />
        )}

        {status === "failed" && (
          <p className="text-danger fs-4 mt-3">
            Something went wrong. Please try again later! {isError}
          </p>
        )}
      </div>
    </div>
  );
};

export default AllPizza;
