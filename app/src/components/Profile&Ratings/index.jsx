import orangeStar from '../../assets/svg/orangestar.svg';
import greystar from "../../assets/svg/greystar.svg"

const Profile = () => {
  return (
    <div>Profile</div>
  )
}
const Ratings = (props) => {
   const starsNumber = [1, 2, 3, 4, 5];
   const rating = props.rating;
  return (
    <div className='host_rating'>
      {starsNumber.map((star, index) =>
        rating >= star ? (
          <img key={index} src={orangeStar} alt='' />
        ) : (
          <img key={index} src={greystar} alt='' />
        )
      )}
    </div>
  );
}
const HostTag = (props) => {
  return (
    <div className='property_tags'>
      {props.tags.map((tag) => {
        return (
          <p key={`${tag}`} className='tags'>
            {tag}
          </p>
        );
      })}
    </div>
  );
}

export{
  Profile,
  Ratings,
  HostTag
}