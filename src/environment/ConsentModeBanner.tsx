import React from "react";
import { ConsentModeBanner as RendProConsentModeBanner } from "../../dist";
import { Link } from "react-router-dom";

function ConsentModeBanner() {
  return (
    <>
      <RendProConsentModeBanner
        title="Zgoda - Consent Mode"
        subtitle="Szanujemy Twoją prywatność"
        description={
          <>
            Niniejsza strona korzysta z plików cookie. Wykorzystujemy pliki
            cookie do spersonalizowania treści i reklam, aby oferować funkcje
            społecznościowe i analizować ruch w naszej witrynie. Informacje o
            tym, jak korzystasz z naszej witryny, udostępniamy partnerom
            społecznościowym, reklamowym i analitycznym. Partnerzy mogą połączyć
            te informacje z innymi danymi otrzymanymi od Ciebie lub uzyskanymi
            podczas korzystania z ich usług. Przeczytaj więcej w{" "}
            <Link to="/privacy-policy">Polityce Prywatności</Link>.
          </>
        }
        consents={[
          {
            id: "essential",
            label: "Niezbędne",
            defaultChecked: false,
          },
          {
            id: "preferences",
            label: "Preferencje",
            defaultChecked: true,
          },
          {
            id: "statistics",
            label: "Statystyki",
            defaultChecked: true,
          },
          {
            id: "marketing",
            label: "Marketing",
            defaultChecked: true,
          },
        ]}
        denyAllLabel="Odmowa"
        grantAllLabel="Zezwól na wszystkie"
        saveLabel="Zapisz i zamknij"
      />
    </>
  );
}

export default ConsentModeBanner;
