import Tilt from 'react-parallax-tilt';
import styles from '../discography.module.css';

const Albums = ({
  name,
  dataScrollSpeed,
  parallaxEffectClassName,
  contentAlign,
  btnAlign,
}) => {
  return (
    <div className={styles.albums}>
      <div
        className={styles.imgContainer}
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed={dataScrollSpeed}
      >
        <Tilt
          className={`${styles.parallaxEffect} ${parallaxEffectClassName}`}
          perspective={500}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          tiltReverse={true}
          scale={1.06}
          transitionSpeed={6000}
        ></Tilt>
      </div>
      <div className={`${styles.content} ${contentAlign}`}>
        <h1 className={styles.contentTitle}>{name}</h1>
        <a
          href="https://open.spotify.com/album/4iMvvOx4MuKXICaQnhzJw7?si=_-2BxyscRJaz0_75zAEPSA"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-border ${btnAlign}`}
        >
          listen now
        </a>
      </div>
    </div>
  );
};

export default Albums;
