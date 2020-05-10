(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[36],{"2vHB":function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("pVnL")),l=n(a("q1tI")),i=n(a("JHR5")),o=n(a("LCnF")),c=a("m81S"),u="/home/circleci/project/src/components/Breadcrumb.js",m=function(e){return l.default.useContext(c.OptionsContext).useAutoGen?l.default.createElement(i.default,(0,r.default)({},e,{__source:{fileName:u,lineNumber:12},__self:this})):l.default.createElement(o.default,(0,r.default)({},e,{__source:{fileName:u,lineNumber:14},__self:this}))};t.default=m},"62n+":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP");var n=a("q1tI"),r=a.n(n),l=a("76ZC"),i=a.n(l),o=a("PHNs"),c=a.n(o),u=a("aqT/"),m=a.n(u),s=(a("84bF"),a("vOnD")),d=a("C+fU"),p=s.d.h5.withConfig({displayName:"counterstyle__FunFactTitle",componentId:"qhyqit-0"})(["color:",";font-weight:500;margin-bottom:10px;"],(function(e){return e.theme.colors.themeColorBlack})),f=s.d.div.withConfig({displayName:"counterstyle__FunFactCount",componentId:"qhyqit-1"})(["font-size:",";font-weight:",";line-height:",";color:",";margin-bottom:",";@media ","{font-size:50px;}@media ","{font-size:40px;}@media ","{font-size:34px;}"],(function(e){return e.fontSize||"64px"}),(function(e){return e.fontweight||600}),(function(e){return e.lineHeight||1.41}),(function(e){return e.color||e.theme.colors.themeColor}),(function(e){return e.mb}),d.a.large,d.a.medium,d.a.small),A=s.d.h6.withConfig({displayName:"counterstyle__FunFactText",componentId:"qhyqit-2"})(["font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:",";"],(function(e){return e.color||e.theme.colors.secondary})),b=s.d.div.withConfig({displayName:"counterstyle__FunFactWrap",componentId:"qhyqit-3"})(["text-align:center;margin-bottom:",";",""],(function(e){return e.mb}),(function(e){return e.responsive&&Object(s.c)(["",""],(function(e){return e.responsive.medium&&Object(s.c)(["@media ","{margin-bottom:",";margin-top:",";}"],d.a.medium,(function(e){return e.responsive.medium.mb}),(function(e){return e.responsive.medium.mt}))}))}));function g(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}t.a=function(e){var t=e.title,a=e.countTo,l=e.text,o=g(e,["title","countTo","text"]),u=o.wrapperStyle,s=o.countToStyle,d=o.textStyle,h=g(o,["wrapperStyle","countToStyle","textStyle"]),E=Object(n.useState)(!1),x=E[0],y=E[1];return r.a.createElement(b,Object.assign({},u,h),t&&r.a.createElement(p,null,i()(t)),a&&r.a.createElement(f,s,r.a.createElement(c.a,{start:x?0:null,end:a,duration:5},(function(e){var t=e.countUpRef;return r.a.createElement("div",null,r.a.createElement("span",{ref:t}),r.a.createElement(m.a,{onChange:function(e){return function(e){e&&(x||y(!0))}(e)}},r.a.createElement("span",{className:"sr-only"},"+")))}))),l&&r.a.createElement(A,d,i()(l)))}},JHR5:function(e,t,a){"use strict";a("Z2Ku"),a("L9s1");var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("pVnL")),l=n(a("8OQS")),i=n(a("q1tI")),o=n(a("17x9")),c=a("Wbzz"),u=a("m81S"),m="/home/circleci/project/src/components/auto-gen-crumb.js",s=function(e){var t=e.title,a=void 0===t?"":t,n=e.crumbSeparator,o=e.crumbWrapperStyle,s=e.crumbActiveStyle,d=e.crumbStyle,p=e.crumbs,f=e.crumbLabel,A=void 0===f?null:f,b=e.disableLinks,g=e.hiddenCrumbs,h=(0,l.default)(e,["title","crumbSeparator","crumbWrapperStyle","crumbActiveStyle","crumbStyle","crumbs","crumbLabel","disableLinks","hiddenCrumbs"]),E=i.default.useContext(u.OptionsContext).useClassNames;return i.default.createElement("div",{__source:{fileName:m,lineNumber:23},__self:this},i.default.createElement("span",{className:"breadcrumb__title",__source:{fileName:m,lineNumber:24},__self:this},a),p.map((function(e,t){return g.includes(e.pathname)?null:i.default.createElement("div",{className:"breadcrumb",style:E?null:(0,r.default)({display:"inline"},o),key:t,__source:{fileName:m,lineNumber:30},__self:this},!b.includes(e.pathname)&&i.default.createElement(c.Link,(0,r.default)({to:e.pathname,style:E?null:(0,r.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},d),activeStyle:E?null:(0,r.default)({color:"white"},s),className:"breadcrumb__link",activeClassName:E?"breadcrumb__link__active":null},h,{__source:{fileName:m,lineNumber:38},__self:this}),A&&t===p.length-1?A:e.crumbLabel),b.includes(e.pathname)&&i.default.createElement("span",(0,r.default)({style:E?null:(0,r.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},d),className:"breadcrumb__link__disabled"},h,{__source:{fileName:m,lineNumber:70},__self:this}),A&&t===p.length-1?A:e.crumbLabel),i.default.createElement("span",{className:"breadcrumb__separator",style:E?null:(0,r.default)({fontSize:"16pt"},d),__source:{fileName:m,lineNumber:89},__self:this},t===p.length-1?null:n))})))};s.defaultProps={title:"",crumbSeparator:" / ",crumbWrapperStyle:{},crumbStyle:{},crumbActiveStyle:{},crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},s.propTypes={title:o.default.string,crumbSeparator:o.default.string,crumbWrapperStyle:o.default.shape(),crumbActiveStyle:o.default.shape(),crumbStyle:o.default.shape(),crumbs:o.default.arrayOf(o.default.shape({location:o.default.shape(),pathname:o.default.string.isRequired})).isRequired,crumbLabel:o.default.string,disableLinks:o.default.arrayOf(o.default.string),hiddenCrumbs:o.default.arrayOf(o.default.string)};var d=s;t.default=d},LCnF:function(e,t,a){"use strict";a("Oyvg"),a("pIFo");var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("pVnL")),l=n(a("8OQS")),i=n(a("q1tI")),o=n(a("17x9")),c=a("Wbzz"),u=a("m81S"),m=n(a("q/3z")),s="/home/circleci/project/src/components/click-tracking-crumb.js",d=function(e){var t=e.title,a=e.location,n=e.crumbLabel,o=e.crumbSeparator,d=e.crumbWrapperStyle,p=e.crumbActiveStyle,f=e.crumbStyle,A=(0,l.default)(e,["title","location","crumbLabel","crumbSeparator","crumbWrapperStyle","crumbActiveStyle","crumbStyle"]),b=i.default.useContext(u.OptionsContext),g=b.useClassNames,h=b.usePathPrefix,E=(0,m.default)({location:(0,r.default)({},a,{pathname:h?a.pathname.replace(new RegExp("^"+h),""):a.pathname}),crumbLabel:n,crumbSeparator:o,crumbStyle:f,crumbActiveStyle:p}).crumbs,x=void 0===E?[]:E;return i.default.createElement("div",{__source:{fileName:s,lineNumber:37},__self:this},i.default.createElement("span",{className:"breadcrumb__title",__source:{fileName:s,lineNumber:38},__self:this},t),x.map((function(e,t){return i.default.createElement("div",{className:"breadcrumb",style:g?null:(0,r.default)({display:"inline"},d),key:t,__source:{fileName:s,lineNumber:41},__self:this},i.default.createElement(c.Link,(0,r.default)({to:e.pathname||"",style:g?null:(0,r.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},e.crumbStyle),activeStyle:g?null:(0,r.default)({color:"white"},p),className:"breadcrumb__link",activeClassName:g?"breadcrumb__link__active":null},A,{__source:{fileName:s,lineNumber:48},__self:this}),e.crumbLabel),i.default.createElement("span",{className:"breadcrumb__separator",style:g?null:(0,r.default)({fontSize:"16pt"},e.crumbStyle),__source:{fileName:s,lineNumber:76},__self:this},t===x.length-1?null:e.crumbSeparator))})))};d.defaultProps={title:"",crumbSeparator:" / ",crumbWrapperStyle:{},crumbStyle:{},crumbActiveStyle:{}},d.propTypes={location:o.default.shape().isRequired,crumbLabel:o.default.string.isRequired,title:o.default.string,crumbSeparator:o.default.string,crumbWrapperStyle:o.default.shape(),crumbActiveStyle:o.default.shape(),crumbStyle:o.default.shape()};var p=d;t.default=p},SsCC:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0;var r=n(a("2vHB"));t.Breadcrumb=r.default;var l=n(a("JHR5"));t.AutoGenCrumb=l.default;var i=n(a("bAhf"));t.SitemapCrumbs=i.default;var o=a("iHlK");t.BreadcrumbContext=o.BreadcrumbContext,t.BreadcrumbConsumer=o.BreadcrumbConsumer,t.BreadcrumbProvider=o.BreadcrumbProvider;var c=n(a("q/3z"));t.useBreadcrumb=c.default},bAhf:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("pVnL")),l=n(a("q1tI")),i=n(a("JHR5")),o=function(e){return console.warn("Warning: <SitemapCrumbs /> has been deprecated.  Please update your code to use <Breadcrumb /> component. See docs https://github.com/sbardian/gatsby-plugin-breadcrumb for details."),l.default.createElement(i.default,(0,r.default)({},e,{__source:{fileName:"/home/circleci/project/src/components/sitemap-crumbs.js",lineNumber:11},__self:this}))};t.default=o},bSK8:function(e,t,a){"use strict";t.__esModule=!0;var n=a("SsCC");t.Breadcrumb=n.Breadcrumb,t.BreadcrumbContext=n.BreadcrumbContext,t.BreadcrumbConsumer=n.BreadcrumbConsumer,t.BreadcrumbProvider=n.BreadcrumbProvider,t.useBreadcrumb=n.useBreadcrumb,t.SitemapCrumbs=n.SitemapCrumbs,t.AutoGenCrumb=n.AutoGenCrumb},h9EL:function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP");var n=a("q1tI"),r=a.n(n),l=a("76ZC"),i=a.n(l),o=a("PHNs"),c=a.n(o),u=a("aqT/"),m=a.n(u),s=(a("84bF"),a("vOnD")),d=a("C+fU"),p=s.d.div.withConfig({displayName:"counterstyle__FunFactWrap",componentId:"sc-1wba060-0"})(["text-align:center;margin-bottom:",";",""],(function(e){return e.mb||"30px"}),(function(e){return e.responsive&&Object(s.c)(["",""],(function(e){return e.responsive.medium&&Object(s.c)(["@media ","{margin-bottom:",";margin-top:",";}"],d.a.medium,(function(e){return e.responsive.medium.mb}),(function(e){return e.responsive.medium.mt}))}))})),f=s.d.h5.withConfig({displayName:"counterstyle__FunFactTitle",componentId:"sc-1wba060-1"})(["color:",";font-weight:500;margin-bottom:10px;"],(function(e){return e.theme.colors.themeColorBlack})),A=s.d.div.withConfig({displayName:"counterstyle__FunFactCount",componentId:"sc-1wba060-2"})(["font-size:",";font-weight:",";line-height:",";color:",";margin-bottom:",";@media ","{font-size:50px;}@media ","{font-size:40px;}@media ","{font-size:34px;}"],(function(e){return e.fontSize||"56px"}),(function(e){return e.fontweight||400}),(function(e){return e.lineHeight||1}),(function(e){return e.color||e.theme.colors.themeColor}),(function(e){return e.mb||"19px"}),d.a.large,d.a.medium,d.a.small),b=s.d.h6.withConfig({displayName:"counterstyle__FunFactText",componentId:"sc-1wba060-3"})(["font-size:14px;text-transform:uppercase;letter-spacing:2px;color:",";"],(function(e){return e.color||"#7e7e7e"}));function g(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}t.a=function(e){var t=e.title,a=e.countTo,l=e.text,o=g(e,["title","countTo","text"]),u=o.wrapperStyle,s=o.countToStyle,d=o.textStyle,h=g(o,["wrapperStyle","countToStyle","textStyle"]),E=Object(n.useState)(!1),x=E[0],y=E[1];return r.a.createElement(p,Object.assign({},u,h),t&&r.a.createElement(f,null,i()(t)),a&&r.a.createElement(A,s,r.a.createElement(c.a,{start:x?0:null,end:a,duration:5},(function(e){var t=e.countUpRef;return r.a.createElement("div",null,r.a.createElement("span",{ref:t}),r.a.createElement(m.a,{onChange:function(e){return function(e){e&&(x||y(!0))}(e)}},r.a.createElement("span",{className:"sr-only"},"+")))}))),l&&r.a.createElement(b,d,i()(l)))}},n3vq:function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP");var n=a("oNrJ"),r=a("q1tI"),l=a.n(r),i=a("NIcq"),o=a("6jYG"),c=a("s+Kf"),u=a("Pz91");var m=function(e){var t=e.sectionStyle,a=e.heading,r=(e.text,e.ButtonOne),m=e.ButtonTwo,s=(function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a])}(e,["sectionStyle","heading","text","ButtonOne","ButtonTwo"]),n.data.file.childImageSharp.fluid);return l.a.createElement(o.e,Object.assign({},t,{bgImage:s}),l.a.createElement(o.c,null,l.a.createElement(o.d,{className:"align-items-center text-lg-left text-center"},l.a.createElement(o.b,{xl:8,lg:7},l.a.createElement(c.a,a,"Assess your business potentials and find opportunities ",l.a.createElement("span",null,"for bigger success ")," ")),l.a.createElement(o.b,{xl:4,lg:5,className:"text-center"},l.a.createElement(u.a,Object.assign({to:"/"},r,{icon:l.a.createElement(i.d,null),iconposition:"left",icondistance:"4px",iconsize:"16px"}),"Let 's talk"),l.a.createElement(u.a,Object.assign({to:"/"},m,{icon:l.a.createElement(i.h,null),iconposition:"left",icondistance:"4px",iconsize:"16px"}),"Get Info")))))};m.defaultProps={sectionStyle:{bgColor:"#454545",bgposition:"top 35% right -68px",bgsize:"auto",pt:"80px",pb:"80px",responsive:{medium:{pt:"60px",pb:"60px"},small:{pt:"40px",pb:"40px"}}},heading:{as:"h3",color:"#fff",child:{color:"secondary"},responsive:{medium:{mb:"10px"}}},ButtonOne:{skin:"light",m:"7px"},ButtonTwo:{skin:"secondary",m:"7px"}},t.a=m},oAxD:function(e){e.exports=JSON.parse('{"data":{"file":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAEABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAd2EAf/EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEAAT8hf//aAAwDAQACAAMAAAAQf/8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQABPxB//9k=","aspectRatio":4.8,"src":"/static/130fe9ab91ac2fc94b9b15afd0b37809/8c24d/title-bar-01-bg.jpg","srcSet":"/static/130fe9ab91ac2fc94b9b15afd0b37809/43ae1/title-bar-01-bg.jpg 480w,\\n/static/130fe9ab91ac2fc94b9b15afd0b37809/10012/title-bar-01-bg.jpg 960w,\\n/static/130fe9ab91ac2fc94b9b15afd0b37809/8c24d/title-bar-01-bg.jpg 1920w","sizes":"(max-width: 1920px) 100vw, 1920px"}}}}}')},oNrJ:function(e){e.exports=JSON.parse('{"data":{"file":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAA6ElEQVQoz22RYRKCIBCFQUspNI9dRnWDfuQo1VGaKbVO1FtazAxm3uzCsB9vWXE7rqNHVWZdY1adNao/7QWtvjHied598m+cQRmkIO1ySzI5arO23ubiXpUKsAIHy6HQGuGXhzIwhXIGUr7kvQODkwuiIlGAKEAlFXYMIVjL8BEs46jZsfJgcikA00hSABMcziHp2wy0OhWBF04WOQNjAOkg8a8GgMnIXQg6tM0FRmKj+YJGHk2GEf8VhwSXfqLSWf4tGJy+rgeKkltPAw4/0Tts641wDu2uGF3UbjCX75T5gSgIc39pojcdnhOe7jb6swAAAABJRU5ErkJggg==","aspectRatio":2.5428571428571427,"src":"/static/d40885c15bef56ba086d266327c50a2d/cb960/cta-bg-2.png","srcSet":"/static/d40885c15bef56ba086d266327c50a2d/e6c51/cta-bg-2.png 178w,\\n/static/d40885c15bef56ba086d266327c50a2d/43f93/cta-bg-2.png 356w,\\n/static/d40885c15bef56ba086d266327c50a2d/cb960/cta-bg-2.png 711w","sizes":"(max-width: 711px) 100vw, 711px"}}}}}')},"q/3z":function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("q1tI")),l=a("iHlK"),i=function(e){var t=e.location,a=e.crumbLabel,n=e.crumbSeparator,i=e.crumbStyle,o=void 0===i?{}:i,c=e.crumbActiveStyle,u=void 0===c?{}:c,m=r.default.useContext(l.BreadcrumbContext),s=m.crumbs,d=m.updateCrumbs;return r.default.useEffect((function(){d({location:t,crumbLabel:a,crumbSeparator:n,crumbStyle:o,crumbActiveStyle:u})}),[t,a,n,o,u,d]),{crumbs:s}};t.default=i},sHIg:function(e,t,a){"use strict";a("KKXr");var n=a("oAxD"),r=a("q1tI"),l=a.n(r),i=a("bSK8"),o=(a("84bF"),a("vOnD")),c=a("1eu9"),u=a.n(c),m=a("C+fU"),s=Object(o.d)(u.a).withConfig({displayName:"page-headerstyle__PageHeaderWrap",componentId:"r0z2o7-0"})(["background-color:#f6f2ed;background-repeat:no-repeat;background-position:center center;border-bottom-width:0px;padding-top:136px;padding-bottom:131px;background-size:cover;text-align:center;@media ","{padding-top:80px;padding-bottom:80px;}.breadcrumb{display:inline-block;padding:0;padding-left:6px;margin-bottom:0;border-radius:0;font-size:14px;font-weight:500;letter-spacing:2px;line-height:1.58;text-transform:uppercase;background-color:transparent;&__link{position:relative;&:after{content:'';width:0;height:1px;bottom:0;position:absolute;left:auto;right:0;z-index:-1;transition:width 0.6s cubic-bezier(0.25,0.8,0.25,1) 0s;background:currentColor;}&:hover{&:after{width:100%;left:0;right:auto;z-index:0;}}&__active{color:#6D70A6;&:after{display:none;}}}&__title{font-size:56px;font-weight:700;color:",";display:block;margin-bottom:20px;@media ","{font-size:46px;line-height:1.4;}@media ","{font-size:40px;}@media ","{font-size:34px;}}}"],m.a.large,(function(e){return e.theme.colors.themeColor}),m.a.large,m.a.medium,m.a.small);t.a=function(e){var t=e.pageContext,a=e.location,r=e.title,o=t.breadcrumb.crumbs,c=a.pathname.toLowerCase().split("/"),u=c[c.length-1].split("-"),m=n.data;return l.a.createElement(s,{fluid:m.file.childImageSharp.fluid},l.a.createElement(i.Breadcrumb,{title:r,crumbs:o,crumbLabel:u.join(" "),disableLinks:["/elements","/category","/profile","/date","/tag","/page","/blog","/blog/page","/blogs","/services"]}))}},vYZ5:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("vrFN"),i=a("/lKu"),o=a("k0zA"),c=a("ZBg+"),u=a("sHIg"),m=a("n3vq"),s=a("7vrA"),d=(a("84bF"),a("vOnD")),p=a("C+fU"),f=d.d.div.withConfig({displayName:"sectionstyle__SectionWrap",componentId:"qd66yi-0"})([""]),A=d.d.div.withConfig({displayName:"sectionstyle__FunFactGridWrap",componentId:"qd66yi-1"})(["border-right:1px solid #ededed;display:flex;flex-wrap:wrap;"]),b=d.d.div.withConfig({displayName:"sectionstyle__FunFactGrid",componentId:"qd66yi-2"})(["width:25%;padding-top:100px;padding-bottom:100px;padding-left:30px;padding-right:30px;position:relative;@media ","{padding-left:10px;padding-right:10px;}@media ","{width:50%;padding-top:60px;padding-bottom:60px;&:after{position:absolute;content:'';top:-1px;left:0;right:0;background:#ededed;height:1px;}}@media ","{width:100%;}&:before{position:absolute;content:'';left:0;top:0;bottom:0;background:#ededed;width:1px;}"],p.a.large,p.a.medium,p.a.small),g=a("62n+"),h=function(){return r.a.createElement(f,null,r.a.createElement(s.a,null,r.a.createElement(A,null,r.a.createElement(b,null,r.a.createElement(g.a,{title:"Successfully work with",countTo:1056,text:"HAPPY CLIENTS"})),r.a.createElement(b,null,r.a.createElement(g.a,{title:"Successfully completed",countTo:491,text:"FINISHED PROJECTS"})),r.a.createElement(b,null,r.a.createElement(g.a,{title:"Recruit more than",countTo:245,text:"SKILLED EXPERTS"})),r.a.createElement(b,null,r.a.createElement(g.a,{title:"Blog update",countTo:1090,text:"MEDIA POSTS"})))))},E=(a("91GP"),a("3Z9Z")),x=a("JI6e"),y=d.d.div.withConfig({displayName:"sectionstyle__SectionWrap",componentId:"sc-1c8flra-0"})(["background:",";padding-top:60px;padding-bottom:30px;"],(function(e){return e.theme.colors.themeColor})),_=(a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("76ZC")),S=a.n(_),v=a("PHNs"),C=a.n(v),N=a("aqT/"),w=a.n(N),B=d.d.div.withConfig({displayName:"counterstyle__FunFactWrap",componentId:"sc-1kau3ii-0"})(["text-align:center;margin-bottom:",";",""],(function(e){return e.mb||"30px"}),(function(e){return e.responsive&&Object(d.c)(["",""],(function(e){return e.responsive.medium&&Object(d.c)(["@media ","{margin-bottom:",";margin-top:",";}"],p.a.medium,(function(e){return e.responsive.medium.mb}),(function(e){return e.responsive.medium.mt}))}))})),I=d.d.h5.withConfig({displayName:"counterstyle__FunFactTitle",componentId:"sc-1kau3ii-1"})(["color:",";font-weight:500;margin-bottom:10px;"],(function(e){return e.theme.colors.themeColorBlack})),O=d.d.div.withConfig({displayName:"counterstyle__FunFactCount",componentId:"sc-1kau3ii-2"})(["font-size:",";font-weight:",";line-height:",";color:",";margin-bottom:",";@media ","{font-size:50px;}@media ","{font-size:40px;}@media ","{font-size:34px;}"],(function(e){return e.fontSize||"56px"}),(function(e){return e.fontweight||700}),(function(e){return e.lineHeight||1}),(function(e){return e.color||"#fff"}),(function(e){return e.mb||"20px"}),p.a.large,p.a.medium,p.a.small),j=d.d.h6.withConfig({displayName:"counterstyle__FunFactText",componentId:"sc-1kau3ii-3"})(["font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:",";"],(function(e){return e.color||"rgba(255, 255, 255, 0.7)"}));function T(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var k=function(e){var t=e.title,a=e.countTo,l=e.text,i=T(e,["title","countTo","text"]),o=i.wrapperStyle,c=i.countToStyle,u=i.textStyle,m=T(i,["wrapperStyle","countToStyle","textStyle"]),s=Object(n.useState)(!1),d=s[0],p=s[1];return r.a.createElement(B,Object.assign({},o,m),t&&r.a.createElement(I,null,S()(t)),a&&r.a.createElement(O,c,r.a.createElement(C.a,{start:d?0:null,end:a,duration:5},(function(e){var t=e.countUpRef;return r.a.createElement("div",null,r.a.createElement("span",{ref:t}),r.a.createElement(w.a,{onChange:function(e){return function(e){e&&(d||p(!0))}(e)}},r.a.createElement("span",{className:"sr-only"},"+")))}))),l&&r.a.createElement(j,u,S()(l)))},z=function(e){var t=e.counterStyle;return r.a.createElement(y,null,r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(x.a,{md:3,sm:6},r.a.createElement(k,Object.assign({},t,{countTo:1056,text:"HAPPY CLIENTS"}))),r.a.createElement(x.a,{md:3,sm:6},r.a.createElement(k,Object.assign({},t,{countTo:491,text:"FINISHED PROJECTS"}))),r.a.createElement(x.a,{md:3,sm:6},r.a.createElement(k,Object.assign({},t,{countTo:245,text:"SKILLED EXPERTS"}))),r.a.createElement(x.a,{md:3,sm:6},r.a.createElement(k,Object.assign({},t,{countTo:1090,text:"MEDIA POSTS"}))))))};z.defaultProps={counterStyle:{layout:2,mb:"30px"}};var F=z,L=d.d.div.withConfig({displayName:"sectionstyle__SectionWrap",componentId:"sc-1613gcr-0"})(["padding-top:120px;padding-bottom:120px;@media ","{padding-top:80px;padding-bottom:80px;}@media ","{padding-top:60px;padding-bottom:60px;}"],p.a.medium,p.a.small),P=d.d.div.withConfig({displayName:"sectionstyle__HeaderWrap",componentId:"sc-1613gcr-1"})(["margin-right:3rem;@media ","{margin-bottom:20px;}"],p.a.medium),R=a("s+Kf"),Q=a("h9EL"),q=function(e){var t=e.markHeading,a=e.headingStyle;return r.a.createElement(L,null,r.a.createElement(s.a,null,r.a.createElement(E.a,null,r.a.createElement(x.a,{lg:{span:4,offset:1}},r.a.createElement(P,null,r.a.createElement(R.a,t,r.a.createElement("mark",null,"38")," YEARS’ EXPERIENCE IN IT"),r.a.createElement(R.a,a,"Learn more about our ",r.a.createElement("span",null,"Success Stories")))),r.a.createElement(x.a,{lg:7,md:8},r.a.createElement(E.a,null,r.a.createElement(x.a,{sm:6},r.a.createElement(Q.a,{countTo:1790,text:"ACCOUNT NUMBERS"})),r.a.createElement(x.a,{sm:6},r.a.createElement(Q.a,{countTo:32,text:"FINISHED PROJECTS"})),r.a.createElement(x.a,{sm:6},r.a.createElement(Q.a,{countTo:73,text:"HAPPY CLIENTS"})),r.a.createElement(x.a,{sm:6},r.a.createElement(Q.a,{countTo:318,text:"BLOG POSTS"})))))))};q.defaultProps={markHeading:{layout:"highlight"},headingStyle:{as:"h3",mt:"25px",fontSize:"38px",child:{color:"primary"},responsive:{large:{fontSize:"30px"},small:{fontSize:"24px"}}}};var D=q;t.default=function(e){var t=e.pageContext,a=e.location;return r.a.createElement(i.default,{location:a},r.a.createElement(l.a,{title:"Counters"}),r.a.createElement(o.a,null),r.a.createElement(u.a,{pageContext:t,location:a,title:"Counters"}),r.a.createElement("main",{className:"site-wrapper-reveal"},r.a.createElement(h,null),r.a.createElement(F,null),r.a.createElement(D,null),r.a.createElement(m.a,null)),r.a.createElement(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-elements-counters-js-f6115624fb5e83073c43.js.map