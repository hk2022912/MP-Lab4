import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Quote of the Day</Text>
        <Text style={styles.subtitle}>
          "How do you start doing things you're scared of?"
        </Text>
      </View>

      {/* 4 Image Grid */}
      <View style={styles.gridContainer}>
        <View style={styles.row}>
          <Image
            source={require('../../../assets/1.png')}
            style={styles.gridImage}
            resizeMode="cover"
          />
          <Image
            source={require('../../../assets/2.png')}
            style={styles.gridImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require('../../../assets/3.png')}
            style={styles.gridImage}
            resizeMode="cover"
          />
          <Image
            source={require('../../../assets/4.png')}
            style={styles.gridImage}
            resizeMode="cover"
          />
        </View>
      </View>

      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          Become more scared of doing nothing forever.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FAF6E3',
    alignItems: 'center',
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#4a4a4a',
    textAlign: 'center',
    marginTop: 8,
    fontStyle: 'italic',
  },
  gridContainer: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  gridImage: {
    width: 150,
    height: 150,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  messageContainer: {
    marginTop: 15,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    width: '90%',
  },
  messageText: {
    fontSize: 16,
    color: '#2c3e50',
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 10,
  },
});

export default Home;
