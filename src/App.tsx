import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Carousel from "./components/Carousel";
import Hobbies from "./components/Hobbies";

const App: React.FC = () => (
  <div className="app-root">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Hobbies />
    <Carousel />
    <Contact />
    <Footer />
  </div>
);

export default App;
