import React from 'react'
import { Container, Content } from 'native-base'

import { Header, Footer, PokemonList, Summary } from '../components/organisms'
import { usePokedex } from '../hooks/pokedex'

const Home = () => {
  const { findPokemon } = usePokedex()
  findPokemon()
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
