import type { CartItem} from '../types';
import { Link } from 'react-router-dom';
import { getImage } from '../utils/getImage';
import OrderSummary from '../components/OrderSummary';

type Props = {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
};

const Cart = ({ cart, removeFromCart, updateQuantity }: Props) => {

  return (
    <div className="mt-15 container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b py-4 gap-4"
              >
                <Link to={`/product/${item.slug}`}>
                  <img
                    src={getImage(item.image.mobile)}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded cursor-pointer sm:hidden"
                  />
          
                  <img
                    src={getImage(item.image.tablet)}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded cursor-pointer hidden sm:block lg:hidden"
                  />
      
                  <img
                    src={getImage(item.image.desktop)}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded cursor-pointer hidden lg:block"
                  />
                 </Link>

                <div className="flex-1">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p>
                    ${item.price.toFixed(2)} × {item.quantity}
                  </p>

                  {/* Quantity update and remove buttons */}
                  <div className="flex space-x-2 mt-2 items-center">
                    <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      className="w-16 border px-1 py-0.5 rounded"
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </li>
            ))}
          </ul>

          {/* Summary Section */}
      <div className="mt-6 border-t pt-4">
      <OrderSummary cart={cart} />
      <Link to="/checkout">
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Proceed to Checkout
        </button>
      </Link>
    </div>
        </>
      )}
    </div>
  );
};

export default Cart;
