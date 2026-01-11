import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import { getProducts } from '../api/product';
import Error from '../components/Error';
import ProductList from '../components/ProductList';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async() => {
            setLoading(true);
            setError("");
            try {
                const response = await getProducts();
                const newProducts = response.data.data;
                if(response && response.data)
                {
                    setProducts((prev) => {
                        const exisitingIds = new Set(prev?.map((u) => u.id));
                        const uniqueProducts = newProducts.filter((prod) => !exisitingIds.has(prod.id));
                        return[...prev,...uniqueProducts];
                    });
                    //setProducts(newProducts);
                }
                // console.log(response);
                
            } catch (error) {
                console.error("Error fetching products: ",error);
                setError(error.message || "Failed to fetch products");
                setProducts([]);
            } finally{
                setLoading(false);
            }
        };
        fetchProducts();
    },[])
    const onProductClick = (id) => {
     navigate(`/products/${id}`)
  };

  return (
    <div>
        {loading && <Loader/>}
        {error && <Error message={error}/>}
        {!loading && !error && (
        <ProductList products={products} onProductClick={onProductClick}/>
        )}
        {/* ProductsPage */}
    </div>
  )
}

export default ProductsPage