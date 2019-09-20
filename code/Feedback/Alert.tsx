import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Alert as AntAlert } from "antd";
import { keys, pick, zipObject, fill, range } from "lodash";

const controlProperty: PropertyControls = {
  // 指定警告提示的样式，有四种选择 success、info、warning、error	string	info，banner 模式下默认值为 warning
  type: {
    type: ControlType.Enum,
    options: ["success", "info", "warning", "error"]
  },
  // 是否用作顶部公告	boolean	false
  banner: {
    type: ControlType.Boolean
  },
  // 默认不显示关闭按钮	boolean	无
  closable: {
    type: ControlType.Boolean
  },
  // 警告提示内容	string|ReactNode	无
  message: {
    type: ControlType.String
  },
  // 警告提示的辅助性文字介绍	string|ReactNode	无
  description: {
    type: ControlType.String
  },

  // 是否显示辅助图标	boolean	false，banner 模式下默认值为 true
  showIcon: {
    type: ControlType.Boolean
  }
};

export const Alert = props => {
  const { icon, ...rest } = props;
  return <AntAlert {...pick(rest, keys(controlProperty))} />;
};

Alert.defaultProps = {
  width: 435,
  height: 40,
  // 是否用作顶部公告	boolean	false
  banner: false,
  // 默认不显示关闭按钮	boolean	无
  closable: false,
  // 是否显示辅助图标	boolean	false，banner 模式下默认值为 true
  showIcon: true,
  // 指定警告提示的样式，有四种选择 success、info、warning、error	string	info，banner 模式下默认值为 warning
  type: "info",
  message: "Informational Notes"
};

addPropertyControls(Alert, controlProperty);
