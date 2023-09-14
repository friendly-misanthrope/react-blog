import Post from "./Post"
import DataContext from '../context/DataContext'
import { useContext } from 'react'

const Dashboard = () => {

  const { searchResults, isLoading } = useContext(DataContext)

  return (
    <>
      <h2 className="dashboard-header">Post Feed</h2>
      <section className="feed">
        {
          isLoading ?
            <h3 className="no-posts loading">Loading posts</h3>
            : searchResults.length ?
              searchResults.map(post => (
                <div key={post.id}>
                  <Post post={post} />
                </div>
              ))
              : <h3 className="no-posts">There are no posts to display</h3>
        }
      </section>
    </>

  );
}

export default Dashboard;