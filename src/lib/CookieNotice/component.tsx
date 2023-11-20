import { FC, useEffect, useState } from "react";
import { useCookie } from "react-use";
import clsx from "clsx";
import { CookieNoticeProps } from "./component.types";
import "./component.styles.scss";

const CookieNotice: FC<CookieNoticeProps> = (props) => {
  const buttonText = props.buttonText || "Accept";
  const text =
    props.text ||
    `This website uses cookies to improve and facilitate access to the website and to keep statistical data. Your continued use of
  using this site constitutes acceptance of this.`;
  const links = props.links || [
    { name: "Privacy policy", link: "#" },
    { name: "How to disable cookie?", link: "#" },
    { name: "Cybersecurity", link: "#" },
  ];
  const expires = props.expires || new Date().getDate() + 7;

  const [isCookie, setIsCookie] = useCookie("cookie-information");
  const [canBeDisplayed, setCanBeDisplayed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleOnClick = () => {
    if (props.setCookie) {
      setIsCookie("cookie-information", {
        expires,
      });
      props.onCookieSet?.();
    } else {
      setIsHidden(true);
      props.onHide?.();
    }
  };

  useEffect(() => {
    setTimeout(() => setCanBeDisplayed(true), 1000);
  }, []);

  useEffect(() => {
    if (isCookie) {
      props.onHide?.();
    }
  }, [isCookie]);

  const isActive = props.setCookie ? !isCookie && canBeDisplayed : !isHidden;

  return (
    <>
      <div
        className={clsx(
          "rendpro-cookie-notice",
          props.className,
          isActive && "is-active",
        )}
        style={
          {
            "--rendpro-cookie-notice-background-color": props.backgroundColor,
            "--rendpro-cookie-notice-foreground-color": props.foregroundColor,
            "--rendpro-cookie-notice-button-background-color":
              props.buttonBackgroundColor,
            "--rendpro-cookie-notice-button-color": props.buttonColor,
            "--rendpro-cookie-notice-links-color": props.linksColor,
          } as React.CSSProperties
        }
      >
        <div className="rendpro-cookie-notice__cookie-info">{text}</div>
        <div className="rendpro-cookie-notice__links-wrapper">
          {links.map(({ name, link, render: Render }) => {
            if (Render)
              return (
                <Render
                  key={name}
                  name={name}
                  link={link}
                  className="rendpro-cookie-notice__link"
                />
              );
            else
              return (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener"
                  key={name}
                  className="rendpro-cookie-notice__link"
                >
                  {name}
                </a>
              );
          })}
        </div>
        <button
          onClick={handleOnClick}
          className="rendpro-cookie-notice__button"
        >
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default CookieNotice;
