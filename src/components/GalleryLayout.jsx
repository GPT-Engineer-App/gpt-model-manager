import React from 'react';
import { SimpleGrid, Box, Image, Text } from '@chakra-ui/react';

const GalleryLayout = () => {
  return (
    <SimpleGrid columns={3} spacing={10}>
      {}
      <Box bg="white" p={5} shadow="md" borderWidth="1px">
        <Image src="/path-to-model-image.jpg" alt="Model Image" />
        <Text mt={2}>Model Name</Text>
        <Text fontSize="sm">Model Description</Text>
      </Box>
      {}
    </SimpleGrid>
  );
};

export default GalleryLayout;