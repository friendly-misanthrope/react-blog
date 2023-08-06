import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import { Routes, Route } from 'react-router-dom'

const PageLayout = (props) => {
  return (
    <main>
      <Routes>
        <Route path='/'>
          <Header />
          <Nav />
          <Footer />
        </Route>
      </Routes>
    </main>
  );
}

export default PageLayout;
