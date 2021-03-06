import React, { Component } from 'react';
import _ from 'lodash';
import { Button, Modal, Radio } from 'antd';
import Ajax from 'Pub/js/ajax';
//自定义组件
import { layoutCheck } from './collision';
import { compactLayout } from './compact.js';
import { compactLayoutHorizontal } from './compact.js';
import { connect } from 'react-redux';
import { updateGroupList, updateSelectCardInGroupObj } from 'Store/test/action';
import * as utilService from './utilService';
const RadioGroup = Radio.Group;

class MyModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedValue: 0,
		};
	}

	//设置模态框显示与否
	setModalVisible =(modalVisible) => {
		this.setState({ selectedValue: 0 })
		this.props.setModalVisible(modalVisible);
	}
	//移动到的弹出框中，点击确认
	onOkMoveDialog(modalVisible) {
		const targetGroupID = this.state.selectedValue;
		let { appGroupArr } = this.props;
		let { groups } = this.props;
		groups = _.cloneDeep(groups);
		const targetGroupIndex = utilService.getGroupIndexByGroupID(groups, targetGroupID);

		let checkedAppList = [];
		if (targetGroupID === 0) {
			return;
		}
		_.forEach(appGroupArr, (a) => {
			_.forEach(a.children, (c) => {
				if (c.checked) {
					checkedAppList.push({
						pk_appregister: c.value,
						width: c.width,
						height: c.height,
						name: c.value,
						isShadow: false,
						gridx: 9999,
						gridy: 0
					});
					c.checked = false;
				}
			});
			a.checkedAll = false;
		});

		groups[targetGroupIndex].apps = _.concat(groups[targetGroupIndex].apps, checkedAppList);
		groups[targetGroupIndex].apps = _.uniqBy(groups[targetGroupIndex].apps, 'pk_appregister');
		//目标组内重新布局
		let compactedLayout = compactLayoutHorizontal( groups[targetGroupIndex].apps, this.props.col);

		const firstCard = compactedLayout[0];

		compactedLayout = compactLayout(compactedLayout, firstCard);

		groups[targetGroupIndex].apps = compactedLayout;

		this.props.updateGroupList(groups);
		this.setModalVisible(modalVisible);
		// this.setState({ appGroupArr });
	}
	//移动到的弹出框中，组名选择
	onChangeRadio(e) {
		this.setState({ selectedValue: e.target.value });
	}
	//通过组名来创建Radio
	getGroupItemNameRadio() {
		const {groups} = this.props;
		if (!groups) return;
		return (
			<RadioGroup
				className='modal-radio-group'
				value={this.state.selectedValue}
				onChange={this.onChangeRadio.bind(this)}
			>
				{groups.map((g, i) => {
					return (
						<Radio className='modal-radio' key={g.pk_app_group} value={g.pk_app_group}>
							{g.groupname}
						</Radio>
					);
				})}
			</RadioGroup>
		);
	}
	render() {
		console.log('modal')
		const groupNameRadioGroup = this.getGroupItemNameRadio();
		return (
			<Modal
				title='添加到'
				mask={false}
				wrapClassName='vertical-center-modal'
				visible={this.props.modalVisible}
				onOk={() => this.onOkMoveDialog(false)}
				onCancel={() => this.setModalVisible(false)}
				footer={[
					<Button
						key='submit'
						disabled={this.state.selectedValue === 0}
						type='primary'
						onClick={() => this.onOkMoveDialog(false)}
					>
						确定
					</Button>,
					<Button key='back' onClick={() => this.setModalVisible(false)}>
						取消
					</Button>
				]}
			>
				{groupNameRadioGroup}
			</Modal>
		);
	}
}
export default connect(
	(state) => ({
		groups: state.templateDragData.groups,
		col: state.templateDragData.layout.col,
	}),
	{
		updateGroupList
	}
)(MyModal);
