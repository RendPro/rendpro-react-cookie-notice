"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var react_use_1 = require("react-use");
var StyledWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  min-height: 80px;\n  background: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 15px 10%;\n  opacity: 0;\n  transition: opacity 0.5s ease-in-out;\n  pointer-events: none;\n  z-index: 2147483644;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n\n  ", ";\n\n  ", ";\n"], ["\n  box-sizing: border-box;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  min-height: 80px;\n  background: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 15px 10%;\n  opacity: 0;\n  transition: opacity 0.5s ease-in-out;\n  pointer-events: none;\n  z-index: 2147483644;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n\n  ",
    ";\n\n  ", ";\n"])), function (_a) {
    var $backgroundColor = _a.$backgroundColor;
    return $backgroundColor;
}, function (_a) {
    var $isActive = _a.$isActive;
    return $isActive && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      opacity: 1;\n      pointer-events: all;\n    "], ["\n      opacity: 1;\n      pointer-events: all;\n    "])));
}, function (_a) {
    var $customStyles = _a.$customStyles;
    return $customStyles;
});
var StyledCookieInfo = styled_components_1["default"].span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  margin-bottom: 15px;\n  box-sizing: border-box;\n"], ["\n  color: ", ";\n  margin-bottom: 15px;\n  box-sizing: border-box;\n"])), function (_a) {
    var $foregroundColor = _a.$foregroundColor;
    return $foregroundColor;
});
var StyledLinksWrapper = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: -5px;\n  box-sizing: border-box;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: -5px;\n  box-sizing: border-box;\n"])));
var getLinkStyles = function (linksColor) { return ({
    color: linksColor,
    marginRight: "10px",
    marginBottom: "10px",
    boxSizing: "border-box"
}); };
var StyledLink = styled_components_1["default"].a(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n  margin-right: 10px;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n"], ["\n  color: ", ";\n  margin-right: 10px;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n"])), function (_a) {
    var $linksColor = _a.$linksColor;
    return $linksColor;
});
var StyledButton = styled_components_1["default"].button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  right: 10px;\n  top: 15px;\n  background: ", ";\n  color: ", ";\n  border: 0;\n  padding: 10px;\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n  font-weight: 400;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n  box-sizing: border-box;\n\n  @media (max-width: 1024px) {\n    position: static;\n    margin-top: 20px;\n    width: 100%;\n  }\n"], ["\n  position: absolute;\n  right: 10px;\n  top: 15px;\n  background: ", ";\n  color: ", ";\n  border: 0;\n  padding: 10px;\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n  font-weight: 400;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n  box-sizing: border-box;\n\n  @media (max-width: 1024px) {\n    position: static;\n    margin-top: 20px;\n    width: 100%;\n  }\n"])), function (_a) {
    var $buttonBackgroundColor = _a.$buttonBackgroundColor;
    return $buttonBackgroundColor;
}, function (_a) {
    var $buttonColor = _a.$buttonColor;
    return $buttonColor;
});
var CookieNotice = function (_a) {
    var buttonTextProp = _a.buttonText, linkProp = _a.links, textProp = _a.text, backgroundColorProp = _a.backgroundColor, buttonBackgroundColorProp = _a.buttonBackgroundColor, buttonColorProp = _a.buttonColor, customStylesProp = _a.customStyles, expiresProp = _a.expires, foregroundColorProp = _a.foregroundColor, linksColorProp = _a.linksColor, setCookieProp = _a.setCookie;
    var buttonText = buttonTextProp || "Accept";
    var text = textProp ||
        "This website uses cookies to improve and facilitate access to the website and to keep statistical data. Your continued use of\n  using this site constitutes acceptance of this.";
    var links = linkProp || [
        { name: "Privacy policy", link: "#" },
        { name: "How to disable cookie?", link: "#" },
        { name: "Cybersecurity", link: "#" },
    ];
    var backgroundColor = backgroundColorProp || "rgb(26, 26, 24)";
    var buttonBackgroundColor = buttonBackgroundColorProp || "rgb(231, 181, 46)";
    var buttonColor = buttonColorProp || "rgb(26, 26, 24)";
    var customStyles = customStylesProp || styled_components_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject([""], [""])));
    var expires = expiresProp || new Date().getDate() + 7;
    var foregroundColor = foregroundColorProp || "rgb(168, 168, 168)";
    var linksColor = linksColorProp || "rgb(231, 181, 46)";
    var setCookie = setCookieProp === undefined || setCookieProp === null
        ? true
        : setCookieProp;
    var _b = react_use_1.useCookie("cookie-information"), isCookie = _b[0], setIsCookie = _b[1];
    var _c = react_1.useState(false), canBeDisplayed = _c[0], setCanBeDisplayed = _c[1];
    var _d = react_1.useState(false), isHidden = _d[0], setIsHidden = _d[1];
    var handleOnClick = function () {
        console.log(setCookieProp);
        if (setCookie)
            setIsCookie("cookie-information", {
                expires: expires
            });
        else
            setIsHidden(true);
    };
    react_1.useEffect(function () {
        setTimeout(function () { return setCanBeDisplayed(true); }, 1000);
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(StyledWrapper, { "$isActive": setCookie ? !isCookie && canBeDisplayed : !isHidden, "$backgroundColor": backgroundColor, "$customStyles": customStyles },
            react_1["default"].createElement(StyledCookieInfo, { "$foregroundColor": foregroundColor }, text),
            react_1["default"].createElement(StyledLinksWrapper, null, links.map(function (_a) {
                var name = _a.name, link = _a.link, CustomComponent = _a.customComponent;
                if (CustomComponent)
                    return (react_1["default"].createElement(CustomComponent, { to: link, style: getLinkStyles(linksColor) }, name));
                else
                    return (react_1["default"].createElement(StyledLink, { href: link, target: "_blank", rel: "noopener", "$linksColor": linksColor, key: name }, name));
            })),
            react_1["default"].createElement(StyledButton, { onClick: handleOnClick, "$buttonBackgroundColor": buttonBackgroundColor, "$buttonColor": buttonColor }, buttonText))));
};
exports["default"] = CookieNotice;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
