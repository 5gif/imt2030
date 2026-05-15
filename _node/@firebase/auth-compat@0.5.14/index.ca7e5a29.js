import v from"../app-compat@0.2.42/index.8779274a.js";import*as t from"../auth@1.7.9/internal.763f5e54.js";import{Component as U}from"../component@0.6.9/index.e8255a26.js";import{FirebaseError as c,isBrowserExtension as F,isReactNative as C,isNode as N,isIndexedDBAvailable as P,getUA as I,isIE as G}from"../util@1.10.0/index.65f27005.js";var V="@firebase/auth-compat",B="0.5.14";/**
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
*/const x=1e3;function g(){var i;return((i=self?.location)===null||i===void 0?void 0:i.protocol)||null}function H(){return g()==="http:"||g()==="https:"}function k(i=I()){return!!((g()==="file:"||g()==="ionic:"||g()==="capacitor:")&&i.toLowerCase().match(/iphone|ipad|ipod|android/))}function K(){return C()||N()}function z(){return G()&&document?.documentMode===11}function Y(i=I()){return/Edge\/\d+/.test(i)}function J(i=I()){return z()||Y(i)}function S(){try{const i=self.localStorage,e=t._generateEventId();if(i)return i.setItem(e,"1"),i.removeItem(e),J()?P():!0}catch{return f()&&P()}return!1}function f(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function A(){return(H()||F()||k())&&!K()&&S()&&!f()}function O(){return k()&&typeof document<"u"}async function j(){return O()?new Promise(i=>{const e=setTimeout(()=>{i(!1)},x);document.addEventListener("deviceready",()=>{clearTimeout(e),i(!0)})}):!1}function q(){return typeof window<"u"?window:null}/**
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
*/const d={LOCAL:"local",NONE:"none",SESSION:"session"},p=t._assert,b="persistence";function Z(i,e){if(p(Object.values(d).includes(e),i,"invalid-persistence-type"),C()){p(e!==d.SESSION,i,"unsupported-persistence-type");return}if(N()){p(e===d.NONE,i,"unsupported-persistence-type");return}if(f()){p(e===d.NONE||e===d.LOCAL&&P(),i,"unsupported-persistence-type");return}p(e===d.NONE||S(),i,"unsupported-persistence-type")}async function R(i){await i._initializationPromise;const e=W(),r=t._persistenceKeyName(b,i.config.apiKey,i.name);e&&e.setItem(r,i._getPersistence())}function Q(i,e){const r=W();if(!r)return[];const n=t._persistenceKeyName(b,i,e);switch(r.getItem(n)){case d.NONE:return[t.inMemoryPersistence];case d.LOCAL:return[t.indexedDBLocalPersistence,t.browserSessionPersistence];case d.SESSION:return[t.browserSessionPersistence];default:return[]}}function W(){var i;try{return((i=q())===null||i===void 0?void 0:i.sessionStorage)||null}catch{return null}}/**
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
*/const X=t._assert;class l{constructor(){this.browserResolver=t._getInstance(t.browserPopupRedirectResolver),this.cordovaResolver=t._getInstance(t.cordovaPopupRedirectResolver),this.underlyingResolver=null,this._redirectPersistence=t.browserSessionPersistence,this._completeRedirectFn=t._getRedirectResult,this._overrideRedirectResult=t._overrideRedirectResult}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,r,n,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,r,n,s)}async _openRedirect(e,r,n,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,r,n,s)}_isIframeWebStorageSupported(e,r){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,r)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return O()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return X(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await j();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
*/function L(i){return i.unwrap()}function $(i){return i.wrapped()}/**
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
*/function ee(i){return T(i)}function te(i,e){var r;const n=(r=e.customData)===null||r===void 0?void 0:r._tokenResponse;if(e?.code==="auth/multi-factor-auth-required"){const s=e;s.resolver=new re(i,t.getMultiFactorResolver(i,e))}else if(n){const s=T(e),a=e;s&&(a.credential=s,a.tenantId=n.tenantId||void 0,a.email=n.email||void 0,a.phoneNumber=n.phoneNumber||void 0)}}function T(i){const{_tokenResponse:e}=i instanceof c?i.customData:i;if(!e)return null;if(!(i instanceof c)&&"temporaryProof"in e&&"phoneNumber"in e)return t.PhoneAuthProvider.credentialFromResult(i);const r=e.providerId;if(!r||r===t.ProviderId.PASSWORD)return null;let n;switch(r){case t.ProviderId.GOOGLE:n=t.GoogleAuthProvider;break;case t.ProviderId.FACEBOOK:n=t.FacebookAuthProvider;break;case t.ProviderId.GITHUB:n=t.GithubAuthProvider;break;case t.ProviderId.TWITTER:n=t.TwitterAuthProvider;break;default:const{oauthIdToken:s,oauthAccessToken:a,oauthTokenSecret:h,pendingToken:m,nonce:D}=e;return!a&&!h&&!s&&!m?null:m?r.startsWith("saml.")?t.SAMLAuthCredential._create(r,m):t.OAuthCredential._fromParams({providerId:r,signInMethod:r,pendingToken:m,idToken:s,accessToken:a}):new t.OAuthProvider(r).credential({idToken:s,accessToken:a,rawNonce:D})}return i instanceof c?n.credentialFromError(i):n.credentialFromResult(i)}function o(i,e){return e.catch(r=>{throw r instanceof c&&te(i,r),r}).then(r=>{const n=r.operationType,s=r.user;return{operationType:n,credential:ee(r),additionalUserInfo:t.getAdditionalUserInfo(r),user:u.getOrCreate(s)}})}async function y(i,e){const r=await e;return{verificationId:r.verificationId,confirm:n=>o(i,r.confirm(n))}}class re{constructor(e,r){this.resolver=r,this.auth=$(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return o(L(this.auth),this.resolver.resolveSignIn(e))}}/**
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
*/class u{constructor(e){this._delegate=e,this.multiFactor=t.multiFactor(e)}static getOrCreate(e){return u.USER_MAP.has(e)||u.USER_MAP.set(e,new u(e)),u.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return o(this.auth,t.linkWithCredential(this._delegate,e))}async linkWithPhoneNumber(e,r){return y(this.auth,t.linkWithPhoneNumber(this._delegate,e,r))}async linkWithPopup(e){return o(this.auth,t.linkWithPopup(this._delegate,e,l))}async linkWithRedirect(e){return await R(t._castAuth(this.auth)),t.linkWithRedirect(this._delegate,e,l)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return o(this.auth,t.reauthenticateWithCredential(this._delegate,e))}reauthenticateWithPhoneNumber(e,r){return y(this.auth,t.reauthenticateWithPhoneNumber(this._delegate,e,r))}reauthenticateWithPopup(e){return o(this.auth,t.reauthenticateWithPopup(this._delegate,e,l))}async reauthenticateWithRedirect(e){return await R(t._castAuth(this.auth)),t.reauthenticateWithRedirect(this._delegate,e,l)}sendEmailVerification(e){return t.sendEmailVerification(this._delegate,e)}async unlink(e){return await t.unlink(this._delegate,e),this}updateEmail(e){return t.updateEmail(this._delegate,e)}updatePassword(e){return t.updatePassword(this._delegate,e)}updatePhoneNumber(e){return t.updatePhoneNumber(this._delegate,e)}updateProfile(e){return t.updateProfile(this._delegate,e)}verifyBeforeUpdateEmail(e,r){return t.verifyBeforeUpdateEmail(this._delegate,e,r)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}u.USER_MAP=new WeakMap;/**
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
*/const _=t._assert;class E{constructor(e,r){if(this.app=e,r.isInitialized()){this._delegate=r.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:n}=e.options;_(n,"invalid-api-key",{appName:e.name}),_(n,"invalid-api-key",{appName:e.name});const s=typeof window<"u"?l:void 0;this._delegate=r.initialize({options:{persistence:ie(n,e.name),popupRedirectResolver:s}}),this._delegate._updateErrorMap(t.debugErrorMap),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?u.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,r){t.connectAuthEmulator(this._delegate,e,r)}applyActionCode(e){return t.applyActionCode(this._delegate,e)}checkActionCode(e){return t.checkActionCode(this._delegate,e)}confirmPasswordReset(e,r){return t.confirmPasswordReset(this._delegate,e,r)}async createUserWithEmailAndPassword(e,r){return o(this._delegate,t.createUserWithEmailAndPassword(this._delegate,e,r))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return t.fetchSignInMethodsForEmail(this._delegate,e)}isSignInWithEmailLink(e){return t.isSignInWithEmailLink(this._delegate,e)}async getRedirectResult(){_(A(),this._delegate,"operation-not-supported-in-this-environment");const e=await t.getRedirectResult(this._delegate,l);return e?o(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){t.addFrameworkForLogging(this._delegate,e)}onAuthStateChanged(e,r,n){const{next:s,error:a,complete:h}=M(e,r,n);return this._delegate.onAuthStateChanged(s,a,h)}onIdTokenChanged(e,r,n){const{next:s,error:a,complete:h}=M(e,r,n);return this._delegate.onIdTokenChanged(s,a,h)}sendSignInLinkToEmail(e,r){return t.sendSignInLinkToEmail(this._delegate,e,r)}sendPasswordResetEmail(e,r){return t.sendPasswordResetEmail(this._delegate,e,r||void 0)}async setPersistence(e){Z(this._delegate,e);let r;switch(e){case d.SESSION:r=t.browserSessionPersistence;break;case d.LOCAL:r=await t._getInstance(t.indexedDBLocalPersistence)._isAvailable()?t.indexedDBLocalPersistence:t.browserLocalPersistence;break;case d.NONE:r=t.inMemoryPersistence;break;default:return t._fail("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(r)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return o(this._delegate,t.signInAnonymously(this._delegate))}signInWithCredential(e){return o(this._delegate,t.signInWithCredential(this._delegate,e))}signInWithCustomToken(e){return o(this._delegate,t.signInWithCustomToken(this._delegate,e))}signInWithEmailAndPassword(e,r){return o(this._delegate,t.signInWithEmailAndPassword(this._delegate,e,r))}signInWithEmailLink(e,r){return o(this._delegate,t.signInWithEmailLink(this._delegate,e,r))}signInWithPhoneNumber(e,r){return y(this._delegate,t.signInWithPhoneNumber(this._delegate,e,r))}async signInWithPopup(e){return _(A(),this._delegate,"operation-not-supported-in-this-environment"),o(this._delegate,t.signInWithPopup(this._delegate,e,l))}async signInWithRedirect(e){return _(A(),this._delegate,"operation-not-supported-in-this-environment"),await R(this._delegate),t.signInWithRedirect(this._delegate,e,l)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return t.verifyPasswordResetCode(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}E.Persistence=d;function M(i,e,r){let n=i;typeof i!="function"&&({next:n,error:e,complete:r}=i);const s=n;return{next:a=>s(a&&u.getOrCreate(a)),error:e,complete:r}}function ie(i,e){const r=Q(i,e);if(typeof self<"u"&&!r.includes(t.indexedDBLocalPersistence)&&r.push(t.indexedDBLocalPersistence),typeof window<"u")for(const n of[t.browserLocalPersistence,t.browserSessionPersistence])r.includes(n)||r.push(n);return r.includes(t.inMemoryPersistence)||r.push(t.inMemoryPersistence),r}/**
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
*/class w{constructor(){this.providerId="phone",this._delegate=new t.PhoneAuthProvider(L(v.auth()))}static credential(e,r){return t.PhoneAuthProvider.credential(e,r)}verifyPhoneNumber(e,r){return this._delegate.verifyPhoneNumber(e,r)}unwrap(){return this._delegate}}w.PHONE_SIGN_IN_METHOD=t.PhoneAuthProvider.PHONE_SIGN_IN_METHOD,w.PROVIDER_ID=t.PhoneAuthProvider.PROVIDER_ID;/**
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
*/const ne=t._assert;class se{constructor(e,r,n=v.app()){var s;ne((s=n.options)===null||s===void 0?void 0:s.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new t.RecaptchaVerifier(n.auth(),e,r),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
*/const ae="auth-compat";function oe(i){i.INTERNAL.registerComponent(new U(ae,e=>{const r=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new E(r,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:t.ActionCodeOperation.EMAIL_SIGNIN,PASSWORD_RESET:t.ActionCodeOperation.PASSWORD_RESET,RECOVER_EMAIL:t.ActionCodeOperation.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:t.ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:t.ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:t.ActionCodeOperation.VERIFY_EMAIL}},EmailAuthProvider:t.EmailAuthProvider,FacebookAuthProvider:t.FacebookAuthProvider,GithubAuthProvider:t.GithubAuthProvider,GoogleAuthProvider:t.GoogleAuthProvider,OAuthProvider:t.OAuthProvider,SAMLAuthProvider:t.SAMLAuthProvider,PhoneAuthProvider:w,PhoneMultiFactorGenerator:t.PhoneMultiFactorGenerator,RecaptchaVerifier:se,TwitterAuthProvider:t.TwitterAuthProvider,Auth:E,AuthCredential:t.AuthCredential,Error:c}).setInstantiationMode("LAZY").setMultipleInstances(!1)),i.registerVersion(V,B)}oe(v);
