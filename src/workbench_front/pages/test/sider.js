import React, { Component } from 'react';
import _ from 'lodash';
import { Layout, Cascader, Input, Icon, Checkbox, Button, Radio, Modal, Switch } from 'antd';
import SiderCard from './siderCard.js';
import { connect } from 'react-redux';
import {collision,layoutCheck} from './collision';
import {compactLayout} from './compact.js';
import { updateGroupList } from 'Store/test/action';
import * as utilService from './utilService';
import Ajax from 'Pub/js/ajax';
const { Sider } = Layout;
const RadioGroup = Radio.Group;

class MySider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showSearch: false,
			searchValue: '',
			appGroupArr: [],
			modalVisible: false,
			selectedValue: 0,
			isShowAll: true
		};
	}
	componentDidMount() {
		Ajax({
			url: `/nccloud/platform/appregister/queryapplazy.do`,
			success: (res) => {
				if (res) {
					let { data, success } = res.data;
					if (success && data && data.length > 0) {
						this.setState({ domainArr: data });
					}
				}
			}
		});
	}
	//搜索框文本改变
	onInputChange(e) {
		let _serachText = e.target.value;
		// console.log(_groupName);
		this.state.searchValue = _serachText;
	}
	//应用名模糊搜索
	onInputSearch() {
		Ajax({
			url: `/nccloud/platform/appregister/queryapplazy.do`,
			data: {
				search_content: this.state.searchValue,
				userid: '1111Z510000000039689'
				// search_content:'采购'
			},
			success: (res) => {
				const { data, success } = res.data;
				if (success && data && data.length > 0) {
					console.log(data);
				}
			}
		});
		console.log(this.state.searchValue, '搜索开始');
	}
	//领域模块搜索
	onCascaderChange(value) {
		let cascaderValueArr = value;
		if (cascaderValueArr.length === 1) {
			return;
		}
		const ownModuleID = cascaderValueArr[1];
		Ajax({
			url: `/nccloud/platform/appregister/queryapplazy.do`,
			data: {
				own_module: ownModuleID
				// search_content:'采购'
			},
			success: (res) => {
				const { data, success } = res.data;
				if (success && data && data.length > 0) {
					console.log(data);
					_.forEach(data, (d) => {
						d.isShow = true;
						d.checkedAll = false;
						d.indeterminate = false;
						_.forEach(d.children, (c) => {
							c.checked = false;
						});
					});
					this.setState({ appGroupArr: data, isAllShow: true });
				}
			}
		});
		console.log(value, '选择', this.state);
	}
	//切换搜索状态
	switchSearch() {
		const { showSearch } = this.state;
		this.setState({ showSearch: !showSearch });
	}
	//获取sider上方的搜索框
	getSearchDom() {
		let itemDom;
		if (this.state.showSearch) {
			itemDom = (
				<div className='sider-search'>
					<Input
						placeholder='请输入应用名称'
						style={{ width: '213px' }}
						onPressEnter={this.onInputSearch.bind(this)}
						onChange={this.onInputChange.bind(this)}
						addonAfter={
							<Icon type='search' className='search-input-icon' onClick={this.onInputSearch.bind(this)} />
						}
					/>
					<span className='switch-search-cancel' onClick={this.switchSearch.bind(this)}>
						取消
					</span>
				</div>
			);
		} else {
			itemDom = (
				<div className='sider-search'>
					<Cascader
						className='search-cascader'
						style={{ width: '213px' }}
						options={this.state.domainArr}
						onChange={(value) => {
							this.onCascaderChange(value);
						}}
						placeholder='领域-模块'
					/>
					<span className='switch-search' onClick={this.switchSearch.bind(this)}>
						<Icon type='search' />
					</span>
				</div>
			);
		}
		return itemDom;
	}
	//搜索结果
	getResultDom() {
		return this.state.appGroupArr.map((item, index) => {
			return (
				<div className='result-group-list'>
					<h4 className='result-header'>
						<Checkbox
							checked={item.checkedAll}
							indeterminate={item.indeterminate}
							onChange={(e) => {
								this.onCheckAllChange(e, index);
							}}
						/>
						<span
							className='result-header-name'
							onClick={() => {
								this.onChangeShowHide(index);
							}}
						>
							{item.label}
							{item.isShow ? <Icon type='down' /> : <Icon type='right' />}
						</span>
					</h4>
					<div className='result-app-list' style={{ display: item.isShow ? 'flex' : 'none' }}>
						{item.children.map((child, i) => {
							return (
								<div className='app-col'>
									<div className='list-item'>
										<SiderCard
											id={child.value}
											key={child.value}
											width={child.width}
											height={child.height}
											index={i}
											parentIndex={index}
											name={child.label}
											type={'new'}
											checked={child.checked}
											onChangeChecked={this.onChangeChecked}
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			);
		});
	}
	//通过组名来创建Radio
	getGroupItemNameRadio(groups) {
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
	//设置模态框显示与否
	setModalVisible(modalVisible) {
		this.setState({ modalVisible, selectedValue: 0 });
	}
	//移动到的弹出框中，组名选择
	onChangeRadio(e) {
		this.setState({ selectedValue: e.target.value });
	}
	//移动到的弹出框中，点击确认
	onOkMoveDialog(modalVisible) {
		const targetGroupID = this.state.selectedValue;
		let { appGroupArr } = this.state;
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
						gridx: 0,
						gridy: 9999
					});
					a.checked = false;
				}
			});
		});

		groups[targetGroupIndex].apps = _.concat(groups[targetGroupIndex].apps, checkedAppList);
		groups[targetGroupIndex].apps = _.uniqBy(groups[targetGroupIndex].apps, 'pk_appregister');
		//目标组内重新布局
		const firstCard = groups[targetGroupIndex].apps[0];
		const newlayout = layoutCheck(
			groups[targetGroupIndex].apps,
			firstCard,
			firstCard.pk_appregister,
			firstCard.pk_appregister
		);
		const compactedLayout = compactLayout(newlayout);
		groups[targetGroupIndex].apps = compactedLayout;

		this.props.updateGroupList(groups);
		this.setModalVisible(modalVisible);
		this.setState({ appGroupArr });
	}
	//所有结果展开/收缩显示
	allShowOrHide(value) {
		let { appGroupArr, isAllShow } = this.state;
		_.forEach(appGroupArr, (a) => {
			a.isShow = value;
		});
		this.setState({ appGroupArr, isAllShow: value });
	}
	//单个结果展开/收缩展示
	onChangeShowHide(index) {
		let { appGroupArr } = this.state;
		appGroupArr[index].isShow = !appGroupArr[index].isShow;
		this.setState({ appGroupArr });
	}
	//每组的全选与否
	onCheckAllChange = (e, index) => {
		const checked = e.target.checked;
		let { appGroupArr } = this.state;
		let selectGroup = appGroupArr[index];

		selectGroup.checkedAll = e.target.checked;
		selectGroup.indeterminate = false;
		_.forEach(selectGroup.children, (c) => {
			c.checked = checked;
		});
		this.setState({ appGroupArr });
	};
	//单个卡片的选择
	onChangeChecked = (e, groupIndex, index) => {
		const checked = e.target.checked;
		let { appGroupArr } = this.state;
		let selectGroup = appGroupArr[groupIndex];
		let child = selectGroup.children[index];
		child.checked = checked;

		let checkCount = 0;
		_.forEach(selectGroup.children, (c) => {
			if (c.checked) {
				checkCount++;
			}
		});

		selectGroup.checkedAll = checkCount === selectGroup.children.length;
		selectGroup.indeterminate = !!checkCount && checkCount < selectGroup.children.length;
		console.log(selectGroup.indeterminate);
		this.setState({ appGroupArr });
	};
	//sider中有checked的卡片
	hasChechedItem() {
		let flag = false;
		let { appGroupArr } = this.state;
		_.forEach(appGroupArr, (s) => {
			_.forEach(s.children, (c) => {
				if (c.checked) {
					flag = true;
					return false;
				}
			});
			if (flag) {
				return false;
			}
		});
		return flag;
	}
	render() {
		const contentHeight = this.props.contentHeight;
		const { groups } = this.props;
		const groupNameRadioGroup = this.getGroupItemNameRadio(groups);
		return (
			<Sider
				className='nc-workbench-home-sider'
				breakpoint='lg'
				collapsedWidth='200'
				width='300'
				style={{ height: contentHeight }}
			>
				<div className='sider-content'>
					{this.getSearchDom()}
					<div className='add-item'>
						<Switch
							checkedChildren='展开'
							checked={this.state.isAllShow}
							unCheckedChildren='收缩'
							className={this.state.appGroupArr.length === 0 ? 'cannot-add' : 'aaa'}
							onChange={this.allShowOrHide.bind(this)}
						/>,
						<Icon
							className={this.hasChechedItem() ? 'add' : 'cannot-add'}
							type='plus-circle-o'
							title='占位符'
							onClick={() => {
								this.setModalVisible(true);
							}}
						/>
					</div>
					<div className='sider-result'>{this.getResultDom()}</div>
				</div>
				<Modal
					title='添加到'
					mask={false}
					wrapClassName='vertical-center-modal'
					visible={this.state.modalVisible}
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
			</Sider>
		);
	}
}
export default connect(
	(state) => ({
		groups: state.templateDragData.groups
	}),
	{
		updateGroupList
	}
)(MySider);
