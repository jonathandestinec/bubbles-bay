"use client"

import { motion } from 'framer-motion';

interface SectionHeadingProps {
    subtitle: string;
    title: React.ReactNode;
    light?: boolean;
}

export default function SectionHeading({ subtitle, title, light = false }: SectionHeadingProps) {
    return (
        <div className="mb-16">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-4"
            >
                <div className={`w-10 h-0.5 ${light ? 'bg-white/30' : 'bg-[#fdd835]'}`}></div>
                <span className={`uppercase tracking-[0.4em] text-[10px] font-black ${light ? 'text-white/60' : 'text-[#00227b]'}`}>
                    {subtitle}
                </span>
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-4xl md:text-6xl font-light leading-tight ${light ? 'text-white' : 'text-[#00227b]'}`}
            >
                {title}
            </motion.h2>
        </div>
    );
}