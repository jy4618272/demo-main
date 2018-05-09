import React,{Component} from 'react';
import { Modal, Button} from 'antd';
import './index.less';
class ChooseImageForForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            visible: false,
            selected: '',
            listData:[],
            value:''
        }
        this.value='';
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = (e) => {
        let {value} = this.state;
        this.setState({
            visible: false,
        },this.triggerChange(value));
    };
    handleCancel = (e) => {
        let {listData,value} = this.state;
        value = this.value;
        listData = this.updateListData(listData,value);
        this.setState({
            visible: false,
            value,
            listData
        });
    };
    handleSelect = (item) => {
        let {listData,value} = this.state;
        value = item.value;
        listData = this.updateListData(listData,value);
        this.setState({
            listData,
            value
        });
    };
    creatImgList = (listData) => {
        return listData.map((item,index)=>{
            let {name,src,selected} = item;
            return (
                <li className={selected?'img-selected':''}>
                    <span title={name} onClick={this.handleSelect.bind(this,item)}><img width='80' src={src} alt={name}/></span>
                </li>
            )
        });
    }
    /**
     * 与 antd form 表单传递数据的方法
     * @param {String} changeValue  改变的 value 值
     */
    triggerChange = (changedValue) => {
        // Should provide an event to pass value to Form.
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(changedValue);
        }
    }
    /**
     * 更新图标列表数据
     * @param {Array} listData 旧的图标列表数据
     * @param {String} value 选中的图标value值
     */
    updateListData = (listData,value)=>{
        return listData = listData.map((item,index)=>{
            item.selected = false;
            if(item.value === value){
                item.selected = true;
            }
            return item;
        });
    }
    // componentWillReceiveProps(nextProps) {
    //     // Should be a controlled component.
    //     if ('value' in nextProps) {
    //         const value = nextProps.value;
    //         this.setState({value});
    //     }
    // }
    componentWillMount(){
        let {data,value} = this.props;
        this.value = value;
        let listData = this.updateListData(data,value);
        this.setState({
            listData,
            value
        });
    }
    render() {
        let {listData,value} = this.state;
        return (
            <div className='choose-imgae'>
                <div className='choose-btn' style={value.length>0?{ background: `url(${value}) no-repeat 0px 0px`, 'background-size': 'contain' }:null} onClick={this.showModal}>
                    <i className='iconfont icon-tianjiayingyong font-size-80'></i>
                </div>
                {/* <Button type="primary" onClick={this.showModal}>Open</Button> */}
                <Modal
                    title={this.props.title}
                    mask = {false}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <ul className='choose-imgae-list'>
                        {this.creatImgList(listData)}
                    </ul>
                </Modal>
            </div>
        );
    }
}
export default ChooseImageForForm;