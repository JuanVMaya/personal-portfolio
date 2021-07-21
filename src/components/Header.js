import classes from './Header.module.css'
import Button from './UI/Button';

const Header = () => {
    return (
        <header className={classes.appHeader}>
            <h1 className={classes.logo}>JVM</h1>
            <nav>
                <a className={classes.navLink} href="#">About</a>
                <a className={classes.navLink} href="#">Projects</a>
                <a className={classes.navLink} href="#">Blog</a>
                <Button>Contact</Button>
            </nav>
        </header>
    );
};
export default Header;