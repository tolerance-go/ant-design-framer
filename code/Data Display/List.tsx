import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { List as AntList } from "antd";
import { keys, pick, zipObject, fill, range } from "lodash";

const controlProperty: PropertyControls = {
  itemHeight: {
    type: ControlType.Number
  },
  // 是否展示边框	boolean	false
  bordered: { type: ControlType.Boolean },
  // 列表底部	string|ReactNode	-
  footer: { type: ControlType.String },
  // 列表头部	string|ReactNode	-
  header: { type: ControlType.String },
  // 设置 List.Item 布局, 设置成 vertical 则竖直样式显示, 默认横排	string	-
  itemLayout: { type: ControlType.Enum, options: ["horizontal", "vertical"] },
  // 当卡片内容还在加载中时，可以用 loading 展示一个占位	boolean|object (更多)	false
  loading: { type: ControlType.Boolean },
  // 对应的 pagination 配置, 设置 false 不显示	boolean|object	false
  pagination: { type: ControlType.Boolean },
  // list 的尺寸	default | middle | small	default
  size: { type: ControlType.Enum, options: ["default", "middle", "small"] },
  // 是否展示分割线	boolean	true
  split: { type: ControlType.Boolean },
  // 列表数据源	any[]	-	3.20.1
  dataSource: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    }
  }
};

export const List = props => {
  const { items, itemHeight, ...rest } = props;

  return (
    <AntList
      {...pick(rest, keys(controlProperty))}
      renderItem={item => {
        return (
          <AntList.Item
            style={{
              height: itemHeight
            }}
          >
            {item}
          </AntList.Item>
        );
      }}
    />
  );
};

List.defaultProps = {
  width: 400,
  height: 500,
  dataSource: [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires."
  ],
  header: "Header",
  footer: "Footer",
  // 是否展示边框	boolean	false
  bordered: true,
  // 设置 List.Item 布局, 设置成 vertical 则竖直样式显示, 默认横排	string	-
  itemLayout: "horizontal",
  // 当卡片内容还在加载中时，可以用 loading 展示一个占位	boolean|object (更多)	false
  loading: false,
  // 对应的 pagination 配置, 设置 false 不显示	boolean|object	false
  pagination: false,
  // list 的尺寸	default | middle | small	default
  size: "default",
  // 是否展示分割线	boolean	true
  split: true,
  itemHeight: 46,
};

addPropertyControls(List, controlProperty);
