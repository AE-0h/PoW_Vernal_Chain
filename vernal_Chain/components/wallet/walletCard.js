import { Box, Flex, Image, Heading, Spacer, Container } from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react'
import { Divider, AspectRatio } from '@chakra-ui/react'
import styles from "/styles/vernalMain.module.css";


const Wallet_Card = () => {
  const innerBoxStyles = {
    borderRadius: "3xl",
    alignItems: "left",
    justifyContent: "center",
    textAlign: "left",
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
      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
        <Flex justifyContent='start' alignItems='start' bg='linear-gradient(to right,  #212121 0%, #383838 100%) ' className={styles.miniHead}>
          <h1 className={styles.miniHeadText}></h1>
        <Heading as='h1' size='xl' fontWeight='thin' color='#cff9e0' paddingLeft={2}>
        </Heading>
        </Flex>
        <Heading
          as="h1"
          size="4xl"
          fontWeight="extrabold"
          color="cornsilk"
          paddingTop={50}
          fontFamily="sans-serif"
          textAlign="center"
          justifyContent="center"
          className={styles.homeHeadText}
        >
          Create a wallet
          <Spacer />
      
          <Container
            maxWidth="xl"
            fontSize="3xl"
            as="span"
            textAlign="center"
            justifyContent="center"
            color="white"
            marginLeft="-1.5"
            marginRight="-1.5"
          >
            A proof of concept educational tool to help visualize a blockchain
            implementing a Proof of Work consensus. Click the button below to
            create a wallet instance and begin exploring the blockchain.
          </Container>
        </Heading>
      </Box>
      </div>
  );
};

export default Wallet_Card;
