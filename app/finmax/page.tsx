'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ChevronRight, CheckCircle, ArrowRight, DollarSign, LineChart, Percent, Shield, Clock, BadgeCheck } from 'lucide-react'

export default function FinMaxPage() {
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
            <span className="bg-blue-500/10 text-blue-400 px-4 py-1 rounded-full w-fit text-sm font-medium">
              Gestão Financeira Estratégica
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              FinMax: Transforme sua Gestão Financeira
            </h1>
            <p className="text-zinc-400 text-lg">
              O FinMax é a solução da RetenMax para empresas que desejam transformar a gestão financeira em um pilar de crescimento sustentável. Com foco em organização, clareza e estratégia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-base flex gap-2">
                Iniciar Transformação Financeira <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Solicitar Demonstração
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden p-2 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-white/10">
              <Image 
                src="/images/finmax.webp"
                alt="FinMax - Gestão Financeira pela RetenMax"
                fill
                className="object-contain p-8 mix-blend-lighten"
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Value Proposition Section */}
      <section className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Uma Visão Completa da Saúde Financeira</h2>
          <p className="text-zinc-400 max-w-3xl mx-auto">
            O FinMax entrega uma visão completa da saúde financeira do seu negócio, permitindo que você tome decisões mais assertivas e planejadas para um crescimento sustentável.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Controle Financeiro Total",
              description: "Gerencie fluxo de caixa, despesas e receitas com painéis intuitivos e dados em tempo real.",
              icon: <DollarSign className="h-6 w-6 text-blue-400" />
            },
            {
              title: "Análises Estratégicas",
              description: "Visualize tendências e oportunidades com relatórios detalhados e insights personalizados.",
              icon: <LineChart className="h-6 w-6 text-blue-400" />
            },
            {
              title: "Projeções Precisas",
              description: "Planeje o futuro financeiro da sua empresa com base em dados históricos e cenários projetados.",
              icon: <Percent className="h-6 w-6 text-blue-400" />
            },
            {
              title: "Segurança de Dados",
              description: "Seus dados financeiros protegidos com as mais avançadas tecnologias de criptografia e segurança.",
              icon: <Shield className="h-6 w-6 text-blue-400" />
            },
            {
              title: "Economia de Tempo",
              description: "Automatize processos financeiros repetitivos e foque no que realmente importa: suas estratégias.",
              icon: <Clock className="h-6 w-6 text-blue-400" />
            },
            {
              title: "Consultoria Especializada",
              description: "Conte com nossos especialistas para orientações personalizadas e estratégicas.",
              icon: <BadgeCheck className="h-6 w-6 text-blue-400" />
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-xl border border-zinc-700 hover:border-blue-500/50 transition-all group"
            >
              <div className="p-4 bg-blue-500/10 rounded-lg w-fit mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* How it Works */}
      <section className="container py-20 bg-zinc-900/50 backdrop-blur-sm rounded-3xl my-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Como o FinMax Funciona</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Uma abordagem em etapas para transformar completamente a gestão financeira da sua empresa
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {[
            {
              step: "01",
              title: "Diagnóstico Financeiro",
              description: "Nossa equipe realiza um diagnóstico completo da situação financeira atual da empresa, identificando pontos fortes, fragilidades e oportunidades."
            },
            {
              step: "02",
              title: "Estruturação e Organização",
              description: "Implementamos sistemas e processos para organizar todas as informações financeiras, estabelecendo controles eficientes e dashboards personalizados."
            },
            {
              step: "03",
              title: "Análises e Estratégias",
              description: "Com base nos dados organizados, desenvolvemos análises detalhadas e estratégias financeiras alinhadas aos objetivos de curto, médio e longo prazo da empresa."
            },
            {
              step: "04",
              title: "Acompanhamento Contínuo",
              description: "Oferecemos suporte contínuo, com reuniões periódicas para avaliar resultados, ajustar estratégias e garantir que os objetivos financeiros sejam alcançados."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid md:grid-cols-[100px_1fr] gap-6 items-start"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-500">{item.step}</div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-zinc-400 text-lg max-w-3xl">{item.description}</p>
                {index < 3 && (
                  <div className="h-12 border-l-2 border-dashed border-blue-500/30 my-6 ml-1"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Results Section */}
      <section className="container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 order-2 md:order-1"
          >
            <span className="bg-blue-500/10 text-blue-400 px-4 py-1 rounded-full w-fit text-sm font-medium">
              Resultados Comprovados
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Transformação Financeira Mensurável</h2>
            <p className="text-zinc-400">
              Nossos clientes experimentam melhorias significativas em seus indicadores financeiros após implementarem o FinMax:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-4">
              {[
                { value: "30%", label: "aumento médio em lucratividade" },
                { value: "45%", label: "redução em custos operacionais" },
                { value: "60%", label: "mais eficiência em processos financeiros" },
                { value: "90%", label: "mais clareza nas decisões estratégicas" }
              ].map((stat, i) => (
                <div key={i} className="bg-zinc-800/70 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <p className="text-sm text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 z-10"></div>
              <Image 
                src="/images/hero-bg.webp"
                alt="Resultados FinMax"
                fill
                className="object-cover"
              />
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
          className="bg-gradient-to-br from-blue-600/20 via-blue-400/10 to-cyan-500/20 rounded-3xl p-8 md:p-16 text-center backdrop-blur-md border border-white/5"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar suas finanças?</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto mb-8">
            Agende uma consulta inicial gratuita e descubra como o FinMax pode impulsionar o crescimento sustentável da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-base">Agendar Consulta</Button>
            <Button variant="outline" size="lg" className="text-base">Conhecer Planos</Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
