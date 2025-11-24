var AskDona=function(e){"use strict";var n,r,t,o,a,i,s,l,d,c,u,f={},h=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,g=Array.isArray;function m(e,n){for(var r in n)e[r]=n[r];return e}function b(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function v(e,r,t){var o,a,i,s={};for(i in r)"key"==i?o=r[i]:"ref"==i?a=r[i]:s[i]=r[i];if(arguments.length>2&&(s.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===s[i]&&(s[i]=e.defaultProps[i]);return y(e,s,o,a,null)}function y(e,n,o,a,i){var s={type:e,props:n,key:o,ref:a,h:null,m:null,v:0,_:null,$:null,constructor:void 0,S:null==i?++t:i,C:-1,M:0};return null==i&&null!=r.vnode&&r.vnode(s),s}function k(e){return e.children}function x(e,n){this.props=e,this.context=n}function w(e,n){if(null==n)return e.m?w(e.m,e.C+1):null;for(var r;n<e.h.length;n++)if(null!=(r=e.h[n])&&null!=r._)return r._;return"function"==typeof e.type?w(e):null}function _(e){var n,r;if(null!=(e=e.m)&&null!=e.$){for(e._=e.$.base=null,n=0;n<e.h.length;n++)if(null!=(r=e.h[n])&&null!=r._){e._=e.$.base=r._;break}return _(e)}}function $(e){(!e.A&&(e.A=!0)&&o.push(e)&&!S.q++||a!=r.debounceRendering)&&((a=r.debounceRendering)||i)(S)}function S(){for(var e,n,t,a,i,l,d,c=1;o.length;)o.length>c&&o.sort(s),e=o.shift(),c=o.length,e.A&&(t=void 0,i=(a=(n=e).S)._,l=[],d=[],n.j&&((t=m({},a)).S=a.S+1,r.vnode&&r.vnode(t),I(n.j,t,a,n.I,n.j.namespaceURI,32&a.M?[i]:null,l,null==i?w(a):i,!!(32&a.M),d),t.S=a.S,t.m.h[t.C]=t,D(l,t,d),t._!=i&&_(t)));S.q=0}function z(e,n,r,t,o,a,i,s,l,d,c){var u,p,m,b,v,x,_=t&&t.h||h,$=n.length;for(l=function(e,n,r,t,o){var a,i,s,l,d,c=r.length,u=c,f=0;for(e.h=new Array(o),a=0;a<o;a++)null!=(i=n[a])&&"boolean"!=typeof i&&"function"!=typeof i?(l=a+f,(i=e.h[a]="string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?y(null,i,null,null,null):g(i)?y(k,{children:i},null,null,null):null==i.constructor&&i.v>0?y(i.type,i.props,i.key,i.ref?i.ref:null,i.S):i).m=e,i.v=e.v+1,s=null,-1!=(d=i.C=A(i,r,l,u))&&(u--,(s=r[d])&&(s.M|=2)),null==s||null==s.S?(-1==d&&(o>c?f--:o<c&&f++),"function"!=typeof i.type&&(i.M|=4)):d!=l&&(d==l-1?f--:d==l+1?f++:(d>l?f--:f++,i.M|=4))):e.h[a]=null;if(u)for(a=0;a<c;a++)null!=(s=r[a])&&!(2&s.M)&&(s._==t&&(t=w(s)),T(s,s));return t}(r,n,_,l,$),u=0;u<$;u++)null!=(m=r.h[u])&&(p=-1==m.C?f:_[m.C]||f,m.C=u,x=I(e,m,p,o,a,i,s,l,d,c),b=m._,m.ref&&p.ref!=m.ref&&(p.ref&&N(p.ref,null,m),c.push(m.ref,m.$||b,m)),null==v&&null!=b&&(v=b),4&m.M||p.h===m.h?l=C(m,l,e):"function"==typeof m.type&&void 0!==x?l=x:b&&(l=b.nextSibling),m.M&=-7);return r._=v,l}function C(e,n,r){var t,o;if("function"==typeof e.type){for(t=e.h,o=0;t&&o<t.length;o++)t[o]&&(t[o].m=e,n=C(t[o],n,r));return n}e._!=n&&(n&&e.type&&!r.contains(n)&&(n=w(e)),r.insertBefore(e._,n||null),n=e._);do{n=n&&n.nextSibling}while(null!=n&&8==n.nodeType);return n}function M(e,n){return n=n||[],null==e||"boolean"==typeof e||(g(e)?e.some(function(e){M(e,n)}):n.push(e)),n}function A(e,n,r,t){var o,a,i=e.key,s=e.type,l=n[r];if(null===l&&null==e.key||l&&i==l.key&&s==l.type&&!(2&l.M))return r;if(t>(null==l||2&l.M?0:1))for(o=r-1,a=r+1;o>=0||a<n.length;){if(o>=0){if((l=n[o])&&!(2&l.M)&&i==l.key&&s==l.type)return o;o--}if(a<n.length){if((l=n[a])&&!(2&l.M)&&i==l.key&&s==l.type)return a;a++}}return-1}function q(e,n,r){"-"==n[0]?e.setProperty(n,null==r?"":r):e[n]=null==r?"":"number"!=typeof r||p.test(n)?r:r+"px"}function j(e,n,r,t,o){var a,i;e:if("style"==n)if("string"==typeof r)e.style.cssText=r;else{if("string"==typeof t&&(e.style.cssText=t=""),t)for(n in t)r&&n in r||q(e.style,n,"");if(r)for(n in r)t&&r[n]==t[n]||q(e.style,n,r[n])}else if("o"==n[0]&&"n"==n[1])a=n!=(n=n.replace(l,"$1")),i=n.toLowerCase(),n=i in e||"onFocusOut"==n||"onFocusIn"==n?i.slice(2):n.slice(2),e.l||(e.l={}),e.l[n+a]=r,r?t?r.u=t.u:(r.u=d,e.addEventListener(n,a?u:c,a)):e.removeEventListener(n,a?u:c,a);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in e)try{e[n]=null==r?"":r;break e}catch(e){}"function"==typeof r||(null==r||!1===r&&"-"!=n[4]?e.removeAttribute(n):e.setAttribute(n,"popover"==n&&1==r?"":r))}}function E(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=d++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function I(e,n,t,o,a,i,s,l,d,c){var u,f,h,p,v,y,w,_,$,S,C,M,A,q,j,E,I,D=n.type;if(null!=n.constructor)return null;128&t.M&&(d=!!(32&t.M),i=[l=n._=t._]),(u=r.v)&&u(n);e:if("function"==typeof D)try{if(_=n.props,$="prototype"in D&&D.prototype.render,S=(u=D.contextType)&&o[u.$],C=u?S?S.props.value:u.m:o,t.$?w=(f=n.$=t.$).m=f.D:($?n.$=f=new D(_,C):(n.$=f=new x(_,C),f.constructor=D,f.render=F),S&&S.sub(f),f.props=_,f.state||(f.state={}),f.context=C,f.I=o,h=f.A=!0,f.R=[],f.O=[]),$&&null==f.N&&(f.N=f.state),$&&null!=D.getDerivedStateFromProps&&(f.N==f.state&&(f.N=m({},f.N)),m(f.N,D.getDerivedStateFromProps(_,f.N))),p=f.props,v=f.state,f.S=n,h)$&&null==D.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),$&&null!=f.componentDidMount&&f.R.push(f.componentDidMount);else{if($&&null==D.getDerivedStateFromProps&&_!==p&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(_,C),!f._&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(_,f.N,C)||n.S==t.S){for(n.S!=t.S&&(f.props=_,f.state=f.N,f.A=!1),n._=t._,n.h=t.h,n.h.some(function(e){e&&(e.m=n)}),M=0;M<f.O.length;M++)f.R.push(f.O[M]);f.O=[],f.R.length&&s.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(_,f.N,C),$&&null!=f.componentDidUpdate&&f.R.push(function(){f.componentDidUpdate(p,v,y)})}if(f.context=C,f.props=_,f.j=e,f._=!1,A=r.q,q=0,$){for(f.state=f.N,f.A=!1,A&&A(n),u=f.render(f.props,f.state,f.context),j=0;j<f.O.length;j++)f.R.push(f.O[j]);f.O=[]}else do{f.A=!1,A&&A(n),u=f.render(f.props,f.state,f.context),f.state=f.N}while(f.A&&++q<25);f.state=f.N,null!=f.getChildContext&&(o=m(m({},o),f.getChildContext())),$&&!h&&null!=f.getSnapshotBeforeUpdate&&(y=f.getSnapshotBeforeUpdate(p,v)),E=u,null!=u&&u.type===k&&null==u.key&&(E=R(u.props.children)),l=z(e,g(E)?E:[E],n,t,o,a,i,s,l,d,c),f.base=n._,n.M&=-161,f.R.length&&s.push(f),w&&(f.D=f.m=null)}catch(e){if(n.S=null,d||null!=i)if(e.then){for(n.M|=d?160:128;l&&8==l.nodeType&&l.nextSibling;)l=l.nextSibling;i[i.indexOf(l)]=null,n._=l}else for(I=i.length;I--;)b(i[I]);else n._=t._,n.h=t.h;r._(e,n,t)}else null==i&&n.S==t.S?(n.h=t.h,n._=t._):l=n._=O(t._,n,t,o,a,i,s,d,c);return(u=r.diffed)&&u(n),128&n.M?void 0:l}function D(e,n,t){for(var o=0;o<t.length;o++)N(t[o],t[++o],t[++o]);r.$&&r.$(n,e),e.some(function(n){try{e=n.R,n.R=[],e.some(function(e){e.call(n)})}catch(e){r._(e,n.S)}})}function R(e){return"object"!=typeof e||null==e||e.v&&e.v>0?e:g(e)?e.map(R):m({},e)}function O(e,t,o,a,i,s,l,d,c){var u,h,p,m,v,y,k,x=o.props,_=t.props,$=t.type;if("svg"==$?i="http://www.w3.org/2000/svg":"math"==$?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=s)for(u=0;u<s.length;u++)if((v=s[u])&&"setAttribute"in v==!!$&&($?v.localName==$:3==v.nodeType)){e=v,s[u]=null;break}if(null==e){if(null==$)return document.createTextNode(_);e=document.createElementNS(i,$,_.is&&_),d&&(r.T&&r.T(t,s),d=!1),s=null}if(null==$)x===_||d&&e.data==_||(e.data=_);else{if(s=s&&n.call(e.childNodes),x=o.props||f,!d&&null!=s)for(x={},u=0;u<e.attributes.length;u++)x[(v=e.attributes[u]).name]=v.value;for(u in x)if(v=x[u],"children"==u);else if("dangerouslySetInnerHTML"==u)p=v;else if(!(u in _)){if("value"==u&&"defaultValue"in _||"checked"==u&&"defaultChecked"in _)continue;j(e,u,null,v,i)}for(u in _)v=_[u],"children"==u?m=v:"dangerouslySetInnerHTML"==u?h=v:"value"==u?y=v:"checked"==u?k=v:d&&"function"!=typeof v||x[u]===v||j(e,u,v,x[u],i);if(h)d||p&&(h.F==p.F||h.F==e.innerHTML)||(e.innerHTML=h.F),t.h=[];else if(p&&(e.innerHTML=""),z("template"==t.type?e.content:e,g(m)?m:[m],t,o,a,"foreignObject"==$?"http://www.w3.org/1999/xhtml":i,s,l,s?s[0]:o.h&&w(o,0),d,c),null!=s)for(u=s.length;u--;)b(s[u]);d||(u="value","progress"==$&&null==y?e.removeAttribute("value"):null!=y&&(y!==e[u]||"progress"==$&&!y||"option"==$&&y!=x[u])&&j(e,u,y,x[u],i),u="checked",null!=k&&k!=e[u]&&j(e,u,k,x[u],i))}return e}function N(e,n,t){try{if("function"==typeof e){var o="function"==typeof e.M;o&&e.M(),o&&null==n||(e.M=e(n))}else e.current=n}catch(e){r._(e,t)}}function T(e,n,t){var o,a;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!=e._||N(o,null,n)),null!=(o=e.$)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r._(e,n)}o.base=o.j=null}if(o=e.h)for(a=0;a<o.length;a++)o[a]&&T(o[a],n,t||"function"!=typeof e.type);t||b(e._),e.$=e.m=e._=void 0}function F(e,n,r){return this.constructor(e,r)}function P(e,t,o){var a,i,s;t==document&&(t=document.documentElement),r.m&&r.m(e,t),a=!1?null:t.h,i=[],s=[],I(t,e=t.h=v(k,null,[e]),a||f,f,t.namespaceURI,a?null:t.firstChild?n.call(t.childNodes):null,i,a?a._:t.firstChild,false,s),D(i,e,s)}function L(e){if(!e)return"";const n=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#039;"),r=new Set(["A","BR","STRONG"]),t=new Set(["href","title"]),o=/^(https?:|mailto:|tel:)/i,a=document.createElement("template");a.innerHTML=e;const i=e=>{switch(e.nodeType){case Node.TEXT_NODE:return n(e.data);case Node.ELEMENT_NODE:{const a=e,s=a.tagName;if(!r.has(s)){let e="";for(const n of Array.from(a.childNodes))e+=i(n);return e}if("BR"===s)return"<br>";if("STRONG"===s){let e="";for(const n of Array.from(a.childNodes))e+=i(n);return`<strong>${e}</strong>`}if("A"===s){let e="",r="";for(const n of Array.from(a.attributes)){const a=n.name.toLowerCase();if(t.has(a))if("href"===a){const r=(n.value||"").trim();o.test(r)&&(e=r)}else"title"===a&&(r=n.value||"")}let s="";for(const e of Array.from(a.childNodes))s+=i(e);const l=' rel="noopener noreferrer"',d=e?` href="${n(e)}"`:"",c=r?` title="${n(r)}"`:"";return d?`<a${d}${c}${' target="_blank"'}${l}>${s}</a>`:s}return""}default:return""}};let s="";for(const e of Array.from(a.content.childNodes))s+=i(e);return s}function H(){return window.crypto&&window.crypto.randomUUID?window.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const n=16*Math.random()|0;return("x"===e?n:3&n|8).toString(16)})}n=h.slice,r={_:function(e,n,r,t){for(var o,a,i;n=n.m;)if((o=n.$)&&!o.m)try{if((a=o.constructor)&&null!=a.getDerivedStateFromError&&(o.setState(a.getDerivedStateFromError(e)),i=o.A),null!=o.componentDidCatch&&(o.componentDidCatch(e,t||{}),i=o.A),i)return o.D=o}catch(n){e=n}throw e}},t=0,x.prototype.setState=function(e,n){var r;r=null!=this.N&&this.N!=this.state?this.N:this.N=m({},this.state),"function"==typeof e&&(e=e(m({},r),this.props)),e&&m(r,e),null!=e&&this.S&&(n&&this.O.push(n),$(this))},x.prototype.forceUpdate=function(e){this.S&&(this._=!0,e&&this.R.push(e),$(this))},x.prototype.render=k,o=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,n){return e.S.v-n.S.v},S.q=0,l=/(PointerCapture)$|Capture$/i,d=0,c=E(!1),u=E(!0),"undefined"!=typeof window&&function(){if(window.self!==window.top)try{window.parent.document}catch(e){}}();const U="https://app.askdona.com/api/embed/v1";async function B(e,n={}){const r=new AbortController,t=setTimeout(()=>r.abort(),3e4);try{const o={"X-Widget-Version":"1.0.0",...n.headers||{}};n.method&&["POST","PUT","PATCH"].includes(n.method)&&(o["Content-Type"]="application/json");const a=await fetch(`${U}${e}`,{...n,signal:r.signal,headers:o});if(clearTimeout(t),!a.ok){const e=await a.json().catch(()=>({message:"Request failed"}));throw new Error(e.message||`HTTP ${a.status}`)}return await a.json()}catch(e){if(clearTimeout(t),"AbortError"===e.name)throw new Error("Request timeout");throw e}}async function J(e,n){try{const r=n?`?language=${encodeURIComponent(n)}`:"";return await B(`/welcome/${e}${r}`)}catch(e){return null}}var Z=0;function V(e,n,t,o,a,i){n||(n={});var s,l,d=n;if("ref"in d)for(l in d={},n)"ref"==l?s=n[l]:d[l]=n[l];var c={type:e,props:d,key:t,ref:s,h:null,m:null,v:0,_:null,$:null,constructor:void 0,S:--Z,C:-1,M:0,P:a,L:i};if("function"==typeof e&&(s=e.defaultProps))for(l in s)void 0===d[l]&&(d[l]=s[l]);return r.vnode&&r.vnode(c),c}var Q,W,G,K,X=0,Y=[],ee=r,ne=ee.v,re=ee.q,te=ee.diffed,oe=ee.$,ae=ee.unmount,ie=ee.m;function se(e,n){ee.R&&ee.R(W,e,X||n),X=0;var r=W.H||(W.H={m:[],R:[]});return e>=r.m.length&&r.m.push({}),r.m[e]}function le(e){return X=1,function(e,n,r){var t=se(Q++,2);if(t.t=e,!t.$&&(t.m=[r?r(n):ke(void 0,n),function(e){var n=t.U?t.U[0]:t.m[0],r=t.t(n,e);n!==r&&(t.U=[r,t.m[1]],t.$.setState({}))}],t.$=W,!W.B)){var o=function(e,n,r){if(!t.$.H)return!0;var o=t.$.H.m.filter(function(e){return!!e.$});if(o.every(function(e){return!e.U}))return!a||a.call(this,e,n,r);var i=t.$.props!==e;return o.forEach(function(e){if(e.U){var n=e.m[0];e.m=e.U,e.U=void 0,n!==e.m[0]&&(i=!0)}}),a&&a.call(this,e,n,r)||i};W.B=!0;var a=W.shouldComponentUpdate,i=W.componentWillUpdate;W.componentWillUpdate=function(e,n,r){if(this._){var t=a;a=void 0,o(e,n,r),a=t}i&&i.call(this,e,n,r)},W.shouldComponentUpdate=o}return t.U||t.m}(ke,e)}function de(e,n){var r=se(Q++,3);!ee.N&&ye(r.H,n)&&(r.m=e,r.u=n,W.H.R.push(r))}function ce(e,n){var r=se(Q++,4);!ee.N&&ye(r.H,n)&&(r.m=e,r.u=n,W.R.push(r))}function ue(e){return X=5,fe(function(){return{current:e}},[])}function fe(e,n){var r=se(Q++,7);return ye(r.H,n)&&(r.m=e(),r.H=n,r.R=e),r.m}function he(e,n){return X=8,fe(function(){return e},n)}function pe(){for(var e;e=Y.shift();)if(e.j&&e.H)try{e.H.R.forEach(be),e.H.R.forEach(ve),e.H.R=[]}catch(n){e.H.R=[],ee._(n,e.S)}}ee.v=function(e){W=null,ne&&ne(e)},ee.m=function(e,n){e&&n.h&&n.h.T&&(e.T=n.h.T),ie&&ie(e,n)},ee.q=function(e){re&&re(e),Q=0;var n=(W=e.$).H;n&&(G===W?(n.R=[],W.R=[],n.m.forEach(function(e){e.U&&(e.m=e.U),e.u=e.U=void 0})):(n.R.forEach(be),n.R.forEach(ve),n.R=[],Q=0)),G=W},ee.diffed=function(e){te&&te(e);var n=e.$;n&&n.H&&(n.H.R.length&&(1!==Y.push(n)&&K===ee.requestAnimationFrame||((K=ee.requestAnimationFrame)||me)(pe)),n.H.m.forEach(function(e){e.u&&(e.H=e.u),e.u=void 0})),G=W=null},ee.$=function(e,n){n.some(function(e){try{e.R.forEach(be),e.R=e.R.filter(function(e){return!e.m||ve(e)})}catch(r){n.some(function(e){e.R&&(e.R=[])}),n=[],ee._(r,e.S)}}),oe&&oe(e,n)},ee.unmount=function(e){ae&&ae(e);var n,r=e.$;r&&r.H&&(r.H.m.forEach(function(e){try{be(e)}catch(e){n=e}}),r.H=void 0,n&&ee._(n,r.S))};var ge="function"==typeof requestAnimationFrame;function me(e){var n,r=function(){clearTimeout(t),ge&&cancelAnimationFrame(n),setTimeout(e)},t=setTimeout(r,35);ge&&(n=requestAnimationFrame(r))}function be(e){var n=W,r=e.$;"function"==typeof r&&(e.$=void 0,r()),W=n}function ve(e){var n=W;e.$=e.m(),W=n}function ye(e,n){return!e||e.length!==n.length||n.some(function(n,r){return n!==e[r]})}function ke(e,n){return"function"==typeof n?n(e):n}let xe,we,_e,$e={data:""},Se=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||$e,ze=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ce=/\/\*[^]*?\*\/|  +/g,Me=/\n+/g,Ae=(e,n)=>{let r="",t="",o="";for(let a in e){let i=e[a];"@"==a[0]?"i"==a[1]?r=a+" "+i+";":t+="f"==a[1]?Ae(i,a):a+"{"+Ae(i,"k"==a[1]?"":n)+"}":"object"==typeof i?t+=Ae(i,n?n.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,n=>/&/.test(n)?n.replace(/&/g,e):e?e+" "+n:n)):a):null!=i&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=Ae.p?Ae.p(a,i):a+":"+i+";")}return r+(n&&o?n+"{"+o+"}":o)+t},qe={},je=e=>{if("object"==typeof e){let n="";for(let r in e)n+=r+je(e[r]);return n}return e},Ee=(e,n,r,t,o)=>{let a=je(e),i=qe[a]||(qe[a]=(e=>{let n=0,r=11;for(;n<e.length;)r=101*r+e.charCodeAt(n++)>>>0;return"go"+r})(a));if(!qe[i]){let n=a!==e?e:(e=>{let n,r,t=[{}];for(;n=ze.exec(e.replace(Ce,""));)n[4]?t.shift():n[3]?(r=n[3].replace(Me," ").trim(),t.unshift(t[0][r]=t[0][r]||{})):t[0][n[1]]=n[2].replace(Me," ").trim();return t[0]})(e);qe[i]=Ae(o?{["@keyframes "+i]:n}:n,r?"":"."+i)}let s=r&&qe.g?qe.g:null;return r&&(qe.g=qe[i]),((e,n,r,t)=>{t?n.data=n.data.replace(t,e):-1===n.data.indexOf(e)&&(n.data=r?e+n.data:n.data+e)})(qe[i],n,t,s),i};function Ie(e){let n=this||{},r=e.call?e(n.p):e;return Ee(r.unshift?r.raw?((e,n,r)=>e.reduce((e,t,o)=>{let a=n[o];if(a&&a.call){let e=a(r),n=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=n?"."+n:e&&"object"==typeof e?e.props?"":Ae(e,""):!1===e?"":e}return e+t+(null==a?"":a)},""))(r,[].slice.call(arguments,1),n.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(n.p):r),{}):r,Se(n.target),n.g,n.o,n.k)}Ie.bind({g:1});let De=Ie.bind({k:1});function Re(e,n,r,t){Ae.p=n,xe=e,we=r,_e=t}function Oe(e,n){let r=this||{};return function(){let n=arguments;return function t(o,a){let i=Object.assign({},o),s=i.className||t.className;r.p=Object.assign({theme:we&&we()},i),r.o=/ *go\d+/.test(s),i.className=Ie.apply(r,n)+(s?" "+s:"");let l=e;return e[0]&&(l=i.as||e,delete i.as),_e&&l[0]&&_e(i),xe(l,i)}}}const Ne=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Te=e=>{const n=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()))(e);return n.charAt(0).toUpperCase()+n.slice(1)},Fe=(...e)=>e.filter((e,n,r)=>Boolean(e)&&""!==e.trim()&&r.indexOf(e)===n).join(" ").trim();var Pe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};const Le=({color:e="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:t,children:o,iconNode:a,class:i="",...s})=>v("svg",{...Pe,width:String(n),height:n,stroke:e,"stroke-width":t?24*Number(r)/Number(n):r,class:["lucide",i].join(" "),...s},[...a.map(([e,n])=>v(e,n)),...M(o)]),He=(e,n)=>{const r=({class:r="",children:t,...o})=>v(Le,{...o,iconNode:n,class:Fe(`lucide-${Ne(Te(e))}`,`lucide-${Ne(e)}`,r)},t);return r.displayName=Te(e),r},Ue=He("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),Be=He("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]),Je=He("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),Ze=He("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),Ve=He("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),Qe=He("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),We=He("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),Ge=He("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),Ke=He("file-search",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]),Xe=He("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),Ye=He("funnel",[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]]),en=He("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),nn=He("lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),rn=He("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),tn=He("message-circle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]),on=He("pen-tool",[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]),an=He("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),sn=He("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]),ln=He("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]),dn=He("thumbs-down",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]]),cn=He("thumbs-up",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]),un=He("timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),fn=He("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),hn=He("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),pn=He("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function gn(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let mn={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const bn=/[&<>"']/,vn=new RegExp(bn.source,"g"),yn=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,kn=new RegExp(yn.source,"g"),xn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},wn=e=>xn[e];function _n(e,n){if(n){if(bn.test(e))return e.replace(vn,wn)}else if(yn.test(e))return e.replace(kn,wn);return e}const $n=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Sn(e){return e.replace($n,(e,n)=>"colon"===(n=n.toLowerCase())?":":"#"===n.charAt(0)?"x"===n.charAt(1)?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):"")}const zn=/(^|[^\[])\^/g;function Cn(e,n){e="string"==typeof e?e:e.source,n=n||"";const r={replace:(n,t)=>(t=(t=t.source||t).replace(zn,"$1"),e=e.replace(n,t),r),getRegex:()=>new RegExp(e,n)};return r}const Mn=/[^\w:]/g,An=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function qn(e,n,r){if(e){let e;try{e=decodeURIComponent(Sn(r)).replace(Mn,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}n&&!An.test(r)&&(r=function(e,n){jn[" "+e]||(En.test(e)?jn[" "+e]=e+"/":jn[" "+e]=Nn(e,"/",!0));e=jn[" "+e];const r=-1===e.indexOf(":");return"//"===n.substring(0,2)?r?n:e.replace(In,"$1")+n:"/"===n.charAt(0)?r?n:e.replace(Dn,"$1")+n:e+n}(n,r));try{r=encodeURI(r).replace(/%25/g,"%")}catch(e){return null}return r}const jn={},En=/^[^:]+:\/*[^/]*$/,In=/^([^:]+:)[\s\S]*$/,Dn=/^([^:]+:\/*[^/]*)[\s\S]*$/;const Rn={exec:function(){}};function On(e,n){const r=e.replace(/\|/g,(e,n,r)=>{let t=!1,o=n;for(;--o>=0&&"\\"===r[o];)t=!t;return t?"|":" |"}).split(/ \|/);let t=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>n)r.splice(n);else for(;r.length<n;)r.push("");for(;t<r.length;t++)r[t]=r[t].trim().replace(/\\\|/g,"|");return r}function Nn(e,n,r){const t=e.length;if(0===t)return"";let o=0;for(;o<t;){const a=e.charAt(t-o-1);if(a!==n||r){if(a===n||!r)break;o++}else o++}return e.slice(0,t-o)}function Tn(e,n){if(n<1)return"";let r="";for(;n>1;)1&n&&(r+=e),n>>=1,e+=e;return r+e}function Fn(e,n,r,t){const o=n.href,a=n.title?_n(n.title):null,i=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){t.state.inLink=!0;const e={type:"link",raw:r,href:o,title:a,text:i,tokens:t.inlineTokens(i)};return t.state.inLink=!1,e}return{type:"image",raw:r,href:o,title:a,text:_n(i)}}class Pn{constructor(e){this.options=e||mn}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const e=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?e:Nn(e,"\n")}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const e=n[0],r=function(e,n){const r=e.match(/^(\s+)(?:```)/);if(null===r)return n;const t=r[1];return n.split("\n").map(e=>{const n=e.match(/^\s+/);if(null===n)return e;const[r]=n;return r.length>=t.length?e.slice(t.length):e}).join("\n")}(e,n[3]||"");return{type:"code",raw:e,lang:n[2]?n[2].trim().replace(this.rules.inline.J,"$1"):n[2],text:r}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let e=n[2].trim();if(/#$/.test(e)){const n=Nn(e,"#");this.options.pedantic?e=n.trim():n&&!/ $/.test(n)||(e=n.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const e=n[0].replace(/^ *>[ \t]?/gm,""),r=this.lexer.state.top;this.lexer.state.top=!0;const t=this.lexer.blockTokens(e);return this.lexer.state.top=r,{type:"blockquote",raw:n[0],tokens:t,text:e}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r,t,o,a,i,s,l,d,c,u,f,h,p=n[1].trim();const g=p.length>1,m={type:"list",raw:"",ordered:g,start:g?+p.slice(0,-1):"",loose:!1,items:[]};p=g?`\\d{1,9}\\${p.slice(-1)}`:`\\${p}`,this.options.pedantic&&(p=g?p:"[*+-]");const b=new RegExp(`^( {0,3}${p})((?:[\t ][^\\n]*)?(?:\\n|$))`);for(;e&&(h=!1,n=b.exec(e))&&!this.rules.block.hr.test(e);){if(r=n[0],e=e.substring(r.length),d=n[2].split("\n",1)[0].replace(/^\t+/,e=>" ".repeat(3*e.length)),c=e.split("\n",1)[0],this.options.pedantic?(a=2,f=d.trimLeft()):(a=n[2].search(/[^ ]/),a=a>4?1:a,f=d.slice(a),a+=n[1].length),s=!1,!d&&/^ *$/.test(c)&&(r+=c+"\n",e=e.substring(c.length+1),h=!0),!h){const n=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),t=new RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),o=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),i=new RegExp(`^ {0,${Math.min(3,a-1)}}#`);for(;e&&(u=e.split("\n",1)[0],c=u,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!o.test(c))&&!i.test(c)&&!n.test(c)&&!t.test(e);){if(c.search(/[^ ]/)>=a||!c.trim())f+="\n"+c.slice(a);else{if(s)break;if(d.search(/[^ ]/)>=4)break;if(o.test(d))break;if(i.test(d))break;if(t.test(d))break;f+="\n"+c}s||c.trim()||(s=!0),r+=u+"\n",e=e.substring(u.length+1),d=c.slice(a)}}m.loose||(l?m.loose=!0:/\n *\n *$/.test(r)&&(l=!0)),this.options.gfm&&(t=/^\[[ xX]\] /.exec(f),t&&(o="[ ] "!==t[0],f=f.replace(/^\[[ xX]\] +/,""))),m.items.push({type:"list_item",raw:r,task:!!t,checked:o,loose:!1,text:f}),m.raw+=r}m.items[m.items.length-1].raw=r.trimRight(),m.items[m.items.length-1].text=f.trimRight(),m.raw=m.raw.trimRight();const v=m.items.length;for(i=0;i<v;i++)if(this.lexer.state.top=!1,m.items[i].tokens=this.lexer.blockTokens(m.items[i].text,[]),!m.loose){const e=m.items[i].tokens.filter(e=>"space"===e.type),n=e.length>0&&e.some(e=>/\n.*\n/.test(e.raw));m.loose=n}if(m.loose)for(i=0;i<v;i++)m.items[i].loose=!0;return m}}html(e){const n=this.rules.block.html.exec(e);if(n){const e={type:"html",raw:n[0],pre:!this.options.sanitizer&&("pre"===n[1]||"script"===n[1]||"style"===n[1]),text:n[0]};if(this.options.sanitize){const r=this.options.sanitizer?this.options.sanitizer(n[0]):_n(n[0]);e.type="paragraph",e.text=r,e.tokens=this.lexer.inline(r)}return e}}def(e){const n=this.rules.block.def.exec(e);if(n){const e=n[1].toLowerCase().replace(/\s+/g," "),r=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.J,"$1"):"",t=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.J,"$1"):n[3];return{type:"def",tag:e,raw:n[0],href:r,title:t}}}table(e){const n=this.rules.block.table.exec(e);if(n){const e={type:"table",header:On(n[1]).map(e=>({text:e})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=n[0];let r,t,o,a,i=e.align.length;for(r=0;r<i;r++)/^ *-+: *$/.test(e.align[r])?e.align[r]="right":/^ *:-+: *$/.test(e.align[r])?e.align[r]="center":/^ *:-+ *$/.test(e.align[r])?e.align[r]="left":e.align[r]=null;for(i=e.rows.length,r=0;r<i;r++)e.rows[r]=On(e.rows[r],e.header.length).map(e=>({text:e}));for(i=e.header.length,t=0;t<i;t++)e.header[t].tokens=this.lexer.inline(e.header[t].text);for(i=e.rows.length,t=0;t<i;t++)for(a=e.rows[t],o=0;o<a.length;o++)a[o].tokens=this.lexer.inline(a[o].text);return e}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:"="===n[2].charAt(0)?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const e="\n"===n[1].charAt(n[1].length-1)?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:e,tokens:this.lexer.inline(e)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:_n(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):_n(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const e=n[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const n=Nn(e.slice(0,-1),"\\");if((e.length-n.length)%2==0)return}else{const e=function(e,n){if(-1===e.indexOf(n[1]))return-1;const r=e.length;let t=0,o=0;for(;o<r;o++)if("\\"===e[o])o++;else if(e[o]===n[0])t++;else if(e[o]===n[1]&&(t--,t<0))return o;return-1}(n[2],"()");if(e>-1){const r=(0===n[0].indexOf("!")?5:4)+n[1].length+e;n[2]=n[2].substring(0,e),n[0]=n[0].substring(0,r).trim(),n[3]=""}}let r=n[2],t="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);e&&(r=e[1],t=e[3])}else t=n[3]?n[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(r=this.options.pedantic&&!/>$/.test(e)?r.slice(1):r.slice(1,-1)),Fn(n,{href:r?r.replace(this.rules.inline.J,"$1"):r,title:t?t.replace(this.rules.inline.J,"$1"):t},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let e=(r[2]||r[1]).replace(/\s+/g," ");if(e=n[e.toLowerCase()],!e){const e=r[0].charAt(0);return{type:"text",raw:e,text:e}}return Fn(r,e,r[0],this.lexer)}}emStrong(e,n,r=""){let t=this.rules.inline.emStrong.lDelim.exec(e);if(!t)return;if(t[3]&&r.match(/[\p{L}\p{N}]/u))return;const o=t[1]||t[2]||"";if(!o||o&&(""===r||this.rules.inline.punctuation.exec(r))){const r=t[0].length-1;let o,a,i=r,s=0;const l="*"===t[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,n=n.slice(-1*e.length+r);null!=(t=l.exec(n));){if(o=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!o)continue;if(a=o.length,t[3]||t[4]){i+=a;continue}if((t[5]||t[6])&&r%3&&!((r+a)%3)){s+=a;continue}if(i-=a,i>0)continue;a=Math.min(a,a+i+s);const n=e.slice(0,r+t.index+(t[0].length-o.length)+a);if(Math.min(r,a)%2){const e=n.slice(1,-1);return{type:"em",raw:n,text:e,tokens:this.lexer.inlineTokens(e)}}const l=n.slice(2,-2);return{type:"strong",raw:n,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let e=n[2].replace(/\n/g," ");const r=/[^ ]/.test(e),t=/^ /.test(e)&&/ $/.test(e);return r&&t&&(e=e.substring(1,e.length-1)),e=_n(e,!0),{type:"codespan",raw:n[0],text:e}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e,n){const r=this.rules.inline.autolink.exec(e);if(r){let e,t;return"@"===r[2]?(e=_n(this.options.mangle?n(r[1]):r[1]),t="mailto:"+e):(e=_n(r[1]),t=e),{type:"link",raw:r[0],text:e,href:t,tokens:[{type:"text",raw:e,text:e}]}}}url(e,n){let r;if(r=this.rules.inline.url.exec(e)){let e,t;if("@"===r[2])e=_n(this.options.mangle?n(r[0]):r[0]),t="mailto:"+e;else{let n;do{n=r[0],r[0]=this.rules.inline.Z.exec(r[0])[0]}while(n!==r[0]);e=_n(r[0]),t="www."===r[1]?"http://"+r[0]:r[0]}return{type:"link",raw:r[0],text:e,href:t,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,n){const r=this.rules.inline.text.exec(e);if(r){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):_n(r[0]):r[0]:_n(this.options.smartypants?n(r[0]):r[0]),{type:"text",raw:r[0],text:e}}}}const Ln={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Rn,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,V:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,W:/(?!\s*\])(?:\\.|[^\[\]\\])+/,G:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};Ln.def=Cn(Ln.def).replace("label",Ln.W).replace("title",Ln.G).getRegex(),Ln.bullet=/(?:[*+-]|\d{1,9}[.)])/,Ln.listItemStart=Cn(/^( *)(bull) */).replace("bull",Ln.bullet).getRegex(),Ln.list=Cn(Ln.list).replace(/bull/g,Ln.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Ln.def.source+")").getRegex(),Ln.K="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ln.X=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Ln.html=Cn(Ln.html,"i").replace("comment",Ln.X).replace("tag",Ln.K).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ln.paragraph=Cn(Ln.V).replace("hr",Ln.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ln.K).getRegex(),Ln.blockquote=Cn(Ln.blockquote).replace("paragraph",Ln.paragraph).getRegex(),Ln.normal={...Ln},Ln.gfm={...Ln.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},Ln.gfm.table=Cn(Ln.gfm.table).replace("hr",Ln.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ln.K).getRegex(),Ln.gfm.paragraph=Cn(Ln.V).replace("hr",Ln.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",Ln.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ln.K).getRegex(),Ln.pedantic={...Ln.normal,html:Cn("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Ln.X).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Rn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Cn(Ln.normal.V).replace("hr",Ln.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Ln.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const Hn={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Rn,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Rn,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function Un(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Bn(e){let n,r,t="";const o=e.length;for(n=0;n<o;n++)r=e.charCodeAt(n),Math.random()>.5&&(r="x"+r.toString(16)),t+="&#"+r+";";return t}Hn.Y="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",Hn.punctuation=Cn(Hn.punctuation).replace(/punctuation/g,Hn.Y).getRegex(),Hn.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,Hn.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,Hn.X=Cn(Ln.X).replace("(?:--\x3e|$)","--\x3e").getRegex(),Hn.emStrong.lDelim=Cn(Hn.emStrong.lDelim).replace(/punct/g,Hn.Y).getRegex(),Hn.emStrong.rDelimAst=Cn(Hn.emStrong.rDelimAst,"g").replace(/punct/g,Hn.Y).getRegex(),Hn.emStrong.rDelimUnd=Cn(Hn.emStrong.rDelimUnd,"g").replace(/punct/g,Hn.Y).getRegex(),Hn.J=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,Hn.ee=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,Hn.ne=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,Hn.autolink=Cn(Hn.autolink).replace("scheme",Hn.ee).replace("email",Hn.ne).getRegex(),Hn.re=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,Hn.tag=Cn(Hn.tag).replace("comment",Hn.X).replace("attribute",Hn.re).getRegex(),Hn.W=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Hn.te=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,Hn.G=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,Hn.link=Cn(Hn.link).replace("label",Hn.W).replace("href",Hn.te).replace("title",Hn.G).getRegex(),Hn.reflink=Cn(Hn.reflink).replace("label",Hn.W).replace("ref",Ln.W).getRegex(),Hn.nolink=Cn(Hn.nolink).replace("ref",Ln.W).getRegex(),Hn.reflinkSearch=Cn(Hn.reflinkSearch,"g").replace("reflink",Hn.reflink).replace("nolink",Hn.nolink).getRegex(),Hn.normal={...Hn},Hn.pedantic={...Hn.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Cn(/^!?\[(label)\]\((.*?)\)/).replace("label",Hn.W).getRegex(),reflink:Cn(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Hn.W).getRegex()},Hn.gfm={...Hn.normal,escape:Cn(Hn.escape).replace("])","~|])").getRegex(),oe:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,Z:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Hn.gfm.url=Cn(Hn.gfm.url,"i").replace("email",Hn.gfm.oe).getRegex(),Hn.breaks={...Hn.gfm,br:Cn(Hn.br).replace("{2,}","*").getRegex(),text:Cn(Hn.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class Jn{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||mn,this.options.tokenizer=this.options.tokenizer||new Pn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Ln.normal,inline:Hn.normal};this.options.pedantic?(n.block=Ln.pedantic,n.inline=Hn.pedantic):this.options.gfm&&(n.block=Ln.gfm,this.options.breaks?n.inline=Hn.breaks:n.inline=Hn.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ln,inline:Hn}}static lex(e,n){return new Jn(n).lex(e)}static lexInline(e,n){return new Jn(n).inlineTokens(e)}lex(e){let n;for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){let r,t,o,a;for(e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,(e,n,r)=>n+"    ".repeat(r.length));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(t=>!!(r=t.call({lexer:this},e,n))&&(e=e.substring(r.raw.length),n.push(r),!0))))if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),1===r.raw.length&&n.length>0?n[n.length-1].raw+="\n":n.push(r);else if(r=this.tokenizer.code(e))e=e.substring(r.raw.length),t=n[n.length-1],!t||"paragraph"!==t.type&&"text"!==t.type?n.push(r):(t.raw+="\n"+r.raw,t.text+="\n"+r.text,this.inlineQueue[this.inlineQueue.length-1].src=t.text);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.list(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.def(e))e=e.substring(r.raw.length),t=n[n.length-1],!t||"paragraph"!==t.type&&"text"!==t.type?this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title}):(t.raw+="\n"+r.raw,t.text+="\n"+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=t.text);else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),n.push(r);else{if(o=e,this.options.extensions&&this.options.extensions.startBlock){let n=1/0;const r=e.slice(1);let t;this.options.extensions.startBlock.forEach(function(e){t=e.call({lexer:this},r),"number"==typeof t&&t>=0&&(n=Math.min(n,t))}),n<1/0&&n>=0&&(o=e.substring(0,n+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o)))t=n[n.length-1],a&&"paragraph"===t.type?(t.raw+="\n"+r.raw,t.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=t.text):n.push(r),a=o.length!==e.length,e=e.substring(r.raw.length);else if(r=this.tokenizer.text(e))e=e.substring(r.raw.length),t=n[n.length-1],t&&"text"===t.type?(t.raw+="\n"+r.raw,t.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=t.text):n.push(r);else if(e){const n="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw new Error(n)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,t,o,a,i,s,l=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(a=this.tokenizer.rules.inline.reflinkSearch.exec(l));)e.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,a.index)+"["+Tn("a",a[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(a=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,a.index)+"["+Tn("a",a[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(a=this.tokenizer.rules.inline.escapedEmSt.exec(l));)l=l.slice(0,a.index+a[0].length-2)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(i||(s=""),i=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(t=>!!(r=t.call({lexer:this},e,n))&&(e=e.substring(r.raw.length),n.push(r),!0))))if(r=this.tokenizer.escape(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.tag(e))e=e.substring(r.raw.length),t=n[n.length-1],t&&"text"===r.type&&"text"===t.type?(t.raw+=r.raw,t.text+=r.text):n.push(r);else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(r.raw.length),t=n[n.length-1],t&&"text"===r.type&&"text"===t.type?(t.raw+=r.raw,t.text+=r.text):n.push(r);else if(r=this.tokenizer.emStrong(e,l,s))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.autolink(e,Bn))e=e.substring(r.raw.length),n.push(r);else if(this.state.inLink||!(r=this.tokenizer.url(e,Bn))){if(o=e,this.options.extensions&&this.options.extensions.startInline){let n=1/0;const r=e.slice(1);let t;this.options.extensions.startInline.forEach(function(e){t=e.call({lexer:this},r),"number"==typeof t&&t>=0&&(n=Math.min(n,t))}),n<1/0&&n>=0&&(o=e.substring(0,n+1))}if(r=this.tokenizer.inlineText(o,Un))e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(s=r.raw.slice(-1)),i=!0,t=n[n.length-1],t&&"text"===t.type?(t.raw+=r.raw,t.text+=r.text):n.push(r);else if(e){const n="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw new Error(n)}}else e=e.substring(r.raw.length),n.push(r);return n}}class Zn{constructor(e){this.options=e||mn}code(e,n,r){const t=(n||"").match(/\S*/)[0];if(this.options.highlight){const n=this.options.highlight(e,t);null!=n&&n!==e&&(r=!0,e=n)}return e=e.replace(/\n$/,"")+"\n",t?'<pre><code class="'+this.options.langPrefix+_n(t)+'">'+(r?e:_n(e,!0))+"</code></pre>\n":"<pre><code>"+(r?e:_n(e,!0))+"</code></pre>\n"}blockquote(e){return`<blockquote>\n${e}</blockquote>\n`}html(e){return e}heading(e,n,r,t){if(this.options.headerIds){return`<h${n} id="${this.options.headerPrefix+t.slug(r)}">${e}</h${n}>\n`}return`<h${n}>${e}</h${n}>\n`}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,n,r){const t=n?"ol":"ul";return"<"+t+(n&&1!==r?' start="'+r+'"':"")+">\n"+e+"</"+t+">\n"}listitem(e){return`<li>${e}</li>\n`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>\n`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+n+"</table>\n"}tablerow(e){return`<tr>\n${e}</tr>\n`}tablecell(e,n){const r=n.header?"th":"td";return(n.align?`<${r} align="${n.align}">`:`<${r}>`)+e+`</${r}>\n`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,r){if(null===(e=qn(this.options.sanitize,this.options.baseUrl,e)))return r;let t='<a href="'+e+'"';return n&&(t+=' title="'+n+'"'),t+=">"+r+"</a>",t}image(e,n,r){if(null===(e=qn(this.options.sanitize,this.options.baseUrl,e)))return r;let t=`<img src="${e}" alt="${r}"`;return n&&(t+=` title="${n}"`),t+=this.options.xhtml?"/>":">",t}text(e){return e}}class Vn{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,r){return""+r}image(e,n,r){return""+r}br(){return""}}class Qn{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let r=e,t=0;if(this.seen.hasOwnProperty(r)){t=this.seen[e];do{t++,r=e+"-"+t}while(this.seen.hasOwnProperty(r))}return n||(this.seen[e]=t,this.seen[r]=0),r}slug(e,n={}){const r=this.serialize(e);return this.getNextSafeSlug(r,n.dryrun)}}class Wn{constructor(e){this.options=e||mn,this.options.renderer=this.options.renderer||new Zn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Vn,this.slugger=new Qn}static parse(e,n){return new Wn(n).parse(e)}static parseInline(e,n){return new Wn(n).parseInline(e)}parse(e,n=!0){let r,t,o,a,i,s,l,d,c,u,f,h,p,g,m,b,v,y,k,x="";const w=e.length;for(r=0;r<w;r++)if(u=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]&&(k=this.options.extensions.renderers[u.type].call({parser:this},u),!1!==k||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)))x+=k||"";else switch(u.type){case"space":continue;case"hr":x+=this.renderer.hr();continue;case"heading":x+=this.renderer.heading(this.parseInline(u.tokens),u.depth,Sn(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":x+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(d="",l="",a=u.header.length,t=0;t<a;t++)l+=this.renderer.tablecell(this.parseInline(u.header[t].tokens),{header:!0,align:u.align[t]});for(d+=this.renderer.tablerow(l),c="",a=u.rows.length,t=0;t<a;t++){for(s=u.rows[t],l="",i=s.length,o=0;o<i;o++)l+=this.renderer.tablecell(this.parseInline(s[o].tokens),{header:!1,align:u.align[o]});c+=this.renderer.tablerow(l)}x+=this.renderer.table(d,c);continue;case"blockquote":c=this.parse(u.tokens),x+=this.renderer.blockquote(c);continue;case"list":for(f=u.ordered,h=u.start,p=u.loose,a=u.items.length,c="",t=0;t<a;t++)m=u.items[t],b=m.checked,v=m.task,g="",m.task&&(y=this.renderer.checkbox(b),p?m.tokens.length>0&&"paragraph"===m.tokens[0].type?(m.tokens[0].text=y+" "+m.tokens[0].text,m.tokens[0].tokens&&m.tokens[0].tokens.length>0&&"text"===m.tokens[0].tokens[0].type&&(m.tokens[0].tokens[0].text=y+" "+m.tokens[0].tokens[0].text)):m.tokens.unshift({type:"text",text:y}):g+=y),g+=this.parse(m.tokens,p),c+=this.renderer.listitem(g,v,b);x+=this.renderer.list(c,f,h);continue;case"html":x+=this.renderer.html(u.text);continue;case"paragraph":x+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(c=u.tokens?this.parseInline(u.tokens):u.text;r+1<w&&"text"===e[r+1].type;)u=e[++r],c+="\n"+(u.tokens?this.parseInline(u.tokens):u.text);x+=n?this.renderer.paragraph(c):c;continue;default:{const e='Token with "'+u.type+'" type was not found.';if(this.options.silent)return;throw new Error(e)}}return x}parseInline(e,n){n=n||this.renderer;let r,t,o,a="";const i=e.length;for(r=0;r<i;r++)if(t=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[t.type]&&(o=this.options.extensions.renderers[t.type].call({parser:this},t),!1!==o||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(t.type)))a+=o||"";else switch(t.type){case"escape":case"text":a+=n.text(t.text);break;case"html":a+=n.html(t.text);break;case"link":a+=n.link(t.href,t.title,this.parseInline(t.tokens,n));break;case"image":a+=n.image(t.href,t.title,t.text);break;case"strong":a+=n.strong(this.parseInline(t.tokens,n));break;case"em":a+=n.em(this.parseInline(t.tokens,n));break;case"codespan":a+=n.codespan(t.text);break;case"br":a+=n.br();break;case"del":a+=n.del(this.parseInline(t.tokens,n));break;default:{const e='Token with "'+t.type+'" type was not found.';if(this.options.silent)return;throw new Error(e)}}return a}}class Gn{constructor(e){this.options=e||mn}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(e){return e}postprocess(e){return e}}function Kn(e,n){return(r,t,o)=>{"function"==typeof t&&(o=t,t=null);const a={...t},i=function(e,n,r){return t=>{if(t.message+="\nPlease report this to https://github.com/markedjs/marked.",e){const e="<p>An error occurred:</p><pre>"+_n(t.message+"",!0)+"</pre>";return n?Promise.resolve(e):r?void r(null,e):e}if(n)return Promise.reject(t);if(!r)throw t;r(t)}}((t={...Xn.defaults,...a}).silent,t.async,o);if(null==r)return i(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof r)return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(function(e){e&&e.sanitize&&e.silent}(t),t.hooks&&(t.hooks.options=t),o){const a=t.highlight;let s;try{t.hooks&&(r=t.hooks.preprocess(r)),s=e(r,t)}catch(e){return i(e)}const l=function(e){let r;if(!e)try{t.walkTokens&&Xn.walkTokens(s,t.walkTokens),r=n(s,t),t.hooks&&(r=t.hooks.postprocess(r))}catch(n){e=n}return t.highlight=a,e?i(e):o(null,r)};if(!a||a.length<3)return l();if(delete t.highlight,!s.length)return l();let d=0;return Xn.walkTokens(s,function(e){"code"===e.type&&(d++,setTimeout(()=>{a(e.text,e.lang,function(n,r){if(n)return l(n);null!=r&&r!==e.text&&(e.text=r,e.escaped=!0),d--,0===d&&l()})},0))}),void(0===d&&l())}if(t.async)return Promise.resolve(t.hooks?t.hooks.preprocess(r):r).then(n=>e(n,t)).then(e=>t.walkTokens?Promise.all(Xn.walkTokens(e,t.walkTokens)).then(()=>e):e).then(e=>n(e,t)).then(e=>t.hooks?t.hooks.postprocess(e):e).catch(i);try{t.hooks&&(r=t.hooks.preprocess(r));const o=e(r,t);t.walkTokens&&Xn.walkTokens(o,t.walkTokens);let a=n(o,t);return t.hooks&&(a=t.hooks.postprocess(a)),a}catch(e){return i(e)}}}function Xn(e,n,r){return Kn(Jn.lex,Wn.parse)(e,n,r)}function Yn({headers:e,data:n}){return V(br,{children:V("table",{children:[V("thead",{children:V("tr",{children:e.map((e,n)=>V("th",{children:e},n))})}),V("tbody",{children:n.map((e,n)=>V("tr",{children:e.map((e,n)=>V("td",{children:e},n))},n))})]})})}function er({code:e,language:n}){const[r,t]=le(!1);return V(vr,{children:[V(yr,{children:[V(kr,{children:n||"code"}),V(xr,{onClick:async()=>{try{await navigator.clipboard.writeText(e),t(!0),setTimeout(()=>t(!1),2e3)}catch(n){const r=document.createElement("textarea");r.value=e,document.body.appendChild(r),r.select();try{document.execCommand("copy")}catch(e){}document.body.removeChild(r),t(!0),setTimeout(()=>t(!1),2e3)}},title:"Copy code",children:V(r?Je:We,{size:14})})]}),V(wr,{children:V("code",{children:e})})]})}function nr({isOpen:e,onClose:n,onSubmit:r,rating:t,config:o}){const[a,i]=le(""),[s,l]=le(!1);if(!e)return null;const d="THUMBS_UP"===t,c="ja"===o.language?d?"何が良かったですか？":"何が改善できますか？":d?"What was helpful?":"What could be improved?",u="ja"===o.language?d?"例：詳しい説明で理解しやすかった":"例：もう少し具体的な例が欲しい":d?"e.g., Clear and detailed explanation":"e.g., Could use more specific examples";return V(Mr,{onClick:n,children:V(Ar,{onClick:e=>e.stopPropagation(),children:[V(qr,{children:[V(jr,{positive:d,children:V(d?cn:dn,{size:16})}),V(Er,{children:c})]}),V(Ir,{children:V(Dr,{value:a,onChange:e=>i(e.target.value),placeholder:u,rows:3})}),V(Rr,{children:[V(Or,{onClick:()=>{r(""),n()},children:"ja"===o.language?"スキップ":"Skip"}),V(Nr,{onClick:()=>{l(!0);try{r(a),n()}catch(e){}finally{l(!1)}},disabled:s,children:s?"ja"===o.language?"送信中...":"Sending...":"ja"===o.language?"送信":"Send"})]})]})})}function rr({messageId:e,sessionId:n,feedback:r,onFeedbackSubmit:t,config:o}){const[a,i]=le(!1),[s,l]=le(null),[d,c]=le(r||null),u=e=>{d||(l(e),i(!0))};return V(k,{children:[V(_r,{children:[V($r,{children:"ja"===o.language?"この回答は役に立ちましたか？ 更なる改善のため、ぜひフィードバックをお願いします。":"Was this answer helpful? For further improvements, please share your feedback."}),V(Sr,{children:[V(zr,{onClick:()=>u("THUMBS_UP"),active:"THUMBS_UP"===(null==d?void 0:d.rating),disabled:!!d,positive:!0,title:"ja"===o.language?"役に立った":"Helpful",children:V(cn,{size:14})}),V(zr,{onClick:()=>u("THUMBS_DOWN"),active:"THUMBS_DOWN"===(null==d?void 0:d.rating),disabled:!!d,positive:!1,title:"ja"===o.language?"役に立たなかった":"Not helpful",children:V(dn,{size:14})})]}),d&&V(Cr,{children:"ja"===o.language?"フィードバックをありがとうございます！":"Thank you for your feedback!"})]}),V(nr,{isOpen:a,onClose:()=>{i(!1),l(null)},onSubmit:n=>{if(!s)return;const r={rating:s,content:n||void 0,submittedAt:(new Date).toISOString(),isSubmitted:!0};c(r),t(e,s,n)},rating:s,config:o})]})}function tr(e,n,r=0){try{const t=window.katex;if(t&&"function"==typeof t.renderToString){return V("span",{dangerouslySetInnerHTML:{F:t.renderToString(e,{displayMode:n,throwOnError:!1,strict:"ignore"})}},`k${r}`)}}catch(e){}return V("code",{className:"inline-code",children:e},`k${r}`)}function or(e,n,r){const t=[],o=/(\$\$[\s\S]+?\$\$|\\\([\s\S]+?\\\)|\$(?!\s)([^$]+?)\$(?!\w)|\[(\d+(?:,\s*\d+)*)\])/g;let a,i=0,s=0;for(;null!==(a=o.exec(e));){a.index>i&&t.push(e.slice(i,a.index));const l=a[0];if(l.startsWith("$$")){const e=l.slice(2,-2).trim();t.push(V("div",{className:"katex-block",children:tr(e,!0,`${r}-mb-${s}`)},`${r}-mb-${s++}`))}else if(l.startsWith("\\(")){const e=l.slice(2,-2).trim();t.push(V("span",{className:"katex-inline",children:tr(e,!1,`${r}-mi-${s}`)},`${r}-mi-${s++}`))}else if(l.startsWith("$")){const e=l.slice(1,-1).trim();t.push(V("span",{className:"katex-inline",children:tr(e,!1,`${r}-ms-${s}`)},`${r}-ms-${s++}`))}else if(l.startsWith("[")){const e=l.slice(1,-1).split(/,\s*/).map(e=>parseInt(e,10)).filter(e=>!isNaN(e)),o=[];e.forEach((t,a)=>{const i=n[t],l=(null==i?void 0:i.file_name)||(null==i?void 0:i.url)||`#${t}`,d=null==i?void 0:i.url,c="citation"+(d?" link":" disabled");d?o.push(V("a",{className:c,href:d,target:"_blank",rel:"noopener noreferrer",title:l,children:t},`${r}-c${s++}`)):o.push(V("span",{className:c,title:l,children:t},`${r}-c${s++}`)),a<e.length-1&&o.push(", ")}),t.push(V(k,{children:o}))}i=o.lastIndex}return i<e.length&&t.push(e.slice(i)),t.length>0?t:[e]}function ar(e=[],n,r){const t=[];return e.forEach((e,o)=>{const a=`${r}-${o}`;switch(e.type){case"strong":t.push(V("strong",{children:ar(e.tokens||[],n,`${a}-s`)},a));break;case"em":t.push(V("em",{children:ar(e.tokens||[],n,`${a}-e`)},a));break;case"codespan":t.push(V("code",{className:"inline-code",children:e.text},a));break;case"br":t.push(V("br",{},a));break;case"link":t.push(V("a",{href:e.href||e.text,target:"_blank",rel:"noopener noreferrer",className:"link",children:ar(e.tokens||[{type:"text",text:e.text}],n,`${a}-l`)},a));break;case"image":t.push(V("img",{src:e.href,alt:e.text||"",loading:"lazy",style:{maxWidth:"100%"}},a));break;default:or(e.text||e.raw||"",n,a).forEach(e=>t.push(e))}}),t}function ir(e=[],n,r=0){if(!e||r>16)return[];const t=[];return e.forEach((e,o)=>{const a=`blk-${r}-${o}`;switch(e.type){case"space":break;case"heading":{const r=`h${e.depth}`;t.push(V(r,{children:ar(e.tokens||[{type:"text",text:e.text}],n,`${a}-h`)},a));break}case"paragraph":{const r=(e.raw||"").trim().match(/^\$\$([\s\S]+)\$\$/);r?t.push(V("div",{className:"katex-block",children:tr(r[1].trim(),!0,`${a}-mb`)},a)):t.push(V("p",{children:ar(e.tokens||[{type:"text",text:e.text}],n,`${a}-p`)},a));break}case"code":t.push(V(er,{code:e.text||"",language:e.lang||""},a));break;case"blockquote":t.push(V("blockquote",{children:ir(e.tokens||[],n,r+1)},a));break;case"list":{const o=(e.items||[]).map((e,t)=>{const o=`${a}-li-${t}`,i=ir(e.tokens||[],n,r+1);return e.task&&i.unshift(V("input",{type:"checkbox",checked:Boolean(e.checked),readOnly:!0,style:{marginRight:"0.5rem"}},`${o}-chk`)),V("li",{children:i},o)});t.push(e.ordered?V("ol",{start:e.start||1,children:o},a):V("ul",{children:o},a));break}case"table":{const r=(e.header||[]).map((e,r)=>V("span",{children:ar(e.tokens||[{type:"text",text:e.text}],n,`${a}-th-${r}`)},`${a}-th-${r}`)),o=(e.rows||[]).map((e,r)=>e.map((e,t)=>V("span",{children:ar(e.tokens||[{type:"text",text:e.text}],n,`${a}-td-${r}-${t}`)},`${a}-td-${r}-${t}`)));t.push(V(Yn,{headers:r,data:o},a));break}case"hr":t.push(V("hr",{},a));break;case"html":t.push(V("p",{children:or(e.text||e.raw||"",n,`${a}-html`)},a));break;default:t.push(V("p",{children:ar(e.tokens||[{type:"text",text:e.text||e.raw||""}],n,`${a}-d`)},a))}}),t}function sr(e,n=!1,r){if(!e)return[];const t=e.replace(/\u0000/g,"").replace(/[\u2028\u2029]/g,"\n").replace(/^[\u00A0\u2000-\u200B\u3000]+/gm," "),o=Xn.lexer(t),a=function(e){const n={};return(e||[]).forEach((e,r)=>{n[r+1]=e}),n}(r);return ir(o,a,0)}function lr({messages:e,isLoading:n,streamingContent:r,config:t,sessionId:o,onFeedbackSubmit:a}){const i=ue(null),s=null==t?void 0:t.debug;return V(dr,{children:[e.map((e,n)=>{var r,i,l,d,c,u;return s&&e.role,"assistant"!==e.role||e.content?V(k,{children:[V(cr,{isUser:"user"===e.role,children:"user"===e.role?V(ur,{children:[V(fr,{children:e.content}),("boost"===(null===(r=e.metadata)||void 0===r?void 0:r.mode)||"fast"===(null===(i=e.metadata)||void 0===i?void 0:i.mode))&&V(Tr,{variant:e.metadata.mode,children:["fast"===e.metadata.mode?V(pn,{size:12}):V(un,{size:12}),V("span",{children:"fast"===e.metadata.mode?"Fast":"Boost"})]})]}):V(k,{children:V(hr,{children:V(pr,{children:[V(gr,{children:sr(e.content||"",!1,null===(l=e.metadata)||void 0===l?void 0:l.docMetadata)}),("boost"===(null===(d=e.metadata)||void 0===d?void 0:d.mode)||"fast"===(null===(c=e.metadata)||void 0===c?void 0:c.mode))&&V(Tr,{assistant:!0,variant:e.metadata.mode,children:["fast"===e.metadata.mode?V(pn,{size:12}):V(un,{size:12}),V("span",{children:"fast"===e.metadata.mode?"Fast":"Boost"})]})]})})})},e.id||n),"assistant"===e.role&&V(cr,{isUser:!1,children:V(hr,{children:V(pr,{children:V(rr,{messageId:e.id,sessionId:o,feedback:null===(u=e.metadata)||void 0===u?void 0:u.feedback,onFeedbackSubmit:a,config:t})})})},`${e.id}-feedback`)]}):null}).filter(Boolean),n&&r&&r.trim()&&V(cr,{isUser:!1,children:V(hr,{children:V(pr,{children:[V(mr,{children:"ja"===t.language?"リアルタイム応答中...":"Streaming response..."}),V(gr,{children:(()=>{try{return sr(r||"",!0,void 0)}catch(e){return V("p",{children:r||""})}})()})]})})}),V("div",{ref:i})]})}Xn.options=Xn.setOptions=function(e){var n;return Xn.defaults={...Xn.defaults,...e},n=Xn.defaults,mn=n,Xn},Xn.getDefaults=gn,Xn.defaults=mn,Xn.use=function(...e){const n=Xn.defaults.extensions||{renderers:{},childTokens:{}};e.forEach(e=>{const r={...e};if(r.async=Xn.defaults.async||r.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const r=n.renderers[e.name];n.renderers[e.name]=r?function(...n){let t=e.renderer.apply(this,n);return!1===t&&(t=r.apply(this,n)),t}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");n[e.level]?n[e.level].unshift(e.tokenizer):n[e.level]=[e.tokenizer],e.start&&("block"===e.level?n.startBlock?n.startBlock.push(e.start):n.startBlock=[e.start]:"inline"===e.level&&(n.startInline?n.startInline.push(e.start):n.startInline=[e.start]))}e.childTokens&&(n.childTokens[e.name]=e.childTokens)}),r.extensions=n),e.renderer){const n=Xn.defaults.renderer||new Zn;for(const r in e.renderer){const t=n[r];n[r]=(...o)=>{let a=e.renderer[r].apply(n,o);return!1===a&&(a=t.apply(n,o)),a}}r.renderer=n}if(e.tokenizer){const n=Xn.defaults.tokenizer||new Pn;for(const r in e.tokenizer){const t=n[r];n[r]=(...o)=>{let a=e.tokenizer[r].apply(n,o);return!1===a&&(a=t.apply(n,o)),a}}r.tokenizer=n}if(e.hooks){const n=Xn.defaults.hooks||new Gn;for(const r in e.hooks){const t=n[r];Gn.passThroughHooks.has(r)?n[r]=o=>{if(Xn.defaults.async)return Promise.resolve(e.hooks[r].call(n,o)).then(e=>t.call(n,e));const a=e.hooks[r].call(n,o);return t.call(n,a)}:n[r]=(...o)=>{let a=e.hooks[r].apply(n,o);return!1===a&&(a=t.apply(n,o)),a}}r.hooks=n}if(e.walkTokens){const n=Xn.defaults.walkTokens;r.walkTokens=function(r){let t=[];return t.push(e.walkTokens.call(this,r)),n&&(t=t.concat(n.call(this,r))),t}}Xn.setOptions(r)})},Xn.walkTokens=function(e,n){let r=[];for(const t of e)switch(r=r.concat(n.call(Xn,t)),t.type){case"table":for(const e of t.header)r=r.concat(Xn.walkTokens(e.tokens,n));for(const e of t.rows)for(const t of e)r=r.concat(Xn.walkTokens(t.tokens,n));break;case"list":r=r.concat(Xn.walkTokens(t.items,n));break;default:Xn.defaults.extensions&&Xn.defaults.extensions.childTokens&&Xn.defaults.extensions.childTokens[t.type]?Xn.defaults.extensions.childTokens[t.type].forEach(function(e){r=r.concat(Xn.walkTokens(t[e],n))}):t.tokens&&(r=r.concat(Xn.walkTokens(t.tokens,n)))}return r},Xn.parseInline=Kn(Jn.lexInline,Wn.parseInline),Xn.Parser=Wn,Xn.parser=Wn.parse,Xn.Renderer=Zn,Xn.TextRenderer=Vn,Xn.Lexer=Jn,Xn.lexer=Jn.lex,Xn.Tokenizer=Pn,Xn.Slugger=Qn,Xn.Hooks=Gn,Xn.parse=Xn,Xn.options,Xn.setOptions,Xn.use,Xn.walkTokens,Xn.parseInline,Xn.use({gfm:!0,breaks:!0,mangle:!1,headerIds:!1,smartypants:!0});const dr=Oe("div")`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`,cr=Oe("div")`
  display: flex;
  justify-content: ${e=>e.isUser?"flex-end":"flex-start"};
  align-items: flex-start;
`,ur=Oe("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  max-width: 70%;
`,fr=Oe("div")`
  padding: 1rem 1.25rem;
  background: var(--askdona-primary);
  color: white;
  border-radius: 1rem 1rem 0.25rem 1rem;
  font-size: 0.875rem;
  line-height: 1.6;
  word-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`,hr=Oe("div")`
  display: flex;
  gap: 0.75rem;
  max-width: 85%;
`,pr=Oe("div")`
  flex: 1;
  padding: 1rem 1.25rem;
  background: var(--askdona-background);
  border-radius: 1rem 1rem 1rem 0.25rem;
  font-size: 0.875rem;
  line-height: 1.6;
  word-wrap: break-word;
  word-break: break-word;
  color: var(--askdona-text);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`,gr=Oe("div")`
  line-height: 1.6;
  
  /* KaTeX adjustments */
  .katex { font-size: 1em; }
  .katex-display { overflow-x: auto; }
  .katex-block { margin: 0.75rem 0; }
  
  /* Ensure no extra top/bottom spacing inside bubble */
  > *:first-child {
    margin-top: 0 !important;
  }
  > *:last-child {
    margin-bottom: 0 !important;
  }
  
  /* Enhanced paragraph styles */
  p {
    margin: 0 0 1rem;
    line-height: 1.6;
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  /* Heading styles */
  h1, h2, h3, h4, h5, h6 {
    margin: 1.5rem 0 1rem;
    font-weight: 600;
    line-height: 1.25;
    
    &:first-child {
      margin-top: 0;
    }
  }
  
  h1 { font-size: 1.5rem; }
  h2 { font-size: 1.25rem; }
  h3 { font-size: 1.125rem; }
  h4 { font-size: 1rem; }
  h5 { font-size: 0.875rem; }
  h6 { font-size: 0.75rem; }
  
  /* List styles */
  ul, ol {
    margin: 0 0 1rem;
    padding-left: 1.5rem;
    line-height: 1.6;
    list-style-position: outside !important;
    list-style-type: disc !important;
    
    li {
      margin-bottom: 0.5rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  
  /* Inline code styles */
  .inline-code {
    background: var(--askdona-surface);
    padding: 0.125rem 0.375rem;
    border-radius: 0.375rem;
    font-family: 'SF Mono', Monaco, 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace;
    font-size: 0.813rem;
    border: 1px solid var(--askdona-border);
    color: var(--askdona-text);
  }
  
  /* Citation styles */
  .citation {
    background: var(--askdona-primary);
    color: white;
    padding: 0.125rem 0.5rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 600;
    margin: 0 0.125rem;
    display: inline-block;
    text-decoration: none;
  }
  .citation.link {
    cursor: pointer;
    transition: all 0.2s;
    color: white;
    text-decoration: none;
  }
  .citation.link:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: white;
    text-decoration: none;
  }
  .citation.disabled {
    cursor: default;
    opacity: 0.9;
  }
  
  /* Link styles */
  .link {
    color: var(--askdona-primary);
    text-decoration: none;
    transition: all 0.2s;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  /* Enhanced text formatting */
  strong {
    font-weight: 600;
    color: var(--askdona-text);
  }
  
  em {
    font-style: italic;
    color: var(--askdona-text-secondary);
  }
  
  /* Table styles handled by TanstackMarkdownTable */
  
  /* Blockquote styles */
  blockquote {
    margin: 1rem 0;
    padding-left: 1rem;
    border-left: 4px solid var(--askdona-primary);
    color: var(--askdona-text-secondary);
    font-style: italic;
  }
  
  /* Horizontal rule */
  hr {
    margin: 1.5rem 0;
    border: none;
    border-top: 1px solid var(--askdona-border);
  }
`,mr=Oe("div")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  font-style: italic;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: var(--askdona-primary);
    border-radius: 50%;
    animation: pulse 1.5s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.2);
    }
  }
`,br=Oe("div")`
  width: 100%;
  margin: 16px 0;
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid var(--askdona-border);
  background: var(--askdona-surface);
  
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 100%;
  }
  
  thead {
    background: var(--askdona-bg-secondary);
    border-bottom: 1px solid var(--askdona-border);
  }
  
  th {
    padding: 12px 16px;
    text-align: left;
    font-weight: 600;
    color: var(--askdona-text);
    font-size: 14px;
    white-space: nowrap;
  }
  
  tbody tr {
    border-bottom: 1px solid var(--askdona-border);
    transition: background-color 0.2s;
  }
  
  tbody tr:hover {
    background: var(--askdona-bg-hover);
  }
  
  tbody tr:last-child {
    border-bottom: none;
  }
  
  td {
    padding: 12px 16px;
    color: var(--askdona-text);
    font-size: 14px;
    line-height: 1.5;
    word-break: break-word;
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    
    th, td {
      padding: 8px 12px;
    }
  }
`,vr=Oe("div")`
  margin: 16px 0;
  border-radius: 8px;
  border: 1px solid var(--askdona-border);
  background: var(--askdona-surface);
  overflow: hidden;
`,yr=Oe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: var(--askdona-bg-secondary);
  border-bottom: 1px solid var(--askdona-border);
`,kr=Oe("span")`
  font-size: 12px;
  color: var(--askdona-text-secondary);
  font-weight: 500;
  text-transform: uppercase;
`,xr=Oe("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  background: transparent;
  border: 1px solid var(--askdona-border);
  border-radius: 4px;
  color: var(--askdona-text-secondary);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 12px;
  
  &:hover {
    background: var(--askdona-bg-hover);
    color: var(--askdona-text);
    border-color: var(--askdona-primary);
  }
  
  &:active {
    transform: translateY(1px);
  }
`,wr=Oe("pre")`
  margin: 0;
  padding: 16px;
  background: var(--askdona-surface);
  overflow-x: auto;
  font-family: 'SF Mono', Monaco, 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace;
  font-size: 14px;
  line-height: 1.5;
  
  code {
    background: none;
    padding: 0;
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: var(--askdona-text);
    white-space: pre;
    word-wrap: normal;
  }
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--askdona-bg-secondary);
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--askdona-border);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: var(--askdona-text-secondary);
  }
`,_r=Oe("div")`
  margin-top: 12px;
  padding: 8px 0;
`,$r=Oe("div")`
  font-size: inherit;
  color: var(--askdona-text); /* use normal text color */
  margin-bottom: 6px;
  font-weight: 500;
`,Sr=Oe("div")`
  display: flex;
  gap: 6px;
  align-items: center;
`,zr=Oe("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid var(--askdona-border);
  background: ${({active:e,positive:n})=>e?n?"#10b981":"#ef4444":"var(--askdona-background)"};
  color: ${({active:e})=>e?"white":"#374151"};
  cursor: pointer;
  transition: all 0.2s;
  
  svg {
    opacity: 1;
    color: inherit;
    fill: none;  // Both icons outlined (not filled)
    stroke: currentColor;
    stroke-width: 2;
  }
  
  &:hover:not(:disabled) {
    background: ${({active:e,positive:n})=>e?n?"#059669":"#dc2626":"var(--askdona-bg-hover)"};
    color: ${({active:e})=>e?"white":"#374151"};
    border-color: ${({active:e,positive:n})=>e?n?"#059669":"#dc2626":n?"#10b981":"#6b7280"};
    
    svg {
      opacity: 1;
      color: inherit;
      fill: currentColor;
      stroke: currentColor;
    }
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:active:not(:disabled) {
    transform: translateY(1px);
  }
`,Cr=Oe("div")`
  font-size: 11px;
  color: var(--askdona-text-secondary);
  margin-top: 6px;
  font-style: italic;
`,Mr=Oe("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  backdrop-filter: blur(2px);
`,Ar=Oe("div")`
  background: var(--askdona-background);
  border-radius: 12px;
  padding: 24px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--askdona-border);
`,qr=Oe("div")`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,jr=Oe("div")`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({positive:e})=>e?"#10b981":"#ef4444"};
  color: white;
  
  svg {
    color: inherit;
    fill: currentColor;
    stroke: currentColor;
  }
`,Er=Oe("h3")`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--askdona-text);
`,Ir=Oe("div")`
  margin-bottom: 20px;
`,Dr=Oe("textarea")`
  width: 100%;
  min-height: 80px;
  padding: 12px;
  border: 1px solid var(--askdona-border);
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  background: var(--askdona-surface);
  color: var(--askdona-text);
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--askdona-primary);
    box-shadow: 0 0 0 3px rgba(var(--askdona-primary-rgb), 0.1);
  }
  
  &::placeholder {
    color: var(--askdona-text-secondary);
  }
`,Rr=Oe("div")`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,Or=Oe("button")`
  padding: 8px 16px;
  border: 1px solid var(--askdona-border);
  border-radius: 6px;
  background: var(--askdona-background);
  color: var(--askdona-text-secondary);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: var(--askdona-bg-hover);
    color: var(--askdona-text);
  }
`,Nr=Oe("button")`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background: var(--askdona-primary);
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover:not(:disabled) {
    background: var(--askdona-primary-dark);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Tr=Oe("div")`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  background: ${e=>"boost"===e.variant?"#1D3D5E":"#1D5E3D"};
  color: white;
  margin-top: ${e=>e.assistant?"0.75rem":"0"};
  
  svg {
    opacity: 0.9;
  }
  
  span {
    font-size: 0.7rem;
    letter-spacing: 0.025em;
  }
  
  @media (prefers-color-scheme: dark) {
    background: #FFE699;
    color: black;
  }
`,Fr=Oe("div")`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  padding: 16px;
`,Pr=Oe("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`,Lr=Oe("div")`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #1e293b;
  font-size: 14px;
`,Hr=Oe("button")`
  padding: 4px;
  border: none;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  color: #64748b;
  
  &:hover {
    background: #f1f5f9;
    color: #ef4444;
  }
`,Ur=Oe("div")`
  margin-bottom: 12px;
`,Br=Oe("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
`,Jr=Oe("label")`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border: 1px solid ${e=>e.isSelected?"var(--askdona-primary)":"#e2e8f0"};
  background: ${e=>e.isSelected?"#dbeafe":"white"};
  color: ${e=>e.isSelected?"#1e40af":"#4b5563"};
  border-radius: 16px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s;
  user-select: none;
  
  &:hover {
    border-color: var(--askdona-primary);
    background: ${e=>e.isSelected?"#bfdbfe":"#f0f9ff"};
  }
`,Zr=Oe("input")`
  margin: 0;
  width: 12px;
  height: 12px;
`,Vr=Oe("div")`
  font-size: 12px;
  color: #64748b;
  padding-top: 8px;
  border-top: 1px solid #f1f5f9;
`,Qr=e=>e.replace(/[^a-zA-Z0-9_-]/g,"_");function Wr({filter:e,keyData:n,onFilterChange:r,onFilterRemove:t}){const o=he((n,t="input")=>{const o=e.selectedValues.includes(n)?e.selectedValues.filter(e=>e!==n):[...e.selectedValues,n];r({...e,selectedValues:o})},[e,r]),a=he(()=>{t(e.key)},[e.key,t]);return V(Fr,{children:[V(Pr,{children:[V(Lr,{children:[V(ln,{size:14}),e.key,n.isCustom&&V("span",{style:{fontSize:"10px",color:"#6b7280",background:"#f3f4f6",padding:"2px 6px",borderRadius:"8px"},children:"カスタム"})]}),V(Hr,{onClick:a,title:"フィルターを削除",children:V(hn,{size:14})})]}),V(Ur,{children:V(Br,{children:n.values.map(n=>{const r=e.selectedValues.includes(n),t=`metadata-filter-${Qr(e.key)}-${Qr(n)}`,a=`metadata-filter-${Qr(e.key)}`;return V(Jr,{isSelected:r,htmlFor:t,children:[V(Zr,{type:"checkbox",checked:r,id:t,name:a,onChange:e=>{e.stopPropagation(),o(n,"checkbox")}}),n]},n)})})}),V(Vr,{children:e.selectedValues.length>0?V(k,{children:[V("strong",{children:[e.selectedValues.length,"個の値を選択中:"]}),V("br",{}),e.selectedValues.join(", "),V("br",{}),V("em",{children:"選択した値のいずれかを含むファイルが対象になります (OR条件)"})]}):V("em",{children:"値を選択してください"})})]})}const Gr=Oe("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: fadeIn 0.15s ease-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,Kr=Oe("div")`
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 800px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  animation: scaleIn 0.15s ease-out;
  
  @keyframes scaleIn {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`,Xr=Oe("div")`
  padding: 12px 20px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Yr=Oe("h2")`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 8px;
`,et=Oe("button")`
  padding: 8px;
  border: none;
  background: none;
  border-radius: 6px;
  cursor: pointer;
  color: #64748b;
  
  &:hover {
    background: #f1f5f9;
    color: #334155;
  }
`,nt=Oe("div")`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,rt=Oe("div")`
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
`,tt=Oe("div")`
  margin-bottom: 16px;
`,ot=Oe("label")`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  display: block;
`,at=Oe("div")`
  display: flex;
  gap: 16px;
`,it=Oe("label")`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #4b5563;
`,st=Oe("input")`
  margin: 0;
`,lt=Oe("button")`
  padding: 6px 12px;
  border: 1px solid #e2e8f0;
  background: white;
  color: #64748b;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }
`,dt=Oe("div")`
  flex: 1;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,ct=Oe("div")`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,ut=Oe("h3")`
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 16px 0;
`,ft=Oe("div")`
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`,ht=Oe("input")`
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  margin-bottom: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2364748b' viewBox='0 0 24 24'%3E%3Cpath d='M21 20l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 12px center;
`,pt=Oe("button")`
  width: 100%;
  padding: 12px;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 6px;
  text-align: left;
  cursor: pointer;
  margin-bottom: 8px;
  
  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }
`,gt=Oe("div")`
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 4px;
`,mt=Oe("div")`
  font-size: 12px;
  color: #64748b;
`,bt=Oe("div")`
  text-align: center;
  color: #64748b;
  padding: 40px 20px;
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    color: #cbd5e1;
  }
`,vt=Oe("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  color: #64748b;
  
  svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,yt=Oe("div")`
  text-align: center;
  color: #ef4444;
  padding: 40px 20px;
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
  }
`;function kt({isOpen:e,onClose:n,metadataKeys:r,filters:t,onFiltersChange:o,isLoading:a,error:i}){const[s,l]=le(""),[d,c]=le(t||{filters:[],globalOperator:"AND"});de(()=>{c(t||{filters:[],globalOperator:"AND"})},[t]);const u=he(e=>{e.target===e.currentTarget&&n()},[n]),f=he(()=>{const e=d.filters.some(e=>e.selectedValues.length>0);o(e?d:null),n()},[d,o,n]),h=he(()=>{c({filters:[],globalOperator:"AND"})},[]),p=he(e=>{const n={key:e,selectedValues:[],operator:"OR"};c(e=>({...e,filters:[...e.filters,n]}))},[]),g=he(e=>{c(n=>({...n,filters:n.filters.filter(n=>n.key!==e)}))},[]),m=he(e=>{c(n=>({...n,filters:n.filters.map(n=>n.key===e.key?e:n)}))},[]),b=he(e=>{c(n=>({...n,globalOperator:e}))},[]),v=r.filter(e=>{const n=d.filters.some(n=>n.key===e.key);if(n)return!1;if(s){const n=s.toLowerCase();return e.key.toLowerCase().includes(n)||e.values.some(e=>e.toLowerCase().includes(n))}return!0});return e?V(Gr,{onClick:u,children:V(Kr,{onClick:e=>e.stopPropagation(),children:[V(Xr,{children:[V(Yr,{children:[V(Ye,{size:20}),"絞り込み設定",d.filters.length>0&&V("span",{style:{color:"#64748b",fontWeight:400,fontSize:"14px"},children:["(",d.filters.reduce((e,n)=>e+n.selectedValues.length,0),"件の条件)"]})]}),V(et,{onClick:n,children:V(hn,{size:20})})]}),V(nt,{children:[d.filters.length>0&&V(rt,{children:[d.filters.length>1&&V(tt,{children:[V(ot,{children:"フィルター間の関係"}),V(at,{children:[V(it,{children:[V(st,{type:"radio",name:"globalOperator",checked:"AND"===d.globalOperator,onChange:()=>b("AND")}),"AND（すべての条件を満たす）"]}),V(it,{children:[V(st,{type:"radio",name:"globalOperator",checked:"OR"===d.globalOperator,onChange:()=>b("OR")}),"OR（いずれかの条件を満たす）"]})]})]}),V("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[V("span",{style:{fontSize:"14px",color:"#64748b"},children:"文書のメタデータでフィルタリングして検索範囲を絞り込みます"}),d.filters.length>0&&V(lt,{onClick:h,children:"すべてクリア"})]})]}),V(dt,{children:[V(ct,{children:[V(ut,{children:"設定済みフィルター"}),V(ft,{children:d.filters.length>0?V("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:d.filters.map(e=>{const n=r.find(n=>n.key===e.key);return n?V(Wr,{filter:e,keyData:n,onFilterChange:m,onFilterRemove:g},e.key):null})}):V(bt,{children:[V(Ye,{}),V("div",{style:{fontWeight:500,marginBottom:"4px"},children:"まだフィルターが設定されていません"}),V("div",{style:{fontSize:"14px"},children:"右側から絞り込み項目を選択してください"})]})})]}),V(ct,{children:[V(ut,{children:"利用可能な絞り込み"}),V(ht,{type:"text",placeholder:"絞り込み条件を検索...",value:s,onChange:e=>l(e.target.value)}),V(ft,{children:a?V(vt,{children:[V(rn,{}),"読み込み中..."]}):i?V(yt,{children:[V(Ze,{}),V("div",{style:{fontWeight:500,marginBottom:"4px"},children:"エラーが発生しました"}),V("div",{style:{fontSize:"14px"},children:i})]}):v.length>0?V("div",{children:v.map(e=>V(pt,{onClick:()=>p(e.key),children:[V(gt,{children:e.key}),V(mt,{children:[e.values.length,"個の値 • ",e.count,"件のファイル",V("br",{}),"例: ",e.values.slice(0,3).join(", "),e.values.length>3&&"..."]})]},e.key))}):V(bt,{children:[V(sn,{}),V("div",{style:{fontWeight:500,marginBottom:"4px"},children:s?"検索結果がありません":"すべてのメタデータキーが選択済みです"})]})})]})]})]}),V("div",{style:{padding:"16px 20px",borderTop:"1px solid #e2e8f0",display:"flex",justifyContent:"flex-end",gap:"8px"},children:[V("button",{onClick:n,style:{padding:"8px 16px",border:"1px solid #e2e8f0",background:"white",color:"#374151",borderRadius:"6px",cursor:"pointer"},children:"キャンセル"}),V("button",{onClick:f,style:{padding:"8px 16px",border:"none",background:"#3b82f6",color:"white",borderRadius:"6px",cursor:"pointer",fontWeight:"500"},children:"適用"})]})]})}):null}const xt=Oe("button")`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px; /* Match Boost */
  border: 1px solid var(--askdona-border);
  border-radius: 16px;
  background: ${e=>e.hasActiveFilters?"var(--askdona-primary)":"var(--askdona-background)"};
  color: ${e=>e.hasActiveFilters?"#ffffff":"var(--askdona-text-secondary)"};
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: ${e=>e.hasActiveFilters?"var(--askdona-primary-dark)":"var(--askdona-border)"};
    border-color: ${e=>e.hasActiveFilters?"var(--askdona-primary-dark)":"var(--askdona-text-secondary)"};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,wt=Oe("span")`
  background: rgba(255, 255, 255, 0.9);
  color: #1e40af;
  padding: 0px 4px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 600;
  min-width: 14px;
  text-align: center;
  margin-left: 2px;
`,_t=Oe(Ye)`
  width: 14px;
  height: 14px;
`;function $t({chatflowId:e,filters:n,onFiltersChange:r,disabled:t=!1,className:o,language:a="ja"}){var i;const[s,l]=le(!1),[d,c]=le(!1),[u,f]=le([]),[h,p]=le(null),[g,m]=le(!1),[b,v]=le(null),[y,x]=le(!1),w=(null===(i=null==n?void 0:n.filters)||void 0===i?void 0:i.reduce((e,n)=>{var r;return e+((null===(r=n.selectedValues)||void 0===r?void 0:r.length)||0)},0))||0,_=w>0;de(()=>{let n=!0;const r=async()=>{if(await new Promise(e=>setTimeout(e,10)),n){m(!0);try{const r=await async function(e){try{return await B(`/metadata/${e}/check`,{method:"GET"})}catch(e){return{enable_metadata_filtering:!1,error:e.message}}}(e);n&&(p(r.enable_metadata_filtering),v(null))}catch(e){n&&(p(!1),v(e.message))}finally{n&&m(!1)}}};return e&&r(),()=>{n=!1}},[e]);const $=he(()=>{l(!0),!g&&y||c(!0),v(null)},[g,y]);de(()=>{if(!s||y)return;if(g)return;if(!1===h)return v("メタデータフィルタリングはこのチャットフローで利用できません"),c(!1),void x(!0);(async()=>{try{const n=await async function(e){try{return await B(`/metadata/${e}/keys`,{method:"GET"})}catch(e){return{success:!1,error:e.message}}}(e);n.success&&n.metadataKeys?f(n.metadataKeys):(v(n.error||"Failed to fetch metadata keys"),f([])),x(!0)}catch(e){v(e.message),f([]),x(!0)}finally{c(!1)}})()},[s,e,y,g,h]);const S=he(()=>{l(!1),f([]),c(!1),v(null),x(!1)},[]);return!0!==h?null:V(k,{children:[V(xt,{hasActiveFilters:_,onClick:$,disabled:t,className:o,type:"button",title:g?"ja"===a?"フィルタ機能を確認中...":"Checking filter availability...":"ja"===a?"結果を絞り込む":"Filter results",children:[V(_t,{}),V("span",{children:"ja"===a?"絞り込み":"Filter"}),_&&V(wt,{children:w})]}),s&&V(kt,{isOpen:s,onClose:S,metadataKeys:u,filters:n,onFiltersChange:r,isLoading:d,error:b})]})}const St={idle:0,initializing:10,thinking:22,searching:42,synthesizing:58,processing:72,streaming:88,answering:90,finalizing:96,completing:98,complete:100,error:100},zt=[{time:0,minProgress:5,label:"initializing"},{time:2e3,minProgress:12,label:"thinking"},{time:5e3,minProgress:20,label:"searching"},{time:9e3,minProgress:32,label:"synthesizing"},{time:13e3,minProgress:48,label:"processing"},{time:16e3,minProgress:64,label:"answering"},{time:18e3,minProgress:76,label:"finalizing"},{time:2e4,minProgress:88,label:"completing"},{time:21e3,minProgress:96,label:"complete"}],Ct=[{time:0,minProgress:5,label:"initializing"},{time:2e3,minProgress:12,label:"thinking"},{time:5e3,minProgress:20,label:"searching"},{time:9e3,minProgress:32,label:"synthesizing"},{time:13e3,minProgress:48,label:"processing"},{time:16e3,minProgress:64,label:"answering"},{time:29e3,minProgress:76,label:"finalizing"},{time:31e3,minProgress:88,label:"completing"},{time:32e3,minProgress:96,label:"complete"}];const Mt={ja:{thinking:"考え中...",searching:"データベースを検索中...",synthesizing:"情報を整理中...",answering:"推論中...",executing_functions:"ツールを実行中...",processing_function_results:"実行結果を処理中...",complete:"情報を統合中...",error:"エラーが発生しました"},en:{thinking:"Thinking...",searching:"Searching the database...",synthesizing:"Organizing information...",answering:"Reasoning...",executing_functions:"Running tools...",processing_function_results:"Processing tool results...",complete:"Synthesizing...",error:"An error occurred"}};function At({messages:e,isLoading:n,streamingContent:r,onSendMessage:t,onSendExampleQuestion:o,error:a,config:i,currentState:s,chatMode:l="standard",onChatModeChange:d,sessionId:c,onFeedbackSubmit:u,showIntro:f,metadataFilters:h=null,onMetadataFiltersChange:p,currentMode:g,onModeSwitch:m,onClearChat:b}){const v=l||"standard",y="boost"===v,x="fast"===v,[w,_]=le(""),{progress:$,displayState:S}=function({isLoading:e,boostMode:n=!1,currentState:r}){const[t,o]=le(0),[a,i]=le(r||"idle"),s=ue(null),l=ue(0),d=ue(null),c=n?Ct:zt,u=c[c.length-1].time;return de(()=>{e&&!s.current?(s.current=Date.now(),l.current=0,o(c[0].minProgress)):e||(s.current=null,l.current=0,o(0),i("idle"),d.current&&cancelAnimationFrame(d.current))},[e,c]),de(()=>{if(!e||!s.current)return;const n=()=>{var t,a;const f=Date.now()-s.current;let h=0,p="processing";for(let e=c.length-1;e>=0;e--)if(f>=c[e].time){const n=c[e];if(e<c.length-1){const r=c[e+1],t=r.time-n.time,o=f-n.time,a=Math.min(o/t,1);h=n.minProgress+(r.minProgress-n.minProgress)*a}else h=n.minProgress;p=n.label||"processing";break}const g=98*function(e){return e<.5?2*e*e:(4-2*e)*e-1}(Math.min(f/u,1)),m=Math.max(h,g,l.current);let b=Math.min(m,98);const v=(p||"processing").toLowerCase(),y=(r||"").toLowerCase(),k=null!==(t=St[v])&&void 0!==t?t:72,x=y?null!==(a=St[y])&&void 0!==a?a:72:100,w=Math.min(k,x);b=Math.min(b,w),b>l.current&&(l.current=b,o(b)),i(p),e&&b<98&&(d.current=requestAnimationFrame(n))};return n(),()=>{d.current&&cancelAnimationFrame(d.current)}},[e,c,u,r]),de(()=>{if("answering"===r&&"answering"===a){const e=90;l.current<e&&(l.current=e,o(e))}},[r,a]),{progress:t,displayState:a,isProgressing:e}}({isLoading:n,boostMode:y,currentState:s}),[z,C]=le(0===e.length),[M,A]=le(!1),q=ue(null),j=void 0!==f?f:z;de(()=>{void 0===f&&e.length>0&&C(!1)},[e,f]);const E=e=>{const n=e||q.current;if(!n)return;n.style.height="auto";const r=n.scrollHeight;n.style.height=`${r}px`,n.style.lineHeight=r<=32?"32px":"1.5"};de(()=>{!n&&q.current&&"function"==typeof q.current.focus&&(q.current.focus(),q.current.style.minHeight="32px",E())},[n]);const I=e=>{null==e||e.preventDefault(),w.trim()&&!n&&(t(w.trim(),v,h),_(""))},D=e=>{if(!d)return;d(v===e?"standard":e)},R=i.exampleQuestions||("ja"===i.language?["RAGシステムについて教えてください","ドキュメントの検索方法は？","APIの使い方を教えてください"]:["What is RAG system?","How do I search documents?","How to use the API?"]);return V(qt,{children:[V(Rt,{children:[j?V(Ot,{children:[V(Nt,{children:V(tn,{size:24,color:"white"})}),V(Tt,{children:i.introTitle||("ja"===i.language?"こんにちは！":"Hi there!")}),i.introMessage?V(Ft,{dangerouslySetInnerHTML:{F:L(i.introMessage)}}):V(Ft,{children:"ja"===i.language?"AskDona AIアシスタントです。ドキュメントや情報について何でもお聞きください。":"I'm AskDona AI assistant. Ask me anything about your documents and information."}),V(Pt,{children:[V(Lt,{children:"ja"===i.language?"質問例":"Example Questions"}),V(Ht,{children:R.map((e,n)=>V(Ut,{onClick:()=>(e=>{o?o(e,h):t(e,v,h)})(e),children:e},n))})]})]}):V(lr,{messages:e,isLoading:n,streamingContent:r,config:i,sessionId:c,onFeedbackSubmit:u}),n&&V(Jt,{children:[V(Zt,{children:[V(Vt,{}),V(Qt,{children:r.trim()?"ja"===i.language?"リアルタイム応答中...":"Streaming response...":Mt[i.language||"ja"][S]||Mt[i.language||"ja"][s||""]||("ja"===i.language?"処理中...":"Processing...")})]}),!r.trim()&&V(Wt,{children:V(Gt,{progress:$})})]}),a&&V(Bt,{children:"ja"===i.language?`エラーが発生しました: ${a.message}`:`Error: ${a.message}`})]}),m&&V(jt,{children:V(Et,{children:[V(It,{type:"button",active:"ask-ai"===(g||"ask-ai"),onClick:()=>m("ask-ai"),children:"ja"===i.language?"AIに質問":"Ask AI"}),V(It,{type:"button",active:"search"===g,onClick:()=>m("search"),children:"ja"===i.language?"検索":"Search"}),i.enableDeepResearch&&V(It,{type:"button",active:"deep-research"===g,onClick:()=>m("deep-research"),children:(i.language,"Deep Research")}),b&&"ask-ai"===(g||"ask-ai")&&e.length>0&&V(Dt,{type:"button",onClick:b,title:"ja"===i.language?"新しいセッションを開始":"Start new session","aria-label":"ja"===i.language?"新しいセッションを開始":"Start new session",disabled:n,children:V(an,{size:14})})]})}),V(Kt,{children:V(no,{boostMode:y,children:V(ro,{children:[V(to,{children:V(io,{ref:q,value:w,onChange:e=>{const n=e.target;_(n.value),E(n)},onKeyDown:e=>{M||(e=>{"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),I())})(e)},onCompositionStart:()=>{A(!0)},onCompositionEnd:()=>{A(!1)},placeholder:"ja"===i.language?"質問を入力してください... (Ctrl+Enter または ⌘+Enter で送信)":"Ask me anything... (Ctrl+Enter or ⌘+Enter to send)",disabled:n,rows:1,boostMode:y})}),V(oo,{children:[V("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[i.chatflowId&&p&&V($t,{chatflowId:i.chatflowId,filters:h,onFiltersChange:p,disabled:n,language:i.language||"ja"}),i.allowBoostModeToggle&&d&&V(k,{children:[V(Xt,{onClick:()=>D("fast"),disabled:n,active:x,title:"ja"===i.language?"Fastモードは、思考プロセスを簡素化して素早く回答します。":"Fast mode generates quicker answers with lighter reasoning.",children:[V(Yt,{active:x,children:V(pn,{size:14})}),V(eo,{children:"Fast"})]}),V(Xt,{onClick:()=>D("boost"),disabled:n,active:y,title:"ja"===i.language?"Boostモードは、より多角的な視点から多くの文書を分析して回答します。":"Boost mode analyzes more documents from multiple perspectives for comprehensive answers.",children:[V(Yt,{active:y,children:V(un,{size:14})}),V(eo,{children:"Boost"})]})]})]}),V(ao,{onClick:I,disabled:!w.trim()||n,title:"ja"===i.language?"Ctrl+Enter または ⌘+Enter で送信":"Ctrl+Enter or ⌘+Enter to send",type:"button","data-askdona-button":"send","data-disabled":!w.trim()||n,children:V(Ue,{size:16,color:(()=>{var e;if(!w.trim()||n){return(null===(e=getComputedStyle(document.documentElement).getPropertyValue("--askdona-text-secondary"))||void 0===e?void 0:e.trim())||"#6b6f8a"}return"white"})()})})]})]})})})]})}const qt=Oe("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,jt=Oe("div")`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem 0.25rem;
  flex-shrink: 0;
  align-items: center;
  /* tabs aligned left by default */
`,Et=Oe("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
`,It=Oe("button")`
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.8125rem;
  transition: all 0.2s;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${e=>e.active?"var(--askdona-tab-accent, var(--askdona-primary))":"var(--askdona-text-secondary)"};

  &:hover {
    color: ${e=>e.active?"var(--askdona-tab-accent, var(--askdona-primary))":"var(--askdona-text)"};
    background: ${e=>e.active?"transparent":"var(--askdona-background)"};
  }

  ${e=>e.active&&"\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -0.35rem;\n      left: 0;\n      right: 0;\n      height: 2px;\n      background: var(--askdona-tab-accent, var(--askdona-primary));\n    }\n  "}
`,Dt=Oe("button")`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid var(--askdona-border);
  background: transparent;
  color: var(--askdona-text-secondary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover:not(:disabled) {
    background: var(--askdona-background);
    color: var(--askdona-text);
    border-color: var(--askdona-primary);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Rt=Oe("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
`,Ot=Oe("div")`
  text-align: center;
  padding: 2rem 0;
`,Nt=Oe("div")`
  width: 3rem;
  height: 3rem;
  background: var(--askdona-chat-icon, var(--askdona-primary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
`,Tt=Oe("h3")`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--askdona-text);
`,Ft=Oe("p")`
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  margin: 0 auto 2rem;
  max-width: 90%;
  line-height: 1.5;
`,Pt=Oe("div")`
  margin-top: 2rem;
`,Lt=Oe("h4")`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--askdona-text-secondary);
  margin: 0 0 1rem;
`,Ht=Oe("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`,Ut=Oe("button")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  padding: 0.625rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: var(--askdona-text);
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: var(--askdona-border);
    border-color: var(--askdona-text-secondary);
  }
`,Bt=Oe("div")`
  background: rgba(239, 68, 68, 0.1);
  color: var(--askdona-error);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  font-size: 0.875rem;
`,Jt=Oe("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  margin: 1rem 0;
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
`,Zt=Oe("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Vt=Oe("div")`
  width: 8px;
  height: 8px;
  background: var(--askdona-primary);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.1);
    }
  }
`,Qt=Oe("span")`
  font-weight: 500;
`,Wt=Oe("div")`
  width: 30%;
  height: 6px;
  background: var(--askdona-border);
  border-radius: 3px;
  overflow: hidden;
`,Gt=Oe("div")`
  height: 100%;
  background: linear-gradient(90deg, var(--askdona-primary), var(--askdona-primary-light));
  border-radius: 3px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  width: ${({progress:e})=>`${e}%`};
  transform-origin: left center;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 20px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3));
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-20px); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateX(0); opacity: 0; }
  }
`,Kt=Oe("div")`
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  flex-shrink: 0;
`,Xt=Oe("button")`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  border-radius: 16px;
  border: 1px solid var(--askdona-border);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  ${({active:e})=>e?"\n      background: var(--askdona-mode-active, var(--askdona-primary));\n      color: white;\n      border-color: var(--askdona-mode-active, var(--askdona-primary));\n      \n      &:hover:not(:disabled) {\n        background: var(--askdona-mode-active-hover, var(--askdona-primary-dark));\n        border-color: var(--askdona-mode-active-hover, var(--askdona-primary-dark));\n      }\n    ":"\n      background: var(--askdona-background);\n      color: var(--askdona-text-secondary);\n      \n      &:hover:not(:disabled) {\n        background: var(--askdona-border);\n        color: var(--askdona-text);\n      }\n    "}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Yt=Oe("span")`
  display: flex;
  align-items: center;
  opacity: ${({active:e})=>e?1:.8};
`,eo=Oe("span")`
  font-weight: 500;
  font-size: 12px;
`,no=Oe("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  
  ${({boostMode:e})=>e&&"\n    &::before {\n      content: '';\n      position: absolute;\n      top: -2px;\n      left: -2px;\n      right: -2px;\n      bottom: -2px;\n      background: linear-gradient(135deg, var(--askdona-primary), var(--askdona-primary-light));\n      border-radius: 0.875rem;\n      z-index: -1;\n    }\n  "}
`,ro=Oe("div")`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem;
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  background: var(--askdona-background);
  transition: all 0.2s;
  position: relative;
  z-index: 1;
  width: 100%;
  /* Removed max-width to allow full horizontal stretch */
`,to=Oe("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`,oo=Oe("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
`,ao=Oe("button")`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: var(--askdona-primary);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0; /* avoid inline baseline shift */
  transform-origin: center;
  transition: background-color 0.2s, box-shadow 0.2s;

  /* Ensure SVG is centered without baseline gap */
  & > svg { display: block; }
  
  &[data-disabled="true"] {
    background: var(--askdona-border);
    cursor: not-allowed;
  }
  
  &:hover:not([data-disabled="true"]) {
    background: var(--askdona-primary-dark);
    box-shadow: 0 0 0 4px color-mix(in oklab, var(--askdona-primary) 20%, transparent);
  }
`,io=Oe("textarea")`
  flex: 1;
  width: auto;
  padding: 0 0.5rem; /* no vertical padding for true vertical centering */
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  resize: none;
  outline: none;
  transition: all 0.2s;
  background: transparent;
  color: var(--askdona-text);
  min-height: ${32}px;
  /* Full expand with content (no internal cap) */
  max-height: none;
  line-height: ${32}px; /* center single-line & placeholder by default */
  overflow-y: hidden; /* no internal scroll; container adjusts */
  position: relative;
  z-index: 1;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  
  ${({boostMode:e})=>e&&"\n    border-color: transparent;\n  "}
  
  &:focus {
    outline: none;
    border-color: ${({boostMode:e})=>e?"transparent":"var(--askdona-border)"};
    box-shadow: none;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: var(--askdona-text-secondary);
    font-family: inherit;
  }
`;class so{static getStorageKey(){return"askdona_search_history"}static getAllHistory(){try{const e=localStorage.getItem(this.getStorageKey());if(!e)return[];const n=JSON.parse(e),r=Date.now()-2592e6;return n.filter(e=>e.timestamp>r)}catch(e){return[]}}static saveHistory(e){try{const n=e.slice(0,50);localStorage.setItem(this.getStorageKey(),JSON.stringify(n))}catch(e){}}static addSearchHistory(e,n,r,t){const o={id:`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,query:n.trim(),resultsCount:r,searchTime:t,timestamp:Date.now(),chatflowId:e},a=this.getAllHistory();a.unshift(o),this.saveHistory(a)}static getSearchHistory(e,n=20){return this.getAllHistory().filter(n=>n.chatflowId===e).slice(0,n)}static getRecentQueries(e,n=10,r=!0){const t=this.getSearchHistory(e,r?100:n);if(r){const e=new Set,r=[];for(const o of t){const t=o.query.toLowerCase();if(!e.has(t)&&(e.add(t),r.push(o.query),r.length>=n))break}return r}return t.map(e=>e.query)}static getPopularQueries(e,n=10){const r=this.getSearchHistory(e,1e3),t=new Map;return r.forEach(e=>{const n=e.query.toLowerCase();t.set(n,(t.get(n)||0)+1)}),Array.from(t.entries()).map(([e,n])=>{var t;return{query:(null===(t=r.find(n=>n.query.toLowerCase()===e))||void 0===t?void 0:t.query)||e,count:n}}).sort((e,n)=>n.count-e.count).slice(0,n)}static clearHistory(e){if(e){const n=this.getAllHistory().filter(n=>n.chatflowId!==e);this.saveHistory(n)}else localStorage.removeItem(this.getStorageKey())}static getHistoryStats(e){const n=this.getSearchHistory(e,1e3);if(0===n.length)return{totalSearches:0,uniqueQueries:0,avgResultsCount:0,avgSearchTime:0};const r=new Set(n.map(e=>e.query.toLowerCase())).size,t=n.reduce((e,n)=>e+n.resultsCount,0)/n.length,o=n.reduce((e,n)=>e+n.searchTime,0)/n.length;return{totalSearches:n.length,uniqueQueries:r,avgResultsCount:Math.round(t),avgSearchTime:Math.round(o)}}}function lo({config:e,currentMode:n,onModeSwitch:r,onClearSearch:t}){var o,a;const[i,s]=le(""),[l,d]=le(null),[c,u]=le([]),[f,h]=le({}),[p,g]=le(!1),[m,b]=le(null),v=ue(null),[y,x]=le(!1),{recentQueries:w,addSearchHistory:_}=function(e,n={}){const{limit:r=20,uniqueQueries:t=!0,autoRefresh:o=!0}=n,[a,i]=le([]),[s,l]=le([]),d=he(()=>{if(!e)return;const n=so.getRecentQueries(e,r,t);i(n);const o=so.getPopularQueries(e,10);l(o)},[e,r,t]);de(()=>{o&&d()},[o,d]);const c=he((n,r,t)=>{e&&n.trim()&&(so.addSearchHistory(e,n,r,t),o&&d())},[e,o,d]),u=he(()=>{e&&(so.clearHistory(e),i([]),l([]))},[e]),f=he(()=>e?so.getHistoryStats(e):null,[e]);return{recentQueries:a,popularQueries:s,addSearchHistory:c,clearHistory:u,refresh:d,getStats:f}}(e.chatflowId),$=`askdona_widget_last_search_${e.chatflowId}`,S=he((e,n)=>{try{const r={query:e,response:n,savedAt:Date.now()};localStorage.setItem($,JSON.stringify(r))}catch(e){}},[$]),z=he(()=>{try{const e=localStorage.getItem($);if(!e)return null;const n=JSON.parse(e);return n&&"object"==typeof n?n:null}catch(e){return null}},[$]);de(()=>{v.current&&"function"==typeof v.current.focus&&v.current.focus();const e=z();e&&e.response&&(s(e.query||""),d(e.response),u(e.response.results||[]),h({}))},[z]);const C=he(async n=>{var r;if(!n.trim())return d(null),void u([]);h({}),g(!0),b(null);const t=Date.now();try{const o={query:n,filters:{}},a=await async function(e,n){try{return await B(`/search/${e}`,{method:"POST",body:JSON.stringify(n)})}catch(e){throw e}}(e.chatflowId,o);d(a),u(a.results||[]),S(n,a);const i=Date.now()-t;_(n,(null===(r=a.results)||void 0===r?void 0:r.length)||0,i)}catch(e){b(e instanceof Error?e.message:"Unknown error occurred"),d(null),u([])}finally{g(!1)}},[e.chatflowId,_,S]),M=he(()=>{i.trim()&&C(i.trim())},[i,C]),A=he(e=>{y||"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),M())},[M,y]),q=fe(()=>{if(!c.length)return[];let e=[...c];return f.categories&&f.categories.length>0&&(e=e.filter(e=>{var n,r;const t=null===(n=e.fileMetadata)||void 0===n?void 0:n.category,o=null===(r=e.fileMetadata)||void 0===r?void 0:r.subCategory;return f.categories.includes(t||"")||f.categories.includes(o||"")})),f.fileTypes&&f.fileTypes.length>0&&(e=e.filter(e=>f.fileTypes.includes(e.fileFormat))),e},[c,f]),j=fe(()=>q,[q]),E=he(()=>{s(""),d(null),u([]),h({}),b(null);{const e=v.current;e&&"function"==typeof e.focus&&e.focus()}try{localStorage.removeItem($)}catch(e){}t&&t()},[$,t]),I=e=>{h(e)},D=e=>{if(!i.trim())return V(k,{children:e});return V(k,{children:e.split(new RegExp(`(${i})`,"gi")).map((e,n)=>e.toLowerCase()===i.toLowerCase()?V(jo,{children:e},n):V("span",{children:e},n))})},R=fe(()=>{if(!l)return[];return[{id:"all",label:"ja"===e.language?"すべて":"All",count:q.length},...l.facets.fileTypes.map(e=>({id:e.value,label:e.value.toUpperCase(),count:e.count}))]},[l,q.length,e.language]);return V(co,{children:[l&&V(Fo,{"data-search-results-header":!0,children:[V(Po,{children:["ja"===e.language?"検索結果":"Search Results",": ",q.length.toLocaleString()," ","ja"===e.language?"件":"items",(null===(o=f.categories)||void 0===o?void 0:o.length)||(null===(a=f.fileTypes)||void 0===a?void 0:a.length)?V(Lo,{children:"ja"===e.language?"フィルタ適用済":"Filtered"}):null]}),V(Ho,{children:["ja"===e.language?"検索時間":"Search time",": ",l.searchTime,"ms"]})]}),l&&R.length>1&&V(zo,{children:R.map(e=>V(Co,{active:"all"===e.id||Boolean(f.fileTypes&&f.fileTypes.includes(e.id)),onClick:()=>{"all"===e.id?I({}):I({fileTypes:[e.id]})},children:[e.label,V(Mo,{children:["(",e.count,")"]})]},e.id))}),V(Ao,{children:p?V(Eo,{children:[V(Io,{}),V(Do,{children:"ja"===e.language?"検索中...":"Searching..."})]}):m?V(Uo,{children:[V(Bo,{children:"⚠️"}),V(Jo,{children:"ja"===e.language?"検索エラー":"Search Error"}),V(Zo,{children:m})]}):i&&0===q.length&&l?V(Ro,{children:"ja"===e.language?`"${i}" に一致する結果が見つかりませんでした`:`No results found for "${i}"`}):j.length>0?V(k,{children:V(qo,{children:j.map(n=>V(Vo,{children:V(Qo,{children:[V(Wo,{children:n.fileMetadata.url?V("a",{href:n.fileMetadata.url,target:"_blank",rel:"noopener noreferrer",children:D(n.fileMetadata.title||n.fileName)}):V("span",{children:D(n.fileMetadata.title||n.fileName)})}),V(Go,{children:[V("strong",{children:"ja"===e.language?"フォーマット:":"Format:"})," ",n.fileFormat.toUpperCase()]}),n.fileMetadata.body&&V(Ko,{children:[V("strong",{children:"ja"===e.language?"本文:":"Content:"}),V(Xo,{children:D(n.fileMetadata.body)})]})]})},n.fileId))})}):V(Oo,{children:[V(No,{children:"🔍"}),V(To,{children:"ja"===e.language?"検索キーワードを入力してください (Ctrl+Enter または ⌘+Enter で送信)":"Enter a search term to see results (Ctrl+Enter or ⌘+Enter to send)"})]})}),r&&V(uo,{children:V(fo,{children:[V(po,{type:"button",active:"ask-ai"===(n||"ask-ai"),onClick:()=>r("ask-ai"),children:"ja"===e.language?"AIに質問":"Ask AI"}),V(po,{type:"button",active:"search"===n,onClick:()=>r("search"),children:"ja"===e.language?"検索":"Search"}),e.enableDeepResearch&&V(po,{type:"button",active:"deep-research"===n,onClick:()=>r("deep-research"),children:(e.language,"Deep Research")}),"search"===n&&(i||l)&&V(ho,{type:"button",onClick:E,title:"ja"===e.language?"検索をクリア":"Clear search","aria-label":"ja"===e.language?"検索をクリア":"Clear search",disabled:p,children:V(an,{size:14})})]})}),V($o,{children:V(go,{children:V(mo,{children:[w.length>0&&V(bo,{children:[V(vo,{children:"ja"===e.language?"最近の検索":"Recent searches"}),V(yo,{children:w.slice(0,8).map((e,n)=>V(ko,{onClick:()=>{return s(n=e),void C(n);var n},children:e},n))})]}),V(xo,{children:[V(_o,{ref:v,value:i,onInput:e=>{(e=>{const n=e.target.value;s(n)})(e),(e=>{const n=e||v.current;if(!n)return;n.style.height="auto";const r=n.scrollHeight;n.style.height=`${r}px`,n.style.lineHeight=r<=32?"32px":"1.5"})(e.currentTarget)},onKeyDown:A,onCompositionStart:()=>x(!0),onCompositionEnd:()=>x(!1),placeholder:"ja"===e.language?"検索キーワードを入力... (Ctrl+Enter または ⌘+Enter で送信)":"Enter search keywords... (Ctrl+Enter or ⌘+Enter to send)",rows:1}),V(wo,{onClick:M,"data-disabled":!i.trim()||p,title:"ja"===e.language?"検索 (Enter または Ctrl+Enter)":"Search (Enter or Ctrl+Enter)",type:"button",children:p?V(So,{}):V(Ue,{size:16,color:"white"})})]})]})})})]})}const co=Oe("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,uo=Oe("div")`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem 0.25rem; /* align underline position with ChatView */
  flex-shrink: 0;
  align-items: center; /* match ChatView */
  position: relative;
  z-index: 2; /* ensure tab underline renders above input separator */
`,fo=Oe("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
`,ho=Oe("button")`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid var(--askdona-border);
  background: transparent;
  color: var(--askdona-text-secondary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover:not(:disabled) {
    background: var(--askdona-background);
    color: var(--askdona-text);
    border-color: var(--askdona-primary);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,po=Oe("button")`
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.8125rem;
  transition: all 0.2s;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${e=>e.active?"var(--askdona-tab-accent, var(--askdona-primary))":"var(--askdona-text-secondary)"};

  &:hover {
    color: ${e=>e.active?"var(--askdona-tab-accent, var(--askdona-primary))":"var(--askdona-text)"};
    background: ${e=>e.active?"transparent":"var(--askdona-background)"};
  }

  ${e=>e.active&&"\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -0.35rem;\n      left: 0;\n      right: 0;\n      height: 2px;\n      background: var(--askdona-tab-accent, var(--askdona-primary));\n      z-index: 3; /* above any following horizontal rules/borders */\n    }\n  "}
`,go=Oe("div")`
  position: relative;
  width: 100%;
`,mo=Oe("div")`
  position: relative;
  display: flex;
  flex-direction: column;
`,bo=Oe("div")`
  padding: 0.25rem 0.25rem 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,vo=Oe("div")`
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.025em;
`,yo=Oe("div")`
  display: flex;
  gap: 0.375rem;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
`,ko=Oe("button")`
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--askdona-border);
  border-radius: 9999px;
  background: var(--askdona-background);
  color: var(--askdona-text-secondary);
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--askdona-bg-hover);
    color: var(--askdona-text);
    border-color: var(--askdona-primary);
  }
`,xo=Oe("div")`
  display: flex;
  align-items: flex-end; /* keep send button at bottom when textarea grows */
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid var(--askdona-border);
  border-radius: ${({expanded:e})=>e?"0.75rem 0.75rem 0 0":"0.75rem"};
  background: var(--askdona-background);
  transition: all 0.2s;
  ${({expanded:e})=>e&&"border-bottom: none;"}
  width: 100%;
  /* Removed max-width to allow full horizontal stretch */
`,wo=Oe("button")`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: var(--askdona-primary);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0; /* avoid inline baseline shift */
  transform-origin: center;
  transition: background-color 0.2s, box-shadow 0.2s;

  /* Ensure SVG is centered without baseline gap */
  & > svg { display: block; }
  
  &[data-disabled="true"] {
    background: var(--askdona-border);
    cursor: not-allowed;
  }
  
  &:hover:not([data-disabled="true"]) {
    background: var(--askdona-primary-dark);
    box-shadow: 0 0 0 4px color-mix(in oklab, var(--askdona-primary) 20%, transparent);
  }
`,_o=Oe("textarea")`
  flex: 1;
  width: auto;
  padding: 0 0.5rem;
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  resize: none;
  outline: none;
  transition: all 0.2s;
  background: transparent;
  color: var(--askdona-text);
  min-height: 32px;
  /* Full expand with content (no internal cap) */
  max-height: none;
  line-height: 32px;
  overflow-y: hidden; /* no internal scroll; container adjusts */
  position: relative;
  z-index: 1;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`,$o=Oe("div")`
  position: relative;
  padding: 1rem 1.5rem; /* match ChatView InputArea spacing */
  border-top: 1px solid var(--askdona-border);
  flex-shrink: 0;
`,So=Oe("div")`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,zo=Oe("div")`
  display: flex;
  gap: 1.5rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  overflow-x: auto;
  flex-shrink: 0;
  
  &::-webkit-scrollbar {
    height: 0;
  }
`,Co=Oe("button")`
  padding: 0.75rem 0;
  border: none;
  background: none;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  transition: all 0.2s;
  color: ${e=>e.active?"var(--askdona-text)":"var(--askdona-text-secondary)"};
  
  &:hover {
    color: var(--askdona-text);
  }
  
  ${e=>e.active&&"\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -1px;\n      left: 0;\n      right: 0;\n      height: 2px;\n      background: var(--askdona-tab-accent, var(--askdona-primary));\n    }\n  "}
`,Mo=Oe("span")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin-left: 0.25rem;
`,Ao=Oe("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1rem 1.5rem;
`,qo=Oe("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* tighter spacing between cards */
`,jo=Oe("span")`
  background: rgba(var(--askdona-primary-rgb), 0.2);
  padding: 0 0.125rem;
  border-radius: 0.125rem;
  font-weight: 500;
`,Eo=Oe("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`,Io=Oe("div")`
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--askdona-border);
  border-top-color: var(--askdona-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Do=Oe("p")`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
`,Ro=Oe("div")`
  text-align: center;
  padding: 3rem;
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
`,Oo=Oe("div")`
  text-align: center;
  padding: 3rem;
`,No=Oe("div")`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`,To=Oe("p")`
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
  margin: 0;
`,Fo=Oe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  background: var(--askdona-surface);
`,Po=Oe("h3")`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: var(--askdona-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Lo=Oe("span")`
  background: var(--askdona-primary);
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 500;
`,Ho=Oe("p")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin: 0;
`,Uo=Oe("div")`
  text-align: center;
  padding: 3rem;
  color: var(--askdona-error);
`,Bo=Oe("div")`
  font-size: 2rem;
  margin-bottom: 1rem;
`,Jo=Oe("h3")`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--askdona-error);
`,Zo=Oe("p")`
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  margin: 0;
`,Vo=Oe("div")`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 0; /* rely on ResultsList gap for spacing */
  transition: all 0.2s;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,Qo=Oe("div")`
  padding: 0.75rem; /* slightly tighter */
  display: flex;
  flex-direction: column;
  gap: 0.375rem; /* slightly tighter */
`,Wo=Oe("h4")`
  margin: 0 0 0.25rem 0; /* tighter spacing below title */
  font-size: 1rem;
  
  a {
    color: var(--askdona-primary);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  span {
    color: var(--askdona-text);
  }
`,Go=Oe("p")`
  margin: 0; /* remove extra spacing */
  font-size: 0.75rem; /* smaller row text */
  color: var(--askdona-text-secondary); /* lighter overall */
  
  strong {
    color: var(--askdona-text-secondary); /* lighter label color */
    font-size: 0.6875rem; /* even smaller label text */
    opacity: 0.75; /* make label appear lighter */
  }
`,Ko=Oe("div")`
  margin-top: 0.5rem;
  
  strong {
    display: block;
    margin-bottom: 0.25rem;
    color: #202124;
    font-size: 0.875rem;
  }
`,Xo=Oe("p")`
  margin: 0;
  font-size: 0.875rem;
  color: #5f6368;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Yo=["follow-up","research-outline","search","extraction","new-angles","synthesis"],ea={planning:"research-outline",outline:"research-outline",brainstorming:"research-outline","collecting-sources":"search",collecting_sources:"search",sourcing:"search","source-analysis":"extraction","analyzing-sources":"extraction","report-drafting":"synthesis","drafting-report":"synthesis","finalizing-report":"synthesis"};function na(e){if("number"==typeof e&&Number.isFinite(e))return e;if("string"==typeof e){const n=e.trim();if(!n)return null;const r=Number(n);return Number.isFinite(r)?r:null}return null}const ra={"follow-up":"依頼内容の整理","research-outline":"調査の計画",search:"情報収集",extraction:"情報分析","new-angles":"追加の調査",synthesis:"調査レポート作成"},ta={"follow-up":"ご質問の対象となる調査領域を特定しています","research-outline":"包括的な調査レポートを作成するための調査内容を作成しています",search:"インターネット上に公開されている情報を対象に情報を取得しています",extraction:"調査に必要な情報を特定し、分析しています","new-angles":"より多くの情報を収集しています",synthesis:"調査で収集した情報をもとに最終的なアウトプットを作成しています"},oa={"follow-up":V(sn,{className:"icon"}),"research-outline":V(on,{className:"icon"}),search:V(en,{className:"icon"}),extraction:V(Ge,{className:"icon"}),"new-angles":V(Be,{className:"icon"}),synthesis:V(Ke,{className:"icon"})},aa={"Connecting with AskDona Servers...":"AskDonaサーバーに接続中...","Connected to AskDona Server":"AskDonaサーバーに接続しました","Analyzing requirements...":"要件を分析中...","Generating research plan...":"調査計画を生成中...","Creating execution strategy...":"実行戦略を作成中...","Starting research tasks...":"調査タスクを開始中...","Generating final report...":"最終レポートを生成中...","Creating visualizations...":"ビジュアライゼーションを作成中...","Creating final message...":"最終メッセージを作成中...","Deep research completed successfully":"Deep Researchが正常に完了しました","Error occurred during deep research":"Deep Research中にエラーが発生しました","Initializing research...":"調査を初期化中...","Processing research data...":"調査データを処理中...","Finalizing research results...":"調査結果を最終確認中...","Questionnaire ready for user.":"フォローアップ質問票にご回答ください。"};function ia({task:e,onRetry:n,progressOverride:r,stageOverride:t,statusOverride:o,messageOverride:a,updatedAtOverride:i}){var s,l,d,c,u,f,h,p,g,m;const b=function(e,n){var r,t;const o="number"==typeof n?n:null,a="number"==typeof e.progress?e.progress:na(e.progress),i=e.progress_data?na(e.progress_data.progress):null,s=null!==(t=null!==(r=null!=o?o:"number"==typeof a?a:null)&&void 0!==r?r:i)&&void 0!==t?t:0,l=s<=1?100*s:s;return Math.min(100,Math.max(0,l))}(e,r),v=("string"==typeof t&&""!==t.trim()?t:null!==(d=null!==(l=null===(s=e.progress_data)||void 0===s?void 0:s.stage)&&void 0!==l?l:e.stage)&&void 0!==d?d:null)||null,y="questionnaire_pending"===v?"follow-up":function(e){if(!e)return null;const n=e.trim();if(!n)return null;const r=ea[n.toLowerCase()];return null!=r?r:n}(v),k=null!=y?y:"questionnaire_pending"===v?"follow-up":v,x=null!=o?o:e.status,w=ra[k||""]||"Deep Research実行中",_=fe(()=>{var n,r,t;const o=null!==(t=null!==(r=null!=a?a:null===(n=e.progress_data)||void 0===n?void 0:n.message)&&void 0!==r?r:e.message)&&void 0!==t?t:"";if(k&&ta[k])return ta[k];if(aa[o])return aa[o];const i=o.match(/Completed (\d+) of (\d+) research tasks/);return i?`調査タスク${i[2]}件中${i[1]}件完了...`:o.startsWith("Failed to start job:")?o.replace("Failed to start job:","ジョブの開始に失敗しました:"):o||"依頼内容に基づいて調査を開始しています"},[a,e.message,null===(c=e.progress_data)||void 0===c?void 0:c.message,k]),$="failed"===x,S="completed"===x?"調査完了":"failed"===x?"調査中に問題が起こりました":w,z="failed"===x?null!==(h=null!==(f=null!=a?a:null===(u=e.progress_data)||void 0===u?void 0:u.message)&&void 0!==f?f:e.message)&&void 0!==h?h:"調査中にエラーが起こりました":"completed"===x?"調査が完了しました。調査結果を以下に表示します。":_;return V(da,{"data-status":x,children:[V(ca,{children:[V("div",{children:[V(ua,{children:S}),V(fa,{children:z})]}),"in-progress"===x&&V(ha,{"data-status":x,children:"調査中..."})]}),V(pa,{children:[V(ga,{children:[V("span",{children:"調査ステータス"}),V(ma,{children:[Math.round(b),"%"]})]}),V(ba,{children:V(va,{style:{width:`${Math.round(b)}%`},"data-status":x})}),V(ya,{children:Yo.map(e=>V(ka,{"data-state":sa(e,k),children:[V("span",{className:"icon",children:oa[e]}),V("span",{children:ra[e]})]},e))})]}),V(xa,{"data-status":x,children:[V(wa,{children:oa[k||"synthesis"]||V(rn,{className:"icon"})}),V(_a,{children:[V($a,{children:w}),V(Sa,{children:_}),V(za,{children:["更新日時: ",la(null!==(g=null!=i?i:null===(p=e.progress_data)||void 0===p?void 0:p.timestamp)&&void 0!==g?g:e.updated_at)]})]})]}),$&&V(Ca,{children:[V(fn,{className:"icon"}),V("div",{children:[V("strong",{children:"調査が完了できませんでした"}),V("p",{children:null!==(m=null!=a?a:e.message)&&void 0!==m?m:"時間をおいて再度お試しください。"})]}),V(Ma,{onClick:n,children:"再試行"})]})]})}function sa(e,n){if(!n)return"idle";if(e===n)return"current";const r=Yo.indexOf(n),t=Yo.indexOf(e);return-1===r||-1===t?"idle":t<r?"done":"idle"}function la(e){return e?new Date(e).toLocaleString("ja-JP"):"-"}const da=Oe("div")`
  border: 1px solid var(--askdona-border);
  border-radius: 18px;
  background: var(--askdona-background);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-size: var(--rag-dr-font-body, 0.76rem);
`,ca=Oe("div")`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`,ua=Oe("h3")`
  margin: 0;
  font-size: var(--rag-dr-font-subheading, 0.8rem);
  font-weight: 600;
  color: var(--askdona-text);
`,fa=Oe("p")`
  margin: 0.2rem 0 0;
  font-size: var(--rag-dr-font-small, 0.7rem);
  color: var(--askdona-text-secondary);
`,ha=Oe("span")`
  align-self: flex-start;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  font-size: var(--rag-dr-font-body, 0.76rem);
  font-weight: 600;
  color: var(--askdona-background, #ffffff);

  &[data-status='pending'] {
    background: linear-gradient(
      120deg,
      rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.6),
      rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.4)
    );
  }
  &[data-status='in-progress'] {
    background: linear-gradient(
      120deg,
      rgba(var(--askdona-tab-accent-rgb, 16, 49, 111), 0.95),
      rgba(var(--askdona-tab-accent-rgb, 16, 49, 111), 0.75)
    );
  }
  &[data-status='completed'] {
    background: linear-gradient(
      120deg,
      rgba(var(--askdona-success-rgb, 16, 185, 129), 0.95),
      rgba(var(--askdona-success-rgb, 16, 185, 129), 0.75)
    );
  }
  &[data-status='failed'] {
    background: linear-gradient(
      120deg,
      rgba(var(--askdona-error-rgb, 239, 68, 68), 0.95),
      rgba(var(--askdona-error-rgb, 239, 68, 68), 0.75)
    );
  }
`,pa=Oe("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,ga=Oe("div")`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  color: var(--askdona-text-secondary);
  span {
    font-size: var(--rag-dr-font-subheading, 0.8rem);
  }
`,ma=Oe("span")`
  font-size: var(--rag-dr-font-progress, 1.6rem);
  font-weight: 700;
  color: var(--askdona-text);
`,ba=Oe("div")`
  height: 10px;
  border-radius: 999px;
  background: rgba(var(--askdona-primary-rgb, 16, 49, 111), 0.12);
  overflow: hidden;
`,va=Oe("div")`
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(
    120deg,
    rgba(var(--askdona-tab-accent-rgb, 16, 49, 111), 0.95),
    rgba(var(--askdona-primary-rgb, 16, 49, 111), 0.8)
  );
  transition: width 0.4s ease;

  &[data-status='completed'] {
    background: linear-gradient(
      120deg,
      rgba(var(--askdona-success-rgb, 16, 185, 129), 0.95),
      rgba(var(--askdona-success-rgb, 16, 185, 129), 0.75)
    );
  }
  &[data-status='failed'] {
    background: linear-gradient(
      120deg,
      rgba(var(--askdona-error-rgb, 239, 68, 68), 0.95),
      rgba(var(--askdona-error-rgb, 239, 68, 68), 0.75)
    );
  }
`,ya=Oe("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,ka=Oe("div")`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: var(--rag-dr-font-small, 0.7rem);
  border: 1px solid transparent;
  color: var(--askdona-tab-accent, var(--askdona-primary));

  .icon {
    width: 0.9rem;
    height: 0.9rem;
  }

  &[data-state='current'] {
    background: rgba(var(--askdona-primary-rgb, 16, 49, 111), 0.15);
    border-color: rgba(var(--askdona-primary-rgb, 16, 49, 111), 0.35);
    color: var(--askdona-primary-dark, var(--askdona-primary));
    font-weight: 600;
  }
  &[data-state='done'] {
    background: rgba(var(--askdona-success-rgb, 16, 185, 129), 0.16);
    border-color: rgba(var(--askdona-success-rgb, 16, 185, 129), 0.35);
    color: var(--askdona-success, #10b981);
  }
  &[data-state='idle'] {
    background: rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.08);
    color: var(--askdona-text-secondary, #475569);
  }
`,xa=Oe("div")`
  display: flex;
  gap: 1rem;
  padding: 1.2rem;
  border-radius: 16px;
  border: 1px solid var(--askdona-border);
  background: rgba(var(--askdona-primary-rgb, 16, 49, 111), 0.06);

  &[data-status='completed'] {
    background: rgba(var(--askdona-success-rgb, 16, 185, 129), 0.08);
  }
  &[data-status='failed'] {
    background: rgba(var(--askdona-error-rgb, 239, 68, 68), 0.12);
  }
`,wa=Oe("div")`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--askdona-tab-accent, var(--askdona-primary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  .icon {
    width: 22px;
    height: 22px;
  }
`,_a=Oe("div")`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,$a=Oe("div")`
  font-size: var(--rag-dr-font-subheading, 0.8rem);
  font-weight: 600;
  color: var(--askdona-text);
`,Sa=Oe("p")`
  margin: 0;
  font-size: var(--rag-dr-font-small, 0.7rem);
  line-height: 1.5;
  color: var(--askdona-text-secondary);
`,za=Oe("span")`
  font-size: var(--rag-dr-font-xs, 0.62rem);
  color: var(--askdona-text-secondary);
`,Ca=Oe("div")`
  display: flex;
  gap: 1rem;
  align-items: center;
  border-radius: 14px;
  padding: 1rem 1.25rem;
  border: 1px solid rgba(var(--askdona-error-rgb, 239, 68, 68), 0.35);
  background: rgba(var(--askdona-error-rgb, 239, 68, 68), 0.12);

  .icon {
    color: var(--askdona-error, #dc2626);
  }

  strong {
    display: block;
    color: var(--askdona-error, #dc2626);
  }

  p {
    margin: 0.25rem 0 0;
    color: var(--askdona-text-secondary, #64748b);
    font-size: var(--rag-dr-font-body, 0.76rem);
  }
`,Ma=Oe("button")`
  margin-left: auto;
  border: none;
  border-radius: 999px;
  padding: 0.55rem 1.2rem;
  background: var(--askdona-error, #dc2626);
  color: var(--askdona-background, #ffffff);
  font-weight: 600;
  font-size: var(--rag-dr-font-body, 0.76rem);
  cursor: pointer;
`;const Aa="フォローアップ質問",qa="以下の質問に回答すると、Deep Research が自動的に進行します。",ja="combinedAnswer";function Ea(e,n){var r,t,o,a,i,s;if("string"==typeof e)return{id:`question-${n+1}`,prompt:e.trim()||`質問 ${n+1}`,required:!0};const l=null!==(o=null!==(t=null!==(r=e.text)&&void 0!==r?r:e.question)&&void 0!==t?t:e.prompt)&&void 0!==o?o:`質問 ${n+1}`;return{id:null!==(a=e.id)&&void 0!==a?a:`question-${n+1}`,prompt:l,placeholder:e.placeholder,required:Boolean(null===(s=null!==(i=e.required)&&void 0!==i?i:e.isRequired)||void 0===s||s),helpText:e.helpText}}function Ia({questionnaireJson:e,onSubmit:n,isReadOnly:r=!1,isSubmitLocked:t=!1,submitLockLabel:o,submittedAnswers:a}){var i;const[s,l]=le(null),[d,c]=le(""),[u,f]=le(null),[h,p]=le(null),[g,m]=le(!1);de(()=>{if(!e||""===e.trim())return p("質問票データが提供されていません。"),void l(null);try{const n=function(e){var n,r,t,o;if(!e)throw new Error("質問票データが空です");if("string"==typeof e){const n=e.trim();if(!n)throw new Error("質問票データが空です");return{title:Aa,introduction:qa,questions:[Ea(n,0)]}}if(Array.isArray(e)){if(0===e.length)throw new Error("質問票に質問が含まれていません");return{title:Aa,introduction:qa,questions:e.map((e,n)=>Ea(e,n))}}const a=e,i=(null===(n=a.title)||void 0===n?void 0:n.trim())||Aa,s=(null===(r=a.introduction)||void 0===r?void 0:r.trim())||(null===(t=a.description)||void 0===t?void 0:t.trim())||qa,l=Array.isArray(a.questions)?a.questions:[];if(0===l.length)throw new Error("質問票に質問が含まれていません");return{title:i,introduction:s,estimatedCompletionTime:(null===(o=a.estimatedCompletionTime)||void 0===o?void 0:o.trim())||void 0,questions:l.map((e,n)=>Ea(e,n))}}(JSON.parse(e));l(n),p(null),c(function(e,n){return n?"string"==typeof n[ja]?n[ja]:e.questions.map((e,r)=>{const t=n[e.id];return t&&"string"==typeof t&&t.trim()?`${r+1}. ${t.trim()}`:null}).filter(Boolean).join("\n\n"):""}(n,a)),f(null)}catch(e){p(e instanceof Error?e.message:"質問票データの解析に失敗しました。"),l(null),c("")}},[e,a]);const b=fe(()=>{if(!s)return!1;return!(s.questions.some(e=>!1!==e.required)&&!r)||d.trim().length>0},[d,s,r]),v=he(e=>{c(e),u&&f(null)},[u]),y=he(async e=>{if(e.preventDefault(),r||t||g||!s)return;if(s.questions.some(e=>!1!==e.required)&&0===d.trim().length)f("この項目は必須です");else try{m(!0);const e=function(e,n){const r=["#### 調査質問票への回答",""];return r.push("**質問一覧:**"),r.push(""),e.questions.forEach((e,n)=>{r.push(`${n+1}. ${e.prompt}`)}),r.push(""),r.push("**回答:**"),r.push(""),r.push(n.trim()?n.trim():"回答がありません"),r.push(""),r.join("\n")}(s,d);await n(e)}catch(e){}finally{m(!1)}},[d,r,t,g,n,s]),k=he(e=>{if(!e.metaKey&&!e.ctrlKey||"Enter"!==e.key)return;if(r||t||g||!s)return;e.preventDefault();const n=e.currentTarget,o=(null==n?void 0:n.form)||null;o?"function"==typeof o.requestSubmit?o.requestSubmit():o.dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0})):y(e)},[y,r,t,g,s]);return h?V(ri,{children:[V(ti,{children:V(fn,{size:20})}),V(oi,{children:[V(ai,{children:"質問票の読み込み中に問題が発生しました"}),V(ii,{children:h||"時間をおいて再度お試しください。"})]})]}):s?V(Da,{children:[V(Ra,{children:[V(Oa,{children:V(on,{size:18})}),V(Na,{children:[V(Ta,{children:[s.title,r&&V(Fa,{children:"送信済み"})]}),V(Pa,{children:null!==(i=s.introduction)&&void 0!==i?i:qa}),V(La,{children:"回答は任意ですが、背景や目的を詳しく共有いただくと、より的確な調査が可能になります。"}),s.estimatedCompletionTime&&V(Ha,{children:[V(Qe,{size:14}),V("span",{children:s.estimatedCompletionTime})]})]})]}),V("form",{onSubmit:y,children:[V(Ua,{children:V(Ba,{children:[V(Ja,{children:`フォローアップ質問 (${s.questions.length} 件)`}),V(Za,{children:V("ul",{children:s.questions.map((e,n)=>V("li",{children:[V("span",{className:"question-index",children:[n+1,"."]}),V("span",{className:"question-text",children:e.prompt})]},e.id))})})]})}),V(Qa,{children:[V(Wa,{children:[s.questions.some(e=>!1!==e.required)?"上記の質問にまとめて回答してください":"任意回答 (必要に応じてご記入ください)",!r&&s.questions.some(e=>!1!==e.required)&&V(Va,{children:"*"})]}),V(Ga,{value:d,onInput:e=>v(e.target.value),onKeyDown:k,placeholder:"質問への回答をこちらにご入力ください (Ctrl+Enter または ⌘+Enter で送信)",rows:6,disabled:r||g,"data-error":u?"true":"false"}),u&&V(Ka,{children:u})]}),!r&&V(Xa,{children:[V(Ya,{type:"submit",disabled:!b||g,"data-locked":t&&!g?"true":"false",children:g?"送信中...":"調査質問票を送信"}),t&&o&&!g&&V(ei,{children:[V(Qe,{size:14}),V("span",{children:o})]})]}),r&&V(ni,{children:[V(Ve,{size:16}),V("span",{children:"送信済みの回答を表示しています"})]})]})]}):V(si,{children:[V(on,{size:18}),V("span",{children:"質問票を読み込んでいます..."})]})}const Da=Oe("div")`
  border-radius: 18px;
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  background: linear-gradient(
    135deg,
    rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.05),
    rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.1)
  );
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`,Ra=Oe("div")`
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border-bottom: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  background: var(--askdona-surface, #ffffff);
`,Oa=Oe("div")`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: linear-gradient(
    120deg,
    var(--askdona-primary, #2563eb),
    var(--askdona-primary-light, #6366f1)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--askdona-background, #ffffff);
`,Na=Oe("div")`
  flex: 1;
`,Ta=Oe("h3")`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--askdona-text, #0f172a);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Fa=Oe("span")`
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.7rem;
  background: rgba(var(--askdona-success-rgb, 16, 185, 129), 0.12);
  color: rgba(var(--askdona-success-rgb, 16, 185, 129), 0.8);
  border: 1px solid rgba(var(--askdona-success-rgb, 16, 185, 129), 0.35);
`,Pa=Oe("p")`
  margin: 0.35rem 0 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--askdona-text-secondary, #475569);
`,La=Oe("p")`
  margin: 0.5rem 0 0;
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--askdona-text-secondary, #64748b);
`,Ha=Oe("div")`
  margin-top: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  background: rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.1);
  color: var(--askdona-primary, #2563eb);
`,Ua=Oe("div")`
  padding: 1.25rem 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,Ba=Oe("div")`
  padding: 1.25rem;
  border-radius: 14px;
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.1));
  background: var(--askdona-surface, #ffffff);
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.05);
`,Ja=Oe("div")`
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--askdona-text-secondary, #475569);
  margin-bottom: 0.6rem;
`,Za=Oe("div")`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.45rem;
    font-size: 0.78rem;
    line-height: 1.5;
    color: var(--askdona-text, #0f172a);
  }

  .question-index {
    flex-shrink: 0;
    color: var(--askdona-text-secondary, #94a3b8);
  }

  .question-text {
    flex: 1;
  }
`,Va=Oe("span")`
  color: var(--askdona-error, #dc2626);
  margin-left: 0.35rem;
`,Qa=Oe("div")`
  padding: 0 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`,Wa=Oe("div")`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--askdona-text, #0f172a);
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,Ga=Oe("textarea")`
  margin-top: 0.9rem;
  width: 100%;
  min-height: 120px;
  padding: 0.75rem 0.9rem;
  border-radius: 12px;
  border: 1px solid var(--askdona-border, rgba(148, 163, 184, 0.4));
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--askdona-text, #0f172a);
  background: var(--askdona-background, #ffffff);
  resize: vertical;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--askdona-primary, #2563eb);
    box-shadow: 0 0 0 3px rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.18);
  }

  &[data-error='true'] {
    border-color: var(--askdona-error, #dc2626);
    box-shadow: 0 0 0 3px rgba(var(--askdona-error-rgb, 239, 68, 68), 0.2);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`,Ka=Oe("div")`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--askdona-error, #dc2626);
`,Xa=Oe("div")`
  padding: 1.25rem 1.5rem 1.6rem;
  border-top: 1px solid rgba(15, 23, 42, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`,Ya=Oe("button")`
  border-radius: 12px;
  padding: 0.95rem 1.25rem;
  border: none;
  background: linear-gradient(
    120deg,
    var(--askdona-primary, #2563eb),
    var(--askdona-primary-light, #6366f1)
  );
  color: var(--askdona-background, #ffffff);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 12px 24px rgba(54, 79, 199, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }

  &[data-locked='true'] {
    cursor: wait;
  }
`,ei=Oe("div")`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--askdona-text-secondary, #475569);
`,ni=Oe("div")`
  margin: 0 1.5rem 1.5rem;
  border-radius: 12px;
  border: 1px dashed rgba(var(--askdona-success-rgb, 16, 185, 129), 0.4);
  background: rgba(var(--askdona-success-rgb, 16, 185, 129), 0.08);
  padding: 0.9rem 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.85rem;
  color: rgba(var(--askdona-success-rgb, 16, 185, 129), 0.85);
`,ri=Oe("div")`
  border-radius: 16px;
  border: 1px solid rgba(var(--askdona-error-rgb, 239, 68, 68), 0.3);
  background: rgba(var(--askdona-error-rgb, 239, 68, 68), 0.12);
  padding: 1rem 1.2rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,ti=Oe("div")`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: rgba(var(--askdona-error-rgb, 239, 68, 68), 0.2);
  color: var(--askdona-error, #dc2626);
  display: flex;
  align-items: center;
  justify-content: center;
`,oi=Oe("div")`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,ai=Oe("div")`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--askdona-error, #dc2626);
`,ii=Oe("div")`
  font-size: 0.85rem;
  color: var(--askdona-error, #dc2626);
`,si=Oe("div")`
  border-radius: 16px;
  border: 1px dashed rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.3);
  padding: 1.1rem 1.3rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--askdona-text-secondary, #475569);
  font-size: 0.85rem;
`,li=["analyzing_topic","probing_searches","preparing_questionnaire","questionnaire_ready"],di={analyzing_topic:{icon:e=>V(nn,{...e}),label:{ja:"調査トピックを分析中",en:"Analyzing the topic"},description:{ja:"調査要件と目的を整理しています。",en:"Reviewing your request to understand the research focus."}},probing_searches:{icon:e=>V(sn,{...e}),label:{ja:"探索的検索を実行中",en:"Running exploratory searches"},description:{ja:"関連情報を特定するための探索を行っています。",en:"Exploring knowledge sources to surface useful context."}},preparing_questionnaire:{icon:e=>V(on,{...e}),label:{ja:"質問を準備中",en:"Preparing clarifying questions"},description:{ja:"調査精度を高める質問票を生成しています。",en:"Drafting targeted follow-up questions before starting research."}},questionnaire_ready:{icon:e=>V(Ve,{...e}),label:{ja:"質問の準備が完了しました",en:"Questionnaire is ready"},description:{ja:"質問票への回答をお待ちしています。",en:"Please answer the questionnaire to continue."}}},ci={ja:{preparingTitle:"質問票を準備しています",preparingSubtitle:"調査開始前に必要なフォローアップ質問を生成しています。",readyTitle:"質問票の準備ができました",readySubtitle:"以下の質問に回答すると調査が自動的に開始されます。",failureTitle:"質問票の生成に失敗しました",failureSubtitle:"しばらく待ってからもう一度お試しください。",progressLabel:"進捗",stagesLabel:"準備ステップ",updatedAtLabel:"更新日時",fallbackMessage:"質問票が生成されるまで少々お待ちください。",activeChip:"生成中...",readyChip:"準備完了",failedChip:"エラー",waitingStatus:"接続中"},en:{preparingTitle:"Preparing follow-up questionnaire",preparingSubtitle:"We are generating focused questions before the research begins.",readyTitle:"Questionnaire is ready",readySubtitle:"Answer the questions below to automatically continue the research.",failureTitle:"Failed to build questionnaire",failureSubtitle:"Please wait a moment and try again.",progressLabel:"Progress",stagesLabel:"Preparation steps",updatedAtLabel:"Last updated",fallbackMessage:"Please hold tight while we prepare the questionnaire.",activeChip:"Preparing…",readyChip:"Ready",failedChip:"Error",waitingStatus:"Connecting"}},ui={"follow-up":"analyzing_topic",questionnaire_pending:"preparing_questionnaire",questionnaire_ready:"questionnaire_ready","research-outline":"probing_searches",search:"probing_searches",extraction:"preparing_questionnaire","new-angles":"preparing_questionnaire"},fi={"Connecting with AskDona Servers...":{ja:"AskDonaサーバーに接続中...",en:"Connecting with AskDona servers…"},"Connected to AskDona Server":{ja:"AskDonaサーバーに接続しました",en:"Connected to AskDona server"},"Analyzing topic...":{ja:"トピックを分析中...",en:"Analyzing the topic…"},"Analyzing the research topic to identify key themes.":{ja:"主要なテーマを特定するために調査トピックを分析しています。",en:"Analyzing the research topic to identify key themes."},"Performing probing searches on internal documents.":{ja:"関連情報を特定するために探索的検索を実行しています。",en:"Performing probing searches on internal documents."},"Preparing clarifying questions based on findings.":{ja:"調査結果に基づいてフォローアップ質問を準備しています。",en:"Preparing clarifying questions based on findings."},"Questionnaire Ready":{ja:"質問票の準備が完了しました",en:"Questionnaire ready"},"Initializing Deep Research...":{ja:"Deep Researchを初期化しています...",en:"Initializing deep research…"},"Initializing research environment...":{ja:"調査環境を初期化中...",en:"Initializing the research environment…"},"Processing your request...":{ja:"リクエストを処理しています...",en:"Processing your request…"},"Finalizing questionnaire...":{ja:"質問票を最終確認中...",en:"Finalizing questionnaire…"}};function hi({task:e,isJapanese:n=!0,progressOverride:r,stageOverride:t,statusOverride:o,messageOverride:a,updatedAtOverride:i}){var s,l,d;const c=n?"ja":"en",u=ci[c],f="number"==typeof r?r:"number"==typeof(null==e?void 0:e.progress)?e.progress:(null==e?void 0:e.progress_data)?(e=>{if("number"==typeof e&&Number.isFinite(e))return e;if("string"==typeof e){const n=e.trim();if(!n)return null;const r=Number(n);return Number.isFinite(r)?r:null}return null})(e.progress_data.progress):null,h="number"==typeof f?f:null,p=null!==h?Math.min(100,Math.max(0,h<=1?100*h:h)):null,g="failed"===(null!=o?o:null==e?void 0:e.status)||"questionnaire_generation_failed"===(null!=t?t:null==e?void 0:e.stage),m="questionnaire_ready"===(null!=o?o:null==e?void 0:e.status),b=fe(()=>{var n,r,o;if(m)return"questionnaire_ready";const a=null!==(o=null!==(r=null!=t?t:null===(n=null==e?void 0:e.progress_data)||void 0===n?void 0:n.stage)&&void 0!==r?r:null==e?void 0:e.stage)&&void 0!==o?o:null;return a&&ui[a]?ui[a]:null!==p?p>=75?"preparing_questionnaire":p>=35?"probing_searches":"analyzing_topic":"analyzing_topic"},[null==e?void 0:e.stage,m,p]),v=li.indexOf(b),y=v>=0?v:0,k=fe(()=>{if(g)return null!==p?p:0;if(m)return 100;if(null!==p)return Math.max(5,Math.min(99,p));const e=Math.round(y/(li.length-1)*100);return Math.max(10,Math.min(95,e))},[p,y,m,g]),x=fe(()=>{var n,r,t,o;const i=(null!==(t=null!==(r=null!=a?a:null===(n=null==e?void 0:e.progress_data)||void 0===n?void 0:n.message)&&void 0!==r?r:null==e?void 0:e.message)&&void 0!==t?t:"").trim();if(!i)return u.fallbackMessage;const s=(null===(o=i.split("\n")[0])||void 0===o?void 0:o.trim())||i,l=fi[s];return l?l[c]:s},[null==e?void 0:e.message,c,u.fallbackMessage]),w=di[b],_=x||w.description[c],$=g?u.failureTitle:m?u.readyTitle:u.preparingTitle,S=g?u.failureSubtitle:m?u.readySubtitle:u.preparingSubtitle,z=g?u.failedChip:m?u.readyChip:u.activeChip,C=g?"failed":m?"ready":"active",M=null!==(d=null!==(l=null!=i?i:null===(s=null==e?void 0:e.progress_data)||void 0===s?void 0:s.timestamp)&&void 0!==l?l:null==e?void 0:e.updated_at)&&void 0!==d?d:null,A=M?new Date(M).toLocaleString(n?"ja-JP":void 0):"—";return V(pi,{"data-status":C,children:[V(gi,{children:[V("div",{children:[V(mi,{children:$}),V(bi,{children:S})]}),V(vi,{"data-variant":C,children:z})]}),V(yi,{children:[V(ki,{children:[V("span",{children:u.progressLabel}),V("strong",{children:[Math.round(k),"%"]})]}),V(xi,{children:V(wi,{"data-status":C,style:{width:`${Math.round(k)}%`}})})]}),V(_i,{children:u.stagesLabel}),V($i,{children:li.map((e,n)=>{const r=di[e],t=function(e,n,r){if(e<n)return"done";if(e===n)return r?"done":"current";return r?"done":"upcoming"}(n,y,m);return V(Si,{"data-state":t,children:[V(zi,{"data-state":t,children:r.icon({className:"icon"})}),V(Ci,{children:[V(Mi,{children:r.label[c]}),V(Ai,{children:r.description[c]})]})]},e)})}),V(qi,{"data-status":C,children:[V(ji,{children:w.icon({className:"icon"})}),V(Ei,{children:[V(Ii,{children:w.label[c]}),V(Di,{children:_||u.fallbackMessage}),V(Ri,{children:[V(Qe,{size:14}),V("span",{children:[u.updatedAtLabel,": ",A]})]})]})]}),g&&V(Oi,{children:[V(fn,{size:18}),V("div",{children:[V("strong",{children:u.failureTitle}),V("p",{children:_})]})]})]})}const pi=Oe("div")`
  border: 1px solid var(--askdona-border);
  border-radius: 18px;
  background: var(--askdona-background);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-size: var(--rag-dr-font-body, 0.76rem);
`,gi=Oe("div")`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`,mi=Oe("h3")`
  margin: 0;
  font-size: var(--rag-dr-font-title, 0.92rem);
  font-weight: 600;
  color: var(--askdona-text);
`,bi=Oe("p")`
  margin: 0.2rem 0 0;
  font-size: var(--rag-dr-font-subheading, 0.8rem);
  color: var(--askdona-text-secondary);
`,vi=Oe("span")`
  align-self: flex-start;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  font-size: var(--rag-dr-font-body, 0.76rem);
  font-weight: 600;
  color: var(--askdona-background, #ffffff);
  background: linear-gradient(
    120deg,
    rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.9),
    rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.7)
  );

  &[data-variant='ready'] {
    background: linear-gradient(
      120deg,
      rgba(var(--askdona-success-rgb, 16, 185, 129), 0.9),
      rgba(var(--askdona-success-rgb, 16, 185, 129), 0.7)
    );
  }

  &[data-variant='failed'] {
    background: linear-gradient(
      120deg,
      rgba(var(--askdona-error-rgb, 239, 68, 68), 0.9),
      rgba(var(--askdona-error-rgb, 239, 68, 68), 0.7)
    );
  }
`,yi=Oe("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,ki=Oe("div")`
  display: flex;
  justify-content: space-between;
  font-size: var(--rag-dr-font-body, 0.76rem);
  color: var(--askdona-text-secondary);

  strong {
    color: var(--askdona-text);
    font-size: var(--rag-dr-font-heading, 0.88rem);
  }
`,xi=Oe("div")`
  position: relative;
  height: 8px;
  background: rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.1);
  border-radius: 999px;
  overflow: hidden;
`,wi=Oe("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background: var(--askdona-primary);
  border-radius: 999px;
  transition: width 0.6s ease, background 0.3s ease;

  &[data-status='ready'] {
    background: var(--askdona-success, #16a34a);
  }

  &[data-status='failed'] {
    background: var(--askdona-error, #dc2626);
  }
`,_i=Oe("div")`
  font-size: var(--rag-dr-font-small, 0.7rem);
  font-weight: 600;
  color: var(--askdona-text-secondary);
  letter-spacing: 0.01em;
`,$i=Oe("div")`
  display: grid;
  gap: 0.75rem;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Si=Oe("div")`
  display: flex;
  gap: 0.75rem;
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  border-radius: 12px;
  padding: 0.75rem;
  align-items: flex-start;
  background: var(--askdona-surface, #ffffff);
  transition: border 0.3s ease, background 0.3s ease, transform 0.3s ease;

  &[data-state='current'] {
    border-color: var(--askdona-primary, #2563eb);
    background: rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.08);
    transform: translateY(-2px);
  }

  &[data-state='done'] {
    border-color: rgba(var(--askdona-success-rgb, 16, 185, 129), 0.45);
    background: rgba(var(--askdona-success-rgb, 16, 185, 129), 0.12);
  }

  &[data-state='upcoming'] {
    opacity: 0.85;
  }

  .icon {
    width: 16px;
    height: 16px;
  }
`,zi=Oe("div")`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.12);
  color: var(--askdona-primary, #2563eb);
  transition: all 0.3s ease;

  &[data-state='done'] {
    background: rgba(var(--askdona-success-rgb, 16, 185, 129), 0.12);
    color: var(--askdona-success, #16a34a);
  }

  &[data-state='upcoming'] {
    background: rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.08);
    color: var(--askdona-text-secondary, #94a3b8);
  }
`,Ci=Oe("div")`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Mi=Oe("div")`
  font-size: var(--rag-dr-font-subheading, 0.8rem);
  font-weight: 600;
  color: var(--askdona-text);
`,Ai=Oe("div")`
  font-size: var(--rag-dr-font-small, 0.7rem);
  color: var(--askdona-text-secondary);
`,qi=Oe("div")`
  display: flex;
  gap: 0.85rem;
  padding: 1rem;
  border-radius: 14px;
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  background: var(--askdona-surface, #ffffff);
  align-items: flex-start;
`,ji=Oe("div")`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.12);
  color: var(--askdona-primary, #2563eb);

  .icon {
    width: 18px;
    height: 18px;
  }
`,Ei=Oe("div")`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,Ii=Oe("div")`
  font-weight: 600;
  font-size: var(--rag-dr-font-heading, 0.88rem);
  color: var(--askdona-text);
`,Di=Oe("p")`
  margin: 0;
  font-size: var(--rag-dr-font-subheading, 0.8rem);
  color: var(--askdona-text-secondary);
  line-height: 1.5;
  white-space: pre-line;
`,Ri=Oe("div")`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: var(--rag-dr-font-small, 0.7rem);
  color: var(--askdona-text-secondary);

  svg {
    width: 14px;
    height: 14px;
  }
`,Oi=Oe("div")`
  display: flex;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  border: 1px solid rgba(var(--askdona-error-rgb, 239, 68, 68), 0.35);
  background: rgba(var(--askdona-error-rgb, 239, 68, 68), 0.1);
  color: var(--askdona-error, #dc2626);

  strong {
    display: block;
    margin-bottom: 0.2rem;
  }

  p {
    margin: 0;
    font-size: var(--rag-dr-font-body, 0.76rem);
    color: var(--askdona-error, #dc2626);
  }
`;function Ni(){try{const e={userAgent:navigator.userAgent||"",language:navigator.language||"",screenResolution:`${screen.width}x${screen.height}`,timezoneOffset:(new Date).getTimezoneOffset(),platform:navigator.platform||"",cookieEnabled:navigator.cookieEnabled,localStorageEnabled:(()=>{try{const e="__localStorage_test__";return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}})()},n=document.createElement("canvas"),r=n.getContext("2d");let t="";r&&(n.width=200,n.height=50,r.textBaseline="alphabetic",r.fillStyle="#f60",r.fillRect(125,1,62,20),r.fillStyle="#069",r.font="11pt Arial",r.fillText("AskDona Browser Fingerprint 🔍",2,15),r.fillStyle="rgba(102, 204, 0, 0.7)",r.font="18pt Arial",r.fillText("Deep Research",4,45),t=n.toDataURL().substring(0,100));const o=[e.userAgent,e.language,e.screenResolution,e.timezoneOffset.toString(),e.platform,e.cookieEnabled.toString(),e.localStorageEnabled.toString(),t].join("|");let a=0;for(let e=0;e<o.length;e++){a=(a<<5)-a+o.charCodeAt(e),a&=a}return`fp_${Math.abs(a).toString(36).padStart(8,"0")+Date.now().toString(36).slice(-4)}`}catch(e){return`fp_${Math.random().toString(36).substring(2,15)}`}}class Ti{constructor(){this.browserFingerprint=this.getOrCreateFingerprint()}getOrCreateFingerprint(){const e="askdona_browser_fingerprint";try{let n=localStorage.getItem(e);return n||(n=Ni(),localStorage.setItem(e,n)),n}catch(e){return Ni()}}getBrowserFingerprint(){return this.browserFingerprint}checkLocalLimits(e,n){const r=[];let t,o=!0;for(const a of n){const n=this.checkSingleLocalLimit(e,a);r.push(n),!n.allowed&&o&&(o=!1,t=n.limitType)}return{allowed:o,blockedBy:t,localChecks:r}}checkSingleLocalLimit(e,n){const r=this.getLimitKey(n),t=`${Ti.STORAGE_PREFIX}${e}_${r}`;let o=this.getLimitData(t);new Date(o.resetTime)<=new Date&&(o=this.createNewLimitPeriod(n),this.saveLimitData(t,o));const a=o.count<n.limit;return{limitType:this.getLimitTypeString(n),allowed:a,currentCount:o.count,maxCount:n.limit,resetTime:new Date(o.resetTime)}}recordLocalUsage(e,n){for(const r of n){const n=this.getLimitKey(r),t=`${Ti.STORAGE_PREFIX}${e}_${n}`,o=this.getLimitData(t);o.count++,this.saveLimitData(t,o)}}getTodayUsage(e){const n=`${Ti.STORAGE_PREFIX}${e}_daily`,r=this.getLimitData(n);return new Date(r.resetTime)>new Date?r.count:0}clearLocalLimits(e){try{const n=[];for(let r=0;r<localStorage.length;r++){const t=localStorage.key(r);t&&t.startsWith(`${Ti.STORAGE_PREFIX}${e}_`)&&n.push(t)}n.forEach(e=>localStorage.removeItem(e))}catch(e){}}getLimitData(e){try{const n=localStorage.getItem(e);if(n)return JSON.parse(n)}catch(e){}return{count:0,resetTime:new Date(Date.now()+864e5).toISOString(),period:"daily"}}saveLimitData(e,n){try{localStorage.setItem(e,JSON.stringify(n))}catch(e){}}createNewLimitPeriod(e){return{count:0,resetTime:this.calculateNextLocalReset(e).toISOString(),period:this.getLimitKey(e)}}calculateNextLocalReset(e){const n=new Date,r=new Date(n);switch(e.period){case"daily":r.setDate(n.getDate()+1),r.setHours(0,0,0,0);break;case"weekly":const t=(8-n.getDay())%7||7;r.setDate(n.getDate()+t),r.setHours(0,0,0,0);break;case"monthly":r.setMonth(n.getMonth()+1,1),r.setHours(0,0,0,0);break;case"yearly":r.setFullYear(n.getFullYear()+1,0,1),r.setHours(0,0,0,0);break;default:e.customDays&&(r.setDate(n.getDate()+e.customDays),r.setHours(0,0,0,0))}return r}getLimitKey(e){return e.customDays?`custom_${e.customDays}d`:e.period}getLimitTypeString(e){return e.customDays?`custom-${e.customDays}d`:e.period}}Ti.STORAGE_PREFIX="askdona_browser_limit_";const Fi="askdona.ragDeepResearch",Pi=(e,n)=>`${Fi}.${e}.${n}`,Li=e=>`${Fi}.${e}.__index__`,Hi=e=>{let n=0;for(let r=0;r<e.length;r+=1)n=(n<<5)-n+e.charCodeAt(r),n|=0;return(n>>>0).toString(16)},Ui=e=>{const n=(e=>{var n,r,t,o;const{version:a,chatflowId:i,sessionId:s,userQuestion:l,phase:d,questionnaireJson:c,questionnaireSignature:u,questionnaireSummary:f,finalReport:h,currentTask:p,lastUpdated:g}=e,m={version:a,chatflowId:i,sessionId:s,lastUpdated:g,phase:null!=d?d:null,userQuestion:null!=l?l:null,questionnaireJsonHash:c?Hi(c):null,questionnaireSignature:null!=u?u:null,questionnaireSummary:f?{submittedAt:f.submittedAt,responseHash:Hi(f.formattedMarkdown)}:null,finalReport:h?{createdAt:h.createdAt,completionMessage:null!==(n=h.completionMessage)&&void 0!==n?n:null,contentHash:Hi(h.content),rawContentHash:Hi(h.rawContent)}:null,currentTask:p?{id:p.id,status:p.status,stage:p.stage,progress:null!==(r=p.progress)&&void 0!==r?r:null,updated_at:p.updated_at,research_id:null!==(t=p.research_id)&&void 0!==t?t:null,questionnaire_signature:null!==(o=p.questionnaire_signature)&&void 0!==o?o:null}:null};return JSON.stringify(m)})(e);return Hi(n)},Bi=e=>{if("undefined"==typeof window)return[];const n=localStorage.getItem(Li(e));if(!n)return[];try{const r=JSON.parse(n);return Array.isArray(r)?r.filter(e=>"string"==typeof(null==e?void 0:e.sessionId)):(localStorage.removeItem(Li(e)),[])}catch(n){return localStorage.removeItem(Li(e)),[]}},Ji=(e,n)=>{if("undefined"==typeof window)return;const r=Li(e);if(n.length)try{localStorage.setItem(r,JSON.stringify(n.slice(0,25)))}catch(e){}else localStorage.removeItem(r)},Zi=(e,n)=>{if("undefined"==typeof window)return;const r=Bi(e).filter(e=>e.sessionId!==n);Ji(e,r)};function Vi(e,n){if("undefined"==typeof window)return null;const r=localStorage.getItem(Pi(e,n));if(!r)return Zi(e,n),null;try{const t=JSON.parse(r);if(!t)return null;if(1!==t.version)return localStorage.removeItem(Pi(e,n)),Zi(e,n),null;if(!t.integrity)return localStorage.removeItem(Pi(e,n)),Zi(e,n),null;const{integrity:o,...a}=t;return o!==Ui(a)?(localStorage.removeItem(Pi(e,n)),Zi(e,n),null):t}catch(r){return localStorage.removeItem(Pi(e,n)),Zi(e,n),null}}function Qi(e,n,r){if("undefined"==typeof window)return;const t=Pi(e,n);if(!r)return localStorage.removeItem(t),void Zi(e,n);try{const n={...r,lastUpdated:(new Date).toISOString()},o=Ui(n),a={...n,integrity:o};localStorage.setItem(t,JSON.stringify(a)),((e,n)=>{var r,t,o;if("undefined"==typeof window)return;const a=Bi(e).filter(e=>e.sessionId!==n.sessionId),i=[{sessionId:n.sessionId,lastUpdated:n.lastUpdated,userQuestion:n.userQuestion,phase:null!==(r=n.phase)&&void 0!==r?r:null,finalReportCreatedAt:null!==(o=null===(t=n.finalReport)||void 0===t?void 0:t.createdAt)&&void 0!==o?o:null,hasFinalReport:Boolean(n.finalReport)},...a].sort((e,n)=>e.lastUpdated||n.lastUpdated?e.lastUpdated?n.lastUpdated?n.lastUpdated.localeCompare(e.lastUpdated):-1:1:0);Ji(e,i)})(e,n)}catch(e){}}function Wi(e,n){const r=Vi(e,n);return r?r.sessionId!==n?null:r:null}function Gi(e,n){if("undefined"==typeof window)return;if(n)return localStorage.removeItem(Pi(e,n)),void Zi(e,n);Bi(e).forEach(n=>{localStorage.removeItem(Pi(e,n.sessionId))}),localStorage.removeItem(Li(e))}function Ki(e){return Bi(e).map(e=>{var n,r;return{sessionId:e.sessionId,userQuestion:e.userQuestion,lastUpdated:e.lastUpdated,finalReportCreatedAt:null!==(n=e.finalReportCreatedAt)&&void 0!==n?n:null,hasFinalReport:Boolean(e.hasFinalReport),phase:null!==(r=e.phase)&&void 0!==r?r:null}})}const Xi="DEEP_RESEARCH:COMPLETED",Yi="***DEEP_RESEARCH_COMPLETION_CONTAINER_START***",es="***DEEP_RESEARCH_COMPLETION_CONTAINER_END***",ns="\x3c!-- VISUALIZATION_DATA_START --\x3e",rs="\x3c!-- VISUALIZATION_DATA_END --\x3e",ts="***DEEP_RESEARCH_QUESTIONNAIRE_START***",os="***DEEP_RESEARCH_QUESTIONNAIRE_END***",as="DEEP_RESEARCH:FOLLOWUP_QUESTIONS",is=32,ss=["pending","in-progress","questionnaire_pending","questionnaire_ready"],ls=new Set(["pending","in-progress","questionnaire_pending"]),ds=new Set(["pending","in-progress"]),cs=new Set(["questionnaire_pending","questionnaire_ready"]),us=new Set(["follow-up","analyzing_topic","probing_searches","preparing_questionnaire","questionnaire_pending","questionnaire_ready","questionnaire_generation_failed"]),fs=new Set(["follow-up","analyzing_topic","probing_searches","preparing_questionnaire","questionnaire_pending"]),hs=Oe("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--askdona-background, #f1f5f9);
  --rag-dr-font-title: 0.92rem;
  --rag-dr-font-heading: 0.88rem;
  --rag-dr-font-subheading: 0.8rem;
  --rag-dr-font-body: 0.76rem;
  --rag-dr-font-small: 0.7rem;
  --rag-dr-font-xs: 0.62rem;
  --rag-dr-font-progress: 1.6rem;
`,ps=Oe("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`,gs=Oe("div")`
  margin-bottom: 2rem;
`,ms=Oe("div")`
  background: var(--askdona-surface, #ffffff);
  border-radius: 12px;
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  padding: 1.5rem;
  margin-bottom: 2rem;
`,bs=Oe("p")`
  margin: 0.4rem 0 0;
  color: var(--askdona-text-secondary, #6b7280);
  font-size: var(--rag-dr-font-subheading, 0.8rem);
`,vs=Oe("div")`
  padding: 1rem;
  border: 1px dashed var(--askdona-border, rgba(71, 85, 105, 0.35));
  border-radius: 8px;
  color: var(--askdona-text-secondary, #6b7280);
  text-align: center;
  font-size: var(--rag-dr-font-subheading, 0.8rem);
`,ys=Oe("p")`
  margin-top: 0.75rem;
  font-size: var(--rag-dr-font-body, 0.76rem);
  color: var(--askdona-text-secondary, #6b7280);
`,ks=Oe("p")`
  margin-top: 0.75rem;
  font-size: var(--rag-dr-font-body, 0.76rem);
  color: var(--askdona-error, #dc2626);
`;function xs(e,n,r){return!(!e||!cs.has(e))||(!(!n||!us.has(n))||"questionnaire"===r)}const ws={planning:"research-outline",outline:"research-outline","research-plan":"research-outline",brainstorming:"research-outline","collecting-sources":"search",collecting_sources:"search",sourcing:"search","source-collection":"search","source-analysis":"extraction","analyzing-sources":"extraction",analysis:"extraction","report-drafting":"synthesis","drafting-report":"synthesis","finalizing-report":"synthesis"};function _s(e){if("string"!=typeof e)return null;const n=e.trim();if(!n)return null;const r=ws[n.toLowerCase()];return null!=r?r:n}function $s(e){const n=function(e){if("string"!=typeof e)return null;const n=e.trim();return n?n.toLowerCase():null}(e);return!!n&&fs.has(n)}function Ss(e){var n,r,t;if("number"==typeof e&&Number.isFinite(e))return e;if("string"==typeof e){const n=e.trim();if(!n)return null;const r=Number(n);return Number.isFinite(r)?r:null}if(e&&"object"==typeof e){const o=null!==(t=null!==(r=null!==(n=e.progress)&&void 0!==n?n:e.value)&&void 0!==r?r:e.percentage)&&void 0!==t?t:null;if(void 0!==o)return Ss(o)}return null}function zs(e){return"number"==typeof e&&Number.isFinite(e)?e>=100?100:e<=0&&e<.5?0:e:null}function Cs(e){if(!e)return null;const n=zs(Ss(e.progress));return null!==n?n:e.progress_data?zs(Ss(e.progress_data.progress)):null}const Ms=Oe("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,As=Oe("button")`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.9rem;
  border-radius: 8px;
  border: 1px solid var(--askdona-border, rgba(0, 0, 0, 0.12));
  background: var(--askdona-background, #ffffff);
  color: var(--askdona-text, #111827);
  font-size: var(--rag-dr-font-small, 0.7rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  line-height: 1;

  &[data-variant='primary'] {
    background: var(--askdona-primary, #2563eb);
    border-color: var(--askdona-primary, #2563eb);
    color: #ffffff;
  }

  &[data-active='true'] {
    border-color: var(--askdona-primary, #2563eb);
    color: var(--askdona-primary, #2563eb);
    background: rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.08);
  }

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;function qs(e){return e.replace(/,(?=\s*?[}\]])/g,"").trim()}function js(e){if(!e)return[];let n=e;if("string"==typeof n){const e=n.trim();if(!e)return[];try{n=JSON.parse(e)}catch(e){return[]}}return Array.isArray(n)?n.map(e=>{var n,r,t;if("string"==typeof e)return e.trim();if(e&&"object"==typeof e){const o=null!==(t=null!==(r=null!==(n=e.prompt)&&void 0!==n?n:e.text)&&void 0!==r?r:e.question)&&void 0!==t?t:"";return"string"==typeof o?o.trim():""}return""}).filter(e=>e.length>0):n&&"object"==typeof n&&Array.isArray(n.questions)?n.questions.map(e=>{var n,r,t;if("string"==typeof e)return e.trim();if(e&&"object"==typeof e){const o=null!==(t=null!==(r=null!==(n=e.prompt)&&void 0!==n?n:e.text)&&void 0!==r?r:e.question)&&void 0!==t?t:"";return"string"==typeof o?o.trim():""}return""}).filter(e=>e.length>0):[]}function Es(e){if(!e)return null;if(e.includes(ts)){const n=e.split(ts)[1];if(!n)return null;const r=qs(n.includes(os)?n.split(os)[0]:n);if(!r)return null;try{const e=JSON.parse(r);return JSON.stringify(e,null,2)}catch(e){return r}}if(e.includes(as)){const n=function(e){const n=e.split(/\r?\n/).map(e=>e.trim()),r=[],t=[];let o=!1;if(n.forEach(e=>{if(!e||e===as)return;const n=e.match(/^\d+[\.\)]\s*(.+)$/);n?(o=!0,t.push(n[1].trim())):o||r.push(e)}),!t.length)return null;const a={title:"フォローアップ質問",introduction:r.join(" ").trim()||"以下の質問にご回答ください。",estimatedCompletionTime:"5分",questions:t.map((e,n)=>({id:`legacy_follow_up_${n+1}`,text:e,type:"textarea",required:!1}))};return JSON.stringify(a,null,2)}(e);if(n)return n}const n=e.indexOf("{"),r=e.lastIndexOf("}");if(-1!==n&&-1!==r&&n<r){const t=qs(e.slice(n,r+1));try{const e=JSON.parse(t);return JSON.stringify(e,null,2)}catch(e){return t||null}}return null}const Is=Oe("div")`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem 0.25rem;
  border-top: 1px solid var(--border-light);
`,Ds=Oe("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,Rs=Oe("button")`
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: var(--rag-dr-font-subheading, 0.8rem);
  transition: all 0.2s;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${e=>e.active?"var(--askdona-tab-accent, var(--askdona-primary))":"var(--askdona-text-secondary)"};

  &:hover {
    color: ${e=>e.active?"var(--askdona-tab-accent, var(--askdona-primary))":"var(--askdona-text)"};
    background: ${e=>e.active?"transparent":"var(--askdona-background)"};
  }

  ${e=>e.active&&"\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -0.35rem;\n      left: 0;\n      right: 0;\n      height: 2px;\n      background: var(--askdona-tab-accent, var(--askdona-primary));\n    }\n  "}
`,Os=Oe("div")`
  position: relative;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  flex-shrink: 0;
  background: var(--askdona-surface, #ffffff);
`,Ns=Oe("div")`
  position: relative;
  display: flex;
  flex-direction: column;
`,Ts=Oe("div")`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem;
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  background: var(--askdona-background);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus-within {
    border-color: var(--askdona-primary);
    box-shadow: 0 0 0 4px color-mix(in oklab, var(--askdona-primary) 15%, transparent);
  }
`,Fs=Oe("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`,Ps=Oe("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  width: 100%;
`,Ls=Oe("textarea")`
  flex: 1;
  width: auto;
  padding: 0 0.5rem;
  border: none;
  background: transparent;
  color: var(--askdona-text);
  font-size: var(--rag-dr-font-body, 0.76rem);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  resize: none;
  outline: none;
  min-height: ${is}px;
  line-height: ${is}px;
  overflow-y: hidden;
  transition: color 0.2s ease;

  &::placeholder {
    color: var(--askdona-text-secondary);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Hs=Oe("button")`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: var(--askdona-primary);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  & > svg {
    display: block;
  }

  &[data-disabled="true"] {
    background: var(--askdona-border);
    cursor: not-allowed;
  }

  &:hover:not([data-disabled="true"]) {
    background: var(--askdona-primary-dark);
    box-shadow: 0 0 0 4px color-mix(in oklab, var(--askdona-primary) 20%, transparent);
  }
`,Us=Oe("div")`
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,Bs=Oe("div")`
  color: var(--askdona-error, #ef4444);
  background: rgba(var(--askdona-error-rgb, 239, 68, 68), 0.1);
  border: 1px solid rgba(var(--askdona-error-rgb, 239, 68, 68), 0.25);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: var(--rag-dr-font-subheading, 0.8rem);
`,Js=Oe("div")`
  margin-top: 1.5rem;
  padding: 1.5rem;
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  border-radius: 18px;
  background: var(--askdona-background, #f8fafc);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,Zs=Oe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`,Vs=Oe("div")`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;

  h3 {
    margin: 0;
    font-size: var(--rag-dr-font-heading, 0.88rem);
  }
`,Qs=Oe("div")`
  font-size: var(--rag-dr-font-small, 0.7rem);
  color: var(--askdona-text-secondary, #64748b);
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,Ws=Oe("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Gs=Oe("div")`
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  border-radius: 12px;
  background: var(--askdona-surface, #ffffff);
  padding: 0.9rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Ks=Oe("div")`
  font-weight: 600;
  font-size: var(--rag-dr-font-subheading, 0.8rem);
  color: var(--askdona-text, #0f172a);
`,Xs=Oe("div")`
  font-size: var(--rag-dr-font-body, 0.76rem);
  color: var(--askdona-text-secondary, #475569);
  line-height: 1.6;
  white-space: pre-wrap;
`,Ys=Oe("ol")`
  margin: 0;
  padding-left: 1.25rem;
  color: var(--askdona-text-secondary, #475569);
  font-size: var(--rag-dr-font-body, 0.76rem);
  line-height: 1.6;

  li + li {
    margin-top: 0.25rem;
  }
`,el=Oe("div")`
  font-size: var(--rag-dr-font-body, 0.76rem);
  color: var(--askdona-text-secondary, #475569);
  line-height: 1.6;

  p {
    margin: 0.35rem 0;
  }

  ul, ol {
    margin: 0.35rem 0 0.35rem 1.1rem;
  }

  & > :first-child {
    margin-top: 0;
  }
`,nl=Oe("div")`
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: var(--rag-dr-font-small, 0.7rem);
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid var(--askdona-border);
  color: var(--askdona-text-secondary);
  background: var(--askdona-background);
`,rl=Oe("span")`
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 999px;
  background: var(--askdona-primary);
  display: inline-block;
`,tl=Oe("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 16px;
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  background: rgba(var(--askdona-primary-rgb, 16, 49, 111), 0.06);
`,ol=Oe("div")`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
`,al=Oe("div")`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--askdona-tab-accent, var(--askdona-primary, #2563eb));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;

  .icon {
    width: 22px;
    height: 22px;
  }
`,il=Oe("div")`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,sl=Oe("div")`
  font-size: var(--rag-dr-font-subheading, 0.8rem);
  font-weight: 600;
  color: var(--askdona-text, #0f172a);
`,ll=Oe("p")`
  margin: 0;
  font-size: var(--rag-dr-font-small, 0.7rem);
  color: var(--askdona-text-secondary, #64748b);
  line-height: 1.5;
`,dl=Oe("div")`
  color: var(--askdona-text, #0f172a);
  line-height: 1.6;
  font-size: var(--rag-dr-font-body, 0.76rem);

  h1, h2, h3, h4, h5 {
    margin: 0.8rem 0 0.4rem;
    font-weight: 600;
    font-size: 1.05em;
  }

  p {
    margin: 0.35rem 0;
  }

  ul, ol {
    margin: 0.35rem 0 0.35rem 1.1rem;
  }

  code {
    background: var(--askdona-surface, #f1f5f9);
    padding: 0.1rem 0.35rem;
    border-radius: 4px;
    font-size: 0.95em;
  }

  & > :first-child {
    margin-top: 0;
  }
`,cl=Oe("div")`
  padding: 1rem;
  border-radius: 10px;
  background: linear-gradient(
    135deg,
    rgba(var(--askdona-success-rgb, 16, 185, 129), 0.12),
    rgba(var(--askdona-success-rgb, 16, 185, 129), 0.08)
  );
  border: 1px solid rgba(var(--askdona-success-rgb, 16, 185, 129), 0.2);
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  color: var(--askdona-text, #0f172a);
`,ul=Oe("div")`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--askdona-surface, #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--rag-dr-font-title, 0.92rem);
  flex-shrink: 0;
`,fl=Oe("div")`
  font-size: var(--rag-dr-font-small, 0.7rem);
  line-height: 1.4;
  color: var(--askdona-text, #0f172a);

  strong {
    display: block;
    font-size: var(--rag-dr-font-subheading, 0.8rem);
    margin-bottom: 0.15rem;
  }
`;function hl({chatFlowId:e,sessionId:n,messages:r,onModeSwitch:t,currentMode:o,onSendMessage:a,baseUrl:i,config:s}){var l,d,c,u,f,h,p,g,m,b,v,y,x,w,_,$,S,z,C,M,A;const q=!!s.debug,[j]=le(()=>{if("undefined"==typeof window)return null;try{return function(e){const n=Bi(e);return n.length?Vi(e,n[0].sessionId):null}(e)}catch(e){return null}}),[E,I]=le("execution"===(null==(D=j)?void 0:D.phase)||"questionnaire"===(null==D?void 0:D.phase)?D.phase:"input");var D;const[R,O]=le(null!==(l=null==j?void 0:j.userQuestion)&&void 0!==l?l:""),[N,T]=le(void 0!==(null==j?void 0:j.currentTask)?j.currentTask:null),F=ue(void 0!==(null==j?void 0:j.currentTask)?j.currentTask:null),[,P]=le(null!==(c=null===(d=null==j?void 0:j.currentTask)||void 0===d?void 0:d.id)&&void 0!==c?c:null),[L,H]=le(null),[B,J]=le(!1),[Z,Q]=le(!1),[W,G]=le(null!==(u=null==j?void 0:j.questionnaireJson)&&void 0!==u?u:""),[K,X]=le(null),[Y,ee]=le(!1),ne=void 0===(null==j?void 0:j.questionnaireSignature)?null:null!==(f=j.questionnaireSignature)&&void 0!==f?f:null,[re,te]=le(ne),[oe,ae]=le(null!==(h=null==j?void 0:j.questionnaireSummary)&&void 0!==h?h:null),[ie,se]=le(null!==(p=null==j?void 0:j.finalReport)&&void 0!==p?p:null),[ce,fe]=le(Boolean(null==j?void 0:j.finalReport)),pe=ue(!1),ge=ue(null),me=ue(new Ti),[be,ve]=le(null),ye=ue(null),ke=ue(r),xe=ue(!1),[we,_e]=le(()=>"undefined"==typeof window?[]:Ki(e)),[$e,Se]=le(null),[ze,Ce]=le(()=>{var n,r;if("undefined"==typeof window)return null;return null!==(r=null===(n=Ki(e)[0])||void 0===n?void 0:n.sessionId)&&void 0!==r?r:null}),[Me,Ae]=le(!1),[qe,je]=le(!1),[Ee,Ie]=le(null),[De,Re]=le(null),[Oe,Ne]=le(null),[Te,Fe]=le(null),[Pe,Le]=le(null),[He,Be]=le(null),[Je,Ze]=le(null),[Ve,Qe]=le(null),[We,Ge]=le(null),[Ke,Ye]=le(null);de(()=>{},[N]),de(()=>{},[Ee,q]),de(()=>{},[He,q]);const en=he(()=>{if("undefined"!=typeof window)try{_e(Ki(e))}catch(e){}},[e]);de(()=>{ke.current=r},[r]),de(()=>{F.current=N},[N]),de(()=>{en()},[en]),de(()=>{0===we.length&&Ae(!1)},[we.length]),de(()=>{var e,n,r,t,o,a,i,s,l,d;if(!N)return Ie(null),Re(null),Ne(null),Fe(null),Le(null),Be(null),Ze(null),Qe(null),Ge(null),void Ye(null);const c=Cs(N),u=_s(null!==(r=null!==(n=null===(e=N.progress_data)||void 0===e?void 0:e.stage)&&void 0!==n?n:N.stage)&&void 0!==r?r:null),f=null!==(t=N.status)&&void 0!==t?t:null,h=null!==(i=null!==(o=N.message)&&void 0!==o?o:null===(a=N.progress_data)||void 0===a?void 0:a.message)&&void 0!==i?i:null,p=null!==(d=null!==(l=null===(s=N.progress_data)||void 0===s?void 0:s.timestamp)&&void 0!==l?l:N.updated_at)&&void 0!==d?d:null;xs(f,u,E)?(Ie(c),Re(u),Ne(f),Fe(h),Le(p)):(Be(c),Ze(u),Qe(f),Ge(h),Ye(p))},[N,E]);const{getValidToken:nn,isInitializing:rn,session:tn,initializeSession:on,clearSession:an}=function(e){const[n,r]=le(null),[t,o]=le(!0),[a,i]=le(null),s=he(e=>{try{const n=e.split(".");return 3!==n.length?null:JSON.parse(atob(n[1]))}catch(e){return null}},[]),l=he(async()=>{i(null);try{const n=window.location.hostname+(window.location.port?":"+window.location.port:""),t=await fetch(`${U}/session/init/${e}`,{method:"POST",headers:{"Content-Type":"application/json",Origin:window.location.origin,"X-Widget-Version":"1.0.0"},body:JSON.stringify({domain:n,timestamp:Date.now(),userAgent:navigator.userAgent})});if(!t.ok){const e=await t.json().catch(()=>({message:"Session initialization failed"}));throw new Error(e.message||`HTTP ${t.status}`)}const{secureSessionToken:o}=await t.json();if(!o)throw new Error("No session token received");const a=s(o);if(!a)throw new Error("Invalid session token format");const i=`askdona_secure_session_${e}`;localStorage.setItem(i,o);const l={token:o,isValid:!0,expiresAt:1e3*a.exp,sessionId:a.sessionId,chatflowId:a.chatflowId};return r(l),o}catch(e){throw i(e.message),e}},[e,s]),d=he(async()=>{o(!0),i(null);try{const n=`askdona_secure_session_${e}`,t=localStorage.getItem(n);if(t){const o=s(t),a=Date.now();if(o&&1e3*o.exp>a&&o.chatflowId===e){const e={token:t,isValid:!0,expiresAt:1e3*o.exp,sessionId:o.sessionId,chatflowId:o.chatflowId};return void r(e)}localStorage.removeItem(n)}await l()}catch(e){i(e.message)}finally{o(!1)}},[e,s,l]),c=he(async()=>{if(n&&n.expiresAt-Date.now()<18e5)try{await l()}catch(e){}},[n,l]),u=he(async()=>{if(!n||!n.isValid)return null;if(n.expiresAt<=Date.now())try{return await l(),(null==n?void 0:n.token)||null}catch(e){return null}return await c(),n.token},[n,l,c]),f=he(()=>{const n=`askdona_secure_session_${e}`;localStorage.removeItem(n),r(null),i(null)},[e]);return de(()=>{e&&d()},[e,d]),de(()=>{if(!n)return;const e=setInterval(()=>{c()},3e5);return()=>clearInterval(e)},[n,c]),{session:n,isInitializing:t,error:a,initializeSession:l,getValidToken:u,clearSession:f,refreshSessionIfNeeded:c}}(e),sn=he(async(n=!1)=>{try{const r=ye.current;if(!n&&r&&Date.now()-r.timestamp<3e4)return ve(r.data),r.data;const t=await nn();if(!t)return null;const o=me.current.getBrowserFingerprint(),a=await fetch(`${U}/chat/${e}/deep-research/config`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({secureSessionToken:t,browserFingerprint:o})}),i=await a.json();if(!a.ok)throw new Error((null==i?void 0:i.error)||`Failed to load Deep Research config (${a.status})`);return ye.current={timestamp:Date.now(),data:i},ve(i),i}catch(e){return null}},[e,nn]),ln=he(e=>{var n,r,t,o,a;if(!e)return!1;const i=F.current,s=null!==(n=e.task)&&void 0!==n?n:null,l=function(e,n,r){const t=zs(Ss(null==e?void 0:e.progress));if(null!==t)return t;if(null==e?void 0:e.progressData){const n=zs(Ss(e.progressData.progress));if(null!==n)return n}if(n){const e=Cs(n);if(null!==e)return e}return Cs(r)}(e,s,i),d=function(e,n,r){var t,o,a;const i=[null==e?void 0:e.stage,null===(t=null==e?void 0:e.progressData)||void 0===t?void 0:t.stage,null===(o=null==n?void 0:n.progress_data)||void 0===o?void 0:o.stage,null==n?void 0:n.stage,null===(a=null==r?void 0:r.progress_data)||void 0===a?void 0:a.stage,null==r?void 0:r.stage];for(const e of i){const n=_s(e);if(n)return n}return null}(e,s,i),c=function(e,n,r){var t,o,a,i;return null!==(i=null!==(a=null!==(o=null!==(t=null==e?void 0:e.status)&&void 0!==t?t:null==n?void 0:n.status)&&void 0!==o?o:null==r?void 0:r.status)&&void 0!==a?a:null)&&void 0!==i?i:null}(e,s,i),u=function(e,n,r){var t,o,a,i,s,l,d,c,u;const f=null!==(u=null!==(c=null!==(l=null!==(s=null!==(a=null!==(t=null==e?void 0:e.message)&&void 0!==t?t:null===(o=null==e?void 0:e.progressData)||void 0===o?void 0:o.message)&&void 0!==a?a:null===(i=null==n?void 0:n.progress_data)||void 0===i?void 0:i.message)&&void 0!==s?s:null==n?void 0:n.message)&&void 0!==l?l:null===(d=null==r?void 0:r.progress_data)||void 0===d?void 0:d.message)&&void 0!==c?c:null==r?void 0:r.message)&&void 0!==u?u:null;if("string"==typeof f)return f.trim()||null;return null}(e,s,i),f=function(e,n,r){var t,o,a,i,s,l,d,c,u;return(null!==(u=null!==(c=null!==(l=null!==(s=null!==(a=null!==(t=null==e?void 0:e.updatedAt)&&void 0!==t?t:null===(o=null==e?void 0:e.progressData)||void 0===o?void 0:o.timestamp)&&void 0!==a?a:null===(i=null==n?void 0:n.progress_data)||void 0===i?void 0:i.timestamp)&&void 0!==s?s:null==n?void 0:n.updated_at)&&void 0!==l?l:null===(d=null==r?void 0:r.progress_data)||void 0===d?void 0:d.timestamp)&&void 0!==c?c:null==r?void 0:r.updated_at)&&void 0!==u?u:null)||null}(e,s,i),h=function(e,n,r){var t,o,a,i;const s=null!==(a=null!==(o=null!==(t=null==e?void 0:e.progressData)&&void 0!==t?t:null==n?void 0:n.progress_data)&&void 0!==o?o:null==r?void 0:r.progress_data)&&void 0!==a?a:null;if(!s)return null;const l=zs(Ss(s.progress)),d=_s(s.stage);return null!==l&&l!==s.progress||null!==d&&d!==s.stage?{...s,progress:null!==l?l:null!==(i=s.progress)&&void 0!==i?i:null,stage:d}:s}(e,s,i);let p=!1;if(s){const e={...s,progress:null!==l?l:Cs(s),stage:null!==(r=null!=d?d:s.stage)&&void 0!==r?r:null,status:null!=c?c:s.status,message:null!==(t=null!=u?u:s.message)&&void 0!==t?t:null,progress_data:h,updated_at:null!=f?f:s.updated_at};F.current=e,T(e),P(e.id),p=!0}else i&&T(e=>{var n;if(!e)return e;const r=null!==l?l:e.progress,t=null!=d?d:e.stage,o=null!=c?c:e.status,a=null!=u?u:e.message,i=null!=f?f:e.updated_at,s=null!==(n=null!=h?h:e.progress_data)&&void 0!==n?n:null;if(!(r!==e.progress||t!==e.stage||o!==e.status||a!==e.message||s!==e.progress_data||i!==e.updated_at))return e;const g={...e,progress:r,stage:t,status:o,message:a,progress_data:s,updated_at:i};return F.current=g,p=!0,g});const g=xs(c,d,E);if(null!==l&&(g?Ie(e=>null===e?l:Math.max(e,l)):Be(e=>null===e?l:Math.max(e,l))),g?(Re(null!=d?d:null),Ne(null!=c?c:null),Fe(u),Le(null!=f?f:null)):(Ze(null!=d?d:null),Qe(null!=c?c:null),Ge(u),Ye(null!=f?f:null)),e.questionnairePayload){const n="string"==typeof e.questionnairePayload?e.questionnairePayload:JSON.stringify(e.questionnairePayload,null,2);G(n),X(null),p=!0}else if(e.questionnaireMessage){const n=Es(e.questionnaireMessage);n&&(G(n),X(null),p=!0)}else if("questionnaire_ready"===(null===(o=e.task)||void 0===o?void 0:o.status)&&e.task.message){const n=Es(e.task.message);n&&(G(n),X(null),p=!0)}if(void 0!==e.questionnaireSignature&&(te(null!==(a=e.questionnaireSignature)&&void 0!==a?a:null),p=!0),e.finalMessage){let n=e.finalMessage.doc_metadata;if("string"==typeof n)try{n=JSON.parse(n)}catch(e){}const r=function(e){if(!e)return{content:"",rawContent:"",completionMessage:null,visualizations:null};let n=e,r=null,t=null;if(n.includes(Xi)&&(n=n.replace(Xi,"").trim()),n.includes(Yi)&&n.includes(es)){const e=n.indexOf(Yi)+Yi.length,t=n.indexOf(es);r=n.substring(e,t).trim();const o=n.substring(0,n.indexOf(Yi)),a=n.substring(t+es.length);n=`${o.trim()}\n\n${a.trim()}`.trim()}const o=n.indexOf(ns),a=n.indexOf(rs);if(-1!==o&&-1!==a&&a>o){const e=n.substring(o+ns.length,a).trim();try{const n=JSON.parse(e);Array.isArray(n)&&(t=n)}catch(e){}n=n.substring(0,o).trim()}return{content:n.trim(),rawContent:e,completionMessage:r,visualizations:t}}(e.finalMessage.content);fe(!1),se({content:r.content,rawContent:r.rawContent,completionMessage:r.completionMessage,visualizations:r.visualizations,docMetadata:n,createdAt:e.finalMessage.created_at}),p=!0}return p},[E,P,G,X,te,fe,se,Ie,Re,Ne,Fe,Le,Be,Ze,Qe,Ge,Ye,T,q]),dn=he(async()=>{const r=(null==tn?void 0:tn.sessionId)||n;if(!r)return"error";try{const n=await fetch(`${U}/chat/${e}/deep-research/status?sessionId=${r}`);if(!n.ok){if(404===n.status)return"error";throw new Error(`Failed to fetch task status (${n.status})`)}const t=await n.json();return ln(t)?"updated":"no-change"}catch(e){return e instanceof TypeError&&String(e.message||"").includes("Failed to fetch")?"network-error":"error"}},[e,null==tn?void 0:tn.sessionId,n,ln,q,E]);de(()=>{xe.current=!1},[e,null==tn?void 0:tn.sessionId]);const cn=he(e=>{const n=e||ge.current;if(!(n&&n instanceof HTMLTextAreaElement))return;n.style.height="auto";const r=Math.max(n.scrollHeight,is);n.style.height=`${r}px`,n.style.lineHeight=r<=is?"32px":"1.5"},[]);de(()=>{var n,r,t,o,a;if(!(null==tn?void 0:tn.sessionId)||pe.current)return;const i=Wi(e,tn.sessionId);i&&(i.userQuestion&&O(i.userQuestion),"execution"!==i.phase&&"questionnaire"!==i.phase||I(i.phase),void 0!==i.currentTask&&(T(i.currentTask),P(null!==(r=null===(n=i.currentTask)||void 0===n?void 0:n.id)&&void 0!==r?r:null)),i.questionnaireJson&&G(i.questionnaireJson),void 0!==i.questionnaireSignature&&te(null!==(t=i.questionnaireSignature)&&void 0!==t?t:null),void 0!==i.finalReport&&(se(null!==(o=i.finalReport)&&void 0!==o?o:null),fe(Boolean(i.finalReport))),void 0!==i.questionnaireSummary&&ae(null!==(a=i.questionnaireSummary)&&void 0!==a?a:null)),pe.current=!0},[e,null==tn?void 0:tn.sessionId]),de(()=>{(null==tn?void 0:tn.sessionId)&&pe.current&&(xe.current||(xe.current=!0,dn().catch(()=>{})))},[null==tn?void 0:tn.sessionId,dn]);const un=(null==tn?void 0:tn.sessionId)||n,fn=un,hn="completed"===(null==N?void 0:N.status)||"failed"===(null==N?void 0:N.status),pn="questionnaire"===E&&!!N&&!!fn&&!hn&&ls.has(N.status),gn="execution"===E&&!!N&&!!fn&&!hn&&ds.has(N.status),mn=pn||gn;de(()=>{$e||un&&Ce(e=>e===un?e:un)},[$e,un]),de(()=>{if(!mn||!fn)return;let e=null,n=!1;const r="execution"===E?3e4:1e4,t=async()=>{if(n)return;n=!0;const r=await dn();n=!1,"network-error"===r&&e&&clearInterval(e)};return t(),e=setInterval(t,r),()=>{e&&clearInterval(e)}},[mn,fn,dn,null==N?void 0:N.id,E,q,null==N?void 0:N.status,null==N?void 0:N.progress]),de(()=>{sn()},[sn]),de(()=>{(null==tn?void 0:tn.sessionId)&&pe.current&&(!function(e,n,r){const t=Wi(e,n);Qi(e,n,{version:1,chatflowId:e,sessionId:n,lastUpdated:(new Date).toISOString(),...t?{userQuestion:t.userQuestion,phase:t.phase,questionnaireJson:t.questionnaireJson,questionnaireSignature:t.questionnaireSignature,questionnaireSummary:t.questionnaireSummary,finalReport:t.finalReport,currentTask:t.currentTask}:{},...r})}(e,tn.sessionId,{userQuestion:R||void 0,phase:E,questionnaireJson:W||void 0,questionnaireSignature:re||void 0,questionnaireSummary:oe||void 0,finalReport:ie||void 0,currentTask:N}),en())},[e,null==tn?void 0:tn.sessionId,R,E,W,re,oe,ie,N,en]),de(()=>{},[oe]),de(()=>{"input"===E&&cn()},[R,E,cn]),de(()=>{if("input"===E)return;const e=ge.current;e&&e instanceof HTMLTextAreaElement&&(e.style.height="32px",e.style.lineHeight="32px")},[E,q]),de(()=>{var e;if("questionnaire_ready"===(null==N?void 0:N.status)&&N.questionnaire_payload){const n="string"==typeof N.questionnaire_payload?N.questionnaire_payload:JSON.stringify(N.questionnaire_payload,null,2);return G(n),te(null!==(e=N.questionnaire_signature)&&void 0!==e?e:null),void X(null)}if("questionnaire_ready"===(null==N?void 0:N.status)&&!N.questionnaire_payload&&!W){const e=function(e){for(let n=e.length-1;n>=0;n-=1){const r=e[n];if("assistant"!==r.role)continue;const t=Es(r.content);if(t)return t}return null}(ke.current);e&&G(e)}},[N,W]),de(()=>{N&&N.execution_results},[N]),de(()=>{var e;N&&void 0!==N.questionnaire_signature&&te(null!==(e=N.questionnaire_signature)&&void 0!==e?e:null)},[null==N?void 0:N.questionnaire_signature]),de(()=>{var e,n,r,t,o,a,i;if(!N)return;const s=oe,l=js(null!==(e=N.questionnaire_payload)&&void 0!==e?e:W),d=l.length>0?l:js(W),c=function(e){if(!e)return null;const n=["questionnaire_response_markdown","questionnaire_response_markdown_v2","questionnaire_response","questionnaire_response_markdown_combined","questionnaireResponsesMarkdown"];if("string"==typeof e){const n=e.trim();return n.length>0?n:null}if(e&&"object"==typeof e){for(const r of n){const n=e[r];if("string"==typeof n&&n.trim().length>0)return n.trim()}const r=e.questionnaire_responses;if(Array.isArray(r)&&r.length>0)return r.map(e=>{var n,r;if("string"==typeof e)return e.trim();if(e&&"object"==typeof e){const t=null!==(r=null!==(n=e.answer)&&void 0!==n?n:e.response)&&void 0!==r?r:"";return"string"==typeof t?t.trim():""}return""}).filter(e=>e.length>0).join("\n\n")}return null}(N.execution_results),u=(null!==(n=null==s?void 0:s.formattedMarkdown)&&void 0!==n?n:"").trim(),f=d.length>0&&(!s||0===s.questions.length),h="string"==typeof c&&c.trim().length>0&&0===u.length;if(!f&&!h)return;const p={questions:f?d:null!==(r=null==s?void 0:s.questions)&&void 0!==r?r:d,answer:h?(null!=c?c:"").trim():null!==(t=null==s?void 0:s.answer)&&void 0!==t?t:(null!=c?c:"").trim(),formattedMarkdown:h?(null!=c?c:"").trim():null!==(o=null==s?void 0:s.formattedMarkdown)&&void 0!==o?o:(null!=c?c:"").trim(),submittedAt:null!==(i=null!==(a=null==s?void 0:s.submittedAt)&&void 0!==a?a:N.updated_at)&&void 0!==i?i:(new Date).toISOString()};(function(e,n){return e===n||!(!e||!n)&&e.answer===n.answer&&e.formattedMarkdown===n.formattedMarkdown&&e.submittedAt===n.submittedAt&&e.questions.length===n.questions.length&&e.questions.every((e,r)=>e===n.questions[r])})(null!=s?s:null,p)||ae(p)},[N,W,oe]),de(()=>{const e=null==N?void 0:N.status;!$s(null==N?void 0:N.stage)||"pending"!==e&&"in-progress"!==e&&"questionnaire_pending"!==e||W?"questionnaire_ready"===e?("questionnaire"!==E&&I("questionnaire"),W&&X(null)):"questionnaire"===E&&N&&(I("execution"),G(""),X(null),se(null),fe(!1)):"questionnaire"!==E&&I("questionnaire")},[N,W,E,q]);const bn=he(async(r,t,o)=>{var a,i,s,l,d,c,u;try{const f=await nn();if(!f)throw new Error("Failed to get valid session token");const h=await sn()||be;if(!h||!h.canExecute)throw new Error("Deep Research is not available right now.");const p=h.visitor;if(!p)throw new Error("Deep Research visitor authorization missing. Please refresh and try again.");const g=(null==tn?void 0:tn.sessionId)||n,m={secureSessionToken:f,query:r,chatflowId:e,sessionId:g,browserFingerprint:me.current.getBrowserFingerprint(),visitor:p,messages:t};(null==o?void 0:o.questionnaireSignature)&&(m.questionnaireSignature=o.questionnaireSignature);const b=await fetch(`${U}/chat/${e}/deep-research/start`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)}),v=await b.json();if(!b.ok)throw new Error((null==v?void 0:v.error)||`Failed to start research: ${b.status}`);if((null==v?void 0:v.visitor)&&h){const e={...h,visitor:v.visitor};ye.current={timestamp:Date.now(),data:e},ve(e)}const y=(null==v?void 0:v.taskId)||(null==v?void 0:v.jobId)||`embed-dr-${Date.now()}`;if("questionnaire_pending"===(null==v?void 0:v.status)){const e={id:y,session_id:g,status:"questionnaire_pending",stage:"questionnaire_pending",progress:0,message:(null==v?void 0:v.message)||"Deep Researchの質問票を準備しています...",checksheet_markdown:null,tool_usage_plan:null,execution_results:null,final_report_message_id:null,summary_report:null,research_id:(null==v?void 0:v.researchId)||null,created_at:(new Date).toISOString(),updated_at:(new Date).toISOString(),report_settings:(null==v?void 0:v.report_settings)||{reportFormat:"business-report",internetEnabled:!0,language:"japanese"},questionnaire_payload:null,questionnaire_signature:null};return T(e),P(e.id),te(null),G(""),X(null),ae(null),se(null),I("questionnaire"),void sn(!0).catch(()=>{})}if("questionnaire_ready"===(null==v?void 0:v.status)){const e=null!==(a=null==v?void 0:v.task)&&void 0!==a?a:{id:y,session_id:g,status:"questionnaire_ready",stage:"questionnaire_ready",progress:100,message:(null==v?void 0:v.message)||"質問票の準備が完了しました。",checksheet_markdown:null,tool_usage_plan:null,execution_results:null,final_report_message_id:null,summary_report:null,research_id:(null==v?void 0:v.researchId)||null,created_at:(new Date).toISOString(),updated_at:(new Date).toISOString(),report_settings:(null==v?void 0:v.report_settings)||{reportFormat:"business-report",internetEnabled:!0,language:"japanese"},questionnaire_payload:null!==(i=null==v?void 0:v.questionnairePayload)&&void 0!==i?i:null,questionnaire_signature:null!==(s=null==v?void 0:v.questionnaireSignature)&&void 0!==s?s:null};T(e),P(e.id);const n=null!==(d=null!==(l=null==v?void 0:v.questionnaireSignature)&&void 0!==l?l:e.questionnaire_signature)&&void 0!==d?d:null;if(te(n),null==v?void 0:v.questionnairePayload){const e="string"==typeof v.questionnairePayload?v.questionnairePayload:JSON.stringify(v.questionnairePayload,null,2);G(e),X(null)}else if(null==v?void 0:v.questionnaireMessage){const e=Es(v.questionnaireMessage);e&&(G(e),X(null))}return ae(null),I("questionnaire"),void sn(!0).catch(()=>{})}if(!(null==v?void 0:v.jobId))throw new Error("Deep Research job did not return an identifier.");const k=null!==(c=null==v?void 0:v.task)&&void 0!==c?c:{id:y,session_id:g,status:"pending",stage:"follow-up",progress:0,message:(null==v?void 0:v.message)||"Deep Researchを開始しています...",checksheet_markdown:null,tool_usage_plan:null,execution_results:null,final_report_message_id:null,summary_report:null,research_id:(null==v?void 0:v.researchId)||null,created_at:(new Date).toISOString(),updated_at:(new Date).toISOString(),report_settings:(null==v?void 0:v.report_settings)||{reportFormat:"business-report",internetEnabled:!0,language:"japanese"},questionnaire_payload:null,questionnaire_signature:null!==(u=null==o?void 0:o.questionnaireSignature)&&void 0!==u?u:null};T(k),P(k.id),ae(null),se(null);const x=$s(k.stage)?"questionnaire":"execution";"questionnaire"===x&&(G(""),X(null)),I(x),sn(!0).catch(()=>{})}catch(e){throw e}finally{J(!1)}},[e,n,tn,nn,sn,be,q]),vn=he(async()=>{if("input"===E&&R.trim()&&!Z){Q(!0),J(!0),H(null);try{await bn(R,r)}catch(e){H(e instanceof Error?e.message:"Failed to start research")}finally{J(!1),Q(!1)}}},[E,R,r,bn,Z]),yn=he(e=>{(e.metaKey||e.ctrlKey)&&"Enter"===e.key&&(e.preventDefault(),vn())},[vn]),kn=he(async e=>{X(null),ee(!0);try{const n=re||(null==N?void 0:N.questionnaire_signature)||null;if(!n)return X("質問票の検証情報を準備しています。数秒後に再度お試しください。"),await dn().catch(()=>{}),void ee(!1);const t=(new Date).toISOString(),o=function(e){const n=e.split(/\r?\n/),r=[],t=[];let o="none";return n.forEach(e=>{const n=e.trim();if(!n)return void("answers"===o&&t.push(""));const a=n.replace(/[*_`]/g,"").toLowerCase();if(a.startsWith("質問一覧")||a.startsWith("質問一覧:")||a.startsWith("questions"))o="questions";else if(a.startsWith("回答")||a.startsWith("回答:")||a.startsWith("answers"))o="answers";else{if("questions"===o){const e=n.match(/^\d+[\.\)]\s*(.+)$/);return void r.push(e&&e[1]?e[1].trim():n)}"answers"===o&&t.push(e)}}),{questions:r.filter(e=>e&&e.trim().length>0),answer:t.join("\n").trim()}}(e);ae({questions:o.questions,answer:o.answer,formattedMarkdown:e,submittedAt:t});const a=[...r,{role:"user",content:e,createdAt:t,id:`questionnaire-response-${Date.now()}`}],i=`${R}\n\nClarifications:\n\n${e}`;await bn(i,a,{questionnaireSignature:n})}catch(e){X("回答の送信に失敗しました。時間をおいて再度お試しください。")}finally{ee(!1)}},[bn,r,re,null==N?void 0:N.questionnaire_signature,R,dn]);he(n=>{const r=n.sessionId;if(Ce(r),r===un)return void Se(null);if("undefined"==typeof window)return;const t=function(e,n){return Vi(e,n)}(e,r);if(!t)return en(),void Se(null);Se(t)},[e,un,en]);const xn=he(()=>{Se(null),un&&Ce(un)},[un]);he(()=>{var e,n,r,t;if(!$e)return;const o=$e;un&&Ce(un),Se(null);const a="questionnaire"===o.phase&&o.questionnaireJson?"questionnaire":"input";I(a),O(null!==(e=o.userQuestion)&&void 0!==e?e:""),G(null!==(n=o.questionnaireJson)&&void 0!==n?n:""),te(null!==(r=o.questionnaireSignature)&&void 0!==r?r:null),X(null),se(null!==(t=o.finalReport)&&void 0!==t?t:null),fe(Boolean(o.finalReport)),T(null),Ie(null),Re(null),Ne(null),Fe(null),Le(null),Be(null),Ze(null),Qe(null),Ge(null),Ye(null),P(null),H(null),J(!1),ee(!1),Q(!1),cn()},[$e,un,cn,P]);const wn=he(async()=>{if(!qe){je(!0);try{un&&Gi(e,un),pe.current=!1,ye.current=null,I("input"),T(null),P(null),O(""),G(""),X(null),te(null),ae(null),se(null),fe(!1),Ie(null),Re(null),Ne(null),Fe(null),Le(null),Be(null),Ze(null),Qe(null),Ge(null),Ye(null),Se(null),J(!1),ee(!1),Q(!1),H(null),Ae(!1),Ce(null),an(),await on(),en()}catch(e){const n="ja"===s.language?"新しいセッションの開始に失敗しました。時間をおいて再度お試しください。":"Failed to start a new session. Please try again in a moment.";H(e instanceof Error&&e.message?e.message:n)}finally{je(!1)}}},[qe,un,e,an,on,en,s.language]),_n=he(()=>{I("input"),T(null),P(null),H(null),O(""),G(""),X(null),te(null),ae(null),fe(!1),Ie(null),Re(null),Ne(null),Fe(null),Le(null),Be(null),Ze(null),Qe(null),Ge(null),Ye(null),Gi(e,un||void 0),xn(),en()},[e,un,xn,en]),$n="ja"===s.language,Sn=o||"deep-research",zn=s.enableDeepResearch||s.enableRagDeepResearch,Cn="input"===E&&!!R.trim()&&!B&&!Z,Mn=Boolean(re||(null==N?void 0:N.questionnaire_signature)),An=Y||!Mn,qn=Mn?void 0:"質問票を検証しています...",jn="ja"===s.language?"Ctrl+Enter または ⌘+Enter で送信":"Send with Ctrl+Enter or ⌘+Enter",En="ja"===s.language?"Deep Researchで調べたい内容を入力してください... (Ctrl+Enter または ⌘+Enter で送信)":"Describe what you would like Deep Research to investigate... (Ctrl+Enter or ⌘+Enter to send)",In=!!N&&ss.includes(N.status),Dn=Boolean($e),Rn=qe?$n?"新しいセッションを作成中...":"Starting new session...":$n?"新しいセッションを開始":"Start new session",On=null!==(m=null===(g=null==be?void 0:be.browserLimits)||void 0===g?void 0:g.limits)&&void 0!==m?m:[];null===(b=null==be?void 0:be.browserLimits)||void 0===b||b.allowed;const Nn=null!==(y=null===(v=null==be?void 0:be.browserLimits)||void 0===v?void 0:v.blockedBy)&&void 0!==y?y:null;On.length;const Tn=null==be?void 0:be.visitor,Fn=he(e=>{if(!e)return $n?"利用制限":"Usage limit";if(e.startsWith("custom-")){const n=parseInt(e.replace("custom-","").replace("d",""),10);if(Number.isFinite(n))return $n?`直近${n}日`:`Last ${n} days`}return($n?{daily:"1日あたり",weekly:"1週間あたり",monthly:"1か月あたり",yearly:"1年あたり"}:{daily:"Per day",weekly:"Per week",monthly:"Per month",yearly:"Per year"})[e]||e},[$n]),Pn=he(e=>{if(!e)return null;const n=new Date(e);return Number.isNaN(n.getTime())?null:n.toLocaleString($n?"ja-JP":void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})},[$n]);"number"==typeof(null==Tn?void 0:Tn.remaining)&&Tn.remaining,"number"==typeof(null==Tn?void 0:Tn.limit)&&Tn.limit;const Ln=null==Tn?void 0:Tn.windowEnd;Nn&&Fn(Nn),Pn(Ln);const Hn=!1,Un=he((e,n)=>e.hasFinalReport?$n?"完了":"Completed":n?$n?"進行中":"In progress":"execution"===e.phase?$n?"実行中":"Executing":"questionnaire"===e.phase?$n?"質問票対応中":"Awaiting questionnaire":$n?"入力中":"Draft",[$n]),Bn=null!==(x=null==$e?void 0:$e.finalReport)&&void 0!==x?x:ie,Jn=null!==(w=null==$e?void 0:$e.userQuestion)&&void 0!==w?w:R,Zn=null!==(_=null==$e?void 0:$e.questionnaireSummary)&&void 0!==_?_:oe,Vn=Boolean(Bn)&&(!In||Dn),Qn=Vn&&(Dn||ce),Wn=$n?Dn?"過去のDeep Research結果を表示しています":"前回のDeep Research結果を表示しています":Dn?"Viewing a previous Deep Research report":"Showing your previous Deep Research report",Gn=$n?"調査結果":"Research Findings",Kn=$n?"Deep Researchが生成したレポート本文です。":"Deep Research generated report summary.",Xn=null!==(S=null===($=null==Zn?void 0:Zn.questions)||void 0===$?void 0:$.filter(e=>e&&e.trim().length>0))&&void 0!==S?S:[],Yn=Boolean((null==Zn?void 0:Zn.answer)&&Zn.answer.trim().length>0),er=Zn?Yn?Zn.answer:$n?"回答は送信されませんでした。":"No answers were provided.":"",nr=Boolean(Jn&&Jn.trim().length>0||Xn.length>0||Zn);de(()=>{},[Xn,Yn,er,Zn,Jn,nr,Vn]);const rr=$e?{sessionId:$e.sessionId,userQuestion:$e.userQuestion,lastUpdated:$e.lastUpdated,finalReportCreatedAt:null!==(C=null===(z=$e.finalReport)||void 0===z?void 0:z.createdAt)&&void 0!==C?C:null,hasFinalReport:Boolean($e.finalReport),phase:null!==(M=$e.phase)&&void 0!==M?M:null}:null,tr=!!rr&&rr.sessionId===un;return(null===(A=null==rr?void 0:rr.userQuestion)||void 0===A?void 0:A.trim())&&(rr.userQuestion.trim().length>80?rr.userQuestion.trim().slice(0,80):rr.userQuestion.trim()),rr&&Un(rr,tr),(null==rr?void 0:rr.lastUpdated)&&new Date(rr.finalReportCreatedAt||rr.lastUpdated).toLocaleString($n?"ja-JP":void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),V(hs,{children:[V(ps,{children:[L&&V(Bs,{children:L}),Hn,false,V(Ms,{children:[V(As,{type:"button","data-variant":"primary",onClick:wn,disabled:qe||rn,children:Rn}),Hn]}),Hn,rn&&!Vn&&V(vs,{children:"セッションを初期化しています..."}),!rn&&"input"===E&&V(gs,{children:V(bs,{children:"調査したい背景や目的、特に知りたい観点などを入力し「送信」ボタンで Deep Research を開始してください。"})}),"questionnaire"===E&&V(ms,{children:[W?V(Ia,{questionnaireJson:W,onSubmit:kn,isSubmitLocked:An,submitLockLabel:qn}):V(hi,{task:N,isJapanese:$n,progressOverride:Ee,stageOverride:De,statusOverride:Oe,messageOverride:Te,updatedAtOverride:Pe}),K&&V(ks,{children:K}),W?(null==N?void 0:N.message)?V(ys,{children:N.message}):Mn?null:V(ys,{children:$n?"質問票の準備を行っています。送信が可能になるまで少しお待ちください。":"Preparing the questionnaire. Please wait a few more seconds before submitting."}):null]}),"execution"===E&&N&&V(ia,{task:N,onRetry:_n,progressOverride:He,stageOverride:Je,statusOverride:Ve,messageOverride:We,updatedAtOverride:Ke}),Vn&&Bn&&V(Js,{children:[V(Zs,{children:[V(Vs,{children:[V("h3",{children:"調査レポート"}),Bn.createdAt&&V(Qs,{children:new Date(Bn.createdAt).toLocaleString($n?"ja-JP":void 0)})]}),Qn&&V(nl,{children:[V(rl,{}),Wn]})]}),Bn.completionMessage&&V(cl,{children:[V(ul,{children:"✅"}),V(fl,{children:[V("strong",{children:"Deep Researchが完了しました"}),Bn.completionMessage]})]}),nr&&V(Ws,{children:[Jn&&Jn.trim().length>0&&V(Gs,{children:[V(Ks,{children:$n?"Deep Research依頼文":"Deep Research request"}),V(Xs,{children:Jn.trim()})]}),Xn.length>0&&V(Gs,{children:[V(Ks,{children:$n?"フォローアップ質問":"Follow-up questions"}),V(Ys,{children:Xn.map((e,n)=>V("li",{children:e},`follow-up-question-${n}`))})]}),Zn&&V(Gs,{children:[V(Ks,{children:$n?"フォローアップ質問への回答":"Follow-up answers"}),V(el,{children:sr(er,!1)})]})]}),V(tl,{children:[V(ol,{children:[V(al,{children:V(Xe,{className:"icon"})}),V(il,{children:[V(sl,{children:Gn}),V(ll,{children:Kn})]})]}),V(dl,{children:sr(Bn.content,!1,Array.isArray(Bn.docMetadata)?Bn.docMetadata:void 0)})]})]})]}),t&&V(k,{children:[V(Is,{children:V(Ds,{children:[V(Rs,{type:"button",active:"ask-ai"===Sn,onClick:()=>t("ask-ai"),children:"ja"===s.language?"AIに質問":"Ask AI"}),V(Rs,{type:"button",active:"search"===Sn,onClick:()=>t("search"),children:"ja"===s.language?"検索":"Search"}),zn&&V(Rs,{type:"button",active:"deep-research"===Sn||"rag-deep-research"===Sn,onClick:()=>t("deep-research"),children:(s.language,"Deep Research")})]})}),V(Os,{children:V(Ns,{children:V(Ts,{children:[V(Fs,{children:V(Ls,{ref:ge,value:R,onInput:e=>{const n=e.currentTarget;O(n.value),cn(n)},placeholder:En,disabled:"input"!==E||B||Z,onKeyDown:yn,rows:1})}),V(Ps,{children:V(Hs,{type:"button",onClick:vn,disabled:!Cn,"data-disabled":!Cn,title:jn,"aria-label":jn,children:B?V(Us,{}):V(Ue,{size:16,color:"white"})})})]})})})]})]})}const pl=De`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,gl=De`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,ml=De`
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;function bl({isOpen:e,onClose:n,currentMode:r,onModeSwitch:t,messages:o,isLoading:a,streamingContent:i,onSendMessage:s,onSendExampleQuestion:l,error:d,config:c,currentState:u,chatMode:f,onChatModeChange:h,sessionId:p,onFeedbackSubmit:g,onClearChat:m,showIntro:b,displayMode:v="modal",metadataFilters:y,onMetadataFiltersChange:x}){var w;const _=ue(null);if(de(()=>{if(!e)return;const r=e=>{"Escape"===e.key&&n()},t=e=>{"fullscreen"!==v&&_.current&&_.current.contains&&"function"==typeof _.current.contains&&!_.current.contains(e.target)&&n()};return document.addEventListener("keydown",r),document.addEventListener("mousedown",t),()=>{document.removeEventListener("keydown",r),document.removeEventListener("mousedown",t)}},[e,n]),!e)return null;const $=(null===(w=c.chatbotTitle)||void 0===w?void 0:w.trim())||"AskDona";return V(vl,{onClick:e=>{"fullscreen"!==v&&e.target===e.currentTarget&&n()},displayMode:v,children:V(yl,{ref:_,displayMode:v,children:[V(kl,{children:[V(xl,{children:$}),V(wl,{children:"fullscreen"!==v&&V(_l,{onClick:n,children:"×"})})]}),V($l,{children:"ask-ai"===r?V(At,{messages:o,isLoading:a,streamingContent:i,onSendMessage:s,onSendExampleQuestion:l,error:d,config:c,currentState:u,chatMode:f,onChatModeChange:h,sessionId:p,onFeedbackSubmit:g,showIntro:b,metadataFilters:y,onMetadataFiltersChange:x,onClearChat:m,currentMode:r,onModeSwitch:e=>t(e)}):"search"===r?V(lo,{config:c,currentMode:r,onModeSwitch:t},"search-view"):"deep-research"===r&&(c.enableDeepResearch||c.enableRagDeepResearch)||"rag-deep-research"===r&&c.enableRagDeepResearch?V(hl,{chatFlowId:c.chatflowId,sessionId:p,messages:o.map(e=>({role:e.role,content:e.content,createdAt:e.createdAt,id:e.id})),onModeSwitch:t,currentMode:r,onSendMessage:e=>s(e),baseUrl:window.location.origin,config:c}):null}),V(Sl,{children:[V(zl,{children:["Powered by ",V(Cl,{href:"https://askdona.com",target:"_blank",style:"color: inherit; text-decoration: none;",children:"AskDona"})]}),V(Ml,{children:"ja"===c.language?V(k,{children:[V("div",{children:"Boostモードは、より多角的な視点から多くの文書を分析して回答します。通常モードより回答生成までに時間がかかります。"}),V("div",{children:"RAGシステムは誤った情報を提供することがあります。重要な情報はご自身で確認してください。"})]}):V(k,{children:[V("div",{children:"Boost mode analyzes more documents from multiple perspectives. It takes longer than normal mode."}),V("div",{children:"RAG systems may provide incorrect information. Please verify important information yourself."})]})})]})]})})}De`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`,De`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,De`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;const vl=Oe("div")`
  position: fixed;
  inset: 0;
  background: ${e=>"fullscreen"===e.displayMode?"transparent":"rgba(0, 0, 0, 0.5)"};
  backdrop-filter: ${e=>"fullscreen"===e.displayMode?"none":"blur(4px)"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  padding: ${e=>"fullscreen"===e.displayMode?"0":"clamp(0.75rem, 2.5vw, 1.5rem)"};
  animation: ${pl} 0.2s ease-out;
`,yl=Oe("div")`
  background: var(--askdona-surface);
  border-radius: ${e=>"fullscreen"===e.displayMode?"0":"1rem"};
  width: ${e=>"fullscreen"===e.displayMode?"100vw":"min(72rem, calc(100vw - 2rem))"};
  max-width: ${e=>"fullscreen"===e.displayMode?"100vw":"min(72rem, calc(100vw - 2rem))"};
  height: ${e=>"fullscreen"===e.displayMode?"100vh":"min(90vh, calc(100vh - 2rem))"};
  max-height: ${e=>"fullscreen"===e.displayMode?"100vh":"min(1000px, calc(100vh - 2rem))"};
  box-shadow: ${e=>"fullscreen"===e.displayMode?"none":"0 25px 50px -12px rgba(0, 0, 0, 0.25)"};
  display: flex;
  flex-direction: column;
  animation: ${e=>"fullscreen"===e.displayMode?"none":gl} 0.3s ease-out;
  overflow: hidden;

  @media (max-width: 640px) {
    border-radius: ${e=>"fullscreen"===e.displayMode?"0":"0.75rem"};
    width: ${e=>"fullscreen"===e.displayMode?"100vw":"calc(100vw - 1.5rem)"};
    max-width: ${e=>"fullscreen"===e.displayMode?"100vw":"calc(100vw - 1.5rem)"};
    height: ${e=>"fullscreen"===e.displayMode?"100vh":"calc(100vh - 1.5rem)"};
    max-height: ${e=>"fullscreen"===e.displayMode?"100vh":"calc(100vh - 1.5rem)"};
  }
`,kl=Oe("header")`
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`,xl=Oe("h2")`
  margin: 0;
  color: var(--askdona-text);
  font-size: 1rem;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 0.01em;
`,wl=Oe("div")`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,_l=Oe("button")`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0.375rem;
  border: none;
  background: transparent;
  color: var(--askdona-text-secondary);
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &:hover {
    background: var(--askdona-background);
    color: var(--askdona-text);
  }
`,$l=Oe("main")`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Sl=Oe("footer")`
  padding: 0.75rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
`,zl=Oe("span")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
`,Cl=Oe("a")`
  font-size: 0.75rem;
  color: var(--askdona-primary);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,Ml=Oe("div")`
  font-size: 0.625rem;
  color: var(--askdona-text-secondary);
  line-height: 1.3;
  opacity: 0.8;
  text-align: right;
  flex: 1;
  max-width: 60%;
  
  > div {
    margin-bottom: 0.125rem;
  }
  
  > div:last-child {
    margin-bottom: 0;
  }
`;function Al({onClick:e,position:n}){return V(ql,{onClick:e,position:n,children:V("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:V("path",{d:"M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.9706 16.9706 21 12 21C10.4077 21 8.88275 20.5699 7.5389 19.7447L3 21L4.25553 16.4611C3.43012 15.1173 3 13.5923 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}const ql=Oe("button")`
  position: fixed;
  bottom: 1.25rem;
  ${e=>"bottom-right"===e.position?"right: 1.25rem;":"left: 1.25rem;"}
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  background: var(--askdona-chat-icon, var(--askdona-primary));
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  animation: ${ml} 0.5s ease-out;
  z-index: 999998;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;function jl(e){const[n,r]=le({isValid:!1,error:null,config:null});return de(()=>{const n=async()=>{try{const n=await async function(e){try{return await B(`/validate/${e}`,{method:"POST",body:JSON.stringify({origin:window.location.origin})})}catch(e){return{isValid:!1,error:e.message}}}(e);r({isValid:n.isValid,error:n.error?new Error(n.error):null,config:n.config||null})}catch(e){r({isValid:!1,error:e,config:null})}};e&&n()},[e]),n}const El="askdona_widget_",Il=864e5;function Dl(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e)}function Rl(e){const n=`${El}messages_${e}`;try{const e=localStorage.getItem(n);if(!e)return[];const r=JSON.parse(e);return Array.isArray(r)?r:r.messages||[]}catch(e){return[]}}function Ol(e){var n;const r=`${El}messages_${e}`;try{const e=localStorage.getItem(r);if(!e)return null;const t=JSON.parse(e);return!Array.isArray(t)&&t.sessionId&&(null===(n=t.messages)||void 0===n?void 0:n.length)>0?t.sessionId:null}catch(e){return null}}function Nl(e){[`${El}session_${e}`,`${El}messages_${e}`].forEach(e=>{try{localStorage.removeItem(e)}catch(e){}})}function Tl(e){const[n]=le(()=>{if(Rl(e).length>0){const n=Ol(e);if(n)return n}const n=function(e){const n=`${El}session_${e}`;try{const e=localStorage.getItem(n);if(e){const n=JSON.parse(e);if(n.expiresAt>Date.now()&&Dl(n.id))return n.id}}catch(e){}const r=Rl(e).length>0;if(r){const r=Ol(e);if(r&&Dl(r)){const e={id:r,createdAt:Date.now(),expiresAt:Date.now()+Il};try{localStorage.setItem(n,JSON.stringify(e))}catch(e){}return r}}try{localStorage.removeItem(n),r||localStorage.removeItem(`${El}messages_${e}`)}catch(e){}const t={id:H(),createdAt:Date.now(),expiresAt:Date.now()+Il};try{localStorage.setItem(n,JSON.stringify(t))}catch(e){}return t.id}(e);return n}),[r,t]=le(()=>Rl(e)),[o,a]=le(!1),[i,s]=le(""),[l,d]=le(null),[c,u]=le("idle"),f=ue(null),h=ue(null),p=ue(""),g=ue(null);de(()=>{if(r.length>0){const t=r[r.length-1];!function(e,n,r){const t=`${El}messages_${e}`;try{const e=localStorage.getItem(t),o=e?JSON.parse(e):{sessionId:null,messages:[]};r&&!o.sessionId&&(o.sessionId=r);const a=o.messages||[],i=a.findIndex(e=>e.id===n.id);-1!==i?a[i]=n:a.push(n),a.length>50&&a.splice(0,a.length-50),o.messages=a,localStorage.setItem(t,JSON.stringify(o))}catch(e){}}(e,t,n)}},[r,e,n]);const m=he(()=>{t([]),Nl(e)},[e]),b=he(async(o,i="standard",l=null,c=i,m)=>{try{const b={id:H(),role:"user",content:o,createdAt:(new Date).toISOString(),metadata:{mode:i}};t(e=>[...e,b]),a(!0),d(null),s(""),u("thinking"),p.current="",g.current=null;const v={id:H(),role:"assistant",content:"",createdAt:(new Date).toISOString(),metadata:{mode:i}};h.current=v,f.current=new AbortController,await async function({chatflowId:e,sessionId:n,message:r,messages:t,mode:o="standard",endpoint:a,userMessageId:i,assistantMessageId:s,metadataFilters:l,requestMessagesOverride:d,signal:c,onChunk:u}){var f;const h=e=>{let n="";const r=[],t=[];let o=e;for(;o.includes("\0");){const e=o.split("\0");o=e.pop()||"";for(const o of e)if(o)if(o.startsWith("__METADATA__:"))r.push(o.substring(13).replace(/\n$/,""));else if(o.startsWith("__SEARCH_QUERIES__:"))t.push(o.substring(19).replace(/\n$/,""));else{if(o.startsWith("__STATE__:")||o.startsWith("__SEARCH__:")||o.startsWith("__SUMMARY__:"))continue;n+=o}}return o&&(n+=o),{content:n,metadataChunks:r,searchQueryChunks:t}},p=(e,n)=>{if(e.includes("\0")){n.buffer+=e;const r=n.buffer.split("\0");n.buffer=r[r.length-1];for(let e=0;e<r.length-1;e++){const n=r[e];if(n)if(n.startsWith("__STATE__:"))u({type:"state",data:n.substring(10).replace(/\n$/,"")});else if(n.startsWith("__SEARCH__:"))u({type:"search",data:n.substring(11).replace(/\n$/,"")});else if(n.startsWith("__METADATA__:"))u({type:"metadata",data:n.substring(13).replace(/\n$/,"")});else if(n.startsWith("__SEARCH_QUERIES__:"))u({type:"search-queries",data:n.substring(19).replace(/\n$/,"")});else if(n.startsWith("__SUMMARY__:"))try{JSON.parse(n.substring(13))}catch(e){}else u({type:"content",data:n})}}else e.trim()&&u({type:"content",data:e})},g="example"===a?`${U}/chat-example/${e}`:`${U}/chat/${e}/${a||o}`,m=await fetch(g,{method:"POST",headers:{"Content-Type":"application/json","X-Widget-Version":"1.0.0"},body:JSON.stringify({userQuestion:r,sessionId:n,messages:(null!=d?d:t).map(e=>({role:e.role,content:e.content,createdAt:e.createdAt})),mode:o,boostMode:"boost"===o||void 0,userMessageId:i,assistantMessageId:s,metadataFilters:l}),signal:c}),b={};if(m.headers.forEach((e,n)=>{b[n]=e}),!m.ok){const e=await m.json().catch(()=>({message:"Request failed"}));throw new Error(e.message||`HTTP ${m.status}`)}if("example"===a&&"HIT"===m.headers.get("x-example-cache")){const e=await m.arrayBuffer(),n=h(new TextDecoder("utf-8").decode(new Uint8Array(e)));return n.content&&u({type:"content",data:n.content}),n.metadataChunks.forEach(e=>u({type:"metadata",data:e})),n.searchQueryChunks.forEach(e=>u({type:"search-queries",data:e})),void u({type:"state",data:"complete"})}if("example"===a){const e=await m.arrayBuffer(),n=h(new TextDecoder("utf-8").decode(new Uint8Array(e)));return n.content&&u({type:"content",data:n.content}),n.metadataChunks.forEach(e=>u({type:"metadata",data:e})),n.searchQueryChunks.forEach(e=>u({type:"search-queries",data:e})),void u({type:"state",data:"complete"})}const v=null===(f=m.body)||void 0===f?void 0:f.getReader();if(!v)throw new Error("No response body");const y=new TextDecoder,k={buffer:""};try{for(;;){const{done:e,value:n}=await v.read();if(e)break;p(y.decode(n,{stream:!0}),k)}k.buffer&&!k.buffer.startsWith("__")&&u({type:"content",data:k.buffer})}finally{v.releaseLock()}}({chatflowId:e,sessionId:n,message:o,messages:r,mode:i,userMessageId:b.id,assistantMessageId:v.id,metadataFilters:l,endpoint:c,requestMessagesOverride:m,signal:f.current.signal,onChunk:e=>{if("content"===e.type)p.current+=e.data,s(p.current);else if("metadata"===e.type)try{const n=JSON.parse(e.data);g.current={...g.current,docMetadata:n,mode:i}}catch(e){}else"state"===e.type&&u(e.data)}})}catch(e){"AbortError"===e.name||d(e)}finally{h.current&&p.current.trim()&&t(e=>[...e,{...h.current,content:p.current.trim(),metadata:{...h.current.metadata,...g.current}}]),a(!1),s(""),u("idle"),f.current=null,h.current=null,p.current="",g.current=null}},[e,r]),v=he((e,n="standard",r=null)=>{b(e,n,r,n)},[b]),y=he((n,r=null)=>{t([]),Nl(e),b(n,"boost",null,"example",[])},[e,b]),k=he(async(r,o,a)=>{try{t(e=>e.map(e=>e.id===r?{...e,metadata:{...e.metadata,feedback:{rating:o,content:a,submittedAt:(new Date).toISOString(),isSubmitted:!0}}}:e));const i={embedMessageId:r,embedSessionId:n,chatflowId:e,feedbackType:"combined",feedbackData:{rating:"THUMBS_UP"===o?"thumbs_up":"thumbs_down",content:a||null},metadata:{domain:window.location.hostname,url:window.location.href,userAgent:navigator.userAgent}},s=await fetch(`${U}/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!s.ok){const e=await s.text();throw new Error(`Failed to submit feedback: ${s.statusText} - ${e}`)}await s.json()}catch(e){throw t(e=>e.map(e=>e.id===r?{...e,metadata:{...e.metadata,feedback:void 0}}:e)),e}},[n,e]);return{messages:r,sendMessage:v,sendExampleQuestion:y,isLoading:o,streamingContent:i,error:l,currentState:c,sessionId:n,submitFeedback:k,clearChat:m}}function Fl(e,n){const r=parseInt(e.replace("#",""),16),t=Math.round(2.55*n),o=(r>>16)-t,a=(r>>8&255)-t,i=(255&r)-t;return"#"+(16777216+65536*(o<255?o<1?0:o:255)+256*(a<255?a<1?0:a:255)+(i<255?i<1?0:i:255)).toString(16).slice(1)}function Pl(e,n){const r=parseInt(e.replace("#",""),16),t=Math.round(2.55*n),o=(r>>16)+t,a=(r>>8&255)+t,i=(255&r)+t;return"#"+(16777216+65536*(o<255?o<1?0:o:255)+256*(a<255?a<1?0:a:255)+(i<255?i<1?0:i:255)).toString(16).slice(1)}"undefined"!=typeof window&&function(){try{const e=Object.keys(localStorage),n=Date.now();e.forEach(e=>{if(e.startsWith(`${El}session_`))try{const r=JSON.parse(localStorage.getItem(e)||"{}");if(r.expiresAt&&r.expiresAt<n){localStorage.removeItem(e);const n=e.replace(`${El}session_`,"");localStorage.removeItem(`${El}messages_${n}`)}}catch(n){localStorage.removeItem(e)}})}catch(e){}}();const Ll={colors:{primary:"#10316f",primaryDark:Fl("#10316f",10),primaryLight:Pl("#10316f",10),background:"#ffffff",surface:"#f8f9fa",text:"#353a5c",textSecondary:"#6b6f8a",border:"#e5e7eb",error:"#EF4444",success:"#10B981"},fonts:{base:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',mono:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1)"}},Hl={colors:{primary:"#10316f",primaryDark:Fl("#10316f",10),primaryLight:Pl("#10316f",10),background:"#0f172a",surface:"#111827",text:"#e5e7eb",textSecondary:"#9ca3af",border:"#1f2937",error:"#F87171",success:"#34D399"},fonts:{base:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',mono:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.3)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.4)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.5)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.6)"}};function Ul(e,n){let r=Ll;if("dark"===e)r=Hl;else if("auto"===e){r=window.matchMedia("(prefers-color-scheme: dark)").matches?Hl:Ll}const t=function(e){if(!e)return null;let n=e.trim();if(!n)return null;"#"===n[0]&&(n=n.slice(1));3===n.length&&(n=n.split("").map(e=>e+e).join(""));if(!/^([0-9a-f]{6})$/i.test(n))return null;return`#${n.toLowerCase()}`}(n)||r.colors.primary;r={...r,colors:{...r.colors,primary:t,primaryDark:Fl(t,10),primaryLight:Pl(t,10)}};const o=function(e){const n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?`${parseInt(n[1],16)}, ${parseInt(n[2],16)}, ${parseInt(n[3],16)}`:"0, 0, 0"}(r.colors.primary);return document.documentElement.style.setProperty("--askdona-primary-rgb",o),r}function Bl(e,n){for(var r in n)e[r]=n[r];return e}function Jl(e,n){for(var r in e)if("__source"!==r&&!(r in n))return!0;for(var t in n)if("__source"!==t&&e[t]!==n[t])return!0;return!1}function Zl(e,n){this.props=e,this.context=n}(Zl.prototype=new x).isPureReactComponent=!0,Zl.prototype.shouldComponentUpdate=function(e,n){return Jl(this.props,e)||Jl(this.state,n)};var Vl=r.v;r.v=function(e){e.type&&e.type.B&&e.ref&&(e.props.ref=e.ref,e.ref=null),Vl&&Vl(e)};var Ql="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var Wl=r._;r._=function(e,n,r,t){if(e.then)for(var o,a=n;a=a.m;)if((o=a.$)&&o.$)return null==n._&&(n._=r._,n.h=r.h),o.$(e,n);Wl(e,n,r,t)};var Gl=r.unmount;function Kl(e,n,r){return e&&(e.$&&e.$.H&&(e.$.H.m.forEach(function(e){"function"==typeof e.$&&e.$()}),e.$.H=null),null!=(e=Bl({},e)).$&&(e.$.j===r&&(e.$.j=n),e.$._=!0,e.$=null),e.h=e.h&&e.h.map(function(e){return Kl(e,n,r)})),e}function Xl(e,n,r){return e&&r&&(e.S=null,e.h=e.h&&e.h.map(function(e){return Xl(e,n,r)}),e.$&&e.$.j===n&&(e._&&r.appendChild(e._),e.$._=!0,e.$.j=r)),e}function Yl(){this.M=0,this.o=null,this.v=null}function ed(e){var n=e.m.$;return n&&n.ae&&n.ae(e)}function nd(){this.i=null,this.l=null}r.unmount=function(e){var n=e.$;n&&n.ie&&n.ie(),n&&32&e.M&&(e.type=null),Gl&&Gl(e)},(Yl.prototype=new x).$=function(e,n){var r=n.$,t=this;null==t.o&&(t.o=[]),t.o.push(r);var o=ed(t.S),a=!1,i=function(){a||(a=!0,r.ie=null,o?o(s):s())};r.ie=i;var s=function(){if(! --t.M){if(t.state.ae){var e=t.state.ae;t.S.h[0]=Xl(e,e.$.j,e.$.se)}var n;for(t.setState({ae:t.v=null});n=t.o.pop();)n.forceUpdate()}};t.M++||32&n.M||t.setState({ae:t.v=t.S.h[0]}),e.then(i,i)},Yl.prototype.componentWillUnmount=function(){this.o=[]},Yl.prototype.render=function(e,n){if(this.v){if(this.S.h){var r=document.createElement("div"),t=this.S.h[0].$;this.S.h[0]=Kl(this.v,r,t.se=t.j)}this.v=null}var o=n.ae&&v(k,null,e.fallback);return o&&(o.M&=-33),[v(k,null,n.ae?null:e.children),o]};var rd=function(e,n,r){if(++r[1]===r[0]&&e.l.delete(n),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};(nd.prototype=new x).ae=function(e){var n=this,r=ed(n.S),t=n.l.get(e);return t[0]++,function(o){var a=function(){n.props.revealOrder?(t.push(o),rd(n,e,t)):o()};r?r(a):a()}},nd.prototype.render=function(e){this.i=null,this.l=new Map;var n=M(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&n.reverse();for(var r=n.length;r--;)this.l.set(n[r],this.i=[1,0,this.i]);return e.children},nd.prototype.componentDidUpdate=nd.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(n,r){rd(e,r,n)})};var td="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,od=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ad=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,id=/[A-Z0-9]/g,sd="undefined"!=typeof document,ld=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};x.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(x.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})});var dd=r.event;function cd(){}function ud(){return this.cancelBubble}function fd(){return this.defaultPrevented}r.event=function(e){return dd&&(e=dd(e)),e.persist=cd,e.isPropagationStopped=ud,e.isDefaultPrevented=fd,e.nativeEvent=e};var hd={enumerable:!1,configurable:!0,get:function(){return this.class}},pd=r.vnode;r.vnode=function(e){"string"==typeof e.type&&function(e){var n=e.props,r=e.type,t={},o=-1===r.indexOf("-");for(var a in n){var i=n[a];if(!("value"===a&&"defaultValue"in n&&null==i||sd&&"children"===a&&"noscript"===r||"class"===a||"className"===a)){var s=a.toLowerCase();"defaultValue"===a&&"value"in n&&null==n.value?a="value":"download"===a&&!0===i?i="":"translate"===s&&"no"===i?i=!1:"o"===s[0]&&"n"===s[1]?"ondoubleclick"===s?a="ondblclick":"onchange"!==s||"input"!==r&&"textarea"!==r||ld(n.type)?"onfocus"===s?a="onfocusin":"onblur"===s?a="onfocusout":ad.test(a)&&(a=s):s=a="oninput":o&&od.test(a)?a=a.replace(id,"-$&").toLowerCase():null===i&&(i=void 0),"oninput"===s&&t[a=s]&&(a="oninputCapture"),t[a]=i}}"select"==r&&t.multiple&&Array.isArray(t.value)&&(t.value=M(n.children).forEach(function(e){e.props.selected=-1!=t.value.indexOf(e.props.value)})),"select"==r&&null!=t.defaultValue&&(t.value=M(n.children).forEach(function(e){e.props.selected=t.multiple?-1!=t.defaultValue.indexOf(e.props.value):t.defaultValue==e.props.value})),n.class&&!n.className?(t.class=n.class,Object.defineProperty(t,"className",hd)):(n.className&&!n.class||n.class&&n.className)&&(t.class=t.className=n.className),e.props=t}(e),e.$$typeof=td,pd&&pd(e)};var gd=r.q;r.q=function(e){gd&&gd(e),e.$};var md=r.diffed;r.diffed=function(e){md&&md(e);var n=e.props,r=e._;null!=r&&"textarea"===e.type&&"value"in n&&n.value!==r.value&&(r.value=null==n.value?"":n.value)};const bd=e=>Math.min(255,Math.max(0,e)),vd=e=>{if(!e)return null;let n=e.trim();return n?("#"===n[0]&&(n=n.slice(1)),3===n.length&&(n=n.split("").map(e=>e+e).join("")),/^([0-9a-f]{6})$/i.test(n)?`#${n.toLowerCase()}`:null):null},yd=(e,n)=>{const r=vd(e);if(!r)return e;const t=parseInt(r.slice(1),16),o=Math.round(2.55*n);return`#${((1<<24)+(bd((t>>16)+o)<<16)+(bd((t>>8&255)+o)<<8)+bd((255&t)+o)).toString(16).slice(1)}`},kd=e=>{const n=vd(e);if(!n)return null;const r=parseInt(n.slice(1),16);return`${r>>16&255}, ${r>>8&255}, ${255&r}`};Re(v);const xd=function(e){function n(n){var r=Bl({},n);return delete r.ref,e(r,n.ref||null)}return n.$$typeof=Ql,n.render=n,n.prototype.isReactComponent=n.B=!0,n.displayName="ForwardRef("+(e.displayName||e.name)+")",n}(({config:e},n)=>{const[r,t]=le({isOpen:"fullscreen"===e.displayMode,currentMode:"ask-ai",messages:[],isLoading:!1,streamingContent:"",error:null,chatMode:"standard",showIntro:!0,metadataFilters:null}),{error:o,config:a}=jl(e.chatflowId),[i,s]=le(null);de(()=>{J(e.chatflowId,e.language).then(e=>{e&&e.embedConfig&&s(e.embedConfig)}).catch(()=>{s(null)})},[e.chatflowId,e.language]);const l="boolean"!=typeof e.enableDeepResearch||e.enableDeepResearch,d="boolean"==typeof e.enableRagDeepResearch?e.enableRagDeepResearch:l,c={...e,enableDeepResearch:l,enableRagDeepResearch:d};if(i){if(i.introTitle&&(c.introTitle=i.introTitle),i.introMessage&&(c.introMessage=i.introMessage),i.exampleQuestions&&(c.exampleQuestions=i.exampleQuestions),i.appearanceSettings){const e=i.appearanceSettings.primaryColor||void 0,n=i.appearanceSettings.theme||void 0,r=i.appearanceSettings.position||void 0,t=i.appearanceSettings.displayMode||void 0,o=i.appearanceSettings.backgroundColor||void 0,a=i.appearanceSettings.borderColor||void 0,s=i.appearanceSettings.chatIconColor||void 0,l=i.appearanceSettings.tabAccentColor||void 0,d=i.appearanceSettings.modeActiveColor||void 0;c.primaryColor=c.primaryColor||e,c.theme=c.theme||n,c.position=c.position||r,c.displayMode=c.displayMode||t,c.backgroundColor=c.backgroundColor||o,c.borderColor=c.borderColor||a,c.chatIconColor=c.chatIconColor||s,c.tabAccentColor=c.tabAccentColor||l,c.modeActiveColor=c.modeActiveColor||d}i.featureFlags&&("boolean"==typeof i.featureFlags.enableBoostMode&&(c.defaultBoostMode=!!i.featureFlags.enableBoostMode),"boolean"==typeof i.featureFlags.allowBoostModeToggle&&(c.allowBoostModeToggle=!!i.featureFlags.allowBoostModeToggle),"boolean"==typeof i.featureFlags.enableRagDeepResearch&&(c.enableRagDeepResearch=!!i.featureFlags.enableRagDeepResearch),"boolean"==typeof i.featureFlags.enableDeepResearch&&(c.enableDeepResearch=!!i.featureFlags.enableDeepResearch))}else a&&(c.introTitle=a.introTitle,c.introMessage=a.introMessage,c.exampleQuestions=a.exampleQuestions,c.theme=a.theme,c.position=a.position,c.primaryColor=a.primaryColor,c.defaultBoostMode=a.defaultBoostMode,c.allowBoostModeToggle=a.allowBoostModeToggle,c.displayMode=e.displayMode);c.enableDeepResearch&&(c.enableRagDeepResearch=!0);const u=Ul(c.theme||"light",c.primaryColor),f=!!c.debug,h=c.displayMode||"modal",p=r.isOpen,g=!p&&"fullscreen"!==h;de(()=>{},[f,h,p,g]),de(()=>{if("undefined"==typeof document)return;const e=document.querySelector("askdona-widget");e&&("fullscreen"!==h?"function"==typeof e.toggleAttribute?e.toggleAttribute("data-open",p):p?e.setAttribute("data-open",""):e.removeAttribute("data-open"):e.removeAttribute("data-open"))},[p,h,f]);const{messages:m,sendMessage:b,sendExampleQuestion:v,isLoading:y,streamingContent:k,error:x,currentState:w,sessionId:_,submitFeedback:$,clearChat:S}=Tl(e.chatflowId);de(()=>{t(e=>({...e,messages:m,isLoading:y,streamingContent:k,error:o||x,showIntro:0===m.length&&e.showIntro}))},[m,y,k,o,x]),de(()=>{if(a){const e=a.defaultBoostMode?"boost":"standard";t(n=>n.chatMode===e?n:{...n,chatMode:e})}},[a]),function(e,n,r){X=6,ce(function(){if("function"==typeof e){var r=e(n());return function(){e(null),r&&"function"==typeof r&&r()}}if(e)return e.current=n(),function(){return e.current=null}},null==r?r:r.concat(e))}(n,()=>({open:()=>{t(e=>({...e,isOpen:!0}))},close:()=>{t(e=>({...e,isOpen:!1}))},sendMessage:e=>{t(e=>({...e,isOpen:!0})),b(e)}}),[b]);const z=ue(null);if(de(()=>{if(!z.current)return;const e=z.current;e.style.setProperty("--askdona-primary",u.colors.primary),e.style.setProperty("--askdona-primary-dark",u.colors.primaryDark),e.style.setProperty("--askdona-primary-light",u.colors.primaryLight);const n=kd(u.colors.primary);n?e.style.setProperty("--askdona-primary-rgb",n):e.style.removeProperty("--askdona-primary-rgb"),e.style.setProperty("--askdona-background",u.colors.background),e.style.setProperty("--askdona-surface",u.colors.surface),e.style.setProperty("--askdona-text",u.colors.text),e.style.setProperty("--askdona-text-secondary",u.colors.textSecondary),e.style.setProperty("--askdona-border",u.colors.border),e.style.setProperty("--askdona-error",u.colors.error),e.style.setProperty("--askdona-success",u.colors.success);const r=kd(u.colors.error);r?e.style.setProperty("--askdona-error-rgb",r):e.style.removeProperty("--askdona-error-rgb");const t=kd(u.colors.success);if(t?e.style.setProperty("--askdona-success-rgb",t):e.style.removeProperty("--askdona-success-rgb"),e.style.setProperty("--askdona-font-base",u.fonts.base),e.style.setProperty("--askdona-font-mono",u.fonts.mono),e.style.setProperty("--askdona-bg-secondary",u.colors.surface),e.style.setProperty("--askdona-bg-hover",u.colors.primaryLight+"20"),e.style.setProperty("--askdona-surface-color",u.colors.background),e.style.setProperty("--askdona-border-color",u.colors.border),c.backgroundColor){const n=c.backgroundColor;e.style.setProperty("--askdona-background",n),e.style.setProperty("--askdona-surface",yd(n,-4)),e.style.setProperty("--askdona-bg-secondary",yd(n,-2)),e.style.setProperty("--askdona-surface-color",n)}c.borderColor&&(e.style.setProperty("--askdona-border",c.borderColor),e.style.setProperty("--askdona-border-color",c.borderColor));const o=c.chatIconColor||u.colors.primary;e.style.setProperty("--askdona-chat-icon",o);const a=c.tabAccentColor||u.colors.primary;e.style.setProperty("--askdona-tab-accent",a);const i=kd(a);i?e.style.setProperty("--askdona-tab-accent-rgb",i):e.style.removeProperty("--askdona-tab-accent-rgb");const s=c.modeActiveColor||u.colors.primary;e.style.setProperty("--askdona-mode-active",s),e.style.setProperty("--askdona-mode-active-hover",yd(s,-12))},[u,c.backgroundColor,c.borderColor,c.chatIconColor,c.tabAccentColor,c.modeActiveColor]),o)return null;return V("div",{ref:z,style:{fontFamily:"var(--askdona-font-base)",color:"var(--askdona-text)"},children:[g&&V(Al,{onClick:()=>{t(e=>({...e,isOpen:!0}))},position:c.position||"bottom-right"}),(p||"fullscreen"===h)&&V(bl,{isOpen:p||"fullscreen"===h,onClose:()=>{"fullscreen"!==h&&t(e=>({...e,isOpen:!1}))},currentMode:r.currentMode,onModeSwitch:e=>{t(n=>({...n,currentMode:e}))},messages:r.messages,isLoading:r.isLoading,streamingContent:r.streamingContent,onSendMessage:(e,n,o)=>{const a=n||r.chatMode;b(e,a,o||r.metadataFilters),t(e=>({...e,showIntro:!1}))},onSendExampleQuestion:(e,n)=>{v(e,n||r.metadataFilters),t(e=>({...e,showIntro:!1}))},error:r.error,config:c,currentState:w,chatMode:r.chatMode,onChatModeChange:e=>{t(n=>({...n,chatMode:e}))},sessionId:_,onFeedbackSubmit:$,onClearChat:()=>{S(),t(e=>({...e,showIntro:!0}))},showIntro:r.showIntro,displayMode:h,metadataFilters:r.metadataFilters,onMetadataFiltersChange:e=>{t(n=>({...n,metadataFilters:e}))}})]})});xd.displayName="Widget";const wd=["chatflow-id","theme","position","primary-color","background-color","border-color","chat-icon-color","tab-accent-color","mode-active-color","language","chatbot-title","display-mode","custom-css","debug","instrument-serif-regular","instrument-serif-600","data-open"];class _d extends HTMLElement{constructor(){super(...arguments),this.widgetRef={current:null},this.initialised=!1,this.gooberReady=!1}static get observedAttributes(){return wd}connectedCallback(){if(this.initialised)return;this.initialised=!0,this.shadow=this.attachShadow({mode:"open"});const e=document.createElement("style");e.textContent="\n  /* Ensure font available within shadow */\n  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block');\n  :host {\n    all: initial;\n    position: fixed;\n    inset: auto;\n    z-index: 999999; /* Keep on top of most sites */\n  }\n\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n\n  /* Scoped scrollbar styling */\n  *::-webkit-scrollbar { width: 6px; height: 6px; }\n  *::-webkit-scrollbar-track { background: transparent; }\n  *::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.2); border-radius: 3px; }\n  *::-webkit-scrollbar-thumb:hover { background: rgba(0, 0, 0, 0.3); }\n\n  @media (prefers-reduced-motion: reduce) {\n    * { animation: none !important; transition: none !important; }\n  }\n",this.shadow.appendChild(e);const n="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",r=Array.from(this.shadow.querySelectorAll("link")).some(e=>e.getAttribute("href")===n);if(!r){const e=document.createElement("link");e.rel="stylesheet",e.href=n,this.shadow.appendChild(e)}const t=this.getAttribute("instrument-serif-regular"),o=this.getAttribute("instrument-serif-600");if(t||o){if(t){const e=document.createElement("link");e.rel="preload",e.as="font",e.href=t,e.type="font/woff2",e.crossOrigin="anonymous",this.shadow.appendChild(e)}if(o){const e=document.createElement("link");e.rel="preload",e.as="font",e.href=o,e.type="font/woff2",e.crossOrigin="anonymous",this.shadow.appendChild(e)}const e=document.createElement("style");e.textContent=`\n        ${t?`@font-face { font-family: 'Instrument Serif'; font-style: normal; font-weight: 400; font-display: swap; src: url('${t}') format('woff2'); }`:""}\n        ${o?`@font-face { font-family: 'Instrument Serif'; font-style: normal; font-weight: 600; font-display: swap; src: url('${o}') format('woff2'); }`:""}\n      `,this.shadow.appendChild(e)}else{const e=document.createElement("link");e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",this.shadow.appendChild(e);const n="askdona-font-global";if(!document.getElementById(n)){const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",document.head.appendChild(e);const r=document.createElement("link");r.rel="preconnect",r.href="https://fonts.gstatic.com",r.crossOrigin="anonymous",document.head.appendChild(r);const t=document.createElement("link");t.id=n,t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",document.head.appendChild(t)}}const a="askdona-font-global";if(!document.getElementById(a)){const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",document.head.appendChild(e);const n=document.createElement("link");n.rel="preconnect",n.href="https://fonts.gstatic.com",n.crossOrigin="anonymous",document.head.appendChild(n);const r=document.createElement("link");r.id=a,r.rel="stylesheet",r.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",document.head.appendChild(r)}this.gooberStyleEl=document.createElement("style"),this.gooberStyleEl.id="_goober",this.gooberStyleEl.appendChild(document.createTextNode(" ")),this.shadow.appendChild(this.gooberStyleEl),window._goober=this.gooberStyleEl;try{Re(v),this.gooberReady=!0}catch(e){this.gooberReady=!1}this.mountPoint=document.createElement("div"),this.shadow.appendChild(this.mountPoint),this.applyPosition(),this.resizeHandler=()=>this.applyPosition(),window.addEventListener("resize",this.resizeHandler);const i=this.getAttribute("custom-css");if(i){const e=document.createElement("link");e.rel="stylesheet",e.href=i,this.shadow.appendChild(e)}if(!window.katex){const e="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js",n=Array.from(document.querySelectorAll("script")).some(n=>n.getAttribute("src")===e);if(!n){const n=document.createElement("script");n.src=e,n.async=!0,document.head.appendChild(n)}}try{this.gooberReady&&this.renderWidget()}catch(e){}}disconnectedCallback(){if(this.mountPoint&&P(null,this.mountPoint),window._goober===this.gooberStyleEl)try{delete window._goober}catch(e){window._goober=null}this.resizeHandler&&window.removeEventListener("resize",this.resizeHandler)}attributeChangedCallback(e,n,r){try{this.applyPosition(),this.initialised&&this.gooberReady&&this.renderWidget()}catch(e){}}open(){var e;null===(e=this.widgetRef.current)||void 0===e||e.open()}close(){var e;null===(e=this.widgetRef.current)||void 0===e||e.close()}sendMessage(e){var n;null===(n=this.widgetRef.current)||void 0===n||n.sendMessage(e)}applyPosition(){const e=this.getAttribute("position")||"bottom-right",n=this.getAttribute("display-mode")||"modal",r=this.hasAttribute("data-open"),t=window.innerWidth||document.documentElement.clientWidth||0,o=Math.max(12,Math.min(20,Math.round(.03*t)));return"fullscreen"===n?(this.style.position="fixed",this.style.inset="0",this.style.top="0",this.style.left="0",this.style.right="0",this.style.bottom="0",this.style.width="100%",void(this.style.height="100%")):(this.style.position="fixed","modal"===n&&r?(this.style.inset="0",this.style.top="0",this.style.left="0",this.style.right="0",this.style.bottom="0",this.style.width="100%",void(this.style.height="100%")):(this.style.inset="auto",this.style.top="",this.style.width="",this.style.height="",this.style.bottom=`${o}px`,this.style.left="bottom-left"===e?`${o}px`:"",void(this.style.right="bottom-right"===e?`${o}px`:"")))}getConfig(){const e=this.getAttribute("chatflow-id")||"";if(!e)return null;return{chatflowId:e,theme:this.getAttribute("theme")||void 0,position:this.getAttribute("position")||void 0,primaryColor:this.getAttribute("primary-color")||void 0,backgroundColor:this.getAttribute("background-color")||void 0,borderColor:this.getAttribute("border-color")||void 0,chatIconColor:this.getAttribute("chat-icon-color")||void 0,tabAccentColor:this.getAttribute("tab-accent-color")||void 0,modeActiveColor:this.getAttribute("mode-active-color")||void 0,language:this.getAttribute("language")||void 0,chatbotTitle:this.getAttribute("chatbot-title")||void 0,displayMode:this.getAttribute("display-mode")||void 0,debug:this.hasAttribute("debug")?"true"===this.getAttribute("debug"):void 0}}renderWidget(){const e=this.getConfig();if(e)try{P(V(xd,{ref:this.widgetRef,config:e}),this.mountPoint)}catch(e){throw e}}}function $d(){customElements.get("askdona-widget")||customElements.define("askdona-widget",_d)}let Sd={current:null};async function zd(e){var n,r,t,o;try{const a=function(e){return e.chatflowId?e.theme&&!["light","dark","auto"].includes(e.theme)?{isValid:!1,error:'Invalid theme. Must be "light", "dark", or "auto"'}:e.position&&!["bottom-right","bottom-left"].includes(e.position)?{isValid:!1,error:'Invalid position. Must be "bottom-right" or "bottom-left"'}:e.language&&!["ja","en"].includes(e.language)?{isValid:!1,error:'Invalid language. Must be "ja" or "en"'}:{isValid:!0}:{isValid:!1,error:"chatflowId is required"}}(e);if(!a.isValid)throw new Error(a.error);!function(){if(!document.querySelector('meta[name="askdona-csp"]')){const e=document.createElement("meta");e.name="askdona-csp",e.content=["default-src 'self'","script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net","style-src 'self' 'unsafe-inline'","img-src 'self' data: https:","connect-src 'self' https://api.askdona.com wss://api.askdona.com","font-src 'self' data:","frame-ancestors 'none'"].join("; "),document.head.appendChild(e)}}();let i=null;try{i=await J(e.chatflowId,e.language)}catch(e){}let s={...e};if(null==i?void 0:i.embedConfig){const e=i.embedConfig.introTitle&&i.embedConfig.introMessage?{title:i.embedConfig.introTitle,message:i.embedConfig.introMessage}:null;e&&(s.introTitle=e.title,s.introMessage=e.message),i.embedConfig.exampleQuestions&&(s.exampleQuestions=i.embedConfig.exampleQuestions),i.embedConfig.featureFlags&&(s.defaultBoostMode=i.embedConfig.featureFlags.enableBoostMode,s.allowBoostModeToggle=i.embedConfig.featureFlags.allowBoostModeToggle,s.enableRagDeepResearch=i.embedConfig.featureFlags.enableRagDeepResearch),i.embedConfig.appearanceSettings&&(!s.primaryColor&&i.embedConfig.appearanceSettings.primaryColor&&(s.primaryColor=i.embedConfig.appearanceSettings.primaryColor),!s.theme&&i.embedConfig.appearanceSettings.theme&&(s.theme=i.embedConfig.appearanceSettings.theme),!s.position&&i.embedConfig.appearanceSettings.position&&(s.position=i.embedConfig.appearanceSettings.position),!s.displayMode&&i.embedConfig.appearanceSettings.displayMode&&(s.displayMode=i.embedConfig.appearanceSettings.displayMode),!s.backgroundColor&&i.embedConfig.appearanceSettings.backgroundColor&&(s.backgroundColor=i.embedConfig.appearanceSettings.backgroundColor),!s.borderColor&&i.embedConfig.appearanceSettings.borderColor&&(s.borderColor=i.embedConfig.appearanceSettings.borderColor),!s.chatIconColor&&i.embedConfig.appearanceSettings.chatIconColor&&(s.chatIconColor=i.embedConfig.appearanceSettings.chatIconColor),!s.tabAccentColor&&i.embedConfig.appearanceSettings.tabAccentColor&&(s.tabAccentColor=i.embedConfig.appearanceSettings.tabAccentColor),!s.modeActiveColor&&i.embedConfig.appearanceSettings.modeActiveColor&&(s.modeActiveColor=i.embedConfig.appearanceSettings.modeActiveColor))}$d(),s.displayMode||(s.displayMode="modal");let l=document.querySelector("askdona-widget");if(l)l.setAttribute("chatflow-id",s.chatflowId),s.theme&&l.setAttribute("theme",s.theme),s.position&&l.setAttribute("position",s.position),s.primaryColor&&l.setAttribute("primary-color",s.primaryColor),s.language&&l.setAttribute("language",s.language),s.backgroundColor?l.setAttribute("background-color",s.backgroundColor):l.removeAttribute("background-color"),s.borderColor?l.setAttribute("border-color",s.borderColor):l.removeAttribute("border-color"),s.chatIconColor?l.setAttribute("chat-icon-color",s.chatIconColor):l.removeAttribute("chat-icon-color"),s.tabAccentColor?l.setAttribute("tab-accent-color",s.tabAccentColor):l.removeAttribute("tab-accent-color"),s.modeActiveColor?l.setAttribute("mode-active-color",s.modeActiveColor):l.removeAttribute("mode-active-color"),l.setAttribute("display-mode",s.displayMode||"modal"),s.customCSS&&l.setAttribute("custom-css",s.customCSS),s.chatbotTitle?l.setAttribute("chatbot-title",s.chatbotTitle):l.removeAttribute("chatbot-title"),(null===(t=s.instrumentSerif)||void 0===t?void 0:t.w400)&&l.setAttribute("instrument-serif-regular",s.instrumentSerif.w400),(null===(o=s.instrumentSerif)||void 0===o?void 0:o.w600)&&l.setAttribute("instrument-serif-600",s.instrumentSerif.w600),s.debug&&l.setAttribute("debug",String(!!s.debug));else{l=document.createElement("askdona-widget"),l.setAttribute("chatflow-id",s.chatflowId),s.theme&&l.setAttribute("theme",s.theme),s.position&&l.setAttribute("position",s.position),s.primaryColor&&l.setAttribute("primary-color",s.primaryColor),s.language&&l.setAttribute("language",s.language),s.backgroundColor&&l.setAttribute("background-color",s.backgroundColor),s.borderColor&&l.setAttribute("border-color",s.borderColor),s.chatIconColor&&l.setAttribute("chat-icon-color",s.chatIconColor),s.tabAccentColor&&l.setAttribute("tab-accent-color",s.tabAccentColor),s.modeActiveColor&&l.setAttribute("mode-active-color",s.modeActiveColor),l.setAttribute("display-mode",s.displayMode||"modal"),s.customCSS&&l.setAttribute("custom-css",s.customCSS),s.chatbotTitle&&l.setAttribute("chatbot-title",s.chatbotTitle),(null===(n=s.instrumentSerif)||void 0===n?void 0:n.w400)&&l.setAttribute("instrument-serif-regular",s.instrumentSerif.w400),(null===(r=s.instrumentSerif)||void 0===r?void 0:r.w600)&&l.setAttribute("instrument-serif-600",s.instrumentSerif.w600),s.debug&&l.setAttribute("debug",String(!!s.debug));(e=>{const n=document.body||document.documentElement;n?n.appendChild(e):window.addEventListener("DOMContentLoaded",()=>{const n=document.body||document.documentElement;!e.isConnected&&n&&n.appendChild(e)},{once:!0})})(l)}s.onReady&&setTimeout(()=>{s.onReady&&s.onReady()},0),s.debug}catch(n){e.onError&&e.onError(n)}}function Cd(){const e=document.querySelector("askdona-widget");e&&e.parentNode&&e.parentNode.removeChild(e),Sd={current:null}}function Md(){const e=document.querySelector("askdona-widget");return e&&"function"==typeof e.open?e.open():Sd.current?Sd.current.open():void 0}function Ad(){const e=document.querySelector("askdona-widget");return e&&"function"==typeof e.close?e.close():Sd.current?Sd.current.close():void 0}function qd(e){const n=document.querySelector("askdona-widget");return n&&"function"==typeof n.sendMessage?n.sendMessage(e):Sd.current?Sd.current.sendMessage(e):void 0}if("undefined"!=typeof window){$d();const e=document.currentScript;e&&e.dataset.chatflowId&&window.addEventListener("DOMContentLoaded",async()=>{const n=e.dataset.chatflowId;if(n)try{await zd({chatflowId:n,theme:e.dataset.theme,position:e.dataset.position,primaryColor:e.dataset.primaryColor,language:e.dataset.language,displayMode:e.dataset.displayMode})}catch(e){}})}return window.AskDona={init:zd,destroy:Cd,open:Md,close:Ad,sendMessage:qd},e.close=Ad,e.destroy=Cd,e.init=zd,e.open=Md,e.sendMessage=qd,e}({});
