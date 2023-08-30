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
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My first post",
      datetime: "August 01, 2023 12:59 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 2,
      title: "My second post",
      datetime: "August 02, 2023 1:21 PM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 3,
      title: "My third post",
      datetime: "August 03, 2023 4:20 PM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 4,
      title: "My fourth post",
      datetime: "August 04, 2023 10:59 PM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 5,
      title: "My fifth post",
      datetime: "August 05, 2023 8:40 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 6,
      title: "My sixth post",
      datetime: "August 06, 2023 3:31 PM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 7,
      title: "My seventh post",
      datetime: "August 07, 2023 9:18 PM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 8,
      title: "My eighth post",
      datetime: "August 08, 2023 2:16 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ])

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