import React, { useState, useRef, useEffect } from "react";
import "./HomeScreen.css";
import menu from "../../images/menu.png";

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Kafe");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const buttonsRef = useRef([]);

  const categories = ["Kafe", "Bezalkoholno", "Piva", "Alkoholno"];

  useEffect(() => {
    const activeButtonIndex = categories.indexOf(activeCategory);
    const activeButton = buttonsRef.current[activeButtonIndex];
    if (activeButton) {
      setIndicatorStyle({
        left: `${activeButton.offsetLeft + activeButton.offsetWidth / 2 - 5}px`, // Centriraj tačku
      });
    }
  }, [activeCategory, categories]);

  return (
    <div className="background">
      <div className="logoup">
        <img src={menu} alt="logo" className="logo" />
      </div>
      <div className="headline">
        Online Meni
        <br />
        Uživajte u trenutku
      </div>
      <div className="container-search">
        <input
          type="text"
          className="search-bar"
          placeholder="  Pronađi željeni proizvod"
        />
      </div>
      <div className="category-selection">
        {categories.map((category, index) => (
          <button
            key={category}
            ref={(el) => (buttonsRef.current[index] = el)}
            className={`category-button ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
        <div className="indicator" style={indicatorStyle}></div>
      </div>
    </div>
  );
};

export default HomeScreen;
