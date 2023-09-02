import '../styles/new-post.css'

const NewPost = (props) => {

  const { newPost, setNewPost, handleSubmit } = props

  const handleChange = (e) => {
    setNewPost(prevState => {return {...prevState, [e.target.name]: e.target.value}})
  }

  return (
    <section className="new-post">
      <h2>New Blog Post</h2>
      <form onSubmit={handleSubmit} method="post" className="new-post-form">
        
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" onChange={handleChange} value={newPost.title} autofocus="autofocus" required />

        <label htmlFor="body">Post:</label>
        <textarea name="body" id="body" cols="40" rows="6" onChange={handleChange} value={newPost.body} wrap="hard" required></textarea>

        <button type="submit" className='btn btn-primary'>Post</button>
      </form>
    </section>
  );
}

export default NewPost;