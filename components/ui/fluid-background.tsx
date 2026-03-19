"use client"

import { useEffect, useRef } from "react"

interface FluidBackgroundProps {
  className?: string
  variant?: "hero" | "section" | "subtle" | "cta" | "challenge" | "features" | "steps"
  children?: React.ReactNode
}

export function FluidBackground({ className = "", variant = "section", children }: FluidBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    // Subtle floating particles
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    const particleCount = variant === "hero" || variant === "cta" ? 26 : 16

    for (let i = 0; i < particleCount; i++) {
      const colorChoice = Math.random()
      let color: string
      
      if (colorChoice > 0.66) {
        color = "rgba(255, 255, 255, 0.18)"
      } else if (colorChoice > 0.33) {
        color = "rgba(143, 201, 254, 0.18)" // #8FC9FE
      } else {
        color = "rgba(59, 180, 231, 0.16)" // #3bb4e7
      }

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1.25,
        opacity: Math.random() * 0.22 + 0.1,
        color
      })
    }

    // Background gradient orbs
    const orbs = [
      {
        x: canvas.width * 0.15,
        y: canvas.height * 0.2,
        radius: 120,
        color: "rgba(143, 201, 254, 0.18)",
        speed: 0.0002
      },
      {
        x: canvas.width * 0.85,
        y: canvas.height * 0.7,
        radius: 150,
        color: "rgba(255, 255, 255, 0.08)",
        speed: 0.0003
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.8,
        radius: 100,
        color: "rgba(59, 180, 231, 0.12)",
        speed: 0.00025
      }
    ]

    let animationId: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background orbs
      orbs.forEach((orb, index) => {
        const offsetX = Math.sin(time * orb.speed + index) * 30
        const offsetY = Math.cos(time * orb.speed + index) * 20
        
        ctx.beginPath()
        ctx.arc(orb.x + offsetX, orb.y + offsetY, orb.radius, 0, Math.PI * 2)
        ctx.fillStyle = orb.color
        ctx.filter = 'blur(60px)'
        ctx.fill()
        ctx.filter = 'none'
      })

      // Draw and update particles
      particles.forEach((particle) => {
        // Update position with fluid motion
        particle.x += particle.vx + Math.sin(time * 0.001 + particle.y * 0.01) * 0.22
        particle.y += particle.vy + Math.cos(time * 0.001 + particle.x * 0.01) * 0.16

        // Gentle floating motion
        particle.vx += (Math.random() - 0.5) * 0.01
        particle.vy += (Math.random() - 0.5) * 0.01

        // Wrap around edges
        if (particle.x < -20) particle.x = canvas.width + 20
        if (particle.x > canvas.width + 20) particle.x = -20
        if (particle.y < -20) particle.y = canvas.height + 20
        if (particle.y > canvas.height + 20) particle.y = -20

        // Draw particle as circle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      time += 16
      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      resizeCanvas()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const getBackgroundClass = () => {
    switch (variant) {
      case "hero":
        return "bg-gradient-to-br from-[#0f4f85] via-[#1973bb] to-[#2b93d5]"
      case "cta":
        return "bg-gradient-to-br from-[#0f4f85] via-[#1973bb] to-[#2b93d5]"
      case "challenge":
        return "bg-gradient-to-br from-[#0f4f85] via-[#1973bb] to-[#2b93d5]"
      case "features":
        return "bg-gradient-to-br from-[#0f4f85] via-[#1973bb] to-[#2b93d5]"
      case "steps":
        return "bg-gradient-to-br from-[#0f4f85] via-[#1973bb] to-[#2b93d5]"
      case "subtle":
        return "bg-gradient-to-br from-[#0f4f85] via-[#1973bb] to-[#2b93d5]"
      default:
        return "bg-gradient-to-br from-[#0f4f85] via-[#1973bb] to-[#2b93d5]"
    }
  }

  const ringOpacityClass = variant === "hero" || variant === "cta" ? "opacity-30" : "opacity-26"
  const ringStroke = "rgba(255,255,255,0.26)"
  const ringStrokeFaint = "rgba(255,255,255,0.16)"
  const ringStrokeAccent = "rgba(143,201,254,0.26)"

  const rings: Array<{
    width: string
    height: string
    top?: string
    right?: string
    bottom?: string
    left?: string
    border: string
    borderStyle?: "solid" | "dashed"
  }> = [
    { width: "520px", height: "520px", top: "-160px", right: "-180px", border: `1px solid ${ringStroke}` },
    { width: "760px", height: "760px", top: "-260px", right: "-320px", border: `1px solid ${ringStrokeFaint}` },
    { width: "980px", height: "980px", top: "-420px", right: "-520px", border: `1px dashed ${ringStrokeFaint}`, borderStyle: "dashed" },
    { width: "520px", height: "520px", bottom: "-220px", left: "-240px", border: `1px solid ${ringStroke}` },
    { width: "820px", height: "820px", bottom: "-380px", left: "-420px", border: `1px solid ${ringStrokeFaint}` },
    { width: "1080px", height: "1080px", bottom: "-520px", left: "-620px", border: `1px dashed ${ringStrokeFaint}`, borderStyle: "dashed" },
    {
      width: "420px",
      height: "420px",
      top: "28%",
      left: "52%",
      border: `1px solid ${ringStrokeAccent}`,
    },
    {
      width: "640px",
      height: "640px",
      top: "36%",
      left: "58%",
      border: `1px solid ${ringStrokeFaint}`,
    },
    {
      width: "360px",
      height: "360px",
      top: "70%",
      left: "16%",
      border: `1px dashed ${ringStrokeFaint}`,
      borderStyle: "dashed",
    },
  ]

  return (
    <div className={`relative overflow-hidden ${getBackgroundClass()} ${className}`}>
      {/* Subtle background layers */}
      <div className="absolute inset-0 opacity-35">
        <div 
          className="absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            top: '10%',
            left: '5%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 42%)',
            filter: 'blur(40px)',
          }}
        />
        <div 
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            top: '40%',
            right: '10%',
            background: 'radial-gradient(circle, rgba(143,201,254,0.10) 0%, transparent 38%)',
            filter: 'blur(30px)',
          }}
        />
        <div 
          className="absolute rounded-full"
          style={{
            width: '400px',
            height: '400px',
            bottom: '20%',
            left: '30%',
            background: 'radial-gradient(circle, rgba(59,180,231,0.08) 0%, transparent 34%)',
            filter: 'blur(25px)',
          }}
        />
      </div>

      {/* SyncHub-like circular ring drawings */}
      <div className={`absolute inset-0 pointer-events-none ${ringOpacityClass}`}>
        {rings.map((ring, idx) => (
          <div
            key={idx}
            className="absolute rounded-full"
            style={{
              width: ring.width,
              height: ring.height,
              top: ring.top,
              right: ring.right,
              bottom: ring.bottom,
              left: ring.left,
              border: ring.border,
              borderStyle: ring.borderStyle ?? "solid",
              transform: ring.top && ring.left ? "translate(-50%, -50%)" : undefined,
            }}
          />
        ))}
      </div>
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: variant === "hero" || variant === "cta" ? 0.4 : 0.34 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
