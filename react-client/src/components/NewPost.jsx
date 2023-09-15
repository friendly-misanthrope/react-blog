import DataContext from '../context/DataContext'
import { useContext } from 'react'

const NewPost = () => {

  const { newPost, handleNewPostChange, handleNewPostSubmit } = useContext(DataContext)

  return (
    <section className="new-post">
      <h2>New Blog Post</h2>
      <form onSubmit={handleNewPostSubmit} method="post" className="new-post-form">
        
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" maxLength={42} onChange={handleNewPostChange} value={newPost.title} autoFocus="autofocus" required />

        <label htmlFor="body">Post:</label>
        <textarea name="body" id="body" cols="40" rows="6" maxLength={280} onChange={handleNewPostChange} value={newPost.body} wrap="hard" required></textarea>

        <button type="submit" className='btn btn-primary'>Post</button>
      </form>
    </section>
  );
}

export default NewPost;