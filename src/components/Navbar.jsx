import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex,S} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';
import logo  from "../images/Your_paragraph_text-removebg-preview (1).png"

import styles from "../CSS/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
     
    
      <Flex className="navbar" gap={20} color="white" alignItems="center" backgroundColor="#192851" height="70">
        <img src={logo} alt="logoImage" style={{ width: 170, marginLeft: 30 }} />
        <Link className="navbar-link" to="/">
          Home
     
        </Link>
        <Link className="navbar-link"  >
          Tradings
        </Link>
        <Link className="navbar-link" >
        Partnership
        </Link>
         
        <Link className="navbar-link" >
          Trade Spark store
        </Link>
       <Box>   
        <input className={styles.Search} type="search" placeholder='  Search...' />
         <SearchIcon  style={{  marginLeft: 10 }} boxSize={6} />
         </Box>
     

    
  
      </Flex>
   
        
    </div>
  )
}

export default Navbar

