import './styles/App.scss';
import Navbar from './Components/HeroSection/navbar';
import  MainContent from './Components/HeroSection/MainContentFixed';
import SmallBusiness from './Components/Small_business/SmallBusiness';
import Streamline from './Components/Streamline/Streamline';
import Price from './Components/Prices/Price';
import Explore from './Components/Explore_apps/Explore';
import Reach from './Components/Expand_your_reach/reach';
import AddToTeam from './Components/Add_to_teams/AddToTeams';
import Help  from './Components/Help/Help';
import MicrosoftPlan from './Components/MicrosoftPlan/MicrosoftPlan';


function App() {

  return (
    <>
     <Navbar/>
     <MainContent/>
     <SmallBusiness/>
     <Streamline/>
     <Price/>
     <Explore/>
     <Reach/>
     <AddToTeam/>
     <Help/>
     <MicrosoftPlan/>
    </>
  )
}

export default App;
