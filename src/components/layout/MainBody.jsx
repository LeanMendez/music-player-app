import React from "react";
import { Box, Center } from "@chakra-ui/react";

function MainBody({ children }) {
  return (
    <>
      <Center>
        <Box
          minHeight="80vh"
          minWidth="25vw"
          mt="4rem"
          borderRadius="13"
          bg="orange.400"
        >
          <Box height="55vh">{children}</Box>
          <Box bg="rgba(46, 46, 46, 0.2)" h="25vh" borderBottomRadius="13">
            <h2>aca van los controles</h2>
          </Box>
        </Box>
      </Center>
    </>
  );
}

export default MainBody;
