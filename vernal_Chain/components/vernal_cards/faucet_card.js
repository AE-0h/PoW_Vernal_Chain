import { Box, Flex, Heading } from "@chakra-ui/react";
import styles from "/styles/vernalMain.module.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";


const Faucet_Card = () => {
  const innerBoxStyles = {
    borderRadius: "2xl",
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

  
  return (
    <div className={styles.background}>
      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
        <Flex justifyContent='start' alignItems='start' bg='linear-gradient(to right,  #212121 0%, #383838 100%) ' className={styles.miniHead}>
      </Flex>
        <Heading as="h1" size="xl" color="#cff9e0" textShadow="0 1 4px black" fontSize="20px">
          A simple faucet.
          </Heading>
      </Box>
      </div>
  );
};

export default Faucet_Card;
