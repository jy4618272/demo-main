(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{280:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=w(a(288)),n=w(a(2)),l=w(a(37)),o=w(a(5)),u=w(a(10)),d=w(a(4)),p=w(a(6)),s=w(a(317));a(133),a(334);var i=a(1),c=w(i),f=(a(62),a(42)),m=w(a(0)),D=a(297),h=w(a(132)),y=w(a(482)),g=w(a(470)),v=w(a(454)),b=w(a(453)),k=w(a(304));function w(e){return e&&e.__esModule?e:{default:e}}a(412);var T=s.default.Header,x=(s.default.Footer,s.default.Sider),E=s.default.Content,_=[{name:"增加模块",type:"primary"},{name:"增加应用分类",type:"primary"},{name:"增加应用",type:"primary"},{name:"保存",type:"primary"},{name:"取消"},{name:"删除",type:"primary"},{name:"修改",type:"primary"}],O=function(e){function t(e){(0,o.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.handleClick=function(e){var t=void 0;switch(e){case"增加模块":a.actionType=1,a.nodeData=a.props.nodeData,a.props.parentData||a.props.setParentData(a.nodeData.moduleid),a.optype=a.props.optype;var r={systypecode:"",moduleid:"",systypename:"",orgtypecode:void 0,appscope:void 0,isaccount:!1,supportcloseaccbook:!1,resid:"",dr:0};a.props.setNodeData(r),a.props.setOpType("module"),a.props.setBillStatus({isEdit:!0,isNew:!0});break;case"增加应用分类":a.actionType=2,a.nodeData=a.props.nodeData,a.props.parentData===a.nodeData.parentcode&&a.props.setParentData(a.nodeData.moduleid),a.optype=a.props.optype;a.props.setNodeData({apptype:0,isenable:!0,code:"",name:"",app_desc:"",help_name:""}),a.props.setOpType("classify"),a.props.setBillStatus({isEdit:!0,isNew:!0});break;case"增加应用":a.actionType=3,a.nodeData=a.props.nodeData,a.props.parentData===a.nodeData.parent_id&&a.props.setParentData(a.nodeData.code),a.optype=a.props.optype;var l={code:"",name:"",orgtypecode:void 0,funtype:void 0,app_desc:"",help_name:"",isenable:!0,iscauserusable:!1,uselicense_load:!0,pk_group:"",width:1,height:1,target_path:"",apptype:1,image_src:""};a.props.setAppData({appParamVOs:[],appButtonVOs:[]}),a.props.setNodeData(l),a.props.setOpType("app"),a.props.setBillStatus({isEdit:!0,isNew:!0});break;case"保存":var o=a.props.getFromData();if(console.log(o),!o)return;var u=a.props.billStatus.isNew,d=void 0;switch(a.actionType){case 1:t=u?"/nccloud/platform/appregister/insertmodule.do":"/nccloud/platform/appregister/editmodule.do",a.props.parentData&&(o.parentcode=a.props.parentData),d=o;break;case 2:t=u?"/nccloud/platform/appregister/insertapp.do":"/nccloud/platform/appregister/editapp.do","module"===a.optype?o.parent_id=a.nodeData.moduleid:o.parent_id=a.props.parentData,d=(0,n.default)({},a.props.nodeData,o);break;case 3:t=u?"/nccloud/platform/appregister/insertapp.do":"/nccloud/platform/appregister/editapp.do",o.parent_id=a.props.parentData,d=(0,n.default)({},a.props.nodeData,o)}(0,h.default)({url:t,data:d,alert:!0,success:function(e){var t=e.data;if(t.success&&t.data){if(u){if("classify"===a.props.optype||"app"===a.props.optype){var r={moduleid:t.data.pk_appregister,parentcode:a.props.parentData,systypecode:t.data.code,systypename:t.data.name};a.props.addTreeData(r)}else a.props.addTreeData(d);a.props.setNodeData(t.data)}else{if("classify"===a.props.optype||"app"===a.props.optype){var n={moduleid:d.pk_appregister,parentcode:a.props.parentData,systypecode:d.code,systypename:d.name};a.props.updateTreeData(n)}else a.props.updateTreeData(d);a.props.setNodeData(d)}a.props.setBillStatus({isEdit:!1,isNew:!1})}}});break;case"取消":a.props.setOpType(a.optype),a.props.setNodeData(a.nodeData),a.props.setBillStatus({isEdit:!1,isNew:!1});break;case"删除":var p=void 0,s=void 0,i=a.props.nodeData,c=i.pk_appregister,f=i.code,m=i.name;switch(a.props.optype){case"module":t="/nccloud/platform/appregister/deletemodule.do",p={moduleid:a.props.nodeData.moduleid},s=a.props.nodeData;break;case"classify":case"app":t="/nccloud/platform/appregister/deleteapp.do",p={pk_appregister:a.props.nodeData.pk_appregister},s={moduleid:c,parentcode:a.props.parentData,systypecode:f,systypename:m}}(0,h.default)({url:t,data:p,success:function(e){var t=e.data;t.success&&t.data&&(a.props.delTreeData(s),a.props.setOpType(null))}}),console.log("删除 "+s);break;case"修改":switch(a.nodeData=a.props.nodeData,a.optype=a.props.optype,console.log(a.optype),a.optype){case"module":a.actionType=1;break;case"classify":a.actionType=2;break;case"app":a.actionType=3}a.props.setBillStatus({isEdit:!0,isNew:!1})}},a.creatBtn=function(e){var t=e.name,n=e.isShow,l=e.type;if(n)return c.default.createElement(r.default,{className:"margin-left-10",type:l,onClick:a.handleClick.bind(a,t)},t)},a.switchFrom=function(){switch(a.props.optype){case"module":return c.default.createElement(g.default,null);case"classify":return c.default.createElement(v.default,null);case"app":return c.default.createElement(b.default,null);default:return""}},a.setBtnsShow=function(e){var t=e.name,r=a.props,l=r.optype,o=r.parentData,u=r.billStatus,d=u.isEdit,p=u.isNew,s=!1;switch(t){case"增加模块":s=!d&&(""===l||"module"===l);break;case"增加应用分类":s=!d&&!!("module"===l&&o&&2===o.length||"classify"===l&&o&&4===o.length);break;case"增加应用":s=!d&&("classify"===l||"app"===l);break;case"保存":case"取消":s=!!d;break;case"删除":s=!p&&""!==l;break;case"修改":s=!p&&!d&&""!==l}return(0,n.default)({},e,{isShow:s})},a.state={siderHeight:"280"},a.nodeData,a.optype,a.actionType,a}return(0,p.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this;window.onresize=function(){var t=document.querySelector(".ant-layout-content").offsetHeight;e.setState({siderHeight:t})}}},{key:"render",value:function(){var e=this;return c.default.createElement(k.default,{className:"nc-workbench-appRegister"},c.default.createElement(s.default,null,c.default.createElement(T,null,_.map(function(t,a){return t=e.setBtnsShow(t),e.creatBtn(t)})),c.default.createElement(s.default,{height:"100%"},c.default.createElement(x,{width:280,height:"100%",style:{background:"#fff",width:"500px","min-height":"calc(100vh - 64px - 48px)",height:this.state.siderHeight+"px",overflowY:"auto",padding:"20px"}},c.default.createElement(y.default,null)),c.default.createElement(E,{style:{padding:"20px",minHeight:280}},this.switchFrom()))))}}]),t}(i.Component);O.PropTypes={setTreeData:m.default.func.isRequired,optype:m.default.string.isRequired,billStatus:m.default.object.isRequired,setBillStatus:m.default.object.isRequired,parentData:m.default.string.isRequired,setOpType:m.default.func.isRequired,nodeData:m.default.object.isRequired,setAppData:m.default.func.isRequired,getFromData:m.default.func.isRequired,addTreeData:m.default.func.isRequired,delTreeData:m.default.func.isRequired,updateTreeData:m.default.func.isRequired,setParentData:m.default.func.isRequired},t.default=(0,f.connect)(function(e){return{optype:e.AppRegisterData.optype,billStatus:e.AppRegisterData.billStatus,parentData:e.AppRegisterData.parentData,nodeData:e.AppRegisterData.nodeData,getFromData:e.AppRegisterData.getFromData,addTreeData:e.AppRegisterData.addTreeData,delTreeData:e.AppRegisterData.delTreeData,updateTreeData:e.AppRegisterData.updateTreeData}},{setNodeData:D.setNodeData,setBillStatus:D.setBillStatus,setOpType:D.setOpType,setAppData:D.setAppData,setParentData:D.setParentData})(O)},297:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getFromDataFunc=t.setAppData=t.setAppType=t.setParentData=t.setBillStatus=t.setOpType=t.delTreeData=t.addTreeData=t.updateTreeData=t.setNodeData=t.clearData=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(137));t.clearData=function(){return{type:r.CLEARDATA}},t.setNodeData=function(e){return{type:r.SETNODEDATA,data:e}},t.updateTreeData=function(e){return{type:r.UPDATENODEDATA,updateTreeData:e}},t.addTreeData=function(e){return{type:r.ADDNODEDATA,addTreeData:e}},t.delTreeData=function(e){return{type:r.DELNODEDATA,delTreeData:e}},t.setOpType=function(e){return{type:r.OPERATIONTYPE,optype:e}},t.setBillStatus=function(e){return{type:r.BILLSTATUS,billStatus:e}},t.setParentData=function(e){return{type:r.PARENTDATA,parentData:e}},t.setAppType=function(e){return{type:r.APPTYPE,appType:e}},t.setAppData=function(e){return{type:r.APPDATA,appData:e}},t.getFromDataFunc=function(e){return{type:r.GETFROMDATA,getFromData:e}}},302:function(e,t,a){(e.exports=a(17)(!1)).push([e.i,"#ncc .nc-workbench-layout .nc-workbench-page{margin-top:48px;height:calc(100vh - 53px);padding:10px 0 0}#ncc .nc-workbench-layout .nc-workbench-page .nc-workbench-ownpage{min-width:900px}@media screen and (min-width:1280px){#ncc .nc-workbench-layout .nc-workbench-page{padding:10px 90px 0}}@media screen and (min-width:1440px){#ncc .nc-workbench-layout .nc-workbench-page{padding:10px 120px 0}}@media screen and (min-width:1600px){#ncc .nc-workbench-layout .nc-workbench-page{padding:10px 125px 0}}",""])},303:function(e,t,a){var r=a(302);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(23)(r,n);r.locals&&(e.exports=r.locals)},304:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(a(37)),n=i(a(5)),l=i(a(10)),o=i(a(4)),u=i(a(6)),d=a(1),p=i(d),s=i(a(0));function i(e){return e&&e.__esModule?e:{default:e}}a(303);var c=function(e){function t(){return(0,n.default)(this,t),(0,o.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return p.default.createElement("div",{className:"nc-workbench-page"},p.default.createElement("div",{className:"nc-workbench-ownpage "+this.props.className},this.props.children))}}]),t}(d.Component);c.propTypes={children:s.default.any.isRequired},t.default=c},411:function(e,t,a){(e.exports=a(17)(!1)).push([e.i,"body{background-color:#f0f2f5}.nc-workbench-appRegister .ant-layout{background:#fff}.nc-workbench-appRegister>.ant-layout{border:1px solid #edecec;border-radius:4px}.nc-workbench-appRegister .ant-layout-header{height:60px;line-height:60px;padding:0 20px;background:#fff;border-bottom:1px solid #edecec;display:flex;justify-content:flex-end;align-items:center}.nc-workbench-appRegister .ant-layout-sider{border-right:1px solid #edecec}.nc-workbench-appRegister .from-card{padding:24px;background:#fbfbfb;border-radius:6px}.nc-workbench-appRegister .from-card .ant-form-item{display:flex}.nc-workbench-appRegister .from-card .ant-form-item-control-wrapper{flex:1}.nc-workbench-appRegister .ant-form-item{margin-bottom:16px}.nc-workbench-appRegister .ant-form-item-with-help{margin-bottom:0}.nc-workbench-appRegister .ant-form-explain{font-size:12px}.nc-workbench-appRegister .ant-checkbox-disabled+span{color:rgba(0,0,0,.65)}.nc-workbench-appRegister .ant-form-item-label{min-width:96px}.nc-workbench-appRegister .ant-checkbox-wrapper{margin-left:70px}",""])},412:function(e,t,a){var r=a(411);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(23)(r,n);r.locals&&(e.exports=r.locals)},452:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=E(a(451)),n=E(a(410)),l=E(a(288)),o=E(a(37)),u=E(a(5)),d=E(a(10)),p=E(a(4)),s=E(a(6)),i=E(a(2)),c=E(a(43)),f=E(a(291)),m=E(a(409));a(404),a(406),a(133),a(131),a(416);var D=a(1),h=E(D),y=a(42),g=E(a(0)),v=a(297),b=E(a(294)),k=E(a(132)),w=a(299),T=E(a(375)),x=E(a(413));function E(e){return e&&e.__esModule?e:{default:e}}var _=m.default.TabPane,O=[{name:"新增行"}],A=function(e){var t=e.editable,a=e.value,r=e.onChange;return h.default.createElement("div",null,t?h.default.createElement(f.default,{style:{margin:"-5px 0"},value:a,onChange:function(e){return r(e.target.value)}}):a)};var q=function(e){var t=e.isOver,a=e.connectDragSource,r=e.connectDropTarget,n=(e.moveRow,e.dragRow),l=e.clientOffset,o=e.sourceClientOffset,u=e.initialClientOffset,d=(0,c.default)(e,["isOver","connectDragSource","connectDropTarget","moveRow","dragRow","clientOffset","sourceClientOffset","initialClientOffset"]),p=(0,i.default)({},d.style,{cursor:"move"}),s=d.className;if(t&&u){var f=function(e,t,a,r,n){var l=(a.y-n.y)/2,o=r.y-n.y;return e<t&&o>l?"downward":e>t&&o<l?"upward":void 0}(n.index,d.index,u,l,o);"downward"===f&&(s+=" drop-over-downward"),"upward"===f&&(s+=" drop-over-upward")}return a(r(h.default.createElement("tr",(0,i.default)({},d,{className:s,style:p}))))};q=(0,w.DropTarget)("row",{drop:function(e,t){var a=t.getItem().index,r=e.index;a!==r&&(e.moveRow(a,r),t.getItem().index=r)}},function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver(),sourceClientOffset:t.getSourceClientOffset()}})((0,w.DragSource)("row",{beginDrag:function(e){return{index:e.index}}},function(e,t){return{connectDragSource:e.dragSource(),dragRow:t.getItem(),clientOffset:t.getClientOffset(),initialClientOffset:t.getInitialClientOffset()}})(q));var R=function(e){function t(e){(0,u.default)(this,t);var a=(0,p.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return a.components={body:{row:q}},a.moveRow=function(e,t){var r=a.props.appData.appButtonVOs[e],n=(0,x.default)(a.props.appData,{appButtonVOs:{$splice:[[e,1],[t,0,r]]}});n.appButtonVOs.map(function(e,t){return e.btnorder=t}),(0,k.default)({url:"/nccloud/platform/appregister/orderbuttons.do",data:n.appButtonVOs,success:function(e){var t=e.data;t.success&&t.data&&a.props.setAppData(n)}})},a.createBtns=function(){return O.map(function(e,t){return e=a.setBtnsShow(e),h.default.createElement(l.default,{onClick:function(){return a.add()},style:{"margin-left":"8px"}},e.name)})},a.setBtnsShow=function(e){var t=a.props.billStatus.isEdit;return e.isShow=!!t,e},a.createTabPane=function(){var e=a.props.appData,t=e.appButtonVOs,r=void 0===t?[]:t,l=e.appParamVOs,o=void 0===l?[]:l,u=b.default.cloneDeep(a.columnsBtn);u.push(a.operationCol);var d=[h.default.createElement(_,{tab:"按钮注册",key:"1"},h.default.createElement(n.default,{bordered:!0,pagination:!1,rowKey:"num",components:a.components,dataSource:r.map(function(e,t){return e.num=t+1,e}),onRow:function(e,t){return{index:t,moveRow:a.moveRow}},columns:u,size:"middle"}))];if(2===a.props.appType){var p=b.default.cloneDeep(a.columnsPar);p.push(a.operationCol),d.push(h.default.createElement(_,{tab:"参数注册",key:"2"},h.default.createElement(n.default,{bordered:!0,pagination:!1,rowKey:"num",dataSource:o.map(function(e,t){return e.num=t+1,e}),columns:p,size:"middle"})))}return d},a.state={activeKey:"1"},a.columnsBtn=[{title:"序号",dataIndex:"num",width:"5%"},{title:"按钮编码",dataIndex:"btncode",width:"15%",render:function(e,t){return a.renderColumns(e,t,"btncode")}},{title:"按钮名称",dataIndex:"btnname",width:"15%",render:function(e,t){return a.renderColumns(e,t,"btnname")}},{title:"pagecode",dataIndex:"pagecode",width:"10%",render:function(e,t){return a.renderColumns(e,t,"pagecode")}},{title:"按钮功能描述",dataIndex:"btndesc",width:"40%",render:function(e,t){return a.renderColumns(e,t,"btndesc")}}],a.columnsPar=[{title:"序号",dataIndex:"num",width:"5%"},{title:"参数名称",dataIndex:"paramname",width:"25%",render:function(e,t){return a.renderColumns(e,t,"paramname")}},{title:"参数值",width:"55%",dataIndex:"paramvalue",render:function(e,t){return a.renderColumns(e,t,"paramvalue")}}],a.operationCol={title:"操作",dataIndex:"operation",render:function(e,t){var n=t.editable;return h.default.createElement("div",{className:"editable-row-operations"},n?h.default.createElement("span",null,h.default.createElement("a",{className:"margin-right-5",onClick:function(){return a.save(t)}},"保存"),h.default.createElement(r.default,{title:"确定取消?",onConfirm:function(){return a.cancel(t)}},h.default.createElement("a",{className:"margin-right-5"},"取消"))):h.default.createElement("span",null,h.default.createElement("a",{className:"margin-right-5",onClick:function(){return a.edit(t)}},"编辑"),h.default.createElement(r.default,{title:"确定删除?",onConfirm:function(){return a.del(t)}},h.default.createElement("a",{className:"margin-right-5"},"删除"))))}},a.cacheData,a}return(0,s.default)(t,e),(0,d.default)(t,[{key:"renderColumns",value:function(e,t,a){var r=this;return t=b.default.cloneDeep(t),h.default.createElement(A,{editable:t.editable,value:e,onChange:function(e){return r.handleChange(e,t,a)}})}},{key:"handleChange",value:function(e,t,a){var r=this.getNewData(),n=r.filter(function(e){return t.num===e.num})[0];n&&(n[a]=e,this.setNewData(r))}},{key:"edit",value:function(e){console.log(e);var t=this.getNewData();this.cacheData=b.default.cloneDeep(t);var a=t.filter(function(t){return e.num===t.num})[0];a&&(a.editable=!0,this.setNewData(t))}},{key:"del",value:function(e){var t=this;if(e.pk_btn||e.pk_param){var a=void 0,r=void 0,n=this.state.activeKey,l=this.getNewData();"1"===n?(a="/nccloud/platform/appregister/deletebutton.do",r={pk_btn:e.pk_btn}):(a="/nccloud/platform/appregister/deleteparam.do",r={pk_param:e.pk_param}),(0,k.default)({url:a,data:r,success:function(a){var r=a.data;r.success&&r.data&&(e.pk_btn?b.default.remove(l,function(t){return e.pk_btn===t.pk_btn}):b.default.remove(l,function(t){return e.pk_param===t.pk_param}),t.setNewData(l),t.cacheData=b.default.cloneDeep(l))}})}}},{key:"save",value:function(e){var t=this,a=this.state.activeKey,r=this.getNewData(),n=void 0,l=void 0,o=r.filter(function(t){return e.num===t.num})[0];o&&(n=o.pk_btn||o.pk_param?"1"===a?"/nccloud/platform/appregister/editbutton.do":"/nccloud/platform/appregister/editparam.do":"1"===a?"/nccloud/platform/appregister/insertbutton.do":"/nccloud/platform/appregister/insertparam.do",l=(0,i.default)({},o),(0,k.default)({url:n,data:l,success:function(e){var a=e.data;a.success&&a.data&&(delete o.editable,l.pk_btn||l.pk_param?(r.map(function(e,t){return l.pk_btn===e.pk_btn||l.pk_param===e.pk_param?(0,i.default)({},e,l):e}),t.setNewData(r)):(r[r.length-1]=a.data,t.setNewData(r)),t.cacheData=b.default.cloneDeep(r))}}))}},{key:"cancel",value:function(e){var t=this.getNewData().filter(function(t){return e.num===t.num})[0];t&&(delete t.editable,this.setNewData(this.cacheData))}},{key:"add",value:function(){var e=this.state.activeKey,t=this.props.nodeData.pk_appregister,a=this.getNewData();this.cacheData=b.default.cloneDeep(a),"1"===e?a.push({editable:!0,btncode:"",btnname:"",btndesc:"",parent_id:t,isenable:!0,pagecode:""}):a.push({editable:!0,paramname:"",paramvalue:"",parentid:t}),this.setNewData(a)}},{key:"getNewData",value:function(){var e=this.state.activeKey,t=this.props.appData,a=t.appParamVOs,r=t.appButtonVOs;return"1"===e?b.default.cloneDeep(r):b.default.cloneDeep(a)}},{key:"setNewData",value:function(e){var t=this.state.activeKey,a=this.props.appData,r=a.appParamVOs,n=a.appButtonVOs;"1"===t?this.props.setAppData({appParamVOs:r,appButtonVOs:e}):this.props.setAppData({appButtonVOs:n,appParamVOs:e})}},{key:"render",value:function(){var e=this;return h.default.createElement(m.default,{onChange:function(t){e.setState({activeKey:t})},type:"card",tabBarExtraContent:this.createBtns()},this.createTabPane())}}]),t}(D.Component);R.PropTypes={appType:g.default.number.isRequired,billStatus:g.default.object.isRequired,appData:g.default.object.isRequired,setAppData:g.default.object.isRequired,nodeData:g.default.object.isRequired};var S=(0,w.DragDropContext)(T.default)(R);t.default=(0,y.connect)(function(e){return{appType:e.AppRegisterData.appType,billStatus:e.AppRegisterData.billStatus,appData:e.AppRegisterData.appData,nodeData:e.AppRegisterData.nodeData}},{setAppData:v.setAppData})(S)},453:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=k(a(329)),n=k(a(326)),l=k(a(291)),o=k(a(289)),u=k(a(37)),d=k(a(5)),p=k(a(10)),s=k(a(4)),i=k(a(6)),c=k(a(134)),f=k(a(319));a(322),a(320),a(131),a(292),a(135),a(316);var m=a(1),D=k(m),h=a(42),y=k(a(0)),g=(k(a(294)),a(297)),v=k(a(132)),b=k(a(452));function k(e){return e&&e.__esModule?e:{default:e}}var w=f.default.Item,T=c.default.Option,x=void 0;var E=function(e){function t(e,a){(0,d.default)(this,t);var r=(0,s.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e,a));return r.optionShow=function(e,t){var a=e.find(function(e){return e.value===t});if(a)return a.text},r.getOptionsData=function(e){var t=r.state.DOMDATA;(0,v.default)({url:"/nccloud/platform/appregister/queryorgtype.do",success:function(a){var n=a.data;if(n.success&&n.data){var l=n.data.rows;l=l.map(function(e,t){return{value:e.refpk,text:e.refname}}),t.map(function(t,a){return t.code===e&&(t.options=l),t}),r.setState({DOMDATA:t})}}})},r.createOption=function(e){return e.map(function(e,t){return D.default.createElement(T,{value:e.value},e.text)})},r.handleSearch=function(e){var t,a;r.props.form.setFieldsValue({querymdids:e}),t=e,a=function(e){var t=r.state.DOMDATA;e=e.map(function(e,t){return{value:e.refpk,text:e.refname+" "+e.refcode}}),t.map(function(t,a){return"querymdids"===t.code&&(t.options=e),t}),r.setState({DOMDATA:t})},x&&(clearTimeout(x),x=null),t,x=setTimeout(function(){(0,v.default)({url:"/nccloud/platform/appregister/querymdid.do",data:{search_content:t},success:function(e){var t=e.data;t.success&&t.data&&a(t.data.rows)}})},300)},r.createDom=function(e,t){var a=r.props.form.getFieldDecorator,n=r.props.billStatus.isEdit,u=e.lable,d=e.type,p=e.code,s=e.required;switch(d){case"select":return n?D.default.createElement(w,{label:u,hasFeedback:!0},a(p,{initialValue:t[p],rules:[{required:s,message:"请选择"+u}]})(D.default.createElement(c.default,{placeholder:"请选择"+u},r.createOption(e.options)))):D.default.createElement(w,{label:u},D.default.createElement("span",{className:"ant-form-text"},r.optionShow(e.options,t[p])));case"search":return n?D.default.createElement(w,{label:u,hasFeedback:!0},a(p,{initialValue:t[p],rules:[{required:s,message:e.placeholder?e.placeholder:"请选择"+u}]})(D.default.createElement(c.default,{placeholder:e.placeholder?e.placeholder:"请选择"+u,mode:"combobox",defaultActiveFirstOption:!1,showArrow:!1,filterOption:!1,onChange:r.handleSearch},r.createOption(e.options)))):D.default.createElement(w,{label:u},D.default.createElement("span",{className:"ant-form-text"},r.optionShow(e.options,t[p])));case"checkbox":return D.default.createElement(w,null,a(p,{valuePropName:"checked",initialValue:t[p]})(D.default.createElement(o.default,{disabled:!n},u)));default:return n?D.default.createElement(w,{label:u},a(p,{initialValue:t[p],rules:[{required:s,message:"请输入"+u}]})(D.default.createElement(l.default,{placeholder:"请输入"+u}))):D.default.createElement(w,{label:u},D.default.createElement("span",{className:"ant-form-text"},t[p]))}},r.getFromData=function(){var e=r.props.form,t=e.getFieldsValue,a=!1;return(0,e.validateFields)(function(e,t){e||(a=!0)}),a?t():null},r.state={DOMDATA:[{lable:"应用编码",type:"input",code:"code",required:!0},{lable:"应用名称",type:"input",code:"name",required:!0},{lable:"组织类型",type:"select",code:"orgtypecode",required:!0,options:[]},{lable:"功能点类型",type:"select",code:"funtype",required:!0,options:[{value:0,text:"业务类应用"},{value:1,text:"管理类应用"},{value:2,text:"系统类应用"},{value:3,text:"管理+业务类应用"}]},{lable:"应用描述",type:"input",code:"app_desc",required:!1},{lable:"帮助文件名",type:"input",code:"help_name",required:!1},{lable:"关联元数据ID",type:"search",code:"querymdids",required:!1,placeholder:"请输入元数据名称过滤",options:[]},{lable:"所属集团",type:"input",code:"pk_group",required:!1},{lable:"应用类型",type:"select",code:"apptype",required:!1,options:[{value:1,text:"小应用"},{value:2,text:"小部件"}]},{lable:"应用宽",type:"input",code:"width",required:!0},{lable:"应用高",type:"input",code:"height",required:!0},{lable:"是否启用",type:"checkbox",code:"isenable",required:!1},{lable:"是否CA用户可用",type:"checkbox",code:"iscauserusable",required:!1},{lable:"是否加载占用",type:"checkbox",code:"uselicense_load",required:!1},{lable:"跳转路径",type:"input",code:"target_path",required:!0,md:24,lg:24,xl:24},{lable:"图标路径",type:"input",code:"image_src",required:!0,md:24,lg:24,xl:24}]},r}return(0,i.default)(t,e),(0,p.default)(t,[{key:"getFields",value:function(e){var t=this,a=this.state.DOMDATA;if(!e.systypename){var r=[];return a.map(function(a,l){a.lable;var o=a.md,u=void 0===o?24:o,d=a.lg,p=void 0===d?12:d,s=a.xl,i=void 0===s?8:s;r.push(D.default.createElement(n.default,{md:u,lg:p,xl:i,key:l},t.createDom(a,e)))}),r}}},{key:"componentWillMount",value:function(){this.props.getFromDataFunc(this.getFromData),this.getOptionsData("orgtypecode")}},{key:"render",value:function(){return D.default.createElement("div",null,D.default.createElement(f.default,{className:"from-card"},D.default.createElement(r.default,{gutter:24},this.getFields(this.props.nodeData))),D.default.createElement("div",{style:{"margin-top":"16px",background:"#ffffff",padding:"10px","border-radius":"6px"}},D.default.createElement(b.default,null)))}}]),t}(m.Component);(E=f.default.create()(E)).PropTypes={updateTreeData:y.default.func.isRequired,nodeData:y.default.object.isRequired,billStatus:y.default.object.isRequired,setNodeData:y.default.func.isRequired,setAppData:y.default.func.isRequired,getFromDataFunc:y.default.func.isRequired},t.default=(0,h.connect)(function(e){var t=e.AppRegisterData;return{nodeData:t.nodeData,updateTreeData:t.updateTreeData,billStatus:t.billStatus}},{setNodeData:g.setNodeData,setAppData:g.setAppData,getFromDataFunc:g.getFromDataFunc})(E)},454:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=v(a(329)),n=v(a(326)),l=v(a(291)),o=v(a(289)),u=v(a(37)),d=v(a(5)),p=v(a(10)),s=v(a(4)),i=v(a(6)),c=v(a(134)),f=v(a(319));a(322),a(320),a(131),a(292),a(135),a(316);var m=a(1),D=v(m),h=a(42),y=v(a(0)),g=a(297);function v(e){return e&&e.__esModule?e:{default:e}}var b=f.default.Item,k=c.default.Option,w=[{lable:"应用编码",type:"input",code:"code",required:!0},{lable:"应用名称",type:"input",code:"name",required:!0},{lable:"应用描述",type:"input",code:"app_desc",required:!1,md:24,lg:24,xl:12},{lable:"帮助文件名",type:"input",code:"help_name",required:!1,md:24,lg:24,xl:12}],T=function(e){function t(e,a){(0,d.default)(this,t);var r=(0,s.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e,a));return r.createDom=function(e,t){var a=r.props.form.getFieldDecorator,n=r.props.billStatus.isEdit,u=e.lable,d=e.type,p=e.code,s=e.required;switch(d){case"select":return n?D.default.createElement(b,{label:u,hasFeedback:!0},a(p,{initialValue:t[p],rules:[{required:s,message:"请选择"+u}]})(D.default.createElement(c.default,{placeholder:"请选择"+u},D.default.createElement(k,{value:"0"},"全局"),D.default.createElement(k,{value:"1"},"集团")))):D.default.createElement(b,{label:u},D.default.createElement("span",{className:"ant-form-text"},t[p]));case"checkbox":return D.default.createElement(b,null,a(p,{valuePropName:"checked",initialValue:t[p]})(D.default.createElement(o.default,{disabled:!n},u)));default:return n?D.default.createElement(b,{label:u},a(p,{initialValue:t[p],rules:[{required:s,message:"请输入"+u}]})(D.default.createElement(l.default,{placeholder:"请输入"+u}))):D.default.createElement(b,{label:u},D.default.createElement("span",{className:"ant-form-text"},t[p]))}},r.getFromData=function(){var e=r.props.form,t=e.getFieldsValue,a=!1;return(0,e.validateFields)(function(e,t){e||(a=!0)}),a?t():null},r}return(0,i.default)(t,e),(0,p.default)(t,[{key:"getFields",value:function(e){var t=this,a=[];return w.map(function(r,l){r.lable;var o=r.md,u=void 0===o?24:o,d=r.lg,p=void 0===d?12:d,s=r.xl,i=void 0===s?12:s;a.push(D.default.createElement(n.default,{md:u,lg:p,xl:i,key:l},t.createDom(r,e)))}),a}},{key:"componentWillMount",value:function(){this.props.getFromDataFunc(this.getFromData)}},{key:"render",value:function(){return D.default.createElement(f.default,{className:"from-card"},D.default.createElement(r.default,{gutter:24},this.getFields(this.props.nodeData)))}}]),t}(m.Component);(T=f.default.create()(T)).PropTypes={updateTreeData:y.default.func.isRequired,nodeData:y.default.object.isRequired,billStatus:y.default.object.isRequired,getFromDataFunc:y.default.func.isRequired},t.default=(0,h.connect)(function(e){var t=e.AppRegisterData;return{nodeData:t.nodeData,updateTreeData:t.updateTreeData,billStatus:t.billStatus}},{getFromDataFunc:g.getFromDataFunc})(T)},470:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=b(a(329)),n=b(a(326)),l=b(a(291)),o=b(a(289)),u=b(a(37)),d=b(a(5)),p=b(a(10)),s=b(a(4)),i=b(a(6)),c=b(a(134)),f=b(a(319));a(322),a(320),a(131),a(292),a(135),a(316);var m=a(1),D=b(m),h=a(42),y=b(a(0)),g=a(297),v=b(a(132));function b(e){return e&&e.__esModule?e:{default:e}}var k=f.default.Item,w=c.default.Option,T=function(e){function t(e,a){(0,d.default)(this,t);var r=(0,s.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e,a));return r.getOptionsData=function(e){var t=r.state.DOMDATA;(0,v.default)({url:"/nccloud/platform/appregister/queryorgtype.do",success:function(a){var n=a.data;if(n.success&&n.data){var l=n.data.rows;l=l.map(function(e,t){return{value:e.refpk,text:e.refname}}),t.map(function(t,a){return t.code===e&&(t.options=l),t}),console.log(t),r.setState({DOMDATA:t})}}})},r.createOption=function(e){return e.map(function(e,t){return D.default.createElement(w,{value:e.value},e.text)})},r.optionShow=function(e,t){var a=e.find(function(e){return e.value===t});if(a)return a.text},r.createDom=function(e,t){var a=r.props.form.getFieldDecorator,n=r.props.billStatus.isEdit,u=e.lable,d=e.type,p=e.code,s=e.required;switch(d){case"select":return n?D.default.createElement(k,{label:u,hasFeedback:!0},a(p,{initialValue:t[p],rules:[{required:s,message:"请选择"+u}]})(D.default.createElement(c.default,{placeholder:"请选择"+u},r.createOption(e.options)))):D.default.createElement(k,{label:u},D.default.createElement("span",{className:"ant-form-text"},r.optionShow(e.options,t[p])));case"checkbox":return D.default.createElement(k,null,a(p,{valuePropName:"checked",initialValue:t[p]})(D.default.createElement(o.default,{disabled:!n},u)));default:return n?D.default.createElement(k,{label:u},a(p,{initialValue:t[p],rules:[{required:s,message:"请输入"+u}]})(D.default.createElement(l.default,{placeholder:"请输入"+u}))):D.default.createElement(k,{label:u},D.default.createElement("span",{className:"ant-form-text"},t[p]))}},r.getFromData=function(){var e=r.props.form,t=e.getFieldsValue,a=!1;return(0,e.validateFields)(function(e,t){e||(a=!0)}),a?t():null},r.state={DOMDATA:[{lable:"模块编码",type:"input",code:"systypecode",required:!0},{lable:"模块号",type:"input",code:"moduleid",required:!0},{lable:"模块名称",type:"input",code:"systypename",required:!0},{lable:"对应模块号",type:"input",code:"devmodule",required:!1},{lable:"应用范围",type:"select",code:"appscope",required:!1,options:[{value:0,text:"全局"},{value:1,text:"集团"}]},{lable:"组织类型",type:"select",code:"orgtypecode",required:!1,options:[]},{lable:"多语字段",type:"input",code:"resid",required:!1},{lable:"是否支持开关帐设置",type:"checkbox",code:"supportcloseaccbook",required:!1},{lable:"是否发送会计平台",type:"checkbox",code:"isaccount",required:!1}]},r}return(0,i.default)(t,e),(0,p.default)(t,[{key:"getFields",value:function(e){var t=this,a=[];return this.state.DOMDATA.map(function(r,l){r.lable;var o=r.md,u=void 0===o?24:o,d=r.lg,p=void 0===d?12:d,s=r.xl,i=void 0===s?8:s;a.push(D.default.createElement(n.default,{md:u,lg:p,xl:i,key:l},t.createDom(r,e)))}),a}},{key:"componentDidMount",value:function(){this.props.getFromDataFunc(this.getFromData),this.getOptionsData("orgtypecode")}},{key:"render",value:function(){return D.default.createElement(f.default,{className:"from-card"},D.default.createElement(r.default,{gutter:24},this.getFields(this.props.nodeData)))}}]),t}(m.Component);(T=f.default.create()(T)).PropTypes={updateTreeData:y.default.func.isRequired,nodeData:y.default.object.isRequired,billStatus:y.default.object.isRequired,getFromDataFunc:y.default.func.isRequired},t.default=(0,h.connect)(function(e){var t=e.AppRegisterData;return{nodeData:t.nodeData,updateTreeData:t.updateTreeData,billStatus:t.billStatus}},{getFromDataFunc:g.getFromDataFunc})(T)},482:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=y(a(139)),n=y(a(37)),l=y(a(5)),o=y(a(10)),u=y(a(4)),d=y(a(6)),p=y(a(291)),s=y(a(407));a(131),a(480);var i=a(1),c=y(i),f=a(42),m=y(a(0)),D=a(297),h=y(a(132));y(a(477));function y(e){return e&&e.__esModule?e:{default:e}}var g=s.default.TreeNode,v=p.default.Search,b=[{key:"0",systypename:"应用节点",moduleid:"",text:"应用节点",children:[]}],k=function(e){function t(e,a){(0,l.default)(this,t);var o=(0,u.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e,a));return o.reqTreeData=function(){(0,h.default)({url:"/nccloud/platform/appregister/querymodules.do",success:function(e){var t=e.data;t.success&&t.data.length>0&&o.setState({treeDataArray:t.data},o.restoreTreeData)}})},o.addTreeData=function(e){var t=o.state,a=t.treeDataArray,r=t.selectedKeys;r=[],a.push(e),r.push(e.moduleid),o.setState({treeDataArray:a,selectedKeys:r},o.restoreTreeData)},o.delTreeData=function(e){console.log(e);var t=o.state,a=t.treeDataArray,r=t.selectedKeys;r=[],a=a.filter(function(t){return t.moduleid!==e.moduleid}),console.log(a),o.setState({treeDataArray:a,selectedKeys:r},o.restoreTreeData)},o.updateNodeData=function(e){var t=o.state.treeDataArray;t=t.map(function(t,a){return t.moduleid===e.moduleid&&(t=e),t}),o.setState({treeDataArray:t},o.restoreTreeData)},o.restoreTreeData=function(){var e=o.state,t=e.treeData,a=e.treeDataArray,r=w(a),n=r.treeArray,l=r.treeObj;for(var u in l)if(l.hasOwnProperty(u)){var d=l[u];d.length>0&&(l[u]=d.map(function(e,t){return l[e.moduleid]?e.children=l[e.moduleid]:l[e.systypecode]&&(e.children=l[e.systypecode]),e}))}n=n.map(function(e,t){return l[e.moduleid]&&(e.children=l[e.moduleid]),e}),t[0].children=r.treeArray,t=T(t),o.setState({treeData:t})},o.onExpand=function(e){o.setState({expandedKeys:e,autoExpandParent:!1})},o.onChange=function(e){var t=e.target.value;o.setState({expandedKeys:expandedKeys,searchValue:t,autoExpandParent:!0})},o.onSelect=function(e,t){var a=o.state.selectedKeys;if(a=e,o.setState({selectedKeys:a}),0!==e.length)if(o.props.setBillStatus({isNew:!1,isEdit:!1}),"0"===(e=e[e.length-1]))o.props.setNodeData(""),o.props.setOpType(""),o.props.setParentData(null);else{var n=o.state.treeDataArray.find(function(t){if(t.key===e)return t});n.moduleid.length<=4?o.props.setOpType("module"):(0,h.default)({url:"/nccloud/platform/appregister/query.do",data:{pk_appregister:e},success:function(e){var t=e.data;if(t.success&&t.data){n.parentcode.length>4?o.props.setOpType("app"):o.props.setOpType("classify");var a=t.data,r=a.appRegisterVO,l=a.appButtonVOs,u=a.appParamVOs;o.props.setAppData({appButtonVOs:l,appParamVOs:u}),o.props.setNodeData(r)}}}),(n=(0,r.default)({},n)).children&&delete n.children,n.parentcode?o.props.setParentData(n.parentcode):o.props.setParentData(null),o.props.setNodeData(n),o.props.updateTreeData(o.updateNodeData)}},o.state={expandedKeys:["0"],selectedKeys:[],treeDataArray:[],treeData:[],searchValue:"",autoExpandParent:!0},o}return(0,d.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var e=this.state.treeData;e=b,this.setState({treeData:e},this.reqTreeData),this.props.addTreeData(this.addTreeData),this.props.delTreeData(this.delTreeData)}},{key:"render",value:function(){var e=this.state,t=e.expandedKeys,a=e.searchValue,r=e.autoExpandParent,n=e.selectedKeys,l=e.treeData;return c.default.createElement("div",null,c.default.createElement(v,{style:{marginBottom:8},placeholder:"Search",onChange:this.onChange}),l.length>0&&l[0].children.length>0&&c.default.createElement(s.default,{showLine:!0,onExpand:this.onExpand,expandedKeys:t,onSelect:this.onSelect,autoExpandParent:r,selectedKeys:n},function e(t){return t.map(function(t){var r=t.text,n=t.key,l=t.children,o=r.indexOf(a),u=r.substr(0,o),d=r.substr(o+a.length),p=o>-1?c.default.createElement("span",null,u,c.default.createElement("span",{style:{color:"#f50"}},a),d):c.default.createElement("div",null,c.default.createElement("span",null,r));return l?c.default.createElement(g,{key:n,title:p},e(l)):c.default.createElement(g,{key:n,title:p})})}(l)))}}]),t}(i.Component),w=function(e){var t=[],a={};return e.map(function(e,r){var n=e.parentcode,l=e.moduleid,o=e.systypename,u=e.systypecode;l.length>4?e.text=u+" "+o:e.text=l+" "+o,e.key=l,n?(a[n]||(a[n]=[]),a[n].push(e)):(e.children=[],t.push(e))}),{treeArray:t,treeObj:a}},T=function e(t){return t.map(function(t,a){return(t=(0,r.default)({},t)).children?(t.isLeaf=!1,t.children=e(t.children)):t.isLeaf=!0,t})};k.PropTypes={setNodeData:m.default.func.isRequired,updateTreeData:m.default.func.isRequired,setOpType:m.default.func.isRequired,setBillStatus:m.default.func.isRequired,setParentData:m.default.func.isRequired,setAppData:m.default.func.isRequired,addTreeData:m.default.func.isRequired,delTreeData:m.default.func.isRequired},t.default=(0,f.connect)(function(e){return{}},{setNodeData:D.setNodeData,updateTreeData:D.updateTreeData,setOpType:D.setOpType,setBillStatus:D.setBillStatus,setParentData:D.setParentData,setAppData:D.setAppData,addTreeData:D.addTreeData,delTreeData:D.delTreeData})(k)}}]);