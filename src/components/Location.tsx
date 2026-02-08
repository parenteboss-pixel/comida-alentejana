import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export function Location() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-amber-900 mb-2">
          Onde Estamos
        </h1>
        <p className="text-gray-600">Venha visitar-nos no coração do Alentejo</p>
      </div>

      {/* Map */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="aspect-video bg-gray-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12473.934716892586!2d-7.914726!3d38.571667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19e512b1c7f7b5%3A0x5f0c3c8e8b5c5c5c!2s%C3%89vora%2C%20Portugal!5e0!3m2!1spt-PT!2spt!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="font-semibold text-lg text-amber-900 mb-4 flex items-center gap-2">
                <MapPin className="text-amber-600" size={20} />
                Morada
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Rua do Rossio, 42<br />
                7000-524 Évora<br />
                Portugal
              </p>
              <a
                href="https://maps.google.com/?q=Rua+do+Rossio+42+Evora+Portugal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-amber-600 hover:text-amber-700 font-medium"
              >
                Ver no Google Maps →
              </a>
            </div>

            <div>
              <h2 className="font-semibold text-lg text-amber-900 mb-4 flex items-center gap-2">
                <Clock className="text-amber-600" size={20} />
                Horário de Funcionamento
              </h2>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Segunda-feira</span>
                  <span className="text-red-500">Encerrado</span>
                </div>
                <div className="flex justify-between">
                  <span>Terça a Sexta</span>
                  <span>12h00 - 15h00 | 19h00 - 23h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado e Domingo</span>
                  <span>12h00 - 16h00 | 19h00 - 23h30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <a
          href="tel:+351266123456"
          className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
        >
          <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="text-amber-600" size={24} />
          </div>
          <h3 className="font-semibold text-amber-900 mb-1">Telefone</h3>
          <p className="text-gray-600">+351 266 123 456</p>
        </a>

        <a
          href="https://wa.me/351912345678"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
        >
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <h3 className="font-semibold text-amber-900 mb-1">WhatsApp</h3>
          <p className="text-gray-600">+351 912 345 678</p>
        </a>

        <a
          href="mailto:geral@comidaalentejana.pt"
          className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
        >
          <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="text-amber-600" size={24} />
          </div>
          <h3 className="font-semibold text-amber-900 mb-1">Email</h3>
          <p className="text-gray-600">geral@comidaalentejana.pt</p>
        </a>
      </div>

      {/* Additional Info */}
      <div className="mt-8 bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-6">
        <h2 className="font-['Playfair_Display'] text-xl font-bold text-amber-900 mb-4">
          Informações Úteis
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <div>
            <h3 className="font-semibold mb-2">🅿️ Estacionamento</h3>
            <p className="text-sm">Parque de estacionamento gratuito a 100 metros (Largo da Graça)</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">♿ Acessibilidade</h3>
            <p className="text-sm">Acesso para pessoas com mobilidade reduzida</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">🐕 Animais</h3>
            <p className="text-sm">Animais de estimação permitidos na esplanada</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">💳 Pagamentos</h3>
            <p className="text-sm">Aceitamos MB Way, Multibanco, Visa, Mastercard e dinheiro</p>
          </div>
        </div>
      </div>
    </div>
  );
}
