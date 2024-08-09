'use client';
import React, { useRef, useEffect, useState } from 'react';

// CONSTANTS
const spacing = 6; // Spacing of pixel grid
const k_rest = 60; // Acceleration coef of restoring force
const k_mouse = -5000; // Acceleration coef of mouse effect force
const alpha_mouse = 45; // Radius of mouse effect force
const k_damp = -20; // Acceleration coef of damping term

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });
  const [shouldInit, setShouldInit] = useState(true);

  useEffect(() => {
    // Initialize the canvas
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let pts_x: Float64Array | null = null;
    let pts_y: Float64Array | null = null;
    let rest_x: Float64Array | null = null;
    let rest_y: Float64Array | null = null;
    let accel_x: Float64Array | null = null;
    let accel_y: Float64Array | null = null;
    let vel_x: Float64Array | null = null;
    let vel_y: Float64Array | null = null;

    let last_frame = Date.now();
    let delta_t = 0; // Seconds

    let image: ImageData | null = null;

    function initializeCanvas() {
      const h = window.innerHeight;
      const w = document.body.clientWidth;
      if (canvas) canvas.height = h;
      if (canvas) canvas.width = w;
      image = ctx && ctx.createImageData(w, h);
    }

    function initializePts() {
      const n_x = canvas ? Math.floor((canvas.width - spacing) / spacing) : 0;
      const n_y = canvas ? Math.floor((canvas.height - spacing) / spacing) : 0;
      const count = n_x * n_y;

      pts_x = new Float64Array(count);
      pts_y = new Float64Array(count);

      for (let i = 0; i < count; i++) {
        const ix = i % n_x;
        const iy = Math.floor(i / n_x);

        pts_x[i] = ix * spacing + spacing;
        pts_y[i] = iy * spacing + spacing;
      }

      rest_x = new Float64Array(pts_x);
      rest_y = new Float64Array(pts_y);
      accel_x = new Float64Array(count);
      accel_y = new Float64Array(count);
      vel_x = new Float64Array(count);
      vel_y = new Float64Array(count);
    }

    // Math functions
    function axpy(a: number, v_x: Float64Array, v_y: Float64Array) {
      for (let i = 0; i < v_y.length; i++) {
        v_y[i] = a * v_x[i] + v_y[i];
      }
    }

    function euclidNorm(x1: number, y1: number, x2: number, y2: number) {
      let dx = x2 - x1;
      let dy = y2 - y1;
      return Math.sqrt(dx * dx + dy * dy);
    }

    function sigmoid(x: number) {
      return x > 1 ? 1 : x < -1 ? -1 : 0;
    }

    // Physics functions
    function updateAccel() {
      if (
        !pts_x ||
        !pts_y ||
        !rest_x ||
        !rest_y ||
        !accel_x ||
        !accel_y ||
        !vel_x ||
        !vel_y
      )
        return;

      for (let i = 0; i < pts_x.length; i++) {
        let mouse_accel_x = 0;
        let mouse_accel_y = 0;

        if (mousePos.x !== null && mousePos.y !== null) {
          const mouse_distance = euclidNorm(
            mousePos.x,
            mousePos.y,
            pts_x[i],
            pts_y[i]
          );
          const mouse_accel_abs =
            k_mouse * (1 - sigmoid(mouse_distance / alpha_mouse));
          mouse_accel_x =
            (mouse_accel_abs / mouse_distance) * (mousePos.x - pts_x[i]);
          mouse_accel_y =
            (mouse_accel_abs / mouse_distance) * (mousePos.y - pts_y[i]);
        }

        const rest_accel_x = k_rest * (rest_x[i] - pts_x[i]);
        const rest_accel_y = k_rest * (rest_y[i] - pts_y[i]);

        const damp_accel_x = k_damp * vel_x[i];
        const damp_accel_y = k_damp * vel_y[i];

        accel_x[i] = rest_accel_x + mouse_accel_x + damp_accel_x;
        accel_y[i] = rest_accel_y + mouse_accel_y + damp_accel_y;
      }
    }

    function updateVel() {
      if (!accel_x || !accel_y || !vel_x || !vel_y) return;
      axpy(delta_t, accel_x, vel_x);
      axpy(delta_t, accel_y, vel_y);
    }

    function updatePts() {
      if (!vel_x || !vel_y || !pts_x || !pts_y) return;
      axpy(delta_t, vel_x, pts_x);
      axpy(delta_t, vel_y, pts_y);
    }

    // Animation functions
    function draw() {
      if (!image || !pts_x || !pts_y) return;
      const img_channels = 4;
      const img_stride = image.width * img_channels;
      image.data.fill(0);

      for (let i = 0; i < pts_x.length; i++) {
        const x = Math.round(pts_x[i]);
        const y = Math.round(pts_y[i]);

        if (x >= 0 && x < image.width && y >= 0 && y < image.height) {
          const px_idx = y * img_stride + x * img_channels;
          image.data[px_idx + 0] = 0; // Red
          image.data[px_idx + 1] = 0; // Green
          image.data[px_idx + 2] = 0; // Blue
          image.data[px_idx + 3] = 255; // Alpha
        }
      }

      ctx && ctx.putImageData(image, 0, 0);
    }

    function frameCallback() {
      const now = Date.now();
      delta_t = (now - last_frame) / 1000;
      last_frame = now;

      if (shouldInit) {
        initializeCanvas();
        initializePts();
        setShouldInit(false);
      }

      updateAccel();
      updateVel();
      updatePts();
      draw();
    }

    // Event handlers
    window.addEventListener('resize', () => setShouldInit(true));

    document.addEventListener('mousemove', (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    });

    document.addEventListener('mouseleave', () => {
      setMousePos({ x: null, y: null });
    });

    const intervalId = setInterval(frameCallback, 1000 / 60);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', () => setShouldInit(true));
      document.removeEventListener('mousemove', (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
      document.removeEventListener('mouseleave', () => {
        setMousePos({ x: null, y: null });
      });
    };
  }, [mousePos, shouldInit]);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
