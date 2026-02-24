
import Hero from './Components/Hero'
import Stats from './Components/Stats';
import MissionVision from './Components/MissionVision';
import './App.css';
import Testimonials from './Components/Testimonials';
import CTA from './Components/CTA';
import StartupCarousel from './Components/startup-carousel';
import Timeline from './Components/Timeline';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <StartupCarousel />
      <MissionVision />
      <Stats />
      <Timeline />
      <Testimonials />
      <CTA />
    </div>
  )
}

export default Home
