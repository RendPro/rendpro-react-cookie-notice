import { DefaultConsents } from "./component.types";

const defaultConsents = (labels: { [key in DefaultConsents]: string }) => {
  return {
    consents: [
      {
        id: "essential",
        label: labels.essential,
        defaultChecked: true,
        disabled: true,
      },
      {
        id: "preferences",
        label: labels.preferences,
        defaultChecked: false,
      },
      {
        id: "statistics",
        label: labels.statistics,
        defaultChecked: false,
      },
      {
        id: "marketing",
        label: labels.marketing,
        defaultChecked: false,
      },
    ],
  };
};

export { defaultConsents };
