(self.webpackChunkdynamicdevs=self.webpackChunkdynamicdevs||[]).push([[179],{"./node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./main.css":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap);"]),exports.push([module.id,'/*\n! tailwindcss v3.0.22 | MIT License | https://tailwindcss.com\n*/\r\n\r\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\r\n\r\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\r\n\r\n::before,\n::after {\n  --tw-content: \'\';\n}\r\n\r\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\r\n\r\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\r\n\r\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\r\n\r\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\r\n\r\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\r\n\r\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\r\n\r\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\r\n\r\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\r\n\r\n/*\nRemove the default font size and weight for headings.\n*/\r\n\r\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\r\n\r\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\r\n\r\na {\n  color: inherit;\n  text-decoration: inherit;\n}\r\n\r\n/*\nAdd the correct font weight in Edge and Safari.\n*/\r\n\r\nb,\nstrong {\n  font-weight: bolder;\n}\r\n\r\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\r\n\r\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\r\n\r\n/*\nAdd the correct font size in all browsers.\n*/\r\n\r\nsmall {\n  font-size: 80%;\n}\r\n\r\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\r\n\r\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\r\n\r\nsub {\n  bottom: -0.25em;\n}\r\n\r\nsup {\n  top: -0.5em;\n}\r\n\r\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\r\n\r\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\r\n\r\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\r\n\r\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\r\n\r\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\r\n\r\nbutton,\nselect {\n  text-transform: none;\n}\r\n\r\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\r\n\r\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\r\n\r\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\r\n\r\n:-moz-focusring {\n  outline: auto;\n}\r\n\r\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\r\n\r\n:-moz-ui-invalid {\n  box-shadow: none;\n}\r\n\r\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\r\n\r\nprogress {\n  vertical-align: baseline;\n}\r\n\r\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\r\n\r\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\r\n\r\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\r\n\r\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\r\n\r\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\r\n\r\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\r\n\r\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\r\n\r\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\r\n\r\n/*\nAdd the correct display in Chrome and Safari.\n*/\r\n\r\nsummary {\n  display: list-item;\n}\r\n\r\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\r\n\r\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\r\n\r\nfieldset {\n  margin: 0;\n  padding: 0;\n}\r\n\r\nlegend {\n  padding: 0;\n}\r\n\r\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\r\n\r\n/*\nPrevent resizing textareas horizontally by default.\n*/\r\n\r\ntextarea {\n  resize: vertical;\n}\r\n\r\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\r\n\r\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\r\n\r\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\r\n\r\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\r\n\r\n/*\nSet the default cursor for buttons.\n*/\r\n\r\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\r\n\r\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\r\n\r\n:disabled {\n  cursor: default;\n}\r\n\r\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\r\n\r\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\r\n\r\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\r\n\r\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\r\n\r\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\r\n\r\n[hidden] {\n  display: none;\n}\r\n\r\n*, ::before, ::after{\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.table{\n  display: table;\n}\r\n.font-lato{\n  font-family: Lato, sans-serif;\n}\r\n.uppercase{\n  text-transform: uppercase;\n}\r\n.tracking-headline-mob{\n  letter-spacing: 5.94px;\n}\r\n.tracking-sectionHeadline-mob{\n  letter-spacing: 6px;\n}\r\n.tracking-subHeadline-mob{\n  letter-spacing: 3.6px;\n}\r\n\r\n.ddtext-size_headline{\n  font-size: 36px;\n}\r\n\r\n@media (min-width: 768px){\r\n\r\n  .ddtext-size_headline{\n    font-size: 60px;\n  }\n}\r\n.ddtext-size_sectionHeadline{\n  font-size: 24px;\n}\r\n@media (min-width: 768px){\r\n\r\n  .ddtext-size_sectionHeadline{\n    font-size: 30px;\n  }\n}\r\n.ddtext-size_subHeadline{\n  font-size: 18px;\n}\r\n@media (min-width: 768px){\r\n\r\n  .ddtext-size_subHeadline{\n    font-size: 20px;\n  }\n}\r\n.ddtext-size_paragraph{\n  font-size: 14px;\n}\r\n@media (min-width: 768px){\r\n\r\n  .ddtext-size_paragraph{\n    font-size: 16px;\n  }\n}\r\n.ddtext-size_small{\n  font-size: 12px;\n}\r\n@media (min-width: 768px){\r\n\r\n  .ddtext-size_small{\n    font-size: 12px;\n  }\n}\r\n\r\n.ddtext-weight_light{\n  font-weight: 300;\n}\r\n.ddtext-weight_normal{\n  font-weight: 400;\n}\r\n.ddtext-weight_bold{\n  font-weight: 700;\n}\r\n@media (min-width: 768px){\r\n\r\n  .md\\:tracking-headline-des{\n    letter-spacing: 9.9px;\n  }\r\n\r\n  .md\\:tracking-sectionHeadline-des{\n    letter-spacing: 7.5px;\n  }\r\n\r\n  .md\\:tracking-subHeadline-des{\n    letter-spacing: 4px;\n  }\n}\r\n',""]),module.exports=exports},"./main.css":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/@storybook/addon-postcss/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./main.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{parameters:()=>parameters});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters=(__webpack_require__("./main.css"),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)},"./src/atoms/dd-button/dd-button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>dd_button_stories});__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var dd_text=__webpack_require__("./src/atoms/dd-text/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DDButton=function DDButton(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)("button",{children:(0,jsx_runtime.jsx)(dd_text.h,{children})})};DDButton.displayName="DDButton";try{DDButton.displayName="DDButton",DDButton.__docgenInfo={description:"",displayName:"DDButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/dd-button/index.tsx#DDButton"]={docgenInfo:DDButton.__docgenInfo,name:"DDButton",path:"src/atoms/dd-button/index.tsx#DDButton"})}catch(__react_docgen_typescript_loader_error){}const dd_button_stories={title:"Atoms/DDButton",component:DDButton};var Basic=function Basic(args){return(0,jsx_runtime.jsx)(DDButton,{children:args.children})};Basic.displayName="Basic";var Default=Basic.bind({});Default.args={children:"Im a DDButton"},Default.parameters=Object.assign({storySource:{source:"(args) => (\r\n  <DDButton>{args.children}</DDButton>\r\n)"}},Default.parameters)},"./src/atoms/dd-text/dd-text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Default:()=>Default,BasicProps:()=>BasicProps,UpperCase:()=>UpperCase});__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/atoms/dd-text/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/DDText",component:_index__WEBPACK_IMPORTED_MODULE_3__.h,argTypes:{size:{control:{type:"select"}},weight:{control:{type:"select"}}}};var Basic=function Basic(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.h,{children:args.children})};Basic.displayName="Basic";var Default=Basic.bind({});Default.args={children:"Abcdefghijklmnopqrstuvwxyz"},Default.argTypes={size:{table:{disable:!0}},weight:{table:{disable:!0}},caps:{table:{disable:!0}},className:{table:{disable:!0}}};var Complex=function Complex(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.h,Object.assign({},args))})};Complex.displayName="Complex";var BasicProps=Complex.bind({});BasicProps.args={children:"Im a DynamicDevs Text component",size:"paragraph",weight:"normal"},BasicProps.argTypes={caps:{table:{disable:!0}},className:{table:{disable:!0}}};var UpperCase=Complex.bind({});UpperCase.args={children:"DynamicDevs Text caps case",size:"paragraph",weight:"normal",caps:!0},UpperCase.argTypes={className:{table:{disable:!0}}},Default.parameters=Object.assign({storySource:{source:"(args) => (\r\n  <DDText>{args.children}</DDText>\r\n)"}},Default.parameters),BasicProps.parameters=Object.assign({storySource:{source:"(args) => (\r\n  <div>\r\n    <DDText {...args}></DDText>\r\n  </div>\r\n)"}},BasicProps.parameters),UpperCase.parameters=Object.assign({storySource:{source:"(args) => (\r\n  <div>\r\n    <DDText {...args}></DDText>\r\n  </div>\r\n)"}},UpperCase.parameters)},"./src/atoms/dd-text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>DDText});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),sizesStyles={headline:"ddtext-size_headline",sectionHeadline:"ddtext-size_sectionHeadline",subHeadline:"ddtext-size_subHeadline",paragraph:"ddtext-size_paragraph",small:"ddtext-size_small"},weightStyles={light:"ddtext-weight_light",normal:"ddtext-weight_normal",bold:"ddtext-weight_bold"},spacingStyles={headline:"tracking-headline-mob md:tracking-headline-des",sectionHeadline:"tracking-sectionHeadline-mob md:tracking-sectionHeadline-des",subHeadline:"tracking-subHeadline-mob md:tracking-subHeadline-des",paragraph:"",small:""},DDText=function DDText(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"paragraph":_ref$size,_ref$weight=_ref.weight,weight=void 0===_ref$weight?"normal":_ref$weight,caps=_ref.caps,className=_ref.className,children=_ref.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"font-lato "+sizesStyles[size]+" "+weightStyles[weight]+" "+(caps?"uppercase "+spacingStyles[size]:"")+" "+className,children})};DDText.displayName="DDText";try{DDText.displayName="DDText",DDText.__docgenInfo={description:"",displayName:"DDText",props:{size:{defaultValue:{value:"paragraph"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"headline"'},{value:'"sectionHeadline"'},{value:'"subHeadline"'},{value:'"paragraph"'},{value:'"small"'}]}},weight:{defaultValue:{value:"normal"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"normal"'},{value:'"bold"'}]}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/dd-text/index.tsx#DDText"]={docgenInfo:DDText.__docgenInfo,name:"DDText",path:"src/atoms/dd-text/index.tsx#DDText"})}catch(__react_docgen_typescript_loader_error){}},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./atoms/dd-button/dd-button.stories.tsx":"./src/atoms/dd-button/dd-button.stories.tsx","./atoms/dd-text/dd-text.stories.tsx":"./src/atoms/dd-text/dd-text.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"?4f7e":()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[413],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.js"))));__webpack_require__.O()}]);