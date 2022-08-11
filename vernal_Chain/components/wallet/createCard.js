import { Box, Flex, Heading, Spacer, Container, Button, Textarea } from "@chakra-ui/react";
import styles from "/styles/vernalMain.module.css";
import elliptic from "elliptic"; 
import { saveKeysInSession } from "../../encryption/sessions.js";
import { getKeysFromSession } from "../../encryption/sessions.js";
import {useRef, useEffect} from "react";

const secp256k1 = new elliptic.ec("secp256k1");

const Create_Card = () => {
  const innerBoxStyles = {
    borderRadius: "3xl",
    alignItems: "left",
    justifyContent: "center",
    textAlign: "center",
    color: 'cornsilk',
    textShadow: "0 1 4px black",
    fontSize: "20px",
    shadow: "0px 5px 10px rgba(4, 4, 4, 4)",
    border: ".5px",
    borderColor: "#C3CDDA",
    boxSize: "800px",
    w: "100%",
  };
  let textAreaRef = useRef(null);
  const handleClick = () => {
    //create keypair with eliptic curve
    let keyPair = secp256k1.genKeyPair();
     saveKeysInSession(keyPair);
      console.log(getKeysFromSession);
   
    // display result
    textAreaRef.current.value =
      "Private key: " +
      getKeysFromSession().privKey +
      "\n" +
      "Public key: " +
      getKeysFromSession().pubKey +
      "\n" +
      "Wallet address: " +
      '0x'+ getKeysFromSession().address;

    // setIsCreated(true);
    // setWalletStatus("unlocked");
    // setWalletAddress(sessionStorage["address"]);

  };

  
  return (
    <div className={styles.background}>
      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
        <Flex justifyContent='start' alignItems='start' bg='linear-gradient(to right,  #212121 0%, #383838 100%) ' className={styles.miniHead}>
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
            marginRight="-1.5"
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
          onClick={handleClick}
          marginBottom={50}
        >
          Create Wallet
      </Button>
      <Textarea ref={textAreaRef}>
      </Textarea>
      </Box>
     
      </div>
    );
  };
  

export default Create_Card;