import SignupForm from "../components/SignupForm/SignupForm";
import { UserDataContext } from "../contexts/UserDataContexts";
import { Navigate } from "react-router-dom";
import route from "../routes/route.json";
import { useContext } from "react";
const Signup = () => {
  const { isUser } = useContext(UserDataContext);

  return (
    <>
      <h2 className="text-center mt-3">Signup</h2>
      <div
        className="d-flex justify-content-center "
        style={{ minHeight: "65vh" }}
      >
        <SignupForm />
      </div>
      {isUser && <Navigate to={route.HOME} />}
    </>
  );
};

export default Signup;
