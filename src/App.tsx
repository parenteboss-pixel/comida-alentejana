import { useState } from 'react';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { QRCodePage } from './components/QRCodePage';
import { BottomNav } from './components/BottomNav';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';

export type Page = 'home' | 'menu' | 'cart' | 'checkout' | 'location' | 'contact' | 'qrcode';

export function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setPage={setCurrentPage} />;
      case 'menu':
        return <Menu />;
      case 'cart':
        return <Cart setPage={setCurrentPage} />;
      case 'checkout':
        return <Checkout setPage={setCurrentPage} />;
      case 'location':
        return <Location />;
      case 'contact':
        return <Contact />;
      case 'qrcode':
        return <QRCodePage />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-amber-50 pb-20 font-['Poppins']">
        <Header setPage={setCurrentPage} currentPage={currentPage} />
        <main>
          {renderPage()}
        </main>
        <ScrollToTop />
        <BottomNav currentPage={currentPage} setPage={setCurrentPage} />
      </div>
    </CartProvider>
  );
}
