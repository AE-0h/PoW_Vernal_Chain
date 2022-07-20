import styles from "/styles/vernalMain.module.css";
import { Flex, Spacer, Box, Heading, ButtonGroup, Button } from '@chakra-ui/react'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Flex minWidth='max-content' alignItems='center' gap='1'>

  <Spacer />
  <ButtonGroup gap='2'>
    <Button colorScheme='green'>Join the Egg Mass</Button>
  </ButtonGroup>
</Flex>
    
    </div>
  );
};

export default Footer;