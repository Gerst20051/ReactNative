import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <Text>Hello World</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
