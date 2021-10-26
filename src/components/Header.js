import classes from './Header.module.css'
import Button from './UI/Button';

const Header = (props) => {
    return (
        <header className={classes.appHeader}>
            <h1 className={classes.logo}>JM</h1>
            <nav>
                <a className={classes.navLink} onClick={props.onScrollAbout}>About</a>
                <a className={classes.navLink} onClick={props.onScrollProjects}>Projects</a>
                <a className={classes.navLink} href="#">Blog</a>
                <Button onClick={props.onShowContactForm}>Contact</Button>
            </nav>
        </header>
    );
};
export default Header;