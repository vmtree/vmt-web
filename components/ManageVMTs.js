import { SettingsIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Text,
  Image,
  Box,
  Link,
  Grid,
  GridItem,
  Show,
  SimpleGrid,
} from "@chakra-ui/react";

const ManageVMTs = (props) => {
  return (
    <Box paddingLeft="7%" paddingRight="7%">
      <Flex>
        <Text fontSize="xl" ml="2em" fontWeight="bold">
          Staked VRMC
        </Text>
      </Flex>

      <Box>
        {/* Header row */}
        <Flex
          //   justifyContent="center"
          pl="5em"
          pr="5em"
          fontSize="xx-small"
          minWidth="max-content"
          alignItems="center"
          gap="2"
        >
          <Flex>
            <Box w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
          </Flex>
          <Flex>
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
          </Flex>
        </Flex>

        <Box>
          <SimpleGrid
            columns={25}
            spacing={0.5}
            fontSize="xx-small"
            color="gray.400"
          >
            <Text bg="#fff"></Text>
            <Text bg="#fff">STATUS</Text>
            <Text bg="#fff"></Text>
            <Text bg="#fff"></Text>
            <Text bg="#fff"></Text>
            <Text bg="#fff">ADDRESS</Text>
            <Text bg="#fff"></Text>
            <Text bg="#fff"></Text>
            <Text bg="#fff"></Text>
            <Text bg="#fff"></Text>
            <Text bg="#fff"></Text>
            <Text bg="#fff"></Text>
            <Text bg="#fff">NAME</Text>
            <Text bg="#fff"></Text>
            <Text bg="#fff"></Text>
            <Text bg="#fff">BALANCE</Text>
            <Text bg="#fff"></Text>
            <Text bg="#fff"></Text>
            <Text bg="#fff">USAGE</Text>
            <Text bg="#fff"></Text>
            <Text bg="#fff">CREATED</Text>
            <Text bg="#fff"></Text>
            <Text bg="#fff"></Text>
            <Text bg="#fff"></Text>
            <Text bg="#fff"></Text>
          </SimpleGrid>

          <Flex
            justifyContent="space-between"
            backgroundColor="#fff"
            borderRadius={155}
            boxShadow="md"
            padding="1em"
            pl="5em"
            pr="5em"
            fontSize="smaller"
            color="gray.600"
            margin="1em"
          >
            <Text>
              <Image src="enabled_vmt.svg" alt="enabled" />
            </Text>
            <Text>0x9eEF87dD05c10dF6604BAafB2F944fE087Fe095d</Text>
            <Text>0.01 BNB</Text>
            <Text>0.034 BNB</Text>
            <Text isNumeric>72</Text>
            <Text>13.07.2022</Text>
            <Text>
              <Link href="#">
                <SettingsIcon />
              </Link>
            </Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            backgroundColor="#fff"
            borderRadius={155}
            boxShadow="md"
            padding="1em"
            pl="5em"
            pr="5em"
            fontSize="smaller"
            color="gray.600"
            margin="1em"
          >
            <Image src="disabled_vmt.svg" alt="disabled" />
            <Text>0x9eEF87dD05c10dF6604BAafB2F944fE087Fe095d</Text>
            <Text>0.01 BNB</Text>
            <Text>0.034 BNB</Text>
            <Text isNumeric>72</Text>
            <Text>13.07.2022</Text>
            <Text>
              <Link href="#">
                <SettingsIcon />
              </Link>
            </Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            backgroundColor="#fff"
            borderRadius={155}
            boxShadow="md"
            padding="1em"
            pl="5em"
            pr="5em"
            fontSize="smaller"
            color="gray.600"
            margin="1em"
          >
            <Text>
              <Image src="enabled_vmt.svg" alt="enabled" />
            </Text>
            <Text>0x9eEF87dD05c10dF6604BAafB2F944fE087Fe095d</Text>
            <Text>0.01 BNB</Text>
            <Text>0.034 BNB</Text>
            <Text isNumeric>72</Text>
            <Text>13.07.2022</Text>
            <Text>
              <Link href="#">
                <SettingsIcon />
              </Link>
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ManageVMTs;
