import {
  require_animation,
  require_unitConverter
} from "./chunk-QVSQZOHT.js";
import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  __commonJS
} from "./chunk-EWTE5DHJ.js";

// node_modules/react-spinners/GridLoader.js
var require_GridLoader = __commonJS({
  "node_modules/react-spinners/GridLoader.js"(exports) {
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = __importStar(require_react());
    var unitConverter_1 = require_unitConverter();
    var animation_1 = require_animation();
    var grid = (0, animation_1.createAnimation)("GridLoader", "0% {transform: scale(1)} 50% {transform: scale(0.5); opacity: 0.7} 100% {transform: scale(1); opacity: 1}", "grid");
    var random = function(top) {
      return Math.random() * top;
    };
    function GridLoader(_a) {
      var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 15 : _f, _g = _a.margin, margin = _g === void 0 ? 2 : _g, additionalprops = __rest(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]);
      var sizeWithUnit = (0, unitConverter_1.parseLengthAndUnit)(size);
      var marginWithUnit = (0, unitConverter_1.parseLengthAndUnit)(margin);
      var width = parseFloat(sizeWithUnit.value.toString()) * 3 + parseFloat(marginWithUnit.value.toString()) * 6;
      var wrapper = __assign({ width: "".concat(width).concat(sizeWithUnit.unit), fontSize: 0, display: "inline-block" }, cssOverride);
      var style = function(rand) {
        return {
          display: "inline-block",
          backgroundColor: color,
          width: "".concat((0, unitConverter_1.cssValue)(size)),
          height: "".concat((0, unitConverter_1.cssValue)(size)),
          margin: (0, unitConverter_1.cssValue)(margin),
          borderRadius: "100%",
          animationFillMode: "both",
          animation: "".concat(grid, " ").concat((rand / 100 + 0.6) / speedMultiplier, "s ").concat(rand / 100 - 0.2, "s infinite ease")
        };
      };
      if (!loading) {
        return null;
      }
      return React.createElement(
        "span",
        __assign({ style: wrapper }, additionalprops, { ref: function(node) {
          if (node) {
            node.style.setProperty("width", "".concat(width).concat(sizeWithUnit.unit), "important");
          }
        } }),
        React.createElement("span", { style: style(random(100)) }),
        React.createElement("span", { style: style(random(100)) }),
        React.createElement("span", { style: style(random(100)) }),
        React.createElement("span", { style: style(random(100)) }),
        React.createElement("span", { style: style(random(100)) }),
        React.createElement("span", { style: style(random(100)) }),
        React.createElement("span", { style: style(random(100)) }),
        React.createElement("span", { style: style(random(100)) }),
        React.createElement("span", { style: style(random(100)) })
      );
    }
    exports.default = GridLoader;
  }
});
export default require_GridLoader();
//# sourceMappingURL=react-spinners_GridLoader.js.map
