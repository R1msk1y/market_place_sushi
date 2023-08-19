import React from "react";

function CartItem({ id, title, imgUrl, price, weight, counter }) {
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
              <div className="items__control" data-action="minus">
                -
              </div>
              <div className="items__current" data-counter="">
                {counter}
              </div>
              <div className="items__control" data-action="plus">
                +
              </div>
            </div>

            <div className="price">
              <div className="price__currency">{price * counter} ₽</div>
            </div>
          </div>
          {/* <!-- // cart-item__details --> */}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
