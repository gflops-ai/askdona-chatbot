var AskDona=function(e){"use strict";var r,n,t,o,i,a,s,l,d,c,u,h={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,m=Array.isArray;function g(e,r){for(var n in r)e[n]=r[n];return e}function b(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function k(e,n,t){var o,i,a,s={};for(a in n)"key"==a?o=n[a]:"ref"==a?i=n[a]:s[a]=n[a];if(arguments.length>2&&(s.children=arguments.length>3?r.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===s[a]&&(s[a]=e.defaultProps[a]);return v(e,s,o,i,null)}function v(e,r,o,i,a){var s={type:e,props:r,key:o,ref:i,h:null,m:null,v:0,$:null,S:null,constructor:void 0,_:null==a?++t:a,C:-1,M:0};return null==a&&null!=n.vnode&&n.vnode(s),s}function y(e){return e.children}function x(e,r){this.props=e,this.context=r}function w(e,r){if(null==r)return e.m?w(e.m,e.C+1):null;for(var n;r<e.h.length;r++)if(null!=(n=e.h[r])&&null!=n.$)return n.$;return"function"==typeof e.type?w(e):null}function $(e){var r,n;if(null!=(e=e.m)&&null!=e.S){for(e.$=e.S.base=null,r=0;r<e.h.length;r++)if(null!=(n=e.h[r])&&null!=n.$){e.$=e.S.base=n.$;break}return $(e)}}function S(e){(!e.A&&(e.A=!0)&&o.push(e)&&!z.j++||i!=n.debounceRendering)&&((i=n.debounceRendering)||a)(z)}function z(){for(var e,r,t,i,a,l,d,c=1;o.length;)o.length>c&&o.sort(s),e=o.shift(),c=o.length,e.A&&(t=void 0,a=(i=(r=e)._).$,l=[],d=[],r.I&&((t=g({},i))._=i._+1,n.vnode&&n.vnode(t),E(r.I,t,i,r.D,r.I.namespaceURI,32&i.M?[a]:null,l,null==a?w(i):a,!!(32&i.M),d),t._=i._,t.m.h[t.C]=t,R(l,t,d),t.$!=a&&$(t)));z.j=0}function _(e,r,n,t,o,i,a,s,l,d,c){var u,f,g,b,k,x,$=t&&t.h||p,S=r.length;for(l=function(e,r,n,t,o){var i,a,s,l,d,c=n.length,u=c,h=0;for(e.h=new Array(o),i=0;i<o;i++)null!=(a=r[i])&&"boolean"!=typeof a&&"function"!=typeof a?(l=i+h,(a=e.h[i]="string"==typeof a||"number"==typeof a||"bigint"==typeof a||a.constructor==String?v(null,a,null,null,null):m(a)?v(y,{children:a},null,null,null):null==a.constructor&&a.v>0?v(a.type,a.props,a.key,a.ref?a.ref:null,a._):a).m=e,a.v=e.v+1,s=null,-1!=(d=a.C=A(a,n,l,u))&&(u--,(s=n[d])&&(s.M|=2)),null==s||null==s._?(-1==d&&(o>c?h--:o<c&&h++),"function"!=typeof a.type&&(a.M|=4)):d!=l&&(d==l-1?h--:d==l+1?h++:(d>l?h--:h++,a.M|=4))):e.h[i]=null;if(u)for(i=0;i<c;i++)null!=(s=n[i])&&!(2&s.M)&&(s.$==t&&(t=w(s)),N(s,s));return t}(n,r,$,l,S),u=0;u<S;u++)null!=(g=n.h[u])&&(f=-1==g.C?h:$[g.C]||h,g.C=u,x=E(e,g,f,o,i,a,s,l,d,c),b=g.$,g.ref&&f.ref!=g.ref&&(f.ref&&O(f.ref,null,g),c.push(g.ref,g.S||b,g)),null==k&&null!=b&&(k=b),4&g.M||f.h===g.h?l=C(g,l,e):"function"==typeof g.type&&void 0!==x?l=x:b&&(l=b.nextSibling),g.M&=-7);return n.$=k,l}function C(e,r,n){var t,o;if("function"==typeof e.type){for(t=e.h,o=0;t&&o<t.length;o++)t[o]&&(t[o].m=e,r=C(t[o],r,n));return r}e.$!=r&&(r&&e.type&&!n.contains(r)&&(r=w(e)),n.insertBefore(e.$,r||null),r=e.$);do{r=r&&r.nextSibling}while(null!=r&&8==r.nodeType);return r}function M(e,r){return r=r||[],null==e||"boolean"==typeof e||(m(e)?e.some(function(e){M(e,r)}):r.push(e)),r}function A(e,r,n,t){var o,i,a=e.key,s=e.type,l=r[n];if(null===l&&null==e.key||l&&a==l.key&&s==l.type&&!(2&l.M))return n;if(t>(null==l||2&l.M?0:1))for(o=n-1,i=n+1;o>=0||i<r.length;){if(o>=0){if((l=r[o])&&!(2&l.M)&&a==l.key&&s==l.type)return o;o--}if(i<r.length){if((l=r[i])&&!(2&l.M)&&a==l.key&&s==l.type)return i;i++}}return-1}function j(e,r,n){"-"==r[0]?e.setProperty(r,null==n?"":n):e[r]=null==n?"":"number"!=typeof n||f.test(r)?n:n+"px"}function I(e,r,n,t,o){var i,a;e:if("style"==r)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof t&&(e.style.cssText=t=""),t)for(r in t)n&&r in n||j(e.style,r,"");if(n)for(r in n)t&&n[r]==t[r]||j(e.style,r,n[r])}else if("o"==r[0]&&"n"==r[1])i=r!=(r=r.replace(l,"$1")),a=r.toLowerCase(),r=a in e||"onFocusOut"==r||"onFocusIn"==r?a.slice(2):r.slice(2),e.l||(e.l={}),e.l[r+i]=n,n?t?n.u=t.u:(n.u=d,e.addEventListener(r,i?u:c,i)):e.removeEventListener(r,i?u:c,i);else{if("http://www.w3.org/2000/svg"==o)r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=r&&"height"!=r&&"href"!=r&&"list"!=r&&"form"!=r&&"tabIndex"!=r&&"download"!=r&&"rowSpan"!=r&&"colSpan"!=r&&"role"!=r&&"popover"!=r&&r in e)try{e[r]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!=r[4]?e.removeAttribute(r):e.setAttribute(r,"popover"==r&&1==n?"":n))}}function D(e){return function(r){if(this.l){var t=this.l[r.type+e];if(null==r.t)r.t=d++;else if(r.t<t.u)return;return t(n.event?n.event(r):r)}}}function E(e,r,t,o,i,a,s,l,d,c){var u,h,p,f,k,v,w,$,S,z,C,M,A,j,I,D,E,R=r.type;if(null!=r.constructor)return null;128&t.M&&(d=!!(32&t.M),a=[l=r.$=t.$]),(u=n.v)&&u(r);e:if("function"==typeof R)try{if($=r.props,S="prototype"in R&&R.prototype.render,z=(u=R.contextType)&&o[u.S],C=u?z?z.props.value:u.m:o,t.S?w=(h=r.S=t.S).m=h.R:(S?r.S=h=new R($,C):(r.S=h=new x($,C),h.constructor=R,h.render=q),z&&z.sub(h),h.props=$,h.state||(h.state={}),h.context=C,h.D=o,p=h.A=!0,h.T=[],h.F=[]),S&&null==h.O&&(h.O=h.state),S&&null!=R.getDerivedStateFromProps&&(h.O==h.state&&(h.O=g({},h.O)),g(h.O,R.getDerivedStateFromProps($,h.O))),f=h.props,k=h.state,h._=r,p)S&&null==R.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),S&&null!=h.componentDidMount&&h.T.push(h.componentDidMount);else{if(S&&null==R.getDerivedStateFromProps&&$!==f&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps($,C),!h.$&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate($,h.O,C)||r._==t._){for(r._!=t._&&(h.props=$,h.state=h.O,h.A=!1),r.$=t.$,r.h=t.h,r.h.some(function(e){e&&(e.m=r)}),M=0;M<h.F.length;M++)h.T.push(h.F[M]);h.F=[],h.T.length&&s.push(h);break e}null!=h.componentWillUpdate&&h.componentWillUpdate($,h.O,C),S&&null!=h.componentDidUpdate&&h.T.push(function(){h.componentDidUpdate(f,k,v)})}if(h.context=C,h.props=$,h.I=e,h.$=!1,A=n.j,j=0,S){for(h.state=h.O,h.A=!1,A&&A(r),u=h.render(h.props,h.state,h.context),I=0;I<h.F.length;I++)h.T.push(h.F[I]);h.F=[]}else do{h.A=!1,A&&A(r),u=h.render(h.props,h.state,h.context),h.state=h.O}while(h.A&&++j<25);h.state=h.O,null!=h.getChildContext&&(o=g(g({},o),h.getChildContext())),S&&!p&&null!=h.getSnapshotBeforeUpdate&&(v=h.getSnapshotBeforeUpdate(f,k)),D=u,null!=u&&u.type===y&&null==u.key&&(D=T(u.props.children)),l=_(e,m(D)?D:[D],r,t,o,i,a,s,l,d,c),h.base=r.$,r.M&=-161,h.T.length&&s.push(h),w&&(h.R=h.m=null)}catch(e){if(r._=null,d||null!=a)if(e.then){for(r.M|=d?160:128;l&&8==l.nodeType&&l.nextSibling;)l=l.nextSibling;a[a.indexOf(l)]=null,r.$=l}else for(E=a.length;E--;)b(a[E]);else r.$=t.$,r.h=t.h;n.$(e,r,t)}else null==a&&r._==t._?(r.h=t.h,r.$=t.$):l=r.$=F(t.$,r,t,o,i,a,s,d,c);return(u=n.diffed)&&u(r),128&r.M?void 0:l}function R(e,r,t){for(var o=0;o<t.length;o++)O(t[o],t[++o],t[++o]);n.S&&n.S(r,e),e.some(function(r){try{e=r.T,r.T=[],e.some(function(e){e.call(r)})}catch(e){n.$(e,r._)}})}function T(e){return"object"!=typeof e||null==e||e.v&&e.v>0?e:m(e)?e.map(T):g({},e)}function F(e,t,o,i,a,s,l,d,c){var u,p,f,g,k,v,y,x=o.props,$=t.props,S=t.type;if("svg"==S?a="http://www.w3.org/2000/svg":"math"==S?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),null!=s)for(u=0;u<s.length;u++)if((k=s[u])&&"setAttribute"in k==!!S&&(S?k.localName==S:3==k.nodeType)){e=k,s[u]=null;break}if(null==e){if(null==S)return document.createTextNode($);e=document.createElementNS(a,S,$.is&&$),d&&(n.N&&n.N(t,s),d=!1),s=null}if(null==S)x===$||d&&e.data==$||(e.data=$);else{if(s=s&&r.call(e.childNodes),x=o.props||h,!d&&null!=s)for(x={},u=0;u<e.attributes.length;u++)x[(k=e.attributes[u]).name]=k.value;for(u in x)if(k=x[u],"children"==u);else if("dangerouslySetInnerHTML"==u)f=k;else if(!(u in $)){if("value"==u&&"defaultValue"in $||"checked"==u&&"defaultChecked"in $)continue;I(e,u,null,k,a)}for(u in $)k=$[u],"children"==u?g=k:"dangerouslySetInnerHTML"==u?p=k:"value"==u?v=k:"checked"==u?y=k:d&&"function"!=typeof k||x[u]===k||I(e,u,k,x[u],a);if(p)d||f&&(p.q==f.q||p.q==e.innerHTML)||(e.innerHTML=p.q),t.h=[];else if(f&&(e.innerHTML=""),_("template"==t.type?e.content:e,m(g)?g:[g],t,o,i,"foreignObject"==S?"http://www.w3.org/1999/xhtml":a,s,l,s?s[0]:o.h&&w(o,0),d,c),null!=s)for(u=s.length;u--;)b(s[u]);d||(u="value","progress"==S&&null==v?e.removeAttribute("value"):null!=v&&(v!==e[u]||"progress"==S&&!v||"option"==S&&v!=x[u])&&I(e,u,v,x[u],a),u="checked",null!=y&&y!=e[u]&&I(e,u,y,x[u],a))}return e}function O(e,r,t){try{if("function"==typeof e){var o="function"==typeof e.M;o&&e.M(),o&&null==r||(e.M=e(r))}else e.current=r}catch(e){n.$(e,t)}}function N(e,r,t){var o,i;if(n.unmount&&n.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.$||O(o,null,r)),null!=(o=e.S)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){n.$(e,r)}o.base=o.I=null}if(o=e.h)for(i=0;i<o.length;i++)o[i]&&N(o[i],r,t||"function"!=typeof e.type);t||b(e.$),e.S=e.m=e.$=void 0}function q(e,r,n){return this.constructor(e,n)}function P(e,t,o){var i,a,s;t==document&&(t=document.documentElement),n.m&&n.m(e,t),i=!1?null:t.h,a=[],s=[],E(t,e=t.h=k(y,null,[e]),i||h,h,t.namespaceURI,i?null:t.firstChild?r.call(t.childNodes):null,a,i?i.$:t.firstChild,false,s),R(a,e,s)}function L(e){if(!e)return"";const r=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#039;"),n=new Set(["A","BR","STRONG"]),t=new Set(["href","title"]),o=/^(https?:|mailto:|tel:)/i,i=document.createElement("template");i.innerHTML=e;const a=e=>{switch(e.nodeType){case Node.TEXT_NODE:return r(e.data);case Node.ELEMENT_NODE:{const i=e,s=i.tagName;if(!n.has(s)){let e="";for(const r of Array.from(i.childNodes))e+=a(r);return e}if("BR"===s)return"<br>";if("STRONG"===s){let e="";for(const r of Array.from(i.childNodes))e+=a(r);return`<strong>${e}</strong>`}if("A"===s){let e="",n="";for(const r of Array.from(i.attributes)){const i=r.name.toLowerCase();if(t.has(i))if("href"===i){const n=(r.value||"").trim();o.test(n)&&(e=n)}else"title"===i&&(n=r.value||"")}let s="";for(const e of Array.from(i.childNodes))s+=a(e);const l=' rel="noopener noreferrer"',d=e?` href="${r(e)}"`:"",c=n?` title="${r(n)}"`:"";return d?`<a${d}${c}${' target="_blank"'}${l}>${s}</a>`:s}return""}default:return""}};let s="";for(const e of Array.from(i.content.childNodes))s+=a(e);return s}function H(){return window.crypto&&window.crypto.randomUUID?window.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const r=16*Math.random()|0;return("x"===e?r:3&r|8).toString(16)})}r=p.slice,n={$:function(e,r,n,t){for(var o,i,a;r=r.m;)if((o=r.S)&&!o.m)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),a=o.A),null!=o.componentDidCatch&&(o.componentDidCatch(e,t||{}),a=o.A),a)return o.R=o}catch(r){e=r}throw e}},t=0,x.prototype.setState=function(e,r){var n;n=null!=this.O&&this.O!=this.state?this.O:this.O=g({},this.state),"function"==typeof e&&(e=e(g({},n),this.props)),e&&g(n,e),null!=e&&this._&&(r&&this.F.push(r),S(this))},x.prototype.forceUpdate=function(e){this._&&(this.$=!0,e&&this.T.push(e),S(this))},x.prototype.render=y,o=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,r){return e._.v-r._.v},z.j=0,l=/(PointerCapture)$|Capture$/i,d=0,c=D(!1),u=D(!0),"undefined"!=typeof window&&function(){if(window.self!==window.top)try{window.parent.document}catch(e){}}();const B="https://app.askdona.com/api/embed/v1";async function U(e,r={}){const n=new AbortController,t=setTimeout(()=>n.abort(),3e4);try{const o={"X-Widget-Version":"1.0.0",...r.headers||{}};r.method&&["POST","PUT","PATCH"].includes(r.method)&&(o["Content-Type"]="application/json");const i=await fetch(`${B}${e}`,{...r,signal:n.signal,headers:o});if(clearTimeout(t),!i.ok){const e=await i.json().catch(()=>({message:"Request failed"}));throw new Error(e.message||`HTTP ${i.status}`)}return await i.json()}catch(e){if(clearTimeout(t),"AbortError"===e.name)throw new Error("Request timeout");throw e}}async function J(e,r){try{const n=r?`?language=${encodeURIComponent(r)}`:"";return await U(`/welcome/${e}${n}`)}catch(e){return null}}var V=0;function Z(e,r,t,o,i,a){r||(r={});var s,l,d=r;if("ref"in d)for(l in d={},r)"ref"==l?s=r[l]:d[l]=r[l];var c={type:e,props:d,key:t,ref:s,h:null,m:null,v:0,$:null,S:null,constructor:void 0,_:--V,C:-1,M:0,P:i,L:a};if("function"==typeof e&&(s=e.defaultProps))for(l in s)void 0===d[l]&&(d[l]=s[l]);return n.vnode&&n.vnode(c),c}var Q,W,G,X,Y=0,K=[],ee=n,re=ee.v,ne=ee.j,te=ee.diffed,oe=ee.S,ie=ee.unmount,ae=ee.m;function se(e,r){ee.T&&ee.T(W,e,Y||r),Y=0;var n=W.H||(W.H={m:[],T:[]});return e>=n.m.length&&n.m.push({}),n.m[e]}function le(e){return Y=1,function(e,r,n){var t=se(Q++,2);if(t.t=e,!t.S&&(t.m=[n?n(r):ye(void 0,r),function(e){var r=t.B?t.B[0]:t.m[0],n=t.t(r,e);r!==n&&(t.B=[n,t.m[1]],t.S.setState({}))}],t.S=W,!W.U)){var o=function(e,r,n){if(!t.S.H)return!0;var o=t.S.H.m.filter(function(e){return!!e.S});if(o.every(function(e){return!e.B}))return!i||i.call(this,e,r,n);var a=t.S.props!==e;return o.forEach(function(e){if(e.B){var r=e.m[0];e.m=e.B,e.B=void 0,r!==e.m[0]&&(a=!0)}}),i&&i.call(this,e,r,n)||a};W.U=!0;var i=W.shouldComponentUpdate,a=W.componentWillUpdate;W.componentWillUpdate=function(e,r,n){if(this.$){var t=i;i=void 0,o(e,r,n),i=t}a&&a.call(this,e,r,n)},W.shouldComponentUpdate=o}return t.B||t.m}(ye,e)}function de(e,r){var n=se(Q++,3);!ee.O&&ve(n.H,r)&&(n.m=e,n.u=r,W.H.T.push(n))}function ce(e,r){var n=se(Q++,4);!ee.O&&ve(n.H,r)&&(n.m=e,n.u=r,W.T.push(n))}function ue(e){return Y=5,he(function(){return{current:e}},[])}function he(e,r){var n=se(Q++,7);return ve(n.H,r)&&(n.m=e(),n.H=r,n.T=e),n.m}function pe(e,r){return Y=8,he(function(){return e},r)}function fe(){for(var e;e=K.shift();)if(e.I&&e.H)try{e.H.T.forEach(be),e.H.T.forEach(ke),e.H.T=[]}catch(r){e.H.T=[],ee.$(r,e._)}}ee.v=function(e){W=null,re&&re(e)},ee.m=function(e,r){e&&r.h&&r.h.N&&(e.N=r.h.N),ae&&ae(e,r)},ee.j=function(e){ne&&ne(e),Q=0;var r=(W=e.S).H;r&&(G===W?(r.T=[],W.T=[],r.m.forEach(function(e){e.B&&(e.m=e.B),e.u=e.B=void 0})):(r.T.forEach(be),r.T.forEach(ke),r.T=[],Q=0)),G=W},ee.diffed=function(e){te&&te(e);var r=e.S;r&&r.H&&(r.H.T.length&&(1!==K.push(r)&&X===ee.requestAnimationFrame||((X=ee.requestAnimationFrame)||ge)(fe)),r.H.m.forEach(function(e){e.u&&(e.H=e.u),e.u=void 0})),G=W=null},ee.S=function(e,r){r.some(function(e){try{e.T.forEach(be),e.T=e.T.filter(function(e){return!e.m||ke(e)})}catch(n){r.some(function(e){e.T&&(e.T=[])}),r=[],ee.$(n,e._)}}),oe&&oe(e,r)},ee.unmount=function(e){ie&&ie(e);var r,n=e.S;n&&n.H&&(n.H.m.forEach(function(e){try{be(e)}catch(e){r=e}}),n.H=void 0,r&&ee.$(r,n._))};var me="function"==typeof requestAnimationFrame;function ge(e){var r,n=function(){clearTimeout(t),me&&cancelAnimationFrame(r),setTimeout(e)},t=setTimeout(n,35);me&&(r=requestAnimationFrame(n))}function be(e){var r=W,n=e.S;"function"==typeof n&&(e.S=void 0,n()),W=r}function ke(e){var r=W;e.S=e.m(),W=r}function ve(e,r){return!e||e.length!==r.length||r.some(function(r,n){return r!==e[n]})}function ye(e,r){return"function"==typeof r?r(e):r}let xe,we,$e,Se={data:""},ze=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Se,_e=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ce=/\/\*[^]*?\*\/|  +/g,Me=/\n+/g,Ae=(e,r)=>{let n="",t="",o="";for(let i in e){let a=e[i];"@"==i[0]?"i"==i[1]?n=i+" "+a+";":t+="f"==i[1]?Ae(a,i):i+"{"+Ae(a,"k"==i[1]?"":r)+"}":"object"==typeof a?t+=Ae(a,r?r.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):i):null!=a&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=Ae.p?Ae.p(i,a):i+":"+a+";")}return n+(r&&o?r+"{"+o+"}":o)+t},je={},Ie=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+Ie(e[n]);return r}return e},De=(e,r,n,t,o)=>{let i=Ie(e),a=je[i]||(je[i]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(i));if(!je[a]){let r=i!==e?e:(e=>{let r,n,t=[{}];for(;r=_e.exec(e.replace(Ce,""));)r[4]?t.shift():r[3]?(n=r[3].replace(Me," ").trim(),t.unshift(t[0][n]=t[0][n]||{})):t[0][r[1]]=r[2].replace(Me," ").trim();return t[0]})(e);je[a]=Ae(o?{["@keyframes "+a]:r}:r,n?"":"."+a)}let s=n&&je.g?je.g:null;return n&&(je.g=je[a]),((e,r,n,t)=>{t?r.data=r.data.replace(t,e):-1===r.data.indexOf(e)&&(r.data=n?e+r.data:r.data+e)})(je[a],r,t,s),a};function Ee(e){let r=this||{},n=e.call?e(r.p):e;return De(n.unshift?n.raw?((e,r,n)=>e.reduce((e,t,o)=>{let i=r[o];if(i&&i.call){let e=i(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=r?"."+r:e&&"object"==typeof e?e.props?"":Ae(e,""):!1===e?"":e}return e+t+(null==i?"":i)},""))(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,ze(r.target),r.g,r.o,r.k)}Ee.bind({g:1});let Re=Ee.bind({k:1});function Te(e,r,n,t){Ae.p=r,xe=e,we=n,$e=t}function Fe(e,r){let n=this||{};return function(){let r=arguments;return function t(o,i){let a=Object.assign({},o),s=a.className||t.className;n.p=Object.assign({theme:we&&we()},a),n.o=/ *go\d+/.test(s),a.className=Ee.apply(n,r)+(s?" "+s:"");let l=e;return e[0]&&(l=a.as||e,delete a.as),$e&&l[0]&&$e(a),xe(l,a)}}}const Oe=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ne=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,n)=>n?n.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},qe=(...e)=>e.filter((e,r,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===r).join(" ").trim();var Pe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};const Le=({color:e="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:t,children:o,iconNode:i,class:a="",...s})=>k("svg",{...Pe,width:String(r),height:r,stroke:e,"stroke-width":t?24*Number(n)/Number(r):n,class:["lucide",a].join(" "),...s},[...i.map(([e,r])=>k(e,r)),...M(o)]),He=(e,r)=>{const n=({class:n="",children:t,...o})=>k(Le,{...o,iconNode:r,class:qe(`lucide-${Oe(Ne(e))}`,`lucide-${Oe(e)}`,n)},t);return n.displayName=Ne(e),n},Be=He("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),Ue=He("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Je=He("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),Ve=He("beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]),Ze=He("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),Qe=He("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),We=He("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Ge=He("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),Xe=He("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),Ye=He("circle-question-mark",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Ke=He("clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]),er=He("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),rr=He("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),nr=He("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),tr=He("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),or=He("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),ir=He("funnel",[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]]),ar=He("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),sr=He("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),lr=He("loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]),dr=He("message-circle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]),cr=He("microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]),ur=He("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),hr=He("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]),pr=He("share-2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),fr=He("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]),mr=He("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]),gr=He("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),br=He("thumbs-down",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]]),kr=He("thumbs-up",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]),vr=He("timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),yr=He("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),xr=He("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),wr=He("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function $r(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Sr={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const zr=/[&<>"']/,_r=new RegExp(zr.source,"g"),Cr=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Mr=new RegExp(Cr.source,"g"),Ar={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},jr=e=>Ar[e];function Ir(e,r){if(r){if(zr.test(e))return e.replace(_r,jr)}else if(Cr.test(e))return e.replace(Mr,jr);return e}const Dr=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Er(e){return e.replace(Dr,(e,r)=>"colon"===(r=r.toLowerCase())?":":"#"===r.charAt(0)?"x"===r.charAt(1)?String.fromCharCode(parseInt(r.substring(2),16)):String.fromCharCode(+r.substring(1)):"")}const Rr=/(^|[^\[])\^/g;function Tr(e,r){e="string"==typeof e?e:e.source,r=r||"";const n={replace:(r,t)=>(t=(t=t.source||t).replace(Rr,"$1"),e=e.replace(r,t),n),getRegex:()=>new RegExp(e,r)};return n}const Fr=/[^\w:]/g,Or=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Nr(e,r,n){if(e){let e;try{e=decodeURIComponent(Er(n)).replace(Fr,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}r&&!Or.test(n)&&(n=function(e,r){qr[" "+e]||(Pr.test(e)?qr[" "+e]=e+"/":qr[" "+e]=Jr(e,"/",!0));e=qr[" "+e];const n=-1===e.indexOf(":");return"//"===r.substring(0,2)?n?r:e.replace(Lr,"$1")+r:"/"===r.charAt(0)?n?r:e.replace(Hr,"$1")+r:e+r}(r,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n}const qr={},Pr=/^[^:]+:\/*[^/]*$/,Lr=/^([^:]+:)[\s\S]*$/,Hr=/^([^:]+:\/*[^/]*)[\s\S]*$/;const Br={exec:function(){}};function Ur(e,r){const n=e.replace(/\|/g,(e,r,n)=>{let t=!1,o=r;for(;--o>=0&&"\\"===n[o];)t=!t;return t?"|":" |"}).split(/ \|/);let t=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>r)n.splice(r);else for(;n.length<r;)n.push("");for(;t<n.length;t++)n[t]=n[t].trim().replace(/\\\|/g,"|");return n}function Jr(e,r,n){const t=e.length;if(0===t)return"";let o=0;for(;o<t;){const i=e.charAt(t-o-1);if(i!==r||n){if(i===r||!n)break;o++}else o++}return e.slice(0,t-o)}function Vr(e,r){if(r<1)return"";let n="";for(;r>1;)1&r&&(n+=e),r>>=1,e+=e;return n+e}function Zr(e,r,n,t){const o=r.href,i=r.title?Ir(r.title):null,a=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){t.state.inLink=!0;const e={type:"link",raw:n,href:o,title:i,text:a,tokens:t.inlineTokens(a)};return t.state.inLink=!1,e}return{type:"image",raw:n,href:o,title:i,text:Ir(a)}}class Qr{constructor(e){this.options=e||Sr}space(e){const r=this.rules.block.newline.exec(e);if(r&&r[0].length>0)return{type:"space",raw:r[0]}}code(e){const r=this.rules.block.code.exec(e);if(r){const e=r[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:r[0],codeBlockStyle:"indented",text:this.options.pedantic?e:Jr(e,"\n")}}}fences(e){const r=this.rules.block.fences.exec(e);if(r){const e=r[0],n=function(e,r){const n=e.match(/^(\s+)(?:```)/);if(null===n)return r;const t=n[1];return r.split("\n").map(e=>{const r=e.match(/^\s+/);if(null===r)return e;const[n]=r;return n.length>=t.length?e.slice(t.length):e}).join("\n")}(e,r[3]||"");return{type:"code",raw:e,lang:r[2]?r[2].trim().replace(this.rules.inline.J,"$1"):r[2],text:n}}}heading(e){const r=this.rules.block.heading.exec(e);if(r){let e=r[2].trim();if(/#$/.test(e)){const r=Jr(e,"#");this.options.pedantic?e=r.trim():r&&!/ $/.test(r)||(e=r.trim())}return{type:"heading",raw:r[0],depth:r[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){const r=this.rules.block.hr.exec(e);if(r)return{type:"hr",raw:r[0]}}blockquote(e){const r=this.rules.block.blockquote.exec(e);if(r){const e=r[0].replace(/^ *>[ \t]?/gm,""),n=this.lexer.state.top;this.lexer.state.top=!0;const t=this.lexer.blockTokens(e);return this.lexer.state.top=n,{type:"blockquote",raw:r[0],tokens:t,text:e}}}list(e){let r=this.rules.block.list.exec(e);if(r){let n,t,o,i,a,s,l,d,c,u,h,p,f=r[1].trim();const m=f.length>1,g={type:"list",raw:"",ordered:m,start:m?+f.slice(0,-1):"",loose:!1,items:[]};f=m?`\\d{1,9}\\${f.slice(-1)}`:`\\${f}`,this.options.pedantic&&(f=m?f:"[*+-]");const b=new RegExp(`^( {0,3}${f})((?:[\t ][^\\n]*)?(?:\\n|$))`);for(;e&&(p=!1,r=b.exec(e))&&!this.rules.block.hr.test(e);){if(n=r[0],e=e.substring(n.length),d=r[2].split("\n",1)[0].replace(/^\t+/,e=>" ".repeat(3*e.length)),c=e.split("\n",1)[0],this.options.pedantic?(i=2,h=d.trimLeft()):(i=r[2].search(/[^ ]/),i=i>4?1:i,h=d.slice(i),i+=r[1].length),s=!1,!d&&/^ *$/.test(c)&&(n+=c+"\n",e=e.substring(c.length+1),p=!0),!p){const r=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),t=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),o=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),a=new RegExp(`^ {0,${Math.min(3,i-1)}}#`);for(;e&&(u=e.split("\n",1)[0],c=u,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!o.test(c))&&!a.test(c)&&!r.test(c)&&!t.test(e);){if(c.search(/[^ ]/)>=i||!c.trim())h+="\n"+c.slice(i);else{if(s)break;if(d.search(/[^ ]/)>=4)break;if(o.test(d))break;if(a.test(d))break;if(t.test(d))break;h+="\n"+c}s||c.trim()||(s=!0),n+=u+"\n",e=e.substring(u.length+1),d=c.slice(i)}}g.loose||(l?g.loose=!0:/\n *\n *$/.test(n)&&(l=!0)),this.options.gfm&&(t=/^\[[ xX]\] /.exec(h),t&&(o="[ ] "!==t[0],h=h.replace(/^\[[ xX]\] +/,""))),g.items.push({type:"list_item",raw:n,task:!!t,checked:o,loose:!1,text:h}),g.raw+=n}g.items[g.items.length-1].raw=n.trimRight(),g.items[g.items.length-1].text=h.trimRight(),g.raw=g.raw.trimRight();const k=g.items.length;for(a=0;a<k;a++)if(this.lexer.state.top=!1,g.items[a].tokens=this.lexer.blockTokens(g.items[a].text,[]),!g.loose){const e=g.items[a].tokens.filter(e=>"space"===e.type),r=e.length>0&&e.some(e=>/\n.*\n/.test(e.raw));g.loose=r}if(g.loose)for(a=0;a<k;a++)g.items[a].loose=!0;return g}}html(e){const r=this.rules.block.html.exec(e);if(r){const e={type:"html",raw:r[0],pre:!this.options.sanitizer&&("pre"===r[1]||"script"===r[1]||"style"===r[1]),text:r[0]};if(this.options.sanitize){const n=this.options.sanitizer?this.options.sanitizer(r[0]):Ir(r[0]);e.type="paragraph",e.text=n,e.tokens=this.lexer.inline(n)}return e}}def(e){const r=this.rules.block.def.exec(e);if(r){const e=r[1].toLowerCase().replace(/\s+/g," "),n=r[2]?r[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.J,"$1"):"",t=r[3]?r[3].substring(1,r[3].length-1).replace(this.rules.inline.J,"$1"):r[3];return{type:"def",tag:e,raw:r[0],href:n,title:t}}}table(e){const r=this.rules.block.table.exec(e);if(r){const e={type:"table",header:Ur(r[1]).map(e=>({text:e})),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:r[3]&&r[3].trim()?r[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=r[0];let n,t,o,i,a=e.align.length;for(n=0;n<a;n++)/^ *-+: *$/.test(e.align[n])?e.align[n]="right":/^ *:-+: *$/.test(e.align[n])?e.align[n]="center":/^ *:-+ *$/.test(e.align[n])?e.align[n]="left":e.align[n]=null;for(a=e.rows.length,n=0;n<a;n++)e.rows[n]=Ur(e.rows[n],e.header.length).map(e=>({text:e}));for(a=e.header.length,t=0;t<a;t++)e.header[t].tokens=this.lexer.inline(e.header[t].text);for(a=e.rows.length,t=0;t<a;t++)for(i=e.rows[t],o=0;o<i.length;o++)i[o].tokens=this.lexer.inline(i[o].text);return e}}}lheading(e){const r=this.rules.block.lheading.exec(e);if(r)return{type:"heading",raw:r[0],depth:"="===r[2].charAt(0)?1:2,text:r[1],tokens:this.lexer.inline(r[1])}}paragraph(e){const r=this.rules.block.paragraph.exec(e);if(r){const e="\n"===r[1].charAt(r[1].length-1)?r[1].slice(0,-1):r[1];return{type:"paragraph",raw:r[0],text:e,tokens:this.lexer.inline(e)}}}text(e){const r=this.rules.block.text.exec(e);if(r)return{type:"text",raw:r[0],text:r[0],tokens:this.lexer.inline(r[0])}}escape(e){const r=this.rules.inline.escape.exec(e);if(r)return{type:"escape",raw:r[0],text:Ir(r[1])}}tag(e){const r=this.rules.inline.tag.exec(e);if(r)return!this.lexer.state.inLink&&/^<a /i.test(r[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(r[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):Ir(r[0]):r[0]}}link(e){const r=this.rules.inline.link.exec(e);if(r){const e=r[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const r=Jr(e.slice(0,-1),"\\");if((e.length-r.length)%2==0)return}else{const e=function(e,r){if(-1===e.indexOf(r[1]))return-1;const n=e.length;let t=0,o=0;for(;o<n;o++)if("\\"===e[o])o++;else if(e[o]===r[0])t++;else if(e[o]===r[1]&&(t--,t<0))return o;return-1}(r[2],"()");if(e>-1){const n=(0===r[0].indexOf("!")?5:4)+r[1].length+e;r[2]=r[2].substring(0,e),r[0]=r[0].substring(0,n).trim(),r[3]=""}}let n=r[2],t="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],t=e[3])}else t=r[3]?r[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),Zr(r,{href:n?n.replace(this.rules.inline.J,"$1"):n,title:t?t.replace(this.rules.inline.J,"$1"):t},r[0],this.lexer)}}reflink(e,r){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=r[e.toLowerCase()],!e){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return Zr(n,e,n[0],this.lexer)}}emStrong(e,r,n=""){let t=this.rules.inline.emStrong.lDelim.exec(e);if(!t)return;if(t[3]&&n.match(/[\p{L}\p{N}]/u))return;const o=t[1]||t[2]||"";if(!o||o&&(""===n||this.rules.inline.punctuation.exec(n))){const n=t[0].length-1;let o,i,a=n,s=0;const l="*"===t[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,r=r.slice(-1*e.length+n);null!=(t=l.exec(r));){if(o=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!o)continue;if(i=o.length,t[3]||t[4]){a+=i;continue}if((t[5]||t[6])&&n%3&&!((n+i)%3)){s+=i;continue}if(a-=i,a>0)continue;i=Math.min(i,i+a+s);const r=e.slice(0,n+t.index+(t[0].length-o.length)+i);if(Math.min(n,i)%2){const e=r.slice(1,-1);return{type:"em",raw:r,text:e,tokens:this.lexer.inlineTokens(e)}}const l=r.slice(2,-2);return{type:"strong",raw:r,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){const r=this.rules.inline.code.exec(e);if(r){let e=r[2].replace(/\n/g," ");const n=/[^ ]/.test(e),t=/^ /.test(e)&&/ $/.test(e);return n&&t&&(e=e.substring(1,e.length-1)),e=Ir(e,!0),{type:"codespan",raw:r[0],text:e}}}br(e){const r=this.rules.inline.br.exec(e);if(r)return{type:"br",raw:r[0]}}del(e){const r=this.rules.inline.del.exec(e);if(r)return{type:"del",raw:r[0],text:r[2],tokens:this.lexer.inlineTokens(r[2])}}autolink(e,r){const n=this.rules.inline.autolink.exec(e);if(n){let e,t;return"@"===n[2]?(e=Ir(this.options.mangle?r(n[1]):n[1]),t="mailto:"+e):(e=Ir(n[1]),t=e),{type:"link",raw:n[0],text:e,href:t,tokens:[{type:"text",raw:e,text:e}]}}}url(e,r){let n;if(n=this.rules.inline.url.exec(e)){let e,t;if("@"===n[2])e=Ir(this.options.mangle?r(n[0]):n[0]),t="mailto:"+e;else{let r;do{r=n[0],n[0]=this.rules.inline.V.exec(n[0])[0]}while(r!==n[0]);e=Ir(n[0]),t="www."===n[1]?"http://"+n[0]:n[0]}return{type:"link",raw:n[0],text:e,href:t,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,r){const n=this.rules.inline.text.exec(e);if(n){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):Ir(n[0]):n[0]:Ir(this.options.smartypants?r(n[0]):n[0]),{type:"text",raw:n[0],text:e}}}}const Wr={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Br,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Z:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,W:/(?!\s*\])(?:\\.|[^\[\]\\])+/,G:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};Wr.def=Tr(Wr.def).replace("label",Wr.W).replace("title",Wr.G).getRegex(),Wr.bullet=/(?:[*+-]|\d{1,9}[.)])/,Wr.listItemStart=Tr(/^( *)(bull) */).replace("bull",Wr.bullet).getRegex(),Wr.list=Tr(Wr.list).replace(/bull/g,Wr.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Wr.def.source+")").getRegex(),Wr.X="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Wr.Y=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Wr.html=Tr(Wr.html,"i").replace("comment",Wr.Y).replace("tag",Wr.X).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Wr.paragraph=Tr(Wr.Z).replace("hr",Wr.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Wr.X).getRegex(),Wr.blockquote=Tr(Wr.blockquote).replace("paragraph",Wr.paragraph).getRegex(),Wr.normal={...Wr},Wr.gfm={...Wr.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},Wr.gfm.table=Tr(Wr.gfm.table).replace("hr",Wr.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Wr.X).getRegex(),Wr.gfm.paragraph=Tr(Wr.Z).replace("hr",Wr.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",Wr.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Wr.X).getRegex(),Wr.pedantic={...Wr.normal,html:Tr("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Wr.Y).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Br,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Tr(Wr.normal.Z).replace("hr",Wr.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Wr.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const Gr={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Br,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Br,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function Xr(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Yr(e){let r,n,t="";const o=e.length;for(r=0;r<o;r++)n=e.charCodeAt(r),Math.random()>.5&&(n="x"+n.toString(16)),t+="&#"+n+";";return t}Gr.K="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",Gr.punctuation=Tr(Gr.punctuation).replace(/punctuation/g,Gr.K).getRegex(),Gr.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,Gr.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,Gr.Y=Tr(Wr.Y).replace("(?:--\x3e|$)","--\x3e").getRegex(),Gr.emStrong.lDelim=Tr(Gr.emStrong.lDelim).replace(/punct/g,Gr.K).getRegex(),Gr.emStrong.rDelimAst=Tr(Gr.emStrong.rDelimAst,"g").replace(/punct/g,Gr.K).getRegex(),Gr.emStrong.rDelimUnd=Tr(Gr.emStrong.rDelimUnd,"g").replace(/punct/g,Gr.K).getRegex(),Gr.J=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,Gr.ee=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,Gr.re=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,Gr.autolink=Tr(Gr.autolink).replace("scheme",Gr.ee).replace("email",Gr.re).getRegex(),Gr.ne=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,Gr.tag=Tr(Gr.tag).replace("comment",Gr.Y).replace("attribute",Gr.ne).getRegex(),Gr.W=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Gr.te=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,Gr.G=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,Gr.link=Tr(Gr.link).replace("label",Gr.W).replace("href",Gr.te).replace("title",Gr.G).getRegex(),Gr.reflink=Tr(Gr.reflink).replace("label",Gr.W).replace("ref",Wr.W).getRegex(),Gr.nolink=Tr(Gr.nolink).replace("ref",Wr.W).getRegex(),Gr.reflinkSearch=Tr(Gr.reflinkSearch,"g").replace("reflink",Gr.reflink).replace("nolink",Gr.nolink).getRegex(),Gr.normal={...Gr},Gr.pedantic={...Gr.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Tr(/^!?\[(label)\]\((.*?)\)/).replace("label",Gr.W).getRegex(),reflink:Tr(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Gr.W).getRegex()},Gr.gfm={...Gr.normal,escape:Tr(Gr.escape).replace("])","~|])").getRegex(),oe:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,V:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Gr.gfm.url=Tr(Gr.gfm.url,"i").replace("email",Gr.gfm.oe).getRegex(),Gr.breaks={...Gr.gfm,br:Tr(Gr.br).replace("{2,}","*").getRegex(),text:Tr(Gr.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class Kr{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Sr,this.options.tokenizer=this.options.tokenizer||new Qr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const r={block:Wr.normal,inline:Gr.normal};this.options.pedantic?(r.block=Wr.pedantic,r.inline=Gr.pedantic):this.options.gfm&&(r.block=Wr.gfm,this.options.breaks?r.inline=Gr.breaks:r.inline=Gr.gfm),this.tokenizer.rules=r}static get rules(){return{block:Wr,inline:Gr}}static lex(e,r){return new Kr(r).lex(e)}static lexInline(e,r){return new Kr(r).inlineTokens(e)}lex(e){let r;for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);r=this.inlineQueue.shift();)this.inlineTokens(r.src,r.tokens);return this.tokens}blockTokens(e,r=[]){let n,t,o,i;for(e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,(e,r,n)=>r+"    ".repeat(n.length));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(t=>!!(n=t.call({lexer:this},e,r))&&(e=e.substring(n.raw.length),r.push(n),!0))))if(n=this.tokenizer.space(e))e=e.substring(n.raw.length),1===n.raw.length&&r.length>0?r[r.length-1].raw+="\n":r.push(n);else if(n=this.tokenizer.code(e))e=e.substring(n.raw.length),t=r[r.length-1],!t||"paragraph"!==t.type&&"text"!==t.type?r.push(n):(t.raw+="\n"+n.raw,t.text+="\n"+n.text,this.inlineQueue[this.inlineQueue.length-1].src=t.text);else if(n=this.tokenizer.fences(e))e=e.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.heading(e))e=e.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.hr(e))e=e.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.blockquote(e))e=e.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.list(e))e=e.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.html(e))e=e.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.def(e))e=e.substring(n.raw.length),t=r[r.length-1],!t||"paragraph"!==t.type&&"text"!==t.type?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(t.raw+="\n"+n.raw,t.text+="\n"+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=t.text);else if(n=this.tokenizer.table(e))e=e.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.lheading(e))e=e.substring(n.raw.length),r.push(n);else{if(o=e,this.options.extensions&&this.options.extensions.startBlock){let r=1/0;const n=e.slice(1);let t;this.options.extensions.startBlock.forEach(function(e){t=e.call({lexer:this},n),"number"==typeof t&&t>=0&&(r=Math.min(r,t))}),r<1/0&&r>=0&&(o=e.substring(0,r+1))}if(this.state.top&&(n=this.tokenizer.paragraph(o)))t=r[r.length-1],i&&"paragraph"===t.type?(t.raw+="\n"+n.raw,t.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=t.text):r.push(n),i=o.length!==e.length,e=e.substring(n.raw.length);else if(n=this.tokenizer.text(e))e=e.substring(n.raw.length),t=r[r.length-1],t&&"text"===t.type?(t.raw+="\n"+n.raw,t.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=t.text):r.push(n);else if(e){const r="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw new Error(r)}}return this.state.top=!0,r}inline(e,r=[]){return this.inlineQueue.push({src:e,tokens:r}),r}inlineTokens(e,r=[]){let n,t,o,i,a,s,l=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(i=this.tokenizer.rules.inline.reflinkSearch.exec(l));)e.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,i.index)+"["+Vr("a",i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(i=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,i.index)+"["+Vr("a",i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(i=this.tokenizer.rules.inline.escapedEmSt.exec(l));)l=l.slice(0,i.index+i[0].length-2)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(a||(s=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(t=>!!(n=t.call({lexer:this},e,r))&&(e=e.substring(n.raw.length),r.push(n),!0))))if(n=this.tokenizer.escape(e))e=e.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.tag(e))e=e.substring(n.raw.length),t=r[r.length-1],t&&"text"===n.type&&"text"===t.type?(t.raw+=n.raw,t.text+=n.text):r.push(n);else if(n=this.tokenizer.link(e))e=e.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(n.raw.length),t=r[r.length-1],t&&"text"===n.type&&"text"===t.type?(t.raw+=n.raw,t.text+=n.text):r.push(n);else if(n=this.tokenizer.emStrong(e,l,s))e=e.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.codespan(e))e=e.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.br(e))e=e.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.del(e))e=e.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.autolink(e,Yr))e=e.substring(n.raw.length),r.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(e,Yr))){if(o=e,this.options.extensions&&this.options.extensions.startInline){let r=1/0;const n=e.slice(1);let t;this.options.extensions.startInline.forEach(function(e){t=e.call({lexer:this},n),"number"==typeof t&&t>=0&&(r=Math.min(r,t))}),r<1/0&&r>=0&&(o=e.substring(0,r+1))}if(n=this.tokenizer.inlineText(o,Xr))e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(s=n.raw.slice(-1)),a=!0,t=r[r.length-1],t&&"text"===t.type?(t.raw+=n.raw,t.text+=n.text):r.push(n);else if(e){const r="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw new Error(r)}}else e=e.substring(n.raw.length),r.push(n);return r}}class en{constructor(e){this.options=e||Sr}code(e,r,n){const t=(r||"").match(/\S*/)[0];if(this.options.highlight){const r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return e=e.replace(/\n$/,"")+"\n",t?'<pre><code class="'+this.options.langPrefix+Ir(t)+'">'+(n?e:Ir(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:Ir(e,!0))+"</code></pre>\n"}blockquote(e){return`<blockquote>\n${e}</blockquote>\n`}html(e){return e}heading(e,r,n,t){if(this.options.headerIds){return`<h${r} id="${this.options.headerPrefix+t.slug(n)}">${e}</h${r}>\n`}return`<h${r}>${e}</h${r}>\n`}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,r,n){const t=r?"ol":"ul";return"<"+t+(r&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+t+">\n"}listitem(e){return`<li>${e}</li>\n`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>\n`}table(e,r){return r&&(r=`<tbody>${r}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+r+"</table>\n"}tablerow(e){return`<tr>\n${e}</tr>\n`}tablecell(e,r){const n=r.header?"th":"td";return(r.align?`<${n} align="${r.align}">`:`<${n}>`)+e+`</${n}>\n`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,r,n){if(null===(e=Nr(this.options.sanitize,this.options.baseUrl,e)))return n;let t='<a href="'+e+'"';return r&&(t+=' title="'+r+'"'),t+=">"+n+"</a>",t}image(e,r,n){if(null===(e=Nr(this.options.sanitize,this.options.baseUrl,e)))return n;let t=`<img src="${e}" alt="${n}"`;return r&&(t+=` title="${r}"`),t+=this.options.xhtml?"/>":">",t}text(e){return e}}class rn{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,r,n){return""+n}image(e,r,n){return""+n}br(){return""}}class nn{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,r){let n=e,t=0;if(this.seen.hasOwnProperty(n)){t=this.seen[e];do{t++,n=e+"-"+t}while(this.seen.hasOwnProperty(n))}return r||(this.seen[e]=t,this.seen[n]=0),n}slug(e,r={}){const n=this.serialize(e);return this.getNextSafeSlug(n,r.dryrun)}}class tn{constructor(e){this.options=e||Sr,this.options.renderer=this.options.renderer||new en,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new rn,this.slugger=new nn}static parse(e,r){return new tn(r).parse(e)}static parseInline(e,r){return new tn(r).parseInline(e)}parse(e,r=!0){let n,t,o,i,a,s,l,d,c,u,h,p,f,m,g,b,k,v,y,x="";const w=e.length;for(n=0;n<w;n++)if(u=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]&&(y=this.options.extensions.renderers[u.type].call({parser:this},u),!1!==y||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)))x+=y||"";else switch(u.type){case"space":continue;case"hr":x+=this.renderer.hr();continue;case"heading":x+=this.renderer.heading(this.parseInline(u.tokens),u.depth,Er(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":x+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(d="",l="",i=u.header.length,t=0;t<i;t++)l+=this.renderer.tablecell(this.parseInline(u.header[t].tokens),{header:!0,align:u.align[t]});for(d+=this.renderer.tablerow(l),c="",i=u.rows.length,t=0;t<i;t++){for(s=u.rows[t],l="",a=s.length,o=0;o<a;o++)l+=this.renderer.tablecell(this.parseInline(s[o].tokens),{header:!1,align:u.align[o]});c+=this.renderer.tablerow(l)}x+=this.renderer.table(d,c);continue;case"blockquote":c=this.parse(u.tokens),x+=this.renderer.blockquote(c);continue;case"list":for(h=u.ordered,p=u.start,f=u.loose,i=u.items.length,c="",t=0;t<i;t++)g=u.items[t],b=g.checked,k=g.task,m="",g.task&&(v=this.renderer.checkbox(b),f?g.tokens.length>0&&"paragraph"===g.tokens[0].type?(g.tokens[0].text=v+" "+g.tokens[0].text,g.tokens[0].tokens&&g.tokens[0].tokens.length>0&&"text"===g.tokens[0].tokens[0].type&&(g.tokens[0].tokens[0].text=v+" "+g.tokens[0].tokens[0].text)):g.tokens.unshift({type:"text",text:v}):m+=v),m+=this.parse(g.tokens,f),c+=this.renderer.listitem(m,k,b);x+=this.renderer.list(c,h,p);continue;case"html":x+=this.renderer.html(u.text);continue;case"paragraph":x+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(c=u.tokens?this.parseInline(u.tokens):u.text;n+1<w&&"text"===e[n+1].type;)u=e[++n],c+="\n"+(u.tokens?this.parseInline(u.tokens):u.text);x+=r?this.renderer.paragraph(c):c;continue;default:{const e='Token with "'+u.type+'" type was not found.';if(this.options.silent)return;throw new Error(e)}}return x}parseInline(e,r){r=r||this.renderer;let n,t,o,i="";const a=e.length;for(n=0;n<a;n++)if(t=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[t.type]&&(o=this.options.extensions.renderers[t.type].call({parser:this},t),!1!==o||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(t.type)))i+=o||"";else switch(t.type){case"escape":case"text":i+=r.text(t.text);break;case"html":i+=r.html(t.text);break;case"link":i+=r.link(t.href,t.title,this.parseInline(t.tokens,r));break;case"image":i+=r.image(t.href,t.title,t.text);break;case"strong":i+=r.strong(this.parseInline(t.tokens,r));break;case"em":i+=r.em(this.parseInline(t.tokens,r));break;case"codespan":i+=r.codespan(t.text);break;case"br":i+=r.br();break;case"del":i+=r.del(this.parseInline(t.tokens,r));break;default:{const e='Token with "'+t.type+'" type was not found.';if(this.options.silent)return;throw new Error(e)}}return i}}class on{constructor(e){this.options=e||Sr}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(e){return e}postprocess(e){return e}}function an(e,r){return(n,t,o)=>{"function"==typeof t&&(o=t,t=null);const i={...t},a=function(e,r,n){return t=>{if(t.message+="\nPlease report this to https://github.com/markedjs/marked.",e){const e="<p>An error occurred:</p><pre>"+Ir(t.message+"",!0)+"</pre>";return r?Promise.resolve(e):n?void n(null,e):e}if(r)return Promise.reject(t);if(!n)throw t;n(t)}}((t={...sn.defaults,...i}).silent,t.async,o);if(null==n)return a(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof n)return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(function(e){e&&e.sanitize&&e.silent}(t),t.hooks&&(t.hooks.options=t),o){const i=t.highlight;let s;try{t.hooks&&(n=t.hooks.preprocess(n)),s=e(n,t)}catch(e){return a(e)}const l=function(e){let n;if(!e)try{t.walkTokens&&sn.walkTokens(s,t.walkTokens),n=r(s,t),t.hooks&&(n=t.hooks.postprocess(n))}catch(r){e=r}return t.highlight=i,e?a(e):o(null,n)};if(!i||i.length<3)return l();if(delete t.highlight,!s.length)return l();let d=0;return sn.walkTokens(s,function(e){"code"===e.type&&(d++,setTimeout(()=>{i(e.text,e.lang,function(r,n){if(r)return l(r);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),d--,0===d&&l()})},0))}),void(0===d&&l())}if(t.async)return Promise.resolve(t.hooks?t.hooks.preprocess(n):n).then(r=>e(r,t)).then(e=>t.walkTokens?Promise.all(sn.walkTokens(e,t.walkTokens)).then(()=>e):e).then(e=>r(e,t)).then(e=>t.hooks?t.hooks.postprocess(e):e).catch(a);try{t.hooks&&(n=t.hooks.preprocess(n));const o=e(n,t);t.walkTokens&&sn.walkTokens(o,t.walkTokens);let i=r(o,t);return t.hooks&&(i=t.hooks.postprocess(i)),i}catch(e){return a(e)}}}function sn(e,r,n){return an(Kr.lex,tn.parse)(e,r,n)}function ln({headers:e,data:r}){return Z(_n,{children:Z("table",{children:[Z("thead",{children:Z("tr",{children:e.map((e,r)=>Z("th",{children:e},r))})}),Z("tbody",{children:r.map((e,r)=>Z("tr",{children:e.map((e,r)=>Z("td",{children:e},r))},r))})]})})}function dn({code:e,language:r}){const[n,t]=le(!1);return Z(Cn,{children:[Z(Mn,{children:[Z(An,{children:r||"code"}),Z(jn,{onClick:async()=>{try{await navigator.clipboard.writeText(e),t(!0),setTimeout(()=>t(!1),2e3)}catch(r){const n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select();try{document.execCommand("copy")}catch(e){}document.body.removeChild(n),t(!0),setTimeout(()=>t(!1),2e3)}},title:"Copy code",children:Z(n?Ze:rr,{size:14})})]}),Z(In,{children:Z("code",{children:e})})]})}function cn({isOpen:e,onClose:r,onSubmit:n,rating:t,config:o}){const[i,a]=le(""),[s,l]=le(!1);if(!e)return null;const d="THUMBS_UP"===t,c="ja"===o.language?d?"何が良かったですか？":"何が改善できますか？":d?"What was helpful?":"What could be improved?",u="ja"===o.language?d?"例：詳しい説明で理解しやすかった":"例：もう少し具体的な例が欲しい":d?"e.g., Clear and detailed explanation":"e.g., Could use more specific examples";return Z(On,{onClick:r,children:Z(Nn,{onClick:e=>e.stopPropagation(),children:[Z(qn,{children:[Z(Pn,{positive:d,children:Z(d?kr:br,{size:16})}),Z(Ln,{children:c})]}),Z(Hn,{children:Z(Bn,{value:i,onChange:e=>a(e.target.value),placeholder:u,rows:3})}),Z(Un,{children:[Z(Jn,{onClick:()=>{n(""),r()},children:"ja"===o.language?"スキップ":"Skip"}),Z(Vn,{onClick:()=>{l(!0);try{n(i),r()}catch(e){}finally{l(!1)}},disabled:s,children:s?"ja"===o.language?"送信中...":"Sending...":"ja"===o.language?"送信":"Send"})]})]})})}function un({messageId:e,sessionId:r,feedback:n,onFeedbackSubmit:t,config:o}){const[i,a]=le(!1),[s,l]=le(null),[d,c]=le(n||null),u=e=>{d||(l(e),a(!0))};return Z(y,{children:[Z(Dn,{children:[Z(En,{children:"ja"===o.language?"この回答は役に立ちましたか？ 更なる改善のため、ぜひフィードバックをお願いします。":"Was this answer helpful? For further improvements, please share your feedback."}),Z(Rn,{children:[Z(Tn,{onClick:()=>u("THUMBS_UP"),active:"THUMBS_UP"===(null==d?void 0:d.rating),disabled:!!d,positive:!0,title:"ja"===o.language?"役に立った":"Helpful",children:Z(kr,{size:14})}),Z(Tn,{onClick:()=>u("THUMBS_DOWN"),active:"THUMBS_DOWN"===(null==d?void 0:d.rating),disabled:!!d,positive:!1,title:"ja"===o.language?"役に立たなかった":"Not helpful",children:Z(br,{size:14})})]}),d&&Z(Fn,{children:"ja"===o.language?"フィードバックをありがとうございます！":"Thank you for your feedback!"})]}),Z(cn,{isOpen:i,onClose:()=>{a(!1),l(null)},onSubmit:r=>{if(!s)return;const n={rating:s,content:r||void 0,submittedAt:(new Date).toISOString(),isSubmitted:!0};c(n),t(e,s,r)},rating:s,config:o})]})}function hn(e,r,n=0){try{const t=window.katex;if(t&&"function"==typeof t.renderToString){return Z("span",{dangerouslySetInnerHTML:{q:t.renderToString(e,{displayMode:r,throwOnError:!1,strict:"ignore"})}},`k${n}`)}}catch(e){}return Z("code",{className:"inline-code",children:e},`k${n}`)}function pn(e,r,n){const t=[],o=/(\$\$[\s\S]+?\$\$|\\\([\s\S]+?\\\)|\$(?!\s)([^$]+?)\$(?!\w)|\[(\d+(?:,\s*\d+)*)\])/g;let i,a=0,s=0;for(;null!==(i=o.exec(e));){i.index>a&&t.push(e.slice(a,i.index));const l=i[0];if(l.startsWith("$$")){const e=l.slice(2,-2).trim();t.push(Z("div",{className:"katex-block",children:hn(e,!0,`${n}-mb-${s}`)},`${n}-mb-${s++}`))}else if(l.startsWith("\\(")){const e=l.slice(2,-2).trim();t.push(Z("span",{className:"katex-inline",children:hn(e,!1,`${n}-mi-${s}`)},`${n}-mi-${s++}`))}else if(l.startsWith("$")){const e=l.slice(1,-1).trim();t.push(Z("span",{className:"katex-inline",children:hn(e,!1,`${n}-ms-${s}`)},`${n}-ms-${s++}`))}else if(l.startsWith("[")){const e=l.slice(1,-1).split(/,\s*/).map(e=>parseInt(e,10)).filter(e=>!isNaN(e)),o=[];e.forEach((t,i)=>{const a=r[t],l=(null==a?void 0:a.file_name)||(null==a?void 0:a.url)||`#${t}`,d=null==a?void 0:a.url,c="citation"+(d?" link":" disabled");d?o.push(Z("a",{className:c,href:d,target:"_blank",rel:"noopener noreferrer",title:l,children:t},`${n}-c${s++}`)):o.push(Z("span",{className:c,title:l,children:t},`${n}-c${s++}`)),i<e.length-1&&o.push(", ")}),t.push(Z(y,{children:o}))}a=o.lastIndex}return a<e.length&&t.push(e.slice(a)),t.length>0?t:[e]}function fn(e=[],r,n){const t=[];return e.forEach((e,o)=>{const i=`${n}-${o}`;switch(e.type){case"strong":t.push(Z("strong",{children:fn(e.tokens||[],r,`${i}-s`)},i));break;case"em":t.push(Z("em",{children:fn(e.tokens||[],r,`${i}-e`)},i));break;case"codespan":t.push(Z("code",{className:"inline-code",children:e.text},i));break;case"br":t.push(Z("br",{},i));break;case"link":t.push(Z("a",{href:e.href||e.text,target:"_blank",rel:"noopener noreferrer",className:"link",children:fn(e.tokens||[{type:"text",text:e.text}],r,`${i}-l`)},i));break;case"image":t.push(Z("img",{src:e.href,alt:e.text||"",loading:"lazy",style:{maxWidth:"100%"}},i));break;default:pn(e.text||e.raw||"",r,i).forEach(e=>t.push(e))}}),t}function mn(e=[],r,n=0){if(!e||n>16)return[];const t=[];return e.forEach((e,o)=>{const i=`blk-${n}-${o}`;switch(e.type){case"space":break;case"heading":{const n=`h${e.depth}`;t.push(Z(n,{children:fn(e.tokens||[{type:"text",text:e.text}],r,`${i}-h`)},i));break}case"paragraph":{const n=(e.raw||"").trim().match(/^\$\$([\s\S]+)\$\$/);n?t.push(Z("div",{className:"katex-block",children:hn(n[1].trim(),!0,`${i}-mb`)},i)):t.push(Z("p",{children:fn(e.tokens||[{type:"text",text:e.text}],r,`${i}-p`)},i));break}case"code":t.push(Z(dn,{code:e.text||"",language:e.lang||""},i));break;case"blockquote":t.push(Z("blockquote",{children:mn(e.tokens||[],r,n+1)},i));break;case"list":{const o=(e.items||[]).map((e,t)=>{const o=`${i}-li-${t}`,a=mn(e.tokens||[],r,n+1);return e.task&&a.unshift(Z("input",{type:"checkbox",checked:Boolean(e.checked),readOnly:!0,style:{marginRight:"0.5rem"}},`${o}-chk`)),Z("li",{children:a},o)});t.push(e.ordered?Z("ol",{start:e.start||1,children:o},i):Z("ul",{children:o},i));break}case"table":{const n=(e.header||[]).map((e,n)=>Z("span",{children:fn(e.tokens||[{type:"text",text:e.text}],r,`${i}-th-${n}`)},`${i}-th-${n}`)),o=(e.rows||[]).map((e,n)=>e.map((e,t)=>Z("span",{children:fn(e.tokens||[{type:"text",text:e.text}],r,`${i}-td-${n}-${t}`)},`${i}-td-${n}-${t}`)));t.push(Z(ln,{headers:n,data:o},i));break}case"hr":t.push(Z("hr",{},i));break;case"html":t.push(Z("p",{children:pn(e.text||e.raw||"",r,`${i}-html`)},i));break;default:t.push(Z("p",{children:fn(e.tokens||[{type:"text",text:e.text||e.raw||""}],r,`${i}-d`)},i))}}),t}function gn(e,r=!1,n){if(!e)return[];const t=e.replace(/\u0000/g,"").replace(/[\u2028\u2029]/g,"\n").replace(/^[\u00A0\u2000-\u200B\u3000]+/gm," "),o=sn.lexer(t),i=function(e){const r={};return(e||[]).forEach((e,n)=>{r[n+1]=e}),r}(n);return mn(o,i,0)}function bn({messages:e,isLoading:r,streamingContent:n,config:t,sessionId:o,onFeedbackSubmit:i}){const a=ue(null),s=null==t?void 0:t.debug;return Z(kn,{children:[e.map((e,r)=>{var n,a,l,d,c,u;return s&&e.role,"assistant"!==e.role||e.content?Z(y,{children:[Z(vn,{isUser:"user"===e.role,children:"user"===e.role?Z(yn,{children:[Z(xn,{children:e.content}),("boost"===(null===(n=e.metadata)||void 0===n?void 0:n.mode)||"fast"===(null===(a=e.metadata)||void 0===a?void 0:a.mode))&&Z(Zn,{variant:e.metadata.mode,children:["fast"===e.metadata.mode?Z(wr,{size:12}):Z(vr,{size:12}),Z("span",{children:"fast"===e.metadata.mode?"Fast":"Boost"})]})]}):Z(y,{children:Z(wn,{children:Z($n,{children:[Z(Sn,{children:gn(e.content||"",!1,null===(l=e.metadata)||void 0===l?void 0:l.docMetadata)}),("boost"===(null===(d=e.metadata)||void 0===d?void 0:d.mode)||"fast"===(null===(c=e.metadata)||void 0===c?void 0:c.mode))&&Z(Zn,{assistant:!0,variant:e.metadata.mode,children:["fast"===e.metadata.mode?Z(wr,{size:12}):Z(vr,{size:12}),Z("span",{children:"fast"===e.metadata.mode?"Fast":"Boost"})]})]})})})},e.id||r),"assistant"===e.role&&Z(vn,{isUser:!1,children:Z(wn,{children:Z($n,{children:Z(un,{messageId:e.id,sessionId:o,feedback:null===(u=e.metadata)||void 0===u?void 0:u.feedback,onFeedbackSubmit:i,config:t})})})},`${e.id}-feedback`)]}):null}).filter(Boolean),r&&n&&n.trim()&&Z(vn,{isUser:!1,children:Z(wn,{children:Z($n,{children:[Z(zn,{children:"ja"===t.language?"リアルタイム応答中...":"Streaming response..."}),Z(Sn,{children:(()=>{try{return gn(n||"",!0,void 0)}catch(e){return Z("p",{children:n||""})}})()})]})})}),Z("div",{ref:a})]})}sn.options=sn.setOptions=function(e){var r;return sn.defaults={...sn.defaults,...e},r=sn.defaults,Sr=r,sn},sn.getDefaults=$r,sn.defaults=Sr,sn.use=function(...e){const r=sn.defaults.extensions||{renderers:{},childTokens:{}};e.forEach(e=>{const n={...e};if(n.async=sn.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const n=r.renderers[e.name];r.renderers[e.name]=n?function(...r){let t=e.renderer.apply(this,r);return!1===t&&(t=n.apply(this,r)),t}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");r[e.level]?r[e.level].unshift(e.tokenizer):r[e.level]=[e.tokenizer],e.start&&("block"===e.level?r.startBlock?r.startBlock.push(e.start):r.startBlock=[e.start]:"inline"===e.level&&(r.startInline?r.startInline.push(e.start):r.startInline=[e.start]))}e.childTokens&&(r.childTokens[e.name]=e.childTokens)}),n.extensions=r),e.renderer){const r=sn.defaults.renderer||new en;for(const n in e.renderer){const t=r[n];r[n]=(...o)=>{let i=e.renderer[n].apply(r,o);return!1===i&&(i=t.apply(r,o)),i}}n.renderer=r}if(e.tokenizer){const r=sn.defaults.tokenizer||new Qr;for(const n in e.tokenizer){const t=r[n];r[n]=(...o)=>{let i=e.tokenizer[n].apply(r,o);return!1===i&&(i=t.apply(r,o)),i}}n.tokenizer=r}if(e.hooks){const r=sn.defaults.hooks||new on;for(const n in e.hooks){const t=r[n];on.passThroughHooks.has(n)?r[n]=o=>{if(sn.defaults.async)return Promise.resolve(e.hooks[n].call(r,o)).then(e=>t.call(r,e));const i=e.hooks[n].call(r,o);return t.call(r,i)}:r[n]=(...o)=>{let i=e.hooks[n].apply(r,o);return!1===i&&(i=t.apply(r,o)),i}}n.hooks=r}if(e.walkTokens){const r=sn.defaults.walkTokens;n.walkTokens=function(n){let t=[];return t.push(e.walkTokens.call(this,n)),r&&(t=t.concat(r.call(this,n))),t}}sn.setOptions(n)})},sn.walkTokens=function(e,r){let n=[];for(const t of e)switch(n=n.concat(r.call(sn,t)),t.type){case"table":for(const e of t.header)n=n.concat(sn.walkTokens(e.tokens,r));for(const e of t.rows)for(const t of e)n=n.concat(sn.walkTokens(t.tokens,r));break;case"list":n=n.concat(sn.walkTokens(t.items,r));break;default:sn.defaults.extensions&&sn.defaults.extensions.childTokens&&sn.defaults.extensions.childTokens[t.type]?sn.defaults.extensions.childTokens[t.type].forEach(function(e){n=n.concat(sn.walkTokens(t[e],r))}):t.tokens&&(n=n.concat(sn.walkTokens(t.tokens,r)))}return n},sn.parseInline=an(Kr.lexInline,tn.parseInline),sn.Parser=tn,sn.parser=tn.parse,sn.Renderer=en,sn.TextRenderer=rn,sn.Lexer=Kr,sn.lexer=Kr.lex,sn.Tokenizer=Qr,sn.Slugger=nn,sn.Hooks=on,sn.parse=sn,sn.options,sn.setOptions,sn.use,sn.walkTokens,sn.parseInline,sn.use({gfm:!0,breaks:!0,mangle:!1,headerIds:!1,smartypants:!0});const kn=Fe("div")`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`,vn=Fe("div")`
  display: flex;
  justify-content: ${e=>e.isUser?"flex-end":"flex-start"};
  align-items: flex-start;
`,yn=Fe("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  max-width: 70%;
`,xn=Fe("div")`
  padding: 1rem 1.25rem;
  background: var(--askdona-primary);
  color: white;
  border-radius: 1rem 1rem 0.25rem 1rem;
  font-size: 0.875rem;
  line-height: 1.6;
  word-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`,wn=Fe("div")`
  display: flex;
  gap: 0.75rem;
  max-width: 85%;
`,$n=Fe("div")`
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
`,Sn=Fe("div")`
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
`,zn=Fe("div")`
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
`,_n=Fe("div")`
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
`,Cn=Fe("div")`
  margin: 16px 0;
  border-radius: 8px;
  border: 1px solid var(--askdona-border);
  background: var(--askdona-surface);
  overflow: hidden;
`,Mn=Fe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: var(--askdona-bg-secondary);
  border-bottom: 1px solid var(--askdona-border);
`,An=Fe("span")`
  font-size: 12px;
  color: var(--askdona-text-secondary);
  font-weight: 500;
  text-transform: uppercase;
`,jn=Fe("button")`
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
`,In=Fe("pre")`
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
`,Dn=Fe("div")`
  margin-top: 12px;
  padding: 8px 0;
`,En=Fe("div")`
  font-size: inherit;
  color: var(--askdona-text); /* use normal text color */
  margin-bottom: 6px;
  font-weight: 500;
`,Rn=Fe("div")`
  display: flex;
  gap: 6px;
  align-items: center;
`,Tn=Fe("button")`
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
`,Fn=Fe("div")`
  font-size: 11px;
  color: var(--askdona-text-secondary);
  margin-top: 6px;
  font-style: italic;
`,On=Fe("div")`
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
`,Nn=Fe("div")`
  background: var(--askdona-background);
  border-radius: 12px;
  padding: 24px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--askdona-border);
`,qn=Fe("div")`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,Pn=Fe("div")`
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
`,Ln=Fe("h3")`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--askdona-text);
`,Hn=Fe("div")`
  margin-bottom: 20px;
`,Bn=Fe("textarea")`
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
`,Un=Fe("div")`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,Jn=Fe("button")`
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
`,Vn=Fe("button")`
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
`,Zn=Fe("div")`
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
`,Qn=Fe("div")`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  padding: 16px;
`,Wn=Fe("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`,Gn=Fe("div")`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #1e293b;
  font-size: 14px;
`,Xn=Fe("button")`
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
`,Yn=Fe("div")`
  margin-bottom: 12px;
`,Kn=Fe("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
`,et=Fe("label")`
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
`,rt=Fe("input")`
  margin: 0;
  width: 12px;
  height: 12px;
`,nt=Fe("div")`
  font-size: 12px;
  color: #64748b;
  padding-top: 8px;
  border-top: 1px solid #f1f5f9;
`;function tt({filter:e,keyData:r,onFilterChange:n,onFilterRemove:t}){const o=pe(r=>{const t=e.selectedValues.includes(r)?e.selectedValues.filter(e=>e!==r):[...e.selectedValues,r];n({...e,selectedValues:t})},[e,n]),i=pe(()=>{t(e.key)},[e.key,t]);return Z(Qn,{children:[Z(Wn,{children:[Z(Gn,{children:[Z(mr,{size:14}),e.key,r.isCustom&&Z("span",{style:{fontSize:"10px",color:"#6b7280",background:"#f3f4f6",padding:"2px 6px",borderRadius:"8px"},children:"カスタム"})]}),Z(Xn,{onClick:i,title:"フィルターを削除",children:Z(xr,{size:14})})]}),Z(Yn,{children:Z(Kn,{children:r.values.map(r=>{const n=e.selectedValues.includes(r);return Z(et,{isSelected:n,onClick:()=>o(r),children:[Z(rt,{type:"checkbox",checked:n,onChange:()=>o(r)}),r]},r)})})}),Z(nt,{children:e.selectedValues.length>0?Z(y,{children:[Z("strong",{children:[e.selectedValues.length,"個の値を選択中:"]}),Z("br",{}),e.selectedValues.join(", "),Z("br",{}),Z("em",{children:"選択した値のいずれかを含むファイルが対象になります (OR条件)"})]}):Z("em",{children:"値を選択してください"})})]})}const ot=Fe("div")`
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
`,it=Fe("div")`
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
`,at=Fe("div")`
  padding: 12px 20px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,st=Fe("h2")`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 8px;
`,lt=Fe("button")`
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
`,dt=Fe("div")`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,ct=Fe("div")`
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
`,ut=Fe("div")`
  margin-bottom: 16px;
`,ht=Fe("label")`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  display: block;
`,pt=Fe("div")`
  display: flex;
  gap: 16px;
`,ft=Fe("label")`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #4b5563;
`,mt=Fe("input")`
  margin: 0;
`,gt=Fe("button")`
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
`,bt=Fe("div")`
  flex: 1;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,kt=Fe("div")`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,vt=Fe("h3")`
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 16px 0;
`,yt=Fe("div")`
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`,xt=Fe("input")`
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  margin-bottom: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2364748b' viewBox='0 0 24 24'%3E%3Cpath d='M21 20l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 12px center;
`,wt=Fe("button")`
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
`,$t=Fe("div")`
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 4px;
`,St=Fe("div")`
  font-size: 12px;
  color: #64748b;
`,zt=Fe("div")`
  text-align: center;
  color: #64748b;
  padding: 40px 20px;
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    color: #cbd5e1;
  }
`,_t=Fe("div")`
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
`,Ct=Fe("div")`
  text-align: center;
  color: #ef4444;
  padding: 40px 20px;
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
  }
`;function Mt({isOpen:e,onClose:r,metadataKeys:n,filters:t,onFiltersChange:o,isLoading:i,error:a}){const[s,l]=le(""),[d,c]=le(t||{filters:[],globalOperator:"AND"});de(()=>{c(t||{filters:[],globalOperator:"AND"})},[t]);const u=pe(e=>{e.target===e.currentTarget&&r()},[r]),h=pe(()=>{const e=d.filters.some(e=>e.selectedValues.length>0);o(e?d:null),r()},[d,o,r]),p=pe(()=>{c({filters:[],globalOperator:"AND"})},[]),f=pe(e=>{const r={key:e,selectedValues:[],operator:"OR"};c(e=>({...e,filters:[...e.filters,r]}))},[]),m=pe(e=>{c(r=>({...r,filters:r.filters.filter(r=>r.key!==e)}))},[]),g=pe(e=>{c(r=>({...r,filters:r.filters.map(r=>r.key===e.key?e:r)}))},[]),b=pe(e=>{c(r=>({...r,globalOperator:e}))},[]),k=n.filter(e=>{const r=d.filters.some(r=>r.key===e.key);if(r)return!1;if(s){const r=s.toLowerCase();return e.key.toLowerCase().includes(r)||e.values.some(e=>e.toLowerCase().includes(r))}return!0});return e?Z(ot,{onClick:u,children:Z(it,{onClick:e=>e.stopPropagation(),children:[Z(at,{children:[Z(st,{children:[Z(ir,{size:20}),"絞り込み設定",d.filters.length>0&&Z("span",{style:{color:"#64748b",fontWeight:400,fontSize:"14px"},children:["(",d.filters.reduce((e,r)=>e+r.selectedValues.length,0),"件の条件)"]})]}),Z(lt,{onClick:r,children:Z(xr,{size:20})})]}),Z(dt,{children:[d.filters.length>0&&Z(ct,{children:[d.filters.length>1&&Z(ut,{children:[Z(ht,{children:"フィルター間の関係"}),Z(pt,{children:[Z(ft,{children:[Z(mt,{type:"radio",name:"globalOperator",checked:"AND"===d.globalOperator,onChange:()=>b("AND")}),"AND（すべての条件を満たす）"]}),Z(ft,{children:[Z(mt,{type:"radio",name:"globalOperator",checked:"OR"===d.globalOperator,onChange:()=>b("OR")}),"OR（いずれかの条件を満たす）"]})]})]}),Z("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Z("span",{style:{fontSize:"14px",color:"#64748b"},children:"文書のメタデータでフィルタリングして検索範囲を絞り込みます"}),d.filters.length>0&&Z(gt,{onClick:p,children:"すべてクリア"})]})]}),Z(bt,{children:[Z(kt,{children:[Z(vt,{children:"設定済みフィルター"}),Z(yt,{children:d.filters.length>0?Z("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:d.filters.map(e=>{const r=n.find(r=>r.key===e.key);return r?Z(tt,{filter:e,keyData:r,onFilterChange:g,onFilterRemove:m},e.key):null})}):Z(zt,{children:[Z(ir,{}),Z("div",{style:{fontWeight:500,marginBottom:"4px"},children:"まだフィルターが設定されていません"}),Z("div",{style:{fontSize:"14px"},children:"右側から絞り込み項目を選択してください"})]})})]}),Z(kt,{children:[Z(vt,{children:"利用可能な絞り込み"}),Z(xt,{type:"text",placeholder:"絞り込み条件を検索...",value:s,onChange:e=>l(e.target.value)}),Z(yt,{children:i?Z(_t,{children:[Z(sr,{}),"読み込み中..."]}):a?Z(Ct,{children:[Z(Ge,{}),Z("div",{style:{fontWeight:500,marginBottom:"4px"},children:"エラーが発生しました"}),Z("div",{style:{fontSize:"14px"},children:a})]}):k.length>0?Z("div",{children:k.map(e=>Z(wt,{onClick:()=>f(e.key),children:[Z($t,{children:e.key}),Z(St,{children:[e.values.length,"個の値 • ",e.count,"件のファイル",Z("br",{}),"例: ",e.values.slice(0,3).join(", "),e.values.length>3&&"..."]})]},e.key))}):Z(zt,{children:[Z(hr,{}),Z("div",{style:{fontWeight:500,marginBottom:"4px"},children:s?"検索結果がありません":"すべてのメタデータキーが選択済みです"})]})})]})]})]}),Z("div",{style:{padding:"16px 20px",borderTop:"1px solid #e2e8f0",display:"flex",justifyContent:"flex-end",gap:"8px"},children:[Z("button",{onClick:r,style:{padding:"8px 16px",border:"1px solid #e2e8f0",background:"white",color:"#374151",borderRadius:"6px",cursor:"pointer"},children:"キャンセル"}),Z("button",{onClick:h,style:{padding:"8px 16px",border:"none",background:"#3b82f6",color:"white",borderRadius:"6px",cursor:"pointer",fontWeight:"500"},children:"適用"})]})]})}):null}const At=Fe("button")`
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
`,jt=Fe("span")`
  background: rgba(255, 255, 255, 0.9);
  color: #1e40af;
  padding: 0px 4px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 600;
  min-width: 14px;
  text-align: center;
  margin-left: 2px;
`,It=Fe(ir)`
  width: 14px;
  height: 14px;
`;function Dt({chatflowId:e,filters:r,onFiltersChange:n,disabled:t=!1,className:o,language:i="ja"}){var a;const[s,l]=le(!1),[d,c]=le(!1),[u,h]=le([]),[p,f]=le(null),[m,g]=le(!1),[b,k]=le(null),[v,x]=le(!1),w=(null===(a=null==r?void 0:r.filters)||void 0===a?void 0:a.reduce((e,r)=>{var n;return e+((null===(n=r.selectedValues)||void 0===n?void 0:n.length)||0)},0))||0,$=w>0;de(()=>{let r=!0;const n=async()=>{if(await new Promise(e=>setTimeout(e,10)),r){g(!0);try{const n=await async function(e){try{return await U(`/metadata/${e}/check`,{method:"GET"})}catch(e){return{enable_metadata_filtering:!1,error:e.message}}}(e);r&&(f(n.enable_metadata_filtering),k(null))}catch(e){r&&(f(!1),k(e.message))}finally{r&&g(!1)}}};return e&&n(),()=>{r=!1}},[e]);const S=pe(()=>{l(!0),!m&&v||c(!0),k(null)},[m,v]);de(()=>{if(!s||v)return;if(m)return;if(!1===p)return k("メタデータフィルタリングはこのチャットフローで利用できません"),c(!1),void x(!0);(async()=>{try{const r=await async function(e){try{return await U(`/metadata/${e}/keys`,{method:"GET"})}catch(e){return{success:!1,error:e.message}}}(e);r.success&&r.metadataKeys?h(r.metadataKeys):(k(r.error||"Failed to fetch metadata keys"),h([])),x(!0)}catch(e){k(e.message),h([]),x(!0)}finally{c(!1)}})()},[s,e,v,m,p]);const z=pe(()=>{l(!1),h([]),c(!1),k(null),x(!1)},[]);return!0!==p?null:Z(y,{children:[Z(At,{hasActiveFilters:$,onClick:S,disabled:t,className:o,type:"button",title:m?"ja"===i?"フィルタ機能を確認中...":"Checking filter availability...":"ja"===i?"結果を絞り込む":"Filter results",children:[Z(It,{}),Z("span",{children:"ja"===i?"絞り込み":"Filter"}),$&&Z(jt,{children:w})]}),s&&Z(Mt,{isOpen:s,onClose:z,metadataKeys:u,filters:r,onFiltersChange:n,isLoading:d,error:b})]})}const Et={idle:0,initializing:10,thinking:22,searching:42,synthesizing:58,processing:72,streaming:88,answering:90,finalizing:96,completing:98,complete:100,error:100},Rt=[{time:0,minProgress:5,label:"initializing"},{time:2e3,minProgress:12,label:"thinking"},{time:5e3,minProgress:20,label:"searching"},{time:9e3,minProgress:32,label:"synthesizing"},{time:13e3,minProgress:48,label:"processing"},{time:16e3,minProgress:64,label:"answering"},{time:18e3,minProgress:76,label:"finalizing"},{time:2e4,minProgress:88,label:"completing"},{time:21e3,minProgress:96,label:"complete"}],Tt=[{time:0,minProgress:5,label:"initializing"},{time:2e3,minProgress:12,label:"thinking"},{time:5e3,minProgress:20,label:"searching"},{time:9e3,minProgress:32,label:"synthesizing"},{time:13e3,minProgress:48,label:"processing"},{time:16e3,minProgress:64,label:"answering"},{time:29e3,minProgress:76,label:"finalizing"},{time:31e3,minProgress:88,label:"completing"},{time:32e3,minProgress:96,label:"complete"}];const Ft={ja:{thinking:"考え中...",searching:"データベースを検索中...",synthesizing:"情報を整理中...",answering:"推論中...",executing_functions:"ツールを実行中...",processing_function_results:"実行結果を処理中...",complete:"情報を統合中...",error:"エラーが発生しました"},en:{thinking:"Thinking...",searching:"Searching the database...",synthesizing:"Organizing information...",answering:"Reasoning...",executing_functions:"Running tools...",processing_function_results:"Processing tool results...",complete:"Synthesizing...",error:"An error occurred"}};function Ot({messages:e,isLoading:r,streamingContent:n,onSendMessage:t,onSendExampleQuestion:o,error:i,config:a,currentState:s,chatMode:l="standard",onChatModeChange:d,sessionId:c,onFeedbackSubmit:u,showIntro:h,metadataFilters:p=null,onMetadataFiltersChange:f,currentMode:m,onModeSwitch:g,onClearChat:b}){const k=l||"standard",v="boost"===k,x="fast"===k,[w,$]=le(""),{progress:S,displayState:z}=function({isLoading:e,boostMode:r=!1,currentState:n}){const[t,o]=le(0),[i,a]=le(n||"idle"),s=ue(null),l=ue(0),d=ue(null),c=r?Tt:Rt,u=c[c.length-1].time;return de(()=>{e&&!s.current?(s.current=Date.now(),l.current=0,o(c[0].minProgress)):e||(s.current=null,l.current=0,o(0),a("idle"),d.current&&cancelAnimationFrame(d.current))},[e,c]),de(()=>{if(!e||!s.current)return;const r=()=>{var t,i;const h=Date.now()-s.current;let p=0,f="processing";for(let e=c.length-1;e>=0;e--)if(h>=c[e].time){const r=c[e];if(e<c.length-1){const n=c[e+1],t=n.time-r.time,o=h-r.time,i=Math.min(o/t,1);p=r.minProgress+(n.minProgress-r.minProgress)*i}else p=r.minProgress;f=r.label||"processing";break}const m=98*function(e){return e<.5?2*e*e:(4-2*e)*e-1}(Math.min(h/u,1)),g=Math.max(p,m,l.current);let b=Math.min(g,98);const k=(f||"processing").toLowerCase(),v=(n||"").toLowerCase(),y=null!==(t=Et[k])&&void 0!==t?t:72,x=v?null!==(i=Et[v])&&void 0!==i?i:72:100,w=Math.min(y,x);b=Math.min(b,w),b>l.current&&(l.current=b,o(b)),a(f),e&&b<98&&(d.current=requestAnimationFrame(r))};return r(),()=>{d.current&&cancelAnimationFrame(d.current)}},[e,c,u,n]),de(()=>{if("answering"===n&&"answering"===i){const e=90;l.current<e&&(l.current=e,o(e))}},[n,i]),{progress:t,displayState:i,isProgressing:e}}({isLoading:r,boostMode:v,currentState:s}),[_,C]=le(0===e.length),[M,A]=le(!1),j=ue(null),I=void 0!==h?h:_;de(()=>{void 0===h&&e.length>0&&C(!1)},[e,h]);const D=e=>{const r=e||j.current;if(!r)return;r.style.height="auto";const n=r.scrollHeight;r.style.height=`${n}px`,r.style.lineHeight=n<=32?"32px":"1.5"};de(()=>{!r&&j.current&&"function"==typeof j.current.focus&&(j.current.focus(),j.current.style.minHeight="32px",D())},[r]);const E=e=>{null==e||e.preventDefault(),w.trim()&&!r&&(t(w.trim(),k,p),$(""))},R=e=>{if(!d)return;d(k===e?"standard":e)},T=a.exampleQuestions||("ja"===a.language?["RAGシステムについて教えてください","ドキュメントの検索方法は？","APIの使い方を教えてください"]:["What is RAG system?","How do I search documents?","How to use the API?"]);return Z(Nt,{children:[Z(Bt,{children:[I?Z(Ut,{children:[Z(Jt,{children:Z(dr,{size:24,color:"white"})}),Z(Vt,{children:a.introTitle||("ja"===a.language?"こんにちは！":"Hi there!")}),a.introMessage?Z(Zt,{dangerouslySetInnerHTML:{q:L(a.introMessage)}}):Z(Zt,{children:"ja"===a.language?"AskDona AIアシスタントです。ドキュメントや情報について何でもお聞きください。":"I'm AskDona AI assistant. Ask me anything about your documents and information."}),Z(Qt,{children:[Z(Wt,{children:"ja"===a.language?"質問例":"Example Questions"}),Z(Gt,{children:T.map((e,r)=>Z(Xt,{onClick:()=>(e=>{o?o(e,p):t(e,k,p)})(e),children:e},r))})]})]}):Z(bn,{messages:e,isLoading:r,streamingContent:n,config:a,sessionId:c,onFeedbackSubmit:u}),r&&Z(Kt,{children:[Z(eo,{children:[Z(ro,{}),Z(no,{children:n.trim()?"ja"===a.language?"リアルタイム応答中...":"Streaming response...":Ft[a.language||"ja"][z]||Ft[a.language||"ja"][s||""]||("ja"===a.language?"処理中...":"Processing...")})]}),!n.trim()&&Z(to,{children:Z(oo,{progress:S})})]}),i&&Z(Yt,{children:"ja"===a.language?`エラーが発生しました: ${i.message}`:`Error: ${i.message}`})]}),g&&Z(qt,{children:Z(Pt,{children:[Z(Lt,{type:"button",active:"ask-ai"===(m||"ask-ai"),onClick:()=>g("ask-ai"),children:"ja"===a.language?"AIに質問":"Ask AI"}),Z(Lt,{type:"button",active:"search"===m,onClick:()=>g("search"),children:"ja"===a.language?"検索":"Search"}),b&&"ask-ai"===(m||"ask-ai")&&e.length>0&&Z(Ht,{type:"button",onClick:b,title:"ja"===a.language?"新しいセッションを開始":"Start new session","aria-label":"ja"===a.language?"新しいセッションを開始":"Start new session",disabled:r,children:Z(ur,{size:14})})]})}),Z(io,{children:Z(co,{boostMode:v,children:Z(uo,{children:[Z(ho,{children:Z(mo,{ref:j,value:w,onChange:e=>{const r=e.target;$(r.value),D(r)},onKeyDown:e=>{M||(e=>{"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),E())})(e)},onCompositionStart:()=>{A(!0)},onCompositionEnd:()=>{A(!1)},placeholder:"ja"===a.language?"質問を入力してください... (Ctrl+Enter または ⌘+Enter で送信)":"Ask me anything... (Ctrl+Enter or ⌘+Enter to send)",disabled:r,rows:1,boostMode:v})}),Z(po,{children:[Z("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.chatflowId&&f&&Z(Dt,{chatflowId:a.chatflowId,filters:p,onFiltersChange:f,disabled:r,language:a.language||"ja"}),a.allowBoostModeToggle&&d&&Z(y,{children:[Z(ao,{onClick:()=>R("fast"),disabled:r,active:x,title:"ja"===a.language?"Fastモードは、思考プロセスを簡素化して素早く回答します。":"Fast mode generates quicker answers with lighter reasoning.",children:[Z(so,{active:x,children:Z(wr,{size:14})}),Z(lo,{children:"Fast"})]}),Z(ao,{onClick:()=>R("boost"),disabled:r,active:v,title:"ja"===a.language?"Boostモードは、より多角的な視点から多くの文書を分析して回答します。":"Boost mode analyzes more documents from multiple perspectives for comprehensive answers.",children:[Z(so,{active:v,children:Z(vr,{size:14})}),Z(lo,{children:"Boost"})]})]})]}),Z(fo,{onClick:E,disabled:!w.trim()||r,title:"ja"===a.language?"Ctrl+Enter または ⌘+Enter で送信":"Ctrl+Enter or ⌘+Enter to send",type:"button","data-askdona-button":"send","data-disabled":!w.trim()||r,children:Z(Je,{size:16,color:(()=>{var e;if(!w.trim()||r){return(null===(e=getComputedStyle(document.documentElement).getPropertyValue("--askdona-text-secondary"))||void 0===e?void 0:e.trim())||"#6b6f8a"}return"white"})()})})]})]})})})]})}const Nt=Fe("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,qt=Fe("div")`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem 0.25rem;
  flex-shrink: 0;
  align-items: center;
  /* tabs aligned left by default */
`,Pt=Fe("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
`,Lt=Fe("button")`
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
`,Ht=Fe("button")`
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
`,Bt=Fe("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
`,Ut=Fe("div")`
  text-align: center;
  padding: 2rem 0;
`,Jt=Fe("div")`
  width: 3rem;
  height: 3rem;
  background: var(--askdona-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
`,Vt=Fe("h3")`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--askdona-text);
`,Zt=Fe("p")`
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  margin: 0 auto 2rem;
  max-width: 90%;
  line-height: 1.5;
`,Qt=Fe("div")`
  margin-top: 2rem;
`,Wt=Fe("h4")`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--askdona-text-secondary);
  margin: 0 0 1rem;
`,Gt=Fe("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`,Xt=Fe("button")`
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
`,Yt=Fe("div")`
  background: rgba(239, 68, 68, 0.1);
  color: var(--askdona-error);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  font-size: 0.875rem;
`,Kt=Fe("div")`
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
`,eo=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ro=Fe("div")`
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
`,no=Fe("span")`
  font-weight: 500;
`,to=Fe("div")`
  width: 30%;
  height: 6px;
  background: var(--askdona-border);
  border-radius: 3px;
  overflow: hidden;
`,oo=Fe("div")`
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
`,io=Fe("div")`
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  flex-shrink: 0;
`,ao=Fe("button")`
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
`,so=Fe("span")`
  display: flex;
  align-items: center;
  opacity: ${({active:e})=>e?1:.8};
`,lo=Fe("span")`
  font-weight: 500;
  font-size: 12px;
`,co=Fe("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  
  ${({boostMode:e})=>e&&"\n    &::before {\n      content: '';\n      position: absolute;\n      top: -2px;\n      left: -2px;\n      right: -2px;\n      bottom: -2px;\n      background: linear-gradient(135deg, var(--askdona-primary), var(--askdona-primary-light));\n      border-radius: 0.875rem;\n      z-index: -1;\n    }\n  "}
`,uo=Fe("div")`
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
`,ho=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`,po=Fe("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
`,fo=Fe("button")`
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
`,mo=Fe("textarea")`
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
`;class go{static getStorageKey(){return"askdona_search_history"}static getAllHistory(){try{const e=localStorage.getItem(this.getStorageKey());if(!e)return[];const r=JSON.parse(e),n=Date.now()-2592e6;return r.filter(e=>e.timestamp>n)}catch(e){return[]}}static saveHistory(e){try{const r=e.slice(0,50);localStorage.setItem(this.getStorageKey(),JSON.stringify(r))}catch(e){}}static addSearchHistory(e,r,n,t){const o={id:`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,query:r.trim(),resultsCount:n,searchTime:t,timestamp:Date.now(),chatflowId:e},i=this.getAllHistory();i.unshift(o),this.saveHistory(i)}static getSearchHistory(e,r=20){return this.getAllHistory().filter(r=>r.chatflowId===e).slice(0,r)}static getRecentQueries(e,r=10,n=!0){const t=this.getSearchHistory(e,n?100:r);if(n){const e=new Set,n=[];for(const o of t){const t=o.query.toLowerCase();if(!e.has(t)&&(e.add(t),n.push(o.query),n.length>=r))break}return n}return t.map(e=>e.query)}static getPopularQueries(e,r=10){const n=this.getSearchHistory(e,1e3),t=new Map;return n.forEach(e=>{const r=e.query.toLowerCase();t.set(r,(t.get(r)||0)+1)}),Array.from(t.entries()).map(([e,r])=>{var t;return{query:(null===(t=n.find(r=>r.query.toLowerCase()===e))||void 0===t?void 0:t.query)||e,count:r}}).sort((e,r)=>r.count-e.count).slice(0,r)}static clearHistory(e){if(e){const r=this.getAllHistory().filter(r=>r.chatflowId!==e);this.saveHistory(r)}else localStorage.removeItem(this.getStorageKey())}static getHistoryStats(e){const r=this.getSearchHistory(e,1e3);if(0===r.length)return{totalSearches:0,uniqueQueries:0,avgResultsCount:0,avgSearchTime:0};const n=new Set(r.map(e=>e.query.toLowerCase())).size,t=r.reduce((e,r)=>e+r.resultsCount,0)/r.length,o=r.reduce((e,r)=>e+r.searchTime,0)/r.length;return{totalSearches:r.length,uniqueQueries:n,avgResultsCount:Math.round(t),avgSearchTime:Math.round(o)}}}function bo({config:e,currentMode:r,onModeSwitch:n,onClearSearch:t}){var o,i;const[a,s]=le(""),[l,d]=le(null),[c,u]=le([]),[h,p]=le({}),[f,m]=le(!1),[g,b]=le(null),k=ue(null),[v,x]=le(!1),{recentQueries:w,addSearchHistory:$}=function(e,r={}){const{limit:n=20,uniqueQueries:t=!0,autoRefresh:o=!0}=r,[i,a]=le([]),[s,l]=le([]),d=pe(()=>{if(!e)return;const r=go.getRecentQueries(e,n,t);a(r);const o=go.getPopularQueries(e,10);l(o)},[e,n,t]);de(()=>{o&&d()},[o,d]);const c=pe((r,n,t)=>{e&&r.trim()&&(go.addSearchHistory(e,r,n,t),o&&d())},[e,o,d]),u=pe(()=>{e&&(go.clearHistory(e),a([]),l([]))},[e]),h=pe(()=>e?go.getHistoryStats(e):null,[e]);return{recentQueries:i,popularQueries:s,addSearchHistory:c,clearHistory:u,refresh:d,getStats:h}}(e.chatflowId),S=`askdona_widget_last_search_${e.chatflowId}`,z=pe((e,r)=>{try{const n={query:e,response:r,savedAt:Date.now()};localStorage.setItem(S,JSON.stringify(n))}catch(e){}},[S]),_=pe(()=>{try{const e=localStorage.getItem(S);if(!e)return null;const r=JSON.parse(e);return r&&"object"==typeof r?r:null}catch(e){return null}},[S]);de(()=>{k.current&&"function"==typeof k.current.focus&&k.current.focus();const e=_();e&&e.response&&(s(e.query||""),d(e.response),u(e.response.results||[]),p({}))},[_]);const C=pe(async r=>{var n;if(!r.trim())return d(null),void u([]);p({}),m(!0),b(null);const t=Date.now();try{const o={query:r,filters:{}},i=await async function(e,r){try{return await U(`/search/${e}`,{method:"POST",body:JSON.stringify(r)})}catch(e){throw e}}(e.chatflowId,o);d(i),u(i.results||[]),z(r,i);const a=Date.now()-t;$(r,(null===(n=i.results)||void 0===n?void 0:n.length)||0,a)}catch(e){b(e instanceof Error?e.message:"Unknown error occurred"),d(null),u([])}finally{m(!1)}},[e.chatflowId,$,z]),M=pe(()=>{a.trim()&&C(a.trim())},[a,C]),A=pe(e=>{v||"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),M())},[M,v]),j=he(()=>{if(!c.length)return[];let e=[...c];return h.categories&&h.categories.length>0&&(e=e.filter(e=>{var r,n;const t=null===(r=e.fileMetadata)||void 0===r?void 0:r.category,o=null===(n=e.fileMetadata)||void 0===n?void 0:n.subCategory;return h.categories.includes(t||"")||h.categories.includes(o||"")})),h.fileTypes&&h.fileTypes.length>0&&(e=e.filter(e=>h.fileTypes.includes(e.fileFormat))),e},[c,h]),I=he(()=>j,[j]),D=pe(()=>{s(""),d(null),u([]),p({}),b(null);{const e=k.current;e&&"function"==typeof e.focus&&e.focus()}try{localStorage.removeItem(S)}catch(e){}t&&t()},[S,t]),E=e=>{p(e)},R=e=>{if(!a.trim())return Z(y,{children:e});return Z(y,{children:e.split(new RegExp(`(${a})`,"gi")).map((e,r)=>e.toLowerCase()===a.toLowerCase()?Z(qo,{children:e},r):Z("span",{children:e},r))})},T=he(()=>{if(!l)return[];return[{id:"all",label:"ja"===e.language?"すべて":"All",count:j.length},...l.facets.fileTypes.map(e=>({id:e.value,label:e.value.toUpperCase(),count:e.count}))]},[l,j.length,e.language]);return Z(ko,{children:[l&&Z(Zo,{"data-search-results-header":!0,children:[Z(Qo,{children:["ja"===e.language?"検索結果":"Search Results",": ",j.length.toLocaleString()," ","ja"===e.language?"件":"items",(null===(o=h.categories)||void 0===o?void 0:o.length)||(null===(i=h.fileTypes)||void 0===i?void 0:i.length)?Z(Wo,{children:"ja"===e.language?"フィルタ適用済":"Filtered"}):null]}),Z(Go,{children:["ja"===e.language?"検索時間":"Search time",": ",l.searchTime,"ms"]})]}),l&&T.length>1&&Z(Ro,{children:T.map(e=>Z(To,{active:"all"===e.id||Boolean(h.fileTypes&&h.fileTypes.includes(e.id)),onClick:()=>{"all"===e.id?E({}):E({fileTypes:[e.id]})},children:[e.label,Z(Fo,{children:["(",e.count,")"]})]},e.id))}),Z(Oo,{children:f?Z(Po,{children:[Z(Lo,{}),Z(Ho,{children:"ja"===e.language?"検索中...":"Searching..."})]}):g?Z(Xo,{children:[Z(Yo,{children:"⚠️"}),Z(Ko,{children:"ja"===e.language?"検索エラー":"Search Error"}),Z(ei,{children:g})]}):a&&0===j.length&&l?Z(Bo,{children:"ja"===e.language?`"${a}" に一致する結果が見つかりませんでした`:`No results found for "${a}"`}):I.length>0?Z(y,{children:Z(No,{children:I.map(r=>Z(ri,{children:Z(ni,{children:[Z(ti,{children:r.fileMetadata.url?Z("a",{href:r.fileMetadata.url,target:"_blank",rel:"noopener noreferrer",children:R(r.fileMetadata.title||r.fileName)}):Z("span",{children:R(r.fileMetadata.title||r.fileName)})}),Z(oi,{children:[Z("strong",{children:"ja"===e.language?"フォーマット:":"Format:"})," ",r.fileFormat.toUpperCase()]}),r.fileMetadata.body&&Z(ii,{children:[Z("strong",{children:"ja"===e.language?"本文:":"Content:"}),Z(ai,{children:R(r.fileMetadata.body)})]})]})},r.fileId))})}):Z(Uo,{children:[Z(Jo,{children:"🔍"}),Z(Vo,{children:"ja"===e.language?"検索キーワードを入力してください (Ctrl+Enter または ⌘+Enter で送信)":"Enter a search term to see results (Ctrl+Enter or ⌘+Enter to send)"})]})}),n&&Z(vo,{children:Z(yo,{children:[Z(wo,{type:"button",active:"ask-ai"===(r||"ask-ai"),onClick:()=>n("ask-ai"),children:"ja"===e.language?"AIに質問":"Ask AI"}),Z(wo,{type:"button",active:"search"===r,onClick:()=>n("search"),children:"ja"===e.language?"検索":"Search"}),"search"===r&&(a||l)&&Z(xo,{type:"button",onClick:D,title:"ja"===e.language?"検索をクリア":"Clear search","aria-label":"ja"===e.language?"検索をクリア":"Clear search",disabled:f,children:Z(ur,{size:14})})]})}),Z(Do,{children:Z($o,{children:Z(So,{children:[w.length>0&&Z(zo,{children:[Z(_o,{children:"ja"===e.language?"最近の検索":"Recent searches"}),Z(Co,{children:w.slice(0,8).map((e,r)=>Z(Mo,{onClick:()=>{return s(r=e),void C(r);var r},children:e},r))})]}),Z(Ao,{children:[Z(Io,{ref:k,value:a,onInput:e=>{(e=>{const r=e.target.value;s(r)})(e),(e=>{const r=e||k.current;if(!r)return;r.style.height="auto";const n=r.scrollHeight;r.style.height=`${n}px`,r.style.lineHeight=n<=32?"32px":"1.5"})(e.currentTarget)},onKeyDown:A,onCompositionStart:()=>x(!0),onCompositionEnd:()=>x(!1),placeholder:"ja"===e.language?"検索キーワードを入力... (Ctrl+Enter または ⌘+Enter で送信)":"Enter search keywords... (Ctrl+Enter or ⌘+Enter to send)",rows:1}),Z(jo,{onClick:M,"data-disabled":!a.trim()||f,title:"ja"===e.language?"検索 (Enter または Ctrl+Enter)":"Search (Enter or Ctrl+Enter)",type:"button",children:f?Z(Eo,{}):Z(Je,{size:16,color:"white"})})]})]})})})]})}const ko=Fe("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,vo=Fe("div")`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem 0.25rem; /* align underline position with ChatView */
  flex-shrink: 0;
  align-items: center; /* match ChatView */
  position: relative;
  z-index: 2; /* ensure tab underline renders above input separator */
`,yo=Fe("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
`,xo=Fe("button")`
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
`,wo=Fe("button")`
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
`,$o=Fe("div")`
  position: relative;
  width: 100%;
`,So=Fe("div")`
  position: relative;
  display: flex;
  flex-direction: column;
`,zo=Fe("div")`
  padding: 0.25rem 0.25rem 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,_o=Fe("div")`
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.025em;
`,Co=Fe("div")`
  display: flex;
  gap: 0.375rem;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
`,Mo=Fe("button")`
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
`,Ao=Fe("div")`
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
`,jo=Fe("button")`
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
`,Io=Fe("textarea")`
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
`,Do=Fe("div")`
  position: relative;
  padding: 1rem 1.5rem; /* match ChatView InputArea spacing */
  border-top: 1px solid var(--askdona-border);
  flex-shrink: 0;
`,Eo=Fe("div")`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Ro=Fe("div")`
  display: flex;
  gap: 1.5rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  overflow-x: auto;
  flex-shrink: 0;
  
  &::-webkit-scrollbar {
    height: 0;
  }
`,To=Fe("button")`
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
`,Fo=Fe("span")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin-left: 0.25rem;
`,Oo=Fe("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1rem 1.5rem;
`,No=Fe("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* tighter spacing between cards */
`,qo=Fe("span")`
  background: rgba(var(--askdona-primary-rgb), 0.2);
  padding: 0 0.125rem;
  border-radius: 0.125rem;
  font-weight: 500;
`,Po=Fe("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`,Lo=Fe("div")`
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--askdona-border);
  border-top-color: var(--askdona-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Ho=Fe("p")`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
`,Bo=Fe("div")`
  text-align: center;
  padding: 3rem;
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
`,Uo=Fe("div")`
  text-align: center;
  padding: 3rem;
`,Jo=Fe("div")`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`,Vo=Fe("p")`
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
  margin: 0;
`,Zo=Fe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  background: var(--askdona-surface);
`,Qo=Fe("h3")`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: var(--askdona-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Wo=Fe("span")`
  background: var(--askdona-primary);
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 500;
`,Go=Fe("p")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin: 0;
`,Xo=Fe("div")`
  text-align: center;
  padding: 3rem;
  color: var(--askdona-error);
`,Yo=Fe("div")`
  font-size: 2rem;
  margin-bottom: 1rem;
`,Ko=Fe("h3")`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--askdona-error);
`,ei=Fe("p")`
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  margin: 0;
`,ri=Fe("div")`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 0; /* rely on ResultsList gap for spacing */
  transition: all 0.2s;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,ni=Fe("div")`
  padding: 0.75rem; /* slightly tighter */
  display: flex;
  flex-direction: column;
  gap: 0.375rem; /* slightly tighter */
`,ti=Fe("h4")`
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
`,oi=Fe("p")`
  margin: 0; /* remove extra spacing */
  font-size: 0.75rem; /* smaller row text */
  color: var(--askdona-text-secondary); /* lighter overall */
  
  strong {
    color: var(--askdona-text-secondary); /* lighter label color */
    font-size: 0.6875rem; /* even smaller label text */
    opacity: 0.75; /* make label appear lighter */
  }
`,ii=Fe("div")`
  margin-top: 0.5rem;
  
  strong {
    display: block;
    margin-bottom: 0.25rem;
    color: #202124;
    font-size: 0.875rem;
  }
`,ai=Fe("p")`
  margin: 0;
  font-size: 0.875rem;
  color: #5f6368;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;function si({originalQuery:e,questions:r,onSubmit:n,onBack:t,isSubmitting:o=!1,error:i}){const[a,s]=le(new Array(r.length).fill("")),l=a.every(e=>e.trim().length>0),d=a.filter(e=>e.trim().length>0).length;return Z(li,{children:[Z(di,{children:[Z(ci,{children:Z(Ye,{size:24,color:"white"})}),Z(ui,{children:[Z(hi,{children:"🔍 Research Planning Questions"}),Z(pi,{children:"Help us understand what you're looking for"})]})]}),Z(fi,{children:[Z(mi,{children:"Your Research Query:"}),Z(gi,{children:['"',e,'"']})]}),Z(bi,{children:[Z(ki,{children:[Z(vi,{children:"Questions Completed"}),Z(yi,{children:[d,"/",r.length]})]}),Z(xi,{children:Z(wi,{progress:d/r.length*100})})]}),Z($i,{children:[Z(Si,{children:"💡"}),Z(zi,{children:"Please answer these questions to help us conduct more targeted and comprehensive research. The more specific your answers, the better the research results will be."})]}),Z(_i,{children:r.map((e,r)=>Z(Ci,{children:[Z(Mi,{children:Z("span",{children:r+1})}),Z(Ai,{children:[Z(ji,{children:e}),Z(Ii,{value:a[r],onChange:e=>((e,r)=>{const n=[...a];n[e]=r,s(n)})(r,e.target.value),placeholder:"Please provide your answer here...",rows:3,disabled:o})]})]},r))}),i&&Z(Di,{children:[Z(Ge,{size:16}),Z("span",{children:i})]}),Z(Ei,{children:[t&&Z(Ri,{onClick:t,disabled:o,children:"← Back to Query"}),Z(Ti,{onClick:()=>{const e=r.map((e,r)=>({question:e,answer:a[r]||""}));n(e)},disabled:!l||o,children:Z(y,o?{children:[Z(lr,{size:16,className:"spin"}),"Starting Research..."]}:{children:[Z(Ue,{size:16}),"Start Deep Research"]})})]}),Z(Fi,{children:[Z(Oi,{children:"💡"}),Z(Ni,{children:[Z(qi,{children:"Tips for Better Results:"}),Z(Pi,{children:[Z(Li,{children:"✅ Be specific about what aspects interest you most"}),Z(Li,{children:"⏰ Mention any time periods or geographical regions"}),Z(Li,{children:"🎯 Clarify if you need academic or practical information"}),Z(Li,{children:"📊 Specify the depth of detail you're looking for"})]})]})]})]})}const li=Fe("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
`,di=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
`,ci=Fe("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ui=Fe("div")`
  flex: 1;
`,hi=Fe("h3")`
  margin: 0 0 0.25rem;
  font-size: 1.125rem;
  font-weight: 600;
`,pi=Fe("p")`
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
`,fi=Fe("div")`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  background: rgba(var(--askdona-primary-rgb, 67, 56, 202), 0.05);
`,mi=Fe("h4")`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
`,gi=Fe("p")`
  margin: 0;
  font-style: italic;
  color: var(--askdona-text);
  line-height: 1.5;
`,bi=Fe("div")`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`,ki=Fe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,vi=Fe("span")`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--askdona-text);
`,yi=Fe("span")`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-primary);
`,xi=Fe("div")`
  height: 0.5rem;
  background: var(--askdona-border);
  border-radius: 0.25rem;
  overflow: hidden;
`,wi=Fe("div")`
  height: 100%;
  width: ${({progress:e})=>Math.min(Math.max(e,0),100)}%;
  background: var(--askdona-primary);
  border-radius: 0.25rem;
  transition: width 0.3s ease-in-out;
`,$i=Fe("div")`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  background: rgba(59, 130, 246, 0.05);
`,Si=Fe("div")`
  font-size: 1.25rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
`,zi=Fe("p")`
  margin: 0;
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  line-height: 1.5;
`,_i=Fe("div")`
  padding: 1.5rem;
`,Ci=Fe("div")`
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
`,Mi=Fe("div")`
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
`,Ai=Fe("div")`
  flex: 1;
`,ji=Fe("p")`
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
  color: var(--askdona-text);
  line-height: 1.5;
`,Ii=Fe("textarea")`
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
`,Di=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  font-size: 0.875rem;
  border-top: 1px solid var(--askdona-border);
`,Ei=Fe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid var(--askdona-border);
`,Ri=Fe("button")`
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
`,Ti=Fe("button")`
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
`,Fi=Fe("div")`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(16, 185, 129, 0.05);
  border-top: 1px solid var(--askdona-border);
`,Oi=Fe("div")`
  font-size: 1.25rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
`,Ni=Fe("div")`
  flex: 1;
`,qi=Fe("p")`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text);
`,Pi=Fe("div")`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Li=Fe("div")`
  font-size: 0.8125rem;
  color: var(--askdona-text-secondary);
  line-height: 1.4;
`,Hi={pending:{label:"Initializing",icon:er,description:"Setting up Deep Research...",color:"#6b7280"},"follow-up":{label:"Planning Research",icon:gr,description:"Analyzing your query and planning research approach",color:"#3b82f6"},"research-outline":{label:"Creating Outline",icon:Ke,description:"Building comprehensive research outline",color:"#3b82f6"},search:{label:"Searching Sources",icon:hr,description:"Finding and analyzing relevant sources",color:"#059669"},extraction:{label:"Extracting Information",icon:nr,description:"Extracting key information from sources",color:"#059669"},"new-angles":{label:"Exploring Angles",icon:Ve,description:"Discovering additional research angles",color:"#7c3aed"},synthesis:{label:"Synthesizing Results",icon:wr,description:"Combining findings into comprehensive report",color:"#dc2626"},processing:{label:"Processing",icon:or,description:"Processing your research request",color:"#3b82f6"},completed:{label:"Complete",icon:Xe,description:"Research completed successfully",color:"#059669"},failed:{label:"Failed",icon:yr,description:"Research failed",color:"#dc2626"}};function Bi(e){const r=Math.floor(e/60),n=e%60;return 0===r?`${n}s`:0===n?`${r}m`:`${r}m ${n}s`}function Ui(e){if(!e||e<=0)return"";const r=Math.floor(e/60),n=e%60;return 0===r?`~${n}s remaining`:n<30?`~${r}m remaining`:`~${r+1}m remaining`}function Ji({job:e,isLoading:r,onCancel:n}){var t,o;const[i,a]=le(0);de(()=>{const r=new Date(e.startedAt).getTime(),n=()=>{const e=Date.now(),n=Math.floor((e-r)/1e3);a(n)};n();const t=setInterval(n,1e3);return()=>clearInterval(t)},[e.startedAt]);const s=(null===(t=e.progress)||void 0===t?void 0:t.stage)||e.status,l=Hi[s]||Hi.processing,d=(null===(o=e.progress)||void 0===o?void 0:o.progress)||0,c=l.icon;return Z(Vi,{children:[Z(Zi,{children:Z(Qi,{children:[Z(Wi,{color:l.color,children:Z(c,{size:20,color:"white"})}),Z(Gi,{children:[Z(Xi,{children:"🔍 Deep Research in Progress"}),Z(Yi,{children:[Z(Ki,{children:[Z(er,{size:14}),Bi(i)]}),Z(Ki,{children:["ID: ",e.jobId.slice(-8)]})]})]})]})}),Z(ea,{children:[Z(ra,{children:"Research Query:"}),Z(na,{children:['"',e.query,'"']})]}),Z(ta,{children:[Z(oa,{children:[Z(ia,{color:l.color,children:Z(c,{size:24})}),Z(aa,{children:[Z(sa,{color:l.color,children:l.label}),Z(la,{children:l.description})]})]}),"processing"===e.status&&Z(da,{children:[Z(ca,{children:Z(ua,{progress:d,color:l.color})}),Z(ha,{children:[Math.round(d),"%"]})]})]}),e.progress&&Z(pa,{children:[e.progress.sources&&e.progress.sources>0&&Z(fa,{children:[Z(ma,{children:Z(nr,{size:16,color:"#6b7280"})}),Z(ga,{children:[Z(ba,{children:"Sources Found"}),Z(ka,{children:e.progress.sources})]})]}),e.progress.estimatedTimeRemaining&&Z(fa,{children:[Z(ma,{children:Z(er,{size:16,color:"#6b7280"})}),Z(ga,{children:[Z(ba,{children:"Estimated"}),Z(ka,{children:Ui(e.progress.estimatedTimeRemaining)})]})]}),e.estimatedDuration&&Z(fa,{children:[Z(ma,{children:Z(gr,{size:16,color:"#6b7280"})}),Z(ga,{children:[Z(ba,{children:"Expected Duration"}),Z(ka,{children:e.estimatedDuration})]})]}),e.creditsConsumed&&Z(fa,{children:[Z(ma,{children:"💳"}),Z(ga,{children:[Z(ba,{children:"Credits Used"}),Z(ka,{children:e.creditsConsumed})]})]})]}),"pending"===e.status&&Z(va,{type:"info",children:[Z(yr,{size:16}),"Your request is queued and will start processing shortly..."]}),"failed"===e.status&&e.error&&Z(va,{type:"error",children:[Z(yr,{size:16}),Z("div",{children:[Z("strong",{children:"Research Failed:"}),Z("p",{children:e.error})]})]}),Z(ya,{children:[n&&("pending"===e.status||"processing"===e.status)&&Z(xa,{onClick:n,disabled:r,children:[Z(xr,{size:16}),"Cancel Research"]}),Z(wa,{children:[Z($a,{children:"💡 What's happening?"}),Z(Sa,{children:[Z(za,{children:"Deep Research Process:"}),Z(_a,{children:[Z(Ca,{children:"📝 Creating a detailed research outline"}),Z(Ca,{children:"🔍 Searching multiple databases and sources"}),Z(Ca,{children:"📊 Extracting and analyzing key information"}),Z(Ca,{children:"🔬 Exploring different research angles"}),Z(Ca,{children:"⚡ Synthesizing findings into a final report"})]}),Z(Ma,{children:"This process typically takes 5-20 minutes depending on complexity."})]})]})]})]})}const Vi=Fe("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
`,Zi=Fe("div")`
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
`,Qi=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Wi=Fe("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Gi=Fe("div")`
  flex: 1;
`,Xi=Fe("h3")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`,Yi=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  opacity: 0.9;
`,Ki=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,ea=Fe("div")`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`,ra=Fe("h4")`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
`,na=Fe("p")`
  margin: 0;
  font-style: italic;
  color: var(--askdona-text);
  line-height: 1.5;
`,ta=Fe("div")`
  padding: 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`,oa=Fe("div")`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`,ia=Fe("div")`
  width: 3rem;
  height: 3rem;
  background: ${({color:e})=>e};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`,aa=Fe("div")`
  flex: 1;
`,sa=Fe("h4")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({color:e})=>e};
`,la=Fe("p")`
  margin: 0;
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
`,da=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
`,ca=Fe("div")`
  flex: 1;
  height: 0.5rem;
  background: var(--askdona-border);
  border-radius: 0.25rem;
  overflow: hidden;
`,ua=Fe("div")`
  height: 100%;
  width: ${({progress:e})=>Math.min(Math.max(e,0),100)}%;
  background: ${({color:e})=>e};
  border-radius: 0.25rem;
  transition: width 0.3s ease-in-out;
`,ha=Fe("span")`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text);
  min-width: 3rem;
  text-align: right;
`,pa=Fe("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`,fa=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
`,ma=Fe("div")`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--askdona-border);
  border-radius: 0.375rem;
  flex-shrink: 0;
`,ga=Fe("div")`
  flex: 1;
  min-width: 0;
`,ba=Fe("div")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin-bottom: 0.25rem;
`,ka=Fe("div")`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text);
  word-break: break-word;
`,va=Fe("div")`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  font-size: 0.875rem;
  
  ${({type:e})=>"info"===e&&"\n    background: rgba(59, 130, 246, 0.1);\n    color: #1e40af;\n  "}
  
  ${({type:e})=>"error"===e&&"\n    background: rgba(239, 68, 68, 0.1);\n    color: #dc2626;\n  "}
`,ya=Fe("div")`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,xa=Fe("button")`
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
`,wa=Fe("details")`
  font-size: 0.875rem;
`,$a=Fe("summary")`
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
`,Sa=Fe("div")`
  margin-top: 0.75rem;
  padding: 1rem;
  border: 1px solid var(--askdona-border);
  border-radius: 0.375rem;
  background: var(--askdona-background);
`,za=Fe("p")`
  margin: 0 0 0.75rem;
  font-weight: 600;
  color: var(--askdona-text);
`,_a=Fe("ul")`
  margin: 0 0 1rem;
  padding-left: 1.5rem;
`,Ca=Fe("li")`
  margin: 0.5rem 0;
  color: var(--askdona-text);
`,Ma=Fe("p")`
  margin: 0;
  font-size: 0.8125rem;
  color: var(--askdona-text-secondary);
  font-style: italic;
`;function Aa(e,r){if(!r)return"";const n=new Date(e).getTime(),t=new Date(r).getTime()-n,o=Math.floor(t/1e3),i=Math.floor(o/60),a=o%60;return 0===i?`${a}s`:`${i}m ${a}s`}function ja({sources:e}){const[r,n]=le(new Set);return e&&0!==e.length?Z(us,{children:[Z(hs,{children:Z(ps,{children:["📚 Sources (",e.length,")"]})}),e.map((e,t)=>Z(fs,{children:[Z(ms,{onClick:()=>(e=>{const t=new Set(r);t.has(e)?t.delete(e):t.add(e),n(t)})(t),children:[Z(gs,{children:[Z(bs,{href:e.url,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:[Z(tr,{size:14}),e.title]}),e.domain&&Z(ks,{children:[Z(ar,{size:12}),e.domain]})]}),Z(vs,{children:r.has(t)?Z(Qe,{size:16}):Z(We,{size:16})})]}),r.has(t)&&e.excerpt&&Z(ys,{children:[Z(xs,{children:['"',e.excerpt,'"']}),e.relevance&&Z(ws,{children:[Z(fr,{size:12}),"Relevance: ",Math.round(100*e.relevance),"%"]})]})]},t))]}):Z(Cs,{children:[Z(Ms,{children:Z(or,{size:20,color:"#6b7280"})}),Z(As,{children:"No sources were referenced in this research."})]})}function Ia({content:e}){return Z(is,{children:(r=e,r.split("\n").map((e,r)=>{if(""===e.trim())return null;if(e.startsWith("# "))return Z(as,{children:e.substring(2)},r);if(e.startsWith("## "))return Z(ss,{children:e.substring(3)},r);if(e.startsWith("### "))return Z(ls,{children:e.substring(4)},r);if(e.startsWith("- ")||e.startsWith("* "))return Z(cs,{children:e.substring(2)},r);if(/^\d+\.\s/.test(e)){const n=e.replace(/^\d+\.\s/,"");return Z(cs,{children:n},r)}return Z(ds,{children:e},r)}).filter(Boolean))});var r}function Da({job:e,onNewResearch:r,onClose:n}){const[t,o]=le("results"),i=e.results,a=(null==i?void 0:i.content)||(null==i?void 0:i.summary)||(null==i?void 0:i.report),s=(null==i?void 0:i.sources)||[],l=(null==i?void 0:i.metadata)||{};return Z(Ea,{children:[Z(Ra,{children:Z(Ta,{children:[Z(Fa,{children:[Z(Oa,{children:Z(Xe,{size:24,color:"white"})}),Z(Na,{children:[Z(qa,{children:"✅ Deep Research Complete"}),Z(Pa,{children:[e.completedAt&&Z(La,{children:[Z(er,{size:14}),Aa(e.startedAt,e.completedAt)]}),e.creditsConsumed&&Z(La,{children:["💳 ",e.creditsConsumed," credits used"]})]})]})]}),n&&Z(Ha,{onClick:n,children:Z(xr,{size:20})})]})}),Z(Ba,{children:[Z(Ua,{children:"Research Query:"}),Z(Ja,{children:['"',e.query,'"']})]}),Z(Va,{children:[Z(Za,{active:"results"===t,onClick:()=>o("results"),children:"📄 Results"}),Z(Za,{active:"sources"===t,onClick:()=>o("sources"),children:["📚 Sources ",s.length>0&&`(${s.length})`]}),Z(Za,{active:"details"===t,onClick:()=>o("details"),children:"ℹ️ Details"})]}),Z(Qa,{children:["results"===t&&Z(Wa,{children:a?Z(y,{children:[i.summary&&Z(Ga,{children:[Z(Ka,{children:"📋 Executive Summary"}),Z(es,{children:i.summary})]}),i.content&&Z(Xa,{children:[Z(Ka,{children:"📄 Detailed Report"}),Z(rs,{children:Z(Ia,{content:i.content})})]}),i.report&&!i.content&&Z(Xa,{children:[Z(Ka,{children:"📄 Research Report"}),Z(rs,{children:Z(Ia,{content:i.report})})]}),i.key_findings&&Z(Ya,{children:[Z(Ka,{children:"🔑 Key Findings"}),Z(ns,{children:Z(ts,{children:i.key_findings.map((e,r)=>Z(os,{children:e},r))})})]})]}):Z($s,{children:[Z(Ss,{children:Z(or,{size:24,color:"#6b7280"})}),Z(zs,{children:"No Results Available"}),Z(_s,{children:"No detailed results are available for this research. This might be due to an error during processing or the research being incomplete."})]})}),"sources"===t&&Z(ja,{sources:s}),"details"===t&&Z(js,{children:[Z(Is,{children:[Z(Ka,{children:"🔍 Research Details"}),Z(Ds,{children:[Z(Es,{children:[Z(Rs,{children:"Job ID:"}),Z(Ts,{children:e.jobId})]}),Z(Es,{children:[Z(Rs,{children:"Started:"}),Z(Ts,{children:new Date(e.startedAt).toLocaleString()})]}),e.completedAt&&Z(Es,{children:[Z(Rs,{children:"Completed:"}),Z(Ts,{children:new Date(e.completedAt).toLocaleString()})]}),Z(Es,{children:[Z(Rs,{children:"Duration:"}),Z(Ts,{children:Aa(e.startedAt,e.completedAt)})]}),e.creditsConsumed&&Z(Es,{children:[Z(Rs,{children:"Credits Used:"}),Z(Ts,{children:e.creditsConsumed})]}),Z(Es,{children:[Z(Rs,{children:"Sources Found:"}),Z(Ts,{children:s.length})]})]})]}),l&&Object.keys(l).length>0&&Z(Fs,{children:[Z(Ka,{children:"📊 Metadata"}),Z(Os,{children:Z("pre",{children:JSON.stringify(l,null,2)})})]})]})]}),Z(Ns,{children:[Z(qs,{children:Z(Ls,{onClick:r,children:[Z(hr,{size:16}),"New Research"]})}),Z(Ps,{children:[Z(Hs,{onClick:async()=>{try{navigator.share&&a&&await navigator.share({title:"Deep Research Results",text:e.query,url:window.location.href})}catch(e){}},children:[Z(pr,{size:16}),"Share"]}),Z(Hs,{onClick:async()=>{var r;try{const n=`Deep Research Results\n\nQuery: ${e.query}\n\n${a?i.content||i.report||i.summary:"No content available"}`;await(null===(r=navigator.clipboard)||void 0===r?void 0:r.writeText(n))}catch(e){}},children:[Z(rr,{size:16}),"Copy"]})]})]})]})}const Ea=Fe("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
`,Ra=Fe("div")`
  padding: 1.5rem;
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
`,Ta=Fe("div")`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,Fa=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`,Oa=Fe("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Na=Fe("div")`
  flex: 1;
`,qa=Fe("h3")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`,Pa=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  opacity: 0.9;
`,La=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,Ha=Fe("button")`
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
`,Ba=Fe("div")`
  padding: 1.25rem 1.5rem;
  background: var(--askdona-background);
  border-bottom: 1px solid var(--askdona-border);
`,Ua=Fe("h4")`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
`,Ja=Fe("p")`
  margin: 0;
  font-style: italic;
  color: var(--askdona-text);
  line-height: 1.5;
`,Va=Fe("div")`
  display: flex;
  background: var(--askdona-background);
  border-bottom: 1px solid var(--askdona-border);
`,Za=Fe("button")`
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
`,Qa=Fe("div")`
  min-height: 300px;
`,Wa=Fe("div")`
  padding: 1.5rem;
`,Ga=Fe("div")`
  margin-bottom: 2rem;
`,Xa=Fe("div")`
  margin-bottom: 2rem;
`,Ya=Fe("div")`
  margin-bottom: 2rem;
`,Ka=Fe("h4")`
  margin: 0 0 1rem;
  color: var(--askdona-text);
  font-size: 1rem;
  font-weight: 600;
`,es=Fe("div")`
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;
  color: var(--askdona-text);
  line-height: 1.6;
`,rs=Fe("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
  padding: 1.5rem;
`,ns=Fe("div")`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;
`,ts=Fe("ul")`
  margin: 0;
  padding-left: 1.5rem;
`,os=Fe("li")`
  margin: 0.5rem 0;
  color: var(--askdona-text);
  line-height: 1.5;
`,is=Fe("div")`
  color: var(--askdona-text);
`,as=Fe("h2")`
  color: var(--askdona-text);
  font-size: 1.25rem;
  margin: 1.5rem 0 1rem 0;
  font-weight: 600;
`,ss=Fe("h3")`
  color: var(--askdona-text);
  font-size: 1.125rem;
  margin: 1.25rem 0 0.75rem 0;
  font-weight: 600;
`,ls=Fe("h4")`
  color: var(--askdona-text-secondary);
  font-size: 1rem;
  margin: 1rem 0 0.5rem 0;
  font-weight: 600;
`,ds=Fe("p")`
  margin: 0 0 1rem;
  line-height: 1.6;
`,cs=Fe("li")`
  margin: 0.5rem 0;
  line-height: 1.6;
`,us=Fe("div")`
  padding: 1.5rem;
`,hs=Fe("div")`
  margin-bottom: 1rem;
`,ps=Fe("h4")`
  margin: 0;
  color: var(--askdona-text);
  font-size: 1rem;
  font-weight: 600;
`,fs=Fe("div")`
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  overflow: hidden;
`,ms=Fe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: var(--askdona-border);
  }
`,gs=Fe("div")`
  flex: 1;
  min-width: 0;
`,bs=Fe("a")`
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
`,ks=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
`,vs=Fe("div")`
  color: var(--askdona-text-secondary);
  padding: 0.25rem;
`,ys=Fe("div")`
  padding: 0 1rem 1rem 1rem;
  border-top: 1px solid var(--askdona-border);
  background: rgba(243, 244, 246, 0.5);
`,xs=Fe("p")`
  margin: 0.75rem 0;
  font-style: italic;
  color: var(--askdona-text);
  font-size: 0.875rem;
  line-height: 1.5;
`,ws=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
`,$s=Fe("div")`
  text-align: center;
  padding: 3rem 2rem;
`,Ss=Fe("div")`
  margin: 0 auto 1rem;
  width: fit-content;
`,zs=Fe("h4")`
  margin: 0 0 0.5rem;
  color: var(--askdona-text);
  font-size: 1.125rem;
`,_s=Fe("p")`
  margin: 0;
  color: var(--askdona-text-secondary);
  line-height: 1.5;
`,Cs=Fe("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
`,Ms=Fe("div")`
  margin-bottom: 0.75rem;
`,As=Fe("p")`
  margin: 0;
  color: var(--askdona-text-secondary);
`,js=Fe("div")`
  padding: 1.5rem;
`,Is=Fe("div")`
  margin-bottom: 2rem;
`,Ds=Fe("div")`
  display: grid;
  gap: 0.75rem;
`,Es=Fe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--askdona-border);

  &:last-child {
    border-bottom: none;
  }
`,Rs=Fe("span")`
  font-weight: 500;
  color: var(--askdona-text-secondary);
`,Ts=Fe("span")`
  color: var(--askdona-text);
  font-weight: 500;
  word-break: break-word;
`,Fs=Fe("div")`
  margin-top: 2rem;
`,Os=Fe("div")`
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
`,Ns=Fe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-top: 1px solid var(--askdona-border);
  background: var(--askdona-background);
`,qs=Fe("div")`
  display: flex;
  gap: 0.75rem;
`,Ps=Fe("div")`
  display: flex;
  gap: 0.5rem;
`,Ls=Fe("button")`
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
`,Hs=Fe("button")`
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
`;function Bs(e){const[r,n]=le(null),[t,o]=le(!0),[i,a]=le(null),s=pe(e=>{try{const r=e.split(".");if(3!==r.length)return null;return JSON.parse(atob(r[1]))}catch(e){return null}},[]),l=pe(async()=>{a(null);try{const r=window.location.hostname+(window.location.port?":"+window.location.port:""),t=await fetch(`${B}/session/init/${e}`,{method:"POST",headers:{"Content-Type":"application/json",Origin:window.location.origin,"X-Widget-Version":"1.0.0"},body:JSON.stringify({domain:r,timestamp:Date.now(),userAgent:navigator.userAgent})});if(!t.ok){const e=await t.json().catch(()=>({message:"Session initialization failed"}));throw new Error(e.message||`HTTP ${t.status}`)}const{secureSessionToken:o}=await t.json();if(!o)throw new Error("No session token received");const i=s(o);if(!i)throw new Error("Invalid session token format");const a=`askdona_secure_session_${e}`;localStorage.setItem(a,o);const l={token:o,isValid:!0,expiresAt:1e3*i.exp,sessionId:i.sessionId,chatflowId:i.chatflowId};return n(l),o}catch(e){throw a(e.message),e}},[e,s]),d=pe(async()=>{o(!0),a(null);try{const r=`askdona_secure_session_${e}`,t=localStorage.getItem(r);if(t){const o=s(t),i=Date.now();if(o&&1e3*o.exp>i&&o.chatflowId===e){const e={token:t,isValid:!0,expiresAt:1e3*o.exp,sessionId:o.sessionId,chatflowId:o.chatflowId};return void n(e)}localStorage.removeItem(r)}await l()}catch(e){a(e.message)}finally{o(!1)}},[e,s,l]),c=pe(async()=>{if(!r)return;if(r.expiresAt-Date.now()<18e5)try{await l()}catch(e){}},[r,l]),u=pe(async()=>{if(!r||!r.isValid)return null;if(r.expiresAt<=Date.now())try{return await l(),(null==r?void 0:r.token)||null}catch(e){return null}return await c(),r.token},[r,l,c]),h=pe(()=>{const r=`askdona_secure_session_${e}`;localStorage.removeItem(r),n(null),a(null)},[e]);return de(()=>{e&&d()},[e,d]),de(()=>{if(!r)return;const e=setInterval(()=>{c()},3e5);return()=>clearInterval(e)},[r,c]),{session:r,isInitializing:t,error:i,initializeSession:l,getValidToken:u,clearSession:h,refreshSessionIfNeeded:c}}function Us(){try{const e={userAgent:navigator.userAgent||"",language:navigator.language||"",screenResolution:`${screen.width}x${screen.height}`,timezoneOffset:(new Date).getTimezoneOffset(),platform:navigator.platform||"",cookieEnabled:navigator.cookieEnabled,localStorageEnabled:(()=>{try{const e="__localStorage_test__";return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}})()},r=document.createElement("canvas"),n=r.getContext("2d");let t="";n&&(r.width=200,r.height=50,n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(125,1,62,20),n.fillStyle="#069",n.font="11pt Arial",n.fillText("AskDona Browser Fingerprint 🔍",2,15),n.fillStyle="rgba(102, 204, 0, 0.7)",n.font="18pt Arial",n.fillText("Deep Research",4,45),t=r.toDataURL().substring(0,100));const o=[e.userAgent,e.language,e.screenResolution,e.timezoneOffset.toString(),e.platform,e.cookieEnabled.toString(),e.localStorageEnabled.toString(),t].join("|");let i=0;for(let e=0;e<o.length;e++){i=(i<<5)-i+o.charCodeAt(e),i&=i}return`fp_${Math.abs(i).toString(36).padStart(8,"0")+Date.now().toString(36).slice(-4)}`}catch(e){return`fp_${Math.random().toString(36).substring(2,15)}`}}class Js{constructor(){this.browserFingerprint=this.getOrCreateFingerprint()}getOrCreateFingerprint(){const e="askdona_browser_fingerprint";try{let r=localStorage.getItem(e);return r||(r=Us(),localStorage.setItem(e,r)),r}catch(e){return Us()}}getBrowserFingerprint(){return this.browserFingerprint}checkLocalLimits(e,r){const n=[];let t,o=!0;for(const i of r){const r=this.checkSingleLocalLimit(e,i);n.push(r),!r.allowed&&o&&(o=!1,t=r.limitType)}return{allowed:o,blockedBy:t,localChecks:n}}checkSingleLocalLimit(e,r){const n=this.getLimitKey(r),t=`${Js.STORAGE_PREFIX}${e}_${n}`;let o=this.getLimitData(t);new Date(o.resetTime)<=new Date&&(o=this.createNewLimitPeriod(r),this.saveLimitData(t,o));const i=o.count<r.limit;return{limitType:this.getLimitTypeString(r),allowed:i,currentCount:o.count,maxCount:r.limit,resetTime:new Date(o.resetTime)}}recordLocalUsage(e,r){for(const n of r){const r=this.getLimitKey(n),t=`${Js.STORAGE_PREFIX}${e}_${r}`,o=this.getLimitData(t);o.count++,this.saveLimitData(t,o)}}getTodayUsage(e){const r=`${Js.STORAGE_PREFIX}${e}_daily`,n=this.getLimitData(r);return new Date(n.resetTime)>new Date?n.count:0}clearLocalLimits(e){try{const r=[];for(let n=0;n<localStorage.length;n++){const t=localStorage.key(n);t&&t.startsWith(`${Js.STORAGE_PREFIX}${e}_`)&&r.push(t)}r.forEach(e=>localStorage.removeItem(e))}catch(e){}}getLimitData(e){try{const r=localStorage.getItem(e);if(r)return JSON.parse(r)}catch(e){}return{count:0,resetTime:new Date(Date.now()+864e5).toISOString(),period:"daily"}}saveLimitData(e,r){try{localStorage.setItem(e,JSON.stringify(r))}catch(e){}}createNewLimitPeriod(e){return{count:0,resetTime:this.calculateNextLocalReset(e).toISOString(),period:this.getLimitKey(e)}}calculateNextLocalReset(e){const r=new Date,n=new Date(r);switch(e.period){case"daily":n.setDate(r.getDate()+1),n.setHours(0,0,0,0);break;case"weekly":const t=(8-r.getDay())%7||7;n.setDate(r.getDate()+t),n.setHours(0,0,0,0);break;case"monthly":n.setMonth(r.getMonth()+1,1),n.setHours(0,0,0,0);break;case"yearly":n.setFullYear(r.getFullYear()+1,0,1),n.setHours(0,0,0,0);break;default:e.customDays&&(n.setDate(r.getDate()+e.customDays),n.setHours(0,0,0,0))}return n}getLimitKey(e){return e.customDays?`custom_${e.customDays}d`:e.period}getLimitTypeString(e){return e.customDays?`custom-${e.customDays}d`:e.period}}function Vs({chatflowId:e,onClose:r,isVisible:n=!0}){const{config:t,currentJob:o,isLoading:i,error:a,isInitializing:s,fetchConfig:l,cancelJob:d,resetJob:c,cleanup:u}=function(e){const{session:r,isInitializing:n}=Bs(e),[t,o]=le(null),[i,a]=le(null),[s,l]=le(!1),[d,c]=le(null),u=ue(new Js),h=ue(null),p=ue(null),f=pe(async(t=!1)=>{if(!(null==r?void 0:r.token)||n)return null;if(!t&&p.current&&Date.now()-p.current.timestamp<3e4)return o(p.current.data),p.current.data;const i=u.current.getBrowserFingerprint();c(null);try{const n=await fetch(`${B}/deep-research/config/${e}`,{method:"POST",headers:{"Content-Type":"application/json","X-Widget-Version":"1.0.0"},body:JSON.stringify({secureSessionToken:r.token,browserFingerprint:i})});if(!n.ok){const e=await n.json().catch(()=>({error:"Request failed"}));throw new Error(e.error||`HTTP ${n.status}`)}const t=await n.json();return p.current={data:t,timestamp:Date.now()},o(t),t}catch(e){c(e.message);const r={isEnabled:!1,canExecute:!1,credits:null,sessionLimit:{allowed:!1,currentCount:0,maxCount:0,resetTime:""},browserLimits:{allowed:!1,limits:[]},config:{maxQueryLength:500,estimatedDurationMinutes:15},error:e.message};return o(r),r}},[null==r?void 0:r.token,e,n]),m=pe(async n=>{if(!(null==r?void 0:r.token)||!(null==t?void 0:t.canExecute))throw new Error("Cannot execute Deep Research - invalid session or insufficient permissions");if(0===n.trim().length)throw new Error("Query cannot be empty");if(n.length>t.config.maxQueryLength)throw new Error(`Query too long. Maximum ${t.config.maxQueryLength} characters allowed.`);l(!0),c(null);const o=u.current.getBrowserFingerprint();try{if(t.browserLimits.limits.length>0){const r=t.browserLimits.limits.map(e=>({period:e.limitType.replace("custom-","").replace("d",""),limit:e.maxCount,customDays:e.limitType.startsWith("custom-")?parseInt(e.limitType.replace("custom-","").replace("d","")):void 0})),n=u.current.checkLocalLimits(e,r);if(!n.allowed)throw new Error(`Browser limit exceeded: ${n.blockedBy}`)}const i=await fetch(`${B}/deep-research/start`,{method:"POST",headers:{"Content-Type":"application/json","X-Widget-Version":"1.0.0"},body:JSON.stringify({secureSessionToken:r.token,query:n.trim(),chatflowId:e,browserFingerprint:o})});if(!i.ok){const e=await i.json().catch(()=>({error:"Request failed"}));throw new Error(e.error||`HTTP ${i.status}`)}const s=await i.json();if(t.browserLimits.limits.length>0){const r=t.browserLimits.limits.map(e=>({period:e.limitType.replace("custom-","").replace("d",""),limit:e.maxCount}));u.current.recordLocalUsage(e,r)}const l={jobId:s.jobId,status:"pending",query:n.trim(),startedAt:(new Date).toISOString(),creditsConsumed:s.creditsConsumed,estimatedDuration:s.estimatedDuration};return a(l),g(s.jobId),setTimeout(()=>f(!0),1e3),s}catch(e){throw l(!1),c(e.message),e}},[null==r?void 0:r.token,t,e,f]),g=pe(e=>{h.current&&h.current.close();const r=new EventSource(`${B}/deep-research/stream/${e}`);h.current=r,r.addEventListener("deep-research-start",e=>{try{JSON.parse(e.data),a(e=>e?{...e,status:"processing"}:null)}catch(e){}}),r.addEventListener("deep-research-progress",e=>{try{const r=JSON.parse(e.data);a(e=>e?{...e,status:"processing",progress:{stage:r.stage||"processing",progress:r.progress||0,timestamp:r.timestamp||(new Date).toISOString(),estimatedTimeRemaining:r.estimatedTimeRemaining,sources:r.sources}}:null)}catch(e){}}),r.addEventListener("deep-research-complete",e=>{try{const n=JSON.parse(e.data);a(e=>e?{...e,status:"completed",results:n.results,completedAt:(new Date).toISOString(),progress:{stage:"completed",progress:100,timestamp:(new Date).toISOString()}}:null),l(!1),r.close(),setTimeout(()=>f(!0),1e3)}catch(e){}}),r.addEventListener("deep-research-error",e=>{try{const n=JSON.parse(e.data);a(e=>e?{...e,status:"failed",error:n.error||"Deep Research failed",completedAt:(new Date).toISOString()}:null),l(!1),c(n.error||"Deep Research failed"),r.close()}catch(e){}}),r.onerror=e=>{r.readyState===EventSource.CLOSED&&(l(!1),setTimeout(()=>{i&&"processing"===i.status&&c("Connection lost. Please check the result later or try again.")},5e3))}},[i]),b=pe(async()=>{if(i&&(null==r?void 0:r.token))try{h.current&&(h.current.close(),h.current=null),a(e=>e?{...e,status:"cancelled",completedAt:(new Date).toISOString()}:null),l(!1)}catch(e){}},[i,null==r?void 0:r.token]),k=pe(()=>{h.current&&(h.current.close(),h.current=null),a(null),l(!1),c(null),p.current=null},[]),v=pe(()=>{h.current&&(h.current.close(),h.current=null)},[]);return de(()=>{!(null==r?void 0:r.token)||n||t||f()},[null==r?void 0:r.token,n,t,f]),de(()=>v,[v]),{config:t,currentJob:i,isLoading:s,error:d,isInitializing:n,fetchConfig:f,startDeepResearch:m,cancelJob:b,resetJob:k,cleanup:v,browserFingerprint:u.current.getBrowserFingerprint()}}(e),[h,p]=le(""),[f,m]=le([]),[g,b]=le(null),[k,v]=le(null),[y,x]=le(!1),[w,$]=le(!1),[S,z]=le(null);de(()=>{!n||t||s||l()},[n,t,s,l]),de(()=>u,[u]);const _=e=>{const r=new EventSource(`${B}/deep-research/stream/${e}`);r.addEventListener("deep-research-start",e=>{try{JSON.parse(e.data);v(e=>e?{...e,status:"processing"}:null)}catch(e){}}),r.addEventListener("deep-research-progress",e=>{try{const r=JSON.parse(e.data);v(e=>e?{...e,status:"processing",progress:{stage:r.stage||"processing",progress:r.progress||0,timestamp:r.timestamp||(new Date).toISOString(),estimatedTimeRemaining:r.estimatedTimeRemaining,sources:r.sources}}:null)}catch(e){}}),r.addEventListener("deep-research-complete",e=>{try{const n=JSON.parse(e.data);v(e=>e?{...e,status:"completed",results:n.results,completedAt:(new Date).toISOString(),progress:{stage:"completed",progress:100,timestamp:(new Date).toISOString()}}:null),r.close(),setTimeout(()=>l(!0),1e3)}catch(e){}}),r.addEventListener("deep-research-error",e=>{try{const n=JSON.parse(e.data);v(e=>e?{...e,status:"failed",error:n.error||"Deep Research failed",completedAt:(new Date).toISOString()}:null),z(n.error||"Deep Research failed"),r.close()}catch(e){}}),r.onerror=e=>{r.readyState===EventSource.CLOSED&&setTimeout(()=>{k&&"processing"===k.status&&z("Connection lost. Please check the result later or try again.")},5e3)}},C=()=>{"questionnaire"===I?(p(""),m([]),b(null),z(null)):"progress"!==I&&"results"!==I||M()},M=()=>{p(""),m([]),b(null),v(null),z(null),c(),setTimeout(()=>l(!0),500)},A=S||a,j=k||o;let I;return I=s&&!t?"loading":"completed"===(null==j?void 0:j.status)?"results":!j||"pending"!==j.status&&"processing"!==j.status?"failed"===(null==j?void 0:j.status)?"error":f.length>0&&h?"questionnaire":"trigger":"progress",Z(Zs,{children:[Z(Qs,{children:["loading"===I&&Z(Ws,{children:[Z(Gs,{children:Z(hr,{size:24,color:"white"})}),Z(Xs,{children:[Z(Ys,{children:"🔍 Loading Deep Research"}),Z(Ks,{children:"Setting up your research environment..."})]})]}),"trigger"===I&&Z(dl,{config:t,onSubmit:async e=>{if(e.trim()){p(e.trim()),z(null),x(!0);try{const r=await async function(e){try{return await U("/deep-research/follow-up",{method:"POST",body:JSON.stringify({query:e})})}catch(e){return{success:!1,questions:[],error:e.message}}}(e.trim());if(!r.success||!r.questions||0===r.questions.length)throw new Error(r.error||"No follow-up questions generated");m(r.questions),b(r.metadata)}catch(e){z(e.message||"Failed to generate follow-up questions")}finally{x(!1)}}},onRefreshConfig:()=>{z(null),l(!0)},isSubmitting:y,error:A||void 0}),"questionnaire"===I&&Z(si,{originalQuery:h,questions:f,onSubmit:async r=>{if(h&&0!==r.length){z(null),$(!0);try{const n=new Js,t=n.getBrowserFingerprint(),o=n.getBrowserFingerprint(),i=await async function(e){try{return await U("/deep-research/start-with-answers",{method:"POST",body:JSON.stringify(e)})}catch(e){throw e}}({chatflowId:e,originalQuery:h,questionnaireResponses:r,sessionId:t,fingerprint:o});if(!i.success)throw new Error(i.error||"Failed to start Deep Research");const a={jobId:i.jobId,status:i.status||"pending",query:h,startedAt:(new Date).toISOString(),creditsConsumed:i.creditsConsumed,estimatedDuration:i.estimatedDuration};v(a),_(i.jobId),setTimeout(()=>l(!0),1e3)}catch(e){z(e.message||"Failed to start Deep Research")}finally{$(!1)}}},onBack:C,isSubmitting:w,error:A||void 0}),"progress"===I&&j&&Z(Ji,{job:j,isLoading:i,onCancel:async()=>{try{!k||"pending"!==k.status&&"processing"!==k.status?await d():v(null)}catch(e){z("Failed to cancel research")}}}),"results"===I&&(null==j?void 0:j.results)&&Z(Da,{job:j,onNewResearch:M}),"error"===I&&Z(el,{children:[Z(rl,{children:Z(Ge,{size:24,color:"white"})}),Z(nl,{children:[Z(tl,{children:"Research Failed"}),Z(ol,{children:(null==j?void 0:j.error)||A||"An unexpected error occurred"}),Z(il,{children:[Z(al,{onClick:M,children:"Try Again"}),"error"===I&&f.length>0&&Z(sl,{onClick:C,children:[Z(Be,{size:16}),"Back"]})]})]})]})]}),("questionnaire"===I||"progress"===I||"results"===I)&&Z(ll,{children:Z("span",{children:"💡 Tip: You can start a new research at any time"})})]})}Js.STORAGE_PREFIX="askdona_browser_limit_";const Zs=Fe("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--askdona-background);
`,Qs=Fe("div")`
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
`,Ws=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
  margin: 1rem;
  border-radius: 0.75rem;
`,Gs=Fe("div")`
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Xs=Fe("div")`
  flex: 1;
`,Ys=Fe("h3")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`,Ks=Fe("p")`
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
`,el=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  margin: 1rem;
  border-radius: 0.75rem;
`,rl=Fe("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,nl=Fe("div")`
  flex: 1;
`,tl=Fe("h3")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`,ol=Fe("p")`
  margin: 0 0 1rem;
  font-size: 0.875rem;
  opacity: 0.9;
  line-height: 1.5;
`,il=Fe("div")`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,al=Fe("button")`
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
`,sl=Fe("button")`
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
`,ll=Fe("div")`
  padding: 0.75rem 1rem;
  text-align: center;
  font-size: 0.8125rem;
  color: var(--askdona-text-secondary);
  background: var(--askdona-border);
  border-top: 1px solid var(--askdona-border);
`;function dl({config:e,onSubmit:r,onRefreshConfig:n,isSubmitting:t=!1,error:o}){const[i,a]=le("");return Z(cl,{children:[Z(ul,{children:[Z(hl,{children:Z(hr,{size:24,color:"white"})}),Z(pl,{children:[Z(fl,{children:"🔍 Deep Research"}),Z(ml,{children:"Ask a research question and we'll analyze it thoroughly"})]})]}),Z(gl,{children:[Z("form",{onSubmit:e=>{e.preventDefault(),i.trim()&&!t&&r(i.trim())},children:[Z(bl,{value:i,onChange:e=>a(e.target.value),placeholder:"What would you like me to research? Be as specific as possible...",rows:3,disabled:t}),Z(kl,{children:Z(vl,{type:"submit",disabled:!i.trim()||t,children:t?"Analyzing...":"Start Research"})})]}),o&&Z(yl,{children:[Z(Ge,{size:16}),Z("span",{children:o})]})]})]})}const cl=Fe("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
  margin: 1rem;
`,ul=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
`,hl=Fe("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,pl=Fe("div")`
  flex: 1;
`,fl=Fe("h3")`
  margin: 0 0 0.25rem;
  font-size: 1.125rem;
  font-weight: 600;
`,ml=Fe("p")`
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
`,gl=Fe("div")`
  padding: 1.5rem;
`,bl=Fe("textarea")`
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
`,kl=Fe("div")`
  display: flex;
  justify-content: flex-end;
`,vl=Fe("button")`
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
`,yl=Fe("div")`
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
`;function xl({task:e,onRetry:r,onSendMessage:n}){const[t,o]=le(e);de(()=>{o(e)},[e]);return Z(wl,{children:[Z($l,{children:[Z(Sl,{children:"深層調査の進捗"}),Z(zl,{status:t.status,children:["pending"===t.status&&"⏳ 待機中","in-progress"===t.status&&"🔄 実行中","completed"===t.status&&"✅ 完了","failed"===t.status&&"❌ 失敗"]})]}),Z(_l,{children:[Z(Cl,{children:Z(Ml,{progress:t.progress||0})}),Z(Al,{children:[t.progress||0,"%"]})]}),Z(jl,{children:[Z(Il,{children:(e=>{switch(e){case"follow-up":return"📝";case"research-outline":return"📋";case"search":return"🔍";case"extraction":return"📊";case"new-angles":return"💡";case"synthesis":return"📄";default:return"⚙️"}})(t.stage||"follow-up")}),Z(Dl,{children:t.stage?{"follow-up":"依頼内容の整理","research-outline":"調査の計画",search:"情報収集",extraction:"情報分析","new-angles":"追加の調査",synthesis:"調査レポート作成"}[t.stage]||t.stage:"Processing..."})]}),Z(El,{children:[Z(Rl,{children:t.message||"Processing..."}),Z(Tl,{children:["更新日時: ",new Date(t.updated_at).toLocaleString("ja-JP")]})]}),"completed"===t.status&&t.summary_report&&Z(Fl,{children:[Z(Ol,{children:"調査結果"}),Z(Nl,{children:[t.summary_report.substring(0,200),"..."]}),Z(ql,{children:Z(Pl,{variant:"primary",onClick:()=>n(t.summary_report),children:"結果をチャットに送信"})})]}),"completed"===t.status&&t.checksheet_markdown&&!t.summary_report&&Z(Fl,{children:[Z(Ol,{children:"調査チェックシート"}),Z(Nl,{children:[t.checksheet_markdown.substring(0,200),"..."]}),Z(ql,{children:Z(Pl,{variant:"primary",onClick:()=>n(t.checksheet_markdown),children:"チェックシートをチャットに送信"})})]}),"failed"===t.status&&Z(ql,{children:Z(Pl,{variant:"secondary",onClick:r,children:"再試行"})})]})}const wl=Fe("div")`
  padding: 1.5rem;
  background: var(--bg-primary);
  border-radius: 12px;
  border: 1px solid var(--border-light);
`,$l=Fe("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,Sl=Fe("h3")`
  margin: 0;
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,zl=Fe("span")`
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${e=>{switch(e.status){case"pending":return"#fef3c7";case"in-progress":return"#dbeafe";case"completed":return"#d1fae5";case"failed":return"#fee2e2";default:return"#f3f4f6"}}};
  color: ${e=>{switch(e.status){case"pending":return"#92400e";case"in-progress":return"#1e40af";case"completed":return"#065f46";case"failed":return"#dc2626";default:return"#374151"}}};
`,_l=Fe("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`,Cl=Fe("div")`
  flex: 1;
  height: 8px;
  background: var(--bg-secondary);
  border-radius: 4px;
  overflow: hidden;
`,Ml=Fe("div")`
  height: 100%;
  background: var(--primary);
  width: ${e=>e.progress}%;
  transition: width 0.5s ease;
`,Al=Fe("span")`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  min-width: 3rem;
`,jl=Fe("div")`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,Il=Fe("span")`
  font-size: 1.5rem;
`,Dl=Fe("span")`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
`,El=Fe("div")`
  margin-bottom: 1rem;
`,Rl=Fe("p")`
  margin: 0 0 0.5rem 0;
  color: var(--text-secondary);
  line-height: 1.5;
`,Tl=Fe("div")`
  font-size: 0.75rem;
  color: var(--text-secondary);
`,Fl=Fe("div")`
  background: var(--bg-secondary);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`,Ol=Fe("h4")`
  margin: 0 0 0.75rem 0;
  color: var(--text-primary);
  font-size: 0.95rem;
  font-weight: 600;
`,Nl=Fe("div")`
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`,ql=Fe("div")`
  display: flex;
  gap: 0.75rem;
`,Pl=Fe("button")`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${e=>"primary"===e.variant?"\n    background: var(--primary);\n    color: white;\n\n    &:hover {\n      background: var(--primary-hover);\n    }\n  ":"\n    background: var(--bg-secondary);\n    color: var(--text-primary);\n    border: 1px solid var(--border-light);\n\n    &:hover {\n      background: var(--bg-hover);\n    }\n  "}
`,Ll=Fe("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-primary);
`,Hl=Fe("div")`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-light);
  background: var(--bg-primary);
`,Bl=Fe("button")`
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
`,Ul=Fe("h2")`
  margin: 0;
  margin-left: 1rem;
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,Jl=Fe("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`,Vl=Fe("div")`
  margin-bottom: 2rem;
`,Zl=Fe("textarea")`
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
`,Ql=Fe("div")`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`,Wl=Fe("button")`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;

  ${e=>"primary"===e.variant?"\n    background: var(--primary);\n    color: white;\n\n    &:hover:not(:disabled) {\n      background: var(--primary-hover);\n    }\n\n    &:disabled {\n      background: var(--bg-secondary);\n      color: var(--text-secondary);\n      cursor: not-allowed;\n    }\n  ":"\n    background: var(--bg-secondary);\n    color: var(--text-primary);\n    border: 1px solid var(--border-light);\n\n    &:hover:not(:disabled) {\n      background: var(--bg-hover);\n    }\n\n    &:disabled {\n      color: var(--text-secondary);\n      cursor: not-allowed;\n    }\n  "}
`,Gl=Fe("div")`
  color: #ef4444;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;function Xl({chatFlowId:e,sessionId:r,messages:n,onBack:t,onSendMessage:o,baseUrl:i}){const[a,s]=le("input"),[l,d]=le(""),[c,u]=le(null),[h,p]=le(null),[f,m]=le(!1),{getValidToken:g,isInitializing:b,session:k}=Bs(e);de(()=>{if("execution"!==a||!c)return;if("completed"===c.status||"failed"===c.status)return;let e;const n=async()=>{try{const n=B.replace("/api/embed/v1",""),t=(null==k?void 0:k.sessionId)||r,o=await fetch(`${n}/api/embed/v1/rag-deep-research/status?sessionId=${t}`);if(!o.ok)throw new Error("Failed to fetch task status");const i=await o.json();i.task&&(u(i.task),"completed"!==i.task.status&&"failed"!==i.task.status||e&&clearInterval(e))}catch(r){r instanceof TypeError&&r.message.includes("Failed to fetch")&&e&&clearInterval(e)}};return n(),e=setInterval(n,5e3),()=>{e&&clearInterval(e)}},[a,r,i,k]);const v=pe(async()=>{if(l.trim()){m(!0),p(null);try{await y(l,n)}catch(e){p(e instanceof Error?e.message:"Failed to start research"),m(!1)}}},[l,n]),y=pe(async(n,t)=>{try{const o=await g();if(!o)throw new Error("Failed to get valid session token");const i=B.replace("/api/embed/v1",""),a=(null==k?void 0:k.sessionId)||r,l=await fetch(`${i}/api/embed/v1/rag-deep-research/executor`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userQuestion:n,chatFlowId:e,sessionId:a,secureSessionToken:o,messages:t,report_settings:{reportFormat:"business-report",internetEnabled:!0,language:"japanese"}})});if(!l.ok)throw new Error(`Failed to start research: ${l.status}`);const d=await l.json();u({id:d.taskId,session_id:a,status:"pending",stage:"follow-up",progress:0,message:"深層調査を開始しています...",checksheet_markdown:null,tool_usage_plan:null,execution_results:null,final_report_message_id:null,summary_report:null,research_id:null,created_at:(new Date).toISOString(),updated_at:(new Date).toISOString(),report_settings:{reportFormat:"business-report",internetEnabled:!0,language:"japanese"}}),s("execution")}catch(e){throw e}finally{m(!1)}},[i,e,r,g,k]),x=pe(()=>{s("input"),u(null),p(null),d("")},[]);return Z(Ll,{children:[Z(Hl,{children:[Z(Bl,{onClick:t,children:[Z("span",{children:"←"}),"戻る"]}),Z(Ul,{children:"RAG 深層調査"})]}),Z(Jl,{children:[h&&Z(Gl,{children:h}),b?Z(Vl,{children:Z("div",{style:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)"},children:"セッションを初期化しています..."})}):"input"===a&&Z(Vl,{children:[Z(Zl,{value:l,onChange:e=>d(e.currentTarget.value),placeholder:"深層調査を行いたいトピックや質問を入力してください...",disabled:f}),Z(Ql,{children:[Z(Wl,{variant:"secondary",onClick:t,children:"キャンセル"}),Z(Wl,{variant:"primary",onClick:v,disabled:!l.trim()||f,children:f?"処理中...":"調査を開始"})]})]}),"execution"===a&&c&&Z(xl,{task:c,onRetry:x,onSendMessage:o})]})]})}const Yl=Re`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Kl=Re`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,ed=Re`
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
`;function rd({isOpen:e,onClose:r,currentMode:n,onModeSwitch:t,messages:o,isLoading:i,streamingContent:a,onSendMessage:s,onSendExampleQuestion:l,error:d,config:c,currentState:u,chatMode:h,onChatModeChange:p,sessionId:f,onFeedbackSubmit:m,onClearChat:g,showIntro:b,displayMode:k="modal",metadataFilters:v,onMetadataFiltersChange:x}){const w=ue(null);if(de(()=>{if(!e)return;const n=e=>{"Escape"===e.key&&r()},t=e=>{"fullscreen"!==k&&w.current&&w.current.contains&&"function"==typeof w.current.contains&&!w.current.contains(e.target)&&r()};return document.addEventListener("keydown",n),document.addEventListener("mousedown",t),()=>{document.removeEventListener("keydown",n),document.removeEventListener("mousedown",t)}},[e,r]),!e)return null;return Z(nd,{onClick:e=>{"fullscreen"!==k&&e.target===e.currentTarget&&r()},displayMode:k,children:Z(td,{ref:w,displayMode:k,children:[Z(od,{children:[Z(id,{children:(c.language,"AskDona")}),Z(ad,{children:[c.enableRagDeepResearch&&Z(sd,{active:"rag-deep-research"===n,onClick:()=>t("rag-deep-research"),children:[Z(cr,{size:14,style:{marginRight:"4px"}}),(c.language,"RAG Deep Research")]}),"fullscreen"!==k&&Z(ld,{onClick:r,children:"×"})]})]}),Z(dd,{children:"ask-ai"===n?Z(Ot,{messages:o,isLoading:i,streamingContent:a,onSendMessage:s,onSendExampleQuestion:l,error:d,config:c,currentState:u,chatMode:h,onChatModeChange:p,sessionId:f,onFeedbackSubmit:m,showIntro:b,metadataFilters:v,onMetadataFiltersChange:x,onClearChat:g,currentMode:n,onModeSwitch:e=>t(e)}):"search"===n?Z(bo,{config:c,currentMode:n,onModeSwitch:t},"search-view"):"deep-research"===n?Z(Vs,{chatflowId:c.chatflowId,onClose:()=>t("ask-ai"),isVisible:"deep-research"===n}):"rag-deep-research"===n&&c.enableRagDeepResearch?Z(Xl,{chatFlowId:c.chatflowId,sessionId:f,messages:o.map(e=>({role:e.role,content:e.content,createdAt:e.createdAt,id:e.id})),onBack:()=>t("ask-ai"),onSendMessage:e=>s(e),baseUrl:window.location.origin}):null}),Z(cd,{children:[Z(ud,{children:["Powered by ",Z(hd,{href:"https://askdona.com",target:"_blank",style:"color: inherit; text-decoration: none;",children:"AskDona"})]}),Z(pd,{children:"ja"===c.language?Z(y,{children:[Z("div",{children:"Boostモードは、より多角的な視点から多くの文書を分析して回答します。通常モードより回答生成までに時間がかかります。"}),Z("div",{children:"RAGシステムは誤った情報を提供することがあります。重要な情報はご自身で確認してください。"})]}):Z(y,{children:[Z("div",{children:"Boost mode analyzes more documents from multiple perspectives. It takes longer than normal mode."}),Z("div",{children:"RAG systems may provide incorrect information. Please verify important information yourself."})]})})]})]})})}Re`
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
`;const nd=Fe("div")`
  position: fixed;
  inset: 0;
  background: ${e=>"fullscreen"===e.displayMode?"transparent":"rgba(0, 0, 0, 0.5)"};
  backdrop-filter: ${e=>"fullscreen"===e.displayMode?"none":"blur(4px)"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  padding: ${e=>"fullscreen"===e.displayMode?"0":"clamp(0.75rem, 2.5vw, 1.5rem)"};
  animation: ${Yl} 0.2s ease-out;
`,td=Fe("div")`
  background: var(--askdona-surface);
  border-radius: ${e=>"fullscreen"===e.displayMode?"0":"1rem"};
  width: ${e=>"fullscreen"===e.displayMode?"100vw":"min(72rem, calc(100vw - 2rem))"};
  max-width: ${e=>"fullscreen"===e.displayMode?"100vw":"min(72rem, calc(100vw - 2rem))"};
  height: ${e=>"fullscreen"===e.displayMode?"100vh":"min(90vh, calc(100vh - 2rem))"};
  max-height: ${e=>"fullscreen"===e.displayMode?"100vh":"min(1000px, calc(100vh - 2rem))"};
  box-shadow: ${e=>"fullscreen"===e.displayMode?"none":"0 25px 50px -12px rgba(0, 0, 0, 0.25)"};
  display: flex;
  flex-direction: column;
  animation: ${e=>"fullscreen"===e.displayMode?"none":Kl} 0.3s ease-out;
  overflow: hidden;

  @media (max-width: 640px) {
    border-radius: ${e=>"fullscreen"===e.displayMode?"0":"0.75rem"};
    width: ${e=>"fullscreen"===e.displayMode?"100vw":"calc(100vw - 1.5rem)"};
    max-width: ${e=>"fullscreen"===e.displayMode?"100vw":"calc(100vw - 1.5rem)"};
    height: ${e=>"fullscreen"===e.displayMode?"100vh":"calc(100vh - 1.5rem)"};
    max-height: ${e=>"fullscreen"===e.displayMode?"100vh":"calc(100vh - 1.5rem)"};
  }
`,od=Fe("header")`
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`,id=Fe("h2")`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: var(--askdona-text);
  font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
`,ad=Fe("div")`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,sd=Fe("button")`
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
`,ld=Fe("button")`
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
`,dd=Fe("main")`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,cd=Fe("footer")`
  padding: 0.75rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
`,ud=Fe("span")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
`,hd=Fe("a")`
  font-size: 0.75rem;
  color: var(--askdona-primary);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,pd=Fe("div")`
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
`;function fd({onClick:e,position:r}){return Z(md,{onClick:e,position:r,children:Z("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Z("path",{d:"M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.9706 16.9706 21 12 21C10.4077 21 8.88275 20.5699 7.5389 19.7447L3 21L4.25553 16.4611C3.43012 15.1173 3 13.5923 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}const md=Fe("button")`
  position: fixed;
  bottom: 1.25rem;
  ${e=>"bottom-right"===e.position?"right: 1.25rem;":"left: 1.25rem;"}
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  background: var(--askdona-primary, #2563eb);
  color: var(--askdona-background, #ffffff);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  animation: ${ed} 0.5s ease-out;
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
`;function gd(e){const[r,n]=le({isValid:!1,error:null,config:null});return de(()=>{const r=async()=>{try{const r=await async function(e){try{return await U(`/validate/${e}`,{method:"POST",body:JSON.stringify({origin:window.location.origin})})}catch(e){return{isValid:!1,error:e.message}}}(e);n({isValid:r.isValid,error:r.error?new Error(r.error):null,config:r.config||null})}catch(e){n({isValid:!1,error:e,config:null})}};e&&r()},[e]),r}const bd="askdona_widget_",kd=864e5;function vd(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e)}function yd(e){const r=`${bd}messages_${e}`;try{const e=localStorage.getItem(r);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n:n.messages||[]}catch(e){return[]}}function xd(e){var r;const n=`${bd}messages_${e}`;try{const e=localStorage.getItem(n);if(!e)return null;const t=JSON.parse(e);return!Array.isArray(t)&&t.sessionId&&(null===(r=t.messages)||void 0===r?void 0:r.length)>0?t.sessionId:null}catch(e){return null}}function wd(e){[`${bd}session_${e}`,`${bd}messages_${e}`].forEach(e=>{try{localStorage.removeItem(e)}catch(e){}})}function $d(e){const[r]=le(()=>{if(yd(e).length>0){const r=xd(e);if(r)return r}const r=function(e){const r=`${bd}session_${e}`;try{const e=localStorage.getItem(r);if(e){const r=JSON.parse(e);if(r.expiresAt>Date.now()&&vd(r.id))return r.id}}catch(e){}const n=yd(e).length>0;if(n){const n=xd(e);if(n&&vd(n)){const e={id:n,createdAt:Date.now(),expiresAt:Date.now()+kd};try{localStorage.setItem(r,JSON.stringify(e))}catch(e){}return n}}try{localStorage.removeItem(r),n||localStorage.removeItem(`${bd}messages_${e}`)}catch(e){}const t={id:H(),createdAt:Date.now(),expiresAt:Date.now()+kd};try{localStorage.setItem(r,JSON.stringify(t))}catch(e){}return t.id}(e);return r}),[n,t]=le(()=>yd(e)),[o,i]=le(!1),[a,s]=le(""),[l,d]=le(null),[c,u]=le("idle"),h=ue(null),p=ue(null),f=ue(""),m=ue(null);de(()=>{if(n.length>0){const t=n[n.length-1];!function(e,r,n){const t=`${bd}messages_${e}`;try{const e=localStorage.getItem(t),o=e?JSON.parse(e):{sessionId:null,messages:[]};n&&!o.sessionId&&(o.sessionId=n);const i=o.messages||[],a=i.findIndex(e=>e.id===r.id);-1!==a?i[a]=r:i.push(r),i.length>50&&i.splice(0,i.length-50),o.messages=i,localStorage.setItem(t,JSON.stringify(o))}catch(e){}}(e,t,r)}},[n,e,r]);const g=pe(()=>{t([]),wd(e)},[e]),b=pe(async(o,a="standard",l=null,c=a,g)=>{try{const b={id:H(),role:"user",content:o,createdAt:(new Date).toISOString(),metadata:{mode:a}};t(e=>[...e,b]),i(!0),d(null),s(""),u("thinking"),f.current="",m.current=null;const k={id:H(),role:"assistant",content:"",createdAt:(new Date).toISOString(),metadata:{mode:a}};p.current=k,h.current=new AbortController,await async function({chatflowId:e,sessionId:r,message:n,messages:t,mode:o="standard",endpoint:i,userMessageId:a,assistantMessageId:s,metadataFilters:l,requestMessagesOverride:d,signal:c,onChunk:u}){var h;const p=e=>{let r="";const n=[],t=[];let o=e;for(;o.includes("\0");){const e=o.split("\0");o=e.pop()||"";for(const o of e)if(o)if(o.startsWith("__METADATA__:"))n.push(o.substring(13).replace(/\n$/,""));else if(o.startsWith("__SEARCH_QUERIES__:"))t.push(o.substring(19).replace(/\n$/,""));else{if(o.startsWith("__STATE__:")||o.startsWith("__SEARCH__:")||o.startsWith("__SUMMARY__:"))continue;r+=o}}return o&&(r+=o),{content:r,metadataChunks:n,searchQueryChunks:t}},f=(e,r)=>{if(e.includes("\0")){r.buffer+=e;const n=r.buffer.split("\0");r.buffer=n[n.length-1];for(let e=0;e<n.length-1;e++){const r=n[e];if(r)if(r.startsWith("__STATE__:"))u({type:"state",data:r.substring(10).replace(/\n$/,"")});else if(r.startsWith("__SEARCH__:"))u({type:"search",data:r.substring(11).replace(/\n$/,"")});else if(r.startsWith("__METADATA__:"))u({type:"metadata",data:r.substring(13).replace(/\n$/,"")});else if(r.startsWith("__SEARCH_QUERIES__:"))u({type:"search-queries",data:r.substring(19).replace(/\n$/,"")});else if(r.startsWith("__SUMMARY__:"))try{JSON.parse(r.substring(13))}catch(e){}else u({type:"content",data:r})}}else e.trim()&&u({type:"content",data:e})},m="example"===i?`${B}/chat-example/${e}`:`${B}/chat/${e}/${i||o}`,g=await fetch(m,{method:"POST",headers:{"Content-Type":"application/json","X-Widget-Version":"1.0.0"},body:JSON.stringify({userQuestion:n,sessionId:r,messages:(null!=d?d:t).map(e=>({role:e.role,content:e.content,createdAt:e.createdAt})),mode:o,boostMode:"boost"===o||void 0,userMessageId:a,assistantMessageId:s,metadataFilters:l}),signal:c}),b={};if(g.headers.forEach((e,r)=>{b[r]=e}),!g.ok){const e=await g.json().catch(()=>({message:"Request failed"}));throw new Error(e.message||`HTTP ${g.status}`)}if("example"===i&&"HIT"===g.headers.get("x-example-cache")){const e=await g.arrayBuffer(),r=p(new TextDecoder("utf-8").decode(new Uint8Array(e)));return r.content&&u({type:"content",data:r.content}),r.metadataChunks.forEach(e=>u({type:"metadata",data:e})),r.searchQueryChunks.forEach(e=>u({type:"search-queries",data:e})),void u({type:"state",data:"complete"})}if("example"===i){const e=await g.arrayBuffer(),r=p(new TextDecoder("utf-8").decode(new Uint8Array(e)));return r.content&&u({type:"content",data:r.content}),r.metadataChunks.forEach(e=>u({type:"metadata",data:e})),r.searchQueryChunks.forEach(e=>u({type:"search-queries",data:e})),void u({type:"state",data:"complete"})}const k=null===(h=g.body)||void 0===h?void 0:h.getReader();if(!k)throw new Error("No response body");const v=new TextDecoder,y={buffer:""};try{for(;;){const{done:e,value:r}=await k.read();if(e)break;f(v.decode(r,{stream:!0}),y)}y.buffer&&!y.buffer.startsWith("__")&&u({type:"content",data:y.buffer})}finally{k.releaseLock()}}({chatflowId:e,sessionId:r,message:o,messages:n,mode:a,userMessageId:b.id,assistantMessageId:k.id,metadataFilters:l,endpoint:c,requestMessagesOverride:g,signal:h.current.signal,onChunk:e=>{if("content"===e.type)f.current+=e.data,s(f.current);else if("metadata"===e.type)try{const r=JSON.parse(e.data);m.current={...m.current,docMetadata:r,mode:a}}catch(e){}else"state"===e.type&&u(e.data)}})}catch(e){"AbortError"===e.name||d(e)}finally{p.current&&f.current.trim()&&t(e=>[...e,{...p.current,content:f.current.trim(),metadata:{...p.current.metadata,...m.current}}]),i(!1),s(""),u("idle"),h.current=null,p.current=null,f.current="",m.current=null}},[e,n]),k=pe((e,r="standard",n=null)=>{b(e,r,n,r)},[b]),v=pe((r,n=null)=>{t([]),wd(e),b(r,"boost",null,"example",[])},[e,b]),y=pe(async(n,o,i)=>{try{t(e=>e.map(e=>e.id===n?{...e,metadata:{...e.metadata,feedback:{rating:o,content:i,submittedAt:(new Date).toISOString(),isSubmitted:!0}}}:e));const a={embedMessageId:n,embedSessionId:r,chatflowId:e,feedbackType:"combined",feedbackData:{rating:"THUMBS_UP"===o?"thumbs_up":"thumbs_down",content:i||null},metadata:{domain:window.location.hostname,url:window.location.href,userAgent:navigator.userAgent}},s=await fetch(`${B}/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!s.ok){const e=await s.text();throw new Error(`Failed to submit feedback: ${s.statusText} - ${e}`)}await s.json()}catch(e){throw t(e=>e.map(e=>e.id===n?{...e,metadata:{...e.metadata,feedback:void 0}}:e)),e}},[r,e]);return{messages:n,sendMessage:k,sendExampleQuestion:v,isLoading:o,streamingContent:a,error:l,currentState:c,sessionId:r,submitFeedback:y,clearChat:g}}function Sd(e,r){const n=parseInt(e.replace("#",""),16),t=Math.round(2.55*r),o=(n>>16)-t,i=(n>>8&255)-t,a=(255&n)-t;return"#"+(16777216+65536*(o<255?o<1?0:o:255)+256*(i<255?i<1?0:i:255)+(a<255?a<1?0:a:255)).toString(16).slice(1)}function zd(e,r){const n=parseInt(e.replace("#",""),16),t=Math.round(2.55*r),o=(n>>16)+t,i=(n>>8&255)+t,a=(255&n)+t;return"#"+(16777216+65536*(o<255?o<1?0:o:255)+256*(i<255?i<1?0:i:255)+(a<255?a<1?0:a:255)).toString(16).slice(1)}"undefined"!=typeof window&&function(){try{const e=Object.keys(localStorage),r=Date.now();e.forEach(e=>{if(e.startsWith(`${bd}session_`))try{const n=JSON.parse(localStorage.getItem(e)||"{}");if(n.expiresAt&&n.expiresAt<r){localStorage.removeItem(e);const r=e.replace(`${bd}session_`,"");localStorage.removeItem(`${bd}messages_${r}`)}}catch(r){localStorage.removeItem(e)}})}catch(e){}}();const _d={colors:{primary:"#10316f",primaryDark:Sd("#10316f",10),primaryLight:zd("#10316f",10),background:"#ffffff",surface:"#f8f9fa",text:"#353a5c",textSecondary:"#6b6f8a",border:"#e5e7eb",error:"#EF4444",success:"#10B981"},fonts:{base:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',mono:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1)"}},Cd={colors:{primary:"#10316f",primaryDark:Sd("#10316f",10),primaryLight:zd("#10316f",10),background:"#0f172a",surface:"#111827",text:"#e5e7eb",textSecondary:"#9ca3af",border:"#1f2937",error:"#F87171",success:"#34D399"},fonts:{base:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',mono:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.3)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.4)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.5)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.6)"}};function Md(e,r){let n=_d;if("dark"===e)n=Cd;else if("auto"===e){n=window.matchMedia("(prefers-color-scheme: dark)").matches?Cd:_d}n={...n,colors:{...n.colors,primary:"#10316f",primaryDark:Sd("#10316f",10),primaryLight:zd("#10316f",10)}};const t=function(e){const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?`${parseInt(r[1],16)}, ${parseInt(r[2],16)}, ${parseInt(r[3],16)}`:"0, 0, 0"}(n.colors.primary);return document.documentElement.style.setProperty("--askdona-primary-rgb",t),n}function Ad(e,r){for(var n in r)e[n]=r[n];return e}function jd(e,r){for(var n in e)if("__source"!==n&&!(n in r))return!0;for(var t in r)if("__source"!==t&&e[t]!==r[t])return!0;return!1}function Id(e,r){this.props=e,this.context=r}(Id.prototype=new x).isPureReactComponent=!0,Id.prototype.shouldComponentUpdate=function(e,r){return jd(this.props,e)||jd(this.state,r)};var Dd=n.v;n.v=function(e){e.type&&e.type.U&&e.ref&&(e.props.ref=e.ref,e.ref=null),Dd&&Dd(e)};var Ed="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var Rd=n.$;n.$=function(e,r,n,t){if(e.then)for(var o,i=r;i=i.m;)if((o=i.S)&&o.S)return null==r.$&&(r.$=n.$,r.h=n.h),o.S(e,r);Rd(e,r,n,t)};var Td=n.unmount;function Fd(e,r,n){return e&&(e.S&&e.S.H&&(e.S.H.m.forEach(function(e){"function"==typeof e.S&&e.S()}),e.S.H=null),null!=(e=Ad({},e)).S&&(e.S.I===n&&(e.S.I=r),e.S.$=!0,e.S=null),e.h=e.h&&e.h.map(function(e){return Fd(e,r,n)})),e}function Od(e,r,n){return e&&n&&(e._=null,e.h=e.h&&e.h.map(function(e){return Od(e,r,n)}),e.S&&e.S.I===r&&(e.$&&n.appendChild(e.$),e.S.$=!0,e.S.I=n)),e}function Nd(){this.M=0,this.o=null,this.v=null}function qd(e){var r=e.m.S;return r&&r.ie&&r.ie(e)}function Pd(){this.i=null,this.l=null}n.unmount=function(e){var r=e.S;r&&r.ae&&r.ae(),r&&32&e.M&&(e.type=null),Td&&Td(e)},(Nd.prototype=new x).S=function(e,r){var n=r.S,t=this;null==t.o&&(t.o=[]),t.o.push(n);var o=qd(t._),i=!1,a=function(){i||(i=!0,n.ae=null,o?o(s):s())};n.ae=a;var s=function(){if(! --t.M){if(t.state.ie){var e=t.state.ie;t._.h[0]=Od(e,e.S.I,e.S.se)}var r;for(t.setState({ie:t.v=null});r=t.o.pop();)r.forceUpdate()}};t.M++||32&r.M||t.setState({ie:t.v=t._.h[0]}),e.then(a,a)},Nd.prototype.componentWillUnmount=function(){this.o=[]},Nd.prototype.render=function(e,r){if(this.v){if(this._.h){var n=document.createElement("div"),t=this._.h[0].S;this._.h[0]=Fd(this.v,n,t.se=t.I)}this.v=null}var o=r.ie&&k(y,null,e.fallback);return o&&(o.M&=-33),[k(y,null,r.ie?null:e.children),o]};var Ld=function(e,r,n){if(++n[1]===n[0]&&e.l.delete(r),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(Pd.prototype=new x).ie=function(e){var r=this,n=qd(r._),t=r.l.get(e);return t[0]++,function(o){var i=function(){r.props.revealOrder?(t.push(o),Ld(r,e,t)):o()};n?n(i):i()}},Pd.prototype.render=function(e){this.i=null,this.l=new Map;var r=M(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&r.reverse();for(var n=r.length;n--;)this.l.set(r[n],this.i=[1,0,this.i]);return e.children},Pd.prototype.componentDidUpdate=Pd.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(r,n){Ld(e,n,r)})};var Hd="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,Bd=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ud=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Jd=/[A-Z0-9]/g,Vd="undefined"!=typeof document,Zd=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};x.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(x.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(r){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:r})}})});var Qd=n.event;function Wd(){}function Gd(){return this.cancelBubble}function Xd(){return this.defaultPrevented}n.event=function(e){return Qd&&(e=Qd(e)),e.persist=Wd,e.isPropagationStopped=Gd,e.isDefaultPrevented=Xd,e.nativeEvent=e};var Yd={enumerable:!1,configurable:!0,get:function(){return this.class}},Kd=n.vnode;n.vnode=function(e){"string"==typeof e.type&&function(e){var r=e.props,n=e.type,t={},o=-1===n.indexOf("-");for(var i in r){var a=r[i];if(!("value"===i&&"defaultValue"in r&&null==a||Vd&&"children"===i&&"noscript"===n||"class"===i||"className"===i)){var s=i.toLowerCase();"defaultValue"===i&&"value"in r&&null==r.value?i="value":"download"===i&&!0===a?a="":"translate"===s&&"no"===a?a=!1:"o"===s[0]&&"n"===s[1]?"ondoubleclick"===s?i="ondblclick":"onchange"!==s||"input"!==n&&"textarea"!==n||Zd(r.type)?"onfocus"===s?i="onfocusin":"onblur"===s?i="onfocusout":Ud.test(i)&&(i=s):s=i="oninput":o&&Bd.test(i)?i=i.replace(Jd,"-$&").toLowerCase():null===a&&(a=void 0),"oninput"===s&&t[i=s]&&(i="oninputCapture"),t[i]=a}}"select"==n&&t.multiple&&Array.isArray(t.value)&&(t.value=M(r.children).forEach(function(e){e.props.selected=-1!=t.value.indexOf(e.props.value)})),"select"==n&&null!=t.defaultValue&&(t.value=M(r.children).forEach(function(e){e.props.selected=t.multiple?-1!=t.defaultValue.indexOf(e.props.value):t.defaultValue==e.props.value})),r.class&&!r.className?(t.class=r.class,Object.defineProperty(t,"className",Yd)):(r.className&&!r.class||r.class&&r.className)&&(t.class=t.className=r.className),e.props=t}(e),e.$$typeof=Hd,Kd&&Kd(e)};var ec=n.j;n.j=function(e){ec&&ec(e),e.S};var rc=n.diffed;n.diffed=function(e){rc&&rc(e);var r=e.props,n=e.$;null!=n&&"textarea"===e.type&&"value"in r&&r.value!==n.value&&(n.value=null==r.value?"":r.value)},Te(k);const nc=function(e){function r(r){var n=Ad({},r);return delete n.ref,e(n,r.ref||null)}return r.$$typeof=Ed,r.render=r,r.prototype.isReactComponent=r.U=!0,r.displayName="ForwardRef("+(e.displayName||e.name)+")",r}(({config:e},r)=>{const[n,t]=le({isOpen:"fullscreen"===e.displayMode,currentMode:"ask-ai",messages:[],isLoading:!1,streamingContent:"",error:null,chatMode:"standard",showIntro:!0,metadataFilters:null}),{error:o,config:i}=gd(e.chatflowId),[a,s]=le(null);de(()=>{J(e.chatflowId,e.language).then(e=>{e&&e.embedConfig&&s(e.embedConfig)}).catch(()=>{s(null)})},[e.chatflowId,e.language]);const l={...e};if(a){if(a.introTitle&&(l.introTitle=a.introTitle),a.introMessage&&(l.introMessage=a.introMessage),a.exampleQuestions&&(l.exampleQuestions=a.exampleQuestions),a.appearanceSettings){const e=a.appearanceSettings.primaryColor||void 0,r=a.appearanceSettings.theme||void 0,n=a.appearanceSettings.position||void 0,t=a.appearanceSettings.displayMode||void 0;l.primaryColor=l.primaryColor||e,l.theme=l.theme||r,l.position=l.position||n,l.displayMode=l.displayMode||t}a.featureFlags&&("boolean"==typeof a.featureFlags.enableBoostMode&&(l.defaultBoostMode=!!a.featureFlags.enableBoostMode),"boolean"==typeof a.featureFlags.allowBoostModeToggle&&(l.allowBoostModeToggle=!!a.featureFlags.allowBoostModeToggle),"boolean"==typeof a.featureFlags.enableRagDeepResearch&&(l.enableRagDeepResearch=!!a.featureFlags.enableRagDeepResearch))}else i&&(l.introTitle=i.introTitle,l.introMessage=i.introMessage,l.exampleQuestions=i.exampleQuestions,l.theme=i.theme,l.position=i.position,l.primaryColor=i.primaryColor,l.defaultBoostMode=i.defaultBoostMode,l.allowBoostModeToggle=i.allowBoostModeToggle,l.displayMode=e.displayMode);const d=Md(l.theme||"light",l.primaryColor),{messages:c,sendMessage:u,sendExampleQuestion:h,isLoading:p,streamingContent:f,error:m,currentState:g,sessionId:b,submitFeedback:k,clearChat:v}=$d(e.chatflowId);de(()=>{t(e=>({...e,messages:c,isLoading:p,streamingContent:f,error:o||m,showIntro:0===c.length&&e.showIntro}))},[c,p,f,o,m]),de(()=>{if(i){const e=i.defaultBoostMode?"boost":"standard";t(r=>r.chatMode===e?r:{...r,chatMode:e})}},[i]),function(e,r,n){Y=6,ce(function(){if("function"==typeof e){var n=e(r());return function(){e(null),n&&"function"==typeof n&&n()}}if(e)return e.current=r(),function(){return e.current=null}},null==n?n:n.concat(e))}(r,()=>({open:()=>{t(e=>({...e,isOpen:!0}))},close:()=>{t(e=>({...e,isOpen:!1}))},sendMessage:e=>{t(e=>({...e,isOpen:!0})),u(e)}}),[u]);const y=ue(null);if(de(()=>{if(!y.current)return;const e=y.current;e.style.setProperty("--askdona-primary",d.colors.primary),e.style.setProperty("--askdona-primary-dark",d.colors.primaryDark),e.style.setProperty("--askdona-primary-light",d.colors.primaryLight),e.style.setProperty("--askdona-background",d.colors.background),e.style.setProperty("--askdona-surface",d.colors.surface),e.style.setProperty("--askdona-text",d.colors.text),e.style.setProperty("--askdona-text-secondary",d.colors.textSecondary),e.style.setProperty("--askdona-border",d.colors.border),e.style.setProperty("--askdona-error",d.colors.error),e.style.setProperty("--askdona-success",d.colors.success),e.style.setProperty("--askdona-font-base",d.fonts.base),e.style.setProperty("--askdona-font-mono",d.fonts.mono),e.style.setProperty("--askdona-bg-secondary",d.colors.surface),e.style.setProperty("--askdona-bg-hover",d.colors.primaryLight+"20"),e.style.setProperty("--askdona-surface-color",d.colors.background),e.style.setProperty("--askdona-border-color",d.colors.border)},[d]),o)return null;return Z("div",{ref:y,style:{fontFamily:"var(--askdona-font-base)",color:"var(--askdona-text)"},children:[!n.isOpen&&"fullscreen"!==l.displayMode&&Z(fd,{onClick:()=>{t(e=>({...e,isOpen:!0}))},position:l.position||"bottom-right"}),(n.isOpen||"fullscreen"===l.displayMode)&&Z(rd,{isOpen:n.isOpen||"fullscreen"===l.displayMode,onClose:()=>{"fullscreen"!==l.displayMode&&t(e=>({...e,isOpen:!1}))},currentMode:n.currentMode,onModeSwitch:e=>{t(r=>({...r,currentMode:e}))},messages:n.messages,isLoading:n.isLoading,streamingContent:n.streamingContent,onSendMessage:(e,r,o)=>{const i=r||n.chatMode;u(e,i,o||n.metadataFilters),t(e=>({...e,showIntro:!1}))},onSendExampleQuestion:(e,r)=>{h(e,r||n.metadataFilters),t(e=>({...e,showIntro:!1}))},error:n.error,config:l,currentState:g,chatMode:n.chatMode,onChatModeChange:e=>{t(r=>({...r,chatMode:e}))},sessionId:b,onFeedbackSubmit:k,onClearChat:()=>{v(),t(e=>({...e,showIntro:!0}))},showIntro:n.showIntro,displayMode:l.displayMode||"modal",metadataFilters:n.metadataFilters,onMetadataFiltersChange:e=>{t(r=>({...r,metadataFilters:e}))}})]})});nc.displayName="Widget";const tc=["chatflow-id","theme","position","primary-color","language","display-mode","custom-css","debug","instrument-serif-regular","instrument-serif-600"];class oc extends HTMLElement{constructor(){super(...arguments),this.widgetRef={current:null},this.initialised=!1,this.gooberReady=!1}static get observedAttributes(){return tc}connectedCallback(){if(this.initialised)return;this.initialised=!0,this.shadow=this.attachShadow({mode:"open"});const e=document.createElement("style");e.textContent="\n  /* Ensure font available within shadow */\n  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block');\n  :host {\n    all: initial;\n    /* Avoid layout/paint containment so fixed-position children (launcher) can render relative to viewport */\n    contain: style;\n    display: block;\n    position: fixed;\n    inset: auto;\n    z-index: 999999; /* Keep on top of most sites */\n  }\n\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n\n  /* Scoped scrollbar styling */\n  *::-webkit-scrollbar { width: 6px; height: 6px; }\n  *::-webkit-scrollbar-track { background: transparent; }\n  *::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.2); border-radius: 3px; }\n  *::-webkit-scrollbar-thumb:hover { background: rgba(0, 0, 0, 0.3); }\n\n  @media (prefers-reduced-motion: reduce) {\n    * { animation: none !important; transition: none !important; }\n  }\n",this.shadow.appendChild(e);const r="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",n=Array.from(this.shadow.querySelectorAll("link")).some(e=>e.getAttribute("href")===r);if(!n){const e=document.createElement("link");e.rel="stylesheet",e.href=r,this.shadow.appendChild(e)}const t=this.getAttribute("instrument-serif-regular"),o=this.getAttribute("instrument-serif-600");if(t||o){if(t){const e=document.createElement("link");e.rel="preload",e.as="font",e.href=t,e.type="font/woff2",e.crossOrigin="anonymous",this.shadow.appendChild(e)}if(o){const e=document.createElement("link");e.rel="preload",e.as="font",e.href=o,e.type="font/woff2",e.crossOrigin="anonymous",this.shadow.appendChild(e)}const e=document.createElement("style");e.textContent=`\n        ${t?`@font-face { font-family: 'Instrument Serif'; font-style: normal; font-weight: 400; font-display: swap; src: url('${t}') format('woff2'); }`:""}\n        ${o?`@font-face { font-family: 'Instrument Serif'; font-style: normal; font-weight: 600; font-display: swap; src: url('${o}') format('woff2'); }`:""}\n      `,this.shadow.appendChild(e)}else{const e=document.createElement("link");e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",this.shadow.appendChild(e);const r="askdona-font-global";if(!document.getElementById(r)){const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",document.head.appendChild(e);const n=document.createElement("link");n.rel="preconnect",n.href="https://fonts.gstatic.com",n.crossOrigin="anonymous",document.head.appendChild(n);const t=document.createElement("link");t.id=r,t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",document.head.appendChild(t)}}const i="askdona-font-global";if(!document.getElementById(i)){const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",document.head.appendChild(e);const r=document.createElement("link");r.rel="preconnect",r.href="https://fonts.gstatic.com",r.crossOrigin="anonymous",document.head.appendChild(r);const n=document.createElement("link");n.id=i,n.rel="stylesheet",n.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",document.head.appendChild(n)}this.gooberStyleEl=document.createElement("style"),this.gooberStyleEl.id="_goober",this.gooberStyleEl.appendChild(document.createTextNode(" ")),this.shadow.appendChild(this.gooberStyleEl),window._goober=this.gooberStyleEl;try{Te(k),this.gooberReady=!0}catch(e){this.gooberReady=!1}this.mountPoint=document.createElement("div"),this.shadow.appendChild(this.mountPoint),this.applyPosition(),this.resizeHandler=()=>this.applyPosition(),window.addEventListener("resize",this.resizeHandler);const a=this.getAttribute("custom-css");if(a){const e=document.createElement("link");e.rel="stylesheet",e.href=a,this.shadow.appendChild(e)}if(!window.katex){const e="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js",r=Array.from(document.querySelectorAll("script")).some(r=>r.getAttribute("src")===e);if(!r){const r=document.createElement("script");r.src=e,r.async=!0,document.head.appendChild(r)}}try{this.gooberReady&&this.renderWidget()}catch(e){}}disconnectedCallback(){if(this.mountPoint&&P(null,this.mountPoint),window._goober===this.gooberStyleEl)try{delete window._goober}catch(e){window._goober=null}this.resizeHandler&&window.removeEventListener("resize",this.resizeHandler)}attributeChangedCallback(e,r,n){try{this.applyPosition(),this.initialised&&this.gooberReady&&this.renderWidget()}catch(e){}}open(){var e;null===(e=this.widgetRef.current)||void 0===e||e.open()}close(){var e;null===(e=this.widgetRef.current)||void 0===e||e.close()}sendMessage(e){var r;null===(r=this.widgetRef.current)||void 0===r||r.sendMessage(e)}applyPosition(){const e=this.getAttribute("position")||"bottom-right",r=this.getAttribute("display-mode")||"modal",n=window.innerWidth||document.documentElement.clientWidth||0,t=Math.max(12,Math.min(20,Math.round(.03*n)));if("fullscreen"===r)return this.style.position="fixed",this.style.inset="0",this.style.width="100%",void(this.style.height="100%");this.style.position="fixed",this.style.inset="auto",this.style.width="auto",this.style.height="auto",this.style.bottom=`${t}px`,this.style.left="bottom-left"===e?`${t}px`:"",this.style.right="bottom-right"===e?`${t}px`:""}getConfig(){const e=this.getAttribute("chatflow-id")||"";if(!e)return null;return{chatflowId:e,theme:this.getAttribute("theme")||void 0,position:this.getAttribute("position")||void 0,primaryColor:this.getAttribute("primary-color")||void 0,language:this.getAttribute("language")||void 0,displayMode:this.getAttribute("display-mode")||void 0,debug:this.hasAttribute("debug")?"true"===this.getAttribute("debug"):void 0}}renderWidget(){const e=this.getConfig();if(e)try{P(Z(nc,{ref:this.widgetRef,config:e}),this.mountPoint)}catch(e){throw e}}}function ic(){customElements.get("askdona-widget")||customElements.define("askdona-widget",oc)}let ac={current:null};async function sc(e){var r,n,t,o;try{const i=function(e){return e.chatflowId?e.theme&&!["light","dark","auto"].includes(e.theme)?{isValid:!1,error:'Invalid theme. Must be "light", "dark", or "auto"'}:e.position&&!["bottom-right","bottom-left"].includes(e.position)?{isValid:!1,error:'Invalid position. Must be "bottom-right" or "bottom-left"'}:e.language&&!["ja","en"].includes(e.language)?{isValid:!1,error:'Invalid language. Must be "ja" or "en"'}:{isValid:!0}:{isValid:!1,error:"chatflowId is required"}}(e);if(!i.isValid)throw new Error(i.error);!function(){if(!document.querySelector('meta[name="askdona-csp"]')){const e=document.createElement("meta");e.name="askdona-csp",e.content=["default-src 'self'","script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net","style-src 'self' 'unsafe-inline'","img-src 'self' data: https:","connect-src 'self' https://api.askdona.com wss://api.askdona.com","font-src 'self' data:","frame-ancestors 'none'"].join("; "),document.head.appendChild(e)}}();let a=null;try{a=await J(e.chatflowId,e.language)}catch(e){}let s={...e};if(null==a?void 0:a.embedConfig){const e=a.embedConfig.introTitle&&a.embedConfig.introMessage?{title:a.embedConfig.introTitle,message:a.embedConfig.introMessage}:null;e&&(s.introTitle=e.title,s.introMessage=e.message),a.embedConfig.exampleQuestions&&(s.exampleQuestions=a.embedConfig.exampleQuestions),a.embedConfig.featureFlags&&(s.defaultBoostMode=a.embedConfig.featureFlags.enableBoostMode,s.allowBoostModeToggle=a.embedConfig.featureFlags.allowBoostModeToggle,s.enableRagDeepResearch=a.embedConfig.featureFlags.enableRagDeepResearch),a.embedConfig.appearanceSettings&&(!s.primaryColor&&a.embedConfig.appearanceSettings.primaryColor&&(s.primaryColor=a.embedConfig.appearanceSettings.primaryColor),!s.theme&&a.embedConfig.appearanceSettings.theme&&(s.theme=a.embedConfig.appearanceSettings.theme),!s.position&&a.embedConfig.appearanceSettings.position&&(s.position=a.embedConfig.appearanceSettings.position),!s.displayMode&&a.embedConfig.appearanceSettings.displayMode&&(s.displayMode=a.embedConfig.appearanceSettings.displayMode))}ic();let l=document.querySelector("askdona-widget");l?(l.setAttribute("chatflow-id",s.chatflowId),s.theme&&l.setAttribute("theme",s.theme),s.position&&l.setAttribute("position",s.position),s.primaryColor&&l.setAttribute("primary-color",s.primaryColor),s.language&&l.setAttribute("language",s.language),s.displayMode&&l.setAttribute("display-mode",s.displayMode),s.customCSS&&l.setAttribute("custom-css",s.customCSS),(null===(t=s.instrumentSerif)||void 0===t?void 0:t.w400)&&l.setAttribute("instrument-serif-regular",s.instrumentSerif.w400),(null===(o=s.instrumentSerif)||void 0===o?void 0:o.w600)&&l.setAttribute("instrument-serif-600",s.instrumentSerif.w600),s.debug&&l.setAttribute("debug",String(!!s.debug))):(l=document.createElement("askdona-widget"),l.setAttribute("chatflow-id",s.chatflowId),s.theme&&l.setAttribute("theme",s.theme),s.position&&l.setAttribute("position",s.position),s.primaryColor&&l.setAttribute("primary-color",s.primaryColor),s.language&&l.setAttribute("language",s.language),s.displayMode&&l.setAttribute("display-mode",s.displayMode),s.customCSS&&l.setAttribute("custom-css",s.customCSS),(null===(r=s.instrumentSerif)||void 0===r?void 0:r.w400)&&l.setAttribute("instrument-serif-regular",s.instrumentSerif.w400),(null===(n=s.instrumentSerif)||void 0===n?void 0:n.w600)&&l.setAttribute("instrument-serif-600",s.instrumentSerif.w600),s.debug&&l.setAttribute("debug",String(!!s.debug)),document.body.appendChild(l)),s.onReady&&setTimeout(()=>{s.onReady&&s.onReady()},0),s.debug}catch(r){e.onError&&e.onError(r)}}function lc(){const e=document.querySelector("askdona-widget");e&&e.parentNode&&e.parentNode.removeChild(e),ac={current:null}}function dc(){const e=document.querySelector("askdona-widget");return e&&"function"==typeof e.open?e.open():ac.current?ac.current.open():void 0}function cc(){const e=document.querySelector("askdona-widget");return e&&"function"==typeof e.close?e.close():ac.current?ac.current.close():void 0}function uc(e){const r=document.querySelector("askdona-widget");return r&&"function"==typeof r.sendMessage?r.sendMessage(e):ac.current?ac.current.sendMessage(e):void 0}if("undefined"!=typeof window){ic();const e=document.currentScript;e&&e.dataset.chatflowId&&window.addEventListener("DOMContentLoaded",async()=>{const r=e.dataset.chatflowId;if(r)try{await sc({chatflowId:r,theme:e.dataset.theme,position:e.dataset.position,primaryColor:e.dataset.primaryColor,language:e.dataset.language,displayMode:e.dataset.displayMode})}catch(e){}})}return window.AskDona={init:sc,destroy:lc,open:dc,close:cc,sendMessage:uc},e.close=cc,e.destroy=lc,e.init=sc,e.open=dc,e.sendMessage=uc,e}({});
