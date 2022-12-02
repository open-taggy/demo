// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gE9QH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "cb9e2e4a1d6ce8c7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3fRQ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Taggy", ()=>Taggy);
var _winkTokenizer = require("wink-tokenizer");
var _winkTokenizerDefault = parcelHelpers.interopDefault(_winkTokenizer);
var _stopwordsIso = require("stopwords-iso"); // object of stopwords for multiple languages
var _stopwordsIsoDefault = parcelHelpers.interopDefault(_stopwordsIso);
// import stopwordsDE from de; // german stopwords
var _normalizeForSearch = require("normalize-for-search");
var _normalizeForSearchDefault = parcelHelpers.interopDefault(_normalizeForSearch);
var _lodash = require("lodash");
var _runtime = require("regenerator-runtime/runtime");
//import synonyms from "germansynonyms";
var _tagify = require("@yaireo/tagify");
var _tagifyDefault = parcelHelpers.interopDefault(_tagify);
// import jargon from "@clipperhouse/jargon";
// import stackexchange from "@clipperhouse/jargon/stackexchange"; // a dictionary
// import fs from "fs";
// include wink-nlp (lemmatizing)
const openthesaurus = require("openthesaurus");
const glossarData = require("../data/glossar.json");
const configFile = require("../data/config.json");
class Taggy {
    /**
     * Create a new instance of taggy
     * @param inputField Input field where user text goes
     * @param outputField Output field where the tags will show up
     * @param submitButton Submit button to trigger processing instead of automatic behavior while typing
     * @param frequencyOutput Show frequency of identified tags
     * @param overrideOutput Show identified top tags with possibility to override default detection
     * @param loaderElement Add a loading indicator (spinner) that gets hidden on completion
     * @param options Optional: Provide options for taggys behaviour
     */ constructor(inputField, outputField, submitButton, frequencyOutput, overrideOutput, loaderElement, options){
        this.name = "taggy";
        this.mostFrequentWords = [];
        this.mostFrequentTopTags = [];
        this.timeout = null;
        this.config = {
            use_tagify: configFile["use-tagify"] === "true",
            use_tagify_comment: configFile["use-tagify-comment"],
            use_submit: configFile["use-submit"] === "true",
            use_submit_comment: configFile["use-submit-comment"],
            waittime: configFile["waittime"],
            waittime_comment: configFile["waittime-comment"],
            opt_enabled: configFile["openthesaurus"] === "true",
            opt_enabled_comment: configFile["openthesaurus-comment"],
            assign_top: configFile.categories["assign-top"] === "true",
            assign_top_comment: configFile.categories["assign-top-comment"],
            include_top: configFile.categories["include-top"] === "true",
            include_top_comment: configFile.categories["include-top-comment"]
        };
        // console.log("TAGGY CONFIG", this.config);
        console.log("hello, this is taggy 0.1");
        this.setSubmitButton(submitButton);
        this.setInputField(inputField);
        this.outputField = outputField;
        this.loaderElement = loaderElement;
        // this.submitButton = submitButton;
        this.winkTokenizer = new (0, _winkTokenizerDefault.default)();
        this.stopwordsDE = (0, _stopwordsIsoDefault.default).de;
        this.openthesaurus = openthesaurus;
        // if (this.outputField) this.outputField.setAttribute("readOnly", "true");
        if (this.config.use_tagify) this.createTagify(this.outputField);
        this.frequencyOutput = frequencyOutput;
        // this.overrideOutput = overrideOutput;
        if (overrideOutput) {
            this.setOverrideOutput(overrideOutput);
            if (this.config.use_tagify) this.createTagifyOverride(overrideOutput);
        }
        console.log("created a new taggy instance");
    }
    resetData() {
        this.mostFrequentTopTags = [];
        this.mostFrequentWords = [];
    }
    setInputField(inputField) {
        this.inputField = inputField;
        console.log("SET INPUT FIELD");
        console.log("USE_SUBMIT", this.config.use_submit, "BUTTON", this.submitButton);
        if (this.config.use_submit && this.submitButton) return;
        else {
            this.inputField.addEventListener("input", (event)=>{
                this.handleInputEventListener();
            });
            console.log("taggy", "input field and handler set", this.inputField);
        }
    }
    setSubmitButton(submitButton) {
        console.log("SET SUBMIT BUTTON");
        this.submitButton = submitButton;
        this.submitButton.addEventListener("click", (event)=>{
            console.log("SUBMIT BUTTON CLICKED");
            if (this.config.use_submit) this.handleSubmitButtonEventListener();
        });
        console.log("taggy", "submit button and handler set", this.submitButton);
    }
    handleInputEventListener() {
        console.log("INSIDE EVENT LISTENER | INPUT KEYSTROKE");
        if (this.config.use_submit) {
            console.log("but doing nothing");
            return;
        }
        // console.log("WAITTIME", this.config.waittime);
        // this.outputField.style.backgroundColor = "#f2f102";
        if (this.loaderElement) this.loaderElement.style.setProperty("display", "block");
        // if (this.outputField.lastChild)
        //   this.outputField.removeChild(this.outputField.lastChild!);
        this.deleteTags();
        if (this.tagify) {
            this.tagify.DOM.scope.style.setProperty("--tags-border-color", "#ef4d60");
            this.tagify.DOM.scope.style.setProperty("background", "#f2f102");
        }
        clearTimeout(this.timeout);
        // make a new timeout set to go off in 1000ms
        this.timeout = setTimeout(async ()=>{
            // loader.style.display = "block";
            await this.processAndAddTags(this.inputField.value, this.outputField);
            // this.outputField.style.backgroundColor = "#ffffff";
            this.loaderElement.style.setProperty("display", "none");
            if (this.tagify) {
                this.tagify.DOM.scope.style.setProperty("--tags-border-color", "#b3d4fc");
                this.tagify.DOM.scope.style.setProperty("background", "#ffffff");
            }
        // this.addTags(result);
        }, this.config.waittime);
    }
    async handleSubmitButtonEventListener() {
        console.log("INSIDE EVENT LISTENER | BUTTON");
        if (this.loaderElement) {
            console.log("EV before");
            console.log("loaderELEMENT", this.loaderElement);
            this.loaderElement.style.setProperty("display", "block");
        }
        this.deleteTags();
        // add loading-indicator -> helpful for UX
        clearTimeout(this.timeout);
        this.timeout = setTimeout(async ()=>{
            console.log("EV after");
            await this.processAndAddTags(this.inputField.value, this.outputField);
            if (this.loaderElement) this.loaderElement.style.setProperty("display", "none");
        }, this.config.waittime);
    }
    setOutputField(outputField) {
        // outputField.setAttribute("value", "");
        outputField.readOnly = true;
        outputField.value = "";
        this.outputField = outputField;
        console.log("taggy", "output field set");
    }
    setFrequencyOutput(frequencyOutput) {
        this.frequencyOutput = frequencyOutput;
    }
    setOverrideOutput(overrideOutput) {
        this.overrideOutput = overrideOutput;
        this.overrideOutput.addEventListener("click", (event)=>{
            this.handleOverrideOutputEventListener(event);
        });
        console.log("taggy", "Override field and handler set", this.overrideOutput);
    }
    handleOverrideOutputEventListener(event) {
        console.log("INSIDE EVENT LISTENER | OVERRIDE");
        const target = event.target;
        // prevent container above to be clickabe -> only tag-div itself
        if (event.target == event.currentTarget) return;
        if (target) console.log(target.innerHTML);
        this.addTags(target.innerHTML);
    }
    getConfig() {
        return this.config;
    }
    getGlossar() {
        return glossarData;
    }
    setOption(option, value) {
        console.log("setting", option, "to", value);
        if (option == "use_tagify") {
            this.config.use_tagify = value;
            if (!value) {
                this.tagify.destroy();
                this.tagifyOverride.destroy();
            }
        }
        if (option == "use_submit") {
            console.log("USE_SUBMIT OPTION", value);
            this.config.use_submit = value;
            if (value) {
                // this.handleSubmitButtonEventListener();
                this.setSubmitButton(this.submitButton);
                console.log(this.inputField);
                // remove all event listeners from element
                // this.inputField.replaceWith(this.inputField.cloneNode(true));
                this.setInputField(this.inputField);
            // this.inputField.removeEventListener("input", (event) => {
            //   this.handleInputEventListener();
            // });
            } else this.setInputField(this.inputField);
        }
        if (option == "assign_top") this.config.assign_top = value;
        if (option == "opt_enabled") this.config.opt_enabled = value;
        if (option == "include_top") this.config.include_top = value;
    }
    getMostFrequentWords() {
        console.log("most frequent called", this.mostFrequentWords);
        return this.mostFrequentWords;
    }
    createTagify(inputElement) {
        if (this.config.use_tagify && !this.tagify) {
            this.tagify = new (0, _tagifyDefault.default)(inputElement, {
                userInput: false,
                editTags: false,
                transformTag: this.transformTagifyTag
            });
            this.tagify.setReadonly(true);
            // this.tagify.DOM.scope.style.setProperty("--tag-bg", "#bee3f8");
            // this.tagify.DOM.scope.style.setProperty("--tag-text-color", "#2b6cb0");
            // this.tagify.DOM.scope.style.setProperty("--tag-border-radius", "12px");
            // this.tagify.DOM.scope.style.setProperty("--tag-pad", "0.6em");
            this.tagify.DOM.scope.style.setProperty("--readonly-striped", "0");
        }
        return this.tagify;
    }
    transformTagifyTag(tagData) {
        let randomColor = getRandomColor();
        tagData.color = randomColor;
        console.log("randomColor", randomColor);
        tagData.style = "--tag-bg:" + tagData.color + ";" + "--tag-border-radius: 20px";
        function getRandomColor() {
            function rand(min, max) {
                return min + Math.random() * (max - min);
            }
            let h = rand(1, 360) | 0, s = rand(40, 70) | 0, l = rand(65, 72) | 0;
            return "hsl(" + h + "," + s + "%," + l + "%)";
        }
    }
    createTagifyOverride(inputElement) {
        if (this.config.use_tagify) {
            if (!this.tagifyOverride) {
                this.tagifyOverride = new (0, _tagifyDefault.default)(this.overrideOutput, {
                    userInput: false,
                    transformTag: this.transformTagifyTag
                });
                this.tagifyOverride.DOM.scope.style.setProperty("border", "none");
            }
            this.tagifyOverride.on("click", (e)=>{
                console.log(e.detail.data.value);
                this.addTags(e.detail.data.value);
            });
        }
    }
    async callOpenThesaurusAPI(inputArray) {
        let returnSet = [];
        // get synsets from openthesaurus?
        for await (const word of inputArray){
            console.log("CALLING OPENTHESAURUS API");
            await this.openthesaurus.get(word).then((response)=>{
                console.log(response);
                let optValues = [];
                // response.baseforms?
                if (response && response.synsets[0]?.terms) {
                    console.log(response.synsets[0]?.terms);
                    response.synsets[0].terms.forEach((term)=>{
                        optValues.push((0, _normalizeForSearchDefault.default)(term.term));
                    });
                }
                returnSet = this.tokenize(this.filterStopWords(optValues).toString());
            });
        }
        return returnSet;
    }
    // async process(input: string) {
    //   this.outputField.setAttribute("value", "");
    //   console.log("loaderElement", this.loaderElement);
    //   this.loaderElement.style.setProperty("display", "block");
    //   let processedInput = await this.processInput(input);
    //   this.loaderElement.style.setProperty("display", "none");
    //   console.log("processedinput", processedInput[0]);
    //   processedInput[0] = processedInput[0] ? processedInput[0] : "";
    //   this.outputField.setAttribute("value", processedInput[0]);
    //   return processedInput;
    // }
    async processAndAddTags(input, outputField) {
        console.log("awaiting processedInput");
        this.deleteTags();
        let processedInput = await this.processInput(input);
        if (processedInput) {
            console.log("done with processedInput");
            this.addTags(processedInput[0]);
            return Promise.resolve(true);
        }
        return Promise.reject(false);
    }
    addTags(input) {
        this.deleteTags();
        if (this.outputField.lastChild) this.outputField.removeChild(this.outputField.lastChild);
        console.log("addtag", input);
        if (this.config.use_tagify) {
            if (!this.tagify) this.createTagify(this.outputField);
            if (!this.tagifyOverride) this.createTagifyOverride(this.overrideOutput);
            this.tagify.removeAllTags();
            this.tagifyOverride.removeAllTags();
        }
        // if (input && input != "") {
        // set main tag for tagify
        if (this.config.use_tagify) this.tagify.addTags(input);
        else {
            this.outputField.setAttribute("value", input);
            this.outputField.value = input;
            console.log("field", this.outputField);
            const taggyTag = document.createElement("div");
            // taggyTag.classList.add("taggy-tag");
            // taggyTag.id = "taggy-tag";
            taggyTag.classList.add("taggy-tag");
            if (!input || input == "") {
                input = "No matching tag found";
                taggyTag.classList.add("not-found");
            } else {
                // }
                // set override tags
                if (this.overrideOutput && this.mostFrequentTopTags) this.addOverrideOutput();
                // set most frequent words
                this.addFrequencyOutput();
            }
            taggyTag.innerText = input;
            this.outputField.appendChild(taggyTag);
        }
    }
    addFrequencyOutput() {
        this.frequencyOutput.innerHTML = "Word(s) with most Occurencies: " + this.getMostFrequentWords()?.join(", ");
    }
    addOverrideOutput() {
        let topTags = [];
        Object.values(this.mostFrequentTopTags).forEach((element)=>// topTags.push(element.category + " (" + element.count + ")")
            topTags.push(element.category));
        if (this.overrideOutput) {
            if (this.config.use_tagify && this.tagifyOverride) // this.overrideOutput.innerHTML =
            //   "Top detected categories: " + topTags.join(", ");
            this.tagifyOverride.addTags(topTags);
            else // this.overrideOutput.value = topTags.join(", ");
            if (topTags.length > 1) {
                let taggyTagOverrideTitle = document.createElement("h3");
                taggyTagOverrideTitle.innerText = "Multiple possibilities found. Click to override main tag";
                taggyTagOverrideTitle.classList.add("override-title");
                this.overrideOutput.prepend(taggyTagOverrideTitle);
                this.overrideOutput.setAttribute("value", topTags.join(", "));
                topTags.forEach((tag)=>{
                    let taggyTagOverride = document.createElement("div");
                    // taggyTag.classList.add("taggy-tag");
                    // taggyTagOverride.id = "taggy-tag";
                    taggyTagOverride.classList.add("taggy-tag", "override");
                    taggyTagOverride.innerText = tag;
                    taggyTagOverride.classList.add("bg-" + this.getRandomTwColor() + "-200");
                    this.overrideOutput.appendChild(taggyTagOverride);
                });
            // this.outputField.value = input;
            // console.log("field", this.outputField);
            // const taggyTag = document.createElement("div");
            // // taggyTag.classList.add("taggy-tag");
            // taggyTag.id = "taggy-tag";
            // taggyTag.innerText = input;
            // this.outputField.appendChild(taggyTag);
            }
        }
    }
    getRandomTwColor() {
        const twColors = [
            "Red",
            "Orange",
            "Amber",
            "Yellow",
            "Lime",
            "Green",
            "Emerald",
            "Teal",
            "Cyan",
            "Sky",
            "Blue",
            "Indigo",
            "Violet",
            "Purple",
            "Fuchsia",
            "Pink",
            "Rose"
        ];
        return twColors[Math.floor(Math.random() * twColors.length)].toLowerCase();
    }
    deleteTags() {
        console.log("called deleteTags");
        // delete tagify tags
        if (this.tagify) this.tagify.removeTags();
        if (this.tagifyOverride) this.tagifyOverride.removeAllTags();
        // this.overrideOutput.innerHTML = '';
        // delete main tag
        if (this.outputField.lastChild) this.outputField.removeChild(this.outputField.lastChild);
        // delete override tags
        while(this.overrideOutput.firstChild){
            console.log("REMOVE CHILD", this.overrideOutput.firstChild);
            this.overrideOutput.removeChild(this.overrideOutput.firstChild);
        }
    }
    tokenize(input, type = "word") {
        let tokenizedItems = this.winkTokenizer.tokenize(input);
        let returnSet = [];
        let tokenizedWords = tokenizedItems.filter((item)=>{
            return item.tag === type;
        });
        tokenizedWords.forEach((element)=>{
            returnSet.push(element.value);
        });
        return returnSet;
    }
    normalize(inputArray) {
        let normalizedValues = [];
        for (const element of inputArray)normalizedValues.push((0, _normalizeForSearchDefault.default)(element));
        return normalizedValues;
    }
    filterStopWords(inputArray) {
        return inputArray.filter((item)=>!this.stopwordsDE.includes(item.value));
    }
    async processInput(input) {
        console.log("called processinput");
        this.resetData();
        // tokenize,filter out german stopword and normalize input (remove umlaute and transform to lowercase)
        let tokenizedValues = this.normalize(this.filterStopWords(this.tokenize(input, "word")));
        console.log("tokenized and normalized values", tokenizedValues);
        // return if input is too small
        if (tokenizedValues.length < 2) return [];
        let enrichedInputValues = [];
        // don't call openthesaurus-API too often (-> results in too many requests error)
        if (this.config.opt_enabled && tokenizedValues.length < 20) enrichedInputValues = await this.callOpenThesaurusAPI(tokenizedValues);
        // flat out arrays
        enrichedInputValues = enrichedInputValues.flat().concat(tokenizedValues.flat());
        console.log("NORMALIZED/ENRICHED INPUTVALUES", enrichedInputValues);
        let glossarTags = [];
        let combinedWordsReturnSet = [];
        // if INCLUDE-TOP is set -> add top tag
        for (const category of glossarData.tags){
            if (this.config.include_top) {
                console.log("INCLUDE TOP IS SET");
                console.log(category);
                glossarTags.push((0, _normalizeForSearchDefault.default)(category.name));
            }
            for (const word of category.words){
                glossarTags.push((0, _normalizeForSearchDefault.default)(word));
                // check input for "whitespace-words"
                if (word.includes(" ")) {
                    if ((0, _normalizeForSearchDefault.default)(input).includes(word)) {
                        let matchArray = (0, _normalizeForSearchDefault.default)(input).matchAll(word);
                        for (let match of matchArray){
                            combinedWordsReturnSet.push(match[0]);
                            console.log(match[0]);
                            console.log("whitespace-word match added", match[0]);
                        }
                    }
                }
            }
        }
        console.log("WORDS IN GLOSSAR", glossarTags);
        console.log("ENRICHED INPUTVALUES", enrichedInputValues);
        let returnValues = [];
        // look for matches in glossar
        for (const glossarValue of glossarTags){
            for (const inputValue of enrichedInputValues)if (inputValue == glossarValue) {
                console.log("MATCH FOR", inputValue);
                returnValues.push(inputValue);
            }
        }
        console.log("COMBINEDWORDSRETURNSET", combinedWordsReturnSet);
        console.log("RETURN VALUES", returnValues);
        let finalSet = [
            ...combinedWordsReturnSet
        ].concat(returnValues);
        console.log("FINAL SET", finalSet);
        let topTagCount = [];
        let maxCount = 0;
        // if ASSIGN_TOP is set -> return top categegory
        if (this.config.assign_top) {
            let count = 0;
            // if INCLUDE_TOP ist set -> add top categories
            glossarData.tags.forEach((category)=>{
                console.log("CATEGORY", category);
                count = 0;
                finalSet.forEach((element)=>{
                    // if INCLUDE_TOP ist set -> add top categories
                    if ((0, _normalizeForSearchDefault.default)(category.name) == element) count += 1;
                    if (this.normalize(category.words).includes(element)) count += 1;
                });
                topTagCount.push({
                    category: category.name,
                    count: count
                });
                if (count > maxCount) maxCount = count;
            });
            console.log("TOPCATFREQ", topTagCount);
            // console.log("SORTBY", sortBy(topTagCount, ["category", "count"]));
            // set most frequent top tags
            let groupedMostFrequentTopTags = (0, _lodash.groupBy)(topTagCount, "count");
            if (groupedMostFrequentTopTags[maxCount][0].count) this.mostFrequentTopTags = groupedMostFrequentTopTags[maxCount];
        }
        // set most frequent matches
        this.mostFrequentWords = modeArray(finalSet);
        let finalValue = (0, _lodash.sample)(this.mostFrequentWords);
        console.log("MOSTFREQUENT TOP TAGS", this.mostFrequentTopTags);
        // if ASSIGN_TOP is set -> return top categegory
        if (this.config.assign_top) {
            let topTags = [];
            Object.values(this.mostFrequentTopTags).forEach((element)=>{
                if (element.count) topTags.push(element.category);
            });
            console.log("topTAGS", topTags);
            let tempValue = (0, _lodash.sample)(topTags);
            if (tempValue) finalValue = tempValue;
        }
        return finalValue ? [
            finalValue
        ] : [
            ""
        ];
    }
}
function enrichWithOpenThesaurus(inputArray) {
    let enrichedArray = [];
    for (const word of inputArray)// get baseforms from openthesaurus?
    openthesaurus.get(word).then((response)=>{
        if (response && response.baseforms) {
            console.log(response.baseforms);
            enrichedArray.push(response.baseforms);
        }
    // get baseforms from openthesaurus?
    });
    return enrichedArray;
}
// return an array of mode element(s) -> highest occurrences
function modeArray(array) {
    if (array.length == 0) return null;
    var modeMap = {}, maxCount = 1, modes = [];
    for(var i = 0; i < array.length; i++){
        var el = array[i];
        if (modeMap[el] == null) modeMap[el] = 1;
        else modeMap[el]++;
        if (modeMap[el] > maxCount) {
            modes = [
                el
            ];
            maxCount = modeMap[el];
        } else if (modeMap[el] == maxCount) {
            modes.push(el);
            maxCount = modeMap[el];
        }
    }
    return modes;
}

},{"openthesaurus":"23lbw","../data/glossar.json":"cjOGV","../data/config.json":"cFyBt","wink-tokenizer":"ergX1","stopwords-iso":"iv2Bv","normalize-for-search":"2O8n2","lodash":"hpleh","regenerator-runtime/runtime":"n5C8q","@yaireo/tagify":"ePiTf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gE9QH"], null, "parcelRequireaa66")

//# sourceMappingURL=index.1d6ce8c7.js.map
