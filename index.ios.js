/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

class Button extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <Text style={{fontSize: 20}}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}

function renderImage() {
  return (
    <Image
      source={require('./square.png')}
    />
  );
}

export default class RNImageRepro extends Component {
  constructor() {
    super();
    this._token = null;
    this.state = {
      shown: true
    };
  }
  _schedule() {
    this._token = setTimeout(() => {
      this.setState({ shown: !this.state.shown });
      this._schedule();
    }, 0);
  }
  _stop() {
    if (this._token) {
      clearTimeout(this._token);
    }
    this._token = null;
  }
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this._schedule()}>
          Start
        </Button>
        <Button onPress={() => this._stop()}>
          Stop
        </Button>
        {this.state.shown ? renderImage() : null }
        {this.state.shown ? renderImage() : null }
        {this.state.shown ? renderImage() : null }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

AppRegistry.registerComponent('RNImageRepro', () => RNImageRepro);
