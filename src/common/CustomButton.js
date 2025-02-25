import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Fonts} from '../styles/fonts';

const CustomButton = ({
  title,
  onPress,
  backgroundColor = '#FFD613',
  textColor = '#14130E',
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor}, style]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 18,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: Fonts.LexedLight,
  },
});

export default CustomButton;
