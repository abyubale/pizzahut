import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ErrorPage = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#FF0000",
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1rem",
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Oops! Something went wrong.</h2>
      <p>It seems there is an error with the page you&apos;re looking for.</p>
      <Link to="/">
        <Button variant="primary" style={buttonStyle}>
          Go to Homepage
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
