// import CSS and components here
import './styles/styles.css'
import About from './components/About'
import Home from './components/layouts/Home'
import Missing from './components/Missing'
import NewPost from './components/NewPost'
import PostPage from './components/PostPage'
import EditPost from './components/EditPost'
import { Routes, Route } from 'react-router-dom'
import { DataProvider } from './context/DataContext'

const App = () => {
  
  return (
    <div className='App'>
      <DataProvider>
        <Routes>

          <Route path='/' element={<Home />}> 
            <Route path='post' element={<NewPost />} />
            <Route path='post/:id' element={<PostPage />} />
            <Route path='post/:id/edit' element={<EditPost />} />
            <Route path='about' element={<About />} />
          </Route>

          <Route path='*' element={<Missing />} />
          
        </Routes>
      </DataProvider>
    </div>
  );
} 

export default App;