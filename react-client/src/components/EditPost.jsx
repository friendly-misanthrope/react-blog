import '../styles/new-post.css'

const EditPost = (props) => {

  const { editPost, setEditPost, handleEdit } = props

  const handleChange = (e) => {
    setEditPost(prevState => {return {...prevState, [e.target.name]: e.target.value}})
  }

  return (
    <section className="new-post">
      <h2>New Blog Post</h2>
      <form onSubmit={handleEdit} method="put" className="new-post-form">
        
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" onChange={handleChange} value={editPost.title} autofocus="autofocus" required />

        <label htmlFor="body">Post:</label>
        <textarea name="body" id="body" cols="40" rows="6" onChange={handleChange} value={editPost.body} wrap="hard" required></textarea>

        <button type="submit" className='btn btn-primary'>Post</button>
      </form>
    </section>
  );
}

export default EditPost;