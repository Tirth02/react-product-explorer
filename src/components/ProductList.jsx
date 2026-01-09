import ProductCard from './ProductCard';

function ProductList({ products, onProductClick }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onView={() => onProductClick(product.id)}
        />
      ))}
    </div>
  );
}

export default ProductList;
