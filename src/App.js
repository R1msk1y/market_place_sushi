import Card from "./components/Card/Card";
import React, { useState } from "react";
import "./styles/main.scss";
import CartItem from "./components/CartItem/CartItem";
const productsArr = [
  {
    id: 1,
    title: "Калефорния хит ролл",
    imgUrl: "img/roll/california-hit.jpg",
    price: 300,
    weight: 180,
  },
  {
    id: 2,
    title: "Калифорния темпура",
    imgUrl: "img/roll/california-tempura.jpg",
    price: 250,
    weight: 205,
  },
  {
    id: 3,
    title: "Запеченый ролл «Калифорния»",
    imgUrl: "img/roll/zapech-california.jpg",
    price: 400,
    weight: 150,
  },
  {
    id: 4,
    title: "Филадельфия",
    imgUrl: "img/roll/philadelphia.jpg",
    price: 350,
    weight: 190,
  },
];

function App() {
  const [cartArr, setCartArr] = useState([]);

  const addToCart = (curObj, curPrice) => {
    if (cartArr.find((obj) => obj.id === curObj.id)) {
      // setCartArr(cartArr.filter((item) => item.id !== curObj.id));
    } else {
      setCartArr([...cartArr, curObj]);
    }
  };
  return (
    <div classNameName="App">
      <header className="header">
        <div className="container text-center">
          <img src="img/logo/logo.svg" width="92" alt="Суши и пицца" />
          <div className="display-4">Доставка роллов</div>
          <p className="lead">Оперативно и вкусно</p>
        </div>
      </header>

      <div className="container mb-5">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              {productsArr.map((obj) => {
                return (
                  <Card
                    key={obj.id}
                    addToCart={addToCart}
                    {...obj}
                    fullObj={obj}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-md-4">
            {/* <!-- Корзина --> */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Ваш заказ</h5>
                {cartArr.length > 0 ? null : (
                  <div
                    data-cart-empty
                    className="alert alert-secondary"
                    role="alert"
                  >
                    Корзина пуста
                  </div>
                )}

                {/* <!-- cart-wrapper --> */}
                <div className="cart-wrapper">
                  {/* <!-- Cart item --> */}
                  {cartArr.map((obj) => {
                    console.log(obj);
                    return <CartItem key={obj.id} {...obj} />;
                  })}
                  {/* <!-- // Cart item --> */}
                </div>
                {/* <!-- // cart-wrapper --> */}

                {/* <!-- Стоимость заказа --> */}
                <div className="cart-total">
                  <p>
                    <span className="h5">Доставка:</span>{" "}
                    <span className="delivery-cost free">бесплатно</span>{" "}
                  </p>
                  <p>
                    <span className="h5">Итого:</span>{" "}
                    <span className="total-price">330</span>{" "}
                    <span className="rouble">₽</span>
                  </p>
                </div>
                {/* <!-- // Стоимость заказа --> */}
              </div>

              {/* <!-- Оформить заказ --> */}
              <div id="order-form" className="card-body border-top">
                <h5 className="card-title">Оформить заказ</h5>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ваш номер телефона"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Заказать
                  </button>
                </form>
              </div>
              {/* <!-- // Оформить заказ --> */}
            </div>
            {/* <!-- // Корзина --> */}
          </div>
        </div>
      </div>

      {/* <!-- Подключаем скрипты --> */}
    </div>
  );
}

export default App;
