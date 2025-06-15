import { useEffect, useState } from "react";
import productsData from "../products/data.json";
import ProductCard from "../components/ProductCard";
import { Product } from "../types";

type Props = {
  addToCart: (product: Product) => void;
};
 
const Home = ({ addToCart }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (

      <div className="mt-15 container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-2">Featured Products</h2>
    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    );
};

export default Home;
