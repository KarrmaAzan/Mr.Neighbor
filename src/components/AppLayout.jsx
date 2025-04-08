
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const AppLayout = ({ children }) => {
  const location = useLocation();

  // Determine if the current route is the landing page
  const isLandingPage = location.pathname === '/';

  return (
    <>
      <Navbar />
      <div>{children}</div>
      {!isLandingPage && <Footer />}
    </>
  );
};

export default AppLayout;
