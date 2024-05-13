import React from "react";
import { ConsentModeBannerProps, ConsentModeBannerClassNames } from "./component.types";
import "./component.styles.scss";

const getClassNames = (classNames?: ConsentModeBannerClassNames) => {
  const defaultClassNames: Required<ConsentModeBannerClassNames> = {
    wrapper: "rendpro-consentmode-banner__wrapper",
    frame: "rendpro-consentmode-banner__frame",
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
  }

  if (!classNames) {
    return defaultClassNames;
  }

  return {
    ...defaultClassNames,
    ...classNames,
  };
}

const CookieNotice: React.FC<ConsentModeBannerProps> = ({
  title,
  subtitle,
  description,
  consents,
  denyAllLabel,
  grantAllLabel,
  onConsentChange,
  onDenyAll,
  onGrantAll,
  onSave,
  classNames: customClassNames,
}) => {
  const classNames = getClassNames(customClassNames);

  const [isOpened, setIsOpened] = React.useState<boolean>(true);
  const [consentsState, setConsentsState] = React.useState<{ [key: string]: boolean }>(
    consents.reduce((acc, { id, defaultChecked }) => ({ ...acc, [id]: defaultChecked }), {})
  );

  const handleConsentChange = (id: string): React.ChangeEventHandler<HTMLInputElement> => (event) => {
    // @ts-ignore
    const checked = (event.target as HTMLInputElement).checked;

    const newState = {
      ...consentsState,
      [id]: checked,
    };

    setConsentsState(newState);
    onConsentChange?.(newState);
  }

  const handleButtonClick = (callback?: () => void) => () => {
    setIsOpened(false);
    callback?.();
  }

  const handleDenyAll = handleButtonClick(onDenyAll);
  const handleGrantAll = handleButtonClick(onGrantAll);
  const handleSave = handleButtonClick(() => onSave?.(consentsState));

  return (
    <div className={classNames.wrapper} role="dialog" aria-labelledby="consent-mode-banner">
      <div className={classNames.frame}>
        <div className={classNames.contentWrapper}>
          <h2 className={classNames.title} id="consent-mode-banner">{title}</h2>
          <h3 className={classNames.subtitle}>{subtitle}</h3>
          <div className={classNames.description}>{description}</div>
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
            <button className={classNames.denyAll} onClick={handleDenyAll}>{denyAllLabel}</button>
            <button className={classNames.save} onClick={handleSave}>Save</button>
            <button className={classNames.grantAll} onClick={handleGrantAll}>{grantAllLabel}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieNotice;
