---
title: How to change Ubuntu 21.04 workspace keybindings (So it won't conflict with VSCode CopyLineUp/Down keybindings)
date: "2021-06-10"
description: ""
---

To remove `Control + Alt + Up/Down` as switch workspace up/down but retain `Super + Page Up/Down`
```bash
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-up "['<Control>Page_Up']"
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-down "['<Control>Page_Down']"
```

To remove `Control + Shift + Alt + Up/Down` as move to workspace up/down but retain `Super + Shift + Page Up/Down`
```bash
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-up "['<Super><Shift>Page_Up']"
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-down "['<Super><Shift>Page_Down']"
```

To show the default Ubuntu keybindings
```bash
gsettings list-recursively org.gnome.desktop.wm.keybindings
```