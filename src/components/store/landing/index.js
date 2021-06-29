import styles from './index.module.css';

const Landing = () => {
  return (
    <div data-scroll-section>
      <section className={styles.landing}>
        <div className={styles.container}>
          <h2 className={styles.title}>Coming Soon !</h2>
        </div>
      </section>
    </div>
  );
};

export default Landing;
