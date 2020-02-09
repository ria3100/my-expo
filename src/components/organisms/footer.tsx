import React from 'react'
import { Footer as NBFooter, FooterTab, Button, Icon, Text } from 'native-base'

const Footer = () => {
  return (
    <NBFooter>
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
    </NBFooter>
  )
}

export default Footer
