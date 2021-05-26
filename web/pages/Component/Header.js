import React,{Fragment} from 'react'

import { Flex,Center,Text,Box,Button,VStack,Container,Image  } from "@chakra-ui/react"
import { PhoneIcon, AddIcon, WarningIcon,UserIcon } from '@chakra-ui/icons'
// import { Link } from "@chakra-ui/react"

import Link from 'next/link'
// import Link from 'next/link'
  
  const Header = () => {
    return (
        <Fragment>
            
        <Flex  bg="tomato" p={4} color="white" justifyContent="center"  w="100%" mt="30%" >
            <Center flex="1" h="40px">
                <Text fontSize="xl">Page Title</Text>
            </Center>
         </Flex>
         

      
            <Box
                position="fixed"
                left={0}
                p={5}
                w="18%"
                top={0}
                h="100%"
                bg="white"
                border="1px" borderColor="gray.200"
                
             >

            <VStack>

            <Image
              boxSize="100px"
              objectFit="cover"
              src="images/logo_aes.png"
              alt="logo aes"
            />


                
                <Button w="100%"   justifyContent="left">
                  
                  <Image
                  boxSize="20px"
                  objectFit="cover"
                  src="images/hogar.png"
                  alt="logo hogar"
                  mr="5%"
                />
                    
                    <Link  href="/ff">
                  
                      <a>Inicio</a>
                    </Link>
                   
                  
                </Button>


                <Button  w="100%" justifyContent="left">

                    <Image
                      boxSize="20px"
                      objectFit="cover"
                      src="images/engranaje.png"
                      alt="logo engranaje"
                      mr="5%"
                    />
                        <Link  href="/">
                          <a>Configuracion</a>
                        </Link>
                </Button>

                <Flex  w="100%" >
                <Center mt="150%"  w="100%">
                   
                    <Button  w="100%" justifyContent="left"  > 
                    <Image
                      boxSize="20px"
                      objectFit="cover"
                      src="images/user.png"
                      alt="logo users"
                      mr="5%"
                    />
                     
                        <Link  href="/dd">
                          <a>Cuenta</a>
                        </Link>

                    </Button>
                
                
                
                </Center>
                </Flex>

                
                <Button  w="100%" mr="10px" justifyContent="left" > 
                  
                    <Image
                      boxSize="20px"
                      objectFit="cover"
                      src="images/cerrar-sesion.png"
                      alt="logo sesion"
                      mr="5%"
                    />

                    <Link  href="/ssf">
                          <a>Cerrar Sesion</a>
                    </Link>
                   
                </Button>

                 
 
            </VStack>
           
           
         
        </Box>
        
      </Fragment>
    )
  }
  
  export default Header
  