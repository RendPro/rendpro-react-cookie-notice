# [RendPro](https://rendpro.com) React Cookie Notice

A simple and customizable cookie notice bar for use in React websites.

## Installation

```shell
  bun add @rendpro/react-cookie-notice
```
or
```shell
  npm install @rendpro/react-cookie-notice
```
or
```shell
  yarn add @rendpro/react-cookie-notice
```

## How to use it

First, import the component and styles in your project.
```tsx
import CookieNotice from "@rendpro/react-cookie-notice";
import "@rendpro/react-cookie-notice/styles";
```

Then you can use the component anywhere in you React application

```tsx
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

| Prop                  |                                                  Type                                                   | Default value                                                                                                                                                                 | Description                                                                                                                     |
|-----------------------|:-------------------------------------------------------------------------------------------------------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| backgroundColor       |                                                 string                                                  | rgb(26, 26, 24)                                                                                                                                                               | Banner background color                                                                                                         |
| buttonBackgroundColor |                                                 string                                                  | rgb(231, 181, 46)                                                                                                                                                             | Button background color                                                                                                         |
| buttonColor           |                                                 string                                                  | rgb(26, 26, 24)                                                                                                                                                               | Button color                                                                                                                    |
| buttonText            |                                                 string                                                  | Accept                                                                                                                                                                        | Button text                                                                                                                     |
| className             |                                                 string                                                  | undefined                                                                                                                                                                     | ClassName for the banner. You can use it to override default styles                                                             |
| expires               |                                                 number                                                  | Date                                                                                                                                                                          | new Date().getDate() + 7                                                                                                        | Cookie expiration date                                                                                                          |
| foregroundColor       |                                                 string                                                  | rgb(168, 168, 168)                                                                                                                                                            | Banner text color                                                                                                               |
| links                 | { name: string; link: string; render?: React.FC<{ name: string; link: string; className: string; }> }[] | [{ name: "Privacy policy", link: "#" },{ name: "How to disable cookie?", link: "#" },{ name: "Cybersecurity", link: "#" }]                                                    | Links in banner. You can use render prop to render custom component instead of a `<a>` tag.                                     |
| linksColor            |                                                 string                                                  | rgb(231, 181, 46)                                                                                                                                                             | Banner links color                                                                                                              |
| setCookie             |                                                 boolean                                                 | true                                                                                                                                                                          | Whether or not to set a cookie                                                                                                  |
| text                  |                                                 string                                                  | This website uses cookies to improve and facilitate access to the website and to keep statistical data. Your continued use of using this site constitutes acceptance of this. | Banner text                                                                                                                     |
 | onCookieSet           |                                               () => void                                                | undefined                                                                                                                                                                     | Runs when a cookie has been set                                                                                                 |
 | onHide                |                                               () => void                                                | undefined                                                                                                                                                                     | Runs when a cookie notice has been hidden                                                                                       |

## Example of using all the props

```tsx
import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import CookieNotice from "@rendpro/react-cookie-notice";
import "@rendpro/react-cookie-notice/styles";
import styles from './App.module.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <CookieNotice
            links={[
              {
                name: "Privacy Policy",
                link: "/policy",
                render: (props) => (
                  <Link to={props.link} className={props.className}>
                    {props.name}
                  </Link>
                ),
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
            buttonText="I Accept"
            text="This site uses cookies to improve and facilitate access to the service and for statistical data. Continuing to use this site implies acceptance of this state of affairs."
            backgroundColor="rgb(255, 255, 255)"
            foregroundColor="rgb(17, 27, 39)"
            buttonBackgroundColor="rgb(89, 180, 208)"
            buttonColor="rgb(255, 255, 255)"
            linksColor="rgb(89, 180, 208)"
            onCookieSet={() => console.log("cookie set")}
            onHide={() => console.log("is hide")}
            className={styles.wrapper}
          />
        }
      />
      <Route path="/" element={<h1>Index</h1>} />
      <Route path="/policy" element={<h1>Policy</h1>} />
    </Routes>
  </BrowserRouter>
);

export default App;
```

## License
This package is distributed under the MIT License.
