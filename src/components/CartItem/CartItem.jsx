import { useState } from "react";

function CartItem({ id, title, imgUrl, price, weight, counter, arr }) {
  const [itemCounter, setItemCounter] = useState(counter);
  const counterForPlus = () => {
    setItemCounter(itemCounter + 1);
  };
  const counterForMinus = () => {
    if (itemCounter > 1) {
      setItemCounter(itemCounter - 1);
    }
  };

  const totalPrice = arr.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <div className="cart-item" data-id="02">
      <div className="cart-item__top">
        <div className="cart-item__img">
          <img src={imgUrl} alt="" />
        </div>
        <div className="cart-item__desc">
          <div className="cart-item__title">{title}</div>
          <div className="cart-item__weight">6 шт. / {weight}г.</div>

          {/* <!-- cart-item__details --> */}
          <div className="cart-item__details">
            <div className="items items--small counter-wrapper">
              <div
                onClick={() => {
                  counterForMinus();
                }}
                className="items__control"
                data-action="minus"
              >
                -
              </div>
              <div className="items__current" data-counter="">
                {itemCounter}
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
              <div className="price__currency">{price * itemCounter} ₽</div>
            </div>
          </div>
          {/* <!-- // cart-item__details --> */}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
