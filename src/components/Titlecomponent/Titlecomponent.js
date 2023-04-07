import { arrowheadleft } from "../../assets";
import styles from "./Titlecomponent.module.css";
const Titlecomponent = ({ title, isLeft }) => {
  return (
    <div className={styles.titlecomponentwrapper}>
      <img src={arrowheadleft} alt="" />
      <p>{title}</p>
    </div>
  );
};
export default Titlecomponent;
