# [RendPro](https://rendpro.com) React Cookie Notice

A simple and customizable cookie notice bar for use in React websites.

## Installation

```shell
  npm install @rendpro/react-cookie-notice
```

or

```shell
  yarn add @rendpro/react-cookie-notice
```

## Using

```js
import CookieNotice from "@rendpro/react-cookie-notice";
```

Then you can use the component anywhere in you React application

```js
<CookieNotice
  text={`This website uses cookies to improve and facilitate access to the website and to keep statistical data. Your continued use of
  using this site constitutes acceptance of this.`}
  buttonText="Accept"
  links={[
    { name: "Privacy Policy", link: "#" },
    { name: "How to disable cookie?", link: "#" },
    { name: "Cybersecurity", link: "#" },
  ]}
/>
```

## Configuration

| Prop                  |                          Type                           | Default value                                                                                                                                                                 | Description                                                                                                                     |
|-----------------------|:-------------------------------------------------------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| backgroundColor       |                         string                          | rgb(26, 26, 24)                                                                                                                                                               | Banner background color                                                                                                         |
| buttonBackgroundColor |                         string                          | rgb(231, 181, 46)                                                                                                                                                             | Button background color                                                                                                         |
| buttonColor           |                         string                          | rgb(26, 26, 24)                                                                                                                                                               | Button color                                                                                                                    |
| buttonText            |                         string                          | Accept                                                                                                                                                                        | Button text                                                                                                                     |
| customStyles          |               FlattenSimpleInterpolation                | undefined                                                                                                                                                                     | Custom styles for banner using css`` function from styled-components                                                            |
| expires               |                         number                          | Date                                                                                                                                                                          | new Date().getDate() + 7                                                                                                        | Cookie expiration date                                                                                                          |
| foregroundColor       |                         string                          | rgb(168, 168, 168)                                                                                                                                                            | Banner text color                                                                                                               |
| links                 | { name: string; link: string; customComponent?: any }[] | [{ name: "Privacy policy", link: "#" },{ name: "How to disable cookie?", link: "#" },{ name: "Cybersecurity", link: "#" }]                                                    | Links in banner. You can use customComponent e.g. to use Link component from Gatsby or React Router Dom instead of regular link |
| linksColor            |                         string                          | rgb(231, 181, 46)                                                                                                                                                             | Banner links color                                                                                                              |
| setCookie             |                         boolean                         | true                                                                                                                                                                          | Whether or not to set a cookie                                                                                                  |
| text                  |                         string                          | This website uses cookies to improve and facilitate access to the website and to keep statistical data. Your continued use of using this site constitutes acceptance of this. | Banner text                                                                                                                     |
 | onCookieSet           |                       () => void                        | undefined                                                                                                                                                                     | Runs when a cookie has been set                                                                                                 |
 | onHide                |                       () => void                        | undefined                                                                                                                                                                     | Runs when a cookie notice has been hidden                                                                                       |
## Example of using all the props

```js
import React from "react";
import { css } from "styled-components";
import CookieNotice from "@rendpro/react-cookie-notice";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => (
  <>
    <BrowserRouter>
      <Route path="/">
        <CookieNotice
          links={[
            {
              name: "Privacy Policy",
              link: "/policy",
              customComponent: Link,
            },
            {
              name: "How to disable cookies?",
              link: "#",
            },
            {
              name: "Cybersecurity",
              link: "#",
            },
          ]}
          buttonText="Accept"
          text={`This website uses cookies to improve and facilitate access to the website and to keep statistical data. Your continued use of
           using this site constitutes acceptance of this.`}
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
          onCookieSet={() => console.log("Cookie has been set")}
          onHide={() => console.log("Cookie has been hidden")}
        />
      </Route>
      <Route path="/" exact>
        <h1>Index</h1>
      </Route>
      <Route path="/policy" exact>
        <h1>Policy</h1>
      </Route>
    </BrowserRouter>
  </>
);

export default App;
```

## License

This package is distributed under the MIT License.
