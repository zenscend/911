'use client'

import { useRef, useState, useCallback, type ReactNode, type MouseEvent } from 'react'
import { cn } from '@/lib/utils'

interface LiquidHoverProps {
  children: ReactNode
  className?: string
  glowColor?: string
  intensity?: 'subtle' | 'medium' | 'strong'
}

export function LiquidHover({ 
  children, 
  className,
  glowColor = 'var(--accent)',
  intensity = 'medium'
}: LiquidHoverProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const intensityValues = {
    subtle: { size: 150, opacity: 0.15 },
    medium: { size: 200, opacity: 0.25 },
    strong: { size: 250, opacity: 0.35 },
  }

  const { size, opacity } = intensityValues[intensity]

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Liquid glow effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(${size}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor} 0%, transparent 70%)`,
        }}
      />
      
      {/* Border glow that follows cursor */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500"
        style={{
          opacity: isHovering ? opacity : 0,
          background: `radial-gradient(${size * 0.8}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor} 0%, transparent 60%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />
      
      {children}
    </div>
  )
}

interface LiquidCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
  borderColor?: string
  hoverBorderColor?: string
}

export function LiquidCard({
  children,
  className,
  glowColor = 'oklch(0.65 0.28 330 / 0.2)',
  borderColor = 'var(--border)',
  hoverBorderColor = 'oklch(0.65 0.28 330 / 0.5)',
}: LiquidCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative overflow-hidden rounded-lg transition-all duration-500',
        isHovering && 'shadow-xl shadow-accent/20 -translate-y-1',
        className
      )}
      style={{
        borderColor: isHovering ? hoverBorderColor : borderColor,
        borderWidth: '1px',
        borderStyle: 'solid',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Liquid fill effect from cursor position */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-700 ease-out"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor} 0%, transparent 50%)`,
          transform: isHovering ? 'scale(1)' : 'scale(0.8)',
        }}
      />
      
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 0.6 : 0,
          background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.65 0.28 330 / 0.15) 0%, transparent 60%)`,
        }}
      />
      
      {children}
    </div>
  )
}
