import { 
    Box, 
    Input,
    Button,
    Flex,  
    Heading, 
    Spacer, 
    Container , 
    Stat,
    StatLabel,
    StatNumber,
    useControllableState,
    FormControl,
    FormLabel,
    useToast,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,

  } from "@chakra-ui/react";
import styles from "/styles/vernalMain.module.css";
import { useFormik } from "formik";
import { useState, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { walletState, faucetSpecs, minerSpecs } from "../../recoil/atoms";
import axios from "axios";



    export default function Send_Card (){
    const EC = require("elliptic").ec;
    const secp256k1 = new EC("secp256k1");
    const CryptoJS = require("crypto-js");  
    const nodeUrl = "http://localhost:3002";
    const [value, setValue] = useControllableState({ defaultValue: 0 });
    const [successTx, setSuccessTx] = useState(false);
    const [signedTx, setSignedTx] = useState("");
    const [txHash, setTxHash] = useControllableState({ defaultValue: "0x00000000000000000000000" });
    const [userRecipient, setUserRecipient] = useState("");
    const [amount, setAmount] = useControllableState({ defaultValue: 0 });
    const fee = 0;
    const signRef = useRef();
    const [userAddress, setUserAddress] = useState("");
    const [balance, setBalance] = useState();

    useEffect(() => {

      setUserAddress(sessionStorage.getItem("address"));
      async function getBalance() {
        let [balances] = await Promise.all([
          axios.get(
            `http://localhost:3002/address/${userAddress}/balance`
          ),
        ]);
  
        const { confirmedBalance } = balances.data;
        setBalance(confirmedBalance);
        console.log("user balance", confirmedBalance);
      }
      setSuccessTx(false);
      if (successTx) signRef.current.value = "";   
      getBalance();
      console.log(signRef);
     }, []);

    const signTransaction = async () => {
      function signData(data, privKey) {
        let keyPair = secp256k1.keyFromPrivate(privKey);
        let signature = keyPair.sign(data);
        return [signature.r.toString(16), signature.s.toString(16)];
      }
      
  
      const validAddress = /^[0-9a-f]{40}$/.test(userRecipient);
      console.log(userRecipient);

      if (!validAddress) {
         alert("Invalid address or value");
        return;
      } else {
        console.log("valid address" ,userRecipient);
      }
  
      let transaction = {
        from: sessionStorage.address,
        to: userRecipient,
        value: +amount,
        fee,
        dateCreated: new Date().toISOString(),
        data: sessionStorage.privKey.toString(CryptoJS.enc.Hex),
        senderPubKey: sessionStorage.pubKey,
      };
  
      // trans hash
      let tx = JSON.stringify(transaction);
      transaction.transactionDataHash = new CryptoJS.SHA256(tx).toString(CryptoJS.enc.Hex);
      console.log(tx);
      let txJSON = JSON.stringify(transaction);
     console.log(txJSON);
      setSignedTx(transaction.transactionDataHash);
      console.log("signed tx", transaction.transactionDataHash);
      console.log(typeof(transaction.transactionDataHash));

  
      // Sign the transaction hash
      transaction.senderSignature = signData(
        transaction.transactionDataHash,
        sessionStorage.privKey
      );
  
      setSignedTx(tx);
     sendTransaction(transaction);
     console.log("signed transaction", tx);
    };
  
    const sendTransaction = async () => {
      try {
        let nodeUrl = "http://localhost:3002";
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
  
        let result = await axios.post(
          `${nodeUrl}/transaction/broadcast`,
          signedTx,
          config
        );
        console.log(result);
  
        const error = result.data.error;
  
          // Check Miner Mode
          if (minerSpecs.mode === "auto") {
            setIsMining(true);
  
            const body = {
              minerAddress: minerSpecs.address,
              difficulty: minerSpecs.difficulty,
            };
  
            const result = await axios.post(
              "http://localhost:3002/mine-next-block",
              body,
              config
            );
           await console.log(result);
          }else{
            console.log(error);
          }

          //Reset state
          setUserRecipient("");
          setValue("");
          setTxHash(result.data.transactionDataHash);
        }catch (error) {
        console.log(error);
      }
    };
    
    const formik = useFormik({
      initialValues: {
        recipient: "",
        amount: "",
      },
      onSubmit:  (values) => {
        setUserRecipient(values.recipient);
        setAmount(values.amount);
        signTransaction();
      }
    });
    const innerBoxStyles = {
      borderRadius: "3xl",
      justifycontent: "center",
      alignitems: "center",
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
        <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px"  >
          <Flex justifycontent='center' alignItems='center' bg='linear-gradient(to right,  #212121 0%, #383838 100%) ' className={styles.miniHead}>
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
          <FormControl alignItems="center" justifycontent="center" textAlign="center">
          <FormLabel 
           as="h1"
           size="xl"
           fontWeight="thin"
           color="cornsilk"
           paddingtop={50}
           textAlign="center"
           alignItems="center"
           justifycontent="center"
           >Recipient</FormLabel>
        <Input
          id='recipient'
          name='recipient'
          type='text'
          placeholder='Recipient Address'
          onChange={formik.handleChange}
          value={formik.values.recipient}
          marginTop={5}
          marginBottom={5}
          textAlign="center"
          marginLeft={28}
          marginRight={-6}
         
        />

        </FormControl>
        <FormControl justifycontent="center" alignItems="center" textAlign="center">
          <FormLabel textAlign="center" >Amount</FormLabel>
          <NumberInput marginLeft={20}
          marginRight={-20} max={balance} min={1}   
           width={800} justifyContent='inherit' alignItems='inherit'>
            <NumberInputField justifyContent='center' />
          <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
          </NumberInputStepper>
          </NumberInput>
        </FormControl>

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
              marginLeft={28}
          marginRight={-6}
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
           className={styles.homeHeadText}
           onChange={formik.handleChange}>
    <StatLabel fontSize="5xl" fontWeight='thin'>Transaction #</StatLabel>
    <StatNumber fontWeight='hairline' fontSize='3xl' onChange={formik.handleChange}>{txHash}</StatNumber>
    </Stat>
  
            {/* </Container> */}
        </Box>
        </div>
    );
  };



  