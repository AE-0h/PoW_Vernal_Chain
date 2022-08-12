import { Box, Flex, Image, Heading, Spacer, Container , Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,} from "@chakra-ui/react";
import styles from "/styles/vernalMain.module.css";
import { useFormik } from "formik";
import { Input, Button } from "@chakra-ui/react";
import {useState} from 'react';


const Balance_Card = () => {
  const innerBoxStyles = {
    borderRadius: "3xl",
    alignItems: "left",
    justifyContent: "center",
    textAlign: "left",
    color: "#cff9e0",
    textShadow: "0 1 4px black",
    fontSize: "20px",
    shadow: "0px 5px 10px rgba(4, 4, 4, 4)",
    border: ".5px",
    borderColor: "#C3CDDA",
    boxSize: "800px",
    w: "100%",
  };
  const formik = useFormik({
    initialValues: {
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
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
              id="walletaddress"
              name="walletaddress"
              type="text"
              placeholder="Enter your wallet address"
              justifyContent="center"
              textAlign="center"
              onChange={formik.handleChange}
              value={formik.values.walletAddress}
              marginBottom={5}
              marginTop={5}
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
            <StatLabel fontWeight="thin" color="cornsilk" size="xl">
              Wallet Balance
            </StatLabel>
            <StatNumber fontWeight="normal" color="cornsilk" size="xl">
              vct0.00
            </StatNumber>
          </Stat>
        </Container>
      </Box>
    </div>
  );
};

export default Balance_Card;
