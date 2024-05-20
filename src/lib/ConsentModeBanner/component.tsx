import React from "react";
import {
  ConsentModeBannerProps,
  ConsentModeBannerClassNames,
} from "./component.types";
import "./component.styles.scss";
import cx from "clsx";
import { useCookie, useLocalStorage } from "react-use";

const getClassNames = (classNames?: ConsentModeBannerClassNames) => {
  const defaultClassNames: Required<ConsentModeBannerClassNames> = {
    wrapper: "rendpro-consentmode-banner__wrapper",
    innerWrapper: "rendpro-consentmode-banner__innerWrapper",
    wrapperOpened: "rendpro-consentmode-banner__wrapper--opened",
    frame: "rendpro-consentmode-banner__frame",
    frameOpened: "rendpro-consentmode-banner__frame--opened",
    contentWrapper: "rendpro-consentmode-banner__contentWrapper",
    title: "rendpro-consentmode-banner__title",
    subtitle: "rendpro-consentmode-banner__subtitle",
    description: "rendpro-consentmode-banner__description",
    consentsWrapper: "rendpro-consentmode-banner__consentsWrapper",
    consent: "rendpro-consentmode-banner__consent",
    consentLabel: "rendpro-consentmode-banner__consentLabel",
    consentCheckbox: "rendpro-consentmode-banner__consentCheckbox",
    buttonsWrapper: "rendpro-consentmode-banner__buttonsWrapper",
    denyAll: "rendpro-consentmode-banner__denyAll",
    save: "rendpro-consentmode-banner__save",
    grantAll: "rendpro-consentmode-banner__grantAll",
  };

  if (!classNames) {
    return defaultClassNames;
  }

  return {
    ...defaultClassNames,
    ...classNames,
  };
};

const CookieNotice: React.FC<ConsentModeBannerProps> = ({
  title,
  subtitle,
  description,
  consents,
  denyAllLabel,
  grantAllLabel,
  saveLabel,
  onConsentChange,
  onDenyAll,
  onGrantAll,
  onSave,
  color = "#1890CC",
  expires = new Date().getDate() + 7,
  classNames: customClassNames,
}) => {
  const classNames = getClassNames(customClassNames);

  const consentIds = consents.map(({ id }) => id);
  const [isCookie, setIsCookie] = useCookie("@rendpro/consent-mode-banner");
  const [isOpened, setIsOpened] = React.useState<boolean>(false);
  const [consentsState, setConsentsState] = useLocalStorage<{
    [key: string]: boolean;
  }>(
    "@rendpro/consent-mode-banner:consents",
    consents.reduce(
      (acc, { id, defaultChecked }) => ({ ...acc, [id]: defaultChecked }),
      {},
    ),
  );

  const allGrantedState = React.useMemo(() => {
    return consents.reduce(
      (acc, { id }) => ({
        ...acc,
        [id]: true,
      }),
      {},
    );
  }, [consents]);
  const allDeniedState = React.useMemo(() => {
    return consents.reduce(
      (acc, { id }) => ({
        ...acc,
        [id]: false,
      }),
      {},
    );
  }, [consents]);

  React.useEffect(() => {
    if (!isCookie) {
      setTimeout(() => setIsOpened(true), 500);
    }
  }, []);

  React.useEffect(() => {
    if (isCookie && consentsState) {
      onSave?.(consentsState);
    }
  }, [isCookie, consentsState]);

  React.useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpened]);

  const handleConsentChange =
    (id: string): React.ChangeEventHandler<HTMLInputElement> =>
    (event) => {
      // @ts-ignore
      const checked = (event.target as HTMLInputElement).checked;

      const newState = {
        ...consentsState,
        [id]: checked,
      };

      setConsentsState(newState);
      onConsentChange?.(newState);
    };

  const handleButtonClick =
    (callback?: () => boolean, type?: "denyAll" | "grantAll" | "save") =>
    () => {
      const res = callback?.();

      if (res) {
        if (type === "denyAll") {
          setConsentsState(allDeniedState);
        } else if (type === "grantAll") {
          setConsentsState(allGrantedState);
        }

        setIsOpened(false);
        setIsCookie("cookie-consent-mode", {
          expires,
        });
      }
    };

  const handleDenyAll = handleButtonClick(
    () => onDenyAll?.(consentIds) ?? true,
    "denyAll",
  );
  const handleGrantAll = handleButtonClick(
    () => onGrantAll?.(consentIds) ?? true,
    "grantAll",
  );
  const handleSave = handleButtonClick(
    () => onSave?.(consentsState ?? {}) ?? true,
    "save",
  );

  return (
    <div
      className={cx(classNames.wrapper, isOpened && classNames.wrapperOpened)}
      role="dialog"
      aria-labelledby="consent-mode-banner"
      style={{
        // @ts-ignore
        "--rendpro-consentmode-banner-color": color,
      }}
    >
      <div className={classNames.innerWrapper}>
        <div
          className={cx(classNames.frame, isOpened && classNames.frameOpened)}
        >
          <div className={classNames.contentWrapper}>
            <h2 className={classNames.title} id="consent-mode-banner">
              {title}
            </h2>
            <h3 className={classNames.subtitle}>{subtitle}</h3>
            <div className={classNames.description}>{description}</div>
          </div>
          <div className={classNames.consentsWrapper}>
            {consents.map(({ id, label, defaultChecked }) => (
              <label key={id} className={classNames.consent}>
                <span className={classNames.consentLabel}>{label}</span>
                <input
                  type="checkbox"
                  id={id}
                  defaultChecked={defaultChecked}
                  className={classNames.consentCheckbox}
                  onChange={handleConsentChange(id)}
                />
              </label>
            ))}
          </div>
          <div className={classNames.buttonsWrapper}>
            <button className={classNames.denyAll} onClick={handleDenyAll}>
              {denyAllLabel}
            </button>
            <button className={classNames.save} onClick={handleSave}>
              {saveLabel}
            </button>
            <button className={classNames.grantAll} onClick={handleGrantAll}>
              {grantAllLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieNotice;
