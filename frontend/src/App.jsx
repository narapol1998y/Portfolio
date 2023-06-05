import './index.css'
import Navbar from './components/Navbar'
import bg from './assets/7971.jpg'
const App = () => {
  return (
    <div  data-theme="night">
      <img src={bg} alt="bgimg" className='w-full h-full absolute object-cover -z-40' />
      <Navbar />
    </div>
  )
}

export default App
