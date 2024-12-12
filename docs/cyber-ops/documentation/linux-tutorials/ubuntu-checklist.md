---
title: A Basic Ubuntu Security Checklist
description: A basic checklist for securing an Ubuntu server
sidebar_position: 4
---

## Install updates (Covered)

    apt-get update && apt-get upgrade && apt-get dist-upgrade

## Firewall (Covered)

```sh
sudo apt install gufw
```

Run `gufw` and enable the firewall, set incoming to "reject"

## ClamScan

Install ClamAV:

```sh
sudo apt install clamav
```

Then run:

```sh
clamscan
```

## Pam Files

see `https://www.youtube.com/watch?v=JVxkTqLoyGY`

### Install Gedit

```sh
sudo apt-get install gedit
```

```sh
cd ~/etc/pam.d
# Install lib-pam-cracklib
sudo apt install libpam-cracklib
```

### Edit the files

```sh
sudo gedit common-password
```

add `remember=5` to the line that has `pam_unix.so`

add `minlen=8` to the line that has `pam_unix.so` if it's not already in

add `ucredit=-1 lcredit=-1 dcredit=-1 ocredit=-1 ` to the line that has `pam_cracklib.so`
save this file and exit

edit the `login.defs` file

```sh
sudo gedit ~/etc/login.defs
```

modify the line that has `PASS_MAX_DAYS` to `90`

modify the line that has `PASS_MIN_DAYS` to `10`

modify the line that has `PASS_WARN_AGE` to `7`

edit the `common-auth` file

```sh
sudo gedit ~/etc/pam.d/common-auth
```

add the following line to the file
`auth required pam_tally2.so deny=5 unlock_time=1800 onerr=fail`

## Lock root user (Covered)

```sh
passwd -l root
```

## Set up auditing (Covered)

```sh
apt-get install auditd && auditctl -e 1
```

## Check for weird admins

This returns a list of sudoers, if you find someone unexpected, remove them using the settings -> users and groups GUI

```sh
mawk -F: '$1 == "sudo"' /etc/group
```

## Check for empty passwords

This will return a list of users without passwords, if they don't have one, set one in the GUI.

```sh
mawk -F: '$2 == ""' /etc/passwd
```

## Find music (probably in admin's Music folder) (Covered)

"Look for unrelated to work files"
Replace `.mp3, .mp4` with the file extensions you want to search for

```sh
find /home/ -type f \( -name "*.mp3" -o -name "*.mp4" \)
```

## Remove any downloaded "hacking tools" packages (Covered)

```sh
find /home/ -type f \( -name "*.tar.gz" -o -name "*.tgz" -o -name "*.zip" -o -name "*.deb" \)
```

### Install bum for a graphical interface

```sh
sudo apt update
sudo apt install bum
```

run it with `sudo bum` and disable any services you don't need

### Blacklisted programs

- nmap
- zenmap
- apache2
- nginx
- lighttpd
- tcpdump
- netcat-traditional
- nikto
- ophcrack
- wireshark \*\*\* Maybe

## fail2ban

Blocks IPs with too many login attempts

```sh
sudo apt-get install fail2ban
sudo systemctl restart fail2ban.service
```

## Find rootkits, backdoors, etc.

```sh
sudo apt-get install chkrootkit rkhunter
sudo chkrootkit
sudo rkhunter --update
sudo rkhunter --check
```

## Useful command examples

### Finding a group

```sh
    grep -i "groupname" /etc/group
```

### Removing a person from a group

    ```sh
    sudo deluser username groupname
    ```

### Open file explorer in current directory

```sh
cd /path/to/directory
open .
```

OR

```sh
cd /path/to/directory
nautilus .
```

### Delete arbitrary file

```sh
rm /path/to/file
```

### Stay as root(sudo)

```sh
sudo su
```

To leave, type `exit`
