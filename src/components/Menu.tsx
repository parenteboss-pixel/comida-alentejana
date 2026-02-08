import { useState } from 'react';
import { Plus, Check, Star, Flame } from 'lucide-react';
import { menuItems, categories } from '../data/menuData';
import { useCart } from '../context/CartContext';

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('pratos');
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const { addToCart } = useCart();

  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  const activeInfo = categories.find(c => c.id === activeCategory);

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart(item);
    setAddedItems(prev => new Set(prev).add(item.id));
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(item.id);
        return newSet;
      });
    }, 1500);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  // Featured items (first item of pratos and sobremesas)
  const featuredItems = [
    menuItems.find(i => i.id === 'pp1'),
    menuItems.find(i => i.id === 'pp3')
  ].filter(Boolean);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden mb-10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=400&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/70" />
        </div>
        <div className="relative z-10 py-12 px-6 md:px-12 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-3">
            A Nossa Ementa
          </h1>
          <p className="text-amber-200 text-lg max-w-2xl mx-auto">
            Sabores autênticos do Alentejo, preparados com amor e tradição. 
            Ingredientes frescos e receitas que passam de geração em geração.
          </p>
        </div>
      </div>

      {/* Featured Items */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Flame className="text-orange-500" size={24} />
          <h2 className="font-['Playfair_Display'] text-2xl font-bold text-amber-900">
            Pratos em Destaque
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredItems.map(item => item && (
            <div
              key={item.id}
              className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star size={14} fill="white" />
                  Popular
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-['Playfair_Display'] font-bold text-xl text-amber-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-700">
                    {formatPrice(item.price)}
                  </span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                      addedItems.has(item.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg'
                    }`}
                  >
                    {addedItems.has(item.id) ? (
                      <>
                        <Check size={18} />
                        Adicionado!
                      </>
                    ) : (
                      <>
                        <Plus size={18} />
                        Adicionar
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-[72px] bg-amber-50/95 backdrop-blur-sm py-4 z-30 -mx-4 px-4 mb-6">
        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-medium whitespace-nowrap transition-all transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-amber-700 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-amber-100 shadow-md'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Category Description */}
      {activeInfo && (
        <div className="mb-6 text-center">
          <h2 className="font-['Playfair_Display'] text-2xl font-bold text-amber-900 mb-1">
            {activeInfo.icon} {activeInfo.name}
          </h2>
          <p className="text-gray-600">{activeInfo.description}</p>
        </div>
      )}

      {/* Menu Items Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group animate-fadeIn"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-44 h-48 md:h-auto flex-shrink-0 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-gradient-to-r" />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-['Playfair_Display'] font-semibold text-lg text-amber-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm flex-grow mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-amber-700">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all transform hover:scale-105 ${
                      addedItems.has(item.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-amber-600 hover:bg-amber-500 text-white shadow-md'
                    }`}
                  >
                    {addedItems.has(item.id) ? (
                      <>
                        <Check size={18} />
                        Adicionado
                      </>
                    ) : (
                      <>
                        <Plus size={18} />
                        Adicionar
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🍽️</div>
          <p className="text-gray-500 text-lg">Nenhum item nesta categoria.</p>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-12 bg-gradient-to-r from-amber-700 to-amber-600 rounded-2xl p-8 text-center text-white">
        <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-2">
          Não encontrou o que procura?
        </h3>
        <p className="text-amber-100 mb-4">
          Contacte-nos e teremos todo o gosto em ajudar. Também fazemos pratos especiais sob encomenda.
        </p>
        <a
          href="https://wa.me/351912345678"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-xl font-semibold hover:bg-amber-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Falar Connosco
        </a>
      </div>
    </div>
  );
}
