'use client';

import { useEffect, useRef } from 'react'

export const useScrollAnimation = () => {
    const ref = useRef<HTMLElement | HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                        entry.target.classList.add('animate-slide-up')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])

    return ref
}

export const useScrollAnimationVariant = (variant: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale' = 'up') => {
    const ref = useRef<HTMLElement | HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                        switch (variant) {
                            case 'down':
                                entry.target.classList.add('animate-slide-down')
                                break
                            case 'left':
                                entry.target.classList.add('animate-slide-left')
                                break
                            case 'right':
                                entry.target.classList.add('animate-slide-right')
                                break
                            case 'fade':
                                entry.target.classList.add('animate-fade-in')
                                break
                            case 'scale':
                                entry.target.classList.add('animate-scale-in')
                                break
                            default:
                                entry.target.classList.add('animate-slide-up')
                        }
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [variant])

    return ref
}
