(self.webpackChunkcipherland_code=self.webpackChunkcipherland_code||[]).push([[2721],{72721:function(e,n,t){e.exports=t(51807)},51807:function(e,n,t){"use strict";var o,a=(o=t(66845))&&"object"==typeof o&&"default"in o?o.default:o,r=t(17664);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function i(e,n){e.prototype=Object.create(n.prototype),function(e,n){for(var t=Object.getOwnPropertyNames(n),o=0;o<t.length;o++){var a=t[o],r=Object.getOwnPropertyDescriptor(n,a);r&&r.configurable&&void 0===e[a]&&Object.defineProperty(e,a,r)}}(e.prototype.constructor=e,n)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e,n,t,o,a,r,s,i){if(!e){var l;if(void 0===n)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[t,o,a,r,s,i],c=0;(l=new Error(n.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}};function c(e,n,t){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=n,e.selectionEnd=t;else{var o=e.createTextRange();o.collapse(!0),o.moveStart("character",n),o.moveEnd("character",t-n),o.select()}}var p={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function f(e,n,t){var o="",a="",r=null,s=[];if(void 0===n&&(n="_"),null==t&&(t=p),!e||"string"!=typeof e)return{maskChar:n,formatChars:t,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var i=!1;return e.split("").forEach((function(e){i=!i&&"\\"===e||(i||!t[e]?(s.push(o.length),o.length===s.length-1&&(a+=e)):r=o.length+1,o+=e,!1)})),{maskChar:n,formatChars:t,prefix:a,mask:o,lastEditablePosition:r,permanents:s}}function h(e,n){return-1!==e.permanents.indexOf(n)}function v(e,n,t){var o=e.mask,a=e.formatChars;if(!t)return!1;if(h(e,n))return o[n]===t;var r=a[o[n]];return new RegExp(r).test(t)}function d(e,n){return n.split("").every((function(n,t){return h(e,t)||!v(e,t,n)}))}function m(e,n){var t=e.maskChar,o=e.prefix;if(!t){for(;n.length>o.length&&h(e,n.length-1);)n=n.slice(0,n.length-1);return n.length}for(var a=o.length,r=n.length;r>=o.length;r--){var s=n[r];if(!h(e,r)&&v(e,r,s)){a=r+1;break}}return a}function g(e,n){return m(e,n)===e.mask.length}function k(e,n){var t=e.maskChar,o=e.mask,a=e.prefix;if(!t){for((n=w(e,"",n,0)).length<a.length&&(n=a);n.length<o.length&&h(e,n.length);)n+=o[n.length];return n}if(n)return w(e,k(e,""),n,0);for(var r=0;r<o.length;r++)h(e,r)?n+=o[r]:n+=t;return n}function w(e,n,t,o){var a=e.mask,r=e.maskChar,s=e.prefix,i=t.split(""),l=g(e,n);return!r&&o>n.length&&(n+=a.slice(n.length,o)),i.every((function(t){for(;c=t,h(e,u=o)&&c!==a[u];){if(o>=n.length&&(n+=a[o]),i=t,r&&h(e,o)&&i===r)return!0;if(++o>=a.length)return!1}var i,u,c;return!v(e,o,t)&&t!==r||(o<n.length?n=r||l||o<s.length?n.slice(0,o)+t+n.slice(o+1):(n=n.slice(0,o)+t+n.slice(o),k(e,n)):r||(n+=t),++o<a.length)})),n}function C(e,n){for(var t=e.mask,o=n;o<t.length;++o)if(!h(e,o))return o;return null}function S(e){return e||0===e?e+"":""}function O(e,n,t,o,a){var r=e.mask,s=e.prefix,i=e.lastEditablePosition,l=n,u="",c=0,p=0,f=Math.min(a.start,t.start);return t.end>a.start?p=(c=function(e,n,t,o){var a=e.mask,r=e.maskChar,s=t.split(""),i=o;return s.every((function(n){for(;s=n,h(e,t=o)&&s!==a[t];)if(++o>=a.length)return!1;var t,s;return(v(e,o,n)||n===r)&&o++,o<a.length})),o-i}(e,0,u=l.slice(a.start,t.end),f))?a.length:0:l.length<o.length&&(p=o.length-l.length),l=o,p&&(1!==p||a.length||(f=a.start===t.start?C(e,t.start):function(e,n){for(var t=n;0<=t;--t)if(!h(e,t))return t;return null}(e,t.start)),l=function(e,n,t,o){var a=t+o,r=e.maskChar,s=e.mask,i=e.prefix,l=n.split("");if(r)return l.map((function(n,o){return o<t||a<=o?n:h(e,o)?s[o]:r})).join("");for(var u=a;u<l.length;u++)h(e,u)&&(l[u]="");return t=Math.max(i.length,t),l.splice(t,a-t),n=l.join(""),k(e,n)}(e,l,f,p)),l=w(e,l,u,f),(f+=c)>=r.length?f=r.length:f<s.length&&!c?f=s.length:f>=s.length&&f<i&&c&&(f=C(e,f)),u||(u=null),{value:l=k(e,l),enteredString:u,selection:{start:f,end:f}}}function M(e){return"function"==typeof e}function I(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function D(e){return(I()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function b(e){(I()||clearTimeout)(e)}var V=function(e){function n(n){var t=e.call(this,n)||this;t.focused=!1,t.mounted=!1,t.previousSelection=null,t.selectionDeferId=null,t.saveSelectionLoopDeferId=null,t.saveSelectionLoop=function(){t.previousSelection=t.getSelection(),t.saveSelectionLoopDeferId=D(t.saveSelectionLoop)},t.runSaveSelectionLoop=function(){null===t.saveSelectionLoopDeferId&&t.saveSelectionLoop()},t.stopSaveSelectionLoop=function(){null!==t.saveSelectionLoopDeferId&&(b(t.saveSelectionLoopDeferId),t.saveSelectionLoopDeferId=null,t.previousSelection=null)},t.getInputDOMNode=function(){if(!t.mounted)return null;var e=r.findDOMNode(l(l(t))),n="undefined"!=typeof window&&e instanceof window.Element;if(e&&!n)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},t.getInputValue=function(){var e=t.getInputDOMNode();return e?e.value:null},t.setInputValue=function(e){var n=t.getInputDOMNode();n&&(t.value=e,n.value=e)},t.setCursorToEnd=function(){var e=m(t.maskOptions,t.value),n=C(t.maskOptions,e);null!==n&&t.setCursorPosition(n)},t.setSelection=function(e,n,o){void 0===o&&(o={});var a=t.getInputDOMNode(),r=t.isFocused();a&&r&&(o.deferred||c(a,e,n),null!==t.selectionDeferId&&b(t.selectionDeferId),t.selectionDeferId=D((function(){t.selectionDeferId=null,c(a,e,n)})),t.previousSelection={start:e,end:n,length:Math.abs(n-e)})},t.getSelection=function(){return function(e){var n=0,t=0;if("selectionStart"in e&&"selectionEnd"in e)n=e.selectionStart,t=e.selectionEnd;else{var o=document.selection.createRange();o.parentElement()===e&&(n=-o.moveStart("character",-e.value.length),t=-o.moveEnd("character",-e.value.length))}return{start:n,end:t,length:t-n}}(t.getInputDOMNode())},t.getCursorPosition=function(){return t.getSelection().start},t.setCursorPosition=function(e){t.setSelection(e,e)},t.isFocused=function(){return t.focused},t.getBeforeMaskedValueChangeConfig=function(){var e=t.maskOptions,n=e.mask,o=e.maskChar,a=e.permanents,r=e.formatChars;return{mask:n,maskChar:o,permanents:a,alwaysShowMask:!!t.props.alwaysShowMask,formatChars:r}},t.isInputAutofilled=function(e,n,o,a){var r=t.getInputDOMNode();try{if(r.matches(":-webkit-autofill"))return!0}catch(u){}return!t.focused||a.end<o.length&&n.end===e.length},t.onChange=function(e){var n=l(l(t)).beforePasteState,o=l(l(t)).previousSelection,a=t.props.beforeMaskedValueChange,r=t.getInputValue(),s=t.value,i=t.getSelection();t.isInputAutofilled(r,i,s,o)&&(s=k(t.maskOptions,""),o={start:0,end:0,length:0}),n&&(o=n.selection,s=n.value,i={start:o.start+r.length,end:o.start+r.length,length:0},r=s.slice(0,o.start)+r+s.slice(o.end),t.beforePasteState=null);var u=O(t.maskOptions,r,i,s,o),c=u.enteredString,p=u.selection,f=u.value;if(M(a)){var h=a({value:f,selection:p},{value:s,selection:o},c,t.getBeforeMaskedValueChangeConfig());f=h.value,p=h.selection}t.setInputValue(f),M(t.props.onChange)&&t.props.onChange(e),t.isWindowsPhoneBrowser?t.setSelection(p.start,p.end,{deferred:!0}):t.setSelection(p.start,p.end)},t.onFocus=function(e){var n=t.props.beforeMaskedValueChange,o=t.maskOptions,a=o.mask,r=o.prefix;if(t.focused=!0,t.mounted=!0,a){if(t.value)m(t.maskOptions,t.value)<t.maskOptions.mask.length&&t.setCursorToEnd();else{var s=k(t.maskOptions,r),i=k(t.maskOptions,s),l=m(t.maskOptions,i),u=C(t.maskOptions,l),c={start:u,end:u};if(M(n)){var p=n({value:i,selection:c},{value:t.value,selection:null},null,t.getBeforeMaskedValueChangeConfig());i=p.value,c=p.selection}var f=i!==t.getInputValue();f&&t.setInputValue(i),f&&M(t.props.onChange)&&t.props.onChange(e),t.setSelection(c.start,c.end)}t.runSaveSelectionLoop()}M(t.props.onFocus)&&t.props.onFocus(e)},t.onBlur=function(e){var n=t.props.beforeMaskedValueChange,o=t.maskOptions.mask;if(t.stopSaveSelectionLoop(),t.focused=!1,o&&!t.props.alwaysShowMask&&d(t.maskOptions,t.value)){var a="";M(n)&&(a=n({value:a,selection:null},{value:t.value,selection:t.previousSelection},null,t.getBeforeMaskedValueChangeConfig()).value);var r=a!==t.getInputValue();r&&t.setInputValue(a),r&&M(t.props.onChange)&&t.props.onChange(e)}M(t.props.onBlur)&&t.props.onBlur(e)},t.onMouseDown=function(e){if(!t.focused&&document.addEventListener){t.mouseDownX=e.clientX,t.mouseDownY=e.clientY,t.mouseDownTime=(new Date).getTime();document.addEventListener("mouseup",(function e(n){if(document.removeEventListener("mouseup",e),t.focused){var o=Math.abs(n.clientX-t.mouseDownX),a=Math.abs(n.clientY-t.mouseDownY),r=Math.max(o,a),s=(new Date).getTime()-t.mouseDownTime;(r<=10&&s<=200||r<=5&&s<=300)&&t.setCursorToEnd()}}))}M(t.props.onMouseDown)&&t.props.onMouseDown(e)},t.onPaste=function(e){M(t.props.onPaste)&&t.props.onPaste(e),e.defaultPrevented||(t.beforePasteState={value:t.getInputValue(),selection:t.getSelection()},t.setInputValue(""))},t.handleRef=function(e){null==t.props.children&&M(t.props.inputRef)&&t.props.inputRef(e)};var o=n.mask,a=n.maskChar,s=n.formatChars,i=n.alwaysShowMask,u=n.beforeMaskedValueChange,p=n.defaultValue,h=n.value;t.maskOptions=f(o,a,s),null==p&&(p=""),null==h&&(h=p);var v=S(h);if(t.maskOptions.mask&&(i||v)&&(v=k(t.maskOptions,v),M(u))){var g=n.value;null==n.value&&(g=p),v=u({value:v,selection:null},{value:g=S(g),selection:null},null,t.getBeforeMaskedValueChangeConfig()).value}return t.value=v,t}i(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),n=new RegExp("phone","i"),t=navigator.userAgent;return e.test(t)&&n.test(t)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},t.componentDidUpdate=function(){var e=this.previousSelection,n=this.props,t=n.beforeMaskedValueChange,o=n.alwaysShowMask,a=n.mask,r=n.maskChar,s=n.formatChars,i=this.maskOptions,l=o||this.isFocused(),u=null!=this.props.value,c=u?S(this.props.value):this.value,p=e?e.start:null;if(this.maskOptions=f(a,r,s),this.maskOptions.mask){!i.mask&&this.isFocused()&&this.runSaveSelectionLoop();var h=this.maskOptions.mask&&this.maskOptions.mask!==i.mask;if(i.mask||u||(c=this.getInputValue()),(h||this.maskOptions.mask&&(c||l))&&(c=k(this.maskOptions,c)),h){var v=m(this.maskOptions,c);(null===p||v<p)&&(p=g(this.maskOptions,c)?v:C(this.maskOptions,v))}!this.maskOptions.mask||!d(this.maskOptions,c)||l||u&&this.props.value||(c="");var w={start:p,end:p};if(M(t)){var O=t({value:c,selection:w},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=O.value,w=O.selection}this.value=c;var I=this.getInputValue()!==this.value;I?(this.setInputValue(this.value),this.forceUpdate()):h&&this.forceUpdate();var D=!1;null!=w.start&&null!=w.end&&(D=!e||e.start!==w.start||e.end!==w.end),(D||I)&&this.setSelection(w.start,w.end)}else i.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},t.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&b(this.selectionDeferId),this.stopSaveSelectionLoop()},t.render=function(){var e,n=this.props,t=(n.mask,n.alwaysShowMask,n.maskChar,n.formatChars,n.inputRef,n.beforeMaskedValueChange,n.children),o=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],0<=n.indexOf(t)||(a[t]=e[t]);return a}(n,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(t){M(t)||u(!1);var r=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],i=s({},o);r.forEach((function(e){return delete i[e]})),e=t(i),r.filter((function(n){return null!=e.props[n]&&e.props[n]!==o[n]})).length&&u(!1)}else e=a.createElement("input",s({ref:this.handleRef},o));var l={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(o.disabled||o.readOnly||(l.onChange=this.onChange,l.onPaste=this.onPaste,l.onMouseDown=this.onMouseDown),null!=o.value&&(l.value=this.value)),e=a.cloneElement(e,l)},n}(a.Component);e.exports=V}}]);