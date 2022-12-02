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
})({"4gsxa":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "65e5a9196df8ec0b";
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

},{}],"1cgpk":[function(require,module,exports) {
(()=>{
    var e = {
        809: (e)=>{
            "use strict";
            e.exports = function() {
                return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
            };
        },
        466: function(e) {
            !function(a, n) {
                "use strict";
                var t = function(e) {
                    function a(e) {
                        switch(e){
                            case "\xe6":
                            case "\xe4":
                                return "ae";
                            case "\xe5":
                                return "aa";
                            case "\xe1":
                            case "\xe0":
                            case "\xe3":
                            case "\xe2":
                                return "a";
                            case "\xe7":
                            case "č":
                                return "c";
                            case "\xe9":
                            case "\xea":
                            case "\xe8":
                            case "\xeb":
                            case "ē":
                                return "e";
                            case "\xee":
                            case "\xef":
                            case "\xed":
                                return "i";
                            case "œ":
                            case "\xf6":
                                return "oe";
                            case "\xf3":
                            case "\xf5":
                            case "\xf4":
                                return "o";
                            case "ś":
                            case "š":
                                return "s";
                            case "\xfc":
                                return "ue";
                            case "\xf9":
                            case "\xfa":
                            case "ŭ":
                                return "u";
                            case "\xdf":
                                return "ss";
                            case "ё":
                                return "е";
                            default:
                                return e;
                        }
                    }
                    var n, t, u = "";
                    for(n = 0, t = (e = e.toLowerCase()).length; n < t; n += 1)u += a(e.charAt(n));
                    return u;
                };
                e.exports ? e.exports = t : a.normalizeForSearch = t;
            }(this);
        },
        869: (e)=>{
            var a = Object.create(null), n = "word";
            a["can't"] = [
                {
                    value: "ca",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["CAN'T"] = [
                {
                    value: "CA",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Can't"] = [
                {
                    value: "Ca",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["Couldn't"] = [
                {
                    value: "could",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["COULDN'T"] = [
                {
                    value: "COULD",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Couldn't"] = [
                {
                    value: "Could",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["don't"] = [
                {
                    value: "do",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["DON'T"] = [
                {
                    value: "DO",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Don't"] = [
                {
                    value: "Do",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["doesn't"] = [
                {
                    value: "does",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["DOESN'T"] = [
                {
                    value: "DOES",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Doesn't"] = [
                {
                    value: "Does",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["didn't"] = [
                {
                    value: "did",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["DIDN'T"] = [
                {
                    value: "DID",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Didn't"] = [
                {
                    value: "Did",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["hadn't"] = [
                {
                    value: "had",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["HADN'T"] = [
                {
                    value: "HAD",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Hadn't"] = [
                {
                    value: "Had",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["mayn't"] = [
                {
                    value: "may",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["MAYN'T"] = [
                {
                    value: "MAY",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Mayn't"] = [
                {
                    value: "May",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["mightn't"] = [
                {
                    value: "might",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["MIGHTN'T"] = [
                {
                    value: "MIGHT",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Mightn't"] = [
                {
                    value: "Might",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["mustn't"] = [
                {
                    value: "must",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["MUSTN'T"] = [
                {
                    value: "MUST",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Mustn't"] = [
                {
                    value: "Must",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["needn't"] = [
                {
                    value: "need",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["NEEDN'T"] = [
                {
                    value: "NEED",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Needn't"] = [
                {
                    value: "Need",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["oughtn't"] = [
                {
                    value: "ought",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["OUGHTN'T"] = [
                {
                    value: "OUGHT",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Oughtn't"] = [
                {
                    value: "Ought",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["shan't"] = [
                {
                    value: "sha",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["SHAN'T"] = [
                {
                    value: "SHA",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Shan't"] = [
                {
                    value: "Sha",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["shouldn't"] = [
                {
                    value: "should",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["SHOULDN'T"] = [
                {
                    value: "SHOULD",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Shouldn't"] = [
                {
                    value: "Should",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["won't"] = [
                {
                    value: "wo",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["WON'T"] = [
                {
                    value: "WO",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Won't"] = [
                {
                    value: "Wo",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["wouldn't"] = [
                {
                    value: "would",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["WOULDN'T"] = [
                {
                    value: "WOULD",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Wouldn't"] = [
                {
                    value: "Would",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["ain't"] = [
                {
                    value: "ai",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["AIN'T"] = [
                {
                    value: "AI",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Ain't"] = [
                {
                    value: "Ai",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["aren't"] = [
                {
                    value: "are",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["AREN'T"] = [
                {
                    value: "ARE",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Aren't"] = [
                {
                    value: "Are",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["isn't"] = [
                {
                    value: "is",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["ISN'T"] = [
                {
                    value: "IS",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Isn't"] = [
                {
                    value: "Is",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["wasn't"] = [
                {
                    value: "was",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["WASN'T"] = [
                {
                    value: "WAS",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Wasn't"] = [
                {
                    value: "Was",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["weren't"] = [
                {
                    value: "were",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["WEREN'T"] = [
                {
                    value: "WERE",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Weren't"] = [
                {
                    value: "Were",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["haven't"] = [
                {
                    value: "have",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["HAVEN'T"] = [
                {
                    value: "HAVE",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Haven't"] = [
                {
                    value: "Have",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["hasn't"] = [
                {
                    value: "has",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["HASN'T"] = [
                {
                    value: "HAS",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Hasn't"] = [
                {
                    value: "Has",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["daren't"] = [
                {
                    value: "dare",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["DAREN'T"] = [
                {
                    value: "DARE",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                }
            ], a["Daren't"] = [
                {
                    value: "Dare",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                }
            ], a["i'm"] = [
                {
                    value: "i",
                    tag: n
                },
                {
                    value: "'m",
                    tag: n
                }
            ], a["I'M"] = [
                {
                    value: "I",
                    tag: n
                },
                {
                    value: "'M",
                    tag: n
                }
            ], a["I'm"] = [
                {
                    value: "I",
                    tag: n
                },
                {
                    value: "'m",
                    tag: n
                }
            ], a["i've"] = [
                {
                    value: "i",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["I'VE"] = [
                {
                    value: "I",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["I've"] = [
                {
                    value: "I",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["i'd"] = [
                {
                    value: "i",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["I'D"] = [
                {
                    value: "I",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                }
            ], a["I'd"] = [
                {
                    value: "I",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["i'll"] = [
                {
                    value: "i",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["I'LL"] = [
                {
                    value: "I",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                }
            ], a["I'll"] = [
                {
                    value: "I",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["you've"] = [
                {
                    value: "you",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["YOU'VE"] = [
                {
                    value: "YOU",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["You've"] = [
                {
                    value: "You",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["you'd"] = [
                {
                    value: "you",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["YOU'D"] = [
                {
                    value: "YOU",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                }
            ], a["You'd"] = [
                {
                    value: "You",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["you'll"] = [
                {
                    value: "you",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["YOU'LL"] = [
                {
                    value: "YOU",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                }
            ], a["You'll"] = [
                {
                    value: "You",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["they've"] = [
                {
                    value: "they",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["THEY'VE"] = [
                {
                    value: "THEY",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["They've"] = [
                {
                    value: "They",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["they'd"] = [
                {
                    value: "they",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["THEY'D"] = [
                {
                    value: "THEY",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                }
            ], a["They'd"] = [
                {
                    value: "They",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["they'll"] = [
                {
                    value: "they",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["THEY'LL"] = [
                {
                    value: "THEY",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                }
            ], a["They'll"] = [
                {
                    value: "They",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["they're"] = [
                {
                    value: "they",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["THEY'RE"] = [
                {
                    value: "THEY",
                    tag: n
                },
                {
                    value: "'RE",
                    tag: n
                }
            ], a["They're"] = [
                {
                    value: "They",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["we've"] = [
                {
                    value: "we",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["WE'VE"] = [
                {
                    value: "WE",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["We've"] = [
                {
                    value: "We",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["we'd"] = [
                {
                    value: "we",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["WE'D"] = [
                {
                    value: "WE",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                }
            ], a["We'd"] = [
                {
                    value: "We",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["we'll"] = [
                {
                    value: "we",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["WE'LL"] = [
                {
                    value: "WE",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                }
            ], a["We'll"] = [
                {
                    value: "We",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["we're"] = [
                {
                    value: "we",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["WE'RE"] = [
                {
                    value: "WE",
                    tag: n
                },
                {
                    value: "'RE",
                    tag: n
                }
            ], a["We're"] = [
                {
                    value: "We",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["she'd"] = [
                {
                    value: "she",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["SHE'D"] = [
                {
                    value: "SHE",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                }
            ], a["She'd"] = [
                {
                    value: "She",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["she'll"] = [
                {
                    value: "she",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["SHE'LL"] = [
                {
                    value: "SHE",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                }
            ], a["She'll"] = [
                {
                    value: "She",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["she's"] = [
                {
                    value: "she",
                    tag: n
                },
                {
                    value: "'s",
                    tag: n
                }
            ], a["SHE'S"] = [
                {
                    value: "SHE",
                    tag: n
                },
                {
                    value: "'S",
                    tag: n
                }
            ], a["She's"] = [
                {
                    value: "She",
                    tag: n
                },
                {
                    value: "'s",
                    tag: n
                }
            ], a["he'd"] = [
                {
                    value: "he",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["HE'D"] = [
                {
                    value: "HE",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                }
            ], a["He'd"] = [
                {
                    value: "He",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["he'll"] = [
                {
                    value: "he",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["HE'LL"] = [
                {
                    value: "HE",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                }
            ], a["He'll"] = [
                {
                    value: "He",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["he's"] = [
                {
                    value: "he",
                    tag: n
                },
                {
                    value: "'s",
                    tag: n
                }
            ], a["HE'S"] = [
                {
                    value: "HE",
                    tag: n
                },
                {
                    value: "'S",
                    tag: n
                }
            ], a["He's"] = [
                {
                    value: "He",
                    tag: n
                },
                {
                    value: "'s",
                    tag: n
                }
            ], a["it'd"] = [
                {
                    value: "it",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["IT'D"] = [
                {
                    value: "IT",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                }
            ], a["It'd"] = [
                {
                    value: "It",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["it'll"] = [
                {
                    value: "it",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["IT'LL"] = [
                {
                    value: "IT",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                }
            ], a["It'll"] = [
                {
                    value: "It",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["it's"] = [
                {
                    value: "it",
                    tag: n
                },
                {
                    value: "'s",
                    tag: n
                }
            ], a["IT'S"] = [
                {
                    value: "IT",
                    tag: n
                },
                {
                    value: "'S",
                    tag: n
                }
            ], a["It's"] = [
                {
                    value: "It",
                    tag: n
                },
                {
                    value: "'s",
                    tag: n
                }
            ], a["what've"] = [
                {
                    value: "what",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["WHAT'VE"] = [
                {
                    value: "WHAT",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["What've"] = [
                {
                    value: "What",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["what'd"] = [
                {
                    value: "what",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["WHAT'D"] = [
                {
                    value: "WHAT",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                }
            ], a["What'd"] = [
                {
                    value: "What",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["what'll"] = [
                {
                    value: "what",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["WHAT'LL"] = [
                {
                    value: "WHAT",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                }
            ], a["What'll"] = [
                {
                    value: "What",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["what're"] = [
                {
                    value: "what",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["WHAT'RE"] = [
                {
                    value: "WHAT",
                    tag: n
                },
                {
                    value: "'RE",
                    tag: n
                }
            ], a["What're"] = [
                {
                    value: "What",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["who've"] = [
                {
                    value: "who",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["WHO'VE"] = [
                {
                    value: "WHO",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["Who've"] = [
                {
                    value: "Who",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["who'd"] = [
                {
                    value: "who",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["WHO'D"] = [
                {
                    value: "WHO",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                }
            ], a["Who'd"] = [
                {
                    value: "Who",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["who'll"] = [
                {
                    value: "who",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["WHO'LL"] = [
                {
                    value: "WHO",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                }
            ], a["Who'll"] = [
                {
                    value: "Who",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["who're"] = [
                {
                    value: "who",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["WHO'RE"] = [
                {
                    value: "WHO",
                    tag: n
                },
                {
                    value: "'RE",
                    tag: n
                }
            ], a["Who're"] = [
                {
                    value: "Who",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["when've"] = [
                {
                    value: "when",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["WHEN'VE"] = [
                {
                    value: "WHEN",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["When've"] = [
                {
                    value: "When",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["when'd"] = [
                {
                    value: "when",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["WHEN'D"] = [
                {
                    value: "WHEN",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                }
            ], a["When'd"] = [
                {
                    value: "When",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["when'll"] = [
                {
                    value: "when",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["WHEN'LL"] = [
                {
                    value: "WHEN",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                }
            ], a["When'll"] = [
                {
                    value: "When",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["when're"] = [
                {
                    value: "when",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["WHEN'RE"] = [
                {
                    value: "WHEN",
                    tag: n
                },
                {
                    value: "'RE",
                    tag: n
                }
            ], a["When're"] = [
                {
                    value: "When",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["where've"] = [
                {
                    value: "where",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["WHERE'VE"] = [
                {
                    value: "WHERE",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["Where've"] = [
                {
                    value: "Where",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["where'd"] = [
                {
                    value: "where",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["WHERE'D"] = [
                {
                    value: "WHERE",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                }
            ], a["Where'd"] = [
                {
                    value: "Where",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["where'll"] = [
                {
                    value: "where",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["WHERE'LL"] = [
                {
                    value: "WHERE",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                }
            ], a["Where'll"] = [
                {
                    value: "Where",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["where're"] = [
                {
                    value: "where",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["WHERE'RE"] = [
                {
                    value: "WHERE",
                    tag: n
                },
                {
                    value: "'RE",
                    tag: n
                }
            ], a["Where're"] = [
                {
                    value: "Where",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["why've"] = [
                {
                    value: "why",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["WHY'VE"] = [
                {
                    value: "WHY",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["Why've"] = [
                {
                    value: "Why",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["why'd"] = [
                {
                    value: "why",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["WHY'D"] = [
                {
                    value: "WHY",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                }
            ], a["Why'd"] = [
                {
                    value: "Why",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["why'll"] = [
                {
                    value: "why",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["WHY'LL"] = [
                {
                    value: "WHY",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                }
            ], a["Why'll"] = [
                {
                    value: "Why",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["why're"] = [
                {
                    value: "why",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["WHY'RE"] = [
                {
                    value: "WHY",
                    tag: n
                },
                {
                    value: "'RE",
                    tag: n
                }
            ], a["Why're"] = [
                {
                    value: "Why",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["how've"] = [
                {
                    value: "how",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["HOW'VE"] = [
                {
                    value: "HOW",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["How've"] = [
                {
                    value: "How",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["how'd"] = [
                {
                    value: "how",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["HOW'D"] = [
                {
                    value: "HOW",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                }
            ], a["How'd"] = [
                {
                    value: "How",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["how'll"] = [
                {
                    value: "how",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["HOW'LL"] = [
                {
                    value: "HOW",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                }
            ], a["How'll"] = [
                {
                    value: "How",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["how're"] = [
                {
                    value: "how",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["HOW'RE"] = [
                {
                    value: "HOW",
                    tag: n
                },
                {
                    value: "'RE",
                    tag: n
                }
            ], a["How're"] = [
                {
                    value: "How",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["there've"] = [
                {
                    value: "there",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["THERE'VE"] = [
                {
                    value: "THERE",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["There've"] = [
                {
                    value: "There",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["there'd"] = [
                {
                    value: "there",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["THERE'D"] = [
                {
                    value: "THERE",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                }
            ], a["There'd"] = [
                {
                    value: "There",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["there'll"] = [
                {
                    value: "there",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["THERE'LL"] = [
                {
                    value: "THERE",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                }
            ], a["There'll"] = [
                {
                    value: "There",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["there're"] = [
                {
                    value: "there",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["THERE'RE"] = [
                {
                    value: "THERE",
                    tag: n
                },
                {
                    value: "'RE",
                    tag: n
                }
            ], a["There're"] = [
                {
                    value: "There",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["that've"] = [
                {
                    value: "that",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["THAT'VE"] = [
                {
                    value: "THAT",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["That've"] = [
                {
                    value: "That",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["that'd"] = [
                {
                    value: "that",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["THAT'D"] = [
                {
                    value: "THAT",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                }
            ], a["That'd"] = [
                {
                    value: "That",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                }
            ], a["that'll"] = [
                {
                    value: "that",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["THAT'LL"] = [
                {
                    value: "THAT",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                }
            ], a["That'll"] = [
                {
                    value: "That",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                }
            ], a["that're"] = [
                {
                    value: "that",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["THAT'RE"] = [
                {
                    value: "THAT",
                    tag: n
                },
                {
                    value: "'RE",
                    tag: n
                }
            ], a["That're"] = [
                {
                    value: "That",
                    tag: n
                },
                {
                    value: "'re",
                    tag: n
                }
            ], a["let's"] = [
                {
                    value: "let",
                    tag: n
                },
                {
                    value: "'s",
                    tag: n
                }
            ], a["LET'S"] = [
                {
                    value: "THAT",
                    tag: n
                },
                {
                    value: "'S",
                    tag: n
                }
            ], a["Let's"] = [
                {
                    value: "Let",
                    tag: n
                },
                {
                    value: "'s",
                    tag: n
                }
            ], a["could've"] = [
                {
                    value: "could",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["COULD'VE"] = [
                {
                    value: "COULD",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["Could've"] = [
                {
                    value: "Could",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["should've"] = [
                {
                    value: "should",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["SHOULD'VE"] = [
                {
                    value: "SHOULD",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["Should've"] = [
                {
                    value: "Should",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["would've"] = [
                {
                    value: "would",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["WOULD'VE"] = [
                {
                    value: "WOULD",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["Would've"] = [
                {
                    value: "Would",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["i'll've"] = [
                {
                    value: "i",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["I'LL'VE"] = [
                {
                    value: "I",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["I'll've"] = [
                {
                    value: "I",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["you'll've"] = [
                {
                    value: "you",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["YOU'LL'VE"] = [
                {
                    value: "YOU",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["You'll've"] = [
                {
                    value: "You",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["they'll've"] = [
                {
                    value: "they",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["THEY'LL'VE"] = [
                {
                    value: "THEY",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["They'll've"] = [
                {
                    value: "They",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["it'll've"] = [
                {
                    value: "it",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["IT'LL'VE"] = [
                {
                    value: "IT",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["It'll've"] = [
                {
                    value: "It",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["he'll've"] = [
                {
                    value: "he",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["HE'LL'VE"] = [
                {
                    value: "HE",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["He'll've"] = [
                {
                    value: "He",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["she'll've"] = [
                {
                    value: "she",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["SHE'LL'VE"] = [
                {
                    value: "SHE",
                    tag: n
                },
                {
                    value: "'LL",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["She'll've"] = [
                {
                    value: "She",
                    tag: n
                },
                {
                    value: "'ll",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["shouldn't've"] = [
                {
                    value: "should",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["SHOULDN'T'VE"] = [
                {
                    value: "SHOULD",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["Shouldn't've"] = [
                {
                    value: "Should",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["couldn't've"] = [
                {
                    value: "could",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["COULDN'T'VE"] = [
                {
                    value: "COULD",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["Couldn't've"] = [
                {
                    value: "Could",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["wouldn't've"] = [
                {
                    value: "would",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["WOULDN'T'VE"] = [
                {
                    value: "WOULD",
                    tag: n
                },
                {
                    value: "N'T",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["Wouldn't've"] = [
                {
                    value: "Would",
                    tag: n
                },
                {
                    value: "n't",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["i'd've"] = [
                {
                    value: "i",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["I'D'VE"] = [
                {
                    value: "I",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["I'd've"] = [
                {
                    value: "I",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["you'd've"] = [
                {
                    value: "you",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["YOU'D'VE"] = [
                {
                    value: "YOU",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["You'd've"] = [
                {
                    value: "You",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["he'd've"] = [
                {
                    value: "he",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["HE'D'VE"] = [
                {
                    value: "HE",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["He'd've"] = [
                {
                    value: "He",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["she'd've"] = [
                {
                    value: "she",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["SHE'D'VE"] = [
                {
                    value: "SHE",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["She'd've"] = [
                {
                    value: "She",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["you'd've"] = [
                {
                    value: "you",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["YOU'D'VE"] = [
                {
                    value: "YOU",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["You'd've"] = [
                {
                    value: "You",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["they'd've"] = [
                {
                    value: "they",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["THEY'D'VE"] = [
                {
                    value: "THEY",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["They'd've"] = [
                {
                    value: "They",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["there'd've"] = [
                {
                    value: "there",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["THERE'D'VE"] = [
                {
                    value: "THERE",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["There'd've"] = [
                {
                    value: "There",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["it'd've"] = [
                {
                    value: "it",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], a["IT'D'VE"] = [
                {
                    value: "IT",
                    tag: n
                },
                {
                    value: "'D",
                    tag: n
                },
                {
                    value: "'VE",
                    tag: n
                }
            ], a["It'd've"] = [
                {
                    value: "It",
                    tag: n
                },
                {
                    value: "'d",
                    tag: n
                },
                {
                    value: "'ve",
                    tag: n
                }
            ], e.exports = a;
        },
        73: (e, a, n)=>{
            var t = n(809), u = n(869), i = /\s+/g, s = t(), o = /'/, l = /([a-z]+)('s)$/i, r = /([a-z]+s)(')$/i, m = [
                {
                    regex: /"[^"]*"/g,
                    category: "quoted_phrase"
                },
                {
                    regex: /(?:https?:\/\/)(?:[\da-z\.-]+)\.(?:[a-z\.]{2,6})(?:[\/\w\.\-\?#=]*)*\/?/gi,
                    category: "url"
                },
                {
                    regex: /[-!#$%&'*+\/=?^\w{|}~](?:\.?[-!#$%&'*+\/=?^\w`{|}~])*@[a-z0-9](?:-?\.?[a-z0-9])*(?:\.[a-z](?:-?[a-z0-9])*)+/gi,
                    category: "email"
                },
                {
                    regex: /@\w+/g,
                    category: "mention"
                },
                {
                    regex: /#[a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF_][a-z0-9\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF_]*/gi,
                    category: "hashtag"
                },
                {
                    regex: /#[\u0900-\u0963\u0970-\u097F_][\u0900-\u0963\u0970-\u097F\u0966-\u096F0-9_]*/gi,
                    category: "hashtag"
                },
                {
                    regex: s,
                    category: "emoji"
                },
                {
                    regex: /:-?[dps\*\/\[\]{}\(\)]|;-?[/(/)d]|<3/gi,
                    category: "emoticon"
                },
                {
                    regex: /(?:\d|[01]\d|2[0-3]):?(?:[0-5][0-9])?\s?(?:[ap]\.?m\.?|hours|hrs)/gi,
                    category: "time"
                },
                {
                    regex: /1\dth|[04-9]th|1st|2nd|3rd|[02-9]1st|[02-9]2nd|[02-9]3rd|[02-9][04-9]th|\d+\d[04-9]th|\d+\d1st|\d+\d2nd|\d+\d3rd/g,
                    category: "ordinal"
                },
                {
                    regex: /\d+\/\d+|\d(?:[\.,-\/]?\d)*(?:\.\d+)?/g,
                    category: "number"
                },
                {
                    regex: /[\u0966-\u096F]+\/[\u0966-\u096F]+|[\u0966-\u096F](?:[\.,-\/]?[\u0966-\u096F])*(?:\.[\u0966-\u096F]+)?/g,
                    category: "number"
                },
                {
                    regex: /[₿₽₹₨$£¥€₩]/g,
                    category: "currency"
                },
                {
                    regex: /[a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF][a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF']*/gi,
                    category: "word"
                },
                {
                    regex: /[\u0900-\u094F\u0951-\u0963\u0970-\u097F]+/gi,
                    category: "word"
                },
                {
                    regex: /[’'‘’`“”"\[\]\(\){}…,\.!;\?\-:\u0964\u0965]/g,
                    category: "punctuation"
                },
                {
                    regex: /[\u0950~@#%\^\+=\*\|\/<>&]/g,
                    category: "symbol"
                }
            ], D = {
                emoticon: "c",
                email: "e",
                emoji: "j",
                hashtag: "h",
                mention: "m",
                number: "n",
                ordinal: "o",
                quoted_phrase: "q",
                currency: "r",
                time: "t",
                url: "u",
                word: "w",
                alien: "z"
            };
            e.exports = function() {
                var e = m.slice(0), a = [], n = Object.create(null), t = function(e, a) {
                    var n, t = u[e];
                    return void 0 === t ? (n = e.match(l)) || (n = e.match(r)) ? (a.push({
                        value: n[1],
                        tag: "word"
                    }), a.push({
                        value: n[2],
                        tag: "word"
                    })) : a.push({
                        value: e,
                        tag: "word"
                    }) : (a.push(Object.assign({}, t[0])), a.push(Object.assign({}, t[1])), t[2] && a.push(Object.assign({}, t[2]))), a;
                }, s = function(e, n) {
                    var u, l, r, m = e.trim();
                    if (n.length) for(u = function(e, a) {
                        var n, u, i, s, l = e.match(a.regex), r = e.split(a.regex), m = [], D = a.category, d = 0;
                        for(l = l || [], u = 0, i = r.length; u < i; u += 1)(s = (s = r[u]).trim()) && m.push(s), d < l.length && ("word" === D ? (n = l[d], o.test(n) ? m = t(n, m) : m.push({
                            value: n,
                            tag: D
                        })) : m.push({
                            value: l[d],
                            tag: D
                        })), d += 1;
                        return m;
                    }(m, n[0]), l = 0, r = u.length; l < r; l += 1)"string" == typeof u[l] ? s(u[l], n.slice(1)) : a.push(u[l]);
                    else e.split(i).forEach(function(e) {
                        a.push({
                            value: e.trim(),
                            tag: "alien"
                        });
                    });
                }, d = function(a) {
                    e = "object" == typeof a && Object.keys(a).length ? m.filter(function(e) {
                        var n = a[e.category];
                        return null == n || !!n;
                    }) : [];
                    const n = Object.create(null);
                    return e.forEach(function(e) {
                        n[e.category] = !0;
                    }), D = {
                        emoticon: "c",
                        email: "e",
                        emoji: "j",
                        hashtag: "h",
                        mention: "m",
                        number: "n",
                        ordinal: "o",
                        quoted_phrase: "q",
                        currency: "r",
                        time: "t",
                        url: "u",
                        word: "w",
                        alien: "z"
                    }, Object.keys(n).length;
                }, h = function(e, a) {
                    if (D[e]) throw new Error("Tag " + e + " already exists");
                    D[e] = a;
                };
                return d({
                    quoted_phrase: !1
                }), n.defineConfig = d, n.tokenize = function(n) {
                    return a = [], s(n, e), a;
                }, n.getTokensFP = function() {
                    var e = [];
                    return a.forEach(function(a) {
                        e.push(D[a.tag] ? D[a.tag] : a.value);
                    }), e.join("");
                }, n.addTag = h, n.addRegex = function(a, n, t) {
                    if (!D[n] && !t) throw new Error("Tag " + n + " doesn't exist; Provide a 'fingerprintCode' to add it as a tag.");
                    D[n] || h(n, t), e.unshift({
                        regex: a,
                        category: n
                    });
                }, n;
            };
        },
        327: (e)=>{
            "use strict";
            e.exports = JSON.parse('{"af":["\'n","aan","af","al","as","baie","by","daar","dag","dat","die","dit","een","ek","en","gaan","ges\xea","haar","het","hom","hulle","hy","in","is","jou","jy","kan","kom","ma","maar","met","my","na","nie","om","ons","op","saam","sal","se","sien","so","sy","te","toe","uit","van","vir","was","wat","ŉ"],"ar":["،","آض","آمينَ","آه","آهاً","آي","أ","أب","أجل","أجمع","أخ","أخذ","أصبح","أضحى","أقبل","أقل","أكثر","ألا","أم","أما","أمامك","أمامكَ","أمسى","أمّا","أن","أنا","أنت","أنتم","أنتما","أنتن","أنتِ","أنشأ","أنّى","أو","أوشك","أولئك","أولئكم","أولاء","أولالك","أوّهْ","أي","أيا","أين","أينما","أيّ","أَنَّ","أََيُّ","أُفٍّ","إذ","إذا","إذاً","إذما","إذن","إلى","إليكم","إليكما","إليكنّ","إليكَ","إلَيْكَ","إلّا","إمّا","إن","إنّما","إي","إياك","إياكم","إياكما","إياكن","إيانا","إياه","إياها","إياهم","إياهما","إياهن","إياي","إيهٍ","إِنَّ","ا","ابتدأ","اثر","اجل","احد","اخرى","اخلولق","اذا","اربعة","ارتدّ","استحال","اطار","اعادة","اعلنت","اف","اكثر","اكد","الألاء","الألى","الا","الاخيرة","الان","الاول","الاولى","التى","التي","الثاني","الثانية","الذاتي","الذى","الذي","الذين","السابق","الف","اللائي","اللاتي","اللتان","اللتيا","اللتين","اللذان","اللذين","اللواتي","الماضي","المقبل","الوقت","الى","اليوم","اما","امام","امس","ان","انبرى","انقلب","انه","انها","او","اول","اي","ايار","ايام","ايضا","ب","بات","باسم","بان","بخٍ","برس","بسبب","بسّ","بشكل","بضع","بطآن","بعد","بعض","بك","بكم","بكما","بكن","بل","بلى","بما","بماذا","بمن","بن","بنا","به","بها","بي","بيد","بين","بَسْ","بَلْهَ","بِئْسَ","تانِ","تانِك","تبدّل","تجاه","تحوّل","تلقاء","تلك","تلكم","تلكما","تم","تينك","تَيْنِ","تِه","تِي","ثلاثة","ثم","ثمّ","ثمّة","ثُمَّ","جعل","جلل","جميع","جير","حار","حاشا","حاليا","حاي","حتى","حرى","حسب","حم","حوالى","حول","حيث","حيثما","حين","حيَّ","حَبَّذَا","حَتَّى","حَذارِ","خلا","خلال","دون","دونك","ذا","ذات","ذاك","ذانك","ذانِ","ذلك","ذلكم","ذلكما","ذلكن","ذو","ذوا","ذواتا","ذواتي","ذيت","ذينك","ذَيْنِ","ذِه","ذِي","راح","رجع","رويدك","ريث","رُبَّ","زيارة","سبحان","سرعان","سنة","سنوات","سوف","سوى","سَاءَ","سَاءَمَا","شبه","شخصا","شرع","شَتَّانَ","صار","صباح","صفر","صهٍ","صهْ","ضد","ضمن","طاق","طالما","طفق","طَق","ظلّ","عاد","عام","عاما","عامة","عدا","عدة","عدد","عدم","عسى","عشر","عشرة","علق","على","عليك","عليه","عليها","علًّ","عن","عند","عندما","عوض","عين","عَدَسْ","عَمَّا","غدا","غير","ـ","ف","فان","فلان","فو","فى","في","فيم","فيما","فيه","فيها","قال","قام","قبل","قد","قطّ","قلما","قوة","كأنّما","كأين","كأيّ","كأيّن","كاد","كان","كانت","كذا","كذلك","كرب","كل","كلا","كلاهما","كلتا","كلم","كليكما","كليهما","كلّما","كلَّا","كم","كما","كي","كيت","كيف","كيفما","كَأَنَّ","كِخ","لئن","لا","لات","لاسيما","لدن","لدى","لعمر","لقاء","لك","لكم","لكما","لكن","لكنَّما","لكي","لكيلا","للامم","لم","لما","لمّا","لن","لنا","له","لها","لو","لوكالة","لولا","لوما","لي","لَسْتَ","لَسْتُ","لَسْتُم","لَسْتُمَا","لَسْتُنَّ","لَسْتِ","لَسْنَ","لَعَلَّ","لَكِنَّ","لَيْتَ","لَيْسَ","لَيْسَا","لَيْسَتَا","لَيْسَتْ","لَيْسُوا","لَِسْنَا","ما","ماانفك","مابرح","مادام","ماذا","مازال","مافتئ","مايو","متى","مثل","مذ","مساء","مع","معاذ","مقابل","مكانكم","مكانكما","مكانكنّ","مكانَك","مليار","مليون","مما","ممن","من","منذ","منها","مه","مهما","مَنْ","مِن","نحن","نحو","نعم","نفس","نفسه","نهاية","نَخْ","نِعِمّا","نِعْمَ","ها","هاؤم","هاكَ","هاهنا","هبّ","هذا","هذه","هكذا","هل","هلمَّ","هلّا","هم","هما","هن","هنا","هناك","هنالك","هو","هي","هيا","هيت","هيّا","هَؤلاء","هَاتانِ","هَاتَيْنِ","هَاتِه","هَاتِي","هَجْ","هَذا","هَذانِ","هَذَيْنِ","هَذِه","هَذِي","هَيْهَاتَ","و","و6","وا","واحد","واضاف","واضافت","واكد","وان","واهاً","واوضح","وراءَك","وفي","وقال","وقالت","وقد","وقف","وكان","وكانت","ولا","ولم","ومن","وهو","وهي","ويكأنّ","وَيْ","وُشْكَانََ","يكون","يمكن","يوم","ّأيّان"],"hy":["այդ","այլ","այն","այս","դու","դուք","եմ","են","ենք","ես","եք","է","էի","էին","էինք","էիր","էիք","էր","ըստ","թ","ի","ին","իսկ","իր","կամ","համար","հետ","հետո","մենք","մեջ","մի","ն","նա","նաև","նրա","նրանք","որ","որը","որոնք","որպես","ու","ում","պիտի","վրա","և"],"eu":["al","anitz","arabera","asko","baina","bat","batean","batek","bati","batzuei","batzuek","batzuetan","batzuk","bera","beraiek","berau","berauek","bere","berori","beroriek","beste","bezala","da","dago","dira","ditu","du","dute","edo","egin","ere","eta","eurak","ez","gainera","gu","gutxi","guzti","haiei","haiek","haietan","hainbeste","hala","han","handik","hango","hara","hari","hark","hartan","hau","hauei","hauek","hauetan","hemen","hemendik","hemengo","hi","hona","honek","honela","honetan","honi","hor","hori","horiei","horiek","horietan","horko","horra","horrek","horrela","horretan","horri","hortik","hura","izan","ni","noiz","nola","non","nondik","nongo","nor","nora","ze","zein","zen","zenbait","zenbat","zer","zergatik","ziren","zituen","zu","zuek","zuen","zuten"],"bn":["অতএব","অথচ","অথবা","অনুযায়ী","অনেক","অনেকে","অনেকেই","অন্তত","অন্য","অবধি","অবশ্য","অর্থাত","আই","আগামী","আগে","আগেই","আছে","আজ","আদ্যভাগে","আপনার","আপনি","আবার","আমরা","আমাকে","আমাদের","আমার","আমি","আর","আরও","ই","ইত্যাদি","ইহা","উচিত","উত্তর","উনি","উপর","উপরে","এ","এঁদের","এঁরা","এই","একই","একটি","একবার","একে","এক্","এখন","এখনও","এখানে","এখানেই","এটা","এটাই","এটি","এত","এতটাই","এতে","এদের","এব","এবং","এবার","এমন","এমনকী","এমনি","এর","এরা","এল","এস","এসে","ঐ","ও","ওঁদের","ওঁর","ওঁরা","ওই","ওকে","ওখানে","ওদের","ওর","ওরা","কখনও","কত","কবে","কমনে","কয়েক","কয়েকটি","করছে","করছেন","করতে","করবে","করবেন","করলে","করলেন","করা","করাই","করায়","করার","করি","করিতে","করিয়া","করিয়ে","করে","করেই","করেছিলেন","করেছে","করেছেন","করেন","কাউকে","কাছ","কাছে","কাজ","কাজে","কারও","কারণ","কি","কিংবা","কিছু","কিছুই","কিন্তু","কী","কে","কেউ","কেউই","কেখা","কেন","কোটি","কোন","কোনও","কোনো","ক্ষেত্রে","কয়েক","খুব","গিয়ে","গিয়েছে","গিয়ে","গুলি","গেছে","গেল","গেলে","গোটা","চলে","চান","চায়","চার","চালু","চেয়ে","চেষ্টা","ছাড়া","ছাড়াও","ছিল","ছিলেন","জন","জনকে","জনের","জন্য","জন্যওজে","জানতে","জানা","জানানো","জানায়","জানিয়ে","জানিয়েছে","জে","জ্নজন","টি","ঠিক","তখন","তত","তথা","তবু","তবে","তা","তাঁকে","তাঁদের","তাঁর","তাঁরা","তাঁাহারা","তাই","তাও","তাকে","তাতে","তাদের","তার","তারপর","তারা","তারৈ","তাহলে","তাহা","তাহাতে","তাহার","তিনঐ","তিনি","তিনিও","তুমি","তুলে","তেমন","তো","তোমার","থাকবে","থাকবেন","থাকা","থাকায়","থাকে","থাকেন","থেকে","থেকেই","থেকেও","দিকে","দিতে","দিন","দিয়ে","দিয়েছে","দিয়েছেন","দিলেন","দু","দুই","দুটি","দুটো","দেওয়া","দেওয়ার","দেওয়া","দেখতে","দেখা","দেখে","দেন","দেয়","দ্বারা","ধরা","ধরে","ধামার","নতুন","নয়","না","নাই","নাকি","নাগাদ","নানা","নিজে","নিজেই","নিজেদের","নিজের","নিতে","নিয়ে","নিয়ে","নেই","নেওয়া","নেওয়ার","নেওয়া","নয়","পক্ষে","পর","পরে","পরেই","পরেও","পর্যন্ত","পাওয়া","পাচ","পারি","পারে","পারেন","পি","পেয়ে","পেয়্র্","প্রতি","প্রথম","প্রভৃতি","প্রযন্ত","প্রাথমিক","প্রায়","প্রায়","ফলে","ফিরে","ফের","বক্তব্য","বদলে","বন","বরং","বলতে","বলল","বললেন","বলা","বলে","বলেছেন","বলেন","বসে","বহু","বা","বাদে","বার","বি","বিনা","বিভিন্ন","বিশেষ","বিষয়টি","বেশ","বেশি","ব্যবহার","ব্যাপারে","ভাবে","ভাবেই","মতো","মতোই","মধ্যভাগে","মধ্যে","মধ্যেই","মধ্যেও","মনে","মাত্র","মাধ্যমে","মোট","মোটেই","যখন","যত","যতটা","যথেষ্ট","যদি","যদিও","যা","যাঁর","যাঁরা","যাওয়া","যাওয়ার","যাওয়া","যাকে","যাচ্ছে","যাতে","যাদের","যান","যাবে","যায়","যার","যারা","যিনি","যে","যেখানে","যেতে","যেন","যেমন","র","রকম","রয়েছে","রাখা","রেখে","লক্ষ","শুধু","শুরু","সঙ্গে","সঙ্গেও","সব","সবার","সমস্ত","সম্প্রতি","সহ","সহিত","সাধারণ","সামনে","সি","সুতরাং","সে","সেই","সেখান","সেখানে","সেটা","সেটাই","সেটাও","সেটি","স্পষ্ট","স্বয়ং","হইতে","হইবে","হইয়া","হওয়া","হওয়ায়","হওয়ার","হচ্ছে","হত","হতে","হতেই","হন","হবে","হবেন","হয়","হয়তো","হয়নি","হয়ে","হয়েই","হয়েছিল","হয়েছে","হয়েছেন","হল","হলে","হলেই","হলেও","হলো","হাজার","হিসাবে","হৈলে","হোক","হয়"],"br":["\'blam","\'d","\'m","\'r","\'ta","\'vat","\'z","\'zo","a","a:","aba","abalamour","abaoe","ac\'hane","ac\'hanoc\'h","ac\'hanomp","ac\'hanon","ac\'hanout","adal","adalek","adarre","ae","aec\'h","aed","aemp","aen","aent","aes","afe","afec\'h","afed","afemp","afen","afent","afes","ag","ah","aimp","aint","aio","aiou","aje","ajec\'h","ajed","ajemp","ajen","ajent","ajes","al","alato","alies","aliesa\xf1","alkent","all","allas","allo","all\xf4","am","ama\xf1","amzer","an","anezha\xf1","anezhe","anezhi","anezho","anvet","aon","aotren","ar","arall","araok","araoki","araoza\xf1","araozo","araozoc\'h","araozomp","araozon","araozor","araozout","arbenn","arre","atalek","atav","az","azalek","aziraza\xf1","azirazi","azirazo","azirazoc\'h","azirazomp","azirazon","azirazor","azirazout","b:","ba","ba\'l","ba\'n","ba\'r","bad","bah","bal","ban","bar","basta\xf1","befe","bell","benaos","benn","bennag","bennak","bennozh","bep","bepred","berr","berzh","bet","betek","betra","bev","bevet","bez","beza\xf1","beze","bezent","bezet","bezh","bezit","bezomp","bihan","bije","biou","biskoazh","blam","bo","boa","bominapl","boudoudom","bouez","boull","boum","bout","bras","brasa\xf1","brav","bravo","brema\xf1","bres","brokenn","bronn","brrr","brutal","buhezek","c\'h:","c\'haout","c\'he","c\'hem","c\'herz","c\'he\xf1ver","c\'hichen","c\'hiz","c\'hoazh","c\'horre","c\'houde","c\'houst","c\'hreiz","c\'hwec\'h","c\'hwec\'hvet","c\'hwezek","c\'hwi","ch:","chaous","chik","chit","chom","chut","d\'","d\'al","d\'an","d\'ar","d\'az","d\'e","d\'he","d\'ho","d\'hol","d\'hon","d\'hor","d\'o","d\'ober","d\'ul","d\'un","d\'ur","d:","da","dak","daka","dal","dalbezh","dalc\'hmat","dalit","damdost","damhe\xf1vel","damm","dan","danvez","dao","daol","daonet","daou","daoust","daouzek","daouzekvet","darn","dastrewi\xf1","dav","davedoc\'h","davedomp","davedon","davedor","davedout","davet","daveta\xf1","davete","daveti","daveto","defe","dehou","dek","dekvet","den","deoc\'h","deomp","deor","derc\'hel","deus","dez","deze","dezha\xf1","dezhe","dezhi","dezho","di","diabarzh","diagent","diar","diaraok","diavaez","dibaoe","dibaot","dibar","dic\'hala\xf1","didiac\'h","dienn","difer","diganeoc\'h","diganeomp","diganeor","diganimp","diganin","diganit","digant","diganta\xf1","digante","diganti","diganto","digemmesk","diget","digor","digoret","dija","dije","dimp","din","dinaou","dindan","dindana\xf1","dindani","dindano","dindanoc\'h","dindanomp","dindanon","dindanor","dindanout","diouta\xf1","dioute","diouti","diouto","diouzh","diouzhin","diouzhit","diouzhoc\'h","diouzhomp","diouzhor","dirak","diraza\xf1","dirazi","dirazo","dirazoc\'h","dirazomp","dirazon","dirazor","dirazout","dishe\xf1vel","dispar","distank","dister","distera\xf1","disterig","distro","dit","divaez","diwar","diwezhat","diwezha\xf1","do","doa","doare","dont","dost","doue","douetus","douez","doug","draou","drao\xf1","dre","drede","dreist","dreista\xf1","dreisti","dreisto","dreistoc\'h","dreistomp","dreiston","dreistor","dreistout","drek","dre\xf1v","dring","dro","du","e","e:","eas","ebet","ec\'h","edo","edoc\'h","edod","edomp","edon","edont","edos","eer","eeun","efed","egedoc\'h","egedomp","egedon","egedor","egedout","eget","egeta\xf1","egete","egeti","egeto","eh","eil","eilvet","eizh","eizhvet","ejoc\'h","ejod","ejomp","ejont","ejout","el","em","emaint","emaoc\'h","emaomp","emaon","emaout","ema\xf1","eme","emeur","emeza\xf1","emezi","emezo","emezoc\'h","emezomp","emezon","emezout","emporzhia\xf1","en","end","endan","endra","enep","enna\xf1","enni","enno","ennoc\'h","ennomp","ennon","ennor","ennout","enta","eo","eomp","eont","eor","eot","er","erbet","erfin","esa","esae","espar","estlamm","estra\xf1j","eta","etre","etreoc\'h","etrezo","etrezoc\'h","etrezomp","etrezor","euh","eur","eus","evel","evelato","eveldoc\'h","eveldomp","eveldon","eveldor","eveldout","evelkent","evelta\xf1","evelte","evelti","evelto","evidoc\'h","evidomp","evidon","evidor","evidout","evit","evita\xf1","evite","eviti","evito","ez","e\xf1","f:","fac\'h","fall","fed","feiz","fenn","fezh","fin","finsalvet","foei","fouilheza\xf1","g:","gallout","ganeoc\'h","ganeomp","ganin","ganit","gant","ganta\xf1","ganti","ganto","gaout","gast","gein","gellout","genndost","genta\xf1","ger","gerz","get","ge\xf1ver","gichen","gin","giz","glan","gloev","goll","gorre","goude","gouez","gouezit","gouezomp","goulz","gounnar","gour","goust","gouze","gouzout","gra","grak","grec\'h","greiz","grenn","greomp","grit","gro\xf1s","gutez","gwall","gwashoc\'h","gwazh","gwech","gwechall","gwecho\xf9","gwell","gwezh","gwezhall","gwezharall","gwezho\xf9","gwig","gwirionez","gwitibunan","g\xear","h:","ha","hag","han","hanter","hanterc\'hantad","hanterkantved","harz","ha\xf1","ha\xf1val","he","hebio\xf9","hec\'h","hei","hein","hem","hema\xf1","hen","hend","henhont","henn","hennezh","hent","hep","hervez","herveza\xf1","hervezi","hervezo","hervezoc\'h","hervezomp","hervezon","hervezor","hervezout","heul","heulia\xf1","hevelep","heverk","he\xf1vel","he\xf1velat","he\xf1vela\xf1","he\xf1veli\xf1","he\xf1veloc\'h","he\xf1velout","hi","hilh","hini","hirie","hirio","hiziv","hiziviken","ho","hoali\xf1","hoc\'h","hogen","hogos","hogozik","hol","holl","hol\xe0","homa\xf1","hon","honhont","honnezh","hont","hop","hopala","hor","hou","houp","hudu","hue","hui","hum","hurrah","i","i:","in","int","is","ispisial","isurzhiet","it","ivez","izela\xf1","j:","just","k:","kae","kaer","kalon","kalz","kant","kaout","kar","kazi","keid","kein","keit","kel","kellies","kelo\xf9","kement","ken","kenkent","kenkoulz","kenment","kent","kenta\xf1","kentizh","kentoc\'h","kentre","ker","kerkent","kerz","kerzh","ket","keta","ke\xf1ver","ke\xf1verel","ke\xf1verius","kichen","kichenik","kit","kiz","klak","klek","klik","komprenet","komz","kont","korf","korre","koulskoude","koulz","koust","krak","krampouezh","krec\'h","kreiz","kuit","kwir","l:","la","laez","laoskel","laouen","lavar","lavaret","lavarout","lec\'h","lein","leizh","lerc\'h","leun","leuskel","lew","lies","liesa\xf1","lod","lusk","l\xe2r","l\xe2rout","m:","ma","ma\'z","mac\'h","mac\'hat","mac\'ha\xf1","mac\'hoc\'h","mad","maez","maksimal","mann","mar","mard","marg","marzh","mat","ma\xf1","me","memes","memestra","merkapl","mersi","mes","mesk","met","meur","mil","minimal","moan","moaniaat","mod","mont","mout","mui","muia\xf1","muioc\'h","n","n\'","n:","na","nag","naontek","naturel","nav","navet","ne","nebeudig","nebeut","nebeuta\xf1","nebeutoc\'h","neketa","nemedoc\'h","nemedomp","nemedon","nemedor","nemedout","nemet","nemeta\xf1","nemete","nemeti","nemeto","nemeur","neoac\'h","nepell","nerzh","nes","neseser","netra","neubeudo\xf9","neuhe","neuze","nevez","newazh","nez","ni","nikun","niverus","nul","o","o:","oa","oac\'h","oad","oamp","oan","oant","oar","oas","ober","oc\'h","oc\'ho","oc\'hola","oc\'hpenn","oh","ohe","oll\xe9","olole","ol\xe9","omp","on","ordin","ordinal","ouejoc\'h","ouejod","ouejomp","ouejont","ouejout","ouek","ouezas","ouezi","ouezimp","ouezin","ouezint","ouezis","ouezo","ouezoc\'h","ouezor","ouf","oufe","oufec\'h","oufed","oufemp","oufen","oufent","oufes","ouie","ouiec\'h","ouied","ouiemp","ouien","ouient","ouies","ouije","ouijec\'h","ouijed","ouijemp","ouijen","ouijent","ouijes","out","outa\xf1","outi","outo","ouzer","ouzh","ouzhin","ouzhit","ouzhoc\'h","ouzhomp","ouzhor","ouzhpenn","ouzhpennik","ouzoc\'h","ouzomp","ouzon","ouzont","ouzout","p\'","p:","pa","pad","padal","paf","pan","panevedeoc\'h","panevedo","panevedomp","panevedon","panevedout","panevet","paneveta\xf1","paneveti","pas","paseet","pe","peadra","peder","pedervet","pedervetvet","pefe","pegeit","pegement","pegen","pegiz","pegoulz","pehini","pelec\'h","pell","pemod","pemp","pempved","pemzek","penaos","penn","peogwir","peotramant","pep","perak","perc\'henna\xf1","pergen","permeti\xf1","peseurt","pet","petiaoul","petoare","petra","peur","peurgetket","peurhe\xf1vel","peurliesa\xf1","peurvuia\xf1","peus","peustost","peuz","pevar","pevare","pevarevet","pevarzek","pez","peze","pezh","pff","pfft","pfut","picher","pif","pife","pign","pije","pikol","pitiaoul","piv","plaouf","plok","plouf","po","poa","poelladus","pof","pok","posupl","pouah","pourc\'henn","prest","prestik","prim","prin","provostapl","pst","pu","pur","r:","ra","rae","raec\'h","raed","raemp","raen","raent","raes","rafe","rafec\'h","rafed","rafemp","rafen","rafent","rafes","rag","raimp","raint","raio","raje","rajec\'h","rajed","rajemp","rajen","rajent","rajes","rak","ral","ran","rankout","raok","razh","re","reas","reer","regenno\xf9","rei\xf1","rejoc\'h","rejod","rejomp","rejont","rejout","rener","renta\xf1","reoc\'h","reomp","reont","reor","reot","resis","ret","reve","rez","ri","rik","rin","ris","rit","rouez","s:","sac\'h","sant","sav","sa\xf1set","se","sed","seitek","seizh","seizhvet","sell","sellit","ser","setu","seul","seurt","siwazh","skigna\xf1","skoaz","skouer","sort","souden","souvita\xf1","so\xf1j","speria\xf1","spriri\xf1","stad","stlabeza\xf1","stop","strana\xf1","strewi\xf1","strishaat","stumm","sujed","surtoud","t:","ta","taer","tailh","tak","tal","talvoudegezh","tamm","tanav","taol","te","techet","teir","teirvet","telt","teltenn","teus","teut","teuteu","ti","tik","toa","tok","tost","tostig","toud","touesk","touez","toull","tra","trantenn","trao\xf1","trawalc\'h","tre","trede","tregont","tremenet","tri","trivet","triwec\'h","trizek","tro","trugarez","trumm","tsoin","tsouin","tu","tud","u:","ugent","uhel","uhela\xf1","ul","un","unan","unanez","unanig","unnek","unnekvet","ur","urzh","us","v:","va","vale","van","vare","vat","vefe","vefec\'h","vefed","vefemp","vefen","vefent","vefes","vesk","vete","vez","vezan","veza\xf1","veze","vezec\'h","vezed","vezemp","vezen","vezent","vezer","vezes","vezez","vezit","vezomp","vezont","vi","vihan","vihana\xf1","vije","vijec\'h","vijed","vijemp","vijen","vijent","vijes","viken","vimp","vin","vint","vior","viot","virviken","viskoazh","vlan","vlaou","vo","vod","voe","voec\'h","voed","voemp","voen","voent","voes","vont","vostapl","vrac\'h","vrasa\xf1","vrema\xf1","w:","walc\'h","war","warna\xf1","warni","warno","warnoc\'h","warnomp","warnon","warnor","warnout","wazh","wech","wecho\xf9","well","y:","you","youadenn","youc\'hadenn","youc\'hou","z:","za","zan","zaw","zeu","zi","ziar","zigarez","ziget","zindan","zioc\'h","ziouzh","zirak","zivout","ziwar","ziwezha\xf1","zo","zoken","zokenoc\'h","zouesk","zouez","zro","zu"],"bg":["а","автентичен","аз","ако","ала","бе","без","беше","би","бивш","бивша","бившо","бил","била","били","било","благодаря","близо","бъдат","бъде","бяха","в","вас","ваш","ваша","вероятно","вече","взема","ви","вие","винаги","внимава","време","все","всеки","всички","всичко","всяка","във","въпреки","върху","г","ги","главен","главна","главно","глас","го","година","години","годишен","д","да","дали","два","двама","двамата","две","двете","ден","днес","дни","до","добра","добре","добро","добър","докато","докога","дори","досега","доста","друг","друга","други","е","евтин","едва","един","една","еднаква","еднакви","еднакъв","едно","екип","ето","живот","за","забавям","зад","заедно","заради","засега","заспал","затова","защо","защото","и","из","или","им","има","имат","иска","й","каза","как","каква","какво","както","какъв","като","кога","когато","което","които","кой","който","колко","която","къде","където","към","лесен","лесно","ли","лош","м","май","малко","ме","между","мек","мен","месец","ми","много","мнозина","мога","могат","може","мокър","моля","момента","му","н","на","над","назад","най","направи","напред","например","нас","не","него","нещо","нея","ни","ние","никой","нито","нищо","но","нов","нова","нови","новина","някои","някой","няколко","няма","обаче","около","освен","особено","от","отгоре","отново","още","пак","по","повече","повечето","под","поне","поради","после","почти","прави","пред","преди","през","при","пък","първата","първи","първо","пъти","равен","равна","с","са","сам","само","се","сега","си","син","скоро","след","следващ","сме","смях","според","сред","срещу","сте","съм","със","също","т","т.н.","тази","така","такива","такъв","там","твой","те","тези","ти","то","това","тогава","този","той","толкова","точно","три","трябва","тук","тъй","тя","тях","у","утре","харесва","хиляди","ч","часа","че","често","чрез","ще","щом","юмрук","я","як"],"ca":["a","abans","ac\xed","ah","aix\xed","aix\xf2","al","aleshores","algun","alguna","algunes","alguns","alhora","all\xe0","all\xed","all\xf2","als","altra","altre","altres","amb","ambdues","ambd\xf3s","anar","ans","apa","aquell","aquella","aquelles","aquells","aquest","aquesta","aquestes","aquests","aqu\xed","baix","bastant","b\xe9","cada","cadascuna","cadascunes","cadascuns","cadasc\xfa","com","consegueixo","conseguim","conseguir","consigueix","consigueixen","consigueixes","contra","d\'un","d\'una","d\'unes","d\'uns","dalt","de","del","dels","des","des de","despr\xe9s","dins","dintre","donat","doncs","durant","e","eh","el","elles","ells","els","em","en","encara","ens","entre","era","erem","eren","eres","es","esta","estan","estat","estava","estaven","estem","esteu","estic","est\xe0","est\xe0vem","est\xe0veu","et","etc","ets","fa","faig","fan","fas","fem","fer","feu","fi","fins","fora","gaireb\xe9","ha","han","has","haver","havia","he","hem","heu","hi","ho","i","igual","iguals","incl\xf2s","ja","jo","l\'hi","la","les","li","li\'n","llarg","llavors","m\'he","ma","mal","malgrat","mateix","mateixa","mateixes","mateixos","me","mentre","meu","meus","meva","meves","mode","molt","molta","moltes","molts","mon","mons","m\xe9s","n\'he","n\'hi","ne","ni","no","nogensmenys","nom\xe9s","nosaltres","nostra","nostre","nostres","o","oh","oi","on","pas","pel","pels","per","per que","perqu\xe8","per\xf2","poc","poca","pocs","podem","poden","poder","podeu","poques","potser","primer","propi","puc","qual","quals","quan","quant","que","quelcom","qui","quin","quina","quines","quins","qu\xe8","s\'ha","s\'han","sa","sabem","saben","saber","sabeu","sap","saps","semblant","semblants","sense","ser","ses","seu","seus","seva","seves","si","sobre","sobretot","soc","solament","sols","som","son","sons","sota","sou","s\xf3c","s\xf3n","t\'ha","t\'han","t\'he","ta","tal","tamb\xe9","tampoc","tan","tant","tanta","tantes","te","tene","tenim","tenir","teniu","teu","teus","teva","teves","tinc","ton","tons","tot","tota","totes","tots","un","una","unes","uns","us","va","vaig","vam","van","vas","veu","vosaltres","vostra","vostre","vostres","\xe9rem","\xe9reu","\xe9s","\xe9ssent","\xfaltim","\xfas"],"zh":["、","。","〈","〉","《","》","一","一个","一些","一何","一切","一则","一方面","一旦","一来","一样","一种","一般","一转眼","七","万一","三","上","上下","下","不","不仅","不但","不光","不单","不只","不外乎","不如","不妨","不尽","不尽然","不得","不怕","不惟","不成","不拘","不料","不是","不比","不然","不特","不独","不管","不至于","不若","不论","不过","不问","与","与其","与其说","与否","与此同时","且","且不说","且说","两者","个","个别","中","临","为","为了","为什么","为何","为止","为此","为着","乃","乃至","乃至于","么","之","之一","之所以","之类","乌乎","乎","乘","九","也","也好","也罢","了","二","二来","于","于是","于是乎","云云","云尔","五","些","亦","人","人们","人家","什","什么","什么样","今","介于","仍","仍旧","从","从此","从而","他","他人","他们","他们们","以","以上","以为","以便","以免","以及","以故","以期","以来","以至","以至于","以致","们","任","任何","任凭","会","似的","但","但凡","但是","何","何以","何况","何处","何时","余外","作为","你","你们","使","使得","例如","依","依据","依照","便于","俺","俺们","倘","倘使","倘或","倘然","倘若","借","借傥然","假使","假如","假若","做","像","儿","先不先","光","光是","全体","全部","八","六","兮","共","关于","关于具体地说","其","其一","其中","其二","其他","其余","其它","其次","具体地说","具体说来","兼之","内","再","再其次","再则","再有","再者","再者说","再说","冒","冲","况且","几","几时","凡","凡是","凭","凭借","出于","出来","分","分别","则","则甚","别","别人","别处","别是","别的","别管","别说","到","前后","前此","前者","加之","加以","区","即","即令","即使","即便","即如","即或","即若","却","去","又","又及","及","及其","及至","反之","反而","反过来","反过来说","受到","另","另一方面","另外","另悉","只","只当","只怕","只是","只有","只消","只要","只限","叫","叮咚","可","可以","可是","可见","各","各个","各位","各种","各自","同","同时","后","后者","向","向使","向着","吓","吗","否则","吧","吧哒","含","吱","呀","呃","呕","呗","呜","呜呼","呢","呵","呵呵","呸","呼哧","咋","和","咚","咦","咧","咱","咱们","咳","哇","哈","哈哈","哉","哎","哎呀","哎哟","哗","哟","哦","哩","哪","哪个","哪些","哪儿","哪天","哪年","哪怕","哪样","哪边","哪里","哼","哼唷","唉","唯有","啊","啐","啥","啦","啪达","啷当","喂","喏","喔唷","喽","嗡","嗡嗡","嗬","嗯","嗳","嘎","嘎登","嘘","嘛","嘻","嘿","嘿嘿","四","因","因为","因了","因此","因着","因而","固然","在","在下","在于","地","基于","处在","多","多么","多少","大","大家","她","她们","好","如","如上","如上所述","如下","如何","如其","如同","如是","如果","如此","如若","始而","孰料","孰知","宁","宁可","宁愿","宁肯","它","它们","对","对于","对待","对方","对比","将","小","尔","尔后","尔尔","尚且","就","就是","就是了","就是说","就算","就要","尽","尽管","尽管如此","岂但","己","已","已矣","巴","巴巴","年","并","并且","庶乎","庶几","开外","开始","归","归齐","当","当地","当然","当着","彼","彼时","彼此","往","待","很","得","得了","怎","怎么","怎么办","怎么样","怎奈","怎样","总之","总的来看","总的来说","总的说来","总而言之","恰恰相反","您","惟其","慢说","我","我们","或","或则","或是","或曰","或者","截至","所","所以","所在","所幸","所有","才","才能","打","打从","把","抑或","拿","按","按照","换句话说","换言之","据","据此","接着","故","故此","故而","旁人","无","无宁","无论","既","既往","既是","既然","日","时","时候","是","是以","是的","更","曾","替","替代","最","月","有","有些","有关","有及","有时","有的","望","朝","朝着","本","本人","本地","本着","本身","来","来着","来自","来说","极了","果然","果真","某","某个","某些","某某","根据","欤","正值","正如","正巧","正是","此","此地","此处","此外","此时","此次","此间","毋宁","每","每当","比","比及","比如","比方","没奈何","沿","沿着","漫说","点","焉","然则","然后","然而","照","照着","犹且","犹自","甚且","甚么","甚或","甚而","甚至","甚至于","用","用来","由","由于","由是","由此","由此可见","的","的确","的话","直到","相对而言","省得","看","眨眼","着","着呢","矣","矣乎","矣哉","离","秒","称","竟而","第","等","等到","等等","简言之","管","类如","紧接着","纵","纵令","纵使","纵然","经","经过","结果","给","继之","继后","继而","综上所述","罢了","者","而","而且","而况","而后","而外","而已","而是","而言","能","能否","腾","自","自个儿","自从","自各儿","自后","自家","自己","自打","自身","至","至于","至今","至若","致","般的","若","若夫","若是","若果","若非","莫不然","莫如","莫若","虽","虽则","虽然","虽说","被","要","要不","要不是","要不然","要么","要是","譬喻","譬如","让","许多","论","设使","设或","设若","诚如","诚然","该","说","说来","请","诸","诸位","诸如","谁","谁人","谁料","谁知","贼死","赖以","赶","起","起见","趁","趁着","越是","距","跟","较","较之","边","过","还","还是","还有","还要","这","这一来","这个","这么","这么些","这么样","这么点儿","这些","这会儿","这儿","这就是说","这时","这样","这次","这般","这边","这里","进而","连","连同","逐步","通过","遵循","遵照","那","那个","那么","那么些","那么样","那些","那会儿","那儿","那时","那样","那般","那边","那里","都","鄙人","鉴于","针对","阿","除","除了","除外","除开","除此之外","除非","随","随后","随时","随着","难道说","零","非","非但","非徒","非特","非独","靠","顺","顺着","首先","︿","！","＃","＄","％","＆","（","）","＊","＋","，","０","１","２","３","４","５","６","７","８","９","：","；","＜","＞","？","＠","［","］","｛","｜","｝","～","￥"],"hr":["a","ako","ali","bi","bih","bila","bili","bilo","bio","bismo","biste","biti","bumo","da","do","duž","ga","hoće","hoćemo","hoćete","hoćeš","hoću","i","iako","ih","ili","iz","ja","je","jedna","jedne","jedno","jer","jesam","jesi","jesmo","jest","jeste","jesu","jim","joj","još","ju","kada","kako","kao","koja","koje","koji","kojima","koju","kroz","li","me","mene","meni","mi","mimo","moj","moja","moje","mu","na","nad","nakon","nam","nama","nas","naš","naša","naše","našeg","ne","nego","neka","neki","nekog","neku","nema","netko","neće","nećemo","nećete","nećeš","neću","nešto","ni","nije","nikoga","nikoje","nikoju","nisam","nisi","nismo","niste","nisu","njega","njegov","njegova","njegovo","njemu","njezin","njezina","njezino","njih","njihov","njihova","njihovo","njim","njima","njoj","nju","no","o","od","odmah","on","ona","oni","ono","ova","pa","pak","po","pod","pored","prije","s","sa","sam","samo","se","sebe","sebi","si","smo","ste","su","sve","svi","svog","svoj","svoja","svoje","svom","ta","tada","taj","tako","te","tebe","tebi","ti","to","toj","tome","tu","tvoj","tvoja","tvoje","u","uz","vam","vama","vas","vaš","vaša","vaše","već","vi","vrlo","za","zar","će","ćemo","ćete","ćeš","ću","što"],"cs":["a","aby","ahoj","aj","ale","anebo","ani","aniž","ano","asi","aspoň","atd","atp","az","ačkoli","až","bez","beze","bl\xedzko","bohužel","brzo","bude","budem","budeme","budes","budete","budeš","budou","budu","by","byl","byla","byli","bylo","byly","bys","byt","b\xfdt","během","chce","chceme","chcete","chceš","chci","cht\xedt","chtěj\xed","chut\'","chuti","ci","clanek","clanku","clanky","co","coz","což","cz","daleko","dalsi","dalš\xed","den","deset","design","devaten\xe1ct","devět","dnes","do","dobr\xfd","docela","dva","dvacet","dvan\xe1ct","dvě","d\xe1l","d\xe1le","děkovat","děkujeme","děkuji","email","ho","hodně","i","jak","jakmile","jako","jakož","jde","je","jeden","jeden\xe1ct","jedna","jedno","jednou","jedou","jeho","jehož","jej","jeji","jejich","jej\xed","jelikož","jemu","jen","jenom","jenž","jeste","jestli","jestliže","ještě","jež","ji","jich","jimi","jinak","jine","jin\xe9","jiz","již","jsem","jses","jseš","jsi","jsme","jsou","jste","j\xe1","j\xed","j\xedm","j\xedž","jšte","k","kam","každ\xfd","kde","kdo","kdy","kdyz","když","ke","kolik","kromě","ktera","ktere","kteri","kterou","ktery","kter\xe1","kter\xe9","kter\xfd","kteři","kteř\xed","ku","kvůli","ma","maj\xed","mate","me","mezi","mi","mit","mne","mnou","mně","moc","mohl","mohou","moje","moji","možn\xe1","muj","mus\xed","muze","my","m\xe1","m\xe1lo","m\xe1m","m\xe1me","m\xe1te","m\xe1š","m\xe9","m\xed","m\xedt","mě","můj","může","na","nad","nade","nam","napiste","napište","naproti","nas","nasi","načež","naše","naši","ne","nebo","nebyl","nebyla","nebyli","nebyly","nechť","nedělaj\xed","neděl\xe1","neděl\xe1m","neděl\xe1me","neděl\xe1te","neděl\xe1š","neg","nejsi","nejsou","nemaj\xed","nem\xe1me","nem\xe1te","neměl","neni","nen\xed","nestač\xed","nevad\xed","nez","než","nic","nich","nimi","nove","novy","nov\xe9","nov\xfd","nula","n\xe1","n\xe1m","n\xe1mi","n\xe1s","n\xe1š","n\xed","n\xedm","ně","něco","nějak","někde","někdo","němu","němuž","o","od","ode","on","ona","oni","ono","ony","osm","osmn\xe1ct","pak","patn\xe1ct","po","pod","podle","pokud","potom","pouze","pozdě","poř\xe1d","prave","prav\xe9","pred","pres","pri","pro","proc","prostě","pros\xedm","proti","proto","protoze","protože","proč","prvni","prvn\xed","pr\xe1ve","pta","pět","před","přede","přes","přese","při","přičemž","re","rovně","s","se","sedm","sedmn\xe1ct","si","sice","skoro","sm\xed","směj\xed","snad","spolu","sta","sto","strana","st\xe9","sve","svych","svym","svymi","sv\xe9","sv\xfdch","sv\xfdm","sv\xfdmi","svůj","ta","tady","tak","take","takhle","taky","takze","tak\xe9","takže","tam","tamhle","tamhleto","tamto","tato","te","tebe","tebou","ted\'","tedy","tema","ten","tento","teto","ti","tim","timto","tipy","tis\xedc","tis\xedce","to","tobě","tohle","toho","tohoto","tom","tomto","tomu","tomuto","toto","trošku","tu","tuto","tvoje","tv\xe1","tv\xe9","tvůj","ty","tyto","t\xe9ma","t\xe9to","t\xedm","t\xedmto","tě","těm","těma","těmu","třeba","tři","třin\xe1ct","u","určitě","uz","už","v","vam","vas","vase","vaše","vaši","ve","vedle","večer","vice","vlastně","vsak","vy","v\xe1m","v\xe1mi","v\xe1s","v\xe1š","v\xedce","však","všechen","všechno","všichni","vůbec","vždy","z","za","zat\xedmco","zač","zda","zde","ze","zpet","zpravy","zpr\xe1vy","zpět","čau","či","čl\xe1nek","čl\xe1nku","čl\xe1nky","čtrn\xe1ct","čtyři","šest","šestn\xe1ct","že"],"da":["ad","af","aldrig","alle","alt","anden","andet","andre","at","bare","begge","blev","blive","bliver","da","de","dem","den","denne","der","deres","det","dette","dig","din","dine","disse","dit","dog","du","efter","ej","eller","en","end","ene","eneste","enhver","er","et","far","fem","fik","fire","flere","fleste","for","fordi","forrige","fra","f\xe5","f\xe5r","f\xf8r","god","godt","ham","han","hans","har","havde","have","hej","helt","hende","hendes","her","hos","hun","hvad","hvem","hver","hvilken","hvis","hvor","hvordan","hvorfor","hvorn\xe5r","i","ikke","ind","ingen","intet","ja","jeg","jer","jeres","jo","kan","kom","komme","kommer","kun","kunne","lad","lav","lidt","lige","lille","man","mand","mange","med","meget","men","mens","mere","mig","min","mine","mit","mod","m\xe5","ned","nej","ni","nogen","noget","nogle","nu","ny","nyt","n\xe5r","n\xe6r","n\xe6ste","n\xe6sten","og","ogs\xe5","okay","om","op","os","otte","over","p\xe5","se","seks","selv","ser","ses","sig","sige","sin","sine","sit","skal","skulle","som","stor","store","syv","s\xe5","s\xe5dan","tag","tage","thi","ti","til","to","tre","ud","under","var","ved","vi","vil","ville","vor","vores","v\xe6re","v\xe6ret"],"nl":["aan","aangaande","aangezien","achte","achter","achterna","af","afgelopen","al","aldaar","aldus","alhoewel","alias","alle","allebei","alleen","alles","als","alsnog","altijd","altoos","ander","andere","anders","anderszins","beetje","behalve","behoudens","beide","beiden","ben","beneden","bent","bepaald","betreffende","bij","bijna","bijv","binnen","binnenin","blijkbaar","blijken","boven","bovenal","bovendien","bovengenoemd","bovenstaand","bovenvermeld","buiten","bv","daar","daardoor","daarheen","daarin","daarna","daarnet","daarom","daarop","daaruit","daarvanlangs","dan","dat","de","deden","deed","der","derde","derhalve","dertig","deze","dhr","die","dikwijls","dit","doch","doe","doen","doet","door","doorgaand","drie","duizend","dus","echter","een","eens","eer","eerdat","eerder","eerlang","eerst","eerste","eigen","eigenlijk","elk","elke","en","enig","enige","enigszins","enkel","er","erdoor","erg","ergens","etc","etcetera","even","eveneens","evenwel","gauw","ge","gedurende","geen","gehad","gekund","geleden","gelijk","gemoeten","gemogen","genoeg","geweest","gewoon","gewoonweg","haar","haarzelf","had","hadden","hare","heb","hebben","hebt","hedden","heeft","heel","hem","hemzelf","hen","het","hetzelfde","hier","hierbeneden","hierboven","hierin","hierna","hierom","hij","hijzelf","hoe","hoewel","honderd","hun","hunne","ieder","iedere","iedereen","iemand","iets","ik","ikzelf","in","inderdaad","inmiddels","intussen","inzake","is","ja","je","jezelf","jij","jijzelf","jou","jouw","jouwe","juist","jullie","kan","klaar","kon","konden","krachtens","kun","kunnen","kunt","laatst","later","liever","lijken","lijkt","maak","maakt","maakte","maakten","maar","mag","maken","me","meer","meest","meestal","men","met","mevr","mezelf","mij","mijn","mijnent","mijner","mijzelf","minder","miss","misschien","missen","mits","mocht","mochten","moest","moesten","moet","moeten","mogen","mr","mrs","mw","na","naar","nadat","nam","namelijk","nee","neem","negen","nemen","nergens","net","niemand","niet","niets","niks","noch","nochtans","nog","nogal","nooit","nu","nv","of","ofschoon","om","omdat","omhoog","omlaag","omstreeks","omtrent","omver","ondanks","onder","ondertussen","ongeveer","ons","onszelf","onze","onzeker","ooit","ook","op","opnieuw","opzij","over","overal","overeind","overige","overigens","paar","pas","per","precies","recent","redelijk","reeds","rond","rondom","samen","sedert","sinds","sindsdien","slechts","sommige","spoedig","steeds","tamelijk","te","tegen","tegenover","tenzij","terwijl","thans","tien","tiende","tijdens","tja","toch","toe","toen","toenmaals","toenmalig","tot","totdat","tussen","twee","tweede","u","uit","uitgezonderd","uw","vaak","vaakwat","van","vanaf","vandaan","vanuit","vanwege","veel","veeleer","veertig","verder","verscheidene","verschillende","vervolgens","via","vier","vierde","vijf","vijfde","vijftig","vol","volgend","volgens","voor","vooraf","vooral","vooralsnog","voorbij","voordat","voordezen","voordien","voorheen","voorop","voorts","vooruit","vrij","vroeg","waar","waarom","waarschijnlijk","wanneer","want","waren","was","wat","we","wederom","weer","weg","wegens","weinig","wel","weldra","welk","welke","werd","werden","werder","wezen","whatever","wie","wiens","wier","wij","wijzelf","wil","wilden","willen","word","worden","wordt","zal","ze","zei","zeker","zelf","zelfde","zelfs","zes","zeven","zich","zichzelf","zij","zijn","zijne","zijzelf","zo","zoals","zodat","zodra","zonder","zou","zouden","zowat","zulk","zulke","zullen","zult"],"en":["\'ll","\'tis","\'twas","\'ve","10","39","a","a\'s","able","ableabout","about","above","abroad","abst","accordance","according","accordingly","across","act","actually","ad","added","adj","adopted","ae","af","affected","affecting","affects","after","afterwards","ag","again","against","ago","ah","ahead","ai","ain\'t","aint","al","all","allow","allows","almost","alone","along","alongside","already","also","although","always","am","amid","amidst","among","amongst","amoungst","amount","an","and","announce","another","any","anybody","anyhow","anymore","anyone","anything","anyway","anyways","anywhere","ao","apart","apparently","appear","appreciate","appropriate","approximately","aq","ar","are","area","areas","aren","aren\'t","arent","arise","around","arpa","as","aside","ask","asked","asking","asks","associated","at","au","auth","available","aw","away","awfully","az","b","ba","back","backed","backing","backs","backward","backwards","bb","bd","be","became","because","become","becomes","becoming","been","before","beforehand","began","begin","beginning","beginnings","begins","behind","being","beings","believe","below","beside","besides","best","better","between","beyond","bf","bg","bh","bi","big","bill","billion","biol","bj","bm","bn","bo","both","bottom","br","brief","briefly","bs","bt","but","buy","bv","bw","by","bz","c","c\'mon","c\'s","ca","call","came","can","can\'t","cannot","cant","caption","case","cases","cause","causes","cc","cd","certain","certainly","cf","cg","ch","changes","ci","ck","cl","clear","clearly","click","cm","cmon","cn","co","co.","com","come","comes","computer","con","concerning","consequently","consider","considering","contain","containing","contains","copy","corresponding","could","could\'ve","couldn","couldn\'t","couldnt","course","cr","cry","cs","cu","currently","cv","cx","cy","cz","d","dare","daren\'t","darent","date","de","dear","definitely","describe","described","despite","detail","did","didn","didn\'t","didnt","differ","different","differently","directly","dj","dk","dm","do","does","doesn","doesn\'t","doesnt","doing","don","don\'t","done","dont","doubtful","down","downed","downing","downs","downwards","due","during","dz","e","each","early","ec","ed","edu","ee","effect","eg","eh","eight","eighty","either","eleven","else","elsewhere","empty","end","ended","ending","ends","enough","entirely","er","es","especially","et","et-al","etc","even","evenly","ever","evermore","every","everybody","everyone","everything","everywhere","ex","exactly","example","except","f","face","faces","fact","facts","fairly","far","farther","felt","few","fewer","ff","fi","fifteen","fifth","fifty","fify","fill","find","finds","fire","first","five","fix","fj","fk","fm","fo","followed","following","follows","for","forever","former","formerly","forth","forty","forward","found","four","fr","free","from","front","full","fully","further","furthered","furthering","furthermore","furthers","fx","g","ga","gave","gb","gd","ge","general","generally","get","gets","getting","gf","gg","gh","gi","give","given","gives","giving","gl","gm","gmt","gn","go","goes","going","gone","good","goods","got","gotten","gov","gp","gq","gr","great","greater","greatest","greetings","group","grouped","grouping","groups","gs","gt","gu","gw","gy","h","had","hadn\'t","hadnt","half","happens","hardly","has","hasn","hasn\'t","hasnt","have","haven","haven\'t","havent","having","he","he\'d","he\'ll","he\'s","hed","hell","hello","help","hence","her","here","here\'s","hereafter","hereby","herein","heres","hereupon","hers","herself","herse”","hes","hi","hid","high","higher","highest","him","himself","himse”","his","hither","hk","hm","hn","home","homepage","hopefully","how","how\'d","how\'ll","how\'s","howbeit","however","hr","ht","htm","html","http","hu","hundred","i","i\'d","i\'ll","i\'m","i\'ve","i.e.","id","ie","if","ignored","ii","il","ill","im","immediate","immediately","importance","important","in","inasmuch","inc","inc.","indeed","index","indicate","indicated","indicates","information","inner","inside","insofar","instead","int","interest","interested","interesting","interests","into","invention","inward","io","iq","ir","is","isn","isn\'t","isnt","it","it\'d","it\'ll","it\'s","itd","itll","its","itself","itse”","ive","j","je","jm","jo","join","jp","just","k","ke","keep","keeps","kept","keys","kg","kh","ki","kind","km","kn","knew","know","known","knows","kp","kr","kw","ky","kz","l","la","large","largely","last","lately","later","latest","latter","latterly","lb","lc","least","length","less","lest","let","let\'s","lets","li","like","liked","likely","likewise","line","little","lk","ll","long","longer","longest","look","looking","looks","low","lower","lr","ls","lt","ltd","lu","lv","ly","m","ma","made","mainly","make","makes","making","man","many","may","maybe","mayn\'t","maynt","mc","md","me","mean","means","meantime","meanwhile","member","members","men","merely","mg","mh","microsoft","might","might\'ve","mightn\'t","mightnt","mil","mill","million","mine","minus","miss","mk","ml","mm","mn","mo","more","moreover","most","mostly","move","mp","mq","mr","mrs","ms","msie","mt","mu","much","mug","must","must\'ve","mustn\'t","mustnt","mv","mw","mx","my","myself","myse”","mz","n","na","name","namely","nay","nc","nd","ne","near","nearly","necessarily","necessary","need","needed","needing","needn\'t","neednt","needs","neither","net","netscape","never","neverf","neverless","nevertheless","new","newer","newest","next","nf","ng","ni","nine","ninety","nl","no","no-one","nobody","non","none","nonetheless","noone","nor","normally","nos","not","noted","nothing","notwithstanding","novel","now","nowhere","np","nr","nu","null","number","numbers","nz","o","obtain","obtained","obviously","of","off","often","oh","ok","okay","old","older","oldest","om","omitted","on","once","one","one\'s","ones","only","onto","open","opened","opening","opens","opposite","or","ord","order","ordered","ordering","orders","org","other","others","otherwise","ought","oughtn\'t","oughtnt","our","ours","ourselves","out","outside","over","overall","owing","own","p","pa","page","pages","part","parted","particular","particularly","parting","parts","past","pe","per","perhaps","pf","pg","ph","pk","pl","place","placed","places","please","plus","pm","pmid","pn","point","pointed","pointing","points","poorly","possible","possibly","potentially","pp","pr","predominantly","present","presented","presenting","presents","presumably","previously","primarily","probably","problem","problems","promptly","proud","provided","provides","pt","put","puts","pw","py","q","qa","que","quickly","quite","qv","r","ran","rather","rd","re","readily","really","reasonably","recent","recently","ref","refs","regarding","regardless","regards","related","relatively","research","reserved","respectively","resulted","resulting","results","right","ring","ro","room","rooms","round","ru","run","rw","s","sa","said","same","saw","say","saying","says","sb","sc","sd","se","sec","second","secondly","seconds","section","see","seeing","seem","seemed","seeming","seems","seen","sees","self","selves","sensible","sent","serious","seriously","seven","seventy","several","sg","sh","shall","shan\'t","shant","she","she\'d","she\'ll","she\'s","shed","shell","shes","should","should\'ve","shouldn","shouldn\'t","shouldnt","show","showed","showing","shown","showns","shows","si","side","sides","significant","significantly","similar","similarly","since","sincere","site","six","sixty","sj","sk","sl","slightly","sm","small","smaller","smallest","sn","so","some","somebody","someday","somehow","someone","somethan","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specifically","specified","specify","specifying","sr","st","state","states","still","stop","strongly","su","sub","substantially","successfully","such","sufficiently","suggest","sup","sure","sv","sy","system","sz","t","t\'s","take","taken","taking","tc","td","tell","ten","tends","test","text","tf","tg","th","than","thank","thanks","thanx","that","that\'ll","that\'s","that\'ve","thatll","thats","thatve","the","their","theirs","them","themselves","then","thence","there","there\'d","there\'ll","there\'re","there\'s","there\'ve","thereafter","thereby","thered","therefore","therein","therell","thereof","therere","theres","thereto","thereupon","thereve","these","they","they\'d","they\'ll","they\'re","they\'ve","theyd","theyll","theyre","theyve","thick","thin","thing","things","think","thinks","third","thirty","this","thorough","thoroughly","those","thou","though","thoughh","thought","thoughts","thousand","three","throug","through","throughout","thru","thus","til","till","tip","tis","tj","tk","tm","tn","to","today","together","too","took","top","toward","towards","tp","tr","tried","tries","trillion","truly","try","trying","ts","tt","turn","turned","turning","turns","tv","tw","twas","twelve","twenty","twice","two","tz","u","ua","ug","uk","um","un","under","underneath","undoing","unfortunately","unless","unlike","unlikely","until","unto","up","upon","ups","upwards","us","use","used","useful","usefully","usefulness","uses","using","usually","uucp","uy","uz","v","va","value","various","vc","ve","versus","very","vg","vi","via","viz","vn","vol","vols","vs","vu","w","want","wanted","wanting","wants","was","wasn","wasn\'t","wasnt","way","ways","we","we\'d","we\'ll","we\'re","we\'ve","web","webpage","website","wed","welcome","well","wells","went","were","weren","weren\'t","werent","weve","wf","what","what\'d","what\'ll","what\'s","what\'ve","whatever","whatll","whats","whatve","when","when\'d","when\'ll","when\'s","whence","whenever","where","where\'d","where\'ll","where\'s","whereafter","whereas","whereby","wherein","wheres","whereupon","wherever","whether","which","whichever","while","whilst","whim","whither","who","who\'d","who\'ll","who\'s","whod","whoever","whole","wholl","whom","whomever","whos","whose","why","why\'d","why\'ll","why\'s","widely","width","will","willing","wish","with","within","without","won","won\'t","wonder","wont","words","work","worked","working","works","world","would","would\'ve","wouldn","wouldn\'t","wouldnt","ws","www","x","y","ye","year","years","yes","yet","you","you\'d","you\'ll","you\'re","you\'ve","youd","youll","young","younger","youngest","your","youre","yours","yourself","yourselves","youve","yt","yu","z","za","zero","zm","zr"],"eo":["adiaŭ","ajn","al","ankoraŭ","antaŭ","aŭ","bonan","bonvole","bonvolu","bv","ci","cia","cian","cin","d-ro","da","de","dek","deka","do","doktor\'","doktoro","du","dua","dum","eble","ekz","ekzemple","en","estas","estis","estos","estu","estus","eĉ","f-no","feliĉan","for","fraŭlino","ha","havas","havis","havos","havu","havus","he","ho","hu","ili","ilia","ilian","ilin","inter","io","ion","iu","iujn","iun","ja","jam","je","jes","k","kaj","ke","kio","kion","kiu","kiujn","kiun","kvankam","kvar","kvara","kvazaŭ","kvin","kvina","la","li","lia","lian","lin","malantaŭ","male","malgraŭ","mem","mi","mia","mian","min","minus","naŭ","naŭa","ne","nek","nenio","nenion","neniu","neniun","nepre","ni","nia","nian","nin","nu","nun","nur","ok","oka","oni","onia","onian","onin","plej","pli","plu","plus","por","post","preter","s-no","s-ro","se","sed","sep","sepa","ses","sesa","si","sia","sian","sin","sinjor\'","sinjorino","sinjoro","sub","super","supren","sur","tamen","tio","tion","tiu","tiujn","tiun","tra","tri","tria","tuj","tute","unu","unua","ve","verŝajne","vi","via","vian","vin","ĉi","ĉio","ĉion","ĉiu","ĉiujn","ĉiun","ĉu","ĝi","ĝia","ĝian","ĝin","ĝis","ĵus","ŝi","ŝia","ŝin"],"et":["aga","ei","et","ja","jah","kas","kui","k\xf5ik","ma","me","mida","midagi","mind","minu","mis","mu","mul","mulle","nad","nii","oled","olen","oli","oma","on","pole","sa","seda","see","selle","siin","siis","ta","te","\xe4ra"],"fi":["aiemmin","aika","aikaa","aikaan","aikaisemmin","aikaisin","aikajen","aikana","aikoina","aikoo","aikovat","aina","ainakaan","ainakin","ainoa","ainoat","aiomme","aion","aiotte","aist","aivan","ajan","alas","alemmas","alkuisin","alkuun","alla","alle","aloitamme","aloitan","aloitat","aloitatte","aloitattivat","aloitettava","aloitettevaksi","aloitettu","aloitimme","aloitin","aloitit","aloititte","aloittaa","aloittamatta","aloitti","aloittivat","alta","aluksi","alussa","alusta","annettavaksi","annetteva","annettu","ansiosta","antaa","antamatta","antoi","aoua","apu","asia","asiaa","asian","asiasta","asiat","asioiden","asioihin","asioita","asti","avuksi","avulla","avun","avutta","edelle","edelleen","edell\xe4","edelt\xe4","edemm\xe4s","edes","edess\xe4","edest\xe4","ehk\xe4","ei","eik\xe4","eilen","eiv\xe4t","eli","ellei","elleiv\xe4t","ellemme","ellen","ellet","ellette","emme","en","enemm\xe4n","eniten","ennen","ensi","ensimm\xe4inen","ensimm\xe4iseksi","ensimm\xe4isen","ensimm\xe4isen\xe4","ensimm\xe4iset","ensimm\xe4isiksi","ensimm\xe4isin\xe4","ensimm\xe4isi\xe4","ensimm\xe4ist\xe4","ensin","entinen","entisen","entisi\xe4","entisten","entist\xe4","en\xe4\xe4","eri","eritt\xe4in","erityisesti","er\xe4iden","er\xe4s","er\xe4\xe4t","esi","esiin","esill\xe4","esimerkiksi","et","eteen","etenkin","etessa","ette","ettei","ett\xe4","haikki","halua","haluaa","haluamatta","haluamme","haluan","haluat","haluatte","haluavat","halunnut","halusi","halusimme","halusin","halusit","halusitte","halusivat","halutessa","haluton","he","hei","heid\xe4n","heid\xe4t","heihin","heille","heill\xe4","heilt\xe4","heiss\xe4","heist\xe4","heit\xe4","helposti","heti","hetkell\xe4","hieman","hitaasti","hoikein","huolimatta","huomenna","hyvien","hyviin","hyviksi","hyville","hyvilt\xe4","hyvin","hyvin\xe4","hyviss\xe4","hyvist\xe4","hyvi\xe4","hyv\xe4","hyv\xe4t","hyv\xe4\xe4","h\xe4n","h\xe4neen","h\xe4nelle","h\xe4nell\xe4","h\xe4nelt\xe4","h\xe4nen","h\xe4ness\xe4","h\xe4nest\xe4","h\xe4net","h\xe4nt\xe4","ihan","ilman","ilmeisesti","itse","itsens\xe4","itse\xe4\xe4n","ja","jo","johon","joiden","joihin","joiksi","joilla","joille","joilta","joina","joissa","joista","joita","joka","jokainen","jokin","joko","joksi","joku","jolla","jolle","jolloin","jolta","jompikumpi","jona","jonka","jonkin","jonne","joo","jopa","jos","joskus","jossa","josta","jota","jotain","joten","jotenkin","jotenkuten","jotka","jotta","jouduimme","jouduin","jouduit","jouduitte","joudumme","joudun","joudutte","joukkoon","joukossa","joukosta","joutua","joutui","joutuivat","joutumaan","joutuu","joutuvat","juuri","j\xe4lkeen","j\xe4lleen","j\xe4\xe4","kahdeksan","kahdeksannen","kahdella","kahdelle","kahdelta","kahden","kahdessa","kahdesta","kahta","kahteen","kai","kaiken","kaikille","kaikilta","kaikkea","kaikki","kaikkia","kaikkiaan","kaikkialla","kaikkialle","kaikkialta","kaikkien","kaikkin","kaksi","kannalta","kannattaa","kanssa","kanssaan","kanssamme","kanssani","kanssanne","kanssasi","kauan","kauemmas","kaukana","kautta","kehen","keiden","keihin","keiksi","keille","keill\xe4","keilt\xe4","kein\xe4","keiss\xe4","keist\xe4","keitten","keitt\xe4","keit\xe4","keneen","keneksi","kenelle","kenell\xe4","kenelt\xe4","kenen","kenen\xe4","keness\xe4","kenest\xe4","kenet","kenett\xe4","kenness\xe4st\xe4","kenties","kerran","kerta","kertaa","keskell\xe4","kesken","keskim\xe4\xe4rin","ketk\xe4","ket\xe4","kiitos","kohti","koko","kokonaan","kolmas","kolme","kolmen","kolmesti","koska","koskaan","kovin","kuin","kuinka","kuinkan","kuitenkaan","kuitenkin","kuka","kukaan","kukin","kukka","kumpainen","kumpainenkaan","kumpi","kumpikaan","kumpikin","kun","kuten","kuuden","kuusi","kuutta","kylliksi","kyll\xe4","kymmenen","kyse","liian","liki","lis\xe4ksi","lis\xe4\xe4","lla","luo","luona","l\xe4hekk\xe4in","l\xe4helle","l\xe4hell\xe4","l\xe4helt\xe4","l\xe4hemm\xe4s","l\xe4hes","l\xe4hinn\xe4","l\xe4htien","l\xe4pi","mahdollisimman","mahdollista","me","meid\xe4n","meid\xe4t","meihin","meille","meill\xe4","meilt\xe4","meiss\xe4","meist\xe4","meit\xe4","melkein","melko","menee","meneet","menemme","menen","menet","menette","menev\xe4t","meni","menimme","menin","menit","meniv\xe4t","menness\xe4","mennyt","menossa","mihin","mikin","miksi","mik\xe4","mik\xe4li","mik\xe4\xe4n","mille","milloin","milloinkan","mill\xe4","milt\xe4","mink\xe4","minne","minua","minulla","minulle","minulta","minun","minussa","minusta","minut","minuun","min\xe4","miss\xe4","mist\xe4","miten","mitk\xe4","mit\xe4","mit\xe4\xe4n","moi","molemmat","mones","monesti","monet","moni","moniaalla","moniaalle","moniaalta","monta","muassa","muiden","muita","muka","mukaan","mukaansa","mukana","mutta","muu","muualla","muualle","muualta","muuanne","muulloin","muun","muut","muuta","muutama","muutaman","muuten","my\xf6hemmin","my\xf6s","my\xf6skin","my\xf6sk\xe4\xe4n","my\xf6t\xe4","ne","nelj\xe4","nelj\xe4n","nelj\xe4\xe4","niiden","niihin","niiksi","niille","niill\xe4","niilt\xe4","niin","niin\xe4","niiss\xe4","niist\xe4","niit\xe4","noiden","noihin","noiksi","noilla","noille","noilta","noin","noina","noissa","noista","noita","nopeammin","nopeasti","nopeiten","nro","nuo","nyt","n\xe4iden","n\xe4ihin","n\xe4iksi","n\xe4ille","n\xe4ill\xe4","n\xe4ilt\xe4","n\xe4in","n\xe4in\xe4","n\xe4iss\xe4","n\xe4iss\xe4hin","n\xe4iss\xe4lle","n\xe4iss\xe4lt\xe4","n\xe4iss\xe4st\xe4","n\xe4ist\xe4","n\xe4it\xe4","n\xe4m\xe4","ohi","oikea","oikealla","oikein","ole","olemme","olen","olet","olette","oleva","olevan","olevat","oli","olimme","olin","olisi","olisimme","olisin","olisit","olisitte","olisivat","olit","olitte","olivat","olla","olleet","olli","ollut","oma","omaa","omaan","omaksi","omalle","omalta","oman","omassa","omat","omia","omien","omiin","omiksi","omille","omilta","omissa","omista","on","onkin","onko","ovat","paikoittain","paitsi","pakosti","paljon","paremmin","parempi","parhaillaan","parhaiten","perusteella","per\xe4ti","pian","pieneen","pieneksi","pienelle","pienell\xe4","pienelt\xe4","pienempi","pienest\xe4","pieni","pienin","poikki","puolesta","puolestaan","p\xe4\xe4lle","runsaasti","saakka","sadam","sama","samaa","samaan","samalla","samallalta","samallassa","samallasta","saman","samat","samoin","sata","sataa","satojen","se","seitsem\xe4n","sek\xe4","sen","seuraavat","siell\xe4","sielt\xe4","siihen","siin\xe4","siis","siit\xe4","sijaan","siksi","sille","silloin","sill\xe4","silti","silt\xe4","sinne","sinua","sinulla","sinulle","sinulta","sinun","sinussa","sinusta","sinut","sinuun","sin\xe4","sis\xe4kk\xe4in","sis\xe4ll\xe4","siten","sitten","sit\xe4","ssa","sta","suoraan","suuntaan","suuren","suuret","suuri","suuria","suurin","suurten","taa","taas","taemmas","tahansa","tai","takaa","takaisin","takana","takia","tall\xe4","tapauksessa","tarpeeksi","tavalla","tavoitteena","te","teid\xe4n","teid\xe4t","teihin","teille","teill\xe4","teilt\xe4","teiss\xe4","teist\xe4","teit\xe4","tietysti","todella","toinen","toisaalla","toisaalle","toisaalta","toiseen","toiseksi","toisella","toiselle","toiselta","toisemme","toisen","toisensa","toisessa","toisesta","toista","toistaiseksi","toki","tosin","tuhannen","tuhat","tule","tulee","tulemme","tulen","tulet","tulette","tulevat","tulimme","tulin","tulisi","tulisimme","tulisin","tulisit","tulisitte","tulisivat","tulit","tulitte","tulivat","tulla","tulleet","tullut","tuntuu","tuo","tuohon","tuoksi","tuolla","tuolle","tuolloin","tuolta","tuon","tuona","tuonne","tuossa","tuosta","tuota","tuot\xe4","tuskin","tyk\xf6","t\xe4h\xe4n","t\xe4ksi","t\xe4lle","t\xe4ll\xe4","t\xe4ll\xf6in","t\xe4lt\xe4","t\xe4m\xe4","t\xe4m\xe4n","t\xe4nne","t\xe4n\xe4","t\xe4n\xe4\xe4n","t\xe4ss\xe4","t\xe4st\xe4","t\xe4ten","t\xe4t\xe4","t\xe4ysin","t\xe4ytyv\xe4t","t\xe4ytyy","t\xe4\xe4ll\xe4","t\xe4\xe4lt\xe4","ulkopuolella","usea","useasti","useimmiten","usein","useita","uudeksi","uudelleen","uuden","uudet","uusi","uusia","uusien","uusinta","uuteen","uutta","vaan","vahemm\xe4n","vai","vaiheessa","vaikea","vaikean","vaikeat","vaikeilla","vaikeille","vaikeilta","vaikeissa","vaikeista","vaikka","vain","varmasti","varsin","varsinkin","varten","vasen","vasenmalla","vasta","vastaan","vastakkain","vastan","verran","viel\xe4","vierekk\xe4in","vieress\xe4","vieri","viiden","viime","viimeinen","viimeisen","viimeksi","viisi","voi","voidaan","voimme","voin","voisi","voit","voitte","voivat","vuoden","vuoksi","vuosi","vuosien","vuosina","vuotta","v\xe4hemm\xe4n","v\xe4hint\xe4\xe4n","v\xe4hiten","v\xe4h\xe4n","v\xe4lill\xe4","yhdeks\xe4n","yhden","yhdess\xe4","yhteen","yhteens\xe4","yhteydess\xe4","yhteyteen","yht\xe4","yht\xe4\xe4lle","yht\xe4\xe4ll\xe4","yht\xe4\xe4lt\xe4","yht\xe4\xe4n","yh\xe4","yksi","yksin","yksitt\xe4in","yleens\xe4","ylemm\xe4s","yli","yl\xf6s","ymp\xe4ri","\xe4lk\xf6\xf6n","\xe4l\xe4"],"fr":["a","abord","absolument","afin","ah","ai","aie","aient","aies","ailleurs","ainsi","ait","allaient","allo","allons","all\xf4","alors","anterieur","anterieure","anterieures","apres","apr\xe8s","as","assez","attendu","au","aucun","aucune","aucuns","aujourd","aujourd\'hui","aupres","auquel","aura","aurai","auraient","aurais","aurait","auras","aurez","auriez","aurions","aurons","auront","aussi","autant","autre","autrefois","autrement","autres","autrui","aux","auxquelles","auxquels","avaient","avais","avait","avant","avec","avez","aviez","avions","avoir","avons","ayant","ayez","ayons","b","bah","bas","basee","bat","beau","beaucoup","bien","bigre","bon","boum","bravo","brrr","c","car","ce","ceci","cela","celle","celle-ci","celle-l\xe0","celles","celles-ci","celles-l\xe0","celui","celui-ci","celui-l\xe0","cel\xe0","cent","cependant","certain","certaine","certaines","certains","certes","ces","cet","cette","ceux","ceux-ci","ceux-l\xe0","chacun","chacune","chaque","cher","chers","chez","chiche","chut","ch\xe8re","ch\xe8res","ci","cinq","cinquantaine","cinquante","cinquanti\xe8me","cinqui\xe8me","clac","clic","combien","comme","comment","comparable","comparables","compris","concernant","contre","couic","crac","d","da","dans","de","debout","dedans","dehors","deja","del\xe0","depuis","dernier","derniere","derriere","derri\xe8re","des","desormais","desquelles","desquels","dessous","dessus","deux","deuxi\xe8me","deuxi\xe8mement","devant","devers","devra","devrait","different","differentes","differents","diff\xe9rent","diff\xe9rente","diff\xe9rentes","diff\xe9rents","dire","directe","directement","dit","dite","dits","divers","diverse","diverses","dix","dix-huit","dix-neuf","dix-sept","dixi\xe8me","doit","doivent","donc","dont","dos","douze","douzi\xe8me","dring","droite","du","duquel","durant","d\xe8s","d\xe9but","d\xe9sormais","e","effet","egale","egalement","egales","eh","elle","elle-m\xeame","elles","elles-m\xeames","en","encore","enfin","entre","envers","environ","es","essai","est","et","etant","etc","etre","eu","eue","eues","euh","eurent","eus","eusse","eussent","eusses","eussiez","eussions","eut","eux","eux-m\xeames","exactement","except\xe9","extenso","exterieur","e\xfbmes","e\xfbt","e\xfbtes","f","fais","faisaient","faisant","fait","faites","fa\xe7on","feront","fi","flac","floc","fois","font","force","furent","fus","fusse","fussent","fusses","fussiez","fussions","fut","f\xfbmes","f\xfbt","f\xfbtes","g","gens","h","ha","haut","hein","hem","hep","hi","ho","hol\xe0","hop","hormis","hors","hou","houp","hue","hui","huit","huiti\xe8me","hum","hurrah","h\xe9","h\xe9las","i","ici","il","ils","importe","j","je","jusqu","jusque","juste","k","l","la","laisser","laquelle","las","le","lequel","les","lesquelles","lesquels","leur","leurs","longtemps","lors","lorsque","lui","lui-meme","lui-m\xeame","l\xe0","l\xe8s","m","ma","maint","maintenant","mais","malgre","malgr\xe9","maximale","me","meme","memes","merci","mes","mien","mienne","miennes","miens","mille","mince","mine","minimale","moi","moi-meme","moi-m\xeame","moindres","moins","mon","mot","moyennant","multiple","multiples","m\xeame","m\xeames","n","na","naturel","naturelle","naturelles","ne","neanmoins","necessaire","necessairement","neuf","neuvi\xe8me","ni","nombreuses","nombreux","nomm\xe9s","non","nos","notamment","notre","nous","nous-m\xeames","nouveau","nouveaux","nul","n\xe9anmoins","n\xf4tre","n\xf4tres","o","oh","oh\xe9","oll\xe9","ol\xe9","on","ont","onze","onzi\xe8me","ore","ou","ouf","ouias","oust","ouste","outre","ouvert","ouverte","ouverts","o|","o\xf9","p","paf","pan","par","parce","parfois","parle","parlent","parler","parmi","parole","parseme","partant","particulier","particuli\xe8re","particuli\xe8rement","pas","pass\xe9","pendant","pense","permet","personne","personnes","peu","peut","peuvent","peux","pff","pfft","pfut","pif","pire","pi\xe8ce","plein","plouf","plupart","plus","plusieurs","plut\xf4t","possessif","possessifs","possible","possibles","pouah","pour","pourquoi","pourrais","pourrait","pouvait","prealable","precisement","premier","premi\xe8re","premi\xe8rement","pres","probable","probante","procedant","proche","pr\xe8s","psitt","pu","puis","puisque","pur","pure","q","qu","quand","quant","quant-\xe0-soi","quanta","quarante","quatorze","quatre","quatre-vingt","quatri\xe8me","quatri\xe8mement","que","quel","quelconque","quelle","quelles","quelqu\'un","quelque","quelques","quels","qui","quiconque","quinze","quoi","quoique","r","rare","rarement","rares","relative","relativement","remarquable","rend","rendre","restant","reste","restent","restrictif","retour","revoici","revoil\xe0","rien","s","sa","sacrebleu","sait","sans","sapristi","sauf","se","sein","seize","selon","semblable","semblaient","semble","semblent","sent","sept","septi\xe8me","sera","serai","seraient","serais","serait","seras","serez","seriez","serions","serons","seront","ses","seul","seule","seulement","si","sien","sienne","siennes","siens","sinon","six","sixi\xe8me","soi","soi-m\xeame","soient","sois","soit","soixante","sommes","son","sont","sous","souvent","soyez","soyons","specifique","specifiques","speculatif","stop","strictement","subtiles","suffisant","suffisante","suffit","suis","suit","suivant","suivante","suivantes","suivants","suivre","sujet","superpose","sur","surtout","t","ta","tac","tandis","tant","tardive","te","tel","telle","tellement","telles","tels","tenant","tend","tenir","tente","tes","tic","tien","tienne","tiennes","tiens","toc","toi","toi-m\xeame","ton","touchant","toujours","tous","tout","toute","toutefois","toutes","treize","trente","tres","trois","troisi\xe8me","troisi\xe8mement","trop","tr\xe8s","tsoin","tsouin","tu","t\xe9","u","un","une","unes","uniformement","unique","uniques","uns","v","va","vais","valeur","vas","vers","via","vif","vifs","vingt","vivat","vive","vives","vlan","voici","voie","voient","voil\xe0","voire","vont","vos","votre","vous","vous-m\xeames","vu","v\xe9","v\xf4tre","v\xf4tres","w","x","y","z","zut","\xe0","\xe2","\xe7a","\xe8s","\xe9taient","\xe9tais","\xe9tait","\xe9tant","\xe9tat","\xe9tiez","\xe9tions","\xe9t\xe9","\xe9t\xe9e","\xe9t\xe9es","\xe9t\xe9s","\xeates","\xeatre","\xf4"],"gl":["a","al\xed","ao","aos","aquel","aquela","aquelas","aqueles","aquilo","aqu\xed","as","as\xed","a\xednda","ben","cando","che","co","coa","coas","comigo","con","connosco","contigo","convosco","cos","cun","cunha","cunhas","cuns","da","dalgunha","dalgunhas","dalg\xfan","dalg\xfans","das","de","del","dela","delas","deles","desde","deste","do","dos","dun","dunha","dunhas","duns","e","el","ela","elas","eles","en","era","eran","esa","esas","ese","eses","esta","estaba","estar","este","estes","estiven","estou","est\xe1","est\xe1n","eu","facer","foi","foron","fun","hab\xeda","hai","iso","isto","la","las","lle","lles","lo","los","mais","me","meu","meus","min","mi\xf1a","mi\xf1as","moi","na","nas","neste","nin","no","non","nos","nosa","nosas","noso","nosos","nun","nunha","nunhas","nuns","n\xf3s","o","os","ou","para","pero","pode","pois","pola","polas","polo","polos","por","que","se","sen\xf3n","ser","seu","seus","sexa","sido","sobre","s\xfaa","s\xfaas","tam\xe9n","tan","te","ten","ter","teu","teus","te\xf1en","te\xf1o","ti","tido","tiven","ti\xf1a","t\xfaa","t\xfaas","un","unha","unhas","uns","vos","vosa","vosas","voso","vosos","v\xf3s","\xe1","\xe9","\xf3","\xf3s"],"de":["a","ab","aber","ach","acht","achte","achten","achter","achtes","ag","alle","allein","allem","allen","aller","allerdings","alles","allgemeinen","als","also","am","an","ander","andere","anderem","anderen","anderer","anderes","anderm","andern","anderr","anders","au","auch","auf","aus","ausser","ausserdem","au\xdfer","au\xdferdem","b","bald","bei","beide","beiden","beim","beispiel","bekannt","bereits","besonders","besser","besten","bin","bis","bisher","bist","c","d","d.h","da","dabei","dadurch","daf\xfcr","dagegen","daher","dahin","dahinter","damals","damit","danach","daneben","dank","dann","daran","darauf","daraus","darf","darfst","darin","darum","darunter","dar\xfcber","das","dasein","daselbst","dass","dasselbe","davon","davor","dazu","dazwischen","da\xdf","dein","deine","deinem","deinen","deiner","deines","dem","dementsprechend","demgegen\xfcber","demgem\xe4ss","demgem\xe4\xdf","demselben","demzufolge","den","denen","denn","denselben","der","deren","derer","derjenige","derjenigen","dermassen","derma\xdfen","derselbe","derselben","des","deshalb","desselben","dessen","deswegen","dich","die","diejenige","diejenigen","dies","diese","dieselbe","dieselben","diesem","diesen","dieser","dieses","dir","doch","dort","drei","drin","dritte","dritten","dritter","drittes","du","durch","durchaus","durfte","durften","d\xfcrfen","d\xfcrft","e","eben","ebenso","ehrlich","ei","ei,","eigen","eigene","eigenen","eigener","eigenes","ein","einander","eine","einem","einen","einer","eines","einig","einige","einigem","einigen","einiger","einiges","einmal","eins","elf","en","ende","endlich","entweder","er","ernst","erst","erste","ersten","erster","erstes","es","etwa","etwas","euch","euer","eure","eurem","euren","eurer","eures","f","folgende","fr\xfcher","f\xfcnf","f\xfcnfte","f\xfcnften","f\xfcnfter","f\xfcnftes","f\xfcr","g","gab","ganz","ganze","ganzen","ganzer","ganzes","gar","gedurft","gegen","gegen\xfcber","gehabt","gehen","geht","gekannt","gekonnt","gemacht","gemocht","gemusst","genug","gerade","gern","gesagt","geschweige","gewesen","gewollt","geworden","gibt","ging","gleich","gott","gross","grosse","grossen","grosser","grosses","gro\xdf","gro\xdfe","gro\xdfen","gro\xdfer","gro\xdfes","gut","gute","guter","gutes","h","hab","habe","haben","habt","hast","hat","hatte","hatten","hattest","hattet","heisst","her","heute","hier","hin","hinter","hoch","h\xe4tte","h\xe4tten","i","ich","ihm","ihn","ihnen","ihr","ihre","ihrem","ihren","ihrer","ihres","im","immer","in","indem","infolgedessen","ins","irgend","ist","j","ja","jahr","jahre","jahren","je","jede","jedem","jeden","jeder","jedermann","jedermanns","jedes","jedoch","jemand","jemandem","jemanden","jene","jenem","jenen","jener","jenes","jetzt","k","kam","kann","kannst","kaum","kein","keine","keinem","keinen","keiner","keines","kleine","kleinen","kleiner","kleines","kommen","kommt","konnte","konnten","kurz","k\xf6nnen","k\xf6nnt","k\xf6nnte","l","lang","lange","leicht","leide","lieber","los","m","machen","macht","machte","mag","magst","mahn","mal","man","manche","manchem","manchen","mancher","manches","mann","mehr","mein","meine","meinem","meinen","meiner","meines","mensch","menschen","mich","mir","mit","mittel","mochte","mochten","morgen","muss","musst","musste","mussten","mu\xdf","mu\xdft","m\xf6chte","m\xf6gen","m\xf6glich","m\xf6gt","m\xfcssen","m\xfcsst","m\xfc\xdft","n","na","nach","nachdem","nahm","nat\xfcrlich","neben","nein","neue","neuen","neun","neunte","neunten","neunter","neuntes","nicht","nichts","nie","niemand","niemandem","niemanden","noch","nun","nur","o","ob","oben","oder","offen","oft","ohne","ordnung","p","q","r","recht","rechte","rechten","rechter","rechtes","richtig","rund","s","sa","sache","sagt","sagte","sah","satt","schlecht","schluss","schon","sechs","sechste","sechsten","sechster","sechstes","sehr","sei","seid","seien","sein","seine","seinem","seinen","seiner","seines","seit","seitdem","selbst","sich","sie","sieben","siebente","siebenten","siebenter","siebentes","sind","so","solang","solche","solchem","solchen","solcher","solches","soll","sollen","sollst","sollt","sollte","sollten","sondern","sonst","soweit","sowie","sp\xe4ter","startseite","statt","steht","suche","t","tag","tage","tagen","tat","teil","tel","tritt","trotzdem","tun","u","uhr","um","und","uns","unse","unsem","unsen","unser","unsere","unserer","unses","unter","v","vergangenen","viel","viele","vielem","vielen","vielleicht","vier","vierte","vierten","vierter","viertes","vom","von","vor","w","wahr","wann","war","waren","warst","wart","warum","was","weg","wegen","weil","weit","weiter","weitere","weiteren","weiteres","welche","welchem","welchen","welcher","welches","wem","wen","wenig","wenige","weniger","weniges","wenigstens","wenn","wer","werde","werden","werdet","weshalb","wessen","wie","wieder","wieso","will","willst","wir","wird","wirklich","wirst","wissen","wo","woher","wohin","wohl","wollen","wollt","wollte","wollten","worden","wurde","wurden","w\xe4hrend","w\xe4hrenddem","w\xe4hrenddessen","w\xe4re","w\xfcrde","w\xfcrden","x","y","z","z.b","zehn","zehnte","zehnten","zehnter","zehntes","zeit","zu","zuerst","zugleich","zum","zun\xe4chst","zur","zur\xfcck","zusammen","zwanzig","zwar","zwei","zweite","zweiten","zweiter","zweites","zwischen","zw\xf6lf","\xfcber","\xfcberhaupt","\xfcbrigens"],"el":["ένα","έναν","ένας","αι","ακομα","ακομη","ακριβως","αληθεια","αληθινα","αλλα","αλλαχου","αλλες","αλλη","αλλην","αλλης","αλλιως","αλλιωτικα","αλλο","αλλοι","αλλοιως","αλλοιωτικα","αλλον","αλλος","αλλοτε","αλλου","αλλους","αλλων","αμα","αμεσα","αμεσως","αν","ανα","αναμεσα","αναμεταξυ","ανευ","αντι","αντιπερα","αντις","ανω","ανωτερω","αξαφνα","απ","απεναντι","απο","αποψε","από","αρα","αραγε","αργα","αργοτερο","αριστερα","αρκετα","αρχικα","ας","αυριο","αυτα","αυτες","αυτεσ","αυτη","αυτην","αυτης","αυτο","αυτοι","αυτον","αυτος","αυτοσ","αυτου","αυτους","αυτουσ","αυτων","αφοτου","αφου","αἱ","αἳ","αἵ","αὐτόσ","αὐτὸς","αὖ","α∆ιακοπα","βεβαια","βεβαιοτατα","γάρ","γα","γα^","γε","γι","για","γοῦν","γρηγορα","γυρω","γὰρ","δ\'","δέ","δή","δαί","δαίσ","δαὶ","δαὶς","δε","δεν","δι","δι\'","διά","δια","διὰ","δὲ","δὴ","δ’","εαν","εαυτο","εαυτον","εαυτου","εαυτους","εαυτων","εγκαιρα","εγκαιρως","εγω","ειθε","ειμαι","ειμαστε","ειναι","εις","εισαι","εισαστε","ειστε","ειτε","ειχα","ειχαμε","ειχαν","ειχατε","ειχε","ειχες","ει∆εμη","εκ","εκαστα","εκαστες","εκαστη","εκαστην","εκαστης","εκαστο","εκαστοι","εκαστον","εκαστος","εκαστου","εκαστους","εκαστων","εκει","εκεινα","εκεινες","εκεινεσ","εκεινη","εκεινην","εκεινης","εκεινο","εκεινοι","εκεινον","εκεινος","εκεινοσ","εκεινου","εκεινους","εκεινουσ","εκεινων","εκτος","εμας","εμεις","εμενα","εμπρος","εν","ενα","εναν","ενας","ενος","εντελως","εντος","εντωμεταξυ","ενω","ενός","εξ","εξαφνα","εξης","εξισου","εξω","επ","επί","επανω","επειτα","επει∆η","επι","επισης","επομενως","εσας","εσεις","εσενα","εστω","εσυ","ετερα","ετεραι","ετερας","ετερες","ετερη","ετερης","ετερο","ετεροι","ετερον","ετερος","ετερου","ετερους","ετερων","ετουτα","ετουτες","ετουτη","ετουτην","ετουτης","ετουτο","ετουτοι","ετουτον","ετουτος","ετουτου","ετουτους","ετουτων","ετσι","ευγε","ευθυς","ευτυχως","εφεξης","εχει","εχεις","εχετε","εχθες","εχομε","εχουμε","εχουν","εχτες","εχω","εως","εἰ","εἰμί","εἰμὶ","εἰς","εἰσ","εἴ","εἴμι","εἴτε","ε∆ω","η","ημασταν","ημαστε","ημουν","ησασταν","ησαστε","ησουν","ηταν","ητανε","ητοι","ηττον","η∆η","θα","ι","ιι","ιιι","ισαμε","ισια","ισως","ισωσ","ι∆ια","ι∆ιαν","ι∆ιας","ι∆ιες","ι∆ιο","ι∆ιοι","ι∆ιον","ι∆ιος","ι∆ιου","ι∆ιους","ι∆ιων","ι∆ιως","κ","καί","καίτοι","καθ","καθε","καθεμια","καθεμιας","καθενα","καθενας","καθενος","καθετι","καθολου","καθως","και","κακα","κακως","καλα","καλως","καμια","καμιαν","καμιας","καμποσα","καμποσες","καμποση","καμποσην","καμποσης","καμποσο","καμποσοι","καμποσον","καμποσος","καμποσου","καμποσους","καμποσων","κανεις","κανεν","κανενα","κανεναν","κανενας","κανενος","καποια","καποιαν","καποιας","καποιες","καποιο","καποιοι","καποιον","καποιος","καποιου","καποιους","καποιων","καποτε","καπου","καπως","κατ","κατά","κατα","κατι","κατιτι","κατοπιν","κατω","κατὰ","καὶ","κι","κιολας","κλπ","κοντα","κτλ","κυριως","κἀν","κἂν","λιγακι","λιγο","λιγωτερο","λογω","λοιπα","λοιπον","μέν","μέσα","μή","μήτε","μία","μα","μαζι","μακαρι","μακρυα","μαλιστα","μαλλον","μας","με","μεθ","μεθαυριο","μειον","μελει","μελλεται","μεμιας","μεν","μερικα","μερικες","μερικοι","μερικους","μερικων","μεσα","μετ","μετά","μετα","μεταξυ","μετὰ","μεχρι","μη","μην","μηπως","μητε","μη∆ε","μιά","μια","μιαν","μιας","μολις","μολονοτι","μοναχα","μονες","μονη","μονην","μονης","μονο","μονοι","μονομιας","μονος","μονου","μονους","μονων","μου","μπορει","μπορουν","μπραβο","μπρος","μἐν","μὲν","μὴ","μὴν","να","ναι","νωρις","ξανα","ξαφνικα","ο","οι","ολα","ολες","ολη","ολην","ολης","ολο","ολογυρα","ολοι","ολον","ολονεν","ολος","ολοτελα","ολου","ολους","ολων","ολως","ολως∆ιολου","ομως","ομωσ","οποια","οποιαν","οποιαν∆ηποτε","οποιας","οποιας∆ηποτε","οποια∆ηποτε","οποιες","οποιες∆ηποτε","οποιο","οποιοι","οποιον","οποιον∆ηποτε","οποιος","οποιος∆ηποτε","οποιου","οποιους","οποιους∆ηποτε","οποιου∆ηποτε","οποιο∆ηποτε","οποιων","οποιων∆ηποτε","οποι∆ηποτε","οποτε","οποτε∆ηποτε","οπου","οπου∆ηποτε","οπως","οπωσ","ορισμενα","ορισμενες","ορισμενων","ορισμενως","οσα","οσα∆ηποτε","οσες","οσες∆ηποτε","οση","οσην","οσην∆ηποτε","οσης","οσης∆ηποτε","οση∆ηποτε","οσο","οσοι","οσοι∆ηποτε","οσον","οσον∆ηποτε","οσος","οσος∆ηποτε","οσου","οσους","οσους∆ηποτε","οσου∆ηποτε","οσο∆ηποτε","οσων","οσων∆ηποτε","οταν","οτι","οτι∆ηποτε","οτου","ου","ουτε","ου∆ε","οχι","οἱ","οἳ","οἷς","οὐ","οὐδ","οὐδέ","οὐδείσ","οὐδεὶς","οὐδὲ","οὐδὲν","οὐκ","οὐχ","οὐχὶ","οὓς","οὔτε","οὕτω","οὕτως","οὕτωσ","οὖν","οὗ","οὗτος","οὗτοσ","παλι","παντοτε","παντου","παντως","παρ","παρά","παρα","παρὰ","περί","περα","περι","περιπου","περισσοτερο","περσι","περυσι","περὶ","πια","πιθανον","πιο","πισω","πλαι","πλεον","πλην","ποια","ποιαν","ποιας","ποιες","ποιεσ","ποιο","ποιοι","ποιον","ποιος","ποιοσ","ποιου","ποιους","ποιουσ","ποιων","πολυ","ποσες","ποση","ποσην","ποσης","ποσοι","ποσος","ποσους","ποτε","που","πουθε","πουθενα","ποῦ","πρεπει","πριν","προ","προκειμενου","προκειται","προπερσι","προς","προσ","προτου","προχθες","προχτες","πρωτυτερα","πρόσ","πρὸ","πρὸς","πως","πωσ","σαν","σας","σε","σεις","σημερα","σιγα","σου","στα","στη","στην","στης","στις","στο","στον","στου","στους","στων","συγχρονως","συν","συναμα","συνεπως","συνηθως","συχνα","συχνας","συχνες","συχνη","συχνην","συχνης","συχνο","συχνοι","συχνον","συχνος","συχνου","συχνους","συχνων","συχνως","σχε∆ον","σωστα","σόσ","σύ","σύν","σὸς","σὺ","σὺν","τά","τήν","τί","τίς","τίσ","τα","ταυτα","ταυτες","ταυτη","ταυτην","ταυτης","ταυτο,ταυτον","ταυτος","ταυτου","ταυτων","ταχα","ταχατε","ταῖς","τα∆ε","τε","τελικα","τελικως","τες","τετοια","τετοιαν","τετοιας","τετοιες","τετοιο","τετοιοι","τετοιον","τετοιος","τετοιου","τετοιους","τετοιων","τη","την","της","τησ","τι","τινα","τιποτα","τιποτε","τις","τισ","το","τοί","τοι","τοιοῦτος","τοιοῦτοσ","τον","τος","τοσα","τοσες","τοση","τοσην","τοσης","τοσο","τοσοι","τοσον","τοσος","τοσου","τοσους","τοσων","τοτε","του","τουλαχιστο","τουλαχιστον","τους","τουτα","τουτες","τουτη","τουτην","τουτης","τουτο","τουτοι","τουτοις","τουτον","τουτος","τουτου","τουτους","τουτων","τούσ","τοὺς","τοῖς","τοῦ","τυχον","των","τωρα","τό","τόν","τότε","τὰ","τὰς","τὴν","τὸ","τὸν","τῆς","τῆσ","τῇ","τῶν","τῷ","υπ","υπερ","υπο","υποψη","υποψιν","υπό","υστερα","φετος","χαμηλα","χθες","χτες","χωρις","χωριστα","ψηλα","ω","ωραια","ως","ωσ","ωσαν","ωσοτου","ωσπου","ωστε","ωστοσο","ωχ","ἀλλ\'","ἀλλά","ἀλλὰ","ἀλλ’","ἀπ","ἀπό","ἀπὸ","ἀφ","ἂν","ἃ","ἄλλος","ἄλλοσ","ἄν","ἄρα","ἅμα","ἐάν","ἐγώ","ἐγὼ","ἐκ","ἐμόσ","ἐμὸς","ἐν","ἐξ","ἐπί","ἐπεὶ","ἐπὶ","ἐστι","ἐφ","ἐὰν","ἑαυτοῦ","ἔτι","ἡ","ἢ","ἣ","ἤ","ἥ","ἧς","ἵνα","ὁ","ὃ","ὃν","ὃς","ὅ","ὅδε","ὅθεν","ὅπερ","ὅς","ὅσ","ὅστις","ὅστισ","ὅτε","ὅτι","ὑμόσ","ὑπ","ὑπέρ","ὑπό","ὑπὲρ","ὑπὸ","ὡς","ὡσ","ὥς","ὥστε","ὦ","ᾧ","∆α","∆ε","∆εινα","∆εν","∆εξια","∆ηθεν","∆ηλα∆η","∆ι","∆ια","∆ιαρκως","∆ικα","∆ικο","∆ικοι","∆ικος","∆ικου","∆ικους","∆ιολου","∆ιπλα","∆ιχως"],"gu":["અંગે","અંદર","અથવા","અને","અમને","અમારું","અમે","અહીં","આ","આગળ","આથી","આનું","આને","આપણને","આપણું","આપણે","આપી","આર","આવી","આવે","ઉપર","ઉભા","ઊંચે","ઊભું","એ","એક","એન","એના","એનાં","એની","એનું","એને","એનો","એમ","એવા","એવાં","એવી","એવું","એવો","ઓછું","કંઈક","કઈ","કયું","કયો","કરતાં","કરવું","કરી","કરીએ","કરું","કરે","કરેલું","કર્યા","કર્યાં","કર્યું","કર્યો","કાંઈ","કે","કેટલું","કેમ","કેવી","કેવું","કોઈ","કોઈક","કોણ","કોણે","કોને","ક્યાં","ક્યારે","ખૂબ","ગઈ","ગયા","ગયાં","ગયું","ગયો","ઘણું","છ","છતાં","છીએ","છું","છે","છેક","છો","જ","જાય","જી","જે","જેટલું","જેને","જેમ","જેવી","જેવું","જેવો","જો","જોઈએ","જ્યાં","જ્યારે","ઝાઝું","તને","તમને","તમારું","તમે","તા","તારાથી","તારામાં","તારું","તું","તે","તેં","તેઓ","તેણે","તેથી","તેના","તેની","તેનું","તેને","તેમ","તેમનું","તેમને","તેવી","તેવું","તો","ત્યાં","ત્યારે","થઇ","થઈ","થઈએ","થતા","થતાં","થતી","થતું","થતો","થયા","થયાં","થયું","થયેલું","થયો","થવું","થાઉં","થાઓ","થાય","થી","થોડું","દરેક","ન","નં","નં.","નથી","નહિ","નહી","નહીં","ના","ની","નીચે","નું","ને","નો","પછી","પણ","પર","પરંતુ","પહેલાં","પાછળ","પાસે","પોતાનું","પ્રત્યેક","ફક્ત","ફરી","ફરીથી","બંને","બધા","બધું","બની","બહાર","બહુ","બાદ","બે","મને","મા","માં","માટે","માત્ર","મારું","મી","મૂકવું","મૂકી","મૂક્યા","મૂક્યાં","મૂક્યું","મેં","રહી","રહે","રહેવું","રહ્યા","રહ્યાં","રહ્યો","રીતે","રૂ.","રૂા","લેતા","લેતું","લેવા","વગેરે","વધુ","શકે","શા","શું","સરખું","સામે","સુધી","હતા","હતાં","હતી","હતું","હવે","હશે","હશો","હા","હું","હો","હોઈ","હોઈશ","હોઈશું","હોય","હોવા"],"ha":["a","amma","ba","ban","ce","cikin","da","don","ga","in","ina","ita","ji","ka","ko","kuma","lokacin","ma","mai","na","ne","ni","sai","shi","su","suka","sun","ta","tafi","take","tana","wani","wannan","wata","ya","yake","yana","yi","za"],"he":["אבל","או","אולי","אותה","אותו","אותי","אותך","אותם","אותן","אותנו","אז","אחר","אחרות","אחרי","אחריכן","אחרים","אחרת","אי","איזה","איך","אין","איפה","איתה","איתו","איתי","איתך","איתכם","איתכן","איתם","איתן","איתנו","אך","אל","אלה","אלו","אם","אנחנו","אני","אס","אף","אצל","אשר","את","אתה","אתכם","אתכן","אתם","אתן","באיזומידה","באמצע","באמצעות","בגלל","בין","בלי","במידה","במקוםשבו","ברם","בשביל","בשעהש","בתוך","גם","דרך","הוא","היא","היה","היכן","היתה","היתי","הם","הן","הנה","הסיבהשבגללה","הרי","ואילו","ואת","זאת","זה","זות","יהיה","יוכל","יוכלו","יותרמדי","יכול","יכולה","יכולות","יכולים","יכל","יכלה","יכלו","יש","כאן","כאשר","כולם","כולן","כזה","כי","כיצד","כך","ככה","כל","כלל","כמו","כן","כפי","כש","לא","לאו","לאיזותכלית","לאן","לבין","לה","להיות","להם","להן","לו","לי","לכם","לכן","למה","למטה","למעלה","למקוםשבו","למרות","לנו","לעבר","לעיכן","לפיכך","לפני","מאד","מאחורי","מאיזוסיבה","מאין","מאיפה","מבלי","מבעד","מדוע","מה","מהיכן","מול","מחוץ","מי","מכאן","מכיוון","מלבד","מן","מנין","מסוגל","מעט","מעטים","מעל","מצד","מקוםבו","מתחת","מתי","נגד","נגר","נו","עד","עז","על","עלי","עליה","עליהם","עליהן","עליו","עליך","עליכם","עלינו","עם","עצמה","עצמהם","עצמהן","עצמו","עצמי","עצמם","עצמן","עצמנו","פה","רק","שוב","של","שלה","שלהם","שלהן","שלו","שלי","שלך","שלכה","שלכם","שלכן","שלנו","שם","תהיה","תחת"],"hi":["अंदर","अत","अदि","अप","अपना","अपनि","अपनी","अपने","अभि","अभी","आदि","आप","इंहिं","इंहें","इंहों","इतयादि","इत्यादि","इन","इनका","इन्हीं","इन्हें","इन्हों","इस","इसका","इसकि","इसकी","इसके","इसमें","इसि","इसी","इसे","उंहिं","उंहें","उंहों","उन","उनका","उनकि","उनकी","उनके","उनको","उन्हीं","उन्हें","उन्हों","उस","उसके","उसि","उसी","उसे","एक","एवं","एस","एसे","ऐसे","ओर","और","कइ","कई","कर","करता","करते","करना","करने","करें","कहते","कहा","का","काफि","काफ़ी","कि","किंहें","किंहों","कितना","किन्हें","किन्हों","किया","किर","किस","किसि","किसी","किसे","की","कुछ","कुल","के","को","कोइ","कोई","कोन","कोनसा","कौन","कौनसा","गया","घर","जब","जहाँ","जहां","जा","जिंहें","जिंहों","जितना","जिधर","जिन","जिन्हें","जिन्हों","जिस","जिसे","जीधर","जेसा","जेसे","जैसा","जैसे","जो","तक","तब","तरह","तिंहें","तिंहों","तिन","तिन्हें","तिन्हों","तिस","तिसे","तो","था","थि","थी","थे","दबारा","दवारा","दिया","दुसरा","दुसरे","दूसरे","दो","द्वारा","न","नहिं","नहीं","ना","निचे","निहायत","नीचे","ने","पर","पहले","पुरा","पूरा","पे","फिर","बनि","बनी","बहि","बही","बहुत","बाद","बाला","बिलकुल","भि","भितर","भी","भीतर","मगर","मानो","मे","में","यदि","यह","यहाँ","यहां","यहि","यही","या","यिह","ये","रखें","रवासा","रहा","रहे","ऱ्वासा","लिए","लिये","लेकिन","व","वगेरह","वरग","वर्ग","वह","वहाँ","वहां","वहिं","वहीं","वाले","वुह","वे","वग़ैरह","संग","सकता","सकते","सबसे","सभि","सभी","साथ","साबुत","साभ","सारा","से","सो","हि","ही","हुअ","हुआ","हुइ","हुई","हुए","हे","हें","है","हैं","हो","होता","होति","होती","होते","होना","होने"],"hu":["a","abba","abban","abb\xf3l","addig","ahhoz","ahogy","ahol","aki","akik","akkor","ak\xe1r","alapj\xe1n","alatt","alatta","alattad","alattam","alattatok","alattuk","alattunk","al\xe1","al\xe1d","al\xe1juk","al\xe1m","al\xe1nk","al\xe1tok","al\xf3l","al\xf3la","al\xf3lad","al\xf3lam","al\xf3latok","al\xf3luk","al\xf3lunk","amely","amelybol","amelyek","amelyekben","amelyeket","amelyet","amelyik","amelynek","ami","amikor","amit","amolyan","amott","am\xedg","annak","ann\xe1l","arra","arr\xf3l","att\xf3l","az","aznap","azok","azokat","azokba","azokban","azokb\xf3l","azokhoz","azokig","azokkal","azokk\xe1","azoknak","azokn\xe1l","azokon","azokra","azokr\xf3l","azokt\xf3l","azok\xe9rt","azon","azonban","azonnal","azt","azt\xe1n","azut\xe1n","azzal","azz\xe1","az\xe9rt","bal","balra","ban","be","bel\xe9","bel\xe9d","bel\xe9j\xfck","bel\xe9m","bel\xe9nk","bel\xe9tek","bel\xfcl","belőle","belőled","belőlem","belőletek","belől\xfck","belől\xfcnk","ben","benne","benned","bennem","bennetek","benn\xfck","benn\xfcnk","b\xe1r","b\xe1rcsak","b\xe1rmilyen","b\xfacs\xfa","cikk","cikkek","cikkeket","csak","csakhogy","csup\xe1n","de","dehogy","e","ebbe","ebben","ebből","eddig","egy","egyebek","egyebet","egyed\xfcl","egyelőre","egyes","egyet","egyetlen","egyik","egym\xe1s","egyre","egyszerre","egy\xe9b","egy\xfctt","eg\xe9sz","eg\xe9szen","ehhez","ekkor","el","eleinte","ellen","ellenes","elleni","ellen\xe9re","elmondta","els\xf5","első","elsők","elsősorban","elsőt","el\xe9","el\xe9d","el\xe9g","el\xe9j\xfck","el\xe9m","el\xe9nk","el\xe9tek","el\xf5","el\xf5sz\xf6r","el\xf5tt","elő","előbb","elől","előle","előled","előlem","előletek","elől\xfck","elől\xfcnk","elősz\xf6r","előtt","előtte","előtted","előttem","előttetek","előtt\xfck","előtt\xfcnk","előző","emilyen","engem","ennek","ennyi","enn\xe9l","eny\xe9m","erre","erről","esetben","ettől","ez","ezek","ezekbe","ezekben","ezekből","ezeken","ezeket","ezekhez","ezekig","ezekkel","ezekk\xe9","ezeknek","ezekn\xe9l","ezekre","ezekről","ezektől","ezek\xe9rt","ezen","ezent\xfal","ezer","ezret","ezt","ezut\xe1n","ezzel","ezz\xe9","ez\xe9rt","fel","fele","felek","felet","felett","fel\xe9","fent","fenti","f\xe9l","f\xf6l\xe9","gyakran","ha","hall\xf3","hamar","hanem","harmadik","harmadikat","harminc","hat","hatodik","hatodikat","hatot","hatvan","helyett","hetedik","hetediket","hetet","hetven","hirtelen","hiszen","hi\xe1ba","hogy","hogyan","hol","holnap","holnapot","honnan","hova","hozz\xe1","hozz\xe1d","hozz\xe1juk","hozz\xe1m","hozz\xe1nk","hozz\xe1tok","hurr\xe1","huszadik","h\xe1ny","h\xe1nyszor","h\xe1rmat","h\xe1rom","h\xe1t","h\xe1tha","h\xe1tuls\xf3","h\xe9t","h\xfasz","ide","ide-оda","id\xe9n","igaz\xe1n","igen","ill","ill.","illetve","ilyen","ilyenkor","imm\xe1r","ink\xe1bb","is","ism\xe9t","ison","itt","jelenleg","jobban","jobbra","j\xf3","j\xf3l","j\xf3lesik","j\xf3val","j\xf6vőre","kell","kellene","kellett","kelljen","keress\xfcnk","kereszt\xfcl","ketten","kettő","kettőt","kev\xe9s","ki","kiben","kiből","kicsit","kicsoda","kihez","kik","kikbe","kikben","kikből","kiken","kiket","kikhez","kikkel","kikk\xe9","kiknek","kikn\xe9l","kikre","kikről","kiktől","kik\xe9rt","kilenc","kilencedik","kilencediket","kilencet","kilencven","kin","kinek","kin\xe9l","kire","kiről","kit","kitől","kivel","kiv\xe9","ki\xe9","ki\xe9rt","kor\xe1bban","k\xe9pest","k\xe9rem","k\xe9rlek","k\xe9sz","k\xe9ső","k\xe9sőbb","k\xe9sőn","k\xe9t","k\xe9tszer","k\xedv\xfcl","k\xf6r\xfcl","k\xf6sz\xf6nhetően","k\xf6sz\xf6n\xf6m","k\xf6zben","k\xf6zel","k\xf6zepesen","k\xf6zep\xe9n","k\xf6z\xe9","k\xf6z\xf6tt","k\xf6z\xfcl","k\xfcl\xf6n","k\xfcl\xf6nben","k\xfcl\xf6nb\xf6ző","k\xfcl\xf6nb\xf6zőbb","k\xfcl\xf6nb\xf6zőek","lassan","le","legal\xe1bb","legyen","lehet","lehetetlen","lehetett","lehetőleg","lehetős\xe9g","lenne","lenni","lenn\xe9k","lenn\xe9nek","lesz","leszek","lesznek","lesz\xfcnk","lett","lettek","lettem","lett\xfcnk","l\xe9vő","ma","maga","magad","magam","magatokat","magukat","magunkat","mag\xe1t","mai","majd","majdnem","manaps\xe1g","meg","megcsin\xe1l","megcsin\xe1lnak","megint","megvan","mellett","mellette","melletted","mellettem","mellettetek","mellett\xfck","mellett\xfcnk","mell\xe9","mell\xe9d","mell\xe9j\xfck","mell\xe9m","mell\xe9nk","mell\xe9tek","mellől","mellőle","mellőled","mellőlem","mellőletek","mellől\xfck","mellől\xfcnk","mely","melyek","melyik","mennyi","mert","mi","miatt","miatta","miattad","miattam","miattatok","miattuk","miattunk","mibe","miben","miből","mihez","mik","mikbe","mikben","mikből","miken","miket","mikhez","mikkel","mikk\xe9","miknek","mikn\xe9l","mikor","mikre","mikről","miktől","mik\xe9rt","milyen","min","mind","mindegyik","mindegyiket","minden","mindenesetre","mindenki","mindent","minden\xfctt","mindig","mindketten","minek","minket","mint","mintha","min\xe9l","mire","miről","mit","mitől","mivel","miv\xe9","mi\xe9rt","mondta","most","mostan\xe1ig","m\xe1r","m\xe1s","m\xe1sik","m\xe1sikat","m\xe1snap","m\xe1sodik","m\xe1sodszor","m\xe1sok","m\xe1sokat","m\xe1st","m\xe9g","m\xe9gis","m\xedg","m\xf6g\xe9","m\xf6g\xe9d","m\xf6g\xe9j\xfck","m\xf6g\xe9m","m\xf6g\xe9nk","m\xf6g\xe9tek","m\xf6g\xf6tt","m\xf6g\xf6tte","m\xf6g\xf6tted","m\xf6g\xf6ttem","m\xf6g\xf6ttetek","m\xf6g\xf6tt\xfck","m\xf6g\xf6tt\xfcnk","m\xf6g\xfcl","m\xf6g\xfcle","m\xf6g\xfcled","m\xf6g\xfclem","m\xf6g\xfcletek","m\xf6g\xfcl\xfck","m\xf6g\xfcl\xfcnk","m\xfaltkor","m\xfalva","na","nagy","nagyobb","nagyon","naponta","napot","ne","negyedik","negyediket","negyven","neked","nekem","neki","nekik","nektek","nek\xfcnk","nem","nemcsak","nemr\xe9g","nincs","nyolc","nyolcadik","nyolcadikat","nyolcat","nyolcvan","n\xe1la","n\xe1lad","n\xe1lam","n\xe1latok","n\xe1luk","n\xe1lunk","n\xe9gy","n\xe9gyet","n\xe9ha","n\xe9h\xe1ny","n\xe9lk\xfcl","o","oda","ok","olyan","onnan","ott","pedig","persze","p\xe1r","p\xe9ld\xe1ul","rajta","rajtad","rajtam","rajtatok","rajtuk","rajtunk","rendben","rosszul","r\xe1","r\xe1d","r\xe1juk","r\xe1m","r\xe1nk","r\xe1tok","r\xe9gen","r\xe9g\xf3ta","r\xe9sz\xe9re","r\xf3la","r\xf3lad","r\xf3lam","r\xf3latok","r\xf3luk","r\xf3lunk","r\xf6gt\xf6n","s","saj\xe1t","se","sem","semmi","semmilyen","semmis\xe9g","senki","soha","sok","sokan","sokat","sokkal","sokszor","sok\xe1ig","sor\xe1n","stb.","szemben","szerbusz","szerint","szerinte","szerinted","szerintem","szerintetek","szerint\xfck","szerint\xfcnk","szervusz","szinte","sz\xe1m\xe1ra","sz\xe1z","sz\xe1zadik","sz\xe1zat","sz\xe9pen","sz\xe9t","sz\xedves","sz\xedvesen","sz\xedveskedj\xe9k","sőt","tal\xe1n","tavaly","te","tegnap","tegnapelőtt","teh\xe1t","tele","teljes","tess\xe9k","ti","tied","titeket","tizedik","tizediket","tizenegy","tizenegyedik","tizenhat","tizenh\xe1rom","tizenh\xe9t","tizenkettedik","tizenkettő","tizenkilenc","tizenk\xe9t","tizennyolc","tizenn\xe9gy","tizen\xf6t","tizet","tov\xe1bb","tov\xe1bbi","tov\xe1bb\xe1","t\xe1vol","t\xe9ged","t\xe9nyleg","t\xedz","t\xf6bb","t\xf6bbi","t\xf6bbsz\xf6r","t\xfal","tőle","tőled","tőlem","tőletek","től\xfck","től\xfcnk","ugyanakkor","ugyanez","ugyanis","ugye","urak","uram","urat","utolj\xe1ra","utols\xf3","ut\xe1n","ut\xe1na","vagy","vagyis","vagyok","vagytok","vagyunk","vajon","valahol","valaki","valakit","valamelyik","valami","valamint","val\xf3","van","vannak","vele","veled","velem","veletek","vel\xfck","vel\xfcnk","vissza","viszl\xe1t","viszont","viszontl\xe1t\xe1sra","volna","voln\xe1nak","voln\xe9k","volt","voltak","voltam","voltunk","v\xe9gre","v\xe9g\xe9n","v\xe9g\xfcl","\xe1ltal","\xe1ltal\xe1ban","\xe1m","\xe1t","\xe9ljen","\xe9n","\xe9ppen","\xe9rte","\xe9rted","\xe9rtem","\xe9rtetek","\xe9rt\xfck","\xe9rt\xfcnk","\xe9s","\xe9v","\xe9vben","\xe9ve","\xe9vek","\xe9ves","\xe9vi","\xe9vvel","\xedgy","\xf3ta","\xf5","\xf5k","\xf5ket","\xf6n","\xf6nbe","\xf6nben","\xf6nből","\xf6nh\xf6z","\xf6nnek","\xf6nnel","\xf6nn\xe9l","\xf6nre","\xf6nről","\xf6nt","\xf6ntől","\xf6n\xe9rt","\xf6n\xf6k","\xf6n\xf6kbe","\xf6n\xf6kben","\xf6n\xf6kből","\xf6n\xf6ket","\xf6n\xf6kh\xf6z","\xf6n\xf6kkel","\xf6n\xf6knek","\xf6n\xf6kn\xe9l","\xf6n\xf6kre","\xf6n\xf6kről","\xf6n\xf6ktől","\xf6n\xf6k\xe9rt","\xf6n\xf6k\xf6n","\xf6n\xf6n","\xf6ssze","\xf6t","\xf6tven","\xf6t\xf6dik","\xf6t\xf6diket","\xf6t\xf6t","\xfagy","\xfagyis","\xfagynevezett","\xfaj","\xfajabb","\xfajra","\xfar","ő","ők","őket","őt"],"id":["ada","adalah","adanya","adapun","agak","agaknya","agar","akan","akankah","akhir","akhiri","akhirnya","aku","akulah","amat","amatlah","anda","andalah","antar","antara","antaranya","apa","apaan","apabila","apakah","apalagi","apatah","artinya","asal","asalkan","atas","atau","ataukah","ataupun","awal","awalnya","bagai","bagaikan","bagaimana","bagaimanakah","bagaimanapun","bagi","bagian","bahkan","bahwa","bahwasanya","baik","bakal","bakalan","balik","banyak","bapak","baru","bawah","beberapa","begini","beginian","beginikah","beginilah","begitu","begitukah","begitulah","begitupun","bekerja","belakang","belakangan","belum","belumlah","benar","benarkah","benarlah","berada","berakhir","berakhirlah","berakhirnya","berapa","berapakah","berapalah","berapapun","berarti","berawal","berbagai","berdatangan","beri","berikan","berikut","berikutnya","berjumlah","berkali-kali","berkata","berkehendak","berkeinginan","berkenaan","berlainan","berlalu","berlangsung","berlebihan","bermacam","bermacam-macam","bermaksud","bermula","bersama","bersama-sama","bersiap","bersiap-siap","bertanya","bertanya-tanya","berturut","berturut-turut","bertutur","berujar","berupa","besar","betul","betulkah","biasa","biasanya","bila","bilakah","bisa","bisakah","boleh","bolehkah","bolehlah","buat","bukan","bukankah","bukanlah","bukannya","bulan","bung","cara","caranya","cukup","cukupkah","cukuplah","cuma","dahulu","dalam","dan","dapat","dari","daripada","datang","dekat","demi","demikian","demikianlah","dengan","depan","di","dia","diakhiri","diakhirinya","dialah","diantara","diantaranya","diberi","diberikan","diberikannya","dibuat","dibuatnya","didapat","didatangkan","digunakan","diibaratkan","diibaratkannya","diingat","diingatkan","diinginkan","dijawab","dijelaskan","dijelaskannya","dikarenakan","dikatakan","dikatakannya","dikerjakan","diketahui","diketahuinya","dikira","dilakukan","dilalui","dilihat","dimaksud","dimaksudkan","dimaksudkannya","dimaksudnya","diminta","dimintai","dimisalkan","dimulai","dimulailah","dimulainya","dimungkinkan","dini","dipastikan","diperbuat","diperbuatnya","dipergunakan","diperkirakan","diperlihatkan","diperlukan","diperlukannya","dipersoalkan","dipertanyakan","dipunyai","diri","dirinya","disampaikan","disebut","disebutkan","disebutkannya","disini","disinilah","ditambahkan","ditandaskan","ditanya","ditanyai","ditanyakan","ditegaskan","ditujukan","ditunjuk","ditunjuki","ditunjukkan","ditunjukkannya","ditunjuknya","dituturkan","dituturkannya","diucapkan","diucapkannya","diungkapkan","dong","dua","dulu","empat","enggak","enggaknya","entah","entahlah","guna","gunakan","hal","hampir","hanya","hanyalah","hari","harus","haruslah","harusnya","hendak","hendaklah","hendaknya","hingga","ia","ialah","ibarat","ibaratkan","ibaratnya","ibu","ikut","ingat","ingat-ingat","ingin","inginkah","inginkan","ini","inikah","inilah","itu","itukah","itulah","jadi","jadilah","jadinya","jangan","jangankan","janganlah","jauh","jawab","jawaban","jawabnya","jelas","jelaskan","jelaslah","jelasnya","jika","jikalau","juga","jumlah","jumlahnya","justru","kala","kalau","kalaulah","kalaupun","kalian","kami","kamilah","kamu","kamulah","kan","kapan","kapankah","kapanpun","karena","karenanya","kasus","kata","katakan","katakanlah","katanya","ke","keadaan","kebetulan","kecil","kedua","keduanya","keinginan","kelamaan","kelihatan","kelihatannya","kelima","keluar","kembali","kemudian","kemungkinan","kemungkinannya","kenapa","kepada","kepadanya","kesampaian","keseluruhan","keseluruhannya","keterlaluan","ketika","khususnya","kini","kinilah","kira","kira-kira","kiranya","kita","kitalah","kok","kurang","lagi","lagian","lah","lain","lainnya","lalu","lama","lamanya","lanjut","lanjutnya","lebih","lewat","lima","luar","macam","maka","makanya","makin","malah","malahan","mampu","mampukah","mana","manakala","manalagi","masa","masalah","masalahnya","masih","masihkah","masing","masing-masing","mau","maupun","melainkan","melakukan","melalui","melihat","melihatnya","memang","memastikan","memberi","memberikan","membuat","memerlukan","memihak","meminta","memintakan","memisalkan","memperbuat","mempergunakan","memperkirakan","memperlihatkan","mempersiapkan","mempersoalkan","mempertanyakan","mempunyai","memulai","memungkinkan","menaiki","menambahkan","menandaskan","menanti","menanti-nanti","menantikan","menanya","menanyai","menanyakan","mendapat","mendapatkan","mendatang","mendatangi","mendatangkan","menegaskan","mengakhiri","mengapa","mengatakan","mengatakannya","mengenai","mengerjakan","mengetahui","menggunakan","menghendaki","mengibaratkan","mengibaratkannya","mengingat","mengingatkan","menginginkan","mengira","mengucapkan","mengucapkannya","mengungkapkan","menjadi","menjawab","menjelaskan","menuju","menunjuk","menunjuki","menunjukkan","menunjuknya","menurut","menuturkan","menyampaikan","menyangkut","menyatakan","menyebutkan","menyeluruh","menyiapkan","merasa","mereka","merekalah","merupakan","meski","meskipun","meyakini","meyakinkan","minta","mirip","misal","misalkan","misalnya","mula","mulai","mulailah","mulanya","mungkin","mungkinkah","nah","naik","namun","nanti","nantinya","nyaris","nyatanya","oleh","olehnya","pada","padahal","padanya","pak","paling","panjang","pantas","para","pasti","pastilah","penting","pentingnya","per","percuma","perlu","perlukah","perlunya","pernah","persoalan","pertama","pertama-tama","pertanyaan","pertanyakan","pihak","pihaknya","pukul","pula","pun","punya","rasa","rasanya","rata","rupanya","saat","saatnya","saja","sajalah","saling","sama","sama-sama","sambil","sampai","sampai-sampai","sampaikan","sana","sangat","sangatlah","satu","saya","sayalah","se","sebab","sebabnya","sebagai","sebagaimana","sebagainya","sebagian","sebaik","sebaik-baiknya","sebaiknya","sebaliknya","sebanyak","sebegini","sebegitu","sebelum","sebelumnya","sebenarnya","seberapa","sebesar","sebetulnya","sebisanya","sebuah","sebut","sebutlah","sebutnya","secara","secukupnya","sedang","sedangkan","sedemikian","sedikit","sedikitnya","seenaknya","segala","segalanya","segera","seharusnya","sehingga","seingat","sejak","sejauh","sejenak","sejumlah","sekadar","sekadarnya","sekali","sekali-kali","sekalian","sekaligus","sekalipun","sekarang","sekecil","seketika","sekiranya","sekitar","sekitarnya","sekurang-kurangnya","sekurangnya","sela","selagi","selain","selaku","selalu","selama","selama-lamanya","selamanya","selanjutnya","seluruh","seluruhnya","semacam","semakin","semampu","semampunya","semasa","semasih","semata","semata-mata","semaunya","sementara","semisal","semisalnya","sempat","semua","semuanya","semula","sendiri","sendirian","sendirinya","seolah","seolah-olah","seorang","sepanjang","sepantasnya","sepantasnyalah","seperlunya","seperti","sepertinya","sepihak","sering","seringnya","serta","serupa","sesaat","sesama","sesampai","sesegera","sesekali","seseorang","sesuatu","sesuatunya","sesudah","sesudahnya","setelah","setempat","setengah","seterusnya","setiap","setiba","setibanya","setidak-tidaknya","setidaknya","setinggi","seusai","sewaktu","siap","siapa","siapakah","siapapun","sini","sinilah","soal","soalnya","suatu","sudah","sudahkah","sudahlah","supaya","tadi","tadinya","tahu","tahun","tak","tambah","tambahnya","tampak","tampaknya","tandas","tandasnya","tanpa","tanya","tanyakan","tanyanya","tapi","tegas","tegasnya","telah","tempat","tengah","tentang","tentu","tentulah","tentunya","tepat","terakhir","terasa","terbanyak","terdahulu","terdapat","terdiri","terhadap","terhadapnya","teringat","teringat-ingat","terjadi","terjadilah","terjadinya","terkira","terlalu","terlebih","terlihat","termasuk","ternyata","tersampaikan","tersebut","tersebutlah","tertentu","tertuju","terus","terutama","tetap","tetapi","tiap","tiba","tiba-tiba","tidak","tidakkah","tidaklah","tiga","tinggi","toh","tunjuk","turut","tutur","tuturnya","ucap","ucapnya","ujar","ujarnya","umum","umumnya","ungkap","ungkapnya","untuk","usah","usai","waduh","wah","wahai","waktu","waktunya","walau","walaupun","wong","yaitu","yakin","yakni","yang"],"ga":["a","ach","ag","agus","an","aon","ar","arna","as","b\'","ba","beirt","bh\xfar","caoga","ceathair","ceathrar","chomh","cht\xf3","chuig","chun","cois","c\xe9ad","c\xfaig","c\xfaigear","d\'","daichead","dar","de","deich","deichni\xfar","den","dh\xe1","do","don","dt\xed","d\xe1","d\xe1r","d\xf3","faoi","faoin","faoina","faoin\xe1r","fara","fiche","gach","gan","go","gur","haon","hocht","i","iad","idir","in","ina","ins","in\xe1r","is","le","leis","lena","len\xe1r","m\'","mar","mo","m\xe9","na","nach","naoi","naon\xfar","n\xe1","n\xed","n\xedor","n\xf3","n\xf3cha","ocht","ochtar","os","roimh","sa","seacht","seachtar","seacht\xf3","seasca","seisear","siad","sibh","sinn","sna","s\xe9","s\xed","tar","thar","th\xfa","tri\xfar","tr\xed","tr\xedna","tr\xedn\xe1r","tr\xedocha","t\xfa","um","\xe1r","\xe9","\xe9is","\xed","\xf3","\xf3n","\xf3na","\xf3n\xe1r"],"it":["a","abbastanza","abbia","abbiamo","abbiano","abbiate","accidenti","ad","adesso","affinch\xe9","agl","agli","ahime","ahim\xe8","ai","al","alcuna","alcuni","alcuno","all","alla","alle","allo","allora","altre","altri","altrimenti","altro","altrove","altrui","anche","ancora","anni","anno","ansa","anticipo","assai","attesa","attraverso","avanti","avemmo","avendo","avente","aver","avere","averlo","avesse","avessero","avessi","avessimo","aveste","avesti","avete","aveva","avevamo","avevano","avevate","avevi","avevo","avrai","avranno","avrebbe","avrebbero","avrei","avremmo","avremo","avreste","avresti","avrete","avr\xe0","avr\xf2","avuta","avute","avuti","avuto","basta","ben","bene","benissimo","brava","bravo","buono","c","caso","cento","certa","certe","certi","certo","che","chi","chicchessia","chiunque","ci","ciascuna","ciascuno","cima","cinque","cio","cioe","cio\xe8","circa","citta","citt\xe0","ci\xf2","co","codesta","codesti","codesto","cogli","coi","col","colei","coll","coloro","colui","come","cominci","comprare","comunque","con","concernente","conclusione","consecutivi","consecutivo","consiglio","contro","cortesia","cos","cosa","cosi","cos\xec","cui","d","da","dagl","dagli","dai","dal","dall","dalla","dalle","dallo","dappertutto","davanti","degl","degli","dei","del","dell","della","delle","dello","dentro","detto","deve","devo","di","dice","dietro","dire","dirimpetto","diventa","diventare","diventato","dopo","doppio","dov","dove","dovra","dovr\xe0","dovunque","due","dunque","durante","e","ebbe","ebbero","ebbi","ecc","ecco","ed","effettivamente","egli","ella","entrambi","eppure","era","erano","eravamo","eravate","eri","ero","esempio","esse","essendo","esser","essere","essi","ex","fa","faccia","facciamo","facciano","facciate","faccio","facemmo","facendo","facesse","facessero","facessi","facessimo","faceste","facesti","faceva","facevamo","facevano","facevate","facevi","facevo","fai","fanno","farai","faranno","fare","farebbe","farebbero","farei","faremmo","faremo","fareste","faresti","farete","far\xe0","far\xf2","fatto","favore","fece","fecero","feci","fin","finalmente","finche","fine","fino","forse","forza","fosse","fossero","fossi","fossimo","foste","fosti","fra","frattempo","fu","fui","fummo","fuori","furono","futuro","generale","gente","gia","giacche","giorni","giorno","giu","gi\xe0","gli","gliela","gliele","glieli","glielo","gliene","grande","grazie","gruppo","ha","haha","hai","hanno","ho","i","ie","ieri","il","improvviso","in","inc","indietro","infatti","inoltre","insieme","intanto","intorno","invece","io","l","la","lasciato","lato","le","lei","li","lo","lontano","loro","lui","lungo","luogo","l\xe0","ma","macche","magari","maggior","mai","male","malgrado","malissimo","me","medesimo","mediante","meglio","meno","mentre","mesi","mezzo","mi","mia","mie","miei","mila","miliardi","milioni","minimi","mio","modo","molta","molti","moltissimo","molto","momento","mondo","ne","negl","negli","nei","nel","nell","nella","nelle","nello","nemmeno","neppure","nessun","nessuna","nessuno","niente","no","noi","nome","non","nondimeno","nonostante","nonsia","nostra","nostre","nostri","nostro","novanta","nove","nulla","nuovi","nuovo","o","od","oggi","ogni","ognuna","ognuno","oltre","oppure","ora","ore","osi","ossia","ottanta","otto","paese","parecchi","parecchie","parecchio","parte","partendo","peccato","peggio","per","perche","perch\xe8","perch\xe9","percio","perci\xf2","perfino","pero","persino","persone","per\xf2","piedi","pieno","piglia","piu","piuttosto","pi\xf9","po","pochissimo","poco","poi","poiche","possa","possedere","posteriore","posto","potrebbe","preferibilmente","presa","press","prima","primo","principalmente","probabilmente","promesso","proprio","puo","pure","purtroppo","pu\xf2","qua","qualche","qualcosa","qualcuna","qualcuno","quale","quali","qualunque","quando","quanta","quante","quanti","quanto","quantunque","quarto","quasi","quattro","quel","quella","quelle","quelli","quello","quest","questa","queste","questi","questo","qui","quindi","quinto","realmente","recente","recentemente","registrazione","relativo","riecco","rispetto","salvo","sara","sarai","saranno","sarebbe","sarebbero","sarei","saremmo","saremo","sareste","saresti","sarete","sar\xe0","sar\xf2","scola","scopo","scorso","se","secondo","seguente","seguito","sei","sembra","sembrare","sembrato","sembrava","sembri","sempre","senza","sette","si","sia","siamo","siano","siate","siete","sig","solito","solo","soltanto","sono","sopra","soprattutto","sotto","spesso","sta","stai","stando","stanno","starai","staranno","starebbe","starebbero","starei","staremmo","staremo","stareste","staresti","starete","star\xe0","star\xf2","stata","state","stati","stato","stava","stavamo","stavano","stavate","stavi","stavo","stemmo","stessa","stesse","stessero","stessi","stessimo","stesso","steste","stesti","stette","stettero","stetti","stia","stiamo","stiano","stiate","sto","su","sua","subito","successivamente","successivo","sue","sugl","sugli","sui","sul","sull","sulla","sulle","sullo","suo","suoi","tale","tali","talvolta","tanto","te","tempo","terzo","th","ti","titolo","tra","tranne","tre","trenta","triplo","troppo","trovato","tu","tua","tue","tuo","tuoi","tutta","tuttavia","tutte","tutti","tutto","uguali","ulteriore","ultimo","un","una","uno","uomo","va","vai","vale","vari","varia","varie","vario","verso","vi","vicino","visto","vita","voi","volta","volte","vostra","vostre","vostri","vostro","\xe8"],"ja":["あそこ","あっ","あの","あのかた","あの人","あり","あります","ある","あれ","い","いう","います","いる","う","うち","え","お","および","おり","おります","か","かつて","から","が","き","ここ","こちら","こと","この","これ","これら","さ","さらに","し","しかし","する","ず","せ","せる","そこ","そして","その","その他","その後","それ","それぞれ","それで","た","ただし","たち","ため","たり","だ","だっ","だれ","つ","て","で","でき","できる","です","では","でも","と","という","といった","とき","ところ","として","とともに","とも","と共に","どこ","どの","な","ない","なお","なかっ","ながら","なく","なっ","など","なに","なら","なり","なる","なん","に","において","における","について","にて","によって","により","による","に対して","に対する","に関する","の","ので","のみ","は","ば","へ","ほか","ほとんど","ほど","ます","また","または","まで","も","もの","ものの","や","よう","より","ら","られ","られる","れ","れる","を","ん","何","及び","彼","彼女","我々","特に","私","私達","貴方","貴方方"],"ko":["!","\\"","$","%","&","\'","(",")","*","+",",","-",".","...","0","1","2","3","4","5","6","7","8","9",";","<","=",">","?","@","\\\\","^","_","`","|","~","\xb7","—","——","‘","’","“","”","…","、","。","〈","〉","《","》","가","가까스로","가령","각","각각","각자","각종","갖고말하자면","같다","같이","개의치않고","거니와","거바","거의","것","것과 같이","것들","게다가","게우다","겨우","견지에서","결과에 이르다","결국","결론을 낼 수 있다","겸사겸사","고려하면","고로","곧","공동으로","과","과연","관계가 있다","관계없이","관련이 있다","관하여","관한","관해서는","구","구체적으로","구토하다","그","그들","그때","그래","그래도","그래서","그러나","그러니","그러니까","그러면","그러므로","그러한즉","그런 까닭에","그런데","그런즉","그럼","그럼에도 불구하고","그렇게 함으로써","그렇지","그렇지 않다면","그렇지 않으면","그렇지만","그렇지않으면","그리고","그리하여","그만이다","그에 따르는","그위에","그저","그중에서","그치지 않다","근거로","근거하여","기대여","기점으로","기준으로","기타","까닭으로","까악","까지","까지 미치다","까지도","꽈당","끙끙","끼익","나","나머지는","남들","남짓","너","너희","너희들","네","넷","년","논하지 않다","놀라다","누가 알겠는가","누구","다른","다른 방면으로","다만","다섯","다소","다수","다시 말하자면","다시말하면","다음","다음에","다음으로","단지","답다","당신","당장","대로 하다","대하면","대하여","대해 말하자면","대해서","댕그","더구나","더군다나","더라도","더불어","더욱더","더욱이는","도달하다","도착하다","동시에","동안","된바에야","된이상","두번째로","둘","둥둥","뒤따라","뒤이어","든간에","들","등","등등","딩동","따라","따라서","따위","따지지 않다","딱","때","때가 되어","때문에","또","또한","뚝뚝","라 해도","령","로","로 인하여","로부터","로써","륙","를","마음대로","마저","마저도","마치","막론하고","만 못하다","만약","만약에","만은 아니다","만이 아니다","만일","만큼","말하자면","말할것도 없고","매","매번","메쓰겁다","몇","모","모두","무렵","무릎쓰고","무슨","무엇","무엇때문에","물론","및","바꾸어말하면","바꾸어말하자면","바꾸어서 말하면","바꾸어서 한다면","바꿔 말하면","바로","바와같이","밖에 안된다","반대로","반대로 말하자면","반드시","버금","보는데서","보다더","보드득","본대로","봐","봐라","부류의 사람들","부터","불구하고","불문하고","붕붕","비걱거리다","비교적","비길수 없다","비로소","비록","비슷하다","비추어 보아","비하면","뿐만 아니라","뿐만아니라","뿐이다","삐걱","삐걱거리다","사","삼","상대적으로 말하자면","생각한대로","설령","설마","설사","셋","소생","소인","솨","쉿","습니까","습니다","시각","시간","시작하여","시초에","시키다","실로","심지어","아","아니","아니나다를가","아니라면","아니면","아니었다면","아래윗","아무거나","아무도","아야","아울러","아이","아이고","아이구","아이야","아이쿠","아하","아홉","안 그러면","않기 위하여","않기 위해서","알 수 있다","알았어","앗","앞에서","앞의것","야","약간","양자","어","어기여차","어느","어느 년도","어느것","어느곳","어느때","어느쪽","어느해","어디","어때","어떠한","어떤","어떤것","어떤것들","어떻게","어떻해","어이","어째서","어쨋든","어쩔수 없다","어찌","어찌됏든","어찌됏어","어찌하든지","어찌하여","언제","언젠가","얼마","얼마 안 되는 것","얼마간","얼마나","얼마든지","얼마만큼","얼마큼","엉엉","에","에 가서","에 달려 있다","에 대해","에 있다","에 한하다","에게","에서","여","여기","여덟","여러분","여보시오","여부","여섯","여전히","여차","연관되다","연이서","영","영차","옆사람","예","예를 들면","예를 들자면","예컨대","예하면","오","오로지","오르다","오자마자","오직","오호","오히려","와","와 같은 사람들","와르르","와아","왜","왜냐하면","외에도","요만큼","요만한 것","요만한걸","요컨대","우르르","우리","우리들","우선","우에 종합한것과같이","운운","월","위에서 서술한바와같이","위하여","위해서","윙윙","육","으로","으로 인하여","으로서","으로써","을","응","응당","의","의거하여","의지하여","의해","의해되다","의해서","이","이 되다","이 때문에","이 밖에","이 외에","이 정도의","이것","이곳","이때","이라면","이래","이러이러하다","이러한","이런","이럴정도로","이렇게 많은 것","이렇게되면","이렇게말하자면","이렇구나","이로 인하여","이르기까지","이리하여","이만큼","이번","이봐","이상","이어서","이었다","이와 같다","이와 같은","이와 반대로","이와같다면","이외에도","이용하여","이유만으로","이젠","이지만","이쪽","이천구","이천육","이천칠","이천팔","인 듯하다","인젠","일","일것이다","일곱","일단","일때","일반적으로","일지라도","임에 틀림없다","입각하여","입장에서","잇따라","있다","자","자기","자기집","자마자","자신","잠깐","잠시","저","저것","저것만큼","저기","저쪽","저희","전부","전자","전후","점에서 보아","정도에 이르다","제","제각기","제외하고","조금","조차","조차도","졸졸","좀","좋아","좍좍","주룩주룩","주저하지 않고","줄은 몰랏다","줄은모른다","중에서","중의하나","즈음하여","즉","즉시","지든지","지만","지말고","진짜로","쪽으로","차라리","참","참나","첫번째로","쳇","총적으로","총적으로 말하면","총적으로 보면","칠","콸콸","쾅쾅","쿵","타다","타인","탕탕","토하다","통하여","툭","퉤","틈타","팍","팔","퍽","펄렁","하","하게될것이다","하게하다","하겠는가","하고 있다","하고있었다","하곤하였다","하구나","하기 때문에","하기 위하여","하기는한데","하기만 하면","하기보다는","하기에","하나","하느니","하는 김에","하는 편이 낫다","하는것도","하는것만 못하다","하는것이 낫다","하는바","하더라도","하도다","하도록시키다","하도록하다","하든지","하려고하다","하마터면","하면 할수록","하면된다","하면서","하물며","하여금","하여야","하자마자","하지 않는다면","하지 않도록","하지마","하지마라","하지만","하하","한 까닭에","한 이유는","한 후","한다면","한다면 몰라도","한데","한마디","한적이있다","한켠으로는","한항목","할 따름이다","할 생각이다","할 줄 안다","할 지경이다","할 힘이 있다","할때","할만하다","할망정","할뿐","할수있다","할수있어","할줄알다","할지라도","할지언정","함께","해도된다","해도좋다","해봐요","해서는 안된다","해야한다","해요","했어요","향하다","향하여","향해서","허","허걱","허허","헉","헉헉","헐떡헐떡","형식으로 쓰여","혹시","혹은","혼자","훨씬","휘익","휴","흐흐","흥","힘입어","︿","！","＃","＄","％","＆","（","）","＊","＋","，","０","１","２","３","４","５","６","７","８","９","：","；","＜","＞","？","＠","［","］","｛","｜","｝","～","￥"],"ku":["ئێمە","ئێوە","ئەم","ئەو","ئەوان","ئەوەی","بۆ","بێ","بێجگە","بە","بەبێ","بەدەم","بەردەم","بەرلە","بەرەوی","بەرەوە","بەلای","بەپێی","تۆ","تێ","جگە","دوای","دوو","دە","دەکات","دەگەڵ","سەر","لێ","لە","لەبابەت","لەباتی","لەبارەی","لەبرێتی","لەبن","لەبەر","لەبەینی","لەدەم","لەرێ","لەرێگا","لەرەوی","لەسەر","لەلایەن","لەناو","لەنێو","لەو","لەپێناوی","لەژێر","لەگەڵ","من","ناو","نێوان","هەر","هەروەها","و","وەک","پاش","پێ","پێش","چەند","کرد","کە","ی"],"la":["a","ab","ac","ad","at","atque","aut","autem","cum","de","dum","e","erant","erat","est","et","etiam","ex","haec","hic","hoc","in","ita","me","nec","neque","non","per","qua","quae","quam","qui","quibus","quidem","quo","quod","re","rebus","rem","res","sed","si","sic","sunt","tamen","tandem","te","ut","vel"],"lt":["abi","abidvi","abiejose","abiejuose","abiej\xf8","abiem","abigaliai","abipus","abu","abudu","ai","ana","anaiptol","anaisiais","anajai","anajam","anajame","anapus","anas","anasai","anasis","anei","aniedvi","anieji","aniesiems","anoji","anojo","anojoje","anokia","anoks","anosiomis","anosioms","anosios","anosiose","anot","ant","antai","anuodu","anuoju","anuosiuose","anuosius","an\xe0ja","an\xe0j\xe0","an\xe0j\xe1","an\xe0sias","an\xf8j\xf8","apie","aplink","ar","arba","argi","arti","auk\xf0\xe8iau","a\xf0","be","bei","beje","bema\xfe","bent","bet","betgi","beveik","dar","dargi","daugma\xfe","deja","d\xebka","d\xebl","d\xeblei","d\xeblto","ech","et","gal","galb\xfbt","galgi","gan","gana","gi","greta","idant","iki","ir","irgi","it","itin","i\xf0","i\xf0ilgai","i\xf0vis","jaisiais","jajai","jajam","jajame","jei","jeigu","ji","jiedu","jiedvi","jieji","jiesiems","jinai","jis","jisai","jog","joji","jojo","jojoje","jokia","joks","josiomis","josioms","josios","josiose","judu","judvi","juk","jumis","jums","jumyse","juodu","juoju","juosiuose","juosius","jus","j\xe0ja","j\xe0j\xe0","j\xe0sias","j\xe1j\xe1","j\xf8j\xf8","j\xfbs","j\xfbsi\xf0kis","j\xfbsi\xf0k\xeb","j\xfbs\xf8","kad","kada","kadangi","kai","kaip","kaipgi","kas","katra","katras","katriedvi","katruodu","ka\xfein","ka\xfekas","ka\xfekatra","ka\xfekatras","ka\xfekokia","ka\xfekoks","ka\xfekuri","ka\xfekuris","kiaurai","kiek","kiekvienas","kieno","kita","kitas","kitokia","kitoks","kod\xebl","kokia","koks","kol","kolei","kone","kuomet","kur","kurgi","kuri","kuriedvi","kuris","kuriuodu","lai","lig","ligi","link","lyg","man","manaisiais","manajai","manajam","manajame","manas","manasai","manasis","mane","manieji","maniesiems","manim","manimi","mani\xf0kis","mani\xf0k\xeb","mano","manoji","manojo","manojoje","manosiomis","manosioms","manosios","manosiose","manuoju","manuosiuose","manuosius","manyje","man\xe0ja","man\xe0j\xe0","man\xe0j\xe1","man\xe0sias","man\xe6s","man\xf8j\xf8","mat","ma\xfedaug","ma\xfene","mes","mudu","mudvi","mumis","mums","mumyse","mus","m\xfbsi\xf0kis","m\xfbsi\xf0k\xeb","m\xfbs\xf8","na","nagi","ne","nebe","nebent","negi","negu","nei","nejau","nejaugi","nekaip","nelyginant","nes","net","netgi","netoli","neva","nors","nuo","n\xeb","o","ogi","oi","paeiliui","pagal","pakeliui","palaipsniui","palei","pas","pasak","paskos","paskui","paskum","pat","pati","patiems","paties","pats","patys","pat\xe1","pa\xe8iais","pa\xe8iam","pa\xe8iame","pa\xe8iu","pa\xe8iuose","pa\xe8ius","pa\xe8i\xf8","per","pernelyg","pirm","pirma","pirmiau","po","prie","prie\xf0","prie\xf0ais","pro","pusiau","rasi","rodos","sau","savaisiais","savajai","savajam","savajame","savas","savasai","savasis","save","savieji","saviesiems","savimi","savi\xf0kis","savi\xf0k\xeb","savo","savoji","savojo","savojoje","savosiomis","savosioms","savosios","savosiose","savuoju","savuosiuose","savuosius","savyje","sav\xe0ja","sav\xe0j\xe0","sav\xe0j\xe1","sav\xe0sias","sav\xe6s","sav\xf8j\xf8","skersai","skrad\xfeiai","sta\xe8iai","su","sulig","ta","tad","tai","taigi","taip","taipogi","taisiais","tajai","tajam","tajame","tamsta","tarp","tarsi","tartum","tarytum","tas","tasai","tau","tavaisiais","tavajai","tavajam","tavajame","tavas","tavasai","tavasis","tave","tavieji","taviesiems","tavimi","tavi\xf0kis","tavi\xf0k\xeb","tavo","tavoji","tavojo","tavojoje","tavosiomis","tavosioms","tavosios","tavosiose","tavuoju","tavuosiuose","tavuosius","tavyje","tav\xe0ja","tav\xe0j\xe0","tav\xe0j\xe1","tav\xe0sias","tav\xe6s","tav\xf8j\xf8","ta\xe8iau","te","tegu","tegul","tiedvi","tieji","ties","tiesiems","tiesiog","tik","tikriausiai","tiktai","toji","tojo","tojoje","tokia","toks","tol","tolei","toliau","tosiomis","tosioms","tosios","tosiose","tu","tuodu","tuoju","tuosiuose","tuosius","turb\xfbt","t\xe0ja","t\xe0j\xe0","t\xe0j\xe1","t\xe0sias","t\xf8j\xf8","t\xfblas","u\xfe","u\xfetat","u\xfevis","va","vai","viduj","vidury","vien","vienas","vienokia","vienoks","vietoj","vir\xf0","vir\xf0uj","vir\xf0um","vis","vis d\xeblto","visa","visas","visgi","visokia","visoks","vos","v\xebl","v\xeblgi","ypa\xe8","\xe1","\xe1kypai","\xe1stri\xfeai","\xf0alia","\xf0e","\xf0i","\xf0iaisiais","\xf0iajai","\xf0iajam","\xf0iajame","\xf0iapus","\xf0iedvi","\xf0ieji","\xf0iesiems","\xf0ioji","\xf0iojo","\xf0iojoje","\xf0iokia","\xf0ioks","\xf0iosiomis","\xf0iosioms","\xf0iosios","\xf0iosiose","\xf0is","\xf0isai","\xf0it","\xf0ita","\xf0itas","\xf0itiedvi","\xf0itokia","\xf0itoks","\xf0ituodu","\xf0iuodu","\xf0iuoju","\xf0iuosiuose","\xf0iuosius","\xf0i\xe0ja","\xf0i\xe0j\xe0","\xf0i\xe0sias","\xf0i\xf8j\xf8","\xf0tai","\xf0\xe1j\xe1","\xfeemiau"],"lv":["aiz","ap","apakš","apakšpus","ar","arī","augšpus","bet","bez","bija","biji","biju","bijām","bijāt","būs","būsi","būsiet","būsim","būt","būšu","caur","diemžēl","diezin","droši","dēļ","esam","esat","esi","esmu","gan","gar","iekam","iekams","iekām","iekāms","iekš","iekšpus","ik","ir","it","itin","iz","ja","jau","jeb","jebšu","jel","jo","jā","ka","kamēr","kaut","kolīdz","kopš","kā","kļuva","kļuvi","kļuvu","kļuvām","kļuvāt","kļūs","kļūsi","kļūsiet","kļūsim","kļūst","kļūstam","kļūstat","kļūsti","kļūstu","kļūt","kļūšu","labad","lai","lejpus","līdz","līdzko","ne","nebūt","nedz","nekā","nevis","nezin","no","nu","nē","otrpus","pa","par","pat","pie","pirms","pret","priekš","pār","pēc","starp","tad","tak","tapi","taps","tapsi","tapsiet","tapsim","tapt","tapāt","tapšu","taču","te","tiec","tiek","tiekam","tiekat","tieku","tik","tika","tikai","tiki","tikko","tiklab","tiklīdz","tiks","tiksiet","tiksim","tikt","tiku","tikvien","tikām","tikāt","tikšu","tomēr","topat","turpretim","turpretī","tā","tādēļ","tālab","tāpēc","un","uz","vai","var","varat","varēja","varēji","varēju","varējām","varējāt","varēs","varēsi","varēsiet","varēsim","varēt","varēšu","vien","virs","virspus","vis","viņpus","zem","ārpus","šaipus"],"ms":["abdul","abdullah","acara","ada","adalah","ahmad","air","akan","akhbar","akhir","aktiviti","alam","amat","amerika","anak","anggota","antara","antarabangsa","apa","apabila","april","as","asas","asean","asia","asing","atas","atau","australia","awal","awam","bagaimanapun","bagi","bahagian","bahan","baharu","bahawa","baik","bandar","bank","banyak","barangan","baru","baru-baru","bawah","beberapa","bekas","beliau","belum","berada","berakhir","berbanding","berdasarkan","berharap","berikutan","berjaya","berjumlah","berkaitan","berkata","berkenaan","berlaku","bermula","bernama","bernilai","bersama","berubah","besar","bhd","bidang","bilion","bn","boleh","bukan","bulan","bursa","cadangan","china","dagangan","dalam","dan","dana","dapat","dari","daripada","dasar","datang","datuk","demikian","dengan","depan","derivatives","dewan","di","diadakan","dibuka","dicatatkan","dijangka","diniagakan","dis","disember","ditutup","dolar","dr","dua","dunia","ekonomi","eksekutif","eksport","empat","enam","faedah","feb","global","hadapan","hanya","harga","hari","hasil","hingga","hubungan","ia","iaitu","ialah","indeks","india","indonesia","industri","ini","islam","isnin","isu","itu","jabatan","jalan","jan","jawatan","jawatankuasa","jepun","jika","jualan","juga","julai","jumaat","jumlah","jun","juta","kadar","kalangan","kali","kami","kata","katanya","kaunter","kawasan","ke","keadaan","kecil","kedua","kedua-dua","kedudukan","kekal","kementerian","kemudahan","kenaikan","kenyataan","kepada","kepentingan","keputusan","kerajaan","kerana","kereta","kerja","kerjasama","kes","keselamatan","keseluruhan","kesihatan","ketika","ketua","keuntungan","kewangan","khamis","kini","kira-kira","kita","klci","klibor","komposit","kontrak","kos","kuala","kuasa","kukuh","kumpulan","lagi","lain","langkah","laporan","lebih","lepas","lima","lot","luar","lumpur","mac","mahkamah","mahu","majlis","makanan","maklumat","malam","malaysia","mana","manakala","masa","masalah","masih","masing-masing","masyarakat","mata","media","mei","melalui","melihat","memandangkan","memastikan","membantu","membawa","memberi","memberikan","membolehkan","membuat","mempunyai","menambah","menarik","menawarkan","mencapai","mencatatkan","mendapat","mendapatkan","menerima","menerusi","mengadakan","mengambil","mengenai","menggalakkan","menggunakan","mengikut","mengumumkan","mengurangkan","meningkat","meningkatkan","menjadi","menjelang","menokok","menteri","menunjukkan","menurut","menyaksikan","menyediakan","mereka","merosot","merupakan","mesyuarat","minat","minggu","minyak","modal","mohd","mudah","mungkin","naik","najib","nasional","negara","negara-negara","negeri","niaga","nilai","nov","ogos","okt","oleh","operasi","orang","pada","pagi","paling","pameran","papan","para","paras","parlimen","parti","pasaran","pasukan","pegawai","pejabat","pekerja","pelabur","pelaburan","pelancongan","pelanggan","pelbagai","peluang","pembangunan","pemberita","pembinaan","pemimpin","pendapatan","pendidikan","penduduk","penerbangan","pengarah","pengeluaran","pengerusi","pengguna","pengurusan","peniaga","peningkatan","penting","peratus","perdagangan","perdana","peringkat","perjanjian","perkara","perkhidmatan","perladangan","perlu","permintaan","perniagaan","persekutuan","persidangan","pertama","pertubuhan","pertumbuhan","perusahaan","peserta","petang","pihak","pilihan","pinjaman","polis","politik","presiden","prestasi","produk","program","projek","proses","proton","pukul","pula","pusat","rabu","rakan","rakyat","ramai","rantau","raya","rendah","ringgit","rumah","sabah","sahaja","saham","sama","sarawak","satu","sawit","saya","sdn","sebagai","sebahagian","sebanyak","sebarang","sebelum","sebelumnya","sebuah","secara","sedang","segi","sehingga","sejak","sekarang","sektor","sekuriti","selain","selama","selasa","selatan","selepas","seluruh","semakin","semalam","semasa","sementara","semua","semula","sen","sendiri","seorang","sepanjang","seperti","sept","september","serantau","seri","serta","sesi","setiap","setiausaha","sidang","singapura","sini","sistem","sokongan","sri","sudah","sukan","suku","sumber","supaya","susut","syarikat","syed","tahap","tahun","tan","tanah","tanpa","tawaran","teknologi","telah","tempat","tempatan","tempoh","tenaga","tengah","tentang","terbaik","terbang","terbesar","terbuka","terdapat","terhadap","termasuk","tersebut","terus","tetapi","thailand","tiada","tidak","tiga","timbalan","timur","tindakan","tinggi","tun","tunai","turun","turut","umno","unit","untuk","untung","urus","usaha","utama","walaupun","wang","wanita","wilayah","yang"],"mr":["अधिक","अनेक","अशी","असलयाचे","असलेल्या","असा","असून","असे","आज","आणि","आता","आपल्या","आला","आली","आले","आहे","आहेत","एक","एका","कमी","करणयात","करून","का","काम","काय","काही","किवा","की","केला","केली","केले","कोटी","गेल्या","घेऊन","जात","झाला","झाली","झाले","झालेल्या","टा","डॉ","तर","तरी","तसेच","ता","ती","तीन","ते","तो","त्या","त्याचा","त्याची","त्याच्या","त्याना","त्यानी","त्यामुळे","त्री","दिली","दोन","न","नाही","निर्ण्य","पण","पम","परयतन","पाटील","म","मात्र","माहिती","मी","मुबी","म्हणजे","म्हणाले","म्हणून","या","याचा","याची","याच्या","याना","यानी","येणार","येत","येथील","येथे","लाख","व","व्यकत","सर्व","सागित्ले","सुरू","हजार","हा","ही","हे","होणार","होत","होता","होती","होते"],"no":["alle","andre","arbeid","at","av","bare","begge","ble","blei","bli","blir","blitt","bort","bra","bruke","b\xe5de","b\xe5e","da","de","deg","dei","deim","deira","deires","dem","den","denne","der","dere","deres","det","dette","di","din","disse","ditt","du","dykk","dykkar","d\xe5","eg","ein","eit","eitt","eller","elles","en","ene","eneste","enhver","enn","er","et","ett","etter","folk","for","fordi","fors\xfbke","fra","f\xe5","f\xf8r","f\xfbr","f\xfbrst","gjorde","gj\xfbre","god","g\xe5","ha","hadde","han","hans","har","hennar","henne","hennes","her","hj\xe5","ho","hoe","honom","hoss","hossen","hun","hva","hvem","hver","hvilke","hvilken","hvis","hvor","hvordan","hvorfor","i","ikke","ikkje","ingen","ingi","inkje","inn","innen","inni","ja","jeg","kan","kom","korleis","korso","kun","kunne","kva","kvar","kvarhelst","kven","kvi","kvifor","lage","lang","lik","like","makt","man","mange","me","med","medan","meg","meget","mellom","men","mens","mer","mest","mi","min","mine","mitt","mot","mye","mykje","m\xe5","m\xe5te","navn","ned","nei","no","noe","noen","noka","noko","nokon","nokor","nokre","ny","n\xe5","n\xe5r","og","ogs\xe5","om","opp","oss","over","part","punkt","p\xe5","rett","riktig","samme","sant","seg","selv","si","sia","sidan","siden","sin","sine","sist","sitt","sj\xf8l","skal","skulle","slik","slutt","so","som","somme","somt","start","stille","s\xe5","s\xe5nn","tid","til","tilbake","tilstand","um","under","upp","ut","uten","var","vart","varte","ved","verdi","vere","verte","vi","vil","ville","vite","vore","vors","vort","v\xe5r","v\xe6re","v\xe6rt","v\xf6re","v\xf6rt","\xe5"],"fa":["!",",",".",":",";","،","؛","؟","آباد","آره","آری","آمد","آمده","آن","آنان","آنجا","آنطور","آنقدر","آنكه","آنها","آنچه","آنکه","آورد","آورده","آيد","آی","آیا","آیند","اتفاقا","اثرِ","احتراما","احتمالا","اخیر","اری","از","ازجمله","اساسا","است","استفاد","استفاده","اش","اشکارا","اصلا","اصولا","اعلام","اغلب","اكنون","الان","البته","البتّه","ام","اما","امروز","امروزه","امسال","امشب","امور","ان","انجام","اند","انشاالله","انصافا","انطور","انقدر","انها","انچنان","انکه","انگار","او","اول","اولا","اي","ايشان","ايم","اين","اينكه","اکثرا","اکنون","اگر","ای","ایا","اید","ایشان","ایم","این","اینجا","ایند","اینطور","اینقدر","اینها","اینچنین","اینک","اینکه","اینگونه","با","بار","بارة","باره","بارها","باز","بازهم","باش","باشد","باشم","باشند","باشيم","باشی","باشید","باشیم","بالا","بالاخره","بالایِ","بالطبع","بايد","باید","بتوان","بتواند","بتوانی","بتوانیم","بخش","بخشی","بخواه","بخواهد","بخواهم","بخواهند","بخواهی","بخواهید","بخواهیم","بد","بدون","بر","برابر","برابرِ","براحتی","براساس","براستی","براي","برای","برایِ","برخوردار","برخي","برخی","برداري","برعکس","بروز","بزرگ","بزودی","بسا","بسيار","بسياري","بسیار","بسیاری","بطور","بعد","بعدا","بعدها","بعری","بعضا","بعضي","بلافاصله","بلكه","بله","بلکه","بلی","بنابراين","بنابراین","بندي","به","بهتر","بهترين","بود","بودم","بودن","بودند","بوده","بودی","بودید","بودیم","بویژه","بي","بيست","بيش","بيشتر","بيشتري","بين","بکن","بکند","بکنم","بکنند","بکنی","بکنید","بکنیم","بگو","بگوید","بگویم","بگویند","بگویی","بگویید","بگوییم","بگیر","بگیرد","بگیرم","بگیرند","بگیری","بگیرید","بگیریم","بی","بیا","بیاب","بیابد","بیابم","بیابند","بیابی","بیابید","بیابیم","بیاور","بیاورد","بیاورم","بیاورند","بیاوری","بیاورید","بیاوریم","بیاید","بیایم","بیایند","بیایی","بیایید","بیاییم","بیرون","بیرونِ","بیش","بیشتر","بیشتری","بین","ت","تا","تازه","تاكنون","تان","تاکنون","تحت","تر","تر  براساس","ترين","تقریبا","تلویحا","تمام","تماما","تمامي","تنها","تو","تواند","توانست","توانستم","توانستن","توانستند","توانسته","توانستی","توانستیم","توانم","توانند","توانی","توانید","توانیم","توسط","تولِ","تویِ","ثانیا","جا","جاي","جايي","جای","جدا","جديد","جدید","جريان","جریان","جز","جلوگيري","جلویِ","جمعا","جناح","جهت","حاضر","حال","حالا","حتما","حتي","حتی","حداکثر","حدودا","حدودِ","حق","خارجِ","خب","خدمات","خصوصا","خلاصه","خواست","خواستم","خواستن","خواستند","خواسته","خواستی","خواستید","خواستیم","خواهد","خواهم","خواهند","خواهيم","خواهی","خواهید","خواهیم","خوب","خود","خودت","خودتان","خودش","خودشان","خودم","خودمان","خوشبختانه","خويش","خویش","خویشتن","خیاه","خیر","خیلی","داد","دادم","دادن","دادند","داده","دادی","دادید","دادیم","دار","دارد","دارم","دارند","داريم","داری","دارید","داریم","داشت","داشتم","داشتن","داشتند","داشته","داشتی","داشتید","داشتیم","دانست","دانند","دایم","دایما","در","درباره","درمجموع","درون","دریغ","دقیقا","دنبالِ","ده","دهد","دهم","دهند","دهی","دهید","دهیم","دو","دوباره","دوم","ديده","ديروز","ديگر","ديگران","ديگري","دیر","دیروز","دیگر","دیگران","دیگری","را","راحت","راسا","راستی","راه","رسما","رسید","رفت","رفته","رو","روب","روز","روزانه","روزهاي","روي","روی","رویِ","ريزي","زمان","زمانی","زمینه","زود","زياد","زير","زيرا","زیر","زیرِ","سابق","ساخته","سازي","سالانه","سالیانه","سایر","سراسر","سرانجام","سریعا","سریِ","سعي","سمتِ","سوم","سوي","سوی","سویِ","سپس","شان","شايد","شاید","شخصا","شد","شدم","شدن","شدند","شده","شدی","شدید","شدیدا","شدیم","شش","شش  نداشته","شما","شناسي","شود","شوم","شوند","شونده","شوی","شوید","شویم","صرفا","صورت","ضدِّ","ضدِّ","ضمن","طبعا","طبقِ","طبیعتا","طرف","طريق","طریق","طور","طي","طی","ظاهرا","عدم","عقبِ","علّتِ","علیه","عمدا","عمدتا","عمل","عملا","عنوان","عنوانِ","غالبا","غير","غیر","فردا","فعلا","فقط","فكر","فوق","قابل","قبل","قبلا","قدری","قصدِ","قطعا","كرد","كردم","كردن","كردند","كرده","كسي","كل","كمتر","كند","كنم","كنند","كنيد","كنيم","كه","لااقل","لطفا","لطفاً","ما","مان","مانند","مانندِ","مبادا","متاسفانه","متعاقبا","مثل","مثلا","مثلِ","مجانی","مجددا","مجموعا","مختلف","مدام","مدت","مدّتی","مردم","مرسی","مستقیما","مسلما","مطمینا","معمولا","مقابل","ممکن","من","موارد","مورد","موقتا","مي","ميليارد","ميليون","مگر","می","می شود","میان","می‌رسد","می‌رود","می‌شود","می‌کنیم","ناشي","نام","ناگاه","ناگهان","ناگهانی","نبايد","نباید","نبود","نخست","نخستين","نخواهد","نخواهم","نخواهند","نخواهی","نخواهید","نخواهیم","ندارد","ندارم","ندارند","نداری","ندارید","نداریم","نداشت","نداشتم","نداشتند","نداشته","نداشتی","نداشتید","نداشتیم","نزديك","نزدِ","نزدیکِ","نسبتا","نشان","نشده","نظير","نظیر","نكرده","نمايد","نمي","نمی","نمی‌شود","نه","نهایتا","نوع","نوعي","نوعی","نيز","نيست","نگاه","نیز","نیست","ها","هاي","هايي","های","هایی","هبچ","هر","هرچه","هرگز","هزار","هست","هستم","هستند","هستيم","هستی","هستید","هستیم","هفت","هم","همان","همه","همواره","همين","همچنان","همچنين","همچنین","همچون","همیشه","همین","هنوز","هنگام","هنگامِ","هنگامی","هيچ","هیچ","هیچگاه","و","واقعا","واقعی","وجود","وسطِ","وضع","وقتي","وقتی","وقتیکه","ولی","وي","وگو","وی","ویژه","يا","يابد","يك","يكديگر","يكي","ّه","٪","پارسال","پاعینِ","پس","پنج","پيش","پیدا","پیش","پیشاپیش","پیشتر","پیشِ","چرا","چطور","چقدر","چنان","چنانچه","چنانکه","چند","چندین","چنين","چنین","چه","چهار","چو","چون","چيزي","چگونه","چیز","چیزی","چیست","کاش","کامل","کاملا","کتبا","کجا","کجاست","کدام","کرد","کردم","کردن","کردند","کرده","کردی","کردید","کردیم","کس","کسانی","کسی","کل","کلا","کم","کماکان","کمتر","کمتری","کمی","کن","کنار","کنارِ","کند","کنم","کنند","کننده","کنون","کنونی","کنی","کنید","کنیم","که","کو","کَی","کی","گاه","گاهی","گذاري","گذاشته","گذشته","گردد","گرفت","گرفتم","گرفتن","گرفتند","گرفته","گرفتی","گرفتید","گرفتیم","گروهي","گفت","گفتم","گفتن","گفتند","گفته","گفتی","گفتید","گفتیم","گه","گهگاه","گو","گويد","گويند","گویا","گوید","گویم","گویند","گویی","گویید","گوییم","گيرد","گيري","گیرد","گیرم","گیرند","گیری","گیرید","گیریم","ی","یا","یابد","یابم","یابند","یابی","یابید","یابیم","یافت","یافتم","یافتن","یافته","یافتی","یافتید","یافتیم","یعنی","یقینا","یه","یک","یکی","۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"],"pl":["a","aby","ach","acz","aczkolwiek","aj","albo","ale","ależ","ani","aż","bardziej","bardzo","bez","bo","bowiem","by","byli","bym","bynajmniej","być","był","była","było","były","będzie","będą","cali","cała","cały","chce","choć","ci","ciebie","cię","co","cokolwiek","coraz","coś","czasami","czasem","czemu","czy","czyli","często","daleko","dla","dlaczego","dlatego","do","dobrze","dokąd","dość","dr","dużo","dwa","dwaj","dwie","dwoje","dzisiaj","dziś","gdy","gdyby","gdyż","gdzie","gdziekolwiek","gdzieś","go","godz","hab","i","ich","ii","iii","ile","im","inna","inne","inny","innych","inż","iv","ix","iż","ja","jak","jakaś","jakby","jaki","jakichś","jakie","jakiś","jakiż","jakkolwiek","jako","jakoś","je","jeden","jedna","jednak","jednakże","jedno","jednym","jedynie","jego","jej","jemu","jest","jestem","jeszcze","jeśli","jeżeli","już","ją","każdy","kiedy","kierunku","kilka","kilku","kimś","kto","ktokolwiek","ktoś","kt\xf3ra","kt\xf3re","kt\xf3rego","kt\xf3rej","kt\xf3ry","kt\xf3rych","kt\xf3rym","kt\xf3rzy","ku","lat","lecz","lub","ma","mają","mam","mamy","mało","mgr","mi","miał","mimo","między","mnie","mną","mogą","moi","moim","moja","moje","może","możliwe","można","mu","musi","my","m\xf3j","na","nad","nam","nami","nas","nasi","nasz","nasza","nasze","naszego","naszych","natomiast","natychmiast","nawet","nic","nich","nie","niech","niego","niej","niemu","nigdy","nim","nimi","nią","niż","no","nowe","np","nr","o","o.o.","obok","od","ok","około","on","ona","one","oni","ono","oraz","oto","owszem","pan","pana","pani","pl","po","pod","podczas","pomimo","ponad","ponieważ","powinien","powinna","powinni","powinno","poza","prawie","prof","przecież","przed","przede","przedtem","przez","przy","raz","razie","roku","r\xf3wnież","sam","sama","się","skąd","sobie","sobą","spos\xf3b","swoje","są","ta","tak","taka","taki","takich","takie","także","tam","te","tego","tej","tel","temu","ten","teraz","też","to","tobie","tobą","toteż","totobą","trzeba","tu","tutaj","twoi","twoim","twoja","twoje","twym","tw\xf3j","ty","tych","tylko","tym","tys","tzw","tę","u","ul","vi","vii","viii","vol","w","wam","wami","was","wasi","wasz","wasza","wasze","we","według","wie","wiele","wielu","więc","więcej","wszyscy","wszystkich","wszystkie","wszystkim","wszystko","wtedy","www","wy","właśnie","wśr\xf3d","xi","xii","xiii","xiv","xv","z","za","zapewne","zawsze","zaś","ze","zeznowu","znowu","zn\xf3w","został","zł","żaden","żadna","żadne","żadnych","że","żeby"],"pt":["a","acerca","adeus","agora","ainda","alem","algmas","algo","algumas","alguns","ali","al\xe9m","ambas","ambos","ano","anos","antes","ao","aonde","aos","apenas","apoio","apontar","apos","ap\xf3s","aquela","aquelas","aquele","aqueles","aqui","aquilo","as","assim","atrav\xe9s","atr\xe1s","at\xe9","a\xed","baixo","bastante","bem","boa","boas","bom","bons","breve","cada","caminho","catorze","cedo","cento","certamente","certeza","cima","cinco","coisa","com","como","comprido","conhecido","conselho","contra","contudo","corrente","cuja","cujas","cujo","cujos","custa","c\xe1","da","daquela","daquelas","daquele","daqueles","dar","das","de","debaixo","dela","delas","dele","deles","demais","dentro","depois","desde","desligado","dessa","dessas","desse","desses","desta","destas","deste","destes","deve","devem","dever\xe1","dez","dezanove","dezasseis","dezassete","dezoito","dia","diante","direita","dispoe","dispoem","diversa","diversas","diversos","diz","dizem","dizer","do","dois","dos","doze","duas","durante","d\xe1","d\xe3o","d\xfavida","e","ela","elas","ele","eles","em","embora","enquanto","entao","entre","ent\xe3o","era","eram","essa","essas","esse","esses","esta","estado","estamos","estar","estar\xe1","estas","estava","estavam","este","esteja","estejam","estejamos","estes","esteve","estive","estivemos","estiver","estivera","estiveram","estiverem","estivermos","estivesse","estivessem","estiveste","estivestes","estiv\xe9ramos","estiv\xe9ssemos","estou","est\xe1","est\xe1s","est\xe1vamos","est\xe3o","eu","exemplo","falta","far\xe1","favor","faz","fazeis","fazem","fazemos","fazer","fazes","fazia","fa\xe7o","fez","fim","final","foi","fomos","for","fora","foram","forem","forma","formos","fosse","fossem","foste","fostes","fui","f\xf4ramos","f\xf4ssemos","geral","grande","grandes","grupo","ha","haja","hajam","hajamos","havemos","havia","hei","hoje","hora","horas","houve","houvemos","houver","houvera","houveram","houverei","houverem","houveremos","houveria","houveriam","houvermos","houver\xe1","houver\xe3o","houver\xedamos","houvesse","houvessem","houv\xe9ramos","houv\xe9ssemos","h\xe1","h\xe3o","iniciar","inicio","ir","ir\xe1","isso","ista","iste","isto","j\xe1","lado","lhe","lhes","ligado","local","logo","longe","lugar","l\xe1","maior","maioria","maiorias","mais","mal","mas","me","mediante","meio","menor","menos","meses","mesma","mesmas","mesmo","mesmos","meu","meus","mil","minha","minhas","momento","muito","muitos","m\xe1ximo","m\xeas","na","nada","nao","naquela","naquelas","naquele","naqueles","nas","nem","nenhuma","nessa","nessas","nesse","nesses","nesta","nestas","neste","nestes","no","noite","nome","nos","nossa","nossas","nosso","nossos","nova","novas","nove","novo","novos","num","numa","numas","nunca","nuns","n\xe3o","n\xedvel","n\xf3s","n\xfamero","o","obra","obrigada","obrigado","oitava","oitavo","oito","onde","ontem","onze","os","ou","outra","outras","outro","outros","para","parece","parte","partir","paucas","pegar","pela","pelas","pelo","pelos","perante","perto","pessoas","pode","podem","poder","poder\xe1","podia","pois","ponto","pontos","por","porque","porqu\xea","portanto","posi\xe7\xe3o","possivelmente","posso","poss\xedvel","pouca","pouco","poucos","povo","primeira","primeiras","primeiro","primeiros","promeiro","propios","proprio","pr\xf3pria","pr\xf3prias","pr\xf3prio","pr\xf3prios","pr\xf3xima","pr\xf3ximas","pr\xf3ximo","pr\xf3ximos","puderam","p\xf4de","p\xf5e","p\xf5em","quais","qual","qualquer","quando","quanto","quarta","quarto","quatro","que","quem","quer","quereis","querem","queremas","queres","quero","quest\xe3o","quieto","quinta","quinto","quinze","qu\xe1is","qu\xea","rela\xe7\xe3o","sabe","sabem","saber","se","segunda","segundo","sei","seis","seja","sejam","sejamos","sem","sempre","sendo","ser","serei","seremos","seria","seriam","ser\xe1","ser\xe3o","ser\xedamos","sete","seu","seus","sexta","sexto","sim","sistema","sob","sobre","sois","somente","somos","sou","sua","suas","s\xe3o","s\xe9tima","s\xe9timo","s\xf3","tal","talvez","tambem","tamb\xe9m","tanta","tantas","tanto","tarde","te","tem","temos","tempo","tendes","tenha","tenham","tenhamos","tenho","tens","tentar","tentaram","tente","tentei","ter","terceira","terceiro","terei","teremos","teria","teriam","ter\xe1","ter\xe3o","ter\xedamos","teu","teus","teve","tinha","tinham","tipo","tive","tivemos","tiver","tivera","tiveram","tiverem","tivermos","tivesse","tivessem","tiveste","tivestes","tiv\xe9ramos","tiv\xe9ssemos","toda","todas","todo","todos","trabalhar","trabalho","treze","tr\xeas","tu","tua","tuas","tudo","t\xe3o","t\xe9m","t\xeam","t\xednhamos","um","uma","umas","uns","usa","usar","vai","vais","valor","veja","vem","vens","ver","verdade","verdadeiro","vez","vezes","viagem","vindo","vinte","voc\xea","voc\xeas","vos","vossa","vossas","vosso","vossos","v\xe1rios","v\xe3o","v\xeam","v\xf3s","zero","\xe0","\xe0s","\xe1rea","\xe9","\xe9ramos","\xe9s","\xfaltimo"],"ro":["a","abia","acea","aceasta","această","aceea","aceeasi","acei","aceia","acel","acela","acelasi","acele","acelea","acest","acesta","aceste","acestea","acestei","acestia","acestui","aceşti","aceştia","acolo","acord","acum","adica","ai","aia","aibă","aici","aiurea","al","ala","alaturi","ale","alea","alt","alta","altceva","altcineva","alte","altfel","alti","altii","altul","am","anume","apoi","ar","are","as","asa","asemenea","asta","astazi","astea","astfel","astăzi","asupra","atare","atat","atata","atatea","atatia","ati","atit","atita","atitea","atitia","atunci","au","avea","avem","aveţi","avut","azi","aş","aşadar","aţi","b","ba","bine","bucur","bună","c","ca","cam","cand","capat","care","careia","carora","caruia","cat","catre","caut","ce","cea","ceea","cei","ceilalti","cel","cele","celor","ceva","chiar","ci","cinci","cind","cine","cineva","cit","cita","cite","citeva","citi","citiva","conform","contra","cu","cui","cum","cumva","cur\xe2nd","cur\xeend","c\xe2nd","c\xe2t","c\xe2te","c\xe2tva","c\xe2ţi","c\xeend","c\xeet","c\xeete","c\xeetva","c\xeeţi","că","căci","cărei","căror","cărui","către","d","da","daca","dacă","dar","dat","datorită","dată","dau","de","deasupra","deci","decit","degraba","deja","deoarece","departe","desi","despre","deşi","din","dinaintea","dintr","dintr-","dintre","doar","doi","doilea","două","drept","dupa","după","dă","e","ea","ei","el","ele","era","eram","este","eu","exact","eşti","f","face","fara","fata","fel","fi","fie","fiecare","fii","fim","fiu","fiţi","foarte","fost","frumos","fără","g","geaba","graţie","h","halbă","i","ia","iar","ieri","ii","il","imi","in","inainte","inapoi","inca","incit","insa","intr","intre","isi","iti","j","k","l","la","le","li","lor","lui","l\xe2ngă","l\xeengă","m","ma","mai","mare","mea","mei","mele","mereu","meu","mi","mie","mine","mod","mult","multa","multe","multi","multă","mulţi","mulţumesc","m\xe2ine","m\xeeine","mă","n","ne","nevoie","ni","nici","niciodata","nicăieri","nimeni","nimeri","nimic","niste","nişte","noastre","noastră","noi","noroc","nostri","nostru","nou","noua","nouă","noştri","nu","numai","o","opt","or","ori","oricare","orice","oricine","oricum","oric\xe2nd","oric\xe2t","oric\xeend","oric\xeet","oriunde","p","pai","parca","patra","patru","patrulea","pe","pentru","peste","pic","pina","plus","poate","pot","prea","prima","primul","prin","printr-","putini","puţin","puţina","puţină","p\xe2nă","p\xeenă","r","rog","s","sa","sa-mi","sa-ti","sai","sale","sau","se","si","sint","sintem","spate","spre","sub","sunt","suntem","sunteţi","sus","sută","s\xeent","s\xeentem","s\xeenteţi","să","săi","său","t","ta","tale","te","ti","timp","tine","toata","toate","toată","tocmai","tot","toti","totul","totusi","totuşi","toţi","trei","treia","treilea","tu","tuturor","tăi","tău","u","ul","ului","un","una","unde","undeva","unei","uneia","unele","uneori","unii","unor","unora","unu","unui","unuia","unul","v","va","vi","voastre","voastră","voi","vom","vor","vostru","vouă","voştri","vreme","vreo","vreun","vă","x","z","zece","zero","zi","zice","\xeei","\xeel","\xeemi","\xeempotriva","\xeen","\xeenainte","\xeenaintea","\xeencotro","\xeenc\xe2t","\xeenc\xeet","\xeentre","\xeentruc\xe2t","\xeentruc\xeet","\xeeţi","ăla","ălea","ăsta","ăstea","ăştia","şapte","şase","şi","ştiu","ţi","ţie"],"ru":["c","а","алло","без","белый","близко","более","больше","большой","будем","будет","будете","будешь","будто","буду","будут","будь","бы","бывает","бывь","был","была","были","было","быть","в","важная","важное","важные","важный","вам","вами","вас","ваш","ваша","ваше","ваши","вверх","вдали","вдруг","ведь","везде","вернуться","весь","вечер","взгляд","взять","вид","видел","видеть","вместе","вне","вниз","внизу","во","вода","война","вокруг","вон","вообще","вопрос","восемнадцатый","восемнадцать","восемь","восьмой","вот","впрочем","времени","время","все","все еще","всегда","всего","всем","всеми","всему","всех","всею","всю","всюду","вся","всё","второй","вы","выйти","г","где","главный","глаз","говорил","говорит","говорить","год","года","году","голова","голос","город","да","давать","давно","даже","далекий","далеко","дальше","даром","дать","два","двадцатый","двадцать","две","двенадцатый","двенадцать","дверь","двух","девятнадцатый","девятнадцать","девятый","девять","действительно","дел","делал","делать","делаю","дело","день","деньги","десятый","десять","для","до","довольно","долго","должен","должно","должный","дом","дорога","друг","другая","другие","других","друго","другое","другой","думать","душа","е","его","ее","ей","ему","если","есть","еще","ещё","ею","её","ж","ждать","же","жена","женщина","жизнь","жить","за","занят","занята","занято","заняты","затем","зато","зачем","здесь","земля","знать","значит","значить","и","иди","идти","из","или","им","имеет","имел","именно","иметь","ими","имя","иногда","их","к","каждая","каждое","каждые","каждый","кажется","казаться","как","какая","какой","кем","книга","когда","кого","ком","комната","кому","конец","конечно","которая","которого","которой","которые","который","которых","кроме","кругом","кто","куда","лежать","лет","ли","лицо","лишь","лучше","любить","люди","м","маленький","мало","мать","машина","между","меля","менее","меньше","меня","место","миллионов","мимо","минута","мир","мира","мне","много","многочисленная","многочисленное","многочисленные","многочисленный","мной","мною","мог","могу","могут","мож","может","может быть","можно","можхо","мои","мой","мор","москва","мочь","моя","моё","мы","на","наверху","над","надо","назад","наиболее","найти","наконец","нам","нами","народ","нас","начала","начать","наш","наша","наше","наши","не","него","недавно","недалеко","нее","ней","некоторый","нельзя","нем","немного","нему","непрерывно","нередко","несколько","нет","нею","неё","ни","нибудь","ниже","низко","никакой","никогда","никто","никуда","ним","ними","них","ничего","ничто","но","новый","нога","ночь","ну","нужно","нужный","нх","о","об","оба","обычно","один","одиннадцатый","одиннадцать","однажды","однако","одного","одной","оказаться","окно","около","он","она","они","оно","опять","особенно","остаться","от","ответить","отец","откуда","отовсюду","отсюда","очень","первый","перед","писать","плечо","по","под","подойди","подумать","пожалуйста","позже","пойти","пока","пол","получить","помнить","понимать","понять","пор","пора","после","последний","посмотреть","посреди","потом","потому","почему","почти","правда","прекрасно","при","про","просто","против","процентов","путь","пятнадцатый","пятнадцать","пятый","пять","работа","работать","раз","разве","рано","раньше","ребенок","решить","россия","рука","русский","ряд","рядом","с","с кем","сам","сама","сами","самим","самими","самих","само","самого","самой","самом","самому","саму","самый","свет","свое","своего","своей","свои","своих","свой","свою","сделать","сеаой","себе","себя","сегодня","седьмой","сейчас","семнадцатый","семнадцать","семь","сидеть","сила","сих","сказал","сказала","сказать","сколько","слишком","слово","случай","смотреть","сначала","снова","со","собой","собою","советский","совсем","спасибо","спросить","сразу","стал","старый","стать","стол","сторона","стоять","страна","суть","считать","т","та","так","такая","также","таки","такие","такое","такой","там","твои","твой","твоя","твоё","те","тебе","тебя","тем","теми","теперь","тех","то","тобой","тобою","товарищ","тогда","того","тоже","только","том","тому","тот","тою","третий","три","тринадцатый","тринадцать","ту","туда","тут","ты","тысяч","у","увидеть","уж","уже","улица","уметь","утро","хороший","хорошо","хотел бы","хотеть","хоть","хотя","хочешь","час","часто","часть","чаще","чего","человек","чем","чему","через","четвертый","четыре","четырнадцатый","четырнадцать","что","чтоб","чтобы","чуть","шестнадцатый","шестнадцать","шестой","шесть","эта","эти","этим","этими","этих","это","этого","этой","этом","этому","этот","эту","я","являюсь"],"sk":["a","aby","aj","ak","akej","akejže","ako","akom","akomže","akou","akouže","akože","ak\xe1","ak\xe1že","ak\xe9","ak\xe9ho","ak\xe9hože","ak\xe9mu","ak\xe9muže","ak\xe9že","ak\xfa","ak\xfaže","ak\xfd","ak\xfdch","ak\xfdchže","ak\xfdm","ak\xfdmi","ak\xfdmiže","ak\xfdmže","ak\xfdže","ale","alebo","ani","asi","avšak","až","ba","bez","bezo","bol","bola","boli","bolo","bude","budem","budeme","budete","budeš","bud\xfa","buď","by","byť","cez","cezo","dnes","do","ešte","ho","hoci","i","iba","ich","im","inej","inom","in\xe1","in\xe9","in\xe9ho","in\xe9mu","in\xed","in\xfa","in\xfd","in\xfdch","in\xfdm","in\xfdmi","ja","je","jeho","jej","jemu","ju","k","kam","kamže","každou","každ\xe1","každ\xe9","každ\xe9ho","každ\xe9mu","každ\xed","každ\xfa","každ\xfd","každ\xfdch","každ\xfdm","každ\xfdmi","kde","kej","kejže","keď","keďže","kie","kieho","kiehože","kiemu","kiemuže","kieže","koho","kom","komu","kou","kouže","kto","ktorej","ktorou","ktor\xe1","ktor\xe9","ktor\xed","ktor\xfa","ktor\xfd","ktor\xfdch","ktor\xfdm","ktor\xfdmi","ku","k\xe1","k\xe1že","k\xe9","k\xe9že","k\xfa","k\xfaže","k\xfd","k\xfdho","k\xfdhože","k\xfdm","k\xfdmu","k\xfdmuže","k\xfdže","lebo","leda","ledaže","len","ma","maj\xfa","mal","mala","mali","mať","medzi","mi","mne","mnou","moja","moje","mojej","mojich","mojim","mojimi","mojou","moju","možno","mu","musia","musieť","mus\xed","mus\xedm","mus\xedme","mus\xedte","mus\xedš","my","m\xe1","m\xe1m","m\xe1me","m\xe1te","m\xe1š","m\xf4cť","m\xf4j","m\xf4jho","m\xf4že","m\xf4žem","m\xf4žeme","m\xf4žete","m\xf4žeš","m\xf4žu","mňa","na","nad","nado","najm\xe4","nami","naša","naše","našej","naši","našich","našim","našimi","našou","ne","nech","neho","nej","nejakej","nejakom","nejakou","nejak\xe1","nejak\xe9","nejak\xe9ho","nejak\xe9mu","nejak\xfa","nejak\xfd","nejak\xfdch","nejak\xfdm","nejak\xfdmi","nemu","než","nich","nie","niektorej","niektorom","niektorou","niektor\xe1","niektor\xe9","niektor\xe9ho","niektor\xe9mu","niektor\xfa","niektor\xfd","niektor\xfdch","niektor\xfdm","niektor\xfdmi","nielen","niečo","nim","nimi","nič","ničoho","ničom","ničomu","nič\xedm","no","n\xe1m","n\xe1s","n\xe1š","n\xe1šho","n\xedm","o","od","odo","on","ona","oni","ono","ony","oň","oňho","po","pod","podo","podľa","pokiaľ","popod","popri","potom","poza","pre","pred","predo","preto","pretože","prečo","pri","pr\xe1ve","s","sa","seba","sebe","sebou","sem","si","sme","so","som","ste","svoj","svoja","svoje","svojho","svojich","svojim","svojimi","svojou","svoju","svoj\xedm","s\xfa","ta","tak","takej","takejto","tak\xe1","tak\xe1to","tak\xe9","tak\xe9ho","tak\xe9hoto","tak\xe9mu","tak\xe9muto","tak\xe9to","tak\xed","tak\xfa","tak\xfato","tak\xfd","tak\xfdto","takže","tam","teba","tebe","tebou","teda","tej","tejto","ten","tento","ti","tie","tieto","tiež","to","toho","tohoto","tohto","tom","tomto","tomu","tomuto","toto","tou","touto","tu","tvoj","tvoja","tvoje","tvojej","tvojho","tvoji","tvojich","tvojim","tvojimi","tvoj\xedm","ty","t\xe1","t\xe1to","t\xed","t\xedto","t\xfa","t\xfato","t\xfdch","t\xfdm","t\xfdmi","t\xfdmto","u","už","v","vami","vaša","vaše","vašej","vaši","vašich","vašim","vaš\xedm","veď","viac","vo","vy","v\xe1m","v\xe1s","v\xe1š","v\xe1šho","však","všetci","všetka","všetko","všetky","všetok","z","za","začo","začože","zo","\xe1no","čej","či","čia","čie","čieho","čiemu","čiu","čo","čoho","čom","čomu","čou","čože","č\xed","č\xedm","č\xedmi","ďalšia","ďalšie","ďalšieho","ďalšiemu","ďalšiu","ďalšom","ďalšou","ďalš\xed","ďalš\xedch","ďalš\xedm","ďalš\xedmi","ňom","ňou","ňu","že"],"sl":["a","ali","april","avgust","b","bi","bil","bila","bile","bili","bilo","biti","blizu","bo","bodo","bojo","bolj","bom","bomo","boste","bova","boš","brez","c","cel","cela","celi","celo","d","da","daleč","dan","danes","datum","december","deset","deseta","deseti","deseto","devet","deveta","deveti","deveto","do","dober","dobra","dobri","dobro","dokler","dol","dolg","dolga","dolgi","dovolj","drug","druga","drugi","drugo","dva","dve","e","eden","en","ena","ene","eni","enkrat","eno","etc.","f","februar","g","g.","ga","ga.","gor","gospa","gospod","h","halo","i","idr.","ii","iii","in","iv","ix","iz","j","januar","jaz","je","ji","jih","jim","jo","julij","junij","jutri","k","kadarkoli","kaj","kajti","kako","kakor","kamor","kamorkoli","kar","karkoli","katerikoli","kdaj","kdo","kdorkoli","ker","ki","kje","kjer","kjerkoli","ko","koder","koderkoli","koga","komu","kot","kratek","kratka","kratke","kratki","l","lahka","lahke","lahki","lahko","le","lep","lepa","lepe","lepi","lepo","leto","m","maj","majhen","majhna","majhni","malce","malo","manj","marec","me","med","medtem","mene","mesec","mi","midva","midve","mnogo","moj","moja","moje","mora","morajo","moram","moramo","morate","moraš","morem","mu","n","na","nad","naj","najina","najino","najmanj","naju","največ","nam","narobe","nas","nato","nazaj","naš","naša","naše","ne","nedavno","nedelja","nek","neka","nekaj","nekatere","nekateri","nekatero","nekdo","neke","nekega","neki","nekje","neko","nekoga","nekoč","ni","nikamor","nikdar","nikjer","nikoli","nič","nje","njega","njegov","njegova","njegovo","njej","njemu","njen","njena","njeno","nji","njih","njihov","njihova","njihovo","njiju","njim","njo","njun","njuna","njuno","no","nocoj","november","npr.","o","ob","oba","obe","oboje","od","odprt","odprta","odprti","okoli","oktober","on","onadva","one","oni","onidve","osem","osma","osmi","osmo","oz.","p","pa","pet","peta","petek","peti","peto","po","pod","pogosto","poleg","poln","polna","polni","polno","ponavadi","ponedeljek","ponovno","potem","povsod","pozdravljen","pozdravljeni","prav","prava","prave","pravi","pravo","prazen","prazna","prazno","prbl.","precej","pred","prej","preko","pri","pribl.","približno","primer","pripravljen","pripravljena","pripravljeni","proti","prva","prvi","prvo","r","ravno","redko","res","reč","s","saj","sam","sama","same","sami","samo","se","sebe","sebi","sedaj","sedem","sedma","sedmi","sedmo","sem","september","seveda","si","sicer","skoraj","skozi","slab","smo","so","sobota","spet","sreda","srednja","srednji","sta","ste","stran","stvar","sva","t","ta","tak","taka","take","taki","tako","takoj","tam","te","tebe","tebi","tega","težak","težka","težki","težko","ti","tista","tiste","tisti","tisto","tj.","tja","to","toda","torek","tretja","tretje","tretji","tri","tu","tudi","tukaj","tvoj","tvoja","tvoje","u","v","vaju","vam","vas","vaš","vaša","vaše","ve","vedno","velik","velika","veliki","veliko","vendar","ves","več","vi","vidva","vii","viii","visok","visoka","visoke","visoki","vsa","vsaj","vsak","vsaka","vsakdo","vsake","vsaki","vsakomur","vse","vsega","vsi","vso","včasih","včeraj","x","z","za","zadaj","zadnji","zakaj","zaprta","zaprti","zaprto","zdaj","zelo","zunaj","č","če","često","četrta","četrtek","četrti","četrto","čez","čigav","š","šest","šesta","šesti","šesto","štiri","ž","že"],"so":["aad","albaabkii","atabo","ay","ayaa","ayee","ayuu","dhan","hadana","in","inuu","isku","jiray","jirtay","ka","kale","kasoo","ku","kuu","lakin","markii","oo","si","soo","uga","ugu","uu","waa","waxa","waxuu"],"st":["a","ba","bane","bona","e","ea","eaba","empa","ena","ha","hae","hape","ho","hore","ka","ke","la","le","li","me","mo","moo","ne","o","oa","re","sa","se","tloha","tsa","tse"],"es":["0","1","2","3","4","5","6","7","8","9","_","a","actualmente","acuerdo","adelante","ademas","adem\xe1s","adrede","afirm\xf3","agreg\xf3","ahi","ahora","ah\xed","al","algo","alguna","algunas","alguno","algunos","alg\xfan","alli","all\xed","alrededor","ambos","ampleamos","antano","anta\xf1o","ante","anterior","antes","apenas","aproximadamente","aquel","aquella","aquellas","aquello","aquellos","aqui","aqu\xe9l","aqu\xe9lla","aqu\xe9llas","aqu\xe9llos","aqu\xed","arriba","arribaabajo","asegur\xf3","asi","as\xed","atras","aun","aunque","ayer","a\xf1adi\xf3","a\xfan","b","bajo","bastante","bien","breve","buen","buena","buenas","bueno","buenos","c","cada","casi","cerca","cierta","ciertas","cierto","ciertos","cinco","claro","coment\xf3","como","con","conmigo","conocer","conseguimos","conseguir","considera","consider\xf3","consigo","consigue","consiguen","consigues","contigo","contra","cosas","creo","cual","cuales","cualquier","cuando","cuanta","cuantas","cuanto","cuantos","cuatro","cuenta","cu\xe1l","cu\xe1les","cu\xe1ndo","cu\xe1nta","cu\xe1ntas","cu\xe1nto","cu\xe1ntos","c\xf3mo","d","da","dado","dan","dar","de","debajo","debe","deben","debido","decir","dej\xf3","del","delante","demasiado","dem\xe1s","dentro","deprisa","desde","despacio","despues","despu\xe9s","detras","detr\xe1s","dia","dias","dice","dicen","dicho","dieron","diferente","diferentes","dijeron","dijo","dio","donde","dos","durante","d\xeda","d\xedas","d\xf3nde","e","ejemplo","el","ella","ellas","ello","ellos","embargo","empleais","emplean","emplear","empleas","empleo","en","encima","encuentra","enfrente","enseguida","entonces","entre","era","erais","eramos","eran","eras","eres","es","esa","esas","ese","eso","esos","esta","estaba","estabais","estaban","estabas","estad","estada","estadas","estado","estados","estais","estamos","estan","estando","estar","estaremos","estar\xe1","estar\xe1n","estar\xe1s","estar\xe9","estar\xe9is","estar\xeda","estar\xedais","estar\xedamos","estar\xedan","estar\xedas","estas","este","estemos","esto","estos","estoy","estuve","estuviera","estuvierais","estuvieran","estuvieras","estuvieron","estuviese","estuvieseis","estuviesen","estuvieses","estuvimos","estuviste","estuvisteis","estuvi\xe9ramos","estuvi\xe9semos","estuvo","est\xe1","est\xe1bamos","est\xe1is","est\xe1n","est\xe1s","est\xe9","est\xe9is","est\xe9n","est\xe9s","ex","excepto","existe","existen","explic\xf3","expres\xf3","f","fin","final","fue","fuera","fuerais","fueran","fueras","fueron","fuese","fueseis","fuesen","fueses","fui","fuimos","fuiste","fuisteis","fu\xe9ramos","fu\xe9semos","g","general","gran","grandes","gueno","h","ha","haber","habia","habida","habidas","habido","habidos","habiendo","habla","hablan","habremos","habr\xe1","habr\xe1n","habr\xe1s","habr\xe9","habr\xe9is","habr\xeda","habr\xedais","habr\xedamos","habr\xedan","habr\xedas","hab\xe9is","hab\xeda","hab\xedais","hab\xedamos","hab\xedan","hab\xedas","hace","haceis","hacemos","hacen","hacer","hacerlo","haces","hacia","haciendo","hago","han","has","hasta","hay","haya","hayamos","hayan","hayas","hay\xe1is","he","hecho","hemos","hicieron","hizo","horas","hoy","hube","hubiera","hubierais","hubieran","hubieras","hubieron","hubiese","hubieseis","hubiesen","hubieses","hubimos","hubiste","hubisteis","hubi\xe9ramos","hubi\xe9semos","hubo","i","igual","incluso","indic\xf3","informo","inform\xf3","intenta","intentais","intentamos","intentan","intentar","intentas","intento","ir","j","junto","k","l","la","lado","largo","las","le","lejos","les","lleg\xf3","lleva","llevar","lo","los","luego","lugar","m","mal","manera","manifest\xf3","mas","mayor","me","mediante","medio","mejor","mencion\xf3","menos","menudo","mi","mia","mias","mientras","mio","mios","mis","misma","mismas","mismo","mismos","modo","momento","mucha","muchas","mucho","muchos","muy","m\xe1s","m\xed","m\xeda","m\xedas","m\xedo","m\xedos","n","nada","nadie","ni","ninguna","ningunas","ninguno","ningunos","ning\xfan","no","nos","nosotras","nosotros","nuestra","nuestras","nuestro","nuestros","nueva","nuevas","nuevo","nuevos","nunca","o","ocho","os","otra","otras","otro","otros","p","pais","para","parece","parte","partir","pasada","pasado","pa\xecs","peor","pero","pesar","poca","pocas","poco","pocos","podeis","podemos","poder","podria","podriais","podriamos","podrian","podrias","podr\xe1","podr\xe1n","podr\xeda","podr\xedan","poner","por","por qu\xe9","porque","posible","primer","primera","primero","primeros","principalmente","pronto","propia","propias","propio","propios","proximo","pr\xf3ximo","pr\xf3ximos","pudo","pueda","puede","pueden","puedo","pues","q","qeu","que","qued\xf3","queremos","quien","quienes","quiere","quiza","quizas","quiz\xe1","quiz\xe1s","qui\xe9n","qui\xe9nes","qu\xe9","r","raras","realizado","realizar","realiz\xf3","repente","respecto","s","sabe","sabeis","sabemos","saben","saber","sabes","sal","salvo","se","sea","seamos","sean","seas","segun","segunda","segundo","seg\xfan","seis","ser","sera","seremos","ser\xe1","ser\xe1n","ser\xe1s","ser\xe9","ser\xe9is","ser\xeda","ser\xedais","ser\xedamos","ser\xedan","ser\xedas","se\xe1is","se\xf1al\xf3","si","sido","siempre","siendo","siete","sigue","siguiente","sin","sino","sobre","sois","sola","solamente","solas","solo","solos","somos","son","soy","soyos","su","supuesto","sus","suya","suyas","suyo","suyos","s\xe9","s\xed","s\xf3lo","t","tal","tambien","tambi\xe9n","tampoco","tan","tanto","tarde","te","temprano","tendremos","tendr\xe1","tendr\xe1n","tendr\xe1s","tendr\xe9","tendr\xe9is","tendr\xeda","tendr\xedais","tendr\xedamos","tendr\xedan","tendr\xedas","tened","teneis","tenemos","tener","tenga","tengamos","tengan","tengas","tengo","teng\xe1is","tenida","tenidas","tenido","tenidos","teniendo","ten\xe9is","ten\xeda","ten\xedais","ten\xedamos","ten\xedan","ten\xedas","tercera","ti","tiempo","tiene","tienen","tienes","toda","todas","todavia","todav\xeda","todo","todos","total","trabaja","trabajais","trabajamos","trabajan","trabajar","trabajas","trabajo","tras","trata","trav\xe9s","tres","tu","tus","tuve","tuviera","tuvierais","tuvieran","tuvieras","tuvieron","tuviese","tuvieseis","tuviesen","tuvieses","tuvimos","tuviste","tuvisteis","tuvi\xe9ramos","tuvi\xe9semos","tuvo","tuya","tuyas","tuyo","tuyos","t\xfa","u","ultimo","un","una","unas","uno","unos","usa","usais","usamos","usan","usar","usas","uso","usted","ustedes","v","va","vais","valor","vamos","van","varias","varios","vaya","veces","ver","verdad","verdadera","verdadero","vez","vosotras","vosotros","voy","vuestra","vuestras","vuestro","vuestros","w","x","y","ya","yo","z","\xe9l","\xe9ramos","\xe9sa","\xe9sas","\xe9se","\xe9sos","\xe9sta","\xe9stas","\xe9ste","\xe9stos","\xfaltima","\xfaltimas","\xfaltimo","\xfaltimos"],"sw":["akasema","alikuwa","alisema","baada","basi","bila","cha","chini","hadi","hapo","hata","hivyo","hiyo","huku","huo","ili","ilikuwa","juu","kama","karibu","katika","kila","kima","kisha","kubwa","kutoka","kuwa","kwa","kwamba","kwenda","kwenye","la","lakini","mara","mdogo","mimi","mkubwa","mmoja","moja","muda","mwenye","na","naye","ndani","ng","ni","nini","nonkungu","pamoja","pia","sana","sasa","sauti","tafadhali","tena","tu","vile","wa","wakati","wake","walikuwa","wao","watu","wengine","wote","ya","yake","yangu","yao","yeye","yule","za","zaidi","zake"],"sv":["aderton","adertonde","adj\xf6","aldrig","alla","allas","allt","alltid","allts\xe5","andra","andras","annan","annat","artonde","artonn","att","av","bakom","bara","beh\xf6va","beh\xf6vas","beh\xf6vde","beh\xf6vt","beslut","beslutat","beslutit","bland","blev","bli","blir","blivit","bort","borta","bra","b\xe4st","b\xe4ttre","b\xe5da","b\xe5das","dag","dagar","dagarna","dagen","de","del","delen","dem","den","denna","deras","dess","dessa","det","detta","dig","din","dina","dit","ditt","dock","dom","du","d\xe4r","d\xe4rf\xf6r","d\xe5","e","efter","eftersom","ej","elfte","eller","elva","emot","en","enkel","enkelt","enkla","enligt","ens","er","era","ers","ert","ett","ettusen","fanns","fem","femte","femtio","femtionde","femton","femtonde","fick","fin","finnas","finns","fjorton","fjortonde","fj\xe4rde","fler","flera","flesta","fram","framf\xf6r","fr\xe5n","fyra","fyrtio","fyrtionde","f\xe5","f\xe5r","f\xe5tt","f\xf6ljande","f\xf6r","f\xf6re","f\xf6rl\xe5t","f\xf6rra","f\xf6rsta","genast","genom","gick","gjorde","gjort","god","goda","godare","godast","gott","g\xe4lla","g\xe4ller","g\xe4llt","g\xe4rna","g\xe5","g\xe5r","g\xe5tt","g\xf6r","g\xf6ra","ha","hade","haft","han","hans","har","heller","hellre","helst","helt","henne","hennes","hit","hon","honom","hundra","hundraen","hundraett","hur","h\xe4r","h\xf6g","h\xf6ger","h\xf6gre","h\xf6gst","i","ibland","icke","idag","igen","ig\xe5r","imorgon","in","inf\xf6r","inga","ingen","ingenting","inget","innan","inne","inom","inte","inuti","ja","jag","jo","ju","just","j\xe4mf\xf6rt","kan","kanske","knappast","kom","komma","kommer","kommit","kr","kunde","kunna","kunnat","kvar","legat","ligga","ligger","lika","likst\xe4lld","likst\xe4llda","lilla","lite","liten","litet","l\xe4nge","l\xe4ngre","l\xe4ngst","l\xe4tt","l\xe4ttare","l\xe4ttast","l\xe5ngsam","l\xe5ngsammare","l\xe5ngsammast","l\xe5ngsamt","l\xe5ngt","l\xe5t","man","med","mej","mellan","men","mer","mera","mest","mig","min","mina","mindre","minst","mitt","mittemot","mot","mycket","m\xe5nga","m\xe5ste","m\xf6jlig","m\xf6jligen","m\xf6jligt","m\xf6jligtvis","ned","nederst","nedersta","nedre","nej","ner","ni","nio","nionde","nittio","nittionde","nitton","nittonde","nog","noll","nr","nu","nummer","n\xe4r","n\xe4sta","n\xe5gon","n\xe5gonting","n\xe5got","n\xe5gra","n\xe5n","n\xe5nting","n\xe5t","n\xf6dv\xe4ndig","n\xf6dv\xe4ndiga","n\xf6dv\xe4ndigt","n\xf6dv\xe4ndigtvis","och","ocks\xe5","ofta","oftast","olika","olikt","om","oss","p\xe5","rakt","redan","r\xe4tt","sa","sade","sagt","samma","sedan","senare","senast","sent","sex","sextio","sextionde","sexton","sextonde","sig","sin","sina","sist","sista","siste","sitt","sitta","sju","sjunde","sjuttio","sjuttionde","sjutton","sjuttonde","sj\xe4lv","sj\xe4tte","ska","skall","skulle","slutligen","sm\xe5","sm\xe5tt","snart","som","stor","stora","stort","st\xf6rre","st\xf6rst","s\xe4ga","s\xe4ger","s\xe4mre","s\xe4mst","s\xe5","s\xe5dan","s\xe5dana","s\xe5dant","ta","tack","tar","tidig","tidigare","tidigast","tidigt","till","tills","tillsammans","tio","tionde","tjugo","tjugoen","tjugoett","tjugonde","tjugotre","tjugotv\xe5","tjungo","tolfte","tolv","tre","tredje","trettio","trettionde","tretton","trettonde","tv\xe5","tv\xe5hundra","under","upp","ur","urs\xe4kt","ut","utan","utanf\xf6r","ute","va","vad","var","vara","varf\xf6r","varifr\xe5n","varit","varje","varken","vars","vars\xe5god","vart","vem","vems","verkligen","vi","vid","vidare","viktig","viktigare","viktigast","viktigt","vilka","vilkas","vilken","vilket","vill","v\xe4l","v\xe4nster","v\xe4nstra","v\xe4rre","v\xe5r","v\xe5ra","v\xe5rt","\xe4n","\xe4nnu","\xe4r","\xe4ven","\xe5t","\xe5tminstone","\xe5tta","\xe5ttio","\xe5ttionde","\xe5ttonde","\xf6ver","\xf6vermorgon","\xf6verst","\xf6vre"],"th":["กล่าว","กว่า","กัน","กับ","การ","ก็","ก่อน","ขณะ","ขอ","ของ","ขึ้น","คง","ครั้ง","ความ","คือ","จะ","จัด","จาก","จึง","ช่วง","ซึ่ง","ดัง","ด้วย","ด้าน","ตั้ง","ตั้งแต่","ตาม","ต่อ","ต่าง","ต่างๆ","ต้อง","ถึง","ถูก","ถ้า","ทั้ง","ทั้งนี้","ทาง","ที่","ที่สุด","ทุก","ทํา","ทําให้","นอกจาก","นัก","นั้น","นี้","น่า","นํา","บาง","ผล","ผ่าน","พบ","พร้อม","มา","มาก","มี","ยัง","รวม","ระหว่าง","รับ","ราย","ร่วม","ลง","วัน","ว่า","สุด","ส่ง","ส่วน","สําหรับ","หนึ่ง","หรือ","หลัง","หลังจาก","หลาย","หาก","อยาก","อยู่","อย่าง","ออก","อะไร","อาจ","อีก","เขา","เข้า","เคย","เฉพาะ","เช่น","เดียว","เดียวกัน","เนื่องจาก","เปิด","เปิดเผย","เป็น","เป็นการ","เพราะ","เพื่อ","เมื่อ","เรา","เริ่ม","เลย","เห็น","เอง","แต่","แบบ","แรก","และ","แล้ว","แห่ง","โดย","ใน","ให้","ได้","ไป","ไม่","ไว้","้ง"],"tl":["akin","aking","ako","alin","am","amin","aming","ang","ano","anumang","apat","at","atin","ating","ay","bababa","bago","bakit","bawat","bilang","dahil","dalawa","dapat","din","dito","doon","gagawin","gayunman","ginagawa","ginawa","ginawang","gumawa","gusto","habang","hanggang","hindi","huwag","iba","ibaba","ibabaw","ibig","ikaw","ilagay","ilalim","ilan","inyong","isa","isang","itaas","ito","iyo","iyon","iyong","ka","kahit","kailangan","kailanman","kami","kanila","kanilang","kanino","kanya","kanyang","kapag","kapwa","karamihan","katiyakan","katulad","kaya","kaysa","ko","kong","kulang","kumuha","kung","laban","lahat","lamang","likod","lima","maaari","maaaring","maging","mahusay","makita","marami","marapat","masyado","may","mayroon","mga","minsan","mismo","mula","muli","na","nabanggit","naging","nagkaroon","nais","nakita","namin","napaka","narito","nasaan","ng","ngayon","ni","nila","nilang","nito","niya","niyang","noon","o","pa","paano","pababa","paggawa","pagitan","pagkakaroon","pagkatapos","palabas","pamamagitan","panahon","pangalawa","para","paraan","pareho","pataas","pero","pumunta","pumupunta","sa","saan","sabi","sabihin","sarili","sila","sino","siya","tatlo","tayo","tulad","tungkol","una","walang"],"tr":["acaba","acep","adamakıllı","adeta","ait","altm\xfd\xfe","altmış","alt\xfd","altı","ama","amma","anca","ancak","arada","art\xfdk","aslında","aynen","ayrıca","az","a\xe7ık\xe7a","a\xe7ık\xe7ası","bana","bari","bazen","baz\xfd","bazı","başkası","baţka","belki","ben","benden","beni","benim","beri","beriki","be\xfe","beş","beţ","bilc\xfcmle","bile","bin","binaen","binaenaleyh","bir","biraz","birazdan","birbiri","birden","birdenbire","biri","birice","birileri","birisi","birka\xe7","birka\xe7ı","birkez","birlikte","bir\xe7ok","bir\xe7oğu","bir\xfeey","bir\xfeeyi","birşey","birşeyi","birţey","bitevi","biteviye","bittabi","biz","bizatihi","bizce","bizcileyin","bizden","bize","bizi","bizim","bizimki","bizzat","boşuna","bu","buna","bunda","bundan","bunlar","bunları","bunların","bunu","bunun","buracıkta","burada","buradan","burası","b\xf6yle","b\xf6ylece","b\xf6ylecene","b\xf6ylelikle","b\xf6ylemesine","b\xf6ylesine","b\xfcsb\xfct\xfcn","b\xfct\xfcn","cuk","c\xfcmlesi","da","daha","dahi","dahil","dahilen","daima","dair","dayanarak","de","defa","dek","demin","demincek","deminden","denli","derakap","derhal","derken","deđil","değil","değin","diye","diđer","diğer","diğeri","doksan","dokuz","dolayı","dolayısıyla","doğru","d\xf6rt","edecek","eden","ederek","edilecek","ediliyor","edilmesi","ediyor","elbet","elbette","elli","emme","en","enikonu","epey","epeyce","epeyi","esasen","esnasında","etmesi","etraflı","etraflıca","etti","ettiği","ettiğini","evleviyetle","evvel","evvela","evvelce","evvelden","evvelemirde","evveli","eđer","eğer","fakat","filanca","gah","gayet","gayetle","gayri","gayrı","gelgelelim","gene","gerek","ger\xe7i","ge\xe7ende","ge\xe7enlerde","gibi","gibilerden","gibisinden","gine","g\xf6re","gırla","hakeza","halbuki","halen","halihazırda","haliyle","handiyse","hangi","hangisi","hani","hari\xe7","hasebiyle","hasılı","hatta","hele","hem","hen\xfcz","hep","hepsi","her","herhangi","herkes","herkesin","hi\xe7","hi\xe7bir","hi\xe7biri","hoş","hulasaten","iken","iki","ila","ile","ilen","ilgili","ilk","illa","illaki","imdi","indinde","inen","insermi","ise","ister","itibaren","itibariyle","itibarıyla","iyi","iyice","iyicene","i\xe7in","iş","işte","iţte","kadar","kaffesi","kah","kala","kan\xfdmca","karşın","katrilyon","kaynak","ka\xe7ı","kelli","kendi","kendilerine","kendini","kendisi","kendisine","kendisini","kere","kez","keza","kezalik","keşke","keţke","ki","kim","kimden","kime","kimi","kimisi","kimse","kimsecik","kimsecikler","k\xfclliyen","k\xfdrk","k\xfdsaca","kırk","kısaca","lakin","leh","l\xfctfen","maada","madem","mademki","mamafih","mebni","međer","meğer","meğerki","meğerse","milyar","milyon","mu","m\xfc","m\xfd","mı","nas\xfdl","nasıl","nasılsa","nazaran","naşi","ne","neden","nedeniyle","nedenle","nedense","nerde","nerden","nerdeyse","nere","nerede","nereden","neredeyse","neresi","nereye","netekim","neye","neyi","neyse","nice","nihayet","nihayetinde","nitekim","niye","ni\xe7in","o","olan","olarak","oldu","olduklarını","olduk\xe7a","olduğu","olduğunu","olmadı","olmadığı","olmak","olması","olmayan","olmaz","olsa","olsun","olup","olur","olursa","oluyor","on","ona","onca","onculayın","onda","ondan","onlar","onlardan","onlari","onlar\xfdn","onları","onların","onu","onun","oracık","oracıkta","orada","oradan","oranca","oranla","oraya","otuz","oysa","oysaki","pek","pekala","peki","pek\xe7e","peyderpey","rağmen","sadece","sahi","sahiden","sana","sanki","sekiz","seksen","sen","senden","seni","senin","siz","sizden","sizi","sizin","sonra","sonradan","sonraları","sonunda","tabii","tam","tamam","tamamen","tamamıyla","tarafından","tek","trilyon","t\xfcm","var","vardı","vasıtasıyla","ve","velev","velhasıl","velhasılıkelam","veya","veyahut","ya","yahut","yakinen","yakında","yakından","yakınlarda","yalnız","yalnızca","yani","yapacak","yapmak","yaptı","yaptıkları","yaptığı","yaptığını","yapılan","yapılması","yapıyor","yedi","yeniden","yenilerde","yerine","yetmi\xfe","yetmiş","yetmiţ","yine","yirmi","yok","yoksa","yoluyla","y\xfcz","y\xfcz\xfcnden","zarfında","zaten","zati","zira","\xe7abuk","\xe7abuk\xe7a","\xe7eşitli","\xe7ok","\xe7okları","\xe7oklarınca","\xe7okluk","\xe7oklukla","\xe7ok\xe7a","\xe7oğu","\xe7oğun","\xe7oğunca","\xe7oğunlukla","\xe7\xfcnk\xfc","\xf6b\xfcr","\xf6b\xfcrk\xfc","\xf6b\xfcr\xfc","\xf6nce","\xf6nceden","\xf6nceleri","\xf6ncelikle","\xf6teki","\xf6tekisi","\xf6yle","\xf6ylece","\xf6ylelikle","\xf6ylemesine","\xf6z","\xfczere","\xfc\xe7","\xfeey","\xfeeyden","\xfeeyi","\xfeeyler","\xfeu","\xfeuna","\xfeunda","\xfeundan","\xfeunu","şayet","şey","şeyden","şeyi","şeyler","şu","şuna","şuncacık","şunda","şundan","şunlar","şunları","şunu","şunun","şura","şuracık","şuracıkta","şurası","ş\xf6yle","ţayet","ţimdi","ţu","ţ\xf6yle"],"uk":["авжеж","адже","але","б","без","був","була","були","було","бути","більш","вам","вас","весь","вздовж","ви","вниз","внизу","вона","вони","воно","все","всередині","всіх","від","він","да","давай","давати","де","дещо","для","до","з","завжди","замість","й","коли","ледве","майже","ми","навколо","навіть","нам","от","отже","отож","поза","про","під","та","так","такий","також","те","ти","тобто","тож","тощо","хоча","це","цей","чи","чого","що","як","який","якої","є","із","інших","їх","її"],"ur":["آئی","آئے","آج","آخر","آخرکبر","آدهی","آًب","آٹھ","آیب","اة","اخبزت","اختتبم","ادھر","ارد","اردگرد","ارکبى","اش","اضتعوبل","اضتعوبلات","اضطرذ","اضکب","اضکی","اضکے","اطراف","اغیب","افراد","الگ","اور","اوًچب","اوًچبئی","اوًچی","اوًچے","اى","اً","اًذر","اًہیں","اٹھبًب","اپٌب","اپٌے","اچھب","اچھی","اچھے","اکثر","اکٹھب","اکٹھی","اکٹھے","اکیلا","اکیلی","اکیلے","اگرچہ","اہن","ایطے","ایک","ب","ت","تبزٍ","تت","تر","ترتیت","تریي","تعذاد","تن","تو","توبم","توہی","توہیں","تٌہب","تک","تھب","تھوڑا","تھوڑی","تھوڑے","تھی","تھے","تیي","ثب","ثبئیں","ثبترتیت","ثبری","ثبرے","ثبعث","ثبلا","ثبلترتیت","ثبہر","ثدبئے","ثرآں","ثراں","ثرش","ثعذ","ثغیر","ثلٌذ","ثلٌذوثبلا","ثلکہ","ثي","ثٌب","ثٌبرہب","ثٌبرہی","ثٌبرہے","ثٌبًب","ثٌذ","ثٌذکرو","ثٌذکرًب","ثٌذی","ثڑا","ثڑوں","ثڑی","ثڑے","ثھر","ثھرا","ثھراہوا","ثھرپور","ثھی","ثہت","ثہتر","ثہتری","ثہتریي","ثیچ","ج","خب","خبرہب","خبرہی","خبرہے","خبهوظ","خبًب","خبًتب","خبًتی","خبًتے","خبًٌب","خت","ختن","خجکہ","خص","خططرذ","خلذی","خو","خواى","خوًہی","خوکہ","خٌبة","خگہ","خگہوں","خگہیں","خیطب","خیطبکہ","در","درخبت","درخہ","درخے","درزقیقت","درضت","دش","دفعہ","دلچطپ","دلچطپی","دلچطپیبں","دو","دور","دوراى","دوضرا","دوضروں","دوضری","دوضرے","دوًوں","دکھبئیں","دکھبتب","دکھبتی","دکھبتے","دکھبو","دکھبًب","دکھبیب","دی","دیب","دیتب","دیتی","دیتے","دیر","دیٌب","دیکھو","دیکھٌب","دیکھی","دیکھیں","دے","ر","راضتوں","راضتہ","راضتے","رریعہ","رریعے","رکي","رکھ","رکھب","رکھتب","رکھتبہوں","رکھتی","رکھتے","رکھی","رکھے","رہب","رہی","رہے","ز","زبصل","زبضر","زبل","زبلات","زبلیہ","زصوں","زصہ","زصے","زقبئق","زقیتیں","زقیقت","زکن","زکویہ","زیبدٍ","صبف","صسیر","صفر","صورت","صورتسبل","صورتوں","صورتیں","ض","ضبت","ضبتھ","ضبدٍ","ضبرا","ضبرے","ضبل","ضبلوں","ضت","ضرور","ضرورت","ضروری","ضلطلہ","ضوچ","ضوچب","ضوچتب","ضوچتی","ضوچتے","ضوچو","ضوچٌب","ضوچی","ضوچیں","ضکب","ضکتب","ضکتی","ضکتے","ضکٌب","ضکی","ضکے","ضیذھب","ضیذھی","ضیذھے","ضیکٌڈ","ضے","طرف","طریق","طریقوں","طریقہ","طریقے","طور","طورپر","ظبہر","ع","عذد","عظین","علاقوں","علاقہ","علاقے","علاوٍ","عووهی","غبیذ","غخص","غذ","غروع","غروعبت","غے","فرد","فی","ق","قجل","قجیلہ","قطن","لئے","لا","لازهی","لو","لوجب","لوجی","لوجے","لوسبت","لوسہ","لوگ","لوگوں","لڑکپي","لگتب","لگتی","لگتے","لگٌب","لگی","لگیں","لگے","لی","لیب","لیٌب","لیں","لے","ه","هتعلق","هختلف","هسترم","هسترهہ","هسطوش","هسیذ","هطئلہ","هطئلے","هطبئل","هطتعول","هطلق","هعلوم","هػتول","هلا","هوکي","هوکٌبت","هوکٌہ","هٌبضت","هڑا","هڑًب","هڑے","هکول","هگر","هہرثبى","هیرا","هیری","هیرے","هیں","و","وار","والے","وٍ","ًئی","ًئے","ًب","ًبپطٌذ","ًبگسیر","ًطجت","ًقطہ","ًو","ًوخواى","ًکبلٌب","ًکتہ","ًہ","ًہیں","ًیب","ًے","ٓ آش","ٹھیک","پبئے","پبش","پبًب","پبًچ","پر","پراًب","پطٌذ","پل","پورا","پوچھب","پوچھتب","پوچھتی","پوچھتے","پوچھو","پوچھوں","پوچھٌب","پوچھیں","پچھلا","پھر","پہلا","پہلی","پہلےضی","پہلےضے","پہلےضےہی","پیع","چبر","چبہب","چبہٌب","چبہے","چلا","چلو","چلیں","چلے","چکب","چکی","چکیں","چکے","چھوٹب","چھوٹوں","چھوٹی","چھوٹے","چھہ","چیسیں","ڈھوًڈا","ڈھوًڈلیب","ڈھوًڈو","ڈھوًڈًب","ڈھوًڈی","ڈھوًڈیں","ک","کئی","کئے","کب","کبفی","کبم","کت","کجھی","کرا","کرتب","کرتبہوں","کرتی","کرتے","کرتےہو","کررہب","کررہی","کررہے","کرو","کرًب","کریں","کرے","کطی","کل","کن","کوئی","کوتر","کورا","کوروں","کورٍ","کورے","کوطي","کوى","کوًطب","کوًطی","کوًطے","کھولا","کھولو","کھولٌب","کھولی","کھولیں","کھولے","کہ","کہب","کہتب","کہتی","کہتے","کہو","کہوں","کہٌب","کہی","کہیں","کہے","کی","کیب","کیطب","کیطرف","کیطے","کیلئے","کیوًکہ","کیوں","کیے","کے","کےثعذ","کےرریعے","گئی","گئے","گب","گرد","گروٍ","گروپ","گروہوں","گٌتی","گی","گیب","گے","ہر","ہن","ہو","ہوئی","ہوئے","ہوا","ہوبرا","ہوبری","ہوبرے","ہوتب","ہوتی","ہوتے","ہورہب","ہورہی","ہورہے","ہوضکتب","ہوضکتی","ہوضکتے","ہوًب","ہوًی","ہوًے","ہوچکب","ہوچکی","ہوچکے","ہوگئی","ہوگئے","ہوگیب","ہوں","ہی","ہیں","ہے","ی","یقیٌی","یہ","یہبں"],"vi":["a ha","a-l\xf4","ai","ai ai","ai nấy","al\xf4","amen","anh","bao giờ","bao l\xe2u","bao nhi\xeau","bao nả","bay biến","biết","biết bao","biết bao nhi\xeau","biết chừng n\xe0o","biết mấy","biết đ\xe2u","biết đ\xe2u chừng","biết đ\xe2u đấy","b\xe0","b\xe0i","b\xe1c","b\xe2y bẩy","b\xe2y chừ","b\xe2y giờ","b\xe2y nhi\xeau","b\xe8n","b\xe9ng","b\xf4ng","bạn","bản","bất chợt","bất cứ","bất gi\xe1c","bất k\xec","bất kể","bất kỳ","bất luận","bất nhược","bất qu\xe1","bất th\xecnh l\xecnh","bất tử","bất đồ","bấy","bấy chầy","bấy chừ","bấy giờ","bấy l\xe2u","bấy l\xe2u nay","bấy nay","bấy nhi\xeau","bập b\xe0 bập b\xf5m","bập b\xf5m","bắt đầu từ","bằng","bằng kh\xf4ng","bằng nấy","bằng ấy","bển","bệt","bị","bỏ mẹ","bỗng","bỗng chốc","bỗng dưng","bỗng kh\xf4ng","bỗng nhi\xean","bỗng đ\xe2u","bộ","bội phần","bớ","bởi","bởi chưng","bởi nhưng","bởi thế","bởi v\xec","bởi vậy","bức","cao","cha","cha chả","chao \xf4i","chiếc","cho","cho n\xean","cho tới","cho tới khi","cho đến","cho đến khi","choa","chu cha","chui cha","chung cục","chung qui","chung quy","chung quy lại","chuyện","ch\xe0nh chạnh","ch\xed chết","ch\xednh","ch\xednh l\xe0","ch\xednh thị","ch\xf9n ch\xf9n","ch\xf9n chũn","ch\xfa","ch\xfa m\xe0y","ch\xfa m\xecnh","ch\xfang m\xecnh","ch\xfang ta","ch\xfang t\xf4i","chăn chắn","chăng","chưa","chầm chập","chậc","chắc","chắc hẳn","chẳng lẽ","chẳng những","chẳng nữa","chẳng phải","chết nỗi","chết thật","chết tiệt","chỉ","chỉn","chốc chốc","chớ","chớ chi","chợt","chủn","chứ","chứ lị","coi bộ","coi m\xf2i","con","cu cậu","cuốn","cuộc","c\xe0ng","c\xe1c","c\xe1i","c\xe2y","c\xf2n","c\xf3","c\xf3 chăng l\xe0","c\xf3 dễ","c\xf3 thể","c\xf3 vẻ","c\xf3c kh\xf4","c\xf4","c\xf4 m\xecnh","c\xf4ng nhi\xean","c\xf9ng","c\xf9ng cực","c\xf9ng nhau","c\xf9ng với","căn","căn cắt","cũng","cũng như","cũng vậy","cũng vậy th\xf4i","cơ","cơ chừng","cơ hồ","cơ m\xe0","cơn","cả","cả thảy","cả thể","cảm ơn","cần","cật lực","cật sức","cậu","cổ lai","của","cứ","cứ việc","cực lực","do","do v\xec","do vậy","do đ\xf3","duy","d\xe0o","d\xec","d\xf9 cho","d\xf9 rằng","dưới","dạ","dần d\xe0","dần dần","dầu sao","dẫu","dẫu sao","dễ sợ","dễ thường","dở chừng","dữ","em","giữa","g\xec","hay","ho\xe0n to\xe0n","hoặc","hơn","hầu hết","họ","hỏi","khi","kh\xe1c","kh\xf4ng","lu\xf4n","l\xe0","l\xe0m","l\xean","l\xfac","lại","lần","lớn","muốn","m\xe0","m\xecnh","mỗi","một","một c\xe1ch","mới","mợ","ngay","ngay cả","ngay khi","ngay l\xfac","ngay lập tức","ngay tức khắc","ngay từ","nghe chừng","nghe đ\xe2u","nghen","nghiễm nhi\xean","nghỉm","ngo\xe0i","ngo\xe0i ra","ngoải","ng\xe0y","ng\xe0y c\xe0ng","ng\xe0y ng\xe0y","ng\xe0y xưa","ng\xe0y xửa","ng\xf4i","ng\xf5 hầu","ngăn ngắt","ngươi","người","ngọn","ngọt","ngộ nhỡ","nh","nhau","nhi\xean hậu","nhiều","nhiệt liệt","nhung nhăng","nh\xe0","nh\xe2n dịp","nh\xe2n tiện","nh\xe9","nh\xf3n nh\xe9n","như","như chơi","như kh\xf4ng","như quả","như thể","như tuồng","như vậy","nhưng","nhưng m\xe0","nhược bằng","nhất","nhất loạt","nhất luật","nhất mực","nhất nhất","nhất quyết","nhất sinh","nhất thiết","nhất t\xe2m","nhất tề","nhất đ\xe1n","nhất định","nhận","nhỉ","nhỡ ra","những","những ai","những như","n\xe0o","n\xe0y","n\xean","n\xean chi","n\xf3","n\xf3c","n\xf3i","năm","nơi","nấy","nếu","nếu như","nền","nọ","nớ","nức nở","nữa","oai o\xe1i","o\xe1i","pho","ph\xe8","ph\xf3c","ph\xf3t","phăn phắt","phương chi","phải","phải chi","phải chăng","phắt","phỉ phui","phỏng","phỏng như","phốc","phụt","phứt","qua","qua qu\xedt","qua qu\xfdt","quyết","quyết nhi\xean","quyển","qu\xe1","qu\xe1 chừng","qu\xe1 lắm","qu\xe1 s\xe1","qu\xe1 thể","qu\xe1 trời","qu\xe1 x\xe1","qu\xe1 đỗi","qu\xe1 độ","qu\xe1 ư","qu\xfd hồ","quả","quả l\xe0","quả tang","quả thật","quả t\xecnh","quả vậy","quả đ\xfang","ra","ra phết","ra sao","ra tr\xf2","ren r\xe9n","riu r\xedu","ri\xeang","riệt","r\xe0y","r\xe1o","r\xe1o trọi","r\xe9n","r\xedch","r\xf3n r\xe9n","r\xfat cục","răng","rất","rằng","rằng l\xe0","rốt cuộc","rốt cục","rồi","rứa","sa sả","sao","sau","sau ch\xf3t","sau cuối","sau c\xf9ng","sau đ\xf3","so","song le","su\xfdt","s\xec","sạch","sất","sắp","sẽ","số","số l\xe0","sốt sột","sở dĩ","sự","tanh","tha hồ","than \xf4i","thanh","theo","thi thoảng","thoạt","thoạt nhi\xean","thoắt","thuần","th\xe0","th\xe0 l\xe0","th\xe0 rằng","th\xe0nh ra","th\xe0nh thử","th\xe1i qu\xe1","th\xe1ng","th\xec","th\xec th\xf4i","th\xecnh l\xecnh","th\xedm","th\xf4i","th\xfang thắng","thương \xf4i","thường","thảo h\xe8n","thảo n\xe0o","thấy","thẩy","thậm","thậm ch\xed","thật lực","thật ra","thật vậy","thế","thế l\xe0","thế m\xe0","thế n\xe0o","thế n\xean","thế ra","thế th\xec","thế \xe0","thếch","thỉnh thoảng","thỏm","thốc","thốc th\xe1o","thốt","thốt nhi\xean","thộc","thời gian","thục mạng","thửa","thực ra","thực sự","thực vậy","tiếp theo","tiếp đ\xf3","tiện thể","to\xe0","to\xe9 kh\xf3i","toẹt","trong","tr\xean","trước","trước kia","trước nay","trước ti\xean","trước đ\xe2y","trước đ\xf3","trếu tr\xe1o","trển","trệt","trệu trạo","trỏng","trời đất ơi","trừ phi","tuy","tuy nhi\xean","tuy rằng","tuy thế","tuy vậy","tuyệt nhi\xean","tuần tự","tuốt luốt","tuốt tuồn tuột","tuốt tuột","t\xe0 t\xe0","t\xeanh","t\xedt m\xf9","t\xf2 te","t\xf4i","t\xf4ng tốc","t\xf9 t\xec","tăm tắp","tại","tại v\xec","tấm","tấn","tất cả","tất thảy","tất tần tật","tất tật","tắp","tắp lự","tọt","tỏ ra","tỏ vẻ","tốc tả","tối ư","tột","tớ","tới","tức th\xec","tức tốc","từ","từng","tự v\xec","tựu trung","veo","veo veo","việc","vung thi\xean địa","vung t\xe0n t\xe1n","vung t\xe1n t\xe0n","v\xe0","v\xe0o","v\xe2ng","v\xe8o","v\xec","v\xec chưng","v\xec thế","v\xec vậy","v\xed bằng","v\xed d\xf9","v\xed phỏng","v\xed thử","v\xf4 h\xecnh trung","v\xf4 kể","v\xf4 luận","v\xf4 v\xe0n","văng t\xea","vạn nhất","vả chăng","vả lại","vẫn","vậy","vậy l\xe0","vậy th\xec","về","vị tất","vốn dĩ","với","với lại","vở","vụt","vừa","vừa mới","xa xả","xiết bao","xon x\xf3n","xo\xe0nh xoạch","xo\xe9t","xoẳn","xoẹt","xuất k\xec bất \xfd","xuất kỳ bất \xfd","xuể","xuống","xăm x\xfai","xăm xăm","xăm xắm","xềnh xệch","xệp","\xe0","\xe0 ơi","\xe0o","\xe1","\xe1 \xe0","\xe1i","\xe1i ch\xe0","\xe1i d\xe0","\xe1ng","\xe2u l\xe0","\xf4 hay","\xf4 h\xf4","\xf4 k\xea","\xf4 k\xeca","\xf4i chao","\xf4i th\xf4i","\xf4ng","\xfai","\xfai ch\xe0","\xfai d\xe0o","\xfd","\xfd chừng","\xfd da","đang","đi","điều","đ\xe0nh đạch","đ\xe1ng l\xed","đ\xe1ng l\xfd","đ\xe1ng lẽ","đ\xe1nh đ\xf9ng","đ\xe1o để","đ\xe2y","đ\xe3","đ\xf3","được","đại loại","đại nh\xe2n","đại ph\xe0m","đại để","đến","đến nỗi","đều","để","ơ","ơ hay","ơ k\xeca","ơi","ư","ạ","ạ ơi","ấy","ầu ơ","ắt","ắt hẳn","ắt l\xe0","ối d\xe0o","ối giời","ối giời ơi","ồ","ổng","ớ","ờ","ở","ở tr\xean","ủa","ứ hự","ứ ừ","ừ","ử"],"yo":["a","an","b\xe1","b\xed","bẹ̀rẹ̀","f\xfan","fẹ́","gbogbo","in\xfa","j\xf9","jẹ","jẹ́","kan","k\xec","k\xed","k\xf2","l\xe1ti","l\xe8","lọ","mi","mo","m\xe1a","mọ̀","ni","n\xe1\xe0","n\xed","n\xedgb\xe0","n\xedtor\xed","nǹkan","o","pad\xe0","p\xe9","p\xfapọ̀","pẹ̀l\xfa","rẹ̀","s\xec","s\xed","s\xedn\xfa","ṣ","ti","t\xed","w\xe0","w\xe1","wọn","wọ́n","y\xec\xed","\xe0ti","\xe0wọn","\xe9","\xed","\xf2un","\xf3","ń","ńl\xe1","ṣe","ṣ\xe9","ṣ\xf9gbọ́n","ẹmọ́","ọjọ́","ọ̀pọ̀lọpọ̀"],"zu":["futhi","kahle","kakhulu","kanye","khona","kodwa","kungani","kusho","la","lakhe","lapho","mina","ngesikhathi","nje","phansi","phezulu","u","ukuba","ukuthi","ukuze","uma","wahamba","wakhe","wami","wase","wathi","yakhe","zakhe","zonke"]}');
        }
    }, a = {};
    function n(t) {
        var u = a[t];
        if (void 0 !== u) return u.exports;
        var i = a[t] = {
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, n), i.exports;
    }
    (()=>{
        "use strict";
        var e = n(73);
        n(327), n(466), new e.default;
    })();
})();

},{}]},["4gsxa","1cgpk"], "1cgpk", "parcelRequireaa66")

//# sourceMappingURL=index.6df8ec0b.js.map
