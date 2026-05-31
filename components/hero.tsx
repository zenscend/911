'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LiquidCard } from '@/components/liquid-hover'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-primary text-primary-foreground overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-widest uppercase text-primary-foreground/60 animate-fade-in">
                Digital Marketing Agency
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] tracking-tight text-balance">
                Build your brand.
                <br />
                <span className="gradient-text">Grow your reach.</span>
              </h1>
            </div>
            <p className="text-lg text-primary-foreground/70 max-w-md leading-relaxed">
              We are your dedicated lead generation marketing company. 
              Social media management, web design, brand launches and events 
              tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-accent hover:bg-accent text-accent-foreground transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:border-accent transition-all duration-300"
              >
                View Our Work
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>
          </div>

          {/* Right Content - Stats with Liquid Hover */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '10+', label: 'Years Experience' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <LiquidCard
                key={stat.label}
                className={`group bg-primary-foreground/5 backdrop-blur-sm cursor-default ${index % 2 === 1 ? 'mt-12' : ''}`}
                glowColor="oklch(0.65 0.28 330 / 0.15)"
                borderColor="oklch(1 0 0 / 0.1)"
                hoverBorderColor="oklch(0.65 0.28 330 / 0.4)"
              >
                <div className="relative p-6 space-y-2">
                  <p className="text-5xl font-serif font-medium group-hover:gradient-text transition-all duration-300">
                    {stat.value}
                  </p>
                  <p className="text-sm text-primary-foreground/60 group-hover:text-primary-foreground/80 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </LiquidCard>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-primary-foreground/40 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  )
}
