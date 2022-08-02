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
          <h1 className={styles.miniHeadText}>WELCOME</h1>
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
          Welcome to VernalChain
          <Spacer />
          <Divider
            orientation="horizontal"
            colorScheme="facebook"
            variant="solid"
            borderColor="cornsilk"
          />
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
        <Link href="/wallet">
          <Button
            size="lg"
            colorScheme="white"
            mt="24px"
            className={styles.homeButton}
            color="DarkSlateGrey"
          >
            Join the Egg Mass
          </Button>
        </Link>
      

      </Box>
    </div>
  );
};

export default Home_Card;
