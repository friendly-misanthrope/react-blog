import { useParams, Link } from 'react-router-dom'
import DataContext from '../context/DataContext'
import { useContext } from 'react'

const PostPage = () => {

  const { handleDelete, posts } = useContext(DataContext)
  const { id } = useParams()
  const post = posts.find(post => post.id.toString() === id)
  
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