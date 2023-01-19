import {
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg={'blackAlpha.700'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w="full" px={'4'}>
          <Heading size={'md'}>Follow Us</Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />

            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textAlign={'center'}>Frontend Resource</Heading>
          <Text>@All rights reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'}>Social Media</Heading>
          <Button
            variant={'link'}
            colorScheme="facebook"
            leftIcon={<FaYoutube />}
          >
            <a href="https://youtube.com">Youtube</a>
          </Button>
          <Button
            variant={'link'}
            colorScheme="twitter"
            leftIcon={<FaLinkedinIn />}
          >
            <a href="https://linkedin.com/">LinkedinIn</a>
          </Button>
          <Button
            variant={'link'}
            colorScheme="twitter"
            leftIcon={<FaTwitter />}
          >
            <a href="https://twitter.com/">Twitter</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
