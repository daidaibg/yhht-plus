import { defineComponent, ref, shallowRef, computed, watch, onMounted, onUnmounted } from "vue";
import props from "./affix.js";
import { on, off } from "../../../utils/dom.js";
const _sfc_main = defineComponent({
  name: "YhAffix",
  props,
  setup(props2, { emit }) {
    const affixWrapRef = ref();
    const affixRef = ref();
    const container = shallowRef();
    const scrollContainer = shallowRef();
    const fixed = ref(false);
    const scrollTop = ref(0);
    const transform = ref(0);
    const targetRect = shallowRef();
    const affixWrapRect = ref({});
    const affixWrapStyle = computed(() => {
      return {
        height: fixed.value ? `${affixWrapRect.value.height}px` : "",
        width: fixed.value ? `${affixWrapRect.value.width}px` : ""
      };
    });
    const affixStyle = computed(() => {
      if (!fixed.value)
        return {};
      const offset = props2.offset ? `${props2.offset}px` : 0;
      return {
        height: `${affixWrapRect.value.height}px`,
        width: `${affixWrapRect.value.width}px`,
        top: props2.position === "top" ? offset : "",
        bottom: props2.position === "bottom" ? offset : "",
        transform: transform.value ? `translateY(${transform.value}px)` : "",
        zIndex: props2.zIndex
      };
    });
    const handleScroll = () => {
      var _a;
      if (!scrollContainer.value)
        return;
      scrollTop.value = scrollContainer.value instanceof Window ? document.documentElement.scrollTop : scrollContainer.value.scrollTop || 0;
      affixWrapRect.value = (_a = affixWrapRef.value) == null ? void 0 : _a.getBoundingClientRect();
      if (props2.position === "top") {
        if (props2.container) {
          const difference = targetRect.value.bottom - props2.offset - affixWrapRect.value.height;
          fixed.value = props2.offset > affixWrapRect.value.top && targetRect.value.bottom > 0;
          transform.value = difference < 0 ? difference : 0;
        } else {
          fixed.value = props2.offset > affixWrapRef.value.offsetTop;
        }
      } else if (props2.container) {
        const difference = window.innerHeight - targetRect.value.top - props2.offset - affixWrapRect.value.height;
        fixed.value = window.innerHeight - props2.offset < affixWrapRect.value.bottom && window.innerHeight > targetRect.value.top;
        transform.value = difference < 0 ? -difference : 0;
      } else {
        fixed.value = window.innerHeight - props2.offset < affixWrapRect.value.bottom.value;
      }
      emit("scroll", {
        scrollTop: scrollTop.value,
        fixed: fixed.value
      });
    };
    watch(fixed, (val) => emit("change", val));
    onMounted(() => {
      var _a;
      if (props2.container) {
        container.value = document.querySelector(props2.container) ?? void 0;
        if (!container.value)
          console.error(`Target is not existed: ${props2.container}`);
      } else {
        container.value = document.documentElement;
      }
      scrollContainer.value = container.value;
      targetRect.value = (_a = container.value) == null ? void 0 : _a.getBoundingClientRect();
      on(scrollContainer.value, "scroll", handleScroll);
      handleScroll();
    });
    onUnmounted(() => {
      if (!scrollContainer.value)
        return;
      off(scrollContainer.value, "scroll", handleScroll);
    });
    return { affixWrapRef, affixRef, fixed, affixWrapStyle, affixStyle };
  }
});
export {
  _sfc_main as default
};
