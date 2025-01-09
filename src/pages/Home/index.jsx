import { homeMenuItems } from '../../utils/menuItems.js';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import About from '../../components/About';
import Skills from '../../components/Skills';

function Home() {
  return (
    <div>
      <Navbar menuItems={homeMenuItems} />
      <Header />
      <About />
      <Skills />
    </div>
  );
}
export default Home;
