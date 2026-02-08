import { MapPin, Phone, UtensilsCrossed, QrCode, Star, Clock, Award } from 'lucide-react';
import { Page } from '../App';

interface HomeProps {
  setPage: (page: Page) => void;
}

export function Home({ setPage }: HomeProps) {
  const testimonials = [
    { name: 'Maria Santos', text: 'A melhor carne de porco à alentejana que já comi! Ambiente acolhedor e atendimento impecável.', rating: 5 },
    { name: 'João Pereira', text: 'Os secretos de porco preto são divinos. Voltaremos com certeza!', rating: 5 },
    { name: 'Ana Costa', text: 'Sericaia autêntica como a minha avó fazia. Recomendo vivamente!', rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[75vh] min-h-[550px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=900&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-amber-900/90" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="bg-amber-600/80 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 backdrop-blur-sm">
              <Award size={16} />
              Desde 1987
            </span>
            <span className="bg-green-600/80 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 backdrop-blur-sm">
              <Star size={16} fill="white" />
              4.9 no Google
            </span>
          </div>

          <div className="mb-6">
            <span className="text-7xl drop-shadow-lg">🍷</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 drop-shadow-lg">
            Comida Típica Alentejana
          </h1>
          <p className="text-amber-200 text-lg md:text-xl font-medium tracking-wider mb-2">
            Sabores Autênticos do Alentejo
          </p>
          <p className="text-white/80 text-base md:text-lg max-w-xl mb-6 leading-relaxed">
            Tradição, qualidade e amor em cada prato. Venha descobrir o melhor da gastronomia alentejana 
            no coração de Évora.
          </p>
          
          {/* Botões principais - mais visíveis e posicionados mais acima */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => setPage('menu')}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3 border-2 border-amber-400/30"
            >
              <UtensilsCrossed size={28} />
              Ver Ementa
            </button>
            <button
              onClick={() => setPage('menu')}
              className="bg-white hover:bg-amber-50 text-amber-800 px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-black/20 transition-all transform hover:scale-105 hover:-translate-y-1 border-2 border-white/50"
            >
              🍽️ Fazer Pedido
            </button>
          </div>

          {/* Indicador de scroll */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
            <div className="w-7 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-5xl mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <button
            onClick={() => setPage('menu')}
            className="flex flex-col items-center gap-3 p-5 rounded-2xl hover:bg-amber-50 transition-all group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <UtensilsCrossed className="text-amber-700" size={32} />
            </div>
            <span className="font-semibold text-gray-700">Ementa</span>
          </button>
          
          <button
            onClick={() => setPage('location')}
            className="flex flex-col items-center gap-3 p-5 rounded-2xl hover:bg-amber-50 transition-all group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <MapPin className="text-amber-700" size={32} />
            </div>
            <span className="font-semibold text-gray-700">Localização</span>
          </button>
          
          <a
            href="https://wa.me/351912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-5 rounded-2xl hover:bg-green-50 transition-all group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <span className="font-semibold text-gray-700">WhatsApp</span>
          </a>
          
          <button
            onClick={() => setPage('qrcode')}
            className="flex flex-col items-center gap-3 p-5 rounded-2xl hover:bg-amber-50 transition-all group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <QrCode className="text-amber-700" size={32} />
            </div>
            <span className="font-semibold text-gray-700">QR Code</span>
          </button>
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">A Nossa História</span>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-amber-900 mt-2 mb-6">
              Bem-vindos ao Alentejo à Mesa
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Somos um restaurante familiar dedicado a preservar e celebrar as receitas tradicionais 
              do Alentejo desde 1987. Utilizamos ingredientes locais de produtores da região, desde o 
              porco preto alentejano aos queijos de ovelha, passando pelos vinhos das melhores herdades.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Cada prato conta uma história, cada sabor evoca memórias. Convidamo-lo a sentar-se 
              à nossa mesa e a descobrir o verdadeiro sabor do Alentejo.
            </p>
            <button
              onClick={() => setPage('menu')}
              className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-xl font-semibold transition-all inline-flex items-center gap-2"
            >
              Conhecer a Ementa
              <UtensilsCrossed size={20} />
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=500&fit=crop"
              alt="Interior do restaurante"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Clock className="text-amber-700" size={24} />
                </div>
                <div>
                  <p className="font-bold text-amber-900">37 Anos</p>
                  <p className="text-sm text-gray-500">de tradição</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-br from-amber-100 to-amber-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">O Que Nos Distingue</span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-amber-900 mt-2">
              Qualidade e Tradição
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🐷</div>
              <h3 className="font-['Playfair_Display'] font-bold text-xl text-amber-900 mb-3">Porco Preto Alentejano</h3>
              <p className="text-gray-600">Criado em montado, alimentado a bolota. Sabor único e incomparável que define a nossa gastronomia.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🍷</div>
              <h3 className="font-['Playfair_Display'] font-bold text-xl text-amber-900 mb-3">Vinhos da Região</h3>
              <p className="text-gray-600">Seleção cuidada das melhores adegas alentejanas. Tintos encorpados e brancos frescos.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="font-['Playfair_Display'] font-bold text-xl text-amber-900 mb-3">Produtos Locais</h3>
              <p className="text-gray-600">Queijos, enchidos e azeite de produtores locais certificados. Do campo para a mesa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider">Os Favoritos</span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mt-2">
              Especialidades da Casa
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2 transition-all group">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=400&h=300&fit=crop"
                  alt="Carne de Porco à Alentejana"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ⭐ Popular
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-['Playfair_Display'] font-bold text-lg text-amber-900">Carne de Porco à Alentejana</h3>
                <p className="text-gray-600 text-sm mt-1 mb-3">O clássico que não pode perder</p>
                <div className="flex items-center justify-between">
                  <p className="text-amber-700 font-bold text-2xl">€18,50</p>
                  <button 
                    onClick={() => setPage('menu')}
                    className="text-amber-600 font-semibold hover:text-amber-700"
                  >
                    Ver mais →
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2 transition-all group">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop"
                  alt="Secretos de Porco Preto"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  🔥 Especial
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-['Playfair_Display'] font-bold text-lg text-amber-900">Secretos de Porco Preto</h3>
                <p className="text-gray-600 text-sm mt-1 mb-3">Grelhados na perfeição</p>
                <div className="flex items-center justify-between">
                  <p className="text-amber-700 font-bold text-2xl">€19,90</p>
                  <button 
                    onClick={() => setPage('menu')}
                    className="text-amber-600 font-semibold hover:text-amber-700"
                  >
                    Ver mais →
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2 transition-all group">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop"
                  alt="Sericaia"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  🍮 Doce
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-['Playfair_Display'] font-bold text-lg text-amber-900">Sericaia com Ameixas</h3>
                <p className="text-gray-600 text-sm mt-1 mb-3">Doce conventual tradicional</p>
                <div className="flex items-center justify-between">
                  <p className="text-amber-700 font-bold text-2xl">€6,50</p>
                  <button 
                    onClick={() => setPage('menu')}
                    className="text-amber-600 font-semibold hover:text-amber-700"
                  >
                    Ver mais →
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => setPage('menu')}
              className="bg-white text-amber-900 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-amber-100 transition-colors shadow-xl"
            >
              Ver Ementa Completa
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Testemunhos</span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-amber-900 mt-2">
              O Que Dizem os Nossos Clientes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-amber-50 rounded-2xl p-6 relative">
                <div className="absolute -top-4 left-6 text-5xl text-amber-300">"</div>
                <div className="flex gap-1 mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-amber-500" fill="#f59e0b" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-amber-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-amber-100 via-amber-50 to-white rounded-3xl p-10 shadow-xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Visite-nos</span>
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-amber-900 mt-2 mb-6">
                Estamos à Sua Espera
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start gap-3">
                  <MapPin className="text-amber-600 flex-shrink-0 mt-1" size={22} />
                  <span>Rua do Rossio, 42<br />7000-524 Évora, Portugal</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="text-amber-600" size={22} />
                  +351 912 345 678
                </p>
                <p className="flex items-start gap-3">
                  <Clock className="text-amber-600 flex-shrink-0 mt-1" size={22} />
                  <span>
                    <strong>Terça a Domingo</strong><br />
                    12h00 - 15h00 | 19h00 - 23h00
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/351912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Reservar por WhatsApp
              </a>
              <button
                onClick={() => setPage('contact')}
                className="flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <Phone size={22} />
                Contactar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="bg-amber-900 py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-amber-200 text-lg mb-2">🇵🇹 Orgulhosamente Alentejano</p>
          <p className="text-white/70 text-sm">
            © 2024 Comida Típica Alentejana. Todos os direitos reservados.
          </p>
        </div>
      </section>
    </div>
  );
}
