import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.appHeader}>
            <h1 className={classes.logo}>JVM</h1>
            <nav>
                <a className={classes.navLink} href="#">About</a>
                <a className={classes.navLink} href="#">Projects</a>
                <a className={classes.navLink} href="#">Blog</a>
                <button class={classes.contactButton}>
                    <span>CONTACT</span>
                </button>
            </nav>
        </header>
    );
};
export default Header;