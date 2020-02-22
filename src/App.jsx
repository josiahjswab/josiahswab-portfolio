import React from "react";
import Header from './components/Header'
import Headervs2 from './components/Headervs2'
import Main from './components/Main'
import ProjectCards from './components/ProjectCards'

export default function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Headervs2 />
      <Main />
      <ProjectCards />
      {/* <Footer/> */}
    </div>
  );
}