'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      image: '/images/banner1.jpg',
      alt: 'Daytona Beach Banner 1'
    },
    {
      image: '/images/banner2.jpg',
      alt: 'Daytona Beach Banner 2'
    },
    {
      image: '/images/banner3.jpg',
      alt: 'Daytona Beach Banner 3'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative overflow-hidden mt-[104px]">
      <div id="heroSlider" className="relative w-full h-[calc(100vh-104px)]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide absolute inset-0 transition-all duration-700 transform scale-105 pointer-events-none ${
              index === currentSlide
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl relative">
              <span className="text-brand-light font-yellowtail text-3xl md:text-4xl mb-4 block opacity-0 animate-fadeInUp">
                Experience Paradise
              </span>
              <h1 className="font-dunbar text-5xl md:text-7xl xl:text-8xl font-bold mb-6 leading-tight text-white opacity-0 animate-fadeInUp animation-delay-200">
                Welcome to <br className="hidden md:block" />
                Daytona Beach
              </h1>
              <p className="text-lg md:text-2xl mb-10 text-gray-100 max-w-3xl opacity-0 animate-fadeInUp animation-delay-400">
                Discover our vibrant community, access city services, and stay
                informed about local events.
              </p>
              <div className="flex flex-wrap gap-4 opacity-0 animate-fadeInUp animation-delay-600">
                <a
                  href="#services"
                  className="group bg-[#154777] hover:bg-[#1a5891] text-white px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center text-lg hover:translate-y-[-2px] hover:shadow-lg"
                >
                  City Services
                  <i className="fas fa-arrow-right ml-2 transform transition-transform group-hover:translate-x-1"></i>
                </a>
                <a
                  href="#events"
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg transition-all duration-300 text-lg hover:translate-y-[-2px]"
                >
                  Upcoming Events
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 opacity-0 hover:opacity-100 focus:opacity-100 group"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left text-xl transition-transform group-hover:-translate-x-1"></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 opacity-0 hover:opacity-100 focus:opacity-100 group"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right text-xl transition-transform group-hover:translate-x-1"></i>
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1.5 rounded-full bg-white transition-all duration-300 hover:w-16 ${
                index === currentSlide ? 'opacity-100 w-16' : 'opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  )
}
