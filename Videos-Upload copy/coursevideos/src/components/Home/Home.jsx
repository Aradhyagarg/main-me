import React from 'react'
import { Heading, Stack, VStack, Text, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section className='home'>
      <div className='container'>
        <Stack
          direction={['column', 'row']}
          height="100vh"
          justifyContent={['center', 'space-between']}
          alignItems={['center', 'center']}  // Align center in both cases
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']} marginTop={['0', '40px']} /* Add marginTop for gap */>
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'}/>
            <Text children="Find Valuable Content At a Reasonable Price" />
            <Link to="/your-link">
              <Button size={'lg'} colorScheme="blackAlpha">Explore Now</Button>
            </Link>
          </VStack>
        </Stack>
      </div>
    </section>
  )
}

export default Home

//vstack by default column