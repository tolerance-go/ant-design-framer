import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Select as AntSelect } from "antd";
import { keys, pick } from "lodash";
import { Form as AntForm } from "antd";
import { FormItemControlProperty, FormItemDefaults } from "../common/FormItem";

const controlProperty: PropertyControls = {
  // 指定当前选中的条目	string|string[]\
  value: {
    type: ControlType.Array,
    propertyControl: { type: ControlType.String }
  },
  // 是否展开下拉菜单	boolean	-	3.9.0
  open: {
    type: ControlType.Boolean
  },

  // 选择框大小，可选 large small	string	default
  size: {
    type: ControlType.Enum,
    options: ["large", "default", "small"]
  },
  // 加载中状态	Boolean	false	3.11.0
  loading: {
    type: ControlType.Boolean
  },

  options: {
    type: ControlType.Array,
    propertyControl: { type: ControlType.String }
  },
  // 是否禁用	boolean	false
  disabled: {
    type: ControlType.Boolean
  },
  // 下拉菜单和选择器同宽	boolean	true
  dropdownMatchSelectWidth: {
    type: ControlType.Boolean
  },
  // 最大显示的 tag 文本长度	number	-	3.18.0
  maxTagTextLength: {
    type: ControlType.Boolean
  },
  // 设置 Select 的模式为多选或标签	'multiple' | 'tags'	-
  mode: {
    type: ControlType.Enum,
    options: ["default", "multiple", "tags"]
  },
  // 当下拉列表为空时显示的内容	string	'Not Found'
  notFoundContent: {
    type: ControlType.String
  },
  // 选择框默认文字	string	-
  placeholder: {
    type: ControlType.String
  },

  // 是否显示下拉小箭头	boolean	true	3.2.1
  showArrow: {
    type: ControlType.Boolean
  },

  // 在 tags 和 multiple 模式下自动分词的分隔符	string[]
  tokenSeparators: {
    type: ControlType.String
  },

  ...FormItemControlProperty
};

export const Select = props => {
  const { _labelCol, _wrapperCol, options, ...rest } = props;

  if (!rest.label) {
    return (
      <AntSelect
        style={{ width: "100%" }}
        {...pick(rest, keys(controlProperty))}
        children={getOpt()}
      />
    );
  }

  return (
    <AntForm.Item
      {...pick(rest, keys(FormItemControlProperty))}
      labelCol={{ span: _labelCol }}
      wrapperCol={{ span: _wrapperCol }}
    >
      <AntSelect
        style={{ width: "100%" }}
        {...pick(rest, keys(controlProperty))}
        children={getOpt()}
      />
    </AntForm.Item>
  );

  function getOpt() {
    return options
      .filter(item => !!item)
      .map(item => {
        return <AntSelect.Option key={item}>{item}</AntSelect.Option>;
      });
  }
};

Select.defaultProps = {
  width: 100,
  height: 32,
  // 禁用	boolean	false
  disabled: false,
  options: [],
  open: false,
  // 支持清除	boolean
  allowClear: false,
  // 下拉菜单和选择器同宽	boolean
  dropdownMatchSelectWidth: true,
  // 设置 Select 的模式为多选或标签	'multiple' | 'tags'	-
  mode: "default",
  // 当下拉列表为空时显示的内容	string
  notFoundContent: "Not Found",
  // 是否显示下拉小箭头	boolean	true	3.2.1
  showArrow: true,
  // 使单选模式可搜索	boolean	false
  showSearch: false,
  // 选择框大小，可选 large small	string
  size: "default",
  // 在 tags 和 multiple 模式下自动分词的分隔符	string[]
  tokenSeparators: [],
  // 指定当前选中的条目	string|string[]
  value: [],
  // 加载中状态	Boolean	false	3.11.0
  loading: false,
  ...FormItemDefaults
};

addPropertyControls(Select, controlProperty);
