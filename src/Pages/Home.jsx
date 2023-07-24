import React from 'react'
import { styled } from 'styled-components';
import { Box,Image } from "@chakra-ui/react"
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import img  from "../images/3.jpg"






const Home = () => {

  const [text] = useTypewriter({
    words: [`Cryptocurrency is a perfect investment.`,`Invest now, you'll never regret it.`,`The currency of the future.`,`The value keeps on increasing.`],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  
  return (
  <DIV className="Home">
    <Box  borderRadius="20px" width="100%"bgGradient='linear(to-l,#070E27, #161516)' >
<div className="poster"> 
<Image src={img}  className="Home_img" alt="NO Image"  />
       <div className="inner_text">
          <h1>Cryptocurrency  just got even <span >Better.</span>! </h1>
          <h2  className='typewriter'>{text}  <Cursor cursorStyle="🪙" cursorColor='red' /></h2>
       </div>
       </div>
    
    </Box>
  </DIV>)
}

export default Home;
 



const DIV = styled.div`

  

  .poster{
    padding: 1% 0px;
    position: relative;
    overflow: hidden;
    border: 2px solid whitesmoke;
    border-radius: 20px;
    .Home_img{
     border-radius: 15px;
     border: 1px solid white;
      object-fit: cover;
    width: 98%;
    height: 500px;
    margin: auto;
    }


    .inner_text{
    
   
    text-align: center;
    position: absolute;
    top: 150px;
    bottom: 0;
    left: 0;
    right: 0;
    
    margin: auto;
    h1{
      color: white;
     
      font-weight: 600;
      font-size: 2.5rem;
      span{
        color:red;
      }

    }
    h2{
      color:white;
      font-weight: 500;
      font-size: 1.8rem;
      color: white;
    }
  }
}

`
