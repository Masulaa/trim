import React, { useState, useRef, useEffect, useMemo } from "react";
import "./HomeScreen.css";
import drinks from "./drinks";
import menu from "../../images/menu.png";
import info from "../../images/info.png";
import biljeske from "../../images/biljeske.png";
import home from "../../images/home.png";

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Kafe");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [hideFooter, setHideFooter] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const buttonsRef = useRef([]);

  const categories = useMemo(
    () => ["Kafe", "Bezalkoholno", "Piva", "Alkoholno"],
    []
  );

  useEffect(() => {
    const activeButtonIndex = categories.indexOf(activeCategory);
    const activeButton = buttonsRef.current[activeButtonIndex];
    if (activeButton) {
      setIndicatorStyle({
        left: `${activeButton.offsetLeft + activeButton.offsetWidth / 2 - 5}px`,
      });
    }
  }, [activeCategory, categories]);

  const filteredDrinks = drinks.filter(
    (drink) => drink.category === activeCategory
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const atBottom = Math.abs(scrollTop + windowHeight - documentHeight) <= 1;
      setHideFooter(atBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFooter = () => {
    setIsFooterVisible((prev) => !prev);
  };

  const isLargeScreen = window.innerWidth >= 1024;

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

      <div className="products">
        {filteredDrinks.map((drink) => (
          <div className="product" key={drink.id}>
            <div className="img-product-div">
              <img
                src={require(`../../images/${drink.image}`)}
                alt={drink.name}
                className="img-product"
              />
            </div>
            <div className="product-info">
              <p className="product-name">{drink.name}</p>
              <p className="product-description">{drink.description}</p>
              <div className="price-and-more">
                <p className="price-tag">
                  <span id="eurosign">€</span>
                  {drink.price.toFixed(2)}
                </p>
                <button className="info-button">
                  <img src={info} alt="info" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isLargeScreen && (
        <button
          className={`custom-button ${isFooterVisible ? "active" : ""}`}
          onClick={toggleFooter}
          onMouseEnter={(e) => {
            if (!isFooterVisible) e.currentTarget.classList.add("hover");
          }}
          onMouseLeave={(e) => {
            if (!isFooterVisible) e.currentTarget.classList.remove("hover");
          }}
        >
          <div className="vector-group">
            <div className="vector"></div>
            <div className="vector"></div>
            <div className="vector"></div>
            <div className="vector"></div>
          </div>
        </button>
      )}
      <div
        className={`fixed-footer ${
          hideFooter || (!isFooterVisible && isLargeScreen) ? "hidden" : ""
        }`}
      >
        <img src={home} alt="home" className="icons-menu" />
        <img src={biljeske} alt="biljeske" className="icons-menu" />
      </div>
    </div>
  );
};

export default HomeScreen;
