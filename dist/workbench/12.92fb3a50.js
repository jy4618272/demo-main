(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{621:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=v(a(85)),r=v(a(6)),i=v(a(15)),o=v(a(4)),c=v(a(7)),l=a(1),s=v(l),u=(a(126),a(94)),p=v(a(0)),d=a(693),f=v(a(952)),m=v(a(259)),h=a(652),g=v(a(687));function v(e){return e&&e.__esModule?e:{default:e}}a(940);var b=175,x=function(e){function t(e){(0,r.default)(this,t);var a=(0,o.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.createScript=function(){var e=a.state.paths,t=document.getElementsByTagName("script"),n=Array.prototype.slice.call(t,0),r=document.getElementsByTagName("body")[0];n=n.map(function(e){if(e.attributes.src)return e.attributes.src.value}),e.map(function(e,a){var i=e.path;if("2"===e.apptype){var o=i,c=n.find(function(e){return e===o});if(void 0===c){var l=document.createElement("script");l.type="text/javascript",l.src=i,r.appendChild(l)}else for(var s=0;s<t.length;s++){var u=t[s];if(u.attributes.src&&u.attributes.src.value===c){r.removeChild(u);var p=document.createElement("script");p.type="text/javascript",p.src=c,r.appendChild(p)}}}})},a.createApp=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=e.image_src,i=e.name,o=e.mountid;e.target_path,e.pk_appregister;return s.default.createElement("div",{className:"grid-item",id:o,style:{width:t,height:a},onClick:function(){window.openNew(e,n?"own":void 0)}},s.default.createElement("div",{className:"app-item"},s.default.createElement("span",{className:"title"},i),s.default.createElement("div",{className:"app-content"},s.default.createElement("div",{className:"icon",style:{background:"url("+r+") no-repeat 0px 0px","background-size":"contain"}}))))},a.createWidgetMountPoint=function(e){return e.map(function(e,t){if(e){var n=e.apptype,r=e.width,i=e.height,o=e.name,c=Number(r)*b+12*(Number(r)-1),l=Number(i)*b+10*(Number(i)-1);switch(Number(n)){case 1:return"应用注册"===o?a.createApp(e,c,l,!0):a.createApp(e,c,l)}}})},a.state={paths:[]},a}return(0,c.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.paths;(0,m.default)({url:"/nccloud/platform/appregister/query.do",success:function(t){if(t){var a=t.data,n=a.data,r=a.success;if(r&&n&&n.length>0){e.setState({paths:n},e.createScript);for(var i=document.querySelectorAll(".grid"),o=0;o<i.length;o++){var c=i[o];new f.default(c,{itemSelector:".grid-item",columnWidth:177,gutter:10})}}}}})}},{key:"render",value:function(){var e=this.state.paths;return s.default.createElement("div",{className:"nc-workbench-home-page"},s.default.createElement(g.default,null),s.default.createElement("div",{className:"nc-workbench-home-container"},s.default.createElement(h.Element,{name:"no1",className:"n-col padding-left-70 padding-right-60"},s.default.createElement("div",{className:"title"},"分组一"),s.default.createElement("div",{class:"grid"},e.length>0?this.createWidgetMountPoint(e.map(function(e){return e})):s.default.createElement("div",{className:"grid-item app-item widget-container",style:{width:b+"px",height:b+"px"}},s.default.createElement("div",{className:"app-item"},s.default.createElement("span",{className:"icon"},"loa"),s.default.createElement("span",{className:"title"},"loading")))))))}}]),t}(l.Component);x.PropTypes={formData:p.default.object.isRequired,changeIntlData:p.default.func.isRequired,saveImg:p.default.func.isRequired,clearData:p.default.func.isRequired},t.default=(0,u.connect)(function(e){return{formData:e.formData,proData:e.proData}},{changeIntlData:d.changeIntlData,saveImg:d.saveImg,clearData:d.clearData})(x)},685:function(e,t,a){(e.exports=a(45)(!1)).push([e.i,'.n-tabs{justify-content:flex-start;height:40px;width:100%;padding:0 50px;position:fixed;top:48px;left:0;z-index:1;background-color:#f6f6f4}.n-tabs,.n-tabs li{display:flex;align-items:center}.n-tabs li{height:100%;margin-right:10px}.n-tabs li a{cursor:pointer}.n-tabs li .active{width:100%;height:100%;display:flex;align-items:center;color:#ee5c48!important;position:relative}.n-tabs li .active:after{content:"";width:50%;height:2px;background:#ee5c48;position:absolute;left:0;bottom:0;-webkit-transform:translate(50%);transform:translate(50%)}',""])},686:function(e,t,a){var n=a(685);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(49)(n,r);n.locals&&(e.exports=n.locals)},687:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=p(a(85)),r=p(a(6)),i=p(a(15)),o=p(a(4)),c=p(a(7)),l=a(1),s=p(l),u=a(652);function p(e){return e&&e.__esModule?e:{default:e}}a(686);var d=[{anchor:"no1",text:"分组一"}],f=function(e){function t(e,a){(0,r.default)(this,t);var i=(0,o.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e,a));return i.createTabsLink=function(){return d.map(function(e,t){var a=e.anchor,n=e.text;return s.default.createElement("li",null,s.default.createElement(u.Link,{activeClass:"active",to:a,offset:-40,spy:!0,smooth:!0,duration:500},n))})},i}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return s.default.createElement("ul",{className:"n-tabs"},this.createTabsLink())}}]),t}(l.Component);t.default=f},693:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearData=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(263));t.clearData=function(){return{type:n.CLEARDATA}}},939:function(e,t,a){(e.exports=a(45)(!1)).push([e.i,".nc-workbench-home-page{margin-top:40px}.nc-workbench-home-container .title{font-size:1rem;height:40px;line-height:40px}.nc-workbench-home-container .widget-container{display:flex;align-items:center;justify-content:space-around}.nc-workbench-home-container .text{font-size:24px;text-align:center;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;height:24px}.nc-workbench-home-container .grid{margin-top:10px;display:flex;flex-wrap:wrap}.nc-workbench-home-container .grid-item{margin-top:10px;background:#fff}.nc-workbench-home-container .app-item{width:100%;height:100%;position:relative;overflow:hidden;transition:all .3s ease-in-out;box-shadow:1px 1px 2px rgba(0,0,0,.2);border:1px solid #ccc;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer}.nc-workbench-home-container .app-item .app-content{padding-right:10px;display:flex;justify-content:flex-end}.nc-workbench-home-container .app-item .icon{width:100px;height:100px}.nc-workbench-home-container .app-item .title{font-size:16px;line-height:32px;padding-left:10px;transition:all .1s linear;color:#474d54}.nc-workbench-home-container .app-item:hover{background:#fff;box-shadow:none}.nc-workbench-home-container .app-item:hover .title{color:#afa379}",""])},940:function(e,t,a){var n=a(939);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(49)(n,r);n.locals&&(e.exports=n.locals)}}]);