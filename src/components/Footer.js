import classes from "./Footer.module.css";
import Button from "./UI/Button";
import { SocialIcon } from 'react-social-icons';
import resume from "../assets/JuanVanegas-Resume.pdf";

const Footer = () => {
    return (
        <footer className={classes.footerContainer}>
            <div className={classes.footerContent}>
            <div className={classes.leftContainer}>
                    <div className={classes.socialLogosContainer} >
                        <div className={classes.logoContainer}>
                            <SocialIcon url="mailto:juanjovanegas21@gmail.com" bgColor="#c7c8c9" target="_blank" style={{height:35, width:35}} />
                        </div>
                        <div className={classes.logoContainer}>
                            <SocialIcon url="https://twitter.com/JuanVMaya" bgColor="#c7c8c9" target="_blank" style={{height:35, width:35}}  />
                        </div>
                        <div className={classes.logoContainer}>
                            <SocialIcon url="https://github.com/juanvmaya" bgColor="#c7c8c9" target="_blank" style={{height:35, width:35}}  />
                        </div>
                        <div className={classes.logoContainer}>
                            <SocialIcon url="https://www.linkedin.com/in/juan-jose-vanegas-maya/" target="_blank" bgColor="#c7c8c9" style={{height:35, width:35}}  />
                        </div>
                    </div>
                    
                    <a href={resume} target="_blank" rel="noopener noreferrer" style ={{textDecoration:"None"}}><Button>Check Resume</Button></a>
                </div>
                <div className={classes.rightContainer}>
                    <p>Juan Jose Vanegas Maya</p>
                    <p>Toronto, ON. Canada</p>
                    <p>+1 (647) 568 - 1890</p>
                </div>
                
            </div>
            <div className={classes.copyrightSection}>© Copyright 2021</div>
        </footer>
    );
}
export default Footer