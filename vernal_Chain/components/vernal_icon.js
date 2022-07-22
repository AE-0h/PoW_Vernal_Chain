import {
   Image, Link
  } from '@chakra-ui/react';
  import styles from "../styles/vernalMain.module.css";
  
  
  const Vernalico = () => {
    return (
      <>
        <Link href="/" >
        <Image className={styles.vernalIcon} src="/images/egg.png" alt="Vernal Logo" />
        </Link>
      </>
    );
  };
  
  export default Vernalico;
  