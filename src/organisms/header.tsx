import React from 'react'
import styled from '@emotion/native'
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base'

const StyledHeader = styled(Header)(({ theme }) => ({
  backgroundColor: theme.backgroundColor,
}))

export default () => {
  return (
    <StyledHeader>
      <Left />
      <Body>
        <Title>Header</Title>
      </Body>

      <Right>
        <Button transparent>
          <Icon name="menu" />
        </Button>
      </Right>
    </StyledHeader>
  )
}
