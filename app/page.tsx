"use client";
import Access from "@/components/Access";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LearnMore from "@/components/LearnMore";
import Popular from "@/components/Popular";
import Strip from "@/components/Strip";
import Students from "@/components/Students";
import Video from "@/components/Video";
import { colors } from "@/constants/colors";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <ChakraProvider>
      <Box as={"main"} bg="white" minH={"88vh"}>
        <Hero />
        <Strip />
        <Popular />
        <Video />
        <Access />
        <LearnMore />
        <Faqs />
        <Students />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}
