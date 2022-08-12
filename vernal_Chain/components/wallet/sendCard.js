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
      justifyContent: "center",
      color: "cornsilk",
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
      },
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    
    return (
      <div className={styles.background}>
        <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="15px">
          <Flex justifyContent='start' alignItems='start' bg='linear-gradient(to right,  #212121 0%, #383838 100%) ' className={styles.miniHead}>
          </Flex>
          <Heading
            as="h1"
            size="xl"
            fontWeight="thin"
            color="cornsilk"
            paddingTop={50}
            textAlign="center"
            justifyContent="center"
          >
            Send VernalChain Token
            </Heading>
            <Spacer />
          <Flex justifyContent='center' alignItems='center' textAlign='center' marginTop={5}>
          <form 
              fontSize="3xl"
              as="span"
              alignItems="center"
              textAlign="center"
              justifyContent="center"
              onSubmit={formik.handleSubmit}
              >
          <label 
           as="h1"
           size="xl"
           fontWeight="thin"
           color="cornsilk"
           paddingTop={50}
           textAlign="center"
           alignItems="center"
           justifyContent="center"
           >Recipient</label>
        <Input
          id='recipient'
          name='raddress'
          type='text'
          placeholder='Recipient Address'
          onChange={formik.handleChange}
          value={formik.values.raddress}
          marginTop={5}
          marginBottom={5}
          textAlign="center"
        />
         <label as="h1"
           size="xl"
           fontWeight="extrabold"
           color="cornsilk"
           marginTop={5}
           textAlign="center"
           justifyContent="center"
           >Amount</label>
        <Input
          id='value'
          name='amount'
          type='text'
          placeholder='amount of vct to send'
          onChange={formik.handleChange}
          value={formik.values.amount}
          marginTop={5}
          marginBottom={5}
          textAlign="center"

        />
  
        <Button type='submit' marginTop={5}>Submit</Button>
      </form>
      </Flex>
      <Spacer />
              
      <Stat marginTop={5} 
           color="cornsilk"
           paddingTop={50}
           textAlign="center"
           justifyContent="center"
           className={styles.homeHeadText}>
    <StatLabel fontSize="5xl" fontWeight='thin'>Transaction #</StatLabel>
    <StatNumber fontWeight='hairline' fontSize='3xl'>0x000000000000</StatNumber>
  </Stat>
  
            {/* </Container> */}
        </Box>
        </div>
    );
  };
  
  export default Send_Card;
  