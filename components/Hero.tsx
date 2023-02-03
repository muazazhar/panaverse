import { colors } from "@/constants/colors";
import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <Flex h={500} px={50}>
      <Flex flex={2} alignItems="center" justifyContent="center">
        <Flex
          alignContent="center"
          justifyContent="space-around"
          flexDirection="column"
          pt={50}
          pb={50}
          h={"80%"}
          w={"80%"}
        >
          <Heading fontSize={60} fontWeight={500}>
            You can reach ∞ with{" "}
            <Heading
              as="span"
              color={colors.primary}
              fontSize={60}
              fontWeight={500}
            >
              study
            </Heading>
          </Heading>
          <Text fontWeight={300}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            consequuntur molestias ipsum ducimus eligendi et!
          </Text>
          <Flex boxShadow="xl" gap={0}>
            <Input
              placeholder="Course title or keyword"
              variant="unstyled"
              marginLeft={5}
            />
            <Button
              colorScheme="teal"
              bg="#0b9f84"
              color="white"
              variant="solid"
              borderRadius={0}
            >
              Search
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Box flex={1.4} display="block" position="relative">
        <Image
          // src="/images/main.jpg"
          src="/images/why.png"
          alt="Picture of the author"
          // width={500}
          // height={500}
          priority
          fill
        />
      </Box>
    </Flex>
  );
}

export default Hero;
