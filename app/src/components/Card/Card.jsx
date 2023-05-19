import { useNavigate } from 'react-router-dom';

const Card = ({item}) => {
   const navigate = useNavigate();
   const handleCardClick = () => {
     navigate(`/properties/${item.id}`);
   };
  return <div>Card</div>;
};

export default Card;
