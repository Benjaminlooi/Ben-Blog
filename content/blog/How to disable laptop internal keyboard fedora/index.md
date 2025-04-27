---
title: How to disable laptop internal keyboard on Fedora 41
date: "2025-04-27"
description: "My laptop keyboard is really bad and over the years, the heat has made the keys harder to type on and some key clips has also broke. So I thought of slapping my PC mechanical keyboard on my laptop but whenever I tried laying the keyboard on top of my laptop, my poor laptop keyboard kept jumping in—typing random letters and messing up my flow. I have tested this on Fedora 41 and 42 running on wayland.
"
---

My laptop keyboard is really bad and over the years, the heat has made the keys harder to type on and some key clips has also broke. So I thought of slapping my PC mechanical keyboard on my laptop but whenever I tried laying the keyboard on top of my laptop, my poor laptop keyboard kept jumping in—typing random letters and messing up my flow. I have tested this on Fedora 41 and 42 running on wayland.

## What You’ll Need

- **Terminal access** with `sudo` privileges  
- The commands: `libinput`, `udevadm`, and a text editor (e.g. `nano` or `vim`)  

## Step 1: Identify Your Built-In Keyboard

Open a terminal and type:

```bash
libinput list-devices
```

Scroll until you see something like:

```
Device:           AT Translated Set 2 keyboard
Kernel:           /dev/input/event3
```

That “AT Translated Set 2 keyboard” is your laptop’s built-in board. Jot down the exact name and the `eventX` number—you’ll need both in the next steps.

## Step 2: Double-Check with `udevadm`

Just to be sure, confirm its properties:

```bash
udevadm info /dev/input/event3
```

You should see lines like:

```
E: NAME="AT Translated Set 2 keyboard"
E: ID_INPUT_KEYBOARD=1
```

If you don’t, swap in the right `eventX` and try again.

## Step 3: Write the udev Rule

Create a new rule file:

```bash
sudo nano /etc/udev/rules.d/99-disable-internal-keyboard.rules
```

Paste in this one-liner (adjust the name exactly if yours differs):

```udev
ACTION=="add|change", ATTRS{name}=="AT Translated Set 2 keyboard", ENV{ID_INPUT_KEYBOARD}=="1", ENV{LIBINPUT_IGNORE_DEVICE}="1"
```

– This tells libinput to completely ignore that device

## Step 4: Reload Rules & Test

Apply without rebooting:

```bash
sudo udevadm control --reload-rules
sudo udevadm trigger
```

If it doesn't work, try rebooting

## Re-enable Your Laptop Keyboard

When you want it back, simply:

```bash
sudo rm /etc/udev/rules.d/99-disable-internal-keyboard.rules
sudo udevadm control --reload-rules
sudo udevadm trigger
```

## Final Thoughts

Now I can sit on my bed, slap my beloved external keyboard right on top, and type away.
