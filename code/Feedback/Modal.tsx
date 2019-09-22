import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Modal as AntModal, Button, Icon } from "antd";
import { keys, pick, zipObject, fill, range } from "lodash";

const controlProperty: PropertyControls = {
  type: {
    type: ControlType.Enum,
    options: ["default", "confirm", "info", "success", "error", "warning"]
  },
  // 取消按钮文字	string|ReactNode	取消
  cancelText: {
    type: ControlType.String,
    hidden: props => props.type !== "default" || props.type !== "confirm"
  },
  okText: {
    type: ControlType.String
  },
  // 标题	string|ReactNode	无
  title: {
    type: ControlType.String
  },
  mask: {
    type: ControlType.Boolean
  },

  modalWidth: {
    type: ControlType.Number,
    hidden: props => props.type !== "default"
  },
  // 是否显示右上角的关闭按钮	boolean	true
  closable: {
    type: ControlType.Boolean,
    hidden: props => props.type !== "default"
  },
  // 确定按钮 loading	boolean	无
  confirmLoading: {
    type: ControlType.Boolean,
  },
  bodyHeight: {
    type: ControlType.Number,
    hidden: props => props.type !== "default"
  },

  // 内容	string|ReactNode	无
  content: {
    type: ControlType.String,
    hidden: props => props.type === "default"
  },
  // 自定义图标（3.12.0 新增）	string|ReactNode	<Icon type="question-circle">	3.12.0
  icon: {
    type: ControlType.String,
    hidden: props => props.type === "default"
  },
  // 确认按钮类型	string	primary
  okType: {
    type: ControlType.String,
    hidden: props => props.type === "default"
  },
  confirmWidth: {
    type: ControlType.Number,
    hidden: props => props.type === "default"
  }
};

export const Modal = props => {
  const {
    width,
    type,
    cancelText,
    okText,
    content,
    title,
    icon,
    okType,
    closable,
    confirmLoading,
    bodyHeight,
    mask,
    modalWidth,
    confirmWidth,
    ...rest
  } = props;
  if (type !== "default") {
    return (
      <div>
        {mask && <div className="ant-modal-mask"></div>}
        <div className="ant-modal-wrap" role="dialog">
          <div
            role="document"
            className={`ant-modal ant-modal-confirm ant-modal-confirm-${type}`}
            style={{
              width: confirmWidth,
              transformOrigin: "26px 104px"
            }}
          >
            <div className="ant-modal-content">
              <div className="ant-modal-body">
                <div className="ant-modal-confirm-body-wrapper">
                  <div className="ant-modal-confirm-body">
                    {icon && <Icon type={getIcon()}></Icon>}
                    <span className="ant-modal-confirm-title">{title}</span>
                    <div className="ant-modal-confirm-content">{content}</div>
                  </div>
                  <div className="ant-modal-confirm-btns">
                    {type === "confirm" && (
                      <button type="button" className="ant-btn">
                        <span>{cancelText}</span>
                      </button>
                    )}
                    <Button loading={confirmLoading} type={okType}>{okText}</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      {mask && <div className="ant-modal-mask"></div>}
      <div
        className="ant-modal-wrap "
        role="dialog"
        aria-labelledby="rcDialogTitle51"
      >
        <div
          role="document"
          className="ant-modal"
          style={{
            width: modalWidth,
            transformOrigin: "26px 104px"
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width: "0px",
              height: "0px",
              overflow: "hidden"
            }}
          ></div>
          <div className="ant-modal-content">
            {closable && (
              <button
                type="button"
                aria-label="Close"
                className="ant-modal-close"
              >
                <span className="ant-modal-close-x">
                  <i
                    aria-label="图标: close"
                    className="anticon anticon-close ant-modal-close-icon"
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      className=""
                      data-icon="close"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                    </svg>
                  </i>
                </span>
              </button>
            )}
            <div className="ant-modal-header">
              <div className="ant-modal-title" id="rcDialogTitle51">
                {title}
              </div>
            </div>
            <div
              className="ant-modal-body"
              style={{ height: bodyHeight }}
            ></div>
            <div className="ant-modal-footer">
              <div>
                <Button>{cancelText}</Button>
                <Button loading={confirmLoading} type={okType}>
                  {okText}
                </Button>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            style={{
              width: "0px",
              height: "0px",
              overflow: "hidden"
            }}
          ></div>
        </div>
      </div>
    </div>
  );

  function getIcon() {
    if (type === "confirm") {
      return "question-circle";
    }
    if (type === "info") {
      return "info-circle";
    }
    if (type === "success") {
      return "check-circle";
    }
    if (type === "warning") {
      return "exclamation-circle";
    }
    if (type === "error") {
      return "close-circle";
    }
  }
};

Modal.defaultProps = {
  type: "default",
  width: 720,
  height: 600,
  modalWidth: 520,
  confirmWidth: 416,
  bodyHeight: 300,
  title: "title",
  // 垂直居中展示 Modal	Boolean	false	3.8.0
  centered: false,
  // 是否显示右上角的关闭按钮	boolean	true
  closable: true,
  // 确定按钮 loading	boolean	无
  confirmLoading: false,
  cancelText: "cancel",
  content: "content",
  okText: "ok",
  okType: "primary",
  icon: "question-circle"
};

addPropertyControls(Modal, controlProperty);
