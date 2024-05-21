import type React from "react";

/**
 * ConsentModeBanner component props.
 */
interface ConsentModeBannerProps<T extends string = string> {
  /**
   * The title displayed at the top of the banner.
   */
  title: string;
  /**
   * Subtitle displayed below the title.
   */
  subtitle: string;
  /**
   * description displayed below the subtitle.
   */
  description: React.ReactNode;
  /**
   * The list of the consent options.
   */
  consents: {
    id: string;
    label: string;
    defaultChecked: boolean;
    disabled?: boolean;
  }[];
  /**
   * The label of the button that allows the user to deny all consents.
   */
  denyAllLabel: string;
  /**
   * The label of the button that allows the user to accept all consents.
   */
  grantAllLabel: string;
  /**
   *  The label of the button that allows the user to save the consents.
   */
  saveLabel: string;
  /**
   * Specifies the accent color of the banner.
   * @default "#1890CC"
   */
  color?: string;
  /**
   * Handler called when the user changes the consent.
   */
  onConsentChange?: ConsentChangeHandler<T>;
  /**
   * Handler called when the user denies all consents.
   */
  onDenyAll?: DenyAllHandler<T>;
  /**
   * Handler called when the user grants all consents.
   */
  onGrantAll?: GrantAllHandler<T>;
  /**
   * Handler called when the user saves the consents.
   * This handler is also called every time at the initialization of the component if the user has already saved the consents.
   */
  onSave?: SaveHandler<T>;
  /**
   * Specifies how long the cookie will last.
   * @default 'new Date().getDate() + 7`
   */
  expires?: number | Date;
  /**
   * Custom class names to apply to the different elements of the component.
   */
  classNames?: ConsentModeBannerClassNames;
}

/**
 * Handler called when the user changes the consent.
 * @param consents The list of all consent ids with their values (true if accepted, false if denied).
 */
type ConsentChangeHandler<T extends string = string> = (consents: {
  [key in T]: boolean;
}) => void;

/**
 * Handler called when the user denies all consents.
 * If the handler returns `false`, the cookie responsible for displaying the banner will not be set.
 * @param consents The list of all consent ids.
 */
type DenyAllHandler<T extends string = string> = (consents: T[]) => boolean;

/**
 * Handler called when the user grants all consents.
 * If the handler returns `false`, the cookie responsible for displaying the banner will not be set.
 * @param consents The list of all consent ids.
 */
type GrantAllHandler<T extends string = string> = (consents: T[]) => boolean;

/**
 * Handler called when the user saves the consents.
 * If the handler returns `false`, the cookie responsible for displaying the banner will not be set.
 * @param consents The list of all consent ids with their values (true if accepted, false if denied).
 */
type SaveHandler<T extends string = string> = (consents: {
  [key in T]: boolean;
}) => boolean;

interface ConsentModeBannerClassNames {
  wrapper?: string;
  innerWrapper?: string;
  wrapperOpened?: string;
  frame?: string;
  frameOpened?: string;
  contentWrapper?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  consentsWrapper?: string;
  consent?: string;
  consentDisabled?: string;
  consentLabel?: string;
  consentCheckbox?: string;
  buttonsWrapper?: string;
  denyAll?: string;
  grantAll?: string;
  save?: string;
}

type DefaultConsents = "essential" | "preferences" | "statistics" | "marketing";

export type {
  ConsentModeBannerProps,
  ConsentModeBannerClassNames,
  DenyAllHandler,
  GrantAllHandler,
  SaveHandler,
  ConsentChangeHandler,
  DefaultConsents,
};
