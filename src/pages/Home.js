import React from 'react';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {Card} from "@material-ui/core";
import photo from '../assets/static/images/photo_cropped2.jpg';
import styled from "@material-ui/core/styles/styled";
import {NavLink} from 'react-router-dom';
import welcome from '../assets/static/images/welcome_cursive.png'

const MyButton = styled(Button)({
    color: 'white',
    background: '#d40830',
    opacity: '0.7',
    flex: '1', //makes it stretch to fill available space
    "&:hover": {
        opacity: '.85',
        background: '#8a0520'
    },
    borderStyle: 'solid',
    margin: '5px',
    border: '1px',
});

const MyCard = styled(Card)({
    height: '550px',
    width: '98%',
    display: 'flex',
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundImage: `url(${photo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '0px',
});

const ButtonBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: '10px',
    // flex: '1',
    marginRight: 'auto',
    marginLeft: 'auto',
});


const WelcomeImageBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    height: '80%',
    width: '80%'
});

export const Home = () => {
    return (
        <Box>
            <MyCard>
                <ButtonBox>
                    <NavLink component={MyButton} to="/resume">Resume</NavLink>
                    <NavLink component={MyButton} to="/research">Research</NavLink>
                    <NavLink component={MyButton} to="/projects">Projects</NavLink>
                </ButtonBox>
            </MyCard>
            <WelcomeImageBox>
                <img src={welcome} alt="Welcome"/>
            </WelcomeImageBox>
        </Box>

    )
};