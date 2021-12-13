import { StylesContext } from '@material-ui/styles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import {styles} from './HeaderHome.styles';

export default function HeaderHome(){
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.header}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={
                    {marginLeft:'2%',
                    marginBottom:'2%',
                    marginTop: '11%',
                    width: '95%'}
                }
            />
        </View>
        
    );
}