(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9536:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6424)}])},6105:function(e,t,n){"use strict";var r=n(4246);n(7378);var i=n(9894),s=n.n(i),c=n(8038),h=n.n(c);t.Z=e=>{let{children:t,title:n="This is the default title"}=e;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(h(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)("header",{children:(0,r.jsxs)("nav",{children:[(0,r.jsx)(s(),{href:"/",children:"Home"})," | ",(0,r.jsx)(s(),{href:"/about",children:"About"})," |"," ",(0,r.jsx)(s(),{href:"/initial-props",children:"With Initial Props"})]})}),t,(0,r.jsxs)("footer",{children:[(0,r.jsx)("hr",{}),(0,r.jsx)("span",{children:"I'm here to stay (Footer)"})]})]})}},6424:function(e,t,n){"use strict";n.r(t);var r=n(4246),i=n(7378),s=n(9894),c=n.n(s),h=n(6105);t.default=()=>((0,i.useEffect)(()=>{let e=(e,t)=>alert(t);return n.g.ipcRenderer.addListener("message",e),()=>{n.g.ipcRenderer.removeListener("message",e)}},[]),(0,r.jsxs)(h.Z,{title:"Home | Next.js + TypeScript + Electron Example",children:[(0,r.jsx)("h1",{children:"Hello Next.js \uD83D\uDC4B"}),(0,r.jsx)("button",{onClick:()=>{n.g.ipcRenderer.send("message","hi from next")},children:"Say hi to electron"}),(0,r.jsx)("p",{children:(0,r.jsx)(c(),{href:"/about",children:"About"})})]}))}},function(e){e.O(0,[774,683,888,179],function(){return e(e.s=9536)}),_N_E=e.O()}]);