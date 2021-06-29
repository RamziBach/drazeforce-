import Image from 'next/image';
import ReactPlayer from 'react-player/lazy';
import styles from './about.module.css';

const About = () => {
  return (
    <div data-scroll-section>
      <section className={styles.about}>
        <div className={styles.container}>
          <h3
            data-scroll
            data-scroll-speed={-1}
            data-scroll-direction="horizontal"
            className={styles.sectionTitle}
          >
            Biography
          </h3>
          <div className={styles.parent}>
            <div className={styles.content}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.profile}
                  src="/profile.jpg"
                  alt="logo"
                  layout="fill"
                />
              </div>
              <h2 className={styles.title}>Nick Morris</h2>
              <p className={styles.description}>
                Growing up in the 90s, Nick Morris was always inspired by the
                sounds and visuals of video games, and rock music. Producing
                music under the moniker Draze Force, Nick has spent the last few
                years collecting analog synths.
              </p>
              <p className={styles.description}>
                Returning to his original inspirations, Draze Force is blending
                8-bit sounds with analog synths to create his own sound in the
                Electronic Music world.
              </p>
              <a
                href="https://www.twitch.tv/drazeforce"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-border"
              >
                Twitch
              </a>
            </div>
            <div className={styles.border}>
              <ReactPlayer
                className={styles.reactPlayer}
                url="https://www.twitch.tv/drazeforce"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
