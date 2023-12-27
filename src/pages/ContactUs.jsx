const ContactUs = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    padding: "100px",
    minHeight: "80vh",
  };

  const paragraphStyle = {
    marginBottom: "20px",
    fontSize: "1rem",
  };

  const listStyle = {
    listStyle: "none",
    padding: "0",
  };

  const hoursListStyle = {
    listStyle: "none",
    padding: "0",
    marginTop: "10px",
  };

  const headerStyle = {
    fontSize: "1.5rem",
    marginTop: "20px",
  };

  const closingMessageStyle = {
    fontSize: "1rem",
    marginTop: "20px",
  };

  return (
    <div style={containerStyle}>
      <p style={paragraphStyle}>
        If you cannot find the information you need in our FAQs, feel free to
        contact our Customer Support team. We are here to help you!
      </p>
      <ul style={listStyle}>
        <li>
          <strong>Email:</strong> support@pizzhut.in
        </li>
        <li>
          <strong>Phone:</strong> +91 9405812226
        </li>
      </ul>
      <h3 style={headerStyle}>Hours of Operation</h3>
      <p style={paragraphStyle}>
        Our Customer Support team is available to assist you during the
        following hours:
      </p>
      <ul style={hoursListStyle}>
        <li>
          <strong>Monday-Sunday</strong> 10:00AM-11:00PM
        </li>
        <li></li>
      </ul>
      <h5 style={closingMessageStyle}>
        Thank you for choosing PizzHut! We appreciate your business and are
        committed to providing you with exceptional service. HAPPY SHOPPING...!
      </h5>
    </div>
  );
};

export default ContactUs;
