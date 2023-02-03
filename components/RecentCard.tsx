import { colors } from "@/constants/colors";
import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ImageNext from "next/image";

type Props = {
  image: string;
  profile: string;
  views: string;
  ratings: string;
  title: string;
  price: string;
  subtitle: string;
};

function RecentCard({
  image,
  profile,
  views,
  ratings,
  title,
  price,
  subtitle,
}: Props) {
  return (
    <Card
      maxW="xs"
      borderRadius="sm"
      size="xs"
      bg={colors.tertiary}
      _hover={{ backgroundColor: "white", transition: ".5s", boxShadow: "lg" }}
    >
      <CardBody>
        <Image px={2} py={2} src={image} alt="Figma" objectFit="contain" />
        <HStack gap={2} py={"3%"} px={2}>
          <HStack>
            <Box
              borderRadius="full"
              borderColor="black"
              px={1.5}
              py={1.5}
              borderWidth={1}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/64/709/709579.png"
                alt="Profiles"
                width={4}
                height={4}
              />
            </Box>
            <Text fontSize={"sm"} fontWeight="500">
              {profile}
            </Text>
          </HStack>
          <HStack>
            <Box
              borderRadius="full"
              borderColor="black"
              px={1.5}
              py={1.5}
              borderWidth={1}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/64/709/709612.png"
                alt="Views"
                width={4}
                height={4}
              />
            </Box>
            <Text fontSize={"sm"} fontWeight="500">
              {views}
            </Text>
          </HStack>
          <HStack>
            <Box
              borderRadius="full"
              borderColor="black"
              px={1.5}
              py={1.5}
              borderWidth={1}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/64/1828/1828970.png"
                alt="Views"
                width={4}
                height={4}
              />
            </Box>
            <Text fontSize={"sm"} fontWeight="500">
              {ratings}
            </Text>
          </HStack>
        </HStack>
        <Box bg="gray.300" h="1px" w="100%" />
        <Flex
          px={2}
          mt="3"
          direction="row"
          justify="space-between"
          align="center"
        >
          <HStack gap={0}>
            <ImageNext
              src="/images/dot.svg"
              alt="dot"
              width={10}
              height={10}
              priority
            />
            <Text fontSize="sm" fontWeight="semibold">
              {title}
            </Text>
          </HStack>

          <Text color={colors.primary} fontSize="md" fontWeight="semibold">
            ${price}
          </Text>
        </Flex>
        <Text px={2} pb={4} mt="3" fontWeight="semibold">
          {subtitle}
        </Text>
      </CardBody>
    </Card>
  );
}

export default RecentCard;
