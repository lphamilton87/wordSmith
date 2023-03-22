import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Thesaurus = () => {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])

const handleSearch = () => {
    fetch(`https://api.datamuse.com/words?rel_syn=${search}`)
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error(error))
  };

  return (
    <View>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Enter a word to search"
      />
      <Button title="Search" onPress={handleSearch} />
      {results.map((result) => (
          <Text key={results.word}>{result.word}</Text>
      ))}
    </View>
  );
}

export default Thesaurus