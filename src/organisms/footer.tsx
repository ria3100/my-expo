import React from 'react'
import { Footer, FooterTab, Button, Icon, Text } from 'native-base'

export default () => {
  return (
    <Footer>
      <FooterTab>
        <Button vertical active>
          <Icon active name="apps" />
          <Text>図鑑</Text>
        </Button>
        <Button vertical>
          <Icon name="camera" />
          <Text>見つける</Text>
        </Button>
        <Button vertical>
          <Icon name="navigate" />
          <Text>捕まえた</Text>
        </Button>
      </FooterTab>
    </Footer>
  )
}
