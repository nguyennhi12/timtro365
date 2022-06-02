import {View, TouchableOpacity, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {styles} from './SelectPositionScreen.styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useDispatch} from 'react-redux';
navigator.geolocation = require('@react-native-community/geolocation');
import {addressAdd} from '../../redux/action/news.action';
const SelectPositionScreen = () => {
  const dispatch = useDispatch();
  const [region, setRegion] = useState({
    latitude: 10.851223604685162,
    longitude: 106.77187736217854,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [location, setLocation] = useState('');
  const ref = useRef();
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.goBack();
  };
  const onDone = () => {
    console.log(location);
    dispatch(addressAdd(location));
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.styleGoBack}>
        <IconAntDesign
          name="left"
          size={styles.sizeIconLeft}
          onPress={onGoBack}
          color="white"
        />
        <View style={styles.styleGGPlaceComplete}>
          <GooglePlacesAutocomplete
            ref={ref}
            placeholder="Search"
            minLength={2} // minimum length of text to search
            autoFocus
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed="auto" // true/false/undefined
            fetchDetails
            nearbyPlacesAPI="GooglePlacesSearch"
            currentLocation
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              setRegion({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              });
              setLocation(details.formatted_address);
              console.log(data, details);
            }}
            query={{
              key: 'AIzaSyD0dzRmiMfo-5aA3BP4kQTBM8R-bgfSGkM',
              language: 'en',
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.styleIconFind} onPress={onDone}>
        <IconAntDesign name="check" size={styles.sizeIconLeft} />
      </TouchableOpacity>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        // showsUserLocation
        region={region}
        // showsMyLocationButton={true}
        loadingEnabled>
        <Marker coordinate={region} />
      </MapView>
    </View>
  );
};

export default SelectPositionScreen;
