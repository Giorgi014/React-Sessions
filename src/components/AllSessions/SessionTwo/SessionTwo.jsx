import {
  About,
  BlogPost,
  Feature,
  Footer,
  Header,
  Hero,
  Testimonials,
} from "./SessionTwoRoute.jsx";
import "./SessionTwo.scss";

const SessionTwo = () => {
  return (
    <div className="session_two_cont">
      <Header />
      <Hero />
      <Feature />
      <BlogPost />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
};

export default SessionTwo;
