import React from 'react'
import {Footer} from "../components/Footer";
import {FullPageWrapper} from "../components/FullPageWrapper";
import Card from "@material-ui/core/Card";
import styled from "@material-ui/core/styles/styled";
import Typography from "@material-ui/core/Typography";

const MyCard = styled(Card)({
    height: '100%',
    width: '98%',
    display: 'flex',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: '0px',
});

const SubtleText = styled(Typography)({
    color:'#dcd6d7',
    margin:'auto'
})
export const Projects = () => {
    return (
        <FullPageWrapper className="Projects">
            <MyCard>
                <SubtleText variant="h1">
                CHECK BACK SOON
            </SubtleText></MyCard>
            <Footer/>
        </FullPageWrapper>)
}