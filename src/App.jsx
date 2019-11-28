import React from "react";
import Header from './components/Header'
import Main from './components/Main'
import ProjectCards from './components/blocks/ProjectCards'

export default function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <ProjectCards />
      <Main />
      {/* <Footer/> */}
    </div>
  );
}