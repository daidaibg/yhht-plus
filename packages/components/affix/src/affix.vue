<template>
  <div ref="affixWrapRef" class="yh-affix" :style="affixWrapStyle">
    <div ref="affixRef" :class="{ 'yh-affix--fixed': fixed }" :style="affixStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" >
import { defineComponent, PropType, ref, computed, onMounted, shallowRef, onUnmounted, reactive, watch } from 'vue'
import type { CSSProperties } from 'vue'
import props from "./affix";
import {
  on,
  off,

} from "../../../utils"
export default defineComponent({
  name: 'YhAffix',
  props,
  setup(props, { emit }) {
    const affixWrapRef = ref<HTMLElement>();
    const affixRef = ref<HTMLElement>();
    const container = shallowRef<HTMLElement>()
    const scrollContainer = shallowRef<HTMLElement | Window>()
    const fixed = ref(false)
    const scrollTop = ref(0)
    const transform = ref(0)
    const targetRect = shallowRef()

    const affixWrapRect = ref<any>({

    })

    const affixWrapStyle = computed<CSSProperties>(() => {
      // console.log(affixWrapRef.value);
      return {
        height: fixed.value ? `${affixWrapRect.value.height}px` : '',
        width: fixed.value ? `${affixWrapRect.value.width}px` : '',
      }
    })
    const affixStyle = computed<CSSProperties>(() => {
      if (!fixed.value) return {}

      const offset = props.offset ? `${props.offset}px` : 0
      return {
        height: `${affixWrapRect.value.height}px`,
        width: `${affixWrapRect.value.width}px`,
        top: props.position === 'top' ? offset : '',
        bottom: props.position === 'bottom' ? offset : '',
        transform: transform.value ? `translateY(${transform.value}px)` : '',
        zIndex: props.zIndex,
      }
    })
    const handleScroll = () => {
      if (!scrollContainer.value) return
      scrollTop.value =
        scrollContainer.value instanceof Window
          ? document.documentElement.scrollTop
          : scrollContainer.value.scrollTop || 0
      affixWrapRect.value = affixWrapRef.value?.getBoundingClientRect()
      // console.log(targetRect.value, affixWrapRect.value);
      if (props.position === 'top') {
        if (props.container) {
          const difference =
            targetRect.value.bottom - props.offset - affixWrapRect.value.height
          fixed.value = props.offset > affixWrapRect.value.top && targetRect.value.bottom > 0
          transform.value = difference < 0 ? difference : 0
        } else {
          fixed.value = props.offset >( affixWrapRef.value as any).offsetTop 
        }
      } else if (props.container) {
        const difference =
          window.innerHeight -
          targetRect.value.top -
          props.offset -
          affixWrapRect.value.height
        fixed.value =
          window.innerHeight - props.offset < affixWrapRect.value.bottom &&
          window.innerHeight > targetRect.value.top
        transform.value = difference < 0 ? -difference : 0
      } else {
        fixed.value = window.innerHeight - props.offset < affixWrapRect.value.bottom.value
      }
      emit('scroll', {
        scrollTop: scrollTop.value,
        fixed: fixed.value,
      })
    }
    watch(fixed, (val) => emit('change', val))
    onMounted(() => {
      if (props.container) {
        container.value =
          document.querySelector<HTMLElement>(props.container) ?? undefined
        if (!container.value)
          console.error(`Target is not existed: ${props.container}`)
      } else {
        container.value = document.documentElement
      }
      scrollContainer.value = container.value
      targetRect.value = container.value?.getBoundingClientRect()
      on(scrollContainer.value, "scroll", handleScroll);
      handleScroll();
    })
    onUnmounted(() => {
      if (!scrollContainer.value) return;
      off(scrollContainer.value, "scroll", handleScroll);
    });
    return { affixWrapRef, affixRef, fixed, affixWrapStyle, affixStyle }
  }

})

</script>
<style lang='css' scoped>
.yh-affix--fixed {
  position: fixed;
}
</style>