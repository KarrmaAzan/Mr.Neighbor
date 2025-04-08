
import "../css/about.css";
import Logo from "../assets/marc.jpg";
const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About your Neighbor</h1>
      <img src={Logo}alt="Mr. Neighbor" className="about-image" />
      <p>
        Welcome to Mr. Neighbor, your trusted partner for landscaping and handyman services.
        With years of experience and a passion for delivering exceptional results, we take pride
        in transforming your vision into reality.
      </p>
      <p>
        Whether you&apos;re looking to enhance your outdoor space or need reliable handyman solutions,
        Mr. Neighbor is here to help. Our mission is to provide top-notch services with a personal
        touch, ensuring your satisfaction every step of the way.
      </p>
      <p>Let us help you create the home and yard of your dreams!</p>
    </div>
  );
};

export default AboutPage;
