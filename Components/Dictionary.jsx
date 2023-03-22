import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const Dictionary = () => {
const [search, setSearch] = useState('')
const [results, setResults] = useState([])
const [wordTitle, setWordTitle] = useState('')

const handleSearch = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then(response => response.json())
      .then(data => {
        const meanings = data[0].meanings
        setResults(meanings)
      } )
      .catch(error => console.error(error))
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
      <Button buttonStyle={styles.button}
      title="Search" onPress={handleSearch} />
      <Text style={styles.title}>{wordTitle}</Text>
      {results.map((result, index) => (
          <Text 
          style={styles.words}
          key={index}>{result.definitions[0].definition}</Text>
      ))}
    </View>
  );
}

    const styles = StyleSheet.create({
        searchBar: {
            borderRadious: 0,
            justifyContent: 'center',
            margin: 10,
            color: '#000',
            borderColor: '#666',
            backgroundColor: '#fff',
            borderWidth: 1,
            height: 45,
            width: 200,
            paddingHorizontal: 10,
            fontSize: 18,
        },
        container: {
            alignItems: 'center',
            flexDirection: 'column',
            flexWrap: 'wrap',
            backgroundColor: '#eaedf3'
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

export default Dictionary;