import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Tabs as AntTabs } from "antd";
import { keys, pick, zipObject, fill, range } from "lodash";

const controlProperty: PropertyControls = {
  // 当前激活 tab 面板的 key	string	无
  activeKey: {
    type: ControlType.String
  },
  // 是否隐藏加号图标，在 type="editable-card" 时有效	boolean	false
  hideAdd: {
    type: ControlType.Boolean
  },
  // 大小，提供 large default 和 small 三种大小	string	'default'
  size: {
    type: ControlType.Enum,
    options: ["default", "default", "small"]
  },
  // tabs 之间的间隙	number	无	3.2.0
  tabBarGutter: {
    type: ControlType.Number
  },
  // 页签位置，可选值有 top right bottom left	string	'top'
  tabPosition: {
    type: ControlType.Enum,
    options: ["top", "right", "bottom", "left"]
  },
  // 页签的基本样式，可选 line、card editable-card 类型	string	'line'
  type: {
    type: ControlType.Enum,
    options: ["line", "card", "editable-card"]
  },
  tabPaneItems: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    }
  }
};

export const Tabs = props => {
  const { tabPaneItems, ...rest } = props;
  return (
    <AntTabs {...pick(rest, keys(controlProperty))}>
      {tabPaneItems.map(item => {
        return <AntTabs.TabPane key={item} tab={item}></AntTabs.TabPane>;
      })}
    </AntTabs>
  );
};

Tabs.defaultProps = {
  width: 300,
  height: 200,
  tabPaneItems: ["tab1", "tab2"],
  // 当前激活 tab 面板的 key	string	无
  activeKey: "tab1",
  // 是否使用动画切换 Tabs，在 tabPosition=top|bottom 时有效	boolean | {inkBar:boolean, tabPane:boolean}	true, 当 type="card" 时为 false
  animated: true,
  // 是否隐藏加号图标，在 type="editable-card" 时有效	boolean	false
  hideAdd: false,
  // 大小，提供 large default 和 small 三种大小	string	'default'
  size: "default",
  // 页签位置，可选值有 top right bottom left	string	'top'
  tabPosition: "top",
  // 页签的基本样式，可选 line、card editable-card 类型	string	'line'
  type: "line",
  tabBarGutter: 2,
};

addPropertyControls(Tabs, controlProperty);
