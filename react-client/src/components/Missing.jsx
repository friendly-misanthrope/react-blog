import { Link, useNavigate } from 'react-router-dom'

const Missing = (props) => {

  const navigate = useNavigate()

  return (
    <main>
      <h1>Whoopsies, I can't find that page!</h1>
      <img className='page-missing-gif' src="https://media.tenor.com/RpghvJN-ucgAAAAC/sorry.gif" alt="Puppy looking sorry" />
      <h4 className='wooked'>I wooked vewy hawd, I pwomise!</h4>
      <button onClick={() => {navigate(-1)}} className='btn btn-primary'>Back to previous page</button>
    </main>
  );
}

export default Missing;