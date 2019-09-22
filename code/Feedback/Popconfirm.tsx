import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Popconfirm as AntPopconfirm, Button, Icon } from "antd";
import { keys, pick, zipObject, fill, range } from "lodash";

const controlProperty: PropertyControls = {
  // 取消按钮文字	string	取消
  cancelText: {
    type: ControlType.String
  },
  // 确认按钮文字	string	确定
  okText: {
    type: ControlType.String
  },
  // 确认按钮类型	string	primary
  okType: {
    type: ControlType.String
  },
  // 确认框的描述	string|ReactNode	无
  title: {
    type: ControlType.String
  },
  // 自定义弹出气泡 Icon 图标	ReactNode	<Icon type="exclamation-circle" />	3.8.0
  iconType: {
    type: ControlType.String
  },
  placement: {
    type: ControlType.Enum,
    options: [
      "topLeft",
      "top",
      "topRight",
      "leftTop",
      "left",
      "leftBottom",
      "rightTop",
      "right",
      "rightBottom",
      "bottomLeft",
      "bottom",
      "bottomRight"
    ]
  }
};

export const Popconfirm = props => {
  const {
    cancelText,
    okText,
    okType,
    title,
    iconType,
    placement,
    ...rest
  } = props;
  return (
    <div className={`ant-popover ant-popover-placement-${placement}`}>
      <div className="ant-popover-content">
        <div className="ant-popover-arrow"></div>
        <div className="ant-popover-inner" role="tooltip">
          <div>
            <div className="ant-popover-inner-content">
              <div className="ant-popover-message">
                {iconType && <Icon type={iconType}></Icon>}
                <div className="ant-popover-message-title">{title}</div>
              </div>
              <div className="ant-popover-buttons">
                <button type="button" className="ant-btn ant-btn-sm">
                  <span>{cancelText}</span>
                </button>
                <Button size='small' type={okType}>{okText}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Popconfirm.defaultProps = {
  width: 300,
  height: 200,
  cancelText: "No",
  okText: "Yes",
  okType: "primary",
  title: "Are you sure delete this task?",
  iconType: "exclamation-circle",
  placement: "top"
};

addPropertyControls(Popconfirm, controlProperty);
