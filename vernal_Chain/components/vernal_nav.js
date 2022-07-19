import { Tabs, TabList, TabPanels, Tab, TabPanel, Container, SimpleGrid } from '@chakra-ui/react';
import Card from "../components/vernal_cards";

const Vernalnav = () => {
  return (
    <div >
      <Container>
      <Tabs size="md" align="center" colorScheme='green' variant='solid-rounded'>
        <TabList>
          <Tab>EXPLORER</Tab>
          <Tab>FAUCET</Tab>
          <Tab>MINER</Tab>
          <Tab>NODE</Tab>
          <Tab>VERNALCHAIN</Tab>
          
        </TabList>

        <TabPanels>
          <TabPanel>
          <SimpleGrid columns={1} spacing={300}>
            <Card />
          </SimpleGrid>
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
