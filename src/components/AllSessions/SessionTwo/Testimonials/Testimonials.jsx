import { Cart } from "../SessionTwoRoute";
import TestimonialsCss from "./Testimonials.module.css"

const Testimonials = () => {
  return (
    <section className={TestimonialsCss.testimonials}>
      <h2>What Developers Say</h2>

      <Cart className={TestimonialsCss.testimonial}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
          alt="User 1"
        />
        <blockquote>
          "DevConnect helped me land my first remote React job!"
        </blockquote>
        <p>- Alex Frontend</p>
      </Cart>

      <Cart className={TestimonialsCss.testimonial}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
          alt="User 2"
        />
        <blockquote>
          "The tutorials and challenges here are better than most courses I've
          paid for."
        </blockquote>
        <p>- Maria JS</p>
      </Cart>
    </section>
  );
};

export default Testimonials;
