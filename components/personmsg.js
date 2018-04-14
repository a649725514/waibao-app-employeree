import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    TextInput,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Bolddivider from './bolddivider';
import Button from './button';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Personmsg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={{
                width: width,
                height: 70,
                backgroundColor: 'white',
                flexDirection: 'row',
            }}>
                <View style={{
                    width: 70,
                    height: 70,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                    }} source={{ uri:'http://120.78.74.75:8010/'+this.props.publisher.workNumber+'/1.jpg'}}></Image>
                    </View>
                <View style={{
                    width: width - 70,
                    height: 70,
                }}>
                    <View style={{
                        width: width - 70,
                        height: 35,
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            width: width / 2 - 35,
                            height: 35,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-end'
                        }}>
                            <Text style={{ color: 'black', fontSize: 15, marginLeft: 10 }}>{this.props.publisher.name}</Text>
                        </View>
                        <View style={{
                            width: width / 2 - 35,
                            height: 35,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-end'
                        }}>
                            <Image style={{
                                marginRight: 10,
                                marginBottom: 3
                            }} source={require('../icon/phone-b.png')}></Image>
                            <Text>{this.props.publisher.tel}</Text>
                        </View>
                    </View>
                    <View style={{
                        width: width - 70,
                        height: 35,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: width / 2 - 35,
                            height: 35,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                            <Text style={{ marginLeft: 10 }}>{this.props.publisher.offer}</Text>
                        </View>
                        <View style={{
                            width: width / 2 - 35,
                            height: 35,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                            <Image style={{
                                marginRight: 10,
                            }} source={require('../icon/envelope-16-b.png')}></Image>
                            <Text>{this.props.publisher.email}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

Personmsg.propTypes = {

}
Personmsg.defaultProps = {
    publisher:{
        "workNumber": "10000",
            "name": "马化腾",
            "company": "杭电",
            "tel": "18100178922",
            "email": "18100178922@qq.com",
            "department": "研发部",
            "offer": "架构师",
            "status": 1
    }
}