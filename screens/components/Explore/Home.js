import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";
import { Ionicons } from '@expo/vector-icons'

class Home extends Component {
  render() {
    const containerWidth = this.props.width / 2 - 24;
    return (
      <View style={[styles.container, { width: containerWidth, height: containerWidth }]}>
        <View style={styles.imageContainer}>
          <Image
              style={styles.image}
              source={require('../../../assets/home.jpg')} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.propertyType}>{this.props.type}</Text>
          <Text style={styles.propertyName}>{this.props.name}</Text>
          <Text style={styles.price}>${this.props.price}</Text>
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((star, index) => (
              <Ionicons
                key={index}
                name={index < this.props.rating ? 'star' : 'star-outline'}
                size={12}
                color={index < this.props.rating ? '#FFD700' : '#ccc'}
              />
            ))}
          </View>
        </View>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#dddddd',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16
  },
  imageContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    padding: 12
  },
  propertyType: {
    fontSize: 11,
    color: '#b63838',
    fontWeight: '600'
  },
  propertyName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333'
  },
  price: {
    fontSize: 12,
    color: '#333',
    fontWeight: '600'
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 4
  }
});