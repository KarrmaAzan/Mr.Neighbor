import "../css/home.css";
import ServiceModal from './ServiceModal';
import Handyman from "../assets/handyman.jpg";
import Landscaping from "../assets/landscaping.jpg";
import Moving from "../assets/moving.jpg";

const HomePage = () => {
  const services = [
    {
      id: 1,
      title: 'Need Landscaping?',
      description: 'Expert landscaping solutions designed to enhance your outdoor space.',
      detailedDescription: 'Our professional landscaping team specializes in custom garden designs, meticulous lawn care, and advanced irrigation systems. We create and maintain vibrant, functional, and aesthetically pleasing landscapes tailored to your needs.',      
      
      image: Landscaping,
      link: '/services/landscaping',
    },
    {
      id: 2,
      title: 'Need A Handyman?',
      description: 'Comprehensive handyman services tailored to your home’s needs.',
      detailedDescription: 'Our professional handymen handle everything from minor repairs to major home improvements. With precision and efficiency, we ensure every task is completed to the highest standard, making your home safe, functional, and well-maintained.',           
      image: Handyman,
      link: '/services/handyman',
    },
    
    {
      id: 3,
      title: 'Are You Moving?',
      description:"Reliable, fast, and professional moving solutions for homes and businesses. Whether you're relocating locally or across the country, we ensure a smooth and stress-free transition.",
      detailedDescription: 'Effortless and reliable moving services tailored for local and long-distance relocations. Our experienced team ensures the safe handling of your belongings, offering packing, loading, and transport solutions. With customizable options, real-time tracking, and a focus on customer care, we make your move smooth, efficient, and stress-free.',
      image: Moving,
      link: '/services/moving',
    },
  ];

  return (
    <div className="homepage">
      <h1>Welcome to Mr. Neighbor</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceModal
            key={service.id}
            title={service.title}
            description={service.description}
            detailedDescription={service.detailedDescription}
            image={service.image}
            link={service.link}
            position={index % 2 === 0 ? 'left' : 'right'} // Alternate positions
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
