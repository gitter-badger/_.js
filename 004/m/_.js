//# sourceMappingURL=_.js.map
(function(){var g=function(a){return new l(a)},l=function(a){a=document.querySelectorAll(a);this.length=a.length;this.version="0.0.3\u00df";this.revision="r25";this.fullversion=this.version+this.revision;this.isBeta=this.version.match(/\u00df/g)?!0:!1;this.isAlpha=this.version.match(/\u03b1/g)?!0:!1;this.isCompiled=!1;this.isStable=this.isBeta||this.isAlpha?!1:!0;this.ScriptRX="<script[^>]*>([\\S\\s]*?)\x3c/script\\s*>";this.JSONRX="/^/*-secure-([sS]*)*/s*$/";for(var b=0;b<this.length;b++)this[b]=
a[b];return this};g.fn=l.prototype={_:function(a,b){b&&(eval("this."+a+"='"+b+"';"),console.error("Error, Failed to set '"+a+"' to '"+b+"'"));return eval("this."+a)},$:function(){alert("Hi");confirm("Did you know that i'm not jQuery?")?alert("Why did you even try this?"):alert("Nope, i'm not jQuery");alert("Thanks for using '_.js'!\n"+decodeURIComponent("%F0%9F%92%99"))},require:function(a,b){if("object"===typeof a)for(var c=a.length-1;0<=c;c--){a[c].match(/\.js/g)||(a[c]+=".js");var e=document.getElementsByTagName("head")[0],
d=document.createElement("script");d.type="text/javascript";d.src=a[c];1==c&&(d.onreadystatechange=b);1==c&&(d.onload=b);e.appendChild(d)}else"string"===typeof a?(a.match(/\.js/g)||(a+=".js"),e=document.getElementsByTagName("head")[0],d=document.createElement("script"),d.type="text/javascript",d.src=a,d.onreadystatechange=b,d.onload=b,e.appendChild(d)):console.error("Please use only a array, or a string.")},hide:function(){for(var a=this.length;a--;)this[a].style.display="none";return this},html:function(a){for(var b=
this.length;b--;){if("undefined"===typeof a)return this[b].innerHTML;this[b].innerHTML=a}return this},show:function(){for(var a=this.length;a--;)this[a].style.display="block";return this},framebreak:function(){top.location!=location&&(top.location.href=document.location.href);return this},ajaxPOST:function(a,b){for(var c=this.length;c--;){var e,d=this[c],m=a.action;e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");for(var h=a.elements,m=a.action,k="",g,f=0;f<h.length;f++)(g=
"select"==h[f].tagName.toLowerCase()?h[f].options[h[f].selectedIndex].value:h[f].value)&&(k+=h[f].name+"="+encodeURIComponent(g)+"&");k+="AJAXby="+encodeURIComponent("_.js");e.open("POST",m,!0);e.setRequestHeader("Content-type","application/x-www-form-urlencoded");e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){d.innerHTML=e.responseText;for(var a=d.getElementsByTagName("script"),b=0,c=a.length;b<c;b++)eval(a[b].innerHTML);a=d.getElementsByTagName("form");b=0;for(c=a.length;b<c;b++)a[b].setAttribute("onsubmit",
"event.preventDefault();_('."+d.className+"').ajaxPOST(this);")}};e.send(k)}return!1},ajax:function(a,b){for(var c=this.length;c--;){var e,d=this[c];e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){d.innerHTML=e.responseText;for(var a=d.getElementsByTagName("script"),b=0,c=a.length;b<c;b++)eval(a[b].innerHTML);a=d.getElementsByTagName("form");b=0;for(c=a.length;b<c;b++)a[b].setAttribute("onsubmit",
"event.preventDefault();_('."+d.className+"').ajaxPOST(this);")}};e.open("GET",a,!0);e.send()}return this},noConflict:function(){"object"===typeof n&&(window._=n);return g},requireSSL:function(){"https:"==window.location.protocol||"file:"==window.location.protocol||window.location.href.match(/(localhost|127\.0\.0\.1|::1)/g)||(window.location.href="https:"+window.location.href.substring(window.location.protocol.length))},loadExtension:function(a,b){return this.require(a,b)},isUndefined:function(a){return"undefined"==
typeof a},isEmpty:function(a){return""==a},isBlank:function(a){return/^\s*$/.test(a)},stripTags:function(){for(var a=this.length;a--;)this[a].innerHTML=this[a].innerHTML.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi,"")},stripScripts:function(){for(var a=this.length;a--;)this[a].innerHTML=this[a].innerHTML.replace(new RegExp(this.ScriptRX,"img"),"")},css:function(a,b){for(var c=this.length;c--;)if(this.isUndefined(b))return window.getComputedStyle(this[c]).getPropertyValue(a)},escapeHTML:function(a){return a.replace(/&/g,
"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},unescapeHTML:function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")},toArray:function(a){return a.split("")},runTest:function(a,b){return"function"!=typeof a?a==b:a()==b},includes:function(a,b){return-1<a.indexOf(b)},startsWith:function(a,b){return 0===a.lastIndexOf(b,0)},endsWith:function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)===c},capitalize:function(a){return a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()},
camelize:function(a){return a.replace(/-+(.)?/g,function(a,c){return c?c.toUpperCase():""})},truncate:function(a,b){for(var c=this.length;c--;)a=a||30,b=this.isUndefined(b)?"...":b,this[c].innerHTML=this[c].innerHTML.length>a?this[c].innerHTML.substring(0,a)+b:String(this[c].innerHTML);return!0}};window.onerror=function(a,b,c,e,d){b=(e?" (col: "+e+")":"")+(d?"\nerror: "+d:"");console.error("[_.js INFORMATION]\nError: "+a+"\nline: "+c+b);return!0};if(window._)var n=window._;return window._=g})();
