import React from 'react';
import {Navbar} from "../components/Navbar";
import {Card} from "@material-ui/core";
import {FullPageWrapper} from "../components/FullPageWrapper";
import styled from "@material-ui/core/styles/styled";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";

const MyContainer = styled(Container)({
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
});

const MyCardMedia = styled(CardMedia)({
    height: '400px',
    width: '600px',
});

export const Research = () => {
    return (<FullPageWrapper className="Research">
        <Navbar/>

        <MyContainer>
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        Permutation Sorting Games (Spring 2013- Fall 2014)</Typography>
                    <Typography variant="overline">
                        Worked with Dr. Marion Scheepers on the development of
                        a program used to reproduce the decryption process of ciliate cells according to the
                        mathematical model for
                        decryption.
                        <br/>
                        <a target="_blank"
                           href=" https://scholarworks.boisestate.edu/as_14/39/"> https://scholarworks.boisestate.edu/as_14/39/</a>
                    </Typography>
                    <a target="_blank" href="https://storage.googleapis.com/chenry-bucket/CiliatesResearchPoster.png">
                        <MyCardMedia
                            image={"https://storage.googleapis.com/chenry-bucket/CiliatesResearchPoster.png"}
                            title="Smart Dongle Research Poster"
                        />
                    </a>


                </CardContent>
            </Card>
        </MyContainer>
        <MyContainer>
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        Making the SmartDongle Smarter (Summer 2014) </Typography>
                    <Typography variant="overline">
                        Worked with Dr. Liljana Babinkostova, Brandon Barker, and Dr.
                        Marion Scheepers to investigate the security of the SmartDongle device produced by Microworks.
                    </Typography>
                    <a href="https://storage.googleapis.com/chenry-bucket/SmartDongleResearchPoster.png"
                       target="_blank">
                        <MyCardMedia
                            image={"https://storage.googleapis.com/chenry-bucket/SmartDongleResearchPoster.png"}
                            title="Smart Dongle Research Poster"
                        /></a>
                </CardContent>
            </Card>

        </MyContainer>

    </FullPageWrapper>)
};