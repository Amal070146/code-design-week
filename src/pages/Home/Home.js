import About from "../../components/about/About";
import Contacts from "../../components/contact/Contacts";
import CopyRight from "../../components/copyright/CopyRight";
import Events from "../../components/events/Events";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Headers";
import Team from "../../components/team/team";
import Sponsors from "../../components/sponsors/sponsors";
import "./Home.css";
const Home = () => {
  return (
    <div className="body-wrapper">
      <Navbar />
      <Header />
      <About />
      <Events />
      <Team />
      <Sponsors />
      <Contacts />
      <CopyRight />
    </div>
  );
};
export default Home;
