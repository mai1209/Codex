import React, { useEffect, useState } from 'react';
import styles from '../styles/InterstellarBackground.module.css';

const InterstellarBackground = () => {
  const [stars, setStars] = useState([]);
  const [comets, setComets] = useState([]);

  useEffect(() => {
    const generateSpaceElements = () => {
      // Generar estrellas
      const newStars = [];
      const starCount = 800; // Más estrellas

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 3 + 0.5,
          x: Math.random() * 100,
          y: Math.random() * 100,
          z: Math.random() * 100, // Profundidad en eje Z
          opacity: Math.random() * 0.8 + 0.2,
          duration: Math.random() * 30 + 20,
          delay: Math.random() * 10
        });
      }
      setStars(newStars);

      // Generar cometas
      const newComets = [];
      const cometCount = 5;
      
      for (let i = 0; i < cometCount; i++) {
        newComets.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          angle: Math.random() * 360,
          length: Math.random() * 100 + 50,
          duration: Math.random() * 30 + 30,
          delay: Math.random() * 20
        });
      }
      setComets(newComets);
    };

    generateSpaceElements();
  }, []);

  return (
    <div className={styles.interstellarContainer}>
      {/* Estrellas 3D (movimiento en eje Z) */}
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
            transform: `translateZ(${star.z}px)`,
            animation: `${styles.zoom} ${star.duration}s linear ${star.delay}s infinite`
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
            transform: `translateZ(${star.z}px)`,
            animation: `${styles.twinkle} ${Math.random() * 5 + 3}s ease-in-out infinite`
          }}
        />
      ))}

      {/* Cometas */}
      {comets.map((comet) => (
        <div
          key={`comet-${comet.id}`}
          className={styles.comet}
          style={{
            left: `${comet.x}%`,
            top: `${comet.y}%`,
            width: `${comet.length}px`,
            transform: `rotate(${comet.angle}deg)`,
            animation: `${styles.cometTrail} ${comet.duration}s linear ${comet.delay}s infinite`
          }}
        />
      ))}

      {/* Nebulosas */}
      <div className={`${styles.nebula} ${styles.nebula1}`}></div>
      <div className={`${styles.nebula} ${styles.nebula2}`}></div>
      <div className={`${styles.nebula} ${styles.nebula3}`}></div>
      <div className={`${styles.nebula} ${styles.nebula4}`}></div>
      
      {/* Cúmulo estelar adicional */}
      <div className={styles.starCluster}></div>
    </div>
  );
};

export default InterstellarBackground;