import{_getProvider as je,getApp as Ve,_registerComponent as Ge,registerVersion as ue,SDK_VERSION as We}from"../app@0.10.12/index.6d8b0cd1.js";import{FirebaseError as Xe,getModularInstance as E,getDefaultEmulatorHostnameAndPort as Ke,createMockUserToken as Ze}from"../util@1.10.0/index.65f27005.js";import{Component as Je}from"../component@0.6.9/index.e8255a26.js";/**
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
 */const le="firebasestorage.googleapis.com",he="storageBucket",Ye=2*60*1e3,Qe=10*60*1e3,et=1e3;/**
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
*/class _ extends Xe{constructor(t,n,s=0){super(J(t),`Firebase Storage: ${n} (${J(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return J(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var h;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(h||(h={}));function J(e){return"storage/"+e}function Y(){const e="An unknown error occurred, please check the error payload for server response.";return new _(h.UNKNOWN,e)}function tt(e){return new _(h.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function nt(e){return new _(h.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function st(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _(h.UNAUTHENTICATED,e)}function rt(){return new _(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ot(e){return new _(h.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function _e(){return new _(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function de(){return new _(h.CANCELED,"User canceled the upload/download.")}function it(e){return new _(h.INVALID_URL,"Invalid URL '"+e+"'.")}function at(e){return new _(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function ct(){return new _(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+he+"' property when initializing the app?")}function pe(){return new _(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ut(){return new _(h.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function lt(){return new _(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ht(e){return new _(h.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function j(e){return new _(h.INVALID_ARGUMENT,e)}function fe(){return new _(h.APP_DELETED,"The Firebase app was deleted.")}function ge(e){return new _(h.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function q(e,t){return new _(h.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function F(e){throw new _(h.INTERNAL_ERROR,"Internal error: "+e)}/**
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
*/class b{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=b.makeFromUrl(t,n)}catch{return new b(t,"")}if(s.path==="")return s;throw at(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(d){d.path.charAt(d.path.length-1)==="/"&&(d.path_=d.path_.slice(0,-1))}const i="(/(.*))?$",c=new RegExp("^gs://"+r+i,"i"),a={bucket:1,path:3};function u(d){d.path_=decodeURIComponent(d.path)}const l="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",T=new RegExp(`^https?://${p}/${l}/b/${r}/o${g}`,"i"),m={bucket:1,path:3},v=n===le?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",S=new RegExp(`^https?://${v}/${r}/${f}`,"i"),k=[{regex:c,indices:a,postModify:o},{regex:T,indices:m,postModify:u},{regex:S,indices:{bucket:1,path:2},postModify:u}];for(let d=0;d<k.length;d++){const U=k[d],B=U.regex.exec(t);if(B){const $=B[U.indices.bucket];let M=B[U.indices.path];M||(M=""),s=new b($,M),U.postModify(s);break}}if(s==null)throw it(t);return s}}class _t{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
*/function dt(e,t,n){let s=1,r=null,o=null,i=!1,c=0;function a(){return c===2}let u=!1;function l(...f){u||(u=!0,t.apply(null,f))}function p(f){r=setTimeout(()=>{r=null,e(T,a())},f)}function g(){o&&clearTimeout(o)}function T(f,...S){if(u){g();return}if(f){g(),l.call(null,f,...S);return}if(a()||i){g(),l.call(null,f,...S);return}s<64&&(s*=2);let k;c===1?(c=2,k=0):k=(s+Math.random())*1e3,p(k)}let m=!1;function v(f){m||(m=!0,g(),!u&&(r!==null?(f||(c=2),clearTimeout(r),p(0)):f||(c=1)))}return p(0),o=setTimeout(()=>{i=!0,v(!0)},n),v}function pt(e){e(!1)}/**
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
*/function ft(e){return e!==void 0}function gt(e){return typeof e=="function"}function mt(e){return typeof e=="object"&&!Array.isArray(e)}function V(e){return typeof e=="string"||e instanceof String}function me(e){return Q()&&e instanceof Blob}function Q(){return typeof Blob<"u"}function ee(e,t,n,s){if(s<t)throw j(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw j(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
*/function N(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function be(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var I;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(I||(I={}));/**
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
*/function Te(e,t){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,r=t.indexOf(e)!==-1;return n||s||r}/**
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
*/class bt{constructor(t,n,s,r,o,i,c,a,u,l,p,g=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=c,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,m)=>{this.resolve_=T,this.reject_=m,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new G(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=c=>{const a=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const c=o.getErrorCode()===I.NO_ERROR,a=o.getStatus();if(!c||Te(a,this.additionalRetryCodes_)&&this.retry){const l=o.getErrorCode()===I.ABORT;s(!1,new G(!1,null,l));return}const u=this.successCodes_.indexOf(a)!==-1;s(!0,new G(u,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(c,c.getResponse());ft(a)?o(a):o()}catch(a){i(a)}else if(c!==null){const a=Y();a.serverResponse=c.getErrorText(),this.errorCallback_?i(this.errorCallback_(c,a)):i(a)}else if(r.canceled){const a=this.appDelete_?fe():de();i(a)}else{const a=_e();i(a)}};this.canceled_?n(!1,new G(!1,null,!0)):this.backoffId_=dt(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&pt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class G{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Tt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Rt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function wt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function kt(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Et(e,t,n,s,r,o,i=!0){const c=be(e.urlParams),a=e.url+c,u=Object.assign({},e.headers);return wt(u,t),Tt(u,n),Rt(u,o),kt(u,s),new bt(a,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i)}/**
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
*/function vt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yt(...e){const t=vt();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(Q())return new Blob(e);throw new _(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Ot(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
*/function Ut(e){if(typeof atob>"u")throw ht("base-64");return atob(e)}/**
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
*/const y={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class te{constructor(t,n){this.data=t,this.contentType=n||null}}function ne(e,t){switch(e){case y.RAW:return new te(Re(t));case y.BASE64:case y.BASE64URL:return new te(we(e,t));case y.DATA_URL:return new te(At(t),xt(t))}throw Y()}function Re(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const r=s,o=e.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function Ct(e){let t;try{t=decodeURIComponent(e)}catch{throw q(y.DATA_URL,"Malformed data URL.")}return Re(t)}function we(e,t){switch(e){case y.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw q(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case y.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw q(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ut(t)}catch(r){throw r.message.includes("polyfill")?r:q(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class ke{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw q(y.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Nt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function At(e){const t=new ke(e);return t.base64?we(y.BASE64,t.rest):Ct(t.rest)}function xt(e){return new ke(e).contentType}function Nt(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
*/class x{constructor(t,n){let s=0,r="";me(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(me(this.data_)){const s=this.data_,r=Ot(s,t,n);return r===null?null:new x(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new x(s,!0)}}static getBlob(...t){if(Q()){const n=t.map(s=>s instanceof x?s.data_:s);return new x(yt.apply(null,n))}else{const n=t.map(i=>V(i)?ne(y.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const r=new Uint8Array(s);let o=0;return n.forEach(i=>{for(let c=0;c<i.length;c++)r[o++]=i[c]}),new x(r,!0)}}uploadData(){return this.data_}}/**
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
*/function se(e){let t;try{t=JSON.parse(e)}catch{return null}return mt(t)?t:null}/**
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
*/function St(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function It(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function Ee(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
*/function Pt(e,t){return t}class R{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||Pt}}let W=null;function Dt(e){return!V(e)||e.length<2?e:Ee(e)}function H(){if(W)return W;const e=[];e.push(new R("bucket")),e.push(new R("generation")),e.push(new R("metageneration")),e.push(new R("name","fullPath",!0));function t(o,i){return Dt(i)}const n=new R("name");n.xform=t,e.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new R("size");return r.xform=s,e.push(r),e.push(new R("timeCreated")),e.push(new R("updated")),e.push(new R("md5Hash",null,!0)),e.push(new R("cacheControl",null,!0)),e.push(new R("contentDisposition",null,!0)),e.push(new R("contentEncoding",null,!0)),e.push(new R("contentLanguage",null,!0)),e.push(new R("contentType",null,!0)),e.push(new R("metadata","customMetadata",!0)),W=e,W}function Lt(e,t){function n(){const s=e.bucket,r=e.fullPath,o=new b(s,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function Bt(e,t,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,t[i.server])}return Lt(s,e),s}function ve(e,t,n){const s=se(t);return s===null?null:Bt(e,s,n)}function Mt(e,t,n,s){const r=se(t);if(r===null||!V(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(c=>{const a=e.bucket,u=e.fullPath,l="/b/"+i(a)+"/o/"+i(u),p=N(l,n,s),g=be({alt:"media",token:c});return p+g})[0]}function re(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const o=t[r];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}/**
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
*/const ye="prefixes",Oe="items";function qt(e,t,n){const s={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[ye])for(const r of n[ye]){const o=r.replace(/\/$/,""),i=e._makeStorageReference(new b(t,o));s.prefixes.push(i)}if(n[Oe])for(const r of n[Oe]){const o=e._makeStorageReference(new b(t,r.name));s.items.push(o)}return s}function Ft(e,t,n){const s=se(n);return s===null?null:qt(e,t,s)}class C{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
*/function A(e){if(!e)throw Y()}function X(e,t){function n(s,r){const o=ve(e,r,t);return A(o!==null),o}return n}function Ht(e,t){function n(s,r){const o=Ft(e,t,r);return A(o!==null),o}return n}function zt(e,t){function n(s,r){const o=ve(e,r,t);return A(o!==null),Mt(o,r,e.host,e._protocol)}return n}function D(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=rt():r=st():n.getStatus()===402?r=nt(e.bucket):n.getStatus()===403?r=ot(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function z(e){const t=D(e);function n(s,r){let o=t(s,r);return s.getStatus()===404&&(o=tt(e.path)),o.serverResponse=r.serverResponse,o}return n}function Ue(e,t,n){const s=t.fullServerUrl(),r=N(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,c=new C(r,o,X(e,n),i);return c.errorHandler=z(t),c}function $t(e,t,n,s,r){const o={};t.isRoot?o.prefix="":o.prefix=t.path+"/",n.length>0&&(o.delimiter=n),s&&(o.pageToken=s),r&&(o.maxResults=r);const i=t.bucketOnlyServerUrl(),c=N(i,e.host,e._protocol),a="GET",u=e.maxOperationRetryTime,l=new C(c,a,Ht(e,t.bucket),u);return l.urlParams=o,l.errorHandler=D(t),l}function Ce(e,t,n){const s=t.fullServerUrl(),r=N(s,e.host,e._protocol)+"?alt=media",o="GET",i=e.maxOperationRetryTime,c=new C(r,o,(a,u)=>u,i);return c.errorHandler=z(t),n!==void 0&&(c.headers.Range=`bytes=0-${n}`,c.successCodes=[200,206]),c}function jt(e,t,n){const s=t.fullServerUrl(),r=N(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,c=new C(r,o,zt(e,n),i);return c.errorHandler=z(t),c}function Vt(e,t,n,s){const r=t.fullServerUrl(),o=N(r,e.host,e._protocol),i="PATCH",c=re(n,s),a={"Content-Type":"application/json; charset=utf-8"},u=e.maxOperationRetryTime,l=new C(o,i,X(e,s),u);return l.headers=a,l.body=c,l.errorHandler=z(t),l}function Gt(e,t){const n=t.fullServerUrl(),s=N(n,e.host,e._protocol),r="DELETE",o=e.maxOperationRetryTime;function i(a,u){}const c=new C(s,r,i,o);return c.successCodes=[200,204],c.errorHandler=z(t),c}function Wt(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Ae(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=Wt(null,t)),s}function xe(e,t,n,s,r){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function c(){let d="";for(let U=0;U<2;U++)d=d+Math.random().toString().slice(2);return d}const a=c();i["Content-Type"]="multipart/related; boundary="+a;const u=Ae(t,s,r),l=re(u,n),p="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+a+"--",T=x.getBlob(p,s,g);if(T===null)throw pe();const m={name:u.fullPath},v=N(o,e.host,e._protocol),f="POST",S=e.maxUploadRetryTime,k=new C(v,f,X(e,n),S);return k.urlParams=m,k.headers=i,k.body=T.uploadData(),k.errorHandler=D(t),k}class K{constructor(t,n,s,r){this.current=t,this.total=n,this.finalized=!!s,this.metadata=r||null}}function oe(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch{A(!1)}return A(!!n&&(t||["active"]).indexOf(n)!==-1),n}function Xt(e,t,n,s,r){const o=t.bucketOnlyServerUrl(),i=Ae(t,s,r),c={name:i.fullPath},a=N(o,e.host,e._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":i.contentType,"Content-Type":"application/json; charset=utf-8"},p=re(i,n),g=e.maxUploadRetryTime;function T(v){oe(v);let f;try{f=v.getResponseHeader("X-Goog-Upload-URL")}catch{A(!1)}return A(V(f)),f}const m=new C(a,u,T,g);return m.urlParams=c,m.headers=l,m.body=p,m.errorHandler=D(t),m}function Kt(e,t,n,s){const r={"X-Goog-Upload-Command":"query"};function o(u){const l=oe(u,["active","final"]);let p=null;try{p=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{A(!1)}p||A(!1);const g=Number(p);return A(!isNaN(g)),new K(g,s.size(),l==="final")}const i="POST",c=e.maxUploadRetryTime,a=new C(n,i,o,c);return a.headers=r,a.errorHandler=D(t),a}const Ne=256*1024;function Zt(e,t,n,s,r,o,i,c){const a=new K(0,0);if(i?(a.current=i.current,a.total=i.total):(a.current=0,a.total=s.size()),s.size()!==a.total)throw ut();const u=a.total-a.current;let l=u;r>0&&(l=Math.min(l,r));const p=a.current,g=p+l;let T="";l===0?T="finalize":u===l?T="upload, finalize":T="upload";const m={"X-Goog-Upload-Command":T,"X-Goog-Upload-Offset":`${a.current}`},v=s.slice(p,g);if(v===null)throw pe();function f(U,B){const $=oe(U,["active","final"]),M=a.current+l,$e=s.size();let Z;return $==="final"?Z=X(t,o)(U,B):Z=null,new K(M,$e,$==="final",Z)}const S="POST",k=t.maxUploadRetryTime,d=new C(n,S,f,k);return d.headers=m,d.body=v.uploadData(),d.progressCallback=c||null,d.errorHandler=D(e),d}/**
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
*/const Jt={STATE_CHANGED:"state_changed"},w={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ie(e){switch(e){case"running":case"pausing":case"canceling":return w.RUNNING;case"paused":return w.PAUSED;case"success":return w.SUCCESS;case"canceled":return w.CANCELED;case"error":return w.ERROR;default:return w.ERROR}}/**
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
*/class Yt{constructor(t,n,s){if(gt(t)||n!=null||s!=null)this.next=t,this.error=n??void 0,this.complete=s??void 0;else{const r=t;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
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
*/function L(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class ae{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=I.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=I.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=I.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw F("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw F("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw F("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw F("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw F("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Qt extends ae{initXhr(){this.xhr_.responseType="text"}}function O(){return new Qt}class en extends ae{initXhr(){this.xhr_.responseType="arraybuffer"}}function tn(){return new en}class nn extends ae{initXhr(){this.xhr_.responseType="blob"}}function sn(){return new nn}/**
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
*/class Se{constructor(t,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=s,this._mappings=H(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(h.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const o=this.isExponentialBackoffExpired();if(Te(r.status,[]))if(o)r=_e();else{this.sleepTime=Math.max(this.sleepTime*2,et),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(h.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,o)=>{this._resolve=r,this._reject=o,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return n=>this._updateProgress(t+n)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":t(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,n)=>{const s=Xt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,O,t,n);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((n,s)=>{const r=Kt(this._ref.storage,this._ref._location,t,this._blob),o=this._ref.storage._makeRequest(r,O,n,s);this._request=o,o.getPromise().then(i=>{i=i,this._request=void 0,this._updateProgress(i.current),this._needToFetchStatus=!1,i.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Ne*this._chunkMultiplier,n=new K(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,o)=>{let i;try{i=Zt(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const c=this._ref.storage._makeRequest(i,O,r,o,!1);this._request=c,c.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Ne*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,n)=>{const s=Ue(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,O,t,n);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,n)=>{const s=xe(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,O,t,n);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const n=this._transferred;this._transferred=t,this._transferred!==n&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=t,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=de(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=ie(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,n,s,r){const o=new Yt(n||void 0,s||void 0,r||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(t,n){return this._promise.then(t,n)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const n=this._observers.indexOf(t);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(ie(this._state)){case w.SUCCESS:L(this._resolve.bind(null,this.snapshot))();break;case w.CANCELED:case w.ERROR:const n=this._reject;L(n.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(ie(this._state)){case w.RUNNING:case w.PAUSED:t.next&&L(t.next.bind(t,this.snapshot))();break;case w.SUCCESS:t.complete&&L(t.complete.bind(t))();break;case w.CANCELED:case w.ERROR:t.error&&L(t.error.bind(t,this._error))();break;default:t.error&&L(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
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
*/class P{constructor(t,n){this._service=t,n instanceof b?this._location=n:this._location=b.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new P(t,n)}get root(){const t=new b(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ee(this._location.path)}get storage(){return this._service}get parent(){const t=St(this._location.path);if(t===null)return null;const n=new b(this._location.bucket,t);return new P(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw ge(t)}}function rn(e,t){e._throwIfRoot("getBytes");const n=Ce(e.storage,e._location,t);return e.storage.makeRequestWithTokens(n,tn).then(s=>t!==void 0?s.slice(0,t):s)}function on(e,t){e._throwIfRoot("getBlob");const n=Ce(e.storage,e._location,t);return e.storage.makeRequestWithTokens(n,sn).then(s=>t!==void 0?s.slice(0,t):s)}function Ie(e,t,n){e._throwIfRoot("uploadBytes");const s=xe(e.storage,e._location,H(),new x(t,!0),n);return e.storage.makeRequestWithTokens(s,O).then(r=>({metadata:r,ref:e}))}function an(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new Se(e,new x(t),n)}function cn(e,t,n=y.RAW,s){e._throwIfRoot("uploadString");const r=ne(n,t),o=Object.assign({},s);return o.contentType==null&&r.contentType!=null&&(o.contentType=r.contentType),Ie(e,r.data,o)}function un(e){const t={prefixes:[],items:[]};return Pe(e,t).then(()=>t)}async function Pe(e,t,n){const s=await De(e,{pageToken:n});t.prefixes.push(...s.prefixes),t.items.push(...s.items),s.nextPageToken!=null&&await Pe(e,t,s.nextPageToken)}function De(e,t){t!=null&&typeof t.maxResults=="number"&&ee("options.maxResults",1,1e3,t.maxResults);const n=t||{},s=$t(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(s,O)}function ln(e){e._throwIfRoot("getMetadata");const t=Ue(e.storage,e._location,H());return e.storage.makeRequestWithTokens(t,O)}function hn(e,t){e._throwIfRoot("updateMetadata");const n=Vt(e.storage,e._location,t,H());return e.storage.makeRequestWithTokens(n,O)}function _n(e){e._throwIfRoot("getDownloadURL");const t=jt(e.storage,e._location,H());return e.storage.makeRequestWithTokens(t,O).then(n=>{if(n===null)throw lt();return n})}function dn(e){e._throwIfRoot("deleteObject");const t=Gt(e.storage,e._location);return e.storage.makeRequestWithTokens(t,O)}function Le(e,t){const n=It(e._location.path,t),s=new b(e._location.bucket,n);return new P(e.storage,s)}/**
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
*/function pn(e){return/^[A-Za-z]+:\/\//.test(e)}function fn(e,t){return new P(e,t)}function Be(e,t){if(e instanceof ce){const n=e;if(n._bucket==null)throw ct();const s=new P(n,n._bucket);return t!=null?Be(s,t):s}else return t!==void 0?Le(e,t):e}function gn(e,t){if(t&&pn(t)){if(e instanceof ce)return fn(e,t);throw j("To use ref(service, url), the first argument must be a Storage instance.")}else return Be(e,t)}function Me(e,t){const n=t?.[he];return n==null?null:b.makeFromBucketSpec(n,e)}function mn(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:Ze(r,e.app.options.projectId))}class ce{constructor(t,n,s,r,o){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=le,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ye,this._maxUploadRetryTime=Qe,this._requests=new Set,r!=null?this._bucket=b.makeFromBucketSpec(r,this._host):this._bucket=Me(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=b.makeFromBucketSpec(this._url,t):this._bucket=Me(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ee("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ee("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new P(this,t)}_makeRequest(t,n,s,r,o=!0){if(this._deleted)return new _t(fe());{const i=Et(t,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const qe="@firebase/storage",Fe="0.13.2";/**
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
*/const He="storage";/**
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
*/function bn(e,t){return e=E(e),rn(e,t)}function Tn(e,t,n){return e=E(e),Ie(e,t,n)}function Rn(e,t,n,s){return e=E(e),cn(e,t,n,s)}function wn(e,t,n){return e=E(e),an(e,t,n)}function kn(e){return e=E(e),ln(e)}function En(e,t){return e=E(e),hn(e,t)}function vn(e,t){return e=E(e),De(e,t)}function yn(e){return e=E(e),un(e)}function On(e){return e=E(e),_n(e)}function Un(e){return e=E(e),dn(e)}function Cn(e,t){return e=E(e),gn(e,t)}function An(e,t){return Le(e,t)}function xn(e=Ve(),t){e=E(e);const n=je(e,He).getImmediate({identifier:t}),s=Ke("storage");return s&&ze(n,...s),n}function ze(e,t,n,s={}){mn(e,t,n,s)}/**
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
*/function Nn(e,t){return e=E(e),on(e,t)}function Sn(e,t){throw new Error("getStream() is only supported by NodeJS builds")}function In(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new ce(n,s,r,t,We)}function Pn(){Ge(new Je(He,In,"PUBLIC").setMultipleInstances(!0)),ue(qe,Fe,""),ue(qe,Fe,"esm2017")}Pn();export{_ as StorageError,h as StorageErrorCode,y as StringFormat,x as _FbsBlob,b as _Location,Jt as _TaskEvent,w as _TaskState,Se as _UploadTask,ne as _dataFromString,An as _getChild,j as _invalidArgument,ge as _invalidRootOperation,ze as connectStorageEmulator,Un as deleteObject,Nn as getBlob,bn as getBytes,On as getDownloadURL,kn as getMetadata,xn as getStorage,Sn as getStream,vn as list,yn as listAll,Cn as ref,En as updateMetadata,Tn as uploadBytes,wn as uploadBytesResumable,Rn as uploadString};
