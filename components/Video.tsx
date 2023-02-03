import { Box } from "@chakra-ui/react";
import React from "react";

function Video() {
  return (
    <Box w="100%">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/m4g0zd4E_bo"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </Box>
  );
}

export default Video;
