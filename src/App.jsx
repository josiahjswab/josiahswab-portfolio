import React from "react";
import Header from './components/Header'
import Main from './components/Main'
import ProjectCards from './components/ProjectCards'

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