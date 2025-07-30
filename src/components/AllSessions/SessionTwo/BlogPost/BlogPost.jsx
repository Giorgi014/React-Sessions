import { Cart } from "../SessionTwoRoute";
import BlogPostCss from "./BlogPost.module.css";

const BlogPost = () => {
  return (
    <section className={BlogPostCss.blog}>
      <h2>Latest Articles</h2>

      <Cart className={BlogPostCss.post}>
        <h3>Mastering React Components</h3>
        <p>
          Components are the heart of React apps. Learn how to structure, style,
          and optimize them.
        </p>
        <p>
          <strong>Author:</strong> Sarah Dev
        </p>
      </Cart>

      <Cart className={BlogPostCss.post}>
        <h3>Using Props Like a Pro</h3>
        <p>
          Make your React components reusable and dynamic with props and
          destructuring.
        </p>
        <p>
          <strong>Author:</strong> John Code
        </p>
      </Cart>

      <Cart className={BlogPostCss.post}>
        <h3>Understanding State and Effects</h3>
        <p>
          Learn the fundamentals of useState and useEffect with real-life
          examples.
        </p>
        <p>
          <strong>Author:</strong> Lina Hooks
        </p>
      </Cart>
    </section>
  );
};

export default BlogPost;
