import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Box, Heading,
} from '@chakra-ui/react'


const Vernalnav = () => {
  return (
    
    <div >
   
       <Heading size='md'>🥚 VERNAL CHAIN </Heading>
 
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
