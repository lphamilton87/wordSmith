import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Dictionary = () => {
const [search, setSearch] = useState('')
const [results, setResults] = useState([])

const handleSearch = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then(response => response.json())
      .then(data => {
        const meanings = data[0].meanings
        setResults(meanings)
      } )
      .catch(error => console.error(error))
      console.log(results)
  };

  return (
    <View>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Enter a word to search"
      />
      <Button title="Search" onPress={handleSearch} />
      {results.map((result, index) => (
          <Text key={index}>{result.definitions[0].definition}</Text>
      ))}
    </View>
  );
}

export default Dictionary;