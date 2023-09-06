import { useParams, Link } from 'react-router-dom'
import '../styles/post-page.css'

const PostPage = (props) => {

  const{ id } = useParams()
  const { posts, handleDelete } = props
  const post = posts.find(post => post.id.toString() === id)

  return (
    <section className='post-page'>
      <article className='post full-post'>
        {
          post ?
          <>
            <h2>{post.title}</h2>
            <p className="post-date">Posted <span>{post.createdAt}</span></p>

            <p className="post-body">{post.body}</p>
            
            <div className="buttons">
              {/* <Link to={`/post/${id}/edit`}>
                <button>Edit</button>
              </Link> */}
              <button onClick={() => handleDelete(post.id)}>Delete</button>
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



