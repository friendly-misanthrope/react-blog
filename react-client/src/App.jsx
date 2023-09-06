// import CSS and components here
import './App.css'
import './styles/home.css'
import './styles/dashboard.css'
import About from './components/About'
import Home from './components/layouts/Home'
import Missing from './components/Missing'
import NewPost from './components/NewPost'
import PostPage from './components/PostPage'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import api from './api/posts'

const App = () => {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [posts, setPosts] = useState([])

  // fetch all posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts')
        setPosts(response.data)
      }
      catch(e) {
        if (e.response) {
          console.log(e.response)
        } else {
          console.log(e.message)
        }
      }
    }
    fetchPosts()
  },[])

  useEffect(() => {
    const results = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase())
    )
      
    setSearchResults(results.reverse())
  },[posts, search])
  
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home 
        search={search} setSearch={setSearch}
        posts={searchResults} />}> 

          <Route path='post' element={<NewPost
          posts={posts} setPosts={setPosts} />} />

          <Route path='post/:id' element={<PostPage 
          posts={posts} setPosts={setPosts} />} />

          <Route path='about' element={<About />} />

        </Route>

        <Route path='*' element={<Missing />} />
      </Routes>
    </div>
  );
} 

export default App;