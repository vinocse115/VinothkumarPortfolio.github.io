import About from './Component/About';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';
import Contact from "./Component/Contact"
import Services from './Component/Services';
import Projects from './projects/Projects';
import { Route, Routes } from 'react-router-dom';
import Resume from './Component/Resume';
import ProjectDisplay from './projects/ProjectDisplay';

const App = () =>{
  return (
    <>
    <Header/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/resume" element={<Resume/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/project/:id" element={<ProjectDisplay />} />
    <Route path="/contact" element={<Contact/>}/>
</Routes>
<div>
<Footer/>
</div>
  </>
  );
}

export default App;
