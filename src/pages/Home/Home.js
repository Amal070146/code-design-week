import About from "../../components/about/About";
import Contacts from "../../components/contact/Contacts";
import CopyRight from "../../components/copyright/CopyRight";
import Events from "../../components/events/Events";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Headers";
import Partners from '../../components/communitypartners/Partner'
import Team from "../../components/team/team";
import Sponsors from "../../components/sponsors/sponsors";
import "./Home.css";
import React from "react";
const Home = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="body-wrapper">
      <Navbar />
      <Header />
      <About />
      <Events />
      <Partners />
      <Team />
      <Sponsors />
      <Contacts />
      <CopyRight />
    </div>
  );
};
export default Home;
