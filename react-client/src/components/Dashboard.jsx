import Post from "./Post"

const Dashboard = (props) => {

  const { posts} = props

  return (
    <>
      <h2 className="dashboard-header">Post Feed</h2>
      <section className="feed">
      {
        posts.length ?
          posts.map(post => (
            <Post key={post.id} post={post} />
          ))
            : <h3 className="no-posts">There are no posts to display</h3>
      }
    </section>
    </>

  );
}

export default Dashboard;