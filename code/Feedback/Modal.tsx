import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Modal as AntModal } from "antd";
import { keys, pick, zipObject, fill, range } from "lodash";

const controlProperty: PropertyControls = {
  // 取消按钮文字	string|ReactNode	取消
  cancelText: {
    type: ControlType.String
  },
  okText: {
    type: ControlType.String
  },
  // 是否显示右上角的关闭按钮	boolean	true
  closable: {
    type: ControlType.Boolean
  },
  // 确定按钮 loading	boolean	无
  confirmLoading: {
    type: ControlType.Boolean
  },
  // 标题	string|ReactNode	无
  title: {
    type: ControlType.String
  },
  // 对话框是否可见	boolean	无
  visible: {
    type: ControlType.Boolean
  },
  bodyHeight: {
    type: ControlType.Number
  }
};

export const Modal = props => {
  const { width, bodyHeight, ...rest } = props;
  return (
    <AntModal
      {...pick(rest, keys(controlProperty))}
      mask={false}
      getContainer={false}
      bodyStyle={{ height: bodyHeight }}
    />
  );
};

Modal.defaultProps = {
  width: 520,
  height: 450,
  bodyHeight: 300,
  title: "title",
  // 垂直居中展示 Modal	Boolean	false	3.8.0
  centered: false,
  // 是否显示右上角的关闭按钮	boolean	true
  closable: true,
  // 确定按钮 loading	boolean	无
  confirmLoading: false,
  // 对话框是否可见	boolean	无
  visible: true
};

addPropertyControls(Modal, controlProperty);
