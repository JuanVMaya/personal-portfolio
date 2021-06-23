import thinker from '../assets/Thinker.svg'
import classes from './Landing.module.css'

const Landing = () => {
    return (
        <section className={classes.landingPage}>
            <div className={classes.myDescription}>
                <p>Hello, I'm</p>
                <h1>Juan Maya</h1>
                <p>_____ Developer</p>
            </div>
            <img className={classes.thinkerImg} src={thinker} alt='A person beside a world of spinning geometric figures' />
        </section>
    );
}
export default Landing;