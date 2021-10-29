import { useState } from 'react';
import ProjectCard from './UI/ProjectCard';
import classes from './Projects.module.css';
import Button from './UI/Button';
import backgroundDetail from '../assets/AboutBackground2.svg';

const ProjectData = [
    {
        id: '1',
        title: 'Personal Portfolio',
        thumbnail: require("../assets/PersonalPortfolio.png").default,
        altText: 'Thumbnail of personal portfolio',
        description: 'This website is a compilation of materials that exemplifies my beliefs, skills, qualifications, education, training and experiences. It provides insight into my personality and work ethic.This is a representation of self-taught all-in-one project. It includes technolgies and tools such such as Figma, HTML, CSS, React, Firebase and GitHub.',
        learnMoreLink: 'https://github.com/jvane1/personal-portfolio',
    },
    {
        id: '2',
        title: 'Arithmetic Arranger',
        thumbnail: require('../assets/ArithmeticArranger.png').default,
        altText: 'A person thinking while standing',
        description: 'Students in primary school often arrange arithmetic problems vertically to make them easier to solve. This project receives a list of strings that are arithmetic problems and returns the problems arranged vertically and side-by-side. The function should optionally take a second argument. When the second argument is set to True, the answers should be displayed.',
        learnMoreLink: 'https://replit.com/@jvane1/arithmetic-formatter#arithmetic_arranger.py',
    },
    {
        id: '3',
        title: 'Self-Driving Module',
        thumbnail: require('../assets/CyberworksT7.png').default,
        altText: 'Inside Circuitry in Tennant T7 ride-on floor scrubber',
        description: 'Cyberworks collaborates with Seneca Innovation and the School of Electronics & Mechanical Engineering Technology, Sustainable Seneca to develop a modular and flexible design compatible with multiple other floor cleaning models, which will enable Cyberworks to launch several new retrofit offerings to expand their customer base. Through the School of Electronics & Mechanical Engineering and the Applied Research Department, we received funding to develop the autonomous module compatible with multiple machines.',
        learnMoreLink: 'https://www.senecacollege.ca/news-and-events/seneca-news/robotic-floor-cleaner-soon-to-drive-itself-at-seneca.html',
    },
    {
        id: '4',
        title: 'Personal Portfolio',
        thumbnail: require("../assets/Thinker.svg").default,
        altText: 'Thumbnail of personal portfolio',
        description: 'This website is a compilation of materials that exemplifies my beliefs, skills, qualifications, education, training and experiences. It provides insight into my personality and work ethic.This is a representation of self-taught all-in-one project. It includes technolgies and tools such such as Figma, HTML, CSS, React, Firebase and GitHub.',
        learnMoreLink: 'https://github.com/jvane1/personal-portfolio',
    },
    {
        id: '5',
        title: 'Portfolio',
        thumbnail: require("../assets/PersonalPortfolio.png").default,
        altText: 'Thumbnail of personal portfolio',
        description: 'This website is a compilation of materials that exemplifies my beliefs, skills, qualifications, education, training and experiences. It provides insight into my personality and work ethic.This is a representation of self-taught all-in-one project. It includes technolgies and tools such such as Figma, HTML, CSS, React, Firebase and GitHub.',
        learnMoreLink: 'https://github.com/jvane1/personal-portfolio',
    },
];

const Projects = props => {
    const [viewAll, setViewAll] = useState(false);
    var projectsList = ProjectData.slice(0, 3);
    {
        viewAll ? projectsList = ProjectData.map((project) => (
            <ProjectCard key={project.id} className={classes.card}>
                <h3>{project.title}</h3>
                <a href={project.learnMoreLink} target="_blank"><img className={classes.thumbnail} src={project.thumbnail} alt={project.altText} /></a>
                <p className={classes.projectDescription}>{project.description} </p>
                <div className={classes.learnMoreContainer}><a href={project.learnMoreLink} target="_blank"><Button>Learn More</Button></a></div>
            </ProjectCard>
        )): projectsList = ProjectData.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} className={classes.card}>
                <h3>{project.title}</h3>
                <a href={project.learnMoreLink} target="_blank"><img className={classes.thumbnail} src={project.thumbnail} alt={project.altText} /></a>
                <p className={classes.projectDescription}>{project.description} </p>
                <div className={classes.learnMoreContainer}><a href={project.learnMoreLink} target="_blank"><Button>Learn More</Button></a></div>
            </ProjectCard>
        ))
    };
    const onViewToggle = () => {
        setViewAll(true^viewAll);
    }
    return (
        <section className={`${classes.projectsPage} ${viewAll ? classes.showMore : classes.showLess}`}>
            <h1 className={classes.sectionTitle}>Projects</h1>
            <section className={classes.cardSection}>
                {projectsList}
            </section>
            <div className={classes.viewAllButton}><Button onClick={onViewToggle}>{viewAll? 'Show Less':'View All'}</Button></div>
            <img className={classes.backgroundDetail} src={backgroundDetail} />
            <div className={classes.circle1} />
            <div className={classes.circle2} />
        </section>
    );
};

export default Projects;