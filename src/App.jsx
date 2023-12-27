import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AppHeader from "./components/AppHeader/AppHeader";
import PageRoutes from "./routes/PageRoutes";
import AppFooter from "./components/AppFooter/AppFooter";
import Toast from "./components/Toast/Toast";
import { useContext } from "react";
import { UserDataContext } from "./contexts/UserDataContexts";

function App() {
  const { ToastCloseHandler, showToast } = useContext(UserDataContext);

  return (
    <div>
      <AppHeader />

      <PageRoutes />
      {showToast && (
        <Toast
          message="Item added to cart!"
          onClose={() => ToastCloseHandler()}
        />
      )}

      <AppFooter />
    </div>
  );
}

export default App;
