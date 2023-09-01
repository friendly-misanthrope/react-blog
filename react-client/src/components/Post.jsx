import { Link } from "react-router-dom"
import '../styles/post.css'

const Post = (props) => {

  const { post } = props

  return (
    <Link to={`/post/${post.id}`}>
      <article className="post">
      
      <h3>{post.title}</h3>
      <h5>Posted {post.datetime}</h5>
    

    <p className="post-body">
      {
        post.body.length <= 50 ?
          post.body
            : `${post.body.slice(0,50)}...`
      }
    </p>
  </article>
    </Link>

  );
}

export default Post;