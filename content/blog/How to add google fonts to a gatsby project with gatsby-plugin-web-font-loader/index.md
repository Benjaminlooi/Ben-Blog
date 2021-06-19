---
title: How to add google fonts to a gatsby project with gatsby-plugin-web-font-loader
date: "2021-06-19"
description: ""
---

# What is gatsby-plugin-web-font-loader

gatsby-plugin-web-font-loader is a Gatsby plugin to asynchronously load webfonts using Web Font Loader. Can load fonts from Google Fonts, Typekit, Fonts.com, and Fontdeck, as well as self-hosted web fonts. In this article, we will explain only for Google Fonts.

## Installation

With npm:

`npm install --save gatsby-plugin-web-font-loader`

Or with Yarn:

`yarn add gatsby-plugin-web-font-loader`

## Usage

In your gatsby-config.js file, load in the plugin along with which web fonts to load. For example:

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Droid Sans", "Droid Serif"],
        },
      },
    },
  ],
}
```

If you would like to explicitly request the variation you want:

```javascript
google: {
  families: ["Open Sans Condensed:300,700"]
}
```

## Additional Information

- [Gatsby docs](https://www.gatsbyjs.com/docs/how-to/styling/using-web-fonts/#self-host-google-fonts-with-fontsource)
- [gatsby-plugin-web-font-loader docs](https://www.gatsbyjs.com/plugins/gatsby-plugin-web-font-loader/?=font)
- [Web font loader docs](https://github.com/typekit/webfontloader)
