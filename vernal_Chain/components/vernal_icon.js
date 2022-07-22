import {
    Box, Heading, Image, Text
  } from '@chakra-ui/react';
  import styles from "../styles/vernalMain.module.css";
  
  
  const Vernalico = () => {
    return (
      <>
        <Image className={styles.vernalIcon} src="/images/egg.png" alt="Vernal Logo" />
      </>
    );
  };
  
  export default Vernalico;
  