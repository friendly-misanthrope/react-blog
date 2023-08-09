import { Link } from 'react-router-dom'

const Nav = (props) => {

  const {search, setSearch} = props

  const submitHandler = (e) => {
    e.preventDefault()


  }

  return (
    <nav className="navbar">
      <Link to='/'>Home</Link>
      <Link to='/post'>New Post</Link>
      <Link to='/about'>About</Link>
      <form className='search-form' onSubmit={submitHandler}>
        <label htmlFor="search"></label>
        <input type="text" id="search" placeholder="Search Posts" value={search} onChange={setSearch}  />
      </form>
    </nav>
  );
}

export default Nav;