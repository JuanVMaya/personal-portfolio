import { useState } from 'react';
import ProjectCard from './UI/ProjectCard';
import classes from './Projects.module.css';
import Button from './UI/Button';
import backgroundDetail from '../assets/AboutBackground2.svg';
// import axios from 'axios';


const ProjectData = [
    {
        id: '1',
        title: 'Spacestagram',
        thumbnail: require("../assets/spacestagramApp.png").default,
        altText: 'Preview Spacestagram App',
        description: 'Challenge to build a webpage that can pull images using NASA\'s Astronomy Picture of the Day API , and allow the user to interact (“like”, “unlike”, etc) with their favourite images. This was created with React. About APOD (Astronomy Picture of the Day API): One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications.',
        learnMoreLink: 'https://juanvmaya.github.io/spacestagram/',
    },
    {
        id: '2',
        title: 'Poker Game',
        thumbnail: require("../assets/PokerGame.jpeg").default,
        altText: 'Thumbnail of personal portfolio',
        description: 'This project is a version of an automated poker game for 2-5 players. It provides insight into the experience with python programming language. Once run, the programe will prompt for the number of players that will play, simulate the game and list the winners alogn with the best hand. The game does have a list of the possible hands and list the player id winner and the winning hand',
        learnMoreLink: 'https://github.com/JuanVMaya/PokerGame/blob/master/PokerGame.py',
    },
    {
        id: '3',
        title: 'Self-Driving Module',
        thumbnail: require('../assets/CyberworksT7.png').default,
        altText: 'Inside Circuitry in Tennant T7 ride-on floor scrubber',
        description: 'Cyberworks collaborates with Seneca Innovation and the School of Electronics & Mechanical Engineering Technology, Sustainable Seneca to develop a modular and flexible design compatible with multiple other floor cleaning models, which will enable Cyberworks to launch several new retrofit offerings to expand their customer base. Through the research, we received developed the autonomous module compatible with multiple machines.',
        learnMoreLink: 'https://www.senecacollege.ca/news-and-events/seneca-news/robotic-floor-cleaner-soon-to-drive-itself-at-seneca.html',
    },
    {
        id: '4',
        title: 'Arithmetic Arranger',
        thumbnail: require('../assets/ArithmeticArranger.png').default,
        altText: 'A person thinking while standing',
        description: 'Students in primary school often arrange arithmetic problems vertically to make them easier to solve. This project receives a list of strings that are arithmetic problems and returns the problems arranged vertically and side-by-side. The function should optionally take a second argument. When the second argument is set to True, the answers should be displayed.',
        learnMoreLink: 'https://replit.com/@jvane1/arithmetic-formatter#arithmetic_arranger.py',
    },
    {
        id: '5',
        title: 'Maze Generator',
        thumbnail: require("../assets/MazeGenerator.jpg").default,
        altText: 'Thumbnail of the HTML python-generated form',
        description: 'This project  creates a maze based on a python  form. In the form, the user can choose the size (width and length), background color and text color. The program will calculate the best path to the final destination, show the visual path solution in an HTML generated page and send the coordinates of the best path to the email entered in the form. ',
        learnMoreLink: 'https://github.com/JuanVMaya/MazeGenerator/blob/main/maze.py',
    },
    {
        id: '6',
        title: 'Personal Portfolio',
        thumbnail: require("../assets/PersonalPortfolio.png").default,
        altText: 'Thumbnail of personal portfolio',
        description: 'This website is a compilation of materials that exemplifies my beliefs, skills, qualifications, education, training and experiences. It provides insight into my personality and work ethic. This is a representation of the self-taught all-in-one project. It includes technologies and tools such as Figma, HTML, CSS, React, Firebase and GitHub.',
        learnMoreLink: 'https://github.com/JuanVMaya/personal-portfolio',
    },
];

const Projects = props => {
    const [viewAll, setViewAll] = useState(false);
    var projectsList = ProjectData.slice(0, 3);
    {
        viewAll ? projectsList = ProjectData.map((project) => (
            <ProjectCard key={project.id} className={classes.card}>
                <h3>{project.title}</h3>
                <a href={project.learnMoreLink} target="_blank" className={classes.thumbnailContainer}><img className={classes.thumbnail} src={project.thumbnail} alt={project.altText} /></a>
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
            <div className={classes.viewAllButton}><Button onClick={onViewToggle}>{viewAll? 'Show Fewer':'View All'}</Button></div>
            <img className={classes.backgroundDetail} src={backgroundDetail} />
            <div className={classes.circle1} />
            <div className={classes.circle2} />
        </section>
    );
};

export default Projects;