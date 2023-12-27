import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../AddSubItem/addSubSlice";
import PropTypes, { string } from "prop-types";
import styles from "./AddSubItem.module.css";

const AddSubItem = ({ quantity, id, sizeAndCrust }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.addSubItemContainer}>
      <div className={styles.buttonContainer}>
        <Button
          className={styles.quantityButton}
          onClick={() => dispatch(decreaseQuantity({ id, sizeAndCrust }))}
        >
          -
        </Button>
        <span style={{ fontSize: "1rem", margin: "0 10px" }}>{quantity}</span>
        <Button
          className={styles.quantityButton}
          onClick={() => dispatch(increaseQuantity({ id, sizeAndCrust }))}
        >
          +
        </Button>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => dispatch(removeItem({ id, sizeAndCrust }))}
      >
        <i className="bi bi-trash-fill fs-4 text-dark"></i>
      </button>
    </div>
  );
};

AddSubItem.propTypes = {
  quantity: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  sizeAndCrust: string.isRequired,
};

export default AddSubItem;
