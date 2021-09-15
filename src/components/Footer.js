import classes from "./Footer.module.css";
import Button from "./UI/Button";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <footer className={classes.footerContainer}>
            <div className={classes.footerContent}>
                <div className={classes.leftContainer}>
                    <p>Juan Jose Vanegas Maya</p>
                    <p>Toronto, ON. Canada</p>
                    <p>+1 (647) 568 - 1890</p>
                </div>
                <div className={classes.rightContainer}>
                    <div className={classes.socialLogosContainer} >
                        <div className={classes.logoContainer}>
                            <SocialIcon url="mailto:juanjovanegas21@gmail.com" bgColor="#c7c8c9" className={classes.socialIcon}/>
                        </div>
                        <div className={classes.logoContainer}>
                            <SocialIcon url="https://twitter.com/JuanVMaya" bgColor="#c7c8c9" className={classes.socialIcon}/>
                        </div>
                        <div className={classes.logoContainer}>
                            <SocialIcon url="https://github.com/jvane1" bgColor="#c7c8c9" className={classes.socialIcon}/>
                        </div>
                        <div className={classes.logoContainer}>
                            <SocialIcon url="https://www.linkedin.com/in/juan-jose-vanegas-maya/" bgColor="#c7c8c9" className={classes.socialIcon}/>
                        </div>
                        
                    </div>
                    <Button className={classes.downloadResume}>Download Resume</Button>
                </div>
            </div>
            <div className={classes.copyrightSection}>© Copyright 2021</div>
        </footer>
    );
}
export default Footer