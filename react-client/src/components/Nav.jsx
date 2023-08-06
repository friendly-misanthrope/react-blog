import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className="navbar">
      <Link to='/about'>About</Link>
      <Link to='/post'>New Post</Link>
      <Link to='/'>Home</Link>
    </nav>
  );
}

export default Nav;