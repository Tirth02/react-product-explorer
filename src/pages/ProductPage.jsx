import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/product";
import Loader from "../components/Loader";
import Error from "../components/Error";

function ProductPage() {
  const {id} = useParams();
  
  const [product,setProduct] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");

  useEffect(() => {
    const fetchProduct = async() => {
      setLoading(true);
      setError("");
      try {
        const response = await getProductById({id});
        console.log(response);
        setProduct(response.data)
        
      } catch (err) {
        console.error("Error fetching product in product page: ",error);
        setError(err.message || "Failed to fetch product");
        setProduct([]);
      }finally{
        setLoading(false);
      }
    };
    fetchProduct();
  },[id])

  if(loading) return <Loader/>
  if(error) return <Error message={error}/>
  if(!product) return null;
  
  const discountPercentage = product.discountPercentage || 0;

  const originalPrice = discountPercentage > 0 ? (product.price/ (1-discountPercentage / 100)).toFixed(2) : product.price; 

  const youSave = discountPercentage > 0 ? (originalPrice - product.price).toFixed(2) : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        
        {/* Back button */}
        <button className="mb-6 text-sm text-blue-600 hover:underline">
          ← Back to products
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full max-w-md h-80 object-cover rounded-xl border"
            />
          </div>  

          {/* Info Section */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">
              {product.title}
            </h1>

            <p className="text-gray-600">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Category: {product.category}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Rating: {product.rating}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Stock: {product.stock}
              </span>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-3xl font-bold text-green-600">
                ${product.price}
              </span>

              {/* original price */}
              {discountPercentage > 0 &&(
                <span className="text-lg text-gray-400 line-through decoration-dashed">
                  ${originalPrice}
                </span>
              )}

              {/* Discount Badge */}
              {discountPercentage > 0 && (
                <span className="bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full">
                  {discountPercentage}% OFF
                </span>
              )}

              {/* Saving Info */}

              {discountPercentage > 0 && (
                <p className="text-sm text-gray-500">
                  You save <span className="font-semibold">${youSave}</span>
                </p>
              )}

            </div>


            <div className="flex gap-4 pt-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>

              <button className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 transition">
                Buy Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductPage;
