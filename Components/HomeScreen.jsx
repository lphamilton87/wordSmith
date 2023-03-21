import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Dictionary from './Dictionary';
import Thesaurus from './Thesaurus';

const HomeScreen = () => {
  const [isDictionary, setIsDictionary] = useState(true);

  const toggleDictionary = () => {
    setIsDictionary(true)
  };

  const toggleThesaurus = () => {
    setIsDictionary(false)
  };

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={toggleDictionary}>
          <Text style={{ color: isDictionary ? 'blue' : 'black' }}>Dictionary</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleThesaurus}>
          <Text style={{ color: isDictionary ? 'black' : 'blue' }}>Thesaurus</Text>
        </TouchableOpacity>
      </View>
      {isDictionary ? <Dictionary /> : <Thesaurus />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen