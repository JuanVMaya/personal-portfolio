import Card from './UI/Card'
import classes from './Projects.module.css'
import Thinker from '../assets/Thinker.svg'


const Projects = props => {
    return (
        <section className={classes.projectsPage}>
            <h1 className={classes.sectionTitle}>Projects</h1>
            <div className={classes.card}>
                <h3>Project Title</h3>
                <img className={classes.thumbnail} src={Thinker} />
                <p className={classes.projectDescription}>This website is a compilation of materials that exemplifies my beliefs, skills, qualifications, education, training and experiences. It provides insight into your personality and work ethic.
                    This is a representation of self-taught all-in-one project. It includes technolgies and tools such such as HTML, CSS, React, Firebase and GitHub.  </p>
            </div>
        </section>
    );
};

export default Projects;