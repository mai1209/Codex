import React, { useEffect, useState } from 'react';
import styles from '../styles/InterstellarBackground.module.css';

const InterstellarBackground = () => {
  const [stars, setStars] = useState([]);
  const [comets, setComets] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      const starCount = 300; // Aumenté la cantidad para mejor efecto

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 2 + 0.5,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.8 + 0.2,
          duration: Math.random() * 30 + 20, // Tiempos más variados
          delay: Math.random() * 30,
          startingDepth: Math.random() * 100 + 100 // Profundidad inicial aleatoria
        });
      }
      setStars(newStars);
    };

    const generateComets = () => {
      const newComets = [];
      const cometCount = 2; // Menos cometas para no distraer

      for (let i = 0; i < cometCount; i++) {
        const angle = Math.random() * 360;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        newComets.push({
          id: i,
          startX,
          startY,
          angle,
          delay: Math.random() * 30,
          duration: Math.random() * 15 + 10,
          startingDepth: Math.random() * 150 + 50
        });
      }
      setComets(newComets);
    };

    generateStars();
    generateComets();

    const cometInterval = setInterval(generateComets, 20000);
    return () => clearInterval(cometInterval);
  }, []);

  return (
    <div className={styles.interstellarContainer}>
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className={styles.star}
          style={{
            '--size': `${star.size}px`,
            '--x': `${star.x}%`,
            '--y': `${star.y}%`,
            '--opacity': star.opacity,
            '--starting-depth': `${star.startingDepth}px`,
            animation: `${styles.starDepth} ${star.duration}s linear ${star.delay}s infinite`
          }}
        />
      ))}

      {stars.filter((_, i) => i % 10 === 0).map((star) => (
        <div
          key={`twinkle-${star.id}`}
          className={`${styles.star} ${styles.twinkling}`}
          style={{
            '--size': `${star.size * 1.5}px`,
            '--x': `${star.x}%`,
            '--y': `${star.y}%`,
            '--opacity': star.opacity,
            '--starting-depth': `${star.startingDepth}px`,
            animation: `${styles.starDepth} ${star.duration * 0.8}s linear ${star.delay}s infinite, 
                       ${styles.twinkle} ${Math.random() * 5 + 3}s ease-in-out infinite`
          }}
        />
      ))}


      <div className={`${styles.nebula} ${styles.nebula1}`}></div>
      <div className={`${styles.nebula} ${styles.nebula2}`}></div>
      
    </div>
  );
};

export default InterstellarBackground;