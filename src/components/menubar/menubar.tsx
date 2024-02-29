import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LogoutIcon from '../../assets/Property 1=dots-vertical.svg';

interface CustomDropdownProps {
  options: string[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (option: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, isOpen, onToggle, onSelect }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle}>
        <LogoutIcon />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdown}>
          {options.map((option) => (
            <TouchableOpacity key={option} onPress={() => onSelect(option)}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 200, // Set the width of the container,
  },
  dropdown: {
    position: 'absolute',
    top: 35, // Adjust this value to position the dropdown correctly
    left: -100,
    backgroundColor: '#F0F3F4',
    padding: 10,
    borderColor: '#D0D3D4',
    borderRadius: 5,
    zIndex: 10, // Increase zIndex value
    width: 130,
  },
});

export default CustomDropdown;
