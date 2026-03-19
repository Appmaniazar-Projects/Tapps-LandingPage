interface WaterParticlesProps {
  className?: string
  density?: "light" | "medium" | "heavy"
}

export function WaterParticles({ className = "", density = "light" }: WaterParticlesProps) {
  const particleCount = density === "light" ? 8 : density === "medium" ? 15 : 25

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: particleCount }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        >
          <div 
            className="rounded-full opacity-10"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              backgroundColor: Math.random() > 0.5 ? '#3bb4e7' : '#8FC9FE',
              boxShadow: `0 0 ${4 + Math.random() * 8}px rgba(59, 180, 231, 0.1)`,
            }}
          />
        </div>
      ))}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  )
}
