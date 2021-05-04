import { FC } from "react";
import { FlattenSimpleInterpolation } from "styled-components";
declare const CookieNotice: FC<Props>;
interface Props {
    backgroundColor?: string;
    foregroundColor?: string;
    linksColor?: string;
    buttonBackgroundColor?: string;
    buttonColor?: string;
    customStyles?: FlattenSimpleInterpolation;
    setCookie?: boolean;
    expires?: number | Date;
    text?: string;
    links?: {
        name: string;
        link: string;
        customComponent?: any;
    }[];
    buttonText?: string;
}
export default CookieNotice;
