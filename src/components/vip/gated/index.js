import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import styles from './gated.module.css';

const GatedContent = ({ id }) => {
  const router = useRouter();
  const [balance, setBalance] = useState();

  // Gets the balance of the user
  const getBalance = async () => {
    try {
      const res = await fetch(`/api/auth/${id}`);
      const data = await res.json();
      setBalance(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Gets the balance on mount
  useEffect(() => {
    getBalance();
  }, []);

  // Loading state
  if (!balance) return <h2 className={styles.title}>Loading...</h2>;

  // State before logging in
  if (balance === undefined || balance.error) {
    return (
      <>
        <FontAwesomeIcon icon={faLock} className={styles.lock} />
        <h2 className={styles.title}>
          You must be signed-in <br /> to view this content.
        </h2>
        <button onClick={() => router.push('/api/auth')} className="btn-border">
          log in
        </button>
      </>
    );
  }

  // Error state
  if (balance.errors) {
    return (
      <>
        <h2 className={styles.title}>Something went wrong, try again.</h2>
        <button onClick={() => router.push('/api/auth')} className="btn-border">
          log in
        </button>
      </>
    );
  }

  // let hasDraze;
  // let drazeBalance;

  // Returns true if user owns DRAZE
  const hasDraze = balance.some(item => item.coinKind === 'DRAZE');
  // Finds and returns the DRAZE object
  const drazeBalance = balance.find(item => item.coinKind === 'DRAZE');

  // Condition when not owning any DRAZE coins
  if (hasDraze !== undefined && !hasDraze)
    return <h2 className={styles.title}>You do not own any $DRAZE coin.</h2>;

  // Condition when not owning enough DRAZE coins
  if (hasDraze !== undefined && hasDraze && drazeBalance.coinBalance < 10)
    return (
      <h2 className={styles.title}>
        You must own 10 or more $DRAZE coins to view this content.
      </h2>
    );

  // See gated content if user has 10 or more $DRAZE coins
  if (hasDraze !== undefined && hasDraze && drazeBalance.coinBalance >= 10)
    return <h2 className={styles.title}>Welcome, VIP coming soon !</h2>;

  // Else return
  return (
    <>
      <h2 className={styles.title}>Something went wrong, try again.</h2>
      <button onClick={() => router.push('/api/auth')} className="btn-border">
        log in
      </button>
    </>
  );
};

const Gated = ({ id }) => {
  return (
    <div data-scroll-section>
      <section className={styles.landing}>
        <div className={styles.container}>
          <div className={styles.parent}>
            <GatedContent id={id} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gated;
