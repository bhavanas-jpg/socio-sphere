import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <RotatingLines
        strokeColor="purple"
        strokeWidth="7px"
        animationDuration="0.75"
        width="70px"
        visible={true}
      />
    </div>
  );
};

export default Loader;

const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
