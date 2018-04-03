import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    ListView
} from 'react-native';
import PropTypes from 'prop-types';
import Transferitem from './transferitem';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const data1 = ['高', '中', '低'];
const data2 = ['JavaScript'];
const data3 = [];
const data4 = [];
export default class Transfer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource1: ds.cloneWithRows(data1),
            dataSource2: ds.cloneWithRows(data2),
        }
    }
    test(rowId) {
        data3 = data2;
        data3.push(data1[rowId]);
        data1.splice(rowId, 1);
    }
    test1(rowId) {
        data4 = data1;
        data4.push(data2[rowId]);
        data2.splice(rowId,1);
    }
    transleft() {
        this.setState({
            dataSource1: ds.cloneWithRows(data4),
            dataSource2: ds.cloneWithRows(data2)
        })
    }
    transright() {
        this.setState({
            dataSource1: ds.cloneWithRows(data1),
            dataSource2: ds.cloneWithRows(data3)
        })
    }
    renderRow1 = (rowData, sectionId, rowId) => {
        return (
            <TouchableOpacity style={{ width: 0.3 * width, height: 30 }} onPress={() => this.test(rowId)}>
                <Transferitem data={rowData} />
            </TouchableOpacity>
        )
    }
    renderRow2 = (rowData, sectionId, rowId) => {
        return (
            <TouchableOpacity style={{ width: 0.3 * width, height: 30 }} onPress={() => this.test1(rowId)}>
                <Transferitem data={rowData} />
            </TouchableOpacity>
        )
    }
    // renderSeparator1 = () => {
    //     return (
    //         <Bolddivider dividerheight={1} color={'white'} />
    //     )
    // }
    render() {
        return (
            <View style={{
                width: 0.7 * width,
                height: 150,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: this.props.backgroundColor,
                elevation: this.props.elevation,
            }}>
                <View style={{
                    width: 0.3 * width,
                    height: 150,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    padding: 5,
                    borderRadius: 3,
                    backgroundColor: '#e9e9e9'
                }}>
                    <ListView
                        style={{
                            width: 0.3 * width
                        }}
                        dataSource={this.state.dataSource1}
                        renderRow={(rowData, sectionId, rowId) => this.renderRow1(rowData, sectionId, rowId)}
                    //renderSeparator={this.renderSeparator1}
                    />
                </View>
                <View style={{
                    width: 0.1 * width,
                    height: 150,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 5
                }}>
                    <View style={{
                        width: 0.07 * width,
                        height: 0.07 * width,
                        borderRadius: 3,
                        backgroundColor: '#e9e9e9',
                        marginBottom: 10
                    }}>
                        <TouchableOpacity style={{
                            width: 0.07 * width,
                            height: 0.07 * width,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={() => this.transleft()}>
                            <Image source={require('../icon/chevron-left-16-b.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width: 0.07 * width,
                        height: 0.07 * width,
                        borderRadius: 3,
                        backgroundColor: '#e9e9e9'
                    }}>
                        <TouchableOpacity style={{
                            width: 0.07 * width,
                            height: 0.07 * width,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={() => this.transright()}>
                            <Image source={require('../icon/chevron-right-16-b.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    width: 0.3 * width,
                    height: 150,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    padding: 5,
                    borderRadius: 3,
                    backgroundColor: '#e9e9e9'
                }}>
                    <ListView
                        style={{
                            width: 0.3 * width - 10
                        }}
                        dataSource={this.state.dataSource2}
                        renderRow={(rowData, sectionId, rowId) => this.renderRow2(rowData, sectionId, rowId)}
                    //renderSeparator={this.renderSeparator1}
                    />
                </View>
            </View>
        );
    }
}

Transfer.propTypes = {

}
Transfer.defaultProps = {

}