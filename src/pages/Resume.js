import React from 'react';
import {Navbar} from "../components/Navbar";
import {FullPageWrapper} from "../components/FullPageWrapper";


export const Resume = () => {
    return (<FullPageWrapper>
        <Navbar/>

        <object width="100%" height="100%"
                data="https://storage.googleapis.com/my-big-ole-bucket/public%20copy%20of%20resume.pdf"
                type="application/pdf"/>
    </FullPageWrapper>)
}