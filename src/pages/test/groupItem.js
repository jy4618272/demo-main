import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'
import Card from './card.js'
import _ from 'lodash';
import { Row, Col ,Icon,Input,Button } from 'antd';
const groupItemSource ={
    beginDrag(props, monitor, component) {
        // console.log(props);
        // console.log("asads");
		return {
			id: props.id,
            index: props.index,
            type: props.type
		}
    }
}

const groupItemTarget ={
    hover(props, monitor, component){
        // console.log(props);
        // console.log(121321231313131);
        const dragItem = monitor.getItem();
        // console.log(dragItem);
        // console.log(props);

        if(dragItem.type !== props.type){
            return;
        }
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        if (dragIndex === hoverIndex){
            return;
        }

        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()

        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

        const clientOffset = monitor.getClientOffset()

        const hoverClientY = clientOffset.y - hoverBoundingRect.top

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return
        }
        
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return
        }
        
        props.moveGroupItem(dragIndex, hoverIndex);

        monitor.getItem().index = hoverIndex;
    },
    drop(props, monitor, component){
        const dragItem = monitor.getItem();
        const dropItem = props;
        // console.log(dragItem);
        // console.log(dropItem);
        props.onDrop(dragItem , dropItem);
    }
}

function collectSource(connect,monitor){
	return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
	} 
}

function collectTarget(connect, monitor){
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
	}
}

class GroupItem extends Component {
    constructor(props) {
		super(props)
		this.state = {
            forbidDrag: false,
            groupName:""
		}
	}
	createCards(cards){
		let itemDoms = [];
	   _.forEach(cards,(c)=>{
		itemDoms.push(
			<Card  GridX={c.GridX} type={c.type} GridY={c.GridY} w={c.w} h={c.h} id={c.pk_appregister} key={c.pk_appregister} deleteCard={this.props.deleteCard} forbidDrag={this.state.forbidDrag}/>
		);
	   });
	   return itemDoms;
	}
    
    changeGroupItemName(newGroupItemName,groupID){
        // this.props.changeGroupItemName(newGroupItemName,groupID);
    }

    // editGroupItemName(groupID){
    //     this.props.editGroupItemName(groupID);
    // }

    // deleteGroupItem(groupID){
    //     this.props.deleteGroupItem(groupID);
    // }

    // deleteCard(cardID){
    //     this.props.deleteCard(cardID);
    // }

    editGroupName = (e) =>{
        let _groupName = e.target.value;
        console.log(_groupName);
        this.state.groupName = _groupName;
    }

    render() {
    const {isDragging,connectDragSource,connectDropTarget, groupname, id,cards, isOver, currEditID} = this.props;
    const {changeGroupItemName} = this.props;
    const opacity = isDragging ? 0 : 1;
    let groupItemTitle;
    if(currEditID === id){
        groupItemTitle = (
            <Row className="group-item-title-container-edit">
                <Col span={4}>
                    <div className="group-item-title-left">
                    <Input  size="small" placeholder="Basic usage" defaultValue = {groupname} onChange={this.editGroupName.bind(this)} />
                    <Icon type="check-square-o" className="group-item-icon" title="占位符" onClick={()=>{this.props.changeGroupName(id,this.state.groupName)}} />
                    <Icon type="close-square-o" className="group-item-icon" title="占位符" onClick={()=>{this.props.cancelGroupName()}}  />
                    </div>
                    
                </Col>
            </Row>
        );
    }else{
        groupItemTitle = (<Row className="group-item-title-container-no-edit">
            <Col span={2} className="group-item-title-left">
            <div><span>{groupname}</span>
            </div>
            </Col>
            <Col span={3} className="group-item-title-right" offset={19}>
            {/* <div style={{ display: 'inline-table' }}><i onClick={()=>{this.changeGroupItemName.bind(this)(id)}} style={{ 'margin-right': 23 ,cursor: 'pointer'}}>Edit</i></div> */}
            <div className="group-item-title-edit" ><Icon type="edit" title="占位符" className="group-item-icon" onClick={()=>{this.props.editGroupItemName(id)}} /></div>
            <div  className="group-item-title-edit"><Icon type="close-square-o"  title="占位符"  className="group-item-icon" onClick={()=>{this.props.deleteGroupItem(id)}} /></div>
            <div className="group-item-title-edit" ><Icon type="plus-square-o"  title="占位符"  className="group-item-icon" onClick={()=>{}}/></div>
            <div  className="group-item-title-edit"><Icon type="ellipsis"  title="占位符"  className="group-item-icon" onClick={()=>{}} /></div>
            </Col>
        </Row>);
    }
    
        return connectDragSource(connectDropTarget(
            <div className="group-item">
                <div className="group-item-container" style={{background: isOver ? '#000' : '#ccc' }}>
                    {groupItemTitle}
                    <section style={{ height: 380, opacity: opacity }}>
                        {this.createCards(this.props.cards)}
                    </section>
                </div>

                <div>
                    <Button className='group-item-add' onClick={()=>{this.props.addGroupItem(id)}}> + 添加分组</Button>
                </div>
            </div>
            ))
    }
}

export default DropTarget('item',groupItemTarget,collectTarget)(DragSource('item',groupItemSource,collectSource)(GroupItem));