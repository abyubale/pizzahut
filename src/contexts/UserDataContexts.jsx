import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const UserDataContext = createContext();

const initcheck =
  localStorage.getItem("userData") !== null
    ? JSON.parse(localStorage.getItem("userData"))
    : [];

const initLoginCheck =
  sessionStorage.getItem("isLoggedIn") !== null
    ? sessionStorage.getItem("isLoggedIn") === "true"
    : false;

const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(initcheck);
  const [isUser, setIsUser] = useState(initLoginCheck);

  const [showToast, setShowToast] = useState(false);

  const ToastShowHandler = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const ToastCloseHandler = () => setShowToast(false);

  const logoutHandler = () => {
    setIsUser(false);
    sessionStorage.setItem("isLoggedIn", false);
  };

  const addUserDataHandler = (data) => {
    const _updateData = [...userData, data];
    setUserData(_updateData);
    localStorage.setItem("userData", JSON.stringify(_updateData));
  };

  const isUserExists = (obj) => {
    const _isUserExist = userData.find((user) => {
      return user.username === obj.username && user.password === obj.password;
    });

    const checkIsUserExist = _isUserExist !== undefined ? true : false;
    setIsUser(checkIsUserExist);
    sessionStorage.setItem("isLoggedIn", checkIsUserExist);
  };

  return (
    <UserDataContext.Provider
      value={{
        addUserDataHandler,
        isUserExists,
        isUser,
        logoutHandler,
        userData,
        ToastShowHandler,
        showToast,
        ToastCloseHandler,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

UserDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserDataProvider;
