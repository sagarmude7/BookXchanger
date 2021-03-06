import Navbar from '../Navbar/Navbar'
import { TextField,Divider, Card,CardMedia, Container,Avatar , Button, Typography, Paper } from '@material-ui/core';
import useStyles from "./styles.js";
import './profile.css'
import React from 'react'
import img from './profilepic.png';
import EditIcon from '@material-ui/icons/Edit';
import PageviewIcon from '@material-ui/icons/Pageview';
import LockIcon from '@material-ui/icons/Lock';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const Profile = () => {

    const classes = useStyles();

    const user = JSON.parse(localStorage.getItem('profile'));
    console.log(user.profile.profilePic);

    return (
        <div className={classes.container}>
            <Navbar></Navbar>

            <Typography className={classes.heading} variant="h4">My Profile</Typography>

            <Container className={classes.head}>
            
                <img className={classes.pic} src={img} alt="M" width="175" height="190"></img>
                <Typography variant="body1" color="textPrimary" className={classes.headUser} variant="h6">{user.profile.name}</Typography>
            
                <Container className={classes.headRight}>

                    <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    endIcon={<LockIcon/>}>Change Password</Button>

                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<LibraryBooksIcon/>}>My Ads</Button>
                </Container>  

            </Container>

            
            
            
            <Container className={classes.body}>

                <Typography className={classes.bodyHead}>Manage Your Profile</Typography>

                <Container className={classes.bodyFields}>
                    <Typography className={classes.bodyText} variant="h6">Your Name :</Typography>
                    <Typography className={classes.bodyTextValue} variant="h6">{user.profile.name}</Typography>
                </Container>
                    <Divider></Divider>

                <Container className={classes.bodyFields}>
                    <Typography className={classes.bodyText} variant="h6">Email Address :</Typography>
                    <Typography className={classes.bodyTextValue} variant="h6">{user.profile.email}</Typography>
                </Container>
                    <Divider></Divider>

                <Container className={classes.bodyFields}>
                    <Typography className={classes.bodyText} variant="h6">College Name :</Typography>
                    <Typography className={classes.bodyTextValue} variant="h6">{user.profile.college}</Typography>
                </Container>
                    <Divider></Divider>

                <Container className={classes.bodyFields}>
                    <Typography className={classes.bodyText} variant="h6">Location :</Typography>
                    <Typography className={classes.bodyTextValue} variant="h6">{user.profile.location}</Typography>
                </Container>
                    <Divider></Divider>

                <Container className={classes.bodyFields}>
                    <Typography className={classes.bodyText} variant="h6">Number of Ads Sold :</Typography>
                    <Typography className={classes.bodyTextValue} variant="h6">{user.profile.SoldAds}</Typography>
                </Container>

                <Typography className={classes.bodyText}></Typography>
                    

            </Container>

            <Avatar className={`${classes.pink } ${classes.Edit} ${classes.large}`}>
                <EditIcon/>
            </Avatar>


            
           
        </div>
    )
}

export default Profile;



