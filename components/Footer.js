import {
  Box,
  Button,
  Code,
  Flex,
  Image,
  Link,
  LinkBox,
  Text,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      flexDirection="column"
      pt="5em"
      minH="20em"
      alignItems="center"
      justifyContent="center"
      mt="5em"
      p="0"
      border="none"
    >
      <Text color="gray.300" mb="8em" letterSpacing="widest">
        VRMeta Center - BEP20 Token
      </Text>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        backgroundImage="url(/footer_bg.svg)"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgColor="#3c3c3c"
        borderTopRadius="50%"
        w="full"
      >
        <Image
          src="/vmt_logo_white.svg"
          alt="VMTree"
          mt="-4em"
          boxSize="150px"
        />
        <Flex flexDirection="column">
          <Flex>
            <Link
              href="https://github.com/vmtree/chainlink-vmt/"
              isExternal="true"
              sx={{ textDecoration: "none" }}
              _hover={{ textDecoration: "none" }}
            >
              <Button
                variant="solid"
                size="md"
                m="1em"
                borderRadius={18}
                bg="#fff"
                _hover={{ background: "#2c4cb6", color: "#fff" }}
                sx={{ textDecoration: "none" }}
              >
                GITHUB
              </Button>
            </Link>
            {/* TODO: add docs link here */}
            <Link
              href="#"
              isExternal="true"
              sx={{ textDecoration: "none" }}
              _hover={{ textDecoration: "none" }}
            >
              <Button
                variant="solid"
                size="md"
                m="1em"
                borderRadius={18}
                bg="#fff"
                _hover={{ background: "#2c4cb6", color: "#fff" }}
              >
                ABOUT
              </Button>
            </Link>
          </Flex>
        </Flex>
        <Code color="whiteAlpha.600" mb="2em" mt="4em" fontSize="sm" bg="none">
          © Copyright 2022 VMTree - All rights reserved
        </Code>
      </Flex>
    </Flex>
  );
};

export default Footer;
