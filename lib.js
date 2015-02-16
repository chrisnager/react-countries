/**
 * React (with addons) v0.12.2
 *
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.React=e()}}(function(){return function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return o(n?n:e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t){"use strict";var n=e("./LinkedStateMixin"),r=e("./React"),o=e("./ReactComponentWithPureRenderMixin"),i=e("./ReactCSSTransitionGroup"),a=e("./ReactTransitionGroup"),s=e("./ReactUpdates"),u=e("./cx"),c=e("./cloneWithProps"),l=e("./update");r.addons={CSSTransitionGroup:i,LinkedStateMixin:n,PureRenderMixin:o,TransitionGroup:a,batchedUpdates:s.batchedUpdates,classSet:u,cloneWithProps:c,update:l},t.exports=r},{"./LinkedStateMixin":25,"./React":31,"./ReactCSSTransitionGroup":34,"./ReactComponentWithPureRenderMixin":39,"./ReactTransitionGroup":87,"./ReactUpdates":88,"./cloneWithProps":110,"./cx":115,"./update":154}],2:[function(e,t){"use strict";var n=e("./focusNode"),r={componentDidMount:function(){this.props.autoFocus&&n(this.getDOMNode())}};t.exports=r},{"./focusNode":122}],3:[function(e,t){"use strict";function n(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function r(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}var o=e("./EventConstants"),i=e("./EventPropagators"),a=e("./ExecutionEnvironment"),s=e("./SyntheticInputEvent"),u=e("./keyOf"),c=a.canUseDOM&&"TextEvent"in window&&!("documentMode"in document||n()),l=32,p=String.fromCharCode(l),d=o.topLevelTypes,f={beforeInput:{phasedRegistrationNames:{bubbled:u({onBeforeInput:null}),captured:u({onBeforeInputCapture:null})},dependencies:[d.topCompositionEnd,d.topKeyPress,d.topTextInput,d.topPaste]}},h=null,m=!1,v={eventTypes:f,extractEvents:function(e,t,n,o){var a;if(c)switch(e){case d.topKeyPress:var u=o.which;if(u!==l)return;m=!0,a=p;break;case d.topTextInput:if(a=o.data,a===p&&m)return;break;default:return}else{switch(e){case d.topPaste:h=null;break;case d.topKeyPress:o.which&&!r(o)&&(h=String.fromCharCode(o.which));break;case d.topCompositionEnd:h=o.data}if(null===h)return;a=h}if(a){var v=s.getPooled(f.beforeInput,n,o);return v.data=a,h=null,i.accumulateTwoPhaseDispatches(v),v}}};t.exports=v},{"./EventConstants":17,"./EventPropagators":22,"./ExecutionEnvironment":23,"./SyntheticInputEvent":98,"./keyOf":144}],4:[function(e,t){var n=e("./invariant"),r={addClass:function(e,t){return n(!/\s/.test(t)),t&&(e.classList?e.classList.add(t):r.hasClass(e,t)||(e.className=e.className+" "+t)),e},removeClass:function(e,t){return n(!/\s/.test(t)),t&&(e.classList?e.classList.remove(t):r.hasClass(e,t)&&(e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,""))),e},conditionClass:function(e,t,n){return(n?r.addClass:r.removeClass)(e,t)},hasClass:function(e,t){return n(!/\s/.test(t)),e.classList?!!t&&e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}};t.exports=r},{"./invariant":137}],5:[function(e,t){"use strict";function n(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var r={columnCount:!0,flex:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeOpacity:!0},o=["Webkit","ms","Moz","O"];Object.keys(r).forEach(function(e){o.forEach(function(t){r[n(t,e)]=r[e]})});var i={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},a={isUnitlessNumber:r,shorthandPropertyExpansions:i};t.exports=a},{}],6:[function(e,t){"use strict";var n=e("./CSSProperty"),r=e("./ExecutionEnvironment"),o=(e("./camelizeStyleName"),e("./dangerousStyleValue")),i=e("./hyphenateStyleName"),a=e("./memoizeStringOnly"),s=(e("./warning"),a(function(e){return i(e)})),u="cssFloat";r.canUseDOM&&void 0===document.documentElement.style.cssFloat&&(u="styleFloat");var c={createMarkupForStyles:function(e){var t="";for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];null!=r&&(t+=s(n)+":",t+=o(n,r)+";")}return t||null},setValueForStyles:function(e,t){var r=e.style;for(var i in t)if(t.hasOwnProperty(i)){var a=o(i,t[i]);if("float"===i&&(i=u),a)r[i]=a;else{var s=n.shorthandPropertyExpansions[i];if(s)for(var c in s)r[c]="";else r[i]=""}}}};t.exports=c},{"./CSSProperty":5,"./ExecutionEnvironment":23,"./camelizeStyleName":109,"./dangerousStyleValue":116,"./hyphenateStyleName":135,"./memoizeStringOnly":146,"./warning":155}],7:[function(e,t){"use strict";function n(){this._callbacks=null,this._contexts=null}var r=e("./PooledClass"),o=e("./Object.assign"),i=e("./invariant");o(n.prototype,{enqueue:function(e,t){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(e),this._contexts.push(t)},notifyAll:function(){var e=this._callbacks,t=this._contexts;if(e){i(e.length===t.length),this._callbacks=null,this._contexts=null;for(var n=0,r=e.length;r>n;n++)e[n].call(t[n]);e.length=0,t.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),r.addPoolingTo(n),t.exports=n},{"./Object.assign":29,"./PooledClass":30,"./invariant":137}],8:[function(e,t){"use strict";function n(e){return"SELECT"===e.nodeName||"INPUT"===e.nodeName&&"file"===e.type}function r(e){var t=M.getPooled(P.change,w,e);E.accumulateTwoPhaseDispatches(t),R.batchedUpdates(o,t)}function o(e){g.enqueueEvents(e),g.processEventQueue()}function i(e,t){T=e,w=t,T.attachEvent("onchange",r)}function a(){T&&(T.detachEvent("onchange",r),T=null,w=null)}function s(e,t,n){return e===x.topChange?n:void 0}function u(e,t,n){e===x.topFocus?(a(),i(t,n)):e===x.topBlur&&a()}function c(e,t){T=e,w=t,_=e.value,S=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(T,"value",k),T.attachEvent("onpropertychange",p)}function l(){T&&(delete T.value,T.detachEvent("onpropertychange",p),T=null,w=null,_=null,S=null)}function p(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==_&&(_=t,r(e))}}function d(e,t,n){return e===x.topInput?n:void 0}function f(e,t,n){e===x.topFocus?(l(),c(t,n)):e===x.topBlur&&l()}function h(e){return e!==x.topSelectionChange&&e!==x.topKeyUp&&e!==x.topKeyDown||!T||T.value===_?void 0:(_=T.value,w)}function m(e){return"INPUT"===e.nodeName&&("checkbox"===e.type||"radio"===e.type)}function v(e,t,n){return e===x.topClick?n:void 0}var y=e("./EventConstants"),g=e("./EventPluginHub"),E=e("./EventPropagators"),C=e("./ExecutionEnvironment"),R=e("./ReactUpdates"),M=e("./SyntheticEvent"),b=e("./isEventSupported"),O=e("./isTextInputElement"),D=e("./keyOf"),x=y.topLevelTypes,P={change:{phasedRegistrationNames:{bubbled:D({onChange:null}),captured:D({onChangeCapture:null})},dependencies:[x.topBlur,x.topChange,x.topClick,x.topFocus,x.topInput,x.topKeyDown,x.topKeyUp,x.topSelectionChange]}},T=null,w=null,_=null,S=null,N=!1;C.canUseDOM&&(N=b("change")&&(!("documentMode"in document)||document.documentMode>8));var I=!1;C.canUseDOM&&(I=b("input")&&(!("documentMode"in document)||document.documentMode>9));var k={get:function(){return S.get.call(this)},set:function(e){_=""+e,S.set.call(this,e)}},A={eventTypes:P,extractEvents:function(e,t,r,o){var i,a;if(n(t)?N?i=s:a=u:O(t)?I?i=d:(i=h,a=f):m(t)&&(i=v),i){var c=i(e,t,r);if(c){var l=M.getPooled(P.change,c,o);return E.accumulateTwoPhaseDispatches(l),l}}a&&a(e,t,r)}};t.exports=A},{"./EventConstants":17,"./EventPluginHub":19,"./EventPropagators":22,"./ExecutionEnvironment":23,"./ReactUpdates":88,"./SyntheticEvent":96,"./isEventSupported":138,"./isTextInputElement":140,"./keyOf":144}],9:[function(e,t){"use strict";var n=0,r={createReactRootIndex:function(){return n++}};t.exports=r},{}],10:[function(e,t){"use strict";function n(e){switch(e){case y.topCompositionStart:return E.compositionStart;case y.topCompositionEnd:return E.compositionEnd;case y.topCompositionUpdate:return E.compositionUpdate}}function r(e,t){return e===y.topKeyDown&&t.keyCode===h}function o(e,t){switch(e){case y.topKeyUp:return-1!==f.indexOf(t.keyCode);case y.topKeyDown:return t.keyCode!==h;case y.topKeyPress:case y.topMouseDown:case y.topBlur:return!0;default:return!1}}function i(e){this.root=e,this.startSelection=c.getSelection(e),this.startValue=this.getText()}var a=e("./EventConstants"),s=e("./EventPropagators"),u=e("./ExecutionEnvironment"),c=e("./ReactInputSelection"),l=e("./SyntheticCompositionEvent"),p=e("./getTextContentAccessor"),d=e("./keyOf"),f=[9,13,27,32],h=229,m=u.canUseDOM&&"CompositionEvent"in window,v=!m||"documentMode"in document&&document.documentMode>8&&document.documentMode<=11,y=a.topLevelTypes,g=null,E={compositionEnd:{phasedRegistrationNames:{bubbled:d({onCompositionEnd:null}),captured:d({onCompositionEndCapture:null})},dependencies:[y.topBlur,y.topCompositionEnd,y.topKeyDown,y.topKeyPress,y.topKeyUp,y.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:d({onCompositionStart:null}),captured:d({onCompositionStartCapture:null})},dependencies:[y.topBlur,y.topCompositionStart,y.topKeyDown,y.topKeyPress,y.topKeyUp,y.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:d({onCompositionUpdate:null}),captured:d({onCompositionUpdateCapture:null})},dependencies:[y.topBlur,y.topCompositionUpdate,y.topKeyDown,y.topKeyPress,y.topKeyUp,y.topMouseDown]}};i.prototype.getText=function(){return this.root.value||this.root[p()]},i.prototype.getData=function(){var e=this.getText(),t=this.startSelection.start,n=this.startValue.length-this.startSelection.end;return e.substr(t,e.length-n-t)};var C={eventTypes:E,extractEvents:function(e,t,a,u){var c,p;if(m?c=n(e):g?o(e,u)&&(c=E.compositionEnd):r(e,u)&&(c=E.compositionStart),v&&(g||c!==E.compositionStart?c===E.compositionEnd&&g&&(p=g.getData(),g=null):g=new i(t)),c){var d=l.getPooled(c,a,u);return p&&(d.data=p),s.accumulateTwoPhaseDispatches(d),d}}};t.exports=C},{"./EventConstants":17,"./EventPropagators":22,"./ExecutionEnvironment":23,"./ReactInputSelection":63,"./SyntheticCompositionEvent":94,"./getTextContentAccessor":132,"./keyOf":144}],11:[function(e,t){"use strict";function n(e,t,n){e.insertBefore(t,e.childNodes[n]||null)}var r,o=e("./Danger"),i=e("./ReactMultiChildUpdateTypes"),a=e("./getTextContentAccessor"),s=e("./invariant"),u=a();r="textContent"===u?function(e,t){e.textContent=t}:function(e,t){for(;e.firstChild;)e.removeChild(e.firstChild);if(t){var n=e.ownerDocument||document;e.appendChild(n.createTextNode(t))}};var c={dangerouslyReplaceNodeWithMarkup:o.dangerouslyReplaceNodeWithMarkup,updateTextContent:r,processUpdates:function(e,t){for(var a,u=null,c=null,l=0;a=e[l];l++)if(a.type===i.MOVE_EXISTING||a.type===i.REMOVE_NODE){var p=a.fromIndex,d=a.parentNode.childNodes[p],f=a.parentID;s(d),u=u||{},u[f]=u[f]||[],u[f][p]=d,c=c||[],c.push(d)}var h=o.dangerouslyRenderMarkup(t);if(c)for(var m=0;m<c.length;m++)c[m].parentNode.removeChild(c[m]);for(var v=0;a=e[v];v++)switch(a.type){case i.INSERT_MARKUP:n(a.parentNode,h[a.markupIndex],a.toIndex);break;case i.MOVE_EXISTING:n(a.parentNode,u[a.parentID][a.fromIndex],a.toIndex);break;case i.TEXT_CONTENT:r(a.parentNode,a.textContent);break;case i.REMOVE_NODE:}}};t.exports=c},{"./Danger":14,"./ReactMultiChildUpdateTypes":70,"./getTextContentAccessor":132,"./invariant":137}],12:[function(e,t){"use strict";function n(e,t){return(e&t)===t}var r=e("./invariant"),o={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=e.Properties||{},i=e.DOMAttributeNames||{},s=e.DOMPropertyNames||{},u=e.DOMMutationMethods||{};e.isCustomAttribute&&a._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var c in t){r(!a.isStandardName.hasOwnProperty(c)),a.isStandardName[c]=!0;var l=c.toLowerCase();if(a.getPossibleStandardName[l]=c,i.hasOwnProperty(c)){var p=i[c];a.getPossibleStandardName[p]=c,a.getAttributeName[c]=p}else a.getAttributeName[c]=l;a.getPropertyName[c]=s.hasOwnProperty(c)?s[c]:c,a.getMutationMethod[c]=u.hasOwnProperty(c)?u[c]:null;var d=t[c];a.mustUseAttribute[c]=n(d,o.MUST_USE_ATTRIBUTE),a.mustUseProperty[c]=n(d,o.MUST_USE_PROPERTY),a.hasSideEffects[c]=n(d,o.HAS_SIDE_EFFECTS),a.hasBooleanValue[c]=n(d,o.HAS_BOOLEAN_VALUE),a.hasNumericValue[c]=n(d,o.HAS_NUMERIC_VALUE),a.hasPositiveNumericValue[c]=n(d,o.HAS_POSITIVE_NUMERIC_VALUE),a.hasOverloadedBooleanValue[c]=n(d,o.HAS_OVERLOADED_BOOLEAN_VALUE),r(!a.mustUseAttribute[c]||!a.mustUseProperty[c]),r(a.mustUseProperty[c]||!a.hasSideEffects[c]),r(!!a.hasBooleanValue[c]+!!a.hasNumericValue[c]+!!a.hasOverloadedBooleanValue[c]<=1)}}},i={},a={ID_ATTRIBUTE_NAME:"data-reactid",isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasNumericValue:{},hasPositiveNumericValue:{},hasOverloadedBooleanValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<a._isCustomAttributeFunctions.length;t++){var n=a._isCustomAttributeFunctions[t];if(n(e))return!0}return!1},getDefaultValueForProperty:function(e,t){var n,r=i[e];return r||(i[e]=r={}),t in r||(n=document.createElement(e),r[t]=n[t]),r[t]},injection:o};t.exports=a},{"./invariant":137}],13:[function(e,t){"use strict";function n(e,t){return null==t||r.hasBooleanValue[e]&&!t||r.hasNumericValue[e]&&isNaN(t)||r.hasPositiveNumericValue[e]&&1>t||r.hasOverloadedBooleanValue[e]&&t===!1}var r=e("./DOMProperty"),o=e("./escapeTextForBrowser"),i=e("./memoizeStringOnly"),a=(e("./warning"),i(function(e){return o(e)+'="'})),s={createMarkupForID:function(e){return a(r.ID_ATTRIBUTE_NAME)+o(e)+'"'},createMarkupForProperty:function(e,t){if(r.isStandardName.hasOwnProperty(e)&&r.isStandardName[e]){if(n(e,t))return"";var i=r.getAttributeName[e];return r.hasBooleanValue[e]||r.hasOverloadedBooleanValue[e]&&t===!0?o(i):a(i)+o(t)+'"'}return r.isCustomAttribute(e)?null==t?"":a(e)+o(t)+'"':null},setValueForProperty:function(e,t,o){if(r.isStandardName.hasOwnProperty(t)&&r.isStandardName[t]){var i=r.getMutationMethod[t];if(i)i(e,o);else if(n(t,o))this.deleteValueForProperty(e,t);else if(r.mustUseAttribute[t])e.setAttribute(r.getAttributeName[t],""+o);else{var a=r.getPropertyName[t];r.hasSideEffects[t]&&""+e[a]==""+o||(e[a]=o)}}else r.isCustomAttribute(t)&&(null==o?e.removeAttribute(t):e.setAttribute(t,""+o))},deleteValueForProperty:function(e,t){if(r.isStandardName.hasOwnProperty(t)&&r.isStandardName[t]){var n=r.getMutationMethod[t];if(n)n(e,void 0);else if(r.mustUseAttribute[t])e.removeAttribute(r.getAttributeName[t]);else{var o=r.getPropertyName[t],i=r.getDefaultValueForProperty(e.nodeName,o);r.hasSideEffects[t]&&""+e[o]===i||(e[o]=i)}}else r.isCustomAttribute(t)&&e.removeAttribute(t)}};t.exports=s},{"./DOMProperty":12,"./escapeTextForBrowser":120,"./memoizeStringOnly":146,"./warning":155}],14:[function(e,t){"use strict";function n(e){return e.substring(1,e.indexOf(" "))}var r=e("./ExecutionEnvironment"),o=e("./createNodesFromMarkup"),i=e("./emptyFunction"),a=e("./getMarkupWrap"),s=e("./invariant"),u=/^(<[^ \/>]+)/,c="data-danger-index",l={dangerouslyRenderMarkup:function(e){s(r.canUseDOM);for(var t,l={},p=0;p<e.length;p++)s(e[p]),t=n(e[p]),t=a(t)?t:"*",l[t]=l[t]||[],l[t][p]=e[p];var d=[],f=0;for(t in l)if(l.hasOwnProperty(t)){var h=l[t];for(var m in h)if(h.hasOwnProperty(m)){var v=h[m];h[m]=v.replace(u,"$1 "+c+'="'+m+'" ')}var y=o(h.join(""),i);for(p=0;p<y.length;++p){var g=y[p];g.hasAttribute&&g.hasAttribute(c)&&(m=+g.getAttribute(c),g.removeAttribute(c),s(!d.hasOwnProperty(m)),d[m]=g,f+=1)}}return s(f===d.length),s(d.length===e.length),d},dangerouslyReplaceNodeWithMarkup:function(e,t){s(r.canUseDOM),s(t),s("html"!==e.tagName.toLowerCase());var n=o(t,i)[0];e.parentNode.replaceChild(n,e)}};t.exports=l},{"./ExecutionEnvironment":23,"./createNodesFromMarkup":114,"./emptyFunction":118,"./getMarkupWrap":129,"./invariant":137}],15:[function(e,t){"use strict";var n=e("./keyOf"),r=[n({ResponderEventPlugin:null}),n({SimpleEventPlugin:null}),n({TapEventPlugin:null}),n({EnterLeaveEventPlugin:null}),n({ChangeEventPlugin:null}),n({SelectEventPlugin:null}),n({CompositionEventPlugin:null}),n({BeforeInputEventPlugin:null}),n({AnalyticsEventPlugin:null}),n({MobileSafariClickEventPlugin:null})];t.exports=r},{"./keyOf":144}],16:[function(e,t){"use strict";var n=e("./EventConstants"),r=e("./EventPropagators"),o=e("./SyntheticMouseEvent"),i=e("./ReactMount"),a=e("./keyOf"),s=n.topLevelTypes,u=i.getFirstReactDOM,c={mouseEnter:{registrationName:a({onMouseEnter:null}),dependencies:[s.topMouseOut,s.topMouseOver]},mouseLeave:{registrationName:a({onMouseLeave:null}),dependencies:[s.topMouseOut,s.topMouseOver]}},l=[null,null],p={eventTypes:c,extractEvents:function(e,t,n,a){if(e===s.topMouseOver&&(a.relatedTarget||a.fromElement))return null;if(e!==s.topMouseOut&&e!==s.topMouseOver)return null;var p;if(t.window===t)p=t;else{var d=t.ownerDocument;p=d?d.defaultView||d.parentWindow:window}var f,h;if(e===s.topMouseOut?(f=t,h=u(a.relatedTarget||a.toElement)||p):(f=p,h=t),f===h)return null;var m=f?i.getID(f):"",v=h?i.getID(h):"",y=o.getPooled(c.mouseLeave,m,a);y.type="mouseleave",y.target=f,y.relatedTarget=h;var g=o.getPooled(c.mouseEnter,v,a);return g.type="mouseenter",g.target=h,g.relatedTarget=f,r.accumulateEnterLeaveDispatches(y,g,m,v),l[0]=y,l[1]=g,l}};t.exports=p},{"./EventConstants":17,"./EventPropagators":22,"./ReactMount":68,"./SyntheticMouseEvent":100,"./keyOf":144}],17:[function(e,t){"use strict";var n=e("./keyMirror"),r=n({bubbled:null,captured:null}),o=n({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topReset:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTextInput:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null}),i={topLevelTypes:o,PropagationPhases:r};t.exports=i},{"./keyMirror":143}],18:[function(e,t){var n=e("./emptyFunction"),r={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,r){return e.addEventListener?(e.addEventListener(t,r,!0),{remove:function(){e.removeEventListener(t,r,!0)}}):{remove:n}},registerDefault:function(){}};t.exports=r},{"./emptyFunction":118}],19:[function(e,t){"use strict";var n=e("./EventPluginRegistry"),r=e("./EventPluginUtils"),o=e("./accumulateInto"),i=e("./forEachAccumulated"),a=e("./invariant"),s={},u=null,c=function(e){if(e){var t=r.executeDispatch,o=n.getPluginModuleForEvent(e);o&&o.executeDispatch&&(t=o.executeDispatch),r.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e)}},l=null,p={injection:{injectMount:r.injection.injectMount,injectInstanceHandle:function(e){l=e},getInstanceHandle:function(){return l},injectEventPluginOrder:n.injectEventPluginOrder,injectEventPluginsByName:n.injectEventPluginsByName},eventNameDispatchConfigs:n.eventNameDispatchConfigs,registrationNameModules:n.registrationNameModules,putListener:function(e,t,n){a(!n||"function"==typeof n);var r=s[t]||(s[t]={});r[e]=n},getListener:function(e,t){var n=s[t];return n&&n[e]},deleteListener:function(e,t){var n=s[t];n&&delete n[e]},deleteAllListeners:function(e){for(var t in s)delete s[t][e]},extractEvents:function(e,t,r,i){for(var a,s=n.plugins,u=0,c=s.length;c>u;u++){var l=s[u];if(l){var p=l.extractEvents(e,t,r,i);p&&(a=o(a,p))}}return a},enqueueEvents:function(e){e&&(u=o(u,e))},processEventQueue:function(){var e=u;u=null,i(e,c),a(!u)},__purge:function(){s={}},__getListenerBank:function(){return s}};t.exports=p},{"./EventPluginRegistry":20,"./EventPluginUtils":21,"./accumulateInto":106,"./forEachAccumulated":123,"./invariant":137}],20:[function(e,t){"use strict";function n(){if(a)for(var e in s){var t=s[e],n=a.indexOf(e);if(i(n>-1),!u.plugins[n]){i(t.extractEvents),u.plugins[n]=t;var o=t.eventTypes;for(var c in o)i(r(o[c],t,c))}}}function r(e,t,n){i(!u.eventNameDispatchConfigs.hasOwnProperty(n)),u.eventNameDispatchConfigs[n]=e;var r=e.phasedRegistrationNames;if(r){for(var a in r)if(r.hasOwnProperty(a)){var s=r[a];o(s,t,n)}return!0}return e.registrationName?(o(e.registrationName,t,n),!0):!1}function o(e,t,n){i(!u.registrationNameModules[e]),u.registrationNameModules[e]=t,u.registrationNameDependencies[e]=t.eventTypes[n].dependencies}var i=e("./invariant"),a=null,s={},u={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(e){i(!a),a=Array.prototype.slice.call(e),n()},injectEventPluginsByName:function(e){var t=!1;for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];s.hasOwnProperty(r)&&s[r]===o||(i(!s[r]),s[r]=o,t=!0)}t&&n()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return u.registrationNameModules[t.registrationName]||null;for(var n in t.phasedRegistrationNames)if(t.phasedRegistrationNames.hasOwnProperty(n)){var r=u.registrationNameModules[t.phasedRegistrationNames[n]];if(r)return r}return null},_resetEventPlugins:function(){a=null;for(var e in s)s.hasOwnProperty(e)&&delete s[e];u.plugins.length=0;var t=u.eventNameDispatchConfigs;for(var n in t)t.hasOwnProperty(n)&&delete t[n];var r=u.registrationNameModules;for(var o in r)r.hasOwnProperty(o)&&delete r[o]}};t.exports=u},{"./invariant":137}],21:[function(e,t){"use strict";function n(e){return e===m.topMouseUp||e===m.topTouchEnd||e===m.topTouchCancel}function r(e){return e===m.topMouseMove||e===m.topTouchMove}function o(e){return e===m.topMouseDown||e===m.topTouchStart}function i(e,t){var n=e._dispatchListeners,r=e._dispatchIDs;if(Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)t(e,n[o],r[o]);else n&&t(e,n,r)}function a(e,t,n){e.currentTarget=h.Mount.getNode(n);var r=t(e,n);return e.currentTarget=null,r}function s(e,t){i(e,t),e._dispatchListeners=null,e._dispatchIDs=null}function u(e){var t=e._dispatchListeners,n=e._dispatchIDs;if(Array.isArray(t)){for(var r=0;r<t.length&&!e.isPropagationStopped();r++)if(t[r](e,n[r]))return n[r]}else if(t&&t(e,n))return n;return null}function c(e){var t=u(e);return e._dispatchIDs=null,e._dispatchListeners=null,t}function l(e){var t=e._dispatchListeners,n=e._dispatchIDs;f(!Array.isArray(t));var r=t?t(e,n):null;return e._dispatchListeners=null,e._dispatchIDs=null,r}function p(e){return!!e._dispatchListeners}var d=e("./EventConstants"),f=e("./invariant"),h={Mount:null,injectMount:function(e){h.Mount=e}},m=d.topLevelTypes,v={isEndish:n,isMoveish:r,isStartish:o,executeDirectDispatch:l,executeDispatch:a,executeDispatchesInOrder:s,executeDispatchesInOrderStopAtTrue:c,hasDispatches:p,injection:h,useTouchEvents:!1};t.exports=v},{"./EventConstants":17,"./invariant":137}],22:[function(e,t){"use strict";function n(e,t,n){var r=t.dispatchConfig.phasedRegistrationNames[n];return m(e,r)}function r(e,t,r){var o=t?h.bubbled:h.captured,i=n(e,r,o);i&&(r._dispatchListeners=d(r._dispatchListeners,i),r._dispatchIDs=d(r._dispatchIDs,e))}function o(e){e&&e.dispatchConfig.phasedRegistrationNames&&p.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,r,e)}function i(e,t,n){if(n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,o=m(e,r);o&&(n._dispatchListeners=d(n._dispatchListeners,o),n._dispatchIDs=d(n._dispatchIDs,e))}}function a(e){e&&e.dispatchConfig.registrationName&&i(e.dispatchMarker,null,e)}function s(e){f(e,o)}function u(e,t,n,r){p.injection.getInstanceHandle().traverseEnterLeave(n,r,i,e,t)}function c(e){f(e,a)}var l=e("./EventConstants"),p=e("./EventPluginHub"),d=e("./accumulateInto"),f=e("./forEachAccumulated"),h=l.PropagationPhases,m=p.getListener,v={accumulateTwoPhaseDispatches:s,accumulateDirectDispatches:c,accumulateEnterLeaveDispatches:u};t.exports=v},{"./EventConstants":17,"./EventPluginHub":19,"./accumulateInto":106,"./forEachAccumulated":123}],23:[function(e,t){"use strict";var n=!("undefined"==typeof window||!window.document||!window.document.createElement),r={canUseDOM:n,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:n&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:n&&!!window.screen,isInWorker:!n};t.exports=r},{}],24:[function(e,t){"use strict";var n,r=e("./DOMProperty"),o=e("./ExecutionEnvironment"),i=r.injection.MUST_USE_ATTRIBUTE,a=r.injection.MUST_USE_PROPERTY,s=r.injection.HAS_BOOLEAN_VALUE,u=r.injection.HAS_SIDE_EFFECTS,c=r.injection.HAS_NUMERIC_VALUE,l=r.injection.HAS_POSITIVE_NUMERIC_VALUE,p=r.injection.HAS_OVERLOADED_BOOLEAN_VALUE;if(o.canUseDOM){var d=document.implementation;n=d&&d.hasFeature&&d.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}var f={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:i|s,allowTransparency:i,alt:null,async:s,autoComplete:null,autoPlay:s,cellPadding:null,cellSpacing:null,charSet:i,checked:a|s,classID:i,className:n?i:a,cols:i|l,colSpan:null,content:null,contentEditable:null,contextMenu:i,controls:a|s,coords:null,crossOrigin:null,data:null,dateTime:i,defer:s,dir:null,disabled:i|s,download:p,draggable:null,encType:null,form:i,formAction:i,formEncType:i,formMethod:i,formNoValidate:s,formTarget:i,frameBorder:i,height:i,hidden:i|s,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:a,label:null,lang:null,list:i,loop:a|s,manifest:i,marginHeight:null,marginWidth:null,max:null,maxLength:i,media:i,mediaGroup:null,method:null,min:null,multiple:a|s,muted:a|s,name:null,noValidate:s,open:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:a|s,rel:null,required:s,role:i,rows:i|l,rowSpan:null,sandbox:null,scope:null,scrolling:null,seamless:i|s,selected:a|s,shape:null,size:i|l,sizes:i,span:l,spellCheck:null,src:null,srcDoc:a,srcSet:i,start:c,step:null,style:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:a|u,width:i,wmode:i,autoCapitalize:null,autoCorrect:null,itemProp:i,itemScope:i|s,itemType:i,property:null},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"enctype",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}};t.exports=f},{"./DOMProperty":12,"./ExecutionEnvironment":23}],25:[function(e,t){"use strict";var n=e("./ReactLink"),r=e("./ReactStateSetters"),o={linkState:function(e){return new n(this.state[e],r.createStateKeySetter(this,e))}};t.exports=o},{"./ReactLink":66,"./ReactStateSetters":83}],26:[function(e,t){"use strict";function n(e){u(null==e.props.checkedLink||null==e.props.valueLink)}function r(e){n(e),u(null==e.props.value&&null==e.props.onChange)}function o(e){n(e),u(null==e.props.checked&&null==e.props.onChange)}function i(e){this.props.valueLink.requestChange(e.target.value)}function a(e){this.props.checkedLink.requestChange(e.target.checked)}var s=e("./ReactPropTypes"),u=e("./invariant"),c={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},l={Mixin:{propTypes:{value:function(e,t){return!e[t]||c[e.type]||e.onChange||e.readOnly||e.disabled?void 0:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t){return!e[t]||e.onChange||e.readOnly||e.disabled?void 0:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:s.func}},getValue:function(e){return e.props.valueLink?(r(e),e.props.valueLink.value):e.props.value},getChecked:function(e){return e.props.checkedLink?(o(e),e.props.checkedLink.value):e.props.checked},getOnChange:function(e){return e.props.valueLink?(r(e),i):e.props.checkedLink?(o(e),a):e.props.onChange}};t.exports=l},{"./ReactPropTypes":77,"./invariant":137}],27:[function(e,t){"use strict";function n(e){e.remove()}var r=e("./ReactBrowserEventEmitter"),o=e("./accumulateInto"),i=e("./forEachAccumulated"),a=e("./invariant"),s={trapBubbledEvent:function(e,t){a(this.isMounted());var n=r.trapBubbledEvent(e,t,this.getDOMNode());this._localEventListeners=o(this._localEventListeners,n)},componentWillUnmount:function(){this._localEventListeners&&i(this._localEventListeners,n)}};t.exports=s},{"./ReactBrowserEventEmitter":33,"./accumulateInto":106,"./forEachAccumulated":123,"./invariant":137}],28:[function(e,t){"use strict";var n=e("./EventConstants"),r=e("./emptyFunction"),o=n.topLevelTypes,i={eventTypes:null,extractEvents:function(e,t,n,i){if(e===o.topTouchStart){var a=i.target;a&&!a.onclick&&(a.onclick=r)}}};t.exports=i},{"./EventConstants":17,"./emptyFunction":118}],29:[function(e,t){function n(e){if(null==e)throw new TypeError("Object.assign target cannot be null or undefined");for(var t=Object(e),n=Object.prototype.hasOwnProperty,r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o){var i=Object(o);for(var a in i)n.call(i,a)&&(t[a]=i[a])}}return t}t.exports=n},{}],30:[function(e,t){"use strict";var n=e("./invariant"),r=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},o=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},i=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},a=function(e,t,n,r,o){var i=this;if(i.instancePool.length){var a=i.instancePool.pop();return i.call(a,e,t,n,r,o),a}return new i(e,t,n,r,o)},s=function(e){var t=this;n(e instanceof t),e.destructor&&e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},u=10,c=r,l=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||c,n.poolSize||(n.poolSize=u),n.release=s,n},p={addPoolingTo:l,oneArgumentPooler:r,twoArgumentPooler:o,threeArgumentPooler:i,fiveArgumentPooler:a};t.exports=p},{"./invariant":137}],31:[function(e,t){"use strict";var n=e("./DOMPropertyOperations"),r=e("./EventPluginUtils"),o=e("./ReactChildren"),i=e("./ReactComponent"),a=e("./ReactCompositeComponent"),s=e("./ReactContext"),u=e("./ReactCurrentOwner"),c=e("./ReactElement"),l=(e("./ReactElementValidator"),e("./ReactDOM")),p=e("./ReactDOMComponent"),d=e("./ReactDefaultInjection"),f=e("./ReactInstanceHandles"),h=e("./ReactLegacyElement"),m=e("./ReactMount"),v=e("./ReactMultiChild"),y=e("./ReactPerf"),g=e("./ReactPropTypes"),E=e("./ReactServerRendering"),C=e("./ReactTextComponent"),R=e("./Object.assign"),M=e("./deprecated"),b=e("./onlyChild");
d.inject();var O=c.createElement,D=c.createFactory;O=h.wrapCreateElement(O),D=h.wrapCreateFactory(D);var x=y.measure("React","render",m.render),P={Children:{map:o.map,forEach:o.forEach,count:o.count,only:b},DOM:l,PropTypes:g,initializeTouchEvents:function(e){r.useTouchEvents=e},createClass:a.createClass,createElement:O,createFactory:D,constructAndRenderComponent:m.constructAndRenderComponent,constructAndRenderComponentByID:m.constructAndRenderComponentByID,render:x,renderToString:E.renderToString,renderToStaticMarkup:E.renderToStaticMarkup,unmountComponentAtNode:m.unmountComponentAtNode,isValidClass:h.isValidClass,isValidElement:c.isValidElement,withContext:s.withContext,__spread:R,renderComponent:M("React","renderComponent","render",this,x),renderComponentToString:M("React","renderComponentToString","renderToString",this,E.renderToString),renderComponentToStaticMarkup:M("React","renderComponentToStaticMarkup","renderToStaticMarkup",this,E.renderToStaticMarkup),isValidComponent:M("React","isValidComponent","isValidElement",this,c.isValidElement)};"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({Component:i,CurrentOwner:u,DOMComponent:p,DOMPropertyOperations:n,InstanceHandles:f,Mount:m,MultiChild:v,TextComponent:C});P.version="0.12.2",t.exports=P},{"./DOMPropertyOperations":13,"./EventPluginUtils":21,"./Object.assign":29,"./ReactChildren":36,"./ReactComponent":37,"./ReactCompositeComponent":40,"./ReactContext":41,"./ReactCurrentOwner":42,"./ReactDOM":43,"./ReactDOMComponent":45,"./ReactDefaultInjection":55,"./ReactElement":56,"./ReactElementValidator":57,"./ReactInstanceHandles":64,"./ReactLegacyElement":65,"./ReactMount":68,"./ReactMultiChild":69,"./ReactPerf":73,"./ReactPropTypes":77,"./ReactServerRendering":81,"./ReactTextComponent":84,"./deprecated":117,"./onlyChild":148}],32:[function(e,t){"use strict";var n=e("./ReactEmptyComponent"),r=e("./ReactMount"),o=e("./invariant"),i={getDOMNode:function(){return o(this.isMounted()),n.isNullComponentID(this._rootNodeID)?null:r.getNode(this._rootNodeID)}};t.exports=i},{"./ReactEmptyComponent":58,"./ReactMount":68,"./invariant":137}],33:[function(e,t){"use strict";function n(e){return Object.prototype.hasOwnProperty.call(e,h)||(e[h]=d++,l[e[h]]={}),l[e[h]]}var r=e("./EventConstants"),o=e("./EventPluginHub"),i=e("./EventPluginRegistry"),a=e("./ReactEventEmitterMixin"),s=e("./ViewportMetrics"),u=e("./Object.assign"),c=e("./isEventSupported"),l={},p=!1,d=0,f={topBlur:"blur",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topWheel:"wheel"},h="_reactListenersID"+String(Math.random()).slice(2),m=u({},a,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(m.handleTopLevel),m.ReactEventListener=e}},setEnabled:function(e){m.ReactEventListener&&m.ReactEventListener.setEnabled(e)},isEnabled:function(){return!(!m.ReactEventListener||!m.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var o=t,a=n(o),s=i.registrationNameDependencies[e],u=r.topLevelTypes,l=0,p=s.length;p>l;l++){var d=s[l];a.hasOwnProperty(d)&&a[d]||(d===u.topWheel?c("wheel")?m.ReactEventListener.trapBubbledEvent(u.topWheel,"wheel",o):c("mousewheel")?m.ReactEventListener.trapBubbledEvent(u.topWheel,"mousewheel",o):m.ReactEventListener.trapBubbledEvent(u.topWheel,"DOMMouseScroll",o):d===u.topScroll?c("scroll",!0)?m.ReactEventListener.trapCapturedEvent(u.topScroll,"scroll",o):m.ReactEventListener.trapBubbledEvent(u.topScroll,"scroll",m.ReactEventListener.WINDOW_HANDLE):d===u.topFocus||d===u.topBlur?(c("focus",!0)?(m.ReactEventListener.trapCapturedEvent(u.topFocus,"focus",o),m.ReactEventListener.trapCapturedEvent(u.topBlur,"blur",o)):c("focusin")&&(m.ReactEventListener.trapBubbledEvent(u.topFocus,"focusin",o),m.ReactEventListener.trapBubbledEvent(u.topBlur,"focusout",o)),a[u.topBlur]=!0,a[u.topFocus]=!0):f.hasOwnProperty(d)&&m.ReactEventListener.trapBubbledEvent(d,f[d],o),a[d]=!0)}},trapBubbledEvent:function(e,t,n){return m.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return m.ReactEventListener.trapCapturedEvent(e,t,n)},ensureScrollValueMonitoring:function(){if(!p){var e=s.refreshScrollValues;m.ReactEventListener.monitorScrollValue(e),p=!0}},eventNameDispatchConfigs:o.eventNameDispatchConfigs,registrationNameModules:o.registrationNameModules,putListener:o.putListener,getListener:o.getListener,deleteListener:o.deleteListener,deleteAllListeners:o.deleteAllListeners});t.exports=m},{"./EventConstants":17,"./EventPluginHub":19,"./EventPluginRegistry":20,"./Object.assign":29,"./ReactEventEmitterMixin":60,"./ViewportMetrics":105,"./isEventSupported":138}],34:[function(e,t){"use strict";var n=e("./React"),r=e("./Object.assign"),o=n.createFactory(e("./ReactTransitionGroup")),i=n.createFactory(e("./ReactCSSTransitionGroupChild")),a=n.createClass({displayName:"ReactCSSTransitionGroup",propTypes:{transitionName:n.PropTypes.string.isRequired,transitionEnter:n.PropTypes.bool,transitionLeave:n.PropTypes.bool},getDefaultProps:function(){return{transitionEnter:!0,transitionLeave:!0}},_wrapChild:function(e){return i({name:this.props.transitionName,enter:this.props.transitionEnter,leave:this.props.transitionLeave},e)},render:function(){return o(r({},this.props,{childFactory:this._wrapChild}))}});t.exports=a},{"./Object.assign":29,"./React":31,"./ReactCSSTransitionGroupChild":35,"./ReactTransitionGroup":87}],35:[function(e,t){"use strict";var n=e("./React"),r=e("./CSSCore"),o=e("./ReactTransitionEvents"),i=e("./onlyChild"),a=17,s=n.createClass({displayName:"ReactCSSTransitionGroupChild",transition:function(e,t){var n=this.getDOMNode(),i=this.props.name+"-"+e,a=i+"-active",s=function(e){e&&e.target!==n||(r.removeClass(n,i),r.removeClass(n,a),o.removeEndEventListener(n,s),t&&t())};o.addEndEventListener(n,s),r.addClass(n,i),this.queueClass(a)},queueClass:function(e){this.classNameQueue.push(e),this.timeout||(this.timeout=setTimeout(this.flushClassNameQueue,a))},flushClassNameQueue:function(){this.isMounted()&&this.classNameQueue.forEach(r.addClass.bind(r,this.getDOMNode())),this.classNameQueue.length=0,this.timeout=null},componentWillMount:function(){this.classNameQueue=[]},componentWillUnmount:function(){this.timeout&&clearTimeout(this.timeout)},componentWillEnter:function(e){this.props.enter?this.transition("enter",e):e()},componentWillLeave:function(e){this.props.leave?this.transition("leave",e):e()},render:function(){return i(this.props.children)}});t.exports=s},{"./CSSCore":4,"./React":31,"./ReactTransitionEvents":86,"./onlyChild":148}],36:[function(e,t){"use strict";function n(e,t){this.forEachFunction=e,this.forEachContext=t}function r(e,t,n,r){var o=e;o.forEachFunction.call(o.forEachContext,t,r)}function o(e,t,o){if(null==e)return e;var i=n.getPooled(t,o);p(e,r,i),n.release(i)}function i(e,t,n){this.mapResult=e,this.mapFunction=t,this.mapContext=n}function a(e,t,n,r){var o=e,i=o.mapResult,a=!i.hasOwnProperty(n);if(a){var s=o.mapFunction.call(o.mapContext,t,r);i[n]=s}}function s(e,t,n){if(null==e)return e;var r={},o=i.getPooled(r,t,n);return p(e,a,o),i.release(o),r}function u(){return null}function c(e){return p(e,u,null)}var l=e("./PooledClass"),p=e("./traverseAllChildren"),d=(e("./warning"),l.twoArgumentPooler),f=l.threeArgumentPooler;l.addPoolingTo(n,d),l.addPoolingTo(i,f);var h={forEach:o,map:s,count:c};t.exports=h},{"./PooledClass":30,"./traverseAllChildren":153,"./warning":155}],37:[function(e,t){"use strict";var n=e("./ReactElement"),r=e("./ReactOwner"),o=e("./ReactUpdates"),i=e("./Object.assign"),a=e("./invariant"),s=e("./keyMirror"),u=s({MOUNTED:null,UNMOUNTED:null}),c=!1,l=null,p=null,d={injection:{injectEnvironment:function(e){a(!c),p=e.mountImageIntoNode,l=e.unmountIDFromEnvironment,d.BackendIDOperations=e.BackendIDOperations,c=!0}},LifeCycle:u,BackendIDOperations:null,Mixin:{isMounted:function(){return this._lifeCycleState===u.MOUNTED},setProps:function(e,t){var n=this._pendingElement||this._currentElement;this.replaceProps(i({},n.props,e),t)},replaceProps:function(e,t){a(this.isMounted()),a(0===this._mountDepth),this._pendingElement=n.cloneAndReplaceProps(this._pendingElement||this._currentElement,e),o.enqueueUpdate(this,t)},_setPropsInternal:function(e,t){var r=this._pendingElement||this._currentElement;this._pendingElement=n.cloneAndReplaceProps(r,i({},r.props,e)),o.enqueueUpdate(this,t)},construct:function(e){this.props=e.props,this._owner=e._owner,this._lifeCycleState=u.UNMOUNTED,this._pendingCallbacks=null,this._currentElement=e,this._pendingElement=null},mountComponent:function(e,t,n){a(!this.isMounted());var o=this._currentElement.ref;if(null!=o){var i=this._currentElement._owner;r.addComponentAsRefTo(this,o,i)}this._rootNodeID=e,this._lifeCycleState=u.MOUNTED,this._mountDepth=n},unmountComponent:function(){a(this.isMounted());var e=this._currentElement.ref;null!=e&&r.removeComponentAsRefFrom(this,e,this._owner),l(this._rootNodeID),this._rootNodeID=null,this._lifeCycleState=u.UNMOUNTED},receiveComponent:function(e,t){a(this.isMounted()),this._pendingElement=e,this.performUpdateIfNecessary(t)},performUpdateIfNecessary:function(e){if(null!=this._pendingElement){var t=this._currentElement,n=this._pendingElement;this._currentElement=n,this.props=n.props,this._owner=n._owner,this._pendingElement=null,this.updateComponent(e,t)}},updateComponent:function(e,t){var n=this._currentElement;(n._owner!==t._owner||n.ref!==t.ref)&&(null!=t.ref&&r.removeComponentAsRefFrom(this,t.ref,t._owner),null!=n.ref&&r.addComponentAsRefTo(this,n.ref,n._owner))},mountComponentIntoNode:function(e,t,n){var r=o.ReactReconcileTransaction.getPooled();r.perform(this._mountComponentIntoNode,this,e,t,r,n),o.ReactReconcileTransaction.release(r)},_mountComponentIntoNode:function(e,t,n,r){var o=this.mountComponent(e,n,0);p(o,t,r)},isOwnedBy:function(e){return this._owner===e},getSiblingByRef:function(e){var t=this._owner;return t&&t.refs?t.refs[e]:null}}};t.exports=d},{"./Object.assign":29,"./ReactElement":56,"./ReactOwner":72,"./ReactUpdates":88,"./invariant":137,"./keyMirror":143}],38:[function(e,t){"use strict";var n=e("./ReactDOMIDOperations"),r=e("./ReactMarkupChecksum"),o=e("./ReactMount"),i=e("./ReactPerf"),a=e("./ReactReconcileTransaction"),s=e("./getReactRootElementInContainer"),u=e("./invariant"),c=e("./setInnerHTML"),l=1,p=9,d={ReactReconcileTransaction:a,BackendIDOperations:n,unmountIDFromEnvironment:function(e){o.purgeID(e)},mountImageIntoNode:i.measure("ReactComponentBrowserEnvironment","mountImageIntoNode",function(e,t,n){if(u(t&&(t.nodeType===l||t.nodeType===p)),n){if(r.canReuseMarkup(e,s(t)))return;u(t.nodeType!==p)}u(t.nodeType!==p),c(t,e)})};t.exports=d},{"./ReactDOMIDOperations":47,"./ReactMarkupChecksum":67,"./ReactMount":68,"./ReactPerf":73,"./ReactReconcileTransaction":79,"./getReactRootElementInContainer":131,"./invariant":137,"./setInnerHTML":149}],39:[function(e,t){"use strict";var n=e("./shallowEqual"),r={shouldComponentUpdate:function(e,t){return!n(this.props,e)||!n(this.state,t)}};t.exports=r},{"./shallowEqual":150}],40:[function(e,t){"use strict";function n(e){var t=e._owner||null;return t&&t.constructor&&t.constructor.displayName?" Check the render method of `"+t.constructor.displayName+"`.":""}function r(e,t){for(var n in t)t.hasOwnProperty(n)&&D("function"==typeof t[n])}function o(e,t){var n=I.hasOwnProperty(t)?I[t]:null;L.hasOwnProperty(t)&&D(n===S.OVERRIDE_BASE),e.hasOwnProperty(t)&&D(n===S.DEFINE_MANY||n===S.DEFINE_MANY_MERGED)}function i(e){var t=e._compositeLifeCycleState;D(e.isMounted()||t===A.MOUNTING),D(null==f.current),D(t!==A.UNMOUNTING)}function a(e,t){if(t){D(!y.isValidFactory(t)),D(!h.isValidElement(t));var n=e.prototype;t.hasOwnProperty(_)&&k.mixins(e,t.mixins);for(var r in t)if(t.hasOwnProperty(r)&&r!==_){var i=t[r];if(o(n,r),k.hasOwnProperty(r))k[r](e,i);else{var a=I.hasOwnProperty(r),s=n.hasOwnProperty(r),u=i&&i.__reactDontBind,p="function"==typeof i,d=p&&!a&&!s&&!u;if(d)n.__reactAutoBindMap||(n.__reactAutoBindMap={}),n.__reactAutoBindMap[r]=i,n[r]=i;else if(s){var f=I[r];D(a&&(f===S.DEFINE_MANY_MERGED||f===S.DEFINE_MANY)),f===S.DEFINE_MANY_MERGED?n[r]=c(n[r],i):f===S.DEFINE_MANY&&(n[r]=l(n[r],i))}else n[r]=i}}}}function s(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in k;D(!o);var i=n in e;D(!i),e[n]=r}}}function u(e,t){return D(e&&t&&"object"==typeof e&&"object"==typeof t),T(t,function(t,n){D(void 0===e[n]),e[n]=t}),e}function c(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);return null==n?r:null==r?n:u(n,r)}}function l(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}var p=e("./ReactComponent"),d=e("./ReactContext"),f=e("./ReactCurrentOwner"),h=e("./ReactElement"),m=(e("./ReactElementValidator"),e("./ReactEmptyComponent")),v=e("./ReactErrorUtils"),y=e("./ReactLegacyElement"),g=e("./ReactOwner"),E=e("./ReactPerf"),C=e("./ReactPropTransferer"),R=e("./ReactPropTypeLocations"),M=(e("./ReactPropTypeLocationNames"),e("./ReactUpdates")),b=e("./Object.assign"),O=e("./instantiateReactComponent"),D=e("./invariant"),x=e("./keyMirror"),P=e("./keyOf"),T=(e("./monitorCodeUse"),e("./mapObject")),w=e("./shouldUpdateReactComponent"),_=(e("./warning"),P({mixins:null})),S=x({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),N=[],I={mixins:S.DEFINE_MANY,statics:S.DEFINE_MANY,propTypes:S.DEFINE_MANY,contextTypes:S.DEFINE_MANY,childContextTypes:S.DEFINE_MANY,getDefaultProps:S.DEFINE_MANY_MERGED,getInitialState:S.DEFINE_MANY_MERGED,getChildContext:S.DEFINE_MANY_MERGED,render:S.DEFINE_ONCE,componentWillMount:S.DEFINE_MANY,componentDidMount:S.DEFINE_MANY,componentWillReceiveProps:S.DEFINE_MANY,shouldComponentUpdate:S.DEFINE_ONCE,componentWillUpdate:S.DEFINE_MANY,componentDidUpdate:S.DEFINE_MANY,componentWillUnmount:S.DEFINE_MANY,updateComponent:S.OVERRIDE_BASE},k={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)a(e,t[n])},childContextTypes:function(e,t){r(e,t,R.childContext),e.childContextTypes=b({},e.childContextTypes,t)},contextTypes:function(e,t){r(e,t,R.context),e.contextTypes=b({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps=e.getDefaultProps?c(e.getDefaultProps,t):t},propTypes:function(e,t){r(e,t,R.prop),e.propTypes=b({},e.propTypes,t)},statics:function(e,t){s(e,t)}},A=x({MOUNTING:null,UNMOUNTING:null,RECEIVING_PROPS:null}),L={construct:function(){p.Mixin.construct.apply(this,arguments),g.Mixin.construct.apply(this,arguments),this.state=null,this._pendingState=null,this.context=null,this._compositeLifeCycleState=null},isMounted:function(){return p.Mixin.isMounted.call(this)&&this._compositeLifeCycleState!==A.MOUNTING},mountComponent:E.measure("ReactCompositeComponent","mountComponent",function(e,t,n){p.Mixin.mountComponent.call(this,e,t,n),this._compositeLifeCycleState=A.MOUNTING,this.__reactAutoBindMap&&this._bindAutoBindMethods(),this.context=this._processContext(this._currentElement._context),this.props=this._processProps(this.props),this.state=this.getInitialState?this.getInitialState():null,D("object"==typeof this.state&&!Array.isArray(this.state)),this._pendingState=null,this._pendingForceUpdate=!1,this.componentWillMount&&(this.componentWillMount(),this._pendingState&&(this.state=this._pendingState,this._pendingState=null)),this._renderedComponent=O(this._renderValidatedComponent(),this._currentElement.type),this._compositeLifeCycleState=null;var r=this._renderedComponent.mountComponent(e,t,n+1);return this.componentDidMount&&t.getReactMountReady().enqueue(this.componentDidMount,this),r}),unmountComponent:function(){this._compositeLifeCycleState=A.UNMOUNTING,this.componentWillUnmount&&this.componentWillUnmount(),this._compositeLifeCycleState=null,this._renderedComponent.unmountComponent(),this._renderedComponent=null,p.Mixin.unmountComponent.call(this)},setState:function(e,t){D("object"==typeof e||null==e),this.replaceState(b({},this._pendingState||this.state,e),t)},replaceState:function(e,t){i(this),this._pendingState=e,this._compositeLifeCycleState!==A.MOUNTING&&M.enqueueUpdate(this,t)},_processContext:function(e){var t=null,n=this.constructor.contextTypes;if(n){t={};for(var r in n)t[r]=e[r]}return t},_processChildContext:function(e){var t=this.getChildContext&&this.getChildContext();if(this.constructor.displayName||"ReactCompositeComponent",t){D("object"==typeof this.constructor.childContextTypes);for(var n in t)D(n in this.constructor.childContextTypes);return b({},e,t)}return e},_processProps:function(e){return e},_checkPropTypes:function(e,t,r){var o=this.constructor.displayName;for(var i in e)if(e.hasOwnProperty(i)){var a=e[i](t,i,o,r);a instanceof Error&&n(this)}},performUpdateIfNecessary:function(e){var t=this._compositeLifeCycleState;if(t!==A.MOUNTING&&t!==A.RECEIVING_PROPS&&(null!=this._pendingElement||null!=this._pendingState||this._pendingForceUpdate)){var n=this.context,r=this.props,o=this._currentElement;null!=this._pendingElement&&(o=this._pendingElement,n=this._processContext(o._context),r=this._processProps(o.props),this._pendingElement=null,this._compositeLifeCycleState=A.RECEIVING_PROPS,this.componentWillReceiveProps&&this.componentWillReceiveProps(r,n)),this._compositeLifeCycleState=null;var i=this._pendingState||this.state;this._pendingState=null;var a=this._pendingForceUpdate||!this.shouldComponentUpdate||this.shouldComponentUpdate(r,i,n);a?(this._pendingForceUpdate=!1,this._performComponentUpdate(o,r,i,n,e)):(this._currentElement=o,this.props=r,this.state=i,this.context=n,this._owner=o._owner)}},_performComponentUpdate:function(e,t,n,r,o){var i=this._currentElement,a=this.props,s=this.state,u=this.context;this.componentWillUpdate&&this.componentWillUpdate(t,n,r),this._currentElement=e,this.props=t,this.state=n,this.context=r,this._owner=e._owner,this.updateComponent(o,i),this.componentDidUpdate&&o.getReactMountReady().enqueue(this.componentDidUpdate.bind(this,a,s,u),this)},receiveComponent:function(e,t){(e!==this._currentElement||null==e._owner)&&p.Mixin.receiveComponent.call(this,e,t)},updateComponent:E.measure("ReactCompositeComponent","updateComponent",function(e,t){p.Mixin.updateComponent.call(this,e,t);var n=this._renderedComponent,r=n._currentElement,o=this._renderValidatedComponent();if(w(r,o))n.receiveComponent(o,e);else{var i=this._rootNodeID,a=n._rootNodeID;n.unmountComponent(),this._renderedComponent=O(o,this._currentElement.type);var s=this._renderedComponent.mountComponent(i,e,this._mountDepth+1);p.BackendIDOperations.dangerouslyReplaceNodeWithMarkupByID(a,s)}}),forceUpdate:function(e){var t=this._compositeLifeCycleState;D(this.isMounted()||t===A.MOUNTING),D(t!==A.UNMOUNTING&&null==f.current),this._pendingForceUpdate=!0,M.enqueueUpdate(this,e)},_renderValidatedComponent:E.measure("ReactCompositeComponent","_renderValidatedComponent",function(){var e,t=d.current;d.current=this._processChildContext(this._currentElement._context),f.current=this;try{e=this.render(),null===e||e===!1?(e=m.getEmptyComponent(),m.registerNullComponentID(this._rootNodeID)):m.deregisterNullComponentID(this._rootNodeID)}finally{d.current=t,f.current=null}return D(h.isValidElement(e)),e}),_bindAutoBindMethods:function(){for(var e in this.__reactAutoBindMap)if(this.__reactAutoBindMap.hasOwnProperty(e)){var t=this.__reactAutoBindMap[e];this[e]=this._bindAutoBindMethod(v.guard(t,this.constructor.displayName+"."+e))}},_bindAutoBindMethod:function(e){var t=this,n=e.bind(t);return n}},U=function(){};b(U.prototype,p.Mixin,g.Mixin,C.Mixin,L);var F={LifeCycle:A,Base:U,createClass:function(e){var t=function(){};t.prototype=new U,t.prototype.constructor=t,N.forEach(a.bind(null,t)),a(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),D(t.prototype.render);for(var n in I)t.prototype[n]||(t.prototype[n]=null);return y.wrapFactory(h.createFactory(t))},injection:{injectMixin:function(e){N.push(e)}}};t.exports=F},{"./Object.assign":29,"./ReactComponent":37,"./ReactContext":41,"./ReactCurrentOwner":42,"./ReactElement":56,"./ReactElementValidator":57,"./ReactEmptyComponent":58,"./ReactErrorUtils":59,"./ReactLegacyElement":65,"./ReactOwner":72,"./ReactPerf":73,"./ReactPropTransferer":74,"./ReactPropTypeLocationNames":75,"./ReactPropTypeLocations":76,"./ReactUpdates":88,"./instantiateReactComponent":136,"./invariant":137,"./keyMirror":143,"./keyOf":144,"./mapObject":145,"./monitorCodeUse":147,"./shouldUpdateReactComponent":151,"./warning":155}],41:[function(e,t){"use strict";var n=e("./Object.assign"),r={current:{},withContext:function(e,t){var o,i=r.current;r.current=n({},i,e);try{o=t()}finally{r.current=i}return o}};t.exports=r},{"./Object.assign":29}],42:[function(e,t){"use strict";var n={current:null};t.exports=n},{}],43:[function(e,t){"use strict";function n(e){return o.markNonLegacyFactory(r.createFactory(e))}var r=e("./ReactElement"),o=(e("./ReactElementValidator"),e("./ReactLegacyElement")),i=e("./mapObject"),a=i({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",defs:"defs",ellipse:"ellipse",g:"g",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},n);t.exports=a},{"./ReactElement":56,"./ReactElementValidator":57,"./ReactLegacyElement":65,"./mapObject":145}],44:[function(e,t){"use strict";var n=e("./AutoFocusMixin"),r=e("./ReactBrowserComponentMixin"),o=e("./ReactCompositeComponent"),i=e("./ReactElement"),a=e("./ReactDOM"),s=e("./keyMirror"),u=i.createFactory(a.button.type),c=s({onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0}),l=o.createClass({displayName:"ReactDOMButton",mixins:[n,r],render:function(){var e={};for(var t in this.props)!this.props.hasOwnProperty(t)||this.props.disabled&&c[t]||(e[t]=this.props[t]);return u(e,this.props.children)}});t.exports=l},{"./AutoFocusMixin":2,"./ReactBrowserComponentMixin":32,"./ReactCompositeComponent":40,"./ReactDOM":43,"./ReactElement":56,"./keyMirror":143}],45:[function(e,t){"use strict";function n(e){e&&(y(null==e.children||null==e.dangerouslySetInnerHTML),y(null==e.style||"object"==typeof e.style))}function r(e,t,n,r){var o=d.findReactContainerForID(e);if(o){var i=o.nodeType===O?o.ownerDocument:o;C(t,i)}r.getPutListenerQueue().enqueuePutListener(e,t,n)}function o(e){T.call(P,e)||(y(x.test(e)),P[e]=!0)}function i(e){o(e),this._tag=e,this.tagName=e.toUpperCase()}var a=e("./CSSPropertyOperations"),s=e("./DOMProperty"),u=e("./DOMPropertyOperations"),c=e("./ReactBrowserComponentMixin"),l=e("./ReactComponent"),p=e("./ReactBrowserEventEmitter"),d=e("./ReactMount"),f=e("./ReactMultiChild"),h=e("./ReactPerf"),m=e("./Object.assign"),v=e("./escapeTextForBrowser"),y=e("./invariant"),g=(e("./isEventSupported"),e("./keyOf")),E=(e("./monitorCodeUse"),p.deleteListener),C=p.listenTo,R=p.registrationNameModules,M={string:!0,number:!0},b=g({style:null}),O=1,D={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},x=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,P={},T={}.hasOwnProperty;i.displayName="ReactDOMComponent",i.Mixin={mountComponent:h.measure("ReactDOMComponent","mountComponent",function(e,t,r){l.Mixin.mountComponent.call(this,e,t,r),n(this.props);var o=D[this._tag]?"":"</"+this._tag+">";return this._createOpenTagMarkupAndPutListeners(t)+this._createContentMarkup(t)+o}),_createOpenTagMarkupAndPutListeners:function(e){var t=this.props,n="<"+this._tag;for(var o in t)if(t.hasOwnProperty(o)){var i=t[o];if(null!=i)if(R.hasOwnProperty(o))r(this._rootNodeID,o,i,e);else{o===b&&(i&&(i=t.style=m({},t.style)),i=a.createMarkupForStyles(i));var s=u.createMarkupForProperty(o,i);s&&(n+=" "+s)}}if(e.renderToStaticMarkup)return n+">";var c=u.createMarkupForID(this._rootNodeID);return n+" "+c+">"},_createContentMarkup:function(e){var t=this.props.dangerouslySetInnerHTML;if(null!=t){if(null!=t.__html)return t.__html}else{var n=M[typeof this.props.children]?this.props.children:null,r=null!=n?null:this.props.children;if(null!=n)return v(n);if(null!=r){var o=this.mountChildren(r,e);return o.join("")}}return""},receiveComponent:function(e,t){(e!==this._currentElement||null==e._owner)&&l.Mixin.receiveComponent.call(this,e,t)},updateComponent:h.measure("ReactDOMComponent","updateComponent",function(e,t){n(this._currentElement.props),l.Mixin.updateComponent.call(this,e,t),this._updateDOMProperties(t.props,e),this._updateDOMChildren(t.props,e)}),_updateDOMProperties:function(e,t){var n,o,i,a=this.props;for(n in e)if(!a.hasOwnProperty(n)&&e.hasOwnProperty(n))if(n===b){var u=e[n];for(o in u)u.hasOwnProperty(o)&&(i=i||{},i[o]="")}else R.hasOwnProperty(n)?E(this._rootNodeID,n):(s.isStandardName[n]||s.isCustomAttribute(n))&&l.BackendIDOperations.deletePropertyByID(this._rootNodeID,n);for(n in a){var c=a[n],p=e[n];if(a.hasOwnProperty(n)&&c!==p)if(n===b)if(c&&(c=a.style=m({},c)),p){for(o in p)!p.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(i=i||{},i[o]="");for(o in c)c.hasOwnProperty(o)&&p[o]!==c[o]&&(i=i||{},i[o]=c[o])}else i=c;else R.hasOwnProperty(n)?r(this._rootNodeID,n,c,t):(s.isStandardName[n]||s.isCustomAttribute(n))&&l.BackendIDOperations.updatePropertyByID(this._rootNodeID,n,c)}i&&l.BackendIDOperations.updateStylesByID(this._rootNodeID,i)},_updateDOMChildren:function(e,t){var n=this.props,r=M[typeof e.children]?e.children:null,o=M[typeof n.children]?n.children:null,i=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,a=n.dangerouslySetInnerHTML&&n.dangerouslySetInnerHTML.__html,s=null!=r?null:e.children,u=null!=o?null:n.children,c=null!=r||null!=i,p=null!=o||null!=a;null!=s&&null==u?this.updateChildren(null,t):c&&!p&&this.updateTextContent(""),null!=o?r!==o&&this.updateTextContent(""+o):null!=a?i!==a&&l.BackendIDOperations.updateInnerHTMLByID(this._rootNodeID,a):null!=u&&this.updateChildren(u,t)},unmountComponent:function(){this.unmountChildren(),p.deleteAllListeners(this._rootNodeID),l.Mixin.unmountComponent.call(this)}},m(i.prototype,l.Mixin,i.Mixin,f.Mixin,c),t.exports=i},{"./CSSPropertyOperations":6,"./DOMProperty":12,"./DOMPropertyOperations":13,"./Object.assign":29,"./ReactBrowserComponentMixin":32,"./ReactBrowserEventEmitter":33,"./ReactComponent":37,"./ReactMount":68,"./ReactMultiChild":69,"./ReactPerf":73,"./escapeTextForBrowser":120,"./invariant":137,"./isEventSupported":138,"./keyOf":144,"./monitorCodeUse":147}],46:[function(e,t){"use strict";var n=e("./EventConstants"),r=e("./LocalEventTrapMixin"),o=e("./ReactBrowserComponentMixin"),i=e("./ReactCompositeComponent"),a=e("./ReactElement"),s=e("./ReactDOM"),u=a.createFactory(s.form.type),c=i.createClass({displayName:"ReactDOMForm",mixins:[o,r],render:function(){return u(this.props)},componentDidMount:function(){this.trapBubbledEvent(n.topLevelTypes.topReset,"reset"),this.trapBubbledEvent(n.topLevelTypes.topSubmit,"submit")}});t.exports=c},{"./EventConstants":17,"./LocalEventTrapMixin":27,"./ReactBrowserComponentMixin":32,"./ReactCompositeComponent":40,"./ReactDOM":43,"./ReactElement":56}],47:[function(e,t){"use strict";var n=e("./CSSPropertyOperations"),r=e("./DOMChildrenOperations"),o=e("./DOMPropertyOperations"),i=e("./ReactMount"),a=e("./ReactPerf"),s=e("./invariant"),u=e("./setInnerHTML"),c={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},l={updatePropertyByID:a.measure("ReactDOMIDOperations","updatePropertyByID",function(e,t,n){var r=i.getNode(e);s(!c.hasOwnProperty(t)),null!=n?o.setValueForProperty(r,t,n):o.deleteValueForProperty(r,t)}),deletePropertyByID:a.measure("ReactDOMIDOperations","deletePropertyByID",function(e,t,n){var r=i.getNode(e);s(!c.hasOwnProperty(t)),o.deleteValueForProperty(r,t,n)}),updateStylesByID:a.measure("ReactDOMIDOperations","updateStylesByID",function(e,t){var r=i.getNode(e);n.setValueForStyles(r,t)}),updateInnerHTMLByID:a.measure("ReactDOMIDOperations","updateInnerHTMLByID",function(e,t){var n=i.getNode(e);u(n,t)}),updateTextContentByID:a.measure("ReactDOMIDOperations","updateTextContentByID",function(e,t){var n=i.getNode(e);r.updateTextContent(n,t)}),dangerouslyReplaceNodeWithMarkupByID:a.measure("ReactDOMIDOperations","dangerouslyReplaceNodeWithMarkupByID",function(e,t){var n=i.getNode(e);r.dangerouslyReplaceNodeWithMarkup(n,t)}),dangerouslyProcessChildrenUpdates:a.measure("ReactDOMIDOperations","dangerouslyProcessChildrenUpdates",function(e,t){for(var n=0;n<e.length;n++)e[n].parentNode=i.getNode(e[n].parentID);r.processUpdates(e,t)})};t.exports=l},{"./CSSPropertyOperations":6,"./DOMChildrenOperations":11,"./DOMPropertyOperations":13,"./ReactMount":68,"./ReactPerf":73,"./invariant":137,"./setInnerHTML":149}],48:[function(e,t){"use strict";var n=e("./EventConstants"),r=e("./LocalEventTrapMixin"),o=e("./ReactBrowserComponentMixin"),i=e("./ReactCompositeComponent"),a=e("./ReactElement"),s=e("./ReactDOM"),u=a.createFactory(s.img.type),c=i.createClass({displayName:"ReactDOMImg",tagName:"IMG",mixins:[o,r],render:function(){return u(this.props)},componentDidMount:function(){this.trapBubbledEvent(n.topLevelTypes.topLoad,"load"),this.trapBubbledEvent(n.topLevelTypes.topError,"error")}});t.exports=c},{"./EventConstants":17,"./LocalEventTrapMixin":27,"./ReactBrowserComponentMixin":32,"./ReactCompositeComponent":40,"./ReactDOM":43,"./ReactElement":56}],49:[function(e,t){"use strict";function n(){this.isMounted()&&this.forceUpdate()}var r=e("./AutoFocusMixin"),o=e("./DOMPropertyOperations"),i=e("./LinkedValueUtils"),a=e("./ReactBrowserComponentMixin"),s=e("./ReactCompositeComponent"),u=e("./ReactElement"),c=e("./ReactDOM"),l=e("./ReactMount"),p=e("./ReactUpdates"),d=e("./Object.assign"),f=e("./invariant"),h=u.createFactory(c.input.type),m={},v=s.createClass({displayName:"ReactDOMInput",mixins:[r,i.Mixin,a],getInitialState:function(){var e=this.props.defaultValue;
return{initialChecked:this.props.defaultChecked||!1,initialValue:null!=e?e:null}},render:function(){var e=d({},this.props);e.defaultChecked=null,e.defaultValue=null;var t=i.getValue(this);e.value=null!=t?t:this.state.initialValue;var n=i.getChecked(this);return e.checked=null!=n?n:this.state.initialChecked,e.onChange=this._handleChange,h(e,this.props.children)},componentDidMount:function(){var e=l.getID(this.getDOMNode());m[e]=this},componentWillUnmount:function(){var e=this.getDOMNode(),t=l.getID(e);delete m[t]},componentDidUpdate:function(){var e=this.getDOMNode();null!=this.props.checked&&o.setValueForProperty(e,"checked",this.props.checked||!1);var t=i.getValue(this);null!=t&&o.setValueForProperty(e,"value",""+t)},_handleChange:function(e){var t,r=i.getOnChange(this);r&&(t=r.call(this,e)),p.asap(n,this);var o=this.props.name;if("radio"===this.props.type&&null!=o){for(var a=this.getDOMNode(),s=a;s.parentNode;)s=s.parentNode;for(var u=s.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),c=0,d=u.length;d>c;c++){var h=u[c];if(h!==a&&h.form===a.form){var v=l.getID(h);f(v);var y=m[v];f(y),p.asap(n,y)}}}return t}});t.exports=v},{"./AutoFocusMixin":2,"./DOMPropertyOperations":13,"./LinkedValueUtils":26,"./Object.assign":29,"./ReactBrowserComponentMixin":32,"./ReactCompositeComponent":40,"./ReactDOM":43,"./ReactElement":56,"./ReactMount":68,"./ReactUpdates":88,"./invariant":137}],50:[function(e,t){"use strict";var n=e("./ReactBrowserComponentMixin"),r=e("./ReactCompositeComponent"),o=e("./ReactElement"),i=e("./ReactDOM"),a=(e("./warning"),o.createFactory(i.option.type)),s=r.createClass({displayName:"ReactDOMOption",mixins:[n],componentWillMount:function(){},render:function(){return a(this.props,this.props.children)}});t.exports=s},{"./ReactBrowserComponentMixin":32,"./ReactCompositeComponent":40,"./ReactDOM":43,"./ReactElement":56,"./warning":155}],51:[function(e,t){"use strict";function n(){this.isMounted()&&(this.setState({value:this._pendingValue}),this._pendingValue=0)}function r(e,t){if(null!=e[t])if(e.multiple){if(!Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be an array if `multiple` is true.")}else if(Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be a scalar value if `multiple` is false.")}function o(e,t){var n,r,o,i=e.props.multiple,a=null!=t?t:e.state.value,s=e.getDOMNode().options;if(i)for(n={},r=0,o=a.length;o>r;++r)n[""+a[r]]=!0;else n=""+a;for(r=0,o=s.length;o>r;r++){var u=i?n.hasOwnProperty(s[r].value):s[r].value===n;u!==s[r].selected&&(s[r].selected=u)}}var i=e("./AutoFocusMixin"),a=e("./LinkedValueUtils"),s=e("./ReactBrowserComponentMixin"),u=e("./ReactCompositeComponent"),c=e("./ReactElement"),l=e("./ReactDOM"),p=e("./ReactUpdates"),d=e("./Object.assign"),f=c.createFactory(l.select.type),h=u.createClass({displayName:"ReactDOMSelect",mixins:[i,a.Mixin,s],propTypes:{defaultValue:r,value:r},getInitialState:function(){return{value:this.props.defaultValue||(this.props.multiple?[]:"")}},componentWillMount:function(){this._pendingValue=null},componentWillReceiveProps:function(e){!this.props.multiple&&e.multiple?this.setState({value:[this.state.value]}):this.props.multiple&&!e.multiple&&this.setState({value:this.state.value[0]})},render:function(){var e=d({},this.props);return e.onChange=this._handleChange,e.value=null,f(e,this.props.children)},componentDidMount:function(){o(this,a.getValue(this))},componentDidUpdate:function(e){var t=a.getValue(this),n=!!e.multiple,r=!!this.props.multiple;(null!=t||n!==r)&&o(this,t)},_handleChange:function(e){var t,r=a.getOnChange(this);r&&(t=r.call(this,e));var o;if(this.props.multiple){o=[];for(var i=e.target.options,s=0,u=i.length;u>s;s++)i[s].selected&&o.push(i[s].value)}else o=e.target.value;return this._pendingValue=o,p.asap(n,this),t}});t.exports=h},{"./AutoFocusMixin":2,"./LinkedValueUtils":26,"./Object.assign":29,"./ReactBrowserComponentMixin":32,"./ReactCompositeComponent":40,"./ReactDOM":43,"./ReactElement":56,"./ReactUpdates":88}],52:[function(e,t){"use strict";function n(e,t,n,r){return e===n&&t===r}function r(e){var t=document.selection,n=t.createRange(),r=n.text.length,o=n.duplicate();o.moveToElementText(e),o.setEndPoint("EndToStart",n);var i=o.text.length,a=i+r;return{start:i,end:a}}function o(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var r=t.anchorNode,o=t.anchorOffset,i=t.focusNode,a=t.focusOffset,s=t.getRangeAt(0),u=n(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),c=u?0:s.toString().length,l=s.cloneRange();l.selectNodeContents(e),l.setEnd(s.startContainer,s.startOffset);var p=n(l.startContainer,l.startOffset,l.endContainer,l.endOffset),d=p?0:l.toString().length,f=d+c,h=document.createRange();h.setStart(r,o),h.setEnd(i,a);var m=h.collapsed;return{start:m?f:d,end:m?d:f}}function i(e,t){var n,r,o=document.selection.createRange().duplicate();"undefined"==typeof t.end?(n=t.start,r=n):t.start>t.end?(n=t.end,r=t.start):(n=t.start,r=t.end),o.moveToElementText(e),o.moveStart("character",n),o.setEndPoint("EndToStart",o),o.moveEnd("character",r-n),o.select()}function a(e,t){if(window.getSelection){var n=window.getSelection(),r=e[c()].length,o=Math.min(t.start,r),i="undefined"==typeof t.end?o:Math.min(t.end,r);if(!n.extend&&o>i){var a=i;i=o,o=a}var s=u(e,o),l=u(e,i);if(s&&l){var p=document.createRange();p.setStart(s.node,s.offset),n.removeAllRanges(),o>i?(n.addRange(p),n.extend(l.node,l.offset)):(p.setEnd(l.node,l.offset),n.addRange(p))}}}var s=e("./ExecutionEnvironment"),u=e("./getNodeForCharacterOffset"),c=e("./getTextContentAccessor"),l=s.canUseDOM&&document.selection,p={getOffsets:l?r:o,setOffsets:l?i:a};t.exports=p},{"./ExecutionEnvironment":23,"./getNodeForCharacterOffset":130,"./getTextContentAccessor":132}],53:[function(e,t){"use strict";function n(){this.isMounted()&&this.forceUpdate()}var r=e("./AutoFocusMixin"),o=e("./DOMPropertyOperations"),i=e("./LinkedValueUtils"),a=e("./ReactBrowserComponentMixin"),s=e("./ReactCompositeComponent"),u=e("./ReactElement"),c=e("./ReactDOM"),l=e("./ReactUpdates"),p=e("./Object.assign"),d=e("./invariant"),f=(e("./warning"),u.createFactory(c.textarea.type)),h=s.createClass({displayName:"ReactDOMTextarea",mixins:[r,i.Mixin,a],getInitialState:function(){var e=this.props.defaultValue,t=this.props.children;null!=t&&(d(null==e),Array.isArray(t)&&(d(t.length<=1),t=t[0]),e=""+t),null==e&&(e="");var n=i.getValue(this);return{initialValue:""+(null!=n?n:e)}},render:function(){var e=p({},this.props);return d(null==e.dangerouslySetInnerHTML),e.defaultValue=null,e.value=null,e.onChange=this._handleChange,f(e,this.state.initialValue)},componentDidUpdate:function(){var e=i.getValue(this);if(null!=e){var t=this.getDOMNode();o.setValueForProperty(t,"value",""+e)}},_handleChange:function(e){var t,r=i.getOnChange(this);return r&&(t=r.call(this,e)),l.asap(n,this),t}});t.exports=h},{"./AutoFocusMixin":2,"./DOMPropertyOperations":13,"./LinkedValueUtils":26,"./Object.assign":29,"./ReactBrowserComponentMixin":32,"./ReactCompositeComponent":40,"./ReactDOM":43,"./ReactElement":56,"./ReactUpdates":88,"./invariant":137,"./warning":155}],54:[function(e,t){"use strict";function n(){this.reinitializeTransaction()}var r=e("./ReactUpdates"),o=e("./Transaction"),i=e("./Object.assign"),a=e("./emptyFunction"),s={initialize:a,close:function(){p.isBatchingUpdates=!1}},u={initialize:a,close:r.flushBatchedUpdates.bind(r)},c=[u,s];i(n.prototype,o.Mixin,{getTransactionWrappers:function(){return c}});var l=new n,p={isBatchingUpdates:!1,batchedUpdates:function(e,t,n){var r=p.isBatchingUpdates;p.isBatchingUpdates=!0,r?e(t,n):l.perform(e,null,t,n)}};t.exports=p},{"./Object.assign":29,"./ReactUpdates":88,"./Transaction":104,"./emptyFunction":118}],55:[function(e,t){"use strict";function n(){O.EventEmitter.injectReactEventListener(b),O.EventPluginHub.injectEventPluginOrder(s),O.EventPluginHub.injectInstanceHandle(D),O.EventPluginHub.injectMount(x),O.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:w,EnterLeaveEventPlugin:u,ChangeEventPlugin:o,CompositionEventPlugin:a,MobileSafariClickEventPlugin:p,SelectEventPlugin:P,BeforeInputEventPlugin:r}),O.NativeComponent.injectGenericComponentClass(m),O.NativeComponent.injectComponentClasses({button:v,form:y,img:g,input:E,option:C,select:R,textarea:M,html:S("html"),head:S("head"),body:S("body")}),O.CompositeComponent.injectMixin(d),O.DOMProperty.injectDOMPropertyConfig(l),O.DOMProperty.injectDOMPropertyConfig(_),O.EmptyComponent.injectEmptyComponent("noscript"),O.Updates.injectReconcileTransaction(f.ReactReconcileTransaction),O.Updates.injectBatchingStrategy(h),O.RootIndex.injectCreateReactRootIndex(c.canUseDOM?i.createReactRootIndex:T.createReactRootIndex),O.Component.injectEnvironment(f)}var r=e("./BeforeInputEventPlugin"),o=e("./ChangeEventPlugin"),i=e("./ClientReactRootIndex"),a=e("./CompositionEventPlugin"),s=e("./DefaultEventPluginOrder"),u=e("./EnterLeaveEventPlugin"),c=e("./ExecutionEnvironment"),l=e("./HTMLDOMPropertyConfig"),p=e("./MobileSafariClickEventPlugin"),d=e("./ReactBrowserComponentMixin"),f=e("./ReactComponentBrowserEnvironment"),h=e("./ReactDefaultBatchingStrategy"),m=e("./ReactDOMComponent"),v=e("./ReactDOMButton"),y=e("./ReactDOMForm"),g=e("./ReactDOMImg"),E=e("./ReactDOMInput"),C=e("./ReactDOMOption"),R=e("./ReactDOMSelect"),M=e("./ReactDOMTextarea"),b=e("./ReactEventListener"),O=e("./ReactInjection"),D=e("./ReactInstanceHandles"),x=e("./ReactMount"),P=e("./SelectEventPlugin"),T=e("./ServerReactRootIndex"),w=e("./SimpleEventPlugin"),_=e("./SVGDOMPropertyConfig"),S=e("./createFullPageComponent");t.exports={inject:n}},{"./BeforeInputEventPlugin":3,"./ChangeEventPlugin":8,"./ClientReactRootIndex":9,"./CompositionEventPlugin":10,"./DefaultEventPluginOrder":15,"./EnterLeaveEventPlugin":16,"./ExecutionEnvironment":23,"./HTMLDOMPropertyConfig":24,"./MobileSafariClickEventPlugin":28,"./ReactBrowserComponentMixin":32,"./ReactComponentBrowserEnvironment":38,"./ReactDOMButton":44,"./ReactDOMComponent":45,"./ReactDOMForm":46,"./ReactDOMImg":48,"./ReactDOMInput":49,"./ReactDOMOption":50,"./ReactDOMSelect":51,"./ReactDOMTextarea":53,"./ReactDefaultBatchingStrategy":54,"./ReactEventListener":61,"./ReactInjection":62,"./ReactInstanceHandles":64,"./ReactMount":68,"./SVGDOMPropertyConfig":89,"./SelectEventPlugin":90,"./ServerReactRootIndex":91,"./SimpleEventPlugin":92,"./createFullPageComponent":113}],56:[function(e,t){"use strict";var n=e("./ReactContext"),r=e("./ReactCurrentOwner"),o=(e("./warning"),{key:!0,ref:!0}),i=function(e,t,n,r,o,i){this.type=e,this.key=t,this.ref=n,this._owner=r,this._context=o,this.props=i};i.prototype={_isReactElement:!0},i.createElement=function(e,t,a){var s,u={},c=null,l=null;if(null!=t){l=void 0===t.ref?null:t.ref,c=null==t.key?null:""+t.key;for(s in t)t.hasOwnProperty(s)&&!o.hasOwnProperty(s)&&(u[s]=t[s])}var p=arguments.length-2;if(1===p)u.children=a;else if(p>1){for(var d=Array(p),f=0;p>f;f++)d[f]=arguments[f+2];u.children=d}if(e&&e.defaultProps){var h=e.defaultProps;for(s in h)"undefined"==typeof u[s]&&(u[s]=h[s])}return new i(e,c,l,r.current,n.current,u)},i.createFactory=function(e){var t=i.createElement.bind(null,e);return t.type=e,t},i.cloneAndReplaceProps=function(e,t){var n=new i(e.type,e.key,e.ref,e._owner,e._context,t);return n},i.isValidElement=function(e){var t=!(!e||!e._isReactElement);return t},t.exports=i},{"./ReactContext":41,"./ReactCurrentOwner":42,"./warning":155}],57:[function(e,t){"use strict";function n(){var e=p.current;return e&&e.constructor.displayName||void 0}function r(e,t){e._store.validated||null!=e.key||(e._store.validated=!0,i("react_key_warning",'Each child in an array should have a unique "key" prop.',e,t))}function o(e,t,n){v.test(e)&&i("react_numeric_key_warning","Child objects should have non-numeric keys so ordering is preserved.",t,n)}function i(e,t,r,o){var i=n(),a=o.displayName,s=i||a,u=f[e];if(!u.hasOwnProperty(s)){u[s]=!0,t+=i?" Check the render method of "+i+".":" Check the renderComponent call using <"+a+">.";var c=null;r._owner&&r._owner!==p.current&&(c=r._owner.constructor.displayName,t+=" It was passed a child from "+c+"."),t+=" See http://fb.me/react-warning-keys for more information.",d(e,{component:s,componentOwner:c}),console.warn(t)}}function a(){var e=n()||"";h.hasOwnProperty(e)||(h[e]=!0,d("react_object_map_children"))}function s(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++){var i=e[n];c.isValidElement(i)&&r(i,t)}else if(c.isValidElement(e))e._store.validated=!0;else if(e&&"object"==typeof e){a();for(var s in e)o(s,e[s],t)}}function u(e,t,n,r){for(var o in t)if(t.hasOwnProperty(o)){var i;try{i=t[o](n,o,e,r)}catch(a){i=a}i instanceof Error&&!(i.message in m)&&(m[i.message]=!0,d("react_failed_descriptor_type_check",{message:i.message}))}}var c=e("./ReactElement"),l=e("./ReactPropTypeLocations"),p=e("./ReactCurrentOwner"),d=e("./monitorCodeUse"),f=(e("./warning"),{react_key_warning:{},react_numeric_key_warning:{}}),h={},m={},v=/^\d+$/,y={createElement:function(e){var t=c.createElement.apply(this,arguments);if(null==t)return t;for(var n=2;n<arguments.length;n++)s(arguments[n],e);if(e){var r=e.displayName;e.propTypes&&u(r,e.propTypes,t.props,l.prop),e.contextTypes&&u(r,e.contextTypes,t._context,l.context)}return t},createFactory:function(e){var t=y.createElement.bind(null,e);return t.type=e,t}};t.exports=y},{"./ReactCurrentOwner":42,"./ReactElement":56,"./ReactPropTypeLocations":76,"./monitorCodeUse":147,"./warning":155}],58:[function(e,t){"use strict";function n(){return u(a),a()}function r(e){c[e]=!0}function o(e){delete c[e]}function i(e){return c[e]}var a,s=e("./ReactElement"),u=e("./invariant"),c={},l={injectEmptyComponent:function(e){a=s.createFactory(e)}},p={deregisterNullComponentID:o,getEmptyComponent:n,injection:l,isNullComponentID:i,registerNullComponentID:r};t.exports=p},{"./ReactElement":56,"./invariant":137}],59:[function(e,t){"use strict";var n={guard:function(e){return e}};t.exports=n},{}],60:[function(e,t){"use strict";function n(e){r.enqueueEvents(e),r.processEventQueue()}var r=e("./EventPluginHub"),o={handleTopLevel:function(e,t,o,i){var a=r.extractEvents(e,t,o,i);n(a)}};t.exports=o},{"./EventPluginHub":19}],61:[function(e,t){"use strict";function n(e){var t=l.getID(e),n=c.getReactRootIDFromNodeID(t),r=l.findReactContainerForID(n),o=l.getFirstReactDOM(r);return o}function r(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function o(e){for(var t=l.getFirstReactDOM(f(e.nativeEvent))||window,r=t;r;)e.ancestors.push(r),r=n(r);for(var o=0,i=e.ancestors.length;i>o;o++){t=e.ancestors[o];var a=l.getID(t)||"";m._handleTopLevel(e.topLevelType,t,a,e.nativeEvent)}}function i(e){var t=h(window);e(t)}var a=e("./EventListener"),s=e("./ExecutionEnvironment"),u=e("./PooledClass"),c=e("./ReactInstanceHandles"),l=e("./ReactMount"),p=e("./ReactUpdates"),d=e("./Object.assign"),f=e("./getEventTarget"),h=e("./getUnboundedScrollPosition");d(r.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),u.addPoolingTo(r,u.twoArgumentPooler);var m={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:s.canUseDOM?window:null,setHandleTopLevel:function(e){m._handleTopLevel=e},setEnabled:function(e){m._enabled=!!e},isEnabled:function(){return m._enabled},trapBubbledEvent:function(e,t,n){var r=n;return r?a.listen(r,t,m.dispatchEvent.bind(null,e)):void 0},trapCapturedEvent:function(e,t,n){var r=n;return r?a.capture(r,t,m.dispatchEvent.bind(null,e)):void 0},monitorScrollValue:function(e){var t=i.bind(null,e);a.listen(window,"scroll",t),a.listen(window,"resize",t)},dispatchEvent:function(e,t){if(m._enabled){var n=r.getPooled(e,t);try{p.batchedUpdates(o,n)}finally{r.release(n)}}}};t.exports=m},{"./EventListener":18,"./ExecutionEnvironment":23,"./Object.assign":29,"./PooledClass":30,"./ReactInstanceHandles":64,"./ReactMount":68,"./ReactUpdates":88,"./getEventTarget":128,"./getUnboundedScrollPosition":133}],62:[function(e,t){"use strict";var n=e("./DOMProperty"),r=e("./EventPluginHub"),o=e("./ReactComponent"),i=e("./ReactCompositeComponent"),a=e("./ReactEmptyComponent"),s=e("./ReactBrowserEventEmitter"),u=e("./ReactNativeComponent"),c=e("./ReactPerf"),l=e("./ReactRootIndex"),p=e("./ReactUpdates"),d={Component:o.injection,CompositeComponent:i.injection,DOMProperty:n.injection,EmptyComponent:a.injection,EventPluginHub:r.injection,EventEmitter:s.injection,NativeComponent:u.injection,Perf:c.injection,RootIndex:l.injection,Updates:p.injection};t.exports=d},{"./DOMProperty":12,"./EventPluginHub":19,"./ReactBrowserEventEmitter":33,"./ReactComponent":37,"./ReactCompositeComponent":40,"./ReactEmptyComponent":58,"./ReactNativeComponent":71,"./ReactPerf":73,"./ReactRootIndex":80,"./ReactUpdates":88}],63:[function(e,t){"use strict";function n(e){return o(document.documentElement,e)}var r=e("./ReactDOMSelection"),o=e("./containsNode"),i=e("./focusNode"),a=e("./getActiveElement"),s={hasSelectionCapabilities:function(e){return e&&("INPUT"===e.nodeName&&"text"===e.type||"TEXTAREA"===e.nodeName||"true"===e.contentEditable)},getSelectionInformation:function(){var e=a();return{focusedElem:e,selectionRange:s.hasSelectionCapabilities(e)?s.getSelection(e):null}},restoreSelection:function(e){var t=a(),r=e.focusedElem,o=e.selectionRange;t!==r&&n(r)&&(s.hasSelectionCapabilities(r)&&s.setSelection(r,o),i(r))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&"INPUT"===e.nodeName){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=r.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,o=t.end;if("undefined"==typeof o&&(o=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(o,e.value.length);else if(document.selection&&"INPUT"===e.nodeName){var i=e.createTextRange();i.collapse(!0),i.moveStart("character",n),i.moveEnd("character",o-n),i.select()}else r.setOffsets(e,t)}};t.exports=s},{"./ReactDOMSelection":52,"./containsNode":111,"./focusNode":122,"./getActiveElement":124}],64:[function(e,t){"use strict";function n(e){return d+e.toString(36)}function r(e,t){return e.charAt(t)===d||t===e.length}function o(e){return""===e||e.charAt(0)===d&&e.charAt(e.length-1)!==d}function i(e,t){return 0===t.indexOf(e)&&r(t,e.length)}function a(e){return e?e.substr(0,e.lastIndexOf(d)):""}function s(e,t){if(p(o(e)&&o(t)),p(i(e,t)),e===t)return e;for(var n=e.length+f,a=n;a<t.length&&!r(t,a);a++);return t.substr(0,a)}function u(e,t){var n=Math.min(e.length,t.length);if(0===n)return"";for(var i=0,a=0;n>=a;a++)if(r(e,a)&&r(t,a))i=a;else if(e.charAt(a)!==t.charAt(a))break;var s=e.substr(0,i);return p(o(s)),s}function c(e,t,n,r,o,u){e=e||"",t=t||"",p(e!==t);var c=i(t,e);p(c||i(e,t));for(var l=0,d=c?a:s,f=e;;f=d(f,t)){var m;if(o&&f===e||u&&f===t||(m=n(f,c,r)),m===!1||f===t)break;p(l++<h)}}var l=e("./ReactRootIndex"),p=e("./invariant"),d=".",f=d.length,h=100,m={createReactRootID:function(){return n(l.createReactRootIndex())},createReactID:function(e,t){return e+t},getReactRootIDFromNodeID:function(e){if(e&&e.charAt(0)===d&&e.length>1){var t=e.indexOf(d,1);return t>-1?e.substr(0,t):e}return null},traverseEnterLeave:function(e,t,n,r,o){var i=u(e,t);i!==e&&c(e,i,n,r,!1,!0),i!==t&&c(i,t,n,o,!0,!1)},traverseTwoPhase:function(e,t,n){e&&(c("",e,t,n,!0,!1),c(e,"",t,n,!1,!0))},traverseAncestors:function(e,t,n){c("",e,t,n,!0,!1)},_getFirstCommonAncestorID:u,_getNextDescendantID:s,isAncestorIDOf:i,SEPARATOR:d};t.exports=m},{"./ReactRootIndex":80,"./invariant":137}],65:[function(e,t){"use strict";function n(e,t){if("function"==typeof t)for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];if("function"==typeof r){var o=r.bind(t);for(var i in r)r.hasOwnProperty(i)&&(o[i]=r[i]);e[n]=o}else e[n]=r}}var r=(e("./ReactCurrentOwner"),e("./invariant")),o=(e("./monitorCodeUse"),e("./warning"),{}),i={},a={};a.wrapCreateFactory=function(e){var t=function(t){return"function"!=typeof t?e(t):t.isReactNonLegacyFactory?e(t.type):t.isReactLegacyFactory?e(t.type):t};return t},a.wrapCreateElement=function(e){var t=function(t){if("function"!=typeof t)return e.apply(this,arguments);var n;return t.isReactNonLegacyFactory?(n=Array.prototype.slice.call(arguments,0),n[0]=t.type,e.apply(this,n)):t.isReactLegacyFactory?(t._isMockFunction&&(t.type._mockedReactClassConstructor=t),n=Array.prototype.slice.call(arguments,0),n[0]=t.type,e.apply(this,n)):t.apply(null,Array.prototype.slice.call(arguments,1))};return t},a.wrapFactory=function(e){r("function"==typeof e);var t=function(){return e.apply(this,arguments)};return n(t,e.type),t.isReactLegacyFactory=o,t.type=e.type,t},a.markNonLegacyFactory=function(e){return e.isReactNonLegacyFactory=i,e},a.isValidFactory=function(e){return"function"==typeof e&&e.isReactLegacyFactory===o},a.isValidClass=function(e){return a.isValidFactory(e)},a._isLegacyCallWarningEnabled=!0,t.exports=a},{"./ReactCurrentOwner":42,"./invariant":137,"./monitorCodeUse":147,"./warning":155}],66:[function(e,t){"use strict";function n(e,t){this.value=e,this.requestChange=t}function r(e){var t={value:"undefined"==typeof e?o.PropTypes.any.isRequired:e.isRequired,requestChange:o.PropTypes.func.isRequired};return o.PropTypes.shape(t)}var o=e("./React");n.PropTypes={link:r},t.exports=n},{"./React":31}],67:[function(e,t){"use strict";var n=e("./adler32"),r={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=n(e);return e.replace(">"," "+r.CHECKSUM_ATTR_NAME+'="'+t+'">')},canReuseMarkup:function(e,t){var o=t.getAttribute(r.CHECKSUM_ATTR_NAME);o=o&&parseInt(o,10);var i=n(e);return i===o}};t.exports=r},{"./adler32":107}],68:[function(e,t){"use strict";function n(e){var t=E(e);return t&&I.getID(t)}function r(e){var t=o(e);if(t)if(x.hasOwnProperty(t)){var n=x[t];n!==e&&(R(!s(n,t)),x[t]=e)}else x[t]=e;return t}function o(e){return e&&e.getAttribute&&e.getAttribute(D)||""}function i(e,t){var n=o(e);n!==t&&delete x[n],e.setAttribute(D,t),x[t]=e}function a(e){return x.hasOwnProperty(e)&&s(x[e],e)||(x[e]=I.findReactNodeByID(e)),x[e]}function s(e,t){if(e){R(o(e)===t);var n=I.findReactContainerForID(t);if(n&&y(n,e))return!0}return!1}function u(e){delete x[e]}function c(e){var t=x[e];return t&&s(t,e)?void(N=t):!1}function l(e){N=null,m.traverseAncestors(e,c);var t=N;return N=null,t}var p=e("./DOMProperty"),d=e("./ReactBrowserEventEmitter"),f=(e("./ReactCurrentOwner"),e("./ReactElement")),h=e("./ReactLegacyElement"),m=e("./ReactInstanceHandles"),v=e("./ReactPerf"),y=e("./containsNode"),g=e("./deprecated"),E=e("./getReactRootElementInContainer"),C=e("./instantiateReactComponent"),R=e("./invariant"),M=e("./shouldUpdateReactComponent"),b=(e("./warning"),h.wrapCreateElement(f.createElement)),O=m.SEPARATOR,D=p.ID_ATTRIBUTE_NAME,x={},P=1,T=9,w={},_={},S=[],N=null,I={_instancesByReactRootID:w,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,r){var o=t.props;return I.scrollMonitor(n,function(){e.replaceProps(o,r)}),e},_registerComponent:function(e,t){R(t&&(t.nodeType===P||t.nodeType===T)),d.ensureScrollValueMonitoring();var n=I.registerContainer(t);return w[n]=e,n},_renderNewRootComponent:v.measure("ReactMount","_renderNewRootComponent",function(e,t,n){var r=C(e,null),o=I._registerComponent(r,t);return r.mountComponentIntoNode(o,t,n),r}),render:function(e,t,r){R(f.isValidElement(e));var o=w[n(t)];if(o){var i=o._currentElement;if(M(i,e))return I._updateRootComponent(o,e,t,r);I.unmountComponentAtNode(t)}var a=E(t),s=a&&I.isRenderedByReact(a),u=s&&!o,c=I._renderNewRootComponent(e,t,u);return r&&r.call(c),c},constructAndRenderComponent:function(e,t,n){var r=b(e,t);return I.render(r,n)},constructAndRenderComponentByID:function(e,t,n){var r=document.getElementById(n);return R(r),I.constructAndRenderComponent(e,t,r)},registerContainer:function(e){var t=n(e);return t&&(t=m.getReactRootIDFromNodeID(t)),t||(t=m.createReactRootID()),_[t]=e,t},unmountComponentAtNode:function(e){var t=n(e),r=w[t];return r?(I.unmountComponentFromNode(r,e),delete w[t],delete _[t],!0):!1},unmountComponentFromNode:function(e,t){for(e.unmountComponent(),t.nodeType===T&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)},findReactContainerForID:function(e){var t=m.getReactRootIDFromNodeID(e),n=_[t];return n},findReactNodeByID:function(e){var t=I.findReactContainerForID(e);return I.findComponentRoot(t,e)},isRenderedByReact:function(e){if(1!==e.nodeType)return!1;var t=I.getID(e);return t?t.charAt(0)===O:!1},getFirstReactDOM:function(e){for(var t=e;t&&t.parentNode!==t;){if(I.isRenderedByReact(t))return t;t=t.parentNode}return null},findComponentRoot:function(e,t){var n=S,r=0,o=l(t)||e;for(n[0]=o.firstChild,n.length=1;r<n.length;){for(var i,a=n[r++];a;){var s=I.getID(a);s?t===s?i=a:m.isAncestorIDOf(s,t)&&(n.length=r=0,n.push(a.firstChild)):n.push(a.firstChild),a=a.nextSibling}if(i)return n.length=0,i}n.length=0,R(!1)},getReactRootID:n,getID:r,setID:i,getNode:a,purgeID:u};I.renderComponent=g("ReactMount","renderComponent","render",this,I.render),t.exports=I},{"./DOMProperty":12,"./ReactBrowserEventEmitter":33,"./ReactCurrentOwner":42,"./ReactElement":56,"./ReactInstanceHandles":64,"./ReactLegacyElement":65,"./ReactPerf":73,"./containsNode":111,"./deprecated":117,"./getReactRootElementInContainer":131,"./instantiateReactComponent":136,"./invariant":137,"./shouldUpdateReactComponent":151,"./warning":155}],69:[function(e,t){"use strict";function n(e,t,n){h.push({parentID:e,parentNode:null,type:c.INSERT_MARKUP,markupIndex:m.push(t)-1,textContent:null,fromIndex:null,toIndex:n})}function r(e,t,n){h.push({parentID:e,parentNode:null,type:c.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:t,toIndex:n})}function o(e,t){h.push({parentID:e,parentNode:null,type:c.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:t,toIndex:null})}function i(e,t){h.push({parentID:e,parentNode:null,type:c.TEXT_CONTENT,markupIndex:null,textContent:t,fromIndex:null,toIndex:null})}function a(){h.length&&(u.BackendIDOperations.dangerouslyProcessChildrenUpdates(h,m),s())}function s(){h.length=0,m.length=0}var u=e("./ReactComponent"),c=e("./ReactMultiChildUpdateTypes"),l=e("./flattenChildren"),p=e("./instantiateReactComponent"),d=e("./shouldUpdateReactComponent"),f=0,h=[],m=[],v={Mixin:{mountChildren:function(e,t){var n=l(e),r=[],o=0;this._renderedChildren=n;for(var i in n){var a=n[i];if(n.hasOwnProperty(i)){var s=p(a,null);n[i]=s;var u=this._rootNodeID+i,c=s.mountComponent(u,t,this._mountDepth+1);s._mountIndex=o,r.push(c),o++}}return r},updateTextContent:function(e){f++;var t=!0;try{var n=this._renderedChildren;for(var r in n)n.hasOwnProperty(r)&&this._unmountChildByName(n[r],r);this.setTextContent(e),t=!1}finally{f--,f||(t?s():a())}},updateChildren:function(e,t){f++;var n=!0;try{this._updateChildren(e,t),n=!1}finally{f--,f||(n?s():a())}},_updateChildren:function(e,t){var n=l(e),r=this._renderedChildren;if(n||r){var o,i=0,a=0;for(o in n)if(n.hasOwnProperty(o)){var s=r&&r[o],u=s&&s._currentElement,c=n[o];if(d(u,c))this.moveChild(s,a,i),i=Math.max(s._mountIndex,i),s.receiveComponent(c,t),s._mountIndex=a;else{s&&(i=Math.max(s._mountIndex,i),this._unmountChildByName(s,o));var f=p(c,null);this._mountChildByNameAtIndex(f,o,a,t)}a++}for(o in r)!r.hasOwnProperty(o)||n&&n[o]||this._unmountChildByName(r[o],o)}},unmountChildren:function(){var e=this._renderedChildren;for(var t in e){var n=e[t];n.unmountComponent&&n.unmountComponent()}this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&r(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){n(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){o(this._rootNodeID,e._mountIndex)},setTextContent:function(e){i(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,r){var o=this._rootNodeID+t,i=e.mountComponent(o,r,this._mountDepth+1);e._mountIndex=n,this.createChild(e,i),this._renderedChildren=this._renderedChildren||{},this._renderedChildren[t]=e},_unmountChildByName:function(e,t){this.removeChild(e),e._mountIndex=null,e.unmountComponent(),delete this._renderedChildren[t]}}};t.exports=v},{"./ReactComponent":37,"./ReactMultiChildUpdateTypes":70,"./flattenChildren":121,"./instantiateReactComponent":136,"./shouldUpdateReactComponent":151}],70:[function(e,t){"use strict";var n=e("./keyMirror"),r=n({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null});t.exports=r},{"./keyMirror":143}],71:[function(e,t){"use strict";function n(e,t,n){var r=a[e];return null==r?(o(i),new i(e,t)):n===e?(o(i),new i(e,t)):new r.type(t)}var r=e("./Object.assign"),o=e("./invariant"),i=null,a={},s={injectGenericComponentClass:function(e){i=e},injectComponentClasses:function(e){r(a,e)}},u={createInstanceForTag:n,injection:s};t.exports=u},{"./Object.assign":29,"./invariant":137}],72:[function(e,t){"use strict";var n=e("./emptyObject"),r=e("./invariant"),o={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,n){r(o.isValidOwner(n)),n.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,n){r(o.isValidOwner(n)),n.refs[t]===e&&n.detachRef(t)},Mixin:{construct:function(){this.refs=n},attachRef:function(e,t){r(t.isOwnedBy(this));var o=this.refs===n?this.refs={}:this.refs;o[e]=t},detachRef:function(e){delete this.refs[e]}}};t.exports=o},{"./emptyObject":119,"./invariant":137}],73:[function(e,t){"use strict";function n(e,t,n){return n}var r={enableMeasure:!1,storedMeasure:n,measure:function(e,t,n){return n},injection:{injectMeasure:function(e){r.storedMeasure=e}}};t.exports=r},{}],74:[function(e,t){"use strict";function n(e){return function(t,n,r){t[n]=t.hasOwnProperty(n)?e(t[n],r):r}}function r(e,t){for(var n in t)if(t.hasOwnProperty(n)){var r=c[n];r&&c.hasOwnProperty(n)?r(e,n,t[n]):e.hasOwnProperty(n)||(e[n]=t[n])}return e}var o=e("./Object.assign"),i=e("./emptyFunction"),a=e("./invariant"),s=e("./joinClasses"),u=(e("./warning"),n(function(e,t){return o({},t,e)})),c={children:i,className:n(s),style:u},l={TransferStrategies:c,mergeProps:function(e,t){return r(o({},e),t)},Mixin:{transferPropsTo:function(e){return a(e._owner===this),r(e.props,this.props),e}}};t.exports=l},{"./Object.assign":29,"./emptyFunction":118,"./invariant":137,"./joinClasses":142,"./warning":155}],75:[function(e,t){"use strict";var n={};t.exports=n},{}],76:[function(e,t){"use strict";var n=e("./keyMirror"),r=n({prop:null,context:null,childContext:null});t.exports=r},{"./keyMirror":143}],77:[function(e,t){"use strict";function n(e){function t(t,n,r,o,i){if(o=o||C,null!=n[r])return e(n,r,o,i);var a=y[i];return t?new Error("Required "+a+" `"+r+"` was not specified in "+("`"+o+"`.")):void 0}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function r(e){function t(t,n,r,o){var i=t[n],a=h(i);if(a!==e){var s=y[o],u=m(i);return new Error("Invalid "+s+" `"+n+"` of type `"+u+"` "+("supplied to `"+r+"`, expected `"+e+"`."))}}return n(t)}function o(){return n(E.thatReturns())}function i(e){function t(t,n,r,o){var i=t[n];if(!Array.isArray(i)){var a=y[o],s=h(i);return new Error("Invalid "+a+" `"+n+"` of type "+("`"+s+"` supplied to `"+r+"`, expected an array."))}for(var u=0;u<i.length;u++){var c=e(i,u,r,o);if(c instanceof Error)return c}}return n(t)}function a(){function e(e,t,n,r){if(!v.isValidElement(e[t])){var o=y[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactElement."))}}return n(e)}function s(e){function t(t,n,r,o){if(!(t[n]instanceof e)){var i=y[o],a=e.name||C;return new Error("Invalid "+i+" `"+n+"` supplied to "+("`"+r+"`, expected instance of `"+a+"`."))}}return n(t)}function u(e){function t(t,n,r,o){for(var i=t[n],a=0;a<e.length;a++)if(i===e[a])return;var s=y[o],u=JSON.stringify(e);return new Error("Invalid "+s+" `"+n+"` of value `"+i+"` "+("supplied to `"+r+"`, expected one of "+u+"."))}return n(t)}function c(e){function t(t,n,r,o){var i=t[n],a=h(i);
if("object"!==a){var s=y[o];return new Error("Invalid "+s+" `"+n+"` of type "+("`"+a+"` supplied to `"+r+"`, expected an object."))}for(var u in i)if(i.hasOwnProperty(u)){var c=e(i,u,r,o);if(c instanceof Error)return c}}return n(t)}function l(e){function t(t,n,r,o){for(var i=0;i<e.length;i++){var a=e[i];if(null==a(t,n,r,o))return}var s=y[o];return new Error("Invalid "+s+" `"+n+"` supplied to "+("`"+r+"`."))}return n(t)}function p(){function e(e,t,n,r){if(!f(e[t])){var o=y[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactNode."))}}return n(e)}function d(e){function t(t,n,r,o){var i=t[n],a=h(i);if("object"!==a){var s=y[o];return new Error("Invalid "+s+" `"+n+"` of type `"+a+"` "+("supplied to `"+r+"`, expected `object`."))}for(var u in e){var c=e[u];if(c){var l=c(i,u,r,o);if(l)return l}}}return n(t,"expected `object`")}function f(e){switch(typeof e){case"number":case"string":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(f);if(v.isValidElement(e))return!0;for(var t in e)if(!f(e[t]))return!1;return!0;default:return!1}}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function m(e){var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}var v=e("./ReactElement"),y=e("./ReactPropTypeLocationNames"),g=e("./deprecated"),E=e("./emptyFunction"),C="<<anonymous>>",R=a(),M=p(),b={array:r("array"),bool:r("boolean"),func:r("function"),number:r("number"),object:r("object"),string:r("string"),any:o(),arrayOf:i,element:R,instanceOf:s,node:M,objectOf:c,oneOf:u,oneOfType:l,shape:d,component:g("React.PropTypes","component","element",this,R),renderable:g("React.PropTypes","renderable","node",this,M)};t.exports=b},{"./ReactElement":56,"./ReactPropTypeLocationNames":75,"./deprecated":117,"./emptyFunction":118}],78:[function(e,t){"use strict";function n(){this.listenersToPut=[]}var r=e("./PooledClass"),o=e("./ReactBrowserEventEmitter"),i=e("./Object.assign");i(n.prototype,{enqueuePutListener:function(e,t,n){this.listenersToPut.push({rootNodeID:e,propKey:t,propValue:n})},putListeners:function(){for(var e=0;e<this.listenersToPut.length;e++){var t=this.listenersToPut[e];o.putListener(t.rootNodeID,t.propKey,t.propValue)}},reset:function(){this.listenersToPut.length=0},destructor:function(){this.reset()}}),r.addPoolingTo(n),t.exports=n},{"./Object.assign":29,"./PooledClass":30,"./ReactBrowserEventEmitter":33}],79:[function(e,t){"use strict";function n(){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=r.getPooled(null),this.putListenerQueue=s.getPooled()}var r=e("./CallbackQueue"),o=e("./PooledClass"),i=e("./ReactBrowserEventEmitter"),a=e("./ReactInputSelection"),s=e("./ReactPutListenerQueue"),u=e("./Transaction"),c=e("./Object.assign"),l={initialize:a.getSelectionInformation,close:a.restoreSelection},p={initialize:function(){var e=i.isEnabled();return i.setEnabled(!1),e},close:function(e){i.setEnabled(e)}},d={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},f={initialize:function(){this.putListenerQueue.reset()},close:function(){this.putListenerQueue.putListeners()}},h=[f,l,p,d],m={getTransactionWrappers:function(){return h},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){r.release(this.reactMountReady),this.reactMountReady=null,s.release(this.putListenerQueue),this.putListenerQueue=null}};c(n.prototype,u.Mixin,m),o.addPoolingTo(n),t.exports=n},{"./CallbackQueue":7,"./Object.assign":29,"./PooledClass":30,"./ReactBrowserEventEmitter":33,"./ReactInputSelection":63,"./ReactPutListenerQueue":78,"./Transaction":104}],80:[function(e,t){"use strict";var n={injectCreateReactRootIndex:function(e){r.createReactRootIndex=e}},r={createReactRootIndex:null,injection:n};t.exports=r},{}],81:[function(e,t){"use strict";function n(e){c(o.isValidElement(e));var t;try{var n=i.createReactRootID();return t=s.getPooled(!1),t.perform(function(){var r=u(e,null),o=r.mountComponent(n,t,0);return a.addChecksumToMarkup(o)},null)}finally{s.release(t)}}function r(e){c(o.isValidElement(e));var t;try{var n=i.createReactRootID();return t=s.getPooled(!0),t.perform(function(){var r=u(e,null);return r.mountComponent(n,t,0)},null)}finally{s.release(t)}}var o=e("./ReactElement"),i=e("./ReactInstanceHandles"),a=e("./ReactMarkupChecksum"),s=e("./ReactServerRenderingTransaction"),u=e("./instantiateReactComponent"),c=e("./invariant");t.exports={renderToString:n,renderToStaticMarkup:r}},{"./ReactElement":56,"./ReactInstanceHandles":64,"./ReactMarkupChecksum":67,"./ReactServerRenderingTransaction":82,"./instantiateReactComponent":136,"./invariant":137}],82:[function(e,t){"use strict";function n(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=o.getPooled(null),this.putListenerQueue=i.getPooled()}var r=e("./PooledClass"),o=e("./CallbackQueue"),i=e("./ReactPutListenerQueue"),a=e("./Transaction"),s=e("./Object.assign"),u=e("./emptyFunction"),c={initialize:function(){this.reactMountReady.reset()},close:u},l={initialize:function(){this.putListenerQueue.reset()},close:u},p=[l,c],d={getTransactionWrappers:function(){return p},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){o.release(this.reactMountReady),this.reactMountReady=null,i.release(this.putListenerQueue),this.putListenerQueue=null}};s(n.prototype,a.Mixin,d),r.addPoolingTo(n),t.exports=n},{"./CallbackQueue":7,"./Object.assign":29,"./PooledClass":30,"./ReactPutListenerQueue":78,"./Transaction":104,"./emptyFunction":118}],83:[function(e,t){"use strict";function n(e,t){var n={};return function(r){n[t]=r,e.setState(n)}}var r={createStateSetter:function(e,t){return function(n,r,o,i,a,s){var u=t.call(e,n,r,o,i,a,s);u&&e.setState(u)}},createStateKeySetter:function(e,t){var r=e.__keySetters||(e.__keySetters={});return r[t]||(r[t]=n(e,t))}};r.Mixin={createStateSetter:function(e){return r.createStateSetter(this,e)},createStateKeySetter:function(e){return r.createStateKeySetter(this,e)}},t.exports=r},{}],84:[function(e,t){"use strict";var n=e("./DOMPropertyOperations"),r=e("./ReactComponent"),o=e("./ReactElement"),i=e("./Object.assign"),a=e("./escapeTextForBrowser"),s=function(){};i(s.prototype,r.Mixin,{mountComponent:function(e,t,o){r.Mixin.mountComponent.call(this,e,t,o);var i=a(this.props);return t.renderToStaticMarkup?i:"<span "+n.createMarkupForID(e)+">"+i+"</span>"},receiveComponent:function(e){var t=e.props;t!==this.props&&(this.props=t,r.BackendIDOperations.updateTextContentByID(this._rootNodeID,t))}});var u=function(e){return new o(s,null,null,null,null,e)};u.type=s,t.exports=u},{"./DOMPropertyOperations":13,"./Object.assign":29,"./ReactComponent":37,"./ReactElement":56,"./escapeTextForBrowser":120}],85:[function(e,t){"use strict";var n=e("./ReactChildren"),r={getChildMapping:function(e){return n.map(e,function(e){return e})},mergeChildMappings:function(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var r={},o=[];for(var i in e)t.hasOwnProperty(i)?o.length&&(r[i]=o,o=[]):o.push(i);var a,s={};for(var u in t){if(r.hasOwnProperty(u))for(a=0;a<r[u].length;a++){var c=r[u][a];s[r[u][a]]=n(c)}s[u]=n(u)}for(a=0;a<o.length;a++)s[o[a]]=n(o[a]);return s}};t.exports=r},{"./ReactChildren":36}],86:[function(e,t){"use strict";function n(){var e=document.createElement("div"),t=e.style;"AnimationEvent"in window||delete a.animationend.animation,"TransitionEvent"in window||delete a.transitionend.transition;for(var n in a){var r=a[n];for(var o in r)if(o in t){s.push(r[o]);break}}}function r(e,t,n){e.addEventListener(t,n,!1)}function o(e,t,n){e.removeEventListener(t,n,!1)}var i=e("./ExecutionEnvironment"),a={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},s=[];i.canUseDOM&&n();var u={addEndEventListener:function(e,t){return 0===s.length?void window.setTimeout(t,0):void s.forEach(function(n){r(e,n,t)})},removeEndEventListener:function(e,t){0!==s.length&&s.forEach(function(n){o(e,n,t)})}};t.exports=u},{"./ExecutionEnvironment":23}],87:[function(e,t){"use strict";var n=e("./React"),r=e("./ReactTransitionChildMapping"),o=e("./Object.assign"),i=e("./cloneWithProps"),a=e("./emptyFunction"),s=n.createClass({displayName:"ReactTransitionGroup",propTypes:{component:n.PropTypes.any,childFactory:n.PropTypes.func},getDefaultProps:function(){return{component:"span",childFactory:a.thatReturnsArgument}},getInitialState:function(){return{children:r.getChildMapping(this.props.children)}},componentWillReceiveProps:function(e){var t=r.getChildMapping(e.children),n=this.state.children;this.setState({children:r.mergeChildMappings(n,t)});var o;for(o in t){var i=n&&n.hasOwnProperty(o);!t[o]||i||this.currentlyTransitioningKeys[o]||this.keysToEnter.push(o)}for(o in n){var a=t&&t.hasOwnProperty(o);!n[o]||a||this.currentlyTransitioningKeys[o]||this.keysToLeave.push(o)}},componentWillMount:function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},componentDidUpdate:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)},performEnter:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillEnter?t.componentWillEnter(this._handleDoneEntering.bind(this,e)):this._handleDoneEntering(e)},_handleDoneEntering:function(e){var t=this.refs[e];t.componentDidEnter&&t.componentDidEnter(),delete this.currentlyTransitioningKeys[e];var n=r.getChildMapping(this.props.children);n&&n.hasOwnProperty(e)||this.performLeave(e)},performLeave:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillLeave?t.componentWillLeave(this._handleDoneLeaving.bind(this,e)):this._handleDoneLeaving(e)},_handleDoneLeaving:function(e){var t=this.refs[e];t.componentDidLeave&&t.componentDidLeave(),delete this.currentlyTransitioningKeys[e];var n=r.getChildMapping(this.props.children);if(n&&n.hasOwnProperty(e))this.performEnter(e);else{var i=o({},this.state.children);delete i[e],this.setState({children:i})}},render:function(){var e={};for(var t in this.state.children){var r=this.state.children[t];r&&(e[t]=i(this.props.childFactory(r),{ref:t}))}return n.createElement(this.props.component,this.props,e)}});t.exports=s},{"./Object.assign":29,"./React":31,"./ReactTransitionChildMapping":85,"./cloneWithProps":110,"./emptyFunction":118}],88:[function(e,t){"use strict";function n(){h(O.ReactReconcileTransaction&&g)}function r(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=c.getPooled(),this.reconcileTransaction=O.ReactReconcileTransaction.getPooled()}function o(e,t,r){n(),g.batchedUpdates(e,t,r)}function i(e,t){return e._mountDepth-t._mountDepth}function a(e){var t=e.dirtyComponentsLength;h(t===m.length),m.sort(i);for(var n=0;t>n;n++){var r=m[n];if(r.isMounted()){var o=r._pendingCallbacks;if(r._pendingCallbacks=null,r.performUpdateIfNecessary(e.reconcileTransaction),o)for(var a=0;a<o.length;a++)e.callbackQueue.enqueue(o[a],r)}}}function s(e,t){return h(!t||"function"==typeof t),n(),g.isBatchingUpdates?(m.push(e),void(t&&(e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t]))):void g.batchedUpdates(s,e,t)}function u(e,t){h(g.isBatchingUpdates),v.enqueue(e,t),y=!0}var c=e("./CallbackQueue"),l=e("./PooledClass"),p=(e("./ReactCurrentOwner"),e("./ReactPerf")),d=e("./Transaction"),f=e("./Object.assign"),h=e("./invariant"),m=(e("./warning"),[]),v=c.getPooled(),y=!1,g=null,E={initialize:function(){this.dirtyComponentsLength=m.length},close:function(){this.dirtyComponentsLength!==m.length?(m.splice(0,this.dirtyComponentsLength),M()):m.length=0}},C={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},R=[E,C];f(r.prototype,d.Mixin,{getTransactionWrappers:function(){return R},destructor:function(){this.dirtyComponentsLength=null,c.release(this.callbackQueue),this.callbackQueue=null,O.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,n){return d.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}}),l.addPoolingTo(r);var M=p.measure("ReactUpdates","flushBatchedUpdates",function(){for(;m.length||y;){if(m.length){var e=r.getPooled();e.perform(a,null,e),r.release(e)}if(y){y=!1;var t=v;v=c.getPooled(),t.notifyAll(),c.release(t)}}}),b={injectReconcileTransaction:function(e){h(e),O.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){h(e),h("function"==typeof e.batchedUpdates),h("boolean"==typeof e.isBatchingUpdates),g=e}},O={ReactReconcileTransaction:null,batchedUpdates:o,enqueueUpdate:s,flushBatchedUpdates:M,injection:b,asap:u};t.exports=O},{"./CallbackQueue":7,"./Object.assign":29,"./PooledClass":30,"./ReactCurrentOwner":42,"./ReactPerf":73,"./Transaction":104,"./invariant":137,"./warning":155}],89:[function(e,t){"use strict";var n=e("./DOMProperty"),r=n.injection.MUST_USE_ATTRIBUTE,o={Properties:{cx:r,cy:r,d:r,dx:r,dy:r,fill:r,fillOpacity:r,fontFamily:r,fontSize:r,fx:r,fy:r,gradientTransform:r,gradientUnits:r,markerEnd:r,markerMid:r,markerStart:r,offset:r,opacity:r,patternContentUnits:r,patternUnits:r,points:r,preserveAspectRatio:r,r:r,rx:r,ry:r,spreadMethod:r,stopColor:r,stopOpacity:r,stroke:r,strokeDasharray:r,strokeLinecap:r,strokeOpacity:r,strokeWidth:r,textAnchor:r,transform:r,version:r,viewBox:r,x1:r,x2:r,x:r,y1:r,y2:r,y:r},DOMAttributeNames:{fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox"}};t.exports=o},{"./DOMProperty":12}],90:[function(e,t){"use strict";function n(e){if("selectionStart"in e&&a.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function r(e){if(!y&&null!=h&&h==u()){var t=n(h);if(!v||!p(v,t)){v=t;var r=s.getPooled(f.select,m,e);return r.type="select",r.target=h,i.accumulateTwoPhaseDispatches(r),r}}}var o=e("./EventConstants"),i=e("./EventPropagators"),a=e("./ReactInputSelection"),s=e("./SyntheticEvent"),u=e("./getActiveElement"),c=e("./isTextInputElement"),l=e("./keyOf"),p=e("./shallowEqual"),d=o.topLevelTypes,f={select:{phasedRegistrationNames:{bubbled:l({onSelect:null}),captured:l({onSelectCapture:null})},dependencies:[d.topBlur,d.topContextMenu,d.topFocus,d.topKeyDown,d.topMouseDown,d.topMouseUp,d.topSelectionChange]}},h=null,m=null,v=null,y=!1,g={eventTypes:f,extractEvents:function(e,t,n,o){switch(e){case d.topFocus:(c(t)||"true"===t.contentEditable)&&(h=t,m=n,v=null);break;case d.topBlur:h=null,m=null,v=null;break;case d.topMouseDown:y=!0;break;case d.topContextMenu:case d.topMouseUp:return y=!1,r(o);case d.topSelectionChange:case d.topKeyDown:case d.topKeyUp:return r(o)}}};t.exports=g},{"./EventConstants":17,"./EventPropagators":22,"./ReactInputSelection":63,"./SyntheticEvent":96,"./getActiveElement":124,"./isTextInputElement":140,"./keyOf":144,"./shallowEqual":150}],91:[function(e,t){"use strict";var n=Math.pow(2,53),r={createReactRootIndex:function(){return Math.ceil(Math.random()*n)}};t.exports=r},{}],92:[function(e,t){"use strict";var n=e("./EventConstants"),r=e("./EventPluginUtils"),o=e("./EventPropagators"),i=e("./SyntheticClipboardEvent"),a=e("./SyntheticEvent"),s=e("./SyntheticFocusEvent"),u=e("./SyntheticKeyboardEvent"),c=e("./SyntheticMouseEvent"),l=e("./SyntheticDragEvent"),p=e("./SyntheticTouchEvent"),d=e("./SyntheticUIEvent"),f=e("./SyntheticWheelEvent"),h=e("./getEventCharCode"),m=e("./invariant"),v=e("./keyOf"),y=(e("./warning"),n.topLevelTypes),g={blur:{phasedRegistrationNames:{bubbled:v({onBlur:!0}),captured:v({onBlurCapture:!0})}},click:{phasedRegistrationNames:{bubbled:v({onClick:!0}),captured:v({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:v({onContextMenu:!0}),captured:v({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:v({onCopy:!0}),captured:v({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:v({onCut:!0}),captured:v({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:v({onDoubleClick:!0}),captured:v({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:v({onDrag:!0}),captured:v({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:v({onDragEnd:!0}),captured:v({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:v({onDragEnter:!0}),captured:v({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:v({onDragExit:!0}),captured:v({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:v({onDragLeave:!0}),captured:v({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:v({onDragOver:!0}),captured:v({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:v({onDragStart:!0}),captured:v({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:v({onDrop:!0}),captured:v({onDropCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:v({onFocus:!0}),captured:v({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:v({onInput:!0}),captured:v({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:v({onKeyDown:!0}),captured:v({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:v({onKeyPress:!0}),captured:v({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:v({onKeyUp:!0}),captured:v({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:v({onLoad:!0}),captured:v({onLoadCapture:!0})}},error:{phasedRegistrationNames:{bubbled:v({onError:!0}),captured:v({onErrorCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:v({onMouseDown:!0}),captured:v({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:v({onMouseMove:!0}),captured:v({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:v({onMouseOut:!0}),captured:v({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:v({onMouseOver:!0}),captured:v({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:v({onMouseUp:!0}),captured:v({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:v({onPaste:!0}),captured:v({onPasteCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:v({onReset:!0}),captured:v({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:v({onScroll:!0}),captured:v({onScrollCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:v({onSubmit:!0}),captured:v({onSubmitCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:v({onTouchCancel:!0}),captured:v({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:v({onTouchEnd:!0}),captured:v({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:v({onTouchMove:!0}),captured:v({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:v({onTouchStart:!0}),captured:v({onTouchStartCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:v({onWheel:!0}),captured:v({onWheelCapture:!0})}}},E={topBlur:g.blur,topClick:g.click,topContextMenu:g.contextMenu,topCopy:g.copy,topCut:g.cut,topDoubleClick:g.doubleClick,topDrag:g.drag,topDragEnd:g.dragEnd,topDragEnter:g.dragEnter,topDragExit:g.dragExit,topDragLeave:g.dragLeave,topDragOver:g.dragOver,topDragStart:g.dragStart,topDrop:g.drop,topError:g.error,topFocus:g.focus,topInput:g.input,topKeyDown:g.keyDown,topKeyPress:g.keyPress,topKeyUp:g.keyUp,topLoad:g.load,topMouseDown:g.mouseDown,topMouseMove:g.mouseMove,topMouseOut:g.mouseOut,topMouseOver:g.mouseOver,topMouseUp:g.mouseUp,topPaste:g.paste,topReset:g.reset,topScroll:g.scroll,topSubmit:g.submit,topTouchCancel:g.touchCancel,topTouchEnd:g.touchEnd,topTouchMove:g.touchMove,topTouchStart:g.touchStart,topWheel:g.wheel};for(var C in E)E[C].dependencies=[C];var R={eventTypes:g,executeDispatch:function(e,t,n){var o=r.executeDispatch(e,t,n);o===!1&&(e.stopPropagation(),e.preventDefault())},extractEvents:function(e,t,n,r){var v=E[e];if(!v)return null;var g;switch(e){case y.topInput:case y.topLoad:case y.topError:case y.topReset:case y.topSubmit:g=a;break;case y.topKeyPress:if(0===h(r))return null;case y.topKeyDown:case y.topKeyUp:g=u;break;case y.topBlur:case y.topFocus:g=s;break;case y.topClick:if(2===r.button)return null;case y.topContextMenu:case y.topDoubleClick:case y.topMouseDown:case y.topMouseMove:case y.topMouseOut:case y.topMouseOver:case y.topMouseUp:g=c;break;case y.topDrag:case y.topDragEnd:case y.topDragEnter:case y.topDragExit:case y.topDragLeave:case y.topDragOver:case y.topDragStart:case y.topDrop:g=l;break;case y.topTouchCancel:case y.topTouchEnd:case y.topTouchMove:case y.topTouchStart:g=p;break;case y.topScroll:g=d;break;case y.topWheel:g=f;break;case y.topCopy:case y.topCut:case y.topPaste:g=i}m(g);var C=g.getPooled(v,n,r);return o.accumulateTwoPhaseDispatches(C),C}};t.exports=R},{"./EventConstants":17,"./EventPluginUtils":21,"./EventPropagators":22,"./SyntheticClipboardEvent":93,"./SyntheticDragEvent":95,"./SyntheticEvent":96,"./SyntheticFocusEvent":97,"./SyntheticKeyboardEvent":99,"./SyntheticMouseEvent":100,"./SyntheticTouchEvent":101,"./SyntheticUIEvent":102,"./SyntheticWheelEvent":103,"./getEventCharCode":125,"./invariant":137,"./keyOf":144,"./warning":155}],93:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e("./SyntheticEvent"),o={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};r.augmentClass(n,o),t.exports=n},{"./SyntheticEvent":96}],94:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e("./SyntheticEvent"),o={data:null};r.augmentClass(n,o),t.exports=n},{"./SyntheticEvent":96}],95:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e("./SyntheticMouseEvent"),o={dataTransfer:null};r.augmentClass(n,o),t.exports=n},{"./SyntheticMouseEvent":100}],96:[function(e,t){"use strict";function n(e,t,n){this.dispatchConfig=e,this.dispatchMarker=t,this.nativeEvent=n;var r=this.constructor.Interface;for(var o in r)if(r.hasOwnProperty(o)){var a=r[o];this[o]=a?a(n):n[o]}var s=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;this.isDefaultPrevented=s?i.thatReturnsTrue:i.thatReturnsFalse,this.isPropagationStopped=i.thatReturnsFalse}var r=e("./PooledClass"),o=e("./Object.assign"),i=e("./emptyFunction"),a=e("./getEventTarget"),s={type:null,target:a,currentTarget:i.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};o(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e.preventDefault?e.preventDefault():e.returnValue=!1,this.isDefaultPrevented=i.thatReturnsTrue},stopPropagation:function(){var e=this.nativeEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this.isPropagationStopped=i.thatReturnsTrue},persist:function(){this.isPersistent=i.thatReturnsTrue},isPersistent:i.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var t in e)this[t]=null;this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),n.Interface=s,n.augmentClass=function(e,t){var n=this,i=Object.create(n.prototype);o(i,e.prototype),e.prototype=i,e.prototype.constructor=e,e.Interface=o({},n.Interface,t),e.augmentClass=n.augmentClass,r.addPoolingTo(e,r.threeArgumentPooler)},r.addPoolingTo(n,r.threeArgumentPooler),t.exports=n},{"./Object.assign":29,"./PooledClass":30,"./emptyFunction":118,"./getEventTarget":128}],97:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e("./SyntheticUIEvent"),o={relatedTarget:null};r.augmentClass(n,o),t.exports=n},{"./SyntheticUIEvent":102}],98:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e("./SyntheticEvent"),o={data:null};r.augmentClass(n,o),t.exports=n},{"./SyntheticEvent":96}],99:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e("./SyntheticUIEvent"),o=e("./getEventCharCode"),i=e("./getEventKey"),a=e("./getEventModifierState"),s={key:i,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:a,charCode:function(e){return"keypress"===e.type?o(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?o(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};r.augmentClass(n,s),t.exports=n},{"./SyntheticUIEvent":102,"./getEventCharCode":125,"./getEventKey":126,"./getEventModifierState":127}],100:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e("./SyntheticUIEvent"),o=e("./ViewportMetrics"),i=e("./getEventModifierState"),a={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:i,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+o.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+o.currentScrollTop}};r.augmentClass(n,a),t.exports=n},{"./SyntheticUIEvent":102,"./ViewportMetrics":105,"./getEventModifierState":127}],101:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e("./SyntheticUIEvent"),o=e("./getEventModifierState"),i={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:o};r.augmentClass(n,i),t.exports=n},{"./SyntheticUIEvent":102,"./getEventModifierState":127}],102:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e("./SyntheticEvent"),o=e("./getEventTarget"),i={view:function(e){if(e.view)return e.view;var t=o(e);if(null!=t&&t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};r.augmentClass(n,i),t.exports=n},{"./SyntheticEvent":96,"./getEventTarget":128}],103:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e("./SyntheticMouseEvent"),o={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};r.augmentClass(n,o),t.exports=n},{"./SyntheticMouseEvent":100}],104:[function(e,t){"use strict";var n=e("./invariant"),r={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,r,o,i,a,s,u){n(!this.isInTransaction());var c,l;try{this._isInTransaction=!0,c=!0,this.initializeAll(0),l=e.call(t,r,o,i,a,s,u),c=!1}finally{try{if(c)try{this.closeAll(0)}catch(p){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return l},initializeAll:function(e){for(var t=this.transactionWrappers,n=e;n<t.length;n++){var r=t[n];try{this.wrapperInitData[n]=o.OBSERVED_ERROR,this.wrapperInitData[n]=r.initialize?r.initialize.call(this):null}finally{if(this.wrapperInitData[n]===o.OBSERVED_ERROR)try{this.initializeAll(n+1)}catch(i){}}}},closeAll:function(e){n(this.isInTransaction());for(var t=this.transactionWrappers,r=e;r<t.length;r++){var i,a=t[r],s=this.wrapperInitData[r];try{i=!0,s!==o.OBSERVED_ERROR&&a.close&&a.close.call(this,s),i=!1}finally{if(i)try{this.closeAll(r+1)}catch(u){}}}this.wrapperInitData.length=0}},o={Mixin:r,OBSERVED_ERROR:{}};t.exports=o},{"./invariant":137}],105:[function(e,t){"use strict";var n=e("./getUnboundedScrollPosition"),r={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(){var e=n(window);r.currentScrollLeft=e.x,r.currentScrollTop=e.y}};t.exports=r},{"./getUnboundedScrollPosition":133}],106:[function(e,t){"use strict";function n(e,t){if(r(null!=t),null==e)return t;var n=Array.isArray(e),o=Array.isArray(t);return n&&o?(e.push.apply(e,t),e):n?(e.push(t),e):o?[e].concat(t):[e,t]}var r=e("./invariant");t.exports=n},{"./invariant":137}],107:[function(e,t){"use strict";function n(e){for(var t=1,n=0,o=0;o<e.length;o++)t=(t+e.charCodeAt(o))%r,n=(n+t)%r;return t|n<<16}var r=65521;t.exports=n},{}],108:[function(e,t){function n(e){return e.replace(r,function(e,t){return t.toUpperCase()})}var r=/-(.)/g;t.exports=n},{}],109:[function(e,t){"use strict";function n(e){return r(e.replace(o,"ms-"))}var r=e("./camelize"),o=/^-ms-/;t.exports=n},{"./camelize":108}],110:[function(e,t){"use strict";function n(e,t){var n=o.mergeProps(t,e.props);return!n.hasOwnProperty(a)&&e.props.hasOwnProperty(a)&&(n.children=e.props.children),r.createElement(e.type,n)}var r=e("./ReactElement"),o=e("./ReactPropTransferer"),i=e("./keyOf"),a=(e("./warning"),i({children:null}));t.exports=n},{"./ReactElement":56,"./ReactPropTransferer":74,"./keyOf":144,"./warning":155}],111:[function(e,t){function n(e,t){return e&&t?e===t?!0:r(e)?!1:r(t)?n(e,t.parentNode):e.contains?e.contains(t):e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):!1:!1}var r=e("./isTextNode");t.exports=n},{"./isTextNode":141}],112:[function(e,t){function n(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function r(e){return n(e)?Array.isArray(e)?e.slice():o(e):[e]}var o=e("./toArray");t.exports=r},{"./toArray":152}],113:[function(e,t){"use strict";function n(e){var t=o.createFactory(e),n=r.createClass({displayName:"ReactFullPageComponent"+e,componentWillUnmount:function(){i(!1)},render:function(){return t(this.props)}});return n}var r=e("./ReactCompositeComponent"),o=e("./ReactElement"),i=e("./invariant");t.exports=n},{"./ReactCompositeComponent":40,"./ReactElement":56,"./invariant":137}],114:[function(e,t){function n(e){var t=e.match(c);return t&&t[1].toLowerCase()}function r(e,t){var r=u;s(!!u);var o=n(e),c=o&&a(o);if(c){r.innerHTML=c[1]+e+c[2];for(var l=c[0];l--;)r=r.lastChild}else r.innerHTML=e;var p=r.getElementsByTagName("script");p.length&&(s(t),i(p).forEach(t));for(var d=i(r.childNodes);r.lastChild;)r.removeChild(r.lastChild);return d}var o=e("./ExecutionEnvironment"),i=e("./createArrayFrom"),a=e("./getMarkupWrap"),s=e("./invariant"),u=o.canUseDOM?document.createElement("div"):null,c=/^\s*<(\w+)/;t.exports=r},{"./ExecutionEnvironment":23,"./createArrayFrom":112,"./getMarkupWrap":129,"./invariant":137}],115:[function(e,t){function n(e){return"object"==typeof e?Object.keys(e).filter(function(t){return e[t]}).join(" "):Array.prototype.join.call(arguments," ")}t.exports=n},{}],116:[function(e,t){"use strict";function n(e,t){var n=null==t||"boolean"==typeof t||""===t;if(n)return"";var r=isNaN(t);return r||0===t||o.hasOwnProperty(e)&&o[e]?""+t:("string"==typeof t&&(t=t.trim()),t+"px")
}var r=e("./CSSProperty"),o=r.isUnitlessNumber;t.exports=n},{"./CSSProperty":5}],117:[function(e,t){function n(e,t,n,r,o){return o}e("./Object.assign"),e("./warning");t.exports=n},{"./Object.assign":29,"./warning":155}],118:[function(e,t){function n(e){return function(){return e}}function r(){}r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},t.exports=r},{}],119:[function(e,t){"use strict";var n={};t.exports=n},{}],120:[function(e,t){"use strict";function n(e){return o[e]}function r(e){return(""+e).replace(i,n)}var o={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},i=/[&><"']/g;t.exports=r},{}],121:[function(e,t){"use strict";function n(e,t,n){var r=e,i=!r.hasOwnProperty(n);if(i&&null!=t){var a,s=typeof t;a="string"===s?o(t):"number"===s?o(""+t):t,r[n]=a}}function r(e){if(null==e)return e;var t={};return i(e,n,t),t}{var o=e("./ReactTextComponent"),i=e("./traverseAllChildren");e("./warning")}t.exports=r},{"./ReactTextComponent":84,"./traverseAllChildren":153,"./warning":155}],122:[function(e,t){"use strict";function n(e){try{e.focus()}catch(t){}}t.exports=n},{}],123:[function(e,t){"use strict";var n=function(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)};t.exports=n},{}],124:[function(e,t){function n(){try{return document.activeElement||document.body}catch(e){return document.body}}t.exports=n},{}],125:[function(e,t){"use strict";function n(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,0===t&&13===n&&(t=13)):t=n,t>=32||13===t?t:0}t.exports=n},{}],126:[function(e,t){"use strict";function n(e){if(e.key){var t=o[e.key]||e.key;if("Unidentified"!==t)return t}if("keypress"===e.type){var n=r(e);return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?i[e.keyCode]||"Unidentified":""}var r=e("./getEventCharCode"),o={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};t.exports=n},{"./getEventCharCode":125}],127:[function(e,t){"use strict";function n(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=o[e];return r?!!n[r]:!1}function r(){return n}var o={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};t.exports=r},{}],128:[function(e,t){"use strict";function n(e){var t=e.target||e.srcElement||window;return 3===t.nodeType?t.parentNode:t}t.exports=n},{}],129:[function(e,t){function n(e){return o(!!i),p.hasOwnProperty(e)||(e="*"),a.hasOwnProperty(e)||(i.innerHTML="*"===e?"<link />":"<"+e+"></"+e+">",a[e]=!i.firstChild),a[e]?p[e]:null}var r=e("./ExecutionEnvironment"),o=e("./invariant"),i=r.canUseDOM?document.createElement("div"):null,a={circle:!0,defs:!0,ellipse:!0,g:!0,line:!0,linearGradient:!0,path:!0,polygon:!0,polyline:!0,radialGradient:!0,rect:!0,stop:!0,text:!0},s=[1,'<select multiple="true">',"</select>"],u=[1,"<table>","</table>"],c=[3,"<table><tbody><tr>","</tr></tbody></table>"],l=[1,"<svg>","</svg>"],p={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:s,option:s,caption:u,colgroup:u,tbody:u,tfoot:u,thead:u,td:c,th:c,circle:l,defs:l,ellipse:l,g:l,line:l,linearGradient:l,path:l,polygon:l,polyline:l,radialGradient:l,rect:l,stop:l,text:l};t.exports=n},{"./ExecutionEnvironment":23,"./invariant":137}],130:[function(e,t){"use strict";function n(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function r(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function o(e,t){for(var o=n(e),i=0,a=0;o;){if(3==o.nodeType){if(a=i+o.textContent.length,t>=i&&a>=t)return{node:o,offset:t-i};i=a}o=n(r(o))}}t.exports=o},{}],131:[function(e,t){"use strict";function n(e){return e?e.nodeType===r?e.documentElement:e.firstChild:null}var r=9;t.exports=n},{}],132:[function(e,t){"use strict";function n(){return!o&&r.canUseDOM&&(o="textContent"in document.documentElement?"textContent":"innerText"),o}var r=e("./ExecutionEnvironment"),o=null;t.exports=n},{"./ExecutionEnvironment":23}],133:[function(e,t){"use strict";function n(e){return e===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}t.exports=n},{}],134:[function(e,t){function n(e){return e.replace(r,"-$1").toLowerCase()}var r=/([A-Z])/g;t.exports=n},{}],135:[function(e,t){"use strict";function n(e){return r(e).replace(o,"-ms-")}var r=e("./hyphenate"),o=/^ms-/;t.exports=n},{"./hyphenate":134}],136:[function(e,t){"use strict";function n(e,t){var n;return n="string"==typeof e.type?r.createInstanceForTag(e.type,e.props,t):new e.type(e.props),n.construct(e),n}{var r=(e("./warning"),e("./ReactElement"),e("./ReactLegacyElement"),e("./ReactNativeComponent"));e("./ReactEmptyComponent")}t.exports=n},{"./ReactElement":56,"./ReactEmptyComponent":58,"./ReactLegacyElement":65,"./ReactNativeComponent":71,"./warning":155}],137:[function(e,t){"use strict";var n=function(e,t,n,r,o,i,a,s){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,s],l=0;u=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return c[l++]}))}throw u.framesToPop=1,u}};t.exports=n},{}],138:[function(e,t){"use strict";function n(e,t){if(!o.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,i=n in document;if(!i){var a=document.createElement("div");a.setAttribute(n,"return;"),i="function"==typeof a[n]}return!i&&r&&"wheel"===e&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i}var r,o=e("./ExecutionEnvironment");o.canUseDOM&&(r=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),t.exports=n},{"./ExecutionEnvironment":23}],139:[function(e,t){function n(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}t.exports=n},{}],140:[function(e,t){"use strict";function n(e){return e&&("INPUT"===e.nodeName&&r[e.type]||"TEXTAREA"===e.nodeName)}var r={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};t.exports=n},{}],141:[function(e,t){function n(e){return r(e)&&3==e.nodeType}var r=e("./isNode");t.exports=n},{"./isNode":139}],142:[function(e,t){"use strict";function n(e){e||(e="");var t,n=arguments.length;if(n>1)for(var r=1;n>r;r++)t=arguments[r],t&&(e=(e?e+" ":"")+t);return e}t.exports=n},{}],143:[function(e,t){"use strict";var n=e("./invariant"),r=function(e){var t,r={};n(e instanceof Object&&!Array.isArray(e));for(t in e)e.hasOwnProperty(t)&&(r[t]=t);return r};t.exports=r},{"./invariant":137}],144:[function(e,t){var n=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};t.exports=n},{}],145:[function(e,t){"use strict";function n(e,t,n){if(!e)return null;var o={};for(var i in e)r.call(e,i)&&(o[i]=t.call(n,e[i],i,e));return o}var r=Object.prototype.hasOwnProperty;t.exports=n},{}],146:[function(e,t){"use strict";function n(e){var t={};return function(n){return t.hasOwnProperty(n)?t[n]:t[n]=e.call(this,n)}}t.exports=n},{}],147:[function(e,t){"use strict";function n(e){r(e&&!/[^a-z0-9_]/.test(e))}var r=e("./invariant");t.exports=n},{"./invariant":137}],148:[function(e,t){"use strict";function n(e){return o(r.isValidElement(e)),e}var r=e("./ReactElement"),o=e("./invariant");t.exports=n},{"./ReactElement":56,"./invariant":137}],149:[function(e,t){"use strict";var n=e("./ExecutionEnvironment"),r=/^[ \r\n\t\f]/,o=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,i=function(e,t){e.innerHTML=t};if(n.canUseDOM){var a=document.createElement("div");a.innerHTML=" ",""===a.innerHTML&&(i=function(e,t){if(e.parentNode&&e.parentNode.replaceChild(e,e),r.test(t)||"<"===t[0]&&o.test(t)){e.innerHTML=""+t;var n=e.firstChild;1===n.data.length?e.removeChild(n):n.deleteData(0,1)}else e.innerHTML=t})}t.exports=i},{"./ExecutionEnvironment":23}],150:[function(e,t){"use strict";function n(e,t){if(e===t)return!0;var n;for(n in e)if(e.hasOwnProperty(n)&&(!t.hasOwnProperty(n)||e[n]!==t[n]))return!1;for(n in t)if(t.hasOwnProperty(n)&&!e.hasOwnProperty(n))return!1;return!0}t.exports=n},{}],151:[function(e,t){"use strict";function n(e,t){return e&&t&&e.type===t.type&&e.key===t.key&&e._owner===t._owner?!0:!1}t.exports=n},{}],152:[function(e,t){function n(e){var t=e.length;if(r(!Array.isArray(e)&&("object"==typeof e||"function"==typeof e)),r("number"==typeof t),r(0===t||t-1 in e),e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(n){}for(var o=Array(t),i=0;t>i;i++)o[i]=e[i];return o}var r=e("./invariant");t.exports=n},{"./invariant":137}],153:[function(e,t){"use strict";function n(e){return d[e]}function r(e,t){return e&&null!=e.key?i(e.key):t.toString(36)}function o(e){return(""+e).replace(f,n)}function i(e){return"$"+o(e)}function a(e,t,n){return null==e?0:h(e,"",0,t,n)}var s=e("./ReactElement"),u=e("./ReactInstanceHandles"),c=e("./invariant"),l=u.SEPARATOR,p=":",d={"=":"=0",".":"=1",":":"=2"},f=/[=.:]/g,h=function(e,t,n,o,a){var u,d,f=0;if(Array.isArray(e))for(var m=0;m<e.length;m++){var v=e[m];u=t+(t?p:l)+r(v,m),d=n+f,f+=h(v,u,d,o,a)}else{var y=typeof e,g=""===t,E=g?l+r(e,0):t;if(null==e||"boolean"===y)o(a,null,E,n),f=1;else if("string"===y||"number"===y||s.isValidElement(e))o(a,e,E,n),f=1;else if("object"===y){c(!e||1!==e.nodeType);for(var C in e)e.hasOwnProperty(C)&&(u=t+(t?p:l)+i(C)+p+r(e[C],0),d=n+f,f+=h(e[C],u,d,o,a))}}return f};t.exports=a},{"./ReactElement":56,"./ReactInstanceHandles":64,"./invariant":137}],154:[function(e,t){"use strict";function n(e){return Array.isArray(e)?e.concat():e&&"object"==typeof e?i(new e.constructor,e):e}function r(e,t,n){s(Array.isArray(e));var r=t[n];s(Array.isArray(r))}function o(e,t){if(s("object"==typeof t),t.hasOwnProperty(p))return s(1===Object.keys(t).length),t[p];var a=n(e);if(t.hasOwnProperty(d)){var h=t[d];s(h&&"object"==typeof h),s(a&&"object"==typeof a),i(a,t[d])}t.hasOwnProperty(u)&&(r(e,t,u),t[u].forEach(function(e){a.push(e)})),t.hasOwnProperty(c)&&(r(e,t,c),t[c].forEach(function(e){a.unshift(e)})),t.hasOwnProperty(l)&&(s(Array.isArray(e)),s(Array.isArray(t[l])),t[l].forEach(function(e){s(Array.isArray(e)),a.splice.apply(a,e)})),t.hasOwnProperty(f)&&(s("function"==typeof t[f]),a=t[f](a));for(var v in t)m.hasOwnProperty(v)&&m[v]||(a[v]=o(e[v],t[v]));return a}var i=e("./Object.assign"),a=e("./keyOf"),s=e("./invariant"),u=a({$push:null}),c=a({$unshift:null}),l=a({$splice:null}),p=a({$set:null}),d=a({$merge:null}),f=a({$apply:null}),h=[u,c,l,p,d,f],m={};h.forEach(function(e){m[e]=!0}),t.exports=o},{"./Object.assign":29,"./invariant":137,"./keyOf":144}],155:[function(e,t){"use strict";var n=e("./emptyFunction"),r=n;t.exports=r},{"./emptyFunction":118}]},{},[1])(1)});
/**
 * JSXTransformer v0.12.2
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.JSXTransformer=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
/* jshint browser: true */
/* jslint evil: true */

'use strict';

var buffer = _dereq_('buffer');
var transform = _dereq_('jstransform').transform;
var typesSyntax = _dereq_('jstransform/visitors/type-syntax');
var visitors = _dereq_('./fbtransform/visitors');

var headEl;
var dummyAnchor;
var inlineScriptCount = 0;

// The source-map library relies on Object.defineProperty, but IE8 doesn't
// support it fully even with es5-sham. Indeed, es5-sham's defineProperty
// throws when Object.prototype.__defineGetter__ is missing, so we skip building
// the source map in that case.
var supportsAccessors = Object.prototype.hasOwnProperty('__defineGetter__');

/**
 * Run provided code through jstransform.
 *
 * @param {string} source Original source code
 * @param {object?} options Options to pass to jstransform
 * @return {object} object as returned from jstransform
 */
function transformReact(source, options) {
  // TODO: just use react-tools
  options = options || {};
  var visitorList;
  if (options.harmony) {
    visitorList = visitors.getAllVisitors();
  } else {
    visitorList = visitors.transformVisitors.react;
  }

  if (options.stripTypes) {
    // Stripping types needs to happen before the other transforms
    // unfortunately, due to bad interactions. For example,
    // es6-rest-param-visitors conflict with stripping rest param type
    // annotation
    source = transform(typesSyntax.visitorList, source, options).code;
  }

  return transform(visitorList, source, {
    sourceMap: supportsAccessors && options.sourceMap
  });
}

/**
 * Eval provided source after transforming it.
 *
 * @param {string} source Original source code
 * @param {object?} options Options to pass to jstransform
 */
function exec(source, options) {
  return eval(transformReact(source, options).code);
}

/**
 * This method returns a nicely formated line of code pointing to the exact
 * location of the error `e`. The line is limited in size so big lines of code
 * are also shown in a readable way.
 *
 * Example:
 * ... x', overflow:'scroll'}} id={} onScroll={this.scroll} class=" ...
 * ^
 *
 * @param {string} code The full string of code
 * @param {Error} e The error being thrown
 * @return {string} formatted message
 * @internal
 */
function createSourceCodeErrorMessage(code, e) {
  var sourceLines = code.split('\n');
  var erroneousLine = sourceLines[e.lineNumber - 1];

  // Removes any leading indenting spaces and gets the number of
  // chars indenting the `erroneousLine`
  var indentation = 0;
  erroneousLine = erroneousLine.replace(/^\s+/, function(leadingSpaces) {
    indentation = leadingSpaces.length;
    return '';
  });

  // Defines the number of characters that are going to show
  // before and after the erroneous code
  var LIMIT = 30;
  var errorColumn = e.column - indentation;

  if (errorColumn > LIMIT) {
    erroneousLine = '... ' + erroneousLine.slice(errorColumn - LIMIT);
    errorColumn = 4 + LIMIT;
  }
  if (erroneousLine.length - errorColumn > LIMIT) {
    erroneousLine = erroneousLine.slice(0, errorColumn + LIMIT) + ' ...';
  }
  var message = '\n\n' + erroneousLine + '\n';
  message += new Array(errorColumn - 1).join(' ') + '^';
  return message;
}

/**
 * Actually transform the code.
 *
 * @param {string} code
 * @param {string?} url
 * @param {object?} options
 * @return {string} The transformed code.
 * @internal
 */
function transformCode(code, url, options) {
  try {
    var transformed = transformReact(code, options);
  } catch(e) {
    e.message += '\n    at ';
    if (url) {
      if ('fileName' in e) {
        // We set `fileName` if it's supported by this error object and
        // a `url` was provided.
        // The error will correctly point to `url` in Firefox.
        e.fileName = url;
      }
      e.message += url + ':' + e.lineNumber + ':' + e.column;
    } else {
      e.message += location.href;
    }
    e.message += createSourceCodeErrorMessage(code, e);
    throw e;
  }

  if (!transformed.sourceMap) {
    return transformed.code;
  }

  var map = transformed.sourceMap.toJSON();
  var source;
  if (url == null) {
    source = "Inline JSX script";
    inlineScriptCount++;
    if (inlineScriptCount > 1) {
      source += ' (' + inlineScriptCount + ')';
    }
  } else if (dummyAnchor) {
    // Firefox has problems when the sourcemap source is a proper URL with a
    // protocol and hostname, so use the pathname. We could use just the
    // filename, but hopefully using the full path will prevent potential
    // issues where the same filename exists in multiple directories.
    dummyAnchor.href = url;
    source = dummyAnchor.pathname.substr(1);
  }
  map.sources = [source];
  map.sourcesContent = [code];

  return (
    transformed.code +
    '\n//# sourceMappingURL=data:application/json;base64,' +
    buffer.Buffer(JSON.stringify(map)).toString('base64')
  );
}


/**
 * Appends a script element at the end of the <head> with the content of code,
 * after transforming it.
 *
 * @param {string} code The original source code
 * @param {string?} url Where the code came from. null if inline
 * @param {object?} options Options to pass to jstransform
 * @internal
 */
function run(code, url, options) {
  var scriptEl = document.createElement('script');
  scriptEl.text = transformCode(code, url, options);
  headEl.appendChild(scriptEl);
}

/**
 * Load script from the provided url and pass the content to the callback.
 *
 * @param {string} url The location of the script src
 * @param {function} callback Function to call with the content of url
 * @internal
 */
function load(url, successCallback, errorCallback) {
  var xhr;
  xhr = window.ActiveXObject ? new window.ActiveXObject('Microsoft.XMLHTTP')
                             : new XMLHttpRequest();

  // async, however scripts will be executed in the order they are in the
  // DOM to mirror normal script loading.
  xhr.open('GET', url, true);
  if ('overrideMimeType' in xhr) {
    xhr.overrideMimeType('text/plain');
  }
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 0 || xhr.status === 200) {
        successCallback(xhr.responseText);
      } else {
        errorCallback();
        throw new Error("Could not load " + url);
      }
    }
  };
  return xhr.send(null);
}

/**
 * Loop over provided script tags and get the content, via innerHTML if an
 * inline script, or by using XHR. Transforms are applied if needed. The scripts
 * are executed in the order they are found on the page.
 *
 * @param {array} scripts The <script> elements to load and run.
 * @internal
 */
function loadScripts(scripts) {
  var result = [];
  var count = scripts.length;

  function check() {
    var script, i;

    for (i = 0; i < count; i++) {
      script = result[i];

      if (script.loaded && !script.executed) {
        script.executed = true;
        run(script.content, script.url, script.options);
      } else if (!script.loaded && !script.error && !script.async) {
        break;
      }
    }
  }

  scripts.forEach(function(script, i) {
    var options = {
      sourceMap: true
    };
    if (/;harmony=true(;|$)/.test(script.type)) {
      options.harmony = true
    }
    if (/;stripTypes=true(;|$)/.test(script.type)) {
      options.stripTypes = true;
    }

    // script.async is always true for non-javascript script tags
    var async = script.hasAttribute('async');

    if (script.src) {
      result[i] = {
        async: async,
        error: false,
        executed: false,
        content: null,
        loaded: false,
        url: script.src,
        options: options
      };

      load(script.src, function(content) {
        result[i].loaded = true;
        result[i].content = content;
        check();
      }, function() {
        result[i].error = true;
        check();
      });
    } else {
      result[i] = {
        async: async,
        error: false,
        executed: false,
        content: script.innerHTML,
        loaded: true,
        url: null,
        options: options
      };
    }
  });

  check();
}

/**
 * Find and run all script tags with type="text/jsx".
 *
 * @internal
 */
function runScripts() {
  var scripts = document.getElementsByTagName('script');

  // Array.prototype.slice cannot be used on NodeList on IE8
  var jsxScripts = [];
  for (var i = 0; i < scripts.length; i++) {
    if (/^text\/jsx(;|$)/.test(scripts.item(i).type)) {
      jsxScripts.push(scripts.item(i));
    }
  }

  if (jsxScripts.length < 1) {
    return;
  }

  console.warn(
    'You are using the in-browser JSX transformer. Be sure to precompile ' +
    'your JSX for production - ' +
    'http://facebook.github.io/react/docs/tooling-integration.html#jsx'
  );

  loadScripts(jsxScripts);
}

// Listen for load event if we're in a browser and then kick off finding and
// running of scripts.
if (typeof window !== "undefined" && window !== null) {
  headEl = document.getElementsByTagName('head')[0];
  dummyAnchor = document.createElement('a');

  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', runScripts, false);
  } else {
    window.attachEvent('onload', runScripts);
  }
}

module.exports = {
  transform: transformReact,
  exec: exec
};

},{"./fbtransform/visitors":37,"buffer":2,"jstransform":21,"jstransform/visitors/type-syntax":33}],2:[function(_dereq_,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = _dereq_('base64-js')
var ieee754 = _dereq_('ieee754')
var isArray = _dereq_('is-array')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var kMaxLength = 0x3fffffff

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Note:
 *
 * - Implementation must support adding new properties to `Uint8Array` instances.
 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *    incorrect length in some situations.
 *
 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
 * get the Object implementation, which is slower but will work correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = (function () {
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Find the length
  var length
  if (type === 'number')
    length = subject > 0 ? subject >>> 0 : 0
  else if (type === 'string') {
    if (encoding === 'base64')
      subject = base64clean(subject)
    length = Buffer.byteLength(subject, encoding)
  } else if (type === 'object' && subject !== null) { // assume object is array-like
    if (subject.type === 'Buffer' && isArray(subject.data))
      subject = subject.data
    length = +subject.length > 0 ? Math.floor(+subject.length) : 0
  } else
    throw new TypeError('must start with number, buffer, array or string')

  if (this.length > kMaxLength)
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
      'size: 0x' + kMaxLength.toString(16) + ' bytes')

  var buf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer.TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    if (Buffer.isBuffer(subject)) {
      for (i = 0; i < length; i++)
        buf[i] = subject.readUInt8(i)
    } else {
      for (i = 0; i < length; i++)
        buf[i] = ((subject[i] % 256) + 256) % 256
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer.TYPED_ARRAY_SUPPORT && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

Buffer.isBuffer = function (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b))
    throw new TypeError('Arguments must be Buffers')

  var x = a.length
  var y = b.length
  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
  if (i !== len) {
    x = a[i]
    y = b[i]
  }
  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function (list, totalLength) {
  if (!isArray(list)) throw new TypeError('Usage: Buffer.concat(list[, length])')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (totalLength === undefined) {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    case 'hex':
      ret = str.length >>> 1
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    default:
      ret = str.length
  }
  return ret
}

// pre-set for values that may exist in the future
Buffer.prototype.length = undefined
Buffer.prototype.parent = undefined

// toString(encoding, start=0, end=buffer.length)
Buffer.prototype.toString = function (encoding, start, end) {
  var loweredCase = false

  start = start >>> 0
  end = end === undefined || end === Infinity ? this.length : end >>> 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase)
          throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.equals = function (b) {
  if(!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max)
      str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b)
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(byte)) throw new Error('Invalid hex string')
    buf[offset + i] = byte
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function asciiWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function utf16leWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = utf16leWrite(this, string, offset, length)
      break
    default:
      throw new TypeError('Unknown encoding: ' + encoding)
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function binarySlice (buf, start, end) {
  return asciiSlice(buf, start, end)
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len;
    if (start < 0)
      start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0)
      end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start)
    end = start

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0)
    throw new RangeError('offset is not uint')
  if (offset + ext > length)
    throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
      ((this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      this[offset + 3])
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80))
    return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16) |
      (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
      (this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      (this[offset + 3])
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new TypeError('value is out of bounds')
  if (offset + ext > buf.length) throw new TypeError('index out of range')
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = value
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = value
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = value
  return offset + 1
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new TypeError('value is out of bounds')
  if (offset + ext > buf.length) throw new TypeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  if (end < start) throw new TypeError('sourceEnd < sourceStart')
  if (target_start < 0 || target_start >= target.length)
    throw new TypeError('targetStart out of bounds')
  if (start < 0 || start >= source.length) throw new TypeError('sourceStart out of bounds')
  if (end < 0 || end > source.length) throw new TypeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < len; i++) {
      target[i + target_start] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new TypeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new TypeError('start out of bounds')
  if (end < 0 || end > this.length) throw new TypeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-z]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F) {
      byteArray.push(b)
    } else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++) {
        byteArray.push(parseInt(h[j], 16))
      }
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

},{"base64-js":3,"ieee754":4,"is-array":5}],3:[function(_dereq_,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],4:[function(_dereq_,module,exports){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}],5:[function(_dereq_,module,exports){

/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};

},{}],6:[function(_dereq_,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,_dereq_('_process'))
},{"_process":7}],7:[function(_dereq_,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canMutationObserver = typeof window !== 'undefined'
    && window.MutationObserver;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    var queue = [];

    if (canMutationObserver) {
        var hiddenDiv = document.createElement("div");
        var observer = new MutationObserver(function () {
            var queueList = queue.slice();
            queue.length = 0;
            queueList.forEach(function (fn) {
                fn();
            });
        });

        observer.observe(hiddenDiv, { attributes: true });

        return function nextTick(fn) {
            if (!queue.length) {
                hiddenDiv.setAttribute('yes', 'no');
            }
            queue.push(fn);
        };
    }

    if (canPost) {
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],8:[function(_dereq_,module,exports){
var Base62 = (function (my) {
  my.chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  my.encode = function(i){
    if (i === 0) {return '0'}
    var s = ''
    while (i > 0) {
      s = this.chars[i % 62] + s
      i = Math.floor(i/62)
    }
    return s
  };
  my.decode = function(a,b,c,d){
    for (
      b = c = (
        a === (/\W|_|^$/.test(a += "") || a)
      ) - 1;
      d = a.charCodeAt(c++);
    )
    b = b * 62 + d - [, 48, 29, 87][d >> 5];
    return b
  };

  return my;
}({}));

module.exports = Base62
},{}],9:[function(_dereq_,module,exports){
/*
  Copyright (C) 2013 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2013 Thaddee Tyl <thaddee.tyl@gmail.com>
  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2012 Mathias Bynens <mathias@qiwi.be>
  Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
  Copyright (C) 2012 Kris Kowal <kris.kowal@cixar.com>
  Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/*jslint bitwise:true plusplus:true */
/*global esprima:true, define:true, exports:true, window: true,
throwError: true, generateStatement: true, peek: true,
parseAssignmentExpression: true, parseBlock: true,
parseClassExpression: true, parseClassDeclaration: true, parseExpression: true,
parseDeclareClass: true, parseDeclareFunction: true,
parseDeclareModule: true, parseDeclareVariable: true,
parseForStatement: true,
parseFunctionDeclaration: true, parseFunctionExpression: true,
parseFunctionSourceElements: true, parseVariableIdentifier: true,
parseImportSpecifier: true, parseInterface: true,
parseLeftHandSideExpression: true, parseParams: true, validateParam: true,
parseSpreadOrAssignmentExpression: true,
parseStatement: true, parseSourceElement: true, parseConciseBody: true,
advanceXJSChild: true, isXJSIdentifierStart: true, isXJSIdentifierPart: true,
scanXJSStringLiteral: true, scanXJSIdentifier: true,
parseXJSAttributeValue: true, parseXJSChild: true, parseXJSElement: true, parseXJSExpressionContainer: true, parseXJSEmptyExpression: true,
parseFunctionTypeParam: true,
parsePrimaryType: true,
parseTypeAlias: true,
parseType: true, parseTypeAnnotatableIdentifier: true, parseTypeAnnotation: true,
parseYieldExpression: true, parseAwaitExpression: true
*/

(function (root, factory) {
    'use strict';

    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
    // Rhino, and plain browser loading.
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory((root.esprima = {}));
    }
}(this, function (exports) {
    'use strict';

    var Token,
        TokenName,
        FnExprTokens,
        Syntax,
        PropertyKind,
        Messages,
        Regex,
        SyntaxTreeDelegate,
        XHTMLEntities,
        ClassPropertyType,
        source,
        strict,
        index,
        lineNumber,
        lineStart,
        length,
        delegate,
        lookahead,
        state,
        extra;

    Token = {
        BooleanLiteral: 1,
        EOF: 2,
        Identifier: 3,
        Keyword: 4,
        NullLiteral: 5,
        NumericLiteral: 6,
        Punctuator: 7,
        StringLiteral: 8,
        RegularExpression: 9,
        Template: 10,
        XJSIdentifier: 11,
        XJSText: 12
    };

    TokenName = {};
    TokenName[Token.BooleanLiteral] = 'Boolean';
    TokenName[Token.EOF] = '<end>';
    TokenName[Token.Identifier] = 'Identifier';
    TokenName[Token.Keyword] = 'Keyword';
    TokenName[Token.NullLiteral] = 'Null';
    TokenName[Token.NumericLiteral] = 'Numeric';
    TokenName[Token.Punctuator] = 'Punctuator';
    TokenName[Token.StringLiteral] = 'String';
    TokenName[Token.XJSIdentifier] = 'XJSIdentifier';
    TokenName[Token.XJSText] = 'XJSText';
    TokenName[Token.RegularExpression] = 'RegularExpression';

    // A function following one of those tokens is an expression.
    FnExprTokens = ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new',
                    'return', 'case', 'delete', 'throw', 'void',
                    // assignment operators
                    '=', '+=', '-=', '*=', '/=', '%=', '<<=', '>>=', '>>>=',
                    '&=', '|=', '^=', ',',
                    // binary/unary operators
                    '+', '-', '*', '/', '%', '++', '--', '<<', '>>', '>>>', '&',
                    '|', '^', '!', '~', '&&', '||', '?', ':', '===', '==', '>=',
                    '<=', '<', '>', '!=', '!=='];

    Syntax = {
        AnyTypeAnnotation: 'AnyTypeAnnotation',
        ArrayExpression: 'ArrayExpression',
        ArrayPattern: 'ArrayPattern',
        ArrayTypeAnnotation: 'ArrayTypeAnnotation',
        ArrowFunctionExpression: 'ArrowFunctionExpression',
        AssignmentExpression: 'AssignmentExpression',
        BinaryExpression: 'BinaryExpression',
        BlockStatement: 'BlockStatement',
        BooleanTypeAnnotation: 'BooleanTypeAnnotation',
        BreakStatement: 'BreakStatement',
        CallExpression: 'CallExpression',
        CatchClause: 'CatchClause',
        ClassBody: 'ClassBody',
        ClassDeclaration: 'ClassDeclaration',
        ClassExpression: 'ClassExpression',
        ClassImplements: 'ClassImplements',
        ClassProperty: 'ClassProperty',
        ComprehensionBlock: 'ComprehensionBlock',
        ComprehensionExpression: 'ComprehensionExpression',
        ConditionalExpression: 'ConditionalExpression',
        ContinueStatement: 'ContinueStatement',
        DebuggerStatement: 'DebuggerStatement',
        DeclareClass: 'DeclareClass',
        DeclareFunction: 'DeclareFunction',
        DeclareModule: 'DeclareModule',
        DeclareVariable: 'DeclareVariable',
        DoWhileStatement: 'DoWhileStatement',
        EmptyStatement: 'EmptyStatement',
        ExportDeclaration: 'ExportDeclaration',
        ExportBatchSpecifier: 'ExportBatchSpecifier',
        ExportSpecifier: 'ExportSpecifier',
        ExpressionStatement: 'ExpressionStatement',
        ForInStatement: 'ForInStatement',
        ForOfStatement: 'ForOfStatement',
        ForStatement: 'ForStatement',
        FunctionDeclaration: 'FunctionDeclaration',
        FunctionExpression: 'FunctionExpression',
        FunctionTypeAnnotation: 'FunctionTypeAnnotation',
        FunctionTypeParam: 'FunctionTypeParam',
        GenericTypeAnnotation: 'GenericTypeAnnotation',
        Identifier: 'Identifier',
        IfStatement: 'IfStatement',
        ImportDeclaration: 'ImportDeclaration',
        ImportDefaultSpecifier: 'ImportDefaultSpecifier',
        ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
        ImportSpecifier: 'ImportSpecifier',
        InterfaceDeclaration: 'InterfaceDeclaration',
        InterfaceExtends: 'InterfaceExtends',
        IntersectionTypeAnnotation: 'IntersectionTypeAnnotation',
        LabeledStatement: 'LabeledStatement',
        Literal: 'Literal',
        LogicalExpression: 'LogicalExpression',
        MemberExpression: 'MemberExpression',
        MethodDefinition: 'MethodDefinition',
        ModuleSpecifier: 'ModuleSpecifier',
        NewExpression: 'NewExpression',
        NullableTypeAnnotation: 'NullableTypeAnnotation',
        NumberTypeAnnotation: 'NumberTypeAnnotation',
        ObjectExpression: 'ObjectExpression',
        ObjectPattern: 'ObjectPattern',
        ObjectTypeAnnotation: 'ObjectTypeAnnotation',
        ObjectTypeCallProperty: 'ObjectTypeCallProperty',
        ObjectTypeIndexer: 'ObjectTypeIndexer',
        ObjectTypeProperty: 'ObjectTypeProperty',
        Program: 'Program',
        Property: 'Property',
        QualifiedTypeIdentifier: 'QualifiedTypeIdentifier',
        ReturnStatement: 'ReturnStatement',
        SequenceExpression: 'SequenceExpression',
        SpreadElement: 'SpreadElement',
        SpreadProperty: 'SpreadProperty',
        StringLiteralTypeAnnotation: 'StringLiteralTypeAnnotation',
        StringTypeAnnotation: 'StringTypeAnnotation',
        SwitchCase: 'SwitchCase',
        SwitchStatement: 'SwitchStatement',
        TaggedTemplateExpression: 'TaggedTemplateExpression',
        TemplateElement: 'TemplateElement',
        TemplateLiteral: 'TemplateLiteral',
        ThisExpression: 'ThisExpression',
        ThrowStatement: 'ThrowStatement',
        TupleTypeAnnotation: 'TupleTypeAnnotation',
        TryStatement: 'TryStatement',
        TypeAlias: 'TypeAlias',
        TypeAnnotation: 'TypeAnnotation',
        TypeofTypeAnnotation: 'TypeofTypeAnnotation',
        TypeParameterDeclaration: 'TypeParameterDeclaration',
        TypeParameterInstantiation: 'TypeParameterInstantiation',
        UnaryExpression: 'UnaryExpression',
        UnionTypeAnnotation: 'UnionTypeAnnotation',
        UpdateExpression: 'UpdateExpression',
        VariableDeclaration: 'VariableDeclaration',
        VariableDeclarator: 'VariableDeclarator',
        VoidTypeAnnotation: 'VoidTypeAnnotation',
        WhileStatement: 'WhileStatement',
        WithStatement: 'WithStatement',
        XJSIdentifier: 'XJSIdentifier',
        XJSNamespacedName: 'XJSNamespacedName',
        XJSMemberExpression: 'XJSMemberExpression',
        XJSEmptyExpression: 'XJSEmptyExpression',
        XJSExpressionContainer: 'XJSExpressionContainer',
        XJSElement: 'XJSElement',
        XJSClosingElement: 'XJSClosingElement',
        XJSOpeningElement: 'XJSOpeningElement',
        XJSAttribute: 'XJSAttribute',
        XJSSpreadAttribute: 'XJSSpreadAttribute',
        XJSText: 'XJSText',
        YieldExpression: 'YieldExpression',
        AwaitExpression: 'AwaitExpression'
    };

    PropertyKind = {
        Data: 1,
        Get: 2,
        Set: 4
    };

    ClassPropertyType = {
        'static': 'static',
        prototype: 'prototype'
    };

    // Error messages should be identical to V8.
    Messages = {
        UnexpectedToken:  'Unexpected token %0',
        UnexpectedNumber:  'Unexpected number',
        UnexpectedString:  'Unexpected string',
        UnexpectedIdentifier:  'Unexpected identifier',
        UnexpectedReserved:  'Unexpected reserved word',
        UnexpectedTemplate:  'Unexpected quasi %0',
        UnexpectedEOS:  'Unexpected end of input',
        NewlineAfterThrow:  'Illegal newline after throw',
        InvalidRegExp: 'Invalid regular expression',
        UnterminatedRegExp:  'Invalid regular expression: missing /',
        InvalidLHSInAssignment:  'Invalid left-hand side in assignment',
        InvalidLHSInFormalsList:  'Invalid left-hand side in formals list',
        InvalidLHSInForIn:  'Invalid left-hand side in for-in',
        MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
        NoCatchOrFinally:  'Missing catch or finally after try',
        UnknownLabel: 'Undefined label \'%0\'',
        Redeclaration: '%0 \'%1\' has already been declared',
        IllegalContinue: 'Illegal continue statement',
        IllegalBreak: 'Illegal break statement',
        IllegalDuplicateClassProperty: 'Illegal duplicate property in class definition',
        IllegalReturn: 'Illegal return statement',
        IllegalSpread: 'Illegal spread element',
        StrictModeWith:  'Strict mode code may not include a with statement',
        StrictCatchVariable:  'Catch variable may not be eval or arguments in strict mode',
        StrictVarName:  'Variable name may not be eval or arguments in strict mode',
        StrictParamName:  'Parameter name eval or arguments is not allowed in strict mode',
        StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
        ParameterAfterRestParameter: 'Rest parameter must be final parameter of an argument list',
        DefaultRestParameter: 'Rest parameter can not have a default value',
        ElementAfterSpreadElement: 'Spread must be the final element of an element list',
        PropertyAfterSpreadProperty: 'A rest property must be the final property of an object literal',
        ObjectPatternAsRestParameter: 'Invalid rest parameter',
        ObjectPatternAsSpread: 'Invalid spread argument',
        StrictFunctionName:  'Function name may not be eval or arguments in strict mode',
        StrictOctalLiteral:  'Octal literals are not allowed in strict mode.',
        StrictDelete:  'Delete of an unqualified identifier in strict mode.',
        StrictDuplicateProperty:  'Duplicate data property in object literal not allowed in strict mode',
        AccessorDataProperty:  'Object literal may not have data and accessor property with the same name',
        AccessorGetSet:  'Object literal may not have multiple get/set accessors with the same name',
        StrictLHSAssignment:  'Assignment to eval or arguments is not allowed in strict mode',
        StrictLHSPostfix:  'Postfix increment/decrement may not have eval or arguments operand in strict mode',
        StrictLHSPrefix:  'Prefix increment/decrement may not have eval or arguments operand in strict mode',
        StrictReservedWord:  'Use of future reserved word in strict mode',
        MissingFromClause: 'Missing from clause',
        NoAsAfterImportNamespace: 'Missing as after import *',
        InvalidModuleSpecifier: 'Invalid module specifier',
        NoUnintializedConst: 'Const must be initialized',
        ComprehensionRequiresBlock: 'Comprehension must have at least one block',
        ComprehensionError:  'Comprehension Error',
        EachNotAllowed:  'Each is not supported',
        InvalidXJSAttributeValue: 'XJS value should be either an expression or a quoted XJS text',
        ExpectedXJSClosingTag: 'Expected corresponding XJS closing tag for %0',
        AdjacentXJSElements: 'Adjacent XJS elements must be wrapped in an enclosing tag',
        ConfusedAboutFunctionType: 'Unexpected token =>. It looks like ' +
            'you are trying to write a function type, but you ended up ' +
            'writing a grouped type followed by an =>, which is a syntax ' +
            'error. Remember, function type parameters are named so function ' +
            'types look like (name1: type1, name2: type2) => returnType. You ' +
            'probably wrote (type1) => returnType'
    };

    // See also tools/generate-unicode-regex.py.
    Regex = {
        NonAsciiIdentifierStart: new RegExp('[\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]'),
        NonAsciiIdentifierPart: new RegExp('[\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u0487\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u0669\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07c0-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0\u08a2-\u08ac\u08e4-\u08fe\u0900-\u0963\u0966-\u096f\u0971-\u0977\u0979-\u097f\u0981-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7\u09c8\u09cb-\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09e6-\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b66-\u0b6f\u0b71\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c58\u0c59\u0c60-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1\u0cf2\u0d02\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d66-\u0d6f\u0d7a-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e50-\u0e59\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1049\u1050-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772\u1773\u1780-\u17d3\u17d7\u17dc\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191c\u1920-\u192b\u1930-\u193b\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19d9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa7\u1b00-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1bf3\u1c00-\u1c37\u1c40-\u1c49\u1c4d-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1d00-\u1de6\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200c\u200d\u203f\u2040\u2054\u2071\u207f\u2090-\u209c\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005-\u3007\u3021-\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u3099\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua62b\ua640-\ua66f\ua674-\ua67d\ua67f-\ua697\ua69f-\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua827\ua840-\ua873\ua880-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f7\ua8fb\ua900-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf-\ua9d9\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa60-\uaa76\uaa7a\uaa7b\uaa80-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabea\uabec\uabed\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]'),
        LeadingZeros: new RegExp('^0+(?!$)')
    };

    // Ensure the condition is true, otherwise throw an error.
    // This is only to have a better contract semantic, i.e. another safety net
    // to catch a logic error. The condition shall be fulfilled in normal case.
    // Do NOT use this to enforce a certain condition on any user input.

    function assert(condition, message) {
        if (!condition) {
            throw new Error('ASSERT: ' + message);
        }
    }

    function isDecimalDigit(ch) {
        return (ch >= 48 && ch <= 57);   // 0..9
    }

    function isHexDigit(ch) {
        return '0123456789abcdefABCDEF'.indexOf(ch) >= 0;
    }

    function isOctalDigit(ch) {
        return '01234567'.indexOf(ch) >= 0;
    }


    // 7.2 White Space

    function isWhiteSpace(ch) {
        return (ch === 32) ||  // space
            (ch === 9) ||      // tab
            (ch === 0xB) ||
            (ch === 0xC) ||
            (ch === 0xA0) ||
            (ch >= 0x1680 && '\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\uFEFF'.indexOf(String.fromCharCode(ch)) > 0);
    }

    // 7.3 Line Terminators

    function isLineTerminator(ch) {
        return (ch === 10) || (ch === 13) || (ch === 0x2028) || (ch === 0x2029);
    }

    // 7.6 Identifier Names and Identifiers

    function isIdentifierStart(ch) {
        return (ch === 36) || (ch === 95) ||  // $ (dollar) and _ (underscore)
            (ch >= 65 && ch <= 90) ||         // A..Z
            (ch >= 97 && ch <= 122) ||        // a..z
            (ch === 92) ||                    // \ (backslash)
            ((ch >= 0x80) && Regex.NonAsciiIdentifierStart.test(String.fromCharCode(ch)));
    }

    function isIdentifierPart(ch) {
        return (ch === 36) || (ch === 95) ||  // $ (dollar) and _ (underscore)
            (ch >= 65 && ch <= 90) ||         // A..Z
            (ch >= 97 && ch <= 122) ||        // a..z
            (ch >= 48 && ch <= 57) ||         // 0..9
            (ch === 92) ||                    // \ (backslash)
            ((ch >= 0x80) && Regex.NonAsciiIdentifierPart.test(String.fromCharCode(ch)));
    }

    // 7.6.1.2 Future Reserved Words

    function isFutureReservedWord(id) {
        switch (id) {
        case 'class':
        case 'enum':
        case 'export':
        case 'extends':
        case 'import':
        case 'super':
            return true;
        default:
            return false;
        }
    }

    function isStrictModeReservedWord(id) {
        switch (id) {
        case 'implements':
        case 'interface':
        case 'package':
        case 'private':
        case 'protected':
        case 'public':
        case 'static':
        case 'yield':
        case 'let':
            return true;
        default:
            return false;
        }
    }

    function isRestrictedWord(id) {
        return id === 'eval' || id === 'arguments';
    }

    // 7.6.1.1 Keywords

    function isKeyword(id) {
        if (strict && isStrictModeReservedWord(id)) {
            return true;
        }

        // 'const' is specialized as Keyword in V8.
        // 'yield' is only treated as a keyword in strict mode.
        // 'let' is for compatiblity with SpiderMonkey and ES.next.
        // Some others are from future reserved words.

        switch (id.length) {
        case 2:
            return (id === 'if') || (id === 'in') || (id === 'do');
        case 3:
            return (id === 'var') || (id === 'for') || (id === 'new') ||
                (id === 'try') || (id === 'let');
        case 4:
            return (id === 'this') || (id === 'else') || (id === 'case') ||
                (id === 'void') || (id === 'with') || (id === 'enum');
        case 5:
            return (id === 'while') || (id === 'break') || (id === 'catch') ||
                (id === 'throw') || (id === 'const') ||
                (id === 'class') || (id === 'super');
        case 6:
            return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
                (id === 'switch') || (id === 'export') || (id === 'import');
        case 7:
            return (id === 'default') || (id === 'finally') || (id === 'extends');
        case 8:
            return (id === 'function') || (id === 'continue') || (id === 'debugger');
        case 10:
            return (id === 'instanceof');
        default:
            return false;
        }
    }

    // 7.4 Comments

    function skipComment() {
        var ch, blockComment, lineComment;

        blockComment = false;
        lineComment = false;

        while (index < length) {
            ch = source.charCodeAt(index);

            if (lineComment) {
                ++index;
                if (isLineTerminator(ch)) {
                    lineComment = false;
                    if (ch === 13 && source.charCodeAt(index) === 10) {
                        ++index;
                    }
                    ++lineNumber;
                    lineStart = index;
                }
            } else if (blockComment) {
                if (isLineTerminator(ch)) {
                    if (ch === 13) {
                        ++index;
                    }
                    if (ch !== 13 || source.charCodeAt(index) === 10) {
                        ++lineNumber;
                        ++index;
                        lineStart = index;
                        if (index >= length) {
                            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                        }
                    }
                } else {
                    ch = source.charCodeAt(index++);
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                    // Block comment ends with '*/' (char #42, char #47).
                    if (ch === 42) {
                        ch = source.charCodeAt(index);
                        if (ch === 47) {
                            ++index;
                            blockComment = false;
                        }
                    }
                }
            } else if (ch === 47) {
                ch = source.charCodeAt(index + 1);
                // Line comment starts with '//' (char #47, char #47).
                if (ch === 47) {
                    index += 2;
                    lineComment = true;
                } else if (ch === 42) {
                    // Block comment starts with '/*' (char #47, char #42).
                    index += 2;
                    blockComment = true;
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                } else {
                    break;
                }
            } else if (isWhiteSpace(ch)) {
                ++index;
            } else if (isLineTerminator(ch)) {
                ++index;
                if (ch === 13 && source.charCodeAt(index) === 10) {
                    ++index;
                }
                ++lineNumber;
                lineStart = index;
            } else {
                break;
            }
        }
    }

    function scanHexEscape(prefix) {
        var i, len, ch, code = 0;

        len = (prefix === 'u') ? 4 : 2;
        for (i = 0; i < len; ++i) {
            if (index < length && isHexDigit(source[index])) {
                ch = source[index++];
                code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
            } else {
                return '';
            }
        }
        return String.fromCharCode(code);
    }

    function scanUnicodeCodePointEscape() {
        var ch, code, cu1, cu2;

        ch = source[index];
        code = 0;

        // At least, one hex digit is required.
        if (ch === '}') {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        while (index < length) {
            ch = source[index++];
            if (!isHexDigit(ch)) {
                break;
            }
            code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
        }

        if (code > 0x10FFFF || ch !== '}') {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        // UTF-16 Encoding
        if (code <= 0xFFFF) {
            return String.fromCharCode(code);
        }
        cu1 = ((code - 0x10000) >> 10) + 0xD800;
        cu2 = ((code - 0x10000) & 1023) + 0xDC00;
        return String.fromCharCode(cu1, cu2);
    }

    function getEscapedIdentifier() {
        var ch, id;

        ch = source.charCodeAt(index++);
        id = String.fromCharCode(ch);

        // '\u' (char #92, char #117) denotes an escaped character.
        if (ch === 92) {
            if (source.charCodeAt(index) !== 117) {
                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
            }
            ++index;
            ch = scanHexEscape('u');
            if (!ch || ch === '\\' || !isIdentifierStart(ch.charCodeAt(0))) {
                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
            }
            id = ch;
        }

        while (index < length) {
            ch = source.charCodeAt(index);
            if (!isIdentifierPart(ch)) {
                break;
            }
            ++index;
            id += String.fromCharCode(ch);

            // '\u' (char #92, char #117) denotes an escaped character.
            if (ch === 92) {
                id = id.substr(0, id.length - 1);
                if (source.charCodeAt(index) !== 117) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }
                ++index;
                ch = scanHexEscape('u');
                if (!ch || ch === '\\' || !isIdentifierPart(ch.charCodeAt(0))) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }
                id += ch;
            }
        }

        return id;
    }

    function getIdentifier() {
        var start, ch;

        start = index++;
        while (index < length) {
            ch = source.charCodeAt(index);
            if (ch === 92) {
                // Blackslash (char #92) marks Unicode escape sequence.
                index = start;
                return getEscapedIdentifier();
            }
            if (isIdentifierPart(ch)) {
                ++index;
            } else {
                break;
            }
        }

        return source.slice(start, index);
    }

    function scanIdentifier() {
        var start, id, type;

        start = index;

        // Backslash (char #92) starts an escaped character.
        id = (source.charCodeAt(index) === 92) ? getEscapedIdentifier() : getIdentifier();

        // There is no keyword or literal with only one character.
        // Thus, it must be an identifier.
        if (id.length === 1) {
            type = Token.Identifier;
        } else if (isKeyword(id)) {
            type = Token.Keyword;
        } else if (id === 'null') {
            type = Token.NullLiteral;
        } else if (id === 'true' || id === 'false') {
            type = Token.BooleanLiteral;
        } else {
            type = Token.Identifier;
        }

        return {
            type: type,
            value: id,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }


    // 7.7 Punctuators

    function scanPunctuator() {
        var start = index,
            code = source.charCodeAt(index),
            code2,
            ch1 = source[index],
            ch2,
            ch3,
            ch4;

        switch (code) {
        // Check for most common single-character punctuators.
        case 40:   // ( open bracket
        case 41:   // ) close bracket
        case 59:   // ; semicolon
        case 44:   // , comma
        case 123:  // { open curly brace
        case 125:  // } close curly brace
        case 91:   // [
        case 93:   // ]
        case 58:   // :
        case 63:   // ?
        case 126:  // ~
            ++index;
            if (extra.tokenize) {
                if (code === 40) {
                    extra.openParenToken = extra.tokens.length;
                } else if (code === 123) {
                    extra.openCurlyToken = extra.tokens.length;
                }
            }
            return {
                type: Token.Punctuator,
                value: String.fromCharCode(code),
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };

        default:
            code2 = source.charCodeAt(index + 1);

            // '=' (char #61) marks an assignment or comparison operator.
            if (code2 === 61) {
                switch (code) {
                case 37:  // %
                case 38:  // &
                case 42:  // *:
                case 43:  // +
                case 45:  // -
                case 47:  // /
                case 60:  // <
                case 62:  // >
                case 94:  // ^
                case 124: // |
                    index += 2;
                    return {
                        type: Token.Punctuator,
                        value: String.fromCharCode(code) + String.fromCharCode(code2),
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };

                case 33: // !
                case 61: // =
                    index += 2;

                    // !== and ===
                    if (source.charCodeAt(index) === 61) {
                        ++index;
                    }
                    return {
                        type: Token.Punctuator,
                        value: source.slice(start, index),
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };
                default:
                    break;
                }
            }
            break;
        }

        // Peek more characters.

        ch2 = source[index + 1];
        ch3 = source[index + 2];
        ch4 = source[index + 3];

        // 4-character punctuator: >>>=

        if (ch1 === '>' && ch2 === '>' && ch3 === '>') {
            if (ch4 === '=') {
                index += 4;
                return {
                    type: Token.Punctuator,
                    value: '>>>=',
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [start, index]
                };
            }
        }

        // 3-character punctuators: === !== >>> <<= >>=

        if (ch1 === '>' && ch2 === '>' && ch3 === '>') {
            index += 3;
            return {
                type: Token.Punctuator,
                value: '>>>',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '<' && ch2 === '<' && ch3 === '=') {
            index += 3;
            return {
                type: Token.Punctuator,
                value: '<<=',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '>' && ch2 === '>' && ch3 === '=') {
            index += 3;
            return {
                type: Token.Punctuator,
                value: '>>=',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '.' && ch2 === '.' && ch3 === '.') {
            index += 3;
            return {
                type: Token.Punctuator,
                value: '...',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        // Other 2-character punctuators: ++ -- << >> && ||

        // Don't match these tokens if we're in a type, since they never can
        // occur and can mess up types like Map<string, Array<string>>
        if (ch1 === ch2 && ('+-<>&|'.indexOf(ch1) >= 0) && !state.inType) {
            index += 2;
            return {
                type: Token.Punctuator,
                value: ch1 + ch2,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '=' && ch2 === '>') {
            index += 2;
            return {
                type: Token.Punctuator,
                value: '=>',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if ('<>=!+-*%&|^/'.indexOf(ch1) >= 0) {
            ++index;
            return {
                type: Token.Punctuator,
                value: ch1,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '.') {
            ++index;
            return {
                type: Token.Punctuator,
                value: ch1,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
    }

    // 7.8.3 Numeric Literals

    function scanHexLiteral(start) {
        var number = '';

        while (index < length) {
            if (!isHexDigit(source[index])) {
                break;
            }
            number += source[index++];
        }

        if (number.length === 0) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        if (isIdentifierStart(source.charCodeAt(index))) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.NumericLiteral,
            value: parseInt('0x' + number, 16),
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    function scanOctalLiteral(prefix, start) {
        var number, octal;

        if (isOctalDigit(prefix)) {
            octal = true;
            number = '0' + source[index++];
        } else {
            octal = false;
            ++index;
            number = '';
        }

        while (index < length) {
            if (!isOctalDigit(source[index])) {
                break;
            }
            number += source[index++];
        }

        if (!octal && number.length === 0) {
            // only 0o or 0O
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        if (isIdentifierStart(source.charCodeAt(index)) || isDecimalDigit(source.charCodeAt(index))) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.NumericLiteral,
            value: parseInt(number, 8),
            octal: octal,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    function scanNumericLiteral() {
        var number, start, ch, octal;

        ch = source[index];
        assert(isDecimalDigit(ch.charCodeAt(0)) || (ch === '.'),
            'Numeric literal must start with a decimal digit or a decimal point');

        start = index;
        number = '';
        if (ch !== '.') {
            number = source[index++];
            ch = source[index];

            // Hex number starts with '0x'.
            // Octal number starts with '0'.
            // Octal number in ES6 starts with '0o'.
            // Binary number in ES6 starts with '0b'.
            if (number === '0') {
                if (ch === 'x' || ch === 'X') {
                    ++index;
                    return scanHexLiteral(start);
                }
                if (ch === 'b' || ch === 'B') {
                    ++index;
                    number = '';

                    while (index < length) {
                        ch = source[index];
                        if (ch !== '0' && ch !== '1') {
                            break;
                        }
                        number += source[index++];
                    }

                    if (number.length === 0) {
                        // only 0b or 0B
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }

                    if (index < length) {
                        ch = source.charCodeAt(index);
                        if (isIdentifierStart(ch) || isDecimalDigit(ch)) {
                            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                        }
                    }
                    return {
                        type: Token.NumericLiteral,
                        value: parseInt(number, 2),
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };
                }
                if (ch === 'o' || ch === 'O' || isOctalDigit(ch)) {
                    return scanOctalLiteral(ch, start);
                }
                // decimal number starts with '0' such as '09' is illegal.
                if (ch && isDecimalDigit(ch.charCodeAt(0))) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }
            }

            while (isDecimalDigit(source.charCodeAt(index))) {
                number += source[index++];
            }
            ch = source[index];
        }

        if (ch === '.') {
            number += source[index++];
            while (isDecimalDigit(source.charCodeAt(index))) {
                number += source[index++];
            }
            ch = source[index];
        }

        if (ch === 'e' || ch === 'E') {
            number += source[index++];

            ch = source[index];
            if (ch === '+' || ch === '-') {
                number += source[index++];
            }
            if (isDecimalDigit(source.charCodeAt(index))) {
                while (isDecimalDigit(source.charCodeAt(index))) {
                    number += source[index++];
                }
            } else {
                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
            }
        }

        if (isIdentifierStart(source.charCodeAt(index))) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.NumericLiteral,
            value: parseFloat(number),
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    // 7.8.4 String Literals

    function scanStringLiteral() {
        var str = '', quote, start, ch, code, unescaped, restore, octal = false;

        quote = source[index];
        assert((quote === '\'' || quote === '"'),
            'String literal must starts with a quote');

        start = index;
        ++index;

        while (index < length) {
            ch = source[index++];

            if (ch === quote) {
                quote = '';
                break;
            } else if (ch === '\\') {
                ch = source[index++];
                if (!ch || !isLineTerminator(ch.charCodeAt(0))) {
                    switch (ch) {
                    case 'n':
                        str += '\n';
                        break;
                    case 'r':
                        str += '\r';
                        break;
                    case 't':
                        str += '\t';
                        break;
                    case 'u':
                    case 'x':
                        if (source[index] === '{') {
                            ++index;
                            str += scanUnicodeCodePointEscape();
                        } else {
                            restore = index;
                            unescaped = scanHexEscape(ch);
                            if (unescaped) {
                                str += unescaped;
                            } else {
                                index = restore;
                                str += ch;
                            }
                        }
                        break;
                    case 'b':
                        str += '\b';
                        break;
                    case 'f':
                        str += '\f';
                        break;
                    case 'v':
                        str += '\x0B';
                        break;

                    default:
                        if (isOctalDigit(ch)) {
                            code = '01234567'.indexOf(ch);

                            // \0 is not octal escape sequence
                            if (code !== 0) {
                                octal = true;
                            }

                            if (index < length && isOctalDigit(source[index])) {
                                octal = true;
                                code = code * 8 + '01234567'.indexOf(source[index++]);

                                // 3 digits are only allowed when string starts
                                // with 0, 1, 2, 3
                                if ('0123'.indexOf(ch) >= 0 &&
                                        index < length &&
                                        isOctalDigit(source[index])) {
                                    code = code * 8 + '01234567'.indexOf(source[index++]);
                                }
                            }
                            str += String.fromCharCode(code);
                        } else {
                            str += ch;
                        }
                        break;
                    }
                } else {
                    ++lineNumber;
                    if (ch ===  '\r' && source[index] === '\n') {
                        ++index;
                    }
                    lineStart = index;
                }
            } else if (isLineTerminator(ch.charCodeAt(0))) {
                break;
            } else {
                str += ch;
            }
        }

        if (quote !== '') {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.StringLiteral,
            value: str,
            octal: octal,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    function scanTemplate() {
        var cooked = '', ch, start, terminated, tail, restore, unescaped, code, octal;

        terminated = false;
        tail = false;
        start = index;

        ++index;

        while (index < length) {
            ch = source[index++];
            if (ch === '`') {
                tail = true;
                terminated = true;
                break;
            } else if (ch === '$') {
                if (source[index] === '{') {
                    ++index;
                    terminated = true;
                    break;
                }
                cooked += ch;
            } else if (ch === '\\') {
                ch = source[index++];
                if (!isLineTerminator(ch.charCodeAt(0))) {
                    switch (ch) {
                    case 'n':
                        cooked += '\n';
                        break;
                    case 'r':
                        cooked += '\r';
                        break;
                    case 't':
                        cooked += '\t';
                        break;
                    case 'u':
                    case 'x':
                        if (source[index] === '{') {
                            ++index;
                            cooked += scanUnicodeCodePointEscape();
                        } else {
                            restore = index;
                            unescaped = scanHexEscape(ch);
                            if (unescaped) {
                                cooked += unescaped;
                            } else {
                                index = restore;
                                cooked += ch;
                            }
                        }
                        break;
                    case 'b':
                        cooked += '\b';
                        break;
                    case 'f':
                        cooked += '\f';
                        break;
                    case 'v':
                        cooked += '\v';
                        break;

                    default:
                        if (isOctalDigit(ch)) {
                            code = '01234567'.indexOf(ch);

                            // \0 is not octal escape sequence
                            if (code !== 0) {
                                octal = true;
                            }

                            if (index < length && isOctalDigit(source[index])) {
                                octal = true;
                                code = code * 8 + '01234567'.indexOf(source[index++]);

                                // 3 digits are only allowed when string starts
                                // with 0, 1, 2, 3
                                if ('0123'.indexOf(ch) >= 0 &&
                                        index < length &&
                                        isOctalDigit(source[index])) {
                                    code = code * 8 + '01234567'.indexOf(source[index++]);
                                }
                            }
                            cooked += String.fromCharCode(code);
                        } else {
                            cooked += ch;
                        }
                        break;
                    }
                } else {
                    ++lineNumber;
                    if (ch ===  '\r' && source[index] === '\n') {
                        ++index;
                    }
                    lineStart = index;
                }
            } else if (isLineTerminator(ch.charCodeAt(0))) {
                ++lineNumber;
                if (ch ===  '\r' && source[index] === '\n') {
                    ++index;
                }
                lineStart = index;
                cooked += '\n';
            } else {
                cooked += ch;
            }
        }

        if (!terminated) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.Template,
            value: {
                cooked: cooked,
                raw: source.slice(start + 1, index - ((tail) ? 1 : 2))
            },
            tail: tail,
            octal: octal,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    function scanTemplateElement(option) {
        var startsWith, template;

        lookahead = null;
        skipComment();

        startsWith = (option.head) ? '`' : '}';

        if (source[index] !== startsWith) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        template = scanTemplate();

        peek();

        return template;
    }

    function scanRegExp() {
        var str, ch, start, pattern, flags, value, classMarker = false, restore, terminated = false, tmp;

        lookahead = null;
        skipComment();

        start = index;
        ch = source[index];
        assert(ch === '/', 'Regular expression literal must start with a slash');
        str = source[index++];

        while (index < length) {
            ch = source[index++];
            str += ch;
            if (classMarker) {
                if (ch === ']') {
                    classMarker = false;
                }
            } else {
                if (ch === '\\') {
                    ch = source[index++];
                    // ECMA-262 7.8.5
                    if (isLineTerminator(ch.charCodeAt(0))) {
                        throwError({}, Messages.UnterminatedRegExp);
                    }
                    str += ch;
                } else if (ch === '/') {
                    terminated = true;
                    break;
                } else if (ch === '[') {
                    classMarker = true;
                } else if (isLineTerminator(ch.charCodeAt(0))) {
                    throwError({}, Messages.UnterminatedRegExp);
                }
            }
        }

        if (!terminated) {
            throwError({}, Messages.UnterminatedRegExp);
        }

        // Exclude leading and trailing slash.
        pattern = str.substr(1, str.length - 2);

        flags = '';
        while (index < length) {
            ch = source[index];
            if (!isIdentifierPart(ch.charCodeAt(0))) {
                break;
            }

            ++index;
            if (ch === '\\' && index < length) {
                ch = source[index];
                if (ch === 'u') {
                    ++index;
                    restore = index;
                    ch = scanHexEscape('u');
                    if (ch) {
                        flags += ch;
                        for (str += '\\u'; restore < index; ++restore) {
                            str += source[restore];
                        }
                    } else {
                        index = restore;
                        flags += 'u';
                        str += '\\u';
                    }
                } else {
                    str += '\\';
                }
            } else {
                flags += ch;
                str += ch;
            }
        }

        tmp = pattern;
        if (flags.indexOf('u') >= 0) {
            // Replace each astral symbol and every Unicode code point
            // escape sequence that represents such a symbol with a single
            // ASCII symbol to avoid throwing on regular expressions that
            // are only valid in combination with the `/u` flag.
            tmp = tmp
                .replace(/\\u\{([0-9a-fA-F]{5,6})\}/g, 'x')
                .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, 'x');
        }

        // First, detect invalid regular expressions.
        try {
            value = new RegExp(tmp);
        } catch (e) {
            throwError({}, Messages.InvalidRegExp);
        }

        // Return a regular expression object for this pattern-flag pair, or
        // `null` in case the current environment doesn't support the flags it
        // uses.
        try {
            value = new RegExp(pattern, flags);
        } catch (exception) {
            value = null;
        }

        peek();

        if (extra.tokenize) {
            return {
                type: Token.RegularExpression,
                value: value,
                regex: {
                    pattern: pattern,
                    flags: flags
                },
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }
        return {
            literal: str,
            value: value,
            regex: {
                pattern: pattern,
                flags: flags
            },
            range: [start, index]
        };
    }

    function isIdentifierName(token) {
        return token.type === Token.Identifier ||
            token.type === Token.Keyword ||
            token.type === Token.BooleanLiteral ||
            token.type === Token.NullLiteral;
    }

    function advanceSlash() {
        var prevToken,
            checkToken;
        // Using the following algorithm:
        // https://github.com/mozilla/sweet.js/wiki/design
        prevToken = extra.tokens[extra.tokens.length - 1];
        if (!prevToken) {
            // Nothing before that: it cannot be a division.
            return scanRegExp();
        }
        if (prevToken.type === 'Punctuator') {
            if (prevToken.value === ')') {
                checkToken = extra.tokens[extra.openParenToken - 1];
                if (checkToken &&
                        checkToken.type === 'Keyword' &&
                        (checkToken.value === 'if' ||
                         checkToken.value === 'while' ||
                         checkToken.value === 'for' ||
                         checkToken.value === 'with')) {
                    return scanRegExp();
                }
                return scanPunctuator();
            }
            if (prevToken.value === '}') {
                // Dividing a function by anything makes little sense,
                // but we have to check for that.
                if (extra.tokens[extra.openCurlyToken - 3] &&
                        extra.tokens[extra.openCurlyToken - 3].type === 'Keyword') {
                    // Anonymous function.
                    checkToken = extra.tokens[extra.openCurlyToken - 4];
                    if (!checkToken) {
                        return scanPunctuator();
                    }
                } else if (extra.tokens[extra.openCurlyToken - 4] &&
                        extra.tokens[extra.openCurlyToken - 4].type === 'Keyword') {
                    // Named function.
                    checkToken = extra.tokens[extra.openCurlyToken - 5];
                    if (!checkToken) {
                        return scanRegExp();
                    }
                } else {
                    return scanPunctuator();
                }
                // checkToken determines whether the function is
                // a declaration or an expression.
                if (FnExprTokens.indexOf(checkToken.value) >= 0) {
                    // It is an expression.
                    return scanPunctuator();
                }
                // It is a declaration.
                return scanRegExp();
            }
            return scanRegExp();
        }
        if (prevToken.type === 'Keyword') {
            return scanRegExp();
        }
        return scanPunctuator();
    }

    function advance() {
        var ch;

        if (!state.inXJSChild) {
            skipComment();
        }

        if (index >= length) {
            return {
                type: Token.EOF,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [index, index]
            };
        }

        if (state.inXJSChild) {
            return advanceXJSChild();
        }

        ch = source.charCodeAt(index);

        // Very common: ( and ) and ;
        if (ch === 40 || ch === 41 || ch === 58) {
            return scanPunctuator();
        }

        // String literal starts with single quote (#39) or double quote (#34).
        if (ch === 39 || ch === 34) {
            if (state.inXJSTag) {
                return scanXJSStringLiteral();
            }
            return scanStringLiteral();
        }

        if (state.inXJSTag && isXJSIdentifierStart(ch)) {
            return scanXJSIdentifier();
        }

        if (ch === 96) {
            return scanTemplate();
        }
        if (isIdentifierStart(ch)) {
            return scanIdentifier();
        }

        // Dot (.) char #46 can also start a floating-point number, hence the need
        // to check the next character.
        if (ch === 46) {
            if (isDecimalDigit(source.charCodeAt(index + 1))) {
                return scanNumericLiteral();
            }
            return scanPunctuator();
        }

        if (isDecimalDigit(ch)) {
            return scanNumericLiteral();
        }

        // Slash (/) char #47 can also start a regex.
        if (extra.tokenize && ch === 47) {
            return advanceSlash();
        }

        return scanPunctuator();
    }

    function lex() {
        var token;

        token = lookahead;
        index = token.range[1];
        lineNumber = token.lineNumber;
        lineStart = token.lineStart;

        lookahead = advance();

        index = token.range[1];
        lineNumber = token.lineNumber;
        lineStart = token.lineStart;

        return token;
    }

    function peek() {
        var pos, line, start;

        pos = index;
        line = lineNumber;
        start = lineStart;
        lookahead = advance();
        index = pos;
        lineNumber = line;
        lineStart = start;
    }

    function lookahead2() {
        var adv, pos, line, start, result;

        // If we are collecting the tokens, don't grab the next one yet.
        adv = (typeof extra.advance === 'function') ? extra.advance : advance;

        pos = index;
        line = lineNumber;
        start = lineStart;

        // Scan for the next immediate token.
        if (lookahead === null) {
            lookahead = adv();
        }
        index = lookahead.range[1];
        lineNumber = lookahead.lineNumber;
        lineStart = lookahead.lineStart;

        // Grab the token right after.
        result = adv();
        index = pos;
        lineNumber = line;
        lineStart = start;

        return result;
    }

    function rewind(token) {
        index = token.range[0];
        lineNumber = token.lineNumber;
        lineStart = token.lineStart;
        lookahead = token;
    }

    function markerCreate() {
        if (!extra.loc && !extra.range) {
            return undefined;
        }
        skipComment();
        return {offset: index, line: lineNumber, col: index - lineStart};
    }

    function markerCreatePreserveWhitespace() {
        if (!extra.loc && !extra.range) {
            return undefined;
        }
        return {offset: index, line: lineNumber, col: index - lineStart};
    }

    function processComment(node) {
        var lastChild,
            trailingComments,
            bottomRight = extra.bottomRightStack,
            last = bottomRight[bottomRight.length - 1];

        if (node.type === Syntax.Program) {
            if (node.body.length > 0) {
                return;
            }
        }

        if (extra.trailingComments.length > 0) {
            if (extra.trailingComments[0].range[0] >= node.range[1]) {
                trailingComments = extra.trailingComments;
                extra.trailingComments = [];
            } else {
                extra.trailingComments.length = 0;
            }
        } else {
            if (last && last.trailingComments && last.trailingComments[0].range[0] >= node.range[1]) {
                trailingComments = last.trailingComments;
                delete last.trailingComments;
            }
        }

        // Eating the stack.
        if (last) {
            while (last && last.range[0] >= node.range[0]) {
                lastChild = last;
                last = bottomRight.pop();
            }
        }

        if (lastChild) {
            if (lastChild.leadingComments && lastChild.leadingComments[lastChild.leadingComments.length - 1].range[1] <= node.range[0]) {
                node.leadingComments = lastChild.leadingComments;
                delete lastChild.leadingComments;
            }
        } else if (extra.leadingComments.length > 0 && extra.leadingComments[extra.leadingComments.length - 1].range[1] <= node.range[0]) {
            node.leadingComments = extra.leadingComments;
            extra.leadingComments = [];
        }

        if (trailingComments) {
            node.trailingComments = trailingComments;
        }

        bottomRight.push(node);
    }

    function markerApply(marker, node) {
        if (extra.range) {
            node.range = [marker.offset, index];
        }
        if (extra.loc) {
            node.loc = {
                start: {
                    line: marker.line,
                    column: marker.col
                },
                end: {
                    line: lineNumber,
                    column: index - lineStart
                }
            };
            node = delegate.postProcess(node);
        }
        if (extra.attachComment) {
            processComment(node);
        }
        return node;
    }

    SyntaxTreeDelegate = {

        name: 'SyntaxTree',

        postProcess: function (node) {
            return node;
        },

        createArrayExpression: function (elements) {
            return {
                type: Syntax.ArrayExpression,
                elements: elements
            };
        },

        createAssignmentExpression: function (operator, left, right) {
            return {
                type: Syntax.AssignmentExpression,
                operator: operator,
                left: left,
                right: right
            };
        },

        createBinaryExpression: function (operator, left, right) {
            var type = (operator === '||' || operator === '&&') ? Syntax.LogicalExpression :
                        Syntax.BinaryExpression;
            return {
                type: type,
                operator: operator,
                left: left,
                right: right
            };
        },

        createBlockStatement: function (body) {
            return {
                type: Syntax.BlockStatement,
                body: body
            };
        },

        createBreakStatement: function (label) {
            return {
                type: Syntax.BreakStatement,
                label: label
            };
        },

        createCallExpression: function (callee, args) {
            return {
                type: Syntax.CallExpression,
                callee: callee,
                'arguments': args
            };
        },

        createCatchClause: function (param, body) {
            return {
                type: Syntax.CatchClause,
                param: param,
                body: body
            };
        },

        createConditionalExpression: function (test, consequent, alternate) {
            return {
                type: Syntax.ConditionalExpression,
                test: test,
                consequent: consequent,
                alternate: alternate
            };
        },

        createContinueStatement: function (label) {
            return {
                type: Syntax.ContinueStatement,
                label: label
            };
        },

        createDebuggerStatement: function () {
            return {
                type: Syntax.DebuggerStatement
            };
        },

        createDoWhileStatement: function (body, test) {
            return {
                type: Syntax.DoWhileStatement,
                body: body,
                test: test
            };
        },

        createEmptyStatement: function () {
            return {
                type: Syntax.EmptyStatement
            };
        },

        createExpressionStatement: function (expression) {
            return {
                type: Syntax.ExpressionStatement,
                expression: expression
            };
        },

        createForStatement: function (init, test, update, body) {
            return {
                type: Syntax.ForStatement,
                init: init,
                test: test,
                update: update,
                body: body
            };
        },

        createForInStatement: function (left, right, body) {
            return {
                type: Syntax.ForInStatement,
                left: left,
                right: right,
                body: body,
                each: false
            };
        },

        createForOfStatement: function (left, right, body) {
            return {
                type: Syntax.ForOfStatement,
                left: left,
                right: right,
                body: body
            };
        },

        createFunctionDeclaration: function (id, params, defaults, body, rest, generator, expression,
                                             isAsync, returnType, typeParameters) {
            var funDecl = {
                type: Syntax.FunctionDeclaration,
                id: id,
                params: params,
                defaults: defaults,
                body: body,
                rest: rest,
                generator: generator,
                expression: expression,
                returnType: returnType,
                typeParameters: typeParameters
            };

            if (isAsync) {
                funDecl.async = true;
            }

            return funDecl;
        },

        createFunctionExpression: function (id, params, defaults, body, rest, generator, expression,
                                            isAsync, returnType, typeParameters) {
            var funExpr = {
                type: Syntax.FunctionExpression,
                id: id,
                params: params,
                defaults: defaults,
                body: body,
                rest: rest,
                generator: generator,
                expression: expression,
                returnType: returnType,
                typeParameters: typeParameters
            };

            if (isAsync) {
                funExpr.async = true;
            }

            return funExpr;
        },

        createIdentifier: function (name) {
            return {
                type: Syntax.Identifier,
                name: name,
                // Only here to initialize the shape of the object to ensure
                // that the 'typeAnnotation' key is ordered before others that
                // are added later (like 'loc' and 'range'). This just helps
                // keep the shape of Identifier nodes consistent with everything
                // else.
                typeAnnotation: undefined,
                optional: undefined
            };
        },

        createTypeAnnotation: function (typeAnnotation) {
            return {
                type: Syntax.TypeAnnotation,
                typeAnnotation: typeAnnotation
            };
        },

        createFunctionTypeAnnotation: function (params, returnType, rest, typeParameters) {
            return {
                type: Syntax.FunctionTypeAnnotation,
                params: params,
                returnType: returnType,
                rest: rest,
                typeParameters: typeParameters
            };
        },

        createFunctionTypeParam: function (name, typeAnnotation, optional) {
            return {
                type: Syntax.FunctionTypeParam,
                name: name,
                typeAnnotation: typeAnnotation,
                optional: optional
            };
        },

        createNullableTypeAnnotation: function (typeAnnotation) {
            return {
                type: Syntax.NullableTypeAnnotation,
                typeAnnotation: typeAnnotation
            };
        },

        createArrayTypeAnnotation: function (elementType) {
            return {
                type: Syntax.ArrayTypeAnnotation,
                elementType: elementType
            };
        },

        createGenericTypeAnnotation: function (id, typeParameters) {
            return {
                type: Syntax.GenericTypeAnnotation,
                id: id,
                typeParameters: typeParameters
            };
        },

        createQualifiedTypeIdentifier: function (qualification, id) {
            return {
                type: Syntax.QualifiedTypeIdentifier,
                qualification: qualification,
                id: id
            };
        },

        createTypeParameterDeclaration: function (params) {
            return {
                type: Syntax.TypeParameterDeclaration,
                params: params
            };
        },

        createTypeParameterInstantiation: function (params) {
            return {
                type: Syntax.TypeParameterInstantiation,
                params: params
            };
        },

        createAnyTypeAnnotation: function () {
            return {
                type: Syntax.AnyTypeAnnotation
            };
        },

        createBooleanTypeAnnotation: function () {
            return {
                type: Syntax.BooleanTypeAnnotation
            };
        },

        createNumberTypeAnnotation: function () {
            return {
                type: Syntax.NumberTypeAnnotation
            };
        },

        createStringTypeAnnotation: function () {
            return {
                type: Syntax.StringTypeAnnotation
            };
        },

        createStringLiteralTypeAnnotation: function (token) {
            return {
                type: Syntax.StringLiteralTypeAnnotation,
                value: token.value,
                raw: source.slice(token.range[0], token.range[1])
            };
        },

        createVoidTypeAnnotation: function () {
            return {
                type: Syntax.VoidTypeAnnotation
            };
        },

        createTypeofTypeAnnotation: function (argument) {
            return {
                type: Syntax.TypeofTypeAnnotation,
                argument: argument
            };
        },

        createTupleTypeAnnotation: function (types) {
            return {
                type: Syntax.TupleTypeAnnotation,
                types: types
            };
        },

        createObjectTypeAnnotation: function (properties, indexers, callProperties) {
            return {
                type: Syntax.ObjectTypeAnnotation,
                properties: properties,
                indexers: indexers,
                callProperties: callProperties
            };
        },

        createObjectTypeIndexer: function (id, key, value, isStatic) {
            return {
                type: Syntax.ObjectTypeIndexer,
                id: id,
                key: key,
                value: value,
                "static": isStatic
            };
        },

        createObjectTypeCallProperty: function (value, isStatic) {
            return {
                type: Syntax.ObjectTypeCallProperty,
                value: value,
                "static": isStatic
            };
        },

        createObjectTypeProperty: function (key, value, optional, isStatic) {
            return {
                type: Syntax.ObjectTypeProperty,
                key: key,
                value: value,
                optional: optional,
                "static": isStatic
            };
        },

        createUnionTypeAnnotation: function (types) {
            return {
                type: Syntax.UnionTypeAnnotation,
                types: types
            };
        },

        createIntersectionTypeAnnotation: function (types) {
            return {
                type: Syntax.IntersectionTypeAnnotation,
                types: types
            };
        },

        createTypeAlias: function (id, typeParameters, right) {
            return {
                type: Syntax.TypeAlias,
                id: id,
                typeParameters: typeParameters,
                right: right
            };
        },

        createInterface: function (id, typeParameters, body, extended) {
            return {
                type: Syntax.InterfaceDeclaration,
                id: id,
                typeParameters: typeParameters,
                body: body,
                "extends": extended
            };
        },

        createInterfaceExtends: function (id, typeParameters) {
            return {
                type: Syntax.InterfaceExtends,
                id: id,
                typeParameters: typeParameters
            };
        },

        createDeclareFunction: function (id) {
            return {
                type: Syntax.DeclareFunction,
                id: id
            };
        },

        createDeclareVariable: function (id) {
            return {
                type: Syntax.DeclareVariable,
                id: id
            };
        },

        createDeclareModule: function (id, body) {
            return {
                type: Syntax.DeclareModule,
                id: id,
                body: body
            };
        },

        createXJSAttribute: function (name, value) {
            return {
                type: Syntax.XJSAttribute,
                name: name,
                value: value || null
            };
        },

        createXJSSpreadAttribute: function (argument) {
            return {
                type: Syntax.XJSSpreadAttribute,
                argument: argument
            };
        },

        createXJSIdentifier: function (name) {
            return {
                type: Syntax.XJSIdentifier,
                name: name
            };
        },

        createXJSNamespacedName: function (namespace, name) {
            return {
                type: Syntax.XJSNamespacedName,
                namespace: namespace,
                name: name
            };
        },

        createXJSMemberExpression: function (object, property) {
            return {
                type: Syntax.XJSMemberExpression,
                object: object,
                property: property
            };
        },

        createXJSElement: function (openingElement, closingElement, children) {
            return {
                type: Syntax.XJSElement,
                openingElement: openingElement,
                closingElement: closingElement,
                children: children
            };
        },

        createXJSEmptyExpression: function () {
            return {
                type: Syntax.XJSEmptyExpression
            };
        },

        createXJSExpressionContainer: function (expression) {
            return {
                type: Syntax.XJSExpressionContainer,
                expression: expression
            };
        },

        createXJSOpeningElement: function (name, attributes, selfClosing) {
            return {
                type: Syntax.XJSOpeningElement,
                name: name,
                selfClosing: selfClosing,
                attributes: attributes
            };
        },

        createXJSClosingElement: function (name) {
            return {
                type: Syntax.XJSClosingElement,
                name: name
            };
        },

        createIfStatement: function (test, consequent, alternate) {
            return {
                type: Syntax.IfStatement,
                test: test,
                consequent: consequent,
                alternate: alternate
            };
        },

        createLabeledStatement: function (label, body) {
            return {
                type: Syntax.LabeledStatement,
                label: label,
                body: body
            };
        },

        createLiteral: function (token) {
            var object = {
                type: Syntax.Literal,
                value: token.value,
                raw: source.slice(token.range[0], token.range[1])
            };
            if (token.regex) {
                object.regex = token.regex;
            }
            return object;
        },

        createMemberExpression: function (accessor, object, property) {
            return {
                type: Syntax.MemberExpression,
                computed: accessor === '[',
                object: object,
                property: property
            };
        },

        createNewExpression: function (callee, args) {
            return {
                type: Syntax.NewExpression,
                callee: callee,
                'arguments': args
            };
        },

        createObjectExpression: function (properties) {
            return {
                type: Syntax.ObjectExpression,
                properties: properties
            };
        },

        createPostfixExpression: function (operator, argument) {
            return {
                type: Syntax.UpdateExpression,
                operator: operator,
                argument: argument,
                prefix: false
            };
        },

        createProgram: function (body) {
            return {
                type: Syntax.Program,
                body: body
            };
        },

        createProperty: function (kind, key, value, method, shorthand, computed) {
            return {
                type: Syntax.Property,
                key: key,
                value: value,
                kind: kind,
                method: method,
                shorthand: shorthand,
                computed: computed
            };
        },

        createReturnStatement: function (argument) {
            return {
                type: Syntax.ReturnStatement,
                argument: argument
            };
        },

        createSequenceExpression: function (expressions) {
            return {
                type: Syntax.SequenceExpression,
                expressions: expressions
            };
        },

        createSwitchCase: function (test, consequent) {
            return {
                type: Syntax.SwitchCase,
                test: test,
                consequent: consequent
            };
        },

        createSwitchStatement: function (discriminant, cases) {
            return {
                type: Syntax.SwitchStatement,
                discriminant: discriminant,
                cases: cases
            };
        },

        createThisExpression: function () {
            return {
                type: Syntax.ThisExpression
            };
        },

        createThrowStatement: function (argument) {
            return {
                type: Syntax.ThrowStatement,
                argument: argument
            };
        },

        createTryStatement: function (block, guardedHandlers, handlers, finalizer) {
            return {
                type: Syntax.TryStatement,
                block: block,
                guardedHandlers: guardedHandlers,
                handlers: handlers,
                finalizer: finalizer
            };
        },

        createUnaryExpression: function (operator, argument) {
            if (operator === '++' || operator === '--') {
                return {
                    type: Syntax.UpdateExpression,
                    operator: operator,
                    argument: argument,
                    prefix: true
                };
            }
            return {
                type: Syntax.UnaryExpression,
                operator: operator,
                argument: argument,
                prefix: true
            };
        },

        createVariableDeclaration: function (declarations, kind) {
            return {
                type: Syntax.VariableDeclaration,
                declarations: declarations,
                kind: kind
            };
        },

        createVariableDeclarator: function (id, init) {
            return {
                type: Syntax.VariableDeclarator,
                id: id,
                init: init
            };
        },

        createWhileStatement: function (test, body) {
            return {
                type: Syntax.WhileStatement,
                test: test,
                body: body
            };
        },

        createWithStatement: function (object, body) {
            return {
                type: Syntax.WithStatement,
                object: object,
                body: body
            };
        },

        createTemplateElement: function (value, tail) {
            return {
                type: Syntax.TemplateElement,
                value: value,
                tail: tail
            };
        },

        createTemplateLiteral: function (quasis, expressions) {
            return {
                type: Syntax.TemplateLiteral,
                quasis: quasis,
                expressions: expressions
            };
        },

        createSpreadElement: function (argument) {
            return {
                type: Syntax.SpreadElement,
                argument: argument
            };
        },

        createSpreadProperty: function (argument) {
            return {
                type: Syntax.SpreadProperty,
                argument: argument
            };
        },

        createTaggedTemplateExpression: function (tag, quasi) {
            return {
                type: Syntax.TaggedTemplateExpression,
                tag: tag,
                quasi: quasi
            };
        },

        createArrowFunctionExpression: function (params, defaults, body, rest, expression, isAsync) {
            var arrowExpr = {
                type: Syntax.ArrowFunctionExpression,
                id: null,
                params: params,
                defaults: defaults,
                body: body,
                rest: rest,
                generator: false,
                expression: expression
            };

            if (isAsync) {
                arrowExpr.async = true;
            }

            return arrowExpr;
        },

        createMethodDefinition: function (propertyType, kind, key, value) {
            return {
                type: Syntax.MethodDefinition,
                key: key,
                value: value,
                kind: kind,
                'static': propertyType === ClassPropertyType["static"]
            };
        },

        createClassProperty: function (key, typeAnnotation, computed, isStatic) {
            return {
                type: Syntax.ClassProperty,
                key: key,
                typeAnnotation: typeAnnotation,
                computed: computed,
                "static": isStatic
            };
        },

        createClassBody: function (body) {
            return {
                type: Syntax.ClassBody,
                body: body
            };
        },

        createClassImplements: function (id, typeParameters) {
            return {
                type: Syntax.ClassImplements,
                id: id,
                typeParameters: typeParameters
            };
        },

        createClassExpression: function (id, superClass, body, typeParameters, superTypeParameters, implemented) {
            return {
                type: Syntax.ClassExpression,
                id: id,
                superClass: superClass,
                body: body,
                typeParameters: typeParameters,
                superTypeParameters: superTypeParameters,
                "implements": implemented
            };
        },

        createClassDeclaration: function (id, superClass, body, typeParameters, superTypeParameters, implemented) {
            return {
                type: Syntax.ClassDeclaration,
                id: id,
                superClass: superClass,
                body: body,
                typeParameters: typeParameters,
                superTypeParameters: superTypeParameters,
                "implements": implemented
            };
        },

        createModuleSpecifier: function (token) {
            return {
                type: Syntax.ModuleSpecifier,
                value: token.value,
                raw: source.slice(token.range[0], token.range[1])
            };
        },

        createExportSpecifier: function (id, name) {
            return {
                type: Syntax.ExportSpecifier,
                id: id,
                name: name
            };
        },

        createExportBatchSpecifier: function () {
            return {
                type: Syntax.ExportBatchSpecifier
            };
        },

        createImportDefaultSpecifier: function (id) {
            return {
                type: Syntax.ImportDefaultSpecifier,
                id: id
            };
        },

        createImportNamespaceSpecifier: function (id) {
            return {
                type: Syntax.ImportNamespaceSpecifier,
                id: id
            };
        },

        createExportDeclaration: function (isDefault, declaration, specifiers, source) {
            return {
                type: Syntax.ExportDeclaration,
                'default': !!isDefault,
                declaration: declaration,
                specifiers: specifiers,
                source: source
            };
        },

        createImportSpecifier: function (id, name) {
            return {
                type: Syntax.ImportSpecifier,
                id: id,
                name: name
            };
        },

        createImportDeclaration: function (specifiers, source) {
            return {
                type: Syntax.ImportDeclaration,
                specifiers: specifiers,
                source: source
            };
        },

        createYieldExpression: function (argument, delegate) {
            return {
                type: Syntax.YieldExpression,
                argument: argument,
                delegate: delegate
            };
        },

        createAwaitExpression: function (argument) {
            return {
                type: Syntax.AwaitExpression,
                argument: argument
            };
        },

        createComprehensionExpression: function (filter, blocks, body) {
            return {
                type: Syntax.ComprehensionExpression,
                filter: filter,
                blocks: blocks,
                body: body
            };
        }

    };

    // Return true if there is a line terminator before the next token.

    function peekLineTerminator() {
        var pos, line, start, found;

        pos = index;
        line = lineNumber;
        start = lineStart;
        skipComment();
        found = lineNumber !== line;
        index = pos;
        lineNumber = line;
        lineStart = start;

        return found;
    }

    // Throw an exception

    function throwError(token, messageFormat) {
        var error,
            args = Array.prototype.slice.call(arguments, 2),
            msg = messageFormat.replace(
                /%(\d)/g,
                function (whole, index) {
                    assert(index < args.length, 'Message reference must be in range');
                    return args[index];
                }
            );

        if (typeof token.lineNumber === 'number') {
            error = new Error('Line ' + token.lineNumber + ': ' + msg);
            error.index = token.range[0];
            error.lineNumber = token.lineNumber;
            error.column = token.range[0] - lineStart + 1;
        } else {
            error = new Error('Line ' + lineNumber + ': ' + msg);
            error.index = index;
            error.lineNumber = lineNumber;
            error.column = index - lineStart + 1;
        }

        error.description = msg;
        throw error;
    }

    function throwErrorTolerant() {
        try {
            throwError.apply(null, arguments);
        } catch (e) {
            if (extra.errors) {
                extra.errors.push(e);
            } else {
                throw e;
            }
        }
    }


    // Throw an exception because of the token.

    function throwUnexpected(token) {
        if (token.type === Token.EOF) {
            throwError(token, Messages.UnexpectedEOS);
        }

        if (token.type === Token.NumericLiteral) {
            throwError(token, Messages.UnexpectedNumber);
        }

        if (token.type === Token.StringLiteral || token.type === Token.XJSText) {
            throwError(token, Messages.UnexpectedString);
        }

        if (token.type === Token.Identifier) {
            throwError(token, Messages.UnexpectedIdentifier);
        }

        if (token.type === Token.Keyword) {
            if (isFutureReservedWord(token.value)) {
                throwError(token, Messages.UnexpectedReserved);
            } else if (strict && isStrictModeReservedWord(token.value)) {
                throwErrorTolerant(token, Messages.StrictReservedWord);
                return;
            }
            throwError(token, Messages.UnexpectedToken, token.value);
        }

        if (token.type === Token.Template) {
            throwError(token, Messages.UnexpectedTemplate, token.value.raw);
        }

        // BooleanLiteral, NullLiteral, or Punctuator.
        throwError(token, Messages.UnexpectedToken, token.value);
    }

    // Expect the next token to match the specified punctuator.
    // If not, an exception will be thrown.

    function expect(value) {
        var token = lex();
        if (token.type !== Token.Punctuator || token.value !== value) {
            throwUnexpected(token);
        }
    }

    // Expect the next token to match the specified keyword.
    // If not, an exception will be thrown.

    function expectKeyword(keyword, contextual) {
        var token = lex();
        if (token.type !== (contextual ? Token.Identifier : Token.Keyword) ||
                token.value !== keyword) {
            throwUnexpected(token);
        }
    }

    // Expect the next token to match the specified contextual keyword.
    // If not, an exception will be thrown.

    function expectContextualKeyword(keyword) {
        return expectKeyword(keyword, true);
    }

    // Return true if the next token matches the specified punctuator.

    function match(value) {
        return lookahead.type === Token.Punctuator && lookahead.value === value;
    }

    // Return true if the next token matches the specified keyword

    function matchKeyword(keyword, contextual) {
        var expectedType = contextual ? Token.Identifier : Token.Keyword;
        return lookahead.type === expectedType && lookahead.value === keyword;
    }

    // Return true if the next token matches the specified contextual keyword

    function matchContextualKeyword(keyword) {
        return matchKeyword(keyword, true);
    }

    // Return true if the next token is an assignment operator

    function matchAssign() {
        var op;

        if (lookahead.type !== Token.Punctuator) {
            return false;
        }
        op = lookahead.value;
        return op === '=' ||
            op === '*=' ||
            op === '/=' ||
            op === '%=' ||
            op === '+=' ||
            op === '-=' ||
            op === '<<=' ||
            op === '>>=' ||
            op === '>>>=' ||
            op === '&=' ||
            op === '^=' ||
            op === '|=';
    }

    // Note that 'yield' is treated as a keyword in strict mode, but a
    // contextual keyword (identifier) in non-strict mode, so we need to
    // use matchKeyword('yield', false) and matchKeyword('yield', true)
    // (i.e. matchContextualKeyword) appropriately.
    function matchYield() {
        return state.yieldAllowed && matchKeyword('yield', !strict);
    }

    function matchAsync() {
        var backtrackToken = lookahead, matches = false;

        if (matchContextualKeyword('async')) {
            lex(); // Make sure peekLineTerminator() starts after 'async'.
            matches = !peekLineTerminator();
            rewind(backtrackToken); // Revert the lex().
        }

        return matches;
    }

    function matchAwait() {
        return state.awaitAllowed && matchContextualKeyword('await');
    }

    function consumeSemicolon() {
        var line, oldIndex = index, oldLineNumber = lineNumber,
            oldLineStart = lineStart, oldLookahead = lookahead;

        // Catch the very common case first: immediately a semicolon (char #59).
        if (source.charCodeAt(index) === 59) {
            lex();
            return;
        }

        line = lineNumber;
        skipComment();
        if (lineNumber !== line) {
            index = oldIndex;
            lineNumber = oldLineNumber;
            lineStart = oldLineStart;
            lookahead = oldLookahead;
            return;
        }

        if (match(';')) {
            lex();
            return;
        }

        if (lookahead.type !== Token.EOF && !match('}')) {
            throwUnexpected(lookahead);
        }
    }

    // Return true if provided expression is LeftHandSideExpression

    function isLeftHandSide(expr) {
        return expr.type === Syntax.Identifier || expr.type === Syntax.MemberExpression;
    }

    function isAssignableLeftHandSide(expr) {
        return isLeftHandSide(expr) || expr.type === Syntax.ObjectPattern || expr.type === Syntax.ArrayPattern;
    }

    // 11.1.4 Array Initialiser

    function parseArrayInitialiser() {
        var elements = [], blocks = [], filter = null, tmp, possiblecomprehension = true, body,
            marker = markerCreate();

        expect('[');
        while (!match(']')) {
            if (lookahead.value === 'for' &&
                    lookahead.type === Token.Keyword) {
                if (!possiblecomprehension) {
                    throwError({}, Messages.ComprehensionError);
                }
                matchKeyword('for');
                tmp = parseForStatement({ignoreBody: true});
                tmp.of = tmp.type === Syntax.ForOfStatement;
                tmp.type = Syntax.ComprehensionBlock;
                if (tmp.left.kind) { // can't be let or const
                    throwError({}, Messages.ComprehensionError);
                }
                blocks.push(tmp);
            } else if (lookahead.value === 'if' &&
                           lookahead.type === Token.Keyword) {
                if (!possiblecomprehension) {
                    throwError({}, Messages.ComprehensionError);
                }
                expectKeyword('if');
                expect('(');
                filter = parseExpression();
                expect(')');
            } else if (lookahead.value === ',' &&
                           lookahead.type === Token.Punctuator) {
                possiblecomprehension = false; // no longer allowed.
                lex();
                elements.push(null);
            } else {
                tmp = parseSpreadOrAssignmentExpression();
                elements.push(tmp);
                if (tmp && tmp.type === Syntax.SpreadElement) {
                    if (!match(']')) {
                        throwError({}, Messages.ElementAfterSpreadElement);
                    }
                } else if (!(match(']') || matchKeyword('for') || matchKeyword('if'))) {
                    expect(','); // this lexes.
                    possiblecomprehension = false;
                }
            }
        }

        expect(']');

        if (filter && !blocks.length) {
            throwError({}, Messages.ComprehensionRequiresBlock);
        }

        if (blocks.length) {
            if (elements.length !== 1) {
                throwError({}, Messages.ComprehensionError);
            }
            return markerApply(marker, delegate.createComprehensionExpression(filter, blocks, elements[0]));
        }
        return markerApply(marker, delegate.createArrayExpression(elements));
    }

    // 11.1.5 Object Initialiser

    function parsePropertyFunction(options) {
        var previousStrict, previousYieldAllowed, previousAwaitAllowed,
            params, defaults, body, marker = markerCreate();

        previousStrict = strict;
        previousYieldAllowed = state.yieldAllowed;
        state.yieldAllowed = options.generator;
        previousAwaitAllowed = state.awaitAllowed;
        state.awaitAllowed = options.async;
        params = options.params || [];
        defaults = options.defaults || [];

        body = parseConciseBody();
        if (options.name && strict && isRestrictedWord(params[0].name)) {
            throwErrorTolerant(options.name, Messages.StrictParamName);
        }
        strict = previousStrict;
        state.yieldAllowed = previousYieldAllowed;
        state.awaitAllowed = previousAwaitAllowed;

        return markerApply(marker, delegate.createFunctionExpression(
            null,
            params,
            defaults,
            body,
            options.rest || null,
            options.generator,
            body.type !== Syntax.BlockStatement,
            options.async,
            options.returnType,
            options.typeParameters
        ));
    }


    function parsePropertyMethodFunction(options) {
        var previousStrict, tmp, method;

        previousStrict = strict;
        strict = true;

        tmp = parseParams();

        if (tmp.stricted) {
            throwErrorTolerant(tmp.stricted, tmp.message);
        }

        method = parsePropertyFunction({
            params: tmp.params,
            defaults: tmp.defaults,
            rest: tmp.rest,
            generator: options.generator,
            async: options.async,
            returnType: tmp.returnType,
            typeParameters: options.typeParameters
        });

        strict = previousStrict;

        return method;
    }


    function parseObjectPropertyKey() {
        var marker = markerCreate(),
            token = lex(),
            propertyKey,
            result;

        // Note: This function is called only from parseObjectProperty(), where
        // EOF and Punctuator tokens are already filtered out.

        if (token.type === Token.StringLiteral || token.type === Token.NumericLiteral) {
            if (strict && token.octal) {
                throwErrorTolerant(token, Messages.StrictOctalLiteral);
            }
            return markerApply(marker, delegate.createLiteral(token));
        }

        if (token.type === Token.Punctuator && token.value === '[') {
            // For computed properties we should skip the [ and ], and
            // capture in marker only the assignment expression itself.
            marker = markerCreate();
            propertyKey = parseAssignmentExpression();
            result = markerApply(marker, propertyKey);
            expect(']');
            return result;
        }

        return markerApply(marker, delegate.createIdentifier(token.value));
    }

    function parseObjectProperty() {
        var token, key, id, value, param, expr, computed,
            marker = markerCreate(), returnType;

        token = lookahead;
        computed = (token.value === '[');

        if (token.type === Token.Identifier || computed || matchAsync()) {
            id = parseObjectPropertyKey();

            if (match(':')) {
                lex();

                return markerApply(
                    marker,
                    delegate.createProperty(
                        'init',
                        id,
                        parseAssignmentExpression(),
                        false,
                        false,
                        computed
                    )
                );
            }

            if (match('(')) {
                return markerApply(
                    marker,
                    delegate.createProperty(
                        'init',
                        id,
                        parsePropertyMethodFunction({
                            generator: false,
                            async: false
                        }),
                        true,
                        false,
                        computed
                    )
                );
            }

            // Property Assignment: Getter and Setter.

            if (token.value === 'get') {
                computed = (lookahead.value === '[');
                key = parseObjectPropertyKey();

                expect('(');
                expect(')');
                if (match(':')) {
                    returnType = parseTypeAnnotation();
                }

                return markerApply(
                    marker,
                    delegate.createProperty(
                        'get',
                        key,
                        parsePropertyFunction({
                            generator: false,
                            async: false,
                            returnType: returnType
                        }),
                        false,
                        false,
                        computed
                    )
                );
            }

            if (token.value === 'set') {
                computed = (lookahead.value === '[');
                key = parseObjectPropertyKey();

                expect('(');
                token = lookahead;
                param = [ parseTypeAnnotatableIdentifier() ];
                expect(')');
                if (match(':')) {
                    returnType = parseTypeAnnotation();
                }

                return markerApply(
                    marker,
                    delegate.createProperty(
                        'set',
                        key,
                        parsePropertyFunction({
                            params: param,
                            generator: false,
                            async: false,
                            name: token,
                            returnType: returnType
                        }),
                        false,
                        false,
                        computed
                    )
                );
            }

            if (token.value === 'async') {
                computed = (lookahead.value === '[');
                key = parseObjectPropertyKey();

                return markerApply(
                    marker,
                    delegate.createProperty(
                        'init',
                        key,
                        parsePropertyMethodFunction({
                            generator: false,
                            async: true
                        }),
                        true,
                        false,
                        computed
                    )
                );
            }

            if (computed) {
                // Computed properties can only be used with full notation.
                throwUnexpected(lookahead);
            }

            return markerApply(
                marker,
                delegate.createProperty('init', id, id, false, true, false)
            );
        }

        if (token.type === Token.EOF || token.type === Token.Punctuator) {
            if (!match('*')) {
                throwUnexpected(token);
            }
            lex();

            computed = (lookahead.type === Token.Punctuator && lookahead.value === '[');

            id = parseObjectPropertyKey();

            if (!match('(')) {
                throwUnexpected(lex());
            }

            return markerApply(marker, delegate.createProperty('init', id, parsePropertyMethodFunction({ generator: true }), true, false, computed));
        }
        key = parseObjectPropertyKey();
        if (match(':')) {
            lex();
            return markerApply(marker, delegate.createProperty('init', key, parseAssignmentExpression(), false, false, false));
        }
        if (match('(')) {
            return markerApply(marker, delegate.createProperty('init', key, parsePropertyMethodFunction({ generator: false }), true, false, false));
        }
        throwUnexpected(lex());
    }

    function parseObjectSpreadProperty() {
        var marker = markerCreate();
        expect('...');
        return markerApply(marker, delegate.createSpreadProperty(parseAssignmentExpression()));
    }

    function parseObjectInitialiser() {
        var properties = [], property, name, key, kind, map = {}, toString = String,
            marker = markerCreate();

        expect('{');

        while (!match('}')) {
            if (match('...')) {
                property = parseObjectSpreadProperty();
            } else {
                property = parseObjectProperty();

                if (property.key.type === Syntax.Identifier) {
                    name = property.key.name;
                } else {
                    name = toString(property.key.value);
                }
                kind = (property.kind === 'init') ? PropertyKind.Data : (property.kind === 'get') ? PropertyKind.Get : PropertyKind.Set;

                key = '$' + name;
                if (Object.prototype.hasOwnProperty.call(map, key)) {
                    if (map[key] === PropertyKind.Data) {
                        if (strict && kind === PropertyKind.Data) {
                            throwErrorTolerant({}, Messages.StrictDuplicateProperty);
                        } else if (kind !== PropertyKind.Data) {
                            throwErrorTolerant({}, Messages.AccessorDataProperty);
                        }
                    } else {
                        if (kind === PropertyKind.Data) {
                            throwErrorTolerant({}, Messages.AccessorDataProperty);
                        } else if (map[key] & kind) {
                            throwErrorTolerant({}, Messages.AccessorGetSet);
                        }
                    }
                    map[key] |= kind;
                } else {
                    map[key] = kind;
                }
            }

            properties.push(property);

            if (!match('}')) {
                expect(',');
            }
        }

        expect('}');

        return markerApply(marker, delegate.createObjectExpression(properties));
    }

    function parseTemplateElement(option) {
        var marker = markerCreate(),
            token = scanTemplateElement(option);
        if (strict && token.octal) {
            throwError(token, Messages.StrictOctalLiteral);
        }
        return markerApply(marker, delegate.createTemplateElement({ raw: token.value.raw, cooked: token.value.cooked }, token.tail));
    }

    function parseTemplateLiteral() {
        var quasi, quasis, expressions, marker = markerCreate();

        quasi = parseTemplateElement({ head: true });
        quasis = [ quasi ];
        expressions = [];

        while (!quasi.tail) {
            expressions.push(parseExpression());
            quasi = parseTemplateElement({ head: false });
            quasis.push(quasi);
        }

        return markerApply(marker, delegate.createTemplateLiteral(quasis, expressions));
    }

    // 11.1.6 The Grouping Operator

    function parseGroupExpression() {
        var expr;

        expect('(');

        ++state.parenthesizedCount;

        expr = parseExpression();

        expect(')');

        return expr;
    }

    function matchAsyncFuncExprOrDecl() {
        var token;

        if (matchAsync()) {
            token = lookahead2();
            if (token.type === Token.Keyword && token.value === 'function') {
                return true;
            }
        }

        return false;
    }

    // 11.1 Primary Expressions

    function parsePrimaryExpression() {
        var marker, type, token, expr;

        type = lookahead.type;

        if (type === Token.Identifier) {
            marker = markerCreate();
            return markerApply(marker, delegate.createIdentifier(lex().value));
        }

        if (type === Token.StringLiteral || type === Token.NumericLiteral) {
            if (strict && lookahead.octal) {
                throwErrorTolerant(lookahead, Messages.StrictOctalLiteral);
            }
            marker = markerCreate();
            return markerApply(marker, delegate.createLiteral(lex()));
        }

        if (type === Token.Keyword) {
            if (matchKeyword('this')) {
                marker = markerCreate();
                lex();
                return markerApply(marker, delegate.createThisExpression());
            }

            if (matchKeyword('function')) {
                return parseFunctionExpression();
            }

            if (matchKeyword('class')) {
                return parseClassExpression();
            }

            if (matchKeyword('super')) {
                marker = markerCreate();
                lex();
                return markerApply(marker, delegate.createIdentifier('super'));
            }
        }

        if (type === Token.BooleanLiteral) {
            marker = markerCreate();
            token = lex();
            token.value = (token.value === 'true');
            return markerApply(marker, delegate.createLiteral(token));
        }

        if (type === Token.NullLiteral) {
            marker = markerCreate();
            token = lex();
            token.value = null;
            return markerApply(marker, delegate.createLiteral(token));
        }

        if (match('[')) {
            return parseArrayInitialiser();
        }

        if (match('{')) {
            return parseObjectInitialiser();
        }

        if (match('(')) {
            return parseGroupExpression();
        }

        if (match('/') || match('/=')) {
            marker = markerCreate();
            return markerApply(marker, delegate.createLiteral(scanRegExp()));
        }

        if (type === Token.Template) {
            return parseTemplateLiteral();
        }

        if (match('<')) {
            return parseXJSElement();
        }

        throwUnexpected(lex());
    }

    // 11.2 Left-Hand-Side Expressions

    function parseArguments() {
        var args = [], arg;

        expect('(');

        if (!match(')')) {
            while (index < length) {
                arg = parseSpreadOrAssignmentExpression();
                args.push(arg);

                if (match(')')) {
                    break;
                } else if (arg.type === Syntax.SpreadElement) {
                    throwError({}, Messages.ElementAfterSpreadElement);
                }

                expect(',');
            }
        }

        expect(')');

        return args;
    }

    function parseSpreadOrAssignmentExpression() {
        if (match('...')) {
            var marker = markerCreate();
            lex();
            return markerApply(marker, delegate.createSpreadElement(parseAssignmentExpression()));
        }
        return parseAssignmentExpression();
    }

    function parseNonComputedProperty() {
        var marker = markerCreate(),
            token = lex();

        if (!isIdentifierName(token)) {
            throwUnexpected(token);
        }

        return markerApply(marker, delegate.createIdentifier(token.value));
    }

    function parseNonComputedMember() {
        expect('.');

        return parseNonComputedProperty();
    }

    function parseComputedMember() {
        var expr;

        expect('[');

        expr = parseExpression();

        expect(']');

        return expr;
    }

    function parseNewExpression() {
        var callee, args, marker = markerCreate();

        expectKeyword('new');
        callee = parseLeftHandSideExpression();
        args = match('(') ? parseArguments() : [];

        return markerApply(marker, delegate.createNewExpression(callee, args));
    }

    function parseLeftHandSideExpressionAllowCall() {
        var expr, args, marker = markerCreate();

        expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();

        while (match('.') || match('[') || match('(') || lookahead.type === Token.Template) {
            if (match('(')) {
                args = parseArguments();
                expr = markerApply(marker, delegate.createCallExpression(expr, args));
            } else if (match('[')) {
                expr = markerApply(marker, delegate.createMemberExpression('[', expr, parseComputedMember()));
            } else if (match('.')) {
                expr = markerApply(marker, delegate.createMemberExpression('.', expr, parseNonComputedMember()));
            } else {
                expr = markerApply(marker, delegate.createTaggedTemplateExpression(expr, parseTemplateLiteral()));
            }
        }

        return expr;
    }

    function parseLeftHandSideExpression() {
        var expr, marker = markerCreate();

        expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();

        while (match('.') || match('[') || lookahead.type === Token.Template) {
            if (match('[')) {
                expr = markerApply(marker, delegate.createMemberExpression('[', expr, parseComputedMember()));
            } else if (match('.')) {
                expr = markerApply(marker, delegate.createMemberExpression('.', expr, parseNonComputedMember()));
            } else {
                expr = markerApply(marker, delegate.createTaggedTemplateExpression(expr, parseTemplateLiteral()));
            }
        }

        return expr;
    }

    // 11.3 Postfix Expressions

    function parsePostfixExpression() {
        var marker = markerCreate(),
            expr = parseLeftHandSideExpressionAllowCall(),
            token;

        if (lookahead.type !== Token.Punctuator) {
            return expr;
        }

        if ((match('++') || match('--')) && !peekLineTerminator()) {
            // 11.3.1, 11.3.2
            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                throwErrorTolerant({}, Messages.StrictLHSPostfix);
            }

            if (!isLeftHandSide(expr)) {
                throwError({}, Messages.InvalidLHSInAssignment);
            }

            token = lex();
            expr = markerApply(marker, delegate.createPostfixExpression(token.value, expr));
        }

        return expr;
    }

    // 11.4 Unary Operators

    function parseUnaryExpression() {
        var marker, token, expr;

        if (lookahead.type !== Token.Punctuator && lookahead.type !== Token.Keyword) {
            return parsePostfixExpression();
        }

        if (match('++') || match('--')) {
            marker = markerCreate();
            token = lex();
            expr = parseUnaryExpression();
            // 11.4.4, 11.4.5
            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                throwErrorTolerant({}, Messages.StrictLHSPrefix);
            }

            if (!isLeftHandSide(expr)) {
                throwError({}, Messages.InvalidLHSInAssignment);
            }

            return markerApply(marker, delegate.createUnaryExpression(token.value, expr));
        }

        if (match('+') || match('-') || match('~') || match('!')) {
            marker = markerCreate();
            token = lex();
            expr = parseUnaryExpression();
            return markerApply(marker, delegate.createUnaryExpression(token.value, expr));
        }

        if (matchKeyword('delete') || matchKeyword('void') || matchKeyword('typeof')) {
            marker = markerCreate();
            token = lex();
            expr = parseUnaryExpression();
            expr = markerApply(marker, delegate.createUnaryExpression(token.value, expr));
            if (strict && expr.operator === 'delete' && expr.argument.type === Syntax.Identifier) {
                throwErrorTolerant({}, Messages.StrictDelete);
            }
            return expr;
        }

        return parsePostfixExpression();
    }

    function binaryPrecedence(token, allowIn) {
        var prec = 0;

        if (token.type !== Token.Punctuator && token.type !== Token.Keyword) {
            return 0;
        }

        switch (token.value) {
        case '||':
            prec = 1;
            break;

        case '&&':
            prec = 2;
            break;

        case '|':
            prec = 3;
            break;

        case '^':
            prec = 4;
            break;

        case '&':
            prec = 5;
            break;

        case '==':
        case '!=':
        case '===':
        case '!==':
            prec = 6;
            break;

        case '<':
        case '>':
        case '<=':
        case '>=':
        case 'instanceof':
            prec = 7;
            break;

        case 'in':
            prec = allowIn ? 7 : 0;
            break;

        case '<<':
        case '>>':
        case '>>>':
            prec = 8;
            break;

        case '+':
        case '-':
            prec = 9;
            break;

        case '*':
        case '/':
        case '%':
            prec = 11;
            break;

        default:
            break;
        }

        return prec;
    }

    // 11.5 Multiplicative Operators
    // 11.6 Additive Operators
    // 11.7 Bitwise Shift Operators
    // 11.8 Relational Operators
    // 11.9 Equality Operators
    // 11.10 Binary Bitwise Operators
    // 11.11 Binary Logical Operators

    function parseBinaryExpression() {
        var expr, token, prec, previousAllowIn, stack, right, operator, left, i,
            marker, markers;

        previousAllowIn = state.allowIn;
        state.allowIn = true;

        marker = markerCreate();
        left = parseUnaryExpression();

        token = lookahead;
        prec = binaryPrecedence(token, previousAllowIn);
        if (prec === 0) {
            return left;
        }
        token.prec = prec;
        lex();

        markers = [marker, markerCreate()];
        right = parseUnaryExpression();

        stack = [left, token, right];

        while ((prec = binaryPrecedence(lookahead, previousAllowIn)) > 0) {

            // Reduce: make a binary expression from the three topmost entries.
            while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
                right = stack.pop();
                operator = stack.pop().value;
                left = stack.pop();
                expr = delegate.createBinaryExpression(operator, left, right);
                markers.pop();
                marker = markers.pop();
                markerApply(marker, expr);
                stack.push(expr);
                markers.push(marker);
            }

            // Shift.
            token = lex();
            token.prec = prec;
            stack.push(token);
            markers.push(markerCreate());
            expr = parseUnaryExpression();
            stack.push(expr);
        }

        state.allowIn = previousAllowIn;

        // Final reduce to clean-up the stack.
        i = stack.length - 1;
        expr = stack[i];
        markers.pop();
        while (i > 1) {
            expr = delegate.createBinaryExpression(stack[i - 1].value, stack[i - 2], expr);
            i -= 2;
            marker = markers.pop();
            markerApply(marker, expr);
        }

        return expr;
    }


    // 11.12 Conditional Operator

    function parseConditionalExpression() {
        var expr, previousAllowIn, consequent, alternate, marker = markerCreate();
        expr = parseBinaryExpression();

        if (match('?')) {
            lex();
            previousAllowIn = state.allowIn;
            state.allowIn = true;
            consequent = parseAssignmentExpression();
            state.allowIn = previousAllowIn;
            expect(':');
            alternate = parseAssignmentExpression();

            expr = markerApply(marker, delegate.createConditionalExpression(expr, consequent, alternate));
        }

        return expr;
    }

    // 11.13 Assignment Operators

    function reinterpretAsAssignmentBindingPattern(expr) {
        var i, len, property, element;

        if (expr.type === Syntax.ObjectExpression) {
            expr.type = Syntax.ObjectPattern;
            for (i = 0, len = expr.properties.length; i < len; i += 1) {
                property = expr.properties[i];
                if (property.type === Syntax.SpreadProperty) {
                    if (i < len - 1) {
                        throwError({}, Messages.PropertyAfterSpreadProperty);
                    }
                    reinterpretAsAssignmentBindingPattern(property.argument);
                } else {
                    if (property.kind !== 'init') {
                        throwError({}, Messages.InvalidLHSInAssignment);
                    }
                    reinterpretAsAssignmentBindingPattern(property.value);
                }
            }
        } else if (expr.type === Syntax.ArrayExpression) {
            expr.type = Syntax.ArrayPattern;
            for (i = 0, len = expr.elements.length; i < len; i += 1) {
                element = expr.elements[i];
                if (element) {
                    reinterpretAsAssignmentBindingPattern(element);
                }
            }
        } else if (expr.type === Syntax.Identifier) {
            if (isRestrictedWord(expr.name)) {
                throwError({}, Messages.InvalidLHSInAssignment);
            }
        } else if (expr.type === Syntax.SpreadElement) {
            reinterpretAsAssignmentBindingPattern(expr.argument);
            if (expr.argument.type === Syntax.ObjectPattern) {
                throwError({}, Messages.ObjectPatternAsSpread);
            }
        } else {
            if (expr.type !== Syntax.MemberExpression && expr.type !== Syntax.CallExpression && expr.type !== Syntax.NewExpression) {
                throwError({}, Messages.InvalidLHSInAssignment);
            }
        }
    }


    function reinterpretAsDestructuredParameter(options, expr) {
        var i, len, property, element;

        if (expr.type === Syntax.ObjectExpression) {
            expr.type = Syntax.ObjectPattern;
            for (i = 0, len = expr.properties.length; i < len; i += 1) {
                property = expr.properties[i];
                if (property.type === Syntax.SpreadProperty) {
                    if (i < len - 1) {
                        throwError({}, Messages.PropertyAfterSpreadProperty);
                    }
                    reinterpretAsDestructuredParameter(options, property.argument);
                } else {
                    if (property.kind !== 'init') {
                        throwError({}, Messages.InvalidLHSInFormalsList);
                    }
                    reinterpretAsDestructuredParameter(options, property.value);
                }
            }
        } else if (expr.type === Syntax.ArrayExpression) {
            expr.type = Syntax.ArrayPattern;
            for (i = 0, len = expr.elements.length; i < len; i += 1) {
                element = expr.elements[i];
                if (element) {
                    reinterpretAsDestructuredParameter(options, element);
                }
            }
        } else if (expr.type === Syntax.Identifier) {
            validateParam(options, expr, expr.name);
        } else {
            if (expr.type !== Syntax.MemberExpression) {
                throwError({}, Messages.InvalidLHSInFormalsList);
            }
        }
    }

    function reinterpretAsCoverFormalsList(expressions) {
        var i, len, param, params, defaults, defaultCount, options, rest;

        params = [];
        defaults = [];
        defaultCount = 0;
        rest = null;
        options = {
            paramSet: {}
        };

        for (i = 0, len = expressions.length; i < len; i += 1) {
            param = expressions[i];
            if (param.type === Syntax.Identifier) {
                params.push(param);
                defaults.push(null);
                validateParam(options, param, param.name);
            } else if (param.type === Syntax.ObjectExpression || param.type === Syntax.ArrayExpression) {
                reinterpretAsDestructuredParameter(options, param);
                params.push(param);
                defaults.push(null);
            } else if (param.type === Syntax.SpreadElement) {
                assert(i === len - 1, 'It is guaranteed that SpreadElement is last element by parseExpression');
                reinterpretAsDestructuredParameter(options, param.argument);
                rest = param.argument;
            } else if (param.type === Syntax.AssignmentExpression) {
                params.push(param.left);
                defaults.push(param.right);
                ++defaultCount;
                validateParam(options, param.left, param.left.name);
            } else {
                return null;
            }
        }

        if (options.message === Messages.StrictParamDupe) {
            throwError(
                strict ? options.stricted : options.firstRestricted,
                options.message
            );
        }

        if (defaultCount === 0) {
            defaults = [];
        }

        return {
            params: params,
            defaults: defaults,
            rest: rest,
            stricted: options.stricted,
            firstRestricted: options.firstRestricted,
            message: options.message
        };
    }

    function parseArrowFunctionExpression(options, marker) {
        var previousStrict, previousYieldAllowed, previousAwaitAllowed, body;

        expect('=>');

        previousStrict = strict;
        previousYieldAllowed = state.yieldAllowed;
        state.yieldAllowed = false;
        previousAwaitAllowed = state.awaitAllowed;
        state.awaitAllowed = !!options.async;
        body = parseConciseBody();

        if (strict && options.firstRestricted) {
            throwError(options.firstRestricted, options.message);
        }
        if (strict && options.stricted) {
            throwErrorTolerant(options.stricted, options.message);
        }

        strict = previousStrict;
        state.yieldAllowed = previousYieldAllowed;
        state.awaitAllowed = previousAwaitAllowed;

        return markerApply(marker, delegate.createArrowFunctionExpression(
            options.params,
            options.defaults,
            body,
            options.rest,
            body.type !== Syntax.BlockStatement,
            !!options.async
        ));
    }

    function parseAssignmentExpression() {
        var marker, expr, token, params, oldParenthesizedCount,
            backtrackToken = lookahead, possiblyAsync = false;

        if (matchYield()) {
            return parseYieldExpression();
        }

        if (matchAwait()) {
            return parseAwaitExpression();
        }

        oldParenthesizedCount = state.parenthesizedCount;

        marker = markerCreate();

        if (matchAsyncFuncExprOrDecl()) {
            return parseFunctionExpression();
        }

        if (matchAsync()) {
            // We can't be completely sure that this 'async' token is
            // actually a contextual keyword modifying a function
            // expression, so we might have to un-lex() it later by
            // calling rewind(backtrackToken).
            possiblyAsync = true;
            lex();
        }

        if (match('(')) {
            token = lookahead2();
            if ((token.type === Token.Punctuator && token.value === ')') || token.value === '...') {
                params = parseParams();
                if (!match('=>')) {
                    throwUnexpected(lex());
                }
                params.async = possiblyAsync;
                return parseArrowFunctionExpression(params, marker);
            }
        }

        token = lookahead;

        // If the 'async' keyword is not followed by a '(' character or an
        // identifier, then it can't be an arrow function modifier, and we
        // should interpret it as a normal identifer.
        if (possiblyAsync && !match('(') && token.type !== Token.Identifier) {
            possiblyAsync = false;
            rewind(backtrackToken);
        }

        expr = parseConditionalExpression();

        if (match('=>') &&
                (state.parenthesizedCount === oldParenthesizedCount ||
                state.parenthesizedCount === (oldParenthesizedCount + 1))) {
            if (expr.type === Syntax.Identifier) {
                params = reinterpretAsCoverFormalsList([ expr ]);
            } else if (expr.type === Syntax.SequenceExpression) {
                params = reinterpretAsCoverFormalsList(expr.expressions);
            }
            if (params) {
                params.async = possiblyAsync;
                return parseArrowFunctionExpression(params, marker);
            }
        }

        // If we haven't returned by now, then the 'async' keyword was not
        // a function modifier, and we should rewind and interpret it as a
        // normal identifier.
        if (possiblyAsync) {
            possiblyAsync = false;
            rewind(backtrackToken);
            expr = parseConditionalExpression();
        }

        if (matchAssign()) {
            // 11.13.1
            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                throwErrorTolerant(token, Messages.StrictLHSAssignment);
            }

            // ES.next draf 11.13 Runtime Semantics step 1
            if (match('=') && (expr.type === Syntax.ObjectExpression || expr.type === Syntax.ArrayExpression)) {
                reinterpretAsAssignmentBindingPattern(expr);
            } else if (!isLeftHandSide(expr)) {
                throwError({}, Messages.InvalidLHSInAssignment);
            }

            expr = markerApply(marker, delegate.createAssignmentExpression(lex().value, expr, parseAssignmentExpression()));
        }

        return expr;
    }

    // 11.14 Comma Operator

    function parseExpression() {
        var marker, expr, expressions, sequence, coverFormalsList, spreadFound, oldParenthesizedCount;

        oldParenthesizedCount = state.parenthesizedCount;

        marker = markerCreate();
        expr = parseAssignmentExpression();
        expressions = [ expr ];

        if (match(',')) {
            while (index < length) {
                if (!match(',')) {
                    break;
                }

                lex();
                expr = parseSpreadOrAssignmentExpression();
                expressions.push(expr);

                if (expr.type === Syntax.SpreadElement) {
                    spreadFound = true;
                    if (!match(')')) {
                        throwError({}, Messages.ElementAfterSpreadElement);
                    }
                    break;
                }
            }

            sequence = markerApply(marker, delegate.createSequenceExpression(expressions));
        }

        if (match('=>')) {
            // Do not allow nested parentheses on the LHS of the =>.
            if (state.parenthesizedCount === oldParenthesizedCount || state.parenthesizedCount === (oldParenthesizedCount + 1)) {
                expr = expr.type === Syntax.SequenceExpression ? expr.expressions : expressions;
                coverFormalsList = reinterpretAsCoverFormalsList(expr);
                if (coverFormalsList) {
                    return parseArrowFunctionExpression(coverFormalsList, marker);
                }
            }
            throwUnexpected(lex());
        }

        if (spreadFound && lookahead2().value !== '=>') {
            throwError({}, Messages.IllegalSpread);
        }

        return sequence || expr;
    }

    // 12.1 Block

    function parseStatementList() {
        var list = [],
            statement;

        while (index < length) {
            if (match('}')) {
                break;
            }
            statement = parseSourceElement();
            if (typeof statement === 'undefined') {
                break;
            }
            list.push(statement);
        }

        return list;
    }

    function parseBlock() {
        var block, marker = markerCreate();

        expect('{');

        block = parseStatementList();

        expect('}');

        return markerApply(marker, delegate.createBlockStatement(block));
    }

    // 12.2 Variable Statement

    function parseTypeParameterDeclaration() {
        var marker = markerCreate(), paramTypes = [];

        expect('<');
        while (!match('>')) {
            paramTypes.push(parseVariableIdentifier());
            if (!match('>')) {
                expect(',');
            }
        }
        expect('>');

        return markerApply(marker, delegate.createTypeParameterDeclaration(
            paramTypes
        ));
    }

    function parseTypeParameterInstantiation() {
        var marker = markerCreate(), oldInType = state.inType, paramTypes = [];

        state.inType = true;

        expect('<');
        while (!match('>')) {
            paramTypes.push(parseType());
            if (!match('>')) {
                expect(',');
            }
        }
        expect('>');

        state.inType = oldInType;

        return markerApply(marker, delegate.createTypeParameterInstantiation(
            paramTypes
        ));
    }

    function parseObjectTypeIndexer(marker, isStatic) {
        var id, key, value;

        expect('[');
        id = parseObjectPropertyKey();
        expect(':');
        key = parseType();
        expect(']');
        expect(':');
        value = parseType();

        return markerApply(marker, delegate.createObjectTypeIndexer(
            id,
            key,
            value,
            isStatic
        ));
    }

    function parseObjectTypeMethodish(marker) {
        var params = [], rest = null, returnType, typeParameters = null;
        if (match('<')) {
            typeParameters = parseTypeParameterDeclaration();
        }

        expect('(');
        while (lookahead.type === Token.Identifier) {
            params.push(parseFunctionTypeParam());
            if (!match(')')) {
                expect(',');
            }
        }

        if (match('...')) {
            lex();
            rest = parseFunctionTypeParam();
        }
        expect(')');
        expect(':');
        returnType = parseType();

        return markerApply(marker, delegate.createFunctionTypeAnnotation(
            params,
            returnType,
            rest,
            typeParameters
        ));
    }

    function parseObjectTypeMethod(marker, isStatic, key) {
        var optional = false, value;
        value = parseObjectTypeMethodish(marker);

        return markerApply(marker, delegate.createObjectTypeProperty(
            key,
            value,
            optional,
            isStatic
        ));
    }

    function parseObjectTypeCallProperty(marker, isStatic) {
        var valueMarker = markerCreate();
        return markerApply(marker, delegate.createObjectTypeCallProperty(
            parseObjectTypeMethodish(valueMarker),
            isStatic
        ));
    }

    function parseObjectType(allowStatic) {
        var callProperties = [], indexers = [], marker, optional = false,
            properties = [], property, propertyKey, propertyTypeAnnotation,
            token, isStatic;

        expect('{');

        while (!match('}')) {
            marker = markerCreate();
            if (allowStatic && matchContextualKeyword('static')) {
                token = lex();
                isStatic = true;
            }

            if (match('[')) {
                indexers.push(parseObjectTypeIndexer(marker, isStatic));
            } else if (match('(') || match('<')) {
                callProperties.push(parseObjectTypeCallProperty(marker, allowStatic));
            } else {
                if (isStatic && match(':')) {
                    propertyKey = markerApply(marker, delegate.createIdentifier(token));
                    throwErrorTolerant(token, Messages.StrictReservedWord);
                } else {
                    propertyKey = parseObjectPropertyKey();
                }
                if (match('<') || match('(')) {
                    // This is a method property
                    properties.push(parseObjectTypeMethod(marker, isStatic, propertyKey));
                } else {
                    if (match('?')) {
                        lex();
                        optional = true;
                    }
                    expect(':');
                    propertyTypeAnnotation = parseType();
                    properties.push(markerApply(marker, delegate.createObjectTypeProperty(
                        propertyKey,
                        propertyTypeAnnotation,
                        optional,
                        isStatic
                    )));
                }
            }

            if (match(';')) {
                lex();
            } else if (!match('}')) {
                throwUnexpected(lookahead);
            }
        }

        expect('}');

        return delegate.createObjectTypeAnnotation(
            properties,
            indexers,
            callProperties
        );
    }

    function parseGenericType() {
        var marker = markerCreate(), returnType = null,
            typeParameters = null, typeIdentifier,
            typeIdentifierMarker = markerCreate;

        typeIdentifier = parseVariableIdentifier();

        while (match('.')) {
            expect('.');
            typeIdentifier = markerApply(marker, delegate.createQualifiedTypeIdentifier(
                typeIdentifier,
                parseVariableIdentifier()
            ));
        }

        if (match('<')) {
            typeParameters = parseTypeParameterInstantiation();
        }

        return markerApply(marker, delegate.createGenericTypeAnnotation(
            typeIdentifier,
            typeParameters
        ));
    }

    function parseVoidType() {
        var marker = markerCreate();
        expectKeyword('void');
        return markerApply(marker, delegate.createVoidTypeAnnotation());
    }

    function parseTypeofType() {
        var argument, marker = markerCreate();
        expectKeyword('typeof');
        argument = parsePrimaryType();
        return markerApply(marker, delegate.createTypeofTypeAnnotation(
            argument
        ));
    }

    function parseTupleType() {
        var marker = markerCreate(), types = [];
        expect('[');
        // We allow trailing commas
        while (index < length && !match(']')) {
            types.push(parseType());
            if (match(']')) {
                break;
            }
            expect(',');
        }
        expect(']');
        return markerApply(marker, delegate.createTupleTypeAnnotation(
            types
        ));
    }

    function parseFunctionTypeParam() {
        var marker = markerCreate(), name, optional = false, typeAnnotation;
        name = parseVariableIdentifier();
        if (match('?')) {
            lex();
            optional = true;
        }
        expect(':');
        typeAnnotation = parseType();
        return markerApply(marker, delegate.createFunctionTypeParam(
            name,
            typeAnnotation,
            optional
        ));
    }

    function parseFunctionTypeParams() {
        var ret = { params: [], rest: null };
        while (lookahead.type === Token.Identifier) {
            ret.params.push(parseFunctionTypeParam());
            if (!match(')')) {
                expect(',');
            }
        }

        if (match('...')) {
            lex();
            ret.rest = parseFunctionTypeParam();
        }
        return ret;
    }

    // The parsing of types roughly parallels the parsing of expressions, and
    // primary types are kind of like primary expressions...they're the
    // primitives with which other types are constructed.
    function parsePrimaryType() {
        var typeIdentifier = null, params = null, returnType = null,
            marker = markerCreate(), rest = null, tmp,
            typeParameters, token, type, isGroupedType = false;

        switch (lookahead.type) {
        case Token.Identifier:
            switch (lookahead.value) {
            case 'any':
                lex();
                return markerApply(marker, delegate.createAnyTypeAnnotation());
            case 'bool':  // fallthrough
            case 'boolean':
                lex();
                return markerApply(marker, delegate.createBooleanTypeAnnotation());
            case 'number':
                lex();
                return markerApply(marker, delegate.createNumberTypeAnnotation());
            case 'string':
                lex();
                return markerApply(marker, delegate.createStringTypeAnnotation());
            }
            return markerApply(marker, parseGenericType());
        case Token.Punctuator:
            switch (lookahead.value) {
            case '{':
                return markerApply(marker, parseObjectType());
            case '[':
                return parseTupleType();
            case '<':
                typeParameters = parseTypeParameterDeclaration();
                expect('(');
                tmp = parseFunctionTypeParams();
                params = tmp.params;
                rest = tmp.rest;
                expect(')');

                expect('=>');

                returnType = parseType();

                return markerApply(marker, delegate.createFunctionTypeAnnotation(
                    params,
                    returnType,
                    rest,
                    typeParameters
                ));
            case '(':
                lex();
                // Check to see if this is actually a grouped type
                if (!match(')') && !match('...')) {
                    if (lookahead.type === Token.Identifier) {
                        token = lookahead2();
                        isGroupedType = token.value !== '?' && token.value !== ':';
                    } else {
                        isGroupedType = true;
                    }
                }

                if (isGroupedType) {
                    type = parseType();
                    expect(')');

                    // If we see a => next then someone was probably confused about
                    // function types, so we can provide a better error message
                    if (match('=>')) {
                        throwError({}, Messages.ConfusedAboutFunctionType);
                    }

                    return type;
                }

                tmp = parseFunctionTypeParams();
                params = tmp.params;
                rest = tmp.rest;

                expect(')');

                expect('=>');

                returnType = parseType();

                return markerApply(marker, delegate.createFunctionTypeAnnotation(
                    params,
                    returnType,
                    rest,
                    null /* typeParameters */
                ));
            }
            break;
        case Token.Keyword:
            switch (lookahead.value) {
            case 'void':
                return markerApply(marker, parseVoidType());
            case 'typeof':
                return markerApply(marker, parseTypeofType());
            }
            break;
        case Token.StringLiteral:
            token = lex();
            if (token.octal) {
                throwError(token, Messages.StrictOctalLiteral);
            }
            return markerApply(marker, delegate.createStringLiteralTypeAnnotation(
                token
            ));
        }

        throwUnexpected(lookahead);
    }

    function parsePostfixType() {
        var marker = markerCreate(), t = parsePrimaryType();
        if (match('[')) {
            expect('[');
            expect(']');
            return markerApply(marker, delegate.createArrayTypeAnnotation(t));
        }
        return t;
    }

    function parsePrefixType() {
        var marker = markerCreate();
        if (match('?')) {
            lex();
            return markerApply(marker, delegate.createNullableTypeAnnotation(
                parsePrefixType()
            ));
        }
        return parsePostfixType();
    }


    function parseIntersectionType() {
        var marker = markerCreate(), type, types;
        type = parsePrefixType();
        types = [type];
        while (match('&')) {
            lex();
            types.push(parsePrefixType());
        }

        return types.length === 1 ?
                type :
                markerApply(marker, delegate.createIntersectionTypeAnnotation(
                    types
                ));
    }

    function parseUnionType() {
        var marker = markerCreate(), type, types;
        type = parseIntersectionType();
        types = [type];
        while (match('|')) {
            lex();
            types.push(parseIntersectionType());
        }
        return types.length === 1 ?
                type :
                markerApply(marker, delegate.createUnionTypeAnnotation(
                    types
                ));
    }

    function parseType() {
        var oldInType = state.inType, type;
        state.inType = true;

        type = parseUnionType();

        state.inType = oldInType;
        return type;
    }

    function parseTypeAnnotation() {
        var marker = markerCreate(), type;

        expect(':');
        type = parseType();

        return markerApply(marker, delegate.createTypeAnnotation(type));
    }

    function parseVariableIdentifier() {
        var marker = markerCreate(),
            token = lex();

        if (token.type !== Token.Identifier) {
            throwUnexpected(token);
        }

        return markerApply(marker, delegate.createIdentifier(token.value));
    }

    function parseTypeAnnotatableIdentifier(requireTypeAnnotation, canBeOptionalParam) {
        var marker = markerCreate(),
            ident = parseVariableIdentifier(),
            isOptionalParam = false;

        if (canBeOptionalParam && match('?')) {
            expect('?');
            isOptionalParam = true;
        }

        if (requireTypeAnnotation || match(':')) {
            ident.typeAnnotation = parseTypeAnnotation();
            ident = markerApply(marker, ident);
        }

        if (isOptionalParam) {
            ident.optional = true;
            ident = markerApply(marker, ident);
        }

        return ident;
    }

    function parseVariableDeclaration(kind) {
        var id,
            marker = markerCreate(),
            init = null,
            typeAnnotationMarker = markerCreate();
        if (match('{')) {
            id = parseObjectInitialiser();
            reinterpretAsAssignmentBindingPattern(id);
            if (match(':')) {
                id.typeAnnotation = parseTypeAnnotation();
                markerApply(typeAnnotationMarker, id);
            }
        } else if (match('[')) {
            id = parseArrayInitialiser();
            reinterpretAsAssignmentBindingPattern(id);
            if (match(':')) {
                id.typeAnnotation = parseTypeAnnotation();
                markerApply(typeAnnotationMarker, id);
            }
        } else {
            id = state.allowKeyword ? parseNonComputedProperty() : parseTypeAnnotatableIdentifier();
            // 12.2.1
            if (strict && isRestrictedWord(id.name)) {
                throwErrorTolerant({}, Messages.StrictVarName);
            }
        }

        if (kind === 'const') {
            if (!match('=')) {
                throwError({}, Messages.NoUnintializedConst);
            }
            expect('=');
            init = parseAssignmentExpression();
        } else if (match('=')) {
            lex();
            init = parseAssignmentExpression();
        }

        return markerApply(marker, delegate.createVariableDeclarator(id, init));
    }

    function parseVariableDeclarationList(kind) {
        var list = [];

        do {
            list.push(parseVariableDeclaration(kind));
            if (!match(',')) {
                break;
            }
            lex();
        } while (index < length);

        return list;
    }

    function parseVariableStatement() {
        var declarations, marker = markerCreate();

        expectKeyword('var');

        declarations = parseVariableDeclarationList();

        consumeSemicolon();

        return markerApply(marker, delegate.createVariableDeclaration(declarations, 'var'));
    }

    // kind may be `const` or `let`
    // Both are experimental and not in the specification yet.
    // see http://wiki.ecmascript.org/doku.php?id=harmony:const
    // and http://wiki.ecmascript.org/doku.php?id=harmony:let
    function parseConstLetDeclaration(kind) {
        var declarations, marker = markerCreate();

        expectKeyword(kind);

        declarations = parseVariableDeclarationList(kind);

        consumeSemicolon();

        return markerApply(marker, delegate.createVariableDeclaration(declarations, kind));
    }

    // people.mozilla.org/~jorendorff/es6-draft.html

    function parseModuleSpecifier() {
        var marker = markerCreate(),
            specifier;

        if (lookahead.type !== Token.StringLiteral) {
            throwError({}, Messages.InvalidModuleSpecifier);
        }
        specifier = delegate.createModuleSpecifier(lookahead);
        lex();
        return markerApply(marker, specifier);
    }

    function parseExportBatchSpecifier() {
        var marker = markerCreate();
        expect('*');
        return markerApply(marker, delegate.createExportBatchSpecifier());
    }

    function parseExportSpecifier() {
        var id, name = null, marker = markerCreate(), from;
        if (matchKeyword('default')) {
            lex();
            id = markerApply(marker, delegate.createIdentifier('default'));
            // export {default} from "something";
        } else {
            id = parseVariableIdentifier();
        }
        if (matchContextualKeyword('as')) {
            lex();
            name = parseNonComputedProperty();
        }

        return markerApply(marker, delegate.createExportSpecifier(id, name));
    }

    function parseExportDeclaration() {
        var backtrackToken, id, previousAllowKeyword, declaration = null,
            isExportFromIdentifier,
            src = null, specifiers = [],
            marker = markerCreate();

        expectKeyword('export');

        if (matchKeyword('default')) {
            // covers:
            // export default ...
            lex();
            if (matchKeyword('function') || matchKeyword('class')) {
                backtrackToken = lookahead;
                lex();
                if (isIdentifierName(lookahead)) {
                    // covers:
                    // export default function foo () {}
                    // export default class foo {}
                    id = parseNonComputedProperty();
                    rewind(backtrackToken);
                    return markerApply(marker, delegate.createExportDeclaration(true, parseSourceElement(), [id], null));
                }
                // covers:
                // export default function () {}
                // export default class {}
                rewind(backtrackToken);
                switch (lookahead.value) {
                case 'class':
                    return markerApply(marker, delegate.createExportDeclaration(true, parseClassExpression(), [], null));
                case 'function':
                    return markerApply(marker, delegate.createExportDeclaration(true, parseFunctionExpression(), [], null));
                }
            }

            if (matchContextualKeyword('from')) {
                throwError({}, Messages.UnexpectedToken, lookahead.value);
            }

            // covers:
            // export default {};
            // export default [];
            if (match('{')) {
                declaration = parseObjectInitialiser();
            } else if (match('[')) {
                declaration = parseArrayInitialiser();
            } else {
                declaration = parseAssignmentExpression();
            }
            consumeSemicolon();
            return markerApply(marker, delegate.createExportDeclaration(true, declaration, [], null));
        }

        // non-default export
        if (lookahead.type === Token.Keyword) {
            // covers:
            // export var f = 1;
            switch (lookahead.value) {
            case 'let':
            case 'const':
            case 'var':
            case 'class':
            case 'function':
                return markerApply(marker, delegate.createExportDeclaration(false, parseSourceElement(), specifiers, null));
            }
        }

        if (match('*')) {
            // covers:
            // export * from "foo";
            specifiers.push(parseExportBatchSpecifier());

            if (!matchContextualKeyword('from')) {
                throwError({}, lookahead.value ?
                        Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value);
            }
            lex();
            src = parseModuleSpecifier();
            consumeSemicolon();

            return markerApply(marker, delegate.createExportDeclaration(false, null, specifiers, src));
        }

        expect('{');
        do {
            isExportFromIdentifier = isExportFromIdentifier || matchKeyword('default');
            specifiers.push(parseExportSpecifier());
        } while (match(',') && lex());
        expect('}');

        if (matchContextualKeyword('from')) {
            // covering:
            // export {default} from "foo";
            // export {foo} from "foo";
            lex();
            src = parseModuleSpecifier();
            consumeSemicolon();
        } else if (isExportFromIdentifier) {
            // covering:
            // export {default}; // missing fromClause
            throwError({}, lookahead.value ?
                    Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value);
        } else {
            // cover
            // export {foo};
            consumeSemicolon();
        }
        return markerApply(marker, delegate.createExportDeclaration(false, declaration, specifiers, src));
    }


    function parseImportSpecifier() {
        // import {<foo as bar>} ...;
        var id, name = null, marker = markerCreate();

        id = parseNonComputedProperty();
        if (matchContextualKeyword('as')) {
            lex();
            name = parseVariableIdentifier();
        }

        return markerApply(marker, delegate.createImportSpecifier(id, name));
    }

    function parseNamedImports() {
        var specifiers = [];
        // {foo, bar as bas}
        expect('{');
        do {
            specifiers.push(parseImportSpecifier());
        } while (match(',') && lex());
        expect('}');
        return specifiers;
    }

    function parseImportDefaultSpecifier() {
        // import <foo> ...;
        var id, marker = markerCreate();

        id = parseNonComputedProperty();

        return markerApply(marker, delegate.createImportDefaultSpecifier(id));
    }

    function parseImportNamespaceSpecifier() {
        // import <* as foo> ...;
        var id, marker = markerCreate();

        expect('*');
        if (!matchContextualKeyword('as')) {
            throwError({}, Messages.NoAsAfterImportNamespace);
        }
        lex();
        id = parseNonComputedProperty();

        return markerApply(marker, delegate.createImportNamespaceSpecifier(id));
    }

    function parseImportDeclaration() {
        var specifiers, src, marker = markerCreate();

        expectKeyword('import');
        specifiers = [];

        if (lookahead.type === Token.StringLiteral) {
            // covers:
            // import "foo";
            src = parseModuleSpecifier();
            consumeSemicolon();
            return markerApply(marker, delegate.createImportDeclaration(specifiers, src));
        }

        if (!matchKeyword('default') && isIdentifierName(lookahead)) {
            // covers:
            // import foo
            // import foo, ...
            specifiers.push(parseImportDefaultSpecifier());
            if (match(',')) {
                lex();
            }
        }
        if (match('*')) {
            // covers:
            // import foo, * as foo
            // import * as foo
            specifiers.push(parseImportNamespaceSpecifier());
        } else if (match('{')) {
            // covers:
            // import foo, {bar}
            // import {bar}
            specifiers = specifiers.concat(parseNamedImports());
        }

        if (!matchContextualKeyword('from')) {
            throwError({}, lookahead.value ?
                    Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value);
        }
        lex();
        src = parseModuleSpecifier();
        consumeSemicolon();

        return markerApply(marker, delegate.createImportDeclaration(specifiers, src));
    }

    // 12.3 Empty Statement

    function parseEmptyStatement() {
        var marker = markerCreate();
        expect(';');
        return markerApply(marker, delegate.createEmptyStatement());
    }

    // 12.4 Expression Statement

    function parseExpressionStatement() {
        var marker = markerCreate(), expr = parseExpression();
        consumeSemicolon();
        return markerApply(marker, delegate.createExpressionStatement(expr));
    }

    // 12.5 If statement

    function parseIfStatement() {
        var test, consequent, alternate, marker = markerCreate();

        expectKeyword('if');

        expect('(');

        test = parseExpression();

        expect(')');

        consequent = parseStatement();

        if (matchKeyword('else')) {
            lex();
            alternate = parseStatement();
        } else {
            alternate = null;
        }

        return markerApply(marker, delegate.createIfStatement(test, consequent, alternate));
    }

    // 12.6 Iteration Statements

    function parseDoWhileStatement() {
        var body, test, oldInIteration, marker = markerCreate();

        expectKeyword('do');

        oldInIteration = state.inIteration;
        state.inIteration = true;

        body = parseStatement();

        state.inIteration = oldInIteration;

        expectKeyword('while');

        expect('(');

        test = parseExpression();

        expect(')');

        if (match(';')) {
            lex();
        }

        return markerApply(marker, delegate.createDoWhileStatement(body, test));
    }

    function parseWhileStatement() {
        var test, body, oldInIteration, marker = markerCreate();

        expectKeyword('while');

        expect('(');

        test = parseExpression();

        expect(')');

        oldInIteration = state.inIteration;
        state.inIteration = true;

        body = parseStatement();

        state.inIteration = oldInIteration;

        return markerApply(marker, delegate.createWhileStatement(test, body));
    }

    function parseForVariableDeclaration() {
        var marker = markerCreate(),
            token = lex(),
            declarations = parseVariableDeclarationList();

        return markerApply(marker, delegate.createVariableDeclaration(declarations, token.value));
    }

    function parseForStatement(opts) {
        var init, test, update, left, right, body, operator, oldInIteration,
            marker = markerCreate();
        init = test = update = null;
        expectKeyword('for');

        // http://wiki.ecmascript.org/doku.php?id=proposals:iterators_and_generators&s=each
        if (matchContextualKeyword('each')) {
            throwError({}, Messages.EachNotAllowed);
        }

        expect('(');

        if (match(';')) {
            lex();
        } else {
            if (matchKeyword('var') || matchKeyword('let') || matchKeyword('const')) {
                state.allowIn = false;
                init = parseForVariableDeclaration();
                state.allowIn = true;

                if (init.declarations.length === 1) {
                    if (matchKeyword('in') || matchContextualKeyword('of')) {
                        operator = lookahead;
                        if (!((operator.value === 'in' || init.kind !== 'var') && init.declarations[0].init)) {
                            lex();
                            left = init;
                            right = parseExpression();
                            init = null;
                        }
                    }
                }
            } else {
                state.allowIn = false;
                init = parseExpression();
                state.allowIn = true;

                if (matchContextualKeyword('of')) {
                    operator = lex();
                    left = init;
                    right = parseExpression();
                    init = null;
                } else if (matchKeyword('in')) {
                    // LeftHandSideExpression
                    if (!isAssignableLeftHandSide(init)) {
                        throwError({}, Messages.InvalidLHSInForIn);
                    }
                    operator = lex();
                    left = init;
                    right = parseExpression();
                    init = null;
                }
            }

            if (typeof left === 'undefined') {
                expect(';');
            }
        }

        if (typeof left === 'undefined') {

            if (!match(';')) {
                test = parseExpression();
            }
            expect(';');

            if (!match(')')) {
                update = parseExpression();
            }
        }

        expect(')');

        oldInIteration = state.inIteration;
        state.inIteration = true;

        if (!(opts !== undefined && opts.ignoreBody)) {
            body = parseStatement();
        }

        state.inIteration = oldInIteration;

        if (typeof left === 'undefined') {
            return markerApply(marker, delegate.createForStatement(init, test, update, body));
        }

        if (operator.value === 'in') {
            return markerApply(marker, delegate.createForInStatement(left, right, body));
        }
        return markerApply(marker, delegate.createForOfStatement(left, right, body));
    }

    // 12.7 The continue statement

    function parseContinueStatement() {
        var label = null, key, marker = markerCreate();

        expectKeyword('continue');

        // Optimize the most common form: 'continue;'.
        if (source.charCodeAt(index) === 59) {
            lex();

            if (!state.inIteration) {
                throwError({}, Messages.IllegalContinue);
            }

            return markerApply(marker, delegate.createContinueStatement(null));
        }

        if (peekLineTerminator()) {
            if (!state.inIteration) {
                throwError({}, Messages.IllegalContinue);
            }

            return markerApply(marker, delegate.createContinueStatement(null));
        }

        if (lookahead.type === Token.Identifier) {
            label = parseVariableIdentifier();

            key = '$' + label.name;
            if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
                throwError({}, Messages.UnknownLabel, label.name);
            }
        }

        consumeSemicolon();

        if (label === null && !state.inIteration) {
            throwError({}, Messages.IllegalContinue);
        }

        return markerApply(marker, delegate.createContinueStatement(label));
    }

    // 12.8 The break statement

    function parseBreakStatement() {
        var label = null, key, marker = markerCreate();

        expectKeyword('break');

        // Catch the very common case first: immediately a semicolon (char #59).
        if (source.charCodeAt(index) === 59) {
            lex();

            if (!(state.inIteration || state.inSwitch)) {
                throwError({}, Messages.IllegalBreak);
            }

            return markerApply(marker, delegate.createBreakStatement(null));
        }

        if (peekLineTerminator()) {
            if (!(state.inIteration || state.inSwitch)) {
                throwError({}, Messages.IllegalBreak);
            }

            return markerApply(marker, delegate.createBreakStatement(null));
        }

        if (lookahead.type === Token.Identifier) {
            label = parseVariableIdentifier();

            key = '$' + label.name;
            if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
                throwError({}, Messages.UnknownLabel, label.name);
            }
        }

        consumeSemicolon();

        if (label === null && !(state.inIteration || state.inSwitch)) {
            throwError({}, Messages.IllegalBreak);
        }

        return markerApply(marker, delegate.createBreakStatement(label));
    }

    // 12.9 The return statement

    function parseReturnStatement() {
        var argument = null, marker = markerCreate();

        expectKeyword('return');

        if (!state.inFunctionBody) {
            throwErrorTolerant({}, Messages.IllegalReturn);
        }

        // 'return' followed by a space and an identifier is very common.
        if (source.charCodeAt(index) === 32) {
            if (isIdentifierStart(source.charCodeAt(index + 1))) {
                argument = parseExpression();
                consumeSemicolon();
                return markerApply(marker, delegate.createReturnStatement(argument));
            }
        }

        if (peekLineTerminator()) {
            return markerApply(marker, delegate.createReturnStatement(null));
        }

        if (!match(';')) {
            if (!match('}') && lookahead.type !== Token.EOF) {
                argument = parseExpression();
            }
        }

        consumeSemicolon();

        return markerApply(marker, delegate.createReturnStatement(argument));
    }

    // 12.10 The with statement

    function parseWithStatement() {
        var object, body, marker = markerCreate();

        if (strict) {
            throwErrorTolerant({}, Messages.StrictModeWith);
        }

        expectKeyword('with');

        expect('(');

        object = parseExpression();

        expect(')');

        body = parseStatement();

        return markerApply(marker, delegate.createWithStatement(object, body));
    }

    // 12.10 The swith statement

    function parseSwitchCase() {
        var test,
            consequent = [],
            sourceElement,
            marker = markerCreate();

        if (matchKeyword('default')) {
            lex();
            test = null;
        } else {
            expectKeyword('case');
            test = parseExpression();
        }
        expect(':');

        while (index < length) {
            if (match('}') || matchKeyword('default') || matchKeyword('case')) {
                break;
            }
            sourceElement = parseSourceElement();
            if (typeof sourceElement === 'undefined') {
                break;
            }
            consequent.push(sourceElement);
        }

        return markerApply(marker, delegate.createSwitchCase(test, consequent));
    }

    function parseSwitchStatement() {
        var discriminant, cases, clause, oldInSwitch, defaultFound, marker = markerCreate();

        expectKeyword('switch');

        expect('(');

        discriminant = parseExpression();

        expect(')');

        expect('{');

        cases = [];

        if (match('}')) {
            lex();
            return markerApply(marker, delegate.createSwitchStatement(discriminant, cases));
        }

        oldInSwitch = state.inSwitch;
        state.inSwitch = true;
        defaultFound = false;

        while (index < length) {
            if (match('}')) {
                break;
            }
            clause = parseSwitchCase();
            if (clause.test === null) {
                if (defaultFound) {
                    throwError({}, Messages.MultipleDefaultsInSwitch);
                }
                defaultFound = true;
            }
            cases.push(clause);
        }

        state.inSwitch = oldInSwitch;

        expect('}');

        return markerApply(marker, delegate.createSwitchStatement(discriminant, cases));
    }

    // 12.13 The throw statement

    function parseThrowStatement() {
        var argument, marker = markerCreate();

        expectKeyword('throw');

        if (peekLineTerminator()) {
            throwError({}, Messages.NewlineAfterThrow);
        }

        argument = parseExpression();

        consumeSemicolon();

        return markerApply(marker, delegate.createThrowStatement(argument));
    }

    // 12.14 The try statement

    function parseCatchClause() {
        var param, body, marker = markerCreate();

        expectKeyword('catch');

        expect('(');
        if (match(')')) {
            throwUnexpected(lookahead);
        }

        param = parseExpression();
        // 12.14.1
        if (strict && param.type === Syntax.Identifier && isRestrictedWord(param.name)) {
            throwErrorTolerant({}, Messages.StrictCatchVariable);
        }

        expect(')');
        body = parseBlock();
        return markerApply(marker, delegate.createCatchClause(param, body));
    }

    function parseTryStatement() {
        var block, handlers = [], finalizer = null, marker = markerCreate();

        expectKeyword('try');

        block = parseBlock();

        if (matchKeyword('catch')) {
            handlers.push(parseCatchClause());
        }

        if (matchKeyword('finally')) {
            lex();
            finalizer = parseBlock();
        }

        if (handlers.length === 0 && !finalizer) {
            throwError({}, Messages.NoCatchOrFinally);
        }

        return markerApply(marker, delegate.createTryStatement(block, [], handlers, finalizer));
    }

    // 12.15 The debugger statement

    function parseDebuggerStatement() {
        var marker = markerCreate();
        expectKeyword('debugger');

        consumeSemicolon();

        return markerApply(marker, delegate.createDebuggerStatement());
    }

    // 12 Statements

    function parseStatement() {
        var type = lookahead.type,
            marker,
            expr,
            labeledBody,
            key;

        if (type === Token.EOF) {
            throwUnexpected(lookahead);
        }

        if (type === Token.Punctuator) {
            switch (lookahead.value) {
            case ';':
                return parseEmptyStatement();
            case '{':
                return parseBlock();
            case '(':
                return parseExpressionStatement();
            default:
                break;
            }
        }

        if (type === Token.Keyword) {
            switch (lookahead.value) {
            case 'break':
                return parseBreakStatement();
            case 'continue':
                return parseContinueStatement();
            case 'debugger':
                return parseDebuggerStatement();
            case 'do':
                return parseDoWhileStatement();
            case 'for':
                return parseForStatement();
            case 'function':
                return parseFunctionDeclaration();
            case 'class':
                return parseClassDeclaration();
            case 'if':
                return parseIfStatement();
            case 'return':
                return parseReturnStatement();
            case 'switch':
                return parseSwitchStatement();
            case 'throw':
                return parseThrowStatement();
            case 'try':
                return parseTryStatement();
            case 'var':
                return parseVariableStatement();
            case 'while':
                return parseWhileStatement();
            case 'with':
                return parseWithStatement();
            default:
                break;
            }
        }

        if (matchAsyncFuncExprOrDecl()) {
            return parseFunctionDeclaration();
        }

        marker = markerCreate();
        expr = parseExpression();

        // 12.12 Labelled Statements
        if ((expr.type === Syntax.Identifier) && match(':')) {
            lex();

            key = '$' + expr.name;
            if (Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
                throwError({}, Messages.Redeclaration, 'Label', expr.name);
            }

            state.labelSet[key] = true;
            labeledBody = parseStatement();
            delete state.labelSet[key];
            return markerApply(marker, delegate.createLabeledStatement(expr, labeledBody));
        }

        consumeSemicolon();

        return markerApply(marker, delegate.createExpressionStatement(expr));
    }

    // 13 Function Definition

    function parseConciseBody() {
        if (match('{')) {
            return parseFunctionSourceElements();
        }
        return parseAssignmentExpression();
    }

    function parseFunctionSourceElements() {
        var sourceElement, sourceElements = [], token, directive, firstRestricted,
            oldLabelSet, oldInIteration, oldInSwitch, oldInFunctionBody, oldParenthesizedCount,
            marker = markerCreate();

        expect('{');

        while (index < length) {
            if (lookahead.type !== Token.StringLiteral) {
                break;
            }
            token = lookahead;

            sourceElement = parseSourceElement();
            sourceElements.push(sourceElement);
            if (sourceElement.expression.type !== Syntax.Literal) {
                // this is not directive
                break;
            }
            directive = source.slice(token.range[0] + 1, token.range[1] - 1);
            if (directive === 'use strict') {
                strict = true;
                if (firstRestricted) {
                    throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
                }
            } else {
                if (!firstRestricted && token.octal) {
                    firstRestricted = token;
                }
            }
        }

        oldLabelSet = state.labelSet;
        oldInIteration = state.inIteration;
        oldInSwitch = state.inSwitch;
        oldInFunctionBody = state.inFunctionBody;
        oldParenthesizedCount = state.parenthesizedCount;

        state.labelSet = {};
        state.inIteration = false;
        state.inSwitch = false;
        state.inFunctionBody = true;
        state.parenthesizedCount = 0;

        while (index < length) {
            if (match('}')) {
                break;
            }
            sourceElement = parseSourceElement();
            if (typeof sourceElement === 'undefined') {
                break;
            }
            sourceElements.push(sourceElement);
        }

        expect('}');

        state.labelSet = oldLabelSet;
        state.inIteration = oldInIteration;
        state.inSwitch = oldInSwitch;
        state.inFunctionBody = oldInFunctionBody;
        state.parenthesizedCount = oldParenthesizedCount;

        return markerApply(marker, delegate.createBlockStatement(sourceElements));
    }

    function validateParam(options, param, name) {
        var key = '$' + name;
        if (strict) {
            if (isRestrictedWord(name)) {
                options.stricted = param;
                options.message = Messages.StrictParamName;
            }
            if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
                options.stricted = param;
                options.message = Messages.StrictParamDupe;
            }
        } else if (!options.firstRestricted) {
            if (isRestrictedWord(name)) {
                options.firstRestricted = param;
                options.message = Messages.StrictParamName;
            } else if (isStrictModeReservedWord(name)) {
                options.firstRestricted = param;
                options.message = Messages.StrictReservedWord;
            } else if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
                options.firstRestricted = param;
                options.message = Messages.StrictParamDupe;
            }
        }
        options.paramSet[key] = true;
    }

    function parseParam(options) {
        var marker, token, rest, param, def;

        token = lookahead;
        if (token.value === '...') {
            token = lex();
            rest = true;
        }

        if (match('[')) {
            marker = markerCreate();
            param = parseArrayInitialiser();
            reinterpretAsDestructuredParameter(options, param);
            if (match(':')) {
                param.typeAnnotation = parseTypeAnnotation();
                markerApply(marker, param);
            }
        } else if (match('{')) {
            marker = markerCreate();
            if (rest) {
                throwError({}, Messages.ObjectPatternAsRestParameter);
            }
            param = parseObjectInitialiser();
            reinterpretAsDestructuredParameter(options, param);
            if (match(':')) {
                param.typeAnnotation = parseTypeAnnotation();
                markerApply(marker, param);
            }
        } else {
            param =
                rest
                ? parseTypeAnnotatableIdentifier(
                    false, /* requireTypeAnnotation */
                    false /* canBeOptionalParam */
                )
                : parseTypeAnnotatableIdentifier(
                    false, /* requireTypeAnnotation */
                    true /* canBeOptionalParam */
                );

            validateParam(options, token, token.value);
        }

        if (match('=')) {
            if (rest) {
                throwErrorTolerant(lookahead, Messages.DefaultRestParameter);
            }
            lex();
            def = parseAssignmentExpression();
            ++options.defaultCount;
        }

        if (rest) {
            if (!match(')')) {
                throwError({}, Messages.ParameterAfterRestParameter);
            }
            options.rest = param;
            return false;
        }

        options.params.push(param);
        options.defaults.push(def);
        return !match(')');
    }

    function parseParams(firstRestricted) {
        var options, marker = markerCreate();

        options = {
            params: [],
            defaultCount: 0,
            defaults: [],
            rest: null,
            firstRestricted: firstRestricted
        };

        expect('(');

        if (!match(')')) {
            options.paramSet = {};
            while (index < length) {
                if (!parseParam(options)) {
                    break;
                }
                expect(',');
            }
        }

        expect(')');

        if (options.defaultCount === 0) {
            options.defaults = [];
        }

        if (match(':')) {
            options.returnType = parseTypeAnnotation();
        }

        return markerApply(marker, options);
    }

    function parseFunctionDeclaration() {
        var id, body, token, tmp, firstRestricted, message, generator, isAsync,
            previousStrict, previousYieldAllowed, previousAwaitAllowed,
            marker = markerCreate(), typeParameters;

        isAsync = false;
        if (matchAsync()) {
            lex();
            isAsync = true;
        }

        expectKeyword('function');

        generator = false;
        if (match('*')) {
            lex();
            generator = true;
        }

        token = lookahead;

        id = parseVariableIdentifier();

        if (match('<')) {
            typeParameters = parseTypeParameterDeclaration();
        }

        if (strict) {
            if (isRestrictedWord(token.value)) {
                throwErrorTolerant(token, Messages.StrictFunctionName);
            }
        } else {
            if (isRestrictedWord(token.value)) {
                firstRestricted = token;
                message = Messages.StrictFunctionName;
            } else if (isStrictModeReservedWord(token.value)) {
                firstRestricted = token;
                message = Messages.StrictReservedWord;
            }
        }

        tmp = parseParams(firstRestricted);
        firstRestricted = tmp.firstRestricted;
        if (tmp.message) {
            message = tmp.message;
        }

        previousStrict = strict;
        previousYieldAllowed = state.yieldAllowed;
        state.yieldAllowed = generator;
        previousAwaitAllowed = state.awaitAllowed;
        state.awaitAllowed = isAsync;

        body = parseFunctionSourceElements();

        if (strict && firstRestricted) {
            throwError(firstRestricted, message);
        }
        if (strict && tmp.stricted) {
            throwErrorTolerant(tmp.stricted, message);
        }
        strict = previousStrict;
        state.yieldAllowed = previousYieldAllowed;
        state.awaitAllowed = previousAwaitAllowed;

        return markerApply(
            marker,
            delegate.createFunctionDeclaration(
                id,
                tmp.params,
                tmp.defaults,
                body,
                tmp.rest,
                generator,
                false,
                isAsync,
                tmp.returnType,
                typeParameters
            )
        );
    }

    function parseFunctionExpression() {
        var token, id = null, firstRestricted, message, tmp, body, generator, isAsync,
            previousStrict, previousYieldAllowed, previousAwaitAllowed,
            marker = markerCreate(), typeParameters;

        isAsync = false;
        if (matchAsync()) {
            lex();
            isAsync = true;
        }

        expectKeyword('function');

        generator = false;

        if (match('*')) {
            lex();
            generator = true;
        }

        if (!match('(')) {
            if (!match('<')) {
                token = lookahead;
                id = parseVariableIdentifier();

                if (strict) {
                    if (isRestrictedWord(token.value)) {
                        throwErrorTolerant(token, Messages.StrictFunctionName);
                    }
                } else {
                    if (isRestrictedWord(token.value)) {
                        firstRestricted = token;
                        message = Messages.StrictFunctionName;
                    } else if (isStrictModeReservedWord(token.value)) {
                        firstRestricted = token;
                        message = Messages.StrictReservedWord;
                    }
                }
            }

            if (match('<')) {
                typeParameters = parseTypeParameterDeclaration();
            }
        }

        tmp = parseParams(firstRestricted);
        firstRestricted = tmp.firstRestricted;
        if (tmp.message) {
            message = tmp.message;
        }

        previousStrict = strict;
        previousYieldAllowed = state.yieldAllowed;
        state.yieldAllowed = generator;
        previousAwaitAllowed = state.awaitAllowed;
        state.awaitAllowed = isAsync;

        body = parseFunctionSourceElements();

        if (strict && firstRestricted) {
            throwError(firstRestricted, message);
        }
        if (strict && tmp.stricted) {
            throwErrorTolerant(tmp.stricted, message);
        }
        strict = previousStrict;
        state.yieldAllowed = previousYieldAllowed;
        state.awaitAllowed = previousAwaitAllowed;

        return markerApply(
            marker,
            delegate.createFunctionExpression(
                id,
                tmp.params,
                tmp.defaults,
                body,
                tmp.rest,
                generator,
                false,
                isAsync,
                tmp.returnType,
                typeParameters
            )
        );
    }

    function parseYieldExpression() {
        var delegateFlag, expr, marker = markerCreate();

        expectKeyword('yield', !strict);

        delegateFlag = false;
        if (match('*')) {
            lex();
            delegateFlag = true;
        }

        expr = parseAssignmentExpression();

        return markerApply(marker, delegate.createYieldExpression(expr, delegateFlag));
    }

    function parseAwaitExpression() {
        var expr, marker = markerCreate();
        expectContextualKeyword('await');
        expr = parseAssignmentExpression();
        return markerApply(marker, delegate.createAwaitExpression(expr));
    }

    // 14 Classes

    function parseMethodDefinition(existingPropNames, key, isStatic, generator, computed) {
        var token, param, propType, isValidDuplicateProp = false,
            isAsync, typeParameters, tokenValue, returnType,
            annotationMarker;

        propType = isStatic ? ClassPropertyType["static"] : ClassPropertyType.prototype;

        if (generator) {
            return delegate.createMethodDefinition(
                propType,
                '',
                key,
                parsePropertyMethodFunction({ generator: true })
            );
        }

        tokenValue = key.type === 'Identifier' && key.name;

        if (tokenValue === 'get' && !match('(')) {
            key = parseObjectPropertyKey();

            // It is a syntax error if any other properties have a name
            // duplicating this one unless they are a setter
            if (existingPropNames[propType].hasOwnProperty(key.name)) {
                isValidDuplicateProp =
                    // There isn't already a getter for this prop
                    existingPropNames[propType][key.name].get === undefined
                    // There isn't already a data prop by this name
                    && existingPropNames[propType][key.name].data === undefined
                    // The only existing prop by this name is a setter
                    && existingPropNames[propType][key.name].set !== undefined;
                if (!isValidDuplicateProp) {
                    throwError(key, Messages.IllegalDuplicateClassProperty);
                }
            } else {
                existingPropNames[propType][key.name] = {};
            }
            existingPropNames[propType][key.name].get = true;

            expect('(');
            expect(')');
            if (match(':')) {
                returnType = parseTypeAnnotation();
            }
            return delegate.createMethodDefinition(
                propType,
                'get',
                key,
                parsePropertyFunction({ generator: false, returnType: returnType })
            );
        }
        if (tokenValue === 'set' && !match('(')) {
            key = parseObjectPropertyKey();

            // It is a syntax error if any other properties have a name
            // duplicating this one unless they are a getter
            if (existingPropNames[propType].hasOwnProperty(key.name)) {
                isValidDuplicateProp =
                    // There isn't already a setter for this prop
                    existingPropNames[propType][key.name].set === undefined
                    // There isn't already a data prop by this name
                    && existingPropNames[propType][key.name].data === undefined
                    // The only existing prop by this name is a getter
                    && existingPropNames[propType][key.name].get !== undefined;
                if (!isValidDuplicateProp) {
                    throwError(key, Messages.IllegalDuplicateClassProperty);
                }
            } else {
                existingPropNames[propType][key.name] = {};
            }
            existingPropNames[propType][key.name].set = true;

            expect('(');
            token = lookahead;
            param = [ parseTypeAnnotatableIdentifier() ];
            expect(')');
            if (match(':')) {
                returnType = parseTypeAnnotation();
            }
            return delegate.createMethodDefinition(
                propType,
                'set',
                key,
                parsePropertyFunction({
                    params: param,
                    generator: false,
                    name: token,
                    returnType: returnType
                })
            );
        }

        if (match('<')) {
            typeParameters = parseTypeParameterDeclaration();
        }

        isAsync = tokenValue === 'async' && !match('(');
        if (isAsync) {
            key = parseObjectPropertyKey();
        }

        // It is a syntax error if any other properties have the same name as a
        // non-getter, non-setter method
        if (existingPropNames[propType].hasOwnProperty(key.name)) {
            throwError(key, Messages.IllegalDuplicateClassProperty);
        } else {
            existingPropNames[propType][key.name] = {};
        }
        existingPropNames[propType][key.name].data = true;

        return delegate.createMethodDefinition(
            propType,
            '',
            key,
            parsePropertyMethodFunction({
                generator: false,
                async: isAsync,
                typeParameters: typeParameters
            })
        );
    }

    function parseClassProperty(existingPropNames, key, computed, isStatic) {
        var typeAnnotation;

        typeAnnotation = parseTypeAnnotation();
        expect(';');

        return delegate.createClassProperty(
            key,
            typeAnnotation,
            computed,
            isStatic
        );
    }

    function parseClassElement(existingProps) {
        var computed, generator = false, key, marker = markerCreate(),
            isStatic = false;
        if (match(';')) {
            lex();
            return;
        }

        if (lookahead.value === 'static') {
            lex();
            isStatic = true;
        }

        if (match('*')) {
            lex();
            generator = true;
        }

        computed = (lookahead.value === '[');
        key = parseObjectPropertyKey();

        if (!generator && lookahead.value === ':') {
            return markerApply(marker, parseClassProperty(existingProps, key, computed, isStatic));
        }

        return markerApply(marker, parseMethodDefinition(
            existingProps,
            key,
            isStatic,
            generator,
            computed
        ));
    }

    function parseClassBody() {
        var classElement, classElements = [], existingProps = {}, marker = markerCreate();

        existingProps[ClassPropertyType["static"]] = {};
        existingProps[ClassPropertyType.prototype] = {};

        expect('{');

        while (index < length) {
            if (match('}')) {
                break;
            }
            classElement = parseClassElement(existingProps);

            if (typeof classElement !== 'undefined') {
                classElements.push(classElement);
            }
        }

        expect('}');

        return markerApply(marker, delegate.createClassBody(classElements));
    }

    function parseClassImplements() {
        var id, implemented = [], marker, typeParameters;
        expectContextualKeyword('implements');
        while (index < length) {
            marker = markerCreate();
            id = parseVariableIdentifier();
            if (match('<')) {
                typeParameters = parseTypeParameterInstantiation();
            } else {
                typeParameters = null;
            }
            implemented.push(markerApply(marker, delegate.createClassImplements(
                id,
                typeParameters
            )));
            if (!match(',')) {
                break;
            }
            expect(',');
        }
        return implemented;
    }

    function parseClassExpression() {
        var id, implemented, previousYieldAllowed, superClass = null,
            superTypeParameters, marker = markerCreate(), typeParameters;

        expectKeyword('class');

        if (!matchKeyword('extends') && !matchContextualKeyword('implements') && !match('{')) {
            id = parseVariableIdentifier();
        }

        if (match('<')) {
            typeParameters = parseTypeParameterDeclaration();
        }

        if (matchKeyword('extends')) {
            expectKeyword('extends');
            previousYieldAllowed = state.yieldAllowed;
            state.yieldAllowed = false;
            superClass = parseLeftHandSideExpressionAllowCall();
            if (match('<')) {
                superTypeParameters = parseTypeParameterInstantiation();
            }
            state.yieldAllowed = previousYieldAllowed;
        }

        if (matchContextualKeyword('implements')) {
            implemented = parseClassImplements();
        }

        return markerApply(marker, delegate.createClassExpression(
            id,
            superClass,
            parseClassBody(),
            typeParameters,
            superTypeParameters,
            implemented
        ));
    }

    function parseClassDeclaration() {
        var id, implemented, previousYieldAllowed, superClass = null,
            superTypeParameters, marker = markerCreate(), typeParameters;

        expectKeyword('class');

        id = parseVariableIdentifier();

        if (match('<')) {
            typeParameters = parseTypeParameterDeclaration();
        }

        if (matchKeyword('extends')) {
            expectKeyword('extends');
            previousYieldAllowed = state.yieldAllowed;
            state.yieldAllowed = false;
            superClass = parseLeftHandSideExpressionAllowCall();
            if (match('<')) {
                superTypeParameters = parseTypeParameterInstantiation();
            }
            state.yieldAllowed = previousYieldAllowed;
        }

        if (matchContextualKeyword('implements')) {
            implemented = parseClassImplements();
        }

        return markerApply(marker, delegate.createClassDeclaration(
            id,
            superClass,
            parseClassBody(),
            typeParameters,
            superTypeParameters,
            implemented
        ));
    }

    // 15 Program

    function parseSourceElement() {
        var token;
        if (lookahead.type === Token.Keyword) {
            switch (lookahead.value) {
            case 'const':
            case 'let':
                return parseConstLetDeclaration(lookahead.value);
            case 'function':
                return parseFunctionDeclaration();
            default:
                return parseStatement();
            }
        }

        if (matchContextualKeyword('type')
                && lookahead2().type === Token.Identifier) {
            return parseTypeAlias();
        }

        if (matchContextualKeyword('interface')
                && lookahead2().type === Token.Identifier) {
            return parseInterface();
        }

        if (matchContextualKeyword('declare')) {
            token = lookahead2();
            if (token.type === Token.Keyword) {
                switch (token.value) {
                case 'class':
                    return parseDeclareClass();
                case 'function':
                    return parseDeclareFunction();
                case 'var':
                    return parseDeclareVariable();
                }
            } else if (token.type === Token.Identifier
                    && token.value === 'module') {
                return parseDeclareModule();
            }
        }

        if (lookahead.type !== Token.EOF) {
            return parseStatement();
        }
    }

    function parseProgramElement() {
        if (lookahead.type === Token.Keyword) {
            switch (lookahead.value) {
            case 'export':
                return parseExportDeclaration();
            case 'import':
                return parseImportDeclaration();
            }
        }

        return parseSourceElement();
    }

    function parseProgramElements() {
        var sourceElement, sourceElements = [], token, directive, firstRestricted;

        while (index < length) {
            token = lookahead;
            if (token.type !== Token.StringLiteral) {
                break;
            }

            sourceElement = parseProgramElement();
            sourceElements.push(sourceElement);
            if (sourceElement.expression.type !== Syntax.Literal) {
                // this is not directive
                break;
            }
            directive = source.slice(token.range[0] + 1, token.range[1] - 1);
            if (directive === 'use strict') {
                strict = true;
                if (firstRestricted) {
                    throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
                }
            } else {
                if (!firstRestricted && token.octal) {
                    firstRestricted = token;
                }
            }
        }

        while (index < length) {
            sourceElement = parseProgramElement();
            if (typeof sourceElement === 'undefined') {
                break;
            }
            sourceElements.push(sourceElement);
        }
        return sourceElements;
    }

    function parseProgram() {
        var body, marker = markerCreate();
        strict = false;
        peek();
        body = parseProgramElements();
        return markerApply(marker, delegate.createProgram(body));
    }

    // The following functions are needed only when the option to preserve
    // the comments is active.

    function addComment(type, value, start, end, loc) {
        var comment;

        assert(typeof start === 'number', 'Comment must have valid position');

        // Because the way the actual token is scanned, often the comments
        // (if any) are skipped twice during the lexical analysis.
        // Thus, we need to skip adding a comment if the comment array already
        // handled it.
        if (state.lastCommentStart >= start) {
            return;
        }
        state.lastCommentStart = start;

        comment = {
            type: type,
            value: value
        };
        if (extra.range) {
            comment.range = [start, end];
        }
        if (extra.loc) {
            comment.loc = loc;
        }
        extra.comments.push(comment);
        if (extra.attachComment) {
            extra.leadingComments.push(comment);
            extra.trailingComments.push(comment);
        }
    }

    function scanComment() {
        var comment, ch, loc, start, blockComment, lineComment;

        comment = '';
        blockComment = false;
        lineComment = false;

        while (index < length) {
            ch = source[index];

            if (lineComment) {
                ch = source[index++];
                if (isLineTerminator(ch.charCodeAt(0))) {
                    loc.end = {
                        line: lineNumber,
                        column: index - lineStart - 1
                    };
                    lineComment = false;
                    addComment('Line', comment, start, index - 1, loc);
                    if (ch === '\r' && source[index] === '\n') {
                        ++index;
                    }
                    ++lineNumber;
                    lineStart = index;
                    comment = '';
                } else if (index >= length) {
                    lineComment = false;
                    comment += ch;
                    loc.end = {
                        line: lineNumber,
                        column: length - lineStart
                    };
                    addComment('Line', comment, start, length, loc);
                } else {
                    comment += ch;
                }
            } else if (blockComment) {
                if (isLineTerminator(ch.charCodeAt(0))) {
                    if (ch === '\r') {
                        ++index;
                        comment += '\r';
                    }
                    if (ch !== '\r' || source[index] === '\n') {
                        comment += source[index];
                        ++lineNumber;
                        ++index;
                        lineStart = index;
                        if (index >= length) {
                            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                        }
                    }
                } else {
                    ch = source[index++];
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                    comment += ch;
                    if (ch === '*') {
                        ch = source[index];
                        if (ch === '/') {
                            comment = comment.substr(0, comment.length - 1);
                            blockComment = false;
                            ++index;
                            loc.end = {
                                line: lineNumber,
                                column: index - lineStart
                            };
                            addComment('Block', comment, start, index, loc);
                            comment = '';
                        }
                    }
                }
            } else if (ch === '/') {
                ch = source[index + 1];
                if (ch === '/') {
                    loc = {
                        start: {
                            line: lineNumber,
                            column: index - lineStart
                        }
                    };
                    start = index;
                    index += 2;
                    lineComment = true;
                    if (index >= length) {
                        loc.end = {
                            line: lineNumber,
                            column: index - lineStart
                        };
                        lineComment = false;
                        addComment('Line', comment, start, index, loc);
                    }
                } else if (ch === '*') {
                    start = index;
                    index += 2;
                    blockComment = true;
                    loc = {
                        start: {
                            line: lineNumber,
                            column: index - lineStart - 2
                        }
                    };
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                } else {
                    break;
                }
            } else if (isWhiteSpace(ch.charCodeAt(0))) {
                ++index;
            } else if (isLineTerminator(ch.charCodeAt(0))) {
                ++index;
                if (ch ===  '\r' && source[index] === '\n') {
                    ++index;
                }
                ++lineNumber;
                lineStart = index;
            } else {
                break;
            }
        }
    }

    // 16 XJS

    XHTMLEntities = {
        quot: '\u0022',
        amp: '&',
        apos: '\u0027',
        lt: '<',
        gt: '>',
        nbsp: '\u00A0',
        iexcl: '\u00A1',
        cent: '\u00A2',
        pound: '\u00A3',
        curren: '\u00A4',
        yen: '\u00A5',
        brvbar: '\u00A6',
        sect: '\u00A7',
        uml: '\u00A8',
        copy: '\u00A9',
        ordf: '\u00AA',
        laquo: '\u00AB',
        not: '\u00AC',
        shy: '\u00AD',
        reg: '\u00AE',
        macr: '\u00AF',
        deg: '\u00B0',
        plusmn: '\u00B1',
        sup2: '\u00B2',
        sup3: '\u00B3',
        acute: '\u00B4',
        micro: '\u00B5',
        para: '\u00B6',
        middot: '\u00B7',
        cedil: '\u00B8',
        sup1: '\u00B9',
        ordm: '\u00BA',
        raquo: '\u00BB',
        frac14: '\u00BC',
        frac12: '\u00BD',
        frac34: '\u00BE',
        iquest: '\u00BF',
        Agrave: '\u00C0',
        Aacute: '\u00C1',
        Acirc: '\u00C2',
        Atilde: '\u00C3',
        Auml: '\u00C4',
        Aring: '\u00C5',
        AElig: '\u00C6',
        Ccedil: '\u00C7',
        Egrave: '\u00C8',
        Eacute: '\u00C9',
        Ecirc: '\u00CA',
        Euml: '\u00CB',
        Igrave: '\u00CC',
        Iacute: '\u00CD',
        Icirc: '\u00CE',
        Iuml: '\u00CF',
        ETH: '\u00D0',
        Ntilde: '\u00D1',
        Ograve: '\u00D2',
        Oacute: '\u00D3',
        Ocirc: '\u00D4',
        Otilde: '\u00D5',
        Ouml: '\u00D6',
        times: '\u00D7',
        Oslash: '\u00D8',
        Ugrave: '\u00D9',
        Uacute: '\u00DA',
        Ucirc: '\u00DB',
        Uuml: '\u00DC',
        Yacute: '\u00DD',
        THORN: '\u00DE',
        szlig: '\u00DF',
        agrave: '\u00E0',
        aacute: '\u00E1',
        acirc: '\u00E2',
        atilde: '\u00E3',
        auml: '\u00E4',
        aring: '\u00E5',
        aelig: '\u00E6',
        ccedil: '\u00E7',
        egrave: '\u00E8',
        eacute: '\u00E9',
        ecirc: '\u00EA',
        euml: '\u00EB',
        igrave: '\u00EC',
        iacute: '\u00ED',
        icirc: '\u00EE',
        iuml: '\u00EF',
        eth: '\u00F0',
        ntilde: '\u00F1',
        ograve: '\u00F2',
        oacute: '\u00F3',
        ocirc: '\u00F4',
        otilde: '\u00F5',
        ouml: '\u00F6',
        divide: '\u00F7',
        oslash: '\u00F8',
        ugrave: '\u00F9',
        uacute: '\u00FA',
        ucirc: '\u00FB',
        uuml: '\u00FC',
        yacute: '\u00FD',
        thorn: '\u00FE',
        yuml: '\u00FF',
        OElig: '\u0152',
        oelig: '\u0153',
        Scaron: '\u0160',
        scaron: '\u0161',
        Yuml: '\u0178',
        fnof: '\u0192',
        circ: '\u02C6',
        tilde: '\u02DC',
        Alpha: '\u0391',
        Beta: '\u0392',
        Gamma: '\u0393',
        Delta: '\u0394',
        Epsilon: '\u0395',
        Zeta: '\u0396',
        Eta: '\u0397',
        Theta: '\u0398',
        Iota: '\u0399',
        Kappa: '\u039A',
        Lambda: '\u039B',
        Mu: '\u039C',
        Nu: '\u039D',
        Xi: '\u039E',
        Omicron: '\u039F',
        Pi: '\u03A0',
        Rho: '\u03A1',
        Sigma: '\u03A3',
        Tau: '\u03A4',
        Upsilon: '\u03A5',
        Phi: '\u03A6',
        Chi: '\u03A7',
        Psi: '\u03A8',
        Omega: '\u03A9',
        alpha: '\u03B1',
        beta: '\u03B2',
        gamma: '\u03B3',
        delta: '\u03B4',
        epsilon: '\u03B5',
        zeta: '\u03B6',
        eta: '\u03B7',
        theta: '\u03B8',
        iota: '\u03B9',
        kappa: '\u03BA',
        lambda: '\u03BB',
        mu: '\u03BC',
        nu: '\u03BD',
        xi: '\u03BE',
        omicron: '\u03BF',
        pi: '\u03C0',
        rho: '\u03C1',
        sigmaf: '\u03C2',
        sigma: '\u03C3',
        tau: '\u03C4',
        upsilon: '\u03C5',
        phi: '\u03C6',
        chi: '\u03C7',
        psi: '\u03C8',
        omega: '\u03C9',
        thetasym: '\u03D1',
        upsih: '\u03D2',
        piv: '\u03D6',
        ensp: '\u2002',
        emsp: '\u2003',
        thinsp: '\u2009',
        zwnj: '\u200C',
        zwj: '\u200D',
        lrm: '\u200E',
        rlm: '\u200F',
        ndash: '\u2013',
        mdash: '\u2014',
        lsquo: '\u2018',
        rsquo: '\u2019',
        sbquo: '\u201A',
        ldquo: '\u201C',
        rdquo: '\u201D',
        bdquo: '\u201E',
        dagger: '\u2020',
        Dagger: '\u2021',
        bull: '\u2022',
        hellip: '\u2026',
        permil: '\u2030',
        prime: '\u2032',
        Prime: '\u2033',
        lsaquo: '\u2039',
        rsaquo: '\u203A',
        oline: '\u203E',
        frasl: '\u2044',
        euro: '\u20AC',
        image: '\u2111',
        weierp: '\u2118',
        real: '\u211C',
        trade: '\u2122',
        alefsym: '\u2135',
        larr: '\u2190',
        uarr: '\u2191',
        rarr: '\u2192',
        darr: '\u2193',
        harr: '\u2194',
        crarr: '\u21B5',
        lArr: '\u21D0',
        uArr: '\u21D1',
        rArr: '\u21D2',
        dArr: '\u21D3',
        hArr: '\u21D4',
        forall: '\u2200',
        part: '\u2202',
        exist: '\u2203',
        empty: '\u2205',
        nabla: '\u2207',
        isin: '\u2208',
        notin: '\u2209',
        ni: '\u220B',
        prod: '\u220F',
        sum: '\u2211',
        minus: '\u2212',
        lowast: '\u2217',
        radic: '\u221A',
        prop: '\u221D',
        infin: '\u221E',
        ang: '\u2220',
        and: '\u2227',
        or: '\u2228',
        cap: '\u2229',
        cup: '\u222A',
        'int': '\u222B',
        there4: '\u2234',
        sim: '\u223C',
        cong: '\u2245',
        asymp: '\u2248',
        ne: '\u2260',
        equiv: '\u2261',
        le: '\u2264',
        ge: '\u2265',
        sub: '\u2282',
        sup: '\u2283',
        nsub: '\u2284',
        sube: '\u2286',
        supe: '\u2287',
        oplus: '\u2295',
        otimes: '\u2297',
        perp: '\u22A5',
        sdot: '\u22C5',
        lceil: '\u2308',
        rceil: '\u2309',
        lfloor: '\u230A',
        rfloor: '\u230B',
        lang: '\u2329',
        rang: '\u232A',
        loz: '\u25CA',
        spades: '\u2660',
        clubs: '\u2663',
        hearts: '\u2665',
        diams: '\u2666'
    };

    function getQualifiedXJSName(object) {
        if (object.type === Syntax.XJSIdentifier) {
            return object.name;
        }
        if (object.type === Syntax.XJSNamespacedName) {
            return object.namespace.name + ':' + object.name.name;
        }
        if (object.type === Syntax.XJSMemberExpression) {
            return (
                getQualifiedXJSName(object.object) + '.' +
                getQualifiedXJSName(object.property)
            );
        }
    }

    function isXJSIdentifierStart(ch) {
        // exclude backslash (\)
        return (ch !== 92) && isIdentifierStart(ch);
    }

    function isXJSIdentifierPart(ch) {
        // exclude backslash (\) and add hyphen (-)
        return (ch !== 92) && (ch === 45 || isIdentifierPart(ch));
    }

    function scanXJSIdentifier() {
        var ch, start, value = '';

        start = index;
        while (index < length) {
            ch = source.charCodeAt(index);
            if (!isXJSIdentifierPart(ch)) {
                break;
            }
            value += source[index++];
        }

        return {
            type: Token.XJSIdentifier,
            value: value,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    function scanXJSEntity() {
        var ch, str = '', start = index, count = 0, code;
        ch = source[index];
        assert(ch === '&', 'Entity must start with an ampersand');
        index++;
        while (index < length && count++ < 10) {
            ch = source[index++];
            if (ch === ';') {
                break;
            }
            str += ch;
        }

        // Well-formed entity (ending was found).
        if (ch === ';') {
            // Numeric entity.
            if (str[0] === '#') {
                if (str[1] === 'x') {
                    code = +('0' + str.substr(1));
                } else {
                    // Removing leading zeros in order to avoid treating as octal in old browsers.
                    code = +str.substr(1).replace(Regex.LeadingZeros, '');
                }

                if (!isNaN(code)) {
                    return String.fromCharCode(code);
                }
            } else if (XHTMLEntities[str]) {
                return XHTMLEntities[str];
            }
        }

        // Treat non-entity sequences as regular text.
        index = start + 1;
        return '&';
    }

    function scanXJSText(stopChars) {
        var ch, str = '', start;
        start = index;
        while (index < length) {
            ch = source[index];
            if (stopChars.indexOf(ch) !== -1) {
                break;
            }
            if (ch === '&') {
                str += scanXJSEntity();
            } else {
                index++;
                if (ch === '\r' && source[index] === '\n') {
                    str += ch;
                    ch = source[index];
                    index++;
                }
                if (isLineTerminator(ch.charCodeAt(0))) {
                    ++lineNumber;
                    lineStart = index;
                }
                str += ch;
            }
        }
        return {
            type: Token.XJSText,
            value: str,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    function scanXJSStringLiteral() {
        var innerToken, quote, start;

        quote = source[index];
        assert((quote === '\'' || quote === '"'),
            'String literal must starts with a quote');

        start = index;
        ++index;

        innerToken = scanXJSText([quote]);

        if (quote !== source[index]) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        ++index;

        innerToken.range = [start, index];

        return innerToken;
    }

    /**
     * Between XJS opening and closing tags (e.g. <foo>HERE</foo>), anything that
     * is not another XJS tag and is not an expression wrapped by {} is text.
     */
    function advanceXJSChild() {
        var ch = source.charCodeAt(index);

        // { (123) and < (60)
        if (ch !== 123 && ch !== 60) {
            return scanXJSText(['<', '{']);
        }

        return scanPunctuator();
    }

    function parseXJSIdentifier() {
        var token, marker = markerCreate();

        if (lookahead.type !== Token.XJSIdentifier) {
            throwUnexpected(lookahead);
        }

        token = lex();
        return markerApply(marker, delegate.createXJSIdentifier(token.value));
    }

    function parseXJSNamespacedName() {
        var namespace, name, marker = markerCreate();

        namespace = parseXJSIdentifier();
        expect(':');
        name = parseXJSIdentifier();

        return markerApply(marker, delegate.createXJSNamespacedName(namespace, name));
    }

    function parseXJSMemberExpression() {
        var marker = markerCreate(),
            expr = parseXJSIdentifier();

        while (match('.')) {
            lex();
            expr = markerApply(marker, delegate.createXJSMemberExpression(expr, parseXJSIdentifier()));
        }

        return expr;
    }

    function parseXJSElementName() {
        if (lookahead2().value === ':') {
            return parseXJSNamespacedName();
        }
        if (lookahead2().value === '.') {
            return parseXJSMemberExpression();
        }

        return parseXJSIdentifier();
    }

    function parseXJSAttributeName() {
        if (lookahead2().value === ':') {
            return parseXJSNamespacedName();
        }

        return parseXJSIdentifier();
    }

    function parseXJSAttributeValue() {
        var value, marker;
        if (match('{')) {
            value = parseXJSExpressionContainer();
            if (value.expression.type === Syntax.XJSEmptyExpression) {
                throwError(
                    value,
                    'XJS attributes must only be assigned a non-empty ' +
                        'expression'
                );
            }
        } else if (match('<')) {
            value = parseXJSElement();
        } else if (lookahead.type === Token.XJSText) {
            marker = markerCreate();
            value = markerApply(marker, delegate.createLiteral(lex()));
        } else {
            throwError({}, Messages.InvalidXJSAttributeValue);
        }
        return value;
    }

    function parseXJSEmptyExpression() {
        var marker = markerCreatePreserveWhitespace();
        while (source.charAt(index) !== '}') {
            index++;
        }
        return markerApply(marker, delegate.createXJSEmptyExpression());
    }

    function parseXJSExpressionContainer() {
        var expression, origInXJSChild, origInXJSTag, marker = markerCreate();

        origInXJSChild = state.inXJSChild;
        origInXJSTag = state.inXJSTag;
        state.inXJSChild = false;
        state.inXJSTag = false;

        expect('{');

        if (match('}')) {
            expression = parseXJSEmptyExpression();
        } else {
            expression = parseExpression();
        }

        state.inXJSChild = origInXJSChild;
        state.inXJSTag = origInXJSTag;

        expect('}');

        return markerApply(marker, delegate.createXJSExpressionContainer(expression));
    }

    function parseXJSSpreadAttribute() {
        var expression, origInXJSChild, origInXJSTag, marker = markerCreate();

        origInXJSChild = state.inXJSChild;
        origInXJSTag = state.inXJSTag;
        state.inXJSChild = false;
        state.inXJSTag = false;

        expect('{');
        expect('...');

        expression = parseAssignmentExpression();

        state.inXJSChild = origInXJSChild;
        state.inXJSTag = origInXJSTag;

        expect('}');

        return markerApply(marker, delegate.createXJSSpreadAttribute(expression));
    }

    function parseXJSAttribute() {
        var name, marker;

        if (match('{')) {
            return parseXJSSpreadAttribute();
        }

        marker = markerCreate();

        name = parseXJSAttributeName();

        // HTML empty attribute
        if (match('=')) {
            lex();
            return markerApply(marker, delegate.createXJSAttribute(name, parseXJSAttributeValue()));
        }

        return markerApply(marker, delegate.createXJSAttribute(name));
    }

    function parseXJSChild() {
        var token, marker;
        if (match('{')) {
            token = parseXJSExpressionContainer();
        } else if (lookahead.type === Token.XJSText) {
            marker = markerCreatePreserveWhitespace();
            token = markerApply(marker, delegate.createLiteral(lex()));
        } else {
            token = parseXJSElement();
        }
        return token;
    }

    function parseXJSClosingElement() {
        var name, origInXJSChild, origInXJSTag, marker = markerCreate();
        origInXJSChild = state.inXJSChild;
        origInXJSTag = state.inXJSTag;
        state.inXJSChild = false;
        state.inXJSTag = true;
        expect('<');
        expect('/');
        name = parseXJSElementName();
        // Because advance() (called by lex() called by expect()) expects there
        // to be a valid token after >, it needs to know whether to look for a
        // standard JS token or an XJS text node
        state.inXJSChild = origInXJSChild;
        state.inXJSTag = origInXJSTag;
        expect('>');
        return markerApply(marker, delegate.createXJSClosingElement(name));
    }

    function parseXJSOpeningElement() {
        var name, attribute, attributes = [], selfClosing = false, origInXJSChild, origInXJSTag, marker = markerCreate();

        origInXJSChild = state.inXJSChild;
        origInXJSTag = state.inXJSTag;
        state.inXJSChild = false;
        state.inXJSTag = true;

        expect('<');

        name = parseXJSElementName();

        while (index < length &&
                lookahead.value !== '/' &&
                lookahead.value !== '>') {
            attributes.push(parseXJSAttribute());
        }

        state.inXJSTag = origInXJSTag;

        if (lookahead.value === '/') {
            expect('/');
            // Because advance() (called by lex() called by expect()) expects
            // there to be a valid token after >, it needs to know whether to
            // look for a standard JS token or an XJS text node
            state.inXJSChild = origInXJSChild;
            expect('>');
            selfClosing = true;
        } else {
            state.inXJSChild = true;
            expect('>');
        }
        return markerApply(marker, delegate.createXJSOpeningElement(name, attributes, selfClosing));
    }

    function parseXJSElement() {
        var openingElement, closingElement = null, children = [], origInXJSChild, origInXJSTag, marker = markerCreate();

        origInXJSChild = state.inXJSChild;
        origInXJSTag = state.inXJSTag;
        openingElement = parseXJSOpeningElement();

        if (!openingElement.selfClosing) {
            while (index < length) {
                state.inXJSChild = false; // Call lookahead2() with inXJSChild = false because </ should not be considered in the child
                if (lookahead.value === '<' && lookahead2().value === '/') {
                    break;
                }
                state.inXJSChild = true;
                children.push(parseXJSChild());
            }
            state.inXJSChild = origInXJSChild;
            state.inXJSTag = origInXJSTag;
            closingElement = parseXJSClosingElement();
            if (getQualifiedXJSName(closingElement.name) !== getQualifiedXJSName(openingElement.name)) {
                throwError({}, Messages.ExpectedXJSClosingTag, getQualifiedXJSName(openingElement.name));
            }
        }

        // When (erroneously) writing two adjacent tags like
        //
        //     var x = <div>one</div><div>two</div>;
        //
        // the default error message is a bit incomprehensible. Since it's
        // rarely (never?) useful to write a less-than sign after an XJS
        // element, we disallow it here in the parser in order to provide a
        // better error message. (In the rare case that the less-than operator
        // was intended, the left tag can be wrapped in parentheses.)
        if (!origInXJSChild && match('<')) {
            throwError(lookahead, Messages.AdjacentXJSElements);
        }

        return markerApply(marker, delegate.createXJSElement(openingElement, closingElement, children));
    }

    function parseTypeAlias() {
        var id, marker = markerCreate(), typeParameters = null, right;
        expectContextualKeyword('type');
        id = parseVariableIdentifier();
        if (match('<')) {
            typeParameters = parseTypeParameterDeclaration();
        }
        expect('=');
        right = parseType();
        consumeSemicolon();
        return markerApply(marker, delegate.createTypeAlias(id, typeParameters, right));
    }

    function parseInterfaceExtends() {
        var marker = markerCreate(), id, typeParameters = null;

        id = parseVariableIdentifier();
        if (match('<')) {
            typeParameters = parseTypeParameterInstantiation();
        }

        return markerApply(marker, delegate.createInterfaceExtends(
            id,
            typeParameters
        ));
    }

    function parseInterfaceish(marker, allowStatic) {
        var body, bodyMarker, extended = [], id,
            typeParameters = null;

        id = parseVariableIdentifier();
        if (match('<')) {
            typeParameters = parseTypeParameterDeclaration();
        }

        if (matchKeyword('extends')) {
            expectKeyword('extends');

            while (index < length) {
                extended.push(parseInterfaceExtends());
                if (!match(',')) {
                    break;
                }
                expect(',');
            }
        }

        bodyMarker = markerCreate();
        body = markerApply(bodyMarker, parseObjectType(allowStatic));

        return markerApply(marker, delegate.createInterface(
            id,
            typeParameters,
            body,
            extended
        ));
    }

    function parseInterface() {
        var body, bodyMarker, extended = [], id, marker = markerCreate(),
            typeParameters = null;

        expectContextualKeyword('interface');
        return parseInterfaceish(marker, /* allowStatic */false);
    }

    function parseDeclareClass() {
        var marker = markerCreate(), ret;
        expectContextualKeyword('declare');
        expectKeyword('class');

        ret = parseInterfaceish(marker, /* allowStatic */true);
        ret.type = Syntax.DeclareClass;
        return ret;
    }

    function parseDeclareFunction() {
        var id, idMarker,
            marker = markerCreate(), params, returnType, rest, tmp,
            typeParameters = null, value, valueMarker;

        expectContextualKeyword('declare');
        expectKeyword('function');
        idMarker = markerCreate();
        id = parseVariableIdentifier();

        valueMarker = markerCreate();
        if (match('<')) {
            typeParameters = parseTypeParameterDeclaration();
        }
        expect('(');
        tmp = parseFunctionTypeParams();
        params = tmp.params;
        rest = tmp.rest;
        expect(')');

        expect(':');
        returnType = parseType();

        value = markerApply(valueMarker, delegate.createFunctionTypeAnnotation(
            params,
            returnType,
            rest,
            typeParameters
        ));

        id.typeAnnotation = markerApply(valueMarker, delegate.createTypeAnnotation(
            value
        ));
        markerApply(idMarker, id);

        consumeSemicolon();

        return markerApply(marker, delegate.createDeclareFunction(
            id
        ));
    }

    function parseDeclareVariable() {
        var id, marker = markerCreate();
        expectContextualKeyword('declare');
        expectKeyword('var');
        id = parseTypeAnnotatableIdentifier();

        consumeSemicolon();

        return markerApply(marker, delegate.createDeclareVariable(
            id
        ));
    }

    function parseDeclareModule() {
        var body = [], bodyMarker, id, idMarker, marker = markerCreate(), token;
        expectContextualKeyword('declare');
        expectContextualKeyword('module');

        if (lookahead.type === Token.StringLiteral) {
            if (strict && lookahead.octal) {
                throwErrorTolerant(lookahead, Messages.StrictOctalLiteral);
            }
            idMarker = markerCreate();
            id = markerApply(idMarker, delegate.createLiteral(lex()));
        } else {
            id = parseVariableIdentifier();
        }

        bodyMarker = markerCreate();
        expect('{');
        while (index < length && !match('}')) {
            token = lookahead2();
            switch (token.value) {
            case 'class':
                body.push(parseDeclareClass());
                break;
            case 'function':
                body.push(parseDeclareFunction());
                break;
            case 'var':
                body.push(parseDeclareVariable());
                break;
            default:
                throwUnexpected(lookahead);
            }
        }
        expect('}');

        return markerApply(marker, delegate.createDeclareModule(
            id,
            markerApply(bodyMarker, delegate.createBlockStatement(body))
        ));
    }

    function collectToken() {
        var start, loc, token, range, value, entry;

        if (!state.inXJSChild) {
            skipComment();
        }

        start = index;
        loc = {
            start: {
                line: lineNumber,
                column: index - lineStart
            }
        };

        token = extra.advance();
        loc.end = {
            line: lineNumber,
            column: index - lineStart
        };

        if (token.type !== Token.EOF) {
            range = [token.range[0], token.range[1]];
            value = source.slice(token.range[0], token.range[1]);
            entry = {
                type: TokenName[token.type],
                value: value,
                range: range,
                loc: loc
            };
            if (token.regex) {
                entry.regex = {
                    pattern: token.regex.pattern,
                    flags: token.regex.flags
                };
            }
            extra.tokens.push(entry);
        }

        return token;
    }

    function collectRegex() {
        var pos, loc, regex, token;

        skipComment();

        pos = index;
        loc = {
            start: {
                line: lineNumber,
                column: index - lineStart
            }
        };

        regex = extra.scanRegExp();
        loc.end = {
            line: lineNumber,
            column: index - lineStart
        };

        if (!extra.tokenize) {
            // Pop the previous token, which is likely '/' or '/='
            if (extra.tokens.length > 0) {
                token = extra.tokens[extra.tokens.length - 1];
                if (token.range[0] === pos && token.type === 'Punctuator') {
                    if (token.value === '/' || token.value === '/=') {
                        extra.tokens.pop();
                    }
                }
            }

            extra.tokens.push({
                type: 'RegularExpression',
                value: regex.literal,
                regex: regex.regex,
                range: [pos, index],
                loc: loc
            });
        }

        return regex;
    }

    function filterTokenLocation() {
        var i, entry, token, tokens = [];

        for (i = 0; i < extra.tokens.length; ++i) {
            entry = extra.tokens[i];
            token = {
                type: entry.type,
                value: entry.value
            };
            if (entry.regex) {
                token.regex = {
                    pattern: entry.regex.pattern,
                    flags: entry.regex.flags
                };
            }
            if (extra.range) {
                token.range = entry.range;
            }
            if (extra.loc) {
                token.loc = entry.loc;
            }
            tokens.push(token);
        }

        extra.tokens = tokens;
    }

    function patch() {
        if (extra.comments) {
            extra.skipComment = skipComment;
            skipComment = scanComment;
        }

        if (typeof extra.tokens !== 'undefined') {
            extra.advance = advance;
            extra.scanRegExp = scanRegExp;

            advance = collectToken;
            scanRegExp = collectRegex;
        }
    }

    function unpatch() {
        if (typeof extra.skipComment === 'function') {
            skipComment = extra.skipComment;
        }

        if (typeof extra.scanRegExp === 'function') {
            advance = extra.advance;
            scanRegExp = extra.scanRegExp;
        }
    }

    // This is used to modify the delegate.

    function extend(object, properties) {
        var entry, result = {};

        for (entry in object) {
            if (object.hasOwnProperty(entry)) {
                result[entry] = object[entry];
            }
        }

        for (entry in properties) {
            if (properties.hasOwnProperty(entry)) {
                result[entry] = properties[entry];
            }
        }

        return result;
    }

    function tokenize(code, options) {
        var toString,
            token,
            tokens;

        toString = String;
        if (typeof code !== 'string' && !(code instanceof String)) {
            code = toString(code);
        }

        delegate = SyntaxTreeDelegate;
        source = code;
        index = 0;
        lineNumber = (source.length > 0) ? 1 : 0;
        lineStart = 0;
        length = source.length;
        lookahead = null;
        state = {
            allowKeyword: true,
            allowIn: true,
            labelSet: {},
            inFunctionBody: false,
            inIteration: false,
            inSwitch: false,
            lastCommentStart: -1
        };

        extra = {};

        // Options matching.
        options = options || {};

        // Of course we collect tokens here.
        options.tokens = true;
        extra.tokens = [];
        extra.tokenize = true;
        // The following two fields are necessary to compute the Regex tokens.
        extra.openParenToken = -1;
        extra.openCurlyToken = -1;

        extra.range = (typeof options.range === 'boolean') && options.range;
        extra.loc = (typeof options.loc === 'boolean') && options.loc;

        if (typeof options.comment === 'boolean' && options.comment) {
            extra.comments = [];
        }
        if (typeof options.tolerant === 'boolean' && options.tolerant) {
            extra.errors = [];
        }

        if (length > 0) {
            if (typeof source[0] === 'undefined') {
                // Try first to convert to a string. This is good as fast path
                // for old IE which understands string indexing for string
                // literals only and not for string object.
                if (code instanceof String) {
                    source = code.valueOf();
                }
            }
        }

        patch();

        try {
            peek();
            if (lookahead.type === Token.EOF) {
                return extra.tokens;
            }

            token = lex();
            while (lookahead.type !== Token.EOF) {
                try {
                    token = lex();
                } catch (lexError) {
                    token = lookahead;
                    if (extra.errors) {
                        extra.errors.push(lexError);
                        // We have to break on the first error
                        // to avoid infinite loops.
                        break;
                    } else {
                        throw lexError;
                    }
                }
            }

            filterTokenLocation();
            tokens = extra.tokens;
            if (typeof extra.comments !== 'undefined') {
                tokens.comments = extra.comments;
            }
            if (typeof extra.errors !== 'undefined') {
                tokens.errors = extra.errors;
            }
        } catch (e) {
            throw e;
        } finally {
            unpatch();
            extra = {};
        }
        return tokens;
    }

    function parse(code, options) {
        var program, toString;

        toString = String;
        if (typeof code !== 'string' && !(code instanceof String)) {
            code = toString(code);
        }

        delegate = SyntaxTreeDelegate;
        source = code;
        index = 0;
        lineNumber = (source.length > 0) ? 1 : 0;
        lineStart = 0;
        length = source.length;
        lookahead = null;
        state = {
            allowKeyword: false,
            allowIn: true,
            labelSet: {},
            parenthesizedCount: 0,
            inFunctionBody: false,
            inIteration: false,
            inSwitch: false,
            inXJSChild: false,
            inXJSTag: false,
            inType: false,
            lastCommentStart: -1,
            yieldAllowed: false,
            awaitAllowed: false
        };

        extra = {};
        if (typeof options !== 'undefined') {
            extra.range = (typeof options.range === 'boolean') && options.range;
            extra.loc = (typeof options.loc === 'boolean') && options.loc;
            extra.attachComment = (typeof options.attachComment === 'boolean') && options.attachComment;

            if (extra.loc && options.source !== null && options.source !== undefined) {
                delegate = extend(delegate, {
                    'postProcess': function (node) {
                        node.loc.source = toString(options.source);
                        return node;
                    }
                });
            }

            if (typeof options.tokens === 'boolean' && options.tokens) {
                extra.tokens = [];
            }
            if (typeof options.comment === 'boolean' && options.comment) {
                extra.comments = [];
            }
            if (typeof options.tolerant === 'boolean' && options.tolerant) {
                extra.errors = [];
            }
            if (extra.attachComment) {
                extra.range = true;
                extra.comments = [];
                extra.bottomRightStack = [];
                extra.trailingComments = [];
                extra.leadingComments = [];
            }
        }

        if (length > 0) {
            if (typeof source[0] === 'undefined') {
                // Try first to convert to a string. This is good as fast path
                // for old IE which understands string indexing for string
                // literals only and not for string object.
                if (code instanceof String) {
                    source = code.valueOf();
                }
            }
        }

        patch();
        try {
            program = parseProgram();
            if (typeof extra.comments !== 'undefined') {
                program.comments = extra.comments;
            }
            if (typeof extra.tokens !== 'undefined') {
                filterTokenLocation();
                program.tokens = extra.tokens;
            }
            if (typeof extra.errors !== 'undefined') {
                program.errors = extra.errors;
            }
        } catch (e) {
            throw e;
        } finally {
            unpatch();
            extra = {};
        }

        return program;
    }

    // Sync with *.json manifests.
    exports.version = '8001.1001.0-dev-harmony-fb';

    exports.tokenize = tokenize;

    exports.parse = parse;

    // Deep copy.
    exports.Syntax = (function () {
        var name, types = {};

        if (typeof Object.create === 'function') {
            types = Object.create(null);
        }

        for (name in Syntax) {
            if (Syntax.hasOwnProperty(name)) {
                types[name] = Syntax[name];
            }
        }

        if (typeof Object.freeze === 'function') {
            Object.freeze(types);
        }

        return types;
    }());

}));
/* vim: set sw=4 ts=4 et tw=80 : */

},{}],10:[function(_dereq_,module,exports){
/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = _dereq_('./source-map/source-map-generator').SourceMapGenerator;
exports.SourceMapConsumer = _dereq_('./source-map/source-map-consumer').SourceMapConsumer;
exports.SourceNode = _dereq_('./source-map/source-node').SourceNode;

},{"./source-map/source-map-consumer":15,"./source-map/source-map-generator":16,"./source-map/source-node":17}],11:[function(_dereq_,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = _dereq_('amdefine')(module, _dereq_);
}
define(function (_dereq_, exports, module) {

  var util = _dereq_('./util');

  /**
   * A data structure which is a combination of an array and a set. Adding a new
   * member is O(1), testing for membership is O(1), and finding the index of an
   * element is O(1). Removing elements from the set is not supported. Only
   * strings are supported for membership.
   */
  function ArraySet() {
    this._array = [];
    this._set = {};
  }

  /**
   * Static method for creating ArraySet instances from an existing array.
   */
  ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
    var set = new ArraySet();
    for (var i = 0, len = aArray.length; i < len; i++) {
      set.add(aArray[i], aAllowDuplicates);
    }
    return set;
  };

  /**
   * Add the given string to this set.
   *
   * @param String aStr
   */
  ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
    var isDuplicate = this.has(aStr);
    var idx = this._array.length;
    if (!isDuplicate || aAllowDuplicates) {
      this._array.push(aStr);
    }
    if (!isDuplicate) {
      this._set[util.toSetString(aStr)] = idx;
    }
  };

  /**
   * Is the given string a member of this set?
   *
   * @param String aStr
   */
  ArraySet.prototype.has = function ArraySet_has(aStr) {
    return Object.prototype.hasOwnProperty.call(this._set,
                                                util.toSetString(aStr));
  };

  /**
   * What is the index of the given string in the array?
   *
   * @param String aStr
   */
  ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
    if (this.has(aStr)) {
      return this._set[util.toSetString(aStr)];
    }
    throw new Error('"' + aStr + '" is not in the set.');
  };

  /**
   * What is the element at the given index?
   *
   * @param Number aIdx
   */
  ArraySet.prototype.at = function ArraySet_at(aIdx) {
    if (aIdx >= 0 && aIdx < this._array.length) {
      return this._array[aIdx];
    }
    throw new Error('No element indexed by ' + aIdx);
  };

  /**
   * Returns the array representation of this set (which has the proper indices
   * indicated by indexOf). Note that this is a copy of the internal array used
   * for storing the members so that no one can mess with internal state.
   */
  ArraySet.prototype.toArray = function ArraySet_toArray() {
    return this._array.slice();
  };

  exports.ArraySet = ArraySet;

});

},{"./util":18,"amdefine":19}],12:[function(_dereq_,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
if (typeof define !== 'function') {
    var define = _dereq_('amdefine')(module, _dereq_);
}
define(function (_dereq_, exports, module) {

  var base64 = _dereq_('./base64');

  // A single base 64 digit can contain 6 bits of data. For the base 64 variable
  // length quantities we use in the source map spec, the first bit is the sign,
  // the next four bits are the actual value, and the 6th bit is the
  // continuation bit. The continuation bit tells us whether there are more
  // digits in this value following this digit.
  //
  //   Continuation
  //   |    Sign
  //   |    |
  //   V    V
  //   101011

  var VLQ_BASE_SHIFT = 5;

  // binary: 100000
  var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

  // binary: 011111
  var VLQ_BASE_MASK = VLQ_BASE - 1;

  // binary: 100000
  var VLQ_CONTINUATION_BIT = VLQ_BASE;

  /**
   * Converts from a two-complement value to a value where the sign bit is
   * is placed in the least significant bit.  For example, as decimals:
   *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
   *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
   */
  function toVLQSigned(aValue) {
    return aValue < 0
      ? ((-aValue) << 1) + 1
      : (aValue << 1) + 0;
  }

  /**
   * Converts to a two-complement value from a value where the sign bit is
   * is placed in the least significant bit.  For example, as decimals:
   *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
   *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
   */
  function fromVLQSigned(aValue) {
    var isNegative = (aValue & 1) === 1;
    var shifted = aValue >> 1;
    return isNegative
      ? -shifted
      : shifted;
  }

  /**
   * Returns the base 64 VLQ encoded value.
   */
  exports.encode = function base64VLQ_encode(aValue) {
    var encoded = "";
    var digit;

    var vlq = toVLQSigned(aValue);

    do {
      digit = vlq & VLQ_BASE_MASK;
      vlq >>>= VLQ_BASE_SHIFT;
      if (vlq > 0) {
        // There are still more digits in this value, so we must make sure the
        // continuation bit is marked.
        digit |= VLQ_CONTINUATION_BIT;
      }
      encoded += base64.encode(digit);
    } while (vlq > 0);

    return encoded;
  };

  /**
   * Decodes the next base 64 VLQ value from the given string and returns the
   * value and the rest of the string.
   */
  exports.decode = function base64VLQ_decode(aStr) {
    var i = 0;
    var strLen = aStr.length;
    var result = 0;
    var shift = 0;
    var continuation, digit;

    do {
      if (i >= strLen) {
        throw new Error("Expected more digits in base 64 VLQ value.");
      }
      digit = base64.decode(aStr.charAt(i++));
      continuation = !!(digit & VLQ_CONTINUATION_BIT);
      digit &= VLQ_BASE_MASK;
      result = result + (digit << shift);
      shift += VLQ_BASE_SHIFT;
    } while (continuation);

    return {
      value: fromVLQSigned(result),
      rest: aStr.slice(i)
    };
  };

});

},{"./base64":13,"amdefine":19}],13:[function(_dereq_,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = _dereq_('amdefine')(module, _dereq_);
}
define(function (_dereq_, exports, module) {

  var charToIntMap = {};
  var intToCharMap = {};

  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    .split('')
    .forEach(function (ch, index) {
      charToIntMap[ch] = index;
      intToCharMap[index] = ch;
    });

  /**
   * Encode an integer in the range of 0 to 63 to a single base 64 digit.
   */
  exports.encode = function base64_encode(aNumber) {
    if (aNumber in intToCharMap) {
      return intToCharMap[aNumber];
    }
    throw new TypeError("Must be between 0 and 63: " + aNumber);
  };

  /**
   * Decode a single base 64 digit to an integer.
   */
  exports.decode = function base64_decode(aChar) {
    if (aChar in charToIntMap) {
      return charToIntMap[aChar];
    }
    throw new TypeError("Not a valid base 64 digit: " + aChar);
  };

});

},{"amdefine":19}],14:[function(_dereq_,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = _dereq_('amdefine')(module, _dereq_);
}
define(function (_dereq_, exports, module) {

  /**
   * Recursive implementation of binary search.
   *
   * @param aLow Indices here and lower do not contain the needle.
   * @param aHigh Indices here and higher do not contain the needle.
   * @param aNeedle The element being searched for.
   * @param aHaystack The non-empty array being searched.
   * @param aCompare Function which takes two elements and returns -1, 0, or 1.
   */
  function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare) {
    // This function terminates when one of the following is true:
    //
    //   1. We find the exact element we are looking for.
    //
    //   2. We did not find the exact element, but we can return the next
    //      closest element that is less than that element.
    //
    //   3. We did not find the exact element, and there is no next-closest
    //      element which is less than the one we are searching for, so we
    //      return null.
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);
    if (cmp === 0) {
      // Found the element we are looking for.
      return aHaystack[mid];
    }
    else if (cmp > 0) {
      // aHaystack[mid] is greater than our needle.
      if (aHigh - mid > 1) {
        // The element is in the upper half.
        return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare);
      }
      // We did not find an exact match, return the next closest one
      // (termination case 2).
      return aHaystack[mid];
    }
    else {
      // aHaystack[mid] is less than our needle.
      if (mid - aLow > 1) {
        // The element is in the lower half.
        return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare);
      }
      // The exact needle element was not found in this haystack. Determine if
      // we are in termination case (2) or (3) and return the appropriate thing.
      return aLow < 0
        ? null
        : aHaystack[aLow];
    }
  }

  /**
   * This is an implementation of binary search which will always try and return
   * the next lowest value checked if there is no exact hit. This is because
   * mappings between original and generated line/col pairs are single points,
   * and there is an implicit region between each of them, so a miss just means
   * that you aren't on the very start of a region.
   *
   * @param aNeedle The element you are looking for.
   * @param aHaystack The array that is being searched.
   * @param aCompare A function which takes the needle and an element in the
   *     array and returns -1, 0, or 1 depending on whether the needle is less
   *     than, equal to, or greater than the element, respectively.
   */
  exports.search = function search(aNeedle, aHaystack, aCompare) {
    return aHaystack.length > 0
      ? recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare)
      : null;
  };

});

},{"amdefine":19}],15:[function(_dereq_,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = _dereq_('amdefine')(module, _dereq_);
}
define(function (_dereq_, exports, module) {

  var util = _dereq_('./util');
  var binarySearch = _dereq_('./binary-search');
  var ArraySet = _dereq_('./array-set').ArraySet;
  var base64VLQ = _dereq_('./base64-vlq');

  /**
   * A SourceMapConsumer instance represents a parsed source map which we can
   * query for information about the original file positions by giving it a file
   * position in the generated source.
   *
   * The only parameter is the raw source map (either as a JSON string, or
   * already parsed to an object). According to the spec, source maps have the
   * following attributes:
   *
   *   - version: Which version of the source map spec this map is following.
   *   - sources: An array of URLs to the original source files.
   *   - names: An array of identifiers which can be referrenced by individual mappings.
   *   - sourceRoot: Optional. The URL root from which all sources are relative.
   *   - sourcesContent: Optional. An array of contents of the original source files.
   *   - mappings: A string of base64 VLQs which contain the actual mappings.
   *   - file: The generated file this source map is associated with.
   *
   * Here is an example source map, taken from the source map spec[0]:
   *
   *     {
   *       version : 3,
   *       file: "out.js",
   *       sourceRoot : "",
   *       sources: ["foo.js", "bar.js"],
   *       names: ["src", "maps", "are", "fun"],
   *       mappings: "AA,AB;;ABCDE;"
   *     }
   *
   * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
   */
  function SourceMapConsumer(aSourceMap) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') {
      sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
    }

    var version = util.getArg(sourceMap, 'version');
    var sources = util.getArg(sourceMap, 'sources');
    // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
    // requires the array) to play nice here.
    var names = util.getArg(sourceMap, 'names', []);
    var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
    var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
    var mappings = util.getArg(sourceMap, 'mappings');
    var file = util.getArg(sourceMap, 'file', null);

    // Once again, Sass deviates from the spec and supplies the version as a
    // string rather than a number, so we use loose equality checking here.
    if (version != this._version) {
      throw new Error('Unsupported version: ' + version);
    }

    // Pass `true` below to allow duplicate names and sources. While source maps
    // are intended to be compressed and deduplicated, the TypeScript compiler
    // sometimes generates source maps with duplicates in them. See Github issue
    // #72 and bugzil.la/889492.
    this._names = ArraySet.fromArray(names, true);
    this._sources = ArraySet.fromArray(sources, true);

    this.sourceRoot = sourceRoot;
    this.sourcesContent = sourcesContent;
    this._mappings = mappings;
    this.file = file;
  }

  /**
   * Create a SourceMapConsumer from a SourceMapGenerator.
   *
   * @param SourceMapGenerator aSourceMap
   *        The source map that will be consumed.
   * @returns SourceMapConsumer
   */
  SourceMapConsumer.fromSourceMap =
    function SourceMapConsumer_fromSourceMap(aSourceMap) {
      var smc = Object.create(SourceMapConsumer.prototype);

      smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
      smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
      smc.sourceRoot = aSourceMap._sourceRoot;
      smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                              smc.sourceRoot);
      smc.file = aSourceMap._file;

      smc.__generatedMappings = aSourceMap._mappings.slice()
        .sort(util.compareByGeneratedPositions);
      smc.__originalMappings = aSourceMap._mappings.slice()
        .sort(util.compareByOriginalPositions);

      return smc;
    };

  /**
   * The version of the source mapping spec that we are consuming.
   */
  SourceMapConsumer.prototype._version = 3;

  /**
   * The list of original sources.
   */
  Object.defineProperty(SourceMapConsumer.prototype, 'sources', {
    get: function () {
      return this._sources.toArray().map(function (s) {
        return this.sourceRoot ? util.join(this.sourceRoot, s) : s;
      }, this);
    }
  });

  // `__generatedMappings` and `__originalMappings` are arrays that hold the
  // parsed mapping coordinates from the source map's "mappings" attribute. They
  // are lazily instantiated, accessed via the `_generatedMappings` and
  // `_originalMappings` getters respectively, and we only parse the mappings
  // and create these arrays once queried for a source location. We jump through
  // these hoops because there can be many thousands of mappings, and parsing
  // them is expensive, so we only want to do it if we must.
  //
  // Each object in the arrays is of the form:
  //
  //     {
  //       generatedLine: The line number in the generated code,
  //       generatedColumn: The column number in the generated code,
  //       source: The path to the original source file that generated this
  //               chunk of code,
  //       originalLine: The line number in the original source that
  //                     corresponds to this chunk of generated code,
  //       originalColumn: The column number in the original source that
  //                       corresponds to this chunk of generated code,
  //       name: The name of the original symbol which generated this chunk of
  //             code.
  //     }
  //
  // All properties except for `generatedLine` and `generatedColumn` can be
  // `null`.
  //
  // `_generatedMappings` is ordered by the generated positions.
  //
  // `_originalMappings` is ordered by the original positions.

  SourceMapConsumer.prototype.__generatedMappings = null;
  Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
    get: function () {
      if (!this.__generatedMappings) {
        this.__generatedMappings = [];
        this.__originalMappings = [];
        this._parseMappings(this._mappings, this.sourceRoot);
      }

      return this.__generatedMappings;
    }
  });

  SourceMapConsumer.prototype.__originalMappings = null;
  Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
    get: function () {
      if (!this.__originalMappings) {
        this.__generatedMappings = [];
        this.__originalMappings = [];
        this._parseMappings(this._mappings, this.sourceRoot);
      }

      return this.__originalMappings;
    }
  });

  /**
   * Parse the mappings in a string in to a data structure which we can easily
   * query (the ordered arrays in the `this.__generatedMappings` and
   * `this.__originalMappings` properties).
   */
  SourceMapConsumer.prototype._parseMappings =
    function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      var generatedLine = 1;
      var previousGeneratedColumn = 0;
      var previousOriginalLine = 0;
      var previousOriginalColumn = 0;
      var previousSource = 0;
      var previousName = 0;
      var mappingSeparator = /^[,;]/;
      var str = aStr;
      var mapping;
      var temp;

      while (str.length > 0) {
        if (str.charAt(0) === ';') {
          generatedLine++;
          str = str.slice(1);
          previousGeneratedColumn = 0;
        }
        else if (str.charAt(0) === ',') {
          str = str.slice(1);
        }
        else {
          mapping = {};
          mapping.generatedLine = generatedLine;

          // Generated column.
          temp = base64VLQ.decode(str);
          mapping.generatedColumn = previousGeneratedColumn + temp.value;
          previousGeneratedColumn = mapping.generatedColumn;
          str = temp.rest;

          if (str.length > 0 && !mappingSeparator.test(str.charAt(0))) {
            // Original source.
            temp = base64VLQ.decode(str);
            mapping.source = this._sources.at(previousSource + temp.value);
            previousSource += temp.value;
            str = temp.rest;
            if (str.length === 0 || mappingSeparator.test(str.charAt(0))) {
              throw new Error('Found a source, but no line and column');
            }

            // Original line.
            temp = base64VLQ.decode(str);
            mapping.originalLine = previousOriginalLine + temp.value;
            previousOriginalLine = mapping.originalLine;
            // Lines are stored 0-based
            mapping.originalLine += 1;
            str = temp.rest;
            if (str.length === 0 || mappingSeparator.test(str.charAt(0))) {
              throw new Error('Found a source and line, but no column');
            }

            // Original column.
            temp = base64VLQ.decode(str);
            mapping.originalColumn = previousOriginalColumn + temp.value;
            previousOriginalColumn = mapping.originalColumn;
            str = temp.rest;

            if (str.length > 0 && !mappingSeparator.test(str.charAt(0))) {
              // Original name.
              temp = base64VLQ.decode(str);
              mapping.name = this._names.at(previousName + temp.value);
              previousName += temp.value;
              str = temp.rest;
            }
          }

          this.__generatedMappings.push(mapping);
          if (typeof mapping.originalLine === 'number') {
            this.__originalMappings.push(mapping);
          }
        }
      }

      this.__originalMappings.sort(util.compareByOriginalPositions);
    };

  /**
   * Find the mapping that best matches the hypothetical "needle" mapping that
   * we are searching for in the given "haystack" of mappings.
   */
  SourceMapConsumer.prototype._findMapping =
    function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                           aColumnName, aComparator) {
      // To return the position we are searching for, we must first find the
      // mapping for the given position and then return the opposite position it
      // points to. Because the mappings are sorted, we can use binary search to
      // find the best mapping.

      if (aNeedle[aLineName] <= 0) {
        throw new TypeError('Line must be greater than or equal to 1, got '
                            + aNeedle[aLineName]);
      }
      if (aNeedle[aColumnName] < 0) {
        throw new TypeError('Column must be greater than or equal to 0, got '
                            + aNeedle[aColumnName]);
      }

      return binarySearch.search(aNeedle, aMappings, aComparator);
    };

  /**
   * Returns the original source, line, and column information for the generated
   * source's line and column positions provided. The only argument is an object
   * with the following properties:
   *
   *   - line: The line number in the generated source.
   *   - column: The column number in the generated source.
   *
   * and an object is returned with the following properties:
   *
   *   - source: The original source file, or null.
   *   - line: The line number in the original source, or null.
   *   - column: The column number in the original source, or null.
   *   - name: The original identifier, or null.
   */
  SourceMapConsumer.prototype.originalPositionFor =
    function SourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, 'line'),
        generatedColumn: util.getArg(aArgs, 'column')
      };

      var mapping = this._findMapping(needle,
                                      this._generatedMappings,
                                      "generatedLine",
                                      "generatedColumn",
                                      util.compareByGeneratedPositions);

      if (mapping) {
        var source = util.getArg(mapping, 'source', null);
        if (source && this.sourceRoot) {
          source = util.join(this.sourceRoot, source);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: util.getArg(mapping, 'name', null)
        };
      }

      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    };

  /**
   * Returns the original source content. The only argument is the url of the
   * original source file. Returns null if no original source content is
   * availible.
   */
  SourceMapConsumer.prototype.sourceContentFor =
    function SourceMapConsumer_sourceContentFor(aSource) {
      if (!this.sourcesContent) {
        return null;
      }

      if (this.sourceRoot) {
        aSource = util.relative(this.sourceRoot, aSource);
      }

      if (this._sources.has(aSource)) {
        return this.sourcesContent[this._sources.indexOf(aSource)];
      }

      var url;
      if (this.sourceRoot
          && (url = util.urlParse(this.sourceRoot))) {
        // XXX: file:// URIs and absolute paths lead to unexpected behavior for
        // many users. We can help them out when they expect file:// URIs to
        // behave like it would if they were running a local HTTP server. See
        // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
        var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
        if (url.scheme == "file"
            && this._sources.has(fileUriAbsPath)) {
          return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
        }

        if ((!url.path || url.path == "/")
            && this._sources.has("/" + aSource)) {
          return this.sourcesContent[this._sources.indexOf("/" + aSource)];
        }
      }

      throw new Error('"' + aSource + '" is not in the SourceMap.');
    };

  /**
   * Returns the generated line and column information for the original source,
   * line, and column positions provided. The only argument is an object with
   * the following properties:
   *
   *   - source: The filename of the original source.
   *   - line: The line number in the original source.
   *   - column: The column number in the original source.
   *
   * and an object is returned with the following properties:
   *
   *   - line: The line number in the generated source, or null.
   *   - column: The column number in the generated source, or null.
   */
  SourceMapConsumer.prototype.generatedPositionFor =
    function SourceMapConsumer_generatedPositionFor(aArgs) {
      var needle = {
        source: util.getArg(aArgs, 'source'),
        originalLine: util.getArg(aArgs, 'line'),
        originalColumn: util.getArg(aArgs, 'column')
      };

      if (this.sourceRoot) {
        needle.source = util.relative(this.sourceRoot, needle.source);
      }

      var mapping = this._findMapping(needle,
                                      this._originalMappings,
                                      "originalLine",
                                      "originalColumn",
                                      util.compareByOriginalPositions);

      if (mapping) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null)
        };
      }

      return {
        line: null,
        column: null
      };
    };

  SourceMapConsumer.GENERATED_ORDER = 1;
  SourceMapConsumer.ORIGINAL_ORDER = 2;

  /**
   * Iterate over each mapping between an original source/line/column and a
   * generated line/column in this source map.
   *
   * @param Function aCallback
   *        The function that is called with each mapping.
   * @param Object aContext
   *        Optional. If specified, this object will be the value of `this` every
   *        time that `aCallback` is called.
   * @param aOrder
   *        Either `SourceMapConsumer.GENERATED_ORDER` or
   *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
   *        iterate over the mappings sorted by the generated file's line/column
   *        order or the original's source/line/column order, respectively. Defaults to
   *        `SourceMapConsumer.GENERATED_ORDER`.
   */
  SourceMapConsumer.prototype.eachMapping =
    function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
      var context = aContext || null;
      var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

      var mappings;
      switch (order) {
      case SourceMapConsumer.GENERATED_ORDER:
        mappings = this._generatedMappings;
        break;
      case SourceMapConsumer.ORIGINAL_ORDER:
        mappings = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
      }

      var sourceRoot = this.sourceRoot;
      mappings.map(function (mapping) {
        var source = mapping.source;
        if (source && sourceRoot) {
          source = util.join(sourceRoot, source);
        }
        return {
          source: source,
          generatedLine: mapping.generatedLine,
          generatedColumn: mapping.generatedColumn,
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: mapping.name
        };
      }).forEach(aCallback, context);
    };

  exports.SourceMapConsumer = SourceMapConsumer;

});

},{"./array-set":11,"./base64-vlq":12,"./binary-search":14,"./util":18,"amdefine":19}],16:[function(_dereq_,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = _dereq_('amdefine')(module, _dereq_);
}
define(function (_dereq_, exports, module) {

  var base64VLQ = _dereq_('./base64-vlq');
  var util = _dereq_('./util');
  var ArraySet = _dereq_('./array-set').ArraySet;

  /**
   * An instance of the SourceMapGenerator represents a source map which is
   * being built incrementally. To create a new one, you must pass an object
   * with the following properties:
   *
   *   - file: The filename of the generated source.
   *   - sourceRoot: An optional root for all URLs in this source map.
   */
  function SourceMapGenerator(aArgs) {
    this._file = util.getArg(aArgs, 'file');
    this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    this._mappings = [];
    this._sourcesContents = null;
  }

  SourceMapGenerator.prototype._version = 3;

  /**
   * Creates a new SourceMapGenerator based on a SourceMapConsumer
   *
   * @param aSourceMapConsumer The SourceMap.
   */
  SourceMapGenerator.fromSourceMap =
    function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
      var sourceRoot = aSourceMapConsumer.sourceRoot;
      var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot: sourceRoot
      });
      aSourceMapConsumer.eachMapping(function (mapping) {
        var newMapping = {
          generated: {
            line: mapping.generatedLine,
            column: mapping.generatedColumn
          }
        };

        if (mapping.source) {
          newMapping.source = mapping.source;
          if (sourceRoot) {
            newMapping.source = util.relative(sourceRoot, newMapping.source);
          }

          newMapping.original = {
            line: mapping.originalLine,
            column: mapping.originalColumn
          };

          if (mapping.name) {
            newMapping.name = mapping.name;
          }
        }

        generator.addMapping(newMapping);
      });
      aSourceMapConsumer.sources.forEach(function (sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content) {
          generator.setSourceContent(sourceFile, content);
        }
      });
      return generator;
    };

  /**
   * Add a single mapping from original source line and column to the generated
   * source's line and column for this source map being created. The mapping
   * object should have the following properties:
   *
   *   - generated: An object with the generated line and column positions.
   *   - original: An object with the original line and column positions.
   *   - source: The original source file (relative to the sourceRoot).
   *   - name: An optional original token name for this mapping.
   */
  SourceMapGenerator.prototype.addMapping =
    function SourceMapGenerator_addMapping(aArgs) {
      var generated = util.getArg(aArgs, 'generated');
      var original = util.getArg(aArgs, 'original', null);
      var source = util.getArg(aArgs, 'source', null);
      var name = util.getArg(aArgs, 'name', null);

      this._validateMapping(generated, original, source, name);

      if (source && !this._sources.has(source)) {
        this._sources.add(source);
      }

      if (name && !this._names.has(name)) {
        this._names.add(name);
      }

      this._mappings.push({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source: source,
        name: name
      });
    };

  /**
   * Set the source content for a source file.
   */
  SourceMapGenerator.prototype.setSourceContent =
    function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
      var source = aSourceFile;
      if (this._sourceRoot) {
        source = util.relative(this._sourceRoot, source);
      }

      if (aSourceContent !== null) {
        // Add the source content to the _sourcesContents map.
        // Create a new _sourcesContents map if the property is null.
        if (!this._sourcesContents) {
          this._sourcesContents = {};
        }
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
      } else {
        // Remove the source file from the _sourcesContents map.
        // If the _sourcesContents map is empty, set the property to null.
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) {
          this._sourcesContents = null;
        }
      }
    };

  /**
   * Applies the mappings of a sub-source-map for a specific source file to the
   * source map being generated. Each mapping to the supplied source file is
   * rewritten using the supplied source map. Note: The resolution for the
   * resulting mappings is the minimium of this map and the supplied map.
   *
   * @param aSourceMapConsumer The source map to be applied.
   * @param aSourceFile Optional. The filename of the source file.
   *        If omitted, SourceMapConsumer's file property will be used.
   */
  SourceMapGenerator.prototype.applySourceMap =
    function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile) {
      // If aSourceFile is omitted, we will use the file property of the SourceMap
      if (!aSourceFile) {
        aSourceFile = aSourceMapConsumer.file;
      }
      var sourceRoot = this._sourceRoot;
      // Make "aSourceFile" relative if an absolute Url is passed.
      if (sourceRoot) {
        aSourceFile = util.relative(sourceRoot, aSourceFile);
      }
      // Applying the SourceMap can add and remove items from the sources and
      // the names array.
      var newSources = new ArraySet();
      var newNames = new ArraySet();

      // Find mappings for the "aSourceFile"
      this._mappings.forEach(function (mapping) {
        if (mapping.source === aSourceFile && mapping.originalLine) {
          // Check if it can be mapped by the source map, then update the mapping.
          var original = aSourceMapConsumer.originalPositionFor({
            line: mapping.originalLine,
            column: mapping.originalColumn
          });
          if (original.source !== null) {
            // Copy mapping
            if (sourceRoot) {
              mapping.source = util.relative(sourceRoot, original.source);
            } else {
              mapping.source = original.source;
            }
            mapping.originalLine = original.line;
            mapping.originalColumn = original.column;
            if (original.name !== null && mapping.name !== null) {
              // Only use the identifier name if it's an identifier
              // in both SourceMaps
              mapping.name = original.name;
            }
          }
        }

        var source = mapping.source;
        if (source && !newSources.has(source)) {
          newSources.add(source);
        }

        var name = mapping.name;
        if (name && !newNames.has(name)) {
          newNames.add(name);
        }

      }, this);
      this._sources = newSources;
      this._names = newNames;

      // Copy sourcesContents of applied map.
      aSourceMapConsumer.sources.forEach(function (sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content) {
          if (sourceRoot) {
            sourceFile = util.relative(sourceRoot, sourceFile);
          }
          this.setSourceContent(sourceFile, content);
        }
      }, this);
    };

  /**
   * A mapping can have one of the three levels of data:
   *
   *   1. Just the generated position.
   *   2. The Generated position, original position, and original source.
   *   3. Generated and original position, original source, as well as a name
   *      token.
   *
   * To maintain consistency, we validate that any new mapping being added falls
   * in to one of these categories.
   */
  SourceMapGenerator.prototype._validateMapping =
    function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                                aName) {
      if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
          && aGenerated.line > 0 && aGenerated.column >= 0
          && !aOriginal && !aSource && !aName) {
        // Case 1.
        return;
      }
      else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
               && aOriginal && 'line' in aOriginal && 'column' in aOriginal
               && aGenerated.line > 0 && aGenerated.column >= 0
               && aOriginal.line > 0 && aOriginal.column >= 0
               && aSource) {
        // Cases 2 and 3.
        return;
      }
      else {
        throw new Error('Invalid mapping: ' + JSON.stringify({
          generated: aGenerated,
          source: aSource,
          orginal: aOriginal,
          name: aName
        }));
      }
    };

  /**
   * Serialize the accumulated mappings in to the stream of base 64 VLQs
   * specified by the source map format.
   */
  SourceMapGenerator.prototype._serializeMappings =
    function SourceMapGenerator_serializeMappings() {
      var previousGeneratedColumn = 0;
      var previousGeneratedLine = 1;
      var previousOriginalColumn = 0;
      var previousOriginalLine = 0;
      var previousName = 0;
      var previousSource = 0;
      var result = '';
      var mapping;

      // The mappings must be guaranteed to be in sorted order before we start
      // serializing them or else the generated line numbers (which are defined
      // via the ';' separators) will be all messed up. Note: it might be more
      // performant to maintain the sorting as we insert them, rather than as we
      // serialize them, but the big O is the same either way.
      this._mappings.sort(util.compareByGeneratedPositions);

      for (var i = 0, len = this._mappings.length; i < len; i++) {
        mapping = this._mappings[i];

        if (mapping.generatedLine !== previousGeneratedLine) {
          previousGeneratedColumn = 0;
          while (mapping.generatedLine !== previousGeneratedLine) {
            result += ';';
            previousGeneratedLine++;
          }
        }
        else {
          if (i > 0) {
            if (!util.compareByGeneratedPositions(mapping, this._mappings[i - 1])) {
              continue;
            }
            result += ',';
          }
        }

        result += base64VLQ.encode(mapping.generatedColumn
                                   - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;

        if (mapping.source) {
          result += base64VLQ.encode(this._sources.indexOf(mapping.source)
                                     - previousSource);
          previousSource = this._sources.indexOf(mapping.source);

          // lines are stored 0-based in SourceMap spec version 3
          result += base64VLQ.encode(mapping.originalLine - 1
                                     - previousOriginalLine);
          previousOriginalLine = mapping.originalLine - 1;

          result += base64VLQ.encode(mapping.originalColumn
                                     - previousOriginalColumn);
          previousOriginalColumn = mapping.originalColumn;

          if (mapping.name) {
            result += base64VLQ.encode(this._names.indexOf(mapping.name)
                                       - previousName);
            previousName = this._names.indexOf(mapping.name);
          }
        }
      }

      return result;
    };

  SourceMapGenerator.prototype._generateSourcesContent =
    function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
      return aSources.map(function (source) {
        if (!this._sourcesContents) {
          return null;
        }
        if (aSourceRoot) {
          source = util.relative(aSourceRoot, source);
        }
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents,
                                                    key)
          ? this._sourcesContents[key]
          : null;
      }, this);
    };

  /**
   * Externalize the source map.
   */
  SourceMapGenerator.prototype.toJSON =
    function SourceMapGenerator_toJSON() {
      var map = {
        version: this._version,
        file: this._file,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
      };
      if (this._sourceRoot) {
        map.sourceRoot = this._sourceRoot;
      }
      if (this._sourcesContents) {
        map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
      }

      return map;
    };

  /**
   * Render the source map being generated to a string.
   */
  SourceMapGenerator.prototype.toString =
    function SourceMapGenerator_toString() {
      return JSON.stringify(this);
    };

  exports.SourceMapGenerator = SourceMapGenerator;

});

},{"./array-set":11,"./base64-vlq":12,"./util":18,"amdefine":19}],17:[function(_dereq_,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = _dereq_('amdefine')(module, _dereq_);
}
define(function (_dereq_, exports, module) {

  var SourceMapGenerator = _dereq_('./source-map-generator').SourceMapGenerator;
  var util = _dereq_('./util');

  /**
   * SourceNodes provide a way to abstract over interpolating/concatenating
   * snippets of generated JavaScript source code while maintaining the line and
   * column information associated with the original source code.
   *
   * @param aLine The original line number.
   * @param aColumn The original column number.
   * @param aSource The original source's filename.
   * @param aChunks Optional. An array of strings which are snippets of
   *        generated JS, or other SourceNodes.
   * @param aName The original identifier.
   */
  function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
    this.children = [];
    this.sourceContents = {};
    this.line = aLine === undefined ? null : aLine;
    this.column = aColumn === undefined ? null : aColumn;
    this.source = aSource === undefined ? null : aSource;
    this.name = aName === undefined ? null : aName;
    if (aChunks != null) this.add(aChunks);
  }

  /**
   * Creates a SourceNode from generated code and a SourceMapConsumer.
   *
   * @param aGeneratedCode The generated code
   * @param aSourceMapConsumer The SourceMap for the generated code
   */
  SourceNode.fromStringWithSourceMap =
    function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer) {
      // The SourceNode we want to fill with the generated code
      // and the SourceMap
      var node = new SourceNode();

      // The generated code
      // Processed fragments are removed from this array.
      var remainingLines = aGeneratedCode.split('\n');

      // We need to remember the position of "remainingLines"
      var lastGeneratedLine = 1, lastGeneratedColumn = 0;

      // The generate SourceNodes we need a code range.
      // To extract it current and last mapping is used.
      // Here we store the last mapping.
      var lastMapping = null;

      aSourceMapConsumer.eachMapping(function (mapping) {
        if (lastMapping === null) {
          // We add the generated code until the first mapping
          // to the SourceNode without any mapping.
          // Each line is added as separate string.
          while (lastGeneratedLine < mapping.generatedLine) {
            node.add(remainingLines.shift() + "\n");
            lastGeneratedLine++;
          }
          if (lastGeneratedColumn < mapping.generatedColumn) {
            var nextLine = remainingLines[0];
            node.add(nextLine.substr(0, mapping.generatedColumn));
            remainingLines[0] = nextLine.substr(mapping.generatedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
          }
        } else {
          // We add the code from "lastMapping" to "mapping":
          // First check if there is a new line in between.
          if (lastGeneratedLine < mapping.generatedLine) {
            var code = "";
            // Associate full lines with "lastMapping"
            do {
              code += remainingLines.shift() + "\n";
              lastGeneratedLine++;
              lastGeneratedColumn = 0;
            } while (lastGeneratedLine < mapping.generatedLine);
            // When we reached the correct line, we add code until we
            // reach the correct column too.
            if (lastGeneratedColumn < mapping.generatedColumn) {
              var nextLine = remainingLines[0];
              code += nextLine.substr(0, mapping.generatedColumn);
              remainingLines[0] = nextLine.substr(mapping.generatedColumn);
              lastGeneratedColumn = mapping.generatedColumn;
            }
            // Create the SourceNode.
            addMappingWithCode(lastMapping, code);
          } else {
            // There is no new line in between.
            // Associate the code between "lastGeneratedColumn" and
            // "mapping.generatedColumn" with "lastMapping"
            var nextLine = remainingLines[0];
            var code = nextLine.substr(0, mapping.generatedColumn -
                                          lastGeneratedColumn);
            remainingLines[0] = nextLine.substr(mapping.generatedColumn -
                                                lastGeneratedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
            addMappingWithCode(lastMapping, code);
          }
        }
        lastMapping = mapping;
      }, this);
      // We have processed all mappings.
      // Associate the remaining code in the current line with "lastMapping"
      // and add the remaining lines without any mapping
      addMappingWithCode(lastMapping, remainingLines.join("\n"));

      // Copy sourcesContent into SourceNode
      aSourceMapConsumer.sources.forEach(function (sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content) {
          node.setSourceContent(sourceFile, content);
        }
      });

      return node;

      function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === undefined) {
          node.add(code);
        } else {
          node.add(new SourceNode(mapping.originalLine,
                                  mapping.originalColumn,
                                  mapping.source,
                                  code,
                                  mapping.name));
        }
      }
    };

  /**
   * Add a chunk of generated JS to this source node.
   *
   * @param aChunk A string snippet of generated JS code, another instance of
   *        SourceNode, or an array where each member is one of those things.
   */
  SourceNode.prototype.add = function SourceNode_add(aChunk) {
    if (Array.isArray(aChunk)) {
      aChunk.forEach(function (chunk) {
        this.add(chunk);
      }, this);
    }
    else if (aChunk instanceof SourceNode || typeof aChunk === "string") {
      if (aChunk) {
        this.children.push(aChunk);
      }
    }
    else {
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
      );
    }
    return this;
  };

  /**
   * Add a chunk of generated JS to the beginning of this source node.
   *
   * @param aChunk A string snippet of generated JS code, another instance of
   *        SourceNode, or an array where each member is one of those things.
   */
  SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
    if (Array.isArray(aChunk)) {
      for (var i = aChunk.length-1; i >= 0; i--) {
        this.prepend(aChunk[i]);
      }
    }
    else if (aChunk instanceof SourceNode || typeof aChunk === "string") {
      this.children.unshift(aChunk);
    }
    else {
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
      );
    }
    return this;
  };

  /**
   * Walk over the tree of JS snippets in this node and its children. The
   * walking function is called once for each snippet of JS and is passed that
   * snippet and the its original associated source's line/column location.
   *
   * @param aFn The traversal function.
   */
  SourceNode.prototype.walk = function SourceNode_walk(aFn) {
    var chunk;
    for (var i = 0, len = this.children.length; i < len; i++) {
      chunk = this.children[i];
      if (chunk instanceof SourceNode) {
        chunk.walk(aFn);
      }
      else {
        if (chunk !== '') {
          aFn(chunk, { source: this.source,
                       line: this.line,
                       column: this.column,
                       name: this.name });
        }
      }
    }
  };

  /**
   * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
   * each of `this.children`.
   *
   * @param aSep The separator.
   */
  SourceNode.prototype.join = function SourceNode_join(aSep) {
    var newChildren;
    var i;
    var len = this.children.length;
    if (len > 0) {
      newChildren = [];
      for (i = 0; i < len-1; i++) {
        newChildren.push(this.children[i]);
        newChildren.push(aSep);
      }
      newChildren.push(this.children[i]);
      this.children = newChildren;
    }
    return this;
  };

  /**
   * Call String.prototype.replace on the very right-most source snippet. Useful
   * for trimming whitespace from the end of a source node, etc.
   *
   * @param aPattern The pattern to replace.
   * @param aReplacement The thing to replace the pattern with.
   */
  SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
    var lastChild = this.children[this.children.length - 1];
    if (lastChild instanceof SourceNode) {
      lastChild.replaceRight(aPattern, aReplacement);
    }
    else if (typeof lastChild === 'string') {
      this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
    }
    else {
      this.children.push(''.replace(aPattern, aReplacement));
    }
    return this;
  };

  /**
   * Set the source content for a source file. This will be added to the SourceMapGenerator
   * in the sourcesContent field.
   *
   * @param aSourceFile The filename of the source file
   * @param aSourceContent The content of the source file
   */
  SourceNode.prototype.setSourceContent =
    function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
      this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
    };

  /**
   * Walk over the tree of SourceNodes. The walking function is called for each
   * source file content and is passed the filename and source content.
   *
   * @param aFn The traversal function.
   */
  SourceNode.prototype.walkSourceContents =
    function SourceNode_walkSourceContents(aFn) {
      for (var i = 0, len = this.children.length; i < len; i++) {
        if (this.children[i] instanceof SourceNode) {
          this.children[i].walkSourceContents(aFn);
        }
      }

      var sources = Object.keys(this.sourceContents);
      for (var i = 0, len = sources.length; i < len; i++) {
        aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
      }
    };

  /**
   * Return the string representation of this source node. Walks over the tree
   * and concatenates all the various snippets together to one string.
   */
  SourceNode.prototype.toString = function SourceNode_toString() {
    var str = "";
    this.walk(function (chunk) {
      str += chunk;
    });
    return str;
  };

  /**
   * Returns the string representation of this source node along with a source
   * map.
   */
  SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
    var generated = {
      code: "",
      line: 1,
      column: 0
    };
    var map = new SourceMapGenerator(aArgs);
    var sourceMappingActive = false;
    var lastOriginalSource = null;
    var lastOriginalLine = null;
    var lastOriginalColumn = null;
    var lastOriginalName = null;
    this.walk(function (chunk, original) {
      generated.code += chunk;
      if (original.source !== null
          && original.line !== null
          && original.column !== null) {
        if(lastOriginalSource !== original.source
           || lastOriginalLine !== original.line
           || lastOriginalColumn !== original.column
           || lastOriginalName !== original.name) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
        lastOriginalSource = original.source;
        lastOriginalLine = original.line;
        lastOriginalColumn = original.column;
        lastOriginalName = original.name;
        sourceMappingActive = true;
      } else if (sourceMappingActive) {
        map.addMapping({
          generated: {
            line: generated.line,
            column: generated.column
          }
        });
        lastOriginalSource = null;
        sourceMappingActive = false;
      }
      chunk.split('').forEach(function (ch) {
        if (ch === '\n') {
          generated.line++;
          generated.column = 0;
        } else {
          generated.column++;
        }
      });
    });
    this.walkSourceContents(function (sourceFile, sourceContent) {
      map.setSourceContent(sourceFile, sourceContent);
    });

    return { code: generated.code, map: map };
  };

  exports.SourceNode = SourceNode;

});

},{"./source-map-generator":16,"./util":18,"amdefine":19}],18:[function(_dereq_,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = _dereq_('amdefine')(module, _dereq_);
}
define(function (_dereq_, exports, module) {

  /**
   * This is a helper function for getting values from parameter/options
   * objects.
   *
   * @param args The object we are extracting values from
   * @param name The name of the property we are getting.
   * @param defaultValue An optional value to return if the property is missing
   * from the object. If this is not specified and the property is missing, an
   * error will be thrown.
   */
  function getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) {
      return aArgs[aName];
    } else if (arguments.length === 3) {
      return aDefaultValue;
    } else {
      throw new Error('"' + aName + '" is a required argument.');
    }
  }
  exports.getArg = getArg;

  var urlRegexp = /([\w+\-.]+):\/\/((\w+:\w+)@)?([\w.]+)?(:(\d+))?(\S+)?/;
  var dataUrlRegexp = /^data:.+\,.+/;

  function urlParse(aUrl) {
    var match = aUrl.match(urlRegexp);
    if (!match) {
      return null;
    }
    return {
      scheme: match[1],
      auth: match[3],
      host: match[4],
      port: match[6],
      path: match[7]
    };
  }
  exports.urlParse = urlParse;

  function urlGenerate(aParsedUrl) {
    var url = aParsedUrl.scheme + "://";
    if (aParsedUrl.auth) {
      url += aParsedUrl.auth + "@"
    }
    if (aParsedUrl.host) {
      url += aParsedUrl.host;
    }
    if (aParsedUrl.port) {
      url += ":" + aParsedUrl.port
    }
    if (aParsedUrl.path) {
      url += aParsedUrl.path;
    }
    return url;
  }
  exports.urlGenerate = urlGenerate;

  function join(aRoot, aPath) {
    var url;

    if (aPath.match(urlRegexp) || aPath.match(dataUrlRegexp)) {
      return aPath;
    }

    if (aPath.charAt(0) === '/' && (url = urlParse(aRoot))) {
      url.path = aPath;
      return urlGenerate(url);
    }

    return aRoot.replace(/\/$/, '') + '/' + aPath;
  }
  exports.join = join;

  /**
   * Because behavior goes wacky when you set `__proto__` on objects, we
   * have to prefix all the strings in our set with an arbitrary character.
   *
   * See https://github.com/mozilla/source-map/pull/31 and
   * https://github.com/mozilla/source-map/issues/30
   *
   * @param String aStr
   */
  function toSetString(aStr) {
    return '$' + aStr;
  }
  exports.toSetString = toSetString;

  function fromSetString(aStr) {
    return aStr.substr(1);
  }
  exports.fromSetString = fromSetString;

  function relative(aRoot, aPath) {
    aRoot = aRoot.replace(/\/$/, '');

    var url = urlParse(aRoot);
    if (aPath.charAt(0) == "/" && url && url.path == "/") {
      return aPath.slice(1);
    }

    return aPath.indexOf(aRoot + '/') === 0
      ? aPath.substr(aRoot.length + 1)
      : aPath;
  }
  exports.relative = relative;

  function strcmp(aStr1, aStr2) {
    var s1 = aStr1 || "";
    var s2 = aStr2 || "";
    return (s1 > s2) - (s1 < s2);
  }

  /**
   * Comparator between two mappings where the original positions are compared.
   *
   * Optionally pass in `true` as `onlyCompareGenerated` to consider two
   * mappings with the same original source/line/column, but different generated
   * line and column the same. Useful when searching for a mapping with a
   * stubbed out mapping.
   */
  function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp;

    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp) {
      return cmp;
    }

    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp) {
      return cmp;
    }

    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp || onlyCompareOriginal) {
      return cmp;
    }

    cmp = strcmp(mappingA.name, mappingB.name);
    if (cmp) {
      return cmp;
    }

    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp) {
      return cmp;
    }

    return mappingA.generatedColumn - mappingB.generatedColumn;
  };
  exports.compareByOriginalPositions = compareByOriginalPositions;

  /**
   * Comparator between two mappings where the generated positions are
   * compared.
   *
   * Optionally pass in `true` as `onlyCompareGenerated` to consider two
   * mappings with the same generated line and column, but different
   * source/name/original line and column the same. Useful when searching for a
   * mapping with a stubbed out mapping.
   */
  function compareByGeneratedPositions(mappingA, mappingB, onlyCompareGenerated) {
    var cmp;

    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp) {
      return cmp;
    }

    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp || onlyCompareGenerated) {
      return cmp;
    }

    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp) {
      return cmp;
    }

    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp) {
      return cmp;
    }

    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp) {
      return cmp;
    }

    return strcmp(mappingA.name, mappingB.name);
  };
  exports.compareByGeneratedPositions = compareByGeneratedPositions;

});

},{"amdefine":19}],19:[function(_dereq_,module,exports){
(function (process,__filename){
/** vim: et:ts=4:sw=4:sts=4
 * @license amdefine 0.1.0 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/amdefine for details
 */

/*jslint node: true */
/*global module, process */
'use strict';

/**
 * Creates a define for node.
 * @param {Object} module the "module" object that is defined by Node for the
 * current module.
 * @param {Function} [requireFn]. Node's require function for the current module.
 * It only needs to be passed in Node versions before 0.5, when module.require
 * did not exist.
 * @returns {Function} a define function that is usable for the current node
 * module.
 */
function amdefine(module, requireFn) {
    'use strict';
    var defineCache = {},
        loaderCache = {},
        alreadyCalled = false,
        path = _dereq_('path'),
        makeRequire, stringRequire;

    /**
     * Trims the . and .. from an array of path segments.
     * It will keep a leading path segment if a .. will become
     * the first path segment, to help with module name lookups,
     * which act like paths, but can be remapped. But the end result,
     * all paths that use this function should look normalized.
     * NOTE: this method MODIFIES the input array.
     * @param {Array} ary the array of path segments.
     */
    function trimDots(ary) {
        var i, part;
        for (i = 0; ary[i]; i+= 1) {
            part = ary[i];
            if (part === '.') {
                ary.splice(i, 1);
                i -= 1;
            } else if (part === '..') {
                if (i === 1 && (ary[2] === '..' || ary[0] === '..')) {
                    //End of the line. Keep at least one non-dot
                    //path segment at the front so it can be mapped
                    //correctly to disk. Otherwise, there is likely
                    //no path mapping for a path starting with '..'.
                    //This can still fail, but catches the most reasonable
                    //uses of ..
                    break;
                } else if (i > 0) {
                    ary.splice(i - 1, 2);
                    i -= 2;
                }
            }
        }
    }

    function normalize(name, baseName) {
        var baseParts;

        //Adjust any relative paths.
        if (name && name.charAt(0) === '.') {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                baseParts = baseName.split('/');
                baseParts = baseParts.slice(0, baseParts.length - 1);
                baseParts = baseParts.concat(name.split('/'));
                trimDots(baseParts);
                name = baseParts.join('/');
            }
        }

        return name;
    }

    /**
     * Create the normalize() function passed to a loader plugin's
     * normalize method.
     */
    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(id) {
        function load(value) {
            loaderCache[id] = value;
        }

        load.fromText = function (id, text) {
            //This one is difficult because the text can/probably uses
            //define, and any relative paths and requires should be relative
            //to that id was it would be found on disk. But this would require
            //bootstrapping a module/require fairly deeply from node core.
            //Not sure how best to go about that yet.
            throw new Error('amdefine does not implement load.fromText');
        };

        return load;
    }

    makeRequire = function (systemRequire, exports, module, relId) {
        function amdRequire(deps, callback) {
            if (typeof deps === 'string') {
                //Synchronous, single module require('')
                return stringRequire(systemRequire, exports, module, deps, relId);
            } else {
                //Array of dependencies with a callback.

                //Convert the dependencies to modules.
                deps = deps.map(function (depName) {
                    return stringRequire(systemRequire, exports, module, depName, relId);
                });

                //Wait for next tick to call back the require call.
                process.nextTick(function () {
                    callback.apply(null, deps);
                });
            }
        }

        amdRequire.toUrl = function (filePath) {
            if (filePath.indexOf('.') === 0) {
                return normalize(filePath, path.dirname(module.filename));
            } else {
                return filePath;
            }
        };

        return amdRequire;
    };

    //Favor explicit value, passed in if the module wants to support Node 0.4.
    requireFn = requireFn || function req() {
        return module.require.apply(module, arguments);
    };

    function runFactory(id, deps, factory) {
        var r, e, m, result;

        if (id) {
            e = loaderCache[id] = {};
            m = {
                id: id,
                uri: __filename,
                exports: e
            };
            r = makeRequire(requireFn, e, m, id);
        } else {
            //Only support one define call per file
            if (alreadyCalled) {
                throw new Error('amdefine with no module ID cannot be called more than once per file.');
            }
            alreadyCalled = true;

            //Use the real variables from node
            //Use module.exports for exports, since
            //the exports in here is amdefine exports.
            e = module.exports;
            m = module;
            r = makeRequire(requireFn, e, m, module.id);
        }

        //If there are dependencies, they are strings, so need
        //to convert them to dependency values.
        if (deps) {
            deps = deps.map(function (depName) {
                return r(depName);
            });
        }

        //Call the factory with the right dependencies.
        if (typeof factory === 'function') {
            result = factory.apply(m.exports, deps);
        } else {
            result = factory;
        }

        if (result !== undefined) {
            m.exports = result;
            if (id) {
                loaderCache[id] = m.exports;
            }
        }
    }

    stringRequire = function (systemRequire, exports, module, id, relId) {
        //Split the ID by a ! so that
        var index = id.indexOf('!'),
            originalId = id,
            prefix, plugin;

        if (index === -1) {
            id = normalize(id, relId);

            //Straight module lookup. If it is one of the special dependencies,
            //deal with it, otherwise, delegate to node.
            if (id === 'require') {
                return makeRequire(systemRequire, exports, module, relId);
            } else if (id === 'exports') {
                return exports;
            } else if (id === 'module') {
                return module;
            } else if (loaderCache.hasOwnProperty(id)) {
                return loaderCache[id];
            } else if (defineCache[id]) {
                runFactory.apply(null, defineCache[id]);
                return loaderCache[id];
            } else {
                if(systemRequire) {
                    return systemRequire(originalId);
                } else {
                    throw new Error('No module with ID: ' + id);
                }
            }
        } else {
            //There is a plugin in play.
            prefix = id.substring(0, index);
            id = id.substring(index + 1, id.length);

            plugin = stringRequire(systemRequire, exports, module, prefix, relId);

            if (plugin.normalize) {
                id = plugin.normalize(id, makeNormalize(relId));
            } else {
                //Normalize the ID normally.
                id = normalize(id, relId);
            }

            if (loaderCache[id]) {
                return loaderCache[id];
            } else {
                plugin.load(id, makeRequire(systemRequire, exports, module, relId), makeLoad(id), {});

                return loaderCache[id];
            }
        }
    };

    //Create a define function specific to the module asking for amdefine.
    function define(id, deps, factory) {
        if (Array.isArray(id)) {
            factory = deps;
            deps = id;
            id = undefined;
        } else if (typeof id !== 'string') {
            factory = id;
            id = deps = undefined;
        }

        if (deps && !Array.isArray(deps)) {
            factory = deps;
            deps = undefined;
        }

        if (!deps) {
            deps = ['require', 'exports', 'module'];
        }

        //Set up properties for this module. If an ID, then use
        //internal cache. If no ID, then use the external variables
        //for this node module.
        if (id) {
            //Put the module in deep freeze until there is a
            //require call for it.
            defineCache[id] = [id, deps, factory];
        } else {
            runFactory(id, deps, factory);
        }
    }

    //define.require, which has access to all the values in the
    //cache. Useful for AMD modules that all have IDs in the file,
    //but need to finally export a value to node based on one of those
    //IDs.
    define.require = function (id) {
        if (loaderCache[id]) {
            return loaderCache[id];
        }

        if (defineCache[id]) {
            runFactory.apply(null, defineCache[id]);
            return loaderCache[id];
        }
    };

    define.amd = {};

    return define;
}

module.exports = amdefine;

}).call(this,_dereq_('_process'),"/node_modules/jstransform/node_modules/source-map/node_modules/amdefine/amdefine.js")
},{"_process":7,"path":6}],20:[function(_dereq_,module,exports){
/**
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var docblockRe = /^\s*(\/\*\*(.|\r?\n)*?\*\/)/;
var ltrimRe = /^\s*/;
/**
 * @param {String} contents
 * @return {String}
 */
function extract(contents) {
  var match = contents.match(docblockRe);
  if (match) {
    return match[0].replace(ltrimRe, '') || '';
  }
  return '';
}


var commentStartRe = /^\/\*\*?/;
var commentEndRe = /\*+\/$/;
var wsRe = /[\t ]+/g;
var stringStartRe = /(\r?\n|^) *\*/g;
var multilineRe = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *([^@\r\n\s][^@\r\n]+?) *\r?\n/g;
var propertyRe = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g;

/**
 * @param {String} contents
 * @return {Array}
 */
function parse(docblock) {
  docblock = docblock
    .replace(commentStartRe, '')
    .replace(commentEndRe, '')
    .replace(wsRe, ' ')
    .replace(stringStartRe, '$1');

  // Normalize multi-line directives
  var prev = '';
  while (prev != docblock) {
    prev = docblock;
    docblock = docblock.replace(multilineRe, "\n$1 $2\n");
  }
  docblock = docblock.trim();

  var result = [];
  var match;
  while (match = propertyRe.exec(docblock)) {
    result.push([match[1], match[2]]);
  }

  return result;
}

/**
 * Same as parse but returns an object of prop: value instead of array of paris
 * If a property appers more than once the last one will be returned
 *
 * @param {String} contents
 * @return {Object}
 */
function parseAsObject(docblock) {
  var pairs = parse(docblock);
  var result = {};
  for (var i = 0; i < pairs.length; i++) {
    result[pairs[i][0]] = pairs[i][1];
  }
  return result;
}


exports.extract = extract;
exports.parse = parse;
exports.parseAsObject = parseAsObject;

},{}],21:[function(_dereq_,module,exports){
/**
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/*jslint node: true*/
"use strict";

var esprima = _dereq_('esprima-fb');
var utils = _dereq_('./utils');

var getBoundaryNode = utils.getBoundaryNode;
var declareIdentInScope = utils.declareIdentInLocalScope;
var initScopeMetadata = utils.initScopeMetadata;
var Syntax = esprima.Syntax;

/**
 * @param {object} node
 * @param {object} parentNode
 * @return {boolean}
 */
function _nodeIsClosureScopeBoundary(node, parentNode) {
  if (node.type === Syntax.Program) {
    return true;
  }

  var parentIsFunction =
    parentNode.type === Syntax.FunctionDeclaration
    || parentNode.type === Syntax.FunctionExpression
    || parentNode.type === Syntax.ArrowFunctionExpression;

  return node.type === Syntax.BlockStatement && parentIsFunction;
}

function _nodeIsBlockScopeBoundary(node, parentNode) {
  if (node.type === Syntax.Program) {
    return false;
  }

  return node.type === Syntax.BlockStatement
         && parentNode.type === Syntax.CatchClause;
}

/**
 * @param {object} node
 * @param {array} path
 * @param {object} state
 */
function traverse(node, path, state) {
  // Create a scope stack entry if this is the first node we've encountered in
  // its local scope
  var parentNode = path[0];
  if (!Array.isArray(node) && state.localScope.parentNode !== parentNode) {
    if (_nodeIsClosureScopeBoundary(node, parentNode)) {
      var scopeIsStrict =
        state.scopeIsStrict
        || node.body.length > 0
           && node.body[0].type === Syntax.ExpressionStatement
           && node.body[0].expression.type === Syntax.Literal
           && node.body[0].expression.value === 'use strict';

      if (node.type === Syntax.Program) {
        state = utils.updateState(state, {
          scopeIsStrict: scopeIsStrict
        });
      } else {
        state = utils.updateState(state, {
          localScope: {
            parentNode: parentNode,
            parentScope: state.localScope,
            identifiers: {},
            tempVarIndex: 0
          },
          scopeIsStrict: scopeIsStrict
        });

        // All functions have an implicit 'arguments' object in scope
        declareIdentInScope('arguments', initScopeMetadata(node), state);

        // Include function arg identifiers in the scope boundaries of the
        // function
        if (parentNode.params.length > 0) {
          var param;
          for (var i = 0; i < parentNode.params.length; i++) {
            param = parentNode.params[i];
            if (param.type === Syntax.Identifier) {
              declareIdentInScope(
                param.name, initScopeMetadata(parentNode), state
              );
            }
          }
        }

        // Named FunctionExpressions scope their name within the body block of
        // themselves only
        if (parentNode.type === Syntax.FunctionExpression && parentNode.id) {
          var metaData =
            initScopeMetadata(parentNode, path.parentNodeslice, parentNode);
          declareIdentInScope(parentNode.id.name, metaData, state);
        }
      }

      // Traverse and find all local identifiers in this closure first to
      // account for function/variable declaration hoisting
      collectClosureIdentsAndTraverse(node, path, state);
    }

    if (_nodeIsBlockScopeBoundary(node, parentNode)) {
      state = utils.updateState(state, {
        localScope: {
          parentNode: parentNode,
          parentScope: state.localScope,
          identifiers: {}
        }
      });

      if (parentNode.type === Syntax.CatchClause) {
        declareIdentInScope(
          parentNode.param.name, initScopeMetadata(parentNode), state
        );
      }
      collectBlockIdentsAndTraverse(node, path, state);
    }
  }

  // Only catchup() before and after traversing a child node
  function traverser(node, path, state) {
    node.range && utils.catchup(node.range[0], state);
    traverse(node, path, state);
    node.range && utils.catchup(node.range[1], state);
  }

  utils.analyzeAndTraverse(walker, traverser, node, path, state);
}

function collectClosureIdentsAndTraverse(node, path, state) {
  utils.analyzeAndTraverse(
    visitLocalClosureIdentifiers,
    collectClosureIdentsAndTraverse,
    node,
    path,
    state
  );
}

function collectBlockIdentsAndTraverse(node, path, state) {
  utils.analyzeAndTraverse(
    visitLocalBlockIdentifiers,
    collectBlockIdentsAndTraverse,
    node,
    path,
    state
  );
}

function visitLocalClosureIdentifiers(node, path, state) {
  var metaData;
  switch (node.type) {
    case Syntax.FunctionExpression:
      // Function expressions don't get their names (if there is one) added to
      // the closure scope they're defined in
      return false;
    case Syntax.ClassDeclaration:
    case Syntax.ClassExpression:
    case Syntax.FunctionDeclaration:
      if (node.id) {
        metaData = initScopeMetadata(getBoundaryNode(path), path.slice(), node);
        declareIdentInScope(node.id.name, metaData, state);
      }
      return false;
    case Syntax.VariableDeclarator:
      // Variables have function-local scope
      if (path[0].kind === 'var') {
        metaData = initScopeMetadata(getBoundaryNode(path), path.slice(), node);
        declareIdentInScope(node.id.name, metaData, state);
      }
      break;
  }
}

function visitLocalBlockIdentifiers(node, path, state) {
  // TODO: Support 'let' here...maybe...one day...or something...
  if (node.type === Syntax.CatchClause) {
    return false;
  }
}

function walker(node, path, state) {
  var visitors = state.g.visitors;
  for (var i = 0; i < visitors.length; i++) {
    if (visitors[i].test(node, path, state)) {
      return visitors[i](traverse, node, path, state);
    }
  }
}

var _astCache = {};

/**
 * Applies all available transformations to the source
 * @param {array} visitors
 * @param {string} source
 * @param {?object} options
 * @return {object}
 */
function transform(visitors, source, options) {
  options = options || {};
  var ast;
  try {
    var cachedAst = _astCache[source];
    ast = cachedAst ||
      (_astCache[source] = esprima.parse(source, {
        comment: true,
        loc: true,
        range: true
      }));
    } catch (e) {
    e.message = 'Parse Error: ' + e.message;
    throw e;
  }
  var state = utils.createState(source, ast, options);
  state.g.visitors = visitors;

  if (options.sourceMap) {
    var SourceMapGenerator = _dereq_('source-map').SourceMapGenerator;
    state.g.sourceMap = new SourceMapGenerator({file: options.filename || 'transformed.js'});
  }

  traverse(ast, [], state);
  utils.catchup(source.length, state);

  var ret = {code: state.g.buffer, extra: state.g.extra};
  if (options.sourceMap) {
    ret.sourceMap = state.g.sourceMap;
    ret.sourceMapFilename =  options.filename || 'source.js';
  }
  return ret;
}

exports.transform = transform;
exports.Syntax = Syntax;

},{"./utils":22,"esprima-fb":9,"source-map":10}],22:[function(_dereq_,module,exports){
/**
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/*jslint node: true*/
var Syntax = _dereq_('esprima-fb').Syntax;
var leadingIndentRegexp = /(^|\n)( {2}|\t)/g;
var nonWhiteRegexp = /(\S)/g;

/**
 * A `state` object represents the state of the parser. It has "local" and
 * "global" parts. Global contains parser position, source, etc. Local contains
 * scope based properties like current class name. State should contain all the
 * info required for transformation. It's the only mandatory object that is
 * being passed to every function in transform chain.
 *
 * @param  {string} source
 * @param  {object} transformOptions
 * @return {object}
 */
function createState(source, rootNode, transformOptions) {
  return {
    /**
     * A tree representing the current local scope (and its lexical scope chain)
     * Useful for tracking identifiers from parent scopes, etc.
     * @type {Object}
     */
    localScope: {
      parentNode: rootNode,
      parentScope: null,
      identifiers: {},
      tempVarIndex: 0
    },
    /**
     * The name (and, if applicable, expression) of the super class
     * @type {Object}
     */
    superClass: null,
    /**
     * The namespace to use when munging identifiers
     * @type {String}
     */
    mungeNamespace: '',
    /**
     * Ref to the node for the current MethodDefinition
     * @type {Object}
     */
    methodNode: null,
    /**
     * Ref to the node for the FunctionExpression of the enclosing
     * MethodDefinition
     * @type {Object}
     */
    methodFuncNode: null,
    /**
     * Name of the enclosing class
     * @type {String}
     */
    className: null,
    /**
     * Whether we're currently within a `strict` scope
     * @type {Bool}
     */
    scopeIsStrict: null,
    /**
     * Indentation offset
     * @type {Number}
     */
    indentBy: 0,
    /**
     * Global state (not affected by updateState)
     * @type {Object}
     */
    g: {
      /**
       * A set of general options that transformations can consider while doing
       * a transformation:
       *
       * - minify
       *   Specifies that transformation steps should do their best to minify
       *   the output source when possible. This is useful for places where
       *   minification optimizations are possible with higher-level context
       *   info than what jsxmin can provide.
       *
       *   For example, the ES6 class transform will minify munged private
       *   variables if this flag is set.
       */
      opts: transformOptions,
      /**
       * Current position in the source code
       * @type {Number}
       */
      position: 0,
      /**
       * Auxiliary data to be returned by transforms
       * @type {Object}
       */
      extra: {},
      /**
       * Buffer containing the result
       * @type {String}
       */
      buffer: '',
      /**
       * Source that is being transformed
       * @type {String}
       */
      source: source,

      /**
       * Cached parsed docblock (see getDocblock)
       * @type {object}
       */
      docblock: null,

      /**
       * Whether the thing was used
       * @type {Boolean}
       */
      tagNamespaceUsed: false,

      /**
       * If using bolt xjs transformation
       * @type {Boolean}
       */
      isBolt: undefined,

      /**
       * Whether to record source map (expensive) or not
       * @type {SourceMapGenerator|null}
       */
      sourceMap: null,

      /**
       * Filename of the file being processed. Will be returned as a source
       * attribute in the source map
       */
      sourceMapFilename: 'source.js',

      /**
       * Only when source map is used: last line in the source for which
       * source map was generated
       * @type {Number}
       */
      sourceLine: 1,

      /**
       * Only when source map is used: last line in the buffer for which
       * source map was generated
       * @type {Number}
       */
      bufferLine: 1,

      /**
       * The top-level Program AST for the original file.
       */
      originalProgramAST: null,

      sourceColumn: 0,
      bufferColumn: 0
    }
  };
}

/**
 * Updates a copy of a given state with "update" and returns an updated state.
 *
 * @param  {object} state
 * @param  {object} update
 * @return {object}
 */
function updateState(state, update) {
  var ret = Object.create(state);
  Object.keys(update).forEach(function(updatedKey) {
    ret[updatedKey] = update[updatedKey];
  });
  return ret;
}

/**
 * Given a state fill the resulting buffer from the original source up to
 * the end
 *
 * @param {number} end
 * @param {object} state
 * @param {?function} contentTransformer Optional callback to transform newly
 *                                       added content.
 */
function catchup(end, state, contentTransformer) {
  if (end < state.g.position) {
    // cannot move backwards
    return;
  }
  var source = state.g.source.substring(state.g.position, end);
  var transformed = updateIndent(source, state);
  if (state.g.sourceMap && transformed) {
    // record where we are
    state.g.sourceMap.addMapping({
      generated: { line: state.g.bufferLine, column: state.g.bufferColumn },
      original: { line: state.g.sourceLine, column: state.g.sourceColumn },
      source: state.g.sourceMapFilename
    });

    // record line breaks in transformed source
    var sourceLines = source.split('\n');
    var transformedLines = transformed.split('\n');
    // Add line break mappings between last known mapping and the end of the
    // added piece. So for the code piece
    //  (foo, bar);
    // > var x = 2;
    // > var b = 3;
    //   var c =
    // only add lines marked with ">": 2, 3.
    for (var i = 1; i < sourceLines.length - 1; i++) {
      state.g.sourceMap.addMapping({
        generated: { line: state.g.bufferLine, column: 0 },
        original: { line: state.g.sourceLine, column: 0 },
        source: state.g.sourceMapFilename
      });
      state.g.sourceLine++;
      state.g.bufferLine++;
    }
    // offset for the last piece
    if (sourceLines.length > 1) {
      state.g.sourceLine++;
      state.g.bufferLine++;
      state.g.sourceColumn = 0;
      state.g.bufferColumn = 0;
    }
    state.g.sourceColumn += sourceLines[sourceLines.length - 1].length;
    state.g.bufferColumn +=
      transformedLines[transformedLines.length - 1].length;
  }
  state.g.buffer +=
    contentTransformer ? contentTransformer(transformed) : transformed;
  state.g.position = end;
}

/**
 * Returns original source for an AST node.
 * @param {object} node
 * @param {object} state
 * @return {string}
 */
function getNodeSourceText(node, state) {
  return state.g.source.substring(node.range[0], node.range[1]);
}

function replaceNonWhite(value) {
  return value.replace(nonWhiteRegexp, ' ');
}

/**
 * Removes all non-whitespace characters
 */
function stripNonWhite(value) {
  return value.replace(nonWhiteRegexp, '');
}

/**
 * Catches up as `catchup` but replaces non-whitespace chars with spaces.
 */
function catchupWhiteOut(end, state) {
  catchup(end, state, replaceNonWhite);
}

/**
 * Catches up as `catchup` but removes all non-whitespace characters.
 */
function catchupWhiteSpace(end, state) {
  catchup(end, state, stripNonWhite);
}

/**
 * Removes all non-newline characters
 */
var reNonNewline = /[^\n]/g;
function stripNonNewline(value) {
  return value.replace(reNonNewline, function() {
    return '';
  });
}

/**
 * Catches up as `catchup` but removes all non-newline characters.
 *
 * Equivalent to appending as many newlines as there are in the original source
 * between the current position and `end`.
 */
function catchupNewlines(end, state) {
  catchup(end, state, stripNonNewline);
}


/**
 * Same as catchup but does not touch the buffer
 *
 * @param  {number} end
 * @param  {object} state
 */
function move(end, state) {
  // move the internal cursors
  if (state.g.sourceMap) {
    if (end < state.g.position) {
      state.g.position = 0;
      state.g.sourceLine = 1;
      state.g.sourceColumn = 0;
    }

    var source = state.g.source.substring(state.g.position, end);
    var sourceLines = source.split('\n');
    if (sourceLines.length > 1) {
      state.g.sourceLine += sourceLines.length - 1;
      state.g.sourceColumn = 0;
    }
    state.g.sourceColumn += sourceLines[sourceLines.length - 1].length;
  }
  state.g.position = end;
}

/**
 * Appends a string of text to the buffer
 *
 * @param {string} str
 * @param {object} state
 */
function append(str, state) {
  if (state.g.sourceMap && str) {
    state.g.sourceMap.addMapping({
      generated: { line: state.g.bufferLine, column: state.g.bufferColumn },
      original: { line: state.g.sourceLine, column: state.g.sourceColumn },
      source: state.g.sourceMapFilename
    });
    var transformedLines = str.split('\n');
    if (transformedLines.length > 1) {
      state.g.bufferLine += transformedLines.length - 1;
      state.g.bufferColumn = 0;
    }
    state.g.bufferColumn +=
      transformedLines[transformedLines.length - 1].length;
  }
  state.g.buffer += str;
}

/**
 * Update indent using state.indentBy property. Indent is measured in
 * double spaces. Updates a single line only.
 *
 * @param {string} str
 * @param {object} state
 * @return {string}
 */
function updateIndent(str, state) {
  var indentBy = state.indentBy;
  if (indentBy < 0) {
    for (var i = 0; i < -indentBy; i++) {
      str = str.replace(leadingIndentRegexp, '$1');
    }
  } else {
    for (var i = 0; i < indentBy; i++) {
      str = str.replace(leadingIndentRegexp, '$1$2$2');
    }
  }
  return str;
}

/**
 * Calculates indent from the beginning of the line until "start" or the first
 * character before start.
 * @example
 *   "  foo.bar()"
 *         ^
 *       start
 *   indent will be "  "
 *
 * @param  {number} start
 * @param  {object} state
 * @return {string}
 */
function indentBefore(start, state) {
  var end = start;
  start = start - 1;

  while (start > 0 && state.g.source[start] != '\n') {
    if (!state.g.source[start].match(/[ \t]/)) {
      end = start;
    }
    start--;
  }
  return state.g.source.substring(start + 1, end);
}

function getDocblock(state) {
  if (!state.g.docblock) {
    var docblock = _dereq_('./docblock');
    state.g.docblock =
      docblock.parseAsObject(docblock.extract(state.g.source));
  }
  return state.g.docblock;
}

function identWithinLexicalScope(identName, state, stopBeforeNode) {
  var currScope = state.localScope;
  while (currScope) {
    if (currScope.identifiers[identName] !== undefined) {
      return true;
    }

    if (stopBeforeNode && currScope.parentNode === stopBeforeNode) {
      break;
    }

    currScope = currScope.parentScope;
  }
  return false;
}

function identInLocalScope(identName, state) {
  return state.localScope.identifiers[identName] !== undefined;
}

/**
 * @param {object} boundaryNode
 * @param {?array} path
 * @return {?object} node
 */
function initScopeMetadata(boundaryNode, path, node) {
  return {
    boundaryNode: boundaryNode,
    bindingPath: path,
    bindingNode: node
  };
}

function declareIdentInLocalScope(identName, metaData, state) {
  state.localScope.identifiers[identName] = {
    boundaryNode: metaData.boundaryNode,
    path: metaData.bindingPath,
    node: metaData.bindingNode,
    state: Object.create(state)
  };
}

function getLexicalBindingMetadata(identName, state) {
  return state.localScope.identifiers[identName];
}

/**
 * Apply the given analyzer function to the current node. If the analyzer
 * doesn't return false, traverse each child of the current node using the given
 * traverser function.
 *
 * @param {function} analyzer
 * @param {function} traverser
 * @param {object} node
 * @param {array} path
 * @param {object} state
 */
function analyzeAndTraverse(analyzer, traverser, node, path, state) {
  if (node.type) {
    if (analyzer(node, path, state) === false) {
      return;
    }
    path.unshift(node);
  }

  getOrderedChildren(node).forEach(function(child) {
    traverser(child, path, state);
  });

  node.type && path.shift();
}

/**
 * It is crucial that we traverse in order, or else catchup() on a later
 * node that is processed out of order can move the buffer past a node
 * that we haven't handled yet, preventing us from modifying that node.
 *
 * This can happen when a node has multiple properties containing children.
 * For example, XJSElement nodes have `openingElement`, `closingElement` and
 * `children`. If we traverse `openingElement`, then `closingElement`, then
 * when we get to `children`, the buffer has already caught up to the end of
 * the closing element, after the children.
 *
 * This is basically a Schwartzian transform. Collects an array of children,
 * each one represented as [child, startIndex]; sorts the array by start
 * index; then traverses the children in that order.
 */
function getOrderedChildren(node) {
  var queue = [];
  for (var key in node) {
    if (node.hasOwnProperty(key)) {
      enqueueNodeWithStartIndex(queue, node[key]);
    }
  }
  queue.sort(function(a, b) { return a[1] - b[1]; });
  return queue.map(function(pair) { return pair[0]; });
}

/**
 * Helper function for analyzeAndTraverse which queues up all of the children
 * of the given node.
 *
 * Children can also be found in arrays, so we basically want to merge all of
 * those arrays together so we can sort them and then traverse the children
 * in order.
 *
 * One example is the Program node. It contains `body` and `comments`, both
 * arrays. Lexographically, comments are interspersed throughout the body
 * nodes, but esprima's AST groups them together.
 */
function enqueueNodeWithStartIndex(queue, node) {
  if (typeof node !== 'object' || node === null) {
    return;
  }
  if (node.range) {
    queue.push([node, node.range[0]]);
  } else if (Array.isArray(node)) {
    for (var ii = 0; ii < node.length; ii++) {
      enqueueNodeWithStartIndex(queue, node[ii]);
    }
  }
}

/**
 * Checks whether a node or any of its sub-nodes contains
 * a syntactic construct of the passed type.
 * @param {object} node - AST node to test.
 * @param {string} type - node type to lookup.
 */
function containsChildOfType(node, type) {
  return containsChildMatching(node, function(node) {
    return node.type === type;
  });
}

function containsChildMatching(node, matcher) {
  var foundMatchingChild = false;
  function nodeTypeAnalyzer(node) {
    if (matcher(node) === true) {
      foundMatchingChild = true;
      return false;
    }
  }
  function nodeTypeTraverser(child, path, state) {
    if (!foundMatchingChild) {
      foundMatchingChild = containsChildMatching(child, matcher);
    }
  }
  analyzeAndTraverse(
    nodeTypeAnalyzer,
    nodeTypeTraverser,
    node,
    []
  );
  return foundMatchingChild;
}

var scopeTypes = {};
scopeTypes[Syntax.FunctionExpression] = true;
scopeTypes[Syntax.FunctionDeclaration] = true;
scopeTypes[Syntax.Program] = true;

function getBoundaryNode(path) {
  for (var ii = 0; ii < path.length; ++ii) {
    if (scopeTypes[path[ii].type]) {
      return path[ii];
    }
  }
  throw new Error(
    'Expected to find a node with one of the following types in path:\n' +
    JSON.stringify(Object.keys(scopeTypes))
  );
}

function getTempVar(tempVarIndex) {
  return '$__' + tempVarIndex;
}

function getTempVarWithValue(tempVarIndex, tempVarValue) {
  return getTempVar(tempVarIndex) + '=' + tempVarValue;
}

exports.append = append;
exports.catchup = catchup;
exports.catchupWhiteOut = catchupWhiteOut;
exports.catchupWhiteSpace = catchupWhiteSpace;
exports.catchupNewlines = catchupNewlines;
exports.containsChildMatching = containsChildMatching;
exports.containsChildOfType = containsChildOfType;
exports.createState = createState;
exports.declareIdentInLocalScope = declareIdentInLocalScope;
exports.getBoundaryNode = getBoundaryNode;
exports.getDocblock = getDocblock;
exports.getLexicalBindingMetadata = getLexicalBindingMetadata;
exports.initScopeMetadata = initScopeMetadata;
exports.identWithinLexicalScope = identWithinLexicalScope;
exports.identInLocalScope = identInLocalScope;
exports.indentBefore = indentBefore;
exports.move = move;
exports.scopeTypes = scopeTypes;
exports.updateIndent = updateIndent;
exports.updateState = updateState;
exports.analyzeAndTraverse = analyzeAndTraverse;
exports.getOrderedChildren = getOrderedChildren;
exports.getNodeSourceText = getNodeSourceText;
exports.getTempVar = getTempVar;
exports.getTempVarWithValue = getTempVarWithValue;

},{"./docblock":20,"esprima-fb":9}],23:[function(_dereq_,module,exports){
/**
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*global exports:true*/

/**
 * Desugars ES6 Arrow functions to ES3 function expressions.
 * If the function contains `this` expression -- automatically
 * binds the function to current value of `this`.
 *
 * Single parameter, simple expression:
 *
 * [1, 2, 3].map(x => x * x);
 *
 * [1, 2, 3].map(function(x) { return x * x; });
 *
 * Several parameters, complex block:
 *
 * this.users.forEach((user, idx) => {
 *   return this.isActive(idx) && this.send(user);
 * });
 *
 * this.users.forEach(function(user, idx) {
 *   return this.isActive(idx) && this.send(user);
 * }.bind(this));
 *
 */
var restParamVisitors = _dereq_('./es6-rest-param-visitors');
var destructuringVisitors = _dereq_('./es6-destructuring-visitors');

var Syntax = _dereq_('esprima-fb').Syntax;
var utils = _dereq_('../src/utils');

/**
 * @public
 */
function visitArrowFunction(traverse, node, path, state) {
  var notInExpression = (path[0].type === Syntax.ExpressionStatement);

  // Wrap a function into a grouping operator, if it's not
  // in the expression position.
  if (notInExpression) {
    utils.append('(', state);
  }

  utils.append('function', state);
  renderParams(traverse, node, path, state);

  // Skip arrow.
  utils.catchupWhiteSpace(node.body.range[0], state);

  var renderBody = node.body.type == Syntax.BlockStatement
    ? renderStatementBody
    : renderExpressionBody;

  path.unshift(node);
  renderBody(traverse, node, path, state);
  path.shift();

  // Bind the function only if `this` value is used
  // inside it or inside any sub-expression.
  var containsBindingSyntax =
    utils.containsChildMatching(node.body, function(node) {
      return node.type === Syntax.ThisExpression
             || (node.type === Syntax.Identifier
                 && node.name === "super");
    });

  if (containsBindingSyntax) {
    utils.append('.bind(this)', state);
  }

  utils.catchupWhiteSpace(node.range[1], state);

  // Close wrapper if not in the expression.
  if (notInExpression) {
    utils.append(')', state);
  }

  return false;
}

function renderParams(traverse, node, path, state) {
  // To preserve inline typechecking directives, we
  // distinguish between parens-free and paranthesized single param.
  if (isParensFreeSingleParam(node, state) || !node.params.length) {
    utils.append('(', state);
  }
  if (node.params.length !== 0) {
    path.unshift(node);
    traverse(node.params, path, state);
    path.unshift();
  }
  utils.append(')', state);
}

function isParensFreeSingleParam(node, state) {
  return node.params.length === 1 &&
    state.g.source[state.g.position] !== '(';
}

function renderExpressionBody(traverse, node, path, state) {
  // Wrap simple expression bodies into a block
  // with explicit return statement.
  utils.append('{', state);

  // Special handling of rest param.
  if (node.rest) {
    utils.append(
      restParamVisitors.renderRestParamSetup(node, state),
      state
    );
  }

  // Special handling of destructured params.
  destructuringVisitors.renderDestructuredComponents(
    node,
    utils.updateState(state, {
      localScope: {
        parentNode: state.parentNode,
        parentScope: state.parentScope,
        identifiers: state.identifiers,
        tempVarIndex: 0
      }
    })
  );

  utils.append('return ', state);
  renderStatementBody(traverse, node, path, state);
  utils.append(';}', state);
}

function renderStatementBody(traverse, node, path, state) {
  traverse(node.body, path, state);
  utils.catchup(node.body.range[1], state);
}

visitArrowFunction.test = function(node, path, state) {
  return node.type === Syntax.ArrowFunctionExpression;
};

exports.visitorList = [
  visitArrowFunction
];


},{"../src/utils":22,"./es6-destructuring-visitors":25,"./es6-rest-param-visitors":28,"esprima-fb":9}],24:[function(_dereq_,module,exports){
/**
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint node:true*/

/**
 * @typechecks
 */
'use strict';

var base62 = _dereq_('base62');
var Syntax = _dereq_('esprima-fb').Syntax;
var utils = _dereq_('../src/utils');
var reservedWordsHelper = _dereq_('./reserved-words-helper');

var declareIdentInLocalScope = utils.declareIdentInLocalScope;
var initScopeMetadata = utils.initScopeMetadata;

var SUPER_PROTO_IDENT_PREFIX = '____SuperProtoOf';

var _anonClassUUIDCounter = 0;
var _mungedSymbolMaps = {};

function resetSymbols() {
  _anonClassUUIDCounter = 0;
  _mungedSymbolMaps = {};
}

/**
 * Used to generate a unique class for use with code-gens for anonymous class
 * expressions.
 *
 * @param {object} state
 * @return {string}
 */
function _generateAnonymousClassName(state) {
  var mungeNamespace = state.mungeNamespace || '';
  return '____Class' + mungeNamespace + base62.encode(_anonClassUUIDCounter++);
}

/**
 * Given an identifier name, munge it using the current state's mungeNamespace.
 *
 * @param {string} identName
 * @param {object} state
 * @return {string}
 */
function _getMungedName(identName, state) {
  var mungeNamespace = state.mungeNamespace;
  var shouldMinify = state.g.opts.minify;

  if (shouldMinify) {
    if (!_mungedSymbolMaps[mungeNamespace]) {
      _mungedSymbolMaps[mungeNamespace] = {
        symbolMap: {},
        identUUIDCounter: 0
      };
    }

    var symbolMap = _mungedSymbolMaps[mungeNamespace].symbolMap;
    if (!symbolMap[identName]) {
      symbolMap[identName] =
        base62.encode(_mungedSymbolMaps[mungeNamespace].identUUIDCounter++);
    }
    identName = symbolMap[identName];
  }
  return '$' + mungeNamespace + identName;
}

/**
 * Extracts super class information from a class node.
 *
 * Information includes name of the super class and/or the expression string
 * (if extending from an expression)
 *
 * @param {object} node
 * @param {object} state
 * @return {object}
 */
function _getSuperClassInfo(node, state) {
  var ret = {
    name: null,
    expression: null
  };
  if (node.superClass) {
    if (node.superClass.type === Syntax.Identifier) {
      ret.name = node.superClass.name;
    } else {
      // Extension from an expression
      ret.name = _generateAnonymousClassName(state);
      ret.expression = state.g.source.substring(
        node.superClass.range[0],
        node.superClass.range[1]
      );
    }
  }
  return ret;
}

/**
 * Used with .filter() to find the constructor method in a list of
 * MethodDefinition nodes.
 *
 * @param {object} classElement
 * @return {boolean}
 */
function _isConstructorMethod(classElement) {
  return classElement.type === Syntax.MethodDefinition &&
         classElement.key.type === Syntax.Identifier &&
         classElement.key.name === 'constructor';
}

/**
 * @param {object} node
 * @param {object} state
 * @return {boolean}
 */
function _shouldMungeIdentifier(node, state) {
  return (
    !!state.methodFuncNode &&
    !utils.getDocblock(state).hasOwnProperty('preventMunge') &&
    /^_(?!_)/.test(node.name)
  );
}

/**
 * @param {function} traverse
 * @param {object} node
 * @param {array} path
 * @param {object} state
 */
function visitClassMethod(traverse, node, path, state) {
  if (!state.g.opts.es5 && (node.kind === 'get' || node.kind === 'set')) {
    throw new Error(
      'This transform does not support ' + node.kind + 'ter methods for ES6 ' +
      'classes. (line: ' + node.loc.start.line + ', col: ' +
      node.loc.start.column + ')'
    );
  }
  state = utils.updateState(state, {
    methodNode: node
  });
  utils.catchup(node.range[0], state);
  path.unshift(node);
  traverse(node.value, path, state);
  path.shift();
  return false;
}
visitClassMethod.test = function(node, path, state) {
  return node.type === Syntax.MethodDefinition;
};

/**
 * @param {function} traverse
 * @param {object} node
 * @param {array} path
 * @param {object} state
 */
function visitClassFunctionExpression(traverse, node, path, state) {
  var methodNode = path[0];
  var isGetter = methodNode.kind === 'get';
  var isSetter = methodNode.kind === 'set';

  state = utils.updateState(state, {
    methodFuncNode: node
  });

  if (methodNode.key.name === 'constructor') {
    utils.append('function ' + state.className, state);
  } else {
    var methodAccessor;
    var prototypeOrStatic = methodNode["static"] ? '' : '.prototype';
    var objectAccessor = state.className + prototypeOrStatic;

    if (methodNode.key.type === Syntax.Identifier) {
      // foo() {}
      methodAccessor = methodNode.key.name;
      if (_shouldMungeIdentifier(methodNode.key, state)) {
        methodAccessor = _getMungedName(methodAccessor, state);
      }
      if (isGetter || isSetter) {
        methodAccessor = JSON.stringify(methodAccessor);
      } else if (reservedWordsHelper.isReservedWord(methodAccessor)) {
        methodAccessor = '[' + JSON.stringify(methodAccessor) + ']';
      } else {
        methodAccessor = '.' + methodAccessor;
      }
    } else if (methodNode.key.type === Syntax.Literal) {
      // 'foo bar'() {}  | get 'foo bar'() {} | set 'foo bar'() {}
      methodAccessor = JSON.stringify(methodNode.key.value);
      if (!(isGetter || isSetter)) {
        methodAccessor = '[' + methodAccessor + ']';
      }
    }

    if (isSetter || isGetter) {
      utils.append(
        'Object.defineProperty(' +
          objectAccessor + ',' +
          methodAccessor + ',' +
          '{enumerable:true,configurable:true,' +
          methodNode.kind + ':function',
        state
      );
    } else {
      utils.append(
        objectAccessor +
        methodAccessor + '=function' + (node.generator ? '*' : ''),
        state
      );
    }
  }
  utils.move(methodNode.key.range[1], state);
  utils.append('(', state);

  var params = node.params;
  if (params.length > 0) {
    utils.catchupNewlines(params[0].range[0], state);
    for (var i = 0; i < params.length; i++) {
      utils.catchup(node.params[i].range[0], state);
      path.unshift(node);
      traverse(params[i], path, state);
      path.shift();
    }
  }
  utils.append(')', state);
  utils.catchupWhiteSpace(node.body.range[0], state);
  utils.append('{', state);
  if (!state.scopeIsStrict) {
    utils.append('"use strict";', state);
    state = utils.updateState(state, {
      scopeIsStrict: true
    });
  }
  utils.move(node.body.range[0] + '{'.length, state);

  path.unshift(node);
  traverse(node.body, path, state);
  path.shift();
  utils.catchup(node.body.range[1], state);

  if (methodNode.key.name !== 'constructor') {
    if (isGetter || isSetter) {
      utils.append('})', state);
    }
    utils.append(';', state);
  }
  return false;
}
visitClassFunctionExpression.test = function(node, path, state) {
  return node.type === Syntax.FunctionExpression
         && path[0].type === Syntax.MethodDefinition;
};

function visitClassMethodParam(traverse, node, path, state) {
  var paramName = node.name;
  if (_shouldMungeIdentifier(node, state)) {
    paramName = _getMungedName(node.name, state);
  }
  utils.append(paramName, state);
  utils.move(node.range[1], state);
}
visitClassMethodParam.test = function(node, path, state) {
  if (!path[0] || !path[1]) {
    return;
  }

  var parentFuncExpr = path[0];
  var parentClassMethod = path[1];

  return parentFuncExpr.type === Syntax.FunctionExpression
         && parentClassMethod.type === Syntax.MethodDefinition
         && node.type === Syntax.Identifier;
};

/**
 * @param {function} traverse
 * @param {object} node
 * @param {array} path
 * @param {object} state
 */
function _renderClassBody(traverse, node, path, state) {
  var className = state.className;
  var superClass = state.superClass;

  // Set up prototype of constructor on same line as `extends` for line-number
  // preservation. This relies on function-hoisting if a constructor function is
  // defined in the class body.
  if (superClass.name) {
    // If the super class is an expression, we need to memoize the output of the
    // expression into the generated class name variable and use that to refer
    // to the super class going forward. Example:
    //
    //   class Foo extends mixin(Bar, Baz) {}
    //     --transforms to--
    //   function Foo() {} var ____Class0Blah = mixin(Bar, Baz);
    if (superClass.expression !== null) {
      utils.append(
        'var ' + superClass.name + '=' + superClass.expression + ';',
        state
      );
    }

    var keyName = superClass.name + '____Key';
    var keyNameDeclarator = '';
    if (!utils.identWithinLexicalScope(keyName, state)) {
      keyNameDeclarator = 'var ';
      declareIdentInLocalScope(keyName, initScopeMetadata(node), state);
    }
    utils.append(
      'for(' + keyNameDeclarator + keyName + ' in ' + superClass.name + '){' +
        'if(' + superClass.name + '.hasOwnProperty(' + keyName + ')){' +
          className + '[' + keyName + ']=' +
            superClass.name + '[' + keyName + '];' +
        '}' +
      '}',
      state
    );

    var superProtoIdentStr = SUPER_PROTO_IDENT_PREFIX + superClass.name;
    if (!utils.identWithinLexicalScope(superProtoIdentStr, state)) {
      utils.append(
        'var ' + superProtoIdentStr + '=' + superClass.name + '===null?' +
        'null:' + superClass.name + '.prototype;',
        state
      );
      declareIdentInLocalScope(superProtoIdentStr, initScopeMetadata(node), state);
    }

    utils.append(
      className + '.prototype=Object.create(' + superProtoIdentStr + ');',
      state
    );
    utils.append(
      className + '.prototype.constructor=' + className + ';',
      state
    );
    utils.append(
      className + '.__superConstructor__=' + superClass.name + ';',
      state
    );
  }

  // If there's no constructor method specified in the class body, create an
  // empty constructor function at the top (same line as the class keyword)
  if (!node.body.body.filter(_isConstructorMethod).pop()) {
    utils.append('function ' + className + '(){', state);
    if (!state.scopeIsStrict) {
      utils.append('"use strict";', state);
    }
    if (superClass.name) {
      utils.append(
        'if(' + superClass.name + '!==null){' +
        superClass.name + '.apply(this,arguments);}',
        state
      );
    }
    utils.append('}', state);
  }

  utils.move(node.body.range[0] + '{'.length, state);
  traverse(node.body, path, state);
  utils.catchupWhiteSpace(node.range[1], state);
}

/**
 * @param {function} traverse
 * @param {object} node
 * @param {array} path
 * @param {object} state
 */
function visitClassDeclaration(traverse, node, path, state) {
  var className = node.id.name;
  var superClass = _getSuperClassInfo(node, state);

  state = utils.updateState(state, {
    mungeNamespace: className,
    className: className,
    superClass: superClass
  });

  _renderClassBody(traverse, node, path, state);

  return false;
}
visitClassDeclaration.test = function(node, path, state) {
  return node.type === Syntax.ClassDeclaration;
};

/**
 * @param {function} traverse
 * @param {object} node
 * @param {array} path
 * @param {object} state
 */
function visitClassExpression(traverse, node, path, state) {
  var className = node.id && node.id.name || _generateAnonymousClassName(state);
  var superClass = _getSuperClassInfo(node, state);

  utils.append('(function(){', state);

  state = utils.updateState(state, {
    mungeNamespace: className,
    className: className,
    superClass: superClass
  });

  _renderClassBody(traverse, node, path, state);

  utils.append('return ' + className + ';})()', state);
  return false;
}
visitClassExpression.test = function(node, path, state) {
  return node.type === Syntax.ClassExpression;
};

/**
 * @param {function} traverse
 * @param {object} node
 * @param {array} path
 * @param {object} state
 */
function visitPrivateIdentifier(traverse, node, path, state) {
  utils.append(_getMungedName(node.name, state), state);
  utils.move(node.range[1], state);
}
visitPrivateIdentifier.test = function(node, path, state) {
  if (node.type === Syntax.Identifier && _shouldMungeIdentifier(node, state)) {
    // Always munge non-computed properties of MemberExpressions
    // (a la preventing access of properties of unowned objects)
    if (path[0].type === Syntax.MemberExpression && path[0].object !== node
        && path[0].computed === false) {
      return true;
    }

    // Always munge identifiers that were declared within the method function
    // scope
    if (utils.identWithinLexicalScope(node.name, state, state.methodFuncNode)) {
      return true;
    }

    // Always munge private keys on object literals defined within a method's
    // scope.
    if (path[0].type === Syntax.Property
        && path[1].type === Syntax.ObjectExpression) {
      return true;
    }

    // Always munge function parameters
    if (path[0].type === Syntax.FunctionExpression
        || path[0].type === Syntax.FunctionDeclaration
        || path[0].type === Syntax.ArrowFunctionExpression) {
      for (var i = 0; i < path[0].params.length; i++) {
        if (path[0].params[i] === node) {
          return true;
        }
      }
    }
  }
  return false;
};

/**
 * @param {function} traverse
 * @param {object} node
 * @param {array} path
 * @param {object} state
 */
function visitSuperCallExpression(traverse, node, path, state) {
  var superClassName = state.superClass.name;

  if (node.callee.type === Syntax.Identifier) {
    if (_isConstructorMethod(state.methodNode)) {
      utils.append(superClassName + '.call(', state);
    } else {
      var protoProp = SUPER_PROTO_IDENT_PREFIX + superClassName;
      if (state.methodNode.key.type === Syntax.Identifier) {
        protoProp += '.' + state.methodNode.key.name;
      } else if (state.methodNode.key.type === Syntax.Literal) {
        protoProp += '[' + JSON.stringify(state.methodNode.key.value) + ']';
      }
      utils.append(protoProp + ".call(", state);
    }
    utils.move(node.callee.range[1], state);
  } else if (node.callee.type === Syntax.MemberExpression) {
    utils.append(SUPER_PROTO_IDENT_PREFIX + superClassName, state);
    utils.move(node.callee.object.range[1], state);

    if (node.callee.computed) {
      // ["a" + "b"]
      utils.catchup(node.callee.property.range[1] + ']'.length, state);
    } else {
      // .ab
      utils.append('.' + node.callee.property.name, state);
    }

    utils.append('.call(', state);
    utils.move(node.callee.range[1], state);
  }

  utils.append('this', state);
  if (node.arguments.length > 0) {
    utils.append(',', state);
    utils.catchupWhiteSpace(node.arguments[0].range[0], state);
    traverse(node.arguments, path, state);
  }

  utils.catchupWhiteSpace(node.range[1], state);
  utils.append(')', state);
  return false;
}
visitSuperCallExpression.test = function(node, path, state) {
  if (state.superClass && node.type === Syntax.CallExpression) {
    var callee = node.callee;
    if (callee.type === Syntax.Identifier && callee.name === 'super'
        || callee.type == Syntax.MemberExpression
           && callee.object.name === 'super') {
      return true;
    }
  }
  return false;
};

/**
 * @param {function} traverse
 * @param {object} node
 * @param {array} path
 * @param {object} state
 */
function visitSuperMemberExpression(traverse, node, path, state) {
  var superClassName = state.superClass.name;

  utils.append(SUPER_PROTO_IDENT_PREFIX + superClassName, state);
  utils.move(node.object.range[1], state);
}
visitSuperMemberExpression.test = function(node, path, state) {
  return state.superClass
         && node.type === Syntax.MemberExpression
         && node.object.type === Syntax.Identifier
         && node.object.name === 'super';
};

exports.resetSymbols = resetSymbols;

exports.visitorList = [
  visitClassDeclaration,
  visitClassExpression,
  visitClassFunctionExpression,
  visitClassMethod,
  visitClassMethodParam,
  visitPrivateIdentifier,
  visitSuperCallExpression,
  visitSuperMemberExpression
];

},{"../src/utils":22,"./reserved-words-helper":32,"base62":8,"esprima-fb":9}],25:[function(_dereq_,module,exports){
/**
 * Copyright 2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*global exports:true*/

/**
 * Implements ES6 destructuring assignment and pattern matchng.
 *
 * function init({port, ip, coords: [x, y]}) {
 *   return (x && y) ? {id, port} : {ip};
 * };
 *
 * function init($__0) {
 *   var
 *    port = $__0.port,
 *    ip = $__0.ip,
 *    $__1 = $__0.coords,
 *    x = $__1[0],
 *    y = $__1[1];
 *   return (x && y) ? {id, port} : {ip};
 * }
 *
 * var x, {ip, port} = init({ip, port});
 *
 * var x, $__0 = init({ip, port}), ip = $__0.ip, port = $__0.port;
 *
 */
var Syntax = _dereq_('esprima-fb').Syntax;
var utils = _dereq_('../src/utils');

var reservedWordsHelper = _dereq_('./reserved-words-helper');
var restParamVisitors = _dereq_('./es6-rest-param-visitors');
var restPropertyHelpers = _dereq_('./es7-rest-property-helpers');

// -------------------------------------------------------
// 1. Structured variable declarations.
//
// var [a, b] = [b, a];
// var {x, y} = {y, x};
// -------------------------------------------------------

function visitStructuredVariable(traverse, node, path, state) {
  // Allocate new temp for the pattern.
  utils.append(utils.getTempVar(state.localScope.tempVarIndex) + '=', state);
  // Skip the pattern and assign the init to the temp.
  utils.catchupWhiteSpace(node.init.range[0], state);
  traverse(node.init, path, state);
  utils.catchup(node.init.range[1], state);
  // Render the destructured data.
  utils.append(',' + getDestructuredComponents(node.id, state), state);
  state.localScope.tempVarIndex++;
  return false;
}

visitStructuredVariable.test = function(node, path, state) {
  return node.type === Syntax.VariableDeclarator &&
    isStructuredPattern(node.id);
};

function isStructuredPattern(node) {
  return node.type === Syntax.ObjectPattern ||
    node.type === Syntax.ArrayPattern;
}

// Main function which does actual recursive destructuring
// of nested complex structures.
function getDestructuredComponents(node, state) {
  var tmpIndex = state.localScope.tempVarIndex;
  var components = [];
  var patternItems = getPatternItems(node);

  for (var idx = 0; idx < patternItems.length; idx++) {
    var item = patternItems[idx];
    if (!item) {
      continue;
    }

    if (item.type === Syntax.SpreadElement) {
      // Spread/rest of an array.
      // TODO(dmitrys): support spread in the middle of a pattern
      // and also for function param patterns: [x, ...xs, y]
      components.push(item.argument.name +
        '=Array.prototype.slice.call(' +
        utils.getTempVar(tmpIndex) + ',' + idx + ')'
      );
      continue;
    }

    if (item.type === Syntax.SpreadProperty) {
      var restExpression = restPropertyHelpers.renderRestExpression(
        utils.getTempVar(tmpIndex),
        patternItems
      );
      components.push(item.argument.name + '=' + restExpression);
      continue;
    }

    // Depending on pattern type (Array or Object), we get
    // corresponding pattern item parts.
    var accessor = getPatternItemAccessor(node, item, tmpIndex, idx);
    var value = getPatternItemValue(node, item);

    // TODO(dmitrys): implement default values: {x, y=5}
    if (value.type === Syntax.Identifier) {
      // Simple pattern item.
      components.push(value.name + '=' + accessor);
    } else {
      // Complex sub-structure.
      components.push(
        utils.getTempVarWithValue(++state.localScope.tempVarIndex, accessor) +
        ',' + getDestructuredComponents(value, state)
      );
    }
  }

  return components.join(',');
}

function getPatternItems(node) {
  return node.properties || node.elements;
}

function getPatternItemAccessor(node, patternItem, tmpIndex, idx) {
  var tmpName = utils.getTempVar(tmpIndex);
  if (node.type === Syntax.ObjectPattern) {
    if (reservedWordsHelper.isReservedWord(patternItem.key.name)) {
      return tmpName + '["' + patternItem.key.name + '"]';
    } else if (patternItem.key.type === Syntax.Literal) {
      return tmpName + '[' + JSON.stringify(patternItem.key.value) + ']';
    } else if (patternItem.key.type === Syntax.Identifier) {
      return tmpName + '.' + patternItem.key.name;
    }
  } else if (node.type === Syntax.ArrayPattern) {
    return tmpName + '[' + idx + ']';
  }
}

function getPatternItemValue(node, patternItem) {
  return node.type === Syntax.ObjectPattern
    ? patternItem.value
    : patternItem;
}

// -------------------------------------------------------
// 2. Assignment expression.
//
// [a, b] = [b, a];
// ({x, y} = {y, x});
// -------------------------------------------------------

function visitStructuredAssignment(traverse, node, path, state) {
  var exprNode = node.expression;
  utils.append('var ' + utils.getTempVar(state.localScope.tempVarIndex) + '=', state);

  utils.catchupWhiteSpace(exprNode.right.range[0], state);
  traverse(exprNode.right, path, state);
  utils.catchup(exprNode.right.range[1], state);

  utils.append(
    ';' + getDestructuredComponents(exprNode.left, state) + ';',
    state
  );

  utils.catchupWhiteSpace(node.range[1], state);
  state.localScope.tempVarIndex++;
  return false;
}

visitStructuredAssignment.test = function(node, path, state) {
  // We consider the expression statement rather than just assignment
  // expression to cover case with object patters which should be
  // wrapped in grouping operator: ({x, y} = {y, x});
  return node.type === Syntax.ExpressionStatement &&
    node.expression.type === Syntax.AssignmentExpression &&
    isStructuredPattern(node.expression.left);
};

// -------------------------------------------------------
// 3. Structured parameter.
//
// function foo({x, y}) { ... }
// -------------------------------------------------------

function visitStructuredParameter(traverse, node, path, state) {
  utils.append(utils.getTempVar(getParamIndex(node, path)), state);
  utils.catchupWhiteSpace(node.range[1], state);
  return true;
}

function getParamIndex(paramNode, path) {
  var funcNode = path[0];
  var tmpIndex = 0;
  for (var k = 0; k < funcNode.params.length; k++) {
    var param = funcNode.params[k];
    if (param === paramNode) {
      break;
    }
    if (isStructuredPattern(param)) {
      tmpIndex++;
    }
  }
  return tmpIndex;
}

visitStructuredParameter.test = function(node, path, state) {
  return isStructuredPattern(node) && isFunctionNode(path[0]);
};

function isFunctionNode(node) {
  return (node.type == Syntax.FunctionDeclaration ||
    node.type == Syntax.FunctionExpression ||
    node.type == Syntax.MethodDefinition ||
    node.type == Syntax.ArrowFunctionExpression);
}

// -------------------------------------------------------
// 4. Function body for structured parameters.
//
// function foo({x, y}) { x; y; }
// -------------------------------------------------------

function visitFunctionBodyForStructuredParameter(traverse, node, path, state) {
  var funcNode = path[0];

  utils.catchup(funcNode.body.range[0] + 1, state);
  renderDestructuredComponents(funcNode, state);

  if (funcNode.rest) {
    utils.append(
      restParamVisitors.renderRestParamSetup(funcNode, state),
      state
    );
  }

  return true;
}

function renderDestructuredComponents(funcNode, state) {
  var destructuredComponents = [];

  for (var k = 0; k < funcNode.params.length; k++) {
    var param = funcNode.params[k];
    if (isStructuredPattern(param)) {
      destructuredComponents.push(
        getDestructuredComponents(param, state)
      );
      state.localScope.tempVarIndex++;
    }
  }

  if (destructuredComponents.length) {
    utils.append('var ' + destructuredComponents.join(',') + ';', state);
  }
}

visitFunctionBodyForStructuredParameter.test = function(node, path, state) {
  return node.type === Syntax.BlockStatement && isFunctionNode(path[0]);
};

exports.visitorList = [
  visitStructuredVariable,
  visitStructuredAssignment,
  visitStructuredParameter,
  visitFunctionBodyForStructuredParameter
];

exports.renderDestructuredComponents = renderDestructuredComponents;


},{"../src/utils":22,"./es6-rest-param-visitors":28,"./es7-rest-property-helpers":30,"./reserved-words-helper":32,"esprima-fb":9}],26:[function(_dereq_,module,exports){
/**
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint node:true*/

/**
 * Desugars concise methods of objects to function expressions.
 *
 * var foo = {
 *   method(x, y) { ... }
 * };
 *
 * var foo = {
 *   method: function(x, y) { ... }
 * };
 *
 */

var Syntax = _dereq_('esprima-fb').Syntax;
var utils = _dereq_('../src/utils');
var reservedWordsHelper = _dereq_('./reserved-words-helper');

function visitObjectConciseMethod(traverse, node, path, state) {
  var isGenerator = node.value.generator;
  if (isGenerator) {
    utils.catchupWhiteSpace(node.range[0] + 1, state);
  }
  if (node.computed) { // [<expr>]() { ...}
    utils.catchup(node.key.range[1] + 1, state);
  } else if (reservedWordsHelper.isReservedWord(node.key.name)) {
    utils.catchup(node.key.range[0], state);
    utils.append('"', state);
    utils.catchup(node.key.range[1], state);
    utils.append('"', state);
  }

  utils.catchup(node.key.range[1], state);
  utils.append(
    ':function' + (isGenerator ? '*' : ''),
    state
  );
  path.unshift(node);
  traverse(node.value, path, state);
  path.shift();
  return false;
}

visitObjectConciseMethod.test = function(node, path, state) {
  return node.type === Syntax.Property &&
    node.value.type === Syntax.FunctionExpression &&
    node.method === true;
};

exports.visitorList = [
  visitObjectConciseMethod
];

},{"../src/utils":22,"./reserved-words-helper":32,"esprima-fb":9}],27:[function(_dereq_,module,exports){
/**
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint node: true*/

/**
 * Desugars ES6 Object Literal short notations into ES3 full notation.
 *
 * // Easier return values.
 * function foo(x, y) {
 *   return {x, y}; // {x: x, y: y}
 * };
 *
 * // Destructuring.
 * function init({port, ip, coords: {x, y}}) { ... }
 *
 */
var Syntax = _dereq_('esprima-fb').Syntax;
var utils = _dereq_('../src/utils');

/**
 * @public
 */
function visitObjectLiteralShortNotation(traverse, node, path, state) {
  utils.catchup(node.key.range[1], state);
  utils.append(':' + node.key.name, state);
  return false;
}

visitObjectLiteralShortNotation.test = function(node, path, state) {
  return node.type === Syntax.Property &&
    node.kind === 'init' &&
    node.shorthand === true &&
    path[0].type !== Syntax.ObjectPattern;
};

exports.visitorList = [
  visitObjectLiteralShortNotation
];


},{"../src/utils":22,"esprima-fb":9}],28:[function(_dereq_,module,exports){
/**
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint node:true*/

/**
 * Desugars ES6 rest parameters into an ES3 arguments array.
 *
 * function printf(template, ...args) {
 *   args.forEach(...);
 * }
 *
 * We could use `Array.prototype.slice.call`, but that usage of arguments causes
 * functions to be deoptimized in V8, so instead we use a for-loop.
 *
 * function printf(template) {
 *   for (var args = [], $__0 = 1, $__1 = arguments.length; $__0 < $__1; $__0++)
 *     args.push(arguments[$__0]);
 *   args.forEach(...);
 * }
 *
 */
var Syntax = _dereq_('esprima-fb').Syntax;
var utils = _dereq_('../src/utils');



function _nodeIsFunctionWithRestParam(node) {
  return (node.type === Syntax.FunctionDeclaration
          || node.type === Syntax.FunctionExpression
          || node.type === Syntax.ArrowFunctionExpression)
         && node.rest;
}

function visitFunctionParamsWithRestParam(traverse, node, path, state) {
  if (node.parametricType) {
    utils.catchup(node.parametricType.range[0], state);
    path.unshift(node);
    traverse(node.parametricType, path, state);
    path.shift();
  }

  // Render params.
  if (node.params.length) {
    path.unshift(node);
    traverse(node.params, path, state);
    path.shift();
  } else {
    // -3 is for ... of the rest.
    utils.catchup(node.rest.range[0] - 3, state);
  }
  utils.catchupWhiteSpace(node.rest.range[1], state);

  path.unshift(node);
  traverse(node.body, path, state);
  path.shift();

  return false;
}

visitFunctionParamsWithRestParam.test = function(node, path, state) {
  return _nodeIsFunctionWithRestParam(node);
};

function renderRestParamSetup(functionNode, state) {
  var idx = state.localScope.tempVarIndex++;
  var len = state.localScope.tempVarIndex++;

  return 'for (var ' + functionNode.rest.name + '=[],' +
    utils.getTempVarWithValue(idx, functionNode.params.length) + ',' +
    utils.getTempVarWithValue(len, 'arguments.length') + ';' +
    utils.getTempVar(idx) + '<' +  utils.getTempVar(len) + ';' +
    utils.getTempVar(idx) + '++) ' +
    functionNode.rest.name + '.push(arguments[' + utils.getTempVar(idx) + ']);';
}

function visitFunctionBodyWithRestParam(traverse, node, path, state) {
  utils.catchup(node.range[0] + 1, state);
  var parentNode = path[0];
  utils.append(renderRestParamSetup(parentNode, state), state);
  return true;
}

visitFunctionBodyWithRestParam.test = function(node, path, state) {
  return node.type === Syntax.BlockStatement
         && _nodeIsFunctionWithRestParam(path[0]);
};

exports.renderRestParamSetup = renderRestParamSetup;
exports.visitorList = [
  visitFunctionParamsWithRestParam,
  visitFunctionBodyWithRestParam
];

},{"../src/utils":22,"esprima-fb":9}],29:[function(_dereq_,module,exports){
/**
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint node:true*/

/**
 * @typechecks
 */
'use strict';

var Syntax = _dereq_('esprima-fb').Syntax;
var utils = _dereq_('../src/utils');

/**
 * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-12.1.9
 */
function visitTemplateLiteral(traverse, node, path, state) {
  var templateElements = node.quasis;

  utils.append('(', state);
  for (var ii = 0; ii < templateElements.length; ii++) {
    var templateElement = templateElements[ii];
    if (templateElement.value.raw !== '') {
      utils.append(getCookedValue(templateElement), state);
      if (!templateElement.tail) {
        // + between element and substitution
        utils.append(' + ', state);
      }
      // maintain line numbers
      utils.move(templateElement.range[0], state);
      utils.catchupNewlines(templateElement.range[1], state);
    } else {  // templateElement.value.raw === ''
      // Concatenat adjacent substitutions, e.g. `${x}${y}`. Empty templates
      // appear before the first and after the last element - nothing to add in
      // those cases.
      if (ii > 0 && !templateElement.tail) {
        // + between substitution and substitution
        utils.append(' + ', state);
      }
    }

    utils.move(templateElement.range[1], state);
    if (!templateElement.tail) {
      var substitution = node.expressions[ii];
      if (substitution.type === Syntax.Identifier ||
          substitution.type === Syntax.MemberExpression ||
          substitution.type === Syntax.CallExpression) {
        utils.catchup(substitution.range[1], state);
      } else {
        utils.append('(', state);
        traverse(substitution, path, state);
        utils.catchup(substitution.range[1], state);
        utils.append(')', state);
      }
      // if next templateElement isn't empty...
      if (templateElements[ii + 1].value.cooked !== '') {
        utils.append(' + ', state);
      }
    }
  }
  utils.move(node.range[1], state);
  utils.append(')', state);
  return false;
}

visitTemplateLiteral.test = function(node, path, state) {
  return node.type === Syntax.TemplateLiteral;
};

/**
 * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-12.2.6
 */
function visitTaggedTemplateExpression(traverse, node, path, state) {
  var template = node.quasi;
  var numQuasis = template.quasis.length;

  // print the tag
  utils.move(node.tag.range[0], state);
  traverse(node.tag, path, state);
  utils.catchup(node.tag.range[1], state);

  // print array of template elements
  utils.append('(function() { var siteObj = [', state);
  for (var ii = 0; ii < numQuasis; ii++) {
    utils.append(getCookedValue(template.quasis[ii]), state);
    if (ii !== numQuasis - 1) {
      utils.append(', ', state);
    }
  }
  utils.append(']; siteObj.raw = [', state);
  for (ii = 0; ii < numQuasis; ii++) {
    utils.append(getRawValue(template.quasis[ii]), state);
    if (ii !== numQuasis - 1) {
      utils.append(', ', state);
    }
  }
  utils.append(
    ']; Object.freeze(siteObj.raw); Object.freeze(siteObj); return siteObj; }()',
    state
  );

  // print substitutions
  if (numQuasis > 1) {
    for (ii = 0; ii < template.expressions.length; ii++) {
      var expression = template.expressions[ii];
      utils.append(', ', state);

      // maintain line numbers by calling catchupWhiteSpace over the whole
      // previous TemplateElement
      utils.move(template.quasis[ii].range[0], state);
      utils.catchupNewlines(template.quasis[ii].range[1], state);

      utils.move(expression.range[0], state);
      traverse(expression, path, state);
      utils.catchup(expression.range[1], state);
    }
  }

  // print blank lines to push the closing ) down to account for the final
  // TemplateElement.
  utils.catchupNewlines(node.range[1], state);

  utils.append(')', state);

  return false;
}

visitTaggedTemplateExpression.test = function(node, path, state) {
  return node.type === Syntax.TaggedTemplateExpression;
};

function getCookedValue(templateElement) {
  return JSON.stringify(templateElement.value.cooked);
}

function getRawValue(templateElement) {
  return JSON.stringify(templateElement.value.raw);
}

exports.visitorList = [
  visitTemplateLiteral,
  visitTaggedTemplateExpression
];

},{"../src/utils":22,"esprima-fb":9}],30:[function(_dereq_,module,exports){
/**
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint node:true*/

/**
 * Desugars ES7 rest properties into ES5 object iteration.
 */

var Syntax = _dereq_('esprima-fb').Syntax;
var utils = _dereq_('../src/utils');

// TODO: This is a pretty massive helper, it should only be defined once, in the
// transform's runtime environment. We don't currently have a runtime though.
var restFunction =
  '(function(source, exclusion) {' +
    'var rest = {};' +
    'var hasOwn = Object.prototype.hasOwnProperty;' +
    'if (source == null) {' +
      'throw new TypeError();' +
    '}' +
    'for (var key in source) {' +
      'if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {' +
        'rest[key] = source[key];' +
      '}' +
    '}' +
    'return rest;' +
  '})';

function getPropertyNames(properties) {
  var names = [];
  for (var i = 0; i < properties.length; i++) {
    var property = properties[i];
    if (property.type === Syntax.SpreadProperty) {
      continue;
    }
    if (property.type === Syntax.Identifier) {
      names.push(property.name);
    } else {
      names.push(property.key.name);
    }
  }
  return names;
}

function getRestFunctionCall(source, exclusion) {
  return restFunction + '(' + source + ',' + exclusion + ')';
}

function getSimpleShallowCopy(accessorExpression) {
  // This could be faster with 'Object.assign({}, ' + accessorExpression + ')'
  // but to unify code paths and avoid a ES6 dependency we use the same
  // helper as for the exclusion case.
  return getRestFunctionCall(accessorExpression, '{}');
}

function renderRestExpression(accessorExpression, excludedProperties) {
  var excludedNames = getPropertyNames(excludedProperties);
  if (!excludedNames.length) {
    return getSimpleShallowCopy(accessorExpression);
  }
  return getRestFunctionCall(
    accessorExpression,
    '{' + excludedNames.join(':1,') + ':1}'
  );
}

exports.renderRestExpression = renderRestExpression;

},{"../src/utils":22,"esprima-fb":9}],31:[function(_dereq_,module,exports){
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 */
/*global exports:true*/

/**
 * Implements ES7 object spread property.
 * https://gist.github.com/sebmarkbage/aa849c7973cb4452c547
 *
 * { ...a, x: 1 }
 *
 * Object.assign({}, a, {x: 1 })
 *
 */

var Syntax = _dereq_('esprima-fb').Syntax;
var utils = _dereq_('../src/utils');

function visitObjectLiteralSpread(traverse, node, path, state) {
  utils.catchup(node.range[0], state);

  utils.append('Object.assign({', state);

  // Skip the original {
  utils.move(node.range[0] + 1, state);

  var previousWasSpread = false;

  for (var i = 0; i < node.properties.length; i++) {
    var property = node.properties[i];
    if (property.type === Syntax.SpreadProperty) {

      // Close the previous object or initial object
      if (!previousWasSpread) {
        utils.append('}', state);
      }

      if (i === 0) {
        // Normally there will be a comma when we catch up, but not before
        // the first property.
        utils.append(',', state);
      }

      utils.catchup(property.range[0], state);

      // skip ...
      utils.move(property.range[0] + 3, state);

      traverse(property.argument, path, state);

      utils.catchup(property.range[1], state);

      previousWasSpread = true;

    } else {

      utils.catchup(property.range[0], state);

      if (previousWasSpread) {
        utils.append('{', state);
      }

      traverse(property, path, state);

      utils.catchup(property.range[1], state);

      previousWasSpread = false;

    }
  }

  // Strip any non-whitespace between the last item and the end.
  // We only catch up on whitespace so that we ignore any trailing commas which
  // are stripped out for IE8 support. Unfortunately, this also strips out any
  // trailing comments.
  utils.catchupWhiteSpace(node.range[1] - 1, state);

  // Skip the trailing }
  utils.move(node.range[1], state);

  if (!previousWasSpread) {
    utils.append('}', state);
  }

  utils.append(')', state);
  return false;
}

visitObjectLiteralSpread.test = function(node, path, state) {
  if (node.type !== Syntax.ObjectExpression) {
    return false;
  }
  // Tight loop optimization
  var hasAtLeastOneSpreadProperty = false;
  for (var i = 0; i < node.properties.length; i++) {
    var property = node.properties[i];
    if (property.type === Syntax.SpreadProperty) {
      hasAtLeastOneSpreadProperty = true;
    } else if (property.kind !== 'init') {
      return false;
    }
  }
  return hasAtLeastOneSpreadProperty;
};

exports.visitorList = [
  visitObjectLiteralSpread
];

},{"../src/utils":22,"esprima-fb":9}],32:[function(_dereq_,module,exports){
/**
 * Copyright 2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var KEYWORDS = [
  'break', 'do', 'in', 'typeof', 'case', 'else', 'instanceof', 'var', 'catch',
  'export', 'new', 'void', 'class', 'extends', 'return', 'while', 'const',
  'finally', 'super', 'with', 'continue', 'for', 'switch', 'yield', 'debugger',
  'function', 'this', 'default', 'if', 'throw', 'delete', 'import', 'try'
];

var FUTURE_RESERVED_WORDS = [
  'enum', 'await', 'implements', 'package', 'protected', 'static', 'interface',
  'private', 'public'
];

var LITERALS = [
  'null',
  'true',
  'false'
];

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-reserved-words
var RESERVED_WORDS = [].concat(
  KEYWORDS,
  FUTURE_RESERVED_WORDS,
  LITERALS
);

var reservedWordsMap = Object.create(null);
RESERVED_WORDS.forEach(function(k) {
    reservedWordsMap[k] = true;
});

exports.isReservedWord = function(word) {
  return !!reservedWordsMap[word];
};

},{}],33:[function(_dereq_,module,exports){
var esprima = _dereq_('esprima-fb');
var utils = _dereq_('../src/utils');

var Syntax = esprima.Syntax;

function _isFunctionNode(node) {
  return node.type === Syntax.FunctionDeclaration
         || node.type === Syntax.FunctionExpression
         || node.type === Syntax.ArrowFunctionExpression;
}

function visitClassProperty(traverse, node, path, state) {
  utils.catchup(node.range[0], state);
  utils.catchupWhiteOut(node.range[1], state);
  return false;
}
visitClassProperty.test = function(node, path, state) {
  return node.type === Syntax.ClassProperty;
};

function visitTypeAlias(traverse, node, path, state) {
  utils.catchupWhiteOut(node.range[1], state);
  return false;
}
visitTypeAlias.test = function(node, path, state) {
  return node.type === Syntax.TypeAlias;
};

function visitInterfaceDeclaration(traverse, node, path, state) {
  utils.catchupWhiteOut(node.range[1], state);
  return false;
}
visitInterfaceDeclaration.test = function(node, path, state) {
  return node.type === Syntax.InterfaceDeclaration;
};

function visitDeclare(traverse, node, path, state) {
  utils.catchupWhiteOut(node.range[1], state);
  return false;
}
visitDeclare.test = function(node, path, state) {
  switch (node.type) {
  case Syntax.DeclareVariable:
  case Syntax.DeclareFunction:
  case Syntax.DeclareClass:
  case Syntax.DeclareModule: return true
  }
  return false;
}

function visitFunctionParametricAnnotation(traverse, node, path, state) {
  utils.catchup(node.range[0], state);
  utils.catchupWhiteOut(node.range[1], state);
  return false;
}
visitFunctionParametricAnnotation.test = function(node, path, state) {
  return node.type === Syntax.TypeParameterDeclaration
         && path[0]
         && _isFunctionNode(path[0])
         && node === path[0].typeParameters;
};

function visitFunctionReturnAnnotation(traverse, node, path, state) {
  utils.catchup(node.range[0], state);
  utils.catchupWhiteOut(node.range[1], state);
  return false;
}
visitFunctionReturnAnnotation.test = function(node, path, state) {
  return path[0] && _isFunctionNode(path[0]) && node === path[0].returnType;
};

function visitOptionalFunctionParameterAnnotation(traverse, node, path, state) {
  utils.catchup(node.range[0] + node.name.length, state);
  utils.catchupWhiteOut(node.range[1], state);
  return false;
}
visitOptionalFunctionParameterAnnotation.test = function(node, path, state) {
  return node.type === Syntax.Identifier
         && node.optional
         && path[0]
         && _isFunctionNode(path[0]);
};

function visitTypeAnnotatedIdentifier(traverse, node, path, state) {
  utils.catchup(node.typeAnnotation.range[0], state);
  utils.catchupWhiteOut(node.typeAnnotation.range[1], state);
  return false;
}
visitTypeAnnotatedIdentifier.test = function(node, path, state) {
  return node.type === Syntax.Identifier && node.typeAnnotation;
};

function visitTypeAnnotatedObjectOrArrayPattern(traverse, node, path, state) {
  utils.catchup(node.typeAnnotation.range[0], state);
  utils.catchupWhiteOut(node.typeAnnotation.range[1], state);
  return false;
}
visitTypeAnnotatedObjectOrArrayPattern.test = function(node, path, state) {
  var rightType = node.type === Syntax.ObjectPattern
                || node.type === Syntax.ArrayPattern;
  return rightType && node.typeAnnotation;
};

/**
 * Methods cause trouble, since esprima parses them as a key/value pair, where
 * the location of the value starts at the method body. For example
 * { bar(x:number,...y:Array<number>):number {} }
 * is parsed as
 * { bar: function(x: number, ...y:Array<number>): number {} }
 * except that the location of the FunctionExpression value is 40-something,
 * which is the location of the function body. This means that by the time we
 * visit the params, rest param, and return type organically, we've already
 * catchup()'d passed them.
 */
function visitMethod(traverse, node, path, state) {
  path.unshift(node);
  traverse(node.key, path, state);

  path.unshift(node.value);
  traverse(node.value.params, path, state);
  node.value.rest && traverse(node.value.rest, path, state);
  node.value.returnType && traverse(node.value.returnType, path, state);
  traverse(node.value.body, path, state);

  path.shift();

  path.shift();
  return false;
}

visitMethod.test = function(node, path, state) {
  return (node.type === "Property" && (node.method || node.kind === "set" || node.kind === "get"))
      || (node.type === "MethodDefinition");
};

exports.visitorList = [
  visitClassProperty,
  visitDeclare,
  visitInterfaceDeclaration,
  visitFunctionParametricAnnotation,
  visitFunctionReturnAnnotation,
  visitMethod,
  visitOptionalFunctionParameterAnnotation,
  visitTypeAlias,
  visitTypeAnnotatedIdentifier,
  visitTypeAnnotatedObjectOrArrayPattern
];

},{"../src/utils":22,"esprima-fb":9}],34:[function(_dereq_,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
/*global exports:true*/
"use strict";

var Syntax = _dereq_('jstransform').Syntax;
var utils = _dereq_('jstransform/src/utils');

var FALLBACK_TAGS = _dereq_('./xjs').knownTags;
var renderXJSExpressionContainer =
  _dereq_('./xjs').renderXJSExpressionContainer;
var renderXJSLiteral = _dereq_('./xjs').renderXJSLiteral;
var quoteAttrName = _dereq_('./xjs').quoteAttrName;

var trimLeft = _dereq_('./xjs').trimLeft;

/**
 * Customized desugar processor for React JSX. Currently:
 *
 * <X> </X> => React.createElement(X, null)
 * <X prop="1" /> => React.createElement(X, {prop: '1'}, null)
 * <X prop="2"><Y /></X> => React.createElement(X, {prop:'2'},
 *   React.createElement(Y, null)
 * )
 * <div /> => React.createElement("div", null)
 */

/**
 * Removes all non-whitespace/parenthesis characters
 */
var reNonWhiteParen = /([^\s\(\)])/g;
function stripNonWhiteParen(value) {
  return value.replace(reNonWhiteParen, '');
}

var tagConvention = /^[a-z]|\-/;
function isTagName(name) {
  return tagConvention.test(name);
}

function visitReactTag(traverse, object, path, state) {
  var openingElement = object.openingElement;
  var nameObject = openingElement.name;
  var attributesObject = openingElement.attributes;

  utils.catchup(openingElement.range[0], state, trimLeft);

  if (nameObject.type === Syntax.XJSNamespacedName && nameObject.namespace) {
    throw new Error('Namespace tags are not supported. ReactJSX is not XML.');
  }

  // We assume that the React runtime is already in scope
  utils.append('React.createElement(', state);

  // Identifiers with lower case or hypthens are fallback tags (strings).
  // XJSMemberExpressions are not.
  if (nameObject.type === Syntax.XJSIdentifier && isTagName(nameObject.name)) {
    // This is a temporary error message to assist upgrades
    if (!FALLBACK_TAGS.hasOwnProperty(nameObject.name)) {
      throw new Error(
        'Lower case component names (' + nameObject.name + ') are no longer ' +
        'supported in JSX: See http://fb.me/react-jsx-lower-case'
      );
    }

    utils.append('"' + nameObject.name + '"', state);
    utils.move(nameObject.range[1], state);
  } else {
    // Use utils.catchup in this case so we can easily handle
    // XJSMemberExpressions which look like Foo.Bar.Baz. This also handles
    // XJSIdentifiers that aren't fallback tags.
    utils.move(nameObject.range[0], state);
    utils.catchup(nameObject.range[1], state);
  }

  utils.append(', ', state);

  var hasAttributes = attributesObject.length;

  var hasAtLeastOneSpreadProperty = attributesObject.some(function(attr) {
    return attr.type === Syntax.XJSSpreadAttribute;
  });

  // if we don't have any attributes, pass in null
  if (hasAtLeastOneSpreadProperty) {
    utils.append('React.__spread({', state);
  } else if (hasAttributes) {
    utils.append('{', state);
  } else {
    utils.append('null', state);
  }

  // keep track of if the previous attribute was a spread attribute
  var previousWasSpread = false;

  // write attributes
  attributesObject.forEach(function(attr, index) {
    var isLast = index === attributesObject.length - 1;

    if (attr.type === Syntax.XJSSpreadAttribute) {
      // Close the previous object or initial object
      if (!previousWasSpread) {
        utils.append('}, ', state);
      }

      // Move to the expression start, ignoring everything except parenthesis
      // and whitespace.
      utils.catchup(attr.range[0], state, stripNonWhiteParen);
      // Plus 1 to skip `{`.
      utils.move(attr.range[0] + 1, state);
      utils.catchup(attr.argument.range[0], state, stripNonWhiteParen);

      traverse(attr.argument, path, state);

      utils.catchup(attr.argument.range[1], state);

      // Move to the end, ignoring parenthesis and the closing `}`
      utils.catchup(attr.range[1] - 1, state, stripNonWhiteParen);

      if (!isLast) {
        utils.append(', ', state);
      }

      utils.move(attr.range[1], state);

      previousWasSpread = true;

      return;
    }

    // If the next attribute is a spread, we're effective last in this object
    if (!isLast) {
      isLast = attributesObject[index + 1].type === Syntax.XJSSpreadAttribute;
    }

    if (attr.name.namespace) {
      throw new Error(
         'Namespace attributes are not supported. ReactJSX is not XML.');
    }
    var name = attr.name.name;

    utils.catchup(attr.range[0], state, trimLeft);

    if (previousWasSpread) {
      utils.append('{', state);
    }

    utils.append(quoteAttrName(name), state);
    utils.append(': ', state);

    if (!attr.value) {
      state.g.buffer += 'true';
      state.g.position = attr.name.range[1];
      if (!isLast) {
        utils.append(', ', state);
      }
    } else {
      utils.move(attr.name.range[1], state);
      // Use catchupNewlines to skip over the '=' in the attribute
      utils.catchupNewlines(attr.value.range[0], state);
      if (attr.value.type === Syntax.Literal) {
        renderXJSLiteral(attr.value, isLast, state);
      } else {
        renderXJSExpressionContainer(traverse, attr.value, isLast, path, state);
      }
    }

    utils.catchup(attr.range[1], state, trimLeft);

    previousWasSpread = false;

  });

  if (!openingElement.selfClosing) {
    utils.catchup(openingElement.range[1] - 1, state, trimLeft);
    utils.move(openingElement.range[1], state);
  }

  if (hasAttributes && !previousWasSpread) {
    utils.append('}', state);
  }

  if (hasAtLeastOneSpreadProperty) {
    utils.append(')', state);
  }

  // filter out whitespace
  var childrenToRender = object.children.filter(function(child) {
    return !(child.type === Syntax.Literal
             && typeof child.value === 'string'
             && child.value.match(/^[ \t]*[\r\n][ \t\r\n]*$/));
  });
  if (childrenToRender.length > 0) {
    var lastRenderableIndex;

    childrenToRender.forEach(function(child, index) {
      if (child.type !== Syntax.XJSExpressionContainer ||
          child.expression.type !== Syntax.XJSEmptyExpression) {
        lastRenderableIndex = index;
      }
    });

    if (lastRenderableIndex !== undefined) {
      utils.append(', ', state);
    }

    childrenToRender.forEach(function(child, index) {
      utils.catchup(child.range[0], state, trimLeft);

      var isLast = index >= lastRenderableIndex;

      if (child.type === Syntax.Literal) {
        renderXJSLiteral(child, isLast, state);
      } else if (child.type === Syntax.XJSExpressionContainer) {
        renderXJSExpressionContainer(traverse, child, isLast, path, state);
      } else {
        traverse(child, path, state);
        if (!isLast) {
          utils.append(', ', state);
        }
      }

      utils.catchup(child.range[1], state, trimLeft);
    });
  }

  if (openingElement.selfClosing) {
    // everything up to />
    utils.catchup(openingElement.range[1] - 2, state, trimLeft);
    utils.move(openingElement.range[1], state);
  } else {
    // everything up to </ sdflksjfd>
    utils.catchup(object.closingElement.range[0], state, trimLeft);
    utils.move(object.closingElement.range[1], state);
  }

  utils.append(')', state);
  return false;
}

visitReactTag.test = function(object, path, state) {
  return object.type === Syntax.XJSElement;
};

exports.visitorList = [
  visitReactTag
];

},{"./xjs":36,"jstransform":21,"jstransform/src/utils":22}],35:[function(_dereq_,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
/*global exports:true*/
"use strict";

var Syntax = _dereq_('jstransform').Syntax;
var utils = _dereq_('jstransform/src/utils');

function addDisplayName(displayName, object, state) {
  if (object &&
      object.type === Syntax.CallExpression &&
      object.callee.type === Syntax.MemberExpression &&
      object.callee.object.type === Syntax.Identifier &&
      object.callee.object.name === 'React' &&
      object.callee.property.type === Syntax.Identifier &&
      object.callee.property.name === 'createClass' &&
      object['arguments'].length === 1 &&
      object['arguments'][0].type === Syntax.ObjectExpression) {
    // Verify that the displayName property isn't already set
    var properties = object['arguments'][0].properties;
    var safe = properties.every(function(property) {
      var value = property.key.type === Syntax.Identifier ?
        property.key.name :
        property.key.value;
      return value !== 'displayName';
    });

    if (safe) {
      utils.catchup(object['arguments'][0].range[0] + 1, state);
      utils.append('displayName: "' + displayName + '",', state);
    }
  }
}

/**
 * Transforms the following:
 *
 * var MyComponent = React.createClass({
 *    render: ...
 * });
 *
 * into:
 *
 * var MyComponent = React.createClass({
 *    displayName: 'MyComponent',
 *    render: ...
 * });
 *
 * Also catches:
 *
 * MyComponent = React.createClass(...);
 * exports.MyComponent = React.createClass(...);
 * module.exports = {MyComponent: React.createClass(...)};
 */
function visitReactDisplayName(traverse, object, path, state) {
  var left, right;

  if (object.type === Syntax.AssignmentExpression) {
    left = object.left;
    right = object.right;
  } else if (object.type === Syntax.Property) {
    left = object.key;
    right = object.value;
  } else if (object.type === Syntax.VariableDeclarator) {
    left = object.id;
    right = object.init;
  }

  if (left && left.type === Syntax.MemberExpression) {
    left = left.property;
  }
  if (left && left.type === Syntax.Identifier) {
    addDisplayName(left.name, right, state);
  }
}

visitReactDisplayName.test = function(object, path, state) {
  return (
    object.type === Syntax.AssignmentExpression ||
    object.type === Syntax.Property ||
    object.type === Syntax.VariableDeclarator
  );
};

exports.visitorList = [
  visitReactDisplayName
];

},{"jstransform":21,"jstransform/src/utils":22}],36:[function(_dereq_,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
/*global exports:true*/
"use strict";
var Syntax = _dereq_('jstransform').Syntax;
var utils = _dereq_('jstransform/src/utils');

var knownTags = {
  a: true,
  abbr: true,
  address: true,
  applet: true,
  area: true,
  article: true,
  aside: true,
  audio: true,
  b: true,
  base: true,
  bdi: true,
  bdo: true,
  big: true,
  blockquote: true,
  body: true,
  br: true,
  button: true,
  canvas: true,
  caption: true,
  circle: true,
  cite: true,
  code: true,
  col: true,
  colgroup: true,
  command: true,
  data: true,
  datalist: true,
  dd: true,
  defs: true,
  del: true,
  details: true,
  dfn: true,
  dialog: true,
  div: true,
  dl: true,
  dt: true,
  ellipse: true,
  em: true,
  embed: true,
  fieldset: true,
  figcaption: true,
  figure: true,
  footer: true,
  form: true,
  g: true,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
  head: true,
  header: true,
  hgroup: true,
  hr: true,
  html: true,
  i: true,
  iframe: true,
  img: true,
  input: true,
  ins: true,
  kbd: true,
  keygen: true,
  label: true,
  legend: true,
  li: true,
  line: true,
  linearGradient: true,
  link: true,
  main: true,
  map: true,
  mark: true,
  marquee: true,
  mask: false,
  menu: true,
  menuitem: true,
  meta: true,
  meter: true,
  nav: true,
  noscript: true,
  object: true,
  ol: true,
  optgroup: true,
  option: true,
  output: true,
  p: true,
  param: true,
  path: true,
  pattern: false,
  picture: true,
  polygon: true,
  polyline: true,
  pre: true,
  progress: true,
  q: true,
  radialGradient: true,
  rect: true,
  rp: true,
  rt: true,
  ruby: true,
  s: true,
  samp: true,
  script: true,
  section: true,
  select: true,
  small: true,
  source: true,
  span: true,
  stop: true,
  strong: true,
  style: true,
  sub: true,
  summary: true,
  sup: true,
  svg: true,
  table: true,
  tbody: true,
  td: true,
  text: true,
  textarea: true,
  tfoot: true,
  th: true,
  thead: true,
  time: true,
  title: true,
  tr: true,
  track: true,
  tspan: true,
  u: true,
  ul: true,
  'var': true,
  video: true,
  wbr: true
};

function renderXJSLiteral(object, isLast, state, start, end) {
  var lines = object.value.split(/\r\n|\n|\r/);

  if (start) {
    utils.append(start, state);
  }

  var lastNonEmptyLine = 0;

  lines.forEach(function (line, index) {
    if (line.match(/[^ \t]/)) {
      lastNonEmptyLine = index;
    }
  });

  lines.forEach(function (line, index) {
    var isFirstLine = index === 0;
    var isLastLine = index === lines.length - 1;
    var isLastNonEmptyLine = index === lastNonEmptyLine;

    // replace rendered whitespace tabs with spaces
    var trimmedLine = line.replace(/\t/g, ' ');

    // trim whitespace touching a newline
    if (!isFirstLine) {
      trimmedLine = trimmedLine.replace(/^[ ]+/, '');
    }
    if (!isLastLine) {
      trimmedLine = trimmedLine.replace(/[ ]+$/, '');
    }

    if (!isFirstLine) {
      utils.append(line.match(/^[ \t]*/)[0], state);
    }

    if (trimmedLine || isLastNonEmptyLine) {
      utils.append(
        JSON.stringify(trimmedLine) +
        (!isLastNonEmptyLine ? " + ' ' +" : ''),
        state);

      if (isLastNonEmptyLine) {
        if (end) {
          utils.append(end, state);
        }
        if (!isLast) {
          utils.append(', ', state);
        }
      }

      // only restore tail whitespace if line had literals
      if (trimmedLine && !isLastLine) {
        utils.append(line.match(/[ \t]*$/)[0], state);
      }
    }

    if (!isLastLine) {
      utils.append('\n', state);
    }
  });

  utils.move(object.range[1], state);
}

function renderXJSExpressionContainer(traverse, object, isLast, path, state) {
  // Plus 1 to skip `{`.
  utils.move(object.range[0] + 1, state);
  traverse(object.expression, path, state);

  if (!isLast && object.expression.type !== Syntax.XJSEmptyExpression) {
    // If we need to append a comma, make sure to do so after the expression.
    utils.catchup(object.expression.range[1], state, trimLeft);
    utils.append(', ', state);
  }

  // Minus 1 to skip `}`.
  utils.catchup(object.range[1] - 1, state, trimLeft);
  utils.move(object.range[1], state);
  return false;
}

function quoteAttrName(attr) {
  // Quote invalid JS identifiers.
  if (!/^[a-z_$][a-z\d_$]*$/i.test(attr)) {
    return '"' + attr + '"';
  }
  return attr;
}

function trimLeft(value) {
  return value.replace(/^[ ]+/, '');
}

exports.knownTags = knownTags;
exports.renderXJSExpressionContainer = renderXJSExpressionContainer;
exports.renderXJSLiteral = renderXJSLiteral;
exports.quoteAttrName = quoteAttrName;
exports.trimLeft = trimLeft;

},{"jstransform":21,"jstransform/src/utils":22}],37:[function(_dereq_,module,exports){
/*global exports:true*/
var es6ArrowFunctions = _dereq_('jstransform/visitors/es6-arrow-function-visitors');
var es6Classes = _dereq_('jstransform/visitors/es6-class-visitors');
var es6Destructuring = _dereq_('jstransform/visitors/es6-destructuring-visitors');
var es6ObjectConciseMethod = _dereq_('jstransform/visitors/es6-object-concise-method-visitors');
var es6ObjectShortNotation = _dereq_('jstransform/visitors/es6-object-short-notation-visitors');
var es6RestParameters = _dereq_('jstransform/visitors/es6-rest-param-visitors');
var es6Templates = _dereq_('jstransform/visitors/es6-template-visitors');
var es7SpreadProperty = _dereq_('jstransform/visitors/es7-spread-property-visitors');
var react = _dereq_('./transforms/react');
var reactDisplayName = _dereq_('./transforms/reactDisplayName');

/**
 * Map from transformName => orderedListOfVisitors.
 */
var transformVisitors = {
  'es6-arrow-functions': es6ArrowFunctions.visitorList,
  'es6-classes': es6Classes.visitorList,
  'es6-destructuring': es6Destructuring.visitorList,
  'es6-object-concise-method': es6ObjectConciseMethod.visitorList,
  'es6-object-short-notation': es6ObjectShortNotation.visitorList,
  'es6-rest-params': es6RestParameters.visitorList,
  'es6-templates': es6Templates.visitorList,
  'es7-spread-property': es7SpreadProperty.visitorList,
  'react': react.visitorList.concat(reactDisplayName.visitorList)
};

var transformSets = {
  'harmony': [
    'es6-arrow-functions',
    'es6-object-concise-method',
    'es6-object-short-notation',
    'es6-classes',
    'es6-rest-params',
    'es6-templates',
    'es6-destructuring',
    'es7-spread-property'
  ],
  'react': [
    'react'
  ]
};

/**
 * Specifies the order in which each transform should run.
 */
var transformRunOrder = [
  'es6-arrow-functions',
  'es6-object-concise-method',
  'es6-object-short-notation',
  'es6-classes',
  'es6-rest-params',
  'es6-templates',
  'es6-destructuring',
  'es7-spread-property',
  'react'
];

/**
 * Given a list of transform names, return the ordered list of visitors to be
 * passed to the transform() function.
 *
 * @param {array?} excludes
 * @return {array}
 */
function getAllVisitors(excludes) {
  var ret = [];
  for (var i = 0, il = transformRunOrder.length; i < il; i++) {
    if (!excludes || excludes.indexOf(transformRunOrder[i]) === -1) {
      ret = ret.concat(transformVisitors[transformRunOrder[i]]);
    }
  }
  return ret;
}

/**
 * Given a list of visitor set names, return the ordered list of visitors to be
 * passed to jstransform.
 *
 * @param {array}
 * @return {array}
 */
function getVisitorsBySet(sets) {
  var visitorsToInclude = sets.reduce(function(visitors, set) {
    if (!transformSets.hasOwnProperty(set)) {
      throw new Error('Unknown visitor set: ' + set);
    }
    transformSets[set].forEach(function(visitor) {
      visitors[visitor] = true;
    });
    return visitors;
  }, {});

  var visitorList = [];
  for (var i = 0; i < transformRunOrder.length; i++) {
    if (visitorsToInclude.hasOwnProperty(transformRunOrder[i])) {
      visitorList = visitorList.concat(transformVisitors[transformRunOrder[i]]);
    }
  }

  return visitorList;
}

exports.getVisitorsBySet = getVisitorsBySet;
exports.getAllVisitors = getAllVisitors;
exports.transformVisitors = transformVisitors;

},{"./transforms/react":34,"./transforms/reactDisplayName":35,"jstransform/visitors/es6-arrow-function-visitors":23,"jstransform/visitors/es6-class-visitors":24,"jstransform/visitors/es6-destructuring-visitors":25,"jstransform/visitors/es6-object-concise-method-visitors":26,"jstransform/visitors/es6-object-short-notation-visitors":27,"jstransform/visitors/es6-rest-param-visitors":28,"jstransform/visitors/es6-template-visitors":29,"jstransform/visitors/es7-spread-property-visitors":31}]},{},[1])(1)
});
/*!
 * ReactFire is an open-source JavaScript library that allows you to add a
 * realtime data source to your React apps by providing and easy way to let
 * Firebase populate the state of React components.
 *
 * ReactFire 0.4.0
 * https://github.com/firebase/reactfire/
 * License: MIT
 */
!function(e,t){"use strict";"function"==typeof define&&define.amd?define([],function(){return e.ReactFireMixin=t()}):"object"==typeof exports?module.exports=t():e.ReactFireMixin=t()}(this,function(){"use strict";var e={componentWillMount:function(){this.firebaseRefs={},this.firebaseListeners={}},componentWillUnmount:function(){for(var e in this.firebaseRefs)this.firebaseRefs.hasOwnProperty(e)&&this.unbind(e)},bindAsArray:function(e,t,i){this._bind(e,t,i,!0)},bindAsObject:function(e,t,i){this._bind(e,t,i,!1)},_bind:function(e,t,i,n){this._validateBindVar(t);var r,o;if("[object Object]"!==Object.prototype.toString.call(e)?(r="firebaseRef must be an instance of Firebase",o="INVALID_FIREBASE_REF"):"boolean"!=typeof n&&(r="bindAsArray must be a boolean. Got: "+n,o="INVALID_BIND_AS_ARRAY"),"undefined"!=typeof r){var s=new Error("ReactFire: "+r);throw s.code=o,s}this.firebaseRefs[t]=e.ref(),this.firebaseListeners[t]=e.on("value",function(e){var i={};i[t]=n?this._toArray(e.val()):e.val(),this.setState(i)}.bind(this),i)},unbind:function(e){if(this._validateBindVar(e),"undefined"==typeof this.firebaseRefs[e]){var t=new Error('ReactFire: unexpected value for bindVar. "'+e+'" was either never bound or has already been unbound');throw t.code="UNBOUND_BIND_VARIABLE",t}this.firebaseRefs[e].off("value",this.firebaseListeners[e]),delete this.firebaseRefs[e],delete this.firebaseListeners[e]},_validateBindVar:function(e){var t;if("string"!=typeof e?t="bindVar must be a string. Got: "+e:0===e.length?t='bindVar must be a non-empty string. Got: ""':e.length>768?t="bindVar is too long to be stored in Firebase. Got: "+e:/[\[\].#$\/\u0000-\u001F\u007F]/.test(e)&&(t="bindVar cannot contain any of the following characters: . # $ ] [ /. Got: "+e),"undefined"!=typeof t){var i=new Error("ReactFire: "+t);throw i.code="INVALID_BIND_VARIABLE",i}},_isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},_toArray:function(e){var t=[];if(e)if(this._isArray(e))t=e;else if("object"==typeof e)for(var i in e)e.hasOwnProperty(i)&&t.push(e[i]);return t}};return e});