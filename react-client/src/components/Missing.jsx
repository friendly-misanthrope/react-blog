import { useNavigate } from 'react-router-dom'

const Missing = () => {

  const navigate = useNavigate()

  return (
    <main>
      <div className="missing-container">
        <h1>Whoopsies, I can't find that page!</h1>
        <img className='page-missing-gif' src="https://media.tenor.com/RpghvJN-ucgAAAAC/sorry.gif" alt="Puppy looking sorry" />
        <h4 className='wooked'>I looked hard, I pwomise!</h4>
        <button onClick={() => {navigate(-1)}} className='btn btn-primary'>Go Back</button>
      </div>
    </main>
  );
}

export default Missing;