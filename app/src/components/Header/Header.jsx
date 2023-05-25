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
        <ul className='header_nav'>
          <li>
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
          </li>
          <li>
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
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
