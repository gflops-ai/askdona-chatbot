var AskDona=function(e){"use strict";var r,n,t,o,a,i,s,l,d,c,u,h={},p=[],m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,g=Array.isArray;function f(e,r){for(var n in r)e[n]=r[n];return e}function b(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function v(e,n,t){var o,a,i,s={};for(i in n)"key"==i?o=n[i]:"ref"==i?a=n[i]:s[i]=n[i];if(arguments.length>2&&(s.children=arguments.length>3?r.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===s[i]&&(s[i]=e.defaultProps[i]);return y(e,s,o,a,null)}function y(e,r,o,a,i){var s={type:e,props:r,key:o,ref:a,h:null,m:null,v:0,S:null,$:null,constructor:void 0,C:null==i?++t:i,M:-1,j:0};return null==i&&null!=n.vnode&&n.vnode(s),s}function k(e){return e.children}function x(e,r){this.props=e,this.context=r}function w(e,r){if(null==r)return e.m?w(e.m,e.M+1):null;for(var n;r<e.h.length;r++)if(null!=(n=e.h[r])&&null!=n.S)return n.S;return"function"==typeof e.type?w(e):null}function S(e){var r,n;if(null!=(e=e.m)&&null!=e.$){for(e.S=e.$.base=null,r=0;r<e.h.length;r++)if(null!=(n=e.h[r])&&null!=n.S){e.S=e.$.base=n.S;break}return S(e)}}function z(e){(!e._&&(e._=!0)&&o.push(e)&&!$.I++||a!=n.debounceRendering)&&((a=n.debounceRendering)||i)($)}function $(){for(var e,r,t,a,i,l,d,c=1;o.length;)o.length>c&&o.sort(s),e=o.shift(),c=o.length,e._&&(t=void 0,i=(a=(r=e).C).S,l=[],d=[],r.A&&((t=f({},a)).C=a.C+1,n.vnode&&n.vnode(t),T(r.A,t,a,r.D,r.A.namespaceURI,32&a.j?[i]:null,l,null==i?w(a):i,!!(32&a.j),d),t.C=a.C,t.m.h[t.M]=t,R(l,t,d),t.S!=i&&S(t)));$.I=0}function C(e,r,n,t,o,a,i,s,l,d,c){var u,m,f,b,v,x,S=t&&t.h||p,z=r.length;for(l=function(e,r,n,t,o){var a,i,s,l,d,c=n.length,u=c,h=0;for(e.h=new Array(o),a=0;a<o;a++)null!=(i=r[a])&&"boolean"!=typeof i&&"function"!=typeof i?(l=a+h,(i=e.h[a]="string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?y(null,i,null,null,null):g(i)?y(k,{children:i},null,null,null):null==i.constructor&&i.v>0?y(i.type,i.props,i.key,i.ref?i.ref:null,i.C):i).m=e,i.v=e.v+1,s=null,-1!=(d=i.M=_(i,n,l,u))&&(u--,(s=n[d])&&(s.j|=2)),null==s||null==s.C?(-1==d&&(o>c?h--:o<c&&h++),"function"!=typeof i.type&&(i.j|=4)):d!=l&&(d==l-1?h--:d==l+1?h++:(d>l?h--:h++,i.j|=4))):e.h[a]=null;if(u)for(a=0;a<c;a++)null!=(s=n[a])&&!(2&s.j)&&(s.S==t&&(t=w(s)),N(s,s));return t}(n,r,S,l,z),u=0;u<z;u++)null!=(f=n.h[u])&&(m=-1==f.M?h:S[f.M]||h,f.M=u,x=T(e,f,m,o,a,i,s,l,d,c),b=f.S,f.ref&&m.ref!=f.ref&&(m.ref&&O(m.ref,null,f),c.push(f.ref,f.$||b,f)),null==v&&null!=b&&(v=b),4&f.j||m.h===f.h?l=M(f,l,e):"function"==typeof f.type&&void 0!==x?l=x:b&&(l=b.nextSibling),f.j&=-7);return n.S=v,l}function M(e,r,n){var t,o;if("function"==typeof e.type){for(t=e.h,o=0;t&&o<t.length;o++)t[o]&&(t[o].m=e,r=M(t[o],r,n));return r}e.S!=r&&(r&&e.type&&!n.contains(r)&&(r=w(e)),n.insertBefore(e.S,r||null),r=e.S);do{r=r&&r.nextSibling}while(null!=r&&8==r.nodeType);return r}function j(e,r){return r=r||[],null==e||"boolean"==typeof e||(g(e)?e.some(function(e){j(e,r)}):r.push(e)),r}function _(e,r,n,t){var o,a,i=e.key,s=e.type,l=r[n];if(null===l&&null==e.key||l&&i==l.key&&s==l.type&&!(2&l.j))return n;if(t>(null==l||2&l.j?0:1))for(o=n-1,a=n+1;o>=0||a<r.length;){if(o>=0){if((l=r[o])&&!(2&l.j)&&i==l.key&&s==l.type)return o;o--}if(a<r.length){if((l=r[a])&&!(2&l.j)&&i==l.key&&s==l.type)return a;a++}}return-1}function I(e,r,n){"-"==r[0]?e.setProperty(r,null==n?"":n):e[r]=null==n?"":"number"!=typeof n||m.test(r)?n:n+"px"}function A(e,r,n,t,o){var a,i;e:if("style"==r)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof t&&(e.style.cssText=t=""),t)for(r in t)n&&r in n||I(e.style,r,"");if(n)for(r in n)t&&n[r]==t[r]||I(e.style,r,n[r])}else if("o"==r[0]&&"n"==r[1])a=r!=(r=r.replace(l,"$1")),i=r.toLowerCase(),r=i in e||"onFocusOut"==r||"onFocusIn"==r?i.slice(2):r.slice(2),e.l||(e.l={}),e.l[r+a]=n,n?t?n.u=t.u:(n.u=d,e.addEventListener(r,a?u:c,a)):e.removeEventListener(r,a?u:c,a);else{if("http://www.w3.org/2000/svg"==o)r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=r&&"height"!=r&&"href"!=r&&"list"!=r&&"form"!=r&&"tabIndex"!=r&&"download"!=r&&"rowSpan"!=r&&"colSpan"!=r&&"role"!=r&&"popover"!=r&&r in e)try{e[r]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!=r[4]?e.removeAttribute(r):e.setAttribute(r,"popover"==r&&1==n?"":n))}}function D(e){return function(r){if(this.l){var t=this.l[r.type+e];if(null==r.t)r.t=d++;else if(r.t<t.u)return;return t(n.event?n.event(r):r)}}}function T(e,r,t,o,a,i,s,l,d,c){var u,h,p,m,v,y,w,S,z,$,M,j,_,I,A,D,T,R=r.type;if(null!=r.constructor)return null;128&t.j&&(d=!!(32&t.j),i=[l=r.S=t.S]),(u=n.v)&&u(r);e:if("function"==typeof R)try{if(S=r.props,z="prototype"in R&&R.prototype.render,$=(u=R.contextType)&&o[u.$],M=u?$?$.props.value:u.m:o,t.$?w=(h=r.$=t.$).m=h.T:(z?r.$=h=new R(S,M):(r.$=h=new x(S,M),h.constructor=R,h.render=L),$&&$.sub(h),h.props=S,h.state||(h.state={}),h.context=M,h.D=o,p=h._=!0,h.R=[],h.F=[]),z&&null==h.O&&(h.O=h.state),z&&null!=R.getDerivedStateFromProps&&(h.O==h.state&&(h.O=f({},h.O)),f(h.O,R.getDerivedStateFromProps(S,h.O))),m=h.props,v=h.state,h.C=r,p)z&&null==R.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),z&&null!=h.componentDidMount&&h.R.push(h.componentDidMount);else{if(z&&null==R.getDerivedStateFromProps&&S!==m&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(S,M),!h.S&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(S,h.O,M)||r.C==t.C){for(r.C!=t.C&&(h.props=S,h.state=h.O,h._=!1),r.S=t.S,r.h=t.h,r.h.some(function(e){e&&(e.m=r)}),j=0;j<h.F.length;j++)h.R.push(h.F[j]);h.F=[],h.R.length&&s.push(h);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(S,h.O,M),z&&null!=h.componentDidUpdate&&h.R.push(function(){h.componentDidUpdate(m,v,y)})}if(h.context=M,h.props=S,h.A=e,h.S=!1,_=n.I,I=0,z){for(h.state=h.O,h._=!1,_&&_(r),u=h.render(h.props,h.state,h.context),A=0;A<h.F.length;A++)h.R.push(h.F[A]);h.F=[]}else do{h._=!1,_&&_(r),u=h.render(h.props,h.state,h.context),h.state=h.O}while(h._&&++I<25);h.state=h.O,null!=h.getChildContext&&(o=f(f({},o),h.getChildContext())),z&&!p&&null!=h.getSnapshotBeforeUpdate&&(y=h.getSnapshotBeforeUpdate(m,v)),D=u,null!=u&&u.type===k&&null==u.key&&(D=F(u.props.children)),l=C(e,g(D)?D:[D],r,t,o,a,i,s,l,d,c),h.base=r.S,r.j&=-161,h.R.length&&s.push(h),w&&(h.T=h.m=null)}catch(e){if(r.C=null,d||null!=i)if(e.then){for(r.j|=d?160:128;l&&8==l.nodeType&&l.nextSibling;)l=l.nextSibling;i[i.indexOf(l)]=null,r.S=l}else for(T=i.length;T--;)b(i[T]);else r.S=t.S,r.h=t.h;n.S(e,r,t)}else null==i&&r.C==t.C?(r.h=t.h,r.S=t.S):l=r.S=E(t.S,r,t,o,a,i,s,d,c);return(u=n.diffed)&&u(r),128&r.j?void 0:l}function R(e,r,t){for(var o=0;o<t.length;o++)O(t[o],t[++o],t[++o]);n.$&&n.$(r,e),e.some(function(r){try{e=r.R,r.R=[],e.some(function(e){e.call(r)})}catch(e){n.S(e,r.C)}})}function F(e){return"object"!=typeof e||null==e||e.v&&e.v>0?e:g(e)?e.map(F):f({},e)}function E(e,t,o,a,i,s,l,d,c){var u,p,m,f,v,y,k,x=o.props,S=t.props,z=t.type;if("svg"==z?i="http://www.w3.org/2000/svg":"math"==z?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=s)for(u=0;u<s.length;u++)if((v=s[u])&&"setAttribute"in v==!!z&&(z?v.localName==z:3==v.nodeType)){e=v,s[u]=null;break}if(null==e){if(null==z)return document.createTextNode(S);e=document.createElementNS(i,z,S.is&&S),d&&(n.N&&n.N(t,s),d=!1),s=null}if(null==z)x===S||d&&e.data==S||(e.data=S);else{if(s=s&&r.call(e.childNodes),x=o.props||h,!d&&null!=s)for(x={},u=0;u<e.attributes.length;u++)x[(v=e.attributes[u]).name]=v.value;for(u in x)if(v=x[u],"children"==u);else if("dangerouslySetInnerHTML"==u)m=v;else if(!(u in S)){if("value"==u&&"defaultValue"in S||"checked"==u&&"defaultChecked"in S)continue;A(e,u,null,v,i)}for(u in S)v=S[u],"children"==u?f=v:"dangerouslySetInnerHTML"==u?p=v:"value"==u?y=v:"checked"==u?k=v:d&&"function"!=typeof v||x[u]===v||A(e,u,v,x[u],i);if(p)d||m&&(p.L==m.L||p.L==e.innerHTML)||(e.innerHTML=p.L),t.h=[];else if(m&&(e.innerHTML=""),C("template"==t.type?e.content:e,g(f)?f:[f],t,o,a,"foreignObject"==z?"http://www.w3.org/1999/xhtml":i,s,l,s?s[0]:o.h&&w(o,0),d,c),null!=s)for(u=s.length;u--;)b(s[u]);d||(u="value","progress"==z&&null==y?e.removeAttribute("value"):null!=y&&(y!==e[u]||"progress"==z&&!y||"option"==z&&y!=x[u])&&A(e,u,y,x[u],i),u="checked",null!=k&&k!=e[u]&&A(e,u,k,x[u],i))}return e}function O(e,r,t){try{if("function"==typeof e){var o="function"==typeof e.j;o&&e.j(),o&&null==r||(e.j=e(r))}else e.current=r}catch(e){n.S(e,t)}}function N(e,r,t){var o,a;if(n.unmount&&n.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.S||O(o,null,r)),null!=(o=e.$)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){n.S(e,r)}o.base=o.A=null}if(o=e.h)for(a=0;a<o.length;a++)o[a]&&N(o[a],r,t||"function"!=typeof e.type);t||b(e.S),e.$=e.m=e.S=void 0}function L(e,r,n){return this.constructor(e,n)}function P(e,t,o){var a,i,s;t==document&&(t=document.documentElement),n.m&&n.m(e,t),a=!1?null:t.h,i=[],s=[],T(t,e=t.h=v(k,null,[e]),a||h,h,t.namespaceURI,a?null:t.firstChild?r.call(t.childNodes):null,i,a?a.S:t.firstChild,false,s),R(i,e,s)}function q(e){if(!e)return"";const r=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#039;"),n=new Set(["A","BR","STRONG"]),t=new Set(["href","title"]),o=/^(https?:|mailto:|tel:)/i,a=document.createElement("template");a.innerHTML=e;const i=e=>{switch(e.nodeType){case Node.TEXT_NODE:return r(e.data);case Node.ELEMENT_NODE:{const a=e,s=a.tagName;if(!n.has(s)){let e="";for(const r of Array.from(a.childNodes))e+=i(r);return e}if("BR"===s)return"<br>";if("STRONG"===s){let e="";for(const r of Array.from(a.childNodes))e+=i(r);return`<strong>${e}</strong>`}if("A"===s){let e="",n="";for(const r of Array.from(a.attributes)){const a=r.name.toLowerCase();if(t.has(a))if("href"===a){const n=(r.value||"").trim();o.test(n)&&(e=n)}else"title"===a&&(n=r.value||"")}let s="";for(const e of Array.from(a.childNodes))s+=i(e);const l=' rel="noopener noreferrer"',d=e?` href="${r(e)}"`:"",c=n?` title="${r(n)}"`:"";return d?`<a${d}${c}${' target="_blank"'}${l}>${s}</a>`:s}return""}default:return""}};let s="";for(const e of Array.from(a.content.childNodes))s+=i(e);return s}function H(){return window.crypto&&window.crypto.randomUUID?window.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const r=16*Math.random()|0;return("x"===e?r:3&r|8).toString(16)})}r=p.slice,n={S:function(e,r,n,t){for(var o,a,i;r=r.m;)if((o=r.$)&&!o.m)try{if((a=o.constructor)&&null!=a.getDerivedStateFromError&&(o.setState(a.getDerivedStateFromError(e)),i=o._),null!=o.componentDidCatch&&(o.componentDidCatch(e,t||{}),i=o._),i)return o.T=o}catch(r){e=r}throw e}},t=0,x.prototype.setState=function(e,r){var n;n=null!=this.O&&this.O!=this.state?this.O:this.O=f({},this.state),"function"==typeof e&&(e=e(f({},n),this.props)),e&&f(n,e),null!=e&&this.C&&(r&&this.F.push(r),z(this))},x.prototype.forceUpdate=function(e){this.C&&(this.S=!0,e&&this.R.push(e),z(this))},x.prototype.render=k,o=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,r){return e.C.v-r.C.v},$.I=0,l=/(PointerCapture)$|Capture$/i,d=0,c=D(!1),u=D(!0),"undefined"!=typeof window&&function(){if(window.self!==window.top)try{window.parent.document}catch(e){}}();const B="https://app.askdona.com/api/embed/v1";async function V(e,r={}){const n=new AbortController,t=setTimeout(()=>n.abort(),3e4);try{const o={"X-Widget-Version":"1.0.0",...r.headers||{}};r.method&&["POST","PUT","PATCH"].includes(r.method)&&(o["Content-Type"]="application/json");const a=await fetch(`${B}${e}`,{...r,signal:n.signal,headers:o});if(clearTimeout(t),!a.ok){const e=await a.json().catch(()=>({message:"Request failed"}));throw new Error(e.message||`HTTP ${a.status}`)}return await a.json()}catch(e){if(clearTimeout(t),"AbortError"===e.name)throw new Error("Request timeout");throw e}}async function J(e,r){try{const n=r?`?language=${encodeURIComponent(r)}`:"";return await V(`/welcome/${e}${n}`)}catch(e){return null}}var U=0;function W(e,r,t,o,a,i){r||(r={});var s,l,d=r;if("ref"in d)for(l in d={},r)"ref"==l?s=r[l]:d[l]=r[l];var c={type:e,props:d,key:t,ref:s,h:null,m:null,v:0,S:null,$:null,constructor:void 0,C:--U,M:-1,j:0,P:a,q:i};if("function"==typeof e&&(s=e.defaultProps))for(l in s)void 0===d[l]&&(d[l]=s[l]);return n.vnode&&n.vnode(c),c}var Q,G,Y,X,Z=0,K=[],ee=n,re=ee.v,ne=ee.I,te=ee.diffed,oe=ee.$,ae=ee.unmount,ie=ee.m;function se(e,r){ee.R&&ee.R(G,e,Z||r),Z=0;var n=G.H||(G.H={m:[],R:[]});return e>=n.m.length&&n.m.push({}),n.m[e]}function le(e){return Z=1,function(e,r,n){var t=se(Q++,2);if(t.t=e,!t.$&&(t.m=[n?n(r):ke(void 0,r),function(e){var r=t.B?t.B[0]:t.m[0],n=t.t(r,e);r!==n&&(t.B=[n,t.m[1]],t.$.setState({}))}],t.$=G,!G.V)){var o=function(e,r,n){if(!t.$.H)return!0;var o=t.$.H.m.filter(function(e){return!!e.$});if(o.every(function(e){return!e.B}))return!a||a.call(this,e,r,n);var i=t.$.props!==e;return o.forEach(function(e){if(e.B){var r=e.m[0];e.m=e.B,e.B=void 0,r!==e.m[0]&&(i=!0)}}),a&&a.call(this,e,r,n)||i};G.V=!0;var a=G.shouldComponentUpdate,i=G.componentWillUpdate;G.componentWillUpdate=function(e,r,n){if(this.S){var t=a;a=void 0,o(e,r,n),a=t}i&&i.call(this,e,r,n)},G.shouldComponentUpdate=o}return t.B||t.m}(ke,e)}function de(e,r){var n=se(Q++,3);!ee.O&&ye(n.H,r)&&(n.m=e,n.u=r,G.H.R.push(n))}function ce(e,r){var n=se(Q++,4);!ee.O&&ye(n.H,r)&&(n.m=e,n.u=r,G.R.push(n))}function ue(e){return Z=5,he(function(){return{current:e}},[])}function he(e,r){var n=se(Q++,7);return ye(n.H,r)&&(n.m=e(),n.H=r,n.R=e),n.m}function pe(e,r){return Z=8,he(function(){return e},r)}function me(){for(var e;e=K.shift();)if(e.A&&e.H)try{e.H.R.forEach(be),e.H.R.forEach(ve),e.H.R=[]}catch(r){e.H.R=[],ee.S(r,e.C)}}ee.v=function(e){G=null,re&&re(e)},ee.m=function(e,r){e&&r.h&&r.h.N&&(e.N=r.h.N),ie&&ie(e,r)},ee.I=function(e){ne&&ne(e),Q=0;var r=(G=e.$).H;r&&(Y===G?(r.R=[],G.R=[],r.m.forEach(function(e){e.B&&(e.m=e.B),e.u=e.B=void 0})):(r.R.forEach(be),r.R.forEach(ve),r.R=[],Q=0)),Y=G},ee.diffed=function(e){te&&te(e);var r=e.$;r&&r.H&&(r.H.R.length&&(1!==K.push(r)&&X===ee.requestAnimationFrame||((X=ee.requestAnimationFrame)||fe)(me)),r.H.m.forEach(function(e){e.u&&(e.H=e.u),e.u=void 0})),Y=G=null},ee.$=function(e,r){r.some(function(e){try{e.R.forEach(be),e.R=e.R.filter(function(e){return!e.m||ve(e)})}catch(n){r.some(function(e){e.R&&(e.R=[])}),r=[],ee.S(n,e.C)}}),oe&&oe(e,r)},ee.unmount=function(e){ae&&ae(e);var r,n=e.$;n&&n.H&&(n.H.m.forEach(function(e){try{be(e)}catch(e){r=e}}),n.H=void 0,r&&ee.S(r,n.C))};var ge="function"==typeof requestAnimationFrame;function fe(e){var r,n=function(){clearTimeout(t),ge&&cancelAnimationFrame(r),setTimeout(e)},t=setTimeout(n,35);ge&&(r=requestAnimationFrame(n))}function be(e){var r=G,n=e.$;"function"==typeof n&&(e.$=void 0,n()),G=r}function ve(e){var r=G;e.$=e.m(),G=r}function ye(e,r){return!e||e.length!==r.length||r.some(function(r,n){return r!==e[n]})}function ke(e,r){return"function"==typeof r?r(e):r}let xe,we,Se,ze={data:""},$e=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ze,Ce=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Me=/\/\*[^]*?\*\/|  +/g,je=/\n+/g,_e=(e,r)=>{let n="",t="",o="";for(let a in e){let i=e[a];"@"==a[0]?"i"==a[1]?n=a+" "+i+";":t+="f"==a[1]?_e(i,a):a+"{"+_e(i,"k"==a[1]?"":r)+"}":"object"==typeof i?t+=_e(i,r?r.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):a):null!=i&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=_e.p?_e.p(a,i):a+":"+i+";")}return n+(r&&o?r+"{"+o+"}":o)+t},Ie={},Ae=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+Ae(e[n]);return r}return e},De=(e,r,n,t,o)=>{let a=Ae(e),i=Ie[a]||(Ie[a]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(a));if(!Ie[i]){let r=a!==e?e:(e=>{let r,n,t=[{}];for(;r=Ce.exec(e.replace(Me,""));)r[4]?t.shift():r[3]?(n=r[3].replace(je," ").trim(),t.unshift(t[0][n]=t[0][n]||{})):t[0][r[1]]=r[2].replace(je," ").trim();return t[0]})(e);Ie[i]=_e(o?{["@keyframes "+i]:r}:r,n?"":"."+i)}let s=n&&Ie.g?Ie.g:null;return n&&(Ie.g=Ie[i]),((e,r,n,t)=>{t?r.data=r.data.replace(t,e):-1===r.data.indexOf(e)&&(r.data=n?e+r.data:r.data+e)})(Ie[i],r,t,s),i};function Te(e){let r=this||{},n=e.call?e(r.p):e;return De(n.unshift?n.raw?((e,r,n)=>e.reduce((e,t,o)=>{let a=r[o];if(a&&a.call){let e=a(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=r?"."+r:e&&"object"==typeof e?e.props?"":_e(e,""):!1===e?"":e}return e+t+(null==a?"":a)},""))(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,$e(r.target),r.g,r.o,r.k)}Te.bind({g:1});let Re=Te.bind({k:1});function Fe(e,r,n,t){_e.p=r,xe=e,we=n,Se=t}function Ee(e,r){let n=this||{};return function(){let r=arguments;return function t(o,a){let i=Object.assign({},o),s=i.className||t.className;n.p=Object.assign({theme:we&&we()},i),n.o=/ *go\d+/.test(s),i.className=Te.apply(n,r)+(s?" "+s:"");let l=e;return e[0]&&(l=i.as||e,delete i.as),Se&&l[0]&&Se(i),xe(l,i)}}}const Oe=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ne=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,n)=>n?n.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},Le=(...e)=>e.filter((e,r,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===r).join(" ").trim();var Pe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};const qe=({color:e="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:t,children:o,iconNode:a,class:i="",...s})=>v("svg",{...Pe,width:String(r),height:r,stroke:e,"stroke-width":t?24*Number(n)/Number(r):n,class:["lucide",i].join(" "),...s},[...a.map(([e,r])=>v(e,r)),...j(o)]),He=(e,r)=>{const n=({class:n="",children:t,...o})=>v(qe,{...o,iconNode:r,class:Le(`lucide-${Oe(Ne(e))}`,`lucide-${Oe(e)}`,n)},t);return n.displayName=Ne(e),n},Be=He("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),Ve=He("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Je=He("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),Ue=He("beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]),We=He("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),Qe=He("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),Ge=He("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Ye=He("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),Xe=He("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),Ze=He("circle-question-mark",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Ke=He("clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]),er=He("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),rr=He("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),nr=He("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),tr=He("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),or=He("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),ar=He("funnel",[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]]),ir=He("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),sr=He("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),lr=He("loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]),dr=He("message-circle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]),cr=He("mic-off",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]),ur=He("mic",[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]]),hr=He("microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]),pr=He("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),mr=He("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]),gr=He("share-2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),fr=He("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]),br=He("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]),vr=He("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),yr=He("thumbs-down",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]]),kr=He("thumbs-up",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]),xr=He("timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),wr=He("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Sr=He("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),zr=He("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function $r({headers:e,data:r}){return W(qr,{children:W("table",{children:[W("thead",{children:W("tr",{children:e.map((e,r)=>W("th",{children:e},r))})}),W("tbody",{children:r.map((e,r)=>W("tr",{children:e.map((e,r)=>W("td",{children:e},r))},r))})]})})}function Cr({code:e,language:r}){const[n,t]=le(!1);return W(Hr,{children:[W(Br,{children:[W(Vr,{children:r||"code"}),W(Jr,{onClick:async()=>{try{await navigator.clipboard.writeText(e),t(!0),setTimeout(()=>t(!1),2e3)}catch(r){const n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select();try{document.execCommand("copy")}catch(e){}document.body.removeChild(n),t(!0),setTimeout(()=>t(!1),2e3)}},title:"Copy code",children:W(n?We:rr,{size:14})})]}),W(Ur,{children:W("code",{children:e})})]})}function Mr({isOpen:e,onClose:r,onSubmit:n,rating:t,config:o}){const[a,i]=le(""),[s,l]=le(!1);if(!e)return null;const d="THUMBS_UP"===t,c="ja"===o.language?d?"何が良かったですか？":"何が改善できますか？":d?"What was helpful?":"What could be improved?",u="ja"===o.language?d?"例：詳しい説明で理解しやすかった":"例：もう少し具体的な例が欲しい":d?"e.g., Clear and detailed explanation":"e.g., Could use more specific examples";return W(Zr,{onClick:r,children:W(Kr,{onClick:e=>e.stopPropagation(),children:[W(en,{children:[W(rn,{positive:d,children:W(d?kr:yr,{size:16})}),W(nn,{children:c})]}),W(tn,{children:W(on,{value:a,onChange:e=>i(e.target.value),placeholder:u,rows:3})}),W(an,{children:[W(sn,{onClick:()=>{n(""),r()},children:"ja"===o.language?"スキップ":"Skip"}),W(ln,{onClick:()=>{l(!0);try{n(a),r()}catch(e){}finally{l(!1)}},disabled:s,children:s?"ja"===o.language?"送信中...":"Sending...":"ja"===o.language?"送信":"Send"})]})]})})}function jr({messageId:e,sessionId:r,feedback:n,onFeedbackSubmit:t,config:o}){const[a,i]=le(!1),[s,l]=le(null),[d,c]=le(n||null),u=e=>{d||(l(e),i(!0))};return W(k,{children:[W(Wr,{children:[W(Qr,{children:"ja"===o.language?"この回答は役に立ちましたか？ 更なる改善のため、ぜひフィードバックをお願いします。":"Was this answer helpful? For further improvements, please share your feedback."}),W(Gr,{children:[W(Yr,{onClick:()=>u("THUMBS_UP"),active:"THUMBS_UP"===(null==d?void 0:d.rating),disabled:!!d,positive:!0,title:"ja"===o.language?"役に立った":"Helpful",children:W(kr,{size:14})}),W(Yr,{onClick:()=>u("THUMBS_DOWN"),active:"THUMBS_DOWN"===(null==d?void 0:d.rating),disabled:!!d,positive:!1,title:"ja"===o.language?"役に立たなかった":"Not helpful",children:W(yr,{size:14})})]}),d&&W(Xr,{children:"ja"===o.language?"フィードバックをありがとうございます！":"Thank you for your feedback!"})]}),W(Mr,{isOpen:a,onClose:()=>{i(!1),l(null)},onSubmit:r=>{if(!s)return;const n={rating:s,content:r||void 0,submittedAt:(new Date).toISOString(),isSubmitted:!0};c(n),t(e,s,r)},rating:s,config:o})]})}function _r(e,r,n=0){try{const t=window.katex;if(t&&"function"==typeof t.renderToString){return W("span",{dangerouslySetInnerHTML:{L:t.renderToString(e,{displayMode:r,throwOnError:!1,strict:"ignore"})}},`k${n}`)}}catch(e){}return W("code",{className:"inline-code",children:e},`k${n}`)}function Ir(e,r=!1,n){if(!e)return[];const t=[],o=e.split("\n");let a=[],i=!1,s=[],l="",d=!1,c=[],u=!1,h=[];const p={};(n||[]).forEach((e,r)=>{p[r+1]=e});const m=()=>{if(a.length>0){const e=a.join("\n");t.push(W("p",{children:Ar(e,p)},t.length)),a=[]}},g=()=>{if(c.length>0){const e=c[0].split("|").slice(1,-1).map(e=>e.trim()),r=c.slice(2).map(e=>e.split("|").slice(1,-1).map(e=>e.trim()));t.push(W($r,{headers:e,data:r},t.length)),c=[]}};for(let e=0;e<o.length;e++){const f=o[e],b=f.trim();if(b.startsWith("```"))i?(t.push(W(Cr,{code:s.join("\n"),language:l},t.length)),s=[],l="",i=!1):(m(),i=!0,l=b.slice(3)||"");else if(i)s.push(f);else if(b.startsWith("$$")){if(!u){m();if(b.endsWith("$$")&&b.length>2){const e=b.slice(2,-2).trim();t.push(W("div",{className:"katex-block",children:_r(e,!0,t.length)},t.length))}else{u=!0;const e=f.slice(f.indexOf("$$")+2);e.trim()&&h.push(e)}}}else if(u)if(b.endsWith("$$")){const e=f.slice(0,f.lastIndexOf("$$"));e.trim()&&h.push(e);const r=h.join("\n");t.push(W("div",{className:"katex-block",children:_r(r,!0,t.length)},t.length)),h=[],u=!1}else h.push(f);else{if(!r&&b.includes("|")&&e+1<o.length){if(o[e+1].trim().match(/^[\|\s\-:]+$/)){m(),d=!0,c=[b];continue}}if(d)""!==b&&b.includes("|")?c.push(b):(g(),d=!1,b&&a.push(f));else{if(b.match(/^#{1,6}\s/)){m();const e=b.match(/^#+/),r=e?e[0].length:1,n=b.slice(r).trim(),o=`h${r}`;t.push(W(o,{children:Ar(n,p)},t.length));continue}if(b.match(/^[*+-]\s/)||b.match(/^\d+\.\s/)){m();const a=[],i=/^[*+-]\s/,s=/^\d+\.\s/,l=s.test(b),d=e=>{const r=e.trim();return i.test(r)||s.test(r)};let c=e;for(;c<o.length&&d(o[c]);){const e=[o[c].replace(/^[*+-]\s|^\d+\.\s/,"")];let t=c+1,i=!1;for(;t<o.length;){const r=o[t],n=r.trim();if(""===n){const r=t+1<o.length?o[t+1]:"",n=r.trim();if(!r)break;if(d(r)||""===n||n.match(/^#{1,6}\s/)||n.startsWith("```"))break;e.push(""),i=!0,t+=1;continue}if(d(r)||n.match(/^#{1,6}\s/)||n.startsWith("```"))break;r.startsWith("  ")||r.startsWith("\t")?(e.push(r.replace(/^\s+/,"")),i=!1,t+=1):(e.push(r),i=!1,t+=1)}const s=Ir(e.join("\n"),r,n);a.push(W("li",{children:s},a.length)),c=t}a.length>0&&t.push(W(l?"ol":"ul",{children:a},t.length)),e=c-1;continue}b.match(/^(-{3,}|\*{3,}|_{3,})$/)?(m(),t.push(W("hr",{},t.length))):""!==b?a.push(f):m()}}}return m(),d&&g(),t}function Ar(e,r){const n=[];let t=0;const o=[{regex:/\\\((.+?)\\\)/g,render:(e,r)=>_r(r,!1,t++)},{regex:/\$(?!\s)([^$]+?)\$(?!\w)/g,render:(e,r)=>_r(r,!1,t++)},{regex:/\*\*(.*?)\*\*/g,render:(e,r)=>W("strong",{children:r},t++)},{regex:/\*(.*?)\*/g,render:(e,r)=>W("em",{children:r},t++)},{regex:/`([^`]+)`/g,render:(e,r)=>W("code",{className:"inline-code",children:r},t++)},{regex:/\[([^\]]+)\]\(([^)]+)\)/g,render:(e,r,n)=>W("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"link",children:r},t++)},{regex:/\[(\d+(?:,\s*\d+)*)\]/g,render:(e,n)=>{const o=n.split(/,\s*/).map(e=>parseInt(e,10)).filter(e=>!isNaN(e)),a=[];return o.forEach((e,n)=>{const i=r?r[e]:void 0,s=(null==i?void 0:i.file_name)||(null==i?void 0:i.url)||`#${e}`,l=null==i?void 0:i.url,d=Boolean(l),c="citation"+(d?" link":" disabled");d?a.push(W("a",{className:c,href:l,target:"_blank",rel:"noopener noreferrer",title:s,children:e},"c"+t++)):a.push(W("span",{className:c,title:s,children:e},"c"+t++)),n<o.length-1&&a.push(", ")}),W(k,{children:a})}}],a=[];o.forEach(r=>{let n;for(r.regex.lastIndex=0;null!==(n=r.regex.exec(e));){const e=[n[0]];for(let r=1;r<n.length;r++)e.push(n[r]);a.push({start:n.index,end:n.index+n[0].length,element:r.render.apply(null,e)})}}),a.sort((e,r)=>e.start-r.start);const i=[];let s=0;for(const e of a)e.start>=s&&(i.push(e),s=e.end);let l=0;for(const r of i)r.start>l&&n.push(e.substring(l,r.start)),n.push(r.element),l=r.end;return l<e.length&&n.push(e.substring(l)),n.length>0?n:[e]}function Dr({messages:e,isLoading:r,streamingContent:n,config:t,sessionId:o,onFeedbackSubmit:a}){const i=ue(null);return de(()=>{var e;null===(e=i.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},[e,n]),W(Tr,{children:[e.map((e,r)=>{var n,i,s,l,d,c;return"assistant"!==e.role||e.content?W(k,{children:[W(Rr,{isUser:"user"===e.role,children:"user"===e.role?W(Fr,{children:[W(Er,{children:e.content}),("boost"===(null===(n=e.metadata)||void 0===n?void 0:n.mode)||"fast"===(null===(i=e.metadata)||void 0===i?void 0:i.mode))&&W(dn,{variant:e.metadata.mode,children:["fast"===e.metadata.mode?W(zr,{size:12}):W(xr,{size:12}),W("span",{children:"fast"===e.metadata.mode?"Fast":"Boost"})]})]}):W(k,{children:W(Or,{children:W(Nr,{children:[W(Lr,{children:Ir(e.content||"",!1,null===(s=e.metadata)||void 0===s?void 0:s.docMetadata)}),("boost"===(null===(l=e.metadata)||void 0===l?void 0:l.mode)||"fast"===(null===(d=e.metadata)||void 0===d?void 0:d.mode))&&W(dn,{assistant:!0,variant:e.metadata.mode,children:["fast"===e.metadata.mode?W(zr,{size:12}):W(xr,{size:12}),W("span",{children:"fast"===e.metadata.mode?"Fast":"Boost"})]})]})})})},e.id||r),"assistant"===e.role&&W(Rr,{isUser:!1,children:W(Or,{children:W(Nr,{children:W(jr,{messageId:e.id,sessionId:o,feedback:null===(c=e.metadata)||void 0===c?void 0:c.feedback,onFeedbackSubmit:a,config:t})})})},`${e.id}-feedback`)]}):null}).filter(Boolean),r&&n&&n.trim()&&W(Rr,{isUser:!1,children:W(Or,{children:W(Nr,{children:[W(Pr,{children:"ja"===t.language?"リアルタイム応答中...":"Streaming response..."}),W(Lr,{children:(()=>{try{return Ir(n||"",!0,void 0)}catch(e){return W("p",{children:n||""})}})()})]})})}),W("div",{ref:i})]})}const Tr=Ee("div")`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`,Rr=Ee("div")`
  display: flex;
  justify-content: ${e=>e.isUser?"flex-end":"flex-start"};
  align-items: flex-start;
`,Fr=Ee("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  max-width: 70%;
`,Er=Ee("div")`
  padding: 1rem 1.25rem;
  background: var(--askdona-primary);
  color: white;
  border-radius: 1rem 1rem 0.25rem 1rem;
  font-size: 0.875rem;
  line-height: 1.6;
  word-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`,Or=Ee("div")`
  display: flex;
  gap: 0.75rem;
  max-width: 85%;
`,Nr=Ee("div")`
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
`,Lr=Ee("div")`
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
`,Pr=Ee("div")`
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
`,qr=Ee("div")`
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
`,Hr=Ee("div")`
  margin: 16px 0;
  border-radius: 8px;
  border: 1px solid var(--askdona-border);
  background: var(--askdona-surface);
  overflow: hidden;
`,Br=Ee("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: var(--askdona-bg-secondary);
  border-bottom: 1px solid var(--askdona-border);
`,Vr=Ee("span")`
  font-size: 12px;
  color: var(--askdona-text-secondary);
  font-weight: 500;
  text-transform: uppercase;
`,Jr=Ee("button")`
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
`,Ur=Ee("pre")`
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
`,Wr=Ee("div")`
  margin-top: 12px;
  padding: 8px 0;
`,Qr=Ee("div")`
  font-size: inherit;
  color: var(--askdona-text); /* use normal text color */
  margin-bottom: 6px;
  font-weight: 500;
`,Gr=Ee("div")`
  display: flex;
  gap: 6px;
  align-items: center;
`,Yr=Ee("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid var(--askdona-border);
  background: ${({active:e,positive:r})=>e?r?"#10b981":"#ef4444":"var(--askdona-background)"};
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
    background: ${({active:e,positive:r})=>e?r?"#059669":"#dc2626":"var(--askdona-bg-hover)"};
    color: ${({active:e})=>e?"white":"#374151"};
    border-color: ${({active:e,positive:r})=>e?r?"#059669":"#dc2626":r?"#10b981":"#6b7280"};
    
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
`,Xr=Ee("div")`
  font-size: 11px;
  color: var(--askdona-text-secondary);
  margin-top: 6px;
  font-style: italic;
`,Zr=Ee("div")`
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
`,Kr=Ee("div")`
  background: var(--askdona-background);
  border-radius: 12px;
  padding: 24px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--askdona-border);
`,en=Ee("div")`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,rn=Ee("div")`
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
`,nn=Ee("h3")`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--askdona-text);
`,tn=Ee("div")`
  margin-bottom: 20px;
`,on=Ee("textarea")`
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
`,an=Ee("div")`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,sn=Ee("button")`
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
`,ln=Ee("button")`
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
`,dn=Ee("div")`
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
`,cn=Ee("div")`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  padding: 16px;
`,un=Ee("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`,hn=Ee("div")`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #1e293b;
  font-size: 14px;
`,pn=Ee("button")`
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
`,mn=Ee("div")`
  margin-bottom: 12px;
`,gn=Ee("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
`,fn=Ee("label")`
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
`,bn=Ee("input")`
  margin: 0;
  width: 12px;
  height: 12px;
`,vn=Ee("div")`
  font-size: 12px;
  color: #64748b;
  padding-top: 8px;
  border-top: 1px solid #f1f5f9;
`;function yn({filter:e,keyData:r,onFilterChange:n,onFilterRemove:t}){const o=pe(r=>{const t=e.selectedValues.includes(r)?e.selectedValues.filter(e=>e!==r):[...e.selectedValues,r];n({...e,selectedValues:t})},[e,n]),a=pe(()=>{t(e.key)},[e.key,t]);return W(cn,{children:[W(un,{children:[W(hn,{children:[W(br,{size:14}),e.key,r.isCustom&&W("span",{style:{fontSize:"10px",color:"#6b7280",background:"#f3f4f6",padding:"2px 6px",borderRadius:"8px"},children:"カスタム"})]}),W(pn,{onClick:a,title:"フィルターを削除",children:W(Sr,{size:14})})]}),W(mn,{children:W(gn,{children:r.values.map(r=>{const n=e.selectedValues.includes(r);return W(fn,{isSelected:n,onClick:()=>o(r),children:[W(bn,{type:"checkbox",checked:n,onChange:()=>o(r)}),r]},r)})})}),W(vn,{children:e.selectedValues.length>0?W(k,{children:[W("strong",{children:[e.selectedValues.length,"個の値を選択中:"]}),W("br",{}),e.selectedValues.join(", "),W("br",{}),W("em",{children:"選択した値のいずれかを含むファイルが対象になります (OR条件)"})]}):W("em",{children:"値を選択してください"})})]})}const kn=Ee("div")`
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
`,xn=Ee("div")`
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
`,wn=Ee("div")`
  padding: 12px 20px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Sn=Ee("h2")`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 8px;
`,zn=Ee("button")`
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
`,$n=Ee("div")`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Cn=Ee("div")`
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
`,Mn=Ee("div")`
  margin-bottom: 16px;
`,jn=Ee("label")`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  display: block;
`,_n=Ee("div")`
  display: flex;
  gap: 16px;
`,In=Ee("label")`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #4b5563;
`,An=Ee("input")`
  margin: 0;
`,Dn=Ee("button")`
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
`,Tn=Ee("div")`
  flex: 1;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Rn=Ee("div")`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,Fn=Ee("h3")`
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 16px 0;
`,En=Ee("div")`
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`,On=Ee("input")`
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  margin-bottom: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2364748b' viewBox='0 0 24 24'%3E%3Cpath d='M21 20l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 12px center;
`,Nn=Ee("button")`
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
`,Ln=Ee("div")`
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 4px;
`,Pn=Ee("div")`
  font-size: 12px;
  color: #64748b;
`,qn=Ee("div")`
  text-align: center;
  color: #64748b;
  padding: 40px 20px;
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    color: #cbd5e1;
  }
`,Hn=Ee("div")`
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
`,Bn=Ee("div")`
  text-align: center;
  color: #ef4444;
  padding: 40px 20px;
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
  }
`;function Vn({isOpen:e,onClose:r,metadataKeys:n,filters:t,onFiltersChange:o,isLoading:a,error:i}){const[s,l]=le(""),[d,c]=le(t||{filters:[],globalOperator:"AND"});de(()=>{c(t||{filters:[],globalOperator:"AND"})},[t]);const u=pe(e=>{e.target===e.currentTarget&&r()},[r]),h=pe(()=>{const e=d.filters.some(e=>e.selectedValues.length>0);o(e?d:null),r()},[d,o,r]),p=pe(()=>{c({filters:[],globalOperator:"AND"})},[]),m=pe(e=>{const r={key:e,selectedValues:[],operator:"OR"};c(e=>({...e,filters:[...e.filters,r]}))},[]),g=pe(e=>{c(r=>({...r,filters:r.filters.filter(r=>r.key!==e)}))},[]),f=pe(e=>{c(r=>({...r,filters:r.filters.map(r=>r.key===e.key?e:r)}))},[]),b=pe(e=>{c(r=>({...r,globalOperator:e}))},[]),v=n.filter(e=>{const r=d.filters.some(r=>r.key===e.key);if(r)return!1;if(s){const r=s.toLowerCase();return e.key.toLowerCase().includes(r)||e.values.some(e=>e.toLowerCase().includes(r))}return!0});return e?W(kn,{onClick:u,children:W(xn,{onClick:e=>e.stopPropagation(),children:[W(wn,{children:[W(Sn,{children:[W(ar,{size:20}),"絞り込み設定",d.filters.length>0&&W("span",{style:{color:"#64748b",fontWeight:400,fontSize:"14px"},children:["(",d.filters.reduce((e,r)=>e+r.selectedValues.length,0),"件の条件)"]})]}),W(zn,{onClick:r,children:W(Sr,{size:20})})]}),W($n,{children:[d.filters.length>0&&W(Cn,{children:[d.filters.length>1&&W(Mn,{children:[W(jn,{children:"フィルター間の関係"}),W(_n,{children:[W(In,{children:[W(An,{type:"radio",name:"globalOperator",checked:"AND"===d.globalOperator,onChange:()=>b("AND")}),"AND（すべての条件を満たす）"]}),W(In,{children:[W(An,{type:"radio",name:"globalOperator",checked:"OR"===d.globalOperator,onChange:()=>b("OR")}),"OR（いずれかの条件を満たす）"]})]})]}),W("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[W("span",{style:{fontSize:"14px",color:"#64748b"},children:"文書のメタデータでフィルタリングして検索範囲を絞り込みます"}),d.filters.length>0&&W(Dn,{onClick:p,children:"すべてクリア"})]})]}),W(Tn,{children:[W(Rn,{children:[W(Fn,{children:"設定済みフィルター"}),W(En,{children:d.filters.length>0?W("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:d.filters.map(e=>{const r=n.find(r=>r.key===e.key);return r?W(yn,{filter:e,keyData:r,onFilterChange:f,onFilterRemove:g},e.key):null})}):W(qn,{children:[W(ar,{}),W("div",{style:{fontWeight:500,marginBottom:"4px"},children:"まだフィルターが設定されていません"}),W("div",{style:{fontSize:"14px"},children:"右側から絞り込み項目を選択してください"})]})})]}),W(Rn,{children:[W(Fn,{children:"利用可能な絞り込み"}),W(On,{type:"text",placeholder:"絞り込み条件を検索...",value:s,onChange:e=>l(e.target.value)}),W(En,{children:a?W(Hn,{children:[W(sr,{}),"読み込み中..."]}):i?W(Bn,{children:[W(Ye,{}),W("div",{style:{fontWeight:500,marginBottom:"4px"},children:"エラーが発生しました"}),W("div",{style:{fontSize:"14px"},children:i})]}):v.length>0?W("div",{children:v.map(e=>W(Nn,{onClick:()=>m(e.key),children:[W(Ln,{children:e.key}),W(Pn,{children:[e.values.length,"個の値 • ",e.count,"件のファイル",W("br",{}),"例: ",e.values.slice(0,3).join(", "),e.values.length>3&&"..."]})]},e.key))}):W(qn,{children:[W(mr,{}),W("div",{style:{fontWeight:500,marginBottom:"4px"},children:s?"検索結果がありません":"すべてのメタデータキーが選択済みです"})]})})]})]})]}),W("div",{style:{padding:"16px 20px",borderTop:"1px solid #e2e8f0",display:"flex",justifyContent:"flex-end",gap:"8px"},children:[W("button",{onClick:r,style:{padding:"8px 16px",border:"1px solid #e2e8f0",background:"white",color:"#374151",borderRadius:"6px",cursor:"pointer"},children:"キャンセル"}),W("button",{onClick:h,style:{padding:"8px 16px",border:"none",background:"#3b82f6",color:"white",borderRadius:"6px",cursor:"pointer",fontWeight:"500"},children:"適用"})]})]})}):null}const Jn=Ee("button")`
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
`,Un=Ee("span")`
  background: rgba(255, 255, 255, 0.9);
  color: #1e40af;
  padding: 0px 4px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 600;
  min-width: 14px;
  text-align: center;
  margin-left: 2px;
`,Wn=Ee(ar)`
  width: 14px;
  height: 14px;
`;function Qn({chatflowId:e,filters:r,onFiltersChange:n,disabled:t=!1,className:o,language:a="ja"}){var i;const[s,l]=le(!1),[d,c]=le(!1),[u,h]=le([]),[p,m]=le(null),[g,f]=le(!1),[b,v]=le(null),[y,x]=le(!1),w=(null===(i=null==r?void 0:r.filters)||void 0===i?void 0:i.reduce((e,r)=>{var n;return e+((null===(n=r.selectedValues)||void 0===n?void 0:n.length)||0)},0))||0,S=w>0;de(()=>{let r=!0;const n=async()=>{if(await new Promise(e=>setTimeout(e,10)),r){f(!0);try{const n=await async function(e){try{return await V(`/metadata/${e}/check`,{method:"GET"})}catch(e){return{enable_metadata_filtering:!1,error:e.message}}}(e);r&&(m(n.enable_metadata_filtering),v(null))}catch(e){r&&(m(!1),v(e.message))}finally{r&&f(!1)}}};return e&&n(),()=>{r=!1}},[e]);const z=pe(()=>{l(!0),!g&&y||c(!0),v(null)},[g,y]);de(()=>{if(!s||y)return;if(g)return;if(!1===p)return v("メタデータフィルタリングはこのチャットフローで利用できません"),c(!1),void x(!0);(async()=>{try{const r=await async function(e){try{return await V(`/metadata/${e}/keys`,{method:"GET"})}catch(e){return{success:!1,error:e.message}}}(e);r.success&&r.metadataKeys?h(r.metadataKeys):(v(r.error||"Failed to fetch metadata keys"),h([])),x(!0)}catch(e){v(e.message),h([]),x(!0)}finally{c(!1)}})()},[s,e,y,g,p]);const $=pe(()=>{l(!1),h([]),c(!1),v(null),x(!1)},[]);return!0!==p?null:W(k,{children:[W(Jn,{hasActiveFilters:S,onClick:z,disabled:t,className:o,type:"button",title:g?"ja"===a?"フィルタ機能を確認中...":"Checking filter availability...":"ja"===a?"結果を絞り込む":"Filter results",children:[W(Wn,{}),W("span",{children:"ja"===a?"絞り込み":"Filter"}),S&&W(Un,{children:w})]}),s&&W(Vn,{isOpen:s,onClose:$,metadataKeys:u,filters:r,onFiltersChange:n,isLoading:d,error:b})]})}function Gn({onTranscript:e,disabled:r=!1,config:n,size:t=16}){const{isSupported:o,isListening:a,isLoading:i,error:s,volumeLevel:l,startListening:d,stopListening:c,clearTranscript:u}=function(e={}){const{language:r="ja-JP",continuous:n=!0,interimResults:t=!0,maxAlternatives:o=1,onResult:a,onError:i,onVolumeChange:s}=e,[l,d]=le({isSupported:!1,isListening:!1,isLoading:!1,transcript:"",error:null,volumeLevel:0}),c=ue(null),u=ue(!1),h=ue(null),p=ue(null),m=ue(null),g=ue(null),f=ue(null);de(()=>{if(u.current)return;u.current=!0;const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e)return void d(e=>({...e,isSupported:!1,error:"Speech recognition is not supported in this browser"}));const s=new e;return s.continuous=n,s.interimResults=t,s.lang=r,s.maxAlternatives=o,"speechTimeouts"in s&&(s.speechTimeouts={speechStart:1e4,speechEnd:5e3,maxSpeechLength:3e4}),s.onstart=()=>{setTimeout(()=>{d(e=>({...e,isListening:!0,isLoading:!1,error:null}))},200)},s.onresult=e=>{let r="",n=!1;for(let t=0;t<e.results.length;t++){const o=e.results[t];r+=o[0].transcript,o.isFinal&&(n=!0)}r=r.trim(),d(e=>({...e,transcript:n?r:e.transcript,isLoading:!1})),a&&r&&a(r,n)},s.onerror=e=>{const r=function(e){switch(e){case"not-allowed":return"Microphone access denied. Please allow microphone access and try again.";case"no-speech":return"No speech detected. Please try speaking clearly.";case"audio-capture":return"Microphone not available. Please check your microphone connection.";case"network":return"Network error occurred. Please check your internet connection.";case"not-supported":return"Speech recognition is not supported in this browser.";case"language-not-supported":return"Selected language is not supported for speech recognition.";default:return`Speech recognition error: ${e}`}}(e.error);d(e=>({...e,isListening:!1,isLoading:!1,error:r})),i&&i(r)},s.onend=()=>{d(e=>({...e,isListening:!1,isLoading:!1})),y()},c.current=s,d(e=>({...e,isSupported:!0})),()=>{c.current&&c.current.abort(),y()}},[r,n,t,o,a,i]);const b=pe(async()=>{try{const e=await navigator.mediaDevices.getUserMedia({audio:!0});g.current=e;const r=new(window.AudioContext||window.webkitAudioContext);h.current=r;const n=r.createAnalyser();n.fftSize=256,n.smoothingTimeConstant=.3,p.current=n;const t=r.createMediaStreamSource(e);m.current=t,t.connect(n),v()}catch(e){}},[]),v=pe(()=>{if(!p.current)return;const e=p.current,r=e.frequencyBinCount,n=new Uint8Array(r),t=()=>{if(!e||!l.isListening)return;e.getByteFrequencyData(n);let o=0;for(let e=0;e<r;e++)o+=n[e]*n[e];const a=Math.sqrt(o/r),i=Math.min(100,Math.max(0,a/128*100));d(e=>({...e,volumeLevel:i})),s&&s(i),f.current=requestAnimationFrame(t)};t()},[l.isListening,s]),y=pe(()=>{f.current&&(cancelAnimationFrame(f.current),f.current=null),m.current&&(m.current.disconnect(),m.current=null),h.current&&"closed"!==h.current.state&&(h.current.close(),h.current=null),g.current&&(g.current.getTracks().forEach(e=>e.stop()),g.current=null),p.current=null,d(e=>({...e,volumeLevel:0}))},[]),k=pe(async()=>{if(c.current&&!l.isListening)try{d(e=>({...e,isLoading:!0,error:null})),await b(),await new Promise(e=>setTimeout(e,100)),c.current.start()}catch(e){d(e=>({...e,isLoading:!1,error:"Failed to start voice recognition"})),y()}},[l.isListening,b,y]),x=pe(()=>{if(c.current&&l.isListening)try{c.current.stop(),y()}catch(e){d(e=>({...e,isListening:!1,isLoading:!1,error:"Failed to stop voice recognition"})),y()}},[l.isListening,y]),w=pe(()=>{d(e=>({...e,transcript:"",error:null}))},[]);return{...l,startListening:k,stopListening:x,clearTranscript:w}}({language:"ja"===n.language?"ja-JP":"en-US",continuous:!1,interimResults:!0,onResult:(r,n)=>{n&&r.trim()&&(e(r.trim()),u())},onError:e=>{}});if(!o)return W(Zn,{disabled:!0,title:"ja"===n.language?"お使いのブラウザは音声入力をサポートしていません":"Voice input is not supported in your browser","aria-label":"ja"===n.language?"音声入力（サポートされていません）":"Voice input (not supported)",children:W(cr,{size:t})});return W(Yn,{children:[W(Xn,{onClick:()=>{r||(a?c():d())},disabled:r||i,isListening:a,isLoading:i,hasError:!!s,title:r?"ja"===n.language?"音声入力は無効です":"Voice input is disabled":a?"ja"===n.language?"音声入力を停止":"Stop voice input":"ja"===n.language?"音声入力を開始":"Start voice input","aria-label":r?"ja"===n.language?"音声入力（無効）":"Voice input (disabled)":a?"ja"===n.language?"音声入力を停止":"Stop voice input":"ja"===n.language?"音声入力を開始":"Start voice input",type:"button",children:[W(s?Ye:ur,{size:t}),a&&W(Kn,{volumeLevel:l,children:W(et,{children:[0,1,2,3,4,5,6,7,8,9,10,11].map(e=>W(rt,{angle:30*e,volumeLevel:l,delay:.1*e},e))})})]}),s&&W(nt,{children:"ja"===n.language?"音声入力エラー":"Voice input error"})]})}const Yn=Ee("div")`
  position: relative;
  display: inline-flex;
  align-items: center;
  z-index: 1;
`,Xn=Ee("button")`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--askdona-border);
  background: ${e=>e.hasError?"var(--askdona-error)":e.isListening?"var(--askdona-primary)":"var(--askdona-background)"};
  color: ${e=>e.hasError||e.isListening?"white":"var(--askdona-text-secondary)"};
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  z-index: 10;
  
  &:hover:not(:disabled) {
    background: ${e=>e.hasError?"var(--askdona-error)":e.isListening?"var(--askdona-primary-dark)":"var(--askdona-bg-hover)"};
    color: ${e=>e.hasError||e.isListening?"white":"var(--askdona-text)"};
    border-color: ${e=>e.hasError?"var(--askdona-error)":e.isListening?"var(--askdona-primary-dark)":"var(--askdona-primary)"};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${e=>e.isLoading&&"\n    opacity: 0.7;\n    cursor: wait;\n  "}
`,Zn=Ee("button")`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--askdona-border);
  background: var(--askdona-background);
  color: var(--askdona-text-secondary);
  cursor: not-allowed;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
`,Kn=Ee("div")`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(
    circle,
    rgba(29, 78, 216, 0.1) 0%,
    rgba(29, 78, 216, 0.05) 50%,
    transparent 70%
  );
  border: 3px solid rgba(29, 78, 216, 0.3);
  border-radius: 50%;
  z-index: 9999;
  pointer-events: none;
  animation: popIn 0.3s ease-out;
  backdrop-filter: blur(8px);
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(29, 78, 216, ${e=>Math.max(.1,Math.min(.4,e.volumeLevel/100))}) 0%,
      transparent 60%
    );
    animation: pulse 2s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 2px solid rgba(29, 78, 216, 0.6);
    animation: ripple 1.5s ease-out infinite;
  }
  
  @keyframes popIn {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.3;
    }
    50% {
      transform: translate(-50%, -50%) scale(${e=>1.1+e.volumeLevel/200});
      opacity: 0.6;
    }
  }
  
  @keyframes ripple {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.8;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.3);
      opacity: 0;
    }
  }
`,et=Ee("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
  height: 140px;
`,rt=Ee("div")`
  position: absolute;
  width: 4px;
  border-radius: 2px;
  background: linear-gradient(to top, #1D4ED8, #60A5FA);
  animation: waveAnimation 0.8s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  
  ${e=>{const r=60*Math.cos(e.angle*Math.PI/180),n=60*Math.sin(e.angle*Math.PI/180),t=Math.max(6,Math.min(30,6+e.volumeLevel/3));return`\n      height: ${t}px;\n      left: ${70+r-2}px;\n      top: ${70+n-t/2}px;\n      transform-origin: center bottom;\n    `}}
  
  @keyframes waveAnimation {
    0%, 100% {
      transform: scaleY(1);
      opacity: 0.7;
    }
    50% {
      transform: scaleY(${e=>1.5+e.volumeLevel/80});
      opacity: 1;
    }
  }
`,nt=Ee("div")`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  padding: 4px 8px;
  background: var(--askdona-error);
  color: white;
  font-size: 12px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  animation: fadeIn 0.2s ease-in-out forwards;
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: var(--askdona-error);
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`,tt={idle:0,initializing:10,thinking:22,searching:42,synthesizing:58,processing:72,streaming:88,answering:90,finalizing:96,completing:98,complete:100,error:100},ot=[{time:0,minProgress:5,label:"initializing"},{time:2e3,minProgress:12,label:"thinking"},{time:5e3,minProgress:20,label:"searching"},{time:9e3,minProgress:32,label:"synthesizing"},{time:13e3,minProgress:48,label:"processing"},{time:16e3,minProgress:64,label:"answering"},{time:18e3,minProgress:76,label:"finalizing"},{time:2e4,minProgress:88,label:"completing"},{time:21e3,minProgress:96,label:"complete"}],at=[{time:0,minProgress:5,label:"initializing"},{time:2e3,minProgress:12,label:"thinking"},{time:5e3,minProgress:20,label:"searching"},{time:9e3,minProgress:32,label:"synthesizing"},{time:13e3,minProgress:48,label:"processing"},{time:16e3,minProgress:64,label:"answering"},{time:29e3,minProgress:76,label:"finalizing"},{time:31e3,minProgress:88,label:"completing"},{time:32e3,minProgress:96,label:"complete"}];const it={ja:{thinking:"考え中...",searching:"データベースを検索中...",synthesizing:"情報を整理中...",answering:"推論中...",executing_functions:"ツールを実行中...",processing_function_results:"実行結果を処理中...",complete:"情報を統合中...",error:"エラーが発生しました"},en:{thinking:"Thinking...",searching:"Searching the database...",synthesizing:"Organizing information...",answering:"Reasoning...",executing_functions:"Running tools...",processing_function_results:"Processing tool results...",complete:"Synthesizing...",error:"An error occurred"}};function st({messages:e,isLoading:r,streamingContent:n,onSendMessage:t,error:o,config:a,currentState:i,chatMode:s="standard",onChatModeChange:l,sessionId:d,onFeedbackSubmit:c,showIntro:u,metadataFilters:h=null,onMetadataFiltersChange:p,currentMode:m,onModeSwitch:g,onClearChat:f}){const b=s||"standard",v="boost"===b,y="fast"===b,[x,w]=le(""),{progress:S,displayState:z}=function({isLoading:e,boostMode:r=!1,currentState:n}){const[t,o]=le(0),[a,i]=le(n||"idle"),s=ue(null),l=ue(0),d=ue(null),c=r?at:ot,u=c[c.length-1].time;return de(()=>{e&&!s.current?(s.current=Date.now(),l.current=0,o(c[0].minProgress)):e||(s.current=null,l.current=0,o(0),i("idle"),d.current&&cancelAnimationFrame(d.current))},[e,c]),de(()=>{if(!e||!s.current)return;const r=()=>{var t,a;const h=Date.now()-s.current;let p=0,m="processing";for(let e=c.length-1;e>=0;e--)if(h>=c[e].time){const r=c[e];if(e<c.length-1){const n=c[e+1],t=n.time-r.time,o=h-r.time,a=Math.min(o/t,1);p=r.minProgress+(n.minProgress-r.minProgress)*a}else p=r.minProgress;m=r.label||"processing";break}const g=98*function(e){return e<.5?2*e*e:(4-2*e)*e-1}(Math.min(h/u,1)),f=Math.max(p,g,l.current);let b=Math.min(f,98);const v=(m||"processing").toLowerCase(),y=(n||"").toLowerCase(),k=null!==(t=tt[v])&&void 0!==t?t:72,x=y?null!==(a=tt[y])&&void 0!==a?a:72:100,w=Math.min(k,x);b=Math.min(b,w),b>l.current&&(l.current=b,o(b)),i(m),e&&b<98&&(d.current=requestAnimationFrame(r))};return r(),()=>{d.current&&cancelAnimationFrame(d.current)}},[e,c,u,n]),de(()=>{if("answering"===n&&"answering"===a){const e=90;l.current<e&&(l.current=e,o(e))}},[n,a]),{progress:t,displayState:a,isProgressing:e}}({isLoading:r,boostMode:v,currentState:i}),[$,C]=le(0===e.length),[M,j]=le(!1),_=ue(null),I=void 0!==u?u:$;de(()=>{void 0===u&&e.length>0&&C(!1)},[e,u]);const A=e=>{const r=e||_.current;if(!r)return;r.style.height="auto";const n=r.scrollHeight;r.style.height=`${n}px`,r.style.lineHeight=n<=32?"32px":"1.5"};de(()=>{!r&&_.current&&"function"==typeof _.current.focus&&(_.current.focus(),_.current.style.minHeight="32px",A())},[r]);const D=e=>{null==e||e.preventDefault(),x.trim()&&!r&&(t(x.trim(),b,h),w(""))},T=e=>{if(!l)return;l(b===e?"standard":e)},R=a.exampleQuestions||("ja"===a.language?["RAGシステムについて教えてください","ドキュメントの検索方法は？","APIの使い方を教えてください"]:["What is RAG system?","How do I search documents?","How to use the API?"]);return W(lt,{children:[W(pt,{children:[I?W(mt,{children:[W(gt,{children:W(dr,{size:24,color:"white"})}),W(ft,{children:a.introTitle||("ja"===a.language?"こんにちは！":"Hi there!")}),a.introMessage?W(bt,{dangerouslySetInnerHTML:{L:q(a.introMessage)}}):W(bt,{children:"ja"===a.language?"AskDona AIアシスタントです。ドキュメントや情報について何でもお聞きください。":"I'm AskDona AI assistant. Ask me anything about your documents and information."}),W(vt,{children:[W(yt,{children:"ja"===a.language?"質問例":"Example Questions"}),W(kt,{children:R.map((e,r)=>W(xt,{onClick:()=>(e=>{t(e,b,h)})(e),children:e},r))})]})]}):W(Dr,{messages:e,isLoading:r,streamingContent:n,config:a,sessionId:d,onFeedbackSubmit:c}),r&&W(St,{children:[W(zt,{children:[W($t,{}),W(Ct,{children:n.trim()?"ja"===a.language?"リアルタイム応答中...":"Streaming response...":it[a.language||"ja"][z]||it[a.language||"ja"][i||""]||("ja"===a.language?"処理中...":"Processing...")})]}),!n.trim()&&W(Mt,{children:W(jt,{progress:S})})]}),o&&W(wt,{children:"ja"===a.language?`エラーが発生しました: ${o.message}`:`Error: ${o.message}`})]}),g&&W(dt,{children:W(ct,{children:[W(ut,{type:"button",active:"ask-ai"===(m||"ask-ai"),onClick:()=>g("ask-ai"),children:"ja"===a.language?"AIに質問":"Ask AI"}),W(ut,{type:"button",active:"search"===m,onClick:()=>g("search"),children:"ja"===a.language?"検索":"Search"}),f&&"ask-ai"===(m||"ask-ai")&&e.length>0&&W(ht,{type:"button",onClick:f,title:"ja"===a.language?"新しいセッションを開始":"Start new session","aria-label":"ja"===a.language?"新しいセッションを開始":"Start new session",disabled:r,children:W(pr,{size:14})})]})}),W(_t,{children:W(Tt,{boostMode:v,children:W(Rt,{children:[W(Ft,{children:[W(Nt,{ref:_,value:x,onChange:e=>{const r=e.target;w(r.value),A(r)},onKeyDown:e=>{M||(e=>{"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),D())})(e)},onCompositionStart:()=>{j(!0)},onCompositionEnd:()=>{j(!1)},placeholder:"ja"===a.language?"質問を入力してください... (Ctrl+Enter または ⌘+Enter で送信)":"Ask me anything... (Ctrl+Enter or ⌘+Enter to send)",disabled:r,rows:1,boostMode:v}),W(Gn,{onTranscript:e=>{w(r=>r+(r?" ":"")+e),setTimeout(()=>{A()},0)},disabled:r,config:a,size:16})]}),W(Et,{children:[W("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.chatflowId&&p&&W(Qn,{chatflowId:a.chatflowId,filters:h,onFiltersChange:p,disabled:r,language:a.language||"ja"}),a.allowBoostModeToggle&&l&&W(k,{children:[W(It,{onClick:()=>T("fast"),disabled:r,active:y,title:"ja"===a.language?"Fastモードは、思考プロセスを簡素化して素早く回答します。":"Fast mode generates quicker answers with lighter reasoning.",children:[W(At,{active:y,children:W(zr,{size:14})}),W(Dt,{children:"Fast"})]}),W(It,{onClick:()=>T("boost"),disabled:r,active:v,title:"ja"===a.language?"Boostモードは、より多角的な視点から多くの文書を分析して回答します。":"Boost mode analyzes more documents from multiple perspectives for comprehensive answers.",children:[W(At,{active:v,children:W(xr,{size:14})}),W(Dt,{children:"Boost"})]})]})]}),W(Ot,{onClick:D,disabled:!x.trim()||r,title:"ja"===a.language?"Ctrl+Enter または ⌘+Enter で送信":"Ctrl+Enter or ⌘+Enter to send",type:"button","data-askdona-button":"send","data-disabled":!x.trim()||r,children:W(Je,{size:16,color:(()=>{var e;if(!x.trim()||r){return(null===(e=getComputedStyle(document.documentElement).getPropertyValue("--askdona-text-secondary"))||void 0===e?void 0:e.trim())||"#6b6f8a"}return"white"})()})})]})]})})})]})}const lt=Ee("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,dt=Ee("div")`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem 0.25rem;
  flex-shrink: 0;
  align-items: center;
  /* tabs aligned left by default */
`,ct=Ee("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
`,ut=Ee("button")`
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.8125rem;
  transition: all 0.2s;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${e=>e.active?"var(--askdona-primary)":"var(--askdona-text-secondary)"};

  &:hover {
    color: ${e=>e.active?"var(--askdona-primary)":"var(--askdona-text)"};
    background: ${e=>e.active?"transparent":"var(--askdona-background)"};
  }

  ${e=>e.active&&"\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -0.35rem;\n      left: 0;\n      right: 0;\n      height: 2px;\n      background: var(--askdona-primary);\n    }\n  "}
`,ht=Ee("button")`
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
`,pt=Ee("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
`,mt=Ee("div")`
  text-align: center;
  padding: 2rem 0;
`,gt=Ee("div")`
  width: 3rem;
  height: 3rem;
  background: var(--askdona-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
`,ft=Ee("h3")`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--askdona-text);
`,bt=Ee("p")`
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  margin: 0 auto 2rem;
  max-width: 90%;
  line-height: 1.5;
`,vt=Ee("div")`
  margin-top: 2rem;
`,yt=Ee("h4")`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--askdona-text-secondary);
  margin: 0 0 1rem;
`,kt=Ee("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`,xt=Ee("button")`
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
`,wt=Ee("div")`
  background: rgba(239, 68, 68, 0.1);
  color: var(--askdona-error);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  font-size: 0.875rem;
`,St=Ee("div")`
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
`,zt=Ee("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,$t=Ee("div")`
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
`,Ct=Ee("span")`
  font-weight: 500;
`,Mt=Ee("div")`
  width: 30%;
  height: 6px;
  background: var(--askdona-border);
  border-radius: 3px;
  overflow: hidden;
`,jt=Ee("div")`
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
`,_t=Ee("div")`
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  flex-shrink: 0;
`,It=Ee("button")`
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
  
  ${({active:e})=>e?"\n      background: var(--askdona-primary);\n      color: white;\n      border-color: var(--askdona-primary);\n      \n      &:hover:not(:disabled) {\n        background: var(--askdona-primary-dark);\n        border-color: var(--askdona-primary-dark);\n      }\n    ":"\n      background: var(--askdona-background);\n      color: var(--askdona-text-secondary);\n      \n      &:hover:not(:disabled) {\n        background: var(--askdona-border);\n        color: var(--askdona-text);\n      }\n    "}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,At=Ee("span")`
  display: flex;
  align-items: center;
  opacity: ${({active:e})=>e?1:.8};
`,Dt=Ee("span")`
  font-weight: 500;
  font-size: 12px;
`,Tt=Ee("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  
  ${({boostMode:e})=>e&&"\n    &::before {\n      content: '';\n      position: absolute;\n      top: -2px;\n      left: -2px;\n      right: -2px;\n      bottom: -2px;\n      background: linear-gradient(135deg, var(--askdona-primary), var(--askdona-primary-light));\n      border-radius: 0.875rem;\n      z-index: -1;\n    }\n  "}
`,Rt=Ee("div")`
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
`,Ft=Ee("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`,Et=Ee("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
`,Ot=Ee("button")`
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
`,Nt=Ee("textarea")`
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
`;class Lt{static getStorageKey(){return"askdona_search_history"}static getAllHistory(){try{const e=localStorage.getItem(this.getStorageKey());if(!e)return[];const r=JSON.parse(e),n=Date.now()-2592e6;return r.filter(e=>e.timestamp>n)}catch(e){return[]}}static saveHistory(e){try{const r=e.slice(0,50);localStorage.setItem(this.getStorageKey(),JSON.stringify(r))}catch(e){}}static addSearchHistory(e,r,n,t){const o={id:`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,query:r.trim(),resultsCount:n,searchTime:t,timestamp:Date.now(),chatflowId:e},a=this.getAllHistory();a.unshift(o),this.saveHistory(a)}static getSearchHistory(e,r=20){return this.getAllHistory().filter(r=>r.chatflowId===e).slice(0,r)}static getRecentQueries(e,r=10,n=!0){const t=this.getSearchHistory(e,n?100:r);if(n){const e=new Set,n=[];for(const o of t){const t=o.query.toLowerCase();if(!e.has(t)&&(e.add(t),n.push(o.query),n.length>=r))break}return n}return t.map(e=>e.query)}static getPopularQueries(e,r=10){const n=this.getSearchHistory(e,1e3),t=new Map;return n.forEach(e=>{const r=e.query.toLowerCase();t.set(r,(t.get(r)||0)+1)}),Array.from(t.entries()).map(([e,r])=>{var t;return{query:(null===(t=n.find(r=>r.query.toLowerCase()===e))||void 0===t?void 0:t.query)||e,count:r}}).sort((e,r)=>r.count-e.count).slice(0,r)}static clearHistory(e){if(e){const r=this.getAllHistory().filter(r=>r.chatflowId!==e);this.saveHistory(r)}else localStorage.removeItem(this.getStorageKey())}static getHistoryStats(e){const r=this.getSearchHistory(e,1e3);if(0===r.length)return{totalSearches:0,uniqueQueries:0,avgResultsCount:0,avgSearchTime:0};const n=new Set(r.map(e=>e.query.toLowerCase())).size,t=r.reduce((e,r)=>e+r.resultsCount,0)/r.length,o=r.reduce((e,r)=>e+r.searchTime,0)/r.length;return{totalSearches:r.length,uniqueQueries:n,avgResultsCount:Math.round(t),avgSearchTime:Math.round(o)}}}function Pt({config:e,currentMode:r,onModeSwitch:n,onClearSearch:t}){var o,a;const[i,s]=le(""),[l,d]=le(null),[c,u]=le([]),[h,p]=le({}),[m,g]=le(!1),[f,b]=le(null),v=ue(null),[y,x]=le(!1),{recentQueries:w,addSearchHistory:S}=function(e,r={}){const{limit:n=20,uniqueQueries:t=!0,autoRefresh:o=!0}=r,[a,i]=le([]),[s,l]=le([]),d=pe(()=>{if(!e)return;const r=Lt.getRecentQueries(e,n,t);i(r);const o=Lt.getPopularQueries(e,10);l(o)},[e,n,t]);de(()=>{o&&d()},[o,d]);const c=pe((r,n,t)=>{e&&r.trim()&&(Lt.addSearchHistory(e,r,n,t),o&&d())},[e,o,d]),u=pe(()=>{e&&(Lt.clearHistory(e),i([]),l([]))},[e]),h=pe(()=>e?Lt.getHistoryStats(e):null,[e]);return{recentQueries:a,popularQueries:s,addSearchHistory:c,clearHistory:u,refresh:d,getStats:h}}(e.chatflowId),z=`askdona_widget_last_search_${e.chatflowId}`,$=pe((e,r)=>{try{const n={query:e,response:r,savedAt:Date.now()};localStorage.setItem(z,JSON.stringify(n))}catch(e){}},[z]),C=pe(()=>{try{const e=localStorage.getItem(z);if(!e)return null;const r=JSON.parse(e);return r&&"object"==typeof r?r:null}catch(e){return null}},[z]);de(()=>{v.current&&"function"==typeof v.current.focus&&v.current.focus();const e=C();e&&e.response&&(s(e.query||""),d(e.response),u(e.response.results||[]),p({}))},[C]);const M=pe(async r=>{var n;if(!r.trim())return d(null),void u([]);p({}),g(!0),b(null);const t=Date.now();try{const o={query:r,filters:{}},a=await async function(e,r){try{return await V(`/search/${e}`,{method:"POST",body:JSON.stringify(r)})}catch(e){throw e}}(e.chatflowId,o);d(a),u(a.results||[]),$(r,a);const i=Date.now()-t;S(r,(null===(n=a.results)||void 0===n?void 0:n.length)||0,i)}catch(e){b(e instanceof Error?e.message:"Unknown error occurred"),d(null),u([])}finally{g(!1)}},[e.chatflowId,S,$]),j=pe(()=>{i.trim()&&M(i.trim())},[i,M]),_=pe(e=>{y||"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),j())},[j,y]),I=e=>{const r=e||v.current;if(!r)return;r.style.height="auto";const n=r.scrollHeight;r.style.height=`${n}px`,r.style.lineHeight=n<=32?"32px":"1.5"},A=he(()=>{if(!c.length)return[];let e=[...c];return h.categories&&h.categories.length>0&&(e=e.filter(e=>{var r,n;const t=null===(r=e.fileMetadata)||void 0===r?void 0:r.category,o=null===(n=e.fileMetadata)||void 0===n?void 0:n.subCategory;return h.categories.includes(t||"")||h.categories.includes(o||"")})),h.fileTypes&&h.fileTypes.length>0&&(e=e.filter(e=>h.fileTypes.includes(e.fileFormat))),e},[c,h]),D=he(()=>A,[A]),T=pe(()=>{s(""),d(null),u([]),p({}),b(null);{const e=v.current;e&&"function"==typeof e.focus&&e.focus()}try{localStorage.removeItem(z)}catch(e){}t&&t()},[z,t]),R=e=>{p(e)},F=e=>{if(!i.trim())return W(k,{children:e});return W(k,{children:e.split(new RegExp(`(${i})`,"gi")).map((e,r)=>e.toLowerCase()===i.toLowerCase()?W(lo,{children:e},r):W("span",{children:e},r))})},E=he(()=>{if(!l)return[];return[{id:"all",label:"ja"===e.language?"すべて":"All",count:A.length},...l.facets.fileTypes.map(e=>({id:e.value,label:e.value.toUpperCase(),count:e.count}))]},[l,A.length,e.language]);return W(qt,{children:[l&&W(bo,{"data-search-results-header":!0,children:[W(vo,{children:["ja"===e.language?"検索結果":"Search Results",": ",A.length.toLocaleString()," ","ja"===e.language?"件":"items",(null===(o=h.categories)||void 0===o?void 0:o.length)||(null===(a=h.fileTypes)||void 0===a?void 0:a.length)?W(yo,{children:"ja"===e.language?"フィルタ適用済":"Filtered"}):null]}),W(ko,{children:["ja"===e.language?"検索時間":"Search time",": ",l.searchTime,"ms"]})]}),l&&E.length>1&&W(to,{children:E.map(e=>W(oo,{active:"all"===e.id||Boolean(h.fileTypes&&h.fileTypes.includes(e.id)),onClick:()=>{"all"===e.id?R({}):R({fileTypes:[e.id]})},children:[e.label,W(ao,{children:["(",e.count,")"]})]},e.id))}),W(io,{children:m?W(co,{children:[W(uo,{}),W(ho,{children:"ja"===e.language?"検索中...":"Searching..."})]}):f?W(xo,{children:[W(wo,{children:"⚠️"}),W(So,{children:"ja"===e.language?"検索エラー":"Search Error"}),W(zo,{children:f})]}):i&&0===A.length&&l?W(po,{children:"ja"===e.language?`"${i}" に一致する結果が見つかりませんでした`:`No results found for "${i}"`}):D.length>0?W(k,{children:W(so,{children:D.map(r=>W($o,{children:W(Co,{children:[W(Mo,{children:r.fileMetadata.url?W("a",{href:r.fileMetadata.url,target:"_blank",rel:"noopener noreferrer",children:F(r.fileMetadata.title||r.fileName)}):W("span",{children:F(r.fileMetadata.title||r.fileName)})}),W(jo,{children:[W("strong",{children:"ja"===e.language?"フォーマット:":"Format:"})," ",r.fileFormat.toUpperCase()]}),r.fileMetadata.body&&W(_o,{children:[W("strong",{children:"ja"===e.language?"本文:":"Content:"}),W(Io,{children:F(r.fileMetadata.body)})]})]})},r.fileId))})}):W(mo,{children:[W(go,{children:"🔍"}),W(fo,{children:"ja"===e.language?"検索キーワードを入力してください (Ctrl+Enter または ⌘+Enter で送信)":"Enter a search term to see results (Ctrl+Enter or ⌘+Enter to send)"})]})}),n&&W(Ht,{children:W(Bt,{children:[W(Jt,{type:"button",active:"ask-ai"===(r||"ask-ai"),onClick:()=>n("ask-ai"),children:"ja"===e.language?"AIに質問":"Ask AI"}),W(Jt,{type:"button",active:"search"===r,onClick:()=>n("search"),children:"ja"===e.language?"検索":"Search"}),"search"===r&&(i||l)&&W(Vt,{type:"button",onClick:T,title:"ja"===e.language?"検索をクリア":"Clear search","aria-label":"ja"===e.language?"検索をクリア":"Clear search",disabled:m,children:W(pr,{size:14})})]})}),W(ro,{children:W(Ut,{children:W(Wt,{children:[w.length>0&&W(Qt,{children:[W(Gt,{children:"ja"===e.language?"最近の検索":"Recent searches"}),W(Yt,{children:w.slice(0,8).map((e,r)=>W(Xt,{onClick:()=>{return s(r=e),void M(r);var r},children:e},r))})]}),W(Zt,{children:[W(eo,{ref:v,value:i,onInput:e=>{(e=>{const r=e.target.value;s(r)})(e),I(e.currentTarget)},onKeyDown:_,onCompositionStart:()=>x(!0),onCompositionEnd:()=>x(!1),placeholder:"ja"===e.language?"検索キーワードを入力... (Ctrl+Enter または ⌘+Enter で送信)":"Enter search keywords... (Ctrl+Enter or ⌘+Enter to send)",rows:1}),W(Gn,{onTranscript:e=>{s(r=>r+(r?" ":"")+e),setTimeout(()=>{I()},0)},disabled:m,config:e,size:16}),W(Kt,{onClick:j,"data-disabled":!i.trim()||m,title:"ja"===e.language?"検索 (Enter または Ctrl+Enter)":"Search (Enter or Ctrl+Enter)",type:"button",children:m?W(no,{}):W(Je,{size:16,color:"white"})})]})]})})})]})}const qt=Ee("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Ht=Ee("div")`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem 0.25rem; /* align underline position with ChatView */
  flex-shrink: 0;
  align-items: center; /* match ChatView */
  position: relative;
  z-index: 2; /* ensure tab underline renders above input separator */
`,Bt=Ee("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
`,Vt=Ee("button")`
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
`,Jt=Ee("button")`
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.8125rem;
  transition: all 0.2s;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${e=>e.active?"var(--askdona-primary)":"var(--askdona-text-secondary)"};

  &:hover {
    color: ${e=>e.active?"var(--askdona-primary)":"var(--askdona-text)"};
    background: ${e=>e.active?"transparent":"var(--askdona-background)"};
  }

  ${e=>e.active&&"\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -0.35rem;\n      left: 0;\n      right: 0;\n      height: 2px;\n      background: var(--askdona-primary);\n      z-index: 3; /* above any following horizontal rules/borders */\n    }\n  "}
`,Ut=Ee("div")`
  position: relative;
  width: 100%;
`,Wt=Ee("div")`
  position: relative;
  display: flex;
  flex-direction: column;
`,Qt=Ee("div")`
  padding: 0.25rem 0.25rem 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Gt=Ee("div")`
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.025em;
`,Yt=Ee("div")`
  display: flex;
  gap: 0.375rem;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
`,Xt=Ee("button")`
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
`,Zt=Ee("div")`
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
`,Kt=Ee("button")`
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
`,eo=Ee("textarea")`
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
`,ro=Ee("div")`
  position: relative;
  padding: 1rem 1.5rem; /* match ChatView InputArea spacing */
  border-top: 1px solid var(--askdona-border);
  flex-shrink: 0;
`,no=Ee("div")`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,to=Ee("div")`
  display: flex;
  gap: 1.5rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  overflow-x: auto;
  flex-shrink: 0;
  
  &::-webkit-scrollbar {
    height: 0;
  }
`,oo=Ee("button")`
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
  
  ${e=>e.active&&"\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -1px;\n      left: 0;\n      right: 0;\n      height: 2px;\n      background: var(--askdona-primary);\n    }\n  "}
`,ao=Ee("span")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin-left: 0.25rem;
`,io=Ee("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1rem 1.5rem;
`,so=Ee("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* tighter spacing between cards */
`,lo=Ee("span")`
  background: rgba(var(--askdona-primary-rgb), 0.2);
  padding: 0 0.125rem;
  border-radius: 0.125rem;
  font-weight: 500;
`,co=Ee("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`,uo=Ee("div")`
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--askdona-border);
  border-top-color: var(--askdona-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,ho=Ee("p")`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
`,po=Ee("div")`
  text-align: center;
  padding: 3rem;
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
`,mo=Ee("div")`
  text-align: center;
  padding: 3rem;
`,go=Ee("div")`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`,fo=Ee("p")`
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
  margin: 0;
`,bo=Ee("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  background: var(--askdona-surface);
`,vo=Ee("h3")`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: var(--askdona-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,yo=Ee("span")`
  background: var(--askdona-primary);
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 500;
`,ko=Ee("p")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin: 0;
`,xo=Ee("div")`
  text-align: center;
  padding: 3rem;
  color: var(--askdona-error);
`,wo=Ee("div")`
  font-size: 2rem;
  margin-bottom: 1rem;
`,So=Ee("h3")`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--askdona-error);
`,zo=Ee("p")`
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  margin: 0;
`,$o=Ee("div")`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 0; /* rely on ResultsList gap for spacing */
  transition: all 0.2s;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,Co=Ee("div")`
  padding: 0.75rem; /* slightly tighter */
  display: flex;
  flex-direction: column;
  gap: 0.375rem; /* slightly tighter */
`,Mo=Ee("h4")`
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
`,jo=Ee("p")`
  margin: 0; /* remove extra spacing */
  font-size: 0.75rem; /* smaller row text */
  color: var(--askdona-text-secondary); /* lighter overall */
  
  strong {
    color: var(--askdona-text-secondary); /* lighter label color */
    font-size: 0.6875rem; /* even smaller label text */
    opacity: 0.75; /* make label appear lighter */
  }
`,_o=Ee("div")`
  margin-top: 0.5rem;
  
  strong {
    display: block;
    margin-bottom: 0.25rem;
    color: #202124;
    font-size: 0.875rem;
  }
`,Io=Ee("p")`
  margin: 0;
  font-size: 0.875rem;
  color: #5f6368;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;function Ao({originalQuery:e,questions:r,onSubmit:n,onBack:t,isSubmitting:o=!1,error:a}){const[i,s]=le(new Array(r.length).fill("")),l=i.every(e=>e.trim().length>0),d=i.filter(e=>e.trim().length>0).length;return W(Do,{children:[W(To,{children:[W(Ro,{children:W(Ze,{size:24,color:"white"})}),W(Fo,{children:[W(Eo,{children:"🔍 Research Planning Questions"}),W(Oo,{children:"Help us understand what you're looking for"})]})]}),W(No,{children:[W(Lo,{children:"Your Research Query:"}),W(Po,{children:['"',e,'"']})]}),W(qo,{children:[W(Ho,{children:[W(Bo,{children:"Questions Completed"}),W(Vo,{children:[d,"/",r.length]})]}),W(Jo,{children:W(Uo,{progress:d/r.length*100})})]}),W(Wo,{children:[W(Qo,{children:"💡"}),W(Go,{children:"Please answer these questions to help us conduct more targeted and comprehensive research. The more specific your answers, the better the research results will be."})]}),W(Yo,{children:r.map((e,r)=>W(Xo,{children:[W(Zo,{children:W("span",{children:r+1})}),W(Ko,{children:[W(ea,{children:e}),W(ra,{value:i[r],onChange:e=>((e,r)=>{const n=[...i];n[e]=r,s(n)})(r,e.target.value),placeholder:"Please provide your answer here...",rows:3,disabled:o})]})]},r))}),a&&W(na,{children:[W(Ye,{size:16}),W("span",{children:a})]}),W(ta,{children:[t&&W(oa,{onClick:t,disabled:o,children:"← Back to Query"}),W(aa,{onClick:()=>{const e=r.map((e,r)=>({question:e,answer:i[r]||""}));n(e)},disabled:!l||o,children:W(k,o?{children:[W(lr,{size:16,className:"spin"}),"Starting Research..."]}:{children:[W(Ve,{size:16}),"Start Deep Research"]})})]}),W(ia,{children:[W(sa,{children:"💡"}),W(la,{children:[W(da,{children:"Tips for Better Results:"}),W(ca,{children:[W(ua,{children:"✅ Be specific about what aspects interest you most"}),W(ua,{children:"⏰ Mention any time periods or geographical regions"}),W(ua,{children:"🎯 Clarify if you need academic or practical information"}),W(ua,{children:"📊 Specify the depth of detail you're looking for"})]})]})]})]})}const Do=Ee("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
`,To=Ee("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
`,Ro=Ee("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Fo=Ee("div")`
  flex: 1;
`,Eo=Ee("h3")`
  margin: 0 0 0.25rem;
  font-size: 1.125rem;
  font-weight: 600;
`,Oo=Ee("p")`
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
`,No=Ee("div")`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  background: rgba(var(--askdona-primary-rgb, 67, 56, 202), 0.05);
`,Lo=Ee("h4")`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
`,Po=Ee("p")`
  margin: 0;
  font-style: italic;
  color: var(--askdona-text);
  line-height: 1.5;
`,qo=Ee("div")`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`,Ho=Ee("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,Bo=Ee("span")`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--askdona-text);
`,Vo=Ee("span")`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-primary);
`,Jo=Ee("div")`
  height: 0.5rem;
  background: var(--askdona-border);
  border-radius: 0.25rem;
  overflow: hidden;
`,Uo=Ee("div")`
  height: 100%;
  width: ${({progress:e})=>Math.min(Math.max(e,0),100)}%;
  background: var(--askdona-primary);
  border-radius: 0.25rem;
  transition: width 0.3s ease-in-out;
`,Wo=Ee("div")`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  background: rgba(59, 130, 246, 0.05);
`,Qo=Ee("div")`
  font-size: 1.25rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
`,Go=Ee("p")`
  margin: 0;
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  line-height: 1.5;
`,Yo=Ee("div")`
  padding: 1.5rem;
`,Xo=Ee("div")`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background: var(--askdona-background);
  transition: all 0.2s;

  &:hover {
    border-color: var(--askdona-primary);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    margin-bottom: 0;
  }
`,Zo=Ee("div")`
  width: 2rem;
  height: 2rem;
  background: var(--askdona-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
  flex-shrink: 0;
`,Ko=Ee("div")`
  flex: 1;
`,ea=Ee("p")`
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
  color: var(--askdona-text);
  line-height: 1.5;
`,ra=Ee("textarea")`
  width: 100%;
  min-height: 4rem;
  padding: 0.75rem;
  border: 1px solid var(--askdona-border);
  border-radius: 0.375rem;
  font-family: inherit;
  font-size: 0.875rem;
  color: var(--askdona-text);
  background: var(--askdona-background);
  resize: vertical;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: var(--askdona-primary);
    box-shadow: 0 0 0 3px rgba(var(--askdona-primary-rgb, 67, 56, 202), 0.1);
  }

  &::placeholder {
    color: var(--askdona-text-secondary);
  }

  &:disabled {
    background: var(--askdona-border);
    cursor: not-allowed;
  }
`,na=Ee("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  font-size: 0.875rem;
  border-top: 1px solid var(--askdona-border);
`,ta=Ee("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid var(--askdona-border);
`,oa=Ee("button")`
  padding: 0.75rem 1rem;
  background: transparent;
  color: var(--askdona-text-secondary);
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: var(--askdona-border);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,aa=Ee("button")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--askdona-primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: var(--askdona-primary-hover, #5b21b6);
    transform: scale(1.02);
  }

  &:disabled {
    background: var(--askdona-border);
    cursor: not-allowed;
    color: var(--askdona-text-secondary);
  }

  .spin {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,ia=Ee("div")`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(16, 185, 129, 0.05);
  border-top: 1px solid var(--askdona-border);
`,sa=Ee("div")`
  font-size: 1.25rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
`,la=Ee("div")`
  flex: 1;
`,da=Ee("p")`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text);
`,ca=Ee("div")`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,ua=Ee("div")`
  font-size: 0.8125rem;
  color: var(--askdona-text-secondary);
  line-height: 1.4;
`,ha={pending:{label:"Initializing",icon:er,description:"Setting up Deep Research...",color:"#6b7280"},"follow-up":{label:"Planning Research",icon:vr,description:"Analyzing your query and planning research approach",color:"#3b82f6"},"research-outline":{label:"Creating Outline",icon:Ke,description:"Building comprehensive research outline",color:"#3b82f6"},search:{label:"Searching Sources",icon:mr,description:"Finding and analyzing relevant sources",color:"#059669"},extraction:{label:"Extracting Information",icon:nr,description:"Extracting key information from sources",color:"#059669"},"new-angles":{label:"Exploring Angles",icon:Ue,description:"Discovering additional research angles",color:"#7c3aed"},synthesis:{label:"Synthesizing Results",icon:zr,description:"Combining findings into comprehensive report",color:"#dc2626"},processing:{label:"Processing",icon:or,description:"Processing your research request",color:"#3b82f6"},completed:{label:"Complete",icon:Xe,description:"Research completed successfully",color:"#059669"},failed:{label:"Failed",icon:wr,description:"Research failed",color:"#dc2626"}};function pa(e){const r=Math.floor(e/60),n=e%60;return 0===r?`${n}s`:0===n?`${r}m`:`${r}m ${n}s`}function ma(e){if(!e||e<=0)return"";const r=Math.floor(e/60),n=e%60;return 0===r?`~${n}s remaining`:n<30?`~${r}m remaining`:`~${r+1}m remaining`}function ga({job:e,isLoading:r,onCancel:n}){var t,o;const[a,i]=le(0);de(()=>{const r=new Date(e.startedAt).getTime(),n=()=>{const e=Date.now(),n=Math.floor((e-r)/1e3);i(n)};n();const t=setInterval(n,1e3);return()=>clearInterval(t)},[e.startedAt]);const s=(null===(t=e.progress)||void 0===t?void 0:t.stage)||e.status,l=ha[s]||ha.processing,d=(null===(o=e.progress)||void 0===o?void 0:o.progress)||0,c=l.icon;return W(fa,{children:[W(ba,{children:W(va,{children:[W(ya,{color:l.color,children:W(c,{size:20,color:"white"})}),W(ka,{children:[W(xa,{children:"🔍 Deep Research in Progress"}),W(wa,{children:[W(Sa,{children:[W(er,{size:14}),pa(a)]}),W(Sa,{children:["ID: ",e.jobId.slice(-8)]})]})]})]})}),W(za,{children:[W($a,{children:"Research Query:"}),W(Ca,{children:['"',e.query,'"']})]}),W(Ma,{children:[W(ja,{children:[W(_a,{color:l.color,children:W(c,{size:24})}),W(Ia,{children:[W(Aa,{color:l.color,children:l.label}),W(Da,{children:l.description})]})]}),"processing"===e.status&&W(Ta,{children:[W(Ra,{children:W(Fa,{progress:d,color:l.color})}),W(Ea,{children:[Math.round(d),"%"]})]})]}),e.progress&&W(Oa,{children:[e.progress.sources&&e.progress.sources>0&&W(Na,{children:[W(La,{children:W(nr,{size:16,color:"#6b7280"})}),W(Pa,{children:[W(qa,{children:"Sources Found"}),W(Ha,{children:e.progress.sources})]})]}),e.progress.estimatedTimeRemaining&&W(Na,{children:[W(La,{children:W(er,{size:16,color:"#6b7280"})}),W(Pa,{children:[W(qa,{children:"Estimated"}),W(Ha,{children:ma(e.progress.estimatedTimeRemaining)})]})]}),e.estimatedDuration&&W(Na,{children:[W(La,{children:W(vr,{size:16,color:"#6b7280"})}),W(Pa,{children:[W(qa,{children:"Expected Duration"}),W(Ha,{children:e.estimatedDuration})]})]}),e.creditsConsumed&&W(Na,{children:[W(La,{children:"💳"}),W(Pa,{children:[W(qa,{children:"Credits Used"}),W(Ha,{children:e.creditsConsumed})]})]})]}),"pending"===e.status&&W(Ba,{type:"info",children:[W(wr,{size:16}),"Your request is queued and will start processing shortly..."]}),"failed"===e.status&&e.error&&W(Ba,{type:"error",children:[W(wr,{size:16}),W("div",{children:[W("strong",{children:"Research Failed:"}),W("p",{children:e.error})]})]}),W(Va,{children:[n&&("pending"===e.status||"processing"===e.status)&&W(Ja,{onClick:n,disabled:r,children:[W(Sr,{size:16}),"Cancel Research"]}),W(Ua,{children:[W(Wa,{children:"💡 What's happening?"}),W(Qa,{children:[W(Ga,{children:"Deep Research Process:"}),W(Ya,{children:[W(Xa,{children:"📝 Creating a detailed research outline"}),W(Xa,{children:"🔍 Searching multiple databases and sources"}),W(Xa,{children:"📊 Extracting and analyzing key information"}),W(Xa,{children:"🔬 Exploring different research angles"}),W(Xa,{children:"⚡ Synthesizing findings into a final report"})]}),W(Za,{children:"This process typically takes 5-20 minutes depending on complexity."})]})]})]})]})}const fa=Ee("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
`,ba=Ee("div")`
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
`,va=Ee("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
`,ya=Ee("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ka=Ee("div")`
  flex: 1;
`,xa=Ee("h3")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`,wa=Ee("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  opacity: 0.9;
`,Sa=Ee("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,za=Ee("div")`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`,$a=Ee("h4")`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
`,Ca=Ee("p")`
  margin: 0;
  font-style: italic;
  color: var(--askdona-text);
  line-height: 1.5;
`,Ma=Ee("div")`
  padding: 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`,ja=Ee("div")`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`,_a=Ee("div")`
  width: 3rem;
  height: 3rem;
  background: ${({color:e})=>e};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`,Ia=Ee("div")`
  flex: 1;
`,Aa=Ee("h4")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({color:e})=>e};
`,Da=Ee("p")`
  margin: 0;
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
`,Ta=Ee("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Ra=Ee("div")`
  flex: 1;
  height: 0.5rem;
  background: var(--askdona-border);
  border-radius: 0.25rem;
  overflow: hidden;
`,Fa=Ee("div")`
  height: 100%;
  width: ${({progress:e})=>Math.min(Math.max(e,0),100)}%;
  background: ${({color:e})=>e};
  border-radius: 0.25rem;
  transition: width 0.3s ease-in-out;
`,Ea=Ee("span")`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text);
  min-width: 3rem;
  text-align: right;
`,Oa=Ee("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`,Na=Ee("div")`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
`,La=Ee("div")`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--askdona-border);
  border-radius: 0.375rem;
  flex-shrink: 0;
`,Pa=Ee("div")`
  flex: 1;
  min-width: 0;
`,qa=Ee("div")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin-bottom: 0.25rem;
`,Ha=Ee("div")`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text);
  word-break: break-word;
`,Ba=Ee("div")`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  font-size: 0.875rem;
  
  ${({type:e})=>"info"===e&&"\n    background: rgba(59, 130, 246, 0.1);\n    color: #1e40af;\n  "}
  
  ${({type:e})=>"error"===e&&"\n    background: rgba(239, 68, 68, 0.1);\n    color: #dc2626;\n  "}
`,Va=Ee("div")`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Ja=Ee("button")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  align-self: flex-start;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: #dc2626;
    transform: scale(1.02);
  }

  &:disabled {
    background: var(--askdona-border);
    cursor: not-allowed;
    color: var(--askdona-text-secondary);
  }
`,Ua=Ee("details")`
  font-size: 0.875rem;
`,Wa=Ee("summary")`
  cursor: pointer;
  font-weight: 600;
  color: var(--askdona-text);
  padding: 0.5rem;
  border: 1px solid var(--askdona-border);
  border-radius: 0.375rem;
  background: var(--askdona-background);
  transition: all 0.2s;
  
  &:hover {
    background: var(--askdona-border);
  }
`,Qa=Ee("div")`
  margin-top: 0.75rem;
  padding: 1rem;
  border: 1px solid var(--askdona-border);
  border-radius: 0.375rem;
  background: var(--askdona-background);
`,Ga=Ee("p")`
  margin: 0 0 0.75rem;
  font-weight: 600;
  color: var(--askdona-text);
`,Ya=Ee("ul")`
  margin: 0 0 1rem;
  padding-left: 1.5rem;
`,Xa=Ee("li")`
  margin: 0.5rem 0;
  color: var(--askdona-text);
`,Za=Ee("p")`
  margin: 0;
  font-size: 0.8125rem;
  color: var(--askdona-text-secondary);
  font-style: italic;
`;function Ka(e,r){if(!r)return"";const n=new Date(e).getTime(),t=new Date(r).getTime()-n,o=Math.floor(t/1e3),a=Math.floor(o/60),i=o%60;return 0===a?`${i}s`:`${a}m ${i}s`}function ei({sources:e}){const[r,n]=le(new Set);return e&&0!==e.length?W(Fi,{children:[W(Ei,{children:W(Oi,{children:["📚 Sources (",e.length,")"]})}),e.map((e,t)=>W(Ni,{children:[W(Li,{onClick:()=>(e=>{const t=new Set(r);t.has(e)?t.delete(e):t.add(e),n(t)})(t),children:[W(Pi,{children:[W(qi,{href:e.url,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:[W(tr,{size:14}),e.title]}),e.domain&&W(Hi,{children:[W(ir,{size:12}),e.domain]})]}),W(Bi,{children:r.has(t)?W(Qe,{size:16}):W(Ge,{size:16})})]}),r.has(t)&&e.excerpt&&W(Vi,{children:[W(Ji,{children:['"',e.excerpt,'"']}),e.relevance&&W(Ui,{children:[W(fr,{size:12}),"Relevance: ",Math.round(100*e.relevance),"%"]})]})]},t))]}):W(Xi,{children:[W(Zi,{children:W(or,{size:20,color:"#6b7280"})}),W(Ki,{children:"No sources were referenced in this research."})]})}function ri({content:e}){return W(_i,{children:(r=e,r.split("\n").map((e,r)=>{if(""===e.trim())return null;if(e.startsWith("# "))return W(Ii,{children:e.substring(2)},r);if(e.startsWith("## "))return W(Ai,{children:e.substring(3)},r);if(e.startsWith("### "))return W(Di,{children:e.substring(4)},r);if(e.startsWith("- ")||e.startsWith("* "))return W(Ri,{children:e.substring(2)},r);if(/^\d+\.\s/.test(e)){const n=e.replace(/^\d+\.\s/,"");return W(Ri,{children:n},r)}return W(Ti,{children:e},r)}).filter(Boolean))});var r}function ni({job:e,onNewResearch:r,onClose:n}){const[t,o]=le("results"),a=e.results,i=(null==a?void 0:a.content)||(null==a?void 0:a.summary)||(null==a?void 0:a.report),s=(null==a?void 0:a.sources)||[],l=(null==a?void 0:a.metadata)||{};return W(ti,{children:[W(oi,{children:W(ai,{children:[W(ii,{children:[W(si,{children:W(Xe,{size:24,color:"white"})}),W(li,{children:[W(di,{children:"✅ Deep Research Complete"}),W(ci,{children:[e.completedAt&&W(ui,{children:[W(er,{size:14}),Ka(e.startedAt,e.completedAt)]}),e.creditsConsumed&&W(ui,{children:["💳 ",e.creditsConsumed," credits used"]})]})]})]}),n&&W(hi,{onClick:n,children:W(Sr,{size:20})})]})}),W(pi,{children:[W(mi,{children:"Research Query:"}),W(gi,{children:['"',e.query,'"']})]}),W(fi,{children:[W(bi,{active:"results"===t,onClick:()=>o("results"),children:"📄 Results"}),W(bi,{active:"sources"===t,onClick:()=>o("sources"),children:["📚 Sources ",s.length>0&&`(${s.length})`]}),W(bi,{active:"details"===t,onClick:()=>o("details"),children:"ℹ️ Details"})]}),W(vi,{children:["results"===t&&W(yi,{children:i?W(k,{children:[a.summary&&W(ki,{children:[W(Si,{children:"📋 Executive Summary"}),W(zi,{children:a.summary})]}),a.content&&W(xi,{children:[W(Si,{children:"📄 Detailed Report"}),W($i,{children:W(ri,{content:a.content})})]}),a.report&&!a.content&&W(xi,{children:[W(Si,{children:"📄 Research Report"}),W($i,{children:W(ri,{content:a.report})})]}),a.key_findings&&W(wi,{children:[W(Si,{children:"🔑 Key Findings"}),W(Ci,{children:W(Mi,{children:a.key_findings.map((e,r)=>W(ji,{children:e},r))})})]})]}):W(Wi,{children:[W(Qi,{children:W(or,{size:24,color:"#6b7280"})}),W(Gi,{children:"No Results Available"}),W(Yi,{children:"No detailed results are available for this research. This might be due to an error during processing or the research being incomplete."})]})}),"sources"===t&&W(ei,{sources:s}),"details"===t&&W(es,{children:[W(rs,{children:[W(Si,{children:"🔍 Research Details"}),W(ns,{children:[W(ts,{children:[W(os,{children:"Job ID:"}),W(as,{children:e.jobId})]}),W(ts,{children:[W(os,{children:"Started:"}),W(as,{children:new Date(e.startedAt).toLocaleString()})]}),e.completedAt&&W(ts,{children:[W(os,{children:"Completed:"}),W(as,{children:new Date(e.completedAt).toLocaleString()})]}),W(ts,{children:[W(os,{children:"Duration:"}),W(as,{children:Ka(e.startedAt,e.completedAt)})]}),e.creditsConsumed&&W(ts,{children:[W(os,{children:"Credits Used:"}),W(as,{children:e.creditsConsumed})]}),W(ts,{children:[W(os,{children:"Sources Found:"}),W(as,{children:s.length})]})]})]}),l&&Object.keys(l).length>0&&W(is,{children:[W(Si,{children:"📊 Metadata"}),W(ss,{children:W("pre",{children:JSON.stringify(l,null,2)})})]})]})]}),W(ls,{children:[W(ds,{children:W(us,{onClick:r,children:[W(mr,{size:16}),"New Research"]})}),W(cs,{children:[W(hs,{onClick:async()=>{try{navigator.share&&i&&await navigator.share({title:"Deep Research Results",text:e.query,url:window.location.href})}catch(e){}},children:[W(gr,{size:16}),"Share"]}),W(hs,{onClick:async()=>{var r;try{const n=`Deep Research Results\n\nQuery: ${e.query}\n\n${i?a.content||a.report||a.summary:"No content available"}`;await(null===(r=navigator.clipboard)||void 0===r?void 0:r.writeText(n))}catch(e){}},children:[W(rr,{size:16}),"Copy"]})]})]})]})}const ti=Ee("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
`,oi=Ee("div")`
  padding: 1.5rem;
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
`,ai=Ee("div")`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,ii=Ee("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`,si=Ee("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,li=Ee("div")`
  flex: 1;
`,di=Ee("h3")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`,ci=Ee("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  opacity: 0.9;
`,ui=Ee("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,hi=Ee("button")`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`,pi=Ee("div")`
  padding: 1.25rem 1.5rem;
  background: var(--askdona-background);
  border-bottom: 1px solid var(--askdona-border);
`,mi=Ee("h4")`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
`,gi=Ee("p")`
  margin: 0;
  font-style: italic;
  color: var(--askdona-text);
  line-height: 1.5;
`,fi=Ee("div")`
  display: flex;
  background: var(--askdona-background);
  border-bottom: 1px solid var(--askdona-border);
`,bi=Ee("button")`
  flex: 1;
  padding: 0.875rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({active:e})=>e?"var(--askdona-primary)":"var(--askdona-text-secondary)"};
  border-bottom: 2px solid ${({active:e})=>e?"var(--askdona-primary)":"transparent"};
  transition: all 0.2s;

  &:hover {
    background: var(--askdona-border);
    color: var(--askdona-text);
  }
`,vi=Ee("div")`
  min-height: 300px;
`,yi=Ee("div")`
  padding: 1.5rem;
`,ki=Ee("div")`
  margin-bottom: 2rem;
`,xi=Ee("div")`
  margin-bottom: 2rem;
`,wi=Ee("div")`
  margin-bottom: 2rem;
`,Si=Ee("h4")`
  margin: 0 0 1rem;
  color: var(--askdona-text);
  font-size: 1rem;
  font-weight: 600;
`,zi=Ee("div")`
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;
  color: var(--askdona-text);
  line-height: 1.6;
`,$i=Ee("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
  padding: 1.5rem;
`,Ci=Ee("div")`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;
`,Mi=Ee("ul")`
  margin: 0;
  padding-left: 1.5rem;
`,ji=Ee("li")`
  margin: 0.5rem 0;
  color: var(--askdona-text);
  line-height: 1.5;
`,_i=Ee("div")`
  color: var(--askdona-text);
`,Ii=Ee("h2")`
  color: var(--askdona-text);
  font-size: 1.25rem;
  margin: 1.5rem 0 1rem 0;
  font-weight: 600;
`,Ai=Ee("h3")`
  color: var(--askdona-text);
  font-size: 1.125rem;
  margin: 1.25rem 0 0.75rem 0;
  font-weight: 600;
`,Di=Ee("h4")`
  color: var(--askdona-text-secondary);
  font-size: 1rem;
  margin: 1rem 0 0.5rem 0;
  font-weight: 600;
`,Ti=Ee("p")`
  margin: 0 0 1rem;
  line-height: 1.6;
`,Ri=Ee("li")`
  margin: 0.5rem 0;
  line-height: 1.6;
`,Fi=Ee("div")`
  padding: 1.5rem;
`,Ei=Ee("div")`
  margin-bottom: 1rem;
`,Oi=Ee("h4")`
  margin: 0;
  color: var(--askdona-text);
  font-size: 1rem;
  font-weight: 600;
`,Ni=Ee("div")`
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  overflow: hidden;
`,Li=Ee("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: var(--askdona-border);
  }
`,Pi=Ee("div")`
  flex: 1;
  min-width: 0;
`,qi=Ee("a")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--askdona-primary);
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 0.25rem;
  word-break: break-word;

  &:hover {
    text-decoration: underline;
  }
`,Hi=Ee("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
`,Bi=Ee("div")`
  color: var(--askdona-text-secondary);
  padding: 0.25rem;
`,Vi=Ee("div")`
  padding: 0 1rem 1rem 1rem;
  border-top: 1px solid var(--askdona-border);
  background: rgba(243, 244, 246, 0.5);
`,Ji=Ee("p")`
  margin: 0.75rem 0;
  font-style: italic;
  color: var(--askdona-text);
  font-size: 0.875rem;
  line-height: 1.5;
`,Ui=Ee("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
`,Wi=Ee("div")`
  text-align: center;
  padding: 3rem 2rem;
`,Qi=Ee("div")`
  margin: 0 auto 1rem;
  width: fit-content;
`,Gi=Ee("h4")`
  margin: 0 0 0.5rem;
  color: var(--askdona-text);
  font-size: 1.125rem;
`,Yi=Ee("p")`
  margin: 0;
  color: var(--askdona-text-secondary);
  line-height: 1.5;
`,Xi=Ee("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
`,Zi=Ee("div")`
  margin-bottom: 0.75rem;
`,Ki=Ee("p")`
  margin: 0;
  color: var(--askdona-text-secondary);
`,es=Ee("div")`
  padding: 1.5rem;
`,rs=Ee("div")`
  margin-bottom: 2rem;
`,ns=Ee("div")`
  display: grid;
  gap: 0.75rem;
`,ts=Ee("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--askdona-border);

  &:last-child {
    border-bottom: none;
  }
`,os=Ee("span")`
  font-weight: 500;
  color: var(--askdona-text-secondary);
`,as=Ee("span")`
  color: var(--askdona-text);
  font-weight: 500;
  word-break: break-word;
`,is=Ee("div")`
  margin-top: 2rem;
`,ss=Ee("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-x: auto;

  pre {
    margin: 0;
    font-size: 0.75rem;
    color: var(--askdona-text);
  }
`,ls=Ee("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-top: 1px solid var(--askdona-border);
  background: var(--askdona-background);
`,ds=Ee("div")`
  display: flex;
  gap: 0.75rem;
`,cs=Ee("div")`
  display: flex;
  gap: 0.5rem;
`,us=Ee("button")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--askdona-primary);
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--askdona-primary-dark);
    transform: scale(1.02);
  }
`,hs=Ee("button")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--askdona-background);
  color: var(--askdona-text-secondary);
  border: 1px solid var(--askdona-border);
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.8125rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--askdona-border);
    color: var(--askdona-text);
  }
`;function ps(e){const[r,n]=le(null),[t,o]=le(!0),[a,i]=le(null),s=pe(e=>{try{const r=e.split(".");if(3!==r.length)return null;return JSON.parse(atob(r[1]))}catch(e){return null}},[]),l=pe(async()=>{i(null);try{const r=window.location.hostname+(window.location.port?":"+window.location.port:""),t=await fetch(`${B}/session/init/${e}`,{method:"POST",headers:{"Content-Type":"application/json",Origin:window.location.origin,"X-Widget-Version":"1.0.0"},body:JSON.stringify({domain:r,timestamp:Date.now(),userAgent:navigator.userAgent})});if(!t.ok){const e=await t.json().catch(()=>({message:"Session initialization failed"}));throw new Error(e.message||`HTTP ${t.status}`)}const{secureSessionToken:o}=await t.json();if(!o)throw new Error("No session token received");const a=s(o);if(!a)throw new Error("Invalid session token format");const i=`askdona_secure_session_${e}`;localStorage.setItem(i,o);const l={token:o,isValid:!0,expiresAt:1e3*a.exp,sessionId:a.sessionId,chatflowId:a.chatflowId};return n(l),o}catch(e){throw i(e.message),e}},[e,s]),d=pe(async()=>{o(!0),i(null);try{const r=`askdona_secure_session_${e}`,t=localStorage.getItem(r);if(t){const o=s(t),a=Date.now();if(o&&1e3*o.exp>a&&o.chatflowId===e){const e={token:t,isValid:!0,expiresAt:1e3*o.exp,sessionId:o.sessionId,chatflowId:o.chatflowId};return void n(e)}localStorage.removeItem(r)}await l()}catch(e){i(e.message)}finally{o(!1)}},[e,s,l]),c=pe(async()=>{if(!r)return;if(r.expiresAt-Date.now()<18e5)try{await l()}catch(e){}},[r,l]),u=pe(async()=>{if(!r||!r.isValid)return null;if(r.expiresAt<=Date.now())try{return await l(),(null==r?void 0:r.token)||null}catch(e){return null}return await c(),r.token},[r,l,c]),h=pe(()=>{const r=`askdona_secure_session_${e}`;localStorage.removeItem(r),n(null),i(null)},[e]);return de(()=>{e&&d()},[e,d]),de(()=>{if(!r)return;const e=setInterval(()=>{c()},3e5);return()=>clearInterval(e)},[r,c]),{session:r,isInitializing:t,error:a,initializeSession:l,getValidToken:u,clearSession:h,refreshSessionIfNeeded:c}}function ms(){try{const e={userAgent:navigator.userAgent||"",language:navigator.language||"",screenResolution:`${screen.width}x${screen.height}`,timezoneOffset:(new Date).getTimezoneOffset(),platform:navigator.platform||"",cookieEnabled:navigator.cookieEnabled,localStorageEnabled:(()=>{try{const e="__localStorage_test__";return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}})()},r=document.createElement("canvas"),n=r.getContext("2d");let t="";n&&(r.width=200,r.height=50,n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(125,1,62,20),n.fillStyle="#069",n.font="11pt Arial",n.fillText("AskDona Browser Fingerprint 🔍",2,15),n.fillStyle="rgba(102, 204, 0, 0.7)",n.font="18pt Arial",n.fillText("Deep Research",4,45),t=r.toDataURL().substring(0,100));const o=[e.userAgent,e.language,e.screenResolution,e.timezoneOffset.toString(),e.platform,e.cookieEnabled.toString(),e.localStorageEnabled.toString(),t].join("|");let a=0;for(let e=0;e<o.length;e++){a=(a<<5)-a+o.charCodeAt(e),a&=a}return`fp_${Math.abs(a).toString(36).padStart(8,"0")+Date.now().toString(36).slice(-4)}`}catch(e){return`fp_${Math.random().toString(36).substring(2,15)}`}}class gs{constructor(){this.browserFingerprint=this.getOrCreateFingerprint()}getOrCreateFingerprint(){const e="askdona_browser_fingerprint";try{let r=localStorage.getItem(e);return r||(r=ms(),localStorage.setItem(e,r)),r}catch(e){return ms()}}getBrowserFingerprint(){return this.browserFingerprint}checkLocalLimits(e,r){const n=[];let t,o=!0;for(const a of r){const r=this.checkSingleLocalLimit(e,a);n.push(r),!r.allowed&&o&&(o=!1,t=r.limitType)}return{allowed:o,blockedBy:t,localChecks:n}}checkSingleLocalLimit(e,r){const n=this.getLimitKey(r),t=`${gs.STORAGE_PREFIX}${e}_${n}`;let o=this.getLimitData(t);new Date(o.resetTime)<=new Date&&(o=this.createNewLimitPeriod(r),this.saveLimitData(t,o));const a=o.count<r.limit;return{limitType:this.getLimitTypeString(r),allowed:a,currentCount:o.count,maxCount:r.limit,resetTime:new Date(o.resetTime)}}recordLocalUsage(e,r){for(const n of r){const r=this.getLimitKey(n),t=`${gs.STORAGE_PREFIX}${e}_${r}`,o=this.getLimitData(t);o.count++,this.saveLimitData(t,o)}}getTodayUsage(e){const r=`${gs.STORAGE_PREFIX}${e}_daily`,n=this.getLimitData(r);return new Date(n.resetTime)>new Date?n.count:0}clearLocalLimits(e){try{const r=[];for(let n=0;n<localStorage.length;n++){const t=localStorage.key(n);t&&t.startsWith(`${gs.STORAGE_PREFIX}${e}_`)&&r.push(t)}r.forEach(e=>localStorage.removeItem(e))}catch(e){}}getLimitData(e){try{const r=localStorage.getItem(e);if(r)return JSON.parse(r)}catch(e){}return{count:0,resetTime:new Date(Date.now()+864e5).toISOString(),period:"daily"}}saveLimitData(e,r){try{localStorage.setItem(e,JSON.stringify(r))}catch(e){}}createNewLimitPeriod(e){return{count:0,resetTime:this.calculateNextLocalReset(e).toISOString(),period:this.getLimitKey(e)}}calculateNextLocalReset(e){const r=new Date,n=new Date(r);switch(e.period){case"daily":n.setDate(r.getDate()+1),n.setHours(0,0,0,0);break;case"weekly":const t=(8-r.getDay())%7||7;n.setDate(r.getDate()+t),n.setHours(0,0,0,0);break;case"monthly":n.setMonth(r.getMonth()+1,1),n.setHours(0,0,0,0);break;case"yearly":n.setFullYear(r.getFullYear()+1,0,1),n.setHours(0,0,0,0);break;default:e.customDays&&(n.setDate(r.getDate()+e.customDays),n.setHours(0,0,0,0))}return n}getLimitKey(e){return e.customDays?`custom_${e.customDays}d`:e.period}getLimitTypeString(e){return e.customDays?`custom-${e.customDays}d`:e.period}}function fs({chatflowId:e,onClose:r,isVisible:n=!0}){const{config:t,currentJob:o,isLoading:a,error:i,isInitializing:s,fetchConfig:l,cancelJob:d,resetJob:c,cleanup:u}=function(e){const{session:r,isInitializing:n}=ps(e),[t,o]=le(null),[a,i]=le(null),[s,l]=le(!1),[d,c]=le(null),u=ue(new gs),h=ue(null),p=ue(null),m=pe(async(t=!1)=>{if(!(null==r?void 0:r.token)||n)return null;if(!t&&p.current&&Date.now()-p.current.timestamp<3e4)return o(p.current.data),p.current.data;const a=u.current.getBrowserFingerprint();c(null);try{const n=await fetch(`${B}/deep-research/config/${e}`,{method:"POST",headers:{"Content-Type":"application/json","X-Widget-Version":"1.0.0"},body:JSON.stringify({secureSessionToken:r.token,browserFingerprint:a})});if(!n.ok){const e=await n.json().catch(()=>({error:"Request failed"}));throw new Error(e.error||`HTTP ${n.status}`)}const t=await n.json();return p.current={data:t,timestamp:Date.now()},o(t),t}catch(e){c(e.message);const r={isEnabled:!1,canExecute:!1,credits:null,sessionLimit:{allowed:!1,currentCount:0,maxCount:0,resetTime:""},browserLimits:{allowed:!1,limits:[]},config:{maxQueryLength:500,estimatedDurationMinutes:15},error:e.message};return o(r),r}},[null==r?void 0:r.token,e,n]),g=pe(async n=>{if(!(null==r?void 0:r.token)||!(null==t?void 0:t.canExecute))throw new Error("Cannot execute Deep Research - invalid session or insufficient permissions");if(0===n.trim().length)throw new Error("Query cannot be empty");if(n.length>t.config.maxQueryLength)throw new Error(`Query too long. Maximum ${t.config.maxQueryLength} characters allowed.`);l(!0),c(null);const o=u.current.getBrowserFingerprint();try{if(t.browserLimits.limits.length>0){const r=t.browserLimits.limits.map(e=>({period:e.limitType.replace("custom-","").replace("d",""),limit:e.maxCount,customDays:e.limitType.startsWith("custom-")?parseInt(e.limitType.replace("custom-","").replace("d","")):void 0})),n=u.current.checkLocalLimits(e,r);if(!n.allowed)throw new Error(`Browser limit exceeded: ${n.blockedBy}`)}const a=await fetch(`${B}/deep-research/start`,{method:"POST",headers:{"Content-Type":"application/json","X-Widget-Version":"1.0.0"},body:JSON.stringify({secureSessionToken:r.token,query:n.trim(),chatflowId:e,browserFingerprint:o})});if(!a.ok){const e=await a.json().catch(()=>({error:"Request failed"}));throw new Error(e.error||`HTTP ${a.status}`)}const s=await a.json();if(t.browserLimits.limits.length>0){const r=t.browserLimits.limits.map(e=>({period:e.limitType.replace("custom-","").replace("d",""),limit:e.maxCount}));u.current.recordLocalUsage(e,r)}const l={jobId:s.jobId,status:"pending",query:n.trim(),startedAt:(new Date).toISOString(),creditsConsumed:s.creditsConsumed,estimatedDuration:s.estimatedDuration};return i(l),f(s.jobId),setTimeout(()=>m(!0),1e3),s}catch(e){throw l(!1),c(e.message),e}},[null==r?void 0:r.token,t,e,m]),f=pe(e=>{h.current&&h.current.close();const r=new EventSource(`${B}/deep-research/stream/${e}`);h.current=r,r.addEventListener("deep-research-start",e=>{try{JSON.parse(e.data),i(e=>e?{...e,status:"processing"}:null)}catch(e){}}),r.addEventListener("deep-research-progress",e=>{try{const r=JSON.parse(e.data);i(e=>e?{...e,status:"processing",progress:{stage:r.stage||"processing",progress:r.progress||0,timestamp:r.timestamp||(new Date).toISOString(),estimatedTimeRemaining:r.estimatedTimeRemaining,sources:r.sources}}:null)}catch(e){}}),r.addEventListener("deep-research-complete",e=>{try{const n=JSON.parse(e.data);i(e=>e?{...e,status:"completed",results:n.results,completedAt:(new Date).toISOString(),progress:{stage:"completed",progress:100,timestamp:(new Date).toISOString()}}:null),l(!1),r.close(),setTimeout(()=>m(!0),1e3)}catch(e){}}),r.addEventListener("deep-research-error",e=>{try{const n=JSON.parse(e.data);i(e=>e?{...e,status:"failed",error:n.error||"Deep Research failed",completedAt:(new Date).toISOString()}:null),l(!1),c(n.error||"Deep Research failed"),r.close()}catch(e){}}),r.onerror=e=>{r.readyState===EventSource.CLOSED&&(l(!1),setTimeout(()=>{a&&"processing"===a.status&&c("Connection lost. Please check the result later or try again.")},5e3))}},[a]),b=pe(async()=>{if(a&&(null==r?void 0:r.token))try{h.current&&(h.current.close(),h.current=null),i(e=>e?{...e,status:"cancelled",completedAt:(new Date).toISOString()}:null),l(!1)}catch(e){}},[a,null==r?void 0:r.token]),v=pe(()=>{h.current&&(h.current.close(),h.current=null),i(null),l(!1),c(null),p.current=null},[]),y=pe(()=>{h.current&&(h.current.close(),h.current=null)},[]);return de(()=>{!(null==r?void 0:r.token)||n||t||m()},[null==r?void 0:r.token,n,t,m]),de(()=>y,[y]),{config:t,currentJob:a,isLoading:s,error:d,isInitializing:n,fetchConfig:m,startDeepResearch:g,cancelJob:b,resetJob:v,cleanup:y,browserFingerprint:u.current.getBrowserFingerprint()}}(e),[h,p]=le(""),[m,g]=le([]),[f,b]=le(null),[v,y]=le(null),[k,x]=le(!1),[w,S]=le(!1),[z,$]=le(null);de(()=>{!n||t||s||l()},[n,t,s,l]),de(()=>u,[u]);const C=e=>{const r=new EventSource(`${B}/deep-research/stream/${e}`);r.addEventListener("deep-research-start",e=>{try{JSON.parse(e.data);y(e=>e?{...e,status:"processing"}:null)}catch(e){}}),r.addEventListener("deep-research-progress",e=>{try{const r=JSON.parse(e.data);y(e=>e?{...e,status:"processing",progress:{stage:r.stage||"processing",progress:r.progress||0,timestamp:r.timestamp||(new Date).toISOString(),estimatedTimeRemaining:r.estimatedTimeRemaining,sources:r.sources}}:null)}catch(e){}}),r.addEventListener("deep-research-complete",e=>{try{const n=JSON.parse(e.data);y(e=>e?{...e,status:"completed",results:n.results,completedAt:(new Date).toISOString(),progress:{stage:"completed",progress:100,timestamp:(new Date).toISOString()}}:null),r.close(),setTimeout(()=>l(!0),1e3)}catch(e){}}),r.addEventListener("deep-research-error",e=>{try{const n=JSON.parse(e.data);y(e=>e?{...e,status:"failed",error:n.error||"Deep Research failed",completedAt:(new Date).toISOString()}:null),$(n.error||"Deep Research failed"),r.close()}catch(e){}}),r.onerror=e=>{r.readyState===EventSource.CLOSED&&setTimeout(()=>{v&&"processing"===v.status&&$("Connection lost. Please check the result later or try again.")},5e3)}},M=()=>{"questionnaire"===A?(p(""),g([]),b(null),$(null)):"progress"!==A&&"results"!==A||j()},j=()=>{p(""),g([]),b(null),y(null),$(null),c(),setTimeout(()=>l(!0),500)},_=z||i,I=v||o;let A;return A=s&&!t?"loading":"completed"===(null==I?void 0:I.status)?"results":!I||"pending"!==I.status&&"processing"!==I.status?"failed"===(null==I?void 0:I.status)?"error":m.length>0&&h?"questionnaire":"trigger":"progress",W(bs,{children:[W(vs,{children:["loading"===A&&W(ys,{children:[W(ks,{children:W(mr,{size:24,color:"white"})}),W(xs,{children:[W(ws,{children:"🔍 Loading Deep Research"}),W(Ss,{children:"Setting up your research environment..."})]})]}),"trigger"===A&&W(Ts,{config:t,onSubmit:async e=>{if(e.trim()){p(e.trim()),$(null),x(!0);try{const r=await async function(e){try{return await V("/deep-research/follow-up",{method:"POST",body:JSON.stringify({query:e})})}catch(e){return{success:!1,questions:[],error:e.message}}}(e.trim());if(!r.success||!r.questions||0===r.questions.length)throw new Error(r.error||"No follow-up questions generated");g(r.questions),b(r.metadata)}catch(e){$(e.message||"Failed to generate follow-up questions")}finally{x(!1)}}},onRefreshConfig:()=>{$(null),l(!0)},isSubmitting:k,error:_||void 0}),"questionnaire"===A&&W(Ao,{originalQuery:h,questions:m,onSubmit:async r=>{if(h&&0!==r.length){$(null),S(!0);try{const n=new gs,t=n.getBrowserFingerprint(),o=n.getBrowserFingerprint(),a=await async function(e){try{return await V("/deep-research/start-with-answers",{method:"POST",body:JSON.stringify(e)})}catch(e){throw e}}({chatflowId:e,originalQuery:h,questionnaireResponses:r,sessionId:t,fingerprint:o});if(!a.success)throw new Error(a.error||"Failed to start Deep Research");const i={jobId:a.jobId,status:a.status||"pending",query:h,startedAt:(new Date).toISOString(),creditsConsumed:a.creditsConsumed,estimatedDuration:a.estimatedDuration};y(i),C(a.jobId),setTimeout(()=>l(!0),1e3)}catch(e){$(e.message||"Failed to start Deep Research")}finally{S(!1)}}},onBack:M,isSubmitting:w,error:_||void 0}),"progress"===A&&I&&W(ga,{job:I,isLoading:a,onCancel:async()=>{try{!v||"pending"!==v.status&&"processing"!==v.status?await d():y(null)}catch(e){$("Failed to cancel research")}}}),"results"===A&&(null==I?void 0:I.results)&&W(ni,{job:I,onNewResearch:j}),"error"===A&&W(zs,{children:[W($s,{children:W(Ye,{size:24,color:"white"})}),W(Cs,{children:[W(Ms,{children:"Research Failed"}),W(js,{children:(null==I?void 0:I.error)||_||"An unexpected error occurred"}),W(_s,{children:[W(Is,{onClick:j,children:"Try Again"}),"error"===A&&m.length>0&&W(As,{onClick:M,children:[W(Be,{size:16}),"Back"]})]})]})]})]}),("questionnaire"===A||"progress"===A||"results"===A)&&W(Ds,{children:W("span",{children:"💡 Tip: You can start a new research at any time"})})]})}gs.STORAGE_PREFIX="askdona_browser_limit_";const bs=Ee("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--askdona-background);
`,vs=Ee("div")`
  flex: 1;
  overflow-y: auto;
  padding: 0;
  background: var(--askdona-background);
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--askdona-border);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: var(--askdona-text-secondary);
  }
`,ys=Ee("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
  margin: 1rem;
  border-radius: 0.75rem;
`,ks=Ee("div")`
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,xs=Ee("div")`
  flex: 1;
`,ws=Ee("h3")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`,Ss=Ee("p")`
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
`,zs=Ee("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  margin: 1rem;
  border-radius: 0.75rem;
`,$s=Ee("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Cs=Ee("div")`
  flex: 1;
`,Ms=Ee("h3")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`,js=Ee("p")`
  margin: 0 0 1rem;
  font-size: 0.875rem;
  opacity: 0.9;
  line-height: 1.5;
`,_s=Ee("div")`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,Is=Ee("button")`
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`,As=Ee("button")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem;
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }
`,Ds=Ee("div")`
  padding: 0.75rem 1rem;
  text-align: center;
  font-size: 0.8125rem;
  color: var(--askdona-text-secondary);
  background: var(--askdona-border);
  border-top: 1px solid var(--askdona-border);
`;function Ts({config:e,onSubmit:r,onRefreshConfig:n,isSubmitting:t=!1,error:o}){const[a,i]=le("");return W(Rs,{children:[W(Fs,{children:[W(Es,{children:W(mr,{size:24,color:"white"})}),W(Os,{children:[W(Ns,{children:"🔍 Deep Research"}),W(Ls,{children:"Ask a research question and we'll analyze it thoroughly"})]})]}),W(Ps,{children:[W("form",{onSubmit:e=>{e.preventDefault(),a.trim()&&!t&&r(a.trim())},children:[W(qs,{value:a,onChange:e=>i(e.target.value),placeholder:"What would you like me to research? Be as specific as possible...",rows:3,disabled:t}),W(Hs,{children:W(Bs,{type:"submit",disabled:!a.trim()||t,children:t?"Analyzing...":"Start Research"})})]}),o&&W(Vs,{children:[W(Ye,{size:16}),W("span",{children:o})]})]})]})}const Rs=Ee("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
  margin: 1rem;
`,Fs=Ee("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
`,Es=Ee("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Os=Ee("div")`
  flex: 1;
`,Ns=Ee("h3")`
  margin: 0 0 0.25rem;
  font-size: 1.125rem;
  font-weight: 600;
`,Ls=Ee("p")`
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
`,Ps=Ee("div")`
  padding: 1.5rem;
`,qs=Ee("textarea")`
  width: 100%;
  min-height: 4rem;
  padding: 0.75rem;
  border: 1px solid var(--askdona-border);
  border-radius: 0.375rem;
  font-family: inherit;
  font-size: 0.875rem;
  color: var(--askdona-text);
  background: var(--askdona-background);
  resize: vertical;
  margin-bottom: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: var(--askdona-primary);
    box-shadow: 0 0 0 3px rgba(var(--askdona-primary-rgb, 67, 56, 202), 0.1);
  }

  &::placeholder {
    color: var(--askdona-text-secondary);
  }

  &:disabled {
    background: var(--askdona-border);
    cursor: not-allowed;
  }
`,Hs=Ee("div")`
  display: flex;
  justify-content: flex-end;
`,Bs=Ee("button")`
  padding: 0.75rem 1.5rem;
  background: var(--askdona-primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: var(--askdona-primary-hover, #5b21b6);
    transform: scale(1.02);
  }

  &:disabled {
    background: var(--askdona-border);
    cursor: not-allowed;
    color: var(--askdona-text-secondary);
  }
`,Vs=Ee("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  font-size: 0.875rem;
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 0.375rem;
  margin-top: 1rem;
`;function Js({task:e,onRetry:r,onSendMessage:n}){const[t,o]=le(e);de(()=>{o(e)},[e]);return W(Us,{children:[W(Ws,{children:[W(Qs,{children:"深層調査の進捗"}),W(Gs,{status:t.status,children:["pending"===t.status&&"⏳ 待機中","in-progress"===t.status&&"🔄 実行中","completed"===t.status&&"✅ 完了","failed"===t.status&&"❌ 失敗"]})]}),W(Ys,{children:[W(Xs,{children:W(Zs,{progress:t.progress||0})}),W(Ks,{children:[t.progress||0,"%"]})]}),W(el,{children:[W(rl,{children:(e=>{switch(e){case"follow-up":return"📝";case"research-outline":return"📋";case"search":return"🔍";case"extraction":return"📊";case"new-angles":return"💡";case"synthesis":return"📄";default:return"⚙️"}})(t.stage||"follow-up")}),W(nl,{children:t.stage?{"follow-up":"依頼内容の整理","research-outline":"調査の計画",search:"情報収集",extraction:"情報分析","new-angles":"追加の調査",synthesis:"調査レポート作成"}[t.stage]||t.stage:"Processing..."})]}),W(tl,{children:[W(ol,{children:t.message||"Processing..."}),W(al,{children:["更新日時: ",new Date(t.updated_at).toLocaleString("ja-JP")]})]}),"completed"===t.status&&t.summary_report&&W(il,{children:[W(sl,{children:"調査結果"}),W(ll,{children:[t.summary_report.substring(0,200),"..."]}),W(dl,{children:W(cl,{variant:"primary",onClick:()=>n(t.summary_report),children:"結果をチャットに送信"})})]}),"completed"===t.status&&t.checksheet_markdown&&!t.summary_report&&W(il,{children:[W(sl,{children:"調査チェックシート"}),W(ll,{children:[t.checksheet_markdown.substring(0,200),"..."]}),W(dl,{children:W(cl,{variant:"primary",onClick:()=>n(t.checksheet_markdown),children:"チェックシートをチャットに送信"})})]}),"failed"===t.status&&W(dl,{children:W(cl,{variant:"secondary",onClick:r,children:"再試行"})})]})}const Us=Ee("div")`
  padding: 1.5rem;
  background: var(--bg-primary);
  border-radius: 12px;
  border: 1px solid var(--border-light);
`,Ws=Ee("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,Qs=Ee("h3")`
  margin: 0;
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,Gs=Ee("span")`
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${e=>{switch(e.status){case"pending":return"#fef3c7";case"in-progress":return"#dbeafe";case"completed":return"#d1fae5";case"failed":return"#fee2e2";default:return"#f3f4f6"}}};
  color: ${e=>{switch(e.status){case"pending":return"#92400e";case"in-progress":return"#1e40af";case"completed":return"#065f46";case"failed":return"#dc2626";default:return"#374151"}}};
`,Ys=Ee("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`,Xs=Ee("div")`
  flex: 1;
  height: 8px;
  background: var(--bg-secondary);
  border-radius: 4px;
  overflow: hidden;
`,Zs=Ee("div")`
  height: 100%;
  background: var(--primary);
  width: ${e=>e.progress}%;
  transition: width 0.5s ease;
`,Ks=Ee("span")`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  min-width: 3rem;
`,el=Ee("div")`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,rl=Ee("span")`
  font-size: 1.5rem;
`,nl=Ee("span")`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
`,tl=Ee("div")`
  margin-bottom: 1rem;
`,ol=Ee("p")`
  margin: 0 0 0.5rem 0;
  color: var(--text-secondary);
  line-height: 1.5;
`,al=Ee("div")`
  font-size: 0.75rem;
  color: var(--text-secondary);
`,il=Ee("div")`
  background: var(--bg-secondary);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`,sl=Ee("h4")`
  margin: 0 0 0.75rem 0;
  color: var(--text-primary);
  font-size: 0.95rem;
  font-weight: 600;
`,ll=Ee("div")`
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`,dl=Ee("div")`
  display: flex;
  gap: 0.75rem;
`,cl=Ee("button")`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${e=>"primary"===e.variant?"\n    background: var(--primary);\n    color: white;\n\n    &:hover {\n      background: var(--primary-hover);\n    }\n  ":"\n    background: var(--bg-secondary);\n    color: var(--text-primary);\n    border: 1px solid var(--border-light);\n\n    &:hover {\n      background: var(--bg-hover);\n    }\n  "}
`,ul=Ee("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-primary);
`,hl=Ee("div")`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-light);
  background: var(--bg-primary);
`,pl=Ee("button")`
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-size: 0.9rem;

  &:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
  }
`,ml=Ee("h2")`
  margin: 0;
  margin-left: 1rem;
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,gl=Ee("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`,fl=Ee("div")`
  margin-bottom: 2rem;
`,bl=Ee("textarea")`
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  border: 2px solid var(--border-light);
  border-radius: 12px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 0.9rem;
  line-height: 1.5;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`,vl=Ee("div")`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`,yl=Ee("button")`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;

  ${e=>"primary"===e.variant?"\n    background: var(--primary);\n    color: white;\n\n    &:hover:not(:disabled) {\n      background: var(--primary-hover);\n    }\n\n    &:disabled {\n      background: var(--bg-secondary);\n      color: var(--text-secondary);\n      cursor: not-allowed;\n    }\n  ":"\n    background: var(--bg-secondary);\n    color: var(--text-primary);\n    border: 1px solid var(--border-light);\n\n    &:hover:not(:disabled) {\n      background: var(--bg-hover);\n    }\n\n    &:disabled {\n      color: var(--text-secondary);\n      cursor: not-allowed;\n    }\n  "}
`,kl=Ee("div")`
  color: #ef4444;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;function xl({chatFlowId:e,sessionId:r,messages:n,onBack:t,onSendMessage:o,baseUrl:a}){const[i,s]=le("input"),[l,d]=le(""),[c,u]=le(null),[h,p]=le(null),[m,g]=le(!1),{getValidToken:f,isInitializing:b,session:v}=ps(e);de(()=>{if("execution"!==i||!c)return;if("completed"===c.status||"failed"===c.status)return;let e;const n=async()=>{try{const n=B.replace("/api/embed/v1",""),t=(null==v?void 0:v.sessionId)||r,o=await fetch(`${n}/api/embed/v1/rag-deep-research/status?sessionId=${t}`);if(!o.ok)throw new Error("Failed to fetch task status");const a=await o.json();a.task&&(u(a.task),"completed"!==a.task.status&&"failed"!==a.task.status||e&&clearInterval(e))}catch(r){r instanceof TypeError&&r.message.includes("Failed to fetch")&&e&&clearInterval(e)}};return n(),e=setInterval(n,5e3),()=>{e&&clearInterval(e)}},[i,r,a,v]);const y=pe(async()=>{if(l.trim()){g(!0),p(null);try{await k(l,n)}catch(e){p(e instanceof Error?e.message:"Failed to start research"),g(!1)}}},[l,n]),k=pe(async(n,t)=>{try{const o=await f();if(!o)throw new Error("Failed to get valid session token");const a=B.replace("/api/embed/v1",""),i=(null==v?void 0:v.sessionId)||r,l=await fetch(`${a}/api/embed/v1/rag-deep-research/executor`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userQuestion:n,chatFlowId:e,sessionId:i,secureSessionToken:o,messages:t,report_settings:{reportFormat:"business-report",internetEnabled:!0,language:"japanese"}})});if(!l.ok)throw new Error(`Failed to start research: ${l.status}`);const d=await l.json();u({id:d.taskId,session_id:i,status:"pending",stage:"follow-up",progress:0,message:"深層調査を開始しています...",checksheet_markdown:null,tool_usage_plan:null,execution_results:null,final_report_message_id:null,summary_report:null,research_id:null,created_at:(new Date).toISOString(),updated_at:(new Date).toISOString(),report_settings:{reportFormat:"business-report",internetEnabled:!0,language:"japanese"}}),s("execution")}catch(e){throw e}finally{g(!1)}},[a,e,r,f,v]),x=pe(()=>{s("input"),u(null),p(null),d("")},[]);return W(ul,{children:[W(hl,{children:[W(pl,{onClick:t,children:[W("span",{children:"←"}),"戻る"]}),W(ml,{children:"RAG 深層調査"})]}),W(gl,{children:[h&&W(kl,{children:h}),b?W(fl,{children:W("div",{style:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)"},children:"セッションを初期化しています..."})}):"input"===i&&W(fl,{children:[W(bl,{value:l,onChange:e=>d(e.currentTarget.value),placeholder:"深層調査を行いたいトピックや質問を入力してください...",disabled:m}),W(vl,{children:[W(yl,{variant:"secondary",onClick:t,children:"キャンセル"}),W(yl,{variant:"primary",onClick:y,disabled:!l.trim()||m,children:m?"処理中...":"調査を開始"})]})]}),"execution"===i&&c&&W(Js,{task:c,onRetry:x,onSendMessage:o})]})]})}const wl=Re`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Sl=Re`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,zl=Re`
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
`;function $l({isOpen:e,onClose:r,currentMode:n,onModeSwitch:t,messages:o,isLoading:a,streamingContent:i,onSendMessage:s,error:l,config:d,currentState:c,chatMode:u,onChatModeChange:h,sessionId:p,onFeedbackSubmit:m,onClearChat:g,showIntro:f,displayMode:b="modal",metadataFilters:v,onMetadataFiltersChange:y}){const x=ue(null);if(de(()=>{if(!e)return;const n=e=>{"Escape"===e.key&&r()},t=e=>{"fullscreen"!==b&&x.current&&x.current.contains&&"function"==typeof x.current.contains&&!x.current.contains(e.target)&&r()};return document.addEventListener("keydown",n),document.addEventListener("mousedown",t),()=>{document.removeEventListener("keydown",n),document.removeEventListener("mousedown",t)}},[e,r]),!e)return null;return W(Cl,{onClick:e=>{"fullscreen"!==b&&e.target===e.currentTarget&&r()},displayMode:b,children:W(Ml,{ref:x,displayMode:b,children:[W(jl,{children:[W(_l,{children:(d.language,"AskDona")}),W(Il,{children:[d.enableRagDeepResearch&&W(Al,{active:"rag-deep-research"===n,onClick:()=>t("rag-deep-research"),children:[W(hr,{size:14,style:{marginRight:"4px"}}),(d.language,"RAG Deep Research")]}),"fullscreen"!==b&&W(Dl,{onClick:r,children:"×"})]})]}),W(Tl,{children:"ask-ai"===n?W(st,{messages:o,isLoading:a,streamingContent:i,onSendMessage:s,error:l,config:d,currentState:c,chatMode:u,onChatModeChange:h,sessionId:p,onFeedbackSubmit:m,showIntro:f,metadataFilters:v,onMetadataFiltersChange:y,onClearChat:g,currentMode:n,onModeSwitch:e=>t(e)}):"search"===n?W(Pt,{config:d,currentMode:n,onModeSwitch:t},"search-view"):"deep-research"===n?W(fs,{chatflowId:d.chatflowId,onClose:()=>t("ask-ai"),isVisible:"deep-research"===n}):"rag-deep-research"===n&&d.enableRagDeepResearch?W(xl,{chatFlowId:d.chatflowId,sessionId:p,messages:o.map(e=>({role:e.role,content:e.content,createdAt:e.createdAt,id:e.id})),onBack:()=>t("ask-ai"),onSendMessage:e=>s(e),baseUrl:window.location.origin}):null}),W(Rl,{children:[W(Fl,{children:["Powered by ",W(El,{href:"https://askdona.com",target:"_blank",style:"color: inherit; text-decoration: none;",children:"AskDona"})]}),W(Ol,{children:"ja"===d.language?W(k,{children:[W("div",{children:"Boostモードは、より多角的な視点から多くの文書を分析して回答します。通常モードより回答生成までに時間がかかります。"}),W("div",{children:"RAGシステムは誤った情報を提供することがあります。重要な情報はご自身で確認してください。"})]}):W(k,{children:[W("div",{children:"Boost mode analyzes more documents from multiple perspectives. It takes longer than normal mode."}),W("div",{children:"RAG systems may provide incorrect information. Please verify important information yourself."})]})})]})]})})}Re`
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
`,Re`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Re`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;const Cl=Ee("div")`
  position: fixed;
  inset: 0;
  background: ${e=>"fullscreen"===e.displayMode?"transparent":"rgba(0, 0, 0, 0.5)"};
  backdrop-filter: ${e=>"fullscreen"===e.displayMode?"none":"blur(4px)"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  padding: ${e=>"fullscreen"===e.displayMode?"0":"1.25rem"};
  animation: ${wl} 0.2s ease-out;
`,Ml=Ee("div")`
  background: var(--askdona-surface);
  border-radius: ${e=>"fullscreen"===e.displayMode?"0":"1rem"};
  width: ${e=>"fullscreen"===e.displayMode?"100vw":"100%"};
  max-width: ${e=>"fullscreen"===e.displayMode?"none":"72rem"};
  height: ${e=>"fullscreen"===e.displayMode?"100vh":"90vh"};
  max-height: ${e=>"fullscreen"===e.displayMode?"none":"1000px"};
  box-shadow: ${e=>"fullscreen"===e.displayMode?"none":"0 25px 50px -12px rgba(0, 0, 0, 0.25)"};
  display: flex;
  flex-direction: column;
  animation: ${e=>"fullscreen"===e.displayMode?"none":Sl} 0.3s ease-out;
  overflow: hidden;
`,jl=Ee("header")`
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`,_l=Ee("h2")`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: var(--askdona-text);
  font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
`,Il=Ee("div")`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,Al=Ee("button")`
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.8125rem;
  transition: all 0.2s;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${e=>e.active?"var(--askdona-primary)":"var(--askdona-text-secondary)"};
  
  &:hover {
    color: ${e=>e.active?"var(--askdona-primary)":"var(--askdona-text)"};
    background: ${e=>e.active?"transparent":"var(--askdona-background)"};
  }
  
  ${e=>e.active&&"\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -0.5rem;\n      left: 0;\n      right: 0;\n      height: 2px;\n      background: var(--askdona-primary);\n    }\n  "}
`,Dl=Ee("button")`
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
`,Tl=Ee("main")`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Rl=Ee("footer")`
  padding: 0.75rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
`,Fl=Ee("span")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
`,El=Ee("a")`
  font-size: 0.75rem;
  color: var(--askdona-primary);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,Ol=Ee("div")`
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
`;function Nl({onClick:e,position:r}){return W(Ll,{onClick:e,position:r,children:W("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:W("path",{d:"M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.9706 16.9706 21 12 21C10.4077 21 8.88275 20.5699 7.5389 19.7447L3 21L4.25553 16.4611C3.43012 15.1173 3 13.5923 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}const Ll=Ee("button")`
  position: fixed;
  bottom: 1.25rem;
  ${e=>"bottom-right"===e.position?"right: 1.25rem;":"left: 1.25rem;"}
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  background: var(--askdona-primary);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  animation: ${zl} 0.5s ease-out;
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
`;function Pl(e){const[r,n]=le({isValid:!1,error:null,config:null});return de(()=>{const r=async()=>{try{const r=await async function(e){try{return await V(`/validate/${e}`,{method:"POST",body:JSON.stringify({origin:window.location.origin})})}catch(e){return{isValid:!1,error:e.message}}}(e);n({isValid:r.isValid,error:r.error?new Error(r.error):null,config:r.config||null})}catch(e){n({isValid:!1,error:e,config:null})}};e&&r()},[e]),r}const ql="askdona_widget_",Hl=864e5;function Bl(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e)}function Vl(e){const r=`${ql}messages_${e}`;try{const e=localStorage.getItem(r);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n:n.messages||[]}catch(e){return[]}}function Jl(e){var r;const n=`${ql}messages_${e}`;try{const e=localStorage.getItem(n);if(!e)return null;const t=JSON.parse(e);return!Array.isArray(t)&&t.sessionId&&(null===(r=t.messages)||void 0===r?void 0:r.length)>0?t.sessionId:null}catch(e){return null}}function Ul(e){const[r]=le(()=>{if(Vl(e).length>0){const r=Jl(e);if(r)return r}const r=function(e){const r=`${ql}session_${e}`;try{const e=localStorage.getItem(r);if(e){const r=JSON.parse(e);if(r.expiresAt>Date.now()&&Bl(r.id))return r.id}}catch(e){}const n=Vl(e).length>0;if(n){const n=Jl(e);if(n&&Bl(n)){const e={id:n,createdAt:Date.now(),expiresAt:Date.now()+Hl};try{localStorage.setItem(r,JSON.stringify(e))}catch(e){}return n}}try{localStorage.removeItem(r),n||localStorage.removeItem(`${ql}messages_${e}`)}catch(e){}const t={id:H(),createdAt:Date.now(),expiresAt:Date.now()+Hl};try{localStorage.setItem(r,JSON.stringify(t))}catch(e){}return t.id}(e);return r}),[n,t]=le(()=>Vl(e)),[o,a]=le(!1),[i,s]=le(""),[l,d]=le(null),[c,u]=le("idle"),h=ue(null),p=ue(null),m=ue(""),g=ue(null);de(()=>{if(n.length>0){const t=n[n.length-1];!function(e,r,n){const t=`${ql}messages_${e}`;try{const e=localStorage.getItem(t),o=e?JSON.parse(e):{sessionId:null,messages:[]};n&&!o.sessionId&&(o.sessionId=n);const a=o.messages||[],i=a.findIndex(e=>e.id===r.id);-1!==i?a[i]=r:a.push(r),a.length>50&&a.splice(0,a.length-50),o.messages=a,localStorage.setItem(t,JSON.stringify(o))}catch(e){}}(e,t,r)}},[n,e,r]);const f=pe(()=>{t([]),function(e){[`${ql}session_${e}`,`${ql}messages_${e}`].forEach(e=>{try{localStorage.removeItem(e)}catch(e){}})}(e)},[e]),b=pe(async(o,i="standard",l=null)=>{try{const c={id:H(),role:"user",content:o,createdAt:(new Date).toISOString(),metadata:{mode:i}};t(e=>[...e,c]),a(!0),d(null),s(""),u("thinking"),m.current="",g.current=null;const f={id:H(),role:"assistant",content:"",createdAt:(new Date).toISOString(),metadata:{mode:i}};p.current=f,h.current=new AbortController,await async function({chatflowId:e,sessionId:r,message:n,messages:t,mode:o="standard",userMessageId:a,assistantMessageId:i,metadataFilters:s,signal:l,onChunk:d}){var c;const u=`${B}/chat/${e}/${o}`,h=await fetch(u,{method:"POST",headers:{"Content-Type":"application/json","X-Widget-Version":"1.0.0"},body:JSON.stringify({userQuestion:n,sessionId:r,messages:t.map(e=>({role:e.role,content:e.content,createdAt:e.createdAt})),mode:o,boostMode:"boost"===o||void 0,userMessageId:a,assistantMessageId:i,metadataFilters:s}),signal:l}),p={};if(h.headers.forEach((e,r)=>{p[r]=e}),!h.ok){const e=await h.json().catch(()=>({message:"Request failed"}));throw new Error(e.message||`HTTP ${h.status}`)}const m=null===(c=h.body)||void 0===c?void 0:c.getReader();if(!m)throw new Error("No response body");const g=new TextDecoder;let f="";try{for(;;){const{done:e,value:r}=await m.read();if(e)break;const n=g.decode(r,{stream:!0});if(n.includes("\0")){f+=n;const e=f.split("\0");f=e[e.length-1];for(let r=0;r<e.length-1;r++){const n=e[r];if(n)if(n.startsWith("__STATE__:"))d({type:"state",data:n.substring(10).replace(/\n$/,"")});else if(n.startsWith("__SEARCH__:"))d({type:"search",data:n.substring(11).replace(/\n$/,"")});else if(n.startsWith("__METADATA__:"))d({type:"metadata",data:n.substring(13).replace(/\n$/,"")});else if(n.startsWith("__SEARCH_QUERIES__:"))d({type:"search-queries",data:n.substring(19).replace(/\n$/,"")});else if(n.startsWith("__SUMMARY__:"))try{JSON.parse(n.substring(13))}catch(e){}else d({type:"content",data:n})}}else n.trim()&&d({type:"content",data:n})}f&&!f.startsWith("__")&&d({type:"content",data:f})}finally{m.releaseLock()}}({chatflowId:e,sessionId:r,message:o,messages:n,mode:i,userMessageId:c.id,assistantMessageId:f.id,metadataFilters:l,signal:h.current.signal,onChunk:e=>{if("content"===e.type)m.current+=e.data,s(m.current);else if("metadata"===e.type)try{const r=JSON.parse(e.data);g.current={...g.current,docMetadata:r,mode:i}}catch(e){}else"state"===e.type&&u(e.data)}})}catch(e){"AbortError"===e.name||d(e)}finally{p.current&&m.current.trim()&&t(e=>[...e,{...p.current,content:m.current.trim(),metadata:{...p.current.metadata,...g.current}}]),a(!1),s(""),u("idle"),h.current=null,p.current=null,m.current="",g.current=null}},[e,n]),v=pe(async(n,o,a)=>{try{t(e=>e.map(e=>e.id===n?{...e,metadata:{...e.metadata,feedback:{rating:o,content:a,submittedAt:(new Date).toISOString(),isSubmitted:!0}}}:e));const i={embedMessageId:n,embedSessionId:r,chatflowId:e,feedbackType:"combined",feedbackData:{rating:"THUMBS_UP"===o?"thumbs_up":"thumbs_down",content:a||null},metadata:{domain:window.location.hostname,url:window.location.href,userAgent:navigator.userAgent}},s=await fetch(`${B}/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!s.ok){const e=await s.text();throw new Error(`Failed to submit feedback: ${s.statusText} - ${e}`)}await s.json()}catch(e){throw t(e=>e.map(e=>e.id===n?{...e,metadata:{...e.metadata,feedback:void 0}}:e)),e}},[r,e]);return{messages:n,sendMessage:b,isLoading:o,streamingContent:i,error:l,currentState:c,sessionId:r,submitFeedback:v,clearChat:f}}function Wl(e,r){const n=parseInt(e.replace("#",""),16),t=Math.round(2.55*r),o=(n>>16)-t,a=(n>>8&255)-t,i=(255&n)-t;return"#"+(16777216+65536*(o<255?o<1?0:o:255)+256*(a<255?a<1?0:a:255)+(i<255?i<1?0:i:255)).toString(16).slice(1)}function Ql(e,r){const n=parseInt(e.replace("#",""),16),t=Math.round(2.55*r),o=(n>>16)+t,a=(n>>8&255)+t,i=(255&n)+t;return"#"+(16777216+65536*(o<255?o<1?0:o:255)+256*(a<255?a<1?0:a:255)+(i<255?i<1?0:i:255)).toString(16).slice(1)}"undefined"!=typeof window&&function(){try{const e=Object.keys(localStorage),r=Date.now();e.forEach(e=>{if(e.startsWith(`${ql}session_`))try{const n=JSON.parse(localStorage.getItem(e)||"{}");if(n.expiresAt&&n.expiresAt<r){localStorage.removeItem(e);const r=e.replace(`${ql}session_`,"");localStorage.removeItem(`${ql}messages_${r}`)}}catch(r){localStorage.removeItem(e)}})}catch(e){}}();const Gl={colors:{primary:"#10316f",primaryDark:Wl("#10316f",10),primaryLight:Ql("#10316f",10),background:"#ffffff",surface:"#f8f9fa",text:"#353a5c",textSecondary:"#6b6f8a",border:"#e5e7eb",error:"#EF4444",success:"#10B981"},fonts:{base:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',mono:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1)"}},Yl={colors:{primary:"#10316f",primaryDark:Wl("#10316f",10),primaryLight:Ql("#10316f",10),background:"#0f172a",surface:"#111827",text:"#e5e7eb",textSecondary:"#9ca3af",border:"#1f2937",error:"#F87171",success:"#34D399"},fonts:{base:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',mono:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.3)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.4)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.5)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.6)"}};function Xl(e,r){let n=Gl;if("dark"===e)n=Yl;else if("auto"===e){n=window.matchMedia("(prefers-color-scheme: dark)").matches?Yl:Gl}n={...n,colors:{...n.colors,primary:"#10316f",primaryDark:Wl("#10316f",10),primaryLight:Ql("#10316f",10)}};const t=function(e){const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?`${parseInt(r[1],16)}, ${parseInt(r[2],16)}, ${parseInt(r[3],16)}`:"0, 0, 0"}(n.colors.primary);return document.documentElement.style.setProperty("--askdona-primary-rgb",t),n}function Zl(e,r){for(var n in r)e[n]=r[n];return e}function Kl(e,r){for(var n in e)if("__source"!==n&&!(n in r))return!0;for(var t in r)if("__source"!==t&&e[t]!==r[t])return!0;return!1}function ed(e,r){this.props=e,this.context=r}(ed.prototype=new x).isPureReactComponent=!0,ed.prototype.shouldComponentUpdate=function(e,r){return Kl(this.props,e)||Kl(this.state,r)};var rd=n.v;n.v=function(e){e.type&&e.type.V&&e.ref&&(e.props.ref=e.ref,e.ref=null),rd&&rd(e)};var nd="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var td=n.S;n.S=function(e,r,n,t){if(e.then)for(var o,a=r;a=a.m;)if((o=a.$)&&o.$)return null==r.S&&(r.S=n.S,r.h=n.h),o.$(e,r);td(e,r,n,t)};var od=n.unmount;function ad(e,r,n){return e&&(e.$&&e.$.H&&(e.$.H.m.forEach(function(e){"function"==typeof e.$&&e.$()}),e.$.H=null),null!=(e=Zl({},e)).$&&(e.$.A===n&&(e.$.A=r),e.$.S=!0,e.$=null),e.h=e.h&&e.h.map(function(e){return ad(e,r,n)})),e}function id(e,r,n){return e&&n&&(e.C=null,e.h=e.h&&e.h.map(function(e){return id(e,r,n)}),e.$&&e.$.A===r&&(e.S&&n.appendChild(e.S),e.$.S=!0,e.$.A=n)),e}function sd(){this.j=0,this.o=null,this.v=null}function ld(e){var r=e.m.$;return r&&r.J&&r.J(e)}function dd(){this.i=null,this.l=null}n.unmount=function(e){var r=e.$;r&&r.U&&r.U(),r&&32&e.j&&(e.type=null),od&&od(e)},(sd.prototype=new x).$=function(e,r){var n=r.$,t=this;null==t.o&&(t.o=[]),t.o.push(n);var o=ld(t.C),a=!1,i=function(){a||(a=!0,n.U=null,o?o(s):s())};n.U=i;var s=function(){if(! --t.j){if(t.state.J){var e=t.state.J;t.C.h[0]=id(e,e.$.A,e.$.W)}var r;for(t.setState({J:t.v=null});r=t.o.pop();)r.forceUpdate()}};t.j++||32&r.j||t.setState({J:t.v=t.C.h[0]}),e.then(i,i)},sd.prototype.componentWillUnmount=function(){this.o=[]},sd.prototype.render=function(e,r){if(this.v){if(this.C.h){var n=document.createElement("div"),t=this.C.h[0].$;this.C.h[0]=ad(this.v,n,t.W=t.A)}this.v=null}var o=r.J&&v(k,null,e.fallback);return o&&(o.j&=-33),[v(k,null,r.J?null:e.children),o]};var cd=function(e,r,n){if(++n[1]===n[0]&&e.l.delete(r),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(dd.prototype=new x).J=function(e){var r=this,n=ld(r.C),t=r.l.get(e);return t[0]++,function(o){var a=function(){r.props.revealOrder?(t.push(o),cd(r,e,t)):o()};n?n(a):a()}},dd.prototype.render=function(e){this.i=null,this.l=new Map;var r=j(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&r.reverse();for(var n=r.length;n--;)this.l.set(r[n],this.i=[1,0,this.i]);return e.children},dd.prototype.componentDidUpdate=dd.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(r,n){cd(e,n,r)})};var ud="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,hd=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,pd=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,md=/[A-Z0-9]/g,gd="undefined"!=typeof document,fd=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};x.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(x.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(r){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:r})}})});var bd=n.event;function vd(){}function yd(){return this.cancelBubble}function kd(){return this.defaultPrevented}n.event=function(e){return bd&&(e=bd(e)),e.persist=vd,e.isPropagationStopped=yd,e.isDefaultPrevented=kd,e.nativeEvent=e};var xd={enumerable:!1,configurable:!0,get:function(){return this.class}},wd=n.vnode;n.vnode=function(e){"string"==typeof e.type&&function(e){var r=e.props,n=e.type,t={},o=-1===n.indexOf("-");for(var a in r){var i=r[a];if(!("value"===a&&"defaultValue"in r&&null==i||gd&&"children"===a&&"noscript"===n||"class"===a||"className"===a)){var s=a.toLowerCase();"defaultValue"===a&&"value"in r&&null==r.value?a="value":"download"===a&&!0===i?i="":"translate"===s&&"no"===i?i=!1:"o"===s[0]&&"n"===s[1]?"ondoubleclick"===s?a="ondblclick":"onchange"!==s||"input"!==n&&"textarea"!==n||fd(r.type)?"onfocus"===s?a="onfocusin":"onblur"===s?a="onfocusout":pd.test(a)&&(a=s):s=a="oninput":o&&hd.test(a)?a=a.replace(md,"-$&").toLowerCase():null===i&&(i=void 0),"oninput"===s&&t[a=s]&&(a="oninputCapture"),t[a]=i}}"select"==n&&t.multiple&&Array.isArray(t.value)&&(t.value=j(r.children).forEach(function(e){e.props.selected=-1!=t.value.indexOf(e.props.value)})),"select"==n&&null!=t.defaultValue&&(t.value=j(r.children).forEach(function(e){e.props.selected=t.multiple?-1!=t.defaultValue.indexOf(e.props.value):t.defaultValue==e.props.value})),r.class&&!r.className?(t.class=r.class,Object.defineProperty(t,"className",xd)):(r.className&&!r.class||r.class&&r.className)&&(t.class=t.className=r.className),e.props=t}(e),e.$$typeof=ud,wd&&wd(e)};var Sd=n.I;n.I=function(e){Sd&&Sd(e),e.$};var zd=n.diffed;n.diffed=function(e){zd&&zd(e);var r=e.props,n=e.S;null!=n&&"textarea"===e.type&&"value"in r&&r.value!==n.value&&(n.value=null==r.value?"":r.value)},Fe(v);const $d=function(e){function r(r){var n=Zl({},r);return delete n.ref,e(n,r.ref||null)}return r.$$typeof=nd,r.render=r,r.prototype.isReactComponent=r.V=!0,r.displayName="ForwardRef("+(e.displayName||e.name)+")",r}(({config:e},r)=>{const[n,t]=le({isOpen:"fullscreen"===e.displayMode,currentMode:"ask-ai",messages:[],isLoading:!1,streamingContent:"",error:null,chatMode:"standard",showIntro:!0,metadataFilters:null}),{isValid:o,error:a,config:i}=Pl(e.chatflowId),[s,l]=le(null);de(()=>{J(e.chatflowId,e.language).then(e=>{e&&e.embedConfig&&l(e.embedConfig)}).catch(()=>{l(null)})},[e.chatflowId,e.language]);const d={...e};if(s){if(s.introTitle&&(d.introTitle=s.introTitle),s.introMessage&&(d.introMessage=s.introMessage),s.exampleQuestions&&(d.exampleQuestions=s.exampleQuestions),s.appearanceSettings){const e=s.appearanceSettings.primaryColor||void 0,r=s.appearanceSettings.theme||void 0,n=s.appearanceSettings.position||void 0,t=s.appearanceSettings.displayMode||void 0;d.primaryColor=d.primaryColor||e,d.theme=d.theme||r,d.position=d.position||n,d.displayMode=d.displayMode||t}s.featureFlags&&("boolean"==typeof s.featureFlags.enableBoostMode&&(d.defaultBoostMode=!!s.featureFlags.enableBoostMode),"boolean"==typeof s.featureFlags.allowBoostModeToggle&&(d.allowBoostModeToggle=!!s.featureFlags.allowBoostModeToggle),"boolean"==typeof s.featureFlags.enableRagDeepResearch&&(d.enableRagDeepResearch=!!s.featureFlags.enableRagDeepResearch))}else i&&(d.introTitle=i.introTitle,d.introMessage=i.introMessage,d.exampleQuestions=i.exampleQuestions,d.theme=i.theme,d.position=i.position,d.primaryColor=i.primaryColor,d.defaultBoostMode=i.defaultBoostMode,d.allowBoostModeToggle=i.allowBoostModeToggle,d.displayMode=e.displayMode);const c=Xl(d.theme||"light",d.primaryColor),{messages:u,sendMessage:h,isLoading:p,streamingContent:m,error:g,currentState:f,sessionId:b,submitFeedback:v,clearChat:y}=Ul(e.chatflowId);de(()=>{t(e=>({...e,messages:u,isLoading:p,streamingContent:m,error:a||g,showIntro:0===u.length&&e.showIntro}))},[u,p,m,a,g]),de(()=>{if(i){const e=i.defaultBoostMode?"boost":"standard";t(r=>r.chatMode===e?r:{...r,chatMode:e})}},[i]),function(e,r,n){Z=6,ce(function(){if("function"==typeof e){var n=e(r());return function(){e(null),n&&"function"==typeof n&&n()}}if(e)return e.current=r(),function(){return e.current=null}},null==n?n:n.concat(e))}(r,()=>({open:()=>{t(e=>({...e,isOpen:!0}))},close:()=>{t(e=>({...e,isOpen:!1}))},sendMessage:e=>{t(e=>({...e,isOpen:!0})),h(e)}}),[h]);const k=ue(null);if(de(()=>{if(!k.current)return;const e=k.current;e.style.setProperty("--askdona-primary",c.colors.primary),e.style.setProperty("--askdona-primary-dark",c.colors.primaryDark),e.style.setProperty("--askdona-primary-light",c.colors.primaryLight),e.style.setProperty("--askdona-background",c.colors.background),e.style.setProperty("--askdona-surface",c.colors.surface),e.style.setProperty("--askdona-text",c.colors.text),e.style.setProperty("--askdona-text-secondary",c.colors.textSecondary),e.style.setProperty("--askdona-border",c.colors.border),e.style.setProperty("--askdona-error",c.colors.error),e.style.setProperty("--askdona-success",c.colors.success),e.style.setProperty("--askdona-font-base",c.fonts.base),e.style.setProperty("--askdona-font-mono",c.fonts.mono),e.style.setProperty("--askdona-bg-secondary",c.colors.surface),e.style.setProperty("--askdona-bg-hover",c.colors.primaryLight+"20"),e.style.setProperty("--askdona-surface-color",c.colors.background),e.style.setProperty("--askdona-border-color",c.colors.border)},[c]),!o)return null;return W("div",{ref:k,style:{fontFamily:"var(--askdona-font-base)",color:"var(--askdona-text)"},children:[!n.isOpen&&"fullscreen"!==d.displayMode&&W(Nl,{onClick:()=>{t(e=>({...e,isOpen:!0}))},position:d.position||"bottom-right"}),(n.isOpen||"fullscreen"===d.displayMode)&&W($l,{isOpen:n.isOpen||"fullscreen"===d.displayMode,onClose:()=>{"fullscreen"!==d.displayMode&&t(e=>({...e,isOpen:!1}))},currentMode:n.currentMode,onModeSwitch:e=>{t(r=>({...r,currentMode:e}))},messages:n.messages,isLoading:n.isLoading,streamingContent:n.streamingContent,onSendMessage:(e,r,o)=>{const a=r||n.chatMode;h(e,a,o||n.metadataFilters),t(e=>({...e,showIntro:!1}))},error:n.error,config:d,currentState:f,chatMode:n.chatMode,onChatModeChange:e=>{t(r=>({...r,chatMode:e}))},sessionId:b,onFeedbackSubmit:v,onClearChat:()=>{y(),t(e=>({...e,showIntro:!0}))},showIntro:n.showIntro,displayMode:d.displayMode||"modal",metadataFilters:n.metadataFilters,onMetadataFiltersChange:e=>{t(r=>({...r,metadataFilters:e}))}})]})});$d.displayName="Widget";const Cd=["chatflow-id","theme","position","primary-color","language","display-mode","custom-css","debug","instrument-serif-regular","instrument-serif-600"];class Md extends HTMLElement{constructor(){super(...arguments),this.widgetRef={current:null},this.initialised=!1,this.gooberReady=!1}static get observedAttributes(){return Cd}connectedCallback(){if(this.initialised)return;this.initialised=!0,this.shadow=this.attachShadow({mode:"open"});const e=document.createElement("style");e.textContent="\n  /* Ensure font available within shadow */\n  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block');\n  :host {\n    all: initial;\n    contain: content;\n    position: fixed;\n    inset: auto;\n    z-index: 999999; /* Keep on top of most sites */\n  }\n\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n\n  /* Scoped scrollbar styling */\n  *::-webkit-scrollbar { width: 6px; height: 6px; }\n  *::-webkit-scrollbar-track { background: transparent; }\n  *::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.2); border-radius: 3px; }\n  *::-webkit-scrollbar-thumb:hover { background: rgba(0, 0, 0, 0.3); }\n\n  @media (prefers-reduced-motion: reduce) {\n    * { animation: none !important; transition: none !important; }\n  }\n",this.shadow.appendChild(e);const r="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",n=Array.from(this.shadow.querySelectorAll("link")).some(e=>e.getAttribute("href")===r);if(!n){const e=document.createElement("link");e.rel="stylesheet",e.href=r,this.shadow.appendChild(e)}const t=this.getAttribute("instrument-serif-regular"),o=this.getAttribute("instrument-serif-600");if(t||o){if(t){const e=document.createElement("link");e.rel="preload",e.as="font",e.href=t,e.type="font/woff2",e.crossOrigin="anonymous",this.shadow.appendChild(e)}if(o){const e=document.createElement("link");e.rel="preload",e.as="font",e.href=o,e.type="font/woff2",e.crossOrigin="anonymous",this.shadow.appendChild(e)}const e=document.createElement("style");e.textContent=`\n        ${t?`@font-face { font-family: 'Instrument Serif'; font-style: normal; font-weight: 400; font-display: swap; src: url('${t}') format('woff2'); }`:""}\n        ${o?`@font-face { font-family: 'Instrument Serif'; font-style: normal; font-weight: 600; font-display: swap; src: url('${o}') format('woff2'); }`:""}\n      `,this.shadow.appendChild(e)}else{const e=document.createElement("link");e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",this.shadow.appendChild(e);const r="askdona-font-global";if(!document.getElementById(r)){const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",document.head.appendChild(e);const n=document.createElement("link");n.rel="preconnect",n.href="https://fonts.gstatic.com",n.crossOrigin="anonymous",document.head.appendChild(n);const t=document.createElement("link");t.id=r,t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",document.head.appendChild(t)}}const a="askdona-font-global";if(!document.getElementById(a)){const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",document.head.appendChild(e);const r=document.createElement("link");r.rel="preconnect",r.href="https://fonts.gstatic.com",r.crossOrigin="anonymous",document.head.appendChild(r);const n=document.createElement("link");n.id=a,n.rel="stylesheet",n.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",document.head.appendChild(n)}this.gooberStyleEl=document.createElement("style"),this.gooberStyleEl.id="_goober",this.gooberStyleEl.appendChild(document.createTextNode(" ")),this.shadow.appendChild(this.gooberStyleEl),window._goober=this.gooberStyleEl;try{Fe(v),this.gooberReady=!0}catch(e){this.gooberReady=!1}this.mountPoint=document.createElement("div"),this.shadow.appendChild(this.mountPoint),this.applyPosition();const i=this.getAttribute("custom-css");if(i){const e=document.createElement("link");e.rel="stylesheet",e.href=i,this.shadow.appendChild(e)}if(!window.katex){const e="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js",r=Array.from(document.querySelectorAll("script")).some(r=>r.getAttribute("src")===e);if(!r){const r=document.createElement("script");r.src=e,r.async=!0,document.head.appendChild(r)}}try{this.gooberReady&&this.renderWidget()}catch(e){}}disconnectedCallback(){if(this.mountPoint&&P(null,this.mountPoint),window._goober===this.gooberStyleEl)try{delete window._goober}catch(e){window._goober=null}}attributeChangedCallback(e,r,n){try{this.applyPosition(),this.initialised&&this.gooberReady&&this.renderWidget()}catch(e){}}open(){var e;null===(e=this.widgetRef.current)||void 0===e||e.open()}close(){var e;null===(e=this.widgetRef.current)||void 0===e||e.close()}sendMessage(e){var r;null===(r=this.widgetRef.current)||void 0===r||r.sendMessage(e)}applyPosition(){const e=this.getAttribute("position")||"bottom-right";if("fullscreen"===(this.getAttribute("display-mode")||"modal"))return this.style.position="fixed",void(this.style.inset="0");this.style.position="fixed",this.style.bottom="20px",this.style.left="bottom-left"===e?"20px":"",this.style.right="bottom-right"===e?"20px":""}getConfig(){const e=this.getAttribute("chatflow-id")||"";if(!e)return null;return{chatflowId:e,theme:this.getAttribute("theme")||void 0,position:this.getAttribute("position")||void 0,primaryColor:this.getAttribute("primary-color")||void 0,language:this.getAttribute("language")||void 0,displayMode:this.getAttribute("display-mode")||void 0,debug:this.hasAttribute("debug")?"true"===this.getAttribute("debug"):void 0}}renderWidget(){const e=this.getConfig();if(e)try{P(W($d,{ref:this.widgetRef,config:e}),this.mountPoint)}catch(e){throw e}}}function jd(){customElements.get("askdona-widget")||customElements.define("askdona-widget",Md)}let _d={current:null};async function Id(e){var r,n,t,o;try{const a=function(e){return e.chatflowId?e.theme&&!["light","dark","auto"].includes(e.theme)?{isValid:!1,error:'Invalid theme. Must be "light", "dark", or "auto"'}:e.position&&!["bottom-right","bottom-left"].includes(e.position)?{isValid:!1,error:'Invalid position. Must be "bottom-right" or "bottom-left"'}:e.language&&!["ja","en"].includes(e.language)?{isValid:!1,error:'Invalid language. Must be "ja" or "en"'}:{isValid:!0}:{isValid:!1,error:"chatflowId is required"}}(e);if(!a.isValid)throw new Error(a.error);!function(){if(!document.querySelector('meta[name="askdona-csp"]')){const e=document.createElement("meta");e.name="askdona-csp",e.content=["default-src 'self'","script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net","style-src 'self' 'unsafe-inline'","img-src 'self' data: https:","connect-src 'self' https://api.askdona.com wss://api.askdona.com","font-src 'self' data:","frame-ancestors 'none'"].join("; "),document.head.appendChild(e)}}();let i=null;try{i=await J(e.chatflowId,e.language)}catch(e){}let s={...e};if(null==i?void 0:i.embedConfig){const e=i.embedConfig.introTitle&&i.embedConfig.introMessage?{title:i.embedConfig.introTitle,message:i.embedConfig.introMessage}:null;e&&(s.introTitle=e.title,s.introMessage=e.message),i.embedConfig.exampleQuestions&&(s.exampleQuestions=i.embedConfig.exampleQuestions),i.embedConfig.featureFlags&&(s.defaultBoostMode=i.embedConfig.featureFlags.enableBoostMode,s.allowBoostModeToggle=i.embedConfig.featureFlags.allowBoostModeToggle,s.enableRagDeepResearch=i.embedConfig.featureFlags.enableRagDeepResearch),i.embedConfig.appearanceSettings&&(!s.primaryColor&&i.embedConfig.appearanceSettings.primaryColor&&(s.primaryColor=i.embedConfig.appearanceSettings.primaryColor),!s.theme&&i.embedConfig.appearanceSettings.theme&&(s.theme=i.embedConfig.appearanceSettings.theme),!s.position&&i.embedConfig.appearanceSettings.position&&(s.position=i.embedConfig.appearanceSettings.position),!s.displayMode&&i.embedConfig.appearanceSettings.displayMode&&(s.displayMode=i.embedConfig.appearanceSettings.displayMode))}jd();let l=document.querySelector("askdona-widget");l?(l.setAttribute("chatflow-id",s.chatflowId),s.theme&&l.setAttribute("theme",s.theme),s.position&&l.setAttribute("position",s.position),s.primaryColor&&l.setAttribute("primary-color",s.primaryColor),s.language&&l.setAttribute("language",s.language),s.displayMode&&l.setAttribute("display-mode",s.displayMode),s.customCSS&&l.setAttribute("custom-css",s.customCSS),(null===(t=s.instrumentSerif)||void 0===t?void 0:t.w400)&&l.setAttribute("instrument-serif-regular",s.instrumentSerif.w400),(null===(o=s.instrumentSerif)||void 0===o?void 0:o.w600)&&l.setAttribute("instrument-serif-600",s.instrumentSerif.w600),s.debug&&l.setAttribute("debug",String(!!s.debug))):(l=document.createElement("askdona-widget"),l.setAttribute("chatflow-id",s.chatflowId),s.theme&&l.setAttribute("theme",s.theme),s.position&&l.setAttribute("position",s.position),s.primaryColor&&l.setAttribute("primary-color",s.primaryColor),s.language&&l.setAttribute("language",s.language),s.displayMode&&l.setAttribute("display-mode",s.displayMode),s.customCSS&&l.setAttribute("custom-css",s.customCSS),(null===(r=s.instrumentSerif)||void 0===r?void 0:r.w400)&&l.setAttribute("instrument-serif-regular",s.instrumentSerif.w400),(null===(n=s.instrumentSerif)||void 0===n?void 0:n.w600)&&l.setAttribute("instrument-serif-600",s.instrumentSerif.w600),s.debug&&l.setAttribute("debug",String(!!s.debug)),document.body.appendChild(l)),s.onReady&&setTimeout(()=>{s.onReady&&s.onReady()},0),s.debug}catch(r){e.onError&&e.onError(r)}}function Ad(){const e=document.querySelector("askdona-widget");e&&e.parentNode&&e.parentNode.removeChild(e),_d={current:null}}function Dd(){const e=document.querySelector("askdona-widget");return e&&"function"==typeof e.open?e.open():_d.current?_d.current.open():void 0}function Td(){const e=document.querySelector("askdona-widget");return e&&"function"==typeof e.close?e.close():_d.current?_d.current.close():void 0}function Rd(e){const r=document.querySelector("askdona-widget");return r&&"function"==typeof r.sendMessage?r.sendMessage(e):_d.current?_d.current.sendMessage(e):void 0}if("undefined"!=typeof window){jd();const e=document.currentScript;e&&e.dataset.chatflowId&&window.addEventListener("DOMContentLoaded",async()=>{const r=e.dataset.chatflowId;if(r)try{await Id({chatflowId:r,theme:e.dataset.theme,position:e.dataset.position,primaryColor:e.dataset.primaryColor,language:e.dataset.language,displayMode:e.dataset.displayMode})}catch(e){}})}return window.AskDona={init:Id,destroy:Ad,open:Dd,close:Td,sendMessage:Rd},e.close=Td,e.destroy=Ad,e.init=Id,e.open=Dd,e.sendMessage=Rd,e}({});
