"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Hammer, Home, Building, Ruler, Users, Clock, Menu } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Analytics } from '@/components/analytics'
import { ScrollToTop } from '@/components/scroll-to-top'
import { LoadingSpinner } from '@/components/loading-spinner'
import { PerformanceMonitor } from '@/components/performance-monitor'

// Simple throttle function since lodash.throttle might not be available
function throttle(func: Function, limit: number) {
  let inThrottle: boolean
  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export default function APServiciosWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = throttle(() => {
      document.querySelectorAll("[data-parallax]").forEach((el) => {
        const speed = Number.parseFloat(el.getAttribute("data-parallax") || "0")
        el.setAttribute("style", `transform: translateY(${window.scrollY * speed}px); will-change: transform;`)
      })
      document.querySelectorAll("[data-fade]").forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 50) {
          el.classList.add("opacity-100", "translate-y-0")
          el.classList.remove("opacity-0", "translate-y-6")
        }
      })
    }, 16) // Throttle to ~60fps

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800 overflow-x-hidden">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
          <Link href="#inicio" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
              <Hammer className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">APServicios</span>
          </Link>
          <button 
            className="md:hidden text-slate-700 hover:text-orange-600" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
          <nav
            className={`md:flex space-x-8 text-slate-600 ${isMenuOpen ? "block" : "hidden"} absolute md:static top-16 left-0 w-full bg-white/95 md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none backdrop-blur-md md:ml-8`}
          >
            {["Inicio", "Nosotros", "Servicios", "Proyectos", "Contacto"].map((section) => (
              <Link
                key={section}
                href={`#${section.toLowerCase()}`}
                className="block md:inline hover:text-orange-600 py-2 md:py-0 font-medium transition-colors relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                {section}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 px-6 shadow-lg">
            Solicitar Cotización
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[100vh] overflow-hidden">
        <div className="absolute inset-0 -z-10" data-parallax="-0.3">
          <div className="w-full h-full bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 opacity-90"></div>
          <Image
            src="/images/hero-construction.png"
            alt="Equipo de construcción de APServicios"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent -z-10" />
        <div className="relative flex flex-col justify-center items-start max-w-2xl mx-auto px-6 h-full text-white">
          <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 px-4 py-2">
            Empresa Familiar • 15+ años de experiencia
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
            <span className="sr-only">APServicios - </span>
            Construcción de precisión
          </h1>
          <p className="text-xl lg:text-2xl mb-6 text-white/90 leading-relaxed">
            Remodelación personalizada desde planos arquitectónicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 flex items-center px-8 py-4 text-lg font-semibold shadow-xl">
              <Phone className="mr-2 h-5 w-5" /> Solicitar Cotización
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
            >
              Ver Proyectos
            </Button>
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-24 bg-white">
        <div
          className="max-w-6xl mx-auto px-6 text-center mb-16 transition-all duration-700 transform opacity-0 translate-y-6"
          data-fade
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Nuestra Historia
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Empresa familiar con enfoque en calidad, precisión y atención al cliente.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="transition-all duration-700 transform opacity-0 translate-y-6" data-fade>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-20"></div>
              <Image
                src="/images/father-son-team.png"
                alt="Padre e hijo trabajando en un proyecto"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl relative"
                loading="lazy"
              />
            </div>
          </div>
          <div className="space-y-8 transition-all duration-700 transform opacity-0 translate-y-6" data-fade>
            {[
              {
                icon: Users,
                title: "Equipo Padre e Hijo",
                text: "Combinamos experiencia tradicional con visión moderna en cada proyecto.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Ruler,
                title: "Precisión en Cada Detalle",
                text: "Basamos nuestro trabajo en planos arquitectónicos y medidas exactas.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Clock,
                title: "Cumplimos los Plazos",
                text: "Planificamos cronogramas realistas y mantenemos comunicación constante.",
                color: "from-purple-500 to-violet-500"
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4 group">
                <div className={`bg-gradient-to-r ${item.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div
          className="max-w-6xl mx-auto px-6 text-center mb-16 transition-all duration-700 transform opacity-0 translate-y-6"
          data-fade
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Soluciones completas de construcción y remodelación, personalizadas para ti.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: Home, 
              title: "Remodelación Residencial", 
              desc: "Desde cocinas hasta ampliaciones integrales.",
              gradient: "from-orange-400 to-red-500",
              bgGradient: "from-orange-50 to-red-50"
            },
            {
              icon: Building,
              title: "Renovación Comercial",
              desc: "Locales y oficinas diseñadas con funcionalidad y estética.",
              gradient: "from-blue-400 to-cyan-500",
              bgGradient: "from-blue-50 to-cyan-50"
            },
            {
              icon: Hammer,
              title: "Construcción Personalizada",
              desc: "Proyectos basados estrictamente en planos arquitectónicos.",
              gradient: "from-green-400 to-emerald-500",
              bgGradient: "from-green-50 to-emerald-50"
            },
            {
              icon: Ruler,
              title: "Medición y Diseño",
              desc: "Consultoría para adaptaciones precisas según tus necesidades.",
              gradient: "from-purple-400 to-violet-500",
              bgGradient: "from-purple-50 to-violet-50"
            },
          ].map((svc, idx) => (
            <Card
              key={idx}
              className={`hover:shadow-2xl transition-all duration-500 transform transition-all duration-700 opacity-0 translate-y-6 hover:-translate-y-2 bg-gradient-to-br ${svc.bgGradient} border-0`}
              data-fade
            >
              <CardContent className="p-6 text-center">
                <div className={`bg-gradient-to-r ${svc.gradient} p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <svc.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">{svc.title}</h3>
                <p className="text-slate-600 leading-relaxed">{svc.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Proyectos Section */}
      <section id="proyectos" className="py-24 bg-white">
        <div
          className="max-w-6xl mx-auto px-6 text-center mb-16 transition-all duration-700 transform opacity-0 translate-y-6"
          data-fade
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Transformaciones que hablan por sí solas.</p>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { id: 1, title: "Remodelación de Cocina", desc: "Transformación completa con diseño moderno", gradient: "from-orange-400 to-red-500", image: "/images/kitchen-remodel.png" },
            { id: 2, title: "Oficina Corporativa", desc: "Espacio de trabajo funcional y elegante", gradient: "from-blue-400 to-cyan-500", image: "/images/office-renovation.png" },
            { id: 3, title: "Baño Principal", desc: "Renovación completa con acabados de lujo", gradient: "from-green-400 to-emerald-500", image: "/images/bathroom-remodel.png" },
            { id: 4, title: "Ampliación Residencial", desc: "Extensión de hogar con diseño integrado", gradient: "from-purple-400 to-violet-500", image: "/images/home-extension.png" },
            { id: 5, title: "Local Comercial", desc: "Renovación completa para retail moderno", gradient: "from-pink-400 to-rose-500", image: "/images/commercial-space.png" },
            { id: 6, title: "Terraza Personalizada", desc: "Construcción de espacio exterior único", gradient: "from-indigo-400 to-blue-500", image: "/images/custom-terrace.png" },
          ].map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl shadow-xl relative cursor-pointer transition-all duration-700 transform opacity-0 translate-y-6 hover:-translate-y-2 hover:shadow-2xl"
              data-fade
            >
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`Proyecto APServicios: ${project.title}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className="bg-white/90 backdrop-blur-sm text-slate-800 px-4 py-2 font-semibold shadow-lg">
                    Ver Proyecto
                  </Badge>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-slate-50">
                <h3 className="font-semibold text-lg text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 transition-all duration-700 transform opacity-0 translate-y-6" data-fade>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              ¿Listo para comenzar?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">Contáctanos hoy y obtén una cotización gratuita.</p>
          </div>
          <div className="lg:flex gap-12">
            <div className="flex-1 space-y-8 transition-all duration-700 transform opacity-0 translate-y-6" data-fade>
              {[
                {
                  icon: Phone,
                  title: "Teléfono",
                  info: "+507 XXX‑XXXX",
                  gradient: "from-green-400 to-emerald-500"
                },
                {
                  icon: Mail,
                  title: "Email",
                  info: "apservicios@gmail.com",
                  gradient: "from-blue-400 to-cyan-500"
                },
                {
                  icon: MapPin,
                  title: "Servicio",
                  info: "Área metropolitana – consultas a domicilio",
                  gradient: "from-purple-400 to-violet-500"
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 group">
                  <div className={`bg-gradient-to-r ${item.gradient} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-white mb-1">{item.title}</h4>
                    <p className="text-slate-300">{item.info}</p>
                  </div>
                </div>
              ))}
              <div className="mt-8 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <h4 className="font-semibold text-lg mb-4 text-white">¿Por qué elegirnos?</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> 15+ años de experiencia</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Trabajamos con planos arquitectónicos</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Medidas precisas y acabados de calidad</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Empresa familiar comprometida</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Garantía en todos nuestros trabajos</li>
                </ul>
              </div>
            </div>
            <div className="flex-1 transition-all duration-700 transform opacity-0 translate-y-6" data-fade>
              <Card className="bg-white/10 backdrop-blur-md border border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-white">Solicita tu Cotización</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-200 mb-2">Nombre</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-200 mb-2">Teléfono</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
                          placeholder="Tu teléfono"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-2">Tipo de Proyecto</label>
                      <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white backdrop-blur-sm">
                        <option className="bg-slate-800">Selecciona un servicio</option>
                        <option className="bg-slate-800">Remodelación Residencial</option>
                        <option className="bg-slate-800">Renovación Comercial</option>
                        <option className="bg-slate-800">Construcción Personalizada</option>
                        <option className="bg-slate-800">Consultoría y Medición</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-2">Descripción del Proyecto</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-slate-400 backdrop-blur-sm"
                        placeholder="Cuéntanos sobre tu proyecto..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 py-4 text-lg font-semibold shadow-xl" size="lg">
                      Enviar Solicitud
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">APServicios</span>
            </div>
            <p className="mb-4 text-slate-400">Remodelación precisa y personalizada: calidad y confianza.</p>
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} APServicios. Todos los derechos reservados.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Servicios</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Remodelación Residencial</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Renovación Comercial</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Construcción Personalizada</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Medición y Diseño</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contacto</h4>
            <div className="space-y-2 text-slate-400">
              <p className="hover:text-orange-400 transition-colors">+507 XXX‑XXXX</p>
              <p className="hover:text-orange-400 transition-colors">apservicios@gmail.com</p>
              <p className="hover:text-orange-400 transition-colors">Área metropolitana</p>
            </div>
          </div>
        </div>
      </footer>
      {/* Portfolio-Ready Features */}
      <LoadingSpinner />
      <ScrollToTop />
      <Analytics />
      <PerformanceMonitor />
    </div>
  )
}
