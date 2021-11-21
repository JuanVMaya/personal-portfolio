import React, { useState, useRef, Fragment } from "react";
import Modal from "./UI/Modal";
import classes from "./ContactForm.module.css";
import emailjs from 'emailjs-com';
import ContactEmailSent from "./ContactEmailSent";

const ContactForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const form = useRef();

    const submitFormHandler = (e) => {
        e.preventDefault();

        if (name && email && message) {
            emailjs.sendForm('service_p0y7uws', 'contact_form', form.current, 'user_iJb8qA4UoRwIwPoCnoZVv')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
        console.log(emailSent);
    }
    return (
        <Fragment>
            {emailSent ?
                <ContactEmailSent onClose={props.onClose} />
                :
                <Modal onClose={props.onClose}>
                    <div className={classes.screenBody}>
                        <div className={`${classes.screenBodyItem} ${classes.screenBodyItemLeft}`}>
                            <div className={classes.appTitle}>
                                <span>CONTACT</span>
                                <span>ME</span>
                            </div>
                            <div className={classes.appContact}>CONTACT INFO : +1 647-568-1890</div>
                        </div>
                        <form ref={form} className={classes.screenBodyItem} onSubmit={submitFormHandler}>
                            <div className={classes.appFormGroup}>
                                <input className={classes.appFormControl} type="text" placeholder="NAME" value={name} name="from_name" onChange={e => setName(e.target.value)} />
                            </div>
                            <div className={classes.appFormGroup}>
                                <input className={classes.appFormControl} type="email" placeholder="EMAIL" value={email} name="user_email" onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className={`${classes.appFormGroup} ${classes.appFormGroupMessage}`}>
                                <textarea className={classes.appFormControl} placeholder="MESSAGE" value={message} name="message" onChange={e => setMessage(e.target.value)} />
                            </div>
                            <div className={`${classes.appFormGroup} ${classes.appFormGroupButtons}`}>
                                <button onClick={props.onClose} className={classes.appFormButton}>CANCEL</button>
                                <button className={classes.appFormButton} type="submit">SEND</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            }
        </Fragment >
            );
};
export default ContactForm;