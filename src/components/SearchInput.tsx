/* a component for search bar */
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar, } from 'react-native-paper';
import theme from '../utils/theme';

const SearchInput = (props: any) => {

  return (
    <Searchbar
      placeholder="Search markets"
      onChangeText={props.onChangeText}
      value={props.value}
      style= {styles.searchBar}
      iconColor='#FFFFFF'
      placeholderTextColor='#FFFFFF'
      inputStyle= {{color: 'white', fontFamily: theme.DEFAULT_FONT}}
    />
  );
};

const styles= StyleSheet.create({
    searchBar: {
        backgroundColor: '#FAF9F6',
        opacity: 0.5,
        color: 'white',
        borderRadius: 10,
        margin: 20,
    }
})

export default SearchInput;