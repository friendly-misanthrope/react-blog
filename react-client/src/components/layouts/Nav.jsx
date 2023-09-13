import { Link } from 'react-router-dom'
import DataContext from '../../context/DataContext'
import { useContext } from 'react'

const Nav = () => {

  const {search, setSearch} = useContext(DataContext)

  const changeHandler = (e) => {
    setSearch(e.target.value)
  }

  return (
    <nav className="navbar">
      <Link to='/'>Home</Link>
      <Link to='/post'>New Post</Link>
      <Link to='/about'>About</Link>
      <form className='search-form' >
        <label htmlFor="search" />
        <input type="text" name="query" id="search" placeholder="Search Posts" value={search.query} onChange={changeHandler}  />
      </form>
    </nav>
  );
}

export default Nav;