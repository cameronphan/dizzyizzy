'use client';
import { useEffect, useRef } from 'react';
import s from './AnimatedGrain.module.css';

interface Props {
  opacity?: number; // 0–1, default 0.018 — very subtle animated layer
  fps?: number;     // frames per second the grain refreshes, default 12 (film-like)
}

/**
 * AnimatedGrain
 * Renders a full-screen canvas fixed behind all content.
 * Draws new random noise every frame at a controlled FPS,
 * creating the "living film grain / old TV static" effect.
 * Grain is drawn at 2x pixel density for a finer, high-resolution texture.
 * Keep opacity low (0.01–0.03) so it reads as texture, not distraction.
 */
export default function AnimatedGrain({ opacity = 0.018, fps = 12 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let lastTime = 0;
    const interval = 1000 / fps;

    // Resize canvas to fill viewport at 2x density for finer grain
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width  = window.innerWidth  + 'px';
      canvas.style.height = window.innerHeight + 'px';
    };
    resize();
    window.addEventListener('resize', resize);

    // Draw a fresh random noise frame
    const drawGrain = (time: number) => {
      animId = requestAnimationFrame(drawGrain);
      if (time - lastTime < interval) return;
      lastTime = time;

      const { width, height } = canvas;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        // Random grey value for each pixel
        const v = (Math.random() * 255) | 0;
        data[i]     = v; // R
        data[i + 1] = v; // G
        data[i + 2] = v; // B
        data[i + 3] = 255;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    animId = requestAnimationFrame(drawGrain);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [fps]);

  return (
    <canvas
      ref={canvasRef}
      className={s.grain}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
