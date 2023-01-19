import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
          <Heading m={'auto'}>Welcome Back</Heading>
          <Input placeholder={'Email'} type={'email'} required />

          <Input placeholder={'Password'} type="password" required />

          <Button variant={'link'} alignSelf={'self-end'}>
            <Link to={'/forgetpassword'}>Forget Password</Link>
          </Button>
          <Button type="submit">Log in</Button>
          <Text textAlign={'right'}>
            New User
            <Button mx={'5'} variant={'link'} alignSelf={'self-end'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
