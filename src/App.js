import React from "react"
import Login from "./pages/Auth/Login";
import NavRoutes from "./routes/NavRoutes";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import SuggestedUser from "./components/SuggestedUser/SuggestedUser";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const {token} = useSelector(store =>store.auth);

  console.log(token);
  return (
    <div className="App">
      {token && <Header />}
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
