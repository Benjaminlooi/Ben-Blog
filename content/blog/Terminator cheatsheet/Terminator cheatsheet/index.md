---
title: Terminator cheatsheet
date: "2021-06-10"
description: ""
---

## Installing Terminator
### Installing on Ubuntu
```
sudo apt-get install terminator
```

#### Setting Terminator as default terminal
```
gsettings set org.gnome.desktop.default-applications.terminal exec /usr/bin/terminator
gsettings set org.gnome.desktop.default-applications.terminal exec-arg "-x"
```