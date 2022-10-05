import {
  Box,
  Flex,
  Heading,
  Button,
  Textarea,
  useToast
} from "@chakra-ui/react";
import styles from "/styles/vernalMain.module.css";
import elliptic from "elliptic";
import { saveKeysInSession } from "../../encryption/sessions.js";
import { getKeysFromSession } from "../../encryption/sessions.js";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { walletState, address} from "../../recoil/atoms";


const secp256k1 = new elliptic.ec("secp256k1");

const Create_Card = () => {
  const [status, setStatus] = useRecoilState(walletState);
  const [walletAddress, setWalletAddress] = useRecoilState(address);
  const [isActivated, setIsActivated] = useState(false);
  const toast = useToast();

  const innerBoxStyles = {
    borderRadius: "3xl",
    alignItems: "left",
    justifyContent: "center",
    textAlign: "center",
    color: "cornsilk",
    textShadow: "0 1 4px black",
    fontSize: "20px",
    shadow: "0px 5px 10px rgba(4, 4, 4, 4)",
    border: ".5px",
    borderColor: "#C3CDDA",
    boxSize: "800px",
    w: "100%",
  };
  let encryptionValuesRef = useRef(null);
  const handleClick = async() => {
    //create keypair with eliptic curve
    let keyPair = secp256k1.genKeyPair();
    saveKeysInSession(keyPair);
    // display result
    encryptionValuesRef.current.value = `Private key: ${
      getKeysFromSession().privKey
    }
    Public key: ${getKeysFromSession().pubKey}
    Wallet address: ${getKeysFromSession().address}`;

    setIsActivated(true);
    setStatus("unlocked");
    setWalletAddress(sessionStorage.address);
    
    

  };
    const toastAttempt = async () => {
    await handleClick();
    if (isActivated) {
      console.log(walletAddress);
      console.log(sessionStorage.address);
     toast({
    title: 'Wallet created.',
    description: "Address, PublicKey & PrivateKey created",
    status: 'success',
    duration: 1100,
      });
    } 
  };

  return (
    <div className={styles.background}>
      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
        <Flex
          justifyContent="start"
          alignItems="start"
          bg="linear-gradient(to right,  #212121 0%, #383838 100%) "
          className={styles.miniHead}
        >
          <Heading
            as="h1"
            size="xl"
            fontWeight="thin"
            color="#cff9e0"
            paddingLeft={2}
          ></Heading>{" "}
        </Flex>
        <Flex justifyContent="center">
          <Heading
            as="h1"
            size="xl"
            fontWeight="thin"
            color="cornsilk"
            marginTop={20}
            justifyContent="center"
          >
            {" "}
            A simple wallet solution for VernalChain protocol.{" "}
          </Heading>{" "}
        </Flex>{" "}
        <Flex justifyContent="center">
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
            onClick={toastAttempt}
            className={styles.homeButton}
          >
            Create Wallet{" "}
          </Button>{" "}
        </Flex>{" "}
        <Textarea
          ref={encryptionValuesRef}
          maxWidth="1000px"
          height={28}
          justifyContent="center"
          textAlign="center"
          marginTop={20}
          fontWeight="thin"
          fontSize="20px"
          color="white"

        ></Textarea>
        <Flex backdropFilter="auto" backdropBlur="15px" justifyContent="center">
          <Heading
            as="h1"
            size="xl"
            fontWeight="thin"
            color="cornsilk"
            paddingLeft={2}
            marginTop={20}
          >
            {" "}
            Please copy and save your keys and wallet address.{" "}
          </Heading>{" "}
        </Flex>{" "}
      </Box>{" "}
    </div>
  );

};

export default Create_Card;
