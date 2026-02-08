import { Home, UtensilsCrossed, ShoppingCart, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Page } from '../App';

interface BottomNavProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export function BottomNav({ currentPage, setPage }: BottomNavProps) {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const navItems = [
    { id: 'home' as Page, label: 'Início', icon: Home },
    { id: 'menu' as Page, label: 'Ementa', icon: UtensilsCrossed },
    { id: 'cart' as Page, label: 'Carrinho', icon: ShoppingCart, badge: totalItems },
    { id: 'contact' as Page, label: 'Contacto', icon: Phone }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`flex flex-col items-center justify-center flex-1 h-full relative transition-colors ${
                isActive ? 'text-amber-600' : 'text-gray-500 hover:text-amber-500'
              }`}
            >
              <div className="relative">
                <Icon size={22} />
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </div>
              <span className="text-xs mt-1 font-medium">{item.label}</span>
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-amber-600 rounded-b-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
