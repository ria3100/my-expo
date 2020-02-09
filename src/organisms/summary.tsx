import React from 'react'
import styled from '@emotion/native'

import { Card, CardItem, Body, View, Text, Segment, Button } from 'native-base'

const Wrap = styled.View({
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
  borderRadius: 8,
  borderColor: '#000',
  borderWeight: 10,
})

export default () => {
  return (
    <Wrap>
      <View style={{ width: '80%' }}>
        <Card transparent>
          <CardItem header>
            <Body>
              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                ポケモン図鑑
              </Text>
              <Text>
                <Text>捕まえた数</Text>
                <Text>捕まえてない数</Text>
              </Text>
            </Body>
          </CardItem>
        </Card>
      </View>
    </Wrap>
  )
}
