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
    ScrollView,
    TextInput,
    ListView,
} from 'react-native';
import Transfer from '../components/transfer';
import TopBar from '../components/topbar';
import Settingitem from '../components/settingitem';
import Bolddivider from '../components/bolddivider';
import { Switch } from 'react-native-switch';
import DatePicker from 'react-native-modal-datetime-picker';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const data = ['高', '中', '低'];
const data1 = ['JavaScript'];
//const data3 = ['项目A','项目B','项目C'];
export default class Changetask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: '',
            name: '',
            date1: '截止时间',
            isDateTimePickerVisible: false,
            isDateTimePickerVisible1: false,
            dataSource: ds.cloneWithRows(data),
            dataSource1: ds.cloneWithRows(data1),
            //dataSource3: ds.cloneWithRows(data3),
            showAnim: new Animated.Value(0),
            selected: '安全等级',
            //editable:false,
            placeholder1: '+ New Tag',
            tag: '',
            placeholder2: '',
            introduce: '',
            placeholder4:'工作量',
            worktime:''
        };
        this.showorhide = 0;
        this.showorhide1 = 0;
    }
    addtag() {
        data1.push(this.state.tag);
        this.setState({
            tag: '',
            dataSource1: ds.cloneWithRows(data1)
        })
    }
    addstage() {
        data2.push(this.state.stage);
        this.setState({
            stage: '',
            dataSource2: ds.cloneWithRows(data2)
        })
    }
    deletestage(rowId) {
        data2.splice(rowId, 1)
        this.setState({
            dataSource2: ds.cloneWithRows(data2)
        })
    }
    deletetag(rowId) {
        data1.splice(rowId, 1)
        this.setState({
            dataSource1: ds.cloneWithRows(data1)
        })
    }
    deletetask () {

    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    _handleDatePicked = (date) => {
        this.setState({
            mindate: date,
            date1: (date.getYear() - 100) + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日',
        })
        this._hideDateTimePicker();
    };
    renderSeparator = () => {
        return (
            <Bolddivider dividerheight={0} />
        )
    }
    renderSeparator1 = () => {
        return (
            <Bolddivider dividerheight={10} color={'white'} />
        )
    }
    renderRow = (rowData) => {
        return (
            <TouchableOpacity style={{
                width: 0.3 * width,
                height: 30,
            }} onPress={() => this.select(rowData)}>
                <View style={{
                    width: 0.3 * width,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#e9e9e9',
                }}>
                    <Text>{rowData}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    renderRow1 = (rowData, sectionId, rowId) => {
        return (
            <View style={{
                width: 0.3 * width,
                //height: 30,
                backgroundColor: '#e9e9e9',
                borderRadius: 3,
                flexDirection: 'row',
                padding: 5
            }}>
                <View style={{
                    width: 0.3 * width - 30,
                    //height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        marginLeft: 5
                    }}>{rowData}</Text>
                </View>
                <TouchableOpacity style={{
                    width: 30,
                    //height: 30,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => this.deletetag(rowId)}>
                    <Text>{'x'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    renderRow2 = (rowData, sectionId, rowId) => {
        return (
            <View style={{
                width: 0.3 * width,
                //height: 30,
                backgroundColor: '#e9e9e9',
                borderRadius: 3,
                flexDirection: 'row',
                padding: 5
            }}>
                <View style={{
                    width: 0.3 * width - 30,
                    //height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        marginLeft: 5
                    }}>{rowData}</Text>
                </View>
                <TouchableOpacity style={{
                    width: 30,
                    //height: 30,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => this.deletestage(rowId)}>
                    <Text>{'x'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    select(rowData) {
        this.setState({
            selected: rowData
        })
        this.showorhideItems()
    }
    menu() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
    change() {
        this.refs.NAME.setNativeProps({ borderColor: '#4876FF' })
    }
    changeback() {
        this.refs.NAME.setNativeProps({ borderColor: '#D9D9D9' })
    }
    showorhideItems() {
        Animated.timing(
            this.state.showAnim,
            {
                toValue: this.showorhide == 0 ? 1 : 0
            }
        ).start();
        this.showorhide = this.showorhide == 0 ? 1 : 0;
    }
    render() {
        return (
            <View style={{
                width: width,
                height: height,
                flexDirection: 'column',
                backgroundColor: 'white'
            }}>
                <TopBar
                    handleMenu={this.menu.bind(this)}
                    source1={require('../icon/cheveron-left.png')}
                    source2={require('../icon/paperplane.png')}
                    title={'修改任务'}
                    backgroundColor={'rgb(43,130,163)'}
                    elevation={0} />
                <View style={{
                    width: width,
                    height: height - StatusBar.currentHeight - 110,
                    //backgroundColor:'yellow',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    margin: 20,
                    marginTop: 5,
                    marginBottom: 5
                }}>
                    <ScrollView>
                        <View style={{
                            width: width,
                            //height: 50,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: 15
                        }}>
                            <Text style={{ color: 'black', marginRight: 20, fontSize: 15 }}>{'安全级别'}</Text>
                            <View style={{
                                width: width,
                            }}>
                                <TouchableOpacity style={{
                                    width: 0.3 * width,
                                    height: 35,
                                }} onPress={() => this.showorhideItems()}>
                                    <View style={{
                                        width: 0.3 * width,
                                        height: 35,
                                        backgroundColor: '#e9e9e9',
                                        borderRadius: 3,
                                        flexDirection: 'row'
                                    }}>
                                        <View style={{
                                            width: 0.3 * width - 35,
                                            height: 35,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{ marginLeft: 5 }}>{this.state.selected}</Text>
                                        </View>
                                        <View style={{
                                            width: 35,
                                            height: 35,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Image source={require('../icon/cheveron-down-b.png')}></Image>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <Animated.View style={{
                                    width: 0.3 * width,
                                    //position:'absolute',
                                    height: this.state.showAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, data.length * 30]
                                    }),
                                    overflow: 'hidden',
                                }}>
                                    <ListView
                                        dataSource={this.state.dataSource}
                                        renderRow={(rowData) => this.renderRow(rowData)}
                                        renderSeparator={this.renderSeparator} />
                                </Animated.View>
                            </View>
                        </View>
                        <View style={{
                            width: width,
                            height: 50,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: 15
                        }}>
                            <Text style={{ color: 'black', marginRight: 20, fontSize: 15 }}>{'截止日期'}</Text>
                            <TouchableOpacity style={{ width: 0.25 * width, height: 35 }} onPress={this._showDateTimePicker}>
                                <View style={{
                                    width: 0.25 * width,
                                    height: 35,
                                    backgroundColor: '#e9e9e9',
                                    borderRadius: 3,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text>{this.state.date1}</Text>
                                </View>
                            </TouchableOpacity>
                            <DatePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked.bind(this)}
                                onCancel={this._hideDateTimePicker.bind(this)}
                            />
                        </View>
                        <View style={{
                            width: width,
                            height: 50,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: 15
                        }}>
                            <Text style={{ color: 'black', marginRight: 35, fontSize: 15 }}>{'工作量'}</Text>
                            <TextInput
                                style={{
                                    width: 0.3 * width,
                                    height: 35,
                                    //borderColor: '#D9D9D9',
                                    borderRadius: 3,
                                    //borderWidth: 1,
                                    fontSize: 12,
                                    backgroundColor: '#e9e9e9'
                                }}
                                placeholder={this.state.placeholder4}
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => this.setState({ worktime: text })} 
                                value={this.state.worktime}
                                keyboardType={'numeric'}/>
                        </View>
                        <View style={{
                            width: width,
                            height: 120,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            marginTop: 15
                        }}>
                            <Text style={{ color: 'black', marginRight: 20, fontSize: 15 }}>{'任务说明'}</Text>
                            <TextInput
                                style={{
                                    width: 0.65 * width,
                                    height: 120,
                                    //borderColor: '#D9D9D9',
                                    borderRadius: 3,
                                    //borderWidth: 1,
                                    fontSize: 12,
                                    backgroundColor: '#e9e9e9',
                                    marginRight: 0.1 * width,
                                    padding: 5
                                }}
                                placeholder={this.state.placeholder2}
                                onChangeText={(text) => this.setState({ introduce: text })}
                                value={this.state.introduce}
                                multiline={true}
                                textAlignVertical={'top'}
                                underlineColorAndroid={'transparent'}
                            />
                        </View>
                        <View style={{
                            width: width,
                            height: 150,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            marginTop: 15
                        }}>
                            <Text style={{ color: 'black', marginRight: 20, fontSize: 15 }}>{'添加成员'}</Text>
                            <Transfer />
                        </View>
                    </ScrollView>
                </View>
                <View style={{
                    position: 'absolute',
                    width: width,
                    height: 50,
                    bottom: 24,
                    backgroundColor: 'rgba(241,78,69,0.9)'
                }}>
                    <TouchableOpacity style={{
                        width: width,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} onPress={() => this.deletetask()}>
                        <Text style={{ color: 'white' }}>{'删除此项目'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
