import { Box, Badge, Flex} from '@chakra-ui/react';


const Card = () => {

    const outerBoxStyles = {
        shadow: 'dark',
        borderRadius: '3xl',
        border:'0.5px',
        borderColor:'#e6e6e6',
        boxSize: '800px',
        w: '500%',
        p: '30',
         background:
        'linear-gradient(to right, #DCCFAA 0%, #818E82 100%)',
       }
    
      const innerBoxStyles = {
        borderRadius: '3xl',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: 'full',
        shadow: '2xl',
        color: '#cff9e0',
        textShadow: '0 0 4px black',
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