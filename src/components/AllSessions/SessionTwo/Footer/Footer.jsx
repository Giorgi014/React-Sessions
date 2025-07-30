import FooterCss from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={FooterCss.footer}>
      <p>&copy; 2025 DevConnect. All rights reserved.</p>
      <nav>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </nav>
    </footer>
  );
};

export default Footer;
