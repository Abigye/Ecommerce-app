import { useState } from 'react';
import type { CartItem } from '../types';
import { useNavigate } from 'react-router-dom';
import OrderSummary from '../components/OrderSummary';

type Props = {
  cart: CartItem[];
  clearCart: () => void;
};

const Checkout = ({ cart, clearCart }: Props) => {
  const [form, setForm] = useState({ name: '', email: '', address: '' });
  const [errors, setErrors] = useState({ name: '', email: '', address: '' });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const productTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 50;
  const vat = productTotal * 0.2;
  const total = productTotal + shipping + vat;

  const validate = () => {
    const newErrors = {
      name: form.name ? '' : 'Name is required',
      email: /\S+@\S+\.\S+/.test(form.email) ? '' : 'Valid email is required',
      address: form.address ? '' : 'Address is required',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setShowModal(true);
    clearCart();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-15 container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block font-semibold">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block font-semibold">Address</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.address && <p className="text-red-600 text-sm">{errors.address}</p>}
        </div>

        <OrderSummary cart={cart} />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Place Order
        </button>
      </form>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
            <h3 className="text-xl font-bold text-green-600">Order Confirmed!</h3>
            <p>Thank you for your purchase, {form.name}.</p>
            <p className="text-sm text-gray-700">Your order summary has been sent to {form.email}.</p>
            <p className="font-semibold">Total Paid: ${total.toFixed(2)}</p>
            <button
              className="mt-4 w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800"
              onClick={() => navigate('/')}
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
