import styles from "/styles/vernalMain.module.css";
import { Flex, Button, Link } from '@chakra-ui/react';
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Flex minWidth='max-content'  gap='1' justifyContent="end" >
    <Link  style={{textDecoration: 'none'}} href="https://github.com/AE-0h" isExternal>
  <Button  colorScheme='gray' leftIcon={<FaGithub />}>
    GitHub
  </Button>
</Link>
<Link style={{textDecoration: 'none'}} href="https://twitter.com/Byzan_Solutions" isExternal>
  <Button colorScheme='gray' leftIcon={<FaTwitter />}>
    Twitter
  </Button>
  </Link>

      </Flex>
    </div>
  );
};

export default Footer;