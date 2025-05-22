'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart2, PieChart, TrendingUp, ClipboardList, FileText, Briefcase, CheckCircle } from 'lucide-react'

export default function RMasterPage() {
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
            <span className="bg-purple-500/10 text-purple-400 px-4 py-1 rounded-full w-fit text-sm font-medium">
              Gestão Financeira Empresarial
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              RMaster: Excelência em Gestão Financeira
            </h1>
            <p className="text-zinc-400 text-lg">
              Estruture, organize e otimize os processos financeiros da sua empresa com soluções personalizadas que impulsionam o crescimento sustentável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-base flex gap-2">
                Transforme Suas Finanças <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Conhecer Metodologia
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden p-2 bg-gradient-to-br from-purple-600/20 to-blue-500/20 backdrop-blur-sm border border-white/10">
              <Image 
                src="/images/rmaster.webp"
                alt="RMaster - Gestão Financeira pela RetenMax"
                fill
                className="object-contain p-8 mix-blend-lighten"
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Key Benefits */}
      <section className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefícios Transformadores</h2>
          <p className="text-zinc-400 max-w-3xl mx-auto">
            O RMaster oferece uma abordagem completa para reorganizar as finanças do seu negócio, trazendo clareza, controle e eficiência para cada aspecto da gestão financeira.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Visão Financeira Clara",
              description: "Dashboards intuitivos e relatórios detalhados que oferecem uma visão completa da saúde financeira da sua empresa.",
              icon: <BarChart2 className="h-6 w-6 text-purple-400" />
            },
            {
              title: "Processos Otimizados",
              description: "Automatização e otimização de processos financeiros para eliminar ineficiências e reduzir custos operacionais.",
              icon: <TrendingUp className="h-6 w-6 text-purple-400" />
            },
            {
              title: "Planejamento Financeiro",
              description: "Estratégias personalizadas de planejamento financeiro alinhadas aos objetivos de crescimento do seu negócio.",
              icon: <PieChart className="h-6 w-6 text-purple-400" />
            },
            {
              title: "Gestão de Fluxo de Caixa",
              description: "Controle preciso do fluxo de caixa para evitar surpresas e garantir a saúde financeira da empresa.",
              icon: <FileText className="h-6 w-6 text-purple-400" />
            },
            {
              title: "Controle de Custos",
              description: "Identificação de oportunidades de redução de custos sem comprometer a qualidade operacional.",
              icon: <ClipboardList className="h-6 w-6 text-purple-400" />
            },
            {
              title: "Consultoria Especializada",
              description: "Acesso a consultores financeiros experientes que guiam seu negócio em cada etapa da jornada.",
              icon: <Briefcase className="h-6 w-6 text-purple-400" />
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-xl border border-zinc-700 hover:border-purple-500/50 transition-all hover:-translate-y-1 duration-300 group"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-500/10 mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{benefit.title}</h3>
              <p className="text-zinc-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Process Section with 3D Effect */}
      <section className="container py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-zinc-900/70 backdrop-blur-sm rounded-3xl z-0"></div>
        
        <div className="relative z-10 p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa Metodologia de Transformação</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              O RMaster segue um processo comprovado para transformar a gestão financeira de sua empresa
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-600/0 via-purple-600/70 to-purple-600/0 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-4 gap-12">
              {[
                {
                  step: "1",
                  title: "Diagnóstico",
                  description: "Análise profunda da situação financeira atual, identificando pontos fortes e oportunidades de melhoria."
                },
                {
                  step: "2",
                  title: "Planejamento",
                  description: "Desenvolvimento de um plano estratégico personalizado para atingir os objetivos financeiros da empresa."
                },
                {
                  step: "3",
                  title: "Implementação",
                  description: "Execução meticulosa das estratégias e processos definidos, com treinamento da equipe."
                },
                {
                  step: "4",
                  title: "Monitoramento",
                  description: "Acompanhamento contínuo dos resultados, com ajustes e otimizações para garantir o sucesso."
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-2xl font-bold mb-6 relative z-20">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                  <p className="text-zinc-400">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="bg-purple-500/10 text-purple-400 px-4 py-1 rounded-full w-fit text-sm font-medium block mx-auto md:mx-0">
            Casos de Sucesso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-center md:text-left">Empresas Transformadas pelo RMaster</h2>
        </motion.div>
        
        <div className="space-y-16">
          {[1, 2].map((caseStudy) => (
            <motion.div
              key={caseStudy}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={`order-2 ${caseStudy % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="h-[300px] relative rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 z-10"></div>
                  <Image
                    src="/images/hero-bg.webp"
                    alt={`Case Study ${caseStudy}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className={`flex flex-col gap-6 order-1 ${caseStudy % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="text-2xl font-bold">Empresa {caseStudy}</h3>
                <p className="text-zinc-400">
                  O RMaster ajudou esta empresa a reorganizar completamente seus processos financeiros, resultando em melhor controle, redução de custos e aumento significativo na lucratividade.
                </p>
                
                <ul className="space-y-2">
                  {[
                    "Redução de 40% nos gastos operacionais",
                    "Aumento de 35% na margem de lucro",
                    "Visibilidade financeira melhorada em 100%",
                    "Decisões estratégicas mais rápidas e precisas"
                  ].map((result, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="text-purple-400" size={18} />
                      <span className="text-sm">{result}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-fit">Ver caso completo</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container py-20 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-600/20 via-purple-400/10 to-blue-500/20 rounded-3xl p-8 md:p-16 text-center backdrop-blur-md border border-white/5"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar a gestão financeira da sua empresa?</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto mb-8">
            Agende uma avaliação financeira gratuita e descubra como o RMaster pode otimizar os processos financeiros do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-base">Agendar Avaliação</Button>
            <Button variant="outline" size="lg" className="text-base">Falar com Especialista</Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
