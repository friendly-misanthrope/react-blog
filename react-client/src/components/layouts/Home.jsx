import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import Dashboard from "../Dashboard"
import { useLocation, Outlet } from 'react-router-dom'
import useWindowSize from '../../hooks/useWindowSize'


const Home = (props) => {
  const { width } = useWindowSize()
  const location = useLocation()
  const { search, setSearch, posts, fetchError, isLoading } = props

  return (
    <main className="home">
      <Header width={width} />
      <Nav search={search} setSearch={setSearch} />
  
      {
        location.pathname === '/' ?
          <Dashboard posts={posts.reverse()} 
          fetchError={fetchError}
          isLoading={isLoading} />
          :null
      }
      <Outlet />
      <Footer />
    </main>
  );
}

export default Home;