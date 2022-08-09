import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
  } from '@chakra-ui/react';
  import styles from "/styles/vernalMain.module.css";
  
  
  const Wallet_NAV = () => {
    return (
      <>
      <div className= {styles.vernalNav}>
    <Breadcrumb spacing='30px' separator=' '  fontSize='lg' align= 'start' paddingRight='5'  >   
      <BreadcrumbItem>
    <BreadcrumbLink href='/wallet'>CREATE</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink href='/wallet/balance'>BALANCE</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink href='/wallet/send'>SEND</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
      </div>
      </>
    );
  };
  
  export default Wallet_NAV;
  