//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map

var vejs = (function () {
    'use strict';

    /**
     * @description
     *
     * This object provides a utility for producing rich Error messages within
     * Angular. It can be called as follows:
     *
     * var exampleMinErr = minErr('example');
     * throw exampleMinErr('one', 'This {0} is {1}', foo, bar);
     *
     * The above creates an instance of minErr in the example namespace. The
     * resulting error will have a namespaced error code of example.one.  The
     * resulting error will replace {0} with the value of foo, and {1} with the
     * value of bar. The object is not restricted in the number of arguments it can
     * take.
     *
     * If fewer arguments are specified than necessary for interpolation, the extra
     * interpolation markers will be preserved in the final string.
     *
     * Since data will be parsed statically during a build step, some restrictions
     * are applied with respect to how minErr instances are created and called.
     * Instances should have names of the form namespaceMinErr for a minErr created
     * using minErr('namespace') . Error codes, namespaces and template strings
     * should all be static strings, not variables or general expressions.
     *
     * @param {string} module The namespace to use for the new minErr instance.
     * @returns {function(string, string, ...): Error} instance
     */

    function minErr(module) {
      return function () {
        var prefix = '[' + (module ? module + ':' : '') + arguments[0] + '] ',
          template = arguments[1],
          templateArgs = arguments,
          message;

        message = prefix + template.replace(/\{\d+\}/g, function (match) {
          var index = +match.slice(1, -1), arg;

          if (index + 2 < templateArgs.length) {
            arg = templateArgs[index + 2];
            if (isFunction(arg)) {
              return arg.toString().replace(/ \{[\s\S]*$/, '');
            } else if (isUndefined(arg)) {
              return 'undefined';
            } else if (!isString(arg)) {
              return toJson(arg);
            }
            return arg;
          }
          return match;
        });

        return new Error(message);
      };
    }

    var $parseMinErr = minErr('$parse');

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     *     Any commits to this file should be reviewed with security in mind.  *
     *   Changes to this file can potentially create security vulnerabilities. *
     *          An approval from 2 Core members with history of modifying      *
     *                         this file is required.                          *
     *                                                                         *
     *  Does the change somehow allow for arbitrary javascript to be executed? *
     *    Or allows for someone to change the prototype of built-in objects?   *
     *     Or gives undesired access to variables likes document or window?    *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
     var forEach = _.forEach;
     var noop = _.noop;
     var isFunction = _.isFunction;
     var isDefined = function(a) { return !_.isUndefined(a); };
     var isUndefined = _.isUndefined;
     var isString = _.isString;
     var isNumber = _.isNumber;
     var lowercase = function(p) { return p.toLocaleLowerCase();  };

    function trim(value) {
      return isString(value) ? value.replace(/^\s*/, '').replace(/\s*$/, '') : value;
    }

     function getValueOf(value) {
         return isFunction(value.valueOf) ? value.valueOf() : objectValueOf.call(value);
     }

     /**
     * Creates a new object without a prototype. This object is useful for lookup without having to
     * guard against prototypically inherited properties via hasOwnProperty.
     *
     * Related micro-benchmarks:
     * - http://jsperf.com/object-create2
     * - http://jsperf.com/proto-map-lookup/2
     * - http://jsperf.com/for-in-vs-object-keys2
     *
     * @returns {Object}
     */
    function createMap() {
      return Object.create(null);
    }

    var objectValueOf = {}.constructor.prototype.valueOf;

    // Sandboxing Angular Expressions
    // ------------------------------
    // Angular expressions are no longer sandboxed. So it is now even easier to access arbitrary JS code by
    // various means such as obtaining a reference to native JS functions like the Function constructor.
    //
    // As an example, consider the following Angular expression:
    //
    //   {}.toString.constructor('alert("evil JS code")')
    //
    // It is important to realize that if you create an expression from a string that contains user provided
    // content then it is possible that your application contains a security vulnerability to an XSS style attack.
    //
    // See https://docs.angularjs.org/guide/security


    function getStringValue(name) {
      // Property names must be strings. This means that non-string objects cannot be used
      // as keys in an object. Any non-string object, including a number, is typecasted
      // into a string via the toString method.
      // -- MDN, https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Property_accessors#Property_names
      //
      // So, to ensure that we are checking the same `name` that JavaScript would use, we cast it
      // to a string. It's not always possible. If `name` is an object and its `toString` method is
      // 'broken' (doesn't return a string, isn't a function, etc.), an error will be thrown:
      //
      // TypeError: Cannot convert object to primitive value
      //
      // For performance reasons, we don't catch this error here and allow it to propagate up the call
      // stack. Note that you'll get the same error in JavaScript if you try to access a property using
      // such a 'broken' object as a key.
      return name + '';
    }


    var OPERATORS = createMap();
    '+ - * / % === !== == != < > <= >= && || ! = |'.split(' ').map(function(operator) { OPERATORS[operator] = true; });
    var ESCAPE = {'n':'\n', 'f':'\f', 'r':'\r', 't':'\t', 'v':'\v', '\'':'\'', '"':'"'};


    /////////////////////////////////////////


    /**
     * @constructor
     */
    var Lexer = function Lexer(options) {
      this.options = options;
    };

    Lexer.prototype = {
      constructor: Lexer,

      lex: function(text) {
        this.text = text;
        this.index = 0;
        this.tokens = [];

        while (this.index < this.text.length) {
          var ch = this.text.charAt(this.index);
          if (ch === '"' || ch === '\'') {
            this.readString(ch);
          } else if (this.isNumber(ch) || ch === '.' && this.isNumber(this.peek())) {
            this.readNumber();
          } else if (this.isIdentifierStart(this.peekMultichar())) {
            this.readIdent();
          } else if (this.is(ch, '(){}[].,;:?')) {
            this.tokens.push({index: this.index, text: ch});
            this.index++;
          } else if (this.isWhitespace(ch)) {
            this.index++;
          } else {
            var ch2 = ch + this.peek();
            var ch3 = ch2 + this.peek(2);
            var op1 = OPERATORS[ch];
            var op2 = OPERATORS[ch2];
            var op3 = OPERATORS[ch3];
            if (op1 || op2 || op3) {
              var token = op3 ? ch3 : (op2 ? ch2 : ch);
              this.tokens.push({index: this.index, text: token, operator: true});
              this.index += token.length;
            } else {
              this.throwError('Unexpected next character ', this.index, this.index + 1);
            }
          }
        }
        return this.tokens;
      },

      is: function(ch, chars) {
        return chars.indexOf(ch) !== -1;
      },

      peek: function(i) {
        var num = i || 1;
        return (this.index + num < this.text.length) ? this.text.charAt(this.index + num) : false;
      },

      isNumber: function(ch) {
        return ('0' <= ch && ch <= '9') && typeof ch === 'string';
      },

      isWhitespace: function(ch) {
        // IE treats non-breaking space as \u00A0
        return (ch === ' ' || ch === '\r' || ch === '\t' ||
                ch === '\n' || ch === '\v' || ch === '\u00A0');
      },

      isIdentifierStart: function(ch) {
        return this.options.isIdentifierStart ?
            this.options.isIdentifierStart(ch, this.codePointAt(ch)) :
            this.isValidIdentifierStart(ch);
      },

      isValidIdentifierStart: function(ch) {
        return ('a' <= ch && ch <= 'z' ||
                'A' <= ch && ch <= 'Z' ||
                '_' === ch || ch === '$');
      },

      isIdentifierContinue: function(ch) {
        return this.options.isIdentifierContinue ?
            this.options.isIdentifierContinue(ch, this.codePointAt(ch)) :
            this.isValidIdentifierContinue(ch);
      },

      isValidIdentifierContinue: function(ch, cp) {
        return this.isValidIdentifierStart(ch, cp) || this.isNumber(ch);
      },

      codePointAt: function(ch) {
        if (ch.length === 1) return ch.charCodeAt(0);
        // eslint-disable-next-line no-bitwise
        return (ch.charCodeAt(0) << 10) + ch.charCodeAt(1) - 0x35FDC00;
      },

      peekMultichar: function() {
        var ch = this.text.charAt(this.index);
        var peek = this.peek();
        if (!peek) {
          return ch;
        }
        var cp1 = ch.charCodeAt(0);
        var cp2 = peek.charCodeAt(0);
        if (cp1 >= 0xD800 && cp1 <= 0xDBFF && cp2 >= 0xDC00 && cp2 <= 0xDFFF) {
          return ch + peek;
        }
        return ch;
      },

      isExpOperator: function(ch) {
        return (ch === '-' || ch === '+' || this.isNumber(ch));
      },

      throwError: function(error, start, end) {
        end = end || this.index;
        var colStr = (isDefined(start)
                ? 's ' + start +  '-' + this.index + ' [' + this.text.substring(start, end) + ']'
                : ' ' + end);
        throw $parseMinErr('lexerr', 'Lexer Error: {0} at column{1} in expression [{2}].',
            error, colStr, this.text);
      },

      readNumber: function() {
        var number = '';
        var start = this.index;
        while (this.index < this.text.length) {
          var ch = lowercase(this.text.charAt(this.index));
          if (ch === '.' || this.isNumber(ch)) {
            number += ch;
          } else {
            var peekCh = this.peek();
            if (ch === 'e' && this.isExpOperator(peekCh)) {
              number += ch;
            } else if (this.isExpOperator(ch) &&
                peekCh && this.isNumber(peekCh) &&
                number.charAt(number.length - 1) === 'e') {
              number += ch;
            } else if (this.isExpOperator(ch) &&
                (!peekCh || !this.isNumber(peekCh)) &&
                number.charAt(number.length - 1) === 'e') {
              this.throwError('Invalid exponent');
            } else {
              break;
            }
          }
          this.index++;
        }
        this.tokens.push({
          index: start,
          text: number,
          constant: true,
          value: Number(number)
        });
      },

      readIdent: function() {
        var start = this.index;
        this.index += this.peekMultichar().length;
        while (this.index < this.text.length) {
          var ch = this.peekMultichar();
          if (!this.isIdentifierContinue(ch)) {
            break;
          }
          this.index += ch.length;
        }
        this.tokens.push({
          index: start,
          text: this.text.slice(start, this.index),
          identifier: true
        });
      },

      readString: function(quote) {
        var start = this.index;
        this.index++;
        var string = '';
        var rawString = quote;
        var escape = false;
        while (this.index < this.text.length) {
          var ch = this.text.charAt(this.index);
          rawString += ch;
          if (escape) {
            if (ch === 'u') {
              var hex = this.text.substring(this.index + 1, this.index + 5);
              if (!hex.match(/[\da-f]{4}/i)) {
                this.throwError('Invalid unicode escape [\\u' + hex + ']');
              }
              this.index += 4;
              string += String.fromCharCode(parseInt(hex, 16));
            } else {
              var rep = ESCAPE[ch];
              string = string + (rep || ch);
            }
            escape = false;
          } else if (ch === '\\') {
            escape = true;
          } else if (ch === quote) {
            this.index++;
            this.tokens.push({
              index: start,
              text: rawString,
              constant: true,
              value: string
            });
            return;
          } else {
            string += ch;
          }
          this.index++;
        }
        this.throwError('Unterminated quote', start);
      }
    };

    var AST = function AST(lexer, options) {
      this.lexer = lexer;
      this.options = options;
    };

    AST.Program = 'Program';
    AST.ExpressionStatement = 'ExpressionStatement';
    AST.AssignmentExpression = 'AssignmentExpression';
    AST.ConditionalExpression = 'ConditionalExpression';
    AST.LogicalExpression = 'LogicalExpression';
    AST.BinaryExpression = 'BinaryExpression';
    AST.UnaryExpression = 'UnaryExpression';
    AST.CallExpression = 'CallExpression';
    AST.MemberExpression = 'MemberExpression';
    AST.Identifier = 'Identifier';
    AST.Literal = 'Literal';
    AST.ArrayExpression = 'ArrayExpression';
    AST.Property = 'Property';
    AST.ObjectExpression = 'ObjectExpression';
    AST.ThisExpression = 'ThisExpression';
    AST.LocalsExpression = 'LocalsExpression';

    AST.prototype = {
      ast: function(text) {
        this.text = text;
        this.tokens = this.lexer.lex(text);

        var value = this.program();

        if (this.tokens.length !== 0) {
          this.throwError('is an unexpected token', this.tokens[0]);
        }

        return value;
      },

      program: function() {
        var body = [];
        while (true) {
          if (this.tokens.length > 0 && !this.peek('}', ')', ';', ']'))
            body.push(this.expressionStatement());
          if (!this.expect(';')) {
            return { type: AST.Program, body: body};
          }
        }
      },

      expressionStatement: function() {
        return { type: AST.ExpressionStatement, expression: this.filterChain() };
      },

      filterChain: function() {
        var left = this.expression();
        while (this.expect('|')) {
          left = this.filter(left);
        }
        return left;
      },

      expression: function() {
        return this.assignment();
      },

      assignment: function() {
        var result = this.ternary();
        if (this.expect('=')) {
          if (!isAssignable(result)) {
            throw $parseMinErr('lval', 'Trying to assign a value to a non l-value');
          }

          result = { type: AST.AssignmentExpression, left: result, right: this.assignment(), operator: '='};
        }
        return result;
      },

      ternary: function() {
        var test = this.logicalOR();
        var alternate;
        var consequent;
        if (this.expect('?')) {
          alternate = this.expression();
          if (this.consume(':')) {
            consequent = this.expression();
            return { type: AST.ConditionalExpression, test: test, alternate: alternate, consequent: consequent};
          }
        }
        return test;
      },

      logicalOR: function() {
        var left = this.logicalAND();
        while (this.expect('||')) {
          left = { type: AST.LogicalExpression, operator: '||', left: left, right: this.logicalAND() };
        }
        return left;
      },

      logicalAND: function() {
        var left = this.equality();
        while (this.expect('&&')) {
          left = { type: AST.LogicalExpression, operator: '&&', left: left, right: this.equality()};
        }
        return left;
      },

      equality: function() {
        var left = this.relational();
        var token;
        while ((token = this.expect('==','!=','===','!=='))) {
          left = { type: AST.BinaryExpression, operator: token.text, left: left, right: this.relational() };
        }
        return left;
      },

      relational: function() {
        var left = this.additive();
        var token;
        while ((token = this.expect('<', '>', '<=', '>='))) {
          left = { type: AST.BinaryExpression, operator: token.text, left: left, right: this.additive() };
        }
        return left;
      },

      additive: function() {
        var left = this.multiplicative();
        var token;
        while ((token = this.expect('+','-'))) {
          left = { type: AST.BinaryExpression, operator: token.text, left: left, right: this.multiplicative() };
        }
        return left;
      },

      multiplicative: function() {
        var left = this.unary();
        var token;
        while ((token = this.expect('*','/','%'))) {
          left = { type: AST.BinaryExpression, operator: token.text, left: left, right: this.unary() };
        }
        return left;
      },

      unary: function() {
        var token;
        if ((token = this.expect('+', '-', '!'))) {
          return { type: AST.UnaryExpression, operator: token.text, prefix: true, argument: this.unary() };
        } else {
          return this.primary();
        }
      },

      primary: function() {
        var primary;
        if (this.expect('(')) {
          primary = this.filterChain();
          this.consume(')');
        } else if (this.expect('[')) {
          primary = this.arrayDeclaration();
        } else if (this.expect('{')) {
          primary = this.object();
        } else if (this.selfReferential.hasOwnProperty(this.peek().text)) {
          primary = copy(this.selfReferential[this.consume().text]);
        } else if (this.options.literals.hasOwnProperty(this.peek().text)) {
          primary = { type: AST.Literal, value: this.options.literals[this.consume().text]};
        } else if (this.peek().identifier) {
          primary = this.identifier();
        } else if (this.peek().constant) {
          primary = this.constant();
        } else {
          this.throwError('not a primary expression', this.peek());
        }

        var next;
        while ((next = this.expect('(', '[', '.'))) {
          if (next.text === '(') {
            primary = {type: AST.CallExpression, callee: primary, arguments: this.parseArguments() };
            this.consume(')');
          } else if (next.text === '[') {
            primary = { type: AST.MemberExpression, object: primary, property: this.expression(), computed: true };
            this.consume(']');
          } else if (next.text === '.') {
            primary = { type: AST.MemberExpression, object: primary, property: this.identifier(), computed: false };
          } else {
            this.throwError('IMPOSSIBLE');
          }
        }
        return primary;
      },

      filter: function(baseExpression) {
        var args = [baseExpression];
        var result = {type: AST.CallExpression, callee: this.identifier(), arguments: args, filter: true};

        while (this.expect(':')) {
          args.push(this.expression());
        }

        return result;
      },

      parseArguments: function() {
        var args = [];
        if (this.peekToken().text !== ')') {
          do {
            args.push(this.filterChain());
          } while (this.expect(','));
        }
        return args;
      },

      identifier: function() {
        var token = this.consume();
        if (!token.identifier) {
          this.throwError('is not a valid identifier', token);
        }
        return { type: AST.Identifier, name: token.text };
      },

      constant: function() {
        // TODO check that it is a constant
        return { type: AST.Literal, value: this.consume().value };
      },

      arrayDeclaration: function() {
        var elements = [];
        if (this.peekToken().text !== ']') {
          do {
            if (this.peek(']')) {
              // Support trailing commas per ES5.1.
              break;
            }
            elements.push(this.expression());
          } while (this.expect(','));
        }
        this.consume(']');

        return { type: AST.ArrayExpression, elements: elements };
      },

      object: function() {
        var properties = [], property;
        if (this.peekToken().text !== '}') {
          do {
            if (this.peek('}')) {
              // Support trailing commas per ES5.1.
              break;
            }
            property = {type: AST.Property, kind: 'init'};
            if (this.peek().constant) {
              property.key = this.constant();
              property.computed = false;
              this.consume(':');
              property.value = this.expression();
            } else if (this.peek().identifier) {
              property.key = this.identifier();
              property.computed = false;
              if (this.peek(':')) {
                this.consume(':');
                property.value = this.expression();
              } else {
                property.value = property.key;
              }
            } else if (this.peek('[')) {
              this.consume('[');
              property.key = this.expression();
              this.consume(']');
              property.computed = true;
              this.consume(':');
              property.value = this.expression();
            } else {
              this.throwError('invalid key', this.peek());
            }
            properties.push(property);
          } while (this.expect(','));
        }
        this.consume('}');

        return {type: AST.ObjectExpression, properties: properties };
      },

      throwError: function(msg, token) {
        throw console.log('syntax',
            'Syntax Error: Token \'{0}\' {1} at column {2} of the expression [{3}] starting at [{4}].',
              token.text, msg, (token.index + 1), this.text, this.text.substring(token.index));
      },

      consume: function(e1) {
        if (this.tokens.length === 0) {
          throw $parseMinErr('ueoe', 'Unexpected end of expression: {0}', this.text);
        }

        var token = this.expect(e1);
        if (!token) {
          this.throwError('is unexpected, expecting [' + e1 + ']', this.peek());
        }
        return token;
      },

      peekToken: function() {
        if (this.tokens.length === 0) {
          throw $parseMinErr('ueoe', 'Unexpected end of expression: {0}', this.text);
        }
        return this.tokens[0];
      },

      peek: function(e1, e2, e3, e4) {
        return this.peekAhead(0, e1, e2, e3, e4);
      },

      peekAhead: function(i, e1, e2, e3, e4) {
        if (this.tokens.length > i) {
          var token = this.tokens[i];
          var t = token.text;
          if (t === e1 || t === e2 || t === e3 || t === e4 ||
              (!e1 && !e2 && !e3 && !e4)) {
            return token;
          }
        }
        return false;
      },

      expect: function(e1, e2, e3, e4) {
        var token = this.peek(e1, e2, e3, e4);
        if (token) {
          this.tokens.shift();
          return token;
        }
        return false;
      },

      selfReferential: {
        'this': {type: AST.ThisExpression },
        '$locals': {type: AST.LocalsExpression }
      }
    };

    function ifDefined(v, d) {
      return typeof v !== 'undefined' ? v : d;
    }

    function plusFn(l, r) {
      if (typeof l === 'undefined') return r;
      if (typeof r === 'undefined') return l;
      return l + r;
    }

    function isStateless($filter, filterName) {
      var fn = $filter(filterName);
      return !fn.$stateful;
    }

    function getInputs(body) {
      if (body.length !== 1) return;
      var lastExpression = body[0].expression;
    }

    function isAssignable(ast) {
      return ast.type === AST.Identifier || ast.type === AST.MemberExpression;
    }

    function assignableAST(ast) {
      if (ast.body.length === 1 && isAssignable(ast.body[0].expression)) {
        return {type: AST.AssignmentExpression, left: ast.body[0].expression, right: {type: AST.NGValueParameter}, operator: '='};
      }
    }

    function isLiteral(ast) {
      return ast.body.length === 0 ||
          ast.body.length === 1 && (
          ast.body[0].expression.type === AST.Literal ||
          ast.body[0].expression.type === AST.ArrayExpression ||
          ast.body[0].expression.type === AST.ObjectExpression);
    }

    function isConstant(ast) {
      return ast.constant;
    }

    function ASTCompiler(astBuilder, $filter) {
      this.astBuilder = astBuilder;
      this.$filter = $filter;
    }

    ASTCompiler.prototype = {
      compile: function(expression) {
        var self = this;
        var ast = this.astBuilder.ast(expression);
        this.state = {
          nextId: 0,
          filters: {},
          fn: {vars: [], body: [], own: {}},
          assign: {vars: [], body: [], own: {}},
          inputs: []
        };
        var extra = '';
        var assignable;
        this.stage = 'assign';
        if ((assignable = assignableAST(ast))) {
          this.state.computing = 'assign';
          var result = this.nextId();
          this.recurse(assignable, result);
          this.return_(result);
          extra = 'fn.assign=' + this.generateFunction('assign', 's,v,l');
        }
        self.stage = 'inputs';
        this.state.computing = 'fn';
        this.stage = 'main';
        this.recurse(ast);
        var fnString =
          // The build and minification steps remove the string "use strict" from the code, but this is done using a regex.
          // This is a workaround for this until we do a better job at only removing the prefix only when we should.
          '"' + this.USE + ' ' + this.STRICT + '";\n' +
          this.filterPrefix() +
          'var fn=' + this.generateFunction('fn', 's,l,a,i') +
          extra +
          this.watchFns() +
          'return fn;';

        // eslint-disable-next-line no-new-func
        var fn = (new Function('$filter',
            'getStringValue',
            'ifDefined',
            'plus',
            'text',
            fnString))(
              this.$filter,
              getStringValue,
              ifDefined,
              plusFn,
              expression);
        this.state = this.stage = undefined;
        fn.literal = isLiteral(ast);
        fn.constant = isConstant(ast);
        return fn;
      },

      USE: 'use',

      STRICT: 'strict',

      watchFns: function() {
        var result = [];
        var fns = this.state.inputs;
        var self = this;
        forEach(fns, function(name) {
          result.push('var ' + name + '=' + self.generateFunction(name, 's'));
        });
        if (fns.length) {
          result.push('fn.inputs=[' + fns.join(',') + '];');
        }
        return result.join('');
      },

      generateFunction: function(name, params) {
        return 'function(' + params + '){' +
            this.varsPrefix(name) +
            this.body(name) +
            '};';
      },

      filterPrefix: function() {
        var parts = [];
        var self = this;
        forEach(this.state.filters, function(id, filter) {
          parts.push(id + '=$filter(' + self.escape(filter) + ')');
        });
        if (parts.length) return 'var ' + parts.join(',') + ';';
        return '';
      },

      varsPrefix: function(section) {
        return this.state[section].vars.length ? 'var ' + this.state[section].vars.join(',') + ';' : '';
      },

      body: function(section) {
        return this.state[section].body.join('');
      },

      recurse: function(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck) {
        var left, right, self = this, args, expression, computed;
        recursionFn = recursionFn || noop;
        if (!skipWatchIdCheck && isDefined(ast.watchId)) {
          intoId = intoId || this.nextId();
          this.if_('i',
            this.lazyAssign(intoId, this.computedMember('i', ast.watchId)),
            this.lazyRecurse(ast, intoId, nameId, recursionFn, create, true)
          );
          return;
        }
        switch (ast.type) {
        case AST.Program:
          forEach(ast.body, function(expression, pos) {
            self.recurse(expression.expression, undefined, undefined, function(expr) { right = expr; });
            if (pos !== ast.body.length - 1) {
              self.current().body.push(right, ';');
            } else {
              self.return_(right);
            }
          });
          break;
        case AST.Literal:
          expression = this.escape(ast.value);
          this.assign(intoId, expression);
          recursionFn(intoId || expression);
          break;
        case AST.UnaryExpression:
          this.recurse(ast.argument, undefined, undefined, function(expr) { right = expr; });
          expression = ast.operator + '(' + this.ifDefined(right, 0) + ')';
          this.assign(intoId, expression);
          recursionFn(expression);
          break;
        case AST.BinaryExpression:
          this.recurse(ast.left, undefined, undefined, function(expr) { left = expr; });
          this.recurse(ast.right, undefined, undefined, function(expr) { right = expr; });
          if (ast.operator === '+') {
            expression = this.plus(left, right);
          } else if (ast.operator === '-') {
            expression = this.ifDefined(left, 0) + ast.operator + this.ifDefined(right, 0);
          } else {
            expression = '(' + left + ')' + ast.operator + '(' + right + ')';
          }
          this.assign(intoId, expression);
          recursionFn(expression);
          break;
        case AST.LogicalExpression:
          intoId = intoId || this.nextId();
          self.recurse(ast.left, intoId);
          self.if_(ast.operator === '&&' ? intoId : self.not(intoId), self.lazyRecurse(ast.right, intoId));
          recursionFn(intoId);
          break;
        case AST.ConditionalExpression:
          intoId = intoId || this.nextId();
          self.recurse(ast.test, intoId);
          self.if_(intoId, self.lazyRecurse(ast.alternate, intoId), self.lazyRecurse(ast.consequent, intoId));
          recursionFn(intoId);
          break;
        case AST.Identifier:
          intoId = intoId || this.nextId();
          if (nameId) {
            nameId.context = self.stage === 'inputs' ? 's' : this.assign(this.nextId(), this.getHasOwnProperty('l', ast.name) + '?l:s');
            nameId.computed = false;
            nameId.name = ast.name;
          }
          self.if_(self.stage === 'inputs' || self.not(self.getHasOwnProperty('l', ast.name)),
            function() {
              self.if_(self.stage === 'inputs' || 's', function() {
                if (create && create !== 1) {
                  self.if_(
                    self.isNull(self.nonComputedMember('s', ast.name)),
                    self.lazyAssign(self.nonComputedMember('s', ast.name), '{}'));
                }
                self.assign(intoId, self.nonComputedMember('s', ast.name));
              });
            }, intoId && self.lazyAssign(intoId, self.nonComputedMember('l', ast.name))
            );
          recursionFn(intoId);
          break;
        case AST.MemberExpression:
          left = nameId && (nameId.context = this.nextId()) || this.nextId();
          intoId = intoId || this.nextId();
          self.recurse(ast.object, left, undefined, function() {
            self.if_(self.notNull(left), function() {
              if (ast.computed) {
                right = self.nextId();
                self.recurse(ast.property, right);
                self.getStringValue(right);
                if (create && create !== 1) {
                  self.if_(self.not(self.computedMember(left, right)), self.lazyAssign(self.computedMember(left, right), '{}'));
                }
                expression = self.computedMember(left, right);
                self.assign(intoId, expression);
                if (nameId) {
                  nameId.computed = true;
                  nameId.name = right;
                }
              } else {
                if (create && create !== 1) {
                  self.if_(self.isNull(self.nonComputedMember(left, ast.property.name)), self.lazyAssign(self.nonComputedMember(left, ast.property.name), '{}'));
                }
                expression = self.nonComputedMember(left, ast.property.name);
                self.assign(intoId, expression);
                if (nameId) {
                  nameId.computed = false;
                  nameId.name = ast.property.name;
                }
              }
            }, function() {
              self.assign(intoId, 'undefined');
            });
            recursionFn(intoId);
          }, !!create);
          break;
        case AST.CallExpression:
          intoId = intoId || this.nextId();
          if (ast.filter) {
            right = self.filter(ast.callee.name);
            args = [];
            forEach(ast.arguments, function(expr) {
              var argument = self.nextId();
              self.recurse(expr, argument);
              args.push(argument);
            });
            expression = right + '(' + args.join(',') + ')';
            self.assign(intoId, expression);
            recursionFn(intoId);
          } else {
            right = self.nextId();
            left = {};
            args = [];
            self.recurse(ast.callee, right, left, function() {
              self.if_(self.notNull(right), function() {
                forEach(ast.arguments, function(expr) {
                  self.recurse(expr, ast.constant ? undefined : self.nextId(), undefined, function(argument) {
                    args.push(argument);
                  });
                });
                if (left.name) {
                  expression = self.member(left.context, left.name, left.computed) + '(' + args.join(',') + ')';
                } else {
                  expression = right + '(' + args.join(',') + ')';
                }
                self.assign(intoId, expression);
              }, function() {
                self.assign(intoId, 'undefined');
              });
              recursionFn(intoId);
            });
          }
          break;
        case AST.AssignmentExpression:
          right = this.nextId();
          left = {};
          this.recurse(ast.left, undefined, left, function() {
            self.if_(self.notNull(left.context), function() {
              self.recurse(ast.right, right);
              expression = self.member(left.context, left.name, left.computed) + ast.operator + right;
              self.assign(intoId, expression);
              recursionFn(intoId || expression);
            });
          }, 1);
          break;
        case AST.ArrayExpression:
          args = [];
          forEach(ast.elements, function(expr) {
            self.recurse(expr, ast.constant ? undefined : self.nextId(), undefined, function(argument) {
              args.push(argument);
            });
          });
          expression = '[' + args.join(',') + ']';
          this.assign(intoId, expression);
          recursionFn(intoId || expression);
          break;
        case AST.ObjectExpression:
          args = [];
          computed = false;
          forEach(ast.properties, function(property) {
            if (property.computed) {
              computed = true;
            }
          });
          if (computed) {
            intoId = intoId || this.nextId();
            this.assign(intoId, '{}');
            forEach(ast.properties, function(property) {
              if (property.computed) {
                left = self.nextId();
                self.recurse(property.key, left);
              } else {
                left = property.key.type === AST.Identifier ?
                           property.key.name :
                           ('' + property.key.value);
              }
              right = self.nextId();
              self.recurse(property.value, right);
              self.assign(self.member(intoId, left, property.computed), right);
            });
          } else {
            forEach(ast.properties, function(property) {
              self.recurse(property.value, ast.constant ? undefined : self.nextId(), undefined, function(expr) {
                args.push(self.escape(
                    property.key.type === AST.Identifier ? property.key.name :
                      ('' + property.key.value)) +
                    ':' + expr);
              });
            });
            expression = '{' + args.join(',') + '}';
            this.assign(intoId, expression);
          }
          recursionFn(intoId || expression);
          break;
        case AST.ThisExpression:
          this.assign(intoId, 's');
          recursionFn(intoId || 's');
          break;
        case AST.LocalsExpression:
          this.assign(intoId, 'l');
          recursionFn(intoId || 'l');
          break;
        case AST.NGValueParameter:
          this.assign(intoId, 'v');
          recursionFn(intoId || 'v');
          break;
        }
      },

      getHasOwnProperty: function(element, property) {
        var key = element + '.' + property;
        var own = this.current().own;
        if (!own.hasOwnProperty(key)) {
          own[key] = this.nextId(false, element + '&&(' + this.escape(property) + ' in ' + element + ')');
        }
        return own[key];
      },

      assign: function(id, value) {
        if (!id) return;
        this.current().body.push(id, '=', value, ';');
        return id;
      },

      filter: function(filterName) {
        if (!this.state.filters.hasOwnProperty(filterName)) {
          this.state.filters[filterName] = this.nextId(true);
        }
        return this.state.filters[filterName];
      },

      ifDefined: function(id, defaultValue) {
        return 'ifDefined(' + id + ',' + this.escape(defaultValue) + ')';
      },

      plus: function(left, right) {
        return 'plus(' + left + ',' + right + ')';
      },

      return_: function(id) {
        this.current().body.push('return ', id, ';');
      },

      if_: function(test, alternate, consequent) {
        if (test === true) {
          alternate();
        } else {
          var body = this.current().body;
          body.push('if(', test, '){');
          alternate();
          body.push('}');
          if (consequent) {
            body.push('else{');
            consequent();
            body.push('}');
          }
        }
      },

      not: function(expression) {
        return '!(' + expression + ')';
      },

      isNull: function(expression) {
        return expression + '==null';
      },

      notNull: function(expression) {
        return expression + '!=null';
      },

      nonComputedMember: function(left, right) {
        var SAFE_IDENTIFIER = /^[$_a-zA-Z][$_a-zA-Z0-9]*$/;
        var UNSAFE_CHARACTERS = /[^$_a-zA-Z0-9]/g;
        if (SAFE_IDENTIFIER.test(right)) {
          return left + '.' + right;
        } else {
          return left  + '["' + right.replace(UNSAFE_CHARACTERS, this.stringEscapeFn) + '"]';
        }
      },

      computedMember: function(left, right) {
        return left + '[' + right + ']';
      },

      member: function(left, right, computed) {
        if (computed) return this.computedMember(left, right);
        return this.nonComputedMember(left, right);
      },

      getStringValue: function(item) {
        this.assign(item, 'getStringValue(' + item + ')');
      },

      lazyRecurse: function(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck) {
        var self = this;
        return function() {
          self.recurse(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck);
        };
      },

      lazyAssign: function(id, value) {
        var self = this;
        return function() {
          self.assign(id, value);
        };
      },

      stringEscapeRegex: /[^ a-zA-Z0-9]/g,

      stringEscapeFn: function(c) {
        return '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
      },

      escape: function(value) {
        if (isString(value)) return '\'' + value.replace(this.stringEscapeRegex, this.stringEscapeFn) + '\'';
        if (isNumber(value)) return value.toString();
        if (value === true) return 'true';
        if (value === false) return 'false';
        if (value === null) return 'null';
        if (typeof value === 'undefined') return 'undefined';

        throw $parseMinErr('esc', 'IMPOSSIBLE');
      },

      nextId: function(skip, init) {
        var id = 'v' + (this.state.nextId++);
        if (!skip) {
          this.current().vars.push(id + (init ? '=' + init : ''));
        }
        return id;
      },

      current: function() {
        return this.state[this.state.computing];
      }
    };


    function ASTInterpreter(astBuilder, $filter) {
      this.astBuilder = astBuilder;
      this.$filter = $filter;
    }

    ASTInterpreter.prototype = {
      compile: function(expression) {
        var self = this;
        var ast = this.astBuilder.ast(expression);
        this.expression = expression;
        var assignable;
        var assign;
        if ((assignable = assignableAST(ast))) {
          assign = this.recurse(assignable);
        }
        var expressions = [];
        ast.body.map(function(expression) {
          expressions.push(self.recurse(expression.expression));
        });
        var inputs;
        var fn = ast.body.length === 0 ? noop :
                 ast.body.length === 1 ? expressions[0] :
                 function(scope, locals) {
                   var lastValue;
                   forEach(expressions, function(exp) {
                     lastValue = exp(scope, locals);
                   });
                   return lastValue;
                 };
        if (assign) {
          fn.assign = function(scope, value, locals) {
            return assign(scope, locals, value);
          };
        }
        if (inputs) {
          fn.inputs = inputs;
        }
        fn.literal = isLiteral(ast);
        fn.constant = isConstant(ast);
        return fn;
      },

      recurse: function(ast, context, create) {
        var left, right, self = this, args;
        if (ast.input) {
          return this.inputs(ast.input, ast.watchId);
        }
        switch (ast.type) {
        case AST.Literal:
          return this.value(ast.value, context);
        case AST.UnaryExpression:
          right = this.recurse(ast.argument);
          return this['unary' + ast.operator](right, context);
        case AST.BinaryExpression:
          left = this.recurse(ast.left);
          right = this.recurse(ast.right);
          return this['binary' + ast.operator](left, right, context);
        case AST.LogicalExpression:
          left = this.recurse(ast.left);
          right = this.recurse(ast.right);
          return this['binary' + ast.operator](left, right, context);
        case AST.ConditionalExpression:
          return this['ternary?:'](
            this.recurse(ast.test),
            this.recurse(ast.alternate),
            this.recurse(ast.consequent),
            context
          );
        case AST.Identifier:
          return self.identifier(ast.name,
                                 context, create, self.expression);
        case AST.MemberExpression:
          left = this.recurse(ast.object, false, !!create);
          if (!ast.computed) {
            right = ast.property.name;
          }
          if (ast.computed) right = this.recurse(ast.property);
          return ast.computed ?
            this.computedMember(left, right, context, create, self.expression) :
            this.nonComputedMember(left, right, context, create, self.expression);
        case AST.CallExpression:
          args = [];
          ast.arguments.map(function(expr) {
            args.push(self.recurse(expr));
          });
          if (ast.filter) right = this.$filter(ast.callee.name);
          if (!ast.filter) right = this.recurse(ast.callee, true);
          return ast.filter ?
            function(scope, locals, assign, inputs) {
              var values = [];
              for (var i = 0; i < args.length; ++i) {
                values.push(args[i](scope, locals, assign, inputs));
              }
              var value = right.apply(undefined, values, inputs);
              return context ? {context: undefined, name: undefined, value: value} : value;
            } :
            function(scope, locals, assign, inputs) {
              var rhs = right(scope, locals, assign, inputs);
              var value;
              if (rhs.value != null) {
                var values = [];
                for (var i = 0; i < args.length; ++i) {
                  values.push(args[i](scope, locals, assign, inputs));
                }
                value = rhs.value.apply(rhs.context, values);
              }
              return context ? {value: value} : value;
            };
        case AST.AssignmentExpression:
          left = this.recurse(ast.left, true, 1);
          right = this.recurse(ast.right);
          return function(scope, locals, assign, inputs) {
            var lhs = left(scope, locals, assign, inputs);
            var rhs = right(scope, locals, assign, inputs);
            lhs.context[lhs.name] = rhs;
            return context ? {value: rhs} : rhs;
          };
        case AST.ArrayExpression:
          args = [];
          forEach(ast.elements, function(expr) {
            args.push(self.recurse(expr));
          });
          return function(scope, locals, assign, inputs) {
            var value = [];
            for (var i = 0; i < args.length; ++i) {
              value.push(args[i](scope, locals, assign, inputs));
            }
            return context ? {value: value} : value;
          };
        case AST.ObjectExpression:
          args = [];
          forEach(ast.properties, function(property) {
            if (property.computed) {
              args.push({key: self.recurse(property.key),
                         computed: true,
                         value: self.recurse(property.value)
              });
            } else {
              args.push({key: property.key.type === AST.Identifier ?
                              property.key.name :
                              ('' + property.key.value),
                         computed: false,
                         value: self.recurse(property.value)
              });
            }
          });
          return function(scope, locals, assign, inputs) {
            var value = {};
            for (var i = 0; i < args.length; ++i) {
              if (args[i].computed) {
                value[args[i].key(scope, locals, assign, inputs)] = args[i].value(scope, locals, assign, inputs);
              } else {
                value[args[i].key] = args[i].value(scope, locals, assign, inputs);
              }
            }
            return context ? {value: value} : value;
          };
        case AST.ThisExpression:
          return function(scope) {
            return context ? {value: scope} : scope;
          };
        case AST.LocalsExpression:
          return function(scope, locals) {
            return context ? {value: locals} : locals;
          };
        case AST.NGValueParameter:
          return function(scope, locals, assign) {
            return context ? {value: assign} : assign;
          };
        }
      },

      'unary+': function(argument, context) {
        return function(scope, locals, assign, inputs) {
          var arg = argument(scope, locals, assign, inputs);
          if (isDefined(arg)) {
            arg = +arg;
          } else {
            arg = 0;
          }
          return context ? {value: arg} : arg;
        };
      },
      'unary-': function(argument, context) {
        return function(scope, locals, assign, inputs) {
          var arg = argument(scope, locals, assign, inputs);
          if (isDefined(arg)) {
            arg = -arg;
          } else {
            arg = -0;
          }
          return context ? {value: arg} : arg;
        };
      },
      'unary!': function(argument, context) {
        return function(scope, locals, assign, inputs) {
          var arg = !argument(scope, locals, assign, inputs);
          return context ? {value: arg} : arg;
        };
      },
      'binary+': function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var lhs = left(scope, locals, assign, inputs);
          var rhs = right(scope, locals, assign, inputs);
          var arg = plusFn(lhs, rhs);
          return context ? {value: arg} : arg;
        };
      },
      'binary-': function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var lhs = left(scope, locals, assign, inputs);
          var rhs = right(scope, locals, assign, inputs);
          var arg = (isDefined(lhs) ? lhs : 0) - (isDefined(rhs) ? rhs : 0);
          return context ? {value: arg} : arg;
        };
      },
      'binary*': function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) * right(scope, locals, assign, inputs);
          return context ? {value: arg} : arg;
        };
      },
      'binary/': function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) / right(scope, locals, assign, inputs);
          return context ? {value: arg} : arg;
        };
      },
      'binary%': function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) % right(scope, locals, assign, inputs);
          return context ? {value: arg} : arg;
        };
      },
      'binary===': function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) === right(scope, locals, assign, inputs);
          return context ? {value: arg} : arg;
        };
      },
      'binary!==': function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) !== right(scope, locals, assign, inputs);
          return context ? {value: arg} : arg;
        };
      },
      'binary==': function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          // eslint-disable-next-line eqeqeq
          var arg = left(scope, locals, assign, inputs) == right(scope, locals, assign, inputs);
          return context ? {value: arg} : arg;
        };
      },
      'binary!=': function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          // eslint-disable-next-line eqeqeq
          var arg = left(scope, locals, assign, inputs) != right(scope, locals, assign, inputs);
          return context ? {value: arg} : arg;
        };
      },
      'binary<': function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) < right(scope, locals, assign, inputs);
          return context ? {value: arg} : arg;
        };
      },
      'binary>': function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) > right(scope, locals, assign, inputs);
          return context ? {value: arg} : arg;
        };
      },
      'binary<=': function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) <= right(scope, locals, assign, inputs);
          return context ? {value: arg} : arg;
        };
      },
      'binary>=': function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) >= right(scope, locals, assign, inputs);
          return context ? {value: arg} : arg;
        };
      },
      'binary&&': function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) && right(scope, locals, assign, inputs);
          return context ? {value: arg} : arg;
        };
      },
      'binary||': function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) || right(scope, locals, assign, inputs);
          return context ? {value: arg} : arg;
        };
      },
      'ternary?:': function(test, alternate, consequent, context) {
        return function(scope, locals, assign, inputs) {
          var arg = test(scope, locals, assign, inputs) ? alternate(scope, locals, assign, inputs) : consequent(scope, locals, assign, inputs);
          return context ? {value: arg} : arg;
        };
      },
      value: function(value, context) {
        return function() { return context ? {context: undefined, name: undefined, value: value} : value; };
      },
      identifier: function(name, context, create, expression) {
        return function(scope, locals, assign, inputs) {
          var base = locals && (name in locals) ? locals : scope;
          if (create && create !== 1 && base && base[name] == null) {
            base[name] = {};
          }
          var value = base ? base[name] : undefined;
          if (context) {
            return {context: base, name: name, value: value};
          } else {
            return value;
          }
        };
      },
      computedMember: function(left, right, context, create, expression) {
        return function(scope, locals, assign, inputs) {
          var lhs = left(scope, locals, assign, inputs);
          var rhs;
          var value;
          if (lhs != null) {
            rhs = right(scope, locals, assign, inputs);
            rhs = getStringValue(rhs);
            if (create && create !== 1) {
              if (lhs && !(lhs[rhs])) {
                lhs[rhs] = {};
              }
            }
            value = lhs[rhs];
          }
          if (context) {
            return {context: lhs, name: rhs, value: value};
          } else {
            return value;
          }
        };
      },
      nonComputedMember: function(left, right, context, create, expression) {
        return function(scope, locals, assign, inputs) {
          var lhs = left(scope, locals, assign, inputs);
          if (create && create !== 1) {
            if (lhs && lhs[right] == null) {
              lhs[right] = {};
            }
          }
          var value = lhs != null ? lhs[right] : undefined;
          if (context) {
            return {context: lhs, name: right, value: value};
          } else {
            return value;
          }
        };
      },
      inputs: function(input, watchId) {
        return function(scope, value, locals, inputs) {
          if (inputs) return inputs[watchId];
          return input(scope, value, locals);
        };
      }
    };

    /**
     * @constructor
     * http://esprima.org/demo/parse.html#
     */

     var Parser = function Parser(lexer, $filter, options) {
         this.lexer = lexer;
         this.$filter = $filter;
         this.options = options;
         this.ast = new AST(lexer, options);
         this.astCompiler = options.cps ? new ASTInterpreter(this.ast, $filter) :
         new ASTCompiler(this.ast, $filter);
     };

     Parser.prototype = {
         constructor: Parser,

         parse: function(text) {
             return this.astCompiler.compile(text);
         }
     };

     var VeFilters = function VeFilters ()  {
         // default filters
         this.filters = {
             uppercase: function(string) {
                 return (string+'').toUpperCase();
             },
             lowercase: function(string) {
                 return (string+'').toLowerCase();
             },
             limitTo: function(value, limit) {
                 if( value.length>limit ) {
                     return value.substring(0, limit);
                 }
                 return value;
             },
             json: function(value, spacing) {
                 if( typeof value!=='object' ) {
                     return value;
                 }
                 return JSON.stringify(value);
             },
             filter: function(items, expression) {
                 var filtered = [];
                 console.log(arguments);
                 if(! Array.isArray(items) ) {
                     return items;
                 }
                 if( typeof expression==='string' ) {
                     var filterKey = String(expression).toLowerCase();
                     if (filterKey) {
                         filtered = array.filter(function (row) {
                             return Object.keys(row).some(function (key) {
                                 return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
                             });
                         });
                     }
                 }
                 if( typeof expression==='object' ) {
                     filtered = items.filter(function (row) {
                         return Object.keys(expression).some(function (key) {
                             return String(row[key]).toLowerCase().indexOf(expression[key]) > -1;
                         });
                     });
                 }
                 if( typeof expression==='function' ) {
                     return expression(items);
                 }

                return filtered;
             }
         };
     };

     VeFilters.prototype = {
         constructor: VeFilters,

         add: function (filterName, expression) {
             this.filters[filterName] = expression();
         },
         get: function (filterName) {
             if( this.filters[filterName] ) {
                 return this.filters[filterName];
             }

             return noop;
         }
     };

    var compiler = compiler || (function () {
        'use strict';

        var $filters,
            opt,
            lexer,
            parser,
            interpolatedNodes = [];

        $filters = new VeFilters();

        opt = {
            csp: false,
            literals: {
                'true': true,
                'false': false,
                'null': null,
                'undefined': undefined
            },
            isIdentifierStart: typeof identStart==='function' && identStart,
            isIdentifierContinue: typeof identContinue==='function' && identContinue
        };

        lexer = new Lexer(opt);
        parser = new Parser(lexer, $filters.get.bind($filters), opt);

        var getElementDirectives = function (el) {
            var attrs = el.attributes;
            var result = [];
            var directive;

            for (var i = 0; i < attrs.length; i += 1) {
                if ( directive = CompileProvider.get(attrs[i].name + '_Drcv') ) {
                    result.push({
                        name: attrs[i].name,
                        value: attrs[i].value,
                        priority: directive.priority || 0
                    });
                }
            }

            return result.sort(function(a,b){
                if (a.priority>b.priority) {
                    return -1;
                }
                if (a.priority<b.priority) {
                    return 1;
                }
                return 0;
            });
        };

        return {
            bootstrap: function () {
                this.compile(document.children[0], {});
                this.onInit.map(function(fn) {
                    fn();
                });
            },
            onInit: [],
            compile: function (element, scope) {
                var directives = getElementDirectives(element);
                var directive;
                var scope = scope || null; //{};

                if( element.classList.contains('isolate-scope') ) {
                    return;
                }

                directives.forEach(function (d) {
                    directive = CompileProvider.get(d.name + '_Drcv');

                    // Checking if the directive has own scope and try to instanciate it
                    if (directive.scope) {
                        scope = CompileProvider.get(d.value + '_Ctrl') || {};
                    }

                    if( d.name==='data-controller' ) {
                        this.currentController = d.value;

                        if( typeof scope.onInit==='function' ) {
                            this.onInit.push(scope.onInit.bind(scope));
                        }
                    }

                    if( !element.compiled ) {
                        directive.controller = this.currentController;
                    }

                    !element.compiled && directive.compiler && directive.compiler(scope, element, d.value);
                    directive.linker && directive.linker(scope, element, d.value);
                }, this);

                element.compiled = true;

                var children = Array.prototype.slice.call(element.children).map(function (c) {
                    return c;
                });

                children.forEach(function (child) {
                    this.compile(child, scope);
                }, this);

                this.interpolateNode(element, scope);
            },
            interpolatedKey: 0,
            interpolateNode: function(element, scope) {
                var self = this;

                element.childNodes.forEach(function(node) {
                    var interpolatedKey = self.interpolatedKey;

                    if( node.nodeType!==3 ) {
                        return;
                    }

                    if( typeof node.$bindKey!=='undefined' ) {
                        //node.nodeValue = node.$origin;
                        node.nodeValue = interpolatedNodes[node.$bindKey];
                    }

                    if( node.nodeValue.match(/\{\{(.*?)\}\}/g)!==null && !node.$bindKey ) {
                        //node.$origin = node.nodeValue;
                        node.$bindKey = interpolatedKey;
                        interpolatedNodes[node.$bindKey] = node.nodeValue;
                        self.interpolatedKey++;
                    }

                    node.nodeValue = node.nodeValue.replace(/\{\{(.*?)\}\}/g, function(match, token) {
                        return self.interpolate(token, scope);
                    });

                });
            },
            interpolate: function(expression, scopeName) {
                return parser.parse(expression)(typeof scopeName==='string' ? CompileProvider.get(scopeName+'_Ctrl'):scopeName) || '';
            },
            parser: function(scope, exp) {
                var cache = {};
                return cache.hasOwnProperty(exp)
                    ? cache[exp]
                    : cache[exp] =  parser.parse(exp)(scope);
            },
            invoke: function (scope, expression, event) {
                var eventIndex,
                    parsedExpression,
                    isFunctionExp = expression.match(/(.*)\((.*)\)/),
                    functionExp = expression.replace(/\((.*)\)/, ''),
                    functionExpArgs = expression.match(/\((.*)\)/);

                if( isFunctionExp===null ) {
                    return parser.parse(expression, scope)(scope);
                }

                if( functionExpArgs===null ) {
                    functionExpArgs = functionExpArgs.split(',');
                }

                if( typeof scope[functionExp] !=='function' ) {
                    parsedExpression = parser.parse(functionExp);
                    return parsedExpression(scope);
                }

                eventIndex = functionExpArgs && functionExpArgs[1].indexOf('event');

                functionExpArgs = functionExpArgs[1].split(',').map(function(arg) {
                    if(String(arg).toLocaleLowerCase().trim()==='event')
                    return arg;
                    return parser.parse(arg)(scope);
                });

                if( eventIndex!==-1 ) {
                    functionExpArgs[eventIndex] = event;
                }

                return scope[functionExp].apply(scope, functionExpArgs);
            }
        };
    }());

    var CompileProvider = CompileProvider || (function () {
        'use strict';

        var instances = {};
        var singelton = {};

        return {
            register: function(name, constructor) {
                if( !constructor ) {
                    return null;
                }

                if(! instances[name] ) {
                    instances[name] = constructor;
                }

                return instances[name];
            },
            serviceRegister: function(name, constructor) {
                this.register(name, constructor);
            },
            controller: function(name, constructor) {
                this.register(name+'_Ctrl', constructor);
            },
            directive: function(name, constructor) {
                this.register(name+'_Drcv', constructor);
            },
            service: function(name, constructor) {
                this.serviceRegister(name, constructor);
            },
            filter: function(name, constructor) {
                $filters.add(name, constructor);
            },
            get: function(name) {
                if(typeof instances[name]==='undefined' ) {
                    return false;
                }

                if(! singelton[name] ) {
                    singelton[name] = this.inject(instances[name]);
                }

                return singelton[name];
            },
            inject: function(constructor) {
                var services = [];

                if( constructor.hasOwnProperty('$inject') ) {
                    constructor.$inject.forEach(function(service) {
                        services.push(this.get(service));
                    }, this);

                    function F() {
                        return constructor.apply(this, services);
                    }

                    F.prototype = constructor.prototype;
                    return new F();
                }

                return new constructor();
            }
        };
    }());

    CompileProvider.directive('data-controller', function () {
        'use strict';
        return {
            scope: true,
            linker: function (scope, element, controllerName) {
                this.scope = CompileProvider.get(controllerName + '_Ctrl');

                this.scope.refreshView = function() {
                    compiler.compile(element, scope);
                }
            }
        };
    });

    var elementEvents = 'click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress focus blur copy cut paste'.split(' ');
    elementEvents.forEach(function(eventName) {
        var directiveName = 'data-' + eventName;

        CompileProvider.directive(directiveName, function () {
            'use strict';

            var controllerElements;

            return {
                scope: false,
                compiler: function (scope, element) {
                    var self = this;
                    var expression = element.getAttribute(directiveName);

                    element.addEventListener(eventName, function (event) {
                        compiler.invoke(scope, expression, event);

                        if (event.stopPropagation) {    // standard
                            event.stopPropagation();
                        }
                        else {    // IE6-8
                            event.cancelBubble = true;
                        }
                    });
                }
            };
        });
    });

    CompileProvider.directive('data-change', function () {
        'use strict';
        return {
            scope: false,
            compiler: function (scope, element, expression) {
                var self = this;
                var controllerElements = document.querySelector('[data-controller="'+ this.controller +'"]');

                element.addEventListener('change', function (event) {
                    compiler.invoke(scope, expression, event);
                    compiler.compile(controllerElements);

                    if (event.stopPropagation) {    // standard
                        event.stopPropagation();
                    }
                    else {    // IE6-8
                        event.cancelBubble = true;
                    }
                });
            }
        };
    });

    CompileProvider.directive('data-form-data', function () {
        'use strict';
        return {
            scope: false,
            priority: 100,
            compiler: function (scope, element, expression) {
                var self = this;
                var formData = scope[expression] || {};
                var controllerElements = document.querySelector('[data-controller="'+ this.controller +'"]');

                if( scope[element.getAttribute('name')] ) {
                    if( typeof formData==='function' ) {
                        formData = formData();
                    }

                    if( (formData).toString()!=="[object Object]" ) {
                        return;
                    }

                    scope[element.getAttribute('name')].populate(formData);
                }
            }
        };
    });

    CompileProvider.directive('data-submit', function () {
        'use strict';

        var checkedFields = {};
        var getValue;
        var getFormGroups;

        getFormGroups = function(form) {
            var inputGroups = [];
            var inGroup = {};
            var groups = form.querySelectorAll('[data-form-group]');

            groups.forEach(function(group, index) {
                var groupName = group.getAttribute('data-form-group');
                inputGroups[groupName] = {};

                group.querySelectorAll('[name]').forEach(function(input) {
                    inputGroups[groupName][input.name] = getValue(input, form);
                    inGroup[input.name] = groupName;
                });
            });

            return {
                inputGroups: inputGroups,
                inGroup: inGroup
            }
        };

        getValue = function(input, form) {
            switch(input.type) {
                case 'radio':
                    return (checkedFields[input.name] = input.checked ? input.value:checkedFields[input.name]);
                case 'checkbox':
                    checkedFields[input.name] = checkedFields[input.name] || [];
                    if( input.checked ) {
                        checkedFields[input.name].push(input.value);
                    }

                    return !form.elements[input.name].length ? checkedFields[input.name].join(''):checkedFields[input.name];
                default:
                    return input.value;
            }
        };

        return {
            scope: false,
            priority: 200,
            compiler: function (scope, element, expression) {
                var self = this;
                var controllerElements = document.querySelector('[data-controller="'+ this.controller +'"]');
                var formName;
                var formGroups = getFormGroups(element);
                var formController = new FormController(element);

                if( (formName=element.getAttribute('name'))===null ) {
                    formName = 'form_' + Math.floor(Math.random() * 1000) + 1;
                    element.setAttribute('name', formName);
                }

                // Add form controller to the current scope (controller)
                scope[formName] = formController;

                element.addEventListener('submit', function (event) {
                    var formName = event.target.name;
                    var formData = {};

                    for (var i = 0; i < element.elements.length; i++) {
                        var inputName = element.elements[i].name;

                        if( inputName.trim()==="" ) {
                            continue;
                        }

                        if( typeof formGroups.inGroup[inputName]!=='undefined' ) {
                            formData[formGroups.inGroup[inputName]] = formGroups.inputGroups[formGroups.inGroup[inputName]];
                            formData[formGroups.inGroup[inputName]][inputName] = getValue(element.elements[i], element);  
                            continue;
                        }

                        formData[element.elements[i].name] = getValue(element.elements[i], element);
                    }

                    formController.submitted = true;
                    formController.data = formData;
                    formController.validate();
                    checkedFields = {};
                    compiler.invoke(scope, expression, event);

                    event.preventDefault();
                });
            }
        };
    });

    CompileProvider.directive('data-class', function () {
        'use strict';

        var addClass = function(elementClasses, element) {
            Object.keys(elementClasses).forEach(function(className) {
                if( elementClasses[className] ) {
                    element.classList.add(className);
                }
                else {
                    element.classList.remove(className);
                }
            });
        }

        return {
            recall: true,
            scope: false,
            linker: function (scope, element, expression) {
                var self = this;
                var controllerElements = document.querySelector('[data-controller="'+ this.controller +'"]');
                var elementClasses = compiler.parser(scope, expression);

                if( Array.isArray(elementClasses) ) {
                    elementClasses.forEach(function(className) {
                        if( typeof className==='string' ) {
                            element.classList.add(className);
                        }
                        if( typeof className==='object' ) {
                            addClass(className, element);
                        }
                    });
                }

                if( !Array.isArray(elementClasses) && typeof elementClasses==='object' ) {
                    addClass(elementClasses, element);
                }
            }
        };
    });

    CompileProvider.directive('data-if', function () {
        /* in alpha version */
        'use strict';

        var controllerElements;

        return {
            scope: false,
            expressions:[],
            compiler: function (scope, element, expression) {
                var clonedElement = element.cloneNode(true);
                var comment = document.createComment(' dataIf ');
                var elementScope = scope;
                element.parentNode.insertBefore(comment, element);
                element.remove();

                this.expressions.push(function() {
                    var condition = compiler.parser(scope, expression);
                    clonedElement.$uniqKey = element.$uniqKey;
                    clonedElement.removeAttribute('data-if');

                    if(! condition ) {
                        clonedElement.remove();
                    }
                    else {
                        comment.parentNode.insertBefore(clonedElement, comment.nextSibling);
                        compiler.compile(clonedElement, scope);
                    }

                    clonedElement.setAttribute('data-if', expression);
                });
            },
            linker: function (scope, element, expression) {
                this.expressions.forEach(function(exp) {
                    exp();
                });
            }
        };
    });

    CompileProvider.directive('data-model', function () {
        /* in alpha version */
        'use strict';

        var controllerElements;

        function setValue(element, modelValue) {
            switch(element.type) {
                case 'checkbox':
                    if( typeof modelValue!=='undefined' ) {
                        element.checked = !!modelValue;
                    }
                    return element.checked ? true:false;
                case 'radio':
                    if( typeof modelValue!=='undefined' ) {
                        element.checked = (modelValue === element.value);
                    }
                    return element.checked ? element.value:false;
                case 'select-one':
                      if(modelValue) {
                          for(var i=0; i < element.options.length; i++) {
                              element.options[i].selected = (modelValue === element.options[i].value);
                          }
                      }
                      return trim(element.value);
                case 'select-multiple':
                    if(modelValue && Array.isArray(modelValue)) {
                        for(var i=0; i < element.options.length; i++) {
                            element.options[i].selected = (modelValue.indexOf(element.options[i].value)!==-1);
                        }
                    }

                    return [].slice.call(element.selectedOptions).map(function (sel) {
                        return sel.value;
                    });
                default:
                    if( typeof modelValue!=='undefined' ) {
                        element.value = modelValue;
                    }
                    return trim(element.value);
            }
        }

        return {
            scope: false,
            compiler: function (scope, element, expression) {
                var self = this;
                var modelValue = compiler.parser(scope, expression);
                var msie = parseInt((/msie (\d+)/.exec(lowercase(navigator.userAgent)) || [])[1]);
                var controllerElements = controllerElements ||  document.querySelector('[data-controller="'+ this.controller +'"]');
                var listener = function() {
                    var value = setValue(element);

                    compiler.parser(scope, expression+'="'+value+'";');
                    compiler.compile(controllerElements);
                };

                if( typeof modelValue!=='undefined' ) {
                    setValue(element, modelValue);
                }

                // if the browser does support "input" event, we are fine - except on IE9 which doesn't fire the
                // input event on backspace, delete or cut
                if (msie == 9) {
                    element.addEventListener('input', listener);
                }
                else {
                    element.addEventListener('keyup', function (event) {
                        var key = event.keyCode;

                        //ignore command, modifiers, arrows
                        if (key === 91 || (15 < key && key < 19) || (37 <= key && key <= 40)) return;
                        listener();
                    });
                }

                // if user paste into input using mouse, we need "change" event to catch it
                element.addEventListener('change', listener);
            }
        };
    });

    CompileProvider.directive('data-repeat', function () {
        /* in beta version */
        'use strict';

        return {
            scope: false,
            compiler: function (scope, element) {
                var self = this;
                var elements = [];
                var leftoverBlocks = [];
                var clonedElement = element.cloneNode(true);
                var repeatExp = element.getAttribute('data-repeat');
                var repeatItems = element.getAttribute('data-repeat').split(' ');
                var trackBy = repeatExp.indexOf('track by')!==-1 ? repeatExp.split(' track by ')[1]:false;
                var indexString = repeatItems[0];
                var collectionString = repeatItems[2];
                var collection = scope[collectionString] || [];
                var currentElement = element;
                var parentElement = element.parentNode;
                var storePropName = element.getAttribute('data-store');
                var repeatStore = scope[storePropName] || false;
                var comment = document.createComment(' dataRepeat ');
                var match = repeatExp.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

                if (!match) {
                    throw 'Expected expression in form of \''+indexString+' in '+collectionString+'[ track by _id_]\' but got \'' + repeatExp + '\'.';
                }

                element.parentNode.insertBefore(comment, element);
                element.remove();

                function render (collection) {
                    var prevNode = comment;
                    var currentBlockMap = [];
                    var currentOrder = [];
                    var collectionScope = {};
                    var fragment = document.createDocumentFragment();

                    // in develop (beta)
                    if( match[2].indexOf('|')!==-1 ) {
                        collectionScope[collectionString] = collection;
                        collection = compiler.interpolate(match[2], collectionScope);
                    }

                    for(var i=0; i<collection.length; i++) {
                        var row = collection[i];
                        var blockScope = {};
                        var block = clonedElement.cloneNode(true);
                        var index = trackBy!==false ? (typeof row[trackBy]==='undefined' ? i:row[trackBy]):i;

                        blockScope[indexString] = row;
                        block.removeAttribute('data-repeat');

                        if ( currentOrder.indexOf(index)!==-1 ) {
                            throw 'Duplicates in a repeater are not allowed. Repeater: ' + repeatExp;
                        }

                        currentOrder[i] = index;
                        currentBlockMap[index] = {
                            el: block,
                            scope: blockScope
                        };

                        if(!(index in elements)) {
                            elements[index] = {
                                el: block,
                                scope: blockScope
                            };
                        }
                        else {
                            var a = _.values(currentBlockMap[index].scope)[0];
                            var b = _.values(elements[index].scope)[0];
                            if(!_.isEqual(a, b)) {
                                while (elements[index].el.firstChild) {
                                    elements[index].el.firstChild.remove();
                                }
                                elements[index].el.remove();
                                elements[index] = currentBlockMap[index];
                            }
                        }
                    }

                    for(var i=0; i<=elements.length; i++) {
                        if( currentOrder.indexOf(i)===-1 && elements[i] ) {
                            fragment.appendChild(elements[i].el);
                            delete elements[i];
                        }
                    }

                    while (fragment.firstChild) {
                        fragment.firstChild.remove();
                    }

                    for(var i=0; i<currentOrder.length; i++) {
                        var currIndex = currentOrder[i];

                        prevNode.parentNode.insertBefore(elements[currIndex].el, prevNode.nextSibling);

                        if( !elements[currIndex].el.classList.contains('isolate-scope') ) {
                            compiler.compile(elements[currIndex].el, Object.setPrototypeOf(elements[currIndex].scope, scope));
                            elements[currIndex].el.classList.add('isolate-scope');
                        }

                        prevNode = elements[currIndex].el;
                    }
                }

                if( repeatStore!==false ) {
                    repeatStore.subscribe(function() {
                        render(repeatStore.getState());
                    });
                }

                render(collection);
            }
        };
    });

    function FormController(form) {
        this.form = form;

        this.valid = false;
        this.invalid = true;
        this.submitted = false;
        this.validators = [];
        this.errors = [];
        this.data = {};
    }

    FormController.prototype.validate = function() {
        var regexp,
        regex = '';
        this.errors = [];
        this.valid = true;
        this.invalid = false;

        for (var i = 0; i < this.form.elements.length; i++) {
            this.form.elements[i].classList.remove('has-error', 'required');

            if( this.form.elements[i].required && this.form.elements[i].value.length===0 ) {
                this.form.elements[i].classList.add('has-error', 'required');
                this.errors.push({
                    name: this.form.elements[i].name,
                    error: 'This field is required and cannot be empty!'
                });
            }

            if( this.form.elements[i].getAttribute('pattern') && this.form.elements[i].getAttribute('pattern').length>0 ) {
                regexp = this.form.elements[i].getAttribute('pattern');
                regex = new RegExp('^' + regexp + '$');

                if(! regex.test(this.form.elements[i].value) ) {
                    this.form.elements[i].classList.add('has-error');
                    this.errors.push({
                        name: this.form.elements[i].name,
                        error: 'Value is invalid, does not mutch the correct pattern!'
                    });
                }
            }
            else {
                var errorMessage = '';
                regex = '';
                switch(this.form.elements[i].type) {
                    case 'number':
                    regex = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/;
                    errorMessage = 'The Number is invalid!';
                    break;
                    case 'email':
                    regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
                    errorMessage = 'The email address is invalid!';
                    break;
                    case 'date':
                    regex = /^(\d{4,})-(\d{2})-(\d{2})$/;
                    errorMessage = 'The Date value is invalid!';
                    break;
                    case 'datetime':
                    regex = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/;
                    errorMessage = 'The DateTime value is invalid!';
                    break;
                    case 'color':
                    regex = /^#([0-9a-f]{3}){1,2}$/i;
                    errorMessage = 'The Color value is invalid!';
                    break;
                    case 'url':
                    regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
                    errorMessage = 'The URL address is invalid!';
                    break;
                }

                if( regex && regex.test(this.form.elements[i].value)===false ) {
                    this.form.elements[i].classList.add('has-error');
                    this.errors.push({
                        name: this.form.elements[i].name,
                        error: errorMessage,
                        type: this.form.elements[i].type
                    });
                }
            }
        }

        if( this.validators.length > 0 ) {
            this.validators.forEach(function(element) {
                var validateInput = this.form.elements[element.name] ;
                if( validateInput ) {
                    if( !Array.isArray(element.validators) ) {
                        throw 'Validators should be array given ' + (typeof element.validators) + '!';
                    }

                    element.validators.forEach(function(validator) {
                        if( validator.validator(validateInput)===false ) {
                            this.errors.push({
                                name: element.name,
                                message: validator.message || '',
                                type: validateInput.type
                            });
                        }
                    }, this);
                }
            }, this);
        }

        if( this.errors.length > 0 ) {
            this.valid = false;
            this.invalid = true;
        }
    };

    FormController.prototype.addValidator = function(validator) {
        if( (validator).toString()!=="[object Object]") {
            throw 'Validator should be object given ' + (typeof validator) + '!';
        }
        this.validators.push(validator)
    };

    FormController.prototype.clear = function () {
        for (var i = 0; i < this.form.elements.length; i++) {
            if( this.form.elements[i].type==='checkbox' || this.form.elements[i].type==='radio' ) {
                this.form.elements[i].checked = false;
                continue;
            }
            this.form.elements[i].value = '';
        }
    };

    FormController.prototype.populate = function(data) {
        var populateData = {};
        var formData = data || {};

        if( this.form.tagName==='FORM' && typeof formData==='object' && Object.keys(formData).length ) {
            Object.keys(formData).forEach(function(fieldName) {
                if( typeof formData[fieldName]==='object' && !Array.isArray(formData[fieldName]) ) {
                    Object.keys(formData[fieldName]).forEach(function(subFieldName) {
                        populateData[subFieldName] = formData[fieldName][subFieldName];
                    });
                }
                else {
                    populateData[fieldName] = formData[fieldName];
                }
            });

            for (var i = 0; i < this.form.elements.length; i++) {
                if( typeof populateData[this.form.elements[i].name]==='undefined' ) {
                    continue;
                }

                if( this.form.elements[i].type==='radio' ) {
                    if( this.form.elements[i].value === populateData[this.form.elements[i].name] ) {
                        this.form.elements[i].checked = true;
                        continue;
                    }
                }

                if( this.form.elements[i].type==='checkbox' ) {
                    var isMulti = Array.isArray(populateData[this.form.elements[i].name]);

                    if( isMulti && populateData[this.form.elements[i].name].length===0 ) {
                        continue;
                    }

                    if( isMulti && populateData[this.form.elements[i].name].indexOf(this.form.elements[i].value)!==-1 ) {
                        this.form.elements[i].checked = true;
                        continue;
                    }
                    if( !isMulti && this.form.elements[i].value === populateData[this.form.elements[i].name] ) {
                        this.form.elements[i].checked = true;
                        continue;
                    }
                }

                this.form.elements[i].value = populateData[this.form.elements[i].name];
            }

        }
    };

    function myStore(reducer) {
        switch(typeof reducer) {
            case 'function':
            this.reducer = reducer;
            break;
            case 'object':
            this.reducer = this.combineReducers(reducer);
            break;
            default:
            throw 'Reducer must be a function or object given!';
        }

        this.listeners = [];
        this.state = null;
        this.dispatch();
    }

    myStore.prototype.dispatch = function (action) {
        this.state = this.reducer(this.state, action);

        this.listeners.forEach(function(listener) {
            listener();
        });
    };

    myStore.prototype.getState = function () {
        return this.state;
    };

    myStore.prototype.setState = function (state) {
        if( Array.isArray(state) ) {
            this.state = state.slice(0);
        }
        else if( !Array.isArray(state) && typeof state==='object' ) {
            this.state = Object.assign({}, state);
        }
        else {
            this.state = state;
        }

        return this;
    };

    myStore.prototype.subscribe = function (callback) {
        var self = this;
        this.listeners.push(callback);

        return function () {
            self.listeners = self.listeners.filter(function(l) {
                return l !== callback;
            });
        }
    };

    myStore.prototype.combineReducers = function (reducers) {
        return function (state, action) {
            state = state || {};
            return Object.keys(reducers).reduce(function (nextState, key) {
                nextState[key] = reducers[key](state[key], action);
                return nextState;
            }, {});
        };
    };

    return {
        bootstrap: compiler.bootstrap.bind(compiler),
        controller: CompileProvider.controller.bind(CompileProvider),
        directive: CompileProvider.directive.bind(CompileProvider),
        service: CompileProvider.service.bind(CompileProvider),
        filter: CompileProvider.filter.bind(CompileProvider),
        store: myStore,
    };

}(vejs || {}));
