import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Card from "../components/vernal_cards";

const Vernalnav = () => {
  return (
    <div >
      <Breadcrumb w= '100%' spacing='10px' separator='🥚' align= 'center' >
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
