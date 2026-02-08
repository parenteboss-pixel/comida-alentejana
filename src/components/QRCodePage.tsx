import { QRCodeSVG } from 'qrcode.react';
import { Download, Share2, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function QRCodePage() {
  const [copied, setCopied] = useState(false);
  const websiteUrl = typeof window !== 'undefined' ? window.location.href : 'https://comidaalentejana.pt';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(websiteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Comida Típica Alentejana',
          text: 'Descubra os sabores autênticos do Alentejo!',
          url: websiteUrl
        });
      } catch {
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  const handleDownload = () => {
    const svg = document.getElementById('qr-code-svg');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = 400;
      canvas.height = 400;
      if (ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 400, 400);
        ctx.drawImage(img, 0, 0, 400, 400);
        
        const pngUrl = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = 'qrcode-comida-alentejana.png';
        downloadLink.click();
      }
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-amber-900 mb-2">
          QR Code
        </h1>
        <p className="text-gray-600">Partilhe a ementa com os seus clientes</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* QR Code */}
        <div className="bg-white p-6 rounded-2xl inline-block shadow-inner border-4 border-amber-100 mb-6">
          <QRCodeSVG
            id="qr-code-svg"
            value={websiteUrl}
            size={250}
            level="H"
            includeMargin={true}
            fgColor="#78350f"
            bgColor="#ffffff"
            imageSettings={{
              src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🍷%3C/text%3E%3C/svg%3E",
              x: undefined,
              y: undefined,
              height: 40,
              width: 40,
              excavate: true
            }}
          />
        </div>

        <h2 className="font-['Playfair_Display'] text-2xl font-bold text-amber-900 mb-2">
          Comida Típica Alentejana
        </h2>
        <p className="text-gray-600 mb-6">
          Digitalize o código QR para aceder à nossa ementa digital
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-medium transition-colors"
          >
            <Download size={18} />
            Descarregar
          </button>
          
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
          >
            <Share2 size={18} />
            Partilhar
          </button>

          <button
            onClick={handleCopyLink}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              copied 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            {copied ? (
              <>
                <Check size={18} />
                Copiado!
              </>
            ) : (
              <>
                <Copy size={18} />
                Copiar Link
              </>
            )}
          </button>
        </div>

        {/* URL Display */}
        <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-600 break-all">
          {websiteUrl}
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-6">
        <h2 className="font-semibold text-lg text-amber-900 mb-4">Como Utilizar</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
              1
            </div>
            <p className="text-gray-700">
              Descarregue o QR Code em formato PNG clicando no botão "Descarregar"
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
              2
            </div>
            <p className="text-gray-700">
              Imprima e coloque nas mesas, montras ou materiais promocionais
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
              3
            </div>
            <p className="text-gray-700">
              Os clientes digitalizam e acedem instantaneamente à ementa digital
            </p>
          </div>
        </div>
      </div>

      {/* Print Template */}
      <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="font-semibold text-lg text-amber-900 mb-4 text-center">Template para Impressão</h2>
        <div className="border-2 border-dashed border-amber-200 rounded-xl p-6 text-center">
          <div className="inline-block bg-white p-4 rounded-xl shadow-lg">
            <QRCodeSVG
              value={websiteUrl}
              size={120}
              level="H"
              includeMargin={true}
              fgColor="#78350f"
            />
          </div>
          <p className="font-['Playfair_Display'] text-lg font-bold text-amber-900 mt-4">
            Digitalize para ver a Ementa
          </p>
          <p className="text-amber-600 text-sm">Comida Típica Alentejana</p>
        </div>
      </div>
    </div>
  );
}
