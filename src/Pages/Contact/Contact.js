import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import './Contact.css';
import emailjs from 'emailjs-com';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


// service_rd2jy4e

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const form = useRef();

    const onSubmit = data => {
        console.log(data)
        reset();
        emailjs.sendForm('service_rd2jy4e', 'template_abj1xyr', form.current, 'user_FHP70AL8q3HJqU9aMeNrn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    // onSubmit={handleSubmit(onSubmit)}

    return (
        <div style={{backgroundColor: '#070640', paddingTop: '50px', paddingBottom: '50px'}}>
            <Typography variant="h2" gutterBottom component="div" style={{textAlign: 'center', color: 'white', padding: '30px'}}>
                Let’s Talk
            </Typography>
            <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm= {8} md={8} style={{backgroundColor: '#0B0952', height: '500px'}}>
                    
                        <Container className="add-product">
                            <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'center', color: 'white', padding: '10px'}}>
                                Get In Touch
                            </Typography>
                            <form onSubmit={handleSubmit(onSubmit)}  ref={form}>
                                <input {...register("to_name", { required: true, maxLength: 20 })} placeholder="Name" />
                                <input {...register("from_name")} placeholder="Email"/>
                                <input {...register("message")} placeholder="Subject"/>
                                <input {...register("message")} placeholder="Message"/>
                                <Button type="submit" variant="contained" color="success" style={{height: '50px', width: '60%'}}>
                                    Success
                                </Button>
                            </form>
                        </Container>
                    
                    </Grid>
                    <Grid item xs={4} sm= {8} md={4}>
                    
                        <Grid item xs={12} style={{marginBottom: '10px'}}>
                            <Item style={{backgroundColor: '#0B0952'}}>
                                <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'left', color: 'white'}}>
                                    South Kamalapur Dhaka, 1212
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'left', color: 'white'}}>
                                <AddLocationAltIcon style={{fontSize: '75px'}}/> Office Address
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} style={{marginBottom: '10px'}}>
                            <Item style={{backgroundColor: '#0B0952'}}>
                                <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'left', color: 'white'}}>
                                    sozibhossain69@gmail.com
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'left', color: 'white'}}>
                                <MailOutlineIcon style={{fontSize: '75px'}}/> Official Mail
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} style={{marginBottom: '10px'}}>
                            <Item style={{backgroundColor: '#0B0952'}}>
                                <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'left', color: 'white'}}>
                                    +880-1789903862
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'left', color: 'white'}}>
                                <HeadphonesIcon style={{fontSize: '75px'}}/> Official Phone
                                </Typography>
                            </Item>
                        </Grid>
                    
                    </Grid>
                </Grid>
            </Box>
            </Container>
        </div>
    );
};

export default Contact;