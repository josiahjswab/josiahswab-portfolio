import React from "react";
import Header from './components/Header'
import NameBanner from './components/NameBanner'
import Main from './components/Main'
import ProjectCards from './components/ProjectCards'
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NameBanner />
      <Main />
      <ProjectCards />
      <Footer />
    </div>
  );
}
