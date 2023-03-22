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

  const appName = "wordSmith"

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: appName, style: { color: '#fff', fontSize: 40, fontStyle: 'italic', fontWeight: 'bold' } }}
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
      <View>
      {isDictionary ? <Dictionary /> : <Thesaurus />}
      </View>
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
        backgroundColor: '#eaedf3',
    },
  header: {
    width: '100%',
    height: '15%',
    backgroundColor: '#6ba6d5',
    borderBottomWidth: 0,
  },
  toggleButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#9a9a9a',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
  },
  selectedButton: {
    backgroundColor: '#7bb659',
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