import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Title } from 'react-native';

const Thesaurus = () => {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const [wordTitle, setWordTitle] = useState('')

const handleSearch = () => {
    fetch(`https://api.datamuse.com/words?rel_syn=${search}`)
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error(error))
      console.log(results[0])
      setWordTitle(search)
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
      <Text style={styles.title}>{wordTitle}</Text>
      {results.map((result) => (
          <Text style={styles.words} key={results.word}>{result.word}</Text>
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
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        textTransform: 'uppercase',
    },
    words: {
        fontStyle: 'italic',
    }
})

export default Thesaurus