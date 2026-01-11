function ProductCard({ product, onView }) {
  
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 p-4 bg-white flex flex-col">

      <div className="w-full h-40 overflow-hidden rounded-md mb-3">
        <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = product.images?.[0] || '/vite.svg';
        }}
      />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
        {product.title}
      </h3>
      <p className="text-sm  text-gray-500 mb-1 capitalize">Category: {product.category}</p>
      <p className="text-md font-bold text-blue-600 mb-4">Price: ${product.price}</p>

      <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition active:scale-95" onClick={onView}>View Details</button>
    </div>
  );
}

export default ProductCard;
