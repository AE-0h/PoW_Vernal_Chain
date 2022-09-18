import { Box, Flex, HStack , Stack, Spacer} from "@chakra-ui/react";
import styles from "/styles/vernalMain.module.css";


const Explorer_Card = () => {
  
  const innerBoxStyles = {
    borderRadius: "3xl",
    alignItems: "left",
    justifyContent: "center",
    textAlign: "left",
    color: "cornsilk",
    fontSize: "20px",
    shadow: "2px 5px 12px rgba(4, 4, 4, 4)",
    border: ".5px",
    borderColor: "#C3CDDA",
    boxSize: "800px",
    w: "100%",
    // bg: "linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);",
  };

  const stackStyles = {
    borderRadius: "xl",
    alignItems: "left",
    justifyContent: "center",
    textAlign: "left",
    color: "cornsilk",
    textShadow: "0 1 4px black",
    fontSize: "20px",
    shadow: ".5px 1px 3px rgba(4, 4, 4, 4)",
    border: ".5px",
    borderColor: "#C3CDDA",
    boxSize: "50px",
    w: "100%",
    // background: "#C9CCD3",
    // backgroundImage: "linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%)",
    // backgroundBlendMode: "lighten",
   
    
    
  };

  
  return (
    <div className={styles.background}>
     <HStack spacing={8}>
      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
        <Flex fontWeight="hairline" fontSize='3xl' justifyContent='center' alignItems='start' h={10} >
          BLOCKS
        </Flex>
          <Spacer />
        <Stack fontWeight="hairline" spacing={3} marginTop={3}>
        <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>
        <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>
        <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>
        <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>
        <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>
          <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>
          <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>
          <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>
          <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>
          <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>

        </Stack>
        
          </Box>
      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
        <Flex fontWeight='hairline' fontSize='3xl' justifyContent='center' alignItems='start' h={10}>
            TRANSACTIONS
        </Flex>
        <Stack spacing={3} marginTop={3}>
        <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>
        <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>
        <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>
        <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>
        <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>
          <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>
          <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>
          <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>
          <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>
          <Box sx={stackStyles}  backdropFilter="auto" backdropBlur="15px">
          </Box>

        </Stack>
        
      </Box>    
   
    </HStack>

      </div>
  );
};

export default Explorer_Card;
