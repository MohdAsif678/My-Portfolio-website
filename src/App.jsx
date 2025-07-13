import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualifications from './components/qualifications/Qualifications';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer';
import ScrollUP from './components/scrollup/ScrollUP';

function App() {

  return (
   <>
    <Header/>
    <main className="main">
       <Home/>
       <About/>
       <Skills/>
       <Services/>
       <Qualifications/>
       <Work/>
       <Contact/>
    </main>

    <Footer/>
    <ScrollUP/>
   </>
  )
}

export default App
