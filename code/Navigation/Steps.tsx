import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Steps as AntSteps, Icon } from "antd";
import { keys, pick } from "lodash";

const controlProperty: PropertyControls = {
  stepItems: {
    type: ControlType.Array,
    propertyControl: { type: ControlType.String }
  },
  // 步骤条类型，有 default 和 navigation 两种	string	default	3.22.0
  type: {
    type: ControlType.Enum,
    options: ["default", "navigation"]
  },
  // 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态	number	0
  current: { type: ControlType.Number },
  // 指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向	string	horizontal
  direction: {
    type: ControlType.Enum,
    options: ["horizontal", "vertical"]
  },

  // 点状步骤条，可以设置为一个 function，labelPlacement 将强制为 vertical	Boolean or (iconDot, {index, status, title, description}) => ReactNode	false
  progressDot: { type: ControlType.Boolean },
  // 指定标签放置位置，默认水平放图标右侧，可选 vertical 放图标下方	string	horizontal	3.7.3
  labelPlacement: {
    type: ControlType.Enum,
    options: ["horizontal", "vertical"],
    hidden: props => props.progressDot
  },
  // 指定大小，目前支持普通（default）和迷你（small）	string	default
  size: {
    type: ControlType.Enum,
    options: ["default", "small"]
  },
  // 指定当前步骤的状态，可选 wait process finish error	string	process
  status: {
    type: ControlType.Enum,
    options: ["process", "wait", "finish", "error"]
  },
  // 起始序号，从 0 开始记数	number	0	3.9.0
  initial: { type: ControlType.Number }
};

export const Steps = props => {
  const { stepItems, progressDot, ...rest } = props;
  return (
    <AntSteps {...pick(props, keys(controlProperty))} progressDot={progressDot}>
      {stepItems.map((item = "") => {
        const [title, subTitle, description, status, iconType] = item.split(
          "|"
        );
        return (
          <AntSteps.Step
            key={title}
            {...{
              status: progressDot ? null : status,
              title,
              subTitle,
              description,
              icon: progressDot ? null : iconType && <Icon type={iconType} />
            }}
          ></AntSteps.Step>
        );
      })}
    </AntSteps>
  );
};

Steps.defaultProps = {
  width: 600,
  height: 200,
  progressDot: false,
  stepItems: [
    "title|subTitle|description|done|user",
    "title2|subTitle2|description2|wait|loading",
    "title3|subTitle3|description3|process|smile-o"
  ]
};

addPropertyControls(Steps, controlProperty);
