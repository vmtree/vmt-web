import { useMoralis } from "react-moralis";
import {
  Box,
  Flex,
  Button,
  Text,
  Image,
  Container,
  Code,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import VMTable from "../components/ManageVMTs";
import ManageVMTs from "../components/ManageVMTs";
import ExploreVMTs from "../components/ExploreVMTs";
import Footer from "../components/Footer";
import { ConnectButton } from "web3uikit";
import { useWeb3Contract } from "react-";
import { abi } from "../constants/abi";
import Head from "next/head";

export default function Dapp() {
  const { isAuthenticated, authenticate, user, logout, isLoggingOut } =
    useMoralis();

  const { runContractFunction } = useWeb3Contract({
    abi: abi,
    contractAddress: "0x029Bef63A9aD0FA15BD390fCb4FC8D22b8FD3249", 
    functionName: "functionName", 
    params: {
      [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Staked","type":"event"},{"inputs":[{"internalType":"address","name":"_staker","type":"address"}],"name":"hasStake","outputs":[{"components":[{"internalType":"uint256","name":"total_amount","type":"uint256"},{"components":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"since","type":"uint256"},{"internalType":"uint256","name":"claimable","type":"uint256"}],"internalType":"struct Stakeable.Stake[]","name":"stakes","type":"tuple[]"}],"internalType":"struct Stakeable.StakingSummary","name":"","type":"tuple"}],"stateMutability":"view","type":"function"}]
    },
  });

  const handleVRMCCreation = () => {
    runContractFunction();
    console.log(".........................");
  };

  return (
    <>
      <Head>
        <title>VRMeta Center </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box w="100vw" maxW="100vw" mt="0" m="auto">
        <NavBar as="header" position="fixed" w="100%" pageType="dapp_page"/>
        <Hero handleVRMCCreation={handleVRMCCreation} />
        <ManageVMTs />
        <ExploreVMTs />
        <Footer />
      </Box>
    </>
  );
}
