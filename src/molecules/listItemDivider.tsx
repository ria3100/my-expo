import React from 'react'
import { ListItem, Text, Body, Right } from 'native-base'

type Props = {
  title: string
  caption?: string
}
export default ({ title, caption }: Props) => {
  return (
    <ListItem itemDivider style={{ backgroundColor: '#e25e46' }}>
      <Body>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>{title}</Text>
      </Body>
      <Right>
        <Text style={{ color: '#fff' }}>{caption}</Text>
      </Right>
    </ListItem>
  )
}
