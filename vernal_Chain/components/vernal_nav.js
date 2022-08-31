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
      <Breadcrumb  spacing='30px' separator=' '  fontSize='lg' align= 'start' paddingRight='5'  >   
  <BreadcrumbItem>
    <BreadcrumbLink style={{textDecoration: 'none'}} href='/wallet'>WALLET</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink style={{textDecoration: 'none'}} href='/explorer'>EXPLORER</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink style={{textDecoration: 'none'}} href='/faucet'>FAUCET</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink style={{textDecoration: 'none'}} href='/miner'>MINER</BreadcrumbLink>
  </BreadcrumbItem> 
</Breadcrumb>
    </div>
    </>
  );
};

export default Vernalnav;
