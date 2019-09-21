import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Card as AntCard, Icon } from "antd";
import { keys, pick, zipObject, fill, range, isEmpty } from "lodash";

const controlProperty: PropertyControls = {
  bodyHeight: {
    type: ControlType.Number
  },
  // 当前激活页签的 key	string	-	3.3.0
  activeTabKey: {
    type: ControlType.String,
    hidden: props => isEmpty(props.tabNameList)
  },
  // 卡片操作组，位置在卡片底部	Array<ReactNode>	-
  actionIcons: {
    type: ControlType.Array,
    propertyControl: { type: ControlType.String }
  },
  // 是否有边框	boolean	true
  bordered: { type: ControlType.Boolean },
  // 卡片封面	ReactNode	-
  coverImg: { type: ControlType.Image },
  coverSrc: { type: ControlType.String },
  // 卡片右上角的操作区域	string|ReactNode	-
  extra: { type: ControlType.String },
  // 当卡片内容还在加载中时，可以用 loading 展示一个占位	boolean	false
  loading: { type: ControlType.Boolean },
  // 页签标题列表	Array<{key: string, tab: ReactNode}>	-
  tabNameList: {
    type: ControlType.Array,
    propertyControl: { type: ControlType.String }
  },
  // tab bar 上额外的元素	React.ReactNode	无
  tabBarExtraContent: { type: ControlType.String },
  // card 的尺寸	default | small	default	3.12.0
  size: {
    type: ControlType.Enum,
    options: ["small", "default"]
  },
  // 卡片标题	string|ReactNode	-
  title: { type: ControlType.String },
  // 卡片类型，可设置为 inner 或 不设置	string	-
  type: { type: ControlType.Enum, options: ["inner", "default"] },
  grid: {
    type: ControlType.Boolean
  },
  gridNum: {
    type: ControlType.Number,
    hidden: props => props.grid === false
  },
  gridWidthPercent: {
    type: ControlType.Number,
    hidden: props => props.grid === false
  },
  gridHeightPx: {
    type: ControlType.Number,
    hidden: props => props.grid === false
  }
};

export const Card = props => {
  const {
    actionIcons,
    coverImg,
    coverSrc,
    tabNameList,
    bodyHeight,
    grid,
    gridNum,
    gridWidthPercent,
    gridHeightPx,
    ...rest
  } = props;
  return (
    <AntCard
      {...pick(rest, keys(controlProperty))}
      actions={actionIcons.map(icon => (
        <Icon key={icon} type={icon} />
      ))}
      tabList={tabNameList.map(tab => ({ key: tab, tab }))}
      bodyStyle={{ height: bodyHeight }}
      cover={getCoverAdd()}
      children={getCd()}
    />
  );

  function getCoverAdd() {
    const imgSrc = coverImg || coverSrc;
    if (imgSrc) {
      return <img src={imgSrc} alt="" />;
    }
    return null;
  }

  function getCd() {
    if (grid) {
      return range(gridNum).map(item => (
        <AntCard.Grid
          key={item}
          style={{
            width: `${gridWidthPercent}%`,
            height: `${gridHeightPx}px`
          }}
        />
      ));
    }
    return null;
  }
};

Card.defaultProps = {
  width: 400,
  height: 480,
  bodyHeight: 300,
  tabNameList: ["tab1", "tab2"],
  activeTabKey: "tab1",
  actionIcons: ["setting", "edit", "ellipsis"],
  loading: false,
  title: "title",
  extra: "more",
  type: "default",
  tabBarExtraContent: "extra",
  coverSrc:
    "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  grid: true,
  gridNum: 4,
  gridWidthPercent: 50,
  gridHeightPx: 100,
  size: 'default'
};

addPropertyControls(Card, controlProperty);
