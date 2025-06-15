import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

type Props = {
  cartCount: number;
};

const Navbar = ({ cartCount }: Props) => {
  const location = useLocation();

  const linkStyle = (path: string) =>
    location.pathname === path
      ? 'text-blue-600 font-semibold'
      : 'hover:text-blue-600 text-gray-700';

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-black">
            AbbShopEasy
          </Link>

          <div className="flex space-x-6 items-center">
            <Link to="/" className={linkStyle('/')}>
              Home
            </Link>

            <li className="relative list-none">
              <Link to="/cart" className={`flex items-center gap-1 ${linkStyle('/cart')}`}>
              Cart <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
