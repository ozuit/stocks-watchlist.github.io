(this["webpackJsonpstock-watch"]=this["webpackJsonpstock-watch"]||[]).push([[0],{195:function(e,t,n){e.exports=n(339)},200:function(e,t,n){},201:function(e,t,n){},339:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(32),c=n.n(r),i=(n(200),n(58)),l=n(131),u=n.n(l),s=n(156),d=n(187),m=n(50),g=n(343),f=n(76),p=n(116),b=n(38),h=n(346),y=n(345),v=n(347),w=n(350),E=n(355),k=n(356),S=n(357),O=n(358),I=n(359),_=n(360),x=(n(201),n(192)),j=n(344),C=n(348),T=n(349),N=n(342),F=n(183),J=n(185),U=n(157),D=n.n(U),R=n(158),B={delayTouchStart:500},z=function(e){var t=e.index,n=e.moveRow,a=e.className,r=e.style,c=Object(x.a)(e,["index","moveRow","className","style"]),l=o.a.useRef(),u=Object(C.a)({accept:"DragableBodyRow",collect:function(e){var n=(e.getItem()||{}).index;return n===t?{}:{isOver:e.isOver(),dropClassName:n<t?" drop-over-downward":" drop-over-upward"}},drop:function(e){n(e.index,t)}}),s=Object(m.a)(u,2),d=s[0],g=d.isOver,f=d.dropClassName,p=s[1],b=Object(T.a)({item:{type:"DragableBodyRow",index:t},collect:function(e){return{isDragging:e.isDragging()}}});return p((0,Object(m.a)(b,2)[1])(l)),o.a.createElement("tr",Object.assign({ref:l,className:"".concat(a).concat(g?f:""),style:Object(i.a)({cursor:"move"},r)},c))},L=function(e){var t=Object(a.useState)([]),n=Object(m.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)([]),l=Object(m.a)(i,2),u=l[0],s=l[1],d={body:{row:z}},g=Object(a.useCallback)((function(e,t){var n=r[e],a=D()(r,{$splice:[[e,1],[t,0,n]]});c(a),localStorage.setItem("data",JSON.stringify(a))}),[r]);return Object(a.useEffect)((function(){c(e.dataSource),s(e.columns)}),[e.dataSource,e.columns]),o.a.createElement(N.a,{backend:R.isMobile?J.a:F.a,options:B},o.a.createElement(j.a,{rowKey:function(e){return e.code},scroll:{x:650},pagination:!1,columns:u,dataSource:r,components:d,onRow:function(e,t){return{index:t,moveRow:g}}}))},M=n(351),W=n(352),A=n(353),K=h.a.confirm;function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";try{t=Math.abs(t),t=isNaN(t)?2:t;var o=e<0?"-":"",r=parseInt(e=Math.abs(Number(e)||0).toFixed(t)).toString(),c=r.length>3?r.length%3:0;return o+(c?r.substr(0,c)+a:"")+r.substr(c).replace(/(\d{3})(?=\d)/g,"$1"+a)+(t?n+Math.abs(e-r).toFixed(t).slice(2):"")}catch(i){console.log(i)}}function q(){fetch("/stocks-watchlist/index.html?v=".concat("1.3"),{cache:"no-cache"}).then((function(e){return e.text()})).then((function(e){var t=e.match(/main.(\w+).(\w+).js/gm);if(t){var n=t[0].split(".")[1],a=localStorage.getItem("hash_version");a?n!==a&&(localStorage.setItem("checking_version",!0),K({title:"C\xf3 phi\xean b\u1ea3n m\u1edbi c\u1eadp nh\u1eadt",content:"Nh\u1ea5n v\xe0o n\xfat OK \u0111\u1ec3 c\u1eadp nh\u1eadt, nh\u1ea5n cancel \u0111\u1ec3 b\u1ecf qua!",onOk:function(){localStorage.removeItem("checking_version"),localStorage.setItem("hash_version",n),window.location.href="/stocks-watchlist/index.html?v=".concat("1.3")},onCancel:function(){localStorage.removeItem("checking_version")}})):localStorage.setItem("hash_version",n)}}))}function H(){var e=new Date;return String(e.getDate()).padStart(2,"0")+"/"+String(e.getMonth()+1).padStart(2,"0")+"/"+e.getFullYear()}var $=function(e,t){return[{title:"M\xe3",dataIndex:"code",key:"code",fixed:"left",width:80},{title:"Cut loss",dataIndex:"cut_loss",key:"cut_loss"},{title:"Kho\u1ea3ng mua",dataIndex:"range_buy",key:"range_buy",render:function(e,t){return o.a.createElement("span",null,t.buyFrom," - ",t.buyTo)}},{title:"S\u1ed1 l\u01b0\u1ee3ng mua",dataIndex:"buy_number",key:"buy_number"},{title:"Target",dataIndex:"target",key:"target"},{title:"L\u1ee3i nhu\u1eadn",dataIndex:"profit",key:"profit",render:function(e,t){return t.target&&t.buyTo?(100*(t.target-t.buyTo)/t.buyTo).toFixed(2)+"%":""}},{title:"Ti\u1ec1n l\u1eddi",dataIndex:"revenue",key:"revenue",render:function(e,t){return t.target&&t.buyTo&&t.buy_number&&P(t.buyTo*t.buy_number*(100*(t.target-t.buyTo)/t.buyTo)*10,0)}},{title:"C\u1eadp nh\u1eadt",dataIndex:"updated_at",key:"updated_at"},{title:"H\xe0nh \u0111\u1ed9ng",dataIndex:"action",key:"action",fixed:"right",width:120,render:function(n,a){return o.a.createElement("div",null,o.a.createElement(W.a,{style:{paddingRight:10},onClick:function(){return e(a)}}),o.a.createElement(M.a,{placement:"topRight",title:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n xo\xe1 m\xe3 n\xe0y kh\xf4ng?",onConfirm:function(){return t(a)}},o.a.createElement(A.a,{style:{paddingLeft:10}})))}}]},G=n(354),Y=function(){document.getElementById("app-loader").style.display="none"},Q={container:{display:"none",position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:"rgb(0 0 0 / 75%)",zIndex:999,justifyContent:"center",alignItems:"center",flexDirection:"column"},description:{color:"#fff",fontSize:16}},V=function(e){return o.a.createElement(o.a.Fragment,null,e.children,o.a.createElement("div",{id:"app-loader",style:Q.container},o.a.createElement(G.a,{spin:!0,style:{fontSize:"56px",color:"#08c"}}),o.a.createElement("p",{style:Q.description},"\u0110ang \u0111\u1ed3ng b\u1ed9 d\u1eef li\u1ec7u v\u1edbi Google Drive c\u1ee7a b\u1ea1n...")))},X=g.a.Header,Z=g.a.Content,ee=n(328),te={labelCol:{span:6},wrapperCol:{span:18}},ne="https://www.googleapis.com/auth/drive.file",ae="",oe=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),l=Object(m.a)(c,2),x=l[0],j=l[1],C=Object(a.useState)(!1),T=Object(m.a)(C,2),N=T[0],F=T[1],J=Object(a.useState)([]),U=Object(m.a)(J,2),D=U[0],R=U[1],B=Object(a.useState)({}),z=Object(m.a)(B,2),M=z[0],W=z[1],A=function(){j(!1)},K=function(){try{window.gapi.client.init({apiKey:"AIzaSyB2iUHno4pqCNmd1elL9B15BDhkJ7w-l0c",clientId:"1042563212762-8r4l64tjbv73orac0sgpi6eaifsv3m5t.apps.googleusercontent.com",scope:ne,discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]}).then((function(){(ae=window.gapi.auth2.getAuthInstance()).isSignedIn.listen(G),G()}))}catch(e){console.log(e)}},G=function(){var e=ae.currentUser.get();if(null==e.xc)console.log("User logout!"),r(!1);else{var t=e.hasGrantedScopes(ne);console.log("User login!"),t&&(console.log("User is authorized!"),r(!0))}},Q=function(e){return new Promise((function(t,n){window.gapi.client.drive.files.get({fileId:e,alt:"media"}).then((function(e){t(e.body)}),(function(e){n(e)}))}))},V=function(){var e=localStorage.getItem("data"),t={name:"stock_watchlist_data",mimeType:"text/plain"},n="\r\n--foo_bar_baz\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n"+JSON.stringify(t)+"\r\n--foo_bar_baz\r\nContent-Type: text/plain\r\n\r\n"+e+"\r\n\r\n--foo_bar_baz--";window.gapi.client.request({path:"https://www.googleapis.com/upload/drive/v3/files",method:"POST",params:{uploadType:"multipart"},headers:{"Content-Type":"multipart/related; boundary=foo_bar_baz"},body:n}).execute((function(e){Y()}))},oe=function(e){return new Promise((function(t,n){window.gapi.client.drive.files.delete({fileId:e}).then((function(e){t(""===e.body)}),(function(e){n(!1)}))}))},re=function(){var e=Object(s.a)(u.a.mark((function e(t){var n,a,o,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementById("app-loader").style.display="flex",setTimeout((function(){Y()}),15e3),e.next=3,new Promise((function(e,t){window.gapi.client.drive.files.list({pageSize:10,fields:"*",q:"name='".concat("stock_watchlist_data","'")}).then((function(t){var n,a=null===t||void 0===t||null===(n=t.result)||void 0===n?void 0:n.files[0];a&&e(a.id),e("FILE_NOT_FOUND")}),(function(e){t(e)}))}));case 3:if("FILE_NOT_FOUND"===(n=e.sent)){e.next=20;break}return e.next=7,Q(n);case 7:return a=e.sent,o=localStorage.getItem("data"),r=[],"upload"===t&&(r=ee.unionBy(JSON.parse(o),JSON.parse(a),"code")),"download"===t&&(r=ee.unionBy(JSON.parse(a),JSON.parse(o),"code")),R(r),localStorage.setItem("data",JSON.stringify(r)),e.next=16,oe(n);case 16:if(!e.sent){e.next=18;break}V();case 18:e.next=21;break;case 20:V();case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){var e=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[];R(e),setTimeout((function(){q(),setInterval((function(){localStorage.getItem("checking_version")||q()}),6e4)}),5e3)}),[]),Object(a.useEffect)((function(){var e=document.createElement("script");e.onload=function(){window.gapi.load("client:auth2",K)},e.src="https://apis.google.com/js/api.js",document.body.appendChild(e)}));var ce,ie=o.a.createElement(f.a,null,o.a.createElement(f.a.Item,{onClick:function(){W({}),F(!1),j(!0)},key:"1",icon:o.a.createElement(E.a,null)},"Th\xeam m\u1edbi"),n&&o.a.createElement(f.a.Item,{onClick:function(){return re("upload")},key:"2",icon:o.a.createElement(k.a,null)},"Upload"),n&&o.a.createElement(f.a.Item,{onClick:function(){return re("download")},key:"3",icon:o.a.createElement(S.a,null)},"Download"),!n&&o.a.createElement(f.a.Item,{onClick:function(){ae.signIn()},key:"4",icon:o.a.createElement(O.a,null)},"\u0110\u0103ng nh\u1eadp"),n&&o.a.createElement(f.a.Item,{onClick:function(){ae.signOut()},key:"5",icon:o.a.createElement(I.a,null)},"\u0110\u0103ng xu\u1ea5t"));return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{className:"App"},o.a.createElement(X,null,o.a.createElement("div",null,o.a.createElement("p",{className:"title"},"Stocks Watchlist ","(v".concat("1.3",")")),o.a.createElement("p",{className:"sub-title"},"C\xf4ng c\u1ee5 qu\u1ea3n l\xfd danh m\u1ee5c \u0111\u1ea7u t\u01b0")),o.a.createElement("div",null,o.a.createElement(p.a,{overlay:ie,trigger:["click"]},o.a.createElement(b.a,{type:"primary"},"Menu ",o.a.createElement(_.a,null))))),o.a.createElement(Z,null,o.a.createElement(L,{dataSource:D,columns:$((function(e){W(e),F(!0),j(!0)}),(function(e){var t=D.filter((function(t){return t.code!==e.code}));R(t),localStorage.setItem("data",JSON.stringify(t))}))}))),o.a.createElement(h.a,{visible:x,title:N?"Ch\u1ec9nh s\u1eeda m\xe3":"Th\xeam m\xe3 m\u1edbi",onCancel:A,footer:[o.a.createElement(b.a,{key:"back",onClick:A},"H\u1ee7y b\u1ecf"),o.a.createElement(b.a,{key:"submit",type:"primary",onClick:function(){if(N){var e=D.map((function(e){return e.code===M.code.toUpperCase()&&(e.cut_loss=M.cut_loss,e.buyFrom=M.buyFrom,e.buyTo=M.buyTo,e.target=M.target,e.buy_number=M.buy_number,e.updated_at=H()),e}));localStorage.setItem("data",JSON.stringify(e)),R(e)}else{M.code=M.code.toUpperCase(),M.updated_at=H();var t=[].concat(Object(d.a)(D),[M]);localStorage.setItem("data",JSON.stringify(t)),R(t)}j(!1)}},"L\u01b0u")]},o.a.createElement(y.a,Object.assign({},te,{name:"basic",layout:"horizontal"}),o.a.createElement(y.a.Item,{label:"M\xe3 CK"},o.a.createElement(v.a,{disabled:N,value:M.code,onChange:function(e){return W(Object(i.a)({},M,{code:e.target.value}))}})),o.a.createElement(y.a.Item,{label:"Cut loss"},o.a.createElement(w.a,{min:0,step:.1,style:{width:"100%"},value:M.cut_loss,onChange:function(e){return W(Object(i.a)({},M,{cut_loss:e}))}})),o.a.createElement(y.a.Item,{label:"Kho\u1ea3ng mua"},o.a.createElement(w.a,{min:0,step:.1,value:M.buyFrom,onChange:function(e){return W(Object(i.a)({},M,{buyFrom:e}))}}),o.a.createElement("span",{style:{marginLeft:10,marginRight:10}},"-"),o.a.createElement(w.a,{min:0,step:.1,value:M.buyTo,onChange:function(e){return W(Object(i.a)({},M,{buyTo:e}))}})),o.a.createElement(y.a.Item,{label:"S\u1ed1 l\u01b0\u1ee3ng"},o.a.createElement(w.a,{min:0,style:{width:"100%"},value:M.buy_number&&(ce=M.buy_number,ce.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),onChange:function(e){return W(Object(i.a)({},M,{buy_number:e}))}})),o.a.createElement(y.a.Item,{label:"Target"},o.a.createElement(w.a,{min:0,step:.1,style:{width:"100%"},value:M.target,onChange:function(e){return W(Object(i.a)({},M,{target:e}))}})),o.a.createElement(y.a.Item,{label:"L\u1ee3i nhu\u1eadn"},o.a.createElement(v.a.Group,null,o.a.createElement(v.a,{disabled:!0,placeholder:"%",style:{width:"25%"},value:M.target&&M.buyTo?(100*(M.target-M.buyTo)/M.buyTo).toFixed(2)+"%":""}),o.a.createElement(v.a,{placeholder:"\u01af\u1edbc t\xednh theo gi\xe1 mua l\u1edbn nh\u1ea5t",style:{width:"75%"},value:M.target&&M.buyTo&&M.buy_number&&P(M.buyTo*M.buy_number*(100*(M.target-M.buyTo)/M.buyTo)*10,0)}))))))},re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(V,null,o.a.createElement(oe,null))),document.getElementById("root")),console.log=function(){},function(e){if("serviceWorker"in navigator){if(new URL("/stocks-watchlist",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/stocks-watchlist","/service-worker.js");re?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ce(t,e)}))}}()}},[[195,1,2]]]);
//# sourceMappingURL=main.41945bef.chunk.js.map