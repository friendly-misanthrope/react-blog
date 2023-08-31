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
import { Routes, Route, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'

const App = () => {
  
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [posts, setPosts] = useState([])

  const [newPost, setNewPost] = useState({
    id: posts.length ? posts.length + 1 : 1,
    title: '',
    datetime: format(new Date(), 'MMMM dd, yyyy pp'),
    body: ''
  })

  useEffect(() => {
    const results = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase())
    )
      
    setSearchResults(results.reverse())
  },[posts, search])

  const handleSubmit = (e) => {
    e.preventDefault()

    setPosts(posts => {return [...posts, newPost]})
    
    setNewPost({
      id: posts.length + 1,
      title: '',
      datetime: format(new Date(), 'MMMM dd, yyyy pp'),
      body: ''
    })

    navigate('/')
  }
  
  const handleDelete = (id) => {
    const newPostList = posts.filter(post => post.id !== id)
    setPosts(newPostList)
    navigate('/')
  }
  
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home 
        search={search} setSearch={setSearch}
        posts={searchResults} setPosts={setPosts} />}>

          <Route path='post' element={<NewPost
          newPost={newPost} setNewPost={setNewPost}
          handleSubmit={handleSubmit} />} />

          <Route path='post/:id' element={<PostPage 
          posts={posts} setPosts={setPosts}
          handleDelete={handleDelete} />} />

          <Route path='about' element={<About />} />

        </Route>

        <Route path='*' element={<Missing />} />
      </Routes>
    </div>
  );
} 

export default App;