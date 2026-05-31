'use client'

import { 
  Share2, 
  Globe, 
  Rocket, 
  Calendar, 
  Link2, 
  Palette,
  ArrowRight 
} from 'lucide-react'
import { LiquidCard } from '@/components/liquid-hover'

const services = [
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Strategic social media presence across all major platforms to engage your audience and grow your brand.',
  },
  {
    icon: Globe,
    title: 'Web Design',
    description: 'Beautiful, responsive websites that convert visitors into customers and represent your brand perfectly.',
  },
  {
    icon: Rocket,
    title: 'Brand Launches',
    description: 'Comprehensive launch strategies that create buzz and establish your brand in the market.',
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'Full-service event marketing and management to create memorable brand experiences.',
  },
  {
    icon: Link2,
    title: 'Lead Integration',
    description: 'Seamless integration between your social media and website to capture and nurture leads.',
  },
  {
    icon: Palette,
    title: 'Content Creation',
    description: 'Compelling content and brand materials that tell your story and resonate with your audience.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium tracking-widest uppercase gradient-text mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-balance mb-6">
            How can we help?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer a comprehensive suite of digital marketing services 
            designed to elevate your brand and drive results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <LiquidCard
              key={service.title}
              className="group bg-background"
              glowColor="oklch(0.65 0.28 330 / 0.12)"
              borderColor="var(--border)"
              hoverBorderColor="oklch(0.65 0.28 330 / 0.5)"
            >
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-secondary rounded-lg group-hover:bg-accent/10 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-500">
                    <service.icon className="h-6 w-6 text-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <span className="text-sm text-muted-foreground font-mono group-hover:text-accent transition-colors duration-300">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-medium text-foreground group-hover:text-accent transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </LiquidCard>
          ))}
        </div>
      </div>
    </section>
  )
}
