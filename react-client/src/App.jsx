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
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'

const App = () => {

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
      datetime: "August 01, 2023 1:21 PM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 7,
      title: "My seventh post",
      datetime: "August 01, 2023 1:21 PM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 8,
      title: "My eighth post",
      datetime: "August 01, 2023 1:21 PM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ])
  
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home 
        search={search} setSearch={setSearch}
        posts={posts} setPosts={setPosts}  />}>

          <Route path='post' element={<NewPost />} />
          <Route path='post/:id' element={<PostPage />} />
          <Route path='about' element={<About />} />

        </Route>

        <Route path='*' element={<Missing />} />
      </Routes>
    </div>
  );
} 

export default App;