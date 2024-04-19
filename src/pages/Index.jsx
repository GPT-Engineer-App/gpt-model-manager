import React from "react";
import { Box, Button, Container, Flex, Heading, Input, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { FaGithub, FaPlus, FaSearch } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleModelSubmit = () => {
    toast({
      title: "Model submitted.",
      description: "Your GPT model has been submitted for review.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleSearch = () => {
    toast({
      title: "Search initiated.",
      description: "Searching for GPT models...",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="2xl">
          GPT Model Manager
        </Heading>
        <Text>Welcome to the GPT Model Manager. Submit, review, and compare custom GPT models.</Text>

        <Flex w="full" gap={2}>
          <Input placeholder="Search GPT models..." />
          <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleSearch}>
            Search
          </Button>
        </Flex>

        <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center">
          <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleModelSubmit}>
            Submit New Model
          </Button>
          <Button leftIcon={<FaGithub />} colorScheme="gray" onClick={() => window.open("https://github.com", "_blank")}>
            View on GitHub
          </Button>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;
