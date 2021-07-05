import thinker from '../assets/Thinker.svg'
import classes from './About.module.css'
import disciplines from '../assets/Disciplines.svg'

const About = () => {
    return (
        <section className={classes.landingPage}>
            <div className={classes.description}>
                <h1>About</h1>
                <p className={classes.aboutMe}>
                    Results-oriented college graduate with an Advanced Diploma in Electronics Engineering
                    Technology (3.9 GPA), working in the Electronics Manufacturing Industry. Aiming to leverage
                    academic experience, proven knowledge of various development disciplines and modern development
                    tools to build the future of the internet.
                </p>
            </div>
            <img className={classes.disciplines} src={disciplines} alt='A person beside a world of spinning geometric figures' />
        </section>
    );
};
export default About;