(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{20:function(e,t,a){e.exports=a(28)},25:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(18),c=a.n(i),l=(a(25),a(8)),o=a(32),s=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Us and Keanu"),r.a.createElement(o.a.h2,{initial:{opacity:0,scale:0,rotate:0},animate:{opacity:1,scale:1,rotate:360},transition:{delay:1.5,duration:2}},"Happy 4th year Anniversary ","\ud83c\udf89"),r.a.createElement(o.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:2,duration:3}},"Lucky we don't hate each other...yet"),r.a.createElement(o.a.h2,{initial:{opacity:0},animate:{opacity:1},transition:{delay:2,duration:3}},"\ud83c\udf8a\ud83c\udf7b\ud83c\udf7e\ud83c\udf88"))},u=a(13),m=a.n(u),d=a(19),p=a(11);a(29),a(30);p.a.initializeApp({apiKey:"AIzaSyDFVTd7XT74LtXj6H0jIubpuSzQknfDKfg",authDomain:"han-firegram.firebaseapp.com",projectId:"han-firegram",storageBucket:"han-firegram.appspot.com",messagingSenderId:"21749139518",appId:"1:21749139518:web:7d526289a27f19de3d296f"});var f=p.a.storage(),g=p.a.firestore(),y=p.a.firestore.FieldValue.serverTimestamp,E=function(e){var t=Object(n.useState)(0),a=Object(l.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(null),o=Object(l.a)(c,2),s=o[0],u=o[1],p=Object(n.useState)(null),E=Object(l.a)(p,2),b=E[0],v=E[1];return Object(n.useEffect)((function(){var t=f.ref(e.name),a=g.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;i(t)}),(function(e){u(e)}),Object(d.a)(m.a.mark((function e(){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=y(),a.add({url:n,createdAt:r}),v(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:b,error:s}},b=function(e){var t=e.file,a=e.setFile,i=E(t),c=i.url,l=i.progress;return Object(n.useEffect)((function(){c&&a(null)}),[c,a]),r.a.createElement(o.a.div,{className:"progress-bar",initial:{width:0},animate:{width:l+"%"}})},v=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(null),s=Object(l.a)(c,2),u=s[0],m=s[1],d=["image/png","image/jpeg"];return r.a.createElement("form",null,r.a.createElement(o.a.label,{initial:{opacity:0},animate:{opacity:1},transition:{delay:3}},r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&d.includes(t.type)?(i(t),m(null)):(i(null),m("Please select an image file (png or jpeg)"))}}),r.a.createElement(o.a.span,{initial:{opacity:0},animate:{opacity:1},transition:{delay:3}},"+")),r.a.createElement("div",{className:"output"},u&&r.a.createElement("div",{className:"error"},u),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(b,{file:a,setFile:i})))},j=a(15),h=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){var t=g.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id}))})),i(t)}));return function(){return t()}}),[e]),{docs:r}},O=function(e){var t=e.setSelectedImg,a=h("images").docs;return console.log(a),r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(o.a.div,{className:"img-wrap",key:e.id,onClick:function(){return t(e.url)},whileHover:{opacity:1},layout:!0},r.a.createElement(o.a.img,{src:e.url,alt:e.key,initial:{opacity:0},animate:{opacity:1},transition:{delay:3}}))})))},S=function(e){var t=e.selectedImg,a=e.setSelectedImg;return r.a.createElement(o.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(o.a.img,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}}))};var k=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],i=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(v,null),r.a.createElement(O,{setSelectedImg:i}),a&&r.a.createElement(S,{selectedImg:a,setSelectedImg:i}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d9524ac5.chunk.js.map