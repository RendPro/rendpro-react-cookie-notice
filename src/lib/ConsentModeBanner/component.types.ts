import type React from "react";

/**
 * ConsentModeBanner component props.
 */
interface ConsentModeBannerProps {
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
   * Handler called when the user changes the consent.
   */
  onConsentChange?: (consents: { [key: string]: boolean }) => void;
  /**
   * Specifies the accent color of the banner.
   * @default "#1890CC"
   */
  color?: string;
  /**
   * Handler called when the user denies all consents.
   */
  onDenyAll?: () => void;
  /**
   * Handler called when the user grants all consents.
   */
  onGrantAll?: () => void;
  /**
   * Handler called when the user saves the consents.
   */
  onSave?: (consents: { [key: string]: boolean }) => void;
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
  consentLabel?: string;
  consentCheckbox?: string;
  buttonsWrapper?: string;
  denyAll?: string;
  grantAll?: string;
  save?: string;
}

export type { ConsentModeBannerProps, ConsentModeBannerClassNames };
