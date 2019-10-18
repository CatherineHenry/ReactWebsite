import React from 'react';
import {Toolbar, List, ListItemText, ListItem, Card} from "@material-ui/core";
import styled from "@material-ui/core/styles/styled";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

const Nav = styled(Toolbar)({
    display: 'flex',
    minHeight: '35px',
    flexDirection: 'row',
    background: 'black',
    color: 'white',
    opacity: '0.9',
});

const ButtonBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    flex: '1'
});

const MyButton = styled(Button)({
    color: 'white',
    flex: '1', //makes it stretch to fill available space
    padding: 0,
    margin: 0,
    borderRadius:'0px',
    "&:hover": {
        // opacity: '.5',
        borderColor: 'white',
        border:'1px',
        borderStyle:'solid'
    },
});
export const Navbar = () => {
    return (
        <Nav>
            <ButtonBox>
                <NavLink component={MyButton} to="/">
                    <Typography variant="overline">
                        Home
                    </Typography>
                </NavLink>
                <NavLink component={MyButton} to="/resume">
                    <Typography variant="overline">
                        Resume
                    </Typography>
                </NavLink>
                <NavLink component={MyButton} to="/research">
                    <Typography variant="overline">
                        Research
                    </Typography>
                </NavLink>
                <NavLink component={MyButton} to="/projects">
                    <Typography variant="overline">
                        Projects
                    </Typography>
                </NavLink>
            </ButtonBox>
        </Nav>
    );
};