import './Styles/App.scss';
import Navbar from './Components/HeroSection/Navbar';
import HeroSection from './Components/HeroSection';
import SmallBusiness from './Components/SmallBusiness';
import Streamline from './Components/Streamline';
import Price from './Components/Price';
import ExploreApps from './Components/ExploreApps';
import Reach from './Components/Reach';
import AddToTeams from './Components/AddToTeams';
import Help from './Components/Help/Help';
import MicrosoftPlan from './Components/MicrosoftPlan';

const App = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      <SmallBusiness />
      <Streamline />
      <Price />
      <ExploreApps />
      <Reach />
      <AddToTeams />
      <Help />
      <MicrosoftPlan />
    </>
  )
}

export default App;