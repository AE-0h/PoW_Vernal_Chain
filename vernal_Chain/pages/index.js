import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/vernalMain.module.css";
import Footer from "../components/vernal_footer";
import Body from "../components/body";
import Header from "../components/vernal_header";
import Vernalnav from "../components/vernal_nav";
import { Flex, Spacer, Box, Heading, ButtonGroup, Button, Center, Container, SimpleGrid } from '@chakra-ui/react'

export default function Wallet() {
  return (
    <>
    <div
      >
        <Header/>
        <Body/>
      <Footer />
      </div>
    </>
  );
}