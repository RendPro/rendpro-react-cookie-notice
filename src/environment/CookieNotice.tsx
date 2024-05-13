import React from "react";
import { CookieNotice as RendProCookieNotice } from "../../dist";
import { Link } from "react-router-dom";

function CookieNotice() {
  return (
    <>
      <RendProCookieNotice
        links={[
          {
            name: "Polityka prywatności",
            link: "/policy",
            render: (props) => (
              <Link to={props.link} className={props.className}>
                {props.name}
              </Link>
            ),
          },
          {
            name: "Jak wyłączyć cookies?",
            link: "#",
          },
          {
            name: "Cyberbezpieczeństwo",
            link: "#",
          },
        ]}
        buttonText="Akceptuję"
        text="Ta strona używa plików cookie w celu usprawnienia i ułatwienia dostępu do serwisu oraz prowadzenia danych statystycznych. Dalsze korzystanie z tej witryny oznacza akceptację tego stanu rzeczy."
        backgroundColor="rgb(255, 255, 255)"
        foregroundColor="rgb(17, 27, 39)"
        buttonBackgroundColor="rgb(89, 180, 208)"
        buttonColor="rgb(255, 255, 255)"
        linksColor="rgb(89, 180, 208)"
        onCookieSet={() => console.log("cookie set")}
        onHide={() => console.log("is hide")}
        className="wrapper"
      />
    </>
  );
}

export default CookieNotice;
