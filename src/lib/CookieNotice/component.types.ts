import type React from "react";

/**
 * CookieNotice component props.
 */
interface CookieNoticeProps {
  /**
   * Specifies the background color of the banner.
   * @default 'rgb(26, 26, 24)'
   */
  backgroundColor?: string;
  /**
   * Specifies the foreground color of the banner.
   * @default 'rgb(168, 168, 168)'
   */
  foregroundColor?: string;
  /**
   * Specifies the color of the links.
   * @default 'rgb(231, 181, 46)'
   */
  linksColor?: string;
  /**
   * Specifies the background color of the button.
   * @default 'rgb(231, 181, 46)'
   */
  buttonBackgroundColor?: string;
  /**
   * Specifies the color of the button.
   * @default 'rgb(26, 26, 24)'
   */
  buttonColor?: string;
  /**
   * Specifies the text of the button.
   * @default 'Accept'
   */
  buttonText?: string;
  /**
   * Specifies the text of the banner.
   */
  text?: string;
  /**
   * If true, the banner will set a cookie to prevent it from showing again.
   * @default true
   */
  setCookie?: boolean;
  /**
   * Specifies how long the cookie will last.
   * @default 'new Date().getDate() + 7`
   */
  expires?: number | Date;
  /**
   * Specifies the links of the banner. If not specified, the banner will not show any links.
   */
  links?: {
    name: string;
    link: string;
    render?: RenderLinkComponent;
  }[];
  /**
   * Callback function that will be called when the cookie has been set.
   */
  onCookieSet?: () => void;
  /**
   * Callback function that will be called when the banner is closed.
   */
  onHide?: () => void;
  /**
   * Specifies the className of the banner.
   */
  className?: string;
}

/**
 * RenderLink component props.
 */
interface RenderLinkProps {
  /**
   * Specifies the name of the link. This will be the text of the link.
   */
  name: string;
  /**
   * Specifies the link of the link. This will be the href of the link.
   */
  link: string;
  /**
   * Specifies the className of the link.
   */
  className: string;
}

/**
 * RenderLink component.
 */
type RenderLinkComponent = React.FC<RenderLinkProps>;

export type { CookieNoticeProps, RenderLinkProps, RenderLinkComponent };
