import {Alert, Dimensions, PixelRatio} from 'react-native';

export const validateEmail = (email:string):boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
export const formatAddress = (address:any) => {
  const {address_line_1, address_line_2, city, state, country, zipcode} =
    address;

  const addressParts = [
    address_line_1,
    address_line_2,
    city,
    state,
    country,
    zipcode && zipcode.toString(),
  ].filter(Boolean);
  return addressParts.join(', ');
};

export const showError = (errors:any) => {
  if (typeof errors === 'object') {
    if (Array.isArray(errors)) {
      if (isObject(errors[0])) {
        let errorMessage = '';
        errors.forEach(error => {
          Object.keys(error).forEach(key => {
            errorMessage += `${error[key]}\n`;
          });
        });
        Alert.alert('Error', errorMessage.trim());
      } else {
        Alert.alert('Error', errors.join('\n'));
      }
    }
  } else if (typeof errors === 'string') {
    Alert.alert('Error', errors);
  } else {
    Alert.alert('Error', 'An unknown error occurred.');
  }
};

const isObject = (value:any) => {
  return typeof value === 'object' && value !== null;
};