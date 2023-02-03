import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import { colors } from "@/constants/colors";
// import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
};
function CustomAccordion({ title, subtitle }: Props) {
  return (
    <AccordionItem bg="white" mb={5}>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton
              py={5}
              mb={5}
              _expanded={{ bg: "white" }}
              _hover={{ bg: "white", borderColor: "white" }}
            >
              <Box as="span" flex="1" textAlign="left" fontWeight="semibold">
                {title}
              </Box>
              {isExpanded ? (
                <Image
                  src="/images/minus.svg"
                  alt="minus"
                  width={7}
                  height={7}
                  color={colors.primary}
                  bg={colors.green}
                  px={1}
                  borderRadius="full"
                />
              ) : (
                <Image
                  src="/images/plus.svg"
                  alt="plus"
                  width={7}
                  height={7}
                  color={colors.primary}
                  bg={colors.green}
                  px={1}
                  borderRadius="full"
                />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{subtitle}</AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}

export default CustomAccordion;
