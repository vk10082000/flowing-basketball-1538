import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Input, Flex,InputLeftElement,InputGroup} from '@chakra-ui/react';
import {BiSolidUser} from "react-icons/bi"


import { SearchIcon } from '@chakra-ui/icons';
import logo  from "../images/Your_paragraph_text-removebg-preview (1).png"
import styled from 'styled-components'

const Navbar = () => {


  return (

    
    <DIV className="navbar_container">
     
    
      <Flex className="navbar" gap={20} color="white" alignItems="center" backgroundColor="#192851" height="70">
        <img src={logo} alt="logoImage" style={{ width: 170, marginLeft: 30 }} />
        <Box>

        <Link className="navbar-link" to="/">
          Home
     
        </Link>
        </Box>
        <Box>

        <Link className="navbar-link" to="/crypto" >
       CryptoTrade
        </Link>
        </Box>
        <Box>
        <Link className="navbar-link" >
        Partnership
        </Link>

        </Box>
         <box>
        <Link className="navbar-link" >
          About
        </Link>

         </box>
       <Box>   
       <InputGroup>
    <InputLeftElement pointerEvents='none'>
      <SearchIcon color='gray.300' />
    </InputLeftElement>
    <Input className="Search"  variant='filled' size='s' type="search" placeholder='Search...' />
  </InputGroup>

        </Box>
         {/* <SearchIcon style={{marginLeft:"-60px"}}  boxSize={5} /> */}
      <Box> 
      <div className="login">
              <BiSolidUser />
              <Link to="/login">Login</Link>
              <span>|</span>
              <Link to="/register">Register</Link>
            </div>
      </Box>
  
      </Flex>
   
        
    </DIV>
  )
}

export default Navbar



const DIV = styled.div`

.navbar_container{
    position: sticky;
    top: 0;
    left: 0%;
    right: 0%;
    
}
.login {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150px;
  
  button {
    background-color: #2ecc71;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
}
`