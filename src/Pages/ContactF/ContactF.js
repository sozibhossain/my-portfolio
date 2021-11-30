import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button, Container, Typography } from '@mui/material';

const ContactF = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rd2jy4e', 'template_abj1xyr', form.current, 'user_FHP70AL8q3HJqU9aMeNrn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    };
    return (
        <div style={{backgroundColor: "#070640"}}>
            <Container className="add-product" style={{backgroundColor: '#0B0952', paddingTop: '60px', paddingBottom: '50px'}}>
            <Typography variant="h3" gutterBottom component="div" style={{color: 'white', paddingBottom: '20px'}}>
                Contact Me
            </Typography>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="to_name" placeholder="Name"/>
                <input type="email" name="from_name" placeholder="Email"/>
                <textarea name="message" placeholder="Subject"/>
                <textarea name="message" placeholder="Message"/>
                <Button type="submit" value="Send" variant="contained" color="success" style={{height: '50px', width: '60%'}}>
                    Success
                </Button>
            </form>
            </Container>
        </div>
    );
};

export default ContactF;