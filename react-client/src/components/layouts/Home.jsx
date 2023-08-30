import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import Dashboard from "../Dashboard"
import { useLocation, Outlet } from 'react-router-dom'

const Home = (props) => {
  const location = useLocation()

  const { search, setSearch } = props
  const { posts } = props

  return (
    <main className="home">
      <Header />
      <Nav search={search} setSearch={setSearch} />
  
      {
        location.pathname === '/' ?
          <Dashboard posts={posts.reverse()} />
          :null
      }
      <Outlet />
      <Footer />
    </main>
  );
}

export default Home;