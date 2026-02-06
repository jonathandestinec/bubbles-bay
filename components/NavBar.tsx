"use client"

import { useState, useEffect } from 'react';
import { Droplets, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';


interface NavbarProps{
    onBookClick: any
}
export default function Navbar({ onBookClick }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Benefits', href: '#benefits' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Location', href: '#location' }
    ];

    return (
        <>
            <nav className={`fixed w-full z-[100] py-5 px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-[#00227b]/75 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent'}`}>
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-[#fdd835] flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                        <Droplets className="text-[#00227b]" size={22} />
                    </div>
                    <span className="font-black text-xl tracking-tighter text-white uppercase">Bubbles Bay</span>
                </div>

                <div className="hidden lg:flex space-x-10 font-black text-[10px] tracking-[0.3em] text-white uppercase">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-[#fdd835] transition-colors relative group">
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fdd835] transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={onBookClick}
                        className="hidden sm:block bg-[#fdd835] text-[#00227b] px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-yellow-500/20"
                    >
                        Book Session
                    </button>
                    <button onClick={() => setMobileMenu(true)} className="lg:hidden text-white"><Menu size={28} /></button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenu && (
                    <motion.div
                        initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                        className="fixed inset-0 z-[110] bg-[#00227b] p-10 flex flex-col justify-center gap-8"
                    >
                        <button onClick={() => setMobileMenu(false)} className="absolute top-10 right-10 text-white"><X size={32} /></button>
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} onClick={() => setMobileMenu(false)} className="text-4xl font-light text-white italic">{link.name}</a>
                        ))}
                        <button onClick={() => { onBookClick(); setMobileMenu(false); }} className="bg-[#fdd835] text-[#00227b] py-6 rounded-2xl font-black uppercase text-xs tracking-widest">Book Now</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>)
}