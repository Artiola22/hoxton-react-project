import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from "../components/StarRating";

function ProductDetails() {
  const [product, setProduct] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  //fetch product

  useEffect(() => {
    fetch(`http://localhost:3000/products/${params.id}`)
      .then((resp) => resp.json())
      .then((productFromServer) => setProduct(productFromServer));
  }, []);

  if (product === null) return <h2>Loading...</h2>;
  if (product.id === undefined) return <h2>Product not found!</h2>;

  function addItemToBasket() {
    fetch("http://localhost:3000/basket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...product, quantity: 1 }),
    }).then((resp) => {
      if (resp.ok) {
        navigate("/basket");
      } else {
        navigate("/basket");
      }
    });
  }

  return (
    <section className="products-detail main-wrapper">
      <div className="single-product">
        <img src={product.image} />
        <div className="product-details__side">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>
            {" "}
            <b>$ {product.price}</b>
          </p>

          <button onClick={() => addItemToBasket()}>ADD TO BAG</button>
        </div>

        <div className="comment-form">
          <form action="">
            <p>
              <em>Review for the product...</em>
              <StarRating />
            </p>
            
            
          </form>
        </div>
      </div>
    </section>
  );
}
export default ProductDetails;
