import classes from './About.module.css'
import disciplines from '../assets/Disciplines.svg'
import backgroundDetail from '../assets/AboutBackground.svg'

const About = (props) => {

    return (
        <section className={classes.aboutPage} ref={props.myRef}>
            <h1 className={classes.sectionTitle}>About</h1>
            <div className={classes.description}>
                <p className={classes.aboutMe}>
                    Result-driven and motivated software developer with demonstrated experience in both business and software development.
                    Quick learner and easy adopter to new technologies and existing projects. Proven record of collaborating in real-world web applications
                    accountable for $1.75M in annual revenue.
                </p>
                <br />
                <h4>Skills / Technologies</h4>
                <br />
                <ul className={classes.skillsColumns}>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Python</li>
                    <li>GitHub</li>
                    <li>Figma</li>
                    <li>C</li>
                    <li>Salesforce</li>
                    <li>MS Office Suite</li>
                </ul>
            </div>
            <img className={classes.disciplines} src={disciplines} alt='A website mock-up, a circuit diagram and a mobile app' />
            <img className={classes.backgroundDetail} src={backgroundDetail} alt='A geometric background representing a downhill landscape' />
        </section>
    );
};
export default About;