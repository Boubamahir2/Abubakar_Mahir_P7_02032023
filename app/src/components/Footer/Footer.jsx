import './footer.css'
import footerLogo from '../../assets/logo-footer.png'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <img className='footer_logo' src={footerLogo} alt='Logo Kasa' />
        <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer