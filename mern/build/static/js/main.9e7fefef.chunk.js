(this.webpackJsonpfirstapp=this.webpackJsonpfirstapp||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var a=i(0),r=i(1),s=i.n(r),n=i(8),u=i.n(n),o=i(2),l=i(3),c=i(5),m=i(4);var d=function(e){return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)("hr",{}),Object(a.jsx)("center",{children:Object(a.jsxs)("h3",{children:["\xa9 NareshIT ",e.year," ",e.month]})})]})},p=(i(14),function(e){Object(c.a)(i,e);var t=Object(m.a)(i);function i(){var e;return Object(o.a)(this,i),(e=t.call(this)).handleChange=function(t){e.setState({keyword:t.target.value?t.target.value:"User Text Here"}),e.props.userText(t.target.value)},e.state={title:"React App",keyword:"User Text Here"},e}return Object(l.a)(i,[{key:"render",value:function(){return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("div",{className:"logo",children:this.state.title}),Object(a.jsxs)("center",{children:[Object(a.jsx)("input",{onChange:this.handleChange}),Object(a.jsx)("div",{style:{color:"white"},children:this.state.keyword})]})]}),Object(a.jsx)("hr",{})]})}}]),i}(r.Component)),v=i(6),h=function(e){console.log("In Display",e);var t=e.newsdata.map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:e.title}),Object(a.jsx)("p",{children:e.feed})]})}));return Object(a.jsx)("div",{children:t})},j=function(e){Object(c.a)(i,e);var t=Object(m.a)(i);function i(){var e;return Object(o.a)(this,i),(e=t.call(this)).filterNews=function(t){console.log("in home ",t);var i=e.state.news.filter((function(e){return e.title.toLowerCase().indexOf(t.toLowerCase())>-1}));e.setState({filtered:i})},e.state={news:v,filtered:v},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this;return console.log(v),Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)(p,{userText:function(t){e.filterNews(t)}}),Object(a.jsx)(h,{newsdata:this.state.filtered}),Object(a.jsx)(d,{year:"2021",month:"Nov"})]})}}]),i}(r.Component);u.a.render(Object(a.jsx)(j,{}),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"id":1,"title":"New ES6 upgrade available $","feed":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto"},{"id":2,"title":"The importance of & REACT in the development","feed":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"},{"id":3,"title":"REACT developers going on strike","feed":"It is propaganda: India on social media posts alleging harassment of Muslims"},{"id":4,"title":"Say what again. I dare you,...x","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{"id":5,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{"id":6,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{"id":7,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.9e7fefef.chunk.js.map