import { useRef, useEffect } from 'react';
import styles from './particles.module.css';

const Particles = ({ up = '-10px', amount = 4 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = 600;
    canvas.height = 200;

    function randomColor(a) {
      const random = Math.floor(Math.random() * 2);
      switch (random) {
        case 0:
          return `rgba(93, 66, 189, ${a})`;
        case 1:
          return `rgba(244, 63, 112, ${a})`;
        default:
          return;
      }
    }

    function draw() {
      if (canvas.getContext) {
        for (let i = 0; i < amount; i++) {
          const x = Math.floor(Math.random() * 550 + 15);
          const y = Math.floor(Math.random() * 150 + 15);
          const a = Math.random();
          ctx.beginPath();
          ctx.arc(x, y, 12, 0, Math.PI * 2);
          ctx.fillStyle = randomColor(a);
          ctx.fill();
        }
      }
    }

    function clear() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function animate() {
      setTimeout(() => {
        clear();
        draw();
        window.requestAnimationFrame(animate);
      }, 450);
    }

    animate();
  }, []);

  return (
    <div className={styles.container}>
      <canvas
        style={{ transform: `translate(0, ${up})` }}
        className={styles.canvas}
        ref={canvasRef}
      ></canvas>
    </div>
  );
};

export default Particles;
