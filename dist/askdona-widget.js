var AskDona = (function (exports) {
  'use strict';

  var n$1,l$2,u$3,i$2,r$1,o$2,e$2,f$3,c$2,s$2,a$2,p$2={},v$1=[],y$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,w$1=Array.isArray;function d$2(n,l){for(var u in l)n[u]=l[u];return n}function g$2(n){n&&n.parentNode&&n.parentNode.removeChild(n);}function _$1(l,u,t){var i,r,o,e={};for(o in u)"key"==o?i=u[o]:"ref"==o?r=u[o]:e[o]=u[o];if(arguments.length>2&&(e.children=arguments.length>3?n$1.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps) void 0===e[o]&&(e[o]=l.defaultProps[o]);return m$2(l,e,i,r,null)}function m$2(n,t,i,r,o){var e={type:n,props:t,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++u$3:o,__i:-1,__u:0};return null==o&&null!=l$2.vnode&&l$2.vnode(e),e}function b(){return {current:null}}function k$1(n){return n.children}function x(n,l){this.props=n,this.context=l;}function S(n,l){if(null==l)return n.__?S(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?S(n):null}function C$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C$1(n)}}function M(n){(!n.__d&&(n.__d=true)&&i$2.push(n)&&!$.__r++||r$1!=l$2.debounceRendering)&&((r$1=l$2.debounceRendering)||o$2)($);}function $(){for(var n,u,t,r,o,f,c,s=1;i$2.length;)i$2.length>s&&i$2.sort(e$2),n=i$2.shift(),s=i$2.length,n.__d&&(t=void 0,o=(r=(u=n).__v).__e,f=[],c=[],u.__P&&((t=d$2({},r)).__v=r.__v+1,l$2.vnode&&l$2.vnode(t),O(u.__P,t,r,u.__n,u.__P.namespaceURI,32&r.__u?[o]:null,f,null==o?S(r):o,!!(32&r.__u),c),t.__v=r.__v,t.__.__k[t.__i]=t,z$1(f,t,c),t.__e!=o&&C$1(t)));$.__r=0;}function I(n,l,u,t,i,r,o,e,f,c,s){var a,h,y,w,d,g,_=t&&t.__k||v$1,m=l.length;for(f=P$1(u,l,_,f,m),a=0;a<m;a++)null!=(y=u.__k[a])&&(h=-1==y.__i?p$2:_[y.__i]||p$2,y.__i=a,g=O(n,y,h,i,r,o,e,f,c,s),w=y.__e,y.ref&&h.ref!=y.ref&&(h.ref&&q$2(h.ref,null,y),s.push(y.ref,y.__c||w,y)),null==d&&null!=w&&(d=w),4&y.__u||h.__k===y.__k?f=A$2(y,f,n):"function"==typeof y.type&&void 0!==g?f=g:w&&(f=w.nextSibling),y.__u&=-7);return u.__e=d,f}function P$1(n,l,u,t,i){var r,o,e,f,c,s=u.length,a=s,h=0;for(n.__k=new Array(i),r=0;r<i;r++)null!=(o=l[r])&&"boolean"!=typeof o&&"function"!=typeof o?(f=r+h,(o=n.__k[r]="string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?m$2(null,o,null,null,null):w$1(o)?m$2(k$1,{children:o},null,null,null):null==o.constructor&&o.__b>0?m$2(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=n,o.__b=n.__b+1,e=null,-1!=(c=o.__i=L(o,u,f,a))&&(a--,(e=u[c])&&(e.__u|=2)),null==e||null==e.__v?(-1==c&&(i>s?h--:i<s&&h++),"function"!=typeof o.type&&(o.__u|=4)):c!=f&&(c==f-1?h--:c==f+1?h++:(c>f?h--:h++,o.__u|=4))):n.__k[r]=null;if(a)for(r=0;r<s;r++)null!=(e=u[r])&&0==(2&e.__u)&&(e.__e==t&&(t=S(e)),B$2(e,e));return t}function A$2(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=A$2(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=S(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8==l.nodeType);return l}function H$1(n,l){return l=l||[],null==n||"boolean"==typeof n||(w$1(n)?n.some(function(n){H$1(n,l);}):l.push(n)),l}function L(n,l,u,t){var i,r,o=n.key,e=n.type,f=l[u];if(null===f&&null==n.key||f&&o==f.key&&e==f.type&&0==(2&f.__u))return u;if(t>(null!=f&&0==(2&f.__u)?1:0))for(i=u-1,r=u+1;i>=0||r<l.length;){if(i>=0){if((f=l[i])&&0==(2&f.__u)&&o==f.key&&e==f.type)return i;i--;}if(r<l.length){if((f=l[r])&&0==(2&f.__u)&&o==f.key&&e==f.type)return r;r++;}}return  -1}function T$2(n,l,u){"-"==l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||y$1.test(l)?u:u+"px";}function j$3(n,l,u,t,i){var r,o;n:if("style"==l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T$2(n.style,l,"");if(u)for(l in u)t&&u[l]==t[l]||T$2(n.style,l,u[l]);}else if("o"==l[0]&&"n"==l[1])r=l!=(l=l.replace(f$3,"$1")),o=l.toLowerCase(),l=o in n||"onFocusOut"==l||"onFocusIn"==l?o.slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?t?u.u=t.u:(u.u=c$2,n.addEventListener(l,r?a$2:s$2,r)):n.removeEventListener(l,r?a$2:s$2,r);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||false===u&&"-"!=l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u));}}function F$2(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=c$2++;else if(u.t<t.u)return;return t(l$2.event?l$2.event(u):u)}}}function O(n,u,t,i,r,o,e,f,c,s){var a,h,p,v,y,_,m,b,S,C,M,$,P,A,H,L,T,j=u.type;if(null!=u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),o=[f=u.__e=t.__e]),(a=l$2.__b)&&a(u);n:if("function"==typeof j)try{if(b=u.props,S="prototype"in j&&j.prototype.render,C=(a=j.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?m=(h=u.__c=t.__c).__=h.__E:(S?u.__c=h=new j(b,M):(u.__c=h=new x(b,M),h.constructor=j,h.render=D$2),C&&C.sub(h),h.props=b,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),S&&null==h.__s&&(h.__s=h.state),S&&null!=j.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d$2({},h.__s)),d$2(h.__s,j.getDerivedStateFromProps(b,h.__s))),v=h.props,y=h.state,h.__v=u,p)S&&null==j.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),S&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(S&&null==j.getDerivedStateFromProps&&b!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,M),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,M)||u.__v==t.__v){for(u.__v!=t.__v&&(h.props=b,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u);}),$=0;$<h._sb.length;$++)h.__h.push(h._sb[$]);h._sb=[],h.__h.length&&e.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,M),S&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,y,_);});}if(h.context=M,h.props=b,h.__P=n,h.__e=!1,P=l$2.__r,A=0,S){for(h.state=h.__s,h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++A<25);h.state=h.__s,null!=h.getChildContext&&(i=d$2(d$2({},i),h.getChildContext())),S&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,y)),L=a,null!=a&&a.type===k$1&&null==a.key&&(L=N$1(a.props.children)),f=I(n,w$1(L)?L:[L],u,t,i,r,o,e,f,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&e.push(h),m&&(h.__E=h.__=null);}catch(n){if(u.__v=null,c||null!=o)if(n.then){for(u.__u|=c?160:128;f&&8==f.nodeType&&f.nextSibling;)f=f.nextSibling;o[o.indexOf(f)]=null,u.__e=f;}else for(T=o.length;T--;)g$2(o[T]);else u.__e=t.__e,u.__k=t.__k;l$2.__e(n,u,t);}else null==o&&u.__v==t.__v?(u.__k=t.__k,u.__e=t.__e):f=u.__e=V$1(t.__e,u,t,i,r,o,e,c,s);return (a=l$2.diffed)&&a(u),128&u.__u?void 0:f}function z$1(n,u,t){for(var i=0;i<t.length;i++)q$2(t[i],t[++i],t[++i]);l$2.__c&&l$2.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$2.__e(n,u.__v);}});}function N$1(n){return "object"!=typeof n||null==n||n.__b&&n.__b>0?n:w$1(n)?n.map(N$1):d$2({},n)}function V$1(u,t,i,r,o,e,f,c,s){var a,h,v,y,d,_,m,b=i.props,k=t.props,x=t.type;if("svg"==x?o="http://www.w3.org/2000/svg":"math"==x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=e)for(a=0;a<e.length;a++)if((d=e[a])&&"setAttribute"in d==!!x&&(x?d.localName==x:3==d.nodeType)){u=d,e[a]=null;break}if(null==u){if(null==x)return document.createTextNode(k);u=document.createElementNS(o,x,k.is&&k),c&&(l$2.__m&&l$2.__m(t,e),c=false),e=null;}if(null==x)b===k||c&&u.data==k||(u.data=k);else {if(e=e&&n$1.call(u.childNodes),b=i.props||p$2,!c&&null!=e)for(b={},a=0;a<u.attributes.length;a++)b[(d=u.attributes[a]).name]=d.value;for(a in b)if(d=b[a],"children"==a);else if("dangerouslySetInnerHTML"==a)v=d;else if(!(a in k)){if("value"==a&&"defaultValue"in k||"checked"==a&&"defaultChecked"in k)continue;j$3(u,a,null,d,o);}for(a in k)d=k[a],"children"==a?y=d:"dangerouslySetInnerHTML"==a?h=d:"value"==a?_=d:"checked"==a?m=d:c&&"function"!=typeof d||b[a]===d||j$3(u,a,d,b[a],o);if(h)c||v&&(h.__html==v.__html||h.__html==u.innerHTML)||(u.innerHTML=h.__html),t.__k=[];else if(v&&(u.innerHTML=""),I("template"==t.type?u.content:u,w$1(y)?y:[y],t,i,r,"foreignObject"==x?"http://www.w3.org/1999/xhtml":o,e,f,e?e[0]:i.__k&&S(i,0),c,s),null!=e)for(a=e.length;a--;)g$2(e[a]);c||(a="value","progress"==x&&null==_?u.removeAttribute("value"):null!=_&&(_!==u[a]||"progress"==x&&!_||"option"==x&&_!=b[a])&&j$3(u,a,_,b[a],o),a="checked",null!=m&&m!=u[a]&&j$3(u,a,m,b[a],o));}return u}function q$2(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u));}else n.current=u;}catch(n){l$2.__e(n,t);}}function B$2(n,u,t){var i,r;if(l$2.unmount&&l$2.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||q$2(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$2.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&B$2(i[r],u,t||"function"!=typeof n.type);t||g$2(n.__e),n.__c=n.__=n.__e=void 0;}function D$2(n,l,u){return this.constructor(n,u)}function E$1(u,t,i){var r,o,e,f;t==document&&(t=document.documentElement),l$2.__&&l$2.__(u,t),o=(r="function"=="undefined")?null:t.__k,e=[],f=[],O(t,u=(t).__k=_$1(k$1,null,[u]),o||p$2,p$2,t.namespaceURI,o?null:t.firstChild?n$1.call(t.childNodes):null,e,o?o.__e:t.firstChild,r,f),z$1(e,u,f);}n$1=v$1.slice,l$2={__e:function(n,l,u,t){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),o=i.__d),o)return i.__E=i}catch(l){n=l;}throw n}},u$3=0,x.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=d$2({},this.state),"function"==typeof n&&(n=n(d$2({},u),this.props)),n&&d$2(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this));},x.prototype.forceUpdate=function(n){this.__v&&(this.__e=true,n&&this.__h.push(n),M(this));},x.prototype.render=k$1,i$2=[],o$2="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e$2=function(n,l){return n.__v.__b-l.__v.__b},$.__r=0,f$3=/(PointerCapture)$|Capture$/i,c$2=0,s$2=F$2(false),a$2=F$2(true);

  var f$2=0;function u$2(e,t,n,o,i,u){t||(t={});var a,c,p=t;if("ref"in p)for(c in p={},t)"ref"==c?a=t[c]:p[c]=t[c];var l={type:e,props:p,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--f$2,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a) void 0===p[c]&&(p[c]=a[c]);return l$2.vnode&&l$2.vnode(l),l}

  var t$1,r,u$1,i$1,o$1=0,f$1=[],c$1=l$2,e$1=c$1.__b,a$1=c$1.__r,v=c$1.diffed,l$1=c$1.__c,m$1=c$1.unmount,s$1=c$1.__;function p$1(n,t){c$1.__h&&c$1.__h(r,n,o$1||t),o$1=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function d$1(n){return o$1=1,h$1(D$1,n)}function h$1(n,u,i){var o=p$1(t$1++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):D$1(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.__f)){var f=function(n,t,r){if(!o.__c.__H)return  true;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=o.__c.props!==n;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=true);}}),c&&c.call(this,n,t,r)||i};r.__f=true;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function y(n,u){var i=p$1(t$1++,3);!c$1.__s&&C(i.__H,u)&&(i.__=n,i.u=u,r.__H.__h.push(i));}function _(n,u){var i=p$1(t$1++,4);!c$1.__s&&C(i.__H,u)&&(i.__=n,i.u=u,r.__h.push(i));}function A$1(n){return o$1=5,T$1(function(){return {current:n}},[])}function F$1(n,t,r){o$1=6,_(function(){if("function"==typeof n){var r=n(t());return function(){n(null),r&&"function"==typeof r&&r();}}if(n)return n.current=t(),function(){return n.current=null}},null==r?r:r.concat(n));}function T$1(n,r){var u=p$1(t$1++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function q$1(n,t){return o$1=8,T$1(function(){return n},t)}function j$2(){for(var n;n=f$1.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B$1),n.__H.__h=[];}catch(t){n.__H.__h=[],c$1.__e(t,n.__v);}}c$1.__b=function(n){r=null,e$1&&e$1(n);},c$1.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s$1&&s$1(n,t);},c$1.__r=function(n){a$1&&a$1(n),t$1=0;var i=(r=n.__c).__H;i&&(u$1===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(i.__h.forEach(z),i.__h.forEach(B$1),i.__h=[],t$1=0)),u$1=r;},c$1.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f$1.push(t)&&i$1===c$1.requestAnimationFrame||((i$1=c$1.requestAnimationFrame)||w)(j$2)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0;})),u$1=r=null;},c$1.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B$1(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c$1.__e(r,n.__v);}}),l$1&&l$1(n,t);},c$1.unmount=function(n){m$1&&m$1(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&c$1.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,35);k&&(t=requestAnimationFrame(r));}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B$1(n){var t=r;n.__c=n.__(),r=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D$1(n,t){return "function"==typeof t?t(n):t}

  let e={data:""},t=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||e,l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,o=(e,t)=>{let r="",l="",a="";for(let n in e){let c=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+c+";":l+="f"==n[1]?o(c,n):n+"{"+o(c,"k"==n[1]?"":t)+"}":"object"==typeof c?l+=o(c,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=c&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=o.p?o.p(n,c):n+":"+c+";");}return r+(t&&a?t+"{"+a+"}":a)+l},c={},s=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+s(e[r]);return t}return e},i=(e,t,r,i,p)=>{let u=s(e),d=c[u]||(c[u]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return "go"+r})(u));if(!c[d]){let t=u!==e?e:(e=>{let t,r,o=[{}];for(;t=l.exec(e.replace(a,""));)t[4]?o.shift():t[3]?(r=t[3].replace(n," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(n," ").trim();return o[0]})(e);c[d]=o(p?{["@keyframes "+d]:t}:t,r?"":"."+d);}let f=r&&c.g?c.g:null;return r&&(c.g=c[d]),((e,t,r,l)=>{l?t.data=t.data.replace(l,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e);})(c[d],t,i,f),d},p=(e,t,r)=>e.reduce((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):false===e?"":e;}return e+l+(null==n?"":n)},"");function u(e){let r=this||{},l=e.call?e(r.p):e;return i(l.unshift?l.raw?p(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):l,t(r.target),r.g,r.o,r.k)}let d,f,g$1;u.bind({g:1});let h=u.bind({k:1});function m(e,t,r,l){o.p=t,d=e,f=r,g$1=l;}function j$1(e,t){let r=this||{};return function(){let l=arguments;function a(n,o){let c=Object.assign({},n),s=c.className||a.className;r.p=Object.assign({theme:f&&f()},c),r.o=/ *go\d+/.test(s),c.className=u.apply(r,l)+(s?" "+s:"");let i=e;return e[0]&&(i=c.as||e,delete c.as),g$1&&i[0]&&g$1(c),d(i,c)}return a}}

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */

  const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  const toCamelCase = (string) => string.replace(
    /^([A-Z])|[\s-_]+(\w)/g,
    (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
  );
  const toPascalCase = (string) => {
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  };
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
  }).join(" ").trim();

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */

  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  };

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const Icon = ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    children,
    iconNode,
    class: classes = "",
    ...rest
  }) => _$1(
    "svg",
    {
      ...defaultAttributes,
      width: String(size),
      height: size,
      stroke: color,
      ["stroke-width"]: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: ["lucide", classes].join(" "),
      ...rest
    },
    [...iconNode.map(([tag, attrs]) => _$1(tag, attrs)), ...H$1(children)]
  );

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const createLucideIcon = (iconName, iconNode) => {
    const Component = ({ class: classes = "", children, ...props }) => _$1(
      Icon,
      {
        ...props,
        iconNode,
        class: mergeClasses(
          `lucide-${toKebabCase(toPascalCase(iconName))}`,
          `lucide-${toKebabCase(iconName)}`,
          classes
        )
      },
      children
    );
    Component.displayName = toPascalCase(iconName);
    return Component;
  };

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const ArrowLeft = createLucideIcon("arrow-left", [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const ArrowRight = createLucideIcon("arrow-right", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const ArrowUp = createLucideIcon("arrow-up", [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const Beaker = createLucideIcon("beaker", [
    ["path", { d: "M4.5 3h15", key: "c7n0jr" }],
    ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3", key: "m1uhx7" }],
    ["path", { d: "M6 14h12", key: "4cwo0f" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const Check = createLucideIcon("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const ChevronDown = createLucideIcon("chevron-down", [
    ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const ChevronRight = createLucideIcon("chevron-right", [
    ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const CircleAlert = createLucideIcon("circle-alert", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const CircleCheckBig = createLucideIcon("circle-check-big", [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const CircleQuestionMark = createLucideIcon("circle-question-mark", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const Clipboard = createLucideIcon("clipboard", [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
    [
      "path",
      {
        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
        key: "116196"
      }
    ]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const Clock = createLucideIcon("clock", [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const Copy = createLucideIcon("copy", [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const Database = createLucideIcon("database", [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
    ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
    ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const ExternalLink = createLucideIcon("external-link", [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const FileText = createLucideIcon("file-text", [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const Funnel = createLucideIcon("funnel", [
    [
      "path",
      {
        d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
        key: "sc7q7i"
      }
    ]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const Globe = createLucideIcon("globe", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
    ["path", { d: "M2 12h20", key: "9i4pu4" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const LoaderCircle = createLucideIcon("loader-circle", [
    ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const Loader = createLucideIcon("loader", [
    ["path", { d: "M12 2v4", key: "3427ic" }],
    ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
    ["path", { d: "M18 12h4", key: "wj9ykh" }],
    ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
    ["path", { d: "M12 18v4", key: "jadmvz" }],
    ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
    ["path", { d: "M2 12h4", key: "j09sii" }],
    ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const MessageCircle = createLucideIcon("message-circle", [
    ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const Microscope = createLucideIcon("microscope", [
    ["path", { d: "M6 18h8", key: "1borvv" }],
    ["path", { d: "M3 22h18", key: "8prr45" }],
    ["path", { d: "M14 22a7 7 0 1 0 0-14h-1", key: "1jwaiy" }],
    ["path", { d: "M9 14h2", key: "197e7h" }],
    ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z", key: "1bmzmy" }],
    ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "1drr47" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const RefreshCw = createLucideIcon("refresh-cw", [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const Search = createLucideIcon("search", [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const Share2 = createLucideIcon("share-2", [
    ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
    ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
    ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
    ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
    ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const Star = createLucideIcon("star", [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s"
      }
    ]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const Tag = createLucideIcon("tag", [
    [
      "path",
      {
        d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
        key: "vktsd0"
      }
    ],
    ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const Target = createLucideIcon("target", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const ThumbsDown = createLucideIcon("thumbs-down", [
    ["path", { d: "M17 14V2", key: "8ymqnk" }],
    [
      "path",
      {
        d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
        key: "m61m77"
      }
    ]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const ThumbsUp = createLucideIcon("thumbs-up", [
    ["path", { d: "M7 10v12", key: "1qc93n" }],
    [
      "path",
      {
        d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
        key: "emmmcr"
      }
    ]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const Timer = createLucideIcon("timer", [
    ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
    ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
    ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const TriangleAlert = createLucideIcon("triangle-alert", [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq"
      }
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const X$1 = createLucideIcon("x", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]);

  /**
   * @license lucide-preact v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */


  const Zap = createLucideIcon("zap", [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db"
      }
    ]
  ]);

  // Simple HTML table component for markdown tables
  function SimpleMarkdownTable({ headers, data }) {
      return (u$2(TableContainer, { children: u$2("table", { children: [u$2("thead", { children: u$2("tr", { children: headers.map((header, i) => (u$2("th", { children: header }, i))) }) }), u$2("tbody", { children: data.map((row, i) => (u$2("tr", { children: row.map((cell, j) => (u$2("td", { children: cell }, j))) }, i))) })] }) }));
  }
  // Code block component with copy functionality
  function CodeBlock({ code, language }) {
      const [copied, setCopied] = d$1(false);
      const handleCopy = async () => {
          try {
              await navigator.clipboard.writeText(code);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
          }
          catch (err) {
              console.error('Failed to copy code:', err);
              // Fallback for older browsers
              const textArea = document.createElement('textarea');
              textArea.value = code;
              document.body.appendChild(textArea);
              textArea.select();
              try {
                  // @ts-ignore - execCommand is deprecated but still needed for fallback
                  document.execCommand('copy');
              }
              catch (e) {
                  console.error('Fallback copy failed:', e);
              }
              document.body.removeChild(textArea);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
          }
      };
      return (u$2(CodeBlockContainer, { children: [u$2(CodeBlockHeader, { children: [u$2(CodeBlockLanguage, { children: language || 'code' }), u$2(CopyButton, { onClick: handleCopy, title: "Copy code", children: copied ? u$2(Check, { size: 14 }) : u$2(Copy, { size: 14 }) })] }), u$2(CodeBlockContent, { children: u$2("code", { children: code }) })] }));
  }
  // Feedback popup component
  function FeedbackPopup({ isOpen, onClose, onSubmit, rating, config }) {
      const [content, setContent] = d$1('');
      const [isSubmitting, setIsSubmitting] = d$1(false);
      const handleSubmit = () => {
          setIsSubmitting(true);
          try {
              onSubmit(content);
              onClose();
          }
          catch (error) {
              console.error('Failed to submit feedback:', error);
          }
          finally {
              setIsSubmitting(false);
          }
      };
      const handleSkip = () => {
          onSubmit(''); // Submit without content
          onClose();
      };
      if (!isOpen)
          return null;
      const isPositive = rating === 'THUMBS_UP';
      const title = config.language === 'ja'
          ? (isPositive ? '何が良かったですか？' : '何が改善できますか？')
          : (isPositive ? 'What was helpful?' : 'What could be improved?');
      const placeholder = config.language === 'ja'
          ? (isPositive ? '例：詳しい説明で理解しやすかった' : '例：もう少し具体的な例が欲しい')
          : (isPositive ? 'e.g., Clear and detailed explanation' : 'e.g., Could use more specific examples');
      return (u$2(FeedbackPopupOverlay, { onClick: onClose, children: u$2(FeedbackPopupContent, { onClick: (e) => e.stopPropagation(), children: [u$2(FeedbackPopupHeader, { children: [u$2(FeedbackPopupIcon, { positive: isPositive, children: isPositive ? u$2(ThumbsUp, { size: 16 }) : u$2(ThumbsDown, { size: 16 }) }), u$2(FeedbackPopupTitle, { children: title })] }), u$2(FeedbackPopupBody, { children: u$2(FeedbackTextArea, { value: content, onChange: (e) => setContent(e.target.value), placeholder: placeholder, rows: 3 }) }), u$2(FeedbackPopupActions, { children: [u$2(FeedbackSkipButton, { onClick: handleSkip, children: config.language === 'ja' ? 'スキップ' : 'Skip' }), u$2(FeedbackSubmitButton, { onClick: handleSubmit, disabled: isSubmitting, children: isSubmitting
                                  ? (config.language === 'ja' ? '送信中...' : 'Sending...')
                                  : (config.language === 'ja' ? '送信' : 'Send') })] })] }) }));
  }
  // Message feedback component
  function MessageFeedback({ messageId, sessionId: _sessionId, feedback, onFeedbackSubmit, config }) {
      const [showPopup, setShowPopup] = d$1(false);
      const [selectedRating, setSelectedRating] = d$1(null);
      const [currentFeedback, setCurrentFeedback] = d$1(feedback || null);
      const handleRatingClick = (rating) => {
          if (currentFeedback)
              return; // Already submitted
          setSelectedRating(rating);
          setShowPopup(true);
      };
      const handleFeedbackSubmit = (content) => {
          if (!selectedRating)
              return;
          const feedbackData = {
              rating: selectedRating,
              content: content || undefined,
              submittedAt: new Date().toISOString(),
              isSubmitted: true
          };
          setCurrentFeedback(feedbackData);
          onFeedbackSubmit(messageId, selectedRating, content);
      };
      const handlePopupClose = () => {
          setShowPopup(false);
          setSelectedRating(null);
      };
      return (u$2(k$1, { children: [u$2(FeedbackContainer, { children: [u$2(FeedbackLabel, { children: config.language === 'ja' ? 'この回答は役に立ちましたか？' : 'Was this answer helpful?' }), u$2(FeedbackButtons, { children: [u$2(FeedbackButton, { onClick: () => handleRatingClick('THUMBS_UP'), active: (currentFeedback === null || currentFeedback === void 0 ? void 0 : currentFeedback.rating) === 'THUMBS_UP', disabled: !!currentFeedback, positive: true, title: config.language === 'ja' ? '役に立った' : 'Helpful', children: u$2(ThumbsUp, { size: 14 }) }), u$2(FeedbackButton, { onClick: () => handleRatingClick('THUMBS_DOWN'), active: (currentFeedback === null || currentFeedback === void 0 ? void 0 : currentFeedback.rating) === 'THUMBS_DOWN', disabled: !!currentFeedback, positive: false, title: config.language === 'ja' ? '役に立たなかった' : 'Not helpful', children: u$2(ThumbsDown, { size: 14 }) })] }), currentFeedback && (u$2(FeedbackThankYou, { children: config.language === 'ja' ? 'フィードバックをありがとうございます！' : 'Thank you for your feedback!' }))] }), u$2(FeedbackPopup, { isOpen: showPopup, onClose: handlePopupClose, onSubmit: handleFeedbackSubmit, rating: selectedRating, config: config })] }));
  }
  // Enhanced markdown renderer with table support
  function renderMarkdown(text, isStreaming = false) {
      if (!text)
          return [];
      const elements = [];
      const lines = text.split('\n');
      let currentParagraph = [];
      let inCodeBlock = false;
      let codeLines = [];
      let codeLanguage = '';
      let inTable = false;
      let tableLines = [];
      const processParagraph = () => {
          if (currentParagraph.length > 0) {
              const paragraphText = currentParagraph.join('\n');
              elements.push(u$2("p", { children: processInlineElements(paragraphText) }, elements.length));
              currentParagraph = [];
          }
      };
      const processTable = () => {
          if (tableLines.length > 0) {
              // Split and clean headers, removing empty first/last cells that come from leading/trailing |
              const headerCells = tableLines[0].split('|');
              const headers = headerCells.slice(1, -1).map(h => h.trim()); // Remove first and last empty cells
              // Process data rows, skipping the separator row (index 1)
              const rows = tableLines.slice(2).map(line => {
                  const cells = line.split('|');
                  return cells.slice(1, -1).map(cell => cell.trim()); // Remove first and last empty cells  
              });
              // Use simple HTML table instead of TanstackTable to avoid compatibility issues
              elements.push(u$2(SimpleMarkdownTable, { headers: headers, data: rows }, elements.length));
              tableLines = [];
          }
      };
      for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          const trimmedLine = line.trim();
          // Code blocks
          if (trimmedLine.startsWith('```')) {
              if (inCodeBlock) {
                  elements.push(u$2(CodeBlock, { code: codeLines.join('\n'), language: codeLanguage }, elements.length));
                  codeLines = [];
                  codeLanguage = '';
                  inCodeBlock = false;
              }
              else {
                  processParagraph();
                  inCodeBlock = true;
                  codeLanguage = trimmedLine.slice(3) || '';
              }
              continue;
          }
          if (inCodeBlock) {
              codeLines.push(line);
              continue;
          }
          // Tables - be more careful during streaming  
          if (!isStreaming && trimmedLine.includes('|') && i + 1 < lines.length) {
              const nextLine = lines[i + 1].trim();
              // Check if next line looks like a table separator (contains -, :, |, and spaces)
              if (nextLine.match(/^[\|\s\-:]+$/)) {
                  processParagraph();
                  inTable = true;
                  tableLines = [trimmedLine];
                  continue;
              }
          }
          if (inTable) {
              if (trimmedLine === '' || !trimmedLine.includes('|')) {
                  processTable();
                  inTable = false;
                  if (trimmedLine) {
                      currentParagraph.push(line);
                  }
              }
              else {
                  tableLines.push(trimmedLine);
              }
              continue;
          }
          // Headers
          if (trimmedLine.match(/^#{1,6}\s/)) {
              processParagraph();
              const headerMatch = trimmedLine.match(/^#+/);
              const level = headerMatch ? headerMatch[0].length : 1;
              const text = trimmedLine.slice(level).trim();
              const HeaderTag = `h${level}`;
              elements.push(u$2(HeaderTag, { children: processInlineElements(text) }, elements.length));
              continue;
          }
          // Lists
          if (trimmedLine.match(/^[*+-]\s/) || trimmedLine.match(/^\d+\.\s/)) {
              processParagraph();
              const listItems = [];
              const isOrdered = trimmedLine.match(/^\d+\.\s/) !== null;
              while (i < lines.length && lines[i].trim().match(/^[*+-]\s|^\d+\.\s/)) {
                  const itemText = lines[i].trim().replace(/^[*+-]\s|^\d+\.\s/, '');
                  listItems.push(u$2("li", { children: processInlineElements(itemText) }, listItems.length));
                  i++;
              }
              i--; // Back up one line
              if (isOrdered) {
                  elements.push(u$2("ol", { children: listItems }, elements.length));
              }
              else {
                  elements.push(u$2("ul", { children: listItems }, elements.length));
              }
              continue;
          }
          // Horizontal rule
          if (trimmedLine.match(/^(-{3,}|\*{3,}|_{3,})$/)) {
              processParagraph();
              elements.push(u$2("hr", {}, elements.length));
              continue;
          }
          // Empty line - end paragraph
          if (trimmedLine === '') {
              processParagraph();
              continue;
          }
          // Regular paragraph line
          currentParagraph.push(line);
      }
      // Process remaining content
      processParagraph();
      if (inTable) {
          processTable();
      }
      return elements;
  }
  // Process inline markdown elements
  function processInlineElements(text) {
      const elements = [];
      let key = 0;
      const patterns = [
          // Bold
          { regex: /\*\*(.*?)\*\*/g, render: (_match, content) => u$2("strong", { children: content }, key++) },
          // Italic
          { regex: /\*(.*?)\*/g, render: (_match, content) => u$2("em", { children: content }, key++) },
          // Code
          { regex: /`([^`]+)`/g, render: (_match, content) => u$2("code", { className: "inline-code", children: content }, key++) },
          // Links
          { regex: /\[([^\]]+)\]\(([^)]+)\)/g, render: (_match, text, url) => u$2("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: "link", children: text }, key++) },
          // Citations
          { regex: /\[(\d+(?:,\s*\d+)*)\]/g, render: (match) => u$2("span", { className: "citation", children: match }, key++) },
      ];
      const allMatches = [];
      patterns.forEach(pattern => {
          let match;
          pattern.regex.lastIndex = 0;
          while ((match = pattern.regex.exec(text)) !== null) {
              const args = [match[0]];
              for (let i = 1; i < match.length; i++) {
                  args.push(match[i]);
              }
              allMatches.push({
                  start: match.index,
                  end: match.index + match[0].length,
                  element: pattern.render.apply(null, args)
              });
          }
      });
      // Sort matches by start position
      allMatches.sort((a, b) => a.start - b.start);
      // Remove overlapping matches
      const filteredMatches = [];
      let filterLastEnd = 0;
      for (const match of allMatches) {
          if (match.start >= filterLastEnd) {
              filteredMatches.push(match);
              filterLastEnd = match.end;
          }
      }
      // Build the result
      let buildLastEnd = 0;
      for (const match of filteredMatches) {
          if (match.start > buildLastEnd) {
              elements.push(text.substring(buildLastEnd, match.start));
          }
          elements.push(match.element);
          buildLastEnd = match.end;
      }
      if (buildLastEnd < text.length) {
          elements.push(text.substring(buildLastEnd));
      }
      return elements.length > 0 ? elements : [text];
  }
  function MessageList({ messages, isLoading, streamingContent, config, sessionId, onFeedbackSubmit, }) {
      const messagesEndRef = A$1(null);
      // Debug streaming state
      console.log('[AskDona] MessageList render:', {
          messagesCount: messages.length,
          isLoading,
          streamingContentLength: (streamingContent === null || streamingContent === void 0 ? void 0 : streamingContent.length) || 0,
          streamingContentPreview: (streamingContent === null || streamingContent === void 0 ? void 0 : streamingContent.substring(0, 100)) + '...' || 'empty'
      });
      y(() => {
          var _a;
          (_a = messagesEndRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
      }, [messages, streamingContent]);
      return (u$2(MessagesContainer, { children: [messages.map((message, idx) => {
                  var _a, _b, _c;
                  // Debug message rendering
                  console.log('[AskDona] Rendering message:', {
                      id: message.id,
                      role: message.role,
                      contentLength: ((_a = message.content) === null || _a === void 0 ? void 0 : _a.length) || 0,
                      contentPreview: ((_b = message.content) === null || _b === void 0 ? void 0 : _b.substring(0, 50)) + '...' || 'empty'
                  });
                  // Only skip completely empty assistant messages
                  if (message.role === 'assistant' && !message.content) {
                      console.log('[AskDona] Skipping empty assistant message');
                      return null;
                  }
                  return (u$2(Message, { isUser: message.role === 'user', children: message.role === 'user' ? (u$2(UserBubble, { children: message.content })) : (u$2(AssistantMessage, { children: [u$2(AssistantAvatar, { children: u$2(MessageCircle, { size: 16, color: "white" }) }), u$2(AssistantBubble, { children: [u$2(MarkdownContent, { children: renderMarkdown(message.content || '', false) }), u$2(MessageFeedback, { messageId: message.id, sessionId: sessionId, feedback: (_c = message.metadata) === null || _c === void 0 ? void 0 : _c.feedback, onFeedbackSubmit: onFeedbackSubmit, config: config })] })] })) }, message.id || idx));
              }).filter(Boolean), isLoading && streamingContent && streamingContent.trim() && (u$2(Message, { isUser: false, children: u$2(AssistantMessage, { children: [u$2(AssistantAvatar, { children: u$2(MessageCircle, { size: 16, color: "white" }) }), u$2(AssistantBubble, { children: [u$2(StreamingIndicator, { children: config.language === 'ja' ? 'リアルタイム応答中...' : 'Streaming response...' }), u$2(MarkdownContent, { children: (() => {
                                          try {
                                              return renderMarkdown(streamingContent || '', true);
                                          }
                                          catch (error) {
                                              console.error('[AskDona] Markdown rendering error during streaming:', error);
                                              // Fallback to simple text rendering
                                              return u$2("p", { children: streamingContent || '' });
                                          }
                                      })() })] })] }) })), u$2("div", { ref: messagesEndRef })] }));
  }
  // Styled components
  const MessagesContainer = j$1('div') `
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;
  const Message = j$1('div') `
  display: flex;
  justify-content: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  align-items: flex-start;
`;
  const UserBubble = j$1('div') `
  max-width: 70%;
  padding: 1rem 1.25rem;
  background: var(--askdona-primary);
  color: white;
  border-radius: 1rem 1rem 0.25rem 1rem;
  font-size: 0.875rem;
  line-height: 1.6;
  word-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;
  const AssistantMessage = j$1('div') `
  display: flex;
  gap: 0.75rem;
  max-width: 85%;
`;
  const AssistantAvatar = j$1('div') `
  width: 2rem;
  height: 2rem;
  background: var(--askdona-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1rem;
  margin-top: 0.25rem;
`;
  const AssistantBubble = j$1('div') `
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
`;
  const MarkdownContent = j$1('div') `
  line-height: 1.6;
  
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
`;
  // LoadingDots removed - handled in ChatView status indicator
  const StreamingIndicator = j$1('div') `
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
`;
  const TableContainer = j$1('div') `
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
`;
  const CodeBlockContainer = j$1('div') `
  margin: 16px 0;
  border-radius: 8px;
  border: 1px solid var(--askdona-border);
  background: var(--askdona-surface);
  overflow: hidden;
`;
  const CodeBlockHeader = j$1('div') `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: var(--askdona-bg-secondary);
  border-bottom: 1px solid var(--askdona-border);
`;
  const CodeBlockLanguage = j$1('span') `
  font-size: 12px;
  color: var(--askdona-text-secondary);
  font-weight: 500;
  text-transform: uppercase;
`;
  const CopyButton = j$1('button') `
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
`;
  const CodeBlockContent = j$1('pre') `
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
`;
  const FeedbackContainer = j$1('div') `
  margin-top: 12px;
  padding: 8px 0;
  border-top: 1px solid var(--askdona-border);
`;
  const FeedbackLabel = j$1('div') `
  font-size: 12px;
  color: var(--askdona-text-secondary);
  margin-bottom: 6px;
  font-weight: 500;
`;
  const FeedbackButtons = j$1('div') `
  display: flex;
  gap: 6px;
  align-items: center;
`;
  const FeedbackButton = j$1('button') `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid var(--askdona-border);
  background: ${({ active, positive }) => active
    ? (positive ? '#10b981' : '#ef4444')
    : 'var(--askdona-background)'};
  color: ${({ active }) => active
    ? 'white'
    : '#374151' // Same color for both buttons when inactive
};
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
    background: ${({ active, positive }) => active
    ? (positive ? '#059669' : '#dc2626')
    : 'var(--askdona-bg-hover)'};
    color: ${({ active }) => active
    ? 'white'
    : '#374151'};
    border-color: ${({ active, positive }) => active
    ? (positive ? '#059669' : '#dc2626')
    : (positive ? '#10b981' : '#6b7280')};
    
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
`;
  const FeedbackThankYou = j$1('div') `
  font-size: 11px;
  color: var(--askdona-text-secondary);
  margin-top: 6px;
  font-style: italic;
`;
  // Feedback popup styles
  const FeedbackPopupOverlay = j$1('div') `
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
`;
  const FeedbackPopupContent = j$1('div') `
  background: var(--askdona-background);
  border-radius: 12px;
  padding: 24px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--askdona-border);
`;
  const FeedbackPopupHeader = j$1('div') `
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;
  const FeedbackPopupIcon = j$1('div') `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ positive }) => positive ? '#10b981' : '#ef4444'};
  color: white;
  
  svg {
    color: inherit;
    fill: currentColor;
    stroke: currentColor;
  }
`;
  const FeedbackPopupTitle = j$1('h3') `
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--askdona-text);
`;
  const FeedbackPopupBody = j$1('div') `
  margin-bottom: 20px;
`;
  const FeedbackTextArea = j$1('textarea') `
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
`;
  const FeedbackPopupActions = j$1('div') `
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;
  const FeedbackSkipButton = j$1('button') `
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
`;
  const FeedbackSubmitButton = j$1('button') `
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
`;

  // API configuration with environment variable support
  const API_BASE_URL = "https://app.askdona.com/api/embed/v1";
  // Log the API URL being used
  console.log('[AskDona] Using API URL:', API_BASE_URL);

  const API_TIMEOUT = 30000; // 30 seconds
  // Helper function for API requests
  async function apiRequest(endpoint, options = {}) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);
      try {
          // Only set Content-Type for non-GET requests
          const headers = {
              'X-Widget-Version': '1.0.0',
              ...(options.headers || {}),
          };
          // Add Content-Type only for POST/PUT/PATCH requests
          if (options.method && ['POST', 'PUT', 'PATCH'].includes(options.method)) {
              headers['Content-Type'] = 'application/json';
          }
          const response = await fetch(`${API_BASE_URL}${endpoint}`, {
              ...options,
              signal: controller.signal,
              headers,
          });
          clearTimeout(timeoutId);
          if (!response.ok) {
              const error = await response.json().catch(() => ({ message: 'Request failed' }));
              throw new Error(error.message || `HTTP ${response.status}`);
          }
          return await response.json();
      }
      catch (error) {
          clearTimeout(timeoutId);
          if (error.name === 'AbortError') {
              throw new Error('Request timeout');
          }
          throw error;
      }
  }
  // Validate chatflow and get settings
  async function validateChatflow(chatflowId) {
      try {
          const response = await apiRequest(`/validate/${chatflowId}`, {
              method: 'POST',
              body: JSON.stringify({
                  origin: window.location.origin,
              }),
          });
          return response;
      }
      catch (error) {
          return {
              isValid: false,
              error: error.message,
          };
      }
  }
  // Get full embed configuration
  async function getEmbedConfig(chatflowId) {
      try {
          const response = await apiRequest(`/welcome/${chatflowId}`);
          return response;
      }
      catch (error) {
          console.error('[AskDona] Failed to fetch embed config:', error);
          return null;
      }
  }
  // Search function
  async function searchDocuments(chatflowId, query) {
      try {
          const response = await apiRequest(`/search/${chatflowId}`, {
              method: 'POST',
              body: JSON.stringify(query),
          });
          return response;
      }
      catch (error) {
          throw error;
      }
  }
  // ============================
  // METADATA FILTERING API
  // ============================
  // Check if metadata filtering is enabled for a chatflow
  async function checkMetadataFiltering(chatflowId) {
      try {
          const response = await apiRequest(`/metadata/${chatflowId}/check`, {
              method: 'GET',
          });
          return response;
      }
      catch (error) {
          console.error('[AskDona] Failed to check metadata filtering:', error);
          return {
              enable_metadata_filtering: false,
              error: error.message,
          };
      }
  }
  // Get available metadata keys and values for a chatflow
  async function getMetadataKeys(chatflowId) {
      try {
          const response = await apiRequest(`/metadata/${chatflowId}/keys`, {
              method: 'GET',
          });
          return response;
      }
      catch (error) {
          console.error('[AskDona] Failed to fetch metadata keys:', error);
          return {
              success: false,
              error: error.message,
          };
      }
  }
  // Generate follow-up questions for Deep Research
  async function generateFollowUpQuestions(query) {
      try {
          const response = await apiRequest('/deep-research/follow-up', {
              method: 'POST',
              body: JSON.stringify({ query }),
          });
          return response;
      }
      catch (error) {
          return {
              success: false,
              questions: [],
              error: error.message,
          };
      }
  }
  // Start Deep Research with questionnaire answers
  async function startDeepResearchWithAnswers(params) {
      try {
          const response = await apiRequest('/deep-research/start-with-answers', {
              method: 'POST',
              body: JSON.stringify(params),
          });
          return response;
      }
      catch (error) {
          throw error;
      }
  }

  // ============================
  // STYLED COMPONENTS
  // ============================
  const CardContainer = j$1('div') `
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  padding: 16px;
`;
  const CardHeader$1 = j$1('div') `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;
  const KeyName$1 = j$1('div') `
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #1e293b;
  font-size: 14px;
`;
  const RemoveButton = j$1('button') `
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
`;
  const ValuesSection = j$1('div') `
  margin-bottom: 12px;
`;
  const ValuesList = j$1('div') `
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
`;
  const ValueCheckbox = j$1('label') `
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border: 1px solid ${props => props.isSelected ? '#3b82f6' : '#e2e8f0'};
  background: ${props => props.isSelected ? '#dbeafe' : 'white'};
  color: ${props => props.isSelected ? '#1e40af' : '#4b5563'};
  border-radius: 16px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s;
  user-select: none;
  
  &:hover {
    border-color: #3b82f6;
    background: ${props => props.isSelected ? '#bfdbfe' : '#f0f9ff'};
  }
`;
  const CheckboxInput = j$1('input') `
  margin: 0;
  width: 12px;
  height: 12px;
`;
  const Summary = j$1('div') `
  font-size: 12px;
  color: #64748b;
  padding-top: 8px;
  border-top: 1px solid #f1f5f9;
`;
  // ============================
  // COMPONENT
  // ============================
  function FilterCard({ filter, keyData, onFilterChange, onFilterRemove }) {
      // Handle value toggle
      const handleValueToggle = q$1((value) => {
          const isSelected = filter.selectedValues.includes(value);
          const newSelectedValues = isSelected
              ? filter.selectedValues.filter(v => v !== value)
              : [...filter.selectedValues, value];
          onFilterChange({
              ...filter,
              selectedValues: newSelectedValues
          });
      }, [filter, onFilterChange]);
      // Handle remove filter
      const handleRemove = q$1(() => {
          onFilterRemove(filter.key);
      }, [filter.key, onFilterRemove]);
      return (u$2(CardContainer, { children: [u$2(CardHeader$1, { children: [u$2(KeyName$1, { children: [u$2(Tag, { size: 14 }), filter.key, keyData.isCustom && (u$2("span", { style: {
                                      fontSize: '10px',
                                      color: '#6b7280',
                                      background: '#f3f4f6',
                                      padding: '2px 6px',
                                      borderRadius: '8px'
                                  }, children: "\u30AB\u30B9\u30BF\u30E0" }))] }), u$2(RemoveButton, { onClick: handleRemove, title: "\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u524A\u9664", children: u$2(X$1, { size: 14 }) })] }), u$2(ValuesSection, { children: u$2(ValuesList, { children: keyData.values.map(value => {
                          const isSelected = filter.selectedValues.includes(value);
                          return (u$2(ValueCheckbox, { isSelected: isSelected, onClick: () => handleValueToggle(value), children: [u$2(CheckboxInput, { type: "checkbox", checked: isSelected, onChange: () => handleValueToggle(value) }), value] }, value));
                      }) }) }), u$2(Summary, { children: filter.selectedValues.length > 0 ? (u$2(k$1, { children: [u$2("strong", { children: [filter.selectedValues.length, "\u500B\u306E\u5024\u3092\u9078\u629E\u4E2D:"] }), u$2("br", {}), filter.selectedValues.join(', '), u$2("br", {}), u$2("em", { children: "\u9078\u629E\u3057\u305F\u5024\u306E\u3044\u305A\u308C\u304B\u3092\u542B\u3080\u30D5\u30A1\u30A4\u30EB\u304C\u5BFE\u8C61\u306B\u306A\u308A\u307E\u3059 (OR\u6761\u4EF6)" })] })) : (u$2("em", { children: "\u5024\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044" })) })] }));
  }

  // ============================
  // STYLED COMPONENTS
  // ============================
  const DialogOverlay = j$1('div') `
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
`;
  const DialogContent = j$1('div') `
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 800px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
`;
  const DialogHeader = j$1('div') `
  padding: 12px 20px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
  const DialogTitle = j$1('h2') `
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 8px;
`;
  const CloseButton$2 = j$1('button') `
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
`;
  const DialogBody = j$1('div') `
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
  const ControlsSection = j$1('div') `
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
`;
  const GlobalOperatorSection = j$1('div') `
  margin-bottom: 16px;
`;
  const OperatorLabel = j$1('label') `
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  display: block;
`;
  const RadioGroup = j$1('div') `
  display: flex;
  gap: 16px;
`;
  const RadioOption = j$1('label') `
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #4b5563;
`;
  const RadioInput = j$1('input') `
  margin: 0;
`;
  const ClearAllButton = j$1('button') `
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
`;
  const ContentSection = j$1('div') `
  flex: 1;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
  const Column = j$1('div') `
  display: flex;
  flex-direction: column;
  min-height: 0;
`;
  const ColumnTitle = j$1('h3') `
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 16px 0;
`;
  const ScrollableArea = j$1('div') `
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`;
  const SearchInput$1 = j$1('input') `
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  margin-bottom: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2364748b' viewBox='0 0 24 24'%3E%3Cpath d='M21 20l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 12px center;
`;
  const KeyButton = j$1('button') `
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
`;
  const KeyName = j$1('div') `
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 4px;
`;
  const KeyInfo = j$1('div') `
  font-size: 12px;
  color: #64748b;
`;
  const EmptyState$1 = j$1('div') `
  text-align: center;
  color: #64748b;
  padding: 40px 20px;
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    color: #cbd5e1;
  }
`;
  const LoadingState = j$1('div') `
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
`;
  const ErrorState = j$1('div') `
  text-align: center;
  color: #ef4444;
  padding: 40px 20px;
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
  }
`;
  // ============================
  // COMPONENT
  // ============================
  function MetadataFilterDialog({ isOpen, onClose, metadataKeys, filters, onFiltersChange, isLoading, error }) {
      const [searchTerm, setSearchTerm] = d$1('');
      const [localFilters, setLocalFilters] = d$1(filters || { filters: [], globalOperator: 'AND' });
      // Update local filters when props change
      y(() => {
          setLocalFilters(filters || { filters: [], globalOperator: 'AND' });
      }, [filters]);
      // Handle backdrop click
      const handleOverlayClick = q$1((e) => {
          if (e.target === e.currentTarget) {
              onClose();
          }
      }, [onClose]);
      // Apply filters and close
      const handleApply = q$1(() => {
          const hasActiveFilters = localFilters.filters.some(f => f.selectedValues.length > 0);
          onFiltersChange(hasActiveFilters ? localFilters : null);
          onClose();
      }, [localFilters, onFiltersChange, onClose]);
      // Clear all filters
      const handleClearAll = q$1(() => {
          setLocalFilters({ filters: [], globalOperator: 'AND' });
      }, []);
      // Add new filter
      const handleKeySelect = q$1((key) => {
          const newFilter = {
              key,
              selectedValues: [],
              operator: 'OR'
          };
          setLocalFilters(prev => ({
              ...prev,
              filters: [...prev.filters, newFilter]
          }));
      }, []);
      // Remove filter
      const handleFilterRemove = q$1((key) => {
          setLocalFilters(prev => ({
              ...prev,
              filters: prev.filters.filter(f => f.key !== key)
          }));
      }, []);
      // Update filter values
      const handleFilterChange = q$1((updatedFilter) => {
          setLocalFilters(prev => ({
              ...prev,
              filters: prev.filters.map(f => f.key === updatedFilter.key ? updatedFilter : f)
          }));
      }, []);
      // Update global operator
      const handleGlobalOperatorChange = q$1((operator) => {
          setLocalFilters(prev => ({
              ...prev,
              globalOperator: operator
          }));
      }, []);
      // Filter available keys
      const filteredKeys = metadataKeys.filter(key => {
          // Exclude already selected keys
          const isAlreadySelected = localFilters.filters.some(f => f.key === key.key);
          if (isAlreadySelected)
              return false;
          // Search filter
          if (searchTerm) {
              const searchLower = searchTerm.toLowerCase();
              return key.key.toLowerCase().includes(searchLower) ||
                  key.values.some(v => v.toLowerCase().includes(searchLower));
          }
          return true;
      });
      if (!isOpen)
          return null;
      return (u$2(DialogOverlay, { onClick: handleOverlayClick, children: u$2(DialogContent, { onClick: (e) => e.stopPropagation(), children: [u$2(DialogHeader, { children: [u$2(DialogTitle, { children: [u$2(Funnel, { size: 20 }), "\u7D5E\u308A\u8FBC\u307F\u8A2D\u5B9A", localFilters.filters.length > 0 && (u$2("span", { style: { color: '#64748b', fontWeight: 400, fontSize: '14px' }, children: ["(", localFilters.filters.reduce((count, f) => count + f.selectedValues.length, 0), "\u4EF6\u306E\u6761\u4EF6)"] }))] }), u$2(CloseButton$2, { onClick: onClose, children: u$2(X$1, { size: 20 }) })] }), u$2(DialogBody, { children: [localFilters.filters.length > 0 && (u$2(ControlsSection, { children: [localFilters.filters.length > 1 && (u$2(GlobalOperatorSection, { children: [u$2(OperatorLabel, { children: "\u30D5\u30A3\u30EB\u30BF\u30FC\u9593\u306E\u95A2\u4FC2" }), u$2(RadioGroup, { children: [u$2(RadioOption, { children: [u$2(RadioInput, { type: "radio", name: "globalOperator", checked: localFilters.globalOperator === 'AND', onChange: () => handleGlobalOperatorChange('AND') }), "AND\uFF08\u3059\u3079\u3066\u306E\u6761\u4EF6\u3092\u6E80\u305F\u3059\uFF09"] }), u$2(RadioOption, { children: [u$2(RadioInput, { type: "radio", name: "globalOperator", checked: localFilters.globalOperator === 'OR', onChange: () => handleGlobalOperatorChange('OR') }), "OR\uFF08\u3044\u305A\u308C\u304B\u306E\u6761\u4EF6\u3092\u6E80\u305F\u3059\uFF09"] })] })] })), u$2("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, children: [u$2("span", { style: { fontSize: '14px', color: '#64748b' }, children: "\u6587\u66F8\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u3067\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0\u3057\u3066\u691C\u7D22\u7BC4\u56F2\u3092\u7D5E\u308A\u8FBC\u307F\u307E\u3059" }), localFilters.filters.length > 0 && (u$2(ClearAllButton, { onClick: handleClearAll, children: "\u3059\u3079\u3066\u30AF\u30EA\u30A2" }))] })] })), u$2(ContentSection, { children: [u$2(Column, { children: [u$2(ColumnTitle, { children: "\u8A2D\u5B9A\u6E08\u307F\u30D5\u30A3\u30EB\u30BF\u30FC" }), u$2(ScrollableArea, { children: localFilters.filters.length > 0 ? (u$2("div", { style: { display: 'flex', flexDirection: 'column', gap: '12px' }, children: localFilters.filters.map(filter => {
                                                      const keyData = metadataKeys.find(k => k.key === filter.key);
                                                      if (!keyData)
                                                          return null;
                                                      return (u$2(FilterCard, { filter: filter, keyData: keyData, onFilterChange: handleFilterChange, onFilterRemove: handleFilterRemove }, filter.key));
                                                  }) })) : (u$2(EmptyState$1, { children: [u$2(Funnel, {}), u$2("div", { style: { fontWeight: 500, marginBottom: '4px' }, children: "\u307E\u3060\u30D5\u30A3\u30EB\u30BF\u30FC\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u305B\u3093" }), u$2("div", { style: { fontSize: '14px' }, children: "\u53F3\u5074\u304B\u3089\u7D5E\u308A\u8FBC\u307F\u9805\u76EE\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044" })] })) })] }), u$2(Column, { children: [u$2(ColumnTitle, { children: "\u5229\u7528\u53EF\u80FD\u306A\u7D5E\u308A\u8FBC\u307F" }), u$2(SearchInput$1, { type: "text", placeholder: "\u7D5E\u308A\u8FBC\u307F\u6761\u4EF6\u3092\u691C\u7D22...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) }), u$2(ScrollableArea, { children: isLoading ? (u$2(LoadingState, { children: [u$2(LoaderCircle, {}), "\u8AAD\u307F\u8FBC\u307F\u4E2D..."] })) : error ? (u$2(ErrorState, { children: [u$2(CircleAlert, {}), u$2("div", { style: { fontWeight: 500, marginBottom: '4px' }, children: "\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F" }), u$2("div", { style: { fontSize: '14px' }, children: error })] })) : filteredKeys.length > 0 ? (u$2("div", { children: filteredKeys.map(keyData => (u$2(KeyButton, { onClick: () => handleKeySelect(keyData.key), children: [u$2(KeyName, { children: keyData.key }), u$2(KeyInfo, { children: [keyData.values.length, "\u500B\u306E\u5024 \u2022 ", keyData.count, "\u4EF6\u306E\u30D5\u30A1\u30A4\u30EB", u$2("br", {}), "\u4F8B: ", keyData.values.slice(0, 3).join(', '), keyData.values.length > 3 && '...'] })] }, keyData.key))) })) : (u$2(EmptyState$1, { children: [u$2(Search, {}), u$2("div", { style: { fontWeight: 500, marginBottom: '4px' }, children: searchTerm ? '検索結果がありません' : 'すべてのメタデータキーが選択済みです' })] })) })] })] })] }), u$2("div", { style: {
                          padding: '16px 20px',
                          borderTop: '1px solid #e2e8f0',
                          display: 'flex',
                          justifyContent: 'flex-end',
                          gap: '8px'
                      }, children: [u$2("button", { onClick: onClose, style: {
                                  padding: '8px 16px',
                                  border: '1px solid #e2e8f0',
                                  background: 'white',
                                  color: '#374151',
                                  borderRadius: '6px',
                                  cursor: 'pointer'
                              }, children: "\u30AD\u30E3\u30F3\u30BB\u30EB" }), u$2("button", { onClick: handleApply, style: {
                                  padding: '8px 16px',
                                  border: 'none',
                                  background: '#3b82f6',
                                  color: 'white',
                                  borderRadius: '6px',
                                  cursor: 'pointer',
                                  fontWeight: '500'
                              }, children: "\u9069\u7528" })] })] }) }));
  }

  // ============================
  // STYLED COMPONENTS
  // ============================
  const FilterButton = j$1('button') `
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background: ${props => props.hasActiveFilters ? '#3b82f6' : '#ffffff'};
  color: ${props => props.hasActiveFilters ? '#ffffff' : '#64748b'};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: ${props => props.hasActiveFilters ? '#2563eb' : '#f1f5f9'};
    border-color: ${props => props.hasActiveFilters ? '#2563eb' : '#cbd5e1'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
  const FilterBadge = j$1('span') `
  background: rgba(255, 255, 255, 0.9);
  color: #1e40af;
  padding: 0px 4px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 600;
  min-width: 14px;
  text-align: center;
  margin-left: 2px;
`;
  const FilterIcon = j$1(Funnel) `
  width: 14px;
  height: 14px;
`;
  // ============================
  // COMPONENT
  // ============================
  function MetadataFilterButton({ chatflowId, filters, onFiltersChange, disabled = false, className }) {
      var _a;
      const [isDialogOpen, setIsDialogOpen] = d$1(false);
      const [isLoading, setIsLoading] = d$1(false);
      const [metadataKeys, setMetadataKeys] = d$1([]);
      const [isEnabled, setIsEnabled] = d$1(false);
      const [error, setError] = d$1(null);
      // Calculate active filters count
      const activeFiltersCount = ((_a = filters === null || filters === void 0 ? void 0 : filters.filters) === null || _a === void 0 ? void 0 : _a.reduce((count, filter) => { var _a; return count + (((_a = filter.selectedValues) === null || _a === void 0 ? void 0 : _a.length) || 0); }, 0)) || 0;
      const hasActiveFilters = activeFiltersCount > 0;
      // Check if metadata filtering is enabled
      y(() => {
          const checkSupport = async () => {
              try {
                  console.log('[AskDona] Checking metadata filtering support for:', chatflowId);
                  const result = await checkMetadataFiltering(chatflowId);
                  console.log('[AskDona] Metadata filtering check result:', result);
                  setIsEnabled(result.enable_metadata_filtering);
                  setError(null);
              }
              catch (err) {
                  console.error('[AskDona] Failed to check metadata filtering:', err);
                  setIsEnabled(false);
                  setError(err.message);
              }
          };
          if (chatflowId) {
              checkSupport();
          }
      }, [chatflowId]);
      // Fetch metadata keys when dialog opens
      const handleButtonClick = q$1(async () => {
          if (!isEnabled)
              return;
          setIsDialogOpen(true);
          setIsLoading(true);
          setError(null);
          try {
              console.log('[AskDona] Fetching metadata keys for:', chatflowId);
              const result = await getMetadataKeys(chatflowId);
              console.log('[AskDona] Metadata keys result:', result);
              if (result.success && result.metadataKeys) {
                  setMetadataKeys(result.metadataKeys);
              }
              else {
                  setError(result.error || 'Failed to fetch metadata keys');
                  setMetadataKeys([]);
              }
          }
          catch (err) {
              console.error('[AskDona] Failed to fetch metadata keys:', err);
              setError(err.message);
              setMetadataKeys([]);
          }
          finally {
              setIsLoading(false);
          }
      }, [chatflowId, isEnabled]);
      const handleDialogClose = q$1(() => {
          setIsDialogOpen(false);
      }, []);
      // Don't render if metadata filtering is not enabled
      if (!isEnabled) {
          return null;
      }
      return (u$2(k$1, { children: [u$2(FilterButton, { hasActiveFilters: hasActiveFilters, onClick: handleButtonClick, disabled: disabled, className: className, type: "button", children: [u$2(FilterIcon, {}), u$2("span", { children: "\u7D5E\u308A\u8FBC\u307F" }), hasActiveFilters && (u$2(FilterBadge, { children: activeFiltersCount }))] }), isDialogOpen && (u$2(MetadataFilterDialog, { isOpen: isDialogOpen, onClose: handleDialogClose, metadataKeys: metadataKeys, filters: filters, onFiltersChange: onFiltersChange, isLoading: isLoading, error: error }))] }));
  }

  // Status message mapping - matches askdona repo
  const statusMessages = {
      thinking: "考え中...",
      searching: "データベースを検索中...",
      synthesizing: "情報を整理中...",
      answering: "回答を生成中...",
      executing_functions: "ツールを実行中...",
      processing_function_results: "実行結果を処理中...",
      complete: "完了",
      error: "エラーが発生しました"
  };
  function ChatView({ messages, isLoading, streamingContent, onSendMessage, error, config, currentState, boostMode = false, onBoostModeChange, sessionId, onFeedbackSubmit, showIntro: externalShowIntro, metadataFilters = null, onMetadataFiltersChange, }) {
      // Debug state flow - CRITICAL for troubleshooting streaming
      console.log('[AskDona] ChatView render:', {
          messagesCount: messages.length,
          isLoading,
          streamingContentLength: (streamingContent === null || streamingContent === void 0 ? void 0 : streamingContent.length) || 0,
          streamingContentPreview: streamingContent ? streamingContent.substring(0, 50) + '...' : 'empty',
          currentState
      });
      const [input, setInput] = d$1('');
      // Get computed styles for dynamic icon color
      const getIconColor = () => {
          var _a;
          if (!input.trim() || isLoading) {
              const textSecondary = (_a = getComputedStyle(document.documentElement)
                  .getPropertyValue('--askdona-text-secondary')) === null || _a === void 0 ? void 0 : _a.trim();
              return textSecondary || '#6b6f8a';
          }
          return 'white';
      };
      const [showIntro, setShowIntro] = d$1(messages.length === 0);
      const [isComposing, setIsComposing] = d$1(false);
      const inputRef = A$1(null);
      // Use external showIntro prop if provided, otherwise use internal state logic
      const shouldShowIntro = externalShowIntro !== undefined ? externalShowIntro : showIntro;
      y(() => {
          if (externalShowIntro === undefined && messages.length > 0) {
              setShowIntro(false);
          }
      }, [messages, externalShowIntro]);
      y(() => {
          if (!isLoading && inputRef.current && typeof inputRef.current.focus === 'function') {
              inputRef.current.focus();
          }
      }, [isLoading]);
      const handleSubmit = (e) => {
          e === null || e === void 0 ? void 0 : e.preventDefault();
          if (input.trim() && !isLoading) {
              onSendMessage(input.trim(), boostMode, metadataFilters);
              setInput('');
          }
      };
      const handleKeyDown = (e) => {
          // Check for Ctrl+Enter (Windows/Linux) or Cmd+Enter (Mac)
          if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
              e.preventDefault();
              handleSubmit();
          }
      };
      // Handle IME composition events to prevent submission during Japanese input
      const handleCompositionStart = () => {
          // IME composition started (user is typing Japanese/Chinese/Korean)
          setIsComposing(true);
      };
      const handleCompositionEnd = () => {
          // IME composition ended (user finished typing)
          setIsComposing(false);
      };
      const handleKeyDownWithIME = (e) => {
          // Don't handle keyboard shortcuts during IME composition
          if (isComposing) {
              return;
          }
          handleKeyDown(e);
      };
      const handleQuestionClick = (question) => {
          onSendMessage(question, boostMode, metadataFilters);
      };
      // Use dynamic example questions if available, otherwise fallback to defaults
      const exampleQuestions = config.exampleQuestions || (config.language === 'ja'
          ? [
              'RAGシステムについて教えてください',
              'ドキュメントの検索方法は？',
              'APIの使い方を教えてください'
          ]
          : [
              'What is RAG system?',
              'How do I search documents?',
              'How to use the API?'
          ]);
      return (u$2(Container$7, { children: [u$2(MessagesArea$1, { children: [shouldShowIntro ? (u$2(IntroContainer, { children: [u$2(IntroIcon, { children: u$2(MessageCircle, { size: 24, color: "white" }) }), u$2(IntroTitle, { children: config.introTitle || (config.language === 'ja' ? 'こんにちは！' : 'Hi there!') }), u$2(IntroText, { children: config.introMessage || (config.language === 'ja'
                                      ? 'AskDona AIアシスタントです。ドキュメントや情報について何でもお聞きください。'
                                      : "I'm AskDona AI assistant. Ask me anything about your documents and information.") }), u$2(ExampleSection, { children: [u$2(ExampleTitle, { children: config.language === 'ja' ? '質問例' : 'Example Questions' }), u$2(ExampleButtons, { children: exampleQuestions.map((question, idx) => (u$2(ExampleButton, { onClick: () => handleQuestionClick(question), children: question }, idx))) })] })] })) : (u$2(MessageList, { messages: messages, isLoading: isLoading, streamingContent: streamingContent, config: config, sessionId: sessionId, onFeedbackSubmit: onFeedbackSubmit })), isLoading && currentState && currentState !== 'idle' && (u$2(StatusIndicator, { children: [u$2(StatusDot, {}), u$2(StatusText, { children: statusMessages[currentState] || currentState })] })), error && (u$2(ErrorMessage$2, { children: config.language === 'ja'
                              ? `エラーが発生しました: ${error.message}`
                              : `Error: ${error.message}` }))] }), u$2(InputArea, { children: u$2(InputContainer, { boostMode: boostMode, children: [u$2(TextArea$1, { ref: inputRef, value: input, onChange: (e) => setInput(e.target.value), onKeyDown: handleKeyDownWithIME, onCompositionStart: handleCompositionStart, onCompositionEnd: handleCompositionEnd, placeholder: config.language === 'ja'
                                  ? '質問を入力してください... (Ctrl+Enter または ⌘+Enter で送信)'
                                  : 'Ask me anything... (Ctrl+Enter or ⌘+Enter to send)', disabled: isLoading, rows: 1, boostMode: boostMode }), u$2(BottomToolbar, { boostMode: boostMode, children: [u$2("div", { style: { display: 'flex', alignItems: 'center', gap: '0.5rem' }, children: [config.chatflowId && onMetadataFiltersChange && (u$2(MetadataFilterButton, { chatflowId: config.chatflowId, filters: metadataFilters, onFiltersChange: onMetadataFiltersChange, disabled: isLoading })), config.allowBoostModeToggle && onBoostModeChange && (u$2(BoostToggle, { onClick: () => onBoostModeChange(!boostMode), disabled: isLoading, active: boostMode, title: config.language === 'ja'
                                                  ? 'Boostモードは、より多角的な視点から多くの文書を分析して回答します。'
                                                  : 'Boost mode analyzes more documents from multiple perspectives for comprehensive answers.', children: [u$2(BoostIcon, { active: boostMode, children: u$2(Timer, { size: 14 }) }), u$2(BoostLabel, { children: "Boost" })] }))] }), u$2("button", { onClick: handleSubmit, disabled: !input.trim() || isLoading, title: config.language === 'ja' ? 'Ctrl+Enter または ⌘+Enter で送信' : 'Ctrl+Enter or ⌘+Enter to send', type: "button", style: {
                                          width: '32px',
                                          height: '32px',
                                          borderRadius: '50%',
                                          border: 'none',
                                          background: !input.trim() || isLoading ? 'var(--askdona-border)' : 'var(--askdona-primary)',
                                          color: 'white',
                                          cursor: !input.trim() || isLoading ? 'not-allowed' : 'pointer',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          transition: 'all 0.2s',
                                      }, onMouseEnter: (e) => {
                                          if (input.trim() && !isLoading) {
                                              e.currentTarget.style.background = 'var(--askdona-primary-dark)';
                                              e.currentTarget.style.transform = 'scale(1.05)';
                                          }
                                      }, onMouseLeave: (e) => {
                                          e.currentTarget.style.background = !input.trim() || isLoading ? 'var(--askdona-border)' : 'var(--askdona-primary)';
                                          e.currentTarget.style.transform = 'scale(1)';
                                      }, children: u$2(ArrowUp, { size: 16, color: getIconColor() }) })] })] }) })] }));
  }
  // Styled components
  const Container$7 = j$1('div') `
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
  const MessagesArea$1 = j$1('div') `
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
`;
  const IntroContainer = j$1('div') `
  text-align: center;
  padding: 2rem 0;
`;
  const IntroIcon = j$1('div') `
  width: 3rem;
  height: 3rem;
  background: var(--askdona-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
`;
  const IntroTitle = j$1('h3') `
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--askdona-text);
`;
  const IntroText = j$1('p') `
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  margin: 0 auto 2rem;
  max-width: 90%;
  line-height: 1.5;
`;
  const ExampleSection = j$1('div') `
  margin-top: 2rem;
`;
  const ExampleTitle = j$1('h4') `
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--askdona-text-secondary);
  margin: 0 0 1rem;
`;
  const ExampleButtons = j$1('div') `
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`;
  const ExampleButton = j$1('button') `
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
`;
  const ErrorMessage$2 = j$1('div') `
  background: rgba(239, 68, 68, 0.1);
  color: var(--askdona-error);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  font-size: 0.875rem;
`;
  // Status indicator components - matches askdona repo style
  const StatusIndicator = j$1('div') `
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  margin: 1rem 0;
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
`;
  const StatusDot = j$1('div') `
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
`;
  const StatusText = j$1('span') `
  font-weight: 500;
`;
  const InputArea = j$1('div') `
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  flex-shrink: 0;
`;
  // Bottom toolbar for input actions
  const BottomToolbar = j$1('div') `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background: var(--askdona-background);
  border-radius: 0 0 0.75rem 0.75rem;
  border: 1px solid var(--askdona-border);
  border-top: none;
  transition: all 0.2s;
  
  ${({ boostMode }) => boostMode && `
    border-color: transparent;
  `}
`;
  // Boost Mode Components
  const BoostToggle = j$1('button') `
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
  
  ${({ active }) => active
    ? `
      background: #1D3D5E;
      color: white;
      border-color: #1D3D5E;
      
      &:hover:not(:disabled) {
        background: #1a3452;
        border-color: #1a3452;
      }
    `
    : `
      background: var(--askdona-background);
      color: var(--askdona-text-secondary);
      
      &:hover:not(:disabled) {
        background: var(--askdona-border);
        color: var(--askdona-text);
      }
    `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
  const BoostIcon = j$1('span') `
  display: flex;
  align-items: center;
  opacity: ${({ active }) => active ? 1 : 0.8};
`;
  const BoostLabel = j$1('span') `
  font-weight: 500;
  font-size: 12px;
`;
  const InputContainer = j$1('div') `
  position: relative;
  display: flex;
  flex-direction: column;
  
  ${({ boostMode }) => boostMode && `
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(135deg, #1D3D5E, #FFE699);
      border-radius: 0.875rem;
      z-index: -1;
    }
  `}
  
  &:focus-within {
    ${({ boostMode }) => !boostMode && `
      textarea {
        border-color: var(--askdona-primary);
      }
      
      > div {
        border-color: var(--askdona-primary);
      }
    `}
  }
`;
  const TextArea$1 = j$1('textarea') `
  width: 100%;
  padding: 0.75rem 1rem 0.5rem 1rem;
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem 0.75rem 0 0;
  font-size: 0.875rem;
  resize: none;
  outline: none;
  transition: all 0.2s;
  background: var(--askdona-background);
  color: var(--askdona-text);
  min-height: 48px;
  max-height: 120px;
  overflow-y: auto;
  position: relative;
  z-index: 1;
  border-bottom: none;
  
  ${({ boostMode }) => boostMode && `
    border-color: transparent;
  `}
  
  &:focus {
    outline: none;
    border-color: ${({ boostMode }) => boostMode ? 'transparent' : 'var(--askdona-border)'};
    box-shadow: none;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: var(--askdona-text-secondary);
  }
`;

  const SEARCH_HISTORY_KEY = 'askdona_search_history';
  const MAX_HISTORY_ITEMS = 50;
  const HISTORY_EXPIRY_DAYS = 30;
  class SearchHistoryManager {
      static getStorageKey() {
          return SEARCH_HISTORY_KEY;
      }
      static getAllHistory() {
          try {
              const stored = localStorage.getItem(this.getStorageKey());
              if (!stored)
                  return [];
              const history = JSON.parse(stored);
              // Remove expired items (older than 30 days)
              const expiryTime = Date.now() - (HISTORY_EXPIRY_DAYS * 24 * 60 * 60 * 1000);
              return history.filter(item => item.timestamp > expiryTime);
          }
          catch (error) {
              console.error('[SearchHistory] Error reading history:', error);
              return [];
          }
      }
      static saveHistory(history) {
          try {
              // Keep only the most recent items
              const trimmedHistory = history.slice(0, MAX_HISTORY_ITEMS);
              localStorage.setItem(this.getStorageKey(), JSON.stringify(trimmedHistory));
          }
          catch (error) {
              console.error('[SearchHistory] Error saving history:', error);
          }
      }
      static addSearchHistory(chatflowId, query, resultsCount, searchTime) {
          const newItem = {
              id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
              query: query.trim(),
              resultsCount,
              searchTime,
              timestamp: Date.now(),
              chatflowId,
          };
          const history = this.getAllHistory();
          // Add new item at the beginning
          history.unshift(newItem);
          this.saveHistory(history);
      }
      static getSearchHistory(chatflowId, limit = 20) {
          const history = this.getAllHistory();
          // Filter by chatflowId and limit results
          return history
              .filter(item => item.chatflowId === chatflowId)
              .slice(0, limit);
      }
      static getRecentQueries(chatflowId, limit = 10, unique = true) {
          const history = this.getSearchHistory(chatflowId, unique ? 100 : limit);
          if (unique) {
              // Remove duplicates while preserving order
              const seen = new Set();
              const uniqueQueries = [];
              for (const item of history) {
                  const queryLower = item.query.toLowerCase();
                  if (!seen.has(queryLower)) {
                      seen.add(queryLower);
                      uniqueQueries.push(item.query);
                      if (uniqueQueries.length >= limit)
                          break;
                  }
              }
              return uniqueQueries;
          }
          return history.map(item => item.query);
      }
      static getPopularQueries(chatflowId, limit = 10) {
          const history = this.getSearchHistory(chatflowId, 1000);
          const queryCount = new Map();
          // Count occurrences (case-insensitive)
          history.forEach(item => {
              const queryLower = item.query.toLowerCase();
              queryCount.set(queryLower, (queryCount.get(queryLower) || 0) + 1);
          });
          // Sort by count and return top N
          return Array.from(queryCount.entries())
              .map(([query, count]) => {
              var _a;
              return ({
                  query: ((_a = history.find(h => h.query.toLowerCase() === query)) === null || _a === void 0 ? void 0 : _a.query) || query,
                  count
              });
          })
              .sort((a, b) => b.count - a.count)
              .slice(0, limit);
      }
      static clearHistory(chatflowId) {
          if (chatflowId) {
              // Clear only for specific chatflow
              const history = this.getAllHistory();
              const filtered = history.filter(item => item.chatflowId !== chatflowId);
              this.saveHistory(filtered);
          }
          else {
              // Clear all history
              localStorage.removeItem(this.getStorageKey());
          }
      }
      static getHistoryStats(chatflowId) {
          const history = this.getSearchHistory(chatflowId, 1000);
          if (history.length === 0) {
              return {
                  totalSearches: 0,
                  uniqueQueries: 0,
                  avgResultsCount: 0,
                  avgSearchTime: 0,
              };
          }
          const uniqueQueries = new Set(history.map(h => h.query.toLowerCase())).size;
          const avgResultsCount = history.reduce((sum, h) => sum + h.resultsCount, 0) / history.length;
          const avgSearchTime = history.reduce((sum, h) => sum + h.searchTime, 0) / history.length;
          return {
              totalSearches: history.length,
              uniqueQueries,
              avgResultsCount: Math.round(avgResultsCount),
              avgSearchTime: Math.round(avgSearchTime),
          };
      }
  }

  // useSearchHistory hook for embed widget
  function useSearchHistory(chatflowId, options = {}) {
      const { limit = 20, uniqueQueries = true, autoRefresh = true, } = options;
      const [recentQueries, setRecentQueries] = d$1([]);
      const [popularQueries, setPopularQueries] = d$1([]);
      const loadHistory = q$1(() => {
          if (!chatflowId)
              return;
          // Get recent queries
          const queries = SearchHistoryManager.getRecentQueries(chatflowId, limit, uniqueQueries);
          setRecentQueries(queries);
          // Get popular queries
          const popular = SearchHistoryManager.getPopularQueries(chatflowId, 10);
          setPopularQueries(popular);
      }, [chatflowId, limit, uniqueQueries]);
      // Load history on mount and chatflowId change
      y(() => {
          if (autoRefresh) {
              loadHistory();
          }
      }, [autoRefresh, loadHistory]);
      const addSearchHistory = q$1((query, resultsCount, searchTime) => {
          if (!chatflowId || !query.trim())
              return;
          SearchHistoryManager.addSearchHistory(chatflowId, query, resultsCount, searchTime);
          // Refresh history if autoRefresh is enabled
          if (autoRefresh) {
              loadHistory();
          }
      }, [chatflowId, autoRefresh, loadHistory]);
      const clearHistory = q$1(() => {
          if (!chatflowId)
              return;
          SearchHistoryManager.clearHistory(chatflowId);
          setRecentQueries([]);
          setPopularQueries([]);
      }, [chatflowId]);
      const getStats = q$1(() => {
          if (!chatflowId)
              return null;
          return SearchHistoryManager.getHistoryStats(chatflowId);
      }, [chatflowId]);
      return {
          recentQueries,
          popularQueries,
          addSearchHistory,
          clearHistory,
          refresh: loadHistory,
          getStats,
      };
  }

  const RESULTS_PER_PAGE = 10;
  function SearchView({ config }) {
      var _a, _b;
      const [query, setQuery] = d$1('');
      const [searchResponse, setSearchResponse] = d$1(null);
      const [allResults, setAllResults] = d$1([]);
      const [filters, setFilters] = d$1({});
      const [isSearching, setIsSearching] = d$1(false);
      const [error, setError] = d$1(null);
      const [currentPage, setCurrentPage] = d$1(1);
      const [showSuggestions, setShowSuggestions] = d$1(false);
      const searchInputRef = A$1(null);
      // Search history hook
      const { recentQueries, addSearchHistory } = useSearchHistory(config.chatflowId);
      y(() => {
          var _a;
          (_a = searchInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
      }, []);
      // Execute search API call
      const executeSearch = q$1(async (searchQuery) => {
          var _a;
          if (!searchQuery.trim()) {
              setSearchResponse(null);
              setAllResults([]);
              return;
          }
          setIsSearching(true);
          setError(null);
          setFilters({});
          setCurrentPage(1);
          setShowSuggestions(false);
          const startTime = Date.now();
          try {
              const searchRequestBody = {
                  query: searchQuery,
                  filters: {},
                  limit: 50,
                  offset: 0
              };
              const searchResult = await searchDocuments(config.chatflowId, searchRequestBody);
              setSearchResponse(searchResult);
              setAllResults(searchResult.results || []);
              // Add to search history
              const searchTime = Date.now() - startTime;
              addSearchHistory(searchQuery, ((_a = searchResult.results) === null || _a === void 0 ? void 0 : _a.length) || 0, searchTime);
          }
          catch (err) {
              setError(err instanceof Error ? err.message : 'Unknown error occurred');
              setSearchResponse(null);
              setAllResults([]);
          }
          finally {
              setIsSearching(false);
          }
      }, [config.chatflowId, addSearchHistory]);
      // Handle search button click or Enter key
      const handleSearch = q$1(() => {
          if (query.trim()) {
              executeSearch(query.trim());
              // Keep the query in the input field for easy modification
          }
      }, [query, executeSearch]);
      // Handle keyboard shortcuts
      const handleKeyDown = q$1((e) => {
          if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
              e.preventDefault();
              handleSearch();
          }
          else if (e.key === 'Enter') {
              e.preventDefault();
              handleSearch();
          }
      }, [handleSearch]);
      // Client-side filtering
      const filteredResults = T$1(() => {
          if (!allResults.length)
              return [];
          let filtered = [...allResults];
          // Category filter
          if (filters.categories && filters.categories.length > 0) {
              filtered = filtered.filter(result => {
                  var _a, _b;
                  const category = (_a = result.fileMetadata) === null || _a === void 0 ? void 0 : _a.category;
                  const subCategory = (_b = result.fileMetadata) === null || _b === void 0 ? void 0 : _b.subCategory;
                  return filters.categories.includes(category || '') ||
                      filters.categories.includes(subCategory || '');
              });
          }
          // File type filter
          if (filters.fileTypes && filters.fileTypes.length > 0) {
              filtered = filtered.filter(result => filters.fileTypes.includes(result.fileFormat));
          }
          return filtered;
      }, [allResults, filters]);
      // Pagination
      const paginatedResults = T$1(() => {
          const start = (currentPage - 1) * RESULTS_PER_PAGE;
          const end = start + RESULTS_PER_PAGE;
          return filteredResults.slice(start, end);
      }, [filteredResults, currentPage]);
      const totalPages = Math.ceil(filteredResults.length / RESULTS_PER_PAGE);
      const handleInputChange = (e) => {
          const value = e.target.value;
          setQuery(value);
          // Don't automatically show suggestions when typing
      };
      const handleSuggestionSelect = (suggestion) => {
          setQuery(suggestion);
          setShowSuggestions(false);
          executeSearch(suggestion);
      };
      const handleClearInput = () => {
          var _a;
          setQuery('');
          setShowSuggestions(false);
          (_a = searchInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
      };
      const handleFilterChange = (newFilters) => {
          setFilters(newFilters);
          setCurrentPage(1);
      };
      const handlePageChange = (page) => {
          setCurrentPage(page);
      };
      // File icon component
      const FileIcon = ({ fileFormat }) => {
          const getIconStyle = (format) => {
              switch (format.toLowerCase()) {
                  case 'pdf':
                      return { color: '#ef4444' }; // red
                  case 'docx':
                  case 'doc':
                      return { color: '#3b82f6' }; // blue
                  case 'xlsx':
                  case 'xls':
                      return { color: '#10b981' }; // green
                  case 'pptx':
                  case 'ppt':
                      return { color: '#f97316' }; // orange
                  case 'html':
                      return { color: '#8b5cf6' }; // purple
                  default:
                      return { color: 'var(--askdona-text-secondary)' };
              }
          };
          return (u$2(FileIconContainer, { style: getIconStyle(fileFormat), children: u$2("svg", { width: "20", height: "20", fill: "currentColor", viewBox: "0 0 24 24", children: [u$2("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" }), u$2("path", { d: "M14 2v6h6" })] }) }));
      };
      const highlightQuery = (text) => {
          if (!query.trim())
              return u$2(k$1, { children: text });
          const parts = text.split(new RegExp(`(${query})`, 'gi'));
          return (u$2(k$1, { children: parts.map((part, i) => part.toLowerCase() === query.toLowerCase()
                  ? u$2(Highlight, { children: part }, i)
                  : u$2("span", { children: part }, i)) }));
      };
      // Generate tabs dynamically from facets
      const tabs = T$1(() => {
          if (!searchResponse)
              return [];
          const allTab = {
              id: 'all',
              label: config.language === 'ja' ? 'すべて' : 'All',
              count: filteredResults.length
          };
          const fileTypeTabs = searchResponse.facets.fileTypes.map(facet => ({
              id: facet.value,
              label: facet.value.toUpperCase(),
              count: facet.count
          }));
          return [allTab, ...fileTypeTabs];
      }, [searchResponse, filteredResults.length, config.language]);
      return (u$2(Container$6, { children: [u$2(SearchInputContainer, { children: [u$2(SearchInputWrapper, { children: [u$2(SearchInput, { ref: searchInputRef, type: "text", value: query, onInput: handleInputChange, onKeyDown: handleKeyDown, onFocus: () => {
                                      if (recentQueries.length > 0) {
                                          setShowSuggestions(true);
                                      }
                                  }, onBlur: () => {
                                      // Delay hiding suggestions to allow clicking on them
                                      setTimeout(() => setShowSuggestions(false), 150);
                                  }, placeholder: config.language === 'ja' ? '検索キーワードを入力...' : 'Enter search keywords...' }), query && (u$2(ClearButton, { onClick: handleClearInput, title: config.language === 'ja' ? 'クリア' : 'Clear', children: u$2("svg", { width: "16", height: "16", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: u$2("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) }))] }), u$2(SearchButton, { onClick: handleSearch, disabled: !query.trim() || isSearching, title: config.language === 'ja' ? '検索 (Enter または Ctrl+Enter)' : 'Search (Enter or Ctrl+Enter)', children: isSearching ? (u$2(SearchSpinner, {})) : (u$2("svg", { width: "20", height: "20", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: u$2("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) })) }), showSuggestions && recentQueries.length > 0 && (u$2(SuggestionsDropdown, { children: [u$2(SuggestionHeader, { children: config.language === 'ja' ? '最近の検索' : 'Recent searches' }), recentQueries.slice(0, 8).map((recentQuery, index) => (u$2(SuggestionItem, { onClick: () => handleSuggestionSelect(recentQuery), children: [u$2(SuggestionIcon, { children: u$2("svg", { width: "16", height: "16", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: u$2("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }), u$2(SuggestionText, { children: recentQuery })] }, index)))] }))] }), searchResponse && (u$2(ResultsHeader, { children: [u$2(ResultsCount, { children: [config.language === 'ja' ? '検索結果' : 'Search Results', ": ", filteredResults.length.toLocaleString(), " ", config.language === 'ja' ? '件' : 'items', ((_a = filters.categories) === null || _a === void 0 ? void 0 : _a.length) || ((_b = filters.fileTypes) === null || _b === void 0 ? void 0 : _b.length) ? (u$2(FilteredBadge, { children: config.language === 'ja' ? 'フィルタ適用済' : 'Filtered' })) : null] }), u$2(SearchTime, { children: [config.language === 'ja' ? '検索時間' : 'Search time', ": ", searchResponse.searchTime, "ms"] })] })), searchResponse && tabs.length > 1 && (u$2(TabsContainer$1, { children: tabs.map(tab => (u$2(Tab, { active: tab.id === 'all' || Boolean(filters.fileTypes && filters.fileTypes.includes(tab.id)), onClick: () => {
                          if (tab.id === 'all') {
                              handleFilterChange({});
                          }
                          else {
                              handleFilterChange({ fileTypes: [tab.id] });
                          }
                      }, children: [tab.label, u$2(TabCount, { children: ["(", tab.count, ")"] })] }, tab.id))) })), u$2(ResultsContainer, { children: isSearching ? (u$2(LoadingContainer$1, { children: [u$2(LoadingSpinner, {}), u$2(LoadingText$1, { children: config.language === 'ja' ? '検索中...' : 'Searching...' })] })) : error ? (u$2(ErrorContainer$1, { children: [u$2(ErrorIcon$1, { children: "\u26A0\uFE0F" }), u$2(ErrorText$1, { children: config.language === 'ja' ? '検索エラー' : 'Search Error' }), u$2(ErrorDetails, { children: error })] })) : query && filteredResults.length === 0 && searchResponse ? (u$2(NoResults, { children: config.language === 'ja'
                          ? `"${query}" に一致する結果が見つかりませんでした`
                          : `No results found for "${query}"` })) : paginatedResults.length > 0 ? (u$2(k$1, { children: [u$2(ResultsList, { children: paginatedResults.map(result => (u$2(SearchResultCardStyled, { children: [u$2(CardHeader, { children: u$2("div", { className: "file-header", children: [u$2(FileIcon, { fileFormat: result.fileFormat }), u$2("div", { className: "file-info", children: [result.fileMetadata.url ? (u$2("a", { href: result.fileMetadata.url, target: "_blank", rel: "noopener noreferrer", className: "file-title-link", children: highlightQuery(result.fileName) })) : (u$2(FileTitle, { children: highlightQuery(result.fileName) })), u$2(FileFormat, { children: result.fileFormat.toUpperCase() })] })] }) }), u$2(CardContent, { children: (result.fileMetadata.category || result.fileMetadata.subCategory) && (u$2(BadgeContainer, { children: [result.fileMetadata.category && (u$2(Badge, { variant: "secondary", children: result.fileMetadata.category })), result.fileMetadata.subCategory && (u$2(Badge, { variant: "outline", children: result.fileMetadata.subCategory }))] })) })] }, result.fileId))) }), totalPages > 1 && (u$2(PaginationContainer, { children: [u$2(PaginationButton, { onClick: () => handlePageChange(currentPage - 1), disabled: currentPage <= 1, children: config.language === 'ja' ? '前へ' : 'Previous' }), u$2(PageInfo, { children: [currentPage, " / ", totalPages] }), u$2(PaginationButton, { onClick: () => handlePageChange(currentPage + 1), disabled: currentPage >= totalPages, children: config.language === 'ja' ? '次へ' : 'Next' })] }))] })) : (u$2(EmptyState, { children: [u$2(EmptyIcon, { children: "\uD83D\uDD0D" }), u$2(EmptyText, { children: config.language === 'ja'
                                  ? '検索キーワードを入力してください'
                                  : 'Enter a search term to see results' })] })) })] }));
  }
  // Styled components
  const Container$6 = j$1('div') `
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
  const SearchInputContainer = j$1('div') `
  position: relative;
  padding: 1.25rem 1.5rem 1rem;
  display: flex;
  gap: 0.5rem;
`;
  const SearchInputWrapper = j$1('div') `
  flex: 1;
  position: relative;
`;
  const SearchInput = j$1('input') `
  width: 100%;
  padding: 0.75rem 1rem;
  padding-right: 2.5rem;
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  font-size: 1rem;
  outline: none;
  transition: all 0.2s;
  background: var(--askdona-background);
  color: var(--askdona-text);
  
  &:focus {
    border-color: var(--askdona-primary);
    box-shadow: 0 0 0 3px rgba(var(--askdona-primary-rgb), 0.1);
  }
  
  &::placeholder {
    color: var(--askdona-text-secondary);
  }
`;
  const ClearButton = j$1('button') `
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  color: var(--askdona-text-secondary);
  transition: color 0.2s;
  border-radius: 0.25rem;
  
  &:hover {
    color: var(--askdona-text);
    background: var(--askdona-surface);
  }
`;
  const SearchButton = j$1('button') `
  padding: 0.75rem;
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  background: var(--askdona-primary);
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 3rem;
  
  &:hover:not(:disabled) {
    background: var(--askdona-primary-dark);
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: var(--askdona-border);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;
  const SearchSpinner = j$1('div') `
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
  const TabsContainer$1 = j$1('div') `
  display: flex;
  gap: 1.5rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  overflow-x: auto;
  flex-shrink: 0;
  
  &::-webkit-scrollbar {
    height: 0;
  }
`;
  const Tab = j$1('button') `
  padding: 0.75rem 0;
  border: none;
  background: none;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  transition: all 0.2s;
  color: ${props => props.active ? 'var(--askdona-text)' : 'var(--askdona-text-secondary)'};
  
  &:hover {
    color: var(--askdona-text);
  }
  
  ${props => props.active && `
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--askdona-primary);
    }
  `}
`;
  const TabCount = j$1('span') `
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin-left: 0.25rem;
`;
  const ResultsContainer = j$1('div') `
  flex: 1;
  overflow-y: auto;
  padding: 1rem 1.5rem;
`;
  const ResultsList = j$1('div') `
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
  const Highlight = j$1('span') `
  background: rgba(var(--askdona-primary-rgb), 0.2);
  padding: 0 0.125rem;
  border-radius: 0.125rem;
  font-weight: 500;
`;
  const LoadingContainer$1 = j$1('div') `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;
  const LoadingSpinner = j$1('div') `
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--askdona-border);
  border-top-color: var(--askdona-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
  const LoadingText$1 = j$1('p') `
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
`;
  const NoResults = j$1('div') `
  text-align: center;
  padding: 3rem;
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
`;
  const EmptyState = j$1('div') `
  text-align: center;
  padding: 3rem;
`;
  const EmptyIcon = j$1('div') `
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`;
  const EmptyText = j$1('p') `
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
  margin: 0;
`;
  const ResultsHeader = j$1('div') `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  background: var(--askdona-surface);
`;
  const ResultsCount = j$1('h3') `
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: var(--askdona-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
  const FilteredBadge = j$1('span') `
  background: var(--askdona-primary);
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 500;
`;
  const SearchTime = j$1('p') `
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin: 0;
`;
  const ErrorContainer$1 = j$1('div') `
  text-align: center;
  padding: 3rem;
  color: var(--askdona-error);
`;
  const ErrorIcon$1 = j$1('div') `
  font-size: 2rem;
  margin-bottom: 1rem;
`;
  const ErrorText$1 = j$1('h3') `
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--askdona-error);
`;
  const ErrorDetails = j$1('p') `
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  margin: 0;
`;
  const PaginationContainer = j$1('div') `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid var(--askdona-border);
  margin-top: 1rem;
`;
  const PaginationButton = j$1('button') `
  padding: 0.5rem 1rem;
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
  background: var(--askdona-background);
  color: var(--askdona-text);
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s;
  
  &:hover:not(:disabled) {
    background: var(--askdona-surface);
    border-color: var(--askdona-primary);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
  const PageInfo = j$1('span') `
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
`;
  // New styled components for SearchResultCard layout
  const SearchResultCardStyled = j$1('div') `
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  background: var(--askdona-background);
  margin-bottom: 1rem;
  transition: all 0.2s;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: var(--askdona-primary);
  }
`;
  const CardHeader = j$1('div') `
  padding: 1.5rem 1.5rem 1rem;
  
  .file-header {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
  }
  
  .file-info {
    flex: 1;
    min-width: 0;
  }
  
  .file-title-link {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--askdona-text);
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover {
      color: var(--askdona-primary);
    }
  }
`;
  const CardContent = j$1('div') `
  padding: 0 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
  const FileIconContainer = j$1('div') `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
`;
  const FileTitle = j$1('h3') `
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  color: var(--askdona-text);
`;
  const FileFormat = j$1('p') `
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  margin: 0.25rem 0 0;
`;
  const BadgeContainer = j$1('div') `
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
  const Badge = j$1('span') `
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${props => props.variant === 'secondary' ? `
    background: var(--askdona-surface);
    color: var(--askdona-text);
    border: 1px solid var(--askdona-border);
  ` : `
    background: transparent;
    color: var(--askdona-text-secondary);
    border: 1px solid var(--askdona-border);
  `}
`;
  // Search suggestions styles
  const SuggestionsDropdown = j$1('div') `
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 16rem;
  overflow-y: auto;
  margin-top: 0.25rem;
`;
  const SuggestionHeader = j$1('div') `
  padding: 0.75rem 1rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.025em;
`;
  const SuggestionItem = j$1('button') `
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: var(--askdona-surface);
  }
`;
  const SuggestionIcon = j$1('div') `
  color: var(--askdona-text-secondary);
  flex-shrink: 0;
`;
  const SuggestionText = j$1('span') `
  font-size: 0.875rem;
  color: var(--askdona-text);
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

  function DeepResearchQuestionnaire({ originalQuery, questions, onSubmit, onBack, isSubmitting = false, error }) {
      const [responses, setResponses] = d$1(new Array(questions.length).fill(''));
      const handleResponseChange = (index, value) => {
          const newResponses = [...responses];
          newResponses[index] = value;
          setResponses(newResponses);
      };
      const handleSubmit = () => {
          const questionnaireResponses = questions.map((question, index) => ({
              question,
              answer: responses[index] || ''
          }));
          onSubmit(questionnaireResponses);
      };
      const isValid = responses.every(response => response.trim().length > 0);
      const completedCount = responses.filter(response => response.trim().length > 0).length;
      return (u$2(Container$5, { children: [u$2(Header$4, { children: [u$2(HeaderIcon, { children: u$2(CircleQuestionMark, { size: 24, color: "white" }) }), u$2(HeaderContent$2, { children: [u$2(Title$4, { children: "\uD83D\uDD0D Research Planning Questions" }), u$2(Subtitle, { children: "Help us understand what you're looking for" })] })] }), u$2(QuerySection, { children: [u$2(QueryLabel$2, { children: "Your Research Query:" }), u$2(QueryText$2, { children: ["\"", originalQuery, "\""] })] }), u$2(ProgressSection$1, { children: [u$2(ProgressHeader, { children: [u$2(ProgressTitle, { children: "Questions Completed" }), u$2(ProgressCount, { children: [completedCount, "/", questions.length] })] }), u$2(ProgressBar$2, { children: u$2(ProgressFill$2, { progress: (completedCount / questions.length) * 100 }) })] }), u$2(InstructionSection, { children: [u$2(InstructionIcon, { children: "\uD83D\uDCA1" }), u$2(InstructionText, { children: "Please answer these questions to help us conduct more targeted and comprehensive research. The more specific your answers, the better the research results will be." })] }), u$2(QuestionsSection, { children: questions.map((question, index) => (u$2(QuestionCard, { children: [u$2(QuestionNumber, { children: u$2("span", { children: index + 1 }) }), u$2(QuestionContent, { children: [u$2(QuestionText, { children: question }), u$2(TextArea, { value: responses[index], onChange: (e) => handleResponseChange(index, e.target.value), placeholder: "Please provide your answer here...", rows: 3, disabled: isSubmitting })] })] }, index))) }), error && (u$2(ErrorMessage$1, { children: [u$2(CircleAlert, { size: 16 }), u$2("span", { children: error })] })), u$2(ActionsSection, { children: [onBack && (u$2(BackButton$2, { onClick: onBack, disabled: isSubmitting, children: "\u2190 Back to Query" })), u$2(SubmitButton, { onClick: handleSubmit, disabled: !isValid || isSubmitting, children: isSubmitting ? (u$2(k$1, { children: [u$2(Loader, { size: 16, className: "spin" }), "Starting Research..."] })) : (u$2(k$1, { children: [u$2(ArrowRight, { size: 16 }), "Start Deep Research"] })) })] }), u$2(HelpSection$1, { children: [u$2(HelpIcon, { children: "\uD83D\uDCA1" }), u$2(HelpContent$1, { children: [u$2(HelpTitle$1, { children: "Tips for Better Results:" }), u$2(HelpList$1, { children: [u$2(HelpItem$1, { children: "\u2705 Be specific about what aspects interest you most" }), u$2(HelpItem$1, { children: "\u23F0 Mention any time periods or geographical regions" }), u$2(HelpItem$1, { children: "\uD83C\uDFAF Clarify if you need academic or practical information" }), u$2(HelpItem$1, { children: "\uD83D\uDCCA Specify the depth of detail you're looking for" })] })] })] })] }));
  }
  // Styled components using existing patterns
  const Container$5 = j$1('div') `
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
`;
  const Header$4 = j$1('div') `
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
`;
  const HeaderIcon = j$1('div') `
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
  const HeaderContent$2 = j$1('div') `
  flex: 1;
`;
  const Title$4 = j$1('h3') `
  margin: 0 0 0.25rem;
  font-size: 1.125rem;
  font-weight: 600;
`;
  const Subtitle = j$1('p') `
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
`;
  const QuerySection = j$1('div') `
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  background: rgba(var(--askdona-primary-rgb, 67, 56, 202), 0.05);
`;
  const QueryLabel$2 = j$1('h4') `
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
`;
  const QueryText$2 = j$1('p') `
  margin: 0;
  font-style: italic;
  color: var(--askdona-text);
  line-height: 1.5;
`;
  const ProgressSection$1 = j$1('div') `
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`;
  const ProgressHeader = j$1('div') `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;
  const ProgressTitle = j$1('span') `
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--askdona-text);
`;
  const ProgressCount = j$1('span') `
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-primary);
`;
  const ProgressBar$2 = j$1('div') `
  height: 0.5rem;
  background: var(--askdona-border);
  border-radius: 0.25rem;
  overflow: hidden;
`;
  const ProgressFill$2 = j$1('div') `
  height: 100%;
  width: ${({ progress }) => Math.min(Math.max(progress, 0), 100)}%;
  background: var(--askdona-primary);
  border-radius: 0.25rem;
  transition: width 0.3s ease-in-out;
`;
  const InstructionSection = j$1('div') `
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  background: rgba(59, 130, 246, 0.05);
`;
  const InstructionIcon = j$1('div') `
  font-size: 1.25rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
`;
  const InstructionText = j$1('p') `
  margin: 0;
  font-size: 0.875rem;
  color: var(--askdona-text-secondary);
  line-height: 1.5;
`;
  const QuestionsSection = j$1('div') `
  padding: 1.5rem;
`;
  const QuestionCard = j$1('div') `
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
`;
  const QuestionNumber = j$1('div') `
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
`;
  const QuestionContent = j$1('div') `
  flex: 1;
`;
  const QuestionText = j$1('p') `
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
  color: var(--askdona-text);
  line-height: 1.5;
`;
  const TextArea = j$1('textarea') `
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
`;
  const ErrorMessage$1 = j$1('div') `
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  font-size: 0.875rem;
  border-top: 1px solid var(--askdona-border);
`;
  const ActionsSection = j$1('div') `
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid var(--askdona-border);
`;
  const BackButton$2 = j$1('button') `
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
`;
  const SubmitButton = j$1('button') `
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
`;
  const HelpSection$1 = j$1('div') `
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(16, 185, 129, 0.05);
  border-top: 1px solid var(--askdona-border);
`;
  const HelpIcon = j$1('div') `
  font-size: 1.25rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
`;
  const HelpContent$1 = j$1('div') `
  flex: 1;
`;
  const HelpTitle$1 = j$1('p') `
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text);
`;
  const HelpList$1 = j$1('div') `
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
  const HelpItem$1 = j$1('div') `
  font-size: 0.8125rem;
  color: var(--askdona-text-secondary);
  line-height: 1.4;
`;

  // Stage configuration with proper icons and colors
  const STAGE_CONFIG = {
      'pending': {
          label: 'Initializing',
          icon: Clock,
          description: 'Setting up Deep Research...',
          color: '#6b7280'
      },
      'follow-up': {
          label: 'Planning Research',
          icon: Target,
          description: 'Analyzing your query and planning research approach',
          color: '#3b82f6'
      },
      'research-outline': {
          label: 'Creating Outline',
          icon: Clipboard,
          description: 'Building comprehensive research outline',
          color: '#3b82f6'
      },
      'search': {
          label: 'Searching Sources',
          icon: Search,
          description: 'Finding and analyzing relevant sources',
          color: '#059669'
      },
      'extraction': {
          label: 'Extracting Information',
          icon: Database,
          description: 'Extracting key information from sources',
          color: '#059669'
      },
      'new-angles': {
          label: 'Exploring Angles',
          icon: Beaker,
          description: 'Discovering additional research angles',
          color: '#7c3aed'
      },
      'synthesis': {
          label: 'Synthesizing Results',
          icon: Zap,
          description: 'Combining findings into comprehensive report',
          color: '#dc2626'
      },
      'processing': {
          label: 'Processing',
          icon: FileText,
          description: 'Processing your research request',
          color: '#3b82f6'
      },
      'completed': {
          label: 'Complete',
          icon: CircleCheckBig,
          description: 'Research completed successfully',
          color: '#059669'
      },
      'failed': {
          label: 'Failed',
          icon: TriangleAlert,
          description: 'Research failed',
          color: '#dc2626'
      }
  };
  function formatDuration$1(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      if (minutes === 0) {
          return `${remainingSeconds}s`;
      }
      else if (remainingSeconds === 0) {
          return `${minutes}m`;
      }
      else {
          return `${minutes}m ${remainingSeconds}s`;
      }
  }
  function formatEstimatedTime(seconds) {
      if (!seconds || seconds <= 0)
          return '';
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      if (minutes === 0) {
          return `~${remainingSeconds}s remaining`;
      }
      else if (remainingSeconds < 30) {
          return `~${minutes}m remaining`;
      }
      else {
          return `~${minutes + 1}m remaining`;
      }
  }
  function DeepResearchProgress({ job, isLoading, onCancel }) {
      var _a, _b;
      const [elapsedTime, setElapsedTime] = d$1(0);
      // Calculate elapsed time
      y(() => {
          const startTime = new Date(job.startedAt).getTime();
          const updateElapsed = () => {
              const now = Date.now();
              const elapsed = Math.floor((now - startTime) / 1000);
              setElapsedTime(elapsed);
          };
          updateElapsed();
          const interval = setInterval(updateElapsed, 1000);
          return () => clearInterval(interval);
      }, [job.startedAt]);
      const currentStage = ((_a = job.progress) === null || _a === void 0 ? void 0 : _a.stage) || job.status;
      const stageConfig = STAGE_CONFIG[currentStage] || STAGE_CONFIG.processing;
      const progress = ((_b = job.progress) === null || _b === void 0 ? void 0 : _b.progress) || 0;
      const IconComponent = stageConfig.icon;
      return (u$2(Container$4, { children: [u$2(Header$3, { children: u$2(HeaderContent$1, { children: [u$2(StageIconContainer, { color: stageConfig.color, children: u$2(IconComponent, { size: 20, color: "white" }) }), u$2(HeaderInfo$1, { children: [u$2(Title$3, { children: "\uD83D\uDD0D Deep Research in Progress" }), u$2(JobMetadata, { children: [u$2(MetaItem$1, { children: [u$2(Clock, { size: 14 }), formatDuration$1(elapsedTime)] }), u$2(MetaItem$1, { children: ["ID: ", job.jobId.slice(-8)] })] })] })] }) }), u$2(QueryCard$1, { children: [u$2(QueryLabel$1, { children: "Research Query:" }), u$2(QueryText$1, { children: ["\"", job.query, "\""] })] }), u$2(StageCard, { children: [u$2(StageHeader, { children: [u$2(StageIconLarge, { color: stageConfig.color, children: u$2(IconComponent, { size: 24 }) }), u$2(StageInfo$1, { children: [u$2(StageTitle, { color: stageConfig.color, children: stageConfig.label }), u$2(StageDescription, { children: stageConfig.description })] })] }), job.status === 'processing' && (u$2(ProgressBarContainer, { children: [u$2(ProgressBar$1, { children: u$2(ProgressFill$1, { progress: progress, color: stageConfig.color }) }), u$2(ProgressText$1, { children: [Math.round(progress), "%"] })] }))] }), job.progress && (u$2(DetailsGrid$1, { children: [job.progress.sources && job.progress.sources > 0 && (u$2(DetailCard, { children: [u$2(DetailIcon, { children: u$2(Database, { size: 16, color: "#6b7280" }) }), u$2(DetailContent, { children: [u$2(DetailLabel$1, { children: "Sources Found" }), u$2(DetailValue$1, { children: job.progress.sources })] })] })), job.progress.estimatedTimeRemaining && (u$2(DetailCard, { children: [u$2(DetailIcon, { children: u$2(Clock, { size: 16, color: "#6b7280" }) }), u$2(DetailContent, { children: [u$2(DetailLabel$1, { children: "Estimated" }), u$2(DetailValue$1, { children: formatEstimatedTime(job.progress.estimatedTimeRemaining) })] })] })), job.estimatedDuration && (u$2(DetailCard, { children: [u$2(DetailIcon, { children: u$2(Target, { size: 16, color: "#6b7280" }) }), u$2(DetailContent, { children: [u$2(DetailLabel$1, { children: "Expected Duration" }), u$2(DetailValue$1, { children: job.estimatedDuration })] })] })), job.creditsConsumed && (u$2(DetailCard, { children: [u$2(DetailIcon, { children: "\uD83D\uDCB3" }), u$2(DetailContent, { children: [u$2(DetailLabel$1, { children: "Credits Used" }), u$2(DetailValue$1, { children: job.creditsConsumed })] })] }))] })), job.status === 'pending' && (u$2(StatusMessage, { type: "info", children: [u$2(TriangleAlert, { size: 16 }), "Your request is queued and will start processing shortly..."] })), job.status === 'failed' && job.error && (u$2(StatusMessage, { type: "error", children: [u$2(TriangleAlert, { size: 16 }), u$2("div", { children: [u$2("strong", { children: "Research Failed:" }), u$2("p", { children: job.error })] })] })), u$2(ActionArea, { children: [onCancel && (job.status === 'pending' || job.status === 'processing') && (u$2(CancelButton, { onClick: onCancel, disabled: isLoading, children: [u$2(X$1, { size: 16 }), "Cancel Research"] })), u$2(HelpSection, { children: [u$2(HelpTrigger, { children: "\uD83D\uDCA1 What's happening?" }), u$2(HelpContent, { children: [u$2(HelpTitle, { children: "Deep Research Process:" }), u$2(HelpList, { children: [u$2(HelpItem, { children: "\uD83D\uDCDD Creating a detailed research outline" }), u$2(HelpItem, { children: "\uD83D\uDD0D Searching multiple databases and sources" }), u$2(HelpItem, { children: "\uD83D\uDCCA Extracting and analyzing key information" }), u$2(HelpItem, { children: "\uD83D\uDD2C Exploring different research angles" }), u$2(HelpItem, { children: "\u26A1 Synthesizing findings into a final report" })] }), u$2(HelpNote, { children: "This process typically takes 5-20 minutes depending on complexity." })] })] })] })] }));
  }
  // Styled components using ChatView patterns
  const Container$4 = j$1('div') `
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
`;
  const Header$3 = j$1('div') `
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
`;
  const HeaderContent$1 = j$1('div') `
  display: flex;
  align-items: center;
  gap: 1rem;
`;
  const StageIconContainer = j$1('div') `
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
  const HeaderInfo$1 = j$1('div') `
  flex: 1;
`;
  const Title$3 = j$1('h3') `
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`;
  const JobMetadata = j$1('div') `
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  opacity: 0.9;
`;
  const MetaItem$1 = j$1('div') `
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
  const QueryCard$1 = j$1('div') `
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`;
  const QueryLabel$1 = j$1('h4') `
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
`;
  const QueryText$1 = j$1('p') `
  margin: 0;
  font-style: italic;
  color: var(--askdona-text);
  line-height: 1.5;
`;
  const StageCard = j$1('div') `
  padding: 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`;
  const StageHeader = j$1('div') `
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`;
  const StageIconLarge = j$1('div') `
  width: 3rem;
  height: 3rem;
  background: ${({ color }) => color};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`;
  const StageInfo$1 = j$1('div') `
  flex: 1;
`;
  const StageTitle = j$1('h4') `
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ color }) => color};
`;
  const StageDescription = j$1('p') `
  margin: 0;
  color: var(--askdona-text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
`;
  const ProgressBarContainer = j$1('div') `
  display: flex;
  align-items: center;
  gap: 1rem;
`;
  const ProgressBar$1 = j$1('div') `
  flex: 1;
  height: 0.5rem;
  background: var(--askdona-border);
  border-radius: 0.25rem;
  overflow: hidden;
`;
  const ProgressFill$1 = j$1('div') `
  height: 100%;
  width: ${({ progress }) => Math.min(Math.max(progress, 0), 100)}%;
  background: ${({ color }) => color};
  border-radius: 0.25rem;
  transition: width 0.3s ease-in-out;
`;
  const ProgressText$1 = j$1('span') `
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text);
  min-width: 3rem;
  text-align: right;
`;
  const DetailsGrid$1 = j$1('div') `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
`;
  const DetailCard = j$1('div') `
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
`;
  const DetailIcon = j$1('div') `
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--askdona-border);
  border-radius: 0.375rem;
  flex-shrink: 0;
`;
  const DetailContent = j$1('div') `
  flex: 1;
  min-width: 0;
`;
  const DetailLabel$1 = j$1('div') `
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
  margin-bottom: 0.25rem;
`;
  const DetailValue$1 = j$1('div') `
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text);
  word-break: break-word;
`;
  const StatusMessage = j$1('div') `
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  font-size: 0.875rem;
  
  ${({ type }) => type === 'info' && `
    background: rgba(59, 130, 246, 0.1);
    color: #1e40af;
  `}
  
  ${({ type }) => type === 'error' && `
    background: rgba(239, 68, 68, 0.1);
    color: #dc2626;
  `}
`;
  const ActionArea = j$1('div') `
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
  const CancelButton = j$1('button') `
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
`;
  const HelpSection = j$1('details') `
  font-size: 0.875rem;
`;
  const HelpTrigger = j$1('summary') `
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
`;
  const HelpContent = j$1('div') `
  margin-top: 0.75rem;
  padding: 1rem;
  border: 1px solid var(--askdona-border);
  border-radius: 0.375rem;
  background: var(--askdona-background);
`;
  const HelpTitle = j$1('p') `
  margin: 0 0 0.75rem;
  font-weight: 600;
  color: var(--askdona-text);
`;
  const HelpList = j$1('ul') `
  margin: 0 0 1rem;
  padding-left: 1.5rem;
`;
  const HelpItem = j$1('li') `
  margin: 0.5rem 0;
  color: var(--askdona-text);
`;
  const HelpNote = j$1('p') `
  margin: 0;
  font-size: 0.8125rem;
  color: var(--askdona-text-secondary);
  font-style: italic;
`;

  function formatDuration(startedAt, completedAt) {
      if (!completedAt)
          return '';
      const start = new Date(startedAt).getTime();
      const end = new Date(completedAt).getTime();
      const durationMs = end - start;
      const durationSeconds = Math.floor(durationMs / 1000);
      const minutes = Math.floor(durationSeconds / 60);
      const seconds = durationSeconds % 60;
      if (minutes === 0) {
          return `${seconds}s`;
      }
      else {
          return `${minutes}m ${seconds}s`;
      }
  }
  function SourcesList({ sources }) {
      const [expandedSources, setExpandedSources] = d$1(new Set());
      const toggleSource = (index) => {
          const newExpanded = new Set(expandedSources);
          if (newExpanded.has(index)) {
              newExpanded.delete(index);
          }
          else {
              newExpanded.add(index);
          }
          setExpandedSources(newExpanded);
      };
      if (!sources || sources.length === 0) {
          return (u$2(EmptySourcesCard, { children: [u$2(EmptySourcesIcon, { children: u$2(FileText, { size: 20, color: "#6b7280" }) }), u$2(EmptySourcesText, { children: "No sources were referenced in this research." })] }));
      }
      return (u$2(SourcesContainer, { children: [u$2(SourcesHeader, { children: u$2(SourcesTitle, { children: ["\uD83D\uDCDA Sources (", sources.length, ")"] }) }), sources.map((source, index) => (u$2(SourceCard, { children: [u$2(SourceHeader, { onClick: () => toggleSource(index), children: [u$2(SourceMainInfo, { children: [u$2(SourceLink, { href: source.url, target: "_blank", rel: "noopener noreferrer", onClick: (e) => e.stopPropagation(), children: [u$2(ExternalLink, { size: 14 }), source.title] }), source.domain && (u$2(SourceDomain, { children: [u$2(Globe, { size: 12 }), source.domain] }))] }), u$2(SourceExpandButton, { children: expandedSources.has(index) ? (u$2(ChevronDown, { size: 16 })) : (u$2(ChevronRight, { size: 16 })) })] }), expandedSources.has(index) && source.excerpt && (u$2(SourceExcerpt, { children: [u$2(ExcerptText, { children: ["\"", source.excerpt, "\""] }), source.relevance && (u$2(SourceRelevance, { children: [u$2(Star, { size: 12 }), "Relevance: ", Math.round(source.relevance * 100), "%"] }))] }))] }, index)))] }));
  }
  function ResearchContent({ content }) {
      const formatContent = (text) => {
          return text
              .split('\n')
              .map((paragraph, index) => {
              if (paragraph.trim() === '')
                  return null;
              // Headers
              if (paragraph.startsWith('# ')) {
                  return u$2(ContentH2, { children: paragraph.substring(2) }, index);
              }
              if (paragraph.startsWith('## ')) {
                  return u$2(ContentH3, { children: paragraph.substring(3) }, index);
              }
              if (paragraph.startsWith('### ')) {
                  return u$2(ContentH4, { children: paragraph.substring(4) }, index);
              }
              // Lists
              if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                  return u$2(ContentLi, { children: paragraph.substring(2) }, index);
              }
              if (/^\d+\.\s/.test(paragraph)) {
                  const content = paragraph.replace(/^\d+\.\s/, '');
                  return u$2(ContentLi, { children: content }, index);
              }
              // Regular paragraphs
              return u$2(ContentP, { children: paragraph }, index);
          })
              .filter(Boolean);
      };
      return (u$2(ContentContainer, { children: formatContent(content) }));
  }
  function DeepResearchResults({ job, onNewResearch, onClose }) {
      const [activeTab, setActiveTab] = d$1('results');
      const results = job.results;
      const hasContent = (results === null || results === void 0 ? void 0 : results.content) || (results === null || results === void 0 ? void 0 : results.summary) || (results === null || results === void 0 ? void 0 : results.report);
      const sources = (results === null || results === void 0 ? void 0 : results.sources) || [];
      const metadata = (results === null || results === void 0 ? void 0 : results.metadata) || {};
      const handleCopyContent = async () => {
          var _a;
          try {
              const content = `Deep Research Results\n\nQuery: ${job.query}\n\n${hasContent ? results.content || results.report || results.summary : 'No content available'}`;
              await ((_a = navigator.clipboard) === null || _a === void 0 ? void 0 : _a.writeText(content));
          }
          catch (error) {
              console.error('Failed to copy content:', error);
          }
      };
      const handleShare = async () => {
          try {
              if (navigator.share && hasContent) {
                  await navigator.share({
                      title: 'Deep Research Results',
                      text: job.query,
                      url: window.location.href
                  });
              }
          }
          catch (error) {
              console.error('Failed to share:', error);
          }
      };
      return (u$2(Container$3, { children: [u$2(Header$2, { children: u$2(HeaderContent, { children: [u$2(HeaderMain, { children: [u$2(SuccessIcon, { children: u$2(CircleCheckBig, { size: 24, color: "white" }) }), u$2(HeaderInfo, { children: [u$2(Title$2, { children: "\u2705 Deep Research Complete" }), u$2(CompletionInfo, { children: [job.completedAt && (u$2(MetaItem, { children: [u$2(Clock, { size: 14 }), formatDuration(job.startedAt, job.completedAt)] })), job.creditsConsumed && (u$2(MetaItem, { children: ["\uD83D\uDCB3 ", job.creditsConsumed, " credits used"] }))] })] })] }), onClose && (u$2(CloseButton$1, { onClick: onClose, children: u$2(X$1, { size: 20 }) }))] }) }), u$2(QueryCard, { children: [u$2(QueryLabel, { children: "Research Query:" }), u$2(QueryText, { children: ["\"", job.query, "\""] })] }), u$2(TabsContainer, { children: [u$2(TabButton, { active: activeTab === 'results', onClick: () => setActiveTab('results'), children: "\uD83D\uDCC4 Results" }), u$2(TabButton, { active: activeTab === 'sources', onClick: () => setActiveTab('sources'), children: ["\uD83D\uDCDA Sources ", sources.length > 0 && `(${sources.length})`] }), u$2(TabButton, { active: activeTab === 'details', onClick: () => setActiveTab('details'), children: "\u2139\uFE0F Details" })] }), u$2(TabContent, { children: [activeTab === 'results' && (u$2(ResultsContent, { children: hasContent ? (u$2(k$1, { children: [results.summary && (u$2(SummarySection, { children: [u$2(SectionTitle, { children: "\uD83D\uDCCB Executive Summary" }), u$2(SummaryCard, { children: results.summary })] })), results.content && (u$2(MainContentSection, { children: [u$2(SectionTitle, { children: "\uD83D\uDCC4 Detailed Report" }), u$2(ContentCard, { children: u$2(ResearchContent, { content: results.content }) })] })), results.report && !results.content && (u$2(MainContentSection, { children: [u$2(SectionTitle, { children: "\uD83D\uDCC4 Research Report" }), u$2(ContentCard, { children: u$2(ResearchContent, { content: results.report }) })] })), results.key_findings && (u$2(KeyFindingsSection, { children: [u$2(SectionTitle, { children: "\uD83D\uDD11 Key Findings" }), u$2(FindingsCard, { children: u$2(FindingsList, { children: results.key_findings.map((finding, index) => (u$2(FindingItem, { children: finding }, index))) }) })] }))] })) : (u$2(EmptyResultsCard, { children: [u$2(EmptyResultsIcon, { children: u$2(FileText, { size: 24, color: "#6b7280" }) }), u$2(EmptyResultsTitle, { children: "No Results Available" }), u$2(EmptyResultsText, { children: "No detailed results are available for this research. This might be due to an error during processing or the research being incomplete." })] })) })), activeTab === 'sources' && (u$2(SourcesList, { sources: sources })), activeTab === 'details' && (u$2(DetailsContent, { children: [u$2(DetailsSection, { children: [u$2(SectionTitle, { children: "\uD83D\uDD0D Research Details" }), u$2(DetailsGrid, { children: [u$2(DetailItem, { children: [u$2(DetailLabel, { children: "Job ID:" }), u$2(DetailValue, { children: job.jobId })] }), u$2(DetailItem, { children: [u$2(DetailLabel, { children: "Started:" }), u$2(DetailValue, { children: new Date(job.startedAt).toLocaleString() })] }), job.completedAt && (u$2(DetailItem, { children: [u$2(DetailLabel, { children: "Completed:" }), u$2(DetailValue, { children: new Date(job.completedAt).toLocaleString() })] })), u$2(DetailItem, { children: [u$2(DetailLabel, { children: "Duration:" }), u$2(DetailValue, { children: formatDuration(job.startedAt, job.completedAt) })] }), job.creditsConsumed && (u$2(DetailItem, { children: [u$2(DetailLabel, { children: "Credits Used:" }), u$2(DetailValue, { children: job.creditsConsumed })] })), u$2(DetailItem, { children: [u$2(DetailLabel, { children: "Sources Found:" }), u$2(DetailValue, { children: sources.length })] })] })] }), metadata && Object.keys(metadata).length > 0 && (u$2(MetadataSection, { children: [u$2(SectionTitle, { children: "\uD83D\uDCCA Metadata" }), u$2(MetadataCard, { children: u$2("pre", { children: JSON.stringify(metadata, null, 2) }) })] }))] }))] }), u$2(ActionsArea, { children: [u$2(PrimaryActions, { children: u$2(NewResearchButton, { onClick: onNewResearch, children: [u$2(Search, { size: 16 }), "New Research"] }) }), u$2(SecondaryActions, { children: [u$2(SecondaryButton, { onClick: handleShare, children: [u$2(Share2, { size: 16 }), "Share"] }), u$2(SecondaryButton, { onClick: handleCopyContent, children: [u$2(Copy, { size: 16 }), "Copy"] })] })] })] }));
  }
  // Styled components using ChatView patterns
  const Container$3 = j$1('div') `
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
`;
  const Header$2 = j$1('div') `
  padding: 1.5rem;
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
`;
  const HeaderContent = j$1('div') `
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
  const HeaderMain = j$1('div') `
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`;
  const SuccessIcon = j$1('div') `
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
  const HeaderInfo = j$1('div') `
  flex: 1;
`;
  const Title$2 = j$1('h3') `
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`;
  const CompletionInfo = j$1('div') `
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  opacity: 0.9;
`;
  const MetaItem = j$1('div') `
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
  const CloseButton$1 = j$1('button') `
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
`;
  const QueryCard = j$1('div') `
  padding: 1.25rem 1.5rem;
  background: var(--askdona-background);
  border-bottom: 1px solid var(--askdona-border);
`;
  const QueryLabel = j$1('h4') `
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--askdona-text-secondary);
`;
  const QueryText = j$1('p') `
  margin: 0;
  font-style: italic;
  color: var(--askdona-text);
  line-height: 1.5;
`;
  const TabsContainer = j$1('div') `
  display: flex;
  background: var(--askdona-background);
  border-bottom: 1px solid var(--askdona-border);
`;
  const TabButton = j$1('button') `
  flex: 1;
  padding: 0.875rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ active }) => active ? 'var(--askdona-primary)' : 'var(--askdona-text-secondary)'};
  border-bottom: 2px solid ${({ active }) => active ? 'var(--askdona-primary)' : 'transparent'};
  transition: all 0.2s;

  &:hover {
    background: var(--askdona-border);
    color: var(--askdona-text);
  }
`;
  const TabContent = j$1('div') `
  min-height: 300px;
`;
  const ResultsContent = j$1('div') `
  padding: 1.5rem;
`;
  const SummarySection = j$1('div') `
  margin-bottom: 2rem;
`;
  const MainContentSection = j$1('div') `
  margin-bottom: 2rem;
`;
  const KeyFindingsSection = j$1('div') `
  margin-bottom: 2rem;
`;
  const SectionTitle = j$1('h4') `
  margin: 0 0 1rem;
  color: var(--askdona-text);
  font-size: 1rem;
  font-weight: 600;
`;
  const SummaryCard = j$1('div') `
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;
  color: var(--askdona-text);
  line-height: 1.6;
`;
  const ContentCard = j$1('div') `
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
  padding: 1.5rem;
`;
  const FindingsCard = j$1('div') `
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;
`;
  const FindingsList = j$1('ul') `
  margin: 0;
  padding-left: 1.5rem;
`;
  const FindingItem = j$1('li') `
  margin: 0.5rem 0;
  color: var(--askdona-text);
  line-height: 1.5;
`;
  const ContentContainer = j$1('div') `
  color: var(--askdona-text);
`;
  const ContentH2 = j$1('h2') `
  color: var(--askdona-text);
  font-size: 1.25rem;
  margin: 1.5rem 0 1rem 0;
  font-weight: 600;
`;
  const ContentH3 = j$1('h3') `
  color: var(--askdona-text);
  font-size: 1.125rem;
  margin: 1.25rem 0 0.75rem 0;
  font-weight: 600;
`;
  const ContentH4 = j$1('h4') `
  color: var(--askdona-text-secondary);
  font-size: 1rem;
  margin: 1rem 0 0.5rem 0;
  font-weight: 600;
`;
  const ContentP = j$1('p') `
  margin: 0 0 1rem;
  line-height: 1.6;
`;
  const ContentLi = j$1('li') `
  margin: 0.5rem 0;
  line-height: 1.6;
`;
  // Sources styles
  const SourcesContainer = j$1('div') `
  padding: 1.5rem;
`;
  const SourcesHeader = j$1('div') `
  margin-bottom: 1rem;
`;
  const SourcesTitle = j$1('h4') `
  margin: 0;
  color: var(--askdona-text);
  font-size: 1rem;
  font-weight: 600;
`;
  const SourceCard = j$1('div') `
  border: 1px solid var(--askdona-border);
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  overflow: hidden;
`;
  const SourceHeader = j$1('div') `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: var(--askdona-border);
  }
`;
  const SourceMainInfo = j$1('div') `
  flex: 1;
  min-width: 0;
`;
  const SourceLink = j$1('a') `
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
`;
  const SourceDomain = j$1('div') `
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
`;
  const SourceExpandButton = j$1('div') `
  color: var(--askdona-text-secondary);
  padding: 0.25rem;
`;
  const SourceExcerpt = j$1('div') `
  padding: 0 1rem 1rem 1rem;
  border-top: 1px solid var(--askdona-border);
  background: rgba(243, 244, 246, 0.5);
`;
  const ExcerptText = j$1('p') `
  margin: 0.75rem 0;
  font-style: italic;
  color: var(--askdona-text);
  font-size: 0.875rem;
  line-height: 1.5;
`;
  const SourceRelevance = j$1('div') `
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
`;
  // Empty states
  const EmptyResultsCard = j$1('div') `
  text-align: center;
  padding: 3rem 2rem;
`;
  const EmptyResultsIcon = j$1('div') `
  margin: 0 auto 1rem;
  width: fit-content;
`;
  const EmptyResultsTitle = j$1('h4') `
  margin: 0 0 0.5rem;
  color: var(--askdona-text);
  font-size: 1.125rem;
`;
  const EmptyResultsText = j$1('p') `
  margin: 0;
  color: var(--askdona-text-secondary);
  line-height: 1.5;
`;
  const EmptySourcesCard = j$1('div') `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;
  const EmptySourcesIcon = j$1('div') `
  margin-bottom: 0.75rem;
`;
  const EmptySourcesText = j$1('p') `
  margin: 0;
  color: var(--askdona-text-secondary);
`;
  // Details styles
  const DetailsContent = j$1('div') `
  padding: 1.5rem;
`;
  const DetailsSection = j$1('div') `
  margin-bottom: 2rem;
`;
  const DetailsGrid = j$1('div') `
  display: grid;
  gap: 0.75rem;
`;
  const DetailItem = j$1('div') `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--askdona-border);

  &:last-child {
    border-bottom: none;
  }
`;
  const DetailLabel = j$1('span') `
  font-weight: 500;
  color: var(--askdona-text-secondary);
`;
  const DetailValue = j$1('span') `
  color: var(--askdona-text);
  font-weight: 500;
  word-break: break-word;
`;
  const MetadataSection = j$1('div') `
  margin-top: 2rem;
`;
  const MetadataCard = j$1('div') `
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
`;
  // Actions styles
  const ActionsArea = j$1('div') `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-top: 1px solid var(--askdona-border);
  background: var(--askdona-background);
`;
  const PrimaryActions = j$1('div') `
  display: flex;
  gap: 0.75rem;
`;
  const SecondaryActions = j$1('div') `
  display: flex;
  gap: 0.5rem;
`;
  const NewResearchButton = j$1('button') `
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
`;
  const SecondaryButton = j$1('button') `
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
`;

  function useSecureSession(chatflowId) {
      const [session, setSession] = d$1(null);
      const [isInitializing, setIsInitializing] = d$1(true);
      const [error, setError] = d$1(null);
      // Decode JWT payload without signature verification (client-side)
      const decodeJWT = q$1((token) => {
          try {
              const parts = token.split('.');
              if (parts.length !== 3)
                  return null;
              const payload = JSON.parse(atob(parts[1]));
              return payload;
          }
          catch (error) {
              console.error('[AskDona] JWT decode error:', error);
              return null;
          }
      }, []);
      // Initialize new session
      const initializeSession = q$1(async () => {
          setError(null);
          try {
              const domain = window.location.hostname + (window.location.port ? ':' + window.location.port : '');
              console.log('[AskDona] Initializing secure session for chatflow:', chatflowId);
              console.log('[AskDona] Sending domain:', domain);
              console.log('[AskDona] Origin:', window.location.origin);
              const response = await fetch(`${API_BASE_URL}/session/init/${chatflowId}`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Origin': window.location.origin,
                      'X-Widget-Version': '1.0.0'
                  },
                  body: JSON.stringify({
                      domain: domain,
                      timestamp: Date.now(),
                      userAgent: navigator.userAgent
                  })
              });
              if (!response.ok) {
                  const errorData = await response.json().catch(() => ({ message: 'Session initialization failed' }));
                  throw new Error(errorData.message || `HTTP ${response.status}`);
              }
              const { secureSessionToken } = await response.json();
              if (!secureSessionToken) {
                  throw new Error('No session token received');
              }
              // Decode and validate token
              const payload = decodeJWT(secureSessionToken);
              if (!payload) {
                  throw new Error('Invalid session token format');
              }
              // Store in localStorage
              const storageKey = `askdona_secure_session_${chatflowId}`;
              localStorage.setItem(storageKey, secureSessionToken);
              console.log('[AskDona] Secure session initialized:', {
                  sessionId: payload.sessionId,
                  expiresAt: new Date(payload.exp * 1000).toISOString()
              });
              const sessionData = {
                  token: secureSessionToken,
                  isValid: true,
                  expiresAt: payload.exp * 1000,
                  sessionId: payload.sessionId,
                  chatflowId: payload.chatflowId
              };
              setSession(sessionData);
              return secureSessionToken;
          }
          catch (error) {
              console.error('[AskDona] Session initialization failed:', error);
              setError(error.message);
              throw error;
          }
      }, [chatflowId, decodeJWT]);
      // Restore existing session or create new one
      const restoreOrCreateSession = q$1(async () => {
          setIsInitializing(true);
          setError(null);
          try {
              const storageKey = `askdona_secure_session_${chatflowId}`;
              const storedToken = localStorage.getItem(storageKey);
              if (storedToken) {
                  // Try to restore existing session
                  const payload = decodeJWT(storedToken);
                  const now = Date.now();
                  if (payload && payload.exp * 1000 > now && payload.chatflowId === chatflowId) {
                      console.log('[AskDona] Restored existing session:', {
                          sessionId: payload.sessionId,
                          expiresAt: new Date(payload.exp * 1000).toISOString(),
                          timeRemaining: Math.round((payload.exp * 1000 - now) / 1000 / 60) + ' minutes'
                      });
                      const sessionData = {
                          token: storedToken,
                          isValid: true,
                          expiresAt: payload.exp * 1000,
                          sessionId: payload.sessionId,
                          chatflowId: payload.chatflowId
                      };
                      setSession(sessionData);
                      return;
                  }
                  else {
                      // Token is expired or invalid, remove it
                      console.log('[AskDona] Stored session expired or invalid, removing');
                      localStorage.removeItem(storageKey);
                  }
              }
              // Initialize new session
              await initializeSession();
          }
          catch (error) {
              console.error('[AskDona] Session restore/create failed:', error);
              setError(error.message);
          }
          finally {
              setIsInitializing(false);
          }
      }, [chatflowId, decodeJWT, initializeSession]);
      // Refresh session if close to expiry
      const refreshSessionIfNeeded = q$1(async () => {
          if (!session)
              return;
          const timeUntilExpiry = session.expiresAt - Date.now();
          const REFRESH_THRESHOLD = 30 * 60 * 1000; // 30 minutes
          if (timeUntilExpiry < REFRESH_THRESHOLD) {
              console.log('[AskDona] Session close to expiry, refreshing...');
              try {
                  await initializeSession();
              }
              catch (error) {
                  console.error('[AskDona] Session refresh failed:', error);
              }
          }
      }, [session, initializeSession]);
      // Get valid token (with automatic refresh)
      const getValidToken = q$1(async () => {
          if (!session || !session.isValid) {
              console.warn('[AskDona] No valid session available');
              return null;
          }
          // Check if token is still valid
          if (session.expiresAt <= Date.now()) {
              console.log('[AskDona] Session expired, initializing new session...');
              try {
                  await initializeSession();
                  return (session === null || session === void 0 ? void 0 : session.token) || null;
              }
              catch (error) {
                  return null;
              }
          }
          // Refresh if needed
          await refreshSessionIfNeeded();
          return session.token;
      }, [session, initializeSession, refreshSessionIfNeeded]);
      // Clear session
      const clearSession = q$1(() => {
          const storageKey = `askdona_secure_session_${chatflowId}`;
          localStorage.removeItem(storageKey);
          setSession(null);
          setError(null);
      }, [chatflowId]);
      // Initialize on mount
      y(() => {
          if (chatflowId) {
              restoreOrCreateSession();
          }
      }, [chatflowId, restoreOrCreateSession]);
      // Periodic session refresh
      y(() => {
          if (!session)
              return;
          const refreshInterval = setInterval(() => {
              refreshSessionIfNeeded();
          }, 5 * 60 * 1000); // Check every 5 minutes
          return () => clearInterval(refreshInterval);
      }, [session, refreshSessionIfNeeded]);
      return {
          session,
          isInitializing,
          error,
          initializeSession,
          getValidToken,
          clearSession,
          refreshSessionIfNeeded
      };
  }

  /**
   * Browser fingerprinting utilities for rate limiting
   * Creates a stable, unique identifier for browser sessions
   */
  function generateBrowserFingerprint() {
      try {
          const info = {
              userAgent: navigator.userAgent || '',
              language: navigator.language || '',
              screenResolution: `${screen.width}x${screen.height}`,
              timezoneOffset: new Date().getTimezoneOffset(),
              platform: navigator.platform || '',
              cookieEnabled: navigator.cookieEnabled,
              localStorageEnabled: (() => {
                  try {
                      const test = '__localStorage_test__';
                      localStorage.setItem(test, test);
                      localStorage.removeItem(test);
                      return true;
                  }
                  catch (_a) {
                      return false;
                  }
              })()
          };
          // Create canvas fingerprint for additional uniqueness
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          let canvasFingerprint = '';
          if (ctx) {
              canvas.width = 200;
              canvas.height = 50;
              ctx.textBaseline = 'alphabetic';
              ctx.fillStyle = '#f60';
              ctx.fillRect(125, 1, 62, 20);
              ctx.fillStyle = '#069';
              ctx.font = '11pt Arial';
              ctx.fillText('AskDona Browser Fingerprint 🔍', 2, 15);
              ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
              ctx.font = '18pt Arial';
              ctx.fillText('Deep Research', 4, 45);
              canvasFingerprint = canvas.toDataURL().substring(0, 100);
          }
          // Combine all information
          const combinedInfo = [
              info.userAgent,
              info.language,
              info.screenResolution,
              info.timezoneOffset.toString(),
              info.platform,
              info.cookieEnabled.toString(),
              info.localStorageEnabled.toString(),
              canvasFingerprint
          ].join('|');
          // Create hash-like identifier (simplified, not cryptographic)
          let hash = 0;
          for (let i = 0; i < combinedInfo.length; i++) {
              const char = combinedInfo.charCodeAt(i);
              hash = ((hash << 5) - hash) + char;
              hash = hash & hash; // Convert to 32-bit integer
          }
          // Convert to base36 and ensure consistent length
          const fingerprint = Math.abs(hash).toString(36).padStart(8, '0') +
              Date.now().toString(36).slice(-4); // Add some uniqueness
          return `fp_${fingerprint}`;
      }
      catch (error) {
          console.error('[AskDona] Fingerprint generation error:', error);
          // Fallback to simple random identifier
          return `fp_${Math.random().toString(36).substring(2, 15)}`;
      }
  }
  class BrowserLimitManager {
      constructor() {
          this.browserFingerprint = this.getOrCreateFingerprint();
      }
      getOrCreateFingerprint() {
          const FINGERPRINT_KEY = 'askdona_browser_fingerprint';
          try {
              let fingerprint = localStorage.getItem(FINGERPRINT_KEY);
              if (!fingerprint) {
                  fingerprint = generateBrowserFingerprint();
                  localStorage.setItem(FINGERPRINT_KEY, fingerprint);
                  console.log('[AskDona] Generated new browser fingerprint:', fingerprint);
              }
              else {
                  console.log('[AskDona] Using existing browser fingerprint:', fingerprint);
              }
              return fingerprint;
          }
          catch (error) {
              console.error('[AskDona] Error managing browser fingerprint:', error);
              // Return session-based fallback if localStorage fails
              return generateBrowserFingerprint();
          }
      }
      getBrowserFingerprint() {
          return this.browserFingerprint;
      }
      // Pre-check limits locally before server call
      checkLocalLimits(chatflowId, serverLimits) {
          const localChecks = [];
          let overallAllowed = true;
          let blockedBy;
          for (const limitConfig of serverLimits) {
              const check = this.checkSingleLocalLimit(chatflowId, limitConfig);
              localChecks.push(check);
              if (!check.allowed && overallAllowed) {
                  overallAllowed = false;
                  blockedBy = check.limitType;
              }
          }
          return {
              allowed: overallAllowed,
              blockedBy,
              localChecks
          };
      }
      checkSingleLocalLimit(chatflowId, limitConfig) {
          const limitKey = this.getLimitKey(limitConfig);
          const storageKey = `${BrowserLimitManager.STORAGE_PREFIX}${chatflowId}_${limitKey}`;
          let limitData = this.getLimitData(storageKey);
          // Check if reset is needed
          if (new Date(limitData.resetTime) <= new Date()) {
              limitData = this.createNewLimitPeriod(limitConfig);
              this.saveLimitData(storageKey, limitData);
          }
          const allowed = limitData.count < limitConfig.limit;
          const limitType = this.getLimitTypeString(limitConfig);
          return {
              limitType,
              allowed,
              currentCount: limitData.count,
              maxCount: limitConfig.limit,
              resetTime: new Date(limitData.resetTime)
          };
      }
      // Record usage locally
      recordLocalUsage(chatflowId, serverLimits) {
          for (const limitConfig of serverLimits) {
              const limitKey = this.getLimitKey(limitConfig);
              const storageKey = `${BrowserLimitManager.STORAGE_PREFIX}${chatflowId}_${limitKey}`;
              const limitData = this.getLimitData(storageKey);
              limitData.count++;
              this.saveLimitData(storageKey, limitData);
          }
          console.log('[AskDona] Recorded local usage for chatflow:', chatflowId);
      }
      // Get today's usage for display
      getTodayUsage(chatflowId) {
          const storageKey = `${BrowserLimitManager.STORAGE_PREFIX}${chatflowId}_daily`;
          const limitData = this.getLimitData(storageKey);
          // Check if it's still the same day
          const resetTime = new Date(limitData.resetTime);
          const now = new Date();
          if (resetTime > now) {
              return limitData.count;
          }
          return 0;
      }
      // Clear all local limits for a chatflow
      clearLocalLimits(chatflowId) {
          try {
              const keysToRemove = [];
              for (let i = 0; i < localStorage.length; i++) {
                  const key = localStorage.key(i);
                  if (key && key.startsWith(`${BrowserLimitManager.STORAGE_PREFIX}${chatflowId}_`)) {
                      keysToRemove.push(key);
                  }
              }
              keysToRemove.forEach(key => localStorage.removeItem(key));
              console.log('[AskDona] Cleared local limits for chatflow:', chatflowId);
          }
          catch (error) {
              console.error('[AskDona] Error clearing local limits:', error);
          }
      }
      getLimitData(storageKey) {
          try {
              const stored = localStorage.getItem(storageKey);
              if (stored) {
                  return JSON.parse(stored);
              }
          }
          catch (error) {
              console.error('[AskDona] Error reading limit data:', error);
          }
          // Return default empty data
          return {
              count: 0,
              resetTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Default to 1 day
              period: 'daily'
          };
      }
      saveLimitData(storageKey, data) {
          try {
              localStorage.setItem(storageKey, JSON.stringify(data));
          }
          catch (error) {
              console.error('[AskDona] Error saving limit data:', error);
          }
      }
      createNewLimitPeriod(limitConfig) {
          const resetTime = this.calculateNextLocalReset(limitConfig);
          return {
              count: 0,
              resetTime: resetTime.toISOString(),
              period: this.getLimitKey(limitConfig)
          };
      }
      calculateNextLocalReset(limitConfig) {
          const now = new Date();
          const resetTime = new Date(now);
          switch (limitConfig.period) {
              case 'daily':
                  resetTime.setDate(now.getDate() + 1);
                  resetTime.setHours(0, 0, 0, 0);
                  break;
              case 'weekly':
                  // Next Monday
                  const daysUntilNextMonday = (8 - now.getDay()) % 7 || 7;
                  resetTime.setDate(now.getDate() + daysUntilNextMonday);
                  resetTime.setHours(0, 0, 0, 0);
                  break;
              case 'monthly':
                  resetTime.setMonth(now.getMonth() + 1, 1);
                  resetTime.setHours(0, 0, 0, 0);
                  break;
              case 'yearly':
                  resetTime.setFullYear(now.getFullYear() + 1, 0, 1);
                  resetTime.setHours(0, 0, 0, 0);
                  break;
              default:
                  if (limitConfig.customDays) {
                      resetTime.setDate(now.getDate() + limitConfig.customDays);
                      resetTime.setHours(0, 0, 0, 0);
                  }
                  break;
          }
          return resetTime;
      }
      getLimitKey(limitConfig) {
          if (limitConfig.customDays) {
              return `custom_${limitConfig.customDays}d`;
          }
          return limitConfig.period;
      }
      getLimitTypeString(limitConfig) {
          if (limitConfig.customDays) {
              return `custom-${limitConfig.customDays}d`;
          }
          return limitConfig.period;
      }
  }
  BrowserLimitManager.STORAGE_PREFIX = 'askdona_browser_limit_';

  function useDeepResearch(chatflowId) {
      const { session, isInitializing } = useSecureSession(chatflowId);
      const [config, setConfig] = d$1(null);
      const [currentJob, setCurrentJob] = d$1(null);
      const [isLoading, setIsLoading] = d$1(false);
      const [error, setError] = d$1(null);
      const browserLimitManager = A$1(new BrowserLimitManager());
      const eventSourceRef = A$1(null);
      const configCache = A$1(null);
      // Cache config for 30 seconds to reduce API calls
      const CONFIG_CACHE_DURATION = 30 * 1000;
      // Fetch configuration and limits
      const fetchConfig = q$1(async (forceRefresh = false) => {
          var _a;
          if (!(session === null || session === void 0 ? void 0 : session.token) || isInitializing) {
              return null;
          }
          // Use cache if available and not forcing refresh
          if (!forceRefresh && configCache.current) {
              const age = Date.now() - configCache.current.timestamp;
              if (age < CONFIG_CACHE_DURATION) {
                  setConfig(configCache.current.data);
                  return configCache.current.data;
              }
          }
          const browserFingerprint = browserLimitManager.current.getBrowserFingerprint();
          setError(null);
          try {
              console.log('[Deep Research] Fetching config for chatflow:', chatflowId);
              const response = await fetch(`${API_BASE_URL}/deep-research/config/${chatflowId}`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'X-Widget-Version': '1.0.0'
                  },
                  body: JSON.stringify({
                      secureSessionToken: session.token,
                      browserFingerprint
                  })
              });
              if (!response.ok) {
                  const errorData = await response.json().catch(() => ({ error: 'Request failed' }));
                  throw new Error(errorData.error || `HTTP ${response.status}`);
              }
              const configData = await response.json();
              // Cache the result
              configCache.current = {
                  data: configData,
                  timestamp: Date.now()
              };
              setConfig(configData);
              console.log('[Deep Research] Config loaded:', {
                  isEnabled: configData.isEnabled,
                  canExecute: configData.canExecute,
                  remainingCredits: (_a = configData.credits) === null || _a === void 0 ? void 0 : _a.remaining
              });
              return configData;
          }
          catch (error) {
              console.error('[Deep Research] Config fetch failed:', error);
              setError(error.message);
              const errorConfig = {
                  isEnabled: false,
                  canExecute: false,
                  credits: null,
                  sessionLimit: { allowed: false, currentCount: 0, maxCount: 0, resetTime: '' },
                  browserLimits: { allowed: false, limits: [] },
                  config: { maxQueryLength: 500, estimatedDurationMinutes: 15 },
                  error: error.message
              };
              setConfig(errorConfig);
              return errorConfig;
          }
      }, [session === null || session === void 0 ? void 0 : session.token, chatflowId, isInitializing]);
      // Start Deep Research
      const startDeepResearch = q$1(async (query) => {
          var _a;
          if (!(session === null || session === void 0 ? void 0 : session.token) || !(config === null || config === void 0 ? void 0 : config.canExecute)) {
              throw new Error('Cannot execute Deep Research - invalid session or insufficient permissions');
          }
          if (query.trim().length === 0) {
              throw new Error('Query cannot be empty');
          }
          if (query.length > config.config.maxQueryLength) {
              throw new Error(`Query too long. Maximum ${config.config.maxQueryLength} characters allowed.`);
          }
          setIsLoading(true);
          setError(null);
          const browserFingerprint = browserLimitManager.current.getBrowserFingerprint();
          try {
              // Pre-check local browser limits
              if (config.browserLimits.limits.length > 0) {
                  const serverLimits = config.browserLimits.limits.map(l => ({
                      period: l.limitType.replace('custom-', '').replace('d', ''),
                      limit: l.maxCount,
                      customDays: l.limitType.startsWith('custom-') ?
                          parseInt(l.limitType.replace('custom-', '').replace('d', '')) : undefined
                  }));
                  const localCheck = browserLimitManager.current.checkLocalLimits(chatflowId, serverLimits);
                  if (!localCheck.allowed) {
                      throw new Error(`Browser limit exceeded: ${localCheck.blockedBy}`);
                  }
              }
              console.log('[Deep Research] Starting job:', {
                  queryLength: query.length,
                  creditsRequired: (_a = config.credits) === null || _a === void 0 ? void 0 : _a.perRequest
              });
              const response = await fetch(`${API_BASE_URL}/deep-research/start`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'X-Widget-Version': '1.0.0'
                  },
                  body: JSON.stringify({
                      secureSessionToken: session.token,
                      query: query.trim(),
                      chatflowId,
                      browserFingerprint
                  })
              });
              if (!response.ok) {
                  const errorData = await response.json().catch(() => ({ error: 'Request failed' }));
                  throw new Error(errorData.error || `HTTP ${response.status}`);
              }
              const jobData = await response.json();
              // Update local browser usage tracking
              if (config.browserLimits.limits.length > 0) {
                  const serverLimits = config.browserLimits.limits.map(l => ({
                      period: l.limitType.replace('custom-', '').replace('d', ''),
                      limit: l.maxCount
                  }));
                  browserLimitManager.current.recordLocalUsage(chatflowId, serverLimits);
              }
              // Set current job state
              const job = {
                  jobId: jobData.jobId,
                  status: 'pending',
                  query: query.trim(),
                  startedAt: new Date().toISOString(),
                  creditsConsumed: jobData.creditsConsumed,
                  estimatedDuration: jobData.estimatedDuration
              };
              setCurrentJob(job);
              // Start SSE streaming
              startStreaming(jobData.jobId);
              // Refresh config to update credit counts
              setTimeout(() => fetchConfig(true), 1000);
              console.log('[Deep Research] Job started successfully:', jobData);
              return jobData;
          }
          catch (error) {
              console.error('[Deep Research] Start failed:', error);
              setIsLoading(false);
              setError(error.message);
              throw error;
          }
      }, [session === null || session === void 0 ? void 0 : session.token, config, chatflowId, fetchConfig]);
      // Start SSE streaming
      const startStreaming = q$1((jobId) => {
          // Close existing connection
          if (eventSourceRef.current) {
              eventSourceRef.current.close();
          }
          console.log('[Deep Research] Starting SSE stream for job:', jobId);
          const eventSource = new EventSource(`${API_BASE_URL}/deep-research/stream/${jobId}`);
          eventSourceRef.current = eventSource;
          eventSource.addEventListener('deep-research-start', (event) => {
              try {
                  const data = JSON.parse(event.data);
                  console.log('[Deep Research] Stream started:', data);
                  setCurrentJob(prev => prev ? {
                      ...prev,
                      status: 'processing'
                  } : null);
              }
              catch (error) {
                  console.error('[Deep Research] Failed to parse start event:', error);
              }
          });
          eventSource.addEventListener('deep-research-progress', (event) => {
              try {
                  const data = JSON.parse(event.data);
                  console.log('[Deep Research] Progress update:', data);
                  setCurrentJob(prev => prev ? {
                      ...prev,
                      status: 'processing',
                      progress: {
                          stage: data.stage || 'processing',
                          progress: data.progress || 0,
                          timestamp: data.timestamp || new Date().toISOString(),
                          estimatedTimeRemaining: data.estimatedTimeRemaining,
                          sources: data.sources
                      }
                  } : null);
              }
              catch (error) {
                  console.error('[Deep Research] Failed to parse progress event:', error);
              }
          });
          eventSource.addEventListener('deep-research-complete', (event) => {
              try {
                  const data = JSON.parse(event.data);
                  console.log('[Deep Research] Job completed:', data);
                  setCurrentJob(prev => prev ? {
                      ...prev,
                      status: 'completed',
                      results: data.results,
                      completedAt: new Date().toISOString(),
                      progress: {
                          stage: 'completed',
                          progress: 100,
                          timestamp: new Date().toISOString()
                      }
                  } : null);
                  setIsLoading(false);
                  eventSource.close();
                  // Refresh config to update usage statistics
                  setTimeout(() => fetchConfig(true), 1000);
              }
              catch (error) {
                  console.error('[Deep Research] Failed to parse completion event:', error);
              }
          });
          eventSource.addEventListener('deep-research-error', (event) => {
              try {
                  const data = JSON.parse(event.data);
                  console.error('[Deep Research] Job failed:', data);
                  setCurrentJob(prev => prev ? {
                      ...prev,
                      status: 'failed',
                      error: data.error || 'Deep Research failed',
                      completedAt: new Date().toISOString()
                  } : null);
                  setIsLoading(false);
                  setError(data.error || 'Deep Research failed');
                  eventSource.close();
              }
              catch (error) {
                  console.error('[Deep Research] Failed to parse error event:', error);
              }
          });
          eventSource.onerror = (error) => {
              console.error('[Deep Research] SSE connection error:', error);
              // Don't immediately fail - might be temporary network issue
              if (eventSource.readyState === EventSource.CLOSED) {
                  console.log('[Deep Research] SSE connection closed');
                  setIsLoading(false);
                  // Try to get final status from server
                  setTimeout(() => {
                      if (currentJob && currentJob.status === 'processing') {
                          setError('Connection lost. Please check the result later or try again.');
                      }
                  }, 5000);
              }
          };
      }, [currentJob]);
      // Cancel current job
      const cancelJob = q$1(async () => {
          if (!currentJob || !(session === null || session === void 0 ? void 0 : session.token)) {
              return;
          }
          try {
              // Close SSE connection
              if (eventSourceRef.current) {
                  eventSourceRef.current.close();
                  eventSourceRef.current = null;
              }
              // Send cancel request to server (optional implementation)
              // This would require a cancel endpoint on the server
              setCurrentJob(prev => prev ? {
                  ...prev,
                  status: 'cancelled',
                  completedAt: new Date().toISOString()
              } : null);
              setIsLoading(false);
              console.log('[Deep Research] Job cancelled:', currentJob.jobId);
          }
          catch (error) {
              console.error('[Deep Research] Cancel failed:', error);
          }
      }, [currentJob, session === null || session === void 0 ? void 0 : session.token]);
      // Reset current job
      const resetJob = q$1(() => {
          if (eventSourceRef.current) {
              eventSourceRef.current.close();
              eventSourceRef.current = null;
          }
          setCurrentJob(null);
          setIsLoading(false);
          setError(null);
          // Clear local config cache to force refresh
          configCache.current = null;
      }, []);
      // Cleanup on unmount
      const cleanup = q$1(() => {
          if (eventSourceRef.current) {
              eventSourceRef.current.close();
              eventSourceRef.current = null;
          }
      }, []);
      // Auto-fetch config when session is ready
      y(() => {
          if ((session === null || session === void 0 ? void 0 : session.token) && !isInitializing && !config) {
              fetchConfig();
          }
      }, [session === null || session === void 0 ? void 0 : session.token, isInitializing, config, fetchConfig]);
      // Cleanup on unmount
      y(() => {
          return cleanup;
      }, [cleanup]);
      return {
          config,
          currentJob,
          isLoading,
          error,
          isInitializing,
          // Actions
          fetchConfig,
          startDeepResearch,
          cancelJob,
          resetJob,
          cleanup,
          // Utilities
          browserFingerprint: browserLimitManager.current.getBrowserFingerprint()
      };
  }

  function DeepResearchViewNew({ chatflowId, onClose: _onClose, isVisible = true }) {
      const { config, currentJob, isLoading: hookIsLoading, error: hookError, isInitializing, fetchConfig, cancelJob, resetJob, cleanup } = useDeepResearch(chatflowId);
      // Questionnaire flow state
      const [originalQuery, setOriginalQuery] = d$1('');
      const [followUpQuestions, setFollowUpQuestions] = d$1([]);
      const [_questionnaireMeta, setQuestionnaireMeta] = d$1(null);
      const [questionnaireJob, setQuestionnaireJob] = d$1(null);
      // Loading and error states
      const [isGeneratingQuestions, setIsGeneratingQuestions] = d$1(false);
      const [isStartingResearch, setIsStartingResearch] = d$1(false);
      const [viewError, setViewError] = d$1(null);
      // Fetch config on mount and when becoming visible
      y(() => {
          if (isVisible && !config && !isInitializing) {
              fetchConfig();
          }
      }, [isVisible, config, isInitializing, fetchConfig]);
      // Cleanup on unmount
      y(() => {
          return cleanup;
      }, [cleanup]);
      // Handle initial query submission and generate follow-up questions
      const handleQuerySubmit = async (query) => {
          if (!query.trim())
              return;
          setOriginalQuery(query.trim());
          setViewError(null);
          setIsGeneratingQuestions(true);
          try {
              console.log('[Deep Research] Generating follow-up questions for:', query);
              const response = await generateFollowUpQuestions(query.trim());
              if (!response.success || !response.questions || response.questions.length === 0) {
                  throw new Error(response.error || 'No follow-up questions generated');
              }
              setFollowUpQuestions(response.questions);
              setQuestionnaireMeta(response.metadata);
              console.log('[Deep Research] Follow-up questions generated:', {
                  count: response.questions.length,
                  metadata: response.metadata
              });
          }
          catch (error) {
              console.error('[Deep Research] Failed to generate questions:', error);
              setViewError(error.message || 'Failed to generate follow-up questions');
          }
          finally {
              setIsGeneratingQuestions(false);
          }
      };
      // Handle questionnaire submission and start research
      const handleQuestionnaireSubmit = async (responses) => {
          if (!originalQuery || responses.length === 0)
              return;
          setViewError(null);
          setIsStartingResearch(true);
          try {
              console.log('[Deep Research] Starting research with questionnaire responses:', {
                  originalQuery,
                  responseCount: responses.length
              });
              // Generate session ID and fingerprint
              const browserLimitManager = new BrowserLimitManager();
              const sessionId = browserLimitManager.getBrowserFingerprint();
              const fingerprint = browserLimitManager.getBrowserFingerprint();
              const result = await startDeepResearchWithAnswers({
                  chatflowId,
                  originalQuery,
                  questionnaireResponses: responses,
                  sessionId,
                  fingerprint
              });
              if (!result.success) {
                  throw new Error(result.error || 'Failed to start Deep Research');
              }
              // Create job object for tracking
              const job = {
                  jobId: result.jobId,
                  status: result.status || 'pending',
                  query: originalQuery,
                  startedAt: new Date().toISOString(),
                  creditsConsumed: result.creditsConsumed,
                  estimatedDuration: result.estimatedDuration
              };
              setQuestionnaireJob(job);
              // Start SSE streaming for progress updates
              startQuestionnaireJobStream(result.jobId);
              // Refresh config to update credit counts
              setTimeout(() => fetchConfig(true), 1000);
              console.log('[Deep Research] Research started successfully:', result);
          }
          catch (error) {
              console.error('[Deep Research] Failed to start research:', error);
              setViewError(error.message || 'Failed to start Deep Research');
          }
          finally {
              setIsStartingResearch(false);
          }
      };
      // Start SSE streaming for questionnaire-based job
      const startQuestionnaireJobStream = (jobId) => {
          console.log('[Deep Research] Starting questionnaire job stream:', jobId);
          const eventSource = new EventSource(`http://localhost:3000/api/embed/v1/deep-research/stream/${jobId}`);
          eventSource.addEventListener('deep-research-start', (event) => {
              try {
                  const data = JSON.parse(event.data);
                  console.log('[Deep Research] Questionnaire job started:', data);
                  setQuestionnaireJob(prev => prev ? {
                      ...prev,
                      status: 'processing'
                  } : null);
              }
              catch (error) {
                  console.error('[Deep Research] Failed to parse start event:', error);
              }
          });
          eventSource.addEventListener('deep-research-progress', (event) => {
              try {
                  const data = JSON.parse(event.data);
                  console.log('[Deep Research] Questionnaire job progress:', data);
                  setQuestionnaireJob(prev => prev ? {
                      ...prev,
                      status: 'processing',
                      progress: {
                          stage: data.stage || 'processing',
                          progress: data.progress || 0,
                          timestamp: data.timestamp || new Date().toISOString(),
                          estimatedTimeRemaining: data.estimatedTimeRemaining,
                          sources: data.sources
                      }
                  } : null);
              }
              catch (error) {
                  console.error('[Deep Research] Failed to parse progress event:', error);
              }
          });
          eventSource.addEventListener('deep-research-complete', (event) => {
              try {
                  const data = JSON.parse(event.data);
                  console.log('[Deep Research] Questionnaire job completed:', data);
                  setQuestionnaireJob(prev => prev ? {
                      ...prev,
                      status: 'completed',
                      results: data.results,
                      completedAt: new Date().toISOString(),
                      progress: {
                          stage: 'completed',
                          progress: 100,
                          timestamp: new Date().toISOString()
                      }
                  } : null);
                  eventSource.close();
                  // Refresh config to update usage statistics
                  setTimeout(() => fetchConfig(true), 1000);
              }
              catch (error) {
                  console.error('[Deep Research] Failed to parse completion event:', error);
              }
          });
          eventSource.addEventListener('deep-research-error', (event) => {
              try {
                  const data = JSON.parse(event.data);
                  console.error('[Deep Research] Questionnaire job failed:', data);
                  setQuestionnaireJob(prev => prev ? {
                      ...prev,
                      status: 'failed',
                      error: data.error || 'Deep Research failed',
                      completedAt: new Date().toISOString()
                  } : null);
                  setViewError(data.error || 'Deep Research failed');
                  eventSource.close();
              }
              catch (error) {
                  console.error('[Deep Research] Failed to parse error event:', error);
              }
          });
          eventSource.onerror = (error) => {
              console.error('[Deep Research] Questionnaire job SSE error:', error);
              if (eventSource.readyState === EventSource.CLOSED) {
                  console.log('[Deep Research] Questionnaire job SSE closed');
                  setTimeout(() => {
                      if (questionnaireJob && questionnaireJob.status === 'processing') {
                          setViewError('Connection lost. Please check the result later or try again.');
                      }
                  }, 5000);
              }
          };
      };
      // Handle back navigation
      const handleBack = () => {
          if (viewState === 'questionnaire') {
              // Go back to trigger
              setOriginalQuery('');
              setFollowUpQuestions([]);
              setQuestionnaireMeta(null);
              setViewError(null);
          }
          else if (viewState === 'progress' || viewState === 'results') {
              // Reset everything
              handleNewResearch();
          }
      };
      // Handle cancel research
      const handleCancel = async () => {
          try {
              if (questionnaireJob && (questionnaireJob.status === 'pending' || questionnaireJob.status === 'processing')) {
                  // For questionnaire job, just reset the state
                  setQuestionnaireJob(null);
              }
              else {
                  // For hook-based job
                  await cancelJob();
              }
          }
          catch (error) {
              console.error('[Deep Research] Cancel failed:', error);
              setViewError('Failed to cancel research');
          }
      };
      // Handle new research
      const handleNewResearch = () => {
          // Reset all questionnaire state
          setOriginalQuery('');
          setFollowUpQuestions([]);
          setQuestionnaireMeta(null);
          setQuestionnaireJob(null);
          setViewError(null);
          // Reset hook state
          resetJob();
          // Refresh config
          setTimeout(() => fetchConfig(true), 500);
      };
      // Handle refresh config
      const handleRefreshConfig = () => {
          setViewError(null);
          fetchConfig(true);
      };
      // Determine current view state
      const currentError = viewError || hookError;
      const activeJob = questionnaireJob || currentJob;
      let viewState;
      if (isInitializing && !config) {
          viewState = 'loading';
      }
      else if ((activeJob === null || activeJob === void 0 ? void 0 : activeJob.status) === 'completed') {
          viewState = 'results';
      }
      else if (activeJob && (activeJob.status === 'pending' || activeJob.status === 'processing')) {
          viewState = 'progress';
      }
      else if ((activeJob === null || activeJob === void 0 ? void 0 : activeJob.status) === 'failed') {
          viewState = 'error';
      }
      else if (followUpQuestions.length > 0 && originalQuery) {
          viewState = 'questionnaire';
      }
      else {
          viewState = 'trigger';
      }
      return (u$2(Container$2, { children: [u$2(MessagesArea, { children: [viewState === 'loading' && (u$2(LoadingContainer, { children: [u$2(LoadingIcon, { children: u$2(Search, { size: 24, color: "white" }) }), u$2(LoadingContent, { children: [u$2(LoadingTitle, { children: "\uD83D\uDD0D Loading Deep Research" }), u$2(LoadingText, { children: "Setting up your research environment..." })] })] })), viewState === 'trigger' && (u$2(TriggerForm, { config: config, onSubmit: handleQuerySubmit, onRefreshConfig: handleRefreshConfig, isSubmitting: isGeneratingQuestions, error: currentError || undefined })), viewState === 'questionnaire' && (u$2(DeepResearchQuestionnaire, { originalQuery: originalQuery, questions: followUpQuestions, onSubmit: handleQuestionnaireSubmit, onBack: handleBack, isSubmitting: isStartingResearch, error: currentError || undefined })), viewState === 'progress' && activeJob && (u$2(DeepResearchProgress, { job: activeJob, isLoading: hookIsLoading, onCancel: handleCancel })), viewState === 'results' && (activeJob === null || activeJob === void 0 ? void 0 : activeJob.results) && (u$2(DeepResearchResults, { job: activeJob, onNewResearch: handleNewResearch })), viewState === 'error' && (u$2(ErrorContainer, { children: [u$2(ErrorIcon, { children: u$2(CircleAlert, { size: 24, color: "white" }) }), u$2(ErrorContent, { children: [u$2(ErrorTitle, { children: "Research Failed" }), u$2(ErrorText, { children: (activeJob === null || activeJob === void 0 ? void 0 : activeJob.error) || currentError || 'An unexpected error occurred' }), u$2(ErrorActions, { children: [u$2(ErrorButton, { onClick: handleNewResearch, children: "Try Again" }), (viewState === 'error' && followUpQuestions.length > 0) && (u$2(BackButton$1, { onClick: handleBack, children: [u$2(ArrowLeft, { size: 16 }), "Back"] }))] })] })] }))] }), (viewState === 'questionnaire' || viewState === 'progress' || viewState === 'results') && (u$2(NavigationHint, { children: u$2("span", { children: "\uD83D\uDCA1 Tip: You can start a new research at any time" }) }))] }));
  }
  // Styled components (reusing existing patterns from DeepResearchView)
  const Container$2 = j$1('div') `
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--askdona-background);
`;
  const MessagesArea = j$1('div') `
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
`;
  // Loading components
  const LoadingContainer = j$1('div') `
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
  margin: 1rem;
  border-radius: 0.75rem;
`;
  const LoadingIcon = j$1('div') `
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
  const LoadingContent = j$1('div') `
  flex: 1;
`;
  const LoadingTitle = j$1('h3') `
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`;
  const LoadingText = j$1('p') `
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
`;
  // Error components
  const ErrorContainer = j$1('div') `
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  margin: 1rem;
  border-radius: 0.75rem;
`;
  const ErrorIcon = j$1('div') `
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
  const ErrorContent = j$1('div') `
  flex: 1;
`;
  const ErrorTitle = j$1('h3') `
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
`;
  const ErrorText = j$1('p') `
  margin: 0 0 1rem;
  font-size: 0.875rem;
  opacity: 0.9;
  line-height: 1.5;
`;
  const ErrorActions = j$1('div') `
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;
  const ErrorButton = j$1('button') `
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
`;
  const BackButton$1 = j$1('button') `
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
`;
  const NavigationHint = j$1('div') `
  padding: 0.75rem 1rem;
  text-align: center;
  font-size: 0.8125rem;
  color: var(--askdona-text-secondary);
  background: var(--askdona-border);
  border-top: 1px solid var(--askdona-border);
`;
  function TriggerForm({ config: _config, onSubmit, onRefreshConfig: _onRefreshConfig, isSubmitting = false, error }) {
      const [query, setQuery] = d$1('');
      const handleSubmit = (e) => {
          e.preventDefault();
          if (query.trim() && !isSubmitting) {
              onSubmit(query.trim());
          }
      };
      return (u$2(TriggerContainer, { children: [u$2(TriggerHeader, { children: [u$2(TriggerIcon, { children: u$2(Search, { size: 24, color: "white" }) }), u$2(TriggerContent, { children: [u$2(TriggerTitle, { children: "\uD83D\uDD0D Deep Research" }), u$2(TriggerSubtitle, { children: "Ask a research question and we'll analyze it thoroughly" })] })] }), u$2(TriggerBody, { children: [u$2("form", { onSubmit: handleSubmit, children: [u$2(QueryInput, { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "What would you like me to research? Be as specific as possible...", rows: 3, disabled: isSubmitting }), u$2(TriggerActions, { children: u$2(SubmitTriggerButton, { type: "submit", disabled: !query.trim() || isSubmitting, children: isSubmitting ? 'Analyzing...' : 'Start Research' }) })] }), error && (u$2(TriggerError, { children: [u$2(CircleAlert, { size: 16 }), u$2("span", { children: error })] }))] })] }));
  }
  const TriggerContainer = j$1('div') `
  background: var(--askdona-background);
  border: 1px solid var(--askdona-border);
  border-radius: 0.75rem;
  overflow: hidden;
  margin: 1rem;
`;
  const TriggerHeader = j$1('div') `
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--askdona-primary) 0%, #4f46e5 100%);
  color: white;
`;
  const TriggerIcon = j$1('div') `
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
  const TriggerContent = j$1('div') `
  flex: 1;
`;
  const TriggerTitle = j$1('h3') `
  margin: 0 0 0.25rem;
  font-size: 1.125rem;
  font-weight: 600;
`;
  const TriggerSubtitle = j$1('p') `
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
`;
  const TriggerBody = j$1('div') `
  padding: 1.5rem;
`;
  const QueryInput = j$1('textarea') `
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
`;
  const TriggerActions = j$1('div') `
  display: flex;
  justify-content: flex-end;
`;
  const SubmitTriggerButton = j$1('button') `
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
`;
  const TriggerError = j$1('div') `
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
`;

  function RAGDeepResearchStatusDisplay({ task, onRetry, onSendMessage }) {
      const [currentTask, setCurrentTask] = d$1(task);
      // Update current task when props change
      y(() => {
          setCurrentTask(task);
      }, [task]);
      const stageName = {
          "follow-up": "依頼内容の整理",
          "research-outline": "調査の計画",
          "search": "情報収集",
          "extraction": "情報分析",
          "new-angles": "追加の調査",
          "synthesis": "調査レポート作成",
      };
      const getStageIcon = (stage) => {
          switch (stage) {
              case 'follow-up': return '📝';
              case 'research-outline': return '📋';
              case 'search': return '🔍';
              case 'extraction': return '📊';
              case 'new-angles': return '💡';
              case 'synthesis': return '📄';
              default: return '⚙️';
          }
      };
      return (u$2(Container$1, { children: [u$2(StatusHeader, { children: [u$2(Title$1, { children: "\u6DF1\u5C64\u8ABF\u67FB\u306E\u9032\u6357" }), u$2(Status, { status: currentTask.status, children: [currentTask.status === 'pending' && '⏳ 待機中', currentTask.status === 'in-progress' && '🔄 実行中', currentTask.status === 'completed' && '✅ 完了', currentTask.status === 'failed' && '❌ 失敗'] })] }), u$2(ProgressSection, { children: [u$2(ProgressBar, { children: u$2(ProgressFill, { progress: currentTask.progress || 0 }) }), u$2(ProgressText, { children: [currentTask.progress || 0, "%"] })] }), u$2(StageInfo, { children: [u$2(StageIcon, { children: getStageIcon(currentTask.stage || 'follow-up') }), u$2(StageName, { children: currentTask.stage ? (stageName[currentTask.stage] || currentTask.stage) : 'Processing...' })] }), u$2(MessageSection, { children: [u$2(MessageText, { children: currentTask.message || 'Processing...' }), u$2(Timestamp, { children: ["\u66F4\u65B0\u65E5\u6642: ", new Date(currentTask.updated_at).toLocaleString('ja-JP')] })] }), currentTask.status === 'completed' && currentTask.summary_report && (u$2(ResultSection, { children: [u$2(ResultTitle, { children: "\u8ABF\u67FB\u7D50\u679C" }), u$2(ResultPreview, { children: [currentTask.summary_report.substring(0, 200), "..."] }), u$2(ButtonGroup$1, { children: u$2(Button$2, { variant: "primary", onClick: () => onSendMessage(currentTask.summary_report), children: "\u7D50\u679C\u3092\u30C1\u30E3\u30C3\u30C8\u306B\u9001\u4FE1" }) })] })), currentTask.status === 'completed' && currentTask.checksheet_markdown && !currentTask.summary_report && (u$2(ResultSection, { children: [u$2(ResultTitle, { children: "\u8ABF\u67FB\u30C1\u30A7\u30C3\u30AF\u30B7\u30FC\u30C8" }), u$2(ResultPreview, { children: [currentTask.checksheet_markdown.substring(0, 200), "..."] }), u$2(ButtonGroup$1, { children: u$2(Button$2, { variant: "primary", onClick: () => onSendMessage(currentTask.checksheet_markdown), children: "\u30C1\u30A7\u30C3\u30AF\u30B7\u30FC\u30C8\u3092\u30C1\u30E3\u30C3\u30C8\u306B\u9001\u4FE1" }) })] })), currentTask.status === 'failed' && (u$2(ButtonGroup$1, { children: u$2(Button$2, { variant: "secondary", onClick: onRetry, children: "\u518D\u8A66\u884C" }) }))] }));
  }
  // Styled components
  const Container$1 = j$1('div') `
  padding: 1.5rem;
  background: var(--bg-primary);
  border-radius: 12px;
  border: 1px solid var(--border-light);
`;
  const StatusHeader = j$1('div') `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;
  const Title$1 = j$1('h3') `
  margin: 0;
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
`;
  const Status = j$1('span') `
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${props => {
    switch (props.status) {
        case 'pending': return '#fef3c7';
        case 'in-progress': return '#dbeafe';
        case 'completed': return '#d1fae5';
        case 'failed': return '#fee2e2';
        default: return '#f3f4f6';
    }
}};
  color: ${props => {
    switch (props.status) {
        case 'pending': return '#92400e';
        case 'in-progress': return '#1e40af';
        case 'completed': return '#065f46';
        case 'failed': return '#dc2626';
        default: return '#374151';
    }
}};
`;
  const ProgressSection = j$1('div') `
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;
  const ProgressBar = j$1('div') `
  flex: 1;
  height: 8px;
  background: var(--bg-secondary);
  border-radius: 4px;
  overflow: hidden;
`;
  const ProgressFill = j$1('div') `
  height: 100%;
  background: var(--primary);
  width: ${props => props.progress}%;
  transition: width 0.5s ease;
`;
  const ProgressText = j$1('span') `
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  min-width: 3rem;
`;
  const StageInfo = j$1('div') `
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;
  const StageIcon = j$1('span') `
  font-size: 1.5rem;
`;
  const StageName = j$1('span') `
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
`;
  const MessageSection = j$1('div') `
  margin-bottom: 1rem;
`;
  const MessageText = j$1('p') `
  margin: 0 0 0.5rem 0;
  color: var(--text-secondary);
  line-height: 1.5;
`;
  const Timestamp = j$1('div') `
  font-size: 0.75rem;
  color: var(--text-secondary);
`;
  const ResultSection = j$1('div') `
  background: var(--bg-secondary);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;
  const ResultTitle = j$1('h4') `
  margin: 0 0 0.75rem 0;
  color: var(--text-primary);
  font-size: 0.95rem;
  font-weight: 600;
`;
  const ResultPreview = j$1('div') `
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;
  const ButtonGroup$1 = j$1('div') `
  display: flex;
  gap: 0.75rem;
`;
  const Button$2 = j$1('button') `
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.variant === 'primary' ? `
    background: var(--primary);
    color: white;

    &:hover {
      background: var(--primary-hover);
    }
  ` : `
    background: var(--bg-secondary);
    color: var(--text-primary);
    border: 1px solid var(--border-light);

    &:hover {
      background: var(--bg-hover);
    }
  `}
`;

  const Container = j$1('div') `
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-primary);
`;
  const Header$1 = j$1('div') `
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-light);
  background: var(--bg-primary);
`;
  const BackButton = j$1('button') `
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
`;
  const HeaderTitle = j$1('h2') `
  margin: 0;
  margin-left: 1rem;
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
`;
  const Content$1 = j$1('div') `
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`;
  const QuestionForm = j$1('div') `
  margin-bottom: 2rem;
`;
  const QuestionInput = j$1('textarea') `
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
`;
  const ButtonGroup = j$1('div') `
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`;
  const Button$1 = j$1('button') `
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;

  ${props => props.variant === 'primary' ? `
    background: var(--primary);
    color: white;

    &:hover:not(:disabled) {
      background: var(--primary-hover);
    }

    &:disabled {
      background: var(--bg-secondary);
      color: var(--text-secondary);
      cursor: not-allowed;
    }
  ` : `
    background: var(--bg-secondary);
    color: var(--text-primary);
    border: 1px solid var(--border-light);

    &:hover:not(:disabled) {
      background: var(--bg-hover);
    }

    &:disabled {
      color: var(--text-secondary);
      cursor: not-allowed;
    }
  `}
`;
  const ErrorMessage = j$1('div') `
  color: #ef4444;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;
  function RAGDeepResearchView({ chatFlowId, sessionId, messages, onBack, onSendMessage, baseUrl }) {
      const [phase, setPhase] = d$1('input');
      const [userQuestion, setUserQuestion] = d$1('');
      const [currentTask, setCurrentTask] = d$1(null);
      const [error, setError] = d$1(null);
      const [isLoading, setIsLoading] = d$1(false);
      // Use secure session for authentication
      const { getValidToken, isInitializing, session } = useSecureSession(chatFlowId);
      // Poll for task status when in execution phase
      y(() => {
          if (phase !== 'execution' || !currentTask)
              return;
          // Skip polling if task is already in final state
          if (currentTask.status === 'completed' || currentTask.status === 'failed') {
              console.log(`[RAG Deep Research] Task already ${currentTask.status}, skipping polling`);
              return;
          }
          let intervalId;
          const pollStatus = async () => {
              try {
                  // Use localhost:3000 for API calls in development (askdona dev server)
                  const apiBaseUrl = baseUrl.includes('127.0.0.1') || baseUrl.includes('5500') ? 'http://localhost:3000' : baseUrl;
                  // Use the actual secure session ID from useSecureSession
                  const actualSessionId = (session === null || session === void 0 ? void 0 : session.sessionId) || sessionId;
                  const response = await fetch(`${apiBaseUrl}/api/embed/v1/rag-deep-research/status?sessionId=${actualSessionId}`);
                  if (!response.ok)
                      throw new Error('Failed to fetch task status');
                  const data = await response.json();
                  if (data.task) {
                      setCurrentTask(data.task);
                      // Stop polling immediately if task is completed or failed
                      if (data.task.status === 'completed' || data.task.status === 'failed') {
                          console.log(`[RAG Deep Research] Task ${data.task.status}, stopping polling immediately`);
                          if (intervalId) {
                              clearInterval(intervalId);
                          }
                      }
                  }
              }
              catch (error) {
                  console.error('Failed to poll task status:', error);
                  // Stop polling on network errors to avoid infinite failed requests
                  if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
                      console.log('[RAG Deep Research] Network error detected, stopping polling');
                      if (intervalId) {
                          clearInterval(intervalId);
                      }
                  }
              }
          };
          // Start polling immediately, then every 5 seconds
          pollStatus();
          intervalId = setInterval(pollStatus, 5000);
          return () => {
              console.log('[RAG Deep Research] Clearing polling interval');
              if (intervalId) {
                  clearInterval(intervalId);
              }
          };
      }, [phase, sessionId, baseUrl, session]); // Remove currentTask from dependencies to avoid unnecessary re-runs
      const handleStartResearch = q$1(async () => {
          if (!userQuestion.trim())
              return;
          setIsLoading(true);
          setError(null);
          try {
              await executeRAGDeepResearch(userQuestion, messages);
          }
          catch (error) {
              console.error('Failed to start research:', error);
              setError(error instanceof Error ? error.message : 'Failed to start research');
              setIsLoading(false);
          }
      }, [userQuestion, messages]);
      const executeRAGDeepResearch = q$1(async (query, messageHistory) => {
          try {
              // Get secure session token
              const secureSessionToken = await getValidToken();
              if (!secureSessionToken) {
                  throw new Error('Failed to get valid session token');
              }
              // Use localhost:3000 for API calls in development (askdona dev server)
              const apiBaseUrl = baseUrl.includes('127.0.0.1') || baseUrl.includes('5500') ? 'http://localhost:3000' : baseUrl;
              // Use the actual secure session ID from useSecureSession
              const actualSessionId = (session === null || session === void 0 ? void 0 : session.sessionId) || sessionId;
              const response = await fetch(`${apiBaseUrl}/api/embed/v1/rag-deep-research/executor`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                      userQuestion: query,
                      chatFlowId,
                      sessionId: actualSessionId,
                      secureSessionToken,
                      messages: messageHistory,
                      report_settings: {
                          reportFormat: 'business-report',
                          internetEnabled: true,
                          language: 'japanese'
                      }
                  })
              });
              if (!response.ok) {
                  throw new Error(`Failed to start research: ${response.status}`);
              }
              const data = await response.json();
              setCurrentTask({
                  id: data.taskId,
                  session_id: actualSessionId,
                  status: 'pending',
                  stage: 'follow-up',
                  progress: 0,
                  message: '深層調査を開始しています...',
                  checksheet_markdown: null,
                  tool_usage_plan: null,
                  execution_results: null,
                  final_report_message_id: null,
                  summary_report: null,
                  research_id: null,
                  created_at: new Date().toISOString(),
                  updated_at: new Date().toISOString(),
                  report_settings: {
                      reportFormat: 'business-report',
                      internetEnabled: true,
                      language: 'japanese'
                  }
              });
              setPhase('execution');
          }
          catch (error) {
              throw error;
          }
          finally {
              setIsLoading(false);
          }
      }, [baseUrl, chatFlowId, sessionId, getValidToken, session]);
      const handleRetry = q$1(() => {
          setPhase('input');
          setCurrentTask(null);
          setError(null);
          setUserQuestion('');
      }, []);
      return (u$2(Container, { children: [u$2(Header$1, { children: [u$2(BackButton, { onClick: onBack, children: [u$2("span", { children: "\u2190" }), "\u623B\u308B"] }), u$2(HeaderTitle, { children: "RAG \u6DF1\u5C64\u8ABF\u67FB" })] }), u$2(Content$1, { children: [error && (u$2(ErrorMessage, { children: error })), isInitializing ? (u$2(QuestionForm, { children: u$2("div", { style: { textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }, children: "\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u521D\u671F\u5316\u3057\u3066\u3044\u307E\u3059..." }) })) : phase === 'input' && (u$2(QuestionForm, { children: [u$2(QuestionInput, { value: userQuestion, onChange: (e) => setUserQuestion(e.currentTarget.value), placeholder: "\u6DF1\u5C64\u8ABF\u67FB\u3092\u884C\u3044\u305F\u3044\u30C8\u30D4\u30C3\u30AF\u3084\u8CEA\u554F\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044...", disabled: isLoading }), u$2(ButtonGroup, { children: [u$2(Button$1, { variant: "secondary", onClick: onBack, children: "\u30AD\u30E3\u30F3\u30BB\u30EB" }), u$2(Button$1, { variant: "primary", onClick: handleStartResearch, disabled: !userQuestion.trim() || isLoading, children: isLoading ? '処理中...' : '調査を開始' })] })] })), phase === 'execution' && currentTask && (u$2(RAGDeepResearchStatusDisplay, { task: currentTask, onRetry: handleRetry, onSendMessage: onSendMessage }))] })] }));
  }

  // Fade in animation
  const fadeIn = h `
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
  // Slide in from bottom
  const slideIn = h `
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;
  // Bounce in animation
  const bounceIn = h `
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
`;
  // Pulse animation
  h `
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
`;
  // Spin animation
  h `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
  // Shimmer animation for loading
  h `
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

  function Modal({ isOpen, onClose, currentMode, onModeSwitch, messages, isLoading, streamingContent, onSendMessage, error, config, currentState, boostMode, onBoostModeChange, sessionId, onFeedbackSubmit, onClearChat, showIntro, displayMode = 'modal', metadataFilters, onMetadataFiltersChange, }) {
      const modalRef = A$1(null);
      y(() => {
          if (!isOpen)
              return;
          const handleEscape = (e) => {
              if (e.key === 'Escape') {
                  onClose();
              }
          };
          const handleClickOutside = (e) => {
              // Don't close on outside click in fullscreen mode
              if (displayMode !== 'fullscreen' && modalRef.current && modalRef.current.contains && typeof modalRef.current.contains === 'function' && !modalRef.current.contains(e.target)) {
                  onClose();
              }
          };
          document.addEventListener('keydown', handleEscape);
          document.addEventListener('mousedown', handleClickOutside);
          return () => {
              document.removeEventListener('keydown', handleEscape);
              document.removeEventListener('mousedown', handleClickOutside);
          };
      }, [isOpen, onClose]);
      if (!isOpen)
          return null;
      const handleOverlayClick = (e) => {
          // Don't close on overlay click in fullscreen mode
          if (displayMode !== 'fullscreen' && e.target === e.currentTarget) {
              onClose();
          }
      };
      return (u$2(Overlay, { onClick: handleOverlayClick, displayMode: displayMode, children: u$2(ModalContainer, { ref: modalRef, displayMode: displayMode, children: [u$2(Header, { children: [u$2(Title, { children: config.language === 'ja' ? 'AskDona' : 'AskDona' }), u$2(HeaderActions, { children: [currentMode === 'ask-ai' && onClearChat && messages.length > 0 && (u$2(RefreshButton, { onClick: onClearChat, disabled: isLoading, title: config.language === 'ja' ? '新しいセッションを開始' : 'Start new session', children: u$2(RefreshCw, { size: 14 }) })), u$2(ModeButton, { active: currentMode === 'ask-ai', onClick: () => onModeSwitch('ask-ai'), children: config.language === 'ja' ? 'AI に質問' : 'Ask AI' }), u$2(ModeButton, { active: currentMode === 'search', onClick: () => onModeSwitch('search'), children: config.language === 'ja' ? '検索' : 'Search' }), config.enableRagDeepResearch && (u$2(ModeButton, { active: currentMode === 'rag-deep-research', onClick: () => onModeSwitch('rag-deep-research'), children: [u$2(Microscope, { size: 14, style: { marginRight: '4px' } }), config.language === 'ja' ? 'RAG Deep Research' : 'RAG Deep Research'] })), displayMode !== 'fullscreen' && (u$2(CloseButton, { onClick: onClose, children: "\u00D7" }))] })] }), u$2(Content, { children: currentMode === 'ask-ai' ? (u$2(ChatView, { messages: messages, isLoading: isLoading, streamingContent: streamingContent, onSendMessage: onSendMessage, error: error, config: config, currentState: currentState, boostMode: boostMode, onBoostModeChange: onBoostModeChange, sessionId: sessionId, onFeedbackSubmit: onFeedbackSubmit, showIntro: showIntro, metadataFilters: metadataFilters, onMetadataFiltersChange: onMetadataFiltersChange })) : currentMode === 'search' ? (u$2(SearchView, { config: config })) : currentMode === 'deep-research' ? (u$2(DeepResearchViewNew, { chatflowId: config.chatflowId, onClose: () => onModeSwitch('ask-ai'), isVisible: currentMode === 'deep-research' })) : currentMode === 'rag-deep-research' && config.enableRagDeepResearch ? (u$2(RAGDeepResearchView, { chatFlowId: config.chatflowId, sessionId: sessionId, messages: messages.map(msg => ({
                              role: msg.role,
                              content: msg.content,
                              createdAt: msg.createdAt,
                              id: msg.id
                          })), onBack: () => onModeSwitch('ask-ai'), onSendMessage: (message) => onSendMessage(message), baseUrl: window.location.origin })) : null }), u$2(Footer, { children: [u$2(FooterText, { children: ["Powered by ", u$2(FooterLink, { href: "https://askdona.com", target: "_blank", style: "color: inherit; text-decoration: none;", children: "AskDona" })] }), u$2(FooterDisclaimer, { children: config.language === 'ja' ? (u$2(k$1, { children: [u$2("div", { children: "Boost\u30E2\u30FC\u30C9\u306F\u3001\u3088\u308A\u591A\u89D2\u7684\u306A\u8996\u70B9\u304B\u3089\u591A\u304F\u306E\u6587\u66F8\u3092\u5206\u6790\u3057\u3066\u56DE\u7B54\u3057\u307E\u3059\u3002\u901A\u5E38\u30E2\u30FC\u30C9\u3088\u308A\u56DE\u7B54\u751F\u6210\u307E\u3067\u306B\u6642\u9593\u304C\u304B\u304B\u308A\u307E\u3059\u3002" }), u$2("div", { children: "RAG\u30B7\u30B9\u30C6\u30E0\u306F\u8AA4\u3063\u305F\u60C5\u5831\u3092\u63D0\u4F9B\u3059\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u91CD\u8981\u306A\u60C5\u5831\u306F\u3054\u81EA\u8EAB\u3067\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002" })] })) : (u$2(k$1, { children: [u$2("div", { children: "Boost mode analyzes more documents from multiple perspectives. It takes longer than normal mode." }), u$2("div", { children: "RAG systems may provide incorrect information. Please verify important information yourself." })] })) })] })] }) }));
  }
  // Styled components
  const Overlay = j$1('div') `
  position: fixed;
  inset: 0;
  background: ${props => props.displayMode === 'fullscreen' ? 'transparent' : 'rgba(0, 0, 0, 0.5)'};
  backdrop-filter: ${props => props.displayMode === 'fullscreen' ? 'none' : 'blur(4px)'};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  padding: ${props => props.displayMode === 'fullscreen' ? '0' : '1.25rem'};
  animation: ${fadeIn} 0.2s ease-out;
`;
  const ModalContainer = j$1('div') `
  background: var(--askdona-surface);
  border-radius: ${props => props.displayMode === 'fullscreen' ? '0' : '1rem'};
  width: ${props => props.displayMode === 'fullscreen' ? '100vw' : '100%'};
  max-width: ${props => props.displayMode === 'fullscreen' ? 'none' : '72rem'};
  height: ${props => props.displayMode === 'fullscreen' ? '100vh' : '90vh'};
  max-height: ${props => props.displayMode === 'fullscreen' ? 'none' : '1000px'};
  box-shadow: ${props => props.displayMode === 'fullscreen' ? 'none' : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'};
  display: flex;
  flex-direction: column;
  animation: ${props => props.displayMode === 'fullscreen' ? 'none' : slideIn} 0.3s ease-out;
  overflow: hidden;
`;
  const Header = j$1('header') `
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--askdona-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;
  const Title = j$1('h2') `
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: var(--askdona-text);
  font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
`;
  const HeaderActions = j$1('div') `
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;
  const ModeButton = j$1('button') `
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.8125rem;
  transition: all 0.2s;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.active ? 'var(--askdona-primary)' : 'var(--askdona-text-secondary)'};
  
  &:hover {
    color: ${props => props.active ? 'var(--askdona-primary)' : 'var(--askdona-text)'};
    background: ${props => props.active ? 'transparent' : 'var(--askdona-background)'};
  }
  
  ${props => props.active && `
    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--askdona-primary);
    }
  `}
`;
  const RefreshButton = j$1('button') `
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0.375rem;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  font-size: 0.875rem;
  color: var(--askdona-text);
  
  svg {
    color: inherit;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    opacity: 1;
  }
  
  &:hover:not(:disabled) {
    background: var(--askdona-background);
    transform: rotate(180deg);
    color: var(--askdona-primary);
    
    svg {
      color: inherit;
      stroke: currentColor;
    }
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
  const CloseButton = j$1('button') `
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
`;
  const Content = j$1('main') `
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
  const Footer = j$1('footer') `
  padding: 0.75rem 1.5rem;
  border-top: 1px solid var(--askdona-border);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
`;
  const FooterText = j$1('span') `
  font-size: 0.75rem;
  color: var(--askdona-text-secondary);
`;
  const FooterLink = j$1('a') `
  font-size: 0.75rem;
  color: var(--askdona-primary);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;
  const FooterDisclaimer = j$1('div') `
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
`;

  function LauncherButton({ onClick, position }) {
      return (u$2(Button, { onClick: onClick, position: position, children: u$2("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: u$2("path", { d: "M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.9706 16.9706 21 12 21C10.4077 21 8.88275 20.5699 7.5389 19.7447L3 21L4.25553 16.4611C3.43012 15.1173 3 13.5923 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }));
  }
  const Button = j$1('button') `
  position: fixed;
  bottom: 1.25rem;
  ${props => props.position === 'bottom-right' ? 'right: 1.25rem;' : 'left: 1.25rem;'}
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
  animation: ${bounceIn} 0.5s ease-out;
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
`;

  // src/hooks/useAuth.ts
  function useAuth(chatflowId) {
      const [result, setResult] = d$1({
          isValid: false,
          error: null,
          config: null,
      });
      y(() => {
          const validate = async () => {
              try {
                  console.log('[AskDona] Validating chatflow:', chatflowId);
                  // Use the actual API service for validation
                  const validationResult = await validateChatflow(chatflowId);
                  console.log('[AskDona] Validation result:', validationResult);
                  setResult({
                      isValid: validationResult.isValid,
                      error: validationResult.error ? new Error(validationResult.error) : null,
                      config: validationResult.config || null,
                  });
              }
              catch (error) {
                  console.error('[AskDona] Authentication error:', error);
                  setResult({
                      isValid: false,
                      error: error,
                      config: null,
                  });
              }
          };
          if (chatflowId) {
              validate();
          }
      }, [chatflowId]);
      return result;
  }

  // src/utils/security.ts
  // Setup security headers and CSP
  function setupSecurityHeaders() {
      // Add Content Security Policy meta tag
      if (!document.querySelector('meta[name="askdona-csp"]')) {
          const cspMeta = document.createElement('meta');
          cspMeta.name = 'askdona-csp';
          cspMeta.content = [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "connect-src 'self' https://api.askdona.com wss://api.askdona.com",
              "font-src 'self' data:",
              "frame-ancestors 'none'",
          ].join('; ');
          document.head.appendChild(cspMeta);
      }
  }
  // Generate secure random ID
  function generateSecureId() {
      if (window.crypto && window.crypto.randomUUID) {
          return window.crypto.randomUUID();
      }
      // Fallback for older browsers
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          const r = Math.random() * 16 | 0;
          const v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
      });
  }
  // Prevent clickjacking
  function preventClickjacking() {
      if (window.self !== window.top) {
          // We're in an iframe, check if it's allowed
          try {
              // Try to access parent document - will throw if different origin
              window.parent.document; // Access check only, no assignment needed
              // If we can access it, we're same-origin, which is allowed
          }
          catch (e) {
              // Different origin, log warning
              console.warn('[AskDona] Widget loaded in cross-origin iframe');
          }
      }
  }
  // Initialize security measures
  if (typeof window !== 'undefined') {
      preventClickjacking();
  }

  async function streamChat({ chatflowId, sessionId, message, messages, boostMode = false, userMessageId, assistantMessageId, metadataFilters, signal, onChunk, }) {
      var _a;
      console.log('[AskDona] Starting fetch request to:', `${API_BASE_URL}/chat/${chatflowId}`);
      console.log('[AskDona] Request body:', { userQuestion: message, sessionId, boostMode, metadataFilters });
      const response = await fetch(`${API_BASE_URL}/chat/${chatflowId}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-Widget-Version': '1.0.0',
          },
          body: JSON.stringify({
              userQuestion: message,
              sessionId,
              messages: messages.map(msg => ({
                  role: msg.role,
                  content: msg.content,
                  createdAt: msg.createdAt,
              })),
              boostMode,
              userMessageId,
              assistantMessageId,
              metadataFilters,
          }),
          signal,
      });
      console.log('[AskDona] Response status:', response.status);
      const headers = {};
      response.headers.forEach((value, key) => {
          headers[key] = value;
      });
      console.log('[AskDona] Response headers:', headers);
      if (!response.ok) {
          const error = await response.json().catch(() => ({ message: 'Request failed' }));
          throw new Error(error.message || `HTTP ${response.status}`);
      }
      const reader = (_a = response.body) === null || _a === void 0 ? void 0 : _a.getReader();
      if (!reader) {
          throw new Error('No response body');
      }
      const decoder = new TextDecoder();
      let buffer = '';
      try {
          console.log('[AskDona] Starting to read stream...');
          while (true) {
              const { done, value } = await reader.read();
              console.log('[AskDona] Stream chunk received:', { done, valueLength: value === null || value === void 0 ? void 0 : value.length });
              if (done) {
                  console.log('[AskDona] Stream completed');
                  break;
              }
              const chunkText = decoder.decode(value, { stream: true });
              console.log('[AskDona] Decoded chunk:', chunkText.substring(0, 100) + '...');
              // CRITICAL FIX: Process chunks immediately for real-time streaming
              // Handle envelope commands first, then stream content
              if (chunkText.includes('\x00')) {
                  // This chunk contains envelope commands - add to buffer and process
                  buffer += chunkText;
                  const chunks = buffer.split('\x00');
                  // Keep the last incomplete chunk in buffer
                  buffer = chunks[chunks.length - 1];
                  // Process complete envelope chunks
                  for (let i = 0; i < chunks.length - 1; i++) {
                      const chunk = chunks[i];
                      if (!chunk)
                          continue;
                      console.log('[AskDona] Processing envelope chunk:', chunk.substring(0, 50) + '...');
                      // Parse envelope format
                      if (chunk.startsWith('__STATE__:')) {
                          console.log('[AskDona] State chunk:', chunk.substring(10));
                          onChunk({
                              type: 'state',
                              data: chunk.substring(10).replace(/\n$/, ''),
                          });
                      }
                      else if (chunk.startsWith('__SEARCH__:')) {
                          console.log('[AskDona] Search chunk:', chunk.substring(11));
                          onChunk({
                              type: 'search',
                              data: chunk.substring(11).replace(/\n$/, ''),
                          });
                      }
                      else if (chunk.startsWith('__METADATA__:')) {
                          console.log('[AskDona] Metadata chunk:', chunk.substring(13));
                          onChunk({
                              type: 'metadata',
                              data: chunk.substring(13).replace(/\n$/, ''),
                          });
                      }
                      else if (chunk.startsWith('__SEARCH_QUERIES__:')) {
                          console.log('[AskDona] Search queries chunk:', chunk.substring(19));
                          onChunk({
                              type: 'search-queries',
                              data: chunk.substring(19).replace(/\n$/, ''),
                          });
                      }
                      else {
                          // Regular content within envelope
                          console.log('[AskDona] Envelope content chunk:', { length: chunk.length, preview: chunk.substring(0, 50) + '...' });
                          onChunk({
                              type: 'content',
                              data: chunk,
                          });
                      }
                  }
              }
              else {
                  // FIXED: Raw streaming content - send immediately!
                  // This is the real-time content from Gemini that needs to appear instantly
                  if (chunkText.trim()) {
                      console.log('[AskDona] Raw streaming content:', { length: chunkText.length, preview: chunkText.substring(0, 50) + '...' });
                      // Send raw content immediately for real-time streaming effect
                      onChunk({
                          type: 'content',
                          data: chunkText,
                      });
                  }
              }
          }
          // Process any remaining content
          if (buffer && !buffer.startsWith('__')) {
              onChunk({
                  type: 'content',
                  data: buffer,
              });
          }
      }
      finally {
          reader.releaseLock();
      }
  }

  const STORAGE_KEY_PREFIX = 'askdona_widget_';
  const MAX_MESSAGES_STORAGE = 50;
  const SESSION_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours
  // Check if string is a valid UUID
  function isValidUUID(str) {
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      return uuidRegex.test(str);
  }
  // Get or create session ID
  function getSessionId(chatflowId) {
      const key = `${STORAGE_KEY_PREFIX}session_${chatflowId}`;
      try {
          const stored = localStorage.getItem(key);
          if (stored) {
              const data = JSON.parse(stored);
              // Check if session is not expired and has UUID format
              if (data.expiresAt > Date.now() && isValidUUID(data.id)) {
                  return data.id;
              }
          }
      }
      catch (e) {
          console.error('[AskDona] Failed to get session ID:', e);
      }
      // Check if there are existing messages - if so, don't clear them when creating new session
      const existingMessages = getStoredMessages(chatflowId);
      const hasExistingMessages = existingMessages.length > 0;
      // If we have existing messages, try to preserve their session
      if (hasExistingMessages) {
          const existingSessionId = getStoredSessionId(chatflowId);
          if (existingSessionId && isValidUUID(existingSessionId)) {
              console.log('[AskDona] Preserving existing session ID for messages:', existingSessionId);
              // Update the session storage with the existing session ID and extend expiry
              const preservedSession = {
                  id: existingSessionId,
                  createdAt: Date.now(),
                  expiresAt: Date.now() + SESSION_EXPIRY,
              };
              try {
                  localStorage.setItem(key, JSON.stringify(preservedSession));
              }
              catch (e) {
                  console.error('[AskDona] Failed to preserve session ID:', e);
              }
              return existingSessionId;
          }
      }
      // Clear old session data only if no existing messages or invalid session
      try {
          localStorage.removeItem(key);
          if (!hasExistingMessages) {
              localStorage.removeItem(`${STORAGE_KEY_PREFIX}messages_${chatflowId}`);
          }
      }
      catch (e) {
          console.error('[AskDona] Failed to clear old session data:', e);
      }
      // Create new session
      const newSession = {
          id: generateSecureId(),
          createdAt: Date.now(),
          expiresAt: Date.now() + SESSION_EXPIRY,
      };
      try {
          localStorage.setItem(key, JSON.stringify(newSession));
      }
      catch (e) {
          console.error('[AskDona] Failed to save session ID:', e);
      }
      return newSession.id;
  }
  // Save message to storage with session info
  function saveMessage(chatflowId, message, sessionId) {
      const key = `${STORAGE_KEY_PREFIX}messages_${chatflowId}`;
      try {
          const stored = localStorage.getItem(key);
          const data = stored ? JSON.parse(stored) : { sessionId: null, messages: [] };
          // Store session ID with messages if provided
          if (sessionId && !data.sessionId) {
              data.sessionId = sessionId;
          }
          const messages = data.messages || [];
          // Check if message already exists to avoid duplicates
          const existingIndex = messages.findIndex(m => m.id === message.id);
          if (existingIndex !== -1) {
              // Update existing message
              messages[existingIndex] = message;
          }
          else {
              // Add new message
              messages.push(message);
          }
          // Keep only recent messages
          if (messages.length > MAX_MESSAGES_STORAGE) {
              messages.splice(0, messages.length - MAX_MESSAGES_STORAGE);
          }
          data.messages = messages;
          localStorage.setItem(key, JSON.stringify(data));
      }
      catch (e) {
          console.error('[AskDona] Failed to save message:', e);
      }
  }
  // Get stored messages and session data
  function getStoredMessages(chatflowId) {
      const key = `${STORAGE_KEY_PREFIX}messages_${chatflowId}`;
      try {
          const stored = localStorage.getItem(key);
          if (!stored)
              return [];
          const data = JSON.parse(stored);
          // Handle both old format (array) and new format (object with sessionId)
          return Array.isArray(data) ? data : data.messages || [];
      }
      catch (e) {
          console.error('[AskDona] Failed to get stored messages:', e);
          return [];
      }
  }
  // Get stored session ID for messages
  function getStoredSessionId(chatflowId) {
      var _a;
      const key = `${STORAGE_KEY_PREFIX}messages_${chatflowId}`;
      try {
          const stored = localStorage.getItem(key);
          if (!stored)
              return null;
          const data = JSON.parse(stored);
          // Only return sessionId if it's in the new format and has messages
          if (!Array.isArray(data) && data.sessionId && ((_a = data.messages) === null || _a === void 0 ? void 0 : _a.length) > 0) {
              return data.sessionId;
          }
          return null;
      }
      catch (e) {
          console.error('[AskDona] Failed to get stored session ID:', e);
          return null;
      }
  }
  // Clear stored data
  function clearStorage(chatflowId) {
      const keys = [
          `${STORAGE_KEY_PREFIX}session_${chatflowId}`,
          `${STORAGE_KEY_PREFIX}messages_${chatflowId}`,
      ];
      keys.forEach(key => {
          try {
              localStorage.removeItem(key);
          }
          catch (e) {
              console.error('[AskDona] Failed to clear storage:', e);
          }
      });
  }
  // Clean up expired sessions
  function cleanupExpiredSessions() {
      try {
          const keys = Object.keys(localStorage);
          const now = Date.now();
          keys.forEach(key => {
              if (key.startsWith(`${STORAGE_KEY_PREFIX}session_`)) {
                  try {
                      const data = JSON.parse(localStorage.getItem(key) || '{}');
                      if (data.expiresAt && data.expiresAt < now) {
                          localStorage.removeItem(key);
                          // Also remove associated messages
                          const chatflowId = key.replace(`${STORAGE_KEY_PREFIX}session_`, '');
                          localStorage.removeItem(`${STORAGE_KEY_PREFIX}messages_${chatflowId}`);
                      }
                  }
                  catch (e) {
                      // Invalid data, remove it
                      localStorage.removeItem(key);
                  }
              }
          });
      }
      catch (e) {
          console.error('[AskDona] Failed to cleanup expired sessions:', e);
      }
  }
  // Run cleanup on initialization
  if (typeof window !== 'undefined') {
      cleanupExpiredSessions();
  }

  // src/hooks/useChat.ts
  function useChat(chatflowId) {
      const [sessionId] = d$1(() => {
          // Check if we have stored messages with a session ID
          const storedMessages = getStoredMessages(chatflowId);
          if (storedMessages.length > 0) {
              // Try to restore session ID from stored messages first
              const storedSessionId = getStoredSessionId(chatflowId);
              if (storedSessionId) {
                  console.log('[AskDona] Restored session ID from messages:', storedSessionId);
                  return storedSessionId;
              }
          }
          // Otherwise get/create new session ID
          const newSessionId = getSessionId(chatflowId);
          console.log('[AskDona] Using new session ID:', newSessionId);
          return newSessionId;
      });
      const [messages, setMessages] = d$1(() => getStoredMessages(chatflowId));
      const [isLoading, setIsLoading] = d$1(false);
      const [streamingContent, setStreamingContent] = d$1('');
      const [error, setError] = d$1(null);
      const [currentState, setCurrentState] = d$1('idle');
      const abortControllerRef = A$1(null);
      const assistantMessageRef = A$1(null);
      const accumulatedContentRef = A$1('');
      const metadataRef = A$1(null);
      // Save messages to localStorage whenever messages change
      y(() => {
          // Only save the last message to avoid redundant saves
          if (messages.length > 0) {
              const lastMessage = messages[messages.length - 1];
              saveMessage(chatflowId, lastMessage, sessionId);
          }
      }, [messages, chatflowId, sessionId]);
      const clearChat = q$1(() => {
          setMessages([]);
          clearStorage(chatflowId);
      }, [chatflowId]);
      const sendMessage = q$1(async (message, boostMode = false, metadataFilters = null) => {
          try {
              // Add user message
              const userMessage = {
                  id: generateSecureId(),
                  role: 'user',
                  content: message,
                  createdAt: new Date().toISOString(),
                  metadata: {
                      mode: boostMode ? 'boost' : 'standard'
                  }
              };
              setMessages(prev => [...prev, userMessage]);
              setIsLoading(true);
              setError(null);
              setStreamingContent('');
              setCurrentState('thinking');
              accumulatedContentRef.current = ''; // Reset accumulated content
              metadataRef.current = null; // Reset metadata
              console.log('[AskDona] Sending message to chatflow:', chatflowId);
              // Use persistent session ID
              // Create assistant message for streaming (but don't add to messages yet)
              const assistantMessage = {
                  id: generateSecureId(),
                  role: 'assistant',
                  content: '',
                  createdAt: new Date().toISOString(),
              };
              console.log('[AskDona] Message IDs:', { userMessageId: userMessage.id, assistantMessageId: assistantMessage.id });
              // Store reference for later use
              assistantMessageRef.current = assistantMessage;
              // Setup abort controller
              abortControllerRef.current = new AbortController();
              // Use the streaming service
              await streamChat({
                  chatflowId,
                  sessionId,
                  message,
                  messages: messages, // Pass existing messages for context
                  boostMode,
                  userMessageId: userMessage.id, // Send user message ID
                  assistantMessageId: assistantMessage.id, // Send assistant message ID
                  metadataFilters,
                  signal: abortControllerRef.current.signal,
                  onChunk: (chunk) => {
                      var _a;
                      console.log('[AskDona] Received chunk:', { type: chunk.type, dataLength: (_a = chunk.data) === null || _a === void 0 ? void 0 : _a.length });
                      if (chunk.type === 'content') {
                          // Accumulate content for final message
                          accumulatedContentRef.current += chunk.data;
                          // Update streaming content for real-time display - CRITICAL for streaming UI
                          console.log('[AskDona] Updating streamingContent:', accumulatedContentRef.current.substring(0, 50) + '...');
                          setStreamingContent(accumulatedContentRef.current);
                          // FIXED: Don't add empty placeholder - let streaming content handle display
                          // The MessageList component will show streamingContent when isLoading=true
                      }
                      else if (chunk.type === 'metadata') {
                          // Store metadata to be applied when streaming completes
                          try {
                              const metadata = JSON.parse(chunk.data);
                              metadataRef.current = { docMetadata: metadata, mode: boostMode ? 'boost' : 'standard' };
                          }
                          catch (e) {
                              console.warn('[AskDona] Failed to parse metadata:', e);
                          }
                      }
                      else if (chunk.type === 'state') {
                          console.log('[AskDona] State:', chunk.data);
                          setCurrentState(chunk.data);
                      }
                  }
              });
              console.log('[AskDona] Message sent successfully');
          }
          catch (err) {
              if (err.name === 'AbortError') {
                  console.log('[AskDona] Request aborted');
              }
              else {
                  console.error('[AskDona] Chat error:', err);
                  setError(err);
              }
          }
          finally {
              // Add the complete assistant message when streaming finishes
              if (assistantMessageRef.current && accumulatedContentRef.current.trim()) {
                  console.log('[AskDona] Adding final message with content:', accumulatedContentRef.current.substring(0, 100) + '...');
                  setMessages(prev => {
                      // Add the complete assistant message with accumulated content
                      const finalMessage = {
                          ...assistantMessageRef.current,
                          content: accumulatedContentRef.current.trim(),
                          metadata: metadataRef.current || assistantMessageRef.current.metadata
                      };
                      return [...prev, finalMessage];
                  });
              }
              setIsLoading(false);
              setStreamingContent('');
              setCurrentState('idle');
              abortControllerRef.current = null;
              assistantMessageRef.current = null;
              accumulatedContentRef.current = '';
              metadataRef.current = null;
          }
      }, [chatflowId, messages]);
      const submitFeedback = q$1(async (messageId, rating, content) => {
          try {
              // Update the message with feedback
              setMessages(prevMessages => prevMessages.map(msg => msg.id === messageId
                  ? {
                      ...msg,
                      metadata: {
                          ...msg.metadata,
                          feedback: {
                              rating,
                              content,
                              submittedAt: new Date().toISOString(),
                              isSubmitted: true
                          }
                      }
                  }
                  : msg));
              // Send feedback using the same session ID (now both id and session_id are the same in database)
              const feedbackPayload = {
                  embedMessageId: messageId,
                  embedSessionId: sessionId,
                  chatflowId,
                  feedbackType: 'combined',
                  feedbackData: {
                      rating: rating === 'THUMBS_UP' ? 'thumbs_up' : 'thumbs_down',
                      content: content || null
                  },
                  metadata: {
                      domain: window.location.hostname,
                      url: window.location.href,
                      userAgent: navigator.userAgent,
                  }
              };
              console.log('[AskDona] Submitting feedback with payload:', feedbackPayload);
              const response = await fetch(`http://localhost:3000/api/embed/v1/feedback`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(feedbackPayload),
              });
              if (!response.ok) {
                  const errorText = await response.text();
                  console.error('[AskDona] Feedback submission failed:', {
                      status: response.status,
                      statusText: response.statusText,
                      error: errorText
                  });
                  throw new Error(`Failed to submit feedback: ${response.statusText} - ${errorText}`);
              }
              const responseData = await response.json();
              console.log('[AskDona] Feedback submitted successfully:', { messageId, rating, content, response: responseData });
          }
          catch (error) {
              console.error('[AskDona] Failed to submit feedback:', error);
              // Revert the optimistic update on error
              setMessages(prevMessages => prevMessages.map(msg => msg.id === messageId
                  ? {
                      ...msg,
                      metadata: {
                          ...msg.metadata,
                          feedback: undefined
                      }
                  }
                  : msg));
              throw error;
          }
      }, [sessionId, chatflowId]);
      return {
          messages,
          sendMessage,
          isLoading,
          streamingContent,
          error,
          currentState,
          sessionId,
          submitFeedback,
          clearChat,
      };
  }

  // Helper function to convert hex to RGB
  function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (!result)
          return '0, 0, 0';
      return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
  }
  // Helper function to darken color
  function darkenColor(hex, percent) {
      const num = parseInt(hex.replace('#', ''), 16);
      const amt = Math.round(2.55 * percent);
      const R = (num >> 16) - amt;
      const G = (num >> 8 & 0x00FF) - amt;
      const B = (num & 0x0000FF) - amt;
      return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
          (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
          (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
  }
  // Helper function to lighten color
  function lightenColor(hex, percent) {
      const num = parseInt(hex.replace('#', ''), 16);
      const amt = Math.round(2.55 * percent);
      const R = (num >> 16) + amt;
      const G = (num >> 8 & 0x00FF) + amt;
      const B = (num & 0x0000FF) + amt;
      return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
          (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
          (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
  }
  const lightTheme = {
      colors: {
          primary: '#353a5c',
          primaryDark: '#2a2e47',
          primaryLight: '#494e75',
          background: '#ffffff',
          surface: '#f8f9fa',
          text: '#353a5c',
          textSecondary: '#6b6f8a',
          border: '#e5e7eb',
          error: '#EF4444',
          success: '#10B981',
      },
      fonts: {
          base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
      shadows: {
          sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
  };
  const darkTheme = {
      colors: {
          primary: '#fff3e3',
          primaryDark: '#f0e2cc',
          primaryLight: '#fff8f0',
          background: '#353a5c',
          surface: '#3f4569',
          text: '#fff3e3',
          textSecondary: '#c4c0b5',
          border: '#494e75',
          error: '#F87171',
          success: '#34D399',
      },
      fonts: {
          base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
      shadows: {
          sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
          md: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
          lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
          xl: '0 20px 25px -5px rgba(0, 0, 0, 0.6)',
      },
  };
  function getTheme(theme, primaryColor) {
      let selectedTheme = lightTheme;
      if (theme === 'dark') {
          selectedTheme = darkTheme;
      }
      else if (theme === 'auto') {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          selectedTheme = prefersDark ? darkTheme : lightTheme;
      }
      // Apply custom primary color if provided
      if (primaryColor) {
          selectedTheme = {
              ...selectedTheme,
              colors: {
                  ...selectedTheme.colors,
                  primary: primaryColor,
                  primaryDark: darkenColor(primaryColor, 10),
                  primaryLight: lightenColor(primaryColor, 10),
              },
          };
      }
      // Add RGB values for CSS variables
      const primaryRgb = hexToRgb(selectedTheme.colors.primary);
      document.documentElement.style.setProperty('--askdona-primary-rgb', primaryRgb);
      return selectedTheme;
  }

  function g(n,t){for(var e in t)n[e]=t[e];return n}function E(n,t){for(var e in n)if("__source"!==e&&!(e in t))return  true;for(var r in t)if("__source"!==r&&n[r]!==t[r])return  true;return  false}function N(n,t){this.props=n,this.context=t;}(N.prototype=new x).isPureReactComponent=true,N.prototype.shouldComponentUpdate=function(n,t){return E(this.props,n)||E(this.state,t)};var T=l$2.__b;l$2.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),T&&T(n);};var A="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function D(n){function t(t){var e=g({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=A,t.render=t,t.prototype.isReactComponent=t.__f=true,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var F=l$2.__e;l$2.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);F(n,t,e,r);};var U=l$2.unmount;function V(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),null!=(n=g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c.__e=true,n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return V(n,t,e)})),n}function W(n,t,e){return n&&e&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return W(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.appendChild(n.__e),n.__c.__e=true,n.__c.__P=e)),n}function P(){this.__u=0,this.o=null,this.__b=null;}function j(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function B(){this.i=null,this.l=null;}l$2.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&32&n.__u&&(n.type=null),U&&U(n);},(P.prototype=new x).__c=function(n,t){var e=t.__c,r=this;null==r.o&&(r.o=[]),r.o.push(e);var u=j(r.__v),o=false,i=function(){o||(o=true,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=W(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.o.pop();)t.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},P.prototype.componentWillUnmount=function(){this.o=[];},P.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=V(this.__b,r,o.__O=o.__P);}this.__b=null;}var i=e.__a&&_$1(k$1,null,n.fallback);return i&&(i.__u&=-33),[_$1(k$1,null,e.__a?null:n.children),i]};var H=function(n,t,e){if(++e[1]===e[0]&&n.l.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.l.size))for(e=n.i;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.i=e=e[2];}};(B.prototype=new x).__a=function(n){var t=this,e=j(t.__v),r=t.l.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),H(t,n,r)):u();};e?e(o):o();}},B.prototype.render=function(n){this.i=null,this.l=new Map;var t=H$1(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.l.set(t[e],this.i=[1,0,this.i]);return n.children},B.prototype.componentDidUpdate=B.prototype.componentDidMount=function(){var n=this;this.l.forEach(function(t,e){H(n,e,t);});};var q="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,G=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,J=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,K=/[A-Z0-9]/g,Q="undefined"!=typeof document,X=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};x.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(x.prototype,t,{configurable:true,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:true,writable:true,value:n});}});});var en=l$2.event;function rn(){}function un(){return this.cancelBubble}function on(){return this.defaultPrevented}l$2.event=function(n){return en&&(n=en(n)),n.persist=rn,n.isPropagationStopped=un,n.isDefaultPrevented=on,n.nativeEvent=n};var cn={enumerable:false,configurable:true,get:function(){return this.class}},fn=l$2.vnode;l$2.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={},o=-1===e.indexOf("-");for(var i in t){var l=t[i];if(!("value"===i&&"defaultValue"in t&&null==l||Q&&"children"===i&&"noscript"===e||"class"===i||"className"===i)){var c=i.toLowerCase();"defaultValue"===i&&"value"in t&&null==t.value?i="value":"download"===i&&true===l?l="":"translate"===c&&"no"===l?l=false:"o"===c[0]&&"n"===c[1]?"ondoubleclick"===c?i="ondblclick":"onchange"!==c||"input"!==e&&"textarea"!==e||X(t.type)?"onfocus"===c?i="onfocusin":"onblur"===c?i="onfocusout":J.test(i)&&(i=c):c=i="oninput":o&&G.test(i)?i=i.replace(K,"-$&").toLowerCase():null===l&&(l=void 0),"oninput"===c&&u[i=c]&&(i="oninputCapture"),u[i]=l;}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=H$1(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value);})),"select"==e&&null!=u.defaultValue&&(u.value=H$1(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value;})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",cn)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u;}(n),n.$$typeof=q,fn&&fn(n);};var an=l$2.__r;l$2.__r=function(n){an&&an(n),n.__c;};var sn=l$2.diffed;l$2.diffed=function(n){sn&&sn(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value);};

  // Setup goober with Preact
  m(_$1);
  // forwardRefを使用してrefを受け取れるようにする
  const Widget = D(({ config }, ref) => {
      const [state, setState] = d$1({
          isOpen: config.displayMode === 'fullscreen', // Auto-open in fullscreen mode
          currentMode: 'ask-ai',
          messages: [],
          isLoading: false,
          streamingContent: '',
          error: null,
          boostMode: false, // Will be updated when server config loads
          showIntro: true,
          metadataFilters: null,
      });
      const { isValid, error: authError, config: serverConfig } = useAuth(config.chatflowId);
      // Merge server config with client config (server config takes precedence)
      const finalConfig = serverConfig ? {
          ...config,
          introTitle: serverConfig.introTitle,
          introMessage: serverConfig.introMessage,
          exampleQuestions: serverConfig.exampleQuestions,
          theme: serverConfig.theme,
          position: serverConfig.position,
          primaryColor: serverConfig.primaryColor,
          defaultBoostMode: serverConfig.defaultBoostMode,
          allowBoostModeToggle: serverConfig.allowBoostModeToggle,
          displayMode: config.displayMode, // Keep the original displayMode from config
      } : config;
      const theme = getTheme(finalConfig.theme || 'light', finalConfig.primaryColor);
      const { messages, sendMessage, isLoading, streamingContent, error: chatError, currentState, sessionId, submitFeedback, clearChat } = useChat(config.chatflowId);
      // Update state when chat hook values change
      y(() => {
          // Debug state updates from chat hook
          console.log('[AskDona] Widget state update from chat hook:', {
              messagesCount: messages.length,
              isLoading,
              streamingContentLength: (streamingContent === null || streamingContent === void 0 ? void 0 : streamingContent.length) || 0,
              streamingPreview: streamingContent ? streamingContent.substring(0, 50) + '...' : 'empty',
              hasError: !!(authError || chatError)
          });
          setState(prev => ({
              ...prev,
              messages,
              isLoading,
              streamingContent,
              error: authError || chatError,
              showIntro: messages.length === 0 ? prev.showIntro : false,
          }));
      }, [messages, isLoading, streamingContent, authError, chatError]);
      // Update boost mode when server config loads
      y(() => {
          if (serverConfig && state.boostMode !== serverConfig.defaultBoostMode) {
              setState(prev => ({
                  ...prev,
                  boostMode: serverConfig.defaultBoostMode,
              }));
          }
      }, [serverConfig]);
      // Expose methods via ref
      F$1(ref, () => ({
          open: () => {
              setState(prev => ({ ...prev, isOpen: true }));
              console.log('[AskDona] Widget opened');
          },
          close: () => {
              setState(prev => ({ ...prev, isOpen: false }));
              console.log('[AskDona] Widget closed');
          },
          sendMessage: (message) => {
              setState(prev => ({ ...prev, isOpen: true }));
              sendMessage(message);
              console.log('[AskDona] Message sent:', message);
          },
      }), [sendMessage]);
      // Apply theme CSS variables to widget container
      const containerRef = A$1(null);
      y(() => {
          if (!containerRef.current)
              return;
          const container = containerRef.current;
          // Set CSS variables on the widget container itself
          container.style.setProperty('--askdona-primary', theme.colors.primary);
          container.style.setProperty('--askdona-primary-dark', theme.colors.primaryDark);
          container.style.setProperty('--askdona-primary-light', theme.colors.primaryLight);
          container.style.setProperty('--askdona-background', theme.colors.background);
          container.style.setProperty('--askdona-surface', theme.colors.surface);
          container.style.setProperty('--askdona-text', theme.colors.text);
          container.style.setProperty('--askdona-text-secondary', theme.colors.textSecondary);
          container.style.setProperty('--askdona-border', theme.colors.border);
          container.style.setProperty('--askdona-error', theme.colors.error);
          container.style.setProperty('--askdona-success', theme.colors.success);
          // Set font
          container.style.setProperty('--askdona-font-base', theme.fonts.base);
          container.style.setProperty('--askdona-font-mono', theme.fonts.mono);
          // Set additional styling variables
          container.style.setProperty('--askdona-bg-secondary', theme.colors.surface);
          container.style.setProperty('--askdona-bg-hover', theme.colors.primaryLight + '20');
          container.style.setProperty('--askdona-surface-color', theme.colors.background);
          container.style.setProperty('--askdona-border-color', theme.colors.border);
      }, [theme]);
      if (!isValid) {
          console.error('[AskDona] Authentication failed:', authError);
          return null;
      }
      const handleOpen = () => {
          setState(prev => ({ ...prev, isOpen: true }));
      };
      const handleClose = () => {
          // Don't allow closing in fullscreen mode unless explicitly allowed
          if (finalConfig.displayMode !== 'fullscreen') {
              setState(prev => ({ ...prev, isOpen: false }));
          }
      };
      const handleModeSwitch = (mode) => {
          setState(prev => ({ ...prev, currentMode: mode }));
      };
      const handleSendMessage = (message, boostMode, metadataFilters) => {
          sendMessage(message, boostMode !== undefined ? boostMode : state.boostMode, metadataFilters || state.metadataFilters);
          setState(prev => ({ ...prev, showIntro: false }));
      };
      const handleBoostModeChange = (enabled) => {
          setState(prev => ({ ...prev, boostMode: enabled }));
      };
      const handleClearChat = () => {
          clearChat();
          setState(prev => ({ ...prev, showIntro: true }));
      };
      const handleMetadataFiltersChange = (filters) => {
          setState(prev => ({ ...prev, metadataFilters: filters }));
      };
      return (u$2("div", { ref: containerRef, style: {
              fontFamily: 'var(--askdona-font-base)',
              color: 'var(--askdona-text)',
          }, children: [!state.isOpen && finalConfig.displayMode !== 'fullscreen' && (u$2(LauncherButton, { onClick: handleOpen, position: finalConfig.position || 'bottom-right' })), (state.isOpen || finalConfig.displayMode === 'fullscreen') && (u$2(Modal, { isOpen: state.isOpen || finalConfig.displayMode === 'fullscreen', onClose: handleClose, currentMode: state.currentMode, onModeSwitch: handleModeSwitch, messages: state.messages, isLoading: state.isLoading, streamingContent: state.streamingContent, onSendMessage: handleSendMessage, error: state.error, config: finalConfig, currentState: currentState, boostMode: state.boostMode, onBoostModeChange: handleBoostModeChange, sessionId: sessionId, onFeedbackSubmit: submitFeedback, onClearChat: handleClearChat, showIntro: state.showIntro, displayMode: finalConfig.displayMode || 'modal', metadataFilters: state.metadataFilters, onMetadataFiltersChange: handleMetadataFiltersChange }))] }));
  });
  // Display name for debugging
  Widget.displayName = 'Widget';

  // Generate unique ID
  // Validate configuration
  function validateConfig(config) {
      if (!config.chatflowId) {
          return {
              isValid: false,
              error: 'chatflowId is required',
          };
      }
      if (config.theme && !['light', 'dark', 'auto'].includes(config.theme)) {
          return {
              isValid: false,
              error: 'Invalid theme. Must be "light", "dark", or "auto"',
          };
      }
      if (config.position && !['bottom-right', 'bottom-left'].includes(config.position)) {
          return {
              isValid: false,
              error: 'Invalid position. Must be "bottom-right" or "bottom-left"',
          };
      }
      if (config.language && !['ja', 'en'].includes(config.language)) {
          return {
              isValid: false,
              error: 'Invalid language. Must be "ja" or "en"',
          };
      }
      return { isValid: true };
  }
  // Inject base styles
  function injectStyles() {
      const styleId = 'askdona-widget-styles';
      // Check if styles already exist
      if (document.getElementById(styleId)) {
          return;
      }
      // Preload Instrument Serif font with preconnect for better performance
      const fontId = 'askdona-font-preload';
      if (!document.getElementById(fontId)) {
          // Preconnect to Google Fonts
          const preconnect1 = document.createElement('link');
          preconnect1.rel = 'preconnect';
          preconnect1.href = 'https://fonts.googleapis.com';
          document.head.appendChild(preconnect1);
          const preconnect2 = document.createElement('link');
          preconnect2.rel = 'preconnect';
          preconnect2.href = 'https://fonts.gstatic.com';
          preconnect2.crossOrigin = 'anonymous';
          document.head.appendChild(preconnect2);
          // Preload specific font files
          const preload = document.createElement('link');
          preload.id = fontId;
          preload.rel = 'preload';
          preload.as = 'style';
          preload.href = 'https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block';
          document.head.appendChild(preload);
          // Load stylesheet
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block';
          document.head.appendChild(link);
      }
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
    /* Load Instrument Serif directly in CSS to prevent FOUT */
    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;600&display=block');
    
    #askdona-widget-container {
      position: relative;
      z-index: 999999;
    }
    
    #askdona-widget-container * {
      box-sizing: border-box;
    }
    
    #askdona-widget-container *::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    
    #askdona-widget-container *::-webkit-scrollbar-track {
      background: transparent;
    }
    
    #askdona-widget-container *::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 3px;
    }
    
    #askdona-widget-container *::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.3);
    }
    
    @media (prefers-reduced-motion: reduce) {
      #askdona-widget-container * {
        animation: none !important;
        transition: none !important;
      }
    }
  `;
      document.head.appendChild(style);
  }

  // Global instance management
  let widgetRef = b();
  // Main initialization function
  async function init(config) {
      try {
          // Validate configuration
          const validationResult = validateConfig(config);
          if (!validationResult.isValid) {
              throw new Error(validationResult.error);
          }
          // Setup security
          setupSecurityHeaders();
          // Fetch embed configuration from API
          let embedConfig = null;
          try {
              embedConfig = await getEmbedConfig(config.chatflowId);
          }
          catch (error) {
              console.warn('[AskDona] Failed to fetch embed config, using defaults:', error);
          }
          // Merge dynamic configuration with provided config
          let enhancedConfig = { ...config };
          if (embedConfig === null || embedConfig === void 0 ? void 0 : embedConfig.embedConfig) {
              const introSettings = embedConfig.embedConfig.introTitle && embedConfig.embedConfig.introMessage
                  ? { title: embedConfig.embedConfig.introTitle, message: embedConfig.embedConfig.introMessage }
                  : null;
              if (introSettings) {
                  enhancedConfig.introTitle = introSettings.title;
                  enhancedConfig.introMessage = introSettings.message;
              }
              if (embedConfig.embedConfig.exampleQuestions) {
                  enhancedConfig.exampleQuestions = embedConfig.embedConfig.exampleQuestions;
              }
              // Update feature flags from embed config
              if (embedConfig.embedConfig.featureFlags) {
                  enhancedConfig.defaultBoostMode = embedConfig.embedConfig.featureFlags.enableBoostMode;
                  enhancedConfig.allowBoostModeToggle = embedConfig.embedConfig.featureFlags.allowBoostModeToggle;
                  enhancedConfig.enableRagDeepResearch = embedConfig.embedConfig.featureFlags.enableRagDeepResearch;
              }
              // Update appearance settings if not already set
              if (embedConfig.embedConfig.appearanceSettings) {
                  if (!enhancedConfig.primaryColor && embedConfig.embedConfig.appearanceSettings.primaryColor) {
                      enhancedConfig.primaryColor = embedConfig.embedConfig.appearanceSettings.primaryColor;
                  }
                  if (!enhancedConfig.theme && embedConfig.embedConfig.appearanceSettings.theme) {
                      enhancedConfig.theme = embedConfig.embedConfig.appearanceSettings.theme;
                  }
                  if (!enhancedConfig.position && embedConfig.embedConfig.appearanceSettings.position) {
                      enhancedConfig.position = embedConfig.embedConfig.appearanceSettings.position;
                  }
                  if (!enhancedConfig.displayMode && embedConfig.embedConfig.appearanceSettings.displayMode) {
                      enhancedConfig.displayMode = embedConfig.embedConfig.appearanceSettings.displayMode;
                  }
              }
          }
          // Create container if not exists
          let container = document.getElementById('askdona-widget-container');
          if (!container) {
              container = document.createElement('div');
              container.id = 'askdona-widget-container';
              document.body.appendChild(container);
          }
          // Inject base styles
          injectStyles();
          // Apply custom CSS if provided
          if (enhancedConfig.customCSS) {
              const styleTag = document.createElement('link');
              styleTag.rel = 'stylesheet';
              styleTag.href = enhancedConfig.customCSS;
              document.head.appendChild(styleTag);
          }
          // Render widget with enhanced config
          E$1(u$2(Widget, { ref: widgetRef, config: enhancedConfig }), container);
          // Call ready callback
          if (enhancedConfig.onReady) {
              // Slight delay to ensure ref is set
              setTimeout(() => {
                  if (enhancedConfig.onReady) {
                      enhancedConfig.onReady();
                  }
              }, 0);
          }
          // Log initialization in debug mode
          if (enhancedConfig.debug) {
              console.log('[AskDona] Widget initialized with enhanced config:', enhancedConfig);
              console.log('[AskDona] Widget ref:', widgetRef.current);
          }
      }
      catch (error) {
          console.error('[AskDona] Initialization error:', error);
          if (config.onError) {
              config.onError(error);
          }
      }
  }
  // Destroy widget
  function destroy() {
      const container = document.getElementById('askdona-widget-container');
      if (container) {
          E$1(null, container);
          container.remove();
      }
      widgetRef = b();
  }
  // Open widget programmatically
  function open() {
      if (widgetRef.current) {
          widgetRef.current.open();
      }
      else {
          console.warn('[AskDona] Widget not initialized');
      }
  }
  // Close widget programmatically
  function close() {
      if (widgetRef.current) {
          widgetRef.current.close();
      }
      else {
          console.warn('[AskDona] Widget not initialized');
      }
  }
  // Send message programmatically
  function sendMessage(message) {
      if (widgetRef.current) {
          widgetRef.current.sendMessage(message);
      }
      else {
          console.warn('[AskDona] Widget not initialized');
      }
  }
  // Auto-initialize if script tag has data attributes
  if (typeof window !== 'undefined') {
      const script = document.currentScript;
      if (script && script.dataset.chatflowId) {
          window.addEventListener('DOMContentLoaded', async () => {
              const chatflowId = script.dataset.chatflowId;
              // Only initialize if chatflowId is provided
              if (!chatflowId) {
                  console.error('[AskDona] chatflowId is required');
                  return;
              }
              try {
                  await init({
                      chatflowId,
                      theme: script.dataset.theme,
                      position: script.dataset.position,
                      primaryColor: script.dataset.primaryColor,
                      language: script.dataset.language,
                      displayMode: script.dataset.displayMode,
                  });
              }
              catch (error) {
                  console.error('[AskDona] Auto-initialization failed:', error);
              }
          });
      }
  }
  // Global API
  window.AskDona = {
      init,
      destroy,
      open,
      close,
      sendMessage,
  };

  exports.close = close;
  exports.destroy = destroy;
  exports.init = init;
  exports.open = open;
  exports.sendMessage = sendMessage;

  return exports;

})({});
//# sourceMappingURL=askdona-widget.js.map
