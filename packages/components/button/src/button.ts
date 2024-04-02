// default/primary/danger/warning/success
import type { PropType } from "vue";

export const buttonVariants = ["base", "outline", "dashed", "text", ""] as const;
export const ButtonProps = {
  theme: {
    type: String as PropType<"default" | "primary" | "danger" | "warning" | "success" | string>,
    default: "default",
  },
  //按钮形式，基础、线框、虚线、文字。可选项：base/outline/dashed/text
  variant: {
    type: String as PropType<"base" | "outline" | "dashed" | "text">,
    values: buttonVariants,
    default: "base",
  },
  size: {
    type: String as PropType<"small" | "medium" | "large">,
    default: () => "medium",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  //按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形。可选项：rectangle/square/round/circle    正方形暂无
  shape: {
    type: String,
    default: () => "rectangle",
  },
  block: {
    type: Boolean,
    default: false,
  },
  //是否自动获取焦点 原生属性
  autofocus: {
    type: Boolean,
    default: false,
  },
  //按钮类型 原生属性
  type: {
    type: String as PropType<"button" | "submit" | "reset" | undefined>,
    default: () => "button",
  },
} as const;
