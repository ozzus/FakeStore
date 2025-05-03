import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RatingStars from '../components/RatingStars';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <p className="price">Price: {product.price} $</p>
      <p className="description">{product.description}</p>
      <RatingStars rating={product.rating?.rate || 0} />
      <button onClick={() => navigate(-1)} className="back-button">
        Назад
      </button>
    </div>
  );
};

export default ProductPage;