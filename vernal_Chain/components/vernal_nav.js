import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Box, Heading,
} from '@chakra-ui/react';
import styles from "../styles/vernalMain.module.css";


const Vernalnav = () => {
  return (
    
    <div className= {styles.vernalNav} >
   
       <Heading size='sm'>🥚    VERNAL CHAIN </Heading>
 
      <Breadcrumb w= '100%' spacing='10px' separator='' align= 'center' >
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
