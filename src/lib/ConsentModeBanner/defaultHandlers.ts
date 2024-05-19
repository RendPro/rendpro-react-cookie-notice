import {
  DefaultConsents,
  DenyAllHandler,
  GrantAllHandler,
  SaveHandler,
} from "./component.types";
import G = Gtag.Gtag;

const defineHandler =
  <T extends (...args: any[]) => void>(handler: T) =>
  (...args: Parameters<T>) => {
    if (typeof gtag === "undefined") {
      console.error("ConsentModeBanner: gtag is not defined");
      return false;
    }

    return handler(...args);
  };

(window as any).dataLayer = (window as any).dataLayer ?? [];

const gtag: G = function () {
  (window as any).dataLayer.push(arguments);
};

const defaultHandlers = () => {
  const handleDenyAll = defineHandler<DenyAllHandler<DefaultConsents>>(() => {
    gtag("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
      functionality_storage: "denied",
      personalization_storage: "denied",
      security_storage: "denied",
    });

    return true;
  });
  const handleGrantAll = defineHandler<GrantAllHandler<DefaultConsents>>(
    (consents) => {
      gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
        functionality_storage: "granted",
        personalization_storage: "granted",
        security_storage: "granted",
      });

      return true;
    },
  );
  const handleSave = defineHandler<SaveHandler<DefaultConsents>>((consents) => {
    const updateObject: G["arguments"][2] = {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
      functionality_storage: "denied",
      personalization_storage: "denied",
      security_storage: "denied",
    };

    if (consents.essential) {
      updateObject.security_storage = "granted";
      updateObject.functionality_storage = "granted";
    }

    if (consents.preferences) {
      updateObject.personalization_storage = "granted";
    }

    if (consents.statistics) {
      updateObject.analytics_storage = "granted";
    }

    if (consents.marketing) {
      updateObject.ad_storage = "granted";
      updateObject.ad_user_data = "granted";
      updateObject.ad_personalization = "granted";
    }

    gtag("consent", "update", updateObject);

    return true;
  });

  return {
    onDenyAll: handleDenyAll,
    onGrantAll: handleGrantAll,
    onSave: handleSave,
  } as {
    onDenyAll: DenyAllHandler<string>;
    onGrantAll: GrantAllHandler<string>;
    onSave: SaveHandler<string>;
  };
};

export { defaultHandlers };
