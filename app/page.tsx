"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Bot,
  Wifi,
  Battery,
  AlertCircle,
  CreditCard,
  CalendarDays,
  CheckCircle2,
  Info,
} from "lucide-react";

export default function ArenaFonteNovaLanding() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  };
  const slides = [
    {
      title: "Automação inteligente",
      description:
        "Nossa IA interpreta as solicitações e executa as ações automaticamente.",
      image: "/1.png",
    },
    {
      title: "Integração em tempo real",
      description:
        "Acompanhe a comunicação entre a interface física e nossa IA.",
      image: "/2.png",
    },
    {
      title: "Experiência simplificada",
      description:
        "Uma experiência fluida, intuitiva e integrada do início ao fim.",
      image: "/3.png",
    },
    {
      title: "Interface dinâmica com propagandas",
      description:
        "Durante o timer das propagandas, a interface se adapta para exibir uma sequência de anúncios no painel lateral, mantendo as principais informações da sala sempre visíveis e acessíveis.",
      image: "/4.png",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-gray-300">
      {/* HERO SECTION - Destaque Gray */}
      <section className="h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 lg:px-8 bg-gray-700">
        <motion.div
          className="relative max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-gray-800 text-gray-200 text-xs font-semibold tracking-widest mb-8 border border-gray-600 uppercase shadow-sm">
            Proposta Comercial Exclusiva
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
            Sistema de Salas. <br />
            <span className="text-gray-400">Arena Fonte Nova.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
            Automação inteligente e gestão de espaços com IA integrada ao
            WhatsApp. A inovação invisível que transforma a experiência
            corporativa.
          </p>
        </motion.div>
      </section>

      {/* CORE FEATURES SECTION - Fundo Branco */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div className="text-center mb-20" {...fadeIn}>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Solução Completa
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            Hardware dedicado e software desenhado para trabalhar em perfeita
            harmonia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Hardware Card */}
          <motion.div
            className="bg-zinc-50 p-10 rounded-[2rem] shadow-sm border border-zinc-200 transition-all hover:border-zinc-300"
            {...fadeIn}
          >
            <div className="mb-8">
              <Monitor
                size={40}
                className="text-zinc-900 mb-6"
                strokeWidth={1.5}
              />
              <h3 className="text-3xl font-semibold tracking-tight mb-3 text-zinc-900">
                100 Tablets + Suportes.
              </h3>
              <p className="text-zinc-600 text-lg">
                Design elegante nas portas das salas. <br></br>
                (imagem ilustrativa, não representa o modelo final do tablet)
              </p>
            </div>

            <div className="w-full h-100 rounded-2xl mb-8 flex flex-col items-center justify-center text-zinc-400 bg-white overflow-hidden relative border border-zinc-200">
              <span className="text-xs font-semibold tracking-widest uppercase">
                <img
                  src="/tablet.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </span>
            </div>

            <ul className="space-y-4">
              {[
                { icon: Monitor, text: "Tela 14 Polegadas" },
                { icon: Wifi, text: "Wi-Fi" },
                {
                  icon: Battery,
                  text: "Bateria (8000 mAh)",
                },
                {
                  icon: Monitor,
                  text: "Resolução do display: 1280X800",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-zinc-700 font-medium"
                >
                  <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon size={16} className="text-zinc-900" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Software & IA Card */}
          <motion.div
            className="bg-zinc-50 p-10 rounded-[2rem] shadow-sm border border-zinc-200 transition-all hover:border-zinc-300"
            {...fadeIn}
          >
            <div className="mb-8">
              <Bot size={40} className="text-zinc-900 mb-6" strokeWidth={1.5} />
              <h3 className="text-3xl font-semibold tracking-tight mb-3 text-zinc-900">
                Desenvolvimento & IA.
              </h3>
              <p className="text-zinc-600 text-lg">
                Integração fluida e inteligente via WhatsApp para reservas
                instantâneas.
              </p>
            </div>

            <div className="w-full h-100 bg-[#070B19] rounded-2xl mb-8 overflow-hidden relative border border-zinc-200">
              <img
                src="/sistema.png"
                alt="Sistema"
                className="w-full h-full object-contain"
              />
            </div>

            <ul className="space-y-4">
              {[
                { icon: Smartphone, text: "Sistema web completo" },
                { icon: Bot, text: "IA integrada diretamente ao WhatsApp" },
                {
                  icon: CheckCircle2,
                  text: "Configuração e implantação em nuvem",
                },
                { icon: Info, text: "Treinamento completo para a equipe" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-zinc-700 font-medium"
                >
                  <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon size={16} className="text-zinc-900" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4 text-center mt-8">
          Dashboard
        </h2>
        <p className="text-xl text-zinc-500 max-w-4xl mx-auto mt-8">
          Será disponibilizado um dashboard administrativo, permitindo à equipe
          gerenciar, acompanhar e consultar os agendamentos de forma
          centralizada, sempre que necessário.
        </p>
      </section>

      {/* CARROSSEL MANUAL */}
      <section className="w-full overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Veja em ação.
            </h2>

            <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto">
              Experimente a fluidez da integração em tempo real entre a
              interface física e nossa IA.
            </p>
          </motion.div>

          {/* SLIDE */}
          <motion.div key={currentSlide} className="w-full" {...fadeIn}>
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* INFORMAÇÕES */}
            <div className="text-center mt-8">
              <h3 className="text-2xl font-semibold">
                {slides[currentSlide].title}
              </h3>

              <p className="mt-3 max-w-2xl mx-auto text-gray-600">
                {slides[currentSlide].description}
              </p>
            </div>
          </motion.div>

          {/* CONTROLES */}
          <div className="flex items-center justify-between mt-8">
            {/* ANTERIOR */}
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? slides.length - 1 : prev - 1,
                )
              }
              className="px-5 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              ← Anterior
            </button>

            {/* INDICADORES */}
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentSlide === index
                      ? "w-8 bg-black"
                      : "w-2.5 bg-gray-300"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            {/* PRÓXIMO */}
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === slides.length - 1 ? 0 : prev + 1,
                )
              }
              className="px-5 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              Próximo →
            </button>
          </div>
        </div>
      </section>

      {/* INVESTMENT SECTION - Fundo Branco */}

      <section id="investimento" className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-zinc-900">
              O Investimento.
            </h2>
            <p className="text-xl text-zinc-500">
              Transparência total e tecnologia de ponta em um pacote integrado.
            </p>
          </motion.div>
          <motion.div
            className="bg-zinc-50 rounded-[2rem] p-8 md:p-14 border border-zinc-200 shadow-sm relative overflow-hidden"
            {...fadeIn}
          >
            {/* HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-zinc-200 pb-10 mb-10">
              <div>
                <p className="text-zinc-500 font-medium mb-2 tracking-wide uppercase text-sm">
                  Hardware + Software + Implantação
                </p>

                <h3 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900">
                  R$ 151.200
                </h3>
              </div>

              <div className="mt-6 md:mt-0 bg-white border border-zinc-200 text-zinc-700 px-6 py-3 rounded-full font-medium flex items-center gap-3 text-sm shadow-sm">
                <CheckCircle2 size={18} className="text-zinc-900 shrink-0" />
                <span>3 Meses Grátis de Licenciamento</span>
              </div>
            </div>

            {/* CONTEÚDO EM FLEX */}
            <div className="flex flex-col md:flex-row">
              {/* ================= ESQUERDA ================= */}
              <div className="flex-1 md:pr-10">
                <h4 className="text-zinc-900 font-semibold text-lg mb-6 flex items-center gap-3">
                  <Monitor size={20} className="text-zinc-500 shrink-0" />
                  Composição
                </h4>

                <div className="flex flex-col">
                  {/* Tablets */}
                  <div className="flex justify-between items-center gap-4 border-b border-zinc-200 py-4">
                    <span className="text-zinc-600">
                      100 Tablets + Suportes
                    </span>

                    <strong className="text-zinc-900 font-medium whitespace-nowrap">
                      R$ 120.000,00
                    </strong>
                  </div>

                  {/* Imposto */}
                  <div className="flex justify-between items-center gap-4 border-b border-zinc-200 py-4">
                    <span className="text-zinc-600">Imposto (%12)</span>

                    <strong className="text-zinc-900 font-medium whitespace-nowrap">
                      R$ 16.200,00
                    </strong>
                  </div>

                  {/* Desenvolvimento */}
                  <div className="flex justify-between items-center gap-4 border-b border-zinc-200 py-4">
                    <span className="text-zinc-600">
                      Desenvolvimento do Sistema
                    </span>

                    <strong className="text-zinc-900 font-medium whitespace-nowrap">
                      R$ 15.000,00
                    </strong>
                  </div>
                </div>

                {/* INFORMAÇÕES DO CAMAROTE */}
                <div className="mt-6 text-sm text-zinc-500 leading-relaxed">
                  <p>
                    <strong className="text-zinc-700">Camarote:</strong> R$
                    151,200
                  </p>

                  <p>
                    <strong className="text-zinc-700">Quantidade:</strong> 100
                    camarotes
                  </p>

                  <p>
                    <strong className="text-zinc-700">Total:</strong> R$
                    1.512/ano
                  </p>

                  <p>
                    <strong className="text-zinc-700">Equivalente:</strong> R$
                    126/mês
                  </p>
                </div>
              </div>

              {/* ================= DIVISÓRIA ================= */}
              <div className="hidden md:block w-px bg-zinc-200" />

              {/* ================= DIREITA ================= */}
              <div className="flex-1 md:pl-10 mt-12 md:mt-0">
                <h4 className="text-zinc-900 font-semibold text-lg mb-6 flex items-center gap-3">
                  <CalendarDays size={20} className="text-zinc-500 shrink-0" />
                  Após 3 Meses (Licenciamento)
                </h4>

                <div className="flex flex-col">
                  {/* Valor inicial */}
                  <div className="flex justify-between items-center gap-4 border-b border-zinc-200 py-4">
                    <span className="text-zinc-600">
                      Valor Inicial
                      <span className="text-xs text-zinc-400 block mt-0.5">
                        20 Salas
                      </span>
                    </span>

                    <strong className="text-zinc-900 font-medium text-right whitespace-nowrap">
                      R$ 4.000,00/mês
                    </strong>
                  </div>

                  {/* Valor adicional */}
                  <div className="flex justify-between items-center gap-4 border-b border-zinc-200 py-4">
                    <span className="text-zinc-600">
                      Valor Adicional por sala
                      <span className="text-xs text-zinc-400 block mt-0.5">
                        até 40 salas
                      </span>
                    </span>

                    <strong className="text-zinc-900 font-medium text-right whitespace-nowrap">
                      + R$ 100,00/mês por sala
                    </strong>
                  </div>
                </div>

                {/* INFORMAÇÕES DAS SALAS */}
                <div className="mt-6 text-sm text-zinc-500 leading-relaxed">
                  <p>
                    <strong className="text-zinc-700">Valor mensal:</strong> R$
                    4.000 / 20 salas
                  </p>

                  <p>
                    <strong className="text-zinc-700">Por sala:</strong> R$
                    200/mês
                  </p>
                </div>
              </div>
            </div>
            {/* OBSERVAÇÃO */}
            <div className="mt-10 pt-6 border-t border-zinc-200">
              <p className="text-sm text-zinc-500 leading-relaxed">
                <strong className="text-zinc-700">Observação:</strong> R$ 1.000 de forma antecipada destinados à aquisição de amostras para a apresentação.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ALERT SECTION - Fundo Branco */}
      <section className="pb-32 px-6 lg:px-8 max-w-4xl mx-auto bg-white flex flex-col gap-6">
        {/* infra local */}
        <motion.div
          className="bg-zinc-50 border border-zinc-200 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start shadow-sm"
          {...fadeIn}
        >
          <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
            <AlertCircle
              className="text-zinc-900"
              size={24}
              strokeWidth={1.5}
            />
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 text-lg mb-2">
              Nota sobre Infraestrutura Local
            </h4>
            <p className="text-zinc-600 leading-relaxed">
              A infraestrutura local necessária para o funcionamento presencial
              (como rede Wi-Fi com cobertura para os 100 pontos, cabeamento,
              suporte técnico local, pontos de energia e fixação mecânica){" "}
              <strong className="text-zinc-900">
                não está inclusa neste orçamento
              </strong>{" "}
              e deve ser providenciada à parte pelo cliente.
            </p>
          </div>
        </motion.div>

        {/* equipe */}
        <motion.div
          className="bg-zinc-50 border border-zinc-200 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start shadow-sm"
          {...fadeIn}
        >
          <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
            <AlertCircle
              className="text-zinc-900"
              size={24}
              strokeWidth={1.5}
            />
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 text-lg mb-2">
              Nota sobre Acompanhamento da Equipe
            </h4>

            <p className="text-zinc-600 leading-relaxed">
              É necessário que o cliente disponibilize uma pessoa da equipe para
              ser responsável pelo{" "}
              <strong className="text-zinc-900">
                monitoramento das conversas realizadas pela IA
              </strong>
              , garantindo a intervenção humana sempre que necessário. Essa
              pessoa deverá assumir chamados direcionados para atendimento
              humano, tratar situações que a IA não consiga solucionar e
              conduzir atendimentos que dependam de interação direta, como{" "}
              <strong className="text-zinc-900">
                negociações e fechamento de vendas
              </strong>
              .
            </p>
          </div>
        </motion.div>
      </section>

      {/* PAYMENT & DELIVERY - Destaque Gray */}

      {/* FOOTER */}
      <footer className="bg-gray-700 text-gray-300 py-12 text-center text-sm border-t border-gray-600">
        <p>VTJ SYSTEM FLOWS</p>
      </footer>
    </div>
  );
}
