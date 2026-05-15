import{ErrorFactory as m,getGlobal as C,createSubscribe as I,deepExtend as d,contains as u}from"../util@1.10.0/index.65f27005.js";import{Component as L}from"../component@0.6.9/index.e8255a26.js";import*as s from"../app@0.10.12/index.6d8b0cd1.js";import{registerVersion as y,_addComponent as g,deleteApp as F,_DEFAULT_ENTRY_NAME as f,_addOrOverwriteComponent as P}from"../app@0.10.12/index.6d8b0cd1.js";import{Logger as w}from"../logger@0.4.2/index.45cba1fb.js";/**
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
 */class D{constructor(e,n){this._delegate=e,this.firebase=n,g(e,new L("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),F(this._delegate)))}_getService(e,n=f){var c;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((c=r.getComponent())===null||c===void 0?void 0:c.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:n})}_removeServiceInstance(e,n=f){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){g(this._delegate,e)}_addOrOverwriteComponent(e){P(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
*/const S={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},b=new m("app-compat","Firebase",S);/**
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
*/function O(a){const e={},n={__esModule:!0,initializeApp:E,app:r,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:N,removeApp:c,useAsService:A,modularAPIs:s}};n.default=n,Object.defineProperty(n,"apps",{get:v});function c(t){delete e[t]}function r(t){if(t=t||s._DEFAULT_ENTRY_NAME,!u(e,t))throw b.create("no-app",{appName:t});return e[t]}r.App=a;function E(t,o={}){const i=s.initializeApp(t,o);if(u(e,i.name))return e[i.name];const p=new a(i,n);return e[i.name]=p,p}function v(){return Object.keys(e).map(t=>e[t])}function N(t){const o=t.name,i=o.replace("-compat","");if(s._registerComponent(t)&&t.type==="PUBLIC"){const p=(l=r())=>{if(typeof l[i]!="function")throw b.create("invalid-app-argument",{appName:o});return l[i]()};t.serviceProps!==void 0&&d(p,t.serviceProps),n[i]=p,a.prototype[i]=function(...l){return this._getService.bind(this,o).apply(this,t.multipleInstances?l:[])}}return t.type==="PUBLIC"?n[i]:null}function A(t,o){return o==="serverAuth"?null:o}return n}/**
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
*/function h(){const a=O(D);a.INTERNAL=Object.assign(Object.assign({},a.INTERNAL),{createFirebaseNamespace:h,extendNamespace:e,createSubscribe:I,ErrorFactory:m,deepExtend:d});function e(n){d(a,n)}return a}const T=h();/**
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
*/const _=new w("@firebase/app-compat"),R="@firebase/app-compat",V="0.2.42";/**
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
*/function k(a){y(R,V,a)}/**
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
*/try{const a=C();if(a.firebase!==void 0){_.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=a.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&_.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const x=T;k();export{x as default};
