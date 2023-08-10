import { Link } from "react-router-dom"

const Post = (props) => {

  const { post } = props

  return (
    <article className="post">
      <Link to={`/post/${post.id}`}>
        <h3>{post.title}</h3>
        <h5>Posted on {post.datetime}</h5>
      </Link>

      <p className="post-body">
        {
          post.body.length <= 25 ?
            post.body
              : `${post.body.slice(0,25)}...`
        }
      </p>
    </article>
  );
}

export default Post;