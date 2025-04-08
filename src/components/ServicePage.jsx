import ServiceItem from './ServiceItem';
import "../css/servicePage.css";
import landscaping from "../assets/landscaping.jpg";
import handyman from "../assets/handyman.jpg";
import moving from "../assets/moving.jpg";

const ServicePage = () => {
  const services = [
    {
      title: 'Landscaping',
      description: 'Our professional landscaping team specializes in custom garden designs, meticulous lawn care, and advanced irrigation systems. We create and maintain vibrant, functional, and aesthetically pleasing landscapes tailored to your needs.',
      side: 'left',
      image: landscaping,
    },
    {
      title: 'Handyman',
      description: 'Our professional handymen handle everything from minor repairs to major home improvements. With precision and efficiency, we ensure every task is completed to the highest standard, making your home safe, functional, and well-maintained.',
      side: 'right',
      image: handyman,
    },
    {
      title: 'Moving',
      description: "Reliable, fast, and professional moving solutions for homes and businesses. Whether you're relocating locally or across the country, we ensure a smooth and stress-free transition.",
      side: 'right',
      image: moving,
    },
  ];

  return (
    <div className="service-page">
      <h1>Our Services</h1>
      <div className="service-list">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            description={service.description}
            side={service.side}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
