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
    shadow: "1.5px 5px 8px rgba(4, 4, 4, 4)",
    border: ".5px",
    borderColor: "#C3CDDA",
    boxSize: "50px",
    w: "100%",
    // bg: "linear-gradient(to right,  #212121 0%, #383838 100%)",
    
    
  };

  
  return (
    <div className={styles.background}>
     <HStack spacing={8}>
      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
        <Flex fontWeight="hairline" fontSize='3xl' justifyContent='center' alignItems='start' bg='linear-gradient(to right,  #212121 0%, #383838 100%) ' className={styles.miniHead} h={10} >
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
        <Flex fontWeight='hairline' fontSize='3xl' justifyContent='center' alignItems='start' bg='linear-gradient(to right,  #212121 0%, #383838 100%) ' className={styles.miniHead} h={10}>
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
