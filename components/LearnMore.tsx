import { colors } from "@/constants/colors";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

function LearnMore() {
  return (
    <HStack gap={20}>
      <Image
        src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29kZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
        alt="Figma"
        objectFit="contain"
        height="auto"
        width={600}
        zIndex={2}
        pt={12}
      />
      <Flex
        as="section"
        w={400}
        h={300}
        direction="column"
        zIndex={2}
        align="start"
        justify="space-evenly"
        px="2%"
        mt={"5%"}
        top={"40%"}
      >
        <Heading fontSize={"2xl"} fontWeight={500}>
          Educate is an interesting platform that will teach
        </Heading>
        <Text fontWeight={400} color="grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Button
          colorScheme="teal"
          bg="#0b9f84"
          color="white"
          variant="solid"
          borderRadius={0}
        >
          Learn More
        </Button>
      </Flex>
      <Box
        bg={colors.lightBlue}
        w={"99%"}
        h={150}
        position="absolute"
        zIndex={0}
        // bottom="0"
        top={"74%"}
      />
    </HStack>
  );
}

export default LearnMore;
