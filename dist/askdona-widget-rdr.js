var AskDona=function(e){"use strict";var n,r,o,t,a,i,l,s,d,c,u,f={},p=[],g=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function m(e,n){for(var r in n)e[r]=n[r];return e}function v(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function b(e,r,o){var t,a,i,l={};for(i in r)"key"==i?t=r[i]:"ref"==i?a=r[i]:l[i]=r[i];if(arguments.length>2&&(l.children=arguments.length>3?n.call(arguments,2):o),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===l[i]&&(l[i]=e.defaultProps[i]);return y(e,l,t,a,null)}function y(e,n,t,a,i){var l={type:e,props:n,key:t,ref:a,h:null,m:null,v:0,S:null,_:null,constructor:void 0,C:null==i?++o:i,$:-1,M:0};return null==i&&null!=r.vnode&&r.vnode(l),l}function k(e){return e.children}function x(e,n){this.props=e,this.context=n}function w(e,n){if(null==n)return e.m?w(e.m,e.$+1):null;for(var r;n<e.h.length;n++)if(null!=(r=e.h[n])&&null!=r.S)return r.S;return"function"==typeof e.type?w(e):null}function S(e){var n,r;if(null!=(e=e.m)&&null!=e._){for(e.S=e._.base=null,n=0;n<e.h.length;n++)if(null!=(r=e.h[n])&&null!=r.S){e.S=e._.base=r.S;break}return S(e)}}function _(e){(!e.A&&(e.A=!0)&&t.push(e)&&!z.j++||a!=r.debounceRendering)&&((a=r.debounceRendering)||i)(z)}function z(){for(var e,n,o,a,i,s,d,c=1;t.length;)t.length>c&&t.sort(l),e=t.shift(),c=t.length,e.A&&(o=void 0,i=(a=(n=e).C).S,s=[],d=[],n.q&&((o=m({},a)).C=a.C+1,r.vnode&&r.vnode(o),D(n.q,o,a,n.I,n.q.namespaceURI,32&a.M?[i]:null,s,null==i?w(a):i,!!(32&a.M),d),o.C=a.C,o.m.h[o.$]=o,E(s,o,d),o.S!=i&&S(o)));z.j=0}function C(e,n,r,o,t,a,i,l,s,d,c){var u,g,m,v,b,x,S=o&&o.h||p,_=n.length;for(s=function(e,n,r,o,t){var a,i,l,s,d,c=r.length,u=c,f=0;for(e.h=new Array(t),a=0;a<t;a++)null!=(i=n[a])&&"boolean"!=typeof i&&"function"!=typeof i?(s=a+f,(i=e.h[a]="string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?y(null,i,null,null,null):h(i)?y(k,{children:i},null,null,null):null==i.constructor&&i.v>0?y(i.type,i.props,i.key,i.ref?i.ref:null,i.C):i).m=e,i.v=e.v+1,l=null,-1!=(d=i.$=A(i,r,s,u))&&(u--,(l=r[d])&&(l.M|=2)),null==l||null==l.C?(-1==d&&(t>c?f--:t<c&&f++),"function"!=typeof i.type&&(i.M|=4)):d!=s&&(d==s-1?f--:d==s+1?f++:(d>s?f--:f++,i.M|=4))):e.h[a]=null;if(u)for(a=0;a<c;a++)null!=(l=r[a])&&!(2&l.M)&&(l.S==o&&(o=w(l)),F(l,l));return o}(r,n,S,s,_),u=0;u<_;u++)null!=(m=r.h[u])&&(g=-1==m.$?f:S[m.$]||f,m.$=u,x=D(e,m,g,t,a,i,l,s,d,c),v=m.S,m.ref&&g.ref!=m.ref&&(g.ref&&R(g.ref,null,m),c.push(m.ref,m._||v,m)),null==b&&null!=v&&(b=v),4&m.M||g.h===m.h?s=$(m,s,e):"function"==typeof m.type&&void 0!==x?s=x:v&&(s=v.nextSibling),m.M&=-7);return r.S=b,s}function $(e,n,r){var o,t;if("function"==typeof e.type){for(o=e.h,t=0;o&&t<o.length;t++)o[t]&&(o[t].m=e,n=$(o[t],n,r));return n}e.S!=n&&(n&&e.type&&!r.contains(n)&&(n=w(e)),r.insertBefore(e.S,n||null),n=e.S);do{n=n&&n.nextSibling}while(null!=n&&8==n.nodeType);return n}function M(e,n){return n=n||[],null==e||"boolean"==typeof e||(h(e)?e.some(function(e){M(e,n)}):n.push(e)),n}function A(e,n,r,o){var t,a,i=e.key,l=e.type,s=n[r];if(null===s&&null==e.key||s&&i==s.key&&l==s.type&&!(2&s.M))return r;if(o>(null==s||2&s.M?0:1))for(t=r-1,a=r+1;t>=0||a<n.length;){if(t>=0){if((s=n[t])&&!(2&s.M)&&i==s.key&&l==s.type)return t;t--}if(a<n.length){if((s=n[a])&&!(2&s.M)&&i==s.key&&l==s.type)return a;a++}}return-1}function j(e,n,r){"-"==n[0]?e.setProperty(n,null==r?"":r):e[n]=null==r?"":"number"!=typeof r||g.test(n)?r:r+"px"}function q(e,n,r,o,t){var a,i;e:if("style"==n)if("string"==typeof r)e.style.cssText=r;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(n in o)r&&n in r||j(e.style,n,"");if(r)for(n in r)o&&r[n]==o[n]||j(e.style,n,r[n])}else if("o"==n[0]&&"n"==n[1])a=n!=(n=n.replace(s,"$1")),i=n.toLowerCase(),n=i in e||"onFocusOut"==n||"onFocusIn"==n?i.slice(2):n.slice(2),e.l||(e.l={}),e.l[n+a]=r,r?o?r.u=o.u:(r.u=d,e.addEventListener(n,a?u:c,a)):e.removeEventListener(n,a?u:c,a);else{if("http://www.w3.org/2000/svg"==t)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in e)try{e[n]=null==r?"":r;break e}catch(e){}"function"==typeof r||(null==r||!1===r&&"-"!=n[4]?e.removeAttribute(n):e.setAttribute(n,"popover"==n&&1==r?"":r))}}function I(e){return function(n){if(this.l){var o=this.l[n.type+e];if(null==n.t)n.t=d++;else if(n.t<o.u)return;return o(r.event?r.event(n):n)}}}function D(e,n,o,t,a,i,l,s,d,c){var u,f,p,g,b,y,w,S,_,z,$,M,A,j,q,I,D,E=n.type;if(null!=n.constructor)return null;128&o.M&&(d=!!(32&o.M),i=[s=n.S=o.S]),(u=r.v)&&u(n);e:if("function"==typeof E)try{if(S=n.props,_="prototype"in E&&E.prototype.render,z=(u=E.contextType)&&t[u._],$=u?z?z.props.value:u.m:t,o._?w=(f=n._=o._).m=f.D:(_?n._=f=new E(S,$):(n._=f=new x(S,$),f.constructor=E,f.render=T),z&&z.sub(f),f.props=S,f.state||(f.state={}),f.context=$,f.I=t,p=f.A=!0,f.O=[],f.N=[]),_&&null==f.R&&(f.R=f.state),_&&null!=E.getDerivedStateFromProps&&(f.R==f.state&&(f.R=m({},f.R)),m(f.R,E.getDerivedStateFromProps(S,f.R))),g=f.props,b=f.state,f.C=n,p)_&&null==E.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),_&&null!=f.componentDidMount&&f.O.push(f.componentDidMount);else{if(_&&null==E.getDerivedStateFromProps&&S!==g&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(S,$),!f.S&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(S,f.R,$)||n.C==o.C){for(n.C!=o.C&&(f.props=S,f.state=f.R,f.A=!1),n.S=o.S,n.h=o.h,n.h.some(function(e){e&&(e.m=n)}),M=0;M<f.N.length;M++)f.O.push(f.N[M]);f.N=[],f.O.length&&l.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(S,f.R,$),_&&null!=f.componentDidUpdate&&f.O.push(function(){f.componentDidUpdate(g,b,y)})}if(f.context=$,f.props=S,f.q=e,f.S=!1,A=r.j,j=0,_){for(f.state=f.R,f.A=!1,A&&A(n),u=f.render(f.props,f.state,f.context),q=0;q<f.N.length;q++)f.O.push(f.N[q]);f.N=[]}else do{f.A=!1,A&&A(n),u=f.render(f.props,f.state,f.context),f.state=f.R}while(f.A&&++j<25);f.state=f.R,null!=f.getChildContext&&(t=m(m({},t),f.getChildContext())),_&&!p&&null!=f.getSnapshotBeforeUpdate&&(y=f.getSnapshotBeforeUpdate(g,b)),I=u,null!=u&&u.type===k&&null==u.key&&(I=O(u.props.children)),s=C(e,h(I)?I:[I],n,o,t,a,i,l,s,d,c),f.base=n.S,n.M&=-161,f.O.length&&l.push(f),w&&(f.D=f.m=null)}catch(e){if(n.C=null,d||null!=i)if(e.then){for(n.M|=d?160:128;s&&8==s.nodeType&&s.nextSibling;)s=s.nextSibling;i[i.indexOf(s)]=null,n.S=s}else for(D=i.length;D--;)v(i[D]);else n.S=o.S,n.h=o.h;r.S(e,n,o)}else null==i&&n.C==o.C?(n.h=o.h,n.S=o.S):s=n.S=N(o.S,n,o,t,a,i,l,d,c);return(u=r.diffed)&&u(n),128&n.M?void 0:s}function E(e,n,o){for(var t=0;t<o.length;t++)R(o[t],o[++t],o[++t]);r._&&r._(n,e),e.some(function(n){try{e=n.O,n.O=[],e.some(function(e){e.call(n)})}catch(e){r.S(e,n.C)}})}function O(e){return"object"!=typeof e||null==e||e.v&&e.v>0?e:h(e)?e.map(O):m({},e)}function N(e,o,t,a,i,l,s,d,c){var u,p,g,m,b,y,k,x=t.props,S=o.props,_=o.type;if("svg"==_?i="http://www.w3.org/2000/svg":"math"==_?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=l)for(u=0;u<l.length;u++)if((b=l[u])&&"setAttribute"in b==!!_&&(_?b.localName==_:3==b.nodeType)){e=b,l[u]=null;break}if(null==e){if(null==_)return document.createTextNode(S);e=document.createElementNS(i,_,S.is&&S),d&&(r.F&&r.F(o,l),d=!1),l=null}if(null==_)x===S||d&&e.data==S||(e.data=S);else{if(l=l&&n.call(e.childNodes),x=t.props||f,!d&&null!=l)for(x={},u=0;u<e.attributes.length;u++)x[(b=e.attributes[u]).name]=b.value;for(u in x)if(b=x[u],"children"==u);else if("dangerouslySetInnerHTML"==u)g=b;else if(!(u in S)){if("value"==u&&"defaultValue"in S||"checked"==u&&"defaultChecked"in S)continue;q(e,u,null,b,i)}for(u in S)b=S[u],"children"==u?m=b:"dangerouslySetInnerHTML"==u?p=b:"value"==u?y=b:"checked"==u?k=b:d&&"function"!=typeof b||x[u]===b||q(e,u,b,x[u],i);if(p)d||g&&(p.T==g.T||p.T==e.innerHTML)||(e.innerHTML=p.T),o.h=[];else if(g&&(e.innerHTML=""),C("template"==o.type?e.content:e,h(m)?m:[m],o,t,a,"foreignObject"==_?"http://www.w3.org/1999/xhtml":i,l,s,l?l[0]:t.h&&w(t,0),d,c),null!=l)for(u=l.length;u--;)v(l[u]);d||(u="value","progress"==_&&null==y?e.removeAttribute("value"):null!=y&&(y!==e[u]||"progress"==_&&!y||"option"==_&&y!=x[u])&&q(e,u,y,x[u],i),u="checked",null!=k&&k!=e[u]&&q(e,u,k,x[u],i))}return e}function R(e,n,o){try{if("function"==typeof e){var t="function"==typeof e.M;t&&e.M(),t&&null==n||(e.M=e(n))}else e.current=n}catch(e){r.S(e,o)}}function F(e,n,o){var t,a;if(r.unmount&&r.unmount(e),(t=e.ref)&&(t.current&&t.current!=e.S||R(t,null,n)),null!=(t=e._)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(e){r.S(e,n)}t.base=t.q=null}if(t=e.h)for(a=0;a<t.length;a++)t[a]&&F(t[a],n,o||"function"!=typeof e.type);o||v(e.S),e._=e.m=e.S=void 0}function T(e,n,r){return this.constructor(e,r)}function P(e,o,t){var a,i,l;o==document&&(o=document.documentElement),r.m&&r.m(e,o),a=!1?null:o.h,i=[],l=[],D(o,e=o.h=b(k,null,[e]),a||f,f,o.namespaceURI,a?null:o.firstChild?n.call(o.childNodes):null,i,a?a.S:o.firstChild,false,l),E(i,e,l)}function L(e,r,o){var t,a,i,l,s=m({},e.props);for(i in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),r)"key"==i?t=r[i]:"ref"==i?a=r[i]:s[i]=void 0===r[i]&&null!=l?l[i]:r[i];return arguments.length>2&&(s.children=arguments.length>3?n.call(arguments,2):o),y(e.type,s,t||e.key,a||e.ref,null)}function H(e){if(!e)return"";const n=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#039;"),r=new Set(["A","BR","STRONG"]),o=new Set(["href","title"]),t=/^(https?:|mailto:|tel:)/i,a=document.createElement("template");a.innerHTML=e;const i=e=>{switch(e.nodeType){case Node.TEXT_NODE:return n(e.data);case Node.ELEMENT_NODE:{const a=e,l=a.tagName;if(!r.has(l)){let e="";for(const n of Array.from(a.childNodes))e+=i(n);return e}if("BR"===l)return"<br>";if("STRONG"===l){let e="";for(const n of Array.from(a.childNodes))e+=i(n);return`<strong>${e}</strong>`}if("A"===l){let e="",r="";for(const n of Array.from(a.attributes)){const a=n.name.toLowerCase();if(o.has(a))if("href"===a){const r=(n.value||"").trim();t.test(r)&&(e=r)}else"title"===a&&(r=n.value||"")}let l="";for(const e of Array.from(a.childNodes))l+=i(e);const s=' rel="noopener noreferrer"',d=e?` href="${n(e)}"`:"",c=r?` title="${n(r)}"`:"";return d?`<a${d}${c}${' target="_blank"'}${s}>${l}</a>`:l}return""}default:return""}};let l="";for(const e of Array.from(a.content.childNodes))l+=i(e);return l}function U(){return window.crypto&&window.crypto.randomUUID?window.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const n=16*Math.random()|0;return("x"===e?n:3&n|8).toString(16)})}n=p.slice,r={S:function(e,n,r,o){for(var t,a,i;n=n.m;)if((t=n._)&&!t.m)try{if((a=t.constructor)&&null!=a.getDerivedStateFromError&&(t.setState(a.getDerivedStateFromError(e)),i=t.A),null!=t.componentDidCatch&&(t.componentDidCatch(e,o||{}),i=t.A),i)return t.D=t}catch(n){e=n}throw e}},o=0,x.prototype.setState=function(e,n){var r;r=null!=this.R&&this.R!=this.state?this.R:this.R=m({},this.state),"function"==typeof e&&(e=e(m({},r),this.props)),e&&m(r,e),null!=e&&this.C&&(n&&this.N.push(n),_(this))},x.prototype.forceUpdate=function(e){this.C&&(this.S=!0,e&&this.O.push(e),_(this))},x.prototype.render=k,t=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=function(e,n){return e.C.v-n.C.v},z.j=0,s=/(PointerCapture)$|Capture$/i,d=0,c=I(!1),u=I(!0),"undefined"!=typeof window&&function(){if(window.self!==window.top)try{window.parent.document}catch(e){}}();const B="https://app.askdona.com/api/embed/v1";async function J(e,n={}){const r=new AbortController,o=setTimeout(()=>r.abort(),3e4);try{const t={"X-Widget-Version":"1.0.0",...n.headers||{}};n.method&&["POST","PUT","PATCH"].includes(n.method)&&(t["Content-Type"]="application/json");const a=await fetch(`${B}${e}`,{...n,signal:r.signal,headers:t});if(clearTimeout(o),!a.ok){const e=await a.json().catch(()=>({message:"Request failed"}));throw new Error(e.message||`HTTP ${a.status}`)}return await a.json()}catch(e){if(clearTimeout(o),"AbortError"===e.name)throw new Error("Request timeout");throw e}}async function V(e,n){try{const r=n?`?language=${encodeURIComponent(n)}`:"";return await J(`/welcome/${e}${r}`)}catch(e){return null}}var Q=0;function W(e,n,o,t,a,i){n||(n={});var l,s,d=n;if("ref"in d)for(s in d={},n)"ref"==s?l=n[s]:d[s]=n[s];var c={type:e,props:d,key:o,ref:l,h:null,m:null,v:0,S:null,_:null,constructor:void 0,C:--Q,$:-1,M:0,P:a,L:i};if("function"==typeof e&&(l=e.defaultProps))for(s in l)void 0===d[s]&&(d[s]=l[s]);return r.vnode&&r.vnode(c),c}var Z,G,K,Y,X=0,ee=[],ne=r,re=ne.v,oe=ne.j,te=ne.diffed,ae=ne._,ie=ne.unmount,le=ne.m;function se(e,n){ne.O&&ne.O(G,e,X||n),X=0;var r=G.H||(G.H={m:[],O:[]});return e>=r.m.length&&r.m.push({}),r.m[e]}function de(e){return X=1,function(e,n,r){var o=se(Z++,2);if(o.t=e,!o._&&(o.m=[r?r(n):xe(void 0,n),function(e){var n=o.U?o.U[0]:o.m[0],r=o.t(n,e);n!==r&&(o.U=[r,o.m[1]],o._.setState({}))}],o._=G,!G.B)){var t=function(e,n,r){if(!o._.H)return!0;var t=o._.H.m.filter(function(e){return!!e._});if(t.every(function(e){return!e.U}))return!a||a.call(this,e,n,r);var i=o._.props!==e;return t.forEach(function(e){if(e.U){var n=e.m[0];e.m=e.U,e.U=void 0,n!==e.m[0]&&(i=!0)}}),a&&a.call(this,e,n,r)||i};G.B=!0;var a=G.shouldComponentUpdate,i=G.componentWillUpdate;G.componentWillUpdate=function(e,n,r){if(this.S){var o=a;a=void 0,t(e,n,r),a=o}i&&i.call(this,e,n,r)},G.shouldComponentUpdate=t}return o.U||o.m}(xe,e)}function ce(e,n){var r=se(Z++,3);!ne.R&&ke(r.H,n)&&(r.m=e,r.u=n,G.H.O.push(r))}function ue(e,n){var r=se(Z++,4);!ne.R&&ke(r.H,n)&&(r.m=e,r.u=n,G.O.push(r))}function fe(e){return X=5,pe(function(){return{current:e}},[])}function pe(e,n){var r=se(Z++,7);return ke(r.H,n)&&(r.m=e(),r.H=n,r.O=e),r.m}function ge(e,n){return X=8,pe(function(){return e},n)}function he(){for(var e;e=ee.shift();)if(e.q&&e.H)try{e.H.O.forEach(be),e.H.O.forEach(ye),e.H.O=[]}catch(n){e.H.O=[],ne.S(n,e.C)}}ne.v=function(e){G=null,re&&re(e)},ne.m=function(e,n){e&&n.h&&n.h.F&&(e.F=n.h.F),le&&le(e,n)},ne.j=function(e){oe&&oe(e),Z=0;var n=(G=e._).H;n&&(K===G?(n.O=[],G.O=[],n.m.forEach(function(e){e.U&&(e.m=e.U),e.u=e.U=void 0})):(n.O.forEach(be),n.O.forEach(ye),n.O=[],Z=0)),K=G},ne.diffed=function(e){te&&te(e);var n=e._;n&&n.H&&(n.H.O.length&&(1!==ee.push(n)&&Y===ne.requestAnimationFrame||((Y=ne.requestAnimationFrame)||ve)(he)),n.H.m.forEach(function(e){e.u&&(e.H=e.u),e.u=void 0})),K=G=null},ne._=function(e,n){n.some(function(e){try{e.O.forEach(be),e.O=e.O.filter(function(e){return!e.m||ye(e)})}catch(r){n.some(function(e){e.O&&(e.O=[])}),n=[],ne.S(r,e.C)}}),ae&&ae(e,n)},ne.unmount=function(e){ie&&ie(e);var n,r=e._;r&&r.H&&(r.H.m.forEach(function(e){try{be(e)}catch(e){n=e}}),r.H=void 0,n&&ne.S(n,r.C))};var me="function"==typeof requestAnimationFrame;function ve(e){var n,r=function(){clearTimeout(o),me&&cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(r,35);me&&(n=requestAnimationFrame(r))}function be(e){var n=G,r=e._;"function"==typeof r&&(e._=void 0,r()),G=n}function ye(e){var n=G;e._=e.m(),G=n}function ke(e,n){return!e||e.length!==n.length||n.some(function(n,r){return n!==e[r]})}function xe(e,n){return"function"==typeof n?n(e):n}let we,Se,_e,ze={data:""},Ce=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ze,$e=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Me=/\/\*[^]*?\*\/|  +/g,Ae=/\n+/g,je=(e,n)=>{let r="",o="",t="";for(let a in e){let i=e[a];"@"==a[0]?"i"==a[1]?r=a+" "+i+";":o+="f"==a[1]?je(i,a):a+"{"+je(i,"k"==a[1]?"":n)+"}":"object"==typeof i?o+=je(i,n?n.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,n=>/&/.test(n)?n.replace(/&/g,e):e?e+" "+n:n)):a):null!=i&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),t+=je.p?je.p(a,i):a+":"+i+";")}return r+(n&&t?n+"{"+t+"}":t)+o},qe={},Ie=e=>{if("object"==typeof e){let n="";for(let r in e)n+=r+Ie(e[r]);return n}return e},De=(e,n,r,o,t)=>{let a=Ie(e),i=qe[a]||(qe[a]=(e=>{let n=0,r=11;for(;n<e.length;)r=101*r+e.charCodeAt(n++)>>>0;return"go"+r})(a));if(!qe[i]){let n=a!==e?e:(e=>{let n,r,o=[{}];for(;n=$e.exec(e.replace(Me,""));)n[4]?o.shift():n[3]?(r=n[3].replace(Ae," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][n[1]]=n[2].replace(Ae," ").trim();return o[0]})(e);qe[i]=je(t?{["@keyframes "+i]:n}:n,r?"":"."+i)}let l=r&&qe.g?qe.g:null;return r&&(qe.g=qe[i]),((e,n,r,o)=>{o?n.data=n.data.replace(o,e):-1===n.data.indexOf(e)&&(n.data=r?e+n.data:n.data+e)})(qe[i],n,o,l),i};function Ee(e){let n=this||{},r=e.call?e(n.p):e;return De(r.unshift?r.raw?((e,n,r)=>e.reduce((e,o,t)=>{let a=n[t];if(a&&a.call){let e=a(r),n=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=n?"."+n:e&&"object"==typeof e?e.props?"":je(e,""):!1===e?"":e}return e+o+(null==a?"":a)},""))(r,[].slice.call(arguments,1),n.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(n.p):r),{}):r,Ce(n.target),n.g,n.o,n.k)}Ee.bind({g:1});let Oe=Ee.bind({k:1});function Ne(e,n,r,o){je.p=n,we=e,Se=r,_e=o}function Re(e,n){let r=this||{};return function(){let n=arguments;return function o(t,a){let i=Object.assign({},t),l=i.className||o.className;r.p=Object.assign({theme:Se&&Se()},i),r.o=/ *go\d+/.test(l),i.className=Ee.apply(r,n)+(l?" "+l:"");let s=e;return e[0]&&(s=i.as||e,delete i.as),_e&&s[0]&&_e(i),we(s,i)}}}const Fe=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Te=e=>{const n=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()))(e);return n.charAt(0).toUpperCase()+n.slice(1)},Pe=(...e)=>e.filter((e,n,r)=>Boolean(e)&&""!==e.trim()&&r.indexOf(e)===n).join(" ").trim();var Le={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};const He=({color:e="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:o,children:t,iconNode:a,class:i="",...l})=>b("svg",{...Le,width:String(n),height:n,stroke:e,"stroke-width":o?24*Number(r)/Number(n):r,class:["lucide",i].join(" "),...l},[...a.map(([e,n])=>b(e,n)),...M(t)]),Ue=(e,n)=>{const r=({class:r="",children:o,...t})=>b(He,{...t,iconNode:n,class:Pe(`lucide-${Fe(Te(e))}`,`lucide-${Fe(e)}`,r)},o);return r.displayName=Te(e),r},Be=Ue("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),Je=Ue("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]),Ve=Ue("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),Qe=Ue("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),We=Ue("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),Ze=Ue("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),Ge=Ue("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),Ke=Ue("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),Ye=Ue("file-search",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]),Xe=Ue("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),en=Ue("funnel",[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]]),nn=Ue("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),rn=Ue("lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),on=Ue("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),tn=Ue("message-circle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]),an=Ue("pen-tool",[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]),ln=Ue("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),sn=Ue("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]),dn=Ue("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]),cn=Ue("thumbs-down",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]]),un=Ue("thumbs-up",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]),fn=Ue("timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),pn=Ue("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),gn=Ue("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),hn=Ue("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function mn({headers:e,data:n}){return W(In,{children:W("table",{children:[W("thead",{children:W("tr",{children:e.map((e,n)=>W("th",{children:wn(e,void 0)},n))})}),W("tbody",{children:n.map((e,n)=>W("tr",{children:e.map((e,n)=>W("td",{children:wn(e,void 0)},n))},n))})]})})}function vn({code:e,language:n}){const[r,o]=de(!1);return W(Dn,{children:[W(En,{children:[W(On,{children:n||"code"}),W(Nn,{onClick:async()=>{try{await navigator.clipboard.writeText(e),o(!0),setTimeout(()=>o(!1),2e3)}catch(n){const r=document.createElement("textarea");r.value=e,document.body.appendChild(r),r.select();try{document.execCommand("copy")}catch(e){}document.body.removeChild(r),o(!0),setTimeout(()=>o(!1),2e3)}},title:"Copy code",children:W(r?Ve:Ge,{size:14})})]}),W(Rn,{children:W("code",{children:e})})]})}function bn({isOpen:e,onClose:n,onSubmit:r,rating:o,config:t}){const[a,i]=de(""),[l,s]=de(!1);if(!e)return null;const d="THUMBS_UP"===o,c="ja"===t.language?d?"何が良かったですか？":"何が改善できますか？":d?"What was helpful?":"What could be improved?",u="ja"===t.language?d?"例：詳しい説明で理解しやすかった":"例：もう少し具体的な例が欲しい":d?"e.g., Clear and detailed explanation":"e.g., Could use more specific examples";return W(Un,{onClick:n,children:W(Bn,{onClick:e=>e.stopPropagation(),children:[W(Jn,{children:[W(Vn,{positive:d,children:W(d?un:cn,{size:16})}),W(Qn,{children:c})]}),W(Wn,{children:W(Zn,{value:a,onChange:e=>i(e.target.value),placeholder:u,rows:3})}),W(Gn,{children:[W(Kn,{onClick:()=>{r(""),n()},children:"ja"===t.language?"スキップ":"Skip"}),W(Yn,{onClick:()=>{s(!0);try{r(a),n()}catch(e){}finally{s(!1)}},disabled:l,children:l?"ja"===t.language?"送信中...":"Sending...":"ja"===t.language?"送信":"Send"})]})]})})}function yn({messageId:e,sessionId:n,feedback:r,onFeedbackSubmit:o,config:t}){const[a,i]=de(!1),[l,s]=de(null),[d,c]=de(r||null),u=e=>{d||(s(e),i(!0))};return W(k,{children:[W(Fn,{children:[W(Tn,{children:"ja"===t.language?"この回答は役に立ちましたか？ 更なる改善のため、ぜひフィードバックをお願いします。":"Was this answer helpful? For further improvements, please share your feedback."}),W(Pn,{children:[W(Ln,{onClick:()=>u("THUMBS_UP"),active:"THUMBS_UP"===(null==d?void 0:d.rating),disabled:!!d,positive:!0,title:"ja"===t.language?"役に立った":"Helpful",children:W(un,{size:14})}),W(Ln,{onClick:()=>u("THUMBS_DOWN"),active:"THUMBS_DOWN"===(null==d?void 0:d.rating),disabled:!!d,positive:!1,title:"ja"===t.language?"役に立たなかった":"Not helpful",children:W(cn,{size:14})})]}),d&&W(Hn,{children:"ja"===t.language?"フィードバックをありがとうございます！":"Thank you for your feedback!"})]}),W(bn,{isOpen:a,onClose:()=>{i(!1),s(null)},onSubmit:n=>{if(!l)return;const r={rating:l,content:n||void 0,submittedAt:(new Date).toISOString(),isSubmitted:!0};c(r),o(e,l,n)},rating:l,config:t})]})}function kn(e,n,r=0){try{const o=window.katex;if(o&&"function"==typeof o.renderToString){return W("span",{dangerouslySetInnerHTML:{T:o.renderToString(e,{displayMode:n,throwOnError:!1,strict:"ignore"})}},`k${r}`)}}catch(e){}return W("code",{className:"inline-code",children:e},`k${r}`)}function xn(e,n=!1,r){var o;if(!e)return[];const t=[],a=e.split("\n");let i=[],l=!1,s=[],d="",c=!1,u=[],f=!1,p=[];const g={};(r||[]).forEach((e,n)=>{g[n+1]=e});const h=()=>{if(i.length>0){const e=i.join("\n");t.push(W("p",{children:wn(e,g)},t.length)),i=[]}},m=()=>{if(u.length>0){const e=u[0].split("|").slice(1,-1).map(e=>e.trim()),n=u.slice(2).map(e=>e.split("|").slice(1,-1).map(e=>e.trim()));t.push(W(mn,{headers:e,data:n},t.length)),u=[]}};for(let e=0;e<a.length;e++){const v=a[e],b=v.trim();if(b.startsWith("```")){l?(t.push(W(vn,{code:s.join("\n"),language:d},t.length)),s=[],d="",l=!1):(h(),l=!0,d=b.slice(3)||"");continue}if(l){s.push(v);continue}if(b.startsWith("$$")){if(!f){h();if(b.endsWith("$$")&&b.length>2){const e=b.slice(2,-2).trim();t.push(W("div",{className:"katex-block",children:kn(e,!0,t.length)},t.length))}else{f=!0;const e=v.slice(v.indexOf("$$")+2);e.trim()&&p.push(e)}}continue}if(f){if(b.endsWith("$$")){const e=v.slice(0,v.lastIndexOf("$$"));e.trim()&&p.push(e);const n=p.join("\n");t.push(W("div",{className:"katex-block",children:kn(n,!0,t.length)},t.length)),p=[],f=!1}else p.push(v);continue}if(!n&&b.includes("|")&&e+1<a.length){if(a[e+1].trim().match(/^[\|\s\-:]+$/)){h(),c=!0,u=[b];continue}}if(c){""!==b&&b.includes("|")?u.push(b):(m(),c=!1,b&&i.push(v));continue}const y=b.match(/^(#{1,6})(?!#)/);if(y){h();const e=y[1].length,n=b.replace(/^(#{1,6})(?!#)/,"").replace(/^[#\s\u3000]+/,""),r=`h${e}`;t.push(W(r,{children:wn(n,g)},t.length));continue}if(b.match(/^[*+-]\s/)||b.match(/^\d+\.\s/)){h();const i=[],l=/^[*+-]\s/,s=/^\d+\.\s/,d=s.test(b),c=e=>{const n=e.trim();return l.test(n)||s.test(n)};let u=e;for(;u<a.length&&c(a[u]);){const e=[a[u].replace(/^\s+/,"").replace(/^[*+-]\s|^\d+\.\s/,"")];let t=u+1,l=!1;for(;t<a.length;){const n=a[t],r=n.trim();if(""===r){const n=t+1<a.length?a[t+1]:"",r=n.trim();if(!n)break;if(c(n)||""===r||r.match(/^#{1,6}\s/)||r.startsWith("```"))break;e.push(""),l=!0,t+=1;continue}if(c(n)||r.match(/^#{1,6}\s/)||r.startsWith("```"))break;n.startsWith("  ")||n.startsWith("\t")?(e.push(n.replace(/^\s+/,"")),l=!1,t+=1):(e.push(n),l=!1,t+=1)}const s=xn(e.join("\n"),n,r),d=i.length,f=s.map((e,n)=>"string"==typeof e||"number"==typeof e?e:e&&"object"==typeof e?L(e,{key:`li-${d}-${n}`}):e);i.push(W("li",{children:f.length>1?W(k,{children:f}):null!==(o=f[0])&&void 0!==o?o:null},`list-item-${d}`)),u=t}i.length>0&&t.push(W(d?"ol":"ul",{children:i},t.length)),e=u-1;continue}b.match(/^(-{3,}|\*{3,}|_{3,})$/)?(h(),t.push(W("hr",{},t.length))):""!==b?i.push(v):h()}return h(),c&&m(),t}function wn(e,n){const r=[];let o=0;const t=[{regex:/\\\((.+?)\\\)/g,render:(e,n)=>kn(n,!1,o++)},{regex:/\$(?!\s)([^$]+?)\$(?!\w)/g,render:(e,n)=>kn(n,!1,o++)},{regex:/\*\*(.*?)\*\*/g,render:(e,n)=>W("strong",{children:n},o++)},{regex:/\*(.*?)\*/g,render:(e,n)=>W("em",{children:n},o++)},{regex:/`([^`]+)`/g,render:(e,n)=>W("code",{className:"inline-code",children:n},o++)},{regex:/\[([^\]]+)\]\(([^)]+)\)/g,render:(e,n,r)=>W("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"link",children:n},o++)},{regex:/\[(\d+(?:,\s*\d+)*)\]/g,render:(e,r)=>{const t=r.split(/,\s*/).map(e=>parseInt(e,10)).filter(e=>!isNaN(e)),a=[];return t.forEach((e,r)=>{const i=n?n[e]:void 0,l=(null==i?void 0:i.file_name)||(null==i?void 0:i.url)||`#${e}`,s=null==i?void 0:i.url,d=Boolean(s),c="citation"+(d?" link":" disabled");d?a.push(W("a",{className:c,href:s,target:"_blank",rel:"noopener noreferrer",title:l,children:e},"c"+o++)):a.push(W("span",{className:c,title:l,children:e},"c"+o++)),r<t.length-1&&a.push(", ")}),W(k,{children:a})}}],a=[];t.forEach(n=>{let r;for(n.regex.lastIndex=0;null!==(r=n.regex.exec(e));){const e=[r[0]];for(let n=1;n<r.length;n++)e.push(r[n]);a.push({start:r.index,end:r.index+r[0].length,element:n.render.apply(null,e)})}}),a.sort((e,n)=>e.start-n.start);const i=[];let l=0;for(const e of a)e.start>=l&&(i.push(e),l=e.end);let s=0;for(const n of i)n.start>s&&r.push(e.substring(s,n.start)),r.push(n.element),s=n.end;return s<e.length&&r.push(e.substring(s)),r.length>0?r:[e]}function Sn({messages:e,isLoading:n,streamingContent:r,config:o,sessionId:t,onFeedbackSubmit:a}){const i=fe(null);return ce(()=>{var e;null===(e=i.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},[e,r]),W(_n,{children:[e.map((e,n)=>{var r,i,l,s,d,c;return"assistant"!==e.role||e.content?W(k,{children:[W(zn,{isUser:"user"===e.role,children:"user"===e.role?W(Cn,{children:[W($n,{children:e.content}),("boost"===(null===(r=e.metadata)||void 0===r?void 0:r.mode)||"fast"===(null===(i=e.metadata)||void 0===i?void 0:i.mode))&&W(Xn,{variant:e.metadata.mode,children:["fast"===e.metadata.mode?W(hn,{size:12}):W(fn,{size:12}),W("span",{children:"fast"===e.metadata.mode?"Fast":"Boost"})]})]}):W(k,{children:W(Mn,{children:W(An,{children:[W(jn,{children:xn(e.content||"",!1,null===(l=e.metadata)||void 0===l?void 0:l.docMetadata)}),("boost"===(null===(s=e.metadata)||void 0===s?void 0:s.mode)||"fast"===(null===(d=e.metadata)||void 0===d?void 0:d.mode))&&W(Xn,{assistant:!0,variant:e.metadata.mode,children:["fast"===e.metadata.mode?W(hn,{size:12}):W(fn,{size:12}),W("span",{children:"fast"===e.metadata.mode?"Fast":"Boost"})]})]})})})},e.id||n),"assistant"===e.role&&W(zn,{isUser:!1,children:W(Mn,{children:W(An,{children:W(yn,{messageId:e.id,sessionId:t,feedback:null===(c=e.metadata)||void 0===c?void 0:c.feedback,onFeedbackSubmit:a,config:o})})})},`${e.id}-feedback`)]}):null}).filter(Boolean),n&&r&&r.trim()&&W(zn,{isUser:!1,children:W(Mn,{children:W(An,{children:[W(qn,{children:"ja"===o.language?"リアルタイム応答中...":"Streaming response..."}),W(jn,{children:(()=>{try{return xn(r||"",!0,void 0)}catch(e){return W("p",{children:r||""})}})()})]})})}),W("div",{ref:i})]})}const _n=Re("div")`
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
`,qn=Re("div")`
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
`,In=Re("div")`
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
`,Dn=Re("div")`
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
`,Fn=Re("div")`
  margin-top: 12px;
  padding: 8px 0;
`,Tn=Re("div")`
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
`,or=Re("button")`
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
`,tr=Re("div")`
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
`,dr=e=>e.replace(/[^a-zA-Z0-9_-]/g,"_");function cr({filter:e,keyData:n,onFilterChange:r,onFilterRemove:o}){const t=ge((n,o="input")=>{const t=e.selectedValues.includes(n)?e.selectedValues.filter(e=>e!==n):[...e.selectedValues,n];r({...e,selectedValues:t})},[e,r]),a=ge(()=>{o(e.key)},[e.key,o]);return W(er,{children:[W(nr,{children:[W(rr,{children:[W(dn,{size:14}),e.key,n.isCustom&&W("span",{style:{fontSize:"10px",color:"#6b7280",background:"#f3f4f6",padding:"2px 6px",borderRadius:"8px"},children:"カスタム"})]}),W(or,{onClick:a,title:"フィルターを削除",children:W(gn,{size:14})})]}),W(tr,{children:W(ar,{children:n.values.map(n=>{const r=e.selectedValues.includes(n),o=`metadata-filter-${dr(e.key)}-${dr(n)}`,a=`metadata-filter-${dr(e.key)}`;return W(ir,{isSelected:r,htmlFor:o,children:[W(lr,{type:"checkbox",checked:r,id:o,name:a,onChange:e=>{e.stopPropagation(),t(n,"checkbox")}}),n]},n)})})}),W(sr,{children:e.selectedValues.length>0?W(k,{children:[W("strong",{children:[e.selectedValues.length,"個の値を選択中:"]}),W("br",{}),e.selectedValues.join(", "),W("br",{}),W("em",{children:"選択した値のいずれかを含むファイルが対象になります (OR条件)"})]}):W("em",{children:"値を選択してください"})})]})}const ur=Re("div")`
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
`,fr=Re("div")`
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
`,pr=Re("div")`
  padding: 12px 20px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,gr=Re("h2")`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 8px;
`,hr=Re("button")`
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
`,mr=Re("div")`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,vr=Re("div")`
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
`,br=Re("div")`
  margin-bottom: 16px;
`,yr=Re("label")`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  display: block;
`,kr=Re("div")`
  display: flex;
  gap: 16px;
`,xr=Re("label")`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #4b5563;
`,wr=Re("input")`
  margin: 0;
`,Sr=Re("button")`
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
`,_r=Re("div")`
  flex: 1;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,zr=Re("div")`
  display: flex;
  flex-direction: column;
  min-height: 0;
`,Cr=Re("h3")`
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 16px 0;
`,$r=Re("div")`
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`,Mr=Re("input")`
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  margin-bottom: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2364748b' viewBox='0 0 24 24'%3E%3Cpath d='M21 20l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 12px center;
`,Ar=Re("button")`
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
`,jr=Re("div")`
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 4px;
`,qr=Re("div")`
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
`,Er=Re("div")`
  text-align: center;
  color: #ef4444;
  padding: 40px 20px;
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
  }
`;function Or({isOpen:e,onClose:n,metadataKeys:r,filters:o,onFiltersChange:t,isLoading:a,error:i}){const[l,s]=de(""),[d,c]=de(o||{filters:[],globalOperator:"AND"});ce(()=>{c(o||{filters:[],globalOperator:"AND"})},[o]);const u=ge(e=>{e.target===e.currentTarget&&n()},[n]),f=ge(()=>{const e=d.filters.some(e=>e.selectedValues.length>0);t(e?d:null),n()},[d,t,n]),p=ge(()=>{c({filters:[],globalOperator:"AND"})},[]),g=ge(e=>{const n={key:e,selectedValues:[],operator:"OR"};c(e=>({...e,filters:[...e.filters,n]}))},[]),h=ge(e=>{c(n=>({...n,filters:n.filters.filter(n=>n.key!==e)}))},[]),m=ge(e=>{c(n=>({...n,filters:n.filters.map(n=>n.key===e.key?e:n)}))},[]),v=ge(e=>{c(n=>({...n,globalOperator:e}))},[]),b=r.filter(e=>{const n=d.filters.some(n=>n.key===e.key);if(n)return!1;if(l){const n=l.toLowerCase();return e.key.toLowerCase().includes(n)||e.values.some(e=>e.toLowerCase().includes(n))}return!0});return e?W(ur,{onClick:u,children:W(fr,{onClick:e=>e.stopPropagation(),children:[W(pr,{children:[W(gr,{children:[W(en,{size:20}),"絞り込み設定",d.filters.length>0&&W("span",{style:{color:"#64748b",fontWeight:400,fontSize:"14px"},children:["(",d.filters.reduce((e,n)=>e+n.selectedValues.length,0),"件の条件)"]})]}),W(hr,{onClick:n,children:W(gn,{size:20})})]}),W(mr,{children:[d.filters.length>0&&W(vr,{children:[d.filters.length>1&&W(br,{children:[W(yr,{children:"フィルター間の関係"}),W(kr,{children:[W(xr,{children:[W(wr,{type:"radio",name:"globalOperator",checked:"AND"===d.globalOperator,onChange:()=>v("AND")}),"AND（すべての条件を満たす）"]}),W(xr,{children:[W(wr,{type:"radio",name:"globalOperator",checked:"OR"===d.globalOperator,onChange:()=>v("OR")}),"OR（いずれかの条件を満たす）"]})]})]}),W("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[W("span",{style:{fontSize:"14px",color:"#64748b"},children:"文書のメタデータでフィルタリングして検索範囲を絞り込みます"}),d.filters.length>0&&W(Sr,{onClick:p,children:"すべてクリア"})]})]}),W(_r,{children:[W(zr,{children:[W(Cr,{children:"設定済みフィルター"}),W($r,{children:d.filters.length>0?W("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:d.filters.map(e=>{const n=r.find(n=>n.key===e.key);return n?W(cr,{filter:e,keyData:n,onFilterChange:m,onFilterRemove:h},e.key):null})}):W(Ir,{children:[W(en,{}),W("div",{style:{fontWeight:500,marginBottom:"4px"},children:"まだフィルターが設定されていません"}),W("div",{style:{fontSize:"14px"},children:"右側から絞り込み項目を選択してください"})]})})]}),W(zr,{children:[W(Cr,{children:"利用可能な絞り込み"}),W(Mr,{type:"text",placeholder:"絞り込み条件を検索...",value:l,onChange:e=>s(e.target.value)}),W($r,{children:a?W(Dr,{children:[W(on,{}),"読み込み中..."]}):i?W(Er,{children:[W(Qe,{}),W("div",{style:{fontWeight:500,marginBottom:"4px"},children:"エラーが発生しました"}),W("div",{style:{fontSize:"14px"},children:i})]}):b.length>0?W("div",{children:b.map(e=>W(Ar,{onClick:()=>g(e.key),children:[W(jr,{children:e.key}),W(qr,{children:[e.values.length,"個の値 • ",e.count,"件のファイル",W("br",{}),"例: ",e.values.slice(0,3).join(", "),e.values.length>3&&"..."]})]},e.key))}):W(Ir,{children:[W(sn,{}),W("div",{style:{fontWeight:500,marginBottom:"4px"},children:l?"検索結果がありません":"すべてのメタデータキーが選択済みです"})]})})]})]})]}),W("div",{style:{padding:"16px 20px",borderTop:"1px solid #e2e8f0",display:"flex",justifyContent:"flex-end",gap:"8px"},children:[W("button",{onClick:n,style:{padding:"8px 16px",border:"1px solid #e2e8f0",background:"white",color:"#374151",borderRadius:"6px",cursor:"pointer"},children:"キャンセル"}),W("button",{onClick:f,style:{padding:"8px 16px",border:"none",background:"#3b82f6",color:"white",borderRadius:"6px",cursor:"pointer",fontWeight:"500"},children:"適用"})]})]})}):null}const Nr=Re("button")`
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
`,Rr=Re("span")`
  background: rgba(255, 255, 255, 0.9);
  color: #1e40af;
  padding: 0px 4px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 600;
  min-width: 14px;
  text-align: center;
  margin-left: 2px;
`,Fr=Re(en)`
  width: 14px;
  height: 14px;
`;function Tr({chatflowId:e,filters:n,onFiltersChange:r,disabled:o=!1,className:t,language:a="ja"}){var i;const[l,s]=de(!1),[d,c]=de(!1),[u,f]=de([]),[p,g]=de(null),[h,m]=de(!1),[v,b]=de(null),[y,x]=de(!1),w=(null===(i=null==n?void 0:n.filters)||void 0===i?void 0:i.reduce((e,n)=>{var r;return e+((null===(r=n.selectedValues)||void 0===r?void 0:r.length)||0)},0))||0,S=w>0;ce(()=>{let n=!0;const r=async()=>{if(await new Promise(e=>setTimeout(e,10)),n){m(!0);try{const r=await async function(e){try{return await J(`/metadata/${e}/check`,{method:"GET"})}catch(e){return{enable_metadata_filtering:!1,error:e.message}}}(e);n&&(g(r.enable_metadata_filtering),b(null))}catch(e){n&&(g(!1),b(e.message))}finally{n&&m(!1)}}};return e&&r(),()=>{n=!1}},[e]);const _=ge(()=>{s(!0),!h&&y||c(!0),b(null)},[h,y]);ce(()=>{if(!l||y)return;if(h)return;if(!1===p)return b("メタデータフィルタリングはこのチャットフローで利用できません"),c(!1),void x(!0);(async()=>{try{const n=await async function(e){try{return await J(`/metadata/${e}/keys`,{method:"GET"})}catch(e){return{success:!1,error:e.message}}}(e);n.success&&n.metadataKeys?f(n.metadataKeys):(b(n.error||"Failed to fetch metadata keys"),f([])),x(!0)}catch(e){b(e.message),f([]),x(!0)}finally{c(!1)}})()},[l,e,y,h,p]);const z=ge(()=>{s(!1),f([]),c(!1),b(null),x(!1)},[]);return!0!==p?null:W(k,{children:[W(Nr,{hasActiveFilters:S,onClick:_,disabled:o,className:t,type:"button",title:h?"ja"===a?"フィルタ機能を確認中...":"Checking filter availability...":"ja"===a?"結果を絞り込む":"Filter results",children:[W(Fr,{}),W("span",{children:"ja"===a?"絞り込み":"Filter"}),S&&W(Rr,{children:w})]}),l&&W(Or,{isOpen:l,onClose:z,metadataKeys:u,filters:n,onFiltersChange:r,isLoading:d,error:v})]})}const Pr={idle:0,initializing:10,thinking:22,searching:42,synthesizing:58,processing:72,streaming:88,answering:90,finalizing:96,completing:98,complete:100,error:100},Lr=[{time:0,minProgress:5,label:"initializing"},{time:2e3,minProgress:12,label:"thinking"},{time:5e3,minProgress:20,label:"searching"},{time:9e3,minProgress:32,label:"synthesizing"},{time:13e3,minProgress:48,label:"processing"},{time:16e3,minProgress:64,label:"answering"},{time:18e3,minProgress:76,label:"finalizing"},{time:2e4,minProgress:88,label:"completing"},{time:21e3,minProgress:96,label:"complete"}],Hr=[{time:0,minProgress:5,label:"initializing"},{time:2e3,minProgress:12,label:"thinking"},{time:5e3,minProgress:20,label:"searching"},{time:9e3,minProgress:32,label:"synthesizing"},{time:13e3,minProgress:48,label:"processing"},{time:16e3,minProgress:64,label:"answering"},{time:29e3,minProgress:76,label:"finalizing"},{time:31e3,minProgress:88,label:"completing"},{time:32e3,minProgress:96,label:"complete"}];const Ur={ja:{thinking:"考え中...",searching:"データベースを検索中...",synthesizing:"情報を整理中...",answering:"推論中...",executing_functions:"ツールを実行中...",processing_function_results:"実行結果を処理中...",complete:"情報を統合中...",error:"エラーが発生しました"},en:{thinking:"Thinking...",searching:"Searching the database...",synthesizing:"Organizing information...",answering:"Reasoning...",executing_functions:"Running tools...",processing_function_results:"Processing tool results...",complete:"Synthesizing...",error:"An error occurred"}};function Br({messages:e,isLoading:n,streamingContent:r,onSendMessage:o,error:t,config:a,currentState:i,chatMode:l="standard",onChatModeChange:s,sessionId:d,onFeedbackSubmit:c,showIntro:u,metadataFilters:f=null,onMetadataFiltersChange:p,currentMode:g,onModeSwitch:h,onClearChat:m}){const v=l||"standard",b="boost"===v,y="fast"===v,[x,w]=de(""),{progress:S,displayState:_}=function({isLoading:e,boostMode:n=!1,currentState:r}){const[o,t]=de(0),[a,i]=de(r||"idle"),l=fe(null),s=fe(0),d=fe(null),c=n?Hr:Lr,u=c[c.length-1].time;return ce(()=>{e&&!l.current?(l.current=Date.now(),s.current=0,t(c[0].minProgress)):e||(l.current=null,s.current=0,t(0),i("idle"),d.current&&cancelAnimationFrame(d.current))},[e,c]),ce(()=>{if(!e||!l.current)return;const n=()=>{var o,a;const f=Date.now()-l.current;let p=0,g="processing";for(let e=c.length-1;e>=0;e--)if(f>=c[e].time){const n=c[e];if(e<c.length-1){const r=c[e+1],o=r.time-n.time,t=f-n.time,a=Math.min(t/o,1);p=n.minProgress+(r.minProgress-n.minProgress)*a}else p=n.minProgress;g=n.label||"processing";break}const h=98*function(e){return e<.5?2*e*e:(4-2*e)*e-1}(Math.min(f/u,1)),m=Math.max(p,h,s.current);let v=Math.min(m,98);const b=(g||"processing").toLowerCase(),y=(r||"").toLowerCase(),k=null!==(o=Pr[b])&&void 0!==o?o:72,x=y?null!==(a=Pr[y])&&void 0!==a?a:72:100,w=Math.min(k,x);v=Math.min(v,w),v>s.current&&(s.current=v,t(v)),i(g),e&&v<98&&(d.current=requestAnimationFrame(n))};return n(),()=>{d.current&&cancelAnimationFrame(d.current)}},[e,c,u,r]),ce(()=>{if("answering"===r&&"answering"===a){const e=90;s.current<e&&(s.current=e,t(e))}},[r,a]),{progress:o,displayState:a,isProgressing:e}}({isLoading:n,boostMode:b,currentState:i}),[z,C]=de(0===e.length),[$,M]=de(!1),A=fe(null),j=void 0!==u?u:z;ce(()=>{void 0===u&&e.length>0&&C(!1)},[e,u]);const q=e=>{const n=e||A.current;if(!n)return;n.style.height="auto";const r=n.scrollHeight;n.style.height=`${r}px`,n.style.lineHeight=r<=32?"32px":"1.5"};ce(()=>{!n&&A.current&&"function"==typeof A.current.focus&&(A.current.focus(),A.current.style.minHeight="32px",q())},[n]);const I=e=>{null==e||e.preventDefault(),x.trim()&&!n&&(o(x.trim(),v,f),w(""))},D=e=>{if(!s)return;s(v===e?"standard":e)},E=a.exampleQuestions||("ja"===a.language?["RAGシステムについて教えてください","ドキュメントの検索方法は？","APIの使い方を教えてください"]:["What is RAG system?","How do I search documents?","How to use the API?"]);return W(Jr,{children:[W(Gr,{children:[j?W(Kr,{children:[W(Yr,{children:W(tn,{size:24,color:"white"})}),W(Xr,{children:a.introTitle||("ja"===a.language?"こんにちは！":"Hi there!")}),a.introMessage?W(eo,{dangerouslySetInnerHTML:{T:H(a.introMessage)}}):W(eo,{children:"ja"===a.language?"AskDona AIアシスタントです。ドキュメントや情報について何でもお聞きください。":"I'm AskDona AI assistant. Ask me anything about your documents and information."}),W(no,{children:[W(ro,{children:"ja"===a.language?"質問例":"Example Questions"}),W(oo,{children:E.map((e,n)=>W(to,{onClick:()=>(e=>{o(e,v,f)})(e),children:e},n))})]})]}):W(Sn,{messages:e,isLoading:n,streamingContent:r,config:a,sessionId:d,onFeedbackSubmit:c}),n&&W(io,{children:[W(lo,{children:[W(so,{}),W(co,{children:r.trim()?"ja"===a.language?"リアルタイム応答中...":"Streaming response...":Ur[a.language||"ja"][_]||Ur[a.language||"ja"][i||""]||("ja"===a.language?"処理中...":"Processing...")})]}),!r.trim()&&W(uo,{children:W(fo,{progress:S})})]}),t&&W(ao,{children:"ja"===a.language?`エラーが発生しました: ${t.message}`:`Error: ${t.message}`})]}),h&&W(Vr,{children:W(Qr,{children:[W(Wr,{type:"button",active:"ask-ai"===(g||"ask-ai"),onClick:()=>h("ask-ai"),children:"ja"===a.language?"AIに質問":"Ask AI"}),W(Wr,{type:"button",active:"search"===g,onClick:()=>h("search"),children:"ja"===a.language?"検索":"Search"}),a.enableDeepResearch&&W(Wr,{type:"button",active:"deep-research"===g,onClick:()=>h("deep-research"),children:(a.language,"Deep Research")}),m&&"ask-ai"===(g||"ask-ai")&&e.length>0&&W(Zr,{type:"button",onClick:m,title:"ja"===a.language?"新しいセッションを開始":"Start new session","aria-label":"ja"===a.language?"新しいセッションを開始":"Start new session",disabled:n,children:W(ln,{size:14})})]})}),W(po,{children:W(vo,{boostMode:b,children:W(bo,{children:[W(yo,{children:W(wo,{ref:A,value:x,onChange:e=>{const n=e.target;w(n.value),q(n)},onKeyDown:e=>{$||(e=>{"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),I())})(e)},onCompositionStart:()=>{M(!0)},onCompositionEnd:()=>{M(!1)},placeholder:"ja"===a.language?"質問を入力してください... (Ctrl+Enter または ⌘+Enter で送信)":"Ask me anything... (Ctrl+Enter or ⌘+Enter to send)",disabled:n,rows:1,boostMode:b})}),W(ko,{children:[W("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.chatflowId&&p&&W(Tr,{chatflowId:a.chatflowId,filters:f,onFiltersChange:p,disabled:n,language:a.language||"ja"}),a.allowBoostModeToggle&&s&&W(k,{children:[W(go,{onClick:()=>D("fast"),disabled:n,active:y,title:"ja"===a.language?"Fastモードは、思考プロセスを簡素化して素早く回答します。":"Fast mode generates quicker answers with lighter reasoning.",children:[W(ho,{active:y,children:W(hn,{size:14})}),W(mo,{children:"Fast"})]}),W(go,{onClick:()=>D("boost"),disabled:n,active:b,title:"ja"===a.language?"Boostモードは、より多角的な視点から多くの文書を分析して回答します。":"Boost mode analyzes more documents from multiple perspectives for comprehensive answers.",children:[W(ho,{active:b,children:W(fn,{size:14})}),W(mo,{children:"Boost"})]})]})]}),W(xo,{onClick:I,disabled:!x.trim()||n,title:"ja"===a.language?"Ctrl+Enter または ⌘+Enter で送信":"Ctrl+Enter or ⌘+Enter to send",type:"button","data-askdona-button":"send","data-disabled":!x.trim()||n,children:W(Be,{size:16,color:(()=>{var e;if(!x.trim()||n){return(null===(e=getComputedStyle(document.documentElement).getPropertyValue("--askdona-text-secondary"))||void 0===e?void 0:e.trim())||"#6b6f8a"}return"white"})()})})]})]})})})]})}const Jr=Re("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Vr=Re("div")`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem 0.25rem;
  flex-shrink: 0;
  align-items: center;
  /* tabs aligned left by default */
`,Qr=Re("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
`,Wr=Re("button")`
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
`,Zr=Re("button")`
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
`,Gr=Re("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
`,Kr=Re("div")`
  text-align: center;
  padding: 2rem 0;
`,Yr=Re("div")`
  width: 3rem;
  height: 3rem;
  background: var(--askdona-chat-icon, var(--askdona-primary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
`,Xr=Re("h3")`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--askdona-text);
`,eo=Re("p")`
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  margin: 0 auto 2rem;
  max-width: 90%;
  line-height: 1.5;
`,no=Re("div")`
  margin-top: 2rem;
`,ro=Re("h4")`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--askdona-text-secondary);
  margin: 0 0 1rem;
`,oo=Re("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`,to=Re("button")`
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
`,ao=Re("div")`
  background: rgba(239, 68, 68, 0.1);
  color: var(--askdona-error);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  font-size: 0.875rem;
`,io=Re("div")`
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
`,lo=Re("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,so=Re("div")`
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
`,co=Re("span")`
  font-weight: 500;
`,uo=Re("div")`
  width: 30%;
  height: 6px;
  background: var(--askdona-border);
  border-radius: 3px;
  overflow: hidden;
`,fo=Re("div")`
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
`,po=Re("div")`
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  flex-shrink: 0;
`,go=Re("button")`
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
`,ho=Re("span")`
  display: flex;
  align-items: center;
  opacity: ${({active:e})=>e?1:.8};
`,mo=Re("span")`
  font-weight: 500;
  font-size: 12px;
`,vo=Re("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  
  ${({boostMode:e})=>e&&"\n    &::before {\n      content: '';\n      position: absolute;\n      top: -2px;\n      left: -2px;\n      right: -2px;\n      bottom: -2px;\n      background: linear-gradient(135deg, var(--askdona-primary), var(--askdona-primary-light));\n      border-radius: 0.875rem;\n      z-index: -1;\n    }\n  "}
`,bo=Re("div")`
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
`,yo=Re("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`,ko=Re("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
`,xo=Re("button")`
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
`,wo=Re("textarea")`
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
`;class So{static getStorageKey(){return"askdona_search_history"}static getAllHistory(){try{const e=localStorage.getItem(this.getStorageKey());if(!e)return[];const n=JSON.parse(e),r=Date.now()-2592e6;return n.filter(e=>e.timestamp>r)}catch(e){return[]}}static saveHistory(e){try{const n=e.slice(0,50);localStorage.setItem(this.getStorageKey(),JSON.stringify(n))}catch(e){}}static addSearchHistory(e,n,r,o){const t={id:`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,query:n.trim(),resultsCount:r,searchTime:o,timestamp:Date.now(),chatflowId:e},a=this.getAllHistory();a.unshift(t),this.saveHistory(a)}static getSearchHistory(e,n=20){return this.getAllHistory().filter(n=>n.chatflowId===e).slice(0,n)}static getRecentQueries(e,n=10,r=!0){const o=this.getSearchHistory(e,r?100:n);if(r){const e=new Set,r=[];for(const t of o){const o=t.query.toLowerCase();if(!e.has(o)&&(e.add(o),r.push(t.query),r.length>=n))break}return r}return o.map(e=>e.query)}static getPopularQueries(e,n=10){const r=this.getSearchHistory(e,1e3),o=new Map;return r.forEach(e=>{const n=e.query.toLowerCase();o.set(n,(o.get(n)||0)+1)}),Array.from(o.entries()).map(([e,n])=>{var o;return{query:(null===(o=r.find(n=>n.query.toLowerCase()===e))||void 0===o?void 0:o.query)||e,count:n}}).sort((e,n)=>n.count-e.count).slice(0,n)}static clearHistory(e){if(e){const n=this.getAllHistory().filter(n=>n.chatflowId!==e);this.saveHistory(n)}else localStorage.removeItem(this.getStorageKey())}static getHistoryStats(e){const n=this.getSearchHistory(e,1e3);if(0===n.length)return{totalSearches:0,uniqueQueries:0,avgResultsCount:0,avgSearchTime:0};const r=new Set(n.map(e=>e.query.toLowerCase())).size,o=n.reduce((e,n)=>e+n.resultsCount,0)/n.length,t=n.reduce((e,n)=>e+n.searchTime,0)/n.length;return{totalSearches:n.length,uniqueQueries:r,avgResultsCount:Math.round(o),avgSearchTime:Math.round(t)}}}function _o({config:e,currentMode:n,onModeSwitch:r,onClearSearch:o}){var t,a;const[i,l]=de(""),[s,d]=de(null),[c,u]=de([]),[f,p]=de({}),[g,h]=de(!1),[m,v]=de(null),b=fe(null),[y,x]=de(!1),{recentQueries:w,addSearchHistory:S}=function(e,n={}){const{limit:r=20,uniqueQueries:o=!0,autoRefresh:t=!0}=n,[a,i]=de([]),[l,s]=de([]),d=ge(()=>{if(!e)return;const n=So.getRecentQueries(e,r,o);i(n);const t=So.getPopularQueries(e,10);s(t)},[e,r,o]);ce(()=>{t&&d()},[t,d]);const c=ge((n,r,o)=>{e&&n.trim()&&(So.addSearchHistory(e,n,r,o),t&&d())},[e,t,d]),u=ge(()=>{e&&(So.clearHistory(e),i([]),s([]))},[e]),f=ge(()=>e?So.getHistoryStats(e):null,[e]);return{recentQueries:a,popularQueries:l,addSearchHistory:c,clearHistory:u,refresh:d,getStats:f}}(e.chatflowId),_=`askdona_widget_last_search_${e.chatflowId}`,z=ge((e,n)=>{try{const r={query:e,response:n,savedAt:Date.now()};localStorage.setItem(_,JSON.stringify(r))}catch(e){}},[_]),C=ge(()=>{try{const e=localStorage.getItem(_);if(!e)return null;const n=JSON.parse(e);return n&&"object"==typeof n?n:null}catch(e){return null}},[_]);ce(()=>{b.current&&"function"==typeof b.current.focus&&b.current.focus();const e=C();e&&e.response&&(l(e.query||""),d(e.response),u(e.response.results||[]),p({}))},[C]);const $=ge(async n=>{var r;if(!n.trim())return d(null),void u([]);p({}),h(!0),v(null);const o=Date.now();try{const t={query:n,filters:{}},a=await async function(e,n){try{return await J(`/search/${e}`,{method:"POST",body:JSON.stringify(n)})}catch(e){throw e}}(e.chatflowId,t);d(a),u(a.results||[]),z(n,a);const i=Date.now()-o;S(n,(null===(r=a.results)||void 0===r?void 0:r.length)||0,i)}catch(e){v(e instanceof Error?e.message:"Unknown error occurred"),d(null),u([])}finally{h(!1)}},[e.chatflowId,S,z]),M=ge(()=>{i.trim()&&$(i.trim())},[i,$]),A=ge(e=>{y||"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),M())},[M,y]),j=pe(()=>{if(!c.length)return[];let e=[...c];return f.categories&&f.categories.length>0&&(e=e.filter(e=>{var n,r;const o=null===(n=e.fileMetadata)||void 0===n?void 0:n.category,t=null===(r=e.fileMetadata)||void 0===r?void 0:r.subCategory;return f.categories.includes(o||"")||f.categories.includes(t||"")})),f.fileTypes&&f.fileTypes.length>0&&(e=e.filter(e=>f.fileTypes.includes(e.fileFormat))),e},[c,f]),q=pe(()=>j,[j]),I=ge(()=>{l(""),d(null),u([]),p({}),v(null);{const e=b.current;e&&"function"==typeof e.focus&&e.focus()}try{localStorage.removeItem(_)}catch(e){}o&&o()},[_,o]),D=e=>{p(e)},E=e=>{if(!i.trim())return W(k,{children:e});return W(k,{children:e.split(new RegExp(`(${i})`,"gi")).map((e,n)=>e.toLowerCase()===i.toLowerCase()?W(Vo,{children:e},n):W("span",{children:e},n))})},O=pe(()=>{if(!s)return[];return[{id:"all",label:"ja"===e.language?"すべて":"All",count:j.length},...s.facets.fileTypes.map(e=>({id:e.value,label:e.value.toUpperCase(),count:e.count}))]},[s,j.length,e.language]);return W(zo,{children:[s&&W(et,{"data-search-results-header":!0,children:[W(nt,{children:["ja"===e.language?"検索結果":"Search Results",": ",j.length.toLocaleString()," ","ja"===e.language?"件":"items",(null===(t=f.categories)||void 0===t?void 0:t.length)||(null===(a=f.fileTypes)||void 0===a?void 0:a.length)?W(rt,{children:"ja"===e.language?"フィルタ適用済":"Filtered"}):null]}),W(ot,{children:["ja"===e.language?"検索時間":"Search time",": ",s.searchTime,"ms"]})]}),s&&O.length>1&&W(Lo,{children:O.map(e=>W(Ho,{active:"all"===e.id||Boolean(f.fileTypes&&f.fileTypes.includes(e.id)),onClick:()=>{"all"===e.id?D({}):D({fileTypes:[e.id]})},children:[e.label,W(Uo,{children:["(",e.count,")"]})]},e.id))}),W(Bo,{children:g?W(Qo,{children:[W(Wo,{}),W(Zo,{children:"ja"===e.language?"検索中...":"Searching..."})]}):m?W(tt,{children:[W(at,{children:"⚠️"}),W(it,{children:"ja"===e.language?"検索エラー":"Search Error"}),W(lt,{children:m})]}):i&&0===j.length&&s?W(Go,{children:"ja"===e.language?`"${i}" に一致する結果が見つかりませんでした`:`No results found for "${i}"`}):q.length>0?W(k,{children:W(Jo,{children:q.map(n=>W(st,{children:W(dt,{children:[W(ct,{children:n.fileMetadata.url?W("a",{href:n.fileMetadata.url,target:"_blank",rel:"noopener noreferrer",children:E(n.fileMetadata.title||n.fileName)}):W("span",{children:E(n.fileMetadata.title||n.fileName)})}),W(ut,{children:[W("strong",{children:"ja"===e.language?"フォーマット:":"Format:"})," ",n.fileFormat.toUpperCase()]}),n.fileMetadata.body&&W(ft,{children:[W("strong",{children:"ja"===e.language?"本文:":"Content:"}),W(pt,{children:E(n.fileMetadata.body)})]})]})},n.fileId))})}):W(Ko,{children:[W(Yo,{children:"🔍"}),W(Xo,{children:"ja"===e.language?"検索キーワードを入力してください (Ctrl+Enter または ⌘+Enter で送信)":"Enter a search term to see results (Ctrl+Enter or ⌘+Enter to send)"})]})}),r&&W(Co,{children:W($o,{children:[W(Ao,{type:"button",active:"ask-ai"===(n||"ask-ai"),onClick:()=>r("ask-ai"),children:"ja"===e.language?"AIに質問":"Ask AI"}),W(Ao,{type:"button",active:"search"===n,onClick:()=>r("search"),children:"ja"===e.language?"検索":"Search"}),e.enableDeepResearch&&W(Ao,{type:"button",active:"deep-research"===n,onClick:()=>r("deep-research"),children:(e.language,"Deep Research")}),"search"===n&&(i||s)&&W(Mo,{type:"button",onClick:I,title:"ja"===e.language?"検索をクリア":"Clear search","aria-label":"ja"===e.language?"検索をクリア":"Clear search",disabled:g,children:W(ln,{size:14})})]})}),W(To,{children:W(jo,{children:W(qo,{children:[w.length>0&&W(Io,{children:[W(Do,{children:"ja"===e.language?"最近の検索":"Recent searches"}),W(Eo,{children:w.slice(0,8).map((e,n)=>W(Oo,{onClick:()=>{return l(n=e),void $(n);var n},children:e},n))})]}),W(No,{children:[W(Fo,{ref:b,value:i,onInput:e=>{(e=>{const n=e.target.value;l(n)})(e),(e=>{const n=e||b.current;if(!n)return;n.style.height="auto";const r=n.scrollHeight;n.style.height=`${r}px`,n.style.lineHeight=r<=32?"32px":"1.5"})(e.currentTarget)},onKeyDown:A,onCompositionStart:()=>x(!0),onCompositionEnd:()=>x(!1),placeholder:"ja"===e.language?"検索キーワードを入力... (Ctrl+Enter または ⌘+Enter で送信)":"Enter search keywords... (Ctrl+Enter or ⌘+Enter to send)",rows:1}),W(Ro,{onClick:M,"data-disabled":!i.trim()||g,title:"ja"===e.language?"検索 (Enter または Ctrl+Enter)":"Search (Enter or Ctrl+Enter)",type:"button",children:g?W(Po,{}):W(Be,{size:16,color:"white"})})]})]})})})]})}const zo=Re("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Co=Re("div")`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem 0.25rem; /* align underline position with ChatView */
  flex-shrink: 0;
  align-items: center; /* match ChatView */
  position: relative;
  z-index: 2; /* ensure tab underline renders above input separator */
`,$o=Re("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
`,Mo=Re("button")`
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
`,Ao=Re("button")`
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
`,jo=Re("div")`
  position: relative;
  width: 100%;
`,qo=Re("div")`
  position: relative;
  display: flex;
  flex-direction: column;
`,Io=Re("div")`
  padding: 0.25rem 0.25rem 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Do=Re("div")`
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.025em;
`,Eo=Re("div")`
  display: flex;
  gap: 0.375rem;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
`,Oo=Re("button")`
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
`,No=Re("div")`
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
`,Ro=Re("button")`
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
`,Fo=Re("textarea")`
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
`,To=Re("div")`
  position: relative;
  padding: 1rem 1.5rem; /* match ChatView InputArea spacing */
  border-top: 1px solid var(--askdona-border);
  flex-shrink: 0;
`,Po=Re("div")`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Lo=Re("div")`
  display: flex;
  gap: 1.5rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  overflow-x: auto;
  flex-shrink: 0;
  
  &::-webkit-scrollbar {
    height: 0;
  }
`,Ho=Re("button")`
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
`,Uo=Re("span")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin-left: 0.25rem;
`,Bo=Re("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1rem 1.5rem;
`,Jo=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* tighter spacing between cards */
`,Vo=Re("span")`
  background: rgba(var(--askdona-primary-rgb), 0.2);
  padding: 0 0.125rem;
  border-radius: 0.125rem;
  font-weight: 500;
`,Qo=Re("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`,Wo=Re("div")`
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--askdona-border);
  border-top-color: var(--askdona-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Zo=Re("p")`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
`,Go=Re("div")`
  text-align: center;
  padding: 3rem;
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
`,Ko=Re("div")`
  text-align: center;
  padding: 3rem;
`,Yo=Re("div")`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`,Xo=Re("p")`
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
  margin: 0;
`,et=Re("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  background: var(--askdona-surface);
`,nt=Re("h3")`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: var(--askdona-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,rt=Re("span")`
  background: var(--askdona-primary);
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 500;
`,ot=Re("p")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin: 0;
`,tt=Re("div")`
  text-align: center;
  padding: 3rem;
  color: var(--askdona-error);
`,at=Re("div")`
  font-size: 2rem;
  margin-bottom: 1rem;
`,it=Re("h3")`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--askdona-error);
`,lt=Re("p")`
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  margin: 0;
`,st=Re("div")`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 0; /* rely on ResultsList gap for spacing */
  transition: all 0.2s;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,dt=Re("div")`
  padding: 0.75rem; /* slightly tighter */
  display: flex;
  flex-direction: column;
  gap: 0.375rem; /* slightly tighter */
`,ct=Re("h4")`
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
`,ut=Re("p")`
  margin: 0; /* remove extra spacing */
  font-size: 0.75rem; /* smaller row text */
  color: var(--askdona-text-secondary); /* lighter overall */
  
  strong {
    color: var(--askdona-text-secondary); /* lighter label color */
    font-size: 0.6875rem; /* even smaller label text */
    opacity: 0.75; /* make label appear lighter */
  }
`,ft=Re("div")`
  margin-top: 0.5rem;
  
  strong {
    display: block;
    margin-bottom: 0.25rem;
    color: #202124;
    font-size: 0.875rem;
  }
`,pt=Re("p")`
  margin: 0;
  font-size: 0.875rem;
  color: #5f6368;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,gt=["follow-up","research-outline","search","extraction","new-angles","synthesis"],ht={planning:"research-outline",outline:"research-outline",brainstorming:"research-outline","collecting-sources":"search",collecting_sources:"search",sourcing:"search","source-analysis":"extraction","analyzing-sources":"extraction","report-drafting":"synthesis","drafting-report":"synthesis","finalizing-report":"synthesis"};function mt(e){if("number"==typeof e&&Number.isFinite(e))return e;if("string"==typeof e){const n=e.trim();if(!n)return null;const r=Number(n);return Number.isFinite(r)?r:null}return null}const vt={"follow-up":"依頼内容の整理","research-outline":"調査の計画",search:"情報収集",extraction:"情報分析","new-angles":"追加の調査",synthesis:"調査レポート作成"},bt={"follow-up":"ご質問の対象となる調査領域を特定しています","research-outline":"包括的な調査レポートを作成するための調査内容を作成しています",search:"インターネット上に公開されている情報を対象に情報を取得しています",extraction:"調査に必要な情報を特定し、分析しています","new-angles":"より多くの情報を収集しています",synthesis:"調査で収集した情報をもとに最終的なアウトプットを作成しています"},yt={"follow-up":W(sn,{className:"icon"}),"research-outline":W(an,{className:"icon"}),search:W(nn,{className:"icon"}),extraction:W(Ke,{className:"icon"}),"new-angles":W(Je,{className:"icon"}),synthesis:W(Ye,{className:"icon"})},kt={"Connecting with AskDona Servers...":"AskDonaサーバーに接続中...","Connected to AskDona Server":"AskDonaサーバーに接続しました","Analyzing requirements...":"要件を分析中...","Generating research plan...":"調査計画を生成中...","Creating execution strategy...":"実行戦略を作成中...","Starting research tasks...":"調査タスクを開始中...","Generating final report...":"最終レポートを生成中...","Creating visualizations...":"ビジュアライゼーションを作成中...","Creating final message...":"最終メッセージを作成中...","Deep research completed successfully":"Deep Researchが正常に完了しました","Error occurred during deep research":"Deep Research中にエラーが発生しました","Initializing research...":"調査を初期化中...","Processing research data...":"調査データを処理中...","Finalizing research results...":"調査結果を最終確認中...","Questionnaire ready for user.":"フォローアップ質問票にご回答ください。"};function xt({task:e,onRetry:n,progressOverride:r,stageOverride:o,statusOverride:t,messageOverride:a,updatedAtOverride:i}){var l,s,d,c,u,f,p,g,h,m;const v=function(e,n){var r,o;const t="number"==typeof n?n:null,a="number"==typeof e.progress?e.progress:mt(e.progress),i=e.progress_data?mt(e.progress_data.progress):null,l=null!==(o=null!==(r=null!=t?t:"number"==typeof a?a:null)&&void 0!==r?r:i)&&void 0!==o?o:0,s=l<=1?100*l:l;return Math.min(100,Math.max(0,s))}(e,r),b=("string"==typeof o&&""!==o.trim()?o:null!==(d=null!==(s=null===(l=e.progress_data)||void 0===l?void 0:l.stage)&&void 0!==s?s:e.stage)&&void 0!==d?d:null)||null,y="questionnaire_pending"===b?"follow-up":function(e){if(!e)return null;const n=e.trim();if(!n)return null;const r=ht[n.toLowerCase()];return null!=r?r:n}(b),k=null!=y?y:"questionnaire_pending"===b?"follow-up":b,x=null!=t?t:e.status,w=vt[k||""]||"Deep Research実行中",S=pe(()=>{var n,r,o;const t=null!==(o=null!==(r=null!=a?a:null===(n=e.progress_data)||void 0===n?void 0:n.message)&&void 0!==r?r:e.message)&&void 0!==o?o:"";if(k&&bt[k])return bt[k];if(kt[t])return kt[t];const i=t.match(/Completed (\d+) of (\d+) research tasks/);return i?`調査タスク${i[2]}件中${i[1]}件完了...`:t.startsWith("Failed to start job:")?t.replace("Failed to start job:","ジョブの開始に失敗しました:"):t||"依頼内容に基づいて調査を開始しています"},[a,e.message,null===(c=e.progress_data)||void 0===c?void 0:c.message,k]),_="failed"===x,z="completed"===x?"調査完了":"failed"===x?"調査中に問題が起こりました":w,C="failed"===x?null!==(p=null!==(f=null!=a?a:null===(u=e.progress_data)||void 0===u?void 0:u.message)&&void 0!==f?f:e.message)&&void 0!==p?p:"調査中にエラーが起こりました":"completed"===x?"調査が完了しました。調査結果を以下に表示します。":S;return W(_t,{"data-status":x,children:[W(zt,{children:[W("div",{children:[W(Ct,{children:z}),W($t,{children:C})]}),"in-progress"===x&&W(Mt,{"data-status":x,children:"調査中..."})]}),W(At,{children:[W(jt,{children:[W("span",{children:"調査ステータス"}),W(qt,{children:[Math.round(v),"%"]})]}),W(It,{children:W(Dt,{style:{width:`${Math.round(v)}%`},"data-status":x})}),W(Et,{children:gt.map(e=>W(Ot,{"data-state":wt(e,k),children:[W("span",{className:"icon",children:yt[e]}),W("span",{children:vt[e]})]},e))})]}),W(Nt,{"data-status":x,children:[W(Rt,{children:yt[k||"synthesis"]||W(on,{className:"icon"})}),W(Ft,{children:[W(Tt,{children:w}),W(Pt,{children:S}),W(Lt,{children:["更新日時: ",St(null!==(h=null!=i?i:null===(g=e.progress_data)||void 0===g?void 0:g.timestamp)&&void 0!==h?h:e.updated_at)]})]})]}),_&&W(Ht,{children:[W(pn,{className:"icon"}),W("div",{children:[W("strong",{children:"調査が完了できませんでした"}),W("p",{children:null!==(m=null!=a?a:e.message)&&void 0!==m?m:"時間をおいて再度お試しください。"})]}),W(Ut,{onClick:n,children:"再試行"})]})]})}function wt(e,n){if(!n)return"idle";if(e===n)return"current";const r=gt.indexOf(n),o=gt.indexOf(e);return-1===r||-1===o?"idle":o<r?"done":"idle"}function St(e){return e?new Date(e).toLocaleString("ja-JP"):"-"}const _t=Re("div")`
  border: 1px solid var(--askdona-border);
  border-radius: 18px;
  background: var(--askdona-background);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-size: var(--rag-dr-font-body, 0.76rem);
`,zt=Re("div")`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`,Ct=Re("h3")`
  margin: 0;
  font-size: var(--rag-dr-font-subheading, 0.8rem);
  font-weight: 600;
  color: var(--askdona-text);
`,$t=Re("p")`
  margin: 0.2rem 0 0;
  font-size: var(--rag-dr-font-small, 0.7rem);
  color: var(--askdona-text-secondary);
`,Mt=Re("span")`
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
`,At=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,jt=Re("div")`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  color: var(--askdona-text-secondary);
  span {
    font-size: var(--rag-dr-font-subheading, 0.8rem);
  }
`,qt=Re("span")`
  font-size: var(--rag-dr-font-progress, 1.6rem);
  font-weight: 700;
  color: var(--askdona-text);
`,It=Re("div")`
  height: 10px;
  border-radius: 999px;
  background: rgba(var(--askdona-primary-rgb, 16, 49, 111), 0.12);
  overflow: hidden;
`,Dt=Re("div")`
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
`,Et=Re("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,Ot=Re("div")`
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
`,Nt=Re("div")`
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
`,Rt=Re("div")`
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
`,Ft=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,Tt=Re("div")`
  font-size: var(--rag-dr-font-subheading, 0.8rem);
  font-weight: 600;
  color: var(--askdona-text);
`,Pt=Re("p")`
  margin: 0;
  font-size: var(--rag-dr-font-small, 0.7rem);
  line-height: 1.5;
  color: var(--askdona-text-secondary);
`,Lt=Re("span")`
  font-size: var(--rag-dr-font-xs, 0.62rem);
  color: var(--askdona-text-secondary);
`,Ht=Re("div")`
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
`,Ut=Re("button")`
  margin-left: auto;
  border: none;
  border-radius: 999px;
  padding: 0.55rem 1.2rem;
  background: var(--askdona-error, #dc2626);
  color: var(--askdona-background, #ffffff);
  font-weight: 600;
  font-size: var(--rag-dr-font-body, 0.76rem);
  cursor: pointer;
`;const Bt="フォローアップ質問",Jt="以下の質問に回答すると、Deep Research が自動的に進行します。",Vt="combinedAnswer";function Qt(e,n){var r,o,t,a,i,l;if("string"==typeof e)return{id:`question-${n+1}`,prompt:e.trim()||`質問 ${n+1}`,required:!0};const s=null!==(t=null!==(o=null!==(r=e.text)&&void 0!==r?r:e.question)&&void 0!==o?o:e.prompt)&&void 0!==t?t:`質問 ${n+1}`;return{id:null!==(a=e.id)&&void 0!==a?a:`question-${n+1}`,prompt:s,placeholder:e.placeholder,required:Boolean(null===(l=null!==(i=e.required)&&void 0!==i?i:e.isRequired)||void 0===l||l),helpText:e.helpText}}function Wt({questionnaireJson:e,onSubmit:n,isReadOnly:r=!1,isSubmitLocked:o=!1,submitLockLabel:t,submittedAnswers:a}){var i;const[l,s]=de(null),[d,c]=de(""),[u,f]=de(null),[p,g]=de(null),[h,m]=de(!1);ce(()=>{if(!e||""===e.trim())return g("質問票データが提供されていません。"),void s(null);try{const n=function(e){var n,r,o,t;if(!e)throw new Error("質問票データが空です");if("string"==typeof e){const n=e.trim();if(!n)throw new Error("質問票データが空です");return{title:Bt,introduction:Jt,questions:[Qt(n,0)]}}if(Array.isArray(e)){if(0===e.length)throw new Error("質問票に質問が含まれていません");return{title:Bt,introduction:Jt,questions:e.map((e,n)=>Qt(e,n))}}const a=e,i=(null===(n=a.title)||void 0===n?void 0:n.trim())||Bt,l=(null===(r=a.introduction)||void 0===r?void 0:r.trim())||(null===(o=a.description)||void 0===o?void 0:o.trim())||Jt,s=Array.isArray(a.questions)?a.questions:[];if(0===s.length)throw new Error("質問票に質問が含まれていません");return{title:i,introduction:l,estimatedCompletionTime:(null===(t=a.estimatedCompletionTime)||void 0===t?void 0:t.trim())||void 0,questions:s.map((e,n)=>Qt(e,n))}}(JSON.parse(e));s(n),g(null),c(function(e,n){return n?"string"==typeof n[Vt]?n[Vt]:e.questions.map((e,r)=>{const o=n[e.id];return o&&"string"==typeof o&&o.trim()?`${r+1}. ${o.trim()}`:null}).filter(Boolean).join("\n\n"):""}(n,a)),f(null)}catch(e){g(e instanceof Error?e.message:"質問票データの解析に失敗しました。"),s(null),c("")}},[e,a]);const v=pe(()=>{if(!l)return!1;return!(l.questions.some(e=>!1!==e.required)&&!r)||d.trim().length>0},[d,l,r]),b=ge(e=>{c(e),u&&f(null)},[u]),y=ge(async e=>{if(e.preventDefault(),r||o||h||!l)return;if(l.questions.some(e=>!1!==e.required)&&0===d.trim().length)f("この項目は必須です");else try{m(!0);const e=function(e,n){const r=["#### 調査質問票への回答",""];return r.push("**質問一覧:**"),r.push(""),e.questions.forEach((e,n)=>{r.push(`${n+1}. ${e.prompt}`)}),r.push(""),r.push("**回答:**"),r.push(""),r.push(n.trim()?n.trim():"回答がありません"),r.push(""),r.join("\n")}(l,d);await n(e)}catch(e){}finally{m(!1)}},[d,r,o,h,n,l]),k=ge(e=>{if(!e.metaKey&&!e.ctrlKey||"Enter"!==e.key)return;if(r||o||h||!l)return;e.preventDefault();const n=e.currentTarget,t=(null==n?void 0:n.form)||null;t?"function"==typeof t.requestSubmit?t.requestSubmit():t.dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0})):y(e)},[y,r,o,h,l]);return p?W(va,{children:[W(ba,{children:W(pn,{size:20})}),W(ya,{children:[W(ka,{children:"質問票の読み込み中に問題が発生しました"}),W(xa,{children:p||"時間をおいて再度お試しください。"})]})]}):l?W(Zt,{children:[W(Gt,{children:[W(Kt,{children:W(an,{size:18})}),W(Yt,{children:[W(Xt,{children:[l.title,r&&W(ea,{children:"送信済み"})]}),W(na,{children:null!==(i=l.introduction)&&void 0!==i?i:Jt}),W(ra,{children:"回答は任意ですが、背景や目的を詳しく共有いただくと、より的確な調査が可能になります。"}),l.estimatedCompletionTime&&W(oa,{children:[W(Ze,{size:14}),W("span",{children:l.estimatedCompletionTime})]})]})]}),W("form",{onSubmit:y,children:[W(ta,{children:W(aa,{children:[W(ia,{children:`フォローアップ質問 (${l.questions.length} 件)`}),W(la,{children:W("ul",{children:l.questions.map((e,n)=>W("li",{children:[W("span",{className:"question-index",children:[n+1,"."]}),W("span",{className:"question-text",children:e.prompt})]},e.id))})})]})}),W(da,{children:[W(ca,{children:[l.questions.some(e=>!1!==e.required)?"上記の質問にまとめて回答してください":"任意回答 (必要に応じてご記入ください)",!r&&l.questions.some(e=>!1!==e.required)&&W(sa,{children:"*"})]}),W(ua,{value:d,onInput:e=>b(e.target.value),onKeyDown:k,placeholder:"質問への回答をこちらにご入力ください (Ctrl+Enter または ⌘+Enter で送信)",rows:6,disabled:r||h,"data-error":u?"true":"false"}),u&&W(fa,{children:u})]}),!r&&W(pa,{children:[W(ga,{type:"submit",disabled:!v||h,"data-locked":o&&!h?"true":"false",children:h?"送信中...":"調査質問票を送信"}),o&&t&&!h&&W(ha,{children:[W(Ze,{size:14}),W("span",{children:t})]})]}),r&&W(ma,{children:[W(We,{size:16}),W("span",{children:"送信済みの回答を表示しています"})]})]})]}):W(wa,{children:[W(an,{size:18}),W("span",{children:"質問票を読み込んでいます..."})]})}const Zt=Re("div")`
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
`,Gt=Re("div")`
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border-bottom: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  background: var(--askdona-surface, #ffffff);
`,Kt=Re("div")`
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
`,Yt=Re("div")`
  flex: 1;
`,Xt=Re("h3")`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--askdona-text, #0f172a);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ea=Re("span")`
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.7rem;
  background: rgba(var(--askdona-success-rgb, 16, 185, 129), 0.12);
  color: rgba(var(--askdona-success-rgb, 16, 185, 129), 0.8);
  border: 1px solid rgba(var(--askdona-success-rgb, 16, 185, 129), 0.35);
`,na=Re("p")`
  margin: 0.35rem 0 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--askdona-text-secondary, #475569);
`,ra=Re("p")`
  margin: 0.5rem 0 0;
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--askdona-text-secondary, #64748b);
`,oa=Re("div")`
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
`,aa=Re("div")`
  padding: 1.25rem;
  border-radius: 14px;
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.1));
  background: var(--askdona-surface, #ffffff);
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.05);
`,ia=Re("div")`
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--askdona-text-secondary, #475569);
  margin-bottom: 0.6rem;
`,la=Re("div")`
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
`,sa=Re("span")`
  color: var(--askdona-error, #dc2626);
  margin-left: 0.35rem;
`,da=Re("div")`
  padding: 0 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`,ca=Re("div")`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--askdona-text, #0f172a);
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,ua=Re("textarea")`
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
`,fa=Re("div")`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--askdona-error, #dc2626);
`,pa=Re("div")`
  padding: 1.25rem 1.5rem 1.6rem;
  border-top: 1px solid rgba(15, 23, 42, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`,ga=Re("button")`
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
`,ha=Re("div")`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--askdona-text-secondary, #475569);
`,ma=Re("div")`
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
`,va=Re("div")`
  border-radius: 16px;
  border: 1px solid rgba(var(--askdona-error-rgb, 239, 68, 68), 0.3);
  background: rgba(var(--askdona-error-rgb, 239, 68, 68), 0.12);
  padding: 1rem 1.2rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,ba=Re("div")`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: rgba(var(--askdona-error-rgb, 239, 68, 68), 0.2);
  color: var(--askdona-error, #dc2626);
  display: flex;
  align-items: center;
  justify-content: center;
`,ya=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,ka=Re("div")`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--askdona-error, #dc2626);
`,xa=Re("div")`
  font-size: 0.85rem;
  color: var(--askdona-error, #dc2626);
`,wa=Re("div")`
  border-radius: 16px;
  border: 1px dashed rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.3);
  padding: 1.1rem 1.3rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--askdona-text-secondary, #475569);
  font-size: 0.85rem;
`,Sa=["analyzing_topic","probing_searches","preparing_questionnaire","questionnaire_ready"],_a={analyzing_topic:{icon:e=>W(rn,{...e}),label:{ja:"調査トピックを分析中",en:"Analyzing the topic"},description:{ja:"調査要件と目的を整理しています。",en:"Reviewing your request to understand the research focus."}},probing_searches:{icon:e=>W(sn,{...e}),label:{ja:"探索的検索を実行中",en:"Running exploratory searches"},description:{ja:"関連情報を特定するための探索を行っています。",en:"Exploring knowledge sources to surface useful context."}},preparing_questionnaire:{icon:e=>W(an,{...e}),label:{ja:"質問を準備中",en:"Preparing clarifying questions"},description:{ja:"調査精度を高める質問票を生成しています。",en:"Drafting targeted follow-up questions before starting research."}},questionnaire_ready:{icon:e=>W(We,{...e}),label:{ja:"質問の準備が完了しました",en:"Questionnaire is ready"},description:{ja:"質問票への回答をお待ちしています。",en:"Please answer the questionnaire to continue."}}},za={ja:{preparingTitle:"質問票を準備しています",preparingSubtitle:"調査開始前に必要なフォローアップ質問を生成しています。",readyTitle:"質問票の準備ができました",readySubtitle:"以下の質問に回答すると調査が自動的に開始されます。",failureTitle:"質問票の生成に失敗しました",failureSubtitle:"しばらく待ってからもう一度お試しください。",progressLabel:"進捗",stagesLabel:"準備ステップ",updatedAtLabel:"更新日時",fallbackMessage:"質問票が生成されるまで少々お待ちください。",activeChip:"生成中...",readyChip:"準備完了",failedChip:"エラー",waitingStatus:"接続中"},en:{preparingTitle:"Preparing follow-up questionnaire",preparingSubtitle:"We are generating focused questions before the research begins.",readyTitle:"Questionnaire is ready",readySubtitle:"Answer the questions below to automatically continue the research.",failureTitle:"Failed to build questionnaire",failureSubtitle:"Please wait a moment and try again.",progressLabel:"Progress",stagesLabel:"Preparation steps",updatedAtLabel:"Last updated",fallbackMessage:"Please hold tight while we prepare the questionnaire.",activeChip:"Preparing…",readyChip:"Ready",failedChip:"Error",waitingStatus:"Connecting"}},Ca={"follow-up":"analyzing_topic",questionnaire_pending:"preparing_questionnaire",questionnaire_ready:"questionnaire_ready","research-outline":"probing_searches",search:"probing_searches",extraction:"preparing_questionnaire","new-angles":"preparing_questionnaire"},$a={"Connecting with AskDona Servers...":{ja:"AskDonaサーバーに接続中...",en:"Connecting with AskDona servers…"},"Connected to AskDona Server":{ja:"AskDonaサーバーに接続しました",en:"Connected to AskDona server"},"Analyzing topic...":{ja:"トピックを分析中...",en:"Analyzing the topic…"},"Analyzing the research topic to identify key themes.":{ja:"主要なテーマを特定するために調査トピックを分析しています。",en:"Analyzing the research topic to identify key themes."},"Performing probing searches on internal documents.":{ja:"関連情報を特定するために探索的検索を実行しています。",en:"Performing probing searches on internal documents."},"Preparing clarifying questions based on findings.":{ja:"調査結果に基づいてフォローアップ質問を準備しています。",en:"Preparing clarifying questions based on findings."},"Questionnaire Ready":{ja:"質問票の準備が完了しました",en:"Questionnaire ready"},"Initializing Deep Research...":{ja:"Deep Researchを初期化しています...",en:"Initializing deep research…"},"Initializing research environment...":{ja:"調査環境を初期化中...",en:"Initializing the research environment…"},"Processing your request...":{ja:"リクエストを処理しています...",en:"Processing your request…"},"Finalizing questionnaire...":{ja:"質問票を最終確認中...",en:"Finalizing questionnaire…"}};function Ma({task:e,isJapanese:n=!0,progressOverride:r,stageOverride:o,statusOverride:t,messageOverride:a,updatedAtOverride:i}){var l,s,d;const c=n?"ja":"en",u=za[c],f="number"==typeof r?r:"number"==typeof(null==e?void 0:e.progress)?e.progress:(null==e?void 0:e.progress_data)?(e=>{if("number"==typeof e&&Number.isFinite(e))return e;if("string"==typeof e){const n=e.trim();if(!n)return null;const r=Number(n);return Number.isFinite(r)?r:null}return null})(e.progress_data.progress):null,p="number"==typeof f?f:null,g=null!==p?Math.min(100,Math.max(0,p<=1?100*p:p)):null,h="failed"===(null!=t?t:null==e?void 0:e.status)||"questionnaire_generation_failed"===(null!=o?o:null==e?void 0:e.stage),m="questionnaire_ready"===(null!=t?t:null==e?void 0:e.status),v=pe(()=>{var n,r,t;if(m)return"questionnaire_ready";const a=null!==(t=null!==(r=null!=o?o:null===(n=null==e?void 0:e.progress_data)||void 0===n?void 0:n.stage)&&void 0!==r?r:null==e?void 0:e.stage)&&void 0!==t?t:null;return a&&Ca[a]?Ca[a]:null!==g?g>=75?"preparing_questionnaire":g>=35?"probing_searches":"analyzing_topic":"analyzing_topic"},[null==e?void 0:e.stage,m,g]),b=Sa.indexOf(v),y=b>=0?b:0,k=pe(()=>{if(h)return null!==g?g:0;if(m)return 100;if(null!==g)return Math.max(5,Math.min(99,g));const e=Math.round(y/(Sa.length-1)*100);return Math.max(10,Math.min(95,e))},[g,y,m,h]),x=pe(()=>{var n,r,o,t;const i=(null!==(o=null!==(r=null!=a?a:null===(n=null==e?void 0:e.progress_data)||void 0===n?void 0:n.message)&&void 0!==r?r:null==e?void 0:e.message)&&void 0!==o?o:"").trim();if(!i)return u.fallbackMessage;const l=(null===(t=i.split("\n")[0])||void 0===t?void 0:t.trim())||i,s=$a[l];return s?s[c]:l},[null==e?void 0:e.message,c,u.fallbackMessage]),w=_a[v],S=x||w.description[c],_=h?u.failureTitle:m?u.readyTitle:u.preparingTitle,z=h?u.failureSubtitle:m?u.readySubtitle:u.preparingSubtitle,C=h?u.failedChip:m?u.readyChip:u.activeChip,$=h?"failed":m?"ready":"active",M=null!==(d=null!==(s=null!=i?i:null===(l=null==e?void 0:e.progress_data)||void 0===l?void 0:l.timestamp)&&void 0!==s?s:null==e?void 0:e.updated_at)&&void 0!==d?d:null,A=M?new Date(M).toLocaleString(n?"ja-JP":void 0):"—";return W(Aa,{"data-status":$,children:[W(ja,{children:[W("div",{children:[W(qa,{children:_}),W(Ia,{children:z})]}),W(Da,{"data-variant":$,children:C})]}),W(Ea,{children:[W(Oa,{children:[W("span",{children:u.progressLabel}),W("strong",{children:[Math.round(k),"%"]})]}),W(Na,{children:W(Ra,{"data-status":$,style:{width:`${Math.round(k)}%`}})})]}),W(Fa,{children:u.stagesLabel}),W(Ta,{children:Sa.map((e,n)=>{const r=_a[e],o=function(e,n,r){if(e<n)return"done";if(e===n)return r?"done":"current";return r?"done":"upcoming"}(n,y,m);return W(Pa,{"data-state":o,children:[W(La,{"data-state":o,children:r.icon({className:"icon"})}),W(Ha,{children:[W(Ua,{children:r.label[c]}),W(Ba,{children:r.description[c]})]})]},e)})}),W(Ja,{"data-status":$,children:[W(Va,{children:w.icon({className:"icon"})}),W(Qa,{children:[W(Wa,{children:w.label[c]}),W(Za,{children:S||u.fallbackMessage}),W(Ga,{children:[W(Ze,{size:14}),W("span",{children:[u.updatedAtLabel,": ",A]})]})]})]}),h&&W(Ka,{children:[W(pn,{size:18}),W("div",{children:[W("strong",{children:u.failureTitle}),W("p",{children:S})]})]})]})}const Aa=Re("div")`
  border: 1px solid var(--askdona-border);
  border-radius: 18px;
  background: var(--askdona-background);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-size: var(--rag-dr-font-body, 0.76rem);
`,ja=Re("div")`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`,qa=Re("h3")`
  margin: 0;
  font-size: var(--rag-dr-font-title, 0.92rem);
  font-weight: 600;
  color: var(--askdona-text);
`,Ia=Re("p")`
  margin: 0.2rem 0 0;
  font-size: var(--rag-dr-font-subheading, 0.8rem);
  color: var(--askdona-text-secondary);
`,Da=Re("span")`
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
`,Ea=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Oa=Re("div")`
  display: flex;
  justify-content: space-between;
  font-size: var(--rag-dr-font-body, 0.76rem);
  color: var(--askdona-text-secondary);

  strong {
    color: var(--askdona-text);
    font-size: var(--rag-dr-font-heading, 0.88rem);
  }
`,Na=Re("div")`
  position: relative;
  height: 8px;
  background: rgba(var(--askdona-primary-rgb, 37, 99, 235), 0.1);
  border-radius: 999px;
  overflow: hidden;
`,Ra=Re("div")`
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
`,Fa=Re("div")`
  font-size: var(--rag-dr-font-small, 0.7rem);
  font-weight: 600;
  color: var(--askdona-text-secondary);
  letter-spacing: 0.01em;
`,Ta=Re("div")`
  display: grid;
  gap: 0.75rem;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Pa=Re("div")`
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
`,La=Re("div")`
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
`,Ha=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Ua=Re("div")`
  font-size: var(--rag-dr-font-subheading, 0.8rem);
  font-weight: 600;
  color: var(--askdona-text);
`,Ba=Re("div")`
  font-size: var(--rag-dr-font-small, 0.7rem);
  color: var(--askdona-text-secondary);
`,Ja=Re("div")`
  display: flex;
  gap: 0.85rem;
  padding: 1rem;
  border-radius: 14px;
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  background: var(--askdona-surface, #ffffff);
  align-items: flex-start;
`,Va=Re("div")`
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
`,Qa=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,Wa=Re("div")`
  font-weight: 600;
  font-size: var(--rag-dr-font-heading, 0.88rem);
  color: var(--askdona-text);
`,Za=Re("p")`
  margin: 0;
  font-size: var(--rag-dr-font-subheading, 0.8rem);
  color: var(--askdona-text-secondary);
  line-height: 1.5;
  white-space: pre-line;
`,Ga=Re("div")`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: var(--rag-dr-font-small, 0.7rem);
  color: var(--askdona-text-secondary);

  svg {
    width: 14px;
    height: 14px;
  }
`,Ka=Re("div")`
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
`;function Ya(){try{const e={userAgent:navigator.userAgent||"",language:navigator.language||"",screenResolution:`${screen.width}x${screen.height}`,timezoneOffset:(new Date).getTimezoneOffset(),platform:navigator.platform||"",cookieEnabled:navigator.cookieEnabled,localStorageEnabled:(()=>{try{const e="__localStorage_test__";return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}})()},n=document.createElement("canvas"),r=n.getContext("2d");let o="";r&&(n.width=200,n.height=50,r.textBaseline="alphabetic",r.fillStyle="#f60",r.fillRect(125,1,62,20),r.fillStyle="#069",r.font="11pt Arial",r.fillText("AskDona Browser Fingerprint 🔍",2,15),r.fillStyle="rgba(102, 204, 0, 0.7)",r.font="18pt Arial",r.fillText("Deep Research",4,45),o=n.toDataURL().substring(0,100));const t=[e.userAgent,e.language,e.screenResolution,e.timezoneOffset.toString(),e.platform,e.cookieEnabled.toString(),e.localStorageEnabled.toString(),o].join("|");let a=0;for(let e=0;e<t.length;e++){a=(a<<5)-a+t.charCodeAt(e),a&=a}return`fp_${Math.abs(a).toString(36).padStart(8,"0")+Date.now().toString(36).slice(-4)}`}catch(e){return`fp_${Math.random().toString(36).substring(2,15)}`}}class Xa{constructor(){this.browserFingerprint=this.getOrCreateFingerprint()}getOrCreateFingerprint(){const e="askdona_browser_fingerprint";try{let n=localStorage.getItem(e);return n||(n=Ya(),localStorage.setItem(e,n)),n}catch(e){return Ya()}}getBrowserFingerprint(){return this.browserFingerprint}checkLocalLimits(e,n){const r=[];let o,t=!0;for(const a of n){const n=this.checkSingleLocalLimit(e,a);r.push(n),!n.allowed&&t&&(t=!1,o=n.limitType)}return{allowed:t,blockedBy:o,localChecks:r}}checkSingleLocalLimit(e,n){const r=this.getLimitKey(n),o=`${Xa.STORAGE_PREFIX}${e}_${r}`;let t=this.getLimitData(o);new Date(t.resetTime)<=new Date&&(t=this.createNewLimitPeriod(n),this.saveLimitData(o,t));const a=t.count<n.limit;return{limitType:this.getLimitTypeString(n),allowed:a,currentCount:t.count,maxCount:n.limit,resetTime:new Date(t.resetTime)}}recordLocalUsage(e,n){for(const r of n){const n=this.getLimitKey(r),o=`${Xa.STORAGE_PREFIX}${e}_${n}`,t=this.getLimitData(o);t.count++,this.saveLimitData(o,t)}}getTodayUsage(e){const n=`${Xa.STORAGE_PREFIX}${e}_daily`,r=this.getLimitData(n);return new Date(r.resetTime)>new Date?r.count:0}clearLocalLimits(e){try{const n=[];for(let r=0;r<localStorage.length;r++){const o=localStorage.key(r);o&&o.startsWith(`${Xa.STORAGE_PREFIX}${e}_`)&&n.push(o)}n.forEach(e=>localStorage.removeItem(e))}catch(e){}}getLimitData(e){try{const n=localStorage.getItem(e);if(n)return JSON.parse(n)}catch(e){}return{count:0,resetTime:new Date(Date.now()+864e5).toISOString(),period:"daily"}}saveLimitData(e,n){try{localStorage.setItem(e,JSON.stringify(n))}catch(e){}}createNewLimitPeriod(e){return{count:0,resetTime:this.calculateNextLocalReset(e).toISOString(),period:this.getLimitKey(e)}}calculateNextLocalReset(e){const n=new Date,r=new Date(n);switch(e.period){case"daily":r.setDate(n.getDate()+1),r.setHours(0,0,0,0);break;case"weekly":const o=(8-n.getDay())%7||7;r.setDate(n.getDate()+o),r.setHours(0,0,0,0);break;case"monthly":r.setMonth(n.getMonth()+1,1),r.setHours(0,0,0,0);break;case"yearly":r.setFullYear(n.getFullYear()+1,0,1),r.setHours(0,0,0,0);break;default:e.customDays&&(r.setDate(n.getDate()+e.customDays),r.setHours(0,0,0,0))}return r}getLimitKey(e){return e.customDays?`custom_${e.customDays}d`:e.period}getLimitTypeString(e){return e.customDays?`custom-${e.customDays}d`:e.period}}Xa.STORAGE_PREFIX="askdona_browser_limit_";const ei="askdona.ragDeepResearch",ni=(e,n)=>`${ei}.${e}.${n}`,ri=e=>`${ei}.${e}.__index__`,oi=e=>{let n=0;for(let r=0;r<e.length;r+=1)n=(n<<5)-n+e.charCodeAt(r),n|=0;return(n>>>0).toString(16)},ti=e=>{const n=(e=>{var n,r,o,t;const{version:a,chatflowId:i,sessionId:l,userQuestion:s,phase:d,questionnaireJson:c,questionnaireSignature:u,questionnaireSummary:f,finalReport:p,currentTask:g,lastUpdated:h}=e,m={version:a,chatflowId:i,sessionId:l,lastUpdated:h,phase:null!=d?d:null,userQuestion:null!=s?s:null,questionnaireJsonHash:c?oi(c):null,questionnaireSignature:null!=u?u:null,questionnaireSummary:f?{submittedAt:f.submittedAt,responseHash:oi(f.formattedMarkdown)}:null,finalReport:p?{createdAt:p.createdAt,completionMessage:null!==(n=p.completionMessage)&&void 0!==n?n:null,contentHash:oi(p.content),rawContentHash:oi(p.rawContent)}:null,currentTask:g?{id:g.id,status:g.status,stage:g.stage,progress:null!==(r=g.progress)&&void 0!==r?r:null,updated_at:g.updated_at,research_id:null!==(o=g.research_id)&&void 0!==o?o:null,questionnaire_signature:null!==(t=g.questionnaire_signature)&&void 0!==t?t:null}:null};return JSON.stringify(m)})(e);return oi(n)},ai=e=>{if("undefined"==typeof window)return[];const n=localStorage.getItem(ri(e));if(!n)return[];try{const r=JSON.parse(n);return Array.isArray(r)?r.filter(e=>"string"==typeof(null==e?void 0:e.sessionId)):(localStorage.removeItem(ri(e)),[])}catch(n){return localStorage.removeItem(ri(e)),[]}},ii=(e,n)=>{if("undefined"==typeof window)return;const r=ri(e);if(n.length)try{localStorage.setItem(r,JSON.stringify(n.slice(0,25)))}catch(e){}else localStorage.removeItem(r)},li=(e,n)=>{if("undefined"==typeof window)return;const r=ai(e).filter(e=>e.sessionId!==n);ii(e,r)};function si(e,n){if("undefined"==typeof window)return null;const r=localStorage.getItem(ni(e,n));if(!r)return li(e,n),null;try{const o=JSON.parse(r);if(!o)return null;if(1!==o.version)return localStorage.removeItem(ni(e,n)),li(e,n),null;if(!o.integrity)return localStorage.removeItem(ni(e,n)),li(e,n),null;const{integrity:t,...a}=o;return t!==ti(a)?(localStorage.removeItem(ni(e,n)),li(e,n),null):o}catch(r){return localStorage.removeItem(ni(e,n)),li(e,n),null}}function di(e,n,r){if("undefined"==typeof window)return;const o=ni(e,n);if(!r)return localStorage.removeItem(o),void li(e,n);try{const n={...r,lastUpdated:(new Date).toISOString()},t=ti(n),a={...n,integrity:t};localStorage.setItem(o,JSON.stringify(a)),((e,n)=>{var r,o,t;if("undefined"==typeof window)return;const a=ai(e).filter(e=>e.sessionId!==n.sessionId),i=[{sessionId:n.sessionId,lastUpdated:n.lastUpdated,userQuestion:n.userQuestion,phase:null!==(r=n.phase)&&void 0!==r?r:null,finalReportCreatedAt:null!==(t=null===(o=n.finalReport)||void 0===o?void 0:o.createdAt)&&void 0!==t?t:null,hasFinalReport:Boolean(n.finalReport)},...a].sort((e,n)=>e.lastUpdated||n.lastUpdated?e.lastUpdated?n.lastUpdated?n.lastUpdated.localeCompare(e.lastUpdated):-1:1:0);ii(e,i)})(e,n)}catch(e){}}function ci(e,n){const r=si(e,n);return r?r.sessionId!==n?null:r:null}function ui(e,n){if("undefined"==typeof window)return;if(n)return localStorage.removeItem(ni(e,n)),void li(e,n);ai(e).forEach(n=>{localStorage.removeItem(ni(e,n.sessionId))}),localStorage.removeItem(ri(e))}function fi(e){return ai(e).map(e=>{var n,r;return{sessionId:e.sessionId,userQuestion:e.userQuestion,lastUpdated:e.lastUpdated,finalReportCreatedAt:null!==(n=e.finalReportCreatedAt)&&void 0!==n?n:null,hasFinalReport:Boolean(e.hasFinalReport),phase:null!==(r=e.phase)&&void 0!==r?r:null}})}const pi="DEEP_RESEARCH:COMPLETED",gi="***DEEP_RESEARCH_COMPLETION_CONTAINER_START***",hi="***DEEP_RESEARCH_COMPLETION_CONTAINER_END***",mi="\x3c!-- VISUALIZATION_DATA_START --\x3e",vi="\x3c!-- VISUALIZATION_DATA_END --\x3e",bi="***DEEP_RESEARCH_QUESTIONNAIRE_START***",yi="***DEEP_RESEARCH_QUESTIONNAIRE_END***",ki="DEEP_RESEARCH:FOLLOWUP_QUESTIONS",xi=32,wi=["pending","in-progress","questionnaire_pending","questionnaire_ready"],Si=new Set(["pending","in-progress","questionnaire_pending"]),_i=new Set(["pending","in-progress"]),zi=new Set(["questionnaire_pending","questionnaire_ready"]),Ci=new Set(["follow-up","analyzing_topic","probing_searches","preparing_questionnaire","questionnaire_pending","questionnaire_ready","questionnaire_generation_failed"]),$i=new Set(["follow-up","analyzing_topic","probing_searches","preparing_questionnaire","questionnaire_pending"]),Mi=Re("div")`
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
`,Ai=Re("div")`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`,ji=Re("div")`
  margin-bottom: 2rem;
`,qi=Re("div")`
  background: var(--askdona-surface, #ffffff);
  border-radius: 12px;
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  padding: 1.5rem;
  margin-bottom: 2rem;
`,Ii=Re("p")`
  margin: 0.4rem 0 0;
  color: var(--askdona-text-secondary, #6b7280);
  font-size: var(--rag-dr-font-subheading, 0.8rem);
`,Di=Re("div")`
  padding: 1rem;
  border: 1px dashed var(--askdona-border, rgba(71, 85, 105, 0.35));
  border-radius: 8px;
  color: var(--askdona-text-secondary, #6b7280);
  text-align: center;
  font-size: var(--rag-dr-font-subheading, 0.8rem);
`,Ei=Re("p")`
  margin-top: 0.75rem;
  font-size: var(--rag-dr-font-body, 0.76rem);
  color: var(--askdona-text-secondary, #6b7280);
`,Oi=Re("p")`
  margin-top: 0.75rem;
  font-size: var(--rag-dr-font-body, 0.76rem);
  color: var(--askdona-error, #dc2626);
`;function Ni(e,n,r){return!(!e||!zi.has(e))||(!(!n||!Ci.has(n))||"questionnaire"===r)}const Ri={planning:"research-outline",outline:"research-outline","research-plan":"research-outline",brainstorming:"research-outline","collecting-sources":"search",collecting_sources:"search",sourcing:"search","source-collection":"search","source-analysis":"extraction","analyzing-sources":"extraction",analysis:"extraction","report-drafting":"synthesis","drafting-report":"synthesis","finalizing-report":"synthesis"};function Fi(e){if("string"!=typeof e)return null;const n=e.trim();if(!n)return null;const r=Ri[n.toLowerCase()];return null!=r?r:n}function Ti(e){const n=function(e){if("string"!=typeof e)return null;const n=e.trim();return n?n.toLowerCase():null}(e);return!!n&&$i.has(n)}function Pi(e){var n,r,o;if("number"==typeof e&&Number.isFinite(e))return e;if("string"==typeof e){const n=e.trim();if(!n)return null;const r=Number(n);return Number.isFinite(r)?r:null}if(e&&"object"==typeof e){const t=null!==(o=null!==(r=null!==(n=e.progress)&&void 0!==n?n:e.value)&&void 0!==r?r:e.percentage)&&void 0!==o?o:null;if(void 0!==t)return Pi(t)}return null}function Li(e){return"number"==typeof e&&Number.isFinite(e)?e>=100?100:e<=0&&e<.5?0:e:null}function Hi(e){if(!e)return null;const n=Li(Pi(e.progress));return null!==n?n:e.progress_data?Li(Pi(e.progress_data.progress)):null}const Ui=Re("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,Bi=Re("button")`
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
`;function Ji(e){return e.replace(/,(?=\s*?[}\]])/g,"").trim()}function Vi(e){if(!e)return[];let n=e;if("string"==typeof n){const e=n.trim();if(!e)return[];try{n=JSON.parse(e)}catch(e){return[]}}return Array.isArray(n)?n.map(e=>{var n,r,o;if("string"==typeof e)return e.trim();if(e&&"object"==typeof e){const t=null!==(o=null!==(r=null!==(n=e.prompt)&&void 0!==n?n:e.text)&&void 0!==r?r:e.question)&&void 0!==o?o:"";return"string"==typeof t?t.trim():""}return""}).filter(e=>e.length>0):n&&"object"==typeof n&&Array.isArray(n.questions)?n.questions.map(e=>{var n,r,o;if("string"==typeof e)return e.trim();if(e&&"object"==typeof e){const t=null!==(o=null!==(r=null!==(n=e.prompt)&&void 0!==n?n:e.text)&&void 0!==r?r:e.question)&&void 0!==o?o:"";return"string"==typeof t?t.trim():""}return""}).filter(e=>e.length>0):[]}function Qi(e){if(!e)return null;if(e.includes(bi)){const n=e.split(bi)[1];if(!n)return null;const r=Ji(n.includes(yi)?n.split(yi)[0]:n);if(!r)return null;try{const e=JSON.parse(r);return JSON.stringify(e,null,2)}catch(e){return r}}if(e.includes(ki)){const n=function(e){const n=e.split(/\r?\n/).map(e=>e.trim()),r=[],o=[];let t=!1;if(n.forEach(e=>{if(!e||e===ki)return;const n=e.match(/^\d+[\.\)]\s*(.+)$/);n?(t=!0,o.push(n[1].trim())):t||r.push(e)}),!o.length)return null;const a={title:"フォローアップ質問",introduction:r.join(" ").trim()||"以下の質問にご回答ください。",estimatedCompletionTime:"5分",questions:o.map((e,n)=>({id:`legacy_follow_up_${n+1}`,text:e,type:"textarea",required:!1}))};return JSON.stringify(a,null,2)}(e);if(n)return n}const n=e.indexOf("{"),r=e.lastIndexOf("}");if(-1!==n&&-1!==r&&n<r){const o=Ji(e.slice(n,r+1));try{const e=JSON.parse(o);return JSON.stringify(e,null,2)}catch(e){return o||null}}return null}const Wi=Re("div")`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem 0.25rem;
  border-top: 1px solid var(--border-light);
`,Zi=Re("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,Gi=Re("button")`
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
`,Ki=Re("div")`
  position: relative;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  flex-shrink: 0;
  background: var(--askdona-surface, #ffffff);
`,Yi=Re("div")`
  position: relative;
  display: flex;
  flex-direction: column;
`,Xi=Re("div")`
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
`,el=Re("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`,nl=Re("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  width: 100%;
`,rl=Re("textarea")`
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
  min-height: ${xi}px;
  line-height: ${xi}px;
  overflow-y: hidden;
  transition: color 0.2s ease;

  &::placeholder {
    color: var(--askdona-text-secondary);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,ol=Re("button")`
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
`,tl=Re("div")`
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
`,al=Re("div")`
  color: var(--askdona-error, #ef4444);
  background: rgba(var(--askdona-error-rgb, 239, 68, 68), 0.1);
  border: 1px solid rgba(var(--askdona-error-rgb, 239, 68, 68), 0.25);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: var(--rag-dr-font-subheading, 0.8rem);
`,il=Re("div")`
  margin-top: 1.5rem;
  padding: 1.5rem;
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  border-radius: 18px;
  background: var(--askdona-background, #f8fafc);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,ll=Re("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`,sl=Re("div")`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;

  h3 {
    margin: 0;
    font-size: var(--rag-dr-font-heading, 0.88rem);
  }
`,dl=Re("div")`
  font-size: var(--rag-dr-font-small, 0.7rem);
  color: var(--askdona-text-secondary, #64748b);
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,cl=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,ul=Re("div")`
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  border-radius: 12px;
  background: var(--askdona-surface, #ffffff);
  padding: 0.9rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,fl=Re("div")`
  font-weight: 600;
  font-size: var(--rag-dr-font-subheading, 0.8rem);
  color: var(--askdona-text, #0f172a);
`,pl=Re("div")`
  font-size: var(--rag-dr-font-body, 0.76rem);
  color: var(--askdona-text-secondary, #475569);
  line-height: 1.6;
  white-space: pre-wrap;
`,gl=Re("ol")`
  margin: 0;
  padding-left: 1.25rem;
  color: var(--askdona-text-secondary, #475569);
  font-size: var(--rag-dr-font-body, 0.76rem);
  line-height: 1.6;

  li + li {
    margin-top: 0.25rem;
  }
`,hl=Re("div")`
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
`,ml=Re("div")`
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
`,vl=Re("span")`
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 999px;
  background: var(--askdona-primary);
  display: inline-block;
`,bl=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 16px;
  border: 1px solid var(--askdona-border, rgba(15, 23, 42, 0.12));
  background: rgba(var(--askdona-primary-rgb, 16, 49, 111), 0.06);
`,yl=Re("div")`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
`,kl=Re("div")`
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
`,xl=Re("div")`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,wl=Re("div")`
  font-size: var(--rag-dr-font-subheading, 0.8rem);
  font-weight: 600;
  color: var(--askdona-text, #0f172a);
`,Sl=Re("p")`
  margin: 0;
  font-size: var(--rag-dr-font-small, 0.7rem);
  color: var(--askdona-text-secondary, #64748b);
  line-height: 1.5;
`,_l=Re("div")`
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
`,zl=Re("div")`
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
`,Cl=Re("div")`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--askdona-surface, #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--rag-dr-font-title, 0.92rem);
  flex-shrink: 0;
`,$l=Re("div")`
  font-size: var(--rag-dr-font-small, 0.7rem);
  line-height: 1.4;
  color: var(--askdona-text, #0f172a);

  strong {
    display: block;
    font-size: var(--rag-dr-font-subheading, 0.8rem);
    margin-bottom: 0.15rem;
  }
`;function Ml({chatFlowId:e,sessionId:n,messages:r,onModeSwitch:o,currentMode:t,onSendMessage:a,baseUrl:i,config:l}){var s,d,c,u,f,p,g,h,m,v,b,y,x,w,S,_,z,C,$,M,A;const j=!!l.debug,[q]=de(()=>{if("undefined"==typeof window)return null;try{return function(e){const n=ai(e);return n.length?si(e,n[0].sessionId):null}(e)}catch(e){return null}}),[I,D]=de("execution"===(null==(E=q)?void 0:E.phase)||"questionnaire"===(null==E?void 0:E.phase)?E.phase:"input");var E;const[O,N]=de(null!==(s=null==q?void 0:q.userQuestion)&&void 0!==s?s:""),[R,F]=de(void 0!==(null==q?void 0:q.currentTask)?q.currentTask:null),T=fe(void 0!==(null==q?void 0:q.currentTask)?q.currentTask:null),[,P]=de(null!==(c=null===(d=null==q?void 0:q.currentTask)||void 0===d?void 0:d.id)&&void 0!==c?c:null),[L,H]=de(null),[U,J]=de(!1),[V,Q]=de(!1),[Z,G]=de(null!==(u=null==q?void 0:q.questionnaireJson)&&void 0!==u?u:""),[K,Y]=de(null),[X,ee]=de(!1),ne=void 0===(null==q?void 0:q.questionnaireSignature)?null:null!==(f=q.questionnaireSignature)&&void 0!==f?f:null,[re,oe]=de(ne),[te,ae]=de(null!==(p=null==q?void 0:q.questionnaireSummary)&&void 0!==p?p:null),[ie,le]=de(null!==(g=null==q?void 0:q.finalReport)&&void 0!==g?g:null),[se,ue]=de(Boolean(null==q?void 0:q.finalReport)),pe=fe(!1),he=fe(null),me=fe(new Xa),[ve,be]=de(null),ye=fe(null),ke=fe(r),xe=fe(!1),[we,Se]=de(()=>"undefined"==typeof window?[]:fi(e)),[_e,ze]=de(null),[Ce,$e]=de(()=>{var n,r;if("undefined"==typeof window)return null;return null!==(r=null===(n=fi(e)[0])||void 0===n?void 0:n.sessionId)&&void 0!==r?r:null}),[Me,Ae]=de(!1),[je,qe]=de(!1),[Ie,De]=de(null),[Ee,Oe]=de(null),[Ne,Re]=de(null),[Fe,Te]=de(null),[Pe,Le]=de(null),[He,Ue]=de(null),[Je,Ve]=de(null),[Qe,We]=de(null),[Ze,Ge]=de(null),[Ke,Ye]=de(null);ce(()=>{},[R]),ce(()=>{},[Ie,j]),ce(()=>{},[He,j]);const en=ge(()=>{if("undefined"!=typeof window)try{Se(fi(e))}catch(e){}},[e]);ce(()=>{ke.current=r},[r]),ce(()=>{T.current=R},[R]),ce(()=>{en()},[en]),ce(()=>{0===we.length&&Ae(!1)},[we.length]),ce(()=>{var e,n,r,o,t,a,i,l,s,d;if(!R)return De(null),Oe(null),Re(null),Te(null),Le(null),Ue(null),Ve(null),We(null),Ge(null),void Ye(null);const c=Hi(R),u=Fi(null!==(r=null!==(n=null===(e=R.progress_data)||void 0===e?void 0:e.stage)&&void 0!==n?n:R.stage)&&void 0!==r?r:null),f=null!==(o=R.status)&&void 0!==o?o:null,p=null!==(i=null!==(t=R.message)&&void 0!==t?t:null===(a=R.progress_data)||void 0===a?void 0:a.message)&&void 0!==i?i:null,g=null!==(d=null!==(s=null===(l=R.progress_data)||void 0===l?void 0:l.timestamp)&&void 0!==s?s:R.updated_at)&&void 0!==d?d:null;Ni(f,u,I)?(De(c),Oe(u),Re(f),Te(p),Le(g)):(Ue(c),Ve(u),We(f),Ge(p),Ye(g))},[R,I]);const{getValidToken:nn,isInitializing:rn,session:on,initializeSession:tn,clearSession:an}=function(e){const[n,r]=de(null),[o,t]=de(!0),[a,i]=de(null),l=ge(e=>{try{const n=e.split(".");return 3!==n.length?null:JSON.parse(atob(n[1]))}catch(e){return null}},[]),s=ge(async()=>{i(null);try{const n=window.location.hostname+(window.location.port?":"+window.location.port:""),o=await fetch(`${B}/session/init/${e}`,{method:"POST",headers:{"Content-Type":"application/json",Origin:window.location.origin,"X-Widget-Version":"1.0.0"},body:JSON.stringify({domain:n,timestamp:Date.now(),userAgent:navigator.userAgent})});if(!o.ok){const e=await o.json().catch(()=>({message:"Session initialization failed"}));throw new Error(e.message||`HTTP ${o.status}`)}const{secureSessionToken:t}=await o.json();if(!t)throw new Error("No session token received");const a=l(t);if(!a)throw new Error("Invalid session token format");const i=`askdona_secure_session_${e}`;localStorage.setItem(i,t);const s={token:t,isValid:!0,expiresAt:1e3*a.exp,sessionId:a.sessionId,chatflowId:a.chatflowId};return r(s),t}catch(e){throw i(e.message),e}},[e,l]),d=ge(async()=>{t(!0),i(null);try{const n=`askdona_secure_session_${e}`,o=localStorage.getItem(n);if(o){const t=l(o),a=Date.now();if(t&&1e3*t.exp>a&&t.chatflowId===e){const e={token:o,isValid:!0,expiresAt:1e3*t.exp,sessionId:t.sessionId,chatflowId:t.chatflowId};return void r(e)}localStorage.removeItem(n)}await s()}catch(e){i(e.message)}finally{t(!1)}},[e,l,s]),c=ge(async()=>{if(n&&n.expiresAt-Date.now()<18e5)try{await s()}catch(e){}},[n,s]),u=ge(async()=>{if(!n||!n.isValid)return null;if(n.expiresAt<=Date.now())try{return await s(),(null==n?void 0:n.token)||null}catch(e){return null}return await c(),n.token},[n,s,c]),f=ge(()=>{const n=`askdona_secure_session_${e}`;localStorage.removeItem(n),r(null),i(null)},[e]);return ce(()=>{e&&d()},[e,d]),ce(()=>{if(!n)return;const e=setInterval(()=>{c()},3e5);return()=>clearInterval(e)},[n,c]),{session:n,isInitializing:o,error:a,initializeSession:s,getValidToken:u,clearSession:f,refreshSessionIfNeeded:c}}(e),ln=ge(async(n=!1)=>{try{const r=ye.current;if(!n&&r&&Date.now()-r.timestamp<3e4)return be(r.data),r.data;const o=await nn();if(!o)return null;const t=me.current.getBrowserFingerprint(),a=await fetch(`${B}/chat/${e}/deep-research/config`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({secureSessionToken:o,browserFingerprint:t})}),i=await a.json();if(!a.ok)throw new Error((null==i?void 0:i.error)||`Failed to load Deep Research config (${a.status})`);return ye.current={timestamp:Date.now(),data:i},be(i),i}catch(e){return null}},[e,nn]),sn=ge(e=>{var n,r,o,t,a;if(!e)return!1;const i=T.current,l=null!==(n=e.task)&&void 0!==n?n:null,s=function(e,n,r){const o=Li(Pi(null==e?void 0:e.progress));if(null!==o)return o;if(null==e?void 0:e.progressData){const n=Li(Pi(e.progressData.progress));if(null!==n)return n}if(n){const e=Hi(n);if(null!==e)return e}return Hi(r)}(e,l,i),d=function(e,n,r){var o,t,a;const i=[null==e?void 0:e.stage,null===(o=null==e?void 0:e.progressData)||void 0===o?void 0:o.stage,null===(t=null==n?void 0:n.progress_data)||void 0===t?void 0:t.stage,null==n?void 0:n.stage,null===(a=null==r?void 0:r.progress_data)||void 0===a?void 0:a.stage,null==r?void 0:r.stage];for(const e of i){const n=Fi(e);if(n)return n}return null}(e,l,i),c=function(e,n,r){var o,t,a,i;return null!==(i=null!==(a=null!==(t=null!==(o=null==e?void 0:e.status)&&void 0!==o?o:null==n?void 0:n.status)&&void 0!==t?t:null==r?void 0:r.status)&&void 0!==a?a:null)&&void 0!==i?i:null}(e,l,i),u=function(e,n,r){var o,t,a,i,l,s,d,c,u;const f=null!==(u=null!==(c=null!==(s=null!==(l=null!==(a=null!==(o=null==e?void 0:e.message)&&void 0!==o?o:null===(t=null==e?void 0:e.progressData)||void 0===t?void 0:t.message)&&void 0!==a?a:null===(i=null==n?void 0:n.progress_data)||void 0===i?void 0:i.message)&&void 0!==l?l:null==n?void 0:n.message)&&void 0!==s?s:null===(d=null==r?void 0:r.progress_data)||void 0===d?void 0:d.message)&&void 0!==c?c:null==r?void 0:r.message)&&void 0!==u?u:null;if("string"==typeof f)return f.trim()||null;return null}(e,l,i),f=function(e,n,r){var o,t,a,i,l,s,d,c,u;return(null!==(u=null!==(c=null!==(s=null!==(l=null!==(a=null!==(o=null==e?void 0:e.updatedAt)&&void 0!==o?o:null===(t=null==e?void 0:e.progressData)||void 0===t?void 0:t.timestamp)&&void 0!==a?a:null===(i=null==n?void 0:n.progress_data)||void 0===i?void 0:i.timestamp)&&void 0!==l?l:null==n?void 0:n.updated_at)&&void 0!==s?s:null===(d=null==r?void 0:r.progress_data)||void 0===d?void 0:d.timestamp)&&void 0!==c?c:null==r?void 0:r.updated_at)&&void 0!==u?u:null)||null}(e,l,i),p=function(e,n,r){var o,t,a,i;const l=null!==(a=null!==(t=null!==(o=null==e?void 0:e.progressData)&&void 0!==o?o:null==n?void 0:n.progress_data)&&void 0!==t?t:null==r?void 0:r.progress_data)&&void 0!==a?a:null;if(!l)return null;const s=Li(Pi(l.progress)),d=Fi(l.stage);return null!==s&&s!==l.progress||null!==d&&d!==l.stage?{...l,progress:null!==s?s:null!==(i=l.progress)&&void 0!==i?i:null,stage:d}:l}(e,l,i);let g=!1;if(l){const e={...l,progress:null!==s?s:Hi(l),stage:null!==(r=null!=d?d:l.stage)&&void 0!==r?r:null,status:null!=c?c:l.status,message:null!==(o=null!=u?u:l.message)&&void 0!==o?o:null,progress_data:p,updated_at:null!=f?f:l.updated_at};T.current=e,F(e),P(e.id),g=!0}else i&&F(e=>{var n;if(!e)return e;const r=null!==s?s:e.progress,o=null!=d?d:e.stage,t=null!=c?c:e.status,a=null!=u?u:e.message,i=null!=f?f:e.updated_at,l=null!==(n=null!=p?p:e.progress_data)&&void 0!==n?n:null;if(!(r!==e.progress||o!==e.stage||t!==e.status||a!==e.message||l!==e.progress_data||i!==e.updated_at))return e;const h={...e,progress:r,stage:o,status:t,message:a,progress_data:l,updated_at:i};return T.current=h,g=!0,h});const h=Ni(c,d,I);if(null!==s&&(h?De(e=>null===e?s:Math.max(e,s)):Ue(e=>null===e?s:Math.max(e,s))),h?(Oe(null!=d?d:null),Re(null!=c?c:null),Te(u),Le(null!=f?f:null)):(Ve(null!=d?d:null),We(null!=c?c:null),Ge(u),Ye(null!=f?f:null)),e.questionnairePayload){const n="string"==typeof e.questionnairePayload?e.questionnairePayload:JSON.stringify(e.questionnairePayload,null,2);G(n),Y(null),g=!0}else if(e.questionnaireMessage){const n=Qi(e.questionnaireMessage);n&&(G(n),Y(null),g=!0)}else if("questionnaire_ready"===(null===(t=e.task)||void 0===t?void 0:t.status)&&e.task.message){const n=Qi(e.task.message);n&&(G(n),Y(null),g=!0)}if(void 0!==e.questionnaireSignature&&(oe(null!==(a=e.questionnaireSignature)&&void 0!==a?a:null),g=!0),e.finalMessage){let n=e.finalMessage.doc_metadata;if("string"==typeof n)try{n=JSON.parse(n)}catch(e){}const r=function(e){if(!e)return{content:"",rawContent:"",completionMessage:null,visualizations:null};let n=e,r=null,o=null;if(n.includes(pi)&&(n=n.replace(pi,"").trim()),n.includes(gi)&&n.includes(hi)){const e=n.indexOf(gi)+gi.length,o=n.indexOf(hi);r=n.substring(e,o).trim();const t=n.substring(0,n.indexOf(gi)),a=n.substring(o+hi.length);n=`${t.trim()}\n\n${a.trim()}`.trim()}const t=n.indexOf(mi),a=n.indexOf(vi);if(-1!==t&&-1!==a&&a>t){const e=n.substring(t+mi.length,a).trim();try{const n=JSON.parse(e);Array.isArray(n)&&(o=n)}catch(e){}n=n.substring(0,t).trim()}return{content:n.trim(),rawContent:e,completionMessage:r,visualizations:o}}(e.finalMessage.content);ue(!1),le({content:r.content,rawContent:r.rawContent,completionMessage:r.completionMessage,visualizations:r.visualizations,docMetadata:n,createdAt:e.finalMessage.created_at}),g=!0}return g},[I,P,G,Y,oe,ue,le,De,Oe,Re,Te,Le,Ue,Ve,We,Ge,Ye,F,j]),dn=ge(async()=>{const r=(null==on?void 0:on.sessionId)||n;if(!r)return"error";try{const n=await fetch(`${B}/chat/${e}/deep-research/status?sessionId=${r}`);if(!n.ok){if(404===n.status)return"error";throw new Error(`Failed to fetch task status (${n.status})`)}const o=await n.json();return sn(o)?"updated":"no-change"}catch(e){return e instanceof TypeError&&String(e.message||"").includes("Failed to fetch")?"network-error":"error"}},[e,null==on?void 0:on.sessionId,n,sn,j,I]);ce(()=>{xe.current=!1},[e,null==on?void 0:on.sessionId]);const cn=ge(e=>{const n=e||he.current;if(!(n&&n instanceof HTMLTextAreaElement))return;n.style.height="auto";const r=Math.max(n.scrollHeight,xi);n.style.height=`${r}px`,n.style.lineHeight=r<=xi?"32px":"1.5"},[]);ce(()=>{var n,r,o,t,a;if(!(null==on?void 0:on.sessionId)||pe.current)return;const i=ci(e,on.sessionId);i&&(i.userQuestion&&N(i.userQuestion),"execution"!==i.phase&&"questionnaire"!==i.phase||D(i.phase),void 0!==i.currentTask&&(F(i.currentTask),P(null!==(r=null===(n=i.currentTask)||void 0===n?void 0:n.id)&&void 0!==r?r:null)),i.questionnaireJson&&G(i.questionnaireJson),void 0!==i.questionnaireSignature&&oe(null!==(o=i.questionnaireSignature)&&void 0!==o?o:null),void 0!==i.finalReport&&(le(null!==(t=i.finalReport)&&void 0!==t?t:null),ue(Boolean(i.finalReport))),void 0!==i.questionnaireSummary&&ae(null!==(a=i.questionnaireSummary)&&void 0!==a?a:null)),pe.current=!0},[e,null==on?void 0:on.sessionId]),ce(()=>{(null==on?void 0:on.sessionId)&&pe.current&&(xe.current||(xe.current=!0,dn().catch(()=>{})))},[null==on?void 0:on.sessionId,dn]);const un=(null==on?void 0:on.sessionId)||n,fn=un,pn="completed"===(null==R?void 0:R.status)||"failed"===(null==R?void 0:R.status),gn="questionnaire"===I&&!!R&&!!fn&&!pn&&Si.has(R.status),hn="execution"===I&&!!R&&!!fn&&!pn&&_i.has(R.status),mn=gn||hn;ce(()=>{_e||un&&$e(e=>e===un?e:un)},[_e,un]),ce(()=>{if(!mn||!fn)return;let e=null,n=!1;const r="execution"===I?3e4:1e4,o=async()=>{if(n)return;n=!0;const r=await dn();n=!1,"network-error"===r&&e&&clearInterval(e)};return o(),e=setInterval(o,r),()=>{e&&clearInterval(e)}},[mn,fn,dn,null==R?void 0:R.id,I,j,null==R?void 0:R.status,null==R?void 0:R.progress]),ce(()=>{ln()},[ln]),ce(()=>{(null==on?void 0:on.sessionId)&&pe.current&&(!function(e,n,r){const o=ci(e,n);di(e,n,{version:1,chatflowId:e,sessionId:n,lastUpdated:(new Date).toISOString(),...o?{userQuestion:o.userQuestion,phase:o.phase,questionnaireJson:o.questionnaireJson,questionnaireSignature:o.questionnaireSignature,questionnaireSummary:o.questionnaireSummary,finalReport:o.finalReport,currentTask:o.currentTask}:{},...r})}(e,on.sessionId,{userQuestion:O||void 0,phase:I,questionnaireJson:Z||void 0,questionnaireSignature:re||void 0,questionnaireSummary:te||void 0,finalReport:ie||void 0,currentTask:R}),en())},[e,null==on?void 0:on.sessionId,O,I,Z,re,te,ie,R,en]),ce(()=>{},[te]),ce(()=>{"input"===I&&cn()},[O,I,cn]),ce(()=>{if("input"===I)return;const e=he.current;e&&e instanceof HTMLTextAreaElement&&(e.style.height="32px",e.style.lineHeight="32px")},[I,j]),ce(()=>{var e;if("questionnaire_ready"===(null==R?void 0:R.status)&&R.questionnaire_payload){const n="string"==typeof R.questionnaire_payload?R.questionnaire_payload:JSON.stringify(R.questionnaire_payload,null,2);return G(n),oe(null!==(e=R.questionnaire_signature)&&void 0!==e?e:null),void Y(null)}if("questionnaire_ready"===(null==R?void 0:R.status)&&!R.questionnaire_payload&&!Z){const e=function(e){for(let n=e.length-1;n>=0;n-=1){const r=e[n];if("assistant"!==r.role)continue;const o=Qi(r.content);if(o)return o}return null}(ke.current);e&&G(e)}},[R,Z]),ce(()=>{R&&R.execution_results},[R]),ce(()=>{var e;R&&void 0!==R.questionnaire_signature&&oe(null!==(e=R.questionnaire_signature)&&void 0!==e?e:null)},[null==R?void 0:R.questionnaire_signature]),ce(()=>{var e,n,r,o,t,a,i;if(!R)return;const l=te,s=Vi(null!==(e=R.questionnaire_payload)&&void 0!==e?e:Z),d=s.length>0?s:Vi(Z),c=function(e){if(!e)return null;const n=["questionnaire_response_markdown","questionnaire_response_markdown_v2","questionnaire_response","questionnaire_response_markdown_combined","questionnaireResponsesMarkdown"];if("string"==typeof e){const n=e.trim();return n.length>0?n:null}if(e&&"object"==typeof e){for(const r of n){const n=e[r];if("string"==typeof n&&n.trim().length>0)return n.trim()}const r=e.questionnaire_responses;if(Array.isArray(r)&&r.length>0)return r.map(e=>{var n,r;if("string"==typeof e)return e.trim();if(e&&"object"==typeof e){const o=null!==(r=null!==(n=e.answer)&&void 0!==n?n:e.response)&&void 0!==r?r:"";return"string"==typeof o?o.trim():""}return""}).filter(e=>e.length>0).join("\n\n")}return null}(R.execution_results),u=(null!==(n=null==l?void 0:l.formattedMarkdown)&&void 0!==n?n:"").trim(),f=d.length>0&&(!l||0===l.questions.length),p="string"==typeof c&&c.trim().length>0&&0===u.length;if(!f&&!p)return;const g={questions:f?d:null!==(r=null==l?void 0:l.questions)&&void 0!==r?r:d,answer:p?(null!=c?c:"").trim():null!==(o=null==l?void 0:l.answer)&&void 0!==o?o:(null!=c?c:"").trim(),formattedMarkdown:p?(null!=c?c:"").trim():null!==(t=null==l?void 0:l.formattedMarkdown)&&void 0!==t?t:(null!=c?c:"").trim(),submittedAt:null!==(i=null!==(a=null==l?void 0:l.submittedAt)&&void 0!==a?a:R.updated_at)&&void 0!==i?i:(new Date).toISOString()};(function(e,n){return e===n||!(!e||!n)&&e.answer===n.answer&&e.formattedMarkdown===n.formattedMarkdown&&e.submittedAt===n.submittedAt&&e.questions.length===n.questions.length&&e.questions.every((e,r)=>e===n.questions[r])})(null!=l?l:null,g)||ae(g)},[R,Z,te]),ce(()=>{const e=null==R?void 0:R.status;!Ti(null==R?void 0:R.stage)||"pending"!==e&&"in-progress"!==e&&"questionnaire_pending"!==e||Z?"questionnaire_ready"===e?("questionnaire"!==I&&D("questionnaire"),Z&&Y(null)):"questionnaire"===I&&R&&(D("execution"),G(""),Y(null),le(null),ue(!1)):"questionnaire"!==I&&D("questionnaire")},[R,Z,I,j]);const vn=ge(async(r,o,t)=>{var a,i,l,s,d,c,u;try{const f=await nn();if(!f)throw new Error("Failed to get valid session token");const p=await ln()||ve;if(!p||!p.canExecute)throw new Error("Deep Research is not available right now.");const g=p.visitor;if(!g)throw new Error("Deep Research visitor authorization missing. Please refresh and try again.");const h=(null==on?void 0:on.sessionId)||n,m={secureSessionToken:f,query:r,chatflowId:e,sessionId:h,browserFingerprint:me.current.getBrowserFingerprint(),visitor:g,messages:o};(null==t?void 0:t.questionnaireSignature)&&(m.questionnaireSignature=t.questionnaireSignature);const v=await fetch(`${B}/chat/${e}/deep-research/start`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)}),b=await v.json();if(!v.ok)throw new Error((null==b?void 0:b.error)||`Failed to start research: ${v.status}`);if((null==b?void 0:b.visitor)&&p){const e={...p,visitor:b.visitor};ye.current={timestamp:Date.now(),data:e},be(e)}const y=(null==b?void 0:b.taskId)||(null==b?void 0:b.jobId)||`embed-dr-${Date.now()}`;if("questionnaire_pending"===(null==b?void 0:b.status)){const e={id:y,session_id:h,status:"questionnaire_pending",stage:"questionnaire_pending",progress:0,message:(null==b?void 0:b.message)||"Deep Researchの質問票を準備しています...",checksheet_markdown:null,tool_usage_plan:null,execution_results:null,final_report_message_id:null,summary_report:null,research_id:(null==b?void 0:b.researchId)||null,created_at:(new Date).toISOString(),updated_at:(new Date).toISOString(),report_settings:(null==b?void 0:b.report_settings)||{reportFormat:"business-report",internetEnabled:!0,language:"japanese"},questionnaire_payload:null,questionnaire_signature:null};return F(e),P(e.id),oe(null),G(""),Y(null),ae(null),le(null),D("questionnaire"),void ln(!0).catch(()=>{})}if("questionnaire_ready"===(null==b?void 0:b.status)){const e=null!==(a=null==b?void 0:b.task)&&void 0!==a?a:{id:y,session_id:h,status:"questionnaire_ready",stage:"questionnaire_ready",progress:100,message:(null==b?void 0:b.message)||"質問票の準備が完了しました。",checksheet_markdown:null,tool_usage_plan:null,execution_results:null,final_report_message_id:null,summary_report:null,research_id:(null==b?void 0:b.researchId)||null,created_at:(new Date).toISOString(),updated_at:(new Date).toISOString(),report_settings:(null==b?void 0:b.report_settings)||{reportFormat:"business-report",internetEnabled:!0,language:"japanese"},questionnaire_payload:null!==(i=null==b?void 0:b.questionnairePayload)&&void 0!==i?i:null,questionnaire_signature:null!==(l=null==b?void 0:b.questionnaireSignature)&&void 0!==l?l:null};F(e),P(e.id);const n=null!==(d=null!==(s=null==b?void 0:b.questionnaireSignature)&&void 0!==s?s:e.questionnaire_signature)&&void 0!==d?d:null;if(oe(n),null==b?void 0:b.questionnairePayload){const e="string"==typeof b.questionnairePayload?b.questionnairePayload:JSON.stringify(b.questionnairePayload,null,2);G(e),Y(null)}else if(null==b?void 0:b.questionnaireMessage){const e=Qi(b.questionnaireMessage);e&&(G(e),Y(null))}return ae(null),D("questionnaire"),void ln(!0).catch(()=>{})}if(!(null==b?void 0:b.jobId))throw new Error("Deep Research job did not return an identifier.");const k=null!==(c=null==b?void 0:b.task)&&void 0!==c?c:{id:y,session_id:h,status:"pending",stage:"follow-up",progress:0,message:(null==b?void 0:b.message)||"Deep Researchを開始しています...",checksheet_markdown:null,tool_usage_plan:null,execution_results:null,final_report_message_id:null,summary_report:null,research_id:(null==b?void 0:b.researchId)||null,created_at:(new Date).toISOString(),updated_at:(new Date).toISOString(),report_settings:(null==b?void 0:b.report_settings)||{reportFormat:"business-report",internetEnabled:!0,language:"japanese"},questionnaire_payload:null,questionnaire_signature:null!==(u=null==t?void 0:t.questionnaireSignature)&&void 0!==u?u:null};F(k),P(k.id),ae(null),le(null);const x=Ti(k.stage)?"questionnaire":"execution";"questionnaire"===x&&(G(""),Y(null)),D(x),ln(!0).catch(()=>{})}catch(e){throw e}finally{J(!1)}},[e,n,on,nn,ln,ve,j]),bn=ge(async()=>{if("input"===I&&O.trim()&&!V){Q(!0),J(!0),H(null);try{await vn(O,r)}catch(e){H(e instanceof Error?e.message:"Failed to start research")}finally{J(!1),Q(!1)}}},[I,O,r,vn,V]),yn=ge(e=>{(e.metaKey||e.ctrlKey)&&"Enter"===e.key&&(e.preventDefault(),bn())},[bn]),kn=ge(async e=>{Y(null),ee(!0);try{const n=re||(null==R?void 0:R.questionnaire_signature)||null;if(!n)return Y("質問票の検証情報を準備しています。数秒後に再度お試しください。"),await dn().catch(()=>{}),void ee(!1);const o=(new Date).toISOString(),t=function(e){const n=e.split(/\r?\n/),r=[],o=[];let t="none";return n.forEach(e=>{const n=e.trim();if(!n)return void("answers"===t&&o.push(""));const a=n.replace(/[*_`]/g,"").toLowerCase();if(a.startsWith("質問一覧")||a.startsWith("質問一覧:")||a.startsWith("questions"))t="questions";else if(a.startsWith("回答")||a.startsWith("回答:")||a.startsWith("answers"))t="answers";else{if("questions"===t){const e=n.match(/^\d+[\.\)]\s*(.+)$/);return void r.push(e&&e[1]?e[1].trim():n)}"answers"===t&&o.push(e)}}),{questions:r.filter(e=>e&&e.trim().length>0),answer:o.join("\n").trim()}}(e);ae({questions:t.questions,answer:t.answer,formattedMarkdown:e,submittedAt:o});const a=[...r,{role:"user",content:e,createdAt:o,id:`questionnaire-response-${Date.now()}`}],i=`${O}\n\nClarifications:\n\n${e}`;await vn(i,a,{questionnaireSignature:n})}catch(e){Y("回答の送信に失敗しました。時間をおいて再度お試しください。")}finally{ee(!1)}},[vn,r,re,null==R?void 0:R.questionnaire_signature,O,dn]);ge(n=>{const r=n.sessionId;if($e(r),r===un)return void ze(null);if("undefined"==typeof window)return;const o=function(e,n){return si(e,n)}(e,r);if(!o)return en(),void ze(null);ze(o)},[e,un,en]);const wn=ge(()=>{ze(null),un&&$e(un)},[un]);ge(()=>{var e,n,r,o;if(!_e)return;const t=_e;un&&$e(un),ze(null);const a="questionnaire"===t.phase&&t.questionnaireJson?"questionnaire":"input";D(a),N(null!==(e=t.userQuestion)&&void 0!==e?e:""),G(null!==(n=t.questionnaireJson)&&void 0!==n?n:""),oe(null!==(r=t.questionnaireSignature)&&void 0!==r?r:null),Y(null),le(null!==(o=t.finalReport)&&void 0!==o?o:null),ue(Boolean(t.finalReport)),F(null),De(null),Oe(null),Re(null),Te(null),Le(null),Ue(null),Ve(null),We(null),Ge(null),Ye(null),P(null),H(null),J(!1),ee(!1),Q(!1),cn()},[_e,un,cn,P]);const Sn=ge(async()=>{if(!je){qe(!0);try{un&&ui(e,un),pe.current=!1,ye.current=null,D("input"),F(null),P(null),N(""),G(""),Y(null),oe(null),ae(null),le(null),ue(!1),De(null),Oe(null),Re(null),Te(null),Le(null),Ue(null),Ve(null),We(null),Ge(null),Ye(null),ze(null),J(!1),ee(!1),Q(!1),H(null),Ae(!1),$e(null),an(),await tn(),en()}catch(e){const n="ja"===l.language?"新しいセッションの開始に失敗しました。時間をおいて再度お試しください。":"Failed to start a new session. Please try again in a moment.";H(e instanceof Error&&e.message?e.message:n)}finally{qe(!1)}}},[je,un,e,an,tn,en,l.language]),_n=ge(()=>{D("input"),F(null),P(null),H(null),N(""),G(""),Y(null),oe(null),ae(null),ue(!1),De(null),Oe(null),Re(null),Te(null),Le(null),Ue(null),Ve(null),We(null),Ge(null),Ye(null),ui(e,un||void 0),wn(),en()},[e,un,wn,en]),zn="ja"===l.language,Cn=t||"deep-research",$n=l.enableDeepResearch||l.enableRagDeepResearch,Mn="input"===I&&!!O.trim()&&!U&&!V,An=Boolean(re||(null==R?void 0:R.questionnaire_signature)),jn=X||!An,qn=An?void 0:"質問票を検証しています...",In="ja"===l.language?"Ctrl+Enter または ⌘+Enter で送信":"Send with Ctrl+Enter or ⌘+Enter",Dn="ja"===l.language?"Deep Researchで調べたい内容を入力してください... (Ctrl+Enter または ⌘+Enter で送信)":"Describe what you would like Deep Research to investigate... (Ctrl+Enter or ⌘+Enter to send)",En=!!R&&wi.includes(R.status),On=Boolean(_e),Nn=je?zn?"新しいセッションを作成中...":"Starting new session...":zn?"新しいセッションを開始":"Start new session",Rn=null!==(m=null===(h=null==ve?void 0:ve.browserLimits)||void 0===h?void 0:h.limits)&&void 0!==m?m:[];null===(v=null==ve?void 0:ve.browserLimits)||void 0===v||v.allowed;const Fn=null!==(y=null===(b=null==ve?void 0:ve.browserLimits)||void 0===b?void 0:b.blockedBy)&&void 0!==y?y:null;Rn.length;const Tn=null==ve?void 0:ve.visitor,Pn=ge(e=>{if(!e)return zn?"利用制限":"Usage limit";if(e.startsWith("custom-")){const n=parseInt(e.replace("custom-","").replace("d",""),10);if(Number.isFinite(n))return zn?`直近${n}日`:`Last ${n} days`}return(zn?{daily:"1日あたり",weekly:"1週間あたり",monthly:"1か月あたり",yearly:"1年あたり"}:{daily:"Per day",weekly:"Per week",monthly:"Per month",yearly:"Per year"})[e]||e},[zn]),Ln=ge(e=>{if(!e)return null;const n=new Date(e);return Number.isNaN(n.getTime())?null:n.toLocaleString(zn?"ja-JP":void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})},[zn]);"number"==typeof(null==Tn?void 0:Tn.remaining)&&Tn.remaining,"number"==typeof(null==Tn?void 0:Tn.limit)&&Tn.limit;const Hn=null==Tn?void 0:Tn.windowEnd;Fn&&Pn(Fn),Ln(Hn);const Un=!1,Bn=ge((e,n)=>e.hasFinalReport?zn?"完了":"Completed":n?zn?"進行中":"In progress":"execution"===e.phase?zn?"実行中":"Executing":"questionnaire"===e.phase?zn?"質問票対応中":"Awaiting questionnaire":zn?"入力中":"Draft",[zn]),Jn=null!==(x=null==_e?void 0:_e.finalReport)&&void 0!==x?x:ie,Vn=null!==(w=null==_e?void 0:_e.userQuestion)&&void 0!==w?w:O,Qn=null!==(S=null==_e?void 0:_e.questionnaireSummary)&&void 0!==S?S:te,Wn=Boolean(Jn)&&(!En||On),Zn=Wn&&(On||se),Gn=zn?On?"過去のDeep Research結果を表示しています":"前回のDeep Research結果を表示しています":On?"Viewing a previous Deep Research report":"Showing your previous Deep Research report",Kn=zn?"調査結果":"Research Findings",Yn=zn?"Deep Researchが生成したレポート本文です。":"Deep Research generated report summary.",Xn=null!==(z=null===(_=null==Qn?void 0:Qn.questions)||void 0===_?void 0:_.filter(e=>e&&e.trim().length>0))&&void 0!==z?z:[],er=Boolean((null==Qn?void 0:Qn.answer)&&Qn.answer.trim().length>0),nr=Qn?er?Qn.answer:zn?"回答は送信されませんでした。":"No answers were provided.":"",rr=Boolean(Vn&&Vn.trim().length>0||Xn.length>0||Qn);ce(()=>{},[Xn,er,nr,Qn,Vn,rr,Wn]);const or=_e?{sessionId:_e.sessionId,userQuestion:_e.userQuestion,lastUpdated:_e.lastUpdated,finalReportCreatedAt:null!==($=null===(C=_e.finalReport)||void 0===C?void 0:C.createdAt)&&void 0!==$?$:null,hasFinalReport:Boolean(_e.finalReport),phase:null!==(M=_e.phase)&&void 0!==M?M:null}:null,tr=!!or&&or.sessionId===un;return(null===(A=null==or?void 0:or.userQuestion)||void 0===A?void 0:A.trim())&&(or.userQuestion.trim().length>80?or.userQuestion.trim().slice(0,80):or.userQuestion.trim()),or&&Bn(or,tr),(null==or?void 0:or.lastUpdated)&&new Date(or.finalReportCreatedAt||or.lastUpdated).toLocaleString(zn?"ja-JP":void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),W(Mi,{children:[W(Ai,{children:[L&&W(al,{children:L}),Un,false,W(Ui,{children:[W(Bi,{type:"button","data-variant":"primary",onClick:Sn,disabled:je||rn,children:Nn}),Un]}),Un,rn&&!Wn&&W(Di,{children:"セッションを初期化しています..."}),!rn&&"input"===I&&W(ji,{children:W(Ii,{children:"調査したい背景や目的、特に知りたい観点などを入力し「送信」ボタンで Deep Research を開始してください。"})}),"questionnaire"===I&&W(qi,{children:[Z?W(Wt,{questionnaireJson:Z,onSubmit:kn,isSubmitLocked:jn,submitLockLabel:qn}):W(Ma,{task:R,isJapanese:zn,progressOverride:Ie,stageOverride:Ee,statusOverride:Ne,messageOverride:Fe,updatedAtOverride:Pe}),K&&W(Oi,{children:K}),Z?(null==R?void 0:R.message)?W(Ei,{children:R.message}):An?null:W(Ei,{children:zn?"質問票の準備を行っています。送信が可能になるまで少しお待ちください。":"Preparing the questionnaire. Please wait a few more seconds before submitting."}):null]}),"execution"===I&&R&&W(xt,{task:R,onRetry:_n,progressOverride:He,stageOverride:Je,statusOverride:Qe,messageOverride:Ze,updatedAtOverride:Ke}),Wn&&Jn&&W(il,{children:[W(ll,{children:[W(sl,{children:[W("h3",{children:"調査レポート"}),Jn.createdAt&&W(dl,{children:new Date(Jn.createdAt).toLocaleString(zn?"ja-JP":void 0)})]}),Zn&&W(ml,{children:[W(vl,{}),Gn]})]}),Jn.completionMessage&&W(zl,{children:[W(Cl,{children:"✅"}),W($l,{children:[W("strong",{children:"Deep Researchが完了しました"}),Jn.completionMessage]})]}),rr&&W(cl,{children:[Vn&&Vn.trim().length>0&&W(ul,{children:[W(fl,{children:zn?"Deep Research依頼文":"Deep Research request"}),W(pl,{children:Vn.trim()})]}),Xn.length>0&&W(ul,{children:[W(fl,{children:zn?"フォローアップ質問":"Follow-up questions"}),W(gl,{children:Xn.map((e,n)=>W("li",{children:e},`follow-up-question-${n}`))})]}),Qn&&W(ul,{children:[W(fl,{children:zn?"フォローアップ質問への回答":"Follow-up answers"}),W(hl,{children:xn(nr,!1)})]})]}),W(bl,{children:[W(yl,{children:[W(kl,{children:W(Xe,{className:"icon"})}),W(xl,{children:[W(wl,{children:Kn}),W(Sl,{children:Yn})]})]}),W(_l,{children:xn(Jn.content,!1,Array.isArray(Jn.docMetadata)?Jn.docMetadata:void 0)})]})]})]}),o&&W(k,{children:[W(Wi,{children:W(Zi,{children:[W(Gi,{type:"button",active:"ask-ai"===Cn,onClick:()=>o("ask-ai"),children:"ja"===l.language?"AIに質問":"Ask AI"}),W(Gi,{type:"button",active:"search"===Cn,onClick:()=>o("search"),children:"ja"===l.language?"検索":"Search"}),$n&&W(Gi,{type:"button",active:"deep-research"===Cn||"rag-deep-research"===Cn,onClick:()=>o("deep-research"),children:(l.language,"Deep Research")})]})}),W(Ki,{children:W(Yi,{children:W(Xi,{children:[W(el,{children:W(rl,{ref:he,value:O,onInput:e=>{const n=e.currentTarget;N(n.value),cn(n)},placeholder:Dn,disabled:"input"!==I||U||V,onKeyDown:yn,rows:1})}),W(nl,{children:W(ol,{type:"button",onClick:bn,disabled:!Mn,"data-disabled":!Mn,title:In,"aria-label":In,children:U?W(tl,{}):W(Be,{size:16,color:"white"})})})]})})})]})]})}const Al=Oe`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,jl=Oe`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,ql=Oe`
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
`;function Il({isOpen:e,onClose:n,currentMode:r,onModeSwitch:o,messages:t,isLoading:a,streamingContent:i,onSendMessage:l,error:s,config:d,currentState:c,chatMode:u,onChatModeChange:f,sessionId:p,onFeedbackSubmit:g,onClearChat:h,showIntro:m,displayMode:v="modal",metadataFilters:b,onMetadataFiltersChange:y}){var x;const w=fe(null);if(ce(()=>{if(!e)return;const r=e=>{"Escape"===e.key&&n()},o=e=>{"fullscreen"!==v&&w.current&&w.current.contains&&"function"==typeof w.current.contains&&!w.current.contains(e.target)&&n()};return document.addEventListener("keydown",r),document.addEventListener("mousedown",o),()=>{document.removeEventListener("keydown",r),document.removeEventListener("mousedown",o)}},[e,n]),!e)return null;const S=(null===(x=d.chatbotTitle)||void 0===x?void 0:x.trim())||"AskDona";return W(Dl,{onClick:e=>{"fullscreen"!==v&&e.target===e.currentTarget&&n()},displayMode:v,children:W(El,{ref:w,displayMode:v,children:[W(Ol,{children:[W(Nl,{children:S}),W(Rl,{children:"fullscreen"!==v&&W(Fl,{onClick:n,children:"×"})})]}),W(Tl,{children:"ask-ai"===r?W(Br,{messages:t,isLoading:a,streamingContent:i,onSendMessage:l,error:s,config:d,currentState:c,chatMode:u,onChatModeChange:f,sessionId:p,onFeedbackSubmit:g,showIntro:m,metadataFilters:b,onMetadataFiltersChange:y,onClearChat:h,currentMode:r,onModeSwitch:e=>o(e)}):"search"===r?W(_o,{config:d,currentMode:r,onModeSwitch:o},"search-view"):"deep-research"===r&&(d.enableDeepResearch||d.enableRagDeepResearch)||"rag-deep-research"===r&&d.enableRagDeepResearch?W(Ml,{chatFlowId:d.chatflowId,sessionId:p,messages:t.map(e=>({role:e.role,content:e.content,createdAt:e.createdAt,id:e.id})),onModeSwitch:o,currentMode:r,onSendMessage:e=>l(e),baseUrl:window.location.origin,config:d}):null}),W(Pl,{children:[W(Ll,{children:["Powered by ",W(Hl,{href:"https://askdona.com",target:"_blank",style:"color: inherit; text-decoration: none;",children:"AskDona"})]}),W(Ul,{children:"ja"===d.language?W(k,{children:[W("div",{children:"Boostモードは、より多角的な視点から多くの文書を分析して回答します。通常モードより回答生成までに時間がかかります。"}),W("div",{children:"RAGシステムは誤った情報を提供することがあります。重要な情報はご自身で確認してください。"})]}):W(k,{children:[W("div",{children:"Boost mode analyzes more documents from multiple perspectives. It takes longer than normal mode."}),W("div",{children:"RAG systems may provide incorrect information. Please verify important information yourself."})]})})]})]})})}Oe`
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
`;const Dl=Re("div")`
  position: fixed;
  inset: 0;
  background: ${e=>"fullscreen"===e.displayMode?"transparent":"rgba(0, 0, 0, 0.5)"};
  backdrop-filter: ${e=>"fullscreen"===e.displayMode?"none":"blur(4px)"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  padding: ${e=>"fullscreen"===e.displayMode?"0":"1.25rem"};
  animation: ${Al} 0.2s ease-out;
`,El=Re("div")`
  background: var(--askdona-surface);
  border-radius: ${e=>"fullscreen"===e.displayMode?"0":"1rem"};
  width: ${e=>"fullscreen"===e.displayMode?"100vw":"100%"};
  max-width: ${e=>"fullscreen"===e.displayMode?"none":"72rem"};
  height: ${e=>"fullscreen"===e.displayMode?"100vh":"90vh"};
  max-height: ${e=>"fullscreen"===e.displayMode?"none":"1000px"};
  box-shadow: ${e=>"fullscreen"===e.displayMode?"none":"0 25px 50px -12px rgba(0, 0, 0, 0.25)"};
  display: flex;
  flex-direction: column;
  animation: ${e=>"fullscreen"===e.displayMode?"none":jl} 0.3s ease-out;
  overflow: hidden;
`,Ol=Re("header")`
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`,Nl=Re("h2")`
  margin: 0;
  color: var(--askdona-text);
  font-size: 1rem;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 0.01em;
`,Rl=Re("div")`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,Fl=Re("button")`
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
`,Tl=Re("main")`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Pl=Re("footer")`
  padding: 0.75rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
`,Ll=Re("span")`
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
`,Hl=Re("a")`
  font-size: 0.75rem;
  color: var(--askdona-primary);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,Ul=Re("div")`
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
`;function Bl({onClick:e,position:n}){return W(Jl,{onClick:e,position:n,children:W("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:W("path",{d:"M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.9706 16.9706 21 12 21C10.4077 21 8.88275 20.5699 7.5389 19.7447L3 21L4.25553 16.4611C3.43012 15.1173 3 13.5923 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}const Jl=Re("button")`
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
  animation: ${ql} 0.5s ease-out;
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
`;function Vl(e){const[n,r]=de({isValid:!1,error:null,config:null});return ce(()=>{const n=async()=>{try{const n=await async function(e){try{return await J(`/validate/${e}`,{method:"POST",body:JSON.stringify({origin:window.location.origin})})}catch(e){return{isValid:!1,error:e.message}}}(e);r({isValid:n.isValid,error:n.error?new Error(n.error):null,config:n.config||null})}catch(e){r({isValid:!1,error:e,config:null})}};e&&n()},[e]),n}const Ql="askdona_widget_",Wl=864e5;function Zl(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e)}function Gl(e){const n=`${Ql}messages_${e}`;try{const e=localStorage.getItem(n);if(!e)return[];const r=JSON.parse(e);return Array.isArray(r)?r:r.messages||[]}catch(e){return[]}}function Kl(e){var n;const r=`${Ql}messages_${e}`;try{const e=localStorage.getItem(r);if(!e)return null;const o=JSON.parse(e);return!Array.isArray(o)&&o.sessionId&&(null===(n=o.messages)||void 0===n?void 0:n.length)>0?o.sessionId:null}catch(e){return null}}function Yl(e){const[n]=de(()=>{if(Gl(e).length>0){const n=Kl(e);if(n)return n}const n=function(e){const n=`${Ql}session_${e}`;try{const e=localStorage.getItem(n);if(e){const n=JSON.parse(e);if(n.expiresAt>Date.now()&&Zl(n.id))return n.id}}catch(e){}const r=Gl(e).length>0;if(r){const r=Kl(e);if(r&&Zl(r)){const e={id:r,createdAt:Date.now(),expiresAt:Date.now()+Wl};try{localStorage.setItem(n,JSON.stringify(e))}catch(e){}return r}}try{localStorage.removeItem(n),r||localStorage.removeItem(`${Ql}messages_${e}`)}catch(e){}const o={id:U(),createdAt:Date.now(),expiresAt:Date.now()+Wl};try{localStorage.setItem(n,JSON.stringify(o))}catch(e){}return o.id}(e);return n}),[r,o]=de(()=>Gl(e)),[t,a]=de(!1),[i,l]=de(""),[s,d]=de(null),[c,u]=de("idle"),f=fe(null),p=fe(null),g=fe(""),h=fe(null);ce(()=>{if(r.length>0){const o=r[r.length-1];!function(e,n,r){const o=`${Ql}messages_${e}`;try{const e=localStorage.getItem(o),t=e?JSON.parse(e):{sessionId:null,messages:[]};r&&!t.sessionId&&(t.sessionId=r);const a=t.messages||[],i=a.findIndex(e=>e.id===n.id);-1!==i?a[i]=n:a.push(n),a.length>50&&a.splice(0,a.length-50),t.messages=a,localStorage.setItem(o,JSON.stringify(t))}catch(e){}}(e,o,n)}},[r,e,n]);const m=ge(()=>{o([]),function(e){[`${Ql}session_${e}`,`${Ql}messages_${e}`].forEach(e=>{try{localStorage.removeItem(e)}catch(e){}})}(e)},[e]),v=ge(async(t,i="standard",s=null)=>{try{const c={id:U(),role:"user",content:t,createdAt:(new Date).toISOString(),metadata:{mode:i}};o(e=>[...e,c]),a(!0),d(null),l(""),u("thinking"),g.current="",h.current=null;const m={id:U(),role:"assistant",content:"",createdAt:(new Date).toISOString(),metadata:{mode:i}};p.current=m,f.current=new AbortController,await async function({chatflowId:e,sessionId:n,message:r,messages:o,mode:t="standard",userMessageId:a,assistantMessageId:i,metadataFilters:l,signal:s,onChunk:d}){var c,u;const f=`${B}/chat/${e}/${t}`,p=await fetch(f,{method:"POST",headers:{"Content-Type":"application/json","X-Widget-Version":"1.0.0"},body:JSON.stringify({userQuestion:r,sessionId:n,messages:o.map(e=>({role:e.role,content:e.content,createdAt:e.createdAt})),mode:t,boostMode:"boost"===t||void 0,userMessageId:a,assistantMessageId:i,metadataFilters:l}),signal:s}),g={};if(p.headers.forEach((e,n)=>{g[n]=e}),!p.ok){const e=await p.json().catch(()=>({message:"Request failed"}));throw new Error(e.message||`HTTP ${p.status}`)}const h=null===(c=p.body)||void 0===c?void 0:c.getReader();if(!h)throw new Error("No response body");const m=new TextDecoder;let v="",b=0;const y=/\S/,k=(e,n)=>{b+=1},x=e=>{e&&y.test(e)&&(k(),d({type:"content",data:e}))};try{for(;;){const{done:e,value:n}=await h.read();if(e)break;let r=m.decode(n,{stream:!0});if(v&&(r=v+r,v=""),r.includes("\0")){const e=r.split("\0");v=null!==(u=e.pop())&&void 0!==u?u:"";for(const n of e)if(n)if(n.startsWith("__STATE__:")){const e=n.substring(10).replace(/\n$/,"");k(),d({type:"state",data:e})}else if(n.startsWith("__SEARCH__:")){const e=n.substring(11).replace(/\n$/,"");k(),d({type:"search",data:e})}else if(n.startsWith("__METADATA__:")){const e=n.substring(13).replace(/\n$/,"");k(),d({type:"metadata",data:e})}else if(n.startsWith("__SEARCH_QUERIES__:")){const e=n.substring(19).replace(/\n$/,"");k(),d({type:"search-queries",data:e})}else if(n.startsWith("__SUMMARY__:"))try{JSON.parse(n.substring(13))}catch(e){}else x(n);v&&!v.startsWith("__")&&(x(v),v="")}else x(r)}v&&(v.startsWith("__")||x(v))}finally{h.releaseLock()}}({chatflowId:e,sessionId:n,message:t,messages:r,mode:i,userMessageId:c.id,assistantMessageId:m.id,metadataFilters:s,signal:f.current.signal,onChunk:e=>{if("content"===e.type)g.current+=e.data,l(g.current);else if("metadata"===e.type)try{const n=JSON.parse(e.data);h.current={...h.current,docMetadata:n,mode:i}}catch(e){}else"state"===e.type&&u(e.data)}})}catch(e){"AbortError"===e.name||d(e)}finally{p.current&&g.current.trim()&&o(e=>[...e,{...p.current,content:g.current.trim(),metadata:{...p.current.metadata,...h.current}}]),a(!1),l(""),u("idle"),f.current=null,p.current=null,g.current="",h.current=null}},[e,r]),b=ge(async(r,t,a)=>{try{o(e=>e.map(e=>e.id===r?{...e,metadata:{...e.metadata,feedback:{rating:t,content:a,submittedAt:(new Date).toISOString(),isSubmitted:!0}}}:e));const i={embedMessageId:r,embedSessionId:n,chatflowId:e,feedbackType:"combined",feedbackData:{rating:"THUMBS_UP"===t?"thumbs_up":"thumbs_down",content:a||null},metadata:{domain:window.location.hostname,url:window.location.href,userAgent:navigator.userAgent}},l=await fetch(`${B}/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!l.ok){const e=await l.text();throw new Error(`Failed to submit feedback: ${l.statusText} - ${e}`)}await l.json()}catch(e){throw o(e=>e.map(e=>e.id===r?{...e,metadata:{...e.metadata,feedback:void 0}}:e)),e}},[n,e]);return{messages:r,sendMessage:v,isLoading:t,streamingContent:i,error:s,currentState:c,sessionId:n,submitFeedback:b,clearChat:m}}function Xl(e,n){const r=parseInt(e.replace("#",""),16),o=Math.round(2.55*n),t=(r>>16)-o,a=(r>>8&255)-o,i=(255&r)-o;return"#"+(16777216+65536*(t<255?t<1?0:t:255)+256*(a<255?a<1?0:a:255)+(i<255?i<1?0:i:255)).toString(16).slice(1)}function es(e,n){const r=parseInt(e.replace("#",""),16),o=Math.round(2.55*n),t=(r>>16)+o,a=(r>>8&255)+o,i=(255&r)+o;return"#"+(16777216+65536*(t<255?t<1?0:t:255)+256*(a<255?a<1?0:a:255)+(i<255?i<1?0:i:255)).toString(16).slice(1)}"undefined"!=typeof window&&function(){try{const e=Object.keys(localStorage),n=Date.now();e.forEach(e=>{if(e.startsWith(`${Ql}session_`))try{const r=JSON.parse(localStorage.getItem(e)||"{}");if(r.expiresAt&&r.expiresAt<n){localStorage.removeItem(e);const n=e.replace(`${Ql}session_`,"");localStorage.removeItem(`${Ql}messages_${n}`)}}catch(n){localStorage.removeItem(e)}})}catch(e){}}();const ns={colors:{primary:"#10316f",primaryDark:Xl("#10316f",10),primaryLight:es("#10316f",10),background:"#ffffff",surface:"#f8f9fa",text:"#353a5c",textSecondary:"#6b6f8a",border:"#e5e7eb",error:"#EF4444",success:"#10B981"},fonts:{base:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',mono:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1)"}},rs={colors:{primary:"#10316f",primaryDark:Xl("#10316f",10),primaryLight:es("#10316f",10),background:"#0f172a",surface:"#111827",text:"#e5e7eb",textSecondary:"#9ca3af",border:"#1f2937",error:"#F87171",success:"#34D399"},fonts:{base:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',mono:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.3)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.4)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.5)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.6)"}};function os(e,n){let r=ns;if("dark"===e)r=rs;else if("auto"===e){r=window.matchMedia("(prefers-color-scheme: dark)").matches?rs:ns}const o=function(e){if(!e)return null;let n=e.trim();if(!n)return null;"#"===n[0]&&(n=n.slice(1));3===n.length&&(n=n.split("").map(e=>e+e).join(""));if(!/^([0-9a-f]{6})$/i.test(n))return null;return`#${n.toLowerCase()}`}(n)||r.colors.primary;r={...r,colors:{...r.colors,primary:o,primaryDark:Xl(o,10),primaryLight:es(o,10)}};const t=function(e){const n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?`${parseInt(n[1],16)}, ${parseInt(n[2],16)}, ${parseInt(n[3],16)}`:"0, 0, 0"}(r.colors.primary);return document.documentElement.style.setProperty("--askdona-primary-rgb",t),r}function ts(e,n){for(var r in n)e[r]=n[r];return e}function as(e,n){for(var r in e)if("__source"!==r&&!(r in n))return!0;for(var o in n)if("__source"!==o&&e[o]!==n[o])return!0;return!1}function is(e,n){this.props=e,this.context=n}(is.prototype=new x).isPureReactComponent=!0,is.prototype.shouldComponentUpdate=function(e,n){return as(this.props,e)||as(this.state,n)};var ls=r.v;r.v=function(e){e.type&&e.type.B&&e.ref&&(e.props.ref=e.ref,e.ref=null),ls&&ls(e)};var ss="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var ds=r.S;r.S=function(e,n,r,o){if(e.then)for(var t,a=n;a=a.m;)if((t=a._)&&t._)return null==n.S&&(n.S=r.S,n.h=r.h),t._(e,n);ds(e,n,r,o)};var cs=r.unmount;function us(e,n,r){return e&&(e._&&e._.H&&(e._.H.m.forEach(function(e){"function"==typeof e._&&e._()}),e._.H=null),null!=(e=ts({},e))._&&(e._.q===r&&(e._.q=n),e._.S=!0,e._=null),e.h=e.h&&e.h.map(function(e){return us(e,n,r)})),e}function fs(e,n,r){return e&&r&&(e.C=null,e.h=e.h&&e.h.map(function(e){return fs(e,n,r)}),e._&&e._.q===n&&(e.S&&r.appendChild(e.S),e._.S=!0,e._.q=r)),e}function ps(){this.M=0,this.o=null,this.v=null}function gs(e){var n=e.m._;return n&&n.J&&n.J(e)}function hs(){this.i=null,this.l=null}r.unmount=function(e){var n=e._;n&&n.V&&n.V(),n&&32&e.M&&(e.type=null),cs&&cs(e)},(ps.prototype=new x)._=function(e,n){var r=n._,o=this;null==o.o&&(o.o=[]),o.o.push(r);var t=gs(o.C),a=!1,i=function(){a||(a=!0,r.V=null,t?t(l):l())};r.V=i;var l=function(){if(! --o.M){if(o.state.J){var e=o.state.J;o.C.h[0]=fs(e,e._.q,e._.W)}var n;for(o.setState({J:o.v=null});n=o.o.pop();)n.forceUpdate()}};o.M++||32&n.M||o.setState({J:o.v=o.C.h[0]}),e.then(i,i)},ps.prototype.componentWillUnmount=function(){this.o=[]},ps.prototype.render=function(e,n){if(this.v){if(this.C.h){var r=document.createElement("div"),o=this.C.h[0]._;this.C.h[0]=us(this.v,r,o.W=o.q)}this.v=null}var t=n.J&&b(k,null,e.fallback);return t&&(t.M&=-33),[b(k,null,n.J?null:e.children),t]};var ms=function(e,n,r){if(++r[1]===r[0]&&e.l.delete(n),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};(hs.prototype=new x).J=function(e){var n=this,r=gs(n.C),o=n.l.get(e);return o[0]++,function(t){var a=function(){n.props.revealOrder?(o.push(t),ms(n,e,o)):t()};r?r(a):a()}},hs.prototype.render=function(e){this.i=null,this.l=new Map;var n=M(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&n.reverse();for(var r=n.length;r--;)this.l.set(n[r],this.i=[1,0,this.i]);return e.children},hs.prototype.componentDidUpdate=hs.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(n,r){ms(e,r,n)})};var vs="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,bs=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ys=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,ks=/[A-Z0-9]/g,xs="undefined"!=typeof document,ws=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};x.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(x.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})});var Ss=r.event;function _s(){}function zs(){return this.cancelBubble}function Cs(){return this.defaultPrevented}r.event=function(e){return Ss&&(e=Ss(e)),e.persist=_s,e.isPropagationStopped=zs,e.isDefaultPrevented=Cs,e.nativeEvent=e};var $s={enumerable:!1,configurable:!0,get:function(){return this.class}},Ms=r.vnode;r.vnode=function(e){"string"==typeof e.type&&function(e){var n=e.props,r=e.type,o={},t=-1===r.indexOf("-");for(var a in n){var i=n[a];if(!("value"===a&&"defaultValue"in n&&null==i||xs&&"children"===a&&"noscript"===r||"class"===a||"className"===a)){var l=a.toLowerCase();"defaultValue"===a&&"value"in n&&null==n.value?a="value":"download"===a&&!0===i?i="":"translate"===l&&"no"===i?i=!1:"o"===l[0]&&"n"===l[1]?"ondoubleclick"===l?a="ondblclick":"onchange"!==l||"input"!==r&&"textarea"!==r||ws(n.type)?"onfocus"===l?a="onfocusin":"onblur"===l?a="onfocusout":ys.test(a)&&(a=l):l=a="oninput":t&&bs.test(a)?a=a.replace(ks,"-$&").toLowerCase():null===i&&(i=void 0),"oninput"===l&&o[a=l]&&(a="oninputCapture"),o[a]=i}}"select"==r&&o.multiple&&Array.isArray(o.value)&&(o.value=M(n.children).forEach(function(e){e.props.selected=-1!=o.value.indexOf(e.props.value)})),"select"==r&&null!=o.defaultValue&&(o.value=M(n.children).forEach(function(e){e.props.selected=o.multiple?-1!=o.defaultValue.indexOf(e.props.value):o.defaultValue==e.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",$s)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),e.props=o}(e),e.$$typeof=vs,Ms&&Ms(e)};var As=r.j;r.j=function(e){As&&As(e),e._};var js=r.diffed;r.diffed=function(e){js&&js(e);var n=e.props,r=e.S;null!=r&&"textarea"===e.type&&"value"in n&&n.value!==r.value&&(r.value=null==n.value?"":n.value)};const qs=e=>Math.min(255,Math.max(0,e)),Is=e=>{if(!e)return null;let n=e.trim();return n?("#"===n[0]&&(n=n.slice(1)),3===n.length&&(n=n.split("").map(e=>e+e).join("")),/^([0-9a-f]{6})$/i.test(n)?`#${n.toLowerCase()}`:null):null},Ds=(e,n)=>{const r=Is(e);if(!r)return e;const o=parseInt(r.slice(1),16),t=Math.round(2.55*n);return`#${((1<<24)+(qs((o>>16)+t)<<16)+(qs((o>>8&255)+t)<<8)+qs((255&o)+t)).toString(16).slice(1)}`},Es=e=>{const n=Is(e);if(!n)return null;const r=parseInt(n.slice(1),16);return`${r>>16&255}, ${r>>8&255}, ${255&r}`};Ne(b);const Os=function(e){function n(n){var r=ts({},n);return delete r.ref,e(r,n.ref||null)}return n.$$typeof=ss,n.render=n,n.prototype.isReactComponent=n.B=!0,n.displayName="ForwardRef("+(e.displayName||e.name)+")",n}(({config:e},n)=>{const[r,o]=de({isOpen:"fullscreen"===e.displayMode,currentMode:"ask-ai",messages:[],isLoading:!1,streamingContent:"",error:null,chatMode:"standard",showIntro:!0,metadataFilters:null}),{isValid:t,error:a,config:i}=Vl(e.chatflowId),[l,s]=de(null);ce(()=>{V(e.chatflowId,e.language).then(e=>{e&&e.embedConfig&&s(e.embedConfig)}).catch(()=>{s(null)})},[e.chatflowId,e.language]);const d="boolean"!=typeof e.enableDeepResearch||e.enableDeepResearch,c="boolean"==typeof e.enableRagDeepResearch?e.enableRagDeepResearch:d,u={...e,enableDeepResearch:d,enableRagDeepResearch:c};if(l){if(l.introTitle&&(u.introTitle=l.introTitle),l.introMessage&&(u.introMessage=l.introMessage),l.exampleQuestions&&(u.exampleQuestions=l.exampleQuestions),l.appearanceSettings){const e=l.appearanceSettings.primaryColor||void 0,n=l.appearanceSettings.theme||void 0,r=l.appearanceSettings.position||void 0,o=l.appearanceSettings.displayMode||void 0,t=l.appearanceSettings.backgroundColor||void 0,a=l.appearanceSettings.borderColor||void 0,i=l.appearanceSettings.chatIconColor||void 0,s=l.appearanceSettings.tabAccentColor||void 0,d=l.appearanceSettings.modeActiveColor||void 0;u.primaryColor=u.primaryColor||e,u.theme=u.theme||n,u.position=u.position||r,u.displayMode=u.displayMode||o,u.backgroundColor=u.backgroundColor||t,u.borderColor=u.borderColor||a,u.chatIconColor=u.chatIconColor||i,u.tabAccentColor=u.tabAccentColor||s,u.modeActiveColor=u.modeActiveColor||d}l.featureFlags&&("boolean"==typeof l.featureFlags.enableBoostMode&&(u.defaultBoostMode=!!l.featureFlags.enableBoostMode),"boolean"==typeof l.featureFlags.allowBoostModeToggle&&(u.allowBoostModeToggle=!!l.featureFlags.allowBoostModeToggle),"boolean"==typeof l.featureFlags.enableRagDeepResearch&&(u.enableRagDeepResearch=!!l.featureFlags.enableRagDeepResearch),"boolean"==typeof l.featureFlags.enableDeepResearch&&(u.enableDeepResearch=!!l.featureFlags.enableDeepResearch))}else i&&(u.introTitle=i.introTitle,u.introMessage=i.introMessage,u.exampleQuestions=i.exampleQuestions,u.theme=i.theme,u.position=i.position,u.primaryColor=i.primaryColor,u.defaultBoostMode=i.defaultBoostMode,u.allowBoostModeToggle=i.allowBoostModeToggle,u.displayMode=e.displayMode);u.enableDeepResearch&&(u.enableRagDeepResearch=!0);const f=os(u.theme||"light",u.primaryColor),p=!!u.debug,g=u.displayMode||"modal",h=r.isOpen,m=!h&&"fullscreen"!==g;ce(()=>{},[p,g,h,m]),ce(()=>{if("undefined"==typeof document)return;const e=document.querySelector("askdona-widget");e&&("fullscreen"!==g?"function"==typeof e.toggleAttribute?e.toggleAttribute("data-open",h):h?e.setAttribute("data-open",""):e.removeAttribute("data-open"):e.removeAttribute("data-open"))},[h,g,p]);const{messages:v,sendMessage:b,isLoading:y,streamingContent:k,error:x,currentState:w,sessionId:S,submitFeedback:_,clearChat:z}=Yl(e.chatflowId);ce(()=>{o(e=>({...e,messages:v,isLoading:y,streamingContent:k,error:a||x,showIntro:0===v.length&&e.showIntro}))},[v,y,k,a,x]),ce(()=>{if(i){const e=i.defaultBoostMode?"boost":"standard";o(n=>n.chatMode===e?n:{...n,chatMode:e})}},[i]),function(e,n,r){X=6,ue(function(){if("function"==typeof e){var r=e(n());return function(){e(null),r&&"function"==typeof r&&r()}}if(e)return e.current=n(),function(){return e.current=null}},null==r?r:r.concat(e))}(n,()=>({open:()=>{o(e=>({...e,isOpen:!0}))},close:()=>{o(e=>({...e,isOpen:!1}))},sendMessage:e=>{o(e=>({...e,isOpen:!0})),b(e)}}),[b]);const C=fe(null);if(ce(()=>{if(!C.current)return;const e=C.current;e.style.setProperty("--askdona-primary",f.colors.primary),e.style.setProperty("--askdona-primary-dark",f.colors.primaryDark),e.style.setProperty("--askdona-primary-light",f.colors.primaryLight);const n=Es(f.colors.primary);n?e.style.setProperty("--askdona-primary-rgb",n):e.style.removeProperty("--askdona-primary-rgb"),e.style.setProperty("--askdona-background",f.colors.background),e.style.setProperty("--askdona-surface",f.colors.surface),e.style.setProperty("--askdona-text",f.colors.text),e.style.setProperty("--askdona-text-secondary",f.colors.textSecondary),e.style.setProperty("--askdona-border",f.colors.border),e.style.setProperty("--askdona-error",f.colors.error),e.style.setProperty("--askdona-success",f.colors.success);const r=Es(f.colors.error);r?e.style.setProperty("--askdona-error-rgb",r):e.style.removeProperty("--askdona-error-rgb");const o=Es(f.colors.success);if(o?e.style.setProperty("--askdona-success-rgb",o):e.style.removeProperty("--askdona-success-rgb"),e.style.setProperty("--askdona-font-base",f.fonts.base),e.style.setProperty("--askdona-font-mono",f.fonts.mono),e.style.setProperty("--askdona-bg-secondary",f.colors.surface),e.style.setProperty("--askdona-bg-hover",f.colors.primaryLight+"20"),e.style.setProperty("--askdona-surface-color",f.colors.background),e.style.setProperty("--askdona-border-color",f.colors.border),u.backgroundColor){const n=u.backgroundColor;e.style.setProperty("--askdona-background",n),e.style.setProperty("--askdona-surface",Ds(n,-4)),e.style.setProperty("--askdona-bg-secondary",Ds(n,-2)),e.style.setProperty("--askdona-surface-color",n)}u.borderColor&&(e.style.setProperty("--askdona-border",u.borderColor),e.style.setProperty("--askdona-border-color",u.borderColor));const t=u.chatIconColor||f.colors.primary;e.style.setProperty("--askdona-chat-icon",t);const a=u.tabAccentColor||f.colors.primary;e.style.setProperty("--askdona-tab-accent",a);const i=Es(a);i?e.style.setProperty("--askdona-tab-accent-rgb",i):e.style.removeProperty("--askdona-tab-accent-rgb");const l=u.modeActiveColor||f.colors.primary;e.style.setProperty("--askdona-mode-active",l),e.style.setProperty("--askdona-mode-active-hover",Ds(l,-12))},[f,u.backgroundColor,u.borderColor,u.chatIconColor,u.tabAccentColor,u.modeActiveColor]),!t)return null;return W("div",{ref:C,style:{fontFamily:"var(--askdona-font-base)",color:"var(--askdona-text)"},children:[m&&W(Bl,{onClick:()=>{o(e=>({...e,isOpen:!0}))},position:u.position||"bottom-right"}),(h||"fullscreen"===g)&&W(Il,{isOpen:h||"fullscreen"===g,onClose:()=>{"fullscreen"!==g&&o(e=>({...e,isOpen:!1}))},currentMode:r.currentMode,onModeSwitch:e=>{o(n=>({...n,currentMode:e}))},messages:r.messages,isLoading:r.isLoading,streamingContent:r.streamingContent,onSendMessage:(e,n,t)=>{const a=n||r.chatMode;b(e,a,t||r.metadataFilters),o(e=>({...e,showIntro:!1}))},error:r.error,config:u,currentState:w,chatMode:r.chatMode,onChatModeChange:e=>{o(n=>({...n,chatMode:e}))},sessionId:S,onFeedbackSubmit:_,onClearChat:()=>{z(),o(e=>({...e,showIntro:!0}))},showIntro:r.showIntro,displayMode:g,metadataFilters:r.metadataFilters,onMetadataFiltersChange:e=>{o(n=>({...n,metadataFilters:e}))}})]})});Os.displayName="Widget";const Ns=["chatflow-id","theme","position","primary-color","background-color","border-color","chat-icon-color","tab-accent-color","mode-active-color","language","chatbot-title","display-mode","custom-css","debug","instrument-serif-regular","instrument-serif-600","data-open"];class Rs extends HTMLElement{constructor(){super(...arguments),this.widgetRef={current:null},this.initialised=!1,this.gooberReady=!1}static get observedAttributes(){return Ns}connectedCallback(){if(this.initialised)return;this.initialised=!0,this.shadow=this.attachShadow({mode:"open"});const e=document.createElement("style");e.textContent="\n  /* Ensure font available within shadow */\n  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block');\n  :host {\n    all: initial;\n    position: fixed;\n    inset: auto;\n    z-index: 999999; /* Keep on top of most sites */\n  }\n\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n\n  /* Scoped scrollbar styling */\n  *::-webkit-scrollbar { width: 6px; height: 6px; }\n  *::-webkit-scrollbar-track { background: transparent; }\n  *::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.2); border-radius: 3px; }\n  *::-webkit-scrollbar-thumb:hover { background: rgba(0, 0, 0, 0.3); }\n\n  @media (prefers-reduced-motion: reduce) {\n    * { animation: none !important; transition: none !important; }\n  }\n",this.shadow.appendChild(e);const n="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",r=Array.from(this.shadow.querySelectorAll("link")).some(e=>e.getAttribute("href")===n);if(!r){const e=document.createElement("link");e.rel="stylesheet",e.href=n,this.shadow.appendChild(e)}const o=this.getAttribute("instrument-serif-regular"),t=this.getAttribute("instrument-serif-600");if(o||t){if(o){const e=document.createElement("link");e.rel="preload",e.as="font",e.href=o,e.type="font/woff2",e.crossOrigin="anonymous",this.shadow.appendChild(e)}if(t){const e=document.createElement("link");e.rel="preload",e.as="font",e.href=t,e.type="font/woff2",e.crossOrigin="anonymous",this.shadow.appendChild(e)}const e=document.createElement("style");e.textContent=`\n        ${o?`@font-face { font-family: 'Instrument Serif'; font-style: normal; font-weight: 400; font-display: swap; src: url('${o}') format('woff2'); }`:""}\n        ${t?`@font-face { font-family: 'Instrument Serif'; font-style: normal; font-weight: 600; font-display: swap; src: url('${t}') format('woff2'); }`:""}\n      `,this.shadow.appendChild(e)}else{const e=document.createElement("link");e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",this.shadow.appendChild(e);const n="askdona-font-global";if(!document.getElementById(n)){const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",document.head.appendChild(e);const r=document.createElement("link");r.rel="preconnect",r.href="https://fonts.gstatic.com",r.crossOrigin="anonymous",document.head.appendChild(r);const o=document.createElement("link");o.id=n,o.rel="stylesheet",o.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",document.head.appendChild(o)}}const a="askdona-font-global";if(!document.getElementById(a)){const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",document.head.appendChild(e);const n=document.createElement("link");n.rel="preconnect",n.href="https://fonts.gstatic.com",n.crossOrigin="anonymous",document.head.appendChild(n);const r=document.createElement("link");r.id=a,r.rel="stylesheet",r.href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block",document.head.appendChild(r)}this.gooberStyleEl=document.createElement("style"),this.gooberStyleEl.id="_goober",this.gooberStyleEl.appendChild(document.createTextNode(" ")),this.shadow.appendChild(this.gooberStyleEl),window._goober=this.gooberStyleEl;try{Ne(b),this.gooberReady=!0}catch(e){this.gooberReady=!1}this.mountPoint=document.createElement("div"),this.shadow.appendChild(this.mountPoint),this.applyPosition();const i=this.getAttribute("custom-css");if(i){const e=document.createElement("link");e.rel="stylesheet",e.href=i,this.shadow.appendChild(e)}if(!window.katex){const e="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js",n=Array.from(document.querySelectorAll("script")).some(n=>n.getAttribute("src")===e);if(!n){const n=document.createElement("script");n.src=e,n.async=!0,document.head.appendChild(n)}}try{this.gooberReady&&this.renderWidget()}catch(e){}}disconnectedCallback(){if(this.mountPoint&&P(null,this.mountPoint),window._goober===this.gooberStyleEl)try{delete window._goober}catch(e){window._goober=null}}attributeChangedCallback(e,n,r){try{this.applyPosition(),this.initialised&&this.gooberReady&&this.renderWidget()}catch(e){}}open(){var e;null===(e=this.widgetRef.current)||void 0===e||e.open()}close(){var e;null===(e=this.widgetRef.current)||void 0===e||e.close()}sendMessage(e){var n;null===(n=this.widgetRef.current)||void 0===n||n.sendMessage(e)}applyPosition(){const e=this.getAttribute("position")||"bottom-right",n=this.getAttribute("display-mode")||"modal",r=this.hasAttribute("data-open");return"fullscreen"===n?(this.style.position="fixed",this.style.inset="0",this.style.top="0",this.style.left="0",this.style.right="0",this.style.bottom="0",this.style.width="100%",void(this.style.height="100%")):(this.style.position="fixed","modal"===n&&r?(this.style.inset="0",this.style.top="0",this.style.left="0",this.style.right="0",this.style.bottom="0",this.style.width="100%",void(this.style.height="100%")):(this.style.inset="auto",this.style.top="",this.style.bottom="20px",this.style.left="bottom-left"===e?"20px":"",this.style.right="bottom-right"===e?"20px":"",this.style.width="",void(this.style.height="")))}getConfig(){const e=this.getAttribute("chatflow-id")||"";if(!e)return null;return{chatflowId:e,theme:this.getAttribute("theme")||void 0,position:this.getAttribute("position")||void 0,primaryColor:this.getAttribute("primary-color")||void 0,backgroundColor:this.getAttribute("background-color")||void 0,borderColor:this.getAttribute("border-color")||void 0,chatIconColor:this.getAttribute("chat-icon-color")||void 0,tabAccentColor:this.getAttribute("tab-accent-color")||void 0,modeActiveColor:this.getAttribute("mode-active-color")||void 0,language:this.getAttribute("language")||void 0,chatbotTitle:this.getAttribute("chatbot-title")||void 0,displayMode:this.getAttribute("display-mode")||void 0,debug:this.hasAttribute("debug")?"true"===this.getAttribute("debug"):void 0}}renderWidget(){const e=this.getConfig();if(e)try{P(W(Os,{ref:this.widgetRef,config:e}),this.mountPoint)}catch(e){throw e}}}function Fs(){customElements.get("askdona-widget")||customElements.define("askdona-widget",Rs)}let Ts={current:null};async function Ps(e){var n,r,o,t;try{const a=function(e){return e.chatflowId?e.theme&&!["light","dark","auto"].includes(e.theme)?{isValid:!1,error:'Invalid theme. Must be "light", "dark", or "auto"'}:e.position&&!["bottom-right","bottom-left"].includes(e.position)?{isValid:!1,error:'Invalid position. Must be "bottom-right" or "bottom-left"'}:e.language&&!["ja","en"].includes(e.language)?{isValid:!1,error:'Invalid language. Must be "ja" or "en"'}:{isValid:!0}:{isValid:!1,error:"chatflowId is required"}}(e);if(!a.isValid)throw new Error(a.error);!function(){if(!document.querySelector('meta[name="askdona-csp"]')){const e=document.createElement("meta");e.name="askdona-csp",e.content=["default-src 'self'","script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net","style-src 'self' 'unsafe-inline'","img-src 'self' data: https:","connect-src 'self' https://api.askdona.com wss://api.askdona.com","font-src 'self' data:","frame-ancestors 'none'"].join("; "),document.head.appendChild(e)}}();let i=null;try{i=await V(e.chatflowId,e.language)}catch(e){}let l={...e};if(null==i?void 0:i.embedConfig){const e=i.embedConfig.introTitle&&i.embedConfig.introMessage?{title:i.embedConfig.introTitle,message:i.embedConfig.introMessage}:null;e&&(l.introTitle=e.title,l.introMessage=e.message),i.embedConfig.exampleQuestions&&(l.exampleQuestions=i.embedConfig.exampleQuestions),i.embedConfig.featureFlags&&(l.defaultBoostMode=i.embedConfig.featureFlags.enableBoostMode,l.allowBoostModeToggle=i.embedConfig.featureFlags.allowBoostModeToggle,l.enableRagDeepResearch=i.embedConfig.featureFlags.enableRagDeepResearch),i.embedConfig.appearanceSettings&&(!l.primaryColor&&i.embedConfig.appearanceSettings.primaryColor&&(l.primaryColor=i.embedConfig.appearanceSettings.primaryColor),!l.theme&&i.embedConfig.appearanceSettings.theme&&(l.theme=i.embedConfig.appearanceSettings.theme),!l.position&&i.embedConfig.appearanceSettings.position&&(l.position=i.embedConfig.appearanceSettings.position),!l.displayMode&&i.embedConfig.appearanceSettings.displayMode&&(l.displayMode=i.embedConfig.appearanceSettings.displayMode),!l.backgroundColor&&i.embedConfig.appearanceSettings.backgroundColor&&(l.backgroundColor=i.embedConfig.appearanceSettings.backgroundColor),!l.borderColor&&i.embedConfig.appearanceSettings.borderColor&&(l.borderColor=i.embedConfig.appearanceSettings.borderColor),!l.chatIconColor&&i.embedConfig.appearanceSettings.chatIconColor&&(l.chatIconColor=i.embedConfig.appearanceSettings.chatIconColor),!l.tabAccentColor&&i.embedConfig.appearanceSettings.tabAccentColor&&(l.tabAccentColor=i.embedConfig.appearanceSettings.tabAccentColor),!l.modeActiveColor&&i.embedConfig.appearanceSettings.modeActiveColor&&(l.modeActiveColor=i.embedConfig.appearanceSettings.modeActiveColor))}Fs(),l.displayMode||(l.displayMode="modal");let s=document.querySelector("askdona-widget");if(s)s.setAttribute("chatflow-id",l.chatflowId),l.theme&&s.setAttribute("theme",l.theme),l.position&&s.setAttribute("position",l.position),l.primaryColor&&s.setAttribute("primary-color",l.primaryColor),l.language&&s.setAttribute("language",l.language),l.backgroundColor?s.setAttribute("background-color",l.backgroundColor):s.removeAttribute("background-color"),l.borderColor?s.setAttribute("border-color",l.borderColor):s.removeAttribute("border-color"),l.chatIconColor?s.setAttribute("chat-icon-color",l.chatIconColor):s.removeAttribute("chat-icon-color"),l.tabAccentColor?s.setAttribute("tab-accent-color",l.tabAccentColor):s.removeAttribute("tab-accent-color"),l.modeActiveColor?s.setAttribute("mode-active-color",l.modeActiveColor):s.removeAttribute("mode-active-color"),s.setAttribute("display-mode",l.displayMode||"modal"),l.customCSS&&s.setAttribute("custom-css",l.customCSS),l.chatbotTitle?s.setAttribute("chatbot-title",l.chatbotTitle):s.removeAttribute("chatbot-title"),(null===(o=l.instrumentSerif)||void 0===o?void 0:o.w400)&&s.setAttribute("instrument-serif-regular",l.instrumentSerif.w400),(null===(t=l.instrumentSerif)||void 0===t?void 0:t.w600)&&s.setAttribute("instrument-serif-600",l.instrumentSerif.w600),l.debug&&s.setAttribute("debug",String(!!l.debug));else{s=document.createElement("askdona-widget"),s.setAttribute("chatflow-id",l.chatflowId),l.theme&&s.setAttribute("theme",l.theme),l.position&&s.setAttribute("position",l.position),l.primaryColor&&s.setAttribute("primary-color",l.primaryColor),l.language&&s.setAttribute("language",l.language),l.backgroundColor&&s.setAttribute("background-color",l.backgroundColor),l.borderColor&&s.setAttribute("border-color",l.borderColor),l.chatIconColor&&s.setAttribute("chat-icon-color",l.chatIconColor),l.tabAccentColor&&s.setAttribute("tab-accent-color",l.tabAccentColor),l.modeActiveColor&&s.setAttribute("mode-active-color",l.modeActiveColor),s.setAttribute("display-mode",l.displayMode||"modal"),l.customCSS&&s.setAttribute("custom-css",l.customCSS),l.chatbotTitle&&s.setAttribute("chatbot-title",l.chatbotTitle),(null===(n=l.instrumentSerif)||void 0===n?void 0:n.w400)&&s.setAttribute("instrument-serif-regular",l.instrumentSerif.w400),(null===(r=l.instrumentSerif)||void 0===r?void 0:r.w600)&&s.setAttribute("instrument-serif-600",l.instrumentSerif.w600),l.debug&&s.setAttribute("debug",String(!!l.debug));(e=>{const n=document.body||document.documentElement;n?n.appendChild(e):window.addEventListener("DOMContentLoaded",()=>{const n=document.body||document.documentElement;!e.isConnected&&n&&n.appendChild(e)},{once:!0})})(s)}l.onReady&&setTimeout(()=>{l.onReady&&l.onReady()},0),l.debug}catch(n){e.onError&&e.onError(n)}}function Ls(){const e=document.querySelector("askdona-widget");e&&e.parentNode&&e.parentNode.removeChild(e),Ts={current:null}}function Hs(){const e=document.querySelector("askdona-widget");return e&&"function"==typeof e.open?e.open():Ts.current?Ts.current.open():void 0}function Us(){const e=document.querySelector("askdona-widget");return e&&"function"==typeof e.close?e.close():Ts.current?Ts.current.close():void 0}function Bs(e){const n=document.querySelector("askdona-widget");return n&&"function"==typeof n.sendMessage?n.sendMessage(e):Ts.current?Ts.current.sendMessage(e):void 0}if("undefined"!=typeof window){Fs();const e=document.currentScript;e&&e.dataset.chatflowId&&window.addEventListener("DOMContentLoaded",async()=>{const n=e.dataset.chatflowId;if(n)try{await Ps({chatflowId:n,theme:e.dataset.theme,position:e.dataset.position,primaryColor:e.dataset.primaryColor,language:e.dataset.language,displayMode:e.dataset.displayMode})}catch(e){}})}return window.AskDona={init:Ps,destroy:Ls,open:Hs,close:Us,sendMessage:Bs},e.close=Us,e.destroy=Ls,e.init=Ps,e.open=Hs,e.sendMessage=Bs,e}({});
