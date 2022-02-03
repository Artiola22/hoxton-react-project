import { Link } from "react-router-dom"

function Product({product}){
    return(
        <li>
          <Link to={`/products/${product.id}`}>
            <article className="product-item">
              <img
                src={product.image}
                alt={product.title}
              />
              <h3>{product.title}</h3>
            </article>
          </Link>
        </li>
    )
}
export default Product