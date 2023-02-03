import { colors } from "@/constants/colors";
import { Box, Button, ButtonGroup, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";

function Popular() {
  return (
    <Box h={550}>
      <Box
        bg={colors.secondary}
        w={470}
        h={550}
        position="absolute"
        zIndex={0}
      />
      <Box w="100%" h="100%" position="relative" zIndex={1} pt="8%" px={100}>
        <Heading fontWeight={500}>Popular Courses</Heading>

        <ButtonGroup
          colorScheme="black"
          variant="outline"
          gap="4"
          size="sm"
          pt="3%"
        >
          <Button borderRadius={0}>UI/UX</Button>
          <Button borderRadius={0}>Front-End</Button>
          <Button borderRadius={0}>Back-End</Button>
          <Button borderRadius={0}>Full Stack</Button>
          <Button borderRadius={0}>Artificial Intelligence</Button>
          <Button borderRadius={0}>See All</Button>
        </ButtonGroup>
        <HStack pt={12} gap={5}>
          <Card title="Web 3.0" image="web3.png" bg="#f9ebde" />
          <Card title="Metaverse" image="meta.png" bg="#fffced" />
          <Card title="Internet of Things" image="iot.png" bg="#e0eeee" />
          <Card title="Blockchain" image="blockchain.png" bg="#f3e0e2" />
        </HStack>
      </Box>
    </Box>
  );
}

export default Popular;
