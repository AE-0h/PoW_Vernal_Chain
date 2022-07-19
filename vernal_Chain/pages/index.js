import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/vernalMain.module.css";
import Footer from "../components/vernal_footer";
import Vernalnav from "../components/vernal_nav";
import { Flex, Spacer, Box, Heading, ButtonGroup, Button } from '@chakra-ui/react'

export default function Wallet() {
  return (
    <>
    <div style={{ display: "flex", justifyContent: "center" }}
      >
     <Vernalnav /> 
      <Footer />
    </div>
    </>
  );
}