import "./HomeScreen.css";
import menu from "../../images/menu.png";
import search from "../../images/search.png";

const HomeScreen = () => {
  return (
    <div className="background">
      <div className="logoup">
        <img src={menu} alt="logo" className="logo"></img>
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
        ></input>
      </div>
    </div>
  );
};

export default HomeScreen;
