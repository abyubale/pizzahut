const Support = () => {
  const containerStyle = {
    padding: "100px",
  };

  const sectionStyle = {
    marginBottom: "20px",
  };

  const questionStyle = {
    fontWeight: "bold",
    marginBottom: "8px",
  };

  const answerStyle = {
    marginBottom: "16px",
  };

  return (
    <div style={containerStyle}>
      <div className="d-flex flex-column">
        <div style={sectionStyle}>
          <p>
            Welcome to our Support Center! We are here to assist you with any
            questions or concerns you may have. Below, you&apos;ll find
            information on common topics to help make your shopping experience
            smooth and enjoyable.
          </p>
        </div>

        <div style={sectionStyle}>
          <h4>Frequently Asked Questions (FAQs)</h4>

          <div style={sectionStyle}>
            <h5>1. Ordering and Payments</h5>

            <div style={answerStyle}>
              <p style={questionStyle}>How do I place an order?</p>
              <p>
                You can place an order by browsing our products, selecting the
                items you want, and proceeding to checkout.
              </p>

              <p style={questionStyle}>What payment methods do you accept?</p>
              <p>
                We accept major credit cards, PayPal, and other secure payment
                methods. For more details, please visit our Payment Methods
                page.
              </p>
            </div>
          </div>

          <div style={sectionStyle}>
            <h5>2. Shipping and Delivery</h5>
            <div style={answerStyle}>
              <p style={questionStyle}>How can I track my order?</p>
              <p>
                Once your order is shipped, you will receive a confirmation
                email with a tracking number. You can use this number to track
                your shipment.
              </p>

              <p style={questionStyle}>
                What are your shipping rates and delivery times?
              </p>
              <p>
                Shipping rates and delivery times vary based on your location.
                Please refer to our Shipping Information page for detailed
                information.
              </p>
            </div>
          </div>

          <div style={sectionStyle}>
            <h5>3. Returns and Exchanges</h5>
            <div style={answerStyle}>
              <p style={questionStyle}>How do I return an item?</p>
              <p>
                If you&apos;re not satisfied with your purchase, you can
                initiate a return within [X] days of receiving your order. Visit
                our Returns & Exchanges page for instructions.
              </p>

              <p style={questionStyle}>What is your refund policy?</p>
              <p>
                We offer refunds for returned items in accordance with our
                Refund Policy. Please review this policy for more information.
              </p>
            </div>
          </div>

          <div style={sectionStyle}>
            <h5>4. Account and Security</h5>
            <div style={answerStyle}>
              <p style={questionStyle}>How do I create an account?</p>
              <p>
                You can create an account by clicking on the &quot;Sign Up&quot;
                link and following the registration process.
              </p>

              <p style={questionStyle}>How can I reset my password?</p>
              <p>
                If you forget your password, you can reset it by visiting the
                &quot;Forgot Password&quot; page and following the instructions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
