import * as React from "react";
import {
  Frame,
  addPropertyControls,
  ControlType,
  RenderTarget,
  PropertyControls
} from "framer";
import { Button, Icon, message } from "antd";
import { keys, pick, zipObject, fill, range } from "lodash";

const controlProperty: PropertyControls = {
  type: {
    type: ControlType.Enum,
    options: ["default", "info", "success", "error", "warning"]
  },
  // 自定义关闭按钮	ReactNode	-
  btnText: { type: ControlType.String },
  // 通知提醒内容，必选	string|ReactNode	-
  description: { type: ControlType.String },
  // 自定义图标	ReactNode	-
  iconType: { type: ControlType.String },
  // 通知提醒标题，必选	string|ReactNode	-
  message: { type: ControlType.String }
};

export const Notification = props => {
  const {
    width,
    message,
    description,
    iconType,
    btnText,
    type,
    ...rest
  } = props;
  return (
    <div className="ant-notification-notice ant-notification-notice-closable">
      <div className="ant-notification-notice-content">
        <div
          className={`${
            iconType || type !== "default"
              ? "ant-notification-notice-with-icon"
              : null
          }`}
        >
          {(iconType || type !== "default") && getIcon()}
          <div className="ant-notification-notice-message">{message}</div>
          <div className="ant-notification-notice-description">
            {description}
          </div>
          <span className="ant-notification-notice-btn">
            {btnText && (
              <button
                type="button"
                className="ant-btn ant-btn-primary ant-btn-sm"
              >
                <span>{btnText}</span>
              </button>
            )}
          </span>
        </div>
      </div>
      <a className="ant-notification-notice-close">
        <i
          aria-label="icon: close"
          className="anticon anticon-close ant-notification-close-icon"
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
      </a>
    </div>
  );

  function getIcon() {
    if (iconType)
      return (
        <span className="ant-notification-notice-icon">
          <Icon type={iconType} style={{ fontSize: 24 }}></Icon>
        </span>
      );

    if (type === "error") {
      return (
        <i
          aria-label="icon: close-circle-o"
          className="anticon anticon-close-circle-o ant-notification-notice-icon ant-notification-notice-icon-error"
        >
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="close-circle"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
            <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
          </svg>
        </i>
      );
    }
    if (type === "warning") {
      return (
        <i
          aria-label="icon: exclamation-circle-o"
          className="anticon anticon-exclamation-circle-o ant-notification-notice-icon ant-notification-notice-icon-warning"
        >
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            className=""
            data-icon="exclamation-circle"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
            <path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
          </svg>
        </i>
      );
    }
    if (type === "info") {
      return (
        <i
          aria-label="icon: info-circle-o"
          className="anticon anticon-info-circle-o ant-notification-notice-icon ant-notification-notice-icon-info"
        >
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            className=""
            data-icon="info-circle"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
            <path d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </i>
      );
    }

    if (type === "success") {
      return (
        <i
          aria-label="icon: check-circle-o"
          className="anticon anticon-check-circle-o ant-notification-notice-icon ant-notification-notice-icon-success"
        >
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            className=""
            data-icon="check-circle"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
          </svg>
        </i>
      );
    }
  }
};

Notification.defaultProps = {
  type: "default",
  width: 520,
  height: 450,
  // 通知提醒内容，必选	string|ReactNode	-
  description:
    'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
  // 通知提醒标题，必选	string|ReactNode	-
  message: "Notification Title",
  btnText: "confirm"
};

addPropertyControls(Notification, controlProperty);
