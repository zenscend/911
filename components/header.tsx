'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-accent/5' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold tracking-tight transition-all duration-300 group-hover:scale-105">
              <span className="gradient-text">911</span>
              <span className={`transition-colors duration-500 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}> Media</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-300 group ${scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-primary-foreground/70 hover:text-primary-foreground'}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:0129442537"
              className={`flex items-center gap-2 text-sm transition-colors duration-300 ${scrolled ? 'text-muted-foreground hover:text-accent' : 'text-primary-foreground/70 hover:text-primary-foreground'}`}
            >
              <Phone className="h-4 w-4" />
              012 944 2537
            </a>
            <Button 
              size="sm" 
              className="relative overflow-hidden group bg-accent hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-all duration-300 hover:scale-110 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <a
                  href="tel:0129442537"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  <Phone className="h-4 w-4" />
                  012 944 2537
                </a>
                <a
                  href="mailto:marketing@911media.co.za"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  <Mail className="h-4 w-4" />
                  marketing@911media.co.za
                </a>
                <Button className="mt-2 bg-accent hover:bg-accent/90">Get Started</Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
