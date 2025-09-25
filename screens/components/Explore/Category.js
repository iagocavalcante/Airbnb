import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

class Category extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={this.props.imageUri}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.categoryName}>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}
export default Category;

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 130,
    marginLeft: 16,
    borderWidth: 0.5,
    borderColor: '#dddddd',
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 4
  },
  imageContainer: {
    flex: 2
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
    justifyContent: 'center'
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333'
  }
});