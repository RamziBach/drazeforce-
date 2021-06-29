import { useState } from 'react';
import Particles from '../../global/particles';
import Scene from '../scene';
import styles from './landing.module.css';

const Landing = () => {
  const [tipAmount, setTipAmount] = useState(10);

  const handleAddTipAmount = () => setTipAmount(prevState => prevState + 10);
  const handleMinusTipAmount = () =>
    setTipAmount(prevState => {
      if (prevState <= 10) return 10;
      return prevState - 10;
    });

  return (
    <div data-scroll-section>
      <section className={styles.landing}>
        <div className={styles.container}>
          <div className={styles.parent}>
            <div className={styles.childContainer1}>
              <h2 className={styles.title}>$DRAZE coin</h2>
              <h5 className={styles.subtitle}>What is it?</h5>
              <p className={styles.description}>
                Draze coin is the official creator coin of Draze Force. With
                Draze Coin, you can buy music, exclusive merch and gain VIP
                access to the Demo Vault.
              </p>
              <p className={styles.description}>
                You can also use $DRAZE Coin to work with Draze Force for your
                projects and needs.
              </p>
              <div className={styles.btnContainer}>
                <a
                  href="https://rally.io/creator/DRAZE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-border ${styles.buyNowBtn}`}
                >
                  buy now
                </a>
                <a
                  href={`https://www.rally.io/creator/DRAZE/?inputType=COINS&amount=${tipAmount}&note=Add a note.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-border"
                  style={{ marginRight: '0.5em' }}
                >
                  tip {tipAmount} DRAZE COINS
                </a>
                <button onClick={handleAddTipAmount} className={styles.plusBtn}>
                  +
                </button>
                <button
                  onClick={handleMinusTipAmount}
                  className={styles.minusBtn}
                >
                  -
                </button>
              </div>
            </div>
            <div className={styles.childContainer2}>
              <Particles up="-190px" amount={10} />
              <img
                src="/constellations.svg"
                alt="constellations"
                className={styles.constellations}
              />
              <img src="/box.svg" alt="box" className={styles.box} />
              <Scene />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
