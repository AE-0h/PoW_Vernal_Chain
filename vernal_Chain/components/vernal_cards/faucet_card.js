import { useEffect, useState, useRef } from "react";
import {signData, sha256, verifySignature}from '../../vernal_backend/encryption-Utils/Encryption-tools';
import axios from "axios";
import { useRecoilValue } from "recoil";
import { useFormik,  } from "formik";
import {defaultNode, p2pNet, faucetSpecs, minerSpecs} from "../../recoil/atoms";
import hashes from "jshashes";
import { 
  Box, 
  Flex, 
  Button,
  Heading, 
  Input, 
  Toast,
  Link,
  useControllableState,
} 
from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import styles from "/styles/vernalMain.module.css";

const Faucet_Card = () => {
  const nodeUrl = useRecoilValue(defaultNode);
  const _faucetSpecs = useRecoilValue(faucetSpecs);
  const _miningSpecs = useRecoilValue(minerSpecs);
  const eggmass = useRecoilValue(p2pNet);
  const [value, setValue] = useControllableState({ defaultValue: 25 });
  const [txHash, setTxHash] = useState("");
  const [balance, setBalance] = useState(0);
  const [isMining, setIsMining] = useState(false);


  const innerBoxStyles = {
    borderRadius: "3xl",
    alignItems: "center",
    justifycontent: "center",
    textAlign: "center",
    color: "#cff9e0",
    fontSize: "20px",
    shadow: "0px 5px 10px rgba(4, 4, 4, 4)",
    border: ".5px",
    borderColor: "#C3CDDA",
    boxSize: "300px",
    w: "100%",
    marginRight: "auto",
    background: "#C9CCD3",
    backgroundImage: "linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%)",
    backgroundBlendMode: "lighten",

  };

  useEffect(() => {

    async function getBalance() {;
      let [balances] = await Promise.all([
        axios.get(
          `http://localhost:3002/address/${_faucetSpecs.address}/balance`
        ),
      ]);

      const { confirmedBalance } = balances.data;
      setBalance(confirmedBalance);
      console.log("confirmedBalance", confirmedBalance);
    }
    getBalance();
  }, []);

  const sendFaucetVCT = async (address) => {
    let _trans = {
      from: _faucetSpecs.address,
      to: address,
      value,
      fee: 0,
      dateCreated: new Date(),
      data: "Hydrate the Mass",
      senderPubKey: _faucetSpecs.pubKey,
    };
    let _transJSON = JSON.stringify(_trans);
    _trans.transactionDataHash = sha256(_transJSON);

    let sendTransaction = async (signedTx) => {
      try {
        const config = {
          Footers: {
            "Content-Type": "application/json",
          },
        };
        const result = await axios.post(
          `${nodeUrl}/transaction/broadcast`,
          signedTx,
          config
        );
  
        const error = result.data.error;
  
          //Reset state
          setTxHash(result.data.transactionDataHash);
  
          //Reset Withdrawal Timer
          const now = new Date();
          const time = now.getTime() + Number(_faucetDetails.duration);
          const timeStamp = Math.floor(time / 1000);
          sessionStorage.setItem("faucetTimer", timeStamp);
  
          // Mine the block
          if (_miningDetails.mode === "automatic") {
            mineNextBlock();
          }
       
      } catch (error) {
        console.log(error);
      }

      transaction.senderSignature = signData(
        _trans.transactionDataHash,
        _faucetSpecs.privKey
      );
      sendTransaction(transaction);
    };

  };
  const formik = useFormik({
    initialValues: {
      address: '',
    },
    onSubmit: async (values) => {
      await sendFaucetVCT(values.address);
    }

  });
    
  return (
    <div className={styles.background} >
            <Heading  textAlign='center' as="h1" size="2xl" color="cornsilk" fontWeight="hairline" marginBottom='8' marginTop='10'>
        Please enter your wallet address so we can send you some vct!!
        </Heading>
      <Flex justifycontent="center" alignItems="center" flexDirection='inherit'>
      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
      <Heading  textAlign='center' as="h1" size="2xl" color="cornsilk" fontWeight="hairline" marginBottom='8' marginTop='20'>
        VernalFaucet a simple faucet solution... 
        </Heading>
          </Box>
      <form  justifycontent="center" onSubmit={formik.handleSubmit}>
        <Input type="submit" marginLeft={4} textAlign='center' placeholder='Address' variant='outline' type= 'text'  justifycontent='center' width='100%' maxWidth='1000' onChange={formik.handleChange} id="address"/>
        <Button
          type="submit"
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
            justifycontent="center"
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
