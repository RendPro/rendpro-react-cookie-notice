import React from "react";
import { css } from "styled-components";
import CookieNotice from "../dist/";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => (
  <div>
    <BrowserRouter>
      <Route path="/">
        <CookieNotice
          links={[
            {
              name: "Polityka prywatności",
              link: "/policy",
              customComponent: Link,
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
          customStyles={css`
            & {
              box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            }
          `}
        />
      </Route>
      <Route path="/" exact>
        <h1>Index</h1>
      </Route>
      <Route path="/policy" exact>
        <h1>Policy</h1>
      </Route>
    </BrowserRouter>
  </div>
);

export default App;
