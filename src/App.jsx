import './styles/App.scss';
import Navbar from './Components/HeroSection/navbar';
import  MainContent from './Components/HeroSection/MainContentFixed';
import SmallBusiness from './Components/Small_business/SmallBusiness';
import Streamline from './Components/Streamline/Streamline';
import Price from './Components/Prices/Price';


function App() {

  return (
    <>
     <Navbar/>
     <MainContent/>
     <SmallBusiness/>
     <Streamline/>
     <Price/>
    </>
  )
}

export default App;
