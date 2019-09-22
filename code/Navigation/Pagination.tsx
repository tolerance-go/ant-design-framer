import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Pagination as AntPagination } from "antd";
import { keys, pick } from "lodash";

const controlProperty: PropertyControls = {
  // 当前页数	number	-
  current: { type: ControlType.Number },
  // 禁用分页	boolean	-	3.18.0
  disabled: { type: ControlType.Boolean },
  // 只有一页时是否隐藏分页器	boolean	false	3.1.0
  hideOnSinglePage: { type: ControlType.Boolean },
  // 每页条数	number	-
  pageSize: { type: ControlType.Number },
  // 指定每页可以显示多少条	string[]	['10', '20', '30', '40']
  pageSizeOptions: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    }
  },
  // show less page items	boolean	false	3.16.3
  showLessItems: { type: ControlType.Boolean },
  // 是否可以快速跳转至某页	boolean | { goButton: ReactNode }	false
  showQuickJumper: { type: ControlType.Boolean },
  // 是否可以改变 pageSize	boolean	false
  showSizeChanger: { type: ControlType.Boolean },
  // 当添加该属性时，显示为简单分页	boolean	-
  simple: { type: ControlType.Boolean },
  // 当为「small」时，是小尺寸分页	string	""
  size: {
    type: ControlType.Enum,
    options: ["default", "small"]
  },
  // 数据总数	number	0
  total: { type: ControlType.Number }
};

export const Pagination = props => {
  const { ...rest } = props;
  return (
    <AntPagination {...pick(rest, keys(controlProperty))}></AntPagination>
  );
};

Pagination.defaultProps = {
  width: 500,
  height: 200,
  pageSizeOptions: ["10", "20", "30", "40"],
  hideOnSinglePage: false,
  disabled: false,
  simple: false,
  total: 100,
  current: 1,
  pageSize: 10,
};

addPropertyControls(Pagination, controlProperty);
