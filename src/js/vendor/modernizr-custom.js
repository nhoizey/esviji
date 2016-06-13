/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-cssvhunit-cssvminunit-cssvwunit-flexbox-inlinesvg-smil-svg-webaudio-setclasses !*/
!function(e,t,n){function o(e,t){return typeof e===t}function r(){var e,t,n,r,i,s,a;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],t=S[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),w.push((r?"":"no-")+a.join("-"))}}function i(e){var t=x.className,n=Modernizr._config.classPrefix||"";if(T&&(t=t.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),T?x.className.baseVal=t:x.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){return e-1===t||e===t||e+1===t}function l(){var e=t.body;return e||(e=s(T?"svg":"body"),e.fake=!0),e}function d(e,n,o,r){var i,a,d,u,c="modernizr",f=s("div"),p=l();if(parseInt(o,10))for(;o--;)d=s("div"),d.id=r?r[o]:c+(o+1),f.appendChild(d);return i=s("style"),i.type="text/css",i.id="s"+c,(p.fake?p:f).appendChild(i),p.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),f.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),a=n(f,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=u,x.offsetHeight):f.parentNode.removeChild(f),!!a}function u(e,t){return!!~(""+e).indexOf(t)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var r;for(var i in e)if(e[i]in t)return n===!1?e[i]:(r=t[e[i]],o(r,"function")?f(r,n||t):r);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,o){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(m(t[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];r--;)i.push("("+m(t[r])+":"+o+")");return i=i.join(" or "),d("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function g(e,t,r,i){function a(){d&&(delete I.style,delete I.modElem)}if(i=o(i,"undefined")?!1:i,!o(r,"undefined")){var l=h(e,r);if(!o(l,"undefined"))return l}for(var d,f,p,m,g,v=["modernizr","tspan","samp"];!I.style&&v.length;)d=!0,I.modElem=s(v.shift()),I.style=I.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],g=I.style[m],u(m,"-")&&(m=c(m)),I.style[m]!==n){if(i||o(r,"undefined"))return a(),"pfx"==t?m:!0;try{I.style[m]=r}catch(y){}if(I.style[m]!=g)return a(),"pfx"==t?m:!0}return a(),!1}function v(e,t,n,r,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+N.join(s+" ")+s).split(" ");return o(t,"string")||o(t,"undefined")?g(a,t,r,i):(a=(e+" "+z.join(s+" ")+s).split(" "),p(a,t,n))}function y(e,t,o){return v(e,n,n,t,o)}var w=[],S=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){S.push({name:e,fn:t,options:n})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("webaudio",function(){var t="webkitAudioContext"in e,n="AudioContext"in e;return Modernizr._config.usePrefixes?t||n:n});var x=t.documentElement,T="svg"===x.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var e=s("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("inlinesvg",function(){var e=s("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var P={}.toString;Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(P.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var _=C.testStyles=d;_("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var n=t.childNodes[2],o=t.childNodes[1],r=t.childNodes[0],i=parseInt((o.offsetWidth-o.clientWidth)/2,10),s=r.clientWidth/100,l=r.clientHeight/100,d=parseInt(50*Math.min(s,l),10),u=parseInt((e.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);Modernizr.addTest("cssvminunit",a(d,u)||a(d,u-i))},3),_("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),o=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",o==n)}),_("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),o=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",o==n)});var b="Moz O ms Webkit",N=C._config.usePrefixes?b.split(" "):[];C._cssomPrefixes=N;var z=C._config.usePrefixes?b.toLowerCase().split(" "):[];C._domPrefixes=z;var E={elem:s("modernizr")};Modernizr._q.push(function(){delete E.elem});var I={style:E.elem.style};Modernizr._q.unshift(function(){delete I.style}),C.testAllProps=v,C.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),r(),i(w),delete C.addTest,delete C.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);