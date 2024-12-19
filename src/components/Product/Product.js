import "./Product.css";
import kafavelika from "../../images/kafa-velika.png";

const Product = () => {
  return (
    <div className="product-page">
      <div className="pic-and-details">
        <div className="product-details">
          <p className="product-name-details">Kapućino</p>
          <p className="product-description-details">Sa nekim mlijekom</p>
        </div>
        <img src={kafavelika} alt="slika" className="product-picture" />
      </div>
      <div className="product-other-part">
        <div className="product-details-description">
          <p className="product-details-description-headline">Opis</p>
          <p className="product-details-description-text">
            Najjači kapućino koji se servira u gradu Nikšiću, obavezno probati.
          </p>
        </div>
        <div className="product-price-and-confirm">
          <div className="product-price">
            <p className="product-price-text">Cijena</p>
            <p className="product-price-show">
              <span id="eurosign">€</span>4.20
            </p>
          </div>
          <button className="primary-button">Zabilježi</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
