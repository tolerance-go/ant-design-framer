import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Skeleton as AntSkeleton } from "antd";
import { keys, pick, zipObject, fill, range } from "lodash";

const controlProperty: PropertyControls = {
  // 是否展示动画效果	boolean	false	3.9.0
  active: {
    type: ControlType.Boolean
  },
  // 是否显示头像占位图	boolean | SkeletonAvatarProps	false	3.9.0
  avatar: {
    type: ControlType.Boolean
  },
  // 是否显示段落占位图	boolean | SkeletonParagraphProps	true	3.9.0
  paragraph: {
    type: ControlType.Boolean
  },
  // 是否显示标题占位图	boolean | SkeletonTitleProps	true	3.9.0
  title: {
    type: ControlType.Boolean
  },
  // 设置头像占位图的大小	number | Enum{ 'large', 'small', 'default' }	-	3.9.0
  avatarSize: {
    type: ControlType.Enum,
    options: ["large", "small", "default"],
    hidden: props => props.avatar === false
  },
  // 指定头像的形状	Enum{ 'circle', 'square' }	-	3.9.0
  avatarShape: {
    type: ControlType.Enum,
    options: ["circle", "square"],
    hidden: props => props.avatar === false
  },

  // 设置标题占位图的宽度
  titleWidth: {
    type: ControlType.String,
    hidden: props => props.title === false
  },

  paragraphRows: {
    type: ControlType.Number,
    hidden: props => props.paragraph === false
  },
  paragraphWidth: {
    type: ControlType.String,
    hidden: props => props.paragraph === false
  }
};

export const Skeleton = props => {
  const {
    avatarSize,
    avatarShape,
    avatar,
    title,
    titleWidth,
    paragraph,
    paragraphRows,
    paragraphWidth,
    ...rest
  } = props;
  return (
    <AntSkeleton
      {...pick(rest, keys(controlProperty))}
      avatar={
        avatar && {
          size: avatarSize,
          shape: avatarShape
        }
      }
      title={
        title && {
          width: titleWidth
        }
      }
      paragraph={
        paragraph && {
          rows: paragraphRows,
          width: paragraphWidth
        }
      }
    />
  );
};

Skeleton.defaultProps = {
  width: 435,
  height: 40,
  active: true,
  avatar: true,
  paragraph: true,
  title: true,
  avatarSize: "default",
  avatarShape: "circle",
  titleWidth: "38%",
  paragraphRows: 3,
  paragraphWidth: "61%"
};

addPropertyControls(Skeleton, controlProperty);
