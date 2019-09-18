import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Breadcrumb as AntBreadcrumb } from "antd";
import { keys, pick } from "lodash";

const controlProperty: PropertyControls = {
  items: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    }
  },
  separator: { type: ControlType.String }
};

export const Breadcrumb = props => {
  const { items, ...rest } = props;
  return (
    <AntBreadcrumb {...pick(props, keys(controlProperty))}>
      {items.map(item => {
        return <AntBreadcrumb.Item key={item}>{item}</AntBreadcrumb.Item>;
      })}
    </AntBreadcrumb>
  );
};

Breadcrumb.defaultProps = {
  width: 100,
  height: 32,
  separator: "/",
  items: ["item1", "item2"]
};

addPropertyControls(Breadcrumb, controlProperty);
