'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ChevronRight, CheckCircle, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'

export default function MaxIAPage() {
  return (
    <div className="w-full bg-[url('/images/hero-bg.webp')] bg-cover">
      {/* Hero Section */}
      <section className="container pt-32 md:pt-40 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="bg-orange-500/10 text-orange-500 px-4 py-1 rounded-full w-fit text-sm font-medium">
              Inteligência Artificial para Negócios
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Max IA: Transformando Empresas com Inteligência Artificial
            </h1>
            <p className="text-zinc-400 text-lg">
              Automatize atendimentos, otimize processos e eleve a experiência do seu cliente com nossa tecnologia exclusiva de IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base flex gap-2">
                Agende uma Demonstração <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Conheça os Casos de Sucesso
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden p-2 bg-gradient-to-br from-orange-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10">
              <Image 
                src="/images/maxia.png"
                alt="Max IA - Inteligência Artificial pela RetenMax"
                fill
                className="object-contain p-8 mix-blend-lighten"
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="container py-20 bg-zinc-900/50 backdrop-blur-sm rounded-3xl my-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Recursos Poderosos da Max IA</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Nossa solução de inteligência artificial foi desenvolvida para atender às necessidades específicas de empresas que buscam eficiência operacional e excelência no atendimento.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Automação Inteligente",
              description: "Automatize processos repetitivos com IA que aprende e se adapta às necessidades da sua empresa.",
              icon: "🤖"
            },
            {
              title: "Atendimento 24/7",
              description: "Ofereça suporte aos seus clientes a qualquer hora, qualquer dia, com respostas precisas e personalizadas.",
              icon: "⏰"
            },
            {
              title: "Análise Preditiva",
              description: "Antecipe as necessidades dos clientes com análises baseadas em dados históricos e comportamentais.",
              icon: "📊"
            },
            {
              title: "Personalização em Escala",
              description: "Ofereça experiências personalizadas para cada cliente, mesmo com uma base crescente.",
              icon: "🎯"
            },
            {
              title: "Integração Omnichannel",
              description: "Conecte-se com seus clientes em diversos canais com uma experiência consistente e fluida.",
              icon: "🔄"
            },
            {
              title: "Insights Acionáveis",
              description: "Transforme dados em estratégias práticas para melhorar a retenção de clientes.",
              icon: "💡"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group"
            >
              <div className="text-3xl mb-4 bg-gradient-to-br from-orange-500 to-purple-500 w-14 h-14 flex items-center justify-center rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Case Study Section */}
      <section className="container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 z-10"></div>
              <Image 
                src="/images/hero-bg.webp"
                alt="Case Study"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <span className="bg-orange-500/10 text-orange-500 px-4 py-1 rounded-full w-fit text-sm font-medium">
              Resultados Comprovados
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Benefícios Reais com a Max IA</h2>
            <p className="text-zinc-400">
              Empresas que implementam nossa solução de inteligência artificial conseguem superar desafios comuns de atendimento e operação, obtendo resultados expressivos:
            </p>
            <ul className="space-y-3">
              {[
                "Redução de até 70% no tempo de resposta ao cliente",
                "Aumento médio de 45% no índice de satisfação",
                "Economia de até 30% em custos operacionais",
                "Capacidade de processamento multiplicada em até 300%"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-orange-500" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-fit mt-4">Ver casos de sucesso</Button>
          </motion.div>
        </div>
      </section>
      
      {/* Integration Section */}
      <section className="container py-20 bg-zinc-900/50 backdrop-blur-sm rounded-3xl my-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Integração Perfeita com seus Sistemas</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A Max IA se adapta ao seu negócio, integrando-se facilmente com as principais plataformas e sistemas utilizados no mercado.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Google Drive", icon: "📁" },
            { name: "Feegow", icon: "🏥" },
            { name: "N8N", icon: "🔄" },
            { name: "Google Calendar", icon: "📅" },
            { name: "Calendly", icon: "🗓️" },
            { name: "WhatsApp", icon: "💬" },
            { name: "Instagram", icon: "📸" },
            { name: "Amazon", icon: "🛒" },
            { name: "E-mail", icon: "📧" },
            { name: "Webhooks", icon: "🪝" },
            { name: "Banco de Dados", icon: "🗄️" },
            { name: "Bases de Dados Vectors", icon: "🧠" }
          ].map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-zinc-800/70 backdrop-blur-sm p-6 rounded-xl border border-zinc-700 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 group"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="text-3xl mb-1 bg-gradient-to-br from-orange-500/20 to-purple-500/20 w-16 h-16 flex items-center justify-center rounded-lg border border-zinc-700">
                  {system.icon}
                </div>
                <h3 className="text-sm font-medium group-hover:text-orange-500 transition-colors">{system.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meta Verified Section */}
      <section className="container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="flex flex-col gap-6">
              <span className="bg-blue-500/10 text-blue-400 px-4 py-1 rounded-full w-fit text-sm font-medium">
                Meta Verified
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">Empresa Certificada pelo Meta</h2>
              <p className="text-zinc-400">
                A RetenMax é uma empresa oficialmente verificada pela Meta, garantindo que nossos serviços de integração com WhatsApp e Instagram atendem aos mais altos padrões de segurança e qualidade estabelecidos pela plataforma.
              </p>
              <ul className="space-y-3 mt-2">
                {[
                  "Acesso privilegiado às APIs oficiais do WhatsApp e Instagram",
                  "Suporte prioritário da Meta para resolução de problemas",
                  "Garantia de conformidade com as políticas de uso e privacidade",
                  "Maior estabilidade e confiabilidade nas integrações"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-blue-500" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="relative h-[300px] rounded-2xl overflow-hidden border border-blue-500/20 p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-700/10 z-10 flex items-center justify-center">
                <div className="bg-blue-500/10 backdrop-blur-sm p-6 rounded-full border border-blue-500/30">
                  <div className="text-5xl">✓</div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-400 z-20">Meta Verified Partner</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container py-20 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl p-8 md:p-16 text-center backdrop-blur-md border border-white/5"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para revolucionar sua empresa com IA?</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto mb-8">
            Agende uma demonstração gratuita e descubra como a Max IA pode transformar a forma como sua empresa se comunica com seus clientes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-base">Agendar Demonstração</Button>
            <Button variant="outline" size="lg" className="text-base">Falar com um Consultor</Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
