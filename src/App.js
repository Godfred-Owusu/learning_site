import './App.css';
import { Hero } from './Components/Hero/Hero';
import { HeroCard } from './Components/HeroCards/HeroCard';
import { NavBar } from './Components/NavBar/NavBar';
import { Services } from './Components/Services/Services';

function App() {
  return (
    <div>
      <div className='relative w-full'>
        <img className='absolute top-0 left-0 w-full' src='./img/bg.png' alt='hero'/>
      <NavBar />
      <Hero />
      <HeroCard />
      </div>
      <Services />
    </div>
  );
}

export default App;
