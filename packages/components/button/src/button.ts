// default/primary/danger/warning/success


export const buttonVariants = [
  'base',
  'outline',
  'dashed',
  'text',
  '',
] as const
export const ButtonProps = {
  theme: {
    type: String,
    default: "default",
  },
  //按钮形式，基础、线框、虚线、文字。可选项：base/outline/dashed/text
  variant: {
    type: String,
    values:buttonVariants,
    default: "base",
  },
  // // small/medium/large
  size: {
    type: String,
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
    type: String,
    default: () => "text",
  }

} as const



