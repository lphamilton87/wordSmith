import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

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
      {results.map((result, index) => (
          <Text 
          styles={styles.text}
          key={index}>{result.definitions[0].definition}</Text>
      ))}
    </View>
  );
}

    const styles = StyleSheet.create({
        searchBar: {
            borderRadious: 10,
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

export default Dictionary;