// import { useState, useEffect } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import api from '../api/posts'

// const EditPost = (props) => {

//   const { posts, setPosts } = props
//   const [postToEdit, setPostToEdit] = useState({
//     title: '',
//     body: '',
//     updatedAt: new Date().toLocaleString()
//   })

//   const navigate = useNavigate()
//   const { id } = useParams()
//   const post = posts.find(post => post.id === id)

//   useEffect(() => {
//     if (post) {
//       setPostToEdit(post)
//     }
//     else {
//       console.log("Couldn't set post to edit")
//     }
//   },[])

//   const handleChange = (e) => {
//     setPostToEdit(prevState => {return {...prevState, [e.target.name]: e.target.value}})
//   }

//   const handleEdit = async (id) => {
//     const updatedPost = {
//       title: postToEdit.title,
//       body: postToEdit.body,
//       updatedAt: new Date().toLocaleString()
//     }

//     try {
//       const response = await api.put(`posts/${id}`, updatedPost)
//       setPosts(post => post.id === id ? { ...response.data } : post)
      
      
//       //! This post has the old post data!
//       console.log(post)
//       navigate('/')
//     } catch(err) {
//         if (err.response) {
//           console.log(err.response)
//         } else {
//           console.log(err.message)
//         }
//     }
//   }

//   return (
//     <section className="new-post">
//       <h2>Edit Blog Post</h2>
//       <form onSubmit={(e) => e.preventDefault()} method="put" className="new-post-form">
        
//         <label htmlFor="title">Title:</label>
//         <input type="text" id="title" name="title" onChange={handleChange} value={postToEdit.title} autoFocus="autofocus" required />

//         <label htmlFor="body">Post:</label>
//         <textarea name="body" id="body" cols="40" rows="6" onChange={handleChange} value={postToEdit.body} wrap="hard" required></textarea>

//         <button type="submit" className='btn btn-primary' onClick={() => handleEdit(id)}>Edit Post</button>
//       </form>
//     </section>
//   );
// }

// export default EditPost;

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../api/posts'

const EditPost = (props) => {
  // Get post as it exists in DB
  const { posts, setPosts } = props
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
        body: originalPost.body
      })
    }
  },[originalPost, setEditPost])


  return (

  );
}

export default EditPost;
