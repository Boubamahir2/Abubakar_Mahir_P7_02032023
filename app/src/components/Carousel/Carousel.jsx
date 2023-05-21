import './Carousel.css'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import leftArrow from '../../assets/svg/left-arrow.svg';
import rightArrow from '../../assets/svg/right-arrow.svg';
import data from '../../data/restaurantsData.json';

const Carousel = () => {
  const [indexPic, setIndexPic] = useState(0);
  
  const { id } = useParams();
  //récupération de l'id du logement dans les paramètres d'URL
  const lodging = data.find((item) => item.id === id);
  if (!lodging) {
    return null;
  }

   const { pictures } = lodging;
      const nextPicture = () => {
        setIndexPic((indexPic + 1) % pictures.length);
      };

      const prevPicture = () => {
        setIndexPic(
          (indexPic + pictures.length - 1) % pictures.length
        );
      };


  return (
    <section className='carousel'>
      {pictures.length > 1 && (
        <img
          className='carousel_arrow_left'
          src={leftArrow}
          onClick={prevPicture}
          alt='previous'
        />
      )}
      <span className='carousel_index'>
        {indexPic + 1} / {pictures.length}
      </span>
      {pictures.length > 1 && (
        <img
          className='carousel_arrow_right'
          src={rightArrow}
          onClick={nextPicture}
          alt='next'
        />
      )}
      {pictures.map((picture, index) => (
        <div key={index}>
          {index === indexPic && (
            <img
              className='carousel_img'
              src={picture}
              alt={picture.description}
            />
          )}
        </div>
      ))}
    </section>
  );
}

export default Carousel