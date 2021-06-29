import Timescale from '../timescale';
import styles from './services.module.css';

const Services = () => {
  return (
    <div data-scroll-section>
      <section className={styles.services}>
        <div className={styles.container}>
          <h3 className={styles.title}>services for sale</h3>
          <div className={styles.parent}>
            <div id={styles.marginBottom} className={styles.childparent}>
              <div className={styles.child}>
                <div className={styles.timescaleContainer}>
                  <Timescale />
                </div>
                <h4 className={styles.serviceTitle}>Demo Review</h4>
                <div className={styles.servicesContainer}>
                  <p className={styles.servicesDescription}>
                    Looking for advice or direction? Send me your demo and I’ll
                    give you my critique on the song writing and mix of the
                    track.
                  </p>
                  <a
                    href="https://www.rally.io/creator/DRAZE/?inputType=USD&amount=100&note=Services for sale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-border"
                  >
                    buy now
                  </a>
                </div>
              </div>
              <div className={`${styles.child} ${styles.marginLeft}`}>
                <div className={styles.timescaleContainer}>
                  <Timescale />
                </div>
                <h4 className={styles.serviceTitle}>Mixing</h4>
                <div className={styles.servicesContainer}>
                  <p className={styles.servicesDescription}>
                    Have your track mixed by me.
                  </p>
                  <a
                    href="https://www.rally.io/creator/DRAZE/?inputType=USD&amount=100&note=Services for sale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-border"
                  >
                    buy now
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.childparent}>
              <div className={styles.child}>
                <div className={styles.timescaleContainer}>
                  <Timescale />
                </div>
                <h4 className={styles.serviceTitle}>Sound Alert Commissions</h4>
                <div className={styles.servicesContainer}>
                  <p className={styles.servicesDescription}>
                    Are you a streamer looking to separate yourself from others?
                    I’ll make custom sound alerts to fit the vibe of your
                    streams and channel.
                  </p>
                  <a
                    href="https://www.rally.io/creator/DRAZE/?inputType=USD&amount=100&note=Services for sale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-border"
                  >
                    buy now
                  </a>
                </div>
              </div>
              <div className={`${styles.child} ${styles.marginLeft}`}>
                <div className={styles.timescaleContainer}>
                  <Timescale />
                </div>
                <h4 className={styles.serviceTitle}>Produce a Track</h4>
                <div className={styles.servicesContainer}>
                  <p className={styles.servicesDescription}>
                    Looking for an intro or outro track?
                  </p>
                  <a
                    href="https://www.rally.io/creator/DRAZE/?inputType=USD&amount=100&note=Services for sale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-border"
                  >
                    buy now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
