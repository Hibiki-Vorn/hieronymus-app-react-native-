import React from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, Text } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'none', // 控制文本大小写
  },
});

export default CustomButton;