import Card from "./vernal_cards/home_card";
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

