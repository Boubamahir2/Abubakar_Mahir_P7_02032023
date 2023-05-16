import React from 'react'
import banner from '../../assets/banner.png';
import bannerAbout from '../../assets/BannerAbout.png';
import './banner.css';
function Banner(props) {
  return (
    <div className="banner">
      {props.origin === 'home' ? (
        <>
          <img
            className="banner_img"
            src={banner}
            alt='Bannière paysage'
          />
          <div>
            <h1 className="banner_title">
              Chez vous, partout et ailleurs
            </h1>
          </div>
        </>
      ) : props.origin === 'about' ? (
        <img
          className="banner_about_img"
          src={bannerAbout}
          alt='Bannière paysage'
        />
      ) : null}
    </div>
  );
}

export default Banner;