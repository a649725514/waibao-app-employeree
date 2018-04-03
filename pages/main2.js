import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Modal,
  Animated,
  Easing,
  Image,
  TouchableOpacity,
  ListView,
} from 'react-native';
import TopBar from '../components/topbar';
import Button from '../components/button';
import Bottombar from '../components/bottombar';
import PropTypes from 'prop-types';
import Search from 'react-native-search-box';
import Message from './message';
import Group from './group';
import Piechart from './piechart';
import Selfcard from '../components/selfcard';
import Menulist from '../components/menulist';
import Bolddivider from '../components/bolddivider';
import Tasklist from '../components/tasklist';
import Projectlist from '../components/projectlist';
import Project from './project';
import Task from '../pages/task';
import Main from './main';
import Selfmessage from './selfmessage';
import Setting from './setting';
import Agreement from './agreement';
import Addproject from './addproject';
import Addtask from './addtask';
import {Rating} from 'react-native-elements'
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const rowHeight = 40;
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,sectionHeaderHasChanged: (s1, s2) => s1 !== s2});
const data1 = [
    {
        name:'项目A',
        star: 2
    },
    {
        name:'项目B',
        star:1
    }
]
export default class Main2 extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            isModal:false,
            menuleft: new Animated.Value(0),
            menuleft1: new Animated.Value(0),
            dataSource1: ds.cloneWithRows(data1),
            circleright: new Animated.Value(0),
            circlebottom: new Animated.Value(0),
            circleright1: new Animated.Value(0),
            circlebottom1: new Animated.Value(0),
            circle: new Animated.Value(0),
            rotateValue: new Animated.Value(0),
            isshow: false
        };
    }
    press () {
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Task',
                component: Task
            });
        }
    }
    renderSeparator = () => {
        return (
            <Bolddivider dividerheight={1} />
        )
    }
    renderPage = (rowData,sectionId,rowId) => {
        return (
            <Projectlist 
                name={rowData.name}
                star={rowData.star}
                Jump_to_project={()=>this.Jump_to_project()}
                press={()=>this.press()}/>
        )
    }
    onRequestClose() {
        this.setState({
            isModal:false
        });
        this.state.menuleft.setValue(1),
            Animated.timing(
                this.state.menuleft,
                {
                    toValue: 0,
                    duration: 500,
                    easing: Easing.linear,
                }
            ).start();
    }
    circlepress() {
        if (this.state.isshow == false) {
            this.setState({
                isshow:true
            })
            Animated.parallel([
                Animated.timing(
                    this.state.circleright,
                    {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.linear,
                    }
                ),
                Animated.timing(
                    this.state.circleright1,
                    {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.linear,
                    }
                ),
                Animated.timing(
                    this.state.circlebottom,
                    {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.linear,
                    }
                ),
                Animated.timing(
                    this.state.circlebottom1,
                    {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.linear,
                    }
                ),
                Animated.timing(
                    this.state.circle,
                    {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.linear,
                    }
                ),
                Animated.timing(
                    this.state.rotateValue,
                    {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.linear,
                    }
                )
            ]).start();
        } else {
            this.setState({
                isshow:false
            })
            Animated.parallel([
                Animated.timing(
                    this.state.circleright,
                    {
                        toValue: 0,
                        duration: 500,
                        easing: Easing.linear,
                    }
                ),
                Animated.timing(
                    this.state.circleright1,
                    {
                        toValue: 0,
                        duration: 500,
                        easing: Easing.linear,
                    }
                ),
                Animated.timing(
                    this.state.circlebottom,
                    {
                        toValue: 0,
                        duration: 500,
                        easing: Easing.linear,
                    }
                ),
                Animated.timing(
                    this.state.circlebottom1,
                    {
                        toValue: 0,
                        duration: 500,
                        easing: Easing.linear,
                    }
                ),
                Animated.timing(
                    this.state.circle,
                    {
                        toValue: 0,
                        duration: 500,
                        easing: Easing.linear,
                    }
                ),
                Animated.timing(
                    this.state.rotateValue,
                    {
                        toValue: 0,
                        duration: 500,
                        easing: Easing.linear,
                    }
                )
            ]).start();
        }
    }
    menu(){
        this.setState({
           isModal:true
        });
        this.state.menuleft.setValue(0),
        this.state.menuleft1.setValue(-1),
        Animated.parallel([
            Animated.timing(
                this.state.menuleft,
                {
                    toValue: 1,
                    duration: 500,
                    easing: Easing.linear,
                }
            ),
            Animated.timing(
                this.state.menuleft1,
                {
                    toValue: 0,
                    duration: 500,
                    easing: Easing.linear,
                }
            )
        ]).start();
    }
    Jump_to_drawer () {
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Main',
                component: Main
            });
        }
    }
    Jump_to_message () {
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Message',
                component: Message
            });
        }
    }
    Jump_to_group () {
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Group',
                component: Group
            });
        }
    }
    Jump_to_pie_chart () {
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Piechart',
                component: Piechart
            });
        }
    }
    Jump_to_addproject() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'Addproject',
                component: Addproject
            });
        }
    }
    Jump_to_addtask() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'Addtask',
                component: Addtask
            });
        }
    }
    Jump_to_main () {
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Main',
                component: Main
            });
        }
    }
    Jump_to_project () {
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Project',
                component: Project
            });
        }
    }
    Jump_to_selfmessage () {
        this.onRequestClose();
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Selfmessage',
                component: Selfmessage
            });
        }
    }
    Jump_to_setting () {
        this.onRequestClose();
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Setting',
                component: Setting
            });
        }
    }
    exit() {
        alert('EXIT');
    }
    render() {
        return (
            <Animated.View style={{
                width:width,
                height:height,
                flexDirection:'column',
                backgroundColor:'white',
                left:this.state.menuleft.interpolate({inputRange:[0,1],outputRange:[0,0.7*width]})
            }}>
                <Modal
                    animationType='fade'            // 淡入淡出
                    transparent={true}              // 透明
                    visible={this.state.isModal}    // 根据isModal决定是否显示
                    onRequestClose={() => {this.onRequestClose()}}  // android必须实现
                >
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',width:width,height:height,backgroundColor:'rgba(0,0,0,0.5)'}}>
                        <Animated.View style={{
                            flexDirection:'column',
                            justifyContent:'flex-start',
                            alignItems:'center',
                            width:0.7*width,
                            height:height,
                            backgroundColor:'white',
                            left:this.state.menuleft1.interpolate({inputRange:[0,1],outputRange:[0,0.7*width]})
                        }}>
                            <Selfcard />
                            <Menulist source={require('../icon/user-blue.png')} content={'个人信息'} press={()=>this.Jump_to_selfmessage()} />
                            <Menulist source={require('../icon/cog-blue.png')} content={'设置'} press={()=>this.Jump_to_setting()} />
                            <View style={{
                                position:'absolute',
                                bottom:25,
                                left:0,
                                width:0.7*width,
                                height:40,
                                backgroundColor:'rgb(241,78,69)',
                            }}>
                                <TouchableOpacity style={{width:0.7*width,height:40,justifyContent:'center',alignItems:'center'}} onPress={()=>this.exit()}>
                                    <Text style={{color:'white'}}>{'安全退出'}</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                        <TouchableOpacity style={{width:0.3*width,height:height}} onPress={()=>this.onRequestClose()}/>
                    </View>
                </Modal>
                <StatusBar  
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={false}  //是否隐藏状态栏。  
                    backgroundColor={'rgb(43,130,163)'} //状态栏的背景色  
                    translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                    >  
                </StatusBar>
                <View style={{
                    width:width,
                    height:height-50-StatusBar.currentHeight,
                    flexDirection:'column',
                }}>
                    <TopBar 
                        handleMenu={this.menu.bind(this)}
                        source1={require('../icon/menu.png')}
                        title={'开发者工作台'}
                        backgroundColor={'rgb(43,130,163)'} />
                    <View style={{
                        width:width,
                        height:50,
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <Button 
                            ButtonWidth={60}
                            ButtonHeight={30}
                            fontSize={15}
                            bgColor={'white'}
                            text={'任务'}
                            color={'black'}
                            borderRadius={0}
                            press={this.Jump_to_main.bind(this)}/>
                        <Button 
                            ButtonWidth={60}
                            ButtonHeight={30}
                            fontSize={15}
                            bgColor={'rgb(0,122,255)'}
                            text={'项目'}
                            borderRadius={0}/>
                    </View>
                    <Search  />
                    <View style={{
                        width:width,
                        marginTop:20
                    }}>
                        <Bolddivider dividerheight={1} />
                    </View>
                    <View style={{
                        width:width,
                        height:height-50-StatusBar.currentHeight-165,
                        //backgroundColor:'yellow'
                    }}>
                        <ListView
                            dataSource={this.state.dataSource1}
                            renderRow={(rowData,sectionId,rowId)=>this.renderPage(rowData,sectionId,rowId)}
                            renderSeparator={this.renderSeparator}
                        />
                    </View>
                </View>
                <View style={{
                    width:width,
                    height:50
                }}>
                    <Bottombar 
                        Jump_to_drawer={this.Jump_to_drawer.bind(this)} 
                        Jump_to_message={this.Jump_to_message.bind(this)}
                        Jump_to_group={this.Jump_to_group.bind(this)}
                        Jump_to_pie_chart={this.Jump_to_pie_chart.bind(this)}/>
                </View>
                <View style={{
                    position: 'absolute',
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    backgroundColor: 'rgba(0,150,136,0.75)',
                    right: 20,
                    bottom: 100
                }}>
                    <TouchableOpacity style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} onPress={() => this.circlepress()}>
                        <Image source={require('../icon/plus.png')}></Image>
                    </TouchableOpacity>
                </View>
                <Animated.View style={{
                    position: 'absolute',
                    height: this.state.circle.interpolate({ inputRange: [0, 1], outputRange: [0, 30] }),
                    width: this.state.circle.interpolate({ inputRange: [0, 1], outputRange: [0, 30] }),
                    borderRadius: this.state.circle.interpolate({ inputRange: [0, 1], outputRange: [0, 15] }),
                    backgroundColor: 'rgba(0,150,136,0.5)',
                    right: this.state.circleright.interpolate({ inputRange: [0, 1], outputRange: [20, 80] }),
                    bottom: this.state.circlebottom.interpolate({ inputRange: [0, 1], outputRange: [100, 110] }),
                    transform:[{rotate: this.state.rotateValue.interpolate({inputRange: [0, 1],outputRange: ['0deg', '360deg']})}]
                }}>
                    <TouchableOpacity style={{
                        height: 30,
                        width: 30,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} onPress={()=>this.Jump_to_addproject()}>
                        <Image source={require('../icon/folder-open.png')}></Image>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={{
                    position: 'absolute',
                    height: this.state.circle.interpolate({ inputRange: [0, 1], outputRange: [0, 30] }),
                    width: this.state.circle.interpolate({ inputRange: [0, 1], outputRange: [0, 30] }),
                    borderRadius: this.state.circle.interpolate({ inputRange: [0, 1], outputRange: [0, 15] }),
                    backgroundColor: 'rgba(0,150,136,0.5)',
                    right: this.state.circleright1.interpolate({ inputRange: [0, 1], outputRange: [20, 50] }),
                    bottom: this.state.circlebottom1.interpolate({ inputRange: [0, 1], outputRange: [100, 150] }),
                    transform:[{rotate: this.state.rotateValue.interpolate({inputRange: [0, 1],outputRange: ['0deg', '360deg']})}]
                }}>
                    <TouchableOpacity style={{
                        height: 30,
                        width: 30,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} onPress={()=>this.Jump_to_addtask()}>
                        <Image source={require('../icon/page.png')}></Image>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        );
    }
}
