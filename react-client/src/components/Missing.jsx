import { Link, useNavigate } from 'react-router-dom'

const Missing = (props) => {
  
  const navigate = useNavigate()

  return (
    <main>
      <h1>Missing</h1>
      <Link onClick={() => {navigate(-1, {replace: true})}}>Back to previous page</Link>
    </main>
  );
}

export default Missing;
