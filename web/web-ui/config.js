System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  meta: {
    "bootstrap": {
      "deps": [
        "jquery"
      ]
    },
    "mxgraph/javascript/mxClient": {
      "format": "global"
    },
    "stackblur": {
      "format": "global"
    },
    "rgbcolor": {
      "format": "global"
    },
    "pnotify": {
      "deps": [
        "jquery"
      ]
    }
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.1",
    "aurelia-dialog": "npm:aurelia-dialog@1.0.0-beta.3.0.1",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.1.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.8",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-pal": "npm:aurelia-pal@1.2.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.1.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "aurelia-router": "npm:aurelia-router@1.1.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.1.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.2.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.1",
    "bluebird": "npm:bluebird@3.4.1",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "canvg": "github:canvg/canvg@master",
    "canvg/canvg": "github:canvg/canvg@master",
    "css": "github:systemjs/plugin-css@0.1.32",
    "cytoscape": "npm:cytoscape@2.7.13",
    "cytoscape-edgehandles": "npm:cytoscape-edgehandles@2.7.1",
    "cytoscape-grid-guide": "npm:cytoscape-grid-guide@1.0.4",
    "cytoscape-node-resize": "npm:cytoscape-node-resize@1.0.10",
    "cytoscape-node-resize:n": "npm:cytoscape-node-resize@1.0.10",
    "dropzone": "github:enyo/dropzone@4.3.0",
    "edge-editiation": "github:frankiex/cytoscape.js-edge-editation@master",
    "element-queries": "github:marcj/css-element-queries@0.3.2",
    "enyo/dropzone": "github:enyo/dropzone@4.3.0",
    "fetch": "github:github/fetch@1.1.1",
    "font-awesome": "npm:font-awesome@4.6.3",
    "jquery": "npm:jquery@2.2.4",
    "mxgraph": "github:jgraph/mxgraph-js@master",
    "ocanvas": "npm:ocanvas@2.8.7",
    "plugin-text": "npm:systemjs-plugin-text@0.0.9",
    "pnotify": "github:sciactive/pnotify@3.0.0",
    "pnotify.callbacks": "github:sciactive/pnotify@3.0.0/dist/pnotify.callbacks",
    "rgbcolor": "github:canvg/canvg@master/rgbcolor",
    "semantic-ui": "github:Semantic-Org/Semantic-UI@2.2.7",
    "stackblur": "github:canvg/canvg@master/StackBlur",
    "text": "github:systemjs/plugin-text@0.0.9",
    "github:Semantic-Org/Semantic-UI@2.2.7": {
      "css": "github:systemjs/plugin-css@0.1.32",
      "jquery": "npm:jquery@2.2.4"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.7": {
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.4"
    },
    "npm:aurelia-binding@1.1.0": {
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0"
    },
    "npm:aurelia-bootstrapper@1.0.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.8",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.1.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.4",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.1.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.2.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.1"
    },
    "npm:aurelia-dependency-injection@1.2.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-dialog@1.0.0-beta.3.0.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.4"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.2.0"
    },
    "npm:aurelia-framework@1.0.8": {
      "aurelia-binding": "npm:aurelia-binding@1.1.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.4"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-loader-default@1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.2.0"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-pal-browser@1.1.0": {
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-polyfills@1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.1.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.1.0": {
      "aurelia-pal": "npm:aurelia-pal@1.2.0"
    },
    "npm:aurelia-templating-binding@1.1.0": {
      "aurelia-binding": "npm:aurelia-binding@1.1.0",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.4"
    },
    "npm:aurelia-templating-resources@1.2.0": {
      "aurelia-binding": "npm:aurelia-binding@1.1.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.4"
    },
    "npm:aurelia-templating-router@1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.1.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.4"
    },
    "npm:aurelia-templating@1.1.4": {
      "aurelia-binding": "npm:aurelia-binding@1.1.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.2.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0"
    },
    "npm:bluebird@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cytoscape-edgehandles@2.7.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "cytoscape": "npm:cytoscape@2.7.13",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cytoscape-grid-guide@1.0.4": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cytoscape-node-resize@1.0.10": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cytoscape@2.7.13": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.32"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ocanvas@2.8.7": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  bundles: {
    "aurelia.js": [
      "github:Semantic-Org/Semantic-UI@2.2.7.js",
      "github:Semantic-Org/Semantic-UI@2.2.7/semantic.js",
      "github:github/fetch@1.1.1.js",
      "github:github/fetch@1.1.1/fetch.js",
      "npm:aurelia-animator-css@1.0.1.js",
      "npm:aurelia-animator-css@1.0.1/aurelia-animator-css.js",
      "npm:aurelia-binding@1.1.0.js",
      "npm:aurelia-binding@1.1.0/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.1.js",
      "npm:aurelia-bootstrapper@1.0.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.2.1.js",
      "npm:aurelia-dependency-injection@1.2.1/aurelia-dependency-injection.js",
      "npm:aurelia-dialog@1.0.0-beta.3.0.1.js",
      "npm:aurelia-dialog@1.0.0-beta.3.0.1/ai-dialog-body.js",
      "npm:aurelia-dialog@1.0.0-beta.3.0.1/ai-dialog-footer.js",
      "npm:aurelia-dialog@1.0.0-beta.3.0.1/ai-dialog-header.js",
      "npm:aurelia-dialog@1.0.0-beta.3.0.1/ai-dialog.js",
      "npm:aurelia-dialog@1.0.0-beta.3.0.1/attach-focus.js",
      "npm:aurelia-dialog@1.0.0-beta.3.0.1/aurelia-dialog.js",
      "npm:aurelia-dialog@1.0.0-beta.3.0.1/dialog-configuration.js",
      "npm:aurelia-dialog@1.0.0-beta.3.0.1/dialog-controller.js",
      "npm:aurelia-dialog@1.0.0-beta.3.0.1/dialog-options.js",
      "npm:aurelia-dialog@1.0.0-beta.3.0.1/dialog-renderer.js",
      "npm:aurelia-dialog@1.0.0-beta.3.0.1/dialog-result.js",
      "npm:aurelia-dialog@1.0.0-beta.3.0.1/dialog-service.js",
      "npm:aurelia-dialog@1.0.0-beta.3.0.1/lifecycle.js",
      "npm:aurelia-dialog@1.0.0-beta.3.0.1/renderer.js",
      "npm:aurelia-event-aggregator@1.0.1.js",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.1.0.js",
      "npm:aurelia-fetch-client@1.1.0/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.8.js",
      "npm:aurelia-framework@1.0.8/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0.js",
      "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.2.0.js",
      "npm:aurelia-logging@1.2.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.3.js",
      "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.1.0.js",
      "npm:aurelia-pal-browser@1.1.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.2.0.js",
      "npm:aurelia-pal@1.2.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.1.1.js",
      "npm:aurelia-polyfills@1.1.1/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.1.0.js",
      "npm:aurelia-router@1.1.0/aurelia-router.js",
      "npm:aurelia-task-queue@1.1.0.js",
      "npm:aurelia-task-queue@1.1.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.1.0.js",
      "npm:aurelia-templating-binding@1.1.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.2.0.js",
      "npm:aurelia-templating-resources@1.2.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.2.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.2.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.2.0/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.2.0/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.2.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.2.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.2.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.2.0/compose.js",
      "npm:aurelia-templating-resources@1.2.0/css-resource.js",
      "npm:aurelia-templating-resources@1.2.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.2.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.2.0/focus.js",
      "npm:aurelia-templating-resources@1.2.0/hide.js",
      "npm:aurelia-templating-resources@1.2.0/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.2.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.2.0/if.js",
      "npm:aurelia-templating-resources@1.2.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.2.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.2.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.2.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.2.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.2.0/repeat.js",
      "npm:aurelia-templating-resources@1.2.0/replaceable.js",
      "npm:aurelia-templating-resources@1.2.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.2.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.2.0/show.js",
      "npm:aurelia-templating-resources@1.2.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.2.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.2.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.2.0/with.js",
      "npm:aurelia-templating-router@1.0.1.js",
      "npm:aurelia-templating-router@1.0.1/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.1/route-href.js",
      "npm:aurelia-templating-router@1.0.1/route-loader.js",
      "npm:aurelia-templating-router@1.0.1/router-view.js",
      "npm:aurelia-templating@1.1.4.js",
      "npm:aurelia-templating@1.1.4/aurelia-templating.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js"
    ],
    "app-build.js": [
      "algorithms/graph/graph.js",
      "algorithms/graph/tarjans.js",
      "app.html!github:systemjs/plugin-text@0.0.9.js",
      "app.js",
      "auth/auth-nav.html!github:systemjs/plugin-text@0.0.9.js",
      "auth/auth.html!github:systemjs/plugin-text@0.0.9.js",
      "auth/auth.js",
      "auth/login/login.html!github:systemjs/plugin-text@0.0.9.js",
      "auth/login/login.js",
      "auth/signup/signup.html!github:systemjs/plugin-text@0.0.9.js",
      "auth/signup/signup.js",
      "canvas/actions/action-service.js",
      "canvas/actions/default-action-set.js",
      "canvas/core/canvas-model.js",
      "canvas/core/canvas.js",
      "canvas/core/cell-renderer.js",
      "canvas/core/connection-handler.js",
      "canvas/core/graph-handler.js",
      "canvas/core/grid/grid.js",
      "canvas/core/menu-selection.js",
      "canvas/core/vertex-handler.js",
      "canvas/element/element.js",
      "canvas/element/events.js",
      "canvas/element/registry-aware.js",
      "canvas/events/canvas-events.js",
      "canvas/menu/action.js",
      "canvas/menu/selection-menu/create-block.js",
      "canvas/menu/selection-menu/create-cloud.js",
      "canvas/menu/selection-menu/create-group.js",
      "canvas/menu/selection-menu/create-layer.js",
      "canvas/menu/selection-menu/create-security-group.js",
      "canvas/menu/selection-menu/create-vlan.js",
      "canvas/menu/selection-menu/dialogs/group-items-as-dialog.html!github:systemjs/plugin-text@0.0.9.js",
      "canvas/menu/selection-menu/dialogs/group-items-as-dialog.js",
      "canvas/menu/task-cell.js",
      "canvas/scene-graph/scene-graph.js",
      "canvas/utilities.js",
      "common/elements/menu.html!github:systemjs/plugin-text@0.0.9.js",
      "common/elements/menu.js",
      "common/elements/nav-bar.html!github:systemjs/plugin-text@0.0.9.js",
      "common/elements/page-header.html!github:systemjs/plugin-text@0.0.9.js",
      "common/elements/profile-dropdown.html!github:systemjs/plugin-text@0.0.9.js",
      "common/elements/profile-dropdown.js",
      "common/elements/tree/node.html!github:systemjs/plugin-text@0.0.9.js",
      "common/elements/tree/node.js",
      "common/elements/tree/tree.html!github:systemjs/plugin-text@0.0.9.js",
      "common/elements/tree/tree.js",
      "common/property-editor/property-editor.html!github:systemjs/plugin-text@0.0.9.js",
      "common/property-editor/property-editor.js",
      "common/renderers/semantic-ui-renderer.js",
      "common/sidenav/sidenav.html!github:systemjs/plugin-text@0.0.9.js",
      "common/sidenav/sidenav.js",
      "component/blocks/block.js",
      "component/draftboard/draftboard.js",
      "component/editors/cloud/editor.html!github:systemjs/plugin-text@0.0.9.js",
      "component/editors/cloud/editor.js",
      "component/editors/infrastructure-node/editor.html!github:systemjs/plugin-text@0.0.9.js",
      "component/editors/infrastructure-node/editor.js",
      "component/editors/load-balancer/editor.html!github:systemjs/plugin-text@0.0.9.js",
      "component/editors/load-balancer/editor.js",
      "component/editors/security-group/security-group.html!github:systemjs/plugin-text@0.0.9.js",
      "component/editors/security-group/security-group.js",
      "component/infrastructure/endpoint.js",
      "component/infrastructure/gateway.js",
      "component/infrastructure/infrastructure-manager.js",
      "component/infrastructure/infrastructure.js",
      "component/infrastructure/load-balancer.js",
      "component/infrastructure/router.js",
      "component/model/block.js",
      "component/model/cell.js",
      "component/model/cloud.js",
      "component/model/configuration.js",
      "component/model/deployment.js",
      "component/model/group.js",
      "component/model/infrastructure-node.js",
      "component/model/infrastructure.js",
      "component/model/layer.js",
      "component/model/security-group.js",
      "component/model/vlan.js",
      "core/exceptions/type-errors.js",
      "core/trait.js",
      "geometry/shapes.js",
      "initialize/initialize.html!github:systemjs/plugin-text@0.0.9.js",
      "initialize/initialize.js",
      "lang/class.js",
      "main.js",
      "main/main.html!github:systemjs/plugin-text@0.0.9.js",
      "main/main.js",
      "main/nav-bar.html!github:systemjs/plugin-text@0.0.9.js",
      "main/settings/admin/admin.js",
      "main/settings/profile/profile.html!github:systemjs/plugin-text@0.0.9.js",
      "main/settings/profile/profile.js",
      "main/settings/settings.html!github:systemjs/plugin-text@0.0.9.js",
      "main/settings/settings.js",
      "main/settings/storage/storage.js",
      "main/workspace/builder/sidemenus/modal.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/builder/sidemenus/modal.js",
      "main/workspace/draftboards/abstract-graph.js",
      "main/workspace/draftboards/applications/applications.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/draftboards/applications/applications.js",
      "main/workspace/draftboards/applications/components/add-infrastructure.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/draftboards/applications/components/add-infrastructure.js",
      "main/workspace/draftboards/applications/components/infrastructure.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/draftboards/applications/components/infrastructure.js",
      "main/workspace/draftboards/applications/components/properties.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/draftboards/applications/components/properties.js",
      "main/workspace/draftboards/applications/menus/delete-cells.js",
      "main/workspace/draftboards/applications/menus/edit-menu.js",
      "main/workspace/draftboards/applications/menus/file-menu.js",
      "main/workspace/draftboards/applications/menus/file/save-dialog.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/draftboards/applications/menus/file/save-dialog.js",
      "main/workspace/draftboards/applications/menus/group.js",
      "main/workspace/draftboards/applications/menus/maximize.js",
      "main/workspace/draftboards/applications/menus/misc-menus.js",
      "main/workspace/draftboards/applications/menus/view-menu.js",
      "main/workspace/draftboards/applications/menus/zoom.js",
      "main/workspace/draftboards/applications/sidebars/controls.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/draftboards/applications/sidebars/group-menu/overlay.js",
      "main/workspace/draftboards/applications/sidebars/left-sidebar/bottom/layers.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/draftboards/applications/sidebars/left-sidebar/bottom/layers.js",
      "main/workspace/draftboards/applications/sidebars/left-sidebar/left-sidebar.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/draftboards/applications/sidebars/left-sidebar/left-sidebar.js",
      "main/workspace/draftboards/applications/sidebars/right-sidebar/bottom/applications.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/draftboards/applications/sidebars/right-sidebar/bottom/applications.js",
      "main/workspace/draftboards/applications/sidebars/right-sidebar/bottom/blocks.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/draftboards/applications/sidebars/right-sidebar/bottom/blocks.js",
      "main/workspace/draftboards/applications/sidebars/right-sidebar/bottom/components.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/draftboards/applications/sidebars/right-sidebar/bottom/components.js",
      "main/workspace/draftboards/applications/sidebars/right-sidebar/right-sidebar.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/draftboards/applications/sidebars/right-sidebar/right-sidebar.js",
      "main/workspace/draftboards/applications/sidebars/right-sidebar/top/editor.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/draftboards/applications/sidebars/right-sidebar/top/editor.js",
      "main/workspace/draftboards/applications/sidebars/right-sidebar/top/palette.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/draftboards/applications/sidebars/right-sidebar/top/palette.js",
      "main/workspace/draftboards/applications/sidebars/right-sidebar/top/properties.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/draftboards/applications/sidebars/right-sidebar/top/properties.js",
      "main/workspace/draftboards/applications/sidebars/sidebar.js",
      "main/workspace/draftboards/draftboard.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/draftboards/draftboard.js",
      "main/workspace/draftboards/editor.js",
      "main/workspace/draftboards/listeners/hover-listener.js",
      "main/workspace/navigator/navigator.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/navigator/navigator.js",
      "main/workspace/workspace.html!github:systemjs/plugin-text@0.0.9.js",
      "main/workspace/workspace.js",
      "model/core/application.js",
      "model/core/secret/credentials.js",
      "model/core/security/context.js",
      "model/core/security/index.js",
      "model/core/security/token.js",
      "model/core/security/user.js",
      "model/hal/api.js",
      "model/hal/image.js",
      "model/os.js",
      "storage/application-state.js",
      "storage/local/local-storage.js",
      "utils/diagram/image-export.js",
      "utils/events.js",
      "utils/objects.js",
      "utils/observer.js",
      "utils/registry.js",
      "utils/uuid.js"
    ]
  },
  depCache: {
    "app.js": [
      "./model/core/security/index",
      "aurelia-framework",
      "aurelia-router",
      "./main/settings/settings",
      "jquery",
      "semantic-ui"
    ],
    "auth/auth.js": [
      "aurelia-framework",
      "aurelia-dependency-injection",
      "jquery",
      "semantic-ui"
    ],
    "auth/login/login.js": [
      "aurelia-framework",
      "aurelia-fetch-client",
      "aurelia-dependency-injection",
      "../../model/core/security/user",
      "../../storage/local/local-storage",
      "../../model/core/security/token",
      "../auth"
    ],
    "auth/signup/signup.js": [
      "aurelia-fetch-client",
      "aurelia-dependency-injection",
      "aurelia-framework",
      "../../model/core/security/user",
      "../auth",
      "aurelia-router"
    ],
    "canvas/actions/action-service.js": [
      "../../utils/uuid"
    ],
    "canvas/actions/default-action-set.js": [
      "aurelia-framework",
      "./action-service",
      "aurelia-dialog",
      "canvas/menu/selection-menu/create-block",
      "canvas/menu/selection-menu/create-vlan",
      "canvas/menu/selection-menu/create-security-group",
      "canvas/menu/selection-menu/create-group",
      "canvas/menu/selection-menu/create-layer",
      "canvas/menu/selection-menu/create-cloud"
    ],
    "canvas/core/canvas-model.js": [
      "mxgraph"
    ],
    "canvas/core/canvas.js": [
      "mxgraph",
      "./grid/grid",
      "./cell-renderer",
      "./menu-selection",
      "./graph-handler",
      "./connection-handler",
      "./canvas-model",
      "./vertex-handler"
    ],
    "canvas/core/cell-renderer.js": [
      "mxgraph"
    ],
    "canvas/core/connection-handler.js": [
      "mxgraph"
    ],
    "canvas/core/graph-handler.js": [
      "mxgraph"
    ],
    "canvas/core/grid/grid.js": [
      "mxgraph"
    ],
    "canvas/core/menu-selection.js": [
      "mxgraph"
    ],
    "canvas/core/vertex-handler.js": [
      "mxgraph"
    ],
    "canvas/element/element.js": [
      "mxgraph",
      "utils/uuid",
      "utils/objects"
    ],
    "canvas/element/events.js": [
      "utils/observer"
    ],
    "canvas/element/registry-aware.js": [
      "./element"
    ],
    "canvas/menu/action.js": [
      "canvas/actions/action-service"
    ],
    "canvas/menu/selection-menu/create-block.js": [
      "../action",
      "canvas/core/canvas",
      "component/model/block",
      "./dialogs/group-items-as-dialog"
    ],
    "canvas/menu/selection-menu/create-cloud.js": [
      "canvas/core/canvas",
      "canvas/menu/action",
      "./dialogs/group-items-as-dialog",
      "component/model/cloud"
    ],
    "canvas/menu/selection-menu/create-group.js": [
      "canvas/core/canvas",
      "../action",
      "./dialogs/group-items-as-dialog"
    ],
    "canvas/menu/selection-menu/create-layer.js": [
      "canvas/core/canvas",
      "canvas/menu/action",
      "./dialogs/group-items-as-dialog",
      "component/model/layer"
    ],
    "canvas/menu/selection-menu/create-security-group.js": [
      "canvas/core/canvas",
      "canvas/menu/action",
      "./dialogs/group-items-as-dialog",
      "component/model/security-group"
    ],
    "canvas/menu/selection-menu/create-vlan.js": [
      "canvas/core/canvas",
      "canvas/menu/action",
      "./dialogs/group-items-as-dialog",
      "component/model/vlan"
    ],
    "canvas/menu/selection-menu/dialogs/group-items-as-dialog.js": [
      "canvas/core/canvas",
      "aurelia-framework",
      "utils/registry"
    ],
    "canvas/menu/task-cell.js": [
      "mxgraph",
      "utils/objects",
      "canvas/element/element"
    ],
    "canvas/scene-graph/scene-graph.js": [
      "canvas/element/element"
    ],
    "common/elements/menu.js": [
      "aurelia-framework"
    ],
    "common/elements/profile-dropdown.js": [
      "../../model/core/security/user",
      "aurelia-framework",
      "aurelia-router",
      "../../model/core/security/token",
      "jquery"
    ],
    "common/elements/tree/node.js": [
      "aurelia-framework",
      "./tree"
    ],
    "common/elements/tree/tree.js": [
      "aurelia-framework",
      "utils/events"
    ],
    "common/property-editor/property-editor.js": [
      "aurelia-framework"
    ],
    "common/renderers/semantic-ui-renderer.js": [
      "aurelia-pal"
    ],
    "common/sidenav/sidenav.js": [
      "aurelia-framework",
      "aurelia-router"
    ],
    "component/draftboard/draftboard.js": [
      "utils/uuid",
      "utils/observer"
    ],
    "component/editors/cloud/editor.js": [
      "aurelia-framework",
      "component/model/cloud"
    ],
    "component/editors/infrastructure-node/editor.js": [
      "aurelia-framework",
      "model/os",
      "utils/uuid",
      "component/model/infrastructure-node"
    ],
    "component/infrastructure/endpoint.js": [
      "mxgraph",
      "./infrastructure"
    ],
    "component/infrastructure/gateway.js": [
      "mxgraph",
      "./infrastructure"
    ],
    "component/infrastructure/infrastructure-manager.js": [
      "./load-balancer",
      "./gateway",
      "./endpoint"
    ],
    "component/infrastructure/infrastructure.js": [
      "mxgraph",
      "utils/objects",
      "canvas/element/element"
    ],
    "component/infrastructure/load-balancer.js": [
      "component/editors/load-balancer/editor",
      "mxgraph",
      "./infrastructure"
    ],
    "component/model/block.js": [
      "./layer",
      "canvas/element/element",
      "mxgraph"
    ],
    "component/model/cloud.js": [
      "./layer",
      "canvas/element/element",
      "mxgraph",
      "component/editors/cloud/editor"
    ],
    "component/model/deployment.js": [
      "utils/registry",
      "mxgraph",
      "canvas/element/events",
      "canvas/element/registry-aware"
    ],
    "component/model/infrastructure-node.js": [
      "mxgraph",
      "canvas/menu/task-cell",
      "canvas/element/registry-aware",
      "component/editors/infrastructure-node/editor",
      "model/hal/api"
    ],
    "component/model/layer.js": [
      "canvas/element/element",
      "mxgraph",
      "utils/objects"
    ],
    "component/model/security-group.js": [
      "./layer",
      "canvas/element/element",
      "component/editors/security-group/security-group"
    ],
    "component/model/vlan.js": [
      "./layer",
      "canvas/element/element"
    ],
    "initialize/initialize.js": [
      "../model/core/application",
      "../model/core/security/index",
      "aurelia-framework",
      "aurelia-fetch-client",
      "aurelia-router"
    ],
    "main.js": [
      "aurelia-fetch-client",
      "./storage/local/local-storage",
      "./model/core/security/index",
      "common/renderers/semantic-ui-renderer",
      "jquery",
      "fetch"
    ],
    "main/main.js": [
      "../model/core/security/index",
      "aurelia-framework",
      "jquery",
      "semantic-ui"
    ],
    "main/settings/admin/admin.js": [
      "aurelia-framework",
      "aurelia-fetch-client"
    ],
    "main/settings/profile/profile.js": [
      "../../../model/core/security/user",
      "aurelia-framework"
    ],
    "main/settings/storage/storage.js": [
      "../../../model/core/security/user",
      "aurelia-framework"
    ],
    "main/workspace/draftboards/abstract-graph.js": [
      "mxgraph",
      "aurelia-pal"
    ],
    "main/workspace/draftboards/applications/applications.js": [
      "aurelia-framework",
      "aurelia-fetch-client",
      "aurelia-event-aggregator",
      "pnotify",
      "mxgraph",
      "../abstract-graph",
      "../draftboard",
      "utils/registry",
      "./menus/file-menu",
      "./menus/edit-menu",
      "./menus/view-menu",
      "./menus/zoom",
      "./menus/maximize",
      "component/draftboard/draftboard",
      "canvas/core/canvas",
      "aurelia-dialog",
      "./menus/misc-menus",
      "canvas/actions/default-action-set",
      "canvas/actions/action-service",
      "canvas/events/canvas-events",
      "storage/application-state",
      "pnotify.callbacks"
    ],
    "main/workspace/draftboards/applications/components/add-infrastructure.js": [
      "aurelia-framework"
    ],
    "main/workspace/draftboards/applications/components/infrastructure.js": [
      "model/hal/api",
      "model/os",
      "aurelia-framework"
    ],
    "main/workspace/draftboards/applications/menus/delete-cells.js": [
      "common/elements/menu"
    ],
    "main/workspace/draftboards/applications/menus/edit-menu.js": [
      "common/elements/menu",
      "./delete-cells"
    ],
    "main/workspace/draftboards/applications/menus/file-menu.js": [
      "common/elements/menu",
      "./file/save-dialog"
    ],
    "main/workspace/draftboards/applications/menus/file/save-dialog.js": [
      "component/draftboard/draftboard",
      "aurelia-framework",
      "canvg/canvg",
      "utils/diagram/image-export",
      "canvg/rgbcolor",
      "canvg/StackBlur"
    ],
    "main/workspace/draftboards/applications/menus/maximize.js": [
      "common/elements/menu"
    ],
    "main/workspace/draftboards/applications/menus/misc-menus.js": [
      "common/elements/menu"
    ],
    "main/workspace/draftboards/applications/menus/view-menu.js": [
      "common/elements/menu"
    ],
    "main/workspace/draftboards/applications/menus/zoom.js": [
      "common/elements/menu"
    ],
    "main/workspace/draftboards/applications/sidebars/left-sidebar/bottom/layers.js": [
      "aurelia-framework",
      "component/draftboard/draftboard",
      "utils/registry",
      "aurelia-event-aggregator",
      "canvas/events/canvas-events"
    ],
    "main/workspace/draftboards/applications/sidebars/left-sidebar/left-sidebar.js": [
      "component/draftboard/draftboard",
      "aurelia-framework"
    ],
    "main/workspace/draftboards/applications/sidebars/right-sidebar/bottom/applications.js": [
      "mxgraph",
      "aurelia-framework",
      "aurelia-fetch-client",
      "utils/registry",
      "canvas/core/canvas",
      "canvas/utilities",
      "component/model/deployment",
      "component/model/infrastructure-node"
    ],
    "main/workspace/draftboards/applications/sidebars/right-sidebar/bottom/blocks.js": [
      "aurelia-framework",
      "canvas/core/canvas",
      "mxgraph",
      "utils/registry"
    ],
    "main/workspace/draftboards/applications/sidebars/right-sidebar/bottom/components.js": [
      "aurelia-framework",
      "canvas/core/canvas",
      "mxgraph",
      "utils/registry",
      "component/infrastructure/infrastructure-manager"
    ],
    "main/workspace/draftboards/applications/sidebars/right-sidebar/right-sidebar.js": [
      "../sidebar",
      "aurelia-framework",
      "canvas/core/canvas"
    ],
    "main/workspace/draftboards/applications/sidebars/right-sidebar/top/editor.js": [
      "canvas/events/canvas-events",
      "aurelia-framework",
      "aurelia-event-aggregator",
      "storage/application-state"
    ],
    "main/workspace/draftboards/applications/sidebars/right-sidebar/top/palette.js": [
      "utils/events",
      "component/model/infrastructure-node",
      "utils/registry",
      "aurelia-framework",
      "canvas/actions/action-service",
      "pnotify"
    ],
    "main/workspace/draftboards/applications/sidebars/right-sidebar/top/properties.js": [
      "aurelia-framework",
      "aurelia-event-aggregator",
      "canvas/events/canvas-events",
      "aurelia-dependency-injection",
      "storage/application-state"
    ],
    "main/workspace/draftboards/applications/sidebars/sidebar.js": [
      "aurelia-framework"
    ],
    "main/workspace/draftboards/draftboard.js": [
      "aurelia-framework",
      "common/elements/menu"
    ],
    "main/workspace/draftboards/listeners/hover-listener.js": [
      "mxgraph"
    ],
    "main/workspace/navigator/navigator.js": [
      "aurelia-router",
      "aurelia-framework"
    ],
    "main/workspace/workspace.js": [
      "aurelia-framework",
      "jquery"
    ],
    "model/core/security/index.js": [
      "./user",
      "./token"
    ],
    "model/core/security/token.js": [
      "aurelia-framework",
      "../../../storage/local/local-storage",
      "aurelia-fetch-client"
    ],
    "model/hal/api.js": [
      "utils/uuid"
    ],
    "model/os.js": [
      "model/hal/api"
    ],
    "storage/local/local-storage.js": [
      "../../core/exceptions/type-errors"
    ],
    "utils/registry.js": [
      "aurelia-framework",
      "aurelia-fetch-client",
      "component/blocks/block",
      "component/draftboard/draftboard"
    ]
  }
});