import React from 'react'
import banner from '../../assets/banner.png';
import bannerAbout from '../../assets/BannerAbout.png';
import styles from './banner.module.css';
function Banner(props) {
  return (
    <div className={styles.banner}>
      {props.origin === 'home' ? (
        <>
          <img
            className={styles.banner_img}
            src={banner}
            alt='Bannière paysage'
          />
          <div>
            <h1 className={styles.banner_title}>
              Chez vous, partout et ailleurs
            </h1>
          </div>
        </>
      ) : props.origin === 'about' ? (
        <img
          className={styles.banner_about_img}
          src={bannerAbout}
          alt='Bannière paysage'
        />
      ) : null}
    </div>
  );
}

export default Banner;