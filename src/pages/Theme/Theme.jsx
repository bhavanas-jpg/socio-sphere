import React, { useState } from 'react';
import "./theme.css";
import { handleBgColors, handleColors } from '../../helpers/theme';

const Theme = () => {
  const theme = [
    {
      colors: [{ color: "color-1" }, { color: "color-2" }, { color: "color-3" }, { color: "color-4" }, { color: "color-5" }],
      bgColors: [{ bgColor: "bg-1" }, { bgColor: "bg-2" },{ bgColor: "bg-3" } ]
    }
  ];


  const [themeColors] = theme;
  const { colors, fontSizes, bgColors } = themeColors;
  const [activeColor, setActiveColor] = useState(null);
  const [activeBgColor, setActiveBgColor] = useState(null);

 

  const getColorClassName = (color) => {
    return color === activeColor ? "color active" : "color";
  };

  const getBgColorClassName =(bgColor) =>{
    return bgColor === activeBgColor ? " " : " ";
  }



  return (
    <div>
      <h4>Color</h4>
      <div className="choose-color">
        {colors.map(({ color }) => (
          <span
            className={getColorClassName(color)}
            onClick={() => {
              setActiveColor(color);
              handleColors(color);
            }}
          ></span>
        ))}
      </div>

      <h4>Background</h4>
      <div className="choose-bg">
        {bgColors.map(({bgColor}) =>(
         <span
         onClick={()=>{
            handleBgColors(bgColor);
         }}
         ></span>
        ))}
    
        <h5></h5>
      </div>
    </div>
  );
};

export default Theme;
