import React from 'react';
import {Home} from './pages/Home';
import {Header} from "./components/Header";
import {Resume} from "./pages/Resume";
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import {Projects} from "./pages/Projects";
import {Research} from "./pages/Research";
import {FullPageWrapper} from "./components/FullPageWrapper";

export const App = () => {
    return (
        <FullPageWrapper>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/resume" component={Resume}/>
                    <Route exact path="/research" component={Research}/>
                    <Route path="/projects" component={Projects}/>
                </Switch>
            </Router>
        </FullPageWrapper>);
};


