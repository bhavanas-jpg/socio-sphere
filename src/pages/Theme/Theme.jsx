import React, { useState } from "react";
import "./theme.css";
import { handleBgColors, handleColors } from "../../helpers/theme";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

const Theme = () => {

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location?.state?.from?.pathname);

  const theme = [
    {
      colors: [
        { color: "color-1" },
        { color: "color-2" },
        { color: "color-3" },
        { color: "color-4" },
        { color: "color-5" },
      ],
      bgColors: [
        { bgColor: "bg-1", text: "Light" },
        { bgColor: "bg-2", text: "Dim" },
        { bgColor: "bg-3", text: "Lights Out" },
      ],
    },
  ];

  const [themeColors] = theme;
  const { colors, bgColors } = themeColors;
  const [activeColor, setActiveColor] = useState(null);
  const [activeBgColor, setActiveBgColor] = useState(null);

  const getColorClassName = (color) => {
    return color === activeColor ? "color active" : "color";
  };

  const getBgColorClassName = (bgColor) => {
    return bgColor === activeBgColor ? "bgColor active " : "bgColor ";
  };

  return (
    <section >
      
    <div class="customize-theme">
    
    <div class="card">
       <div className="card__btn">
        <button
        className="btn btn-primary"
        onClick={()=>navigate(location?.state?.from?.pathname)}
        >
         <span> <FaArrowLeft /> </span>
          Go Back</button> 
       
      </div>
        <h2>Customize your view</h2>
        <p class="text-muted">Manage your color, and background</p>
        <div className="card-content">
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
        </div>
       <div className="card-content">
       <h4>Background</h4>
      <div className="choose-bg">
        {bgColors.map(({ bgColor, text }) => (
          <span
            className={getBgColorClassName(bgColor)}
            onClick={() => {
              handleBgColors(bgColor);
              setActiveBgColor(bgColor);
            }}
          ></span>
        ))}
      </div>
       </div>

     
    </div>
    </div>
    </section>
  );
};

export default Theme;
