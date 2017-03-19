/**
 * Created by tai on 3/19/17.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import yelp from './api/yelp';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    yelp.search().then(data => {
      console.log('data', data);
    }).catch(error => {
      console.log('error', error);
    })
  }

  render() {
    return (
      <View>

      </View>
    )
  }
}