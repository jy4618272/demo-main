(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{196:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=v(a(20)),r=v(a(26)),u=v(a(25)),o=v(a(24)),i=v(a(23)),l=v(a(22)),c=a(1),d=v(c),f=(a(66),a(40)),s=(v(a(0)),a(215));a(214),v(a(209)),v(a(212));a(398);v(a(396));var p=v(a(253)),g=a(311),h=v(g);function v(e){return e&&e.__esModule?e:{default:e}}var m=(0,g.WidthProvider)(h.default),y=function(e){function t(e){(0,u.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e)),n=a.generateLayout();return a.state={layout:n},a}return(0,l.default)(t,e),(0,o.default)(t,[{key:"generateDOM",value:function(){return p.default.map(p.default.range(this.props.items),function(e){return d.default.createElement("div",{style:{background:"#CCC"},key:e},d.default.createElement("span",{className:"text"},e))})}},{key:"generateLayout",value:function(){var e=this.props;return p.default.map(new Array(e.items),function(t,a){var n=p.default.result(e,"y")||Math.ceil(4*Math.random())+1;p.default.result(e,"y")||Math.ceil(4*Math.random());return{x:2*a%12,y:Math.floor(a/6)*n,w:2,h:n,i:a.toString()}})}},{key:"onLayoutChange",value:function(e){this.props.onLayoutChange(e)}},{key:"render",value:function(){this.state.cards;return d.default.createElement("div",{className:"nc-workbench-home-page"},d.default.createElement("div",{className:"nc-workbench-home-container"},d.default.createElement(m,(0,n.default)({layout:this.state.layout,onLayoutChange:this.onLayoutChange},this.props),this.generateDOM())))}}]),t}(c.Component);y.defaultProps={className:"layout",items:20,rowHeight:30,onLayoutChange:function(){},cols:12},t.default=(0,f.connect)(function(e){return{formData:e.formData,proData:e.proData}},{changeIntlData:s.changeIntlData,saveImg:s.saveImg,clearData:s.clearData})(y)},208:function(e,t,a){},209:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(a(26)),r=f(a(25)),u=f(a(24)),o=f(a(23)),i=f(a(22)),l=a(1),c=f(l),d=f(a(0));function f(e){return e&&e.__esModule?e:{default:e}}a(208);var s=function(e){function t(){return(0,r.default)(this,t),(0,o.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.height,t=void 0===e?40:e;return c.default.createElement("div",{className:"page-scroll",style:{height:"calc(100vh - "+t+"px)"}},c.default.createElement("div",{className:"page-layout"},this.props.children))}}]),t}(l.Component);s.propTypes={children:d.default.any.isRequired},t.default=s},211:function(e,t,a){},212:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(a(26)),r=f(a(25)),u=f(a(24)),o=f(a(23)),i=f(a(22)),l=a(1),c=f(l),d=a(214);function f(e){return e&&e.__esModule?e:{default:e}}a(211);var s=[{anchor:"no1",text:"分组一"}],p=function(e){function t(e,a){(0,r.default)(this,t);var u=(0,o.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e,a));return u.createTabsLink=function(){return s.map(function(e,t){var a=e.anchor,n=e.text;return c.default.createElement("li",null,c.default.createElement(d.Link,{activeClass:"active",to:a,offset:-40,spy:!0,smooth:!0,duration:500},n))})},u}return(0,i.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return c.default.createElement("ul",{className:"n-tabs"},this.createTabsLink())}}]),t}(l.Component);t.default=p},215:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearData=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(93));t.clearData=function(){return{type:n.CLEARDATA}}},396:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=p(a(26)),r=p(a(25)),u=p(a(24)),o=p(a(23)),i=p(a(22)),l=a(1),c=p(l),d=p(a(0)),f=a(240),s=a(92);function p(e){return e&&e.__esModule?e:{default:e}}var g={hover:function(e,t,a){var n=t.getItem().index,r=e.index;if(n!==r){var u=(0,s.findDOMNode)(a).getBoundingClientRect(),o=(u.bottom-u.top)/2,i=t.getClientOffset().y-u.top;n<r&&i<o||n>r&&i>o||(e.moveCard(n,r),t.getItem().index=r)}}};var h={text:d.default.string.isRequired,isDragging:d.default.bool.isRequired,connectDragSource:d.default.func.isRequired},v=function(e){function t(){return(0,r.default)(this,t),(0,o.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.text,a=e.isDragging,n=e.connectDragSource,r=e.connectDropTarget,u=(e.index,e.height),o=e.width;return n(r(c.default.createElement("div",{class:"item"},c.default.createElement("div",{style:{width:o+"px",height:u+"px",opacity:a?.5:1,float:"left","margin-left":"10px",background:"#ccc"},className:" widget-container "},t))))}}]),t}(l.Component);v.propTypes={connectDragSource:d.default.func.isRequired,connectDropTarget:d.default.func.isRequired,index:d.default.number.isRequired,isDragging:d.default.bool.isRequired,id:d.default.any.isRequired,text:d.default.string.isRequired,moveCard:d.default.func.isRequired},v.propTypes=h,t.default=(0,f.DropTarget)("card",g,function(e,t){return{connectDropTarget:e.dropTarget()}})((0,f.DragSource)("card",{beginDrag:function(e){return{id:e.id,index:e.index}}},function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(v))},398:function(e,t,a){}}]);