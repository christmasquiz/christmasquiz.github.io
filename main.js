(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/es7/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es7/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var quiz_component_1 = __webpack_require__(/*! ./quiz.component */ "./src/app/quiz.component.ts");
var quiz_question_image_component_1 = __webpack_require__(/*! ./quiz-question-image/quiz-question-image.component */ "./src/app/quiz-question-image/quiz-question-image.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var app_routes_1 = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
var quiz_round_image_component_1 = __webpack_require__(/*! ./quiz-round-image/quiz-round-image.component */ "./src/app/quiz-round-image/quiz-round-image.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var quiz_round_solved_component_1 = __webpack_require__(/*! ./quiz-round-solved/quiz-round-solved.component */ "./src/app/quiz-round-solved/quiz-round-solved.component.ts");
var quiz_round_overview_component_1 = __webpack_require__(/*! ./quiz-round-overview/quiz-round-overview.component */ "./src/app/quiz-round-overview/quiz-round-overview.component.ts");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var quiz_round_question_component_1 = __webpack_require__(/*! ./quiz-round-question/quiz-round-question.component */ "./src/app/quiz-round-question/quiz-round-question.component.ts");
var love_letter_component_1 = __webpack_require__(/*! ./love-letter/love-letter.component */ "./src/app/love-letter/love-letter.component.ts");
var quiz_round_crossword_component_1 = __webpack_require__(/*! ./quiz-round-crossword/quiz-round-crossword.component */ "./src/app/quiz-round-crossword/quiz-round-crossword.component.ts");
var quiz_round_rode_draad_component_1 = __webpack_require__(/*! ./quiz-round-rode-draad/quiz-round-rode-draad.component */ "./src/app/quiz-round-rode-draad/quiz-round-rode-draad.component.ts");
var QuizModule = /** @class */ (function () {
    function QuizModule() {
    }
    QuizModule = __decorate([
        core_1.NgModule({
            declarations: [
                quiz_component_1.QuizAppComponent,
                quiz_question_image_component_1.QuizQuestionImageComponent,
                quiz_round_image_component_1.QuizRoundImageComponent,
                quiz_round_solved_component_1.QuizRoundSolvedComponent,
                quiz_round_overview_component_1.QuizRoundOverviewComponent,
                quiz_round_question_component_1.QuizRoundQuestionComponent,
                quiz_round_crossword_component_1.QuizRoundCrosswordComponent,
                quiz_round_rode_draad_component_1.QuizRoundRodeDraadComponent,
                love_letter_component_1.LoveLetterComponent
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(app_routes_1.QuizAppRoutes),
                forms_1.FormsModule,
            ],
            bootstrap: [quiz_component_1.QuizAppComponent]
        })
    ], QuizModule);
    return QuizModule;
}());
exports.QuizModule = QuizModule;


/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var quiz_round_image_component_1 = __webpack_require__(/*! ./quiz-round-image/quiz-round-image.component */ "./src/app/quiz-round-image/quiz-round-image.component.ts");
var quiz_round_solved_component_1 = __webpack_require__(/*! ./quiz-round-solved/quiz-round-solved.component */ "./src/app/quiz-round-solved/quiz-round-solved.component.ts");
var quiz_round_overview_component_1 = __webpack_require__(/*! ./quiz-round-overview/quiz-round-overview.component */ "./src/app/quiz-round-overview/quiz-round-overview.component.ts");
var quiz_round_question_component_1 = __webpack_require__(/*! ./quiz-round-question/quiz-round-question.component */ "./src/app/quiz-round-question/quiz-round-question.component.ts");
var love_letter_component_1 = __webpack_require__(/*! ./love-letter/love-letter.component */ "./src/app/love-letter/love-letter.component.ts");
var quiz_round_crossword_component_1 = __webpack_require__(/*! ./quiz-round-crossword/quiz-round-crossword.component */ "./src/app/quiz-round-crossword/quiz-round-crossword.component.ts");
var quiz_round_rode_draad_component_1 = __webpack_require__(/*! ./quiz-round-rode-draad/quiz-round-rode-draad.component */ "./src/app/quiz-round-rode-draad/quiz-round-rode-draad.component.ts");
exports.QuizAppRoutes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: quiz_round_overview_component_1.QuizRoundOverviewComponent },
    { path: 'image/:quizname', component: quiz_round_image_component_1.QuizRoundImageComponent },
    { path: 'image-crossword/:quizname', component: quiz_round_crossword_component_1.QuizRoundCrosswordComponent },
    { path: 'rode-draad/:quizname', component: quiz_round_rode_draad_component_1.QuizRoundRodeDraadComponent },
    { path: 'classic/:quizname', component: quiz_round_question_component_1.QuizRoundQuestionComponent },
    { path: ':quizname/solved', component: quiz_round_solved_component_1.QuizRoundSolvedComponent },
    { path: 'loveletter', component: love_letter_component_1.LoveLetterComponent }
];


/***/ }),

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./quiz.component */ "./src/app/quiz.component.ts"));
__export(__webpack_require__(/*! ./app.module */ "./src/app/app.module.ts"));


/***/ }),

/***/ "./src/app/love-letter/love-letter.component.html":
/*!********************************************************!*\
  !*** ./src/app/love-letter/love-letter.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"winners\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <h2>Love Letter</h2>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <h2>Round won by</h2>\r\n      <h3 *ngFor=\"let winner of winners\">\r\n        {{winner}}\r\n      </h3>\r\n      <h4>\r\n        <a (click)=\"refresh()\">Again!</a>\r\n      </h4>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\" *ngIf=\"!winners\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <h2>Love Letter</h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3\">\r\n      <h3 [style.text-decoration]=\"isAlive(player1)\">Player 1 {{getFirstCardName(player1)}}</h3>\r\n      <h4 *ngIf=\"isActivePlayer(player1)\">Active player</h4>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\" *ngFor=\"let card of player1.cards;let ind=index\">\r\n          <button title=\"{{getCardHoverText(player1,card)}}\" (click)=\"playCard(player1, card)\">card {{ind+1}}</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <h5>Played cards</h5>\r\n      </div>\r\n      <div class=\"row\" *ngFor=\"let playedCard of player1.playedCards\">\r\n        {{playedCard.name}}({{playedCard.score}})\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3\">\r\n      <h3 [style.text-decoration]=\"isAlive(player2)\">Player 2 {{getFirstCardName(player2)}}</h3>\r\n      <h4 *ngIf=\"isActivePlayer(player2)\">Active player</h4>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\" *ngFor=\"let card of player2.cards;let ind=index\">\r\n          <button title=\"{{getCardHoverText(player2,card)}}\" (click)=\"playCard(player2,card)\">card {{ind+1}}</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <h5>Played cards</h5>\r\n      </div>\r\n      <div class=\"row\" *ngFor=\"let playedCard of player2.playedCards\">\r\n        {{playedCard.name}}({{playedCard.score}})\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3\">\r\n      <h3 [style.text-decoration]=\"isAlive(player3)\">Player 3 {{getFirstCardName(player3)}}</h3>\r\n      <h4 *ngIf=\"isActivePlayer(player3)\">Active player</h4>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\" *ngFor=\"let card of player3.cards;let ind=index\">\r\n          <button title=\"{{getCardHoverText(player3,card)}}\" (click)=\"playCard(player3,card)\">card {{ind+1}}</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <h5>Played cards</h5>\r\n      </div>\r\n      <div class=\"row\" *ngFor=\"let playedCard of player3.playedCards\">\r\n        {{playedCard.name}}({{playedCard.score}})\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3\">\r\n      <h3 [style.text-decoration]=\"isAlive(player4)\">Player 4 {{getFirstCardName(player4)}}</h3>\r\n      <h4 *ngIf=\"isActivePlayer(player4)\">Active player</h4>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\" *ngFor=\"let card of player4.cards;let ind=index\">\r\n          <button title=\"{{getCardHoverText(player4,card)}}\" (click)=\"playCard(player4,card)\">card {{ind+1}}</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <h5>Played cards</h5>\r\n      </div>\r\n      <div class=\"row\" *ngFor=\"let playedCard of player4.playedCards\">\r\n        {{playedCard.name}}({{playedCard.score}})\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3\">\r\n      <h3>Burned card</h3>\r\n      <h4>???</h4>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n      <h3>Deck</h3>\r\n      <h4>Number of cards remaining in deck: {{deck.length}}</h4>\r\n      <h4>Unplayed cards:</h4>\r\n      <h5 *ngFor=\"let summary of remainingCardsSummary\">\r\n        {{summary.name}}: {{summary.amount}} left\r\n      </h5>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"menusToShow\">\r\n    <h5>Played card actions</h5>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"menusToShow\">\r\n    <div *ngIf=\"menusToShow==='GUARD'\" class=\"col-lg-5\">\r\n      <div *ngIf=\"canBeTargeted(player1)\"><input type=\"radio\" name=\"playerNumberGuard\" [(ngModel)]=\"guardCardTarget\"\r\n                                                 value=\"player1\">Player 1<br></div>\r\n      <div *ngIf=\"canBeTargeted(player2)\"><input type=\"radio\" name=\"playerNumberGuard\" [(ngModel)]=\"guardCardTarget\"\r\n                                                 value=\"player2\">Player 2<br></div>\r\n      <div *ngIf=\"canBeTargeted(player3)\"><input type=\"radio\" name=\"playerNumberGuard\" [(ngModel)]=\"guardCardTarget\"\r\n                                                 value=\"player3\">Player 3<br></div>\r\n      <div *ngIf=\"canBeTargeted(player4)\"><input type=\"radio\" name=\"playerNumberGuard\" [(ngModel)]=\"guardCardTarget\"\r\n                                                 value=\"player4\">Player 4<br></div>\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='GUARD'\" class=\"col-lg-2\">\r\n      has a\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='GUARD'\" class=\"col-lg-5\">\r\n      <button (click)=\"performGuardAction('PRIEST')\">Priest</button>\r\n      <button (click)=\"performGuardAction('BARON')\">Baron</button>\r\n      <button (click)=\"performGuardAction('HANDMAIDEN')\">Handmaiden</button>\r\n      <button (click)=\"performGuardAction('PRINCE')\">Prince</button>\r\n      <button (click)=\"performGuardAction('KING')\">King</button>\r\n      <button (click)=\"performGuardAction('COUNTESS')\">Countess</button>\r\n      <button (click)=\"performGuardAction('PRINCESS')\">Princess</button>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"menusToShow==='PRIEST'\" class=\"col-lg-2\">\r\n      Look at card of player\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='PRIEST' && !lookingAtCardAsPriest\" class=\"col-lg-5\">\r\n      <div *ngIf=\"canBeTargeted(player1)\"><input type=\"radio\" name=\"playerNumberPriest\" [(ngModel)]=\"priestCardTarget\"\r\n                                                 value=\"player1\">Player 1<br></div>\r\n      <div *ngIf=\"canBeTargeted(player2)\"><input type=\"radio\" name=\"playerNumberPriest\" [(ngModel)]=\"priestCardTarget\"\r\n                                                 value=\"player2\">Player 2<br></div>\r\n      <div *ngIf=\"canBeTargeted(player3)\"><input type=\"radio\" name=\"playerNumberPriest\" [(ngModel)]=\"priestCardTarget\"\r\n                                                 value=\"player3\">Player 3<br></div>\r\n      <div *ngIf=\"canBeTargeted(player4)\"><input type=\"radio\" name=\"playerNumberPriest\" [(ngModel)]=\"priestCardTarget\"\r\n                                                 value=\"player4\">Player 4<br></div>\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='PRIEST' && !lookingAtCardAsPriest\" class=\"col-lg-2\">\r\n      <button (click)=\"performPriestAction()\">Look</button>\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='PRIEST' && lookingAtCardAsPriest\" class=\"col-lg-2\">\r\n      <button (click)=\"endPriestAction()\">Okay, I've seen it</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"menusToShow==='BARON'\" class=\"col-lg-2\">\r\n      Compare for highest hand card value with\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='BARON'\" class=\"col-lg-5\">\r\n      <div *ngIf=\"canBeTargeted(player1)\"><input type=\"radio\" name=\"playerNumberBaron\" [(ngModel)]=\"baronCardTarget\"\r\n                                                 value=\"player1\">Player 1<br></div>\r\n      <div *ngIf=\"canBeTargeted(player2)\"><input type=\"radio\" name=\"playerNumberBaron\" [(ngModel)]=\"baronCardTarget\"\r\n                                                 value=\"player2\">Player 2<br></div>\r\n      <div *ngIf=\"canBeTargeted(player3)\"><input type=\"radio\" name=\"playerNumberBaron\" [(ngModel)]=\"baronCardTarget\"\r\n                                                 value=\"player3\">Player 3<br></div>\r\n      <div *ngIf=\"canBeTargeted(player4)\"><input type=\"radio\" name=\"playerNumberBaron\" [(ngModel)]=\"baronCardTarget\"\r\n                                                 value=\"player4\">Player 4<br></div>\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='BARON'\" class=\"col-lg-2\">\r\n      <button (click)=\"endBaronAction()\">FIGHT</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"menusToShow==='PRINCE'\" class=\"col-lg-2\">\r\n      Player that has to discard hand\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='PRINCE'\" class=\"col-lg-5\">\r\n      <div *ngIf=\"canBeTargetedByPrince(player1)\"><input type=\"radio\" name=\"playerNumberPrince\"\r\n                                                         [(ngModel)]=\"princeCardTarget\" value=\"player1\">Player 1<br>\r\n      </div>\r\n      <div *ngIf=\"canBeTargetedByPrince(player2)\"><input type=\"radio\" name=\"playerNumberPrince\"\r\n                                                         [(ngModel)]=\"princeCardTarget\" value=\"player2\">Player 2<br>\r\n      </div>\r\n      <div *ngIf=\"canBeTargetedByPrince(player3)\"><input type=\"radio\" name=\"playerNumberPrince\"\r\n                                                         [(ngModel)]=\"princeCardTarget\" value=\"player3\">Player 3<br>\r\n      </div>\r\n      <div *ngIf=\"canBeTargetedByPrince(player4)\"><input type=\"radio\" name=\"playerNumberPrince\"\r\n                                                         [(ngModel)]=\"princeCardTarget\" value=\"player4\">Player 4<br>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='PRINCE'\" class=\"col-lg-2\">\r\n      <button (click)=\"endPrinceAction()\">Discard</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"menusToShow==='KING'\" class=\"col-lg-2\">\r\n      Swap hands with\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='KING'\" class=\"col-lg-5\">\r\n      <div *ngIf=\"canBeTargeted(player1)\"><input type=\"radio\" name=\"playerNumberKing\" [(ngModel)]=\"kingCardTarget\"\r\n                                                 value=\"player1\">Player 1<br></div>\r\n      <div *ngIf=\"canBeTargeted(player2)\"><input type=\"radio\" name=\"playerNumberKing\" [(ngModel)]=\"kingCardTarget\"\r\n                                                 value=\"player2\">Player 2<br></div>\r\n      <div *ngIf=\"canBeTargeted(player3)\"><input type=\"radio\" name=\"playerNumberKing\" [(ngModel)]=\"kingCardTarget\"\r\n                                                 value=\"player3\">Player 3<br></div>\r\n      <div *ngIf=\"canBeTargeted(player4)\"><input type=\"radio\" name=\"playerNumberKing\" [(ngModel)]=\"kingCardTarget\"\r\n                                                 value=\"player4\">Player 4<br></div>\r\n    </div>\r\n    <div *ngIf=\"menusToShow==='KING'\" class=\"col-lg-2\">\r\n      <button (click)=\"endKingAction()\">Discard</button>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/love-letter/love-letter.component.ts":
/*!******************************************************!*\
  !*** ./src/app/love-letter/love-letter.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var LoveLetterComponent = /** @class */ (function () {
    function LoveLetterComponent() {
        this.activePlayerIndex = 1;
        this.player1 = { name: "player1", active: true, alive: true, cards: [], playedCards: [], isProtectedByHandmaiden: false };
        this.player2 = { name: "player2", active: false, alive: true, cards: [], playedCards: [], isProtectedByHandmaiden: false };
        this.player3 = { name: "player3", active: false, alive: true, cards: [], playedCards: [], isProtectedByHandmaiden: false };
        this.player4 = { name: "player4", active: false, alive: true, cards: [], playedCards: [], isProtectedByHandmaiden: false };
        this.lookingAtCardAsPriest = false;
    }
    LoveLetterComponent.prototype.ngOnInit = function () {
        //16 cards
        this.cardList = [
            { name: "GUARD", score: 1, isTargeting: true },
            { name: "GUARD", score: 1, isTargeting: true },
            { name: "GUARD", score: 1, isTargeting: true },
            { name: "GUARD", score: 1, isTargeting: true },
            { name: "GUARD", score: 1, isTargeting: true },
            { name: "PRIEST", score: 2, isTargeting: true }, { name: "PRIEST", score: 2, isTargeting: true },
            { name: "BARON", score: 3, isTargeting: true }, { name: "BARON", score: 3, isTargeting: true },
            { name: "HANDMAIDEN", score: 4, isTargeting: false }, { name: "HANDMAIDEN", score: 4, isTargeting: false },
            { name: "PRINCE", score: 5, isTargeting: true }, { name: "PRINCE", score: 5, isTargeting: true },
            { name: "KING", score: 6, isTargeting: true },
            { name: "COUNTESS", score: 7, isTargeting: false },
            { name: "PRINCESS", score: 8, isTargeting: false }
        ];
        this.deck = this.shuffleArray(this.cardList);
        this.burnFirstCard();
        this.dealCards();
        this.dealCardToActivePlayer();
        this.createRemainingCardsSummary();
    };
    /**
     * Randomize array element order in-place.
     * Using Durstenfeld shuffle algorithm.
     */
    LoveLetterComponent.prototype.shuffleArray = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    LoveLetterComponent.prototype.burnFirstCard = function () {
        this.burnCard = this.deck[0];
        this.removeFirstCardFromDeck();
    };
    LoveLetterComponent.prototype.removeFirstCardFromDeck = function () {
        this.deck.splice(0, 1);
    };
    LoveLetterComponent.prototype.dealCardToActivePlayer = function () {
        if (this.deck.length === 0) {
            this.determineWinner();
        }
        else {
            this.giveTopCardTo(this["player" + this.activePlayerIndex]);
        }
    };
    LoveLetterComponent.prototype.dealCards = function () {
        this.giveTopCardTo(this.player1);
        this.giveTopCardTo(this.player2);
        this.giveTopCardTo(this.player3);
        this.giveTopCardTo(this.player4);
    };
    LoveLetterComponent.prototype.giveTopCardTo = function (player) {
        player.cards.push(this.deck[0]);
        this.removeFirstCardFromDeck();
    };
    LoveLetterComponent.prototype.isActivePlayer = function (player) {
        return player.active;
    };
    LoveLetterComponent.prototype.getActivePlayer = function () {
        return this["player" + this.activePlayerIndex];
    };
    LoveLetterComponent.prototype.getCardHoverText = function (player, card) {
        if (this.isActivePlayer(player) || (this.lookingAtCardAsPriest && this[this.priestCardTarget] === player)) {
            var regularCardText = card.name + " (" + card.score + ")";
            if (card.name === "COUNTESS" && (this.hasCardInHandWithName("PRINCE", player) || this.hasCardInHandWithName("KING", player))) {
                regularCardText += " you MUST play this card";
            }
            return regularCardText;
        }
        return "Cheater (-1)";
    };
    LoveLetterComponent.prototype.createRemainingCardsSummary = function () {
        var tempDeck = this.deck.slice();
        tempDeck.push(this.burnCard);
        tempDeck.push.apply(tempDeck, this.player1.cards);
        tempDeck.push.apply(tempDeck, this.player2.cards);
        tempDeck.push.apply(tempDeck, this.player3.cards);
        tempDeck.push.apply(tempDeck, this.player4.cards);
        var tempSummary = [];
        tempDeck.forEach(function (cardInDeck) {
            if (tempSummary.filter(function (summaryCard) { return summaryCard.name === cardInDeck.name; }).length === 0) {
                tempSummary.push({ name: cardInDeck.name, score: cardInDeck.score, amount: 1 });
            }
            else {
                tempSummary[tempSummary.indexOf(tempSummary.filter(function (summaryCard) { return summaryCard.name === cardInDeck.name; })[0])].amount++;
            }
        });
        this.remainingCardsSummary = tempSummary.sort(function (card1, card2) { return card1.score > card2.score ? -1 : 1; });
    };
    LoveLetterComponent.prototype.playCard = function (player, card) {
        if (this.isActivePlayer(player)) {
            this.addCardToPlayedCards(player, card);
            if (card.name === "COUNTESS") {
                this.nextPlayer();
            }
            if (card.name === "HANDMAIDEN") {
                this.performHandmaidenAction(player);
            }
            else {
                if (card.isTargeting && this.noPlayerTargetAvailable()) {
                    this.nextPlayer();
                }
                else {
                    this.menusToShow = card.name;
                }
            }
            this.createRemainingCardsSummary();
        }
    };
    LoveLetterComponent.prototype.performHandmaidenAction = function (player) {
        this.performHandMaidenAction(player);
        this.nextPlayer();
    };
    LoveLetterComponent.prototype.addCardToPlayedCards = function (player, card) {
        var _a;
        var index = player.cards.indexOf(card);
        if (!player.playedCards) {
            player.playedCards = [];
        }
        (_a = player.playedCards).push.apply(_a, player.cards.splice(index, 1));
        if (player.playedCards[player.playedCards.length - 1].name === "PRINCESS") {
            player.alive = false;
            this.determineWinnerIfNeeded();
        }
    };
    LoveLetterComponent.prototype.moveActivePlayerMarker = function () {
        this["player" + this.activePlayerIndex].active = false;
        if (this.activePlayerIndex === 4) {
            this.activePlayerIndex = 1;
        }
        else {
            this.activePlayerIndex++;
            if (!this["player" + this.activePlayerIndex].alive) {
                this.moveActivePlayerMarker();
            }
        }
        this["player" + this.activePlayerIndex].active = true;
    };
    LoveLetterComponent.prototype.performGuardAction = function (cardName) {
        if (this.guardCardTarget) {
            if (this[this.guardCardTarget].cards[0].name === cardName) {
                this.addCardToPlayedCards(this[this.guardCardTarget], this[this.guardCardTarget].cards[0]);
                this[this.guardCardTarget].alive = false;
                this.determineWinnerIfNeeded();
            }
            this.guardCardTarget = undefined;
            this.nextPlayer();
        }
    };
    LoveLetterComponent.prototype.nextPlayer = function () {
        this.menusToShow = undefined;
        this.moveActivePlayerMarker();
        this.dealCardToActivePlayer();
        this.undoHandmaidenProtection();
    };
    LoveLetterComponent.prototype.isAlive = function (player) {
        return player.alive ? "" : "line-through";
    };
    //TODO: debug method, uncomment only locally
    LoveLetterComponent.prototype.getFirstCardName = function (player) {
        return "";
        // if (player.cards.length !== 0) {
        //   return player.cards[0].name;
        // }
    };
    LoveLetterComponent.prototype.performPriestAction = function () {
        this.lookingAtCardAsPriest = true;
    };
    LoveLetterComponent.prototype.endPriestAction = function () {
        this.lookingAtCardAsPriest = false;
        this.priestCardTarget = undefined;
        this.nextPlayer();
    };
    LoveLetterComponent.prototype.endBaronAction = function () {
        if (this.getActivePlayer().cards[0].score > this[this.baronCardTarget].cards[0].score) {
            this.addCardToPlayedCards(this[this.baronCardTarget], this[this.baronCardTarget].cards[0]);
            this[this.baronCardTarget].alive = false;
        }
        else if (this.getActivePlayer().cards[0].score < this[this.baronCardTarget].cards[0].score) {
            this.addCardToPlayedCards(this.getActivePlayer(), this.getActivePlayer().cards[0]);
            this.getActivePlayer().alive = false;
        }
        this.determineWinnerIfNeeded();
        this.baronCardTarget = undefined;
        this.nextPlayer();
    };
    LoveLetterComponent.prototype.performHandMaidenAction = function (player) {
        player.isProtectedByHandmaiden = true;
    };
    LoveLetterComponent.prototype.undoHandmaidenProtection = function () {
        this.getActivePlayer().isProtectedByHandmaiden = false;
    };
    LoveLetterComponent.prototype.canBeTargeted = function (player) {
        return !this.isActivePlayer(player) && player.alive === true && player.isProtectedByHandmaiden === false;
    };
    LoveLetterComponent.prototype.canBeTargetedByPrince = function (player) {
        return player.alive === true && player.isProtectedByHandmaiden === false;
    };
    LoveLetterComponent.prototype.noPlayerTargetAvailable = function () {
        return !this.canBeTargeted(this.player1) && !this.canBeTargeted(this.player2) && !this.canBeTargeted(this.player3) && !this.canBeTargeted(this.player4);
    };
    LoveLetterComponent.prototype.endPrinceAction = function () {
        this.addCardToPlayedCards(this[this.princeCardTarget], this[this.princeCardTarget].cards[0]);
        if (this[this.princeCardTarget].alive) {
            this.givePlayerNewCardAfterPrinceDiscard();
        }
        this.princeCardTarget = undefined;
        this.nextPlayer();
    };
    LoveLetterComponent.prototype.givePlayerNewCardAfterPrinceDiscard = function () {
        if (this.deck.length !== 0) {
            this.giveTopCardTo(this[this.princeCardTarget]);
        }
        else {
            this.giveBurnCardTo(this[this.princeCardTarget]);
        }
    };
    LoveLetterComponent.prototype.giveBurnCardTo = function (player) {
        player.cards.push(this.burnCard);
        this.burnCard = undefined;
    };
    LoveLetterComponent.prototype.endKingAction = function () {
        var swapVar = this.getActivePlayer().cards.slice();
        this.getActivePlayer().cards = this[this.kingCardTarget].cards.slice();
        this[this.kingCardTarget].cards = swapVar;
        this.nextPlayer();
    };
    LoveLetterComponent.prototype.hasCardInHandWithName = function (cardName, player) {
        return player.cards.map(function (card) { return card.name; }).some(function (name) { return name === cardName; });
    };
    LoveLetterComponent.prototype.determineWinner = function () {
        var players = [this.player1, this.player2, this.player3, this.player4];
        var livingPlayersOrderedByCardPowerDescending = players.filter(function (player) { return player.alive; }).sort(function (p1, p2) { return p1.cards[0].score < p2.cards[0].score ? 1 : -1; });
        var highestCardValue = livingPlayersOrderedByCardPowerDescending[0].cards[0].score;
        this.winners = livingPlayersOrderedByCardPowerDescending.filter(function (player) { return player.cards[0].score === highestCardValue; })
            .map(function (player) { return player.name + " with " + player.cards[0].name; });
    };
    LoveLetterComponent.prototype.determineWinnerIfNeeded = function () {
        var players = [this.player1, this.player2, this.player3, this.player4];
        if (players.filter(function (player) { return player.alive; }).length === 1) {
            this.determineWinner();
        }
    };
    LoveLetterComponent.prototype.refresh = function () {
        location.reload();
    };
    LoveLetterComponent = __decorate([
        core_1.Component({
            selector: 'trm-love-letter',
            template: __webpack_require__(/*! ./love-letter.component.html */ "./src/app/love-letter/love-letter.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], LoveLetterComponent);
    return LoveLetterComponent;
}());
exports.LoveLetterComponent = LoveLetterComponent;


/***/ }),

/***/ "./src/app/quiz-question-image/quiz-question-image.component.html":
/*!************************************************************************!*\
  !*** ./src/app/quiz-question-image/quiz-question-image.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-md-12\">\r\n    <a [href]=\"questionImage\" class=\"thumbnail\" target=\"_blank\">\r\n      <img alt=\"100%x180\" data-src=\"holder.js/100%x180\" [src]=\"questionImage\"></a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"!isSolved\">\r\n  <div class=\"col-xs-offset-3 col-xs-9 col-md-offset-3 col-md-9\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"antwoord\" [(ngModel)]=\"resolution\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-offset-3 col-xs-9 col-md-offset-3 col-md-9\">\r\n        <button class=\"btn btn-default\" type=\"button\" (click)=\"validateAnswer()\">Antwoord</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"!isSolved\">\r\n  <div class=\"col-xs-offset-3 col-xs-9 col-md-offset-3 col-md-9\">\r\n        <button class=\"btn btn-primary btn-lg\" type=\"button\" (click)=\"showHint()\">De grote ik-ben-dom-knop</button>\r\n  </div>\r\n  <div *ngIf=\"showhint\" class=\"col-xs-offset-3 col-xs-9 col-md-offset-3 col-md-9\">\r\n        <h2>{{hint}}</h2>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"isSolved\">\r\n  <div class=\"col-xs-offset-3 col-xs-6 col-md-offset-3 col-md-6\">\r\n    <h3>{{answer[0]}}</h3>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xs-offset-6 col-xs-4 col-md-offset-6 col-md-4\">\r\n    <span *ngIf=\"isSolved\" class=\"glyphicon glyphicon-ok\" style=\"font-size: 100px;  color: green;\"\r\n          aria-hidden=\"true\"></span>\r\n    <span *ngIf=\"!isSolved\" class=\"glyphicon glyphicon-remove\" style=\"font-size: 100px; color: red;\"\r\n          aria-hidden=\"true\"></span>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/quiz-question-image/quiz-question-image.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/quiz-question-image/quiz-question-image.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var QuizQuestionImageComponent = /** @class */ (function () {
    function QuizQuestionImageComponent() {
        this.answeredCorrectly = new core_1.EventEmitter();
        this.isSolved = false;
        this.showhint = false;
    }
    QuizQuestionImageComponent.prototype.ngOnInit = function () {
        this.isSolved = this.solvedBefore;
    };
    QuizQuestionImageComponent.prototype.ngOnChanges = function (changes) {
        if (changes['questionImage']) {
            this.isSolved = this.solvedBefore;
            this.showhint = false;
        }
    };
    QuizQuestionImageComponent.prototype.validateAnswer = function () {
        if (this.resolution && this.answer.map(function (possibleAnswer) { return possibleAnswer.toLowerCase(); }).indexOf(this.resolution.toLowerCase()) !== -1) {
            this.isSolved = true;
            this.answeredCorrectly.emit();
        }
        this.resolution = "";
    };
    QuizQuestionImageComponent.prototype.showHint = function () {
        this.showhint = true;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QuizQuestionImageComponent.prototype, "questionImage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QuizQuestionImageComponent.prototype, "solvedBefore", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], QuizQuestionImageComponent.prototype, "answeredCorrectly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QuizQuestionImageComponent.prototype, "answer", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QuizQuestionImageComponent.prototype, "hint", void 0);
    QuizQuestionImageComponent = __decorate([
        core_1.Component({
            selector: 'quiz-question-image',
            template: __webpack_require__(/*! ./quiz-question-image.component.html */ "./src/app/quiz-question-image/quiz-question-image.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], QuizQuestionImageComponent);
    return QuizQuestionImageComponent;
}());
exports.QuizQuestionImageComponent = QuizQuestionImageComponent;


/***/ }),

/***/ "./src/app/quiz-round-crossword/quiz-round-crossword.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/quiz-round-crossword/quiz-round-crossword.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<quiz-round-image *ngIf=\"questions\"\r\n                  [providedQuestions]=\"questions\"\r\n                  (questionSolved)=\"handleQuestionSolved($event)\">\r\n</quiz-round-image>\r\n\r\n<td>\r\n  <div>\r\n    <table style=\"table-layout: fixed;width:125%\">\r\n      <tbody>\r\n      <tr *ngFor=\"let question of questions\">\r\n        <td style=\"background:black\" *ngFor=\"let blackBefore of getBlacksBefore(question)\" class=\"\">\r\n          &nbsp;\r\n        </td>\r\n        <td *ngFor=\"let white of getWhites(question); let ind=index;\">\r\n          <input style=\"text-transform: uppercase\"\r\n                 size=\"1\"\r\n                 disabled value=\"{{getValue(question, ind)}}\"\r\n                 [ngStyle]=\"{'background-color': getWhiteColor(white)}\">\r\n        </td>\r\n        <td style=\"background:black\" *ngFor=\"let blackAfter of getBlacksAfter(question)\">\r\n          &nbsp;\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</td>\r\n"

/***/ }),

/***/ "./src/app/quiz-round-crossword/quiz-round-crossword.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/quiz-round-crossword/quiz-round-crossword.component.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var RoundInfo_1 = __webpack_require__(/*! ../shared/RoundInfo */ "./src/app/shared/RoundInfo.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var QuizRoundCrosswordComponent = /** @class */ (function () {
    function QuizRoundCrosswordComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    QuizRoundCrosswordComponent.prototype.ngOnInit = function () {
        this.getRoundName();
    };
    QuizRoundCrosswordComponent.prototype.getRoundName = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) {
            _this.questions = new RoundInfo_1.RoundInfo().getCrosswordRoundQuestions(param['quizname']);
        });
    };
    QuizRoundCrosswordComponent.prototype.handleQuestionSolved = function ($event) {
        this.questions[$event].solved = true;
    };
    QuizRoundCrosswordComponent.prototype.getBlacksBefore = function (question) {
        var verticalWordIndex = this.getVerticalWordIndex();
        var questionVerticalWordtLetterIndex = question.verticalWordLetterIndex;
        // console.log(question);
        return new Array((verticalWordIndex - questionVerticalWordtLetterIndex) + 1).fill(1);
    };
    QuizRoundCrosswordComponent.prototype.getBlacksAfter = function (question) {
        var numberOfBlacksAfter = this.getCrosswordWidth() - (this.getBlacksBefore(question).length + this.getWhites(question).length);
        return new Array(numberOfBlacksAfter).fill(1);
    };
    QuizRoundCrosswordComponent.prototype.getWhites = function (question) {
        var whites = question.answer[0].split("");
        whites[question.verticalWordLetterIndex] = "*";
        return whites;
    };
    QuizRoundCrosswordComponent.prototype.getVerticalWordIndex = function () {
        return Math.max.apply(null, this.questions.map(function (question) { return question.verticalWordLetterIndex; }));
    };
    QuizRoundCrosswordComponent.prototype.getCrosswordWidth = function () {
        return Math.max.apply(null, this.questions.map(function (question) { return question.answer[0].length + 3; }));
    };
    QuizRoundCrosswordComponent.prototype.getWhiteColor = function (white) {
        return white === "*" ? "yellow" : "white";
    };
    QuizRoundCrosswordComponent.prototype.getValue = function (question, index) {
        return question.solved ? question.answer[0][index] : "";
    };
    QuizRoundCrosswordComponent = __decorate([
        core_1.Component({
            selector: 'quiz-round-crossword',
            template: __webpack_require__(/*! ./quiz-round-crossword.component.html */ "./src/app/quiz-round-crossword/quiz-round-crossword.component.html")
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], QuizRoundCrosswordComponent);
    return QuizRoundCrosswordComponent;
}());
exports.QuizRoundCrosswordComponent = QuizRoundCrosswordComponent;


/***/ }),

/***/ "./src/app/quiz-round-image/quiz-round-image.component.html":
/*!******************************************************************!*\
  !*** ./src/app/quiz-round-image/quiz-round-image.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-1 col-md-1\"></div>\r\n    <div class=\"col-xs-3 col-md-1\" *ngFor=\"let question of questions; let ind = index;\">\r\n      <a (click)=\"goToQuestion(ind)\">\r\n        <span class=\"glyphicon glyphicon-ok\" style=\"font-size: 50px;\" aria-hidden=\"true\" [style.color]=\"isSolved(ind)\"></span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <quiz-question-image\r\n    [questionImage]=\"getCurrentImageUrl()\"\r\n    [solvedBefore]=\"isCurrentQuestionSolvedBefore()\"\r\n    [answer]=\"getCurrentQuestionAnswer()\"\r\n    [hint]=\"getCurrentQuestionHint()\"\r\n    (answeredCorrectly)=\"currentQuestionSolved()\">\r\n  </quiz-question-image>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-offset-1 col-xs-1 col-md-offset-1 col-md-1\">\r\n      <a (click)=\"previousQuestion()\" *ngIf=\"currentQuestion > 0\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\" style=\"font-size: 75px;\" aria-hidden=\"true\"></span>\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-offset-6 col-xs-1 col-md-offset-9 col-md-1\">\r\n      <a (click)=\"nextQuestion()\" *ngIf=\"currentQuestion < questions.length -1\">\r\n        <span class=\"glyphicon glyphicon-chevron-right\" style=\"font-size: 75px;\" aria-hidden=\"true\"></span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/quiz-round-image/quiz-round-image.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/quiz-round-image/quiz-round-image.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var RoundInfo_1 = __webpack_require__(/*! ../shared/RoundInfo */ "./src/app/shared/RoundInfo.ts");
var QuizRoundImageComponent = /** @class */ (function () {
    function QuizRoundImageComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.questionSolved = new core_1.EventEmitter();
        this.currentQuestion = 0;
    }
    QuizRoundImageComponent.prototype.ngOnInit = function () {
        this.getRoundName();
    };
    QuizRoundImageComponent.prototype.getRoundName = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) {
            _this.roundName = param['quizname'];
            _this.setQuestions();
        });
    };
    QuizRoundImageComponent.prototype.setQuestions = function () {
        if (this.providedQuestions) {
            this.questions = this.providedQuestions;
        }
        else {
            this.questions = new RoundInfo_1.RoundInfo().getImageRoundQuestions(this.roundName);
        }
    };
    QuizRoundImageComponent.prototype.getCurrentImageUrl = function () {
        return "../../assets/" + this.roundName + "/" + this.getCurrentQuestionName() + ".jpg";
    };
    QuizRoundImageComponent.prototype.getCurrentQuestionName = function () {
        return this.questions[this.currentQuestion].name;
    };
    QuizRoundImageComponent.prototype.getCurrentQuestionAnswer = function () {
        return this.questions[this.currentQuestion].answer;
    };
    QuizRoundImageComponent.prototype.getCurrentQuestionHint = function () {
        return this.questions[this.currentQuestion].hint;
    };
    QuizRoundImageComponent.prototype.previousQuestion = function () {
        this.currentQuestion--;
    };
    QuizRoundImageComponent.prototype.nextQuestion = function () {
        this.currentQuestion++;
    };
    QuizRoundImageComponent.prototype.isCurrentQuestionSolvedBefore = function () {
        return this.questions[this.currentQuestion].solved;
    };
    QuizRoundImageComponent.prototype.currentQuestionSolved = function () {
        this.questions[this.currentQuestion].solved = true;
        this.questionSolved.emit(this.currentQuestion);
        if (this.allQuestionsSolved()) {
            this.router.navigateByUrl("/" + this.roundName + "/solved");
        }
    };
    QuizRoundImageComponent.prototype.isSolved = function (index) {
        return this.questions[index].solved ? 'green' : 'grey';
    };
    QuizRoundImageComponent.prototype.goToQuestion = function (index) {
        this.currentQuestion = index;
    };
    QuizRoundImageComponent.prototype.allQuestionsSolved = function () {
        return this.questions
            .filter(function (value) { return value.solved === false; })
            .length === 0;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QuizRoundImageComponent.prototype, "providedQuestions", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], QuizRoundImageComponent.prototype, "questionSolved", void 0);
    QuizRoundImageComponent = __decorate([
        core_1.Component({
            selector: 'quiz-round-image',
            template: __webpack_require__(/*! ./quiz-round-image.component.html */ "./src/app/quiz-round-image/quiz-round-image.component.html")
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], QuizRoundImageComponent);
    return QuizRoundImageComponent;
}());
exports.QuizRoundImageComponent = QuizRoundImageComponent;


/***/ }),

/***/ "./src/app/quiz-round-overview/quiz-round-overview.component.html":
/*!************************************************************************!*\
  !*** ./src/app/quiz-round-overview/quiz-round-overview.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h1>Overzicht rondes</h1>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h2>Klassieke rondes</h2>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\" *ngFor=\"let round of classicrounds\">\n      <a [routerLink]=\"['/classic', round]\">\n        <img class=\"img-circle\" style=\"border: 1px black solid\" [src]=\"getRoundAvatar(round)\" width=\"140\" height=\"140\">\n      </a>\n      <h2>{{round}}</h2>\n      <p>{{getClassicRoundOmschrijving(round)}}</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h2>Galerij rondes</h2>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\" *ngFor=\"let round of imagerounds\">\n      <a [routerLink]=\"['/image', round]\">\n        <img class=\"img-circle\" style=\"border: 1px black solid\" [src]=\"getRoundAvatar(round)\" width=\"140\" height=\"140\">\n      </a>\n      <h2>{{round}}</h2>\n      <p>{{getImageRoundOmschrijving(round)}}</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h2>Kruiswoordraadsel rondes</h2>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\" *ngFor=\"let round of crosswordrounds\">\n      <a [routerLink]=\"['/image-crossword', round]\">\n        <img class=\"img-circle\" style=\"border: 1px black solid\" [src]=\"getRoundAvatar(round)\" width=\"140\" height=\"140\">\n      </a>\n      <h2>{{round}}</h2>\n      <p>{{getCrosswordRoundOmschrijving(round)}}</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h2>Rode draad rondes</h2>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\" *ngFor=\"let round of rodedraadrounds\">\n      <a [routerLink]=\"['/rode-draad', round]\">\n        <img class=\"img-circle\" style=\"border: 1px black solid\" [src]=\"getRoundAvatar(round)\" width=\"140\" height=\"140\">\n      </a>\n      <h2>{{round}}</h2>\n      <p>{{getRodeDraadRoundOmschrijving(round)}}</p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/quiz-round-overview/quiz-round-overview.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/quiz-round-overview/quiz-round-overview.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var RoundInfo_1 = __webpack_require__(/*! ../shared/RoundInfo */ "./src/app/shared/RoundInfo.ts");
var QuizRoundOverviewComponent = /** @class */ (function () {
    function QuizRoundOverviewComponent() {
    }
    QuizRoundOverviewComponent.prototype.ngOnInit = function () {
        this.imagerounds = new RoundInfo_1.RoundInfo().getImageRoundNames();
        this.classicrounds = new RoundInfo_1.RoundInfo().getClassicRoundNames();
        this.crosswordrounds = new RoundInfo_1.RoundInfo().getCrosswordRoundNames();
        this.rodedraadrounds = new RoundInfo_1.RoundInfo().getRodeDraadRoundNames();
    };
    QuizRoundOverviewComponent.prototype.getImageRoundOmschrijving = function (rondeNaam) {
        return new RoundInfo_1.RoundInfo().getImageRoundOmschrijving(rondeNaam);
    };
    QuizRoundOverviewComponent.prototype.getCrosswordRoundOmschrijving = function (rondeNaam) {
        return new RoundInfo_1.RoundInfo().getCrosswordRoundOmschrijving(rondeNaam);
    };
    QuizRoundOverviewComponent.prototype.getRodeDraadRoundOmschrijving = function (rondeNaam) {
        return new RoundInfo_1.RoundInfo().getRodeDraadRoundOmschrijving(rondeNaam);
    };
    QuizRoundOverviewComponent.prototype.getClassicRoundOmschrijving = function (rondeNaam) {
        return new RoundInfo_1.RoundInfo().getClassicRoundOmschrijving(rondeNaam);
    };
    QuizRoundOverviewComponent.prototype.getRoundAvatar = function (round) {
        return "assets/" + round + "/avatar.jpg";
    };
    QuizRoundOverviewComponent = __decorate([
        core_1.Component({
            selector: 'trm-quiz-round-overview',
            template: __webpack_require__(/*! ./quiz-round-overview.component.html */ "./src/app/quiz-round-overview/quiz-round-overview.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], QuizRoundOverviewComponent);
    return QuizRoundOverviewComponent;
}());
exports.QuizRoundOverviewComponent = QuizRoundOverviewComponent;


/***/ }),

/***/ "./src/app/quiz-round-question/quiz-round-question.component.html":
/*!************************************************************************!*\
  !*** ./src/app/quiz-round-question/quiz-round-question.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n  <div class=\"list-group-item\" *ngFor=\"let vraag of vragen; let ind = index;\" [style.background-color]=\"backgroundColor(ind)\" [style.color]=\"textColor(ind)\">\n    <h4 class=\"list-group-item-heading\">{{vraag.titel}}</h4>\n    <p class=\"list-group-item-text\" style=\"margin-bottom: 5px\">{{vraag.vraag}}</p>\n    <input *ngIf=\"vragen[ind].solved === false\" type=\"text\" class=\"form-control\" placeholder=\"antwoord\" [(ngModel)]=\"guesses[ind]\">\n    <button *ngIf=\"vragen[ind].solved === false\" class=\"btn btn-default\" type=\"button\" (click)=\"checkAnswer(ind)\">Antwoord</button>\n    <h3 *ngIf=\"vragen[ind].solved === true\">{{vraag.answer[0]}}</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/quiz-round-question/quiz-round-question.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/quiz-round-question/quiz-round-question.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var RoundInfo_1 = __webpack_require__(/*! ../shared/RoundInfo */ "./src/app/shared/RoundInfo.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var QuizRoundQuestionComponent = /** @class */ (function () {
    function QuizRoundQuestionComponent(activatedRoute, router) {
        this.guesses = [];
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    QuizRoundQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) {
            _this.roundName = param['quizname'];
            _this.vragen = new RoundInfo_1.RoundInfo().getClassicRoundQuestions(_this.roundName);
        });
    };
    QuizRoundQuestionComponent.prototype.backgroundColor = function (ind) {
        return ind % 2 === 0 ? "#9CB7B7" : "#1D7D7D";
    };
    QuizRoundQuestionComponent.prototype.textColor = function (ind) {
        return "white";
    };
    QuizRoundQuestionComponent.prototype.checkAnswer = function (ind) {
        if (this.guesses[ind] && this.vragen[ind].answer.map(function (vraag) { return vraag.toLowerCase(); }).indexOf(this.guesses[ind].toLowerCase()) !== -1) {
            this.vragen[ind].solved = true;
            if (this.allSolved()) {
                this.router.navigateByUrl("/" + this.roundName + "/solved");
            }
        }
    };
    QuizRoundQuestionComponent.prototype.allSolved = function () {
        return this.vragen
            .filter(function (vraag) { return vraag.solved === false; })
            .length === 0;
    };
    QuizRoundQuestionComponent = __decorate([
        core_1.Component({
            selector: 'trm-quiz-round-question',
            template: __webpack_require__(/*! ./quiz-round-question.component.html */ "./src/app/quiz-round-question/quiz-round-question.component.html")
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], QuizRoundQuestionComponent);
    return QuizRoundQuestionComponent;
}());
exports.QuizRoundQuestionComponent = QuizRoundQuestionComponent;


/***/ }),

/***/ "./src/app/quiz-round-rode-draad/quiz-round-rode-draad.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/quiz-round-rode-draad/quiz-round-rode-draad.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n  <div class=\"list-group-item\" *ngFor=\"let vraag of vragen; let ind = index;\" [style.background-color]=\"backgroundColor(ind)\" [style.color]=\"textColor(ind)\">\n    <h4 class=\"list-group-item-heading\">{{vraag.titel}}</h4>\n    <p class=\"list-group-item-text\" style=\"margin-bottom: 5px\">{{vraag.vraag}}</p>\n    <input *ngIf=\"vragen[ind].solved === false\" type=\"text\" class=\"form-control\" placeholder=\"antwoord\" [(ngModel)]=\"guesses[ind]\">\n    <button *ngIf=\"vragen[ind].solved === false\" class=\"btn btn-default\" type=\"button\" (click)=\"checkAnswer(ind)\">Antwoord</button>\n    <h3 *ngIf=\"vragen[ind].solved === true\">{{vraag.answer[0]}}</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/quiz-round-rode-draad/quiz-round-rode-draad.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/quiz-round-rode-draad/quiz-round-rode-draad.component.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var RoundInfo_1 = __webpack_require__(/*! ../shared/RoundInfo */ "./src/app/shared/RoundInfo.ts");
var quiz_round_question_component_1 = __webpack_require__(/*! ../quiz-round-question/quiz-round-question.component */ "./src/app/quiz-round-question/quiz-round-question.component.ts");
var QuizRoundRodeDraadComponent = /** @class */ (function (_super) {
    __extends(QuizRoundRodeDraadComponent, _super);
    function QuizRoundRodeDraadComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuizRoundRodeDraadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) {
            _this.roundName = param['quizname'];
            _this.vragen = new RoundInfo_1.RoundInfo().getRodeDraadRoundQuestions(_this.roundName);
        });
    };
    QuizRoundRodeDraadComponent.prototype.backgroundColor = function (ind) {
        return ind === this.vragen.length - 1 ? '#db3a31' : _super.prototype.backgroundColor.call(this, ind);
    };
    QuizRoundRodeDraadComponent = __decorate([
        core_1.Component({
            selector: 'trm-quiz-round-rode-draad',
            template: __webpack_require__(/*! ./quiz-round-rode-draad.component.html */ "./src/app/quiz-round-rode-draad/quiz-round-rode-draad.component.html")
        })
    ], QuizRoundRodeDraadComponent);
    return QuizRoundRodeDraadComponent;
}(quiz_round_question_component_1.QuizRoundQuestionComponent));
exports.QuizRoundRodeDraadComponent = QuizRoundRodeDraadComponent;


/***/ }),

/***/ "./src/app/quiz-round-solved/quiz-round-solved.component.html":
/*!********************************************************************!*\
  !*** ./src/app/quiz-round-solved/quiz-round-solved.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Gefeliciteerd, u heeft alle vragen van de ronde '{{roundName}}' opgelost</h1>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-offset-3 col-xs-6 col-md-offset-3 col-md-6\">\r\n      <img alt=\"100%x180\" data-src=\"holder.js/100%x180\" [src]=\"getRoundSolvedImage()\">\r\n      <h4><i>{{getWinnerText()}}</i></h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-offset-3 col-xs-6 col-md-offset-3 col-md-6\">\r\n      <a [routerLink]=\"['/overview']\">Terug naar overzicht rondes</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/quiz-round-solved/quiz-round-solved.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/quiz-round-solved/quiz-round-solved.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var RoundInfo_1 = __webpack_require__(/*! ../shared/RoundInfo */ "./src/app/shared/RoundInfo.ts");
var QuizRoundSolvedComponent = /** @class */ (function () {
    function QuizRoundSolvedComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    QuizRoundSolvedComponent.prototype.ngOnInit = function () {
        this.getRoundName();
    };
    QuizRoundSolvedComponent.prototype.getRoundName = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) { return _this.roundName = param['quizname']; });
    };
    QuizRoundSolvedComponent.prototype.getRoundSolvedImage = function () {
        return "../../assets/" + this.roundName + "/winner.jpg";
    };
    QuizRoundSolvedComponent.prototype.getWinnerText = function () {
        return new RoundInfo_1.RoundInfo().getImageRoundWinnerText(this.roundName);
    };
    QuizRoundSolvedComponent = __decorate([
        core_1.Component({
            selector: 'trm-quiz-round-solved',
            template: __webpack_require__(/*! ./quiz-round-solved.component.html */ "./src/app/quiz-round-solved/quiz-round-solved.component.html")
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], QuizRoundSolvedComponent);
    return QuizRoundSolvedComponent;
}());
exports.QuizRoundSolvedComponent = QuizRoundSolvedComponent;


/***/ }),

/***/ "./src/app/quiz.component.html":
/*!*************************************!*\
  !*** ./src/app/quiz.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/quiz.component.ts":
/*!***********************************!*\
  !*** ./src/app/quiz.component.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var QuizAppComponent = /** @class */ (function () {
    function QuizAppComponent() {
    }
    QuizAppComponent = __decorate([
        core_1.Component({
            selector: 'quiz-app',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/quiz.component.html")
        })
    ], QuizAppComponent);
    return QuizAppComponent;
}());
exports.QuizAppComponent = QuizAppComponent;


/***/ }),

/***/ "./src/app/shared/RoundInfo.ts":
/*!*************************************!*\
  !*** ./src/app/shared/RoundInfo.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RoundInfo = /** @class */ (function () {
    function RoundInfo() {
        this.imageRounds = new Map();
        this.classicRounds = new Map();
        this.crosswordRounds = new Map();
        this.rodeDraadRounds = new Map();
        this.initializeImageRounds();
        this.initializeClassicRounds();
        this.initializeCrosswordRounds();
        this.initializeRodeDraadRounds();
    }
    RoundInfo.prototype.initializeImageRounds = function () {
        this.imageRounds.set("merken", {
            winnerText: "Alles opgelost!? Wat een opMERKelijke verdienste!",
            omschrijving: "Vind de merken aan de hand van een cryptische afbeelding.",
            questions: [
                {
                    name: "one",
                    answer: ["devos & lemmens", "devos&lemmens", "devos-lemmens", "devos lemmens"],
                    hint: "Aan tafel!",
                    solved: false
                },
                { name: "two", answer: ["carlsberg", "carl'sberg"], hint: "Probably not the best in the world", solved: false },
                { name: "three", answer: ["ford"], hint: "Vroem!", solved: false },
                { name: "four", answer: ["vans"], hint: "Engelse busjes", solved: false },
                { name: "five", answer: ["studio brussel", "stubru"], hint: "Meer dan 1000 goede doelen", solved: false },
                { name: "six", answer: ["coca-cola", "coca cola"], hint: "In het rood, in het grijs, in het zwart en in het groen", solved: false },
                {
                    name: "seven",
                    answer: ["häagen-dazs", "haagen-dazs", "haagen dazs", "hagen das", "haagen das", "haagen daz"],
                    hint: "Niet Ben&Jerries",
                    solved: false
                },
                { name: "eight", answer: ["albert heijn", "albert-heijn", "albert hein"], hint: "Hechte vriend van Delhaize", solved: false },
                { name: "nine", answer: ["thomas cook", "tomas cook"], hint: "Boven de wolken", solved: false },
                { name: "ten", answer: ["de lijn"], hint: "Er is momenteel geen hint beschikbaar wegens stakend personeel", solved: false }
            ]
        });
        this.imageRounds.set("films", {
            winnerText: "Gefeliciteerd! De naam van een filmfan zoals jij zou in de aftiteling moeten staan.",
            omschrijving: "Welke films zoeken we? Je enige leidraad zijn enkele raadselachtige prenten...",
            questions: [
                { name: "one", answer: ["das boot"], hint: "auf Deutsch", solved: false },
                { name: "two", answer: ["hector"], hint: "Vlaamse film", solved: false },
                { name: "three", answer: ["jaws"], hint: "Eentje van Spielberg", solved: false },
                { name: "four", answer: ["mad max"], hint: "Werd al gespeeld door Mel Gibson en Tom Hardy", solved: false },
                { name: "five", answer: ["life of brian"], hint: "Monty Python", solved: false },
                { name: "six", answer: ["the silence of the lambs", "silence of the lambs"], hint: "Politie gaat ten rade bij kannibaal", solved: false },
                {
                    name: "seven",
                    answer: ["schindler's list", "schindlers list", "shindler's list", "shindlers list"],
                    hint: "Nog eentje van Spielberg. Bijna volledig in zwart-wit.",
                    solved: false
                },
                { name: "eight", answer: ["wall-e", "wall e", "walle"], hint: "Populatie van de aarde: 0", solved: false },
                { name: "nine", answer: ["up"], hint: "ballonnen", solved: false },
                { name: "ten", answer: ["the wolf of wall street", "wolf of wall street"], hint: "Rijk worden met andermans geld", solved: false }
            ]
        });
        this.imageRounds.set("steden", {
            winnerText: "Van de Alpen tot Zimbabwe, jij vindt overal de weg terug naar huis!",
            omschrijving: "Tien bekende steden uit binnen- en buitenland verbergen zich achter mysterieuze foto's",
            questions: [
                { name: "one", answer: ["dinant"], hint: "zoek het in Wallonië", solved: false },
                { name: "two", answer: ["parijs"], hint: "Ze zijn met twee, ze zijn een stel, een koppel, een ...", solved: false },
                { name: "three", answer: ["den haag"], hint: "Onpopulaire plek voor massamoordenaars en dictators", solved: false },
                { name: "four", answer: ["bonn", "bon"], hint: "pas mal", solved: false },
                { name: "five", answer: ["lissabon", "lisabon"], hint: "In deze stad ligt Vasco da Gama begraven", solved: false },
                { name: "six", answer: ["ankara"], hint: "De hoofdstad", solved: false },
                {
                    name: "seven",
                    answer: ["port-au-prince", "port-o-prince", "portoprince", "port au prince"],
                    hint: "Dat is de vlag van Haïti",
                    solved: false
                },
                { name: "eight", answer: ["oxford"], hint: "Ze hebben een bekende unief", solved: false },
                { name: "nine", answer: ["stalingrad", "stalinrad"], hint: "A single death is a tragedy; a million deaths is a statistic.", solved: false },
                { name: "ten", answer: ["las vegas", "vegas"], hint: "Ik zet 2000 dollar op rood", solved: false }
            ]
        });
        this.imageRounds.set("acteurs", {
            winnerText: "Als er een Oscar was voor de beste quizzer, dan ging die sowieso naar jou!",
            omschrijving: "en ook een paar actrices. Uit binnen- én buitenland!",
            questions: [
                { name: "one", answer: ["mathias coppens", "coppens", "matthias coppens"], hint: "Presenteert voornamelijk programma's en dan voornamelijk samen met zijn broer. Acteerde onder ander naast Herbert Flack. Regisseerde ook De zonen van Van As.", solved: false },
                { name: "two", answer: ["ben stiller", "stiller"], hint: "Amerikaans acteur, vooral bekend uit comedy's zoals Zoolander.", solved: false },
                { name: "three", answer: ["vin diesel"], hint: "kale actieheld. Kan snel en furieus uit de hoek komen.", solved: false },
                { name: "four", answer: ["sylvester stallone", "stallone", "stalone"], hint: "Speelde mee in de bekendste boksfilms aller tijden. Die gezichtsverlamming had hij daarvoor al.", solved: false },
                { name: "five", answer: ["matteo simoni", "simoni"], hint: "Speelde al een Italiaanse zanger, een hyperactief broodje en een Marokkaan.", solved: false },
                { name: "six", answer: ["filip peeters", "peeters", "peters", "filip peters"], hint: "De man van Liesje van Het Eiland. Deed al twee keer mee aan De Slimste Mens", solved: false },
                { name: "seven", answer: ["jan decleir", "declair", "decleir", "jan declair"], hint: "Broer van Reinhilde, vader van Sofie, Flor en Jenne", solved: false },
                { name: "eight", answer: ["peter van asbroeck", "peter van asbroek", "van asbroek", "peter van as broek"], hint: "Bij deze flik mag iedereen komen eten", solved: false },
                { name: "nine", answer: ["madonna"], hint: "Je kent haar vooral als zangeres, maar de blondine op leeftijd heeft ook meerdere hoofdrollen mogen vertolken.", solved: false },
                { name: "ten", answer: ["meryl streep", "streep"], hint: "Eén van de zes personen op aarde met 3 Oscars op haar naam. Vertolkte onder andere Margareth Thatcher.", solved: false }
            ]
        });
        this.imageRounds.set("plekken", {
            winnerText: "Hopelijk heb je nog een plekje in je maag gereserveerd voor het dessert straks!",
            omschrijving: "Kan jij deze tien wereldberoemde trekpleisters afleiden uit een reeks cryptische afbeeldingen?",
            questions: [
                { name: "one", answer: ["Arc de Triomphe", "Ark de Triomphe"], hint: "In het midden van een rond punt in Parijs.", solved: false },
                { name: "two", answer: ["Mont Saint-Michel", "Mont Saint Michel"], hint: "Soms geraak je er te voet, soms met een bootje", solved: false },
                { name: "three", answer: ["Vlooybergtoren", "Vlooibergtoren"], hint: "Voorzichtig op de baan, he!", solved: false },
                { name: "four", answer: ["Big Ben"], hint: "Ding-dong!", solved: false },
                { name: "five", answer: ["Chinese muur", "De chinese muur"], hint: "In tegenstelling tot wat sommigen beweren is dit bouwwerk niét zichtbaar vanuit de ruimte", solved: false },
                { name: "six", answer: ["Brandenburger Poort", "Brandenburger Tor"], hint: "Twee woorden. Als je het op z'n Duits uitspreekt wordt het tweede woord 'Tor'", solved: false },
                { name: "seven", answer: ["Times Square", "Time Square"], hint: "Overal reclameborden, taxi's en toeristen. Eén van de beste plekken om Nieuwjaar te vieren", solved: false },
                { name: "eight", answer: ["Christus de Verlosser", "Christ The Redeemer", "Christ The Redeemer"], hint: "Welk beroep oefent de man rechts uit?", solved: false },
                { name: "nine", answer: ["Alhambra"], hint: "Meneer Pacino vraagt dat je het derde item op z'n Engels uitspreekt.", solved: false },
                { name: "ten", answer: ["Eiffeltoren", "Eifeltoren"], hint: "De maker van dit bouwwerk, Gustave, leverde ook het Vrijheidsbeeld aan de VS.", solved: false }
            ]
        });
    };
    RoundInfo.prototype.initializeClassicRounds = function () {
        this.classicRounds.set("jaarretrospectief-2016", {
            winnerText: "Ben jij even klaar voor het volgend jaar als deze poes?",
            omschrijving: "Weet jij nog wat er het afgelopen jaar allemaal is gebeurd? Bewijs het in deze ronde!",
            questions: [
                {
                    titel: "Januari",
                    vraag: "Naast David Bowie stierf ook de carrière van een Vlaamse veldrijdster. Wat werd er gevonden in de fiets van Femke Van Den Driessche?",
                    answer: ["motor", "motortje", "een motor", "een motortje"],
                    solved: false
                },
                {
                    titel: "Februari",
                    vraag: "Leonardo DiCaprio won voor het eerst in zijn leven een Oscar voor zijn hoofdrol in The Revenant. Weet je echter welke Valentijnsfilm zo maar even 5 Razzies (filmprijzen voor de slechtste films in een bepaalde categorie) naar huis mocht meenemen?",
                    answer: ["50 shades of grey", "50 shades of gray", "fifty shades of grey", "fifty shades of gray"],
                    solved: false
                },
                {
                    titel: "Maart",
                    vraag: "Barack Obama hief het handelsembargo met dit Zuid-Amerikaanse land op dat in 1959 werd opgericht. Dat werd prompt gevierd met een concert van de Rolling Stones. Over welk land gaat het?",
                    answer: ["cuba"],
                    solved: false
                },
                {
                    titel: "April",
                    vraag: "In April moesten we niet alleen van Prince afscheid nemen. Ook een minister uit de Vlaamse regering stapte op. Niet omwille van haar gelijkenis met de zanger van The Cure. Wel omwille van haar slecht ontvangen taks. Wat is de achternaam van deze minister?",
                    answer: ["turtelboom"],
                    solved: false
                },
                {
                    titel: "Mei",
                    vraag: "In Mei kwam het grootste dopingschandaal ooit aan het licht toen werd ontdekt dat de Russische regering al jarenlang de dopingtests van honderden atleten vervalste. In Mei vond ook het Eurovisiesongfestival plaats. Dit jaar won Jamala met het liedje '1944'. Dat gaat over de deportatie van 240.000 Krim-Tataren naar Centraal-Azië door Jozef Stalin. Wat is de nationaliteit van Jamala?",
                    answer: ["oekraïne", "oekraine"],
                    solved: false
                },
                {
                    titel: "Juni",
                    vraag: "Deze maand stond in het teken van het EK voetbal in Frankrijk. Omdat ik niks van voetbal ken, maak ik er een antropologische vraag van. Wat zijn de drie laatste letters van de meeste achternamen van de leden uit de Ijslandse voetbalploeg?",
                    answer: ["son"],
                    solved: false
                },
                {
                    titel: "Juli",
                    vraag: "Eén spel kreeg alle aandacht tijdens de zomermaanden: Pokémon Go. De hoeveelste verjaardag vierde de franchise dit jaar? Tip: het is een rond getal.",
                    answer: ["20", "twintig"],
                    solved: false
                },
                {
                    titel: "Augustus",
                    vraag: "Welke vrouw won dit jaar onze enige gouden medaille in de atletiek (achternaam)?",
                    answer: ["thiam", "tiam"],
                    solved: false
                },
                {
                    titel: "September",
                    vraag: "Welke Nobelprijswinnares voor de vrede werd door Paus Franciscus heilig verklaard?",
                    answer: ["moeder teresa", "moeder theresa", "teresa", "theresa"],
                    solved: false
                },
                {
                    titel: "Oktober",
                    vraag: "Wie won de Nobelprijs voor de Literatuur?",
                    answer: ["bob dylan", "dylan"],
                    solved: false
                },
                {
                    titel: "November",
                    vraag: "The Donald haalde het van Hillary Clinton. Ken je ook de achternaam van zijn running mate en dus toekomstige vice-president van de VS? Tip: het lijkt op een synoniem voor 'worst'",
                    answer: ["pence"],
                    solved: false
                },
                {
                    titel: "December",
                    vraag: "Koning Bhumibol van Thailand kwam dit jaar te gaan. Hoe lang gaat het land om zijn heengaan rouwen?",
                    answer: ["1 jaar", "een jaar", "één jaar", "twaalf maanden", "twaalf maand", "12 maand", "twaalf maanden"],
                    solved: false
                }
            ]
        });
        this.classicRounds.set("vijftig", {
            winnerText: "Op naar de volgende 50 jaar",
            omschrijving: "Algemene kennis vragen over de voorbije vijftig jaar",
            questions: [
                {
                    titel: "1967",
                    vraag: "Welke acteur die later president van de VS zou worden, wordt ingewijd als gouverneur van Californië? (achternaam)",
                    answer: ["raegan", "regan"],
                    solved: false
                },
                {
                    titel: "1972",
                    vraag: "Het Britse leger doodt 14 ongewapende burgers in Noord-Ierland. Welke naam kreeg deze gebeurtenis?",
                    answer: ["bloody sunday"],
                    solved: false
                },
                {
                    titel: "1977",
                    vraag: "George Lucas breekt alle box-office records met zijn nieuwste film. Hoe heet deze?",
                    answer: ["Star Wars: A New Hope", "star wars", "star wars a new hope", "a new hope"],
                    solved: false
                },
                {
                    titel: "1982",
                    vraag: "Er breekt een tien weken durende oorlog uit tussen Groot-Brittanië en Argentinië. Rond welke eilanden speelt deze oorlog zich af?",
                    answer: ["falkland", "falkland eilanden"],
                    solved: false
                },
                {
                    titel: "1987",
                    vraag: "Wie wordt het eerste vrouwelijke lid van de Rock and Roll Hall of Fame? Je kent haar van nummers als 'Respect' en 'Faith' (achternaam)",
                    answer: ["franklin"],
                    solved: false
                },
                {
                    titel: "1992",
                    vraag: "Steffi Graf wint Wimbledon bij het vrouwentennis. Wie won bij de mannen? (achternaam)",
                    answer: ["agassi", "agasi", "aggassi", 'aggassi'],
                    solved: false
                },
                {
                    titel: "1997",
                    vraag: "De avonturen van Ash Ketchum, Misty en Brock beginnen. Over welke tv-serie die nog steeds loopt (weliswaar zonder Misty en Brock) gaat het?",
                    answer: ["pokémon", "pokemon"],
                    solved: false
                },
                {
                    titel: "2002",
                    vraag: "De auteur van onder meer Pipi Langkous sterft. Wat is de achternaam van deze Zweedse?",
                    answer: ["lindgren", "lintgren"],
                    solved: false
                },
                {
                    titel: "2007",
                    vraag: "Wie wint de nobelprijs voor de vrede omwille van zijn werk rond klimaatopwarming? (achternaam)",
                    answer: ["gore"],
                    solved: false
                },
                {
                    titel: "2012",
                    vraag: "Lonesome George sterft op 102-jarige leeftijd waardoor zijn soort uitsterft. Wat was Lonesome George?",
                    answer: ["schildpad"],
                    solved: false
                },
                {
                    titel: "2017",
                    vraag: "Wie haalde Grammy's binnen voor 'Record of the Year', 'Album of the Year', 'Song of the Year', 'Best Pop Solo' en 'Best Pop Vocal album'?",
                    answer: ["adele"],
                    solved: false
                }
            ]
        });
        this.classicRounds.set("jaarretrospectief-2017", {
            winnerText: "Als je je even hard smijt als deze hond, ben je volledig klaar voor 2018",
            omschrijving: "Twaalf vragen over het jaar 2017. Heb jij de voorbije 31,536,000 seconden goed opgelet",
            questions: [
                {
                    titel: "Januari",
                    vraag: "Trump legt de eed af als president van de Verenigde Staten van Amerika. De hoeveelste president is hij als je weet dat Eisenhower de 34ste president was en dat die regeerde tussen 1953 en 1961?",
                    answer: ["45ste", "45"],
                    solved: false
                },
                {
                    titel: "Februari",
                    vraag: "Belgische astronomen ontdekken een ster met bewoonbare planeten op 39 lichtjaren van de aarde. Hij noemen ze deze ster? De onderzoekers zijn fan van een biersoort gebrouwen door moniken.",
                    answer: ["trappist-1", "trappist", "trapist"],
                    solved: false
                },
                {
                    titel: "Maart",
                    vraag: "Hoe heet de Amerikaanse gitaarvirtuoos die op 90-jarige leeftijd het leven liet? Eén van zijn bekendste nummers is 'Johnny B. Goode'.",
                    answer: ["chuck berry", "berry", "berrie"],
                    solved: false
                },
                {
                    titel: "April",
                    vraag: "Welke Disneyfilm werd verfilmd met Emma Watson in de hoofdrol?",
                    answer: ["beauty and the beast", "belle en het beest"],
                    solved: false
                },
                {
                    titel: "Mei",
                    vraag: "Salvador Sobral zingt Portugal naar de Eurovisie Songfestival overwinning met het nummer 'Amor pelos dois'. De hoeveelste overwinning was dit voor Portugal?",
                    answer: ["eerste", "1"],
                    solved: false
                },
                {
                    titel: "Juni",
                    vraag: "Ariana Grande houdt een concert in Manchester ter nagedachtenis van de slachtoffers van de bom die tijdens haar vorige concert in de Engelse stad afging. Het nummer 'Don't look back in anger' werd het lijflied van het event. Maar wie bedacht dat nummer? Tip: je vindt ze in de woestijn.",
                    answer: ["oasis", "oase"],
                    solved: false
                },
                {
                    titel: "Juli",
                    vraag: "Chris Froome wint voor de vierde keer de Tour de France. Wie was de laatste Belgische winnaar? Tip: Tijdens die zomer liepen de Olympische Spelen in Montréal, Canada.",
                    answer: ["lucien van impe", "van impe"],
                    solved: false
                },
                {
                    titel: "Augustus",
                    vraag: "Prins Philip gaat op pensioen na meer dan 22.000 publieke optredens. Wie is de echtgenote van deze philip?",
                    answer: ["queen elisabeth II", "queen elisabeth", "elisabeth"],
                    solved: false
                },
                {
                    titel: "September",
                    vraag: "Eén van de bekendste uitgevers ter wereld sterft op 91-jarige leeftijd in zijn Mansion genoemd naar zijn bekendste blad. Hij laat 4 kinderen en een 31-jarige vrouw achter. Over wie hebben we het?",
                    answer: ["hugh hefner", "hefner"],
                    solved: false
                },
                {
                    titel: "Oktober",
                    vraag: "Hein Vanhaezebrouck wordt coach van Anderlecht. Welke Zwitser moest opstappen om plaats te maken voor Hein? Zijn naam is een anagram voor 'Weer in leer'",
                    answer: ["rene weiler", "weiler"],
                    solved: false
                },
                {
                    titel: "November",
                    vraag: "De afgezette minister-president van Catalonië stelt in Brugge zijn kiescampagne voor. Hoe heet die man ook alweer?",
                    answer: ["puigdemont"],
                    solved: false
                },
                {
                    titel: "December",
                    vraag: "1 eenheid van deze elektronisch munt die in 2009 het levenslicht zag is op 3 december meer dan 11.000 dollar waard. Wat is de naam van deze munt?",
                    answer: ["bitcoin", "bit coin"],
                    solved: false
                }
            ]
        });
        this.classicRounds.set("jaarretrospectief-2018", {
            winnerText: "Dit varken zal 2019 waarschijnlijk niet halen, maar iemand die zo veel weet als jij haalt zonder problemen het volgende decennium",
            omschrijving: "2018 ligt bijna achter ons. Hoe memorabel waren de gebeurtenissen van dit jaar voor jou?",
            questions: [
                {
                    titel: "Januari",
                    vraag: "Op 10 januari laat comédienne Lies Lefever op 37-jarige leeftijd het leven. Drie dagen eerder verloor de wereld ook al een andere zangeres. Welke Franse France zoeken we? (achternaam)",
                    answer: ["Gall", "gal"],
                    solved: false
                },
                {
                    titel: "Februari",
                    vraag: "SpaceX, een bedrijf die commerciële ruimtereizen poogt te organiseren, slaagt er in om zijn eerste raket, de 'Falcon Heavy', te lanceren. Mensen aan boord zijn er niet, wel een Tesla Roadster. Deze elektrische wagen wordt achtergelaten in de ruimte en speelt daar sindsdien nonstop 'Life on Mars' van David Bowie. Wat is de achternaam van de baas van SpaceX en Tesla. Hij ontwikkelde ook al PayPal, vlammenwerpers en leidt The Boring Company. ",
                    answer: ["Elon Musk", "Musk"],
                    solved: false
                },
                {
                    titel: "Maart",
                    vraag: "Een vrouw in Arizona sterft nadat ze wordt aangereden door een Uber taxi. Wat was er zo speciaal aan deze wagen waardoor dit ongeval het eerste van zijn soort werd?",
                    answer: ["De wagen was zelfsturend", "zelfsturend", "geen bestuurder", "zelfrijdend"],
                    solved: false
                },
                {
                    titel: "April",
                    vraag: "Na 35 jaar wordt de ban op films opgeheven in Saoedi-Arabië. Welke film werd de eerste die getoond werd na deze ban? Hij is ondertussen genomineerd voor 3 Oscars: beste film, beste soundtrack en beste song. Enkele hoofdrollen zijn weggelegd voor Chadwick Boseman als koning T'Challa, Michael B. Jordan als Eric Killmonger en Lupita Nyong'o als Nakia.",
                    answer: ["Black Panther"],
                    solved: false
                },
                {
                    titel: "Mei",
                    vraag: "De best bezochte film van dit jaar haalt maar liefst 2 miljard dollar binnen voor Walt Disney en wordt daarmee de vierde best verdienende film ooit. Met zijn geschatte budget dat tussen de 300 en 400 miljoen dollar ligt, is hij echter ook één van de duurste films ooit gemaakt. Welke film zoeken we?",
                    answer: ["Avengers: Infinity War", "Avengers 3", "Infinity War"],
                    solved: false
                },
                {
                    titel: "Juni",
                    vraag: "De wereldbeker voetbal vind plaats in Rusland. Frankrijk gaat met de trofee naar huis en België wordt derde. Welk land kreeg de zilveren plak?",
                    answer: ["Kroatië", "Kroatie"],
                    solved: false
                },
                {
                    titel: "Juli",
                    vraag: "De Tham Luang Nang Non grot komt uitgebreid in het nieuws. Twaalf jongeren en hun begeleider zitten er namelijk 17 dagen lang vast nadat de grot volloopt met water. Welke hobby delen deze mannen?",
                    answer: ["voetbal"],
                    solved: false
                },
                {
                    titel: "Augustus",
                    vraag: "Tientallen mensen sterven nadat een brug in Italië instort. In welke stad in het noordwesten van het land met meer dan een half miljoen inwoners bevond deze brug zich?",
                    answer: ["Genua"],
                    solved: false
                },
                {
                    titel: "September",
                    vraag: "Trump was niet welkom, maar onder meer Obama en George W. Bush waren wel aanwezig op de begrafenis van deze Republikeinse senator en krijgsgevangene uit de Vietnam oorlog. Wat is de achternaam van de man die ooit nog met Obama streed om de presidentstitel?",
                    answer: ["John McCain", "McCain"],
                    solved: false
                },
                {
                    titel: "Oktober",
                    vraag: "Gemeenteverkiezingen in België. In welke gemeente boekte Guy D'Haeseleer een monsteroverwinning met zijn extreemrechtse partij?",
                    answer: ["Ninove", "Ninnove"],
                    solved: false
                },
                {
                    titel: "November",
                    vraag: "Als gevolg van de verkiezingen trok de toenmalige minister van Defensie terug naar Hasselt om daar burgemeester te worden. Hij werd opgevolgd door partijgenoot Sander Loones die na minder dan een maand zijn post weer mocht afgeven aan Didier Reynders. Wie is de huidige burgemeester van Hasselt? (achternaam)",
                    answer: ["Vandeput", "van de put"],
                    solved: false
                },
                {
                    titel: "December",
                    vraag: "Wat is de Franse naam van de protestbeweging die onder andere Parijs en Wallonië bezette uit onvrede omtrent hoge brandstofprijzen en lage inkomens?",
                    answer: ["Gilets jaunes", "Gilet jaune"],
                    solved: false
                }
            ]
        });
    };
    RoundInfo.prototype.initializeCrosswordRounds = function () {
        this.crosswordRounds.set("merken-crossword", {
            winnerText: "Hopelijk blijven jouw kleren na de fondue ook onbevlekt",
            omschrijving: "Een bisronde merken raden. Nu met 100% extra kruiswoordraadsels!",
            questions: [
                { name: "one", verticalWordLetterIndex: 1, answer: ["dove"], hint: "Een diersoort in het Engels", solved: false },
                { name: "two", verticalWordLetterIndex: 5, answer: ["mustang"], hint: "Een automerk die je in België quasi nooit ziet rijden. Ook een diersoort.", solved: false },
                { name: "three", verticalWordLetterIndex: 6, answer: ["ravensburger"], hint: "Maken speelgoed en puzzels", solved: false },
                { name: "four", verticalWordLetterIndex: 1, answer: ["becel"], hint: "Niet te dik smeren, dat is ongezond!", solved: false },
                { name: "five", verticalWordLetterIndex: 8, answer: ["harleydavidson", "harley davidson", "harley-davidson"], hint: "Met twee wielen ben je sneller de file door", solved: false },
                { name: "six", verticalWordLetterIndex: 1, answer: ["aldi"], hint: "De bijnaam van die rechtse was Lady...", solved: false },
                { name: "seven", verticalWordLetterIndex: 3, answer: ["drpepper", "dr pepper", "dr. pepper", "dokter pepper", "doctor pepper"], hint: "Artsen raden het drinken van dit merk af", solved: false },
                { name: "eight", verticalWordLetterIndex: 5, answer: ["hellokitty", "hello kitty"], hint: "Meisjes hebben er waarschijnlijk een schrift, pen, inpakpapier en dekbedovertrek van", solved: false },
                { name: "nine", verticalWordLetterIndex: 7, answer: ["kruidvat"], hint: "Amerikanen zouden het een 'Drug store' noemen. Verrast? Dat kan misschien in je voordeel spelen!", solved: false },
            ]
        });
    };
    RoundInfo.prototype.initializeRodeDraadRounds = function () {
        this.rodeDraadRounds.set("rode-draad-1", {
            winnerText: "Jouw outfit ziet er vandaag ook sprankelend uit",
            omschrijving: "Vier vragen, vier antwoorden, 1 rode draad.",
            questions: [
                { vraag: "We zoeken de naam van een hondenras. De soort komt voort uit een ander ras dat oorspronkelijk gebruikt werd als een oud-griekse waak-, vecht- en herdershond. Later zette men deze honden zelfs in om op everzwijnen en beren te jagen. Sommigen namen zelfs deel aan stierengevechten. Het mannetje is gemiddeld 63 cm hoog en weegt 32 kg. Vrouwtjes zijn enkele kilo's en centimeters kleiner. Hij wordt omschreven als 'Een forse atleet met een tragisch denkershoofd en een speels hart',maar een blauw oog zal hij je niet snel slaan.", answer: ["Boxer", "Duitse Boxer"], solved: false },
                { vraag: "Wat is de naam van een houder voor vloeistoffen vervaardigd uit polyethyleentereftalaat? Ze werd in 1973 gepatenteerd en wordt gebruikt als verpakking voor onder meer cosmetica, zepen, schoonmaakmiddelen en medicijnen. Meestal bevatten ze echter gewone drinkbare stoffen zoals water of frisdrank. Met drie letters kom je al een heel eind.", answer: ["Petfles", "pet"], solved: false },
                { vraag: "Hoe heet de Belgische groep die in 1994 werd opgericht en oorspronkelijk 'Things To Come' heette? In '98 wonnen ze Humo's Rock Rally waarna singles als 'Never get enough' en 'Fool for Love' volgden. Na de release van hun plaat 'The Game' en hun daaropvolgende tour in 2012 kondigde de groep een hiatus aan die nog steeds loopt. Hun frontman begon een succesvolle solocarrière en zetelde onder meer in The Voice.", answer: ["Das Pop"], solved: false },
                { vraag: "Een glaasje alcoholhoudende drank dat je vlak voor het slapen binnengiet, hoe heet dat ook alweer? Het is ook een synoniem voor de goudpapaver, een bloem die voorkomt in de Verenigde Staten en Mexico.", answer: ["Slaapmutsje", "Slaapmuts"], solved: false },
                { vraag: "Wat is de rode draad?", answer: ["kleding", "kledij", "kledingstukken", "kledingstuk"], solved: false }
            ]
        });
        this.rodeDraadRounds.set("rode-draad-2", {
            winnerText: "Een quiztalent zoals jij kan hele inboedels winnen!",
            omschrijving: "Nog eens vier vragen en vier antwoorden. En dan nog een rode draad.",
            questions: [
                { vraag: "Elk jaar wordt er in Thailand het Loi Krathong gevierd. De deelnemers van dit religieus festival maken elk een 'Khom Loi' en laten deze los als de nacht is gevallen. Hierdoor wordt de hemel gevuld met ontelbaar veel lichtjes. Wat zijn deze 'Khom Loi's in het Nederlands?", answer: ["Lampionnen", "Lampion"], solved: false },
                { vraag: "Met een kabelbaan kan je de top van deze Zuid-Afrikaanse berg van meer dan een kilometer hoog bereiken. De berg kijkt uit over Kaapstad en heeft een typerende platte bovenkant. Wat is de naam van deze berg?", answer: ["Tafelberg"], solved: false },
                { vraag: "De vrucht van de boom die we zoeken is een noot die met 2 tot 4 stuks in een bolster zitten. De bolster wordt gevormd door schutbladen met stekels. Onder meer eekhoorns, kraaien en muizen zijn er verzot op. Ook voor de mens is de vrucht eetbaar. Je kan ze rauw eten, poffen, roosteren of koken. Indien je ze droogt kan je ze verwerken in meel.", answer: ["Kastanje", "Tamme kastanje"], solved: false },
                { vraag: "Dit turntoestel kan je ook in speeltuinen vinden. Het bestaat uit een aan verticale palen bevestigde legger van metaal of glasfiber. De elementen die turners aan dit toestel ondernemen zijn bijvboorbeeld de reuzenzwaai of de buikdraai. Vooraleer ze die elementen proberen te voltooien smeren ze hun handen echter best in met magnesium. Over welk toestel hebben we het?", answer: ["Rekstok"], solved: false },
                { vraag: "Wat is de rode draad?", answer: ["meubels", "meubel", "meubilair"], solved: false }
            ]
        });
    };
    RoundInfo.prototype.getImageRoundQuestions = function (roundName) {
        return this.imageRounds.get(roundName).questions;
    };
    RoundInfo.prototype.getCrosswordRoundQuestions = function (roundName) {
        return this.crosswordRounds.get(roundName).questions;
    };
    RoundInfo.prototype.getClassicRoundQuestions = function (roundName) {
        return this.classicRounds.get(roundName).questions;
    };
    RoundInfo.prototype.getRodeDraadRoundQuestions = function (roundName) {
        return this.rodeDraadRounds.get(roundName).questions;
    };
    RoundInfo.prototype.getImageRoundWinnerText = function (roundName) {
        if (this.imageRounds.has(roundName)) {
            return this.imageRounds.get(roundName).winnerText;
        }
        else if (this.classicRounds.has(roundName)) {
            return this.classicRounds.get(roundName).winnerText;
        }
        else if (this.rodeDraadRounds.has(roundName)) {
            return this.rodeDraadRounds.get(roundName).winnerText;
        }
        else {
            return this.crosswordRounds.get(roundName).winnerText;
        }
    };
    RoundInfo.prototype.getImageRoundOmschrijving = function (roundName) {
        return this.imageRounds.get(roundName).omschrijving;
    };
    RoundInfo.prototype.getCrosswordRoundOmschrijving = function (roundName) {
        return this.crosswordRounds.get(roundName).omschrijving;
    };
    RoundInfo.prototype.getClassicRoundOmschrijving = function (rondeNaam) {
        return this.classicRounds.get(rondeNaam).omschrijving;
    };
    RoundInfo.prototype.getRodeDraadRoundOmschrijving = function (rondeNaam) {
        return this.rodeDraadRounds.get(rondeNaam).omschrijving;
    };
    RoundInfo.prototype.getImageRoundNames = function () {
        return Array.from(this.imageRounds.keys());
    };
    RoundInfo.prototype.getClassicRoundNames = function () {
        return Array.from(this.classicRounds.keys());
    };
    RoundInfo.prototype.getCrosswordRoundNames = function () {
        return Array.from(this.crosswordRounds.keys());
    };
    RoundInfo.prototype.getRodeDraadRoundNames = function () {
        return Array.from(this.rodeDraadRounds.keys());
    };
    return RoundInfo;
}());
exports.RoundInfo = RoundInfo;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file for the current environment will overwrite this one during build.
// Different environments can be found in ./environment.{dev|prod}.ts, and
// you can create your own and use it with the --env flag.
// The build system defaults to the dev environment.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./polyfills.ts */ "./src/polyfills.ts");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var app_1 = __webpack_require__(/*! ./app/ */ "./src/app/index.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_1.QuizModule);


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Prefer CoreJS over the polyfills above
__webpack_require__(/*! core-js/es6/symbol */ "./node_modules/core-js/es6/symbol.js");
__webpack_require__(/*! core-js/es6/object */ "./node_modules/core-js/es6/object.js");
__webpack_require__(/*! core-js/es6/function */ "./node_modules/core-js/es6/function.js");
__webpack_require__(/*! core-js/es6/parse-int */ "./node_modules/core-js/es6/parse-int.js");
__webpack_require__(/*! core-js/es6/parse-float */ "./node_modules/core-js/es6/parse-float.js");
__webpack_require__(/*! core-js/es6/number */ "./node_modules/core-js/es6/number.js");
__webpack_require__(/*! core-js/es6/math */ "./node_modules/core-js/es6/math.js");
__webpack_require__(/*! core-js/es6/string */ "./node_modules/core-js/es6/string.js");
__webpack_require__(/*! core-js/es6/date */ "./node_modules/core-js/es6/date.js");
__webpack_require__(/*! core-js/es6/array */ "./node_modules/core-js/es6/array.js");
__webpack_require__(/*! core-js/es6/regexp */ "./node_modules/core-js/es6/regexp.js");
__webpack_require__(/*! core-js/es6/map */ "./node_modules/core-js/es6/map.js");
__webpack_require__(/*! core-js/es6/set */ "./node_modules/core-js/es6/set.js");
__webpack_require__(/*! core-js/es6/reflect */ "./node_modules/core-js/es6/reflect.js");
__webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
__webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\christmasquiz\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map