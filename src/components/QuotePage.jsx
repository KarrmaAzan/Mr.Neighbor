import { useLocation } from 'react-router-dom';
import QuoteForm from './QuoteForm';
import "../css/quote.css";
const QuotePage = () => {
  const location = useLocation();
  const service = location.state?.service || null; // If no state, service will be null

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Form submitted:', Object.fromEntries(formData.entries()));
    // Add email logic here using nodemailer or an external service
  };

  return (
    <div className="quote-page">
      <h1>Request a Quote</h1>
      <QuoteForm onSubmit={handleSubmit} prefilledService={service} />
    </div>
  );
};

export default QuotePage;
   