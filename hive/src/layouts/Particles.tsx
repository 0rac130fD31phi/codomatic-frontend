import { useTheme } from "@/contexts/ThemeContext";
import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import ParticlesComponent from "react-tsparticles";

interface ParticlesProps {
    className?: string;
  }
  
  export const Particles: React.FC<ParticlesProps> = ({ className }) => {
    const { theme } = useTheme();
  
    const particlesInit = useCallback(async (engine: Engine) => {
      await loadSlim(engine);
    }, []);
  
    return (
      <div className={className}>
        <ParticlesComponent
          className="absolute inset-0"
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: false, // Important to prevent fullscreen mode
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: theme.accent.DEFAULT,
              },
              links: {
                color: theme.accent.DEFAULT,
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 60, // Reduced for better performance
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    );
  };