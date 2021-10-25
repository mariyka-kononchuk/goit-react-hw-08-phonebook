(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{123:function(t,e,n){"use strict";n.r(e);var r,c,a,i,o,u,s,b,l=n(0),d=n.n(l),j=n(34),f=n.n(j),h=n(22),p=n(8),O=n(82),x=(n(98),n(99),n(6)),g=n(19),v=function(t){return t.auth.isLoggedIn},m=function(t){return t.auth.user.name},k=function(t){return t.auth.isFetchingCurrentUser},y=n(83),w=n.n(y),C=n(2),L=function(t){var e=t.children;return Object(C.jsx)("div",{className:w.a.container,children:e})},z=n(17),S=n(18),T=Object(S.a)(h.b)(r||(r=Object(z.a)(["\n    margin-right: 20px;\n    color: rgba(39, 164, 236);\n\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 1.475;\n\n    &.activeLink {\n    color: rgb(4, 109, 165);\n  }\n  "]))),F=S.a.nav(c||(c=Object(z.a)(["\ncolor: rgba(39, 164, 236,0);\n    /* display: flex;\n    justify-content:right;\n    border-bottom: solid 1px pink; */\n  "]))),I=function(){var t=Object(p.d)(v);return Object(C.jsxs)(F,{children:[Object(C.jsx)(T,{exact:!0,to:"/",activeClassName:"activeLink",children:"Home"}),t&&Object(C.jsx)(T,{to:"/contacts",activeClassName:"activeLink",children:"Contacts"})]})},R=Object(S.a)(h.b)(a||(a=Object(z.a)(["\n    margin-right: 20px;\n    color: rgb(39, 164, 236);\n\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 1.475;\n\n    &.activeLink {\n    color: rgb(4, 109, 165);\n  }\n  "]))),U=S.a.nav(i||(i=Object(z.a)(["\n  color: rgb(39, 164, 236);\n    /* border-bottom: solid 1px pink; */\n  "]))),N=function(){return Object(C.jsxs)(U,{children:[Object(C.jsx)(R,{exact:!0,to:"/register",activeClassName:"activeLink",children:"Register"}),Object(C.jsx)(R,{exact:!0,to:"/login",activeClassName:"activeLink",children:"Login"})]})},q=(S.a.div(o||(o=Object(z.a)(["\n    display:flex;\n  "]))),S.a.span(u||(u=Object(z.a)(["\n    margin-right: 20px;\n    color: grey;\n\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 1.375;\n  "])))),E=(S.a.button(s||(s=Object(z.a)(["\n    padding: 4px 8px;\n    border-radius: 2px;\n    background-color: rgb(4, 109, 165);\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    text-align: center;\n    display: block;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    /* margin-left: 0px; */\n    /* margin-right: auto; */\n    color: #fff;\n    border: 0;\n    text-decoration: none;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 14px;\n    line-height: 18px;\n    font-style: normal;\n    font-weight: 500;\n    min-width: 100px;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n      &:hover, focus {\n        background-color: #a5a1a4;\n      }\n"]))),n(127));function A(){var t=Object(p.c)(),e=Object(p.d)(m);return Object(C.jsxs)(A,{children:[Object(C.jsx)("img",{src:"",alt:"",width:"32"}),Object(C.jsxs)(q,{children:["Welcome, ",e]}),Object(C.jsx)(E.a,{type:"primary",onClick:function(){return t(Object(g.c)())},children:"Log out"})]})}var _=S.a.header(b||(b=Object(z.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 20px;\n    color: rgb(39, 164, 236);\n\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 1.475;\n\n    border-bottom: solid 1px rgb(39, 164, 236);\n\n    &.activeLink {\n    color: rgb(4, 109, 165);\n  }\n  "])));function J(){var t=Object(p.d)(v);return Object(C.jsxs)(_,{children:[Object(C.jsx)(I,{}),t?Object(C.jsx)(A,{}):Object(C.jsx)(N,{})]})}var M=n(37),W=n(51),B=["children","redirectTo"];function H(t){var e=t.children,n=t.redirectTo,r=void 0===n?"/":n,c=Object(W.a)(t,B),a=Object(p.d)(v);return Object(C.jsx)(x.b,Object(M.a)(Object(M.a)({},c),{},{children:a?e:Object(C.jsx)(x.a,{to:r})}))}var P=["children","redirectTo","restricted"];function V(t){var e=t.children,n=t.redirectTo,r=void 0===n?"/":n,c=t.restricted,a=void 0!==c&&c,i=Object(W.a)(t,P),o=Object(p.d)(v)&&a;return Object(C.jsx)(x.b,Object(M.a)(Object(M.a)({},i),{},{children:o?Object(C.jsx)(x.a,{to:r}):e}))}var D=Object(l.lazy)((function(){return Promise.all([n.e(7),n.e(1)]).then(n.bind(null,248))})),G=Object(l.lazy)((function(){return n.e(4).then(n.bind(null,249))})),K=Object(l.lazy)((function(){return n.e(2).then(n.bind(null,250))})),Q=Object(l.lazy)((function(){return n.e(0).then(n.bind(null,252))}));function X(){var t=Object(p.c)(),e=Object(p.d)(k);return Object(l.useEffect)((function(){t(Object(g.a)())}),[t]),!e&&Object(C.jsxs)(L,{children:[Object(C.jsx)(J,{}),Object(C.jsx)(l.Suspense,{fallback:Object(C.jsx)("div",{children:"Loading..."}),children:Object(C.jsxs)(x.d,{children:[Object(C.jsx)(V,{exact:!0,path:"/",children:Object(C.jsx)(D,{})}),Object(C.jsx)(V,{exact:!0,path:"/register",restricted:!0,children:Object(C.jsx)(G,{})}),Object(C.jsx)(V,{exact:!0,path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(C.jsx)(K,{})}),Object(C.jsx)(H,{path:"/contacts",redirectTo:"/login",children:Object(C.jsx)(Q,{})})]})})]})}var Y,Z,$=n(50),tt=n(5),et=n(86),nt=n.n(et),rt=n(24),ct=n(87),at=n.n(ct),it=n(12),ot=n(9),ut=n(40),st=Object(tt.d)([],(Y={},Object(it.a)(Y,ut.j,(function(t,e){return e.payload})),Object(it.a)(Y,ut.c,(function(t,e){return[e.payload].concat(Object($.a)(t))})),Object(it.a)(Y,ut.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Y)),bt=Object(tt.d)("",Object(it.a)({},ut.d,(function(t,e){return e.payload}))),lt=Object(ot.b)({items:st,filter:bt}),dt=Object(tt.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},extraReducers:(Z={},Object(it.a)(Z,g.d.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(it.a)(Z,g.b.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(it.a)(Z,g.c.fulfilled,(function(t,e){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1})),Object(it.a)(Z,g.a.pending,(function(t){t.isFetchingCurrentUser=!0})),Object(it.a)(Z,g.a.fulfilled,(function(t,e){t.user=e.payload,t.isLoggedIn=!0,t.isFetchingCurrentUser=!1})),Object(it.a)(Z,g.a.rejected,(function(t){t.isFetchingCurrentUser=!1})),Z)}).reducer,jt=[].concat(Object($.a)(Object(tt.f)({serializableCheck:{ignoredActions:[rt.a,rt.f,rt.b,rt.c,rt.d,rt.e]}})),[nt.a]),ft={key:"auth",storage:at.a,whitelist:["token"]},ht=Object(tt.a)({reducer:{auth:Object(rt.g)(ft,dt),contacts:lt},middleware:jt,devTools:!1}),pt=Object(rt.h)(ht);f.a.render(Object(C.jsx)(d.a.StrictMode,{children:Object(C.jsx)(p.a,{store:ht,children:Object(C.jsx)(O.a,{loading:null,persistor:pt,children:Object(C.jsx)(h.a,{children:Object(C.jsx)(X,{})})})})}),document.querySelector("#root"))},19:function(t,e,n){"use strict";n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return j})),n.d(e,"a",(function(){return f}));var r=n(23),c=n.n(r),a=n(41),i=n(28),o=n.n(i),u=n(5);o.a.defaults.baseURL="https://connections-api.herokuapp.com";var s=function(t){o.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){o.a.defaults.headers.common.Authorization=""},l=Object(u.c)("auth/register",function(){var t=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("/users/signup",e);case 3:return n=t.sent,r=n.data,s(r.token),t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),d=Object(u.c)("auth/login",function(){var t=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("/users/login",e);case 3:return n=t.sent,r=n.data,s(r.token),t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),j=Object(u.c)("auth/logout",function(){var t=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("/users/logout",e);case 3:return n=t.sent,r=n.data,b(),t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),f=Object(u.c)("auth/refresh",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,i,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.getState(),null!==(a=r.auth.token)){t.next=4;break}return t.abrupt("return",n.rejectWithValue());case 4:return s(a),t.prev=5,t.next=8,o.a.get("/users/current");case 8:return i=t.sent,u=i.data,t.abrupt("return",u);case 13:t.prev=13,t.t0=t.catch(5);case 15:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}())},40:function(t,e,n){"use strict";n.d(e,"i",(function(){return c})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return j}));var r=n(5),c=Object(r.b)("contacts/fetchContactRequest"),a=Object(r.b)("contacts/fetchContactSuccess"),i=Object(r.b)("contacts/fetchContactError"),o=Object(r.b)("contacts/addContactRequest"),u=Object(r.b)("contacts/addContactSuccess"),s=Object(r.b)("contacts/addContactError"),b=Object(r.b)("contacts/deleteContactRequest"),l=Object(r.b)("contacts/deleteContactSuccess"),d=Object(r.b)("contacts/deleteContactError"),j=Object(r.b)("app/changeFilter")},83:function(t,e,n){t.exports={container:"Container_container__14MLr"}},99:function(t,e,n){}},[[123,5,6]]]);
//# sourceMappingURL=main.b5d513ef.chunk.js.map