import { ShoppingCart, Search, Menu, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ cartItemCount, onCartClick, currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b">
          <div className="text-gray-600">
            📞 Call us: 1-800-PHARMACY | 📧 everhealthyEverhealthy@gmail.com
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <button onClick={() => onNavigate('contact')} className="hover:text-green-600">Track Order</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-green-600">Help</button>
            <a href="#" className="hover:text-green-600">Sign In</a>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <h1 
              className="text-2xl font-bold text-green-600 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              EveryHealthy Multi-Dynamic Int'L Limited
            </h1>
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => onNavigate('home')} 
                className={`${currentPage === 'home' ? 'text-green-600 font-semibold' : 'text-gray-700'} hover:text-green-600`}
              >
                Home
              </button>
              <button 
                onClick={() => onNavigate('products')} 
                className={`${currentPage === 'products' ? 'text-green-600 font-semibold' : 'text-gray-700'} hover:text-green-600`}
              >
                Products
              </button>
              <button 
                onClick={() => onNavigate('checkout')} 
                className={`${currentPage === 'checkout' ? 'text-green-600 font-semibold' : 'text-gray-700'} hover:text-green-600`}
              >
                Cart & Checkout
              </button>
              <button 
                onClick={() => onNavigate('contact')} 
                className={`${currentPage === 'contact' ? 'text-green-600 font-semibold' : 'text-gray-700'} hover:text-green-600`}
              >
                Contact
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 w-80">
              <Search className="w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Search medicines, supplements..." 
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="w-5 h-5" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-green-600">
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}