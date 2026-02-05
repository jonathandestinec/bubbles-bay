'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Sparkles, ChevronRight, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollAnimationVariant } from '@/hooks/useScrollAnimation'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const servicesRef = useScrollAnimationVariant('up')
  const galleryRef = useScrollAnimationVariant('scale')
  const aboutRef = useScrollAnimationVariant('left')
  const ctaRef = useScrollAnimationVariant('fade')

  const services = [
    { id: 1, name: 'Premium Detailing', desc: 'Full exterior & interior detailing', icon: '✨' },
    { id: 2, name: 'Ceramic Coating', desc: 'Advanced paint protection', icon: '🛡️' },
    { id: 3, name: 'Interior Restoration', desc: 'Deep cleaning & conditioning', icon: '🧼' },
    { id: 4, name: 'Engine Detailing', desc: 'Professional engine bay cleaning', icon: '⚙️' },
    { id: 5, name: 'Window Tinting', desc: 'Premium UV protection tinting', icon: '🪟' },
    { id: 6, name: 'Headlight Restoration', desc: 'Crystal clear headlights', icon: '💡' },
  ]

  const gallery = [
    'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&h=400&fit=crop', // Shiny Exterior
    'https://images.unsplash.com/photo-1552930294-6b595f4c2974?w=600&h=400&fit=crop', // Interior
    'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&h=400&fit=crop', // Foam Wash
    'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&h=400&fit=crop', // Detailing/Polishing
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop', // Luxury Car
    'https://images.unsplash.com/photo-1493238792015-fa094a3672aa?w=600&h=400&fit=crop', // Clean Wheel
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 blur-glass border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <Sparkles size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">Bubbles Bay</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#services" className="text-foreground/70 hover:text-primary transition text-sm font-medium">
              Services
            </Link>
            <Link href="/#about" className="text-foreground/70 hover:text-primary transition text-sm font-medium">
              About
            </Link>
            <Link href="/#gallery" className="text-foreground/70 hover:text-primary transition text-sm font-medium">
              Gallery
            </Link>
            <Link href="/booking" className="text-foreground/70 hover:text-primary transition text-sm font-medium">
              Booking
            </Link>
            <Link href="/#contact" className="text-foreground/70 hover:text-primary transition text-sm font-medium">
              Contact
            </Link>
            <Link href="/booking">
              <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg">Book Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-muted">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border animate-slide-in">
            <div className="px-4 py-4 space-y-2">
              <Link href="/#services" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-muted transition text-sm">
                Services
              </Link>
              <Link href="/#about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-muted transition text-sm">
                About
              </Link>
              <Link href="/#gallery" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-muted transition text-sm">
                Gallery
              </Link>
              <Link href="/booking" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-muted transition text-sm">
                Booking
              </Link>
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-muted transition text-sm">
                Contact
              </Link>
              <Link href="/booking" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Book Now</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
        {/* Animated Blob Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Teal Blob - Top Right */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />

          {/* Copper Blob - Bottom Left */}
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-blob-2" />

          {/* Teal Blob - Top Left */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-blob-3" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/50" />
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto text-center z-10 animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-bounce-in backdrop-blur-sm">
            <span className="text-primary font-semibold text-sm">Welcome to Luxury Auto Care</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-secondary leading-tight mb-6 text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Your Car Deserves <span className="text-primary">Perfection</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Transform your vehicle into a showpiece with our premium detailing and auto spa services. Experience luxury and precision like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link href="/booking">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-lg group hover:shadow-xl transition-all hover:scale-105 backdrop-blur-sm">
                Book Your Appointment
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link href="/#services">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg bg-white/50 hover:scale-105 transition-transform backdrop-blur-sm">
                Explore Services
                <ChevronRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '2K+', label: 'Vehicles Serviced' },
            { value: '8+', label: 'Years Experience' },
            { value: '99%', label: 'Satisfaction Rate' },
          ].map((stat, i) => (
            <div
              key={i}
              className="blur-glass rounded-2xl p-6 text-center hover:shadow-lg transition-all animate-slide-up hover:scale-105 hover:border-primary cursor-pointer group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:animate-pop">{stat.value}</div>
              <div className="text-muted-foreground text-sm group-hover:text-secondary transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4" ref={servicesRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-in">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary font-semibold text-sm">Premium Services</span>
            </div>
            <h2 className="text-5xl font-bold text-secondary mb-4 text-balance">World-Class Auto Care</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From basic detailing to advanced protective coatings, we offer comprehensive solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="group blur-glass rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary cursor-pointer hover:-translate-y-2 animate-slide-up hover:bg-primary/5"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 group-hover:animate-bounce-in transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                <Link href="/booking" className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all group-hover:translate-x-1">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-muted/30" ref={aboutRef}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=800&fit=crop"
                alt="About Bubbles Bay Auto Spa"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="space-y-8 animate-slide-in">
              <div>
                <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-primary font-semibold text-sm">About Us</span>
                </div>
                <h2 className="text-5xl font-bold text-secondary mb-4 text-balance">Excellence Since Day One</h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Bubbles Bay Auto Spa has been setting the standard for premium vehicle care in Kwasu for over 8 years. We combine cutting-edge technology with meticulous craftsmanship.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of certified professionals uses only eco-friendly, premium products to ensure your vehicle receives the care it deserves while protecting the environment.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
                  <Sparkles className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-secondary">Premium Quality Products</p>
                    <p className="text-sm text-muted-foreground">Industry-leading detailing solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
                  <Sparkles className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-secondary">Expert Team</p>
                    <p className="text-sm text-muted-foreground">Certified & highly experienced professionals</p>
                  </div>
                </div>
              </div>

              <Link href="/booking">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 shadow-lg group">
                  Book a Service
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4" ref={galleryRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-in">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary font-semibold text-sm">Our Work</span>
            </div>
            <h2 className="text-5xl font-bold text-secondary mb-4 text-balance">Before & After Transformations</h2>
            <p className="text-lg text-muted-foreground">
              See the dramatic transformations we create for vehicles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer shadow-lg hover:shadow-2xl transition-all animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/70 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75">
                  <Button className="bg-white text-primary hover:bg-white/90 animate-bounce-in">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary text-white" ref={ctaRef}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-balance">Ready for Your Car to Shine?</h2>
          <p className="text-xl text-white/80 mb-10 text-balance">
            Schedule your appointment now and experience the Bubbles Bay difference
          </p>
          <Link href="/booking">
            <Button className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg shadow-lg group">
              Book Your Appointment Today
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-secondary text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="blur-glass-dark rounded-2xl p-8">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-white/70">KWASU Road opposite Baba Ote Mosque, Kwasu, Nigeria</p>
          </div>
          <div className="blur-glass-dark rounded-2xl p-8">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-white/70">+234 (0) 123 456 7890</p>
            <p className="text-white/70">Available 24/7</p>
          </div>
          <div className="blur-glass-dark rounded-2xl p-8">
            <div className="text-3xl mb-4">🕐</div>
            <h3 className="text-xl font-bold mb-2">Hours</h3>
            <p className="text-white/70">Monday - Sunday</p>
            <p className="text-white/70">8:00 AM - 6:00 PM</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-secondary/95 border-t border-white/10 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="text-accent" size={20} />
            <span className="font-bold">Bubbles Bay Auto Spa</span>
          </div>
          <p className="text-white/60 text-sm">© 2024 Bubbles Bay. All rights reserved.</p>
          <div className="flex gap-6 text-white/60">
            <Link href="#" className="hover:text-white transition">Instagram</Link>
            <Link href="#" className="hover:text-white transition">Facebook</Link>
            <Link href="#" className="hover:text-white transition">WhatsApp</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
