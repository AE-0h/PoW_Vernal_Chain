import Card from "./vernal_cards";
import styles from "/styles/vernalMain.module.css";
import { Container, Flex } from '@chakra-ui/react';

const Body = () => {
    return (
        <div className={styles.background}>
            <Card />
        </div>
      
    );
}
export default Body;

