# Squire
![](https://wt-4c17b3c888c61e0fdd8b150c4789e9c0-0.sandbox.auth0-extend.com/squire-server/version/v0.0.2/60A561) ![](https://wt-4c17b3c888c61e0fdd8b150c4789e9c0-0.sandbox.auth0-extend.com/squire-server/status/%20%F0%9F%8D%90%E2%9C%A8/82A0BC)

## What is Squire? 
Squire is a mini javascript library to generate SVG project badges both in node and browser, see a [live demo here](https://iagolast.github.io/squire-core/).

## API

### **.generateBadgeSVG(opts)**

This method generates a SVG badge from the following parameters.

- **borderRadius:** = The border radius of the badge, default value is 4.
- **fontSize:** The size in px of the text in the badge, default value is 9.
- **height:** The heigt in pixels of the badge, default value is 20.
- **subject** The text shown in the left part of the badge, default value is ''.
- **subjectColor:** The background color of the left part of the badge, default value is .
- **subjectLengt:** The lenght in pixels of the left part of the badge.
- **subjectTextColor:** The text color of the left part of the badge, defaults to white.
- **value:** The text shown in the rectangle shown in the right part of the badge.
- **valueColor:** The color of the text shown in the right part of the badge.
- **valueLength:** The lenght in pixels of the rectangle shown in the right part of the badge.
- **valueTextColor:** The color of the text shown in the right part of the badge, defaults to white.
- **width:** Total with of badge. This will be applied to the SVG element.


### **.generateBadge(subject, value, color)**

This method gives an easy way to generate a badge.

- **subject** The text shown in the left part of the badge.
- **value:** The text shown in the rectangle shown in the right part of the badge.
- **color:** The color of the text shown in the right part of the badge.


## Creating a server

Use [https://webtask.io](https://webtask.io) and paste the code under the `server/webtask.js` to have your own badge server.