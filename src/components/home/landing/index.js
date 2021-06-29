import Tilt from 'react-parallax-tilt';
import Particles from '../../global/particles';
import Socials from '../../global/socials';
import styles from './index.module.css';

const Landing = () => {
  return (
    <div data-scroll-section>
      <section className={styles.landing}>
        <div className={styles.container}>
          <div className={styles.parent}>
            <div aria-label="Album image">
              <Tilt
                className={styles.parallaxEffect}
                perspective={500}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                tiltReverse={true}
                scale={1.06}
                transitionSpeed={6000}
              >
                <div className={styles.card}>
                  <h2 className={styles.cardTitle}>phantom power</h2>
                  <a
                    className="btn-bg"
                    href="https://open.spotify.com/album/3aZgDA2OdCqUz0TQ7nzF41"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Opens spotify"
                  >
                    listen now
                  </a>
                </div>
              </Tilt>
            </div>
            <div className={styles.content}>
              <Particles />
              <h2 className={styles.title}>draze force</h2>
              <p className={styles.description}>
                Music Artist turned Streamer, Draze Force is producing original
                tracks live on Twitch for viewers to enjoy through the ‘Phantom
                Power’ series.
              </p>
              <a
                className={`btn-border ${styles.spotifyBtn}`}
                href="https://open.spotify.com/artist/1ro5yiwSkJ27qvppIgqb7S"
                target="_blank"
                rel="noopener noreferrer"
              >
                spotify
              </a>
              <Socials className={styles.iconsContainer} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
