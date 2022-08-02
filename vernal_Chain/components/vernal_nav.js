import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react';
import styles from "../styles/vernalMain.module.css";


const Vernalnav = () => {
  return (
    <>
    <div className= {styles.vernalNav}>
      <Breadcrumb spacing='30px' separator=' '  fontSize='lg' align= 'start' paddingRight='5'  >   
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
    </>
  );
};

export default Vernalnav;
