import { Box, Container } from '@chakra-ui/react'
import { useState } from 'react'
import Header from './header'
import Abuot from './about'
import Products from './cardProduct'
import Footer from './footer'

function Page() {
    return (
        <Box bg='#e1e1e1' >
            <Header/>
            <Box w='80%' mx='auto' >
                <Abuot/>
                <Products/>
            </Box>  
            <Footer></Footer>
        </Box>
    )
}

export default Page
