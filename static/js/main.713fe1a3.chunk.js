(this.webpackJsonpfountain_react=this.webpackJsonpfountain_react||[]).push([[0],{12:function(t,i,e){},14:function(t,i,e){"use strict";e.r(i);var n=e(0),s=e.n(n),a=e(6),r=e.n(a),h=(e(12),e(7)),c=e(5),o=e(3),u=e(4),d=function(t){return Math.random()*(t[1]-t[0])+t[0]},v=function(t){return Promise.all(t.map((function(t){return function(t){return new Promise((function(i,e){var n=new Image;n.src=t,n.onload=function(){return i(n)},n.onerror=function(t){return e(t)}}))}(t)})))},f=function(){var t=0;return function(i){var e=i<500?0:i-t;return t=i,e}}(),m=function(){function t(i){Object(o.a)(this,t),this.animationSpeed=i.animationSpeed,this.power=i.power,this.spreadAngle=i.spreadAngle,this.g=i.gravity,this.itemsSize=[i.minItemsSize,i.maxItemsSize],this.rotationSpeed=i.rotationSpeed,this.skin=i.skin,this.canvas=i.canvasRef,this.id=i.id,this.resetParams(),this.t=d([-10,0])}return Object(u.a)(t,[{key:"resetParams",value:function(){this.t=0,this.shotAngle=d([Math.PI*(180-this.spreadAngle)/360,Math.PI*(180+this.spreadAngle)/360]),this.width=d(this.itemsSize),this.x=(this.canvas.current.width-this.width)/2,this.y=this.canvas.current.height}},{key:"incrementTime",value:function(){this.t+=this.animationSpeed*t.period/1e3}},{key:"hidden",value:function(){var t=this.canvas.current;return this.y>t.height+2*this.width||this.y<-2*this.width||this.x>t.width+2*this.width||this.x<-2*this.width}},{key:"move",value:function(){var t=this.canvas.current;this.incrementTime(),this.x=(t.width-this.width)/2+this.power*this.t*Math.cos(this.shotAngle),this.y=t.height-this.power*this.t*Math.sin(this.shotAngle)+this.g*this.t*this.t/2,this.hidden()&&this.resetParams()}},{key:"render",value:function(){var t=this.canvas.current.getContext("2d");t.save(),t.translate(this.x+this.width/2,this.y+this.width/2),t.rotate(this.t*this.rotationSpeed*(this.id%2*2-1)),t.translate(-this.x-this.width/2,-this.y-this.width/2),t.drawImage(this.skin,this.x,this.y,this.width,this.width),t.restore(),this.move()}}]),t}(),g=function(){function t(i){var e=this;Object(o.a)(this,t),this.state=i,this.canvas=i.canvasRef,this.setCanvasSize(),window.addEventListener("resize",(function(){return e.setCanvasSize()})),this.id=this.canvas.current.id}return Object(u.a)(t,[{key:"setCanvasSize",value:function(){this.canvas.current.width=window.innerWidth,this.canvas.current.height=window.innerHeight}},{key:"createItems",value:function(){var i=this;return v(this.state.imgSkins).then((function(e){for(var n=[],s=0;s<i.state.itemsNumber;s++)n.push(new m(Object(c.a)(Object(c.a)({},i.state),{},{skin:e[s%e.length],id:s})));return t[i.id]=t[i.id]?[].concat(Object(h.a)(t[i.id]),n):n,t[i.id]}))}},{key:"start",value:function(){var i=this;this.createItems().then((function(){var e=i.canvas.current.getContext("2d");i.requestAnimation=requestAnimationFrame((function n(s){m.period=f(s),e.clearRect(0,0,i.canvas.current.width,i.canvas.current.height),t[i.id].forEach((function(t){return t.render()})),i.requestAnimation=requestAnimationFrame(n)}))}),(function(){return console.log("Images loading error")}))}},{key:"destroy",value:function(){cancelAnimationFrame(this.requestAnimation)}}]),t}(),w=e.p+"static/media/coin1.2831f4f9.svg",l=e.p+"static/media/coin2.323f5163.svg",p=e(1),y=function(){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){var i=new g({animationSpeed:2.9,power:155,itemsNumber:52,spreadAngle:99,gravity:8,minItemsSize:215,maxItemsSize:421,rotationSpeed:.7,imgSkins:[w,l],canvasRef:t});return i.start(),function(){return i.destroy()}}),[]),Object(p.jsx)("canvas",{id:"fountain1",ref:t})},S=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,15)).then((function(i){var e=i.getCLS,n=i.getFID,s=i.getFCP,a=i.getLCP,r=i.getTTFB;e(t),n(t),s(t),a(t),r(t)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),S()}},[[14,1,2]]]);
//# sourceMappingURL=main.713fe1a3.chunk.js.map