import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import menu from './assets/svg/menu.png';
import search from './assets/svg/search.png';

function App(): React.JSX.Element {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.navContainer}>
        <Image source={menu} style={styles.navIcon} />
        <Text style={styles.navTitle}>My Blog</Text>
        <Image source={search} style={styles.navIcon} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navTitle: {
    fontSize: 30,
    fontFamily: 'Nunito-Medium',
    textAlign: 'center',
    color: '#149094',
  },
  navIcon: {
    width: 50,
    height: 50,
  },
});

export default App;
