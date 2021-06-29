import Album from './albums';
import styles from './discography.module.css';

const Discography = () => {
  return (
    <div data-scroll-section>
      <section className={styles.discography}>
        <div className={styles.container}>
          <h3
            data-scroll
            data-scroll-speed={-1}
            data-scroll-direction="horizontal"
            className={styles.title}
          >
            Discography
          </h3>
          <div className={styles.parent}>
            <Album
              name="b.t.a.n"
              dataScrollSpeed={-8}
              parallaxEffectClassName={styles.parallaxEffectEp1}
              contentAlign={styles.contentRight}
              btnAlign={styles.btnRight}
            />
            <Album
              name="phantom power"
              dataScrollSpeed={8}
              parallaxEffectClassName={styles.parallaxEffectEp2}
              contentAlign={styles.contentLeft}
              btnAlign={styles.btnLeft}
            />
            <Album
              name="draze ep III"
              dataScrollSpeed={-8}
              parallaxEffectClassName={styles.parallaxEffectEp3}
              contentAlign={styles.contentRight}
              btnAlign={styles.btnRight}
            />
            <Album
              name="august"
              dataScrollSpeed={8}
              parallaxEffectClassName={styles.parallaxEffectSingle1}
              contentAlign={styles.contentLeft}
              btnAlign={styles.btnLeft}
            />
            <Album
              name="chilled"
              dataScrollSpeed={-8}
              parallaxEffectClassName={styles.parallaxEffectSingle2}
              contentAlign={styles.contentRight}
              btnAlign={styles.btnRight}
            />
            <Album
              name="time trial"
              dataScrollSpeed={8}
              parallaxEffectClassName={styles.parallaxEffectSingle3}
              contentAlign={styles.contentLeft}
              btnAlign={styles.btnLeft}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discography;
