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
import api from './api/posts'

const App = () => {

  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [posts, setPosts] = useState([])

  const [newPost, setNewPost] = useState({
    id: crypto.randomUUID(),
    title: '',
    body: '',
    createdAt: new Date().toLocaleString({ day: 'numeric', hour: '2-digit', minute: '2-digit'})
  })

  const [editPost, setEditPost] = useState({
    title: '',
    body: '',
    updatedAt: new Date().toLocaleString({ day: 'numeric', hour: '2-digit', minute: '2-digit'})
  })

  const navigate = useNavigate()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts')
        setPosts(response.data)
      }
      catch(e) {
        console.log(e)
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

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await api.post('/posts', newPost)
      setPosts([...posts, response.data])
      setNewPost({
        id: crypto.randomUUID(),
        title: '',
        createdAt: new Date().toLocaleString({ day: 'numeric', hour: '2-digit', minute: '2-digit'}),
        body: ''
      })
      navigate('/')
    }
    catch(e) {
      console.log(e)
    }
  }

  const handleEdit = async (e, id) => {
    try {
      e.preventDefault()
      const response = api.put(`/posts/${id}`, editPost)
      setPosts(posts.map(post => post.id === id ? {...response.data} : post ))
    } catch(err) {
      console.log(err)
    }
  }
  
  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`)
      const newPostList = posts.filter(post => post.id !== id)
      setPosts(newPostList)
      navigate('/')
    }
    catch(e) {
      console.log(e)
    }
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