import { Box, Icon, Flex } from "@chakra-ui/react";
import React from "react";
import {ChevronDownIcon} from '@chakra-ui/icons'

function Header() {
  return (
    <Flex bg="rgba(46, 46, 46, 0.1)">
    <Box pt="10px" pl='20px' width="100%">
      
      <h4>Titulo de la cancion</h4>
      <span>Nombre del Artista</span>
      
    </Box>
    <Icon as={ChevronDownIcon} fontSize='1.3rem' margin='20px'/>
    </Flex>
  );
}

export default Header;
