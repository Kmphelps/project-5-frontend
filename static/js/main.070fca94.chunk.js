(this["webpackJsonptest-resource-mgr"]=this["webpackJsonptest-resource-mgr"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),s=(n(29),n(3)),u=(n(30),n(1));var i=function(e){var t=e.login,n=e.signup,c=Object(a.useState)(""),r=Object(s.a)(c,2),o=r[0],i=r[1],l=Object(a.useState)(""),j=Object(s.a)(l,2),h=j[0],b=j[1],f=Object(a.useState)(""),p=Object(s.a)(f,2),d=p[0],O=p[1],m=Object(a.useState)(""),g=Object(s.a)(m,2),x=g[0],v=g[1],S=Object(a.useState)(""),y=Object(s.a)(S,2),N=y[0],C=y[1];return Object(u.jsxs)("div",{className:"landing-page-container",children:[Object(u.jsx)("h1",{children:"TEST RESOURCE MANAGER"}),Object(u.jsxs)("form",{className:"login-form",onSubmit:function(e){return function(e){e.preventDefault(),t(o,h)}(e)},children:[Object(u.jsx)("h3",{children:"Login Here"}),Object(u.jsx)("input",{placeholder:"Enter a username",type:"text",value:o,onChange:function(e){return i(e.target.value)}}),Object(u.jsx)("input",{placeholder:"Enter a password",type:"text",value:h,onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Login"})]}),Object(u.jsxs)("form",{className:"signup-form",onSubmit:function(e){return function(e){e.preventDefault(),n(d,x,N)}(e)},children:[Object(u.jsx)("h3",{children:"Create a New Account Here"}),Object(u.jsx)("input",{placeholder:"Enter a username",type:"text",value:d,onChange:function(e){return O(e.target.value)}}),Object(u.jsx)("input",{placeholder:"Enter a password",type:"text",value:x,onChange:function(e){return v(e.target.value)}}),Object(u.jsx)("input",{placeholder:"Link to an avatar",type:"text",value:N,onChange:function(e){return C(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Signup"})]})]})},l=n.p+"static/media/pexels-alex-andrews.fa4e4c13.jpg",j=n(13),h=n(22),b=n(14);var f=function(e){e.currentUser;var t=e.feature,n=Object(a.useState)(!1),c=Object(s.a)(n,2),r=c[0],o=c[1],i=function(){return o(!1)},f=Object(a.useState)([]),p=Object(s.a)(f,2),d=p[0],O=p[1],m=Object(a.useState)(""),g=Object(s.a)(m,2),x=g[0],v=g[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("jwt");fetch("http://localhost:3000/users",{method:"GET",headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){e.ok?e.json().then((function(e){O(e)})):console.log("please log in")}))}),[]),Object(u.jsxs)("div",{className:"feature-card",children:[Object(u.jsxs)("h2",{children:["Assignment: ",t.name]}),Object(u.jsx)("img",{className:"feature-image",src:l,alt:"feature"}),Object(u.jsxs)("h3",{children:["Test Status: ",t.test_status]}),Object(u.jsxs)("h3",{children:["Priority: ",t.priority]}),Object(u.jsx)(j.b,{to:"/features/".concat(t.id),children:Object(u.jsx)("button",{type:"button",children:"Resources"})}),Object(u.jsx)(h.a,{variant:"primary",onClick:function(){return o(!0)},children:"Share"}),Object(u.jsxs)(b.a,{show:r,onHide:i,children:[Object(u.jsx)(b.a.Header,{closeButton:!0,children:Object(u.jsx)(b.a.Title,{children:"Select another user to share this feature/project with"})}),Object(u.jsx)(b.a.Body,{children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=localStorage.getItem("jwt");fetch("http://localhost:3000/assignments",{method:"POST",headers:{Authorization:"Bearer ".concat(n),Accept:"*/*","Content-type":"application/json"},body:JSON.stringify({user_id:"".concat(x),feature_id:"".concat(t.id)})}).then((function(e){return e.json()})).then((function(e){return console.log(e.id)}))},children:[Object(u.jsx)("h2",{children:"Add a User"}),Object(u.jsx)("div",{children:Object(u.jsxs)("select",{className:"select-chore-dropdown",id:"user",value:x,onChange:function(e){return v(e.target.value)},children:[Object(u.jsx)("option",{value:"",children:"Select user..."}),d.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.username},e.id)}))]})}),Object(u.jsx)("button",{className:"submit",type:"submit",children:"Submit"})]})}),Object(u.jsx)(b.a.Footer,{children:Object(u.jsx)(h.a,{variant:"secondary",onClick:i,children:"Close"})})]})]})};var p=function(e){e.currentUser;var t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("jwt");fetch("http://localhost:3000/profile",{method:"GET",headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){e.ok?e.json().then((function(e){r(e.user.features)})):console.log("please log in")}))}),[]),Object(u.jsx)("div",{className:"dashboard-container",children:c.map((function(e){return Object(u.jsx)(f,{feature:e},e.id)}))})};var d=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),l=i[0],j=i[1],h=Object(a.useState)(""),b=Object(s.a)(h,2),f=b[0],p=b[1],d=Object(a.useState)(""),O=Object(s.a)(d,2),m=O[0],g=O[1],x=Object(a.useState)(""),v=Object(s.a)(x,2),S=v[0],y=v[1],N=Object(a.useState)(""),C=Object(s.a)(N,2),w=C[0],_=C[1],k=Object(a.useState)(""),A=Object(s.a)(k,2),E=A[0],T=A[1],L=Object(a.useState)(""),I=Object(s.a)(L,2),P=I[0],B=I[1],U=Object(a.useState)(""),z=Object(s.a)(U,2),F=z[0],J=z[1];return console.log(e.currentUser.id),Object(a.useEffect)((function(){var t=localStorage.getItem("jwt");fetch("http://localhost:3000/assignments",{method:"POST",headers:{Authorization:"Bearer ".concat(t),Accept:"*/*","Content-type":"application/json"},body:JSON.stringify({user_id:"".concat(e.currentUser.id),feature_id:"".concat(c)})}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}),[c]),Object(u.jsxs)("div",{className:"add-new-feature-container",children:[Object(u.jsx)("h1",{children:"Add a Feature or Project"}),Object(u.jsxs)("form",{className:"feature-form",onSubmit:function(e){e.preventDefault();var t=localStorage.getItem("jwt");fetch("http://localhost:3000/features",{method:"POST",headers:{Authorization:"Bearer ".concat(t),Accept:"*/*","Content-type":"application/json"},body:JSON.stringify({name:"".concat(l),wireframes_link:"".concat(f),test_cases_link:"".concat(m),need_access_resources:"".concat(S),test_framework:"".concat(w),project_mgmt_resources:"".concat(E),test_status:"".concat(P),priority:"".concat(F)})}).then((function(e){return e.json()})).then((function(e){return r(e.id)})),j(""),p(""),g(""),y(""),_(""),T(""),B(""),J("")},children:[Object(u.jsx)("input",{className:"feature-form-inputs",placeholder:"Name of feature or project",type:"text",value:l,onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("input",{className:"feature-form-inputs",placeholder:"Link to wireframes",type:"text",value:f,onChange:function(e){return p(e.target.value)}}),Object(u.jsx)("input",{className:"feature-form-inputs",placeholder:"Link to test suite",type:"text",value:m,onChange:function(e){return g(e.target.value)}}),Object(u.jsx)("input",{className:"feature-form-inputs",placeholder:"List all resources that you'll need access to",type:"text",value:S,onChange:function(e){return y(e.target.value)}}),Object(u.jsx)("input",{className:"feature-form-inputs",placeholder:"Which test framework are you using? Language?",type:"text",value:w,onChange:function(e){return _(e.target.value)}}),Object(u.jsx)("input",{className:"feature-form-inputs",placeholder:"Link to project management resources",type:"text",value:E,onChange:function(e){return T(e.target.value)}}),Object(u.jsx)("input",{className:"feature-form-inputs",placeholder:"What is the priority of this feature or project?",type:"text",value:P,onChange:function(e){return B(e.target.value)}}),Object(u.jsx)("input",{className:"feature-form-inputs",placeholder:"What is the test status?",type:"text",value:F,onChange:function(e){return J(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Create"})]})]})},O=n(4);var m=function(){var e=Object(O.e)().id,t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),l=i[0],j=i[1],h=Object(a.useState)(""),b=Object(s.a)(h,2),f=b[0],p=b[1],d=Object(a.useState)(""),m=Object(s.a)(d,2),g=m[0],x=m[1],v=Object(a.useState)(""),S=Object(s.a)(v,2),y=S[0],N=S[1],C=Object(a.useState)(""),w=Object(s.a)(C,2),_=w[0],k=w[1],A=Object(a.useState)(""),E=Object(s.a)(A,2),T=E[0],L=E[1],I=Object(a.useState)(""),P=Object(s.a)(I,2),B=P[0],U=P[1],z=Object(a.useState)(""),F=Object(s.a)(z,2),J=F[0],D=F[1];return Object(a.useEffect)((function(){var t=localStorage.getItem("jwt");fetch("http://localhost:3000/features/".concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){e.ok?e.json().then((function(e){console.log(e),j(e.name),p(e.wireframes_link),x(e.test_cases_link),N(e.need_access_resources),k(e.test_framework),L(e.project_mgmt_resources),U(e.test_status),D(e.priority)})):console.log("please log in")}))}),[c]),Object(u.jsxs)("div",{className:"resource-container",children:[Object(u.jsxs)("div",{className:"update-feature-container",children:[Object(u.jsx)("h2",{children:"Update Info"}),Object(u.jsxs)("form",{className:"feature-form",onSubmit:function(t){t.preventDefault();var n=localStorage.getItem("jwt");fetch("http://localhost:3000/features/".concat(e),{method:"PATCH",headers:{Authorization:"Bearer ".concat(n),Accept:"*/*","Content-type":"application/json"},body:JSON.stringify({name:"".concat(l),wireframes_link:"".concat(f),test_cases_link:"".concat(g),need_access_resources:"".concat(y),test_framework:"".concat(_),project_mgmt_resources:"".concat(T),test_status:"".concat(B),priority:"".concat(J)})}).then((function(e){return e.json()})).then((function(e){return r(e.id)})),j(""),p(""),x(""),N(""),k(""),L(""),U(""),D("")},children:[Object(u.jsx)("h2",{children:l}),Object(u.jsx)("input",{className:"feature-form-inputs",placeholder:"Name of feature or project",type:"text",value:l,onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("input",{className:"feature-form-inputs",placeholder:"Link to wireframes",type:"text",value:f,onChange:function(e){return p(e.target.value)}}),Object(u.jsx)("input",{className:"feature-form-inputs",placeholder:"Link to test suite",type:"text",value:g,onChange:function(e){return x(e.target.value)}}),Object(u.jsx)("input",{className:"feature-form-inputs",placeholder:"List all resources that you'll need access to",type:"text",value:y,onChange:function(e){return N(e.target.value)}}),Object(u.jsx)("input",{className:"feature-form-inputs",placeholder:"Which test framework are you using? Language?",type:"text",value:_,onChange:function(e){return k(e.target.value)}}),Object(u.jsx)("input",{className:"feature-form-inputs",placeholder:"Link to project management resources",type:"text",value:T,onChange:function(e){return L(e.target.value)}}),Object(u.jsx)("input",{className:"feature-form-inputs",placeholder:"What is the test status?",type:"text",value:B,onChange:function(e){return U(e.target.value)}}),Object(u.jsx)("input",{className:"feature-form-inputs",placeholder:"What is the priority of this feature or project?",type:"text",value:J,onChange:function(e){return D(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Update"})]}),Object(u.jsx)("button",{children:"Leave Project / Feature"})]}),Object(u.jsx)("div",{className:"messages-container",children:Object(u.jsx)("h2",{children:"Messages"})})]})};var g=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),o=Object(s.a)(r,2),l=o[0],h=o[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("jwt");console.log("token: "+e),fetch("http://localhost:3000/profile",{method:"GET",headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){e.ok?e.json().then((function(e){h(!0),c(e.user)})):console.log("please log in")}))}),[]),Object(u.jsx)("div",{className:"App",children:l?Object(u.jsxs)(j.a,{children:[Object(u.jsxs)("nav",{className:"navbar-container",children:[n?Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"TEST RESOURCE MANAGER"}),Object(u.jsxs)("h1",{children:["Hi ",n.username]}),Object(u.jsx)("img",{src:n.avatar,className:"avatar",alt:"avatar"})]}):"",Object(u.jsx)(j.b,{to:"/",children:Object(u.jsx)("button",{className:"nav-button",type:"button",children:"Dashboard"})}),Object(u.jsx)(j.b,{to:"/featureform",children:Object(u.jsx)("button",{className:"nav-button",type:"button",children:"Add a New Feature"})}),Object(u.jsx)("button",{className:"nav-button",onClick:function(){localStorage.clear(),c(null),h(!1)},children:"Logout"}),Object(u.jsx)("p",{className:"footer-sources",children:"Photo by Alex Andrews from Pexels"})]}),Object(u.jsx)(O.a,{exact:!0,path:"/",children:Object(u.jsx)(p,{currentUser:n})}),Object(u.jsx)(O.a,{exact:!0,path:"/featureform",children:Object(u.jsx)(d,{currentUser:n})}),Object(u.jsx)(O.a,{exact:!0,path:"/features/:id",children:Object(u.jsx)(m,{currentUser:n})})]}):Object(u.jsx)(i,{login:function(e,t){fetch("http://localhost:3000/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:{username:"".concat(e),password:"".concat(t)}})}).then((function(e){e.ok?e.json().then((function(e){console.log("hi"+e.jwt),c(e.user),h(!0),localStorage.setItem("jwt",e.jwt)})):console.log("wrong username/password")}))},signup:function(e,t,n){fetch("http://localhost:3000/users",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:{username:"".concat(e),password:"".concat(t),avatar:"".concat(n)}})}).then((function(e){e.ok?e.json().then((function(e){c(e.user),h(!0),localStorage.setItem("jwt",e.jwt)})):console.log("form incorrectly filled out")}))}})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};n(40);o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),x()}},[[41,1,2]]]);
//# sourceMappingURL=main.070fca94.chunk.js.map