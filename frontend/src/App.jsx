import './index.css'
import Navbar from './components/Navbar'
import Start from './components/Start'
import Work from './components/Work'
import AnimCursor from './components/AnimCursor'
import Contact from './components/Contact'
import About from './components/About'
import  { useState} from 'react'
import inori from './assets/overdose.jpg'
const App = () => {
  const [theme, setTheme] = useState('night');

  const handleThemeToggle = (event) => {
    const newTheme = event.target.checked ? 'luxury' : 'night';
    setTheme(newTheme);
  };
  return (

    <div id="start-section" data-theme={theme}  >
      <AnimCursor />
      <Navbar onThemeToggle={handleThemeToggle} />
      <div className='relative'>
      <img src={inori} alt="img" className="mask mask-squircle absolute hidden 2xl:block   md:right-20 animate-bounce" />
    
      <div className='container mx-auto pt-[400px] z-40 '>
        <ol className=" sm:ml-5 border-l-2 border-indigo-500  ">
          {/* Start */}
          <li>
            <div class="flex-start flex items-center" >
              <div class="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 "><div className='h-3 w-3 rounded-full bg-white'></div></div>
              <h4 class="-mt-2 text-xl font-semibold">Start /&gt;</h4>
            </div>
            <div class="mb-6 ml-6 pb-6 " >
              <Start />
            </div>
          </li>
          {/* Work */}
          <li id="work-section" className='mt-96'>
            <div class="flex-start flex items-center">
              <div class="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50"><div className='h-3 w-3 rounded-full bg-white '></div></div>
              <h4 class="-mt-2 text-xl font-semibold">Work /&gt;</h4>
            </div>
            <div class=" ml-6 pb-6 ">
              <p class=" text-4xl font-semibold">Showcase Projects...</p>
              <Work />
            </div>
          </li>
          {/* About */}
          <li id="about-section" className='mt-96'>
            <div class="flex-start flex items-center">
              <div class="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50"><div className='h-3 w-3 rounded-full bg-white '></div></div>
              <h4 class="-mt-2 text-xl font-semibold">About /&gt;</h4>
            </div>
            <div class=" ml-6 pb-6">
              <About />
            </div>
          </li>
          {/* Contact */}
          <li id="contact-section" className='mt-96'>
            <div class="flex-start flex items-center">
              <div class="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50"><div className='h-3 w-3 rounded-full bg-white '></div></div>
              <h4 class="-mt-2 text-xl font-semibold">Contact /&gt;</h4>
            </div>
            <div class=" ml-6 pb-6">
              <Contact />
            </div>
            <div>
              <p className='ml-4 text-xs'>©2023. Made by Narapol </p>
            </div>
          </li>
        </ol>
      </div>
      </div>
    </div>

  )
}

export default App
