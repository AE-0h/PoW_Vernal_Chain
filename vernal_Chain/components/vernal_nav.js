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
      <Image src="/images/egg.png" alt="Vernal Logo" width="50px" height="50px"/>
      </Box>

      <Breadcrumb w= '100%' spacing='30px' separator='' align= 'end' paddingRight='6'  paddingBottom='5'>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>WALLET</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>EXPLORER</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>FAUCET</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>MINER</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>NODES</BreadcrumbLink>
  </BreadcrumbItem>
  
</Breadcrumb>
    </div>
  );
};

export default Vernalnav;
