import { colors } from "@/constants/colors";
import { Box, Heading, Text, HStack } from "@chakra-ui/react";
import React from "react";
import RecentCard from "./RecentCard";

function Access() {
  return (
    <Box h={1050}>
      <Box
        bg={colors.secondary}
        w={520}
        h={1050}
        position="absolute"
        zIndex={0}
        right={0}
      />
      <Box w="100%" h="100%" position="relative" zIndex={1} pt="8%" px={100}>
        <Heading fontSize={80} fontWeight={500}>
          Access to{" "}
          <Heading
            as="span"
            color={colors.primary}
            fontSize={80}
            fontWeight={500}
          >
            Everything
          </Heading>{" "}
          , For{" "}
          <Heading
            as="span"
            color={colors.primary}
            fontSize={80}
            fontWeight={500}
          >
            Everyone
          </Heading>
        </Heading>
        <Text fontWeight={400} color="grey" pt="2%">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit soluta
          dolore voluptates voluptas labore earum laboriosam perferendis alias
          iusto eius magni tenetur similique, aspernatur blanditiis fugiat
          officiis a. Quos, voluptatem? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cupiditate consequuntur molestias ipsum ducimus
          eligendi et!
        </Text>

        <Box py="8%">
          <Heading fontWeight={500}>Recently Added Courses</Heading>
          <HStack pt={12} gap={5}>
            <RecentCard
              profile="8.1k"
              views="88k"
              ratings="4.8"
              price="420"
              title="Figma"
              subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
              image="https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            />
            <RecentCard
              profile="2.3k"
              views="38k"
              ratings="4.5"
              price="120"
              title="NextJs"
              subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
              image="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
            <RecentCard
              profile="5.0k"
              views="12k"
              ratings="4.0"
              price="990"
              title="Javascript"
              subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
              image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            />
          </HStack>
        </Box>
      </Box>
      <Box
        bg={colors.secondary}
        // bg="red"
        w={"100%"}
        h={150}
        position="absolute"
        zIndex={0}
      />
    </Box>
  );
}

export default Access;
