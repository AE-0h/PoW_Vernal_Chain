import Vernalnav from "./vernal_nav";
import styles from "../styles/vernalMain.module.css";"";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Container, SimpleGrid, Box } from '@chakra-ui/react';

const Header = () => {
    return (
        <div className= {styles.vernalNav}>
        <Vernalnav />
        </div>
    );
}
export default Header;