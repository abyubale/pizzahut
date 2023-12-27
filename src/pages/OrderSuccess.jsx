const OrderSuccess = () => {
  return (
    <div style={{ minHeight: "75vh", marginTop: "30px" }}>
      <div className="container-fluid">
        <div className="container text-center">
          <h1>Thank you.</h1>
          <p className="lead w-lg-50 mx-auto">
            Your order has been placed successfully.
          </p>
          <p className="w-lg-50 mx-auto fs-5">
            Your order number is #ITW9237427634826. We will immediatelly process
            your order and it will be delivered in 30 minutes.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <img src="https://fashionroad-animesh-0041.vercel.app/order-placed.gif" />
        </div>
      </div>
    </div>
  );
};
export default OrderSuccess;
