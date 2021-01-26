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
            <NameBanner />
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/projects'>
            <Main />
            <ProjectCards />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
