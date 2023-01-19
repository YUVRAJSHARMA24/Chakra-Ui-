import React from 'react';
import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Text,
  Avatar,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading m={'auto'}>Create your Account</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'}/>
          
          <Input placeholder={'Name'} type={'text'} required />

          <Input placeholder={'Email'} type={'email'} required />

          <Input placeholder={'Password'} type="password" required />

          <Button type="submit">Sign Up</Button>
          <Text textAlign={'right'}>
            Already Signed Up{' '}
            <Button variant={'link'}>
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
