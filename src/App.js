import './App.css';
import {
  HomeCardCollection, NavBarHeader, MarketingFooter 
 } from './ui-components';

function App() {
  return (
    <div className="App">
      <NavBarHeader />
      <HomeCardCollection />
      <MarketingFooter />
    </div>
  );
}

export default App;
