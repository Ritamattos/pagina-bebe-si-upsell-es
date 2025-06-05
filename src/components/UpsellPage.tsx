import { Clock, Star, Gift, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CountdownTimer from "./CountdownTimer";

const UpsellPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header de Urgência */}
      <div className="bg-red-600 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm md:text-base font-bold animate-pulse">
          🚨 NÃO FECHE ESTA PÁGINA! Sua compra ainda não foi finalizada - Oferta especial expirando...
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Timer de Urgência */}
        <div className="text-center mb-8">
          <div className="bg-green-500 text-white rounded-lg p-4 mb-6 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-6 h-6" />
              <span className="text-lg font-bold">OFERTA EXPIRA EM:</span>
            </div>
            <CountdownTimer />
            <div className="text-sm">Não perca esta oportunidade única!</div>
          </div>
        </div>

        {/* Título Principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
            ESPERE! OFERTA ESPECIAL
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-6">
            Leve TUDO do Beba Se por apenas
          </h2>
          <div className="text-6xl font-bold text-green-500 mb-2">R$ 59,90</div>
          <div className="text-xl text-gray-600 line-through mb-4">De R$ 197,00</div>
          <Badge className="bg-red-500 text-white text-lg px-4 py-2">
            70% OFF - APENAS HOJE!
          </Badge>
        </div>

        {/* Imagem do App */}
        <div className="text-center mb-12">
          <img 
            src="/lovable-uploads/c39c80b0-54ce-4f3b-9f89-9618c9528c4e.png" 
            alt="App Beba Se" 
            className="mx-auto w-64 h-64 object-contain rounded-2xl shadow-lg"
          />
          <h3 className="text-2xl font-bold text-green-600 mt-4">
            App Beba Se - Mais de 150 Perguntas!
          </h3>
          <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
            O jogo mais divertido para você jogar com namorada, namorado ou amigos! 
            Crie suas próprias perguntas personalizadas e se divirta sem limites.
          </p>
        </div>

        {/* Como Funciona */}
        <div className="bg-green-50 rounded-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-green-600 text-center mb-4">
            Como Funciona o Jogo?
          </h3>
          <div className="text-center">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-lg font-semibold text-gray-800 mb-2">
                "Se você já ficou com alguém 10 anos mais velho... Beba!"
              </p>
              <p className="text-gray-600">
                Toda vez que alguém passou por essa situação, a pessoa deve beber. 
                Diversão garantida com mais de 150 perguntas incríveis!
              </p>
            </div>
          </div>
        </div>

        {/* O que você vai receber */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-green-600 text-center mb-8">
            🎁 BÔNUS EXCLUSIVOS INCLUSOS:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Baralho Físico */}
            <Card className="border-green-500 border-2 shadow-lg">
              <CardContent className="p-6 text-center">
                <img 
                  src="/lovable-uploads/005e6251-5717-4556-86fd-d68bb71221d4.png" 
                  alt="Baralho Físico Beba Se" 
                  className="mx-auto w-48 h-48 object-contain mb-4"
                />
                <h4 className="text-xl font-bold text-green-600 mb-2">
                  Baralho Físico - 100 Cartas
                </h4>
                <p className="text-gray-700 mb-3">
                  Baralho completo para imprimir em casa ou gráfica. 
                  Jogue sem depender do celular!
                </p>
                <div className="text-lg font-bold text-gray-500 line-through">R$ 47,00</div>
                <div className="text-green-600 font-bold">GRÁTIS</div>
              </CardContent>
            </Card>

            {/* Cartas Personalizáveis */}
            <Card className="border-green-500 border-2 shadow-lg">
              <CardContent className="p-6 text-center">
                <img 
                  src="/lovable-uploads/26d4a9ec-78a8-4d58-bc3b-5bb69401ce60.png" 
                  alt="Cartas Personalizáveis" 
                  className="mx-auto w-48 h-48 object-contain mb-4"
                />
                <h4 className="text-xl font-bold text-green-600 mb-2">
                  90 Cartas Personalizáveis
                </h4>
                <p className="text-gray-700 mb-3">
                  Cartas em branco para você criar suas próprias perguntas 
                  e deixar o jogo ainda mais personalizado!
                </p>
                <div className="text-lg font-bold text-gray-500 line-through">R$ 37,00</div>
                <div className="text-green-600 font-bold">GRÁTIS</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefícios */}
        <div className="bg-green-50 rounded-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-green-600 text-center mb-6">
            ⚡ VANTAGENS EXCLUSIVAS:
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <Zap className="w-12 h-12 text-green-500 mx-auto mb-2" />
              <h4 className="font-bold text-green-600">Entrega Imediata</h4>
              <p className="text-sm text-gray-600">Acesso instantâneo após a compra</p>
            </div>
            <div className="text-center">
              <Gift className="w-12 h-12 text-green-500 mx-auto mb-2" />
              <h4 className="font-bold text-green-600">Bônus Inclusos</h4>
              <p className="text-sm text-gray-600">R$ 84 em bônus totalmente grátis</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-2" />
              <h4 className="font-bold text-green-600">Garantia 7 dias</h4>
              <p className="text-sm text-gray-600">100% do seu dinheiro de volta</p>
            </div>
          </div>
        </div>

        {/* Breakdown de Valor */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-green-600 text-center mb-6">
            💰 VALOR TOTAL DO PACOTE:
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-lg">App Beba Se (150+ perguntas)</span>
              <span className="font-bold text-gray-500 line-through">R$ 113,00</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-lg">Baralho Físico (100 cartas)</span>
              <span className="font-bold text-gray-500 line-through">R$ 47,00</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-lg">Cartas Personalizáveis (90 cartas)</span>
              <span className="font-bold text-gray-500 line-through">R$ 37,00</span>
            </div>
            <div className="flex justify-between items-center text-xl font-bold pt-3">
              <span>VALOR TOTAL:</span>
              <span className="text-gray-500 line-through">R$ 197,00</span>
            </div>
            <div className="text-center bg-green-500 text-white rounded-lg p-4">
              <div className="text-2xl font-bold">VOCÊ PAGA APENAS:</div>
              <div className="text-4xl font-bold">R$ 59,90</div>
              <div className="text-lg">Economia de R$ 137,10 (70% OFF)</div>
            </div>
          </div>
        </div>

        {/* Código Hotmart */}
        <div className="bg-green-500 text-white rounded-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">
            👇 GARANTIR MINHA OFERTA AGORA 👇
          </h3>
          <div className="bg-white rounded-lg p-4">
            <p className="text-green-600 font-bold mb-2">Cole o código da Hotmart aqui:</p>
            <div className="bg-gray-100 border-2 border-dashed border-green-500 rounded-lg p-8">
              {/* HOTMART - Sales Funnel Widget */}
              {/*--- sales funnel container ---*/}
              <div id="hotmart-sales-funnel"></div>

              {/*--- script load and setup ---*/}
              <script src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"></script>
              <script dangerouslySetInnerHTML={{
                __html: `checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel')`
              }}></script>
              {/* HOTMART - Sales Funnel Widget */}
            </div>
          </div>
        </div>

        {/* Garantia */}
        <div className="text-center bg-blue-50 rounded-lg p-6">
          <Shield className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-blue-600 mb-2">
            GARANTIA INCONDICIONAL DE 7 DIAS
          </h3>
          <p className="text-gray-700">
            Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro. 
            Sem perguntas, sem complicações!
          </p>
        </div>

        {/* Rodapé de Urgência */}
        <div className="text-center mt-8 bg-red-50 rounded-lg p-4">
          <p className="text-red-600 font-bold">
            ⏰ Esta oferta é por tempo LIMITADO e pode sair do ar a qualquer momento!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpsellPage;