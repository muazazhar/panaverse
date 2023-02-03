import { colors } from "@/constants/colors";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  HStack,
  Image,
  Accordion,
  VStack,
} from "@chakra-ui/react";
import ImageNext from "next/image";
import React from "react";
import CustomAccordion from "./CustomAccordion";
import RecentCard from "./RecentCard";

function Faqs() {
  return (
    <Box>
      <Box
        bg={colors.lightBlue}
        w={"100%"}
        h={750}
        position="absolute"
        zIndex={0}
      />
      <Box w="100%" h="100%" position="relative" zIndex={1} pt="8%" px={100}>
        <Heading
          fontSize={80}
          fontWeight={500}
          color={colors.primary}
          textAlign="center"
        >
          FAQ's
        </Heading>
        <VStack
          // bg={colors.lightBlue}
          w={"100%"}
          alignContent="center"
          mt={"5%"}
        >
          <Accordion allowMultiple w={"80%"}>
            <CustomAccordion
              title="How do I get access to the class materials?"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
            />
            <CustomAccordion
              title="How much does an online class cost?"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
            />
            <CustomAccordion
              title="How do I get access to the class materials?"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
            />
            <CustomAccordion
              title="What do I do if I need technical assistance?"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
            />
            <CustomAccordion
              title="Will the credits I earn count toward my degree requirements?"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
            />
          </Accordion>
        </VStack>
      </Box>
    </Box>
  );
}

export default Faqs;
