import React from 'react';
import {Toolbar} from "@material-ui/core";
import styled from "@material-ui/core/styles/styled";
import Typography from "@material-ui/core/Typography";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Box from "@material-ui/core/Box";
import {NavLink, Router} from "react-router-dom";
import Button from "@material-ui/core/Button";

const Nav = styled(Toolbar)({
    height: '50px',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
});

const TodaysInfo = styled(Box)({
    display: 'flex',
    marginLeft: 'auto',
    paddingInline: '20px'
});
const Weather = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    flex: '1',
    paddingLeft: '30px'
});

const WeatherIcon = styled(WbSunnyIcon)({
    paddingLeft: '10px',
    height: '100%'
});

export const Header = () => {

    return (
        <Nav>

                <NavLink component={Button} to="/">
                    <Typography variant="h4">
                        Catherine Henry</Typography>
                </NavLink>

            <TodaysInfo>
                <Typography variant="h6">
                    Saturday, Oct 2 </Typography>
                <Weather>
                    <Typography variant="h6">
                        198°C
                    </Typography>
                    <WeatherIcon height="100%"/>
                </Weather>
            </TodaysInfo>
        </Nav>
    );
};