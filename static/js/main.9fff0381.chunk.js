(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={label:"Filter_label__OHgUQ",input:"Filter_input__3FS-3"}},17:function(t,e,n){t.exports={title:"Title_title__3aZWI"}},26:function(t,e,n){},27:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),i=(n(26),n(27),n(17)),s=n.n(i),l=n(1);var u=function(t){var e=t.title;return Object(l.jsx)("h1",{className:s.a.title,children:e})},b=n(16),j=n(5),m=n(3),d=n(40),f={addContact:Object(m.b)("contacts/add",(function(t,e){return{payload:{name:t,number:e,id:Object(d.a)()}}})),removeContact:Object(m.b)("contacts/remove"),changeFilter:Object(m.b)("contacts/changeFilter")},O=n(6),p=n.n(O);var h=Object(j.b)((function(t){return{contacts:t.items}}),(function(t){return{onSubmit:function(e,n){return t(f.addContact(e,n))}}}))((function(t){var e=t.contacts,n=t.onSubmit,c=Object(a.useState)(""),r=Object(b.a)(c,2),o=r[0],i=r[1],s=Object(a.useState)(""),u=Object(b.a)(s,2),j=u[0],m=u[1],d=function(t){var e=t.currentTarget.value;switch(t.currentTarget.name){case"name":i(e);break;case"number":m(e)}},f=function(){i(""),m("")};return Object(l.jsxs)("form",{className:p.a.form,onSubmit:function(t){t.preventDefault(),e.find((function(t){return t.name.toLowerCase()===o.toLowerCase()}))?alert(o+" is already in contacts"):(n(o,j),f())},children:[Object(l.jsxs)("label",{className:p.a.label,children:["Name",Object(l.jsx)("input",{className:p.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:o,onChange:d,autoComplete:"off"})]}),Object(l.jsxs)("label",{className:p.a.label,children:["Number",Object(l.jsx)("input",{className:p.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:j,onChange:d,autoComplete:"off"})]}),Object(l.jsx)("button",{type:"submit",className:p.a.button,children:"Add contact"})]})})),C=n(15),_=n.n(C);var x=Object(j.b)(null,(function(t){return{onChange:function(e){return t(f.changeFilter(e))}}}))((function(t){var e=t.onChange;return Object(l.jsxs)("label",{className:_.a.label,children:["Find contacts by name",Object(l.jsx)("input",{className:_.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(t){var n=t.currentTarget.value;e(n)},autoComplete:"off"})]})})),v=n(7),g=n.n(v);var N=function(t,e){return t.filter((function(t){return t.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())}))},y=Object(j.b)((function(t){var e=t.items,n=t.filter;return{contacts:N(e,n)}}),(function(t){return{removeContact:function(e){return t(f.removeContact(e))}}}))((function(t){var e=t.contacts,n=t.removeContact;return Object(l.jsx)("ul",{className:g.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(l.jsxs)("li",{className:g.a.contactItem,children:[Object(l.jsx)("p",{className:g.a.text,children:a}),Object(l.jsx)("p",{className:g.a.number,children:c}),Object(l.jsx)("button",{className:g.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})}));function A(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{title:"Phonebook"}),Object(l.jsx)(h,{}),Object(l.jsx)(u,{title:"Contacts"}),Object(l.jsx)(x,{}),Object(l.jsx)(y,{})]})}var F,L=n(19),k=n(11),w=n(20),z=n.n(w),S=n(12),Z=n(2),q=Object(m.c)([],(F={},Object(S.a)(F,f.addContact,(function(t,e){var n=e.payload;return[].concat(Object(k.a)(t),[n])})),Object(S.a)(F,f.removeContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),F)),I=Object(m.c)("",Object(S.a)({},f.changeFilter,(function(t,e){return e.payload}))),T=Object(Z.b)({items:q,filter:I}),J=n(21),B=n.n(J),M=n(4),Y=[].concat(Object(k.a)(Object(m.d)({serializableCheck:{ignoredActions:[M.a,M.f,M.b,M.c,M.d,M.e]}})),[B.a]),D={key:"contacts",storage:z.a,blacklist:["filter"]},H=Object(m.a)({reducer:Object(M.g)(D,T),middleware:Y,devTools:!1}),Q={store:H,persistor:Object(M.h)(H)};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j.a,{store:Q.store,children:Object(l.jsx)(L.a,{loading:null,persistor:Q.persistor,children:Object(l.jsx)(A,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__YUbda",label:"ContactForm_label__2s_7I",input:"ContactForm_input__3qvuO",button:"ContactForm_button__2HKvX"}},7:function(t,e,n){t.exports={list:"ContactList_list__TOR9C",contactItem:"ContactList_contactItem__1JqlS",text:"ContactList_text__1YqxG",number:"ContactList_number__2jjSO",button:"ContactList_button__j6YlQ"}}},[[38,1,2]]]);
//# sourceMappingURL=main.9fff0381.chunk.js.map