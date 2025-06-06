
import './App.css'


import Sidebar from './components/Sidebar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hobbies from './components/Hobbies';

const App = () => {
  return (
    <>
  
  <Sidebar />
  {/* Main Content */}
  <div className="ml-16 p-6">
    <Header />
    <About  />
    <Skills />
    <Projects />
    <Experience />
    <Hobbies />
    <Contact /> 
    <Footer />
  </div>
</>
  );
};

export default App;
