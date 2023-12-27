import { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import route from "../../routes/route.json";
import { UserDataContext } from "../../contexts/UserDataContexts";
const LoginForm = () => {
  const [loginDetails, setLoginDetails] = useState({});
  const [msg, setMsg] = useState("");
  const { isUserExists, isUser } = useContext(UserDataContext);

  const updateUrl = useNavigate();

  const inputChangeHandler = (e) => {
    const details = { ...loginDetails };
    details[e.target.name] = e.target.value;
    setLoginDetails(details);
  };

  const loginBtnHandler = (details) => {
    isUserExists(details);

    if (!isUser) {
      setMsg("Please enter correct username or password");
      setTimeout(() => {
        setMsg("");
      }, 3000);
    }
  };

  return (
    <div
      className="d-inline-block m-4"
      style={{ minHeight: "75vh", padding: "50px" }}
    >
      <Row className="m-3">
        <Col>
          <label className="fs-3">Username</label>
        </Col>
        <Col>
          <input
            type="text"
            name="username"
            onChange={(e) => inputChangeHandler(e)}
            style={{ borderRadius: "20px", padding: "5px" }}
            className="fs-3"
            placeholder="username"
          />
        </Col>
      </Row>
      <Row className="m-3">
        <Col>
          <label className="fs-3">Password</label>
        </Col>
        <Col>
          <input
            type="password"
            name="password"
            onChange={(e) => inputChangeHandler(e)}
            style={{ borderRadius: "20px", padding: "5px" }}
            className="fs-3"
            placeholder="password"
          />
        </Col>
      </Row>
      <Row>
        <Button
          className="mt-3 fs-3"
          onClick={() => loginBtnHandler(loginDetails)}
        >
          Login
        </Button>
      </Row>

      <Row>
        <Button
          className="mt-3 fs-4"
          variant="link"
          onClick={() => updateUrl(`/${route.SIGNUP}`)}
        >
          <h5>Create An Account</h5>
        </Button>
      </Row>

      {isUser && (
        <p className="text-success text-center fs-3">You are logged in</p>
      )}

      <p className="text-danger text-center fs-3">{msg}</p>
    </div>
  );
};
export default LoginForm;
