'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
  }

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase gradient-text mb-4">
                Get In Touch
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-balance mb-6">
                Let&apos;s start a conversation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to take your marketing to the next level? 
                We&apos;d love to hear about your project and discuss how we can help.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 pt-8 border-t border-border">
              <a
                href="tel:0129442537"
                className="group flex items-center gap-4 text-foreground hover:text-accent transition-all duration-300"
              >
                <div className="p-3 bg-secondary rounded-lg group-hover:bg-accent/10 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-500">
                  <Phone className="h-5 w-5 group-hover:text-accent transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium group-hover:translate-x-1 transition-transform duration-300">012 944 2537</p>
                </div>
              </a>
              <a
                href="mailto:marketing@911media.co.za"
                className="group flex items-center gap-4 text-foreground hover:text-accent transition-all duration-300"
              >
                <div className="p-3 bg-secondary rounded-lg group-hover:bg-accent/10 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-500">
                  <Mail className="h-5 w-5 group-hover:text-accent transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:translate-x-1 transition-transform duration-300">marketing@911media.co.za</p>
                </div>
              </a>
              <div className="group flex items-center gap-4">
                <div className="p-3 bg-secondary rounded-lg group-hover:bg-accent/10 transition-all duration-500">
                  <MapPin className="h-5 w-5 group-hover:text-accent transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium">80 Greenvale Road, Germiston</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-card border border-border rounded-lg p-8 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className={`transition-colors duration-300 ${focused === 'name' ? 'text-accent' : ''}`}>
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  className="transition-all duration-300 focus:border-accent focus:ring-accent/20"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className={`transition-colors duration-300 ${focused === 'email' ? 'text-accent' : ''}`}>
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className="transition-all duration-300 focus:border-accent focus:ring-accent/20"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className={`transition-colors duration-300 ${focused === 'phone' ? 'text-accent' : ''}`}>
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  onFocus={() => setFocused('phone')}
                  onBlur={() => setFocused(null)}
                  className="transition-all duration-300 focus:border-accent focus:ring-accent/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className={`transition-colors duration-300 ${focused === 'message' ? 'text-accent' : ''}`}>
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  className="transition-all duration-300 focus:border-accent focus:ring-accent/20 resize-none"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full group relative overflow-hidden bg-accent hover:bg-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
