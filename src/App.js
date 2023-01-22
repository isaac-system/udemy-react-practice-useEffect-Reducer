import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  /*
 const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(
    () => {
      const storeUserLoggedInInfomation = localStorage.getItem("isLoggedIn");

      if (storeUserLoggedInInfomation === "1") {
        setIsLoggedIn(true);
      }
    },
    // dependency 의존성
    []
  );
  
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  */

  return (
    <>
      <MainHeader />
      <main>{authCtx.isLoggedIn ? <Home /> : <Login />}</main>
    </>
  );
}

export default App;
