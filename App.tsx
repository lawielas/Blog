import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.navContainer}>
        <Text style={styles.navTitle}>My Blog</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: StatusBar.currentHeight,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  navContainer: {
    paddingVertical: 10,
  },
  navTitle: {
    fontSize: 30,
    fontFamily: 'Nunito-Medium',
    textAlign: 'center',
  },
});

export default App;
