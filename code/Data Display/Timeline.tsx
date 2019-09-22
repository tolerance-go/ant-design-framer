import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Timeline as AntTimeline, Icon } from "antd";
import { keys, pick, zipObject, fill, range } from "lodash";

const controlProperty: PropertyControls = {
  // 指定最后一个幽灵节点是否存在或内容	boolean|string|ReactNode	false
  pending: { type: ControlType.Boolean },
  // 当最后一个幽灵节点存在時，指定其时间图点	string|ReactNode	<Icon type="loading" />	3.3.0
  pendingDot: { type: ControlType.String },
  // 节点排序	boolean	false	3.5.0
  reverse: { type: ControlType.Boolean },
  // 通过设置 mode 可以改变时间轴和内容的相对位置	left | alternate | right	-	3.8.0
  mode: { type: ControlType.Enum, options: ["left", "alternate", "right"] },
  items: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    }
  }
};

export const Timeline = props => {
  const { items, ...rest } = props;
  return (
    <AntTimeline {...pick(rest, keys(controlProperty))}>
      {items.map((item = "") => {
        const [text, color, dotType, position] = item.split("|");
        return (
          <AntTimeline.Item
            key={item}
            {...{
              color,
              dot: dotType && <Icon type={dotType} />,
              position
            }}
          >
            {text}
          </AntTimeline.Item>
        );
      })}
    </AntTimeline>
  );
};

Timeline.defaultProps = {
  width: 700,
  height: 500,
  items: [
    'Create a services site 2015-09-01',
    'Solve initial network problems 2015-09-01|green',
    'Network problems being solved 2015-09-01||clock-circle-o',
    'Create a services site 2015-09-01|red',
    'Technical testing 2015-09-01||clock-circle-o'
  ],
  mode: 'alternate',
  reverse: false,
};

addPropertyControls(Timeline, controlProperty);
