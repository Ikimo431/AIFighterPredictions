(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();function wo(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}const We={},ci=[],Jt=()=>{},hh=()=>!1,us=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),bo=e=>e.startsWith("onUpdate:"),st=Object.assign,vo=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},sb=Object.prototype.hasOwnProperty,Ne=(e,t)=>sb.call(e,t),ye=Array.isArray,pi=e=>ln(e)==="[object Map]",ls=e=>ln(e)==="[object Set]",ed=e=>ln(e)==="[object Date]",Se=e=>typeof e=="function",Ze=e=>typeof e=="string",er=e=>typeof e=="symbol",He=e=>e!==null&&typeof e=="object",mh=e=>(He(e)||Se(e))&&Se(e.then)&&Se(e.catch),gh=Object.prototype.toString,ln=e=>gh.call(e),ab=e=>ln(e).slice(8,-1),yh=e=>ln(e)==="[object Object]",$o=e=>Ze(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Hi=wo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ds=e=>{const t=Object.create(null);return(r=>t[r]||(t[r]=e(r)))},ob=/-\w/g,Or=ds(e=>e.replace(ob,t=>t.slice(1).toUpperCase())),ub=/\B([A-Z])/g,ri=ds(e=>e.replace(ub,"-$1").toLowerCase()),_h=ds(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ls=ds(e=>e?`on${_h(e)}`:""),zr=(e,t)=>!Object.is(e,t),Wn=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},wh=(e,t,r,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:r})},cs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let td;const ps=()=>td||(td=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xr(e){if(ye(e)){const t={};for(let r=0;r<e.length;r++){const i=e[r],n=Ze(i)?pb(i):Xr(i);if(n)for(const s in n)t[s]=n[s]}return t}else if(Ze(e)||He(e))return e}const lb=/;(?![^(]*\))/g,db=/:([^]+)/,cb=/\/\*[^]*?\*\//g;function pb(e){const t={};return e.replace(cb,"").split(lb).forEach(r=>{if(r){const i=r.split(db);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function xo(e){let t="";if(Ze(e))t=e;else if(ye(e))for(let r=0;r<e.length;r++){const i=xo(e[r]);i&&(t+=i+" ")}else if(He(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const fb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hb=wo(fb);function bh(e){return!!e||e===""}function mb(e,t){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=mi(e[i],t[i]);return r}function mi(e,t){if(e===t)return!0;let r=ed(e),i=ed(t);if(r||i)return r&&i?e.getTime()===t.getTime():!1;if(r=er(e),i=er(t),r||i)return e===t;if(r=ye(e),i=ye(t),r||i)return r&&i?mb(e,t):!1;if(r=He(e),i=He(t),r||i){if(!r||!i)return!1;const n=Object.keys(e).length,s=Object.keys(t).length;if(n!==s)return!1;for(const a in e){const o=e.hasOwnProperty(a),u=t.hasOwnProperty(a);if(o&&!u||!o&&u||!mi(e[a],t[a]))return!1}}return String(e)===String(t)}function gb(e,t){return e.findIndex(r=>mi(r,t))}const vh=e=>!!(e&&e.__v_isRef===!0),Ji=e=>Ze(e)?e:e==null?"":ye(e)||He(e)&&(e.toString===gh||!Se(e.toString))?vh(e)?Ji(e.value):JSON.stringify(e,$h,2):String(e),$h=(e,t)=>vh(t)?$h(e,t.value):pi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[i,n],s)=>(r[Ws(i,s)+" =>"]=n,r),{})}:ls(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>Ws(r))}:er(t)?Ws(t):He(t)&&!ye(t)&&!yh(t)?String(t):t,Ws=(e,t="")=>{var r;return er(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};let _t;class yb{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_t,!t&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].pause();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].resume();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].resume()}}run(t){if(this._active){const r=_t;try{return _t=this,t()}finally{_t=r}}}on(){++this._on===1&&(this.prevScope=_t,_t=this)}off(){this._on>0&&--this._on===0&&(_t=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let r,i;for(r=0,i=this.effects.length;r<i;r++)this.effects[r].stop();for(this.effects.length=0,r=0,i=this.cleanups.length;r<i;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,i=this.scopes.length;r<i;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function _b(){return _t}let qe;const qs=new WeakSet;class xh{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_t&&_t.active&&_t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qs.has(this)&&(qs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Th(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rd(this),Ih(this);const t=qe,r=Vt;qe=this,Vt=!0;try{return this.fn()}finally{Ch(this),qe=t,Vt=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Io(t);this.deps=this.depsTail=void 0,rd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ga(this)&&this.run()}get dirty(){return Ga(this)}}let Sh=0,Gi,Fi;function Th(e,t=!1){if(e.flags|=8,t){e.next=Fi,Fi=e;return}e.next=Gi,Gi=e}function So(){Sh++}function To(){if(--Sh>0)return;if(Fi){let t=Fi;for(Fi=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;Gi;){let t=Gi;for(Gi=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=r}}if(e)throw e}function Ih(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ch(e){let t,r=e.depsTail,i=r;for(;i;){const n=i.prevDep;i.version===-1?(i===r&&(r=n),Io(i),wb(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=n}e.deps=t,e.depsTail=r}function Ga(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Eh(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Eh(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===en)||(e.globalVersion=en,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ga(e))))return;e.flags|=2;const t=e.dep,r=qe,i=Vt;qe=e,Vt=!0;try{Ih(e);const n=e.fn(e._value);(t.version===0||zr(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(n){throw t.version++,n}finally{qe=r,Vt=i,Ch(e),e.flags&=-3}}function Io(e,t=!1){const{dep:r,prevSub:i,nextSub:n}=e;if(i&&(i.nextSub=n,e.prevSub=void 0),n&&(n.prevSub=i,e.nextSub=void 0),r.subs===e&&(r.subs=i,!i&&r.computed)){r.computed.flags&=-5;for(let s=r.computed.deps;s;s=s.nextDep)Io(s,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function wb(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}let Vt=!0;const kh=[];function hr(){kh.push(Vt),Vt=!1}function mr(){const e=kh.pop();Vt=e===void 0?!0:e}function rd(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=qe;qe=void 0;try{t()}finally{qe=r}}}let en=0;class bb{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Co{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!qe||!Vt||qe===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==qe)r=this.activeLink=new bb(qe,this),qe.deps?(r.prevDep=qe.depsTail,qe.depsTail.nextDep=r,qe.depsTail=r):qe.deps=qe.depsTail=r,Ah(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const i=r.nextDep;i.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=i),r.prevDep=qe.depsTail,r.nextDep=void 0,qe.depsTail.nextDep=r,qe.depsTail=r,qe.deps===r&&(qe.deps=i)}return r}trigger(t){this.version++,en++,this.notify(t)}notify(t){So();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{To()}}}function Ah(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Ah(i)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const Fa=new WeakMap,Kr=Symbol(""),ja=Symbol(""),tn=Symbol("");function dt(e,t,r){if(Vt&&qe){let i=Fa.get(e);i||Fa.set(e,i=new Map);let n=i.get(r);n||(i.set(r,n=new Co),n.map=i,n.key=r),n.track()}}function lr(e,t,r,i,n,s){const a=Fa.get(e);if(!a){en++;return}const o=u=>{u&&u.trigger()};if(So(),t==="clear")a.forEach(o);else{const u=ye(e),d=u&&$o(r);if(u&&r==="length"){const c=Number(i);a.forEach((f,m)=>{(m==="length"||m===tn||!er(m)&&m>=c)&&o(f)})}else switch((r!==void 0||a.has(void 0))&&o(a.get(r)),d&&o(a.get(tn)),t){case"add":u?d&&o(a.get("length")):(o(a.get(Kr)),pi(e)&&o(a.get(ja)));break;case"delete":u||(o(a.get(Kr)),pi(e)&&o(a.get(ja)));break;case"set":pi(e)&&o(a.get(Kr));break}}To()}function ai(e){const t=Be(e);return t===e?t:(dt(t,"iterate",tn),zt(e)?t:t.map(Gt))}function fs(e){return dt(e=Be(e),"iterate",tn),e}function Ir(e,t){return gr(e)?gi(Qr(e)?Gt(t):t):Gt(t)}const vb={__proto__:null,[Symbol.iterator](){return Vs(this,Symbol.iterator,e=>Ir(this,e))},concat(...e){return ai(this).concat(...e.map(t=>ye(t)?ai(t):t))},entries(){return Vs(this,"entries",e=>(e[1]=Ir(this,e[1]),e))},every(e,t){return sr(this,"every",e,t,void 0,arguments)},filter(e,t){return sr(this,"filter",e,t,r=>r.map(i=>Ir(this,i)),arguments)},find(e,t){return sr(this,"find",e,t,r=>Ir(this,r),arguments)},findIndex(e,t){return sr(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return sr(this,"findLast",e,t,r=>Ir(this,r),arguments)},findLastIndex(e,t){return sr(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return sr(this,"forEach",e,t,void 0,arguments)},includes(...e){return Hs(this,"includes",e)},indexOf(...e){return Hs(this,"indexOf",e)},join(e){return ai(this).join(e)},lastIndexOf(...e){return Hs(this,"lastIndexOf",e)},map(e,t){return sr(this,"map",e,t,void 0,arguments)},pop(){return Ii(this,"pop")},push(...e){return Ii(this,"push",e)},reduce(e,...t){return id(this,"reduce",e,t)},reduceRight(e,...t){return id(this,"reduceRight",e,t)},shift(){return Ii(this,"shift")},some(e,t){return sr(this,"some",e,t,void 0,arguments)},splice(...e){return Ii(this,"splice",e)},toReversed(){return ai(this).toReversed()},toSorted(e){return ai(this).toSorted(e)},toSpliced(...e){return ai(this).toSpliced(...e)},unshift(...e){return Ii(this,"unshift",e)},values(){return Vs(this,"values",e=>Ir(this,e))}};function Vs(e,t,r){const i=fs(e),n=i[t]();return i!==e&&!zt(e)&&(n._next=n.next,n.next=()=>{const s=n._next();return s.done||(s.value=r(s.value)),s}),n}const $b=Array.prototype;function sr(e,t,r,i,n,s){const a=fs(e),o=a!==e&&!zt(e),u=a[t];if(u!==$b[t]){const f=u.apply(e,s);return o?Gt(f):f}let d=r;a!==e&&(o?d=function(f,m){return r.call(this,Ir(e,f),m,e)}:r.length>2&&(d=function(f,m){return r.call(this,f,m,e)}));const c=u.call(a,d,i);return o&&n?n(c):c}function id(e,t,r,i){const n=fs(e);let s=r;return n!==e&&(zt(e)?r.length>3&&(s=function(a,o,u){return r.call(this,a,o,u,e)}):s=function(a,o,u){return r.call(this,a,Ir(e,o),u,e)}),n[t](s,...i)}function Hs(e,t,r){const i=Be(e);dt(i,"iterate",tn);const n=i[t](...r);return(n===-1||n===!1)&&zo(r[0])?(r[0]=Be(r[0]),i[t](...r)):n}function Ii(e,t,r=[]){hr(),So();const i=Be(e)[t].apply(e,r);return To(),mr(),i}const xb=wo("__proto__,__v_isRef,__isVue"),zh=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(er));function Sb(e){er(e)||(e=String(e));const t=Be(this);return dt(t,"has",e),t.hasOwnProperty(e)}class Oh{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,i){if(r==="__v_skip")return t.__v_skip;const n=this._isReadonly,s=this._isShallow;if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return s;if(r==="__v_raw")return i===(n?s?Mb:Nh:s?Bh:Mh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=ye(t);if(!n){let u;if(a&&(u=vb[r]))return u;if(r==="hasOwnProperty")return Sb}const o=Reflect.get(t,r,ct(t)?t:i);if((er(r)?zh.has(r):xb(r))||(n||dt(t,"get",r),s))return o;if(ct(o)){const u=a&&$o(r)?o:o.value;return n&&He(u)?Qa(u):u}return He(o)?n?Qa(o):ko(o):o}}class Rh extends Oh{constructor(t=!1){super(!1,t)}set(t,r,i,n){let s=t[r];const a=ye(t)&&$o(r);if(!this._isShallow){const d=gr(s);if(!zt(i)&&!gr(i)&&(s=Be(s),i=Be(i)),!a&&ct(s)&&!ct(i))return d||(s.value=i),!0}const o=a?Number(r)<t.length:Ne(t,r),u=Reflect.set(t,r,i,ct(t)?t:n);return t===Be(n)&&(o?zr(i,s)&&lr(t,"set",r,i):lr(t,"add",r,i)),u}deleteProperty(t,r){const i=Ne(t,r);t[r];const n=Reflect.deleteProperty(t,r);return n&&i&&lr(t,"delete",r,void 0),n}has(t,r){const i=Reflect.has(t,r);return(!er(r)||!zh.has(r))&&dt(t,"has",r),i}ownKeys(t){return dt(t,"iterate",ye(t)?"length":Kr),Reflect.ownKeys(t)}}class Tb extends Oh{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const Ib=new Rh,Cb=new Tb,Eb=new Rh(!0);const Ka=e=>e,Sn=e=>Reflect.getPrototypeOf(e);function kb(e,t,r){return function(...i){const n=this.__v_raw,s=Be(n),a=pi(s),o=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,d=n[e](...i),c=r?Ka:t?gi:Gt;return!t&&dt(s,"iterate",u?ja:Kr),st(Object.create(d),{next(){const{value:f,done:m}=d.next();return m?{value:f,done:m}:{value:o?[c(f[0]),c(f[1])]:c(f),done:m}}})}}function Tn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ab(e,t){const r={get(n){const s=this.__v_raw,a=Be(s),o=Be(n);e||(zr(n,o)&&dt(a,"get",n),dt(a,"get",o));const{has:u}=Sn(a),d=t?Ka:e?gi:Gt;if(u.call(a,n))return d(s.get(n));if(u.call(a,o))return d(s.get(o));s!==a&&s.get(n)},get size(){const n=this.__v_raw;return!e&&dt(Be(n),"iterate",Kr),n.size},has(n){const s=this.__v_raw,a=Be(s),o=Be(n);return e||(zr(n,o)&&dt(a,"has",n),dt(a,"has",o)),n===o?s.has(n):s.has(n)||s.has(o)},forEach(n,s){const a=this,o=a.__v_raw,u=Be(o),d=t?Ka:e?gi:Gt;return!e&&dt(u,"iterate",Kr),o.forEach((c,f)=>n.call(s,d(c),d(f),a))}};return st(r,e?{add:Tn("add"),set:Tn("set"),delete:Tn("delete"),clear:Tn("clear")}:{add(n){!t&&!zt(n)&&!gr(n)&&(n=Be(n));const s=Be(this);return Sn(s).has.call(s,n)||(s.add(n),lr(s,"add",n,n)),this},set(n,s){!t&&!zt(s)&&!gr(s)&&(s=Be(s));const a=Be(this),{has:o,get:u}=Sn(a);let d=o.call(a,n);d||(n=Be(n),d=o.call(a,n));const c=u.call(a,n);return a.set(n,s),d?zr(s,c)&&lr(a,"set",n,s):lr(a,"add",n,s),this},delete(n){const s=Be(this),{has:a,get:o}=Sn(s);let u=a.call(s,n);u||(n=Be(n),u=a.call(s,n)),o&&o.call(s,n);const d=s.delete(n);return u&&lr(s,"delete",n,void 0),d},clear(){const n=Be(this),s=n.size!==0,a=n.clear();return s&&lr(n,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(n=>{r[n]=kb(n,e,t)}),r}function Eo(e,t){const r=Ab(e,t);return(i,n,s)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?i:Reflect.get(Ne(r,n)&&n in i?r:i,n,s)}const zb={get:Eo(!1,!1)},Ob={get:Eo(!1,!0)},Rb={get:Eo(!0,!1)};const Mh=new WeakMap,Bh=new WeakMap,Nh=new WeakMap,Mb=new WeakMap;function Bb(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nb(e){return e.__v_skip||!Object.isExtensible(e)?0:Bb(ab(e))}function ko(e){return gr(e)?e:Ao(e,!1,Ib,zb,Mh)}function Db(e){return Ao(e,!1,Eb,Ob,Bh)}function Qa(e){return Ao(e,!0,Cb,Rb,Nh)}function Ao(e,t,r,i,n){if(!He(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=Nb(e);if(s===0)return e;const a=n.get(e);if(a)return a;const o=new Proxy(e,s===2?i:r);return n.set(e,o),o}function Qr(e){return gr(e)?Qr(e.__v_raw):!!(e&&e.__v_isReactive)}function gr(e){return!!(e&&e.__v_isReadonly)}function zt(e){return!!(e&&e.__v_isShallow)}function zo(e){return e?!!e.__v_raw:!1}function Be(e){const t=e&&e.__v_raw;return t?Be(t):e}function Pb(e){return!Ne(e,"__v_skip")&&Object.isExtensible(e)&&wh(e,"__v_skip",!0),e}const Gt=e=>He(e)?ko(e):e,gi=e=>He(e)?Qa(e):e;function ct(e){return e?e.__v_isRef===!0:!1}function Ge(e){return Ub(e,!1)}function Ub(e,t){return ct(e)?e:new Lb(e,t)}class Lb{constructor(t,r){this.dep=new Co,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?t:Be(t),this._value=r?t:Gt(t),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(t){const r=this._rawValue,i=this.__v_isShallow||zt(t)||gr(t);t=i?t:Be(t),zr(t,r)&&(this._rawValue=t,this._value=i?t:Gt(t),this.dep.trigger())}}function Wb(e){return ct(e)?e.value:e}const qb={get:(e,t,r)=>t==="__v_raw"?e:Wb(Reflect.get(e,t,r)),set:(e,t,r,i)=>{const n=e[t];return ct(n)&&!ct(r)?(n.value=r,!0):Reflect.set(e,t,r,i)}};function Dh(e){return Qr(e)?e:new Proxy(e,qb)}class Vb{constructor(t,r,i){this.fn=t,this.setter=r,this._value=void 0,this.dep=new Co(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=en-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&qe!==this)return Th(this,!0),!0}get value(){const t=this.dep.track();return Eh(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Hb(e,t,r=!1){let i,n;return Se(e)?i=e:(i=e.get,n=e.set),new Vb(i,n,r)}const In={},Kn=new WeakMap;let Hr;function Gb(e,t=!1,r=Hr){if(r){let i=Kn.get(r);i||Kn.set(r,i=[]),i.push(e)}}function Fb(e,t,r=We){const{immediate:i,deep:n,once:s,scheduler:a,augmentJob:o,call:u}=r,d=S=>n?S:zt(S)||n===!1||n===0?dr(S,1):dr(S);let c,f,m,y,_=!1,w=!1;if(ct(e)?(f=()=>e.value,_=zt(e)):Qr(e)?(f=()=>d(e),_=!0):ye(e)?(w=!0,_=e.some(S=>Qr(S)||zt(S)),f=()=>e.map(S=>{if(ct(S))return S.value;if(Qr(S))return d(S);if(Se(S))return u?u(S,2):S()})):Se(e)?t?f=u?()=>u(e,2):e:f=()=>{if(m){hr();try{m()}finally{mr()}}const S=Hr;Hr=c;try{return u?u(e,3,[y]):e(y)}finally{Hr=S}}:f=Jt,t&&n){const S=f,I=n===!0?1/0:n;f=()=>dr(S(),I)}const T=_b(),v=()=>{c.stop(),T&&T.active&&vo(T.effects,c)};if(s&&t){const S=t;t=(...I)=>{S(...I),v()}}let b=w?new Array(e.length).fill(In):In;const C=S=>{if(!(!(c.flags&1)||!c.dirty&&!S))if(t){const I=c.run();if(n||_||(w?I.some((A,z)=>zr(A,b[z])):zr(I,b))){m&&m();const A=Hr;Hr=c;try{const z=[I,b===In?void 0:w&&b[0]===In?[]:b,y];b=I,u?u(t,3,z):t(...z)}finally{Hr=A}}}else c.run()};return o&&o(C),c=new xh(f),c.scheduler=a?()=>a(C,!1):C,y=S=>Gb(S,!1,c),m=c.onStop=()=>{const S=Kn.get(c);if(S){if(u)u(S,4);else for(const I of S)I();Kn.delete(c)}},t?i?C(!0):b=c.run():a?a(C.bind(null,!0),!0):c.run(),v.pause=c.pause.bind(c),v.resume=c.resume.bind(c),v.stop=v,v}function dr(e,t=1/0,r){if(t<=0||!He(e)||e.__v_skip||(r=r||new Map,(r.get(e)||0)>=t))return e;if(r.set(e,t),t--,ct(e))dr(e.value,t,r);else if(ye(e))for(let i=0;i<e.length;i++)dr(e[i],t,r);else if(ls(e)||pi(e))e.forEach(i=>{dr(i,t,r)});else if(yh(e)){for(const i in e)dr(e[i],t,r);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&dr(e[i],t,r)}return e}function dn(e,t,r,i){try{return i?e(...i):e()}catch(n){hs(n,t,r)}}function tr(e,t,r,i){if(Se(e)){const n=dn(e,t,r,i);return n&&mh(n)&&n.catch(s=>{hs(s,t,r)}),n}if(ye(e)){const n=[];for(let s=0;s<e.length;s++)n.push(tr(e[s],t,r,i));return n}}function hs(e,t,r,i=!0){const n=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||We;if(t){let o=t.parent;const u=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${r}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,u,d)===!1)return}o=o.parent}if(s){hr(),dn(s,null,10,[e,u,d]),mr();return}}jb(e,r,n,i,a)}function jb(e,t,r,i=!0,n=!1){if(n)throw e;console.error(e)}const mt=[];let Yt=-1;const fi=[];let Cr=null,ui=0;const Ph=Promise.resolve();let Qn=null;function Uh(e){const t=Qn||Ph;return e?t.then(this?e.bind(this):e):t}function Kb(e){let t=Yt+1,r=mt.length;for(;t<r;){const i=t+r>>>1,n=mt[i],s=rn(n);s<e||s===e&&n.flags&2?t=i+1:r=i}return t}function Oo(e){if(!(e.flags&1)){const t=rn(e),r=mt[mt.length-1];!r||!(e.flags&2)&&t>=rn(r)?mt.push(e):mt.splice(Kb(t),0,e),e.flags|=1,Lh()}}function Lh(){Qn||(Qn=Ph.then(qh))}function Qb(e){ye(e)?fi.push(...e):Cr&&e.id===-1?Cr.splice(ui+1,0,e):e.flags&1||(fi.push(e),e.flags|=1),Lh()}function nd(e,t,r=Yt+1){for(;r<mt.length;r++){const i=mt[r];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;mt.splice(r,1),r--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Wh(e){if(fi.length){const t=[...new Set(fi)].sort((r,i)=>rn(r)-rn(i));if(fi.length=0,Cr){Cr.push(...t);return}for(Cr=t,ui=0;ui<Cr.length;ui++){const r=Cr[ui];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}Cr=null,ui=0}}const rn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function qh(e){try{for(Yt=0;Yt<mt.length;Yt++){const t=mt[Yt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),dn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Yt<mt.length;Yt++){const t=mt[Yt];t&&(t.flags&=-2)}Yt=-1,mt.length=0,Wh(),Qn=null,(mt.length||fi.length)&&qh()}}let At=null,Vh=null;function Zn(e){const t=At;return At=e,Vh=e&&e.type.__scopeId||null,t}function Zb(e,t=At,r){if(!t||e._n)return e;const i=(...n)=>{i._d&&hd(-1);const s=Zn(t);let a;try{a=e(...n)}finally{Zn(s),i._d&&hd(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ht(e,t){if(At===null)return e;const r=_s(At),i=e.dirs||(e.dirs=[]);for(let n=0;n<t.length;n++){let[s,a,o,u=We]=t[n];s&&(Se(s)&&(s={mounted:s,updated:s}),s.deep&&dr(a),i.push({dir:s,instance:r,value:a,oldValue:void 0,arg:o,modifiers:u}))}return e}function Pr(e,t,r,i){const n=e.dirs,s=t&&t.dirs;for(let a=0;a<n.length;a++){const o=n[a];s&&(o.oldValue=s[a].value);let u=o.dir[i];u&&(hr(),tr(u,r,8,[e.el,o,e,t]),mr())}}function Yb(e,t){if(gt){let r=gt.provides;const i=gt.parent&&gt.parent.provides;i===r&&(r=gt.provides=Object.create(i)),r[e]=t}}function qn(e,t,r=!1){const i=Yv();if(i||hi){let n=hi?hi._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(n&&e in n)return n[e];if(arguments.length>1)return r&&Se(t)?t.call(i&&i.proxy):t}}const Xb=Symbol.for("v-scx"),Jb=()=>qn(Xb);function ji(e,t,r){return Hh(e,t,r)}function Hh(e,t,r=We){const{immediate:i,deep:n,flush:s,once:a}=r,o=st({},r),u=t&&i||!t&&s!=="post";let d;if(sn){if(s==="sync"){const y=Jb();d=y.__watcherHandles||(y.__watcherHandles=[])}else if(!u){const y=()=>{};return y.stop=Jt,y.resume=Jt,y.pause=Jt,y}}const c=gt;o.call=(y,_,w)=>tr(y,c,_,w);let f=!1;s==="post"?o.scheduler=y=>{vt(y,c&&c.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(y,_)=>{_?y():Oo(y)}),o.augmentJob=y=>{t&&(y.flags|=4),f&&(y.flags|=2,c&&(y.id=c.uid,y.i=c))};const m=Fb(e,t,o);return sn&&(d?d.push(m):u&&m()),m}function ev(e,t,r){const i=this.proxy,n=Ze(e)?e.includes(".")?Gh(i,e):()=>i[e]:e.bind(i,i);let s;Se(t)?s=t:(s=t.handler,r=t);const a=cn(this),o=Hh(n,s.bind(i),r);return a(),o}function Gh(e,t){const r=t.split(".");return()=>{let i=e;for(let n=0;n<r.length&&i;n++)i=i[r[n]];return i}}const tv=Symbol("_vte"),rv=e=>e.__isTeleport,iv=Symbol("_leaveCb");function Ro(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ro(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Mo(e,t){return Se(e)?st({name:e.name},t,{setup:e}):e}function Fh(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Yn=new WeakMap;function Ki(e,t,r,i,n=!1){if(ye(e)){e.forEach((_,w)=>Ki(_,t&&(ye(t)?t[w]:t),r,i,n));return}if(Qi(i)&&!n){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ki(e,t,r,i.component.subTree);return}const s=i.shapeFlag&4?_s(i.component):i.el,a=n?null:s,{i:o,r:u}=e,d=t&&t.r,c=o.refs===We?o.refs={}:o.refs,f=o.setupState,m=Be(f),y=f===We?hh:_=>Ne(m,_);if(d!=null&&d!==u){if(sd(t),Ze(d))c[d]=null,y(d)&&(f[d]=null);else if(ct(d)){d.value=null;const _=t;_.k&&(c[_.k]=null)}}if(Se(u))dn(u,o,12,[a,c]);else{const _=Ze(u),w=ct(u);if(_||w){const T=()=>{if(e.f){const v=_?y(u)?f[u]:c[u]:u.value;if(n)ye(v)&&vo(v,s);else if(ye(v))v.includes(s)||v.push(s);else if(_)c[u]=[s],y(u)&&(f[u]=c[u]);else{const b=[s];u.value=b,e.k&&(c[e.k]=b)}}else _?(c[u]=a,y(u)&&(f[u]=a)):w&&(u.value=a,e.k&&(c[e.k]=a))};if(a){const v=()=>{T(),Yn.delete(e)};v.id=-1,Yn.set(e,v),vt(v,r)}else sd(e),T()}}}function sd(e){const t=Yn.get(e);t&&(t.flags|=8,Yn.delete(e))}ps().requestIdleCallback;ps().cancelIdleCallback;const Qi=e=>!!e.type.__asyncLoader,jh=e=>e.type.__isKeepAlive;function nv(e,t){Kh(e,"a",t)}function sv(e,t){Kh(e,"da",t)}function Kh(e,t,r=gt){const i=e.__wdc||(e.__wdc=()=>{let n=r;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(ms(t,i,r),r){let n=r.parent;for(;n&&n.parent;)jh(n.parent.vnode)&&av(i,t,r,n),n=n.parent}}function av(e,t,r,i){const n=ms(t,e,i,!0);Zh(()=>{vo(i[t],n)},r)}function ms(e,t,r=gt,i=!1){if(r){const n=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...a)=>{hr();const o=cn(r),u=tr(t,r,e,a);return o(),mr(),u});return i?n.unshift(s):n.push(s),s}}const yr=e=>(t,r=gt)=>{(!sn||e==="sp")&&ms(e,(...i)=>t(...i),r)},ov=yr("bm"),Bo=yr("m"),uv=yr("bu"),lv=yr("u"),Qh=yr("bum"),Zh=yr("um"),dv=yr("sp"),cv=yr("rtg"),pv=yr("rtc");function fv(e,t=gt){ms("ec",e,t)}const hv=Symbol.for("v-ndc");function mv(e,t,r,i){let n;const s=r,a=ye(e);if(a||Ze(e)){const o=a&&Qr(e);let u=!1,d=!1;o&&(u=!zt(e),d=gr(e),e=fs(e)),n=new Array(e.length);for(let c=0,f=e.length;c<f;c++)n[c]=t(u?d?gi(Gt(e[c])):Gt(e[c]):e[c],c,void 0,s)}else if(typeof e=="number"){n=new Array(e);for(let o=0;o<e;o++)n[o]=t(o+1,o,void 0,s)}else if(He(e))if(e[Symbol.iterator])n=Array.from(e,(o,u)=>t(o,u,void 0,s));else{const o=Object.keys(e);n=new Array(o.length);for(let u=0,d=o.length;u<d;u++){const c=o[u];n[u]=t(e[c],c,u,s)}}else n=[];return n}const Za=e=>e?gm(e)?_s(e):Za(e.parent):null,Zi=st(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Za(e.parent),$root:e=>Za(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Xh(e),$forceUpdate:e=>e.f||(e.f=()=>{Oo(e.update)}),$nextTick:e=>e.n||(e.n=Uh.bind(e.proxy)),$watch:e=>ev.bind(e)}),Gs=(e,t)=>e!==We&&!e.__isScriptSetup&&Ne(e,t),gv={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:i,data:n,props:s,accessCache:a,type:o,appContext:u}=e;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return n[t];case 4:return r[t];case 3:return s[t]}else{if(Gs(i,t))return a[t]=1,i[t];if(n!==We&&Ne(n,t))return a[t]=2,n[t];if(Ne(s,t))return a[t]=3,s[t];if(r!==We&&Ne(r,t))return a[t]=4,r[t];Ya&&(a[t]=0)}}const d=Zi[t];let c,f;if(d)return t==="$attrs"&&dt(e.attrs,"get",""),d(e);if((c=o.__cssModules)&&(c=c[t]))return c;if(r!==We&&Ne(r,t))return a[t]=4,r[t];if(f=u.config.globalProperties,Ne(f,t))return f[t]},set({_:e},t,r){const{data:i,setupState:n,ctx:s}=e;return Gs(n,t)?(n[t]=r,!0):i!==We&&Ne(i,t)?(i[t]=r,!0):Ne(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:i,appContext:n,props:s,type:a}},o){let u;return!!(r[o]||e!==We&&o[0]!=="$"&&Ne(e,o)||Gs(t,o)||Ne(s,o)||Ne(i,o)||Ne(Zi,o)||Ne(n.config.globalProperties,o)||(u=a.__cssModules)&&u[o])},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:Ne(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function ad(e){return ye(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let Ya=!0;function yv(e){const t=Xh(e),r=e.proxy,i=e.ctx;Ya=!1,t.beforeCreate&&od(t.beforeCreate,e,"bc");const{data:n,computed:s,methods:a,watch:o,provide:u,inject:d,created:c,beforeMount:f,mounted:m,beforeUpdate:y,updated:_,activated:w,deactivated:T,beforeDestroy:v,beforeUnmount:b,destroyed:C,unmounted:S,render:I,renderTracked:A,renderTriggered:z,errorCaptured:x,serverPrefetch:W,expose:G,inheritAttrs:ue,components:re,directives:ae,filters:N}=t;if(d&&_v(d,i,null),a)for(const te in a){const Z=a[te];Se(Z)&&(i[te]=Z.bind(r))}if(n){const te=n.call(r,r);He(te)&&(e.data=ko(te))}if(Ya=!0,s)for(const te in s){const Z=s[te],le=Se(Z)?Z.bind(r,r):Se(Z.get)?Z.get.bind(r,r):Jt,Te=!Se(Z)&&Se(Z.set)?Z.set.bind(r):Jt,U=i$({get:le,set:Te});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>U.value,set:K=>U.value=K})}if(o)for(const te in o)Yh(o[te],i,r,te);if(u){const te=Se(u)?u.call(r):u;Reflect.ownKeys(te).forEach(Z=>{Yb(Z,te[Z])})}c&&od(c,e,"c");function Q(te,Z){ye(Z)?Z.forEach(le=>te(le.bind(r))):Z&&te(Z.bind(r))}if(Q(ov,f),Q(Bo,m),Q(uv,y),Q(lv,_),Q(nv,w),Q(sv,T),Q(fv,x),Q(pv,A),Q(cv,z),Q(Qh,b),Q(Zh,S),Q(dv,W),ye(G))if(G.length){const te=e.exposed||(e.exposed={});G.forEach(Z=>{Object.defineProperty(te,Z,{get:()=>r[Z],set:le=>r[Z]=le,enumerable:!0})})}else e.exposed||(e.exposed={});I&&e.render===Jt&&(e.render=I),ue!=null&&(e.inheritAttrs=ue),re&&(e.components=re),ae&&(e.directives=ae),W&&Fh(e)}function _v(e,t,r=Jt){ye(e)&&(e=Xa(e));for(const i in e){const n=e[i];let s;He(n)?"default"in n?s=qn(n.from||i,n.default,!0):s=qn(n.from||i):s=qn(n),ct(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[i]=s}}function od(e,t,r){tr(ye(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,r)}function Yh(e,t,r,i){let n=i.includes(".")?Gh(r,i):()=>r[i];if(Ze(e)){const s=t[e];Se(s)&&ji(n,s)}else if(Se(e))ji(n,e.bind(r));else if(He(e))if(ye(e))e.forEach(s=>Yh(s,t,r,i));else{const s=Se(e.handler)?e.handler.bind(r):t[e.handler];Se(s)&&ji(n,s,e)}}function Xh(e){const t=e.type,{mixins:r,extends:i}=t,{mixins:n,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let u;return o?u=o:!n.length&&!r&&!i?u=t:(u={},n.length&&n.forEach(d=>Xn(u,d,a,!0)),Xn(u,t,a)),He(t)&&s.set(t,u),u}function Xn(e,t,r,i=!1){const{mixins:n,extends:s}=t;s&&Xn(e,s,r,!0),n&&n.forEach(a=>Xn(e,a,r,!0));for(const a in t)if(!(i&&a==="expose")){const o=wv[a]||r&&r[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const wv={data:ud,props:ld,emits:ld,methods:Ui,computed:Ui,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:Ui,directives:Ui,watch:vv,provide:ud,inject:bv};function ud(e,t){return t?e?function(){return st(Se(e)?e.call(this,this):e,Se(t)?t.call(this,this):t)}:t:e}function bv(e,t){return Ui(Xa(e),Xa(t))}function Xa(e){if(ye(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function ft(e,t){return e?[...new Set([].concat(e,t))]:t}function Ui(e,t){return e?st(Object.create(null),e,t):t}function ld(e,t){return e?ye(e)&&ye(t)?[...new Set([...e,...t])]:st(Object.create(null),ad(e),ad(t??{})):t}function vv(e,t){if(!e)return t;if(!t)return e;const r=st(Object.create(null),e);for(const i in t)r[i]=ft(e[i],t[i]);return r}function Jh(){return{app:null,config:{isNativeTag:hh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $v=0;function xv(e,t){return function(i,n=null){Se(i)||(i=st({},i)),n!=null&&!He(n)&&(n=null);const s=Jh(),a=new WeakSet,o=[];let u=!1;const d=s.app={_uid:$v++,_component:i,_props:n,_container:null,_context:s,_instance:null,version:n$,get config(){return s.config},set config(c){},use(c,...f){return a.has(c)||(c&&Se(c.install)?(a.add(c),c.install(d,...f)):Se(c)&&(a.add(c),c(d,...f))),d},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),d},component(c,f){return f?(s.components[c]=f,d):s.components[c]},directive(c,f){return f?(s.directives[c]=f,d):s.directives[c]},mount(c,f,m){if(!u){const y=d._ceVNode||Ot(i,n);return y.appContext=s,m===!0?m="svg":m===!1&&(m=void 0),e(y,c,m),u=!0,d._container=c,c.__vue_app__=d,_s(y.component)}},onUnmount(c){o.push(c)},unmount(){u&&(tr(o,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(c,f){return s.provides[c]=f,d},runWithContext(c){const f=hi;hi=d;try{return c()}finally{hi=f}}};return d}}let hi=null;const Sv=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Or(t)}Modifiers`]||e[`${ri(t)}Modifiers`];function Tv(e,t,...r){if(e.isUnmounted)return;const i=e.vnode.props||We;let n=r;const s=t.startsWith("update:"),a=s&&Sv(i,t.slice(7));a&&(a.trim&&(n=r.map(c=>Ze(c)?c.trim():c)),a.number&&(n=r.map(cs)));let o,u=i[o=Ls(t)]||i[o=Ls(Or(t))];!u&&s&&(u=i[o=Ls(ri(t))]),u&&tr(u,e,6,n);const d=i[o+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,tr(d,e,6,n)}}const Iv=new WeakMap;function em(e,t,r=!1){const i=r?Iv:t.emitsCache,n=i.get(e);if(n!==void 0)return n;const s=e.emits;let a={},o=!1;if(!Se(e)){const u=d=>{const c=em(d,t,!0);c&&(o=!0,st(a,c))};!r&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!s&&!o?(He(e)&&i.set(e,null),null):(ye(s)?s.forEach(u=>a[u]=null):st(a,s),He(e)&&i.set(e,a),a)}function gs(e,t){return!e||!us(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ne(e,t[0].toLowerCase()+t.slice(1))||Ne(e,ri(t))||Ne(e,t))}function dd(e){const{type:t,vnode:r,proxy:i,withProxy:n,propsOptions:[s],slots:a,attrs:o,emit:u,render:d,renderCache:c,props:f,data:m,setupState:y,ctx:_,inheritAttrs:w}=e,T=Zn(e);let v,b;try{if(r.shapeFlag&4){const S=n||i,I=S;v=Xt(d.call(I,S,c,f,y,m,_)),b=o}else{const S=t;v=Xt(S.length>1?S(f,{attrs:o,slots:a,emit:u}):S(f,null)),b=t.props?o:Cv(o)}}catch(S){Yi.length=0,hs(S,e,1),v=Ot(Rr)}let C=v;if(b&&w!==!1){const S=Object.keys(b),{shapeFlag:I}=C;S.length&&I&7&&(s&&S.some(bo)&&(b=Ev(b,s)),C=yi(C,b,!1,!0))}return r.dirs&&(C=yi(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(r.dirs):r.dirs),r.transition&&Ro(C,r.transition),v=C,Zn(T),v}const Cv=e=>{let t;for(const r in e)(r==="class"||r==="style"||us(r))&&((t||(t={}))[r]=e[r]);return t},Ev=(e,t)=>{const r={};for(const i in e)(!bo(i)||!(i.slice(9)in t))&&(r[i]=e[i]);return r};function kv(e,t,r){const{props:i,children:n,component:s}=e,{props:a,children:o,patchFlag:u}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&u>=0){if(u&1024)return!0;if(u&16)return i?cd(i,a,d):!!a;if(u&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const m=c[f];if(a[m]!==i[m]&&!gs(d,m))return!0}}}else return(n||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?cd(i,a,d):!0:!!a;return!1}function cd(e,t,r){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let n=0;n<i.length;n++){const s=i[n];if(t[s]!==e[s]&&!gs(r,s))return!0}return!1}function Av({vnode:e,parent:t},r){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=r,t=t.parent;else break}}const tm={},rm=()=>Object.create(tm),im=e=>Object.getPrototypeOf(e)===tm;function zv(e,t,r,i=!1){const n={},s=rm();e.propsDefaults=Object.create(null),nm(e,t,n,s);for(const a in e.propsOptions[0])a in n||(n[a]=void 0);r?e.props=i?n:Db(n):e.type.props?e.props=n:e.props=s,e.attrs=s}function Ov(e,t,r,i){const{props:n,attrs:s,vnode:{patchFlag:a}}=e,o=Be(n),[u]=e.propsOptions;let d=!1;if((i||a>0)&&!(a&16)){if(a&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let m=c[f];if(gs(e.emitsOptions,m))continue;const y=t[m];if(u)if(Ne(s,m))y!==s[m]&&(s[m]=y,d=!0);else{const _=Or(m);n[_]=Ja(u,o,_,y,e,!1)}else y!==s[m]&&(s[m]=y,d=!0)}}}else{nm(e,t,n,s)&&(d=!0);let c;for(const f in o)(!t||!Ne(t,f)&&((c=ri(f))===f||!Ne(t,c)))&&(u?r&&(r[f]!==void 0||r[c]!==void 0)&&(n[f]=Ja(u,o,f,void 0,e,!0)):delete n[f]);if(s!==o)for(const f in s)(!t||!Ne(t,f))&&(delete s[f],d=!0)}d&&lr(e.attrs,"set","")}function nm(e,t,r,i){const[n,s]=e.propsOptions;let a=!1,o;if(t)for(let u in t){if(Hi(u))continue;const d=t[u];let c;n&&Ne(n,c=Or(u))?!s||!s.includes(c)?r[c]=d:(o||(o={}))[c]=d:gs(e.emitsOptions,u)||(!(u in i)||d!==i[u])&&(i[u]=d,a=!0)}if(s){const u=Be(r),d=o||We;for(let c=0;c<s.length;c++){const f=s[c];r[f]=Ja(n,u,f,d[f],e,!Ne(d,f))}}return a}function Ja(e,t,r,i,n,s){const a=e[r];if(a!=null){const o=Ne(a,"default");if(o&&i===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&Se(u)){const{propsDefaults:d}=n;if(r in d)i=d[r];else{const c=cn(n);i=d[r]=u.call(null,t),c()}}else i=u;n.ce&&n.ce._setProp(r,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===ri(r))&&(i=!0))}return i}const Rv=new WeakMap;function sm(e,t,r=!1){const i=r?Rv:t.propsCache,n=i.get(e);if(n)return n;const s=e.props,a={},o=[];let u=!1;if(!Se(e)){const c=f=>{u=!0;const[m,y]=sm(f,t,!0);st(a,m),y&&o.push(...y)};!r&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!u)return He(e)&&i.set(e,ci),ci;if(ye(s))for(let c=0;c<s.length;c++){const f=Or(s[c]);pd(f)&&(a[f]=We)}else if(s)for(const c in s){const f=Or(c);if(pd(f)){const m=s[c],y=a[f]=ye(m)||Se(m)?{type:m}:st({},m),_=y.type;let w=!1,T=!0;if(ye(_))for(let v=0;v<_.length;++v){const b=_[v],C=Se(b)&&b.name;if(C==="Boolean"){w=!0;break}else C==="String"&&(T=!1)}else w=Se(_)&&_.name==="Boolean";y[0]=w,y[1]=T,(w||Ne(y,"default"))&&o.push(f)}}const d=[a,o];return He(e)&&i.set(e,d),d}function pd(e){return e[0]!=="$"&&!Hi(e)}const No=e=>e==="_"||e==="_ctx"||e==="$stable",Do=e=>ye(e)?e.map(Xt):[Xt(e)],Mv=(e,t,r)=>{if(t._n)return t;const i=Zb((...n)=>Do(t(...n)),r);return i._c=!1,i},am=(e,t,r)=>{const i=e._ctx;for(const n in e){if(No(n))continue;const s=e[n];if(Se(s))t[n]=Mv(n,s,i);else if(s!=null){const a=Do(s);t[n]=()=>a}}},om=(e,t)=>{const r=Do(t);e.slots.default=()=>r},um=(e,t,r)=>{for(const i in t)(r||!No(i))&&(e[i]=t[i])},Bv=(e,t,r)=>{const i=e.slots=rm();if(e.vnode.shapeFlag&32){const n=t._;n?(um(i,t,r),r&&wh(i,"_",n,!0)):am(t,i)}else t&&om(e,t)},Nv=(e,t,r)=>{const{vnode:i,slots:n}=e;let s=!0,a=We;if(i.shapeFlag&32){const o=t._;o?r&&o===1?s=!1:um(n,t,r):(s=!t.$stable,am(t,n)),a=t}else t&&(om(e,t),a={default:1});if(s)for(const o in n)!No(o)&&a[o]==null&&delete n[o]},vt=Wv;function Dv(e){return Pv(e)}function Pv(e,t){const r=ps();r.__VUE__=!0;const{insert:i,remove:n,patchProp:s,createElement:a,createText:o,createComment:u,setText:d,setElementText:c,parentNode:f,nextSibling:m,setScopeId:y=Jt,insertStaticContent:_}=e,w=(k,O,M,F=null,V=null,H=null,ee=void 0,X=null,J=!!O.dynamicChildren)=>{if(k===O)return;k&&!Ci(k,O)&&(F=rt(k),K(k,V,H,!0),k=null),O.patchFlag===-2&&(J=!1,O.dynamicChildren=null);const{type:q,ref:he,shapeFlag:ne}=O;switch(q){case ys:T(k,O,M,F);break;case Rr:v(k,O,M,F);break;case Vn:k==null&&b(O,M,F,ee);break;case Lt:re(k,O,M,F,V,H,ee,X,J);break;default:ne&1?I(k,O,M,F,V,H,ee,X,J):ne&6?ae(k,O,M,F,V,H,ee,X,J):(ne&64||ne&128)&&q.process(k,O,M,F,V,H,ee,X,J,Re)}he!=null&&V?Ki(he,k&&k.ref,H,O||k,!O):he==null&&k&&k.ref!=null&&Ki(k.ref,null,H,k,!0)},T=(k,O,M,F)=>{if(k==null)i(O.el=o(O.children),M,F);else{const V=O.el=k.el;O.children!==k.children&&d(V,O.children)}},v=(k,O,M,F)=>{k==null?i(O.el=u(O.children||""),M,F):O.el=k.el},b=(k,O,M,F)=>{[k.el,k.anchor]=_(k.children,O,M,F,k.el,k.anchor)},C=({el:k,anchor:O},M,F)=>{let V;for(;k&&k!==O;)V=m(k),i(k,M,F),k=V;i(O,M,F)},S=({el:k,anchor:O})=>{let M;for(;k&&k!==O;)M=m(k),n(k),k=M;n(O)},I=(k,O,M,F,V,H,ee,X,J)=>{if(O.type==="svg"?ee="svg":O.type==="math"&&(ee="mathml"),k==null)A(O,M,F,V,H,ee,X,J);else{const q=k.el&&k.el._isVueCE?k.el:null;try{q&&q._beginPatch(),W(k,O,V,H,ee,X,J)}finally{q&&q._endPatch()}}},A=(k,O,M,F,V,H,ee,X)=>{let J,q;const{props:he,shapeFlag:ne,transition:ce,dirs:me}=k;if(J=k.el=a(k.type,H,he&&he.is,he),ne&8?c(J,k.children):ne&16&&x(k.children,J,null,F,V,Fs(k,H),ee,X),me&&Pr(k,null,F,"created"),z(J,k,k.scopeId,ee,F),he){for(const Pe in he)Pe!=="value"&&!Hi(Pe)&&s(J,Pe,null,he[Pe],H,F);"value"in he&&s(J,"value",null,he.value,H),(q=he.onVnodeBeforeMount)&&Qt(q,F,k)}me&&Pr(k,null,F,"beforeMount");const be=Uv(V,ce);be&&ce.beforeEnter(J),i(J,O,M),((q=he&&he.onVnodeMounted)||be||me)&&vt(()=>{q&&Qt(q,F,k),be&&ce.enter(J),me&&Pr(k,null,F,"mounted")},V)},z=(k,O,M,F,V)=>{if(M&&y(k,M),F)for(let H=0;H<F.length;H++)y(k,F[H]);if(V){let H=V.subTree;if(O===H||pm(H.type)&&(H.ssContent===O||H.ssFallback===O)){const ee=V.vnode;z(k,ee,ee.scopeId,ee.slotScopeIds,V.parent)}}},x=(k,O,M,F,V,H,ee,X,J=0)=>{for(let q=J;q<k.length;q++){const he=k[q]=X?Er(k[q]):Xt(k[q]);w(null,he,O,M,F,V,H,ee,X)}},W=(k,O,M,F,V,H,ee)=>{const X=O.el=k.el;let{patchFlag:J,dynamicChildren:q,dirs:he}=O;J|=k.patchFlag&16;const ne=k.props||We,ce=O.props||We;let me;if(M&&Ur(M,!1),(me=ce.onVnodeBeforeUpdate)&&Qt(me,M,O,k),he&&Pr(O,k,M,"beforeUpdate"),M&&Ur(M,!0),(ne.innerHTML&&ce.innerHTML==null||ne.textContent&&ce.textContent==null)&&c(X,""),q?G(k.dynamicChildren,q,X,M,F,Fs(O,V),H):ee||Z(k,O,X,null,M,F,Fs(O,V),H,!1),J>0){if(J&16)ue(X,ne,ce,M,V);else if(J&2&&ne.class!==ce.class&&s(X,"class",null,ce.class,V),J&4&&s(X,"style",ne.style,ce.style,V),J&8){const be=O.dynamicProps;for(let Pe=0;Pe<be.length;Pe++){const Ae=be[Pe],Xe=ne[Ae],ut=ce[Ae];(ut!==Xe||Ae==="value")&&s(X,Ae,Xe,ut,V,M)}}J&1&&k.children!==O.children&&c(X,O.children)}else!ee&&q==null&&ue(X,ne,ce,M,V);((me=ce.onVnodeUpdated)||he)&&vt(()=>{me&&Qt(me,M,O,k),he&&Pr(O,k,M,"updated")},F)},G=(k,O,M,F,V,H,ee)=>{for(let X=0;X<O.length;X++){const J=k[X],q=O[X],he=J.el&&(J.type===Lt||!Ci(J,q)||J.shapeFlag&198)?f(J.el):M;w(J,q,he,null,F,V,H,ee,!0)}},ue=(k,O,M,F,V)=>{if(O!==M){if(O!==We)for(const H in O)!Hi(H)&&!(H in M)&&s(k,H,O[H],null,V,F);for(const H in M){if(Hi(H))continue;const ee=M[H],X=O[H];ee!==X&&H!=="value"&&s(k,H,X,ee,V,F)}"value"in M&&s(k,"value",O.value,M.value,V)}},re=(k,O,M,F,V,H,ee,X,J)=>{const q=O.el=k?k.el:o(""),he=O.anchor=k?k.anchor:o("");let{patchFlag:ne,dynamicChildren:ce,slotScopeIds:me}=O;me&&(X=X?X.concat(me):me),k==null?(i(q,M,F),i(he,M,F),x(O.children||[],M,he,V,H,ee,X,J)):ne>0&&ne&64&&ce&&k.dynamicChildren&&k.dynamicChildren.length===ce.length?(G(k.dynamicChildren,ce,M,V,H,ee,X),(O.key!=null||V&&O===V.subTree)&&lm(k,O,!0)):Z(k,O,M,he,V,H,ee,X,J)},ae=(k,O,M,F,V,H,ee,X,J)=>{O.slotScopeIds=X,k==null?O.shapeFlag&512?V.ctx.activate(O,M,F,ee,J):N(O,M,F,V,H,ee,J):L(k,O,J)},N=(k,O,M,F,V,H,ee)=>{const X=k.component=Zv(k,F,V);if(jh(k)&&(X.ctx.renderer=Re),Xv(X,!1,ee),X.asyncDep){if(V&&V.registerDep(X,Q,ee),!k.el){const J=X.subTree=Ot(Rr);v(null,J,O,M),k.placeholder=J.el}}else Q(X,k,O,M,V,H,ee)},L=(k,O,M)=>{const F=O.component=k.component;if(kv(k,O,M))if(F.asyncDep&&!F.asyncResolved){te(F,O,M);return}else F.next=O,F.update();else O.el=k.el,F.vnode=O},Q=(k,O,M,F,V,H,ee)=>{const X=()=>{if(k.isMounted){let{next:ne,bu:ce,u:me,parent:be,vnode:Pe}=k;{const Ct=dm(k);if(Ct){ne&&(ne.el=Pe.el,te(k,ne,ee)),Ct.asyncDep.then(()=>{k.isUnmounted||X()});return}}let Ae=ne,Xe;Ur(k,!1),ne?(ne.el=Pe.el,te(k,ne,ee)):ne=Pe,ce&&Wn(ce),(Xe=ne.props&&ne.props.onVnodeBeforeUpdate)&&Qt(Xe,be,ne,Pe),Ur(k,!0);const ut=dd(k),it=k.subTree;k.subTree=ut,w(it,ut,f(it.el),rt(it),k,V,H),ne.el=ut.el,Ae===null&&Av(k,ut.el),me&&vt(me,V),(Xe=ne.props&&ne.props.onVnodeUpdated)&&vt(()=>Qt(Xe,be,ne,Pe),V)}else{let ne;const{el:ce,props:me}=O,{bm:be,m:Pe,parent:Ae,root:Xe,type:ut}=k,it=Qi(O);Ur(k,!1),be&&Wn(be),!it&&(ne=me&&me.onVnodeBeforeMount)&&Qt(ne,Ae,O),Ur(k,!0);{Xe.ce&&Xe.ce._def.shadowRoot!==!1&&Xe.ce._injectChildStyle(ut);const Ct=k.subTree=dd(k);w(null,Ct,M,F,k,V,H),O.el=Ct.el}if(Pe&&vt(Pe,V),!it&&(ne=me&&me.onVnodeMounted)){const Ct=O;vt(()=>Qt(ne,Ae,Ct),V)}(O.shapeFlag&256||Ae&&Qi(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&k.a&&vt(k.a,V),k.isMounted=!0,O=M=F=null}};k.scope.on();const J=k.effect=new xh(X);k.scope.off();const q=k.update=J.run.bind(J),he=k.job=J.runIfDirty.bind(J);he.i=k,he.id=k.uid,J.scheduler=()=>Oo(he),Ur(k,!0),q()},te=(k,O,M)=>{O.component=k;const F=k.vnode.props;k.vnode=O,k.next=null,Ov(k,O.props,F,M),Nv(k,O.children,M),hr(),nd(k),mr()},Z=(k,O,M,F,V,H,ee,X,J=!1)=>{const q=k&&k.children,he=k?k.shapeFlag:0,ne=O.children,{patchFlag:ce,shapeFlag:me}=O;if(ce>0){if(ce&128){Te(q,ne,M,F,V,H,ee,X,J);return}else if(ce&256){le(q,ne,M,F,V,H,ee,X,J);return}}me&8?(he&16&&Ye(q,V,H),ne!==q&&c(M,ne)):he&16?me&16?Te(q,ne,M,F,V,H,ee,X,J):Ye(q,V,H,!0):(he&8&&c(M,""),me&16&&x(ne,M,F,V,H,ee,X,J))},le=(k,O,M,F,V,H,ee,X,J)=>{k=k||ci,O=O||ci;const q=k.length,he=O.length,ne=Math.min(q,he);let ce;for(ce=0;ce<ne;ce++){const me=O[ce]=J?Er(O[ce]):Xt(O[ce]);w(k[ce],me,M,null,V,H,ee,X,J)}q>he?Ye(k,V,H,!0,!1,ne):x(O,M,F,V,H,ee,X,J,ne)},Te=(k,O,M,F,V,H,ee,X,J)=>{let q=0;const he=O.length;let ne=k.length-1,ce=he-1;for(;q<=ne&&q<=ce;){const me=k[q],be=O[q]=J?Er(O[q]):Xt(O[q]);if(Ci(me,be))w(me,be,M,null,V,H,ee,X,J);else break;q++}for(;q<=ne&&q<=ce;){const me=k[ne],be=O[ce]=J?Er(O[ce]):Xt(O[ce]);if(Ci(me,be))w(me,be,M,null,V,H,ee,X,J);else break;ne--,ce--}if(q>ne){if(q<=ce){const me=ce+1,be=me<he?O[me].el:F;for(;q<=ce;)w(null,O[q]=J?Er(O[q]):Xt(O[q]),M,be,V,H,ee,X,J),q++}}else if(q>ce)for(;q<=ne;)K(k[q],V,H,!0),q++;else{const me=q,be=q,Pe=new Map;for(q=be;q<=ce;q++){const nt=O[q]=J?Er(O[q]):Xt(O[q]);nt.key!=null&&Pe.set(nt.key,q)}let Ae,Xe=0;const ut=ce-be+1;let it=!1,Ct=0;const wr=new Array(ut);for(q=0;q<ut;q++)wr[q]=0;for(q=me;q<=ne;q++){const nt=k[q];if(Xe>=ut){K(nt,V,H,!0);continue}let yt;if(nt.key!=null)yt=Pe.get(nt.key);else for(Ae=be;Ae<=ce;Ae++)if(wr[Ae-be]===0&&Ci(nt,O[Ae])){yt=Ae;break}yt===void 0?K(nt,V,H,!0):(wr[yt-be]=q+1,yt>=Ct?Ct=yt:it=!0,w(nt,O[yt],M,null,V,H,ee,X,J),Xe++)}const $i=it?Lv(wr):ci;for(Ae=$i.length-1,q=ut-1;q>=0;q--){const nt=be+q,yt=O[nt],pn=O[nt+1],fn=nt+1<he?pn.el||cm(pn):F;wr[q]===0?w(null,yt,M,fn,V,H,ee,X,J):it&&(Ae<0||q!==$i[Ae]?U(yt,M,fn,2):Ae--)}}},U=(k,O,M,F,V=null)=>{const{el:H,type:ee,transition:X,children:J,shapeFlag:q}=k;if(q&6){U(k.component.subTree,O,M,F);return}if(q&128){k.suspense.move(O,M,F);return}if(q&64){ee.move(k,O,M,Re);return}if(ee===Lt){i(H,O,M);for(let ne=0;ne<J.length;ne++)U(J[ne],O,M,F);i(k.anchor,O,M);return}if(ee===Vn){C(k,O,M);return}if(F!==2&&q&1&&X)if(F===0)X.beforeEnter(H),i(H,O,M),vt(()=>X.enter(H),V);else{const{leave:ne,delayLeave:ce,afterLeave:me}=X,be=()=>{k.ctx.isUnmounted?n(H):i(H,O,M)},Pe=()=>{H._isLeaving&&H[iv](!0),ne(H,()=>{be(),me&&me()})};ce?ce(H,be,Pe):Pe()}else i(H,O,M)},K=(k,O,M,F=!1,V=!1)=>{const{type:H,props:ee,ref:X,children:J,dynamicChildren:q,shapeFlag:he,patchFlag:ne,dirs:ce,cacheIndex:me}=k;if(ne===-2&&(V=!1),X!=null&&(hr(),Ki(X,null,M,k,!0),mr()),me!=null&&(O.renderCache[me]=void 0),he&256){O.ctx.deactivate(k);return}const be=he&1&&ce,Pe=!Qi(k);let Ae;if(Pe&&(Ae=ee&&ee.onVnodeBeforeUnmount)&&Qt(Ae,O,k),he&6)at(k.component,M,F);else{if(he&128){k.suspense.unmount(M,F);return}be&&Pr(k,null,O,"beforeUnmount"),he&64?k.type.remove(k,O,M,Re,F):q&&!q.hasOnce&&(H!==Lt||ne>0&&ne&64)?Ye(q,O,M,!1,!0):(H===Lt&&ne&384||!V&&he&16)&&Ye(J,O,M),F&&pe(k)}(Pe&&(Ae=ee&&ee.onVnodeUnmounted)||be)&&vt(()=>{Ae&&Qt(Ae,O,k),be&&Pr(k,null,O,"unmounted")},M)},pe=k=>{const{type:O,el:M,anchor:F,transition:V}=k;if(O===Lt){$e(M,F);return}if(O===Vn){S(k);return}const H=()=>{n(M),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(k.shapeFlag&1&&V&&!V.persisted){const{leave:ee,delayLeave:X}=V,J=()=>ee(M,H);X?X(k.el,H,J):J()}else H()},$e=(k,O)=>{let M;for(;k!==O;)M=m(k),n(k),k=M;n(O)},at=(k,O,M)=>{const{bum:F,scope:V,job:H,subTree:ee,um:X,m:J,a:q}=k;fd(J),fd(q),F&&Wn(F),V.stop(),H&&(H.flags|=8,K(ee,k,O,M)),X&&vt(X,O),vt(()=>{k.isUnmounted=!0},O)},Ye=(k,O,M,F=!1,V=!1,H=0)=>{for(let ee=H;ee<k.length;ee++)K(k[ee],O,M,F,V)},rt=k=>{if(k.shapeFlag&6)return rt(k.component.subTree);if(k.shapeFlag&128)return k.suspense.next();const O=m(k.anchor||k.el),M=O&&O[tv];return M?m(M):O};let It=!1;const Fe=(k,O,M)=>{let F;k==null?O._vnode&&(K(O._vnode,null,null,!0),F=O._vnode.component):w(O._vnode||null,k,O,null,null,null,M),O._vnode=k,It||(It=!0,nd(F),Wh(),It=!1)},Re={p:w,um:K,m:U,r:pe,mt:N,mc:x,pc:Z,pbc:G,n:rt,o:e};return{render:Fe,hydrate:void 0,createApp:xv(Fe)}}function Fs({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function Ur({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Uv(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function lm(e,t,r=!1){const i=e.children,n=t.children;if(ye(i)&&ye(n))for(let s=0;s<i.length;s++){const a=i[s];let o=n[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=n[s]=Er(n[s]),o.el=a.el),!r&&o.patchFlag!==-2&&lm(a,o)),o.type===ys&&(o.patchFlag!==-1?o.el=a.el:o.__elIndex=s+(e.type===Lt?1:0)),o.type===Rr&&!o.el&&(o.el=a.el)}}function Lv(e){const t=e.slice(),r=[0];let i,n,s,a,o;const u=e.length;for(i=0;i<u;i++){const d=e[i];if(d!==0){if(n=r[r.length-1],e[n]<d){t[i]=n,r.push(i);continue}for(s=0,a=r.length-1;s<a;)o=s+a>>1,e[r[o]]<d?s=o+1:a=o;d<e[r[s]]&&(s>0&&(t[i]=r[s-1]),r[s]=i)}}for(s=r.length,a=r[s-1];s-- >0;)r[s]=a,a=t[a];return r}function dm(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:dm(t)}function fd(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function cm(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?cm(t.subTree):null}const pm=e=>e.__isSuspense;function Wv(e,t){t&&t.pendingBranch?ye(e)?t.effects.push(...e):t.effects.push(e):Qb(e)}const Lt=Symbol.for("v-fgt"),ys=Symbol.for("v-txt"),Rr=Symbol.for("v-cmt"),Vn=Symbol.for("v-stc"),Yi=[];let St=null;function wt(e=!1){Yi.push(St=e?null:[])}function qv(){Yi.pop(),St=Yi[Yi.length-1]||null}let nn=1;function hd(e,t=!1){nn+=e,e<0&&St&&t&&(St.hasOnce=!0)}function fm(e){return e.dynamicChildren=nn>0?St||ci:null,qv(),nn>0&&St&&St.push(e),e}function xt(e,t,r,i,n,s){return fm(ve(e,t,r,i,n,s,!0))}function Vv(e,t,r,i,n){return fm(Ot(e,t,r,i,n,!0))}function hm(e){return e?e.__v_isVNode===!0:!1}function Ci(e,t){return e.type===t.type&&e.key===t.key}const mm=({key:e})=>e??null,Hn=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?Ze(e)||ct(e)||Se(e)?{i:At,r:e,k:t,f:!!r}:e:null);function ve(e,t=null,r=null,i=0,n=null,s=e===Lt?0:1,a=!1,o=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&mm(t),ref:t&&Hn(t),scopeId:Vh,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:At};return o?(Po(u,r),s&128&&e.normalize(u)):r&&(u.shapeFlag|=Ze(r)?8:16),nn>0&&!a&&St&&(u.patchFlag>0||s&6)&&u.patchFlag!==32&&St.push(u),u}const Ot=Hv;function Hv(e,t=null,r=null,i=0,n=null,s=!1){if((!e||e===hv)&&(e=Rr),hm(e)){const o=yi(e,t,!0);return r&&Po(o,r),nn>0&&!s&&St&&(o.shapeFlag&6?St[St.indexOf(e)]=o:St.push(o)),o.patchFlag=-2,o}if(r$(e)&&(e=e.__vccOpts),t){t=Gv(t);let{class:o,style:u}=t;o&&!Ze(o)&&(t.class=xo(o)),He(u)&&(zo(u)&&!ye(u)&&(u=st({},u)),t.style=Xr(u))}const a=Ze(e)?1:pm(e)?128:rv(e)?64:He(e)?4:Se(e)?2:0;return ve(e,t,r,i,n,a,s,!0)}function Gv(e){return e?zo(e)||im(e)?st({},e):e:null}function yi(e,t,r=!1,i=!1){const{props:n,ref:s,patchFlag:a,children:o,transition:u}=e,d=t?jv(n||{},t):n,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&mm(d),ref:t&&t.ref?r&&s?ye(s)?s.concat(Hn(t)):[s,Hn(t)]:Hn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Lt?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&yi(e.ssContent),ssFallback:e.ssFallback&&yi(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&i&&Ro(c,u.clone(c)),c}function Fv(e=" ",t=0){return Ot(ys,null,e,t)}function md(e,t){const r=Ot(Vn,null,e);return r.staticCount=t,r}function Ar(e="",t=!1){return t?(wt(),Vv(Rr,null,e)):Ot(Rr,null,e)}function Xt(e){return e==null||typeof e=="boolean"?Ot(Rr):ye(e)?Ot(Lt,null,e.slice()):hm(e)?Er(e):Ot(ys,null,String(e))}function Er(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:yi(e)}function Po(e,t){let r=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(ye(t))r=16;else if(typeof t=="object")if(i&65){const n=t.default;n&&(n._c&&(n._d=!1),Po(e,n()),n._c&&(n._d=!0));return}else{r=32;const n=t._;!n&&!im(t)?t._ctx=At:n===3&&At&&(At.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Se(t)?(t={default:t,_ctx:At},r=32):(t=String(t),i&64?(r=16,t=[Fv(t)]):r=8);e.children=t,e.shapeFlag|=r}function jv(...e){const t={};for(let r=0;r<e.length;r++){const i=e[r];for(const n in i)if(n==="class")t.class!==i.class&&(t.class=xo([t.class,i.class]));else if(n==="style")t.style=Xr([t.style,i.style]);else if(us(n)){const s=t[n],a=i[n];a&&s!==a&&!(ye(s)&&s.includes(a))&&(t[n]=s?[].concat(s,a):a)}else n!==""&&(t[n]=i[n])}return t}function Qt(e,t,r,i=null){tr(e,t,7,[r,i])}const Kv=Jh();let Qv=0;function Zv(e,t,r){const i=e.type,n=(t?t.appContext:e.appContext)||Kv,s={uid:Qv++,vnode:e,type:i,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yb(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sm(i,n),emitsOptions:em(i,n),emit:null,emitted:null,propsDefaults:We,inheritAttrs:i.inheritAttrs,ctx:We,data:We,props:We,attrs:We,slots:We,refs:We,setupState:We,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Tv.bind(null,s),e.ce&&e.ce(s),s}let gt=null;const Yv=()=>gt||At;let Jn,eo;{const e=ps(),t=(r,i)=>{let n;return(n=e[r])||(n=e[r]=[]),n.push(i),s=>{n.length>1?n.forEach(a=>a(s)):n[0](s)}};Jn=t("__VUE_INSTANCE_SETTERS__",r=>gt=r),eo=t("__VUE_SSR_SETTERS__",r=>sn=r)}const cn=e=>{const t=gt;return Jn(e),e.scope.on(),()=>{e.scope.off(),Jn(t)}},gd=()=>{gt&&gt.scope.off(),Jn(null)};function gm(e){return e.vnode.shapeFlag&4}let sn=!1;function Xv(e,t=!1,r=!1){t&&eo(t);const{props:i,children:n}=e.vnode,s=gm(e);zv(e,i,s,t),Bv(e,n,r||t);const a=s?Jv(e,t):void 0;return t&&eo(!1),a}function Jv(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,gv);const{setup:i}=r;if(i){hr();const n=e.setupContext=i.length>1?t$(e):null,s=cn(e),a=dn(i,e,0,[e.props,n]),o=mh(a);if(mr(),s(),(o||e.sp)&&!Qi(e)&&Fh(e),o){if(a.then(gd,gd),t)return a.then(u=>{yd(e,u)}).catch(u=>{hs(u,e,0)});e.asyncDep=a}else yd(e,a)}else ym(e)}function yd(e,t,r){Se(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:He(t)&&(e.setupState=Dh(t)),ym(e)}function ym(e,t,r){const i=e.type;e.render||(e.render=i.render||Jt);{const n=cn(e);hr();try{yv(e)}finally{mr(),n()}}}const e$={get(e,t){return dt(e,"get",""),e[t]}};function t$(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,e$),slots:e.slots,emit:e.emit,expose:t}}function _s(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Dh(Pb(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in Zi)return Zi[r](e)},has(t,r){return r in t||r in Zi}})):e.proxy}function r$(e){return Se(e)&&"__vccOpts"in e}const i$=(e,t)=>Hb(e,t,sn),n$="3.5.27";let to;const _d=typeof window<"u"&&window.trustedTypes;if(_d)try{to=_d.createPolicy("vue",{createHTML:e=>e})}catch{}const _m=to?e=>to.createHTML(e):e=>e,s$="http://www.w3.org/2000/svg",a$="http://www.w3.org/1998/Math/MathML",or=typeof document<"u"?document:null,wd=or&&or.createElement("template"),o$={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,i)=>{const n=t==="svg"?or.createElementNS(s$,e):t==="mathml"?or.createElementNS(a$,e):r?or.createElement(e,{is:r}):or.createElement(e);return e==="select"&&i&&i.multiple!=null&&n.setAttribute("multiple",i.multiple),n},createText:e=>or.createTextNode(e),createComment:e=>or.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>or.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,i,n,s){const a=r?r.previousSibling:t.lastChild;if(n&&(n===s||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),r),!(n===s||!(n=n.nextSibling)););else{wd.innerHTML=_m(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const o=wd.content;if(i==="svg"||i==="mathml"){const u=o.firstChild;for(;u.firstChild;)o.appendChild(u.firstChild);o.removeChild(u)}t.insertBefore(o,r)}return[a?a.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},u$=Symbol("_vtc");function l$(e,t,r){const i=e[u$];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const bd=Symbol("_vod"),d$=Symbol("_vsh"),c$=Symbol(""),p$=/(?:^|;)\s*display\s*:/;function f$(e,t,r){const i=e.style,n=Ze(r);let s=!1;if(r&&!n){if(t)if(Ze(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();r[o]==null&&Gn(i,o,"")}else for(const a in t)r[a]==null&&Gn(i,a,"");for(const a in r)a==="display"&&(s=!0),Gn(i,a,r[a])}else if(n){if(t!==r){const a=i[c$];a&&(r+=";"+a),i.cssText=r,s=p$.test(r)}}else t&&e.removeAttribute("style");bd in e&&(e[bd]=s?i.display:"",e[d$]&&(i.display="none"))}const vd=/\s*!important$/;function Gn(e,t,r){if(ye(r))r.forEach(i=>Gn(e,t,i));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const i=h$(e,t);vd.test(r)?e.setProperty(ri(i),r.replace(vd,""),"important"):e[i]=r}}const $d=["Webkit","Moz","ms"],js={};function h$(e,t){const r=js[t];if(r)return r;let i=Or(t);if(i!=="filter"&&i in e)return js[t]=i;i=_h(i);for(let n=0;n<$d.length;n++){const s=$d[n]+i;if(s in e)return js[t]=s}return t}const xd="http://www.w3.org/1999/xlink";function Sd(e,t,r,i,n,s=hb(t)){i&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(xd,t.slice(6,t.length)):e.setAttributeNS(xd,t,r):r==null||s&&!bh(r)?e.removeAttribute(t):e.setAttribute(t,s?"":er(r)?String(r):r)}function Td(e,t,r,i,n){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?_m(r):r);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?e.getAttribute("value")||"":e.value,u=r==null?e.type==="checkbox"?"on":"":String(r);(o!==u||!("_value"in e))&&(e.value=u),r==null&&e.removeAttribute(t),e._value=r;return}let a=!1;if(r===""||r==null){const o=typeof e[t];o==="boolean"?r=bh(r):r==null&&o==="string"?(r="",a=!0):o==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(n||t)}function kr(e,t,r,i){e.addEventListener(t,r,i)}function m$(e,t,r,i){e.removeEventListener(t,r,i)}const Id=Symbol("_vei");function g$(e,t,r,i,n=null){const s=e[Id]||(e[Id]={}),a=s[t];if(i&&a)a.value=i;else{const[o,u]=y$(t);if(i){const d=s[t]=b$(i,n);kr(e,o,d,u)}else a&&(m$(e,o,a,u),s[t]=void 0)}}const Cd=/(?:Once|Passive|Capture)$/;function y$(e){let t;if(Cd.test(e)){t={};let i;for(;i=e.match(Cd);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ri(e.slice(2)),t]}let Ks=0;const _$=Promise.resolve(),w$=()=>Ks||(_$.then(()=>Ks=0),Ks=Date.now());function b$(e,t){const r=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=r.attached)return;tr(v$(i,r.value),t,5,[i])};return r.value=e,r.attached=w$(),r}function v$(e,t){if(ye(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(i=>n=>!n._stopped&&i&&i(n))}else return t}const Ed=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,$$=(e,t,r,i,n,s)=>{const a=n==="svg";t==="class"?l$(e,i,a):t==="style"?f$(e,r,i):us(t)?bo(t)||g$(e,t,r,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):x$(e,t,i,a))?(Td(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Sd(e,t,i,a,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ze(i))?Td(e,Or(t),i,s,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Sd(e,t,i,a))};function x$(e,t,r,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ed(t)&&Se(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const n=e.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Ed(t)&&Ze(r)?!1:t in e}const _i=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ye(t)?r=>Wn(t,r):t};function S$(e){e.target.composing=!0}function kd(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const fr=Symbol("_assign");function Ad(e,t,r){return t&&(e=e.trim()),r&&(e=cs(e)),e}const cr={created(e,{modifiers:{lazy:t,trim:r,number:i}},n){e[fr]=_i(n);const s=i||n.props&&n.props.type==="number";kr(e,t?"change":"input",a=>{a.target.composing||e[fr](Ad(e.value,r,s))}),(r||s)&&kr(e,"change",()=>{e.value=Ad(e.value,r,s)}),t||(kr(e,"compositionstart",S$),kr(e,"compositionend",kd),kr(e,"change",kd))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:r,modifiers:{lazy:i,trim:n,number:s}},a){if(e[fr]=_i(a),e.composing)return;const o=(s||e.type==="number")&&!/^0\d/.test(e.value)?cs(e.value):e.value,u=t??"";o!==u&&(document.activeElement===e&&e.type!=="range"&&(i&&t===r||n&&e.value.trim()===u)||(e.value=u))}},zd={created(e,{value:t},r){e.checked=mi(t,r.props.value),e[fr]=_i(r),kr(e,"change",()=>{e[fr](an(e))})},beforeUpdate(e,{value:t,oldValue:r},i){e[fr]=_i(i),t!==r&&(e.checked=mi(t,i.props.value))}},Cn={deep:!0,created(e,{value:t,modifiers:{number:r}},i){const n=ls(t);kr(e,"change",()=>{const s=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>r?cs(an(a)):an(a));e[fr](e.multiple?n?new Set(s):s:s[0]),e._assigning=!0,Uh(()=>{e._assigning=!1})}),e[fr]=_i(i)},mounted(e,{value:t}){Od(e,t)},beforeUpdate(e,t,r){e[fr]=_i(r)},updated(e,{value:t}){e._assigning||Od(e,t)}};function Od(e,t){const r=e.multiple,i=ye(t);if(!(r&&!i&&!ls(t))){for(let n=0,s=e.options.length;n<s;n++){const a=e.options[n],o=an(a);if(r)if(i){const u=typeof o;u==="string"||u==="number"?a.selected=t.some(d=>String(d)===String(o)):a.selected=gb(t,o)>-1}else a.selected=t.has(o);else if(mi(an(a),t)){e.selectedIndex!==n&&(e.selectedIndex=n);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function an(e){return"_value"in e?e._value:e.value}const T$=st({patchProp:$$},o$);let Rd;function I$(){return Rd||(Rd=Dv(T$))}const C$=((...e)=>{const t=I$().createApp(...e),{mount:r}=t;return t.mount=i=>{const n=k$(i);if(!n)return;const s=t._component;!Se(s)&&!s.render&&!s.template&&(s.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const a=r(n,!1,E$(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),a},t});function E$(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function k$(e){return Ze(e)?document.querySelector(e):e}var Uo=Object.defineProperty,A$=Object.getOwnPropertyDescriptor,z$=Object.getOwnPropertyNames,O$=Object.prototype.hasOwnProperty,R$=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),j=(e,t)=>()=>(e&&(t=e(e=0)),t),vi=(e,t)=>{for(var r in t)Uo(e,r,{get:t[r],enumerable:!0})},M$=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of z$(t))!O$.call(e,n)&&n!==r&&Uo(e,n,{get:()=>t[n],enumerable:!(i=A$(t,n))||i.enumerable});return e},on=e=>M$(Uo({},"__esModule",{value:!0}),e),Ei,xr,li,Md,wm,bm=j(()=>{Ei=new Map,xr=[],li=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=Ei.get(e);if(i===void 0)Ei.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=xr.indexOf(e);n!==-1&&xr.splice(n,1);for(let s=0;s<xr.length;s++)if(Ei.get(xr[s]).priority<=r){xr.splice(s,0,e);return}xr.push(e)}return}throw new TypeError("not a valid backend")},Md=async e=>{let t=Ei.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},wm=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),i=r.length===0?xr:r,n,s=[],a=new Set;for(let u of i){let d=await Md(u);typeof d=="string"?s.push({name:u,err:d}):(n||(n=d),n===d&&a.add(u))}if(!n)throw new Error(`no available backend found. ERR: ${s.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:d}of s)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${d}`);let o=t.filter(u=>a.has(typeof u=="string"?u:u.name));return[n,new Proxy(e,{get:(u,d)=>d==="executionProviders"?o:Reflect.get(u,d)})]}}),B$=j(()=>{bm()}),vm,N$=j(()=>{vm="1.24.1"}),Qs,et,$m=j(()=>{N$(),Qs="warning",et={wasm:{},webgl:{},webgpu:{},versions:{common:vm},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Qs=e}},get logLevel(){return Qs}},Object.defineProperty(et,"logLevel",{enumerable:!0})}),Ve,D$=j(()=>{$m(),Ve=et}),xm,Sm,P$=j(()=>{xm=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],s=e.dims[3]):(n=e.dims[3],s=e.dims[2]);let a=t?.format!==void 0?t.format:"RGB",o=t?.norm,u,d;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let c=s*n,f=0,m=c,y=c*2,_=-1;a==="RGBA"?(f=0,m=c,y=c*2,_=c*3):a==="RGB"?(f=0,m=c,y=c*2):a==="RBG"&&(f=0,y=c,m=c*2);for(let w=0;w<s;w++)for(let T=0;T<n;T++){let v=(e.data[f++]-d[0])*u[0],b=(e.data[m++]-d[1])*u[1],C=(e.data[y++]-d[2])*u[2],S=_===-1?255:(e.data[_++]-d[3])*u[3];i.fillStyle="rgba("+v+","+b+","+C+","+S+")",i.fillRect(T,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Sm=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,s,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],s=e.dims[1],a=e.dims[3]):(n=e.dims[3],s=e.dims[2],a=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t?.norm,d,c;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?c=[0,0,0,0]:typeof u.bias=="number"?c=[u.bias,u.bias,u.bias,u.bias]:(c=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(c[3]=u.bias[3]));let f=s*n;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let m=4,y=0,_=1,w=2,T=3,v=0,b=f,C=f*2,S=-1;o==="RGBA"?(v=0,b=f,C=f*2,S=f*3):o==="RGB"?(v=0,b=f,C=f*2):o==="RBG"&&(v=0,C=f,b=f*2),i=r.createImageData(n,s);for(let I=0;I<s*n;y+=m,_+=m,w+=m,T+=m,I++)i.data[y]=(e.data[v++]-c[0])*d[0],i.data[_]=(e.data[b++]-c[1])*d[1],i.data[w]=(e.data[C++]-c[2])*d[2],i.data[T]=S===-1?255:(e.data[S++]-c[3])*d[3]}else throw new Error("Can not access image data");return i}}),En,Tm,Im,Cm,Em,km,U$=j(()=>{Lo(),En=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},s,a;typeof n.mean=="number"?s=[n.mean,n.mean,n.mean,n.mean]:s=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?a=[n.bias,n.bias,n.bias,n.bias]:a=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,c=u==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,m=0,y=1,_=2,w=3,T=0,v=d,b=d*2,C=-1;o==="RGB"&&(f=3,m=0,y=1,_=2,w=-1),u==="RGBA"?C=d*3:u==="RBG"?(T=0,b=d,v=d*2):u==="BGR"&&(b=0,v=d,T=d*2);for(let S=0;S<d;S++,m+=f,_+=f,y+=f,w+=f)c[T++]=(e[m]+a[0])/s[0],c[v++]=(e[y]+a[1])/s[1],c[b++]=(e[_]+a[2])/s[2],C!==-1&&w!==-1&&(c[C++]=(e[w]+a[3])/s[3]);return u==="RGBA"?new $t("float32",c,[1,4,r,i]):new $t("float32",c,[1,3,r,i])},Tm=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=u();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let m=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(m=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=m,o.width=y}else o.tensorFormat="RGBA",o.height=m,o.width=y;f.drawImage(e,0,0),a=f.getImageData(0,0,y,m).data}else throw new Error("Can not access image data")}else if(i){let c,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,f=t.resizedWidth):(c=e.height,f=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=c,o.width=f,t!==void 0){let m=u();m.width=f,m.height=c;let y=d(m);if(y!=null)y.putImageData(e,0,0),a=y.getImageData(0,0,f,c).data;else throw new Error("Can not access image data")}else a=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=u();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let m=e.height,y=e.width;return f.drawImage(e,0,0,y,m),a=f.getImageData(0,0,y,m).data,o.height=m,o.width=y,En(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((c,f)=>{let m=u(),y=d(m);if(!e||!y)return f();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{m.width=_.width,m.height=_.height,y.drawImage(_,0,0,m.width,m.height);let w=y.getImageData(0,0,m.width,m.height);o.height=m.height,o.width=m.width,c(En(w.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return En(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Im=(e,t)=>{let{width:r,height:i,download:n,dispose:s}=t,a=[1,i,r,4];return new $t({location:"texture",type:"float32",texture:e,dims:a,download:n,dispose:s})},Cm=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:s}=t;return new $t({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:s})},Em=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:s}=t;return new $t({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:n,dispose:s})},km=(e,t,r)=>new $t({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Gr,Li,Zs,Am,L$=j(()=>{Gr=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Li=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Zs=!1,Am=()=>{if(!Zs){Zs=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(Gr.set("int64",BigInt64Array),Li.set(BigInt64Array,"int64")),t&&(Gr.set("uint64",BigUint64Array),Li.set(BigUint64Array,"uint64")),i?(Gr.set("float16",r),Li.set(r,"float16")):Gr.set("float16",Uint16Array)}}}),zm,Om,W$=j(()=>{Lo(),zm=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Om=(e,t)=>{switch(e.location){case"cpu":return new $t(e.type,e.data,t);case"cpu-pinned":return new $t({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new $t({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new $t({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new $t({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),$t,Lo=j(()=>{P$(),U$(),L$(),W$(),$t=class{constructor(e,t,r){Am();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let a=Gr.get(i);if(!a)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(i=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let u=Gr.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?a=u.from(t,BigInt):a=u.from(t)}else if(t instanceof u)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")i="string",a=e;else if(u==="boolean")i="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",a=Uint8Array.from(e);else{let u=Li.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=u,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");n=o,this.cpuData=a,this.dataLocation="cpu"}let s=zm(n);if(this.cpuData&&s!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=s}static async fromImage(e,t){return Tm(e,t)}static fromTexture(e,t){return Im(e,t)}static fromGpuBuffer(e,t){return Cm(e,t)}static fromMLTensor(e,t){return Em(e,t)}static fromPinnedBuffer(e,t,r){return km(e,t,r)}toDataURL(e){return xm(this,e)}toImageData(e){return Sm(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Om(this,e)}}}),qt,Rm=j(()=>{Lo(),qt=$t}),es,Ys,rr,Ht,Zr,Yr,Mm=j(()=>{$m(),es=(e,t)=>{(typeof et.trace>"u"?!et.wasm.trace:!et.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ys=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let n=0;n<r.length;n++){if(i&&!r[n].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[n].trim().split(" ")[1]}`;t&&(s+=`::${t}`),es("CPU",s);return}r[n].includes("TRACE_FUNC")&&(i=!0)}},rr=e=>{(typeof et.trace>"u"?!et.wasm.trace:!et.trace)||Ys("BEGIN",e)},Ht=e=>{(typeof et.trace>"u"?!et.wasm.trace:!et.trace)||Ys("END",e)},Zr=e=>{(typeof et.trace>"u"?!et.wasm.trace:!et.trace)||console.time(`ORT::${e}`)},Yr=e=>{(typeof et.trace>"u"?!et.wasm.trace:!et.trace)||console.timeEnd(`ORT::${e}`)}}),Bm,q$=j(()=>{bm(),Rm(),Mm(),Bm=class Nm{constructor(t){this.handler=t}async run(t,r,i){rr(),Zr("InferenceSession.run");let n={},s={};if(typeof t!="object"||t===null||t instanceof qt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof qt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);n[d]=null}if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(c.indexOf(f)!==-1){let m=r[f];(m===null||m instanceof qt)&&(d=!0,a=!1,n[f]=m)}if(d){if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)n[d]=null;let o=await this.handler.run(t,n,s),u={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let c=o[d];c instanceof qt?u[d]=c:u[d]=new qt(c.type,c.data,c.dims)}return Yr("InferenceSession.run"),Ht(),u}async release(){return this.handler.dispose()}static async create(t,r,i,n){rr(),Zr("InferenceSession.create");let s,a={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,f=0,m=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(m=t.byteLength-f,typeof i=="number"){if(m=i,!Number.isSafeInteger(m))throw new RangeError("'byteLength' must be an integer.");if(m<=0||f+m>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-f}].`);if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(c,f,m)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await wm(a),d=await o.createInferenceSessionHandler(s,u);return Yr("InferenceSession.create"),Ht(),new Nm(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Wo,V$=j(()=>{q$(),Wo=Bm}),H$=j(()=>{}),G$=j(()=>{}),F$=j(()=>{}),j$=j(()=>{}),K$={};vi(K$,{InferenceSession:()=>Wo,TRACE:()=>es,TRACE_EVENT_BEGIN:()=>Zr,TRACE_EVENT_END:()=>Yr,TRACE_FUNC_BEGIN:()=>rr,TRACE_FUNC_END:()=>Ht,Tensor:()=>qt,env:()=>Ve,registerBackend:()=>li});var Rt=j(()=>{B$(),D$(),V$(),Rm(),H$(),G$(),Mm(),F$(),j$()}),qo=j(()=>{}),Dm={};vi(Dm,{default:()=>Pm});var Xs,Js,Pm,Q$=j(()=>{V0(),ii(),Vo(),Xs="ort-wasm-proxy-worker",Js=globalThis.self?.name===Xs,Js&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Ho(r.wasm).then(()=>{ou(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:n}=r;uu(n,i).then(()=>{postMessage({type:t})},s=>{postMessage({type:t,err:s})});break}case"copy-from":{let{buffer:i}=r,n=os(i);postMessage({type:t,out:n});break}case"create":{let{model:i,options:n}=r;lu(i,n).then(s=>{postMessage({type:t,out:s})},s=>{postMessage({type:t,err:s})});break}case"release":du(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:n,inputs:s,outputIndices:a,options:o}=r;cu(i,n,s,a,new Array(a.length).fill(null),o).then(u=>{u.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:u},fu([...s,...u]))},u=>{postMessage({type:t,err:u})});break}case"end-profiling":pu(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),Pm=Js?null:e=>new Worker(e??bt,{type:"module",name:Xs})}),Um={};vi(Um,{default:()=>Lm});async function Bd(e={}){var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,n=i&&self.name?.startsWith("em-pthread");t.mountExternalData=(l,p)=>{l.startsWith("./")&&(l=l.substring(2)),(t.Zc||(t.Zc=new Map)).set(l,p)},t.unmountExternalData=()=>{delete t.Zc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,ae:!0}).buffer.constructor;let s=l=>async(...p)=>{try{if(t.$c)throw Error("Session already started");let g=t.$c={Nd:p[0],errors:[]},h=await l(...p);if(t.$c!==g)throw Error("Session mismatch");t.gd?.flush();let $=g.errors;if(0<$.length){let E=await Promise.all($);if(E=E.filter(R=>R),0<E.length)throw Error(E.join(`
`))}return h}finally{t.$c=null}};t.jsepInit=(l,p)=>{if(l==="webgpu"){[t.gd,t.Dd,t.Hd,t.jd,t.Gd,t.ac,t.Id,t.Kd,t.Ed,t.Fd,t.Jd]=p;let g=t.gd;t.jsepRegisterBuffer=(h,$,E,R)=>g.registerBuffer(h,$,E,R),t.jsepGetBuffer=h=>g.getBuffer(h),t.jsepCreateDownloader=(h,$,E)=>g.createDownloader(h,$,E),t.jsepOnCreateSession=h=>{g.onCreateSession(h)},t.jsepOnReleaseSession=h=>{g.onReleaseSession(h)},t.jsepOnRunStart=h=>g.onRunStart(h),t.Ld=(h,$)=>{g.upload(h,$)}}else if(l==="webnn"){let g=p[0];[t.Zd,t.vd,t.webnnEnsureTensor,t.xd,t.webnnDownloadTensor,t.Yd,t.webnnEnableTraceEvent]=p.slice(1),t.webnnReleaseTensorId=t.vd,t.webnnUploadTensor=t.xd,t.webnnRegisterMLContext=t.Yd,t.webnnOnRunStart=h=>g.onRunStart(h),t.webnnOnRunEnd=g.onRunEnd.bind(g),t.webnnOnReleaseSession=h=>{g.onReleaseSession(h)},t.webnnCreateMLTensorDownloader=(h,$)=>g.createMLTensorDownloader(h,$),t.webnnRegisterMLTensor=(h,$,E,R)=>g.registerMLTensor(h,$,E,R),t.webnnCreateMLContext=h=>g.createMLContext(h),t.webnnRegisterMLConstant=(h,$,E,R,D,Y)=>g.registerMLConstant(h,$,E,R,D,t.Zc,Y),t.webnnRegisterGraphInput=g.registerGraphInput.bind(g),t.webnnIsGraphInput=g.isGraphInput.bind(g),t.webnnRegisterGraphOutput=g.registerGraphOutput.bind(g),t.webnnIsGraphOutput=g.isGraphOutput.bind(g),t.webnnCreateTemporaryTensor=g.createTemporaryTensor.bind(g),t.webnnIsGraphInputOutputTypeSupported=g.isGraphInputOutputTypeSupported.bind(g)}};let a=()=>{let l=p=>(...g)=>{let h=jt;return g=p(...g),jt!=h?new Promise(($,E)=>{Cs={resolve:$,reject:E}}):g};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[p]=l(t[p])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a?.()};var o,u,d=(l,p)=>{throw p},c=import.meta.url,f="";if(r||i){try{f=new URL(".",c).href}catch{}i&&(u=l=>{var p=new XMLHttpRequest;return p.open("GET",l,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),o=async l=>{if(z(l))return new Promise((g,h)=>{var $=new XMLHttpRequest;$.open("GET",l,!0),$.responseType="arraybuffer",$.onload=()=>{$.status==200||$.status==0&&$.response?g($.response):h($.status)},$.onerror=h,$.send(null)});var p=await fetch(l,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)}}var m,y,_,w,T,v,b=console.log.bind(console),C=console.error.bind(console),S=b,I=C,A=!1,z=l=>l.startsWith("file://");function x(){be.buffer!=G.buffer&&K()}if(n){let l=function(p){try{var g=p.data,h=g.Uc;if(h==="load"){let $=[];self.onmessage=E=>$.push(E),v=()=>{postMessage({Uc:"loaded"});for(let E of $)l(E);self.onmessage=l};for(let E of g.Ad)t[E]&&!t[E].proxy||(t[E]=(...R)=>{postMessage({Uc:"callHandler",zd:E,args:R})},E=="print"&&(S=t[E]),E=="printErr"&&(I=t[E]));be=g.Vd,K(),y=g.Wd,Ye(),xn()}else if(h==="run"){(function($){var E=(x(),L)[$+52>>>2>>>0];$=(x(),L)[$+56>>>2>>>0],ll(E,E-$),xe(E)})(g.Tc),Os(g.Tc,0,0,1,0,0),ne(),Ss(g.Tc),W||(il(),W=!0);try{Pe(g.Pd,g.dd)}catch($){if($!="unwind")throw $}}else g.target!=="setimmediate"&&(h==="checkMailbox"?W&&gn():h&&(I(`worker: received unknown command ${h}`),I(g)))}catch($){throw nl(),$}};var W=!1;self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=l}var G,ue,re,ae,N,L,Q,te,Z,le,Te,U=!1;function K(){var l=be.buffer;t.HEAP8=G=new Int8Array(l),re=new Int16Array(l),t.HEAPU8=ue=new Uint8Array(l),ae=new Uint16Array(l),t.HEAP32=N=new Int32Array(l),t.HEAPU32=L=new Uint32Array(l),Q=new Float32Array(l),te=new Float64Array(l),Z=new BigInt64Array(l),le=new BigUint64Array(l)}function pe(){U=!0,n?v():nr.tb()}function $e(l){throw I(l="Aborted("+l+")"),A=!0,l=new WebAssembly.RuntimeError(l+". Build with -sASSERTIONS for more info."),T?.(l),l}function at(){return{a:{ma:ww,hb:_w,g:ut,J:Ct,f:pn,o:fn,h:t_,ha:r_,b:i_,T:n_,Ia:gu,n:s_,_:bu,Ya:vu,Ea:$u,Ga:xu,Za:Su,Wa:Tu,Pa:Iu,Va:Cu,ka:Eu,Fa:ku,Ca:Au,Xa:zu,Da:Ou,cb:a_,ea:o_,xa:u_,va:d_,da:p_,O:f_,H:h_,wa:m_,Z:$_,ya:x_,Sa:S_,Aa:I_,Ja:C_,ta:E_,fa:k_,Ra:Ss,$a:A_,R:M_,s:U_,c:$s,ib:L_,y:W_,M:q_,D:V_,m:H_,t:Lu,jb:G_,I:F_,S:j_,j:K_,v:Q_,r:Z_,l:Y_,Ma:X_,Na:J_,Oa:ew,Ka:Hu,La:Gu,ua:Fu,eb:rw,bb:nw,u:sw,aa:aw,ga:ow,ab:iw,V:uw,_a:lw,Ba:dw,F:tw,U:cw,la:vn,za:fw,gb:pw,fb:hw,Ta:Zu,Ua:Yu,Ha:H,$:Xu,ja:Ju,Qa:el,ia:tl,lb:rb,na:Qw,mb:tb,oa:Kw,G:Uw,d:xw,q:vw,w:bw,B:Rw,pb:Gw,K:Nw,x:Tw,pa:Fw,X:Zw,ba:Hw,nb:eb,ob:Jw,ra:Lw,qa:Vw,qb:Ww,N:Dw,Y:jw,e:Sw,A:Iw,k:$w,kb:ib,p:Ew,z:kw,C:Cw,E:Aw,L:Mw,rb:Pw,Q:Yw,ca:Bw,W:Xw,sb:Ow,sa:zw,P:qw,i:gw,a:be,db:F}}}async function Ye(){function l(h,$){var E=nr=h.exports;h={};for(let[R,D]of Object.entries(E))typeof D=="function"?(E=z_(D),h[R]=E):h[R]=D;return nr=h,nr=(function(){var R=nr,D=ie=>we=>ie(we)>>>0,Y=ie=>()=>ie()>>>0;return(R=Object.assign({},R)).ub=D(R.ub),R.Yb=Y(R.Yb),R._b=D(R._b),R.mc=D(R.mc),R.nc=Y(R.nc),R.rc=D(R.rc),R})(),J.push(nr.$b),rl=(h=nr).ub,il=h.vb,t._OrtInit=h.wb,t._OrtGetLastError=h.xb,t._OrtCreateSessionOptions=h.yb,t._OrtAppendExecutionProvider=h.zb,t._OrtAddFreeDimensionOverride=h.Ab,t._OrtAddSessionConfigEntry=h.Bb,t._OrtReleaseSessionOptions=h.Cb,t._OrtCreateSession=h.Db,t._OrtReleaseSession=h.Eb,t._OrtGetInputOutputCount=h.Fb,t._OrtGetInputOutputMetadata=h.Gb,t._OrtFree=h.Hb,t._OrtCreateTensor=h.Ib,t._OrtGetTensorData=h.Jb,t._OrtReleaseTensor=h.Kb,t._OrtCreateRunOptions=h.Lb,t._OrtAddRunConfigEntry=h.Mb,t._OrtReleaseRunOptions=h.Nb,t._OrtCreateBinding=h.Ob,t._OrtBindInput=h.Pb,t._OrtBindOutput=h.Qb,t._OrtClearBoundOutputs=h.Rb,t._OrtReleaseBinding=h.Sb,t._OrtRunWithBinding=h.Tb,t._OrtRun=h.Ub,t._OrtEndProfiling=h.Vb,t._JsepOutput=h.Wb,t._JsepGetNodeName=h.Xb,$n=h.Yb,Kt=t._free=h.Zb,Si=t._malloc=h._b,Os=h.bc,nl=h.cc,sl=h.dc,al=h.ec,Rs=h.fc,ol=h.gc,ul=h.hc,Ce=h.ic,Ti=h.jc,ll=h.kc,xe=h.lc,Ms=h.mc,Ie=h.nc,dl=h.oc,Bs=h.pc,cl=h.qc,pl=h.rc,fl=h.sc,Ns=h.tc,hl=h.uc,ml=h.vc,gl=h.wc,yl=h.xc,_l=h.yc,wl=h.zc,bl=h.Ac,vl=h.Bc,$l=h.Cc,xl=h.Dc,Sl=h.Ec,Tl=h.Fc,Il=h.Gc,Cl=h.Hc,El=h.Ic,kl=h.Jc,Al=h.Kc,zl=h.Lc,Ol=h.Mc,Rl=h.Nc,Ml=h.Oc,Bl=h.Pc,Nl=h.Rc,Dl=h.Sc,Pl=h.bd,Ul=h.cd,Ll=h.hd,Wl=h.kd,ql=h.ld,Vl=h.md,Hl=h.nd,Gl=h.od,Fl=h.pd,jl=h.qd,Kl=h.rd,Ql=h.wd,Zl=h.Rd,Yl=h.Sd,Xl=h.Td,Jl=h.Ud,y=$,nr}var p,g=at();return t.instantiateWasm?new Promise(h=>{t.instantiateWasm(g,($,E)=>{h(l($,E))})}):n?l(new WebAssembly.Instance(y,at()),y):(Te??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",f):f+"ort-wasm-simd-threaded.jsep.wasm":new URL("/AIFighterPredictions/assets/ort-wasm-simd-threaded.jsep-6MnTkKum.wasm",import.meta.url).href,p=await(async function(h){var $=Te;if(!m&&!z($))try{var E=fetch($,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,h)}catch(R){I(`wasm streaming compile failed: ${R}`),I("falling back to ArrayBuffer instantiation")}return(async function(R,D){try{var Y=await(async function(ie){if(!m)try{var we=await o(ie);return new Uint8Array(we)}catch{}if(ie==Te&&m)ie=new Uint8Array(m);else{if(!u)throw"both async and sync fetching of the wasm failed";ie=u(ie)}return ie})(R);return await WebAssembly.instantiate(Y,D)}catch(ie){I(`failed to asynchronously prepare wasm: ${ie}`),$e(ie)}})($,h)})(g),l(p.instance,p.module))}class rt{name="ExitStatus";constructor(p){this.message=`Program terminated with exit(${p})`,this.status=p}}var It=l=>{l.terminate(),l.onmessage=()=>{}},Fe=[],Re=0,ot=null,k=l=>{ee.length==0&&(me(),ce(ee[0]));var p=ee.pop();if(!p)return 6;X.push(p),q[l.Tc]=p,p.Tc=l.Tc;var g={Uc:"run",Pd:l.Od,dd:l.dd,Tc:l.Tc};return p.postMessage(g,l.ud),0},O=0,M=(l,p,...g)=>{var h,$=16*g.length,E=Ie(),R=Ms($),D=R>>>3;for(h of g)typeof h=="bigint"?((x(),Z)[D++>>>0]=1n,(x(),Z)[D++>>>0]=h):((x(),Z)[D++>>>0]=0n,(x(),te)[D++>>>0]=h);return l=sl(l,0,$,R,p),xe(E),l};function F(l){if(n)return M(0,1,l);if(_=l,!(0<O)){for(var p of X)It(p);for(p of ee)It(p);ee=[],X=[],q={},A=!0}d(0,new rt(l))}function V(l){if(n)return M(1,0,l);H(l)}var H=l=>{if(_=l,n)throw V(l),"unwind";F(l)},ee=[],X=[],J=[],q={},he=l=>{var p=l.Tc;delete q[p],ee.push(l),X.splice(X.indexOf(l),1),l.Tc=0,al(p)};function ne(){J.forEach(l=>l())}var ce=l=>new Promise(p=>{l.onmessage=$=>{var E=$.data;if($=E.Uc,E.ad&&E.ad!=$n()){var R=q[E.ad];R?R.postMessage(E,E.ud):I(`Internal error! Worker sent a message "${$}" to target pthread ${E.ad}, but that thread no longer exists!`)}else $==="checkMailbox"?gn():$==="spawnThread"?k(E):$==="cleanupThread"?mn(()=>{he(q[E.Qd])}):$==="loaded"?(l.loaded=!0,p(l)):E.target==="setimmediate"?l.postMessage(E):$==="uncaughtException"?l.onerror(E.error):$==="callHandler"?t[E.zd](...E.args):$&&I(`worker sent an unknown command ${$}`)},l.onerror=$=>{throw I(`worker sent an error! ${$.filename}:${$.lineno}: ${$.message}`),$};var g,h=[];for(g of[])t.propertyIsEnumerable(g)&&h.push(g);l.postMessage({Uc:"load",Ad:h,Vd:be,Wd:y})});function me(){var l=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});ee.push(l)}var be,Pe=(l,p)=>{O=0,l=Ns(l,p),0<O?_=l:Rs(l)},Ae=[],Xe=0;function ut(l){var p=new nt(l>>>=0);return(x(),G)[p.Vc+12>>>0]==0&&(wr(p,!0),Xe--),$i(p,!1),Ae.push(p),pl(l)}var it=0,Ct=()=>{Ce(0,0);var l=Ae.pop();dl(l.ed),it=0};function wr(l,p){p=p?1:0,(x(),G)[l.Vc+12>>>0]=p}function $i(l,p){p=p?1:0,(x(),G)[l.Vc+13>>>0]=p}class nt{constructor(p){this.ed=p,this.Vc=p-24}}var yt=l=>{var p=it;if(!p)return Ti(0),0;var g=new nt(p);(x(),L)[g.Vc+16>>>2>>>0]=p;var h=(x(),L)[g.Vc+4>>>2>>>0];if(!h)return Ti(0),p;for(var $ of l){if($===0||$===h)break;if(cl($,h,g.Vc+16))return Ti($),p}return Ti(h),p};function pn(){return yt([])}function fn(l){return yt([l>>>0])}function t_(l,p,g,h){return yt([l>>>0,p>>>0,g>>>0,h>>>0])}var r_=()=>{var l=Ae.pop();l||$e("no exception to throw");var p=l.ed;throw(x(),G)[l.Vc+13>>>0]==0&&(Ae.push(l),$i(l,!0),wr(l,!1),Xe++),Bs(p),it=p};function i_(l,p,g){var h=new nt(l>>>=0);throw p>>>=0,g>>>=0,(x(),L)[h.Vc+16>>>2>>>0]=0,(x(),L)[h.Vc+4>>>2>>>0]=p,(x(),L)[h.Vc+8>>>2>>>0]=g,Bs(l),Xe++,it=l}var n_=()=>Xe;function mu(l,p,g,h){return n?M(2,1,l,p,g,h):gu(l,p,g,h)}function gu(l,p,g,h){if(l>>>=0,p>>>=0,g>>>=0,h>>>=0,!globalThis.SharedArrayBuffer)return 6;var $=[];return n&&$.length===0?mu(l,p,g,h):(l={Od:g,Tc:l,dd:h,ud:$},n?(l.Uc="spawnThread",postMessage(l,$),0):k(l))}function s_(l){throw it||=l>>>0,it}var yu=globalThis.TextDecoder&&new TextDecoder,_u=(l,p,g,h)=>{if(g=p+g,h)return g;for(;l[p]&&!(p>=g);)++p;return p},wu=(l,p=0,g,h)=>{if(16<(g=_u(l,p>>>=0,g,h))-p&&l.buffer&&yu)return yu.decode(l.buffer instanceof ArrayBuffer?l.subarray(p,g):l.slice(p,g));for(h="";p<g;){var $=l[p++];if(128&$){var E=63&l[p++];if((224&$)==192)h+=String.fromCharCode((31&$)<<6|E);else{var R=63&l[p++];65536>($=(240&$)==224?(15&$)<<12|E<<6|R:(7&$)<<18|E<<12|R<<6|63&l[p++])?h+=String.fromCharCode($):($-=65536,h+=String.fromCharCode(55296|$>>10,56320|1023&$))}}else h+=String.fromCharCode($)}return h},Qe=(l,p,g)=>(l>>>=0)?wu((x(),ue),l,p,g):"";function bu(l,p,g){return n?M(3,1,l,p,g):0}function vu(l,p){if(n)return M(4,1,l,p)}function $u(l,p){if(n)return M(5,1,l,p)}function xu(l,p,g){if(n)return M(6,1,l,p,g)}function Su(l,p,g){return n?M(7,1,l,p,g):0}function Tu(l,p){if(n)return M(8,1,l,p)}function Iu(l,p,g){if(n)return M(9,1,l,p,g)}function Cu(l,p,g,h){if(n)return M(10,1,l,p,g,h)}function Eu(l,p,g,h){if(n)return M(11,1,l,p,g,h)}function ku(l,p,g,h){if(n)return M(12,1,l,p,g,h)}function Au(l){if(n)return M(13,1,l)}function zu(l,p){if(n)return M(14,1,l,p)}function Ou(l,p,g){if(n)return M(15,1,l,p,g)}var a_=()=>$e(""),Ft=l=>{l>>>=0;for(var p="";;){var g=(x(),ue)[l++>>>0];if(!g)return p;p+=String.fromCharCode(g)}},bs={},vs={},si=class extends Error{constructor(l){super(l),this.name="BindingError"}};function ir(l,p,g={}){return(function(h,$,E={}){var R=$.name;if(!h)throw new si(`type "${R}" must have a positive integer typeid pointer`);if(vs.hasOwnProperty(h)){if(E.Bd)return;throw new si(`Cannot register type '${R}' twice`)}vs[h]=$,bs.hasOwnProperty(h)&&($=bs[h],delete bs[h],$.forEach(D=>D()))})(l,p,g)}var Ru=(l,p,g)=>{switch(p){case 1:return g?h=>(x(),G)[h>>>0]:h=>(x(),ue)[h>>>0];case 2:return g?h=>(x(),re)[h>>>1>>>0]:h=>(x(),ae)[h>>>1>>>0];case 4:return g?h=>(x(),N)[h>>>2>>>0]:h=>(x(),L)[h>>>2>>>0];case 8:return g?h=>(x(),Z)[h>>>3>>>0]:h=>(x(),le)[h>>>3>>>0];default:throw new TypeError(`invalid integer width (${p}): ${l}`)}};function o_(l,p,g,h,$){l>>>=0,g>>>=0,p=Ft(p>>>0);let E=R=>R;if(h=h===0n){let R=8*g;E=D=>BigInt.asUintN(R,D),$=E($)}ir(l,{name:p,Qc:E,Xc:(R,D)=>(typeof D=="number"&&(D=BigInt(D)),D),Wc:Ru(p,g,!h),Yc:null})}function u_(l,p,g,h){ir(l>>>=0,{name:p=Ft(p>>>0),Qc:function($){return!!$},Xc:function($,E){return E?g:h},Wc:function($){return this.Qc((x(),ue)[$>>>0])},Yc:null})}var Mu=[],Nr=[0,1,,1,null,1,!0,1,!1,1];function $s(l){9<(l>>>=0)&&--Nr[l+1]==0&&(Nr[l]=void 0,Mu.push(l))}var Et=l=>{if(!l)throw new si(`Cannot use deleted val. handle = ${l}`);return Nr[l]},Mt=l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=Mu.pop()||Nr.length;return Nr[p]=l,Nr[p+1]=1,p}};function xs(l){return this.Qc((x(),L)[l>>>2>>>0])}var l_={name:"emscripten::val",Qc:l=>{var p=Et(l);return $s(l),p},Xc:(l,p)=>Mt(p),Wc:xs,Yc:null};function d_(l){return ir(l>>>0,l_)}var c_=(l,p)=>{switch(p){case 4:return function(g){return this.Qc((x(),Q)[g>>>2>>>0])};case 8:return function(g){return this.Qc((x(),te)[g>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${l}`)}};function p_(l,p,g){g>>>=0,ir(l>>>=0,{name:p=Ft(p>>>0),Qc:h=>h,Xc:(h,$)=>$,Wc:c_(p,g),Yc:null})}function f_(l,p,g,h,$){l>>>=0,g>>>=0,p=Ft(p>>>0);let E=D=>D;if(h===0){var R=32-8*g;E=D=>D<<R>>>R,$=E($)}ir(l,{name:p,Qc:E,Xc:(D,Y)=>Y,Wc:Ru(p,g,h!==0),Yc:null})}function h_(l,p,g){function h(E){var R=(x(),L)[E>>>2>>>0];return E=(x(),L)[E+4>>>2>>>0],new $((x(),G).buffer,E,R)}var $=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];ir(l>>>=0,{name:g=Ft(g>>>0),Qc:h,Wc:h},{Bd:!0})}var br=(l,p,g)=>{var h=(x(),ue);if(p>>>=0,0<g){var $=p;g=p+g-1;for(var E=0;E<l.length;++E){var R=l.codePointAt(E);if(127>=R){if(p>=g)break;h[p++>>>0]=R}else if(2047>=R){if(p+1>=g)break;h[p++>>>0]=192|R>>6,h[p++>>>0]=128|63&R}else if(65535>=R){if(p+2>=g)break;h[p++>>>0]=224|R>>12,h[p++>>>0]=128|R>>6&63,h[p++>>>0]=128|63&R}else{if(p+3>=g)break;h[p++>>>0]=240|R>>18,h[p++>>>0]=128|R>>12&63,h[p++>>>0]=128|R>>6&63,h[p++>>>0]=128|63&R,E++}}h[p>>>0]=0,l=p-$}else l=0;return l},hn=l=>{for(var p=0,g=0;g<l.length;++g){var h=l.charCodeAt(g);127>=h?p++:2047>=h?p+=2:55296<=h&&57343>=h?(p+=4,++g):p+=3}return p};function m_(l,p){ir(l>>>=0,{name:p=Ft(p>>>0),Qc(g){var h=(x(),L)[g>>>2>>>0];return h=Qe(g+4,h,!0),Kt(g),h},Xc(g,h){h instanceof ArrayBuffer&&(h=new Uint8Array(h));var $=typeof h=="string";if(!($||ArrayBuffer.isView(h)&&h.BYTES_PER_ELEMENT==1))throw new si("Cannot pass non-string to std::string");var E=$?hn(h):h.length,R=Si(4+E+1),D=R+4;return(x(),L)[R>>>2>>>0]=E,$?br(h,D,E+1):(x(),ue).set(h,D>>>0),g!==null&&g.push(Kt,R),R},Wc:xs,Yc(g){Kt(g)}})}var Bu=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,g_=(l,p,g)=>{if(l>>>=1,16<(p=_u((x(),ae),l,p/2,g))-l&&Bu)return Bu.decode((x(),ae).slice(l,p));for(g="";l<p;++l){var h=(x(),ae)[l>>>0];g+=String.fromCharCode(h)}return g},y_=(l,p,g)=>{if(g??=2147483647,2>g)return 0;var h=p;g=(g-=2)<2*l.length?g/2:l.length;for(var $=0;$<g;++$){var E=l.charCodeAt($);(x(),re)[p>>>1>>>0]=E,p+=2}return(x(),re)[p>>>1>>>0]=0,p-h},__=l=>2*l.length,w_=(l,p,g)=>{var h="";l>>>=2;for(var $=0;!($>=p/4);$++){var E=(x(),L)[l+$>>>0];if(!E&&!g)break;h+=String.fromCodePoint(E)}return h},b_=(l,p,g)=>{if(p>>>=0,g??=2147483647,4>g)return 0;var h=p;g=h+g-4;for(var $=0;$<l.length;++$){var E=l.codePointAt($);if(65535<E&&$++,(x(),N)[p>>>2>>>0]=E,(p+=4)+4>g)break}return(x(),N)[p>>>2>>>0]=0,p-h},v_=l=>{for(var p=0,g=0;g<l.length;++g)65535<l.codePointAt(g)&&g++,p+=4;return p};function $_(l,p,g){if(l>>>=0,p>>>=0,g=Ft(g>>>=0),p===2)var h=g_,$=y_,E=__;else h=w_,$=b_,E=v_;ir(l,{name:g,Qc:R=>{var D=(x(),L)[R>>>2>>>0];return D=h(R+4,D*p,!0),Kt(R),D},Xc:(R,D)=>{if(typeof D!="string")throw new si(`Cannot pass non-string to C++ string type ${g}`);var Y=E(D),ie=Si(4+Y+p);return(x(),L)[ie>>>2>>>0]=Y/p,$(D,ie+4,Y+p),R!==null&&R.push(Kt,ie),ie},Wc:xs,Yc(R){Kt(R)}})}function x_(l,p){ir(l>>>=0,{Cd:!0,name:p=Ft(p>>>0),Qc:()=>{},Xc:()=>{}})}function S_(l){Os(l>>>0,!i,1,!r,131072,!1),ne()}var mn=l=>{if(!A)try{if(l(),!(0<O))try{n?$n()&&Rs(_):H(_)}catch(p){p instanceof rt||p=="unwind"||d(0,p)}}catch(p){p instanceof rt||p=="unwind"||d(0,p)}},T_=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Ss(l){l>>>=0,T_||(Atomics.waitAsync((x(),N),l>>>2,l).value.then(gn),l+=128,Atomics.store((x(),N),l>>>2,1))}var gn=()=>mn(()=>{var l=$n();l&&(Ss(l),ul())});function I_(l,p){(l>>>=0)==p>>>0?setTimeout(gn):n?postMessage({ad:l,Uc:"checkMailbox"}):(l=q[l])&&l.postMessage({Uc:"checkMailbox"})}var Ts=[];function C_(l,p,g,h,$){for(p>>>=0,$>>>=0,Ts.length=0,g=$>>>3,h=$+h>>>3;g<h;){var E;E=(x(),Z)[g++>>>0]?(x(),Z)[g++>>>0]:(x(),te)[g++>>>0],Ts.push(E)}return(p?Ds[p]:yw[l])(...Ts)}var E_=()=>{O=0};function k_(l){l>>>=0,n?postMessage({Uc:"cleanupThread",Qd:l}):he(q[l])}function A_(l){}var yn=l=>{try{l()}catch(p){$e(p)}};function z_(l){var p=(...g)=>{_n.push(l);try{return l(...g)}finally{A||(_n.pop(),jt&&vr===1&&_n.length===0&&(vr=0,O+=1,yn(Yl),typeof Fibers<"u"&&Fibers.ce()))}};return Pu.set(l,p),p}var vr=0,jt=null,Nu=0,_n=[],Is=new Map,Du=new Map,Pu=new Map,O_=0,Cs=null,R_=[],Uu=l=>(function(p){if(!A){if(vr===0){var g=!1,h=!1;p(($=0)=>{if(!A&&(Nu=$,g=!0,h)){vr=2,yn(()=>Xl(jt)),typeof MainLoop<"u"&&MainLoop.yd&&MainLoop.resume(),$=!1;try{var E=(function(){var Y=(x(),N)[jt+8>>>2>>>0];return Y=Du.get(Y),Y=Pu.get(Y),--O,Y()})()}catch(Y){E=Y,$=!0}var R=!1;if(!jt){var D=Cs;D&&(Cs=null,($?D.reject:D.resolve)(E),R=!0)}if($&&!R)throw E}}),h=!0,g||(vr=1,jt=(function(){var $=Si(65548),E=$+12;if((x(),L)[$>>>2>>>0]=E,(x(),L)[$+4>>>2>>>0]=E+65536,E=_n[0],!Is.has(E)){var R=O_++;Is.set(E,R),Du.set(R,E)}return E=Is.get(E),(x(),N)[$+8>>>2>>>0]=E,$})(),typeof MainLoop<"u"&&MainLoop.yd&&MainLoop.pause(),yn(()=>Zl(jt)))}else vr===2?(vr=0,yn(Jl),Kt(jt),jt=null,R_.forEach(mn)):$e(`invalid state: ${vr}`);return Nu}})(p=>{l().then(p)});function M_(l){return l>>>=0,Uu(async()=>{var p=await Et(l);return Mt(p)})}var Es=[],B_=l=>{var p=Es.length;return Es.push(l),p},N_=(l,p)=>{for(var g=Array(l),h=0;h<l;++h){var $=h,E=(x(),L)[p+4*h>>>2>>>0],R=vs[E];if(R===void 0)throw l=`parameter ${h}`,E=rl(E),p=Ft(E),Kt(E),new si(`${l} has unknown type ${p}`);g[$]=R}return g},D_=(l,p,g)=>{var h=[];return l=l(h,g),h.length&&((x(),L)[p>>>2>>>0]=Mt(h)),l},P_={},wn=l=>{var p=P_[l];return p===void 0?Ft(l):p};function U_(l,p,g){var[h,...$]=N_(l,p>>>0);p=h.Xc.bind(h);var E=$.map(Y=>Y.Wc.bind(Y));l--;var R={toValue:Et};switch(l=E.map((Y,ie)=>{var we=`argFromPtr${ie}`;return R[we]=Y,`${we}(args${ie?"+"+8*ie:""})`}),g){case 0:var D="toValue(handle)";break;case 2:D="new (toValue(handle))";break;case 3:D="";break;case 1:R.getStringOrSymbol=wn,D="toValue(handle)[getStringOrSymbol(methodName)]"}return D+=`(${l})`,h.Cd||(R.toReturnWire=p,R.emval_returnValue=D_,D=`return emval_returnValue(toReturnWire, destructorsRef, ${D})`),D=`return function (handle, methodName, destructorsRef, args) {
  ${D}
  }`,g=new Function(Object.keys(R),D)(...Object.values(R)),D=`methodCaller<(${$.map(Y=>Y.name)}) => ${h.name}>`,B_(Object.defineProperty(g,"name",{value:D}))}function L_(l,p){return p>>>=0,(l=Et(l>>>0))==Et(p)}function W_(l){return(l>>>=0)?(l=wn(l),Mt(globalThis[l])):Mt(globalThis)}function q_(l){return l=wn(l>>>0),Mt(t[l])}function V_(l,p){return p>>>=0,l=Et(l>>>0),p=Et(p),Mt(l[p])}function H_(l){9<(l>>>=0)&&(Nr[l+1]+=1)}function Lu(l,p,g,h,$){return Es[l>>>0](p>>>0,g>>>0,h>>>0,$>>>0)}function G_(l,p,g,h,$){return Lu(l>>>0,p>>>0,g>>>0,h>>>0,$>>>0)}function F_(){return Mt([])}function j_(l){l=Et(l>>>0);for(var p=Array(l.length),g=0;g<l.length;g++)p[g]=l[g];return Mt(p)}function K_(l){return Mt(wn(l>>>0))}function Q_(){return Mt({})}function Z_(l){for(var p=Et(l>>>=0);p.length;){var g=p.pop();p.pop()(g)}$s(l)}function Y_(l,p,g){p>>>=0,g>>>=0,l=Et(l>>>0),p=Et(p),g=Et(g),l[p]=g}function X_(l,p){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),p>>>=0,l=new Date(1e3*l),(x(),N)[p>>>2>>>0]=l.getUTCSeconds(),(x(),N)[p+4>>>2>>>0]=l.getUTCMinutes(),(x(),N)[p+8>>>2>>>0]=l.getUTCHours(),(x(),N)[p+12>>>2>>>0]=l.getUTCDate(),(x(),N)[p+16>>>2>>>0]=l.getUTCMonth(),(x(),N)[p+20>>>2>>>0]=l.getUTCFullYear()-1900,(x(),N)[p+24>>>2>>>0]=l.getUTCDay(),l=(l.getTime()-Date.UTC(l.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(x(),N)[p+28>>>2>>>0]=l}var Wu=l=>l%4==0&&(l%100!=0||l%400==0),qu=[0,31,60,91,121,152,182,213,244,274,305,335],Vu=[0,31,59,90,120,151,181,212,243,273,304,334];function J_(l,p){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),p>>>=0,l=new Date(1e3*l),(x(),N)[p>>>2>>>0]=l.getSeconds(),(x(),N)[p+4>>>2>>>0]=l.getMinutes(),(x(),N)[p+8>>>2>>>0]=l.getHours(),(x(),N)[p+12>>>2>>>0]=l.getDate(),(x(),N)[p+16>>>2>>>0]=l.getMonth(),(x(),N)[p+20>>>2>>>0]=l.getFullYear()-1900,(x(),N)[p+24>>>2>>>0]=l.getDay();var g=(Wu(l.getFullYear())?qu:Vu)[l.getMonth()]+l.getDate()-1|0;(x(),N)[p+28>>>2>>>0]=g,(x(),N)[p+36>>>2>>>0]=-60*l.getTimezoneOffset(),g=new Date(l.getFullYear(),6,1).getTimezoneOffset();var h=new Date(l.getFullYear(),0,1).getTimezoneOffset();l=0|(g!=h&&l.getTimezoneOffset()==Math.min(h,g)),(x(),N)[p+32>>>2>>>0]=l}function ew(l){l>>>=0;var p=new Date((x(),N)[l+20>>>2>>>0]+1900,(x(),N)[l+16>>>2>>>0],(x(),N)[l+12>>>2>>>0],(x(),N)[l+8>>>2>>>0],(x(),N)[l+4>>>2>>>0],(x(),N)[l>>>2>>>0],0),g=(x(),N)[l+32>>>2>>>0],h=p.getTimezoneOffset(),$=new Date(p.getFullYear(),6,1).getTimezoneOffset(),E=new Date(p.getFullYear(),0,1).getTimezoneOffset(),R=Math.min(E,$);return 0>g?(x(),N)[l+32>>>2>>>0]=+($!=E&&R==h):0<g!=(R==h)&&($=Math.max(E,$),p.setTime(p.getTime()+6e4*((0<g?R:$)-h))),(x(),N)[l+24>>>2>>>0]=p.getDay(),g=(Wu(p.getFullYear())?qu:Vu)[p.getMonth()]+p.getDate()-1|0,(x(),N)[l+28>>>2>>>0]=g,(x(),N)[l>>>2>>>0]=p.getSeconds(),(x(),N)[l+4>>>2>>>0]=p.getMinutes(),(x(),N)[l+8>>>2>>>0]=p.getHours(),(x(),N)[l+12>>>2>>>0]=p.getDate(),(x(),N)[l+16>>>2>>>0]=p.getMonth(),(x(),N)[l+20>>>2>>>0]=p.getYear(),l=p.getTime(),BigInt(isNaN(l)?-1:l/1e3)}function Hu(l,p,g,h,$,E,R){return n?M(16,1,l,p,g,h,$,E,R):-52}function Gu(l,p,g,h,$,E){if(n)return M(17,1,l,p,g,h,$,E)}var xi={},tw=()=>performance.timeOrigin+performance.now();function Fu(l,p){if(n)return M(18,1,l,p);if(xi[l]&&(clearTimeout(xi[l].id),delete xi[l]),!p)return 0;var g=setTimeout(()=>{delete xi[l],mn(()=>ol(l,performance.timeOrigin+performance.now()))},p);return xi[l]={id:g,be:p},0}function rw(l,p,g,h){l>>>=0,p>>>=0,g>>>=0,h>>>=0;var $=new Date().getFullYear(),E=new Date($,0,1).getTimezoneOffset();$=new Date($,6,1).getTimezoneOffset();var R=Math.max(E,$);(x(),L)[l>>>2>>>0]=60*R,(x(),N)[p>>>2>>>0]=+(E!=$),l=(p=D=>{var Y=Math.abs(D);return`UTC${0<=D?"-":"+"}${String(Math.floor(Y/60)).padStart(2,"0")}${String(Y%60).padStart(2,"0")}`})(E),p=p($),$<E?(br(l,g,17),br(p,h,17)):(br(l,h,17),br(p,g,17))}var iw=()=>Date.now();function nw(l,p,g){return g>>>=0,0<=l&&3>=l?(l===0?l=Date.now():l=performance.timeOrigin+performance.now(),l=Math.round(1e6*l),(x(),Z)[g>>>3>>>0]=BigInt(l),0):28}var ks=[],ju=(l,p)=>{ks.length=0;for(var g;g=(x(),ue)[l++>>>0];){var h=g!=105;p+=(h&=g!=112)&&p%8?4:0,ks.push(g==112?(x(),L)[p>>>2>>>0]:g==106?(x(),Z)[p>>>3>>>0]:g==105?(x(),N)[p>>>2>>>0]:(x(),te)[p>>>3>>>0]),p+=h?8:4}return ks};function sw(l,p,g){return l>>>=0,p=ju(p>>>0,g>>>0),Ds[l](...p)}function aw(l,p,g){return l>>>=0,p=ju(p>>>0,g>>>0),Ds[l](...p)}var ow=()=>{};function uw(l,p){return I(Qe(l>>>0,p>>>0))}var lw=()=>{throw O+=1,"unwind"};function dw(){return 4294901760}var cw=()=>navigator.hardwareConcurrency,Dr={},bn=l=>{var p;return(p=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(l))?+p[1]:(p=/:(\d+):\d+(?:\)|$)/.exec(l))?2147483648|+p[1]:0},Ku=l=>{for(var p of l)(l=bn(p))&&(Dr[l]=p)};function pw(){var l=Error().stack.toString().split(`
`);return l[0]=="Error"&&l.shift(),Ku(l),Dr.sd=bn(l[3]),Dr.Md=l,Dr.sd}function vn(l){if(!(l=Dr[l>>>0]))return 0;var p;if(p=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(l))l=p[1];else if(p=/^\s+at (.*) \(.*\)$/.exec(l))l=p[1];else{if(!(p=/^(.+?)@/.exec(l)))return 0;l=p[1]}Kt(vn.td??0),p=hn(l)+1;var g=Si(p);return g&&br(l,g,p),vn.td=g,vn.td}function fw(l){l>>>=0;var p=(x(),ue).length;if(l<=p||4294901760<l)return!1;for(var g=1;4>=g;g*=2){var h=p*(1+.2/g);h=Math.min(h,l+100663296);e:{h=(Math.min(4294901760,65536*Math.ceil(Math.max(l,h)/65536))-be.buffer.byteLength+65535)/65536|0;try{be.grow(h),K();var $=1;break e}catch{}$=void 0}if($)return!0}return!1}function hw(l,p,g){if(l>>>=0,p>>>=0,Dr.sd==l)var h=Dr.Md;else(h=Error().stack.toString().split(`
`))[0]=="Error"&&h.shift(),Ku(h);for(var $=3;h[$]&&bn(h[$])!=l;)++$;for(l=0;l<g&&h[l+$];++l)(x(),N)[p+4*l>>>2>>>0]=bn(h[l+$]);return l}var As,zs={},Qu=()=>{if(!As){var l,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(l in zs)zs[l]===void 0?delete p[l]:p[l]=zs[l];var g=[];for(l in p)g.push(`${l}=${p[l]}`);As=g}return As};function Zu(l,p){if(n)return M(19,1,l,p);l>>>=0,p>>>=0;var g,h=0,$=0;for(g of Qu()){var E=p+h;(x(),L)[l+$>>>2>>>0]=E,h+=br(g,E,1/0)+1,$+=4}return 0}function Yu(l,p){if(n)return M(20,1,l,p);l>>>=0,p>>>=0;var g=Qu();for(var h of((x(),L)[l>>>2>>>0]=g.length,l=0,g))l+=hn(h)+1;return(x(),L)[p>>>2>>>0]=l,0}function Xu(l){return n?M(21,1,l):52}function Ju(l,p,g,h){return n?M(22,1,l,p,g,h):52}function el(l,p,g,h){return n?M(23,1,l,p,g,h):70}var mw=[null,[],[]];function tl(l,p,g,h){if(n)return M(24,1,l,p,g,h);p>>>=0,g>>>=0,h>>>=0;for(var $=0,E=0;E<g;E++){var R=(x(),L)[p>>>2>>>0],D=(x(),L)[p+4>>>2>>>0];p+=8;for(var Y=0;Y<D;Y++){var ie=l,we=(x(),ue)[R+Y>>>0],ke=mw[ie];we===0||we===10?((ie===1?S:I)(wu(ke)),ke.length=0):ke.push(we)}$+=D}return(x(),L)[h>>>2>>>0]=$,0}function gw(l){return l>>>0}n||(function(){for(var l=t.numThreads-1;l--;)me();Fe.push(async()=>{var p=(async function(){if(!n)return Promise.all(ee.map(ce))})();Re++,await p,--Re==0&&ot&&(p=ot,ot=null,p())})})(),n||(be=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),K()),t.wasmBinary&&(m=t.wasmBinary),t.stackSave=()=>Ie(),t.stackRestore=l=>xe(l),t.stackAlloc=l=>Ms(l),t.setValue=function(l,p,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":(x(),G)[l>>>0]=p;break;case"i16":(x(),re)[l>>>1>>>0]=p;break;case"i32":(x(),N)[l>>>2>>>0]=p;break;case"i64":(x(),Z)[l>>>3>>>0]=BigInt(p);break;case"float":(x(),Q)[l>>>2>>>0]=p;break;case"double":(x(),te)[l>>>3>>>0]=p;break;case"*":(x(),L)[l>>>2>>>0]=p;break;default:$e(`invalid type for setValue: ${g}`)}},t.getValue=function(l,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return(x(),G)[l>>>0];case"i16":return(x(),re)[l>>>1>>>0];case"i32":return(x(),N)[l>>>2>>>0];case"i64":return(x(),Z)[l>>>3>>>0];case"float":return(x(),Q)[l>>>2>>>0];case"double":return(x(),te)[l>>>3>>>0];case"*":return(x(),L)[l>>>2>>>0];default:$e(`invalid type for getValue: ${p}`)}},t.UTF8ToString=Qe,t.stringToUTF8=br,t.lengthBytesUTF8=hn;var rl,il,$n,Kt,Si,Os,nl,sl,al,Rs,ol,ul,Ce,Ti,ll,xe,Ms,Ie,dl,Bs,cl,pl,fl,Ns,hl,ml,gl,yl,_l,wl,bl,vl,$l,xl,Sl,Tl,Il,Cl,El,kl,Al,zl,Ol,Rl,Ml,Bl,Nl,Dl,Pl,Ul,Ll,Wl,ql,Vl,Hl,Gl,Fl,jl,Kl,Ql,Zl,Yl,Xl,Jl,nr,yw=[F,V,mu,bu,vu,$u,xu,Su,Tu,Iu,Cu,Eu,ku,Au,zu,Ou,Hu,Gu,Fu,Zu,Yu,Xu,Ju,el,tl],Ds={927244:(l,p,g,h,$)=>{if(t===void 0||!t.Zc)return 1;if((l=Qe(Number(l>>>0))).startsWith("./")&&(l=l.substring(2)),!(l=t.Zc.get(l)))return 2;if(p=Number(p>>>0),g=Number(g>>>0),h=Number(h>>>0),p+g>l.byteLength)return 3;try{let E=l.subarray(p,p+g);switch($){case 0:(x(),ue).set(E,h>>>0);break;case 1:t.Xd?t.Xd(h,E):t.Ld(h,E);break;default:return 4}return 0}catch{return 4}},928068:(l,p,g)=>{t.xd(l,(x(),ue).subarray(p>>>0,p+g>>>0))},928132:()=>t.Zd(),928174:l=>{t.vd(l)},928211:()=>{t.Ed()},928242:()=>{t.Fd()},928271:()=>{t.Jd()},928296:l=>t.Dd(l),928329:l=>t.Hd(l),928361:(l,p,g)=>{t.jd(Number(l),Number(p),Number(g),!0)},928424:(l,p,g)=>{t.jd(Number(l),Number(p),Number(g))},928481:()=>typeof wasmOffsetConverter<"u",928538:l=>{t.ac("Abs",l,void 0)},928589:l=>{t.ac("Neg",l,void 0)},928640:l=>{t.ac("Floor",l,void 0)},928693:l=>{t.ac("Ceil",l,void 0)},928745:l=>{t.ac("Reciprocal",l,void 0)},928803:l=>{t.ac("Sqrt",l,void 0)},928855:l=>{t.ac("Exp",l,void 0)},928906:l=>{t.ac("Erf",l,void 0)},928957:l=>{t.ac("Sigmoid",l,void 0)},929012:(l,p,g)=>{t.ac("HardSigmoid",l,{alpha:p,beta:g})},929091:l=>{t.ac("Log",l,void 0)},929142:l=>{t.ac("Sin",l,void 0)},929193:l=>{t.ac("Cos",l,void 0)},929244:l=>{t.ac("Tan",l,void 0)},929295:l=>{t.ac("Asin",l,void 0)},929347:l=>{t.ac("Acos",l,void 0)},929399:l=>{t.ac("Atan",l,void 0)},929451:l=>{t.ac("Sinh",l,void 0)},929503:l=>{t.ac("Cosh",l,void 0)},929555:l=>{t.ac("Asinh",l,void 0)},929608:l=>{t.ac("Acosh",l,void 0)},929661:l=>{t.ac("Atanh",l,void 0)},929714:l=>{t.ac("Tanh",l,void 0)},929766:l=>{t.ac("Not",l,void 0)},929817:(l,p,g)=>{t.ac("Clip",l,{min:p,max:g})},929886:l=>{t.ac("Clip",l,void 0)},929938:(l,p)=>{t.ac("Elu",l,{alpha:p})},929996:l=>{t.ac("Gelu",l,void 0)},930048:l=>{t.ac("Relu",l,void 0)},930100:(l,p)=>{t.ac("LeakyRelu",l,{alpha:p})},930164:(l,p)=>{t.ac("ThresholdedRelu",l,{alpha:p})},930234:(l,p)=>{t.ac("Cast",l,{to:p})},930292:l=>{t.ac("Add",l,void 0)},930343:l=>{t.ac("Sub",l,void 0)},930394:l=>{t.ac("Mul",l,void 0)},930445:l=>{t.ac("Div",l,void 0)},930496:l=>{t.ac("Pow",l,void 0)},930547:l=>{t.ac("Equal",l,void 0)},930600:l=>{t.ac("Greater",l,void 0)},930655:l=>{t.ac("GreaterOrEqual",l,void 0)},930717:l=>{t.ac("Less",l,void 0)},930769:l=>{t.ac("LessOrEqual",l,void 0)},930828:(l,p,g,h,$)=>{t.ac("ReduceMean",l,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:h?Array.from((x(),N).subarray(Number(h)>>>0,Number($)>>>0)):[]})},931003:(l,p,g,h,$)=>{t.ac("ReduceMax",l,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:h?Array.from((x(),N).subarray(Number(h)>>>0,Number($)>>>0)):[]})},931177:(l,p,g,h,$)=>{t.ac("ReduceMin",l,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:h?Array.from((x(),N).subarray(Number(h)>>>0,Number($)>>>0)):[]})},931351:(l,p,g,h,$)=>{t.ac("ReduceProd",l,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:h?Array.from((x(),N).subarray(Number(h)>>>0,Number($)>>>0)):[]})},931526:(l,p,g,h,$)=>{t.ac("ReduceSum",l,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:h?Array.from((x(),N).subarray(Number(h)>>>0,Number($)>>>0)):[]})},931700:(l,p,g,h,$)=>{t.ac("ReduceL1",l,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:h?Array.from((x(),N).subarray(Number(h)>>>0,Number($)>>>0)):[]})},931873:(l,p,g,h,$)=>{t.ac("ReduceL2",l,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:h?Array.from((x(),N).subarray(Number(h)>>>0,Number($)>>>0)):[]})},932046:(l,p,g,h,$)=>{t.ac("ReduceLogSum",l,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:h?Array.from((x(),N).subarray(Number(h)>>>0,Number($)>>>0)):[]})},932223:(l,p,g,h,$)=>{t.ac("ReduceSumSquare",l,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:h?Array.from((x(),N).subarray(Number(h)>>>0,Number($)>>>0)):[]})},932403:(l,p,g,h,$)=>{t.ac("ReduceLogSumExp",l,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:h?Array.from((x(),N).subarray(Number(h)>>>0,Number($)>>>0)):[]})},932583:l=>{t.ac("Where",l,void 0)},932636:(l,p,g)=>{t.ac("Transpose",l,{perm:p?Array.from((x(),N).subarray(Number(p)>>>0,Number(g)>>>0)):[]})},932760:(l,p,g,h)=>{t.ac("DepthToSpace",l,{blocksize:p,mode:Qe(g),format:h?"NHWC":"NCHW"})},932893:(l,p,g,h)=>{t.ac("DepthToSpace",l,{blocksize:p,mode:Qe(g),format:h?"NHWC":"NCHW"})},933026:(l,p,g,h,$,E,R,D,Y,ie,we,ke,De,Le,$r)=>{t.ac("ConvTranspose",l,{format:Y?"NHWC":"NCHW",autoPad:p,dilations:[g],group:h,kernelShape:[$],pads:[E,R],strides:[D],wIsConst:()=>!!(x(),G)[ie>>>0],outputPadding:we?Array.from((x(),N).subarray(Number(we)>>>0,Number(ke)>>>0)):[],outputShape:De?Array.from((x(),N).subarray(Number(De)>>>0,Number(Le)>>>0)):[],activation:Qe($r)})},933459:(l,p,g,h,$,E,R,D,Y,ie,we,ke,De,Le)=>{t.ac("ConvTranspose",l,{format:D?"NHWC":"NCHW",autoPad:p,dilations:Array.from((x(),N).subarray(Number(g)>>>0,2+(Number(g)>>>0)>>>0)),group:h,kernelShape:Array.from((x(),N).subarray(Number($)>>>0,2+(Number($)>>>0)>>>0)),pads:Array.from((x(),N).subarray(Number(E)>>>0,4+(Number(E)>>>0)>>>0)),strides:Array.from((x(),N).subarray(Number(R)>>>0,2+(Number(R)>>>0)>>>0)),wIsConst:()=>!!(x(),G)[Y>>>0],outputPadding:ie?Array.from((x(),N).subarray(Number(ie)>>>0,Number(we)>>>0)):[],outputShape:ke?Array.from((x(),N).subarray(Number(ke)>>>0,Number(De)>>>0)):[],activation:Qe(Le)})},934120:(l,p,g,h,$,E,R,D,Y,ie,we,ke,De,Le,$r)=>{t.ac("ConvTranspose",l,{format:Y?"NHWC":"NCHW",autoPad:p,dilations:[g],group:h,kernelShape:[$],pads:[E,R],strides:[D],wIsConst:()=>!!(x(),G)[ie>>>0],outputPadding:we?Array.from((x(),N).subarray(Number(we)>>>0,Number(ke)>>>0)):[],outputShape:De?Array.from((x(),N).subarray(Number(De)>>>0,Number(Le)>>>0)):[],activation:Qe($r)})},934553:(l,p,g,h,$,E,R,D,Y,ie,we,ke,De,Le)=>{t.ac("ConvTranspose",l,{format:D?"NHWC":"NCHW",autoPad:p,dilations:Array.from((x(),N).subarray(Number(g)>>>0,2+(Number(g)>>>0)>>>0)),group:h,kernelShape:Array.from((x(),N).subarray(Number($)>>>0,2+(Number($)>>>0)>>>0)),pads:Array.from((x(),N).subarray(Number(E)>>>0,4+(Number(E)>>>0)>>>0)),strides:Array.from((x(),N).subarray(Number(R)>>>0,2+(Number(R)>>>0)>>>0)),wIsConst:()=>!!(x(),G)[Y>>>0],outputPadding:ie?Array.from((x(),N).subarray(Number(ie)>>>0,Number(we)>>>0)):[],outputShape:ke?Array.from((x(),N).subarray(Number(ke)>>>0,Number(De)>>>0)):[],activation:Qe(Le)})},935214:(l,p)=>{t.ac("GlobalAveragePool",l,{format:p?"NHWC":"NCHW"})},935305:(l,p,g,h,$,E,R,D,Y,ie,we,ke,De,Le)=>{t.ac("AveragePool",l,{format:Le?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:h,storage_order:$,dilations:E?Array.from((x(),N).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:D?Array.from((x(),N).subarray(Number(D)>>>0,Number(Y)>>>0)):[],pads:ie?Array.from((x(),N).subarray(Number(ie)>>>0,Number(we)>>>0)):[],strides:ke?Array.from((x(),N).subarray(Number(ke)>>>0,Number(De)>>>0)):[]})},935784:(l,p)=>{t.ac("GlobalAveragePool",l,{format:p?"NHWC":"NCHW"})},935875:(l,p,g,h,$,E,R,D,Y,ie,we,ke,De,Le)=>{t.ac("AveragePool",l,{format:Le?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:h,storage_order:$,dilations:E?Array.from((x(),N).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:D?Array.from((x(),N).subarray(Number(D)>>>0,Number(Y)>>>0)):[],pads:ie?Array.from((x(),N).subarray(Number(ie)>>>0,Number(we)>>>0)):[],strides:ke?Array.from((x(),N).subarray(Number(ke)>>>0,Number(De)>>>0)):[]})},936354:(l,p)=>{t.ac("GlobalMaxPool",l,{format:p?"NHWC":"NCHW"})},936441:(l,p,g,h,$,E,R,D,Y,ie,we,ke,De,Le)=>{t.ac("MaxPool",l,{format:Le?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:h,storage_order:$,dilations:E?Array.from((x(),N).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:D?Array.from((x(),N).subarray(Number(D)>>>0,Number(Y)>>>0)):[],pads:ie?Array.from((x(),N).subarray(Number(ie)>>>0,Number(we)>>>0)):[],strides:ke?Array.from((x(),N).subarray(Number(ke)>>>0,Number(De)>>>0)):[]})},936916:(l,p)=>{t.ac("GlobalMaxPool",l,{format:p?"NHWC":"NCHW"})},937003:(l,p,g,h,$,E,R,D,Y,ie,we,ke,De,Le)=>{t.ac("MaxPool",l,{format:Le?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:h,storage_order:$,dilations:E?Array.from((x(),N).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:D?Array.from((x(),N).subarray(Number(D)>>>0,Number(Y)>>>0)):[],pads:ie?Array.from((x(),N).subarray(Number(ie)>>>0,Number(we)>>>0)):[],strides:ke?Array.from((x(),N).subarray(Number(ke)>>>0,Number(De)>>>0)):[]})},937478:(l,p,g,h,$)=>{t.ac("Gemm",l,{alpha:p,beta:g,transA:h,transB:$})},937582:l=>{t.ac("MatMul",l,void 0)},937636:(l,p,g,h)=>{t.ac("ArgMax",l,{keepDims:!!p,selectLastIndex:!!g,axis:h})},937744:(l,p,g,h)=>{t.ac("ArgMin",l,{keepDims:!!p,selectLastIndex:!!g,axis:h})},937852:(l,p)=>{t.ac("Softmax",l,{axis:p})},937915:(l,p)=>{t.ac("Concat",l,{axis:p})},937975:(l,p,g,h,$)=>{t.ac("Split",l,{axis:p,numOutputs:g,splitSizes:h?Array.from((x(),N).subarray(Number(h)>>>0,Number($)>>>0)):[]})},938131:l=>{t.ac("Expand",l,void 0)},938185:(l,p)=>{t.ac("Gather",l,{axis:Number(p)})},938256:(l,p)=>{t.ac("GatherElements",l,{axis:Number(p)})},938335:(l,p)=>{t.ac("GatherND",l,{batch_dims:Number(p)})},938414:(l,p,g,h,$,E,R,D,Y,ie,we)=>{t.ac("Resize",l,{antialias:p,axes:g?Array.from((x(),N).subarray(Number(g)>>>0,Number(h)>>>0)):[],coordinateTransformMode:Qe($),cubicCoeffA:E,excludeOutside:R,extrapolationValue:D,keepAspectRatioPolicy:Qe(Y),mode:Qe(ie),nearestMode:Qe(we)})},938776:(l,p,g,h,$,E,R)=>{t.ac("Slice",l,{starts:p?Array.from((x(),N).subarray(Number(p)>>>0,Number(g)>>>0)):[],ends:h?Array.from((x(),N).subarray(Number(h)>>>0,Number($)>>>0)):[],axes:E?Array.from((x(),N).subarray(Number(E)>>>0,Number(R)>>>0)):[]})},939040:l=>{t.ac("Tile",l,void 0)},939092:(l,p,g)=>{t.ac("InstanceNormalization",l,{epsilon:p,format:g?"NHWC":"NCHW"})},939206:(l,p,g)=>{t.ac("InstanceNormalization",l,{epsilon:p,format:g?"NHWC":"NCHW"})},939320:l=>{t.ac("Range",l,void 0)},939373:(l,p)=>{t.ac("Einsum",l,{equation:Qe(p)})},939454:(l,p,g,h,$)=>{t.ac("Pad",l,{mode:p,value:g,pads:h?Array.from((x(),N).subarray(Number(h)>>>0,Number($)>>>0)):[]})},939597:(l,p,g,h,$,E)=>{t.ac("BatchNormalization",l,{epsilon:p,momentum:g,spatial:!!$,trainingMode:!!h,format:E?"NHWC":"NCHW"})},939766:(l,p,g,h,$,E)=>{t.ac("BatchNormalization",l,{epsilon:p,momentum:g,spatial:!!$,trainingMode:!!h,format:E?"NHWC":"NCHW"})},939935:(l,p,g)=>{t.ac("CumSum",l,{exclusive:Number(p),reverse:Number(g)})},940032:(l,p,g)=>{t.ac("DequantizeLinear",l,{axis:p,blockSize:g})},940122:(l,p,g,h,$)=>{t.ac("GridSample",l,{align_corners:p,mode:Qe(g),padding_mode:Qe(h),format:$?"NHWC":"NCHW"})},940292:(l,p,g,h,$)=>{t.ac("GridSample",l,{align_corners:p,mode:Qe(g),padding_mode:Qe(h),format:$?"NHWC":"NCHW"})},940462:(l,p)=>{t.ac("ScatterND",l,{reduction:Qe(p)})},940547:(l,p,g,h,$,E,R,D,Y)=>{t.ac("Attention",l,{numHeads:p,isUnidirectional:g,maskFilterValue:h,scale:$,doRotary:E,qkvHiddenSizes:R?Array.from((x(),N).subarray(Number(D)>>>0,Number(D)+R>>>0)):[],pastPresentShareBuffer:!!Y})},940819:l=>{t.ac("BiasAdd",l,void 0)},940874:l=>{t.ac("BiasSplitGelu",l,void 0)},940935:l=>{t.ac("FastGelu",l,void 0)},940991:(l,p,g,h,$,E,R,D,Y,ie,we,ke,De,Le,$r,Ps)=>{t.ac("Conv",l,{format:ke?"NHWC":"NCHW",auto_pad:p,dilations:g?Array.from((x(),N).subarray(Number(g)>>>0,Number(h)>>>0)):[],group:$,kernel_shape:E?Array.from((x(),N).subarray(Number(E)>>>0,Number(R)>>>0)):[],pads:D?Array.from((x(),N).subarray(Number(D)>>>0,Number(Y)>>>0)):[],strides:ie?Array.from((x(),N).subarray(Number(ie)>>>0,Number(we)>>>0)):[],w_is_const:()=>!!(x(),G)[Number(De)>>>0],activation:Qe(Le),activation_params:$r?Array.from((x(),Q).subarray(Number($r)>>>0,Number(Ps)>>>0)):[]})},941575:l=>{t.ac("Gelu",l,void 0)},941627:(l,p,g,h,$,E,R,D,Y)=>{t.ac("GroupQueryAttention",l,{numHeads:p,kvNumHeads:g,scale:h,softcap:$,doRotary:E,rotaryInterleaved:R,smoothSoftmax:D,localWindowSize:Y})},941844:(l,p,g,h)=>{t.ac("LayerNormalization",l,{axis:p,epsilon:g,simplified:!!h})},941955:(l,p,g,h)=>{t.ac("LayerNormalization",l,{axis:p,epsilon:g,simplified:!!h})},942066:(l,p,g,h,$,E)=>{t.ac("MatMulNBits",l,{k:p,n:g,accuracyLevel:h,bits:$,blockSize:E})},942193:(l,p,g,h,$,E)=>{t.ac("MultiHeadAttention",l,{numHeads:p,isUnidirectional:g,maskFilterValue:h,scale:$,doRotary:E})},942352:(l,p)=>{t.ac("QuickGelu",l,{alpha:p})},942416:(l,p,g,h,$)=>{t.ac("RotaryEmbedding",l,{interleaved:!!p,numHeads:g,rotaryEmbeddingDim:h,scale:$})},942555:(l,p,g)=>{t.ac("SkipLayerNormalization",l,{epsilon:p,simplified:!!g})},942657:(l,p,g)=>{t.ac("SkipLayerNormalization",l,{epsilon:p,simplified:!!g})},942759:(l,p,g,h)=>{t.ac("GatherBlockQuantized",l,{gatherAxis:p,quantizeAxis:g,blockSize:h})},942880:l=>{t.Id(l)},942914:(l,p)=>t.Kd(Number(l),Number(p),t.$c.Nd,t.$c.errors)};function _w(l,p,g){return Uu(async()=>{await t.Gd(Number(l),Number(p),Number(g))})}function ww(){return typeof wasmOffsetConverter<"u"}function bw(l,p,g,h){var $=Ie();try{return vl(l,p,g,h)}catch(E){if(xe($),E!==E+0)throw E;Ce(1,0)}}function vw(l,p,g){var h=Ie();try{return yl(l,p,g)}catch($){if(xe(h),$!==$+0)throw $;Ce(1,0)}}function $w(l,p,g){var h=Ie();try{fl(l,p,g)}catch($){if(xe(h),$!==$+0)throw $;Ce(1,0)}}function xw(l,p){var g=Ie();try{return Ns(l,p)}catch(h){if(xe(g),h!==h+0)throw h;Ce(1,0)}}function Sw(l){var p=Ie();try{hl(l)}catch(g){if(xe(p),g!==g+0)throw g;Ce(1,0)}}function Tw(l,p,g,h,$,E,R){var D=Ie();try{return wl(l,p,g,h,$,E,R)}catch(Y){if(xe(D),Y!==Y+0)throw Y;Ce(1,0)}}function Iw(l,p){var g=Ie();try{$l(l,p)}catch(h){if(xe(g),h!==h+0)throw h;Ce(1,0)}}function Cw(l,p,g,h,$,E){var R=Ie();try{ml(l,p,g,h,$,E)}catch(D){if(xe(R),D!==D+0)throw D;Ce(1,0)}}function Ew(l,p,g,h){var $=Ie();try{bl(l,p,g,h)}catch(E){if(xe($),E!==E+0)throw E;Ce(1,0)}}function kw(l,p,g,h,$){var E=Ie();try{gl(l,p,g,h,$)}catch(R){if(xe(E),R!==R+0)throw R;Ce(1,0)}}function Aw(l,p,g,h,$,E,R){var D=Ie();try{Sl(l,p,g,h,$,E,R)}catch(Y){if(xe(D),Y!==Y+0)throw Y;Ce(1,0)}}function zw(l,p,g,h,$,E,R){var D=Ie();try{Tl(l,p,g,h,$,E,R)}catch(Y){if(xe(D),Y!==Y+0)throw Y;Ce(1,0)}}function Ow(l,p,g,h,$,E,R,D){var Y=Ie();try{kl(l,p,g,h,$,E,R,D)}catch(ie){if(xe(Y),ie!==ie+0)throw ie;Ce(1,0)}}function Rw(l,p,g,h,$){var E=Ie();try{return xl(l,p,g,h,$)}catch(R){if(xe(E),R!==R+0)throw R;Ce(1,0)}}function Mw(l,p,g,h,$,E,R,D){var Y=Ie();try{Al(l,p,g,h,$,E,R,D)}catch(ie){if(xe(Y),ie!==ie+0)throw ie;Ce(1,0)}}function Bw(l,p,g,h,$,E,R,D,Y,ie,we,ke){var De=Ie();try{Il(l,p,g,h,$,E,R,D,Y,ie,we,ke)}catch(Le){if(xe(De),Le!==Le+0)throw Le;Ce(1,0)}}function Nw(l,p,g,h,$,E){var R=Ie();try{return Cl(l,p,g,h,$,E)}catch(D){if(xe(R),D!==D+0)throw D;Ce(1,0)}}function Dw(l,p,g){var h=Ie();try{return zl(l,p,g)}catch($){if(xe(h),$!==$+0)throw $;return Ce(1,0),0n}}function Pw(l,p,g,h,$,E,R,D,Y){var ie=Ie();try{_l(l,p,g,h,$,E,R,D,Y)}catch(we){if(xe(ie),we!==we+0)throw we;Ce(1,0)}}function Uw(l){var p=Ie();try{return Ol(l)}catch(g){if(xe(p),g!==g+0)throw g;Ce(1,0)}}function Lw(l,p,g){var h=Ie();try{return Rl(l,p,g)}catch($){if(xe(h),$!==$+0)throw $;Ce(1,0)}}function Ww(l,p){var g=Ie();try{return Ql(l,p)}catch(h){if(xe(g),h!==h+0)throw h;return Ce(1,0),0n}}function qw(l,p,g,h,$){var E=Ie();try{Ml(l,p,g,h,$)}catch(R){if(xe(E),R!==R+0)throw R;Ce(1,0)}}function Vw(l){var p=Ie();try{return Bl(l)}catch(g){if(xe(p),g!==g+0)throw g;return Ce(1,0),0n}}function Hw(l,p,g,h,$,E){var R=Ie();try{return Wl(l,p,g,h,$,E)}catch(D){if(xe(R),D!==D+0)throw D;Ce(1,0)}}function Gw(l,p,g,h,$,E){var R=Ie();try{return ql(l,p,g,h,$,E)}catch(D){if(xe(R),D!==D+0)throw D;Ce(1,0)}}function Fw(l,p,g,h,$,E,R,D){var Y=Ie();try{return El(l,p,g,h,$,E,R,D)}catch(ie){if(xe(Y),ie!==ie+0)throw ie;Ce(1,0)}}function jw(l,p,g,h,$){var E=Ie();try{return Vl(l,p,g,h,$)}catch(R){if(xe(E),R!==R+0)throw R;return Ce(1,0),0n}}function Kw(l,p,g,h){var $=Ie();try{return Hl(l,p,g,h)}catch(E){if(xe($),E!==E+0)throw E;Ce(1,0)}}function Qw(l,p,g,h){var $=Ie();try{return Gl(l,p,g,h)}catch(E){if(xe($),E!==E+0)throw E;Ce(1,0)}}function Zw(l,p,g,h,$,E,R,D,Y,ie,we,ke){var De=Ie();try{return Fl(l,p,g,h,$,E,R,D,Y,ie,we,ke)}catch(Le){if(xe(De),Le!==Le+0)throw Le;Ce(1,0)}}function Yw(l,p,g,h,$,E,R,D,Y,ie,we){var ke=Ie();try{Ul(l,p,g,h,$,E,R,D,Y,ie,we)}catch(De){if(xe(ke),De!==De+0)throw De;Ce(1,0)}}function Xw(l,p,g,h,$,E,R,D,Y,ie,we,ke,De,Le,$r,Ps){var nb=Ie();try{Ll(l,p,g,h,$,E,R,D,Y,ie,we,ke,De,Le,$r,Ps)}catch(Us){if(xe(nb),Us!==Us+0)throw Us;Ce(1,0)}}function Jw(l,p,g,h){var $=Ie();try{return jl(l,p,g,h)}catch(E){if(xe($),E!==E+0)throw E;Ce(1,0)}}function eb(l,p,g,h,$){var E=Ie();try{return Kl(l,p,g,h,$)}catch(R){if(xe(E),R!==R+0)throw R;Ce(1,0)}}function tb(l,p,g){var h=Ie();try{return Nl(l,p,g)}catch($){if(xe(h),$!==$+0)throw $;Ce(1,0)}}function rb(l,p,g){var h=Ie();try{return Dl(l,p,g)}catch($){if(xe(h),$!==$+0)throw $;Ce(1,0)}}function ib(l,p,g,h){var $=Ie();try{Pl(l,p,g,h)}catch(E){if(xe($),E!==E+0)throw E;Ce(1,0)}}function xn(){if(0<Re)ot=xn;else if(n)w?.(t),pe();else{for(var l=Fe;0<l.length;)l.shift()(t);0<Re?ot=xn:(t.calledRun=!0,A||(pe(),w?.(t)))}}return n||(nr=await Ye(),xn()),t.PTR_SIZE=4,U?t:new Promise((l,p)=>{w=l,T=p})}var Lm,Nd,Z$=j(()=>{Lm=Bd,Nd=globalThis.self?.name?.startsWith("em-pthread"),Nd&&Bd()}),ea,ro,Dd,bt,Wm,kn,Pd,Ud,ta,Ld,ra,qm,ia,Vm,Vo=j(()=>{qo(),ea=typeof location>"u"?void 0:location.origin,ro=import.meta.url>"file:"&&import.meta.url<"file;",Dd=()=>{{if(ro){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,ea).href}return import.meta.url}},bt=Dd(),Wm=()=>{if(bt&&!bt.startsWith("blob:"))return bt.substring(0,bt.lastIndexOf("/")+1)},kn=(e,t)=>{try{let r=t??bt;return(r?new URL(e,r):new URL(e)).origin===ea}catch{return!1}},Pd=(e,t)=>{let r=t??bt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Ud=(e,t)=>`${t??"./"}${e}`,ta=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Ld=async e=>(await import(e)).default,ra=(Q$(),on(Dm)).default,qm=async()=>{if(!bt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(kn(bt))return[void 0,ra()];let e=await ta(bt);return[e,ra(e)]},ia=(Z$(),on(Um)).default,Vm=async(e,t,r,i)=>{let n=ia&&!(e||t);if(n)if(bt)n=kn(bt);else if(i&&!r)n=!0;else throw new Error("cannot determine the script source URL.");if(n)return[void 0,ia];{let s="ort-wasm-simd-threaded.jsep.mjs",a=e??Pd(s,t),o=r&&a&&!kn(a,t),u=o?await ta(a):a??Ud(s,t);return[o?u:void 0,await Ld(u)]}}}),na,An,ki,sa,Wd,qd,Vd,Ho,Ue,ii=j(()=>{Vo(),An=!1,ki=!1,sa=!1,Wd=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},qd=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Vd=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Ho=async e=>{if(An)return Promise.resolve();if(ki)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(sa)throw new Error("previous call to 'initializeWebAssembly()' failed.");ki=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Vd())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!qd())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Wd();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,s=typeof n=="string"?n:void 0,a=n?.mjs,o=a?.href??a,u=n?.wasm,d=u?.href??u,c=e.wasmBinary,[f,m]=await Vm(o,s,r>1,!!c||!!d),y=!1,_=[];if(t>0&&_.push(new Promise(w=>{setTimeout(()=>{y=!0,w()},t)})),_.push(new Promise((w,T)=>{let v={numThreads:r};if(c)v.wasmBinary=c;else if(d||s)v.locateFile=b=>d??s+b;else if(o&&o.indexOf("blob:")!==0)v.locateFile=b=>new URL(b,o).href;else if(f){let b=Wm();b&&(v.locateFile=C=>b+C)}m(v).then(b=>{ki=!1,An=!0,na=b,w(),f&&URL.revokeObjectURL(f)},b=>{ki=!1,sa=!0,T(b)})})),await Promise.race(_),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ue=()=>{if(An&&na)return na;throw new Error("WebAssembly is not initialized yet.")}}),Wt,ts,Me,Go=j(()=>{ii(),Wt=(e,t)=>{let r=Ue(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},ts=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,s])=>{let a=t?t+n:n;if(typeof s=="object")ts(s,a+".",r,i);else if(typeof s=="string"||typeof s=="number")i(a,s.toString());else if(typeof s=="boolean")i(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},Me=e=>{let t=Ue(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetLastError(n,n+i);let s=Number(t.getValue(n,i===4?"i32":"i64")),a=t.getValue(n+i,"*"),o=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Hm,Y$=j(()=>{ii(),Go(),Hm=e=>{let t=Ue(),r=0,i=[],n=e||{};try{if(e?.logSeverityLevel===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(n.terminate=!1);let s=0;return e?.tag!==void 0&&(s=Wt(e.tag,i)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,s),r===0&&Me("Can't create run options."),e?.extra!==void 0&&ts(e.extra,"",new WeakSet,(a,o)=>{let u=Wt(a,i),d=Wt(o,i);t._OrtAddRunConfigEntry(r,u,d)!==0&&Me(`Can't set a run config entry: ${a} - ${o}.`)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(a=>t._free(a)),s}}}),Hd,Gd,Fd,Ai,jd,Gm,X$=j(()=>{ii(),Go(),Hd=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Gd=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Fd=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Ai=(e,t,r,i)=>{let n=Wt(t,i),s=Wt(r,i);Ue()._OrtAddSessionConfigEntry(e,n,s)!==0&&Me(`Can't set a session config entry: ${t} - ${r}.`)},jd=async(e,t,r)=>{let i=t.executionProviders;for(let n of i){let s=typeof n=="string"?n:n.name,a=[];switch(s){case"webnn":if(s="WEBNN",typeof n!="string"){let f=n?.deviceType;f&&Ai(e,"deviceType",f,r)}break;case"webgpu":if(s="JS",typeof n!="string"){let f=n;if(f?.preferredLayout){if(f.preferredLayout!=="NCHW"&&f.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${f.preferredLayout}`);Ai(e,"preferredLayout",f.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=Wt(s,r),u=a.length,d=0,c=0;if(u>0){d=Ue()._malloc(u*Ue().PTR_SIZE),r.push(d),c=Ue()._malloc(u*Ue().PTR_SIZE),r.push(c);for(let f=0;f<u;f++)Ue().setValue(d+f*Ue().PTR_SIZE,a[f][0],"*"),Ue().setValue(c+f*Ue().PTR_SIZE,a[f][1],"*")}await Ue()._OrtAppendExecutionProvider(e,o,d,c,u)!==0&&Me(`Can't append execution provider: ${s}.`)}},Gm=async e=>{let t=Ue(),r=0,i=[],n=e||{};Fd(n);try{let s=Hd(n.graphOptimizationLevel??"all"),a=Gd(n.executionMode??"sequential"),o=typeof n.logId=="string"?Wt(n.logId,i):0,u=n.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof n.optimizedModelFilePath=="string"?Wt(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(s,!!n.enableCpuMemArena,!!n.enableMemPattern,a,!!n.enableProfiling,0,o,u,d,c),r===0&&Me("Can't create session options."),n.executionProviders&&await jd(r,n,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);Ai(r,"enableGraphCapture",n.enableGraphCapture.toString(),i)}if(n.freeDimensionOverrides)for(let[f,m]of Object.entries(n.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof m!="number"||!Number.isInteger(m)||m<0)throw new Error(`free dimension override value must be a non-negative integer: ${m}`);let y=Wt(f,i);t._OrtAddFreeDimensionOverride(r,y,m)!==0&&Me(`Can't set a free dimension override: ${f} - ${m}.`)}return n.extra!==void 0&&ts(n.extra,"",new WeakSet,(f,m)=>{Ai(r,f,m,i)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Me("Can't release session options."),i.forEach(a=>t._free(a)),s}}}),Fr,pr,jr,ws,rs,Fo,jo,io,fe=j(()=>{Fr=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},pr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},jr=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,s)=>n*s,1);return r>0?Math.ceil(i*r):void 0},ws=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},rs=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Fo=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",jo=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",io=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ko,Fm=j(()=>{qo(),Ko=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),s;try{s=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let u=Math.ceil(i/65536);s=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let a=0;for(;;){let{done:o,value:u}=await n.read();if(o)break;let d=u.byteLength;new Uint8Array(s,a,d).set(u),a+=d}return new Uint8Array(s,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Kd,Qd,Zd,Yd,Qo,Xd,Ee,_r=j(()=>{fe(),Kd=["V","I","W","E","F"],Qd=(e,t)=>{console.log(`[${Kd[e]},${new Date().toISOString()}]${t}`)},Qo=(e,t)=>{Zd=e,Yd=t},Xd=(e,t)=>{let r=rs(e),i=rs(Zd);r>=i&&Qd(r,typeof t=="function"?t():t)},Ee=(...e)=>{Yd&&Xd(...e)}}),Jd,wi,B,is,jm,Km,Qm,ge=j(()=>{Jd=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},wi=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(r){if(i<2||n<2)return;let o=Jd.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=r?3:1;o<=s;o++){let u=i-o<0?1:e[i-o],d=n-o<0?1:t[n-o];if(u!==d&&u>1&&d>1)return;let c=Math.max(u,d);if(u&&d)a[s-o]=Math.max(u,d);else{if(c>1)return;a[s-o]=0}}return a}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},B=class Fn{static size(t){return Fn.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),s=i-1;for(;s>=0;){if(t[s]%r===0){n[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");n[s]=1,r/=t[s],s--}for(s--;s>=0;s--)n[s]=t[s];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Fn.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Fn.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let s=r;s<i;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[s])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,s)=>n+r[s]+r[s+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},is=class Wi{static adjustPoolAttributes(t,r,i,n,s,a){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<n.length){if(n[o]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let o=0;o<i.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<i.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=i[o]||a[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,s,a,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Wi.adjustPadAndReturnShape(t[u+(a?1:2)],r[u],i[u],n[u],s,u,u+t.length-2,o)}}static computePoolOutputShape(t,r,i,n,s,a,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let u=[r[0],r[1]];return Wi.computeShapeHelper(t,r,u,i,n,s,a,o),u}static computeConvOutputShape(t,r,i,n,s,a,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return Wi.computeShapeHelper(!1,t,u,i,n,s,a,o),u}static computeShapeHelper(t,r,i,n,s,a,o,u){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(Wi.adjustPadAndReturnShape(r[d+2],n[d],s[d],a[d],o,d,d+r.length-2,u))}static adjustPadAndReturnShape(t,r,i,n,s,a,o,u){let d=i*(n-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return s[a]=0,s[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+n-t;return s[a]=Math.floor(u==="SAME_LOWER"?(c+1)/2:c/2),s[o]=c-s[a],Math.floor((t+c-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[a]+s[o]-d)/r+1)}},jm=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,a,o;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let u=-1;if(i?(o=r[0],u=1):(o=r[1],u=0),r[u]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(n&&!wi.isValidBroadcast(n,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},Km=-34028234663852886e22,Qm=34028234663852886e22}),Zo,Zm=j(()=>{fe(),Zo=(e,t)=>new(ws(t))(e)}),aa,no,oa,ec,ua,tc,la,da,ca,rc,Ym,J$=j(()=>{fe(),_r(),aa=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),no=(e,t)=>{if(t==="int32")return e;let r=aa.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let n=e.byteLength/i,s=new(ws(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let a=new Int32Array(n);for(let o=0;o<n;o++){let u=s[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(u)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},oa=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(i.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(i,Number);return new Uint8Array(n.buffer)}case"uint8":{if(i.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(i,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},ec=1,ua=()=>ec++,tc=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),la=(e,t)=>{let r=aa.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,n)=>i*n)*r/8):0},da=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:n,shape:s,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=n,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return la(this.dataType,this.tensorShape)}destroy(){Ee("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=oa(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,n)=>i===r[n])}setIsDataConverted(e){this.isDataConverted=e}},ca=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let n=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),a;if(!s?.input.dataTypes.includes(t)){if(a=tc.get(t),!a||s?.input.dataTypes.includes(a))throw new Error(`WebNN backend does not support data type: ${t}`);Ee("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==la(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,a),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=no(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ee("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?oa(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},rc=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=ua();return this.tensorTrackersById.set(e,new ca(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,n){Ee("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${n}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,i,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){Ee("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let n=this.getMLContext(e),s=ua(),a=new da({sessionId:e,context:n,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(s,new ca(this,a)),this.externalTensors.add(a),s}async getCachedTensor(e,t,r,i,n,s,a){let o=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(o,t,r)){Ee("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}Ee("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}}`);let u=await o.createTensor({dataType:a??t,shape:r,dimensions:r,usage:i,writable:n,readable:s});return new da({sessionId:e,context:o,tensor:u,dataType:t,shape:r,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Ym=(...e)=>new rc(...e)}),zi,ic,Xm,e1=j(()=>{fe(),ii(),Zm(),J$(),_r(),zi=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),ic=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((n,s)=>n===i[s]&&e[n]===t[n])},Xm=class{constructor(e){this.tensorManager=Ym(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Qo(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ee("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ee("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)Ee("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>ic(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(n=>n.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ee("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,n){let s=zi.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,i,n)}async createTemporaryTensor(e,t,r){Ee("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=zi.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,i,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!Ue().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ee("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Zo(r,t)}}registerMLTensor(e,t,r,i){let n=zi.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,n,i);return Ee("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${i}} -> {tensorId: ${s}}`),s}registerMLConstant(e,t,r,i,n,s,a=!1){if(!s)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=s.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=u.slice(t,t+r).buffer,c;switch(n.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(a){let f=no(new Uint8Array(d),"int64");c=new Int32Array(f.buffer),n.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return Ee("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(n,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=zi.get(Fr(t)),n=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!n?.input.dataTypes.includes(i):!!n?.output.dataTypes.includes(i)}flush(){}}}),Yo=j(()=>{}),pa,zn,On,nc,sc,fa,so,ac,Jm,t1=j(()=>{_r(),Yo(),pa=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),zn=[],On=e=>Math.ceil(Number(e)/16)*16,nc=e=>{for(let t=0;t<zn.length;t++){let r=zn[t];if(e<=r)return r}return Math.ceil(e/16)*16},sc=1,fa=()=>sc++,so=async(e,t,r,i)=>{let n=On(r),s=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,n),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(i){let u=i();return u.set(new Uint8Array(o,0,r)),u}else return new Uint8Array(o.slice(0,r))}finally{s.destroy()}},ac=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of pa)zn.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,s=On(n),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${n}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,i,n)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,a.gpuData.buffer,0,s),this.backend.device.queue.submit([d.finish()]),o.destroy(),Ee("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=On(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return Ee("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=fa();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),Ee("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ee("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=nc(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||s){let o=(n?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let a={id:fa(),type:0,buffer:i};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),Ee("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ee("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await so(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=pa.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ee("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Jm=(...e)=>new ac(...e)}),oc,Oe,Ke=j(()=>{oc=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Oe=e=>new oc(e)}),bi,Rn,Je,lt,de,je,ao,di,Mr,oe,Oi,P,se,eg,Xo,uc,tg,_e=j(()=>{fe(),ge(),bi=64,Rn=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Je=(e,t=1)=>{let r=Rn(e,t);return typeof r=="string"?r:r[0]},lt=(e,t=1)=>{let r=Rn(e,t);return typeof r=="string"?r:r[1]},de=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:B.computeStrides(r)})}),t},je=e=>e%4===0?4:e%2===0?2:1,ao=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,di=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Mr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,oe=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Oi=(e,t,r,i,n)=>{let s=typeof r=="number",a=s?r:r.length,o=[...new Array(a).keys()],u=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,d=Rn(t,n),c=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],m={indices:u,value:c,storage:f,tensor:t},y=U=>typeof U=="string"?U:`${U}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=s?"uniforms.":"",T=`${w}${e}_shape`,v=`${w}${e}_strides`,b="";for(let U=0;U<a-1;U++)b+=`
    let dim${U} = current / ${oe(v,U,a)};
    let rest${U} = current % ${oe(v,U,a)};
    indices[${U}] = dim${U};
    current = rest${U};
    `;b+=`indices[${a-1}] = current;`;let C=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${m.indices} {
    var indices: ${m.indices};
    var current = offset;
    ${b}
    return indices;
  }`,S=U=>(_.offsetToIndices=!0,a<2?U:`o2i_${e}(${U})`),I=[];if(a>=2)for(let U=a-1;U>=0;U--)I.push(`${oe(v,U,a)} * (indices[${U}])`);let A=a<2?"":`
  fn i2o_${e}(indices: ${m.indices}) -> u32 {
    return ${I.join("+")};
  }`,z=U=>(_.indicesToOffset=!0,a<2?U:`i2o_${e}(${U})`),x=(...U)=>a===0?"0u":`${m.indices}(${U.map(y).join(",")})`,W=(U,K)=>a<2?`${U}`:`${oe(U,K,a)}`,G=(U,K,pe)=>a<2?`${U}=${pe};`:`${oe(U,K,a)}=${pe};`,ue={},re=(U,K)=>{_.broadcastedIndicesToOffset=!0;let pe=`${K.name}broadcastedIndicesTo${e}Offset`;if(pe in ue)return`${pe}(${U})`;let $e=[];for(let at=a-1;at>=0;at--){let Ye=K.indicesGet("outputIndices",at+K.rank-a);$e.push(`${W(v,at)} * (${Ye} % ${W(T,at)})`)}return ue[pe]=`fn ${pe}(outputIndices: ${K.type.indices}) -> u32 {
             return ${$e.length>0?$e.join("+"):"0u"};
           }`,`${pe}(${U})`},ae=(U,K)=>(()=>{if(m.storage===m.value)return`${e}[${U}]=${K};`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`${e}[${U}]=vec2<u32>(u32(${K}), select(0u, 0xFFFFFFFFu, ${K} < 0));`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`${e}[${U}]=vec2<u32>(u32(${K}), 0u);`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`${e}[${U}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${K}));`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),N=U=>(()=>{if(m.storage===m.value)return`${e}[${U}]`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`i32(${e}[${U}].x)`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`u32(${e}[${U}].x)`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${U}] & 0xFFu), bool(${e}[${U}] & 0xFF00u), bool(${e}[${U}] & 0xFF0000u), bool(${e}[${U}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),L=a<2?"":`
  fn get_${e}ByIndices(indices: ${m.indices}) -> ${c} {
    return ${N(`i2o_${e}(indices)`)};
  }`,Q=a<2?"":(()=>{let U=o.map(pe=>`d${pe}: u32`).join(", "),K=o.map(pe=>`d${pe}`).join(", ");return`
  fn get_${e}(${U}) -> ${c} {
    return get_${e}ByIndices(${x(K)});
  }`})(),te=(...U)=>{if(U.length!==a)throw new Error(`indices length must be ${a}`);let K=U.map(y).join(",");return a===0?N("0u"):a===1?N(K[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${K})`)},Z=U=>a<2?N(U):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${U})`),le=a<2?"":`
  fn set_${e}ByIndices(indices: ${m.indices}, value: ${c}) {
    ${ae(`i2o_${e}(indices)`,"value")}
  }`,Te=a<2?"":(()=>{let U=o.map(pe=>`d${pe}: u32`).join(", "),K=o.map(pe=>`d${pe}`).join(", ");return`
  fn set_${e}(${U}, value: ${c}) {
    set_${e}ByIndices(${x(K)}, value);
  }`})();return{impl:()=>{let U=[],K=!1;return _.offsetToIndices&&(U.push(C),K=!0),_.indicesToOffset&&(U.push(A),K=!0),_.broadcastedIndicesToOffset&&(Object.values(ue).forEach(pe=>U.push(pe)),K=!0),_.set&&(U.push(Te),K=!0),_.setByIndices&&(U.push(le),K=!0),_.get&&(U.push(Q),K=!0),_.getByIndices&&(U.push(L),K=!0),!s&&K&&U.unshift(`const ${T} = ${m.indices}(${r.join(",")});`,`const ${v} = ${m.indices}(${B.computeStrides(r).join(",")});`),U.join(`
`)},type:m,offsetToIndices:S,indicesToOffset:z,broadcastedIndicesToOffset:re,indices:x,indicesGet:W,indicesSet:G,set:(...U)=>{if(U.length!==a+1)throw new Error(`indices length must be ${a}`);let K=U[a];if(typeof K!="string")throw new Error("value must be string");let pe=U.slice(0,a).map(y).join(",");return a===0?ae("0u",K):a===1?ae(pe[0],K):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${pe}, ${K})`)},setByOffset:ae,setByIndices:(U,K)=>a<2?ae(U,K):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${U}, ${K});`),get:te,getByOffset:N,getByIndices:Z,usage:i,name:e,strides:v,shape:T,rank:a}},P=(e,t,r,i=1)=>Oi(e,t,r,"input",i),se=(e,t,r,i=1)=>Oi(e,t,r,"output",i),eg=(e,t,r)=>Oi(e,t,r,"atomicOutput",1),Xo=(e,t,r,i=1)=>Oi(e,t,r,"internal",i),uc=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=bi){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${s}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let n=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},tg=(e,t)=>new uc(e,t)}),lc,ha,dc,cc,pc,fc,Tt,rg,ig,Br=j(()=>{fe(),ge(),Ke(),_e(),lc=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ha=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),dc=(e,t)=>B.sortBasedOnPerm(e,ha(e.length,t)),cc=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)n+=`a[${e[s]}]=i[${s}];`;return n+="return a;}"},pc=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},fc=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Tt=(e,t)=>{let r=e.dataType,i=e.dims.length,n=ha(i,t),s=dc(e.dims,n),a=e.dims,o=s,u=i<2||fc(n,e.dims),d;if(u)return d=_=>{let w=P("input",r,a,4),T=se("output",r,o,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(w,T)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=B.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:c,newPerm:f}=pc(e.dims,n),m=B.areEqual(f,[2,3,1]),y=B.areEqual(f,[3,1,2]);if(c.length===2||m||y){a=m?[c[0],c[1]*c[2]]:y?[c[0]*c[1],c[2]]:c,o=[a[1],a[0]];let _=16;return d=w=>{let T=P("a",r,a.length),v=se("output",r,o.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(T,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${_+1}>, ${_}>;
  ${w.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${T.getByIndices(`${T.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=B.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/_),y:Math.ceil(o[0]/_)},programUniforms:[{type:12,data:w},...de(a,o)]}},getShaderSource:d}}return d=_=>{let w=P("a",r,a.length),T=se("output",r,o.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(w,T)}

  ${cc(n,i,w,T)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${T.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${T.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=B.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...de(a,o)]}},getShaderSource:d}},rg=(e,t)=>{lc(e.inputs,t.perm),e.compute(Tt(e.inputs[0],t.perm))},ig=e=>Oe({perm:e.perm})}),hc,mc,gc,yc,_c,wc,bc,vc,$c,xc,Bt,ng,sg,ag,og,ug,lg,dg,cg,pg,fg,r1=j(()=>{fe(),ge(),_e(),Jo(),Br(),hc={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},mc={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},gc={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},yc={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},_c=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},wc=(e,t)=>{let r=[],i=e.length;for(let s=0;s<i;s++)t.indexOf(s)===-1&&r.push(e[s]);let n=t.map(s=>e[s]);return[r,n]},bc=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?i.push(e[n++]):i.push(1);return i},vc=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},$c=(e,t)=>{let r=[];if(!vc(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},xc=(e,t,r,i,n,s,a)=>{let o=r[0].dims,u=B.size(s),d=B.size(a),c=P("_A",r[0].dataType,o),f=se("output",n,s),m=64;u===1&&(m=256);let y=`
          var<workgroup> aBestValues : array<f32, ${m}>;
       `,_=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(c,f)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(m)}

          let outputIndex = global_idx / ${m};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${gc[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${m}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${hc[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${m}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${mc[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${i==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${yc[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${m}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:u},programUniforms:[{type:12,data:d}]})}},Bt=(e,t,r,i)=>{let n=e.inputs.length===1?r:oo(e.inputs,r),s=n.axes;s.length===0&&!n.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((y,_)=>_));let a=B.normalizeAxes(s,e.inputs[0].dims.length),o=a,u=e.inputs[0],d=$c(o,e.inputs[0].dims.length);d.length>0&&(u=e.compute(Tt(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=_c(o.length,u.dims.length));let[c,f]=wc(u.dims,o),m=c;n.keepDims&&(m=bc(c,a)),e.compute(xc(t,n.cacheKey,[u],i,e.inputs[0].dataType,m,f),{inputs:[u]})},ng=(e,t)=>{Bt(e,"ReduceMeanShared",t,"mean")},sg=(e,t)=>{Bt(e,"ReduceL1Shared",t,"l1")},ag=(e,t)=>{Bt(e,"ReduceL2Shared",t,"l2")},og=(e,t)=>{Bt(e,"ReduceLogSumExpShared",t,"logSumExp")},ug=(e,t)=>{Bt(e,"ReduceMaxShared",t,"max")},lg=(e,t)=>{Bt(e,"ReduceMinShared",t,"min")},dg=(e,t)=>{Bt(e,"ReduceProdShared",t,"prod")},cg=(e,t)=>{Bt(e,"ReduceSumShared",t,"sum")},pg=(e,t)=>{Bt(e,"ReduceSumSquareShared",t,"sumSquare")},fg=(e,t)=>{Bt(e,"ReduceLogSumShared",t,"logSum")}}),Nt,Sc,ns,oo,Dt,Tc,Ic,Cc,Ec,kc,Ac,zc,Oc,Rc,Mc,Pt,hg,mg,gg,yg,_g,wg,bg,vg,$g,xg,Jo=j(()=>{fe(),ge(),Ke(),_e(),r1(),Nt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Sc=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],ns=(e,t,r,i,n,s,a=!1,o=!1)=>{let u=[],d=r[0].dims,c=d.length,f=B.normalizeAxes(n,c),m=!o&&f.length===0;d.forEach((w,T)=>{m||f.indexOf(T)>=0?a&&u.push(1):u.push(w)});let y=u.length,_=B.size(u);return{name:e,shaderCache:t,getShaderSource:w=>{let T=[],v=P("_A",r[0].dataType,c),b=se("output",s,y),C=i(v,b,f),S=C[2];for(let I=0,A=0;I<c;I++)m||f.indexOf(I)>=0?(a&&A++,S=`for(var j${I}: u32 = 0; j${I} < ${d[I]}; j${I}++) {
                  ${C[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${v.indicesSet("input_indices",I,`j${I}`)}
                  ${S}
                }`):(T.push(`${v.indicesSet("input_indices",I,b.indicesGet("output_indices",A))};`),A++);return`

        ${w.registerUniform("output_size","u32").declareVariables(v,b)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${T.join(`
`)}
          ${C[0]}       // init ops for reduce max/min
          ${C[1]}
          ${S}
          ${C[3]}
          ${C.length===4?b.setByOffset("global_idx","value"):C.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:s}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...de(d,u)]})}},oo=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),Oe({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Dt=(e,t,r,i)=>{let n=e.inputs,s=n.length===1?r:oo(n,r);e.compute(ns(t,{hint:s.cacheKey,inputDependencies:["rank"]},[n[0]],s.noopWithEmptyAxes&&s.axes.length===0?Sc:i,s.axes,n[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Tc=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Ic=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Cc=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Ec=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},kc=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceMax",t,(r,i,n)=>{let s=[];for(let a=0;a<r.rank;a++)(n.indexOf(a)>=0||n.length===0)&&s.push(r.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Ac=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceMean",t,(r,i,n)=>{let s=1;for(let a=0;a<r.rank;a++)(n.indexOf(a)>=0||n.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${s});`]})},zc=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceMin",t,(r,i,n)=>{let s=[];for(let a=0;a<r.rank;a++)(n.indexOf(a)>=0||n.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Oc=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Rc=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Mc=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Pt=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?i*=e[s]:n*=e[s];return n<32&&i>1024},hg=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ac(e,t):ng(e,t)},mg=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ic(e,t):sg(e,t)},gg=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cc(e,t):ag(e,t)},yg=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ec(e,t):og(e,t)},_g=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?kc(e,t):ug(e,t)},wg=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zc(e,t):lg(e,t)},bg=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Oc(e,t):dg(e,t)},vg=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Rc(e,t):cg(e,t)},$g=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Mc(e,t):pg(e,t)},xg=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tc(e,t):fg(e,t)}}),ma,Sg,Tg,uo,i1=j(()=>{fe(),Ke(),Jo(),ma=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Sg=(e,t)=>{ma(e.inputs);let r=(i,n,s)=>{let a=[];for(let o=0;o<i.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(ns("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Tg=(e,t)=>{ma(e.inputs);let r=(i,n,s)=>{let a=[];for(let o=0;o<i.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(ns("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},uo=e=>Oe(e)}),Bc,Mn,Nc,Dc,Pc,un,Uc,Ig,eu=j(()=>{fe(),ge(),Yo(),_e(),Bc=(e,t)=>{let r=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],d=r.dims[1],c=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=n.dims[0]/3,m=f,y=m;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let C of t.qkvHiddenSizes)if(C%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],m=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let _=d;if(f!==m)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==f+m+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(a){if(m!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==m/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=a.dims[3])}let T=_+w,v=-1,b=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==T)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:d,pastSequenceLength:w,kvSequenceLength:_,totalSequenceLength:T,maxSequenceLength:v,inputHiddenSize:c,hiddenSize:f,vHiddenSize:y,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Mn=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Nc=(e,t,r,i,n,s,a,o)=>{let u=je(a?1:s),d=64,c=s/u;c<d&&(d=32);let f=Math.ceil(s/u/d),m=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:c},{type:12,data:f}],y=Je(e.dataType,u),_=lt(1,u),w=["type"];a&&w.push("type"),o&&w.push("type");let T=v=>{let b=se("x",e.dataType,e.dims,u),C=[b],S=a?P("seq_lens",a.dataType,a.dims):void 0;S&&C.push(S);let I=o?P("total_sequence_length_input",o.dataType,o.dims):void 0;I&&C.push(I);let A=lt(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(z).declareVariables(...C)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Mn(S,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${A}(1.0) / ${A}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${A}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${y};${u}`,inputDependencies:w},getShaderSource:T,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:m})}},Dc=(e,t,r,i,n,s,a,o,u)=>{let d=a+s.kvSequenceLength,c=[s.batchSize,s.numHeads,s.sequenceLength,d],f=e>1&&i,m=s.kvNumHeads?s.kvNumHeads:s.numHeads,y=f?[s.batchSize,m,d,s.headSize]:void 0,_=s.nReps?s.nReps:1,w=s.scale===0?1/Math.sqrt(s.headSize):s.scale,T=je(s.headSize),v=s.headSize/T,b=12,C={x:Math.ceil(d/b),y:Math.ceil(s.sequenceLength/b),z:s.batchSize*s.numHeads},S=[{type:12,data:s.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:w},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:_}],I=f&&i&&B.size(i.dims)>0,A=["type","type"];I&&A.push("type"),n&&A.push("type"),o&&A.push("type"),u&&A.push("type");let z=[{dims:c,dataType:t.dataType,gpuDataType:0}];f&&z.push({dims:y,dataType:t.dataType,gpuDataType:0});let x=W=>{let G=P("q",t.dataType,t.dims,T),ue=P("key",r.dataType,r.dims,T),re=[G,ue];if(I){let le=P("past_key",i.dataType,i.dims,T);re.push(le)}n&&re.push(P("attention_bias",n.dataType,n.dims));let ae=o?P("seq_lens",o.dataType,o.dims):void 0;ae&&re.push(ae);let N=u?P("total_sequence_length_input",u.dataType,u.dims):void 0;N&&re.push(N);let L=se("output",t.dataType,c),Q=[L];f&&Q.push(se("present_key",t.dataType,y,T));let te=lt(1,T),Z=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${G.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${G.type.storage}, ${b*b}>;
  ${W.registerUniforms(Z).declareVariables(...re,...Q)}
  ${W.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Mn(ae,N,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${te}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${te}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(T){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${T}`)}})()};
        output[outputIdx] = ${L.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${T};${n!==void 0};${i!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:z,dispatchGroup:C,programUniforms:S}),getShaderSource:x}},Pc=(e,t,r,i,n,s,a=void 0,o=void 0)=>{let u=s+n.kvSequenceLength,d=n.nReps?n.nReps:1,c=n.vHiddenSize*d,f=e>1&&i,m=n.kvNumHeads?n.kvNumHeads:n.numHeads,y=f?[n.batchSize,m,u,n.headSize]:void 0,_=[n.batchSize,n.sequenceLength,c],w=12,T={x:Math.ceil(n.vHeadSize/w),y:Math.ceil(n.sequenceLength/w),z:n.batchSize*n.numHeads},v=[{type:12,data:n.sequenceLength},{type:12,data:u},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:c},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:d}],b=f&&i&&B.size(i.dims)>0,C=["type","type"];b&&C.push("type"),a&&C.push("type"),o&&C.push("type");let S=[{dims:_,dataType:t.dataType,gpuDataType:0}];f&&S.push({dims:y,dataType:t.dataType,gpuDataType:0});let I=A=>{let z=P("probs",t.dataType,t.dims),x=P("v",r.dataType,r.dims),W=[z,x];b&&W.push(P("past_value",i.dataType,i.dims));let G=a?P("seq_lens",a.dataType,a.dims):void 0;a&&W.push(G);let ue=o?P("total_sequence_length_input",o.dataType,o.dims):void 0;o&&W.push(ue);let re=[se("output",t.dataType,_)];f&&re.push(se("present_value",t.dataType,y));let ae=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${z.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${z.type.value}, ${w*w}>;
  ${A.registerUniforms(ae).declareVariables(...W,...re)}
  ${A.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Mn(G,ue,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${z.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:S,dispatchGroup:T,programUniforms:v}),getShaderSource:I}},un=(e,t,r,i,n,s,a,o,u,d,c=void 0,f=void 0)=>{let m=Math.min(e.outputCount,1+(a?1:0)+(o?1:0)),y=m>1?d.pastSequenceLength:0,_=y+d.kvSequenceLength,w=u&&B.size(u.dims)>0?u:void 0,T=[t,r];m>1&&a&&B.size(a.dims)>0&&T.push(a),w&&T.push(w),c&&T.push(c),f&&T.push(f);let v=e.compute(Dc(m,t,r,a,w,d,y,c,f),{inputs:T,outputs:m>1?[-1,1]:[-1]})[0];e.compute(Nc(v,d.batchSize,d.numHeads,y,d.sequenceLength,_,c,f),{inputs:c&&f?[v,c,f]:[v],outputs:[]});let b=[v,i];m>1&&o&&B.size(o.dims)>0&&b.push(o),c&&b.push(c),f&&b.push(f),e.compute(Pc(m,v,i,o,d,y,c,f),{inputs:b,outputs:m>1?[0,2]:[0]})},Uc=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,s=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=f=>{let m=se("output_q",u[0].dataType,r),y=se("output_k",u[0].dataType,r),_=se("output_v",u[0].dataType,r),w=P("input",u[0].dataType,u[0].dims),T=P("weight",u[1].dataType,u[1].dims),v=P("bias",u[2].dataType,u[2].dims),b=w.type.storage,C=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${b}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${b}, ${a*a}>;
  var<workgroup> tileWeightK: array<${b}, ${a*a}>;
  var<workgroup> tileWeightV: array<${b}, ${a*a}>;
  ${f.registerUniforms(C).declareVariables(w,T,v,m,y,_)}
  ${f.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:c},{inputs:u,outputs:[-1,-1,-1]})},Ig=(e,t)=>{let r=Bc(e.inputs,t),[i,n,s]=Uc(e,r);return un(e,i,n,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Lc,Wc,qc,Cg,n1=j(()=>{Rt(),fe(),ge(),Ke(),_e(),Lc=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,s)=>{let a=n.length;if(a!==i.length)throw new Error(`${s}: num dimensions != ${a}`);n.forEach((o,u)=>{if(o!==i[u])throw new Error(`${s}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Wc=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,s=e[0].dims,a=i?je(s[s.length-1]):1,o=n==="NHWC"&&s.length>1?a:1,u=B.size(s)/a,d=i,c=d?s.length:s,f=P("x",e[0].dataType,e[0].dims,a),m=P("scale",e[1].dataType,e[1].dims,o),y=P("bias",e[2].dataType,e[2].dims,o),_=P("inputMean",e[3].dataType,e[3].dims,o),w=P("inputVar",e[4].dataType,e[4].dims,o),T=se("y",e[0].dataType,c,a),v=()=>{let C="";if(i)C=`let cOffset = ${s.length===1?"0u":n==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(n==="NCHW")C=`
            ${T.indicesSet("outputIndices","0","0")}
            let cOffset = ${T.indicesToOffset("outputIndices")};`;else{C=`var cIndices = ${m.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let S=1;S<m.rank;S++)C+=`cIndices[${S}] = outputIndices[${S}];`;C+=`let cOffset = ${m.indicesToOffset("cIndices")};`}return C},b=C=>`
  const epsilon = ${r};
  ${C.registerUniform("outputSize","u32").declareVariables(f,m,y,_,w,T)}
  ${C.mainStart()}
  ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${T.offsetToIndices(`global_idx * ${a}`)};
    ${v()}
    let scale = ${m.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${T.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${a}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d?[{type:12,data:u},...de(s)]:[{type:12,data:u}]})}},qc=e=>Oe(e),Cg=(e,t)=>{let{inputs:r,outputCount:i}=e,n=qc({...t,outputCount:i});if(Ve.webgpu.validateInputContent&&Lc(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Wc(r,n))}}),Vc,Hc,Eg,s1=j(()=>{ge(),_e(),Vc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Hc=e=>{let t=e[0].dims,r=e[0].dims[2],i=B.size(t)/4,n=e[0].dataType,s=P("input",n,t,4),a=P("bias",n,[r],4),o=P("residual",n,t,4),u=se("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(s,a,o,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Eg=e=>{Vc(e.inputs),e.compute(Hc(e.inputs))}}),Gc,ze,kg,Ag,zg,Og,Rg,Mg,Bg,Ng,Dg,Fc,Pg,Ug,Lg,Wg,qi,qg,jn,Vg,Hg,Gg,Fg,jg,Kg,Qg,Zg,Yg,Xg,Jg,ey,ty,ry,iy,ny,ga,sy,lo,co,ay,oy,uy,jc,Kc,ly,tu=j(()=>{fe(),ge(),Ke(),_e(),Gc=(e,t,r,i,n,s,a)=>{let o=Math.ceil(t/4),u="";typeof n=="string"?u=`${n}(a)`:u=n("a");let d=P("inputData",r,[o],4),c=se("outputData",i,[o],4),f=[{name:"vec_size",type:"u32"}];return a&&f.push(...a),`
      ${e.registerUniforms(f).declareVariables(d,c)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",u)}
  }`},ze=(e,t,r,i,n,s=e.dataType,a,o)=>{let u=[{type:12,data:Math.ceil(B.size(e.dims)/4)}];return a&&u.push(...a),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>Gc(d,B.size(e.dims),e.dataType,s,r,i,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(B.size(d[0].dims)/64/4)},programUniforms:u})}},kg=e=>{e.compute(ze(e.inputs[0],"Abs","abs"))},Ag=e=>{e.compute(ze(e.inputs[0],"Acos","acos"))},zg=e=>{e.compute(ze(e.inputs[0],"Acosh","acosh"))},Og=e=>{e.compute(ze(e.inputs[0],"Asin","asin"))},Rg=e=>{e.compute(ze(e.inputs[0],"Asinh","asinh"))},Mg=e=>{e.compute(ze(e.inputs[0],"Atan","atan"))},Bg=e=>{e.compute(ze(e.inputs[0],"Atanh","atanh"))},Ng=e=>Oe(e),Dg=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ze(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Fc=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Oe({min:t,max:r})},Pg=(e,t)=>{let r=t||Fc(e.inputs),i=lt(e.inputs[0].dataType);e.compute(ze(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Ug=e=>{e.compute(ze(e.inputs[0],"Ceil","ceil"))},Lg=e=>{e.compute(ze(e.inputs[0],"Cos","cos"))},Wg=e=>{e.compute(ze(e.inputs[0],"Cosh","cosh"))},qi=e=>Oe(e),qg=(e,t)=>{let r=lt(e.inputs[0].dataType);e.compute(ze(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},jn=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Vg=e=>{let t=lt(e.inputs[0].dataType);e.compute(ze(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,jn(t)))},Hg=e=>{e.compute(ze(e.inputs[0],"Exp","exp"))},Gg=e=>{e.compute(ze(e.inputs[0],"Floor","floor"))},Fg=e=>{let t=lt(e.inputs[0].dataType);e.compute(ze(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,jn(t)))},jg=(e,t)=>{let r=lt(e.inputs[0].dataType);e.compute(ze(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Kg=e=>{e.compute(ze(e.inputs[0],"Not",t=>`!${t}`))},Qg=e=>{e.compute(ze(e.inputs[0],"Neg",t=>`-${t}`))},Zg=e=>{e.compute(ze(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Yg=e=>{let t=lt(e.inputs[0].dataType);e.compute(ze(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Xg=e=>{e.compute(ze(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Jg=e=>Oe(e),ey=(e,t)=>{let r=lt(e.inputs[0].dataType);e.compute(ze(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},ty=e=>{e.compute(ze(e.inputs[0],"Sin","sin"))},ry=e=>{e.compute(ze(e.inputs[0],"Sinh","sinh"))},iy=e=>{e.compute(ze(e.inputs[0],"Sqrt","sqrt"))},ny=e=>{e.compute(ze(e.inputs[0],"Tan","tan"))},ga=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,sy=e=>{e.compute(ze(e.inputs[0],"Tanh",ga))},lo=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ga("v")};
}
`,co=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,ay=e=>{let t=lt(e.inputs[0].dataType);e.compute(ze(e.inputs[0],"FastGelu",co,lo(t),void 0,e.inputs[0].dataType))},oy=(e,t)=>{let r=lt(e.inputs[0].dataType);return e.compute(ze(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},uy=e=>{e.compute(ze(e.inputs[0],"Log","log"))},jc=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Kc=e=>`quick_gelu_impl(${e})`,ly=(e,t)=>{let r=lt(e.inputs[0].dataType);e.compute(ze(e.inputs[0],"QuickGelu",Kc,jc(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Qc,Zc,dy,a1=j(()=>{ge(),_e(),tu(),Qc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Zc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=P("input",e[0].dataType,e[0].dims,4),i=P("bias",e[0].dataType,[e[0].dims[2]],4),n=se("output",e[0].dataType,t,4),s=B.size(t)/4,a=Je(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,n)}

  ${jn(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},dy=e=>{Qc(e.inputs),e.compute(Zc(e.inputs))}}),Yc,Xc,Ut,cy,py,fy,hy,my,gy,yy,_y,wy,by,o1=j(()=>{fe(),ge(),_e(),Yc=(e,t,r,i,n,s,a,o,u,d,c,f)=>{let m,y;typeof o=="string"?m=y=(b,C)=>`${o}((${b}),(${C}))`:typeof o=="function"?m=y=o:(m=o.scalar,y=o.vector);let _=se("outputData",c,i.length,4),w=P("aData",u,t.length,4),T=P("bData",d,r.length,4),v;if(n)if(s){let b=B.size(t)===1,C=B.size(r)===1,S=t.length>0&&t[t.length-1]%4===0,I=r.length>0&&r[r.length-1]%4===0;b||C?v=_.setByOffset("global_idx",y(b?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),C?`${T.type.value}(${T.getByOffset("0")}.x)`:T.getByOffset("global_idx"))):v=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${T.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",y(a||S?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||I?T.getByOffset("offsetB / 4u"):`${T.type.value}(${T.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=_.setByOffset("global_idx",y(w.getByOffset("global_idx"),T.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(C,S,I="")=>{let A=`aData[indexA${S}][componentA${S}]`,z=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${_.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${w.broadcastedIndicesToOffset(`outputIndices${S}`,_)};
            let offsetB${S} = ${T.broadcastedIndicesToOffset(`outputIndices${S}`,_)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${C}[${S}] = ${I}(${m(A,z)});
          `};c===9?v=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,T,_)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},Xc=(e,t,r,i,n,s,a=r.dataType)=>{let o=r.dims.map(Number),u=i.dims.map(Number),d=!B.areEqual(o,u),c=o,f=B.size(o),m=!1,y=!1,_=[d];if(d){let w=wi.calcShape(o,u,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");c=w.slice(),f=B.size(c);let T=B.size(o)===1,v=B.size(u)===1,b=o.length>0&&o[o.length-1]%4===0,C=u.length>0&&u[u.length-1]%4===0;_.push(T),_.push(v),_.push(b),_.push(C);let S=1;for(let I=1;I<c.length;I++){let A=o[o.length-I],z=u[u.length-I];if(A===z)S*=A;else break}S%4===0?(y=!0,m=!0):(T||v||b||C)&&(m=!0)}else m=!0;return _.push(m),{name:e,shaderCache:{hint:t+_.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>Yc(w,o,u,c,m,d,y,n,r.dataType,i.dataType,a,s),getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(B.size(c)/4)},...de(o,u,c)]})}},Ut=(e,t,r,i,n,s)=>{e.compute(Xc(t,n??"",e.inputs[0],e.inputs[1],r,i,s))},cy=e=>{Ut(e,"Add",(t,r)=>`${t}+${r}`)},py=e=>{Ut(e,"Div",(t,r)=>`${t}/${r}`)},fy=e=>{Ut(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},hy=e=>{Ut(e,"Mul",(t,r)=>`${t}*${r}`)},my=e=>{let t=P("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ut(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},gy=e=>{Ut(e,"Sub",(t,r)=>`${t}-${r}`)},yy=e=>{Ut(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},_y=e=>{Ut(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},wy=e=>{Ut(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},by=e=>{Ut(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Jc,ep,tp,rp,vy,$y,u1=j(()=>{fe(),ge(),Ke(),_e(),Jc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,s=i.dims.length;e.forEach((a,o)=>{if(o!==r){if(a.dataType!==n)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((u,d)=>{if(d!==t&&u!==i.dims[d])throw new Error("non concat dimensions must match")})}})},ep=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,tp=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;++n){let s=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?i.push(s):n===0?i.push(`if (inputIndex == ${n}u) { ${s} }`):n===r-1?i.push(`else { ${s} }`):i.push(`else if (inputIndex == ${n}) { ${s} }`)}return i.join(`
`)},rp=(e,t,r,i)=>{let n=B.size(r),s=new Array(e.length),a=new Array(e.length),o=0,u=[],d=[],c=[{type:12,data:n}];for(let w=0;w<e.length;++w)o+=e[w].dims[t],s[w]=o,d.push(e[w].dims.length),a[w]=P(`input${w}`,i,d[w]),u.push("rank"),c.push({type:12,data:s[w]});for(let w=0;w<e.length;++w)c.push(...de(e[w].dims));c.push(...de(r));let f=se("output",i,r.length),m=f.indicesGet("indices",t),y=Array.from(Array(s.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),_=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let T=0;T<e.length;T++)w.registerUniform(`sizeInConcatAxis${T}`,"u32");return w.declareVariables(...a,f)})()}

  ${ep(s.length,y)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${m});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${y});
      ${m} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${tp(a,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}),getShaderSource:_}},vy=(e,t)=>{let r=e.inputs,i=r[0].dims,n=B.normalizeAxis(t.axis,i.length);Jc(r,n);let s=i.slice();s[n]=r.reduce((o,u)=>o+(u.dims.length>n?u.dims[n]:0),0);let a=r.filter(o=>B.size(o.dims)>0);e.compute(rp(a,n,s,r[0].dataType),{inputs:a})},$y=e=>Oe({axis:e.axis})}),Jr,ei,ti,ru,ni=j(()=>{fe(),ge(),Jr=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},ei=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},ti=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ru=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[Km,Qm];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),tt,xy,iu=j(()=>{tt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},xy=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Sy,l1=j(()=>{Sy=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Xi,nu,su=j(()=>{fe(),ge(),_e(),ni(),Xi=(e,t,r,i,n)=>{let s=i-r;return`
      ${Array.from({length:r}).map((a,o)=>`
      if (${oe(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,oe(n,o+s,i))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},nu=(e,t,r,i,n=!1,s)=>{let a=e[0].dims,o=e[1].dims,u=a[a.length-2],d=o[o.length-1],c=a[a.length-1],f=je(d),m=je(c),y=je(u),_=B.size(r)/f/y,w=e.length>2,T=i?i.slice(0,-2):r.slice(0,-2),v=[B.size(T),u,d],b=[{type:12,data:_},{type:12,data:u},{type:12,data:d},{type:12,data:c}];ei(t,b),b.push(...de(T,a,o)),w&&b.push(...de(e[2].dims)),b.push(...de(v));let C=S=>{let I=Xo("batch_dims",e[0].dataType,T.length),A=P("a",e[0].dataType,a.length,m),z=P("b",e[1].dataType,o.length,f),x=se("output",e[0].dataType,v.length,f),W=Je(x.type.tensor),G=Jr(t,x.type.value,W),ue=[A,z],re="";if(w){let L=n?f:1;ue.push(P("bias",e[2].dataType,e[2].dims.length,L)),re=`${n?`value += bias[col / ${L}];`:`value += ${x.type.value}(bias[row + i]);`}`}let ae=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];ti(t,ae);let N=()=>{let L=`var a_data: ${A.type.value};`;for(let Q=0;Q<m;Q++)L+=`
              let b_data${Q} = b[(b_offset + (k + ${Q}) * uniforms.N + col) / ${f}];`;for(let Q=0;Q<y;Q++){L+=`a_data = a[(a_offset + (row + ${Q}) * uniforms.K + k) / ${m}];`;for(let te=0;te<m;te++)L+=`
            values[${Q}] = fma(${z.type.value}(a_data${m===1?"":`[${te}]`}), b_data${te}, values[${Q}]);
`}return L};return`
  ${S.registerUniforms(ae).registerInternalVariables(I).declareVariables(...ue,x)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${A.type.indices};
    ${Xi("a_indices",A,A.rank-2,I.rank,"batch_indices")}
    ${A.indicesSet("a_indices",A.rank-2,0)}
    ${A.indicesSet("a_indices",A.rank-1,0)}
    let a_offset = ${A.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${Xi("b_indices",z,z.rank-2,I.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${x.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${m}) {
      ${N()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${re}
      ${G}
      let cur_indices = ${x.type.indices}(batch, row + i, col);
      let offset = ${x.indicesToOffset("cur_indices")};
      ${x.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${m};${y};${n}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:b}),getShaderSource:C}}}),ip,np,po,ya,sp,fo,ap,ss,au=j(()=>{fe(),ge(),_e(),ni(),su(),iu(),ip=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,np=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,po=(e,t,r="f32",i,n=!1,s=32,a=!1,o=32)=>{let u=t[1]*e[1],d=t[0]*e[0],c=n?u:s,f=n?s:u,m=c/t[0],y=s/t[1];if(!((n&&m===4&&e[1]===4||!n&&(m===3||m===4))&&c%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${m} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${m} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${m}<${r}>, ${c/m}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${m};
const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${a?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${y};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${ip(n,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${m===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${np(n,m)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ya=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,sp=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",fo=(e,t,r="f32",i,n=!1,s=32,a=!1,o=32,u=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],f=n?d:s,m=n?s:d;if(!(m%t[1]===0&&f%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${m} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let y=m/t[1],_=f/t[0],w=s/t[1],T=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${m}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${ya(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${y};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${ya(n,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${sp(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${m}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${T}
  }
`},ap=(e,t,r,i,n=!1)=>{let[s,a,o,u]=i,d=Je(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${tt(e,d)} {
      var value = ${tt(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${Xi("aIndices",a,a.rank-2,s.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${tt(e,d)} {
      var value = ${tt(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${Xi("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${tt(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${tt(e,d)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ss=(e,t,r,i,n=!1,s)=>{let a=e[0].dims,o=e[1].dims,u=a.slice(0,-2),d=o.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),f=B.size(c),m=a[a.length-2],y=a[a.length-1],_=o[o.length-1],w=y%4===0&&_%4===0,T=m<=8?[4,1,1]:[4,4,1],v=[8,8,1],b=[Math.ceil(_/v[0]/T[0]),Math.ceil(m/v[1]/T[1]),Math.ceil(f/v[2]/T[2])],C=w?4:1,S=[...u,m,y/C],I=S.length,A=[...d,y,_/C],z=A.length,x=[f,m,_/C],W=[{type:6,data:m},{type:6,data:_},{type:6,data:y}];ei(t,W),W.push(...de(c,S,A));let G=["rank","rank"],ue=e.length>2;ue&&(W.push(...de(e[2].dims)),G.push("rank")),W.push(...de(x));let re=ae=>{let N=c.length,L=Xo("batchDims",e[0].dataType,N,1),Q=Je(e[0].dataType),te=P("a",e[0].dataType,I,C),Z=P("b",e[1].dataType,z,C),le=se("result",e[0].dataType,x.length,C),Te=[te,Z];if(ue){let at=n?C:1;Te.push(P("bias",e[2].dataType,e[2].dims.length,at))}let U=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];ti(t,U);let K=Je(le.type.tensor),pe=Jr(t,le.type.value,K),$e=ap(C,ue,pe,[L,te,Z,le],n);return`
  ${ae.registerUniforms(U).registerInternalVariables(L).declareVariables(...Te,le)}
  ${$e}
  ${w?po(T,v,Q,L):fo(T,v,Q,L)}
                   `};return{name:"MatMul",shaderCache:{hint:`${T};${t.activation};${w};${n}`,inputDependencies:G},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:W}),getShaderSource:re}}}),op,Ty,d1=j(()=>{fe(),_r(),_e(),ni(),iu(),l1(),au(),op=(e,t,r,i,n=!1,s,a=4,o=4,u=4,d="f32")=>{let c=W=>{switch(W){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${W} is not supported.`)}},f=W=>{switch(W){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${W} is not supported.`)}},m=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,y=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",T=e?"row":"col",v=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${T} / outWidth;
    let outCol = ${T} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${tt(a,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${w}) {
      ${m}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(a)}
    }
    return resData;`,C=e?t&&i?`
    let col = colIn * ${a};
    ${b}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${tt(a,d)}(0.0);`:i&&r?`
    let col = colIn * ${a};
    ${b}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${tt(a,d)}(0.0);`,S=e?i&&r?f(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(o)}
    }
    return ${tt(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(o)}
    }
    return ${tt(o,d)}(0.0);`,I=tt(u,d),A=tt(e?a:o,d),z=tt(e?o:a,d),x=Jr(s,I,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?C:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?S:C}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${xy(n)}
      ${x}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Ty=(e,t,r,i,n,s,a,o,u)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],f=r[0],m=d?r[2]:r[3],y=d?r[1]:r[2],_=d?r[3]:r[1],w=d&&(c%4===0||c%3===0)&&_%4===0,T=d?_:m*y,v=d?m*y:_,b=[8,8,1],C=i<=8?[4,1,1]:[4,4,1],S=[Math.ceil(T/b[0]/C[0]),Math.ceil(v/b[1]/C[1]),Math.ceil(f/b[2]/C[2])];Ee("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let I=w?d&&c%4!==0?3:4:1,A=b[1]*C[1],z=b[0]*C[0],x=Math.max(b[0]*I,b[1]),W=i%A===0,G=n%z===0,ue=s%x===0,re=w?[I,4,4]:[1,1,1],ae=[{type:6,data:i},{type:6,data:n},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];ei(t,ae),ae.push(...de(e[0].dims,e[1].dims));let N=["rank","rank"];a&&(ae.push(...de(e[2].dims)),N.push("rank")),ae.push(...de(r));let L=Q=>{let te=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];ti(t,te);let Z=w?4:1,le=Je(e[0].dataType),Te=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${le}>`:le}) {
        result[flatIndex] = ${w?`vec4<${le}>`:le}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${le}>`:le}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,U=P("x",e[0].dataType,e[0].dims.length,I===3?1:I),K=P("w",e[1].dataType,e[1].dims.length,Z),pe=[U,K],$e=se("result",e[0].dataType,r.length,Z);if(a){let at=P("bias",e[2].dataType,e[2].dims.length,Z);pe.push(at),Te+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${le}>`:le} {
          return bias[coords.${d?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${Sy("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${Q.registerUniforms(te).declareVariables(...pe,$e)}
        ${Te}
        ${op(d,W,G,ue,a,t,re[0],re[1],re[2],le)}
        ${w?po(C,b,le,void 0,!d,x):fo(C,b,le,void 0,!d,x,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${w};${W};${G};${ue};${A};${z};${x}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:ae}),getShaderSource:L}}}),up,_a,Ri,lp,wa,dp,Iy,Cy,c1=j(()=>{fe(),_r(),ge(),_e(),ni(),iu(),up=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},_a=e=>typeof e=="number"?[e,e,e]:e,Ri=(e,t)=>t<=1?e:e+(e-1)*(t-1),lp=(e,t,r,i=1)=>{let n=Ri(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},wa=(e,t,r,i,n)=>{n==null&&(n=lp(e,t[0],i[0]));let s=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*n>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*n)/i[a]+1));return s},dp=(e,t,r,i,n,s,a,o,u,d)=>{let c,f,m,y;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=wa([t,r,i,1],[o,u,d],1,[n,s,a],e);f=_[0],m=_[1],y=_[2]}else if(Array.isArray(e)){if(!e.every((w,T,v)=>w===v[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=wa([t,r,i,1],[o,u,d],1,[n,s,a],e[0]);f=_[0],m=_[1],y=_[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/n),m=Math.ceil(r/s),y=Math.ceil(i/a);let _=(f-1)*n+o-t,w=(m-1)*s+u-r,T=(y-1)*a+d-i,v=Math.floor(_/2),b=_-v,C=Math.floor(w/2),S=w-C,I=Math.floor(T/2),A=T-I;c={top:C,bottom:S,left:I,right:A,front:v,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:f,outHeight:m,outWidth:y}},Iy=(e,t,r,i,n,s=!1,a="channelsLast")=>{let o,u,d,c,f;if(a==="channelsLast")[o,u,d,c,f]=e;else if(a==="channelsFirst")[o,f,u,d,c]=e;else throw new Error(`Unknown dataFormat ${a}`);let[m,,y,_,w]=t,[T,v,b]=_a(r),[C,S,I]=_a(i),A=Ri(y,C),z=Ri(_,S),x=Ri(w,I),{padInfo:W,outDepth:G,outHeight:ue,outWidth:re}=dp(n,u,d,c,T,v,b,A,z,x),ae=s?m*f:m,N=[0,0,0,0,0];return a==="channelsFirst"?N=[o,ae,G,ue,re]:a==="channelsLast"&&(N=[o,G,ue,re,ae]),{batchSize:o,dataFormat:a,inDepth:u,inHeight:d,inWidth:c,inChannels:f,outDepth:G,outHeight:ue,outWidth:re,outChannels:ae,padInfo:W,strideDepth:T,strideHeight:v,strideWidth:b,filterDepth:y,filterHeight:_,filterWidth:w,effectiveFilterDepth:A,effectiveFilterHeight:z,effectiveFilterWidth:x,dilationDepth:C,dilationHeight:S,dilationWidth:I,inShape:e,outShape:N,filterShape:t}},Cy=(e,t,r,i,n,s)=>{let a=s==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:r.map((T,v)=>v)},d=[Math.ceil(up(u.x.map(T=>r[T]))/o[0]),1,1];Ee("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,f=B.size(r),m=[{type:12,data:f},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];ei(t,m),m.push(...de(e[0].dims,e[1].dims));let y=["rank","rank"],_=e.length===3;_&&(m.push(...de(e[2].dims)),y.push("rank")),m.push(...de(r));let w=T=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];ti(t,v);let b=1,C=Je(e[0].dataType),S=P("x",e[0].dataType,e[0].dims.length,c),I=P("W",e[1].dataType,e[1].dims.length,b),A=[S,I],z=se("result",e[0].dataType,r.length,b),x="";if(_){let ue=P("bias",e[2].dataType,e[2].dims.length,b);A.push(ue),x+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${C} {
          return bias[${a?oe("coords",4,5):oe("coords",1,5)}];
        }`}let W=tt(c,C),G=Jr(t,W,C);return`
            ${x}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${T.registerUniforms(v).declareVariables(...A,z)}
          ${T.mainStart()}
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${z.offsetToIndices("global_idx")};
              let batch = ${oe("coords",0,S.rank)};
              let d2 = ${a?oe("coords",S.rank-1,S.rank):oe("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${a?oe("coords",1,S.rank):oe("coords",2,S.rank)},
              ${a?oe("coords",2,S.rank):oe("coords",3,S.rank)},
              ${a?oe("coords",3,S.rank):oe("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?oe("uniforms.x_shape",1,S.rank):oe("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${a?oe("uniforms.x_shape",2,S.rank):oe("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${a?oe("uniforms.x_shape",3,S.rank):oe("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${a?oe("uniforms.x_shape",4,S.rank):oe("uniforms.x_shape",1,S.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${a?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${a?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${a?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${a?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${G}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${c};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:m}),getShaderSource:w}}}),Ey,ky,p1=j(()=>{fe(),ge(),_e(),ni(),Ey=(e,t,r,i)=>{let n=e.length>2,s=n?"value += b[output_channel];":"",a=e[0].dims,o=e[1].dims,u=t.format==="NHWC",d=u?r[3]:r[1],c=d/t.group,f=u&&c>=4?je(d):1,m=B.size(r)/f,y=[{type:12,data:m},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];ei(t,y),y.push(...de(a,[o[0],o[1],o[2],o[3]/f]));let _=n?["rank","rank","rank"]:["rank","rank"];y.push(...de([r[0],r[1],r[2],r[3]/f]));let w=T=>{let v=se("output",e[0].dataType,r.length,f),b=Je(v.type.tensor),C=Jr(t,v.type.value,b),S=P("x",e[0].dataType,a.length),I=P("w",e[1].dataType,o.length,f),A=[S,I];n&&A.push(P("b",e[2].dataType,e[2].dims,f));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];ti(t,z);let x=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${S.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${I.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${T.registerUniforms(z).declareVariables(...A,v)}

  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${x}
    ${s}
    ${C}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:y}),getShaderSource:w}},ky=(e,t,r,i)=>{let n=e.length>2,s=je(r[3]),a=je(r[2]),o=B.size(r)/s/a,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],c=[r[0],r[1],r[2],r[3]/s],f=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];ei(t,f),f.push(...de(u,d,c));let m=(a-1)*t.strides[1]+d[1],y=_=>{let w=se("output",e[0].dataType,c.length,s),T=Je(w.type.tensor),v=Jr(t,w.type.value,T),b=P("x",e[0].dataType,u.length,s),C=P("w",e[1].dataType,d.length,s),S=[b,C];n&&S.push(P("b",e[2].dataType,e[2].dims,s));let I=n?"value += b[output_channel];":"",A=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return ti(t,A),`
  ${_.registerUniforms(A).declareVariables(...S,w)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${m}>;
    var values: array<${w.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${m}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${C.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${I}
      ${v}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${a};${m};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}),getShaderSource:y}}}),cp,Bn,pp,Nn,ho,ba,fp,hp,mo,f1=j(()=>{ge(),d1(),c1(),au(),p1(),ni(),su(),Br(),cp=(e,t,r,i,n,s)=>{let a=e[0],o=e.slice(s?1:2,s?3:4),u=o.length,d=t[0],c=t.slice(2).map((m,y)=>m+(m-1)*(r[y]-1)),f=o.map((m,y)=>m+i[y]+i[y+u]).map((m,y)=>Math.floor((m-c[y]+n[y])/n[y]));return f.splice(0,0,a),f.splice(s?3:1,0,d),f},Bn=[2,3,1,0],pp=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Nn=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let i=e.pads.slice();is.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},ho=e=>{let t=ru(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,s=e.group,a=e.kernel_shape,o=e.pads,u=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:s,kernelShape:a,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},ba=(e,t,r,i)=>{let n=r.format==="NHWC",s=cp(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let A=[t[0]];if(n){let z=e.kernelCustomData.wT??e.compute(Tt(t[1],Bn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),A.push(z)}else A.push(t[1]);t.length===3&&A.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(ky(A,r,s,i),{inputs:A}):e.compute(Ey(A,r,s,i),{inputs:A});return}let a=t.length===3,o=t[0].dims[n?1:2],u=t[0].dims[n?2:3],d=t[0].dims[n?3:1],c=t[1].dims[2],f=t[1].dims[3],m=s[n?1:2],y=s[n?2:3],_=s[n?3:1],w=n&&c===o&&f===u&&r.pads[0]===0&&r.pads[1]===0;if(w||c===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let A=s[0],z,x,W,G=[];if(n){let ae=e.kernelCustomData.wT??e.compute(Tt(t[1],Bn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ae),w){let N=o*u*d;z=t[0].reshape([1,A,N]),x=ae.reshape([1,N,_]),W=[1,A,_]}else z=t[0].reshape([A,o*u,d]),x=ae.reshape([1,d,_]),W=[A,m*y,_];G.push(z),G.push(x)}else z=t[0].reshape([A,d,o*u]),x=t[1].reshape([1,_,d]),W=[A,_,m*y],G.push(x),G.push(z);a&&G.push(t[2]);let ue=W[2],re=G[0].dims[G[0].dims.length-1];ue<8&&re<8?e.compute(nu(G,r,s,W,n,i),{inputs:G}):e.compute(ss(G,r,s,W,n,i),{inputs:G});return}let T=!0,v=e.kernelCustomData.wT??e.compute(Tt(t[1],Bn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let b=[t[0],v];a&&b.push(t[2]);let C=n?m*y:_,S=n?_:m*y,I=c*f*d;e.compute(Ty(b,r,s,C,S,I,a,T,i),{inputs:b})},fp=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=Nn({...t,pads:n,strides:s,dilations:a,kernelShape:o},i);ba(e,i,u,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},hp=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=Nn(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=Iy(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,i);e.compute(Cy(t,n,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],i))},mo=(e,t)=>{if(pp(e.inputs,t),e.inputs[0].dims.length===3)fp(e,t);else if(e.inputs[0].dims.length===5)hp(e,e.inputs,t);else{let r=Nn(t,e.inputs);ba(e,e.inputs,r)}}}),Ay,h1=j(()=>{fe(),_r(),ge(),_e(),Ay=(e,t,r)=>{let i=e.length>2,n=t.outputShape,s=t.format==="NHWC",a=t.group,o=e[1].dims,u=o[2]/a,d=o[3],c=s?je(u):1,f=s&&d===1&&u>=4,m=f?Math.floor(u/4)*4:Math.floor(u/c)*c,y=u-m,_=s?je(d):1,w=s?d===1?c:_:1,T=B.size(n)/_,v=[Math.ceil(T/64),1,1];Ee("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let b=["rank","rank"],C=[t.strides[0],t.strides[1]],S=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],I=[t.dilations[0],t.dilations[1]],A=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],z=[A[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),A[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],x=[{type:12,data:T},{type:12,data:C},{type:12,data:S},{type:12,data:I},{type:12,data:A},{type:6,data:z},{type:12,data:m},{type:12,data:u},{type:12,data:d},...de(e[0].dims,e[1].dims)];i&&(x.push(...de(e[2].dims)),b.push("rank")),x.push(...de(n));let W=G=>{let ue=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:C.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:A.length},{name:"pads",type:"i32",length:z.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],re=Je(e[0].dataType),ae=s?1:2,N=s?2:3,L=s?3:1,Q=P("W",e[1].dataType,e[1].dims.length,w),te=P("Dy",e[0].dataType,e[0].dims.length,c),Z=[te,Q];i&&Z.push(P("bias",e[2].dataType,[n[L]].length,_));let le=se("result",e[0].dataType,n.length,_),Te=()=>{let pe="";if(f)c===4?pe+=`
        let xValue = ${te.getByOffset("x_offset")};
        let wValue = ${Q.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?pe+=`
          dotProd = dotProd + dot(vec4<${re}>(${te.getByOffset("x_offset")}, ${te.getByOffset("x_offset + 1u")}), vec4<${re}>(${Q.getByOffset("w_offset")}, ${Q.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(pe+=`
          dotProd = dotProd + dot(vec4<${re}>(${te.getByOffset("x_offset")}, ${te.getByOffset("x_offset + 1u")}, ${te.getByOffset("x_offset + 2u")}, ${te.getByOffset("x_offset + 3u")}), vec4<${re}>(${Q.getByOffset("w_offset")}, ${Q.getByOffset("w_offset + 1u")}, ${Q.getByOffset("w_offset + 2u")}, ${Q.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(pe+=`
                  let xValue = ${s?te.getByOffset(`${te.indicesToOffset(`${te.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):te.get("batch","inputChannel","idyR","idyC")};
        `,c===1)pe+=`
          let w_offset = ${Q.indicesToOffset(`${Q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${Q.getByOffset(`w_offset / ${w}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let $e=0;$e<c;$e++)pe+=`
            let wValue${$e} = ${Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${$e}, wOutChannel)`)} / ${w}`)};
            dotProd = dotProd + xValue[${$e}] * wValue${$e};`;return pe},U=()=>{if(y===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let pe="";if(c===1){pe+="dotProd = dotProd";for(let $e=0;$e<y;$e++)pe+=`
            + ${te.getByOffset(`x_offset + ${$e}`)} * ${Q.getByOffset(`w_offset + ${$e}`)}`;pe+=";"}else if(c===2){if(y!==2)throw new Error(`Invalid inputChannelsRemainder ${y}.`);pe+=`
          let xValue = ${te.getByOffset("x_offset")};
          let wValue = ${Q.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return pe},K=`
            let outputIndices = ${le.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${le.indicesGet("outputIndices",0)};
            let d1 = ${le.indicesGet("outputIndices",L)};
            let r = ${le.indicesGet("outputIndices",ae)};
            let c = ${le.indicesGet("outputIndices",N)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${le.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${re}(dyRCorner) + ${re}(wR)) / ${re}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${re}(uniforms.Dy_shape[${ae}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${re}(dyCCorner) + ${re}(wC)) / ${re}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${re}(uniforms.Dy_shape[${N}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${te.indicesToOffset(`${te.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${Q.indicesToOffset(`${Q.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${w};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:c}) {
                  ${Te()}
                  inputChannel = inputChannel + ${f?4:c};
                }
                ${U()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${_}]`:""};
            ${le.setByOffset("global_idx","value")};
          `;return`
    ${G.registerUniforms(ue).declareVariables(...Z,le)}
      ${G.mainStart()}
      ${G.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${K}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${w}${_}${f}${y}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:x}),getShaderSource:W}}}),mp,gp,yp,va,zy,_p,$a,wp,Oy,m1=j(()=>{h1(),ni(),Br(),mp=(e,t,r,i,n,s)=>(e-1)*t+r+(i-1)*n+1-s,gp=(e,t,r,i,n)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=s,r[n]=e-s):t==="SAME_LOWER"&&(r[i]=e-s,r[n]=s)},yp=(e,t,r,i,n,s,a,o,u,d)=>{let c=e.length-2,f=d.length===0;u.length<c&&u.push(...Array(c-u.length).fill(0));let m=e[0],y=t[o?3:1]*n;for(let _=0,w=e.length-c-(o?1:0);_<c;++_,++w){let T=e[w],v=f?T*a[_]:d[_],b=mp(T,a[_],s[_],t[w],r[_],v);gp(b,i,s,_,_+c),f&&d.push(a[_]*(T-1)+u[_]+(t[w]-1)*r[_]+1-s[_]-s[_+c])}d.splice(0,0,m),d.splice(o?3:1,0,y)},va=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,m)=>f*m,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((f,m)=>f+m,0)===0){let f=t[0].dims.length-2;u=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,m)=>f+m,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}yp(o,r,u,e.autoPad,e.group,n,d,i,a,s);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:n,outputPadding:a,outputShape:s,dilations:u,strides:d}),c},zy=e=>{let t=ru(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,s=e.group,a=e.kernelShape,o=e.pads,u=e.strides,d=e.wIsConst(),c=e.outputPadding,f=e.outputShape;return{autoPad:i,format:r,dilations:n,group:s,kernelShape:a,outputPadding:c,outputShape:f,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},_p=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,o)=>a+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,o)=>a+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,o)=>a+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,o)=>a+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},$a=(e,t,r,i)=>{let n=e.kernelCustomData.wT??e.compute(Tt(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let s=[t[0],n];t.length===3&&s.push(t[2]),e.compute(Ay(s,r,i),{inputs:s})},wp=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),n=[1].concat(n);let u=t.outputPadding;u=[0].concat(u);let d=va({...t,pads:o,strides:a,dilations:s,kernelShape:n,outputPadding:u},i);$a(e,i,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Oy=(e,t)=>{if(_p(e.inputs,t),e.inputs[0].dims.length===3)wp(e,t);else{let r=va(t,e.inputs);$a(e,e.inputs,r)}}}),bp,Ry,My,g1=j(()=>{fe(),ge(),Ke(),_e(),bp=(e,t,r,i)=>{let n=B.size(t),s=t.length,a=P("input",e,s),o=se("output",e,s),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=B.normalizeAxis(u,s),c=f=>{let m=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,y=oe("uniforms.input_shape","uniforms.axis",s),_=i.reverse?m+(i.exclusive?" + 1":""):"0",w=i.reverse?y:m+(i.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...de(t,t)]}),getShaderSource:c}},Ry=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(bp(i,r,n,t),{inputs:[0]})},My=e=>{let t=e.exclusive===1,r=e.reverse===1;return Oe({exclusive:t,reverse:r})}}),vp,$p,xp,By,Ny,y1=j(()=>{fe(),ge(),Ke(),_e(),vp=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},$p=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)n.push(r.indicesSet("a",e[s],`i[${s}]`));return n.push("return a;}"),n.join(`
`)},xp=(e,t)=>{let r,i,n,s,a,o,u=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";u?([r,i,n,s]=e.dims,a=c?[r,i,n,d,d,s/d**2]:[r,i,n,s/d**2,d,d],o=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=c?[r,d,d,s/d**2,i,n]:[r,s/d**2,d,d,i,n],o=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(a),m=f.dims.length,y=e.dataType,_=P("a",y,m),w=se("output",y,m),T=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(_,w)}

  ${$p(o,m,_,w)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let b=u?[r,i*d,n*d,s/d**2]:[r,s/d**2,i*d,n*d],C=B.size(b),S=f.dims,I=B.sortBasedOnPerm(S,o);return{outputs:[{dims:b,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(C/64)},programUniforms:[{type:12,data:C},...de(S,I)]}},getShaderSource:T}},By=(e,t)=>{vp(e.inputs),e.compute(xp(e.inputs[0],t))},Ny=e=>Oe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Dn,Mi,xa,Sp,Tp,Ip,Cp,Sa,Ep,Dy,Py,_1=j(()=>{fe(),ge(),Ke(),_e(),Dn="[a-zA-Z]|\\.\\.\\.",Mi="("+Dn+")+",xa="^"+Mi+"$",Sp="("+Mi+",)*"+Mi,Tp="^"+Sp+"$",Ip=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Cp=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Tp)))throw new Error("Invalid LHS term");if(r.split(",").forEach((n,s)=>{let a=e[s].dims.slice();if(!n.match(RegExp(xa)))throw new Error("Invalid LHS term");let o=this.processTerm(n,!0,a,s);this.lhs.push(o)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([n,s])=>s.count===1||n==="...").map(([n])=>n).join("");else if(!i.match(RegExp(Mi)))throw new Error("Invalid RHS");i.match(RegExp(Dn,"g"))?.forEach(n=>{if(n==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(n);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,s=!1,a=[],o=0;if(!e.match(RegExp(xa))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Dn,"g")),d=new Ip(i);return u?.forEach((c,f)=>{if(c==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let m=n-u.length+1;if(m<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(o,o+m),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<a.length;y++){let _=String.fromCharCode(48+y);d.addSymbol(_,f+y),this.addSymbol(_,r[o++],i)}}else d.addSymbol(c,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[o++],i)}),d}},Sa=e=>e+"_max",Ep=(e,t,r,i)=>{let n=e.map(d=>d.length).map((d,c)=>P(`input${c}`,t,d)),s=B.size(i),a=se("output",t,i.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),u=d=>{let c=[],f="var prod = 1.0;",m="var sum = 0.0;",y="sum += prod;",_=[],w=[],T=[],v=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((S,I)=>{if(r.rhs.symbolToIndices.has(I)){let A=r.rhs.symbolToIndices.get(I)?.[0];A!==void 0&&r.lhs.forEach((z,x)=>{if(S.inputIndices.includes(x)){let W=z.symbolToIndices.get(I);if(W===void 0)throw new Error("Invalid symbol error");W.forEach(G=>{c.push(`${n[x].indicesSet(`input${x}Indices`,G,a.indicesGet("outputIndices",A))}`)})}})}else r.lhs.forEach((A,z)=>{if(S.inputIndices.includes(z)){let x=A.symbolToIndices.get(I);if(x===void 0)throw new Error("Invalid symbol error");x.forEach(W=>{_.push(`${n[z].indicesSet(`input${z}Indices`,W,`${I}`)}`)}),v.push(`prod *= ${n[z].getByIndices(`input${z}Indices`)};`)}}),w.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${Sa(I)}; ${I}++) {`),T.push("}")});let C=b?[...c,`let sum = ${n.map((S,I)=>S.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...c,m,...w,..._,f,...v,y,...T];return`
            ${d.registerUniforms(o.map(S=>({name:`${Sa(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,a)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${n.map((S,I)=>`var input${I}Indices: ${n[I].type.indices};`).join(`
`)}
            ${C.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(f=>r.symbolToInfo.has(f)).map(f=>({type:12,data:r.symbolToInfo.get(f)?.dimValue||0}));d.push({type:12,data:s});let c=e.map((f,m)=>[...de(f)]).reduce((f,m)=>f.concat(m),d);return c.push(...de(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}},getShaderSource:u}},Dy=(e,t)=>{let r=new Cp(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((s,a)=>s.dims);e.compute(Ep(n,e.inputs[0].dataType,r,i))},Py=e=>{let t=e.equation.replace(/\s+/g,"");return Oe({equation:t})}}),kp,Ta,Ap,zp,Uy,w1=j(()=>{fe(),ge(),_e(),kp=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ta=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},Ap=(e,t)=>e.length>t.length?Ta(e,t):Ta(t,e),zp=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=Ap(t,r),n=e[0].dataType,s=n===9||B.size(t)===1,a=n===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||i.length>0&&i[i.length-1]%4===0?4:1,u=Math.ceil(B.size(i)/o),d=f=>{let m=P("input",n,t.length,a),y=se("output",n,i.length,o),_;if(n===9){let w=(T,v,b="")=>`
          let outputIndices${v} = ${y.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${m.broadcastedIndicesToOffset(`outputIndices${v}`,y)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${T}[${v}] = ${b}(${m.getByOffset(`index${v}`)}[component${v}]);
        `;_=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${y.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${y.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${m.broadcastedIndicesToOffset("outputIndices",y)};
        let data = ${y.type.value}(${m.getByOffset(`inputOffset / ${a}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(m,y)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},c=[{type:12,data:u},...de(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c})}},Uy=e=>{kp(e.inputs),e.compute(zp(e.inputs),{inputs:[0]})}}),Op,Ly,b1=j(()=>{fe(),ge(),_e(),tu(),Op=e=>{let t=e[0].dataType,r=B.size(e[0].dims),i=B.size(e[1].dims),n=i%4===0,s=a=>{let o=P("x",t,[1],4),u=P("bias",t,[1],4),d=se("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${u.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,m=n?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(c).declareVariables(o,u,d)}

    ${lo(lt(t))}

    ${a.mainStart(bi)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${m}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",co("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/bi/4)}})}},Ly=e=>{e.inputs.length<2||B.size(e.inputs[1].dims)===0?ay(e):e.compute(Op(e.inputs))}}),Rp,Mp,Wy,qy,v1=j(()=>{fe(),ge(),Ke(),_e(),Rp=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Mp=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,s=B.normalizeAxis(t.axis,n),a=r.slice(0);a.splice(s,1,...i);let o=r[s],u=e[0].dataType===9?4:1,d=Math.ceil(B.size(a)/u),c=[{type:12,data:d},{type:6,data:o},{type:12,data:s},...de(e[0].dims,e[1].dims,a)],f=m=>{let y=P("data",e[0].dataType,e[0].dims.length,u),_=P("inputIndices",e[1].dataType,e[1].dims.length),w=se("output",e[0].dataType,a.length,u),T=b=>{let C=i.length,S=`var indicesIndices${b}  = ${_.type.indices}(0);`;for(let I=0;I<C;I++)S+=`${C>1?`indicesIndices${b}[${I}]`:`indicesIndices${b}`} = ${a.length>1?`outputIndices${b}[uniforms.axis + ${I}]`:`outputIndices${b}`};`;S+=`
          var idx${b} = ${_.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${y.type.indices};
        `;for(let I=0,A=0;I<n;I++)I===s?(S+=`${n>1?`dataIndices${b}[${I}]`:`dataIndices${b}`} = u32(idx${b});`,A+=C):(S+=`${n>1?`dataIndices${b}[${I}]`:`dataIndices${b}`} = ${a.length>1?`outputIndices${b}[${A}]`:`outputIndices${b}`};`,A++);return S},v;if(e[0].dataType===9){let b=(C,S,I="")=>`
          let outputIndices${S} = ${w.offsetToIndices(`outputOffset + ${S}u`)};
          ${T(S)};
          let offset${S} = ${y.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${C}[${S}] = ${I}(${y.getByOffset(`index${S}`)}[component${S}]);
        `;v=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${T("")};
      let value = ${y.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${m.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,_,w)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:f}},Wy=e=>Oe({axis:e.axis}),qy=(e,t)=>{let r=e.inputs;Rp(r),e.compute(Mp(e.inputs,t))}}),Bp,Vy,Hy,$1=j(()=>{fe(),ge(),_e(),Bp=(e,t,r,i,n,s,a,o,u)=>{let d=[{type:12,data:s},{type:12,data:i},{type:12,data:n},{type:12,data:r},{type:12,data:a},{type:12,data:o},{type:12,data:u}],c=[s];d.push(...de(t.dims,c));let f=m=>{let y=P("indices_data",t.dataType,t.dims.length),_=se("input_slice_offsets_data",12,1,1),w=[y,_],T=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${m.registerUniforms(T).declareVariables(...w)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},Vy=(e,t)=>{let r=e.inputs,i=r[0].dims,n=r[0].dataType,s=r[1].dims,a=s[s.length-1],o=B.sizeToDimension(s,s.length-1),u=B.sizeFromDimension(i,t.batchDims+a),d=B.sizeToDimension(i,t.batchDims),c=B.sizeFromDimension(i,t.batchDims),f=o/d,m=new Array(a),y=u;for(let S=0;S<a;++S)m[a-1-S]=y,y*=i[t.batchDims+a-1-S];let _=Bp(e,r[1],m,t.batchDims,i,o,f,c,a),w=t.batchDims+a;if(w>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let T=s.slice(0,-1).concat(i.slice(w)),v=B.size(T),b=[{type:12,data:v},{type:12,data:u},...de(r[0].dims,_.dims,T)],C=S=>{let I=P("data",r[0].dataType,r[0].dims.length),A=P("slice_offsets",12,_.dims.length),z=se("output",r[0].dataType,T.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,A,z)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:T,dataType:n}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:b}),getShaderSource:C},{inputs:[r[0],_]})},Hy=e=>({batchDims:e.batch_dims,cacheKey:""})}),Np,Dp,Gy,Fy,x1=j(()=>{fe(),ge(),Ke(),_e(),Np=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=B.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],s=e[2],a=e.length===4?e[3]:void 0;if(s.dims.length!==n.dims.length||!n.dims.map((o,u)=>u===r?Math.ceil(o/i)===s.dims[u]:o===s.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((o,u)=>o===s.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Dp=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,s=B.normalizeAxis(t.gatherAxis,n),a=B.normalizeAxis(t.quantizeAxis,n),o=r.slice(0);o.splice(s,1,...i);let u=B.size(o),d=e[2].dataType,c=e[0].dataType===22,f=[{type:12,data:u},{type:12,data:a},{type:12,data:s},{type:12,data:t.blockSize},...de(...e.map((y,_)=>y.dims),o)],m=y=>{let _=P("data",e[0].dataType,e[0].dims.length),w=P("inputIndices",e[1].dataType,e[1].dims.length),T=P("scales",e[2].dataType,e[2].dims.length),v=e.length>3?P("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=se("output",d,o.length),C=[_,w,T];v&&C.push(v);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(S).declareVariables(...C,b)}
        ${y.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[s]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${T.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${T.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${T.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${lt(d)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,_)=>_!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,_)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f}),getShaderSource:m}},Gy=(e,t)=>{let r=e.inputs;Np(r,t),e.compute(Dp(e.inputs,t))},Fy=e=>Oe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Pp,Up,jy,Ky,S1=j(()=>{fe(),ge(),Ke(),_e(),Pp=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Up=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,s=e[1].dims,a=e[1].dataType,o=B.normalizeAxis(t.axis,n),u=r[o],d=s.slice(0),c=B.size(d),f=P("input",i,n),m=P("indicesInput",a,s.length),y=se("output",i,d.length),_=[{type:12,data:c},{type:6,data:u},{type:12,data:o}];return _.push(...de(r,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:_}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,m,y)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${y.offsetToIndices("global_idx")};

      var idx = ${m.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${y.setByOffset("global_idx","value")};
  }`}},jy=e=>Oe({axis:e.axis}),Ky=(e,t)=>{let r=e.inputs;Pp(r),e.compute(Up(e.inputs,t))}}),Lp,Wp,Qy,Zy,T1=j(()=>{fe(),ge(),_e(),Lp=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Wp=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,s,a]=jm.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),o=[n,s];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,d=Math.ceil(s/u),c=Math.ceil(n/u),f=!0,m=B.size(o),y=[{type:12,data:f?d:m},{type:12,data:n},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(y.push(...de(e[2].dims)),_.push("rank")),y.push(...de(o));let w=v=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let C=t.alpha===1?"":"value *= uniforms.alpha;",S=P("a",e[0].dataType,e[0].dims),I=P("b",e[1].dataType,e[1].dims),A=S.type.value,z=null,x=[S,I];e.length===3&&(z=P("c",e[2].dataType,e[2].dims.length),x.push(z));let W=se("output",e[0].dataType,o.length);x.push(W);let G=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(G).declareVariables(...x)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${A}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${C}
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",W)}; value += ${A}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},T=v=>{let b=P("a",e[0].dataType,e[0].dims),C=P("b",e[1].dataType,e[1].dims),S=null,I=[b,C];e.length===3&&(S=P("c",e[2].dataType,e[2].dims.length),I.push(S));let A=se("output",e[0].dataType,o.length);I.push(A);let z=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],x="",W="";t.transA&&t.transB?(W=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,x="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(W=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,x="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(W=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,x="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(W=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,x="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let G=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(z).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${C.type.storage}, ${u}>, ${u}>;
  ${v.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${A.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${W}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${x}
      }
      workgroupBarrier();
    }

    ${G}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${A.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:y}),getShaderSource:T}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:y}),getShaderSource:w}},Qy=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Zy=(e,t)=>{Lp(e.inputs),e.compute(Wp(e.inputs,t))}}),Zt,ar,Lr,Wr,qp,Vp,Hp,Gp,Fp,jp,Kp,Qp,Yy,Xy,I1=j(()=>{fe(),ge(),Ke(),_e(),[Zt,ar,Lr,Wr]=[0,1,2,3],qp=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Vp=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Hp=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Gp=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Fp=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,jp=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Zt}] = batch;
     indices[${ar}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Lr}] = u32(r);
            indices[${Wr}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Lr}] = u32(clamp(r, 0, H - 1));
          indices[${Wr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Lr}] = gs_reflect(r, border[1], border[3]);
          indices[${Wr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Kp=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Zt}], indices[${ar}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Zt}], indices[${ar}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Zt}], indices[${ar}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Zt}], indices[${ar}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Zt}], indices[${ar}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Zt}], indices[${ar}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Qp=(e,t)=>{let r=P("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=P("grid",e[1].dataType,i.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Zt,ar,Lr,Wr]=[0,3,1,2]);let a=se("output",e[0].dataType,s.length),o=r.type.value,u=B.size(s),d=[{type:12,data:u},...de(e[0].dims,i,s)],c=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,n,a)}
  ${Vp}
  ${Hp(o)}
  ${Gp(t)}
  ${Fp(t)}
  ${jp(r,o,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Lr}]);
      let W_in = i32(uniforms.x_shape[${Wr}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${a.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Zt}], indices[${Lr}], indices[${Wr}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Kp(a,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let m=B.size(s);return{outputs:[{dims:s,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:d}},getShaderSource:c}},Yy=(e,t)=>{qp(e.inputs),e.compute(Qp(e.inputs,t))},Xy=e=>Oe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),pt,Zp,Jy,Ia,Yp,Vi,e0,t0=j(()=>{fe(),ge(),Ke(),Yo(),eu(),_e(),Br(),pt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Zp=(e,t)=>{let r=e[0],i=pt(e,1),n=pt(e,2),s=pt(e,3),a=pt(e,4),o=pt(e,5),u=pt(e,6),d=pt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],f=r.dims[1],m=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],y=f,_=0,w=0,T=Math.floor(m/t.numHeads);if(u&&d&&B.size(u.dims)&&B.size(d.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[3]!==T)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==T)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=u.dims[2],w=u.dims[2]}else if(u&&B.size(u.dims)||d&&B.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&B.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,y=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==T)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,y=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==T)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,y=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(s&&B.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=_+y,C=0;if(a&&B.size(a.dims)>0){C=8;let z=a.dims;throw z.length===1?z[0]===c?C=1:z[0]===3*c+2&&(C=3):z.length===2&&z[0]===c&&z[1]===b&&(C=5),C===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,I=m;if(n&&B.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(y!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=n.dims[2]}else{if(y!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=n.dims[1]*n.dims[3],S=!0}}let A=!1;if(a&&B.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&B.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==c||o.dims[1]!==t.numHeads||o.dims[2]!==f||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:f,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:b,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:m,vHiddenSize:I,headSize:T,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:C,scale:t.scale,broadcastResPosBias:A,passPastInKv:S,qkvFormat:v}},Jy=e=>Oe({...e}),Ia=Oe({perm:[0,2,1,3]}),Yp=(e,t,r,i,n,s,a)=>{let o=[i,n,s],u=B.size(o),d=[{type:12,data:u},{type:12,data:a},{type:12,data:s}],c=f=>{let m=se("qkv_with_bias",t.dataType,o),y=P("qkv",t.dataType,o),_=P("bias",r.dataType,o),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(w).declareVariables(y,_,m)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},Vi=(e,t,r,i,n,s,a,o)=>{let u=s;if(a&&B.size(a.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Yp(e,s,a,t,i,r*n,o),u=u.reshape([t,i,r,n]),r===1||i===1?u:e.compute(Tt(u,Ia.perm),{inputs:[u],outputs:[-1]})[0]}else return s.dims.length===3&&(u=s.reshape([t,i,r,n])),r===1||i===1?u:e.compute(Tt(u,Ia.perm),{inputs:[u],outputs:[-1]})[0]},e0=(e,t)=>{let r=Zp(e.inputs,t),i=e.inputs[0],n=pt(e.inputs,1),s=pt(e.inputs,2),a=pt(e.inputs,3),o=pt(e.inputs,4),u=pt(e.inputs,5),d=pt(e.inputs,6),c=pt(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(n?.dims.length===5)throw new Error("Packed KV is not implemented");let f=n&&s&&n.dims.length===4&&s.dims.length===4,m=Vi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,a,0);if(f)return un(e,m,n,s,o,void 0,d,c,u,r);if(!n||!s)throw new Error("key and value must be provided");let y=Vi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,a,r.hiddenSize),_=Vi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,a,2*r.hiddenSize);un(e,m,y,_,o,void 0,d,c,u,r)}}),Xp,Jp,ef,tf,go,r0,i0,n0=j(()=>{fe(),ge(),Ke(),_e(),Xp=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Jp=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),Oe({numOutputs:i,axis:t.axis,splitSizes:r})},ef=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${oe("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,tf=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},go=(e,t)=>{let r=e[0].dims,i=B.size(r),n=e[0].dataType,s=B.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),o=P("input",n,r.length),u=new Array(t.numOutputs),d=[],c=[],f=0,m=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){f+=t.splitSizes[_],u[_]=f;let w=r.slice();w[s]=t.splitSizes[_],c.push(w),a[_]=se(`output${_}`,n,w.length),d.push({dims:c[_],dataType:e[0].dataType})}m.push({type:12,data:u},...de(r,...c));let y=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...a)}
  ${ef(u.length)}
  ${tf(a)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${oe("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:m})}},r0=(e,t)=>{Xp(e.inputs);let r=e.inputs.length===1?t:Jp(e.inputs,t);e.compute(go(e.inputs,r),{inputs:[0]})},i0=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return Oe({axis:t,numOutputs:i,splitSizes:r})}}),rf,as,s0,a0=j(()=>{fe(),ge(),Ke(),_e(),rf=(e,t)=>{let[r,i,n,s]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!B.areEqual(i.dims,[])&&!B.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!B.areEqual(n.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],d=r.dims[r.dims.length-2],c=n.dims[0],f=B.sizeFromDimension(r.dims,1)/d,m=o===0?n.dims[1]*2:f/a;if(o>m)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(u!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(m/2!==n.dims[1]&&o/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},as=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:s}=t,a=e[0].dims[0],o=B.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],d=o/u,c=e[2].dims[1],f=n===0?c*2:d/i,m=new Array(a,u,d/f,f-c),y=B.computeStrides(m),_=[{type:1,data:s},{type:12,data:m},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[o,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,f,u*f,1]}):[],...de(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=T=>{let v=P("input",e[0].dataType,e[0].dims.length),b=P("position_ids",e[1].dataType,e[1].dims.length),C=P("cos_cache",e[2].dataType,e[2].dims.length),S=P("sin_cache",e[3].dataType,e[3].dims.length),I=se("output",e[0].dataType,e[0].dims.length);return T.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:m.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${T.declareVariables(v,b,C,S,I)}

        ${T.mainStart(bi)}
          let half_rotary_emb_dim = uniforms.${C.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",se("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${C.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${C.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Oe({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(m)/bi)},programUniforms:_})}},s0=(e,t)=>{rf(e.inputs,t),e.compute(as(e.inputs,t))}}),nf,sf,Ca,af,o0,C1=j(()=>{Ke(),fe(),eu(),t0(),n0(),Br(),a0(),_e(),nf=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],n=e[2],s=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=r.dims[0],d=r.dims[1],c=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,m=0,y=!i||i.dims.length===0,_=Math.floor(y?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);y&&(c=_*t.numHeads);let w=s&&s.dims.length!==0,T=a&&a.dims.length!==0;if(w&&s.dims.length===4&&s.dims[0]===u&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&T){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=s.dims[2]}else if(w||T)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');f=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let b=0,C=!1,S=t.kvNumHeads?_*t.kvNumHeads:c;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(f!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=n.dims[2]}else{if(f!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=n.dims[1]*n.dims[3],C=!0}}let I=e.length>4?e[5]:void 0;if(I&&I.dims.length!==1&&I.dims[0]!==u)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:u,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:S,headSize:_,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:C,qkvFormat:v}},sf=Oe({perm:[0,2,1,3]}),Ca=(e,t,r)=>{let i=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),i=e.compute(Tt(i,sf.perm),{inputs:[i],outputs:[-1]})[0]),i},af=(e,t,r,i)=>{let n=7,s=["type","type"],a=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=c=>{let f=P("seq_lens",r.dataType,r.dims),m=P("total_seq_lens",i.dataType,i.dims),y=se("pos_ids",n,a),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(_).declareVariables(f,m,y)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${m.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${y.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:d}},o0=(e,t)=>{let r=nf(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=Oe({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[m,y,_]=!n&&!s?e.compute(go([i],f),{inputs:[i],outputs:[-1,-1,-1]}):[i,n,s],w,T;if(t.doRotary){let S=e.compute(af(r.batchSize,r.sequenceLength,u,d),{inputs:[u,d],outputs:[-1]})[0],I=e.inputs[7],A=e.inputs[8],z=Oe({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),x=[m,S,I,A],W=[-1];w=e.compute(as(x,z),{inputs:x,outputs:W})[0],x.splice(0,1,y);let G=Oe({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});T=e.compute(as(x,G),{inputs:x,outputs:W})[0]}let v=Vi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?w:m,void 0,0),b=Ca(e,t.doRotary?T:y,r),C=Ca(e,_,r);un(e,v,b,C,void 0,void 0,a,o,void 0,r,u,d)}}),Ea,of,uf,u0,E1=j(()=>{fe(),ge(),Br(),_e(),Ea=(e,t,r,i,n,s,a,o)=>{let u=je(s),d=u===1?"f32":`vec${u}f`,c=u===1?"vec2f":`mat2x${u}f`,f=n*a,m=64;f===1&&(m=256);let y=[n,a,s/u],_=[n,a,2],w=["rank","type","type"],T=[];T.push(...de(y,_));let v=b=>{let C=P("x",t.dataType,3,u),S=P("scale",r.dataType,r.dims),I=P("bias",i.dataType,i.dims),A=se("output",1,3,2),z=[C,S,I,A];return`
  var<workgroup> workgroup_shared : array<${c}, ${m}>;
  const workgroup_size = ${m}u;
  ${b.declareVariables(...z)}
  ${b.mainStart(m)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${C.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Mr("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${Mr("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${m}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:f},programUniforms:T}),getShaderSource:v},{inputs:[t,r,i],outputs:[-1]})[0]},of=(e,t,r)=>{let i=t[0].dims,n=i,s=2,a=i[0],o=i[1],u=B.sizeFromDimension(i,s),d=je(u),c=B.size(n)/d,f=Ea(e,t[0],t[1],t[2],a,u,o,r.epsilon),m=[a,o,u/d],y=[a,o],_=["type","none"],w=T=>{let v=P("x",t[0].dataType,m.length,d),b=P("scale_shift",1,y.length,2),C=se("output",t[0].dataType,m.length,d),S=[v,b,C];return`
  ${T.registerUniform("output_size","u32").declareVariables(...S)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${C.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${C.type.value}(scale_shift.x) + ${C.type.value}(scale_shift.y);
      ${C.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...de(m,y,m)]}),getShaderSource:w},{inputs:[t[0],f]})},uf=(e,t,r)=>{let i=t[0].dims,n=i,s=i[0],a=i[i.length-1],o=B.sizeFromDimension(i,1)/a,u=je(a),d=B.size(n)/u,c=[{type:12,data:o},{type:12,data:Math.floor(a/u)}],f=["type","type"],m=!1,y=[0,i.length-1];for(let v=0;v<i.length-2;v++)m=m||i[v+1]!==1,y.push(v+1);m=m&&i[i.length-1]!==1;let _=m?e.compute(Tt(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(v,b)=>i[y[b]])),w=Ea(e,_,t[1],t[2],s,o,a,r.epsilon),T=v=>{let b=Je(t[0].dataType),C=u===1?"vec2f":`mat${u}x2f`,S=z=>{let x=z===0?"x":"y",W=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${b}(${W}(scale.${x}))`;case 2:return`vec2<${b}>(${W}(scale[0].${x}, scale[1].${x}))`;case 4:return`vec4<${b}>(${W}(scale[0].${x}, scale[1].${x}, scale[2].${x}, scale[3].${x}))`;default:throw new Error(`Not supported compoents ${u}`)}},I=P("input",t[0].dataType,t[0].dims,u),A=se("output",t[0].dataType,n,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${C}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${A.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:T},{inputs:[t[0],w]})},u0=(e,t)=>{t.format==="NHWC"?uf(e,e.inputs,t):of(e,e.inputs,t)}}),lf,df,l0,k1=j(()=>{fe(),ge(),_e(),lf=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},df=(e,t,r)=>{let i=t.simplified,n=e[0].dims,s=e[1],a=!i&&e[2],o=n,u=B.normalizeAxis(t.axis,n.length),d=B.sizeToDimension(n,u),c=B.sizeFromDimension(n,u),f=B.size(s.dims),m=a?B.size(a.dims):0;if(f!==c||a&&m!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${m}`);let y=[];for(let I=0;I<n.length;++I)I<u?y.push(n[I]):y.push(1);let _=je(c),w=["type","type"],T=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/_)},{type:1,data:t.epsilon}];a&&w.push("type");let v=r>1,b=r>2,C=I=>{let A=Je(e[0].dataType),z=[P("x",e[0].dataType,e[0].dims,_),P("scale",s.dataType,s.dims,_)];a&&z.push(P("bias",a.dataType,a.dims,_)),z.push(se("output",e[0].dataType,o,_)),v&&z.push(se("mean_data_output",1,y)),b&&z.push(se("inv_std_output",1,y));let x=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(x).declareVariables(...z)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ao("f32",_)};
    var mean_square_vector = ${ao("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${di(A,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Mr("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Mr("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${di(A,_,"x[j + offset]")};
      let f32scale = ${di(A,_,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${di(A,_,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return v&&S.push({dims:y,dataType:1}),b&&S.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:w},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:T}),getShaderSource:C}},l0=(e,t)=>{lf(e.inputs),e.compute(df(e.inputs,t,e.outputCount))}}),cf,d0,A1=j(()=>{ge(),su(),au(),cf=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},d0=e=>{cf(e.inputs);let t=wi.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(nu(e.inputs,{activation:""},t));else{let n=t[t.length-2],s=B.size(e.inputs[0].dims.slice(0,-2)),a=B.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&n===1&&a===1){let o=e.inputs[0].reshape([1,s,i]),u=e.inputs[1].reshape([1,i,r]),d=[1,s,r],c=[o,u];e.compute(ss(c,{activation:""},t,d),{inputs:c})}else e.compute(ss(e.inputs,{activation:""},t))}}}),pf,ff,hf,c0,p0,z1=j(()=>{fe(),ge(),Ke(),_e(),pf=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!B.areEqual(a.dims,[t.n,n,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(B.size(o)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,d=t.n*(t.bits===8?n:Math.floor((n*t.bits+7)/8));if(B.size(u)!==d)throw new Error("zeroPoints input size error.")}},ff=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],s=t.k,a=t.n,o=r.slice(0,i-2),u=B.size(o),d=e[1].dims[2]/4,c=e[0].dataType,f=je(t.k),m=je(d),y=je(a),_=o.concat([n,a]),w=n>1&&a/y%2===0?2:1,T=B.size(_)/y/w,v=64,b=[],C=[u,n,s/f],S=B.convertShape(e[1].dims).slice();S.splice(-1,1,d/m),b.push(...de(C)),b.push(...de(S)),b.push(...de(e[2].dims)),e.length===4&&b.push(...de(B.convertShape(e[3].dims)));let I=[u,n,a/y];b.push(...de(I));let A=z=>{let x=C.length,W=P("a",e[0].dataType,x,f),G=P("b",12,S.length,m),ue=P("scales",e[2].dataType,e[2].dims.length),re=[W,G,ue],ae=e.length===4?P("zero_points",12,e[3].dims.length):void 0;ae&&re.push(ae);let N=I.length,L=se("output",e[0].dataType,N,y),Q=Je(e[0].dataType),te=(()=>{switch(f){case 1:return`array<${Q}, 8>`;case 2:return`mat4x2<${Q}>`;case 4:return`mat2x4<${Q}>`;default:throw new Error(`${f}-component is not supported.`)}})(),Z=()=>{let U=`
          // reuse a data
            var input_offset = ${W.indicesToOffset(`${W.type.indices}(batch, row, word_offset)`)};
            var a_data: ${te};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${W.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let K=0;K<y*w;K++)U+=`
            b_value = ${m===1?`b${K}_data`:`b${K}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${te}(${Array.from({length:4},(pe,$e)=>`${Q}(b_value_lower[${$e}]), ${Q}(b_value_upper[${$e}])`).join(", ")});
            b_dequantized_values = ${f===1?`${te}(${Array.from({length:8},(pe,$e)=>`(b_quantized_values[${$e}] - ${ae?`zero_point${K}`:"zero_point"}) * scale${K}`).join(", ")});`:`(b_quantized_values - ${te}(${Array(8).fill(`${ae?`zero_point${K}`:"zero_point"}`).join(",")})) * scale${K};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(K/y)}]${y>1?`[${K%y}]`:""} += ${Array.from({length:8/f},(pe,$e)=>`${f===1?`a_data[${$e}] * b_dequantized_values[${$e}]`:`dot(a_data[${$e}], b_dequantized_values[${$e}])`}`).join(" + ")};
          `;return U},le=()=>{let U=`
            var col_index = col * ${y};
            ${ae?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${Q}(8);`}
            `;for(let K=0;K<y*w;K++)U+=`
            let scale${K} = ${ue.getByOffset("col_index * nBlocksPerCol + block")};
            ${ae?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${ae.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${K} = ${Q}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return U},Te=()=>{let U=`col_index = col * ${y};`;for(let K=0;K<y*w;K++)U+=`
            let b${K}_data = ${G.getByIndices(`${G.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return U+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${te};
            var b_dequantized_values: ${te};`,U};return`
        var<workgroup> workgroup_shared: array<${L.type.value}, ${w*v}>;
        ${z.declareVariables(...re,L)}
        ${z.mainStart([v,1,1])}
          let output_indices = ${L.offsetToIndices(`(global_idx / ${v}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${le()}
            for (var word: u32 = 0; word < ${d}; word += ${m}) {
              ${Te()}
              for (var i: u32 = 0; i < ${m}; i++) {
                ${Z()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${L.type.value} = ${L.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${L.setByIndices(`${L.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${m};${y};${w};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:T},programUniforms:b}),getShaderSource:A}},hf=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],s=t.k,a=t.n,o=r.slice(0,i-2),u=B.size(o),d=e[1].dims[2]/4,c=e[0].dataType,f=je(t.k),m=je(d),y=o.concat([n,a]),_=128,w=a%8===0?8:a%4===0?4:1,T=_/w,v=T*m*8,b=v/f,C=v/t.blockSize,S=B.size(y)/w,I=[],A=[u,n,s/f],z=B.convertShape(e[1].dims).slice();z.splice(-1,1,d/m),I.push(...de(A)),I.push(...de(z)),I.push(...de(e[2].dims)),e.length===4&&I.push(...de(B.convertShape(e[3].dims)));let x=[u,n,a];I.push(...de(x));let W=G=>{let ue=A.length,re=P("a",e[0].dataType,ue,f),ae=P("b",12,z.length,m),N=P("scales",e[2].dataType,e[2].dims.length),L=[re,ae,N],Q=e.length===4?P("zero_points",12,e[3].dims.length):void 0;Q&&L.push(Q);let te=x.length,Z=se("output",e[0].dataType,te),le=Je(e[0].dataType),Te=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${le}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${le}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${le}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${le}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${re.type.value}, ${b}>;
        var<workgroup> inter_results: array<array<${Z.type.value}, ${T}>, ${w}>;
        ${G.declareVariables(...L,Z)}
        ${G.mainStart([T,w,1])}
          let output_indices = ${Z.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${C} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${b};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${b}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${re.getByIndices(`${re.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${re.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${C} + local_id.x;
            ${Q?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${Q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${le}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${le}(8);`}
            let scale = ${N.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${ae.getByIndices(`${ae.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${m}; i++) {
              ${Te()}
              let b_value = ${m===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${le}>(${Array.from({length:4},(U,K)=>`${le}(b_value_lower[${K}]), ${le}(b_value_upper[${K}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${le}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(U,K)=>`${`dot(a_data${K}, b_dequantized_values[${K}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${Z.type.value} = ${Z.type.value}(0);
            for (var b = 0u; b < ${T}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${Z.setByIndices(`${Z.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${m};${T};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:c}],dispatchGroup:{x:S},programUniforms:I}),getShaderSource:W}},c0=(e,t)=>{pf(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(hf(e.inputs,t)):e.compute(ff(e.inputs,t))},p0=e=>Oe(e)}),mf,gf,yf,_f,wf,bf,vf,$f,f0,O1=j(()=>{fe(),ge(),_e(),mf=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},gf=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${oe("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${oe("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${oe("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},yf=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${oe("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${oe("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${oe("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${oe("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},_f=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${oe("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${oe("uniforms.x_shape",n,t)})) {
                  k = i32(${oe("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${oe("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},wf=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${oe("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${oe("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${oe("uniforms.x_shape",n,t)})) {
                  k -= i32(${oe("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${oe("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},bf=(e,t,r)=>{switch(r.mode){case 0:return gf(e,t,r.pads.length);case 1:return yf(e,t,r.pads.length);case 2:return _f(e,t,r.pads.length);case 3:return wf(e,t,r.pads.length);default:throw new Error("Invalid mode")}},vf=(e,t)=>{let r=B.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=B.size(r),s=[{type:12,data:n},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&s.push({type:a?e[2].dataType:1,data:t.value}),s.push(...de(e[0].dims,r));let o=["rank"],u=d=>{let c=se("output",e[0].dataType,r.length),f=P("x",e[0].dataType,i.length),m=f.type.value,y=bf(c,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:a?m:"f32"}),`
            ${d.registerUniforms(_).declareVariables(f,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${m}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(r)/64)},programUniforms:s}),getShaderSource:u}},$f=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,s=new Int32Array(2*n).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)s[Number(o[u])]=Number(r[u]),s[Number(o[u])+n]=Number(r[u+o.length])}else r.forEach((o,u)=>s[Number(u)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:t.mode,value:i,pads:a}}else return t},f0=(e,t)=>{mf(e.inputs);let r=$f(e.inputs,t);e.compute(vf(e.inputs,r),{inputs:[0]})}}),Bi,ka,Aa,za,Oa,xf,Sf,Ra,Ma,h0,m0,Ba,g0,y0,Na,_0,w0,b0,v0,R1=j(()=>{Rt(),fe(),ge(),_e(),Bi=e=>{if(Ve.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},ka=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),u=s?t.dilations.slice():[],d=t.pads.slice();is.adjustPoolAttributes(r,n,a,o,u,d);let c=is.computePoolOutputShape(r,n,o,u,a,d,t.autoPad),f=Object.assign({},t);s?Object.assign(f,{kernelShape:a,strides:o,pads:d,dilations:u,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:a,strides:o,pads:d,cacheKey:t.cacheKey});let m=c.slice();return m.push(m.splice(1,1)[0]),[f,i?m:c]},Aa=(e,t)=>{let r=t.format==="NHWC",i=B.size(e),n=B.size(t.kernelShape),s=[{type:12,data:i},{type:12,data:n}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],f=!!(d+c);s.push({type:12,data:o},{type:12,data:u},{type:12,data:d},{type:12,data:c}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let m=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],T=t.pads[t.pads.length-2];m=!!(w+T),s.push({type:12,data:y},{type:12,data:_},{type:12,data:w},{type:12,data:T}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,f,m]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=B.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((d,c)=>d+c);return[s,a,!!u,!1,!1]}},za=(e,t,r,i,n,s,a,o,u,d,c,f)=>{let m=n.format==="NHWC",y=t.type.value,_=se("output",t.type.tensor,i);if(n.kernelShape.length<=2){let w="",T="",v="",b=r-(m?2:1);if(c?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,n.kernelShape.length===2){let C=r-(m?3:2);f?T=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${C}] = indices[${C}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${C}] < 0 || xIndices[${C}] >= uniforms.x_shape[${C}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:T=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${C}] = indices[${C}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${y}(${o});
              var pad = 0;
              ${T}
              ${w}
              ${v}
              ${a}

              output[global_idx] = value;
            }`}else{if(m)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=n.kernelShape.length,T=n.pads.length,v="";return d?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(u).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${y}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${oe("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${oe("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${oe("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${oe("uniforms.pads","j - 2u",T)};
                  ${v}
              }
              ${a}

              output[global_idx] = value;
            }`}},Oa=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,xf=e=>`${Oa(e)};${e.countIncludePad}`,Sf=e=>`${Oa(e)};${e.storageOrder};${e.dilations}`,Ra=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ma=(e,t,r,i)=>{let[n,s]=ka(t,i,r),a=P("x",t.dataType,t.dims.length),o=a.type.value,u="value += x_val;",d="";n.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[c,f,m,y,_]=Aa(s,n);c.push(...de(t.dims,s));let w=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${m};${y};${_}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(s)/64)},programUniforms:c}),getShaderSource:T=>za(T,a,t.dims.length,s.length,n,u,d,0,f,m,y,_)}},h0=e=>{let t=e.count_include_pad!==0,r=Ra(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:xf(i)}},m0=(e,t)=>{Bi(e.inputs),e.compute(Ma("AveragePool",e.inputs[0],!1,t))},Ba={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},g0=e=>{let t=e.format;return{format:t,...Ba,cacheKey:t}},y0=(e,t)=>{Bi(e.inputs),e.compute(Ma("GlobalAveragePool",e.inputs[0],!0,t))},Na=(e,t,r,i)=>{let[n,s]=ka(t,i,r),a=`
      value = max(x_val, value);
    `,o="",u=P("x",t.dataType,t.dims.length),d=["rank"],[c,f,m,y,_]=Aa(s,n);return c.push(...de(t.dims,s)),{name:e,shaderCache:{hint:`${i.cacheKey};${m};${y};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(s)/64)},programUniforms:c}),getShaderSource:w=>za(w,u,t.dims.length,s.length,n,a,o,t.dataType===10?-65504:-1e5,f,m,y,_)}},_0=(e,t)=>{Bi(e.inputs),e.compute(Na("MaxPool",e.inputs[0],!1,t))},w0=e=>{let t=e.storage_order,r=e.dilations,i=Ra(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:Sf(n)}},b0=e=>{let t=e.format;return{format:t,...Ba,cacheKey:t}},v0=(e,t)=>{Bi(e.inputs),e.compute(Na("GlobalMaxPool",e.inputs[0],!0,t))}}),Tf,If,$0,x0,M1=j(()=>{fe(),ge(),Ke(),_e(),Tf=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,s)=>s===t.axis||n===e[0].dims[s]).reduce((n,s)=>n&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},If=(e,t)=>{let r=B.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,s=e[0].dims,a=e[1].dataType,o=B.size(s),u=i===3||i===2,d=u?[Math.ceil(B.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,f=e.length>2?e[2]:void 0,m=f?u?[Math.ceil(B.size(f.dims)/4)]:f.dims:void 0,y=c.length===0||c.length===1&&c[0]===1,_=y===!1&&c.length===1,w=je(o),T=y&&(!u||w===4),v=T?w:1,b=T&&!u?w:1,C=P("input",u?12:i,d.length,b),S=P("scale",a,c.length),I=f?P("zero_point",u?12:i,m.length):void 0,A=se("output",a,s.length,v),z=[C,S];I&&z.push(I);let x=[d,c];f&&x.push(m);let W=[{type:12,data:o/v},{type:12,data:r},{type:12,data:t.blockSize},...de(...x,s)],G=ue=>{let re=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ue.registerUniforms(re).declareVariables(...z,A)}
      ${ue.mainStart()}
          ${ue.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${A.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${C.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${C.getByOffset("global_idx")};`};

          // Set scale input
          ${y?`let scale_value= ${S.getByOffset("0")}`:_?`
            let scale_index = ${A.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?y?u?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:_?u?`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${u?n?"i32":"u32":C.type.value}(0);`};
      // Compute and write output
      ${A.setByOffset("global_idx",`${A.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:G,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/v/64),y:1,z:1},programUniforms:W})}},$0=(e,t)=>{Tf(e.inputs,t),e.compute(If(e.inputs,t))},x0=e=>Oe({axis:e.axis,blockSize:e.blockSize})}),Cf,Ef,S0,B1=j(()=>{Rt(),fe(),_e(),Cf=(e,t,r)=>{let i=e===t,n=e<t&&r<0,s=e>t&&r>0;if(i||n||s)throw new Error("Range these inputs' contents are invalid.")},Ef=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),s=[n],a=n,o=[{type:12,data:a},{type:i,data:e},{type:i,data:r},...de(s)],u=d=>{let c=se("output",i,s.length),f=c.type.value,m=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(m).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},S0=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),Ve.webgpu.validateInputContent&&Cf(t,r,i),e.compute(Ef(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),kf,Af,T0,I0,N1=j(()=>{fe(),ge(),Ke(),_e(),kf=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${n}bitcast<${i}>(oldValue) + (${r})${s}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${n}min(bitcast<${i}>(oldValue), (${r}))${s}`;case"mul":return`${n}(bitcast<${i}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Af=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r,s=1,a=Math.ceil(B.sizeToDimension(i,i.length-1)/s),o=i[i.length-1],u=B.sizeFromDimension(r,o),d=[{type:12,data:a},{type:12,data:o},{type:12,data:u},...de(e[1].dims,e[2].dims,n)],c=f=>{let m=P("indices",e[1].dataType,e[1].dims.length),y=P("updates",e[2].dataType,e[2].dims.length,s),_=t.reduction!=="none"&&t.reduction!==""?eg("output",e[0].dataType,n.length):se("output",e[0].dataType,n.length,s);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(m,y,_)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${kf(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:c}},T0=e=>Oe({reduction:e.reduction}),I0=(e,t)=>{e.compute(Af(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),zf,Of,Rf,Da,Mf,Bf,Nf,Df,Pf,Uf,Lf,Wf,Pa,qf,Vf,Hf,Gf,Ff,C0,E0,D1=j(()=>{fe(),ge(),Ke(),_e(),zf=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Of=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,s)=>i[n]=e[s]),i},Rf=(e,t,r,i,n,s)=>{let[a,o,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(c=>s.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");zf(i,t),t.axes.length>0&&Of(i,t.axes,d).forEach((c,f)=>i[f]=c)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(c=>n.push(Number(c))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Da=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,Mf=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Da("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Da("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Bf=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Nf=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((s,a)=>{i[s]=n[a],i[a+r]=n[t.length+a]}),i):n},Df=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(s=>n.push(s)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((s,a)=>n[s]=r[a])}else r.forEach(s=>n.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((s,a)=>Math.round(s*t[a]))}return n},Pf=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=i),r.axes.forEach(s=>n[s]=Math.round(e[s]*t[s]))):(t.fill(i,0,t.length),n.forEach((s,a)=>n[a]=Math.round(s*t[a]))),n},Uf=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${oe("uniforms.scales","i",i)};
        var roi_low = ${oe("uniforms.roi","i",n)};
        var roi_hi = ${oe("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${oe("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${oe("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Lf=(e,t,r,i,n,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${oe("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${oe("uniforms.roi","i",s)};
          var roi_hi = ${oe("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${oe("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${oe("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${a} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Wf=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${oe("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Pa=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",qf=(e,t,r,i,n)=>{let[s,a,o,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${Pa(e,u,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${a}];
      var col:${d} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${r[a]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[a]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Vf=(e,t,r,i,n,s,a,o,u,d)=>{let c=r.length===2,[f,m]=c?[0,1]:[2,3],y=e.type.value,_=w=>{let T=w===f?"row":"col";return`
      fn ${T}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[w]},
        ${i[w]}, ${r[w]}, ${s[w]}, ${s[w]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[w]} - 1))) {
          return ${u};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${T}: ${y} = originalIdx + ${y}(i);
          if (${T} < 0 || ${T} >= ${r[w]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${T} = max(0, min(${T}, ${r[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${T})`)};
          data[i + 1] = ${w===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(f)};
    ${_(m)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Hf=(e,t,r,i,n)=>{let[s,a,o,u,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${Pa(e,d,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${a}];
      var height:${c} = originalIndices[${o}];
      var width:${c} = originalIndices[${u}];
      ${i?`if (depth < 0 || depth > (${r[a]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[u]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[a]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Gf=(e,t,r,i,n,s)=>{let a=e.dims,o=Nf(s,t.axes,a.length),u=Df(a,i,n,t.axes),d=i.slice();i.length===0&&(d=a.map((b,C)=>b===0?1:u[C]/b),t.keepAspectRatioPolicy!=="stretch"&&(u=Pf(a,d,t)));let c=se("output",e.dataType,u.length),f=P("input",e.dataType,a.length),m=B.size(u),y=a.length===u.length&&a.every((b,C)=>b===u[C]),_=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,T=f.type.value,v=b=>`
      ${y?"":`
      ${Mf(t.coordinateTransformMode,T)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Wf(f,a)};
              ${Bf(t.nearestMode,r,T)};
              ${Lf(f,c,a,u,d.length,o.length,_)};
              `;case"linear":return`
              ${Uf(c,a,u,d.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${qf(f,c,a,_,w)}`;if(a.length===3||a.length===5)return`${Hf(f,c,a,_,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${Vf(f,c,a,u,d,o,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(f,c)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${o.length>0?o:""}|${y}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},{type:1,data:d},{type:1,data:o},...de(a,u)]})}},Ff=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},C0=(e,t)=>{let r=[],i=[],n=[],s=Ff(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Rf(e.inputs,t,s,r,i,n),e.compute(Gf(e.inputs[0],t,s,r,i,n),{inputs:[0]})},E0=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return Oe({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:u,nearestMode:d})}}),jf,Kf,k0,P1=j(()=>{fe(),ge(),_e(),jf=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},Kf=(e,t,r,i)=>{let n=t.simplified,s=e[0].dims,a=B.size(s),o=s,u=a,d=s.slice(-1)[0],c=i?s.slice(0,-1).concat(1):[],f=!n&&e.length>3,m=e.length>4,y=i&&r>1,_=i&&r>2,w=r>3,T=64,v=je(d),b=[{type:12,data:u},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],C=I=>{let A=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[P("x",e[0].dataType,e[0].dims,v),P("skip",e[1].dataType,e[1].dims,v),P("gamma",e[2].dataType,e[2].dims,v)];f&&z.push(P("beta",e[3].dataType,e[3].dims,v)),m&&z.push(P("bias",e[4].dataType,e[4].dims,v)),z.push(se("output",e[0].dataType,o,v)),y&&z.push(se("mean_output",1,c)),_&&z.push(se("inv_std_output",1,c)),w&&z.push(se("input_skip_bias_sum",e[0].dataType,o,v));let x=Je(e[0].dataType),W=Je(1,v);return`

      ${I.registerUniforms(A).declareVariables(...z)}
      var<workgroup> sum_shared : array<${W}, ${T}>;
      var<workgroup> sum_squared_shared : array<${W}, ${T}>;

      ${I.mainStart([T,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${T};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${T};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${T-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${m?"bias[offset1d + i]":x+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${di(x,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${T};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Mr("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Mr("square_sum",v)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${y?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${x}(mean)`}) *
            ${x}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return r>1&&S.push({dims:c,dataType:1}),r>2&&S.push({dims:c,dataType:1}),r>3&&S.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${y};${_};${w}`,inputDependencies:e.map((I,A)=>"type")},getShaderSource:C,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/d)},programUniforms:b})}},k0=(e,t)=>{jf(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Kf(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Qf,Ni,Zf,Ua,Yf,Xf,A0,z0,U1=j(()=>{fe(),ge(),Ke(),_e(),Qf=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},Ni=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Zf=(e,t)=>{if(e.length>1){let r=Ni(e,1),i=Ni(e,2),n=Ni(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),Oe({starts:r,ends:i,axes:n})}else return t},Ua=(e,t,r,i,n)=>{let s=e;return e<0&&(s+=r[i[t]]),n[t]<0?Math.max(0,Math.min(s,r[i[t]]-1)):Math.max(0,Math.min(s,r[i[t]]))},Yf=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${oe("uniforms.input_shape","i",r.length)};
            let steps_i = ${oe("uniforms.steps","i",r.length)};
            let signs_i = ${oe("uniforms.signs","i",r.length)};
            let starts_i = ${oe("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Xf=(e,t)=>{let r=e[0].dims,i=B.size(r),n=t.axes.length>0?B.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=Ni(e,4);s.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(n.length).fill(1));let a=t.starts.map((v,b)=>Ua(v,b,r,n,s)),o=t.ends.map((v,b)=>Ua(v,b,r,n,s));if(n.length!==a.length||n.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let v=0;v<r.length;++v)n.includes(v)||(a.splice(v,0,0),o.splice(v,0,r[v]),s.splice(v,0,1));let u=s.map(v=>Math.sign(v));s.forEach((v,b,C)=>{if(v<0){let S=(o[b]-a[b])/v,I=a[b],A=I+S*s[b];a[b]=A,o[b]=I,C[b]=-v}});let d=r.slice(0);n.forEach((v,b)=>{d[v]=Math.ceil((o[v]-a[v])/s[v])});let c={dims:d,dataType:e[0].dataType},f=se("output",e[0].dataType,d.length),m=P("input",e[0].dataType,e[0].dims.length),y=B.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:s.length}],w=[{type:12,data:y},{type:12,data:a},{type:6,data:u},{type:12,data:s},...de(e[0].dims,d)],T=v=>`
      ${v.registerUniforms(_).declareVariables(m,f)}
        ${Yf(m,f,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",m.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:T,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:w})}},A0=(e,t)=>{Qf(e.inputs,t);let r=Zf(e.inputs,t);e.compute(Xf(e.inputs,r),{inputs:[0]})},z0=e=>{let t=e.starts,r=e.ends,i=e.axes;return Oe({starts:t,ends:r,axes:i})}}),Jf,eh,O0,R0,L1=j(()=>{fe(),ge(),Ke(),Br(),_e(),Jf=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},eh=(e,t)=>{let r=e.inputs[0],i=r.dims,n=B.size(i),s=i.length,a=B.normalizeAxis(t.axis,s),o=a<i.length-1,u,d=[];o?(d=Array.from({length:s},(z,x)=>x),d[a]=s-1,d[s-1]=a,u=e.compute(Tt(r,d),{inputs:[r],outputs:[-1]})[0]):u=r;let c=u.dims,f=c[s-1],m=n/f,y=je(f),_=f/y,w=64;m===1&&(w=256);let T=(z,x)=>x===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:x===2?`max(${z}.x, ${z}.y)`:x===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,v=P("x",u.dataType,u.dims,y),b=se("result",u.dataType,u.dims,y),C=v.type.value,S=Je(u.dataType)==="f32"?`var threadMax = ${C}(-3.4028234663852886e+38f);`:`var threadMax = ${C}(-65504.0h);`,I=z=>`
      var<workgroup> rowMaxShared : ${C};
      var<workgroup> rowSumShared : ${C};
      var<workgroup> threadShared : array<${C}, ${w}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${C} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${C}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${z.registerUniform("packedCols","i32").declareVariables(v,b)}
      ${z.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${S}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${C}(${T("threadShared[0]",y)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${C}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${C}(${Mr("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${C}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,A=e.compute({name:"Softmax",shaderCache:{hint:`${y};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:u.dataType}],dispatchGroup:{x:m},programUniforms:[{type:6,data:_}]}),getShaderSource:I},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(Tt(A,d),{inputs:[A]})},O0=(e,t)=>{Jf(e.inputs),eh(e,t)},R0=e=>Oe({axis:e.axis})}),La,th,rh,ih,M0,W1=j(()=>{fe(),ge(),_e(),La=e=>Array.from(e.getBigInt64Array(),Number),th=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(La(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},rh=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},ih=(e,t)=>{let r=e[0].dims,i=t??La(e[1]),n=rh(r,i),s=B.size(n),a=e[0].dataType,o=P("input",a,r.length),u=se("output",a,n.length),d=c=>`
      const inputShape = ${o.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(o,u)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...de(e[0].dims,n)]}),getShaderSource:d}},M0=e=>{th(e.inputs),e.compute(ih(e.inputs),{inputs:[0]})}}),nh,sh,B0,q1=j(()=>{fe(),ge(),_e(),nh=(e,t,r,i,n)=>{let s=se("output_data",n,r.length,4),a=P("a_data",t[1].dataType,t[1].dims.length,4),o=P("b_data",t[2].dataType,t[2].dims.length,4),u=P("c_data",t[0].dataType,t[0].dims.length,4),d,c=(f,m,y)=>`select(${m}, ${f}, ${y})`;if(!i)d=s.setByOffset("global_idx",c(a.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let f=(m,y,_="")=>{let w=`a_data[index_a${y}][component_a${y}]`,T=`b_data[index_b${y}][component_b${y}]`,v=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
            let output_indices${y} = ${s.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offset_a${y} = ${a.broadcastedIndicesToOffset(`output_indices${y}`,s)};
            let offset_b${y} = ${o.broadcastedIndicesToOffset(`output_indices${y}`,s)};
            let offset_c${y} = ${u.broadcastedIndicesToOffset(`output_indices${y}`,s)};
            let index_a${y} = offset_a${y} / 4u;
            let index_b${y} = offset_b${y} / 4u;
            let index_c${y} = offset_c${y} / 4u;
            let component_a${y} = offset_a${y} % 4u;
            let component_b${y} = offset_b${y} % 4u;
            let component_c${y} = offset_c${y} % 4u;
            ${m}[${y}] = ${_}(${c(w,T,v)});
          `};n===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,a,o,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},sh=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,s=!(B.areEqual(t,r)&&B.areEqual(r,i)),a=t,o=B.size(t);if(s){let d=wi.calcShape(wi.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");a=d,o=B.size(a)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>nh(d,e,a,s,n),getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...de(i,t,r,a)]})}},B0=e=>{e.compute(sh(e.inputs))}}),N0,V1=j(()=>{i1(),eu(),n1(),s1(),a1(),o1(),u1(),f1(),m1(),g1(),y1(),_1(),w1(),b1(),v1(),$1(),x1(),S1(),T1(),I1(),C1(),E1(),k1(),A1(),z1(),t0(),O1(),R1(),M1(),B1(),N1(),Jo(),D1(),a0(),P1(),U1(),L1(),n0(),W1(),Br(),tu(),q1(),N0=new Map([["Abs",[kg]],["Acos",[Ag]],["Acosh",[zg]],["Add",[cy]],["ArgMax",[Tg,uo]],["ArgMin",[Sg,uo]],["Asin",[Og]],["Asinh",[Rg]],["Atan",[Mg]],["Atanh",[Bg]],["Attention",[Ig]],["AveragePool",[m0,h0]],["BatchNormalization",[Cg]],["BiasAdd",[Eg]],["BiasSplitGelu",[dy]],["Cast",[Dg,Ng]],["Ceil",[Ug]],["Clip",[Pg]],["Concat",[vy,$y]],["Conv",[mo,ho]],["ConvTranspose",[Oy,zy]],["Cos",[Lg]],["Cosh",[Wg]],["CumSum",[Ry,My]],["DepthToSpace",[By,Ny]],["DequantizeLinear",[$0,x0]],["Div",[py]],["Einsum",[Dy,Py]],["Elu",[qg,qi]],["Equal",[fy]],["Erf",[Vg]],["Exp",[Hg]],["Expand",[Uy]],["FastGelu",[Ly]],["Floor",[Gg]],["FusedConv",[mo,ho]],["Gather",[qy,Wy]],["GatherElements",[Ky,jy]],["GatherBlockQuantized",[Gy,Fy]],["GatherND",[Vy,Hy]],["Gelu",[Fg]],["Gemm",[Zy,Qy]],["GlobalAveragePool",[y0,g0]],["GlobalMaxPool",[v0,b0]],["Greater",[yy]],["GreaterOrEqual",[wy]],["GridSample",[Yy,Xy]],["GroupQueryAttention",[o0]],["HardSigmoid",[ey,Jg]],["InstanceNormalization",[u0]],["LayerNormalization",[l0]],["LeakyRelu",[jg,qi]],["Less",[_y]],["LessOrEqual",[by]],["Log",[uy]],["MatMul",[d0]],["MatMulNBits",[c0,p0]],["MaxPool",[_0,w0]],["Mul",[hy]],["MultiHeadAttention",[e0,Jy]],["Neg",[Qg]],["Not",[Kg]],["Pad",[f0]],["Pow",[my]],["QuickGelu",[ly,qi]],["Range",[S0]],["Reciprocal",[Zg]],["ReduceMin",[wg]],["ReduceMean",[hg]],["ReduceMax",[_g]],["ReduceSum",[vg]],["ReduceProd",[bg]],["ReduceL1",[mg]],["ReduceL2",[gg]],["ReduceLogSum",[xg]],["ReduceLogSumExp",[yg]],["ReduceSumSquare",[$g]],["Relu",[Yg]],["Resize",[C0,E0]],["RotaryEmbedding",[s0]],["ScatterND",[I0,T0]],["Sigmoid",[Xg]],["Sin",[ty]],["Sinh",[ry]],["Slice",[A0,z0]],["SkipLayerNormalization",[k0]],["Split",[r0,i0]],["Sqrt",[iy]],["Softmax",[O0,R0]],["Sub",[gy]],["Tan",[ny]],["Tanh",[sy]],["ThresholdedRelu",[oy,qi]],["Tile",[M0]],["Transpose",[rg,ig]],["Where",[B0]]])}),D0,H1=j(()=>{Rt(),_r(),_e(),D0=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){rr(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});n&&o.push({binding:o.length,resource:n});let u=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}a.setPipeline(e.computePipeline),a.setBindGroup(0,u),a.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ht(e.programInfo.name)}dispose(){}build(e,t){rr(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let n=tg(t,this.backend.device.limits),s=e.getShaderSource(n),a=`${i.join(`
`)}
${n.additionalImplementations}
${s}`,o=r.createShaderModule({code:a,label:e.name});Ee("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let u=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Ht(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let s=t*r*i,a=Math.ceil(Math.sqrt(s));if(a>n){if(a=Math.ceil(Math.cbrt(s)),a>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),P0={};vi(P0,{WebGpuBackend:()=>U0});var ah,oh,uh,U0,G1=j(()=>{Rt(),fe(),_r(),Zm(),t1(),V1(),H1(),ah=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let s=e[i].dims.length;r.push(`${n};${s}`);break}case"dims":{let s=e[i].dims.join(",");r.push(`${n};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},oh=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${ah(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},uh=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},U0=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=s=>t.features.has(s)&&r.push(s)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(i),this.adapterInfo=new uh(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Jm(this),this.programManager=new D0(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Qo(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;rr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let n=r[i],s=n.kernelId,a=this.kernels.get(s),o=a.kernelType,u=a.kernelName,d=n.programName,c=n.inputTensorViews,f=n.outputTensorViews,m=t[i*2],y=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let _=Number(m-this.queryTimeBase),w=Number(y-this.queryTimeBase);if(!Number.isSafeInteger(_)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(T=>({dims:T.dims,dataType:pr(T.dataType)})),outputsMetadata:f.map(T=>({dims:T.dims,dataType:pr(T.dataType)})),kernelId:s,kernelType:o,kernelName:u,programName:d,startTime:_,endTime:w});else{let T="";c.forEach((b,C)=>{T+=`input[${C}]: [${b.dims}] | ${pr(b.dataType)}, `});let v="";f.forEach((b,C)=>{v+=`output[${C}]: [${b.dims}] | ${pr(b.dataType)}, `}),console.log(`[profiling] kernel "${s}|${o}|${u}|${d}" ${T}${v}start time: ${_} ns, execution time: ${w-_} ns`)}es("GPU",`${d}::${m}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),Ht()}run(e,t,r,i,n,s){rr(e.name);let a=[];for(let b=0;b<t.length;++b){let C=t[b].data;if(C===0)continue;let S=this.gpuDataManager.get(C);if(!S)throw new Error(`no GPU data for input: ${C}`);a.push(S)}let{outputs:o,dispatchGroup:u,programUniforms:d}=e.getRunData(t),c=r.length===0?o.map((b,C)=>C):r;if(c.length!==o.length)throw new Error(`Output size ${c.length} must be equal to ${o.length}.`);let f=[],m=[];for(let b=0;b<o.length;++b){if(!Number.isInteger(c[b])||c[b]<-3||c[b]>=s)throw new Error(`Invalid output index: ${c[b]}`);if(c[b]===-3)continue;let C=c[b]===-1,S=c[b]===-2,I=C||S?n(o[b].dataType,o[b].dims):i(c[b],o[b].dataType,o[b].dims);if(f.push(I),I.data===0)continue;let A=this.gpuDataManager.get(I.data);if(!A)throw new Error(`no GPU data for output: ${I.data}`);if(C&&this.temporaryData.push(A),S){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(A)}m.push(A)}if(a.length!==t.length||m.length!==f.length){if(m.length===0)return Ht(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(d){let b=0,C=[];d.forEach(z=>{let x=typeof z.data=="number"?[z.data]:z.data;if(x.length===0)return;let W=z.type===10?2:4,G,ue;z.type===10?(ue=x.length>4?16:x.length>2?8:x.length*W,G=x.length>4?16:W*x.length):(ue=x.length<=2?x.length*W:16,G=16),b=Math.ceil(b/ue)*ue,C.push(b);let re=z.type===10?8:4;b+=x.length>4?Math.ceil(x.length/re)*G:x.length*W});let S=16;b=Math.ceil(b/S)*S;let I=new ArrayBuffer(b);d.forEach((z,x)=>{let W=C[x],G=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(I,W,G.length).set(G);else if(z.type===12)new Uint32Array(I,W,G.length).set(G);else if(z.type===10)new Uint16Array(I,W,G.length).set(G);else if(z.type===1)new Float32Array(I,W,G.length).set(G);else throw new Error(`Unsupported uniform type: ${pr(z.type)}`)});let A=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(A.buffer,0,I,0,b),this.gpuDataManager.release(A.id),y={offset:0,size:b,buffer:A.buffer}}let _=this.programManager.normalizeDispatchGroupSize(u),w=_[1]===1&&_[2]===1,T=oh(e,t,w),v=this.programManager.getArtifact(T);if(v||(v=this.programManager.build(e,_),this.programManager.setArtifact(T,v),Ee("info",()=>`[artifact] key: ${T}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let b=0;b<d.length;b++){let C=d[b],S=C.type,I=typeof C.data=="number"?1:C.data.length,[A,z]=v.uniformVariablesInfo[b];if(S!==A||I!==z)throw new Error(`Uniform variable ${b} mismatch: expect type ${A} with size ${z}, got type ${S} with size ${I} in program "${v.programInfo.name}".`)}}if(Ee("info",()=>`[ProgramManager] run "${e.name}" (key=${T}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run(v,a,m,_,y),Ht(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=N0.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,s=i.kernelName,a=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),Ee("info",()=>`[WebGPU] Start to run kernel "[${n}] ${s}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${s}" failed. ${d}`)),1}finally{u&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let s=n.get(t),a=this.gpuDataManager.registerExternalBuffer(r,i,s);return n.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await so(this,e,t);return Zo(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ee("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ee("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ee("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),s=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(s.computePipeline),n.setBindGroup(0,s.bindGroup),n.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),L0={};vi(L0,{init:()=>W0});var Pn,lh,W0,F1=j(()=>{fe(),_r(),ge(),e1(),Pn=class q0{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(B.size(t)!==B.size(this.dims))throw new Error("Invalid new shape");return new q0(this.module,this.dataType,this.data,t)}},lh=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,n=r/e.PTR_SIZE,s=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*n++,s));let a=Number(e.getValue(i*n++,s));this.outputCount=Number(e.getValue(i*n++,s)),this.customDataOffset=Number(e.getValue(i*n++,"*")),this.customDataSize=Number(e.getValue(i*n++,s));let o=[];for(let u=0;u<a;u++){let d=Number(e.getValue(i*n++,s)),c=Number(e.getValue(i*n++,"*")),f=Number(e.getValue(i*n++,s)),m=[];for(let y=0;y<f;y++)m.push(Number(e.getValue(i*n++,s)));o.push(new Pn(e,d,c,m))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(a=>typeof a=="number"?this.inputs[a]:a)??this.inputs,i=t?.outputs??[],n=(a,o,u)=>new Pn(this.module,o,this.output(a,u),u),s=(a,o)=>{let u=jr(a,o);if(!u)throw new Error(`Unsupported data type: ${a}`);let d=u>0?this.backend.gpuDataManager.create(u).id:0;return new Pn(this.module,a,d,o)};return this.backend.run(e,r,i,n,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,n=i===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*i);this.module.setValue(s,t.length,n);for(let a=0;a<t.length;a++)this.module.setValue(s+i*(a+1),t[a],n);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},W0=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(G1(),on(P0)).WebGpuBackend,a=new s;await a.initialize(r,i),n("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,u,d,c=!1)=>{if(c)Ee("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(d)}`),a.memcpy(Number(o),Number(u));else{Ee("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));a.upload(Number(u),f)}},async(o,u,d)=>{Ee("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${d}`),await a.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(o,u,d)=>a.createKernel(o,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>a.releaseKernel(o),(o,u,d,c)=>{Ee("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${u}`);let f=new lh(t,a,Number(u));return a.computeKernel(Number(o),f,c)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new Xm(r);n("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,o,u,d,c)=>s.ensureTensor(a,o,u,d,c),(a,o)=>{s.uploadTensor(a,o)},async(a,o)=>s.downloadTensor(a,o),(a,o)=>s.registerMLContext(a,o),!!r.trace])}}}),dh,ou,uu,Sr,ch,Wa,os,lu,du,qa,cu,pu,fu,V0=j(()=>{Rt(),Y$(),X$(),fe(),ii(),Go(),Fm(),dh=(e,t)=>{Ue()._OrtInit(e,t)!==0&&Me("Can't initialize onnxruntime.")},ou=async e=>{dh(e.wasm.numThreads,rs(e.logLevel))},uu=async(e,t)=>{Ue().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:n}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(F1(),on(L0)).init;t==="webgpu"&&await i("webgpu",Ue(),e,r),t==="webnn"&&await i("webnn",Ue(),e)}},Sr=new Map,ch=e=>{let t=Ue(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,n,n+i)!==0&&Me("Can't get session input/output count.");let s=i===4?"i32":"i64";return[Number(t.getValue(n,s)),Number(t.getValue(n+i,s))]}finally{t.stackRestore(r)}},Wa=(e,t)=>{let r=Ue(),i=r.stackSave(),n=0;try{let s=r.PTR_SIZE,a=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,a,a+s)!==0&&Me("Can't get session input/output metadata.");let o=Number(r.getValue(a,"*"));n=Number(r.getValue(a+s,"*"));let u=r.HEAP32[n/4];if(u===0)return[o,0];let d=r.HEAPU32[n/4+1],c=[];for(let f=0;f<d;f++){let m=Number(r.getValue(n+8+f*s,"*"));c.push(m!==0?r.UTF8ToString(m):Number(r.getValue(n+8+(f+d)*s,"*")))}return[o,u,c]}finally{r.stackRestore(i),n!==0&&r._OrtFree(n)}},os=e=>{let t=Ue(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},lu=async(e,t)=>{let r,i,n=Ue();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=os(e);let s=0,a=0,o=0,u=[],d=[],c=[];try{if([a,u]=await Gm(t),t?.externalData&&n.mountExternalData){let S=[];for(let I of t.externalData){let A=typeof I=="string"?I:I.path;S.push(Ko(typeof I=="string"?I:I.data).then(z=>{n.mountExternalData(A,z)}))}await Promise.all(S)}for(let S of t?.executionProviders??[])if((typeof S=="string"?S:S.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof S!="string"){let I=S,A=I?.context,z=I?.gpuDevice,x=I?.deviceType,W=I?.powerPreference;A?n.currentContext=A:z?n.currentContext=await n.webnnCreateMLContext(z):n.currentContext=await n.webnnCreateMLContext({deviceType:x,powerPreference:W})}else n.currentContext=await n.webnnCreateMLContext();break}s=await n._OrtCreateSession(r,i,a),n.webgpuOnCreateSession?.(s),s===0&&Me("Can't create a session."),n.jsepOnCreateSession?.(),n.currentContext&&(n.webnnRegisterMLContext(s,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[f,m]=ch(s),y=!!t?.enableGraphCapture,_=[],w=[],T=[],v=[],b=[];for(let S=0;S<f;S++){let[I,A,z]=Wa(s,S);I===0&&Me("Can't get an input name."),d.push(I);let x=n.UTF8ToString(I);_.push(x),T.push(A===0?{name:x,isTensor:!1}:{name:x,isTensor:!0,type:pr(A),shape:z})}for(let S=0;S<m;S++){let[I,A,z]=Wa(s,S+f);I===0&&Me("Can't get an output name."),c.push(I);let x=n.UTF8ToString(I);w.push(x),v.push(A===0?{name:x,isTensor:!1}:{name:x,isTensor:!0,type:pr(A),shape:z});{if(y&&t?.preferredOutputLocation===void 0){b.push("gpu-buffer");continue}let W=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[x]??"cpu",G=n.webnnIsGraphOutput;if(W==="cpu"&&G&&G(s,x)){b.push("ml-tensor-cpu-output");continue}if(W!=="cpu"&&W!=="cpu-pinned"&&W!=="gpu-buffer"&&W!=="ml-tensor")throw new Error(`Not supported preferred output location: ${W}.`);if(y&&W!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${W}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);b.push(W)}}let C=null;return b.some(S=>S==="gpu-buffer"||S==="ml-tensor"||S==="ml-tensor-cpu-output")&&(o=n._OrtCreateBinding(s),o===0&&Me("Can't create IO binding."),C={handle:o,outputPreferredLocations:b,outputPreferredLocationsEncoded:b.map(S=>S==="ml-tensor-cpu-output"?"ml-tensor":S).map(S=>io(S))}),Sr.set(s,[s,d,c,C,y,!1]),[s,_,w,T,v]}catch(f){throw d.forEach(m=>n._OrtFree(m)),c.forEach(m=>n._OrtFree(m)),o!==0&&n._OrtReleaseBinding(o)!==0&&Me("Can't release IO binding."),s!==0&&n._OrtReleaseSession(s)!==0&&Me("Can't release session."),f}finally{n._free(r),a!==0&&n._OrtReleaseSessionOptions(a)!==0&&Me("Can't release session options."),u.forEach(f=>n._free(f)),n.unmountExternalData?.()}},du=e=>{let t=Ue(),r=Sr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,s,a,o]=r;a&&(o&&t._OrtClearBoundOutputs(a.handle)!==0&&Me("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&Me("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),n.forEach(u=>t._OrtFree(u)),s.forEach(u=>t._OrtFree(u)),t._OrtReleaseSession(i)!==0&&Me("Can't release session."),Sr.delete(e)},qa=async(e,t,r,i,n,s,a=!1)=>{if(!e){t.push(0);return}let o=Ue(),u=o.PTR_SIZE,d=e[0],c=e[1],f=e[3],m=f,y,_;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let v=e[2].gpuBuffer;_=jr(Fr(d),c);{let b=o.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=b(i,s,v,_)}}else if(f==="ml-tensor"){let v=e[2].mlTensor;_=jr(Fr(d),c);let b=o.webnnRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=b(i,v,Fr(d),c)}else{let v=e[2];if(Array.isArray(v)){_=u*v.length,y=o._malloc(_),r.push(y);for(let b=0;b<v.length;b++){if(typeof v[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);o.setValue(y+b*u,Wt(v[b],r),"*")}}else{let b=o.webnnIsGraphInput,C=o.webnnIsGraphOutput;if(d!=="string"&&b&&C){let S=o.UTF8ToString(n);if(b(i,S)||C(i,S)){let I=Fr(d);_=jr(I,c),m="ml-tensor";let A=o.webnnCreateTemporaryTensor,z=o.webnnUploadTensor;if(!A||!z)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let x=await A(i,I,c);z(x,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),y=x}else _=v.byteLength,y=o._malloc(_),r.push(y),o.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),y)}else _=v.byteLength,y=o._malloc(_),r.push(y),o.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),y)}}let w=o.stackSave(),T=o.stackAlloc(4*c.length);try{c.forEach((b,C)=>o.setValue(T+C*u,b,u===4?"i32":"i64"));let v=o._OrtCreateTensor(Fr(d),y,_,T,c.length,io(m));v===0&&Me(`Can't create tensor for input/output. session=${i}, index=${s}.`),t.push(v)}finally{o.stackRestore(w)}},cu=async(e,t,r,i,n,s)=>{let a=Ue(),o=a.PTR_SIZE,u=Sr.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=u[0],c=u[1],f=u[2],m=u[3],y=u[4],_=u[5],w=t.length,T=i.length,v=0,b=[],C=[],S=[],I=[],A=[],z=a.stackSave(),x=a.stackAlloc(w*o),W=a.stackAlloc(w*o),G=a.stackAlloc(T*o),ue=a.stackAlloc(T*o);try{[v,b]=Hm(s),Zr("wasm prepareInputOutputTensor");for(let L=0;L<w;L++)await qa(r[L],C,I,e,c[t[L]],t[L],y);for(let L=0;L<T;L++)await qa(n[L],S,I,e,f[i[L]],w+i[L],y);Yr("wasm prepareInputOutputTensor");for(let L=0;L<w;L++)a.setValue(x+L*o,C[L],"*"),a.setValue(W+L*o,c[t[L]],"*");for(let L=0;L<T;L++)a.setValue(G+L*o,S[L],"*"),a.setValue(ue+L*o,f[i[L]],"*");if(m&&!_){let{handle:L,outputPreferredLocations:Q,outputPreferredLocationsEncoded:te}=m;if(c.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${c.length}).`);Zr("wasm bindInputsOutputs");for(let Z=0;Z<w;Z++){let le=t[Z];await a._OrtBindInput(L,c[le],C[Z])!==0&&Me(`Can't bind input[${Z}] for session=${e}.`)}for(let Z=0;Z<T;Z++){let le=i[Z];n[Z]?.[3]?(A.push(S[Z]),a._OrtBindOutput(L,f[le],S[Z],0)!==0&&Me(`Can't bind pre-allocated output[${Z}] for session=${e}.`)):a._OrtBindOutput(L,f[le],0,te[le])!==0&&Me(`Can't bind output[${Z}] to ${Q[Z]} for session=${e}.`)}Yr("wasm bindInputsOutputs"),Sr.set(e,[d,c,f,m,y,!0])}a.jsepOnRunStart?.(d),a.webnnOnRunStart?.(d);let re;m?re=await a._OrtRunWithBinding(d,m.handle,T,G,v):re=await a._OrtRun(d,W,x,w,ue,T,G,v),re!==0&&Me("failed to call OrtRun().");let ae=[],N=[];Zr("wasm ProcessOutputTensor");for(let L=0;L<T;L++){let Q=Number(a.getValue(G+L*o,"*"));if(Q===S[L]||A.includes(S[L])){ae.push(n[L]),Q!==S[L]&&a._OrtReleaseTensor(Q)!==0&&Me("Can't release tensor.");continue}let te=a.stackSave(),Z=a.stackAlloc(4*o),le=!1,Te,U=0;try{a._OrtGetTensorData(Q,Z,Z+o,Z+2*o,Z+3*o)!==0&&Me(`Can't access output tensor data on index ${L}.`);let K=o===4?"i32":"i64",pe=Number(a.getValue(Z,K));U=a.getValue(Z+o,"*");let $e=a.getValue(Z+o*2,"*"),at=Number(a.getValue(Z+o*3,K)),Ye=[];for(let Fe=0;Fe<at;Fe++)Ye.push(Number(a.getValue($e+Fe*o,K)));a._OrtFree($e)!==0&&Me("Can't free memory for tensor dims.");let rt=Ye.reduce((Fe,Re)=>Fe*Re,1);Te=pr(pe);let It=m?.outputPreferredLocations[i[L]];if(Te==="string"){if(It==="gpu-buffer"||It==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Fe=[];for(let Re=0;Re<rt;Re++){let ot=a.getValue(U+Re*o,"*"),k=a.getValue(U+(Re+1)*o,"*"),O=Re===rt-1?void 0:k-ot;Fe.push(a.UTF8ToString(ot,O))}ae.push([Te,Ye,Fe,"cpu"])}else if(It==="gpu-buffer"&&rt>0){let Fe=a.jsepGetBuffer;if(!Fe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Re=Fe(U),ot=jr(pe,rt);if(ot===void 0||!Fo(Te))throw new Error(`Unsupported data type: ${Te}`);le=!0,ae.push([Te,Ye,{gpuBuffer:Re,download:a.jsepCreateDownloader(Re,ot,Te),dispose:()=>{a._OrtReleaseTensor(Q)!==0&&Me("Can't release tensor.")}},"gpu-buffer"])}else if(It==="ml-tensor"&&rt>0){let Fe=a.webnnEnsureTensor,Re=a.webnnIsGraphInputOutputTypeSupported;if(!Fe||!Re)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(jr(pe,rt)===void 0||!jo(Te))throw new Error(`Unsupported data type: ${Te}`);if(!Re(e,Te,!1))throw new Error(`preferredLocation "ml-tensor" for ${Te} output is not supported by current WebNN Context.`);let ot=await Fe(e,U,pe,Ye,!1);le=!0,ae.push([Te,Ye,{mlTensor:ot,download:a.webnnCreateMLTensorDownloader(U,Te),dispose:()=>{a.webnnReleaseTensorId(U),a._OrtReleaseTensor(Q)}},"ml-tensor"])}else if(It==="ml-tensor-cpu-output"&&rt>0){let Fe=a.webnnCreateMLTensorDownloader(U,Te)(),Re=ae.length;le=!0,N.push((async()=>{let ot=[Re,await Fe];return a.webnnReleaseTensorId(U),a._OrtReleaseTensor(Q),ot})()),ae.push([Te,Ye,[],"cpu"])}else{let Fe=ws(Te),Re=new Fe(rt);new Uint8Array(Re.buffer,Re.byteOffset,Re.byteLength).set(a.HEAPU8.subarray(U,U+Re.byteLength)),ae.push([Te,Ye,Re,"cpu"])}}finally{a.stackRestore(te),Te==="string"&&U&&a._free(U),le||a._OrtReleaseTensor(Q)}}m&&!y&&(a._OrtClearBoundOutputs(m.handle)!==0&&Me("Can't clear bound outputs."),Sr.set(e,[d,c,f,m,y,!1]));for(let[L,Q]of await Promise.all(N))ae[L][2]=Q;return Yr("wasm ProcessOutputTensor"),ae}finally{a.webnnOnRunEnd?.(d),a.stackRestore(z),C.forEach(re=>a._OrtReleaseTensor(re)),S.forEach(re=>a._OrtReleaseTensor(re)),I.forEach(re=>a._free(re)),v!==0&&a._OrtReleaseRunOptions(v),b.forEach(re=>a._free(re))}},pu=e=>{let t=Ue(),r=Sr.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&Me("Can't get an profile file name."),t._OrtFree(n)},fu=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),Tr,kt,oi,Di,Pi,Un,Va,Ln,qr,Vr,ph,H0,G0,F0,j0,K0,Q0,Z0,Y0=j(()=>{Rt(),V0(),ii(),Vo(),Tr=()=>!!Ve.wasm.proxy&&typeof document<"u",oi=!1,Di=!1,Pi=!1,Ln=new Map,qr=(e,t)=>{let r=Ln.get(e);r?r.push(t):Ln.set(e,[t])},Vr=()=>{if(oi||!Di||Pi||!kt)throw new Error("worker not ready")},ph=e=>{switch(e.data.type){case"init-wasm":oi=!1,e.data.err?(Pi=!0,Va[1](e.data.err)):(Di=!0,Va[0]()),Un&&(URL.revokeObjectURL(Un),Un=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Ln.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},H0=async()=>{if(!Di){if(oi)throw new Error("multiple calls to 'initWasm()' detected.");if(Pi)throw new Error("previous call to 'initWasm()' failed.");if(oi=!0,Tr())return new Promise((e,t)=>{kt?.terminate(),qm().then(([r,i])=>{try{kt=i,kt.onerror=s=>t(s),kt.onmessage=ph,Va=[e,t];let n={type:"init-wasm",in:Ve};!n.in.wasm.wasmPaths&&(r||ro)&&(n.in.wasm.wasmPaths={wasm:new URL("/AIFighterPredictions/assets/ort-wasm-simd-threaded.jsep-6MnTkKum.wasm",import.meta.url).href}),kt.postMessage(n),Un=r}catch(n){t(n)}},t)});try{await Ho(Ve.wasm),await ou(Ve),Di=!0}catch(e){throw Pi=!0,e}finally{oi=!1}}},G0=async e=>{if(Tr())return Vr(),new Promise((t,r)=>{qr("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:Ve}};kt.postMessage(i)});await uu(Ve,e)},F0=async e=>Tr()?(Vr(),new Promise((t,r)=>{qr("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};kt.postMessage(i,[e.buffer])})):os(e),j0=async(e,t)=>{if(Tr()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Vr(),new Promise((r,i)=>{qr("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),kt.postMessage(n,s)})}else return lu(e,t)},K0=async e=>{if(Tr())return Vr(),new Promise((t,r)=>{qr("release",[t,r]);let i={type:"release",in:e};kt.postMessage(i)});du(e)},Q0=async(e,t,r,i,n,s)=>{if(Tr()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Vr(),new Promise((a,o)=>{qr("run",[a,o]);let u=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:i,options:s}};kt.postMessage(d,fu(u))})}else return cu(e,t,r,i,n,s)},Z0=async e=>{if(Tr())return Vr(),new Promise((t,r)=>{qr("end-profiling",[t,r]);let i={type:"end-profiling",in:e};kt.postMessage(i)});pu(e)}}),Ha,fh,X0,j1=j(()=>{Rt(),Y0(),fe(),qo(),Fm(),Ha=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},fh=e=>{switch(e[3]){case"cpu":return new qt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Fo(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return qt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!jo(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return qt.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},X0=class{async fetchModelAndCopyToWasmMemory(e){return F0(await Ko(e))}async loadModel(e,t){rr();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await j0(r,t),Ht()}async dispose(){return K0(this.sessionId)}async run(e,t,r){rr();let i=[],n=[];Object.entries(e).forEach(f=>{let m=f[0],y=f[1],_=this.inputNames.indexOf(m);if(_===-1)throw new Error(`invalid input '${m}'`);i.push(y),n.push(_)});let s=[],a=[];Object.entries(t).forEach(f=>{let m=f[0],y=f[1],_=this.outputNames.indexOf(m);if(_===-1)throw new Error(`invalid output '${m}'`);s.push(y),a.push(_)});let o=i.map((f,m)=>Ha(f,()=>`input "${this.inputNames[n[m]]}"`)),u=s.map((f,m)=>f?Ha(f,()=>`output "${this.outputNames[a[m]]}"`):null),d=await Q0(this.sessionId,n,o,a,u,r),c={};for(let f=0;f<d.length;f++)c[this.outputNames[a[f]]]=s[f]??fh(d[f]);return Ht(),c}startProfiling(){}endProfiling(){Z0(this.sessionId)}}}),J0={};vi(J0,{OnnxruntimeWebAssemblyBackend:()=>_o,initializeFlags:()=>yo,wasmBackend:()=>e_});var yo,_o,e_,K1=j(()=>{Rt(),Y0(),j1(),yo=()=>{(typeof Ve.wasm.initTimeout!="number"||Ve.wasm.initTimeout<0)&&(Ve.wasm.initTimeout=0);let e=Ve.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ve.wasm.simd=!1),typeof Ve.wasm.proxy!="boolean"&&(Ve.wasm.proxy=!1),typeof Ve.wasm.trace!="boolean"&&(Ve.wasm.trace=!1),typeof Ve.wasm.numThreads!="number"||!Number.isInteger(Ve.wasm.numThreads)||Ve.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ve.wasm.numThreads=1;else{let t=typeof navigator>"u"?R$("node:os").cpus().length:navigator.hardwareConcurrency;Ve.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},_o=class{async init(e){yo(),await H0(),await G0(e)}async createInferenceSessionHandler(e,t){let r=new X0;return await r.loadModel(e,t),r}},e_=new _o});Rt();Rt();Rt();var Q1="1.24.1";{let e=(K1(),on(J0)).wasmBackend;li("webgpu",e,5),li("webnn",e,5),li("cpu",e,10),li("wasm",e,10)}Object.defineProperty(Ve.versions,"web",{value:Q1,enumerable:!0});const Z1={UnitsToMeters:1,TickToSeconds:.5},Y1={Length:8,Width:8},X1={BlockActionCooldown:3,BlockLength:.5,AttackActionCooldown:2.5,AttackRange:1,Health:100,MoveDistance:1},ur={UnitRatios:Z1,ArenaSettings:Y1,FighterSettings:X1};async function J1(e,t){try{const r=1/ur.UnitRatios.TickToSeconds,i=1/ur.UnitRatios.UnitsToMeters,n=ur.FighterSettings.AttackActionCooldown*r,s=ur.FighterSettings.BlockActionCooldown*r,a=ur.ArenaSettings.Length*i,o=ur.ArenaSettings.Width*i,u=await Wo.create(`${e}.onnx`,{executionProviders:["wasm"]}),d=Float32Array.from([t.distance*i/Math.sqrt(a**2+o**2),t.angle/(Math.PI*2),t.playerHealth/100,t.AIHealth/100,Math.exp(-t.AI_timesinceHit*r/2),t.AI_Actioncooldown*r/Math.max(n,s),t.Player_ActionCooldown*r/Math.max(n,s)]);console.log("INPUT TENSOR: "+d);const c=new qt("float32",d,[1,7]);console.log(u.inputNames);const f={observation:c},m=await u.run(f),y=u.outputNames[0];console.log("outputs: ",u.outputNames);const _=m[y];if(!_)throw new Error(`Output name "${y}" not found in results.`);const w=_.data;return console.log("Output Probabilities:",w),w}catch(r){console.error(`Failed to run inference; ${r}`)}}const e2={class:"posSelectorContainer"},t2={class:"selectorButtons"},r2={class:"InputRow"},i2={style:{margin:"1.5rem"},class:"InputRow"},n2={class:"label bottom"},s2={class:"label top"},a2=Mo({__name:"PositionSelector",props:{width:{},height:{},aibotpos:{},playerpos:{}},emits:["update:ai","update:player"],setup(e,{emit:t}){const r=e,i=t,n=Ge({x:0,y:0}),s=Ge({x:0,y:0}),a=Ge("AI_Bot"),o=d=>{d.preventDefault();const f=d.currentTarget.getBoundingClientRect(),m=d.clientX-f.left,y=f.height-(d.clientY-f.top);let _=0;window.innerWidth<=850?_=50*window.innerWidth/100:_=30*window.innerWidth/100;const w={x:m/_*r.width,y:y/_*r.height};console.log("COORD POINT IS "+JSON.stringify(w)),a.value==="AI_Bot"?(i("update:ai",w),n.value={x:m-10,y:y-10}):(s.value={x:m-10,y:y-10},i("update:player",w))};function u(){let d=0,c=0;window.innerWidth<=850?(d=50*window.innerWidth/100,c=50*window.innerWidth/100):(d=30*window.innerWidth/100,c=30*window.innerWidth/100),n.value={x:r.aibotpos.x/r.width*c,y:r.aibotpos.y/r.height*d},s.value={x:r.playerpos.x/r.width*c,y:r.playerpos.y/r.height*d}}return Bo(()=>{window.addEventListener("resize",u),u()}),Qh(()=>{window.removeEventListener("resize",u)}),(d,c)=>(wt(),xt("section",e2,[c[8]||(c[8]=ve("h3",{style:{marginTop:"1rem"}},"Position",-1)),ve("div",t2,[ve("div",r2,[c[6]||(c[6]=ve("label",{for:"AI_Bot"},"AI Bot",-1)),ht(ve("input",{type:"radio",id:"AI_Bot",value:"AI_Bot","onUpdate:modelValue":c[0]||(c[0]=f=>a.value=f)},null,512),[[zd,a.value]]),c[7]||(c[7]=ve("label",{for:"Player"},"Player",-1)),ht(ve("input",{type:"radio",id:"Player",value:"Player","onUpdate:modelValue":c[1]||(c[1]=f=>a.value=f)},null,512),[[zd,a.value]])]),ve("div",i2,[a.value=="AI_Bot"?ht((wt(),xt("input",{key:0,type:"text","onUpdate:modelValue":c[2]||(c[2]=f=>e.aibotpos.x=f)},null,512)),[[cr,e.aibotpos.x]]):Ar("",!0),a.value=="AI_Bot"?ht((wt(),xt("input",{key:1,type:"text","onUpdate:modelValue":c[3]||(c[3]=f=>e.aibotpos.y=f)},null,512)),[[cr,e.aibotpos.y]]):Ar("",!0),a.value=="Player"?ht((wt(),xt("input",{key:2,type:"text","onUpdate:modelValue":c[4]||(c[4]=f=>e.playerpos.x=f)},null,512)),[[cr,e.playerpos.x]]):Ar("",!0),a.value=="Player"?ht((wt(),xt("input",{key:3,type:"text","onUpdate:modelValue":c[5]||(c[5]=f=>e.playerpos.y=f)},null,512)),[[cr,e.playerpos.y]]):Ar("",!0)])]),ve("div",{class:"box",onClick:o},[ve("div",{class:"dot ai",style:Xr({left:n.value.x+"px",bottom:n.value.y+"px"})},null,4),ve("div",{class:"dot player",style:Xr({left:s.value.x+"px",bottom:s.value.y+"px"})},null,4),ve("p",n2,Ji(r.width),1),ve("p",s2,Ji(r.height),1)])]))}}),hu=(e,t)=>{const r=e.__vccOpts||e;for(const[i,n]of t)r[i]=n;return r},o2=hu(a2,[["__scopeId","data-v-8b627799"]]),u2={class:"card",style:{display:"flex",flexDirection:"column",alignItems:"center"}},l2={class:"label bottom-label"},d2={class:"label top-label"},c2=Mo({__name:"PercentBargraph",props:{properties:{}},setup(e){const t=Ge(0),r=Ge("3rem");Bo(()=>{const n=()=>{const s=document.querySelector(".graphContainer");s&&(t.value=s.offsetHeight,r.value=`${Math.max(2,t.value*.07)}px`)};n(),window.addEventListener("resize",n)});function i(n){return t.value*n}return(n,s)=>(wt(),xt("div",u2,[s[2]||(s[2]=ve("h3",null,"Model Output Probabilities",-1)),ve("div",{class:"graphContainer",style:Xr({"--label-offset":r.value})},[(wt(!0),xt(Lt,null,mv(e.properties,a=>(wt(),xt("div",{class:"bar",style:Xr({height:i(a.num.value)+"px"})},[ve("p",l2,Ji(a.name),1),ve("p",d2,Ji((parseFloat(a.num.value.toFixed(2))*100).toFixed(2))+"%",1)],4))),256)),s[0]||(s[0]=ve("p",{class:"axisLabel",style:{top:"0"}},"100%",-1)),s[1]||(s[1]=ve("p",{class:"axisLabel",style:{bottom:"0"}},"0%",-1))],4)]))}}),p2=hu(c2,[["__scopeId","data-v-c01bcff5"]]),f2={id:"main"},h2={class:"stateInputs"},m2={key:0},g2={className:"InputRow"},y2=["max"],_2=["max"],w2={className:"InputRow"},b2=["max"],v2=["max"],$2={class:"PosAndGraph"},x2=Mo({__name:"App",setup(e){const t=Ge(ur.FighterSettings.Health),r=Ge(ur.FighterSettings.BlockActionCooldown),i=Ge(ur.FighterSettings.AttackActionCooldown),n=Ge("CautiousAggro_Reward_AggressionComplete"),s=Ge(void 0),a=Ge({x:4,y:6}),o=Ge({x:4,y:2}),u=Ge(0),d=Ge(0),c=Ge(100),f=Ge(100),m=Ge(0),y=Ge(0),_=Ge(0),w={name:"advance",num:Ge(0)},T={name:"retreat",num:Ge(0)},v={name:"strafe left",num:Ge(0)},b={name:"strafe right",num:Ge(0)},C={name:"attack",num:Ge(0)},S={name:"block",num:Ge(0)};return ji([a,o],()=>{const I={x:a.value.x-o.value.x,y:a.value.y-o.value.y};u.value=Math.sqrt(I.x*I.x+I.y*I.y),d.value=Math.atan2(I.y,I.x),console.log("Angle is "+d.value)}),ji([a,o,u,d,c,f,m,y,_,n],async()=>{const I=await J1(n.value,{distance:u.value,angle:d.value,playerHealth:c.value,AIHealth:f.value,AI_timesinceHit:_.value,AI_Actioncooldown:y.value,Player_ActionCooldown:m.value});if(!I)throw new Error("Failed to get output probabilities");w.num.value=I[0],T.num.value=I[1],v.num.value=I[2],b.num.value=I[3],C.num.value=I[4],S.num.value=I[5]}),(I,A)=>(wt(),xt("div",f2,[ve("form",null,[ve("div",h2,[A[19]||(A[19]=ve("label",{for:"ModelType",style:{marginBottom:"0.5rem"}},"Model Category",-1)),ht(ve("select",{"onUpdate:modelValue":A[0]||(A[0]=z=>s.value=z),name:"ModelType"},[...A[11]||(A[11]=[ve("option",{value:"Berserker"},"Berserker",-1),ve("option",{value:"CautiousAggro"},"CautiousAggro",-1),ve("option",{value:"Coward"},"Coward",-1)])],512),[[Cn,s.value]]),A[20]||(A[20]=ve("label",{for:"Selected model",style:{marginBottom:"0.5rem"}},"AI Model",-1)),s.value?Ar("",!0):(wt(),xt("p",m2,"Please Select a Model Type")),s.value=="Berserker"?ht((wt(),xt("select",{key:1,"onUpdate:modelValue":A[1]||(A[1]=z=>n.value=z),name:"SelectedModel"},[...A[12]||(A[12]=[ve("option",{value:"Beserker_Reward_AggressionComplete"},"Beserker_Reward_AggressionComplete",-1)])],512)),[[Cn,n.value]]):Ar("",!0),s.value=="CautiousAggro"?ht((wt(),xt("select",{key:2,"onUpdate:modelValue":A[2]||(A[2]=z=>n.value=z),name:"SelectedModel"},[...A[13]||(A[13]=[md('<option value="CautiousAggro_BasicComplete" data-v-36d7a208>CautiousAggro_BasicComplete</option><option value="CautiousAggro_Reward_AggressionComplete" data-v-36d7a208>CautiousAggro_Reward_AggressionComplete</option><option value="CautiousAggro_BasicCompletev2" data-v-36d7a208>CautiousAggro_BasicCompletev2</option><option value="CautiousAggro_Reward_AggressionCompletev2" data-v-36d7a208>CautiousAggro_Reward_AggressionCompletev2</option><option value="CautiousAggro_RewardChaseCompletev2" data-v-36d7a208>CautiousAggro_RewardChaseCompletev2</option><option value="CautiousAggro_BasicEntropyCompletev3" data-v-36d7a208>CautiousAggro_BasicEntropyCompletev3</option><option value="CautiousAggro_RewardAgressionEntropyCompletev3" data-v-36d7a208>CautiousAggro_RewardAgressionEntropyCompletev3</option><option value="CautiousAggro_RewardChaseEntropyCompletev3" data-v-36d7a208>CautiousAggro_RewardChaseEntropyCompletev3</option><option value="CautiousAggro_BasicEntropy64Complete" data-v-36d7a208>CautiousAggro_BasicEntropy64Complete</option><option value="CautiousAggro_RewardAgressionEntropy64Complete" data-v-36d7a208>CautiousAggro_RewardAgressionEntropy64Complete</option><option value="CautiousAggro_RewardChaseEntropy64Complete" data-v-36d7a208>CautiousAggro_RewardChaseEntropy64Complete</option>',11)])],512)),[[Cn,n.value]]):Ar("",!0),s.value=="Coward"?ht((wt(),xt("select",{key:3,"onUpdate:modelValue":A[3]||(A[3]=z=>n.value=z),name:"SelectedModel"},[...A[14]||(A[14]=[md('<option value="Coward_BasicComplete" data-v-36d7a208>Coward_BasicComplete</option><option value="Coward_Reward_ChaseComplete" data-v-36d7a208>Coward_Reward_ChaseComplete</option><option value="Coward_Reward_AggressionComplete" data-v-36d7a208>Coward_Reward_AggressionComplete</option><option value="Coward_Reward_ChaseCompletev2" data-v-36d7a208>Coward_Reward_ChaseCompletev2</option><option value="Coward_Reward_ChaseCompletev3" data-v-36d7a208>Coward_Reward_ChaseCompletev3</option><option value="Coward_Reward_AggressionCompletev3" data-v-36d7a208>Coward_Reward_AggressionCompletev3</option>',6)])],512)),[[Cn,n.value]]):Ar("",!0),ve("div",g2,[A[15]||(A[15]=ve("label",{for:"PlayerHealth"},"Player Health",-1)),ht(ve("input",{type:"number",max:t.value,min:"0",name:"PlayerHealth","onUpdate:modelValue":A[4]||(A[4]=z=>c.value=z)},null,8,y2),[[cr,c.value]]),A[16]||(A[16]=ve("label",{for:"PlayerCooldown"},"Player Cooldown",-1)),ht(ve("input",{type:"number",name:"PlayerCooldown",max:Math.max(r.value,i.value),min:"0","onUpdate:modelValue":A[5]||(A[5]=z=>m.value=z)},null,8,_2),[[cr,m.value]])]),ve("div",w2,[A[17]||(A[17]=ve("label",{for:"AIHealth"},"AI Health",-1)),ht(ve("input",{type:"number",name:"AIHealth",max:t.value,min:"0","onUpdate:modelValue":A[6]||(A[6]=z=>f.value=z)},null,8,b2),[[cr,f.value]]),A[18]||(A[18]=ve("label",{for:"AICooldown"},"AI Cooldown",-1)),ht(ve("input",{type:"number",name:"AICooldown",max:Math.max(r.value,i.value),min:"0","onUpdate:modelValue":A[7]||(A[7]=z=>y.value=z)},null,8,v2),[[cr,y.value]])]),A[21]||(A[21]=ve("label",{for:"AItsh",style:{marginTop:"1rem"}},"Time since AI last landed a hit (in seconds)",-1)),ht(ve("input",{type:"number",min:"0",name:"AItsh","onUpdate:modelValue":A[8]||(A[8]=z=>_.value=z),style:{marginBottom:"5rem"}},null,512),[[cr,_.value]])]),ve("div",$2,[Ot(o2,{aibotpos:a.value,playerpos:o.value,width:8,height:8,"onUpdate:ai":A[9]||(A[9]=z=>a.value=z),"onUpdate:player":A[10]||(A[10]=z=>o.value=z)},null,8,["aibotpos","playerpos"]),Ot(p2,{properties:[w,T,v,b,C,S]},null,8,["properties"])])])]))}}),S2=hu(x2,[["__scopeId","data-v-36d7a208"]]);C$(S2).mount("#app");
