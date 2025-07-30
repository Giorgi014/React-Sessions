import Button from "../Button/Button";
import HeroStyles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={HeroStyles.hero}>
      <h2>Welcome to DevConnect</h2>
      <p>The place where developers share, learn, and grow together.</p>
      <Button>Join Now</Button>
    </section>
  );
};

export default Hero;
