import { useEffect, useState } from 'react';
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Container, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/produtos')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    return (   
        <Flex gap={{base: 4, md: 4, lg: '3%'}} wrap={'wrap'}>
            {products.map((item, index) => (
                <Card key={index} w={{base: '100%', md: 100, lg: '31.3%'}}>
                    <CardBody>
                        <Image
                            w={'100%'}
                            h={300}
                            src={item.image}
                            alt={item.nome} // Use o nome ou uma descrição apropriada
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{item.nome}</Heading>
                            <Text>
                                {item.descricao}
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                ${item.preco}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Comprar agora
                            </Button>
                            <Button variant='ghost' colorScheme='blue'>
                                Adiconar aos favoritos
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            ))}
        </Flex>
    );
}

export default Products;
