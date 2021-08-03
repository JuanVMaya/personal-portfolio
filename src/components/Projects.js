import Card from './UI/Card';
import classes from './Projects.module.css';
import Thinker from '../assets/Thinker.svg';
import Button from './UI/Button';
import backgroundDetail from '../assets/AboutBackground2.svg';

const ProjectData = [
    {
        id: 'm1',
        title: 'Personal Portfolio',
        thumbnail: require('../assets/Thinker.svg'),
        altText: 'A person thinking while standing',
        description: 'This website is a compilation of materials that exemplifies my beliefs, skills, qualifications, education, training and experiences. It provides insight into your personality and work ethic.This is a representation of self-taught all-in-one project. It includes technolgies and tools such such as HTML, CSS, React, Firebase and GitHub.',
    },
    {
        id: 'm2',
        title: 'Personal Portfolio',
        thumbnail: require('../assets/Thinker.svg'),
        altText: 'A person thinking while standing',
        description: 'This website is a compilation of materials that exemplifies my beliefs, skills, qualifications, education, training and experiences. It provides insight into your personality and work ethic.This is a representation of self-taught all-in-one project. It includes technolgies and tools such such as HTML, CSS, React, Firebase and GitHub.',
    },
    {
        id: 'm2',
        title: 'Personal Portfolio',
        thumbnail: require('../assets/Thinker.svg'),
        altText: 'A person thinking while standing',
        description: 'This website is a compilation of materials that exemplifies my beliefs, skills, qualifications, education, training and experiences. It provides insight into your personality and work ethic.This is a representation of self-taught all-in-one project. It includes technolgies and tools such such as HTML, CSS, React, Firebase and GitHub.',
    },

];

const Projects = props => {
    const projectsList = ProjectData.map((project) => (
        <Card id={project.id} className={classes.card}>
            <h3>{project.title}</h3>
            <img className={classes.thumbnail} src={Thinker} alt={project.altText} />
            <p className={classes.projectDescription}>{project.description} </p>
            <div className={classes.learnMoreContainer}><Button>Learn More</Button></div>
        </Card>
    ));
    return (
        <section className={classes.projectsPage}>
            <h1 className={classes.sectionTitle}>Projects</h1>
            {projectsList}
            <img className={classes.backgroundDetail} src={backgroundDetail} alt='A geometric background representing a downhill landscape' />
            <div className={classes.circle1}/>
            <div className={classes.circle2}/>
        </section>
    );
};

export default Projects;