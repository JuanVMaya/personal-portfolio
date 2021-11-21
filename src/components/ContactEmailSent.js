import React from "react";
import Modal from "./UI/Modal";
import classes from "./ContactEmailSent.module.css";

const ContactEmailSent = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <div className={classes.screenBody}>
                <div className={`${classes.screenBodyItem} ${classes.screenBodyItemLeft}`}>
                    <div className={classes.appTitle}>
                        <span>CONTACT</span>
                        <span>ME</span>
                    </div>
                    <div className={classes.appContact}>CONTACT INFO : +1 647-568-1890</div>
                </div>
                <div className={classes.screenBodyItem} >
                    <div className={classes.appRightGroup}>
                        <span>You message was sent succesfully</span>
                        <br />
                        <br />
                        <span>I will be in touch with you soon!</span>
                    </div>
                    <div className={classes.appRightGroupButtons}>
                        <button onClick={props.onClose} className={classes.appCloseButton}>CLOSE</button>
                    </div>
                </div>
            </div>
        </Modal>
    );

};
export default ContactEmailSent;