import PaginationControls from './PaginationControls';
import ProductCard from './ProductCard';

function ProductList({ products, onProductClick }) {
  return (
    <div className='w-full'>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onView={() => onProductClick(product.id)}
        />
      ))}
    </div>
    </div>
  );
}

export default ProductList;
