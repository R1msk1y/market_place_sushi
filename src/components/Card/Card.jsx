import React, { useState } from "react";
function Card({ id, title, imgUrl, price, weight, addToCart, fullObj }) {
  const [curPrice, setCurPrice] = useState(price);
  const [counter, setCounter] = useState(1);
  const counterForPlus = () => {
    setCounter(counter + 1);
  };
  const counterForMinus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="col-md-6">
      <div className="card mb-4" data-id="01">
        <img className="product-img" src={imgUrl} alt="" />
        <div className="card-body text-center">
          <h4 className="item-title">{title}</h4>
          <p>
            <small data-items-in-box className="text-muted">
              6 шт.
            </small>
          </p>

          <div className="details-wrapper">
            <div className="items counter-wrapper">
              <div
                onClick={() => {
                  counterForMinus();
                }}
                className="items__control"
                data-action="minus"
              >
                -
              </div>
              <div className="items__current" data-counter>
                {counter}
              </div>
              <div
                onClick={() => {
                  counterForPlus();
                }}
                className="items__control"
                data-action="plus"
              >
                +
              </div>
            </div>

            <div className="price">
              <div className="price__weight">{weight * counter}г.</div>
              <div className="price__currency">{price * counter} ₽</div>
            </div>
          </div>

          <button
            onClick={() => {
              addToCart({
                id: id,
                title: title,
                imgUrl: imgUrl,
                price: price,
                weight: weight,
                counter: counter,
              });
            }}
            data-cart
            type="button"
            className="btn btn-block btn-outline-warning"
          >
            + в корзину
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
