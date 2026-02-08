import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, UtensilsCrossed } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Page } from '../App';

interface CartProps {
  setPage: (page: Page) => void;
}

export function Cart({ setPage }: CartProps) {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-3xl shadow-xl p-12 animate-fadeIn">
          <div className="w-28 h-28 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <ShoppingBag className="text-amber-600" size={56} />
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-amber-900 mb-4">
            O seu carrinho está vazio
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Adicione alguns pratos deliciosos da nossa ementa!
          </p>
          <button
            onClick={() => setPage('menu')}
            className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <UtensilsCrossed size={22} />
            Ver Ementa
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-amber-900 mb-2">
          O Seu Pedido
        </h1>
        <p className="text-gray-600">
          {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'itens'} no carrinho
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden animate-fadeIn">
        {/* Items List */}
        <div className="divide-y divide-gray-100">
          {items.map((item, index) => (
            <div 
              key={item.id} 
              className="p-5 flex gap-4 hover:bg-amber-50/50 transition-colors animate-fadeIn"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-xl object-cover flex-shrink-0 shadow-md"
                />
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shadow">
                  {item.quantity}
                </span>
              </div>
              <div className="flex-grow">
                <h3 className="font-['Playfair_Display'] font-semibold text-lg text-amber-900">{item.name}</h3>
                <p className="text-amber-700 font-bold text-lg">{formatPrice(item.price)}</p>
                
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-9 h-9 rounded-lg bg-white hover:bg-gray-50 flex items-center justify-center transition-colors shadow-sm"
                    >
                      <Minus size={16} className="text-gray-600" />
                    </button>
                    <span className="w-10 text-center font-bold text-lg">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-9 h-9 rounded-lg bg-amber-600 hover:bg-amber-500 flex items-center justify-center transition-colors shadow-sm"
                    >
                      <Plus size={16} className="text-white" />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-xl text-amber-900">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-10 h-10 rounded-xl bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors group"
                    >
                      <Trash2 size={18} className="text-red-500 group-hover:text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 border-t border-amber-200">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold text-lg">{formatPrice(getTotalPrice())}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Entrega</span>
            <span className="font-semibold text-green-600">Grátis</span>
          </div>
          <div className="border-t border-amber-200 pt-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl text-amber-900">Total</span>
              <span className="font-bold text-3xl text-amber-700">{formatPrice(getTotalPrice())}</span>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="p-6 bg-white">
          <button
            onClick={() => setPage('checkout')}
            className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Finalizar Pedido
            <ArrowRight size={24} />
          </button>
          <p className="text-center text-sm text-gray-500 mt-4">
            🔒 Pagamento seguro via WhatsApp
          </p>
        </div>
      </div>

      {/* Continue Shopping */}
      <div className="text-center mt-8">
        <button
          onClick={() => setPage('menu')}
          className="text-amber-700 hover:text-amber-800 font-semibold text-lg inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          ← Continuar a escolher
        </button>
      </div>

      {/* Promo Banner */}
      <div className="mt-8 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white text-center">
        <p className="text-lg font-semibold mb-1">🎉 Entrega Grátis!</p>
        <p className="text-green-100 text-sm">Para todos os pedidos na zona de Évora</p>
      </div>
    </div>
  );
}
