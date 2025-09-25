import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated
} from "react-native";
import { Ionicons } from '@expo/vector-icons'
import Category from './components/Explore/Category'
import Home from './components/Explore/Home'
import Tag from './components/Explore/Tag'
const { height, width } = Dimensions.get('window')
class Explore extends Component {

  constructor(props) {
    super(props);
    this.scrollY = new Animated.Value(0);
    this.state = {
      searchText: '',
    };
  }

  handleGuestsPress = () => {
    console.log('Guests pressed - would open guest selection modal');
  };

  handleDatesPress = () => {
    console.log('Dates pressed - would open date picker modal');
  };

  handleSearchChange = (text) => {
    this.setState({ searchText: text });
  };

  componentDidMount() {

    this.startHeaderHeight = 80
    this.endHeaderHeight = 50
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
      this.endHeaderHeight = 70 + StatusBar.currentHeight
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: 'clamp'
    })

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-30, 10],
      extrapolate: 'clamp'
    })

    this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [50, 30],
      extrapolate: 'clamp'
    })

  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Animated.View style={[styles.header, { height: this.animatedHeaderHeight }]}>
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try New Delhi"
                placeholderTextColor="#999"
                style={styles.searchInput}
                value={this.state.searchText}
                onChangeText={this.handleSearchChange}
              />
            </View>
            <Animated.View
              style={[styles.tagsContainer, { top: this.animatedTagTop, opacity: this.animatedOpacity }]}
            >
              <Tag name="Guests" onPress={this.handleGuestsPress} />
              <Tag name="Dates" onPress={this.handleDatesPress} />
            </Animated.View>
          </Animated.View>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event(
                [
                    { nativeEvent: { contentOffset: { y: this.scrollY } } }
                ],
                { useNativeDriver: false }
            )}
          >
            <View style={styles.scrollContainer}>
              <Text style={styles.welcomeText}>
                What can we help you find, Varun?
              </Text>

              <View style={styles.categorySection}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ paddingRight: 16 }}
                >
                  <Category imageUri={require('../assets/home.jpg')}
                    name="Home"
                  />
                  <Category imageUri={require('../assets/experiences.jpg')}
                    name="Experiences"
                  />
                  <Category imageUri={require('../assets/restaurant.jpg')}
                    name="Restaurant"
                  />
                </ScrollView>
              </View>
              <View style={styles.airbnbPlusSection}>
                <Text style={styles.sectionTitle}>
                  Introducing Airbnb Plus
                </Text>
                <Text style={styles.sectionSubtitle}>
                  A new selection of homes verified for quality & comfort
                </Text>
                <View style={styles.airbnbPlusImage}>
                  <Image
                      style={styles.featuredImage}
                      source={require('../assets/home.jpg')}
                  />
                </View>
              </View>
            </View>
            <View style={styles.homesSection}>
              <Text style={[styles.sectionTitle, { paddingHorizontal: 16 }]}>
                  Homes around the world
              </Text>
              <View style={styles.homesGrid}>
                <Home width={width}
                  name="The Cozy Place"
                  type="PRIVATE ROOM - 2 BEDS"
                  price={82}
                  rating={4}
                />
                <Home width={width}
                  name="The Cozy Place"
                  type="PRIVATE ROOM - 2 BEDS"
                  price={82}
                  rating={4}
                />
                <Home width={width}
                  name="The Cozy Place"
                  type="PRIVATE ROOM - 2 BEDS"
                  price={82}
                  rating={4}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd'
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f8f8f8',
    marginHorizontal: 16,
    marginBottom: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderRadius: 25,
    marginTop: Platform.OS === 'android' ? 30 : 16,
    alignItems: 'center'
  },
  searchIcon: {
    marginRight: 12,
    color: '#666'
  },
  searchInput: {
    flex: 1,
    fontWeight: '500',
    backgroundColor: 'transparent',
    fontSize: 16,
    color: '#333'
  },
  tagsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    position: 'relative',
    marginBottom: 8
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 24
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 16,
    color: '#333',
    marginBottom: 4
  },
  categorySection: {
    height: 130,
    marginTop: 24,
    marginBottom: 8
  },
  airbnbPlusSection: {
    marginTop: 32,
    paddingHorizontal: 16,
    marginBottom: 16
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333'
  },
  sectionSubtitle: {
    fontWeight: '300',
    marginTop: 8,
    color: '#666',
    fontSize: 16,
    lineHeight: 22
  },
  airbnbPlusImage: {
    width: width - 32,
    height: 200,
    marginTop: 16
  },
  featuredImage: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd'
  },
  homesSection: {
    marginTop: 32,
    paddingBottom: 24
  },
  homesGrid: {
    paddingHorizontal: 16,
    marginTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
});
