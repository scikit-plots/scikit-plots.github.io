# [Lab 7: Shell Scripting](#id1)[#](#lab-7-shell-scripting "Link to this heading")

Shell scripting is an integral part of working with cloud computing. Many
components of cloud computing are 100% automated. These services must work
with minimal or no human interaction. Everything that we’ve done here
can be done using a shell script.

In Linux, many processes happen in the background on a set schedule.
Linux uses `cron` jobs.

* Cron is a time-based job scheduler in Unix-like computer operating
  systems.
* Cron enables users to schedule jobs (commands or shell scripts)
  that run periodically at certain times or dates.
* Cron job can run every minute, hour, day, week, month, or year
  or in any combination.

We are changing our focus from cloud-based services to working with Linux.
This lab requires working with the operating system to support the tools
instead of setting up a network or web service.

> * It is ****strongly recommended**** that you view the [Linux Tutorial](https://ryanstutorials.net/linuxtutorial/)
>   to give you an understanding of how Linux operates and some common
>   commands.

****Additional Resources****

* [Linux Tutorial](https://ryanstutorials.net/linuxtutorial/)
* [Shell Scripting Tutorial](https://www.shellscript.sh/)
* [Ryan's Bash Scripting Tutorial](https://ryanstutorials.net/bash-scripting-tutorial/bash-script.php)
* [A Beginners Guide To Cron Jobs](https://www.ostechnix.com/a-beginners-guide-to-cron-jobs/)

## [Goals for Lab 7](#id2)[#](#goals-for-lab-7 "Link to this heading")

During this lab, you will learn how to:

> 1. ****write**** basic shells scripts.
> 2. ****create**** an backup script for your Docker content.
> 3. ****automate**** the script to create backups on a schedule.

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/cloud-computing/7-scripting/overview.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.