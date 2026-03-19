interface WaveTransitionProps {
  className?: string
  fillColor?: string
  height?: string
}

export function WaveTransition({ className = "", fillColor = "#ffffff", height = "120" }: WaveTransitionProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ height }}
        preserveAspectRatio="none"
      >
        <path 
          d="M0,0 C60,20 180,40 300,50 C420,60 540,70 660,65 C780,60 900,50 1020,40 1140,20 L1440,0 L1440,120 L1380,120 C1320,120 1200,120 1080,120 C960,120 840,120 720,120 C600,120 480,120 360,120 C240,120 120,120 60,120 L0,120 Z" 
          fill={fillColor} 
        />
      </svg>
    </div>
  )
}
