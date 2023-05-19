import { useNavigate } from 'react-router-dom';

const Card = ({item}) => {
   const navigate = useNavigate();
   const handleCardClick = () => {
     navigate(`/appartment/${item.id}`);
   };
  return (
    <article className="card" onClick={handleCardClick}>
      <img className='card_img' src={item.cover} alt={item.title} />
      <h2 className="card_title">{item.title}</h2>
    </article>
  );
};

export default Card;
