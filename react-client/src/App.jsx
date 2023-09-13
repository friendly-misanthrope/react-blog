// import CSS and components here
import './styles/styles.css'
import About from './components/About'
import Home from './components/layouts/Home'
import Missing from './components/Missing'
import NewPost from './components/NewPost'
import PostPage from './components/PostPage'
import EditPost from './components/EditPost'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import useAxiosFetch from './hooks/useAxiosFetch'
import { DataProvider } from './context/DataContext'


const App = () => {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [posts, setPosts] = useState([])
  const { data, fetchError, isLoading } = useAxiosFetch("http://localhost:3500/posts")
  
  

  useEffect(() => {
    setPosts(data)
  },[data])

  useEffect(() => {
    const results = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase())
    )
      
    setSearchResults(results.reverse())
  },[posts, search])
  
  return (
    <div className='App'>
      <DataProvider>
        <Routes>
          <Route path='/' element={<Home 
          search={search} setSearch={setSearch}
          posts={searchResults}
          fetchError={fetchError}
          isLoading={isLoading} />}> 

            <Route path='post' element={<NewPost
            posts={posts} setPosts={setPosts} />} />

            <Route path='post/:id' element={<PostPage 
            posts={posts} setPosts={setPosts} />} />

            <Route path='post/:id/edit' element={<EditPost 
            posts={posts} setPosts={setPosts} />} />

            <Route path='about' element={<About />} />

          </Route>

          <Route path='*' element={<Missing />} />
        </Routes>
      </DataProvider>
    </div>
  );
} 

export default App;