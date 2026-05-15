import{ComponentContainer as E,Component as m}from"../component@0.6.9/index.e8255a26.js";import{Logger as M,setUserLogHandler as T,setLogLevel as U}from"../logger@0.4.2/index.45cba1fb.js";import{ErrorFactory as V,getDefaultAppConfig as O,deepEqual as S,isBrowser as J,isWebWorker as K,base64urlEncodeWithoutPadding as I,isIndexedDBAvailable as W,validateIndexedDBOpenable as q,FirebaseError as A}from"../util@1.10.0/index.65f27005.js";import{FirebaseError as Ze}from"../util@1.10.0/index.65f27005.js";import{openDB as G}from"../../idb@7.1.1/index.f2f94e4e.js";/**
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
 */class Q{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(X(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(e=>e).join(" ")}}function X(a){return a.getComponent()?.type==="VERSION"}const v="@firebase/app",C="0.10.12";/**
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
*/const h=new M("@firebase/app"),Y="@firebase/app-compat",Z="@firebase/analytics-compat",ee="@firebase/analytics",te="@firebase/app-check-compat",ae="@firebase/app-check",re="@firebase/auth",ne="@firebase/auth-compat",ie="@firebase/database",se="@firebase/data-connect",oe="@firebase/database-compat",ce="@firebase/functions",he="@firebase/functions-compat",le="@firebase/installations",pe="@firebase/installations-compat",fe="@firebase/messaging",de="@firebase/messaging-compat",ue="@firebase/performance",be="@firebase/performance-compat",ge="@firebase/remote-config",me="@firebase/remote-config-compat",ve="@firebase/storage",we="@firebase/storage-compat",_e="@firebase/firestore",Ce="@firebase/vertexai-preview",De="@firebase/firestore-compat",ye="firebase",Ee="10.14.0";/**
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
*/const d="[DEFAULT]",Oe={[v]:"fire-core",[Y]:"fire-core-compat",[ee]:"fire-analytics",[Z]:"fire-analytics-compat",[ae]:"fire-app-check",[te]:"fire-app-check-compat",[re]:"fire-auth",[ne]:"fire-auth-compat",[ie]:"fire-rtdb",[se]:"fire-data-connect",[oe]:"fire-rtdb-compat",[ce]:"fire-fn",[he]:"fire-fn-compat",[le]:"fire-iid",[pe]:"fire-iid-compat",[fe]:"fire-fcm",[de]:"fire-fcm-compat",[ue]:"fire-perf",[be]:"fire-perf-compat",[ge]:"fire-rc",[me]:"fire-rc-compat",[ve]:"fire-gcs",[we]:"fire-gcs-compat",[_e]:"fire-fst",[De]:"fire-fst-compat",[Ce]:"fire-vertex","fire-js":"fire-js",[ye]:"fire-js-all"};/**
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
*/const l=new Map,p=new Map,f=new Map;function D(a,e){try{a.container.addComponent(e)}catch(t){h.debug(`Component ${e.name} failed to register with FirebaseApp ${a.name}`,t)}}function Se(a,e){a.container.addOrOverwriteComponent(e)}function w(a){const e=a.name;if(f.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;f.set(e,a);for(const t of l.values())D(t,a);for(const t of p.values())D(t,a);return!0}function F(a,e){const t=a.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),a.container.getProvider(e)}function Ie(a,e,t=d){F(a,e).clearInstance(t)}function P(a){return a.options!==void 0}function Ae(a){return a.settings!==void 0}function Fe(){f.clear()}/**
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
*/const Pe={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},c=new V("app","Firebase",Pe);/**
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
*/class ${constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new m("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw c.create("app-deleted",{appName:this._name})}}/**
* @license
* Copyright 2023 Google LLC
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
*/class $e extends ${constructor(e,t,r,n){const i=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,s={name:r,automaticDataCollectionEnabled:i};if(e.apiKey!==void 0)super(e,s,n);else{const o=e;super(o.options,s,n)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:i},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,u(v,C,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){R(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw c.create("server-app-deleted")}}/**
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
*/const Ne=Ee;function N(a,e={}){let t=a;typeof e!="object"&&(e={name:e});const r=Object.assign({name:d,automaticDataCollectionEnabled:!1},e),n=r.name;if(typeof n!="string"||!n)throw c.create("bad-app-name",{appName:String(n)});if(t||(t=O()),!t)throw c.create("no-options");const i=l.get(n);if(i){if(S(t,i.options)&&S(r,i.config))return i;throw c.create("duplicate-app",{appName:n})}const s=new E(n);for(const g of f.values())s.addComponent(g);const o=new $(t,r,s);return l.set(n,o),o}function Re(a,e){if(J()&&!K())throw c.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;P(a)?t=a.options:t=a;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const n=_=>[..._].reduce((z,L)=>Math.imul(31,z)+L.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw c.create("finalization-registry-not-supported",{});const i=""+n(JSON.stringify(r)),s=p.get(i);if(s)return s.incRefCount(e.releaseOnDeref),s;const o=new E(i);for(const _ of f.values())o.addComponent(_);const g=new $e(t,e,i,o);return p.set(i,g),g}function xe(a=d){const e=l.get(a);if(!e&&a===d&&O())return N();if(!e)throw c.create("no-app",{appName:a});return e}function ke(){return Array.from(l.values())}async function R(a){let e=!1;const t=a.name;l.has(t)?(e=!0,l.delete(t)):p.has(t)&&a.decRefCount()<=0&&(p.delete(t),e=!0),e&&(await Promise.all(a.container.getProviders().map(r=>r.delete())),a.isDeleted=!0)}function u(a,e,t){var r;let n=(r=Oe[a])!==null&&r!==void 0?r:a;t&&(n+=`-${t}`);const i=n.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${n}" with version "${e}":`];i&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),h.warn(o.join(" "));return}w(new m(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}function je(a,e){if(a!==null&&typeof a!="function")throw c.create("invalid-log-argument");T(a,e)}function Be(a){U(a)}/**
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
*/const He="firebase-heartbeat-database",ze=1,b="firebase-heartbeat-store";let y=null;function x(){return y||(y=G(He,ze,{upgrade:(a,e)=>{switch(e){case 0:try{a.createObjectStore(b)}catch(t){console.warn(t)}}}}).catch(a=>{throw c.create("idb-open",{originalErrorMessage:a.message})})),y}async function Le(a){try{const e=(await x()).transaction(b),t=await e.objectStore(b).get(j(a));return await e.done,t}catch(e){if(e instanceof A)h.warn(e.message);else{const t=c.create("idb-get",{originalErrorMessage:e?.message});h.warn(t.message)}}}async function k(a,e){try{const t=(await x()).transaction(b,"readwrite");await t.objectStore(b).put(e,j(a)),await t.done}catch(t){if(t instanceof A)h.warn(t.message);else{const r=c.create("idb-set",{originalErrorMessage:t?.message});h.warn(r.message)}}}function j(a){return`${a.name}!${a.options.appId}`}/**
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
*/const Me=1024,Te=30*24*60*60*1e3;class Ue{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Je(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=B();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Te}),this._storage.overwrite(this._heartbeatsCache))}catch(r){h.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=B(),{heartbeatsToSend:r,unsentEntries:n}=Ve(this._heartbeatsCache.heartbeats),i=I(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return h.warn(t),""}}}function B(){return new Date().toISOString().substring(0,10)}function Ve(a,e=Me){const t=[];let r=a.slice();for(const n of a){const i=t.find(s=>s.agent===n.agent);if(i){if(i.dates.push(n.date),H(t)>e){i.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),H(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Je{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return W()?q().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Le(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return k(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return k(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function H(a){return I(JSON.stringify({version:2,heartbeats:a})).length}/**
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
*/function Ke(a){w(new m("platform-logger",e=>new Q(e),"PRIVATE")),w(new m("heartbeat",e=>new Ue(e),"PRIVATE")),u(v,C,a),u(v,C,"esm2017"),u("fire-js","")}Ke("");export{Ze as FirebaseError,Ne as SDK_VERSION,d as _DEFAULT_ENTRY_NAME,D as _addComponent,Se as _addOrOverwriteComponent,l as _apps,Fe as _clearComponents,f as _components,F as _getProvider,P as _isFirebaseApp,Ae as _isFirebaseServerApp,w as _registerComponent,Ie as _removeServiceInstance,p as _serverApps,R as deleteApp,xe as getApp,ke as getApps,N as initializeApp,Re as initializeServerApp,je as onLog,u as registerVersion,Be as setLogLevel};
