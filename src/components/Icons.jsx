import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icons = ({ type }) => {

  let imageSource;
  let iconStyle = styles.icon;

  switch (type) {
    case 'about':
      imageSource = require('../assets/menu/about.png');
      break;
    case 'battle':
      imageSource = require('../assets/menu/battle.png');
      break;
    case 'bonus':
      imageSource = require('../assets/menu/bonus.png');
      break;
    case 'settings':
      imageSource = require('../assets/menu/settings.png');
      break;
    case 'close':
      imageSource = require('../assets/menu/close.png');
      break;
    case 'admiral':
      imageSource = require('../assets/menu/admiral.png');
      break;
    case 'fight':
      imageSource = require('../assets/panel/fight.png');
      break;
    case 'quiz':
      imageSource = require('../assets/panel/quiz.png');
      break;
    case 'shop':
      imageSource = require('../assets/panel/shop.png');
      break;
    case 'stories':
      imageSource = require('../assets/panel/stories.png');
      break;
    case 'leader-board':
      imageSource = require('../assets/panel/leader-board.png');
      break;
    // case 'plus':
    //   imageSource = require('../assets/quiz/plus.png');
    //   iconStyle = styles.plusIcon;
    //   break;
  }

  return (
    <Image 
      source={imageSource} 
      style={iconStyle} 
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  plusIcon: {
    width: 55,
    height: 55,
  },
});

export default Icons;
