import './App.css';
// import { Hero } from './Components/Hero/Hero';
import { NavBar } from './Components/NavBar/NavBar';

function App() {
  return (
    <div>
      <div className='relative w-full'>
        <img src='./img/bg.png' alt='hero'/>
      <NavBar />
      </div>
      {/* <Hero /> */}
    </div>
  );
}

export default App;
