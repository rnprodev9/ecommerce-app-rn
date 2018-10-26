import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import { StyleSheet, Dimensions, ImageBackground, Text, TouchableOpacity } from 'react-native'

class PromotionList extends Component {
  render() {
    const { promotions } = this.props
    return (
      <Swiper
        style={styles.wrapper}
        containerStyle={{width: Dimensions.get("window").width, height: 200}}
        key={promotions.length}
        autoplay
      >
        {
          promotions.map(item => (
            <ImageBackground key={item.id} source={{ uri: 'https://picsum.photos/300/200/?image=280' }} style={styles.slide}>
              <TouchableOpacity
                onPress={() => {
                  alert('Navigate to promotion page')
                }}
              >
              <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            </ImageBackground>
          ))
        }
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default PromotionList
