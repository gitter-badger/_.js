/*
**                         _
**                        (_)
**                         _    _____
**                        | |  / ____|
**                        | |  | (___
**                    _   | |  \___  \
**     ______    _   | |__| |  ____) |
**    |______|  (_)   \____/  |______/
**                         v0.0.7 Beta
**              JS Standard Code Style
**
** https://www.github.com/wesdegroot/_.js/
** or https://www.wdgwv.com
**
** Git....: https://github.com/wesdegroot/_.js
** Todo...: https://github.com/wesdegroot/_.js/issues
** Licence: https://github.com/wesdegroot/_.js/blob/master/LICENCE.md (CC BY 4.0)
** Latest.: https://raw.githubusercontent.com/wesdegroot/_.js/master/latest/_.js
*/

// _ function
;(function () {
  // * window._lastObj
  // *
  // * Last selected object
  // *
  // * @var object _lastObj
  window._lastObj = null

  // * window._modLoaded
  // *
  // * Wich modules are loaded?
  // *
  // * @var array _modLoaded
  window._modLoaded = []

  // * window._eventStore
  // *
  // * Event store (On.....)
  // *
  // * @var array _eventStore
  window._eventStore = []

  // _ returns new Library object that hold our selector. Ex: _('.wrapper')
  var _ = function (params) {
    return new Library(params)
  }

  // In our Library we get our selector with querySelectorAll
  var Library = function (params) {
    // * this.selector
    // *
    // * We'll gonna set the selector
    // *
    // * @var object selector
    var selector = typeof params === 'undefined' ? [] : (params.indexOf('>') === -1) ? document.querySelectorAll(params) : []

    // * this.lenth
    // *
    // * We'll gonna load the length of the selector
    // *
    // * @var int lenth
    this.length = selector.length

    // * this.param
    // *
    // * Wich param is sended?
    // *
    // * @var string param
    this.param = params

    // * this.version
    // *
    // * We'll gonna set the version
    // *
    // * @var string version
    this.version = '0.0.7b'

    // * this.revision
    // *
    // * We'll gonna set the revision (prefix: r)
    // *
    // * @var string revision
    this.revision = 'r151023-2'

    // * this.fullversion
    // *
    // * We'll gonna mix the version & revision (full build string)
    // *
    // * @var string fullversion
    this.fullversion = this.version + this.revision

    // * this.isBeta
    // *
    // * Is product in Beta status
    // *
    // * @var bool isBeta
    this.isBeta = (this.version.match(/b/g))

    // * this.isAlpha
    // *
    // * Is product in Aplha (alfa) status
    // *
    // * @var bool isAlpha
    // * @deprecated v0.0.6
    // * @removed v0.1.0
    this.isAlpha = (this.version.match(/a/g))

    // * this.isCompiled
    // *
    // * is this a compiled version
    // * Please note that _.js is always uncompiled.
    // * Compiled version = _.min.js
    // *
    // * @var bool isCompiled
    this.isCompiled = false

    // * this.isStable
    // *
    // * is this a stable version
    // *
    // * @var bool isStable
    this.isStable = (!this.isBeta && !this.isAlpha)

    // * this.scriptRX
    // *
    // * Regex for script tag
    // *
    // * @var string scriptRX
    this.ScriptRX = '<script[^>]*>([\\S\\s]*?)<\/script\\s*>'

    // * this.JSONRX
    // *
    // * Regex for JSON
    // *
    // * @var string JSONRX
    this.JSONRX = '/^\/\*-secure-([\s\S]*)\*\/\s*$/'

    // * this.objectclass
    // *
    // * Possible object classes
    // *
    // * @var object objectclass
    this.objectclass = { '[object Boolean]': 'boolean', '[object Number': 'number',
      '[object String': 'string', '[object Function]': 'function',
      '[object Array]': 'array', '[object Date]': 'date', '[object RegExp]': 'regexp',
    '[object Object]': 'object', '[object Error]': 'error' }

    // * temp
    // *
    // * Helper
    // * -> everyone lies (Especially Chrome), IE=Trident...
    // *
    // * @new v0.0.7
    // * @var string temp
    // * @internal
    var temp = navigator.userAgent.split(' ')[navigator.userAgent.split(' ').length - 2].split('/')[0] === 'Chrome'
      ? navigator.userAgent.split(' ')[navigator.userAgent.split(' ').length - 2].split('/')[0]
      : navigator.userAgent.split(' ')[navigator.userAgent.split(' ').length - 1].split('/')[0]

    // * this.browser
    // *
    // * Browser info
    // * ie, firefox, safari, opera, edge, chrome, userAgent, supportTouch...
    // *
    // * @new v0.0.7
    // * @var object browser
    this.browser = {
      ie: navigator.userAgent.indexOf('Trident'), // Always try to be funnny...
      firefox: (temp === 'Firefox'),
      safari: (temp === 'Safari'),
      opera: (temp === 'OPR'),
      edge: (temp === 'Edge'),
      chrome: (temp === 'Chrome'),
      userAgent: navigator.userAgent,
      supportTouch: ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
    }

    // * this.getBrowser
    // *
    // * Browser name
    // *
    // * @new v0.0.7
    // * @var string getBrowser
    this.getBrowser = temp

    // Add selector to object for method chaining
    for (var i = 0; i < this.length; i++) {
      this[i] = selector[i]
      window._lastObj = selector[i]
    }

    // Return as object
    return this
  }

  // Extend the Library object.
  _.fn = Library.prototype = {
    /**
     * _
     *
     * Display/Set config
     *
     * @param object [object] Wrapper
     * @param string configKey config parameter
     * @example _._('version')
     */
    _: function (configKey) {
      return this[configKey]
    },

    /**
     * emulatejQuery
     *
     * emulate jQuery's $ script :D
     *
     * @param object [object] Wrapper
     * @return this
     * @example _.emulatejQuery()
     */
    emulatejQuery: function () {
      window.$ = window._
      window._$ = window._
      window.jQuery = window._
      window._jQuery = window._
      return window._
    },

    /**
     * $
     *
     * Easter egg ;)
     *
     * @param object [object] Wrapper
     * @return this
     * @example _.$()
     */
    $: function () {
      window.alert('Hi')
      var answer = window.confirm("Did you know that i'm not jQuery?")
      if (answer) {
        window.alert('Why did you even try this?')
      } else {
        window.alert("Nope, i'm not jQuery")
      }
      window.alert("Thanks for using '_.js'!\n" +
        decodeURIComponent('%F0%9F%92%99'))
      return
    },

    /**
     * extend
     *
     * Merge the contents of two or more objects together into the first object.
     *
     * @param object object Wrapper
     * @param bool [deep] Deep?
     * @param object object Object1
     * @param object object Object2
     * @return object
     * @example _.extend(true, {apple:0, chicken:{weight:52, price:100}, cherry:97},{chicken:{price:200}, durian:100})
     */
    extend: function () {
      // Thanks to jQuery for this one ;)
      var src
      var copyIsArray
      var copy
      var name
      var options
      var clone
      var target = arguments[0] || {}
      var i = 1
      var length = arguments.length
      var deep = false
      // Handle a deep copy situation
      if (typeof target === 'boolean') {
        deep = target
        // skip the boolean and the target
        target = arguments[ i ] || {}
        i++
      }
      // Handle case when target is a string or something (possible in deep copy)
      if (typeof target !== 'object' && !this.isFunction(target)) {
        target = {}
      }
      // extend _.js itself if only one argument is passed
      if (i === length) {
        target = this
        i--
      }
      for (; i < length; i++) {
        // Only deal with non-null/undefined values
        if ((options = arguments[ i ]) != null) {
          // Extend the base object
          for (name in options) {
            src = target[ name ]
            copy = options[ name ]
            // Prevent never-ending loop
            if (target === copy) continue
            // Recurse if we're merging plain objects or arrays
            if (deep && copy && (this.isPlainObject(copy) || (copyIsArray = this.isArray(copy)))) {
              if (copyIsArray) {
                copyIsArray = false
                clone = src && this.isArray(src) ? src : []
              } else {
                clone = src && this.isPlainObject(src) ? src : {}
              }
              // Never move original objects, clone them
              target[ name ] = this.extend(deep, clone, copy)
            // Don't bring in undefined values
            } else if (copy !== undefined) {
              target[ name ] = copy
            }
          }
        }
      }
      // Return the modified object
      return target
    },

    /**
     * isArray
     *
     * Must be important enough that everyone need this!
     *
     * @param object [object] Wrapper
     * @param object obj object to test
     * @return bool
     * @example _.isArray(['my', 'array'])
     */
    isArray: function (obj) {
      return obj.isArray || (this.type(obj) === 'array')
    },

    /**
     * on
     *
     * On ... event
     *
     * @param object object Wrapper
     * @param string myEvent event
     * @param function|bool callback Function to use|remove
     * @return null
     * @example _('.wrapper').html('x').on('mousemove', function () { console.log('moved'); })
     * @example _('.wrapper').html('x').on('mousemove', true); // Remove.
     * @example _('.wrapper').on('mousemove', function () { console.log('moved'); })
     * @example _('.wrapper').on('mousemove', true); // Remove.
     */
    on: function (myEvent, callback) {
      var len = this.length
      if (typeof callback === 'function') {
        while (len--) {
          this[len].addEventListener(myEvent, callback)
          var tempArr = [(window._eventStore.length + 1), this[len], myEvent, callback]
          window._eventStore.push(tempArr)
        }
      } else {
        while (len--) {
          var newArray = []
          var curEvent
          for (curEvent in window._eventStore) {
            curEvent = window._eventStore[curEvent]
            if (this[len] === curEvent[1] && myEvent === curEvent[2]) {
              curEvent[1].removeEventListener(curEvent[2], curEvent[3])
            } else {
              newArray.push(curEvent)
            }
          }
          window._eventStore = newArray
        }
      }
      return null
    },

    /**
     * noop
     *
     * Function what don't do a thing...
     *
     * @new v0.0.7
     * @param object [object] Wrapper
     * @return nothing
     * @example _.noop()
     */
    noop: function () {},

    /**
     * supportTouch
     *
     * Does the client support touch (events)?
     *
     * @new v0.0.7
     * @param object [object] Wrapper
     * @return bool
     * @example _.supportTouch()
     */
    supportTouch: function () {
      return (
      ('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0)
      )
    },

    /**
     * appendTo
     *
     * append element to...
     *
     * @new v0.0.7
     * @param object [object] Wrapper
     * @param string to Append to
     * @return null
     * @example _("<b>Hi!</b>").appendTo(".inner")
     */
    appendTo: function (to) {
      if (to === 'body') {
        document.body.innerHTML += this.param
      } else if (to === 'head') {
        document.head.innerHTML += this.param
      } else if (to.substr(0, 1) === '.' || to.substr(0, 1) === '#') {
        _(to).html(this.param, true)
      } else {
        this._error('appendTo')
      }
      return null
    },

    /**
     * _error
     *
     * Internal use for error.
     * Please do use if your plugin is for public domain and a pull request is done
     * See [wiki/Module Developers](https://github.com/wesdegroot/_.js/wiki/Developers_Module) for more information.
     *
     * @internal
     * @new v0.0.7
     * @param object [object] Wrapper
     * @param string functionname Function name
     * @param string [message] Error message
     * @return null
     * @example _.error('Functionname', 'Message')
     * @example _.error('#MyModule#MyFunction', 'Message')
     */
    _error: function (functionname, message) {
      if (typeof message === 'undefined') {
        console.error('_.js Error: Invalid usage of function')
      } else {
        console.error('_.js Error: ' + message)
      }

      if (!this.startsWith(functionname, '#')) {
        if (!this.isBeta) {
          console.error('Please see: https://github.com/wesdegroot/_.js/wiki/function_' + functionname)
        } else {
          console.error('Please see: https://github.com/wesdegroot/_.js/wiki/flbeta_function_' + functionname)
        }
      } else {
        console.error('Please see: https://github.com/wesdegroot/_.js/wiki/module_' + functionname.substr(1))
      }

      return null
    },

    /**
     * error
     *
     * Throw a error (why would you ever do that?)
     *
     * @param object [object] Wrapper
     * @param string message
     * @return null
     * @example _.error('Message')
     */
    error: function (msg) {
      throw new Error(msg)
    },

    /**
     * isFunction
     *
     * Is it a fly? or a function?
     *
     * @param object [object] Wrapper
     * @param object obj object to test
     * @return bool
     * @example _.isFunction(function () {})
     */
    isFunction: function (obj) {
      return this.type(obj) === 'function'
    },

    /**
     * type
     *
     * What kind of object is parsed?
     *
     * @param object [object] Wrapper
     * @param object obj Object to test
     * @return string
     * @example _.type(function () { })
     */
    type: function (obj) {
      if (obj == null) return obj + ''
      return typeof obj === 'object' || typeof obj === 'function'
        ? this.objectclass[ Object.prototype.toString.call(obj) ] || 'object' : typeof obj
    },

    /**
     * isPlainObject
     *
     * Check to see if an object is a plain object (created using "{}" or "new Object").
     *
     * @param object [object] Wrapper
     * @param object obj Object to test
     * @return bool
     * @example _.isPlainObject(function () {})
     */
    isPlainObject: function (obj) {
      // Thanks to jQuery for this one ;)
      var key
      var hasOwn = ({}).hasOwnProperty
      var support = {}
      if (!obj || this.type(obj) !== 'object' || obj.nodeType) {
        return false
      }
      try {
        if (obj.constructor &&
          !hasOwn.call(obj, 'constructor') &&
          !hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
          return false
        }
      } catch (e) {
        return false
      }
      if (support.ownLast) {
        for (key in obj) {
          return hasOwn.call(obj, key)
        }
      }
      for (key in obj) {}
      return key === undefined || hasOwn.call(obj, key)
    },

    /**
     * require
     *
     * Load/Require a javascript file
     * if a file is starting with _ then it is a _.js module
     * DO not use _ as first character on own modules! (unless you do a pull request.)
     *
     * @param object [object] Wrapper
     * @param string|array jsArray the array of files to load (or string)
     * @param function Callback the Callback function
     * @param bool [local] if set to true then load the local copy.
     * @return null
     * @example _.require(['a', 'r', 'ra', 'y'], function () { doSomeThing(); })
     */
    require: function (jsArray, Callback, local) {
      if (typeof local === 'undefined') local = false
      if (typeof jsArray === 'object') {
        for (var i = jsArray.length - 1; i >= 0; i--) {
          if (window._modLoaded.indexOf(jsArray[i]) === -1) {
            window._modLoaded.push(jsArray[i])
            if (!jsArray[i].match(/\.js/g)) {
              jsArray[i] = jsArray[i] + '.js'
            }
            if (this.startsWith(jsArray[i], '_') && !local) {
              jsArray[i] = 'https://raw.githubusercontent.com/wesdegroot/_.js/master/latest/modules/' + jsArray[i].toLowerCase()
            }
            var script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = jsArray[i]
            if (i === 1) script.onreadystatechange = Callback
            if (i === 1) script.onload = Callback
            document.head.appendChild(script)
          } else {
            Callback()
          }
        }
      } else if (typeof (jsArray) === 'string') {
        if (window._modLoaded.indexOf(jsArray) === -1) {
          window._modLoaded.push(jsArray)
          if (!jsArray.match(/\.js/g)) jsArray = jsArray + '.js'
          if (this.startsWith(jsArray, '_') && !local) {
            jsArray = 'https://raw.githubusercontent.com/wesdegroot/_.js/master/latest/modules/' + jsArray.toLowerCase()
          }
          var scriptOne = document.createElement('script')
          scriptOne.type = 'text/javascript'
          scriptOne.src = jsArray
          scriptOne.onreadystatechange = Callback
          scriptOne.onload = Callback
          document.head.appendChild(scriptOne)
        } else {
          Callback()
        }
      } else {
        console.error('Please use only a array, or a string.')
      }
      return null
    },

    /**
     * Format
     *
     * Format sort of sprintf
     *
     * @param object [object] Wrapper
     * @param string str String
     * @param string ... Options
     * @return string
     * @example _.format('my %s', 'wesley')
     */
    format: function () {
      var args = arguments
      var string = args[0]
      var i = 1
      return string.replace(/%((%)|s|d)/g, function (m) {
        var val = null
        if (m[2]) {
          val = m[2]
        } else {
          val = args[i]
          switch (m) {
            case '%d':
              val = parseFloat(val)
              if (isNaN(val)) {
                val = 0
              }
              break
          }
          i++
        }
        return val
      })
    },

    /**
     * Hide
     *
     * Hide a object from the website
     *
     * @param object object Wrapper
     * @return this
     * @example _('.wrapper').hide()
     */
    hide: function () {
      var len = this.length
      while (len--) {
        window._lastObj = this[len]
        this[len].style.display = 'none'
      }
      return this
    },

    /**
     * html
     *
     * place html in a object from the website
     *
     * @param object object Wrapper
     * @param string [data] HTML to write
     * @return this
     * @example _('.wrapper').html('hi, i\'m new') //Write
     * @example _('.wrapper').html('hi, i\'m new', true) //Append
     * @example _('.wrapper').html() //Read
     */
    html: function (data, append) {
      var len = this.length
      while (len--) {
        window._lastObj = this[len]
        if (typeof data === 'undefined') {
          return this[len].innerHTML
        } else if (typeof append === 'undefined') {
          this[len].innerHTML = data
        } else {
          this[len].innerHTML += data
        }
      }
      return this
    },

    /**
     * show
     *
     * show a object from the website
     *
     * @param object object Wrapper
     * @return this
     * @example _('.wrapper').show()
     */
    show: function () {
      var len = this.length
      while (len--) {
        window._lastObj = this[len]
        this[len].style.display = 'block'
      }
      return this
    },

    /**
     * Framebreak
     *
     * If i'm in a frame, please break out of it
     *
     * @param object [object] Wrapper
     * @return false
     * @example _.framebreak()
     */
    framebreak: function () {
      if (window.top.location !== window.location) {
        window.top.location.href = document.location.href
      }
      return false
    },

    /**
     * ajaxPost
     *
     * ajaxPost Posts a form, tru ajax.
     * Please not call this function yourself, unless you know what you are doing!
     *
     * @internal
     * @param object object Wrapper
     * @param string form Form to handle
     * @param function callback callback to
     * @return bool
     * @example _('.wrapper').ajaxPost(form)
     */
    ajaxPOST: function (form, callback) {
      var len = this.length
      while (len--) {
        window._lastObj = this[len]
        var xmlPhttp
        var change = this[len]
        if (window.XMLHttpRequest) {
          xmlPhttp = new window.XMLHttpRequest() // code for IE7+, Firefox, Chrome, Opera, Safari
        } else {
          xmlPhttp = new window.ActiveXObject('Microsoft.XMLHTTP') // code for IE6, IE5
        }
        var elem = form.elements
        var url = form.action
        var params = ''
        var value
        for (var i = 0; i < elem.length; i++) {
          if (elem[i].tagName.toLowerCase() === 'select') {
            value = elem[i].options[elem[i].selectedIndex].value
          } else {
            value = elem[i].value
          }
          if (value) params += elem[i].name + '=' + encodeURIComponent(value) + '&'
        }
        params += 'AJAXby=' + encodeURIComponent('_.js')
        xmlPhttp.open('POST', url, true)
        xmlPhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xmlPhttp.onreadystatechange = function () {
          if (xmlPhttp.readyState === 4 && xmlPhttp.status === 200) {
            change.innerHTML = xmlPhttp.responseText
            // JavaScript Fix!
            var js = change.getElementsByTagName('script')
            for (var i = 0, j = js.length; i < j; i++) {
              eval(js[i].innerHTML) //eslint-disable-line
            }
            // fix posts also (.ajax)
            var pst = change.getElementsByTagName('form')
            for (var ii = 0, jj = pst.length; ii < jj; ii++) {
              if (pst[ii].method.toLowerCase() === 'post') {
                pst[ii].setAttribute('onsubmit', "event.preventDefault();_('." + change.className + "').ajaxPOST(this);")
              }
            }
          }
        }
        // All preperations are clear, send the request!
        xmlPhttp.send(params)
      }
      return false
    },

    /**
     * Ajax
     *
     * Loads a page AJAX
     *
     * @param object object Wrapper
     * @param string url Url to get
     * @param object options extra options
     * @return bool
     * @example _('.wrapper').ajax(url, options)
     */
    ajax: function (url, options) {
      var len = this.length
      while (len--) {
        window._lastObj = this[len]

        var xmlhttp
        var change = this[len]

        if (window.XMLHttpRequest) {
          xmlhttp = new window.XMLHttpRequest() // code for IE7+, Firefox, Chrome, Opera, Safari
        } else {
          xmlhttp = new window.ActiveXObject('Microsoft.XMLHTTP') // code for IE6, IE5
        }

        xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            change.innerHTML = xmlhttp.responseText

            // JavaScript Fix!
            var js = change.getElementsByTagName('script')
            for (var i = 0, j = js.length; i < j; i++) {
              eval(js[i].innerHTML) //eslint-disable-line
            }

            // fix posts also (.ajax)
            var pst = change.getElementsByTagName('form')
            for (var ii = 0, jj = pst.length; ii < jj; ii++) {
              if (pst[ii].method.toLowerCase() === 'post') {
                pst[ii].setAttribute('onsubmit', "event.preventDefault();_('." + change.className + "').ajaxPOST(this);")
              }
            }
          }
        }

        xmlhttp.open('GET', url, true)
        xmlhttp.send()
      }

      return false
    },

    /**
     * noConflict
     *
     * Enables noConflict mode, so _()/_ can also be W()
     *
     * @param object [object] Wrapper
     * @return this
     * @example var W = _.noConflict()
     */
    noConflict: function () {
      if (typeof old_js === 'object') {
        window._ = old_js
      }

      return _
    },

    /**
     * isLocal
     *
     * Are we running local?
     *
     * @param object [object] Wrapper
     * @return bool
     * @example _.isLocal()
     */
    isLocal: function () {
      if (window.location.protocol !== 'file:') {
        if (!window.location.href.match(/(localhost|127\.0\.0\.1|::1)/g)) {
          return false
        } else {
          return true
        }
      } else {
        return true
      }
    },

    /**
     * requireSSL
     *
     * this make "SSL" / "HTTPS" required
     *
     * @param object [object] Wrapper
     * @return this
     * @example _.requireSSL()
     */
    requireSSL: function () {
      if (window.location.protocol !== 'https:' && window.location.protocol !== 'file:') {
        if (!window.location.href.match(/(localhost|127\.0\.0\.1|::1)/g)) {
          window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length)
        }
      }
      return
    },

    /**
     * loadExtension
     *
     * loadExtension Tries to load a extension (module)
     *
     * @deprecated 0.0.4
     * @removed 0.1.0
     * @param object [object] Wrapper
     * @return bool
     * @example _.loadExtension(src, callback)
     */
    loadExtension: function (src, callback) {
      console.error('Please do not use _().loadExtension(...) anymore')
      return this.require(src, callback)
    },

    /**
     * isUndefined
     *
     * isUndefined is a object undefined?
     *
     * @param object [object] Wrapper
     * @param object thing object to test
     * @return bool
     * @example _.isUndefined(myObject)
     */
    isUndefined: function (thing) {
      return (typeof thing === 'undefined')
    },

    /**
     * isEmpty
     *
     * isEmpty is a object empty?
     *
     * @param object [object] Wrapper
     * @param object check object to test
     * @return bool
     * @example _.isEmpty(myObject)
     */
    isEmpty: function (check) {
      return check === ''
    },

    /**
     * isBlank
     *
     * isBlank is a object blank?
     *
     * @param object [object] Wrapper
     * @param object myObject object to test
     * @return bool
     * @example _.isBlank(myObject)
     */
    isBlank: function (check) {
      return /^\s*$/.test(check)
    },

    /**
     * stripTags
     *
     * stripTags strip HTML tags of a object
     *
     * @param object object Wrapper
     * @return null
     * @example _('.codeField').stripTags()
     */
    stripTags: function () {
      var len = this.length
      while (len--) {
        window._lastObj = this[len]
        this[len].innerHTML = this[len].innerHTML.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, '')
      }
      return null
    },

    /**
     * stripScripts
     *
     * stripScripts strip Scripts from a object
     *
     * @param object object Wrapper
     * @return null
     * @example _('.codeField').stripScripts()
     */
    stripScripts: function () {
      var len = this.length
      while (len--) {
        window._lastObj = this[len]
        this[len].innerHTML = this[len].innerHTML.replace(new RegExp(this.ScriptRX, 'img'), '')
      }
      return null
    },

    /**
     * css
     *
     * css read, or write css
     *
     * @param object object Wrapper
     * @param string read what to read
     * @param string [write] what to write
     * @example _('.wrapper').css('width', '10px')
     */
    css: function (read, write) {
      var len = this.length
      while (len--) {
        window._lastObj = this[len]
        if (this.isUndefined(write)) { // Read
          return window.getComputedStyle(this[len]).getPropertyValue(read)
        } else { // Write
          var _read = read
          _read = _read.replace(/-/g, '')
          // this[len].style._read = write; // does edit the dom.
          // this[len].setAttribute(_read, write); // does add... but not working
          this[len].setAttribute('style', read + ':' + write + ';') // does edit the dom!
          return this // this.css(read)
        }
      }
    },

    /**
     * escapeHTML
     *
     * escape the HTML
     *
     * @param object [object] Wrapper
     * @param string str string to escape
     * @return string
     * @example _.escapeHTML(str)
     */
    escapeHTML: function (str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    },

    /**
     * unescapeHTML
     *
     * unescape the HTML
     *
     * @param object [object] Wrapper
     * @param string str string to escape
     * @return string
     * @example _.unescapeHTML(str)
     */
    unescapeHTML: function (str) {
      return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
    },

    /**
     * toArray
     *
     * string to array
     *
     * @param object [object] Wrapper
     * @param string|object str string/object to put in the array
     * @return array
     * @example _.toArray(str)
     * @example _.toArray({my:'super', object:'rocks!'})
     */
    toArray: function (str) {
      if (typeof str === 'string') {
        return str.split('')
      } else {
        var arr = []
        for (var i in str) {
          if (str.hasOwnProperty(i)) {
            arr.push(str[i])
          }
        }
        return arr
      }
    },

    /**
     * runTest
     *
     * runTest Run a test [internal, external use.]
     *
     * @param object [object] Wrapper
     * @param object testCase test case
     * @param object expectedResult expected Result
     * @return bool
     * @example _.runTest(_().someFunction(), 'haha')
     */
    runTest: function (testCase, expectedResult) {
      if (typeof testCase !== 'function') {
        return (String(testCase) === String(expectedResult)) // Pass!
      } else {
        return (String(testCase()) === String(expectedResult)) // Pass!
      }
    },

    /**
     * includes
     *
     * includes does a string includes the thing?
     *
     * @param object [object] Wrapper
     * @param string str the string
     * @param string pattern the pattern
     * @return bool
     * @example _.includes('hi, i am wesley', 'hi')
     */
    includes: function (str, pattern) {
      return str.indexOf(pattern) > -1
    },

    /**
     * startsWith
     *
     * startsWith does a string starts With the thing?
     *
     * @param object [object] Wrapper
     * @param string str the string
     * @param string pattern the pattern
     * @return bool
     * @example _.startsWith('hi, i am wesley', 'hi')
     */
    startsWith: function (str, pattern) {
      return str.lastIndexOf(pattern, 0) === 0
    },

    /**
     * endsWith
     *
     * endsWith does a string ends With the thing?
     *
     * @param object [object] Wrapper
     * @param string str the string
     * @param string pattern the pattern
     * @return bool
     * @example _.endsWith('hi, i am wesley', 'wesley')
     */
    endsWith: function (str, pattern) {
      var d = str.length - pattern.length
      return d >= 0 && str.indexOf(pattern, d) === d
    },

    /**
     * capitalize
     *
     * capitalize a string
     *
     * @param object [object] Wrapper
     * @param string str the string
     * @return string
     * @example _.capitalize('hi, i am wesley')
     */
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
    },

    /**
     * camelize
     *
     * camelize a string
     *
     * @param object [object] Wrapper
     * @param string str the string
     * @return string
     * @example _.camelize('hi, i am wesley')
     */
    camelize: function (str) {
      return str.replace(/-+(.)?/g, function (match, chr) {
        return chr ? chr.toUpperCase() : ''
      })
    },

    /**
     * scrollToBottom
     *
     * scroll To Bottom
     *
     * @param object object Wrapper
     * @return bool
     * @example _('.wrapper').scrollToBottom()
     */
    scrollToBottom: function () {
      var len = this.length
      while (len--) {
        window._lastObj = this[len]
        this[len].scrollTop = 0
      }
      return true
    },

    /**
     * scrollToTop
     *
     * scroll To Bottom
     *
     * @param object object Wrapper
     * @return bool
     * @example _('.wrapper').scrollToTop()
     */
    scrollToTop: function () {
      var len = this.length
      while (len--) {
        window._lastObj = this[len]
        this[len].scrollTop = this[len].scrollHeight
      }
      return true
    },

    /**
     * map
     *
     * Walk trough the array, and perform a function
     *
     * @param object [object] Wrapper
     * @param array arr Array to parse
     * @param function callback_int Callback function to call
     * @return array
     * @example _.map(['a', 'b', 'c'], function (i, v) { window.alert('item ' + i + ', value: ' + v);})
     */
    map: function (arr, callback_int) {
      var __ret = []
      for (var i = 0; i < arr.length; i++) {
        // (other) Underscore.js uses -> : __ret.push(callback_int(i, arr[i]))
        var temp = callback_int(i, arr[i])
        if (typeof temp === 'undefined') {
          _.error('ERROR WHILE MAPPING')
        }
        if (typeof temp[0] === 'string') {
          for (var j = 0; j < temp.length; j++) {
            __ret.push(temp[j])
          }
        } else {
          __ret.push(callback_int(i, arr[i]))
        }
      }
      return __ret
    },

    /**
     * each
     *
     * Walk trough array and peform callback
     *
     * @param object [object] Wrapper
     * @param array myArr Array to walk trough
     * @param function callback_int Callback function to call
     * @return array
     * @example _.each(['a', 'b', 'c'], function (i, v) { window.alert('count ' + i + ', value: ' + v); })
     * @example _.each({a:'b', c:'d'}, function (i, v) { window.alert('key ' + i + ', value: ' + v); })
     */
    each: function (myArr, callback_int) {
      var arr = []
      var count = 0
      for (var i in myArr) {
        if (myArr.hasOwnProperty(i)) {
          if (!isNaN(i)) {
            arr.push(callback_int(count, myArr[i]))
            count++
          } else {
            arr.push(callback_int(i, myArr[i]))
          }
        }
      }
      return arr
    },

    /**
     * merge
     *
     * merge objects to one
     *
     * @param object [object] Wrapper
     * @param object obj1 Object to merge
     * @param object obj2 Object to merge
     * @return object
     * @example _.merge(obj1, obj2)
     */
    merge: function () {
      var obj = {}
      var key
      for (var i = 0; i < arguments.length; i++) {
        for (key in arguments[i]) {
          if (arguments[i].hasOwnProperty(key)) {
            obj[key] = arguments[i][key]
          }
        }
      }
      return obj
    },

    /**
     * truncate
     *
     * truncate is a object undefined?
     *
     * @param object object Wrapper
     * @param string length length (default: 30)
     * @param string [truncation] truncation after the truncate (default: ...)
     * @return bool
     * @example _('.wrapper').truncate(length[, truncation])
     */
    truncate: function (length, truncation) {
      var len = this.length
      while (len--) {
        window._lastObj = this[len]

        length = length || 30

        truncation = this.isUndefined(truncation) ? '...' : truncation

        this[len].innerHTML = this[len].innerHTML.length > length
          ? this[len].innerHTML.substring(0, length) + truncation
          : String(this[len].innerHTML)
      }

      return true
    }
  }

  // * tLib
  // *
  // * Add some "Global" Objects (what does not need a wrapper) Bug: #12
  // * https://github.com/wesdegroot/_.js/issues/12 (Closed 19-OCT-2015)
  // * make a "temporary _.js"
  // *
  // * @var object tLib
  var tLib = new Library()
  var copy
  for (copy in tLib) {
    eval('_.' + copy + ' = tLib.' + copy + ';') //eslint-disable-line
    // _.copy = tLib.copy
  }

  // * window._
  // *
  // * Assign our _ object to global window object.
  // *
  // * @var object _
  if (!window._) {
    window._ = _
  } else {
    var old_js = window._
    window._ = _
  }

  // And return
  return _

})() //eslint-disable-line

// Add Event!
var _JSLoaded = document.createEvent('CustomEvent')
_JSLoaded.initEvent('_.jsLoaded', !0, !0, {})
window.dispatchEvent(_JSLoaded)
