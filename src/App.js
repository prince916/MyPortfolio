import './App.css';
import Banner from './components/banner/Banner';
import Contact from './components/contact/Contact';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import FooterBottom from './components/footer/FooterBottom';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Certificates from './components/certificates/Certificates';

function App() {
  return(
    <div className='w-full h-auto bg-bodyColor text-lightText'>
      <div className='max-w-screen-xl mx-auto p-2'>
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Certificates />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
