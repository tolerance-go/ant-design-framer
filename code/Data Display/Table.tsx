import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Table as AntTable } from "antd";
import { keys, pick, zipObject, fill, range } from "lodash";

const controlProperty: PropertyControls = {
  // 是否展示外边框和列边框	boolean	false
  bordered: {
    type: ControlType.Boolean
  },
  // 表格列的配置描述，具体项见下表	ColumnProps[]	-
  _columns: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    }
  },
  splitSymbol: {
    type: ControlType.String
  },
  // 数据数组	any[]
  _dataSource: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    }
  },
  // 展示树形数据时，每层缩进的宽度，以 px 为单位	number	15
  indentSize: {
    type: ControlType.Number
  },
  // 页面是否加载中	boolean|object (更多)	false
  loading: {
    type: ControlType.Boolean
  },
  // 分页器，参考配置项或 pagination 文档，设为 false 时不展示和进行分页	object
  pagination: {
    type: ControlType.Boolean
  },
  // 设置横向或纵向滚动，也可用于指定滚动区域的宽和高，可以设置为像素值，百分比，true 和 'max-content'	{ x: number | true, y: number }	-
  scrollX: {
    type: ControlType.Number
  },
  // 是否显示表头	boolean	true
  showHeader: {
    type: ControlType.Boolean
  },
  // 表格大小	default | middle | small	default
  size: {
    type: ControlType.Enum,
    options: ["default", "middle", "small"]
  }
};

export const Table = props => {
  const { _columns, _dataSource, scrollX, splitSymbol, ...rest } = props;
  return (
    <AntTable
      {...pick(rest, keys(controlProperty))}
      columns={getCols()}
      dataSource={getDs()}
      scroll={
        scrollX && {
          x: scrollX
        }
      }
    />
  );

  function getCols() {
    return _columns.map(title => {
      return {
        title,
        dataIndex: title
      };
    });
  }

  function getDs() {
    return _dataSource
      .map((str = "") => {
        const arr = str.split(splitSymbol);
        return zipObject(
          [..._columns],
          range(_columns.length).map((item, index) => {
            return arr[index] || "";
          })
        );
      })
      .map((item, index) => {
        return { ...item, key: index };
      });
  }
};

Table.defaultProps = {
  width: 300,
  height: 200,
  _columns: ["field1", "field2", "field3"],
  _dataSource: ["data1|data2|data3"],
  bordered: false,
  indentSize: 15,
  loading: false,
  showHeader: true,
  size: "default",
  splitSymbol: "|"
};

addPropertyControls(Table, controlProperty);
