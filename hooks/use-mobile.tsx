'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Check, Calendar, Clock, User } from 'lucide-react'

export default function BookingPage() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        carModel: '',
        service: '',
        date: '',
        time: '',
    })

    const [submitted, setSubmitted] = useState(false)

    const services = [
        { id: 'detailing', name: 'Premium Detailing', price: '$150', time: '4 hours' },
        { id: 'ceramic', name: 'Ceramic Coating', price: '$300', time: '6 hours' },
        { id: 'interior', name: 'Interior Restoration', price: '$200', time: '5 hours' },
        { id: 'engine', name: 'Engine Detailing', price: '$120', time: '3 hours' },
        { id: 'tinting', name: 'Window Tinting', price: '$250', time: '4 hours' },
        { id: 'headlight', name: 'Headlight Restoration', price: '$80', time: '2 hours' },
    ]

    const timeSlots = [
        '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
    ]

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleServiceSelect = (serviceId: string) => {
        setFormData(prev => ({ ...prev, service: serviceId }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (step < 4) {
            setStep(step + 1)
        } else {
            setSubmitted(true)
        }
    }

    const selectedService = services.find(s => s.id === formData.service)

    if (submitted) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <nav className="sticky top-0 z-50 blur-glass border-b border-border">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
                        <Link href="/" className="text-muted-foreground hover:text-foreground transition">
                            <ArrowLeft size={24} />
                        </Link>
                        <h1 className="text-2xl font-bold text-secondary">Booking Confirmation</h1>
                    </div>
                </nav>

                <div className="flex-1 flex items-center justify-center px-4 py-12">
                    <div className="max-w-2xl w-full text-center">
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce-in">
                            <Check size={40} className="text-white animate-pop" />
                        </div>
                        <h2 className="text-4xl font-bold text-secondary mb-4 animate-slide-up">Booking Confirmed!</h2>
                        <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            Thank you for booking with Bubbles Bay Auto Spa. We've sent a confirmation email to {formData.email}
                        </p>

                        <div className="bg-muted/30 rounded-2xl p-8 mb-8 text-left border border-border animate-scale-in" style={{ animationDelay: '0.4s' }}>
                            <h3 className="text-xl font-bold text-secondary mb-6">Booking Details</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between pb-4 border-b border-border">
                                    <span className="text-muted-foreground">Name:</span>
                                    <span className="font-semibold text-secondary">{formData.name}</span>
                                </div>
                                <div className="flex justify-between pb-4 border-b border-border">
                                    <span className="text-muted-foreground">Service:</span>
                                    <span className="font-semibold text-secondary">{selectedService?.name}</span>
                                </div>
                                <div className="flex justify-between pb-4 border-b border-border">
                                    <span className="text-muted-foreground">Date:</span>
                                    <span className="font-semibold text-secondary">{formData.date}</span>
                                </div>
                                <div className="flex justify-between pb-4 border-b border-border">
                                    <span className="text-muted-foreground">Time:</span>
                                    <span className="font-semibold text-secondary">{formData.time}</span>
                                </div>
                                <div className="flex justify-between pt-4">
                                    <span className="text-muted-foreground">Price:</span>
                                    <span className="font-bold text-primary text-lg">{selectedService?.price}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 mb-8">
                            <p className="text-muted-foreground mb-2">📍 Location</p>
                            <p className="font-semibold text-secondary">
                                KWASU Road opposite Baba Ote Mosque, Kwasu
                            </p>
                            <p className="text-muted-foreground mt-4 text-sm">
                                Please arrive 15 minutes early. If you need to reschedule, call us at +234 (0) 123 456 7890
                            </p>
                        </div>

                        <Link href="/">
                            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 blur-glass border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <Link href="/" className="text-muted-foreground hover:text-foreground transition">
                        <ArrowLeft size={24} />
                    </Link>
                    <h1 className="text-2xl font-bold text-secondary">Book Your Service</h1>
                    <div className="text-sm text-muted-foreground font-semibold">Step {step} of 4</div>
                </div>
            </nav>

            {/* Progress Bar */}
            <div className="bg-muted/30 border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex gap-2">
                        {[1, 2, 3, 4].map((s) => (
                            <div
                                key={s}
                                className={`flex-1 h-2 rounded-full transition-all duration-500 ${s <= step ? 'bg-primary shadow-lg' : 'bg-border'
                                    }`}
                                style={{ animationDelay: `${(s - 1) * 100}ms` }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Form Content */}
            <div className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="max-w-2xl w-full">
                    <form onSubmit={handleSubmit} className="space-y-8 animate-scale-in">
                        {/* Step 1: Personal Info */}
                        {step === 1 && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-secondary mb-2">Your Information</h2>
                                    <p className="text-muted-foreground">Let us know how to reach you</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                                        <label className="block text-sm font-semibold text-secondary mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition hover:border-primary hover:shadow-md"
                                            required
                                        />
                                    </div>

                                    <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                                        <label className="block text-sm font-semibold text-secondary mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition hover:border-primary hover:shadow-md"
                                            required
                                        />
                                    </div>

                                    <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                                        <label className="block text-sm font-semibold text-secondary mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="+234 (0) 123 456 7890"
                                            className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition hover:border-primary hover:shadow-md"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Vehicle Info */}
                        {step === 2 && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-secondary mb-2">Your Vehicle</h2>
                                    <p className="text-muted-foreground">Tell us about your car</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-secondary mb-2">Car Model</label>
                                    <input
                                        type="text"
                                        name="carModel"
                                        value={formData.carModel}
                                        onChange={handleInputChange}
                                        placeholder="e.g., Toyota Camry 2020"
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 3: Service Selection */}
                        {step === 3 && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-secondary mb-2">Select Service</h2>
                                    <p className="text-muted-foreground">Choose the service you need</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {services.map((service, idx) => (
                                        <button
                                            key={service.id}
                                            type="button"
                                            onClick={() => handleServiceSelect(service.id)}
                                            className={`p-6 rounded-xl border-2 transition-all text-left group animate-slide-up hover:scale-105 hover:shadow-lg ${formData.service === service.id
                                                ? 'border-primary bg-primary/5 scale-105 shadow-lg'
                                                : 'border-border hover:border-primary/50 bg-white'
                                                }`}
                                            style={{ animationDelay: `${idx * 75}ms` }}
                                        >
                                            <h3 className="font-bold text-secondary mb-1 group-hover:text-primary transition">{service.name}</h3>
                                            <p className="text-sm text-muted-foreground mb-3">{service.time}</p>
                                            <p className="text-lg font-bold text-primary group-hover:scale-110 inline-block transition-transform">{service.price}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 4: Date & Time */}
                        {step === 4 && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-secondary mb-2">Select Date & Time</h2>
                                    <p className="text-muted-foreground">Choose your preferred appointment</p>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-secondary mb-2">Preferred Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            min={new Date().toISOString().split('T')[0]}
                                            className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                                            required
                                        />
                                    </div>

                                    <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                                        <label className="block text-sm font-semibold text-secondary mb-3">Preferred Time</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {timeSlots.map((time, idx) => (
                                                <button
                                                    key={time}
                                                    type="button"
                                                    onClick={() => setFormData(prev => ({ ...prev, time }))}
                                                    className={`py-2 px-3 rounded-lg border transition-all text-sm font-semibold animate-scale-in hover:scale-105 ${formData.time === time
                                                        ? 'bg-primary text-white border-primary shadow-lg scale-105'
                                                        : 'bg-white border-border hover:border-primary'
                                                        }`}
                                                    style={{ animationDelay: `${idx * 50}ms` }}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Booking Summary */}
                                <div className="bg-muted/30 rounded-xl p-6 border border-border">
                                    <h3 className="font-bold text-secondary mb-4">Booking Summary</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Service:</span>
                                            <span className="font-semibold">{selectedService?.name}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Duration:</span>
                                            <span className="font-semibold">{selectedService?.time}</span>
                                        </div>
                                        <div className="border-t border-border pt-2 mt-2 flex justify-between">
                                            <span className="font-semibold">Price:</span>
                                            <span className="font-bold text-primary">{selectedService?.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex gap-4 justify-between">
                            {step > 1 && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="px-8 py-3 border-border text-secondary hover:bg-muted/50 bg-transparent"
                                    onClick={() => setStep(step - 1)}
                                >
                                    Previous
                                </Button>
                            )}
                            <div className="flex-1" />
                            <Button
                                type="submit"
                                className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                                disabled={
                                    (step === 1 && (!formData.name || !formData.email || !formData.phone)) ||
                                    (step === 2 && !formData.carModel) ||
                                    (step === 3 && !formData.service) ||
                                    (step === 4 && (!formData.date || !formData.time))
                                }
                            >
                                {step === 4 ? 'Confirm Booking' : 'Next'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
