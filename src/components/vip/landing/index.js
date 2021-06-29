import { useState, useEffect } from 'react';
import styles from './index.module.css';

const GatedContent = () => {
  const [balance, setBalance] = useState();

  const getBalance = async () => {
    try {
      const res = await fetch('/api/auth/balance');
      const data = await res.json();
      setBalance(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  if (balance === undefined || balance.error)
    return (
      <h2 className={styles.title}>
        You must be logged in to view this content.
      </h2>
    );

  const hasDraze = balance.some(item => item.coinKind === 'DRAZE');
  const drazeBalance = balance.find(item => item.coinKind === 'DRAZE');

  if (!hasDraze)
    return <h2 className={styles.title}>You do not own any $DRAZE coin.</h2>;

  if (hasDraze && drazeBalance.coinBalance < 10)
    return (
      <h2 className={styles.title}>
        You must own 10 or more $DRAZE coins to view this content.
      </h2>
    );

  return <h2 className={styles.title}>Welcome</h2>;
};

const Landing = () => {
  return (
    <div data-scroll-section>
      <section className={styles.landing}>
        <div className={styles.container}>
          <GatedContent />
        </div>
      </section>
    </div>
  );
};

export default Landing;
