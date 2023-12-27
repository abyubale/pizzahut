import { useContext } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { UserDataContext } from "../contexts/UserDataContexts";
import { Navigate } from "react-router-dom";
import route from "../routes/route.json";
const Login = () => {
  const { isUser } = useContext(UserDataContext);

  return (
    <>
      <h2 className="text-center mt-3">Login</h2>

      <div
        style={{ minHeight: "70vh" }}
        className="d-flex justify-content-center"
      >
        <LoginForm />
      </div>

      {isUser && <Navigate to={route.HOME} />}
    </>
  );
};

export default Login;
