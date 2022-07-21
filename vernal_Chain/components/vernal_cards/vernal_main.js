import { Box, Flex, Image, Heading } from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react'
import { Divider, AspectRatio } from '@chakra-ui/react'
import VernalText from "./vernal_text";
import styles from "/styles/vernalMain.module.css";


const Card = () => {
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
 
  <SimpleGrid columns={1} spacing={20}>

      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
        <Flex justifyContent='start' alignItems='start' bg='linear-gradient(to right,  #212121 0%, #383838 100%) ' className={styles.miniHead}>
        <Heading as='h1' size='xl' fontWeight='thin' color='#cff9e0' paddingLeft={2}>
          EXPLORER
        </Heading>
      </Flex>
      <VernalText/>
      </Box>

      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
        <Flex justifyContent='start' alignItems='start' bg='linear-gradient(to right,  #212121 0%, #383838 100%) ' className={styles.miniHead}>
        <Heading as='h1' size='xl' fontWeight='thin' color='#cff9e0' paddingLeft={2}>
          FAUCET
        </Heading>
      </Flex>
      <VernalText/>
      </Box>

      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
        <Flex justifyContent='start' alignItems='start' bg='linear-gradient(to right,  #212121 0%, #383838 100%) ' className={styles.miniHead}>
        <Heading as='h1' size='xl' fontWeight='thin' color='#cff9e0' paddingLeft={2}>
          MINER
        </Heading>
      </Flex>
    
      <VernalText/>
      </Box>

      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
        <Flex justifyContent='start' alignItems='start' bg='linear-gradient(to right,  #212121 0%, #383838 100%) ' className={styles.miniHead}>
        <Heading as='h1' size='xl' fontWeight='thin' color='#cff9e0' paddingLeft={2}>
          NODES
        </Heading>
      </Flex>
      
      <VernalText/>
      </Box>
    
      </SimpleGrid>
     
   
  );
};

export default Card;
