import React from "react"
import Login from "./pages/Auth/Login";
import NavRoutes from "./routes/NavRoutes";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import SuggestedUser from "./components/SuggestedUser/SuggestedUser";
import Navbar from "./components/Navbar/Navbar";
import AuthRoutes from "./routes/AuthRoutes";

function App() {
  const {token} = useSelector(store =>store.auth);


  return (
    <div className="App">
      {token && <Header />}
      <AuthRoutes />
      <div className="main">
       <div className="container">
       {token && <Navbar />}
     
      <NavRoutes />
      
        {token && <SuggestedUser />}
       </div> 
      </div>

    </div>
  );
}

export default App;
