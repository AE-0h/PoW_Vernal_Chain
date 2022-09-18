import { 
    Box, 
    Flex,  
    Heading, 
    Spacer, 
    Container , 
    Stat,
    StatLabel,
    StatNumber,
    useControllableState,
  } from "@chakra-ui/react";
import styles from "/styles/vernalMain.module.css";
import { useFormik } from "formik";
import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { walletState, faucetSpecs, miningSpecs } from "../../recoil/atoms";
import axios from "axios";
import hashes from "jshashes";
import elliptic from "elliptic";
  
  const Send_Card = () => {
    const nodeUrl = "http://localhost:3002";
    const [value, setValue] = useControllableState({ defaultValue: 0 });
    const [signedTx, setSignedTx] = useState("");
    const [txHash, setTxHash] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [userAmount, setUserAmount] = useState("");
    const [userRecipient, setUserRecipient] = useState("");
    const [userBalance, setUserBalance] = useState("");
    const [mine, setmine] = useState("");

  
    let postTrans = async (addr, amount) => {
      let r = await axios.post(`${nodeUrl}/transaction`, {
        from: addr,
        to: "0x0",
        amount: amount,
      });
    };
    const formik = useFormik({
      initialValues: {
      },
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        
      },
    });

    const innerBoxStyles = {
      borderRadius: "3xl",
      justifycontent: "center",
      color: "cornsilk",
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
          <Flex justifycontent='start' alignItems='start' bg='linear-gradient(to right,  #212121 0%, #383838 100%) ' className={styles.miniHead}>
          </Flex>
          <Heading
            marginTop={10}
            as="h1"
            size="xl"
            fontWeight="thin"
            color="cornsilk"
            paddingtop={50}
            textAlign="center"
            justifycontent="center"
          >
            Send VernalChain Token
            </Heading>
            <Spacer />
          <Flex justifycontent='center' alignItems='center' textAlign='center' marginTop={5} fontWeight='thin'>
          <form 
              as="span"
              alignItems="center"
              textAlign="center"
              justifycontent="center"
              onSubmit={formik.handleSubmit}
              
              >
          <label 
           as="h1"
           size="xl"
           fontWeight="thin"
           color="cornsilk"
           paddingtop={50}
           textAlign="center"
           alignItems="center"
           justifycontent="center"
           >Recipient</label>
        <Input
          id='recipient'
          name='toAddress'
          type='text'
          placeholder='Recipient Address'
          onChange={formik.handleChange}
          value={formik.values.raddress}
          marginTop={5}
          marginBottom={5}
          textAlign="center"
         
        />
         <label 
           as="h1"
           size="xl"
           fontWeight="thin"
           color="cornsilk"
           marginTop={5}
           textAlign="center"
           justifycontent="center"
           >Amount</label>
        <Input
          id='value'
          name='amount'
          type='text'
          placeholder='amount of vct to send'
          onChange={formik.handleChange}
          value={formik.values.amount}
          marginTop={5}
          marginBottom={5}
          textAlign="center"
         

        />
  
        <Button type="submit"
              size="4xl"
              height="100px"
              width="800px"
              border="1px"
              borderColor="#C3CDDA"
              borderRadius="18px"
              fontSize="50px"
              fontWeight="thin"
              color="cornsilk"
              textShadow="0 1 6px gray"
              textAlign="center"
              justifycontent="center"
              marginTop={5}
              className={styles.homeButton}
              >Send

              </Button>
      </form>
      </Flex>
      <Spacer />
              
      <Stat marginTop={10} 
           color="cornsilk"
           paddingtop={50}
           textAlign="center"
           justifycontent="center"
           className={styles.homeHeadText}>
    <StatLabel fontSize="5xl" fontWeight='thin'>Transaction #</StatLabel>
    <StatNumber fontWeight='hairline' fontSize='3xl'>0x000000000000</StatNumber>
    </Stat>
  
            {/* </Container> */}
        </Box>
        </div>
    );
  };

  export default Send_Card;
  