import React, { useState } from "react";
import Modal from "./UI/Modal";
import classes from "./ContactForm.module.css";
import Button from "./UI/Button";

const ContactForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const submit = () => {
        if (name && email && message) {
            // TODO - send mail
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
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
                <div className={classes.screenBodyItem}>
                    <div class="app-form">
                        <div className={classes.appFormGroup}>
                            <input className={classes.appFormControl} type="text" placeholder="NAME" value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div className={classes.appFormGroup}>
                            <input className={classes.appFormControl} type="email" placeholder="EMAIL" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className={`${classes.appFormGroup} ${classes.appFormGroupMessage}`}>
                            <textarea className={classes.appFormControl} placeholder="MESSAGE" value={message} onChange={e => setMessage(e.target.value)}/>
                        </div>
                        <div className={`${classes.appFormGroup} ${classes.appFormGroupButtons}`}>
                            <button onClick={props.onClose} className={classes.appFormButton}>CANCEL</button>
                            <button className={classes.appFormButton}>SEND</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <input className={classes.input} type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input className={classes.input} type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
            <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button onClick={submit}>Send Message</button>
            <button onClick={props.onClose}>Close</button>        
            <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
             */}
        </Modal>
    );
};
export default ContactForm;