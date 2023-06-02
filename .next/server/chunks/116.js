exports.id = 116;
exports.ids = [116];
exports.modules = {

/***/ 4959:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3100, 23))

/***/ }),

/***/ 7478:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7649, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7977, 23))

/***/ }),

/***/ 544:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6356));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4375))

/***/ }),

/***/ 6356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1042);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ Header auto */ 


function Header() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "full",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
            className: `flex py-5 md:py-10 px-4 justify-between ${(_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().header)}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().imgLogo),
                    src: "/header/assemble-logo.svg",
                    width: 390,
                    height: 85,
                    alt: "Picture of the author"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().imgPorfolio),
                    src: "/header/assemble-portfolio-logo.png",
                    width: 329,
                    height: 85,
                    alt: "Picture of the author"
                })
            ]
        })
    });
}


/***/ }),

/***/ 4375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navigation": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3223);
/* harmony import */ var _Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ Navigation auto */ 




const links = [
    {
        label: "Production",
        route: "/"
    },
    {
        label: "Creative",
        route: "/creative"
    },
    {
        label: "Web Development",
        route: "/web-development"
    }
];
function Navigation() {
    const [activeNav, setActiveNav] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    if (false) {}
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "full aqua",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            className: `flex justify-between px-4 ${(_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav)}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: `w-full flex flex-col md:flex-row md:justify-around items-start ${activeNav ? "active-nav" : "un-active-nav"} ${(_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default().navigation)}`,
                    children: links.map(({ label , route  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: `${(_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default().navItems)}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                onClick: ()=>setActiveNav(!activeNav),
                                className: `block py-2 md:py-5 font-bold text-[22px] ${pathname == route ? "active" : ""}`,
                                href: `${route}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "navLinks",
                                    children: label
                                })
                            })
                        }, label))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `menuIconToggle ${activeNav ? "active-nav" : "un-active-nav"} ${(_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default().unactivenav)}`,
                    onClick: ()=>setActiveNav(!activeNav),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "hamb-line dia p-1"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "hamb-line hor"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "hamb-line dia p-2"
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 1042:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__lWy7_",
	"imgLogo": "Header_imgLogo__7OaqM",
	"imgPorfolio": "Header_imgPorfolio__1TT6U"
};


/***/ }),

/***/ 3223:
/***/ ((module) => {

// Exports
module.exports = {
	"unactivenav": "Navigation_unactivenav__a_Qmq",
	"navigation": "Navigation_navigation__gPoDl",
	"nav": "Navigation_nav__b2Rp6",
	"navItems": "Navigation_navItems__lsQ8U"
};


/***/ }),

/***/ 8701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.js","import":"Poppins","arguments":[{"weight":["400","700"],"subsets":["latin"]}],"variableName":"poppins"}
var layout_js_import_Poppins_arguments_weight_400_700_subsets_latin_variableName_poppins_ = __webpack_require__(6142);
var layout_js_import_Poppins_arguments_weight_400_700_subsets_latin_variableName_poppins_default = /*#__PURE__*/__webpack_require__.n(layout_js_import_Poppins_arguments_weight_400_700_subsets_latin_variableName_poppins_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5553);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./src/app/components/Navigation.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/assemble/Documents/Devani/training/Next-js/next-1/assembleportfolio/src/app/components/Navigation.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Navigation"];

;// CONCATENATED MODULE: ./src/app/components/Header.jsx

const Header_proxy = (0,module_proxy.createProxy)(String.raw`/Users/assemble/Documents/Devani/training/Next-js/next-1/assembleportfolio/src/app/components/Header.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Header_esModule, $$typeof: Header_$$typeof } = Header_proxy;
const Header_default_ = Header_proxy.default;

const Header_e0 = Header_proxy["Header"];

;// CONCATENATED MODULE: ./src/app/layout.js






const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        className: (layout_js_import_Poppins_arguments_weight_400_700_subsets_latin_variableName_poppins_default()).className,
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (layout_js_import_Poppins_arguments_weight_400_700_subsets_latin_variableName_poppins_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header_e0, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(e0, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    children: children
                })
            ]
        })
    });
}


/***/ }),

/***/ 1764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;