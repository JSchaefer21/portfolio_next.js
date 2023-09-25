import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import formular from '../styles/Formular.module.css'

function Formular(){

    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const [message, setMessage] = useState(null)
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        if(e.target.user_name.value === '') {
            setMessage('Please write a name')
            return
        } else if(!EMAIL_REGEX.test(e.target.user_email.value)) {
            setMessage('Email is not valid')
            return
        } else if(e.target.message.value === '') {
            setMessage('Message is empty')
            return
        }
    
        emailjs.sendForm('contact_service', 'contact_form', form.current, 'gG8mWVwYo5nbbNy7d')
            .then((result) => {
                setMessage('Email sended')
                e.target.reset()
            }, (error) => {
                setMessage('Error: Email was not send')
        })
    }

    return <form className={formular.main} ref={form} onSubmit={sendEmail}>
        <h1 className={formular.title}>CONTACT</h1>

        <input className={formular.input} type='text' name='user_name' placeholder=' Name'/>
        <input className={formular.input} type='text' name='user_email' placeholder=' Email'/>
        <textarea className={formular.text} name='message' placeholder=' Your message'/>
        <div className={formular.footer}>
            <input className={formular.button} type='submit' value='Send' />
            {message && <h2 className={formular.info}>{message}</h2>}
        </div>
    </form>
} 

export default Formular