import React, { useEffect, useRef } from "react";

const ScrollPipe: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const mainPathRef = useRef<SVGPathElement>(null);
  const extraPathsRef = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);

      // Animate main path
      if (mainPathRef.current) {
        const pathLength = mainPathRef.current.getTotalLength();
        const drawLength = pathLength * clampedProgress;

        mainPathRef.current.style.strokeDasharray = `${drawLength} ${pathLength}`;
        mainPathRef.current.style.strokeDashoffset = "0";
      }

      // Animate decorative paths too (like subtle ripple effect)
      extraPathsRef.current.forEach((path, i) => {
        if (path) {
          const length = path.getTotalLength();
          const draw = length * clampedProgress;
          path.style.strokeDasharray = `${draw} ${length}`;
          path.style.strokeDashoffset = "0";
        }
      });
    };

    // Setup for all paths
    if (mainPathRef.current) {
      const len = mainPathRef.current.getTotalLength();
      mainPathRef.current.style.strokeDasharray = `0 ${len}`;
    }

    extraPathsRef.current.forEach((path) => {
      if (path) {
        const len = path.getTotalLength();
        path.style.strokeDasharray = `0 ${len}`;
      }
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-1 pointer-events-none">
      <svg
        ref={svgRef}
        className="w-full h-full "
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#4FC3F7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Scroll-reactive main pipe */}
        <path
          ref={mainPathRef}
          d="M 10 10 Q 30 20 50 15 T 90 25 T 47 45 10 75 50 T 60 70 "
          fill="none"
          stroke="url(#pipeGradient)"
          strokeWidth="0.3"
          filter="url(#glow)"
          className="animate-pulse opacity-25"
        />

        {/* Scroll-reactive extra paths */}
        <path
          ref={(el) => (extraPathsRef.current[0] = el!)}
          d="M 5 30 Q 25 35 45 30 T 85 40"
          fill="none"
          stroke="#00D4FF"
          strokeWidth="0.1"
          opacity="0.4"
        />

        <path
          ref={(el) => (extraPathsRef.current[1] = el!)}
          d="M 20 60 Q 40 55 60 65 T 95 70"
          fill="none"
          stroke="#4FC3F7"
          strokeWidth="0.1"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};

export default ScrollPipe;
