import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native'

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
  no => ({id: `${no}`, title:`해야할 일 ${no}`, done: (no % 2 === 0)}
));
const ItemView = styled.View`
  padding: 20px;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
`;

const Text = styled.Text`
  color: #444;
`;

function Item({item}) {
  return (
    <ItemView>
      <Text>{item.title}</Text>
    </ItemView>
  )
}


const FlatList = styled.FlatList`
  background-color: #fff;
  width :100% ;
`;

export default () => {
  return (
    <FlatList
    data={data}
    renderItem={({ item }) => <Item item={item} />}
    keyExtractor={item => item.id}
  />

  )
}
