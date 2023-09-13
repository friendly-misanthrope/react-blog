import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/posts'
import useWindowSize from '../hooks/useWindowSize'
import useAxiosFetch from '../hooks/useAxiosFetch'

const DataContext = createContext({})

export const DataProvider = ({ children }) => {

  // State
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [posts, setPosts] = useState([])
    const { data, fetchError, isLoading } = useAxiosFetch("http://localhost:3500/posts")
    const { width } = useWindowSize()

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
      width
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext