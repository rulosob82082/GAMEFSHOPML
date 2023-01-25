"use strict";(self.webpackChunkgameflip_market=self.webpackChunkgameflip_market||[]).push([[5531],{24500:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(67294),l=a(84766),r=a(46858),i=a(95835);class n extends s.Component{constructor(e,t){super(e,t),this.state={active:0},this.onNavigate=this.onNavigate.bind(this),this.startCarousel=this.startCarousel.bind(this),this.stopCarousel=this.stopCarousel.bind(this)}componentDidMount(){this.startCarousel()}componentWillUnmount(){this.stopCarousel()}startCarousel(){l.Log.debug("Start carousel"),this._pollTimeout&&this.stopCarousel(),this.onNavigate(this.state.active)}stopCarousel(){l.Log.debug("Stop carousel"),this._pollTimeout&&(clearTimeout(this._pollTimeout),this._pollTimeout=null)}onNavigate(e,t){t&&t.preventDefault();let{interval:a,slides:s}=this.props,l=a?parseInt(a):5e3;l=s&&s.length&&e<s.length&&e>=0&&s[e]&&s[e].delay?s[e].delay:l,(isNaN(l)||l<=3e3)&&(l=5e3);let r=this.props.slides||[];r.length<=1||(e<0&&(e=r.length-1),e>=r.length&&(e=0),this.setState({active:e},(()=>{this.stopCarousel(),this._pollTimeout=setTimeout((()=>{this.onNavigate(this.state.active+1)}),l)})))}onAction(e){e.action&&"function"==typeof e.action&&e.action()}render(){let e=this.props.id?this.props.id:"banner-carousel",t=this.props.slides,a=Boolean(this.props.show_control)||!0,n=Boolean(this.props.show_indicator)||!0,c=this.state.active,o=t[c];o||(c=0,o=t[0]);let m=a&&t.length>1?s.createElement("a",{className:"carousel-control-prev",onClick:this.onNavigate.bind(this,c-1),role:"button","data-slide":"prev"},s.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),s.createElement("span",{className:"sr-only"},"Previous")):"",p=a&&t.length>1?s.createElement("a",{className:"carousel-control-next",onClick:this.onNavigate.bind(this,c+1),role:"button","data-slide":"next"},s.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),s.createElement("span",{className:"sr-only"},"Next")):"",d=n&&t.length>1?s.createElement("ol",{className:"carousel-indicators d-none d-md-flex"},t.map(((e,t)=>s.createElement("li",{key:t,onClick:this.onNavigate.bind(this,t),className:t==c?"active":0})))):"",u=[];t.length&&t[0].image?u=t.map(((e,t)=>{let a=t==c?{opacity:1,transition:"opacity 500ms ease-in",zIndex:1}:{opacity:0,transition:"opacity 500ms ease-in"},{background:i}=e,n={backgroundImage:"url("+e.image+")"},o=e.textStyle||{},m=s.createElement("div",{className:"gf-banner-home-image",style:n},s.createElement("div",{className:e.containerClass||"container pt-5 pb-5"},e.label?s.createElement("div",{className:"row col-12 col-lg-6"},s.createElement("h2",{style:o},r.Z.replaceLineBreak(e.label))):"",e.description?s.createElement("div",{className:"row col-12 col-lg-6"},s.createElement("p",{className:"mt-3",style:o},r.Z.replaceLineBreak(e.description))):"",e.button?s.createElement("div",{className:"row col-12 col-lg-6"},s.createElement("button",{className:"mt-3 btn btn-primary"},e.button)):""));if("welcome"===e.id&&(m=s.createElement("div",{className:"gf-banner-home-image d-flex flex-column justify-content-center",style:n},s.createElement("div",{className:"container py-4 text-center text-uppercase gf-text-c"},s.createElement("div",{className:"pt-2 gf-text-header-boldest"},r.Z.replaceLineBreak(e.label)),s.createElement("div",{className:"pt-2 gf-text-normal-2 gf-lineheight-140"},r.Z.replaceLineBreak(e.description))))),e.url){let r="https://gameflip.com",i=0==e.url.indexOf(r);return 0!=e.url.indexOf("http")||i?s.createElement(l.Link,{key:t,className:"item gf-banner-home-slide",style:a,to:i?e.url.replace(r,""):e.url},m):s.createElement("a",{key:t,className:"item gf-banner-home-slide",style:a,target:"_blank",rel:"noreferrer",href:e.url},m)}return s.createElement("div",{key:t,className:"item gf-banner-home-slide",style:a},m)})):t.length>0&&t.map(((e,t)=>{let a=t==c?{opacity:1,transition:"opacity 500ms ease-in"}:{opacity:0,transition:"opacity 500ms ease-in"};t==c?u.push(s.createElement(i.Z,{className:"item"+(e.action?" pointer":""),src:e.img,key:t,onClick:this.onAction.bind(this,o),alt:o.alt?o.alt:"Banner",style:a,sources:e.sources,aspectRatio:e.imgAspectRatio||0})):u.push(s.createElement(i.Z,{className:"item",key:t,src:e.img,alt:e.alt?e.alt:"Banner",style:a,sources:e.sources,aspectRatio:e.imgAspectRatio||0}))}));let h=o.background?{background:o.background}:{};return s.createElement("div",{id:e,role:"navigation",className:"container-fluid carousel-slide",style:h,onMouseEnter:this.stopCarousel.bind(this),onMouseLeave:this.startCarousel.bind(this)},s.createElement("div",{className:"carousel-slide-inner",role:"listbox"},u),d,m,p)}}},85531:(e,t,a)=>{a.d(t,{Z:()=>d});var s=a(67294),l=a(50361),r=a.n(l),i=a(46858),n=a(84766),c=a(95835),o=a(15132),m=a(24500),p=a(1055);class d extends s.Component{render(){let{section:e,background:t}=this.props;return i.Z.isMobile&&!i.Z.browser().tablet?s.createElement(g,{section:e,background:t}):s.createElement(h,{section:e,background:t})}}class u extends s.Component{linkQuery(e){let t=i.Z.clone(e),a=(e,a)=>{a.map(((a,s)=>{0==s?t[e]=a:t[e]+=","+a}))};return e.platform&&Array.isArray(e.platform)&&a("platform",e.platform),e.price&&Array.isArray(e.price)&&a("price",e.price),e.upc&&Array.isArray(e.upc)&&a("upc",e.upc),t}linkDest(e){let t="shop";if(e){let a=e.category||"",s=e.kind||"item";"BOOSTING"==a?t="play":"gig"==s&&(t="service")}return t}render(){let{item:e,className:t,image_ratio:a,image_border:l,textClassName:r}=this.props,o="";if(e.image?o=s.createElement(c.Z,{className:"img-fluid"+(l?" border":""),src:e.image,aspectRatio:a||null}):e.symbol?o=s.createElement("span",{className:e.symbol}):e.text&&(o="string"==typeof e.text?s.createElement("p",null,e.text):e.text),e.search&&!i.Z.isEmpty(e.search))return s.createElement(n.Link,{className:t,to:this.linkDest(e.search),query:this.linkQuery(e.search)},o);if(e.url)return 0==e.url.indexOf("http")?s.createElement("a",{className:t,target:"_blank",rel:"noreferrer",href:e.url},o):s.createElement(n.Link,{className:t,to:e.url},o);if(e.screen){let a=e.screen.name;return e.screen.collection_id&&(a+="/"+e.screen.collection_id),s.createElement(n.Link,{className:t,to:a},o)}return e.items?s.createElement("div",{className:t},o):o}}class h extends s.Component{render(){let{section:e,background:t}=this.props,a="",l=e.action?r()(e.action):null,c=e.action?r()(e.action):null;if(l&&(l.symbol="text-dark fas fa-arrow-right"),c&&(c.text=s.createElement("div",{className:"text-dark h6"},c.text," ",s.createElement("span",{className:"fas fa-angle-right"}))),"banner"==e.view){let{id:t,background:l,slides:r}=e.desktop||{};e.label.indexOf((0,p._)("Welcome to Gameflip")),e.label,(0,p._)("NBA Top Shot"),a=e.items.map(((t,a)=>{if(r&&r.length)return s.createElement(m.Z,{key:a,slides:r});let c=l?{background:l}:{},o={backgroundImage:"url("+t.image+")"},p=s.createElement("div",{key:a,className:"gf-banner-home",style:c},s.createElement("div",{className:"gf-banner-home-image",style:o},s.createElement("div",{className:"container pt-5 pb-5"},e.label?s.createElement("div",{className:"row col-12 col-lg-6"},s.createElement("h2",null,i.Z.replaceLineBreak(e.label))):"",e.description?s.createElement("div",{className:"row col-12 col-lg-6"},s.createElement("p",{className:"mt-3"},i.Z.replaceLineBreak(e.description))):"",t.button?s.createElement("div",{className:"row col-12 col-lg-6"},s.createElement("button",{className:"mt-3 btn btn-primary"},t.button)):"")));if(t.url){let e="https://gameflip.com",l=0==t.url.indexOf(e);return 0!=t.url.indexOf("http")||l?s.createElement(n.Link,{key:a,to:l?t.url.replace(e,""):t.url},p):s.createElement("a",{key:a,target:"_blank",rel:"noreferrer",href:t.url},p)}return p}))}else if("grid"==e.view||"list"==e.view){let t=e.label==(0,p._)("Popular Categories")||e.label==(0,p._)("Blockchain Collections"),l=e.items.map(((a,l)=>{if(e.max_items&&l>=e.max_items)return null;let r=t?"m-2":"m-3",i=t?"254px":"200px";return s.createElement("div",{className:"shop-featured-button "+r,key:l,style:{minWidth:i,position:"relative"}},s.createElement(u,{item:a,image_ratio:e.image_ratio}),a.text?s.createElement("p",{className:"font-weight-bold text-center pt-2",style:{maxWidth:i}},a.text):"",a.description?s.createElement("p",null,a.description):"",a.badge?s.createElement("div",{className:"listing-detail"},s.createElement("span",{className:"badge listing-discount",style:{top:"-5%",backgroundColor:a.badge.bgcolor||"#468847"}},a.badge.text)):"")}));a=s.createElement("div",{className:"row d-flex justify-content-center"},l)}else if("side-scroll"==e.view){let t=e.items.map(((e,t)=>{let a=i.Z.clone(e);if(a.query=a.search,a.to="shop",a.query.price&&Array.isArray(a.query.price)&&!i.Z.isEmpty(a.query.price)){let e=a.query.price[0]+(a.query.price[1]?","+a.query.price[1]:"");a.query.price=e}return a}));a=s.createElement(o.Z,{className:"mb-3",items:t})}let d="";return e.hide&&e.hide.includes("web")||(d="banner"==e.view?s.createElement("div",{className:"container-fluid p-0"},a):s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col-12 pb-2 mt-4 d-flex gf-header"},s.createElement("span",{className:"pb-3"},i.Z.replaceLineBreak(e.label)),l?s.createElement(u,{className:"ml-auto p-1",item:l}):"")),a,s.createElement("div",{className:"row"},e.description?s.createElement("p",{className:"col-12 pt-3 pb-3 text-center home-description"},i.Z.replaceLineBreak(e.description)):"",c?s.createElement("div",{className:"col-12 pb-3 text-center"},s.createElement(u,{className:"foo",item:c})):""))),s.createElement("div",{className:t||void 0},d)}}class g extends s.Component{render(){let{section:e}=this.props,t="";if(e.hide&&e.hide.includes("web"))return s.createElement("div",null);if("banner"==e.view)t=e.items.map(((t,a)=>s.createElement("div",{className:"row mb-3",key:a},s.createElement("div",{style:{width:"100%",position:"relative"}},s.createElement(u,{item:t,image_ratio:e.image_ratio})))));else if("list"==e.view)t=e.items.map(((t,a)=>s.createElement("div",{className:"row mb-3",key:a},s.createElement("div",{className:"col-4"},s.createElement(u,{item:t,image_ratio:e.image_ratio}),t.badge?s.createElement("div",{className:"listing-detail"},s.createElement("span",{className:"badge listing-discount",style:{top:"-5%",backgroundColor:t.badge.bgcolor||"#468847"}},t.badge.text)):""),s.createElement("div",{className:"col-8"},t.text?s.createElement("h4",{className:"font-weight-bold"},t.text):"",t.description?s.createElement("p",null,t.description):""))));else if("grid"==e.view){let a=e.items.map(((t,a)=>e.max_items&&a>=e.max_items?null:s.createElement("div",{className:"col-6 mb-3",key:a},s.createElement(u,{item:t,image_ratio:e.image_ratio,image_border:!0}),t.text?s.createElement("h4",{className:"font-weight-bold text-center pt-2"},t.text):"",t.description?s.createElement("p",null,t.description):"",t.badge?s.createElement("div",{className:"listing-detail"},s.createElement("span",{className:"badge listing-discount",style:{top:"-5%",backgroundColor:t.badge.bgcolor||"#468847"}},t.badge.text)):"")));t=s.createElement("div",{className:"row"},a)}else if("side-scroll"==e.view){let a=e.items.map(((e,t)=>{let a=i.Z.clone(e);if(a.query=a.search,a.to="shop",a.query.price&&Array.isArray(a.query.price)&&!i.Z.isEmpty(a.query.price)){let e=a.query.price[0]+(a.query.price[1]?","+a.query.price[1]:"");a.query.price=e}return a}));t=s.createElement(o.Z,{className:"mb-3",items:a})}else"video"==e.view?t=e.items.map(((t,a)=>{let l=t.description;return l.length>100&&(l=t.description.substring(0,100)+"..."),s.createElement("div",{className:"row no-gutters mb-3",key:a},s.createElement("div",{className:"col-5"},s.createElement(u,{item:t,image_ratio:e.image_ratio})),s.createElement("div",{className:"col-7 pl-2"},t.text?s.createElement("div",{className:"font-weight-bold mb-1"},t.text):"",t.description?s.createElement("small",null,l):""))})):n.Log.debug(e,">>> Unknown view");let a=e.action?r()(e.action):null;a&&(a.symbol="text-dark fas fa-arrow-right");let l=-1!==e.label.indexOf((0,p._)("Welcome to Gameflip"));return s.createElement("div",{className:"container-fluid mt-3 bg-white "+(l?"text-uppercase":"")},s.createElement("div",{className:"row"},s.createElement("h2",{className:"col-12 border-bottom pb-2 d-flex"},s.createElement("span",{className:"p-1"},i.Z.replaceLineBreak(e.label)),a?s.createElement(u,{className:"ml-auto p-1",item:a}):""),e.description?s.createElement("p",{className:"col-12"},i.Z.replaceLineBreak(e.description)):""),t,e.action?s.createElement("div",{className:"row"},s.createElement(u,{className:"col-12 pb-2",item:e.action})):"")}}},95835:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(87462),l=a(67294),r=a(45697),i=a.n(r),n=a(47675),c=a(46858);class o extends l.Component{constructor(e,t){super(e,t),this.state={src:""},this.setDisplayImage=this.setDisplayImage.bind(this)}componentDidMount(){let{src:e,placeholder:t}=this.props;t&&this.setDisplayImage(e,t)}componentDidUpdate(e,t){e.src!==this.props.src&&this.props.placeholder&&this.setDisplayImage(this.props.src,this.props.placeholder)}componentWillUnmount(){this.unmounted=!0}setDisplayImage(e,t){let a=new Image;e&&e.includes("https://ipfs")&&(e=n.Z.config.server_url+"/api/util/image/"+encodeURIComponent(e)),a.onerror=()=>{this.unmounted||this.setState({src:t},(()=>{this.props.onError&&this.props.onError(e)}))},a.onload=()=>{this.unmounted||this.setState({src:e},(()=>{this.props.onLoad&&this.props.onLoad(e)}))},a.src=e}imgUrl(e,t,a){return-1!==e.indexOf("gameflipusercontent.fingershock.com")?e+="/"+t+"x"+t+a:e.match(/gameflip.fingershock.com\/api\/v1\/listing\/.+\/photo\/cover_photo/)&&(e+="?format="+t+"x"+t+a),e}render(){let{className:e,alt:t,dim:a,onClick:r,onContextMenu:i,aspectRatio:o,loading:m,style:p,schema:d}=this.props,{src:u}=this.state,h="";u||(u=this.props.src),u&&u.includes("https://ipfs")&&(u=n.Z.config.server_url+"/api/util/image/"+encodeURIComponent(u));let g=[{type:"image/webp",ext:".webp"},{type:"image/jpeg",ext:".jpg"}],b=[];if(a&&u&&(-1!==u.indexOf("gameflipusercontent.fingershock.com")||-1!==u.indexOf("gameflip.fingershock.com"))?g.map(((e,t)=>{let s=this.imgUrl(u,a,e.ext);b.push(l.createElement("source",{key:a+t,type:e.type,srcSet:s})),h||"image/jpeg"!=e.type||(h=s)})):this.props.sources&&Array.isArray(this.props.sources)&&g.map(((e,t)=>{this.props.sources.map(((a,s)=>{a.endsWith(e.ext)&&(b.push(l.createElement("source",{key:t,type:e.type,srcSet:a})),h||"image/jpeg"!=e.type||(h=a))}))})),!u)return!1;h||(h=u),m&&"lazy"!=m&&"eager"!=m&&(m="");let E={};e&&(E.className=e),m&&(E.loading=m),t&&(E.alt=t),d&&(E.itemProp="image");let y=l.createElement("img",(0,s.Z)({},E,{src:h,onClick:r||null,onContextMenu:i||null,style:p||null})),N=c.Z.isSafari?y:l.createElement("picture",null," ",b," ",y," ");return o?l.createElement("div",{style:{"--aspect-ratio":o}},N):N}}o.propTypes={src:i().string.isRequired,onLoad:i().func,onError:i().func}},15132:(e,t,a)=>{a.d(t,{Z:()=>i});var s=a(67294),l=a(84766),r=a(46858);class i extends s.Component{handleClick(e){this.props.onClick&&this.props.onClick(e)}handleScroll(e){if(e.target&&e.target.scrollLeft){let t=e.target.scrollLeft,a=e.target.scrollWidth,s=1*(t+e.target.offsetWidth)/a;this.props.onScrolledMax&&s>=.95&&this.props.onScrolledMax(t)}}render(){let e=(this.props.items||[]).map(((e,t)=>{let a=e.query;e.query&&"string"==typeof e.query&&(a=r.Z.parseQuery(e.query));let i=s.createElement("img",{loading:"lazy",crossOrigin:e.image.includes("steamcommunity")?null:"anonymous",className:"img-fluid",alt:e.text,src:e.image}),n=s.createElement("div",{className:"caption"},s.createElement("span",{className:"btn-link"},e.text)),c=s.createElement("div",{className:"thumbnail"},e.to&&a?s.createElement(l.Link,{to:e.to,query:a,className:"btn-link"},i,n):s.createElement("div",null,i,n));return s.createElement("li",{className:"item pointer",key:t,onClick:this.handleClick.bind(this,e.id)},c)}));return s.createElement("div",{className:"scroller-showcase"+(this.props.className?" "+this.props.className:"")},s.createElement("div",{className:"no-gutters row-horizon",ref:e=>{this.slider=e,e&&(e.onscroll=this.handleScroll.bind(this))}},e))}}}}]);