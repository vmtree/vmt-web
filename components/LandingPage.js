import {
  Box,
  Flex,
  Button,
  Text,
  Image,
  Container,
  Code,
  Heading,
  Hide,
  Link,
  Divider,
  Center,
  Show,
  Grid,
  GridItem,
  AspectRatio,
  Stack,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  DownloadIcon,
} from "@chakra-ui/icons";
import Card from "../components/Card";

const LandingPage = (props) => {
  return (
    <Box h="full" alignItems="center" w="full">
      <Flex flexDirection="column" h="full" alignItems="center" w="full">
        <Hide below="md">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            pt="10vh"
            margin="150px"
            mb="5em"
            backgroundSize="contain"
            backgroundImage="url(/https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
            backgroundPosition="right"
            backgroundRepeat="no-repeat"
            w="full"
          >
            
            <Flex mr="40%" flexDirection="column" h="full">
              <Heading
                letterSpacing="widest"
                fontSize="5xl"
                fontWeight="semibold"
              >
                VRMeta Center & VRmeta Sports
              </Heading>
              <Text letterSpacing="widest">Verifia  ble Merkle Trees</Text>
              <Link sx={{ textDecoration: "none" }} href="/dapp">
                <Button
                  variant="solid"
                  size="sm"
                  mt="2em"
                  pl="2em"
                  pr="1em"
                  borderRadius={155}
                  bg="#3c3c3c"
                  color="#fff"
                  rightIcon={<ChevronRightIcon />}
                  _hover={{ background: "#fff", color: "#3c3c3c" }}
                >
                  Buy Tokens
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Hide>

        <Show below="md">
          <Flex
            justifyContent="center"
            alignItems="center"
            pt="30vh"
            mb="5em"
            backgroundSize="contain"
            backgroundImage="url(/tree_skeleton_small.svg)"
            backgroundPosition="right"
            backgroundRepeat="no-repeat"
            w="full"
          >
            <Flex
              alignItems="center"
              alignContent="center"
              flexDirection="column"
              h="full"
            >
              <Heading
                letterSpacing="widest"
                fontSize="6xl"
                fontWeight="semibold"
              >
                VRMC
              </Heading>
              <Text letterSpacing="widest">VRMetaCenter</Text>
              <Link sx={{ textDecoration: "none" }}>
                <Button
                  variant="solid"
                  size="sm"
                  mt="2em"
                  pl="2em"
                  pr="1em"
                  borderRadius={0}
                  bg="#3c3c3c"
                  color="#fff"
                  rightIcon={<ChevronRightIcon />}
                  _hover={{ background: "#fff", color: "#3c3c3c" }}
                >
                  Buy tokens!
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Show>

      

        <Flex
          justifyContent="space-around"
          alignItems="center"
          pt="3em"
          pb="3em"
          pl="15%"
          pr="15%"
          backgroundSize="contain"
          backgroundImage="url(/https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
          backgroundPosition="right"
          backgroundRepeat="no-repeat"
          w="full"
          bg="rgb(12 12 12 / 80%)"
          zIndex="0"
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="2xl" color="#fff">
              VRMeta Center
            </Text>
            <Text fontSize="sm" color="#fff">
              Token name
            </Text>
          </Flex>
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="2xl" color="#fff">
              VRMC
            </Text>
            <Text fontSize="sm" color="#fff">
              SYMBOL
            </Text>
          </Flex>
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="2xl" color="#fff">
              1000000000000
            </Text>
            <Text fontSize="sm" color="#fff">
              SUPPLY
            </Text>
          </Flex>
        </Flex>

        <Flex align="center">
          <Link
            href="#about"
            _hover={{ textDecoration: "none", boxShadow: "dark-lg" }}
            mt="3%"
            borderRadius="50%"
            boxShadow="xl"
            pos="absolute"
          >
            <ChevronDownIcon
              boxSize="10"
              borderRadius="0%"
              color="#365AD2"
              zIndex="9999"
            />
          </Link>
        </Flex>

        
      </Flex>

      <Flex
        justifyContent="space-between"
        mt="5em"
        ml="0"
        alignItems="center"
        id="about"
      >
        <Flex
          flexDirection="column"
          backgroundColor="#3c3c3c"
          color="#fff"
          p="5%"
          maxW="75%"
          ml={0}
          borderTopRightRadius="0"
          borderBottomRightRadius="0"
          // backgroundImage="url(/blue_curved_box.svg)"
          // backgroundPosition="center"
          // backgroundRepeat="no-repeat"
          // backgroundSize="contain"
        >
          <Text fontSize="5xl" fontWeight="bold">
            VRMC Sports
          </Text>
          <Text mt="1em">
          We build breathtaking Virtual Reality experiences and 3D videos. 100% adapted to your business needs with an end to end digital process
            <br />
            <br />
            Your role is determined by your goals. Just some of the options that can be filled with experience and passion
            <br />
            <br />
            Play Tran Coach Manage Own, Sell, Earn
          </Text>
        </Flex>
        <Flex flexDirection="column" mr="10%" alignItems="center">
          <Link
            href="/dapp"
            _hover={{ textDecoration: "none", boxShadow: "2xl" }}
            borderRadius="50%"
            boxShadow="xl"
            boxSize="80px"
            alignItems="center"
            alignContent="center"
          >
            <DownloadIcon
              boxSize="80px"
              color="#3c3c3c"
              zIndex="9999"
              p="20%"
            />
          </Link>
          <Text mt="1em" fontWeight="semibold">
            Read Documentation
          </Text>
        </Flex>
      </Flex>

      <Flex
        flexDirection="column"
        align="center"
        w="full"
        mt="8%"
        alignContent="center"
        alignItems="center"
      >
        <Flex w="0%" alignContent="center" alignItems="center">
          <Text textAlign="center" letterSpacing="wide">
            VMTree allows anyone to deploy a verifable merkle tree using the
            chainlink network. Lorem ipsum condimentum ornare ante, at maximus
            sapien porta sit amet. Morbi orci lectus, cursus ut ipsum convallis,
            tempor feugiat quam. In vel odio non velit blandit lobortis. Mauris
            quis quam fermentum, cursus quam at, dignissim ante.
          </Text>
        </Flex>
      </Flex>

    

      <Flex
        flexDirection="column"
        align="center"
        w="full"
        mt="5%"
        alignContent="center"
        alignItems="center"
        id="team"
        justifyContent="center"
      >
        <Heading>VRMC Team</Heading>
        <Flex
          flexDirection="row"
          align="center"
          mt="4%"
          justifyContent="space-between"
        >
          <Card />
          <Card />
        </Flex>
        <Flex
          flexDirection="row"
          align="center"
          mt={10}
          alignContent="center"
          alignItems="center"
        >
          <Card />
          <Card />
        </Flex>
      </Flex>
    </Box>
  );
};

export default LandingPage;
