import React from "react";
import Header from './components/Header'
import NameBanner from './components/NameBanner'
import About from './components/About'
import Main from './components/Main'
import ProjectCards from './components/ProjectCards'
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Switch>
          <Route exact path='/' >
            <NameBanner txt='WELCOME'/>
            <About/>
          </Route>
          <Route path='/about'>
            <NameBanner txt='ABOUT'/>
            <Main />
          </Route>
          <Route path='/projects'>
            <NameBanner txt='PROJECTS'/>
            <ProjectCards />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
