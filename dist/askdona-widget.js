var AskDona=function(e){"use strict";var r,n,t,o,a,i,s,d,l,c,u,h={},p=[],m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,g=Array.isArray;function f(e,r){for(var n in r)e[n]=r[n];return e}function b(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function v(e,n,t){var o,a,i,s={};for(i in n)"key"==i?o=n[i]:"ref"==i?a=n[i]:s[i]=n[i];if(arguments.length>2&&(s.children=arguments.length>3?r.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===s[i]&&(s[i]=e.defaultProps[i]);return y(e,s,o,a,null)}function y(e,r,o,a,i){var s={type:e,props:r,key:o,ref:a,h:null,m:null,v:0,S:null,C:null,constructor:void 0,M:null==i?++t:i,$:-1,_:0};return null==i&&null!=n.vnode&&n.vnode(s),s}function k(e){return e.children}function x(e,r){this.props=e,this.context=r}function w(e,r){if(null==r)return e.m?w(e.m,e.$+1):null;for(var n;r<e.h.length;r++)if(null!=(n=e.h[r])&&null!=n.S)return n.S;return"function"==typeof e.type?w(e):null}function z(e){var r,n;if(null!=(e=e.m)&&null!=e.C){for(e.S=e.C.base=null,r=0;r<e.h.length;r++)if(null!=(n=e.h[r])&&null!=n.S){e.S=e.C.base=n.S;break}return z(e)}}function S(e){(!e.j&&(e.j=!0)&&o.push(e)&&!C.I++||a!=n.debounceRendering)&&((a=n.debounceRendering)||i)(C)}function C(){for(var e,r,t,a,i,d,l,c=1;o.length;)o.length>c&&o.sort(s),e=o.shift(),c=o.length,e.j&&(t=void 0,i=(a=(r=e).M).S,d=[],l=[],r.D&&((t=f({},a)).M=a.M+1,n.vnode&&n.vnode(t),R(r.D,t,a,r.A,r.D.namespaceURI,32&a._?[i]:null,d,null==i?w(a):i,!!(32&a._),l),t.M=a.M,t.m.h[t.$]=t,T(d,t,l),t.S!=i&&z(t)));C.I=0}function M(e,r,n,t,o,a,i,s,d,l,c){var u,m,f,b,v,x,z=t&&t.h||p,S=r.length;for(d=function(e,r,n,t,o){var a,i,s,d,l,c=n.length,u=c,h=0;for(e.h=new Array(o),a=0;a<o;a++)null!=(i=r[a])&&"boolean"!=typeof i&&"function"!=typeof i?(d=a+h,(i=e.h[a]="string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?y(null,i,null,null,null):g(i)?y(k,{children:i},null,null,null):null==i.constructor&&i.v>0?y(i.type,i.props,i.key,i.ref?i.ref:null,i.M):i).m=e,i.v=e.v+1,s=null,-1!=(l=i.$=j(i,n,d,u))&&(u--,(s=n[l])&&(s._|=2)),null==s||null==s.M?(-1==l&&(o>c?h--:o<c&&h++),"function"!=typeof i.type&&(i._|=4)):l!=d&&(l==d-1?h--:l==d+1?h++:(l>d?h--:h++,i._|=4))):e.h[a]=null;if(u)for(a=0;a<c;a++)null!=(s=n[a])&&!(2&s._)&&(s.S==t&&(t=w(s)),N(s,s));return t}(n,r,z,d,S),u=0;u<S;u++)null!=(f=n.h[u])&&(m=-1==f.$?h:z[f.$]||h,f.$=u,x=R(e,f,m,o,a,i,s,d,l,c),b=f.S,f.ref&&m.ref!=f.ref&&(m.ref&&O(m.ref,null,f),c.push(f.ref,f.C||b,f)),null==v&&null!=b&&(v=b),4&f._||m.h===f.h?d=$(f,d,e):"function"==typeof f.type&&void 0!==x?d=x:b&&(d=b.nextSibling),f._&=-7);return n.S=v,d}function $(e,r,n){var t,o;if("function"==typeof e.type){for(t=e.h,o=0;t&&o<t.length;o++)t[o]&&(t[o].m=e,r=$(t[o],r,n));return r}e.S!=r&&(r&&e.type&&!n.contains(r)&&(r=w(e)),n.insertBefore(e.S,r||null),r=e.S);do{r=r&&r.nextSibling}while(null!=r&&8==r.nodeType);return r}function _(e,r){return r=r||[],null==e||"boolean"==typeof e||(g(e)?e.some(function(e){_(e,r)}):r.push(e)),r}function j(e,r,n,t){var o,a,i=e.key,s=e.type,d=r[n];if(null===d&&null==e.key||d&&i==d.key&&s==d.type&&!(2&d._))return n;if(t>(null==d||2&d._?0:1))for(o=n-1,a=n+1;o>=0||a<r.length;){if(o>=0){if((d=r[o])&&!(2&d._)&&i==d.key&&s==d.type)return o;o--}if(a<r.length){if((d=r[a])&&!(2&d._)&&i==d.key&&s==d.type)return a;a++}}return-1}function I(e,r,n){"-"==r[0]?e.setProperty(r,null==n?"":n):e[r]=null==n?"":"number"!=typeof n||m.test(r)?n:n+"px"}function D(e,r,n,t,o){var a,i;e:if("style"==r)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof t&&(e.style.cssText=t=""),t)for(r in t)n&&r in n||I(e.style,r,"");if(n)for(r in n)t&&n[r]==t[r]||I(e.style,r,n[r])}else if("o"==r[0]&&"n"==r[1])a=r!=(r=r.replace(d,"$1")),i=r.toLowerCase(),r=i in e||"onFocusOut"==r||"onFocusIn"==r?i.slice(2):r.slice(2),e.l||(e.l={}),e.l[r+a]=n,n?t?n.u=t.u:(n.u=l,e.addEventListener(r,a?u:c,a)):e.removeEventListener(r,a?u:c,a);else{if("http://www.w3.org/2000/svg"==o)r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=r&&"height"!=r&&"href"!=r&&"list"!=r&&"form"!=r&&"tabIndex"!=r&&"download"!=r&&"rowSpan"!=r&&"colSpan"!=r&&"role"!=r&&"popover"!=r&&r in e)try{e[r]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!=r[4]?e.removeAttribute(r):e.setAttribute(r,"popover"==r&&1==n?"":n))}}function A(e){return function(r){if(this.l){var t=this.l[r.type+e];if(null==r.t)r.t=l++;else if(r.t<t.u)return;return t(n.event?n.event(r):r)}}}function R(e,r,t,o,a,i,s,d,l,c){var u,h,p,m,v,y,w,z,S,C,$,_,j,I,D,A,R,T=r.type;if(null!=r.constructor)return null;128&t._&&(l=!!(32&t._),i=[d=r.S=t.S]),(u=n.v)&&u(r);e:if("function"==typeof T)try{if(z=r.props,S="prototype"in T&&T.prototype.render,C=(u=T.contextType)&&o[u.C],$=u?C?C.props.value:u.m:o,t.C?w=(h=r.C=t.C).m=h.R:(S?r.C=h=new T(z,$):(r.C=h=new x(z,$),h.constructor=T,h.render=P),C&&C.sub(h),h.props=z,h.state||(h.state={}),h.context=$,h.A=o,p=h.j=!0,h.T=[],h.F=[]),S&&null==h.O&&(h.O=h.state),S&&null!=T.getDerivedStateFromProps&&(h.O==h.state&&(h.O=f({},h.O)),f(h.O,T.getDerivedStateFromProps(z,h.O))),m=h.props,v=h.state,h.M=r,p)S&&null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),S&&null!=h.componentDidMount&&h.T.push(h.componentDidMount);else{if(S&&null==T.getDerivedStateFromProps&&z!==m&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(z,$),!h.S&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(z,h.O,$)||r.M==t.M){for(r.M!=t.M&&(h.props=z,h.state=h.O,h.j=!1),r.S=t.S,r.h=t.h,r.h.some(function(e){e&&(e.m=r)}),_=0;_<h.F.length;_++)h.T.push(h.F[_]);h.F=[],h.T.length&&s.push(h);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(z,h.O,$),S&&null!=h.componentDidUpdate&&h.T.push(function(){h.componentDidUpdate(m,v,y)})}if(h.context=$,h.props=z,h.D=e,h.S=!1,j=n.I,I=0,S){for(h.state=h.O,h.j=!1,j&&j(r),u=h.render(h.props,h.state,h.context),D=0;D<h.F.length;D++)h.T.push(h.F[D]);h.F=[]}else do{h.j=!1,j&&j(r),u=h.render(h.props,h.state,h.context),h.state=h.O}while(h.j&&++I<25);h.state=h.O,null!=h.getChildContext&&(o=f(f({},o),h.getChildContext())),S&&!p&&null!=h.getSnapshotBeforeUpdate&&(y=h.getSnapshotBeforeUpdate(m,v)),A=u,null!=u&&u.type===k&&null==u.key&&(A=F(u.props.children)),d=M(e,g(A)?A:[A],r,t,o,a,i,s,d,l,c),h.base=r.S,r._&=-161,h.T.length&&s.push(h),w&&(h.R=h.m=null)}catch(e){if(r.M=null,l||null!=i)if(e.then){for(r._|=l?160:128;d&&8==d.nodeType&&d.nextSibling;)d=d.nextSibling;i[i.indexOf(d)]=null,r.S=d}else for(R=i.length;R--;)b(i[R]);else r.S=t.S,r.h=t.h;n.S(e,r,t)}else null==i&&r.M==t.M?(r.h=t.h,r.S=t.S):d=r.S=E(t.S,r,t,o,a,i,s,l,c);return(u=n.diffed)&&u(r),128&r._?void 0:d}function T(e,r,t){for(var o=0;o<t.length;o++)O(t[o],t[++o],t[++o]);n.C&&n.C(r,e),e.some(function(r){try{e=r.T,r.T=[],e.some(function(e){e.call(r)})}catch(e){n.S(e,r.M)}})}function F(e){return"object"!=typeof e||null==e||e.v&&e.v>0?e:g(e)?e.map(F):f({},e)}function E(e,t,o,a,i,s,d,l,c){var u,p,m,f,v,y,k,x=o.props,z=t.props,S=t.type;if("svg"==S?i="http://www.w3.org/2000/svg":"math"==S?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=s)for(u=0;u<s.length;u++)if((v=s[u])&&"setAttribute"in v==!!S&&(S?v.localName==S:3==v.nodeType)){e=v,s[u]=null;break}if(null==e){if(null==S)return document.createTextNode(z);e=document.createElementNS(i,S,z.is&&z),l&&(n.N&&n.N(t,s),l=!1),s=null}if(null==S)x===z||l&&e.data==z||(e.data=z);else{if(s=s&&r.call(e.childNodes),x=o.props||h,!l&&null!=s)for(x={},u=0;u<e.attributes.length;u++)x[(v=e.attributes[u]).name]=v.value;for(u in x)if(v=x[u],"children"==u);else if("dangerouslySetInnerHTML"==u)m=v;else if(!(u in z)){if("value"==u&&"defaultValue"in z||"checked"==u&&"defaultChecked"in z)continue;D(e,u,null,v,i)}for(u in z)v=z[u],"children"==u?f=v:"dangerouslySetInnerHTML"==u?p=v:"value"==u?y=v:"checked"==u?k=v:l&&"function"!=typeof v||x[u]===v||D(e,u,v,x[u],i);if(p)l||m&&(p.P==m.P||p.P==e.innerHTML)||(e.innerHTML=p.P),t.h=[];else if(m&&(e.innerHTML=""),M("template"==t.type?e.content:e,g(f)?f:[f],t,o,a,"foreignObject"==S?"http://www.w3.org/1999/xhtml":i,s,d,s?s[0]:o.h&&w(o,0),l,c),null!=s)for(u=s.length;u--;)b(s[u]);l||(u="value","progress"==S&&null==y?e.removeAttribute("value"):null!=y&&(y!==e[u]||"progress"==S&&!y||"option"==S&&y!=x[u])&&D(e,u,y,x[u],i),u="checked",null!=k&&k!=e[u]&&D(e,u,k,x[u],i))}return e}function O(e,r,t){try{if("function"==typeof e){var o="function"==typeof e._;o&&e._(),o&&null==r||(e._=e(r))}else e.current=r}catch(e){n.S(e,t)}}function N(e,r,t){var o,a;if(n.unmount&&n.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.S||O(o,null,r)),null!=(o=e.C)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){n.S(e,r)}o.base=o.D=null}if(o=e.h)for(a=0;a<o.length;a++)o[a]&&N(o[a],r,t||"function"!=typeof e.type);t||b(e.S),e.C=e.m=e.S=void 0}function P(e,r,n){return this.constructor(e,n)}function L(e,t,o){var a,i,s;t==document&&(t=document.documentElement),n.m&&n.m(e,t),a=!1?null:t.h,i=[],s=[],R(t,e=t.h=v(k,null,[e]),a||h,h,t.namespaceURI,a?null:t.firstChild?r.call(t.childNodes):null,i,a?a.S:t.firstChild,false,s),T(i,e,s)}function q(){return window.crypto&&window.crypto.randomUUID?window.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const r=16*Math.random()|0;return("x"===e?r:3&r|8).toString(16)})}r=p.slice,n={S:function(e,r,n,t){for(var o,a,i;r=r.m;)if((o=r.C)&&!o.m)try{if((a=o.constructor)&&null!=a.getDerivedStateFromError&&(o.setState(a.getDerivedStateFromError(e)),i=o.j),null!=o.componentDidCatch&&(o.componentDidCatch(e,t||{}),i=o.j),i)return o.R=o}catch(r){e=r}throw e}},t=0,x.prototype.setState=function(e,r){var n;n=null!=this.O&&this.O!=this.state?this.O:this.O=f({},this.state),"function"==typeof e&&(e=e(f({},n),this.props)),e&&f(n,e),null!=e&&this.M&&(r&&this.F.push(r),S(this))},x.prototype.forceUpdate=function(e){this.M&&(this.S=!0,e&&this.T.push(e),S(this))},x.prototype.render=k,o=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,r){return e.M.v-r.M.v},C.I=0,d=/(PointerCapture)$|Capture$/i,l=0,c=A(!1),u=A(!0),"undefined"!=typeof window&&function(){if(window.self!==window.top)try{window.parent.document}catch(e){}}();const H="https://app.askdona.com/api/embed/v1";async function B(e,r={}){const n=new AbortController,t=setTimeout(()=>n.abort(),3e4);try{const o={"X-Widget-Version":"1.0.0",...r.headers||{}};r.method&&["POST","PUT","PATCH"].includes(r.method)&&(o["Content-Type"]="application/json");const a=await fetch(`${H}${e}`,{...r,signal:n.signal,headers:o});if(clearTimeout(t),!a.ok){const e=await a.json().catch(()=>({message:"Request failed"}));throw new Error(e.message||`HTTP ${a.status}`)}return await a.json()}catch(e){if(clearTimeout(t),"AbortError"===e.name)throw new Error("Request timeout");throw e}}async function J(e,r){try{const n=r?`?language=${encodeURIComponent(r)}`:"";return await B(`/welcome/${e}${n}`)}catch(e){return null}}var V=0;function U(e,r,t,o,a,i){r||(r={});var s,d,l=r;if("ref"in l)for(d in l={},r)"ref"==d?s=r[d]:l[d]=r[d];var c={type:e,props:l,key:t,ref:s,h:null,m:null,v:0,S:null,C:null,constructor:void 0,M:--V,$:-1,_:0,L:a,q:i};if("function"==typeof e&&(s=e.defaultProps))for(d in s)void 0===l[d]&&(l[d]=s[d]);return n.vnode&&n.vnode(c),c}var W,Q,Z,G,K=0,Y=[],X=n,ee=X.v,re=X.I,ne=X.diffed,te=X.C,oe=X.unmount,ae=X.m;function ie(e,r){X.T&&X.T(Q,e,K||r),K=0;var n=Q.H||(Q.H={m:[],T:[]});return e>=n.m.length&&n.m.push({}),n.m[e]}function se(e){return K=1,function(e,r,n){var t=ie(W++,2);if(t.t=e,!t.C&&(t.m=[n?n(r):ye(void 0,r),function(e){var r=t.B?t.B[0]:t.m[0],n=t.t(r,e);r!==n&&(t.B=[n,t.m[1]],t.C.setState({}))}],t.C=Q,!Q.J)){var o=function(e,r,n){if(!t.C.H)return!0;var o=t.C.H.m.filter(function(e){return!!e.C});if(o.every(function(e){return!e.B}))return!a||a.call(this,e,r,n);var i=t.C.props!==e;return o.forEach(function(e){if(e.B){var r=e.m[0];e.m=e.B,e.B=void 0,r!==e.m[0]&&(i=!0)}}),a&&a.call(this,e,r,n)||i};Q.J=!0;var a=Q.shouldComponentUpdate,i=Q.componentWillUpdate;Q.componentWillUpdate=function(e,r,n){if(this.S){var t=a;a=void 0,o(e,r,n),a=t}i&&i.call(this,e,r,n)},Q.shouldComponentUpdate=o}return t.B||t.m}(ye,e)}function de(e,r){var n=ie(W++,3);!X.O&&ve(n.H,r)&&(n.m=e,n.u=r,Q.H.T.push(n))}function le(e,r){var n=ie(W++,4);!X.O&&ve(n.H,r)&&(n.m=e,n.u=r,Q.T.push(n))}function ce(e){return K=5,ue(function(){return{current:e}},[])}function ue(e,r){var n=ie(W++,7);return ve(n.H,r)&&(n.m=e(),n.H=r,n.T=e),n.m}function he(e,r){return K=8,ue(function(){return e},r)}function pe(){for(var e;e=Y.shift();)if(e.D&&e.H)try{e.H.T.forEach(fe),e.H.T.forEach(be),e.H.T=[]}catch(r){e.H.T=[],X.S(r,e.M)}}X.v=function(e){Q=null,ee&&ee(e)},X.m=function(e,r){e&&r.h&&r.h.N&&(e.N=r.h.N),ae&&ae(e,r)},X.I=function(e){re&&re(e),W=0;var r=(Q=e.C).H;r&&(Z===Q?(r.T=[],Q.T=[],r.m.forEach(function(e){e.B&&(e.m=e.B),e.u=e.B=void 0})):(r.T.forEach(fe),r.T.forEach(be),r.T=[],W=0)),Z=Q},X.diffed=function(e){ne&&ne(e);var r=e.C;r&&r.H&&(r.H.T.length&&(1!==Y.push(r)&&G===X.requestAnimationFrame||((G=X.requestAnimationFrame)||ge)(pe)),r.H.m.forEach(function(e){e.u&&(e.H=e.u),e.u=void 0})),Z=Q=null},X.C=function(e,r){r.some(function(e){try{e.T.forEach(fe),e.T=e.T.filter(function(e){return!e.m||be(e)})}catch(n){r.some(function(e){e.T&&(e.T=[])}),r=[],X.S(n,e.M)}}),te&&te(e,r)},X.unmount=function(e){oe&&oe(e);var r,n=e.C;n&&n.H&&(n.H.m.forEach(function(e){try{fe(e)}catch(e){r=e}}),n.H=void 0,r&&X.S(r,n.M))};var me="function"==typeof requestAnimationFrame;function ge(e){var r,n=function(){clearTimeout(t),me&&cancelAnimationFrame(r),setTimeout(e)},t=setTimeout(n,35);me&&(r=requestAnimationFrame(n))}function fe(e){var r=Q,n=e.C;"function"==typeof n&&(e.C=void 0,n()),Q=r}function be(e){var r=Q;e.C=e.m(),Q=r}function ve(e,r){return!e||e.length!==r.length||r.some(function(r,n){return r!==e[n]})}function ye(e,r){return"function"==typeof r?r(e):r}let ke,xe,we,ze={data:""},Se=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ze,Ce=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Me=/\/\*[^]*?\*\/|  +/g,$e=/\n+/g,_e=(e,r)=>{let n="",t="",o="";for(let a in e){let i=e[a];"@"==a[0]?"i"==a[1]?n=a+" "+i+";":t+="f"==a[1]?_e(i,a):a+"{"+_e(i,"k"==a[1]?"":r)+"}":"object"==typeof i?t+=_e(i,r?r.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):a):null!=i&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=_e.p?_e.p(a,i):a+":"+i+";")}return n+(r&&o?r+"{"+o+"}":o)+t},je={},Ie=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+Ie(e[n]);return r}return e},De=(e,r,n,t,o)=>{let a=Ie(e),i=je[a]||(je[a]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(a));if(!je[i]){let r=a!==e?e:(e=>{let r,n,t=[{}];for(;r=Ce.exec(e.replace(Me,""));)r[4]?t.shift():r[3]?(n=r[3].replace($e," ").trim(),t.unshift(t[0][n]=t[0][n]||{})):t[0][r[1]]=r[2].replace($e," ").trim();return t[0]})(e);je[i]=_e(o?{["@keyframes "+i]:r}:r,n?"":"."+i)}let s=n&&je.g?je.g:null;return n&&(je.g=je[i]),((e,r,n,t)=>{t?r.data=r.data.replace(t,e):-1===r.data.indexOf(e)&&(r.data=n?e+r.data:r.data+e)})(je[i],r,t,s),i};function Ae(e){let r=this||{},n=e.call?e(r.p):e;return De(n.unshift?n.raw?((e,r,n)=>e.reduce((e,t,o)=>{let a=r[o];if(a&&a.call){let e=a(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=r?"."+r:e&&"object"==typeof e?e.props?"":_e(e,""):!1===e?"":e}return e+t+(null==a?"":a)},""))(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,Se(r.target),r.g,r.o,r.k)}Ae.bind({g:1});let Re=Ae.bind({k:1});function Te(e,r){let n=this||{};return function(){let r=arguments;return function t(o,a){let i=Object.assign({},o),s=i.className||t.className;n.p=Object.assign({theme:xe&&xe()},i),n.o=/ *go\d+/.test(s),i.className=Ae.apply(n,r)+(s?" "+s:"");let d=e;return e[0]&&(d=i.as||e,delete i.as),we&&d[0]&&we(i),ke(d,i)}}}const Fe=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ee=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,n)=>n?n.toUpperCase():r.toLowerCase()))(e);return r.charAt(0).toUpperCase()+r.slice(1)},Oe=(...e)=>e.filter((e,r,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===r).join(" ").trim();var Ne={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};const Pe=({color:e="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:t,children:o,iconNode:a,class:i="",...s})=>v("svg",{...Ne,width:String(r),height:r,stroke:e,"stroke-width":t?24*Number(n)/Number(r):n,class:["lucide",i].join(" "),...s},[...a.map(([e,r])=>v(e,r)),..._(o)]),Le=(e,r)=>{const n=({class:n="",children:t,...o})=>v(Pe,{...o,iconNode:r,class:Oe(`lucide-${Fe(Ee(e))}`,`lucide-${Fe(e)}`,n)},t);return n.displayName=Ee(e),n},qe=Le("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),He=Le("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Be=Le("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),Je=Le("beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]),Ve=Le("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),Ue=Le("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),We=Le("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Qe=Le("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),Ze=Le("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),Ge=Le("circle-question-mark",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Ke=Le("clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]),Ye=Le("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),Xe=Le("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),er=Le("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),rr=Le("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),nr=Le("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),tr=Le("funnel",[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]]),or=Le("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),ar=Le("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),ir=Le("loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]),sr=Le("message-circle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]),dr=Le("microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]),lr=Le("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),cr=Le("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]),ur=Le("share-2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),hr=Le("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]),pr=Le("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]),mr=Le("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),gr=Le("thumbs-down",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]]),fr=Le("thumbs-up",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]),br=Le("timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),vr=Le("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),yr=Le("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),kr=Le("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function xr({headers:e,data:r}){return U(Er,{children:U("table",{children:[U("thead",{children:U("tr",{children:e.map((e,r)=>U("th",{children:e},r))})}),U("tbody",{children:r.map((e,r)=>U("tr",{children:e.map((e,r)=>U("td",{children:e},r))},r))})]})})}function wr({code:e,language:r}){const[n,t]=se(!1);return U(Or,{children:[U(Nr,{children:[U(Pr,{children:r||"code"}),U(Lr,{onClick:async()=>{try{await navigator.clipboard.writeText(e),t(!0),setTimeout(()=>t(!1),2e3)}catch(r){const n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select();try{document.execCommand("copy")}catch(e){}document.body.removeChild(n),t(!0),setTimeout(()=>t(!1),2e3)}},title:"Copy code",children:U(n?Ve:Xe,{size:14})})]}),U(qr,{children:U("code",{children:e})})]})}function zr({isOpen:e,onClose:r,onSubmit:n,rating:t,config:o}){const[a,i]=se(""),[s,d]=se(!1);if(!e)return null;const l="THUMBS_UP"===t,c="ja"===o.language?l?"何が良かったですか？":"何が改善できますか？":l?"What was helpful?":"What could be improved?",u="ja"===o.language?l?"例：詳しい説明で理解しやすかった":"例：もう少し具体的な例が欲しい":l?"e.g., Clear and detailed explanation":"e.g., Could use more specific examples";return U(Wr,{onClick:r,children:U(Qr,{onClick:e=>e.stopPropagation(),children:[U(Zr,{children:[U(Gr,{positive:l,children:U(l?fr:gr,{size:16})}),U(Kr,{children:c})]}),U(Yr,{children:U(Xr,{value:a,onChange:e=>i(e.target.value),placeholder:u,rows:3})}),U(en,{children:[U(rn,{onClick:()=>{n(""),r()},children:"ja"===o.language?"スキップ":"Skip"}),U(nn,{onClick:()=>{d(!0);try{n(a),r()}catch(e){}finally{d(!1)}},disabled:s,children:s?"ja"===o.language?"送信中...":"Sending...":"ja"===o.language?"送信":"Send"})]})]})})}function Sr({messageId:e,sessionId:r,feedback:n,onFeedbackSubmit:t,config:o}){const[a,i]=se(!1),[s,d]=se(null),[l,c]=se(n||null),u=e=>{l||(d(e),i(!0))};return U(k,{children:[U(Hr,{children:[U(Br,{children:"ja"===o.language?"この回答は役に立ちましたか？ 更なる改善のため、ぜひフィードバックをお願いします。":"Was this answer helpful? For further improvements, please share your feedback."}),U(Jr,{children:[U(Vr,{onClick:()=>u("THUMBS_UP"),active:"THUMBS_UP"===(null==l?void 0:l.rating),disabled:!!l,positive:!0,title:"ja"===o.language?"役に立った":"Helpful",children:U(fr,{size:14})}),U(Vr,{onClick:()=>u("THUMBS_DOWN"),active:"THUMBS_DOWN"===(null==l?void 0:l.rating),disabled:!!l,positive:!1,title:"ja"===o.language?"役に立たなかった":"Not helpful",children:U(gr,{size:14})})]}),l&&U(Ur,{children:"ja"===o.language?"フィードバックをありがとうございます！":"Thank you for your feedback!"})]}),U(zr,{isOpen:a,onClose:()=>{i(!1),d(null)},onSubmit:r=>{if(!s)return;const n={rating:s,content:r||void 0,submittedAt:(new Date).toISOString(),isSubmitted:!0};c(n),t(e,s,r)},rating:s,config:o})]})}function Cr(e,r=!1){if(!e)return[];const n=[],t=e.split("\n");let o=[],a=!1,i=[],s="",d=!1,l=[];const c=()=>{if(o.length>0){const e=o.join("\n");n.push(U("p",{children:Mr(e)},n.length)),o=[]}},u=()=>{if(l.length>0){const e=l[0].split("|").slice(1,-1).map(e=>e.trim()),r=l.slice(2).map(e=>e.split("|").slice(1,-1).map(e=>e.trim()));n.push(U(xr,{headers:e,data:r},n.length)),l=[]}};for(let e=0;e<t.length;e++){const h=t[e],p=h.trim();if(p.startsWith("```"))a?(n.push(U(wr,{code:i.join("\n"),language:s},n.length)),i=[],s="",a=!1):(c(),a=!0,s=p.slice(3)||"");else if(a)i.push(h);else{if(!r&&p.includes("|")&&e+1<t.length){if(t[e+1].trim().match(/^[\|\s\-:]+$/)){c(),d=!0,l=[p];continue}}if(d)""!==p&&p.includes("|")?l.push(p):(u(),d=!1,p&&o.push(h));else{if(p.match(/^#{1,6}\s/)){c();const e=p.match(/^#+/),r=e?e[0].length:1,t=p.slice(r).trim(),o=`h${r}`;n.push(U(o,{children:Mr(t)},n.length));continue}if(p.match(/^[*+-]\s/)||p.match(/^\d+\.\s/)){c();const r=[],o=null!==p.match(/^\d+\.\s/);for(;e<t.length&&t[e].trim().match(/^[*+-]\s|^\d+\.\s/);){const n=t[e].trim().replace(/^[*+-]\s|^\d+\.\s/,"");r.push(U("li",{children:Mr(n)},r.length)),e++}e--,o?n.push(U("ol",{children:r},n.length)):n.push(U("ul",{children:r},n.length));continue}p.match(/^(-{3,}|\*{3,}|_{3,})$/)?(c(),n.push(U("hr",{},n.length))):""!==p?o.push(h):c()}}}return c(),d&&u(),n}function Mr(e){const r=[];let n=0;const t=[{regex:/\*\*(.*?)\*\*/g,render:(e,r)=>U("strong",{children:r},n++)},{regex:/\*(.*?)\*/g,render:(e,r)=>U("em",{children:r},n++)},{regex:/`([^`]+)`/g,render:(e,r)=>U("code",{className:"inline-code",children:r},n++)},{regex:/\[([^\]]+)\]\(([^)]+)\)/g,render:(e,r,t)=>U("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"link",children:r},n++)},{regex:/\[(\d+(?:,\s*\d+)*)\]/g,render:e=>U("span",{className:"citation",children:e},n++)}],o=[];t.forEach(r=>{let n;for(r.regex.lastIndex=0;null!==(n=r.regex.exec(e));){const e=[n[0]];for(let r=1;r<n.length;r++)e.push(n[r]);o.push({start:n.index,end:n.index+n[0].length,element:r.render.apply(null,e)})}}),o.sort((e,r)=>e.start-r.start);const a=[];let i=0;for(const e of o)e.start>=i&&(a.push(e),i=e.end);let s=0;for(const n of a)n.start>s&&r.push(e.substring(s,n.start)),r.push(n.element),s=n.end;return s<e.length&&r.push(e.substring(s)),r.length>0?r:[e]}function $r({messages:e,isLoading:r,streamingContent:n,config:t,sessionId:o,onFeedbackSubmit:a}){const i=ce(null);return de(()=>{var e;null===(e=i.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},[e,n]),U(_r,{children:[e.map((e,r)=>{var n,i,s;return"assistant"!==e.role||e.content?U(k,{children:[U(jr,{isUser:"user"===e.role,children:"user"===e.role?U(Ir,{children:[U(Dr,{children:e.content}),"boost"===(null===(n=e.metadata)||void 0===n?void 0:n.mode)&&U(tn,{children:[U(br,{size:12}),U("span",{children:"Boost"})]})]}):U(k,{children:U(Ar,{children:U(Rr,{children:[U(Tr,{children:Cr(e.content||"",!1)}),"boost"===(null===(i=e.metadata)||void 0===i?void 0:i.mode)&&U(tn,{assistant:!0,children:[U(br,{size:12}),U("span",{children:"Boost"})]})]})})})},e.id||r),"assistant"===e.role&&U(jr,{isUser:!1,children:U(Ar,{children:U(Rr,{children:U(Sr,{messageId:e.id,sessionId:o,feedback:null===(s=e.metadata)||void 0===s?void 0:s.feedback,onFeedbackSubmit:a,config:t})})})},`${e.id}-feedback`)]}):null}).filter(Boolean),r&&n&&n.trim()&&U(jr,{isUser:!1,children:U(Ar,{children:U(Rr,{children:[U(Fr,{children:"ja"===t.language?"リアルタイム応答中...":"Streaming response..."}),U(Tr,{children:(()=>{try{return Cr(n||"",!0)}catch(e){return U("p",{children:n||""})}})()})]})})}),U("div",{ref:i})]})}const _r=Te("div")`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`,jr=Te("div")`
  display: flex;
  justify-content: ${e=>e.isUser?"flex-end":"flex-start"};
  align-items: flex-start;
`,Ir=Te("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  max-width: 70%;
`,Dr=Te("div")`
  padding: 1rem 1.25rem;
  background: var(--askdona-primary);
  color: white;
  border-radius: 1rem 1rem 0.25rem 1rem;
  font-size: 0.875rem;
  line-height: 1.6;
  word-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`,Ar=Te("div")`
  display: flex;
  gap: 0.75rem;
  max-width: 85%;
`,Rr=Te("div")`
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
`,Tr=Te("div")`
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
`,Fr=Te("div")`
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
`,Er=Te("div")`
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
`,Or=Te("div")`
  margin: 16px 0;
  border-radius: 8px;
  border: 1px solid var(--askdona-border);
  background: var(--askdona-surface);
  overflow: hidden;
`,Nr=Te("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: var(--askdona-bg-secondary);
  border-bottom: 1px solid var(--askdona-border);
`,Pr=Te("span")`
  font-size: 12px;
  color: var(--askdona-text-secondary);
  font-weight: 500;
  text-transform: uppercase;
`,Lr=Te("button")`
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
`,qr=Te("pre")`
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
`,Hr=Te("div")`
  margin-top: 12px;
  padding: 8px 0;
`,Br=Te("div")`
  font-size: inherit;
  color: var(--askdona-text); /* use normal text color */
  margin-bottom: 6px;
  font-weight: 500;
`,Jr=Te("div")`
  display: flex;
  gap: 6px;
  align-items: center;
`,Vr=Te("button")`
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
`,Ur=Te("div")`
  font-size: 11px;
  color: var(--askdona-text-secondary);
  margin-top: 6px;
  font-style: italic;
`,Wr=Te("div")`
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
`,Qr=Te("div")`
  background: var(--askdona-background);
  border-radius: 12px;
  padding: 24px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--askdona-border);
`,Zr=Te("div")`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,Gr=Te("div")`
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
`,Kr=Te("h3")`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--askdona-text);
`,Yr=Te("div")`
  margin-bottom: 20px;
`,Xr=Te("textarea")`
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
`,en=Te("div")`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,rn=Te("button")`
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
`,nn=Te("button")`
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
`,tn=Te("div")`
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
`,on=Te("div")`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  padding: 16px;
`,an=Te("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`,sn=Te("div")`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #1e293b;
  font-size: 14px;
`,dn=Te("button")`
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
`,ln=Te("div")`
  margin-bottom: 12px;
`,cn=Te("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
`,un=Te("label")`
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
`,hn=Te("input")`
  margin: 0;
  width: 12px;
  height: 12px;
`,pn=Te("div")`
  font-size: 12px;
  color: #64748b;
  padding-top: 8px;
  border-top: 1px solid #f1f5f9;
`;function mn({filter:e,keyData:r,onFilterChange:n,onFilterRemove:t}){const o=he(r=>{const t=e.selectedValues.includes(r)?e.selectedValues.filter(e=>e!==r):[...e.selectedValues,r];n({...e,selectedValues:t})},[e,n]),a=he(()=>{t(e.key)},[e.key,t]);return U(on,{children:[U(an,{children:[U(sn,{children:[U(pr,{size:14}),e.key,r.isCustom&&U("span",{style:{fontSize:"10px",color:"#6b7280",background:"#f3f4f6",padding:"2px 6px",borderRadius:"8px"},children:"カスタム"})]}),U(dn,{onClick:a,title:"フィルターを削除",children:U(yr,{size:14})})]}),U(ln,{children:U(cn,{children:r.values.map(r=>{const n=e.selectedValues.includes(r);return U(un,{isSelected:n,onClick:()=>o(r),children:[U(hn,{type:"checkbox",checked:n,onChange:()=>o(r)}),r]},r)})})}),U(pn,{children:e.selectedValues.length>0?U(k,{children:[U("strong",{children:[e.selectedValues.length,"個の値を選択中:"]}),U("br",{}),e.selectedValues.join(", "),U("br",{}),U("em",{children:"選択した値のいずれかを含むファイルが対象になります (OR条件)"})]}):U("em",{children:"値を選択してください"})})]})}const gn=Te("div")`
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
`,fn=Te("div")`
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
`,bn=Te("div")`
  padding: 12px 20px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,vn=Te("h2")`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 8px;
`,yn=Te("button")`
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
`,kn=Te("div")`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,xn=Te("div")`
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
`,wn=Te("div")`
  margin-bottom: 16px;
`,zn=Te("label")`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  display: block;
`,Sn=Te("div")`
  display: flex;
  gap: 16px;
`,Cn=Te("label")`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #4b5563;
`,Mn=Te("input")`
  margin: 0;
`,$n=Te("button")`
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
`,_n=Te("div")`
  flex: 1;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,jn=Te("div")`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,In=Te("h3")`
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 16px 0;
`,Dn=Te("div")`
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`,An=Te("input")`
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  margin-bottom: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2364748b' viewBox='0 0 24 24'%3E%3Cpath d='M21 20l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 12px center;
`,Rn=Te("button")`
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
`,Tn=Te("div")`
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 4px;
`,Fn=Te("div")`
  font-size: 12px;
  color: #64748b;
`,En=Te("div")`
  text-align: center;
  color: #64748b;
  padding: 40px 20px;
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    color: #cbd5e1;
  }
`,On=Te("div")`
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
`,Nn=Te("div")`
  text-align: center;
  color: #ef4444;
  padding: 40px 20px;
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
  }
`;function Pn({isOpen:e,onClose:r,metadataKeys:n,filters:t,onFiltersChange:o,isLoading:a,error:i}){const[s,d]=se(""),[l,c]=se(t||{filters:[],globalOperator:"AND"});de(()=>{c(t||{filters:[],globalOperator:"AND"})},[t]);const u=he(e=>{e.target===e.currentTarget&&r()},[r]),h=he(()=>{const e=l.filters.some(e=>e.selectedValues.length>0);o(e?l:null),r()},[l,o,r]),p=he(()=>{c({filters:[],globalOperator:"AND"})},[]),m=he(e=>{const r={key:e,selectedValues:[],operator:"OR"};c(e=>({...e,filters:[...e.filters,r]}))},[]),g=he(e=>{c(r=>({...r,filters:r.filters.filter(r=>r.key!==e)}))},[]),f=he(e=>{c(r=>({...r,filters:r.filters.map(r=>r.key===e.key?e:r)}))},[]),b=he(e=>{c(r=>({...r,globalOperator:e}))},[]),v=n.filter(e=>{const r=l.filters.some(r=>r.key===e.key);if(r)return!1;if(s){const r=s.toLowerCase();return e.key.toLowerCase().includes(r)||e.values.some(e=>e.toLowerCase().includes(r))}return!0});return e?U(gn,{onClick:u,children:U(fn,{onClick:e=>e.stopPropagation(),children:[U(bn,{children:[U(vn,{children:[U(tr,{size:20}),"絞り込み設定",l.filters.length>0&&U("span",{style:{color:"#64748b",fontWeight:400,fontSize:"14px"},children:["(",l.filters.reduce((e,r)=>e+r.selectedValues.length,0),"件の条件)"]})]}),U(yn,{onClick:r,children:U(yr,{size:20})})]}),U(kn,{children:[l.filters.length>0&&U(xn,{children:[l.filters.length>1&&U(wn,{children:[U(zn,{children:"フィルター間の関係"}),U(Sn,{children:[U(Cn,{children:[U(Mn,{type:"radio",name:"globalOperator",checked:"AND"===l.globalOperator,onChange:()=>b("AND")}),"AND（すべての条件を満たす）"]}),U(Cn,{children:[U(Mn,{type:"radio",name:"globalOperator",checked:"OR"===l.globalOperator,onChange:()=>b("OR")}),"OR（いずれかの条件を満たす）"]})]})]}),U("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[U("span",{style:{fontSize:"14px",color:"#64748b"},children:"文書のメタデータでフィルタリングして検索範囲を絞り込みます"}),l.filters.length>0&&U($n,{onClick:p,children:"すべてクリア"})]})]}),U(_n,{children:[U(jn,{children:[U(In,{children:"設定済みフィルター"}),U(Dn,{children:l.filters.length>0?U("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:l.filters.map(e=>{const r=n.find(r=>r.key===e.key);return r?U(mn,{filter:e,keyData:r,onFilterChange:f,onFilterRemove:g},e.key):null})}):U(En,{children:[U(tr,{}),U("div",{style:{fontWeight:500,marginBottom:"4px"},children:"まだフィルターが設定されていません"}),U("div",{style:{fontSize:"14px"},children:"右側から絞り込み項目を選択してください"})]})})]}),U(jn,{children:[U(In,{children:"利用可能な絞り込み"}),U(An,{type:"text",placeholder:"絞り込み条件を検索...",value:s,onChange:e=>d(e.target.value)}),U(Dn,{children:a?U(On,{children:[U(ar,{}),"読み込み中..."]}):i?U(Nn,{children:[U(Qe,{}),U("div",{style:{fontWeight:500,marginBottom:"4px"},children:"エラーが発生しました"}),U("div",{style:{fontSize:"14px"},children:i})]}):v.length>0?U("div",{children:v.map(e=>U(Rn,{onClick:()=>m(e.key),children:[U(Tn,{children:e.key}),U(Fn,{children:[e.values.length,"個の値 • ",e.count,"件のファイル",U("br",{}),"例: ",e.values.slice(0,3).join(", "),e.values.length>3&&"..."]})]},e.key))}):U(En,{children:[U(cr,{}),U("div",{style:{fontWeight:500,marginBottom:"4px"},children:s?"検索結果がありません":"すべてのメタデータキーが選択済みです"})]})})]})]})]}),U("div",{style:{padding:"16px 20px",borderTop:"1px solid #e2e8f0",display:"flex",justifyContent:"flex-end",gap:"8px"},children:[U("button",{onClick:r,style:{padding:"8px 16px",border:"1px solid #e2e8f0",background:"white",color:"#374151",borderRadius:"6px",cursor:"pointer"},children:"キャンセル"}),U("button",{onClick:h,style:{padding:"8px 16px",border:"none",background:"#3b82f6",color:"white",borderRadius:"6px",cursor:"pointer",fontWeight:"500"},children:"適用"})]})]})}):null}const Ln=Te("button")`
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
`,qn=Te("span")`
  background: rgba(255, 255, 255, 0.9);
  color: #1e40af;
  padding: 0px 4px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 600;
  min-width: 14px;
  text-align: center;
  margin-left: 2px;
`,Hn=Te(tr)`
  width: 14px;
  height: 14px;
`;function Bn({chatflowId:e,filters:r,onFiltersChange:n,disabled:t=!1,className:o,language:a="ja"}){var i;const[s,d]=se(!1),[l,c]=se(!1),[u,h]=se([]),[p,m]=se(null),[g,f]=se(!1),[b,v]=se(null),[y,x]=se(!1),w=(null===(i=null==r?void 0:r.filters)||void 0===i?void 0:i.reduce((e,r)=>{var n;return e+((null===(n=r.selectedValues)||void 0===n?void 0:n.length)||0)},0))||0,z=w>0;de(()=>{let r=!0;const n=async()=>{if(await new Promise(e=>setTimeout(e,10)),r){f(!0);try{const n=await async function(e){try{return await B(`/metadata/${e}/check`,{method:"GET"})}catch(e){return{enable_metadata_filtering:!1,error:e.message}}}(e);r&&(m(n.enable_metadata_filtering),v(null))}catch(e){r&&(m(!1),v(e.message))}finally{r&&f(!1)}}};return e&&n(),()=>{r=!1}},[e]);const S=he(()=>{d(!0),!g&&y||c(!0),v(null)},[g,y]);de(()=>{if(!s||y)return;if(g)return;if(!1===p)return v("メタデータフィルタリングはこのチャットフローで利用できません"),c(!1),void x(!0);(async()=>{try{const r=await async function(e){try{return await B(`/metadata/${e}/keys`,{method:"GET"})}catch(e){return{success:!1,error:e.message}}}(e);r.success&&r.metadataKeys?h(r.metadataKeys):(v(r.error||"Failed to fetch metadata keys"),h([])),x(!0)}catch(e){v(e.message),h([]),x(!0)}finally{c(!1)}})()},[s,e,y,g,p]);const C=he(()=>{d(!1),h([]),c(!1),v(null),x(!1)},[]);return!0!==p?null:U(k,{children:[U(Ln,{hasActiveFilters:z,onClick:S,disabled:t,className:o,type:"button",title:g?"ja"===a?"フィルタ機能を確認中...":"Checking filter availability...":"ja"===a?"結果を絞り込む":"Filter results",children:[U(Hn,{}),U("span",{children:"ja"===a?"絞り込み":"Filter"}),z&&U(qn,{children:w})]}),s&&U(Pn,{isOpen:s,onClose:C,metadataKeys:u,filters:r,onFiltersChange:n,isLoading:l,error:b})]})}const Jn={idle:0,initializing:10,thinking:22,searching:42,synthesizing:58,processing:72,streaming:88,answering:90,finalizing:96,completing:98,complete:100,error:100},Vn=[{time:0,minProgress:5,label:"initializing"},{time:2e3,minProgress:12,label:"thinking"},{time:5e3,minProgress:20,label:"searching"},{time:9e3,minProgress:32,label:"synthesizing"},{time:13e3,minProgress:48,label:"processing"},{time:16e3,minProgress:64,label:"answering"},{time:18e3,minProgress:76,label:"finalizing"},{time:2e4,minProgress:88,label:"completing"},{time:21e3,minProgress:96,label:"complete"}],Un=[{time:0,minProgress:5,label:"initializing"},{time:2e3,minProgress:12,label:"thinking"},{time:5e3,minProgress:20,label:"searching"},{time:9e3,minProgress:32,label:"synthesizing"},{time:13e3,minProgress:48,label:"processing"},{time:16e3,minProgress:64,label:"answering"},{time:29e3,minProgress:76,label:"finalizing"},{time:31e3,minProgress:88,label:"completing"},{time:32e3,minProgress:96,label:"complete"}];const Wn={ja:{thinking:"考え中...",searching:"データベースを検索中...",synthesizing:"情報を整理中...",answering:"推論中...",executing_functions:"ツールを実行中...",processing_function_results:"実行結果を処理中...",complete:"情報を統合中...",error:"エラーが発生しました"},en:{thinking:"Thinking...",searching:"Searching the database...",synthesizing:"Organizing information...",answering:"Reasoning...",executing_functions:"Running tools...",processing_function_results:"Processing tool results...",complete:"Synthesizing...",error:"An error occurred"}};function Qn({messages:e,isLoading:r,streamingContent:n,onSendMessage:t,error:o,config:a,currentState:i,boostMode:s=!1,onBoostModeChange:d,sessionId:l,onFeedbackSubmit:c,showIntro:u,metadataFilters:h=null,onMetadataFiltersChange:p,currentMode:m,onModeSwitch:g,onClearChat:f}){const[b,v]=se(""),{progress:y,displayState:k}=function({isLoading:e,boostMode:r=!1,currentState:n}){const[t,o]=se(0),[a,i]=se(n||"idle"),s=ce(null),d=ce(0),l=ce(null),c=r?Un:Vn,u=c[c.length-1].time;return de(()=>{e&&!s.current?(s.current=Date.now(),d.current=0,o(c[0].minProgress)):e||(s.current=null,d.current=0,o(0),i("idle"),l.current&&cancelAnimationFrame(l.current))},[e,c]),de(()=>{if(!e||!s.current)return;const r=()=>{var t,a;const h=Date.now()-s.current;let p=0,m="processing";for(let e=c.length-1;e>=0;e--)if(h>=c[e].time){const r=c[e];if(e<c.length-1){const n=c[e+1],t=n.time-r.time,o=h-r.time,a=Math.min(o/t,1);p=r.minProgress+(n.minProgress-r.minProgress)*a}else p=r.minProgress;m=r.label||"processing";break}const g=98*function(e){return e<.5?2*e*e:(4-2*e)*e-1}(Math.min(h/u,1)),f=Math.max(p,g,d.current);let b=Math.min(f,98);const v=(m||"processing").toLowerCase(),y=(n||"").toLowerCase(),k=null!==(t=Jn[v])&&void 0!==t?t:72,x=y?null!==(a=Jn[y])&&void 0!==a?a:72:100,w=Math.min(k,x);b=Math.min(b,w),b>d.current&&(d.current=b,o(b)),i(m),e&&b<98&&(l.current=requestAnimationFrame(r))};return r(),()=>{l.current&&cancelAnimationFrame(l.current)}},[e,c,u,n]),de(()=>{if("answering"===n&&"answering"===a){const e=90;d.current<e&&(d.current=e,o(e))}},[n,a]),{progress:t,displayState:a,isProgressing:e}}({isLoading:r,boostMode:s,currentState:i}),[x,w]=se(0===e.length),[z,S]=se(!1),C=ce(null),M=void 0!==u?u:x;de(()=>{void 0===u&&e.length>0&&w(!1)},[e,u]);const $=()=>{const e=C.current;if(!e)return;e.style.height="auto";const r=Math.min(e.scrollHeight,96);e.style.height=`${r}px`,e.style.overflowY=e.scrollHeight>96?"auto":"hidden",e.style.lineHeight=r<=32?"32px":"1.5"};de(()=>{!r&&C.current&&"function"==typeof C.current.focus&&(C.current.focus(),C.current.style.minHeight="32px",$())},[r]);const _=e=>{null==e||e.preventDefault(),b.trim()&&!r&&(t(b.trim(),s,h),v(""))},j=a.exampleQuestions||("ja"===a.language?["RAGシステムについて教えてください","ドキュメントの検索方法は？","APIの使い方を教えてください"]:["What is RAG system?","How do I search documents?","How to use the API?"]);return U(Zn,{children:[U(et,{children:[M?U(rt,{children:[U(nt,{children:U(sr,{size:24,color:"white"})}),U(tt,{children:a.introTitle||("ja"===a.language?"こんにちは！":"Hi there!")}),U(ot,{children:a.introMessage||("ja"===a.language?"AskDona AIアシスタントです。ドキュメントや情報について何でもお聞きください。":"I'm AskDona AI assistant. Ask me anything about your documents and information.")}),U(at,{children:[U(it,{children:"ja"===a.language?"質問例":"Example Questions"}),U(st,{children:j.map((e,r)=>U(dt,{onClick:()=>(e=>{t(e,s,h)})(e),children:e},r))})]})]}):U($r,{messages:e,isLoading:r,streamingContent:n,config:a,sessionId:l,onFeedbackSubmit:c}),r&&U(ct,{children:[U(ut,{children:[U(ht,{}),U(pt,{children:n.trim()?"ja"===a.language?"リアルタイム応答中...":"Streaming response...":Wn[a.language||"ja"][k]||Wn[a.language||"ja"][i||""]||("ja"===a.language?"処理中...":"Processing...")})]}),!n.trim()&&U(mt,{children:U(gt,{progress:y})})]}),o&&U(lt,{children:"ja"===a.language?`エラーが発生しました: ${o.message}`:`Error: ${o.message}`})]}),g&&U(Gn,{children:U(Kn,{children:[U(Yn,{type:"button",active:"ask-ai"===(m||"ask-ai"),onClick:()=>g("ask-ai"),children:"ja"===a.language?"AIに質問":"Ask AI"}),U(Yn,{type:"button",active:"search"===m,onClick:()=>g("search"),children:"ja"===a.language?"検索":"Search"}),f&&"ask-ai"===(m||"ask-ai")&&e.length>0&&U(Xn,{type:"button",onClick:f,title:"ja"===a.language?"新しいセッションを開始":"Start new session","aria-label":"ja"===a.language?"新しいセッションを開始":"Start new session",disabled:r,children:U(lr,{size:14})})]})}),U(ft,{children:U(kt,{boostMode:s,children:U(xt,{children:[U(wt,{children:U(Ct,{ref:C,value:b,onChange:e=>{v(e.target.value),$()},onKeyDown:e=>{z||(e=>{"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),_())})(e)},onCompositionStart:()=>{S(!0)},onCompositionEnd:()=>{S(!1)},placeholder:"ja"===a.language?"質問を入力してください... (Ctrl+Enter または ⌘+Enter で送信)":"Ask me anything... (Ctrl+Enter or ⌘+Enter to send)",disabled:r,rows:1,boostMode:s})}),U(zt,{children:[U("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.chatflowId&&p&&U(Bn,{chatflowId:a.chatflowId,filters:h,onFiltersChange:p,disabled:r,language:a.language||"ja"}),a.allowBoostModeToggle&&d&&U(bt,{onClick:()=>d(!s),disabled:r,active:s,title:"ja"===a.language?"Boostモードは、より多角的な視点から多くの文書を分析して回答します。":"Boost mode analyzes more documents from multiple perspectives for comprehensive answers.",children:[U(vt,{active:s,children:U(br,{size:14})}),U(yt,{children:"Boost"})]})]}),U(St,{onClick:_,disabled:!b.trim()||r,title:"ja"===a.language?"Ctrl+Enter または ⌘+Enter で送信":"Ctrl+Enter or ⌘+Enter to send",type:"button","data-askdona-button":"send","data-disabled":!b.trim()||r,children:U(Be,{size:16,color:(()=>{var e;if(!b.trim()||r){return(null===(e=getComputedStyle(document.documentElement).getPropertyValue("--askdona-text-secondary"))||void 0===e?void 0:e.trim())||"#6b6f8a"}return"white"})()})})]})]})})})]})}const Zn=Te("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Gn=Te("div")`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem 0.25rem;
  flex-shrink: 0;
  align-items: center;
  /* tabs aligned left by default */
`,Kn=Te("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
`,Yn=Te("button")`
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
`,Xn=Te("button")`
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
`,et=Te("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
`,rt=Te("div")`
  text-align: center;
  padding: 2rem 0;
`,nt=Te("div")`
  width: 3rem;
  height: 3rem;
  background: var(--askdona-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
`,tt=Te("h3")`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--askdona-text);
`,ot=Te("p")`
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  margin: 0 auto 2rem;
  max-width: 90%;
  line-height: 1.5;
`,at=Te("div")`
  margin-top: 2rem;
`,it=Te("h4")`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--askdona-text-secondary);
  margin: 0 0 1rem;
`,st=Te("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`,dt=Te("button")`
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
`,lt=Te("div")`
  background: rgba(239, 68, 68, 0.1);
  color: var(--askdona-error);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  font-size: 0.875rem;
`,ct=Te("div")`
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
`,ut=Te("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ht=Te("div")`
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
`,pt=Te("span")`
  font-weight: 500;
`,mt=Te("div")`
  width: 30%;
  height: 6px;
  background: var(--askdona-border);
  border-radius: 3px;
  overflow: hidden;
`,gt=Te("div")`
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
`,ft=Te("div")`
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  flex-shrink: 0;
`,bt=Te("button")`
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
`,vt=Te("span")`
  display: flex;
  align-items: center;
  opacity: ${({active:e})=>e?1:.8};
`,yt=Te("span")`
  font-weight: 500;
  font-size: 12px;
`,kt=Te("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  
  ${({boostMode:e})=>e&&"\n    &::before {\n      content: '';\n      position: absolute;\n      top: -2px;\n      left: -2px;\n      right: -2px;\n      bottom: -2px;\n      background: linear-gradient(135deg, var(--askdona-primary), var(--askdona-primary-light));\n      border-radius: 0.875rem;\n      z-index: -1;\n    }\n  "}
`,xt=Te("div")`
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
`,wt=Te("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`,zt=Te("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
`,St=Te("button")`
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
`,Ct=Te("textarea")`
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
`;class Mt{static getStorageKey(){return"askdona_search_history"}static getAllHistory(){try{const e=localStorage.getItem(this.getStorageKey());if(!e)return[];const r=JSON.parse(e),n=Date.now()-2592e6;return r.filter(e=>e.timestamp>n)}catch(e){return[]}}static saveHistory(e){try{const r=e.slice(0,50);localStorage.setItem(this.getStorageKey(),JSON.stringify(r))}catch(e){}}static addSearchHistory(e,r,n,t){const o={id:`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,query:r.trim(),resultsCount:n,searchTime:t,timestamp:Date.now(),chatflowId:e},a=this.getAllHistory();a.unshift(o),this.saveHistory(a)}static getSearchHistory(e,r=20){return this.getAllHistory().filter(r=>r.chatflowId===e).slice(0,r)}static getRecentQueries(e,r=10,n=!0){const t=this.getSearchHistory(e,n?100:r);if(n){const e=new Set,n=[];for(const o of t){const t=o.query.toLowerCase();if(!e.has(t)&&(e.add(t),n.push(o.query),n.length>=r))break}return n}return t.map(e=>e.query)}static getPopularQueries(e,r=10){const n=this.getSearchHistory(e,1e3),t=new Map;return n.forEach(e=>{const r=e.query.toLowerCase();t.set(r,(t.get(r)||0)+1)}),Array.from(t.entries()).map(([e,r])=>{var t;return{query:(null===(t=n.find(r=>r.query.toLowerCase()===e))||void 0===t?void 0:t.query)||e,count:r}}).sort((e,r)=>r.count-e.count).slice(0,r)}static clearHistory(e){if(e){const r=this.getAllHistory().filter(r=>r.chatflowId!==e);this.saveHistory(r)}else localStorage.removeItem(this.getStorageKey())}static getHistoryStats(e){const r=this.getSearchHistory(e,1e3);if(0===r.length)return{totalSearches:0,uniqueQueries:0,avgResultsCount:0,avgSearchTime:0};const n=new Set(r.map(e=>e.query.toLowerCase())).size,t=r.reduce((e,r)=>e+r.resultsCount,0)/r.length,o=r.reduce((e,r)=>e+r.searchTime,0)/r.length;return{totalSearches:r.length,uniqueQueries:n,avgResultsCount:Math.round(t),avgSearchTime:Math.round(o)}}}function $t({config:e,currentMode:r,onModeSwitch:n,onClearSearch:t}){var o,a;const[i,s]=se(""),[d,l]=se(null),[c,u]=se([]),[h,p]=se({}),[m,g]=se(!1),[f,b]=se(null),v=ce(null),[y,x]=se(!1),{recentQueries:w,addSearchHistory:z}=function(e,r={}){const{limit:n=20,uniqueQueries:t=!0,autoRefresh:o=!0}=r,[a,i]=se([]),[s,d]=se([]),l=he(()=>{if(!e)return;const r=Mt.getRecentQueries(e,n,t);i(r);const o=Mt.getPopularQueries(e,10);d(o)},[e,n,t]);de(()=>{o&&l()},[o,l]);const c=he((r,n,t)=>{e&&r.trim()&&(Mt.addSearchHistory(e,r,n,t),o&&l())},[e,o,l]),u=he(()=>{e&&(Mt.clearHistory(e),i([]),d([]))},[e]),h=he(()=>e?Mt.getHistoryStats(e):null,[e]);return{recentQueries:a,popularQueries:s,addSearchHistory:c,clearHistory:u,refresh:l,getStats:h}}(e.chatflowId),S=`askdona_widget_last_search_${e.chatflowId}`,C=he((e,r)=>{try{const n={query:e,response:r,savedAt:Date.now()};localStorage.setItem(S,JSON.stringify(n))}catch(e){}},[S]),M=he(()=>{try{const e=localStorage.getItem(S);if(!e)return null;const r=JSON.parse(e);return r&&"object"==typeof r?r:null}catch(e){return null}},[S]);de(()=>{v.current&&"function"==typeof v.current.focus&&v.current.focus();const e=M();e&&e.response&&(s(e.query||""),l(e.response),u(e.response.results||[]),p({}))},[M]);const $=he(async r=>{var n;if(!r.trim())return l(null),void u([]);p({}),g(!0),b(null);const t=Date.now();try{const o={query:r,filters:{}},a=await async function(e,r){try{return await B(`/search/${e}`,{method:"POST",body:JSON.stringify(r)})}catch(e){throw e}}(e.chatflowId,o);l(a),u(a.results||[]),C(r,a);const i=Date.now()-t;z(r,(null===(n=a.results)||void 0===n?void 0:n.length)||0,i)}catch(e){b(e instanceof Error?e.message:"Unknown error occurred"),l(null),u([])}finally{g(!1)}},[e.chatflowId,z,C]),_=he(()=>{i.trim()&&$(i.trim())},[i,$]),j=he(e=>{y||"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),_())},[_,y]),I=ue(()=>{if(!c.length)return[];let e=[...c];return h.categories&&h.categories.length>0&&(e=e.filter(e=>{var r,n;const t=null===(r=e.fileMetadata)||void 0===r?void 0:r.category,o=null===(n=e.fileMetadata)||void 0===n?void 0:n.subCategory;return h.categories.includes(t||"")||h.categories.includes(o||"")})),h.fileTypes&&h.fileTypes.length>0&&(e=e.filter(e=>h.fileTypes.includes(e.fileFormat))),e},[c,h]),D=ue(()=>I,[I]),A=he(()=>{s(""),l(null),u([]),p({}),b(null),v.current&&v.current.focus();try{localStorage.removeItem(S)}catch(e){}t&&t()},[S,t]),R=e=>{p(e)},T=e=>{if(!i.trim())return U(k,{children:e});return U(k,{children:e.split(new RegExp(`(${i})`,"gi")).map((e,r)=>e.toLowerCase()===i.toLowerCase()?U(Zt,{children:e},r):U("span",{children:e},r))})},F=ue(()=>{if(!d)return[];return[{id:"all",label:"ja"===e.language?"すべて":"All",count:I.length},...d.facets.fileTypes.map(e=>({id:e.value,label:e.value.toUpperCase(),count:e.count}))]},[d,I.length,e.language]);return U(_t,{children:[d&&U(to,{"data-search-results-header":!0,children:[U(oo,{children:["ja"===e.language?"検索結果":"Search Results",": ",I.length.toLocaleString()," ","ja"===e.language?"件":"items",(null===(o=h.categories)||void 0===o?void 0:o.length)||(null===(a=h.fileTypes)||void 0===a?void 0:a.length)?U(ao,{children:"ja"===e.language?"フィルタ適用済":"Filtered"}):null]}),U(io,{children:["ja"===e.language?"検索時間":"Search time",": ",d.searchTime,"ms"]})]}),d&&F.length>1&&U(Jt,{children:F.map(e=>U(Vt,{active:"all"===e.id||Boolean(h.fileTypes&&h.fileTypes.includes(e.id)),onClick:()=>{"all"===e.id?R({}):R({fileTypes:[e.id]})},children:[e.label,U(Ut,{children:["(",e.count,")"]})]},e.id))}),U(Wt,{children:m?U(Gt,{children:[U(Kt,{}),U(Yt,{children:"ja"===e.language?"検索中...":"Searching..."})]}):f?U(so,{children:[U(lo,{children:"⚠️"}),U(co,{children:"ja"===e.language?"検索エラー":"Search Error"}),U(uo,{children:f})]}):i&&0===I.length&&d?U(Xt,{children:"ja"===e.language?`"${i}" に一致する結果が見つかりませんでした`:`No results found for "${i}"`}):D.length>0?U(k,{children:U(Qt,{children:D.map(r=>U(ho,{children:U(po,{children:[U(mo,{children:r.fileMetadata.url?U("a",{href:r.fileMetadata.url,target:"_blank",rel:"noopener noreferrer",children:T(r.fileMetadata.title||r.fileName)}):U("span",{children:T(r.fileMetadata.title||r.fileName)})}),U(go,{children:[U("strong",{children:"ja"===e.language?"フォーマット:":"Format:"})," ",r.fileFormat.toUpperCase()]}),r.fileMetadata.body&&U(fo,{children:[U("strong",{children:"ja"===e.language?"本文:":"Content:"}),U(bo,{children:T(r.fileMetadata.body)})]})]})},r.fileId))})}):U(eo,{children:[U(ro,{children:"🔍"}),U(no,{children:"ja"===e.language?"検索キーワードを入力してください (Ctrl+Enter または ⌘+Enter で送信)":"Enter a search term to see results (Ctrl+Enter or ⌘+Enter to send)"})]})}),n&&U(jt,{children:U(It,{children:[U(At,{type:"button",active:"ask-ai"===(r||"ask-ai"),onClick:()=>n("ask-ai"),children:"ja"===e.language?"AIに質問":"Ask AI"}),U(At,{type:"button",active:"search"===r,onClick:()=>n("search"),children:"ja"===e.language?"検索":"Search"}),"search"===r&&(i||d)&&U(Dt,{type:"button",onClick:A,title:"ja"===e.language?"検索をクリア":"Clear search","aria-label":"ja"===e.language?"検索をクリア":"Clear search",disabled:m,children:U(lr,{size:14})})]})}),U(Ht,{children:U(Rt,{children:U(Tt,{children:[w.length>0&&U(Ft,{children:[U(Et,{children:"ja"===e.language?"最近の検索":"Recent searches"}),U(Ot,{children:w.slice(0,8).map((e,r)=>U(Nt,{onClick:()=>{return s(r=e),void $(r);var r},children:e},r))})]}),U(Pt,{children:[U(qt,{ref:v,value:i,onInput:e=>{(e=>{const r=e.target.value;s(r)})(e),(()=>{const e=v.current;if(!e)return;e.style.height="auto";const r=Math.min(e.scrollHeight,96);e.style.height=`${r}px`,e.style.overflowY=e.scrollHeight>96?"auto":"hidden",e.style.lineHeight=r<=32?"32px":"1.5"})()},onKeyDown:j,onCompositionStart:()=>x(!0),onCompositionEnd:()=>x(!1),placeholder:"ja"===e.language?"検索キーワードを入力... (Ctrl+Enter または ⌘+Enter で送信)":"Enter search keywords... (Ctrl+Enter or ⌘+Enter to send)",rows:1}),U(Lt,{onClick:_,"data-disabled":!i.trim()||m,title:"ja"===e.language?"検索 (Enter または Ctrl+Enter)":"Search (Enter or Ctrl+Enter)",type:"button",children:m?U(Bt,{}):U(Be,{size:16,color:"white"})})]})]})})})]})}const _t=Te("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,jt=Te("div")`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem 0.25rem; /* align underline position with ChatView */
  flex-shrink: 0;
  align-items: center; /* match ChatView */
  position: relative;
  z-index: 2; /* ensure tab underline renders above input separator */
`,It=Te("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
`,Dt=Te("button")`
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
`,At=Te("button")`
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
`,Rt=Te("div")`
  position: relative;
  width: 100%;
`,Tt=Te("div")`
  position: relative;
  display: flex;
  flex-direction: column;
`,Ft=Te("div")`
  padding: 0.25rem 0.25rem 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Et=Te("div")`
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.025em;
`,Ot=Te("div")`
  display: flex;
  gap: 0.375rem;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
`,Nt=Te("button")`
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
`,Pt=Te("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid var(--askdona-border);
  border-radius: ${({expanded:e})=>e?"0.75rem 0.75rem 0 0":"0.75rem"};
  background: var(--askdona-background);
  transition: all 0.2s;
  ${({expanded:e})=>e&&"border-bottom: none;"}
`,Lt=Te("button")`
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
`,qt=Te("textarea")`
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
`,Ht=Te("div")`
  position: relative;
  padding: 1rem 1.5rem; /* match ChatView InputArea spacing */
  border-top: 1px solid var(--askdona-border);
  flex-shrink: 0;
`,Bt=Te("div")`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Jt=Te("div")`
  display: flex;
  gap: 1.5rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  overflow-x: auto;
  flex-shrink: 0;
  
  &::-webkit-scrollbar {
    height: 0;
  }
`,Vt=Te("button")`
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
`,Ut=Te("span")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin-left: 0.25rem;
`,Wt=Te("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1rem 1.5rem;
`,Qt=Te("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* tighter spacing between cards */
`,Zt=Te("span")`
  background: rgba(var(--askdona-primary-rgb), 0.2);
  padding: 0 0.125rem;
  border-radius: 0.125rem;
  font-weight: 500;
`,Gt=Te("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`,Kt=Te("div")`
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--askdona-border);
  border-top-color: var(--askdona-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Yt=Te("p")`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
`,Xt=Te("div")`
  text-align: center;
  padding: 3rem;
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
`,eo=Te("div")`
  text-align: center;
  padding: 3rem;
`,ro=Te("div")`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`,no=Te("p")`
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
  margin: 0;
`,to=Te("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  background: var(--askdona-surface);
`,oo=Te("h3")`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: var(--askdona-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ao=Te("span")`
  background: var(--askdona-primary);
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 500;
`,io=Te("p")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin: 0;
`,so=Te("div")`
  text-align: center;
  padding: 3rem;
  color: var(--askdona-error);
`,lo=Te("div")`
  font-size: 2rem;
  margin-bottom: 1rem;
`,co=Te("h3")`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--askdona-error);
`,uo=Te("p")`
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  margin: 0;
`,ho=Te("div")`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 0; /* rely on ResultsList gap for spacing */
  transition: all 0.2s;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,po=Te("div")`
  padding: 0.75rem; /* slightly tighter */
  display: flex;
  flex-direction: column;
  gap: 0.375rem; /* slightly tighter */
`,mo=Te("h4")`
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
`,go=Te("p")`
  margin: 0; /* remove extra spacing */
  font-size: 0.75rem; /* smaller row text */
  color: var(--askdona-text-secondary); /* lighter overall */
  
  strong {
    color: var(--askdona-text-secondary); /* lighter label color */
    font-size: 0.6875rem; /* even smaller label text */
    opacity: 0.75; /* make label appear lighter */
  }
`,fo=Te("div")`
  margin-top: 0.5rem;
  
  strong {
    display: block;
    margin-bottom: 0.25rem;
    color: #202124;
    font-size: 0.875rem;
  }
`,bo=Te("p")`
  margin: 0;
  font-size: 0.875rem;
  color: #5f6368;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;function vo({originalQuery:e,questions:r,onSubmit:n,onBack:t,isSubmitting:o=!1,error:a}){const[i,s]=se(new Array(r.length).fill("")),d=i.every(e=>e.trim().length>0),l=i.filter(e=>e.trim().length>0).length;return U(yo,{children:[U(ko,{children:[U(xo,{children:U(Ge,{size:24,color:"white"})}),U(wo,{children:[U(zo,{children:"🔍 Research Planning Questions"}),U(So,{children:"Help us understand what you're looking for"})]})]}),U(Co,{children:[U(Mo,{children:"Your Research Query:"}),U($o,{children:['"',e,'"']})]}),U(_o,{children:[U(jo,{children:[U(Io,{children:"Questions Completed"}),U(Do,{children:[l,"/",r.length]})]}),U(Ao,{children:U(Ro,{progress:l/r.length*100})})]}),U(To,{children:[U(Fo,{children:"💡"}),U(Eo,{children:"Please answer these questions to help us conduct more targeted and comprehensive research. The more specific your answers, the better the research results will be."})]}),U(Oo,{children:r.map((e,r)=>U(No,{children:[U(Po,{children:U("span",{children:r+1})}),U(Lo,{children:[U(qo,{children:e}),U(Ho,{value:i[r],onChange:e=>((e,r)=>{const n=[...i];n[e]=r,s(n)})(r,e.target.value),placeholder:"Please provide your answer here...",rows:3,disabled:o})]})]},r))}),a&&U(Bo,{children:[U(Qe,{size:16}),U("span",{children:a})]}),U(Jo,{children:[t&&U(Vo,{onClick:t,disabled:o,children:"← Back to Query"}),U(Uo,{onClick:()=>{const e=r.map((e,r)=>({question:e,answer:i[r]||""}));n(e)},disabled:!d||o,children:U(k,o?{children:[U(ir,{size:16,className:"spin"}),"Starting Research..."]}:{children:[U(He,{size:16}),"Start Deep Research"]})})]}),U(Wo,{children:[U(Qo,{children:"💡"}),U(Zo,{children:[U(Go,{children:"Tips for Better Results:"}),U(Ko,{children:[U(Yo,{children:"✅ Be specific about what aspects interest you most"}),U(Yo,{children:"⏰ Mention any time periods or geographical regions"}),U(Yo,{children:"🎯 Clarify if you need academic or practical information"}),U(Yo,{children:"📊 Specify the depth of detail you're looking for"})]})]})]})]})}const yo=Te("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
`,ko=Te("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
`,xo=Te("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,wo=Te("div")`
  flex: 1;
`,zo=Te("h3")`
  margin: 0 0 0.25rem;
  font-size: 1.125rem;
  font-weight: 600;
`,So=Te("p")`
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
`,Co=Te("div")`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  background: rgba(var(--askdona-primary-rgb, 67, 56, 202), 0.05);
`,Mo=Te("h4")`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
`,$o=Te("p")`
  margin: 0;
  font-style: italic;
  color: var(--askdona-text);
  line-height: 1.5;
`,_o=Te("div")`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`,jo=Te("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,Io=Te("span")`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--askdona-text);
`,Do=Te("span")`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-primary);
`,Ao=Te("div")`
  height: 0.5rem;
  background: var(--askdona-border);
  border-radius: 0.25rem;
  overflow: hidden;
`,Ro=Te("div")`
  height: 100%;
  width: ${({progress:e})=>Math.min(Math.max(e,0),100)}%;
  background: var(--askdona-primary);
  border-radius: 0.25rem;
  transition: width 0.3s ease-in-out;
`,To=Te("div")`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  background: rgba(59, 130, 246, 0.05);
`,Fo=Te("div")`
  font-size: 1.25rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
`,Eo=Te("p")`
  margin: 0;
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  line-height: 1.5;
`,Oo=Te("div")`
  padding: 1.5rem;
`,No=Te("div")`
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
`,Po=Te("div")`
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
`,Lo=Te("div")`
  flex: 1;
`,qo=Te("p")`
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
  color: var(--askdona-text);
  line-height: 1.5;
`,Ho=Te("textarea")`
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
`,Bo=Te("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  font-size: 0.875rem;
  border-top: 1px solid var(--askdona-border);
`,Jo=Te("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid var(--askdona-border);
`,Vo=Te("button")`
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
`,Uo=Te("button")`
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
`,Wo=Te("div")`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(16, 185, 129, 0.05);
  border-top: 1px solid var(--askdona-border);
`,Qo=Te("div")`
  font-size: 1.25rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
`,Zo=Te("div")`
  flex: 1;
`,Go=Te("p")`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text);
`,Ko=Te("div")`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Yo=Te("div")`
  font-size: 0.8125rem;
  color: var(--askdona-text-secondary);
  line-height: 1.4;
`,Xo={pending:{label:"Initializing",icon:Ye,description:"Setting up Deep Research...",color:"#6b7280"},"follow-up":{label:"Planning Research",icon:mr,description:"Analyzing your query and planning research approach",color:"#3b82f6"},"research-outline":{label:"Creating Outline",icon:Ke,description:"Building comprehensive research outline",color:"#3b82f6"},search:{label:"Searching Sources",icon:cr,description:"Finding and analyzing relevant sources",color:"#059669"},extraction:{label:"Extracting Information",icon:er,description:"Extracting key information from sources",color:"#059669"},"new-angles":{label:"Exploring Angles",icon:Je,description:"Discovering additional research angles",color:"#7c3aed"},synthesis:{label:"Synthesizing Results",icon:kr,description:"Combining findings into comprehensive report",color:"#dc2626"},processing:{label:"Processing",icon:nr,description:"Processing your research request",color:"#3b82f6"},completed:{label:"Complete",icon:Ze,description:"Research completed successfully",color:"#059669"},failed:{label:"Failed",icon:vr,description:"Research failed",color:"#dc2626"}};function ea(e){const r=Math.floor(e/60),n=e%60;return 0===r?`${n}s`:0===n?`${r}m`:`${r}m ${n}s`}function ra(e){if(!e||e<=0)return"";const r=Math.floor(e/60),n=e%60;return 0===r?`~${n}s remaining`:n<30?`~${r}m remaining`:`~${r+1}m remaining`}function na({job:e,isLoading:r,onCancel:n}){var t,o;const[a,i]=se(0);de(()=>{const r=new Date(e.startedAt).getTime(),n=()=>{const e=Date.now(),n=Math.floor((e-r)/1e3);i(n)};n();const t=setInterval(n,1e3);return()=>clearInterval(t)},[e.startedAt]);const s=(null===(t=e.progress)||void 0===t?void 0:t.stage)||e.status,d=Xo[s]||Xo.processing,l=(null===(o=e.progress)||void 0===o?void 0:o.progress)||0,c=d.icon;return U(ta,{children:[U(oa,{children:U(aa,{children:[U(ia,{color:d.color,children:U(c,{size:20,color:"white"})}),U(sa,{children:[U(da,{children:"🔍 Deep Research in Progress"}),U(la,{children:[U(ca,{children:[U(Ye,{size:14}),ea(a)]}),U(ca,{children:["ID: ",e.jobId.slice(-8)]})]})]})]})}),U(ua,{children:[U(ha,{children:"Research Query:"}),U(pa,{children:['"',e.query,'"']})]}),U(ma,{children:[U(ga,{children:[U(fa,{color:d.color,children:U(c,{size:24})}),U(ba,{children:[U(va,{color:d.color,children:d.label}),U(ya,{children:d.description})]})]}),"processing"===e.status&&U(ka,{children:[U(xa,{children:U(wa,{progress:l,color:d.color})}),U(za,{children:[Math.round(l),"%"]})]})]}),e.progress&&U(Sa,{children:[e.progress.sources&&e.progress.sources>0&&U(Ca,{children:[U(Ma,{children:U(er,{size:16,color:"#6b7280"})}),U($a,{children:[U(_a,{children:"Sources Found"}),U(ja,{children:e.progress.sources})]})]}),e.progress.estimatedTimeRemaining&&U(Ca,{children:[U(Ma,{children:U(Ye,{size:16,color:"#6b7280"})}),U($a,{children:[U(_a,{children:"Estimated"}),U(ja,{children:ra(e.progress.estimatedTimeRemaining)})]})]}),e.estimatedDuration&&U(Ca,{children:[U(Ma,{children:U(mr,{size:16,color:"#6b7280"})}),U($a,{children:[U(_a,{children:"Expected Duration"}),U(ja,{children:e.estimatedDuration})]})]}),e.creditsConsumed&&U(Ca,{children:[U(Ma,{children:"💳"}),U($a,{children:[U(_a,{children:"Credits Used"}),U(ja,{children:e.creditsConsumed})]})]})]}),"pending"===e.status&&U(Ia,{type:"info",children:[U(vr,{size:16}),"Your request is queued and will start processing shortly..."]}),"failed"===e.status&&e.error&&U(Ia,{type:"error",children:[U(vr,{size:16}),U("div",{children:[U("strong",{children:"Research Failed:"}),U("p",{children:e.error})]})]}),U(Da,{children:[n&&("pending"===e.status||"processing"===e.status)&&U(Aa,{onClick:n,disabled:r,children:[U(yr,{size:16}),"Cancel Research"]}),U(Ra,{children:[U(Ta,{children:"💡 What's happening?"}),U(Fa,{children:[U(Ea,{children:"Deep Research Process:"}),U(Oa,{children:[U(Na,{children:"📝 Creating a detailed research outline"}),U(Na,{children:"🔍 Searching multiple databases and sources"}),U(Na,{children:"📊 Extracting and analyzing key information"}),U(Na,{children:"🔬 Exploring different research angles"}),U(Na,{children:"⚡ Synthesizing findings into a final report"})]}),U(Pa,{children:"This process typically takes 5-20 minutes depending on complexity."})]})]})]})]})}const ta=Te("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
`,oa=Te("div")`
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
`,aa=Te("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
`,ia=Te("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,sa=Te("div")`
  flex: 1;
`,da=Te("h3")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`,la=Te("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  opacity: 0.9;
`,ca=Te("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,ua=Te("div")`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`,ha=Te("h4")`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
`,pa=Te("p")`
  margin: 0;
  font-style: italic;
  color: var(--askdona-text);
  line-height: 1.5;
`,ma=Te("div")`
  padding: 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`,ga=Te("div")`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`,fa=Te("div")`
  width: 3rem;
  height: 3rem;
  background: ${({color:e})=>e};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`,ba=Te("div")`
  flex: 1;
`,va=Te("h4")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({color:e})=>e};
`,ya=Te("p")`
  margin: 0;
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
`,ka=Te("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
`,xa=Te("div")`
  flex: 1;
  height: 0.5rem;
  background: var(--askdona-border);
  border-radius: 0.25rem;
  overflow: hidden;
`,wa=Te("div")`
  height: 100%;
  width: ${({progress:e})=>Math.min(Math.max(e,0),100)}%;
  background: ${({color:e})=>e};
  border-radius: 0.25rem;
  transition: width 0.3s ease-in-out;
`,za=Te("span")`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text);
  min-width: 3rem;
  text-align: right;
`,Sa=Te("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`,Ca=Te("div")`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
`,Ma=Te("div")`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--askdona-border);
  border-radius: 0.375rem;
  flex-shrink: 0;
`,$a=Te("div")`
  flex: 1;
  min-width: 0;
`,_a=Te("div")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin-bottom: 0.25rem;
`,ja=Te("div")`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text);
  word-break: break-word;
`,Ia=Te("div")`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  font-size: 0.875rem;
  
  ${({type:e})=>"info"===e&&"\n    background: rgba(59, 130, 246, 0.1);\n    color: #1e40af;\n  "}
  
  ${({type:e})=>"error"===e&&"\n    background: rgba(239, 68, 68, 0.1);\n    color: #dc2626;\n  "}
`,Da=Te("div")`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Aa=Te("button")`
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
`,Ra=Te("details")`
  font-size: 0.875rem;
`,Ta=Te("summary")`
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
`,Fa=Te("div")`
  margin-top: 0.75rem;
  padding: 1rem;
  border: 1px solid var(--askdona-border);
  border-radius: 0.375rem;
  background: var(--askdona-background);
`,Ea=Te("p")`
  margin: 0 0 0.75rem;
  font-weight: 600;
  color: var(--askdona-text);
`,Oa=Te("ul")`
  margin: 0 0 1rem;
  padding-left: 1.5rem;
`,Na=Te("li")`
  margin: 0.5rem 0;
  color: var(--askdona-text);
`,Pa=Te("p")`
  margin: 0;
  font-size: 0.8125rem;
  color: var(--askdona-text-secondary);
  font-style: italic;
`;function La(e,r){if(!r)return"";const n=new Date(e).getTime(),t=new Date(r).getTime()-n,o=Math.floor(t/1e3),a=Math.floor(o/60),i=o%60;return 0===a?`${i}s`:`${a}m ${i}s`}function qa({sources:e}){const[r,n]=se(new Set);return e&&0!==e.length?U(wi,{children:[U(zi,{children:U(Si,{children:["📚 Sources (",e.length,")"]})}),e.map((e,t)=>U(Ci,{children:[U(Mi,{onClick:()=>(e=>{const t=new Set(r);t.has(e)?t.delete(e):t.add(e),n(t)})(t),children:[U($i,{children:[U(_i,{href:e.url,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:[U(rr,{size:14}),e.title]}),e.domain&&U(ji,{children:[U(or,{size:12}),e.domain]})]}),U(Ii,{children:r.has(t)?U(Ue,{size:16}):U(We,{size:16})})]}),r.has(t)&&e.excerpt&&U(Di,{children:[U(Ai,{children:['"',e.excerpt,'"']}),e.relevance&&U(Ri,{children:[U(hr,{size:12}),"Relevance: ",Math.round(100*e.relevance),"%"]})]})]},t))]}):U(Ni,{children:[U(Pi,{children:U(nr,{size:20,color:"#6b7280"})}),U(Li,{children:"No sources were referenced in this research."})]})}function Ha({content:e}){return U(fi,{children:(r=e,r.split("\n").map((e,r)=>{if(""===e.trim())return null;if(e.startsWith("# "))return U(bi,{children:e.substring(2)},r);if(e.startsWith("## "))return U(vi,{children:e.substring(3)},r);if(e.startsWith("### "))return U(yi,{children:e.substring(4)},r);if(e.startsWith("- ")||e.startsWith("* "))return U(xi,{children:e.substring(2)},r);if(/^\d+\.\s/.test(e)){const n=e.replace(/^\d+\.\s/,"");return U(xi,{children:n},r)}return U(ki,{children:e},r)}).filter(Boolean))});var r}function Ba({job:e,onNewResearch:r,onClose:n}){const[t,o]=se("results"),a=e.results,i=(null==a?void 0:a.content)||(null==a?void 0:a.summary)||(null==a?void 0:a.report),s=(null==a?void 0:a.sources)||[],d=(null==a?void 0:a.metadata)||{};return U(Ja,{children:[U(Va,{children:U(Ua,{children:[U(Wa,{children:[U(Qa,{children:U(Ze,{size:24,color:"white"})}),U(Za,{children:[U(Ga,{children:"✅ Deep Research Complete"}),U(Ka,{children:[e.completedAt&&U(Ya,{children:[U(Ye,{size:14}),La(e.startedAt,e.completedAt)]}),e.creditsConsumed&&U(Ya,{children:["💳 ",e.creditsConsumed," credits used"]})]})]})]}),n&&U(Xa,{onClick:n,children:U(yr,{size:20})})]})}),U(ei,{children:[U(ri,{children:"Research Query:"}),U(ni,{children:['"',e.query,'"']})]}),U(ti,{children:[U(oi,{active:"results"===t,onClick:()=>o("results"),children:"📄 Results"}),U(oi,{active:"sources"===t,onClick:()=>o("sources"),children:["📚 Sources ",s.length>0&&`(${s.length})`]}),U(oi,{active:"details"===t,onClick:()=>o("details"),children:"ℹ️ Details"})]}),U(ai,{children:["results"===t&&U(ii,{children:i?U(k,{children:[a.summary&&U(si,{children:[U(ci,{children:"📋 Executive Summary"}),U(ui,{children:a.summary})]}),a.content&&U(di,{children:[U(ci,{children:"📄 Detailed Report"}),U(hi,{children:U(Ha,{content:a.content})})]}),a.report&&!a.content&&U(di,{children:[U(ci,{children:"📄 Research Report"}),U(hi,{children:U(Ha,{content:a.report})})]}),a.key_findings&&U(li,{children:[U(ci,{children:"🔑 Key Findings"}),U(pi,{children:U(mi,{children:a.key_findings.map((e,r)=>U(gi,{children:e},r))})})]})]}):U(Ti,{children:[U(Fi,{children:U(nr,{size:24,color:"#6b7280"})}),U(Ei,{children:"No Results Available"}),U(Oi,{children:"No detailed results are available for this research. This might be due to an error during processing or the research being incomplete."})]})}),"sources"===t&&U(qa,{sources:s}),"details"===t&&U(qi,{children:[U(Hi,{children:[U(ci,{children:"🔍 Research Details"}),U(Bi,{children:[U(Ji,{children:[U(Vi,{children:"Job ID:"}),U(Ui,{children:e.jobId})]}),U(Ji,{children:[U(Vi,{children:"Started:"}),U(Ui,{children:new Date(e.startedAt).toLocaleString()})]}),e.completedAt&&U(Ji,{children:[U(Vi,{children:"Completed:"}),U(Ui,{children:new Date(e.completedAt).toLocaleString()})]}),U(Ji,{children:[U(Vi,{children:"Duration:"}),U(Ui,{children:La(e.startedAt,e.completedAt)})]}),e.creditsConsumed&&U(Ji,{children:[U(Vi,{children:"Credits Used:"}),U(Ui,{children:e.creditsConsumed})]}),U(Ji,{children:[U(Vi,{children:"Sources Found:"}),U(Ui,{children:s.length})]})]})]}),d&&Object.keys(d).length>0&&U(Wi,{children:[U(ci,{children:"📊 Metadata"}),U(Qi,{children:U("pre",{children:JSON.stringify(d,null,2)})})]})]})]}),U(Zi,{children:[U(Gi,{children:U(Yi,{onClick:r,children:[U(cr,{size:16}),"New Research"]})}),U(Ki,{children:[U(Xi,{onClick:async()=>{try{navigator.share&&i&&await navigator.share({title:"Deep Research Results",text:e.query,url:window.location.href})}catch(e){}},children:[U(ur,{size:16}),"Share"]}),U(Xi,{onClick:async()=>{var r;try{const n=`Deep Research Results\n\nQuery: ${e.query}\n\n${i?a.content||a.report||a.summary:"No content available"}`;await(null===(r=navigator.clipboard)||void 0===r?void 0:r.writeText(n))}catch(e){}},children:[U(Xe,{size:16}),"Copy"]})]})]})]})}const Ja=Te("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
`,Va=Te("div")`
  padding: 1.5rem;
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
`,Ua=Te("div")`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,Wa=Te("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`,Qa=Te("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Za=Te("div")`
  flex: 1;
`,Ga=Te("h3")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`,Ka=Te("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  opacity: 0.9;
`,Ya=Te("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,Xa=Te("button")`
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
`,ei=Te("div")`
  padding: 1.25rem 1.5rem;
  background: var(--askdona-background);
  border-bottom: 1px solid var(--askdona-border);
`,ri=Te("h4")`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
`,ni=Te("p")`
  margin: 0;
  font-style: italic;
  color: var(--askdona-text);
  line-height: 1.5;
`,ti=Te("div")`
  display: flex;
  background: var(--askdona-background);
  border-bottom: 1px solid var(--askdona-border);
`,oi=Te("button")`
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
`,ai=Te("div")`
  min-height: 300px;
`,ii=Te("div")`
  padding: 1.5rem;
`,si=Te("div")`
  margin-bottom: 2rem;
`,di=Te("div")`
  margin-bottom: 2rem;
`,li=Te("div")`
  margin-bottom: 2rem;
`,ci=Te("h4")`
  margin: 0 0 1rem;
  color: var(--askdona-text);
  font-size: 1rem;
  font-weight: 600;
`,ui=Te("div")`
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;
  color: var(--askdona-text);
  line-height: 1.6;
`,hi=Te("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
  padding: 1.5rem;
`,pi=Te("div")`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;
`,mi=Te("ul")`
  margin: 0;
  padding-left: 1.5rem;
`,gi=Te("li")`
  margin: 0.5rem 0;
  color: var(--askdona-text);
  line-height: 1.5;
`,fi=Te("div")`
  color: var(--askdona-text);
`,bi=Te("h2")`
  color: var(--askdona-text);
  font-size: 1.25rem;
  margin: 1.5rem 0 1rem 0;
  font-weight: 600;
`,vi=Te("h3")`
  color: var(--askdona-text);
  font-size: 1.125rem;
  margin: 1.25rem 0 0.75rem 0;
  font-weight: 600;
`,yi=Te("h4")`
  color: var(--askdona-text-secondary);
  font-size: 1rem;
  margin: 1rem 0 0.5rem 0;
  font-weight: 600;
`,ki=Te("p")`
  margin: 0 0 1rem;
  line-height: 1.6;
`,xi=Te("li")`
  margin: 0.5rem 0;
  line-height: 1.6;
`,wi=Te("div")`
  padding: 1.5rem;
`,zi=Te("div")`
  margin-bottom: 1rem;
`,Si=Te("h4")`
  margin: 0;
  color: var(--askdona-text);
  font-size: 1rem;
  font-weight: 600;
`,Ci=Te("div")`
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  overflow: hidden;
`,Mi=Te("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: var(--askdona-border);
  }
`,$i=Te("div")`
  flex: 1;
  min-width: 0;
`,_i=Te("a")`
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
`,ji=Te("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
`,Ii=Te("div")`
  color: var(--askdona-text-secondary);
  padding: 0.25rem;
`,Di=Te("div")`
  padding: 0 1rem 1rem 1rem;
  border-top: 1px solid var(--askdona-border);
  background: rgba(243, 244, 246, 0.5);
`,Ai=Te("p")`
  margin: 0.75rem 0;
  font-style: italic;
  color: var(--askdona-text);
  font-size: 0.875rem;
  line-height: 1.5;
`,Ri=Te("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
`,Ti=Te("div")`
  text-align: center;
  padding: 3rem 2rem;
`,Fi=Te("div")`
  margin: 0 auto 1rem;
  width: fit-content;
`,Ei=Te("h4")`
  margin: 0 0 0.5rem;
  color: var(--askdona-text);
  font-size: 1.125rem;
`,Oi=Te("p")`
  margin: 0;
  color: var(--askdona-text-secondary);
  line-height: 1.5;
`,Ni=Te("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
`,Pi=Te("div")`
  margin-bottom: 0.75rem;
`,Li=Te("p")`
  margin: 0;
  color: var(--askdona-text-secondary);
`,qi=Te("div")`
  padding: 1.5rem;
`,Hi=Te("div")`
  margin-bottom: 2rem;
`,Bi=Te("div")`
  display: grid;
  gap: 0.75rem;
`,Ji=Te("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--askdona-border);

  &:last-child {
    border-bottom: none;
  }
`,Vi=Te("span")`
  font-weight: 500;
  color: var(--askdona-text-secondary);
`,Ui=Te("span")`
  color: var(--askdona-text);
  font-weight: 500;
  word-break: break-word;
`,Wi=Te("div")`
  margin-top: 2rem;
`,Qi=Te("div")`
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
`,Zi=Te("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-top: 1px solid var(--askdona-border);
  background: var(--askdona-background);
`,Gi=Te("div")`
  display: flex;
  gap: 0.75rem;
`,Ki=Te("div")`
  display: flex;
  gap: 0.5rem;
`,Yi=Te("button")`
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
`,Xi=Te("button")`
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
`;function es(e){const[r,n]=se(null),[t,o]=se(!0),[a,i]=se(null),s=he(e=>{try{const r=e.split(".");if(3!==r.length)return null;return JSON.parse(atob(r[1]))}catch(e){return null}},[]),d=he(async()=>{i(null);try{const r=window.location.hostname+(window.location.port?":"+window.location.port:""),t=await fetch(`${H}/session/init/${e}`,{method:"POST",headers:{"Content-Type":"application/json",Origin:window.location.origin,"X-Widget-Version":"1.0.0"},body:JSON.stringify({domain:r,timestamp:Date.now(),userAgent:navigator.userAgent})});if(!t.ok){const e=await t.json().catch(()=>({message:"Session initialization failed"}));throw new Error(e.message||`HTTP ${t.status}`)}const{secureSessionToken:o}=await t.json();if(!o)throw new Error("No session token received");const a=s(o);if(!a)throw new Error("Invalid session token format");const i=`askdona_secure_session_${e}`;localStorage.setItem(i,o);const d={token:o,isValid:!0,expiresAt:1e3*a.exp,sessionId:a.sessionId,chatflowId:a.chatflowId};return n(d),o}catch(e){throw i(e.message),e}},[e,s]),l=he(async()=>{o(!0),i(null);try{const r=`askdona_secure_session_${e}`,t=localStorage.getItem(r);if(t){const o=s(t),a=Date.now();if(o&&1e3*o.exp>a&&o.chatflowId===e){const e={token:t,isValid:!0,expiresAt:1e3*o.exp,sessionId:o.sessionId,chatflowId:o.chatflowId};return void n(e)}localStorage.removeItem(r)}await d()}catch(e){i(e.message)}finally{o(!1)}},[e,s,d]),c=he(async()=>{if(!r)return;if(r.expiresAt-Date.now()<18e5)try{await d()}catch(e){}},[r,d]),u=he(async()=>{if(!r||!r.isValid)return null;if(r.expiresAt<=Date.now())try{return await d(),(null==r?void 0:r.token)||null}catch(e){return null}return await c(),r.token},[r,d,c]),h=he(()=>{const r=`askdona_secure_session_${e}`;localStorage.removeItem(r),n(null),i(null)},[e]);return de(()=>{e&&l()},[e,l]),de(()=>{if(!r)return;const e=setInterval(()=>{c()},3e5);return()=>clearInterval(e)},[r,c]),{session:r,isInitializing:t,error:a,initializeSession:d,getValidToken:u,clearSession:h,refreshSessionIfNeeded:c}}function rs(){try{const e={userAgent:navigator.userAgent||"",language:navigator.language||"",screenResolution:`${screen.width}x${screen.height}`,timezoneOffset:(new Date).getTimezoneOffset(),platform:navigator.platform||"",cookieEnabled:navigator.cookieEnabled,localStorageEnabled:(()=>{try{const e="__localStorage_test__";return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}})()},r=document.createElement("canvas"),n=r.getContext("2d");let t="";n&&(r.width=200,r.height=50,n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(125,1,62,20),n.fillStyle="#069",n.font="11pt Arial",n.fillText("AskDona Browser Fingerprint 🔍",2,15),n.fillStyle="rgba(102, 204, 0, 0.7)",n.font="18pt Arial",n.fillText("Deep Research",4,45),t=r.toDataURL().substring(0,100));const o=[e.userAgent,e.language,e.screenResolution,e.timezoneOffset.toString(),e.platform,e.cookieEnabled.toString(),e.localStorageEnabled.toString(),t].join("|");let a=0;for(let e=0;e<o.length;e++){a=(a<<5)-a+o.charCodeAt(e),a&=a}return`fp_${Math.abs(a).toString(36).padStart(8,"0")+Date.now().toString(36).slice(-4)}`}catch(e){return`fp_${Math.random().toString(36).substring(2,15)}`}}class ns{constructor(){this.browserFingerprint=this.getOrCreateFingerprint()}getOrCreateFingerprint(){const e="askdona_browser_fingerprint";try{let r=localStorage.getItem(e);return r||(r=rs(),localStorage.setItem(e,r)),r}catch(e){return rs()}}getBrowserFingerprint(){return this.browserFingerprint}checkLocalLimits(e,r){const n=[];let t,o=!0;for(const a of r){const r=this.checkSingleLocalLimit(e,a);n.push(r),!r.allowed&&o&&(o=!1,t=r.limitType)}return{allowed:o,blockedBy:t,localChecks:n}}checkSingleLocalLimit(e,r){const n=this.getLimitKey(r),t=`${ns.STORAGE_PREFIX}${e}_${n}`;let o=this.getLimitData(t);new Date(o.resetTime)<=new Date&&(o=this.createNewLimitPeriod(r),this.saveLimitData(t,o));const a=o.count<r.limit;return{limitType:this.getLimitTypeString(r),allowed:a,currentCount:o.count,maxCount:r.limit,resetTime:new Date(o.resetTime)}}recordLocalUsage(e,r){for(const n of r){const r=this.getLimitKey(n),t=`${ns.STORAGE_PREFIX}${e}_${r}`,o=this.getLimitData(t);o.count++,this.saveLimitData(t,o)}}getTodayUsage(e){const r=`${ns.STORAGE_PREFIX}${e}_daily`,n=this.getLimitData(r);return new Date(n.resetTime)>new Date?n.count:0}clearLocalLimits(e){try{const r=[];for(let n=0;n<localStorage.length;n++){const t=localStorage.key(n);t&&t.startsWith(`${ns.STORAGE_PREFIX}${e}_`)&&r.push(t)}r.forEach(e=>localStorage.removeItem(e))}catch(e){}}getLimitData(e){try{const r=localStorage.getItem(e);if(r)return JSON.parse(r)}catch(e){}return{count:0,resetTime:new Date(Date.now()+864e5).toISOString(),period:"daily"}}saveLimitData(e,r){try{localStorage.setItem(e,JSON.stringify(r))}catch(e){}}createNewLimitPeriod(e){return{count:0,resetTime:this.calculateNextLocalReset(e).toISOString(),period:this.getLimitKey(e)}}calculateNextLocalReset(e){const r=new Date,n=new Date(r);switch(e.period){case"daily":n.setDate(r.getDate()+1),n.setHours(0,0,0,0);break;case"weekly":const t=(8-r.getDay())%7||7;n.setDate(r.getDate()+t),n.setHours(0,0,0,0);break;case"monthly":n.setMonth(r.getMonth()+1,1),n.setHours(0,0,0,0);break;case"yearly":n.setFullYear(r.getFullYear()+1,0,1),n.setHours(0,0,0,0);break;default:e.customDays&&(n.setDate(r.getDate()+e.customDays),n.setHours(0,0,0,0))}return n}getLimitKey(e){return e.customDays?`custom_${e.customDays}d`:e.period}getLimitTypeString(e){return e.customDays?`custom-${e.customDays}d`:e.period}}function ts({chatflowId:e,onClose:r,isVisible:n=!0}){const{config:t,currentJob:o,isLoading:a,error:i,isInitializing:s,fetchConfig:d,cancelJob:l,resetJob:c,cleanup:u}=function(e){const{session:r,isInitializing:n}=es(e),[t,o]=se(null),[a,i]=se(null),[s,d]=se(!1),[l,c]=se(null),u=ce(new ns),h=ce(null),p=ce(null),m=he(async(t=!1)=>{if(!(null==r?void 0:r.token)||n)return null;if(!t&&p.current&&Date.now()-p.current.timestamp<3e4)return o(p.current.data),p.current.data;const a=u.current.getBrowserFingerprint();c(null);try{const n=await fetch(`${H}/deep-research/config/${e}`,{method:"POST",headers:{"Content-Type":"application/json","X-Widget-Version":"1.0.0"},body:JSON.stringify({secureSessionToken:r.token,browserFingerprint:a})});if(!n.ok){const e=await n.json().catch(()=>({error:"Request failed"}));throw new Error(e.error||`HTTP ${n.status}`)}const t=await n.json();return p.current={data:t,timestamp:Date.now()},o(t),t}catch(e){c(e.message);const r={isEnabled:!1,canExecute:!1,credits:null,sessionLimit:{allowed:!1,currentCount:0,maxCount:0,resetTime:""},browserLimits:{allowed:!1,limits:[]},config:{maxQueryLength:500,estimatedDurationMinutes:15},error:e.message};return o(r),r}},[null==r?void 0:r.token,e,n]),g=he(async n=>{if(!(null==r?void 0:r.token)||!(null==t?void 0:t.canExecute))throw new Error("Cannot execute Deep Research - invalid session or insufficient permissions");if(0===n.trim().length)throw new Error("Query cannot be empty");if(n.length>t.config.maxQueryLength)throw new Error(`Query too long. Maximum ${t.config.maxQueryLength} characters allowed.`);d(!0),c(null);const o=u.current.getBrowserFingerprint();try{if(t.browserLimits.limits.length>0){const r=t.browserLimits.limits.map(e=>({period:e.limitType.replace("custom-","").replace("d",""),limit:e.maxCount,customDays:e.limitType.startsWith("custom-")?parseInt(e.limitType.replace("custom-","").replace("d","")):void 0})),n=u.current.checkLocalLimits(e,r);if(!n.allowed)throw new Error(`Browser limit exceeded: ${n.blockedBy}`)}const a=await fetch(`${H}/deep-research/start`,{method:"POST",headers:{"Content-Type":"application/json","X-Widget-Version":"1.0.0"},body:JSON.stringify({secureSessionToken:r.token,query:n.trim(),chatflowId:e,browserFingerprint:o})});if(!a.ok){const e=await a.json().catch(()=>({error:"Request failed"}));throw new Error(e.error||`HTTP ${a.status}`)}const s=await a.json();if(t.browserLimits.limits.length>0){const r=t.browserLimits.limits.map(e=>({period:e.limitType.replace("custom-","").replace("d",""),limit:e.maxCount}));u.current.recordLocalUsage(e,r)}const d={jobId:s.jobId,status:"pending",query:n.trim(),startedAt:(new Date).toISOString(),creditsConsumed:s.creditsConsumed,estimatedDuration:s.estimatedDuration};return i(d),f(s.jobId),setTimeout(()=>m(!0),1e3),s}catch(e){throw d(!1),c(e.message),e}},[null==r?void 0:r.token,t,e,m]),f=he(e=>{h.current&&h.current.close();const r=new EventSource(`${H}/deep-research/stream/${e}`);h.current=r,r.addEventListener("deep-research-start",e=>{try{JSON.parse(e.data),i(e=>e?{...e,status:"processing"}:null)}catch(e){}}),r.addEventListener("deep-research-progress",e=>{try{const r=JSON.parse(e.data);i(e=>e?{...e,status:"processing",progress:{stage:r.stage||"processing",progress:r.progress||0,timestamp:r.timestamp||(new Date).toISOString(),estimatedTimeRemaining:r.estimatedTimeRemaining,sources:r.sources}}:null)}catch(e){}}),r.addEventListener("deep-research-complete",e=>{try{const n=JSON.parse(e.data);i(e=>e?{...e,status:"completed",results:n.results,completedAt:(new Date).toISOString(),progress:{stage:"completed",progress:100,timestamp:(new Date).toISOString()}}:null),d(!1),r.close(),setTimeout(()=>m(!0),1e3)}catch(e){}}),r.addEventListener("deep-research-error",e=>{try{const n=JSON.parse(e.data);i(e=>e?{...e,status:"failed",error:n.error||"Deep Research failed",completedAt:(new Date).toISOString()}:null),d(!1),c(n.error||"Deep Research failed"),r.close()}catch(e){}}),r.onerror=e=>{r.readyState===EventSource.CLOSED&&(d(!1),setTimeout(()=>{a&&"processing"===a.status&&c("Connection lost. Please check the result later or try again.")},5e3))}},[a]),b=he(async()=>{if(a&&(null==r?void 0:r.token))try{h.current&&(h.current.close(),h.current=null),i(e=>e?{...e,status:"cancelled",completedAt:(new Date).toISOString()}:null),d(!1)}catch(e){}},[a,null==r?void 0:r.token]),v=he(()=>{h.current&&(h.current.close(),h.current=null),i(null),d(!1),c(null),p.current=null},[]),y=he(()=>{h.current&&(h.current.close(),h.current=null)},[]);return de(()=>{!(null==r?void 0:r.token)||n||t||m()},[null==r?void 0:r.token,n,t,m]),de(()=>y,[y]),{config:t,currentJob:a,isLoading:s,error:l,isInitializing:n,fetchConfig:m,startDeepResearch:g,cancelJob:b,resetJob:v,cleanup:y,browserFingerprint:u.current.getBrowserFingerprint()}}(e),[h,p]=se(""),[m,g]=se([]),[f,b]=se(null),[v,y]=se(null),[k,x]=se(!1),[w,z]=se(!1),[S,C]=se(null);de(()=>{!n||t||s||d()},[n,t,s,d]),de(()=>u,[u]);const M=e=>{const r=new EventSource(`${H}/deep-research/stream/${e}`);r.addEventListener("deep-research-start",e=>{try{JSON.parse(e.data);y(e=>e?{...e,status:"processing"}:null)}catch(e){}}),r.addEventListener("deep-research-progress",e=>{try{const r=JSON.parse(e.data);y(e=>e?{...e,status:"processing",progress:{stage:r.stage||"processing",progress:r.progress||0,timestamp:r.timestamp||(new Date).toISOString(),estimatedTimeRemaining:r.estimatedTimeRemaining,sources:r.sources}}:null)}catch(e){}}),r.addEventListener("deep-research-complete",e=>{try{const n=JSON.parse(e.data);y(e=>e?{...e,status:"completed",results:n.results,completedAt:(new Date).toISOString(),progress:{stage:"completed",progress:100,timestamp:(new Date).toISOString()}}:null),r.close(),setTimeout(()=>d(!0),1e3)}catch(e){}}),r.addEventListener("deep-research-error",e=>{try{const n=JSON.parse(e.data);y(e=>e?{...e,status:"failed",error:n.error||"Deep Research failed",completedAt:(new Date).toISOString()}:null),C(n.error||"Deep Research failed"),r.close()}catch(e){}}),r.onerror=e=>{r.readyState===EventSource.CLOSED&&setTimeout(()=>{v&&"processing"===v.status&&C("Connection lost. Please check the result later or try again.")},5e3)}},$=()=>{"questionnaire"===D?(p(""),g([]),b(null),C(null)):"progress"!==D&&"results"!==D||_()},_=()=>{p(""),g([]),b(null),y(null),C(null),c(),setTimeout(()=>d(!0),500)},j=S||i,I=v||o;let D;return D=s&&!t?"loading":"completed"===(null==I?void 0:I.status)?"results":!I||"pending"!==I.status&&"processing"!==I.status?"failed"===(null==I?void 0:I.status)?"error":m.length>0&&h?"questionnaire":"trigger":"progress",U(os,{children:[U(as,{children:["loading"===D&&U(is,{children:[U(ss,{children:U(cr,{size:24,color:"white"})}),U(ds,{children:[U(ls,{children:"🔍 Loading Deep Research"}),U(cs,{children:"Setting up your research environment..."})]})]}),"trigger"===D&&U(ks,{config:t,onSubmit:async e=>{if(e.trim()){p(e.trim()),C(null),x(!0);try{const r=await async function(e){try{return await B("/deep-research/follow-up",{method:"POST",body:JSON.stringify({query:e})})}catch(e){return{success:!1,questions:[],error:e.message}}}(e.trim());if(!r.success||!r.questions||0===r.questions.length)throw new Error(r.error||"No follow-up questions generated");g(r.questions),b(r.metadata)}catch(e){C(e.message||"Failed to generate follow-up questions")}finally{x(!1)}}},onRefreshConfig:()=>{C(null),d(!0)},isSubmitting:k,error:j||void 0}),"questionnaire"===D&&U(vo,{originalQuery:h,questions:m,onSubmit:async r=>{if(h&&0!==r.length){C(null),z(!0);try{const n=new ns,t=n.getBrowserFingerprint(),o=n.getBrowserFingerprint(),a=await async function(e){try{return await B("/deep-research/start-with-answers",{method:"POST",body:JSON.stringify(e)})}catch(e){throw e}}({chatflowId:e,originalQuery:h,questionnaireResponses:r,sessionId:t,fingerprint:o});if(!a.success)throw new Error(a.error||"Failed to start Deep Research");const i={jobId:a.jobId,status:a.status||"pending",query:h,startedAt:(new Date).toISOString(),creditsConsumed:a.creditsConsumed,estimatedDuration:a.estimatedDuration};y(i),M(a.jobId),setTimeout(()=>d(!0),1e3)}catch(e){C(e.message||"Failed to start Deep Research")}finally{z(!1)}}},onBack:$,isSubmitting:w,error:j||void 0}),"progress"===D&&I&&U(na,{job:I,isLoading:a,onCancel:async()=>{try{!v||"pending"!==v.status&&"processing"!==v.status?await l():y(null)}catch(e){C("Failed to cancel research")}}}),"results"===D&&(null==I?void 0:I.results)&&U(Ba,{job:I,onNewResearch:_}),"error"===D&&U(us,{children:[U(hs,{children:U(Qe,{size:24,color:"white"})}),U(ps,{children:[U(ms,{children:"Research Failed"}),U(gs,{children:(null==I?void 0:I.error)||j||"An unexpected error occurred"}),U(fs,{children:[U(bs,{onClick:_,children:"Try Again"}),"error"===D&&m.length>0&&U(vs,{onClick:$,children:[U(qe,{size:16}),"Back"]})]})]})]})]}),("questionnaire"===D||"progress"===D||"results"===D)&&U(ys,{children:U("span",{children:"💡 Tip: You can start a new research at any time"})})]})}ns.STORAGE_PREFIX="askdona_browser_limit_";const os=Te("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--askdona-background);
`,as=Te("div")`
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
`,is=Te("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
  margin: 1rem;
  border-radius: 0.75rem;
`,ss=Te("div")`
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ds=Te("div")`
  flex: 1;
`,ls=Te("h3")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`,cs=Te("p")`
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
`,us=Te("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  margin: 1rem;
  border-radius: 0.75rem;
`,hs=Te("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ps=Te("div")`
  flex: 1;
`,ms=Te("h3")`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`,gs=Te("p")`
  margin: 0 0 1rem;
  font-size: 0.875rem;
  opacity: 0.9;
  line-height: 1.5;
`,fs=Te("div")`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,bs=Te("button")`
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
`,vs=Te("button")`
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
`,ys=Te("div")`
  padding: 0.75rem 1rem;
  text-align: center;
  font-size: 0.8125rem;
  color: var(--askdona-text-secondary);
  background: var(--askdona-border);
  border-top: 1px solid var(--askdona-border);
`;function ks({config:e,onSubmit:r,onRefreshConfig:n,isSubmitting:t=!1,error:o}){const[a,i]=se("");return U(xs,{children:[U(ws,{children:[U(zs,{children:U(cr,{size:24,color:"white"})}),U(Ss,{children:[U(Cs,{children:"🔍 Deep Research"}),U(Ms,{children:"Ask a research question and we'll analyze it thoroughly"})]})]}),U($s,{children:[U("form",{onSubmit:e=>{e.preventDefault(),a.trim()&&!t&&r(a.trim())},children:[U(_s,{value:a,onChange:e=>i(e.target.value),placeholder:"What would you like me to research? Be as specific as possible...",rows:3,disabled:t}),U(js,{children:U(Is,{type:"submit",disabled:!a.trim()||t,children:t?"Analyzing...":"Start Research"})})]}),o&&U(Ds,{children:[U(Qe,{size:16}),U("span",{children:o})]})]})]})}const xs=Te("div")`
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
  margin: 1rem;
`,ws=Te("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
`,zs=Te("div")`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Ss=Te("div")`
  flex: 1;
`,Cs=Te("h3")`
  margin: 0 0 0.25rem;
  font-size: 1.125rem;
  font-weight: 600;
`,Ms=Te("p")`
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
`,$s=Te("div")`
  padding: 1.5rem;
`,_s=Te("textarea")`
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
`,js=Te("div")`
  display: flex;
  justify-content: flex-end;
`,Is=Te("button")`
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
`,Ds=Te("div")`
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
`;function As({task:e,onRetry:r,onSendMessage:n}){const[t,o]=se(e);de(()=>{o(e)},[e]);return U(Rs,{children:[U(Ts,{children:[U(Fs,{children:"深層調査の進捗"}),U(Es,{status:t.status,children:["pending"===t.status&&"⏳ 待機中","in-progress"===t.status&&"🔄 実行中","completed"===t.status&&"✅ 完了","failed"===t.status&&"❌ 失敗"]})]}),U(Os,{children:[U(Ns,{children:U(Ps,{progress:t.progress||0})}),U(Ls,{children:[t.progress||0,"%"]})]}),U(qs,{children:[U(Hs,{children:(e=>{switch(e){case"follow-up":return"📝";case"research-outline":return"📋";case"search":return"🔍";case"extraction":return"📊";case"new-angles":return"💡";case"synthesis":return"📄";default:return"⚙️"}})(t.stage||"follow-up")}),U(Bs,{children:t.stage?{"follow-up":"依頼内容の整理","research-outline":"調査の計画",search:"情報収集",extraction:"情報分析","new-angles":"追加の調査",synthesis:"調査レポート作成"}[t.stage]||t.stage:"Processing..."})]}),U(Js,{children:[U(Vs,{children:t.message||"Processing..."}),U(Us,{children:["更新日時: ",new Date(t.updated_at).toLocaleString("ja-JP")]})]}),"completed"===t.status&&t.summary_report&&U(Ws,{children:[U(Qs,{children:"調査結果"}),U(Zs,{children:[t.summary_report.substring(0,200),"..."]}),U(Gs,{children:U(Ks,{variant:"primary",onClick:()=>n(t.summary_report),children:"結果をチャットに送信"})})]}),"completed"===t.status&&t.checksheet_markdown&&!t.summary_report&&U(Ws,{children:[U(Qs,{children:"調査チェックシート"}),U(Zs,{children:[t.checksheet_markdown.substring(0,200),"..."]}),U(Gs,{children:U(Ks,{variant:"primary",onClick:()=>n(t.checksheet_markdown),children:"チェックシートをチャットに送信"})})]}),"failed"===t.status&&U(Gs,{children:U(Ks,{variant:"secondary",onClick:r,children:"再試行"})})]})}const Rs=Te("div")`
  padding: 1.5rem;
  background: var(--bg-primary);
  border-radius: 12px;
  border: 1px solid var(--border-light);
`,Ts=Te("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,Fs=Te("h3")`
  margin: 0;
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,Es=Te("span")`
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${e=>{switch(e.status){case"pending":return"#fef3c7";case"in-progress":return"#dbeafe";case"completed":return"#d1fae5";case"failed":return"#fee2e2";default:return"#f3f4f6"}}};
  color: ${e=>{switch(e.status){case"pending":return"#92400e";case"in-progress":return"#1e40af";case"completed":return"#065f46";case"failed":return"#dc2626";default:return"#374151"}}};
`,Os=Te("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`,Ns=Te("div")`
  flex: 1;
  height: 8px;
  background: var(--bg-secondary);
  border-radius: 4px;
  overflow: hidden;
`,Ps=Te("div")`
  height: 100%;
  background: var(--primary);
  width: ${e=>e.progress}%;
  transition: width 0.5s ease;
`,Ls=Te("span")`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  min-width: 3rem;
`,qs=Te("div")`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,Hs=Te("span")`
  font-size: 1.5rem;
`,Bs=Te("span")`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
`,Js=Te("div")`
  margin-bottom: 1rem;
`,Vs=Te("p")`
  margin: 0 0 0.5rem 0;
  color: var(--text-secondary);
  line-height: 1.5;
`,Us=Te("div")`
  font-size: 0.75rem;
  color: var(--text-secondary);
`,Ws=Te("div")`
  background: var(--bg-secondary);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`,Qs=Te("h4")`
  margin: 0 0 0.75rem 0;
  color: var(--text-primary);
  font-size: 0.95rem;
  font-weight: 600;
`,Zs=Te("div")`
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`,Gs=Te("div")`
  display: flex;
  gap: 0.75rem;
`,Ks=Te("button")`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${e=>"primary"===e.variant?"\n    background: var(--primary);\n    color: white;\n\n    &:hover {\n      background: var(--primary-hover);\n    }\n  ":"\n    background: var(--bg-secondary);\n    color: var(--text-primary);\n    border: 1px solid var(--border-light);\n\n    &:hover {\n      background: var(--bg-hover);\n    }\n  "}
`,Ys=Te("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-primary);
`,Xs=Te("div")`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-light);
  background: var(--bg-primary);
`,ed=Te("button")`
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
`,rd=Te("h2")`
  margin: 0;
  margin-left: 1rem;
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
`,nd=Te("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`,td=Te("div")`
  margin-bottom: 2rem;
`,od=Te("textarea")`
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
`,ad=Te("div")`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`,id=Te("button")`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;

  ${e=>"primary"===e.variant?"\n    background: var(--primary);\n    color: white;\n\n    &:hover:not(:disabled) {\n      background: var(--primary-hover);\n    }\n\n    &:disabled {\n      background: var(--bg-secondary);\n      color: var(--text-secondary);\n      cursor: not-allowed;\n    }\n  ":"\n    background: var(--bg-secondary);\n    color: var(--text-primary);\n    border: 1px solid var(--border-light);\n\n    &:hover:not(:disabled) {\n      background: var(--bg-hover);\n    }\n\n    &:disabled {\n      color: var(--text-secondary);\n      cursor: not-allowed;\n    }\n  "}
`,sd=Te("div")`
  color: #ef4444;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;function dd({chatFlowId:e,sessionId:r,messages:n,onBack:t,onSendMessage:o,baseUrl:a}){const[i,s]=se("input"),[d,l]=se(""),[c,u]=se(null),[h,p]=se(null),[m,g]=se(!1),{getValidToken:f,isInitializing:b,session:v}=es(e);de(()=>{if("execution"!==i||!c)return;if("completed"===c.status||"failed"===c.status)return;let e;const n=async()=>{try{const n=H.replace("/api/embed/v1",""),t=(null==v?void 0:v.sessionId)||r,o=await fetch(`${n}/api/embed/v1/rag-deep-research/status?sessionId=${t}`);if(!o.ok)throw new Error("Failed to fetch task status");const a=await o.json();a.task&&(u(a.task),"completed"!==a.task.status&&"failed"!==a.task.status||e&&clearInterval(e))}catch(r){r instanceof TypeError&&r.message.includes("Failed to fetch")&&e&&clearInterval(e)}};return n(),e=setInterval(n,5e3),()=>{e&&clearInterval(e)}},[i,r,a,v]);const y=he(async()=>{if(d.trim()){g(!0),p(null);try{await k(d,n)}catch(e){p(e instanceof Error?e.message:"Failed to start research"),g(!1)}}},[d,n]),k=he(async(n,t)=>{try{const o=await f();if(!o)throw new Error("Failed to get valid session token");const a=H.replace("/api/embed/v1",""),i=(null==v?void 0:v.sessionId)||r,d=await fetch(`${a}/api/embed/v1/rag-deep-research/executor`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userQuestion:n,chatFlowId:e,sessionId:i,secureSessionToken:o,messages:t,report_settings:{reportFormat:"business-report",internetEnabled:!0,language:"japanese"}})});if(!d.ok)throw new Error(`Failed to start research: ${d.status}`);const l=await d.json();u({id:l.taskId,session_id:i,status:"pending",stage:"follow-up",progress:0,message:"深層調査を開始しています...",checksheet_markdown:null,tool_usage_plan:null,execution_results:null,final_report_message_id:null,summary_report:null,research_id:null,created_at:(new Date).toISOString(),updated_at:(new Date).toISOString(),report_settings:{reportFormat:"business-report",internetEnabled:!0,language:"japanese"}}),s("execution")}catch(e){throw e}finally{g(!1)}},[a,e,r,f,v]),x=he(()=>{s("input"),u(null),p(null),l("")},[]);return U(Ys,{children:[U(Xs,{children:[U(ed,{onClick:t,children:[U("span",{children:"←"}),"戻る"]}),U(rd,{children:"RAG 深層調査"})]}),U(nd,{children:[h&&U(sd,{children:h}),b?U(td,{children:U("div",{style:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)"},children:"セッションを初期化しています..."})}):"input"===i&&U(td,{children:[U(od,{value:d,onChange:e=>l(e.currentTarget.value),placeholder:"深層調査を行いたいトピックや質問を入力してください...",disabled:m}),U(ad,{children:[U(id,{variant:"secondary",onClick:t,children:"キャンセル"}),U(id,{variant:"primary",onClick:y,disabled:!d.trim()||m,children:m?"処理中...":"調査を開始"})]})]}),"execution"===i&&c&&U(As,{task:c,onRetry:x,onSendMessage:o})]})]})}const ld=Re`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,cd=Re`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,ud=Re`
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
`;function hd({isOpen:e,onClose:r,currentMode:n,onModeSwitch:t,messages:o,isLoading:a,streamingContent:i,onSendMessage:s,error:d,config:l,currentState:c,boostMode:u,onBoostModeChange:h,sessionId:p,onFeedbackSubmit:m,onClearChat:g,showIntro:f,displayMode:b="modal",metadataFilters:v,onMetadataFiltersChange:y}){const x=ce(null);if(de(()=>{if(!e)return;const n=e=>{"Escape"===e.key&&r()},t=e=>{"fullscreen"!==b&&x.current&&x.current.contains&&"function"==typeof x.current.contains&&!x.current.contains(e.target)&&r()};return document.addEventListener("keydown",n),document.addEventListener("mousedown",t),()=>{document.removeEventListener("keydown",n),document.removeEventListener("mousedown",t)}},[e,r]),!e)return null;return U(pd,{onClick:e=>{"fullscreen"!==b&&e.target===e.currentTarget&&r()},displayMode:b,children:U(md,{ref:x,displayMode:b,children:[U(gd,{children:[U(fd,{children:(l.language,"AskDona")}),U(bd,{children:[l.enableRagDeepResearch&&U(vd,{active:"rag-deep-research"===n,onClick:()=>t("rag-deep-research"),children:[U(dr,{size:14,style:{marginRight:"4px"}}),(l.language,"RAG Deep Research")]}),"fullscreen"!==b&&U(yd,{onClick:r,children:"×"})]})]}),U(kd,{children:"ask-ai"===n?U(Qn,{messages:o,isLoading:a,streamingContent:i,onSendMessage:s,error:d,config:l,currentState:c,boostMode:u,onBoostModeChange:h,sessionId:p,onFeedbackSubmit:m,showIntro:f,metadataFilters:v,onMetadataFiltersChange:y,onClearChat:g,currentMode:n,onModeSwitch:e=>t(e)}):"search"===n?U($t,{config:l,currentMode:n,onModeSwitch:t},"search-view"):"deep-research"===n?U(ts,{chatflowId:l.chatflowId,onClose:()=>t("ask-ai"),isVisible:"deep-research"===n}):"rag-deep-research"===n&&l.enableRagDeepResearch?U(dd,{chatFlowId:l.chatflowId,sessionId:p,messages:o.map(e=>({role:e.role,content:e.content,createdAt:e.createdAt,id:e.id})),onBack:()=>t("ask-ai"),onSendMessage:e=>s(e),baseUrl:window.location.origin}):null}),U(xd,{children:[U(wd,{children:["Powered by ",U(zd,{href:"https://askdona.com",target:"_blank",style:"color: inherit; text-decoration: none;",children:"AskDona"})]}),U(Sd,{children:"ja"===l.language?U(k,{children:[U("div",{children:"Boostモードは、より多角的な視点から多くの文書を分析して回答します。通常モードより回答生成までに時間がかかります。"}),U("div",{children:"RAGシステムは誤った情報を提供することがあります。重要な情報はご自身で確認してください。"})]}):U(k,{children:[U("div",{children:"Boost mode analyzes more documents from multiple perspectives. It takes longer than normal mode."}),U("div",{children:"RAG systems may provide incorrect information. Please verify important information yourself."})]})})]})]})})}Re`
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
`;const pd=Te("div")`
  position: fixed;
  inset: 0;
  background: ${e=>"fullscreen"===e.displayMode?"transparent":"rgba(0, 0, 0, 0.5)"};
  backdrop-filter: ${e=>"fullscreen"===e.displayMode?"none":"blur(4px)"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  padding: ${e=>"fullscreen"===e.displayMode?"0":"1.25rem"};
  animation: ${ld} 0.2s ease-out;
`,md=Te("div")`
  background: var(--askdona-surface);
  border-radius: ${e=>"fullscreen"===e.displayMode?"0":"1rem"};
  width: ${e=>"fullscreen"===e.displayMode?"100vw":"100%"};
  max-width: ${e=>"fullscreen"===e.displayMode?"none":"72rem"};
  height: ${e=>"fullscreen"===e.displayMode?"100vh":"90vh"};
  max-height: ${e=>"fullscreen"===e.displayMode?"none":"1000px"};
  box-shadow: ${e=>"fullscreen"===e.displayMode?"none":"0 25px 50px -12px rgba(0, 0, 0, 0.25)"};
  display: flex;
  flex-direction: column;
  animation: ${e=>"fullscreen"===e.displayMode?"none":cd} 0.3s ease-out;
  overflow: hidden;
`,gd=Te("header")`
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`,fd=Te("h2")`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: var(--askdona-text);
  font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
`,bd=Te("div")`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,vd=Te("button")`
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
`,yd=Te("button")`
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
`,kd=Te("main")`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,xd=Te("footer")`
  padding: 0.75rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
`,wd=Te("span")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
`,zd=Te("a")`
  font-size: 0.75rem;
  color: var(--askdona-primary);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,Sd=Te("div")`
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
`;function Cd({onClick:e,position:r}){return U(Md,{onClick:e,position:r,children:U("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:U("path",{d:"M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.9706 16.9706 21 12 21C10.4077 21 8.88275 20.5699 7.5389 19.7447L3 21L4.25553 16.4611C3.43012 15.1173 3 13.5923 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}const Md=Te("button")`
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
  animation: ${ud} 0.5s ease-out;
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
`;function $d(e){const[r,n]=se({isValid:!1,error:null,config:null});return de(()=>{const r=async()=>{try{const r=await async function(e){try{return await B(`/validate/${e}`,{method:"POST",body:JSON.stringify({origin:window.location.origin})})}catch(e){return{isValid:!1,error:e.message}}}(e);n({isValid:r.isValid,error:r.error?new Error(r.error):null,config:r.config||null})}catch(e){n({isValid:!1,error:e,config:null})}};e&&r()},[e]),r}const _d="askdona_widget_",jd=864e5;function Id(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e)}function Dd(e){const r=`${_d}messages_${e}`;try{const e=localStorage.getItem(r);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n:n.messages||[]}catch(e){return[]}}function Ad(e){var r;const n=`${_d}messages_${e}`;try{const e=localStorage.getItem(n);if(!e)return null;const t=JSON.parse(e);return!Array.isArray(t)&&t.sessionId&&(null===(r=t.messages)||void 0===r?void 0:r.length)>0?t.sessionId:null}catch(e){return null}}function Rd(e){const[r]=se(()=>{if(Dd(e).length>0){const r=Ad(e);if(r)return r}const r=function(e){const r=`${_d}session_${e}`;try{const e=localStorage.getItem(r);if(e){const r=JSON.parse(e);if(r.expiresAt>Date.now()&&Id(r.id))return r.id}}catch(e){}const n=Dd(e).length>0;if(n){const n=Ad(e);if(n&&Id(n)){const e={id:n,createdAt:Date.now(),expiresAt:Date.now()+jd};try{localStorage.setItem(r,JSON.stringify(e))}catch(e){}return n}}try{localStorage.removeItem(r),n||localStorage.removeItem(`${_d}messages_${e}`)}catch(e){}const t={id:q(),createdAt:Date.now(),expiresAt:Date.now()+jd};try{localStorage.setItem(r,JSON.stringify(t))}catch(e){}return t.id}(e);return r}),[n,t]=se(()=>Dd(e)),[o,a]=se(!1),[i,s]=se(""),[d,l]=se(null),[c,u]=se("idle"),h=ce(null),p=ce(null),m=ce(""),g=ce(null);de(()=>{if(n.length>0){const t=n[n.length-1];!function(e,r,n){const t=`${_d}messages_${e}`;try{const e=localStorage.getItem(t),o=e?JSON.parse(e):{sessionId:null,messages:[]};n&&!o.sessionId&&(o.sessionId=n);const a=o.messages||[],i=a.findIndex(e=>e.id===r.id);-1!==i?a[i]=r:a.push(r),a.length>50&&a.splice(0,a.length-50),o.messages=a,localStorage.setItem(t,JSON.stringify(o))}catch(e){}}(e,t,r)}},[n,e,r]);const f=he(()=>{t([]),function(e){[`${_d}session_${e}`,`${_d}messages_${e}`].forEach(e=>{try{localStorage.removeItem(e)}catch(e){}})}(e)},[e]),b=he(async(o,i=!1,d=null)=>{try{const c={id:q(),role:"user",content:o,createdAt:(new Date).toISOString(),metadata:{mode:i?"boost":"standard"}};t(e=>[...e,c]),a(!0),l(null),s(""),u("thinking"),m.current="",g.current=null;const f={id:q(),role:"assistant",content:"",createdAt:(new Date).toISOString(),metadata:{mode:i?"boost":"standard"}};p.current=f,h.current=new AbortController,await async function({chatflowId:e,sessionId:r,message:n,messages:t,boostMode:o=!1,userMessageId:a,assistantMessageId:i,metadataFilters:s,signal:d,onChunk:l}){var c;const u=`${H}/chat/${e}/${o?"boost":"standard"}`,h=await fetch(u,{method:"POST",headers:{"Content-Type":"application/json","X-Widget-Version":"1.0.0"},body:JSON.stringify({userQuestion:n,sessionId:r,messages:t.map(e=>({role:e.role,content:e.content,createdAt:e.createdAt})),boostMode:o,userMessageId:a,assistantMessageId:i,metadataFilters:s}),signal:d}),p={};if(h.headers.forEach((e,r)=>{p[r]=e}),!h.ok){const e=await h.json().catch(()=>({message:"Request failed"}));throw new Error(e.message||`HTTP ${h.status}`)}const m=null===(c=h.body)||void 0===c?void 0:c.getReader();if(!m)throw new Error("No response body");const g=new TextDecoder;let f="";try{for(;;){const{done:e,value:r}=await m.read();if(e)break;const n=g.decode(r,{stream:!0});if(n.includes("\0")){f+=n;const e=f.split("\0");f=e[e.length-1];for(let r=0;r<e.length-1;r++){const n=e[r];n&&(n.startsWith("__STATE__:")?l({type:"state",data:n.substring(10).replace(/\n$/,"")}):n.startsWith("__SEARCH__:")?l({type:"search",data:n.substring(11).replace(/\n$/,"")}):n.startsWith("__METADATA__:")?l({type:"metadata",data:n.substring(13).replace(/\n$/,"")}):n.startsWith("__SEARCH_QUERIES__:")?l({type:"search-queries",data:n.substring(19).replace(/\n$/,"")}):l({type:"content",data:n}))}}else n.trim()&&l({type:"content",data:n})}f&&!f.startsWith("__")&&l({type:"content",data:f})}finally{m.releaseLock()}}({chatflowId:e,sessionId:r,message:o,messages:n,boostMode:i,userMessageId:c.id,assistantMessageId:f.id,metadataFilters:d,signal:h.current.signal,onChunk:e=>{if("content"===e.type)m.current+=e.data,s(m.current);else if("metadata"===e.type)try{const r=JSON.parse(e.data);g.current={...g.current,docMetadata:r,mode:i?"boost":"standard"}}catch(e){}else"state"===e.type&&u(e.data)}})}catch(e){"AbortError"===e.name||l(e)}finally{p.current&&m.current.trim()&&t(e=>[...e,{...p.current,content:m.current.trim(),metadata:{...p.current.metadata,...g.current}}]),a(!1),s(""),u("idle"),h.current=null,p.current=null,m.current="",g.current=null}},[e,n]),v=he(async(n,o,a)=>{try{t(e=>e.map(e=>e.id===n?{...e,metadata:{...e.metadata,feedback:{rating:o,content:a,submittedAt:(new Date).toISOString(),isSubmitted:!0}}}:e));const i={embedMessageId:n,embedSessionId:r,chatflowId:e,feedbackType:"combined",feedbackData:{rating:"THUMBS_UP"===o?"thumbs_up":"thumbs_down",content:a||null},metadata:{domain:window.location.hostname,url:window.location.href,userAgent:navigator.userAgent}},s=await fetch(`${H}/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!s.ok){const e=await s.text();throw new Error(`Failed to submit feedback: ${s.statusText} - ${e}`)}await s.json()}catch(e){throw t(e=>e.map(e=>e.id===n?{...e,metadata:{...e.metadata,feedback:void 0}}:e)),e}},[r,e]);return{messages:n,sendMessage:b,isLoading:o,streamingContent:i,error:d,currentState:c,sessionId:r,submitFeedback:v,clearChat:f}}function Td(e,r){const n=parseInt(e.replace("#",""),16),t=Math.round(2.55*r),o=(n>>16)-t,a=(n>>8&255)-t,i=(255&n)-t;return"#"+(16777216+65536*(o<255?o<1?0:o:255)+256*(a<255?a<1?0:a:255)+(i<255?i<1?0:i:255)).toString(16).slice(1)}function Fd(e,r){const n=parseInt(e.replace("#",""),16),t=Math.round(2.55*r),o=(n>>16)+t,a=(n>>8&255)+t,i=(255&n)+t;return"#"+(16777216+65536*(o<255?o<1?0:o:255)+256*(a<255?a<1?0:a:255)+(i<255?i<1?0:i:255)).toString(16).slice(1)}"undefined"!=typeof window&&function(){try{const e=Object.keys(localStorage),r=Date.now();e.forEach(e=>{if(e.startsWith(`${_d}session_`))try{const n=JSON.parse(localStorage.getItem(e)||"{}");if(n.expiresAt&&n.expiresAt<r){localStorage.removeItem(e);const r=e.replace(`${_d}session_`,"");localStorage.removeItem(`${_d}messages_${r}`)}}catch(r){localStorage.removeItem(e)}})}catch(e){}}();const Ed={colors:{primary:"#10316f",primaryDark:Td("#10316f",10),primaryLight:Fd("#10316f",10),background:"#ffffff",surface:"#f8f9fa",text:"#353a5c",textSecondary:"#6b6f8a",border:"#e5e7eb",error:"#EF4444",success:"#10B981"},fonts:{base:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',mono:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1)"}},Od={colors:{primary:"#10316f",primaryDark:Td("#10316f",10),primaryLight:Fd("#10316f",10),background:"#0f172a",surface:"#111827",text:"#e5e7eb",textSecondary:"#9ca3af",border:"#1f2937",error:"#F87171",success:"#34D399"},fonts:{base:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',mono:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.3)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.4)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.5)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.6)"}};function Nd(e,r){let n=Ed;if("dark"===e)n=Od;else if("auto"===e){n=window.matchMedia("(prefers-color-scheme: dark)").matches?Od:Ed}r&&(n={...n,colors:{...n.colors,primary:r,primaryDark:Td(r,10),primaryLight:Fd(r,10)}});const t=function(e){const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?`${parseInt(r[1],16)}, ${parseInt(r[2],16)}, ${parseInt(r[3],16)}`:"0, 0, 0"}(n.colors.primary);return document.documentElement.style.setProperty("--askdona-primary-rgb",t),n}function Pd(e,r){for(var n in r)e[n]=r[n];return e}function Ld(e,r){for(var n in e)if("__source"!==n&&!(n in r))return!0;for(var t in r)if("__source"!==t&&e[t]!==r[t])return!0;return!1}function qd(e,r){this.props=e,this.context=r}(qd.prototype=new x).isPureReactComponent=!0,qd.prototype.shouldComponentUpdate=function(e,r){return Ld(this.props,e)||Ld(this.state,r)};var Hd=n.v;n.v=function(e){e.type&&e.type.J&&e.ref&&(e.props.ref=e.ref,e.ref=null),Hd&&Hd(e)};var Bd="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var Jd=n.S;n.S=function(e,r,n,t){if(e.then)for(var o,a=r;a=a.m;)if((o=a.C)&&o.C)return null==r.S&&(r.S=n.S,r.h=n.h),o.C(e,r);Jd(e,r,n,t)};var Vd=n.unmount;function Ud(e,r,n){return e&&(e.C&&e.C.H&&(e.C.H.m.forEach(function(e){"function"==typeof e.C&&e.C()}),e.C.H=null),null!=(e=Pd({},e)).C&&(e.C.D===n&&(e.C.D=r),e.C.S=!0,e.C=null),e.h=e.h&&e.h.map(function(e){return Ud(e,r,n)})),e}function Wd(e,r,n){return e&&n&&(e.M=null,e.h=e.h&&e.h.map(function(e){return Wd(e,r,n)}),e.C&&e.C.D===r&&(e.S&&n.appendChild(e.S),e.C.S=!0,e.C.D=n)),e}function Qd(){this._=0,this.o=null,this.v=null}function Zd(e){var r=e.m.C;return r&&r.V&&r.V(e)}function Gd(){this.i=null,this.l=null}n.unmount=function(e){var r=e.C;r&&r.U&&r.U(),r&&32&e._&&(e.type=null),Vd&&Vd(e)},(Qd.prototype=new x).C=function(e,r){var n=r.C,t=this;null==t.o&&(t.o=[]),t.o.push(n);var o=Zd(t.M),a=!1,i=function(){a||(a=!0,n.U=null,o?o(s):s())};n.U=i;var s=function(){if(! --t._){if(t.state.V){var e=t.state.V;t.M.h[0]=Wd(e,e.C.D,e.C.W)}var r;for(t.setState({V:t.v=null});r=t.o.pop();)r.forceUpdate()}};t._++||32&r._||t.setState({V:t.v=t.M.h[0]}),e.then(i,i)},Qd.prototype.componentWillUnmount=function(){this.o=[]},Qd.prototype.render=function(e,r){if(this.v){if(this.M.h){var n=document.createElement("div"),t=this.M.h[0].C;this.M.h[0]=Ud(this.v,n,t.W=t.D)}this.v=null}var o=r.V&&v(k,null,e.fallback);return o&&(o._&=-33),[v(k,null,r.V?null:e.children),o]};var Kd=function(e,r,n){if(++n[1]===n[0]&&e.l.delete(r),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(Gd.prototype=new x).V=function(e){var r=this,n=Zd(r.M),t=r.l.get(e);return t[0]++,function(o){var a=function(){r.props.revealOrder?(t.push(o),Kd(r,e,t)):o()};n?n(a):a()}},Gd.prototype.render=function(e){this.i=null,this.l=new Map;var r=_(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&r.reverse();for(var n=r.length;n--;)this.l.set(r[n],this.i=[1,0,this.i]);return e.children},Gd.prototype.componentDidUpdate=Gd.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(r,n){Kd(e,n,r)})};var Yd="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,Xd=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,el=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,rl=/[A-Z0-9]/g,nl="undefined"!=typeof document,tl=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};x.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(x.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(r){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:r})}})});var ol=n.event;function al(){}function il(){return this.cancelBubble}function sl(){return this.defaultPrevented}n.event=function(e){return ol&&(e=ol(e)),e.persist=al,e.isPropagationStopped=il,e.isDefaultPrevented=sl,e.nativeEvent=e};var dl={enumerable:!1,configurable:!0,get:function(){return this.class}},ll=n.vnode;n.vnode=function(e){"string"==typeof e.type&&function(e){var r=e.props,n=e.type,t={},o=-1===n.indexOf("-");for(var a in r){var i=r[a];if(!("value"===a&&"defaultValue"in r&&null==i||nl&&"children"===a&&"noscript"===n||"class"===a||"className"===a)){var s=a.toLowerCase();"defaultValue"===a&&"value"in r&&null==r.value?a="value":"download"===a&&!0===i?i="":"translate"===s&&"no"===i?i=!1:"o"===s[0]&&"n"===s[1]?"ondoubleclick"===s?a="ondblclick":"onchange"!==s||"input"!==n&&"textarea"!==n||tl(r.type)?"onfocus"===s?a="onfocusin":"onblur"===s?a="onfocusout":el.test(a)&&(a=s):s=a="oninput":o&&Xd.test(a)?a=a.replace(rl,"-$&").toLowerCase():null===i&&(i=void 0),"oninput"===s&&t[a=s]&&(a="oninputCapture"),t[a]=i}}"select"==n&&t.multiple&&Array.isArray(t.value)&&(t.value=_(r.children).forEach(function(e){e.props.selected=-1!=t.value.indexOf(e.props.value)})),"select"==n&&null!=t.defaultValue&&(t.value=_(r.children).forEach(function(e){e.props.selected=t.multiple?-1!=t.defaultValue.indexOf(e.props.value):t.defaultValue==e.props.value})),r.class&&!r.className?(t.class=r.class,Object.defineProperty(t,"className",dl)):(r.className&&!r.class||r.class&&r.className)&&(t.class=t.className=r.className),e.props=t}(e),e.$$typeof=Yd,ll&&ll(e)};var cl=n.I;n.I=function(e){cl&&cl(e),e.C};var ul=n.diffed;n.diffed=function(e){ul&&ul(e);var r=e.props,n=e.S;null!=n&&"textarea"===e.type&&"value"in r&&r.value!==n.value&&(n.value=null==r.value?"":r.value)},function(e,r,n,t){_e.p=r,ke=e,xe=n,we=t}(v);const hl=function(e){function r(r){var n=Pd({},r);return delete n.ref,e(n,r.ref||null)}return r.$$typeof=Bd,r.render=r,r.prototype.isReactComponent=r.J=!0,r.displayName="ForwardRef("+(e.displayName||e.name)+")",r}(({config:e},r)=>{const[n,t]=se({isOpen:"fullscreen"===e.displayMode,currentMode:"ask-ai",messages:[],isLoading:!1,streamingContent:"",error:null,boostMode:!1,showIntro:!0,metadataFilters:null}),{isValid:o,error:a,config:i}=$d(e.chatflowId),[s,d]=se(null);de(()=>{J(e.chatflowId,e.language).then(e=>{e&&e.embedConfig&&d(e.embedConfig)}).catch(()=>{d(null)})},[e.chatflowId,e.language]);const l={...e};s?(s.introTitle&&(l.introTitle=s.introTitle),s.introMessage&&(l.introMessage=s.introMessage),s.exampleQuestions&&(l.exampleQuestions=s.exampleQuestions),s.appearanceSettings&&(l.primaryColor=s.appearanceSettings.primaryColor||void 0,l.theme=s.appearanceSettings.theme||l.theme,l.position=s.appearanceSettings.position||l.position,l.displayMode=s.appearanceSettings.displayMode||l.displayMode),s.featureFlags&&("boolean"==typeof s.featureFlags.enableBoostMode&&(l.defaultBoostMode=!!s.featureFlags.enableBoostMode),"boolean"==typeof s.featureFlags.allowBoostModeToggle&&(l.allowBoostModeToggle=!!s.featureFlags.allowBoostModeToggle),"boolean"==typeof s.featureFlags.enableRagDeepResearch&&(l.enableRagDeepResearch=!!s.featureFlags.enableRagDeepResearch))):i&&(l.introTitle=i.introTitle,l.introMessage=i.introMessage,l.exampleQuestions=i.exampleQuestions,l.theme=i.theme,l.position=i.position,l.primaryColor=i.primaryColor,l.defaultBoostMode=i.defaultBoostMode,l.allowBoostModeToggle=i.allowBoostModeToggle,l.displayMode=e.displayMode);const c=Nd(l.theme||"light",l.primaryColor),{messages:u,sendMessage:h,isLoading:p,streamingContent:m,error:g,currentState:f,sessionId:b,submitFeedback:v,clearChat:y}=Rd(e.chatflowId);de(()=>{t(e=>({...e,messages:u,isLoading:p,streamingContent:m,error:a||g,showIntro:0===u.length&&e.showIntro}))},[u,p,m,a,g]),de(()=>{i&&n.boostMode!==i.defaultBoostMode&&t(e=>({...e,boostMode:i.defaultBoostMode}))},[i]),function(e,r,n){K=6,le(function(){if("function"==typeof e){var n=e(r());return function(){e(null),n&&"function"==typeof n&&n()}}if(e)return e.current=r(),function(){return e.current=null}},null==n?n:n.concat(e))}(r,()=>({open:()=>{t(e=>({...e,isOpen:!0}))},close:()=>{t(e=>({...e,isOpen:!1}))},sendMessage:e=>{t(e=>({...e,isOpen:!0})),h(e)}}),[h]);const k=ce(null);if(de(()=>{if(!k.current)return;const e=k.current;e.style.setProperty("--askdona-primary",c.colors.primary),e.style.setProperty("--askdona-primary-dark",c.colors.primaryDark),e.style.setProperty("--askdona-primary-light",c.colors.primaryLight),e.style.setProperty("--askdona-background",c.colors.background),e.style.setProperty("--askdona-surface",c.colors.surface),e.style.setProperty("--askdona-text",c.colors.text),e.style.setProperty("--askdona-text-secondary",c.colors.textSecondary),e.style.setProperty("--askdona-border",c.colors.border),e.style.setProperty("--askdona-error",c.colors.error),e.style.setProperty("--askdona-success",c.colors.success),e.style.setProperty("--askdona-font-base",c.fonts.base),e.style.setProperty("--askdona-font-mono",c.fonts.mono),e.style.setProperty("--askdona-bg-secondary",c.colors.surface),e.style.setProperty("--askdona-bg-hover",c.colors.primaryLight+"20"),e.style.setProperty("--askdona-surface-color",c.colors.background),e.style.setProperty("--askdona-border-color",c.colors.border)},[c]),!o)return null;return U("div",{ref:k,style:{fontFamily:"var(--askdona-font-base)",color:"var(--askdona-text)"},children:[!n.isOpen&&"fullscreen"!==l.displayMode&&U(Cd,{onClick:()=>{t(e=>({...e,isOpen:!0}))},position:l.position||"bottom-right"}),(n.isOpen||"fullscreen"===l.displayMode)&&U(hd,{isOpen:n.isOpen||"fullscreen"===l.displayMode,onClose:()=>{"fullscreen"!==l.displayMode&&t(e=>({...e,isOpen:!1}))},currentMode:n.currentMode,onModeSwitch:e=>{t(r=>({...r,currentMode:e}))},messages:n.messages,isLoading:n.isLoading,streamingContent:n.streamingContent,onSendMessage:(e,r,o)=>{h(e,void 0!==r?r:n.boostMode,o||n.metadataFilters),t(e=>({...e,showIntro:!1}))},error:n.error,config:l,currentState:f,boostMode:n.boostMode,onBoostModeChange:e=>{t(r=>({...r,boostMode:e}))},sessionId:b,onFeedbackSubmit:v,onClearChat:()=>{y(),t(e=>({...e,showIntro:!0}))},showIntro:n.showIntro,displayMode:l.displayMode||"modal",metadataFilters:n.metadataFilters,onMetadataFiltersChange:e=>{t(r=>({...r,metadataFilters:e}))}})]})});hl.displayName="Widget";const pl=["chatflow-id","theme","position","primary-color","language","display-mode","custom-css","debug","instrument-serif-regular","instrument-serif-600"];class ml extends HTMLElement{constructor(){super(...arguments),this.widgetRef={current:null},this.initialised=!1}static get observedAttributes(){return pl}connectedCallback(){if(this.initialised)return;this.initialised=!0,this.shadow=this.attachShadow({mode:"open"});const e=document.createElement("style");e.textContent="\n  /* Ensure font available within shadow */\n  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block');\n  :host {\n    all: initial;\n    contain: content;\n    position: fixed;\n    inset: auto;\n    z-index: 999999; /* Keep on top of most sites */\n  }\n\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n\n  /* Scoped scrollbar styling */\n  *::-webkit-scrollbar { width: 6px; height: 6px; }\n  *::-webkit-scrollbar-track { background: transparent; }\n  *::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.2); border-radius: 3px; }\n  *::-webkit-scrollbar-thumb:hover { background: rgba(0, 0, 0, 0.3); }\n\n  @media (prefers-reduced-motion: reduce) {\n    * { animation: none !important; transition: none !important; }\n  }\n",this.shadow.appendChild(e);const r=this.getAttribute("instrument-serif-regular"),n=this.getAttribute("instrument-serif-600");if(r||n){if(r){const e=document.createElement("link");e.rel="preload",e.as="font",e.href=r,e.type="font/woff2",e.crossOrigin="anonymous",this.shadow.appendChild(e)}if(n){const e=document.createElement("link");e.rel="preload",e.as="font",e.href=n,e.type="font/woff2",e.crossOrigin="anonymous",this.shadow.appendChild(e)}const e=document.createElement("style");e.textContent=`\n        ${r?`@font-face { font-family: 'Instrument Serif'; font-style: normal; font-weight: 400; font-display: swap; src: url('${r}') format('woff2'); }`:""}\n        ${n?`@font-face { font-family: 'Instrument Serif'; font-style: normal; font-weight: 600; font-display: swap; src: url('${n}') format('woff2'); }`:""}\n      `,this.shadow.appendChild(e)}else{const e=document.createElement("link");e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",this.shadow.appendChild(e);const r="askdona-font-global";if(!document.getElementById(r)){const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",document.head.appendChild(e);const n=document.createElement("link");n.rel="preconnect",n.href="https://fonts.gstatic.com",n.crossOrigin="anonymous",document.head.appendChild(n);const t=document.createElement("link");t.id=r,t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",document.head.appendChild(t)}}const t="askdona-font-global";if(!document.getElementById(t)){const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",document.head.appendChild(e);const r=document.createElement("link");r.rel="preconnect",r.href="https://fonts.gstatic.com",r.crossOrigin="anonymous",document.head.appendChild(r);const n=document.createElement("link");n.id=t,n.rel="stylesheet",n.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",document.head.appendChild(n)}this.gooberStyleEl=document.createElement("style"),this.gooberStyleEl.id="_goober",this.gooberStyleEl.appendChild(document.createTextNode(" ")),this.shadow.appendChild(this.gooberStyleEl),window._goober=this.gooberStyleEl,this.mountPoint=document.createElement("div"),this.shadow.appendChild(this.mountPoint),this.applyPosition();const o=this.getAttribute("custom-css");if(o){const e=document.createElement("link");e.rel="stylesheet",e.href=o,this.shadow.appendChild(e)}this.renderWidget()}disconnectedCallback(){if(this.mountPoint&&L(null,this.mountPoint),window._goober===this.gooberStyleEl)try{delete window._goober}catch(e){window._goober=null}}attributeChangedCallback(e,r,n){this.applyPosition(),this.renderWidget()}open(){var e;null===(e=this.widgetRef.current)||void 0===e||e.open()}close(){var e;null===(e=this.widgetRef.current)||void 0===e||e.close()}sendMessage(e){var r;null===(r=this.widgetRef.current)||void 0===r||r.sendMessage(e)}applyPosition(){const e=this.getAttribute("position")||"bottom-right";if("fullscreen"===(this.getAttribute("display-mode")||"modal"))return this.style.position="fixed",void(this.style.inset="0");this.style.position="fixed",this.style.bottom="20px",this.style.left="bottom-left"===e?"20px":"",this.style.right="bottom-right"===e?"20px":""}getConfig(){const e=this.getAttribute("chatflow-id")||"";if(!e)return null;return{chatflowId:e,theme:this.getAttribute("theme")||void 0,position:this.getAttribute("position")||void 0,primaryColor:this.getAttribute("primary-color")||void 0,language:this.getAttribute("language")||void 0,displayMode:this.getAttribute("display-mode")||void 0,debug:this.hasAttribute("debug")?"true"===this.getAttribute("debug"):void 0}}renderWidget(){const e=this.getConfig();e&&L(U(hl,{ref:this.widgetRef,config:e}),this.mountPoint)}}function gl(){customElements.get("askdona-widget")||customElements.define("askdona-widget",ml)}let fl={current:null};async function bl(e){var r,n;try{const t=function(e){return e.chatflowId?e.theme&&!["light","dark","auto"].includes(e.theme)?{isValid:!1,error:'Invalid theme. Must be "light", "dark", or "auto"'}:e.position&&!["bottom-right","bottom-left"].includes(e.position)?{isValid:!1,error:'Invalid position. Must be "bottom-right" or "bottom-left"'}:e.language&&!["ja","en"].includes(e.language)?{isValid:!1,error:'Invalid language. Must be "ja" or "en"'}:{isValid:!0}:{isValid:!1,error:"chatflowId is required"}}(e);if(!t.isValid)throw new Error(t.error);!function(){if(!document.querySelector('meta[name="askdona-csp"]')){const e=document.createElement("meta");e.name="askdona-csp",e.content=["default-src 'self'","script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net","style-src 'self' 'unsafe-inline'","img-src 'self' data: https:","connect-src 'self' https://api.askdona.com wss://api.askdona.com","font-src 'self' data:","frame-ancestors 'none'"].join("; "),document.head.appendChild(e)}}();let o=null;try{o=await J(e.chatflowId,e.language)}catch(e){}let a={...e};if(null==o?void 0:o.embedConfig){const e=o.embedConfig.introTitle&&o.embedConfig.introMessage?{title:o.embedConfig.introTitle,message:o.embedConfig.introMessage}:null;e&&(a.introTitle=e.title,a.introMessage=e.message),o.embedConfig.exampleQuestions&&(a.exampleQuestions=o.embedConfig.exampleQuestions),o.embedConfig.featureFlags&&(a.defaultBoostMode=o.embedConfig.featureFlags.enableBoostMode,a.allowBoostModeToggle=o.embedConfig.featureFlags.allowBoostModeToggle,a.enableRagDeepResearch=o.embedConfig.featureFlags.enableRagDeepResearch),o.embedConfig.appearanceSettings&&(!a.primaryColor&&o.embedConfig.appearanceSettings.primaryColor&&(a.primaryColor=o.embedConfig.appearanceSettings.primaryColor),!a.theme&&o.embedConfig.appearanceSettings.theme&&(a.theme=o.embedConfig.appearanceSettings.theme),!a.position&&o.embedConfig.appearanceSettings.position&&(a.position=o.embedConfig.appearanceSettings.position),!a.displayMode&&o.embedConfig.appearanceSettings.displayMode&&(a.displayMode=o.embedConfig.appearanceSettings.displayMode))}gl();let i=document.querySelector("askdona-widget");i||(i=document.createElement("askdona-widget"),document.body.appendChild(i)),i.setAttribute("chatflow-id",a.chatflowId),a.theme&&i.setAttribute("theme",a.theme),a.position&&i.setAttribute("position",a.position),a.primaryColor&&i.setAttribute("primary-color",a.primaryColor),a.language&&i.setAttribute("language",a.language),a.displayMode&&i.setAttribute("display-mode",a.displayMode),a.customCSS&&i.setAttribute("custom-css",a.customCSS),(null===(r=a.instrumentSerif)||void 0===r?void 0:r.w400)&&i.setAttribute("instrument-serif-regular",a.instrumentSerif.w400),(null===(n=a.instrumentSerif)||void 0===n?void 0:n.w600)&&i.setAttribute("instrument-serif-600",a.instrumentSerif.w600),a.debug&&i.setAttribute("debug",String(!!a.debug)),a.onReady&&setTimeout(()=>{a.onReady&&a.onReady()},0),a.debug}catch(r){e.onError&&e.onError(r)}}function vl(){const e=document.querySelector("askdona-widget");e&&e.parentNode&&e.parentNode.removeChild(e),fl={current:null}}function yl(){const e=document.querySelector("askdona-widget");return e&&"function"==typeof e.open?e.open():fl.current?fl.current.open():void 0}function kl(){const e=document.querySelector("askdona-widget");return e&&"function"==typeof e.close?e.close():fl.current?fl.current.close():void 0}function xl(e){const r=document.querySelector("askdona-widget");return r&&"function"==typeof r.sendMessage?r.sendMessage(e):fl.current?fl.current.sendMessage(e):void 0}if("undefined"!=typeof window){gl();const e=document.currentScript;e&&e.dataset.chatflowId&&window.addEventListener("DOMContentLoaded",async()=>{const r=e.dataset.chatflowId;if(r)try{await bl({chatflowId:r,theme:e.dataset.theme,position:e.dataset.position,primaryColor:e.dataset.primaryColor,language:e.dataset.language,displayMode:e.dataset.displayMode})}catch(e){}})}return window.AskDona={init:bl,destroy:vl,open:yl,close:kl,sendMessage:xl},e.close=kl,e.destroy=vl,e.init=bl,e.open=yl,e.sendMessage=xl,e}({});
