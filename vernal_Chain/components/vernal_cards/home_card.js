import {
  Box,
  Flex,
  Heading,
  Button,
  Spacer,
  Link,
  Container,
  Divider,
  AspectRatio,
} from "@chakra-ui/react";

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
        <Flex
          justifyContent="start"
          bg="linear-gradient(to right,  #212121 0%, #383838 100%) "
          className={styles.miniHead}
        >
        </Flex>
        <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Heading
          as="h1"
          size="4xl"
          fontWeight='hairline'
          color="cornsilk"
          marginTop={20}
          marginBottom={20}
          justifyContent="center"
        >
          Welcome to VernalChain
          </Heading>
          <Spacer />
      
        <Heading
            maxWidth="xl"
            fontSize="3xl"
            as="span"
            textAlign="center"
            justifyContent="center"
            color="cornsilk"
            fontWeight="thin"
          >
            A proof of concept blockchain data structure
            implementing a Proof of Work consensus. Click the button below to
            create a wallet instance and begin exploring the blockchain.
          </Heading>
        <Link style={{textDecoration: 'none'}} href="/wallet">
          <Flex justifyContent="center" alignItems="center" flexDirection="column">
          <Button
          size="4xl"
          height="100px"
          width="500px"
          border="1px"
          borderColor="#C3CDDA"
          borderRadius="18px"
          fontSize="50px"
          fontWeight="thin"
          color="cornsilk"
          textShadow="0 1 6px gray"
          textAlign="center"
          justifyContent="center"
          marginTop={70}
          className={styles.homeButton}

          >
            Join the Egg Mass
          </Button>
          </Flex>
        </Link>
        </Flex>
      </Box>
    </div>
  );
};

export default Home_Card;
