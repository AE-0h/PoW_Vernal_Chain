import { Box, Flex, Image, Heading, Button, Spacer, Link, Text, Container, Divider } from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react';
import styles from "/styles/vernalMain.module.css";


const Home_Card = () => {
  const innerBoxStyles = {
    borderRadius: "3xl",
    alignItems: "left",
    justifyContent: "center",
    textAlign: "center",
    color: "#cff9e0",
    textShadow: "0 1 4px black",
    fontSize: "20px",
    shadow: "0px 5px 10px rgba(4, 4, 4, 4)",
    border: ".5px",
    borderColor: "#C3CDDA",
    boxSize: "800px",
    w: "100%",
  };

  
  return (
    <div className={styles.background}>
      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="4px">
        <Flex justifyContent='start' bg='linear-gradient(to right,  #212121 0%, #383838 100%) ' className={styles.miniHead}>
          <h1 className={styles.miniHeadText}>WELCOME</h1>
          </Flex>
        <Heading as='h1' size='4xl' fontWeight='extrabold' color='#cff9e0'  paddingTop={50}  fontFamily='sans-serif' textShadow='' textAlign='center' justifyContent='center' text-shadow= '2px 1px 1px rgb(71, 70, 70)'>
          Welcome to VernalChain 
         <Spacer />
         <Divider orientation='horizontal' colorScheme='facebook' size='xl' variant="solid" />
         <Container maxWidth='xl' fontSize='3xl' as='span' textAlign='center' justifyContent='center' color='white'>A proof of concept educational tool to help visualize a blockchain implementing a Proof of Work consensus.
          Click the button below to create a wallet instance and begin exploring the blockchain.
        </Container>
        </Heading>
        
        <Button size='lg' colorScheme='green' mt='24px'>
        Join the Egg Mass
        </Button>
      </Box>
    </div>
  );
};

export default Home_Card;
