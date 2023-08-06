import { Link, useNavigate } from 'react-router-dom'

const Missing = (props) => {

  const navigate = useNavigate()

  return (
    <main>
      <h1>Whoopsies, we can't find that page!</h1>
      <button onClick={() => {navigate(-1)}} className='btn btn-primary'>Back to previous page</button>
    </main>
  );
}

export default Missing;
