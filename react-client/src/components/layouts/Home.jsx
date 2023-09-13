import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import Dashboard from "../Dashboard"
import { useLocation, Outlet } from 'react-router-dom'
import useWindowSize from '../../hooks/useWindowSize'
import DataContext from '../../context/DataContext'
import { useContext } from 'react'


const Home = () => {
  const { width } = useWindowSize()
  const location = useLocation()

  const { search, setSearch, posts, fetchError, isLoading } = useContext(DataContext)

  return (
    <main className="home">
      <Header width={width} />
      <Nav search={search} setSearch={setSearch} />
  
      {
        location.pathname === '/' ?
          <Dashboard  />
          :null
      }
      <Outlet />
      <Footer />
    </main>
  );
}

export default Home;