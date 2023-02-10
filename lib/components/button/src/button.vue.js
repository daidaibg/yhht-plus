import { defineComponent, ref, openBlock, createElementBlock, normalizeClass, createCommentVNode, createElementVNode, renderSlot } from "vue";
import { ButtonProps } from "./button.js";
import useRipple from "../../../hook/useRipple.js";
const _hoisted_1 = ["disabled", "autofocus"];
const _hoisted_2 = {
  key: 0,
  class: "yh-icons-loading",
  style: { "margin-right": "6px" }
};
const _hoisted_3 = { class: "yh-button__text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "button",
  props: ButtonProps,
  emits: ["click"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const btnRef = ref();
    useRipple(btnRef);
    const handleClick = (e) => {
      if (!props.disabled || !props.loading) {
        emits("click", e);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["yh-button", [
          "yh-button--variant-" + _ctx.variant,
          " yh-button--theme-" + _ctx.theme,
          " yh-button--size-" + _ctx.size,
          " yh-button--shape-" + _ctx.shape,
          {
            "yh-is-disabled": _ctx.disabled || _ctx.loading,
            "yh-is-loading": _ctx.loading,
            "yh-size-full-width": _ctx.block
          }
        ]]),
        disabled: _ctx.disabled || _ctx.loading,
        autofocus: _ctx.autofocus,
        onClick: handleClick,
        ref_key: "btnRef",
        ref: btnRef
      }, [
        _ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_2)) : createCommentVNode("", true),
        createElementVNode("span", _hoisted_3, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 10, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
