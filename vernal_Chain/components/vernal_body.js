import Card from "./vernal_cards";
import styles from "/styles/vernalMain.module.css";
import { Container, SimpleGrid, Box } from '@chakra-ui/react';

const Body = () => {
    return (
        <div className={styles.background}>
            <Container>
                <Card />
            </Container>

        </div>
    );
}
export default Body;

