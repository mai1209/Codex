import React, { useEffect, useState } from 'react';
import styles from '../styles/InterstellarBackground.module.css';

const InterstellarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
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

    generateStars();
    // No es necesario regenerar las estrellas en un intervalo
  }, []);

  return (
    <div className={styles.interstellarContainer}>
      {/* Estrellas de fondo */}
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

      {/* Estrellas parpadeantes */}
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

      {/* Nebulosas */}
      <div className={`${styles.nebula} ${styles.nebula1}`}></div>
      <div className={`${styles.nebula} ${styles.nebula2}`}></div>
      {/* 👇 NUEVAS NEBULOSAS AÑADIDAS 👇 */}
      <div className={`${styles.nebula} ${styles.nebula3}`}></div>
      <div className={`${styles.nebula} ${styles.nebula4}`}></div>
    </div>
  );
};

export default InterstellarBackground;