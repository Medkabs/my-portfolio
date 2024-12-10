import React, { useEffect, useRef } from 'react';

function MatrixBackground({ running }) {
  const intervalRef = useRef(null);

  useEffect(() => {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const characters = 'MOHAMEDKABAMohamedKaba1234567890';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = new Array(Math.floor(columns)).fill(0);

    function drawMatrix() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    if (running) {
      intervalRef.current = setInterval(drawMatrix, 35);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [running]);

  return (
    <canvas
      id="matrixCanvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Ensures it is behind other elements
      }}
    />
  );
}

export default MatrixBackground;
