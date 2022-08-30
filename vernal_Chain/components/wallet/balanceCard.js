import { Box,
  Flex, 
  Heading, 
  Spacer, 
  Container , 
  Stat,
  StatLabel,
  StatNumber,
  useToast,
  useControllableProp,
  useControllableState
 } from "@chakra-ui/react";

import styles from "/styles/vernalMain.module.css";
import { useFormik } from "formik";
import { Input, Button } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { useRecoilValue } from "recoil";
import { walletState } from "../../recoil/atoms";
import axios from "axios";




const BalanceCard = () => {
  const [value, setValue] = useControllableState({ defaultValue: 0 });
  const [userAddress, setUserAddress] = useState("");
  const [confirmedBalance, setConfirmedBalance] = useState("");
  const [pendingBalance, setPendingBalance] = useState("");
  const [safeBalance, setSafeBalance] = useState("");
  const [safeCount, setSafeCount] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const nodeUrl = "http://localhost:3002";

  let balanceTick;
  let getBalance = async (addr) => {
   let r = await axios.get(`${nodeUrl}/address/${addr}`);
    let b = r.data.addressData.addressBalance;
     balanceTick= b;
     console.log(balanceTick);

  };

  

  const innerBoxStyles = {
    borderRadius: "3xl",
    alignItems: "left",
    justifyContent: "center",
    fontSize: "20px",
    shadow: "0px 5px 10px rgba(4, 4, 4, 4)",
    border: ".5px",
    borderColor: "#C3CDDA",
    boxSize: "800px",
    w: "100%",
  };

  const formik = useFormik({
    initialValues: {
      address: '',
    },
    
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setUserAddress(values.address);
      getBalance(values.address);
    }
  }); 
          
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
        <Heading
          as="h1"
          size="xl"
          fontWeight="thin"
          color="cornsilk"
          marginTop={20}
          textAlign="center"
          justifyContent="center"
        >
          Enter your key to view balance
        </Heading>
        <Spacer />

        <Container
          fontSize="3xl"
          as="span"
          textAlign="center"
          justifyContent="center"
          marginLeft="-1.5"
          marginRight="-1.5"
          fontWeight="thin"
          color="cornsilk"
        >
          <form onSubmit={formik.handleSubmit}>
            <label
              as="h1"
              size="xl"
              fontWeight="thin"
              color="cornsilk"
              paddingTop={50}
              textAlign="center"
              justifyContent="center"
            >
              Wallet Address
            </label>
            <Input
              id="address"
              name="address"
              type="text"
              placeholder="Enter your wallet address"
              justifyContent="center"
              textAlign="center"
              marginBottom={5}
              marginTop={5}
              onChange={formik.handleChange}
              value={formik.values.address}
            />

            <Button
              type="submit"
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
              justifyContent="center"
              className={styles.homeButton}
            >
              Submit
            </Button>
          </form>

          <Spacer />

          <Stat
            marginTop="1.5cm"
            size="xl"
            fontWeight="thin"
            color="cornsilk"
            paddingTop={50}
            textAlign="center"
            justifyContent="center"
          >
            <StatLabel fontWeight="thin" color="cornsilk" fontSize="5xl">
              Wallet Balance
            </StatLabel>
            <StatNumber fontWeight="hairline" color="cornsilk" size="xl" onSubmit={formik.handleSubmit} >
              vct {value}
            </StatNumber>
          </Stat>
        </Container>
      </Box>
    </div>
  );
}
 
export default BalanceCard;
