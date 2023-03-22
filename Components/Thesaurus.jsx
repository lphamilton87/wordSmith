import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';

const Thesaurus = () => {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])

const handleSearch = () => {
    fetch(`https://api.datamuse.com/words?rel_syn=${search}`)
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error(error))
      setSearch('')
  };

  return (
    <View style={styles.container}>
      <TextInput
    style={styles.searchBar}
        value={search}
        onChangeText={setSearch}
        placeholder="Enter a word here....."
      />
      <Button title="Search" onPress={handleSearch} />
      {results.map((result) => (
          <Text key={results.word}>{result.word}</Text>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: '#eaedf3'
    },
    searchBar: {
        margin: 10,
        color: '#000',
        borderColor: '#9a9a9a',
        backgroundColor: 'white',
        borderWidth: 1,
        height: 45,
        width: 200,
        paddingHorizontal: 10,
        fontSize: 18,
    },
})

export default Thesaurus