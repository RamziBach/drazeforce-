import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import VipAuth from '../vip';
import MobileNav from '../mobilenav';
import styles from './header.module.css';
import Tooltip from '../tooltip';

const Header = ({ price, isOnVipPage = false }) => {
  const [tooltipDisplay, setTooltipDisplay] = useState('none');
  const [vipDisplay, setVipDisplay] = useState('none');
  const [isMobileDisplayOpen, setIsMobileDisplayOpen] = useState(false);

  const onMouseEnterTooltip = () => setTooltipDisplay('block');
  const handleCloseTooltip = () => setTooltipDisplay('none');
  const handleVipOpen = () => setVipDisplay('flex');
  const handleVipClose = () => setVipDisplay('none');
  const handleMobileClick = () =>
    setIsMobileDisplayOpen(prevState => !prevState);

  useEffect(() => {
    console.log('Website developed by Ramzi Bach - www.ramzibach.com');
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.parent}>
            <div
              className={`${styles.flex} ${styles.titleContainer}`}
              aria-label="Title"
            >
              <h3 className={styles.title}>DRAZE FORCE</h3>
            </div>
            <div className={`${styles.flex} ${styles.navContainer}`}>
              <nav className={styles.menu}>
                <ul className={styles.navigation}>
                  <li>
                    <Link href="/">
                      <a className={styles.navBtns}>home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/draze">
                      <a className={styles.navBtns}>$draze</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/store">
                      <a className={styles.navBtns}>store</a>
                    </Link>
                  </li>
                  <li>
                    {isOnVipPage ? (
                      <button className={styles.navBtns}>vip</button>
                    ) : (
                      <button
                        onClick={handleVipOpen}
                        className={styles.navBtns}
                      >
                        vip
                      </button>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className={`${styles.flex} ${styles.drazeCoin}`}
              aria-label="Draze coin price"
            >
              <Image src="/logo2.png" alt="logo" width={60} height={60} />
              <a
                href="https://rally.io/creator/DRAZE/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.price}
                title="$DRAZE Coin Price"
              >
                ${price}
              </a>
              <button onMouseEnter={onMouseEnterTooltip} title="Tooltip">
                <i className={`fas fa-info-circle ${styles.i}`}></i>
              </button>
              <Tooltip
                display={tooltipDisplay}
                handleClose={handleCloseTooltip}
              />
            </div>
            <div className={`${styles.hamburgerContainer} ${styles.flex}`}>
              <button onClick={handleMobileClick}>
                <i className={`fas fa-bars ${styles.hamburger}`}></i>
              </button>
            </div>
          </div>
        </div>
        <VipAuth display={vipDisplay} handleClose={handleVipClose} />
        <MobileNav price={price} display={isMobileDisplayOpen} />
      </header>
    </>
  );
};

export default Header;
