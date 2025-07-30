import HeaderCss from "./Header.module.css";

const Header = () => {
  return (
    <header className={HeaderCss.header}>
      <div className={HeaderCss.logo}>
        <h1>DevConnect</h1>
      </div>
      <nav className={HeaderCss.nav}>
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Header;
