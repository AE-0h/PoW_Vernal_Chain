import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Box, Heading, Image, Text
} from '@chakra-ui/react';
import styles from "../styles/vernalMain.module.css";


const Vernalnav = () => {
  return (
    
    <div className= {styles.vernalNav} >

      <Box textAlign='justify'>
      <Image className={styles.vernalIcon} src="/images/egg.png" alt="Vernal Logo" />
      </Box>

      <Breadcrumb  spacing='30px' separator=' '  fontSize='2xl' align= 'end' paddingRight='20'  >
  <BreadcrumbItem >
    <BreadcrumbLink href='/'>HOME</BreadcrumbLink>
  </BreadcrumbItem>      
  <BreadcrumbItem>
    <BreadcrumbLink href='/wallet'>WALLET</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href='/explorer'>EXPLORER</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/faucet'>FAUCET</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/miner'>MINER</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem >
    <BreadcrumbLink href='/nodes'>NODES</BreadcrumbLink>
  </BreadcrumbItem>
  
</Breadcrumb>
    </div>
  );
};

export default Vernalnav;
