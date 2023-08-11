import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const PostPage = (props) => {

  const{ id } = useParams()
  const navigate = useNavigate()
  const { posts, handleDelete } = props

  
  const post = posts.find(post => post.id.toString() === id)
  
  return (
    <section className='post-page'>
      <article className='post full-post'>
        {
          post ?
          <>
            <h2>{post.title}</h2>
            <p className="post-date">{post.datetime}</p>
            <p className="post-body">{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
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



