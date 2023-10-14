import './App.css';
import { Companies } from './Components/Companies/Companies';
import { Courses } from './Components/Courses/Courses';
import { Footer } from './Components/Footer/Footer';
import { Hero } from './Components/Hero/Hero';
import { HeroCard } from './Components/HeroCards/HeroCard';
import { NavBar } from './Components/NavBar/NavBar';
import { NewsLetter } from './Components/NewsLetter/NewsLetter';
import { Pricing } from './Components/Pricing/Pricing';
import { Services } from './Components/Services/Services';
import { Testimonial } from './Components/Testimonial/Testimonial';

function App() {
  return (
    <div>
      <div className='relative w-full'>
        <img className='image-size absolute top-0 left-0 w-full' src='./img/bg.png' alt='hero'/>
      <NavBar />
      <Hero />
      <HeroCard />
      </div>
      <Services />
      <Companies />
      <Courses />
      <Pricing />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
