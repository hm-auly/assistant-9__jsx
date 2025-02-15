
import './App.css'
import MyNavber from './Components/Common/Navber';
import Cardhome from './Components/Home/Cardhome';
import Hero from './Components/Home/Hero';
import Feedback from './Components/Home/Feedback';
import Recent from './Components/Home/Recent';
import Footer from './Components/Common/Footer';
import Navlink from './Components/Common/Navlink';


function App() {
  return (
    <>
      <MyNavber />
      <Navlink />
      <Hero />
      <Cardhome />
      <Feedback />
      <Recent />
      <Footer />
  
    </>
  )
}

export default App
