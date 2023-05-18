import React,{useState} from 'react'
import arrowDown from '../../assets/arrowDown.png';
import arrowUp from '../../assets/arrowUp.png';

const Dropdown = ({ title, text_content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='dropdown'>
      <div className='dropdown_title_arrow'>
        <h3 className='dropdown_title'>{title}</h3>
        <img
          className='dropdown_arrow'
          src={isOpen ? arrowUp : arrowDown}
          alt='flèche'
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div>
          <p className='dropdown_content'>{text_content}</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown