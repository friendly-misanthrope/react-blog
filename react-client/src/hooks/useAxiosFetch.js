import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxiosFetch = (endpoint) => {
  const [data, setData] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let isMounted = true
    const abortController = new AbortController()

    const fetchData = (endpoint) => {
      setIsLoading(true)
      axios.get(endpoint, {
        signal: abortController.signal
      })
      .then((req) => {
        if (isMounted) {
          setData(req.data)
          setFetchError(null)
        }
        
      })
      .catch((err) => {
        if (isMounted) {
          setFetchError(err.message)
          setData([])
        }
      })
      isMounted && setTimeout(() => setIsLoading(false), 1500)
    }

    fetchData(endpoint)

    const cleanUp = () => {
      console.log("axiosFetch cleanup ran")
      isMounted = false;
      abortController.abort()
    }

    return cleanUp
    
  },[endpoint])

  return { data, fetchError, isLoading }
}

export default useAxiosFetch