import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo-header.png';
import './Header.css';

const Header = (props) => {
  return (
    <header className='_header'>
      <nav className='header_container'>
        <NavLink to='/'>
          <img className='header_logo' src={Logo} alt='Logo Kasa' />
        </NavLink>
        <div className='header_nav'>
          <NavLink
            className={
              props.origin === 'home'
                ? 'header_nav_underline'
                : 'header_nav_empty'
            }
            to='/'
          >
            Accueil
          </NavLink>
          <NavLink
            className={
              props.origin === 'about'
                ? 'header_nav_underline'
                : 'header_nav_empty'
            }
            to='/about'
          >
            A propos
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
