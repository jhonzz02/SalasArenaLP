"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Bot,
  Wifi,
  Battery,
  ShieldCheck,
  AlertCircle,
  CreditCard,
  CalendarDays,
  CheckCircle2,
  Play,
  Info
} from "lucide-react";

export default function ArenaFonteNovaLanding() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

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
            Automação inteligente e gestão de espaços com IA integrada ao WhatsApp. 
            A inovação invisível que transforma a experiência corporativa.
          </p>

          <motion.div 
            className="mt-20 text-gray-300 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1 mb-2">
              <motion.div 
                className="w-1 h-2 bg-gray-300 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CORE FEATURES SECTION - Fundo Branco */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div className="text-center mb-20" {...fadeIn}>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Solução Completa 360º.
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            Hardware dedicado e software desenhado para trabalhar em perfeita harmonia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Hardware Card */}
          <motion.div
            className="bg-zinc-50 p-10 rounded-[2rem] shadow-sm border border-zinc-200 transition-all hover:border-zinc-300"
            {...fadeIn}
          >
            <div className="mb-8">
              <Monitor size={40} className="text-zinc-900 mb-6" strokeWidth={1.5} />
              <h3 className="text-3xl font-semibold tracking-tight mb-3 text-zinc-900">
                100 Tablets Corporativos.
              </h3>
              <p className="text-zinc-600 text-lg">
                Design elegante nas portas das salas, tecnologia robusta no interior.
              </p>
            </div>

            <div className="w-full h-64 rounded-2xl mb-8 flex flex-col items-center justify-center text-zinc-400 bg-white overflow-hidden relative border border-zinc-200">
              <Monitor size={48} className="mb-3 opacity-30" strokeWidth={1} />
              <span className="text-xs font-semibold tracking-widest uppercase opacity-60">
                [ Foto do Hardware ]
              </span>
            </div>

            <ul className="space-y-4">
              {[
                { icon: Monitor, text: "Tela 10.1 IPS HD/FHD Touchscreen" },
                { icon: Wifi, text: "Wi-Fi Dual-Band (2.4/5GHz) + Bluetooth" },
                { icon: Battery, text: "Fonte bivolt + Bateria backup (6000 mAh)" },
                { icon: ShieldCheck, text: "Compatível com suportes antifurto" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-700 font-medium">
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
                Integração fluida e inteligente via WhatsApp para reservas instantâneas.
              </p>
            </div>

            <div className="w-full h-64 bg-white rounded-2xl mb-8 flex flex-col items-center justify-center text-zinc-400 overflow-hidden relative border border-zinc-200">
              <Smartphone size={48} className="mb-3 opacity-30" strokeWidth={1} />
              <span className="text-xs font-semibold tracking-widest uppercase opacity-60">
                [ Tela do Sistema ]
              </span>
            </div>

            <ul className="space-y-4">
              {[
                { icon: Smartphone, text: "Sistema web/mobile completo" },
                { icon: Bot, text: "IA integrada diretamente ao WhatsApp" },
                { icon: CheckCircle2, text: "Configuração e implantação em nuvem" },
                { icon: Info, text: "Treinamento completo para a equipe" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-700 font-medium">
                  <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon size={16} className="text-zinc-900" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* VIDEO DEMO SECTION - Destaque Gray */}
      <section className="py-32 px-6 lg:px-8 bg-gray-700">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
              Veja em ação.
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Experimente a fluidez da integração em tempo real entre a interface física e nossa IA.
            </p>
          </motion.div>

          <motion.div
            className="relative w-full aspect-video bg-gray-600 rounded-[2rem] shadow-2xl overflow-hidden flex items-center justify-center border border-gray-500 group cursor-pointer"
            {...fadeIn}
          >
            {/* Play Button Premium */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-800/80 backdrop-blur-md border border-gray-500 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-gray-800 group-hover:border-gray-400">
                <Play size={32} className="text-white ml-2" fill="white" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-800/20 to-transparent"></div>
          </motion.div>
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
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-zinc-200 pb-10 mb-10">
              <div>
                <p className="text-zinc-500 font-medium mb-2 tracking-wide uppercase text-sm">Hardware + Software + Implantação</p>
                <h3 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900">R$ 100.000</h3>
              </div>
              <div className="mt-6 md:mt-0 bg-white border border-zinc-200 text-zinc-700 px-6 py-3 rounded-full font-medium flex items-center gap-3 text-sm shadow-sm">
                <CheckCircle2 size={18} className="text-zinc-900" /> 3 Meses Grátis de Licenciamento
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 text-zinc-600">
              <div>
                <h4 className="text-zinc-900 font-semibold text-lg mb-6 flex items-center gap-3">
                  <Monitor size={20} className="text-zinc-500" /> Composição
                </h4>
                <ul className="space-y-5">
                  <li className="flex justify-between items-center border-b border-zinc-200 pb-4">
                    <span>100 Tablets (R$ 850/unid)</span>
                    <strong className="text-zinc-900 font-medium">R$ 85.000,00</strong>
                  </li>
                  <li className="flex justify-between items-center border-b border-zinc-200 pb-4">
                    <span>Desenvolvimento do Sistema</span>
                    <strong className="text-zinc-900 font-medium">R$ 15.000,00</strong>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-zinc-900 font-semibold text-lg mb-6 flex items-center gap-3">
                  <CalendarDays size={20} className="text-zinc-500" /> Pós 3 Meses (Licenciamento)
                </h4>
                <ul className="space-y-5">
                  <li className="flex justify-between items-center border-b border-zinc-200 pb-4">
                    <span>Valor Inicial <span className="text-xs text-zinc-400 block">por sala</span></span>
                    <strong className="text-zinc-900 font-medium text-right">US$ 10,00/mês</strong>
                  </li>
                  <li className="flex justify-between items-center border-b border-zinc-200 pb-4">
                    <span>Modelos Avançados <span className="text-xs text-zinc-400 block">por sala (Se necessário)</span></span>
                    <strong className="text-zinc-900 font-medium text-right">Até US$ 15,00/mês</strong>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ALERT SECTION - Fundo Branco */}
      <section className="pb-32 px-6 lg:px-8 max-w-4xl mx-auto bg-white">
        <motion.div
          className="bg-zinc-50 border border-zinc-200 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start shadow-sm"
          {...fadeIn}
        >
          <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
            <AlertCircle className="text-zinc-900" size={24} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 text-lg mb-2">
              Nota sobre Infraestrutura Local
            </h4>
            <p className="text-zinc-600 leading-relaxed">
              A infraestrutura local necessária para o funcionamento presencial (como rede Wi-Fi com cobertura para os 100 pontos, cabeamento, suporte técnico local, pontos de energia e fixação mecânica){" "}
              <strong className="text-zinc-900">não está inclusa neste orçamento</strong> e deve ser providenciada à parte pelo cliente.
            </p>
          </div>
        </motion.div>
      </section>

      {/* PAYMENT & DELIVERY - Destaque Gray */}
      <section className="py-32 px-6 lg:px-8 bg-gray-700 border-t border-gray-600">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          
          <motion.div {...fadeIn} className="flex flex-col h-full">
            <h3 className="text-2xl font-bold tracking-tight mb-8 text-white">
              Pagamento.
            </h3>
            <ul className="flex flex-col gap-4 flex-1">
              <li className="bg-gray-600 border border-gray-500 p-8 rounded-[1.5rem] flex items-center gap-5 flex-1 transition-all hover:border-gray-400 shadow-lg">
                <div className="bg-gray-800 w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-inner">
                  <CreditCard className="text-white" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <strong className="block text-white text-lg font-semibold mb-1">
                    Pix / Transferência
                  </strong>
                  <span className="text-sm text-gray-200">
                    Pagamento direto com faturamento e emissão de NF.
                  </span>
                </div>
              </li>
              <li className="bg-gray-600 border border-gray-500 p-8 rounded-[1.5rem] flex items-center gap-5 flex-1 transition-all hover:border-gray-400 shadow-lg">
                <div className="bg-gray-800 w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-inner">
                  <CreditCard className="text-white" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <strong className="block text-white text-lg font-semibold mb-1">
                    Cartão de Débito/Crédito
                  </strong>
                  <span className="text-sm text-gray-200">
                    Parcelamento em até 6x (acrescido das taxas da plataforma).
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} className="flex flex-col h-full">
            <h3 className="text-2xl font-bold tracking-tight mb-8 text-white">
              Prazo de Entrega.
            </h3>
            <div className="bg-gray-600 border border-gray-500 p-10 rounded-[1.5rem] flex-1 flex flex-col justify-center items-center text-center transition-all hover:border-gray-400 shadow-lg">
              <p className="text-5xl font-bold tracking-tighter text-white mb-4">
                ~15 dias
              </p>
              <p className="text-gray-200 text-lg font-medium">
                Dias úteis após a confirmação do pedido e pagamento.
              </p>
              <p className="text-sm text-gray-300 mt-6 bg-gray-800/50 py-2 px-4 rounded-full">
                * Sujeito a pequenas variações logísticas.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-700 text-gray-300 py-12 text-center text-sm border-t border-gray-600">
        <p>VTJ SYSTEM FLOWS</p>
      </footer>
    </div>
  );
}