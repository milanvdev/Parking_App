import React from 'react';
import {TouchableOpacity, Text, Image, View, StyleSheet} from 'react-native';
import {Fonts} from '../styles/fonts';

const IconButton = ({
  title,
  icon,
  onPress,
  backgroundColor = '#FFD613',
  textColor = '#14130E',
  style,
  Icon,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor}, style]}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={styles.content}>
        {icon && <Icon style={styles.icon} />}
        <Text style={[styles.text, {color: textColor}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: Fonts.LexedLight,
  },
});

export default IconButton;
