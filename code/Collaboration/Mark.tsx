import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import {
  Divider as AntDivider,
  Badge,
  Icon,
  Modal,
  Row,
  Col,
  Button,
  Tag,
  Popover,
  Divider
} from "antd";
import { keys, pick, zipObject, fill, range } from "lodash";

const controlProperty: PropertyControls = {
  count: { type: ControlType.Number },
  content: { type: ControlType.String },
  visible: { type: ControlType.Boolean }
};

export const Mark = props => {
  const { count, content, visible: _visible, iconType, ...rest } = props;
  const [visible, setVisible] = React.useState(false);

  const okType = "primary";
  const title = content;
  const placement = "top";

  return (
    <div>
      <div
        style={{
          position: "relative",
          opacity: getVisible() ? 1 : 0
        }}
        className={`ant-popover ant-popover-placement-${placement}`}
      >
        <div className="ant-popover-content">
          <div className="ant-popover-arrow"></div>
          <div className="ant-popover-inner" role="tooltip">
            <div>
              <div className="ant-popover-inner-content">
                <div style={{ marginBottom: 12 }}>{title}</div>
                <div className="ant-popover-buttons">
                  <Button
                    disabled
                    size="small"
                  >
                    comment
                  </Button>
                  <Button
                    size="small"
                    type={okType}
                    onClick={() => {
                      setVisible(false);
                    }}
                  >
                    fine
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Row type="flex" justify="center">
        <Badge
          {...pick(rest, keys(controlProperty))}
          count={count}
          showZero
          style={{ background: "#52c41a", cursor: "pointer" }}
          onClick={() => {
            setVisible(true);
          }}
        ></Badge>
      </Row>
    </div>
  );

  function getVisible() {
    if (RenderTarget.current() === RenderTarget.preview) {
      return visible;
    }
    return _visible;
  }
};

Mark.defaultProps = {
  width: 285,
  height: 130,
  visible: true,
  content: "content"
};

addPropertyControls(Mark, controlProperty);
