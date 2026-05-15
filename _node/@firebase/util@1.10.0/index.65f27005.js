/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const x=function(t,e){if(!t)throw w(e)},w=function(t){return new Error("Firebase Database ("+_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const D=function(t){const e=[];let r=0;for(let o=0;o<t.length;o++){let n=t.charCodeAt(o);n<128?e[r++]=n:n<2048?(e[r++]=n>>6|192,e[r++]=n&63|128):(n&64512)===55296&&o+1<t.length&&(t.charCodeAt(o+1)&64512)===56320?(n=65536+((n&1023)<<10)+(t.charCodeAt(++o)&1023),e[r++]=n>>18|240,e[r++]=n>>12&63|128,e[r++]=n>>6&63|128,e[r++]=n&63|128):(e[r++]=n>>12|224,e[r++]=n>>6&63|128,e[r++]=n&63|128)}return e},F=function(t){const e=[];let r=0,o=0;for(;r<t.length;){const n=t[r++];if(n<128)e[o++]=String.fromCharCode(n);else if(n>191&&n<224){const s=t[r++];e[o++]=String.fromCharCode((n&31)<<6|s&63)}else if(n>239&&n<365){const s=t[r++],i=t[r++],c=t[r++],h=((n&7)<<18|(s&63)<<12|(i&63)<<6|c&63)-65536;e[o++]=String.fromCharCode(55296+(h>>10)),e[o++]=String.fromCharCode(56320+(h&1023))}else{const s=t[r++],i=t[r++];e[o++]=String.fromCharCode((n&15)<<12|(s&63)<<6|i&63)}}return e.join("")},v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let n=0;n<t.length;n+=3){const s=t[n],i=n+1<t.length,c=i?t[n+1]:0,h=n+2<t.length,u=h?t[n+2]:0,f=s>>2,a=(s&3)<<4|c>>4;let l=(c&15)<<2|u>>6,C=u&63;h||(C=64,i||(l=64)),o.push(r[f],r[a],r[l],r[C])}return o.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(D(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):F(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let n=0;n<t.length;){const s=r[t.charAt(n++)],i=n<t.length?r[t.charAt(n)]:0;++n;const c=n<t.length?r[t.charAt(n)]:64;++n;const h=n<t.length?r[t.charAt(n)]:64;if(++n,s==null||i==null||c==null||h==null)throw new T;const u=s<<2|i>>4;if(o.push(u),c!==64){const f=i<<4&240|c>>2;if(o.push(f),h!==64){const a=c<<6&192|h;o.push(a)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class T extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const N=function(t){const e=D(t);return v.encodeByteArray(e,!0)},m=function(t){return N(t).replace(/\./g,"")},y=function(t){try{return v.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function V(t){return S(void 0,t)}function S(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const r=e;return new Date(r.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const r in e)!e.hasOwnProperty(r)||!$(r)||(t[r]=S(t[r],e[r]));return t}function $(t){return t!=="__proto__"}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function k(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const z=()=>k().__FIREBASE_DEFAULTS__,J=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},H=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&y(t[1]);return e&&JSON.parse(e)},d=()=>{try{return z()||J()||H()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},M=t=>{var e,r;return(r=(e=d())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},G=t=>{const e=M(t);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const o=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),o]:[e.substring(0,r),o]},q=()=>{var t;return(t=d())===null||t===void 0?void 0:t.config},K=t=>{var e;return(e=d())===null||e===void 0?void 0:e[`_${t}`]};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class j{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,o)=>{r?this.reject(r):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,o))}}}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Q(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},o=e||"demo-project",n=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${o}`,aud:o,iat:n,exp:n+3600,auth_time:n,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[m(JSON.stringify(r)),m(JSON.stringify(i)),""].join(".")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function p(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function X(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())}function B(){var t;const e=(t=d())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Y(){return typeof window<"u"||I()}function I(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Z(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ee(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function te(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function re(){return p().indexOf("Electron/")>=0}function ne(){const t=p();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oe(){return p().indexOf("MSAppHost/")>=0}function se(){return _.NODE_CLIENT===!0||_.NODE_ADMIN===!0}function ie(){return!B()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ae(){try{return typeof indexedDB=="object"}catch{return!1}}function ce(){return new Promise((t,e)=>{try{let r=!0;const o="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(o);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(o),t(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{var s;e(((s=n.error)===null||s===void 0?void 0:s.message)||"")}}catch(r){e(r)}})}function he(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ue="FirebaseError";class E extends Error{constructor(e,r,o){super(r),this.code=e,this.customData=o,this.name=ue,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(e,r,o){this.service=e,this.serviceName=r,this.errors=o}create(e,...r){const o=r[0]||{},n=`${this.service}/${e}`,s=this.errors[e],i=s?fe(s,o):"Error",c=`${this.serviceName}: ${i} (${n}).`;return new E(n,c,o)}}function fe(t,e){return t.replace(le,(r,o)=>{const n=e[o];return n!=null?String(n):`<${o}?>`})}const le=/\{\$([^}]+)}/g;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function A(t){return JSON.parse(t)}function de(t){return JSON.stringify(t)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const b=function(t){let e={},r={},o={},n="";try{const s=t.split(".");e=A(y(s[0])||""),r=A(y(s[1])||""),n=s[2],o=r.d||{},delete r.d}catch{}return{header:e,claims:r,data:o,signature:n}},pe=function(t){const e=b(t).claims,r=Math.floor(new Date().getTime()/1e3);let o=0,n=0;return typeof e=="object"&&(e.hasOwnProperty("nbf")?o=e.nbf:e.hasOwnProperty("iat")&&(o=e.iat),e.hasOwnProperty("exp")?n=e.exp:n=o+86400),!!r&&!!o&&!!n&&r>=o&&r<=n},be=function(t){const e=b(t).claims;return typeof e=="object"&&e.hasOwnProperty("iat")?e.iat:null},_e=function(t){const e=b(t),r=e.claims;return!!r&&typeof r=="object"&&r.hasOwnProperty("iat")},ye=function(t){const e=b(t).claims;return typeof e=="object"&&e.admin===!0};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ge(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ee(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ve(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function me(t,e,r){const o={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=e.call(r,t[n],n,t));return o}function W(t,e){if(t===e)return!0;const r=Object.keys(t),o=Object.keys(e);for(const n of r){if(!o.includes(n))return!1;const s=t[n],i=e[n];if(L(s)&&L(i)){if(!W(s,i))return!1}else if(s!==i)return!1}for(const n of o)if(!r.includes(n))return!1;return!0}function L(t){return t!==null&&typeof t=="object"}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Se(t,e=2e3){const r=new j;return setTimeout(()=>r.reject("timeout!"),e),t.then(r.resolve,r.reject),r.promise}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ae(t){const e=[];for(const[r,o]of Object.entries(t))Array.isArray(o)?o.forEach(n=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(o));return e.length?"&"+e.join("&"):""}function Oe(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,n]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(n)}}),e}function Ce(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xe{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,r){r||(r=0);const o=this.W_;if(typeof e=="string")for(let a=0;a<16;a++)o[a]=e.charCodeAt(r)<<24|e.charCodeAt(r+1)<<16|e.charCodeAt(r+2)<<8|e.charCodeAt(r+3),r+=4;else for(let a=0;a<16;a++)o[a]=e[r]<<24|e[r+1]<<16|e[r+2]<<8|e[r+3],r+=4;for(let a=16;a<80;a++){const l=o[a-3]^o[a-8]^o[a-14]^o[a-16];o[a]=(l<<1|l>>>31)&4294967295}let n=this.chain_[0],s=this.chain_[1],i=this.chain_[2],c=this.chain_[3],h=this.chain_[4],u,f;for(let a=0;a<80;a++){a<40?a<20?(u=c^s&(i^c),f=1518500249):(u=s^i^c,f=1859775393):a<60?(u=s&i|c&(s|i),f=2400959708):(u=s^i^c,f=3395469782);const l=(n<<5|n>>>27)+u+h+f+o[a]&4294967295;h=c,c=i,i=(s<<30|s>>>2)&4294967295,s=n,n=l}this.chain_[0]=this.chain_[0]+n&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+i&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,r){if(e==null)return;r===void 0&&(r=e.length);const o=r-this.blockSize;let n=0;const s=this.buf_;let i=this.inbuf_;for(;n<r;){if(i===0)for(;n<=o;)this.compress_(e,n),n+=this.blockSize;if(typeof e=="string"){for(;n<r;)if(s[i]=e.charCodeAt(n),++i,++n,i===this.blockSize){this.compress_(s),i=0;break}}else for(;n<r;)if(s[i]=e[n],++i,++n,i===this.blockSize){this.compress_(s),i=0;break}}this.inbuf_=i,this.total_+=r}digest(){const e=[];let r=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let n=this.blockSize-1;n>=56;n--)this.buf_[n]=r&255,r/=256;this.compress_(this.buf_);let o=0;for(let n=0;n<5;n++)for(let s=24;s>=0;s-=8)e[o]=this.chain_[n]>>s&255,++o;return e}}function we(t,e){const r=new De(t,e);return r.subscribe.bind(r)}class De{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(o=>{this.error(o)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,o){let n;if(e===void 0&&r===void 0&&o===void 0)throw new Error("Missing Observer.");Ne(e,["next","error","complete"])?n=e:n={next:e,error:r,complete:o},n.next===void 0&&(n.next=O),n.error===void 0&&(n.error=O),n.complete===void 0&&(n.complete=O);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Te(t,e){return(...r)=>{Promise.resolve(!0).then(()=>{t(...r)}).catch(o=>{e&&e(o)})}}function Ne(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function O(){}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ke=function(t,e,r,o){let n;if(o<e?n="at least "+e:o>r&&(n=r===0?"none":"no more than "+r),n){const s=t+" failed: Was called with "+o+(o===1?" argument.":" arguments.")+" Expects "+n+".";throw new Error(s)}};function g(t,e){return`${t} failed: ${e} argument `}function Me(t,e,r){if(!(r&&!e)&&typeof e!="string")throw new Error(g(t,"namespace")+"must be a valid firebase namespace.")}function je(t,e,r,o){if(!(o&&!r)&&typeof r!="function")throw new Error(g(t,e)+"must be a valid function.")}function Be(t,e,r,o){if(!(o&&!r)&&(typeof r!="object"||r===null))throw new Error(g(t,e)+"must be a valid context object.")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ie=function(t){const e=[];let r=0;for(let o=0;o<t.length;o++){let n=t.charCodeAt(o);if(n>=55296&&n<=56319){const s=n-55296;o++,x(o<t.length,"Surrogate pair missing trail surrogate.");const i=t.charCodeAt(o)-56320;n=65536+(s<<10)+i}n<128?e[r++]=n:n<2048?(e[r++]=n>>6|192,e[r++]=n&63|128):n<65536?(e[r++]=n>>12|224,e[r++]=n>>6&63|128,e[r++]=n&63|128):(e[r++]=n>>18|240,e[r++]=n>>12&63|128,e[r++]=n>>6&63|128,e[r++]=n&63|128)}return e},Pe=function(t){let e=0;for(let r=0;r<t.length;r++){const o=t.charCodeAt(r);o<128?e++:o<2048?e+=2:o>=55296&&o<=56319?(e+=4,r++):e+=3}return e};/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const We=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})};/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Le=1e3,Re=2,R=4*60*60*1e3,U=.5;function Ue(t,e=Le,r=Re){const o=e*Math.pow(r,t),n=Math.round(U*o*(Math.random()-.5)*2);return Math.min(R,o+n)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Fe(t){return Number.isFinite(t)?t+Ve(t):`${t}`}function Ve(t){t=Math.abs(t);const e=t%100;if(e>=10&&e<=20)return"th";const r=t%10;return r===1?"st":r===2?"nd":r===3?"rd":"th"}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $e(t){return t&&t._delegate?t._delegate:t}export{_ as CONSTANTS,T as DecodeBase64StringError,j as Deferred,P as ErrorFactory,E as FirebaseError,R as MAX_VALUE_MILLIS,U as RANDOM_FACTOR,xe as Sha1,he as areCookiesEnabled,x as assert,w as assertionError,Te as async,v as base64,y as base64Decode,N as base64Encode,m as base64urlEncodeWithoutPadding,Ue as calculateBackoffMillis,ge as contains,Q as createMockUserToken,we as createSubscribe,b as decode,V as deepCopy,W as deepEqual,S as deepExtend,g as errorPrefix,Ce as extractQuerystring,q as getDefaultAppConfig,M as getDefaultEmulatorHost,G as getDefaultEmulatorHostnameAndPort,d as getDefaults,K as getExperimentalSetting,k as getGlobal,$e as getModularInstance,p as getUA,ye as isAdmin,Y as isBrowser,ee as isBrowserExtension,Z as isCloudflareWorker,re as isElectron,ve as isEmpty,ne as isIE,ae as isIndexedDBAvailable,X as isMobileCordova,B as isNode,se as isNodeSdk,te as isReactNative,ie as isSafari,oe as isUWP,_e as isValidFormat,pe as isValidTimestamp,I as isWebWorker,be as issuedAtTime,A as jsonEval,me as map,Fe as ordinal,Se as promiseWithTimeout,Ae as querystring,Oe as querystringDecode,Ee as safeGet,Pe as stringLength,Ie as stringToByteArray,de as stringify,We as uuidv4,ke as validateArgCount,je as validateCallback,Be as validateContextObject,ce as validateIndexedDBOpenable,Me as validateNamespace};
