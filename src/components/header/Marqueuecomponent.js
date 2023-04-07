import Marquee from "react-fast-marquee";
const Marqueuecomponent = ({ content }) => {
  return (
    <Marquee style={{ height: "50px" }} gradient={false}>
      {content}
    </Marquee>
  );
};
export default Marqueuecomponent;
