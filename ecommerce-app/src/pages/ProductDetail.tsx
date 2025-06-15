import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../types';
import productsData from '../products/data.json';
import { getImage } from '../utils/getImage';

type Props = {
  addToCart: (product: Product, quantity: number) => void;
};

const ProductDetail = ({ addToCart }: Props) => {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const found = productsData.find((p) => p.slug === slug);
    if (found) setProduct(found);
  }, [slug]);

  if (!product) return <div className="p-4">Product not found</div>;

  return (
    <div className="mt-15 container mx-auto px-4 py-6">

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Responsive Images */}
        <img
          src={getImage(product.image.mobile)}
          alt={product.name}
          className="w-full sm:hidden h-[500px]"
        />
        <img
          src={getImage(product.image.tablet)}
          alt={product.name}
          className="hidden sm:block lg:hidden w-full h-[500px]"
        />
        <img
          src={getImage(product.image.desktop)}
          alt={product.name}
          className="hidden lg:block w-full h-[500px]"
        />

        <div className="flex flex-col justify-between space-y-4 lg:w-1/2">
          {product.new && (
            <span className="text-sm text-orange-600 uppercase tracking-wide">
            Product
            </span>
          )}
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-white-400">{product.description}</p>
          <p className="font-bold text-lg">Price: ${product.price}</p>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-5">
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, Number(e.target.value)))
              }
              className="w-20 px-2 py-1 border rounded-md text-center"
            />
            <button
              onClick={() => addToCart(product, quantity)}
              className="bg-blue-600 text-white-400 px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-lg font-semibold mb-2 mt-3">Features</h2>
        <p className="text-white whitespace-pre-line">{product.features}</p>
      </div>

      {/* Includes */}
      <div>
        <h2 className="text-lg font-semibold mb-2 mt-3">In the Box</h2>
        <ul className="space-y-1">
          {product.includes.map((item, idx) => (
            <li key={idx} className="text-white">
              <span className="font-bold text-orange-600 mr-2">
                {item.quantity}x
              </span>
              {item.item}
            </li>
          ))}
        </ul>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-lg font-semibold mb-4 mt-3">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.others.map((other, idx) => (
            <div key={idx} className="text-center">
              <img
                src={getImage(other.image.desktop)}
                alt={other.name}
                className="w-full rounded-md"
              />
              <p className="mt-2 font-semibold">{other.name}</p>
              <Link
                to={`/product/${other.slug}`}
                className="inline-block mt-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
              >
                See Product
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
