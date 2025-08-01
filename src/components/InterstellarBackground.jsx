import React, { useEffect, useState } from 'react';
import styles from '../styles/InterstellarBackground.module.css';

const InterstellarBackground = () => {
  const [stars, setStars] = useState([]);
  const [comets, setComets] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      // 👇 Aumenté el número de estrellas aquí
      const starCount = 500;

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 3 + 0.5,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.8 + 0.2,
          duration: Math.random() * 50 + 30,
          delay: Math.random() * 20
        });
      }
      setStars(newStars);
    };

    const generateComets = () => {
      const newComets = [];
      const cometCount = 3;

      for (let i = 0; i < cometCount; i++) {
        newComets.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          angle: Math.random() * 360,
          delay: Math.random() * 30,
          duration: Math.random() * 30 + 20
        });
      }
      setComets(newComets);
    };

    generateStars();
    generateComets();

    const cometInterval = setInterval(generateComets, 30000);
    return () => clearInterval(cometInterval);
  }, []);

  return (
    <div className={styles.interstellarContainer}>
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className={styles.star}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animation: `${styles.fall} ${star.duration}s linear ${star.delay}s infinite`
          }}
        />
      ))}

      {stars.filter((_, i) => i % 10 === 0).map((star) => (
        <div
          key={`twinkle-${star.id}`}
          className={`${styles.star} ${styles.twinkling}`}
          style={{
            width: `${star.size * 1.5}px`,
            height: `${star.size * 1.5}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animation: `${styles.fall} ${star.duration * 0.8}s linear ${star.delay}s infinite, 
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