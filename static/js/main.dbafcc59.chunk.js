(window.webpackJsonpitfb_test=window.webpackJsonpitfb_test||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(2),r=n.n(c),l=(n(14),n(3)),i=n(4),s=n(7),u=n(5),m=n(8);n(15),n(16),n(17);var d=function(e){return o.a.createElement("div",{className:"Card"},o.a.createElement("img",{src:e.item.url}),o.a.createElement("h2",null,e.item.title),o.a.createElement("p",null,"AlbumId:"+e.item.albumId))},h=n(6),f=n.n(h),p=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"GetPhotos",value:function(){var e;return f.a.ajax({url:" https://jsonplaceholder.typicode.com/photos",async:!1,type:"get",success:function(t){e=t},error:function(){e="",alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438!")}}),e}},{key:"render",value:function(){var e=this.GetPhotos().slice(0,20);return console.log(e),o.a.createElement("div",null,o.a.createElement("h1",null,"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0432 \u0446\u0438\u043a\u043b\u0435"),o.a.createElement("p",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0438\u0441\u0435\u0439: "+e.length),o.a.createElement("div",{className:"cards_place"},e.map(function(e){return console.log(e),o.a.createElement(d,{item:e})})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.dbafcc59.chunk.js.map