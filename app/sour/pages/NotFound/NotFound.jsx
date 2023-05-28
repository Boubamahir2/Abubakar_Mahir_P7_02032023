import Header from '../../components/Header/Header';
import { NavLink } from 'react-router-dom';
import './error.css'

const NotFound = () => {
  return (
    <div>
      <Header origin='error' />
      <div className='error_section'>
        <div className='error_title'>
          <h1 className='error_h1'>404</h1>
          <p className='error_p'>
            Oups! La page que <span>vous demandez n'existe pas</span>.
          </p>
          <NavLink
            className='error_back_home'
            to='/'
            title="Retour page d'accueil"
          >
            Retourner sur la page d'accueil
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
