import { Box, Flex, Image, Heading } from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'


const Card = () => {
  const innerBoxStyles = {
    borderRadius: "3xl",
    display: 'flex',
    alignItems: "left",
    justifyContent: "center",
    textAlign: "left",
    color: "#cff9e0",
    textShadow: "0 1 4px black",
    fontSize: "20px",
    shadow: "0px 5px 10px rgba(4, 4, 4, 4)",
    border: "1px",
    borderColor: "#D5D5DF",
    boxSize: "800px",
    w: "100%",
  };
  return (
 
  <SimpleGrid columns={4} spacing={20}>
      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
        <Image src="/images/egg.png" alt="Vernal Logo" width="50px" height="50px" />
        <Divider orientation='horizontal' />
        <Flex justifyContent='start' alignItems='start'>
        <Heading as='h1' size='xl' fontWeight='thin' color='#cff9e0'>
          EXPLORER
        </Heading>
      </Flex>

      </Box>
      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
      <Image src="/images/egg.png" alt="Vernal Logo" width="50px" height="50px" />
      <Divider orientation='horizontal' />
      <Flex justifyContent='start' alignItems='start'>
        <Heading as='h1' size='xl' fontWeight='thin' color='#cff9e0'>
          FAUCET
        </Heading>
      </Flex>

      </Box>

      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
      <Image src="/images/egg.png" alt="Vernal Logo" width="50px" height="50px" />
      <Divider orientation='horizontal' />
      <Flex justifyContent='start' alignItems='start'>
        <Heading as='h1' size='xl' fontWeight='thin' color='#cff9e0'>
          MINER
        </Heading>
      </Flex>

      </Box>

      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
      <Image src="/images/egg.png" alt="Vernal Logo" width="50px" height="50px" />
      <Divider orientation='horizontal' />
      <Flex justifyContent='start' alignItems='start'>
        <Heading as='h1' size='xl' fontWeight='thin' color='#cff9e0' textShadow='dark-lg'>
          NODES
        </Heading>
      </Flex>

      </Box>
      </SimpleGrid>
     
   
  );
};

export default Card;
