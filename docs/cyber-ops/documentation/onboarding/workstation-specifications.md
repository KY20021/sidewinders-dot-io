---
title: Workstation Specifications
description: System and Software Requirements for Cyber Sentinel Workstations
sidebar_position: 1
---

## System Requirements

A modern workstation with the following specifications is recommended for Cyber Sentinel cadets:

- **Processor**: Intel Core i5 or AMD Ryzen 5 or better, with 4 cores or more and virtualization support

- **Memory**: 8 GB RAM or more

- **Storage**: 256 GB SSD or better

- **Operating System**: Ubuntu 22.04 LTS or later

- **Network**: Ethernet or Wi-Fi

- **Display**: 1920x1080 resolution or better

## Software Requirements

The following software is required for Cyber Sentinel cadets:

##### Wget

<details><summary>Install Command</summary>
<p>

```bash
sudo apt install wget
```

</p>
</details>

##### Visual Studio Code

<details><summary>Install Command</summary>
<p>

```bash
wget https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64 -O code.deb

sudo dpkg -i code.deb

```

</p>
</details>

##### Docker

<details><summary>Install Command</summary>
<p>

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh ./get-docker.sh
```

</p>
</details>

##### Git

<details><summary>Install Command</summary>
<p>

```bash
sudo apt install git
```

</p>
</details>

##### Python 3

<details><summary>Install Command</summary>
<p>

```bash
sudo apt install python3
```

</p>
</details>

###### NVM (Node Version Manager)

<details><summary>Install Command</summary>
<p>

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

</p>
</details>

#### Zoom

<details><summary>Install Command</summary>
<p>

```bash
wget https://zoom.us/client/latest/zoom_amd64.deb -O zoom.deb

sudo dpkg -i zoom.deb
```

</p>
</details>

###### Google Chrome

<details><summary>Install Command</summary>
<p>

```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -O chrome.deb

sudo dpkg -i chrome.deb
```

</p>
</details>
