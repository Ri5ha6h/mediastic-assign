import BeforeCall from './components/BeforeCall';
import Contact from './components/Contact';
import Cover from './components/Cover';
import DoAll from './components/DoAll';
import Driving from './components/Driving';
import Fast from './components/Fast';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='relative font-sora'>
      <Navbar />
      <Cover />
      <DoAll />
      <Fast />
      <Driving />
      <BeforeCall />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
