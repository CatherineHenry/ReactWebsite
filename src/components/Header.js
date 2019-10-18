import React from 'react';
import {Toolbar, List, ListItemText, ListItem, Card} from "@material-ui/core";
import styled from "@material-ui/core/styles/styled";
import Typography from "@material-ui/core/Typography";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Box from "@material-ui/core/Box";

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
            <Typography variant="h4">
                Catherine Henry</Typography>
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