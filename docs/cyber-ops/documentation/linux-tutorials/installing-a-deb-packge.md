---
title: Installing a .deb package
description: How to install a .deb package on a Linux system
sidebar_position: 2
---

## Installing any .deb package

1. Download the .deb package file.
2. Open a terminal window.
3. Use the `cd` command to navigate to the directory where the .deb file is located, usually the `Downloads` directory.
4. Install the .deb package using the following command:

```bash
sudo dpkg -i package_file.deb
```

### Example: Installing a .deb package

```bash
cd ~/Downloads
sudo dpkg -i package_file.deb
```

### Example: Installing Zoom

```bash
sudo dpkg -i zoom_amd64.deb
```

### Example: Installing Google Chrome

```bash
sudo dpkg -i google-chrome-stable_current_amd64.deb
```
