import './Styles/App.scss';
import Navbar from './Components/HeroSection/Navbar';
import HeroSection from './Components/HeroSection';
import SmallBusinessSection from './Components/SmallBusinessSection';
import StreamlineSection from './Components/StreamlineSection';
import PriceSection from './Components/PriceSection';
import ExploreAppSection from './Components/ExploreAppSection';
import ReachSection from './Components/ReachSection';
import TeamSection  from './Components/TeamSection';
import HelpSection from './Components/HelpSection';
import MicrosoftPlanSection from './Components/MicrosoftPlanSection';

const App = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      <SmallBusinessSection />
      <StreamlineSection/>
      <PriceSection />
      <ExploreAppSection/>
      <ReachSection />
      <TeamSection />
      <HelpSection />
      <MicrosoftPlanSection/>
    </>
  )
}

export default App;