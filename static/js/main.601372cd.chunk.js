(this["webpackJsonpctf-challenge"]=this["webpackJsonpctf-challenge"]||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),o=t.n(r),s=(t(85),t(14)),c=t(10),i=t(16),m=t(17),u=t(18),d=(t(86),t(87),t(131)),h=t(29),p=t(11),f=t.n(p),v=t(65),E=t.n(v);t(88);function b(){return l.a.createElement("div",{className:"home-body"},l.a.createElement(f.a,null,l.a.createElement("p",{className:"p-3"}," Hello CSE204 Student! ")),l.a.createElement(E.a,{className:"particles",width:"100%",height:"300px",params:{particles:{number:{value:150,density:{enable:!0,value_area:500}},size:{value:2},color:{value:"#ff4b00"}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}}}),l.a.createElement(f.a,null,l.a.createElement(h.b,{style:{textDecoration:"none"},to:"/level1"},l.a.createElement(d.a,{className:"getstarted",variant:"text",color:"primary",size:"large",style:{fontSize:"40px"}},"Let's Get Started"))))}t(93);var g=t(68),C=t(146),y=t(140),w=t(138),O=t(139),j=t(137),N=t(134),k=l.a.forwardRef((function(e,a){return l.a.createElement(N.a,Object.assign({direction:"up",ref:a},e))}));function S(){var e=l.a.useState(!1),a=Object(g.a)(e,2),t=a[0],n=a[1],r=function(){n(!1)};return l.a.createElement("div",{className:""},l.a.createElement(d.a,{variant:"contained",size:"small",color:"primary",onClick:function(){n(!0)}},"Hint"),l.a.createElement(C.a,{open:t,TransitionComponent:k,keepMounted:!0,onClose:r,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},l.a.createElement(j.a,{id:"alert-dialog-slide-title"},"Have you tried the Inspector?"),l.a.createElement(w.a,null,l.a.createElement(O.a,{id:"alert-dialog-slide-description"},"Your answer should be in this format: ","flag{your_answer_here}")),l.a.createElement(y.a,null,l.a.createElement(d.a,{onClick:r,color:"primary"},"Okay Cool"))))}var _=t(144),T=t(34),x=t(147),A=t(142),D=t(24),H=t.n(D),I=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){t.setState({answer:e.target.value})},t.validate=function(e){e.preventDefault(),"flag{this_one_is_quite_easy}"===t.state.answer?(alert("Nice you got it!"),t.props.history.push("/level2")):t.setState({answer:"",open:!0})},t.handleClose=function(e,a){"clickaway"!==a&&t.setState({open:!1})},t.state={answer:"",open:!1},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"level-body"},l.a.createElement("div",{className:"contain"},l.a.createElement("h3",{className:"level-header"}," Level 1 "),l.a.createElement(f.a,null,l.a.createElement(S,null)),l.a.createElement(f.a,null,l.a.createElement("form",{onSubmit:this.validate,className:"form-container mt-2",noValidate:!0,autoComplete:"off"},l.a.createElement(_.a,{id:"standard-name",label:"Answer",className:"answer",value:this.state.answer,onChange:this.handleChange,margin:"normal"})))),l.a.createElement(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:l.a.createElement("span",{id:"message-id"},"Incorrect answer. Please try again."),action:[l.a.createElement(A.a,{key:"close","aria-label":"close",color:"inherit",onClick:this.handleClose},l.a.createElement(H.a,null))]}))}}]),a}(l.a.Component),P=Object(T.f)(I),z=(t(96),t(148)),L=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){t.setState({answer:e.target.value,toolTipOpen:!1})},t.validate=function(e){e.preventDefault(),"flag{only_if_you_look_at_css_file_too}"===t.state.answer?(alert("Success!"),t.props.history.push("/level3")):t.setState({answer:"",open:!0})},t.handleToolTipOpen=function(){t.setState({toolTipOpen:!0})},t.handleToolTipClose=function(){t.setState({toolTipOpen:!1})},t.handleClose=function(e,a){"clickaway"!==a&&t.setState({open:!1})},t.state={answer:"",open:!1},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"level-body"},l.a.createElement("div",{className:"contain"},l.a.createElement("h3",{className:"level-header"}," Level 2 "),l.a.createElement(f.a,null,l.a.createElement(z.a,{disableFocusListener:!0,disableTouchListener:!0,title:"I wonder where else I can find comments..."},l.a.createElement(d.a,null,"HINT"))),l.a.createElement(f.a,null,l.a.createElement("form",{onSubmit:this.validate,className:"form-container mt-2",noValidate:!0,autoComplete:"off"},l.a.createElement(_.a,{id:"standard-name",label:"Answer",className:"answer",value:this.state.answer,onChange:this.handleChange,margin:"normal"})))),l.a.createElement(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:l.a.createElement("span",{id:"message-id"},"Incorrect answer. Please try again."),action:[l.a.createElement(A.a,{key:"close","aria-label":"close",color:"inherit",onClick:this.handleClose},l.a.createElement(H.a,null))]}))}}]),a}(l.a.Component),M=Object(T.f)(L),V=(t(97),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){t.setState({answer:e.target.value,toolTipOpen:!1})},t.validate=function(e){e.preventDefault(),"flag{console_can_help_you_debug_a_lot}"===t.state.answer?(alert("Success!"),t.props.history.push("/level4")):t.setState({answer:"",open:!0})},t.handleToolTipOpen=function(){t.setState({toolTipOpen:!0})},t.handleToolTipClose=function(){t.setState({toolTipOpen:!1})},t.handleClose=function(e,a){"clickaway"!==a&&t.setState({open:!1})},t.state={answer:"",open:!1},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){console.log("flag{console_can_help_you_debug_a_lot}")}},{key:"render",value:function(){return l.a.createElement("div",{className:"level-body"},l.a.createElement("div",{className:"contain"},l.a.createElement("h3",{className:"level-header"}," Level 3 "),l.a.createElement(f.a,null,l.a.createElement(z.a,{disableFocusListener:!0,disableTouchListener:!0,title:"ENOUGH HINTS"},l.a.createElement(d.a,null,"HINT"))),l.a.createElement(f.a,null,l.a.createElement("form",{onSubmit:this.validate,className:"form-container mt-2",noValidate:!0,autoComplete:"off"},l.a.createElement(_.a,{id:"standard-name",label:"Answer",className:"answer",value:this.state.answer,onChange:this.handleChange,margin:"normal"})))),l.a.createElement(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:l.a.createElement("span",{id:"message-id"},"Incorrect answer. Please try again."),action:[l.a.createElement(A.a,{key:"close","aria-label":"close",color:"inherit",onClick:this.handleClose},l.a.createElement(H.a,null))]}))}}]),a}(l.a.Component)),B=Object(T.f)(V),F=(t(98),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){t.setState({answer:e.target.value})},t.validate=function(e){e.preventDefault(),"flag{haha_it's_just_hidden}"===t.state.answer?(alert("Success!"),t.props.history.push("/level5")):t.setState({answer:"",open:!0})},t.handleClose=function(e,a){"clickaway"!==a&&t.setState({open:!1})},t.state={answer:"",open:!1},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"level-body"},l.a.createElement("div",{className:"contain"},l.a.createElement("h3",{className:"level-header"},"Level 4"),l.a.createElement(f.a,null,l.a.createElement("div",{className:"isItHidden"}," ","flag{haha_it's_just_hidden}"," ")),l.a.createElement(f.a,null,l.a.createElement("form",{onSubmit:this.validate,className:"form-container mt-2",noValidate:!0,autoComplete:"off"},l.a.createElement(_.a,{id:"standard-name",label:"Answer",className:"answer",value:this.state.answer,onChange:this.handleChange,margin:"normal"})))),l.a.createElement(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:l.a.createElement("span",{id:"message-id"},"Incorrect answer. Please try again."),action:[l.a.createElement(A.a,{key:"close","aria-label":"close",color:"inherit",onClick:this.handleClose},l.a.createElement(H.a,null))]}))}}]),a}(l.a.Component)),J=Object(T.f)(F),Y=(t(99),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleClick=function(e){e.preventDefault(),console.log("asdf"),"asdf"===e.target.className&&t.setState({openAns:!0})},t.handleChange=function(e){t.setState({answer:e.target.value})},t.validate=function(e){e.preventDefault(),"flag{you_clever_clever}"===t.state.answer?(alert("Success!"),t.props.history.push("/level6")):t.setState({answer:"",open:!0})},t.handleClose=function(e,a){"clickaway"!==a&&t.setState({open:!1})},t.handleCloseAns=function(e,a){"clickaway"!==a&&t.setState({openAns:!1})},t.state={name:"Add-A-Class",open:!1,openAns:!1,answer:""},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"level-body"},l.a.createElement("div",{className:"contain",style:{width:"250px"}},l.a.createElement("h3",{className:"level-header"},"Level 5 - JavaScript"),l.a.createElement(f.a,null,l.a.createElement("button",{type:"button",id:this.state.name,onClick:this.handleClick}," Change Me and Click Me! ")),l.a.createElement(f.a,null,l.a.createElement("form",{onSubmit:this.validate,className:"form-container mt-2",noValidate:!0,autoComplete:"off"},l.a.createElement(_.a,{id:"standard-name",label:"Answer",className:"answer",value:this.state.answer,onChange:this.handleChange,margin:"normal"})))),l.a.createElement(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:l.a.createElement("span",{id:"message-id"},"Incorrect answer. Please try again."),action:[l.a.createElement(A.a,{key:"close","aria-label":"close",color:"inherit",onClick:this.handleClose},l.a.createElement(H.a,null))]}),l.a.createElement(x.a,{anchorOrigin:{vertical:"top",horizontal:"left"},open:this.state.openAns,autoHideDuration:5e3,onClose:this.handleCloseAns,ContentProps:{"aria-describedby":"message-id"},message:l.a.createElement("span",{id:"message-id"},"flag{you_clever_clever}"),action:[l.a.createElement(A.a,{key:"close","aria-label":"close",color:"inherit",onClick:this.handleCloseAns},l.a.createElement(H.a,null))]}))}}]),a}(l.a.Component)),G=Object(T.f)(Y),W=(t(64),t(143)),q=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).validate=function(e){e.preventDefault(),t.state.answer==="flag{"+t.state.sum.toString()+"}"?(alert("Success! I think you're done. I think."),t.setState({answer:""}),t.props.history.push("/")):t.setState({answer:"",open:!0})},t.handleChange=function(e){t.setState({answer:e.target.value})},t.handleClose=function(e,a){"clickaway"!==a&&t.setState({open:!1})},t.state={open:!1,answer:"",sum:0,numbers:[]},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){for(var e=Math.floor(310*Math.random())+300,a=[],t=0,n=0;n<e;n++){var l=Math.floor(500*Math.random())+-250;a.push(l),t+=l}this.setState({numbers:a,sum:t})}},{key:"render",value:function(){var e=this.state.numbers.map((function(e){return l.a.createElement("span",null,l.a.createElement("span",{key:e,className:"num text-success"},e),l.a.createElement("span",null,"| "))}));return l.a.createElement("div",{className:"level-body"},l.a.createElement("div",{className:"contain"},l.a.createElement("h3",{className:"level-header",style:{marginBottom:0}},"Level 6 "),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h5",null," Sum "),l.a.createElement(W.a,{color:"primary",style:{fontSize:35,textAlign:"center",marginTop:10}}," add_circle ")),l.a.createElement(f.a,null,l.a.createElement("form",{onSubmit:this.validate,className:"form-container mt-2",noValidate:!0,autoComplete:"off"},l.a.createElement(_.a,{id:"standard-name",label:"Answer",className:"answer",value:this.state.answer,onChange:this.handleChange,margin:"normal"})))),l.a.createElement("div",{className:"numbers",style:{position:"absolute",top:"70%"}},e),l.a.createElement(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:l.a.createElement("span",{id:"message-id"},"Incorrect answer. Please try again."),action:[l.a.createElement(A.a,{key:"close","aria-label":"close",color:"inherit",onClick:this.handleClose},l.a.createElement(H.a,null))]}))}}]),a}(l.a.Component),R=Object(T.f)(q),U=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"level-body"},l.a.createElement("div",{className:"contain"},l.a.createElement("h2",{className:"level-header"}," You've found the secret level!"),l.a.createElement(f.a,null,l.a.createElement("h5",null," Here's your last flag. You're done. ","flag{congratulations}"))))}}]),a}(l.a.Component),$=Object(T.f)(U),K=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"body"},l.a.createElement(h.a,{basename:"/"},l.a.createElement(T.c,null,l.a.createElement(T.a,{exact:!0,path:"/"},l.a.createElement(b,null)),l.a.createElement(T.a,{path:"/level1"},l.a.createElement(P,null)),l.a.createElement(T.a,{exact:!0,path:"/level2"},l.a.createElement(M,null)),l.a.createElement(T.a,{exact:!0,path:"/level3"},l.a.createElement(B,null)),l.a.createElement(T.a,{exact:!0,path:"/level4"},l.a.createElement(J,null)),l.a.createElement(T.a,{exact:!0,path:"/level5"},l.a.createElement(G,null)),l.a.createElement(T.a,{exact:!0,path:"/level6"},l.a.createElement(R,null)),l.a.createElement(T.a,{exact:!0,path:"/level7"},l.a.createElement($,null)),l.a.createElement(T.a,{render:function(){return l.a.createElement("div",{class:"h2",style:{textAlign:"center",marginTop:"200px"}}," - 404 Not Found - ")}}))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},64:function(e,a,t){},80:function(e,a,t){e.exports=t(100)},85:function(e,a,t){},86:function(e,a,t){},88:function(e,a,t){},93:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[80,1,2]]]);
//# sourceMappingURL=main.601372cd.chunk.js.map