import { Box, Badge, Flex } from "@chakra-ui/react";

const Card = () => {
  const innerBoxStyles = {
    borderRadius: "3xl",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#cff9e0",
    textShadow: "0 1 4px black",
    fontWeight: "bold",
    fontSize: "20px",
    shadow: "3xl",
    border: "1px",
    borderColor: "#DaCFAc",
    boxSize: "800px",
    w: "200%",
    p: "80",
  };
  return (
    <Flex
      flexWrap="wrap"
      spacing="24px"
      gap="16px"
      justifyContent="space-evenly"
    >
      <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px"></Box>
    </Flex>
  );
};

export default Card;
