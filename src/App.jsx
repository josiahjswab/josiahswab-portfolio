import React from "react";
import Header from './components/Header'
import Headervs2 from './components/Headervs2'
import Main from './components/Main'
import ProjectCards from './components/ProjectCards'
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Headervs2 />
      <ProjectCards />
      <Main />
      <Footer />
      {/* <Footer/> */}
    </div>
  );
}