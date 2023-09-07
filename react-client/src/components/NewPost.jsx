import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/posts'

const NewPost = (props) => {

  const navigate = useNavigate()
  const { posts, setPosts } = props
  const [newPost, setNewPost] = useState({
    id: crypto.randomUUID(),
    title: '',
    body: '',
    createdAt: null,
    updatedAt: null
  })

  const handleChange = (e) => {
    setNewPost(prevState => {return {...prevState, [e.target.name]: e.target.value}})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      newPost.createdAt = new Date().toLocaleString()
      const response = await api.post('/posts', newPost)
      setPosts([...posts, response.data])
      setNewPost({
        id: crypto.randomUUID(),
        title: '',
        body: ''
      })
      navigate('/')
    } catch(err) {
      if (err.response) {
        console.log(err.response)
      } else {
        console.log(err.message)
      }
    }
  }

  return (
    <section className="new-post">
      <h2>New Blog Post</h2>
      <form onSubmit={handleSubmit} method="post" className="new-post-form">
        
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" maxLength={30} onChange={handleChange} value={newPost.title} autoFocus="autofocus" required />

        <label htmlFor="body">Post:</label>
        <textarea name="body" id="body" cols="40" rows="6" maxLength={280} onChange={handleChange} value={newPost.body} wrap="hard" required></textarea>

        <button type="submit" className='btn btn-primary'>Post</button>
      </form>
    </section>
  );
}

export default NewPost;