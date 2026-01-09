function ProductCard({ product, onView }) {
  console.log(product);
  return (
    <div style={{ border: '1px solid #ddd', padding: '12px' }}>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = product.images?.[0] || '/vite.svg';
        }}
      />

      <h3>{product.title}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>

      <button onClick={onView}>View Details</button>
    </div>
  );
}

export default ProductCard;
