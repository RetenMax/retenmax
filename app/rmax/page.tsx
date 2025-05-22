'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Target, Users, Megaphone, Palette, Share2, CheckCircle } from 'lucide-react'

export default function RMaxPage() {
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
            <span className="bg-orange-500/10 text-orange-400 px-4 py-1 rounded-full w-fit text-sm font-medium">
              Marketing Estratégico
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              RMax: Marketing que Transforma seu Negócio
            </h1>
            <p className="text-zinc-400 text-lg">
              Marketing Estratégico para empresas, ajudando negócios a fortalecer sua marca, atrair clientes e aumentar suas vendas com estratégias personalizadas e eficientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base flex gap-2">
                Impulsione seu Marketing <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Agendar Consultoria
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden p-2 bg-gradient-to-br from-orange-600/20 to-yellow-500/20 backdrop-blur-sm border border-white/10">
              <Image 
                src="/images/rmax.webp"
                alt="RMax - Marketing Estratégico pela RetenMax"
                fill
                className="object-contain p-8 mix-blend-lighten"
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="container py-20 bg-zinc-900/50 backdrop-blur-sm rounded-3xl my-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Soluções de Marketing Completas</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            O RMax oferece um conjunto abrangente de serviços de marketing estratégico para fortalecer sua marca e impulsionar seus resultados.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Marketing de Performance",
              description: "Campanhas focadas em resultados mensuráveis, com otimização constante para maximizar o ROI.",
              icon: <TrendingUp className="text-orange-400" />
            },
            {
              title: "Marketing de Conteúdo",
              description: "Estratégias de conteúdo que educam, engajam e convertem sua audiência em clientes fiéis.",
              icon: <Target className="text-orange-400" />
            },
            {
              title: "Marketing Digital",
              description: "Presença digital estratégica que conecta sua marca com os clientes certos, nos canais certos.",
              icon: <Share2 className="text-orange-400" />
            },
            {
              title: "Gestão de Redes Sociais",
              description: "Estratégias personalizadas para cada plataforma, aumentando engajamento e conversões.",
              icon: <Users className="text-orange-400" />
            },
            {
              title: "Branding e Identidade Visual",
              description: "Desenvolvimento de marcas memoráveis que se destacam da concorrência e conectam-se emocionalmente com os clientes.",
              icon: <Palette className="text-orange-400" />
            },
            {
              title: "Marketing Offline",
              description: "Estratégias tradicionales que complementam suas ações digitais para uma abordagem omnichannel.",
              icon: <Megaphone className="text-orange-400" />
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 p-8 rounded-xl backdrop-blur-sm border border-zinc-700 hover:border-orange-500/30 group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors">{service.title}</h3>
              <p className="text-zinc-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Methodology Section */}
      <section className="container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src="/images/companies.webp" 
              alt="RMax Methodology"
              width={600}
              height={600}
              className="rounded-xl object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="bg-orange-500/10 text-orange-400 px-4 py-1 rounded-full w-fit text-sm font-medium">
              Nossa Metodologia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Um Método Comprovado para o Sucesso</h2>
            <p className="text-zinc-400">
              O RMax segue uma metodologia estratégica de 5 etapas que garante a criação de estratégias de marketing que realmente funcionam para o seu negócio:
            </p>
            
            <div className="space-y-6 mt-4">
              {[
                {
                  step: "Análise",
                  description: "Compreensão profunda do seu negócio, mercado, concorrência e público-alvo."
                },
                {
                  step: "Estratégia",
                  description: "Desenvolvimento de um plano de marketing personalizado com objetivos claros e mensuráveis."
                },
                {
                  step: "Implementação",
                  description: "Execução meticulosa das estratégias definidas com acompanhamento constante."
                },
                {
                  step: "Otimização",
                  description: "Análise de desempenho e ajustes estratégicos para maximizar resultados."
                },
                {
                  step: "Expansão",
                  description: "Escalonamento das estratégias bem-sucedidas e exploração de novas oportunidades."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-orange-400">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.step}</h4>
                    <p className="text-zinc-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="w-fit mt-4">Conheça mais sobre o processo</Button>
          </motion.div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="container py-20 bg-zinc-900/50 backdrop-blur-sm rounded-3xl my-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Resultados que Transformam Negócios</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Nossos clientes experimentam crescimento real e mensurável após implementar as estratégias do RMax.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "150%", label: "Aumento médio em vendas online" },
            { value: "60%", label: "Crescimento em engajamento nas redes sociais" },
            { value: "2.5x", label: "Aumento no retorno sobre investimento em marketing" },
            { value: "40%", label: "Redução no custo de aquisição de clientes" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 p-6 rounded-xl text-center border border-zinc-700"
            >
              <div className="text-4xl font-bold text-orange-400 mb-2">{stat.value}</div>
              <p className="text-zinc-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {[1, 2].map((testimonial) => (
            <motion.div
              key={testimonial}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: testimonial * 0.2 }}
              className="bg-zinc-800/50 p-8 rounded-xl border border-zinc-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-zinc-700 rounded-full"></div>
                <div>
                  <h4 className="font-bold">Cliente {testimonial}</h4>
                  <p className="text-zinc-400 text-sm">Empresa {testimonial}</p>
                </div>
              </div>
              <p className="text-zinc-300 italic">
                A estratégia de marketing implementada pela RMax transformou completamente nossa presença online e impulsionou nossas vendas. Os resultados superaram nossas expectativas.
              </p>
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
          className="bg-gradient-to-br from-orange-600/20 via-orange-500/10 to-yellow-600/20 rounded-3xl p-8 md:p-16 text-center backdrop-blur-md border border-white/5"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu marketing?</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto mb-8">
            Agende uma consultoria estratégica gratuita e descubra como o RMax pode impulsionar os resultados do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-base">Agendar Consultoria</Button>
            <Button variant="outline" size="lg" className="text-base">Conhecer Casos de Sucesso</Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
