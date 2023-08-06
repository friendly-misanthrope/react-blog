import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className="navbar">
      <Link to='/'>Home</Link>
      <Link to='/post'>New Post</Link>
      <Link to='/about'>About</Link>
    </nav>
  );
}

export default Nav;