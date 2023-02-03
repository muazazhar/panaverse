import { colors } from "@/constants/colors";
import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function Strip() {
  return (
    <Flex bg="#e2f1f4" h={150} px={50} py={9} gap={10}>
      <VStack>
        <Heading>1.3k</Heading>
        <Text color={colors.primary}>Trusted Companies</Text>
      </VStack>
      <Box as="div" bg="grey" w="1px" h="100%" />
      <HStack gap={"30%"} px="5%">
        <Image
          src="/images/udemy.svg"
          alt="udemy"
          width={100}
          height={50}
          priority
        />
        <Image
          src="/images/coursera.svg"
          alt="coursera"
          width={100}
          height={50}
          priority
        />
        <Image
          src="/images/edx.svg"
          alt="edx"
          width={100}
          height={50}
          priority
        />
        <Image
          src="/images/code.svg"
          alt="codeacademy"
          width={100}
          height={50}
          priority
        />
      </HStack>
    </Flex>
  );
}

export default Strip;
