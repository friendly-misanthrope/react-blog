import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api/posts'
import DataContext from '../context/DataContext'

const EditPost = () => {

  const { posts, setPosts, navigate } = useContext(DataContext)
  const { id } = useParams()
  const originalPost = posts.find(post => (post.id) === id)

  const [editPost, setEditPost] = useState({
    id,
    title: originalPost.title,
    body: originalPost.body
  })

  useEffect(() => {
    if (originalPost) {
      setEditPost({
        title: originalPost.title,
        body: originalPost.body,
        createdAt: originalPost.createdAt
      })
    }
  },[originalPost, setEditPost])

  const handleChange = (e) => {
    setEditPost(prevState => {return {...prevState, [e.target.name]: e.target.value}})
  }

  const handleEdit = async (id) => {
    const editedPost = {
      id,
      title: editPost.title,
      body: editPost.body,
      createdAt: editPost.createdAt,
      updatedAt: new Date().toLocaleString()
    }

    const response = await api.put(`posts/${id}`, editedPost)
    try {
      setPosts(posts.map((post) => (
        post.id === id ? {...response.data}
          : post
      )))

      setEditPost({
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
      <h2>Edit Blog Post</h2>
      <form className="new-post-form" method='put' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" maxLength={30} onChange={handleChange} value={editPost.title} />

        <label htmlFor="body">Post:</label>
        <textarea name="body" id="body" cols="40" rows="6" maxLength={280} onChange={handleChange} value={editPost.body} />
        <button className="btn btn-primary" onClick={() => handleEdit(id)}>Submit</button>
      </form>
    </section>
  );
}

export default EditPost;