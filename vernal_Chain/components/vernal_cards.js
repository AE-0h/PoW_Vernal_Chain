import { Box, Badge, Flex} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icon';
import Image from "next/image";


const Card = () => {

    const outerBoxStyles = {
        shadow: '3xl',
        borderRadius: 'lg',
        border:'1px',
        borderColor:'gray.800',
        boxSize: '800px',
        w: '500%',
        p: '30',
         background:
        'linear-gradient(to right, #DCCFAA 0%, #818E82 100%)',
       }
    
      const innerBoxStyles = {
        borderRadius: 'lg',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: 'full',
        shadow: '2xl',
        color: 'D1CFD3',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
      }
      return (
        <Flex
          flexWrap='wrap'
          spacing='24px'
          gap='16px'
          justifyContent='space-evenly'
        >
        
          {/* adding backdrop-blur property to the element */}
          <Box sx={outerBoxStyles}>
            <Box sx={innerBoxStyles} backdropFilter='auto' backdropBlur='5px'>
              Welcome to the Vernal Chain 
            </Box>
          </Box>
       
        </Flex>
      )
    }

    export default Card;