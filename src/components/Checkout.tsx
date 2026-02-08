import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Page } from '../App';
import { Send, CreditCard, Banknote, Smartphone, Building2 } from 'lucide-react';

interface CheckoutProps {
  setPage: (page: Page) => void;
}

export function Checkout({ setPage }: CheckoutProps) {
  const { items, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    paymentMethod: 'mbway' as 'mbway' | 'multibanco' | 'dinheiro' | 'cartao',
    observations: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  const paymentMethods = [
    { id: 'mbway', name: 'MB Way', icon: Smartphone },
    { id: 'multibanco', name: 'Multibanco', icon: Building2 },
    { id: 'cartao', name: 'Cartão', icon: CreditCard },
    { id: 'dinheiro', name: 'Dinheiro', icon: Banknote }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format order message for WhatsApp
    const orderItems = items.map(item => 
      `• ${item.quantity}x ${item.name} - ${formatPrice(item.price * item.quantity)}`
    ).join('\n');

    const paymentLabel = paymentMethods.find(m => m.id === formData.paymentMethod)?.name || formData.paymentMethod;

    const message = `🍽️ *NOVO PEDIDO - Comida Típica Alentejana*

📋 *Itens do Pedido:*
${orderItems}

💰 *Total:* ${formatPrice(getTotalPrice())}

👤 *Cliente:* ${formData.name}
📍 *Morada:* ${formData.address}
📱 *Telefone:* ${formData.phone}
💳 *Pagamento:* ${paymentLabel}

${formData.observations ? `📝 *Observações:* ${formData.observations}` : ''}

Obrigado pela preferência! 🙏`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/351912345678?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Clear cart and redirect
    setTimeout(() => {
      clearCart();
      setIsSubmitting(false);
      setPage('home');
    }, 1000);
  };

  if (items.length === 0) {
    setPage('cart');
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="font-['Playfair_Display'] text-3xl font-bold text-amber-900 mb-6 text-center">
        Finalizar Pedido
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="font-semibold text-lg text-amber-900 mb-4">Resumo do Pedido</h2>
          <div className="space-y-2 mb-4">
            {items.map(item => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-gray-600">{item.quantity}x {item.name}</span>
                <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-3 flex justify-between">
            <span className="font-bold text-amber-900">Total</span>
            <span className="font-bold text-amber-700 text-xl">{formatPrice(getTotalPrice())}</span>
          </div>
        </div>

        {/* Customer Details */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="font-semibold text-lg text-amber-900 mb-4">Os Seus Dados</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome Completo *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                placeholder="O seu nome"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Morada Completa *
              </label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={e => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                placeholder="Rua, número, código postal, localidade"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telemóvel *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                placeholder="+351 912 345 678"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Observações
              </label>
              <textarea
                value={formData.observations}
                onChange={e => setFormData({ ...formData, observations: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                rows={3}
                placeholder="Alguma alergia ou pedido especial?"
              />
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="font-semibold text-lg text-amber-900 mb-4">Forma de Pagamento</h2>
          
          <div className="grid grid-cols-2 gap-3">
            {paymentMethods.map(method => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: method.id as typeof formData.paymentMethod })}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                    formData.paymentMethod === method.id
                      ? 'border-amber-500 bg-amber-50 text-amber-700'
                      : 'border-gray-200 hover:border-amber-300'
                  }`}
                >
                  <Icon size={24} />
                  <span className="font-medium text-sm">{method.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-400 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-colors shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              A enviar...
            </>
          ) : (
            <>
              <Send size={20} />
              Enviar Pedido via WhatsApp
            </>
          )}
        </button>

        <p className="text-center text-sm text-gray-500">
          O seu pedido será enviado diretamente para o nosso WhatsApp
        </p>
      </form>
    </div>
  );
}
