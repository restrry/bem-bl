var BEMHTML = (function(exports) {var __r7,__r9,__r11,__r13,__r15,__r17,__r19,__r21,__r28,__r29,__r50,__r51,__r52;exports.apply = apply;function apply(c) {
var __this = this;
if((! (! this["elem"])) === false && this["block"] === "b-link" && this["_mode"] === "attrs") {{var ctx = this["ctx"],props = ["title","target"],p = (typeof ctx["url"]),a = ({"href": (((p === "undefined") || (p === "string"))?ctx["url"]:(((p=[]) , (((((((((((("" , (__r50=this["_buf"])) , (this["_buf"]=p)) , (__r51=this["_mode"])) , (this["_mode"]="")) , (__r52=this["ctx"])) , (this["ctx"]=ctx["url"])) , (__r53=apply.call(__this))) , (this["_buf"]=__r50)) , (this["_mode"]=__r51)) , (this["ctx"]=__r52)) , "") , __r53)) , p["join"]("")))});while((p=props["pop"]())){(ctx[p] && (a[p]=ctx[p]))}return a};return}
if((! (! this["elem"])) === false && this["block"] === "b-link" && this["_mode"] === "tag") {return "a";return}
if(this["block"] === "b-menu-horiz" && (! this["mods"]) === false && this["mods"]["layout"] === "simple" && this["elem"] === "item" && this["_mode"] === "tag") {return (this["elemMods"]["state"]?"span":false);return}
if(this["block"] === "b-menu-horiz" && (! this["mods"]) === false && this["mods"]["layout"] === "simple" && this["elem"] === "item" && this["_mode"] === "default" && (! (! this["ctx"]["_wrap"])) === false) {{"";var __r46 = this["_mode"];(this["_mode"]="");var __r47 = this["ctx"],__r48 = __r47["_wrap"];(__r47["_wrap"]=true);var __r49 = this["ctx"];(this["ctx"]=[(this["isFirst"]()?"":this["_separator"]),this["ctx"]]);this["apply"]();(this["_mode"]=__r46);(__r47["_wrap"]=__r48);(this["ctx"]=__r49);""};return}
if(this["block"] === "b-menu-horiz" && (! this["mods"]) === false && this["mods"]["layout"] === "simple" && this["_mode"] === "default" && (! (! this["_init"])) === false) {{"";var __r44 = this["_init"];(this["_init"]=true);var __r45 = this["_separator"];(this["_separator"]=this["ctx"]["separator"]);this["apply"]();(this["_init"]=__r44);(this["_separator"]=__r45);""};return}
if((! (! this["elem"])) === false && this["block"] === "b-menu-horiz" && (! this["mods"]) === false && this["mods"]["layout"] === "simple" && this["_mode"] === "content") {return [this["ctx"]["title"],({"tag": false,"content": this["ctx"]["content"]})];return}
if(this["block"] === "b-menu-horiz" && this["elem"] === "title" && this["_mode"] === "tag") {return "h3";return}
if(this["block"] === "b-menu-horiz" && (! this["mods"]) === false && this["elem"] === "item-selector" && this["_mode"] === "tag") {return "span";return}
if(this["block"] === "b-menu-horiz" && (! this["mods"]) === false && this["elem"] === "layout-unit" && this["_mode"] === "mix") {{var mix = [];(this["isFirst"]() && mix["push"](({"elemMods": ({"position": "first"})})));(this["isLast"]() && mix["push"](({"elemMods": ({"position": "last"})})));return mix};return}
if(this["block"] === "b-menu-horiz" && (! this["mods"]) === false && this["elem"] === "item" && this["_mode"] === "default" && (! (! this["ctx"]["_wrap"])) === false) {{"";var __r39 = this["_mode"];(this["_mode"]="");var __r40 = this["ctx"],__r41 = __r40["_wrap"];(__r40["_wrap"]=true);var __r42 = this["position"];(this["position"]=(this["position"] - (1)));var __r43 = this["ctx"];(this["ctx"]=({"elem": "layout-unit","content": this["ctx"]}));this["apply"]();(this["_mode"]=__r39);(__r40["_wrap"]=__r41);(this["position"]=__r42);(this["ctx"]=__r43);""};return}
if(this["block"] === "b-menu-horiz" && (! this["mods"]) === false && this["_mode"] === "js" && (! (! this["elem"])) === false && (! (this["ctx"]["js"] === undefined)) === false) {return true;return}
if(this["block"] === "b-page" && this["elem"] === "favicon" && this["_mode"] === "attrs") {return ({"rel": "shortcut icon","href": this["ctx"]["url"]});return}
if(this["block"] === "b-page" && this["elem"] === "favicon" && this["_mode"] === "tag") {return "link";return}
if(this["block"] === "b-page" && this["elem"] === "favicon" && this["_mode"] === "bem") {return false;return}
if(this["block"] === "b-page" && this["elem"] === "js" && this["_mode"] === "attrs" && (! this["ctx"]["url"]) === false) {return ({"src": this["ctx"]["url"]});return}
if(this["block"] === "b-page" && this["elem"] === "js" && this["_mode"] === "tag") {return "script";return}
if(this["block"] === "b-page" && this["elem"] === "js" && this["_mode"] === "bem") {return false;return}
if(this["block"] === "b-page" && this["elem"] === "css" && (! this["ctx"]["url"]) === false && this["_mode"] === "attrs") {return ({"rel": "stylesheet","href": this["ctx"]["url"]});return}
if(this["block"] === "b-page" && this["elem"] === "css" && (! this["ctx"]["url"]) === false && this["_mode"] === "tag") {return "link";return}
if(this["block"] === "b-page" && this["elem"] === "css" && this["_mode"] === "default" && (! this["ctx"]["hasOwnProperty"]("ie")) === false && (! (! this["ctx"]["_ieCommented"])) === false) {{var ie = this["ctx"]["ie"];if((ie === true)){"";var __r33 = this["_mode"];(this["_mode"]="");var __r34 = this["ctx"];(this["ctx"]=[(6),(7),(8),(9)]["map"]((function (v){return ({"elem": "css","url": (((this["ctx"]["url"] + ".ie") + v) + ".css"),"ie": ("IE " + v)})}),this));this["apply"]();(this["_mode"]=__r33);(this["ctx"]=__r34);""}else{var hideRule = ((! ie)?["gt IE 9","<!-->","<!--"]:((ie == "!IE")?[ie,"<!-->","<!--"]:[ie,"",""]));{"";var __r35 = this["_mode"];(this["_mode"]="");var __r36 = this["ctx"],__r37 = __r36["_ieCommented"];(__r36["_ieCommented"]=true);var __r38 = this["ctx"];(this["ctx"]=[(("<!--[if " + hideRule[(0)]) + "]>"),hideRule[(1)],this["ctx"],hideRule[(2)],"<![endif]-->"]);this["apply"]();(this["_mode"]=__r35);(__r36["_ieCommented"]=__r37);(this["ctx"]=__r38);""}}};return}
if(this["block"] === "b-page" && this["elem"] === "css" && this["_mode"] === "tag") {return "style";return}
if(this["block"] === "b-page" && this["elem"] === "css" && this["_mode"] === "bem") {return false;return}
if(this["block"] === "b-page" && this["elem"] === "meta" && this["_mode"] === "attrs") {return this["ctx"]["attrs"];return}
if(this["block"] === "b-page" && this["elem"] === "meta" && this["_mode"] === "tag") {return "meta";return}
if(this["block"] === "b-page" && this["elem"] === "meta" && this["_mode"] === "bem") {return false;return}
if(this["block"] === "b-page" && this["elem"] === "body" && this["_mode"] === "tag") {return "body";return}
if(this["block"] === "b-page" && this["elem"] === "head" && this["_mode"] === "tag") {return "head";return}
if(this["block"] === "b-page" && this["elem"] === "head" && this["_mode"] === "bem") {return false;return}
if((! (! this["elem"])) === false && this["block"] === "b-page" && this["_mode"] === "default") {{this["_buf"]["push"]("<!DOCTYPE html>");{"";var __r31 = this["_mode"];(this["_mode"]="");var __r32 = this["ctx"];(this["ctx"]=({"tag": "html","attrs": ({"xmlns:fb": "http://ogp.me/ns/fb#"}),"cls": "i-ua_js_no i-ua_css_standard","content": [({"elem": "head","content": [({"tag": "meta","attrs": ({"charset": "utf-8"})}),({"tag": "meta","attrs": ({"http-equiv": "X-UA-Compatible","content": "IE=EmulateIE7, IE=edge"})}),({"tag": "title","content": this["ctx"]["title"]}),(this["ctx"]["favicon"]?({"elem": "favicon","url": this["ctx"]["favicon"]}):""),this["ctx"]["meta"],({"block": "i-ua"}),this["ctx"]["head"]]}),({"elem": "body","mix": [this["ctx"]],"content": [this["ctx"]["content"]]})]}));this["apply"]();(this["_mode"]=__r31);(this["ctx"]=__r32);""}};return}
if(this["block"] === "i-jquery" && this["elem"] === "core" && this["_mode"] === "default") {return ((((((((("" , (__r28=this["_mode"])) , (this["_mode"]="")) , (__r29=this["ctx"])) , (this["ctx"]=({"block": "b-page","elem": "js","url": "//yandex.st/jquery/1.7.2/jquery.min.js"}))) , (__r30=apply.call(__this))) , (this["_mode"]=__r28)) , (this["ctx"]=__r29)) , "") , __r30);return}
if((! (! this["elem"])) === false && this["block"] === "i-ua" && this["_mode"] === "content") {return [";(function(d,e,c,r){","e=d.documentElement;","c=\"className\";","r=\"replace\";","e[c]=e[c][r](\"i-ua_js_no\",\"i-ua_js_yes\");","if(d.compatMode!=\"CSS1Compat\")","e[c]=e[c][r](\"i-ua_css_standart\",\"i-ua_css_quirks\")","})(document);"]["join"]("");return}
if((! (! this["elem"])) === false && this["block"] === "i-ua" && this["_mode"] === "bem") {return false;return}
if((! (! this["elem"])) === false && this["block"] === "i-ua" && this["_mode"] === "tag") {return "script";return}
if((! (! this["_start"])) === false) {{var BEM_ = ({}),toString = Object["prototype"]["toString"],SHORT_TAGS = ({"area": (1),"base": (1),"br": (1),"col": (1),"command": (1),"embed": (1),"hr": (1),"img": (1),"input": (1),"keygen": (1),"link": (1),"meta": (1),"param": (1),"source": (1),"wbr": (1)});(function (BEM,undefined){var MOD_DELIM = "_",ELEM_DELIM = "__",NAME_PATTERN = "[a-zA-Z0-9-]+";var buildModPostfix = (function (modName,modVal,buffer){buffer["push"](MOD_DELIM,modName,MOD_DELIM,modVal)});var buildBlockClass = (function (name,modName,modVal,buffer){buffer["push"](name);(modVal && buildModPostfix(modName,modVal,buffer))});var buildElemClass = (function (block,name,modName,modVal,buffer){buildBlockClass(block,undefined,undefined,buffer);buffer["push"](ELEM_DELIM,name);(modVal && buildModPostfix(modName,modVal,buffer))});(BEM["INTERNAL"]=({"NAME_PATTERN": NAME_PATTERN,"MOD_DELIM": MOD_DELIM,"ELEM_DELIM": ELEM_DELIM,"buildModPostfix": (function (modName,modVal,buffer){var res = (buffer || []);buildModPostfix(modName,modVal,res);return (buffer?res:res["join"](""))}),"buildClass": (function (block,elem,modName,modVal,buffer){var typeOf = (typeof modName);if((typeOf == "string")){if(((typeof modVal) != "string")){(buffer=modVal);(modVal=modName);(modName=elem);(elem=undefined)}else{undefined}}else{if((typeOf != "undefined")){(buffer=modName);(modName=undefined)}else{if((elem && ((typeof elem) != "string"))){(buffer=elem);(elem=undefined)}else{undefined}}};undefined;if((! ((elem || modName) || buffer))){return block}else{undefined};undefined;var res = (buffer || []);(elem?buildElemClass(block,elem,modName,modVal,res):buildBlockClass(block,modName,modVal,res));return (buffer?res:res["join"](""))}),"buildModsClasses": (function (block,elem,mods,buffer){var res = (buffer || []);if(mods){var modName;for(modName in mods){if((mods["hasOwnProperty"](modName) && mods[modName])){var modVal = mods[modName];res["push"](" ");(elem?buildElemClass(block,elem,modName,modVal,res):buildBlockClass(block,modName,modVal,res))}else{undefined}}}else{undefined};undefined;return (buffer?res:res["join"](""))}),"buildClasses": (function (block,elem,mods,buffer){var res = (buffer || []);(elem?buildElemClass(block,elem,undefined,undefined,res):buildBlockClass(block,undefined,undefined,res));this["buildModsClasses"](block,elem,mods,buffer);return (buffer?res:res["join"](""))})}))})(BEM_);var buildEscape = (function (){var ts = ({"\"": "&quot;","&": "&amp;","<": "&lt;",">": "&gt;"}),f = (function (t){return (ts[t] || t)});return (function (r){(r=new RegExp(r,"g"));return (function (s){return ("" + s)["replace"](r,f)})})})(),ctx = ({"ctx": this,"_start": true,"apply": apply,"_buf": [],"_": ({"isArray": (function (obj){return (toString["call"](obj) === "[object Array]")}),"isSimple": (function (obj){var t = (typeof obj);return (((t === "string") || (t === "number")) || (t === "boolean"))}),"isShortTag": (function (t){return SHORT_TAGS["hasOwnProperty"](t)}),"extend": (function (o1,o2){if(((! o1) || (! o2))){return (o1 || o2)}else{undefined};undefined;var res = ({}),n;for(n in o1){(o1["hasOwnProperty"](n) && (res[n]=o1[n]))};undefined;for(n in o2){(o2["hasOwnProperty"](n) && (res[n]=o2[n]))};undefined;return res}),"identify": (function (){var cnt = (0),expando = ("__" + (+ new Date())),get = (function (){return ("uniq" + ++cnt)});return (function (obj,onlyGet){if((! obj)){return get()}else{undefined};undefined;if((onlyGet || obj[expando])){return obj[expando]}else{return (obj[expando]=get())}})})(),"xmlEscape": buildEscape("[&<>]"),"attrEscape": buildEscape("[\"&<>]")}),"BEM": BEM_,"isFirst": (function (){return (this["position"] === (1))}),"isLast": (function (){return (this["position"] === this["_listLength"])}),"generateId": (function (){return this["_"]["identify"](this["ctx"])})});ctx["apply"]();return ctx["_buf"]["join"]("")};return}
if(this["_mode"] === "content") {return this["ctx"]["content"];return}
if(this["_mode"] === "mix") {return undefined;return}
if(this["_mode"] === "bem") {return undefined;return}
if(this["_mode"] === "jsAttr") {return undefined;return}
if(this["_mode"] === "js") {return undefined;return}
if(this["_mode"] === "cls") {return undefined;return}
if(this["_mode"] === "attrs") {return undefined;return}
if(this["_mode"] === "tag") {return undefined;return}
if(this["_mode"] === "default") {{var _this = this,BEM_ = _this["BEM"],v = this["ctx"],buf = this["_buf"],tag;(tag=(((((("" , (__r7=this["_mode"])) , (this["_mode"]="tag")) , (__r8=apply.call(__this))) , (this["_mode"]=__r7)) , "") , __r8));(((typeof tag) != "undefined") || (tag=v["tag"]));(((typeof tag) != "undefined") || (tag="div"));if(tag){var jsParams,js;if((this["block"] && (v["js"] !== false))){(js=(((((("" , (__r9=this["_mode"])) , (this["_mode"]="js")) , (__r10=apply.call(__this))) , (this["_mode"]=__r9)) , "") , __r10));(js=(js?this["_"]["extend"](v["js"],((js === true)?({}):js)):((v["js"] === true)?({}):v["js"])));(js && ((jsParams=({}))[BEM_["INTERNAL"]["buildClass"](this["block"],v["elem"])]=js))}else{undefined};undefined;buf["push"]("<",tag);var isBEM = (((((("" , (__r11=this["_mode"])) , (this["_mode"]="bem")) , (__r12=apply.call(__this))) , (this["_mode"]=__r11)) , "") , __r12);(((typeof isBEM) != "undefined") || (isBEM=(((typeof v["bem"]) != "undefined")?v["bem"]:(v["block"] || v["elem"]))));var cls = (((((("" , (__r13=this["_mode"])) , (this["_mode"]="cls")) , (__r14=apply.call(__this))) , (this["_mode"]=__r13)) , "") , __r14);(cls || (cls=v["cls"]));var addJSInitClass = (v["block"] && jsParams);if((isBEM || cls)){buf["push"](" class=\"");if(isBEM){BEM_["INTERNAL"]["buildClasses"](this["block"],v["elem"],(v["elemMods"] || v["mods"]),buf);var mix = (((((("" , (__r15=this["_mode"])) , (this["_mode"]="mix")) , (__r16=apply.call(__this))) , (this["_mode"]=__r15)) , "") , __r16);(v["mix"] && (mix=(mix?mix["concat"](v["mix"]):v["mix"])));if(mix){var i = (0),l = mix["length"],mixItem,hasItem,block;while((i < l)){(mixItem=mix[i++]);((hasItem=(mixItem["block"] || mixItem["elem"])) , (block=(mixItem["block"] || _this["block"])));(hasItem && buf["push"](" "));BEM_["INTERNAL"][(hasItem?"buildClasses":"buildModsClasses")](block,(mixItem["elem"] || (mixItem["block"]?undefined:_this["elem"])),(mixItem["elemMods"] || mixItem["mods"]),buf);if(mixItem["js"]){((jsParams || (jsParams=({})))[BEM_["INTERNAL"]["buildClass"](block,mixItem["elem"])]=((mixItem["js"] === true)?({}):mixItem["js"]));(addJSInitClass || (addJSInitClass=(block && (! mixItem["elem"]))))}else{undefined}}}else{undefined}}else{undefined};undefined;(cls && buf["push"]((isBEM?" ":""),cls));(addJSInitClass && buf["push"](" i-bem"));buf["push"]("\"")}else{undefined};undefined;if(jsParams){var jsAttr = (((((("" , (__r17=this["_mode"])) , (this["_mode"]="jsAttr")) , (__r18=apply.call(__this))) , (this["_mode"]=__r17)) , "") , __r18);buf["push"](" ",(jsAttr || "onclick"),"=\"return ",this["_"]["attrEscape"](JSON["stringify"](jsParams)),"\"")}else{undefined};undefined;var attrs = (((((("" , (__r19=this["_mode"])) , (this["_mode"]="attrs")) , (__r20=apply.call(__this))) , (this["_mode"]=__r19)) , "") , __r20);(attrs=this["_"]["extend"](attrs,v["attrs"]));if(attrs){var name;for(name in attrs){buf["push"](" ",name,"=\"",this["_"]["attrEscape"](attrs[name]),"\"")}}else{undefined}}else{undefined}if(this["_"]["isShortTag"](tag)){buf["push"]("/>")}else{(tag && buf["push"](">"));var content = (((((("" , (__r21=this["_mode"])) , (this["_mode"]="content")) , (__r22=apply.call(__this))) , (this["_mode"]=__r21)) , "") , __r22);if((content || (content === (0)))){var isBEM = (this["block"] || this["elem"]);{"";var __r23 = this["_notNewList"];(this["_notNewList"]=false);var __r24 = this["position"];(this["position"]=(isBEM?(1):this["position"]));var __r25 = this["_listLength"];(this["_listLength"]=(isBEM?(1):this["_listLength"]));var __r26 = this["ctx"];(this["ctx"]=content);var __r27 = this["_mode"];(this["_mode"]="");apply.call(__this);(this["_notNewList"]=__r23);(this["position"]=__r24);(this["_listLength"]=__r25);(this["ctx"]=__r26);(this["_mode"]=__r27);""};undefined;undefined;undefined}else{undefined};undefined;(tag && buf["push"]("</",tag,">"))}};return}
if((! (! this["_mode"])) === false && (! this["_"]["isSimple"](this["ctx"])) === false) {{this["_listLength"]--;var ctx = this["ctx"];(((ctx && (ctx !== true)) || (ctx === (0))) && this["_buf"]["push"](ctx))};return}
if((! (! this["_mode"])) === false && (! (! this["ctx"])) === false) {this["_listLength"]--;return}
if((! (! this["_mode"])) === false && (! this["_"]["isArray"](this["ctx"])) === false) {{var v = this["ctx"],l = v["length"],i = (0),prevPos = this["position"],prevNotNewList = this["_notNewList"];if(prevNotNewList){(this["_listLength"]+=(l - (1)))}else{(this["position"]=(0));(this["_listLength"]=l)}(this["_notNewList"]=true);while((i < l)){{"";var __r6 = this["ctx"];(this["ctx"]=v[i++]);apply.call(__this);(this["ctx"]=__r6);""};undefined}undefined;(prevNotNewList || (this["position"]=prevPos))};return}
if((! (! this["_mode"])) === false && (! true) === false) {{var vBlock = this["ctx"]["block"],vElem = this["ctx"]["elem"],block = (this["_currBlock"] || this["block"]);(this["ctx"] || (this["ctx"]=({})));{"";var __r0 = this["_mode"];(this["_mode"]="default");var __r1 = this["block"];(this["block"]=(vBlock || (vElem?block:undefined)));var __r2 = this["_currBlock"];(this["_currBlock"]=((vBlock || vElem)?undefined:block));var __r3 = this["elem"];(this["elem"]=this["ctx"]["elem"]);var __r4 = this["mods"];(this["mods"]=((vBlock?this["ctx"]["mods"]:this["mods"]) || ({})));var __r5 = this["elemMods"];(this["elemMods"]=(this["ctx"]["elemMods"] || ({})));{((this["block"] || this["elem"])?(this["position"]=((this["position"] || (0)) + (1))):this["_listLength"]--);apply.call(__this);undefined;undefined}(this["_mode"]=__r0);(this["block"]=__r1);(this["_currBlock"]=__r2);(this["elem"]=__r3);(this["mods"]=__r4);(this["elemMods"]=__r5);""}undefined};return}
};return exports})(typeof exports === "undefined"? {} : exports);BEMHTML = (function(xjst) { return function() { return xjst.apply.call([this]); }; }(BEMHTML));