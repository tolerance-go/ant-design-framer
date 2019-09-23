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
  Tag
} from "antd";
import { keys, pick, zipObject, fill, range } from "lodash";

const controlProperty: PropertyControls = {
  count: { type: ControlType.Number },
  content: { type: ControlType.String }
};

export const Mark = props => {
  const { count, content, ...rest } = props;
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Badge
        {...pick(rest, keys(controlProperty))}
        count={count}
        showZero
        style={{ background: "#52c41a", cursor: "pointer" }}
        onClick={() => {
          setVisible(true);
        }}
      ></Badge>
      <Modal
        closable={false}
        visible={visible}
        footer={
          <Row type="flex" justify="end" align="middle">
            <Col>
              <Row
                type="flex"
                justify="space-between"
                align="middle"
                gutter={10}
              >
                <Col>
                  <Button size="small" disabled>
                    comment
                  </Button>
                </Col>
                <Col>
                  <Button
                    type="primary"
                    size="small"
                    onClick={() => setVisible(false)}
                  >
                    fine
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        }
      >
        {content}
      </Modal>
    </>
  );
};

Mark.defaultProps = {
  width: 40,
  height: 40
};

addPropertyControls(Mark, controlProperty);
