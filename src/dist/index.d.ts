import React from "react";
import { FlattenSimpleInterpolation } from "styled-components";

interface CookieNoticeProps {
  backgroundColor?: string;
  foregroundColor?: string;
  linksColor?: string;
  buttonBackgroundColor?: string;
  buttonColor?: string;
  customStyles?: FlattenSimpleInterpolation;
  setCookie?: boolean;
  expires?: number | Date;
  text?: string;
  links?: { name: string; link: string; customComponent?: any }[];
  buttonText?: string;
}

declare module "rendpro-react-cookie-notice" {
  export default function CookieNotice(): React.Component<CookieNoticeProps>;
}
