'use client';

import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { useSpring } from 'react-spring';

export default function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: { mass: 1, tension: 280, friction: 60, precision: 0.001 },
  }));

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 2, // Lower brightness for a more subtle look
      baseColor: [1, 1, 1],      // White base
      markerColor: [0.8, 0.8, 0.8], // Light gray marker
      glowColor: [1, 1, 1],      // White glow
      markers: [
        // Only India is marked. Coordinates for New Delhi.
        { location: [28.6139, 77.2090], size: 0.1 },
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + r.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = '1'));
    return () => globe.destroy();
  }, [api, r]);

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', maxWidth: '800px', aspectRatio: '1', opacity: 0, transition: 'opacity 1s ease', cursor: 'grab' }}
        onPointerDown={(e) => { pointerInteracting.current = e.clientX - pointerInteractionMovement.current; if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing'; }}
        onPointerUp={() => { pointerInteracting.current = null; if (canvasRef.current) canvasRef.current.style.cursor = 'grab'; }}
        onPointerOut={() => { pointerInteracting.current = null; if (canvasRef.current) canvasRef.current.style.cursor = 'grab'; }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 200 });
          }
        }}
      />
    </div>
  );
}