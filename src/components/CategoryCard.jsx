import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <li>
      <Link to={`/categories/${category.id}`}>{category.name}</Link>
    </li>
  );
}
export default CategoryCard;
