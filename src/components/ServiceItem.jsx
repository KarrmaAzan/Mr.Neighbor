const ServiceItem = ({ title, description, image }) => {
  return (
    <div className="service-item">
      <img src={image} alt={title} className="service-image" />
      <div className="service-item-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
