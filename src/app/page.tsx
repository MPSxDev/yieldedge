'use client';

import { motion } from 'framer-motion';
import {
  Calendar,
  Target,
  Zap,
  BarChart3,
  Handshake,
  TrendingUp,
  DollarSign,
  Users,
  Clock,
  Database,
  Rocket,
  Brain,
  Eye,
  Lightbulb
} from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-[#1A202C] text-[#E2E8F0] font-[Inter]">
      {/* Header/Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#1A202C]/95 backdrop-blur-sm border-b border-[#E2E8F0]/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl font-bold font-[Space_Grotesk]"
          >
            <span className="text-white">Yiel</span><span className="text-[#00B3FF]">dge</span>
          </motion.h1>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00B3FF] text-[#1A202C] px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center gap-2"
          >
            <Calendar size={18} />
            Contacto
          </motion.button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="bg-[#1A202C] text-center py-40 px-6 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-7xl md:text-9xl font-bold font-[Space_Grotesk] tracking-tight">
              <span className="text-white">Yiel</span><span className="text-[#00B3FF]">dge</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-[#CBD5E0] mt-4 italic"
            >
              Precisión que impulsa el progreso
            </motion.p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold font-[Space_Grotesk] mb-12 leading-tight"
          >
            Transformá tu tecnología en <span className="text-[#00B3FF]">ganancias medibles.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto text-xl text-[#CBD5E0] mb-16 leading-relaxed"
          >
            Creemos que la innovación solo tiene valor cuando genera impacto real.
            <br />
            Convertimos el potencial tecnológico de tu empresa en <strong>crecimiento sostenible y rentable.</strong>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 179, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00B3FF] text-[#1A202C] px-12 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <Calendar size={22} />
              Agendar una llamada
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#00B3FF] text-[#00B3FF] px-12 py-4 rounded-xl font-semibold text-lg hover:bg-[#00B3FF]/10 transition-all duration-300 flex items-center gap-2"
            >
              <Target size={22} />
              Conocer nuestro enfoque
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* El Problema */}
      <section className="bg-white text-[#1A202C] text-center py-40 px-6 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold font-[Space_Grotesk] mb-10"
          >
            Tenés tecnología, pero no tenés <span className="text-[#00B3FF]">resultados.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-xl text-gray-600 mb-20 leading-relaxed"
          >
            Muchas empresas invierten en software, pero no en precisión.
            <br />
            El resultado: proyectos que no escalan, datos dispersos y sistemas que no devuelven lo invertido.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              className="bg-gray-50 p-10 rounded-2xl shadow-sm transition-all duration-300 text-center"
            >
              <DollarSign className="w-14 h-14 text-[#00B3FF] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Software caro que no genera ROI</h3>
              <p className="text-gray-600 leading-relaxed text-lg mx-auto">Invertís miles y no ves el retorno.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              className="bg-gray-50 p-10 rounded-2xl shadow-sm transition-all duration-300 text-center"
            >
              <Clock className="w-14 h-14 text-[#00B3FF] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Procesos lentos e ineficientes</h3>
              <p className="text-gray-600 leading-relaxed text-lg mx-auto">Tu equipo pierde tiempo en tareas manuales.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              className="bg-gray-50 p-10 rounded-2xl shadow-sm transition-all duration-300 text-center"
            >
              <Database className="w-14 h-14 text-[#00B3FF] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Datos sin propósito</h3>
              <p className="text-gray-600 leading-relaxed text-lg mx-auto">Tenés información, pero no la usás para crecer.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              className="bg-gray-50 p-10 rounded-2xl shadow-sm transition-all duration-300 text-center"
            >
              <Rocket className="w-14 h-14 text-[#00B3FF] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Competencia más ágil</h3>
              <p className="text-gray-600 leading-relaxed text-lg mx-auto">Ellos usan tecnología estratégica; vos seguís adaptándote.</p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 179, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00B3FF] text-white px-12 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <TrendingUp size={22} />
              Quiero aumentar mis ganancias
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* El Guía */}
      <section className="bg-[#1A202C] text-center py-40 px-6 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold font-[Space_Grotesk] mb-10">
            Tu socio tecnológico donde la innovación se convierte en <span className="text-[#00B3FF]">crecimiento medible.</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-[#CBD5E0] mb-20 leading-relaxed">
            No somos una agencia.
            <br />
            Somos una <strong>firma de ingeniería estratégica</strong> que une la precisión técnica con la visión de negocio.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#00B3FF] rounded-full mx-auto mb-6 flex items-center justify-center">
                <TrendingUp size={28} className="text-[#1A202C]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ganancias como brújula (Yield)</h3>
              <p className="text-[#CBD5E0] leading-relaxed">Todo lo que hacemos apunta a resultados medibles.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#00B3FF] rounded-full mx-auto mb-6 flex items-center justify-center">
                <Lightbulb size={28} className="text-[#1A202C]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovación con propósito (Edge)</h3>
              <p className="text-[#CBD5E0] leading-relaxed">Solo aplicamos tecnología que maximiza valor.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#00B3FF] rounded-full mx-auto mb-6 flex items-center justify-center">
                <Zap size={28} className="text-[#1A202C]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excelencia ingenieril</h3>
              <p className="text-[#CBD5E0] leading-relaxed">Precisión, claridad y robustez en cada línea de código.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#00B3FF] rounded-full mx-auto mb-6 flex items-center justify-center">
                <Handshake size={28} className="text-[#1A202C]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Colaboración estratégica</h3>
              <p className="text-[#CBD5E0] leading-relaxed">Trabajamos como parte de tu equipo.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#00B3FF] rounded-full mx-auto mb-6 flex items-center justify-center">
                <Eye size={28} className="text-[#1A202C]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Transparencia total</h3>
              <p className="text-[#CBD5E0] leading-relaxed">Cada decisión se explica con datos.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#00B3FF] rounded-full mx-auto mb-6 flex items-center justify-center">
                <Brain size={28} className="text-[#1A202C]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Evolución constante</h3>
              <p className="text-[#CBD5E0] leading-relaxed">Aprendemos, optimizamos y escalamos con vos.</p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <button className="bg-[#00B3FF] text-[#1A202C] px-12 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
              <Calendar size={22} />
              Agendar una llamada hoy
            </button>
          </div>
        </div>
      </section>

      {/* El Plan */}
      <section className="bg-white text-[#1A202C] text-center py-40 px-6 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold font-[Space_Grotesk] mb-10">
            Un proceso claro que genera <span className="text-[#00B3FF]">resultados reales.</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 mb-20 leading-relaxed">
            De la estrategia al crecimiento medible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            <div className="text-center p-8">
              <div className="w-24 h-24 bg-[#00B3FF] rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-3xl font-bold mb-6">Analizamos.</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Auditamos tu stack tecnológico y detectamos oportunidades de mejora.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-24 h-24 bg-[#00B3FF] rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-3xl font-bold mb-6">Diseñamos.</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Creamos soluciones personalizadas que maximizan tu retorno.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-24 h-24 bg-[#00B3FF] rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-3xl font-bold mb-6">Medimos.</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Implementamos sistemas que miden cada impacto en tus ganancias.
              </p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <button className="bg-[#00B3FF] text-white px-12 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
              <Target size={22} />
              Comenzar mi diagnóstico
            </button>
          </div>
        </div>
      </section>

      {/* Resultados Reales */}
      <section className="bg-[#1A202C] text-center py-40 px-6 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold font-[Space_Grotesk] mb-10">
            Tecnología que genera <span className="text-[#00B3FF]">impacto, no promesas.</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-[#CBD5E0] mb-20 leading-relaxed">
            Nuestros proyectos reducen costos, mejoran eficiencia y escalan con precisión.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
            <div className="bg-[#00B3FF]/5 border-2 border-[#00B3FF]/20 p-12 rounded-2xl text-center hover:bg-[#00B3FF]/10 transition-all duration-300">
              <div className="text-6xl font-bold text-[#00B3FF] mb-4">+60%</div>
              <h3 className="text-2xl font-bold mb-2">velocidad de despliegue</h3>
            </div>
            <div className="bg-[#00B3FF]/5 border-2 border-[#00B3FF]/20 p-12 rounded-2xl text-center hover:bg-[#00B3FF]/10 transition-all duration-300">
              <div className="text-6xl font-bold text-[#00B3FF] mb-4">−40%</div>
              <h3 className="text-2xl font-bold mb-2">costos de infraestructura</h3>
            </div>
            <div className="bg-[#00B3FF]/5 border-2 border-[#00B3FF]/20 p-12 rounded-2xl text-center hover:bg-[#00B3FF]/10 transition-all duration-300">
              <div className="text-6xl font-bold text-[#00B3FF] mb-4">+30%</div>
              <h3 className="text-2xl font-bold mb-2">ROI en 6 meses</h3>
            </div>
            <div className="bg-[#00B3FF]/5 border-2 border-[#00B3FF]/20 p-12 rounded-2xl text-center hover:bg-[#00B3FF]/10 transition-all duration-300">
              <div className="text-6xl font-bold text-[#00B3FF] mb-4">100%</div>
              <h3 className="text-2xl font-bold mb-2">satisfacción del cliente</h3>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <button className="bg-[#00B3FF] text-[#1A202C] px-12 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
              <BarChart3 size={22} />
              Ver casos de éxito
            </button>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="bg-white text-[#1A202C] text-center py-40 px-6 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold font-[Space_Grotesk] mb-10">
            No creamos software. <span className="text-[#00B3FF]">Creamos crecimiento.</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 mb-20 leading-relaxed text-center">
            Cada línea de código tiene un propósito claro: generar valor.
            <br />
            En <span className="font-bold text-[#1A202C]">Yiel</span><span className="font-bold text-[#00B3FF]">dge</span>, fusionamos el <strong>Edge</strong> de la innovación con el <strong>Yield</strong> del rendimiento.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            <div className="p-8">
              <Target className="w-16 h-16 text-[#00B3FF] mx-auto mb-8" />
              <h3 className="text-2xl font-bold mb-6 text-[#00B3FF] text-center">Tecnología con propósito</h3>
              <p className="text-gray-600 leading-relaxed text-lg text-center mx-auto">Lo simple puede ser poderoso si está bien diseñado.</p>
            </div>
            <div className="p-8">
              <TrendingUp className="w-16 h-16 text-[#00B3FF] mx-auto mb-8" />
              <h3 className="text-2xl font-bold mb-6 text-[#00B3FF] text-center">Resultados, no promesas</h3>
              <p className="text-gray-600 leading-relaxed text-lg text-center mx-auto">Tu éxito es nuestro único KPI.</p>
            </div>
            <div className="p-8">
              <Handshake className="w-16 h-16 text-[#00B3FF] mx-auto mb-8" />
              <h3 className="text-2xl font-bold mb-6 text-[#00B3FF] text-center">Relaciones a largo plazo</h3>
              <p className="text-gray-600 leading-relaxed text-lg text-center mx-auto">Crecemos con vos, no a costa tuya.</p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <button className="bg-[#00B3FF] text-white px-12 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
              <Users size={22} />
              Conocer nuestra filosofía
            </button>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="bg-[#1A202C] text-center py-40 px-6 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold font-[Space_Grotesk] mb-12">
            Hablemos de tu <span className="text-[#00B3FF]">progreso.</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-[#CBD5E0] mb-16 leading-relaxed">
            En 15 minutos podemos identificar oportunidades de mejora reales.
            <br />
            <strong>Sin presión. Sin tecnicismos. Solo claridad.</strong>
          </p>
          <div className="mt-12 flex justify-center">
            <button className="bg-[#00B3FF] text-[#1A202C] px-16 py-5 rounded-xl font-bold text-xl hover:opacity-90 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-3xl">
              <Calendar size={24} />
              Agendar una llamada
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A202C] py-20 px-6 border-t border-[#E2E8F0]/10">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold font-[Space_Grotesk] mb-6">
            <span className="text-white">Yiel</span><span className="text-[#00B3FF]">dge</span>
          </h3>
          <p className="text-[#CBD5E0] text-lg mb-8 text-center mx-auto"><em>"Innovación con Retorno."</em></p>
          <p className="text-[#CBD5E0]/60 text-sm text-center mx-auto">© 2025 <span className="text-white">Yiel</span><span className="text-[#00B3FF]">dge</span>. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}