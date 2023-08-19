import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header class="header">
        <div class="container text-center">
          <img src="img/logo/logo.svg" width="92" alt="Суши и пицца" />
          <div class="display-4">Доставка роллов</div>
          <p class="lead">Оперативно и вкусно</p>
        </div>
      </header>

      <div class="container mb-5">
        <div class="row">
          <div class="col-md-8">
            <div class="row">
              {/* <!-- Ролл --> */}
              <div class="col-md-6">
                <div class="card mb-4" data-id="01">
                  <img
                    class="product-img"
                    src="img/roll/philadelphia.jpg"
                    alt=""
                  />
                  <div class="card-body text-center">
                    <h4 class="item-title">Филадельфия хит ролл</h4>
                    <p>
                      <small data-items-in-box class="text-muted">
                        6 шт.
                      </small>
                    </p>

                    <div class="details-wrapper">
                      <div class="items counter-wrapper">
                        <div class="items__control" data-action="minus">
                          -
                        </div>
                        <div class="items__current" data-counter>
                          1
                        </div>
                        <div class="items__control" data-action="plus">
                          +
                        </div>
                      </div>

                      <div class="price">
                        <div class="price__weight">180г.</div>
                        <div class="price__currency">300 ₽</div>
                      </div>
                    </div>

                    <button
                      data-cart
                      type="button"
                      class="btn btn-block btn-outline-warning"
                    >
                      + в корзину
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- // Ролл --> */}

              {/* <!-- Ролл --> */}
              <div class="col-md-6">
                <div class="card mb-4" data-id="02">
                  <img
                    class="product-img"
                    src="img/roll/california-tempura.jpg"
                    alt=""
                  />
                  <div class="card-body text-center">
                    <h4 class="item-title">Калифорния темпура</h4>
                    <p>
                      <small data-items-in-box class="text-muted">
                        6 шт.
                      </small>
                    </p>

                    <div class="details-wrapper">
                      <div class="items counter-wrapper">
                        <div class="items__control" data-action="minus">
                          -
                        </div>
                        <div class="items__current" data-counter>
                          1
                        </div>
                        <div class="items__control" data-action="plus">
                          +
                        </div>
                      </div>

                      <div class="price">
                        <div class="price__weight">205г.</div>
                        <div class="price__currency">250 ₽</div>
                      </div>
                    </div>

                    <button
                      data-cart
                      type="button"
                      class="btn btn-block btn-outline-warning"
                    >
                      + в корзину
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- // Ролл --> */}

              {/* <!-- Ролл --> */}
              <div class="col-md-6">
                <div class="card mb-4" data-id="03">
                  <img
                    class="product-img"
                    src="img/roll/zapech-california.jpg"
                    alt=""
                  />
                  <div class="card-body text-center">
                    <h4 class="item-title">Запеченый ролл «Калифорния»</h4>
                    <p>
                      <small data-items-in-box class="text-muted">
                        6 шт.
                      </small>
                    </p>

                    <div class="details-wrapper">
                      <div class="items counter-wrapper">
                        <div class="items__control" data-action="minus">
                          -
                        </div>
                        <div class="items__current" data-counter>
                          1
                        </div>
                        <div class="items__control" data-action="plus">
                          +
                        </div>
                      </div>

                      <div class="price">
                        <div class="price__weight">182г.</div>
                        <div class="price__currency">230 ₽</div>
                      </div>
                    </div>

                    <button
                      data-cart
                      type="button"
                      class="btn btn-block btn-outline-warning"
                    >
                      + в корзину
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- // Ролл --> */}

              {/* <!-- Ролл --> */}
              <div class="col-md-6">
                <div class="card mb-4" data-id="04">
                  <img
                    class="product-img"
                    src="img/roll/philadelphia.jpg"
                    alt=""
                  />
                  <div class="card-body text-center">
                    <h4 class="item-title">Филадельфия</h4>
                    <p>
                      <small data-items-in-box class="text-muted">
                        6 шт.
                      </small>
                    </p>

                    <div class="details-wrapper">
                      <div class="items counter-wrapper">
                        <div class="items__control" data-action="minus">
                          -
                        </div>
                        <div class="items__current" data-counter>
                          1
                        </div>
                        <div class="items__control" data-action="plus">
                          +
                        </div>
                      </div>

                      <div class="price">
                        <div class="price__weight">230г.</div>
                        <div class="price__currency">320 ₽</div>
                      </div>
                    </div>

                    <button
                      data-cart
                      type="button"
                      class="btn btn-block btn-outline-warning"
                    >
                      + в корзину
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- // Ролл --> */}
            </div>
          </div>
          <div class="col-md-4">
            {/* <!-- Корзина --> */}
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">Ваш заказ</h5>
                <div data-cart-empty class="alert alert-secondary" role="alert">
                  Корзина пуста
                </div>
                {/* <!-- cart-wrapper --> */}
                <div class="cart-wrapper">
                  {/* <!-- Cart item --> */}
                  <div class="cart-item" data-id="02">
                    <div class="cart-item__top">
                      <div class="cart-item__img">
                        <img src="img/roll/california-tempura.jpg" alt="" />
                      </div>
                      <div class="cart-item__desc">
                        <div class="cart-item__title">Калифорния темпура</div>
                        <div class="cart-item__weight">6 шт. / 205г.</div>

                        {/* <!-- cart-item__details --> */}
                        <div class="cart-item__details">
                          <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">
                              -
                            </div>
                            <div class="items__current" data-counter="">
                              1
                            </div>
                            <div class="items__control" data-action="plus">
                              +
                            </div>
                          </div>

                          <div class="price">
                            <div class="price__currency">250 ₽</div>
                          </div>
                        </div>
                        {/* <!-- // cart-item__details --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- // Cart item --> */}
                </div>
                {/* <!-- // cart-wrapper --> */}

                {/* <!-- Стоимость заказа --> */}
                <div class="cart-total">
                  <p>
                    <span class="h5">Доставка:</span>{" "}
                    <span class="delivery-cost free">бесплатно</span>{" "}
                  </p>
                  <p>
                    <span class="h5">Итого:</span>{" "}
                    <span class="total-price">330</span>{" "}
                    <span class="rouble">₽</span>
                  </p>
                </div>
                {/* <!-- // Стоимость заказа --> */}
              </div>

              {/* <!-- Оформить заказ --> */}
              <div id="order-form" class="card-body border-top">
                <h5 class="card-title">Оформить заказ</h5>
                <form>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Ваш номер телефона"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
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
