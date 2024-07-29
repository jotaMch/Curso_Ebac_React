import { Box, Button, Container, Flex, ListItem, Stack, Text, UnorderedList} from '@chakra-ui/react'
import { FaShoppingBag } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

function Header() {
    return (
        <Box 
        color='#fff'
        fontWeight='semibold'
        letterSpacing='wide'
        fontSize='xs'
        bgGradient='linear(to-r, #0987a0ac, #eae8ef)'
        w='100%' 
        py={4}
        px={16} 
        >    
            <Flex gap={4} flexDirection={{base: 'column', md: 'row', lg: 'row'}} justifyContent='space-between' align='center'>
                <Text fontSize='md' >
                    JGM
                </Text>
                <UnorderedList listStyleType='none' alignItems={'center'} display='flex' gap='4' m='0'>
                    <ListItem> Sobre </ListItem>
                    <ListItem> Produtos </ListItem>
                    <ListItem> Contato </ListItem>
                    <Stack direction='row' spacing={4}>
                        <Button w={[ 90, 100, 150] } fontSize={{base: 10 , md: 12 , lg: 16 }} leftIcon={<CiStar />} colorScheme='teal' variant='outline'>
                            Favoritos
                        </Button>
                        <Button w={[ 90, 100, 150] } fontSize={{base: 10 , md: 12 , lg: 16 }} rightIcon={<FaShoppingBag />} colorScheme='teal' variant='solid'>
                            Sacola
                        </Button>
                    </Stack>
                </UnorderedList>
            </Flex>
        </Box>
    )
}

export default Header
