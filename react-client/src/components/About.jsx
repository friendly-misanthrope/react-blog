import '../styles/about.css'
import { Link } from 'react-router-dom'

const About = (props) => {
  return (
    <section className="about">
      <div className="content-container">
        <h2>About This Application</h2>
        <p className="about-content">
          ReactJS Blog is a frontend project that I undertook to build proficiency with React Router V6.<br />
          As it is frontend only, post data is non-persistent and changes made by the user will be reset<br />
          each time the page is reloaded.
        </p>
      </div>

      <section className="technologies">
        <h4>Technologies Utilized:</h4>
        
          <div className="all-stacks">
            <Link to={'https://react.dev'}>
              <div className="stack">
                <p className="react">ReactJS</p>
                <img src="./assets/react-logosvg.svg" alt="React logo" />
              </div>
            </Link>

            <Link to={"https://www.getbootstrap.com"}>
              <div className="stack">
                <p className="bootstrap">Bootstrap</p>
                <img src="./assets/bootstrap-original.svg" alt="Bootstrap logo" />
              </div>
            </Link>

        </div>
      </section>  

      <Link to={"/"} className="btn btn-primary">Back to posts</Link>

    </section>
  );
}

export default About;
