"use client";
import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { colors } from "@/constants/colors";
import Link from "next/link";

function Navbar() {
  return (
    <Flex
      as={"nav"}
      bg={colors.primary}
      w="100%"
      py={20}
      color="white"
      // flexDirection="row"
    >
      <Flex flex={1} justifyContent="center">
        <Link href={"/"}>
          <Text fontSize="19" fontWeight="600">
            panaverse
          </Text>
        </Link>
      </Flex>
      <Flex flex={2} justifyContent="center" gap={"5%"}>
        <Link href={"/courses"}>
          <Text fontSize="17" fontWeight="300">
            Courses
          </Text>
        </Link>
        <Link href={"/mentors"}>
          <Text fontSize="17" fontWeight="300">
            Mentors
          </Text>
        </Link>
        <Link href={"/blog"}>
          <Text fontSize="17" fontWeight="300">
            Blog
          </Text>
        </Link>
        <Link href={"/about"}>
          <Text fontSize="17" fontWeight="300">
            About Us
          </Text>
        </Link>
      </Flex>
      <Flex flex={1} justifyContent="center">
        <Link href={"https://portal.piaic.org/signup"} target="_blank">
          <Button colorScheme="white" variant="outline">
            <Text fontSize="17" fontWeight="300">
              Apply
            </Text>
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;
