(this.webpackJsonpwallpaper=this.webpackJsonpwallpaper||[]).push([[0],{15:function(e,t,a){e.exports=a(39)},20:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),s=(a(20),a(7)),o=a.n(s),l=a(14),u=a(1),m=a(2),h=a(5),g=a(3),d=a(6),p=a(4),f=a.n(p),v=(a(36),a(37),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;a.setState({searchQuery:t})},a.state={searchQuery:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row justify-content-sm-center justify-content-xs-center"},r.a.createElement("div",{className:"col-8"},r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"cool images"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search Wallpaper",onChange:this.handleChange}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return e.props.handleSearch(e.state.searchQuery)}},"Search"))))))}}]),t}(r.a.Component)),b=(a(38),function(e){var t=e.url,a=e.altTag,n=e.creator,c=e.imageHeight;return r.a.createElement("div",{className:"col-sm-4 col-xs-12"},r.a.createElement("figure",{className:"img-container"},r.a.createElement("img",{src:t,alt:a,by:n,ucchota:c})))}),E=function(e){var t=e.imageList;return r.a.createElement("div",{className:"row"},t.map((function(e){var t=e.urls,a=e.alt_description,n=e.user,c=e.height,i=e.id;return r.a.createElement(b,{url:t.regular,altTag:a,creator:n.name,imageHeight:c,key:i})})))},y=new f.a({accessKey:"b786e854357efbb259dee5818d49e2a48bfe46b2a04b28dea58c96763f33a52f"}),w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).getImage=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.queryString,e.next=3,y.search.photos(t,1,30).then(p.toJson).then((function(e){a.setState({imageList:e.results})}));case 3:case"end":return e.stop()}}),e)}))),a.handleSearch=function(e){a.setState({queryString:e},(function(){return a.getImage()}))},a.state={queryString:"",imageList:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.imageList;return r.a.createElement("div",{className:"App"},r.a.createElement(v,{handleSearch:this.handleSearch}),r.a.createElement("section",{className:"gallery"},r.a.createElement("div",{className:"container"},r.a.createElement(E,{imageList:e}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.81838251.chunk.js.map