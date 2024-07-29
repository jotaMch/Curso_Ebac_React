import { Box, Flex, Text } from '@chakra-ui/react';

function Footer() {

    return (   
        <Flex align={'center'} justifyContent={'center'} h={20} mt={20} bg={'#b3b3b3'} >
            <Text>
                Todos os direitos revervados, JGM 2024.
            </Text>
        </Flex>
    );
}

export default Footer;
