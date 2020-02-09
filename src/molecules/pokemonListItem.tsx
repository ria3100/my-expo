import React from 'react'
// import styled from '@emotion/native'
import { ListItem, Text, Left, Body, Right, Thumbnail } from 'native-base'

// const PokedexNumberText = styled.Text({
//   marginRight: 100,
//   float: 'left',
// })

type Props = {
  pokemon: any
}
export default ({ pokemon }: Props) => {
  return (
    <ListItem icon style={{ borderColor: '#fff' }}>
      <Left>
        <Thumbnail square source={{ uri: 'Image URL' }} />
      </Left>
      <Body>
        <Text>
          <Text>No.{(pokemon.no + '').padStart(3, '0')}</Text>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {pokemon.name}
        </Text>
      </Body>
      <Right>
        {/* <Button>
                      <Icon active name="airplane" />
                    </Button> */}
      </Right>
    </ListItem>
  )
}
