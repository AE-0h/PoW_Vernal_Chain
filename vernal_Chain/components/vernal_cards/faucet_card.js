import { 
  Box, 
  Flex, 
  Button,
  Heading, 
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input, } 
from "@chakra-ui/react";
import styles from "/styles/vernalMain.module.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const Faucet_Card = () => {
  const innerBoxStyles = {
    borderRadius: "3xl",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#cff9e0",
    fontSize: "20px",
    shadow: "0px 5px 10px rgba(4, 4, 4, 4)",
    border: ".5px",
    borderColor: "#C3CDDA",
    boxSize: "300px",
    w: "100%",
    // bg: "linear-gradient(to right,  #212121 0%, #383838 100%)",
  };
    
  return (
    <div className={styles.background} >
      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
          </Box>
      <Heading  textAlign='center' as="h1" size="2xl" color="cornsilk" fontWeight="hairline" marginBottom='8' marginTop='10'>
        Please enter your wallet address so we can send you some vct!!
        </Heading>
      <form size='xl' textAlign='center' justifyContent="center" alignItems='center'>
        <Input textAlign='center' placeholder='VernalChain wallet address' variant='outline' type= 'text' />
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
            Submit{" "}
          </Button>{" "}
        </form>
      </div>
  );
};

export default Faucet_Card;
