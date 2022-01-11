import React, { FC, useEffect, useState } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { useCookie } from "react-use";

interface StyledProps {
  $isActive?: boolean;
  $backgroundColor?: string;
  $customStyles?: FlattenSimpleInterpolation;
  $foregroundColor?: string;
  $linksColor?: string;
  $buttonBackgroundColor?: string;
  $buttonColor?: string;
}

const StyledWrapper = styled.div<StyledProps>`
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 80px;
  background: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 10%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  pointer-events: none;
  z-index: 2147483644;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

  ${({ $isActive }) =>
    $isActive &&
    css`
      opacity: 1;
      pointer-events: all;
    `};

  ${({ $customStyles }) => $customStyles};
`;

const StyledCookieInfo = styled.span<StyledProps>`
  color: ${({ $foregroundColor }) => $foregroundColor};
  margin-bottom: 15px;
  box-sizing: border-box;
`;

const StyledLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: -5px;
  box-sizing: border-box;
`;

const getLinkStyles = (linksColor: string) => ({
  color: linksColor,
  marginRight: "10px",
  marginBottom: "10px",
  boxSizing: "border-box",
});

const StyledLink = styled.a<StyledProps>`
  color: ${({ $linksColor }) => $linksColor};
  margin-right: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const StyledButton = styled.button<StyledProps>`
  position: absolute;
  right: 10px;
  top: 15px;
  background: ${({ $buttonBackgroundColor }) => $buttonBackgroundColor};
  color: ${({ $buttonColor }) => $buttonColor};
  border: 0;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    position: static;
    margin-top: 20px;
    width: 100%;
  }
`;

const CookieNotice: FC<Props> = ({
  buttonText: buttonTextProp,
  links: linkProp,
  text: textProp,
  backgroundColor: backgroundColorProp,
  buttonBackgroundColor: buttonBackgroundColorProp,
  buttonColor: buttonColorProp,
  customStyles: customStylesProp,
  expires: expiresProp,
  foregroundColor: foregroundColorProp,
  linksColor: linksColorProp,
  setCookie = true,
  onCookieSet,
  onHide,
}) => {
  const buttonText = buttonTextProp || "Accept";
  const text =
    textProp ||
    `This website uses cookies to improve and facilitate access to the website and to keep statistical data. Your continued use of
  using this site constitutes acceptance of this.`;
  const links = linkProp || [
    { name: "Privacy policy", link: "#" },
    { name: "How to disable cookie?", link: "#" },
    { name: "Cybersecurity", link: "#" },
  ];
  const backgroundColor = backgroundColorProp || "rgb(26, 26, 24)";
  const buttonBackgroundColor =
    buttonBackgroundColorProp || "rgb(231, 181, 46)";
  const buttonColor = buttonColorProp || "rgb(26, 26, 24)";
  const customStyles = customStylesProp || css``;
  const expires = expiresProp || new Date().getDate() + 7;
  const foregroundColor = foregroundColorProp || "rgb(168, 168, 168)";
  const linksColor = linksColorProp || "rgb(231, 181, 46)";

  const [isCookie, setIsCookie] = useCookie("cookie-information");
  const [canBeDisplayed, setCanBeDisplayed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleOnClick = () => {
    if (setCookie) {
      setIsCookie("cookie-information", {
        expires,
      });
      onCookieSet && onCookieSet();
    } else {
      setIsHidden(true);
      onHide && onHide();
    }
  };

  useEffect(() => {
    setTimeout(() => setCanBeDisplayed(true), 1000);
  }, []);

  useEffect(() => {
    if (isCookie) {
      onHide && onHide();
    }
  }, [isCookie]);

  return (
    <>
      <StyledWrapper
        $isActive={setCookie ? !isCookie && canBeDisplayed : !isHidden}
        $backgroundColor={backgroundColor}
        $customStyles={customStyles}
      >
        <StyledCookieInfo $foregroundColor={foregroundColor}>
          {text}
        </StyledCookieInfo>
        <StyledLinksWrapper>
          {links.map(({ name, link, customComponent: CustomComponent }) => {
            if (CustomComponent)
              return (
                <CustomComponent to={link} style={getLinkStyles(linksColor)}>
                  {name}
                </CustomComponent>
              );
            else
              return (
                <StyledLink
                  href={link}
                  target="_blank"
                  rel="noopener"
                  $linksColor={linksColor}
                  key={name}
                >
                  {name}
                </StyledLink>
              );
          })}
        </StyledLinksWrapper>
        <StyledButton
          onClick={handleOnClick}
          $buttonBackgroundColor={buttonBackgroundColor}
          $buttonColor={buttonColor}
        >
          {buttonText}
        </StyledButton>
      </StyledWrapper>
    </>
  );
};

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
  links?: { name: string; link: string; customComponent?: any }[];
  buttonText?: string;
  onCookieSet?: () => void;
  onHide?: () => void;
}

export default CookieNotice;
