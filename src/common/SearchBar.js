import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Fonts} from '../styles/fonts';

const SearchBar = ({onChangeText, value,style}) => {
  return (
    <View style={[styles.container, style]}>
      <Icon name="search" size={24} color="#14130E" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#B9B8B1"
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(185, 184, 177, 0.05)',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#0F151F',
    fontFamily: Fonts.LexedLight,
  },
});

export default SearchBar;
