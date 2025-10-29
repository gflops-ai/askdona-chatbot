var AskDona=function(e){"use strict";var n,r,t,o,a,i,l,s,d,c,u,f={},p=[],g=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function m(e,n){for(var r in n)e[r]=n[r];return e}function v(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function b(e,r,t){var o,a,i,l={};for(i in r)"key"==i?o=r[i]:"ref"==i?a=r[i]:l[i]=r[i];if(arguments.length>2&&(l.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===l[i]&&(l[i]=e.defaultProps[i]);return y(e,l,o,a,null)}function y(e,n,o,a,i){var l={type:e,props:n,key:o,ref:a,h:null,m:null,v:0,S:null,_:null,constructor:void 0,C:null==i?++t:i,$:-1,M:0};return null==i&&null!=r.vnode&&r.vnode(l),l}function k(e){return e.children}function x(e,n){this.props=e,this.context=n}function w(e,n){if(null==n)return e.m?w(e.m,e.$+1):null;for(var r;n<e.h.length;n++)if(null!=(r=e.h[n])&&null!=r.S)return r.S;return"function"==typeof e.type?w(e):null}function S(e){var n,r;if(null!=(e=e.m)&&null!=e._){for(e.S=e._.base=null,n=0;n<e.h.length;n++)if(null!=(r=e.h[n])&&null!=r.S){e.S=e._.base=r.S;break}return S(e)}}function _(e){(!e.A&&(e.A=!0)&&o.push(e)&&!z.j++||a!=r.debounceRendering)&&((a=r.debounceRendering)||i)(z)}function z(){for(var e,n,t,a,i,s,d,c=1;o.length;)o.length>c&&o.sort(l),e=o.shift(),c=o.length,e.A&&(t=void 0,i=(a=(n=e).C).S,s=[],d=[],n.I&&((t=m({},a)).C=a.C+1,r.vnode&&r.vnode(t),q(n.I,t,a,n.D,n.I.namespaceURI,32&a.M?[i]:null,s,null==i?w(a):i,!!(32&a.M),d),t.C=a.C,t.m.h[t.$]=t,E(s,t,d),t.S!=i&&S(t)));z.j=0}function C(e,n,r,t,o,a,i,l,s,d,c){var u,g,m,v,b,x,S=t&&t.h||p,_=n.length;for(s=function(e,n,r,t,o){var a,i,l,s,d,c=r.length,u=c,f=0;for(e.h=new Array(o),a=0;a<o;a++)null!=(i=n[a])&&"boolean"!=typeof i&&"function"!=typeof i?(s=a+f,(i=e.h[a]="string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?y(null,i,null,null,null):h(i)?y(k,{children:i},null,null,null):null==i.constructor&&i.v>0?y(i.type,i.props,i.key,i.ref?i.ref:null,i.C):i).m=e,i.v=e.v+1,l=null,-1!=(d=i.$=A(i,r,s,u))&&(u--,(l=r[d])&&(l.M|=2)),null==l||null==l.C?(-1==d&&(o>c?f--:o<c&&f++),"function"!=typeof i.type&&(i.M|=4)):d!=s&&(d==s-1?f--:d==s+1?f++:(d>s?f--:f++,i.M|=4))):e.h[a]=null;if(u)for(a=0;a<c;a++)null!=(l=r[a])&&!(2&l.M)&&(l.S==t&&(t=w(l)),T(l,l));return t}(r,n,S,s,_),u=0;u<_;u++)null!=(m=r.h[u])&&(g=-1==m.$?f:S[m.$]||f,m.$=u,x=q(e,m,g,o,a,i,l,s,d,c),v=m.S,m.ref&&g.ref!=m.ref&&(g.ref&&R(g.ref,null,m),c.push(m.ref,m._||v,m)),null==b&&null!=v&&(b=v),4&m.M||g.h===m.h?s=$(m,s,e):"function"==typeof m.type&&void 0!==x?s=x:v&&(s=v.nextSibling),m.M&=-7);return r.S=b,s}function $(e,n,r){var t,o;if("function"==typeof e.type){for(t=e.h,o=0;t&&o<t.length;o++)t[o]&&(t[o].m=e,n=$(t[o],n,r));return n}e.S!=n&&(n&&e.type&&!r.contains(n)&&(n=w(e)),r.insertBefore(e.S,n||null),n=e.S);do{n=n&&n.nextSibling}while(null!=n&&8==n.nodeType);return n}function M(e,n){return n=n||[],null==e||"boolean"==typeof e||(h(e)?e.some(function(e){M(e,n)}):n.push(e)),n}function A(e,n,r,t){var o,a,i=e.key,l=e.type,s=n[r];if(null===s&&null==e.key||s&&i==s.key&&l==s.type&&!(2&s.M))return r;if(t>(null==s||2&s.M?0:1))for(o=r-1,a=r+1;o>=0||a<n.length;){if(o>=0){if((s=n[o])&&!(2&s.M)&&i==s.key&&l==s.type)return o;o--}if(a<n.length){if((s=n[a])&&!(2&s.M)&&i==s.key&&l==s.type)return a;a++}}return-1}function j(e,n,r){"-"==n[0]?e.setProperty(n,null==r?"":r):e[n]=null==r?"":"number"!=typeof r||g.test(n)?r:r+"px"}function I(e,n,r,t,o){var a,i;e:if("style"==n)if("string"==typeof r)e.style.cssText=r;else{if("string"==typeof t&&(e.style.cssText=t=""),t)for(n in t)r&&n in r||j(e.style,n,"");if(r)for(n in r)t&&r[n]==t[n]||j(e.style,n,r[n])}else if("o"==n[0]&&"n"==n[1])a=n!=(n=n.replace(s,"$1")),i=n.toLowerCase(),n=i in e||"onFocusOut"==n||"onFocusIn"==n?i.slice(2):n.slice(2),e.l||(e.l={}),e.l[n+a]=r,r?t?r.u=t.u:(r.u=d,e.addEventListener(n,a?u:c,a)):e.removeEventListener(n,a?u:c,a);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in e)try{e[n]=null==r?"":r;break e}catch(e){}"function"==typeof r||(null==r||!1===r&&"-"!=n[4]?e.removeAttribute(n):e.setAttribute(n,"popover"==n&&1==r?"":r))}}function D(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=d++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function q(e,n,t,o,a,i,l,s,d,c){var u,f,p,g,b,y,w,S,_,z,$,M,A,j,I,D,q,E=n.type;if(null!=n.constructor)return null;128&t.M&&(d=!!(32&t.M),i=[s=n.S=t.S]),(u=r.v)&&u(n);e:if("function"==typeof E)try{if(S=n.props,_="prototype"in E&&E.prototype.render,z=(u=E.contextType)&&o[u._],$=u?z?z.props.value:u.m:o,t._?w=(f=n._=t._).m=f.q:(_?n._=f=new E(S,$):(n._=f=new x(S,$),f.constructor=E,f.render=F),z&&z.sub(f),f.props=S,f.state||(f.state={}),f.context=$,f.D=o,p=f.A=!0,f.O=[],f.N=[]),_&&null==f.R&&(f.R=f.state),_&&null!=E.getDerivedStateFromProps&&(f.R==f.state&&(f.R=m({},f.R)),m(f.R,E.getDerivedStateFromProps(S,f.R))),g=f.props,b=f.state,f.C=n,p)_&&null==E.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),_&&null!=f.componentDidMount&&f.O.push(f.componentDidMount);else{if(_&&null==E.getDerivedStateFromProps&&S!==g&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(S,$),!f.S&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(S,f.R,$)||n.C==t.C){for(n.C!=t.C&&(f.props=S,f.state=f.R,f.A=!1),n.S=t.S,n.h=t.h,n.h.some(function(e){e&&(e.m=n)}),M=0;M<f.N.length;M++)f.O.push(f.N[M]);f.N=[],f.O.length&&l.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(S,f.R,$),_&&null!=f.componentDidUpdate&&f.O.push(function(){f.componentDidUpdate(g,b,y)})}if(f.context=$,f.props=S,f.I=e,f.S=!1,A=r.j,j=0,_){for(f.state=f.R,f.A=!1,A&&A(n),u=f.render(f.props,f.state,f.context),I=0;I<f.N.length;I++)f.O.push(f.N[I]);f.N=[]}else do{f.A=!1,A&&A(n),u=f.render(f.props,f.state,f.context),f.state=f.R}while(f.A&&++j<25);f.state=f.R,null!=f.getChildContext&&(o=m(m({},o),f.getChildContext())),_&&!p&&null!=f.getSnapshotBeforeUpdate&&(y=f.getSnapshotBeforeUpdate(g,b)),D=u,null!=u&&u.type===k&&null==u.key&&(D=O(u.props.children)),s=C(e,h(D)?D:[D],n,t,o,a,i,l,s,d,c),f.base=n.S,n.M&=-161,f.O.length&&l.push(f),w&&(f.q=f.m=null)}catch(e){if(n.C=null,d||null!=i)if(e.then){for(n.M|=d?160:128;s&&8==s.nodeType&&s.nextSibling;)s=s.nextSibling;i[i.indexOf(s)]=null,n.S=s}else for(q=i.length;q--;)v(i[q]);else n.S=t.S,n.h=t.h;r.S(e,n,t)}else null==i&&n.C==t.C?(n.h=t.h,n.S=t.S):s=n.S=N(t.S,n,t,o,a,i,l,d,c);return(u=r.diffed)&&u(n),128&n.M?void 0:s}function E(e,n,t){for(var o=0;o<t.length;o++)R(t[o],t[++o],t[++o]);r._&&r._(n,e),e.some(function(n){try{e=n.O,n.O=[],e.some(function(e){e.call(n)})}catch(e){r.S(e,n.C)}})}function O(e){return"object"!=typeof e||null==e||e.v&&e.v>0?e:h(e)?e.map(O):m({},e)}function N(e,t,o,a,i,l,s,d,c){var u,p,g,m,b,y,k,x=o.props,S=t.props,_=t.type;if("svg"==_?i="http://www.w3.org/2000/svg":"math"==_?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=l)for(u=0;u<l.length;u++)if((b=l[u])&&"setAttribute"in b==!!_&&(_?b.localName==_:3==b.nodeType)){e=b,l[u]=null;break}if(null==e){if(null==_)return document.createTextNode(S);e=document.createElementNS(i,_,S.is&&S),d&&(r.T&&r.T(t,l),d=!1),l=null}if(null==_)x===S||d&&e.data==S||(e.data=S);else{if(l=l&&n.call(e.childNodes),x=o.props||f,!d&&null!=l)for(x={},u=0;u<e.attributes.length;u++)x[(b=e.attributes[u]).name]=b.value;for(u in x)if(b=x[u],"children"==u);else if("dangerouslySetInnerHTML"==u)g=b;else if(!(u in S)){if("value"==u&&"defaultValue"in S||"checked"==u&&"defaultChecked"in S)continue;I(e,u,null,b,i)}for(u in S)b=S[u],"children"==u?m=b:"dangerouslySetInnerHTML"==u?p=b:"value"==u?y=b:"checked"==u?k=b:d&&"function"!=typeof b||x[u]===b||I(e,u,b,x[u],i);if(p)d||g&&(p.F==g.F||p.F==e.innerHTML)||(e.innerHTML=p.F),t.h=[];else if(g&&(e.innerHTML=""),C("template"==t.type?e.content:e,h(m)?m:[m],t,o,a,"foreignObject"==_?"http://www.w3.org/1999/xhtml":i,l,s,l?l[0]:o.h&&w(o,0),d,c),null!=l)for(u=l.length;u--;)v(l[u]);d||(u="value","progress"==_&&null==y?e.removeAttribute("value"):null!=y&&(y!==e[u]||"progress"==_&&!y||"option"==_&&y!=x[u])&&I(e,u,y,x[u],i),u="checked",null!=k&&k!=e[u]&&I(e,u,k,x[u],i))}return e}function R(e,n,t){try{if("function"==typeof e){var o="function"==typeof e.M;o&&e.M(),o&&null==n||(e.M=e(n))}else e.current=n}catch(e){r.S(e,t)}}function T(e,n,t){var o,a;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.S||R(o,null,n)),null!=(o=e._)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.S(e,n)}o.base=o.I=null}if(o=e.h)for(a=0;a<o.length;a++)o[a]&&T(o[a],n,t||"function"!=typeof e.type);t||v(e.S),e._=e.m=e.S=void 0}function F(e,n,r){return this.constructor(e,r)}function P(e,t,o){var a,i,l;t==document&&(t=document.documentElement),r.m&&r.m(e,t),a=!1?null:t.h,i=[],l=[],q(t,e=t.h=b(k,null,[e]),a||f,f,t.namespaceURI,a?null:t.firstChild?n.call(t.childNodes):null,i,a?a.S:t.firstChild,false,l),E(i,e,l)}function L(e,r,t){var o,a,i,l,s=m({},e.props);for(i in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),r)"key"==i?o=r[i]:"ref"==i?a=r[i]:s[i]=void 0===r[i]&&null!=l?l[i]:r[i];return arguments.length>2&&(s.children=arguments.length>3?n.call(arguments,2):t),y(e.type,s,o||e.key,a||e.ref,null)}function H(e){if(!e)return"";const n=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#039;"),r=new Set(["A","BR","STRONG"]),t=new Set(["href","title"]),o=/^(https?:|mailto:|tel:)/i,a=document.createElement("template");a.innerHTML=e;const i=e=>{switch(e.nodeType){case Node.TEXT_NODE:return n(e.data);case Node.ELEMENT_NODE:{const a=e,l=a.tagName;if(!r.has(l)){let e="";for(const n of Array.from(a.childNodes))e+=i(n);return e}if("BR"===l)return"<br>";if("STRONG"===l){let e="";for(const n of Array.from(a.childNodes))e+=i(n);return`<strong>${e}</strong>`}if("A"===l){let e="",r="";for(const n of Array.from(a.attributes)){const a=n.name.toLowerCase();if(t.has(a))if("href"===a){const r=(n.value||"").trim();o.test(r)&&(e=r)}else"title"===a&&(r=n.value||"")}let l="";for(const e of Array.from(a.childNodes))l+=i(e);const s=' rel="noopener noreferrer"',d=e?` href="${n(e)}"`:"",c=r?` title="${n(r)}"`:"";return d?`<a${d}${c}${' target="_blank"'}${s}>${l}</a>`:l}return""}default:return""}};let l="";for(const e of Array.from(a.content.childNodes))l+=i(e);return l}function U(){return window.crypto&&window.crypto.randomUUID?window.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const n=16*Math.random()|0;return("x"===e?n:3&n|8).toString(16)})}n=p.slice,r={S:function(e,n,r,t){for(var o,a,i;n=n.m;)if((o=n._)&&!o.m)try{if((a=o.constructor)&&null!=a.getDerivedStateFromError&&(o.setState(a.getDerivedStateFromError(e)),i=o.A),null!=o.componentDidCatch&&(o.componentDidCatch(e,t||{}),i=o.A),i)return o.q=o}catch(n){e=n}throw e}},t=0,x.prototype.setState=function(e,n){var r;r=null!=this.R&&this.R!=this.state?this.R:this.R=m({},this.state),"function"==typeof e&&(e=e(m({},r),this.props)),e&&m(r,e),null!=e&&this.C&&(n&&this.N.push(n),_(this))},x.prototype.forceUpdate=function(e){this.C&&(this.S=!0,e&&this.O.push(e),_(this))},x.prototype.render=k,o=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=function(e,n){return e.C.v-n.C.v},z.j=0,s=/(PointerCapture)$|Capture$/i,d=0,c=D(!1),u=D(!0),"undefined"!=typeof window&&function(){if(window.self!==window.top)try{window.parent.document}catch(e){}}();const B="http://localhost:3000/api/embed/v1";async function J(e,n={}){const r=new AbortController,t=setTimeout(()=>r.abort(),3e4);try{const o={"X-Widget-Version":"1.0.0",...n.headers||{}};n.method&&["POST","PUT","PATCH"].includes(n.method)&&(o["Content-Type"]="application/json");const a=await fetch(`${B}${e}`,{...n,signal:r.signal,headers:o});if(clearTimeout(t),!a.ok){const e=await a.json().catch(()=>({message:"Request failed"}));throw new Error(e.message||`HTTP ${a.status}`)}return await a.json()}catch(e){if(clearTimeout(t),"AbortError"===e.name)throw new Error("Request timeout");throw e}}async function V(e,n){try{const r=n?`?language=${encodeURIComponent(n)}`:"";return await J(`/welcome/${e}${r}`)}catch(e){return null}}var Q=0;function W(e,n,t,o,a,i){n||(n={});var l,s,d=n;if("ref"in d)for(s in d={},n)"ref"==s?l=n[s]:d[s]=n[s];var c={type:e,props:d,key:t,ref:l,h:null,m:null,v:0,S:null,_:null,constructor:void 0,C:--Q,$:-1,M:0,P:a,L:i};if("function"==typeof e&&(l=e.defaultProps))for(s in l)void 0===d[s]&&(d[s]=l[s]);return r.vnode&&r.vnode(c),c}var Z,G,K,Y,X=0,ee=[],ne=r,re=ne.v,te=ne.j,oe=ne.diffed,ae=ne._,ie=ne.unmount,le=ne.m;function se(e,n){ne.O&&ne.O(G,e,X||n),X=0;var r=G.H||(G.H={m:[],O:[]});return e>=r.m.length&&r.m.push({}),r.m[e]}function de(e){return X=1,function(e,n,r){var t=se(Z++,2);if(t.t=e,!t._&&(t.m=[r?r(n):xe(void 0,n),function(e){var n=t.U?t.U[0]:t.m[0],r=t.t(n,e);n!==r&&(t.U=[r,t.m[1]],t._.setState({}))}],t._=G,!G.B)){var o=function(e,n,r){if(!t._.H)return!0;var o=t._.H.m.filter(function(e){return!!e._});if(o.every(function(e){return!e.U}))return!a||a.call(this,e,n,r);var i=t._.props!==e;return o.forEach(function(e){if(e.U){var n=e.m[0];e.m=e.U,e.U=void 0,n!==e.m[0]&&(i=!0)}}),a&&a.call(this,e,n,r)||i};G.B=!0;var a=G.shouldComponentUpdate,i=G.componentWillUpdate;G.componentWillUpdate=function(e,n,r){if(this.S){var t=a;a=void 0,o(e,n,r),a=t}i&&i.call(this,e,n,r)},G.shouldComponentUpdate=o}return t.U||t.m}(xe,e)}function ce(e,n){var r=se(Z++,3);!ne.R&&ke(r.H,n)&&(r.m=e,r.u=n,G.H.O.push(r))}function ue(e,n){var r=se(Z++,4);!ne.R&&ke(r.H,n)&&(r.m=e,r.u=n,G.O.push(r))}function fe(e){return X=5,pe(function(){return{current:e}},[])}function pe(e,n){var r=se(Z++,7);return ke(r.H,n)&&(r.m=e(),r.H=n,r.O=e),r.m}function ge(e,n){return X=8,pe(function(){return e},n)}function he(){for(var e;e=ee.shift();)if(e.I&&e.H)try{e.H.O.forEach(be),e.H.O.forEach(ye),e.H.O=[]}catch(n){e.H.O=[],ne.S(n,e.C)}}ne.v=function(e){G=null,re&&re(e)},ne.m=function(e,n){e&&n.h&&n.h.T&&(e.T=n.h.T),le&&le(e,n)},ne.j=function(e){te&&te(e),Z=0;var n=(G=e._).H;n&&(K===G?(n.O=[],G.O=[],n.m.forEach(function(e){e.U&&(e.m=e.U),e.u=e.U=void 0})):(n.O.forEach(be),n.O.forEach(ye),n.O=[],Z=0)),K=G},ne.diffed=function(e){oe&&oe(e);var n=e._;n&&n.H&&(n.H.O.length&&(1!==ee.push(n)&&Y===ne.requestAnimationFrame||((Y=ne.requestAnimationFrame)||ve)(he)),n.H.m.forEach(function(e){e.u&&(e.H=e.u),e.u=void 0})),K=G=null},ne._=function(e,n){n.some(function(e){try{e.O.forEach(be),e.O=e.O.filter(function(e){return!e.m||ye(e)})}catch(r){n.some(function(e){e.O&&(e.O=[])}),n=[],ne.S(r,e.C)}}),ae&&ae(e,n)},ne.unmount=function(e){ie&&ie(e);var n,r=e._;r&&r.H&&(r.H.m.forEach(function(e){try{be(e)}catch(e){n=e}}),r.H=void 0,n&&ne.S(n,r.C))};var me="function"==typeof requestAnimationFrame;function ve(e){var n,r=function(){clearTimeout(t),me&&cancelAnimationFrame(n),setTimeout(e)},t=setTimeout(r,35);me&&(n=requestAnimationFrame(r))}function be(e){var n=G,r=e._;"function"==typeof r&&(e._=void 0,r()),G=n}function ye(e){var n=G;e._=e.m(),G=n}function ke(e,n){return!e||e.length!==n.length||n.some(function(n,r){return n!==e[r]})}function xe(e,n){return"function"==typeof n?n(e):n}let we,Se,_e,ze={data:""},Ce=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ze,$e=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Me=/\/\*[^]*?\*\/|  +/g,Ae=/\n+/g,je=(e,n)=>{let r="",t="",o="";for(let a in e){let i=e[a];"@"==a[0]?"i"==a[1]?r=a+" "+i+";":t+="f"==a[1]?je(i,a):a+"{"+je(i,"k"==a[1]?"":n)+"}":"object"==typeof i?t+=je(i,n?n.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,n=>/&/.test(n)?n.replace(/&/g,e):e?e+" "+n:n)):a):null!=i&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=je.p?je.p(a,i):a+":"+i+";")}return r+(n&&o?n+"{"+o+"}":o)+t},Ie={},De=e=>{if("object"==typeof e){let n="";for(let r in e)n+=r+De(e[r]);return n}return e},qe=(e,n,r,t,o)=>{let a=De(e),i=Ie[a]||(Ie[a]=(e=>{let n=0,r=11;for(;n<e.length;)r=101*r+e.charCodeAt(n++)>>>0;return"go"+r})(a));if(!Ie[i]){let n=a!==e?e:(e=>{let n,r,t=[{}];for(;n=$e.exec(e.replace(Me,""));)n[4]?t.shift():n[3]?(r=n[3].replace(Ae," ").trim(),t.unshift(t[0][r]=t[0][r]||{})):t[0][n[1]]=n[2].replace(Ae," ").trim();return t[0]})(e);Ie[i]=je(o?{["@keyframes "+i]:n}:n,r?"":"."+i)}let l=r&&Ie.g?Ie.g:null;return r&&(Ie.g=Ie[i]),((e,n,r,t)=>{t?n.data=n.data.replace(t,e):-1===n.data.indexOf(e)&&(n.data=r?e+n.data:n.data+e)})(Ie[i],n,t,l),i};function Ee(e){let n=this||{},r=e.call?e(n.p):e;return qe(r.unshift?r.raw?((e,n,r)=>e.reduce((e,t,o)=>{let a=n[o];if(a&&a.call){let e=a(r),n=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=n?"."+n:e&&"object"==typeof e?e.props?"":je(e,""):!1===e?"":e}return e+t+(null==a?"":a)},""))(r,[].slice.call(arguments,1),n.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(n.p):r),{}):r,Ce(n.target),n.g,n.o,n.k)}Ee.bind({g:1});let Oe=Ee.bind({k:1});function Ne(e,n,r,t){je.p=n,we=e,Se=r,_e=t}function Re(e,n){let r=this||{};return function(){let n=arguments;return function t(o,a){let i=Object.assign({},o),l=i.className||t.className;r.p=Object.assign({theme:Se&&Se()},i),r.o=/ *go\d+/.test(l),i.className=Ee.apply(r,n)+(l?" "+l:"");let s=e;return e[0]&&(s=i.as||e,delete i.as),_e&&s[0]&&_e(i),we(s,i)}}}const Te=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fe=e=>{const n=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()))(e);return n.charAt(0).toUpperCase()+n.slice(1)},Pe=(...e)=>e.filter((e,n,r)=>Boolean(e)&&""!==e.trim()&&r.indexOf(e)===n).join(" ").trim();var Le={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};const He=({color:e="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:t,children:o,iconNode:a,class:i="",...l})=>b("svg",{...Le,width:String(n),height:n,stroke:e,"stroke-width":t?24*Number(r)/Number(n):r,class:["lucide",i].join(" "),...l},[...a.map(([e,n])=>b(e,n)),...M(o)]),Ue=(e,n)=>{const r=({class:r="",children:t,...o})=>b(He,{...o,iconNode:n,class:Pe(`lucide-${Te(Fe(e))}`,`lucide-${Te(e)}`,r)},t);return r.displayName=Fe(e),r},Be=Ue("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),Je=Ue("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]),Ve=Ue("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),Qe=Ue("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),We=Ue("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),Ze=Ue("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),Ge=Ue("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),Ke=Ue("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),Ye=Ue("file-search",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]),Xe=Ue("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),en=Ue("funnel",[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]]),nn=Ue("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),rn=Ue("lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),tn=Ue("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),on=Ue("message-circle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]),an=Ue("pen-tool",[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]),ln=Ue("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),sn=Ue("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]),dn=Ue("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]),cn=Ue("thumbs-down",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]]),un=Ue("thumbs-up",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]),fn=Ue("timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),pn=Ue("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),gn=Ue("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),hn=Ue("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function mn({headers:e,data:n}){return W(Dn,{children:W("table",{children:[W("thead",{children:W("tr",{children:e.map((e,n)=>W("th",{children:wn(e,void 0)},n))})}),W("tbody",{children:n.map((e,n)=>W("tr",{children:e.map((e,n)=>W("td",{children:wn(e,void 0)},n))},n))})]})})}function vn({code:e,language:n}){const[r,t]=de(!1);return W(qn,{children:[W(En,{children:[W(On,{children:n||"code"}),W(Nn,{onClick:async()=>{try{await navigator.clipboard.writeText(e),t(!0),setTimeout(()=>t(!1),2e3)}catch(n){const r=document.createElement("textarea");r.value=e,document.body.appendChild(r),r.select();try{document.execCommand("copy")}catch(e){}document.body.removeChild(r),t(!0),setTimeout(()=>t(!1),2e3)}},title:"Copy code",children:W(r?Ve:Ge,{size:14})})]}),W(Rn,{children:W("code",{children:e})})]})}function bn({isOpen:e,onClose:n,onSubmit:r,rating:t,config:o}){const[a,i]=de(""),[l,s]=de(!1);if(!e)return null;const d="THUMBS_UP"===t,c="ja"===o.language?d?"何が良かったですか？":"何が改善できますか？":d?"What was helpful?":"What could be improved?",u="ja"===o.language?d?"例：詳しい説明で理解しやすかった":"例：もう少し具体的な例が欲しい":d?"e.g., Clear and detailed explanation":"e.g., Could use more specific examples";return W(Un,{onClick:n,children:W(Bn,{onClick:e=>e.stopPropagation(),children:[W(Jn,{children:[W(Vn,{positive:d,children:W(d?un:cn,{size:16})}),W(Qn,{children:c})]}),W(Wn,{children:W(Zn,{value:a,onChange:e=>i(e.target.value),placeholder:u,rows:3})}),W(Gn,{children:[W(Kn,{onClick:()=>{r(""),n()},children:"ja"===o.language?"スキップ":"Skip"}),W(Yn,{onClick:()=>{s(!0);try{r(a),n()}catch(e){}finally{s(!1)}},disabled:l,children:l?"ja"===o.language?"送信中...":"Sending...":"ja"===o.language?"送信":"Send"})]})]})})}function yn({messageId:e,sessionId:n,feedback:r,onFeedbackSubmit:t,config:o}){const[a,i]=de(!1),[l,s]=de(null),[d,c]=de(r||null),u=e=>{d||(s(e),i(!0))};return W(k,{children:[W(Tn,{children:[W(Fn,{children:"ja"===o.language?"この回答は役に立ちましたか？ 更なる改善のため、ぜひフィードバックをお願いします。":"Was this answer helpful? For further improvements, please share your feedback."}),W(Pn,{children:[W(Ln,{onClick:()=>u("THUMBS_UP"),active:"THUMBS_UP"===(null==d?void 0:d.rating),disabled:!!d,positive:!0,title:"ja"===o.language?"役に立った":"Helpful",children:W(un,{size:14})}),W(Ln,{onClick:()=>u("THUMBS_DOWN"),active:"THUMBS_DOWN"===(null==d?void 0:d.rating),disabled:!!d,positive:!1,title:"ja"===o.language?"役に立たなかった":"Not helpful",children:W(cn,{size:14})})]}),d&&W(Hn,{children:"ja"===o.language?"フィードバックをありがとうございます！":"Thank you for your feedback!"})]}),W(bn,{isOpen:a,onClose:()=>{i(!1),s(null)},onSubmit:n=>{if(!l)return;const r={rating:l,content:n||void 0,submittedAt:(new Date).toISOString(),isSubmitted:!0};c(r),t(e,l,n)},rating:l,config:o})]})}function kn(e,n,r=0){try{const t=window.katex;if(t&&"function"==typeof t.renderToString){return W("span",{dangerouslySetInnerHTML:{F:t.renderToString(e,{displayMode:n,throwOnError:!1,strict:"ignore"})}},`k${r}`)}}catch(e){}return W("code",{className:"inline-code",children:e},`k${r}`)}function xn(e,n=!1,r){var t;if(!e)return[];const o=[],a=e.split("\n");let i=[],l=!1,s=[],d="",c=!1,u=[],f=!1,p=[];const g={};(r||[]).forEach((e,n)=>{g[n+1]=e});const h=()=>{if(i.length>0){const e=i.join("\n");o.push(W("p",{children:wn(e,g)},o.length)),i=[]}},m=()=>{if(u.length>0){const e=u[0].split("|").slice(1,-1).map(e=>e.trim()),n=u.slice(2).map(e=>e.split("|").slice(1,-1).map(e=>e.trim()));o.push(W(mn,{headers:e,data:n},o.length)),u=[]}};for(let e=0;e<a.length;e++){const v=a[e],b=v.trim();if(b.startsWith("```")){l?(o.push(W(vn,{code:s.join("\n"),language:d},o.length)),s=[],d="",l=!1):(h(),l=!0,d=b.slice(3)||"");continue}if(l){s.push(v);continue}if(b.startsWith("$$")){if(!f){h();if(b.endsWith("$$")&&b.length>2){const e=b.slice(2,-2).trim();o.push(W("div",{className:"katex-block",children:kn(e,!0,o.length)},o.length))}else{f=!0;const e=v.slice(v.indexOf("$$")+2);e.trim()&&p.push(e)}}continue}if(f){if(b.endsWith("$$")){const e=v.slice(0,v.lastIndexOf("$$"));e.trim()&&p.push(e);const n=p.join("\n");o.push(W("div",{className:"katex-block",children:kn(n,!0,o.length)},o.length)),p=[],f=!1}else p.push(v);continue}if(!n&&b.includes("|")&&e+1<a.length){if(a[e+1].trim().match(/^[\|\s\-:]+$/)){h(),c=!0,u=[b];continue}}if(c){""!==b&&b.includes("|")?u.push(b):(m(),c=!1,b&&i.push(v));continue}const y=b.match(/^(#{1,6})(?!#)/);if(y){h();const e=y[1].length,n=b.replace(/^(#{1,6})(?!#)/,"").replace(/^[#\s\u3000]+/,""),r=`h${e}`;o.push(W(r,{children:wn(n,g)},o.length));continue}if(b.match(/^[*+-]\s/)||b.match(/^\d+\.\s/)){h();const i=[],l=/^[*+-]\s/,s=/^\d+\.\s/,d=s.test(b),c=e=>{const n=e.trim();return l.test(n)||s.test(n)};let u=e;for(;u<a.length&&c(a[u]);){const e=[a[u].replace(/^\s+/,"").replace(/^[*+-]\s|^\d+\.\s/,"")];let o=u+1,l=!1;for(;o<a.length;){const n=a[o],r=n.trim();if(""===r){const n=o+1<a.length?a[o+1]:"",r=n.trim();if(!n)break;if(c(n)||""===r||r.match(/^#{1,6}\s/)||r.startsWith("```"))break;e.push(""),l=!0,o+=1;continue}if(c(n)||r.match(/^#{1,6}\s/)||r.startsWith("```"))break;n.startsWith("  ")||n.startsWith("\t")?(e.push(n.replace(/^\s+/,"")),l=!1,o+=1):(e.push(n),l=!1,o+=1)}const s=xn(e.join("\n"),n,r),d=i.length,f=s.map((e,n)=>"string"==typeof e||"number"==typeof e?e:e&&"object"==typeof e?L(e,{key:`li-${d}-${n}`}):e);i.push(W("li",{children:f.length>1?W(k,{children:f}):null!==(t=f[0])&&void 0!==t?t:null},`list-item-${d}`)),u=o}i.length>0&&o.push(W(d?"ol":"ul",{children:i},o.length)),e=u-1;continue}b.match(/^(-{3,}|\*{3,}|_{3,})$/)?(h(),o.push(W("hr",{},o.length))):""!==b?i.push(v):h()}return h(),c&&m(),o}function wn(e,n){const r=[];let t=0;const o=[{regex:/\\\((.+?)\\\)/g,render:(e,n)=>kn(n,!1,t++)},{regex:/\$(?!\s)([^$]+?)\$(?!\w)/g,render:(e,n)=>kn(n,!1,t++)},{regex:/\*\*(.*?)\*\*/g,render:(e,n)=>W("strong",{children:n},t++)},{regex:/\*(.*?)\*/g,render:(e,n)=>W("em",{children:n},t++)},{regex:/`([^`]+)`/g,render:(e,n)=>W("code",{className:"inline-code",children:n},t++)},{regex:/\[([^\]]+)\]\(([^)]+)\)/g,render:(e,n,r)=>W("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"link",children:n},t++)},{regex:/\[(\d+(?:,\s*\d+)*)\]/g,render:(e,r)=>{const o=r.split(/,\s*/).map(e=>parseInt(e,10)).filter(e=>!isNaN(e)),a=[];return o.forEach((e,r)=>{const i=n?n[e]:void 0,l=(null==i?void 0:i.file_name)||(null==i?void 0:i.url)||`#${e}`,s=null==i?void 0:i.url,d=Boolean(s),c="citation"+(d?" link":" disabled");d?a.push(W("a",{className:c,href:s,target:"_blank",rel:"noopener noreferrer",title:l,children:e},"c"+t++)):a.push(W("span",{className:c,title:l,children:e},"c"+t++)),r<o.length-1&&a.push(", ")}),W(k,{children:a})}}],a=[];o.forEach(n=>{let r;for(n.regex.lastIndex=0;null!==(r=n.regex.exec(e));){const e=[r[0]];for(let n=1;n<r.length;n++)e.push(r[n]);a.push({start:r.index,end:r.index+r[0].length,element:n.render.apply(null,e)})}}),a.sort((e,n)=>e.start-n.start);const i=[];let l=0;for(const e of a)e.start>=l&&(i.push(e),l=e.end);let s=0;for(const n of i)n.start>s&&r.push(e.substring(s,n.start)),r.push(n.element),s=n.end;return s<e.length&&r.push(e.substring(s)),r.length>0?r:[e]}function Sn({messages:e,isLoading:n,streamingContent:r,config:t,sessionId:o,onFeedbackSubmit:a}){const i=fe(null);return ce(()=>{var e;null===(e=i.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},[e,r]),W(_n,{children:[e.map((e,n)=>{var r,i,l,s,d,c;return"assistant"!==e.role||e.content?W(k,{children:[W(zn,{isUser:"user"===e.role,children:"user"===e.role?W(Cn,{children:[W($n,{children:e.content}),("boost"===(null===(r=e.metadata)||void 0===r?void 0:r.mode)||"fast"===(null===(i=e.metadata)||void 0===i?void 0:i.mode))&&W(Xn,{variant:e.metadata.mode,children:["fast"===e.metadata.mode?W(hn,{size:12}):W(fn,{size:12}),W("span",{children:"fast"===e.metadata.mode?"Fast":"Boost"})]})]}):W(k,{children:W(Mn,{children:W(An,{children:[W(jn,{children:xn(e.content||"",!1,null===(l=e.metadata)||void 0===l?void 0:l.docMetadata)}),("boost"===(null===(s=e.metadata)||void 0===s?void 0:s.mode)||"fast"===(null===(d=e.metadata)||void 0===d?void 0:d.mode))&&W(Xn,{assistant:!0,variant:e.metadata.mode,children:["fast"===e.metadata.mode?W(hn,{size:12}):W(fn,{size:12}),W("span",{children:"fast"===e.metadata.mode?"Fast":"Boost"})]})]})})})},e.id||n),"assistant"===e.role&&W(zn,{isUser:!1,children:W(Mn,{children:W(An,{children:W(yn,{messageId:e.id,sessionId:o,feedback:null===(c=e.metadata)||void 0===c?void 0:c.feedback,onFeedbackSubmit:a,config:t})})})},`${e.id}-feedback`)]}):null}).filter(Boolean),n&&r&&r.trim()&&W(zn,{isUser:!1,children:W(Mn,{children:W(An,{children:[W(In,{children:"ja"===t.language?"リアルタイム応答中...":"Streaming response..."}),W(jn,{children:(()=>{try{return xn(r||"",!0,void 0)}catch(e){return W("p",{children:r||""})}})()})]})})}),W("div",{ref:i})]})}const _n=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`,zn=Re("div")`
  display: flex;
  justify-content: ${e=>e.isUser?"flex-end":"flex-start"};
  align-items: flex-start;
`,Cn=Re("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  max-width: 70%;
`,$n=Re("div")`
  padding: 1rem 1.25rem;
  background: var(--askdona-primary);
  color: white;
  border-radius: 1rem 1rem 0.25rem 1rem;
  font-size: 0.875rem;
  line-height: 1.6;
  word-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`,Mn=Re("div")`
  display: flex;
  gap: 0.75rem;
  max-width: 85%;
`,An=Re("div")`
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
`,jn=Re("div")`
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
`,In=Re("div")`
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
`,Dn=Re("div")`
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
`,qn=Re("div")`
  margin: 16px 0;
  border-radius: 8px;
  border: 1px solid var(--askdona-border);
  background: var(--askdona-surface);
  overflow: hidden;
`,En=Re("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: var(--askdona-bg-secondary);
  border-bottom: 1px solid var(--askdona-border);
`,On=Re("span")`
  font-size: 12px;
  color: var(--askdona-text-secondary);
  font-weight: 500;
  text-transform: uppercase;
`,Nn=Re("button")`
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
`,Rn=Re("pre")`
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
`,Tn=Re("div")`
  margin-top: 12px;
  padding: 8px 0;
`,Fn=Re("div")`
  font-size: inherit;
  color: var(--askdona-text); /* use normal text color */
  margin-bottom: 6px;
  font-weight: 500;
`,Pn=Re("div")`
  display: flex;
  gap: 6px;
  align-items: center;
`,Ln=Re("button")`
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
`,Hn=Re("div")`
  font-size: 11px;
  color: var(--askdona-text-secondary);
  margin-top: 6px;
  font-style: italic;
`,Un=Re("div")`
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
`,Bn=Re("div")`
  background: var(--askdona-background);
  border-radius: 12px;
  padding: 24px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--askdona-border);
`,Jn=Re("div")`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,Vn=Re("div")`
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
`,Qn=Re("h3")`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--askdona-text);
`,Wn=Re("div")`
  margin-bottom: 20px;
`,Zn=Re("textarea")`
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
`,Gn=Re("div")`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,Kn=Re("button")`
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
`,Yn=Re("button")`
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
`,Xn=Re("div")`
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
`,er=Re("div")`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  padding: 16px;
`,nr=Re("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`,rr=Re("div")`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #1e293b;
  font-size: 14px;
`,tr=Re("button")`
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
`,or=Re("div")`
  margin-bottom: 12px;
`,ar=Re("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
`,ir=Re("label")`
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
`,lr=Re("input")`
  margin: 0;
  width: 12px;
  height: 12px;
`,sr=Re("div")`
  font-size: 12px;
  color: #64748b;
  padding-top: 8px;
  border-top: 1px solid #f1f5f9;
`;function dr({filter:e,keyData:n,onFilterChange:r,onFilterRemove:t}){const o=ge(n=>{const t=e.selectedValues.includes(n)?e.selectedValues.filter(e=>e!==n):[...e.selectedValues,n];r({...e,selectedValues:t})},[e,r]),a=ge(()=>{t(e.key)},[e.key,t]);return W(er,{children:[W(nr,{children:[W(rr,{children:[W(dn,{size:14}),e.key,n.isCustom&&W("span",{style:{fontSize:"10px",color:"#6b7280",background:"#f3f4f6",padding:"2px 6px",borderRadius:"8px"},children:"カスタム"})]}),W(tr,{onClick:a,title:"フィルターを削除",children:W(gn,{size:14})})]}),W(or,{children:W(ar,{children:n.values.map(n=>{const r=e.selectedValues.includes(n);return W(ir,{isSelected:r,onClick:()=>o(n),children:[W(lr,{type:"checkbox",checked:r,onChange:()=>o(n)}),n]},n)})})}),W(sr,{children:e.selectedValues.length>0?W(k,{children:[W("strong",{children:[e.selectedValues.length,"個の値を選択中:"]}),W("br",{}),e.selectedValues.join(", "),W("br",{}),W("em",{children:"選択した値のいずれかを含むファイルが対象になります (OR条件)"})]}):W("em",{children:"値を選択してください"})})]})}const cr=Re("div")`
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
`,ur=Re("div")`
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
`,fr=Re("div")`
  padding: 12px 20px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,pr=Re("h2")`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 8px;
`,gr=Re("button")`
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
`,hr=Re("div")`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,mr=Re("div")`
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
`,vr=Re("div")`
  margin-bottom: 16px;
`,br=Re("label")`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  display: block;
`,yr=Re("div")`
  display: flex;
  gap: 16px;
`,kr=Re("label")`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #4b5563;
`,xr=Re("input")`
  margin: 0;
`,wr=Re("button")`
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
`,Sr=Re("div")`
  flex: 1;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,_r=Re("div")`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,zr=Re("h3")`
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 16px 0;
`,Cr=Re("div")`
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`,$r=Re("input")`
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  margin-bottom: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2364748b' viewBox='0 0 24 24'%3E%3Cpath d='M21 20l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 12px center;
`,Mr=Re("button")`
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
`,Ar=Re("div")`
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 4px;
`,jr=Re("div")`
  font-size: 12px;
  color: #64748b;
`,Ir=Re("div")`
  text-align: center;
  color: #64748b;
  padding: 40px 20px;
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    color: #cbd5e1;
  }
`,Dr=Re("div")`
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
`,qr=Re("div")`
  text-align: center;
  color: #ef4444;
  padding: 40px 20px;
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
  }
`;function Er({isOpen:e,onClose:n,metadataKeys:r,filters:t,onFiltersChange:o,isLoading:a,error:i}){const[l,s]=de(""),[d,c]=de(t||{filters:[],globalOperator:"AND"});ce(()=>{c(t||{filters:[],globalOperator:"AND"})},[t]);const u=ge(e=>{e.target===e.currentTarget&&n()},[n]),f=ge(()=>{const e=d.filters.some(e=>e.selectedValues.length>0);o(e?d:null),n()},[d,o,n]),p=ge(()=>{c({filters:[],globalOperator:"AND"})},[]),g=ge(e=>{const n={key:e,selectedValues:[],operator:"OR"};c(e=>({...e,filters:[...e.filters,n]}))},[]),h=ge(e=>{c(n=>({...n,filters:n.filters.filter(n=>n.key!==e)}))},[]),m=ge(e=>{c(n=>({...n,filters:n.filters.map(n=>n.key===e.key?e:n)}))},[]),v=ge(e=>{c(n=>({...n,globalOperator:e}))},[]),b=r.filter(e=>{const n=d.filters.some(n=>n.key===e.key);if(n)return!1;if(l){const n=l.toLowerCase();return e.key.toLowerCase().includes(n)||e.values.some(e=>e.toLowerCase().includes(n))}return!0});return e?W(cr,{onClick:u,children:W(ur,{onClick:e=>e.stopPropagation(),children:[W(fr,{children:[W(pr,{children:[W(en,{size:20}),"絞り込み設定",d.filters.length>0&&W("span",{style:{color:"#64748b",fontWeight:400,fontSize:"14px"},children:["(",d.filters.reduce((e,n)=>e+n.selectedValues.length,0),"件の条件)"]})]}),W(gr,{onClick:n,children:W(gn,{size:20})})]}),W(hr,{children:[d.filters.length>0&&W(mr,{children:[d.filters.length>1&&W(vr,{children:[W(br,{children:"フィルター間の関係"}),W(yr,{children:[W(kr,{children:[W(xr,{type:"radio",name:"globalOperator",checked:"AND"===d.globalOperator,onChange:()=>v("AND")}),"AND（すべての条件を満たす）"]}),W(kr,{children:[W(xr,{type:"radio",name:"globalOperator",checked:"OR"===d.globalOperator,onChange:()=>v("OR")}),"OR（いずれかの条件を満たす）"]})]})]}),W("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[W("span",{style:{fontSize:"14px",color:"#64748b"},children:"文書のメタデータでフィルタリングして検索範囲を絞り込みます"}),d.filters.length>0&&W(wr,{onClick:p,children:"すべてクリア"})]})]}),W(Sr,{children:[W(_r,{children:[W(zr,{children:"設定済みフィルター"}),W(Cr,{children:d.filters.length>0?W("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:d.filters.map(e=>{const n=r.find(n=>n.key===e.key);return n?W(dr,{filter:e,keyData:n,onFilterChange:m,onFilterRemove:h},e.key):null})}):W(Ir,{children:[W(en,{}),W("div",{style:{fontWeight:500,marginBottom:"4px"},children:"まだフィルターが設定されていません"}),W("div",{style:{fontSize:"14px"},children:"右側から絞り込み項目を選択してください"})]})})]}),W(_r,{children:[W(zr,{children:"利用可能な絞り込み"}),W($r,{type:"text",placeholder:"絞り込み条件を検索...",value:l,onChange:e=>s(e.target.value)}),W(Cr,{children:a?W(Dr,{children:[W(tn,{}),"読み込み中..."]}):i?W(qr,{children:[W(Qe,{}),W("div",{style:{fontWeight:500,marginBottom:"4px"},children:"エラーが発生しました"}),W("div",{style:{fontSize:"14px"},children:i})]}):b.length>0?W("div",{children:b.map(e=>W(Mr,{onClick:()=>g(e.key),children:[W(Ar,{children:e.key}),W(jr,{children:[e.values.length,"個の値 • ",e.count,"件のファイル",W("br",{}),"例: ",e.values.slice(0,3).join(", "),e.values.length>3&&"..."]})]},e.key))}):W(Ir,{children:[W(sn,{}),W("div",{style:{fontWeight:500,marginBottom:"4px"},children:l?"検索結果がありません":"すべてのメタデータキーが選択済みです"})]})})]})]})]}),W("div",{style:{padding:"16px 20px",borderTop:"1px solid #e2e8f0",display:"flex",justifyContent:"flex-end",gap:"8px"},children:[W("button",{onClick:n,style:{padding:"8px 16px",border:"1px solid #e2e8f0",background:"white",color:"#374151",borderRadius:"6px",cursor:"pointer"},children:"キャンセル"}),W("button",{onClick:f,style:{padding:"8px 16px",border:"none",background:"#3b82f6",color:"white",borderRadius:"6px",cursor:"pointer",fontWeight:"500"},children:"適用"})]})]})}):null}const Or=Re("button")`
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
`,Nr=Re("span")`
  background: rgba(255, 255, 255, 0.9);
  color: #1e40af;
  padding: 0px 4px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 600;
  min-width: 14px;
  text-align: center;
  margin-left: 2px;
`,Rr=Re(en)`
  width: 14px;
  height: 14px;
`;function Tr({chatflowId:e,filters:n,onFiltersChange:r,disabled:t=!1,className:o,language:a="ja"}){var i;const[l,s]=de(!1),[d,c]=de(!1),[u,f]=de([]),[p,g]=de(null),[h,m]=de(!1),[v,b]=de(null),[y,x]=de(!1),w=(null===(i=null==n?void 0:n.filters)||void 0===i?void 0:i.reduce((e,n)=>{var r;return e+((null===(r=n.selectedValues)||void 0===r?void 0:r.length)||0)},0))||0,S=w>0;ce(()=>{let n=!0;const r=async()=>{if(await new Promise(e=>setTimeout(e,10)),n){m(!0);try{const r=await async function(e){try{return await J(`/metadata/${e}/check`,{method:"GET"})}catch(e){return{enable_metadata_filtering:!1,error:e.message}}}(e);n&&(g(r.enable_metadata_filtering),b(null))}catch(e){n&&(g(!1),b(e.message))}finally{n&&m(!1)}}};return e&&r(),()=>{n=!1}},[e]);const _=ge(()=>{s(!0),!h&&y||c(!0),b(null)},[h,y]);ce(()=>{if(!l||y)return;if(h)return;if(!1===p)return b("メタデータフィルタリングはこのチャットフローで利用できません"),c(!1),void x(!0);(async()=>{try{const n=await async function(e){try{return await J(`/metadata/${e}/keys`,{method:"GET"})}catch(e){return{success:!1,error:e.message}}}(e);n.success&&n.metadataKeys?f(n.metadataKeys):(b(n.error||"Failed to fetch metadata keys"),f([])),x(!0)}catch(e){b(e.message),f([]),x(!0)}finally{c(!1)}})()},[l,e,y,h,p]);const z=ge(()=>{s(!1),f([]),c(!1),b(null),x(!1)},[]);return!0!==p?null:W(k,{children:[W(Or,{hasActiveFilters:S,onClick:_,disabled:t,className:o,type:"button",title:h?"ja"===a?"フィルタ機能を確認中...":"Checking filter availability...":"ja"===a?"結果を絞り込む":"Filter results",children:[W(Rr,{}),W("span",{children:"ja"===a?"絞り込み":"Filter"}),S&&W(Nr,{children:w})]}),l&&W(Er,{isOpen:l,onClose:z,metadataKeys:u,filters:n,onFiltersChange:r,isLoading:d,error:v})]})}const Fr={idle:0,initializing:10,thinking:22,searching:42,synthesizing:58,processing:72,streaming:88,answering:90,finalizing:96,completing:98,complete:100,error:100},Pr=[{time:0,minProgress:5,label:"initializing"},{time:2e3,minProgress:12,label:"thinking"},{time:5e3,minProgress:20,label:"searching"},{time:9e3,minProgress:32,label:"synthesizing"},{time:13e3,minProgress:48,label:"processing"},{time:16e3,minProgress:64,label:"answering"},{time:18e3,minProgress:76,label:"finalizing"},{time:2e4,minProgress:88,label:"completing"},{time:21e3,minProgress:96,label:"complete"}],Lr=[{time:0,minProgress:5,label:"initializing"},{time:2e3,minProgress:12,label:"thinking"},{time:5e3,minProgress:20,label:"searching"},{time:9e3,minProgress:32,label:"synthesizing"},{time:13e3,minProgress:48,label:"processing"},{time:16e3,minProgress:64,label:"answering"},{time:29e3,minProgress:76,label:"finalizing"},{time:31e3,minProgress:88,label:"completing"},{time:32e3,minProgress:96,label:"complete"}];const Hr={ja:{thinking:"考え中...",searching:"データベースを検索中...",synthesizing:"情報を整理中...",answering:"推論中...",executing_functions:"ツールを実行中...",processing_function_results:"実行結果を処理中...",complete:"情報を統合中...",error:"エラーが発生しました"},en:{thinking:"Thinking...",searching:"Searching the database...",synthesizing:"Organizing information...",answering:"Reasoning...",executing_functions:"Running tools...",processing_function_results:"Processing tool results...",complete:"Synthesizing...",error:"An error occurred"}};function Ur({messages:e,isLoading:n,streamingContent:r,onSendMessage:t,error:o,config:a,currentState:i,chatMode:l="standard",onChatModeChange:s,sessionId:d,onFeedbackSubmit:c,showIntro:u,metadataFilters:f=null,onMetadataFiltersChange:p,currentMode:g,onModeSwitch:h,onClearChat:m}){const v=l||"standard",b="boost"===v,y="fast"===v,[x,w]=de(""),{progress:S,displayState:_}=function({isLoading:e,boostMode:n=!1,currentState:r}){const[t,o]=de(0),[a,i]=de(r||"idle"),l=fe(null),s=fe(0),d=fe(null),c=n?Lr:Pr,u=c[c.length-1].time;return ce(()=>{e&&!l.current?(l.current=Date.now(),s.current=0,o(c[0].minProgress)):e||(l.current=null,s.current=0,o(0),i("idle"),d.current&&cancelAnimationFrame(d.current))},[e,c]),ce(()=>{if(!e||!l.current)return;const n=()=>{var t,a;const f=Date.now()-l.current;let p=0,g="processing";for(let e=c.length-1;e>=0;e--)if(f>=c[e].time){const n=c[e];if(e<c.length-1){const r=c[e+1],t=r.time-n.time,o=f-n.time,a=Math.min(o/t,1);p=n.minProgress+(r.minProgress-n.minProgress)*a}else p=n.minProgress;g=n.label||"processing";break}const h=98*function(e){return e<.5?2*e*e:(4-2*e)*e-1}(Math.min(f/u,1)),m=Math.max(p,h,s.current);let v=Math.min(m,98);const b=(g||"processing").toLowerCase(),y=(r||"").toLowerCase(),k=null!==(t=Fr[b])&&void 0!==t?t:72,x=y?null!==(a=Fr[y])&&void 0!==a?a:72:100,w=Math.min(k,x);v=Math.min(v,w),v>s.current&&(s.current=v,o(v)),i(g),e&&v<98&&(d.current=requestAnimationFrame(n))};return n(),()=>{d.current&&cancelAnimationFrame(d.current)}},[e,c,u,r]),ce(()=>{if("answering"===r&&"answering"===a){const e=90;s.current<e&&(s.current=e,o(e))}},[r,a]),{progress:t,displayState:a,isProgressing:e}}({isLoading:n,boostMode:b,currentState:i}),[z,C]=de(0===e.length),[$,M]=de(!1),A=fe(null),j=void 0!==u?u:z;ce(()=>{void 0===u&&e.length>0&&C(!1)},[e,u]);const I=e=>{const n=e||A.current;if(!n)return;n.style.height="auto";const r=n.scrollHeight;n.style.height=`${r}px`,n.style.lineHeight=r<=32?"32px":"1.5"};ce(()=>{!n&&A.current&&"function"==typeof A.current.focus&&(A.current.focus(),A.current.style.minHeight="32px",I())},[n]);const D=e=>{null==e||e.preventDefault(),x.trim()&&!n&&(t(x.trim(),v,f),w(""))},q=e=>{if(!s)return;s(v===e?"standard":e)},E=a.exampleQuestions||("ja"===a.language?["RAGシステムについて教えてください","ドキュメントの検索方法は？","APIの使い方を教えてください"]:["What is RAG system?","How do I search documents?","How to use the API?"]);return W(Br,{children:[W(Zr,{children:[j?W(Gr,{children:[W(Kr,{children:W(on,{size:24,color:"white"})}),W(Yr,{children:a.introTitle||("ja"===a.language?"こんにちは！":"Hi there!")}),a.introMessage?W(Xr,{dangerouslySetInnerHTML:{F:H(a.introMessage)}}):W(Xr,{children:"ja"===a.language?"AskDona AIアシスタントです。ドキュメントや情報について何でもお聞きください。":"I'm AskDona AI assistant. Ask me anything about your documents and information."}),W(et,{children:[W(nt,{children:"ja"===a.language?"質問例":"Example Questions"}),W(rt,{children:E.map((e,n)=>W(tt,{onClick:()=>(e=>{t(e,v,f)})(e),children:e},n))})]})]}):W(Sn,{messages:e,isLoading:n,streamingContent:r,config:a,sessionId:d,onFeedbackSubmit:c}),n&&W(at,{children:[W(it,{children:[W(lt,{}),W(st,{children:r.trim()?"ja"===a.language?"リアルタイム応答中...":"Streaming response...":Hr[a.language||"ja"][_]||Hr[a.language||"ja"][i||""]||("ja"===a.language?"処理中...":"Processing...")})]}),!r.trim()&&W(dt,{children:W(ct,{progress:S})})]}),o&&W(ot,{children:"ja"===a.language?`エラーが発生しました: ${o.message}`:`Error: ${o.message}`})]}),h&&W(Jr,{children:W(Vr,{children:[W(Qr,{type:"button",active:"ask-ai"===(g||"ask-ai"),onClick:()=>h("ask-ai"),children:"ja"===a.language?"AIに質問":"Ask AI"}),W(Qr,{type:"button",active:"search"===g,onClick:()=>h("search"),children:"ja"===a.language?"検索":"Search"}),a.enableDeepResearch&&W(Qr,{type:"button",active:"deep-research"===g,onClick:()=>h("deep-research"),children:(a.language,"Deep Research")}),m&&"ask-ai"===(g||"ask-ai")&&e.length>0&&W(Wr,{type:"button",onClick:m,title:"ja"===a.language?"新しいセッションを開始":"Start new session","aria-label":"ja"===a.language?"新しいセッションを開始":"Start new session",disabled:n,children:W(ln,{size:14})})]})}),W(ut,{children:W(ht,{boostMode:b,children:W(mt,{children:[W(vt,{children:W(kt,{ref:A,value:x,onChange:e=>{const n=e.target;w(n.value),I(n)},onKeyDown:e=>{$||(e=>{"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),D())})(e)},onCompositionStart:()=>{M(!0)},onCompositionEnd:()=>{M(!1)},placeholder:"ja"===a.language?"質問を入力してください... (Ctrl+Enter または ⌘+Enter で送信)":"Ask me anything... (Ctrl+Enter or ⌘+Enter to send)",disabled:n,rows:1,boostMode:b})}),W(bt,{children:[W("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.chatflowId&&p&&W(Tr,{chatflowId:a.chatflowId,filters:f,onFiltersChange:p,disabled:n,language:a.language||"ja"}),a.allowBoostModeToggle&&s&&W(k,{children:[W(ft,{onClick:()=>q("fast"),disabled:n,active:y,title:"ja"===a.language?"Fastモードは、思考プロセスを簡素化して素早く回答します。":"Fast mode generates quicker answers with lighter reasoning.",children:[W(pt,{active:y,children:W(hn,{size:14})}),W(gt,{children:"Fast"})]}),W(ft,{onClick:()=>q("boost"),disabled:n,active:b,title:"ja"===a.language?"Boostモードは、より多角的な視点から多くの文書を分析して回答します。":"Boost mode analyzes more documents from multiple perspectives for comprehensive answers.",children:[W(pt,{active:b,children:W(fn,{size:14})}),W(gt,{children:"Boost"})]})]})]}),W(yt,{onClick:D,disabled:!x.trim()||n,title:"ja"===a.language?"Ctrl+Enter または ⌘+Enter で送信":"Ctrl+Enter or ⌘+Enter to send",type:"button","data-askdona-button":"send","data-disabled":!x.trim()||n,children:W(Be,{size:16,color:(()=>{var e;if(!x.trim()||n){return(null===(e=getComputedStyle(document.documentElement).getPropertyValue("--askdona-text-secondary"))||void 0===e?void 0:e.trim())||"#6b6f8a"}return"white"})()})})]})]})})})]})}const Br=Re("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Jr=Re("div")`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem 0.25rem;
  flex-shrink: 0;
  align-items: center;
  /* tabs aligned left by default */
`,Vr=Re("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
`,Qr=Re("button")`
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
`,Wr=Re("button")`
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
`,Zr=Re("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
`,Gr=Re("div")`
  text-align: center;
  padding: 2rem 0;
`,Kr=Re("div")`
  width: 3rem;
  height: 3rem;
  background: var(--askdona-chat-icon, var(--askdona-primary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
`,Yr=Re("h3")`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--askdona-text);
`,Xr=Re("p")`
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  margin: 0 auto 2rem;
  max-width: 90%;
  line-height: 1.5;
`,et=Re("div")`
  margin-top: 2rem;
`,nt=Re("h4")`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--askdona-text-secondary);
  margin: 0 0 1rem;
`,rt=Re("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`,tt=Re("button")`
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
`,ot=Re("div")`
  background: rgba(239, 68, 68, 0.1);
  color: var(--askdona-error);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  font-size: 0.875rem;
`,at=Re("div")`
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
`,it=Re("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,lt=Re("div")`
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
`,st=Re("span")`
  font-weight: 500;
`,dt=Re("div")`
  width: 30%;
  height: 6px;
  background: var(--askdona-border);
  border-radius: 3px;
  overflow: hidden;
`,ct=Re("div")`
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
`,ut=Re("div")`
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  flex-shrink: 0;
`,ft=Re("button")`
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
`,pt=Re("span")`
  display: flex;
  align-items: center;
  opacity: ${({active:e})=>e?1:.8};
`,gt=Re("span")`
  font-weight: 500;
  font-size: 12px;
`,ht=Re("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  
  ${({boostMode:e})=>e&&"\n    &::before {\n      content: '';\n      position: absolute;\n      top: -2px;\n      left: -2px;\n      right: -2px;\n      bottom: -2px;\n      background: linear-gradient(135deg, var(--askdona-primary), var(--askdona-primary-light));\n      border-radius: 0.875rem;\n      z-index: -1;\n    }\n  "}
`,mt=Re("div")`
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
`,vt=Re("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`,bt=Re("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
`,yt=Re("button")`
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
`,kt=Re("textarea")`
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
`;class xt{static getStorageKey(){return"askdona_search_history"}static getAllHistory(){try{const e=localStorage.getItem(this.getStorageKey());if(!e)return[];const n=JSON.parse(e),r=Date.now()-2592e6;return n.filter(e=>e.timestamp>r)}catch(e){return[]}}static saveHistory(e){try{const n=e.slice(0,50);localStorage.setItem(this.getStorageKey(),JSON.stringify(n))}catch(e){}}static addSearchHistory(e,n,r,t){const o={id:`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,query:n.trim(),resultsCount:r,searchTime:t,timestamp:Date.now(),chatflowId:e},a=this.getAllHistory();a.unshift(o),this.saveHistory(a)}static getSearchHistory(e,n=20){return this.getAllHistory().filter(n=>n.chatflowId===e).slice(0,n)}static getRecentQueries(e,n=10,r=!0){const t=this.getSearchHistory(e,r?100:n);if(r){const e=new Set,r=[];for(const o of t){const t=o.query.toLowerCase();if(!e.has(t)&&(e.add(t),r.push(o.query),r.length>=n))break}return r}return t.map(e=>e.query)}static getPopularQueries(e,n=10){const r=this.getSearchHistory(e,1e3),t=new Map;return r.forEach(e=>{const n=e.query.toLowerCase();t.set(n,(t.get(n)||0)+1)}),Array.from(t.entries()).map(([e,n])=>{var t;return{query:(null===(t=r.find(n=>n.query.toLowerCase()===e))||void 0===t?void 0:t.query)||e,count:n}}).sort((e,n)=>n.count-e.count).slice(0,n)}static clearHistory(e){if(e){const n=this.getAllHistory().filter(n=>n.chatflowId!==e);this.saveHistory(n)}else localStorage.removeItem(this.getStorageKey())}static getHistoryStats(e){const n=this.getSearchHistory(e,1e3);if(0===n.length)return{totalSearches:0,uniqueQueries:0,avgResultsCount:0,avgSearchTime:0};const r=new Set(n.map(e=>e.query.toLowerCase())).size,t=n.reduce((e,n)=>e+n.resultsCount,0)/n.length,o=n.reduce((e,n)=>e+n.searchTime,0)/n.length;return{totalSearches:n.length,uniqueQueries:r,avgResultsCount:Math.round(t),avgSearchTime:Math.round(o)}}}function wt({config:e,currentMode:n,onModeSwitch:r,onClearSearch:t}){var o,a;const[i,l]=de(""),[s,d]=de(null),[c,u]=de([]),[f,p]=de({}),[g,h]=de(!1),[m,v]=de(null),b=fe(null),[y,x]=de(!1),{recentQueries:w,addSearchHistory:S}=function(e,n={}){const{limit:r=20,uniqueQueries:t=!0,autoRefresh:o=!0}=n,[a,i]=de([]),[l,s]=de([]),d=ge(()=>{if(!e)return;const n=xt.getRecentQueries(e,r,t);i(n);const o=xt.getPopularQueries(e,10);s(o)},[e,r,t]);ce(()=>{o&&d()},[o,d]);const c=ge((n,r,t)=>{e&&n.trim()&&(xt.addSearchHistory(e,n,r,t),o&&d())},[e,o,d]),u=ge(()=>{e&&(xt.clearHistory(e),i([]),s([]))},[e]),f=ge(()=>e?xt.getHistoryStats(e):null,[e]);return{recentQueries:a,popularQueries:l,addSearchHistory:c,clearHistory:u,refresh:d,getStats:f}}(e.chatflowId),_=`askdona_widget_last_search_${e.chatflowId}`,z=ge((e,n)=>{try{const r={query:e,response:n,savedAt:Date.now()};localStorage.setItem(_,JSON.stringify(r))}catch(e){}},[_]),C=ge(()=>{try{const e=localStorage.getItem(_);if(!e)return null;const n=JSON.parse(e);return n&&"object"==typeof n?n:null}catch(e){return null}},[_]);ce(()=>{b.current&&"function"==typeof b.current.focus&&b.current.focus();const e=C();e&&e.response&&(l(e.query||""),d(e.response),u(e.response.results||[]),p({}))},[C]);const $=ge(async n=>{var r;if(!n.trim())return d(null),void u([]);p({}),h(!0),v(null);const t=Date.now();try{const o={query:n,filters:{}},a=await async function(e,n){try{return await J(`/search/${e}`,{method:"POST",body:JSON.stringify(n)})}catch(e){throw e}}(e.chatflowId,o);d(a),u(a.results||[]),z(n,a);const i=Date.now()-t;S(n,(null===(r=a.results)||void 0===r?void 0:r.length)||0,i)}catch(e){v(e instanceof Error?e.message:"Unknown error occurred"),d(null),u([])}finally{h(!1)}},[e.chatflowId,S,z]),M=ge(()=>{i.trim()&&$(i.trim())},[i,$]),A=ge(e=>{y||"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),M())},[M,y]),j=pe(()=>{if(!c.length)return[];let e=[...c];return f.categories&&f.categories.length>0&&(e=e.filter(e=>{var n,r;const t=null===(n=e.fileMetadata)||void 0===n?void 0:n.category,o=null===(r=e.fileMetadata)||void 0===r?void 0:r.subCategory;return f.categories.includes(t||"")||f.categories.includes(o||"")})),f.fileTypes&&f.fileTypes.length>0&&(e=e.filter(e=>f.fileTypes.includes(e.fileFormat))),e},[c,f]),I=pe(()=>j,[j]),D=ge(()=>{l(""),d(null),u([]),p({}),v(null);{const e=b.current;e&&"function"==typeof e.focus&&e.focus()}try{localStorage.removeItem(_)}catch(e){}t&&t()},[_,t]),q=e=>{p(e)},E=e=>{if(!i.trim())return W(k,{children:e});return W(k,{children:e.split(new RegExp(`(${i})`,"gi")).map((e,n)=>e.toLowerCase()===i.toLowerCase()?W(Bt,{children:e},n):W("span",{children:e},n))})},O=pe(()=>{if(!s)return[];return[{id:"all",label:"ja"===e.language?"すべて":"All",count:j.length},...s.facets.fileTypes.map(e=>({id:e.value,label:e.value.toUpperCase(),count:e.count}))]},[s,j.length,e.language]);return W(St,{children:[s&&W(Yt,{"data-search-results-header":!0,children:[W(Xt,{children:["ja"===e.language?"検索結果":"Search Results",": ",j.length.toLocaleString()," ","ja"===e.language?"件":"items",(null===(o=f.categories)||void 0===o?void 0:o.length)||(null===(a=f.fileTypes)||void 0===a?void 0:a.length)?W(eo,{children:"ja"===e.language?"フィルタ適用済":"Filtered"}):null]}),W(no,{children:["ja"===e.language?"検索時間":"Search time",": ",s.searchTime,"ms"]})]}),s&&O.length>1&&W(Ft,{children:O.map(e=>W(Pt,{active:"all"===e.id||Boolean(f.fileTypes&&f.fileTypes.includes(e.id)),onClick:()=>{"all"===e.id?q({}):q({fileTypes:[e.id]})},children:[e.label,W(Lt,{children:["(",e.count,")"]})]},e.id))}),W(Ht,{children:g?W(Jt,{children:[W(Vt,{}),W(Qt,{children:"ja"===e.language?"検索中...":"Searching..."})]}):m?W(ro,{children:[W(to,{children:"⚠️"}),W(oo,{children:"ja"===e.language?"検索エラー":"Search Error"}),W(ao,{children:m})]}):i&&0===j.length&&s?W(Wt,{children:"ja"===e.language?`"${i}" に一致する結果が見つかりませんでした`:`No results found for "${i}"`}):I.length>0?W(k,{children:W(Ut,{children:I.map(n=>W(io,{children:W(lo,{children:[W(so,{children:n.fileMetadata.url?W("a",{href:n.fileMetadata.url,target:"_blank",rel:"noopener noreferrer",children:E(n.fileMetadata.title||n.fileName)}):W("span",{children:E(n.fileMetadata.title||n.fileName)})}),W(co,{children:[W("strong",{children:"ja"===e.language?"フォーマット:":"Format:"})," ",n.fileFormat.toUpperCase()]}),n.fileMetadata.body&&W(uo,{children:[W("strong",{children:"ja"===e.language?"本文:":"Content:"}),W(fo,{children:E(n.fileMetadata.body)})]})]})},n.fileId))})}):W(Zt,{children:[W(Gt,{children:"🔍"}),W(Kt,{children:"ja"===e.language?"検索キーワードを入力してください (Ctrl+Enter または ⌘+Enter で送信)":"Enter a search term to see results (Ctrl+Enter or ⌘+Enter to send)"})]})}),r&&W(_t,{children:W(zt,{children:[W($t,{type:"button",active:"ask-ai"===(n||"ask-ai"),onClick:()=>r("ask-ai"),children:"ja"===e.language?"AIに質問":"Ask AI"}),W($t,{type:"button",active:"search"===n,onClick:()=>r("search"),children:"ja"===e.language?"検索":"Search"}),e.enableDeepResearch&&W($t,{type:"button",active:"deep-research"===n,onClick:()=>r("deep-research"),children:(e.language,"Deep Research")}),"search"===n&&(i||s)&&W(Ct,{type:"button",onClick:D,title:"ja"===e.language?"検索をクリア":"Clear search","aria-label":"ja"===e.language?"検索をクリア":"Clear search",disabled:g,children:W(ln,{size:14})})]})}),W(Rt,{children:W(Mt,{children:W(At,{children:[w.length>0&&W(jt,{children:[W(It,{children:"ja"===e.language?"最近の検索":"Recent searches"}),W(Dt,{children:w.slice(0,8).map((e,n)=>W(qt,{onClick:()=>{return l(n=e),void $(n);var n},children:e},n))})]}),W(Et,{children:[W(Nt,{ref:b,value:i,onInput:e=>{(e=>{const n=e.target.value;l(n)})(e),(e=>{const n=e||b.current;if(!n)return;n.style.height="auto";const r=n.scrollHeight;n.style.height=`${r}px`,n.style.lineHeight=r<=32?"32px":"1.5"})(e.currentTarget)},onKeyDown:A,onCompositionStart:()=>x(!0),onCompositionEnd:()=>x(!1),placeholder:"ja"===e.language?"検索キーワードを入力... (Ctrl+Enter または ⌘+Enter で送信)":"Enter search keywords... (Ctrl+Enter or ⌘+Enter to send)",rows:1}),W(Ot,{onClick:M,"data-disabled":!i.trim()||g,title:"ja"===e.language?"検索 (Enter または Ctrl+Enter)":"Search (Enter or Ctrl+Enter)",type:"button",children:g?W(Tt,{}):W(Be,{size:16,color:"white"})})]})]})})})]})}const St=Re("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,_t=Re("div")`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem 0.25rem; /* align underline position with ChatView */
  flex-shrink: 0;
  align-items: center; /* match ChatView */
  position: relative;
  z-index: 2; /* ensure tab underline renders above input separator */
`,zt=Re("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
`,Ct=Re("button")`
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
`,$t=Re("button")`
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
`,Mt=Re("div")`
  position: relative;
  width: 100%;
`,At=Re("div")`
  position: relative;
  display: flex;
  flex-direction: column;
`,jt=Re("div")`
  padding: 0.25rem 0.25rem 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,It=Re("div")`
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.025em;
`,Dt=Re("div")`
  display: flex;
  gap: 0.375rem;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
`,qt=Re("button")`
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
`,Et=Re("div")`
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
`,Ot=Re("button")`
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
`,Nt=Re("textarea")`
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
`,Rt=Re("div")`
  position: relative;
  padding: 1rem 1.5rem; /* match ChatView InputArea spacing */
  border-top: 1px solid var(--askdona-border);
  flex-shrink: 0;
`,Tt=Re("div")`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Ft=Re("div")`
  display: flex;
  gap: 1.5rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  overflow-x: auto;
  flex-shrink: 0;
  
  &::-webkit-scrollbar {
    height: 0;
  }
`,Pt=Re("button")`
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
`,Lt=Re("span")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin-left: 0.25rem;
`,Ht=Re("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1rem 1.5rem;
`,Ut=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* tighter spacing between cards */
`,Bt=Re("span")`
  background: rgba(var(--askdona-primary-rgb), 0.2);
  padding: 0 0.125rem;
  border-radius: 0.125rem;
  font-weight: 500;
`,Jt=Re("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`,Vt=Re("div")`
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--askdona-border);
  border-top-color: var(--askdona-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Qt=Re("p")`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
`,Wt=Re("div")`
  text-align: center;
  padding: 3rem;
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
`,Zt=Re("div")`
  text-align: center;
  padding: 3rem;
`,Gt=Re("div")`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`,Kt=Re("p")`
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
  margin: 0;
`,Yt=Re("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  background: var(--askdona-surface);
`,Xt=Re("h3")`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: var(--askdona-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,eo=Re("span")`
  background: var(--askdona-primary);
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 500;
`,no=Re("p")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin: 0;
`,ro=Re("div")`
  text-align: center;
  padding: 3rem;
  color: var(--askdona-error);
`,to=Re("div")`
  font-size: 2rem;
  margin-bottom: 1rem;
`,oo=Re("h3")`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--askdona-error);
`,ao=Re("p")`
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  margin: 0;
`,io=Re("div")`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 0; /* rely on ResultsList gap for spacing */
  transition: all 0.2s;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,lo=Re("div")`
  padding: 0.75rem; /* slightly tighter */
  display: flex;
  flex-direction: column;
  gap: 0.375rem; /* slightly tighter */
`,so=Re("h4")`
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
`,co=Re("p")`
  margin: 0; /* remove extra spacing */
  font-size: 0.75rem; /* smaller row text */
  color: var(--askdona-text-secondary); /* lighter overall */
  
  strong {
    color: var(--askdona-text-secondary); /* lighter label color */
    font-size: 0.6875rem; /* even smaller label text */
    opacity: 0.75; /* make label appear lighter */
  }
`,uo=Re("div")`
  margin-top: 0.5rem;
  
  strong {
    display: block;
    margin-bottom: 0.25rem;
    color: #202124;
    font-size: 0.875rem;
  }
`,fo=Re("p")`
  margin: 0;
  font-size: 0.875rem;
  color: #5f6368;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,po=["follow-up","research-outline","search","extraction","new-angles","synthesis"],go={planning:"research-outline",outline:"research-outline",brainstorming:"research-outline","collecting-sources":"search",collecting_sources:"search",sourcing:"search","source-analysis":"extraction","analyzing-sources":"extraction","report-drafting":"synthesis","drafting-report":"synthesis","finalizing-report":"synthesis"};function ho(e){if("number"==typeof e&&Number.isFinite(e))return e;if("string"==typeof e){const n=e.trim();if(!n)return null;const r=Number(n);return Number.isFinite(r)?r:null}return null}const mo={"follow-up":"依頼内容の整理","research-outline":"調査の計画",search:"情報収集",extraction:"情報分析","new-angles":"追加の調査",synthesis:"調査レポート作成"},vo={"follow-up":"ご質問の対象となる調査領域を特定しています","research-outline":"包括的な調査レポートを作成するための調査内容を作成しています",search:"インターネット上に公開されている情報を対象に情報を取得しています",extraction:"調査に必要な情報を特定し、分析しています","new-angles":"より多くの情報を収集しています",synthesis:"調査で収集した情報をもとに最終的なアウトプットを作成しています"},bo={"follow-up":W(sn,{className:"icon"}),"research-outline":W(an,{className:"icon"}),search:W(nn,{className:"icon"}),extraction:W(Ke,{className:"icon"}),"new-angles":W(Je,{className:"icon"}),synthesis:W(Ye,{className:"icon"})},yo={"Connecting with AskDona Servers...":"AskDonaサーバーに接続中...","Connected to AskDona Server":"AskDonaサーバーに接続しました","Analyzing requirements...":"要件を分析中...","Generating research plan...":"調査計画を生成中...","Creating execution strategy...":"実行戦略を作成中...","Starting research tasks...":"調査タスクを開始中...","Generating final report...":"最終レポートを生成中...","Creating visualizations...":"ビジュアライゼーションを作成中...","Creating final message...":"最終メッセージを作成中...","Deep research completed successfully":"Deep Researchが正常に完了しました","Error occurred during deep research":"Deep Research中にエラーが発生しました","Initializing research...":"調査を初期化中...","Processing research data...":"調査データを処理中...","Finalizing research results...":"調査結果を最終確認中...","Questionnaire ready for user.":"フォローアップ質問票にご回答ください。"};function ko({task:e,onRetry:n,progressOverride:r,stageOverride:t,statusOverride:o,messageOverride:a,updatedAtOverride:i}){var l,s,d,c,u,f,p,g,h,m;const v=function(e,n){var r,t;const o="number"==typeof n?n:null,a="number"==typeof e.progress?e.progress:ho(e.progress),i=e.progress_data?ho(e.progress_data.progress):null,l=null!==(t=null!==(r=null!=o?o:"number"==typeof a?a:null)&&void 0!==r?r:i)&&void 0!==t?t:0,s=l<=1?100*l:l;return Math.min(100,Math.max(0,s))}(e,r),b=("string"==typeof t&&""!==t.trim()?t:null!==(d=null!==(s=null===(l=e.progress_data)||void 0===l?void 0:l.stage)&&void 0!==s?s:e.stage)&&void 0!==d?d:null)||null,y="questionnaire_pending"===b?"follow-up":function(e){if(!e)return null;const n=e.trim();if(!n)return null;const r=go[n.toLowerCase()];return null!=r?r:n}(b),k=null!=y?y:"questionnaire_pending"===b?"follow-up":b,x=null!=o?o:e.status,w=mo[k||""]||"Deep Research実行中",S=pe(()=>{var n,r,t;const o=null!==(t=null!==(r=null!=a?a:null===(n=e.progress_data)||void 0===n?void 0:n.message)&&void 0!==r?r:e.message)&&void 0!==t?t:"";if(k&&vo[k])return vo[k];if(yo[o])return yo[o];const i=o.match(/Completed (\d+) of (\d+) research tasks/);return i?`調査タスク${i[2]}件中${i[1]}件完了...`:o.startsWith("Failed to start job:")?o.replace("Failed to start job:","ジョブの開始に失敗しました:"):o||"依頼内容に基づいて調査を開始しています"},[a,e.message,null===(c=e.progress_data)||void 0===c?void 0:c.message,k]),_="failed"===x,z="completed"===x?"調査完了":"failed"===x?"調査中に問題が起こりました":w,C="failed"===x?null!==(p=null!==(f=null!=a?a:null===(u=e.progress_data)||void 0===u?void 0:u.message)&&void 0!==f?f:e.message)&&void 0!==p?p:"調査中にエラーが起こりました":"completed"===x?"調査が完了しました。調査結果を以下に表示します。":S;return W(So,{"data-status":x,children:[W(_o,{children:[W("div",{children:[W(zo,{children:z}),W(Co,{children:C})]}),"in-progress"===x&&W($o,{"data-status":x,children:"調査中..."})]}),W(Mo,{children:[W(Ao,{children:[W("span",{children:"調査ステータス"}),W(jo,{children:[Math.round(v),"%"]})]}),W(Io,{children:W(Do,{style:{width:`${Math.round(v)}%`},"data-status":x})}),W(qo,{children:po.map(e=>W(Eo,{"data-state":xo(e,k),children:[W("span",{className:"icon",children:bo[e]}),W("span",{children:mo[e]})]},e))})]}),W(Oo,{"data-status":x,children:[W(No,{children:bo[k||"synthesis"]||W(tn,{className:"icon"})}),W(Ro,{children:[W(To,{children:w}),W(Fo,{children:S}),W(Po,{children:["更新日時: ",wo(null!==(h=null!=i?i:null===(g=e.progress_data)||void 0===g?void 0:g.timestamp)&&void 0!==h?h:e.updated_at)]})]})]}),_&&W(Lo,{children:[W(pn,{className:"icon"}),W("div",{children:[W("strong",{children:"調査が完了できませんでした"}),W("p",{children:null!==(m=null!=a?a:e.message)&&void 0!==m?m:"時間をおいて再度お試しください。"})]}),W(Ho,{onClick:n,children:"再試行"})]})]})}function xo(e,n){if(!n)return"idle";if(e===n)return"current";const r=po.indexOf(n),t=po.indexOf(e);return-1===r||-1===t?"idle":t<r?"done":"idle"}function wo(e){return e?new Date(e).toLocaleString("ja-JP"):"-"}const So=Re("div")`
  border: 1px solid var(--askdona-border);
  border-radius: 18px;
  background: var(--askdona-background);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,_o=Re("div")`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`,zo=Re("h3")`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--askdona-text);
`,Co=Re("p")`
  margin: 0.2rem 0 0;
  font-size: 0.9rem;
  color: var(--askdona-text-secondary);
`,$o=Re("span")`
  align-self: flex-start;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  font-size: 0.85rem;
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
`,Mo=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Ao=Re("div")`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  color: var(--askdona-text-secondary);
  span {
    font-size: 0.9rem;
  }
`,jo=Re("span")`
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--askdona-text);
`,Io=Re("div")`
  height: 10px;
  border-radius: 999px;
  background: rgba(var(--askdona-primary-rgb, 16, 49, 111), 0.12);
  overflow: hidden;
`,Do=Re("div")`
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
`,qo=Re("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,Eo=Re("div")`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: 0.75rem;
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
`,Oo=Re("div")`
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
`,No=Re("div")`
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
`,Ro=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,To=Re("div")`
  font-size: 1rem;
  font-weight: 600;
  color: var(--askdona-text);
`,Fo=Re("p")`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--askdona-text-secondary);
`,Po=Re("span")`
  font-size: 0.8rem;
  color: var(--askdona-text-secondary);
`,Lo=Re("div")`
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
    font-size: 0.85rem;
  }
`,Ho=Re("button")`
  margin-left: auto;
  border: none;
  border-radius: 999px;
  padding: 0.55rem 1.2rem;
  background: var(--askdona-error, #dc2626);
  color: var(--askdona-background, #ffffff);
  font-weight: 600;
  cursor: pointer;
`;const Uo="フォローアップ質問",Bo="以下の質問に回答すると、Deep Research が自動的に進行します。",Jo="combinedAnswer";function Vo(e,n){var r,t,o,a,i,l;if("string"==typeof e)return{id:`question-${n+1}`,prompt:e.trim()||`質問 ${n+1}`,required:!0};const s=null!==(o=null!==(t=null!==(r=e.text)&&void 0!==r?r:e.question)&&void 0!==t?t:e.prompt)&&void 0!==o?o:`質問 ${n+1}`;return{id:null!==(a=e.id)&&void 0!==a?a:`question-${n+1}`,prompt:s,placeholder:e.placeholder,required:Boolean(null===(l=null!==(i=e.required)&&void 0!==i?i:e.isRequired)||void 0===l||l),helpText:e.helpText}}function Qo({questionnaireJson:e,onSubmit:n,isReadOnly:r=!1,isSubmitLocked:t=!1,submitLockLabel:o,submittedAnswers:a}){var i;const[l,s]=de(null),[d,c]=de(""),[u,f]=de(null),[p,g]=de(null),[h,m]=de(!1);ce(()=>{if(!e||""===e.trim())return g("質問票データが提供されていません。"),void s(null);try{const n=function(e){var n,r,t,o;if(!e)throw new Error("質問票データが空です");if("string"==typeof e){const n=e.trim();if(!n)throw new Error("質問票データが空です");return{title:Uo,introduction:Bo,questions:[Vo(n,0)]}}if(Array.isArray(e)){if(0===e.length)throw new Error("質問票に質問が含まれていません");return{title:Uo,introduction:Bo,questions:e.map((e,n)=>Vo(e,n))}}const a=e,i=(null===(n=a.title)||void 0===n?void 0:n.trim())||Uo,l=(null===(r=a.introduction)||void 0===r?void 0:r.trim())||(null===(t=a.description)||void 0===t?void 0:t.trim())||Bo,s=Array.isArray(a.questions)?a.questions:[];if(0===s.length)throw new Error("質問票に質問が含まれていません");return{title:i,introduction:l,estimatedCompletionTime:(null===(o=a.estimatedCompletionTime)||void 0===o?void 0:o.trim())||void 0,questions:s.map((e,n)=>Vo(e,n))}}(JSON.parse(e));s(n),g(null),c(function(e,n){return n?"string"==typeof n[Jo]?n[Jo]:e.questions.map((e,r)=>{const t=n[e.id];return t&&"string"==typeof t&&t.trim()?`${r+1}. ${t.trim()}`:null}).filter(Boolean).join("\n\n"):""}(n,a)),f(null)}catch(e){g(e instanceof Error?e.message:"質問票データの解析に失敗しました。"),s(null),c("")}},[e,a]);const v=pe(()=>{if(!l)return!1;return!(l.questions.some(e=>!1!==e.required)&&!r)||d.trim().length>0},[d,l,r]),b=ge(e=>{c(e),u&&f(null)},[u]),y=ge(async e=>{if(e.preventDefault(),r||t||h||!l)return;if(l.questions.some(e=>!1!==e.required)&&0===d.trim().length)f("この項目は必須です");else try{m(!0);const e=function(e,n){const r=["#### 調査質問票への回答",""];return r.push("**質問一覧:**"),r.push(""),e.questions.forEach((e,n)=>{r.push(`${n+1}. ${e.prompt}`)}),r.push(""),r.push("**回答:**"),r.push(""),r.push(n.trim()?n.trim():"回答がありません"),r.push(""),r.join("\n")}(l,d);await n(e)}catch(e){}finally{m(!1)}},[d,r,t,h,n,l]);return p?W(ma,{children:[W(va,{children:W(pn,{size:20})}),W(ba,{children:[W(ya,{children:"質問票の読み込み中に問題が発生しました"}),W(ka,{children:p||"時間をおいて再度お試しください。"})]})]}):l?W(Wo,{children:[W(Zo,{children:[W(Go,{children:W(an,{size:18})}),W(Ko,{children:[W(Yo,{children:[l.title,r&&W(Xo,{children:"送信済み"})]}),W(ea,{children:null!==(i=l.introduction)&&void 0!==i?i:Bo}),W(na,{children:"回答は任意ですが、背景や目的を詳しく共有いただくと、より的確な調査が可能になります。"}),l.estimatedCompletionTime&&W(ra,{children:[W(Ze,{size:14}),W("span",{children:l.estimatedCompletionTime})]})]})]}),W("form",{onSubmit:y,children:[W(ta,{children:W(oa,{children:[W(aa,{children:`フォローアップ質問 (${l.questions.length} 件)`}),W(ia,{children:W("ul",{children:l.questions.map((e,n)=>W("li",{children:[W("span",{className:"question-index",children:[n+1,"."]}),W("span",{className:"question-text",children:e.prompt})]},e.id))})})]})}),W(sa,{children:[W(da,{children:[l.questions.some(e=>!1!==e.required)?"上記の質問にまとめて回答してください":"任意回答 (必要に応じてご記入ください)",!r&&l.questions.some(e=>!1!==e.required)&&W(la,{children:"*"})]}),W(ca,{value:d,onInput:e=>b(e.target.value),placeholder:"質問への回答をこちらにご入力ください",rows:6,disabled:r||h,"data-error":u?"true":"false"}),u&&W(ua,{children:u})]}),!r&&W(fa,{children:[W(pa,{type:"submit",disabled:!v||h,"data-locked":t&&!h?"true":"false",children:h?"送信中...":"調査質問票を送信"}),t&&o&&!h&&W(ga,{children:[W(Ze,{size:14}),W("span",{children:o})]})]}),r&&W(ha,{children:[W(We,{size:16}),W("span",{children:"送信済みの回答を表示しています"})]})]})]}):W(xa,{children:[W(an,{size:18}),W("span",{children:"質問票を読み込んでいます..."})]})}const Wo=Re("div")`
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
`,Zo=Re("div")`
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border-bottom: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  background: var(--askdona-surface, #ffffff);
`,Go=Re("div")`
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
`,Ko=Re("div")`
  flex: 1;
`,Yo=Re("h3")`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--askdona-text, #0f172a);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Xo=Re("span")`
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.7rem;
  background: rgba(var(--askdona-success-rgb, 16, 185, 129), 0.12);
  color: rgba(var(--askdona-success-rgb, 16, 185, 129), 0.8);
  border: 1px solid rgba(var(--askdona-success-rgb, 16, 185, 129), 0.35);
`,ea=Re("p")`
  margin: 0.35rem 0 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--askdona-text-secondary, #475569);
`,na=Re("p")`
  margin: 0.5rem 0 0;
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--askdona-text-secondary, #64748b);
`,ra=Re("div")`
  margin-top: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  background: rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.1);
  color: var(--askdona-primary, #2563eb);
`,ta=Re("div")`
  padding: 1.25rem 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,oa=Re("div")`
  padding: 1.25rem;
  border-radius: 14px;
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.1));
  background: var(--askdona-surface, #ffffff);
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.05);
`,aa=Re("div")`
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--askdona-text-secondary, #475569);
  margin-bottom: 0.6rem;
`,ia=Re("div")`
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
`,la=Re("span")`
  color: var(--askdona-error, #dc2626);
  margin-left: 0.35rem;
`,sa=Re("div")`
  padding: 0 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`,da=Re("div")`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--askdona-text, #0f172a);
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,ca=Re("textarea")`
  margin-top: 0.9rem;
  width: 100%;
  min-height: 120px;
  padding: 0.75rem 0.9rem;
  border-radius: 12px;
  border: 1px solid var(--askdona-border, rgba(148, 163, 184, 0.4));
  font-size: 0.9rem;
  line-height: 1.6;
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
`,ua=Re("div")`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--askdona-error, #dc2626);
`,fa=Re("div")`
  padding: 1.25rem 1.5rem 1.6rem;
  border-top: 1px solid rgba(15, 23, 42, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`,pa=Re("button")`
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
`,ga=Re("div")`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--askdona-text-secondary, #475569);
`,ha=Re("div")`
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
`,ma=Re("div")`
  border-radius: 16px;
  border: 1px solid rgba(var(--askdona-error-rgb, 239, 68, 68), 0.3);
  background: rgba(var(--askdona-error-rgb, 239, 68, 68), 0.12);
  padding: 1rem 1.2rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,va=Re("div")`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: rgba(var(--askdona-error-rgb, 239, 68, 68), 0.2);
  color: var(--askdona-error, #dc2626);
  display: flex;
  align-items: center;
  justify-content: center;
`,ba=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,ya=Re("div")`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--askdona-error, #dc2626);
`,ka=Re("div")`
  font-size: 0.85rem;
  color: var(--askdona-error, #dc2626);
`,xa=Re("div")`
  border-radius: 16px;
  border: 1px dashed rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.3);
  padding: 1.1rem 1.3rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--askdona-text-secondary, #475569);
  font-size: 0.85rem;
`,wa=["analyzing_topic","probing_searches","preparing_questionnaire","questionnaire_ready"],Sa={analyzing_topic:{icon:e=>W(rn,{...e}),label:{ja:"調査トピックを分析中",en:"Analyzing the topic"},description:{ja:"調査要件と目的を整理しています。",en:"Reviewing your request to understand the research focus."}},probing_searches:{icon:e=>W(sn,{...e}),label:{ja:"探索的検索を実行中",en:"Running exploratory searches"},description:{ja:"関連情報を特定するための探索を行っています。",en:"Exploring knowledge sources to surface useful context."}},preparing_questionnaire:{icon:e=>W(an,{...e}),label:{ja:"質問を準備中",en:"Preparing clarifying questions"},description:{ja:"調査精度を高める質問票を生成しています。",en:"Drafting targeted follow-up questions before starting research."}},questionnaire_ready:{icon:e=>W(We,{...e}),label:{ja:"質問の準備が完了しました",en:"Questionnaire is ready"},description:{ja:"質問票への回答をお待ちしています。",en:"Please answer the questionnaire to continue."}}},_a={ja:{preparingTitle:"質問票を準備しています",preparingSubtitle:"調査開始前に必要なフォローアップ質問を生成しています。",readyTitle:"質問票の準備ができました",readySubtitle:"以下の質問に回答すると調査が自動的に開始されます。",failureTitle:"質問票の生成に失敗しました",failureSubtitle:"しばらく待ってからもう一度お試しください。",progressLabel:"進捗",stagesLabel:"準備ステップ",updatedAtLabel:"更新日時",fallbackMessage:"質問票が生成されるまで少々お待ちください。",activeChip:"生成中...",readyChip:"準備完了",failedChip:"エラー",waitingStatus:"接続中"},en:{preparingTitle:"Preparing follow-up questionnaire",preparingSubtitle:"We are generating focused questions before the research begins.",readyTitle:"Questionnaire is ready",readySubtitle:"Answer the questions below to automatically continue the research.",failureTitle:"Failed to build questionnaire",failureSubtitle:"Please wait a moment and try again.",progressLabel:"Progress",stagesLabel:"Preparation steps",updatedAtLabel:"Last updated",fallbackMessage:"Please hold tight while we prepare the questionnaire.",activeChip:"Preparing…",readyChip:"Ready",failedChip:"Error",waitingStatus:"Connecting"}},za={"follow-up":"analyzing_topic",questionnaire_pending:"preparing_questionnaire",questionnaire_ready:"questionnaire_ready","research-outline":"probing_searches",search:"probing_searches",extraction:"preparing_questionnaire","new-angles":"preparing_questionnaire"},Ca={"Connecting with AskDona Servers...":{ja:"AskDonaサーバーに接続中...",en:"Connecting with AskDona servers…"},"Connected to AskDona Server":{ja:"AskDonaサーバーに接続しました",en:"Connected to AskDona server"},"Analyzing topic...":{ja:"トピックを分析中...",en:"Analyzing the topic…"},"Analyzing the research topic to identify key themes.":{ja:"主要なテーマを特定するために調査トピックを分析しています。",en:"Analyzing the research topic to identify key themes."},"Performing probing searches on internal documents.":{ja:"関連情報を特定するために探索的検索を実行しています。",en:"Performing probing searches on internal documents."},"Preparing clarifying questions based on findings.":{ja:"調査結果に基づいてフォローアップ質問を準備しています。",en:"Preparing clarifying questions based on findings."},"Questionnaire Ready":{ja:"質問票の準備が完了しました",en:"Questionnaire ready"},"Initializing Deep Research...":{ja:"Deep Researchを初期化しています...",en:"Initializing deep research…"},"Initializing research environment...":{ja:"調査環境を初期化中...",en:"Initializing the research environment…"},"Processing your request...":{ja:"リクエストを処理しています...",en:"Processing your request…"},"Finalizing questionnaire...":{ja:"質問票を最終確認中...",en:"Finalizing questionnaire…"}};function $a({task:e,isJapanese:n=!0,progressOverride:r,stageOverride:t,statusOverride:o,messageOverride:a,updatedAtOverride:i}){var l,s,d;const c=n?"ja":"en",u=_a[c],f="number"==typeof r?r:"number"==typeof(null==e?void 0:e.progress)?e.progress:(null==e?void 0:e.progress_data)?(e=>{if("number"==typeof e&&Number.isFinite(e))return e;if("string"==typeof e){const n=e.trim();if(!n)return null;const r=Number(n);return Number.isFinite(r)?r:null}return null})(e.progress_data.progress):null,p="number"==typeof f?f:null,g=null!==p?Math.min(100,Math.max(0,p<=1?100*p:p)):null,h="failed"===(null!=o?o:null==e?void 0:e.status)||"questionnaire_generation_failed"===(null!=t?t:null==e?void 0:e.stage),m="questionnaire_ready"===(null!=o?o:null==e?void 0:e.status),v=pe(()=>{var n,r,o;if(m)return"questionnaire_ready";const a=null!==(o=null!==(r=null!=t?t:null===(n=null==e?void 0:e.progress_data)||void 0===n?void 0:n.stage)&&void 0!==r?r:null==e?void 0:e.stage)&&void 0!==o?o:null;return a&&za[a]?za[a]:null!==g?g>=75?"preparing_questionnaire":g>=35?"probing_searches":"analyzing_topic":"analyzing_topic"},[null==e?void 0:e.stage,m,g]),b=wa.indexOf(v),y=b>=0?b:0,k=pe(()=>{if(h)return null!==g?g:0;if(m)return 100;if(null!==g)return Math.max(5,Math.min(99,g));const e=Math.round(y/(wa.length-1)*100);return Math.max(10,Math.min(95,e))},[g,y,m,h]),x=pe(()=>{var n,r,t,o;const i=(null!==(t=null!==(r=null!=a?a:null===(n=null==e?void 0:e.progress_data)||void 0===n?void 0:n.message)&&void 0!==r?r:null==e?void 0:e.message)&&void 0!==t?t:"").trim();if(!i)return u.fallbackMessage;const l=(null===(o=i.split("\n")[0])||void 0===o?void 0:o.trim())||i,s=Ca[l];return s?s[c]:l},[null==e?void 0:e.message,c,u.fallbackMessage]),w=Sa[v],S=x||w.description[c],_=h?u.failureTitle:m?u.readyTitle:u.preparingTitle,z=h?u.failureSubtitle:m?u.readySubtitle:u.preparingSubtitle,C=h?u.failedChip:m?u.readyChip:u.activeChip,$=h?"failed":m?"ready":"active",M=null!==(d=null!==(s=null!=i?i:null===(l=null==e?void 0:e.progress_data)||void 0===l?void 0:l.timestamp)&&void 0!==s?s:null==e?void 0:e.updated_at)&&void 0!==d?d:null,A=M?new Date(M).toLocaleString(n?"ja-JP":void 0):"—";return W(Ma,{"data-status":$,children:[W(Aa,{children:[W("div",{children:[W(ja,{children:_}),W(Ia,{children:z})]}),W(Da,{"data-variant":$,children:C})]}),W(qa,{children:[W(Ea,{children:[W("span",{children:u.progressLabel}),W("strong",{children:[Math.round(k),"%"]})]}),W(Oa,{children:W(Na,{"data-status":$,style:{width:`${Math.round(k)}%`}})})]}),W(Ra,{children:u.stagesLabel}),W(Ta,{children:wa.map((e,n)=>{const r=Sa[e],t=function(e,n,r){if(e<n)return"done";if(e===n)return r?"done":"current";return r?"done":"upcoming"}(n,y,m);return W(Fa,{"data-state":t,children:[W(Pa,{"data-state":t,children:r.icon({className:"icon"})}),W(La,{children:[W(Ha,{children:r.label[c]}),W(Ua,{children:r.description[c]})]})]},e)})}),W(Ba,{"data-status":$,children:[W(Ja,{children:w.icon({className:"icon"})}),W(Va,{children:[W(Qa,{children:w.label[c]}),W(Wa,{children:S||u.fallbackMessage}),W(Za,{children:[W(Ze,{size:14}),W("span",{children:[u.updatedAtLabel,": ",A]})]})]})]}),h&&W(Ga,{children:[W(pn,{size:18}),W("div",{children:[W("strong",{children:u.failureTitle}),W("p",{children:S})]})]})]})}const Ma=Re("div")`
  border: 1px solid var(--askdona-border);
  border-radius: 18px;
  background: var(--askdona-background);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,Aa=Re("div")`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`,ja=Re("h3")`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--askdona-text);
`,Ia=Re("p")`
  margin: 0.2rem 0 0;
  font-size: 0.9rem;
  color: var(--askdona-text-secondary);
`,Da=Re("span")`
  align-self: flex-start;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  font-size: 0.85rem;
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
`,qa=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Ea=Re("div")`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--askdona-text-secondary);

  strong {
    color: var(--askdona-text);
    font-size: 0.95rem;
  }
`,Oa=Re("div")`
  position: relative;
  height: 8px;
  background: rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.1);
  border-radius: 999px;
  overflow: hidden;
`,Na=Re("div")`
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
`,Ra=Re("div")`
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
  letter-spacing: 0.01em;
`,Ta=Re("div")`
  display: grid;
  gap: 0.75rem;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Fa=Re("div")`
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
`,Pa=Re("div")`
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
`,La=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Ha=Re("div")`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--askdona-text);
`,Ua=Re("div")`
  font-size: 0.8rem;
  color: var(--askdona-text-secondary);
`,Ba=Re("div")`
  display: flex;
  gap: 0.85rem;
  padding: 1rem;
  border-radius: 14px;
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  background: var(--askdona-surface, #ffffff);
  align-items: flex-start;
`,Ja=Re("div")`
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
`,Va=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,Qa=Re("div")`
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--askdona-text);
`,Wa=Re("p")`
  margin: 0;
  font-size: 0.9rem;
  color: var(--askdona-text-secondary);
  line-height: 1.5;
  white-space: pre-line;
`,Za=Re("div")`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.78rem;
  color: var(--askdona-text-secondary);

  svg {
    width: 14px;
    height: 14px;
  }
`,Ga=Re("div")`
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
    font-size: 0.85rem;
    color: var(--askdona-error, #dc2626);
  }
`;function Ka(){try{const e={userAgent:navigator.userAgent||"",language:navigator.language||"",screenResolution:`${screen.width}x${screen.height}`,timezoneOffset:(new Date).getTimezoneOffset(),platform:navigator.platform||"",cookieEnabled:navigator.cookieEnabled,localStorageEnabled:(()=>{try{const e="__localStorage_test__";return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}})()},n=document.createElement("canvas"),r=n.getContext("2d");let t="";r&&(n.width=200,n.height=50,r.textBaseline="alphabetic",r.fillStyle="#f60",r.fillRect(125,1,62,20),r.fillStyle="#069",r.font="11pt Arial",r.fillText("AskDona Browser Fingerprint 🔍",2,15),r.fillStyle="rgba(102, 204, 0, 0.7)",r.font="18pt Arial",r.fillText("Deep Research",4,45),t=n.toDataURL().substring(0,100));const o=[e.userAgent,e.language,e.screenResolution,e.timezoneOffset.toString(),e.platform,e.cookieEnabled.toString(),e.localStorageEnabled.toString(),t].join("|");let a=0;for(let e=0;e<o.length;e++){a=(a<<5)-a+o.charCodeAt(e),a&=a}return`fp_${Math.abs(a).toString(36).padStart(8,"0")+Date.now().toString(36).slice(-4)}`}catch(e){return`fp_${Math.random().toString(36).substring(2,15)}`}}class Ya{constructor(){this.browserFingerprint=this.getOrCreateFingerprint()}getOrCreateFingerprint(){const e="askdona_browser_fingerprint";try{let n=localStorage.getItem(e);return n||(n=Ka(),localStorage.setItem(e,n)),n}catch(e){return Ka()}}getBrowserFingerprint(){return this.browserFingerprint}checkLocalLimits(e,n){const r=[];let t,o=!0;for(const a of n){const n=this.checkSingleLocalLimit(e,a);r.push(n),!n.allowed&&o&&(o=!1,t=n.limitType)}return{allowed:o,blockedBy:t,localChecks:r}}checkSingleLocalLimit(e,n){const r=this.getLimitKey(n),t=`${Ya.STORAGE_PREFIX}${e}_${r}`;let o=this.getLimitData(t);new Date(o.resetTime)<=new Date&&(o=this.createNewLimitPeriod(n),this.saveLimitData(t,o));const a=o.count<n.limit;return{limitType:this.getLimitTypeString(n),allowed:a,currentCount:o.count,maxCount:n.limit,resetTime:new Date(o.resetTime)}}recordLocalUsage(e,n){for(const r of n){const n=this.getLimitKey(r),t=`${Ya.STORAGE_PREFIX}${e}_${n}`,o=this.getLimitData(t);o.count++,this.saveLimitData(t,o)}}getTodayUsage(e){const n=`${Ya.STORAGE_PREFIX}${e}_daily`,r=this.getLimitData(n);return new Date(r.resetTime)>new Date?r.count:0}clearLocalLimits(e){try{const n=[];for(let r=0;r<localStorage.length;r++){const t=localStorage.key(r);t&&t.startsWith(`${Ya.STORAGE_PREFIX}${e}_`)&&n.push(t)}n.forEach(e=>localStorage.removeItem(e))}catch(e){}}getLimitData(e){try{const n=localStorage.getItem(e);if(n)return JSON.parse(n)}catch(e){}return{count:0,resetTime:new Date(Date.now()+864e5).toISOString(),period:"daily"}}saveLimitData(e,n){try{localStorage.setItem(e,JSON.stringify(n))}catch(e){}}createNewLimitPeriod(e){return{count:0,resetTime:this.calculateNextLocalReset(e).toISOString(),period:this.getLimitKey(e)}}calculateNextLocalReset(e){const n=new Date,r=new Date(n);switch(e.period){case"daily":r.setDate(n.getDate()+1),r.setHours(0,0,0,0);break;case"weekly":const t=(8-n.getDay())%7||7;r.setDate(n.getDate()+t),r.setHours(0,0,0,0);break;case"monthly":r.setMonth(n.getMonth()+1,1),r.setHours(0,0,0,0);break;case"yearly":r.setFullYear(n.getFullYear()+1,0,1),r.setHours(0,0,0,0);break;default:e.customDays&&(r.setDate(n.getDate()+e.customDays),r.setHours(0,0,0,0))}return r}getLimitKey(e){return e.customDays?`custom_${e.customDays}d`:e.period}getLimitTypeString(e){return e.customDays?`custom-${e.customDays}d`:e.period}}Ya.STORAGE_PREFIX="askdona_browser_limit_";const Xa="askdona.ragDeepResearch",ei=(e,n)=>`${Xa}.${e}.${n}`,ni=e=>`${Xa}.${e}.__index__`,ri=e=>{let n=0;for(let r=0;r<e.length;r+=1)n=(n<<5)-n+e.charCodeAt(r),n|=0;return(n>>>0).toString(16)},ti=e=>{const n=(e=>{var n,r,t,o;const{version:a,chatflowId:i,sessionId:l,userQuestion:s,phase:d,questionnaireJson:c,questionnaireSignature:u,finalReport:f,currentTask:p,lastUpdated:g}=e,h={version:a,chatflowId:i,sessionId:l,lastUpdated:g,phase:null!=d?d:null,userQuestion:null!=s?s:null,questionnaireJsonHash:c?ri(c):null,questionnaireSignature:null!=u?u:null,finalReport:f?{createdAt:f.createdAt,completionMessage:null!==(n=f.completionMessage)&&void 0!==n?n:null,contentHash:ri(f.content),rawContentHash:ri(f.rawContent)}:null,currentTask:p?{id:p.id,status:p.status,stage:p.stage,progress:null!==(r=p.progress)&&void 0!==r?r:null,updated_at:p.updated_at,research_id:null!==(t=p.research_id)&&void 0!==t?t:null,questionnaire_signature:null!==(o=p.questionnaire_signature)&&void 0!==o?o:null}:null};return JSON.stringify(h)})(e);return ri(n)},oi=e=>{if("undefined"==typeof window)return[];const n=localStorage.getItem(ni(e));if(!n)return[];try{const r=JSON.parse(n);return Array.isArray(r)?r.filter(e=>"string"==typeof(null==e?void 0:e.sessionId)):(localStorage.removeItem(ni(e)),[])}catch(n){return localStorage.removeItem(ni(e)),[]}},ai=(e,n)=>{if("undefined"==typeof window)return;const r=ni(e);if(n.length)try{localStorage.setItem(r,JSON.stringify(n.slice(0,25)))}catch(e){}else localStorage.removeItem(r)},ii=(e,n)=>{if("undefined"==typeof window)return;const r=oi(e).filter(e=>e.sessionId!==n);ai(e,r)};function li(e,n){if("undefined"==typeof window)return null;const r=localStorage.getItem(ei(e,n));if(!r)return ii(e,n),null;try{const t=JSON.parse(r);if(!t)return null;if(1!==t.version)return localStorage.removeItem(ei(e,n)),ii(e,n),null;if(!t.integrity)return localStorage.removeItem(ei(e,n)),ii(e,n),null;const{integrity:o,...a}=t;return o!==ti(a)?(localStorage.removeItem(ei(e,n)),ii(e,n),null):t}catch(r){return localStorage.removeItem(ei(e,n)),ii(e,n),null}}function si(e,n,r){if("undefined"==typeof window)return;const t=ei(e,n);if(!r)return localStorage.removeItem(t),void ii(e,n);try{const n={...r,lastUpdated:(new Date).toISOString()},o=ti(n),a={...n,integrity:o};localStorage.setItem(t,JSON.stringify(a)),((e,n)=>{var r,t,o;if("undefined"==typeof window)return;const a=oi(e).filter(e=>e.sessionId!==n.sessionId),i=[{sessionId:n.sessionId,lastUpdated:n.lastUpdated,userQuestion:n.userQuestion,phase:null!==(r=n.phase)&&void 0!==r?r:null,finalReportCreatedAt:null!==(o=null===(t=n.finalReport)||void 0===t?void 0:t.createdAt)&&void 0!==o?o:null,hasFinalReport:Boolean(n.finalReport)},...a].sort((e,n)=>e.lastUpdated||n.lastUpdated?e.lastUpdated?n.lastUpdated?n.lastUpdated.localeCompare(e.lastUpdated):-1:1:0);ai(e,i)})(e,n)}catch(e){}}function di(e,n){const r=li(e,n);return r?r.sessionId!==n?null:r:null}function ci(e,n){if("undefined"==typeof window)return;if(n)return localStorage.removeItem(ei(e,n)),void ii(e,n);oi(e).forEach(n=>{localStorage.removeItem(ei(e,n.sessionId))}),localStorage.removeItem(ni(e))}function ui(e){return oi(e).map(e=>{var n,r;return{sessionId:e.sessionId,userQuestion:e.userQuestion,lastUpdated:e.lastUpdated,finalReportCreatedAt:null!==(n=e.finalReportCreatedAt)&&void 0!==n?n:null,hasFinalReport:Boolean(e.hasFinalReport),phase:null!==(r=e.phase)&&void 0!==r?r:null}})}const fi="DEEP_RESEARCH:COMPLETED",pi="***DEEP_RESEARCH_COMPLETION_CONTAINER_START***",gi="***DEEP_RESEARCH_COMPLETION_CONTAINER_END***",hi="\x3c!-- VISUALIZATION_DATA_START --\x3e",mi="\x3c!-- VISUALIZATION_DATA_END --\x3e",vi="***DEEP_RESEARCH_QUESTIONNAIRE_START***",bi="***DEEP_RESEARCH_QUESTIONNAIRE_END***",yi="DEEP_RESEARCH:FOLLOWUP_QUESTIONS",ki=32,xi=["pending","in-progress","questionnaire_pending","questionnaire_ready"],wi=new Set(["pending","in-progress","questionnaire_pending"]),Si=new Set(["pending","in-progress"]),_i=new Set(["questionnaire_pending","questionnaire_ready"]),zi=new Set(["follow-up","analyzing_topic","probing_searches","preparing_questionnaire","questionnaire_pending","questionnaire_ready","questionnaire_generation_failed"]),Ci=new Set(["follow-up","analyzing_topic","probing_searches","preparing_questionnaire","questionnaire_pending"]),$i=Re("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--askdona-background, #f1f5f9);
`,Mi=Re("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`,Ai=Re("div")`
  margin-bottom: 2rem;
`,ji=Re("div")`
  background: var(--askdona-surface, #ffffff);
  border-radius: 12px;
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  padding: 1.5rem;
  margin-bottom: 2rem;
`,Ii=Re("p")`
  margin: 0.4rem 0 0;
  color: var(--askdona-text-secondary, #6b7280);
  font-size: 0.9rem;
`,Di=Re("div")`
  padding: 1rem;
  border: 1px dashed var(--askdona-border, rgba(71, 85, 105, 0.35));
  border-radius: 8px;
  color: var(--askdona-text-secondary, #6b7280);
  text-align: center;
  font-size: 0.9rem;
`,qi=Re("p")`
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: var(--askdona-text-secondary, #6b7280);
`,Ei=Re("p")`
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: var(--askdona-error, #dc2626);
`;function Oi(e,n,r){return!(!e||!_i.has(e))||(!(!n||!zi.has(n))||"questionnaire"===r)}const Ni={planning:"research-outline",outline:"research-outline","research-plan":"research-outline",brainstorming:"research-outline","collecting-sources":"search",collecting_sources:"search",sourcing:"search","source-collection":"search","source-analysis":"extraction","analyzing-sources":"extraction",analysis:"extraction","report-drafting":"synthesis","drafting-report":"synthesis","finalizing-report":"synthesis"};function Ri(e){if("string"!=typeof e)return null;const n=e.trim();if(!n)return null;const r=Ni[n.toLowerCase()];return null!=r?r:n}function Ti(e){const n=function(e){if("string"!=typeof e)return null;const n=e.trim();return n?n.toLowerCase():null}(e);return!!n&&Ci.has(n)}function Fi(e){var n,r,t;if("number"==typeof e&&Number.isFinite(e))return e;if("string"==typeof e){const n=e.trim();if(!n)return null;const r=Number(n);return Number.isFinite(r)?r:null}if(e&&"object"==typeof e){const o=null!==(t=null!==(r=null!==(n=e.progress)&&void 0!==n?n:e.value)&&void 0!==r?r:e.percentage)&&void 0!==t?t:null;if(void 0!==o)return Fi(o)}return null}function Pi(e){return"number"==typeof e&&Number.isFinite(e)?e>=100?100:e<=0&&e<.5?0:e:null}function Li(e){if(!e)return null;const n=Pi(Fi(e.progress));return null!==n?n:e.progress_data?Pi(Fi(e.progress_data.progress)):null}const Hi=Re("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,Ui=Re("button")`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.9rem;
  border-radius: 8px;
  border: 1px solid var(--askdona-border, rgba(0, 0, 0, 0.12));
  background: var(--askdona-background, #ffffff);
  color: var(--askdona-text, #111827);
  font-size: 0.8rem;
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
`;function Bi(e){return e.replace(/,(?=\s*?[}\]])/g,"").trim()}function Ji(e){if(!e)return null;if(e.includes(vi)){const n=e.split(vi)[1];if(!n)return null;const r=Bi(n.includes(bi)?n.split(bi)[0]:n);if(!r)return null;try{const e=JSON.parse(r);return JSON.stringify(e,null,2)}catch(e){return r}}if(e.includes(yi)){const n=function(e){const n=e.split(/\r?\n/).map(e=>e.trim()),r=[],t=[];let o=!1;if(n.forEach(e=>{if(!e||e===yi)return;const n=e.match(/^\d+[\.\)]\s*(.+)$/);n?(o=!0,t.push(n[1].trim())):o||r.push(e)}),!t.length)return null;const a={title:"フォローアップ質問",introduction:r.join(" ").trim()||"以下の質問にご回答ください。",estimatedCompletionTime:"5分",questions:t.map((e,n)=>({id:`legacy_follow_up_${n+1}`,text:e,type:"textarea",required:!1}))};return JSON.stringify(a,null,2)}(e);if(n)return n}const n=e.indexOf("{"),r=e.lastIndexOf("}");if(-1!==n&&-1!==r&&n<r){const t=Bi(e.slice(n,r+1));try{const e=JSON.parse(t);return JSON.stringify(e,null,2)}catch(e){return t||null}}return null}const Vi=Re("div")`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem 0.25rem;
  border-top: 1px solid var(--border-light);
`,Qi=Re("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,Wi=Re("button")`
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
`,Zi=Re("div")`
  position: relative;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  flex-shrink: 0;
  background: var(--askdona-surface, #ffffff);
`,Gi=Re("div")`
  position: relative;
  display: flex;
  flex-direction: column;
`,Ki=Re("div")`
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
`,Yi=Re("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`,Xi=Re("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  width: 100%;
`,el=Re("textarea")`
  flex: 1;
  width: auto;
  padding: 0 0.5rem;
  border: none;
  background: transparent;
  color: var(--askdona-text);
  font-size: 0.875rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  resize: none;
  outline: none;
  min-height: ${ki}px;
  line-height: ${ki}px;
  overflow-y: hidden;
  transition: color 0.2s ease;

  &::placeholder {
    color: var(--askdona-text-secondary);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,nl=Re("button")`
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
`,rl=Re("div")`
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
`,tl=Re("div")`
  color: var(--askdona-error, #ef4444);
  background: rgba(var(--askdona-error-rgb, 239, 68, 68), 0.1);
  border: 1px solid rgba(var(--askdona-error-rgb, 239, 68, 68), 0.25);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`,ol=Re("div")`
  margin-top: 1.5rem;
  padding: 1.5rem;
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  border-radius: 18px;
  background: var(--askdona-background, #f8fafc);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,al=Re("div")`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
`,il=Re("div")`
  font-size: 0.85rem;
  color: var(--askdona-text-secondary, #64748b);
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,ll=Re("div")`
  margin-top: 0.35rem;
  font-size: 0.85rem;
  color: var(--askdona-text-secondary, #64748b);
  line-height: 1.5;
`,sl=Re("div")`
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid var(--askdona-border);
  color: var(--askdona-text-secondary);
  background: var(--askdona-background);
`,dl=Re("span")`
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 999px;
  background: var(--askdona-primary);
  display: inline-block;
`,cl=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 16px;
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  background: rgba(var(--askdona-primary-rgb, 16, 49, 111), 0.06);
`,ul=Re("div")`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
`,fl=Re("div")`
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
`,pl=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,gl=Re("div")`
  font-size: 1rem;
  font-weight: 600;
  color: var(--askdona-text, #0f172a);
`,hl=Re("p")`
  margin: 0;
  font-size: 0.9rem;
  color: var(--askdona-text-secondary, #64748b);
  line-height: 1.5;
`,ml=Re("div")`
  color: var(--askdona-text, #0f172a);
  line-height: 1.7;
  font-size: 0.95rem;

  h1, h2, h3, h4, h5 {
    margin: 1rem 0 0.5rem;
    font-weight: 600;
  }

  p {
    margin: 0.4rem 0;
  }

  ul, ol {
    margin: 0.4rem 0 0.4rem 1.25rem;
  }

  code {
    background: var(--askdona-surface, #f1f5f9);
    padding: 0.1rem 0.35rem;
    border-radius: 4px;
    font-size: 0.85rem;
  }

  & > :first-child {
    margin-top: 0;
  }
`,vl=Re("div")`
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
`,bl=Re("div")`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--askdona-surface, #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`,yl=Re("div")`
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--askdona-text, #0f172a);

  strong {
    display: block;
    font-size: 0.95rem;
    margin-bottom: 0.2rem;
  }
`;function kl({chatFlowId:e,sessionId:n,messages:r,onModeSwitch:t,currentMode:o,onSendMessage:a,baseUrl:i,config:l}){var s,d,c,u,f,p,g,h,m,v,b,y,x,w,S,_,z;const C=!!l.debug,[$]=de(()=>{if("undefined"==typeof window)return null;try{return function(e){const n=oi(e);return n.length?li(e,n[0].sessionId):null}(e)}catch(e){return null}}),[M,A]=de("execution"===(null==(j=$)?void 0:j.phase)||"questionnaire"===(null==j?void 0:j.phase)?j.phase:"input");var j;const[I,D]=de(null!==(s=null==$?void 0:$.userQuestion)&&void 0!==s?s:""),[q,E]=de(void 0!==(null==$?void 0:$.currentTask)?$.currentTask:null),O=fe(void 0!==(null==$?void 0:$.currentTask)?$.currentTask:null),[,N]=de(null!==(c=null===(d=null==$?void 0:$.currentTask)||void 0===d?void 0:d.id)&&void 0!==c?c:null),[R,T]=de(null),[F,P]=de(!1),[L,H]=de(!1),[U,J]=de(null!==(u=null==$?void 0:$.questionnaireJson)&&void 0!==u?u:""),[V,Q]=de(null),[Z,G]=de(!1),K=void 0===(null==$?void 0:$.questionnaireSignature)?null:null!==(f=$.questionnaireSignature)&&void 0!==f?f:null,[Y,X]=de(K),[ee,ne]=de(null!==(p=null==$?void 0:$.finalReport)&&void 0!==p?p:null),[re,te]=de(Boolean(null==$?void 0:$.finalReport)),oe=fe(!1),ae=fe(null),ie=fe(new Ya),[le,se]=de(null),ue=fe(null),pe=fe(r),he=fe(!1),[me,ve]=de(()=>"undefined"==typeof window?[]:ui(e)),[be,ye]=de(null),[ke,xe]=de(()=>{var n,r;if("undefined"==typeof window)return null;return null!==(r=null===(n=ui(e)[0])||void 0===n?void 0:n.sessionId)&&void 0!==r?r:null}),[we,Se]=de(!1),[_e,ze]=de(!1),[Ce,$e]=de(null),[Me,Ae]=de(null),[je,Ie]=de(null),[De,qe]=de(null),[Ee,Oe]=de(null),[Ne,Re]=de(null),[Te,Fe]=de(null),[Pe,Le]=de(null),[He,Ue]=de(null),[Je,Ve]=de(null);ce(()=>{},[q]),ce(()=>{},[Ce,C]),ce(()=>{},[Ne,C]);const Qe=ge(()=>{if("undefined"!=typeof window)try{ve(ui(e))}catch(e){}},[e]);ce(()=>{pe.current=r},[r]),ce(()=>{O.current=q},[q]),ce(()=>{Qe()},[Qe]),ce(()=>{0===me.length&&Se(!1)},[me.length]),ce(()=>{var e,n,r,t,o,a,i,l,s,d;if(!q)return $e(null),Ae(null),Ie(null),qe(null),Oe(null),Re(null),Fe(null),Le(null),Ue(null),void Ve(null);const c=Li(q),u=Ri(null!==(r=null!==(n=null===(e=q.progress_data)||void 0===e?void 0:e.stage)&&void 0!==n?n:q.stage)&&void 0!==r?r:null),f=null!==(t=q.status)&&void 0!==t?t:null,p=null!==(i=null!==(o=q.message)&&void 0!==o?o:null===(a=q.progress_data)||void 0===a?void 0:a.message)&&void 0!==i?i:null,g=null!==(d=null!==(s=null===(l=q.progress_data)||void 0===l?void 0:l.timestamp)&&void 0!==s?s:q.updated_at)&&void 0!==d?d:null;Oi(f,u,M)?($e(c),Ae(u),Ie(f),qe(p),Oe(g)):(Re(c),Fe(u),Le(f),Ue(p),Ve(g))},[q,M]);const{getValidToken:We,isInitializing:Ze,session:Ge,initializeSession:Ke,clearSession:Ye}=function(e){const[n,r]=de(null),[t,o]=de(!0),[a,i]=de(null),l=ge(e=>{try{const n=e.split(".");return 3!==n.length?null:JSON.parse(atob(n[1]))}catch(e){return null}},[]),s=ge(async()=>{i(null);try{const n=window.location.hostname+(window.location.port?":"+window.location.port:""),t=await fetch(`${B}/session/init/${e}`,{method:"POST",headers:{"Content-Type":"application/json",Origin:window.location.origin,"X-Widget-Version":"1.0.0"},body:JSON.stringify({domain:n,timestamp:Date.now(),userAgent:navigator.userAgent})});if(!t.ok){const e=await t.json().catch(()=>({message:"Session initialization failed"}));throw new Error(e.message||`HTTP ${t.status}`)}const{secureSessionToken:o}=await t.json();if(!o)throw new Error("No session token received");const a=l(o);if(!a)throw new Error("Invalid session token format");const i=`askdona_secure_session_${e}`;localStorage.setItem(i,o);const s={token:o,isValid:!0,expiresAt:1e3*a.exp,sessionId:a.sessionId,chatflowId:a.chatflowId};return r(s),o}catch(e){throw i(e.message),e}},[e,l]),d=ge(async()=>{o(!0),i(null);try{const n=`askdona_secure_session_${e}`,t=localStorage.getItem(n);if(t){const o=l(t),a=Date.now();if(o&&1e3*o.exp>a&&o.chatflowId===e){const e={token:t,isValid:!0,expiresAt:1e3*o.exp,sessionId:o.sessionId,chatflowId:o.chatflowId};return void r(e)}localStorage.removeItem(n)}await s()}catch(e){i(e.message)}finally{o(!1)}},[e,l,s]),c=ge(async()=>{if(n&&n.expiresAt-Date.now()<18e5)try{await s()}catch(e){}},[n,s]),u=ge(async()=>{if(!n||!n.isValid)return null;if(n.expiresAt<=Date.now())try{return await s(),(null==n?void 0:n.token)||null}catch(e){return null}return await c(),n.token},[n,s,c]),f=ge(()=>{const n=`askdona_secure_session_${e}`;localStorage.removeItem(n),r(null),i(null)},[e]);return ce(()=>{e&&d()},[e,d]),ce(()=>{if(!n)return;const e=setInterval(()=>{c()},3e5);return()=>clearInterval(e)},[n,c]),{session:n,isInitializing:t,error:a,initializeSession:s,getValidToken:u,clearSession:f,refreshSessionIfNeeded:c}}(e),en=ge(async(n=!1)=>{try{const r=ue.current;if(!n&&r&&Date.now()-r.timestamp<3e4)return se(r.data),r.data;const t=await We();if(!t)return null;const o=ie.current.getBrowserFingerprint(),a=await fetch(`${B}/chat/${e}/deep-research/config`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({secureSessionToken:t,browserFingerprint:o})}),i=await a.json();if(!a.ok)throw new Error((null==i?void 0:i.error)||`Failed to load Deep Research config (${a.status})`);return ue.current={timestamp:Date.now(),data:i},se(i),i}catch(e){return null}},[e,We]),nn=ge(e=>{var n,r,t,o,a;if(!e)return!1;const i=O.current,l=null!==(n=e.task)&&void 0!==n?n:null,s=function(e,n,r){const t=Pi(Fi(null==e?void 0:e.progress));if(null!==t)return t;if(null==e?void 0:e.progressData){const n=Pi(Fi(e.progressData.progress));if(null!==n)return n}if(n){const e=Li(n);if(null!==e)return e}return Li(r)}(e,l,i),d=function(e,n,r){var t,o,a;const i=[null==e?void 0:e.stage,null===(t=null==e?void 0:e.progressData)||void 0===t?void 0:t.stage,null===(o=null==n?void 0:n.progress_data)||void 0===o?void 0:o.stage,null==n?void 0:n.stage,null===(a=null==r?void 0:r.progress_data)||void 0===a?void 0:a.stage,null==r?void 0:r.stage];for(const e of i){const n=Ri(e);if(n)return n}return null}(e,l,i),c=function(e,n,r){var t,o,a,i;return null!==(i=null!==(a=null!==(o=null!==(t=null==e?void 0:e.status)&&void 0!==t?t:null==n?void 0:n.status)&&void 0!==o?o:null==r?void 0:r.status)&&void 0!==a?a:null)&&void 0!==i?i:null}(e,l,i),u=function(e,n,r){var t,o,a,i,l,s,d,c,u;const f=null!==(u=null!==(c=null!==(s=null!==(l=null!==(a=null!==(t=null==e?void 0:e.message)&&void 0!==t?t:null===(o=null==e?void 0:e.progressData)||void 0===o?void 0:o.message)&&void 0!==a?a:null===(i=null==n?void 0:n.progress_data)||void 0===i?void 0:i.message)&&void 0!==l?l:null==n?void 0:n.message)&&void 0!==s?s:null===(d=null==r?void 0:r.progress_data)||void 0===d?void 0:d.message)&&void 0!==c?c:null==r?void 0:r.message)&&void 0!==u?u:null;if("string"==typeof f)return f.trim()||null;return null}(e,l,i),f=function(e,n,r){var t,o,a,i,l,s,d,c,u;return(null!==(u=null!==(c=null!==(s=null!==(l=null!==(a=null!==(t=null==e?void 0:e.updatedAt)&&void 0!==t?t:null===(o=null==e?void 0:e.progressData)||void 0===o?void 0:o.timestamp)&&void 0!==a?a:null===(i=null==n?void 0:n.progress_data)||void 0===i?void 0:i.timestamp)&&void 0!==l?l:null==n?void 0:n.updated_at)&&void 0!==s?s:null===(d=null==r?void 0:r.progress_data)||void 0===d?void 0:d.timestamp)&&void 0!==c?c:null==r?void 0:r.updated_at)&&void 0!==u?u:null)||null}(e,l,i),p=function(e,n,r){var t,o,a,i;const l=null!==(a=null!==(o=null!==(t=null==e?void 0:e.progressData)&&void 0!==t?t:null==n?void 0:n.progress_data)&&void 0!==o?o:null==r?void 0:r.progress_data)&&void 0!==a?a:null;if(!l)return null;const s=Pi(Fi(l.progress)),d=Ri(l.stage);return null!==s&&s!==l.progress||null!==d&&d!==l.stage?{...l,progress:null!==s?s:null!==(i=l.progress)&&void 0!==i?i:null,stage:d}:l}(e,l,i);let g=!1;if(l){const e={...l,progress:null!==s?s:Li(l),stage:null!==(r=null!=d?d:l.stage)&&void 0!==r?r:null,status:null!=c?c:l.status,message:null!==(t=null!=u?u:l.message)&&void 0!==t?t:null,progress_data:p,updated_at:null!=f?f:l.updated_at};O.current=e,E(e),N(e.id),g=!0}else i&&E(e=>{var n;if(!e)return e;const r=null!==s?s:e.progress,t=null!=d?d:e.stage,o=null!=c?c:e.status,a=null!=u?u:e.message,i=null!=f?f:e.updated_at,l=null!==(n=null!=p?p:e.progress_data)&&void 0!==n?n:null;if(!(r!==e.progress||t!==e.stage||o!==e.status||a!==e.message||l!==e.progress_data||i!==e.updated_at))return e;const h={...e,progress:r,stage:t,status:o,message:a,progress_data:l,updated_at:i};return O.current=h,g=!0,h});const h=Oi(c,d,M);if(null!==s&&(h?$e(e=>null===e?s:Math.max(e,s)):Re(e=>null===e?s:Math.max(e,s))),h?(Ae(null!=d?d:null),Ie(null!=c?c:null),qe(u),Oe(null!=f?f:null)):(Fe(null!=d?d:null),Le(null!=c?c:null),Ue(u),Ve(null!=f?f:null)),e.questionnairePayload){const n="string"==typeof e.questionnairePayload?e.questionnairePayload:JSON.stringify(e.questionnairePayload,null,2);J(n),Q(null),g=!0}else if(e.questionnaireMessage){const n=Ji(e.questionnaireMessage);n&&(J(n),Q(null),g=!0)}else if("questionnaire_ready"===(null===(o=e.task)||void 0===o?void 0:o.status)&&e.task.message){const n=Ji(e.task.message);n&&(J(n),Q(null),g=!0)}if(void 0!==e.questionnaireSignature&&(X(null!==(a=e.questionnaireSignature)&&void 0!==a?a:null),g=!0),e.finalMessage){let n=e.finalMessage.doc_metadata;if("string"==typeof n)try{n=JSON.parse(n)}catch(e){}const r=function(e){if(!e)return{content:"",rawContent:"",completionMessage:null,visualizations:null};let n=e,r=null,t=null;if(n.includes(fi)&&(n=n.replace(fi,"").trim()),n.includes(pi)&&n.includes(gi)){const e=n.indexOf(pi)+pi.length,t=n.indexOf(gi);r=n.substring(e,t).trim();const o=n.substring(0,n.indexOf(pi)),a=n.substring(t+gi.length);n=`${o.trim()}\n\n${a.trim()}`.trim()}const o=n.indexOf(hi),a=n.indexOf(mi);if(-1!==o&&-1!==a&&a>o){const e=n.substring(o+hi.length,a).trim();try{const n=JSON.parse(e);Array.isArray(n)&&(t=n)}catch(e){}n=n.substring(0,o).trim()}return{content:n.trim(),rawContent:e,completionMessage:r,visualizations:t}}(e.finalMessage.content);te(!1),ne({content:r.content,rawContent:r.rawContent,completionMessage:r.completionMessage,visualizations:r.visualizations,docMetadata:n,createdAt:e.finalMessage.created_at}),g=!0}return g},[M,N,J,Q,X,te,ne,$e,Ae,Ie,qe,Oe,Re,Fe,Le,Ue,Ve,E,C]),rn=ge(async()=>{const r=(null==Ge?void 0:Ge.sessionId)||n;if(!r)return"error";try{const n=await fetch(`${B}/chat/${e}/deep-research/status?sessionId=${r}`);if(!n.ok){if(404===n.status)return"error";throw new Error(`Failed to fetch task status (${n.status})`)}const t=await n.json();return nn(t)?"updated":"no-change"}catch(e){return e instanceof TypeError&&String(e.message||"").includes("Failed to fetch")?"network-error":"error"}},[e,null==Ge?void 0:Ge.sessionId,n,nn,C,M]);ce(()=>{he.current=!1},[e,null==Ge?void 0:Ge.sessionId]);const tn=ge(e=>{const n=e||ae.current;if(!(n&&n instanceof HTMLTextAreaElement))return;n.style.height="auto";const r=Math.max(n.scrollHeight,ki);n.style.height=`${r}px`,n.style.lineHeight=r<=ki?"32px":"1.5"},[]);ce(()=>{var n,r,t,o;if(!(null==Ge?void 0:Ge.sessionId)||oe.current)return;const a=di(e,Ge.sessionId);a&&(a.userQuestion&&D(a.userQuestion),"execution"!==a.phase&&"questionnaire"!==a.phase||A(a.phase),void 0!==a.currentTask&&(E(a.currentTask),N(null!==(r=null===(n=a.currentTask)||void 0===n?void 0:n.id)&&void 0!==r?r:null)),a.questionnaireJson&&J(a.questionnaireJson),void 0!==a.questionnaireSignature&&X(null!==(t=a.questionnaireSignature)&&void 0!==t?t:null),void 0!==a.finalReport&&(ne(null!==(o=a.finalReport)&&void 0!==o?o:null),te(Boolean(a.finalReport)))),oe.current=!0},[e,null==Ge?void 0:Ge.sessionId]),ce(()=>{(null==Ge?void 0:Ge.sessionId)&&oe.current&&(he.current||(he.current=!0,rn().catch(()=>{})))},[null==Ge?void 0:Ge.sessionId,rn]);const on=(null==Ge?void 0:Ge.sessionId)||n,an=on,ln="completed"===(null==q?void 0:q.status)||"failed"===(null==q?void 0:q.status),sn="questionnaire"===M&&!!q&&!!an&&!ln&&wi.has(q.status),dn="execution"===M&&!!q&&!!an&&!ln&&Si.has(q.status),cn=sn||dn;ce(()=>{be||on&&xe(e=>e===on?e:on)},[be,on]),ce(()=>{if(!cn||!an)return;let e=null,n=!1;const r="execution"===M?3e4:1e4,t=async()=>{if(n)return;n=!0;const r=await rn();n=!1,"network-error"===r&&e&&clearInterval(e)};return t(),e=setInterval(t,r),()=>{e&&clearInterval(e)}},[cn,an,rn,null==q?void 0:q.id,M,C,null==q?void 0:q.status,null==q?void 0:q.progress]),ce(()=>{en()},[en]),ce(()=>{(null==Ge?void 0:Ge.sessionId)&&oe.current&&(!function(e,n,r){const t=di(e,n);si(e,n,{version:1,chatflowId:e,sessionId:n,lastUpdated:(new Date).toISOString(),...t?{userQuestion:t.userQuestion,phase:t.phase,questionnaireJson:t.questionnaireJson,questionnaireSignature:t.questionnaireSignature,finalReport:t.finalReport,currentTask:t.currentTask}:{},...r})}(e,Ge.sessionId,{userQuestion:I||void 0,phase:M,questionnaireJson:U||void 0,questionnaireSignature:Y||void 0,finalReport:ee||void 0,currentTask:q}),Qe())},[e,null==Ge?void 0:Ge.sessionId,I,M,U,Y,ee,q,Qe]),ce(()=>{"input"===M&&tn()},[I,M,tn]),ce(()=>{if("input"===M)return;const e=ae.current;e&&e instanceof HTMLTextAreaElement&&(e.style.height="32px",e.style.lineHeight="32px")},[M,C]),ce(()=>{var e;if("questionnaire_ready"===(null==q?void 0:q.status)&&q.questionnaire_payload){const n="string"==typeof q.questionnaire_payload?q.questionnaire_payload:JSON.stringify(q.questionnaire_payload,null,2);return J(n),X(null!==(e=q.questionnaire_signature)&&void 0!==e?e:null),void Q(null)}if("questionnaire_ready"===(null==q?void 0:q.status)&&!q.questionnaire_payload&&!U){const e=function(e){for(let n=e.length-1;n>=0;n-=1){const r=e[n];if("assistant"!==r.role)continue;const t=Ji(r.content);if(t)return t}return null}(pe.current);e&&J(e)}},[q,U]),ce(()=>{var e;q&&void 0!==q.questionnaire_signature&&X(null!==(e=q.questionnaire_signature)&&void 0!==e?e:null)},[null==q?void 0:q.questionnaire_signature]),ce(()=>{const e=null==q?void 0:q.status;!Ti(null==q?void 0:q.stage)||"pending"!==e&&"in-progress"!==e&&"questionnaire_pending"!==e||U?"questionnaire_ready"===e?("questionnaire"!==M&&A("questionnaire"),U&&Q(null)):"questionnaire"===M&&q&&(A("execution"),J(""),Q(null),ne(null),te(!1)):"questionnaire"!==M&&A("questionnaire")},[q,U,M,C]);const un=ge(async(r,t,o)=>{var a,i,l,s,d,c,u;try{const f=await We();if(!f)throw new Error("Failed to get valid session token");const p=await en()||le;if(!p||!p.canExecute)throw new Error("Deep Research is not available right now.");const g=p.visitor;if(!g)throw new Error("Deep Research visitor authorization missing. Please refresh and try again.");const h=(null==Ge?void 0:Ge.sessionId)||n,m={secureSessionToken:f,query:r,chatflowId:e,sessionId:h,browserFingerprint:ie.current.getBrowserFingerprint(),visitor:g,messages:t};(null==o?void 0:o.questionnaireSignature)&&(m.questionnaireSignature=o.questionnaireSignature);const v=await fetch(`${B}/chat/${e}/deep-research/start`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)}),b=await v.json();if(!v.ok)throw new Error((null==b?void 0:b.error)||`Failed to start research: ${v.status}`);if((null==b?void 0:b.visitor)&&p){const e={...p,visitor:b.visitor};ue.current={timestamp:Date.now(),data:e},se(e)}const y=(null==b?void 0:b.taskId)||(null==b?void 0:b.jobId)||`embed-dr-${Date.now()}`;if("questionnaire_pending"===(null==b?void 0:b.status)){const e={id:y,session_id:h,status:"questionnaire_pending",stage:"questionnaire_pending",progress:0,message:(null==b?void 0:b.message)||"Deep Researchの質問票を準備しています...",checksheet_markdown:null,tool_usage_plan:null,execution_results:null,final_report_message_id:null,summary_report:null,research_id:(null==b?void 0:b.researchId)||null,created_at:(new Date).toISOString(),updated_at:(new Date).toISOString(),report_settings:(null==b?void 0:b.report_settings)||{reportFormat:"business-report",internetEnabled:!0,language:"japanese"},questionnaire_payload:null,questionnaire_signature:null};return E(e),N(e.id),X(null),J(""),Q(null),ne(null),A("questionnaire"),void en(!0).catch(()=>{})}if("questionnaire_ready"===(null==b?void 0:b.status)){const e=null!==(a=null==b?void 0:b.task)&&void 0!==a?a:{id:y,session_id:h,status:"questionnaire_ready",stage:"questionnaire_ready",progress:100,message:(null==b?void 0:b.message)||"質問票の準備が完了しました。",checksheet_markdown:null,tool_usage_plan:null,execution_results:null,final_report_message_id:null,summary_report:null,research_id:(null==b?void 0:b.researchId)||null,created_at:(new Date).toISOString(),updated_at:(new Date).toISOString(),report_settings:(null==b?void 0:b.report_settings)||{reportFormat:"business-report",internetEnabled:!0,language:"japanese"},questionnaire_payload:null!==(i=null==b?void 0:b.questionnairePayload)&&void 0!==i?i:null,questionnaire_signature:null!==(l=null==b?void 0:b.questionnaireSignature)&&void 0!==l?l:null};E(e),N(e.id);const n=null!==(d=null!==(s=null==b?void 0:b.questionnaireSignature)&&void 0!==s?s:e.questionnaire_signature)&&void 0!==d?d:null;if(X(n),null==b?void 0:b.questionnairePayload){const e="string"==typeof b.questionnairePayload?b.questionnairePayload:JSON.stringify(b.questionnairePayload,null,2);J(e),Q(null)}else if(null==b?void 0:b.questionnaireMessage){const e=Ji(b.questionnaireMessage);e&&(J(e),Q(null))}return A("questionnaire"),void en(!0).catch(()=>{})}if(!(null==b?void 0:b.jobId))throw new Error("Deep Research job did not return an identifier.");const k=null!==(c=null==b?void 0:b.task)&&void 0!==c?c:{id:y,session_id:h,status:"pending",stage:"follow-up",progress:0,message:(null==b?void 0:b.message)||"Deep Researchを開始しています...",checksheet_markdown:null,tool_usage_plan:null,execution_results:null,final_report_message_id:null,summary_report:null,research_id:(null==b?void 0:b.researchId)||null,created_at:(new Date).toISOString(),updated_at:(new Date).toISOString(),report_settings:(null==b?void 0:b.report_settings)||{reportFormat:"business-report",internetEnabled:!0,language:"japanese"},questionnaire_payload:null,questionnaire_signature:null!==(u=null==o?void 0:o.questionnaireSignature)&&void 0!==u?u:null};E(k),N(k.id),ne(null);const x=Ti(k.stage)?"questionnaire":"execution";"questionnaire"===x&&(J(""),Q(null)),A(x),en(!0).catch(()=>{})}catch(e){throw e}finally{P(!1)}},[e,n,Ge,We,en,le,C]),fn=ge(async()=>{if("input"===M&&I.trim()&&!L){H(!0),P(!0),T(null);try{await un(I,r)}catch(e){T(e instanceof Error?e.message:"Failed to start research")}finally{P(!1),H(!1)}}},[M,I,r,un,L]),pn=ge(e=>{(e.metaKey||e.ctrlKey)&&"Enter"===e.key&&(e.preventDefault(),fn())},[fn]),gn=ge(async e=>{Q(null),G(!0);try{const n=Y||(null==q?void 0:q.questionnaire_signature)||null;if(!n)return Q("質問票の検証情報を準備しています。数秒後に再度お試しください。"),await rn().catch(()=>{}),void G(!1);const t=[...r,{role:"user",content:e,createdAt:(new Date).toISOString(),id:`questionnaire-response-${Date.now()}`}],o=`${I}\n\nClarifications:\n\n${e}`;await un(o,t,{questionnaireSignature:n})}catch(e){Q("回答の送信に失敗しました。時間をおいて再度お試しください。")}finally{G(!1)}},[un,r,Y,null==q?void 0:q.questionnaire_signature,I,rn]);ge(n=>{const r=n.sessionId;if(xe(r),r===on)return void ye(null);if("undefined"==typeof window)return;const t=function(e,n){return li(e,n)}(e,r);if(!t)return Qe(),void ye(null);ye(t)},[e,on,Qe]);const hn=ge(()=>{ye(null),on&&xe(on)},[on]);ge(()=>{var e,n,r,t;if(!be)return;const o=be;on&&xe(on),ye(null);const a="questionnaire"===o.phase&&o.questionnaireJson?"questionnaire":"input";A(a),D(null!==(e=o.userQuestion)&&void 0!==e?e:""),J(null!==(n=o.questionnaireJson)&&void 0!==n?n:""),X(null!==(r=o.questionnaireSignature)&&void 0!==r?r:null),Q(null),ne(null!==(t=o.finalReport)&&void 0!==t?t:null),te(Boolean(o.finalReport)),E(null),$e(null),Ae(null),Ie(null),qe(null),Oe(null),Re(null),Fe(null),Le(null),Ue(null),Ve(null),N(null),T(null),P(!1),G(!1),H(!1),tn()},[be,on,tn,N]);const mn=ge(async()=>{if(!_e){ze(!0);try{on&&ci(e,on),oe.current=!1,ue.current=null,A("input"),E(null),N(null),D(""),J(""),Q(null),X(null),ne(null),te(!1),$e(null),Ae(null),Ie(null),qe(null),Oe(null),Re(null),Fe(null),Le(null),Ue(null),Ve(null),ye(null),P(!1),G(!1),H(!1),T(null),Se(!1),xe(null),Ye(),await Ke(),Qe()}catch(e){const n="ja"===l.language?"新しいセッションの開始に失敗しました。時間をおいて再度お試しください。":"Failed to start a new session. Please try again in a moment.";T(e instanceof Error&&e.message?e.message:n)}finally{ze(!1)}}},[_e,on,e,Ye,Ke,Qe,l.language]),vn=ge(()=>{A("input"),E(null),N(null),T(null),D(""),J(""),Q(null),X(null),te(!1),$e(null),Ae(null),Ie(null),qe(null),Oe(null),Re(null),Fe(null),Le(null),Ue(null),Ve(null),ci(e,on||void 0),hn(),Qe()},[e,on,hn,Qe]),bn="ja"===l.language,yn=o||"deep-research",kn=l.enableDeepResearch||l.enableRagDeepResearch,wn="input"===M&&!!I.trim()&&!F&&!L,Sn=Boolean(Y||(null==q?void 0:q.questionnaire_signature)),_n=Z||!Sn,zn=Sn?void 0:"質問票を検証しています...",Cn="ja"===l.language?"Ctrl+Enter または ⌘+Enter で送信":"Send with Ctrl+Enter or ⌘+Enter",$n="ja"===l.language?"Deep Researchで調べたい内容を入力してください... (Ctrl+Enter または ⌘+Enter で送信)":"Describe what you would like Deep Research to investigate... (Ctrl+Enter or ⌘+Enter to send)",Mn=!!q&&xi.includes(q.status),An=Boolean(be),jn=_e?bn?"新しいセッションを作成中...":"Starting new session...":bn?"新しいセッションを開始":"Start new session",In=null!==(h=null===(g=null==le?void 0:le.browserLimits)||void 0===g?void 0:g.limits)&&void 0!==h?h:[];null===(m=null==le?void 0:le.browserLimits)||void 0===m||m.allowed;const Dn=null!==(b=null===(v=null==le?void 0:le.browserLimits)||void 0===v?void 0:v.blockedBy)&&void 0!==b?b:null;In.length;const qn=null==le?void 0:le.visitor,En=ge(e=>{if(!e)return bn?"利用制限":"Usage limit";if(e.startsWith("custom-")){const n=parseInt(e.replace("custom-","").replace("d",""),10);if(Number.isFinite(n))return bn?`直近${n}日`:`Last ${n} days`}return(bn?{daily:"1日あたり",weekly:"1週間あたり",monthly:"1か月あたり",yearly:"1年あたり"}:{daily:"Per day",weekly:"Per week",monthly:"Per month",yearly:"Per year"})[e]||e},[bn]),On=ge(e=>{if(!e)return null;const n=new Date(e);return Number.isNaN(n.getTime())?null:n.toLocaleString(bn?"ja-JP":void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})},[bn]);"number"==typeof(null==qn?void 0:qn.remaining)&&qn.remaining,"number"==typeof(null==qn?void 0:qn.limit)&&qn.limit;const Nn=null==qn?void 0:qn.windowEnd;Dn&&En(Dn),On(Nn);const Rn=!1,Tn=ge((e,n)=>e.hasFinalReport?bn?"完了":"Completed":n?bn?"進行中":"In progress":"execution"===e.phase?bn?"実行中":"Executing":"questionnaire"===e.phase?bn?"質問票対応中":"Awaiting questionnaire":bn?"入力中":"Draft",[bn]),Fn=null!==(y=null==be?void 0:be.finalReport)&&void 0!==y?y:ee,Pn=null!==(x=null==be?void 0:be.userQuestion)&&void 0!==x?x:I,Ln=Boolean(Fn)&&(!Mn||An),Hn=Ln&&(An||re),Un=bn?An?"過去のDeep Research結果を表示しています":"前回のDeep Research結果を表示しています":An?"Viewing a previous Deep Research report":"Showing your previous Deep Research report",Bn=bn?"調査結果":"Research Findings",Jn=bn?"Deep Researchが生成したレポート本文です。":"Deep Research generated report summary.",Vn=be?{sessionId:be.sessionId,userQuestion:be.userQuestion,lastUpdated:be.lastUpdated,finalReportCreatedAt:null!==(S=null===(w=be.finalReport)||void 0===w?void 0:w.createdAt)&&void 0!==S?S:null,hasFinalReport:Boolean(be.finalReport),phase:null!==(_=be.phase)&&void 0!==_?_:null}:null,Qn=!!Vn&&Vn.sessionId===on;return(null===(z=null==Vn?void 0:Vn.userQuestion)||void 0===z?void 0:z.trim())&&(Vn.userQuestion.trim().length>80?Vn.userQuestion.trim().slice(0,80):Vn.userQuestion.trim()),Vn&&Tn(Vn,Qn),(null==Vn?void 0:Vn.lastUpdated)&&new Date(Vn.finalReportCreatedAt||Vn.lastUpdated).toLocaleString(bn?"ja-JP":void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),W($i,{children:[W(Mi,{children:[R&&W(tl,{children:R}),Rn,false,W(Hi,{children:[W(Ui,{type:"button","data-variant":"primary",onClick:mn,disabled:_e||Ze,children:jn}),Rn]}),Rn,Ze&&!Ln&&W(Di,{children:"セッションを初期化しています..."}),!Ze&&"input"===M&&W(Ai,{children:W(Ii,{children:"調査したい背景や目的、特に知りたい観点などを入力し「送信」ボタンで Deep Research を開始してください。"})}),"questionnaire"===M&&W(ji,{children:[U?W(Qo,{questionnaireJson:U,onSubmit:gn,isSubmitLocked:_n,submitLockLabel:zn}):W($a,{task:q,isJapanese:bn,progressOverride:Ce,stageOverride:Me,statusOverride:je,messageOverride:De,updatedAtOverride:Ee}),V&&W(Ei,{children:V}),U?(null==q?void 0:q.message)?W(qi,{children:q.message}):Sn?null:W(qi,{children:bn?"質問票の準備を行っています。送信が可能になるまで少しお待ちください。":"Preparing the questionnaire. Please wait a few more seconds before submitting."}):null]}),"execution"===M&&q&&W(ko,{task:q,onRetry:vn,progressOverride:Ne,stageOverride:Te,statusOverride:Pe,messageOverride:He,updatedAtOverride:Je}),Ln&&Fn&&W(ol,{children:[W(al,{children:W("div",{children:[W("h3",{children:"調査レポート"}),Fn.createdAt&&W(il,{children:new Date(Fn.createdAt).toLocaleString(bn?"ja-JP":void 0)}),Pn&&W(ll,{children:Pn}),Hn&&W(sl,{children:[W(dl,{}),Un]})]})}),Fn.completionMessage&&W(vl,{children:[W(bl,{children:"✅"}),W(yl,{children:[W("strong",{children:"Deep Researchが完了しました"}),Fn.completionMessage]})]}),W(cl,{children:[W(ul,{children:[W(fl,{children:W(Xe,{className:"icon"})}),W(pl,{children:[W(gl,{children:Bn}),W(hl,{children:Jn})]})]}),W(ml,{children:xn(Fn.content,!1,Array.isArray(Fn.docMetadata)?Fn.docMetadata:void 0)})]})]})]}),t&&W(k,{children:[W(Vi,{children:W(Qi,{children:[W(Wi,{type:"button",active:"ask-ai"===yn,onClick:()=>t("ask-ai"),children:"ja"===l.language?"AIに質問":"Ask AI"}),W(Wi,{type:"button",active:"search"===yn,onClick:()=>t("search"),children:"ja"===l.language?"検索":"Search"}),kn&&W(Wi,{type:"button",active:"deep-research"===yn||"rag-deep-research"===yn,onClick:()=>t("deep-research"),children:(l.language,"Deep Research")})]})}),W(Zi,{children:W(Gi,{children:W(Ki,{children:[W(Yi,{children:W(el,{ref:ae,value:I,onInput:e=>{const n=e.currentTarget;D(n.value),tn(n)},placeholder:$n,disabled:"input"!==M||F||L,onKeyDown:pn,rows:1})}),W(Xi,{children:W(nl,{type:"button",onClick:fn,disabled:!wn,"data-disabled":!wn,title:Cn,"aria-label":Cn,children:F?W(rl,{}):W(Be,{size:16,color:"white"})})})]})})})]})]})}const xl=Oe`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,wl=Oe`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Sl=Oe`
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
`;function _l({isOpen:e,onClose:n,currentMode:r,onModeSwitch:t,messages:o,isLoading:a,streamingContent:i,onSendMessage:l,error:s,config:d,currentState:c,chatMode:u,onChatModeChange:f,sessionId:p,onFeedbackSubmit:g,onClearChat:h,showIntro:m,displayMode:v="modal",metadataFilters:b,onMetadataFiltersChange:y}){var x;const w=fe(null);if(ce(()=>{if(!e)return;const r=e=>{"Escape"===e.key&&n()},t=e=>{"fullscreen"!==v&&w.current&&w.current.contains&&"function"==typeof w.current.contains&&!w.current.contains(e.target)&&n()};return document.addEventListener("keydown",r),document.addEventListener("mousedown",t),()=>{document.removeEventListener("keydown",r),document.removeEventListener("mousedown",t)}},[e,n]),!e)return null;const S=(null===(x=d.chatbotTitle)||void 0===x?void 0:x.trim())||"AskDona";return W(zl,{onClick:e=>{"fullscreen"!==v&&e.target===e.currentTarget&&n()},displayMode:v,children:W(Cl,{ref:w,displayMode:v,children:[W($l,{children:[W(Ml,{children:S}),W(Al,{children:"fullscreen"!==v&&W(jl,{onClick:n,children:"×"})})]}),W(Il,{children:"ask-ai"===r?W(Ur,{messages:o,isLoading:a,streamingContent:i,onSendMessage:l,error:s,config:d,currentState:c,chatMode:u,onChatModeChange:f,sessionId:p,onFeedbackSubmit:g,showIntro:m,metadataFilters:b,onMetadataFiltersChange:y,onClearChat:h,currentMode:r,onModeSwitch:e=>t(e)}):"search"===r?W(wt,{config:d,currentMode:r,onModeSwitch:t},"search-view"):"deep-research"===r&&(d.enableDeepResearch||d.enableRagDeepResearch)||"rag-deep-research"===r&&d.enableRagDeepResearch?W(kl,{chatFlowId:d.chatflowId,sessionId:p,messages:o.map(e=>({role:e.role,content:e.content,createdAt:e.createdAt,id:e.id})),onModeSwitch:t,currentMode:r,onSendMessage:e=>l(e),baseUrl:window.location.origin,config:d}):null}),W(Dl,{children:[W(ql,{children:["Powered by ",W(El,{href:"https://askdona.com",target:"_blank",style:"color: inherit; text-decoration: none;",children:"AskDona"})]}),W(Ol,{children:"ja"===d.language?W(k,{children:[W("div",{children:"Boostモードは、より多角的な視点から多くの文書を分析して回答します。通常モードより回答生成までに時間がかかります。"}),W("div",{children:"RAGシステムは誤った情報を提供することがあります。重要な情報はご自身で確認してください。"})]}):W(k,{children:[W("div",{children:"Boost mode analyzes more documents from multiple perspectives. It takes longer than normal mode."}),W("div",{children:"RAG systems may provide incorrect information. Please verify important information yourself."})]})})]})]})})}Oe`
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
`,Oe`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Oe`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;const zl=Re("div")`
  position: fixed;
  inset: 0;
  background: ${e=>"fullscreen"===e.displayMode?"transparent":"rgba(0, 0, 0, 0.5)"};
  backdrop-filter: ${e=>"fullscreen"===e.displayMode?"none":"blur(4px)"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  padding: ${e=>"fullscreen"===e.displayMode?"0":"1.25rem"};
  animation: ${xl} 0.2s ease-out;
`,Cl=Re("div")`
  background: var(--askdona-surface);
  border-radius: ${e=>"fullscreen"===e.displayMode?"0":"1rem"};
  width: ${e=>"fullscreen"===e.displayMode?"100vw":"100%"};
  max-width: ${e=>"fullscreen"===e.displayMode?"none":"72rem"};
  height: ${e=>"fullscreen"===e.displayMode?"100vh":"90vh"};
  max-height: ${e=>"fullscreen"===e.displayMode?"none":"1000px"};
  box-shadow: ${e=>"fullscreen"===e.displayMode?"none":"0 25px 50px -12px rgba(0, 0, 0, 0.25)"};
  display: flex;
  flex-direction: column;
  animation: ${e=>"fullscreen"===e.displayMode?"none":wl} 0.3s ease-out;
  overflow: hidden;
`,$l=Re("header")`
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`,Ml=Re("h2")`
  margin: 0;
  color: var(--askdona-text);
  font-size: 1rem;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 0.01em;
`,Al=Re("div")`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,jl=Re("button")`
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
`,Il=Re("main")`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Dl=Re("footer")`
  padding: 0.75rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
`,ql=Re("span")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
`,El=Re("a")`
  font-size: 0.75rem;
  color: var(--askdona-primary);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,Ol=Re("div")`
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
`;function Nl({onClick:e,position:n}){return W(Rl,{onClick:e,position:n,children:W("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:W("path",{d:"M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.9706 16.9706 21 12 21C10.4077 21 8.88275 20.5699 7.5389 19.7447L3 21L4.25553 16.4611C3.43012 15.1173 3 13.5923 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}const Rl=Re("button")`
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
  animation: ${Sl} 0.5s ease-out;
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
`;function Tl(e){const[n,r]=de({isValid:!1,error:null,config:null});return ce(()=>{const n=async()=>{try{const n=await async function(e){try{return await J(`/validate/${e}`,{method:"POST",body:JSON.stringify({origin:window.location.origin})})}catch(e){return{isValid:!1,error:e.message}}}(e);r({isValid:n.isValid,error:n.error?new Error(n.error):null,config:n.config||null})}catch(e){r({isValid:!1,error:e,config:null})}};e&&n()},[e]),n}const Fl="askdona_widget_",Pl=864e5;function Ll(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e)}function Hl(e){const n=`${Fl}messages_${e}`;try{const e=localStorage.getItem(n);if(!e)return[];const r=JSON.parse(e);return Array.isArray(r)?r:r.messages||[]}catch(e){return[]}}function Ul(e){var n;const r=`${Fl}messages_${e}`;try{const e=localStorage.getItem(r);if(!e)return null;const t=JSON.parse(e);return!Array.isArray(t)&&t.sessionId&&(null===(n=t.messages)||void 0===n?void 0:n.length)>0?t.sessionId:null}catch(e){return null}}function Bl(e){const[n]=de(()=>{if(Hl(e).length>0){const n=Ul(e);if(n)return n}const n=function(e){const n=`${Fl}session_${e}`;try{const e=localStorage.getItem(n);if(e){const n=JSON.parse(e);if(n.expiresAt>Date.now()&&Ll(n.id))return n.id}}catch(e){}const r=Hl(e).length>0;if(r){const r=Ul(e);if(r&&Ll(r)){const e={id:r,createdAt:Date.now(),expiresAt:Date.now()+Pl};try{localStorage.setItem(n,JSON.stringify(e))}catch(e){}return r}}try{localStorage.removeItem(n),r||localStorage.removeItem(`${Fl}messages_${e}`)}catch(e){}const t={id:U(),createdAt:Date.now(),expiresAt:Date.now()+Pl};try{localStorage.setItem(n,JSON.stringify(t))}catch(e){}return t.id}(e);return n}),[r,t]=de(()=>Hl(e)),[o,a]=de(!1),[i,l]=de(""),[s,d]=de(null),[c,u]=de("idle"),f=fe(null),p=fe(null),g=fe(""),h=fe(null);ce(()=>{if(r.length>0){const t=r[r.length-1];!function(e,n,r){const t=`${Fl}messages_${e}`;try{const e=localStorage.getItem(t),o=e?JSON.parse(e):{sessionId:null,messages:[]};r&&!o.sessionId&&(o.sessionId=r);const a=o.messages||[],i=a.findIndex(e=>e.id===n.id);-1!==i?a[i]=n:a.push(n),a.length>50&&a.splice(0,a.length-50),o.messages=a,localStorage.setItem(t,JSON.stringify(o))}catch(e){}}(e,t,n)}},[r,e,n]);const m=ge(()=>{t([]),function(e){[`${Fl}session_${e}`,`${Fl}messages_${e}`].forEach(e=>{try{localStorage.removeItem(e)}catch(e){}})}(e)},[e]),v=ge(async(o,i="standard",s=null)=>{try{const c={id:U(),role:"user",content:o,createdAt:(new Date).toISOString(),metadata:{mode:i}};t(e=>[...e,c]),a(!0),d(null),l(""),u("thinking"),g.current="",h.current=null;const m={id:U(),role:"assistant",content:"",createdAt:(new Date).toISOString(),metadata:{mode:i}};p.current=m,f.current=new AbortController,await async function({chatflowId:e,sessionId:n,message:r,messages:t,mode:o="standard",userMessageId:a,assistantMessageId:i,metadataFilters:l,signal:s,onChunk:d}){var c,u;const f=`${B}/chat/${e}/${o}`,p=await fetch(f,{method:"POST",headers:{"Content-Type":"application/json","X-Widget-Version":"1.0.0"},body:JSON.stringify({userQuestion:r,sessionId:n,messages:t.map(e=>({role:e.role,content:e.content,createdAt:e.createdAt})),mode:o,boostMode:"boost"===o||void 0,userMessageId:a,assistantMessageId:i,metadataFilters:l}),signal:s}),g={};if(p.headers.forEach((e,n)=>{g[n]=e}),!p.ok){const e=await p.json().catch(()=>({message:"Request failed"}));throw new Error(e.message||`HTTP ${p.status}`)}const h=null===(c=p.body)||void 0===c?void 0:c.getReader();if(!h)throw new Error("No response body");const m=new TextDecoder;let v="",b=0;const y=/\S/,k=(e,n)=>{b+=1},x=e=>{e&&y.test(e)&&(k(),d({type:"content",data:e}))};try{for(;;){const{done:e,value:n}=await h.read();if(e)break;let r=m.decode(n,{stream:!0});if(v&&(r=v+r,v=""),r.includes("\0")){const e=r.split("\0");v=null!==(u=e.pop())&&void 0!==u?u:"";for(const n of e)if(n)if(n.startsWith("__STATE__:")){const e=n.substring(10).replace(/\n$/,"");k(),d({type:"state",data:e})}else if(n.startsWith("__SEARCH__:")){const e=n.substring(11).replace(/\n$/,"");k(),d({type:"search",data:e})}else if(n.startsWith("__METADATA__:")){const e=n.substring(13).replace(/\n$/,"");k(),d({type:"metadata",data:e})}else if(n.startsWith("__SEARCH_QUERIES__:")){const e=n.substring(19).replace(/\n$/,"");k(),d({type:"search-queries",data:e})}else if(n.startsWith("__SUMMARY__:"))try{JSON.parse(n.substring(13))}catch(e){}else x(n);v&&!v.startsWith("__")&&(x(v),v="")}else x(r)}v&&(v.startsWith("__")||x(v))}finally{h.releaseLock()}}({chatflowId:e,sessionId:n,message:o,messages:r,mode:i,userMessageId:c.id,assistantMessageId:m.id,metadataFilters:s,signal:f.current.signal,onChunk:e=>{if("content"===e.type)g.current+=e.data,l(g.current);else if("metadata"===e.type)try{const n=JSON.parse(e.data);h.current={...h.current,docMetadata:n,mode:i}}catch(e){}else"state"===e.type&&u(e.data)}})}catch(e){"AbortError"===e.name||d(e)}finally{p.current&&g.current.trim()&&t(e=>[...e,{...p.current,content:g.current.trim(),metadata:{...p.current.metadata,...h.current}}]),a(!1),l(""),u("idle"),f.current=null,p.current=null,g.current="",h.current=null}},[e,r]),b=ge(async(r,o,a)=>{try{t(e=>e.map(e=>e.id===r?{...e,metadata:{...e.metadata,feedback:{rating:o,content:a,submittedAt:(new Date).toISOString(),isSubmitted:!0}}}:e));const i={embedMessageId:r,embedSessionId:n,chatflowId:e,feedbackType:"combined",feedbackData:{rating:"THUMBS_UP"===o?"thumbs_up":"thumbs_down",content:a||null},metadata:{domain:window.location.hostname,url:window.location.href,userAgent:navigator.userAgent}},l=await fetch(`${B}/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!l.ok){const e=await l.text();throw new Error(`Failed to submit feedback: ${l.statusText} - ${e}`)}await l.json()}catch(e){throw t(e=>e.map(e=>e.id===r?{...e,metadata:{...e.metadata,feedback:void 0}}:e)),e}},[n,e]);return{messages:r,sendMessage:v,isLoading:o,streamingContent:i,error:s,currentState:c,sessionId:n,submitFeedback:b,clearChat:m}}function Jl(e,n){const r=parseInt(e.replace("#",""),16),t=Math.round(2.55*n),o=(r>>16)-t,a=(r>>8&255)-t,i=(255&r)-t;return"#"+(16777216+65536*(o<255?o<1?0:o:255)+256*(a<255?a<1?0:a:255)+(i<255?i<1?0:i:255)).toString(16).slice(1)}function Vl(e,n){const r=parseInt(e.replace("#",""),16),t=Math.round(2.55*n),o=(r>>16)+t,a=(r>>8&255)+t,i=(255&r)+t;return"#"+(16777216+65536*(o<255?o<1?0:o:255)+256*(a<255?a<1?0:a:255)+(i<255?i<1?0:i:255)).toString(16).slice(1)}"undefined"!=typeof window&&function(){try{const e=Object.keys(localStorage),n=Date.now();e.forEach(e=>{if(e.startsWith(`${Fl}session_`))try{const r=JSON.parse(localStorage.getItem(e)||"{}");if(r.expiresAt&&r.expiresAt<n){localStorage.removeItem(e);const n=e.replace(`${Fl}session_`,"");localStorage.removeItem(`${Fl}messages_${n}`)}}catch(n){localStorage.removeItem(e)}})}catch(e){}}();const Ql={colors:{primary:"#10316f",primaryDark:Jl("#10316f",10),primaryLight:Vl("#10316f",10),background:"#ffffff",surface:"#f8f9fa",text:"#353a5c",textSecondary:"#6b6f8a",border:"#e5e7eb",error:"#EF4444",success:"#10B981"},fonts:{base:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',mono:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1)"}},Wl={colors:{primary:"#10316f",primaryDark:Jl("#10316f",10),primaryLight:Vl("#10316f",10),background:"#0f172a",surface:"#111827",text:"#e5e7eb",textSecondary:"#9ca3af",border:"#1f2937",error:"#F87171",success:"#34D399"},fonts:{base:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',mono:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.3)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.4)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.5)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.6)"}};function Zl(e,n){let r=Ql;if("dark"===e)r=Wl;else if("auto"===e){r=window.matchMedia("(prefers-color-scheme: dark)").matches?Wl:Ql}const t=function(e){if(!e)return null;let n=e.trim();if(!n)return null;"#"===n[0]&&(n=n.slice(1));3===n.length&&(n=n.split("").map(e=>e+e).join(""));if(!/^([0-9a-f]{6})$/i.test(n))return null;return`#${n.toLowerCase()}`}(n)||r.colors.primary;r={...r,colors:{...r.colors,primary:t,primaryDark:Jl(t,10),primaryLight:Vl(t,10)}};const o=function(e){const n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?`${parseInt(n[1],16)}, ${parseInt(n[2],16)}, ${parseInt(n[3],16)}`:"0, 0, 0"}(r.colors.primary);return document.documentElement.style.setProperty("--askdona-primary-rgb",o),r}function Gl(e,n){for(var r in n)e[r]=n[r];return e}function Kl(e,n){for(var r in e)if("__source"!==r&&!(r in n))return!0;for(var t in n)if("__source"!==t&&e[t]!==n[t])return!0;return!1}function Yl(e,n){this.props=e,this.context=n}(Yl.prototype=new x).isPureReactComponent=!0,Yl.prototype.shouldComponentUpdate=function(e,n){return Kl(this.props,e)||Kl(this.state,n)};var Xl=r.v;r.v=function(e){e.type&&e.type.B&&e.ref&&(e.props.ref=e.ref,e.ref=null),Xl&&Xl(e)};var es="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var ns=r.S;r.S=function(e,n,r,t){if(e.then)for(var o,a=n;a=a.m;)if((o=a._)&&o._)return null==n.S&&(n.S=r.S,n.h=r.h),o._(e,n);ns(e,n,r,t)};var rs=r.unmount;function ts(e,n,r){return e&&(e._&&e._.H&&(e._.H.m.forEach(function(e){"function"==typeof e._&&e._()}),e._.H=null),null!=(e=Gl({},e))._&&(e._.I===r&&(e._.I=n),e._.S=!0,e._=null),e.h=e.h&&e.h.map(function(e){return ts(e,n,r)})),e}function os(e,n,r){return e&&r&&(e.C=null,e.h=e.h&&e.h.map(function(e){return os(e,n,r)}),e._&&e._.I===n&&(e.S&&r.appendChild(e.S),e._.S=!0,e._.I=r)),e}function as(){this.M=0,this.o=null,this.v=null}function is(e){var n=e.m._;return n&&n.J&&n.J(e)}function ls(){this.i=null,this.l=null}r.unmount=function(e){var n=e._;n&&n.V&&n.V(),n&&32&e.M&&(e.type=null),rs&&rs(e)},(as.prototype=new x)._=function(e,n){var r=n._,t=this;null==t.o&&(t.o=[]),t.o.push(r);var o=is(t.C),a=!1,i=function(){a||(a=!0,r.V=null,o?o(l):l())};r.V=i;var l=function(){if(! --t.M){if(t.state.J){var e=t.state.J;t.C.h[0]=os(e,e._.I,e._.W)}var n;for(t.setState({J:t.v=null});n=t.o.pop();)n.forceUpdate()}};t.M++||32&n.M||t.setState({J:t.v=t.C.h[0]}),e.then(i,i)},as.prototype.componentWillUnmount=function(){this.o=[]},as.prototype.render=function(e,n){if(this.v){if(this.C.h){var r=document.createElement("div"),t=this.C.h[0]._;this.C.h[0]=ts(this.v,r,t.W=t.I)}this.v=null}var o=n.J&&b(k,null,e.fallback);return o&&(o.M&=-33),[b(k,null,n.J?null:e.children),o]};var ss=function(e,n,r){if(++r[1]===r[0]&&e.l.delete(n),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};(ls.prototype=new x).J=function(e){var n=this,r=is(n.C),t=n.l.get(e);return t[0]++,function(o){var a=function(){n.props.revealOrder?(t.push(o),ss(n,e,t)):o()};r?r(a):a()}},ls.prototype.render=function(e){this.i=null,this.l=new Map;var n=M(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&n.reverse();for(var r=n.length;r--;)this.l.set(n[r],this.i=[1,0,this.i]);return e.children},ls.prototype.componentDidUpdate=ls.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(n,r){ss(e,r,n)})};var ds="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,cs=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,us=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,fs=/[A-Z0-9]/g,ps="undefined"!=typeof document,gs=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};x.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(x.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})});var hs=r.event;function ms(){}function vs(){return this.cancelBubble}function bs(){return this.defaultPrevented}r.event=function(e){return hs&&(e=hs(e)),e.persist=ms,e.isPropagationStopped=vs,e.isDefaultPrevented=bs,e.nativeEvent=e};var ys={enumerable:!1,configurable:!0,get:function(){return this.class}},ks=r.vnode;r.vnode=function(e){"string"==typeof e.type&&function(e){var n=e.props,r=e.type,t={},o=-1===r.indexOf("-");for(var a in n){var i=n[a];if(!("value"===a&&"defaultValue"in n&&null==i||ps&&"children"===a&&"noscript"===r||"class"===a||"className"===a)){var l=a.toLowerCase();"defaultValue"===a&&"value"in n&&null==n.value?a="value":"download"===a&&!0===i?i="":"translate"===l&&"no"===i?i=!1:"o"===l[0]&&"n"===l[1]?"ondoubleclick"===l?a="ondblclick":"onchange"!==l||"input"!==r&&"textarea"!==r||gs(n.type)?"onfocus"===l?a="onfocusin":"onblur"===l?a="onfocusout":us.test(a)&&(a=l):l=a="oninput":o&&cs.test(a)?a=a.replace(fs,"-$&").toLowerCase():null===i&&(i=void 0),"oninput"===l&&t[a=l]&&(a="oninputCapture"),t[a]=i}}"select"==r&&t.multiple&&Array.isArray(t.value)&&(t.value=M(n.children).forEach(function(e){e.props.selected=-1!=t.value.indexOf(e.props.value)})),"select"==r&&null!=t.defaultValue&&(t.value=M(n.children).forEach(function(e){e.props.selected=t.multiple?-1!=t.defaultValue.indexOf(e.props.value):t.defaultValue==e.props.value})),n.class&&!n.className?(t.class=n.class,Object.defineProperty(t,"className",ys)):(n.className&&!n.class||n.class&&n.className)&&(t.class=t.className=n.className),e.props=t}(e),e.$$typeof=ds,ks&&ks(e)};var xs=r.j;r.j=function(e){xs&&xs(e),e._};var ws=r.diffed;r.diffed=function(e){ws&&ws(e);var n=e.props,r=e.S;null!=r&&"textarea"===e.type&&"value"in n&&n.value!==r.value&&(r.value=null==n.value?"":n.value)};const Ss=e=>Math.min(255,Math.max(0,e)),_s=e=>{if(!e)return null;let n=e.trim();return n?("#"===n[0]&&(n=n.slice(1)),3===n.length&&(n=n.split("").map(e=>e+e).join("")),/^([0-9a-f]{6})$/i.test(n)?`#${n.toLowerCase()}`:null):null},zs=(e,n)=>{const r=_s(e);if(!r)return e;const t=parseInt(r.slice(1),16),o=Math.round(2.55*n);return`#${((1<<24)+(Ss((t>>16)+o)<<16)+(Ss((t>>8&255)+o)<<8)+Ss((255&t)+o)).toString(16).slice(1)}`},Cs=e=>{const n=_s(e);if(!n)return null;const r=parseInt(n.slice(1),16);return`${r>>16&255}, ${r>>8&255}, ${255&r}`};Ne(b);const $s=function(e){function n(n){var r=Gl({},n);return delete r.ref,e(r,n.ref||null)}return n.$$typeof=es,n.render=n,n.prototype.isReactComponent=n.B=!0,n.displayName="ForwardRef("+(e.displayName||e.name)+")",n}(({config:e},n)=>{const[r,t]=de({isOpen:"fullscreen"===e.displayMode,currentMode:"ask-ai",messages:[],isLoading:!1,streamingContent:"",error:null,chatMode:"standard",showIntro:!0,metadataFilters:null}),{isValid:o,error:a,config:i}=Tl(e.chatflowId),[l,s]=de(null);ce(()=>{V(e.chatflowId,e.language).then(e=>{e&&e.embedConfig&&s(e.embedConfig)}).catch(()=>{s(null)})},[e.chatflowId,e.language]);const d="boolean"!=typeof e.enableDeepResearch||e.enableDeepResearch,c="boolean"==typeof e.enableRagDeepResearch?e.enableRagDeepResearch:d,u={...e,enableDeepResearch:d,enableRagDeepResearch:c};if(l){if(l.introTitle&&(u.introTitle=l.introTitle),l.introMessage&&(u.introMessage=l.introMessage),l.exampleQuestions&&(u.exampleQuestions=l.exampleQuestions),l.appearanceSettings){const e=l.appearanceSettings.primaryColor||void 0,n=l.appearanceSettings.theme||void 0,r=l.appearanceSettings.position||void 0,t=l.appearanceSettings.displayMode||void 0,o=l.appearanceSettings.backgroundColor||void 0,a=l.appearanceSettings.borderColor||void 0,i=l.appearanceSettings.chatIconColor||void 0,s=l.appearanceSettings.tabAccentColor||void 0,d=l.appearanceSettings.modeActiveColor||void 0;u.primaryColor=u.primaryColor||e,u.theme=u.theme||n,u.position=u.position||r,u.displayMode=u.displayMode||t,u.backgroundColor=u.backgroundColor||o,u.borderColor=u.borderColor||a,u.chatIconColor=u.chatIconColor||i,u.tabAccentColor=u.tabAccentColor||s,u.modeActiveColor=u.modeActiveColor||d}l.featureFlags&&("boolean"==typeof l.featureFlags.enableBoostMode&&(u.defaultBoostMode=!!l.featureFlags.enableBoostMode),"boolean"==typeof l.featureFlags.allowBoostModeToggle&&(u.allowBoostModeToggle=!!l.featureFlags.allowBoostModeToggle),"boolean"==typeof l.featureFlags.enableRagDeepResearch&&(u.enableRagDeepResearch=!!l.featureFlags.enableRagDeepResearch),"boolean"==typeof l.featureFlags.enableDeepResearch&&(u.enableDeepResearch=!!l.featureFlags.enableDeepResearch))}else i&&(u.introTitle=i.introTitle,u.introMessage=i.introMessage,u.exampleQuestions=i.exampleQuestions,u.theme=i.theme,u.position=i.position,u.primaryColor=i.primaryColor,u.defaultBoostMode=i.defaultBoostMode,u.allowBoostModeToggle=i.allowBoostModeToggle,u.displayMode=e.displayMode);u.enableDeepResearch&&(u.enableRagDeepResearch=!0);const f=Zl(u.theme||"light",u.primaryColor),p=!!u.debug,g=u.displayMode||"modal",h=r.isOpen,m=!h&&"fullscreen"!==g;ce(()=>{},[p,g,h,m]),ce(()=>{if("undefined"==typeof document)return;const e=document.querySelector("askdona-widget");e&&("fullscreen"!==g?"function"==typeof e.toggleAttribute?e.toggleAttribute("data-open",h):h?e.setAttribute("data-open",""):e.removeAttribute("data-open"):e.removeAttribute("data-open"))},[h,g,p]);const{messages:v,sendMessage:b,isLoading:y,streamingContent:k,error:x,currentState:w,sessionId:S,submitFeedback:_,clearChat:z}=Bl(e.chatflowId);ce(()=>{t(e=>({...e,messages:v,isLoading:y,streamingContent:k,error:a||x,showIntro:0===v.length&&e.showIntro}))},[v,y,k,a,x]),ce(()=>{if(i){const e=i.defaultBoostMode?"boost":"standard";t(n=>n.chatMode===e?n:{...n,chatMode:e})}},[i]),function(e,n,r){X=6,ue(function(){if("function"==typeof e){var r=e(n());return function(){e(null),r&&"function"==typeof r&&r()}}if(e)return e.current=n(),function(){return e.current=null}},null==r?r:r.concat(e))}(n,()=>({open:()=>{t(e=>({...e,isOpen:!0}))},close:()=>{t(e=>({...e,isOpen:!1}))},sendMessage:e=>{t(e=>({...e,isOpen:!0})),b(e)}}),[b]);const C=fe(null);if(ce(()=>{if(!C.current)return;const e=C.current;e.style.setProperty("--askdona-primary",f.colors.primary),e.style.setProperty("--askdona-primary-dark",f.colors.primaryDark),e.style.setProperty("--askdona-primary-light",f.colors.primaryLight);const n=Cs(f.colors.primary);n?e.style.setProperty("--askdona-primary-rgb",n):e.style.removeProperty("--askdona-primary-rgb"),e.style.setProperty("--askdona-background",f.colors.background),e.style.setProperty("--askdona-surface",f.colors.surface),e.style.setProperty("--askdona-text",f.colors.text),e.style.setProperty("--askdona-text-secondary",f.colors.textSecondary),e.style.setProperty("--askdona-border",f.colors.border),e.style.setProperty("--askdona-error",f.colors.error),e.style.setProperty("--askdona-success",f.colors.success);const r=Cs(f.colors.error);r?e.style.setProperty("--askdona-error-rgb",r):e.style.removeProperty("--askdona-error-rgb");const t=Cs(f.colors.success);if(t?e.style.setProperty("--askdona-success-rgb",t):e.style.removeProperty("--askdona-success-rgb"),e.style.setProperty("--askdona-font-base",f.fonts.base),e.style.setProperty("--askdona-font-mono",f.fonts.mono),e.style.setProperty("--askdona-bg-secondary",f.colors.surface),e.style.setProperty("--askdona-bg-hover",f.colors.primaryLight+"20"),e.style.setProperty("--askdona-surface-color",f.colors.background),e.style.setProperty("--askdona-border-color",f.colors.border),u.backgroundColor){const n=u.backgroundColor;e.style.setProperty("--askdona-background",n),e.style.setProperty("--askdona-surface",zs(n,-4)),e.style.setProperty("--askdona-bg-secondary",zs(n,-2)),e.style.setProperty("--askdona-surface-color",n)}u.borderColor&&(e.style.setProperty("--askdona-border",u.borderColor),e.style.setProperty("--askdona-border-color",u.borderColor));const o=u.chatIconColor||f.colors.primary;e.style.setProperty("--askdona-chat-icon",o);const a=u.tabAccentColor||f.colors.primary;e.style.setProperty("--askdona-tab-accent",a);const i=Cs(a);i?e.style.setProperty("--askdona-tab-accent-rgb",i):e.style.removeProperty("--askdona-tab-accent-rgb");const l=u.modeActiveColor||f.colors.primary;e.style.setProperty("--askdona-mode-active",l),e.style.setProperty("--askdona-mode-active-hover",zs(l,-12))},[f,u.backgroundColor,u.borderColor,u.chatIconColor,u.tabAccentColor,u.modeActiveColor]),!o)return null;return W("div",{ref:C,style:{fontFamily:"var(--askdona-font-base)",color:"var(--askdona-text)"},children:[m&&W(Nl,{onClick:()=>{t(e=>({...e,isOpen:!0}))},position:u.position||"bottom-right"}),(h||"fullscreen"===g)&&W(_l,{isOpen:h||"fullscreen"===g,onClose:()=>{"fullscreen"!==g&&t(e=>({...e,isOpen:!1}))},currentMode:r.currentMode,onModeSwitch:e=>{t(n=>({...n,currentMode:e}))},messages:r.messages,isLoading:r.isLoading,streamingContent:r.streamingContent,onSendMessage:(e,n,o)=>{const a=n||r.chatMode;b(e,a,o||r.metadataFilters),t(e=>({...e,showIntro:!1}))},error:r.error,config:u,currentState:w,chatMode:r.chatMode,onChatModeChange:e=>{t(n=>({...n,chatMode:e}))},sessionId:S,onFeedbackSubmit:_,onClearChat:()=>{z(),t(e=>({...e,showIntro:!0}))},showIntro:r.showIntro,displayMode:g,metadataFilters:r.metadataFilters,onMetadataFiltersChange:e=>{t(n=>({...n,metadataFilters:e}))}})]})});$s.displayName="Widget";const Ms=["chatflow-id","theme","position","primary-color","background-color","border-color","chat-icon-color","tab-accent-color","mode-active-color","language","chatbot-title","display-mode","custom-css","debug","instrument-serif-regular","instrument-serif-600","data-open"];class As extends HTMLElement{constructor(){super(...arguments),this.widgetRef={current:null},this.initialised=!1,this.gooberReady=!1}static get observedAttributes(){return Ms}connectedCallback(){if(this.initialised)return;this.initialised=!0,this.shadow=this.attachShadow({mode:"open"});const e=document.createElement("style");e.textContent="\n  /* Ensure font available within shadow */\n  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block');\n  :host {\n    all: initial;\n    position: fixed;\n    inset: auto;\n    z-index: 999999; /* Keep on top of most sites */\n  }\n\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n\n  /* Scoped scrollbar styling */\n  *::-webkit-scrollbar { width: 6px; height: 6px; }\n  *::-webkit-scrollbar-track { background: transparent; }\n  *::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.2); border-radius: 3px; }\n  *::-webkit-scrollbar-thumb:hover { background: rgba(0, 0, 0, 0.3); }\n\n  @media (prefers-reduced-motion: reduce) {\n    * { animation: none !important; transition: none !important; }\n  }\n",this.shadow.appendChild(e);const n="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",r=Array.from(this.shadow.querySelectorAll("link")).some(e=>e.getAttribute("href")===n);if(!r){const e=document.createElement("link");e.rel="stylesheet",e.href=n,this.shadow.appendChild(e)}const t=this.getAttribute("instrument-serif-regular"),o=this.getAttribute("instrument-serif-600");if(t||o){if(t){const e=document.createElement("link");e.rel="preload",e.as="font",e.href=t,e.type="font/woff2",e.crossOrigin="anonymous",this.shadow.appendChild(e)}if(o){const e=document.createElement("link");e.rel="preload",e.as="font",e.href=o,e.type="font/woff2",e.crossOrigin="anonymous",this.shadow.appendChild(e)}const e=document.createElement("style");e.textContent=`\n        ${t?`@font-face { font-family: 'Instrument Serif'; font-style: normal; font-weight: 400; font-display: swap; src: url('${t}') format('woff2'); }`:""}\n        ${o?`@font-face { font-family: 'Instrument Serif'; font-style: normal; font-weight: 600; font-display: swap; src: url('${o}') format('woff2'); }`:""}\n      `,this.shadow.appendChild(e)}else{const e=document.createElement("link");e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",this.shadow.appendChild(e);const n="askdona-font-global";if(!document.getElementById(n)){const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",document.head.appendChild(e);const r=document.createElement("link");r.rel="preconnect",r.href="https://fonts.gstatic.com",r.crossOrigin="anonymous",document.head.appendChild(r);const t=document.createElement("link");t.id=n,t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",document.head.appendChild(t)}}const a="askdona-font-global";if(!document.getElementById(a)){const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",document.head.appendChild(e);const n=document.createElement("link");n.rel="preconnect",n.href="https://fonts.gstatic.com",n.crossOrigin="anonymous",document.head.appendChild(n);const r=document.createElement("link");r.id=a,r.rel="stylesheet",r.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",document.head.appendChild(r)}this.gooberStyleEl=document.createElement("style"),this.gooberStyleEl.id="_goober",this.gooberStyleEl.appendChild(document.createTextNode(" ")),this.shadow.appendChild(this.gooberStyleEl),window._goober=this.gooberStyleEl;try{Ne(b),this.gooberReady=!0}catch(e){this.gooberReady=!1}this.mountPoint=document.createElement("div"),this.shadow.appendChild(this.mountPoint),this.applyPosition();const i=this.getAttribute("custom-css");if(i){const e=document.createElement("link");e.rel="stylesheet",e.href=i,this.shadow.appendChild(e)}if(!window.katex){const e="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js",n=Array.from(document.querySelectorAll("script")).some(n=>n.getAttribute("src")===e);if(!n){const n=document.createElement("script");n.src=e,n.async=!0,document.head.appendChild(n)}}try{this.gooberReady&&this.renderWidget()}catch(e){}}disconnectedCallback(){if(this.mountPoint&&P(null,this.mountPoint),window._goober===this.gooberStyleEl)try{delete window._goober}catch(e){window._goober=null}}attributeChangedCallback(e,n,r){try{this.applyPosition(),this.initialised&&this.gooberReady&&this.renderWidget()}catch(e){}}open(){var e;null===(e=this.widgetRef.current)||void 0===e||e.open()}close(){var e;null===(e=this.widgetRef.current)||void 0===e||e.close()}sendMessage(e){var n;null===(n=this.widgetRef.current)||void 0===n||n.sendMessage(e)}applyPosition(){const e=this.getAttribute("position")||"bottom-right",n=this.getAttribute("display-mode")||"modal",r=this.hasAttribute("data-open");return"fullscreen"===n?(this.style.position="fixed",this.style.inset="0",this.style.top="0",this.style.left="0",this.style.right="0",this.style.bottom="0",this.style.width="100%",void(this.style.height="100%")):(this.style.position="fixed","modal"===n&&r?(this.style.inset="0",this.style.top="0",this.style.left="0",this.style.right="0",this.style.bottom="0",this.style.width="100%",void(this.style.height="100%")):(this.style.inset="auto",this.style.top="",this.style.bottom="20px",this.style.left="bottom-left"===e?"20px":"",this.style.right="bottom-right"===e?"20px":"",this.style.width="",void(this.style.height="")))}getConfig(){const e=this.getAttribute("chatflow-id")||"";if(!e)return null;return{chatflowId:e,theme:this.getAttribute("theme")||void 0,position:this.getAttribute("position")||void 0,primaryColor:this.getAttribute("primary-color")||void 0,backgroundColor:this.getAttribute("background-color")||void 0,borderColor:this.getAttribute("border-color")||void 0,chatIconColor:this.getAttribute("chat-icon-color")||void 0,tabAccentColor:this.getAttribute("tab-accent-color")||void 0,modeActiveColor:this.getAttribute("mode-active-color")||void 0,language:this.getAttribute("language")||void 0,chatbotTitle:this.getAttribute("chatbot-title")||void 0,displayMode:this.getAttribute("display-mode")||void 0,debug:this.hasAttribute("debug")?"true"===this.getAttribute("debug"):void 0}}renderWidget(){const e=this.getConfig();if(e)try{P(W($s,{ref:this.widgetRef,config:e}),this.mountPoint)}catch(e){throw e}}}function js(){customElements.get("askdona-widget")||customElements.define("askdona-widget",As)}let Is={current:null};async function Ds(e){var n,r,t,o;try{const a=function(e){return e.chatflowId?e.theme&&!["light","dark","auto"].includes(e.theme)?{isValid:!1,error:'Invalid theme. Must be "light", "dark", or "auto"'}:e.position&&!["bottom-right","bottom-left"].includes(e.position)?{isValid:!1,error:'Invalid position. Must be "bottom-right" or "bottom-left"'}:e.language&&!["ja","en"].includes(e.language)?{isValid:!1,error:'Invalid language. Must be "ja" or "en"'}:{isValid:!0}:{isValid:!1,error:"chatflowId is required"}}(e);if(!a.isValid)throw new Error(a.error);!function(){if(!document.querySelector('meta[name="askdona-csp"]')){const e=document.createElement("meta");e.name="askdona-csp",e.content=["default-src 'self'","script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net","style-src 'self' 'unsafe-inline'","img-src 'self' data: https:","connect-src 'self' https://api.askdona.com wss://api.askdona.com","font-src 'self' data:","frame-ancestors 'none'"].join("; "),document.head.appendChild(e)}}();let i=null;try{i=await V(e.chatflowId,e.language)}catch(e){}let l={...e};if(null==i?void 0:i.embedConfig){const e=i.embedConfig.introTitle&&i.embedConfig.introMessage?{title:i.embedConfig.introTitle,message:i.embedConfig.introMessage}:null;e&&(l.introTitle=e.title,l.introMessage=e.message),i.embedConfig.exampleQuestions&&(l.exampleQuestions=i.embedConfig.exampleQuestions),i.embedConfig.featureFlags&&(l.defaultBoostMode=i.embedConfig.featureFlags.enableBoostMode,l.allowBoostModeToggle=i.embedConfig.featureFlags.allowBoostModeToggle,l.enableRagDeepResearch=i.embedConfig.featureFlags.enableRagDeepResearch),i.embedConfig.appearanceSettings&&(!l.primaryColor&&i.embedConfig.appearanceSettings.primaryColor&&(l.primaryColor=i.embedConfig.appearanceSettings.primaryColor),!l.theme&&i.embedConfig.appearanceSettings.theme&&(l.theme=i.embedConfig.appearanceSettings.theme),!l.position&&i.embedConfig.appearanceSettings.position&&(l.position=i.embedConfig.appearanceSettings.position),!l.displayMode&&i.embedConfig.appearanceSettings.displayMode&&(l.displayMode=i.embedConfig.appearanceSettings.displayMode),!l.backgroundColor&&i.embedConfig.appearanceSettings.backgroundColor&&(l.backgroundColor=i.embedConfig.appearanceSettings.backgroundColor),!l.borderColor&&i.embedConfig.appearanceSettings.borderColor&&(l.borderColor=i.embedConfig.appearanceSettings.borderColor),!l.chatIconColor&&i.embedConfig.appearanceSettings.chatIconColor&&(l.chatIconColor=i.embedConfig.appearanceSettings.chatIconColor),!l.tabAccentColor&&i.embedConfig.appearanceSettings.tabAccentColor&&(l.tabAccentColor=i.embedConfig.appearanceSettings.tabAccentColor),!l.modeActiveColor&&i.embedConfig.appearanceSettings.modeActiveColor&&(l.modeActiveColor=i.embedConfig.appearanceSettings.modeActiveColor))}js(),l.displayMode||(l.displayMode="modal");let s=document.querySelector("askdona-widget");if(s)s.setAttribute("chatflow-id",l.chatflowId),l.theme&&s.setAttribute("theme",l.theme),l.position&&s.setAttribute("position",l.position),l.primaryColor&&s.setAttribute("primary-color",l.primaryColor),l.language&&s.setAttribute("language",l.language),l.backgroundColor?s.setAttribute("background-color",l.backgroundColor):s.removeAttribute("background-color"),l.borderColor?s.setAttribute("border-color",l.borderColor):s.removeAttribute("border-color"),l.chatIconColor?s.setAttribute("chat-icon-color",l.chatIconColor):s.removeAttribute("chat-icon-color"),l.tabAccentColor?s.setAttribute("tab-accent-color",l.tabAccentColor):s.removeAttribute("tab-accent-color"),l.modeActiveColor?s.setAttribute("mode-active-color",l.modeActiveColor):s.removeAttribute("mode-active-color"),s.setAttribute("display-mode",l.displayMode||"modal"),l.customCSS&&s.setAttribute("custom-css",l.customCSS),l.chatbotTitle?s.setAttribute("chatbot-title",l.chatbotTitle):s.removeAttribute("chatbot-title"),(null===(t=l.instrumentSerif)||void 0===t?void 0:t.w400)&&s.setAttribute("instrument-serif-regular",l.instrumentSerif.w400),(null===(o=l.instrumentSerif)||void 0===o?void 0:o.w600)&&s.setAttribute("instrument-serif-600",l.instrumentSerif.w600),l.debug&&s.setAttribute("debug",String(!!l.debug));else{s=document.createElement("askdona-widget"),s.setAttribute("chatflow-id",l.chatflowId),l.theme&&s.setAttribute("theme",l.theme),l.position&&s.setAttribute("position",l.position),l.primaryColor&&s.setAttribute("primary-color",l.primaryColor),l.language&&s.setAttribute("language",l.language),l.backgroundColor&&s.setAttribute("background-color",l.backgroundColor),l.borderColor&&s.setAttribute("border-color",l.borderColor),l.chatIconColor&&s.setAttribute("chat-icon-color",l.chatIconColor),l.tabAccentColor&&s.setAttribute("tab-accent-color",l.tabAccentColor),l.modeActiveColor&&s.setAttribute("mode-active-color",l.modeActiveColor),s.setAttribute("display-mode",l.displayMode||"modal"),l.customCSS&&s.setAttribute("custom-css",l.customCSS),l.chatbotTitle&&s.setAttribute("chatbot-title",l.chatbotTitle),(null===(n=l.instrumentSerif)||void 0===n?void 0:n.w400)&&s.setAttribute("instrument-serif-regular",l.instrumentSerif.w400),(null===(r=l.instrumentSerif)||void 0===r?void 0:r.w600)&&s.setAttribute("instrument-serif-600",l.instrumentSerif.w600),l.debug&&s.setAttribute("debug",String(!!l.debug));(e=>{const n=document.body||document.documentElement;n?n.appendChild(e):window.addEventListener("DOMContentLoaded",()=>{const n=document.body||document.documentElement;!e.isConnected&&n&&n.appendChild(e)},{once:!0})})(s)}l.onReady&&setTimeout(()=>{l.onReady&&l.onReady()},0),l.debug}catch(n){e.onError&&e.onError(n)}}function qs(){const e=document.querySelector("askdona-widget");e&&e.parentNode&&e.parentNode.removeChild(e),Is={current:null}}function Es(){const e=document.querySelector("askdona-widget");return e&&"function"==typeof e.open?e.open():Is.current?Is.current.open():void 0}function Os(){const e=document.querySelector("askdona-widget");return e&&"function"==typeof e.close?e.close():Is.current?Is.current.close():void 0}function Ns(e){const n=document.querySelector("askdona-widget");return n&&"function"==typeof n.sendMessage?n.sendMessage(e):Is.current?Is.current.sendMessage(e):void 0}if("undefined"!=typeof window){js();const e=document.currentScript;e&&e.dataset.chatflowId&&window.addEventListener("DOMContentLoaded",async()=>{const n=e.dataset.chatflowId;if(n)try{await Ds({chatflowId:n,theme:e.dataset.theme,position:e.dataset.position,primaryColor:e.dataset.primaryColor,language:e.dataset.language,displayMode:e.dataset.displayMode})}catch(e){}})}return window.AskDona={init:Ds,destroy:qs,open:Es,close:Os,sendMessage:Ns},e.close=Os,e.destroy=qs,e.init=Ds,e.open=Es,e.sendMessage=Ns,e}({});
