---
title: Hello World test
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
---

This is my first post on my new fake blog! How exciting!

I'm sure I'll write a lot more interesting things in the future.

Oh, and here's a great quote from this Wikipedia on
[salted duck eggs](http://en.wikipedia.org/wiki/Salted_duck_egg).

> A salted duck egg is a Chinese preserved food product made by soaking duck
> eggs in brine, or packing each egg in damp, salted charcoal. In Asian
> supermarkets, these eggs are sometimes sold covered in a thick layer of salted
> charcoal paste. The eggs may also be sold with the salted paste removed,
> wrapped in plastic, and vacuum packed. From the salt curing process, the
> salted duck eggs have a briny aroma, a gelatin-like egg white and a
> firm-textured, round yolk that is bright orange-red in color.

![Chinese Salty Egg](./salty_egg.jpg)

```css
@import url(https://fonts.googleapis.com/css?family=Questrial);
@import url(https://fonts.googleapis.com/css?family=Arvo);

@font-face {
  src: url(https://lea.verou.me/logo.otf);
  font-family: "LeaVerou";
}

/*
 Shared styles
 */

section h1,
#features li strong,
header h2,
footer p {
  font: 100% Rockwell, Arvo, serif;
}

/*
 Styles
 */

* {
  margin: 0;
  padding: 0;
}

body {
  font: 100%/1.5 Questrial, sans-serif;
  tab-size: 4;
  hyphens: auto;
}

a {
  color: inherit;
}

section h1 {
  font-size: 250%;
}

section section h1 {
  font-size: 150%;
}

section h1 code {
  font-style: normal;
}

section h1 > a,
section h2[id] > a {
  text-decoration: none;
}

section h1 > a:before,
section h2[id] > a:before {
  content: "§";
  position: absolute;
  padding: 0 0.2em;
  margin-left: -1em;
  border-radius: 0.2em;
  color: silver;
  text-shadow: 0 1px white;
}

section h1 > a:hover:before,
section h2[id] > a:hover:before {
  color: black;
  background: #f1ad26;
}

p {
  margin: 1em 0;
}

section h1,
h2,
h3 {
  margin: 1em 0 0.3em;
}

h2,
h3 {
  font-weight: normal;
}

dt {
  margin: 1em 0 0 0;
  font-size: 130%;
}

dt:after {
  content: ":";
}

dd {
  margin-left: 2em;
}

strong {
  font-weight: bold;
}

code,
pre {
  font-family: Consolas, Monaco, "Andale Mono", "Lucida Console", monospace;
  hyphens: none;
}

pre {
  max-height: 30em;
  overflow: auto;
}

pre > code.highlight {
  outline: 0.4em solid red;
  outline-offset: 0.4em;
}

header,
body > section {
  display: block;
  max-width: 900px;
  margin: auto;
}

header,
footer {
  position: relative;
  padding: 30px -webkit-calc(50% - 450px); /* Workaround for bug */
  padding: 30px calc(50% - 450px);
  color: white;
  text-shadow: 0 -1px 2px black;
  background: url(img/spectrum.png) fixed;
}
```
