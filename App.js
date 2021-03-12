/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Text
} from 'react-native';
import Phrase from './components/Phrase';

import BookClosed from './assets/closed-book.jpg';
import BookOpen from './assets/open-book.jpg';
import Button from './components/Button';

function generateRandomNumber(number) {
  return Math.floor(Math.random() * number);
}

const phrases = [
  'I see dead people.',
  'May the Force be with you.',
  'I’m gonna make him an offer he can’t refuse.',
  'You can’t handle the truth!',
  'You talking to me?'
];

function App() {
  const [currentPhrase, setCurrentPhrase] = useState();

  const changePhrase = useCallback(() => {
    setCurrentPhrase(state => {
      let newPhrase = generateRandomNumber(phrases.length);
      while (newPhrase === state) {
        newPhrase = generateRandomNumber(phrases.length);
      }
      return newPhrase;
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <Image
          resizeMode="contain"
          source={currentPhrase !== undefined ? BookOpen : BookClosed}
          style={styles.image}
        />
        <Phrase currentPhrase={currentPhrase} phrases={phrases} />
        <Button onPress={changePhrase}>
          <Text style={styles.buttonText}>Open the phrase of the day</Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  scrollView: {
    backgroundColor: 'white',
    flex: 1
  },
  scrollViewContainer: {
    justifyContent: 'center',
    minHeight: '100%'
  },
  image: {
    alignSelf: 'center',
    height: 100,
    width: 200
  },
  buttonText: {
    color: '#F03030'
  }
});

export default App;
