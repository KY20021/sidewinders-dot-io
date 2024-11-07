---
title: A Basic Ubuntu Security Checklist
description: A basic checklist for securing an Ubuntu server
sidebar_position: 4
---

## Install updates (Covered)

    apt-get update && apt-get upgrade && apt-get dist-upgrade

## Automatic updates in GUI (Not covered)

## Firewall (Covered)

    apt-get install ufw && ufw enable

## SSH settings

Turn off root in sshd_config (Covered)

```sh
    if grep -qF 'PermitRootLogin' /etc/ssh/sshd_config; then sed -i 's/^.*PermitRootLogin.*$/PermitRootLogin no/' /etc/ssh/sshd_config; else echo 'PermitRootLogin no' >> /etc/ssh/sshd_config; fi
    PermitRootLogin no
    ChallengeResponseAuthentication no
    PasswordAuthentication no
    UsePAM no
    PermitEmptyPasswords no
```

Possibly add port 22 to firewall? (i.e. only accept local connections)

```sh
sudo ufw allow from 202.54.1.5/29 to any port 22
```

No keepalive or unattended sessions

```sh
ClientAliveInterval 300
ClientAliveCountMax 0
```

Disable obsolete rsh settings

```sh
IgnoreRhosts yes
```

Check sshd_config file for correctness before restart:

```sh
sudo sshd -t
```

## Lock root user (Covered)

```sh
passwd -l root
```

## Change login chances (Covered)

```sh
sed -i 's/PASS_MAX_DAYS.*$/PASS_MAX_DAYS 90/;s/PASS_MIN_DAYS.*$/PASS_MIN_DAYS 10/;s/PASS_WARN_AGE.*$/PASS_WARN_AGE 7/' /etc/login.defs
```

## Update PAM settings (Covered)

```sh
echo 'auth required pam_tally2.so deny=5 onerr=fail unlock_time=1800' >> /etc/pam.d/common-auth
apt-get install libpam-cracklib
sed -i 's/\(pam_unix\.so.*\)$/\1 remember=5 minlen=8/' /etc/pam.d/common-password
sed -i 's/\(pam_cracklib\.so.*\)$/\1 ucredit=-1 lcredit=-1 dcredit=-1 ocredit=-1/' /etc/pam.d/common-password
```

## Set up auditing (Covered)

```sh
apt-get install auditd && auditctl -e 1
```

## Check for weird admins

```sh
mawk -F: '$1 == "sudo"' /etc/group
```

## Check for weird users

```sh
mawk -F: '$3 > 999 && $3 < 65534 {print $1}' /etc/passwd
```

## Check for empty passwords

```sh
mawk -F: '$2 == ""' /etc/passwd
```

## Check for non-root UID 0 users

```sh
mawk -F: '$3 == 0 && $1 != "root"' /etc/passwd
```

## Remove anything samba-related

```sh
apt-get remove .*samba.* .*smb.*
```

## Find music (probably in admin's Music folder) (Covered)

```sh
find /home/ -type f \( -name "*.mp3" -o -name "*.mp4" \)
```

## Remove any downloaded "hacking tools" packages (Covered)

```sh
find /home/ -type f \( -name "*.tar.gz" -o -name "*.tgz" -o -name "*.zip" -o -name "*.deb" \)
```

If it doesn't ask for apache2, nginx, etc., you can usually remove it

## Check services

### Install bum for a graphical interface

```sh
apt-get install bum
```

## Set home directory perm's

```sh
for i in $(mawk -F: '$3 > 999 && $3 < 65534 {print $1}' /etc/passwd); do [ -d /home/${i} ] && chmod -R 750 /home/${i}; done
```

# Blacklisted programs

- nmap
- zenmap
- apache2
- nginx
- lighttpd
- wireshark
- tcpdump
- netcat-traditional
- nikto
- ophcrack

## Prevent IP spoofing in /etc/host.conf

```sh
grep -qF 'multi on' && sed 's/multi/nospoof/' || echo 'nospoof on' >> /etc/host.conf
```

## Find world-writable files

```sh
find /dir -xdev -type d \( -perm -0002 -a ! -perm -1000 \) -print
```

## Find no-user files

```sh
find /dir -xdev \( -nouser -o -nogroup \) -print
```

## Disable USBs

```sh
echo 'install usb-storage /bin/true' >> /etc/modprobe.d/disable-usb-storage.conf
```

## Disable Firewire/Thunderbolt

```sh
echo "blacklist firewire-core" >> /etc/modprobe.d/firewire.conf
echo "blacklist thunderbolt" >> /etc/modprobe.d/thunderbolt.conf
```

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
