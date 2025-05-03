import { Link } from 'react-router-dom';
import RatingStars from './RatingStars';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-title">
        {product.title}
      </Link>
      <div className="product-separator">* * * * *</div>
      <RatingStars rating={product.rating?.rate || 0} />
    </div>
  );
};

export default ProductCard;