import { Tabs, TabList, TabPanels, Tab, TabPanel, Container } from '@chakra-ui/react';

import styles from "/styles/vernalMain.module.css";


const Vernalnav = () => {
  return (
    <div >
      <Container>
      <Tabs size="md" align="end" colorScheme='green' variant='solid-rounded'>
        <TabList>
          <Tab>EXPLORER</Tab>
          <Tab>FAUCET</Tab>
          <Tab>MINER</Tab>
          <Tab>NODE</Tab>
          <Tab>VERNALCHAIN</Tab>
          
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Container>
    </div>
  );
};

export default Vernalnav;
