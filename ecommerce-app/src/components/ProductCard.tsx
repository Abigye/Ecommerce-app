import { Product }from '../types';
import { Link } from 'react-router-dom';
import { getImage } from '../utils/getImage';

type Props = {
  product: Product;
  addToCart: (product: Product) => void;
};

const ProductCard = ({ product, addToCart}: Props) => {
  return (
    <div className="mt-15 bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition">
      <img
        src={getImage(product.image.mobile)}
        alt={product.name}
        className="w-full sm:hidden h-[400px]"
      />
      <img
        src={getImage(product.image.tablet)}
        alt={product.name}
        className="hidden sm:block lg:hidden w-full h-[400px]"
      />
      <img
        src={getImage(product.image.desktop)}
        alt={product.name}
        className="hidden lg:block w-full h-[400px]"
      />

      <div className="p-3">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <div className="mt-3 space-y-3">
            <p className="text-blue-600 font-bold">Price: ${product.price}</p>
            <div className="flex gap-4">
                <Link
                to={`/product/${product.slug}`}
                className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                View
                </Link>
                <button
                onClick={() => addToCart(product)}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                Add to Cart
                </button>
            </div>
            </div>
      </div>
    </div>
  );
};

export default ProductCard;
