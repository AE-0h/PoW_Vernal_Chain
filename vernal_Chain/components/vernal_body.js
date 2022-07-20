import Card from "./vernal_cards";
import styles from "/styles/vernalMain.module.css";
import { Container, Flex } from '@chakra-ui/react';

const Body = () => {
    return (
        <Flex
      flexWrap="wrap"
      spacing="24px"
      gap="16px"
      justifyContent="space-evenly"
    >
        <div className={styles.background}>
            <Container>
                <Card />
            </Container>

        </div>
        </Flex>
    );
}
export default Body;

