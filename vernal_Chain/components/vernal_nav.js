import { Tabs, TabList, TabPanels, Tab, TabPanel, Container, SimpleGrid, Box } from '@chakra-ui/react';
import Card from "../components/vernal_cards";

const Vernalnav = () => {
  return (
    <div >
      <Container>
      <Tabs size="md" align="end" colorScheme='green' variant='solid-rounded' isFitted  >
        <TabList>
          <Tab>WALLET</Tab>
          <Tab>EXPLORER</Tab>
          <Tab>FAUCET</Tab>
          <Tab>MINER</Tab>
          <Tab>NODE</Tab>
          <Tab>VERNALCHAIN</Tab>
          
        </TabList>

        <TabPanels>
          <TabPanel>
            <Card />
          </TabPanel>
          <TabPanel>
            <Card />
          </TabPanel>
          <TabPanel>
          <Card/>
          </TabPanel>
          <TabPanel>
         <Card/>
          </TabPanel>
          <TabPanel>
          <Card/>
          </TabPanel>
          <TabPanel>
          <Card/>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Container>
    </div>
  );
};

export default Vernalnav;
