
import { FaFacebookF, FaTiktok, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container" style={{ marginTop: '17.5rem' }}>
      <div className="footer-content">
        <h3>Connect with us:</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTiktok />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaYoutube />
          </a>
        </div>
        <p className="footer-slogan">Mr. Neighbor, there when you need me</p>
      </div>
    </footer>
  );
};

export default Footer;