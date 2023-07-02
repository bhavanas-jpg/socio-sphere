import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import NavRoutes from "./routes/NavRoutes";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: { duration: 1500 },
          error: { duration: 1500 },
        }}
        containerStyle={{
          top: "6rem",
        }}
      />
    </div>
  );
}

export default App;
