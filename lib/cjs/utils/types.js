"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const isString = (val) => typeof val === "string";
Object.defineProperty(exports, "isVNode", {
  enumerable: true,
  get: () => vue.isVNode
});
exports.isString = isString;
