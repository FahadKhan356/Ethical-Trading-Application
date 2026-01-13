import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import GlobalStyles from '../Constants/GlobleStyles';
import {COLORS} from '../Constants/COLORS';

type loaderProps = {
  color?: string;
};

const Loader = ({color}: loaderProps) => {
  return (
    <View style={GlobalStyles.loadView}>
      <ActivityIndicator size={'large'} color={color || COLORS.white} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
