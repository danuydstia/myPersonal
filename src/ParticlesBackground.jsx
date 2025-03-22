import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Pastikan sudah install

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  // Inisialisasi engine hanya sekali
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles Loaded", container);
  };
  

  return (
    init && (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        className="absolute top-0 left-0 -z-1 w-full h-full "
        options={{
          background: { color: "" },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: ["#787878", "#3b82f6", "#9333ea"] },
            links: { color: "#787878", distance: 150, enable: true, opacity: 0.5, width: 1 },
            move: { enable: true, speed: 3, outModes: { default: "bounce" } },
            number: { value: 100, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
    )
  );
}
