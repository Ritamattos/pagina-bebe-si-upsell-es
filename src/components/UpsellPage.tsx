
import { Clock, Star, Gift, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import CountdownTimer from "./CountdownTimer";

const UpsellPage = () => {
  useEffect(() => {
    // Cargar script de Hotmart
    const script = document.createElement('script');
    script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
    script.async = true;
    script.onload = () => {
      // Ejecutar el código de inicialización después de que se cargue el script
      const initScript = document.createElement('script');
      initScript.innerHTML = `
        checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel')
      `;
      document.head.appendChild(initScript);
    };
    document.head.appendChild(script);

    return () => {
      // Limpiar scripts cuando el componente se desmonte
      const scripts = document.querySelectorAll('script[src*="hotmart-checkout-elements"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header de Urgencia */}
      <div className="bg-red-600 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm md:text-base font-bold animate-pulse">
          🚨 ¡NO CIERRES ESTA PÁGINA! Tu compra aún no se ha finalizado - Oferta especial expirando...
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Timer de Urgencia */}
        <div className="text-center mb-8">
          <div className="bg-green-500 text-white rounded-lg p-4 mb-6 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-6 h-6" />
              <span className="text-lg font-bold">LA OFERTA EXPIRA EN:</span>
            </div>
            <CountdownTimer />
            <div className="text-sm">¡No pierdas esta oportunidad única!</div>
          </div>
        </div>

        {/* Título Principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
            ¡ESPERA! OFERTA ESPECIAL
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-6">
            Llévate TODO de Bebe Si por solo
          </h2>
          <div className="text-6xl font-bold text-green-500 mb-2">$ 9,90</div>
          <div className="text-xl text-gray-600 line-through mb-4">De $ 197,00</div>
          <Badge className="bg-red-500 text-white text-lg px-4 py-2">
            85% OFF - ¡SOLO HOY!
          </Badge>
        </div>

        {/* Imagen del App */}
        <div className="text-center mb-12">
          <img 
            src="/lovable-uploads/c39c80b0-54ce-4f3b-9f89-9618c9528c4e.png" 
            alt="App Bebe Si" 
            className="mx-auto w-64 h-64 object-contain rounded-2xl shadow-lg"
          />
          <h3 className="text-2xl font-bold text-green-600 mt-4">
            App Bebe Si - ¡Más de 150 Preguntas!
          </h3>
          <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
            ¡El juego más divertido para jugar con tu novia, novio o amigos! 
            Crea tus propias preguntas personalizadas y diviértete sin límites.
          </p>
        </div>

        {/* Cómo Funciona */}
        <div className="bg-green-50 rounded-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-green-600 text-center mb-4">
            ¿Cómo Funciona el Juego?
          </h3>
          <div className="text-center">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-lg font-semibold text-gray-800 mb-2">
                "Si ya estuviste con alguien 10 años mayor... ¡Bebe!"
              </p>
              <p className="text-gray-600">
                Cada vez que alguien haya pasado por esa situación, la persona debe beber. 
                ¡Diversión garantizada con más de 150 preguntas increíbles!
              </p>
            </div>
          </div>
        </div>

        {/* Lo que vas a recibir */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-green-600 text-center mb-8">
            🎁 BONOS EXCLUSIVOS INCLUIDOS:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Baraja Física */}
            <Card className="border-green-500 border-2 shadow-lg">
              <CardContent className="p-6 text-center">
                <img 
                  src="/lovable-uploads/26d4a9ec-78a8-4d58-bc3b-5bb69401ce60.png" 
                  alt="Baraja Física Bebe Si" 
                  className="mx-auto w-48 h-48 object-contain mb-4"
                />
                <h4 className="text-xl font-bold text-green-600 mb-2">
                  Baraja Física - 100 Cartas
                </h4>
                <p className="text-gray-700 mb-3">
                  Baraja completa para imprimir en casa o en imprenta. 
                  ¡Juega sin depender del celular!
                </p>
                <div className="text-lg font-bold text-gray-500 line-through">$ 47,00</div>
                <div className="text-green-600 font-bold">GRATIS</div>
              </CardContent>
            </Card>

            {/* Cartas Personalizables */}
            <Card className="border-green-500 border-2 shadow-lg">
              <CardContent className="p-6 text-center">
                <img 
                  src="/lovable-uploads/005e6251-5717-4556-86fd-d68bb71221d4.png" 
                  alt="Cartas Personalizables" 
                  className="mx-auto w-48 h-48 object-contain mb-4"
                />
                <h4 className="text-xl font-bold text-green-600 mb-2">
                  90 Cartas Personalizables
                </h4>
                <p className="text-gray-700 mb-3">
                  Cartas en blanco para que crees tus propias preguntas 
                  ¡y hagas el juego aún más personalizado!
                </p>
                <div className="text-lg font-bold text-gray-500 line-through">$ 37,00</div>
                <div className="text-green-600 font-bold">GRATIS</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Beneficios */}
        <div className="bg-green-50 rounded-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-green-600 text-center mb-6">
            ⚡ VENTAJAS EXCLUSIVAS:
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <Zap className="w-12 h-12 text-green-500 mx-auto mb-2" />
              <h4 className="font-bold text-green-600">Entrega Inmediata</h4>
              <p className="text-sm text-gray-600">Acceso instantáneo después de la compra</p>
            </div>
            <div className="text-center">
              <Gift className="w-12 h-12 text-green-500 mx-auto mb-2" />
              <h4 className="font-bold text-green-600">Bonos Incluidos</h4>
              <p className="text-sm text-gray-600">$ 84 en bonos totalmente gratis</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-2" />
              <h4 className="font-bold text-green-600">Garantía 7 días</h4>
              <p className="text-sm text-gray-600">100% de tu dinero de vuelta</p>
            </div>
          </div>
        </div>

        {/* Desglose de Valor */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-green-600 text-center mb-6">
            💰 VALOR TOTAL DEL PAQUETE:
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-lg">App Bebe Si (150+ preguntas)</span>
              <span className="font-bold text-gray-500 line-through">$ 113,00</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-lg">Baraja Física (100 cartas)</span>
              <span className="font-bold text-gray-500 line-through">$ 47,00</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-lg">Cartas Personalizables (90 cartas)</span>
              <span className="font-bold text-gray-500 line-through">$ 37,00</span>
            </div>
            <div className="flex justify-between items-center text-xl font-bold pt-3">
              <span>VALOR TOTAL:</span>
              <span className="text-gray-500 line-through">$ 197,00</span>
            </div>
            <div className="text-center bg-green-500 text-white rounded-lg p-4">
              <div className="text-2xl font-bold">PAGAS SOLO:</div>
              <div className="text-4xl font-bold">$ 9,90</div>
              <div className="text-lg">Ahorro de $ 187,10 (85% OFF)</div>
            </div>
          </div>
        </div>

        {/* Código Hotmart */}
        <div className="bg-green-500 text-white rounded-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">
            👇 ASEGURAR MI OFERTA AHORA 👇
          </h3>
          <div className="bg-white rounded-lg p-4">
            {/* HOTMART - Sales Funnel Widget */}
            <div id="hotmart-sales-funnel"></div>
            {/* Widget será cargado vía useEffect */}
          </div>
        </div>

        {/* Garantía */}
        <div className="text-center bg-blue-50 rounded-lg p-6">
          <Shield className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-blue-600 mb-2">
            GARANTÍA INCONDICIONAL DE 7 DÍAS
          </h3>
          <p className="text-gray-700">
            Si por cualquier motivo no quedas satisfecho, te devolvemos el 100% de tu dinero. 
            ¡Sin preguntas, sin complicaciones!
          </p>
        </div>

        {/* Pie de Urgencia */}
        <div className="text-center mt-8 bg-red-50 rounded-lg p-4">
          <p className="text-red-600 font-bold">
            ⏰ ¡Esta oferta es por tiempo LIMITADO y puede salir del aire en cualquier momento!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpsellPage;
