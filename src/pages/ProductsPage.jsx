import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { getProducts } from "../api/product";
import Error from "../components/Error";
import ProductList from "../components/ProductList";
import { useNavigate } from "react-router-dom";
import PaginationControls from "../components/PaginationControls";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [page,setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [mode, setMode] = useState("append");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await getProducts({page});
        const newProducts = response.data.data;
        if (response && response.data) {
          setProducts((prev) => {

            if(mode == "replace")
            {
                return newProducts;
            }
            const exisitingIds = new Set(prev?.map((u) => u.id));
            const uniqueProducts = newProducts.filter(
              (prod) => !exisitingIds.has(prod.id)
            );
            return [...prev, ...uniqueProducts];
          });
        setHasMore(response.data.nextPage)
          //setProducts(newProducts);
        }
        //  console.log(response);
      } catch (error) {
        console.error("Error fetching products: ", error);
        setError(error.message || "Failed to fetch products");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [page]);
  const onProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  const onLoadMore = () =>{
    setMode("append");
    setPage((prev) => prev + 1);
  }

  const onNext = () => {
    if(!hasMore) return;
    setMode("replace");
    setPage((prev) => prev + 1);
  }

  const onPrev = () =>{
    setMode("replace");
    setPage((prev) => prev - 1);
  }

  return (
    <div>
      {loading && <Loader />}
      {error && <Error message={error} />}
      {!loading && !error && (
        <ProductList products={products} onProductClick={onProductClick} />
      )}
      {!loading && !error && products.length > 0 && (
        <div className="flex justify-center">
          <PaginationControls
           onLoadMore= {onLoadMore}
           onNext = {onNext}
           onPrev = {onPrev}
           hasMore={hasMore}
           page={page}
          />
        </div>
      )}
      {/* ProductsPage */}
    </div>
  );
};

export default ProductsPage;
