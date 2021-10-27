(this["webpackJsonptest-resource-mgr"]=this["webpackJsonptest-resource-mgr"]||[]).push([[0],{26:function(e,t,a){},38:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),o=a.n(r),s=(a(38),a(3)),u=(a(26),a(9)),i=a(1);var l=function(e){var t=e.login,a=e.signup,c=Object(n.useState)(""),r=Object(s.a)(c,2),o=r[0],l=r[1],j=Object(n.useState)(""),h=Object(s.a)(j,2),f=h[0],b=h[1],p=Object(n.useState)(""),d=Object(s.a)(p,2),m=d[0],O=d[1],g=Object(n.useState)(""),x=Object(s.a)(g,2),v=x[0],y=x[1],S=Object(n.useState)(""),N=Object(s.a)(S,2),C=N[0],w=N[1];return Object(i.jsxs)("div",{className:"landing-page-container",children:[Object(i.jsx)("h1",{children:"TEST RESOURCE MANAGER"}),Object(i.jsxs)("form",{className:"login-form",onSubmit:function(e){return function(e){e.preventDefault(),t(o,f)}(e)},children:[Object(i.jsx)("h3",{children:"Login Here"}),Object(i.jsx)("input",{placeholder:"Enter a username",type:"text",value:o,onChange:function(e){return l(e.target.value)}}),Object(i.jsx)("input",{placeholder:"Enter a password",type:"text",value:f,onChange:function(e){return b(e.target.value)}}),Object(i.jsx)(u.a,{variant:"primary",type:"submit",children:"Login"})]}),Object(i.jsxs)("form",{className:"signup-form",onSubmit:function(e){return function(e){e.preventDefault(),a(m,v,C)}(e)},children:[Object(i.jsx)("h3",{children:"Create a New Account Here"}),Object(i.jsx)("input",{placeholder:"Enter a username",type:"text",value:m,onChange:function(e){return O(e.target.value)}}),Object(i.jsx)("input",{placeholder:"Enter a password",type:"text",value:v,onChange:function(e){return y(e.target.value)}}),Object(i.jsx)("input",{placeholder:"Link to an avatar",type:"text",value:C,onChange:function(e){return w(e.target.value)}}),Object(i.jsx)(u.a,{variant:"primary",type:"submit",children:"Signup"})]})]})},j=a.p+"static/media/pexels-alex-andrews.fa4e4c13.jpg",h=a(15),f=a(17);var b=function(e){e.currentUser;var t=e.feature,a=e.handleDelete,c="https://project-5-backend.herokuapp.com/",r=Object(n.useState)(!1),o=Object(s.a)(r,2),l=o[0],b=o[1],p=function(){return b(!1)},d=Object(n.useState)([]),m=Object(s.a)(d,2),O=m[0],g=m[1],x=Object(n.useState)(""),v=Object(s.a)(x,2),y=v[0],S=v[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("jwt");fetch("".concat(c,"/users"),{method:"GET",headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){e.ok?e.json().then((function(e){g(e)})):console.log("please log in")}))}),[]),Object(i.jsxs)("div",{className:"feature-card",children:[Object(i.jsxs)("h3",{children:["Assignment: ",t.name]}),Object(i.jsx)("img",{className:"feature-image",src:j,alt:"feature"}),Object(i.jsxs)("h5",{children:["Test Status: ",t.test_status]}),Object(i.jsxs)("h5",{children:["Priority: ",t.priority]}),Object(i.jsx)(h.b,{to:"/features/".concat(t.id),children:Object(i.jsx)(u.a,{variant:"primary",children:"Resources"})}),Object(i.jsx)(u.a,{variant:"primary",onClick:function(){return b(!0)},children:"Share"}),Object(i.jsxs)(f.a,{show:l,onHide:p,children:[Object(i.jsx)(f.a.Header,{closeButton:!0,children:Object(i.jsx)(f.a.Title,{children:"SHARE WITH A TEAM MEMBER"})}),Object(i.jsx)(f.a.Body,{children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert("Shared!");var a=localStorage.getItem("jwt");fetch("".concat(c,"/assignments"),{method:"POST",headers:{Authorization:"Bearer ".concat(a),Accept:"*/*","Content-type":"application/json"},body:JSON.stringify({user_id:"".concat(y),feature_id:"".concat(t.id)})}).then((function(e){return e.json()})).then((function(e){return console.log(e.id)}))},children:[Object(i.jsx)("div",{children:Object(i.jsxs)("select",{className:"select-chore-dropdown",id:"user",value:y,onChange:function(e){return S(e.target.value)},children:[Object(i.jsx)("option",{value:"",children:"Select a team member..."}),O.map((function(e){return Object(i.jsx)("option",{value:e.id,children:e.username},e.id)}))]})}),Object(i.jsx)(u.a,{className:"submit-share-button",type:"submit",children:"Submit"})]})}),Object(i.jsx)(f.a.Footer,{children:Object(i.jsx)(u.a,{variant:"secondary",onClick:p,children:"Close"})})]}),Object(i.jsx)(u.a,{variant:"secondary",onClick:function(e){a(t.id,e)},children:"Delete"})]})};var p=function(e){e.currentUser;var t="https://project-5-backend.herokuapp.com/",a=Object(n.useState)([]),c=Object(s.a)(a,2),r=c[0],o=c[1];function u(e,a){a.preventDefault();var n=localStorage.getItem("jwt");fetch("".concat(t,"/features/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).then((function(t){var a=r.filter((function(t){return t.id!==e}));o(a)}))}return Object(n.useEffect)((function(){var e=localStorage.getItem("jwt");fetch("".concat(t,"/profile"),{method:"GET",headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){e.ok?e.json().then((function(e){o(e.user.features)})):console.log("please log in")}))}),[]),Object(i.jsx)("div",{className:"dashboard-container",children:r.map((function(e){return Object(i.jsx)(b,{handleDelete:u,feature:e},e.id)}))})},d=a(52);var m=function(e){var t="https://project-5-backend.herokuapp.com/",a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],o=c[1],l=Object(n.useState)(""),j=Object(s.a)(l,2),h=j[0],f=j[1],b=Object(n.useState)(""),p=Object(s.a)(b,2),m=p[0],O=p[1],g=Object(n.useState)(""),x=Object(s.a)(g,2),v=x[0],y=x[1],S=Object(n.useState)(""),N=Object(s.a)(S,2),C=N[0],w=N[1],k=Object(n.useState)(""),_=Object(s.a)(k,2),A=_[0],E=_[1],T=Object(n.useState)(""),I=Object(s.a)(T,2),L=I[0],B=I[1],P=Object(n.useState)(""),D=Object(s.a)(P,2),z=D[0],U=D[1],F=Object(n.useState)(""),J=Object(s.a)(F,2),H=J[0],G=J[1];return Object(n.useEffect)((function(){var a=localStorage.getItem("jwt");fetch("".concat(t,"/assignments"),{method:"POST",headers:{Authorization:"Bearer ".concat(a),Accept:"*/*","Content-type":"application/json"},body:JSON.stringify({user_id:"".concat(e.currentUser.id),feature_id:"".concat(r)})}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}),[r]),Object(i.jsxs)("div",{className:"add-new-feature-container",children:[Object(i.jsx)("h1",{children:"Add a Feature or Project"}),Object(i.jsxs)(d.a,{className:"feature-form",onSubmit:function(e){e.preventDefault(),alert("Created! Navigate to your dashboard to view or edit.");var a=localStorage.getItem("jwt");fetch("".concat(t,"/features"),{method:"POST",headers:{Authorization:"Bearer ".concat(a),Accept:"*/*","Content-type":"application/json"},body:JSON.stringify({name:"".concat(h),wireframes_link:"".concat(m),test_cases_link:"".concat(v),need_access_resources:"".concat(C),test_framework:"".concat(A),project_mgmt_resources:"".concat(L),test_status:"".concat(z),priority:"".concat(H)})}).then((function(e){return e.json()})).then((function(e){return o(e.id)})),f(""),O(""),y(""),w(""),E(""),B(""),U(""),G("")},children:[Object(i.jsxs)(d.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(i.jsx)(d.a.Label,{children:"Name of Feature or Project"}),Object(i.jsx)(d.a.Control,{as:"textarea",rows:1,value:h,onChange:function(e){return f(e.target.value)}})]}),Object(i.jsx)("input",{className:"feature-form-inputs",placeholder:"Link to wireframes",type:"text",value:m,onChange:function(e){return O(e.target.value)}}),Object(i.jsx)("input",{className:"feature-form-inputs",placeholder:"Link to test suite",type:"text",value:v,onChange:function(e){return y(e.target.value)}}),Object(i.jsx)("input",{className:"feature-form-inputs",placeholder:"List all resources that you'll need access to",type:"text",value:C,onChange:function(e){return w(e.target.value)}}),Object(i.jsx)("input",{className:"feature-form-inputs",placeholder:"Which test framework are you using? Language?",type:"text",value:A,onChange:function(e){return E(e.target.value)}}),Object(i.jsx)("input",{className:"feature-form-inputs",placeholder:"Link to project management resources",type:"text",value:L,onChange:function(e){return B(e.target.value)}}),Object(i.jsx)("input",{className:"feature-form-inputs",placeholder:"What is the priority of this feature or project?",type:"text",value:z,onChange:function(e){return U(e.target.value)}}),Object(i.jsx)("input",{className:"feature-form-inputs",placeholder:"What is the test status?",type:"text",value:H,onChange:function(e){return G(e.target.value)}}),Object(i.jsx)(u.a,{variant:"secondary",type:"submit",children:"Create"})]})]})},O=a(7);var g=function(e){var t=e.message;return console.log(t),Object(i.jsx)("div",{children:Object(i.jsxs)("p",{children:[t.user.username,": ",t.message]})})};var x=function(e){var t=e.currentUser,a="https://project-5-backend.herokuapp.com/",c=Object(O.e)().id,r=Object(n.useState)([]),o=Object(s.a)(r,2),l=o[0],j=o[1],h=Object(n.useState)(""),f=Object(s.a)(h,2),b=f[0],p=f[1],d=Object(n.useState)([]),m=Object(s.a)(d,2),x=m[0],v=m[1],y=Object(n.useState)([]),S=Object(s.a)(y,2),N=S[0],C=S[1],w=Object(n.useState)(""),k=Object(s.a)(w,2),_=k[0],A=k[1],E=Object(n.useState)(""),T=Object(s.a)(E,2),I=T[0],L=T[1],B=Object(n.useState)(""),P=Object(s.a)(B,2),D=P[0],z=P[1],U=Object(n.useState)(""),F=Object(s.a)(U,2),J=F[0],H=F[1],G=Object(n.useState)(""),M=Object(s.a)(G,2),W=M[0],R=M[1],Q=Object(n.useState)(""),q=Object(s.a)(Q,2),K=q[0],V=q[1],X=Object(n.useState)(""),Y=Object(s.a)(X,2),Z=Y[0],$=Y[1],ee=Object(n.useState)(""),te=Object(s.a)(ee,2),ae=te[0],ne=te[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("jwt");fetch("".concat(a,"/features/").concat(c),{method:"GET",headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){e.ok?e.json().then((function(e){A(e.name),L(e.wireframes_link),z(e.test_cases_link),H(e.need_access_resources),R(e.test_framework),V(e.project_mgmt_resources),$(e.test_status),ne(e.priority)})):console.log("please log in")}))}),[x]),Object(n.useEffect)((function(){var e=localStorage.getItem("jwt");fetch("".concat(a,"/features/").concat(c),{method:"GET",headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){e.ok?e.json().then((function(e){j(e.messages)})):console.log("please log in")}))}),[N]),Object(i.jsxs)("div",{className:"resource-container",children:[Object(i.jsxs)("div",{className:"update-feature-container",children:[Object(i.jsx)("h2",{children:"Update Info"}),Object(i.jsxs)("form",{className:"feature-form",onSubmit:function(e){e.preventDefault(),alert("Changes saved!");var t=localStorage.getItem("jwt");fetch("".concat(a,"/features/").concat(c),{method:"PATCH",headers:{Authorization:"Bearer ".concat(t),Accept:"*/*","Content-type":"application/json"},body:JSON.stringify({name:"".concat(_),wireframes_link:"".concat(I),test_cases_link:"".concat(D),need_access_resources:"".concat(J),test_framework:"".concat(W),project_mgmt_resources:"".concat(K),test_status:"".concat(Z),priority:"".concat(ae)})}).then((function(e){return e.json()})).then((function(e){v(e)})),A(""),L(""),z(""),H(""),R(""),V(""),$(""),ne("")},children:[Object(i.jsx)("h2",{children:_}),Object(i.jsx)("input",{className:"feature-form-inputs",placeholder:"Name of feature or project",type:"text",value:_,onChange:function(e){return A(e.target.value)}}),Object(i.jsx)("input",{className:"feature-form-inputs",placeholder:"Link to wireframes",type:"text",value:I,onChange:function(e){return L(e.target.value)}}),Object(i.jsx)("input",{className:"feature-form-inputs",placeholder:"Link to test suite",type:"text",value:D,onChange:function(e){return z(e.target.value)}}),Object(i.jsx)("input",{className:"feature-form-inputs",placeholder:"List all resources that you'll need access to",type:"text",value:J,onChange:function(e){return H(e.target.value)}}),Object(i.jsx)("input",{className:"feature-form-inputs",placeholder:"Which test framework are you using? Language?",type:"text",value:W,onChange:function(e){return R(e.target.value)}}),Object(i.jsx)("input",{className:"feature-form-inputs",placeholder:"Link to project management resources",type:"text",value:K,onChange:function(e){return V(e.target.value)}}),Object(i.jsx)("input",{className:"feature-form-inputs",placeholder:"What is the test status?",type:"text",value:Z,onChange:function(e){return $(e.target.value)}}),Object(i.jsx)("input",{className:"feature-form-inputs",placeholder:"What is the priority of this feature or project?",type:"text",value:ae,onChange:function(e){return ne(e.target.value)}}),Object(i.jsx)(u.a,{variant:"primary",type:"submit",children:"Update"})]})]}),Object(i.jsxs)("div",{className:"messages-container",children:[Object(i.jsx)("h2",{children:"Messages"}),Object(i.jsx)("div",{className:"message-block",children:l.map((function(e){return Object(i.jsx)(g,{message:e},e.id)}))}),Object(i.jsxs)("form",{className:"feature-form",onSubmit:function(e){e.preventDefault();var n=localStorage.getItem("jwt");fetch("".concat(a,"/messages"),{method:"POST",headers:{Authorization:"Bearer ".concat(n),Accept:"*/*","Content-type":"application/json"},body:JSON.stringify({message:"".concat(b),user_id:"".concat(t.id),feature_id:"".concat(c)})}).then((function(e){return e.json()})).then((function(e){C(e)})),p("")},children:[Object(i.jsx)("input",{className:"message-inputs",placeholder:"Type here...",type:"text",value:b,onChange:function(e){return p(e.target.value)}}),Object(i.jsx)(u.a,{variant:"primary",type:"submit",children:"Send Message"})]})]})]})};var v=function(){var e="https://project-5-backend.herokuapp.com/",t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(!1),j=Object(s.a)(o,2),f=j[0],b=j[1];return Object(n.useEffect)((function(){var t=localStorage.getItem("jwt");fetch("".concat(e,"/profile"),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){e.ok?e.json().then((function(e){b(!0),r(e.user)})):console.log("please log in")}))}),[]),Object(i.jsx)("div",{className:"App",children:f?Object(i.jsxs)(h.a,{children:[Object(i.jsxs)("nav",{className:"navbar-container",children:[c?Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Q-llaborate"}),Object(i.jsxs)("h1",{children:["Hi ",c.username]}),Object(i.jsx)("img",{src:c.avatar,className:"avatar",alt:"avatar"})]}):"",Object(i.jsx)(h.b,{to:"/",children:Object(i.jsx)(u.a,{variant:"primary",className:"nav-button",type:"button",children:"Dashboard"})}),Object(i.jsx)(h.b,{to:"/featureform",children:Object(i.jsx)(u.a,{variant:"primary",className:"nav-button",type:"button",children:"Add a New Feature"})}),Object(i.jsx)(u.a,{variant:"primary",className:"nav-button",onClick:function(){localStorage.clear(),r(null),b(!1)},children:"Logout"}),Object(i.jsx)("p",{className:"footer-sources",children:"Photo by Alex Andrews from Pexels"})]}),Object(i.jsx)(O.a,{exact:!0,path:"/",children:Object(i.jsx)(p,{currentUser:c})}),Object(i.jsx)(O.a,{exact:!0,path:"/featureform",children:Object(i.jsx)(m,{currentUser:c})}),Object(i.jsx)(O.a,{exact:!0,path:"/features/:id",children:Object(i.jsx)(x,{currentUser:c})})]}):Object(i.jsx)(l,{login:function(t,a){fetch("".concat(e,"/login"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:{username:"".concat(t),password:"".concat(a)}})}).then((function(e){e.ok?e.json().then((function(e){console.log("hi"+e.jwt),r(e.user),b(!0),localStorage.setItem("jwt",e.jwt)})):console.log("wrong username/password")}))},signup:function(t,a,n){fetch("".concat(e,"/users"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:{username:"".concat(t),password:"".concat(a),avatar:"".concat(n)}})}).then((function(e){e.ok?e.json().then((function(e){r(e.user),b(!0),localStorage.setItem("jwt",e.jwt)})):console.log("form incorrectly filled out")}))}})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,53)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};a(48);o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),y()}},[[49,1,2]]]);
//# sourceMappingURL=main.a824a9ad.chunk.js.map