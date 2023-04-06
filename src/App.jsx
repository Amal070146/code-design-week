import './App.css';
import Navbar from './components/navbar/Navbar'
import Headers from './components/header/Headers'
import About from './components/about/About'
import Events from './components/events/Events'
import Team from './components/team/team'
import Sponsors from './components/sponsors/sponsors'
import Contacts from './components/contact/Contacts'

function App() {
  return (
    <div className='body-wrapper'>
      <Navbar />
      <Headers />
      <About />
      <Events />
      <Team />
      <Sponsors />
      <Contacts />
    </div>
  );
}

export default App;
