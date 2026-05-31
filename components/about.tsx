'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LiquidCard } from '@/components/liquid-hover'

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase gradient-text mb-4">
                About Us
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-balance mb-6">
                Your partner in digital growth
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                911 Media and Marketing is your dedicated lead generation marketing 
                company based in Germiston. We specialize in creating comprehensive 
                digital strategies that drive real business results.
              </p>
              <p>
                Our team combines creativity with data-driven insights to help 
                businesses of all sizes build their brand presence and connect 
                with their target audience effectively.
              </p>
            </div>
            <Button className="group relative overflow-hidden bg-accent hover:bg-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-105">
              <span className="relative z-10 flex items-center">
                Learn Our Story
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </div>

          {/* Right Content - Values with Liquid Hover */}
          <div className="space-y-6">
            {[
              {
                number: '01',
                title: 'Strategic Approach',
                description: 'Every campaign starts with understanding your business goals and target audience.',
              },
              {
                number: '02',
                title: 'Creative Excellence',
                description: 'We craft compelling content and designs that capture attention and drive engagement.',
              },
              {
                number: '03',
                title: 'Measurable Results',
                description: 'Data-driven decisions ensure your marketing investment delivers real ROI.',
              },
            ].map((value) => (
              <LiquidCard
                key={value.number}
                className="group bg-background cursor-default"
                glowColor="oklch(0.65 0.28 330 / 0.1)"
                borderColor="var(--border)"
                hoverBorderColor="oklch(0.65 0.28 330 / 0.5)"
              >
                <div className="flex gap-6 p-6">
                  <span className="text-4xl font-serif font-medium gradient-text transition-all duration-300">
                    {value.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </LiquidCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
