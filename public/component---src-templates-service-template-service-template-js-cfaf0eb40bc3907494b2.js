(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[56],{"0Ovi":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return j}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("KKXr");var a=n("q1tI"),o=n.n(a),i=n("76ZC"),l=n.n(i),r=n("vrFN"),c=n("/lKu"),d=n("k0zA"),s=n("ZBg+"),p=n("6jYG"),m=n("s+Kf"),f=n("6UNW"),u=n("tBDR"),g=n("7hiG"),x=n("fpNA"),b=n("hL2l"),h=n("n3vq"),E=n("jPax"),v=n("sjaS"),y=n("vOnD"),w=n("C+fU"),_=n("1eu9"),A=n.n(_),I=Object(y.d)(A.a).withConfig({displayName:"service-templatestyle__BannerArea",componentId:"g8o67b-0"})(["padding-top:195px;padding-bottom:204px;"]),C=y.d.div.withConfig({displayName:"service-templatestyle__BannerTextWrap",componentId:"g8o67b-1"})(["text-align:center;"]),O=y.d.section.withConfig({displayName:"service-templatestyle__IntroArea",componentId:"g8o67b-2"})(["padding-top:100px;padding-bottom:94px;@media ","{padding-top:72px;padding-bottom:50px;}"],w.a.medium),N=y.d.div.withConfig({displayName:"service-templatestyle__FaqArea",componentId:"g8o67b-3"})(["padding-bottom:70px;"]),S=y.d.div.withConfig({displayName:"service-templatestyle__VideoBoxWrap",componentId:"g8o67b-4"})(["position:relative;@media ","{margin-top:30px;}img{border-radius:5px;}"],w.a.medium),k=y.d.div.withConfig({displayName:"service-templatestyle__VideoBtnWrap",componentId:"g8o67b-5"})(["position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);"]),B=y.d.section.withConfig({displayName:"service-templatestyle__FeatureArea",componentId:"g8o67b-6"})(["padding-bottom:68px;@media ","{padding-bottom:55px;}"],w.a.medium);var z=function(e){var t,n=e.data,i=e.location,y=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["data","location"]),w=n.itServicesJson;w.banner_image&&(t=w.banner_image.childImageSharp.fluid);var _=y.titleStyle,A=y.taglineStyle,z=y.introTextStyles,j=z.leftHeading,q=z.rightHeading,G=z.rightText,T=y.featureStyels.featureTitle,V=Object(a.useState)(!1),W=V[0],D=V[1];if(w.video)var H=w.video.video_link.split("=",-1)[1];return o.a.createElement(c.default,{location:i},o.a.createElement(r.a,{title:w.title}),o.a.createElement(d.a,null),o.a.createElement("main",{className:"site-wrapper-reveal"},(w.title||w.tagline)&&o.a.createElement(I,{fluid:t},o.a.createElement(p.c,null,o.a.createElement(p.d,{justify:"center"},o.a.createElement(p.b,{lg:8},o.a.createElement(C,null,w.title&&o.a.createElement(m.a,_,w.title),w.tagline&&o.a.createElement(m.a,A,w.tagline)))))),w.introText&&o.a.createElement(O,null,o.a.createElement(p.c,null,o.a.createElement(p.d,null,o.a.createElement(p.b,{lg:4},o.a.createElement(m.a,j,"Learn More About Our ",o.a.createElement("span",null," Success ",o.a.createElement("br",null)," Stories"))),w.introText&&o.a.createElement(p.b,{lg:{span:7,offset:1}},o.a.createElement(p.a,null,w.introText.heading&&o.a.createElement(m.a,q,l()(w.introText.heading)),w.introText.text&&o.a.createElement(f.a,G,l()(w.introText.text))))))),(w.faq||w.video)&&o.a.createElement(N,null,o.a.createElement(p.c,null,o.a.createElement(p.d,null,w.faq&&o.a.createElement(p.b,{lg:6,pr:"3rem"},o.a.createElement(v.a,{layout:"two"},o.a.createElement(E.a,{allowZeroExpanded:!0,preExpanded:[w.faq[0].id]},w.faq.map((function(e,t){return o.a.createElement(E.b,{id:e.id,key:e.id},o.a.createElement(E.d,null,o.a.createElement(E.c,null,e.title)),o.a.createElement(E.e,null,o.a.createElement("p",null,e.desc)))}))))),w.video&&o.a.createElement(p.b,{lg:6},o.a.createElement(S,null,w.video.preview_image&&o.a.createElement(u.a,{fluid:w.video.preview_image.childImageSharp.fluid,alt:"Video preview",align:"left"}),o.a.createElement(k,null,o.a.createElement(g.a,{skin:"primary",onClick:function(){D(!0)}}))))))),w.features&&o.a.createElement(B,null,o.a.createElement(p.c,null,w.features.title&&o.a.createElement(p.d,null,o.a.createElement(p.b,{col:"12"},o.a.createElement(m.a,T,w.features.title))),w.features.items&&o.a.createElement(p.d,null,w.features.items.map((function(e){return o.a.createElement(p.b,{lg:6,key:e.id},o.a.createElement(b.a,{title:e.title,iconName:e.icon_name,desc:e.desc}))}))))),o.a.createElement(h.a,null)),o.a.createElement(x.a,{channel:"youtube",videoId:H,isOpen:W,onClose:function(){D(!1)}}),o.a.createElement(s.a,null))},j="3354813592";z.defaultProps={titleStyle:{as:"h1",color:"#fff",mb:"15px"},taglineStyle:{as:"h5",fontweight:400,color:"#fff"},introTextStyles:{leftHeading:{as:"h3",mt:"25px",fontSize:"38px",child:{color:"primary"},responsive:{large:{fontSize:"30px"},medium:{mt:0,mb:"20px",fontSize:"28px"},small:{fontSize:"24px"}}},rightHeading:{as:"h5",position:"relative",pl:"34px",lineheight:1.67,fontweight:800,layout:"quote",child:{color:"primary"}},rightText:{mt:"15px",fontSize:"18px",ml:"34px",color:"#696969"}},featureStyels:{featureTitle:{as:"h3",textalign:"center",mb:"20px"}}};t.default=z},"7hiG":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var a=n("q1tI"),o=n.n(a),i=n("76ZC"),l=n.n(i),r=n("vOnD"),c=n("deLP"),d=r.d.div.withConfig({displayName:"video-buttonstyle__VideoButtonInner",componentId:"wu8ue9-0"})(["position:relative;width:78px;height:78px;"]),s=r.d.div.withConfig({displayName:"video-buttonstyle__VideoMark",componentId:"wu8ue9-1"})(["position:absolute;top:50%;left:50%;transform:translateY(-50%,-50%);pointer-events:none;.wave-pulse{width:1px;height:0;margin:0 auto;&:before,&:after{opacity:0;content:'';display:block;position:absolute;width:200px;height:200px;top:50%;left:50%;border-radius:50%;border:3px solid #ffffff;animation:"," 3.25s linear infinite;animation-delay:0s;}&:before,&:after{animation-delay:0s;border:3px solid #ffffff;}&:before{animation-delay:.75s;}}"],c.e),p=r.d.div.withConfig({displayName:"video-buttonstyle__VideoPlay",componentId:"wu8ue9-2"})(["width:78px;height:78px;background:#fff;border-radius:50%;transition:all 1s cubic-bezier(0,0,0.2,1);box-shadow:0 20px 30px rgba(0,0,0,0.07);"]),m=r.d.div.withConfig({displayName:"video-buttonstyle__VideoPlayIcon",componentId:"wu8ue9-3"})(["font-weight:500;letter-spacing:3px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);line-height:1;margin-left:1px;&:before{content:'';position:absolute;top:0;left:0;width:0;height:0;transform:translate(-50%,-50%);border-top:12px solid transparent;border-bottom:12px solid transparent;border-left:19px solid #fff;border-left-color:#086AD8;}"]),f=r.d.div.withConfig({displayName:"video-buttonstyle__VideoText",componentId:"wu8ue9-4"})(["margin-top:0;margin-left:35px;font-size:18px;color:#fff;font-weight:600;line-height:1.78;"]),u=r.d.button.withConfig({displayName:"video-buttonstyle__VideoButtonWrap",componentId:"wu8ue9-5"})(["transition:",";display:flex;align-items:center;position:relative;padding:0;background:transparent;border:none;&:hover{","{transform:scale3d(1.15,1.15,1.15);}}"," "," "," "," "," ",""],(function(e){return e.theme.transition}),p,(function(e){return"primary"===e.skin&&Object(r.c)(["","{.wave-pulse{&:before,&:after{border:3px solid ",";}&:before,&:after{border:3px solid ",";}}}","{background:",";box-shadow:0 20px 30px rgba(0,0,0,0.07);}","{&:before{border-left:17px solid ",";border-left-color:#fff;}}"],s,(function(e){return e.theme.colors.themeColor}),(function(e){return e.theme.colors.themeColor}),p,(function(e){return e.theme.colors.themeColor}),m,(function(e){return e.theme.colors.themeColor}))}),(function(e){return"small"===e.size&&Object(r.c)(["",",","{height:30px;width:30px;line-height:30px;}","{margin-left:8px;font-weight:500;font-size:14px;}","{&:before{border-top-width:6px;border-bottom-width:6px;border-left-width:11px;}}"],p,d,f,m)}),(function(e){return"outlined"===e.varient&&Object(r.c)(["","{background:transparent;border:1px solid ",";}"],p,(function(e){return e.theme.colors.themeColor}))}),(function(e){return"light"===e.skin&&Object(r.c)(["","{border-color:#ddd;}","{&:before{border-left-color:",";}}"],p,m,(function(e){return e.theme.colors.themeColor}))}),(function(e){return 2===e.textStyle&&Object(r.c)(["","{margin-top:0;margin-left:59px;font-size:18px;font-weight:500;color:rgba(255,255,255,0.8);text-transform:uppercase;letter-spacing:2px;line-height:1.45;text-align:left;}"],f)}),(function(e){return e.icon&&Object(r.c)(["","{&:before{border-left-color:",";}}"],m,(function(e){return e.icon.color}))}));var g=function(e){var t=e.text,n=e.onClick,a=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["text","onClick"]);return o.a.createElement(u,Object.assign({onClick:n},a),o.a.createElement(d,null,"false"!==a.wave&&o.a.createElement(s,null,o.a.createElement("div",{className:"wave-pulse wave-pulse-1"}),o.a.createElement("div",{className:"wave-pulse wave-pulse-2"})),o.a.createElement(p,null,o.a.createElement(m,null))),t&&o.a.createElement(f,null,l()(t)))};g.defaultProps={skin:"light"};t.a=g},hL2l:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),i=n("9eSz"),l=n.n(i),r=n("vOnD"),c=n("C+fU"),d=r.d.div.withConfig({displayName:"box-iconstyle__BoxIconInner",componentId:"qzgsfx-0"})(["padding:30px;border-radius:5px;transition:all 0.3s ease-in-out;@media ","{padding:20px;}"],c.a.medium),s=r.d.div.withConfig({displayName:"box-iconstyle__BoxIconTop",componentId:"qzgsfx-1"})(["display:flex;align-items:center;"]),p=r.d.div.withConfig({displayName:"box-iconstyle__IconWrap",componentId:"qzgsfx-2"})(["flex-shrink:0;font-size:48px;min-width:60px;margin-right:10px;color:",";"],(function(e){return e.theme.colors.secondary})),m=r.d.h5.withConfig({displayName:"box-iconstyle__Heading",componentId:"qzgsfx-3"})(["color:",";margin-bottom:10px;"],(function(e){return e.theme.colors.themeColor})),f=r.d.div.withConfig({displayName:"box-iconstyle__BoxIconBottom",componentId:"qzgsfx-4"})([""]),u=r.d.p.withConfig({displayName:"box-iconstyle__Text",componentId:"qzgsfx-5"})([""]),g=r.d.div.withConfig({displayName:"box-iconstyle__BoxIconWrap",componentId:"qzgsfx-6"})(["&:hover{","{transform:translateY(-5px);background:#fff;box-shadow:0 0 40px rgba(51,51,51,0.1);}}"],d);t.a=function(e){var t=e.icon,n=e.title,a=e.desc;return o.a.createElement(g,null,o.a.createElement(d,null,o.a.createElement(s,null,t&&o.a.createElement(p,null,o.a.createElement(l.a,{fixed:t,alt:n})),n&&o.a.createElement(m,null,n)),a&&o.a.createElement(f,null,o.a.createElement(u,null,a))))}},n3vq:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var a=n("oNrJ"),o=n("q1tI"),i=n.n(o),l=n("NIcq"),r=n("6jYG"),c=n("s+Kf"),d=n("Pz91");var s=function(e){var t=e.sectionStyle,n=e.heading,o=(e.text,e.ButtonOne),s=e.ButtonTwo,p=(function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n])}(e,["sectionStyle","heading","text","ButtonOne","ButtonTwo"]),a.data.file.childImageSharp.fluid);return i.a.createElement(r.e,Object.assign({},t,{bgImage:p}),i.a.createElement(r.c,null,i.a.createElement(r.d,{className:"align-items-center text-lg-left text-center"},i.a.createElement(r.b,{xl:8,lg:7},i.a.createElement(c.a,n,"Assess your business potentials and find opportunities ",i.a.createElement("span",null,"for bigger success ")," ")),i.a.createElement(r.b,{xl:4,lg:5,className:"text-center"},i.a.createElement(d.a,Object.assign({to:"/"},o,{icon:i.a.createElement(l.d,null),iconposition:"left",icondistance:"4px",iconsize:"16px"}),"Let 's talk"),i.a.createElement(d.a,Object.assign({to:"/"},s,{icon:i.a.createElement(l.h,null),iconposition:"left",icondistance:"4px",iconsize:"16px"}),"Get Info")))))};s.defaultProps={sectionStyle:{bgColor:"#454545",bgposition:"top 35% right -68px",bgsize:"auto",pt:"80px",pb:"80px",responsive:{medium:{pt:"60px",pb:"60px"},small:{pt:"40px",pb:"40px"}}},heading:{as:"h3",color:"#fff",child:{color:"secondary"},responsive:{medium:{mb:"10px"}}},ButtonOne:{skin:"light",m:"7px"},ButtonTwo:{skin:"secondary",m:"7px"}},t.a=s},oNrJ:function(e){e.exports=JSON.parse('{"data":{"file":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAA6ElEQVQoz22RYRKCIBCFQUspNI9dRnWDfuQo1VGaKbVO1FtazAxm3uzCsB9vWXE7rqNHVWZdY1adNao/7QWtvjHied598m+cQRmkIO1ySzI5arO23ubiXpUKsAIHy6HQGuGXhzIwhXIGUr7kvQODkwuiIlGAKEAlFXYMIVjL8BEs46jZsfJgcikA00hSABMcziHp2wy0OhWBF04WOQNjAOkg8a8GgMnIXQg6tM0FRmKj+YJGHk2GEf8VhwSXfqLSWf4tGJy+rgeKkltPAw4/0Tts641wDu2uGF3UbjCX75T5gSgIc39pojcdnhOe7jb6swAAAABJRU5ErkJggg==","aspectRatio":2.5428571428571427,"src":"/static/d40885c15bef56ba086d266327c50a2d/cb960/cta-bg-2.png","srcSet":"/static/d40885c15bef56ba086d266327c50a2d/e6c51/cta-bg-2.png 178w,\\n/static/d40885c15bef56ba086d266327c50a2d/43f93/cta-bg-2.png 356w,\\n/static/d40885c15bef56ba086d266327c50a2d/cb960/cta-bg-2.png 711w","sizes":"(max-width: 711px) 100vw, 711px"}}}}}')}}]);
//# sourceMappingURL=component---src-templates-service-template-service-template-js-cfaf0eb40bc3907494b2.js.map