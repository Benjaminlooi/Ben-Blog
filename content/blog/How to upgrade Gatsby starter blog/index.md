---
title: How to upgrade Gatsby starter blog (or any other gatsby starter template)
date: "2021-04-26"
description: "This article describes how to upgrade Gatsby starter blog (or any other gatsby starter template)"
---

Use good git hygiene and create a new branch to merge the upstream so you can test for breaking changes:
`git checkout -b upstarter`

Add the remote to upstream:
`git remote add upstream git@github.com:gatsbyjs/gatsby-starter-blog.git`

Fetch the upstream:
`git fetch upstream`

Then when you merge it use the --allow-unrelated-histories argument:
`git merge upstream/master --allow-unrelated-histories`

You'll most likely have conflicts to resolve, but after that you can merge it back into master:

```bash
git checkout master
git merge upstarter
```
