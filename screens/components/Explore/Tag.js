import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

class Tag extends Component {
  getIconName() {
    switch (this.props.name) {
      case 'Guests':
        return 'people';
      case 'Dates':
        return 'calendar';
      default:
        return 'add';
    }
  }

  render() {
    return (
      <TouchableOpacity 
        style={styles.container}
        onPress={this.props.onPress}
        activeOpacity={0.7}
      >
        <Ionicons 
          name={this.getIconName()} 
          size={14} 
          color="#666" 
          style={styles.icon}
        />
        <Text style={styles.tagText}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}
export default Tag;

const styles = StyleSheet.create({
  container: {
    minHeight: 32,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  icon: {
    marginRight: 6
  },
  tagText: {
    fontWeight: '600',
    fontSize: 12,
    color: '#333'
  }
});