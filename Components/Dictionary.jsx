import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Dictionary = () => {
const [search, setSearch] = useState('')
const [results, setResults] = useState([])

const searchDictionary = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error(error));
      console.log(results)
  };

  return (
    <View>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Enter a word"
      />
      <Button title="Search" onPress={searchDictionary} />
      {results.map((result) => (
        <Text>{result.word}</Text>
      ))}
    </View>
  );
}

export default Dictionary;