import Link from 'next/link';
import styles from './tooltip.module.css';

const Tooltip = ({ display, handleClose }) => {
  return (
    <div style={{ display }} className={styles.tooltipContainer}>
      <div className={styles.arrowUp}></div>
      <div className={styles.tooltipHeader}>
        <div className={styles.tooltipHeaderChild1}>
          <i className={`fas fa-info-circle ${styles.ii}`}></i>
          <h5 className={styles.tooltipTitle}>what is this number?</h5>
        </div>
        <button className={styles.close} onClick={handleClose}>
          <i className={`fas fa-times ${styles.ii}`}></i>
        </button>
      </div>
      <p className={styles.tooltipDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div>
        <button id={styles.btn1} className={styles.tooltipBtn}>
          <a
            href="https://rally.io/creator/DRAZE/"
            target="_blank"
            rel="noopener noreferrer"
          >
            buy now
          </a>
        </button>
        <Link href="/draze">
          <a className={styles.tooltipBtn}>Learn more</a>
        </Link>
      </div>
    </div>
  );
};

export default Tooltip;
