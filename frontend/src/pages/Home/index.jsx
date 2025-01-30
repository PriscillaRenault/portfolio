import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Gallery from '../../components/Gallery';
import './style.scss';

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Gallery />
    </div>
  );
}
export default Home;
