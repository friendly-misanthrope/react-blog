import { useParams, useNavigate, Link } from 'react-router-dom'
import api from '../api/posts'

const PostPage = (props) => {

  const { id } = useParams()
  const navigate = useNavigate()
  const { posts, setPosts } = props
  const post = posts.find(post => post.id.toString() === id)

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete '${post.title}'? This action cannot be undone!`)) {
      api.delete(`/posts/${id}`)
      .then(() => {
        const updatedPostList = posts.filter(post => post.id !== id)
        setPosts(updatedPostList)
        navigate('/')
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <section className='post-page'>
      <article className='post full-post'>
        {
          post ?
            <>
              <h2>{post.title}</h2>
              <p className="post-date">Posted <span>{post.createdAt}</span></p>
              {
                post.updatedAt ?
                  <p>Updated {post.updatedAt}</p>
                  : null
              }
              <p className="post-body">{post.body}</p>

              <div className="buttons">
                <Link to={`/post/${id}/edit`}>
                  <button className='btn btn-primary'>Edit</button>
                </Link>
                <button className='btn btn-danger' onClick={() => handleDelete(post.id)}>Delete</button>
              </div>
            </>
            : <>
              <h2>Post Not Found</h2>
              <p>Well, that's disappointing.</p>
              <p>
                <Link to={'/'}>Back to post feed</Link>
              </p>
            </>
        }
      </article>
    </section>
  );
}

export default PostPage;