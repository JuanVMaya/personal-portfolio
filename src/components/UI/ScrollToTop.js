import classes from './ScrollToTop.module.css';

const ScrollToTop = (props) => {
    return (
        <button
            className={`${classes.scrollToTop}  ${props.scrollUp && classes.hideScrollToTop}`}
            onClick={(e) =>
                window.scrollTo(0, 0)
            }
        >

            <img
                src={require("../../assets/ScrollToTopArrow.svg").default}
                alt="Scroll to top" />
        </button>
    );
}

export default ScrollToTop;