import { SettingsIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Text,
  Image,
  Box,
  Link,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";

const ExploreVMTs = (props) => {
  return (
    <Box paddingLeft="7%" paddingRight="7%">
      <Flex>
        <Text fontSize="xl" ml="2em" fontWeight="bold">
          Explore VMTs
        </Text>
      </Flex>

      <Box>
        {/* Header row */}
        <Flex
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

        <Box>
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
            <Text>0xdAC17F958D2ee523a2206206994597C13D831ec7</Text>
            <Text>Test Merkle Tree #1</Text>
            <Text>28.7502 LINK</Text>
            <Text isNumeric>72</Text>
            <Text>10.05.2022</Text>
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
            <Image src="enabled_vmt.svg" alt="enabled" />
            <Text>0xdAC17F958D2ee523a2206206994597C13D831ec7</Text>
            <Text>Test Merkle Tree #1</Text>
            <Text>28.7502 LINK</Text>
            <Text isNumeric>72</Text>
            <Text>10.05.2022</Text>
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
            <Text>0xdAC17F958D2ee523a2206206994597C13D831ec7</Text>
            <Text>Test Merkle Tree #1</Text>
            <Text>28.7502 LINK</Text>
            <Text isNumeric>72</Text>
            <Text>10.05.2022</Text>
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
            <Text>0xdAC17F958D2ee523a2206206994597C13D831ec7</Text>
            <Text>Test Merkle Tree #1</Text>
            <Text>28.7502 LINK</Text>
            <Text isNumeric>72</Text>
            <Text>10.05.2022</Text>
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
            <Text>0xdAC17F958D2ee523a2206206994597C13D831ec7</Text>
            <Text>Test Merkle Tree #1</Text>
            <Text>28.7502 LINK</Text>
            <Text isNumeric>72</Text>
            <Text>10.05.2022</Text>
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
            <Text>0xdAC17F958D2ee523a2206206994597C13D831ec7</Text>
            <Text>Test Merkle Tree #1</Text>
            <Text>28.7502 LINK</Text>
            <Text isNumeric>72</Text>
            <Text>10.05.2022</Text>
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
            <Text>0xdAC17F958D2ee523a2206206994597C13D831ec7</Text>
            <Text>Test Merkle Tree #1</Text>
            <Text>28.7502 LINK</Text>
            <Text isNumeric>72</Text>
            <Text>10.05.2022</Text>
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
            <Text>0xdAC17F958D2ee523a2206206994597C13D831ec7</Text>
            <Text>Test Merkle Tree #1</Text>
            <Text>28.7502 LINK</Text>
            <Text isNumeric>72</Text>
            <Text>10.05.2022</Text>
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
            <Text>0xdAC17F958D2ee523a2206206994597C13D831ec7</Text>
            <Text>Test Merkle Tree #1</Text>
            <Text>28.7502 LINK</Text>
            <Text isNumeric>72</Text>
            <Text>10.05.2022</Text>
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
            <Text>0xdAC17F958D2ee523a2206206994597C13D831ec7</Text>
            <Text>Test Merkle Tree #1</Text>
            <Text>28.7502 LINK</Text>
            <Text isNumeric>72</Text>
            <Text>10.05.2022</Text>
            <Text>
              <Link href="#">
                <SettingsIcon />
              </Link>
            </Text>
          </Flex>
        </Box>

        <Flex
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          mt="3em"
        >
          <Link isExternal="true" sx={{ textDecoration: "none" }}>
            <Button
              variant="solid"
              size="sm"
              pl="2em"
              pr="1em"
              borderRadius={155}
              bg="#365AD2"
              color="#fff"
              rightIcon={<ChevronDownIcon />}
              _hover={{ background: "#fff", color: "#365AD2" }}
            >
              See More
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default ExploreVMTs;
