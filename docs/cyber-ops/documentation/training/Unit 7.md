---
title: Unit 7 - Windows Security Tools
sidebar_position: 6
---
----------
<h2 style={{textAlign: 'center'}} >Learning Objectives</h2>

- Understand where basic Windows operating system security tools are located
    - Control Panel and Windows Settings
    - Administrative Tools
    - Security and Maintenance
    - Windows Defender Security Center
    - Windows Defender Firewall
    - Windows Update
- Learn how to manage Windows accounts and how accounts can affect security
--------
<h2 style={{textAlign: 'center'}} >Section 1</h2>
<h3 style={{textAlign: 'center'}} >Basic Security Policies and Tools</h3>

---------
<h2 style={{textAlign: 'center'}} >Notes on Windows Security Tools</h2>

- Windows has several versions (Professional, Home, etc.)
- Each version has sets of security tools with different looks, capabilities, and ways to access them. 
- This training unit has several options for accessing almost all the security tools to perform specific tasks. 
- In any case, the **search** capability in the Windows versions will assist users and administrators in finding the appropriate tool for a task.
-------
<h2 style={{textAlign: 'center'}}
>Security and Administration Tools</h2>

- Windows has several components with groups of security and administration tools. 
- You must be an **administrator** to use most
of the tools
- Some of the components are:
    - Windows Settings 
    - Control Panel 
    - Microsoft Management Console (MMC) (for advanced settings)
    <!--hi-->

![alt text](<mmc.png>)
![alt text](<control panel.png>)

--------
<h2 style={{textAlign: 'center'}}>Windows Search Bar</h2>

- Windows 10 has a search bar that can bring up anything you need on your 
system.
- You can use the search bar to find any of these upcoming areas if you don’t know the direct path.
![alt text](<search bar.png>)

-------
<h2 style={{textAlign: 'center'}}>Windows Settings</h2>

- Where many of the basic system changes and configurations can be set within a Windows 10 operating system is a little different depending on the version of the operating system.
![alt text](<settings.png>)

--------
<h2 style={{textAlign: 'center'}}>Control Panel and Search</h2>

- Control Panel resides in Windows 10 and is more robust than Settings. If you do not see it on your Start menu, you may search for it. Search may be used to find most configuration and security tools within Windows.
![alt text](<8.png>)

--------
<h2 style={{textAlign: 'center'}}>Basic Local Security Policies</h2>

- Control Security settings on user computers within a network
![alt text](<9.png>)

--------
<h2 style={{textAlign: 'center'}}>Windows Defender Security Center</h2>

Window Defender is an important defensive tool in Windows. To open Windows Defender: 
- Click Start → Settings→ Windows Settings → Update and Security → Windows Security
- **OR** Click Start → Control Panel→ System and Security → Security and Maintenance→ Security 
- Notifies you if Windows identifies problems with or updates for:
    - Windows Updates
    - Internet security settings
    - Network firewall
    - Spyware and related protection
    - User Account Control
    - Virus protections
    - Windows Backups
---------
<h2 style={{textAlign: 'center'}}>Firewalls</h2>

- Reject or allow data packets through to users based on custom settings
- Essential to security and should always be turned ‘on’ and use “Recommended Settings” at a minimum
- Click Start → Windows Settings → Update and Security → Windows Security→ Firewall & network protection
- **OR** Right Click Start → Control Panel→ Windows (Defender) Firewall
- **OR** Search→ Firewall
![alt text](<firewall.png>)

-------
<h2 style={{textAlign: 'center'}}>Enabling Windows Firewall Exceptions</h2>

- For each network type, you can customize whether you want the programs allowed through 
- It’s much safer to allow only certain programs through your firewall than to open an entire port to traffic
    - Ports are numbers that identify one side of a connection between two computers
----------
<h2 style={{textAlign: 'center'}}>Common Firewall Exceptions</h2>

- **Core Networking**
    - Regular Microsoft Windows services that retrieve data from the Internet 
    - If you don’t enable this exception across all three types of networks, some Microsoft services and programs will not run properly
- **File and Printer Sharing** 
    - Allows you to share the contents of selected folders and locally attached printers with other computers
- **Remote Assistance**
    - Allows a user to temporarily remotely control another Windows computer over a network or the Internet to resolve issues
- **Remote Desktop** 
    - Allows users to access their user accounts and files remotely
- **UPnP Framework** (Universal Plug-and-Play)
    - Allows devices to connect to and automatically establish working configurations with other devices on the same network
------------
<h2 style={{textAlign: 'center'}}>Windows Update</h2>

- Prevent or fix known problems in Windows software or improve user experience
- Should be installed regularly
    - ##### To avoid missing updates, allow Windows Update to check for them daily and install them automatically
- Windows Settings → Updates and Security→ Windows Security→ Windows Update
- **OR** Search → Windows Update
---------
<h2 style={{textAlign: 'center'}} >Section 2</h2>
<h3 style={{textAlign: 'center'}} >Account Management</h3>

---------
![alt text](<16.png>)

------------
<h2 style={{textAlign: 'center'}} >Microsoft Management Console (MMC)</h2>

- The Windows component that allows 
administrators to make group and detailed security settings is the Microsoft Management Console or MMC. MMC can be found using Search. It **cannot** be accessed through Windows Settings or Control Panel.
- MMC allows settings to be made to user and group permissions. 
- **Snap-ins** are the tools the MMC accesses to making settings. Snap-ins must be opened in MMC. They do not automatically appear when MMC is executed.
- To access MMC: Search → “mmc”→ Click “yes" to allow changes to computer
- To access Snap-ins in MMC: Click File → Add/Remove Snap-ins
![alt text](<17.png>)

----------
<h2 style={{textAlign: 'center'}} >Local Users and Group Console</h2>

- Windows categorizes accounts as user or administrator accounts so that it can automatically apply the relevant permissions and rights
- Define a user’s level of access by categorizing his or her account as a user or administrator

**To set up the Local Users and Groups Console:** 
Start Menu → Search “mmc” → Click “yes” to allow changes to computer → Click File → Add/Remove Snap-ins → Select “Local Users and Groups → Select “Add” → Select “Finish” → Click “OK”

----------
<h2 style={{textAlign: 'center'}} >Best Practices: Disable the Built- in Guest Account</h2>

- Disable this account so people cannot anonymously access a computer
- While someone on a Guest account will not have direct access to other users’ information, he or she can still significantly disrupt the resources of the local computer
-----------
<h2 style={{textAlign: 'center'}} >Best Practices: Set Passwords for all Accounts</h2>

- Make sure all accounts are **password protected**
- Users → Right click name → Set password
--------
<h2 style={{textAlign: 'center'}}>End of Unit 7</h2>