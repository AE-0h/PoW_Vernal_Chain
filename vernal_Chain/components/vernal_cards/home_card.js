import { Box, Flex, Image, Heading, Button, Spacer, Link } from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react'
import { Divider, AspectRatio } from '@chakra-ui/react'
import styles from "/styles/vernalMain.module.css";


const Home_Card = () => {
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
          <h1 className={styles.miniHeadText}>WELCOME</h1>
        <Heading as='h1' size='4xl' fontWeight='extrabold' color='#cff9e0'  paddingTop={200}  fontFamily='sans-serif' textShadow='inherit'>
          Welcome to VernalChain 
        </Heading>
        <Spacer />
        <Image src="../images/eggMass.png" fit='scale-down'  className={styles.homeImage}>
        </Image>
  
      </Flex>
      <Link href="/wallet" >
      <Button colorScheme='blackAlpha'  className={styles.homeButton}>
        Join the Egg Mass
      </Button>
      </Link>
      </Box>
      </div>
  );
};

export default Home_Card;
