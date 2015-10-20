//# sourceMappingURL=_.js.map
(function(){window._lastObj=null;window._modLoaded=[];window._eventStore=[];var m=function(a){return new n(a)},n=function(a){a=document.querySelectorAll(a);this.length=a.length;this.version="0.0.6B";this.revision="r10";this.fullversion=this.version+this.revision;this.isBeta=this.version.match(/\u00df/g)?!0:!1;this.isAlpha=this.version.match(/\u03b1/g)?!0:!1;this.isCompiled=!1;this.isStable=this.isBeta||this.isAlpha?!1:!0;this.ScriptRX="<script[^>]*>([\\S\\s]*?)\x3c/script\\s*>";this.JSONRX="/^/*-secure-([sS]*)*/s*$/";
this.objectclass={"[object Boolean]":"boolean","[object Number":"number","[object String":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object","[object Error]":"error"};for(var b=0;b<this.length;b++)this[b]=a[b],window._lastObj=a[b];return this};m.fn=n.prototype={_:function(a,b){if(b)console.error("[_.js Error: NOT SUPPORTED]\nError, Failed to set '"+a+"' to '"+b+"'.");else return eval("this."+a)},emulatejQuery:function(){window.$=
window._;window._$=window._;window.jQuery=window._;return window._jQuery=window._},$:function(){alert("Hi");confirm("Did you know that i'm not jQuery?")?alert("Why did you even try this?"):alert("Nope, i'm not jQuery");alert("Thanks for using '_.js'!\n"+decodeURIComponent("%F0%9F%92%99"))},extend:function(){var a,b,c,d,e,f=arguments[0]||{},g=1,h=arguments.length,l=!1;"boolean"===typeof f&&(l=f,f=arguments[g]||{},g++);"object"===typeof f||this.isFunction(f)||(f={});g===h&&(f=this,g--);for(;g<h;g++)if(null!=
(e=arguments[g]))for(d in e)a=f[d],c=e[d],f!==c&&(l&&c&&(this.isPlainObject(c)||(b=this.isArray(c)))?(b?(b=!1,a=a&&this.isArray(a)?a:[]):a=a&&this.isPlainObject(a)?a:{},f[d]=this.extend(l,a,c)):void 0!==c&&(f[d]=c));return f},isArray:Array.isArray||function(a){return"array"===this.type(a)?!0:!1},on:function(a,b,c){if("function"===typeof b)for(c=this.length;c--;)this[c].addEventListener(a,b),window._eventStore.push([window._eventStore.length+1,this[c],a,b]);else for(c=this.length;c--;){b=[];for(curEvent in window._eventStore)curEvent=
window._eventStore[curEvent],this[c]==curEvent[1]&&a==curEvent[2]?curEvent[1].removeEventListener(curEvent[2],curEvent[3]):b.push(curEvent);window._eventStore=b}},error:function(a){throw Error(a);},isFunction:function(a){return"function"===this.type(a)},type:function(a){return null==a?a+"":"object"===typeof a||"function"===typeof a?this.objectclass[Object.prototype.toString.call(a)]||"object":typeof a},isPlainObject:function(a){var b,c={}.hasOwnProperty;if(!a||"object"!==this.type(a)||a.nodeType)return!1;
try{if(a.constructor&&!c.call(a,"constructor")&&!c.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}if({}.ownLast)for(b in a)return c.call(a,b);for(b in a);return void 0===b||c.call(a,b)},require:function(a,b,c){"undefined"===typeof c&&(c=!1);if("object"===typeof a)for(var d=a.length-1;0<=d;d--)if(-1==window._modLoaded.indexOf(a[d])){window._modLoaded.push(a[d]);a[d].match(/\.js/g)||(a[d]+=".js");this.startsWith(a[d],"_")&&!c&&(a[d]="https://raw.githubusercontent.com/wesdegroot/_.js/master/latest/modules/"+
a[d].toLowerCase());var e=document.createElement("script");e.type="text/javascript";e.src=a[d];1==d&&(e.onreadystatechange=b);1==d&&(e.onload=b);e.onerror="_().require('https://raw.githubusercontent.com/wesdegroot/_.js/master/latest/modules/"+a[d].toLowerCase()+"', "+b+");";document.head.appendChild(e)}else b();else"string"===typeof a?-1==window._modLoaded.indexOf(a)?(window._modLoaded.push(a),a.match(/\.js/g)||(a+=".js"),this.startsWith(a,"_")&&!c&&(a="https://raw.githubusercontent.com/wesdegroot/_.js/master/latest/modules/"+
a.toLowerCase()),e=document.createElement("script"),e.type="text/javascript",e.src=a,e.onreadystatechange=b,e.onload=b,e.onerror="_().require('https://raw.githubusercontent.com/wesdegroot/_.js/master/latest/modules/"+a.toLowerCase()+"', "+b+");",document.head.appendChild(e)):b():console.error("Please use only a array, or a string.")},format:function(){var a=arguments,b=1;return a[0].replace(/%((%)|s|d)/g,function(c){var d=null;if(c[2])d=c[2];else{d=a[b];switch(c){case "%d":d=parseFloat(d),isNaN(d)&&
(d=0)}b++}return d})},hide:function(){for(var a=this.length;a--;)window._lastObj=this[a],this[a].style.display="none";return this},html:function(a){for(var b=this.length;b--;){window._lastObj=this[b];if("undefined"===typeof a)return this[b].innerHTML;this[b].innerHTML=a}return this},show:function(){for(var a=this.length;a--;)window._lastObj=this[a],this[a].style.display="block";return this},framebreak:function(){top.location!=location&&(top.location.href=document.location.href);return this},ajaxPOST:function(a,
b){for(var c=this.length;c--;){window._lastObj=this[c];var d,e=this[c],f=a.action;d=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");for(var g=a.elements,f=a.action,h="",l,k=0;k<g.length;k++)(l="select"==g[k].tagName.toLowerCase()?g[k].options[g[k].selectedIndex].value:g[k].value)&&(h+=g[k].name+"="+encodeURIComponent(l)+"&");h+="AJAXby="+encodeURIComponent("_.js");d.open("POST",f,!0);d.setRequestHeader("Content-type","application/x-www-form-urlencoded");d.onreadystatechange=
function(){if(4==d.readyState&&200==d.status){e.innerHTML=d.responseText;for(var a=e.getElementsByTagName("script"),b=0,c=a.length;b<c;b++)eval(a[b].innerHTML);a=e.getElementsByTagName("form");b=0;for(c=a.length;b<c;b++)"post"==a[b].method.toLowerCase()&&a[b].setAttribute("onsubmit","event.preventDefault();_('."+e.className+"').ajaxPOST(this);")}};d.send(h)}return!1},ajax:function(a,b){for(var c=this.length;c--;){window._lastObj=this[c];var d,e=this[c];d=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");
d.onreadystatechange=function(){if(4==d.readyState&&200==d.status){e.innerHTML=d.responseText;for(var a=e.getElementsByTagName("script"),b=0,c=a.length;b<c;b++)eval(a[b].innerHTML);a=e.getElementsByTagName("form");b=0;for(c=a.length;b<c;b++)"post"==a[b].method.toLowerCase()&&a[b].setAttribute("onsubmit","event.preventDefault();_('."+e.className+"').ajaxPOST(this);")}};d.open("GET",a,!0);d.send()}return this},noConflict:function(){"object"===typeof p&&(window._=p);return m},isLocal:function(){return"file:"!=
window.location.protocol?window.location.href.match(/(localhost|127\.0\.0\.1|::1)/g)?!0:!1:!0},requireSSL:function(){"https:"==window.location.protocol||"file:"==window.location.protocol||window.location.href.match(/(localhost|127\.0\.0\.1|::1)/g)||(window.location.href="https:"+window.location.href.substring(window.location.protocol.length))},loadExtension:function(a,b){console.error("Please do not use _().loadExtension(...) anymore");return this.require(a,b)},isUndefined:function(a){return"undefined"==
typeof a},isEmpty:function(a){return""==a},isBlank:function(a){return/^\s*$/.test(a)},stripTags:function(){for(var a=this.length;a--;)window._lastObj=this[a],this[a].innerHTML=this[a].innerHTML.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi,"")},stripScripts:function(){for(var a=this.length;a--;)window._lastObj=this[a],this[a].innerHTML=this[a].innerHTML.replace(new RegExp(this.ScriptRX,"img"),"")},css:function(a,b){for(var c=this.length;c--;){window._lastObj=this[c];if(this.isUndefined(b))return window.getComputedStyle(this[c]).getPropertyValue(a);
a.replace(/-/g,"");this[c].setAttribute("style",a+":"+b+";");return this}},escapeHTML:function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},unescapeHTML:function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")},toArray:function(a){if("string"===typeof a)return a.split("");var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(a[c]);return b},runTest:function(a,b){return"function"!=typeof a?a==b:a()==b},includes:function(a,b){return-1<a.indexOf(b)},
startsWith:function(a,b){return 0===a.lastIndexOf(b,0)},endsWith:function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)===c},capitalize:function(a){return a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()},camelize:function(a){return a.replace(/-+(.)?/g,function(a,c){return c?c.toUpperCase():""})},scrollToBottom:function(){for(var a=this.length;a--;)window._lastObj=this[a],this[a].scrollTop=0;return!0},scrollToTop:function(){for(var a=this.length;a--;)window._lastObj=this[a],this[a].scrollTop=
this[a].scrollHeight;return!0},map:function(a,b){for(var c=[],d=0;d<a.length;d++){var e=b(d,a[d]);"undefined"==typeof e&&m.error("ERROR WHILE MAPPING");if("string"===typeof e[0])for(j=0;j<e.length;j++)c.push(e[j]);else c.push(b(d,a[d]))}return c},each:function(a,b){var c=[],d=0,e;for(e in a)a.hasOwnProperty(e)&&(isNaN(e)?c.push(b(e,a[e])):(c.push(b(d,a[e])),d++));return c},merge:function(){for(var a={},b=0,c=arguments.length,d;b<c;b++)for(d in arguments[b])arguments[b].hasOwnProperty(d)&&(a[d]=arguments[b][d]);
return a},truncate:function(a,b){for(var c=this.length;c--;)window._lastObj=this[c],a=a||30,b=this.isUndefined(b)?"...":b,this[c].innerHTML=this[c].innerHTML.length>a?this[c].innerHTML.substring(0,a)+b:String(this[c].innerHTML);return!0}};window.onerror=function(a,b,c,d,e){b=(d?" (col: "+d+")":"")+(e?"\nerror: "+e:"");console.log("[_.js INFORMATION]\nError: "+a+"\nline: "+c+b);return!0};var q=new n;for(copy in q)eval("_."+copy+" = tLib."+copy+";");if(window._)var p=window._;return window._=m})();
