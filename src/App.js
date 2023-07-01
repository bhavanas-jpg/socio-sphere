import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import NavRoutes from "./routes/NavRoutes";

function App() {
  const location = useLocation();
  const prevLocationRef = useRef();

  useLayoutEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    if (prevLocationRef.current !== location.pathname) {
      scrollToTop();
      prevLocationRef.current = location.pathname;
    }
  }, [location]);

  return (
    <div className="App">
      <NavRoutes />
    </div>
  );
}

export default App;
