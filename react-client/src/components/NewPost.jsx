const NewPost = (props) => {

  const { newPost, setNewPost, handleSubmit } = props

  const handleChange = (e) => {
    setNewPost(prevState => {return {...prevState, [e.target.name]: e.target.value}})
  }

  return (
    <section className="new-post">
      <form onSubmit={handleSubmit} className="new-post-form">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" onChange={handleChange} value={newPost.title} required />

        <label htmlFor="body">Post:</label>
        <textarea name="body" id="body" cols="40" rows="6" onChange={handleChange} value={newPost.body} wrap="hard" required></textarea>

        <button type="submit">Post</button>
      </form>
    </section>
  );
}

export default NewPost;
