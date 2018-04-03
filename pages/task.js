import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  ScrollView
} from 'react-native';
import TopBar from '../components/topbar';
import Button from '../components/button';
import Bottombar from '../components/bottombar';
import PropTypes from 'prop-types';
import Search from 'react-native-search-box';
import Taskmessage from '../components/taskmessage';
import Bolddivider from '../components/bolddivider';
import Skillmsg from '../components/skillmsg';
import Personmsg from '../components/personmsg';
import Process from '../components/process';
import Selfsay from '../components/selfsay';
import Notice from '../components/notice';
import Changetask from './changetask';
import Comment1 from '../components/comment1';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const rowHeight = 40;
export default class Task extends Component {
    constructor(props) {
        super(props);   
        this.state = {

        };
    }
    menu () {
        const {navigator} = this.props;
            if(navigator){
            navigator.pop();
        }
    }
    Jump_to_changetask () {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'Changetask',
                component: Changetask
            });
        }
    }
    render() {
        return (
            <View style={{
                width:width,
                height:height,
                flexDirection:'column',
                backgroundColor:'white'
            }}>
                <View style={{
                    width:width,
                    height:height-StatusBar.currentHeight,
                    flexDirection:'column',
                }}>
                    <TopBar 
                        handleMenu={this.menu.bind(this)}
                        source1={require('../icon/cheveron-left.png')}
                        title={'任务'}
                        backgroundColor={'rgb(43,130,163)'}
                        elevation={0} />
                    <ScrollView>
                        <Taskmessage name={'任务a'} Jump_to_changetask={this.Jump_to_changetask.bind(this)} />
                        <Bolddivider dividerheight={1} />
                        <Personmsg />
                        <Bolddivider />
                        <Process />
                        <Bolddivider />
                        <Selfsay title={'任务说明'} />
                        <Bolddivider />
                        <Comment1 />
                    </ScrollView>
                </View>
            </View>
        );
    }
}
