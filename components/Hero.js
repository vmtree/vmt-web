import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Text,
  Image,
  Box,
  Divider,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import { Icon, Input, Typography } from "web3uikit";

const Hero = ({ handleVRMCCreation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <Box
      padding="2em"
      align="center"
      justify="center"
      boxSize="full"
      maxH="10vh"
      margin = "20px"
      minW="100hw"
      as="header"
      w="full"
      mb="20em"
    >
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        onClick={handleVRMCCreation}
      >
        <Link>
          
        </Link>
        <Button
          bgColor="#3c3c3c"
          color="#fff"
          leftIcon={<AddIcon />}
          _hover={{
            background: "#fff",
            borderColor: "#3c3c3c",
            color: "#365AD2",
            borderWidth: "1.5px",
          }}
          onClick={onOpen}
          mb="1em"
          borderRadius={0}
          zIndex="-1"
        >
          Deploy A New VRMC!
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w="full">
            <ModalHeader justifyContent="center">
              Deploy A New VRMC
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Owners&apos;s ETH Address</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Enter Address"
                  width="32em"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Controller&apos;s ETH Address</FormLabel>
                <Input placeholder="Enter Address" width="32em" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>LINKs to Prefund the VRMC</FormLabel>
                <Input placeholder="Enter #LINK" width="32em" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                variant="ghost"
                colorScheme="messenger"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
              <Button
                bgColor="#3c3c3c"
                color="#fff"
                _hover={{
                  background: "#fff",
                  borderColor: "#3c3c3c",
                  color: "#365AD2",
                  borderWidth: "1.5px",
                }}
              >
                Deploy It!
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Divider borderColor="blackAlpha.300" width="50%" mb="5em" zIndex="-1"/>
      </Flex>
    </Box>
  );
};

export default Hero;
