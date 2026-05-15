/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var s=function(t){this.element_=t,this.init()};window.MaterialSpinner=s,s.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},s.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},s.prototype.createLayer=function(t){var e=document.createElement("div");e.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),e.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+t);var a=document.createElement("div");a.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),a.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var _=document.createElement("div");_.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),i.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var n=[a,_,i],r=0;r<n.length;r++){var l=document.createElement("div");l.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),n[r].appendChild(l)}e.appendChild(a),e.appendChild(_),e.appendChild(i),this.element_.appendChild(e)},s.prototype.createLayer=s.prototype.createLayer,s.prototype.stop=function(){this.element_.classList.remove("is-active")},s.prototype.stop=s.prototype.stop,s.prototype.start=function(){this.element_.classList.add("is-active")},s.prototype.start=s.prototype.start,s.prototype.init=function(){if(this.element_){for(var t=1;t<=this.Constant_.MDL_SPINNER_LAYER_COUNT;t++)this.createLayer(t);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:s,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0})})();
