import React from 'react'
import { Container, Content } from 'native-base'

import { Header, Footer, PokemonList, Summary } from '../components/organisms'

const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Summary />
        <PokemonList />
      </Content>
      <Footer />
    </Container>
  )
}

export default Home
