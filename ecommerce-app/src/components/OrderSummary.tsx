import type { CartItem } from '../types';

type Props = {
  cart: CartItem[];
};

const OrderSummary = ({ cart }: Props) => {
  const productTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 50;
  const vat = productTotal * 0.2;
  const total = productTotal + shipping + vat;

  return (
    <div className="mt-6 border-t pt-4 space-y-2">
      <h3 className="text-lg font-semibold">Order Summary</h3>
      <p>Subtotal: ${productTotal.toFixed(2)}</p>
      <p>Shipping: ${shipping.toFixed(2)}</p>
      <p>VAT (20%): ${vat.toFixed(2)}</p>
      <p className="font-bold text-lg mt-2">Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default OrderSummary;
