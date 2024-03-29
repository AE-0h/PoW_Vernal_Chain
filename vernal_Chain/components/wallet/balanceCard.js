import { Box,
  Flex, 
  Heading, 
  Spacer, 
  Container , 
  Stat,
  StatLabel,
  StatNumber,
  useControllableState
 } from "@chakra-ui/react";

import styles from "/styles/vernalMain.module.css";
import { useFormik } from "formik";
import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const BalanceCard = () => {
  const [value, setValue] = useControllableState({ defaultValue: 0 });
  const [userAddress, setUserAddress] = useState("");
  const nodeUrl = "http://localhost:3002";

  let getBalance = async (addr) => {
    await setUserAddress(addr);
    let r = await axios.get(`${nodeUrl}/address/${addr}`);
    let b = r.data.addressData.addressBalance;
    setValue(b);
  };

  const formik = useFormik({
    initialValues: {
      address: '',
    },
    onSubmit: async (values) => {
      await getBalance(values.address);
    }

  }); 
    const innerBoxStyles = {
      borderRadius: "3xl",
      alignItems: "left",
      justifycontent: "center",
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
        <Flex
          justifycontent="start"
          alignItems="start"
          bg="linear-gradient(to right,  #212121 0%, #383838 100%) "
          className={styles.miniHead}
        >
        </Flex>
        <Flex className={styles.sendMain}>
        <Heading
          as="h1"
          size="xl"
          fontWeight="thin"
          color="cornsilk"
          marginTop={5}
          marginBottom={10}
          textAlign="center"
          justifycontent="center"
        >
          Enter your key to view balance
        </Heading>
        <Spacer />

        <Container
          fontSize="3xl"
          as="span"
          textAlign="center"
          justifycontent="center"
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
              paddingtop={50}
              textAlign="center"
              justifycontent="center"
              marginBottom={10}
            >
              Wallet Address
            </label>
            <Input
              id="address"
              name="address"
              type="text"
              placeholder="Enter your wallet address"
              justifycontent="center"
              textAlign="center"
              maxwidth={1000}
              marginBottom={10}
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
              justifycontent="center"
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
            paddingtop={50}
            textAlign="center"
            justifycontent="center"
          >
            <StatLabel fontWeight="thin" color="cornsilk" fontSize="5xl">
              Wallet Balance
            </StatLabel>
            <StatNumber fontWeight="hairline" color="cornsilk" size="xl" onSubmit={formik.handleSubmit} >
              vct {value}
            </StatNumber>
          </Stat>
        </Container>
        </Flex>
      </Box>
    </div>
  );
}
 
export default BalanceCard;