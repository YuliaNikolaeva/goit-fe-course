!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=34)}([function(t,e,n){"use strict";e.__esModule=!0,e.extend=s,e.indexOf=function(t,e){for(var n=0,o=t.length;n<o;n++)if(t[n]===e)return n;return-1},e.escapeExpression=function(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}if(!i.test(t))return t;return t.replace(r,a)},e.isEmpty=function(t){return!t&&0!==t||!(!u(t)||0!==t.length)},e.createFrame=function(t){var e=s({},t);return e._parent=t,e},e.blockParams=function(t,e){return t.path=e,t},e.appendContextPath=function(t,e){return(t?t+".":"")+e};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},r=/[&<>"'`=]/g,i=/[&<>"'`=]/;function a(t){return o[t]}function s(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}var l=Object.prototype.toString;e.toString=l;var c=function(t){return"function"==typeof t};c(/x/)&&(e.isFunction=c=function(t){return"function"==typeof t&&"[object Function]"===l.call(t)}),e.isFunction=c;var u=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===l.call(t)};e.isArray=u},function(t,e,n){"use strict";e.__esModule=!0;var o=["description","fileName","lineNumber","message","name","number","stack"];function r(t,e){var n=e&&e.loc,i=void 0,a=void 0;n&&(t+=" - "+(i=n.start.line)+":"+(a=n.start.column));for(var s=Error.prototype.constructor.call(this,t),l=0;l<o.length;l++)this[o[l]]=s[o[l]];Error.captureStackTrace&&Error.captureStackTrace(this,r);try{n&&(this.lineNumber=i,Object.defineProperty?Object.defineProperty(this,"column",{value:a,enumerable:!0}):this.column=a)}catch(t){}}r.prototype=new Error,e.default=r,t.exports=e.default},function(t,e,n){"use strict";var o,r,i,a=n(27),s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function l(){i=!1}function c(t){if(t){if(t!==o){if(t.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter(function(t,e,n){return e!==n.lastIndexOf(t)});if(e.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+e.join(", "));o=t,l()}}else o!==s&&(o=s,l())}function u(){return i||(i=function(){o||c(s);for(var t,e=o.split(""),n=[],r=a.nextValue();e.length>0;)r=a.nextValue(),t=Math.floor(r*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return o||s},characters:function(t){return c(t),o},seed:function(t){a.seed(t),r!==t&&(l(),r=t)},lookup:function(t){return u()[t]},shuffled:u}},function(t){t.exports=[{id:"XWaQXcbk0",title:"JavaScript essentials",body:"Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",priority:2},{id:"pkXzyRp1P",title:"Refresh HTML and CSS",body:"Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",priority:1},{id:"QMom9q4Ku",title:"Get comfy with Frontend frameworks",body:"First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",priority:1},{id:"k2k0UrjZG",title:"Winter clothes",body:"Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",priority:0}]},function(t,e,n){var o=n(8);t.exports=(o.default||o).template({compiler:[7,">= 4.0.0"],main:function(t,e,n,o,r){var i,a=null!=e?e:t.nullContext||{},s=n.helperMissing,l=t.escapeExpression;return'<li class="note-list__item" data-id="'+l("function"==typeof(i=null!=(i=n.id||(null!=e?e.id:e))?i:s)?i.call(a,{name:"id",hash:{},data:r}):i)+'">\r\n  <div class="note">\r\n    <div class="note__content">\r\n      <h2 class="note__title">'+l("function"==typeof(i=null!=(i=n.title||(null!=e?e.title:e))?i:s)?i.call(a,{name:"title",hash:{},data:r}):i)+'</h2>\r\n      <p class="note__body">'+l("function"==typeof(i=null!=(i=n.body||(null!=e?e.body:e))?i:s)?i.call(a,{name:"body",hash:{},data:r}):i)+'</p>\r\n    </div>\r\n    <footer class="note__footer">\r\n      <section class="note__section">\r\n        <button class="action" data-action="decrease-priority">\r\n          <i class="material-icons action__icon">expand_more</i>\r\n        </button>\r\n        <button class="action" data-action="increase-priority">\r\n          <i class="material-icons action__icon">expand_less</i>\r\n        </button>\r\n        <span class="note__priority">Priority: '+l("function"==typeof(i=null!=(i=n.priority||(null!=e?e.priority:e))?i:s)?i.call(a,{name:"priority",hash:{},data:r}):i)+'</span>\r\n      </section>\r\n      <section class="note__section">\r\n        <button class="action" data-action="edit-note">\r\n          <i class="material-icons action__icon">edit</i>\r\n        </button>\r\n        <button class="action" data-action="delete-note">\r\n          <i class="material-icons action__icon">delete</i>\r\n        </button>\r\n      </section>\r\n    </footer>\r\n  </div>\r\n</li>'},useData:!0})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.HandlebarsEnvironment=c;var r=n(0),i=o(n(1)),a=n(10),s=n(18),l=o(n(20));e.VERSION="4.1.2";e.COMPILER_REVISION=7;e.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function c(t,e,n){this.helpers=t||{},this.partials=e||{},this.decorators=n||{},a.registerDefaultHelpers(this),s.registerDefaultDecorators(this)}c.prototype={constructor:c,logger:l.default,log:l.default.log,registerHelper:function(t,e){if("[object Object]"===r.toString.call(t)){if(e)throw new i.default("Arg not supported with multiple helpers");r.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if("[object Object]"===r.toString.call(t))r.extend(this.partials,t);else{if(void 0===e)throw new i.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if("[object Object]"===r.toString.call(t)){if(e)throw new i.default("Arg not supported with multiple decorators");r.extend(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]}};var u=l.default.log;e.log=u,e.createFrame=r.createFrame,e.logger=l.default},function(t,e,n){},function(t,e,n){},function(t,e,n){t.exports=n(9).default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}e.__esModule=!0;var i=r(n(5)),a=o(n(21)),s=o(n(1)),l=r(n(0)),c=r(n(22)),u=o(n(23));function d(){var t=new i.HandlebarsEnvironment;return l.extend(t,i),t.SafeString=a.default,t.Exception=s.default,t.Utils=l,t.escapeExpression=l.escapeExpression,t.VM=c,t.template=function(e){return c.template(e,t)},t}var f=d();f.create=d,u.default(f),f.default=f,e.default=f,t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.registerDefaultHelpers=function(t){r.default(t),i.default(t),a.default(t),s.default(t),l.default(t),c.default(t),u.default(t)};var r=o(n(11)),i=o(n(12)),a=o(n(13)),s=o(n(14)),l=o(n(15)),c=o(n(16)),u=o(n(17))},function(t,e,n){"use strict";e.__esModule=!0;var o=n(0);e.default=function(t){t.registerHelper("blockHelperMissing",function(e,n){var r=n.inverse,i=n.fn;if(!0===e)return i(this);if(!1===e||null==e)return r(this);if(o.isArray(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):r(this);if(n.data&&n.ids){var a=o.createFrame(n.data);a.contextPath=o.appendContextPath(n.data.contextPath,n.name),n={data:a}}return i(e,n)})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var o,r=n(0),i=n(1),a=(o=i)&&o.__esModule?o:{default:o};e.default=function(t){t.registerHelper("each",function(t,e){if(!e)throw new a.default("Must pass iterator to #each");var n=e.fn,o=e.inverse,i=0,s="",l=void 0,c=void 0;function u(e,o,i){l&&(l.key=e,l.index=o,l.first=0===o,l.last=!!i,c&&(l.contextPath=c+e)),s+=n(t[e],{data:l,blockParams:r.blockParams([t[e],e],[c+e,null])})}if(e.data&&e.ids&&(c=r.appendContextPath(e.data.contextPath,e.ids[0])+"."),r.isFunction(t)&&(t=t.call(this)),e.data&&(l=r.createFrame(e.data)),t&&"object"==typeof t)if(r.isArray(t))for(var d=t.length;i<d;i++)i in t&&u(i,i,i===t.length-1);else{var f=void 0;for(var p in t)t.hasOwnProperty(p)&&(void 0!==f&&u(f,i-1),f=p,i++);void 0!==f&&u(f,i-1,!0)}return 0===i&&(s=o(this)),s})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var o,r=n(1),i=(o=r)&&o.__esModule?o:{default:o};e.default=function(t){t.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new i.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var o=n(0);e.default=function(t){t.registerHelper("if",function(t,e){return o.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||o.isEmpty(t)?e.inverse(this):e.fn(this)}),t.registerHelper("unless",function(e,n){return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("log",function(){for(var e=[void 0],n=arguments[arguments.length-1],o=0;o<arguments.length-1;o++)e.push(arguments[o]);var r=1;null!=n.hash.level?r=n.hash.level:n.data&&null!=n.data.level&&(r=n.data.level),e[0]=r,t.log.apply(t,e)})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("lookup",function(t,e){return t?"constructor"!==e||t.propertyIsEnumerable(e)?t[e]:void 0:t})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var o=n(0);e.default=function(t){t.registerHelper("with",function(t,e){o.isFunction(t)&&(t=t.call(this));var n=e.fn;if(o.isEmpty(t))return e.inverse(this);var r=e.data;return e.data&&e.ids&&((r=o.createFrame(e.data)).contextPath=o.appendContextPath(e.data.contextPath,e.ids[0])),n(t,{data:r,blockParams:o.blockParams([t],[r&&r.contextPath])})})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.registerDefaultDecorators=function(t){i.default(t)};var o,r=n(19),i=(o=r)&&o.__esModule?o:{default:o}},function(t,e,n){"use strict";e.__esModule=!0;var o=n(0);e.default=function(t){t.registerDecorator("inline",function(t,e,n,r){var i=t;return e.partials||(e.partials={},i=function(r,i){var a=n.partials;n.partials=o.extend({},a,e.partials);var s=t(r,i);return n.partials=a,s}),e.partials[r.args[0]]=r.fn,i})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var o=n(0),r={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=o.indexOf(r.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=r.lookupLevel(t),"undefined"!=typeof console&&r.lookupLevel(r.level)<=t){var e=r.methodMap[t];console[e]||(e="log");for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];console[e].apply(console,o)}}};e.default=r,t.exports=e.default},function(t,e,n){"use strict";function o(t){this.string=t}e.__esModule=!0,o.prototype.toString=o.prototype.toHTML=function(){return""+this.string},e.default=o,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.checkRevision=function(t){var e=t&&t[0]||1,n=s.COMPILER_REVISION;if(e!==n){if(e<n){var o=s.REVISION_CHANGES[n],r=s.REVISION_CHANGES[e];throw new a.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+o+") or downgrade your runtime to an older version ("+r+").")}throw new a.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}},e.template=function(t,e){if(!e)throw new a.default("No environment passed to template");if(!t||!t.main)throw new a.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var n={strict:function(t,e){if(!(e in t))throw new a.default('"'+e+'" not defined in '+t);return t[e]},lookup:function(t,e){for(var n=t.length,o=0;o<n;o++)if(t[o]&&null!=t[o][e])return t[o][e]},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:r.escapeExpression,invokePartial:function(n,o,i){i.hash&&(o=r.extend({},o,i.hash),i.ids&&(i.ids[0]=!0));n=e.VM.resolvePartial.call(this,n,o,i);var s=e.VM.invokePartial.call(this,n,o,i);null==s&&e.compile&&(i.partials[i.name]=e.compile(n,t.compilerOptions,e),s=i.partials[i.name](o,i));if(null!=s){if(i.indent){for(var l=s.split("\n"),c=0,u=l.length;c<u&&(l[c]||c+1!==u);c++)l[c]=i.indent+l[c];s=l.join("\n")}return s}throw new a.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var n=t[e];return n.decorator=t[e+"_d"],n},programs:[],program:function(t,e,n,o,r){var i=this.programs[t],a=this.fn(t);return e||r||o||n?i=l(this,t,a,e,n,o,r):i||(i=this.programs[t]=l(this,t,a)),i},data:function(t,e){for(;t&&e--;)t=t._parent;return t},merge:function(t,e){var n=t||e;return t&&e&&t!==e&&(n=r.extend({},e,t)),n},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function o(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=r.data;o._setup(r),!r.partial&&t.useData&&(i=function(t,e){e&&"root"in e||((e=e?s.createFrame(e):{}).root=t);return e}(e,i));var a=void 0,l=t.useBlockParams?[]:void 0;function c(e){return""+t.main(n,e,n.helpers,n.partials,i,l,a)}return t.useDepths&&(a=r.depths?e!=r.depths[0]?[e].concat(r.depths):r.depths:[e]),(c=u(t.main,c,n,r.depths||[],i,l))(e,r)}return o.isTop=!0,o._setup=function(o){o.partial?(n.helpers=o.helpers,n.partials=o.partials,n.decorators=o.decorators):(n.helpers=n.merge(o.helpers,e.helpers),t.usePartial&&(n.partials=n.merge(o.partials,e.partials)),(t.usePartial||t.useDecorators)&&(n.decorators=n.merge(o.decorators,e.decorators)))},o._child=function(e,o,r,i){if(t.useBlockParams&&!r)throw new a.default("must pass block params");if(t.useDepths&&!i)throw new a.default("must pass parent depths");return l(n,e,t[e],o,0,r,i)},o},e.wrapProgram=l,e.resolvePartial=function(t,e,n){t?t.call||n.name||(n.name=t,t=n.partials[t]):t="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return t},e.invokePartial=function(t,e,n){var o=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var i=void 0;n.fn&&n.fn!==c&&function(){n.data=s.createFrame(n.data);var t=n.fn;i=n.data["partial-block"]=function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=s.createFrame(n.data),n.data["partial-block"]=o,t(e,n)},t.partials&&(n.partials=r.extend({},n.partials,t.partials))}();void 0===t&&i&&(t=i);if(void 0===t)throw new a.default("The partial "+n.name+" could not be found");if(t instanceof Function)return t(e,n)},e.noop=c;var o,r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),a=(o=i)&&o.__esModule?o:{default:o},s=n(5);function l(t,e,n,o,r,i,a){function s(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=a;return!a||e==a[0]||e===t.nullContext&&null===a[0]||(s=[e].concat(a)),n(t,e,t.helpers,t.partials,r.data||o,i&&[r.blockParams].concat(i),s)}return(s=u(n,s,t,a,o,i)).program=e,s.depth=a?a.length:0,s.blockParams=r||0,s}function c(){return""}function u(t,e,n,o,i,a){if(t.decorator){var s={};e=t.decorator(e,s,n,o&&o[0],i,a,o),r.extend(e,s)}return e}},function(t,e,n){"use strict";(function(n){e.__esModule=!0,e.default=function(t){var e=void 0!==n?n:window,o=e.Handlebars;t.noConflict=function(){return e.Handlebars===t&&(e.Handlebars=o),t}},t.exports=e.default}).call(this,n(24))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";t.exports=n(26)},function(t,e,n){"use strict";var o=n(2),r=n(28),i=n(32),a=n(33)||0;function s(){return r(a)}t.exports=s,t.exports.generate=s,t.exports.seed=function(e){return o.seed(e),t.exports},t.exports.worker=function(e){return a=e,t.exports},t.exports.characters=function(t){return void 0!==t&&o.characters(t),o.shuffled()},t.exports.isValid=i},function(t,e,n){"use strict";var o=1;t.exports={nextValue:function(){return(o=(9301*o+49297)%233280)/233280},seed:function(t){o=t}}},function(t,e,n){"use strict";var o,r,i=n(29),a=(n(2),1459707606518),s=6;t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-a));return n===r?o++:(o=0,r=n),e+=i(s),e+=i(t),o>0&&(e+=i(o)),e+=i(n)}},function(t,e,n){"use strict";var o=n(2),r=n(30),i=n(31);t.exports=function(t){for(var e,n=0,a="";!e;)a+=i(r,o.get(),1),e=t<Math.pow(16,n+1),n++;return a}},function(t,e,n){"use strict";var o,r="object"==typeof window&&(window.crypto||window.msCrypto);o=r&&r.getRandomValues?function(t){return r.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=o},function(t,e){t.exports=function(t,e,n){var o=(2<<Math.log(e.length-1)/Math.LN2)-1,r=Math.ceil(1.6*o*n/e.length);n=+n;for(var i="";;)for(var a=t(r),s=0;s<r;s++){var l=a[s]&o;if(e[l]&&(i+=e[l]).length===n)return i}}},function(t,e,n){"use strict";var o=n(2);t.exports=function(t){return!(!t||"string"!=typeof t||t.length<6||new RegExp("[^"+o.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t))}},function(t,e,n){"use strict";t.exports=0},function(t,e,n){"use strict";n.r(e);n(6);var o,r,i,a,s,l,c=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),d=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},f=(o=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],r=function(){function t(e){var n=e.targetModal,o=e.triggers,r=void 0===o?[]:o,i=e.onShow,a=void 0===i?function(){}:i,s=e.onClose,l=void 0===s?function(){}:s,u=e.openTrigger,f=void 0===u?"data-micromodal-trigger":u,p=e.closeTrigger,h=void 0===p?"data-micromodal-close":p,m=e.disableScroll,v=void 0!==m&&m,y=e.disableFocus,g=void 0!==y&&y,b=e.awaitCloseAnimation,_=void 0!==b&&b,w=e.debugMode,x=void 0!==w&&w;c(this,t),this.modal=document.getElementById(n),this.config={debugMode:x,disableScroll:v,openTrigger:f,closeTrigger:h,onShow:a,onClose:l,awaitCloseAnimation:_,disableFocus:g},r.length>0&&this.registerTriggers.apply(this,d(r)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}return u(t,[{key:"registerTriggers",value:function(){for(var t=this,e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];n.filter(Boolean).forEach(function(e){e.addEventListener("click",function(){return t.showModal()})})}},{key:"showModal",value:function(){this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add("is-open"),this.setFocusToFirstNode(),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.onShow(this.modal)}},{key:"closeModal",value:function(){var t=this.modal;this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus(),this.config.onClose(this.modal),this.config.awaitCloseAnimation?this.modal.addEventListener("animationend",function e(){t.classList.remove("is-open"),t.removeEventListener("animationend",e,!1)},!1):t.classList.remove("is-open")}},{key:"closeModalById",value:function(t){this.modal=document.getElementById(t),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(t){if(this.config.disableScroll){var e=document.querySelector("body");switch(t){case"enable":Object.assign(e.style,{overflow:"",height:""});break;case"disable":Object.assign(e.style,{overflow:"hidden",height:"100vh"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(t){t.target.hasAttribute(this.config.closeTrigger)&&(this.closeModal(),t.preventDefault())}},{key:"onKeydown",value:function(t){27===t.keyCode&&this.closeModal(t),9===t.keyCode&&this.maintainFocus(t)}},{key:"getFocusableNodes",value:function(){var t=this.modal.querySelectorAll(o);return Array.apply(void 0,d(t))}},{key:"setFocusToFirstNode",value:function(){if(!this.config.disableFocus){var t=this.getFocusableNodes();t.length&&t[0].focus()}}},{key:"maintainFocus",value:function(t){var e=this.getFocusableNodes();if(this.modal.contains(document.activeElement)){var n=e.indexOf(document.activeElement);t.shiftKey&&0===n&&(e[e.length-1].focus(),t.preventDefault()),t.shiftKey||n!==e.length-1||(e[0].focus(),t.preventDefault())}else e[0].focus()}}]),t}(),i=null,a=function(t){if(!document.getElementById(t))return console.warn("MicroModal v0.3.2: ❗Seems like you have missed %c'"+t+"'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'+t+'"></div>'),!1},s=function(t,e){if(function(t){if(t.length<=0)console.warn("MicroModal v0.3.2: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>')}(t),!e)return!0;for(var n in e)a(n);return!0},{init:function(t){var e=Object.assign({},{openTrigger:"data-micromodal-trigger"},t),n=[].concat(d(document.querySelectorAll("["+e.openTrigger+"]"))),o=function(t,e){var n=[];return t.forEach(function(t){var o=t.attributes[e].value;void 0===n[o]&&(n[o]=[]),n[o].push(t)}),n}(n,e.openTrigger);if(!0!==e.debugMode||!1!==s(n,o))for(var i in o){var a=o[i];e.targetModal=i,e.triggers=[].concat(d(a)),new r(e)}},show:function(t,e){var n=e||{};n.targetModal=t,!0===n.debugMode&&!1===a(t)||(i=new r(n)).showModal()},close:function(t){t?i.closeModalById(t):i.closeModal()}}),p=function(){return(p=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},h=function(){return function(t){this.options=t}}();!function(t){t[t.Add=0]="Add",t[t.Remove=1]="Remove"}(l||(l={}));var m=function(){function t(){this.notifications=[]}return t.prototype.push=function(t){this.notifications.push(t),this.updateFn(t,l.Add,this.notifications)},t.prototype.splice=function(t,e){var n=this.notifications.splice(t,e)[0];this.updateFn(n,l.Remove,this.notifications)},t.prototype.indexOf=function(t){return this.notifications.indexOf(t)},t.prototype.onupdate=function(t){this.updateFn=t},t}(),v={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:!0},y=function(){function t(){this.notifications=[];var t=document.createDocumentFragment(),e=this._createHTLMElement({tagName:"div",className:"notyf"});t.appendChild(e),document.body.appendChild(t),this.container=e,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer()}return t.prototype.update=function(t,e){e===l.Add?this.addNotification(t):e===l.Remove&&this.removeNotification(t)},t.prototype.removeNotification=function(t){var e,n,o=this,r=this._popRenderedNotification(t);r&&((e=r.node).classList.add("notyf__toast--disappear"),e.addEventListener(this.animationEndEventName,n=function(t){t.target===e&&(e.removeEventListener(o.animationEndEventName,n),o.container.removeChild(e))}))},t.prototype.addNotification=function(t){var e=this._renderNotification(t);this.notifications.push({notification:t,node:e}),this._announce(t.options.message||"Notification")},t.prototype._renderNotification=function(t){var e=this._buildNotificationCard(t),n=t.options.className;return n&&e.classList.add(n),this.container.appendChild(e),e},t.prototype._popRenderedNotification=function(t){for(var e=-1,n=0;n<this.notifications.length&&e<0;n++)this.notifications[n].notification===t&&(e=n);if(-1!==e)return this.notifications.splice(e,1)[0]},t.prototype._buildNotificationCard=function(t){var e=t.options,n=e.icon,o=this._createHTLMElement({tagName:"div",className:"notyf__toast"}),r=this._createHTLMElement({tagName:"div",className:"notyf__ripple"}),i=this._createHTLMElement({tagName:"div",className:"notyf__wrapper"}),a=this._createHTLMElement({tagName:"div",className:"notyf__message"});a.innerHTML=e.message||"";var s=e.backgroundColor;if(n&&"object"==typeof n){var l=this._createHTLMElement({tagName:"div",className:"notyf__icon"}),c=this._createHTLMElement({tagName:n.tagName||"i",className:n.className,text:n.text});s&&(c.style.color=s),l.appendChild(c),i.appendChild(l)}return i.appendChild(a),o.appendChild(i),s&&(e.ripple?(r.style.backgroundColor=s,o.appendChild(r)):o.style.backgroundColor=s),o},t.prototype._createHTLMElement=function(t){var e=t.tagName,n=t.className,o=t.text,r=document.createElement(e);return n&&(r.className=n),r.textContent=o||null,r},t.prototype._createA11yContainer=function(){var t=this._createHTLMElement({tagName:"div",className:"notyf-announcer"});t.setAttribute("aria-atomic","true"),t.setAttribute("aria-live","polite"),t.style.border="0",t.style.clip="rect(0 0 0 0)",t.style.height="1px",t.style.margin="-1px",t.style.overflow="hidden",t.style.padding="0",t.style.position="absolute",t.style.width="1px",t.style.outline="0",document.body.appendChild(t),this.a11yContainer=t},t.prototype._announce=function(t){var e=this;this.a11yContainer.textContent="",setTimeout(function(){e.a11yContainer.textContent=t},100)},t.prototype._getAnimationEndEventName=function(){var t,e=document.createElement("_fake"),n={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"};for(t in n)if(void 0!==e.style[t])return n[t];return"animationend"},t}(),g=function(){function t(t){var e=this;this.notifications=new m,this.view=new y;var n=this.registerTypes(t);this.options=p({},v,t),this.options.types=n,this.notifications.onupdate(function(t,n){e.view.update(t,n)})}return t.prototype.error=function(t){var e=this.normalizeOptions("error",t);this.open(e)},t.prototype.success=function(t){var e=this.normalizeOptions("success",t);this.open(e)},t.prototype.open=function(t){var e=this.options.types.find(function(e){return e.type===t.type})||{},n=p({},e,t);n.ripple=void 0===n.ripple?this.options.ripple:n.ripple;var o=new h(n);this._pushNotification(o)},t.prototype._pushNotification=function(t){var e=this;this.notifications.push(t);var n=t.options.duration||this.options.duration;setTimeout(function(){var n=e.notifications.indexOf(t);e.notifications.splice(n,1)},n)},t.prototype.normalizeOptions=function(t,e){var n={type:t};return"string"==typeof e?n.message=e:"object"==typeof e&&(n=p({},n,e)),n},t.prototype.registerTypes=function(t){var e=(t&&t.types||[]).slice();return v.types.map(function(t){var n=e.findIndex(function(e){return e.type===t.type}),o=-1!==n?e.splice(n,1)[0]:{};return p({},t,o)}).concat(e)},t}(),b=(n(7),{form:document.querySelector(".note-editor"),formInputTitle:document.querySelector("input.note-editor__input"),formInputBody:document.querySelector("textarea.note-editor__input"),search:document.querySelector(".search-form"),list:document.querySelector(".note-list"),listItem:document.querySelector(".note-list__item"),btnOpenForm:document.querySelector('.page-header__button[data-action="open-editor"]'),btnFormSubmit:document.querySelector('.modal__btn[type="submit"]')}),_=0,w="Заметка успешно удалена",x="Заметка успешно добавлена 🎉",k="Заполните поля редактора",M=n(4),E=n.n(M),N=n(3),C=function(t){switch(t.priority){case 0:t.priority="Low";break;case 1:t.priority="Normal";break;case 2:t.priority="Hight";break;default:t.priority=t.priority}},S=function(t,e){Array.isArray(e)?(e.map(function(t){return C(t)}),t.insertAdjacentHTML("beforeend",e.map(function(t){return E()(t)}).join(""))):(C(e),t.insertAdjacentHTML("beforeend",E()(e)))};function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}S(b.list,JSON.parse(localStorage.getItem("allNotes"))||N);var T=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._notes=e}var e,n,o;return e=t,(n=[{key:"findNoteById",value:function(t){return this._notes.find(function(e){return e.id===t})}},{key:"saveNote",value:function(t){this._notes.push(t)}},{key:"saveNote",value:function(t){var e=this;new Promise(function(n,o){setTimeout(function(){e._notes.push(t);localStorage.setItem("allNotes",JSON.stringify(e._notes));n(e._notes),o("ERR: note not added")},0)}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},{key:"deleteNote",value:function(t){var e=this;new Promise(function(n,o){setTimeout(function(){e._notes=e._notes.filter(function(e){return e.id!==t}),localStorage.setItem("allNotes",JSON.stringify(e._notes)),n(e._notes),o("ERR: note not deleted")},0)}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},{key:"updateNoteContent",value:function(t,e){if(this.findNoteById(t))return this._notes[this._notes.indexOf(this.findNoteById(t))]=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){O(t,e,n[e])})}return t}({},this.findNoteById(t),e)}},{key:"updateNotePriority",value:function(t,e){return this.findNoteById(t).priority=e}},{key:"filterNotesByQuery",value:function(t){return this._notes.filter(function(e){return e.title.toLowerCase().includes(t.toLowerCase())||e.body.toLowerCase().includes(t.toLowerCase())})}},{key:"filterNotesByPriority",value:function(t){return this._notes.filter(function(e){return e.priority===t})}},{key:"notes",get:function(){return this._notes}}])&&P(e.prototype,n),o&&P(e,o),t}(),L=n(25),j=new g,I=new T(JSON.parse(localStorage.getItem("allNotes"))||N);b.formInputTitle.value=localStorage.getItem("title")||"",b.formInputBody.value=localStorage.getItem("body")||"";b.form.addEventListener("submit",function(t){if(t.preventDefault(),0===b.formInputTitle.value.trim().length||0===b.formInputBody.value.trim().length)j.error(k);else{var e={id:L.generate(),title:b.formInputTitle.value,body:b.formInputBody.value,priority:_};I.saveNote(e),S(b.list,e),j.success(x),b.form.reset(),f.close("note-editor-modal")}}),b.form.addEventListener("keyup",function(){localStorage.setItem("title",b.formInputTitle.value),localStorage.setItem("body",b.formInputBody.value)}),b.list.addEventListener("click",function(){"delete"===event.target.textContent&&(I.deleteNote(event.target.closest(".note-list__item").dataset.id),event.target.closest(".note-list__item").remove(),j.success(w))}),b.search.addEventListener("input",function(t){var e=t.target;b.list.innerHTML="",S(b.list,I.filterNotesByQuery(e.value))}),b.btnOpenForm.addEventListener("click",function(){f.show("note-editor-modal")})}]);
//# sourceMappingURL=bundle.js.map