import React from 'react'

const Banner = ({ imageSrc, bannerTitle }) => {
  return (
    <div className='banner'>
      <img src={imageSrc} alt='imageBanner' />
      <h2>{bannerTitle}</h2>
    </div>
  );
};

export default Banner