const Footer = () => {
  const fullYear = new Date()
  return (
    <footer className="footer">
      <p>ReactJS Blog</p>
      <p>Copyright &copy; {fullYear.getFullYear()} FooBar Industries</p>
    </footer>
  );
}

export default Footer;