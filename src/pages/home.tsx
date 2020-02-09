import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Container, Content } from 'native-base'

import { Header, Footer, PokemonList, Summary } from '../organisms'

export default function App() {
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

const styles = StyleSheet.create({
  text: {
    marginTop: 100,
    textAlign: 'center',
  },
})
