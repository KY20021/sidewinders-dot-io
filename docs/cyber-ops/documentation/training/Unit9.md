---
title: Unit 9
sidebar_position: 8 
---
### Introduction to Linux and Ubuntu
---
# Learning Objectives
* Understand the basics of Linux, including the nature, architecture, and differences/

    * similarities with Windows

    * Linux overview
 
    * Common Linux terms and definitions

    * Linux system architecture

    * Differences and similarities with Windows

* Gain an introduction to the Linux command line environment

    * The “sudo” command

# UNIT 9 – SECTION 1
### What is Linux?

-------
# A Family of Operating Systems

* Linux refers to a family of operating systems modeled off of Unix

* Can perform many of the same functions as Windows or OS X

* Built in a collaborative, open-source environment

    * Anyone may use, modify, or distribute the Linux kernel

    * Anyone can develop software to run on the Linux kernel

    * Many programmers collaborate to develop or improve Linux programs

    * Many Linux operating systems and add-on programs are free

![alt text](<linux.png>)

-------

# Linux Kernel

* A kernel is the core component of an OS

    * Windows operating systems have kernels, but since they are not open-source or packaged     separately for programmers to build off, they are less-often discussed

    * Manages system resources (Memory, Processes, Input and Output Devices)

    * When a user does something in the shell (the OS’s user interface and applications), the kernel translates the command and prioritizes it against other requests for resources, so that it can be understood and executed by the CPU

    ![alt text](<kernel.png>)


-------
# Different Linux Operating Systems

* There are many different flavors (OSes) built off the Linux kernel
    * Ubuntu: Most popular flavor. It is free and is the most user-friendly.
    * Mint: A popular variation of Linux.
    * Red Hat: Designed by a company that develops specialized flavors for government and big business.
    * Fedora: An open-source, free version of Red Hat. Used frequently as a test bed for Red Hat programs.
* These flavors are similar at the basic level but can have very different interfaces and specialized commands.


 ![alt text](<operating.png>)

-------
# Differences Compared To Windows

* Often free or less expensive

* Desktop environment and GUI elements change

* Some tasks can only be run in the command line

* Less malware on Linux

* Certain hardware cannot work with Linux

![alt text](<window.png>)

-------
# Similarities to Windows

* Can be servers and workstations
    * Linux servers and workstations are more similar than Windows ones. Linux servers come pre-installed with server applications

* Can complete similar tasks
    * There are Linux programs that function like to Microsoft Office (LibreOffice), Outlook (Thunderbird), etc.
* Are stable and have significant support
* Subject to very similar vulnerabilities

    * Linux systems are targeted less frequently by malware, but still have many of the same vulnerabilities and patches (firewalls, password policy, etc.)

![alt text](<mozilla.png>)

-------
# Unit 9 – Section 2
### Ubuntu Terminology and Concepts
-------
# The Root Account

* Account types: User and Root
* Root – The Linux Administrator account
    * Like the built-in Administrator in Windows, Linux comes with a built-in 
    root account

    * A system can have multiple root accounts

    * Users can switch whether their actions are carried out as a user or root

    * When someone enacts root permissions, he or she can access all the
      files and run all commands on a system, as well as set policies for other users

* Root actions require a password in both GUI and command line

* Authentication vs. Authorization

    * Root users are authorized to do many different tasks, but they must first authenticate their identity by entering their password

![alt text](<root.png>)


-------
# Ubuntu File System
* Different from the Windows file system

    * Does not specify on which drive a folder is stored and uses forward slashes (/) to identify root directories

* Example:

    * Windows: C:\Documents\hello.txt

    * Linux: /home/CyberPatriot/hello.txt

* Important folders:

    * /home: stores each user’s documents, media files, etc. Users can only access their own 
    folders, unless they have enacted root permissions.

    * /boot: contains startup files and kernel files. Should not be modified unless you are an expert user.

* The file system can be accessed by clicking the file cabinet on your Ubuntu menu bar

![alt text](<arrow.png>)


-------
# Adding and Removing Software

* Linux software is bundled into packages

* Packages are managed by package managers

    * In Ubuntu, the package manager is called “Ubuntu Software Center.”

    * It looks and functions a lot like Mac’s App Store

    * Many programs are free

* To access Ubuntu Software Center, click the shopping bag on your Ubuntu menu bar

* Users must enact root permissions to install, uninstall, or modify software

![alt text](<blue.png>)

-------
# Unit 9 – Section 3
### Introduction to Ubuntu Command Line
-------
# Linux Filesystem

* Linux files are stored in directories, which are the same as folders in windows

* Linux filesystem tree

    * Base or trunk of the tree is the root directory (/)

    * Branches of the tree are directories

    * Leaves of the tree are files

* Linux commands, files, and directory names are case sensitive

![alt text](<map.png>)

-------
# Command Line Pros and Cons

###### Pros
* Provides the user more control

    * Unlike the GUI, which pre-programs certain tasks, command line allows you to send more detailed and customized commands

* Only option for some tasks in Ubuntu

* Saves clicking time because it just requires a keyboard

* Uses less of the computer’s processing power than the GUI (no animations or graphical processing)

* Can be made easier with scripting

    * Scripts are sequenced lists of commands that allow users to send multiple 
    commands at once

    * Can be used for routine tasks like backing up files, monitoring 
 system, and quickly gathering information about memory and processes

![alt text](<code.png>)

###### Cons
* Not as user-friendly as GUI

    * Requires memorizing commands or using a reference

* Harder to multitask

    * Having multiple command line windows open at once can be confusing, since they look nearly identical

-------
# Accessing The Command Line

* Terminal is the tool used to access the Ubuntu Command Line

    * Click the Ubuntu button 

    * Type terminal

    * Press Enter or click the icon labeled Terminal

            OR

    * Press Ctrl-Alt-T

![alt text](<terminal.png>)

-------
# Using Terminal

* When typing commands in Terminal, it is very important to pay attention to capitalization and spaces

* Hitting Enter will execute your command and hitting Ctrl+D will close any commands you have running or exit the Terminal

* There are numerous Ubuntu command databases and command line tutorials online. Here are a few sites:

    * https://help.ubuntu.com/community/UsingTheTerminal

    * http://ryanstutorials.net/linuxtutorial/ 
    
    * http://manpages.ubuntu.com/ 

    * http://ubuntu-manual.org/ 


-------
# Command Syntax

* Command: tells the computer what you want it to do

    * All other components of the syntax depend on what the command is

    * The “cat” command creates, displays, or copies files

* Option: customizes the output of the command

    * “-n“ told the computer to add a number to each line of text in the file you created

    * The effect an option has varies by command

    * Not required for all commands

* Operator: directs the output of the command

    * Not required for all commands

* File Name/Location: Tells the OS to which file you want the command and options to happen

* Like English sentences, Command Syntax can get very complex

-------
# Basic Navigation Commands
* pwd

    * “Present Working Directory”

    * Prints out your current working directory

* ls [FILE]…

    * “List Segments”

    * Optional file/directory paths as an argument

* cd [dir]

    * “Change Directory”

    * Optional directory path as an argument

* Absolute paths

    * Starts from the root directory (/)
    
    * cd /home/cyberpatriot/Music

    * Relative paths

    * Start from the current directory (.)

    * cd ./Music or just cd Music

    * One dot (.) indicates the current directory

    * Two dots (..) indicates the parent directory

-------
# Command Manuals and Usage

* man [section] page

    * “Manual”
    
    * Displays the manual for a command

* Type man man and press Enter

    * Displays the manual for the command “man”

    * Use the arrow keys or PgUp/PgDn to scroll up and down

* Type q

    * Exits man

![alt text](<patriot.png>)

-------
# Command Manuals and Usage

* Many commands have a --help or –h option

* Type ls --help and press Enter

    * Displays help for the command ls

![alt text](<patriot.png>)

-------
# File Contents and Output Redirection

* cat [FILE]...

    * “Concatenate” 

    * Concatenate files and prints to standard output

    * Commonly used to print the contents of a single file

* file [FILE]...

    * determines the type of a file

* echo [STRING]...

    * displays a line of text in the command line

* [command] > [FILE]

    * The standard output of any command can be redirected to a file with a “greater than” symbol

    * This will create a new file or overwrite an existing file

-------
# Sample Command

* Note: If the Linux Operating System does not have a CyberPatriot Directory, use another directory

![alt text](<cat.png>)

--------

# Sample Command (cont.)

   <ol>
       <li>Close Terminal and open the Home Folder by clicking the orange folder on the Ubuntu menu bar</li>  
       <li>Navigate to the Documents folder </li>  
       <li>Double-click the hello2.txt file </li>  
   </ol>

* The commands you just entered created this text document

    * It includes the file name you selected, the text typed, and a “1” at the beginning of the line of text. The next few slides will examine why.

![alt text](<hello2.png>)

-------
# The sudo Command

* Allows an authorized user (one with root permissions) to temporarily elevate their privileges using their own password instead of having to know the password belonging to the built-in root account

* This command must be used to perform administrative tasks (e.g. adding a user account)

    * Example: To add “archimedes“ as a user on your system, type adduser archimedes and hit Enter

    * You will get the error message below because you have not authenticated yourself

    * Note: user names must be lower case

![alt text](<cyber.png>)

-------
# The sudo su Command

* The sudo su command is a variation of the sudo command

    * It tells the command line that you want to run all of the subsequent commands in your current session as root, so that you do not have to enter the sudo command and your password each time