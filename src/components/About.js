import classes from './About.module.css'
import disciplines from '../assets/Disciplines.svg'
import backgroundDetail from '../assets/AboutBackground.svg'

const About = () => {
    return (
        <section className={classes.aboutPage}>
            <h1 className={classes.sectionTitle}>About</h1>
            <div className={classes.description}>
                <p className={classes.aboutMe}>
                    Results-oriented college graduate with an Advanced Diploma in Electronics Engineering
                    Technology (3.9 GPA), working in the Electronics Manufacturing Industry. Aiming to leverage
                    academic experience, proven knowledge of various development disciplines and modern development
                    tools to build the future of the internet.
                </p>
            </div>
            <img className={classes.disciplines} src={disciplines} alt='A person beside a world of spinning geometric figures' />
            <img className={classes.backgroundDetail} src={backgroundDetail} alt='A geometric backrgound representing a downhill landscape' />
        </section>
    );
};
export default About;