import { Box, Flex, Image, Heading, Spacer, Container, Button } from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react'
import { Divider, AspectRatio } from '@chakra-ui/react'
import styles from "/styles/vernalMain.module.css";


const Create_Card = () => {
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
          VERNAL WALLET
          <Spacer />
      
          <Container
            maxWidth="xl"
            fontSize="3xl"
            as="span"
            textAlign="center"
            justifyContent="center"
            color="white"
            marginLeft="-1.5"
       tton     marginRight="-1.5"
          >
            A simple wallet solution for VernalChain protocol.
          </Container>
        </Heading>
      <Button
          size='4xl'
          height='200px'
          width='500px'
          border='1px'
          borderColor='#C3CDDA'
          borderRadius='18px'
          fontSize='50px'
          fontWeight='extrabold'
          color='cornsilk'
          textShadow='0 1 6px gray'
          textAlign='center'
          justifyContent='center'
          marginTop={50}
        >
          Create Wallet
      </Button>
        
      </Box>
      </div>
  );
};

export default Create_Card;