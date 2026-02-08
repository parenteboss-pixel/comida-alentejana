import { ShoppingCart, MapPin, Phone, QrCode } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Page } from '../App';

interface HeaderProps {
  setPage: (page: Page) => void;
  currentPage: Page;
}

export function Header({ setPage, currentPage }: HeaderProps) {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setPage('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-3xl">🍷</span>
            <div>
              <h1 className="font-['Playfair_Display'] text-xl font-bold leading-tight">Comida Típica</h1>
              <p className="text-amber-200 text-xs font-medium tracking-wider">ALENTEJANA</p>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setPage('menu')}
              className={`text-sm font-medium hover:text-amber-200 transition-colors ${currentPage === 'menu' ? 'text-amber-200' : ''}`}
            >
              Ementa
            </button>
            <button
              onClick={() => setPage('location')}
              className={`text-sm font-medium hover:text-amber-200 transition-colors flex items-center gap-1 ${currentPage === 'location' ? 'text-amber-200' : ''}`}
            >
              <MapPin size={16} />
              Localização
            </button>
            <button
              onClick={() => setPage('contact')}
              className={`text-sm font-medium hover:text-amber-200 transition-colors flex items-center gap-1 ${currentPage === 'contact' ? 'text-amber-200' : ''}`}
            >
              <Phone size={16} />
              Contacto
            </button>
            <button
              onClick={() => setPage('qrcode')}
              className={`text-sm font-medium hover:text-amber-200 transition-colors flex items-center gap-1 ${currentPage === 'qrcode' ? 'text-amber-200' : ''}`}
            >
              <QrCode size={16} />
              QR Code
            </button>
          </nav>

          <button
            onClick={() => setPage('cart')}
            className="relative p-2 hover:bg-amber-600 rounded-full transition-colors"
          >
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
