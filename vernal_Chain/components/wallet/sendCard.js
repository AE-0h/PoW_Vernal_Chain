import { 
    Box, 
    Flex,  
    Heading, 
    Spacer, 
    Container , 
    Stat,
    StatLabel,
    StatNumber,
   } from "@chakra-ui/react";
  import styles from "/styles/vernalMain.module.css";
  import { useFormik } from "formik";
  import { Input, Button } from "@chakra-ui/react";
  
  
  const Send_Card = () => {
    const innerBoxStyles = {
      borderRadius: "3xl",
      alignItems: "left",
      justifyContent: "center",
      textAlign: "left",
      color: "#cff9e0",
      textShadow: "0 1 4px black",
      fontSize: "20px",
      shadow: "0px 5px 10px rgba(4, 4, 4, 4)",
      border: ".5px",
      borderColor: "#C3CDDA",
      boxSize: "800px",
      w: "100%",
    };
    const formik = useFormik({
      initialValues: {
        email: '',
      },
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    
    return (
      <div className={styles.background}>
        <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
          <Flex justifyContent='start' alignItems='start' bg='linear-gradient(to right,  #212121 0%, #383838 100%) ' className={styles.miniHead}>
            <h1 className={styles.miniHeadText}></h1>
          <Heading as='h1' size='xl' fontWeight='thin' color='#cff9e0' paddingLeft={2}>
          </Heading>
          </Flex>
          <Heading
            as="h1"
            size="xl"
            fontWeight="extrabold"
            color="cornsilk"
            paddingTop={50}
            fontFamily="sans-serif"
            textAlign="center"
            justifyContent="center"
            className={styles.homeHeadText}
          >
            Send VernalChain Token
            </Heading>
            <Spacer />
            <Container
              fontSize="3xl"
              as="span"
              textAlign="center"
              justifyContent="center"
              marginLeft="-1.5"
              marginRight="-1.5"
            >
               <form onSubmit={formik.handleSubmit}>
        <label as="h1"
           size="xl"
           fontWeight="extrabold"
           color="cornsilk"
           paddingTop={50}
           fontFamily="sans-serif"
           textAlign="center"
           justifyContent="center"
           className={styles.homeHeadText} >Recipient</label>
        <Input
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
         <label as="h1"
           size="xl"
           fontWeight="extrabold"
           color="cornsilk"
           paddingTop={50}
           fontFamily="sans-serif"
           textAlign="center"
           justifyContent="center"
           className={styles.homeHeadText} >Amount</label>
        <Input
          id='value'
          name='value'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
  
        <Button type='submit'>Submit</Button>
      </form>
  
      <Spacer />
              
      <Stat marginTop='1.5cm'   size="xl"
           fontWeight="extrabold"
           color="cornsilk"
           paddingTop={50}
           fontFamily="sans-serif"
           textAlign="center"
           justifyContent="center"
           className={styles.homeHeadText}>
    <StatLabel >Transaction #</StatLabel>
    <StatNumber>0x000000000000</StatNumber>
  </Stat>
  
            </Container>
        </Box>
        </div>
    );
  };
  
  export default Send_Card;
  