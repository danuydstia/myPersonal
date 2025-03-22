import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function StarryBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full z-1 bg-gray-950 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
      <Particles
        id="starry-bg"
        className="w-full h-full"
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "star" },
            opacity: { value: 1 },
            size: { value: { min: 1, max: 2 } },
            move: { enable: true, speed: 0.5, outModes: { default: "out" } },
          },
        }}
      />
    </div>
  );
}
