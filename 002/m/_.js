//# sourceMappingURL=_.js.map
(function(){var e=function(a){return new k(a)},k=function(a){a=document.querySelectorAll(a);var c=0;this.length=a.length;this.version="0.0.2";this.website="http://www.wdgwv.com";this.revision="r01";this.isCompiled=!1;for(this.isStable=!0;c<this.length;c++)this[c]=a[c];return this};e.fn=k.prototype={hide:function(){for(var a=this.length;a--;)this[a].style.display="none";return this},html:function(a){for(var c=this.length;c--;)this[c].innerHTML=a;return this},show:function(){for(var a=this.length;a--;)this[a].style.display=
"block";return this},qr:function(a){for(var c=this.length;c--;)if("function"==typeof makeQRnow)this[c].src=makeQRnow(a);else return!1;return this},framebreak:function(){top.location!=location&&(top.location.href=document.location.href);return this},ajaxPOST:function(a,c){for(var l=this.length;l--;){var d,f=this[l],m=a.action;d=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");for(var b=a.elements,m=a.action,h="",e,g=0;g<b.length;g++)(e="SELECT"==b[g].tagName?b[g].options[b[g].selectedIndex].value:
b[g].value)&&(h+=b[g].name+"="+encodeURIComponent(e)+"&");h+="WDGWVAJAX=true";d.open("POST",m,!0);d.setRequestHeader("Content-type","application/x-www-form-urlencoded");d.onreadystatechange=function(){if(4==d.readyState&&200==d.status){f.innerHTML=d.responseText;for(var a=f.getElementsByTagName("script"),b=0,c=a.length;b<c;b++)eval(a[b].innerHTML);a=f.getElementsByTagName("form");b=0;for(c=a.length;b<c;b++)console.log(a[b]),a[b].setAttribute("onsubmit","event.preventDefault();_('."+f.className+"').ajaxPOST(this);")}};
d.send(h)}return!1},ajax:function(a,c){for(var e=this.length;e--;){var d,f=this[e];d=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");d.onreadystatechange=function(){if(4==d.readyState&&200==d.status){f.innerHTML=d.responseText;for(var a=f.getElementsByTagName("script"),b=0,c=a.length;b<c;b++)eval(a[b].innerHTML);a=f.getElementsByTagName("form");b=0;for(c=a.length;b<c;b++)a[b].setAttribute("onsubmit","event.preventDefault();_('."+f.className+"').ajaxPOST(this);")}};
d.open("GET",a,!0);d.send()}return this},noConflict:function(){"object"===typeof n&&(window._=n);return e}};if(window._)var n=window._;return window._=e})();
