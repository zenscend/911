'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Social Media Management', href: '#services' },
    { label: 'Web Design', href: '#services' },
    { label: 'Brand Launches', href: '#services' },
    { label: 'Events', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Work', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <span className="text-2xl font-bold tracking-tight transition-all duration-300 group-hover:scale-105 inline-block">
                <span className="gradient-text">911</span> Media
              </span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Your dedicated lead generation marketing company. 
              Building brands and driving growth since 2015.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0129442537"
                  className="group flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-all duration-300"
                >
                  <Phone className="h-4 w-4 group-hover:animate-pulse" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">012 944 2537</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:marketing@911media.co.za"
                  className="group flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-all duration-300"
                >
                  <Mail className="h-4 w-4 group-hover:animate-pulse" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">marketing@911media.co.za</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                80 Greenvale Road, Germiston
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/40">
            &copy; {new Date().getFullYear()} 911 Media and Marketing. All rights reserved.
          </p>
          <a
            href="https://zenscend.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-foreground/40 hover:text-accent transition-colors duration-300"
          >
            Powered by Zenscend
          </a>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-primary-foreground/40 hover:text-accent transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
