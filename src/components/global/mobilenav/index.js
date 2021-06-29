// import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import VipAuth from '../vip';
import styles from './mobilenav.module.css';

const MobileNav = ({ price, display }) => {
  // const [vipDisplay, setVipDisplay] = useState('none');

  // const handleVipOpen = () => setVipDisplay('flex');
  // const handleVipClose = () => setVipDisplay('none');

  return (
    <div
      style={display ? { display: 'flex' } : { display: 'none' }}
      className={styles.mobilenav}
    >
      <div className={styles.container}>
        <div className={styles.parent}>
          <Link href="/">
            <a className={styles.btn}>home</a>
          </Link>
          <Link href="/draze">
            <a className={styles.btn}>$DRAZE</a>
          </Link>
          <Link href="/store">
            <a className={styles.btn}>store</a>
          </Link>
          <Link href="/vip">
            <a className={styles.btn}>vip</a>
          </Link>
          <div className={styles.drazeCoin} aria-label="Draze coin price">
            <div className={styles.logo}>
              <Image src="/logo2.png" alt="logo" layout="fill" />
            </div>
            <a
              href="https://rally.io/creator/DRAZE/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.price}
              title="$DRAZE Coin Price"
            >
              ${price}
            </a>
          </div>
        </div>
      </div>
      {/* <VipAuth display={vipDisplay} handleClose={handleVipClose} /> */}
    </div>
  );
};

export default MobileNav;
