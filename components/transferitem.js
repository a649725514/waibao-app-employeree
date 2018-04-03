import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import PropTypes from 'prop-types';
export default class Transferitem extends React.Component {
    constructor(props) {
        super(props);
        this.isSelected = 0;
    }
    // selected() {
    //     this.isSelected = this.isSelected == 0 ? 1 : 0;
    //     if (this.isSelected == 1) {
    //         this.refs.ITEM.setNativeProps({
    //             backgroundColor: 'white'
    //         })
    //     } else {
    //         this.refs.ITEM.setNativeProps({
    //             backgroundColor: '#e9e9e9'
    //         })
    //     }
    // }
    render() {
        return (
            // <TouchableOpacity style={{
            //     width: 0.3 * width - 10,
            //     height: 30,
            // }} onPress={() => this.selected()}>
                <View
                    style={{
                        width: 0.3 * width - 10,
                        height: 30,
                        //paddingLeft: 5,
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                    }}
                    ref="ITEM"
                >
                    <Text>{this.props.data}</Text>
                </View>
            // </TouchableOpacity>
        );
    }
}

Transferitem.propTypes = {
    data: PropTypes.string.isRequired
}
Transferitem.defaultProps = {

}