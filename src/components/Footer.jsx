import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  chakra,
  useColorModeValue,
  Button,
  Flex,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import logo from "../images/download-removebg-preview.png"

const CenteredFooter = () => {
  const linkStyles = {
    textDecoration: 'none',
  
  };

  return (
    <Box 
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    
      width="100%"
    >

<Box as={Stack} spacing={10} py={10} width="100%" height="300px">

        <Stack direction={{ base: 'column', md: 'row' }} spacing={70}>
      
        <img src={logo} alt="logoImage" style={{width:200,marginLeft:5}} />
          {/* Company Links */}
          <Stack align={'flex-start'} gap={5}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2} >
              Company
            </Text>
            <Link href={'#'} sx={linkStyles}>
              About Us
            </Link>
          
          </Stack>

          {/* Support Links */}
          <Stack align={'flex-start'} gap={5}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2} >
              Get In Touch
            </Text>
            <Link href={'#'} sx={linkStyles}>
             Contact Us
            </Link>
            <Link href={'#'} sx={linkStyles}>
            Our Services
            </Link>
          
          </Stack>

          {/* Legal Links */}
          <Stack align={'flex-start'} gap={5}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2} >
            Address
            </Text>
            <Link href={'#'} sx={linkStyles}>
             KisanRaopalle 1-94
            </Link>
            <Link href={'#'} sx={linkStyles}>
            Korutla,Telangana,505326
            </Link>
          </Stack>

          {/* Subscribe Links */}
          <Stack align={'flex-start'} gap={5}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2} >
              Newsletter
            </Text>
            <Flex>
              <input
                style={{ borderRadius: 5, height: 29, marginRight: 10 }}
                type="text"
                placeholder="Enter your Email"
              />
              <Button style={{ borderRadius: 5, height: 30, width:100}}>Subscribe</Button>
              <br/>
              <br/>
           {/* /    */}
            </Flex>
            
            <p style={{marginTop:"-20px",}}>Your email is safe with us,we don't spam.</p>
          </Stack>
        </Stack>
      </Box>

      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={2}
        justify={{ md: 'space-between' }}
        align={{ md: 'center' }}
      >
        {/* Copyright Text */}
        <Text >© 2023 WonderKidEdu. All rights reserved</Text>

        {/* Social Media Links */}
        
        <Stack direction={'column'} spacing={2}>
  <Text fontWeight={'500'} fontSize={'lg'} mb={2} >
    Follow Me
  </Text>
  <Stack direction={'row'} spacing={6}>
    <chakra.a
      href={'#'}
      display={'flex'}
      alignItems={'center'}
      title={'Twitter'}
   
    >
      <FaTwitter />
    </chakra.a>
    <chakra.a
      href={'#'}
      display={'flex'}
      alignItems={'center'}
      title={'YouTube'}
     
    >
      <FaYoutube />
    </chakra.a>
    <chakra.a
      href={'#'}
      display={'flex'}
      alignItems={'center'}
   
    >
      <FaInstagram />
    </chakra.a>
  </Stack>
</Stack>

      </Container>
    </Box>
  );
};

const  Footer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }}>
      <CenteredFooter />
    </div>
  );
};

export default  Footer;