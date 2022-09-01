import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import {defaultNode, p2pNet, faucetSpecs, miningDetails} from "../../recoil/atoms";
import hashes from "jshashes";
import elliptic from "elliptic";
import { 
  Box, 
  Flex, 
  Button,
  Heading, 
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Divider, 
  Toast,} 
from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import styles from "/styles/vernalMain.module.css";

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
    marginRight: "auto",
    bg:"linear-gradient(to right,  #212121 0%, #383838 100%)",
  };

  // async function postFaucetTrans() {

  //   let transPayload = {
  //     from: this.from,
  //     to: this.to,
  //     value: this.value,
  //     fee: this.fee,
  //     dateCreated: this.dateCreated,
  //     data: this.data,
  //     senderPubKey: this.senderPubKey,
  //   };

  //   let res = await axios.post('http://localhost:3002/transaction/broadcast', transPayload);

  //   let data = res.data;
  //   console.log(data);
  // }

  // postFaucetTrans();

    
  return (
    <div className={styles.background}  justifyContent="center" alignItems='center' >
            <Heading  textAlign='center' as="h1" size="2xl" color="cornsilk" fontWeight="hairline" marginBottom='8' marginTop='10'>
        Please enter your wallet address so we can send you some vct!!
        </Heading>
      <Flex justifyContent="center" alignItems="center" flexDirection='inherit'>
      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
      <Heading  textAlign='center' as="h1" size="2xl" color="cornsilk" fontWeight="hairline" marginBottom='8' marginTop='20'>
        VernalFaucet a simple faucet solution...
        </Heading>
          </Box>
      <form  justifyContent="center">
        <Input marginLeft={4} textAlign='center' placeholder='VernalChain wallet address' variant='outline' type= 'text'  justifyContent='center' width='100%' maxWidth='1000'/>
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
            marginLeft={4}
            className={styles.homeButton}
          >
            Submit{" "}
          </Button>{" "}
       </form>
        </Flex> 
      </div>
  );
};

export default Faucet_Card;
