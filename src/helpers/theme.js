const root = document.querySelector(":root");

export const handleColors = (className) => {
  switch (className) {
    case "color-1":
      root.style.setProperty("--primary-color-hue", 252);
      break;

    case "color-2":
      root.style.setProperty("--primary-color-hue", 52);
      break;

    case "color-3":
      root.style.setProperty("--primary-color-hue", 352);
      break;

    case "color-4":
      root.style.setProperty("--primary-color-hue", 152);
      break;

    case "color-5":
      root.style.setProperty("--primary-color-hue", 202);
      break;

    default:
      return null;
  }
};
export const handleBgColors = (className)=>{
    switch(className){
        case "bg-1":
            root.style.setProperty("--light-color-lightness", "95%");
            root.style.setProperty("--white-color-lightness", "100%");
            root.style.setProperty("--dark-color-lightness", "17% ");  
        break;
        case "bg-2":
            root.style.setProperty("--light-color-lightness", "15%");
            root.style.setProperty("--white-color-lightness", "20%");
            root.style.setProperty("--dark-color-lightness", "95% ");   
        break;
        case "bg-3":
            root.style.setProperty("--light-color-lightness", "0%");
            root.style.setProperty("--white-color-lightness", "10%");
            root.style.setProperty("--dark-color-lightness", "95% "); 
            break;
        default:
         return null;
    }
}
