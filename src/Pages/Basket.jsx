import { useEffect, useState } from "react";

function Basket() {
  const [basket, setBasket] = useState([]);

  //Fetch basket
  useEffect(() => {
    fetch("http://localhost:3000/basket")
      .then((resp) => resp.json())
      .then((basketFromServer) => setBasket(basketFromServer));
  }, []);

  function updateQuantity(item, newQuantity) {
    let basketCopy = JSON.parse(JSON.stringify(basket));

    if (newQuantity > 0) {
      const match = basketCopy.find((target) => target.id === item.id);
      match.quantity = newQuantity;
    } else {
      basketCopy = basketCopy.filter((target) => target.id !== item.id);
    }

    setBasket(basketCopy);
  }

  function getTotal(basket) {
    let total = 0;
    for (const item of basket) {
      total += item.quantity * item.price;
    }
    return total.toFixed(2);
  }

  return (
    <section className="basket-container">
      <h2>My Basket</h2>
      {basket.length === 0 ? (
        <p>There is no items in your basket!</p>
      ) : (
        <ul>
          {basket.map((basketItem) => (
            <li key={basketItem.id}>
              <article className="basket-container__item">
                <img src={basketItem.image} alt={basketItem.title} width="90" />
                <p>{basketItem.description}</p>
                <p>
                  Qty :
                  <select
                    defaultValue={basketItem.quantity}
                    onChange={(e) => {
                      updateQuantity(basketItem, Number(e.target.value));
                    }}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </p>
                {/* Total is calculated using quantity selected value */}
                <p>
                  Item total: ${" "}
                  {(basketItem.price * basketItem.quantity).toFixed(2)}
                </p>
              </article>
            </li>
          ))}

          {/* -- */}
        </ul>
      )}
      {/* Basket total is calculated using each item's total  from above */}
      <h3>Your total to pay: $ {getTotal(basket)}</h3>
      <p className="greeting">Thank you for your purchase!</p>
    </section>
  );
}
export default Basket;
