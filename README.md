# Squire
![](/examples/build-status.svg)

## What is Squire? 
Squire is a set of tools to generate SVG project badges, see a [live demo here](https://iagolast.github.io/squire-core/).

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
