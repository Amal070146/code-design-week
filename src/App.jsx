import './App.css';
import Navbar from './components/navbar/Navbar'
import Headers from './components/header/Headers'
import About from './components/about/About'
import Events from './components/events/Events'
import Team from './components/team/team'
import Sponsors from './components/sponsors/sponsors'

function App() {
  return (
    <>
      <Navbar />
      <Headers />
      <About />
      <Events />
      <Team />
      <Sponsors />
    </>
  );
}

export default App;
