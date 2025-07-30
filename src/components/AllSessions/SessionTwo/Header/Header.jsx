import HeaderCss from "./Header.module.css";

const Header = () => {
  return (
    <header className="session_two_header">
      <div className="session_two_logo">
        <h1>DevConnect</h1>
      </div>
      <nav  className="session_two_nav">
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Header;
