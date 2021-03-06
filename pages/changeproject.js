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
const data2 = [];
export default class Changeproject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: '',
            name: '',
            date1: '起始时间',
            date2: '结束时间',
            isDateTimePickerVisible: false,
            isDateTimePickerVisible1: false,
            mindate: null,
            dataSource: ds.cloneWithRows(data),
            dataSource1: ds.cloneWithRows(data1),
            dataSource2: ds.cloneWithRows(data2),
            showAnim: new Animated.Value(0),
            selected: '安全等级',
            //editable:false,
            placeholder1: '+ New Tag',
            tag: '',
            placeholder2: '',
            introduce: '',
            placeholder3: '+ 阶段名称',
            stage: ''
        };
        this.showorhide = 0;
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
    deleteproject() {
        alert('删除项目');
    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    _showDateTimePicker1 = () => this.setState({ isDateTimePickerVisible1: true });
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    _hideDateTimePicker1 = () => this.setState({ isDateTimePickerVisible1: false });
    _handleDatePicked = (date) => {
        this.setState({
            mindate: date,
            date1: (date.getYear() - 100) + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日',
        })
        this._hideDateTimePicker();
    };
    _handleDatePicked1 = (date) => {
        this.setState({
            date2: (date.getYear() - 100) + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日',
        })
        this._hideDateTimePicker1();
    }
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
                    title={'修改项目'}
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
                            height: 50,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: 15
                        }}>
                            <Text style={{ color: 'black', marginRight: 20, fontSize: 15 }}>{'项目周期'}</Text>
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
                            <Text style={{
                                margin: 5
                            }}>{'-'}</Text>
                            <TouchableOpacity style={{ width: 0.25 * width, height: 35 }} onPress={this._showDateTimePicker1}>
                                <View style={{
                                    width: 0.25 * width,
                                    height: 35,
                                    backgroundColor: '#e9e9e9',
                                    borderRadius: 3,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text>{this.state.date2}</Text>
                                </View>
                            </TouchableOpacity>
                            <DatePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked.bind(this)}
                                onCancel={this._hideDateTimePicker.bind(this)}
                            />
                            <DatePicker
                                isVisible={this.state.isDateTimePickerVisible1}
                                onConfirm={this._handleDatePicked1.bind(this)}
                                onCancel={this._hideDateTimePicker1.bind(this)}
                                minimumDate={this.state.mindate}
                            />
                        </View>
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
                            //height: 50,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: 15
                        }}>
                            <Text style={{ color: 'black', marginRight: 20, fontSize: 15 }}>{'技能方向'}</Text>
                            <ListView
                                style={{
                                    width: 0.3 * width,
                                    marginTop: 10
                                }}
                                dataSource={this.state.dataSource1}
                                renderRow={(rowData, sectionId, rowId) => this.renderRow1(rowData, sectionId, rowId)}
                                renderSeparator={this.renderSeparator1}
                            />
                            <TextInput
                                style={{
                                    width: 0.3 * width,
                                    height: 30,
                                    //borderColor: '#D9D9D9',
                                    borderRadius: 3,
                                    //borderWidth: 1,
                                    fontSize: 12,
                                    backgroundColor: '#e9e9e9',
                                    marginRight: 0.1 * width,
                                    padding: 0
                                }}
                                underlineColorAndroid={'transparent'}
                                //editable={this.state.editable}
                                placeholder={this.state.placeholder1}
                                textAlign={'center'}
                                onChangeText={(text) => this.setState({ tag: text })}
                                onBlur={() => this.addtag()}
                                value={this.state.tag}
                            />
                        </View>
                        <View style={{
                            width: width,
                            height: 120,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            marginTop: 15
                        }}>
                            <Text style={{ color: 'black', marginRight: 20, fontSize: 15 }}>{'项目说明'}</Text>
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
                                underlineColorAndroid={'transparent'}
                                placeholder={this.state.placeholder2}
                                onChangeText={(text) => this.setState({ introduce: text })}
                                value={this.state.introduce}
                                multiline={true}
                                textAlignVertical={'top'}
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
                        <View style={{
                            width: width,
                            //height: 150,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: 15,
                            marginBottom: 60
                        }}>
                            <Text style={{ color: 'black', marginRight: 20, fontSize: 15 }}>{'阶段定义'}</Text>
                            <View style={{
                                width: width * 0.7,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginTop: 10
                            }}>
                                <ListView
                                    style={{
                                        width: 0.3 * width,
                                        marginTop: 10
                                    }}
                                    dataSource={this.state.dataSource2}
                                    renderRow={(rowData, sectionId, rowId) => this.renderRow2(rowData, sectionId, rowId)}
                                    renderSeparator={this.renderSeparator1}
                                />
                                <TextInput
                                    style={{
                                        width: 0.3 * width,
                                        height: 30,
                                        borderRadius: 3,
                                        fontSize: 12,
                                        backgroundColor: '#e9e9e9',
                                        padding: 0
                                    }}
                                    underlineColorAndroid={'transparent'}
                                    placeholder={this.state.placeholder3}
                                    textAlign={'center'}
                                    onChangeText={(text) => this.setState({ stage: text })}
                                    onBlur={() => this.addstage()}
                                    value={this.state.stage}
                                />
                            </View>
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
                    }} onPress={() => this.deleteproject()}>
                        <Text style={{ color: 'white' }}>{'删除此项目'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
