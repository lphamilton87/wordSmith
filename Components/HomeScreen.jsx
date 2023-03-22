import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Button } from 'react-native-elements';
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
    <View style={styles.container}>
      <Header
        centerComponent={{ text: isDictionary ? 'Dictionary' : 'Thesaurus', style: { color: '#fff', fontSize: 18 } }}
        containerStyle={styles.header}
      />
      <View style={styles.toggleButtons}>
        <Button
          title="Dictionary"
          onPress={toggleDictionary}
          buttonStyle={[styles.button, isDictionary && styles.selectedButton]}
          titleStyle={[styles.buttonText, isDictionary && styles.selectedButtonText]}
        />
        <Button
          title="Thesaurus"
          onPress={toggleThesaurus}
          buttonStyle={[styles.button, !isDictionary && styles.selectedButton]}
          titleStyle={[styles.buttonText, !isDictionary && styles.selectedButtonText]}
        />
      </View>
      {isDictionary ? <Dictionary /> : <Thesaurus />}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
  header: {
    width: '100%',
    height: '15%',
    backgroundColor: '#407394',
    borderBottomWidth: 0,
  },
  toggleButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'gray',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedButton: {
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  selectedButtonText: {
    fontWeight: 'bold',
  },

})

export default HomeScreen