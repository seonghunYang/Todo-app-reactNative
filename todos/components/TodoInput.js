import React from 'react';
import styled from 'styled-components/native';

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  width: 100%;
  margin: 5px;
`;

const TextInput = styled.TextInput`
  background-color : #fff;
  border: 1px solid #7BDFF2;
  padding: 10px;
  width: 100%;
  margin: 5px;
`;

export default () => {
  const {value, setValue} = React.useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >  
    <TextInput
      onChangeText={v => setValue(v)}
      value={value}
      placeholder="Add a new item"
    />
  </KeyboardAvoidingView>
  )
}
