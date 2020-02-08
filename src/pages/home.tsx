import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Container, Content, Footer, FooterTab, Button } from 'native-base'

import { Header } from '../organisms'

export default function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Text style={styles.text}>
          Open up App.tsx to start working on your app!!
        </Text>
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  )
}

const styles = StyleSheet.create({
  text: {
    marginTop: 100,
    textAlign: 'center',
  },
})
