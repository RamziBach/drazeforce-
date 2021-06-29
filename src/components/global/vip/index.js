import { useRouter } from 'next/router';
import styles from './vipauth.module.css';

const VipAuth = ({ display = 'none', handleClose }) => {
  const router = useRouter();

  return (
    <div style={{ display }} className={styles.vipauth}>
      <div className={styles.container}>
        <div className={styles.parent}>
          <div className={styles.modal}>
            <div className={styles.header}>
              <h4 className={styles.title}>login</h4>
              <button className={styles.close} onClick={handleClose}>
                <i className={`fas fa-times ${styles.ii}`}></i>
              </button>
            </div>
            <p className={styles.description}>
              You must be logged in with your RALLY account to access the
              Draze&apos;s VIP page.
            </p>
            <div className={styles.btnContainer}>
              <button
                onClick={() => router.push('/api/auth')}
                className={styles.btn}
              >
                log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipAuth;
