import React from 'react'
import styled from '@emotion/native'
import {
  Header as NBHeader,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
} from 'native-base'

const StyledHeader = styled(NBHeader)(({ theme }) => ({
  backgroundColor: theme.backgroundColor,
}))

const Header = () => {
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

export default Header
