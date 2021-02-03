import React, {useEffect} from "react";
import Header from './components/Header'
import NameBanner from './components/NameBanner'
import About from './components/About'
import Main from './components/Main'
import ProjectCards from './components/ProjectCards'
import Footer from './components/Footer';
import Cipher from './components/cipher/Cipher';
import NewHead from './components/NewHead';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  useEffect(() => {
    console.log(`
+-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+
 W|e|l|c|o|m|e| |T|r|a|v|e|l|e|r|
+-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+`)
  }, [])
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Switch>
          <Route exact path='/' >
            <NewHead/>
            <NameBanner txt='WELCOME'/>
            <div className='spacer-sm'></div>
            <Cipher/>
            {/* <About/> */}
          </Route>
          {/* <Route path='/about'>
            <NameBanner txt='ABOUT'/>
            <Main />
          </Route> */}
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

export default App;
