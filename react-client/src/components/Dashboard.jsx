

const Dashboard = (props) => {

  const { posts, setPosts } = props

  return (
    <section className="feed">
      {
        posts.length ?
          posts.map((post) => (
            <div key={post.id}>{post.body}</div>
          ))
          : <p>There are No posts to display</p>
      }
    </section>
  );
}

export default Dashboard;
