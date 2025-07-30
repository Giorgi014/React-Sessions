import { Cart } from "../SessionTwoRoute";
import FeatureCss from "./Feature.module.css";

const Feature = () => {
  return (
    <section className={FeatureCss.features}>
      <h2>Why Choose Us?</h2>
      <Cart className={FeatureCss.feature}>
        <h3>Community Driven</h3>
        <p>
          Get support, share tips, and build together with thousands of
          developers.
        </p>
      </Cart>
      <Cart className={FeatureCss.feature}>
        <h3>Learning Resources</h3>
        <p>
          Access curated tutorials, challenges, and projects to boost your
          skills.
        </p>
      </Cart>
      <Cart className={FeatureCss.feature}>
        <h3>Job Board</h3>
        <p>Explore developer jobs and freelance gigs tailored to your stack.</p>
      </Cart>
    </section>
  );
};

export default Feature;
