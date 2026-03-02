import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Home';
import AboutUs from './Components/AboutUs';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;