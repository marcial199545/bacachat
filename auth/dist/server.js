/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/auth.js":
/*!*************************!*\
  !*** ./src/api/auth.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-validator */ "express-validator");
/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _handlers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/index */ "./src/api/handlers/index.js");
/* harmony import */ var _middlewares_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middlewares/index */ "./src/api/middlewares/index.js");




const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
router.post("/login", [Object(express_validator__WEBPACK_IMPORTED_MODULE_1__["check"])("email", "Please provide an email in the correct format").isEmail(), Object(express_validator__WEBPACK_IMPORTED_MODULE_1__["check"])("password", "Please provide a password").not().isEmpty()], (req, res) => {
  Object(_handlers_index__WEBPACK_IMPORTED_MODULE_2__["loginUser"])(req, res);
});
router.post("/register", [Object(express_validator__WEBPACK_IMPORTED_MODULE_1__["check"])("username", "Name field is required").not().isEmpty(), Object(express_validator__WEBPACK_IMPORTED_MODULE_1__["check"])("email", "Please add an email in the correct format").isEmail(), Object(express_validator__WEBPACK_IMPORTED_MODULE_1__["check"])("password", "Please enter a password with 6 or more characters").isLength({
  min: 6
})], (req, res) => {
  Object(_handlers_index__WEBPACK_IMPORTED_MODULE_2__["registerUser"])(req, res);
});
router.delete("/logout", (req, res) => {
  Object(_handlers_index__WEBPACK_IMPORTED_MODULE_2__["logoutUser"])(req, res);
});
router.get("/me", _middlewares_index__WEBPACK_IMPORTED_MODULE_3__["auth"], (req, res) => {
  res.send(req.user);
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/api/handlers/index.js":
/*!***********************************!*\
  !*** ./src/api/handlers/index.js ***!
  \***********************************/
/*! exports provided: registerUser, loginUser, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-validator */ "express-validator");
/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../db/models/User */ "./src/db/models/User.js");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gravatar */ "gravatar");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gravatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config */ "config");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_5__);






const registerUser = async function (req, res) {
  let errors = checkErrors(req, res);

  if (errors.status) {
    return res.status(400).json({
      errors: errors.errors.array()
    });
  }

  try {
    const {
      username,
      password,
      email
    } = req.body;
    let user = await _db_models_User__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
      email
    });

    if (user) {
      return res.status(400).json({
        errors: [{
          msg: "User already exists"
        }]
      });
    }

    let payload = {
      email,
      username,
      password
    };
    payload.avatar = Object(gravatar__WEBPACK_IMPORTED_MODULE_2__["url"])(email, {
      s: "200",
      r: "pg",
      d: "identicon"
    });
    user = new _db_models_User__WEBPACK_IMPORTED_MODULE_1__["default"](payload);
    await user.save();
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
const loginUser = async function (req, res) {
  let errors = checkErrors(req, res);

  if (errors.status) {
    return res.status(400).json({
      errors: errors.errors.array()
    });
  }

  const {
    email,
    password
  } = req.body;

  try {
    let user = await _db_models_User__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
      email
    });

    if (!user) {
      return res.status(400).json({
        errors: [{
          msg: "Login failed"
        }]
      });
    }

    let compareResult = await Object(bcrypt__WEBPACK_IMPORTED_MODULE_5__["compare"])(password, user.password);

    if (!compareResult) {
      return res.status(400).json({
        errors: [{
          msg: "Login failed"
        }]
      });
    }

    let hashedTrial = await Object(bcrypt__WEBPACK_IMPORTED_MODULE_5__["hash"])(`${user.email}${user.password}`, 8);
    const payload = {
      id: user.id,
      email: user.email,
      hashedTrial
    };
    let token = await Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__["sign"])(payload, config__WEBPACK_IMPORTED_MODULE_3___default.a.get("JWT_SECRET"), config__WEBPACK_IMPORTED_MODULE_3___default.a.get("JWT_CONFIG")); // console.log("token", token);

    res.cookie("token", token, {
      httpOnly: true
    });
    res.send(user);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};
const logoutUser = function (req, res) {
  res.clearCookie("token");
  return res.status(200).send("Cookie Removed");
};

const checkErrors = function (req, res) {
  let errors = Object(express_validator__WEBPACK_IMPORTED_MODULE_0__["validationResult"])(req);

  if (!errors.isEmpty()) {
    return {
      status: true,
      errors
    };
  }

  return {
    status: false
  };
};

/***/ }),

/***/ "./src/api/middlewares/index.js":
/*!**************************************!*\
  !*** ./src/api/middlewares/index.js ***!
  \**************************************/
/*! exports provided: auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ "config");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _db_models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../db/models/User */ "./src/db/models/User.js");




const auth = async function (req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      errors: [{
        msg: "No token, access denied"
      }]
    });
  }

  try {
    const decoded = await Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__["verify"])(token, config__WEBPACK_IMPORTED_MODULE_0___default.a.get("JWT_SECRET"));
    const {
      email,
      id,
      hashedTrial
    } = decoded;
    let user = await _db_models_User__WEBPACK_IMPORTED_MODULE_3__["default"].findOne({
      email
    });
    let isValid = await Object(bcrypt__WEBPACK_IMPORTED_MODULE_2__["compare"])(`${email}${user.password}`, hashedTrial);

    if (!isValid) {
      return res.status(401).json({
        msg: "Token is invalid, authorization denied"
      });
    }

    req.user = {
      email,
      id
    };
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({
      msg: "Token is invalid, authorization denied"
    });
  }
};

/***/ }),

/***/ "./src/db/index.js":
/*!*************************!*\
  !*** ./src/db/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ "config");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_1__);



const connectDB = async () => {
  try {
    await Object(mongoose__WEBPACK_IMPORTED_MODULE_0__["connect"])(config__WEBPACK_IMPORTED_MODULE_1___default.a.get("DB_URI"), config__WEBPACK_IMPORTED_MODULE_1___default.a.get("DB_CONFIG"));
    console.log(`DB auth is connected 🐲 `);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (connectDB);

/***/ }),

/***/ "./src/db/models/User.js":
/*!*******************************!*\
  !*** ./src/db/models/User.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);


const UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  profileSettings: {
    language: {
      type: String,
      default: "en"
    }
  }
});
UserSchema.pre("save", async function (next) {
  try {
    let user = this;

    if (user.isModified("password")) {
      user.password = await Object(bcrypt__WEBPACK_IMPORTED_MODULE_1__["hash"])(user.password, 8);
    }

    next();
  } catch (error) {
    console.error(error);
    next();
  }
});
const User = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__["model"])("user", UserSchema);
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/auth */ "./src/api/auth.js");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _db_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./db/index */ "./src/db/index.js");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_6__);







const env = dotenv__WEBPACK_IMPORTED_MODULE_1___default.a.config().parsed;
const {
  PORT,
  NODE_ENV
} = env;
const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({
  extended: true
}));
app.use(Object(body_parser__WEBPACK_IMPORTED_MODULE_3__["json"])());
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_6___default()());
app.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());
app.use("/api/auth", _api_auth__WEBPACK_IMPORTED_MODULE_2__["default"]);
app.get("/", (req, res) => {
  res.send("HELLO");
});
Object(_db_index__WEBPACK_IMPORTED_MODULE_5__["default"])();
app.listen(PORT, () => {
  console.log(`connected to port: ${PORT}`);
  NODE_ENV === "development" ? console.log(`http://localhost:${PORT}`) : console.log(`${env.SERVICE_URI}`);
});

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("config");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),

/***/ "gravatar":
/*!***************************!*\
  !*** external "gravatar" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gravatar");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9hdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvaGFuZGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9taWRkbGV3YXJlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL21vZGVscy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWUtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXZhbGlkYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXZhdGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJSb3V0ZXIiLCJwb3N0IiwiY2hlY2siLCJpc0VtYWlsIiwibm90IiwiaXNFbXB0eSIsInJlcSIsInJlcyIsImxvZ2luVXNlciIsImlzTGVuZ3RoIiwibWluIiwicmVnaXN0ZXJVc2VyIiwiZGVsZXRlIiwibG9nb3V0VXNlciIsImdldCIsImF1dGgiLCJzZW5kIiwidXNlciIsImVycm9ycyIsImNoZWNrRXJyb3JzIiwic3RhdHVzIiwianNvbiIsImFycmF5IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImVtYWlsIiwiYm9keSIsIlVzZXIiLCJmaW5kT25lIiwibXNnIiwicGF5bG9hZCIsImF2YXRhciIsInVybCIsInMiLCJyIiwiZCIsInNhdmUiLCJlcnJvciIsImNvbnNvbGUiLCJjb21wYXJlUmVzdWx0IiwiY29tcGFyZSIsImhhc2hlZFRyaWFsIiwiaGFzaCIsImlkIiwidG9rZW4iLCJzaWduIiwiY29uZmlnIiwiY29va2llIiwiaHR0cE9ubHkiLCJjbGVhckNvb2tpZSIsInZhbGlkYXRpb25SZXN1bHQiLCJuZXh0IiwiY29va2llcyIsImRlY29kZWQiLCJ2ZXJpZnkiLCJpc1ZhbGlkIiwiY29ubmVjdERCIiwiY29ubmVjdCIsImxvZyIsIm1lc3NhZ2UiLCJwcm9jZXNzIiwiZXhpdCIsIlVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJjcmVhdGVkQXQiLCJEYXRlIiwiZGVmYXVsdCIsIm5vdyIsInByb2ZpbGVTZXR0aW5ncyIsImxhbmd1YWdlIiwicHJlIiwiaXNNb2RpZmllZCIsIm1vZGVsIiwiZW52IiwiZG90ZW52IiwicGFyc2VkIiwiUE9SVCIsIk5PREVfRU5WIiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImNvb2tpZVBhcnNlciIsImNvcnMiLCJhdXRoUm91dGVzIiwibGlzdGVuIiwiU0VSVklDRV9VUkkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtR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SyxFQUFyQyxDQUROLEdBRU0xQyxPQUFPLENBQUNvQixHQUFSLENBQWEsR0FBRW1CLEdBQUcsQ0FBQ2MsV0FBWSxFQUEvQixDQUZOO0FBR0gsQ0FMRCxFOzs7Ozs7Ozs7OztBQ3RCQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIuanNcIik7XG4iLCJpbXBvcnQgZXhwcmVzcywgeyBSb3V0ZXIgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgY2hlY2sgfSBmcm9tIFwiZXhwcmVzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IHJlZ2lzdGVyVXNlciwgbG9naW5Vc2VyLCBsb2dvdXRVc2VyIH0gZnJvbSBcIi4vaGFuZGxlcnMvaW5kZXhcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi9taWRkbGV3YXJlcy9pbmRleFwiO1xuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci5wb3N0KFxuICAgIFwiL2xvZ2luXCIsXG4gICAgW1xuICAgICAgICBjaGVjayhcbiAgICAgICAgICAgIFwiZW1haWxcIixcbiAgICAgICAgICAgIFwiUGxlYXNlIHByb3ZpZGUgYW4gZW1haWwgaW4gdGhlIGNvcnJlY3QgZm9ybWF0XCJcbiAgICAgICAgKS5pc0VtYWlsKCksXG4gICAgICAgIGNoZWNrKFwicGFzc3dvcmRcIiwgXCJQbGVhc2UgcHJvdmlkZSBhIHBhc3N3b3JkXCIpLm5vdCgpLmlzRW1wdHkoKSxcbiAgICBdLFxuICAgIChyZXEsIHJlcykgPT4ge1xuICAgICAgICBsb2dpblVzZXIocmVxLCByZXMpO1xuICAgIH1cbik7XG5yb3V0ZXIucG9zdChcbiAgICBcIi9yZWdpc3RlclwiLFxuICAgIFtcbiAgICAgICAgY2hlY2soXCJ1c2VybmFtZVwiLCBcIk5hbWUgZmllbGQgaXMgcmVxdWlyZWRcIikubm90KCkuaXNFbXB0eSgpLFxuICAgICAgICBjaGVjayhcImVtYWlsXCIsIFwiUGxlYXNlIGFkZCBhbiBlbWFpbCBpbiB0aGUgY29ycmVjdCBmb3JtYXRcIikuaXNFbWFpbCgpLFxuICAgICAgICBjaGVjayhcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgIFwiUGxlYXNlIGVudGVyIGEgcGFzc3dvcmQgd2l0aCA2IG9yIG1vcmUgY2hhcmFjdGVyc1wiXG4gICAgICAgICkuaXNMZW5ndGgoe1xuICAgICAgICAgICAgbWluOiA2LFxuICAgICAgICB9KSxcbiAgICBdLFxuICAgIChyZXEsIHJlcykgPT4ge1xuICAgICAgICByZWdpc3RlclVzZXIocmVxLCByZXMpO1xuICAgIH1cbik7XG5yb3V0ZXIuZGVsZXRlKFwiL2xvZ291dFwiLCAocmVxLCByZXMpID0+IHtcbiAgICBsb2dvdXRVc2VyKHJlcSwgcmVzKTtcbn0pO1xucm91dGVyLmdldChcIi9tZVwiLCBhdXRoLCAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc2VuZChyZXEudXNlcik7XG59KTtcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiIsImltcG9ydCB7IHZhbGlkYXRpb25SZXN1bHQsIGNoZWNrIH0gZnJvbSBcImV4cHJlc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vZGIvbW9kZWxzL1VzZXJcIjtcbmltcG9ydCB7IHVybCB9IGZyb20gXCJncmF2YXRhclwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiY29uZmlnXCI7XG5pbXBvcnQgeyBzaWduIH0gZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IHsgY29tcGFyZSwgaGFzaCB9IGZyb20gXCJiY3J5cHRcIjtcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciA9IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgIGxldCBlcnJvcnMgPSBjaGVja0Vycm9ycyhyZXEsIHJlcyk7XG4gICAgaWYgKGVycm9ycy5zdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3JzOiBlcnJvcnMuZXJyb3JzLmFycmF5KCkgfSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBlbWFpbCB9ID0gcmVxLmJvZHk7XG4gICAgICAgIGxldCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAgICAgLnN0YXR1cyg0MDApXG4gICAgICAgICAgICAgICAgLmpzb24oeyBlcnJvcnM6IFt7IG1zZzogXCJVc2VyIGFscmVhZHkgZXhpc3RzXCIgfV0gfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBheWxvYWQgPSB7IGVtYWlsLCB1c2VybmFtZSwgcGFzc3dvcmQgfTtcbiAgICAgICAgcGF5bG9hZC5hdmF0YXIgPSB1cmwoZW1haWwsIHsgczogXCIyMDBcIiwgcjogXCJwZ1wiLCBkOiBcImlkZW50aWNvblwiIH0pO1xuICAgICAgICB1c2VyID0gbmV3IFVzZXIocGF5bG9hZCk7XG4gICAgICAgIGF3YWl0IHVzZXIuc2F2ZSgpO1xuICAgICAgICByZXMuc2VuZCh1c2VyKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoXCJTZXJ2ZXIgRXJyb3JcIik7XG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICBsZXQgZXJyb3JzID0gY2hlY2tFcnJvcnMocmVxLCByZXMpO1xuICAgIGlmIChlcnJvcnMuc3RhdHVzKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yczogZXJyb3JzLmVycm9ycy5hcnJheSgpIH0pO1xuICAgIH1cbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcnM6IFt7IG1zZzogXCJMb2dpbiBmYWlsZWRcIiB9XSB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY29tcGFyZVJlc3VsdCA9IGF3YWl0IGNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuICAgICAgICBpZiAoIWNvbXBhcmVSZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yczogW3sgbXNnOiBcIkxvZ2luIGZhaWxlZFwiIH1dIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBoYXNoZWRUcmlhbCA9IGF3YWl0IGhhc2goYCR7dXNlci5lbWFpbH0ke3VzZXIucGFzc3dvcmR9YCwgOCk7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgaGFzaGVkVHJpYWwsXG4gICAgICAgIH07XG4gICAgICAgIGxldCB0b2tlbiA9IGF3YWl0IHNpZ24oXG4gICAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICAgICAgY29uZmlnLmdldChcIkpXVF9TRUNSRVRcIiksXG4gICAgICAgICAgICBjb25maWcuZ2V0KFwiSldUX0NPTkZJR1wiKVxuICAgICAgICApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRva2VuXCIsIHRva2VuKTtcbiAgICAgICAgcmVzLmNvb2tpZShcInRva2VuXCIsIHRva2VuLCB7IGh0dHBPbmx5OiB0cnVlIH0pO1xuICAgICAgICByZXMuc2VuZCh1c2VyKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChcIlNlcnZlciBFcnJvclwiKTtcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IGxvZ291dFVzZXIgPSBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICByZXMuY2xlYXJDb29raWUoXCJ0b2tlblwiKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoXCJDb29raWUgUmVtb3ZlZFwiKTtcbn07XG5cbmNvbnN0IGNoZWNrRXJyb3JzID0gZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gICAgbGV0IGVycm9ycyA9IHZhbGlkYXRpb25SZXN1bHQocmVxKTtcbiAgICBpZiAoIWVycm9ycy5pc0VtcHR5KCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiB0cnVlLCBlcnJvcnMgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc3RhdHVzOiBmYWxzZSB9O1xufTtcbiIsImltcG9ydCBjb25maWcgZnJvbSBcImNvbmZpZ1wiO1xuaW1wb3J0IHsgdmVyaWZ5IH0gZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCJiY3J5cHRcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi9kYi9tb2RlbHMvVXNlclwiO1xuXG5leHBvcnQgY29uc3QgYXV0aCA9IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkge1xuICAgIGNvbnN0IHRva2VuID0gcmVxLmNvb2tpZXMudG9rZW47XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAuc3RhdHVzKDQwMSlcbiAgICAgICAgICAgIC5qc29uKHsgZXJyb3JzOiBbeyBtc2c6IFwiTm8gdG9rZW4sIGFjY2VzcyBkZW5pZWRcIiB9XSB9KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IGF3YWl0IHZlcmlmeSh0b2tlbiwgY29uZmlnLmdldChcIkpXVF9TRUNSRVRcIikpO1xuICAgICAgICBjb25zdCB7IGVtYWlsLCBpZCwgaGFzaGVkVHJpYWwgfSA9IGRlY29kZWQ7XG4gICAgICAgIGxldCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XG4gICAgICAgIGxldCBpc1ZhbGlkID0gYXdhaXQgY29tcGFyZShgJHtlbWFpbH0ke3VzZXIucGFzc3dvcmR9YCwgaGFzaGVkVHJpYWwpO1xuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAgICAgICAuc3RhdHVzKDQwMSlcbiAgICAgICAgICAgICAgICAuanNvbih7IG1zZzogXCJUb2tlbiBpcyBpbnZhbGlkLCBhdXRob3JpemF0aW9uIGRlbmllZFwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJlcS51c2VyID0geyBlbWFpbCwgaWQgfTtcbiAgICAgICAgbmV4dCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1zZzogXCJUb2tlbiBpcyBpbnZhbGlkLCBhdXRob3JpemF0aW9uIGRlbmllZFwiIH0pO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgbW9uZ29vc2UsIHsgY29ubmVjdCB9IGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiY29uZmlnXCI7XG5cbmNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBjb25uZWN0KGNvbmZpZy5nZXQoXCJEQl9VUklcIiksIGNvbmZpZy5nZXQoXCJEQl9DT05GSUdcIikpO1xuICAgICAgICBjb25zb2xlLmxvZyhgREIgYXV0aCBpcyBjb25uZWN0ZWQg8J+QsiBgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjtcbiIsImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEsIG1vZGVsIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgeyBoYXNoIH0gZnJvbSBcImJjcnlwdFwiO1xuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIHVzZXJuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgYXZhdGFyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBjcmVhdGVkQXQ6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgZGVmYXVsdDogRGF0ZS5ub3coKSxcbiAgICB9LFxuICAgIHByb2ZpbGVTZXR0aW5nczoge1xuICAgICAgICBsYW5ndWFnZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogXCJlblwiLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblVzZXJTY2hlbWEucHJlKFwic2F2ZVwiLCBhc3luYyBmdW5jdGlvbiAobmV4dCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB1c2VyID0gdGhpcztcbiAgICAgICAgaWYgKHVzZXIuaXNNb2RpZmllZChcInBhc3N3b3JkXCIpKSB7XG4gICAgICAgICAgICB1c2VyLnBhc3N3b3JkID0gYXdhaXQgaGFzaCh1c2VyLnBhc3N3b3JkLCA4KTtcbiAgICAgICAgfVxuICAgICAgICBuZXh0KCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIG5leHQoKTtcbiAgICB9XG59KTtcbmNvbnN0IFVzZXIgPSBtb2RlbChcInVzZXJcIiwgVXNlclNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xuaW1wb3J0IGF1dGhSb3V0ZXMgZnJvbSBcIi4vYXBpL2F1dGhcIjtcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgY29ubmVjdERCIGZyb20gXCIuL2RiL2luZGV4XCI7XG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gXCJjb29raWUtcGFyc2VyXCI7XG5jb25zdCBlbnYgPSBkb3RlbnYuY29uZmlnKCkucGFyc2VkO1xuY29uc3QgeyBQT1JULCBOT0RFX0VOViB9ID0gZW52O1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShqc29uKCkpO1xuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG5hcHAudXNlKGNvcnMoKSk7XG5cbmFwcC51c2UoXCIvYXBpL2F1dGhcIiwgYXV0aFJvdXRlcyk7XG5hcHAuZ2V0KFwiL1wiLCAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc2VuZChcIkhFTExPXCIpO1xufSk7XG5jb25uZWN0REIoKTtcbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBjb25uZWN0ZWQgdG8gcG9ydDogJHtQT1JUfWApO1xuICAgIE5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCJcbiAgICAgICAgPyBjb25zb2xlLmxvZyhgaHR0cDovL2xvY2FsaG9zdDoke1BPUlR9YClcbiAgICAgICAgOiBjb25zb2xlLmxvZyhgJHtlbnYuU0VSVklDRV9VUkl9YCk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtdmFsaWRhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXZhdGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9