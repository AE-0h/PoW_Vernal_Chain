import Vernalnav from "./vernal_nav";
import Vernalico from "./vernal_icon";
import styles from "../styles/vernalMain.module.css";


const Header = () => {
    return (
        <div className= {styles.header}>
        <Vernalico/>
        <Vernalnav   /> 
        </div>
    );
}
export default Header;