(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,a,e){t.exports={balance:"Balance_balance__2PdzU",span:"Balance_span__1gTYZ"}},2:function(t,a,e){t.exports={history:"TransactionHistory_history__31Mob",thead:"TransactionHistory_thead__JXuEM",td:"TransactionHistory_td__QeumV",th:"TransactionHistory_th__2cld5"}},20:function(t,a,e){t.exports=e(39)},39:function(t,a,e){"use strict";e.r(a);var n=e(1),r=e.n(n),o=e(8),c=e.n(o),s=e(3),l=e(4),i=e(6),u=e(5),m=e(7),h=e(19),p=e(16),b=e.n(p),d=e(13),f=(e(34),e(9)),E=e.n(f),y=function(t){function a(){var t,e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=Object(i.a)(this,(t=Object(u.a)(a)).call.apply(t,[this].concat(r)))).state={amount:""},e.notify=function(t){return Object(d.b)(t)},e.handleInputChange=function(t){e.setState({amount:t.target.value})},e.handleOperation=function(t){"withdraw"===t.target.name&&e.state.amount>e.props.balance?e.notify("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!"):0!==e.state.amount&&""!==e.state.amount?(e.props.onTransaction(e.state.amount,t.target.name),e.setState({amount:""})):e.notify("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!")},e}return Object(m.a)(a,t),Object(l.a)(a,[{key:"render",value:function(){var t=this.state.amount;return r.a.createElement("section",{className:E.a.controls},r.a.createElement("input",{className:E.a.input,type:"number",name:"text",value:t,onChange:this.handleInputChange}),r.a.createElement("button",{className:E.a.button,type:"button",name:"Deposit",onClick:this.handleOperation},"Deposit"),r.a.createElement("button",{className:E.a.button,type:"button",name:"Withdraw",onClick:this.handleOperation},"Withdraw"),r.a.createElement(d.a,null))}}]),a}(n.Component),_=e(11),w=e.n(_),N=function(t){var a=t.balance,e=t.totalDeposits,n=t.totalWithdraws;return r.a.createElement("section",{className:w.a.balance},r.a.createElement("span",{className:w.a.span}," + ",e," $ "),r.a.createElement("span",{className:w.a.span}," - ",n," $ "),r.a.createElement("span",{className:w.a.span}," Balance: ",a," $ "))},O=e(2),j=e.n(O),v=function(t){var a=t.transactions;return r.a.createElement("table",{className:j.a.history},r.a.createElement("thead",{className:j.a.thead},r.a.createElement("tr",null,r.a.createElement("th",{className:j.a.th},"Transaction"),r.a.createElement("th",{className:j.a.th},"Amount"),r.a.createElement("th",{className:j.a.th},"Date"))),r.a.createElement("tbody",null,a.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{className:j.a.td},t.type),r.a.createElement("td",{className:j.a.td},t.amount," $"),r.a.createElement("td",{className:j.a.td},t.date))})))},g=function(t){function a(){var t,e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=Object(i.a)(this,(t=Object(u.a)(a)).call.apply(t,[this].concat(r)))).state={transactions:[],balance:0,totalDeposits:0,totalWithdraws:0},e.handleNewTransaction=function(t,a){var n={id:b.a.generate(),type:a,amount:t,date:(new Date).toLocaleString()};e.setState(function(t){return{transactions:[].concat(Object(h.a)(t.transactions),[n])}}),"Withdraw"===a&&e.setState(function(a){return{balance:a.balance-t,totalWithdraws:a.totalWithdraws+Number(t)}}),"Deposit"===a&&e.setState(function(a){return{balance:a.balance+Number(t),totalDeposits:a.totalDeposits+Number(t)}})},e}return Object(m.a)(a,t),Object(l.a)(a,[{key:"render",value:function(){var t=this.state,a=t.balance,e=t.totalDeposits,n=t.totalWithdraws,o=t.transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{onTransaction:this.handleNewTransaction,balance:a}),r.a.createElement(N,{balance:a,totalDeposits:e,totalWithdraws:n}),r.a.createElement(v,{transactions:o}))}}]),a}(n.Component),C=function(t){function a(){var t,e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=Object(i.a)(this,(t=Object(u.a)(a)).call.apply(t,[this].concat(r)))).state={},e}return Object(m.a)(a,t),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(g,null)}}]),a}(n.Component);c.a.render(r.a.createElement(C,null),document.getElementById("root"))},9:function(t,a,e){t.exports={controls:"Controls_controls__1sLFR",button:"Controls_button__mR32j",input:"Controls_input__BYPWB"}}},[[20,1,2]]]);
//# sourceMappingURL=main.c4b9da16.chunk.js.map