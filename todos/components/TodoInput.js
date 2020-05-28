import React from 'react';
import styled from 'styled-components/native'

const TextInput = styled.TextInput`

`;

export default () => {
  const {value, setValue} = React.useState("");
  return (<TextInput
    onChangeText={v => setValue(v)}
    value={value}
    placeholder = "Add a new item"
  />)
}
