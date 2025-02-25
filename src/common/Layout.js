import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

const Layout = ({children, style, statusBarStyle = 'dark-content'}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor="transparent"
        translucent={true}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, style]}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight + 20,
  },

  content: {
    flexGrow: 1,
  },
});

export default Layout;
