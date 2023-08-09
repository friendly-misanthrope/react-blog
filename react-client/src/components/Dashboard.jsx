const Dashboard = (props) => {

  const { posts} = props

  return (
    <section className="feed">
      {
        posts.length ?
          posts.map((post) => (
            <div className="post" key={post.id}>
              <h3>{post.title}</h3>
              <h5>Posted on {post.datetime}</h5>
              <p>{post.body}</p>
            </div>
          ))
          : <h3 className="no-posts">There are No posts to display</h3>
      }
    </section>
  );
}

export default Dashboard;