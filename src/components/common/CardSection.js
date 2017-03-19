import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
  return(
    <View style={styles.conterinerStyle}>
      {props.children}
    </View>
  );
};
const styles = {
  conterinerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
