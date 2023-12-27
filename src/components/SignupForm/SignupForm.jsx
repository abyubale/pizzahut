import { useContext, useRef, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import route from "../../routes/route.json";
import { UserDataContext } from "../../contexts/UserDataContexts";

const firstNameRegex = /^[A-Za-z]{3,}$/;
const userNameRegex = /^.{3,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^.{6,}$/;

const SignupForm = () => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const fullNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const { addUserDataHandler, userData: userInfo } =
    useContext(UserDataContext);
  const updateUrl = useNavigate();

  console.log(userInfo);

  const inputHandler = (e) => {
    const _userData = { ...userData };
    _userData[e.target.name] = e.target.value;
    setUserData(_userData);
  };

  const errorSuccessMsgHandler = (anymsg, success = false) => {
    if (success) {
      setMsg(anymsg);
      setSuccess(false);
    } else {
      setMsg(anymsg);
      setSuccess(true);
    }
    setTimeout(() => {
      setMsg("");
    }, 4000);
  };

  const isvalidates = () => {
    const validates = [
      {
        isValid: !userData.fullname,
        ErrorMsg: "first name field is required !!!",
        elementRef: fullNameRef,
      },
      {
        isValid: !firstNameRegex.test(userData.fullname),
        ErrorMsg: "first name requires atleast 3 letters !!!",
        elementRef: fullNameRef,
      },

      {
        isValid: !userData.username,
        ErrorMsg: "Username is required !!!",
        elementRef: usernameRef,
      },
      {
        isValid: !userNameRegex.test(userData.username),
        ErrorMsg: "Username requires atleast 3 letters !!!",
        elementRef: usernameRef,
      },
      {
        isValid: !userData.email,
        ErrorMsg: "email id is required !!!",
        elementRef: emailRef,
      },
      {
        isValid: !emailRegex.test(userData.email),
        ErrorMsg: "please enter correct email id !!!",
        elementRef: emailRef,
      },
      {
        isValid: !userData.password,
        ErrorMsg: "Password is required !!!",
        elementRef: passwordRef,
      },
      {
        isValid: !passwordRegex.test(userData.password),
        ErrorMsg: "Password should have 6 charcters !!!",
        elementRef: passwordRef,
      },
      {
        isValid: !userData.confirmPassword,
        ErrorMsg: "Confirm Password is required !!!",
        elementRef: confirmPasswordRef,
      },
      {
        isValid: userData.confirmPassword !== userData.password,
        ErrorMsg: "Password and Confirm Password should Be Same !!!",
        elementRef: confirmPasswordRef,
      },
    ];

    for (const validate of validates) {
      if (validate.isValid) {
        errorSuccessMsgHandler(validate.ErrorMsg);
        validate.elementRef.current.focus();
        return false;
      }
    }
    return true;
  };

  const createUserHandler = () => {
    if (!isvalidates()) {
      return;
    }

    const isEmailId = () =>
      userInfo.some((user) => {
        return user.email === userData.email;
      });

    const isUsernameExist = () =>
      userInfo.some((user) => {
        return user.username === userData.username;
      });

    if (isEmailId()) {
      errorSuccessMsgHandler("Email Id Already Exists");
      setTimeout(() => errorSuccessMsgHandler(""), 5000);
      return;
    }

    if (isUsernameExist()) {
      errorSuccessMsgHandler(
        "Username Already Exists , Please Enter Another Username !!!"
      );
      setTimeout(() => errorSuccessMsgHandler(""), 5000);
      return;
    }
    addUserDataHandler(userData);

    setUserData({});
    setError(false);
  };

  const clearFormHandler = () => {
    setUserData({});
  };

  return (
    <div
      className="d-inline-block m-4"
      style={{ minHeight: "50vh", padding: "50px" }}
    >
      <Row className="m-3">
        <Col>
          <label className="fs-3">Full name</label>
        </Col>
        <Col>
          <input
            type="text"
            name="fullname"
            onChange={(e) => inputHandler(e)}
            value={userData.fullname || ""}
            ref={fullNameRef}
            className="fs-3"
            style={{ borderRadius: "20px", padding: "5px" }}
          />
        </Col>
      </Row>

      <Row className="m-3">
        <Col>
          <label className="fs-3">Username</label>
        </Col>
        <Col>
          <input
            type="text"
            name="username"
            onChange={(e) => inputHandler(e)}
            value={userData.username || ""}
            className="fs-3"
            style={{ borderRadius: "20px", padding: "5px" }}
            ref={usernameRef}
          />
        </Col>
      </Row>
      <Row className="m-3">
        <Col>
          <label className="fs-3">Email</label>
        </Col>
        <Col>
          <input
            type="text"
            name="email"
            onChange={(e) => inputHandler(e)}
            value={userData.email || ""}
            className="fs-3 "
            style={{ borderRadius: "20px", padding: "5px" }}
            ref={emailRef}
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
            onChange={(e) => inputHandler(e)}
            value={userData.password || ""}
            className="fs-3"
            style={{ borderRadius: "20px", padding: "5px" }}
            ref={passwordRef}
          />
        </Col>
      </Row>

      <Row className="m-3">
        <Col>
          <label className="fs-3">Confirm Password</label>
        </Col>
        <Col>
          <input
            type="password"
            name="confirmPassword"
            onChange={(e) => inputHandler(e)}
            value={userData.confirmPassword || ""}
            className="fs-3 "
            style={{ borderRadius: "20px", padding: "5px" }}
            ref={confirmPasswordRef}
          />
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
        <Button className="m-3 fs-3" onClick={createUserHandler}>
          Create User
        </Button>
        <Button className="m-3 fs-4" variant="link" onClick={clearFormHandler}>
          Clear Form
        </Button>
      </div>

      <div className="d-flex justify-content-center">
        <Button
          className="m-3 fs-4"
          variant="link"
          onClick={() => updateUrl(`/${route.LOGIN}`)}
        >
          Already Have An Account ?
        </Button>
      </div>
      {error && (
        <div className="alert alert-danger">Passwords do not match</div>
      )}

      <p
        className={`${
          success ? "text-danger" : "text-Success"
        } fs-4 text-center `}
      >
        {msg}
      </p>
    </div>
  );
};

export default SignupForm;
