import { colors } from "@/constants/colors";
import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <Box bg={colors.primary} color="white" w="100%" h={320} px={20} pt={20}>
      <Flex w="100%" justifyContent="space-between">
        <VStack h={170} w={300} align="start">
          <Link href={"/"}>
            <Text fontSize="lg" fontWeight="600">
              panaverse
            </Text>
          </Link>
          <Text fontSize="xs" fontWeight="300" w={250} pt={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </Text>
        </VStack>
        <HStack h={170} w={300} gap={7} justify="end">
          <VStack h="100%" align="start">
            <Link href={"/"}>
              <Text fontSize="sm" fontWeight="semibold" pt={1}>
                Explore
              </Text>
            </Link>
            <VStack align="start" pt={3}>
              <Link href={"/"}>
                <Text fontSize="sm" fontWeight="400">
                  All Courses
                </Text>
              </Link>
              <Link href={"/"}>
                <Text fontSize="sm" fontWeight="400">
                  Articles
                </Text>
              </Link>
              <Link href={"/"}>
                <Text fontSize="sm" fontWeight="400">
                  Blog
                </Text>
              </Link>
              <Link href={"/"}>
                <Text fontSize="sm" fontWeight="400">
                  Sitemap
                </Text>
              </Link>
            </VStack>
          </VStack>

          <VStack h="100%" align="start">
            <Link href={"/"}>
              <Text fontSize="sm" fontWeight="semibold" pt={1}>
                About
              </Text>
            </Link>
            <VStack align="start" pt={3}>
              <Link href={"/"}>
                <Text fontSize="sm" fontWeight="400">
                  Privacy & Policy
                </Text>
              </Link>
              <Link href={"/"}>
                <Text fontSize="sm" fontWeight="400">
                  Terms & Conditions
                </Text>
              </Link>
              <Link href={"/"}>
                <Text fontSize="sm" fontWeight="400">
                  Support
                </Text>
              </Link>
              <Link href={"/"}>
                <Text fontSize="sm" fontWeight="400">
                  Exclusive Free Classes
                </Text>
              </Link>
            </VStack>
          </VStack>
        </HStack>
        <VStack h={170} w={400} align="end">
          <Text fontSize="sm" fontWeight="semibold" pt={1} pb={3}>
            Get Latest Course and Offers Alert on Your Phone
          </Text>
          <Box bg="white" w={80} px={1} py={1}>
            <Flex gap={0}>
              <Input
                placeholder="mmuazazhar@gmail.com"
                variant="unstyled"
                marginLeft={5}
                fontSize="sm"
                color="black"
              />
              <Button
                colorScheme="teal"
                bg="#0b9f84"
                color="white"
                variant="solid"
                fontSize="sm"
                borderRadius={0}
                px={25}
                fontWeight={400}
              >
                Subscribe Now
              </Button>
            </Flex>
          </Box>
        </VStack>
      </Flex>
      {/* <Box w="100%" h="1px" bg="white" /> */}
      <Flex
        borderTopColor="whiteAlpha.500"
        borderTopWidth="2px"
        pt={5}
        justify="space-between"
      >
        <Text fontSize="sm" fontWeight={"400"}>
          Website by Muhammad Muaz
        </Text>
        <HStack>
          <Box bg="white" px={2} py={2} borderRadius="full">
            <Link href="https://www.facebook.com/muaaz51" target="_blank">
              <Image
                src="/images/fb.svg"
                alt="facebook"
                width={20}
                height={20}
                priority
              />
            </Link>
          </Box>
          <Box bg="white" px={2} py={2} borderRadius="full">
            <Link href="https://twitter.com/Muazhar_" target="_blank">
              <Image
                src="/images/twitter.svg"
                alt="twitter"
                width={20}
                height={20}
                priority
              />
            </Link>
          </Box>
          <Box bg="white" px={2} py={2} borderRadius="full">
            <Link href="https://github.com/muazazhar/panaverse" target="_blank">
              <Image
                src="/images/github.svg"
                alt="github"
                width={20}
                height={20}
                priority
              />
            </Link>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Footer;
