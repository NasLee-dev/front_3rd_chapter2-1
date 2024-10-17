import { useCallback, useState } from "react";
import { INIT_PRODUCTLIST } from "../constant/ProductList";

function useProducts() {
  const [products, setProducts] = useState(INIT_PRODUCTLIST);

  const updateProductStock = useCallback((id: string, amount: number) => {
    setProducts((prev) => prev.map((product) => product.id === id ? { ...product, stock: product.stock + amount } : product));
  }, []);

  return { products, updateProductStock };
}

export default useProducts;