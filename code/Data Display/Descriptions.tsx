import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Descriptions as AntDescriptions } from "antd";
import { keys, pick, zipObject, fill, range } from "lodash";

const controlProperty: PropertyControls = {
  // 描述列表的标题，显示在最顶部	ReactNode	-	3.19.0
  title: {
    type: ControlType.String
  },
  items: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    }
  },
  // 是否展示边框	boolean	false	3.19.0
  bordered: {
    type: ControlType.Boolean
  },
  // 一行的 DescriptionItems 数量，可以写成像素值或支持响应式的对象写法 { xs: 8, sm: 16, md: 24}	number	3	3.19.0
  column: {
    type: ControlType.Number
  },
  // 设置列表的大小。可以设置为 middle 、small, 或不填（只有设置 bordered={true} 生效）	default | middle | small	false	3.19.0
  size: {
    type: ControlType.Enum,
    options: ["default", "middle", "small"]
  },
  // 描述布局	horizontal | vertical	horizontal	3.19.8
  layout: {
    type: ControlType.Enum,
    options: ["horizontal", "vertical"]
  },
  // 配置 Descriptions.Item 的 colon 的默认值	boolean	true	3.21.0
  colon: {
    type: ControlType.Boolean
  }
};

export const Descriptions = props => {
  const { items, ...rest } = props;
  return (
    <AntDescriptions
      {...pick(rest, keys(controlProperty))}
      children={items.map((item= '') => {
        const [label, val, span] = item.split('|');
        return <AntDescriptions.Item key={label} label={label} span={span}>{val}</AntDescriptions.Item>
      })}
    />
  );
};

Descriptions.defaultProps = {
  width: 800,
  height: 150,
  // 描述列表的标题，显示在最顶部	ReactNode	-	3.19.0
  title: "User Info",
  // 是否展示边框	boolean	false	3.19.0
  bordered: true,
  // 一行的 DescriptionItems 数量，可以写成像素值或支持响应式的对象写法 { xs: 8, sm: 16, md: 24}	number	3	3.19.0
  column: 3,
  // 设置列表的大小。可以设置为 middle 、small, 或不填（只有设置 bordered={true} 生效）	default | middle | small	false	3.19.0
  size: "default",
  // 描述布局	horizontal | vertical	horizontal	3.19.8
  layout: "horizontal",
  // 配置 Descriptions.Item 的 colon 的默认值	boolean	true	3.21.0
  colon: true,
  items: [
    "UserName|Zhou Maomao",
    "Telephone|1810000000",
    "Live|Hangzhou, Zhejiang",
    "Remark|empty",
    "Address|No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China|2"
  ]
};

addPropertyControls(Descriptions, controlProperty);
