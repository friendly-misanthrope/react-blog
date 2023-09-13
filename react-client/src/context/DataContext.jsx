import { createContext, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import api from '../api/posts'
import useWindowSize from '../hooks/useWindowSize'
import useAxiosFetch from '../hooks/useAxiosFetch'

const DataContext = createContext({})

export const DataProvider = ({ children }) => {

  // App State
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [posts, setPosts] = useState([])
    const { data, fetchError, isLoading } = useAxiosFetch("http://localhost:3500/posts")
    const { width } = useWindowSize()
    const location = useLocation()
    const navigate = useNavigate()

  // setPosts to data from useAxiosFetch 
    useEffect(() => {
      setPosts(data)
    },[data])

  // Filter posts based on search bar input
    useEffect(() => {
      const results = posts.filter(post => 
        ((post.body).toLowerCase()).includes(search.toLowerCase())
        || ((post.title).toLowerCase()).includes(search.toLowerCase())
      )
        
      setSearchResults(results.reverse())
    },[posts, search])

  return (
    <DataContext.Provider value={{
      search,
      setSearch,
      searchResults,
      setSearchResults,
      posts,
      setPosts,
      data,
      fetchError,
      isLoading,
      width,
      location,
      navigate
    }}>
      { children }
    </DataContext.Provider>
  )
}

export default DataContext