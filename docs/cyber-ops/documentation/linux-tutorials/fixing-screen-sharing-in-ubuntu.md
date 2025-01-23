---
title: Fixing Screen Sharing in Ubuntu
description: How to fix screen sharing in Ubuntu
sidebar_position: 3
---

## Fixing Screen Sharing in Ubuntu

Screen sharing in zoom and google meet is commonly broken by default in Ubuntu systems that use Wayland as the default display server. This is because Wayland does not support screen sharing by default. To fix this issue, you will need to switch to the X11 display server.

### Disabling Wayland

To disable Wayland and switch to the X11 display server, follow the steps below:

1. Confirm you are in fact using Wayland by running the following command in the terminal:

```bash
echo $XDG_SESSION_TYPE
```

If the output is `wayland`, then you are using Wayland.

2. Open the file `/etc/gdm3/custom.conf` in a text editor with root privileges. You can use the following command to open the file in the default text editor:

```bash
sudo nano /etc/gdm3/custom.conf
```

3. Find the line that starts with `#WaylandEnable=false` and remove the `#` from the beginning of the line to uncomment it, then save the file and exit the text editor by pressing `Ctrl + X`, then `Y`, then `Enter`.

If you do not see the line `#WaylandEnable=false`, then add the line to the file at the end of the file.

4. Reboot your system by running the following command in the terminal:

```bash
sudo reboot
```

5. Confirm your changes

After rebooting, run the following command in the terminal:

```bash
echo $XDG_SESSION_TYPE
```

If the output is `x11`, then you have successfully switched to the X11 display server.
