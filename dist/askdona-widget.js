var AskDona=function(e){"use strict";var r,n,t,o,a,i,s,d,l,c,u,h={},p=[],m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,g=Array.isArray;function f(e,r){for(var n in r)e[n]=r[n];return e}function b(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function v(e,n,t){var o,a,i,s={};for(i in n)"key"==i?o=n[i]:"ref"==i?a=n[i]:s[i]=n[i];if(arguments.length>2&&(s.children=arguments.length>3?r.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===s[i]&&(s[i]=e.defaultProps[i]);return y(e,s,o,a,null)}function y(e,r,o,a,i){var s={type:e,props:r,key:o,ref:a,h:null,m:null,v:0,S:null,C:null,constructor:void 0,$:null==i?++t:i,M:-1,_:0};return null==i&&null!=n.vnode&&n.vnode(s),s}function k(e){return e.children}function x(e,r){this.props=e,this.context=r}function w(e,r){if(null==r)return e.m?w(e.m,e.M+1):null;for(var n;r<e.h.length;r++)if(null!=(n=e.h[r])&&null!=n.S)return n.S;return"function"==typeof e.type?w(e):null}function S(e){var r,n;if(null!=(e=e.m)&&null!=e.C){for(e.S=e.C.base=null,r=0;r<e.h.length;r++)if(null!=(n=e.h[r])&&null!=n.S){e.S=e.C.base=n.S;break}return S(e)}}function z(e){(!e.j&&(e.j=!0)&&o.push(e)&&!C.I++||a!=n.debounceRendering)&&((a=n.debounceRendering)||i)(C)}function C(){for(var e,r,t,a,i,d,l,c=1;o.length;)o.length>c&&o.sort(s),e=o.shift(),c=o.length,e.j&&(t=void 0,i=(a=(r=e).$).S,d=[],l=[],r.A&&((t=f({},a)).$=a.$+1,n.vnode&&n.vnode(t),R(r.A,t,a,r.D,r.A.namespaceURI,32&a._?[i]:null,d,null==i?w(a):i,!!(32&a._),l),t.$=a.$,t.m.h[t.M]=t,T(d,t,l),t.S!=i&&S(t)));C.I=0}function $(e,r,n,t,o,a,i,s,d,l,c){var u,m,f,b,v,x,S=t&&t.h||p,z=r.length;for(d=function(e,r,n,t,o){var a,i,s,d,l,c=n.length,u=c,h=0;for(e.h=new Array(o),a=0;a<o;a++)null!=(i=r[a])&&"boolean"!=typeof i&&"function"!=typeof i?(d=a+h,(i=e.h[a]="string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?y(null,i,null,null,null):g(i)?y(k,{children:i},null,null,null):null==i.constructor&&i.v>0?y(i.type,i.props,i.key,i.ref?i.ref:null,i.$):i).m=e,i.v=e.v+1,s=null,-1!=(l=i.M=j(i,n,d,u))&&(u--,(s=n[l])&&(s._|=2)),null==s||null==s.$?(-1==l&&(o>c?h--:o<c&&h++),"function"!=typeof i.type&&(i._|=4)):l!=d&&(l==d-1?h--:l==d+1?h++:(l>d?h--:h++,i._|=4))):e.h[a]=null;if(u)for(a=0;a<c;a++)null!=(s=n[a])&&!(2&s._)&&(s.S==t&&(t=w(s)),N(s,s));return t}(n,r,S,d,z),u=0;u<z;u++)null!=(f=n.h[u])&&(m=-1==f.M?h:S[f.M]||h,f.M=u,x=R(e,f,m,o,a,i,s,d,l,c),b=f.S,f.ref&&m.ref!=f.ref&&(m.ref&&O(m.ref,null,f),c.push(f.ref,f.C||b,f)),null==v&&null!=b&&(v=b),4&f._||m.h===f.h?d=M(f,d,e):"function"==typeof f.type&&void 0!==x?d=x:b&&(d=b.nextSibling),f._&=-7);return n.S=v,d}function M(e,r,n){var t,o;if("function"==typeof e.type){for(t=e.h,o=0;t&&o<t.length;o++)t[o]&&(t[o].m=e,r=M(t[o],r,n));return r}e.S!=r&&(r&&e.type&&!n.contains(r)&&(r=w(e)),n.insertBefore(e.S,r||null),r=e.S);do{r=r&&r.nextSibling}while(null!=r&&8==r.nodeType);return r}function _(e,r){return r=r||[],null==e||"boolean"==typeof e||(g(e)?e.some(function(e){_(e,r)}):r.push(e)),r}function j(e,r,n,t){var o,a,i=e.key,s=e.type,d=r[n];if(null===d&&null==e.key||d&&i==d.key&&s==d.type&&!(2&d._))return n;if(t>(null==d||2&d._?0:1))for(o=n-1,a=n+1;o>=0||a<r.length;){if(o>=0){if((d=r[o])&&!(2&d._)&&i==d.key&&s==d.type)return o;o--}if(a<r.length){if((d=r[a])&&!(2&d._)&&i==d.key&&s==d.type)return a;a++}}return-1}function I(e,r,n){"-"==r[0]?e.setProperty(r,null==n?"":n):e[r]=null==n?"":"number"!=typeof n||m.test(r)?n:n+"px"}function A(e,r,n,t,o){var a,i;e:if("style"==r)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof t&&(e.style.cssText=t=""),t)for(r in t)n&&r in n||I(e.style,r,"");if(n)for(r in n)t&&n[r]==t[r]||I(e.style,r,n[r])}else if("o"==r[0]&&"n"==r[1])a=r!=(r=r.replace(d,"$1")),i=r.toLowerCase(),r=i in e||"onFocusOut"==r||"onFocusIn"==r?i.slice(2):r.slice(2),e.l||(e.l={}),e.l[r+a]=n,n?t?n.u=t.u:(n.u=l,e.addEventListener(r,a?u:c,a)):e.removeEventListener(r,a?u:c,a);else{if("http://www.w3.org/2000/svg"==o)r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=r&&"height"!=r&&"href"!=r&&"list"!=r&&"form"!=r&&"tabIndex"!=r&&"download"!=r&&"rowSpan"!=r&&"colSpan"!=r&&"role"!=r&&"popover"!=r&&r in e)try{e[r]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!=r[4]?e.removeAttribute(r):e.setAttribute(r,"popover"==r&&1==n?"":n))}}function D(e){return function(r){if(this.l){var t=this.l[r.type+e];if(null==r.t)r.t=l++;else if(r.t<t.u)return;return t(n.event?n.event(r):r)}}}function R(e,r,t,o,a,i,s,d,l,c){var u,h,p,m,v,y,w,S,z,C,M,_,j,I,A,D,R,T=r.type;if(null!=r.constructor)return null;128&t._&&(l=!!(32&t._),i=[d=r.S=t.S]),(u=n.v)&&u(r);e:if("function"==typeof T)try{if(S=r.props,z="prototype"in T&&T.prototype.render,C=(u=T.contextType)&&o[u.C],M=u?C?C.props.value:u.m:o,t.C?w=(h=r.C=t.C).m=h.R:(z?r.C=h=new T(S,M):(r.C=h=new x(S,M),h.constructor=T,h.render=P),C&&C.sub(h),h.props=S,h.state||(h.state={}),h.context=M,h.D=o,p=h.j=!0,h.T=[],h.F=[]),z&&null==h.O&&(h.O=h.state),z&&null!=T.getDerivedStateFromProps&&(h.O==h.state&&(h.O=f({},h.O)),f(h.O,T.getDerivedStateFromProps(S,h.O))),m=h.props,v=h.state,h.$=r,p)z&&null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),z&&null!=h.componentDidMount&&h.T.push(h.componentDidMount);else{if(z&&null==T.getDerivedStateFromProps&&S!==m&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(S,M),!h.S&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(S,h.O,M)||r.$==t.$){for(r.$!=t.$&&(h.props=S,h.state=h.O,h.j=!1),r.S=t.S,r.h=t.h,r.h.some(function(e){e&&(e.m=r)}),_=0;_<h.F.length;_++)h.T.push(h.F[_]);h.F=[],h.T.length&&s.push(h);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(S,h.O,M),z&&null!=h.componentDidUpdate&&h.T.push(function(){h.componentDidUpdate(m,v,y)})}if(h.context=M,h.props=S,h.A=e,h.S=!1,j=n.I,I=0,z){for(h.state=h.O,h.j=!1,j&&j(r),u=h.render(h.props,h.state,h.context),A=0;A<h.F.length;A++)h.T.push(h.F[A]);h.F=[]}else do{h.j=!1,j&&j(r),u=h.render(h.props,h.state,h.context),h.state=h.O}while(h.j&&++I<25);h.state=h.O,null!=h.getChildContext&&(o=f(f({},o),h.getChildContext())),z&&!p&&null!=h.getSnapshotBeforeUpdate&&(y=h.getSnapshotBeforeUpdate(m,v)),D=u,null!=u&&u.type===k&&null==u.key&&(D=F(u.props.children)),d=$(e,g(D)?D:[D],r,t,o,a,i,s,d,l,c),h.base=r.S,r._&=-161,h.T.length&&s.push(h),w&&(h.R=h.m=null)}catch(e){if(r.$=null,l||null!=i)if(e.then){for(r._|=l?160:128;d&&8==d.nodeType&&d.nextSibling;)d=d.nextSibling;i[i.indexOf(d)]=null,r.S=d}else for(R=i.length;R--;)b(i[R]);else r.S=t.S,r.h=t.h;n.S(e,r,t)}else null==i&&r.$==t.$?(r.h=t.h,r.S=t.S):d=r.S=E(t.S,r,t,o,a,i,s,l,c);return(u=n.diffed)&&u(r),128&r._?void 0:d}function T(e,r,t){for(var o=0;o<t.length;o++)O(t[o],t[++o],t[++o]);n.C&&n.C(r,e),e.some(function(r){try{e=r.T,r.T=[],e.some(function(e){e.call(r)})}catch(e){n.S(e,r.$)}})}function F(e){return"object"!=typeof e||null==e||e.v&&e.v>0?e:g(e)?e.map(F):f({},e)}function E(e,t,o,a,i,s,d,l,c){var u,p,m,f,v,y,k,x=o.props,S=t.props,z=t.type;if("svg"==z?i="http://www.w3.org/2000/svg":"math"==z?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=s)for(u=0;u<s.length;u++)if((v=s[u])&&"setAttribute"in v==!!z&&(z?v.localName==z:3==v.nodeType)){e=v,s[u]=null;break}if(null==e){if(null==z)return document.createTextNode(S);e=document.createElementNS(i,z,S.is&&S),l&&(n.N&&n.N(t,s),l=!1),s=null}if(null==z)x===S||l&&e.data==S||(e.data=S);else{if(s=s&&r.call(e.childNodes),x=o.props||h,!l&&null!=s)for(x={},u=0;u<e.attributes.length;u++)x[(v=e.attributes[u]).name]=v.value;for(u in x)if(v=x[u],"children"==u);else if("dangerouslySetInnerHTML"==u)m=v;else if(!(u in S)){if("value"==u&&"defaultValue"in S||"checked"==u&&"defaultChecked"in S)continue;A(e,u,null,v,i)}for(u in S)v=S[u],"children"==u?f=v:"dangerouslySetInnerHTML"==u?p=v:"value"==u?y=v:"checked"==u?k=v:l&&"function"!=typeof v||x[u]===v||A(e,u,v,x[u],i);if(p)l||m&&(p.P==m.P||p.P==e.innerHTML)||(e.innerHTML=p.P),t.h=[];else if(m&&(e.innerHTML=""),$("template"==t.type?e.content:e,g(f)?f:[f],t,o,a,"foreignObject"==z?"http://www.w3.org/1999/xhtml":i,s,d,s?s[0]:o.h&&w(o,0),l,c),null!=s)for(u=s.length;u--;)b(s[u]);l||(u="value","progress"==z&&null==y?e.removeAttribute("value"):null!=y&&(y!==e[u]||"progress"==z&&!y||"option"==z&&y!=x[u])&&A(e,u,y,x[u],i),u="checked",null!=k&&k!=e[u]&&A(e,u,k,x[u],i))}return e}function O(e,r,t){try{if("function"==typeof e){var o="function"==typeof e._;o&&e._(),o&&null==r||(e._=e(r))}else e.current=r}catch(e){n.S(e,t)}}function N(e,r,t){var o,a;if(n.unmount&&n.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.S||O(o,null,r)),null!=(o=e.C)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){n.S(e,r)}o.base=o.A=null}if(o=e.h)for(a=0;a<o.length;a++)o[a]&&N(o[a],r,t||"function"!=typeof e.type);t||b(e.S),e.C=e.m=e.S=void 0}function P(e,r,n){return this.constructor(e,n)}function L(e,t,o){var a,i,s;t==document&&(t=document.documentElement),n.m&&n.m(e,t),a=!1?null:t.h,i=[],s=[],R(t,e=t.h=v(k,null,[e]),a||h,h,t.namespaceURI,a?null:t.firstChild?r.call(t.childNodes):null,i,a?a.S:t.firstChild,false,s),T(i,e,s)}function q(e){if(!e)return"";const r=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#039;"),n=new Set(["A","BR","STRONG"]),t=new Set(["href","title"]),o=/^(https?:|mailto:|tel:)/i,a=document.createElement("template");a.innerHTML=e;const i=e=>{switch(e.nodeType){case Node.TEXT_NODE:return r(e.data);case Node.ELEMENT_NODE:{const a=e,s=a.tagName;if(!n.has(s)){let e="";for(const r of Array.from(a.childNodes))e+=i(r);return e}if("BR"===s)return"<br>";if("STRONG"===s){let e="";for(const r of Array.from(a.childNodes))e+=i(r);return`<strong>${e}</strong>`}if("A"===s){let e="",n="";for(const r of Array.from(a.attributes)){const a=r.name.toLowerCase();if(t.has(a))if("href"===a){const n=(r.value||"").trim();o.test(n)&&(e=n)}else"title"===a&&(n=r.value||"")}let s="";for(const e of Array.from(a.childNodes))s+=i(e);const d=' rel="noopener noreferrer"',l=e?` href="${r(e)}"`:"",c=n?` title="${r(n)}"`:"";return l?`<a${l}${c}${' target="_blank"'}${d}>${s}</a>`:s}return""}default:return""}};let s="";for(const e of Array.from(a.content.childNodes))s+=i(e);return s}function H(){return window.crypto&&window.crypto.randomUUID?window.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const r=16*Math.random()|0;return("x"===e?r:3&r|8).toString(16)})}r=p.slice,n={S:function(e,r,n,t){for(var o,a,i;r=r.m;)if((o=r.C)&&!o.m)try{if((a=o.constructor)&&null!=a.getDerivedStateFromError&&(o.setState(a.getDerivedStateFromError(e)),i=o.j),null!=o.componentDidCatch&&(o.componentDidCatch(e,t||{}),i=o.j),i)return o.R=o}catch(r){e=r}throw e}},t=0,x.prototype.setState=function(e,r){var n;n=null!=this.O&&this.O!=this.state?this.O:this.O=f({},this.state),"function"==typeof e&&(e=e(f({},n),this.props)),e&&f(n,e),null!=e&&this.$&&(r&&this.F.push(r),z(this))},x.prototype.forceUpdate=function(e){this.$&&(this.S=!0,e&&this.T.push(e),z(this))},x.prototype.render=k,o=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,r){return e.$.v-r.$.v},C.I=0,d=/(PointerCapture)$|Capture$/i,l=0,c=D(!1),u=D(!0),"undefined"!=typeof window&&function(){if(window.self!==window.top)try{window.parent.document}catch(e){}}();const B="https://app.askdona.com/api/embed/v1";async function J(e,r={}){const n=new AbortController,t=setTimeout(()=>n.abort(),3e4);try{const o={"X-Widget-Version":"1.0.0",...r.headers||{}};r.method&&["POST","PUT","PATCH"].includes(r.method)&&(o["Content-Type"]="application/json");const a=await fetch(`${B}${e}`,{...r,signal:n.signal,headers:o});if(clearTimeout(t),!a.ok){const e=await a.json().catch(()=>({message:"Request failed"}));throw new Error(e.message||`HTTP ${a.status}`)}return await a.json()}catch(e){if(clearTimeout(t),"AbortError"===e.name)throw new Error("Request timeout");throw e}}async function V(e,r){try{const n=r?`?language=${encodeURIComponent(r)}`:"";return await J(`/welcome/${e}${n}`)}catch(e){return null}}var U=0;function W(e,r,t,o,a,i){r||(r={});var s,d,l=r;if("ref"in l)for(d in l={},r)"ref"==d?s=r[d]:l[d]=r[d];var c={type:e,props:l,key:t,ref:s,h:null,m:null,v:0,S:null,C:null,constructor:void 0,$:--U,M:-1,_:0,L:a,q:i};if("function"==typeof e&&(s=e.defaultProps))for(d in s)void 0===l[d]&&(l[d]=s[d]);return n.vnode&&n.vnode(c),c}var Q,G,Z,K,Y=0,X=[],ee=n,re=ee.v,ne=ee.I,te=ee.diffed,oe=ee.C,ae=ee.unmount,ie=ee.m;function se(e,r){ee.T&&ee.T(G,e,Y||r),Y=0;var n=G.H||(G.H={m:[],T:[]});return e>=n.m.length&&n.m.push({}),n.m[e]}function de(e){return Y=1,function(e,r,n){var t=se(Q++,2);if(t.t=e,!t.C&&(t.m=[n?n(r):ke(void 0,r),function(e){var r=t.B?t.B[0]:t.m[0],n=t.t(r,e);r!==n&&(t.B=[n,t.m[1]],t.C.setState({}))}],t.C=G,!G.J)){var o=function(e,r,n){if(!t.C.H)return!0;var o=t.C.H.m.filter(function(e){return!!e.C});if(o.every(function(e){return!e.B}))return!a||a.call(this,e,r,n);var i=t.C.props!==e;return o.forEach(function(e){if(e.B){var r=e.m[0];e.m=e.B,e.B=void 0,r!==e.m[0]&&(i=!0)}}),a&&a.call(this,e,r,n)||i};G.J=!0;var a=G.shouldComponentUpdate,i=G.componentWillUpdate;G.componentWillUpdate=function(e,r,n){if(this.S){var t=a;a=void 0,o(e,r,n),a=t}i&&i.call(this,e,r,n)},G.shouldComponentUpdate=o}return t.B||t.m}(ke,e)}function le(e,r){var n=se(Q++,3);!ee.O&&ye(n.H,r)&&(n.m=e,n.u=r,G.H.T.push(n))}function ce(e,r){var n=se(Q++,4);!ee.O&&ye(n.H,r)&&(n.m=e,n.u=r,G.T.push(n))}function ue(e){return Y=5,he(function(){return{current:e}},[])}function he(e,r){var n=se(Q++,7);return ye(n.H,r)&&(n.m=e(),n.H=r,n.T=e),n.m}function pe(e,r){return Y=8,he(function(){return e},r)}function me(){for(var e;e=X.shift();)if(e.A&&e.H)try{e.H.T.forEach(be),e.H.T.forEach(ve),e.H.T=[]}catch(r){e.H.T=[],ee.S(r,e.$)}}ee.v=function(e){G=null,re&&re(e)},ee.m=function(e,r){e&&r.h&&r.h.N&&(e.N=r.h.N),ie&&ie(e,r)},ee.I=function(e){ne&&ne(e),Q=0;var r=(G=e.C).H;r&&(Z===G?(r.T=[],G.T=[],r.m.forEach(function(e){e.B&&(e.m=e.B),e.u=e.B=void 0})):(r.T.forEach(be),r.T.forEach(ve),r.T=[],Q=0)),Z=G},ee.diffed=function(e){te&&te(e);var r=e.C;r&&r.H&&(r.H.T.length&&(1!==X.push(r)&&K===ee.requestAnimationFrame||((K=ee.requestAnimationFrame)||fe)(me)),r.H.m.forEach(function(e){e.u&&(e.H=e.u),e.u=void 0})),Z=G=null},ee.C=function(e,r){r.some(function(e){try{e.T.forEach(be),e.T=e.T.filter(function(e){return!e.m||ve(e)})}catch(n){r.some(function(e){e.T&&(e.T=[])}),r=[],ee.S(n,e.$)}}),oe&&oe(e,r)},ee.unmount=function(e){ae&&ae(e);var r,n=e.C;n&&n.H&&(n.H.m.forEach(function(e){try{be(e)}catch(e){r=e}}),n.H=void 0,r&&ee.S(r,n.$))};var ge="function"==typeof requestAnimationFrame;function fe(e){var r,n=function(){clearTimeout(t),ge&&cancelAnimationFrame(r),setTimeout(e)},t=setTimeout(n,35);ge&&(r=requestAnimationFrame(n))}function be(e){var r=G,n=e.C;"function"==typeof n&&(e.C=void 0,n()),G=r}function ve(e){var r=G;e.C=e.m(),G=r}function ye(e,r){return!e||e.length!==r.length||r.some(function(r,n){return r!==e[n]})}function ke(e,r){return"function"==typeof r?r(e):r}let xe,we,Se,ze={data:""},Ce=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ze,$e=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Me=/\/\*[^]*?\*\/|  +/g,_e=/\n+/g,je=(e,r)=>{let n="",t="",o="";for(let a in e){let i=e[a];"@"==a[0]?"i"==a[1]?n=a+" "+i+";":t+="f"==a[1]?je(i,a):a+"{"+je(i,"k"==a[1]?"":r)+"}":"object"==typeof i?t+=je(i,r?r.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):a):null!=i&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=je.p?je.p(a,i):a+":"+i+";")}return n+(r&&o?r+"{"+o+"}":o)+t},Ie={},Ae=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+Ae(e[n]);return r}return e},De=(e,r,n,t,o)=>{let a=Ae(e),i=Ie[a]||(Ie[a]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(a));if(!Ie[i]){let r=a!==e?e:(e=>{let r,n,t=[{}];for(;r=$e.exec(e.replace(Me,""));)r[4]?t.shift():r[3]?(n=r[3].replace(_e," ").trim(),t.unshift(t[0][n]=t[0][n]||{})):t[0][r[1]]=r[2].replace(_e," ").trim();return t[0]})(e);Ie[i]=je(o?{["@keyframes "+i]:r}:r,n?"":"."+i)}let s=n&&Ie.g?Ie.g:null;return n&&(Ie.g=Ie[i]),((e,r,n,t)=>{t?r.data=r.data.replace(t,e):-1===r.data.indexOf(e)&&(r.data=n?e+r.data:r.data+e)})(Ie[i],r,t,s),i};function Re(e){let r=this||{},n=e.call?e(r.p):e;return De(n.unshift?n.raw?((e,r,n)=>e.reduce((e,t,o)=>{let a=r[o];if(a&&a.call){let e=a(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=r?"."+r:e&&"object"==typeof e?e.props?"":je(e,""):!1===e?"":e}return e+t+(null==a?"":a)},""))(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,Ce(r.target),r.g,r.o,r.k)}Re.bind({g:1});let Te=Re.bind({k:1});function Fe(e,r){let n=this||{};return function(){let r=arguments;return function t(o,a){let i=Object.assign({},o),s=i.className||t.className;n.p=Object.assign({theme:we&&we()},i),n.o=/ *go\d+/.test(s),i.className=Re.apply(n,r)+(s?" "+s:"");let d=e;return e[0]&&(d=i.as||e,delete i.as),Se&&d[0]&&Se(i),xe(d,i)}}}const Ee=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Oe=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,n)=>n?n.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},Ne=(...e)=>e.filter((e,r,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===r).join(" ").trim();var Pe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};const Le=({color:e="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:t,children:o,iconNode:a,class:i="",...s})=>v("svg",{...Pe,width:String(r),height:r,stroke:e,"stroke-width":t?24*Number(n)/Number(r):n,class:["lucide",i].join(" "),...s},[...a.map(([e,r])=>v(e,r)),..._(o)]),qe=(e,r)=>{const n=({class:n="",children:t,...o})=>v(Le,{...o,iconNode:r,class:Ne(`lucide-${Ee(Oe(e))}`,`lucide-${Ee(e)}`,n)},t);return n.displayName=Oe(e),n},He=qe("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),Be=qe("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Je=qe("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),Ve=qe("beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]),Ue=qe("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),We=qe("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),Qe=qe("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Ge=qe("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),Ze=qe("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),Ke=qe("circle-question-mark",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Ye=qe("clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]),Xe=qe("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),er=qe("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),rr=qe("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),nr=qe("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),tr=qe("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),or=qe("funnel",[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]]),ar=qe("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),ir=qe("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),sr=qe("loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]),dr=qe("message-circle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]),lr=qe("microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]),cr=qe("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),ur=qe("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]),hr=qe("share-2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),pr=qe("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]),mr=qe("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]),gr=qe("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),fr=qe("thumbs-down",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]]),br=qe("thumbs-up",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]),vr=qe("timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),yr=qe("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),kr=qe("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),xr=qe("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function wr({headers:e,data:r}){return W(Or,{children:W("table",{children:[W("thead",{children:W("tr",{children:e.map((e,r)=>W("th",{children:e},r))})}),W("tbody",{children:r.map((e,r)=>W("tr",{children:e.map((e,r)=>W("td",{children:e},r))},r))})]})})}function Sr({code:e,language:r}){const[n,t]=de(!1);return W(Nr,{children:[W(Pr,{children:[W(Lr,{children:r||"code"}),W(qr,{onClick:async()=>{try{await navigator.clipboard.writeText(e),t(!0),setTimeout(()=>t(!1),2e3)}catch(r){const n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select();try{document.execCommand("copy")}catch(e){}document.body.removeChild(n),t(!0),setTimeout(()=>t(!1),2e3)}},title:"Copy code",children:W(n?Ue:er,{size:14})})]}),W(Hr,{children:W("code",{children:e})})]})}function zr({isOpen:e,onClose:r,onSubmit:n,rating:t,config:o}){const[a,i]=de(""),[s,d]=de(!1);if(!e)return null;const l="THUMBS_UP"===t,c="ja"===o.language?l?"何が良かったですか？":"何が改善できますか？":l?"What was helpful?":"What could be improved?",u="ja"===o.language?l?"例：詳しい説明で理解しやすかった":"例：もう少し具体的な例が欲しい":l?"e.g., Clear and detailed explanation":"e.g., Could use more specific examples";return W(Qr,{onClick:r,children:W(Gr,{onClick:e=>e.stopPropagation(),children:[W(Zr,{children:[W(Kr,{positive:l,children:W(l?br:fr,{size:16})}),W(Yr,{children:c})]}),W(Xr,{children:W(en,{value:a,onChange:e=>i(e.target.value),placeholder:u,rows:3})}),W(rn,{children:[W(nn,{onClick:()=>{n(""),r()},children:"ja"===o.language?"スキップ":"Skip"}),W(tn,{onClick:()=>{d(!0);try{n(a),r()}catch(e){}finally{d(!1)}},disabled:s,children:s?"ja"===o.language?"送信中...":"Sending...":"ja"===o.language?"送信":"Send"})]})]})})}function Cr({messageId:e,sessionId:r,feedback:n,onFeedbackSubmit:t,config:o}){const[a,i]=de(!1),[s,d]=de(null),[l,c]=de(n||null),u=e=>{l||(d(e),i(!0))};return W(k,{children:[W(Br,{children:[W(Jr,{children:"ja"===o.language?"この回答は役に立ちましたか？ 更なる改善のため、ぜひフィードバックをお願いします。":"Was this answer helpful? For further improvements, please share your feedback."}),W(Vr,{children:[W(Ur,{onClick:()=>u("THUMBS_UP"),active:"THUMBS_UP"===(null==l?void 0:l.rating),disabled:!!l,positive:!0,title:"ja"===o.language?"役に立った":"Helpful",children:W(br,{size:14})}),W(Ur,{onClick:()=>u("THUMBS_DOWN"),active:"THUMBS_DOWN"===(null==l?void 0:l.rating),disabled:!!l,positive:!1,title:"ja"===o.language?"役に立たなかった":"Not helpful",children:W(fr,{size:14})})]}),l&&W(Wr,{children:"ja"===o.language?"フィードバックをありがとうございます！":"Thank you for your feedback!"})]}),W(zr,{isOpen:a,onClose:()=>{i(!1),d(null)},onSubmit:r=>{if(!s)return;const n={rating:s,content:r||void 0,submittedAt:(new Date).toISOString(),isSubmitted:!0};c(n),t(e,s,r)},rating:s,config:o})]})}function $r(e,r=!1){if(!e)return[];const n=[],t=e.split("\n");let o=[],a=!1,i=[],s="",d=!1,l=[];const c=()=>{if(o.length>0){const e=o.join("\n");n.push(W("p",{children:Mr(e)},n.length)),o=[]}},u=()=>{if(l.length>0){const e=l[0].split("|").slice(1,-1).map(e=>e.trim()),r=l.slice(2).map(e=>e.split("|").slice(1,-1).map(e=>e.trim()));n.push(W(wr,{headers:e,data:r},n.length)),l=[]}};for(let e=0;e<t.length;e++){const h=t[e],p=h.trim();if(p.startsWith("```"))a?(n.push(W(Sr,{code:i.join("\n"),language:s},n.length)),i=[],s="",a=!1):(c(),a=!0,s=p.slice(3)||"");else if(a)i.push(h);else{if(!r&&p.includes("|")&&e+1<t.length){if(t[e+1].trim().match(/^[\|\s\-:]+$/)){c(),d=!0,l=[p];continue}}if(d)""!==p&&p.includes("|")?l.push(p):(u(),d=!1,p&&o.push(h));else{if(p.match(/^#{1,6}\s/)){c();const e=p.match(/^#+/),r=e?e[0].length:1,t=p.slice(r).trim(),o=`h${r}`;n.push(W(o,{children:Mr(t)},n.length));continue}if(p.match(/^[*+-]\s/)||p.match(/^\d+\.\s/)){c();const r=[],o=null!==p.match(/^\d+\.\s/);for(;e<t.length&&t[e].trim().match(/^[*+-]\s|^\d+\.\s/);){const n=t[e].trim().replace(/^[*+-]\s|^\d+\.\s/,"");r.push(W("li",{children:Mr(n)},r.length)),e++}e--,o?n.push(W("ol",{children:r},n.length)):n.push(W("ul",{children:r},n.length));continue}p.match(/^(-{3,}|\*{3,}|_{3,})$/)?(c(),n.push(W("hr",{},n.length))):""!==p?o.push(h):c()}}}return c(),d&&u(),n}function Mr(e){const r=[];let n=0;const t=[{regex:/\*\*(.*?)\*\*/g,render:(e,r)=>W("strong",{children:r},n++)},{regex:/\*(.*?)\*/g,render:(e,r)=>W("em",{children:r},n++)},{regex:/`([^`]+)`/g,render:(e,r)=>W("code",{className:"inline-code",children:r},n++)},{regex:/\[([^\]]+)\]\(([^)]+)\)/g,render:(e,r,t)=>W("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"link",children:r},n++)},{regex:/\[(\d+(?:,\s*\d+)*)\]/g,render:e=>W("span",{className:"citation",children:e},n++)}],o=[];t.forEach(r=>{let n;for(r.regex.lastIndex=0;null!==(n=r.regex.exec(e));){const e=[n[0]];for(let r=1;r<n.length;r++)e.push(n[r]);o.push({start:n.index,end:n.index+n[0].length,element:r.render.apply(null,e)})}}),o.sort((e,r)=>e.start-r.start);const a=[];let i=0;for(const e of o)e.start>=i&&(a.push(e),i=e.end);let s=0;for(const n of a)n.start>s&&r.push(e.substring(s,n.start)),r.push(n.element),s=n.end;return s<e.length&&r.push(e.substring(s)),r.length>0?r:[e]}function _r({messages:e,isLoading:r,streamingContent:n,config:t,sessionId:o,onFeedbackSubmit:a}){const i=ue(null);return le(()=>{var e;null===(e=i.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},[e,n]),W(jr,{children:[e.map((e,r)=>{var n,i,s;return"assistant"!==e.role||e.content?W(k,{children:[W(Ir,{isUser:"user"===e.role,children:"user"===e.role?W(Ar,{children:[W(Dr,{children:e.content}),"boost"===(null===(n=e.metadata)||void 0===n?void 0:n.mode)&&W(on,{children:[W(vr,{size:12}),W("span",{children:"Boost"})]})]}):W(k,{children:W(Rr,{children:W(Tr,{children:[W(Fr,{children:$r(e.content||"",!1)}),"boost"===(null===(i=e.metadata)||void 0===i?void 0:i.mode)&&W(on,{assistant:!0,children:[W(vr,{size:12}),W("span",{children:"Boost"})]})]})})})},e.id||r),"assistant"===e.role&&W(Ir,{isUser:!1,children:W(Rr,{children:W(Tr,{children:W(Cr,{messageId:e.id,sessionId:o,feedback:null===(s=e.metadata)||void 0===s?void 0:s.feedback,onFeedbackSubmit:a,config:t})})})},`${e.id}-feedback`)]}):null}).filter(Boolean),r&&n&&n.trim()&&W(Ir,{isUser:!1,children:W(Rr,{children:W(Tr,{children:[W(Er,{children:"ja"===t.language?"リアルタイム応答中...":"Streaming response..."}),W(Fr,{children:(()=>{try{return $r(n||"",!0)}catch(e){return W("p",{children:n||""})}})()})]})})}),W("div",{ref:i})]})}const jr=Fe("div")`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`,Ir=Fe("div")`
  display: flex;
  justify-content: ${e=>e.isUser?"flex-end":"flex-start"};
  align-items: flex-start;
`,Ar=Fe("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  max-width: 70%;
`,Dr=Fe("div")`
  padding: 1rem 1.25rem;
  background: var(--askdona-primary);
  color: white;
  border-radius: 1rem 1rem 0.25rem 1rem;
  font-size: 0.875rem;
  line-height: 1.6;
  word-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`,Rr=Fe("div")`
  display: flex;
  gap: 0.75rem;
  max-width: 85%;
`,Tr=Fe("div")`
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
`,Fr=Fe("div")`
  line-height: 1.6;
  
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
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
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
`,Er=Fe("div")`
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
`,Or=Fe("div")`
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
`,Nr=Fe("div")`
  margin: 16px 0;
  border-radius: 8px;
  border: 1px solid var(--askdona-border);
  background: var(--askdona-surface);
  overflow: hidden;
`,Pr=Fe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: var(--askdona-bg-secondary);
  border-bottom: 1px solid var(--askdona-border);
`,Lr=Fe("span")`
  font-size: 12px;
  color: var(--askdona-text-secondary);
  font-weight: 500;
  text-transform: uppercase;
`,qr=Fe("button")`
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
`,Hr=Fe("pre")`
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
`,Br=Fe("div")`
  margin-top: 12px;
  padding: 8px 0;
`,Jr=Fe("div")`
  font-size: inherit;
  color: var(--askdona-text); /* use normal text color */
  margin-bottom: 6px;
  font-weight: 500;
`,Vr=Fe("div")`
  display: flex;
  gap: 6px;
  align-items: center;
`,Ur=Fe("button")`
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
`,Wr=Fe("div")`
  font-size: 11px;
  color: var(--askdona-text-secondary);
  margin-top: 6px;
  font-style: italic;
`,Qr=Fe("div")`
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
`,Gr=Fe("div")`
  background: var(--askdona-background);
  border-radius: 12px;
  padding: 24px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--askdona-border);
`,Zr=Fe("div")`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,Kr=Fe("div")`
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
`,Yr=Fe("h3")`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--askdona-text);
`,Xr=Fe("div")`
  margin-bottom: 20px;
`,en=Fe("textarea")`
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
`,rn=Fe("div")`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,nn=Fe("button")`
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
`,tn=Fe("button")`
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
`,on=Fe("div")`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  background: #1D3D5E;
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
`,an=Fe("div")`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  padding: 16px;
`,sn=Fe("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`,dn=Fe("div")`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #1e293b;
  font-size: 14px;
`,ln=Fe("button")`
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
`,cn=Fe("div")`
  margin-bottom: 12px;
`,un=Fe("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
`,hn=Fe("label")`
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
`,pn=Fe("input")`
  margin: 0;
  width: 12px;
  height: 12px;
`,mn=Fe("div")`
  font-size: 12px;
  color: #64748b;
  padding-top: 8px;
  border-top: 1px solid #f1f5f9;
`;function gn({filter:e,keyData:r,onFilterChange:n,onFilterRemove:t}){const o=pe(r=>{const t=e.selectedValues.includes(r)?e.selectedValues.filter(e=>e!==r):[...e.selectedValues,r];n({...e,selectedValues:t})},[e,n]),a=pe(()=>{t(e.key)},[e.key,t]);return W(an,{children:[W(sn,{children:[W(dn,{children:[W(mr,{size:14}),e.key,r.isCustom&&W("span",{style:{fontSize:"10px",color:"#6b7280",background:"#f3f4f6",padding:"2px 6px",borderRadius:"8px"},children:"カスタム"})]}),W(ln,{onClick:a,title:"フィルターを削除",children:W(kr,{size:14})})]}),W(cn,{children:W(un,{children:r.values.map(r=>{const n=e.selectedValues.includes(r);return W(hn,{isSelected:n,onClick:()=>o(r),children:[W(pn,{type:"checkbox",checked:n,onChange:()=>o(r)}),r]},r)})})}),W(mn,{children:e.selectedValues.length>0?W(k,{children:[W("strong",{children:[e.selectedValues.length,"個の値を選択中:"]}),W("br",{}),e.selectedValues.join(", "),W("br",{}),W("em",{children:"選択した値のいずれかを含むファイルが対象になります (OR条件)"})]}):W("em",{children:"値を選択してください"})})]})}const fn=Fe("div")`
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
`,bn=Fe("div")`
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
`,vn=Fe("div")`
  padding: 12px 20px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,yn=Fe("h2")`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 8px;
`,kn=Fe("button")`
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
`,xn=Fe("div")`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,wn=Fe("div")`
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
`,Sn=Fe("div")`
  margin-bottom: 16px;
`,zn=Fe("label")`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  display: block;
`,Cn=Fe("div")`
  display: flex;
  gap: 16px;
`,$n=Fe("label")`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #4b5563;
`,Mn=Fe("input")`
  margin: 0;
`,_n=Fe("button")`
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
`,jn=Fe("div")`
  flex: 1;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,In=Fe("div")`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,An=Fe("h3")`
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 16px 0;
`,Dn=Fe("div")`
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`,Rn=Fe("input")`
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  margin-bottom: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2364748b' viewBox='0 0 24 24'%3E%3Cpath d='M21 20l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 12px center;
`,Tn=Fe("button")`
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
`,Fn=Fe("div")`
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 4px;
`,En=Fe("div")`
  font-size: 12px;
  color: #64748b;
`,On=Fe("div")`
  text-align: center;
  color: #64748b;
  padding: 40px 20px;
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    color: #cbd5e1;
  }
`,Nn=Fe("div")`
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
`,Pn=Fe("div")`
  text-align: center;
  color: #ef4444;
  padding: 40px 20px;
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
  }
`;function Ln({isOpen:e,onClose:r,metadataKeys:n,filters:t,onFiltersChange:o,isLoading:a,error:i}){const[s,d]=de(""),[l,c]=de(t||{filters:[],globalOperator:"AND"});le(()=>{c(t||{filters:[],globalOperator:"AND"})},[t]);const u=pe(e=>{e.target===e.currentTarget&&r()},[r]),h=pe(()=>{const e=l.filters.some(e=>e.selectedValues.length>0);o(e?l:null),r()},[l,o,r]),p=pe(()=>{c({filters:[],globalOperator:"AND"})},[]),m=pe(e=>{const r={key:e,selectedValues:[],operator:"OR"};c(e=>({...e,filters:[...e.filters,r]}))},[]),g=pe(e=>{c(r=>({...r,filters:r.filters.filter(r=>r.key!==e)}))},[]),f=pe(e=>{c(r=>({...r,filters:r.filters.map(r=>r.key===e.key?e:r)}))},[]),b=pe(e=>{c(r=>({...r,globalOperator:e}))},[]),v=n.filter(e=>{const r=l.filters.some(r=>r.key===e.key);if(r)return!1;if(s){const r=s.toLowerCase();return e.key.toLowerCase().includes(r)||e.values.some(e=>e.toLowerCase().includes(r))}return!0});return e?W(fn,{onClick:u,children:W(bn,{onClick:e=>e.stopPropagation(),children:[W(vn,{children:[W(yn,{children:[W(or,{size:20}),"絞り込み設定",l.filters.length>0&&W("span",{style:{color:"#64748b",fontWeight:400,fontSize:"14px"},children:["(",l.filters.reduce((e,r)=>e+r.selectedValues.length,0),"件の条件)"]})]}),W(kn,{onClick:r,children:W(kr,{size:20})})]}),W(xn,{children:[l.filters.length>0&&W(wn,{children:[l.filters.length>1&&W(Sn,{children:[W(zn,{children:"フィルター間の関係"}),W(Cn,{children:[W($n,{children:[W(Mn,{type:"radio",name:"globalOperator",checked:"AND"===l.globalOperator,onChange:()=>b("AND")}),"AND（すべての条件を満たす）"]}),W($n,{children:[W(Mn,{type:"radio",name:"globalOperator",checked:"OR"===l.globalOperator,onChange:()=>b("OR")}),"OR（いずれかの条件を満たす）"]})]})]}),W("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[W("span",{style:{fontSize:"14px",color:"#64748b"},children:"文書のメタデータでフィルタリングして検索範囲を絞り込みます"}),l.filters.length>0&&W(_n,{onClick:p,children:"すべてクリア"})]})]}),W(jn,{children:[W(In,{children:[W(An,{children:"設定済みフィルター"}),W(Dn,{children:l.filters.length>0?W("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:l.filters.map(e=>{const r=n.find(r=>r.key===e.key);return r?W(gn,{filter:e,keyData:r,onFilterChange:f,onFilterRemove:g},e.key):null})}):W(On,{children:[W(or,{}),W("div",{style:{fontWeight:500,marginBottom:"4px"},children:"まだフィルターが設定されていません"}),W("div",{style:{fontSize:"14px"},children:"右側から絞り込み項目を選択してください"})]})})]}),W(In,{children:[W(An,{children:"利用可能な絞り込み"}),W(Rn,{type:"text",placeholder:"絞り込み条件を検索...",value:s,onChange:e=>d(e.target.value)}),W(Dn,{children:a?W(Nn,{children:[W(ir,{}),"読み込み中..."]}):i?W(Pn,{children:[W(Ge,{}),W("div",{style:{fontWeight:500,marginBottom:"4px"},children:"エラーが発生しました"}),W("div",{style:{fontSize:"14px"},children:i})]}):v.length>0?W("div",{children:v.map(e=>W(Tn,{onClick:()=>m(e.key),children:[W(Fn,{children:e.key}),W(En,{children:[e.values.length,"個の値 • ",e.count,"件のファイル",W("br",{}),"例: ",e.values.slice(0,3).join(", "),e.values.length>3&&"..."]})]},e.key))}):W(On,{children:[W(ur,{}),W("div",{style:{fontWeight:500,marginBottom:"4px"},children:s?"検索結果がありません":"すべてのメタデータキーが選択済みです"})]})})]})]})]}),W("div",{style:{padding:"16px 20px",borderTop:"1px solid #e2e8f0",display:"flex",justifyContent:"flex-end",gap:"8px"},children:[W("button",{onClick:r,style:{padding:"8px 16px",border:"1px solid #e2e8f0",background:"white",color:"#374151",borderRadius:"6px",cursor:"pointer"},children:"キャンセル"}),W("button",{onClick:h,style:{padding:"8px 16px",border:"none",background:"#3b82f6",color:"white",borderRadius:"6px",cursor:"pointer",fontWeight:"500"},children:"適用"})]})]})}):null}const qn=Fe("button")`
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
`,Hn=Fe("span")`
  background: rgba(255, 255, 255, 0.9);
  color: #1e40af;
  padding: 0px 4px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 600;
  min-width: 14px;
  text-align: center;
  margin-left: 2px;
`,Bn=Fe(or)`
  width: 14px;
  height: 14px;
`;function Jn({chatflowId:e,filters:r,onFiltersChange:n,disabled:t=!1,className:o,language:a="ja"}){var i;const[s,d]=de(!1),[l,c]=de(!1),[u,h]=de([]),[p,m]=de(null),[g,f]=de(!1),[b,v]=de(null),[y,x]=de(!1),w=(null===(i=null==r?void 0:r.filters)||void 0===i?void 0:i.reduce((e,r)=>{var n;return e+((null===(n=r.selectedValues)||void 0===n?void 0:n.length)||0)},0))||0,S=w>0;le(()=>{let r=!0;const n=async()=>{if(await new Promise(e=>setTimeout(e,10)),r){f(!0);try{const n=await async function(e){try{return await J(`/metadata/${e}/check`,{method:"GET"})}catch(e){return{enable_metadata_filtering:!1,error:e.message}}}(e);r&&(m(n.enable_metadata_filtering),v(null))}catch(e){r&&(m(!1),v(e.message))}finally{r&&f(!1)}}};return e&&n(),()=>{r=!1}},[e]);const z=pe(()=>{d(!0),!g&&y||c(!0),v(null)},[g,y]);le(()=>{if(!s||y)return;if(g)return;if(!1===p)return v("メタデータフィルタリングはこのチャットフローで利用できません"),c(!1),void x(!0);(async()=>{try{const r=await async function(e){try{return await J(`/metadata/${e}/keys`,{method:"GET"})}catch(e){return{success:!1,error:e.message}}}(e);r.success&&r.metadataKeys?h(r.metadataKeys):(v(r.error||"Failed to fetch metadata keys"),h([])),x(!0)}catch(e){v(e.message),h([]),x(!0)}finally{c(!1)}})()},[s,e,y,g,p]);const C=pe(()=>{d(!1),h([]),c(!1),v(null),x(!1)},[]);return!0!==p?null:W(k,{children:[W(qn,{hasActiveFilters:S,onClick:z,disabled:t,className:o,type:"button",title:g?"ja"===a?"フィルタ機能を確認中...":"Checking filter availability...":"ja"===a?"結果を絞り込む":"Filter results",children:[W(Bn,{}),W("span",{children:"ja"===a?"絞り込み":"Filter"}),S&&W(Hn,{children:w})]}),s&&W(Ln,{isOpen:s,onClose:C,metadataKeys:u,filters:r,onFiltersChange:n,isLoading:l,error:b})]})}const Vn={idle:0,initializing:10,thinking:22,searching:42,synthesizing:58,processing:72,streaming:88,answering:90,finalizing:96,completing:98,complete:100,error:100},Un=[{time:0,minProgress:5,label:"initializing"},{time:2e3,minProgress:12,label:"thinking"},{time:5e3,minProgress:20,label:"searching"},{time:9e3,minProgress:32,label:"synthesizing"},{time:13e3,minProgress:48,label:"processing"},{time:16e3,minProgress:64,label:"answering"},{time:18e3,minProgress:76,label:"finalizing"},{time:2e4,minProgress:88,label:"completing"},{time:21e3,minProgress:96,label:"complete"}],Wn=[{time:0,minProgress:5,label:"initializing"},{time:2e3,minProgress:12,label:"thinking"},{time:5e3,minProgress:20,label:"searching"},{time:9e3,minProgress:32,label:"synthesizing"},{time:13e3,minProgress:48,label:"processing"},{time:16e3,minProgress:64,label:"answering"},{time:29e3,minProgress:76,label:"finalizing"},{time:31e3,minProgress:88,label:"completing"},{time:32e3,minProgress:96,label:"complete"}];const Qn={ja:{thinking:"考え中...",searching:"データベースを検索中...",synthesizing:"情報を整理中...",answering:"推論中...",executing_functions:"ツールを実行中...",processing_function_results:"実行結果を処理中...",complete:"情報を統合中...",error:"エラーが発生しました"},en:{thinking:"Thinking...",searching:"Searching the database...",synthesizing:"Organizing information...",answering:"Reasoning...",executing_functions:"Running tools...",processing_function_results:"Processing tool results...",complete:"Synthesizing...",error:"An error occurred"}};function Gn({messages:e,isLoading:r,streamingContent:n,onSendMessage:t,error:o,config:a,currentState:i,boostMode:s=!1,onBoostModeChange:d,sessionId:l,onFeedbackSubmit:c,showIntro:u,metadataFilters:h=null,onMetadataFiltersChange:p,currentMode:m,onModeSwitch:g,onClearChat:f}){const[b,v]=de(""),{progress:y,displayState:k}=function({isLoading:e,boostMode:r=!1,currentState:n}){const[t,o]=de(0),[a,i]=de(n||"idle"),s=ue(null),d=ue(0),l=ue(null),c=r?Wn:Un,u=c[c.length-1].time;return le(()=>{e&&!s.current?(s.current=Date.now(),d.current=0,o(c[0].minProgress)):e||(s.current=null,d.current=0,o(0),i("idle"),l.current&&cancelAnimationFrame(l.current))},[e,c]),le(()=>{if(!e||!s.current)return;const r=()=>{var t,a;const h=Date.now()-s.current;let p=0,m="processing";for(let e=c.length-1;e>=0;e--)if(h>=c[e].time){const r=c[e];if(e<c.length-1){const n=c[e+1],t=n.time-r.time,o=h-r.time,a=Math.min(o/t,1);p=r.minProgress+(n.minProgress-r.minProgress)*a}else p=r.minProgress;m=r.label||"processing";break}const g=98*function(e){return e<.5?2*e*e:(4-2*e)*e-1}(Math.min(h/u,1)),f=Math.max(p,g,d.current);let b=Math.min(f,98);const v=(m||"processing").toLowerCase(),y=(n||"").toLowerCase(),k=null!==(t=Vn[v])&&void 0!==t?t:72,x=y?null!==(a=Vn[y])&&void 0!==a?a:72:100,w=Math.min(k,x);b=Math.min(b,w),b>d.current&&(d.current=b,o(b)),i(m),e&&b<98&&(l.current=requestAnimationFrame(r))};return r(),()=>{l.current&&cancelAnimationFrame(l.current)}},[e,c,u,n]),le(()=>{if("answering"===n&&"answering"===a){const e=90;d.current<e&&(d.current=e,o(e))}},[n,a]),{progress:t,displayState:a,isProgressing:e}}({isLoading:r,boostMode:s,currentState:i}),[x,w]=de(0===e.length),[S,z]=de(!1),C=ue(null),$=void 0!==u?u:x;le(()=>{void 0===u&&e.length>0&&w(!1)},[e,u]);const M=()=>{const e=C.current;if(!e)return;e.style.height="auto";const r=Math.min(e.scrollHeight,96);e.style.height=`${r}px`,e.style.overflowY=e.scrollHeight>96?"auto":"hidden",e.style.lineHeight=r<=32?"32px":"1.5"};le(()=>{!r&&C.current&&"function"==typeof C.current.focus&&(C.current.focus(),C.current.style.minHeight="32px",M())},[r]);const _=e=>{null==e||e.preventDefault(),b.trim()&&!r&&(t(b.trim(),s,h),v(""))},j=a.exampleQuestions||("ja"===a.language?["RAGシステムについて教えてください","ドキュメントの検索方法は？","APIの使い方を教えてください"]:["What is RAG system?","How do I search documents?","How to use the API?"]);return W(Zn,{children:[W(rt,{children:[$?W(nt,{children:[W(tt,{children:W(dr,{size:24,color:"white"})}),W(ot,{children:a.introTitle||("ja"===a.language?"こんにちは！":"Hi there!")}),W(at,{dangerouslySetInnerHTML:{P:q(a.introMessage||("ja"===a.language?"AskDona AIアシスタントです。ドキュメントや情報について何でもお聞きください。":"I'm AskDona AI assistant. Ask me anything about your documents and information."))}}),W(it,{children:[W(st,{children:"ja"===a.language?"質問例":"Example Questions"}),W(dt,{children:j.map((e,r)=>W(lt,{onClick:()=>(e=>{t(e,s,h)})(e),children:e},r))})]})]}):W(_r,{messages:e,isLoading:r,streamingContent:n,config:a,sessionId:l,onFeedbackSubmit:c}),r&&W(ut,{children:[W(ht,{children:[W(pt,{}),W(mt,{children:n.trim()?"ja"===a.language?"リアルタイム応答中...":"Streaming response...":Qn[a.language||"ja"][k]||Qn[a.language||"ja"][i||""]||("ja"===a.language?"処理中...":"Processing...")})]}),!n.trim()&&W(gt,{children:W(ft,{progress:y})})]}),o&&W(ct,{children:"ja"===a.language?`エラーが発生しました: ${o.message}`:`Error: ${o.message}`})]}),g&&W(Kn,{children:W(Yn,{children:[W(Xn,{type:"button",active:"ask-ai"===(m||"ask-ai"),onClick:()=>g("ask-ai"),children:"ja"===a.language?"AIに質問":"Ask AI"}),W(Xn,{type:"button",active:"search"===m,onClick:()=>g("search"),children:"ja"===a.language?"検索":"Search"}),f&&"ask-ai"===(m||"ask-ai")&&e.length>0&&W(et,{type:"button",onClick:f,title:"ja"===a.language?"新しいセッションを開始":"Start new session","aria-label":"ja"===a.language?"新しいセッションを開始":"Start new session",disabled:r,children:W(cr,{size:14})})]})}),W(bt,{children:W(xt,{boostMode:s,children:W(wt,{children:[W(St,{children:W($t,{ref:C,value:b,onChange:e=>{v(e.target.value),M()},onKeyDown:e=>{S||(e=>{"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),_())})(e)},onCompositionStart:()=>{z(!0)},onCompositionEnd:()=>{z(!1)},placeholder:"ja"===a.language?"質問を入力してください... (Ctrl+Enter または ⌘+Enter で送信)":"Ask me anything... (Ctrl+Enter or ⌘+Enter to send)",disabled:r,rows:1,boostMode:s})}),W(zt,{children:[W("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.chatflowId&&p&&W(Jn,{chatflowId:a.chatflowId,filters:h,onFiltersChange:p,disabled:r,language:a.language||"ja"}),a.allowBoostModeToggle&&d&&W(vt,{onClick:()=>d(!s),disabled:r,active:s,title:"ja"===a.language?"Boostモードは、より多角的な視点から多くの文書を分析して回答します。":"Boost mode analyzes more documents from multiple perspectives for comprehensive answers.",children:[W(yt,{active:s,children:W(vr,{size:14})}),W(kt,{children:"Boost"})]})]}),W(Ct,{onClick:_,disabled:!b.trim()||r,title:"ja"===a.language?"Ctrl+Enter または ⌘+Enter で送信":"Ctrl+Enter or ⌘+Enter to send",type:"button","data-askdona-button":"send","data-disabled":!b.trim()||r,children:W(Je,{size:16,color:(()=>{var e;if(!b.trim()||r){return(null===(e=getComputedStyle(document.documentElement).getPropertyValue("--askdona-text-secondary"))||void 0===e?void 0:e.trim())||"#6b6f8a"}return"white"})()})})]})]})})})]})}const Zn=Fe("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Kn=Fe("div")`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem 0.25rem;
  flex-shrink: 0;
  align-items: center;
  /* tabs aligned left by default */
`,Yn=Fe("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
`,Xn=Fe("button")`
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
`,et=Fe("button")`
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
`,rt=Fe("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
`,nt=Fe("div")`
  text-align: center;
  padding: 2rem 0;
`,tt=Fe("div")`
  width: 3rem;
  height: 3rem;
  background: var(--askdona-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
`,ot=Fe("h3")`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--askdona-text);
`,at=Fe("p")`
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  margin: 0 auto 2rem;
  max-width: 90%;
  line-height: 1.5;
`,it=Fe("div")`
  margin-top: 2rem;
`,st=Fe("h4")`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--askdona-text-secondary);
  margin: 0 0 1rem;
`,dt=Fe("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`,lt=Fe("button")`
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
`,ct=Fe("div")`
  background: rgba(239, 68, 68, 0.1);
  color: var(--askdona-error);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  font-size: 0.875rem;
`,ut=Fe("div")`
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
`,ht=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,pt=Fe("div")`
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
`,mt=Fe("span")`
  font-weight: 500;
`,gt=Fe("div")`
  width: 30%;
  height: 6px;
  background: var(--askdona-border);
  border-radius: 3px;
  overflow: hidden;
`,ft=Fe("div")`
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
`,bt=Fe("div")`
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  flex-shrink: 0;
`,vt=Fe("button")`
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
`,yt=Fe("span")`
  display: flex;
  align-items: center;
  opacity: ${({active:e})=>e?1:.8};
`,kt=Fe("span")`
  font-weight: 500;
  font-size: 12px;
`,xt=Fe("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  
  ${({boostMode:e})=>e&&"\n    &::before {\n      content: '';\n      position: absolute;\n      top: -2px;\n      left: -2px;\n      right: -2px;\n      bottom: -2px;\n      background: linear-gradient(135deg, var(--askdona-primary), var(--askdona-primary-light));\n      border-radius: 0.875rem;\n      z-index: -1;\n    }\n  "}
`,wt=Fe("div")`
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
`,St=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`,zt=Fe("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
`,Ct=Fe("button")`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: var(--askdona-primary);
  color: white;
  /* center handled by TopBar align-items */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &[data-disabled="true"] {
    background: var(--askdona-border);
    cursor: not-allowed;
  }
  
  &:hover:not([data-disabled="true"]) {
    background: var(--askdona-primary-dark);
    transform: scale(1.05);
  }
`,$t=Fe("textarea")`
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
  max-height: ${96}px;
  line-height: ${32}px; /* center single-line & placeholder by default */
  overflow-y: hidden;
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
`;class Mt{static getStorageKey(){return"askdona_search_history"}static getAllHistory(){try{const e=localStorage.getItem(this.getStorageKey());if(!e)return[];const r=JSON.parse(e),n=Date.now()-2592e6;return r.filter(e=>e.timestamp>n)}catch(e){return[]}}static saveHistory(e){try{const r=e.slice(0,50);localStorage.setItem(this.getStorageKey(),JSON.stringify(r))}catch(e){}}static addSearchHistory(e,r,n,t){const o={id:`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,query:r.trim(),resultsCount:n,searchTime:t,timestamp:Date.now(),chatflowId:e},a=this.getAllHistory();a.unshift(o),this.saveHistory(a)}static getSearchHistory(e,r=20){return this.getAllHistory().filter(r=>r.chatflowId===e).slice(0,r)}static getRecentQueries(e,r=10,n=!0){const t=this.getSearchHistory(e,n?100:r);if(n){const e=new Set,n=[];for(const o of t){const t=o.query.toLowerCase();if(!e.has(t)&&(e.add(t),n.push(o.query),n.length>=r))break}return n}return t.map(e=>e.query)}static getPopularQueries(e,r=10){const n=this.getSearchHistory(e,1e3),t=new Map;return n.forEach(e=>{const r=e.query.toLowerCase();t.set(r,(t.get(r)||0)+1)}),Array.from(t.entries()).map(([e,r])=>{var t;return{query:(null===(t=n.find(r=>r.query.toLowerCase()===e))||void 0===t?void 0:t.query)||e,count:r}}).sort((e,r)=>r.count-e.count).slice(0,r)}static clearHistory(e){if(e){const r=this.getAllHistory().filter(r=>r.chatflowId!==e);this.saveHistory(r)}else localStorage.removeItem(this.getStorageKey())}static getHistoryStats(e){const r=this.getSearchHistory(e,1e3);if(0===r.length)return{totalSearches:0,uniqueQueries:0,avgResultsCount:0,avgSearchTime:0};const n=new Set(r.map(e=>e.query.toLowerCase())).size,t=r.reduce((e,r)=>e+r.resultsCount,0)/r.length,o=r.reduce((e,r)=>e+r.searchTime,0)/r.length;return{totalSearches:r.length,uniqueQueries:n,avgResultsCount:Math.round(t),avgSearchTime:Math.round(o)}}}function _t({config:e,currentMode:r,onModeSwitch:n,onClearSearch:t}){var o,a;const[i,s]=de(""),[d,l]=de(null),[c,u]=de([]),[h,p]=de({}),[m,g]=de(!1),[f,b]=de(null),v=ue(null),[y,x]=de(!1),{recentQueries:w,addSearchHistory:S}=function(e,r={}){const{limit:n=20,uniqueQueries:t=!0,autoRefresh:o=!0}=r,[a,i]=de([]),[s,d]=de([]),l=pe(()=>{if(!e)return;const r=Mt.getRecentQueries(e,n,t);i(r);const o=Mt.getPopularQueries(e,10);d(o)},[e,n,t]);le(()=>{o&&l()},[o,l]);const c=pe((r,n,t)=>{e&&r.trim()&&(Mt.addSearchHistory(e,r,n,t),o&&l())},[e,o,l]),u=pe(()=>{e&&(Mt.clearHistory(e),i([]),d([]))},[e]),h=pe(()=>e?Mt.getHistoryStats(e):null,[e]);return{recentQueries:a,popularQueries:s,addSearchHistory:c,clearHistory:u,refresh:l,getStats:h}}(e.chatflowId),z=`askdona_widget_last_search_${e.chatflowId}`,C=pe((e,r)=>{try{const n={query:e,response:r,savedAt:Date.now()};localStorage.setItem(z,JSON.stringify(n))}catch(e){}},[z]),$=pe(()=>{try{const e=localStorage.getItem(z);if(!e)return null;const r=JSON.parse(e);return r&&"object"==typeof r?r:null}catch(e){return null}},[z]);le(()=>{v.current&&"function"==typeof v.current.focus&&v.current.focus();const e=$();e&&e.response&&(s(e.query||""),l(e.response),u(e.response.results||[]),p({}))},[$]);const M=pe(async r=>{var n;if(!r.trim())return l(null),void u([]);p({}),g(!0),b(null);const t=Date.now();try{const o={query:r,filters:{}},a=await async function(e,r){try{return await J(`/search/${e}`,{method:"POST",body:JSON.stringify(r)})}catch(e){throw e}}(e.chatflowId,o);l(a),u(a.results||[]),C(r,a);const i=Date.now()-t;S(r,(null===(n=a.results)||void 0===n?void 0:n.length)||0,i)}catch(e){b(e instanceof Error?e.message:"Unknown error occurred"),l(null),u([])}finally{g(!1)}},[e.chatflowId,S,C]),_=pe(()=>{i.trim()&&M(i.trim())},[i,M]),j=pe(e=>{y||"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),_())},[_,y]),I=he(()=>{if(!c.length)return[];let e=[...c];return h.categories&&h.categories.length>0&&(e=e.filter(e=>{var r,n;const t=null===(r=e.fileMetadata)||void 0===r?void 0:r.category,o=null===(n=e.fileMetadata)||void 0===n?void 0:n.subCategory;return h.categories.includes(t||"")||h.categories.includes(o||"")})),h.fileTypes&&h.fileTypes.length>0&&(e=e.filter(e=>h.fileTypes.includes(e.fileFormat))),e},[c,h]),A=he(()=>I,[I]),D=pe(()=>{s(""),l(null),u([]),p({}),b(null),v.current&&v.current.focus();try{localStorage.removeItem(z)}catch(e){}t&&t()},[z,t]),R=e=>{p(e)},T=e=>{if(!i.trim())return W(k,{children:e});return W(k,{children:e.split(new RegExp(`(${i})`,"gi")).map((e,r)=>e.toLowerCase()===i.toLowerCase()?W(Zt,{children:e},r):W("span",{children:e},r))})},F=he(()=>{if(!d)return[];return[{id:"all",label:"ja"===e.language?"すべて":"All",count:I.length},...d.facets.fileTypes.map(e=>({id:e.value,label:e.value.toUpperCase(),count:e.count}))]},[d,I.length,e.language]);return W(jt,{children:[d&&W(oo,{"data-search-results-header":!0,children:[W(ao,{children:["ja"===e.language?"検索結果":"Search Results",": ",I.length.toLocaleString()," ","ja"===e.language?"件":"items",(null===(o=h.categories)||void 0===o?void 0:o.length)||(null===(a=h.fileTypes)||void 0===a?void 0:a.length)?W(io,{children:"ja"===e.language?"フィルタ適用済":"Filtered"}):null]}),W(so,{children:["ja"===e.language?"検索時間":"Search time",": ",d.searchTime,"ms"]})]}),d&&F.length>1&&W(Vt,{children:F.map(e=>W(Ut,{active:"all"===e.id||Boolean(h.fileTypes&&h.fileTypes.includes(e.id)),onClick:()=>{"all"===e.id?R({}):R({fileTypes:[e.id]})},children:[e.label,W(Wt,{children:["(",e.count,")"]})]},e.id))}),W(Qt,{children:m?W(Kt,{children:[W(Yt,{}),W(Xt,{children:"ja"===e.language?"検索中...":"Searching..."})]}):f?W(lo,{children:[W(co,{children:"⚠️"}),W(uo,{children:"ja"===e.language?"検索エラー":"Search Error"}),W(ho,{children:f})]}):i&&0===I.length&&d?W(eo,{children:"ja"===e.language?`"${i}" に一致する結果が見つかりませんでした`:`No results found for "${i}"`}):A.length>0?W(k,{children:W(Gt,{children:A.map(r=>W(po,{children:W(mo,{children:[W(go,{children:r.fileMetadata.url?W("a",{href:r.fileMetadata.url,target:"_blank",rel:"noopener noreferrer",children:T(r.fileMetadata.title||r.fileName)}):W("span",{children:T(r.fileMetadata.title||r.fileName)})}),W(fo,{children:[W("strong",{children:"ja"===e.language?"フォーマット:":"Format:"})," ",r.fileFormat.toUpperCase()]}),r.fileMetadata.body&&W(bo,{children:[W("strong",{children:"ja"===e.language?"本文:":"Content:"}),W(vo,{children:T(r.fileMetadata.body)})]})]})},r.fileId))})}):W(ro,{children:[W(no,{children:"🔍"}),W(to,{children:"ja"===e.language?"検索キーワードを入力してください (Ctrl+Enter または ⌘+Enter で送信)":"Enter a search term to see results (Ctrl+Enter or ⌘+Enter to send)"})]})}),n&&W(It,{children:W(At,{children:[W(Rt,{type:"button",active:"ask-ai"===(r||"ask-ai"),onClick:()=>n("ask-ai"),children:"ja"===e.language?"AIに質問":"Ask AI"}),W(Rt,{type:"button",active:"search"===r,onClick:()=>n("search"),children:"ja"===e.language?"検索":"Search"}),"search"===r&&(i||d)&&W(Dt,{type:"button",onClick:D,title:"ja"===e.language?"検索をクリア":"Clear search","aria-label":"ja"===e.language?"検索をクリア":"Clear search",disabled:m,children:W(cr,{size:14})})]})}),W(Bt,{children:W(Tt,{children:W(Ft,{children:[w.length>0&&W(Et,{children:[W(Ot,{children:"ja"===e.language?"最近の検索":"Recent searches"}),W(Nt,{children:w.slice(0,8).map((e,r)=>W(Pt,{onClick:()=>{return s(r=e),void M(r);var r},children:e},r))})]}),W(Lt,{children:[W(Ht,{ref:v,value:i,onInput:e=>{(e=>{const r=e.target.value;s(r)})(e),(()=>{const e=v.current;if(!e)return;e.style.height="auto";const r=Math.min(e.scrollHeight,96);e.style.height=`${r}px`,e.style.overflowY=e.scrollHeight>96?"auto":"hidden",e.style.lineHeight=r<=32?"32px":"1.5"})()},onKeyDown:j,onCompositionStart:()=>x(!0),onCompositionEnd:()=>x(!1),placeholder:"ja"===e.language?"検索キーワードを入力... (Ctrl+Enter または ⌘+Enter で送信)":"Enter search keywords... (Ctrl+Enter or ⌘+Enter to send)",rows:1}),W(qt,{onClick:_,"data-disabled":!i.trim()||m,title:"ja"===e.language?"検索 (Enter または Ctrl+Enter)":"Search (Enter or Ctrl+Enter)",type:"button",children:m?W(Jt,{}):W(Je,{size:16,color:"white"})})]})]})})})]})}const jt=Fe("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,It=Fe("div")`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem 0.25rem; /* align underline position with ChatView */
  flex-shrink: 0;
  align-items: center; /* match ChatView */
  position: relative;
  z-index: 2; /* ensure tab underline renders above input separator */
`,At=Fe("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
`,Dt=Fe("button")`
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
`,Rt=Fe("button")`
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
`,Tt=Fe("div")`
  position: relative;
  width: 100%;
`,Ft=Fe("div")`
  position: relative;
  display: flex;
  flex-direction: column;
`,Et=Fe("div")`
  padding: 0.25rem 0.25rem 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Ot=Fe("div")`
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.025em;
`,Nt=Fe("div")`
  display: flex;
  gap: 0.375rem;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
`,Pt=Fe("button")`
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
`,Lt=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid var(--askdona-border);
  border-radius: ${({expanded:e})=>e?"0.75rem 0.75rem 0 0":"0.75rem"};
  background: var(--askdona-background);
  transition: all 0.2s;
  ${({expanded:e})=>e&&"border-bottom: none;"}
`,qt=Fe("button")`
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
  transition: all 0.2s;
  
  &[data-disabled="true"] {
    background: var(--askdona-border);
    cursor: not-allowed;
  }
  
  &:hover:not([data-disabled="true"]) {
    background: var(--askdona-primary-dark);
    transform: scale(1.05);
  }
`,Ht=Fe("textarea")`
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
  max-height: 96px; /* 3x */
  line-height: 32px;
  overflow-y: hidden;
  position: relative;
  z-index: 1;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`,Bt=Fe("div")`
  position: relative;
  padding: 1rem 1.5rem; /* match ChatView InputArea spacing */
  border-top: 1px solid var(--askdona-border);
  flex-shrink: 0;
`,Jt=Fe("div")`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Vt=Fe("div")`
  display: flex;
  gap: 1.5rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  overflow-x: auto;
  flex-shrink: 0;
  
  &::-webkit-scrollbar {
    height: 0;
  }
`,Ut=Fe("button")`
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
`,Wt=Fe("span")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin-left: 0.25rem;
`,Qt=Fe("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1rem 1.5rem;
`,Gt=Fe("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* tighter spacing between cards */
`,Zt=Fe("span")`
  background: rgba(var(--askdona-primary-rgb), 0.2);
  padding: 0 0.125rem;
  border-radius: 0.125rem;
  font-weight: 500;
`,Kt=Fe("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`,Yt=Fe("div")`
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--askdona-border);
  border-top-color: var(--askdona-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Xt=Fe("p")`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
`,eo=Fe("div")`
  text-align: center;
  padding: 3rem;
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
`,ro=Fe("div")`
  text-align: center;
  padding: 3rem;
`,no=Fe("div")`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`,to=Fe("p")`
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
  margin: 0;
`,oo=Fe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  background: var(--askdona-surface);
`,ao=Fe("h3")`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: var(--askdona-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,io=Fe("span")`
  background: var(--askdona-primary);
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 500;
`,so=Fe("p")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin: 0;
`,lo=Fe("div")`
  text-align: center;
  padding: 3rem;
  color: var(--askdona-error);
`,co=Fe("div")`
  font-size: 2rem;
  margin-bottom: 1rem;
`,uo=Fe("h3")`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--askdona-error);
`,ho=Fe("p")`
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  margin: 0;
`,po=Fe("div")`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 0; /* rely on ResultsList gap for spacing */
  transition: all 0.2s;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,mo=Fe("div")`
  padding: 0.75rem; /* slightly tighter */
  display: flex;
  flex-direction: column;
  gap: 0.375rem; /* slightly tighter */
`,go=Fe("h4")`
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
`,fo=Fe("p")`
  margin: 0; /* remove extra spacing */
  font-size: 0.75rem; /* smaller row text */
  color: var(--askdona-text-secondary); /* lighter overall */
  
  strong {
    color: var(--askdona-text-secondary); /* lighter label color */
    font-size: 0.6875rem; /* even smaller label text */
    opacity: 0.75; /* make label appear lighter */
  }
`,bo=Fe("div")`
  margin-top: 0.5rem;
  
  strong {
    display: block;
    margin-bottom: 0.25rem;
    color: #202124;
    font-size: 0.875rem;
  }
`,vo=Fe("p")`
  margin: 0;
  font-size: 0.875rem;
  color: #5f6368;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;function yo({originalQuery:e,questions:r,onSubmit:n,onBack:t,isSubmitting:o=!1,error:a}){const[i,s]=de(new Array(r.length).fill("")),d=i.every(e=>e.trim().length>0),l=i.filter(e=>e.trim().length>0).length;return W(ko,{children:[W(xo,{children:[W(wo,{children:W(Ke,{size:24,color:"white"})}),W(So,{children:[W(zo,{children:"🔍 Research Planning Questions"}),W(Co,{children:"Help us understand what you're looking for"})]})]}),W($o,{children:[W(Mo,{children:"Your Research Query:"}),W(_o,{children:['"',e,'"']})]}),W(jo,{children:[W(Io,{children:[W(Ao,{children:"Questions Completed"}),W(Do,{children:[l,"/",r.length]})]}),W(Ro,{children:W(To,{progress:l/r.length*100})})]}),W(Fo,{children:[W(Eo,{children:"💡"}),W(Oo,{children:"Please answer these questions to help us conduct more targeted and comprehensive research. The more specific your answers, the better the research results will be."})]}),W(No,{children:r.map((e,r)=>W(Po,{children:[W(Lo,{children:W("span",{children:r+1})}),W(qo,{children:[W(Ho,{children:e}),W(Bo,{value:i[r],onChange:e=>((e,r)=>{const n=[...i];n[e]=r,s(n)})(r,e.target.value),placeholder:"Please provide your answer here...",rows:3,disabled:o})]})]},r))}),a&&W(Jo,{children:[W(Ge,{size:16}),W("span",{children:a})]}),W(Vo,{children:[t&&W(Uo,{onClick:t,disabled:o,children:"← Back to Query"}),W(Wo,{onClick:()=>{const e=r.map((e,r)=>({question:e,answer:i[r]||""}));n(e)},disabled:!d||o,children:W(k,o?{children:[W(sr,{size:16,className:"spin"}),"Starting Research..."]}:{children:[W(Be,{size:16}),"Start Deep Research"]})})]}),W(Qo,{children:[W(Go,{children:"💡"}),W(Zo,{children:[W(Ko,{children:"Tips for Better Results:"}),W(Yo,{children:[W(Xo,{children:"✅ Be specific about what aspects interest you most"}),W(Xo,{children:"⏰ Mention any time periods or geographical regions"}),W(Xo,{children:"🎯 Clarify if you need academic or practical information"}),W(Xo,{children:"📊 Specify the depth of detail you're looking for"})]})]})]})]})}const ko=Fe("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
`,xo=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
`,wo=Fe("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,So=Fe("div")`
  flex: 1;
`,zo=Fe("h3")`
  margin: 0 0 0.25rem;
  font-size: 1.125rem;
  font-weight: 600;
`,Co=Fe("p")`
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
`,$o=Fe("div")`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  background: rgba(var(--askdona-primary-rgb, 67, 56, 202), 0.05);
`,Mo=Fe("h4")`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
`,_o=Fe("p")`
  margin: 0;
  font-style: italic;
  color: var(--askdona-text);
  line-height: 1.5;
`,jo=Fe("div")`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`,Io=Fe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,Ao=Fe("span")`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--askdona-text);
`,Do=Fe("span")`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-primary);
`,Ro=Fe("div")`
  height: 0.5rem;
  background: var(--askdona-border);
  border-radius: 0.25rem;
  overflow: hidden;
`,To=Fe("div")`
  height: 100%;
  width: ${({progress:e})=>Math.min(Math.max(e,0),100)}%;
  background: var(--askdona-primary);
  border-radius: 0.25rem;
  transition: width 0.3s ease-in-out;
`,Fo=Fe("div")`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  background: rgba(59, 130, 246, 0.05);
`,Eo=Fe("div")`
  font-size: 1.25rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
`,Oo=Fe("p")`
  margin: 0;
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  line-height: 1.5;
`,No=Fe("div")`
  padding: 1.5rem;
`,Po=Fe("div")`
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
`,Lo=Fe("div")`
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
`,qo=Fe("div")`
  flex: 1;
`,Ho=Fe("p")`
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
  color: var(--askdona-text);
  line-height: 1.5;
`,Bo=Fe("textarea")`
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
`,Jo=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  font-size: 0.875rem;
  border-top: 1px solid var(--askdona-border);
`,Vo=Fe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid var(--askdona-border);
`,Uo=Fe("button")`
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
`,Wo=Fe("button")`
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
`,Qo=Fe("div")`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(16, 185, 129, 0.05);
  border-top: 1px solid var(--askdona-border);
`,Go=Fe("div")`
  font-size: 1.25rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
`,Zo=Fe("div")`
  flex: 1;
`,Ko=Fe("p")`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text);
`,Yo=Fe("div")`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Xo=Fe("div")`
  font-size: 0.8125rem;
  color: var(--askdona-text-secondary);
  line-height: 1.4;
`,ea={pending:{label:"Initializing",icon:Xe,description:"Setting up Deep Research...",color:"#6b7280"},"follow-up":{label:"Planning Research",icon:gr,description:"Analyzing your query and planning research approach",color:"#3b82f6"},"research-outline":{label:"Creating Outline",icon:Ye,description:"Building comprehensive research outline",color:"#3b82f6"},search:{label:"Searching Sources",icon:ur,description:"Finding and analyzing relevant sources",color:"#059669"},extraction:{label:"Extracting Information",icon:rr,description:"Extracting key information from sources",color:"#059669"},"new-angles":{label:"Exploring Angles",icon:Ve,description:"Discovering additional research angles",color:"#7c3aed"},synthesis:{label:"Synthesizing Results",icon:xr,description:"Combining findings into comprehensive report",color:"#dc2626"},processing:{label:"Processing",icon:tr,description:"Processing your research request",color:"#3b82f6"},completed:{label:"Complete",icon:Ze,description:"Research completed successfully",color:"#059669"},failed:{label:"Failed",icon:yr,description:"Research failed",color:"#dc2626"}};function ra(e){const r=Math.floor(e/60),n=e%60;return 0===r?`${n}s`:0===n?`${r}m`:`${r}m ${n}s`}function na(e){if(!e||e<=0)return"";const r=Math.floor(e/60),n=e%60;return 0===r?`~${n}s remaining`:n<30?`~${r}m remaining`:`~${r+1}m remaining`}function ta({job:e,isLoading:r,onCancel:n}){var t,o;const[a,i]=de(0);le(()=>{const r=new Date(e.startedAt).getTime(),n=()=>{const e=Date.now(),n=Math.floor((e-r)/1e3);i(n)};n();const t=setInterval(n,1e3);return()=>clearInterval(t)},[e.startedAt]);const s=(null===(t=e.progress)||void 0===t?void 0:t.stage)||e.status,d=ea[s]||ea.processing,l=(null===(o=e.progress)||void 0===o?void 0:o.progress)||0,c=d.icon;return W(oa,{children:[W(aa,{children:W(ia,{children:[W(sa,{color:d.color,children:W(c,{size:20,color:"white"})}),W(da,{children:[W(la,{children:"🔍 Deep Research in Progress"}),W(ca,{children:[W(ua,{children:[W(Xe,{size:14}),ra(a)]}),W(ua,{children:["ID: ",e.jobId.slice(-8)]})]})]})]})}),W(ha,{children:[W(pa,{children:"Research Query:"}),W(ma,{children:['"',e.query,'"']})]}),W(ga,{children:[W(fa,{children:[W(ba,{color:d.color,children:W(c,{size:24})}),W(va,{children:[W(ya,{color:d.color,children:d.label}),W(ka,{children:d.description})]})]}),"processing"===e.status&&W(xa,{children:[W(wa,{children:W(Sa,{progress:l,color:d.color})}),W(za,{children:[Math.round(l),"%"]})]})]}),e.progress&&W(Ca,{children:[e.progress.sources&&e.progress.sources>0&&W($a,{children:[W(Ma,{children:W(rr,{size:16,color:"#6b7280"})}),W(_a,{children:[W(ja,{children:"Sources Found"}),W(Ia,{children:e.progress.sources})]})]}),e.progress.estimatedTimeRemaining&&W($a,{children:[W(Ma,{children:W(Xe,{size:16,color:"#6b7280"})}),W(_a,{children:[W(ja,{children:"Estimated"}),W(Ia,{children:na(e.progress.estimatedTimeRemaining)})]})]}),e.estimatedDuration&&W($a,{children:[W(Ma,{children:W(gr,{size:16,color:"#6b7280"})}),W(_a,{children:[W(ja,{children:"Expected Duration"}),W(Ia,{children:e.estimatedDuration})]})]}),e.creditsConsumed&&W($a,{children:[W(Ma,{children:"💳"}),W(_a,{children:[W(ja,{children:"Credits Used"}),W(Ia,{children:e.creditsConsumed})]})]})]}),"pending"===e.status&&W(Aa,{type:"info",children:[W(yr,{size:16}),"Your request is queued and will start processing shortly..."]}),"failed"===e.status&&e.error&&W(Aa,{type:"error",children:[W(yr,{size:16}),W("div",{children:[W("strong",{children:"Research Failed:"}),W("p",{children:e.error})]})]}),W(Da,{children:[n&&("pending"===e.status||"processing"===e.status)&&W(Ra,{onClick:n,disabled:r,children:[W(kr,{size:16}),"Cancel Research"]}),W(Ta,{children:[W(Fa,{children:"💡 What's happening?"}),W(Ea,{children:[W(Oa,{children:"Deep Research Process:"}),W(Na,{children:[W(Pa,{children:"📝 Creating a detailed research outline"}),W(Pa,{children:"🔍 Searching multiple databases and sources"}),W(Pa,{children:"📊 Extracting and analyzing key information"}),W(Pa,{children:"🔬 Exploring different research angles"}),W(Pa,{children:"⚡ Synthesizing findings into a final report"})]}),W(La,{children:"This process typically takes 5-20 minutes depending on complexity."})]})]})]})]})}const oa=Fe("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
`,aa=Fe("div")`
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
`,ia=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
`,sa=Fe("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,da=Fe("div")`
  flex: 1;
`,la=Fe("h3")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`,ca=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  opacity: 0.9;
`,ua=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,ha=Fe("div")`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`,pa=Fe("h4")`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
`,ma=Fe("p")`
  margin: 0;
  font-style: italic;
  color: var(--askdona-text);
  line-height: 1.5;
`,ga=Fe("div")`
  padding: 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`,fa=Fe("div")`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`,ba=Fe("div")`
  width: 3rem;
  height: 3rem;
  background: ${({color:e})=>e};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`,va=Fe("div")`
  flex: 1;
`,ya=Fe("h4")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({color:e})=>e};
`,ka=Fe("p")`
  margin: 0;
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
`,xa=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
`,wa=Fe("div")`
  flex: 1;
  height: 0.5rem;
  background: var(--askdona-border);
  border-radius: 0.25rem;
  overflow: hidden;
`,Sa=Fe("div")`
  height: 100%;
  width: ${({progress:e})=>Math.min(Math.max(e,0),100)}%;
  background: ${({color:e})=>e};
  border-radius: 0.25rem;
  transition: width 0.3s ease-in-out;
`,za=Fe("span")`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text);
  min-width: 3rem;
  text-align: right;
`,Ca=Fe("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`,$a=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
`,Ma=Fe("div")`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--askdona-border);
  border-radius: 0.375rem;
  flex-shrink: 0;
`,_a=Fe("div")`
  flex: 1;
  min-width: 0;
`,ja=Fe("div")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin-bottom: 0.25rem;
`,Ia=Fe("div")`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text);
  word-break: break-word;
`,Aa=Fe("div")`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  font-size: 0.875rem;
  
  ${({type:e})=>"info"===e&&"\n    background: rgba(59, 130, 246, 0.1);\n    color: #1e40af;\n  "}
  
  ${({type:e})=>"error"===e&&"\n    background: rgba(239, 68, 68, 0.1);\n    color: #dc2626;\n  "}
`,Da=Fe("div")`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Ra=Fe("button")`
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
`,Ta=Fe("details")`
  font-size: 0.875rem;
`,Fa=Fe("summary")`
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
`,Ea=Fe("div")`
  margin-top: 0.75rem;
  padding: 1rem;
  border: 1px solid var(--askdona-border);
  border-radius: 0.375rem;
  background: var(--askdona-background);
`,Oa=Fe("p")`
  margin: 0 0 0.75rem;
  font-weight: 600;
  color: var(--askdona-text);
`,Na=Fe("ul")`
  margin: 0 0 1rem;
  padding-left: 1.5rem;
`,Pa=Fe("li")`
  margin: 0.5rem 0;
  color: var(--askdona-text);
`,La=Fe("p")`
  margin: 0;
  font-size: 0.8125rem;
  color: var(--askdona-text-secondary);
  font-style: italic;
`;function qa(e,r){if(!r)return"";const n=new Date(e).getTime(),t=new Date(r).getTime()-n,o=Math.floor(t/1e3),a=Math.floor(o/60),i=o%60;return 0===a?`${i}s`:`${a}m ${i}s`}function Ha({sources:e}){const[r,n]=de(new Set);return e&&0!==e.length?W(Si,{children:[W(zi,{children:W(Ci,{children:["📚 Sources (",e.length,")"]})}),e.map((e,t)=>W($i,{children:[W(Mi,{onClick:()=>(e=>{const t=new Set(r);t.has(e)?t.delete(e):t.add(e),n(t)})(t),children:[W(_i,{children:[W(ji,{href:e.url,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:[W(nr,{size:14}),e.title]}),e.domain&&W(Ii,{children:[W(ar,{size:12}),e.domain]})]}),W(Ai,{children:r.has(t)?W(We,{size:16}):W(Qe,{size:16})})]}),r.has(t)&&e.excerpt&&W(Di,{children:[W(Ri,{children:['"',e.excerpt,'"']}),e.relevance&&W(Ti,{children:[W(pr,{size:12}),"Relevance: ",Math.round(100*e.relevance),"%"]})]})]},t))]}):W(Pi,{children:[W(Li,{children:W(tr,{size:20,color:"#6b7280"})}),W(qi,{children:"No sources were referenced in this research."})]})}function Ba({content:e}){return W(bi,{children:(r=e,r.split("\n").map((e,r)=>{if(""===e.trim())return null;if(e.startsWith("# "))return W(vi,{children:e.substring(2)},r);if(e.startsWith("## "))return W(yi,{children:e.substring(3)},r);if(e.startsWith("### "))return W(ki,{children:e.substring(4)},r);if(e.startsWith("- ")||e.startsWith("* "))return W(wi,{children:e.substring(2)},r);if(/^\d+\.\s/.test(e)){const n=e.replace(/^\d+\.\s/,"");return W(wi,{children:n},r)}return W(xi,{children:e},r)}).filter(Boolean))});var r}function Ja({job:e,onNewResearch:r,onClose:n}){const[t,o]=de("results"),a=e.results,i=(null==a?void 0:a.content)||(null==a?void 0:a.summary)||(null==a?void 0:a.report),s=(null==a?void 0:a.sources)||[],d=(null==a?void 0:a.metadata)||{};return W(Va,{children:[W(Ua,{children:W(Wa,{children:[W(Qa,{children:[W(Ga,{children:W(Ze,{size:24,color:"white"})}),W(Za,{children:[W(Ka,{children:"✅ Deep Research Complete"}),W(Ya,{children:[e.completedAt&&W(Xa,{children:[W(Xe,{size:14}),qa(e.startedAt,e.completedAt)]}),e.creditsConsumed&&W(Xa,{children:["💳 ",e.creditsConsumed," credits used"]})]})]})]}),n&&W(ei,{onClick:n,children:W(kr,{size:20})})]})}),W(ri,{children:[W(ni,{children:"Research Query:"}),W(ti,{children:['"',e.query,'"']})]}),W(oi,{children:[W(ai,{active:"results"===t,onClick:()=>o("results"),children:"📄 Results"}),W(ai,{active:"sources"===t,onClick:()=>o("sources"),children:["📚 Sources ",s.length>0&&`(${s.length})`]}),W(ai,{active:"details"===t,onClick:()=>o("details"),children:"ℹ️ Details"})]}),W(ii,{children:["results"===t&&W(si,{children:i?W(k,{children:[a.summary&&W(di,{children:[W(ui,{children:"📋 Executive Summary"}),W(hi,{children:a.summary})]}),a.content&&W(li,{children:[W(ui,{children:"📄 Detailed Report"}),W(pi,{children:W(Ba,{content:a.content})})]}),a.report&&!a.content&&W(li,{children:[W(ui,{children:"📄 Research Report"}),W(pi,{children:W(Ba,{content:a.report})})]}),a.key_findings&&W(ci,{children:[W(ui,{children:"🔑 Key Findings"}),W(mi,{children:W(gi,{children:a.key_findings.map((e,r)=>W(fi,{children:e},r))})})]})]}):W(Fi,{children:[W(Ei,{children:W(tr,{size:24,color:"#6b7280"})}),W(Oi,{children:"No Results Available"}),W(Ni,{children:"No detailed results are available for this research. This might be due to an error during processing or the research being incomplete."})]})}),"sources"===t&&W(Ha,{sources:s}),"details"===t&&W(Hi,{children:[W(Bi,{children:[W(ui,{children:"🔍 Research Details"}),W(Ji,{children:[W(Vi,{children:[W(Ui,{children:"Job ID:"}),W(Wi,{children:e.jobId})]}),W(Vi,{children:[W(Ui,{children:"Started:"}),W(Wi,{children:new Date(e.startedAt).toLocaleString()})]}),e.completedAt&&W(Vi,{children:[W(Ui,{children:"Completed:"}),W(Wi,{children:new Date(e.completedAt).toLocaleString()})]}),W(Vi,{children:[W(Ui,{children:"Duration:"}),W(Wi,{children:qa(e.startedAt,e.completedAt)})]}),e.creditsConsumed&&W(Vi,{children:[W(Ui,{children:"Credits Used:"}),W(Wi,{children:e.creditsConsumed})]}),W(Vi,{children:[W(Ui,{children:"Sources Found:"}),W(Wi,{children:s.length})]})]})]}),d&&Object.keys(d).length>0&&W(Qi,{children:[W(ui,{children:"📊 Metadata"}),W(Gi,{children:W("pre",{children:JSON.stringify(d,null,2)})})]})]})]}),W(Zi,{children:[W(Ki,{children:W(Xi,{onClick:r,children:[W(ur,{size:16}),"New Research"]})}),W(Yi,{children:[W(es,{onClick:async()=>{try{navigator.share&&i&&await navigator.share({title:"Deep Research Results",text:e.query,url:window.location.href})}catch(e){}},children:[W(hr,{size:16}),"Share"]}),W(es,{onClick:async()=>{var r;try{const n=`Deep Research Results\n\nQuery: ${e.query}\n\n${i?a.content||a.report||a.summary:"No content available"}`;await(null===(r=navigator.clipboard)||void 0===r?void 0:r.writeText(n))}catch(e){}},children:[W(er,{size:16}),"Copy"]})]})]})]})}const Va=Fe("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
`,Ua=Fe("div")`
  padding: 1.5rem;
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
`,Wa=Fe("div")`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,Qa=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`,Ga=Fe("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Za=Fe("div")`
  flex: 1;
`,Ka=Fe("h3")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`,Ya=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  opacity: 0.9;
`,Xa=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,ei=Fe("button")`
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
`,ri=Fe("div")`
  padding: 1.25rem 1.5rem;
  background: var(--askdona-background);
  border-bottom: 1px solid var(--askdona-border);
`,ni=Fe("h4")`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
`,ti=Fe("p")`
  margin: 0;
  font-style: italic;
  color: var(--askdona-text);
  line-height: 1.5;
`,oi=Fe("div")`
  display: flex;
  background: var(--askdona-background);
  border-bottom: 1px solid var(--askdona-border);
`,ai=Fe("button")`
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
`,ii=Fe("div")`
  min-height: 300px;
`,si=Fe("div")`
  padding: 1.5rem;
`,di=Fe("div")`
  margin-bottom: 2rem;
`,li=Fe("div")`
  margin-bottom: 2rem;
`,ci=Fe("div")`
  margin-bottom: 2rem;
`,ui=Fe("h4")`
  margin: 0 0 1rem;
  color: var(--askdona-text);
  font-size: 1rem;
  font-weight: 600;
`,hi=Fe("div")`
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;
  color: var(--askdona-text);
  line-height: 1.6;
`,pi=Fe("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
  padding: 1.5rem;
`,mi=Fe("div")`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;
`,gi=Fe("ul")`
  margin: 0;
  padding-left: 1.5rem;
`,fi=Fe("li")`
  margin: 0.5rem 0;
  color: var(--askdona-text);
  line-height: 1.5;
`,bi=Fe("div")`
  color: var(--askdona-text);
`,vi=Fe("h2")`
  color: var(--askdona-text);
  font-size: 1.25rem;
  margin: 1.5rem 0 1rem 0;
  font-weight: 600;
`,yi=Fe("h3")`
  color: var(--askdona-text);
  font-size: 1.125rem;
  margin: 1.25rem 0 0.75rem 0;
  font-weight: 600;
`,ki=Fe("h4")`
  color: var(--askdona-text-secondary);
  font-size: 1rem;
  margin: 1rem 0 0.5rem 0;
  font-weight: 600;
`,xi=Fe("p")`
  margin: 0 0 1rem;
  line-height: 1.6;
`,wi=Fe("li")`
  margin: 0.5rem 0;
  line-height: 1.6;
`,Si=Fe("div")`
  padding: 1.5rem;
`,zi=Fe("div")`
  margin-bottom: 1rem;
`,Ci=Fe("h4")`
  margin: 0;
  color: var(--askdona-text);
  font-size: 1rem;
  font-weight: 600;
`,$i=Fe("div")`
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  overflow: hidden;
`,Mi=Fe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: var(--askdona-border);
  }
`,_i=Fe("div")`
  flex: 1;
  min-width: 0;
`,ji=Fe("a")`
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
`,Ii=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
`,Ai=Fe("div")`
  color: var(--askdona-text-secondary);
  padding: 0.25rem;
`,Di=Fe("div")`
  padding: 0 1rem 1rem 1rem;
  border-top: 1px solid var(--askdona-border);
  background: rgba(243, 244, 246, 0.5);
`,Ri=Fe("p")`
  margin: 0.75rem 0;
  font-style: italic;
  color: var(--askdona-text);
  font-size: 0.875rem;
  line-height: 1.5;
`,Ti=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
`,Fi=Fe("div")`
  text-align: center;
  padding: 3rem 2rem;
`,Ei=Fe("div")`
  margin: 0 auto 1rem;
  width: fit-content;
`,Oi=Fe("h4")`
  margin: 0 0 0.5rem;
  color: var(--askdona-text);
  font-size: 1.125rem;
`,Ni=Fe("p")`
  margin: 0;
  color: var(--askdona-text-secondary);
  line-height: 1.5;
`,Pi=Fe("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
`,Li=Fe("div")`
  margin-bottom: 0.75rem;
`,qi=Fe("p")`
  margin: 0;
  color: var(--askdona-text-secondary);
`,Hi=Fe("div")`
  padding: 1.5rem;
`,Bi=Fe("div")`
  margin-bottom: 2rem;
`,Ji=Fe("div")`
  display: grid;
  gap: 0.75rem;
`,Vi=Fe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--askdona-border);

  &:last-child {
    border-bottom: none;
  }
`,Ui=Fe("span")`
  font-weight: 500;
  color: var(--askdona-text-secondary);
`,Wi=Fe("span")`
  color: var(--askdona-text);
  font-weight: 500;
  word-break: break-word;
`,Qi=Fe("div")`
  margin-top: 2rem;
`,Gi=Fe("div")`
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
`,Zi=Fe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-top: 1px solid var(--askdona-border);
  background: var(--askdona-background);
`,Ki=Fe("div")`
  display: flex;
  gap: 0.75rem;
`,Yi=Fe("div")`
  display: flex;
  gap: 0.5rem;
`,Xi=Fe("button")`
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
`,es=Fe("button")`
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
`;function rs(e){const[r,n]=de(null),[t,o]=de(!0),[a,i]=de(null),s=pe(e=>{try{const r=e.split(".");if(3!==r.length)return null;return JSON.parse(atob(r[1]))}catch(e){return null}},[]),d=pe(async()=>{i(null);try{const r=window.location.hostname+(window.location.port?":"+window.location.port:""),t=await fetch(`${B}/session/init/${e}`,{method:"POST",headers:{"Content-Type":"application/json",Origin:window.location.origin,"X-Widget-Version":"1.0.0"},body:JSON.stringify({domain:r,timestamp:Date.now(),userAgent:navigator.userAgent})});if(!t.ok){const e=await t.json().catch(()=>({message:"Session initialization failed"}));throw new Error(e.message||`HTTP ${t.status}`)}const{secureSessionToken:o}=await t.json();if(!o)throw new Error("No session token received");const a=s(o);if(!a)throw new Error("Invalid session token format");const i=`askdona_secure_session_${e}`;localStorage.setItem(i,o);const d={token:o,isValid:!0,expiresAt:1e3*a.exp,sessionId:a.sessionId,chatflowId:a.chatflowId};return n(d),o}catch(e){throw i(e.message),e}},[e,s]),l=pe(async()=>{o(!0),i(null);try{const r=`askdona_secure_session_${e}`,t=localStorage.getItem(r);if(t){const o=s(t),a=Date.now();if(o&&1e3*o.exp>a&&o.chatflowId===e){const e={token:t,isValid:!0,expiresAt:1e3*o.exp,sessionId:o.sessionId,chatflowId:o.chatflowId};return void n(e)}localStorage.removeItem(r)}await d()}catch(e){i(e.message)}finally{o(!1)}},[e,s,d]),c=pe(async()=>{if(!r)return;if(r.expiresAt-Date.now()<18e5)try{await d()}catch(e){}},[r,d]),u=pe(async()=>{if(!r||!r.isValid)return null;if(r.expiresAt<=Date.now())try{return await d(),(null==r?void 0:r.token)||null}catch(e){return null}return await c(),r.token},[r,d,c]),h=pe(()=>{const r=`askdona_secure_session_${e}`;localStorage.removeItem(r),n(null),i(null)},[e]);return le(()=>{e&&l()},[e,l]),le(()=>{if(!r)return;const e=setInterval(()=>{c()},3e5);return()=>clearInterval(e)},[r,c]),{session:r,isInitializing:t,error:a,initializeSession:d,getValidToken:u,clearSession:h,refreshSessionIfNeeded:c}}function ns(){try{const e={userAgent:navigator.userAgent||"",language:navigator.language||"",screenResolution:`${screen.width}x${screen.height}`,timezoneOffset:(new Date).getTimezoneOffset(),platform:navigator.platform||"",cookieEnabled:navigator.cookieEnabled,localStorageEnabled:(()=>{try{const e="__localStorage_test__";return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}})()},r=document.createElement("canvas"),n=r.getContext("2d");let t="";n&&(r.width=200,r.height=50,n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(125,1,62,20),n.fillStyle="#069",n.font="11pt Arial",n.fillText("AskDona Browser Fingerprint 🔍",2,15),n.fillStyle="rgba(102, 204, 0, 0.7)",n.font="18pt Arial",n.fillText("Deep Research",4,45),t=r.toDataURL().substring(0,100));const o=[e.userAgent,e.language,e.screenResolution,e.timezoneOffset.toString(),e.platform,e.cookieEnabled.toString(),e.localStorageEnabled.toString(),t].join("|");let a=0;for(let e=0;e<o.length;e++){a=(a<<5)-a+o.charCodeAt(e),a&=a}return`fp_${Math.abs(a).toString(36).padStart(8,"0")+Date.now().toString(36).slice(-4)}`}catch(e){return`fp_${Math.random().toString(36).substring(2,15)}`}}class ts{constructor(){this.browserFingerprint=this.getOrCreateFingerprint()}getOrCreateFingerprint(){const e="askdona_browser_fingerprint";try{let r=localStorage.getItem(e);return r||(r=ns(),localStorage.setItem(e,r)),r}catch(e){return ns()}}getBrowserFingerprint(){return this.browserFingerprint}checkLocalLimits(e,r){const n=[];let t,o=!0;for(const a of r){const r=this.checkSingleLocalLimit(e,a);n.push(r),!r.allowed&&o&&(o=!1,t=r.limitType)}return{allowed:o,blockedBy:t,localChecks:n}}checkSingleLocalLimit(e,r){const n=this.getLimitKey(r),t=`${ts.STORAGE_PREFIX}${e}_${n}`;let o=this.getLimitData(t);new Date(o.resetTime)<=new Date&&(o=this.createNewLimitPeriod(r),this.saveLimitData(t,o));const a=o.count<r.limit;return{limitType:this.getLimitTypeString(r),allowed:a,currentCount:o.count,maxCount:r.limit,resetTime:new Date(o.resetTime)}}recordLocalUsage(e,r){for(const n of r){const r=this.getLimitKey(n),t=`${ts.STORAGE_PREFIX}${e}_${r}`,o=this.getLimitData(t);o.count++,this.saveLimitData(t,o)}}getTodayUsage(e){const r=`${ts.STORAGE_PREFIX}${e}_daily`,n=this.getLimitData(r);return new Date(n.resetTime)>new Date?n.count:0}clearLocalLimits(e){try{const r=[];for(let n=0;n<localStorage.length;n++){const t=localStorage.key(n);t&&t.startsWith(`${ts.STORAGE_PREFIX}${e}_`)&&r.push(t)}r.forEach(e=>localStorage.removeItem(e))}catch(e){}}getLimitData(e){try{const r=localStorage.getItem(e);if(r)return JSON.parse(r)}catch(e){}return{count:0,resetTime:new Date(Date.now()+864e5).toISOString(),period:"daily"}}saveLimitData(e,r){try{localStorage.setItem(e,JSON.stringify(r))}catch(e){}}createNewLimitPeriod(e){return{count:0,resetTime:this.calculateNextLocalReset(e).toISOString(),period:this.getLimitKey(e)}}calculateNextLocalReset(e){const r=new Date,n=new Date(r);switch(e.period){case"daily":n.setDate(r.getDate()+1),n.setHours(0,0,0,0);break;case"weekly":const t=(8-r.getDay())%7||7;n.setDate(r.getDate()+t),n.setHours(0,0,0,0);break;case"monthly":n.setMonth(r.getMonth()+1,1),n.setHours(0,0,0,0);break;case"yearly":n.setFullYear(r.getFullYear()+1,0,1),n.setHours(0,0,0,0);break;default:e.customDays&&(n.setDate(r.getDate()+e.customDays),n.setHours(0,0,0,0))}return n}getLimitKey(e){return e.customDays?`custom_${e.customDays}d`:e.period}getLimitTypeString(e){return e.customDays?`custom-${e.customDays}d`:e.period}}function os({chatflowId:e,onClose:r,isVisible:n=!0}){const{config:t,currentJob:o,isLoading:a,error:i,isInitializing:s,fetchConfig:d,cancelJob:l,resetJob:c,cleanup:u}=function(e){const{session:r,isInitializing:n}=rs(e),[t,o]=de(null),[a,i]=de(null),[s,d]=de(!1),[l,c]=de(null),u=ue(new ts),h=ue(null),p=ue(null),m=pe(async(t=!1)=>{if(!(null==r?void 0:r.token)||n)return null;if(!t&&p.current&&Date.now()-p.current.timestamp<3e4)return o(p.current.data),p.current.data;const a=u.current.getBrowserFingerprint();c(null);try{const n=await fetch(`${B}/deep-research/config/${e}`,{method:"POST",headers:{"Content-Type":"application/json","X-Widget-Version":"1.0.0"},body:JSON.stringify({secureSessionToken:r.token,browserFingerprint:a})});if(!n.ok){const e=await n.json().catch(()=>({error:"Request failed"}));throw new Error(e.error||`HTTP ${n.status}`)}const t=await n.json();return p.current={data:t,timestamp:Date.now()},o(t),t}catch(e){c(e.message);const r={isEnabled:!1,canExecute:!1,credits:null,sessionLimit:{allowed:!1,currentCount:0,maxCount:0,resetTime:""},browserLimits:{allowed:!1,limits:[]},config:{maxQueryLength:500,estimatedDurationMinutes:15},error:e.message};return o(r),r}},[null==r?void 0:r.token,e,n]),g=pe(async n=>{if(!(null==r?void 0:r.token)||!(null==t?void 0:t.canExecute))throw new Error("Cannot execute Deep Research - invalid session or insufficient permissions");if(0===n.trim().length)throw new Error("Query cannot be empty");if(n.length>t.config.maxQueryLength)throw new Error(`Query too long. Maximum ${t.config.maxQueryLength} characters allowed.`);d(!0),c(null);const o=u.current.getBrowserFingerprint();try{if(t.browserLimits.limits.length>0){const r=t.browserLimits.limits.map(e=>({period:e.limitType.replace("custom-","").replace("d",""),limit:e.maxCount,customDays:e.limitType.startsWith("custom-")?parseInt(e.limitType.replace("custom-","").replace("d","")):void 0})),n=u.current.checkLocalLimits(e,r);if(!n.allowed)throw new Error(`Browser limit exceeded: ${n.blockedBy}`)}const a=await fetch(`${B}/deep-research/start`,{method:"POST",headers:{"Content-Type":"application/json","X-Widget-Version":"1.0.0"},body:JSON.stringify({secureSessionToken:r.token,query:n.trim(),chatflowId:e,browserFingerprint:o})});if(!a.ok){const e=await a.json().catch(()=>({error:"Request failed"}));throw new Error(e.error||`HTTP ${a.status}`)}const s=await a.json();if(t.browserLimits.limits.length>0){const r=t.browserLimits.limits.map(e=>({period:e.limitType.replace("custom-","").replace("d",""),limit:e.maxCount}));u.current.recordLocalUsage(e,r)}const d={jobId:s.jobId,status:"pending",query:n.trim(),startedAt:(new Date).toISOString(),creditsConsumed:s.creditsConsumed,estimatedDuration:s.estimatedDuration};return i(d),f(s.jobId),setTimeout(()=>m(!0),1e3),s}catch(e){throw d(!1),c(e.message),e}},[null==r?void 0:r.token,t,e,m]),f=pe(e=>{h.current&&h.current.close();const r=new EventSource(`${B}/deep-research/stream/${e}`);h.current=r,r.addEventListener("deep-research-start",e=>{try{JSON.parse(e.data),i(e=>e?{...e,status:"processing"}:null)}catch(e){}}),r.addEventListener("deep-research-progress",e=>{try{const r=JSON.parse(e.data);i(e=>e?{...e,status:"processing",progress:{stage:r.stage||"processing",progress:r.progress||0,timestamp:r.timestamp||(new Date).toISOString(),estimatedTimeRemaining:r.estimatedTimeRemaining,sources:r.sources}}:null)}catch(e){}}),r.addEventListener("deep-research-complete",e=>{try{const n=JSON.parse(e.data);i(e=>e?{...e,status:"completed",results:n.results,completedAt:(new Date).toISOString(),progress:{stage:"completed",progress:100,timestamp:(new Date).toISOString()}}:null),d(!1),r.close(),setTimeout(()=>m(!0),1e3)}catch(e){}}),r.addEventListener("deep-research-error",e=>{try{const n=JSON.parse(e.data);i(e=>e?{...e,status:"failed",error:n.error||"Deep Research failed",completedAt:(new Date).toISOString()}:null),d(!1),c(n.error||"Deep Research failed"),r.close()}catch(e){}}),r.onerror=e=>{r.readyState===EventSource.CLOSED&&(d(!1),setTimeout(()=>{a&&"processing"===a.status&&c("Connection lost. Please check the result later or try again.")},5e3))}},[a]),b=pe(async()=>{if(a&&(null==r?void 0:r.token))try{h.current&&(h.current.close(),h.current=null),i(e=>e?{...e,status:"cancelled",completedAt:(new Date).toISOString()}:null),d(!1)}catch(e){}},[a,null==r?void 0:r.token]),v=pe(()=>{h.current&&(h.current.close(),h.current=null),i(null),d(!1),c(null),p.current=null},[]),y=pe(()=>{h.current&&(h.current.close(),h.current=null)},[]);return le(()=>{!(null==r?void 0:r.token)||n||t||m()},[null==r?void 0:r.token,n,t,m]),le(()=>y,[y]),{config:t,currentJob:a,isLoading:s,error:l,isInitializing:n,fetchConfig:m,startDeepResearch:g,cancelJob:b,resetJob:v,cleanup:y,browserFingerprint:u.current.getBrowserFingerprint()}}(e),[h,p]=de(""),[m,g]=de([]),[f,b]=de(null),[v,y]=de(null),[k,x]=de(!1),[w,S]=de(!1),[z,C]=de(null);le(()=>{!n||t||s||d()},[n,t,s,d]),le(()=>u,[u]);const $=e=>{const r=new EventSource(`${B}/deep-research/stream/${e}`);r.addEventListener("deep-research-start",e=>{try{JSON.parse(e.data);y(e=>e?{...e,status:"processing"}:null)}catch(e){}}),r.addEventListener("deep-research-progress",e=>{try{const r=JSON.parse(e.data);y(e=>e?{...e,status:"processing",progress:{stage:r.stage||"processing",progress:r.progress||0,timestamp:r.timestamp||(new Date).toISOString(),estimatedTimeRemaining:r.estimatedTimeRemaining,sources:r.sources}}:null)}catch(e){}}),r.addEventListener("deep-research-complete",e=>{try{const n=JSON.parse(e.data);y(e=>e?{...e,status:"completed",results:n.results,completedAt:(new Date).toISOString(),progress:{stage:"completed",progress:100,timestamp:(new Date).toISOString()}}:null),r.close(),setTimeout(()=>d(!0),1e3)}catch(e){}}),r.addEventListener("deep-research-error",e=>{try{const n=JSON.parse(e.data);y(e=>e?{...e,status:"failed",error:n.error||"Deep Research failed",completedAt:(new Date).toISOString()}:null),C(n.error||"Deep Research failed"),r.close()}catch(e){}}),r.onerror=e=>{r.readyState===EventSource.CLOSED&&setTimeout(()=>{v&&"processing"===v.status&&C("Connection lost. Please check the result later or try again.")},5e3)}},M=()=>{"questionnaire"===A?(p(""),g([]),b(null),C(null)):"progress"!==A&&"results"!==A||_()},_=()=>{p(""),g([]),b(null),y(null),C(null),c(),setTimeout(()=>d(!0),500)},j=z||i,I=v||o;let A;return A=s&&!t?"loading":"completed"===(null==I?void 0:I.status)?"results":!I||"pending"!==I.status&&"processing"!==I.status?"failed"===(null==I?void 0:I.status)?"error":m.length>0&&h?"questionnaire":"trigger":"progress",W(as,{children:[W(is,{children:["loading"===A&&W(ss,{children:[W(ds,{children:W(ur,{size:24,color:"white"})}),W(ls,{children:[W(cs,{children:"🔍 Loading Deep Research"}),W(us,{children:"Setting up your research environment..."})]})]}),"trigger"===A&&W(xs,{config:t,onSubmit:async e=>{if(e.trim()){p(e.trim()),C(null),x(!0);try{const r=await async function(e){try{return await J("/deep-research/follow-up",{method:"POST",body:JSON.stringify({query:e})})}catch(e){return{success:!1,questions:[],error:e.message}}}(e.trim());if(!r.success||!r.questions||0===r.questions.length)throw new Error(r.error||"No follow-up questions generated");g(r.questions),b(r.metadata)}catch(e){C(e.message||"Failed to generate follow-up questions")}finally{x(!1)}}},onRefreshConfig:()=>{C(null),d(!0)},isSubmitting:k,error:j||void 0}),"questionnaire"===A&&W(yo,{originalQuery:h,questions:m,onSubmit:async r=>{if(h&&0!==r.length){C(null),S(!0);try{const n=new ts,t=n.getBrowserFingerprint(),o=n.getBrowserFingerprint(),a=await async function(e){try{return await J("/deep-research/start-with-answers",{method:"POST",body:JSON.stringify(e)})}catch(e){throw e}}({chatflowId:e,originalQuery:h,questionnaireResponses:r,sessionId:t,fingerprint:o});if(!a.success)throw new Error(a.error||"Failed to start Deep Research");const i={jobId:a.jobId,status:a.status||"pending",query:h,startedAt:(new Date).toISOString(),creditsConsumed:a.creditsConsumed,estimatedDuration:a.estimatedDuration};y(i),$(a.jobId),setTimeout(()=>d(!0),1e3)}catch(e){C(e.message||"Failed to start Deep Research")}finally{S(!1)}}},onBack:M,isSubmitting:w,error:j||void 0}),"progress"===A&&I&&W(ta,{job:I,isLoading:a,onCancel:async()=>{try{!v||"pending"!==v.status&&"processing"!==v.status?await l():y(null)}catch(e){C("Failed to cancel research")}}}),"results"===A&&(null==I?void 0:I.results)&&W(Ja,{job:I,onNewResearch:_}),"error"===A&&W(hs,{children:[W(ps,{children:W(Ge,{size:24,color:"white"})}),W(ms,{children:[W(gs,{children:"Research Failed"}),W(fs,{children:(null==I?void 0:I.error)||j||"An unexpected error occurred"}),W(bs,{children:[W(vs,{onClick:_,children:"Try Again"}),"error"===A&&m.length>0&&W(ys,{onClick:M,children:[W(He,{size:16}),"Back"]})]})]})]})]}),("questionnaire"===A||"progress"===A||"results"===A)&&W(ks,{children:W("span",{children:"💡 Tip: You can start a new research at any time"})})]})}ts.STORAGE_PREFIX="askdona_browser_limit_";const as=Fe("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--askdona-background);
`,is=Fe("div")`
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
`,ss=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
  margin: 1rem;
  border-radius: 0.75rem;
`,ds=Fe("div")`
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ls=Fe("div")`
  flex: 1;
`,cs=Fe("h3")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`,us=Fe("p")`
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
`,hs=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  margin: 1rem;
  border-radius: 0.75rem;
`,ps=Fe("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ms=Fe("div")`
  flex: 1;
`,gs=Fe("h3")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`,fs=Fe("p")`
  margin: 0 0 1rem;
  font-size: 0.875rem;
  opacity: 0.9;
  line-height: 1.5;
`,bs=Fe("div")`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,vs=Fe("button")`
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
`,ys=Fe("button")`
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
`,ks=Fe("div")`
  padding: 0.75rem 1rem;
  text-align: center;
  font-size: 0.8125rem;
  color: var(--askdona-text-secondary);
  background: var(--askdona-border);
  border-top: 1px solid var(--askdona-border);
`;function xs({config:e,onSubmit:r,onRefreshConfig:n,isSubmitting:t=!1,error:o}){const[a,i]=de("");return W(ws,{children:[W(Ss,{children:[W(zs,{children:W(ur,{size:24,color:"white"})}),W(Cs,{children:[W($s,{children:"🔍 Deep Research"}),W(Ms,{children:"Ask a research question and we'll analyze it thoroughly"})]})]}),W(_s,{children:[W("form",{onSubmit:e=>{e.preventDefault(),a.trim()&&!t&&r(a.trim())},children:[W(js,{value:a,onChange:e=>i(e.target.value),placeholder:"What would you like me to research? Be as specific as possible...",rows:3,disabled:t}),W(Is,{children:W(As,{type:"submit",disabled:!a.trim()||t,children:t?"Analyzing...":"Start Research"})})]}),o&&W(Ds,{children:[W(Ge,{size:16}),W("span",{children:o})]})]})]})}const ws=Fe("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
  margin: 1rem;
`,Ss=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
`,zs=Fe("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Cs=Fe("div")`
  flex: 1;
`,$s=Fe("h3")`
  margin: 0 0 0.25rem;
  font-size: 1.125rem;
  font-weight: 600;
`,Ms=Fe("p")`
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
`,_s=Fe("div")`
  padding: 1.5rem;
`,js=Fe("textarea")`
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
`,Is=Fe("div")`
  display: flex;
  justify-content: flex-end;
`,As=Fe("button")`
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
`,Ds=Fe("div")`
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
`;function Rs({task:e,onRetry:r,onSendMessage:n}){const[t,o]=de(e);le(()=>{o(e)},[e]);return W(Ts,{children:[W(Fs,{children:[W(Es,{children:"深層調査の進捗"}),W(Os,{status:t.status,children:["pending"===t.status&&"⏳ 待機中","in-progress"===t.status&&"🔄 実行中","completed"===t.status&&"✅ 完了","failed"===t.status&&"❌ 失敗"]})]}),W(Ns,{children:[W(Ps,{children:W(Ls,{progress:t.progress||0})}),W(qs,{children:[t.progress||0,"%"]})]}),W(Hs,{children:[W(Bs,{children:(e=>{switch(e){case"follow-up":return"📝";case"research-outline":return"📋";case"search":return"🔍";case"extraction":return"📊";case"new-angles":return"💡";case"synthesis":return"📄";default:return"⚙️"}})(t.stage||"follow-up")}),W(Js,{children:t.stage?{"follow-up":"依頼内容の整理","research-outline":"調査の計画",search:"情報収集",extraction:"情報分析","new-angles":"追加の調査",synthesis:"調査レポート作成"}[t.stage]||t.stage:"Processing..."})]}),W(Vs,{children:[W(Us,{children:t.message||"Processing..."}),W(Ws,{children:["更新日時: ",new Date(t.updated_at).toLocaleString("ja-JP")]})]}),"completed"===t.status&&t.summary_report&&W(Qs,{children:[W(Gs,{children:"調査結果"}),W(Zs,{children:[t.summary_report.substring(0,200),"..."]}),W(Ks,{children:W(Ys,{variant:"primary",onClick:()=>n(t.summary_report),children:"結果をチャットに送信"})})]}),"completed"===t.status&&t.checksheet_markdown&&!t.summary_report&&W(Qs,{children:[W(Gs,{children:"調査チェックシート"}),W(Zs,{children:[t.checksheet_markdown.substring(0,200),"..."]}),W(Ks,{children:W(Ys,{variant:"primary",onClick:()=>n(t.checksheet_markdown),children:"チェックシートをチャットに送信"})})]}),"failed"===t.status&&W(Ks,{children:W(Ys,{variant:"secondary",onClick:r,children:"再試行"})})]})}const Ts=Fe("div")`
  padding: 1.5rem;
  background: var(--bg-primary);
  border-radius: 12px;
  border: 1px solid var(--border-light);
`,Fs=Fe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,Es=Fe("h3")`
  margin: 0;
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,Os=Fe("span")`
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${e=>{switch(e.status){case"pending":return"#fef3c7";case"in-progress":return"#dbeafe";case"completed":return"#d1fae5";case"failed":return"#fee2e2";default:return"#f3f4f6"}}};
  color: ${e=>{switch(e.status){case"pending":return"#92400e";case"in-progress":return"#1e40af";case"completed":return"#065f46";case"failed":return"#dc2626";default:return"#374151"}}};
`,Ns=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`,Ps=Fe("div")`
  flex: 1;
  height: 8px;
  background: var(--bg-secondary);
  border-radius: 4px;
  overflow: hidden;
`,Ls=Fe("div")`
  height: 100%;
  background: var(--primary);
  width: ${e=>e.progress}%;
  transition: width 0.5s ease;
`,qs=Fe("span")`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  min-width: 3rem;
`,Hs=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,Bs=Fe("span")`
  font-size: 1.5rem;
`,Js=Fe("span")`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
`,Vs=Fe("div")`
  margin-bottom: 1rem;
`,Us=Fe("p")`
  margin: 0 0 0.5rem 0;
  color: var(--text-secondary);
  line-height: 1.5;
`,Ws=Fe("div")`
  font-size: 0.75rem;
  color: var(--text-secondary);
`,Qs=Fe("div")`
  background: var(--bg-secondary);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`,Gs=Fe("h4")`
  margin: 0 0 0.75rem 0;
  color: var(--text-primary);
  font-size: 0.95rem;
  font-weight: 600;
`,Zs=Fe("div")`
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`,Ks=Fe("div")`
  display: flex;
  gap: 0.75rem;
`,Ys=Fe("button")`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${e=>"primary"===e.variant?"\n    background: var(--primary);\n    color: white;\n\n    &:hover {\n      background: var(--primary-hover);\n    }\n  ":"\n    background: var(--bg-secondary);\n    color: var(--text-primary);\n    border: 1px solid var(--border-light);\n\n    &:hover {\n      background: var(--bg-hover);\n    }\n  "}
`,Xs=Fe("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-primary);
`,ed=Fe("div")`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-light);
  background: var(--bg-primary);
`,rd=Fe("button")`
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
`,nd=Fe("h2")`
  margin: 0;
  margin-left: 1rem;
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,td=Fe("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`,od=Fe("div")`
  margin-bottom: 2rem;
`,ad=Fe("textarea")`
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
`,id=Fe("div")`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`,sd=Fe("button")`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;

  ${e=>"primary"===e.variant?"\n    background: var(--primary);\n    color: white;\n\n    &:hover:not(:disabled) {\n      background: var(--primary-hover);\n    }\n\n    &:disabled {\n      background: var(--bg-secondary);\n      color: var(--text-secondary);\n      cursor: not-allowed;\n    }\n  ":"\n    background: var(--bg-secondary);\n    color: var(--text-primary);\n    border: 1px solid var(--border-light);\n\n    &:hover:not(:disabled) {\n      background: var(--bg-hover);\n    }\n\n    &:disabled {\n      color: var(--text-secondary);\n      cursor: not-allowed;\n    }\n  "}
`,dd=Fe("div")`
  color: #ef4444;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;function ld({chatFlowId:e,sessionId:r,messages:n,onBack:t,onSendMessage:o,baseUrl:a}){const[i,s]=de("input"),[d,l]=de(""),[c,u]=de(null),[h,p]=de(null),[m,g]=de(!1),{getValidToken:f,isInitializing:b,session:v}=rs(e);le(()=>{if("execution"!==i||!c)return;if("completed"===c.status||"failed"===c.status)return;let e;const n=async()=>{try{const n=B.replace("/api/embed/v1",""),t=(null==v?void 0:v.sessionId)||r,o=await fetch(`${n}/api/embed/v1/rag-deep-research/status?sessionId=${t}`);if(!o.ok)throw new Error("Failed to fetch task status");const a=await o.json();a.task&&(u(a.task),"completed"!==a.task.status&&"failed"!==a.task.status||e&&clearInterval(e))}catch(r){r instanceof TypeError&&r.message.includes("Failed to fetch")&&e&&clearInterval(e)}};return n(),e=setInterval(n,5e3),()=>{e&&clearInterval(e)}},[i,r,a,v]);const y=pe(async()=>{if(d.trim()){g(!0),p(null);try{await k(d,n)}catch(e){p(e instanceof Error?e.message:"Failed to start research"),g(!1)}}},[d,n]),k=pe(async(n,t)=>{try{const o=await f();if(!o)throw new Error("Failed to get valid session token");const a=B.replace("/api/embed/v1",""),i=(null==v?void 0:v.sessionId)||r,d=await fetch(`${a}/api/embed/v1/rag-deep-research/executor`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userQuestion:n,chatFlowId:e,sessionId:i,secureSessionToken:o,messages:t,report_settings:{reportFormat:"business-report",internetEnabled:!0,language:"japanese"}})});if(!d.ok)throw new Error(`Failed to start research: ${d.status}`);const l=await d.json();u({id:l.taskId,session_id:i,status:"pending",stage:"follow-up",progress:0,message:"深層調査を開始しています...",checksheet_markdown:null,tool_usage_plan:null,execution_results:null,final_report_message_id:null,summary_report:null,research_id:null,created_at:(new Date).toISOString(),updated_at:(new Date).toISOString(),report_settings:{reportFormat:"business-report",internetEnabled:!0,language:"japanese"}}),s("execution")}catch(e){throw e}finally{g(!1)}},[a,e,r,f,v]),x=pe(()=>{s("input"),u(null),p(null),l("")},[]);return W(Xs,{children:[W(ed,{children:[W(rd,{onClick:t,children:[W("span",{children:"←"}),"戻る"]}),W(nd,{children:"RAG 深層調査"})]}),W(td,{children:[h&&W(dd,{children:h}),b?W(od,{children:W("div",{style:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)"},children:"セッションを初期化しています..."})}):"input"===i&&W(od,{children:[W(ad,{value:d,onChange:e=>l(e.currentTarget.value),placeholder:"深層調査を行いたいトピックや質問を入力してください...",disabled:m}),W(id,{children:[W(sd,{variant:"secondary",onClick:t,children:"キャンセル"}),W(sd,{variant:"primary",onClick:y,disabled:!d.trim()||m,children:m?"処理中...":"調査を開始"})]})]}),"execution"===i&&c&&W(Rs,{task:c,onRetry:x,onSendMessage:o})]})]})}const cd=Te`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,ud=Te`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,hd=Te`
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
`;function pd({isOpen:e,onClose:r,currentMode:n,onModeSwitch:t,messages:o,isLoading:a,streamingContent:i,onSendMessage:s,error:d,config:l,currentState:c,boostMode:u,onBoostModeChange:h,sessionId:p,onFeedbackSubmit:m,onClearChat:g,showIntro:f,displayMode:b="modal",metadataFilters:v,onMetadataFiltersChange:y}){const x=ue(null);if(le(()=>{if(!e)return;const n=e=>{"Escape"===e.key&&r()},t=e=>{"fullscreen"!==b&&x.current&&x.current.contains&&"function"==typeof x.current.contains&&!x.current.contains(e.target)&&r()};return document.addEventListener("keydown",n),document.addEventListener("mousedown",t),()=>{document.removeEventListener("keydown",n),document.removeEventListener("mousedown",t)}},[e,r]),!e)return null;return W(md,{onClick:e=>{"fullscreen"!==b&&e.target===e.currentTarget&&r()},displayMode:b,children:W(gd,{ref:x,displayMode:b,children:[W(fd,{children:[W(bd,{children:(l.language,"AskDona")}),W(vd,{children:[l.enableRagDeepResearch&&W(yd,{active:"rag-deep-research"===n,onClick:()=>t("rag-deep-research"),children:[W(lr,{size:14,style:{marginRight:"4px"}}),(l.language,"RAG Deep Research")]}),"fullscreen"!==b&&W(kd,{onClick:r,children:"×"})]})]}),W(xd,{children:"ask-ai"===n?W(Gn,{messages:o,isLoading:a,streamingContent:i,onSendMessage:s,error:d,config:l,currentState:c,boostMode:u,onBoostModeChange:h,sessionId:p,onFeedbackSubmit:m,showIntro:f,metadataFilters:v,onMetadataFiltersChange:y,onClearChat:g,currentMode:n,onModeSwitch:e=>t(e)}):"search"===n?W(_t,{config:l,currentMode:n,onModeSwitch:t},"search-view"):"deep-research"===n?W(os,{chatflowId:l.chatflowId,onClose:()=>t("ask-ai"),isVisible:"deep-research"===n}):"rag-deep-research"===n&&l.enableRagDeepResearch?W(ld,{chatFlowId:l.chatflowId,sessionId:p,messages:o.map(e=>({role:e.role,content:e.content,createdAt:e.createdAt,id:e.id})),onBack:()=>t("ask-ai"),onSendMessage:e=>s(e),baseUrl:window.location.origin}):null}),W(wd,{children:[W(Sd,{children:["Powered by ",W(zd,{href:"https://askdona.com",target:"_blank",style:"color: inherit; text-decoration: none;",children:"AskDona"})]}),W(Cd,{children:"ja"===l.language?W(k,{children:[W("div",{children:"Boostモードは、より多角的な視点から多くの文書を分析して回答します。通常モードより回答生成までに時間がかかります。"}),W("div",{children:"RAGシステムは誤った情報を提供することがあります。重要な情報はご自身で確認してください。"})]}):W(k,{children:[W("div",{children:"Boost mode analyzes more documents from multiple perspectives. It takes longer than normal mode."}),W("div",{children:"RAG systems may provide incorrect information. Please verify important information yourself."})]})})]})]})})}Te`
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
`,Te`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Te`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;const md=Fe("div")`
  position: fixed;
  inset: 0;
  background: ${e=>"fullscreen"===e.displayMode?"transparent":"rgba(0, 0, 0, 0.5)"};
  backdrop-filter: ${e=>"fullscreen"===e.displayMode?"none":"blur(4px)"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  padding: ${e=>"fullscreen"===e.displayMode?"0":"1.25rem"};
  animation: ${cd} 0.2s ease-out;
`,gd=Fe("div")`
  background: var(--askdona-surface);
  border-radius: ${e=>"fullscreen"===e.displayMode?"0":"1rem"};
  width: ${e=>"fullscreen"===e.displayMode?"100vw":"100%"};
  max-width: ${e=>"fullscreen"===e.displayMode?"none":"72rem"};
  height: ${e=>"fullscreen"===e.displayMode?"100vh":"90vh"};
  max-height: ${e=>"fullscreen"===e.displayMode?"none":"1000px"};
  box-shadow: ${e=>"fullscreen"===e.displayMode?"none":"0 25px 50px -12px rgba(0, 0, 0, 0.25)"};
  display: flex;
  flex-direction: column;
  animation: ${e=>"fullscreen"===e.displayMode?"none":ud} 0.3s ease-out;
  overflow: hidden;
`,fd=Fe("header")`
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`,bd=Fe("h2")`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: var(--askdona-text);
  font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
`,vd=Fe("div")`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,yd=Fe("button")`
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
`,kd=Fe("button")`
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
`,xd=Fe("main")`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,wd=Fe("footer")`
  padding: 0.75rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
`,Sd=Fe("span")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
`,zd=Fe("a")`
  font-size: 0.75rem;
  color: var(--askdona-primary);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,Cd=Fe("div")`
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
`;function $d({onClick:e,position:r}){return W(Md,{onClick:e,position:r,children:W("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:W("path",{d:"M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.9706 16.9706 21 12 21C10.4077 21 8.88275 20.5699 7.5389 19.7447L3 21L4.25553 16.4611C3.43012 15.1173 3 13.5923 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}const Md=Fe("button")`
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
  animation: ${hd} 0.5s ease-out;
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
`;function _d(e){const[r,n]=de({isValid:!1,error:null,config:null});return le(()=>{const r=async()=>{try{const r=await async function(e){try{return await J(`/validate/${e}`,{method:"POST",body:JSON.stringify({origin:window.location.origin})})}catch(e){return{isValid:!1,error:e.message}}}(e);n({isValid:r.isValid,error:r.error?new Error(r.error):null,config:r.config||null})}catch(e){n({isValid:!1,error:e,config:null})}};e&&r()},[e]),r}const jd="askdona_widget_",Id=864e5;function Ad(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e)}function Dd(e){const r=`${jd}messages_${e}`;try{const e=localStorage.getItem(r);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n:n.messages||[]}catch(e){return[]}}function Rd(e){var r;const n=`${jd}messages_${e}`;try{const e=localStorage.getItem(n);if(!e)return null;const t=JSON.parse(e);return!Array.isArray(t)&&t.sessionId&&(null===(r=t.messages)||void 0===r?void 0:r.length)>0?t.sessionId:null}catch(e){return null}}function Td(e){const[r]=de(()=>{if(Dd(e).length>0){const r=Rd(e);if(r)return r}const r=function(e){const r=`${jd}session_${e}`;try{const e=localStorage.getItem(r);if(e){const r=JSON.parse(e);if(r.expiresAt>Date.now()&&Ad(r.id))return r.id}}catch(e){}const n=Dd(e).length>0;if(n){const n=Rd(e);if(n&&Ad(n)){const e={id:n,createdAt:Date.now(),expiresAt:Date.now()+Id};try{localStorage.setItem(r,JSON.stringify(e))}catch(e){}return n}}try{localStorage.removeItem(r),n||localStorage.removeItem(`${jd}messages_${e}`)}catch(e){}const t={id:H(),createdAt:Date.now(),expiresAt:Date.now()+Id};try{localStorage.setItem(r,JSON.stringify(t))}catch(e){}return t.id}(e);return r}),[n,t]=de(()=>Dd(e)),[o,a]=de(!1),[i,s]=de(""),[d,l]=de(null),[c,u]=de("idle"),h=ue(null),p=ue(null),m=ue(""),g=ue(null);le(()=>{if(n.length>0){const t=n[n.length-1];!function(e,r,n){const t=`${jd}messages_${e}`;try{const e=localStorage.getItem(t),o=e?JSON.parse(e):{sessionId:null,messages:[]};n&&!o.sessionId&&(o.sessionId=n);const a=o.messages||[],i=a.findIndex(e=>e.id===r.id);-1!==i?a[i]=r:a.push(r),a.length>50&&a.splice(0,a.length-50),o.messages=a,localStorage.setItem(t,JSON.stringify(o))}catch(e){}}(e,t,r)}},[n,e,r]);const f=pe(()=>{t([]),function(e){[`${jd}session_${e}`,`${jd}messages_${e}`].forEach(e=>{try{localStorage.removeItem(e)}catch(e){}})}(e)},[e]),b=pe(async(o,i=!1,d=null)=>{try{const c={id:H(),role:"user",content:o,createdAt:(new Date).toISOString(),metadata:{mode:i?"boost":"standard"}};t(e=>[...e,c]),a(!0),l(null),s(""),u("thinking"),m.current="",g.current=null;const f={id:H(),role:"assistant",content:"",createdAt:(new Date).toISOString(),metadata:{mode:i?"boost":"standard"}};p.current=f,h.current=new AbortController,await async function({chatflowId:e,sessionId:r,message:n,messages:t,boostMode:o=!1,userMessageId:a,assistantMessageId:i,metadataFilters:s,signal:d,onChunk:l}){var c;const u=`${B}/chat/${e}/${o?"boost":"standard"}`,h=await fetch(u,{method:"POST",headers:{"Content-Type":"application/json","X-Widget-Version":"1.0.0"},body:JSON.stringify({userQuestion:n,sessionId:r,messages:t.map(e=>({role:e.role,content:e.content,createdAt:e.createdAt})),boostMode:o,userMessageId:a,assistantMessageId:i,metadataFilters:s}),signal:d}),p={};if(h.headers.forEach((e,r)=>{p[r]=e}),!h.ok){const e=await h.json().catch(()=>({message:"Request failed"}));throw new Error(e.message||`HTTP ${h.status}`)}const m=null===(c=h.body)||void 0===c?void 0:c.getReader();if(!m)throw new Error("No response body");const g=new TextDecoder;let f="";try{for(;;){const{done:e,value:r}=await m.read();if(e)break;const n=g.decode(r,{stream:!0});if(n.includes("\0")){f+=n;const e=f.split("\0");f=e[e.length-1];for(let r=0;r<e.length-1;r++){const n=e[r];n&&(n.startsWith("__STATE__:")?l({type:"state",data:n.substring(10).replace(/\n$/,"")}):n.startsWith("__SEARCH__:")?l({type:"search",data:n.substring(11).replace(/\n$/,"")}):n.startsWith("__METADATA__:")?l({type:"metadata",data:n.substring(13).replace(/\n$/,"")}):n.startsWith("__SEARCH_QUERIES__:")?l({type:"search-queries",data:n.substring(19).replace(/\n$/,"")}):l({type:"content",data:n}))}}else n.trim()&&l({type:"content",data:n})}f&&!f.startsWith("__")&&l({type:"content",data:f})}finally{m.releaseLock()}}({chatflowId:e,sessionId:r,message:o,messages:n,boostMode:i,userMessageId:c.id,assistantMessageId:f.id,metadataFilters:d,signal:h.current.signal,onChunk:e=>{if("content"===e.type)m.current+=e.data,s(m.current);else if("metadata"===e.type)try{const r=JSON.parse(e.data);g.current={...g.current,docMetadata:r,mode:i?"boost":"standard"}}catch(e){}else"state"===e.type&&u(e.data)}})}catch(e){"AbortError"===e.name||l(e)}finally{p.current&&m.current.trim()&&t(e=>[...e,{...p.current,content:m.current.trim(),metadata:{...p.current.metadata,...g.current}}]),a(!1),s(""),u("idle"),h.current=null,p.current=null,m.current="",g.current=null}},[e,n]),v=pe(async(n,o,a)=>{try{t(e=>e.map(e=>e.id===n?{...e,metadata:{...e.metadata,feedback:{rating:o,content:a,submittedAt:(new Date).toISOString(),isSubmitted:!0}}}:e));const i={embedMessageId:n,embedSessionId:r,chatflowId:e,feedbackType:"combined",feedbackData:{rating:"THUMBS_UP"===o?"thumbs_up":"thumbs_down",content:a||null},metadata:{domain:window.location.hostname,url:window.location.href,userAgent:navigator.userAgent}},s=await fetch(`${B}/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!s.ok){const e=await s.text();throw new Error(`Failed to submit feedback: ${s.statusText} - ${e}`)}await s.json()}catch(e){throw t(e=>e.map(e=>e.id===n?{...e,metadata:{...e.metadata,feedback:void 0}}:e)),e}},[r,e]);return{messages:n,sendMessage:b,isLoading:o,streamingContent:i,error:d,currentState:c,sessionId:r,submitFeedback:v,clearChat:f}}function Fd(e,r){const n=parseInt(e.replace("#",""),16),t=Math.round(2.55*r),o=(n>>16)-t,a=(n>>8&255)-t,i=(255&n)-t;return"#"+(16777216+65536*(o<255?o<1?0:o:255)+256*(a<255?a<1?0:a:255)+(i<255?i<1?0:i:255)).toString(16).slice(1)}function Ed(e,r){const n=parseInt(e.replace("#",""),16),t=Math.round(2.55*r),o=(n>>16)+t,a=(n>>8&255)+t,i=(255&n)+t;return"#"+(16777216+65536*(o<255?o<1?0:o:255)+256*(a<255?a<1?0:a:255)+(i<255?i<1?0:i:255)).toString(16).slice(1)}"undefined"!=typeof window&&function(){try{const e=Object.keys(localStorage),r=Date.now();e.forEach(e=>{if(e.startsWith(`${jd}session_`))try{const n=JSON.parse(localStorage.getItem(e)||"{}");if(n.expiresAt&&n.expiresAt<r){localStorage.removeItem(e);const r=e.replace(`${jd}session_`,"");localStorage.removeItem(`${jd}messages_${r}`)}}catch(r){localStorage.removeItem(e)}})}catch(e){}}();const Od={colors:{primary:"#10316f",primaryDark:Fd("#10316f",10),primaryLight:Ed("#10316f",10),background:"#ffffff",surface:"#f8f9fa",text:"#353a5c",textSecondary:"#6b6f8a",border:"#e5e7eb",error:"#EF4444",success:"#10B981"},fonts:{base:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',mono:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1)"}},Nd={colors:{primary:"#10316f",primaryDark:Fd("#10316f",10),primaryLight:Ed("#10316f",10),background:"#0f172a",surface:"#111827",text:"#e5e7eb",textSecondary:"#9ca3af",border:"#1f2937",error:"#F87171",success:"#34D399"},fonts:{base:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',mono:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.3)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.4)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.5)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.6)"}};function Pd(e,r){let n=Od;if("dark"===e)n=Nd;else if("auto"===e){n=window.matchMedia("(prefers-color-scheme: dark)").matches?Nd:Od}n={...n,colors:{...n.colors,primary:"#10316f",primaryDark:Fd("#10316f",10),primaryLight:Ed("#10316f",10)}};const t=function(e){const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?`${parseInt(r[1],16)}, ${parseInt(r[2],16)}, ${parseInt(r[3],16)}`:"0, 0, 0"}(n.colors.primary);return document.documentElement.style.setProperty("--askdona-primary-rgb",t),n}function Ld(e,r){for(var n in r)e[n]=r[n];return e}function qd(e,r){for(var n in e)if("__source"!==n&&!(n in r))return!0;for(var t in r)if("__source"!==t&&e[t]!==r[t])return!0;return!1}function Hd(e,r){this.props=e,this.context=r}(Hd.prototype=new x).isPureReactComponent=!0,Hd.prototype.shouldComponentUpdate=function(e,r){return qd(this.props,e)||qd(this.state,r)};var Bd=n.v;n.v=function(e){e.type&&e.type.J&&e.ref&&(e.props.ref=e.ref,e.ref=null),Bd&&Bd(e)};var Jd="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var Vd=n.S;n.S=function(e,r,n,t){if(e.then)for(var o,a=r;a=a.m;)if((o=a.C)&&o.C)return null==r.S&&(r.S=n.S,r.h=n.h),o.C(e,r);Vd(e,r,n,t)};var Ud=n.unmount;function Wd(e,r,n){return e&&(e.C&&e.C.H&&(e.C.H.m.forEach(function(e){"function"==typeof e.C&&e.C()}),e.C.H=null),null!=(e=Ld({},e)).C&&(e.C.A===n&&(e.C.A=r),e.C.S=!0,e.C=null),e.h=e.h&&e.h.map(function(e){return Wd(e,r,n)})),e}function Qd(e,r,n){return e&&n&&(e.$=null,e.h=e.h&&e.h.map(function(e){return Qd(e,r,n)}),e.C&&e.C.A===r&&(e.S&&n.appendChild(e.S),e.C.S=!0,e.C.A=n)),e}function Gd(){this._=0,this.o=null,this.v=null}function Zd(e){var r=e.m.C;return r&&r.V&&r.V(e)}function Kd(){this.i=null,this.l=null}n.unmount=function(e){var r=e.C;r&&r.U&&r.U(),r&&32&e._&&(e.type=null),Ud&&Ud(e)},(Gd.prototype=new x).C=function(e,r){var n=r.C,t=this;null==t.o&&(t.o=[]),t.o.push(n);var o=Zd(t.$),a=!1,i=function(){a||(a=!0,n.U=null,o?o(s):s())};n.U=i;var s=function(){if(! --t._){if(t.state.V){var e=t.state.V;t.$.h[0]=Qd(e,e.C.A,e.C.W)}var r;for(t.setState({V:t.v=null});r=t.o.pop();)r.forceUpdate()}};t._++||32&r._||t.setState({V:t.v=t.$.h[0]}),e.then(i,i)},Gd.prototype.componentWillUnmount=function(){this.o=[]},Gd.prototype.render=function(e,r){if(this.v){if(this.$.h){var n=document.createElement("div"),t=this.$.h[0].C;this.$.h[0]=Wd(this.v,n,t.W=t.A)}this.v=null}var o=r.V&&v(k,null,e.fallback);return o&&(o._&=-33),[v(k,null,r.V?null:e.children),o]};var Yd=function(e,r,n){if(++n[1]===n[0]&&e.l.delete(r),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(Kd.prototype=new x).V=function(e){var r=this,n=Zd(r.$),t=r.l.get(e);return t[0]++,function(o){var a=function(){r.props.revealOrder?(t.push(o),Yd(r,e,t)):o()};n?n(a):a()}},Kd.prototype.render=function(e){this.i=null,this.l=new Map;var r=_(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&r.reverse();for(var n=r.length;n--;)this.l.set(r[n],this.i=[1,0,this.i]);return e.children},Kd.prototype.componentDidUpdate=Kd.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(r,n){Yd(e,n,r)})};var Xd="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,el=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,rl=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,nl=/[A-Z0-9]/g,tl="undefined"!=typeof document,ol=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};x.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(x.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(r){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:r})}})});var al=n.event;function il(){}function sl(){return this.cancelBubble}function dl(){return this.defaultPrevented}n.event=function(e){return al&&(e=al(e)),e.persist=il,e.isPropagationStopped=sl,e.isDefaultPrevented=dl,e.nativeEvent=e};var ll={enumerable:!1,configurable:!0,get:function(){return this.class}},cl=n.vnode;n.vnode=function(e){"string"==typeof e.type&&function(e){var r=e.props,n=e.type,t={},o=-1===n.indexOf("-");for(var a in r){var i=r[a];if(!("value"===a&&"defaultValue"in r&&null==i||tl&&"children"===a&&"noscript"===n||"class"===a||"className"===a)){var s=a.toLowerCase();"defaultValue"===a&&"value"in r&&null==r.value?a="value":"download"===a&&!0===i?i="":"translate"===s&&"no"===i?i=!1:"o"===s[0]&&"n"===s[1]?"ondoubleclick"===s?a="ondblclick":"onchange"!==s||"input"!==n&&"textarea"!==n||ol(r.type)?"onfocus"===s?a="onfocusin":"onblur"===s?a="onfocusout":rl.test(a)&&(a=s):s=a="oninput":o&&el.test(a)?a=a.replace(nl,"-$&").toLowerCase():null===i&&(i=void 0),"oninput"===s&&t[a=s]&&(a="oninputCapture"),t[a]=i}}"select"==n&&t.multiple&&Array.isArray(t.value)&&(t.value=_(r.children).forEach(function(e){e.props.selected=-1!=t.value.indexOf(e.props.value)})),"select"==n&&null!=t.defaultValue&&(t.value=_(r.children).forEach(function(e){e.props.selected=t.multiple?-1!=t.defaultValue.indexOf(e.props.value):t.defaultValue==e.props.value})),r.class&&!r.className?(t.class=r.class,Object.defineProperty(t,"className",ll)):(r.className&&!r.class||r.class&&r.className)&&(t.class=t.className=r.className),e.props=t}(e),e.$$typeof=Xd,cl&&cl(e)};var ul=n.I;n.I=function(e){ul&&ul(e),e.C};var hl=n.diffed;n.diffed=function(e){hl&&hl(e);var r=e.props,n=e.S;null!=n&&"textarea"===e.type&&"value"in r&&r.value!==n.value&&(n.value=null==r.value?"":r.value)},function(e,r,n,t){je.p=r,xe=e,we=n,Se=t}(v);const pl=function(e){function r(r){var n=Ld({},r);return delete n.ref,e(n,r.ref||null)}return r.$$typeof=Jd,r.render=r,r.prototype.isReactComponent=r.J=!0,r.displayName="ForwardRef("+(e.displayName||e.name)+")",r}(({config:e},r)=>{const[n,t]=de({isOpen:"fullscreen"===e.displayMode,currentMode:"ask-ai",messages:[],isLoading:!1,streamingContent:"",error:null,boostMode:!1,showIntro:!0,metadataFilters:null}),{isValid:o,error:a,config:i}=_d(e.chatflowId),[s,d]=de(null);le(()=>{V(e.chatflowId,e.language).then(e=>{e&&e.embedConfig&&d(e.embedConfig)}).catch(()=>{d(null)})},[e.chatflowId,e.language]);const l={...e};if(s){if(s.introTitle&&(l.introTitle=s.introTitle),s.introMessage&&(l.introMessage=s.introMessage),s.exampleQuestions&&(l.exampleQuestions=s.exampleQuestions),s.appearanceSettings){const e=s.appearanceSettings.primaryColor||void 0,r=s.appearanceSettings.theme||void 0,n=s.appearanceSettings.position||void 0,t=s.appearanceSettings.displayMode||void 0;l.primaryColor=l.primaryColor||e,l.theme=l.theme||r,l.position=l.position||n,l.displayMode=l.displayMode||t}s.featureFlags&&("boolean"==typeof s.featureFlags.enableBoostMode&&(l.defaultBoostMode=!!s.featureFlags.enableBoostMode),"boolean"==typeof s.featureFlags.allowBoostModeToggle&&(l.allowBoostModeToggle=!!s.featureFlags.allowBoostModeToggle),"boolean"==typeof s.featureFlags.enableRagDeepResearch&&(l.enableRagDeepResearch=!!s.featureFlags.enableRagDeepResearch))}else i&&(l.introTitle=i.introTitle,l.introMessage=i.introMessage,l.exampleQuestions=i.exampleQuestions,l.theme=i.theme,l.position=i.position,l.primaryColor=i.primaryColor,l.defaultBoostMode=i.defaultBoostMode,l.allowBoostModeToggle=i.allowBoostModeToggle,l.displayMode=e.displayMode);const c=Pd(l.theme||"light",l.primaryColor),{messages:u,sendMessage:h,isLoading:p,streamingContent:m,error:g,currentState:f,sessionId:b,submitFeedback:v,clearChat:y}=Td(e.chatflowId);le(()=>{t(e=>({...e,messages:u,isLoading:p,streamingContent:m,error:a||g,showIntro:0===u.length&&e.showIntro}))},[u,p,m,a,g]),le(()=>{i&&n.boostMode!==i.defaultBoostMode&&t(e=>({...e,boostMode:i.defaultBoostMode}))},[i]),function(e,r,n){Y=6,ce(function(){if("function"==typeof e){var n=e(r());return function(){e(null),n&&"function"==typeof n&&n()}}if(e)return e.current=r(),function(){return e.current=null}},null==n?n:n.concat(e))}(r,()=>({open:()=>{t(e=>({...e,isOpen:!0}))},close:()=>{t(e=>({...e,isOpen:!1}))},sendMessage:e=>{t(e=>({...e,isOpen:!0})),h(e)}}),[h]);const k=ue(null);if(le(()=>{if(!k.current)return;const e=k.current;e.style.setProperty("--askdona-primary",c.colors.primary),e.style.setProperty("--askdona-primary-dark",c.colors.primaryDark),e.style.setProperty("--askdona-primary-light",c.colors.primaryLight),e.style.setProperty("--askdona-background",c.colors.background),e.style.setProperty("--askdona-surface",c.colors.surface),e.style.setProperty("--askdona-text",c.colors.text),e.style.setProperty("--askdona-text-secondary",c.colors.textSecondary),e.style.setProperty("--askdona-border",c.colors.border),e.style.setProperty("--askdona-error",c.colors.error),e.style.setProperty("--askdona-success",c.colors.success),e.style.setProperty("--askdona-font-base",c.fonts.base),e.style.setProperty("--askdona-font-mono",c.fonts.mono),e.style.setProperty("--askdona-bg-secondary",c.colors.surface),e.style.setProperty("--askdona-bg-hover",c.colors.primaryLight+"20"),e.style.setProperty("--askdona-surface-color",c.colors.background),e.style.setProperty("--askdona-border-color",c.colors.border)},[c]),!o)return null;return W("div",{ref:k,style:{fontFamily:"var(--askdona-font-base)",color:"var(--askdona-text)"},children:[!n.isOpen&&"fullscreen"!==l.displayMode&&W($d,{onClick:()=>{t(e=>({...e,isOpen:!0}))},position:l.position||"bottom-right"}),(n.isOpen||"fullscreen"===l.displayMode)&&W(pd,{isOpen:n.isOpen||"fullscreen"===l.displayMode,onClose:()=>{"fullscreen"!==l.displayMode&&t(e=>({...e,isOpen:!1}))},currentMode:n.currentMode,onModeSwitch:e=>{t(r=>({...r,currentMode:e}))},messages:n.messages,isLoading:n.isLoading,streamingContent:n.streamingContent,onSendMessage:(e,r,o)=>{h(e,void 0!==r?r:n.boostMode,o||n.metadataFilters),t(e=>({...e,showIntro:!1}))},error:n.error,config:l,currentState:f,boostMode:n.boostMode,onBoostModeChange:e=>{t(r=>({...r,boostMode:e}))},sessionId:b,onFeedbackSubmit:v,onClearChat:()=>{y(),t(e=>({...e,showIntro:!0}))},showIntro:n.showIntro,displayMode:l.displayMode||"modal",metadataFilters:n.metadataFilters,onMetadataFiltersChange:e=>{t(r=>({...r,metadataFilters:e}))}})]})});pl.displayName="Widget";const ml=["chatflow-id","theme","position","primary-color","language","display-mode","custom-css","debug","instrument-serif-regular","instrument-serif-600"];class gl extends HTMLElement{constructor(){super(...arguments),this.widgetRef={current:null},this.initialised=!1}static get observedAttributes(){return ml}connectedCallback(){if(this.initialised)return;this.initialised=!0,this.shadow=this.attachShadow({mode:"open"});const e=document.createElement("style");e.textContent="\n  /* Ensure font available within shadow */\n  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block');\n  :host {\n    all: initial;\n    contain: content;\n    position: fixed;\n    inset: auto;\n    z-index: 999999; /* Keep on top of most sites */\n  }\n\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n\n  /* Scoped scrollbar styling */\n  *::-webkit-scrollbar { width: 6px; height: 6px; }\n  *::-webkit-scrollbar-track { background: transparent; }\n  *::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.2); border-radius: 3px; }\n  *::-webkit-scrollbar-thumb:hover { background: rgba(0, 0, 0, 0.3); }\n\n  @media (prefers-reduced-motion: reduce) {\n    * { animation: none !important; transition: none !important; }\n  }\n",this.shadow.appendChild(e);const r=this.getAttribute("instrument-serif-regular"),n=this.getAttribute("instrument-serif-600");if(r||n){if(r){const e=document.createElement("link");e.rel="preload",e.as="font",e.href=r,e.type="font/woff2",e.crossOrigin="anonymous",this.shadow.appendChild(e)}if(n){const e=document.createElement("link");e.rel="preload",e.as="font",e.href=n,e.type="font/woff2",e.crossOrigin="anonymous",this.shadow.appendChild(e)}const e=document.createElement("style");e.textContent=`\n        ${r?`@font-face { font-family: 'Instrument Serif'; font-style: normal; font-weight: 400; font-display: swap; src: url('${r}') format('woff2'); }`:""}\n        ${n?`@font-face { font-family: 'Instrument Serif'; font-style: normal; font-weight: 600; font-display: swap; src: url('${n}') format('woff2'); }`:""}\n      `,this.shadow.appendChild(e)}else{const e=document.createElement("link");e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",this.shadow.appendChild(e);const r="askdona-font-global";if(!document.getElementById(r)){const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",document.head.appendChild(e);const n=document.createElement("link");n.rel="preconnect",n.href="https://fonts.gstatic.com",n.crossOrigin="anonymous",document.head.appendChild(n);const t=document.createElement("link");t.id=r,t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",document.head.appendChild(t)}}const t="askdona-font-global";if(!document.getElementById(t)){const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",document.head.appendChild(e);const r=document.createElement("link");r.rel="preconnect",r.href="https://fonts.gstatic.com",r.crossOrigin="anonymous",document.head.appendChild(r);const n=document.createElement("link");n.id=t,n.rel="stylesheet",n.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",document.head.appendChild(n)}this.gooberStyleEl=document.createElement("style"),this.gooberStyleEl.id="_goober",this.gooberStyleEl.appendChild(document.createTextNode(" ")),this.shadow.appendChild(this.gooberStyleEl),window._goober=this.gooberStyleEl,this.mountPoint=document.createElement("div"),this.shadow.appendChild(this.mountPoint),this.applyPosition();const o=this.getAttribute("custom-css");if(o){const e=document.createElement("link");e.rel="stylesheet",e.href=o,this.shadow.appendChild(e)}this.renderWidget()}disconnectedCallback(){if(this.mountPoint&&L(null,this.mountPoint),window._goober===this.gooberStyleEl)try{delete window._goober}catch(e){window._goober=null}}attributeChangedCallback(e,r,n){this.applyPosition(),this.renderWidget()}open(){var e;null===(e=this.widgetRef.current)||void 0===e||e.open()}close(){var e;null===(e=this.widgetRef.current)||void 0===e||e.close()}sendMessage(e){var r;null===(r=this.widgetRef.current)||void 0===r||r.sendMessage(e)}applyPosition(){const e=this.getAttribute("position")||"bottom-right";if("fullscreen"===(this.getAttribute("display-mode")||"modal"))return this.style.position="fixed",void(this.style.inset="0");this.style.position="fixed",this.style.bottom="20px",this.style.left="bottom-left"===e?"20px":"",this.style.right="bottom-right"===e?"20px":""}getConfig(){const e=this.getAttribute("chatflow-id")||"";if(!e)return null;return{chatflowId:e,theme:this.getAttribute("theme")||void 0,position:this.getAttribute("position")||void 0,primaryColor:this.getAttribute("primary-color")||void 0,language:this.getAttribute("language")||void 0,displayMode:this.getAttribute("display-mode")||void 0,debug:this.hasAttribute("debug")?"true"===this.getAttribute("debug"):void 0}}renderWidget(){const e=this.getConfig();e&&L(W(pl,{ref:this.widgetRef,config:e}),this.mountPoint)}}function fl(){customElements.get("askdona-widget")||customElements.define("askdona-widget",gl)}let bl={current:null};async function vl(e){var r,n,t,o;try{const a=function(e){return e.chatflowId?e.theme&&!["light","dark","auto"].includes(e.theme)?{isValid:!1,error:'Invalid theme. Must be "light", "dark", or "auto"'}:e.position&&!["bottom-right","bottom-left"].includes(e.position)?{isValid:!1,error:'Invalid position. Must be "bottom-right" or "bottom-left"'}:e.language&&!["ja","en"].includes(e.language)?{isValid:!1,error:'Invalid language. Must be "ja" or "en"'}:{isValid:!0}:{isValid:!1,error:"chatflowId is required"}}(e);if(!a.isValid)throw new Error(a.error);!function(){if(!document.querySelector('meta[name="askdona-csp"]')){const e=document.createElement("meta");e.name="askdona-csp",e.content=["default-src 'self'","script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net","style-src 'self' 'unsafe-inline'","img-src 'self' data: https:","connect-src 'self' https://api.askdona.com wss://api.askdona.com","font-src 'self' data:","frame-ancestors 'none'"].join("; "),document.head.appendChild(e)}}();let i=null;try{i=await V(e.chatflowId,e.language)}catch(e){}let s={...e};if(null==i?void 0:i.embedConfig){const e=i.embedConfig.introTitle&&i.embedConfig.introMessage?{title:i.embedConfig.introTitle,message:i.embedConfig.introMessage}:null;e&&(s.introTitle=e.title,s.introMessage=e.message),i.embedConfig.exampleQuestions&&(s.exampleQuestions=i.embedConfig.exampleQuestions),i.embedConfig.featureFlags&&(s.defaultBoostMode=i.embedConfig.featureFlags.enableBoostMode,s.allowBoostModeToggle=i.embedConfig.featureFlags.allowBoostModeToggle,s.enableRagDeepResearch=i.embedConfig.featureFlags.enableRagDeepResearch),i.embedConfig.appearanceSettings&&(!s.primaryColor&&i.embedConfig.appearanceSettings.primaryColor&&(s.primaryColor=i.embedConfig.appearanceSettings.primaryColor),!s.theme&&i.embedConfig.appearanceSettings.theme&&(s.theme=i.embedConfig.appearanceSettings.theme),!s.position&&i.embedConfig.appearanceSettings.position&&(s.position=i.embedConfig.appearanceSettings.position),!s.displayMode&&i.embedConfig.appearanceSettings.displayMode&&(s.displayMode=i.embedConfig.appearanceSettings.displayMode))}fl();let d=document.querySelector("askdona-widget");d?(d.setAttribute("chatflow-id",s.chatflowId),s.theme&&d.setAttribute("theme",s.theme),s.position&&d.setAttribute("position",s.position),s.primaryColor&&d.setAttribute("primary-color",s.primaryColor),s.language&&d.setAttribute("language",s.language),s.displayMode&&d.setAttribute("display-mode",s.displayMode),s.customCSS&&d.setAttribute("custom-css",s.customCSS),(null===(t=s.instrumentSerif)||void 0===t?void 0:t.w400)&&d.setAttribute("instrument-serif-regular",s.instrumentSerif.w400),(null===(o=s.instrumentSerif)||void 0===o?void 0:o.w600)&&d.setAttribute("instrument-serif-600",s.instrumentSerif.w600),s.debug&&d.setAttribute("debug",String(!!s.debug))):(d=document.createElement("askdona-widget"),d.setAttribute("chatflow-id",s.chatflowId),s.theme&&d.setAttribute("theme",s.theme),s.position&&d.setAttribute("position",s.position),s.primaryColor&&d.setAttribute("primary-color",s.primaryColor),s.language&&d.setAttribute("language",s.language),s.displayMode&&d.setAttribute("display-mode",s.displayMode),s.customCSS&&d.setAttribute("custom-css",s.customCSS),(null===(r=s.instrumentSerif)||void 0===r?void 0:r.w400)&&d.setAttribute("instrument-serif-regular",s.instrumentSerif.w400),(null===(n=s.instrumentSerif)||void 0===n?void 0:n.w600)&&d.setAttribute("instrument-serif-600",s.instrumentSerif.w600),s.debug&&d.setAttribute("debug",String(!!s.debug)),document.body.appendChild(d)),s.onReady&&setTimeout(()=>{s.onReady&&s.onReady()},0),s.debug}catch(r){e.onError&&e.onError(r)}}function yl(){const e=document.querySelector("askdona-widget");e&&e.parentNode&&e.parentNode.removeChild(e),bl={current:null}}function kl(){const e=document.querySelector("askdona-widget");return e&&"function"==typeof e.open?e.open():bl.current?bl.current.open():void 0}function xl(){const e=document.querySelector("askdona-widget");return e&&"function"==typeof e.close?e.close():bl.current?bl.current.close():void 0}function wl(e){const r=document.querySelector("askdona-widget");return r&&"function"==typeof r.sendMessage?r.sendMessage(e):bl.current?bl.current.sendMessage(e):void 0}if("undefined"!=typeof window){fl();const e=document.currentScript;e&&e.dataset.chatflowId&&window.addEventListener("DOMContentLoaded",async()=>{const r=e.dataset.chatflowId;if(r)try{await vl({chatflowId:r,theme:e.dataset.theme,position:e.dataset.position,primaryColor:e.dataset.primaryColor,language:e.dataset.language,displayMode:e.dataset.displayMode})}catch(e){}})}return window.AskDona={init:vl,destroy:yl,open:kl,close:xl,sendMessage:wl},e.close=xl,e.destroy=yl,e.init=vl,e.open=kl,e.sendMessage=wl,e}({});
