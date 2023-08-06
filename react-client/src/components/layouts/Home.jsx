import Header from "../Header"
import Nav from "../Nav"
import Footer from "../Footer"
import { Outlet } from 'react-router-dom'

const Home = (props) => {

  // add logic for "if user is logged in, navigate to dashboard, otherwise navigate to "
  return (
    <main>
      <Nav />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Home;