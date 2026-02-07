"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Droplets, ChevronRight, X, CheckCircle2, MapPin, Phone,
  Clock, Star, ArrowRight, ShieldCheck, Zap, Waves,
  Mail, Instagram, Facebook, MessageCircle, Menu,
  Award, Heart, Sparkles, Navigation, ChevronLeft
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Navbar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import Logo from '@/components/Logo';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import BookingModal from '@/components/BookingModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])


  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % (isMobile ? 3 : 2));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + (isMobile ? 3 : 2)) % (isMobile ? 3 : 2));
  };

  // Hold on now, This part is very sensitive.. changing the index of any item in this list would affect the services courosel UI :)
  const services = [
    {
      name: "View All Services",
      desc: "View all our services",
      icon: <ChevronRight />,
      img: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800",
      isGoToFullServicesCard: true
    },
    {
      name: "Full-Service Wash",
      desc: "Comprehensive interior and exterior cleaning with premium soaps.",
      icon: <Waves />,
      img: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800",
      isGoToFullServicesCard: false
    },
    {
      name: "Ceramic Coating",
      desc: "9H Hardness protection for long-lasting paint brilliance.",
      icon: <ShieldCheck />,
      img: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=800",
      isGoToFullServicesCard: false
    },

    {
      name: "Interior Deep Cleaning",
      desc: "Steam sanitation and upholstery restoration for a factory feel.",
      icon: <Sparkles />,
      img: "https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=800",
      isGoToFullServicesCard: false
    },
    {
      name: "Engine Cleaning",
      desc: "Precision degreasing and detailing for peak engine aesthetics.",
      icon: <Zap />,
      img: "https://images.unsplash.com/photo-1656958258484-7ee6452cfd92?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isGoToFullServicesCard: false
    },
    {
      name: "Waxing & Polishing",
      desc: "High-gloss buffing that removes swirl marks and restores shine.",
      icon: <Award />,
      img: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80&w=800",
      isGoToFullServicesCard: false
    },
    {
      name: "Mobile Car Wash",
      desc: "We bring the bubbles to your doorstep. Convenience redefined.",
      icon: <Navigation />,
      img: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=800",
      isGoToFullServicesCard: false
    },
  ];

  const testimonials = [
    { name: "Adebayo K.", role: "Lexus Owner", text: "The best detailing service in Malete. My car looked brand new after the ceramic coating.", stars: 5 },
    { name: "Sarah J.", role: "SUV Driver", text: "Excellent customer service and very professional. The interior deep clean is a life saver.", stars: 5 },
    { name: "Ibrahim W.", role: "Kwasu Faculty", text: "Fast, efficient, and they actually care about the paint. Highly recommended for Kwasu staff.", stars: 5 }
  ];

  const benefits = [
    { title: "Eco-Friendly", desc: "We use biodegradable soaps that protect the environment.", icon: <Heart className="text-red-500" /> },
    { title: "Precision Gear", desc: "State-of-the-art pressure washers and steam cleaners.", icon: <Zap className="text-yellow-500" /> },
    { title: "Expert Staff", desc: "Trained professionals who treat every car as a masterpiece.", icon: <CheckCircle2 className="text-green-500" /> },
    { title: "Secure Parking", desc: "Gated and monitored facility for your vehicle's safety.", icon: <ShieldCheck className="text-blue-500" /> }
  ];

  return (
    <div className="min-h-screen bg-white text-[#00227b] font-sans selection:bg-[#fdd835] selection:text-[#00227b]">
      <Navbar onBookClick={() => setIsModalOpen(true)} />

      <Hero setIsModalOpen={setIsModalOpen} />

      <Benefits benefits={benefits} />

      <Services setIsModalOpen={setIsModalOpen} activeIndex={activeIndex} setActiveIndex={setActiveIndex} services={services} handleNext={handleNext} handlePrev={handlePrev} />

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />

      <Pricing setIsModalOpen={setIsModalOpen} />

      {/* Location & Contact Section */}
      <section id="location" className="py-32 px-6 bg-[#00227b] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fdd835] opacity-5 -z-0 skew-x-12"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#fdd835] rounded-[4rem] rotate-3 opacity-20 -z-10 group-hover:rotate-6 transition-transform"></div>
            <div className="h-[550px] w-full rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white/10 relative">
              {/* Mock Map View */}
              <div className="absolute inset-0 bg-[#001344] flex flex-col items-center justify-center text-center p-12">
                <MapPin size={80} className="text-[#fdd835] mb-6 animate-bounce" />
                <h3 className="text-2xl font-black text-white italic mb-4">Malete, Kwara State</h3>
                <p className="text-white/50 text-sm max-w-xs font-bold uppercase tracking-widest">KWASU Road, Opposite Baba Ote Mosque</p>
                <button className="mt-8 bg-white text-[#00227b] px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl">Get Directions</button>
              </div>
            </div>
          </div>

          <div className="text-white">
            <SectionHeading subtitle="Visit Us" title={<span>Visit the <br /><span className="font-black italic text-[#fdd835]">Sanctuary</span></span>} light />

            <div className="grid gap-12 mt-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#fdd835] shrink-0"><MapPin size={28} /></div>
                <div>
                  <h5 className="font-black uppercase tracking-widest mb-2">Location</h5>
                  <p className="text-white/60 font-medium">KWASU Road, Opposite Baba Ote Mosque, <br /> Malete, Kwara State.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#fdd835] shrink-0"><Phone size={28} /></div>
                <div>
                  <h5 className="font-black uppercase tracking-widest mb-2">Connect</h5>
                  <p className="text-white/60 font-medium">+234 812 345 6789 <br /> hello@bubblesbay.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#fdd835] shrink-0"><Clock size={28} /></div>
                <div>
                  <h5 className="font-black uppercase tracking-widest mb-2">Hours</h5>
                  <p className="text-white/60 font-medium italic">Monday — Saturday: 08:00 — 18:00 <br /> Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-gray-50 rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-center">
          <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#fdd835]/10 rounded-full blur-3xl"></div>
          <SectionHeading subtitle="Newsletter" title={<span>Join the <span className="font-black italic">Elite</span> List</span>} />
          <p className="text-gray-400 font-medium mb-12 max-w-lg mx-auto">Get detailing tips, exclusive discounts, and priority booking slots delivered to your inbox.</p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input type="email" placeholder="Your Email Address" className="flex-1 bg-white border border-gray-100 p-6 rounded-2xl outline-none focus:border-[#fdd835] text-[#00227b] font-bold transition-all" />
            <button className="bg-[#00227b] text-white px-10 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#001344] transition-all shadow-xl shadow-blue-900/10">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#00227b] pt-32 pb-12 px-6 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-20 mb-20">
            <div className="col-span-2 space-y-8">
              <Logo />
              <p className="text-white/40 text-lg font-medium leading-relaxed max-w-md italic">
                The ultimate automotive grooming experience in Malete. Precision, Luxury, and Unparalleled Care.
              </p>
            </div>

            <div className="space-y-8">
              <h5 className="font-black uppercase tracking-[0.3em] text-[10px] text-[#fdd835]">Quick Links</h5>
              <div className="flex flex-col gap-4 text-white/60 font-bold uppercase text-[10px] tracking-widest">
                <a href="#services" className="hover:text-white transition-colors">Services</a>
                <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
                <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
                <a href="#location" className="hover:text-white transition-colors">Location</a>
              </div>
            </div>

            <div className="space-y-8">
              <h5 className="font-black uppercase tracking-[0.3em] text-[10px] text-[#fdd835]">Follow the Shine</h5>
              <div className="flex gap-6 text-white/60">
                <Instagram className="hover:text-[#fdd835] cursor-pointer transition-colors" />
                <Facebook className="hover:text-[#fdd835] cursor-pointer transition-colors" />
                <MessageCircle className="hover:text-[#fdd835] cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">© 2024 Bubbles Bay Auto Spa — Malete, Nigeria</span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Crafted for Excellence</span>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} services={services} />
    </div>
  );
}