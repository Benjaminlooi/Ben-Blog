---
title: Google fonts not loaded in generated static Nuxt app
date: "2021-05-16"
description: ""
---

So, I've found out that my static Nuxt websites deployed on Netlify are actually not using the fonts that I've specified. But the fonts are working during development.

```css
/* assets/css/main.scss */
@import url("https://fonts.googleapis.com/css2?family=Archivo:wght@400;800&display=swap");

/* ... */
```

```js
// nuxt.config.js
// ...
css: [
    // https://eduardoboucas.github.io/include-media/
    // 'include-media/dist/_include-media.scss',
    // Global custom scss
    '@/assets/css/main.scss',
  ],
// ...
```

Moving the @import css into a Top level vue component doesn't solve the issue as well.

```vue
// pages/index.vue
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap");

/* ... */
</style>
```

#### Hypothesis 1

Tailwindcss is purging the @import css

##### Solution?

So I tried disabling TailwindCss purging

```js
// tailwind.config.js
module.exports = {
  purge: {
    enabled: false,
  },
  // ...
}
```

But it didn't work, the font is still not usable on the generated static site.

#### Final Solution

include the font as a stylesheet link in the head html instead of using @import css.

```js
// nuxt.config.js
export default {
  // ...
  head: {
    // ...
    link: [
      // ...
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap",
      },
    ],
  },
  // ...
}
```
