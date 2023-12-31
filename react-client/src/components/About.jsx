import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="about">
      <div className="content-container">
        <h2>About This Application</h2>
        <p className="about-content">
          ReactJS Blog is a frontend project that I undertook to build proficiency with React Router V6.
          It uses a json-server mock backend to persist post data locally.
          While the source code is my own, the idea for this project came from <a href="https://www.youtube.com/@DaveGrayTeachesCode/videos">Dave Gray</a>.
          Make sure to check out his channel and give him the credit he deserves.
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

            <Link to={'https://github.com/axios/axios'}>
              <div className="stack">
                <p className="axios">Axios</p>
                <img src="./assets/axios-logo.svg" alt="Axios API logo" />
              </div>
            </Link>
            
            <Link to={'https://git-scm.com'}>
              <div className="stack">
                <p className="git">Git</p>
                <img src="./assets/git-logo.svg" alt="Axios API logo" />
              </div>
            </Link>
        </div>
      </section>  

      <div className="buttons">
        <Link to={"https://www.github.com/friendly-misanthrope/react-blog"} >
          <button className="btn btn-secondary">View Source Code</button>
        </Link>
        <Link to={"/"}>
          <button className="btn btn-primary">Back to Posts</button>
        </Link>
      </div>


    </section>
  );
}

export default About;