import {
  useEffect,
  useState,
  useRef
} from "react";
import {
  signData,
  sha256,
  verifySignature,
} from "../../vernal_backend/encryption-Utils/Encryption-tools";
import axios, { Axios } from "axios";
import {
  useRecoilValue
} from "recoil";
import {
  useFormik
} from "formik";
import {
  defaultNode,
  p2pNet,
  faucetSpecs,
  minerSpecs,
  address,
} from "../../recoil/atoms";
import {
  Box,
  Flex,
  Button,
  Heading,
  Input,
  useToast,
  Link,
  useControllableState,
} from "@chakra-ui/react";
import styles from "/styles/vernalMain.module.css";

export default function Faucet_Card(){
  const toast = useToast();
  const nodeUrl = useRecoilValue(defaultNode);
  const _faucetSpecs = useRecoilValue(faucetSpecs);
  const _miningSpecs = useRecoilValue(minerSpecs);
  const _userAddress = useRecoilValue(address);
  const eggmass = useRecoilValue(p2pNet);
  const [value, setValue] = useControllableState({ defaultValue: 25 });
  const [txHash, setTxHash] = useState("");
  const [balance, setBalance] = useState(0);
  const [isMining, setIsMining] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [blockNumber, setBlockNumber] = useState(0);

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
    backgroundImage:
      "linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%)",
    backgroundBlendMode: "lighten",
  };


  useEffect(() => {

    setUserAddress(sessionStorage.getItem("address"));
    async function getBalance() {
      let [balances] = await Promise.all([
        axios.get(
          `http://localhost:3002/address/${_faucetSpecs.address}/balance`
        ),
      ]);

      const { confirmedBalance } = balances.data;
      setBalance(confirmedBalance);
      console.log("faucet balance", confirmedBalance);
    }
    getBalance();
   }, []);
  
    const signTrans = () => {
    const validAddress = /^[0-9a-f]{40}$/.test(userAddress);
    if (!validAddress) {
      alert("Invalid address");
      return;
    } else {
      console.log("valid address", userAddress);
    }
    let _trans = {
      from: _faucetSpecs.address,
      to: userAddress,
      value,
      fee: 0,
      dateCreated: new Date().toISOString(),
      data: "Hydrate the Mass",
      senderPubKey: _faucetSpecs.pubKey,

    };
    let _transJSON = JSON.stringify(_trans);
    _trans.transactionDataHash = sha256(_transJSON);

    _trans.senderSignature = signData(
      _trans.transactionDataHash,
      _faucetSpecs.privKey
    );
    sendTransaction(_trans);
    }; 
   
      
    const sendTransaction = async (signedTx) => {
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
        console.log("result", result);

        const error = result.data.error;
        console.log("error", error);
        //Reset state
        setTxHash(result.data.transactionDataHash);


        // Mine the block
        if (_miningSpecs.mode === "auto") {
          mineNextBlock();
        }
      } catch (error) {
        console.log(error);
      }
    };

    

    

    const mineNextBlock = async () => {
      setIsMining(true);

      // Send the request to the node to start mining
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        minerAddress: _miningSpecs.address,
        difficulty: _miningSpecs.difficulty,
      };

      const miningResult = await axios.post(
        "http://localhost:3002/mine-next-block",
        body,
        config
      );

      const result = miningResult.data.message;
      console.log(result);
      setIsMining(false);

      // const error = result.data.error;

      if (result === "New block mined and broadcasted successfully") {
        console.log("New block mined successfully");
      } else {
        console.log("New block mined failed");
      }
    };
  
    const formik = useFormik({
    initialValues: {
      address: "",
      },
      onSubmit: async (values) => {
      await signTrans(values.address);
      console.log(values.address);
      },
      
    });

   

  return (
    <div className={styles.background}>
      <Heading
        textAlign="center"
        as="h1"
        size="2xl"
        color="cornsilk"
        fontWeight="hairline"
        marginBottom="8"
        marginTop="10"
      >
        Please enter your wallet address so we can send you some vct!!
      </Heading>{" "}
      <Flex justifycontent="center" alignItems="center">
        <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
          <Flex justifycontent="center" alignItems="center">
            <Heading
              textAlign="center"
              as="h1"
              size="2xl"
              color="cornsilk"
              fontWeight="thin"
              marginBottom="2"
              marginTop="20"
            >
              VernalFaucet a simple faucet solution...
            </Heading>{" "}
          </Flex>{" "}
          <Flex justifycontent="center" alignItems="center" textAlign="center">
            <Heading
              textAlign="center"
              as="h3"
              size="xl"
              color="cornsilk"
              fontWeight="hairline"
              marginTop={2}
              marginLeft={10}
            >
              Available balance: {balance.toLocaleString("en-CA")}
              VCT{" "}
            </Heading>{" "}
          </Flex>{" "}
        </Box>{" "}
        <form justifycontent="center" onSubmit={formik.handleSubmit}>
          <Input
            marginLeft={4}
            textAlign="center"
            placeholder="Address"
            variant="outline"
            type="text"
            justifycontent="center"
            width="100%"
            maxWidth="1000"
            onChange={formik.handleChange}
            value={formik.values.address}
            id="address"
          />
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
            onChange={formik.handleChange}
  
          >
            Submit{" "}
          </Button>{" "}
        </form>{" "}
      </Flex>{" "}
    </div>
  );
};

