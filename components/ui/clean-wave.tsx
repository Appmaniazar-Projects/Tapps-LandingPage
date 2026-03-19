interface CleanWaveProps {
  className?: string
  fillColor?: string
  height?: string
}

export function CleanWave({ className = "", fillColor = "#ffffff", height = "80" }: CleanWaveProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ height }}
        preserveAspectRatio="none"
      >
        <path 
          d="M0,40 C120,20 240,60 360,50 C480,40 600,35 720,45 C840,55 960,30 1080,35 C1200,40 1320,35 1440,40 L1440,80 L0,80 Z" 
          fill={fillColor} 
        />
      </svg>
    </div>
  )
}
