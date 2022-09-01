import { Box, Flex, Image, Heading, Button, Input, Center, } from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react'
import { Divider, AspectRatio } from '@chakra-ui/react'
import styles from "/styles/vernalMain.module.css";


const Miner_Card = () => {
  const innerBoxStyles = {
    borderRadius: "3xl",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "cornsilk",
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
      <Center>
      <Divider orientation='vertical' />
        <Image src="/images/mining.svg" boxSize='350px' justifyContent='center' marginRight='-10' marginLeft='-10'/>
        <Heading minWidth='100' fontWeight="hairline" fontSize='6xl' justifyContent='center' alignItems='start' marginLeft='-10'> A simple miner... Watch in awe as transactions are gathered and orginized into blocks!</Heading>
        </Center>
        <Input textAlign='center' placeholder='Enter your wallet address' maxWidth='1000' />
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
            marginTop={30}
            className={styles.homeButton}
          >
            Mine Block{" "}
          </Button>{" "}
      </Box>
      </div>
  );
};

export default Miner_Card;
