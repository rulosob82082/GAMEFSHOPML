"use strict";(self.webpackChunkgameflip_market=self.webpackChunkgameflip_market||[]).push([[9454],{47552:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294);a(1055);class l extends n.Component{constructor(e,t){super(e,t),this.state=this.getState(this.props)}componentDidUpdate(e,t){JSON.stringify(e)!==JSON.stringify(this.props)&&this.setState(this.getState(this.props))}getState(e){let{mode:t,enable:a,value:n,placeholder:l,faicon:s,tag:i}=e;return{mode:t||"text",enable:a,value:n,placeholder:l,faicon:s,tag:i,editing:!1}}onChange(e){this.setState({value:e.target.value})}edit(e){e.preventDefault(),this.setState({editing:!0},(()=>{setTimeout((()=>{let e=$(this.el).find(".editing input:first");1==e.length&&e.focus()}),300)}))}remove(e){e.preventDefault(),this.props.remove()}submit(e){e.preventDefault(),this.setState({editing:!1});let{value:t}=this.state;this.props.submit(t)}cancel(){this.setState(this.getState(this.props))}render(){let{mode:e}=this.state;return"input"==e?this.renderInput():this.renderText()}renderText(){let{enable:e,value:t,placeholder:a,faicon:l,tag:s,editing:i}=this.state;if(!e&&!t)return!1;let r=n.createElement("span",{className:"value"},t||a);return"a"==s&&t&&(r=n.createElement("a",{className:"value",href:t,target:"_blank"},t)),n.createElement("div",{className:"editable-text",ref:e=>this.el=e},i?n.createElement("form",{className:"editing input-group input-group-sm",onSubmit:this.submit.bind(this)},l?n.createElement("span",{className:"input-group-prepend"},n.createElement("span",{className:"fa fa-"+l})):"",n.createElement("input",{className:"form-control",value:t,placeholder:a+"...",onChange:this.onChange.bind(this)}),n.createElement("div",{className:"input-group-append"},n.createElement("button",{className:"btn btn-outline-secondary text-success",onClick:this.submit.bind(this)},n.createElement("span",{className:"fa fa-check"})))):n.createElement("div",{className:"plain"},l?n.createElement("span",{className:"icon fa fa-"+l}):"",r,e?n.createElement("span",{className:"edit-icon fas fa-pen pointer",onClick:this.edit.bind(this)}):""))}renderInput(){let{remove:e,className:t,rows:a}=this.props,{value:l,placeholder:s,editing:i}=this.state;l||(l=""),s||(s="");let r=!!l;return n.createElement("div",{className:"editable-input"+(r?"":" has-error")+(t?" "+t:""),ref:e=>this.el=e},i?n.createElement("form",{className:"editing input-group input-group-sm",onSubmit:this.submit.bind(this)},a&&a>1?n.createElement("textarea",{className:"form-control",rows:a,placeholder:s,value:l,onChange:this.onChange.bind(this)}):n.createElement("input",{className:"form-control",type:"text",placeholder:s,value:l,onChange:this.onChange.bind(this)}),n.createElement("div",{className:"input-group-append"},n.createElement("button",{className:"btn btn-outline-secondary text-success",onClick:this.submit.bind(this)},n.createElement("span",{className:"fa fa-check"})),n.createElement("button",{className:"btn btn-outline-secondary text-danger",onClick:this.cancel.bind(this)},n.createElement("span",{className:"fas fa-times"})))):n.createElement("div",{className:"input-group input-group-sm"},a&&a>1?n.createElement("textarea",{className:"form-control",rows:a,placeholder:s,value:l,onChange:this.edit.bind(this),readOnly:!0}):n.createElement("input",{className:"form-control",type:"text",placeholder:s,value:l,onClick:this.edit.bind(this),readOnly:!0}),n.createElement("div",{className:"input-group-append"},e?n.createElement("button",{className:"btn btn-outline-secondary",onClick:this.remove.bind(this)},n.createElement("span",{className:"fa fa-trash"})):"",n.createElement("button",{className:"btn btn-outline-secondary",onClick:this.edit.bind(this)},n.createElement("span",{className:"fas fa-pen"})))))}}},24767:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(67294),l=(a(84766),a(68091)),s=(a(42741),a(46858)),i=a(92853),r=a(1055),o=a(47552),c=a(96655);class m extends n.Component{constructor(e,t){super(e,t),this.state={followings:i.Z.followings},this._onChange=this._onChange.bind(this)}componentDidMount(){i.Z.onChange(this._onChange),i.Z.fetch(),s.Z.setDocumentTitle((0,r._)("Following"))}componentWillUnmount(){i.Z.offChange(this._onChange)}_onChange(){this.setState({followings:i.Z.followings})}render(){let{followings:e}=this.state,t="";return t=s.Z.notEmpty(e)?e.map(((e,t)=>n.createElement(p,{key:t,following:e}))):n.createElement("div",{className:"alert alert-info",role:"alert"},(0,r._)("When you follow searches or profiles, you’ll see updates here and be informed when new item or listing become available."),n.createElement("br",null),n.createElement("br",null),(0,r._)("Just tap 'Follow Search' on any search or profile.")),n.createElement("div",{id:"followings",className:"screen container-lg"},n.createElement("h1",null,(0,r._)("Following")),n.createElement("div",{className:"row"},t))}}class p extends n.Component{constructor(e,t){super(e,t),this.state={size:0}}edit(e){let t=s.Z.getSearchQuery(this.props.following,36),a="shop";t.category&&(t.category==c.gav?a="play":t.category==c.Xnt&&(a="service")),s.Z.transitionTo("shop",{},t)}onResultSize(e,t){e!=this.state.size&&this.setState({size:e})}onToggleNotify(e){if(!e)return;let{following:t}=this.props,a=t.notify_me;i.Z.updateProp(e,"notify_me",!a)}onDelete(e){i.Z.deleteFollowing(e)}updateLabel(e){let{following:t}=this.props,a=t.created;i.Z.updateProp(a,"label",e)}render(){let{size:e}=this.state,t=s.Z.getSearchQuery(this.props.following,6),a=t.label||t.term||(t.owner?(0,r._)("Following Profile"):(0,r._)("Following Search")),i=s.Z.categoryName(t.category,t.platform),c=s.Z.platformName(t.category,t.platform),m=[];i&&m.push(i),c&&m.push(c),m=m.length>0?"in "+m.join(" - "):(0,r._)("Any");let p="";return e<=0?p=n.createElement("p",{className:"text-center"},(0,r._)("No results available")):e>=3*t.limit/4&&(p=n.createElement("div",{className:"text-center pager"},n.createElement("button",{className:"btn btn-primary",onClick:this.edit.bind(this)},(0,r._)("View More")))),n.createElement("div",{className:"col-12 col-md-6 mt-3 mb-3"},n.createElement("div",{className:"container-fluid following-inner"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-8"},n.createElement("h2",null,n.createElement(o.Z,{enable:!0,value:a,placeholder:"Label",submit:this.updateLabel.bind(this)})),n.createElement("p",null,m))),n.createElement("div",{className:"row mb-2"},n.createElement("div",{className:"btn-group mr-1 ml-2",role:"group","aria-label":"Notify"},n.createElement("button",{type:"button",className:"btn btn-clear",onClick:this.onToggleNotify.bind(this,t.follow_id)},t.notify_me?n.createElement("span",{className:"fas fa-check-square"}):n.createElement("span",{className:"far fa-square"})," ",(0,r._)("Notify"))),n.createElement("div",{className:"btn-group mr-1",role:"group","aria-label":"Edit"},n.createElement("button",{type:"button",className:"btn btn-clear",onClick:this.edit.bind(this)},n.createElement("span",{className:"fas fa-pen"})," ",(0,r._)("Edit"))),n.createElement("div",{className:"btn-group mr-1",role:"group","aria-label":"Unfollow"},n.createElement("button",{type:"button",className:"btn btn-clear",onClick:this.onDelete.bind(this,t.follow_id)},n.createElement("span",{className:"fa fa-trash"})," ",(0,r._)("Unfollow")))),n.createElement(l.Z,{query:t,per:2,onResult:this.onResultSize.bind(this),view:"list"}),p))}}},4942:(e,t,a)=>{function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,{Z:()=>n})}}]);