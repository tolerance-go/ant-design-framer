import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { DatePicker as AntDatePicker } from "antd";
import { keys, pick } from "lodash";
import { Form as AntForm } from "antd";
import { FormItemControlProperty, FormItemDefaults } from "../common/FormItem";
const moment = require("moment");

const controlProperty: PropertyControls = {
  // 禁用	boolean	false
  disabled: { type: ControlType.Boolean },
  // 日期面板的状态（设置后无法选择年份/月份？）	time|date|month|year|decade	'date'
  mode: {
    type: ControlType.Enum,
    options: ["time", "date", "month", "year", "decade"]
  },
  // 控制弹层是否展开	boolean	-
  open: { type: ControlType.Boolean },
  // 输入框提示文字	string|RangePicker[]	-
  placeholder: { type: ControlType.String },
  // 开关大小，可选值：default small	string	default
  size: {
    type: ControlType.Enum,
    options: ["large", "default", "small"]
  },

  // ------------------------------

  // 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 moment.js	string | string[]	"YYYY-MM-DD"
  format: { type: ControlType.String },
  // 日期	moment	无
  _value: { type: ControlType.String },

  ...FormItemControlProperty
};

export const MonthPicker = props => {
  const { _labelCol, _wrapperCol, _value, ...rest } = props;

  if (!rest.label) {
    return (
      <AntDatePicker.MonthPicker
        {...pick(rest, keys(controlProperty))}
        value={_value && moment(_value)}
      />
    );
  }

  return (
    <AntForm.Item
      {...pick(rest, keys(FormItemControlProperty))}
      labelCol={{ span: _labelCol }}
      wrapperCol={{ span: _wrapperCol }}
    >
      <AntDatePicker.MonthPicker
        {...pick(rest, keys(controlProperty))}
        value={_value && moment(_value)}
      />
    </AntForm.Item>
  );
};

MonthPicker.defaultProps = {
  width: 200,
  height: 32,
  size: "default",
  // 禁用	boolean	false
  disabled: false,
  // 日期面板的状态（设置后无法选择年份/月份？）	time|date|month|year|decade	'date'
  mode: "date",
  // 控制弹层是否展开	boolean	-
  open: false,
  // ------------------------------
  ...FormItemDefaults
};

addPropertyControls(MonthPicker, controlProperty);
