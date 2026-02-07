"use client"
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const Services = ({ setIsModalOpen, activeIndex, setActiveIndex, services, handleNext, handlePrev }: { setIsModalOpen: (open: boolean) => void, activeIndex: number, setActiveIndex: (index: number) => void, services: any[], handleNext: () => void, handlePrev: () => void }) => {
    const browserWindow = typeof window !== 'undefined' ? window : null;
    let numberValue = 0
    if (browserWindow) {
        numberValue = (100 / (browserWindow?.innerWidth < 768 ? 1 : 2.5))
    }
    return (
        <div>
            {/* Services */}
            <section id="services" className="py-32 bg-gray-50 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 mb-12">
                    <SectionHeading
                        subtitle="The Treatment Menu"
                        title={<span>Crafted <span className="font-black italic text-[#00227b] underline decoration-[#fdd835] decoration-8">Excellence</span></span>}
                    />
                </div>

                {/* Carousel Viewport */}
                <div className="relative w-full h-[480px] md:h-[420px] px-6 md:scale-100">
                    <div className="max-w-7xl mx-auto relative h-[450px] md:h-[400px]">
                        <motion.div
                            animate={{ x: `calc(-${activeIndex * numberValue}% )` }}

                            transition={{ type: "spring", stiffness: 80, damping: 20 }}
                            className="flex gap-6 h-full"
                        >
                            {services.slice(0, 3).map((s, i) => {
                                if (s.isGoToFullServicesCard) {
                                    return (
                                        // This is the last item on the list, and it is just a card that says View all services and opens the full services page

                                        <motion.div key={i} className='relative w-full md:w-[450px] h-full rounded-[3.5rem] overflow-hidden group shadow-2xl shadow-blue-900/10 border border-gray-100 bg-white shrink-0'>
                                            <div className="relative w-full md:w-[450px] h-full rounded-[3.5rem] overflow-hidden group shadow-2xl shadow-blue-900/10 border border-gray-100 bg-[#00227b] shrink-0">

                                                <img
                                                    src={s.image || "https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=2070&auto=format&fit=crop"}
                                                    alt="View all services"
                                                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
                                                />


                                                <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-center text-white">
                                                    <div className="mb-6 w-14 h-14 bg-[#fdd835] rounded-2xl flex items-center justify-center text-[#00227b] shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                        {s.icon}
                                                    </div>

                                                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 leading-none">
                                                        View All Services
                                                    </h3>

                                                    <div className="">
                                                        <p className="text-white/70 font-medium mb-8 leading-relaxed text-sm">
                                                            View all our services
                                                        </p>

                                                        <a href="/services"
                                                            className="bg-white text-[#00227b] px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 hover:bg-[#fdd835] transition-colors mb-2"
                                                        >
                                                            All Services <ArrowRight size={14} />
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                } else return (
                                    <motion.div
                                        key={i}
                                        className="relative w-full md:w-[450px] h-full rounded-[3.5rem] overflow-hidden group shadow-2xl shadow-blue-900/10 border border-gray-100 bg-white shrink-0"
                                    >
                                        <div className="absolute inset-0 scale-100 group-hover:scale-110 transition-transform duration-700">
                                            <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#00227b] via-[#00227b]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
                                        </div>

                                        <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end text-white">
                                            <div className="mb-6 w-14 h-14 bg-[#fdd835] rounded-2xl flex items-center justify-center text-[#00227b] shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                {s.icon}
                                            </div>

                                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 leading-none">
                                                {s.name}
                                            </h3>

                                            <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                                                <p className="text-white/70 font-medium mb-8 leading-relaxed text-sm">
                                                    {s.desc}
                                                </p>
                                                <button
                                                    onClick={() => setIsModalOpen(true)}
                                                    className="bg-white text-[#00227b] px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-[#fdd835] transition-colors mb-2"
                                                >
                                                    Book Service <ArrowRight size={14} />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="absolute top-10 right-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-black text-white/40 backdrop-blur-sm">
                                            0{i + 1}
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </div>

                {/* Floating Dock */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 p-3 bg-white/90 backdrop-blur-2xl rounded-full border border-gray-200 shadow-2xl z-50">
                    <button
                        onClick={handlePrev}
                        className="w-14 h-14 rounded-full bg-white text-[#00227b] flex items-center justify-center border border-gray-100 hover:bg-[#fdd835] transition-all active:scale-90"
                        aria-label="Previous Service"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="flex gap-1.5 px-2">
                        {services.slice(0, 3).map((_, i) => (
                            <div
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-8 bg-[#00227b]' : 'w-1.5 bg-gray-200'}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="w-14 h-14 rounded-full bg-[#00227b] text-white flex items-center justify-center hover:bg-[#001344] transition-all shadow-lg active:scale-90"
                        aria-label="Next Service"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Services