import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import HomePage from './components/HomePage';
import ServicePage from './components/ServicePage';
import QuotePage from './components/QuotePage';
import AboutPage from './components/AboutPage';
import LandingPage from './components/LandingPage'; // Assuming this will be added later

const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </AppLayout>
  );
};

export default App;
