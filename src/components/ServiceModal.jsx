import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/serviceModal.css";

const ServiceModal = ({ title, description, detailedDescription, image, position }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/quote', { state: { service: title } }); // Pass the service title
  };

  return (
    <div
      className="service-modal"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleNavigation}
    >
      <img src={image} alt={title} className="modal-image" />
      <div className={`modal-content ${position}`}>
        <h2>{title}</h2>
        <p>{hovered ? detailedDescription : description}</p>
      </div>
    </div>
  );
};

export default ServiceModal;
