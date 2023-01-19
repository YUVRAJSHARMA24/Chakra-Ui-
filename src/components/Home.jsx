import { Box, Heading, Image, Img } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Container } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.svg';
import img5 from '../assets/5.svg';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  p: '4',
  size: '4x1',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading py="2" w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alginItems={'center'}
          direction={['column', 'row']}
        >
          <Image
            m={'auto'}
            h={['40', '400']}
            src={img5}
            filter={'hue-rotate(-130deg'}
          />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Front-end web development, also known as client-side development is
            the practice of producing HTML, CSS and JavaScript for a website or
            Web Application so that a user can see and interact with them
            directly. The challenge associated with front end development is
            that the tools and techniques used to create the front end of a
            website change constantly and so the developer needs to constantly
            be aware of how the field is developing. The objective of designing
            a site is to ensure that when the users open up the site they see
            the information in a format that is easy to read and relevant. This
            is further complicated by the fact that users now use a large
            variety of devices with varying screen sizes and resolutions thus
            forcing the designer to take into consideration these aspects when
            designing the site. They need to ensure that their site comes up
            correctly in different browsers (cross-browser), different operating
            systems (cross-platform) and different devices (cross-device), which
            requires careful planning on the side of the developer.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showIndicators
    showThumbs={false}
    showArrows={false}
    showStatus={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h={'full'} w="full" objectFit={'cover'} />
      {/* <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
        HTML Tutorial
      </Heading> */}
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h={'full'} w="full" objectFit={'cover'} />
      {/* <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
        CSS Tutorial
      </Heading> */}
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} h={'full'} w="full" objectFit={'cover'} />
      {/* <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
        JavaScript Tutorial
      </Heading> */}
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} h={'full'} w="full" objectFit={'cover'} />
      {/* <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
        React Js Tutorial
      </Heading> */}
    </Box>
  </Carousel>
);

export default Home;
